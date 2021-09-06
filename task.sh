#!/usr/bin/env bash
## Author: SuperManito
## Modified: 2021-09-06

ShellDir=${JD_DIR}
. $ShellDir/share.sh

## 确定脚本
function Find_Script() {
    FileName=""
    WhichDir=""
    FileFormat=""
    local input=$1
    echo $input | grep "/" -q
    if [[ $? -eq 0 ]]; then
        ## 指定路径：
        ## 判定输入的是绝对路径还是相对路径
        echo $input | grep "$ShellDir/" -q
        if [[ $? -eq 0 ]]; then
            local AbsolutePath=$input
        else
            echo $input | grep "\.\./" -q
            if [[ $? -eq 0 ]]; then
                local PwdTmp=$(pwd | perl -pe "{s|/$(pwd | awk -F '/' '{printf$NF}')||g;}")
                local AbsolutePath=$(echo "$input" | perl -pe "{s|\.\./|${PwdTmp}/|;}")
            else
                local AbsolutePath=$(echo "$input" | perl -pe "{s|\./||; s|^*|$(pwd)/|;}")
            fi
        fi
        ## 判定输入是否含有后缀
        local FileNameTmp=$(echo $AbsolutePath | awk -F "/" '{print $NF}')
        local WhichDirTmp=$(echo $AbsolutePath | awk -F "$FileNameTmp" '{print$1}')
        echo $FileNameTmp | grep "\." -q
        if [[ $? -eq 0 ]]; then
            if [ -f $AbsolutePath ]; then
                local FileFormatTmp=$(echo $FileNameTmp | awk -F "\." '{print$NF}')
                case ${FileFormatTmp} in
                js)
                    FileFormat="JavaScript"
                    ;;
                ts)
                    FileFormat="TypeScript"
                    ;;
                python)
                    FileFormat="Python"
                    ;;
                *)
                    echo -e "\n$ERROR 不支持运行 ${FileFormatTmp} 类型的脚本，请确认！"
                    Help
                    exit 1
                    ;;
                esac
                FileName=$(echo ${FileNameTmp} | perl -pe "{s|\.js||; s|\.py||; s|\.ts||;}")
                WhichDir=${WhichDirTmp}
            fi
        else
            if [ -f ${WhichDirTmp}/${FileNameTmp}.js ]; then
                FileName=${FileNameTmp}
                FileFormat="JavaScript"
                WhichDir=${WhichDirTmp}
            elif [ -f ${WhichDirTmp}/${FileNameTmp}.ts ]; then
                FileName=${FileNameTmp}
                FileFormat="TypeScript"
                WhichDir=${WhichDirTmp}
            elif [ -f ${WhichDirTmp}/${FileNameTmp}.py ]; then
                FileName=${FileNameTmp}
                FileFormat="Python"
                WhichDir=${WhichDirTmp}
            fi
        fi
        ## 判定变量是否存在否则退出
        if [ -n "${FileName}" ] && [ -n "${WhichDir}" ]; then
            Check_Moudules $WhichDir
            if [ $(echo $AbsolutePath | awk -F '/' '{print$3}') = "own" ]; then
                LogPath="$LogDir/$(echo $AbsolutePath | awk -F '/' '{print$4}')_${FileName}"
            else
                LogPath="$LogDir/${FileName}"
            fi
        else
            local FormatInputName=$(echo $AbsolutePath | awk -F "/" '{print $NF}')
            local FormatInputDir=$(echo $AbsolutePath | awk -F "$FormatInputName" '{print$1}')
            echo -e "\n$ERROR 在 $FormatInputDir 目录未检测到 $FormatInputName 脚本的存在，请确认！"
            Help
            exit 1
        fi

    else
        ## 仅 Scripts 目录：
        local FileNameTmp1=$(echo $input | perl -pe "{s|\.js||; s|\.py||; s|\.ts||}")
        local FileNameTmp2=$(echo $input | perl -pe "{s|jd_||; s|\.js||; s|\.py||; s|\.ts||; s|^|jd_|}")
        local SeekDir="$ScriptsDir $ScriptsDir/tools $ScriptsDir/backUp $ScriptsDir/utils"
        for dir in ${SeekDir}; do
            if [ -f ${dir}/${FileNameTmp1}.js ]; then
                FileName=${FileNameTmp1}
                FileFormat="JavaScript"
                WhichDir=${dir}
                break
            elif [ -f ${dir}/${FileNameTmp1}.ts ]; then
                FileName=${FileNameTmp1}
                FileFormat="TypeScript"
                WhichDir=${dir}
                break
            elif [ -f ${dir}/${FileNameTmp1}.py ]; then
                FileName=${FileNameTmp1}
                FileFormat="Python"
                WhichDir=${dir}
                break
            elif [ -f ${dir}/${FileNameTmp2}.js ]; then
                FileName=${FileNameTmp2}
                FileFormat="JavaScript"
                WhichDir=${dir}
                break
            elif [ -f ${dir}/${FileNameTmp2}.ts ]; then
                FileName=${FileNameTmp2}
                FileFormat="TypeScript"
                WhichDir=${dir}
                break
            elif [ -f ${dir}/${FileNameTmp2}.py ]; then
                FileName=${FileNameTmp2}
                FileFormat="Python"
                WhichDir=${dir}
                break
            fi
        done
        if [ ! -n "${FileName}" ] && [ ! -n "${WhichDir}" ]; then
            echo -e "\n$ERROR 在 $ScriptsDir、$ScriptsDir/tools、$ScriptsDir/backUp、$ScriptsDir/utils 四个目录下均未检测到 $input 脚本的存在，请确认！"
            Help
            exit 1
        else
            LogPath="$LogDir/${FileName}"
        fi
    fi
    case ${FileFormat} in
    Python | TypeScript)
        case $Arch in
        armv7l | armv6l)
            echo -e "\n$ERROR 您的处理器架构不支持运行 Python 和 TypeScript 脚本，建议更换运行环境！"
            Help
            exit 1
            ;;
        esac
        ;;
    esac
}

