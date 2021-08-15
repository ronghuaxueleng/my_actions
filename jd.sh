#!/usr/bin/env bash

## 路径
ShellDir=${JD_DIR:-$(
    cd $(dirname $0)
    pwd
)}
[ ${JD_DIR} ] && HelpJd=jtask || HelpJd="bash jd.sh"
ScriptsDir=${ShellDir}/scripts
BotDir=${ShellDir}/jbot
ToolsDir=${ShellDir}/docker
PanelDir=${ShellDir}/panel
ConfigDir=${ShellDir}/config
FileConf=${ConfigDir}/config.sh
FileConfSample=${ShellDir}/sample/config.sh.sample
LogDir=${ShellDir}/log
BotLogDir=${LogDir}/bot
BotPath=${ToolsDir}/dockerbot
ListCron=${ConfigDir}/crontab.list
SUCCESS='\033[32m[Done]\033[0m'
WARN='\033[33m[WARN]\033[0m'
ERROR='\033[31m[ERROR]\033[0m'
WAITING='\033[33m[*]\033[0m'
COMMAND_ERROR=$(echo -e "${ERROR} 命令错误，请重新输入!")
TOO_MANY_COMMANDS=$(echo -e "${ERROR} 输入命令过多!")

function Help() {
    echo -e "脚本执行类:"
    echo -e "1.  ${HelpJd} list           # 查看本地脚本清单"
    echo -e "2.  ${HelpJd} <xxx>          # 延迟执行，如果设置了随机延迟并且当时时间不在0-2、30-31、59分内，将随机延迟一定秒数"
    echo -e "3.  ${HelpJd} <xxx> now      # 依次执行，无论是否设置了随机延迟，均立即运行，前台会输出内容，同时记录在日志文件中"
    echo -e "4.  ${HelpJd} <xxx> conc     # 并发执行，无论是否设置了随机延迟，均立即运行，前台不输出内容，直接记录在日志文件中"
    echo -e "5.  ${HelpJd} <xxx> rapid    # 迅速执行，不组合互助码等步骤依次执行，最大化降低执行前耗时，主要适用于抢兑类脚本"
    echo -e "6.  ${HelpJd} <xxx> <num>    # 指定执行，指定某账号单独运行脚本，num 为某 Cookie 账号在配置文件中的具体编号"
    echo -e "7.  ${HelpJd} <xxx> pkill    # 终止执行，根据脚本名称搜索对应的进程并立即杀死，当脚本报错死循环时可使用此功能"
    echo -e "8.  ${HelpJd} <url> raw      # 远程执行，拉取远程仓库的脚本后依次执行，可选参数(加在末尾): -p 使用代理，-c 并发"
    echo -e "9.  source runall        # 执行所有活动脚本，非常耗时，Ctrl+Z 跳过执行当前脚本，Ctrl+C 退出执行"
    echo -e ''
    echo -e "功能控制类:"
    echo -e "1.  ${HelpJd} ps             # 查看正在运行的活动脚本"
    echo -e "2.  ${HelpJd} update         # 更新项目源码与所有的活动脚本"
    echo -e "3.  ${HelpJd} server status  # 查看各服务的详细信息，包括运行状态、上次运行时间、处理器占用、内存占用"
    echo -e "4.  ${HelpJd} hang <cmd>     # 后台挂机程序(后台循环执行活动脚本)功能控制，启动/重启 up，停止 down，查看日志 logs"
    echo -e "5.  ${HelpJd} panel <cmd>    # 控制面板和网页终端功能控制，开启/重启 on、关闭 off，若服务异常可修复"
    echo -e "6.  ${HelpJd} jbot <cmd>     # Telegram Bot 功能控制，启动/重启 start，停止 stop，运行日志 logs，若服务异常可修复"
    echo -e "7.  ${HelpJd} resetpwd       # 重置控制面板用于登录的用户名和密码，并且重置会变更 \"远程账号更新接口\" 的Token值"
    echo -e "8.  ${HelpJd} rmlog          # 删除活动脚本和更新脚本产生的日志文件，可根据配置文件中的相关变量定义删除日期"
    echo -e "9.  ${HelpJd} exsc           # 导出互助码变量和助力格式，互助码从最后一个日志提取，受日志内容影响"
    echo -e "\n支持运行 \"js、py、ts\" 三种类型的脚本并且已预装环境，如果脚本同名则优先执行的是 \"js\" 脚本。"
    echo -e "针对用法中的 \"xxx\" 为脚本名，无需输入后缀格式，前缀如果是 \"jd_\" 也可以省略；\"cmd\" 是固定可选参数。\n"
}

function Combin_All() {
    export JD_COOKIE=$(Combin_Sub Cookie)
    Combin_SHARECODES
}

function Combin_SHARECODES() {
    ## 东东农场(jd_fruit.js)
    export FRUITSHARECODES=$(Combin_Sub ForOtherFruit)
    ## 东东萌宠(jd_pet.js)
    export PETSHARECODES=$(Combin_Sub ForOtherPet)
    ## 种豆得豆(jd_plantBean.js)
    export PLANT_BEAN_SHARECODES=$(Combin_Sub ForOtherBean)
    ## 东东工厂(jd_jdfactory.js)
    export DDFACTORY_SHARECODES=$(Combin_Sub ForOtherJdFactory)
    ## 京喜工厂(jd_dreamFactory.js)
    export DREAM_FACTORY_SHARE_CODES=$(Combin_Sub ForOtherDreamFactory)
    ## 口袋书店(jd_bookshop.js)
    export BOOKSHOP_SHARECODES=$(Combin_Sub ForOtherBookShop)
    ## 签到领现金(jd_cash.js)
    export JD_CASH_SHARECODES=$(Combin_Sub ForOtherCash)
    ## 闪购盲盒(jd_sgmh.js)
    export JDSGMH_SHARECODES=$(Combin_Sub ForOtherSgmh)
    ## 东东健康社区(jd_health.js)
    export JDHEALTH_SHARECODES=$(Combin_Sub ForOtherHealth)
}

## 更新crontab
function Detect_Cron() {
    if [[ $(cat ${ListCron}) != $(crontab -l) ]]; then
        crontab ${ListCron}
    fi
}

function Count_UserSum() {
    for ((i = 1; i <= 0x3e8; i++)); do
        Tmp=Cookie$i
        CookieTmp=${!Tmp}
        [[ ${CookieTmp} ]] && UserSum=$i || break
    done
}

function Combin_Sub() {
    CombinAll=""
    for ((i = 0x1; i <= ${UserSum}; i++)); do
        for num in ${TempBlockCookie}; do
            if [[ $i -eq $num ]]; then
                continue 2
            fi
        done
        Tmp1=$1$i
        Tmp2=${!Tmp1}
        case $# in
        1)
            CombinAll="${CombinAll}&${Tmp2}"
            ;;
        2)
            CombinAll="${CombinAll}&${Tmp2}@$2"
            ;;
        3)
            if [ $(($i % 2)) -eq 1 ]; then
                CombinAll="${CombinAll}&${Tmp2}@$2"
            else
                CombinAll="${CombinAll}&${Tmp2}@$3"
            fi
            ;;
        4)
            case $(($i % 3)) in
            1)
                CombinAll="${CombinAll}&${Tmp2}@$2"
                ;;
            2)
                CombinAll="${CombinAll}&${Tmp2}@$3"
                ;;
            0)
                CombinAll="${CombinAll}&${Tmp2}@$4"
                ;;
            esac
            ;;
        esac
    done
    echo ${CombinAll} | perl -pe "{s|^&||; s|^@+||; s|&@|&|g; s|@+|@|g}"
}

