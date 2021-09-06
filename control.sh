#!/usr/bin/env bash
## Author: SuperManito
## Modified: 2021-09-06

ShellDir=${JD_DIR}
. $ShellDir/share.sh

## 生成 pm2 list 日志，以此判断各服务状态
function List_All_Processes() {
    pm2 list | sed "/─/d" | perl -pe "{s| ||g; s#│#|#g}" | sed "1d" >$FilePm2List
}

## 更新源码
function Update_Shell() {
    local CurrentDir=$(pwd)
    cd $ShellDir
    git fetch --all >/dev/null 2>&1
    git pull >/dev/null 2>&1
    git reset --hard origin/$(git status | head -n 1 | awk -F ' ' '{print$NF}') >/dev/null 2>&1
    cd $CurrentDir
}

## 后台挂机功能
function Hang_Control() {
    local HangUpScripts="jd_cfd_loop.js"
    local ServiceName LastRunTime ExitStatus
    case $1 in
    up)
        for ScriptFiles in ${HangUpScripts}; do
            ExitStatus=""
            ServiceName=$(echo $ScriptFiles | perl -pe "{s|\.js||; s|\.py||; s|\.ts||}")
            ScriptFormt=$(echo $ScriptFiles | awk -F '\.' '{print$NF}')
            List_All_Processes
            cat $FilePm2List | awk -F '|' '{print$3}' | grep $ServiceName -wq
            ExitStatus=$?
            cd $ScriptsDir
            case $ScriptFiles in
            jd_cfd_loop.js)
                if [ -d "$ScriptsDir/.git" ]; then
                    git remote -v | grep "Aaron-lv/sync" -wq
                    if [ $? -ne 0 ]; then
                        echo -e "\n$WORKING 更新挂机活动脚本..."
                        wget -q --no-check-certificate ${GithubProxy}https://raw.githubusercontent.com/Aaron-lv/sync/jd_scripts/jd_cfd_loop.js -O "$ScriptsDir/jd_cfd_loop.js"
                    fi
                fi
                ;;
            esac
            if [ ! -f "$ScriptsDir/$ScriptFiles" ]; then
                echo -e "\n$ERROR $ScriptFiles 脚本不存在！\n"
                exit 1
            fi

            cat $FilePm2List | awk -F '|' '{print$3}' | grep "$ServiceName" -wq
            Import_Config $ScriptFiles
            Count_UserSum
            Combin_All
            pm2 stop $ServiceName >/dev/null 2>&1
            pm2 flush >/dev/null 2>&1
            pm2 delete $ScriptFiles >/dev/null 2>&1
            case $ScriptFormt in
            js)
                pm2 start -a $ScriptFiles --watch "$ScriptFiles" --name="$ServiceName"
                ;;
            ts)
                pm2 start -a $ScriptFiles --interpreter /usr/bin/ts-node --watch "$ScriptFiles" --name="$ServiceName"
                ;;
            esac
            if [[ $ExitStatus -eq 0 ]]; then
                echo -e "\n$COMPLETE $ServiceName 已重启\n"
            else
                echo -e "\n$SUCCESS $ServiceName 启动成功\n"
            fi
        done
        [ -f $FilePm2List ] && rm -rf $FilePm2List
        ;;
    down)
        for ScriptFiles in ${HangUpScripts}; do
            ServiceName=$(echo $ScriptFiles | perl -pe "{s|\.js||; s|\.py||; s|\.ts||}")
            List_All_Processes
            cat $FilePm2List | awk -F '|' '{print$3}' | grep $ServiceName -wq
            ExitStatus=$?
            if [[ $ExitStatus -eq 0 ]]; then
                pm2 stop $ServiceName
                LastRunTime=$(date --date "$(pm2 describe $ServiceName | grep "created at" | awk '{print $5}')")
                echo -e "\n$COMPLETE $ServiceName 已终止\n\033[34m[上次启动]\033[0m: ${LastRunTime}\n"
            else
                echo -e "\n$ERROR $ServiceName 不存在！\n"
            fi
        done
        [ -f $FilePm2List ] && rm -rf $FilePm2List
        ;;
    logs)
        echo -e "\n\033[32mTips\033[0m: 默认查看日志倒数 50 行的内容，日志会持续输出，Ctrl + C 退出查看，若想查看更多请执行 pm2 logs jd_cfd_loop --lines <行数> \n" && sleep 2
        pm2 logs jd_cfd_loop --lines 50
        ;;
    esac
}

