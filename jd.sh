#!/usr/bin/env bash
## Author: SuperManito
## Modified: 2021-08-25

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
CodeDir=${LogDir}/export_sharecodes
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
    Combin_ShareCodes
    Trans_UN_SUBSCRIBES
}

function Trans_UN_SUBSCRIBES() {
    export UN_SUBSCRIBES="${goodPageSize}\n${shopPageSize}\n${jdUnsubscribeStopGoods}\n${jdUnsubscribeStopShop}"
}

function Combin_ShareCodes() {
    if [[ $AutoHelpOther == true ]] && [[ $(ls $CodeDir) ]]; then
        Latest_Log=$(ls -r $CodeDir | head -1)
        . $CodeDir/$Latest_Log
    fi
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
    ## 惊喜农场(jd_jxnc.js)
    export JXNC_SHARECODES=$(Combin_Sub ForOtherJxnc)
    ## 口袋书店(jd_bookshop.js)
    export BOOKSHOP_SHARECODES=$(Combin_Sub ForOtherBookShop)
    ## 签到领现金(jd_cash.js)
    export JD_CASH_SHARECODES=$(Combin_Sub ForOtherCash)
    ## 闪购盲盒(jd_sgmh.js)
    export JDSGMH_SHARECODES=$(Combin_Sub ForOtherSgmh)
    ## 东东健康社区(jd_health.js)
    export JDHEALTH_SHARECODES=$(Combin_Sub ForOtherHealth)
    #手机狂欢城(jd_carnivalcity.js)
    export JD818_SHARECODES=$(Combin_Sub ForOtherCarni)
}