## 检测环境
function Check_Moudules() {
    local CurrentDir=$(pwd)
    local WorkDir=$1
    cd $WorkDir
    [ ! -f $WorkDir/jdCookie.js ] && cp -rf $UtilsDir/jdCookie.js .
    [ ! -f $WorkDir/USER_AGENTS.js ] && cp -rf $UtilsDir/USER_AGENTS.js .
    cp -rf $FileSendNotify .
    cd $CurrentDir
}

## 随机时间
function Random_Delay() {
    if [[ -n ${RandomDelay} ]] && [[ ${RandomDelay} -gt 0 ]]; then
        CurMin=$(date "+%-M")
        if [[ ${CurMin} -gt 2 && ${CurMin} -lt 30 ]] || [[ ${CurMin} -gt 31 && ${CurMin} -lt 59 ]]; then
            CurDelay=$((${RANDOM} % ${RandomDelay} + 1))
            echo -e "\n$WORKING 命令未添加 \"now\"，随机延迟 ${CurDelay} 秒后再执行任务，如需立即终止，请按 Ctrl+C...\n"
            sleep ${CurDelay}
        fi
    fi
}

## 依次执行
function Run_Normal() {
    local p=$1
    Find_Script $p
    Import_Config $p
    Update_Crontab
    Count_UserSum
    Combin_All
    [ $# -eq 1 ] && Random_Delay
    Make_Dir ${LogPath}
    local LogFile="${LogPath}/$(date "+%Y-%m-%d-%H-%M-%S").log"
    cd ${WhichDir}
    case ${FileFormat} in
    JavaScript)
        node ${FileName}.js 2>&1 | tee ${LogFile}
        ;;
    Python)
        python3 -u ${FileName}.py 2>&1 | tee ${LogFile}
        ;;
    TypeScript)
        ts-node-transpile-only ${FileName}.ts 2>&1 | tee ${LogFile}
        ;;
    esac
}