## 控制面板和网页终端
function Panel_Control() {
    local ServiceStatus
    List_All_Processes
    cat $FilePm2List | awk -F '|' '{print$3}' | grep "server" -wq
    local ExitStatusSERVER=$?
    cat $FilePm2List | awk -F '|' '{print$3}' | grep "ttyd" -wq
    local ExitStatusTTYD=$?
    ## 开启/重启服务
    case $1 in
    on)
        if [[ ${ExitStatusSERVER} -eq 0 ]]; then
            local ServiceStatus=$(cat $FilePm2List | grep "server" -w | awk -F '|' '{print$10}')
            case ${ServiceStatus} in
            online)
                pm2 restart server
                echo -e "\n$COMPLETE 控制面板已重启\n"
                ;;
            stopped)
                pm2 start server
                echo -e "\n$COMPLETE 控制面板已启动\n"
                ;;
            errored)
                echo -e "\n$WORKING 检测到服务状态异常，开始尝试修复...\n"
                pm2 delete server
                Update_Shell
                cd $PanelDir
                npm install
                pm2 start ecosystem.config.js && sleep 3
                List_All_Processes
                local ServiceNewStatus=$(cat $FilePm2List | grep "server" -w | awk -F '|' '{print$10}')
                if [[ ${ServiceNewStatus} == "online" ]]; then
                    echo -e "\n$SUCCESS 修复成功！\n"
                else
                    echo -e "\n$ERROR 修复失败，请检查原因后重试！\n"
                fi
                ;;
            esac
        else
            Update_Shell && cd $PanelDir
            npm install
            pm2 start ecosystem.config.js && sleep 1
            List_All_Processes
            local ServiceStatus=$(cat $FilePm2List | grep "server" -w | awk -F '|' '{print$10}')
            if [[ ${ServiceStatus} == "online" ]]; then
                echo -e "\n$SUCCESS 控制面板启动成功\n"
            else
                echo -e "\n$ERROR 控制面板启动失败，请检查原因后重试！\n"
            fi
        fi
        if [[ ${ExitStatusTTYD} -eq 0 ]]; then
            ServiceStatus=$(pm2 describe ttyd | grep status | awk '{print $4}')
            case ${ServiceStatus} in
            online)
                pm2 restart ttyd
                echo -e "\n$COMPLETE 网页终端已重启\n"
                ;;
            stopped)
                pm2 start ttyd
                echo -e "\n$COMPLETE 网页终端已启动\n"
                ;;
            errored)
                echo -e "\n$WORKING 检测到服务状态异常，开始尝试修复...\n"
                pm2 delete ttyd
                Update_Shell && cd $ShellDir
                Install_WebTerminal && sleep 3
                List_All_Processes
                local ServiceNewStatus=$(cat $FilePm2List | grep "ttyd" -w | awk -F '|' '{print$10}')
                if [[ ${ServiceNewStatus} == "online" ]]; then
                    echo -e "\n$SUCCESS 修复成功！\n"
                else
                    echo -e "\n$ERROR 修复失败，请检查原因后重试！\n"
                fi
                ;;
            esac
        else
            Update_Shell && cd $ShellDir
            Install_WebTerminal && sleep 1
            List_All_Processes
            local ServiceStatus=$(cat $FilePm2List | grep "ttyd" -w | awk -F '|' '{print$10}')
            if [[ ${ServiceStatus} == "online" ]]; then
                echo -e "\n$SUCCESS 网页终端启动成功\n"
            else
                echo -e "\n$ERROR 网页终端启动失败，请检查原因后重试！\n"
            fi
        fi
        ;;
    ## 关闭服务
    off)
        if [[ ${ExitStatusSERVER} -eq 0 ]]; then
            pm2 stop server >/dev/null 2>&1
            if [[ ${ExitStatusTTYD} -eq 0 ]]; then
                pm2 stop ttyd >/dev/null 2>&1
            fi
            pm2 list
            echo -e "\n$COMPLETE 控制面板和网页终端已关闭\n"
        else
            echo -e "\n$ERROR 服务不存在！\n"
        fi
        ;;
    info)
        if [ ! -f $FileAuth ]; then
            cp -f $FileAuthSample $FileAuth
        fi
        echo ''
        cat $FileAuth | perl -pe '{s|\,|\n|g; s|["{}]||g; s|user:|[用户名]：|g; s|password:|[密码]：|g; s|cookieApiToken:|[更新接口Token]：|g; s|lastLoginInfo:|\n最后一次登录信息:\n|g; s|loginIp:|[IP地址]：|g; s|loginAddress:|[地理位置]：|g; s|loginTime:|[登录时间]：|g; s|authErrorCount:|[认证失败次数]：|g;}'
        echo -e '\n'
        ;;
    respwd)
        cp -f $FileAuthSample $FileAuth
        echo -e "\n$COMPLETE 已重置控制面板的用户名和登录密码\n\n[用户名]： admin\n[密  码]： admin\n"
        ;;
    esac
    [ -f $FilePm2List ] && rm -rf $FilePm2List
}