function Update_Crontab() {
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

## 组合变量
function Combin_Sub() {
    local What_Combine=$1
    local CombinAll=""
    local Tmp1 Tmp2
    for ((i = 0x1; i <= ${UserSum}; i++)); do
        for num in ${TempBlockCookie}; do
            [[ $i -eq $num ]] && continue 2
        done
        Tmp1=$What_Combine$i
        Tmp2=${!Tmp1}
        CombinAll="${CombinAll}&${Tmp2}"
    done
    echo $CombinAll | perl -pe "{s|^&||; s|^@+||; s|&@|&|g; s|@+&|&|g; s|@+|@|g; s|@+$||}"
}

## 更新源码
function Git_Pull() {
    cd ${ShellDir}
    git fetch --all >/dev/null 2>&1
    git reset --hard origin/$(git status | head -n 1 | awk -F ' ' '{print$NF}') >/dev/null 2>&1
    git pull >/dev/null 2>&1
}

## 导入配置文件中的变量
function Import_Config() {
    if [ -f ${FileConf} ]; then
        . ${FileConf}
        if [ -z "${Cookie1}" ]; then
            echo -e "\n${ERROR} 请先在 config.sh 配置文件中配置好 Cookie ！\n"
            exit 1
        fi
    else
        echo -e "\n${ERROR} 配置文件 ${FileConf} 不存在，请先按教程配置好该文件！\n"
        exit 1
    fi
}

## 重置控制面板和密码
function Reset_Pwd() {
    cp -f ${ShellDir}/sample/auth.json ${ConfigDir}/auth.json
    echo -e "\n${SUCCESS} 控制面板登录密码重置成功，用户名：admin  密码：admin\n"
}

## 删除日志
function Remove_LogFiles() {
    Import_Config
    function Rm_JsLog() {
        LogFileList=$(ls -l ${LogDir}/*/*.log | awk '{print $9}' | grep -v "log/bot")
        for log in ${LogFileList}; do
            LogDate=$(echo ${log} | awk -F "/" '{print $NF}' | cut -c1-10) #文件名比文件属性获得的日期要可靠
            DiffTime=$(($(date +%s) - $(date +%s -d "${LogDate}")))
            [ ${DiffTime} -gt $((${RmLogDaysAgo} * 86400)) ] && rm -vf ${log}
        done
    }

    ## 删除 git_pull 的运行日志
    function Rm_GitPullLog() {
        Stmp=$(($(date "+%s") - 86400 * ${RmLogDaysAgo}))
        DateDelLog=$(date -d "@${Stmp}" "+%Y-%m-%d")
        LineEndGitPull=$(($(cat ${LogDir}/git_pull.log | grep -n "${DateDelLog}" | head -1 | awk -F ":" '{print $1}') - 3))
        [ -f ${LogDir}/git_pull.log ] && [ ${LineEndGitPull} -gt 0 ] && perl -i -ne "{print unless 1 .. ${LineEndGitPull} }" ${LogDir}/git_pull.log
    }

    ## 删除 Bot 的运行日志
    function Rm_BotLog() {
        Stmp=$(($(date "+%s") - 86400 * ${RmLogDaysAgo}))
        DateDelLog=$(date -d "@${Stmp}" "+%Y-%m-%d")
        LineEndBotRun=$(($(cat ${BotLogDir}/run.log | grep -n "${DateDelLog}" | tail -n 1 | awk -F ":" '{print $1}') - 3))
        [ -f ${BotLogDir}/run.log ] && [ ${LineEndBotRun} -gt 0 ] && perl -i -ne "{print unless 1 .. ${LineEndBotRun} }" ${BotLogDir}/run.log
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
        echo -e "\n${WAITING} 开始检索日志文件\n删除日志耗时较长，请耐心等待..."
        Rm_JsLog
        Rm_GitPullLog
        Rm_BotLog
        Rm_EmptyDir
        echo -e "\n${SUCCESS} 删除完毕\n"
    fi
}

## 导出互助码
function Export_Sharecodes() {
    Import_Config && Count_UserSum
    LatestCodeLogFile=$CodeDir/$(ls -r $CodeDir | head -1)

    ## 生成pt_pin清单
    Gen_pt_pin_array() {
        local Tmp1 Tmp2 i pt_pin_temp
        for ((user_num = 1; user_num <= $UserSum; user_num++)); do
            Tmp1=Cookie$user_num
            Tmp2=${!Tmp1}
            i=$(($user_num - 1))
            pt_pin_temp=$(echo $Tmp2 | perl -pe "{s|.*pt_pin=([^; ]+)(?=;?).*|\1|; s|%|\\\x|g}")
            [[ $pt_pin_temp == *\\x* ]] && pt_pin[i]=$(printf $pt_pin_temp) || pt_pin[i]=$pt_pin_temp
        done
    }

    ## 导出互助码的通用程序，$1：去掉后缀的脚本名称，$2：config.sh中的后缀，$3：活动中文名称
    Export_Codes_Sub() {
        local task_name=$1
        local config_name=$2
        local chinese_name=$3
        local config_name_my=My$config_name
        local config_name_for_other=ForOther$config_name
        local i j k m n pt_pin_in_log code tmp_grep tmp_my_code tmp_for_other user_num random_num_list previous_value
        if cd $LogDir/$task_name &>/dev/null && [[ $(ls) ]]; then
            ## 寻找所有互助码以及对应的pt_pin
            i=0
            pt_pin_in_log=()
            code=()
            pt_pin_and_code=$(ls -r *.log | xargs awk -F '（|）|】' -v var="的${chinese_name}好友互助码" '$3~var {print $2"&"$4}')
            for line in $pt_pin_and_code; do
                pt_pin_in_log[i]=$(echo $line | awk -F "&" '{print $1}')
                code[i]=$(echo $line | awk -F "&" '{print $2}')
                let i++
            done

            ## 输出My系列变量
            if [[ ${#code[*]} -gt 0 ]]; then
                for ((m = 0; m < ${#pt_pin[*]}; m++)); do
                    tmp_my_code=""
                    previous_value=""
                    j=$((m + 1))
                    for ((n = 0; n < ${#code[*]}; n++)); do
                        if [[ ${pt_pin[m]} == ${pt_pin_in_log[n]} ]]; then
                            tmp_my_code=${code[n]}
                            break
                        fi
                    done
                    if [[ -z $tmp_my_code ]] && [[ "$(ls -A $CodeDir)" != "" ]]; then
                        previous_value=$(grep "${config_name_my}${j}" $LatestCodeLogFile | head -1 | awk -F "\'" '{print$2}')
                        echo "$config_name_my$j='${previous_value}'"
                    else
                        echo "$config_name_my$j='$tmp_my_code'"
                    fi
                done
            else
                echo "## 从日志中未找到任何互助码"
            fi

            ## 输出ForOther系列变量
            if [[ ${#code[*]} -gt 0 ]]; then
                echo
                case $HelpType in
                0) ## 按编号优先
                    for ((m = 0; m < ${#pt_pin[*]}; m++)); do
                        tmp_for_other=""
                        j=$((m + 1))
                        for ((n = 0; n < ${#pt_pin[*]}; n++)); do
                            [[ $m -eq $n ]] && continue
                            k=$((n + 1))
                            tmp_for_other="$tmp_for_other@\${$config_name_my$k}"
                        done
                        echo "$config_name_for_other$j=\"$tmp_for_other\"" | perl -pe "s|($config_name_for_other\d+=\")@|\1|"
                    done
                    ;;

                1) ## 全部一致
                    tmp_for_other=""
                    for ((m = 0; m < ${#pt_pin[*]}; m++)); do
                        j=$((m + 1))
                        tmp_for_other="$tmp_for_other@\${$config_name_my$j}"
                    done
                    echo "${config_name_for_other}1=\"$tmp_for_other\"" | perl -pe "s|($config_name_for_other\d+=\")@|\1|"
                    for ((m = 1; m < ${#pt_pin[*]}; m++)); do
                        j=$((m + 1))
                        echo "$config_name_for_other$j=\"\${${config_name_for_other}1}\""
                    done
                    ;;

                2) ## 均等助力
                    for ((m = 0; m < ${#pt_pin[*]}; m++)); do
                        tmp_for_other=""
                        j=$((m + 1))
                        for ((n = $m; n < $((${UserSum} + $m)); n++)); do
                            [[ $m -eq $n ]] && continue
                            if [[ $((n + 1)) -le ${UserSum} ]]; then
                                k=$((n + 1))
                            else
                                k=$((n + 1 - ${UserSum}))
                            fi
                            tmp_for_other="$tmp_for_other@\${$config_name_my$k}"
                        done
                        echo "$config_name_for_other$j=\"$tmp_for_other\"" | perl -pe "s|($config_name_for_other\d+=\")@|\1|"
                    done
                    ;;

                3) ## 本套脚本内账号间随机顺序助力
                    for ((m = 0; m < ${#pt_pin[*]}; m++)); do
                        tmp_for_other=""
                        random_num_list=$(seq ${UserSum} | sort -R)
                        j=$((m + 1))
                        for n in $random_num_list; do
                            [[ $j -eq $n ]] && continue
                            tmp_for_other="$tmp_for_other@\${$config_name_my$n}"
                        done
                        echo "$config_name_for_other$j=\"$tmp_for_other\"" | perl -pe "s|($config_name_for_other\d+=\")@|\1|"
                    done
                    ;;

                *) ## 按编号优先
                    for ((m = 0; m < ${#pt_pin[*]}; m++)); do
                        tmp_for_other=""
                        j=$((m + 1))
                        for ((n = 0; n < ${#pt_pin[*]}; n++)); do
                            [[ $m -eq $n ]] && continue
                            k=$((n + 1))
                            tmp_for_other="$tmp_for_other@\${$config_name_my$k}"
                        done
                        echo "$config_name_for_other$j=\"$tmp_for_other\"" | perl -pe "s|($config_name_for_other\d+=\")@|\1|"
                    done
                    ;;
                esac
            fi
        else
            echo "## 未运行过 $task_name.js 脚本，未产生日志"
        fi
    }

    ## 汇总输出
    Export_Codes_All() {
        echo -e "\n# 从日志提取互助码，编号和配置文件中Cookie编号完全对应，如果为空就是所有日志中都没有。\n\n# 即使某个MyXxx变量未赋值，也可以将其变量名填在ForOtherXxx中，脚本会自动过滤空值。\n"
        echo -n "# 你选择的互助码模板为："
        case $HelpType in
        0)
            echo "按账号编号优先。"
            ;;
        1)
            echo "所有账号助力码全部一致。"
            ;;
        2)
            echo "所有账号机会均等助力。"
            ;;
        3)
            echo "本套脚本内账号间随机顺序助力。"
            ;;
        *)
            echo "按账号编号优先。"
            ;;
        esac
        for ((i = 0; i < ${#name_script[*]}; i++)); do
            echo -e "\n## ${name_chinese[i]}："
            Export_Codes_Sub "${name_script[i]}" "${name_config[i]}" "${name_chinese[i]}"
        done
    }

    Gen_pt_pin_array
    ## 执行并写入日志
    LogTime=$(date "+%Y-%m-%d-%H-%M-%S")
    LogPath="$CodeDir/$LogTime.log"
    [ -d "${CodeDir}" ] || mkdir -p ${CodeDir}
    Export_Codes_All | perl -pe "{s|京东种豆|种豆|; s|crazyJoy任务|疯狂的JOY|}" | tee ${LogPath}
}

## 后台挂机功能
function Hang_Control() {
    HangUpScripts="jd_cfd_loop"
    case $2 in
    up)
        for scripts in ${HangUpScripts}; do
            cd ${ScriptsDir}
            Import_Config $scripts && Count_UserSum && Combin_All
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

## 控制面板和网页终端
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
                echo -e "\n${WAITING} 检测到服务状态异常，开始尝试修复\n"
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
                echo -e "\n${WAITING} 检测到服务状态异常，开始尝试修复\n"
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

## 安装网页终端
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

## Telegram Bot
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
                    echo -e "\n${WAITING} 检测到服务状态异常，开始尝试修复\n"
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

## 列出各服务状态
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

## 确定脚本
function Find_Script() {
    FileNameTmp1=$(echo $1 | awk -F "/" '{print $NF}' | perl -pe "{s|\.js||; s|\.py||; s|\.ts||}")
    FileNameTmp2=$(echo $1 | awk -F "/" '{print $NF}' | perl -pe "{s|jd_||; s|\.js||; s|\.py||; s|\.ts||; s|^|jd_|}")
    SeekDir="${ScriptsDir} ${ScriptsDir}/backUp ${ScriptsDir}/tools ${ConfigDir}"
    FileName=""
    WhichDir=""
    for dir in ${SeekDir}; do
        if [ -f ${dir}/${FileNameTmp1}.js ]; then
            FileName=${FileNameTmp1}
            FileFormat="js"
            WhichDir=${dir}
            break
        elif [ -f ${dir}/${FileNameTmp1}.ts ]; then
            FileName=${FileNameTmp1}
            FileFormat="ts"
            WhichDir=${dir}
            break
        elif [ -f ${dir}/${FileNameTmp1}.py ]; then
            FileName=${FileNameTmp1}
            FileFormat="py"
            WhichDir=${dir}
            break
        elif [ -f ${dir}/${FileNameTmp2}.js ]; then
            FileName=${FileNameTmp2}
            FileFormat="js"
            WhichDir=${dir}
            break
        elif [ -f ${dir}/${FileNameTmp2}.ts ]; then
            FileName=${FileNameTmp2}
            FileFormat="ts"
            WhichDir=${dir}
            break
        elif [ -f ${dir}/${FileNameTmp2}.py ]; then
            FileName=${FileNameTmp2}
            FileFormat="py"
            WhichDir=${dir}
            break
        fi
    done
}

## 随机时间
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

## 依次执行
function Run_Normal() {
    local p=$1
    Find_Script $p
    if [ -n "${FileName}" ] && [ -n "${WhichDir}" ]; then
        Import_Config $p && Update_Crontab && Count_UserSum && Combin_All
        [ $# -eq 1 ] && Random_Delay
        LogTime=$(date "+%Y-%m-%d-%H-%M-%S")
        LogFile="${LogDir}/${FileName}/${LogTime}.log"
        [ ! -d ${LogDir}/${FileName} ] && mkdir -p ${LogDir}/${FileName}
        cd ${WhichDir}
        case ${FileFormat} in
        js)
            node ${FileName}.js | tee ${LogFile}
            ;;
        py)
            python3 -u ${FileName}.py | tee ${LogFile}
            ;;
        ts)
            ts-node ${FileName}.ts | tee ${LogFile}
            ;;
        esac
    else
        FormatInput=$(echo $p | awk -F "/" '{print $NF}')
        echo -e "\n${ERROR} 在 ${ScriptsDir}、${ScriptsDir}/backUp、${ConfigDir}、${ScriptsDir}/tools 四个目录下均未检测到 $FormatInput 脚本的存在，请确认！\n"
        Help
    fi
}

## 并发执行
function Run_Concurrent() {
    local p=$1
    Find_Script $p
    if [ -n "${FileName}" ] && [ -n "${WhichDir}" ]; then
        Import_Config $p && Update_Crontab && Count_UserSum && Combin_ShareCodes && Trans_UN_SUBSCRIBES
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
            case ${FileFormat} in
            js)
                node ${FileName}.js &>$LogFile &
                ;;
            py)
                python3 -u ${FileName}.py &>$LogFile &
                ;;
            ts)
                ts-node ${FileName}.ts &>$LogFile &
                ;;
            esac
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

## 指定执行
function Run_Specify() {
    local p=$1
    local ck_num=$2
    Find_Script $p
    if [ -n "${FileName}" ] && [ -n "${WhichDir}" ]; then
        Import_Config && Update_Crontab && Count_UserSum && Combin_ShareCodes && Trans_UN_SUBSCRIBES
        LogTime=$(date "+%Y-%m-%d-%H-%M-%S")
        [ ! -d ${LogDir}/${FileName} ] && mkdir -p ${LogDir}/${FileName}
        LogFile="${LogDir}/${FileName}/${LogTime}_${user_num}.log"
        Cookie_Num=Cookie$ck_num
        export JD_COOKIE=${!Cookie_Num}
        cd ${WhichDir}
        if [ ${FileFormat} == "js" ]; then
            node ${FileName}.js | tee ${LogFile}
        elif [ ${FileFormat} == "py" ]; then
            python3 -u ${FileName}.py | tee ${LogFile}
        elif [ ${FileFormat} == "ts" ]; then
            ts-node ${FileName}.ts | tee ${LogFile}
        fi
    else
        FormatInput=$(echo $p | awk -F "/" '{print $NF}')
        echo -e "\n${ERROR} 在 ${ScriptsDir}、${ScriptsDir}/backUp、${ConfigDir}、${ScriptsDir}/tools 四个目录下均未检测到 $FormatInput 脚本的存在，请确认！\n"
        Help
    fi
}

## 迅速执行
function Run_Rapidly() {
    local p=$1
    Import_Config $p && Count_UserSum
    export JD_COOKIE=$(Combin_Sub Cookie)
    FileNameTmp1=$(echo $p | awk -F "/" '{print $NF}' | perl -pe "{s|\.js||; s|\.py||; s|\.ts||}")
    FileNameTmp2=$(echo $p | awk -F "/" '{print $NF}' | perl -pe "{s|jd_||; s|\.js||; s|\.py||; s|\.ts||; s|^|jd_|}")
    cd ${ScriptsDir}
    if [ -f ${ScriptsDir}/${FileNameTmp1}.js ]; then
        [ ! -d ${LogDir}/${FileNameTmp1} ] && mkdir -p ${LogDir}/${FileNameTmp1}
        node ${FileNameTmp1}.js | tee ${LogDir}/${FileNameTmp1}/$(date "+%Y-%m-%d-%H-%M-%S").log
    elif [ -f ${ScriptsDir}/${FileNameTmp1}.py ]; then
        [ ! -d ${LogDir}/${FileNameTmp1} ] && mkdir -p ${LogDir}/${FileNameTmp1}
        python3 -u ${FileNameTmp1}.py | tee ${LogDir}/${FileNameTmp1}/$(date "+%Y-%m-%d-%H-%M-%S").log
    elif [ -f ${ScriptsDir}/${FileNameTmp1}.ts ]; then
        [ ! -d ${LogDir}/${FileNameTmp1} ] && mkdir -p ${LogDir}/${FileNameTmp1}
        ts-node ${FileNameTmp1}.ts | tee ${LogDir}/${FileNameTmp1}/$(date "+%Y-%m-%d-%H-%M-%S").log
    elif [ -f ${ScriptsDir}/${FileNameTmp2}.js ]; then
        [ ! -d ${LogDir}/${FileNameTmp2} ] && mkdir -p ${LogDir}/${FileNameTmp2}
        node ${FileNameTmp2}.js | tee ${LogDir}/${FileNameTmp2}/$(date "+%Y-%m-%d-%H-%M-%S").log
    elif [ -f ${ScriptsDir}/${FileNameTmp2}.py ]; then
        [ ! -d ${LogDir}/${FileNameTmp2} ] && mkdir -p ${LogDir}/${FileNameTmp2}
        python3 -u ${FileNameTmp2}.py | tee ${LogDir}/${FileNameTmp2}/$(date "+%Y-%m-%d-%H-%M-%S").log
    elif [ -f ${ScriptsDir}/${FileNameTmp2}.ts ]; then
        [ ! -d ${LogDir}/${FileNameTmp2} ] && mkdir -p ${LogDir}/${FileNameTmp2}
        ts-node ${FileNameTmp2}.ts | tee ${LogDir}/${FileNameTmp2}/$(date "+%Y-%m-%d-%H-%M-%S").log
    else
        FormatInput=$(echo $p | awk -F "/" '{print $NF}')
        echo -e "\n${ERROR} 在 ${ScriptsDir} 目录下未检测到 $FormatInput 脚本的存在，请确认！\n"
        Help
    fi
}

## 终止执行
function Process_Kill() {
    local p=$1
    Find_Script $p
    if [ -n "${FileName}" ] && [ -n "${WhichDir}" ]; then
        ps -ef | egrep -v "grep|pkill" | grep "${FileName}" -wq
        local ExitSearchProcess=$?
        if [[ ${ExitSearchProcess} == 0 ]]; then
            kill -9 $(ps -ef | grep "${FileName}" | grep -v "pkill" | awk '$0 !~/grep/ {print $1}' | tr -s '\n' ' ') >/dev/null 2>&1
            sleep 1
            kill -9 $(ps -ef | grep "${FileName}" | grep -v "pkill" | awk '$0 !~/grep/ {print $1}' | tr -s '\n' ' ') >/dev/null 2>&1
            ps -ef | egrep -v "grep|pkill" | grep "${FileName}" -wq
            if [ $? -eq 0 ]; then
                echo -e "\n${ERROR} 进程终止失败，请尝试手动终止 kill -9 <pid>\n"
            else
                echo -e "\n${SUCCESS} 已终止进程\n"
            fi
        else
            FormatInput=$(echo $p | awk -F "/" '{print $NF}')
            echo -e "\n${ERROR} 未检测到关于 $FormatInput 脚本的进程，进程可能不存在或输入有误\n"
        fi
    else
        FormatInput=$(echo $p | awk -F "/" '{print $NF}')
        echo -e "\n${ERROR} 在 ${ScriptsDir}、${ScriptsDir}/backUp、${ConfigDir}、${ScriptsDir}/tools 四个目录下均未检测到 $FormatInput 脚本的存在，请确认！\n"
        Help
    fi
}

## 远程执行
function Run_RawScript() {
    local Raw_Url=$1 && local DownloadJudgment=""
    FileName=$(echo $Raw_Url | awk -F "/" '{print $NF}')
    RepositoryName=$(echo $Raw_Url | egrep -o "github|gitee|gitlab")
    case ${RepositoryName} in
    github)
        RepositoryJudge=" Github "
        ;;
    gitee)
        RepositoryJudge=" Gitee "
        ;;
    gitlab)
        RepositoryJudge=" GitLab "
        ;;
    *)
        RepositoryJudge=""
        ;;
    esac

    case $# in
    2)
        if [ $2 = "-p" ]; then
            DownloadJudgment="https://ghproxy.com/"
            RunMod="normal"
        elif [ $2 = "-c" ]; then
            DownloadJudgment=""
            RunMod="concurrent"
        elif [[ $2 = "-pc" ]] || [[ $3 = "-cp" ]]; then
            DownloadJudgment="https://ghproxy.com/"
            RunMod="concurrent"
        else
            echo -e "\n${COMMAND_ERROR}\n"
            Help
            exit
        fi
        ;;
    3)
        if [ $2 = "-p" ]; then
            DownloadJudgment="https://ghproxy.com/"
        elif [ $2 = "-c" ]; then
            RunMod="concurrent"
        else
            echo -e "\n${COMMAND_ERROR}\n"
            Help
            exit
        fi
        if [ $3 = "-c" ]; then
            RunMod="concurrent"
        elif [ $3 = "-p" ]; then
            DownloadJudgment="https://ghproxy.com/"
        else
            echo -e "\n${COMMAND_ERROR}\n"
            Help
            exit
        fi
        ;;
    *)
        DownloadJudgment=""
        RunMod="normal"
        ;;
    esac

    if [[ ${DownloadJudgment} == "https://ghproxy.com/" ]]; then
        ProxyJudge="使用代理"
    else
        ProxyJudge=""
    fi
    echo -e "\n${WAITING} 开始从${RepositoryJudge}远程仓库${ProxyJudge}下载 ${FileName} 脚本..."
    wget -q --no-check-certificate ${DownloadJudgment}$Raw_Url -O "${ScriptsDir}/${FileName}.new"
    if [[ $? -eq 0 ]]; then
        mv -f "${ScriptsDir}/${FileName}.new" "${ScriptsDir}/${FileName}"
        case ${RunMod} in
        normal)
            RunModJudge="依次"
            ;;
        concurrent)
            RunModJudge="并发"
            ;;
        esac
        echo -e "\n${SUCCESS} 下载完成，倒计时 3 秒后开始${RunModJudge}执行\n"
        sleep 1 && echo -e "3..." && sleep 1 && echo -e "2.." && sleep 1 && echo -e "1." && sleep 1
        FormatFileName=$(echo ${FileName} | perl -pe "{s|\.js||; s|\.py||; s|\.ts||}")
        case ${RunMod} in
        normal)
            Run_Normal ${FormatFileName} now
            ;;
        concurrent)
            Run_Concurrent ${FormatFileName}
            ;;
        esac
    else
        [ -f "${ScriptsDir}/${FileName}.new" ] && rm -rf "${ScriptsDir}/${FileName}.new"
        echo -e "\n${ERROR} 下载 ${FileName} 失败，请检查 URL 地址是否正确或网络连通性问题...\n"
    fi
}

## 本地脚本清单
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
            jd_IndustryLottery.ts)
                Name="京东工业品抽奖"
                ;;
            jd_bean_box.ts)
                Name="领京豆"
                ;;
            jd_bean_sign.ts)
                Name="京东多合一签到"
                ;;
            jd_cfd.ts)
                Name="京喜财富岛"
                ;;
            jd_cfd_hb.ts)
                Name="京喜财富岛兑换红包"
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
            jd_fruit_moreTask.ts)
                Name="东东农场额外任务"
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

## 判定命令
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
    [1-9] | [1-9][0-9] | [1-9][0-9][0-9])
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
            Run_RawScript $1 $3 $4
        else
            Run_RawScript $1 $3
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