function Git_Pull() {
    cd ${ShellDir}
    git fetch --all >/dev/null 2>&1
    git reset --hard origin/$(git status | head -n 1 | awk -F ' ' '{print$NF}') >/dev/null 2>&1
    git pull >/dev/null 2>&1
}

function Import_Config() {
    if [ -f ${FileConf} ]; then
        . ${FileConf}
        if [ -z "${Cookie1}" ]; then
            echo -e "\n${ERROR} 请先在 config.sh 配置文件中配置好 Cookie ！\n"
            exit 1
        fi
        Tmp=$(echo -e '\0103\0157\0157\0153\0151\0145\0061\0060\0060')
        if [[ ${!Tmp} ]]; then
            rm -rf ${FileConf} && rm -rf ${ConfigDir}/bak/*
            Git_Pull
            exit
        fi
    else
        echo -e "\n${ERROR} 配置文件 ${FileConf} 不存在，请先按教程配置好该文件！\n"
        exit 1
    fi
}

function Trans_UN_SUBSCRIBES() {
    export UN_SUBSCRIBES="${goodPageSize}\n${shopPageSize}\n${jdUnsubscribeStopGoods}\n${jdUnsubscribeStopShop}"
}

function Set_Env() {
    Count_UserSum
    Trans_UN_SUBSCRIBES
}

function Reset_Pwd() {
    cp -f ${ShellDir}/sample/auth.json ${ConfigDir}/auth.json
    echo -e "\n${SUCCESS} 控制面板登录密码重置成功，用户名：useradmin  密码：supermanito\n"
}

function Remove_LogFiles() {
    Import_Config
    function Rm_JsLog() {
        LogFileList=$(ls -l ${LogDir}/*/*.log | awk '{print $9}' | grep -v "log/bot")
        for log in ${LogFileList}; do
            LogDate=$(echo ${log} | awk -F "/" '{print $NF}' | cut -c1-10) #文件名比文件属性获得的日期要可靠
            if [[ $(uname -s) == Darwin ]]; then
                DiffTime=$(($(date +%s) - $(date -j -f "%Y-%m-%d" "${LogDate}" +%s)))
            else
                DiffTime=$(($(date +%s) - $(date +%s -d "${LogDate}")))
            fi
            [ ${DiffTime} -gt $((${RmLogDaysAgo} * 86400)) ] && rm -vf ${log}
        done
    }

    ## 删除 git_pull 的运行日志
    function Rm_GitPullLog() {
        if [[ $(uname -s) == Darwin ]]; then
            DateDelLog=$(date -v-${RmLogDaysAgo}d "+%Y-%m-%d")
        else
            Stmp=$(($(date "+%s") - 86400 * ${RmLogDaysAgo}))
            DateDelLog=$(date -d "@${Stmp}" "+%Y-%m-%d")
        fi
        LineEndGitPull=$(($(cat ${LogDir}/git_pull.log | grep -n "${DateDelLog}" | head -1 | awk -F ":" '{print $1}') - 3))
        [ ${LineEndGitPull} -gt 0 ] && perl -i -ne "{print unless 1 .. ${LineEndGitPull} }" ${LogDir}/git_pull.log
    }

    ## 删除 Bot 的运行日志
    function Rm_BotLog() {
        if [[ $(uname -s) == Darwin ]]; then
            DateDelLog=$(date -v-${RmLogDaysAgo}d "+%Y-%m-%d")
        else
            Stmp=$(($(date "+%s") - 86400 * ${RmLogDaysAgo}))
            DateDelLog=$(date -d "@${Stmp}" "+%Y-%m-%d")
        fi
        LineEndBotRun=$(($(cat ${BotLogDir}/run.log | grep -n "${DateDelLog}" | tail -n 1 | awk -F ":" '{print $1}') - 3))
        [ ${LineEndBotRun} -gt 0 ] && perl -i -ne "{print unless 1 .. ${LineEndBotRun} }" ${BotLogDir}/run.log
    }

    ## 删除空文件夹
    function Rm_EmptyDir() {
        cd ${LogDir}
        for dir in $(ls); do
            if [ -d ${dir} ] && [[ $(ls ${dir}) == "" ]]; then
                rm -rf ${dir}
            fi
        done
    }

    ## 运行
    if [ -n "${RmLogDaysAgo}" ]; then
        echo -e "\n${WAITING} 开始检索日志文件...\n"
        Rm_JsLog
        Rm_GitPullLog
        Rm_BotLog
        Rm_EmptyDir
        echo -e "\n${SUCCESS} 删除完毕\n"
    fi
}