## 并发执行
function Run_Concurrent() {
    case $Arch in
    armv7l | armv6l)
        echo -e "\n$ERROR 您当前使用的是32位处理器，考虑到性能不佳已禁用并发执行功能，建议更换运行环境！"
        Help
        exit 1
        ;;
    *)
        local p=$1
        local UserNum AccountNum
        Find_Script $p
        Import_Config $p
        Update_Crontab
        Count_UserSum
        Combin_ShareCodes
        Trans_UN_SUBSCRIBES
        Make_Dir ${LogPath}
        echo -e "\n各账号间已经在后台开始并发执行，前台不显示脚本输出内容而是直接写入到日志文件中。\n"
        for ((UserNum = 1; UserNum <= ${UserSum}; UserNum++)); do
            for num in ${TempBlockCookie}; do
                [[ $UserNum -eq $num ]] && continue 2
            done
            AccountNum=Cookie$UserNum
            export JD_COOKIE=${!AccountNum}
            LogFile="${LogPath}/$(date "+%Y-%m-%d-%H-%M-%S")_${UserNum}.log"
            cd ${WhichDir}
            case ${FileFormat} in
            JavaScript)
                node ${FileName}.js &>${LogFile} &
                ;;
            Python)
                python3 -u ${FileName}.py &>${LogFile} &
                ;;
            TypeScript)
                ts-node-transpile-only ${FileName}.ts &>${LogFile} &
                ;;
            esac
        done
        echo -e "$WORKING 并发任务正在执行中，请耐心等待所有任务执行完毕...\n"
        wait
        echo -e "$COMPLETE 所有并发任务已全部完成，如需查询执行结果，请直接查看相关日志\n"
        ;;
    esac
}
function Run_Concurrent_Lite() {
    local FileName=$1
    local FileFormat=$2
    local UserNum AccountNum
    Make_Dir ${LogPath}
    echo -e "\n各账号间已经在后台开始并发执行，前台不显示脚本输出内容而是直接写入到日志文件中。\n"
    for ((UserNum = 1; UserNum <= ${UserSum}; UserNum++)); do
        for num in ${TempBlockCookie}; do
            [[ $UserNum -eq $num ]] && continue 2
        done
        AccountNum=Cookie$UserNum
        export JD_COOKIE=${!AccountNum}
        case ${FileFormat} in
        JavaScript)
            node ${FileName}.js &>${LogPath}/$(date "+%Y-%m-%d-%H-%M-%S")_${UserNum}.log &
            ;;
        Python)
            python3 -u ${FileName}.py &>${LogPath}/$(date "+%Y-%m-%d-%H-%M-%S")_${UserNum}.log &
            ;;
        TypeScript)
            ts-node-transpile-only ${FileName}.ts &>${LogPath}/$(date "+%Y-%m-%d-%H-%M-%S")_${UserNum}.log &
            ;;
        esac
    done
    echo -e "$WORKING 并发任务正在执行中，请耐心等待所有任务执行完毕...\n"
    wait
    echo -e "$COMPLETE 所有并发任务已全部完成，如需查询执行结果，请直接查看相关日志\n"
}

## 指定执行
function Run_Specify() {
    local p=$1
    local CookieNum=$2
    Find_Script $p
    Import_Config
    Update_Crontab
    Count_UserSum
    Combin_ShareCodes
    Trans_UN_SUBSCRIBES
    Make_Dir ${LogPath}
    local LogFile="${LogPath}/$(date "+%Y-%m-%d-%H-%M-%S")_${CookieNum}.log"
    local AccountNum=Cookie$CookieNum
    export JD_COOKIE=${!AccountNum}
    if [[ -z $JD_COOKIE ]]; then
        echo -e "\n$ERROR 请确认账号是否存在！"
        Help
        exit 1
    fi
    cd ${WhichDir}
    case ${FileFormat} in
    JavaScript)
        node ${FileName}.js 2>&1 | tee ${LogFile}
        ;;
    Python)
        python3 -u ${FileName}.py 2>&1 | tee ${LogFile}
        ;;
    TypeScript)
        ts-node-transpile-only ${FileName}.ts 2>&1 | tee ${LogFile}
        ;;
    esac
}