## 安装网页终端
function Install_WebTerminal() {
    [ ! -x /usr/bin/ttyd ] && apk --no-cache add -f ttyd
    ## 增加环境变量
    export PS1="\u@\h:\w $ "
    if [[ $(ifdata -p eth0 | awk -F ' ' '{print$1}') = "172.17.0.1" ]]; then
        pm2 start ttyd --name="ttyd" -- -p 7681 -t fontSize=17 -t disableLeaveAlert=true -t rendererType=webgl bash
    else
        pm2 start ttyd --name="ttyd" -- -t fontSize=17 -t disableLeaveAlert=true -t rendererType=webgl bash
    fi
}

## Telegram Bot
function Bot_Control() {
    case $Arch in
    armv7l | armv6l)
        echo -e "\n$ERROR 您的处理器架构不支持使用此功能，建议更换运行环境！"
        Help
        exit 1
        ;;
    *)
        if [[ -z $(grep -E "123456789" $ConfigDir/bot.json) ]]; then
            List_All_Processes
            cat $FilePm2List | awk -F '|' '{print$3}' | grep "jbot" -wq
            local ExitStatusJbot=$?
            case $1 in
            start)
                if [[ ${ExitStatusJbot} -eq 0 ]]; then
                    local ServiceStatus=$(cat $FilePm2List | grep "jbot" -w | awk -F '|' '{print$10}')
                    case ${ServiceStatus} in
                    online)
                        pm2 delete jbot >/dev/null 2>&1
                        cd $BotDir && pm2 start ecosystem.config.js && sleep 1
                        List_All_Processes
                        local ServiceNewStatus=$(cat $FilePm2List | grep "jbot" -w | awk -F '|' '{print$10}')
                        if [[ ${ServiceNewStatus} == "online" ]]; then
                            echo -e "\n$COMPLETE 已重启\n"
                        else
                            echo -e "\n$ERROR 重启失败，请检查原因后重试！\n"
                        fi
                        ;;
                    stopped)
                        pm2 stop jbot
                        List_All_Processes
                        local ServiceNewStatus=$(cat $FilePm2List | grep "jbot" -w | awk -F '|' '{print$10}')
                        if [[ ${ServiceNewStatus} == "online" ]]; then
                            echo -e "\n$COMPLETE 已启动\n"
                        else
                            echo -e "\n$ERROR 启动失败，请检查原因后重试！\n"
                        fi
                        ;;
                    errored)
                        echo -e "\n$WORKING 检测到服务状态异常，开始尝试修复...\n"
                        pm2 delete jbot
                        rm -rf $BotRepositoryDir $BotDir
                        Install_Bot
                        cp -rf $BotRepositoryDir/jbot $ShellDir
                        cd $BotDir && pm2 start ecosystem.config.js && sleep 1
                        List_All_Processes
                        local ServiceNewStatus=$(cat $FilePm2List | grep "jbot" -w | awk -F '|' '{print$10}')
                        if [[ ${ServiceNewStatus} == "online" ]]; then
                            echo -e "\n$SUCCESS 修复成功！\n"
                        else
                            echo -e "\n$ERROR 修复失败，请检查原因后重试！\n"
                        fi
                        ;;
                    esac
                else
                    rm -rf $BotRepositoryDir
                    Install_Bot
                    cp -rf $BotRepositoryDir/jbot $ShellDir
                    cd $BotDir && pm2 start ecosystem.config.js && sleep 1
                    local ServiceStatus=$(pm2 describe jbot | grep status | awk '{print $4}')
                    if [[ ${ServiceStatus} == "online" ]]; then
                        echo -e "\n$SUCCESS Telegram Bot 启动成功\n"
                    else
                        echo -e "\n$ERROR Telegram Bot 启动失败，请检查原因后重试！\n"
                    fi
                fi
                ;;
            stop)
                if [[ ${ExitStatusJbot} -eq 0 ]]; then
                    pm2 stop jbot >/dev/null 2>&1
                    pm2 list
                    echo -e "\n$COMPLETE Telegram Bot 已停止\n"
                else
                    echo -e "\n$ERROR 服务不存在！\n"
                fi
                ;;
            logs)
                if [[ -f $BotLogDir/run.log ]]; then
                    cat $BotLogDir/run.log | tail -n 100
                else
                    echo -e "\n$ERROR 日志不存在！"
                fi
                ;;
            esac
            [ -f $FilePm2List ] && rm -rf $FilePm2List
        else
            echo -e "\n$ERROR 请先在配置文件中配置好您的 BOT !"
            Help
            exit 1
        fi
        ;;
    esac
}