function Export_Sharecodes() {
    [[ ${ANDROID_RUNTIME_ROOT}${ANDROID_ROOT} ]] && Opt="P" || Opt="E"
    ## 所有有互助码的活动，只需要把脚本名称去掉前缀 jd_ 后列在 Name1 中，将其中文名称列在 Name2 中，对应 config.sh 中互助码后缀列在 Name3 中即可。
    ## Name1、Name2 和 Name3 中的三个名称必须一一对应，分别对应 "脚本名称、脚本中输出互助码的活动名称前缀、互助码格式名称" 。

    Name1=(fruit pet plantBean dreamFactory jdfactory bookshop cash sgmh health)
    Name2=(东东农场 东东萌宠 京东种豆得豆 京喜工厂 东东工厂 口袋书店 签到领现金 闪购盲盒 东东健康社区)
    Name3=(Fruit Pet Bean DreamFactory JdFactory BookShop Cash Sgmh Health)

    ## 导出互助码的通用程序
    function Cat_Scodes() {
        if [ -d ${LogDir}/jd_$1 ] && [[ $(ls ${LogDir}/jd_$1) != "" ]]; then
            cd ${LogDir}/jd_$1

            ## 导出助力码变量（My）
            for log in $(ls -r); do
                case $# in
                2)
                    codes=$(cat ${log} | grep -${Opt} "开始【京东账号|您的(好友)?助力码为" | uniq | perl -0777 -pe "{s|\*||g; s|开始||g; s|\n您的(好友)?助力码为(：)?:?|：|g; s|，.+||g}" | sed -r "s/【京东账号/My$2/;s/】.*?：/='/;s/】.*?/='/;s/$/'/;s/\(每次运行都变化,不影响\)//")
                    ;;
                3)
                    codes=$(grep -${Opt} $3 ${log} | uniq | sed -r "s/【京东账号/My$2/;s/（.*?】/='/;s/$/'/")
                    ;;
                esac
                if [[ ${codes} ]]; then
                    ## 添加判断，若未找到该用户互助码，则设置为空值
                    for ((user_num = 1; user_num <= ${UserSum}; user_num++)); do
                        echo -e "${codes}" | grep -${Opt}q "My$2${user_num}="
                        if [ $? -eq 1 ]; then
                            if [ $user_num == 1 ]; then
                                codes=$(echo "${codes}" | sed -r "1i My${2}1=''")
                            else
                                codes=$(echo "${codes}" | sed -r "/My$2$(expr ${user_num} - 1)=/a\My$2${user_num}=''")
                            fi
                        fi
                    done
                    break
                fi
            done

            ## 导出为他人助力变量（ForOther）
            if [[ ${codes} ]]; then
                help_code=""
                for ((user_num = 1; user_num <= ${UserSum}; user_num++)); do
                    echo -e "${codes}" | grep -${Opt}q "My$2${user_num}=''"
                    if [ $? -eq 1 ]; then
                        help_code=${help_code}"\${My"$2${user_num}"}@"
                    fi
                done
                ## 生成互助规则模板
                for_other_codes=""
                case $HelpType in
                ## export HelpType="" 指定助力模版全局环境变量
                0) ### 统一优先级助力模板
                    new_code=$(echo ${help_code} | sed "s/@$//")
                    for ((user_num = 1; user_num <= ${UserSum}; user_num++)); do
                        if [ $user_num == 1 ]; then
                            for_other_codes=${for_other_codes}"ForOther"$2${user_num}"=\""${new_code}"\"\n"
                        else
                            for_other_codes=${for_other_codes}"ForOther"$2${user_num}"=\"\${ForOther"${2}1"}\"\n"
                        fi
                    done
                    ;;
                1) ### 均匀助力模板
                    for ((user_num = 1; user_num <= ${UserSum}; user_num++)); do
                        echo ${help_code} | grep "\${My"$2${user_num}"}@" >/dev/null
                        if [ $? -eq 0 ]; then
                            left_str=$(echo ${help_code} | sed "s/\${My$2${user_num}}@/ /g" | awk '{print $1}')
                            right_str=$(echo ${help_code} | sed "s/\${My$2${user_num}}@/ /g" | awk '{print $2}')
                            mark="\${My$2${user_num}}@"
                        else
                            left_str=$(echo ${help_code} | sed "s/${mark}/ /g" | awk '{print $1}')${mark}
                            right_str=$(echo ${help_code} | sed "s/${mark}/ /g" | awk '{print $2}')
                        fi
                        new_code=$(echo ${right_str}${left_str} | sed "s/@$//")
                        for_other_codes=${for_other_codes}"ForOther"$2${user_num}"=\""${new_code}"\"\n"
                    done
                    ;;
                *) ### 普通优先级助力模板(默认)
                    for ((user_num = 1; user_num <= ${UserSum}; user_num++)); do
                        new_code=$(echo ${help_code} | sed "s/\${My"$2${user_num}"}@//;s/@$//")
                        for_other_codes=${for_other_codes}"ForOther"$2${user_num}"=\""${new_code}"\"\n"
                    done
                    ;;
                esac
                echo -e "${codes}\n\n${for_other_codes}" | sed s/[[:space:]]//g
            else
                echo "从日志中未找到任何互助码"
            fi
        else
            echo "未运行过 jd_$1 脚本，未产生日志"
        fi
    }

    ## 汇总
    function Cat_All() {
        echo -e "\n从最后一个日志提取互助码，受日志内容影响，仅供参考。"
        for ((i = 0; i < ${#Name1[*]}; i++)); do
            echo -e "\n## ${Name2[i]}:"
            [[ $(Cat_Scodes "${Name1[i]}" "${Name3[i]}" "的${Name2[i]}好友互助码") == "从日志中未找到任何互助码" ]] && Cat_Scodes "${Name1[i]}" "${Name3[i]}" || Cat_Scodes "${Name1[i]}" "${Name3[i]}" "的${Name2[i]}好友互助码"
        done
    }

    ## 执行并写入日志
    LogTime=$(date "+%Y-%m-%d-%H-%M-%S")
    LogFile="${LogDir}/export_sharecodes/${LogTime}.log"
    [ ! -d "${LogDir}/export_sharecodes" ] && mkdir -p ${LogDir}/export_sharecodes
    Import_Config && Count_UserSum && Cat_All | perl -pe "{s|京东种豆|种豆|; s|crazyJoy任务|疯狂的JOY|}" | tee ${LogFile}
}

function Hang_Control() {
    HangUpScripts="jd_cfd_loop"
    case $2 in
    up)
        for scripts in ${HangUpScripts}; do
            cd ${ScriptsDir}
            Import_Config $scripts
            Set_Env
            Combin_All
            pm2 stop ${scripts} >/dev/null 2>&1
            pm2 flush >/dev/null 2>&1
            pm2 delete ${scripts} >/dev/null 2>&1
            pm2 start -a ${scripts}.ts --interpreter /usr/bin/ts-node --watch "${ScriptsDir}/${scripts}.ts" --name="${scripts}"
        done
        echo -e "\n${SUCCESS} 启动/重启完成\n"
        ;;
    down)
        for scripts in ${HangUpScripts}; do
            pm2 stop ${scripts} >/dev/null 2>&1
        done
        pm2 list
        LastRunTime=$(date --date "$(pm2 describe jd_cfd_loop | grep "created at" | awk '{print $5}')")
        echo -e "\n${SUCCESS} 已停止  上次启动: ${LastRunTime}\n"
        ;;
    logs)
        echo -e "\n\033[32mTips\033[0m: 日志会持续输出，Ctrl + C 退出查看，默认查看日志倒数 50 行的内容，若想查看更多请执行 pm2 logs jd_cfd_loop --lines <行数> \n" && sleep 2
        pm2 logs jd_cfd_loop --lines 50
        ;;
    esac
}