## 迅速执行
function Run_Rapidly() {
    case $# in
    1)
        local p=$1
        Import_Config $p
        Count_UserSum
        export JD_COOKIE=$(Combin_Sub Cookie)
        FileNameTmp1=$(echo $p | awk -F "/" '{print $NF}' | perl -pe "{s|\.js||; s|\.py||; s|\.ts||}")
        FileNameTmp2=$(echo $p | awk -F "/" '{print $NF}' | perl -pe "{s|jd_||; s|\.js||; s|\.py||; s|\.ts||; s|^|jd_|}")
        cd $ScriptsDir
        if [ -f $ScriptsDir/${FileNameTmp1}.js ]; then
            Make_Dir "$LogDir/${FileNameTmp1}"
            node ${FileNameTmp1}.js 2>&1 | tee $LogDir/${FileNameTmp1}/$(date "+%Y-%m-%d-%H-%M-%S").log
        elif [ -f $ScriptsDir/${FileNameTmp1}.py ]; then
            Make_Dir "$LogDir/${FileNameTmp1}"
            python3 -u ${FileNameTmp1}.py 2>&1 | tee $LogDir/${FileNameTmp1}/$(date "+%Y-%m-%d-%H-%M-%S").log
        elif [ -f $ScriptsDir/${FileNameTmp1}.ts ]; then
            Make_Dir "$LogDir/${FileNameTmp1}"
            ts-node-transpile-only ${FileNameTmp1}.ts 2>&1 | tee $LogDir/${FileNameTmp1}/$(date "+%Y-%m-%d-%H-%M-%S").log
        elif [ -f $ScriptsDir/${FileNameTmp2}.js ]; then
            Make_Dir "$LogDir/${FileNameTmp2}"
            node ${FileNameTmp2}.js 2>&1 | tee $LogDir/${FileNameTmp2}/$(date "+%Y-%m-%d-%H-%M-%S").log
        elif [ -f $ScriptsDir/${FileNameTmp2}.py ]; then
            Make_Dir "$LogDir/${FileNameTmp2}"
            python3 -u ${FileNameTmp2}.py 2>&1 | tee $LogDir/${FileNameTmp2}/$(date "+%Y-%m-%d-%H-%M-%S").log
        elif [ -f $ScriptsDir/${FileNameTmp2}.ts ]; then
            Make_Dir "$LogDir/${FileNameTmp2}"
            ts-node-transpile-only ${FileNameTmp2}.ts 2>&1 | tee $LogDir/${FileNameTmp2}/$(date "+%Y-%m-%d-%H-%M-%S").log
        else
            FormatInput=$(echo $p | awk -F "/" '{print $NF}')
            echo -e "\n$ERROR 在 $ScriptsDir 目录下未检测到 $FormatInput 脚本的存在，请确认！"
            Help
            exit 1
        fi
        ;;
    2)
        if [ $2 = "-c" ]; then
            case $Arch in
            armv7l | armv6l)
                echo -e "\n$ERROR 您当前使用的是32位处理器，考虑到性能不佳已禁用并发执行功能，建议更换运行环境！"
                Help
                exit 1
                ;;
            *)
                local p=$1
                Import_Config $p
                Count_UserSum
                export JD_COOKIE=$(Combin_Sub Cookie)
                FileNameTmp1=$(echo $p | awk -F "/" '{print $NF}' | perl -pe "{s|\.js||; s|\.py||; s|\.ts||}")
                FileNameTmp2=$(echo $p | awk -F "/" '{print $NF}' | perl -pe "{s|jd_||; s|\.js||; s|\.py||; s|\.ts||; s|^|jd_|}")
                if [ -f $ScriptsDir/${FileNameTmp1}.js ]; then
                    Run_Concurrent_Lite ${FileNameTmp1} JavaScript
                elif [ -f $ScriptsDir/${FileNameTmp1}.py ]; then
                    Run_Concurrent_Lite ${FileNameTmp1} Python
                elif [ -f $ScriptsDir/${FileNameTmp1}.ts ]; then
                    Run_Concurrent_Lite ${FileNameTmp1} TypeScript
                elif [ -f $ScriptsDir/${FileNameTmp2}.js ]; then
                    Run_Concurrent_Lite ${FileNameTmp2} JavaScript
                elif [ -f $ScriptsDir/${FileNameTmp2}.py ]; then
                    Run_Concurrent_Lite ${FileNameTmp2} Python
                elif [ -f $ScriptsDir/${FileNameTmp2}.ts ]; then
                    Run_Concurrent_Lite ${FileNameTmp2} TypeScript
                else
                    FormatInput=$(echo $p | awk -F "/" '{print $NF}')
                    echo -e "\n$ERROR 在 $ScriptsDir 目录下未检测到 $FormatInput 脚本的存在，请确认！"
                    Help
                    exit 1
                fi
                ;;
            esac
        else
            echo -e "\n$COMMAND_ERROR"
            Help
        fi
        ;;
    esac
}

## 终止执行
function Process_Kill() {
    local p=$1
    Find_Script $p
    ps -ef | egrep -v "grep|pkill" | grep "${FileName}" -wq
    local ExitSearchProcess=$?
    if [[ ${ExitSearchProcess} == 0 ]]; then
        kill -9 $(ps -ef | grep "${FileName}" | grep -v "pkill" | awk '$0 !~/grep/ {print $1}' | tr -s '\n' ' ') >/dev/null 2>&1
        sleep 1
        kill -9 $(ps -ef | grep "${FileName}" | grep -v "pkill" | awk '$0 !~/grep/ {print $1}' | tr -s '\n' ' ') >/dev/null 2>&1
        ps -ef | egrep -v "grep|pkill" | grep "${FileName}" -wq
        if [ $? -eq 0 ]; then
            echo -e "\n$ERROR 进程终止失败，请尝试手动终止 kill -9 <pid>\n"
            ps -axo pid,pcpu,pmem,command --sort -pmem | less | grep ${FileName} | egrep -v "grep|pkill"
        else
            echo -e "\n$COMPLETE 已终止进程\n"
        fi
    else
        echo -e "\n$ERROR 未检测到与 ${FileName} 脚本相关的进程，请重新确认！"
        Help
        exit 1
    fi
}