## 安装 Telegram Bot
function Install_Bot() {
    ## 安装依赖
    echo -e "\n$WORKING 开始安装依赖\n"
    apk --no-cache add -f python3-dev py3-pip zlib-dev gcc jpeg-dev musl-dev freetype-dev
    if [ $? -eq 0 ]; then
        echo -e "\n$SUCCESS 依赖安装完成\n"
    else
        echo -e "\n$ERROR 依赖安装失败，请检查原因后重试！\n"
    fi
    ## 拉取组件
    if [ -d $BotRepositoryDir/.git ]; then
        cd $BotRepositoryDir
        echo -e "$WORKING 开始更新仓库\n"
        git remote set-url origin ${BotRepositoryUrl} >/dev/null
        git reset --hard origin/main >/dev/null
        git fetch --all
        local ExitStatusBot=$?
        git reset --hard origin/main
        git pull
    else
        echo -e "$WORKING 开始克隆仓库...\n"
        rm -rf $BotRepositoryDir
        git clone -b main ${BotRepositoryUrl} $BotRepositoryDir
        local ExitStatusBot=$?
    fi
    if [[ ${ExitStatusBot} -eq 0 ]]; then
        echo -e "\n$SUCCESS 仓库更新完成\n"
        sed -i "s/script: \"python\"/script: \"python3\"/g" $BotRepositoryDir/jbot/ecosystem.config.js
    else
        echo -e "\n$ERROR 仓库更新失败，请检查原因后重试！\n"
    fi

    if [ ! -s $ConfigDir/bot.json ]; then
        cp -fv $ShellDir/sample/bot.json $ConfigDir/bot.json
    fi
    ## 安装模块
    echo -e "$WORKING 开始安装模块...\n"
    cp -rf $BotRepositoryDir/jbot $ShellDir
    cd $ShellDir/jbot
    pip3 config set global.index-url https://mirrors.aliyun.com/pypi/simple/
    pip3 --default-timeout=100 install -r requirements.txt --no-cache-dir
    if [[ $? -eq 0 ]]; then
        echo -e "\n$SUCCESS 模块安装完成\n"
    else
        echo -e "\n$ERROR 模块安装失败，请检查原因后重试！\n"
    fi
}