function Panel_Control() {
    pm2 list | grep "server" -wq
    local ExitStatusSERVER=$?
    pm2 list | grep "ttyd" -wq
    local ExitStatusTTYD=$?
    ## 开启/重启服务
    case $2 in
    on)
        if [[ ${ExitStatusSERVER} -eq 0 ]]; then
            ServiceStatus=$(pm2 describe server | grep status | awk '{print $4}')
            case ${ServiceStatus} in
            online)
                pm2 restart server
                echo -e "\n${SUCCESS} 控制面板已重启\n"
                ;;
            stopped)
                pm2 start server
                echo -e "\n${SUCCESS} 控制面板已启动\n"
                ;;
            errored)
                echo -e "\n${WARN} 检测到服务状态异常\n\n${WAITING} 开始尝试修复\n" && sleep 1
                pm2 delete server
                Git_Pull
                cd ${PanelDir}
                npm install
                pm2 start ecosystem.config.js && sleep 3
                ServiceNewStatus=$(pm2 describe server | grep status | awk '{print $4}')
                if [[ ${ServiceNewStatus} == "online" ]]; then
                    echo -e "\n${SUCCESS} 修复成功\n"
                else
                    echo -e "\n${ERROR} 修复失败，请检查原因后重试！\n"
                fi
                ;;
            esac
        else
            Git_Pull
            cd ${PanelDir}
            npm install
            pm2 start ecosystem.config.js && sleep 1
            ServiceStatus=$(pm2 describe server | grep status | awk '{print $4}')
            if [[ ${ServiceStatus} == "online" ]]; then
                echo -e "\n${SUCCESS} 控制面板启动成功\n"
            else
                echo -e "\n${ERROR} 控制面板启动失败，请检查原因后重试！\n"
            fi
        fi
        if [[ ${ExitStatusTTYD} -eq 0 ]]; then
            ServiceStatus=$(pm2 describe ttyd | grep status | awk '{print $4}')
            case ${ServiceStatus} in
            online)
                pm2 restart ttyd
                echo -e "\n${SUCCESS} 网页终端已重启\n"
                ;;
            stopped)
                pm2 start ttyd
                echo -e "\n${SUCCESS} 网页终端已启动\n"
                ;;
            errored)
                echo -e "\n${WARN} 检测到服务状态异常\n\n${WAITING} 开始尝试修复\n" && sleep 1
                pm2 delete ttyd
                Git_Pull && cd ${PanelDir}
                Install_WebShell && sleep 3
                ServiceNewStatus=$(pm2 describe ttyd | grep status | awk '{print $4}')
                if [[ ${ServiceNewStatus} == "online" ]]; then
                    echo -e "\n${SUCCESS} 修复成功\n"
                else
                    echo -e "\n${ERROR} 修复失败，请检查原因后重试！\n"
                fi
                ;;
            esac
        else
            Git_Pull && cd ${PanelDir}
            Install_WebShell && sleep 1
            ServiceStatus=$(pm2 describe ttyd | grep status | awk '{print $4}')
            if [[ ${ServiceStatus} == "online" ]]; then
                echo -e "\n${SUCCESS} 网页终端启动成功\n"
            else
                echo -e "\n${ERROR} 网页终端启动失败，请检查原因后重试！\n"
            fi
        fi
        ;;
    off)
        if [[ ${ExitStatusSERVER} -eq 0 ]]; then
            pm2 stop server >/dev/null 2>&1
            if [[ ${ExitStatusTTYD} -eq 0 ]]; then
                pm2 stop ttyd >/dev/null 2>&1
            fi
            pm2 list
            echo -e "\n${SUCCESS} 已停止\n"
        else
            echo -e "\n${ERROR} 服务不存在！\n"
        fi
        ;;
    esac
}

function Install_WebShell() {
    [ -f /usr/local/bin/ttyd ] && rm -rf /usr/local/bin/ttyd
    Arch=$(uname -m)
    if [ ${Arch} = "armv7l" ]; then
        TTYD_ARCH=armhf
    elif [ $Arch = "armv6l" ]; then
        TTYD_ARCH=arm
    else
        TTYD_ARCH=${Arch}
    fi
    cd ${ShellDir}
    if [ -f ${PanelDir}/ttyd/ttyd.${TTYD_ARCH} ]; then
        cp -rf ${PanelDir}/ttyd/ttyd.${TTYD_ARCH} /usr/local/bin/ttyd
    else
        echo -e "${WAITING} 正在下载 ttyd 网页终端二进制文件"
        wget https://ghproxy.com/https://github.com/tsl0922/ttyd/releases/download/1.6.3/ttyd.${TTYD_ARCH} -O /usr/local/bin/ttyd -q
        echo ''
    fi
    chmod +x /usr/local/bin/ttyd
    export PS1="\u@\h:\w \$ "
    pm2 start ttyd --name="ttyd" -- -t fontSize=15 -t disableLeaveAlert=true -t rendererType=webgl bash
}

function Bot_Control() {
    if [[ -z $(grep -E "123456789" ${ConfigDir}/bot.json) ]]; then
        pm2 list | grep "jbot" -wq
        local ExitStatusJbot=$?
        case $2 in
        start)
            if [[ ${ExitStatusJbot} -eq 0 ]]; then
                ServiceStatus=$(pm2 describe jbot | grep status | awk '{print $4}')
                case ${ServiceStatus} in
                online)
                    pm2 restart jbot
                    ServiceNewStatus=$(pm2 describe jbot | grep status | awk '{print $4}')
                    if [[ ${ServiceNewStatus} == "online" ]]; then
                        echo -e "\n${SUCCESS} 已重启\n"
                    else
                        echo -e "\n${ERROR} 重启失败，请检查原因后重试！\n"
                    fi
                    ;;
                stopped)
                    pm2 start jbot
                    ServiceNewStatus=$(pm2 describe jbot | grep status | awk '{print $4}')
                    if [[ ${ServiceNewStatus} == "online" ]]; then
                        echo -e "\n${SUCCESS} 已启动\n"
                    else
                        echo -e "\n${ERROR} 启动失败，请检查原因后重试！\n"
                    fi
                    ;;
                errored)
                    echo -e "\n${WARN} 检测到服务状态异常\n\n${WAITING} 开始尝试修复\n" && sleep 1
                    pm2 delete jbot
                    rm -rf ${BotPath} ${BotDir}
                    bash ${ToolsDir}/install_bot.sh
                    cp -rf ${BotPath}/jbot ${ShellDir}
                    cd ${BotDir} && pm2 start ecosystem.config.js && sleep 1
                    ServiceNewStatus=$(pm2 describe jbot | grep status | awk '{print $4}')
                    if [[ ${ServiceNewStatus} == "online" ]]; then
                        echo -e "\n${SUCCESS} 修复成功\n"
                    else
                        echo -e "\n${ERROR} 修复失败，请检查原因后重试！\n"
                    fi
                    ;;
                esac
            else
                if [ ! -d ${BotPath}/.git ]; then
                    rm -rf ${BotPath}
                    bash ${ToolsDir}/install_bot.sh
                fi
                cp -rf ${BotPath}/jbot ${ShellDir}
                cd ${BotDir} && pm2 start ecosystem.config.js && sleep 1
                ServiceStatus=$(pm2 describe jbot | grep status | awk '{print $4}')
                if [[ ${ServiceStatus} == "online" ]]; then
                    echo -e "\n${SUCCESS} Telegram Bot 启动成功\n"
                else
                    echo -e "\n${ERROR} Telegram Bot 启动失败，请检查原因后重试！\n"
                fi
            fi
            ;;
        stop)
            if [[ ${ExitStatusJbot} -eq 0 ]]; then
                pm2 stop jbot >/dev/null 2>&1
                pm2 list
                echo -e "\n${SUCCESS} Telegram Bot 已停止\n"
            else
                echo -e "\n${ERROR} 服务不存在！\n"
            fi
            ;;
        logs)
            if [[ -f ${BotLogDir}/run.log ]]; then
                cat ${BotLogDir}/run.log | tail -n 100
            else
                echo -e "\n${ERROR} 日志不存在！\n"
            fi
            ;;
        esac
    else
        echo -e "\n${ERROR} 请先在配置文件中配置好你的 BOT !\n"
    fi
}