## 远程执行
function Run_RawScript() {
    local input_url=$1
    local DownloadJudge RepositoryJudge ProxyJudge FileName FormatFileName RepositoryName RunMod
    FileName=$(echo $input_url | awk -F "/" '{print $NF}')
    RepositoryName=$(echo $input_url | egrep -o "github|gitee|gitlab")
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
            DownloadJudge=${GithubProxy}
            RunMod="normal"
        elif [ $2 = "-c" ]; then
            DownloadJudge=""
            RunMod="concurrent"
        elif [[ $2 = "-pc" ]] || [[ $3 = "-cp" ]]; then
            DownloadJudge=${GithubProxy}
            RunMod="concurrent"
        else
            echo -e "\n$COMMAND_ERROR"
            Help
        fi
        ;;
    3)
        if [ $2 = "-p" ]; then
            DownloadJudge=${GithubProxy}
        elif [ $2 = "-c" ]; then
            RunMod="concurrent"
        else
            echo -e "\n$COMMAND_ERROR"
            Help
        fi
        if [ $3 = "-c" ]; then
            RunMod="concurrent"
        elif [ $3 = "-p" ]; then
            DownloadJudge=${GithubProxy}
        else
            echo -e "\n$COMMAND_ERROR"
            Help
        fi
        ;;
    *)
        DownloadJudge=""
        RunMod="normal"
        ;;
    esac

    if [[ ${DownloadJudge} == ${GithubProxy} ]]; then
        ProxyJudge="使用代理"
    else
        ProxyJudge=""
    fi
    echo -e "\n$WORKING 开始从${RepositoryJudge}远程仓库${ProxyJudge}下载 ${FileName} 脚本..."
    wget -q --no-check-certificate "${DownloadJudge}$input_url" -O "$ScriptsDir/${FileName}.new"
    if [[ $? -eq 0 ]]; then
        mv -f "$ScriptsDir/${FileName}.new" "$ScriptsDir/${FileName}"
        case ${RunMod} in
        normal)
            RunModJudge="依次执行"
            ;;
        concurrent)
            RunModJudge="并发执行"
            ;;
        esac
        echo -e "\n$COMPLETE 下载完成，倒计时 3 秒后开始${RunModJudge}\n"
        sleep 1 && echo -e "3..." && sleep 1 && echo -e "2.." && sleep 1 && echo -e "1." && sleep 1
        FormatFileName=$(echo ${FileName} | perl -pe "{s|\.js||; s|\.py||; s|\.ts||}")
        case ${RunMod} in
        normal)
            Run_Normal ${FormatFileName} now
            ;;
        concurrent)
            case $Arch in
            armv7l | armv6l)
                echo -e "\n$ERROR 您当前使用的是32位处理器，考虑到性能不佳已禁用并发执行功能，建议更换运行环境！"
                Help
                exit 1
                ;;
            *)
                Run_Concurrent ${FormatFileName}
                ;;
            esac
            ;;
        esac
    else
        [ -f "$ScriptsDir/${FileName}.new" ] && rm -rf "$ScriptsDir/${FileName}.new"
        echo -e "\n$ERROR 脚本 ${FileName} 下载失败，请检查 URL 地址是否正确或网络连通性问题..."
        Help
        exit 1
    fi
}