## 检测项目配置文件完整性
function Check_Files() {
    echo ''
    if [ -s $ListCrontabUser ]; then
        crontab $ListCrontabUser
    else
        cp -fv $ListCrontabSample $ListCrontabUser
        echo -e "检测到 $ConfigDir 目录下不存在 crontab.list 或存在但且为空，已生成...\n"
        crontab $ListCrontabUser
    fi
    if [ ! -s $FileConfUser ]; then
        cp -fv $FileConfSample $FileConfUser
        echo -e "检测到 $ConfigDir 目录下不存在 config.sh 配置文件，已生成...\n"
    fi
    JsonFiles="auth.json bot.json account.json account.db"
    for file in $JsonFiles; do
        if [ ! -s "$ConfigDir/$file" ]; then
            cp -fv "$SampleDir/$file" "$ConfigDir/$file"
            echo -e "检测到 $ConfigDir 配置文件目录下不存在 $file ，已生成...\n"
        fi
    done
}

## 列出各服务状态
function Server_Status() {
    local Services ServiceName StatusJudge Status CreateTime CPUOccupancy MemoryOccupancy RunTime
    local SERVICE_ONLINE="\033[32m正在运行\033[0m"
    local SERVICE_STOPPED="\033[33m未在运行\033[0m"
    local SERVICE_ERRORED="\033[31m服务异常\033[0m"
    echo ''
    pm2 list
    echo ''
    List_All_Processes
    Services="server ttyd jd_cfd_loop jbot"
    for p in $Services; do
        ServiceName=''
        StatusJudge=''
        Status=''
        CreateTime=''
        CPUOccupancy=''
        MemoryOccupancy=''
        RunTime=''
        cat $FilePm2List | awk -F '|' '{print$3}' | grep $p -wq
        if [ $? -eq 0 ]; then
            StatusJudge=$(cat $FilePm2List | grep $p | awk -F '|' '{print $10}')
            case $StatusJudge in
            online)
                Status=$SERVICE_ONLINE
                ;;
            stopped)
                Status=$SERVICE_STOPPED
                ;;
            errored)
                Status=$SERVICE_ERRORED
                ;;
            esac
            CreateTime="\033[34m$(date --date "$(pm2 describe $p | grep "created at" | awk '{print $5}')")\033[0m"
            CPUOccupancy="\033[34m$(cat $FilePm2List | grep $p | awk -F '|' '{print $11}')\033[0m"
            MemoryOccupancy="\033[34m$(cat $FilePm2List | grep $p | awk -F '|' '{print $12}')\033[0m"
            RunTime="\033[34m$(cat $FilePm2List | grep $p | awk -F '|' '{print $8}')\033[0m"
        else
            Status=$SERVICE_STOPPED
            CreateTime="\033[34m          No Data           \033[0m"
            CPUOccupancy="\033[34mNo Data\033[0m"
            MemoryOccupancy="\033[34mNo Data\033[0m"
            RunTime="\033[34mNo Data\033[0m"
        fi
        case $p in
        server)
            ServiceName="[控ㅤ制ㅤ面ㅤ板]"
            ;;
        ttyd)
            ServiceName="[网ㅤ页ㅤ终ㅤ端]"
            ;;
        jd_cfd_loop)
            ServiceName="[挂ㅤ机ㅤ程ㅤ序]"
            ;;
        jbot)
            ServiceName="[ Telegram Bot ]"
            ;;
        esac
        echo -e " $ServiceName：$Status       [创建时间]：$CreateTime       [资源占用]：$CPUOccupancy / $MemoryOccupancy / $RunTime"
    done
    [ -f $FilePm2List ] && rm -rf $FilePm2List
    echo ''
}