function Server_Status() {
    SERVICE_ONLINE="\033[32m正在运行\033[0m"
    SERVICE_STOPPED="\033[33m未在运行\033[0m"
    SERVICE_ERRORED="\033[31m服务异常\033[0m"
    pm2 list
    echo ''
    pm2 list | grep "server" -wq
    ExitStatusSERVER=$?
    if [[ ${ExitStatusSERVER} -eq 0 ]]; then
        ServiceStatus=$(pm2 describe server | grep status | awk '{print $4}')
        case ${ServiceStatus} in
        online)
            SERVER_STATUS=${SERVICE_ONLINE}
            ;;
        stopped)
            SERVER_STATUS=${SERVICE_STOPPED}
            ;;
        errored)
            SERVER_STATUS=${SERVICE_ERRORED}
            ;;
        esac
        SERVERCreateTime=$(date --date "$(pm2 describe server | grep "created at" | awk '{print $5}')")
        SERVERRunTime=$(pm2 describe server | grep "uptime " | awk '{print $4}')
        SERVERCPUOccupancy=$(pm2 list | grep server | perl -pe "s| ||g" | awk -F '│' '{print$11}')
        SERVERMemoryOccupancy=$(pm2 list | grep server | perl -pe "s| ||g" | awk -F '│' '{print$12}')
    else
        SERVER_STATUS=${SERVICE_STOPPED}
        SERVERCreateTime="No Data"
        SERVERRunTime="No Data"
        SERVERCPUOccupancy="No Data"
        SERVERMemoryOccupancy="No Data"
    fi
    echo -e " 控 制 面 板 : ${SERVER_STATUS}    创建时间: ${SERVERCreateTime}    性能监控: ${SERVERCPUOccupancy} / ${SERVERMemoryOccupancy} / ${SERVERRunTime}"
    pm2 list | grep "ttyd" -wq
    ExitStatusTTYD=$?

    if [[ ${ExitStatusTTYD} -eq 0 ]]; then
        ServiceStatus=$(pm2 describe ttyd | grep status | awk '{print $4}')
        case ${ServiceStatus} in
        online)
            TTYD_STATUS=${SERVICE_ONLINE}
            ;;
        stopped)
            TTYD_STATUS=${SERVICE_STOPPED}
            ;;
        errored)
            TTYD_STATUS=${SERVICE_ERRORED}
            ;;
        esac

        TTYDCreateTime=$(date --date "$(pm2 describe ttyd | grep "created at" | awk '{print $5}')")
        TTYDRunTime=$(pm2 describe ttyd | grep "uptime " | awk '{print $4}')
        TTYDCPUOccupancy=$(pm2 list | grep ttyd | perl -pe "s| ||g" | awk -F '│' '{print$11}')
        TTYDMemoryOccupancy=$(pm2 list | grep ttyd | perl -pe "s| ||g" | awk -F '│' '{print$12}')
    else
        TTYD_STATUS=${SERVICE_STOPPED}
        TTYDCreateTime="No Data"
        TTYDRunTime="No Data"
        TTYDCPUOccupancy="No Data"
        TTYDMemoryOccupancy="No Data"
    fi
    echo -e " 网 页 终 端 : ${TTYD_STATUS}    创建时间: ${TTYDCreateTime}    性能监控: ${TTYDCPUOccupancy} / ${TTYDMemoryOccupancy} / ${TTYDRunTime}"
    pm2 list | grep "jd_cfd_loop" -wq
    ExitStatusHANG=$?

    if [[ ${ExitStatusHANG} -eq 0 ]]; then
        ServiceStatus=$(pm2 describe jd_cfd_loop | grep status | awk '{print $4}')
        case ${ServiceStatus} in
        online)
            HANG_STATUS=${SERVICE_ONLINE}
            ;;
        stopped)
            HANG_STATUS=${SERVICE_STOPPED}
            ;;
        errored)
            HANG_STATUS=${SERVICE_ERRORED}
            ;;
        esac
        HANGCreateTime=$(date --date "$(pm2 describe jd_cfd_loop | grep "created at" | awk '{print $5}')")
        HANGRunTime=$(pm2 describe jd_cfd_loop | grep "uptime " | awk '{print $4}')
        HANGCPUOccupancy=$(pm2 list | grep jd_cfd_loop | perl -pe "s| ||g" | awk -F '│' '{print$11}')
        HANGMemoryOccupancy=$(pm2 list | grep jd_cfd_loop | perl -pe "s| ||g" | awk -F '│' '{print$12}')
    else
        HANG_STATUS=${SERVICE_STOPPED}
        HANGCreateTime="No Data"
        HANGRunTime="No Data"
        HANGCPUOccupancy="No Data"
        HANGMemoryOccupancy="No Data"
    fi
    echo -e " 挂 机 程 序 : ${HANG_STATUS}    创建时间: ${HANGCreateTime}    性能监控: ${HANGCPUOccupancy} / ${HANGMemoryOccupancy} / ${HANGRunTime}"
    pm2 list | grep "jbot" -wq
    ExitStatusBOT=$?
    if [[ ${ExitStatusBOT} -eq 0 ]]; then
        ServiceStatus=$(pm2 describe jbot | grep status | awk '{print $4}')
        case ${ServiceStatus} in
        online)
            BOT_STATUS=${SERVICE_ONLINE}
            ;;
        stopped)
            BOT_STATUS=${SERVICE_STOPPED}
            ;;
        errored)
            BOT_STATUS=${SERVICE_ERRORED}
            ;;
        esac
        BOTCreateTime=$(date --date "$(pm2 describe jbot | grep "created at" | awk '{print $5}')")
        BOTRunTime=$(pm2 describe jbot | grep "uptime " | awk '{print $4}')
        BOTCPUOccupancy=$(pm2 list | grep jbot | perl -pe "s| ||g" | awk -F '│' '{print$11}')
        BOTMemoryOccupancy=$(pm2 list | grep jbot | perl -pe "s| ||g" | awk -F '│' '{print$12}')
    else
        BOT_STATUS=${SERVICE_STOPPED}
        BOTCreateTime="No Data"
        BOTRunTime="No Data"
        BOTCPUOccupancy="No Data"
        BOTMemoryOccupancy="No Data"
    fi
    echo -e " TelegramBot : ${BOT_STATUS}    创建时间: ${BOTCreateTime}    性能监控: ${BOTCPUOccupancy} / ${BOTMemoryOccupancy} / ${BOTRunTime}"
    echo ''
}

function Find_Script() {
    FileNameTmp1=$(echo $1 | perl -pe "{s|\.js||; s|\.py||; s|\.ts||}")
    FileNameTmp2=$(echo $1 | perl -pe "{s|jd_||; s|\.js||; s|\.py||; s|\.ts||; s|^|jd_|}")
    SeekDir="${ScriptsDir} ${ScriptsDir}/backUp ${ScriptsDir}/tools ${ConfigDir}"
    FileName=""
    WhichDir=""
    FileFormat="${1##*.}"
    for dir in ${SeekDir}; do
        if [ -f ${dir}/${FileNameTmp1}.js ]; then
            FileName=${FileNameTmp1}
            if [ -z "${FileFormat}"  ]; then
                FileFormat="js"
            fi
            WhichDir=${dir}
            break
        elif [ -f ${dir}/${FileNameTmp1}.py ]; then
            FileName=${FileNameTmp1}
            if [ -z "${FileFormat}"  ]; then
                FileFormat="py"
            fi
            WhichDir=${dir}
            break
        elif [ -f ${dir}/${FileNameTmp1}.ts ]; then
            FileName=${FileNameTmp1}
            if [ -z "${FileFormat}"  ]; then
                FileFormat="ts"
            fi
            WhichDir=${dir}
            break
        elif [ -f ${dir}/${FileNameTmp2}.js ]; then
            FileName=${FileNameTmp2}
            if [ -z "${FileFormat}"  ]; then
                FileFormat="js"
            fi
            WhichDir=${dir}
            break
        elif [ -f ${dir}/${FileNameTmp2}.py ]; then
            FileName=${FileNameTmp2}
            if [ -z "${FileFormat}"  ]; then
                FileFormat="py"
            fi
            WhichDir=${dir}
            break
        elif [ -f ${dir}/${FileNameTmp2}.ts ]; then
            FileName=${FileNameTmp2}
            if [ -z "${FileFormat}"  ]; then
                FileFormat="ts"
            fi
            WhichDir=${dir}
            break
        fi
    done
}