## 账号控制
function Cookies_Control() {
    Import_Config
    case $1 in
    check)
        Count_UserSum
        # [ -f $FileSendMark ] && rm -rf $FileSendMark
        function Gen_pt_pin_array() {
            local Tmp1 Tmp2 i pt_pin_temp
            for ((user_num = 1; user_num <= $UserSum; user_num++)); do
                Tmp1=Cookie$user_num
                Tmp2=${!Tmp1}
                i=$(($user_num - 1))
                pt_pin_temp=$(echo $Tmp2 | perl -pe "{s|.*pt_pin=([^; ]+)(?=;?).*|\1|}")
                pt_pin[i]=$pt_pin_temp
            done
        }

        function CheckCookie() {
            local p=$1
            local ConnectionTest="$(curl -I -s --connect-timeout 5 https://bean.m.jd.com/bean/signIndex.action -w %{http_code} | tail -n1)"
            local CookieValidityTest="$(curl -s --noproxy "*" "https://bean.m.jd.com/bean/signIndex.action" -H "cookie: $p")"
            if [ "$ConnectionTest" -eq "302" ]; then
                if [[ "$CookieValidityTest" ]]; then
                    echo -e "\033[32m[✔]\033[0m"
                else
                    echo -e "\033[31m[X]\033[0m"
                fi
            else
                echo -e "\033[31m[API请求失败]\033[0m"
            fi
        }

        function Print_Info() {
            echo -e "\n检测到本地共有 \033[34m$UserSum\033[0m 个账号，当前状态信息如下（[✔]有效，[X]无效）："
            for ((m = 0; m < $UserSum; m++)); do
                local CookieUpdateDate=$(grep "上次更新：" $FileConfUser | grep ${pt_pin[m]} | grep -E "20[0-9][0-9]" | head -1 | awk -F '：' '{print$2}' | awk -F ' ' '{print$1}')
                if [ -z ${CookieUpdateDate} ]; then
                    local UpdateTime="更新日期：[\033[34mUnknow\033[0m]"
                else
                    local UpdateTime="更新日期：[\033[34m${CookieUpdateDate}\033[0m]"
                    local Tmp1=$(($(date -d $(date "+%Y-%m-%d") +%s) - $(date -d "${CookieUpdateDate}" +%s)))
                    local Tmp2=$(($Tmp1 / 86400))
                    local Tmp3=$((30 - $Tmp2))
                    [ -z $CheckCookieDaysAgo ] && local Days="2" || local Days=$(($CheckCookieDaysAgo - 1))
                    if [ $Tmp3 -le $Days ] && [ $Tmp3 -ge 0 ]; then
                        [ $Tmp3 = 0 ] && local TmpTime="今天" || local TmpTime="$Tmp3天后"
                        echo -e "账号$((m + 1))：$(printf $(echo ${pt_pin[m]} | perl -pe "s|%|\\\x|g;")) 将在$TmpTime过期"
                        # echo -e "账号$((m + 1))：$(printf $(echo ${pt_pin[m]} | perl -pe "s|%|\\\x|g;")) 将在$TmpTime过期" >>$FileSendMark
                    fi
                fi
                num=$((m + 1))
                echo -e "$num：$(printf $(echo ${pt_pin[m]} | perl -pe "s|%|\\\x|g;")) $(CheckCookie $(grep -E "Cookie[1-9]" $FileConfUser | grep ${pt_pin[m]} | awk -F '\"' '{print$2}'))    $UpdateTime"
            done
        }
        Gen_pt_pin_array
        Print_Info
        # if [ -f $FileSendMark ]; then
        #     echo -e "\n检测到下面的账号将在近期失效，请注意即时更新！"
        #     cat $FileSendMark
        #     sed -i 's/$/&\\n/g' $FileSendMark
        #     Notify "账号过期提醒" "$(cat $FileSendMark)"
        #     rm -rf $FileSendMark
        # fi
        echo ''
        ;;
    update)
        ## 更新 sign 签名库
        Make_Dir $SignDir
        if [ ! -d $SignDir/.git ]; then
            git clone -b master git@jd_base_gitee:supermanito/panel_sign_json.git $SignDir >/dev/null
        else
            cd $SignDir
            git fetch --all >/dev/null
            git reset --hard origin/master >/dev/null
        fi
        ## 执行脚本
        if [ -f $FileUpdateCookie ]; then
            local UserNum AccountNum
            Import_Config updateCookies
            Update_Crontab
            Count_UserSum
            LogPath="$LogDir/updateCookies"
            Make_Dir ${LogPath}
            echo -e "\n$WORKING 正在依次更新中，请耐心等待所有任务执行完毕...\n"
            for ((UserNum = 1; UserNum <= ${UserSum}; UserNum++)); do
                for num in ${TempBlockCookie}; do
                    [[ $UserNum -eq $num ]] && continue 2
                done
                AccountNum=Cookie$UserNum
                export JD_COOKIE=${!AccountNum}
                LogFile="${LogPath}/$(date "+%Y-%m-%d-%H-%M-%S")_$UserNum.log"
                cd $PanelDir
                node updateCookies.js &>${LogFile} &
                wait
                grep "Cookie =>" ${LogFile}
            done
            echo -e "\n$COMPLETE 更新完成\n"
        fi
        ;;
    esac
}

## 推送通知
function SendNotify() {
    Notify $1 $2
}