## 处理环境软件包和模块
function Environment_Deployment() {
    case $1 in
    install)
        echo -e '\n\033[32mTips:\033[0m 忽略 \033[33m[WARN]\033[0m 警告类输出内容，如有 \033[31m[ERR!]\033[0m 类报错，90% 都是由网络原因所导致的，自行解读日志。\n'
        npm install -g npm npm-install-peers
        case $Arch in
        armv7l | armv6l)
            npm install -g date-fns axios require request fs crypto-js crypto dotenv png-js tough-cookie got
            ;;
        *)
            npm install -g ts-node typescript @types/node ts-md5 tslib date-fns axios require request fs crypto-js crypto dotenv png-js tough-cookie got
            apk --no-cache add -f python3 py3-pip sudo build-base pkgconfig pixman-dev cairo-dev pango-dev
            pip3 config set global.index-url https://mirrors.aliyun.com/pypi/simple/
            pip3 install --upgrade pip
            pip3 install requests
            ;;
        esac
        echo ''
        ;;
    repairs)
        echo -e "\n$WORKING 开始暴力修复 npm ...\n"
        apk del -f nodejs-lts npm
        apk --no-cache add -f nodejs-lts npm
        echo -e "\n$SUCCESS 修复完成\n"
        ;;
    esac
}

## 判定命令
case $# in
0)
    Help
    ;;
1)
    echo -e "\n$COMMAND_ERROR"
    Help
    ;;
2)
    case $2 in
    on | off)
        case $1 in
        panel)
            Panel_Control $2
            ;;
        *)
            echo -e "\n$COMMAND_ERROR"
            Help
            ;;
        esac
        ;;
    up | down)
        case $1 in
        hang)
            Hang_Control $2
            ;;
        *)
            echo -e "\n$COMMAND_ERROR"
            Help
            ;;
        esac
        ;;
    start | stop)
        case $1 in
        jbot)
            Bot_Control $2
            ;;
        *)
            echo -e "\n$COMMAND_ERROR"
            Help
            ;;
        esac
        ;;
    logs)
        case $1 in
        hang)
            Hang_Control $2
            ;;
        jbot)
            Bot_Control $2
            ;;
        *)
            echo -e "\n$COMMAND_ERROR"
            Help
            ;;
        esac
        ;;
    status)
        case $1 in
        server)
            Server_Status
            ;;
        *)
            echo -e "\n$COMMAND_ERROR"
            Help
            ;;
        esac
        ;;
    info | respwd)
        case $1 in
        panel)
            Panel_Control $2
            ;;
        *)
            echo -e "\n$COMMAND_ERROR"
            Help
            ;;
        esac
        ;;
    install | repairs)
        case $1 in
        env)
            Environment_Deployment $2
            ;;
        *)
            echo -e "\n$COMMAND_ERROR"
            Help
            ;;
        esac
        ;;
    files)
        case $1 in
        check)
            Check_Files
            ;;
        *)
            echo -e "\n$COMMAND_ERROR"
            Help
            ;;
        esac
        ;;

    *)
        echo -e "\n$COMMAND_ERROR"
        Help
        ;;
    esac
    ;;
*)
    echo -e "\n$TOO_MANY_COMMANDS"
    Help
    ;;
esac