function Random_Delay() {
    if [[ -n ${RandomDelay} ]] && [[ ${RandomDelay} -gt 0 ]]; then
        CurMin=$(date "+%-M")
        if [[ ${CurMin} -gt 2 && ${CurMin} -lt 30 ]] || [[ ${CurMin} -gt 31 && ${CurMin} -lt 59 ]]; then
            CurDelay=$((${RANDOM} % ${RandomDelay} + 1))
            echo -e "\n${WAITING} 命令未添加 \"now\"，随机延迟 ${CurDelay} 秒后再执行任务，如需立即终止，请按 Ctrl+C...\n"
            sleep ${CurDelay}
        fi
    fi
}

function Run_Normal() {
    local p=$1
    Find_Script $p
    if [ -n "${FileName}" ] && [ -n "${WhichDir}" ]; then
        Import_Config $1
        Detect_Cron
        Set_Env
        Combin_All
        [ $# -eq 1 ] && Random_Delay
        LogTime=$(date "+%Y-%m-%d-%H-%M-%S")
        LogFile="${LogDir}/${FileName}/${LogTime}.log"
        [ ! -d ${LogDir}/${FileName} ] && mkdir -p ${LogDir}/${FileName}
        cd ${WhichDir}
        if [ ${FileFormat} == "js" ]; then
            node ${FileName}.js | tee ${LogFile}
        elif [ ${FileFormat} == "py" ]; then
            python3 ${FileName}.py | tee ${LogFile}
        elif [ ${FileFormat} == "ts" ]; then
            ts-node ${FileName}.ts | tee ${LogFile}
        fi
    else
        FormatInput=$(echo $p | awk -F "/" '{print $NF}')
        echo -e "\n${ERROR} 在 ${ScriptsDir}、${ScriptsDir}/backUp、${ConfigDir}、${ScriptsDir}/tools 四个目录下均未检测到 $FormatInput 脚本的存在，请确认！\n"
        Help
    fi
}

function Run_Concurrent() {
    local p=$1
    Find_Script $p
    if [ -n "${FileName}" ] && [ -n "${WhichDir}" ]; then
        Import_Config $1 && Detect_Cron && Set_Env && Combin_SHARECODES
        LogTime=$(date "+%Y-%m-%d-%H-%M-%S")
        [ ! -d ${LogDir}/${FileName} ] && mkdir -p ${LogDir}/${FileName}
        echo -e "\n各账号间已经在后台开始并发执行，前台不显示脚本输出内容而是直接写入到日志文件中。\n"
        for ((user_num = 1; user_num <= ${UserSum}; user_num++)); do
            for num in ${TempBlockCookie}; do
                [[ $user_num -eq $num ]] && continue 2
            done
            Cookie_Num=Cookie$user_num
            export JD_COOKIE=${!Cookie_Num}
            LogFile="${LogDir}/${FileName}/${LogTime}_${user_num}.log"
            cd ${WhichDir}
            if [ ${FileFormat} == "js" ]; then
                node ${FileName}.js &>$LogFile &
            elif [ ${FileFormat} == "py" ]; then
                python3 ${FileName}.py &>$LogFile &
            elif [ ${FileFormat} == "ts" ]; then
                ts-node ${FileName}.ts &>$LogFile &
            fi
        done
        echo -e "${WAITING} 并发任务正在执行中，请耐心等待所有任务执行完毕...\n"
        wait
        echo -e "${SUCCESS} 所有并发任务已全部完成，如需查询执行结果，请直接查看相关日志\n"
    else
        FormatInput=$(echo $p | awk -F "/" '{print $NF}')
        echo -e "\n${ERROR} 在 ${ScriptsDir}、${ScriptsDir}/backUp、${ConfigDir}、${ScriptsDir}/tools 四个目录下均未检测到 $FormatInput 脚本的存在，请确认！\n"
        Help
    fi
}

function Run_Specify() {
    local p=$1
    local ck_num=$2
    Find_Script $p
    if [ -n "${FileName}" ] && [ -n "${WhichDir}" ]; then
        Import_Config && Detect_Cron && Set_Env && Combin_SHARECODES
        LogTime=$(date "+%Y-%m-%d-%H-%M-%S")
        [ ! -d ${LogDir}/${FileName} ] && mkdir -p ${LogDir}/${FileName}
        LogFile="${LogDir}/${FileName}/${LogTime}_${user_num}.log"
        Cookie_Num=Cookie$ck_num
        export JD_COOKIE=${!Cookie_Num}
        cd ${WhichDir}
        if [ ${FileFormat} == "js" ]; then
            node ${FileName}.js | tee ${LogFile}
        elif [ ${FileFormat} == "py" ]; then
            python3 ${FileName}.py | tee ${LogFile}
        elif [ ${FileFormat} == "ts" ]; then
            ts-node ${FileName}.ts | tee ${LogFile}
        fi
    else
        FormatInput=$(echo $p | awk -F "/" '{print $NF}')
        echo -e "\n${ERROR} 在 ${ScriptsDir}、${ScriptsDir}/backUp、${ConfigDir}、${ScriptsDir}/tools 四个目录下均未检测到 $FormatInput 脚本的存在，请确认！\n"
        Help
    fi
}

function Run_Rapidly() {
    local p=$1
    Import_Config $1
    Count_UserSum
    export JD_COOKIE=$(Combin_Sub Cookie)
    FileNameTmp1=$(echo $p | awk -F "/" '{print $NF}' | perl -pe "{s|\.js||; s|\.py||; s|\.ts||}")
    FileNameTmp2=$(echo $p | awk -F "/" '{print $NF}' | perl -pe "{s|jd_||; s|\.js||; s|\.py||; s|\.ts||; s|^|jd_|}")
    cd ${ScriptsDir}
    if [ -f ${ScriptsDir}/${FileNameTmp1}.js ]; then
        [ ! -d ${LogDir}/${FileNameTmp1} ] && mkdir -p ${LogDir}/${FileNameTmp1}
        node ${FileNameTmp1}.js | tee ${LogDir}/${FileNameTmp1}/$(date "+%Y-%m-%d-%H-%M-%S").log
    elif [ -f ${ScriptsDir}/${FileNameTmp1}.py ]; then
        [ ! -d ${LogDir}/${FileNameTmp1} ] && mkdir -p ${LogDir}/${FileNameTmp1}
        python3 ${FileNameTmp1}.py | tee ${LogDir}/${FileNameTmp1}/$(date "+%Y-%m-%d-%H-%M-%S").log
    elif [ -f ${ScriptsDir}/${FileNameTmp1}.ts ]; then
        [ ! -d ${LogDir}/${FileNameTmp1} ] && mkdir -p ${LogDir}/${FileNameTmp1}
        ts-node ${FileNameTmp1}.ts | tee ${LogDir}/${FileNameTmp1}/$(date "+%Y-%m-%d-%H-%M-%S").log
    elif [ -f ${ScriptsDir}/${FileNameTmp2}.js ]; then
        [ ! -d ${LogDir}/${FileNameTmp2} ] && mkdir -p ${LogDir}/${FileNameTmp2}
        node ${FileNameTmp2}.js | tee ${LogDir}/${FileNameTmp2}/$(date "+%Y-%m-%d-%H-%M-%S").log
    elif [ -f ${ScriptsDir}/${FileNameTmp2}.py ]; then
        [ ! -d ${LogDir}/${FileNameTmp2} ] && mkdir -p ${LogDir}/${FileNameTmp2}
        python3 ${FileNameTmp2}.py | tee ${LogDir}/${FileNameTmp2}/$(date "+%Y-%m-%d-%H-%M-%S").log
    elif [ -f ${ScriptsDir}/${FileNameTmp2}.ts ]; then
        [ ! -d ${LogDir}/${FileNameTmp2} ] && mkdir -p ${LogDir}/${FileNameTmp2}
        ts-node ${FileNameTmp2}.ts | tee ${LogDir}/${FileNameTmp2}/$(date "+%Y-%m-%d-%H-%M-%S").log
    else
        FormatInput=$(echo $p | awk -F "/" '{print $NF}')
        echo -e "\n${ERROR} 在 ${ScriptsDir} 目录下未检测到 $FormatInput 脚本的存在，请确认！\n"
        Help
    fi
}

function Process_Kill() {
    local p=$1
    Find_Script $p
    if [ -n "${FileName}" ] && [ -n "${WhichDir}" ]; then
        ps -ef | grep -v "grep" | grep "${FileName}" -qw
        local ExitSearchProcess=$?
        if [[ ${ExitSearchProcess} == 0 ]]; then
            kill -9 $(ps -ef | grep "${FileName}" | grep -v "pkill" | awk '$0 !~/grep/ {print $1}' | tr -s '\n' ' ') >/dev/null 2>&1
            sleep 1
            kill -9 $(ps -ef | grep "${FileName}" | grep -v "pkill" | awk '$0 !~/grep/ {print $1}' | tr -s '\n' ' ') >/dev/null 2>&1
            ps -ef | grep -v "grep" | grep "${FileName}" -qw
            if [ $? -ne 0 ]; then
                echo -e "\n${SUCCESS} 已终止进程\n"
            else
                echo -e "\n${ERROR} 进程终止失败，请尝试手动终止 kill -9 <pid>\n"
            fi
        else
            FormatInput=$(echo $p | awk -F "/" '{print $NF}')
            echo -e "\n${ERROR} 未检测到关于 $FormatInput 脚本的进程，进程可能不存在或输入有误\n"
            Help
        fi
    else
        FormatInput=$(echo $p | awk -F "/" '{print $NF}')
        echo -e "\n${ERROR} 在 ${ScriptsDir}、${ScriptsDir}/backUp、${ConfigDir}、${ScriptsDir}/tools 四个目录下均未检测到 $FormatInput 脚本的存在，请确认！\n"
        Help
    fi
}

function Run_RawScript() {
    local Raw_Url=$1 && local DownloadJudgment=""
    FileName=$(echo $Raw_Url | awk -F "/" '{print $NF}')
    RepositoryName=$(echo $Raw_Url | egrep -o "github|gitee|gitlab")
    if [[ ${RepositoryName} == "github" ]]; then
        RepositoryJudge=" Github "
    elif [[ ${RepositoryName} == "gitee" ]]; then
        RepositoryJudge=" Gitee "
    elif [[ ${RepositoryName} == "gitlab" ]]; then
        RepositoryJudge=" GitLab "
    else
        RepositoryJudge=""
    fi
    if [[ $# == 3 ]]; then
        if [ $3 = "-p" ]; then
            DownloadJudgment="https://ghproxy.com/"
            RunMod="normal"
        elif [ $3 = "-c" ]; then
            DownloadJudgment=""
            RunMod="concurrent"
        elif [[ $3 = "-pc" ]] || [[ $3 = "-cp" ]]; then
            DownloadJudgment="https://ghproxy.com/"
            RunMod="concurrent"
        else
            echo -e "\n${COMMAND_ERROR}\n"
            Help
            exit
        fi
    elif [[ $# == 4 ]]; then
        if [ $3 = "-p" ]; then
            DownloadJudgment="https://ghproxy.com/"
        elif [ $3 = "-c" ]; then
            RunMod="concurrent"
        else
            echo -e "\n${COMMAND_ERROR}\n"
            Help
            exit
        fi
        if [ $4 = "-c" ]; then
            RunMod="concurrent"
        elif [ $4 = "-p" ]; then
            DownloadJudgment="https://ghproxy.com/"
        else
            echo -e "\n${COMMAND_ERROR}\n"
            Help
            exit
        fi
    else
        DownloadJudgment=""
        RunMod="normal"
    fi
    if [[ ${DownloadJudgment} == "https://ghproxy.com/" ]]; then
        ProxyJudge="使用代理"
    else
        ProxyJudge=""
    fi
    echo -e "\n${WAITING} 开始从${RepositoryJudge}远程仓库${ProxyJudge}下载 ${FileName} 脚本..."
    wget -q --no-check-certificate ${DownloadJudgment}$Raw_Url -O "${ScriptsDir}/${FileName}.new"
    if [[ $? -eq 0 ]]; then
        mv -f "${ScriptsDir}/${FileName}.new" "${ScriptsDir}/${FileName}"
        if [ ${RunMod} = "normal" ]; then
            RunModJudge="依次"
        elif [ ${RunMod} = "concurrent" ]; then
            RunModJudge="并发"
        fi
        echo -e "\n${SUCCESS} 下载完成，倒计时 3 秒后开始${RunModJudge}执行\n"
        sleep 1 && echo -e "3..." && sleep 1 && echo -e "2.." && sleep 1 && echo -e "1." && sleep 1
        FormatFileName=$(echo ${FileName} | perl -pe "{s|\.js||; s|\.py||; s|\.ts||}")
        if [ ${RunMod} = "normal" ]; then
            Run_Normal ${FormatFileName} now
        elif [ ${RunMod} = "concurrent" ]; then
            Run_Concurrent ${FormatFileName}
        fi
    else
        [ -f "${ScriptsDir}/${FileName}.new" ] && rm -rf "${ScriptsDir}/${FileName}.new"
        echo -e "\n${ERROR} 下载 ${FileName} 失败，请检查 URL 地址是否正确或网络连通性问题...\n"
    fi
}

function ScriptsList() {
    ListScripts=($(
        cd ${ScriptsDir}
        git ls-files | grep ".js\b" | grep -E "j[drx]_" | grep -Ev "/|jd_update.js|jd_env_copy.js|AGENTS"
    ))
    ListTypeScriptScripts=($(
        cd ${ScriptsDir}
        git ls-files | grep ".ts\b" | grep -Ev "/|api_test|ts_test|AGENTS|validate|jdJxToken|Cookie"
    ))
    ListOtherScripts=($(
        cd ${ScriptsDir}
        ls | egrep ".js\b|.py\b" | grep -Ev "$(git ls-files)|ShareCodes|AGENTS|index.js|validate|JDJR|Faker|tencentscf|Notify|Cookie|cookie|Tokens|app.|main."
    ))

    cd ${ScriptsDir}
    echo -e "#################################### 本  地  脚  本  清  单 ####################################"
    echo -e "非 Scripts 仓库的脚本不会随更新而自动删除，ts脚本如遇报错请尝试安装相关模块或者通过 tsc 命令转换后使用"

    echo -e "\nScripts 仓库的 js 脚本："
    for ((i = 0; i < ${#ListScripts[*]}; i++)); do
        if [ ${ListScripts[i]} = "jd_validate_Worker.js" ]; then
            Name="宠汪汪二代目验证"
        else
            grep -Eq "^[const $ = ].*Env" ${ListScripts[i]}
            if [ $? -eq 0 ]; then
                Name=$(grep -E "^[const $ = ].*Env" ${ListScripts[i]} | awk -F "\(" '{print $2}' | awk -F "\)" '{print $1}' | sed 's:^.\(.*\).$:\1:' | head -1)
            else
                Name=$(grep -w "script-path" ${ListScripts[i]} | sed "s/\W//g" | sed "s/[0-9a-zA-Z_]//g" | head -n 1)
            fi
        fi
        echo -e "$(($i + 1)).${Name}：${ListScripts[i]}"
    done
    git remote -v | grep "JDHelloWorld/jd_scripts" -wq
    if [ $? -eq 0 ]; then
        echo -e "\nScripts 仓库的 ts 脚本："
        echo -e "\e[3m如遇报错可使用 tsc 命令转换成 js 脚本执行\e[0m\n\e[3m转换命令示例: tsc scripts/jd_joy_reward.ts\e[0m"
        for ((i = 0; i < ${#ListTypeScriptScripts[*]}; i++)); do
            ## 手动定义脚本名称
            case ${ListTypeScriptScripts[i]} in
            jd_bean_box.ts)
                Name="领京豆"
                ;;
            jd_bean_sign.ts)
                Name="京东多合一签到"
                ;;
            jd_cfd.ts)
                Name="京喜财富岛"
                ;;
            jd_cfd_loop.ts)
                Name="京喜财富岛热气球挂机"
                ;;
            jd_cfd_stock.ts)
                Name="京喜财富岛库存监控"
                ;;
            jd_cfd_withdraw.ts)
                Name="京喜财富岛提现"
                ;;
            jd_foodRunning.ts)
                Name="零食街"
                ;;
            jd_getUp.ts)
                Name="早起福利"
                ;;
            jd_joy_park.ts)
                Name="汪汪乐园"
                ;;
            jd_joy_reward.ts)
                Name="宠汪汪兑换二代目"
                ;;
            jd_jxmc.ts)
                Name="京喜牧场"
                ;;
            jd_jxmc_stock.ts)
                Name="京喜牧场兑换新品通知"
                ;;
            jd_qq_pasture.ts)
                Name="星系牧场"
                ;;
            jd_speed_redEnvelope.ts)
                Name="极速版-发财大赢家"
                ;;
            jd_yili_cow.ts)
                Name="伊利养牛记"
                ;;
            jx_sign.ts)
                Name="京喜签到"
                ;;
            *)
                Name=""
                ;;
            esac
            echo -e "$(($i + 1)).${Name}：${ListTypeScriptScripts[i]}"
        done
    fi

    echo -e "\n第三方脚本："
    for ((i = 0; i < ${#ListOtherScripts[*]}; i++)); do
        if [[ $(echo ${ListOtherScripts[i]} | awk -F "." '{print $NF}') == js ]]; then
            grep -Eq "^[const $ = ].*Env" ${ListOtherScripts[i]}
            if [ $? -eq 0 ]; then
                Name=$(grep -E "^[const $ = ].*Env" ${ListOtherScripts[i]} | awk -F "\(" '{print $2}' | awk -F "\)" '{print $1}' | sed 's:^.\(.*\).$:\1:' | head -1)
            else
                Name=$(grep -w "script-path" ${ListOtherScripts[i]} | sed "s/\W//g" | sed "s/[0-9a-zA-Z_]//g" | head -n 1)
            fi
        else
            ## 手动定义脚本名称
            case ${ListOtherScripts[i]} in
            jd_cashHelp.py)
                Name="签到领现金"
                ;;
            jd_jxgc_tuan.py)
                Name="京喜工厂开团"
                ;;
            jd_qjd.py)
                Name="抢京豆"
                ;;
            jd_zjd.py)
                Name="赚京豆"
                ;;
            *)
                Name=""
                ;;
            esac
        fi
        echo -e "$(($i + 1)).${Name}：${ListOtherScripts[i]}"
    done
    echo ''
}