## 删除日志
function Remove_LogFiles() {
    local LogFileList LogDate DiffTime Stmp DateDelLog LineEndGitPull LineEndBotRun
    Import_Config
    function Rm_JsLog() {
        LogFileList=$(ls -l $LogDir/*/*.log | awk '{print $9}' | grep -v "log/bot")
        for log in ${LogFileList}; do
            ## 文件名比文件属性获得的日期要可靠
            LogDate=$(echo ${log} | awk -F "/" '{print $NF}' | cut -c1-10)
            DiffTime=$(($(date +%s) - $(date +%s -d "${LogDate}")))
            [ ${DiffTime} -gt $((${RmLogDaysAgo} * 86400)) ] && rm -vf ${log}
        done
    }
    ## 删除 update 的运行日志
    function Rm_UpdateLog() {
        if [ -f $LogDir/update.log ]; then
            Stmp=$(($(date "+%s") - 86400 * ${RmLogDaysAgo}))
            DateDelLog=$(date -d "@${Stmp}" "+%Y-%m-%d")
            LineEndGitPull=$(($(cat $LogDir/update.log | grep -n "${DateDelLog}" | head -1 | awk -F ":" '{print $1}') - 3))
            [ ${LineEndGitPull} -gt 0 ] && perl -i -ne "{print unless 1 .. ${LineEndGitPull} }" $LogDir/update.log
        fi
    }
    ## 删除 Bot 的运行日志
    function Rm_BotLog() {
        if [ -f $BotLogDir/run.log ]; then
            Stmp=$(($(date "+%s") - 86400 * ${RmLogDaysAgo}))
            DateDelLog=$(date -d "@${Stmp}" "+%Y-%m-%d")
            LineEndBotRun=$(($(cat $BotLogDir/run.log | grep -n "${DateDelLog}" | tail -n 1 | awk -F ":" '{print $1}') - 3))
            [ ${LineEndBotRun} -gt 0 ] && perl -i -ne "{print unless 1 .. ${LineEndBotRun} }" $BotLogDir/run.log
        fi
    }
    ## 删除空文件夹
    function Rm_EmptyDir() {
        cd $LogDir
        for dir in $(ls); do
            if [ -d ${dir} ] && [[ $(ls ${dir}) == "" ]]; then
                rm -rf ${dir}
            fi
        done
    }
    ## 运行
    if [ -n "${RmLogDaysAgo}" ]; then
        echo -e "\nTips：删除日志耗时较长，请耐心等待"
        echo -e "\n$WORKING 开始检索日志文件..."
        Rm_JsLog
        Rm_UpdateLog
        Rm_BotLog
        Rm_EmptyDir
        echo -e "\n$COMPLETE 删除完毕\n"
    fi
}

## 进程监控
function Process_Monitor() {
    local MemoryTotal=$(free -m | grep Mem | awk -F ' ' '{print$2}')
    local MemoryUsed=$(free -m | grep Mem | awk -F ' ' '{print$3}')
    local MemoryFree=$(free -m | grep Mem | awk -F ' ' '{print$4}')
    local MemoryUsage=$(awk 'BEGIN{printf "%.1f%%\n",('$MemoryUsed'/'$MemoryTotal')*100}')
    local CPUUsage=$(busybox top -n 1 | grep CPU | head -1 | awk -F ' ' '{print$2}')
    echo -e "\n\033[34m[性能监控]\033[0m  CPU：\033[33m${CPUUsage}\033[0m   Memory：\033[33m${MemoryUsage}\033[0m   剩余内存可用：\033[33m${MemoryFree}MB\033[0m"
    if [[ $(echo ${MemoryUsage} | awk -F '.' '{print$1}') -gt "89" ]]; then
        sync >/dev/null 2>&1
        echo 3 >/proc/sys/vm/drop_caches >/dev/null 2>&1
        local MemoryUsedNew=$(free -m | grep Mem | awk -F ' ' '{print$3}')
        local MemoryFreeNew=$(free -m | grep Mem | awk -F ' ' '{print$4}')
        local MemoryUsageNew=$(awk 'BEGIN{printf "%.1f%%\n",('$MemoryUsedNew'/'$MemoryTotal')*100}')
        echo -e "\n$WORKING 检测到内存占用过高，开始尝试释放内存..."
        echo -e "\033[34m[释放后]\033[0m  Memory：\033[33m${MemoryUsageNew}\033[0m   剩余可用内存：\033[33m${MemoryFreeNew}MB\033[0m"
    fi
    echo -e "\n\033[34m[运行时长]  [CPU]    [内存]    [脚本名称]\033[0m"
    ps -axo user,time,pcpu,user,pmem,user,command --sort -pmem | less | egrep ".js\b|.py\b|.ts\b" | egrep -Ev "server.js|pm2|egrep|perl|sed|bash" | perl -pe '{s| root     |% |g; s|\/usr\/bin\/ts-node ||g; s|\/usr\/bin\/node ||g; s|node ||g;  s|root     |#|g; s|#[0-9][0-9]:|#|g;  s|  | |g; s| |     |g; s|#|•  |g;}'
    echo ''
}

## 列出本地脚本清单
function List_Local_Scripts() {
    local ScriptType Tmp1 Tmp2
    local ShieldingKeywords="AGENTS|Cookie|cookie|Token|ShareCodes|sendNotify|JDJR|validate|ZooFaker|tencentscf|api_test|app.|main.|jd_update.js|jd_env_copy.js|index.js"
    case $Arch in
    armv7l | armv6l)
        ScriptType=".js\b"
        ;;
    *)
        if [ -x /usr/bin/python3 ]; then
            Tmp1="|.py\b"
        else
            Tmp1=""
        fi
        if [ -x /usr/bin/ts-node ]; then
            Tmp2="|.ts\b"
        else
            Tmp2=""
        fi
        ScriptType=".js\b${Tmp1}${Tmp2}"
        ;;
    esac

    ## 列出 Scripts 仓库中的脚本
    function List_Scripts() {
        local Name
        cd $ScriptsDir
        local ListFiles=($(
            git ls-files | egrep "${ScriptType}" | grep -E "j[drx]_" | grep -Ev "/|${ShieldingKeywords}"
        ))
        echo -e "\n❖ Scripts 仓库的脚本："
        for ((i = 0; i < ${#ListFiles[*]}; i++)); do
            Query_Name ${ListFiles[i]}
            echo -e "$(($i + 1)).${Name}：${ListFiles[i]}"
        done
    }

    ## 列出本地其它仓库中的脚本
    function List_Own() {
        local Name FileName WhichDir
        Import_Config_Not_Check
        if [ ! -z ${OwnRepoUrl1} ]; then
            local ListFiles=($(
                cat $ListOwnScripts
            ))
            echo -e "\n❖ Own 仓库的脚本："
            for ((i = 0; i < ${#ListFiles[*]}; i++)); do
                FileName=$(echo ${ListFiles[i]} | awk -F "/" '{print $NF}')
                WhichDir=$(echo ${ListFiles[i]} | awk -F "$FileName" '{print$1}')
                cd $WhichDir
                Query_Name $FileName
                echo -e "$(($i + 1)).${Name}：${ListFiles[i]}"
            done
        fi
    }

    ## 列出非 Scripts 仓库的第三方脚本
    function List_Other() {
        local Name
        cd $ScriptsDir
        local ListFiles=($(
            ls | egrep "${ScriptType}" | grep -Ev "$(git ls-files)|${ShieldingKeywords}"
        ))
        if [ ${#ListFiles[*]} != 0 ]; then
            echo -e "\n❖ 第三方脚本："
            for ((i = 0; i < ${#ListFiles[*]}; i++)); do
                Query_Name ${ListFiles[i]}
                echo -e "$(($i + 1)).${Name}：${ListFiles[i]}"
            done
        fi
    }

    echo -e "#################################### 本  地  脚  本  清  单 ####################################"
    echo -e "从第三方导入的脚本不会随更新而自动删除，Python 和 TypeScript 类型的脚本只有在安装了相关环境后才会列出"
    echo -e "TypeScript 脚本如遇报错可使用 tsc 命令转换成 js 脚本后执行，转换命令格式：tsc <含有绝对路径的脚本名>"
    List_Scripts
    List_Own
    List_Other
    echo ''
}

## 判定命令
case $# in
0)
    Help
    ;;
1)
    case $1 in
    list)
        List_Local_Scripts
        ;;
    exsc)
        bash $FileCode
        ;;
    rmlog)
        Remove_LogFiles
        ;;
    ps)
        Process_Monitor
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
        Run_Concurrent $1
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
    update | check)
        case $1 in
        cookie)
            Cookies_Control $2
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
3)
    case $2 in
    raw)
        Run_RawScript $1 $3
        ;;
    rapid)
        Run_Rapidly $1 $3
        ;;
    *)
        case $1 in
        notify)
            SendNotify $2 $3
            ;;
        *)
            echo -e "\n$COMMAND_ERROR"
            Help
            ;;
        esac
        ;;
    esac
    ;;

4)
    case $2 in
    raw)
        Run_RawScript $1 $3 $4
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