case $# in
0)
    echo
    Help
    ;;
1)
    case $1 in
    list)
        ScriptsList
        ;;
    resetpwd)
        Reset_Pwd
        ;;
    exsc)
        Export_Sharecodes
        ;;
    rmlog)
        Remove_LogFiles
        ;;
    update)
        bash git_pull.sh
        ;;
    ps)
        ps -ef | egrep -Ev "bash|tee|sleep|server.js|vim|crond|ssh|ps|pm2|\[*\]"
        ;;
    *)
        Run_Normal $1
        ;;
    esac
    ;;
2)
    case $2 in
    now)
        Run_Normal $1 $2
        ;;
    conc)
        Run_Concurrent $1 $2
        ;;
    [1-9] | [1-3][0-9])
        Run_Specify $1 $2
        ;;
    rapid)
        Run_Rapidly $1
        ;;
    raw)
        Run_RawScript $1
        ;;
    pkill)
        Process_Kill $1
        ;;
    on | off)
        case $1 in
        panel)
            Panel_Control $1 $2
            ;;
        *)
            echo -e "\n${COMMAND_ERROR}\n"
            Help
            ;;
        esac
        ;;
    up | down)
        case $1 in
        hang)
            Hang_Control $1 $2
            ;;
        *)
            echo -e "\n${COMMAND_ERROR}\n"
            Help
            ;;
        esac
        ;;
    start | stop)
        case $1 in
        jbot)
            Bot_Control $1 $2
            ;;
        *)
            echo -e "\n${COMMAND_ERROR}\n"
            Help
            ;;
        esac
        ;;
    logs)
        case $1 in
        hang)
            Hang_Control $1 $2
            ;;
        jbot)
            Bot_Control $1 $2
            ;;
        *)
            echo -e "\n${COMMAND_ERROR}\n"
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
            echo -e "\n${COMMAND_ERROR}\n"
            Help
            ;;
        esac
        ;;
    *)
        echo -e "\n${COMMAND_ERROR}\n"
        Help
        ;;
    esac
    ;;
3 | 4)
    if [[ $2 == raw ]]; then
        if [[ $# == 4 ]]; then
            Run_RawScript $1 $2 $3 $4
        else
            Run_RawScript $1 $2 $3
        fi
    else
        echo -e "\n${TOO_MANY_COMMANDS}\n"
        Help
    fi
    ;;
*)
    echo -e "\n${TOO_MANY_COMMANDS}\n"
    Help
    ;;
esac
