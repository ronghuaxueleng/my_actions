#!/usr/bin/env bash
## Author: SuperManito
## Modified: 2021-10-08

ShellDir=${JD_DIR}
. $ShellDir/share.sh

## 匹配输入脚本的路径
function Find_Script() {
    FileName=""
    WhichDir=""
    FileFormat=""
    local input=$1
    local AbsolutePath FileNameTmp FileNameTmp1 FileNameTmp2 WhichDirTmp FormatInputName FormatInputDir
    echo $input | grep "/" -q
    if [[ $? -eq 0 ]]; then
        ## 指定路径：
        ## 判定输入的是绝对路径还是相对路径
        echo $input | grep "$ShellDir/" -q
        if [[ $? -eq 0 ]]; then
            AbsolutePath=$input
        else
            echo $input | grep "\.\./" -q
            if [[ $? -eq 0 ]]; then
                local PwdTmp=$(pwd | perl -pe "{s|/$(pwd | awk -F '/' '{printf$NF}')||g;}")
                AbsolutePath=$(echo "$input" | perl -pe "{s|\.\./|${PwdTmp}/|;}")
            else
                AbsolutePath=$(echo "$input" | perl -pe "{s|\./||; s|^*|$(pwd)/|;}")
            fi
        fi
        ## 判定输入是否含有后缀
        FileNameTmp=${AbsolutePath##*/}
        WhichDirTmp=$(echo $AbsolutePath | awk -F "/$FileNameTmp" '{print$1}')
        echo $FileNameTmp | grep "\." -q
        if [[ $? -eq 0 ]]; then
            if [ -f $AbsolutePath ]; then
                local FileFormatTmp=$(echo $FileNameTmp | awk -F "\." '{print$NF}')
                case ${FileFormatTmp} in
                js)
                    FileFormat="JavaScript"
                    ;;
                py)
                    FileFormat="Python"
                    ;;
                ts)
                    FileFormat="TypeScript"
                    ;;
                *)
                    echo -e "\n$ERROR 项目不支持运行 .${FileFormatTmp} 类型的脚本！"
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
            [[ ${WhichDir} != $ScriptsDir ]] && Check_Moudules $WhichDir
            if [ $(echo $AbsolutePath | awk -F '/' '{print$3}') = "own" ]; then
                LogPath="$LogDir/$(echo $AbsolutePath | awk -F '/' '{print$4}')_${FileName}"
            else
                LogPath="$LogDir/${FileName}"
            fi
        else
            FormatInputName=${AbsolutePath##*/}
            FormatInputDir=$(echo $AbsolutePath | awk -F "$FormatInputName" '{print$1}')
            echo -e "\n$ERROR 在 $FormatInputDir 目录未检测到 $FormatInputName 脚本的存在，请确认！"
            Help
            exit 1
        fi
    else
        ## 仅 Scripts 目录：
        FileNameTmp1=$(echo $input | perl -pe "{s|\.js||; s|\.py||; s|\.ts||}")
        FileNameTmp2=$(echo $input | perl -pe "{s|jd_||; s|\.js||; s|\.py||; s|\.ts||; s|^|jd_|}")
        local SeekDir="$ScriptsDir $ScriptsDir/activity $ScriptsDir/backUp $ScriptsDir/utils"
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
            echo -e "\n$ERROR 在 $ScriptsDir、$ScriptsDir/activity、$ScriptsDir/backUp、$ScriptsDir/utils 四个目录下均未检测到 $input 脚本的存在，请确认！"
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
    [ ! -d /usr/lib/node_modules/got ] && npm install -g got
    [ ! -d /usr/lib/node_modules/tough-cookie ] && npm install -g tough-cookie
    cd $CurrentDir
}

## 随机时间
function Random_Delay() {
    if [[ -n ${RandomDelay} ]] && [[ ${RandomDelay} -gt 0 ]]; then
        local CurMin=$(date "+%-M")
        if [[ ${CurMin} -gt 2 && ${CurMin} -lt 30 ]] || [[ ${CurMin} -gt 31 && ${CurMin} -lt 59 ]]; then
            CurDelay=$((${RANDOM} % ${RandomDelay} + 1))
            echo -en "\n$WORKING 已随机延迟时间，${CurDelay} 秒后开始执行任务..."
            sleep ${CurDelay}
        fi
    fi
}

## 依次执行
function Run_Normal() {
    local p=$1
    Find_Script $p
    Import_Config ${FileName}
    Update_Crontab
    Count_UserSum
    Combin_All
    [ $# -eq 1 ] && Random_Delay
    Make_Dir ${LogPath}
    local LogFile="${LogPath}/$(date "+%Y-%m-%d-%H-%M-%S").log"
    cd ${WhichDir}
    echo -e "[$(date "${TIME}:%N" | cut -c1-23)] 开始执行\n" >>${LogFile}
    case ${FileFormat} in
    JavaScript)
        if [[ ${EnableGlobalProxy} == true ]]; then
            node -r 'global-agent/bootstrap' ${FileName}.js 2>&1 | tee -a ${LogFile}
        else
            node ${FileName}.js 2>&1 | tee -a ${LogFile}
        fi
        ;;
    Python)
        python3 -u ${FileName}.py 2>&1 | tee -a ${LogFile}
        ;;
    TypeScript)
        ts-node-transpile-only ${FileName}.ts 2>&1 | tee -a ${LogFile}
        ;;
    esac
    echo -e "\n[$(date "${TIME}:%N" | cut -c1-23)] 执行结束" >>${LogFile}
}

## 并发执行
function Run_Concurrent() {
    case $Arch in
    armv7l | armv6l)
        echo -e "\n$ERROR 您当前使用的是32位处理器，考虑到性能不佳已禁用并发执行功能！"
        Help
        exit 1
        ;;
    *)
        local p=$1
        local UserNum AccountNum
        Find_Script $p
        Import_Config ${FileName}
        Update_Crontab
        Count_UserSum
        Combin_ShareCodes
        Make_Dir ${LogPath}
        for ((UserNum = 1; UserNum <= ${UserSum}; UserNum++)); do
            for num in ${TempBlockCookie}; do
                [[ $UserNum -eq $num ]] && continue 2
            done
            AccountNum=Cookie$UserNum
            export JD_COOKIE=${!AccountNum}
            LogFile="${LogPath}/$(date "+%Y-%m-%d-%H-%M-%S")_${UserNum}.log"
            cd ${WhichDir}
            echo -e "[$(date "${TIME}:%N" | cut -c1-23)] 开始执行，不记录结束时间\n" >>${LogFile}
            case ${FileFormat} in
            JavaScript)
                if [[ ${EnableGlobalProxy} == true ]]; then
                    node -r 'global-agent/bootstrap' ${FileName}.js 2>&1 &>>${LogFile} &
                else
                    node ${FileName}.js 2>&1 &>>${LogFile} &
                fi
                ;;
            Python)
                python3 -u ${FileName}.py 2>&1 &>>${LogFile} &
                ;;
            TypeScript)
                ts-node-transpile-only ${FileName}.ts 2>&1 &>>${LogFile} &
                ;;
            esac
        done
        echo -e "\n$COMPLETE 已在后台部署并发任务，如需查询脚本输出内容请直接查看 ${LogPath} 目录下的相关日志\n"
        ;;
    esac
}
function Run_Concurrent_Lite() {
    local FileName=$1
    local FileFormat=$2
    local UserNum AccountNum
    Make_Dir "$LogDir/${FileName}"
    for ((UserNum = 1; UserNum <= ${UserSum}; UserNum++)); do
        for num in ${TempBlockCookie}; do
            [[ $UserNum -eq $num ]] && continue 2
        done
        AccountNum=Cookie$UserNum
        export JD_COOKIE=${!AccountNum}
        cd $ScriptsDir
        echo -e "[$(date "${TIME}:%N" | cut -c1-23)] 开始执行，不记录结束时间\n" >>$LogDir/${FileName}/$(date "+%Y-%m-%d-%H-%M-%S")_${UserNum}.log
        case ${FileFormat} in
        JavaScript)
            if [[ ${EnableGlobalProxy} == true ]]; then
                node -r 'global-agent/bootstrap' ${FileName}.js 2>&1 &>>$LogDir/${FileName}/$(date "+%Y-%m-%d-%H-%M-%S")_${UserNum}.log &
            else
                node ${FileName}.js 2>&1 &>>$LogDir/${FileName}/$(date "+%Y-%m-%d-%H-%M-%S")_${UserNum}.log &
            fi
            ;;
        Python)
            python3 -u ${FileName}.py 2>&1 &>>$LogDir/${FileName}/$(date "+%Y-%m-%d-%H-%M-%S")_${UserNum}.log &
            ;;
        TypeScript)
            ts-node-transpile-only ${FileName}.ts 2>&1 &>>$LogDir/${FileName}/$(date "+%Y-%m-%d-%H-%M-%S")_${UserNum}.log &
            ;;
        esac
    done
    echo -e "\n$COMPLETE 已在后台部署并发任务，如需查询脚本输出内容请直接查看 $LogDir/${FileName} 目录下的相关日志\n"
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
    Make_Dir ${LogPath}
    local LogFile="${LogPath}/$(date "+%Y-%m-%d-%H-%M-%S")_${CookieNum}.log"
    local AccountNum=Cookie$CookieNum
    export JD_COOKIE=${!AccountNum}
    if [[ -z $JD_COOKIE ]]; then
        echo -e "\n$ERROR 账号不存在！"
        Help
        exit 1
    fi
    cd ${WhichDir}
    echo -e "[$(date "${TIME}:%N" | cut -c1-23)] 开始执行\n" >>${LogFile}
    case ${FileFormat} in
    JavaScript)
        if [[ ${EnableGlobalProxy} == true ]]; then
            node -r 'global-agent/bootstrap' ${FileName}.js 2>&1 | tee -a ${LogFile}
        else
            node ${FileName}.js 2>&1 | tee -a ${LogFile}
        fi
        ;;
    Python)
        python3 -u ${FileName}.py 2>&1 | tee -a ${LogFile}
        ;;
    TypeScript)
        ts-node-transpile-only ${FileName}.ts 2>&1 | tee -a ${LogFile}
        ;;
    esac
    echo -e "\n[$(date "${TIME}:%N" | cut -c1-23)] 执行结束" >>${LogFile}
}

## 迅速执行
function Run_Rapidly() {
    local p=$1
    echo $p | grep "/" -q
    if [[ $? -eq 0 ]]; then
        echo -e "\n$ERROR 不支持执行指定路径的脚本！"
        Help
        exit 1
    fi
    case $# in
    1)
        FileNameTmp1=$(echo $p | awk -F '/' '{print $NF}' | perl -pe "{s|\.js||; s|\.py||; s|\.ts||}")
        FileNameTmp2=$(echo $p | awk -F '/' '{print $NF}' | perl -pe "{s|jd_||; s|\.js||; s|\.py||; s|\.ts||; s|^|jd_|}")
        if [ -f $ScriptsDir/${FileNameTmp1}.js ]; then
            FileName=${FileNameTmp1}
            FileFormat="JavaScript"
        elif [ -f $ScriptsDir/${FileNameTmp1}.ts ]; then
            FileName=${FileNameTmp1}
            FileFormat="TypeScript"
        elif [ -f $ScriptsDir/${FileNameTmp1}.py ]; then
            FileName=${FileNameTmp1}
            FileFormat="Python"
        elif [ -f $ScriptsDir/${FileNameTmp2}.js ]; then
            FileName=${FileNameTmp2}
            FileFormat="JavaScript"
        elif [ -f $ScriptsDir/${FileNameTmp2}.ts ]; then
            FileName=${FileNameTmp2}
            FileFormat="TypeScript"
        elif [ -f $ScriptsDir/${FileNameTmp2}.py ]; then
            FileName=${FileNameTmp2}
            FileFormat="Python"
        else
            echo -e "\n$ERROR 在 $ScriptsDir 目录下未检测到 $p 脚本的存在，请确认！"
            Help
            exit 1
        fi
        Make_Dir "$LogDir/${FileName}"
        local LogFile="$LogDir/${FileName}/$(date "+%Y-%m-%d-%H-%M-%S").log"
        Import_Config ${FileName}
        Count_UserSum
        export JD_COOKIE=$(Combin_Sub Cookie)
        cd $ScriptsDir
        echo -e "[$(date "${TIME}:%N" | cut -c1-23)] 开始执行\n" >>${LogFile}
        case ${FileFormat} in
        JavaScript)
            if [[ ${EnableGlobalProxy} == true ]]; then
                node -r 'global-agent/bootstrap' ${FileName}.js 2>&1 | tee -a ${LogFile}
            else
                node ${FileName}.js 2>&1 | tee -a ${LogFile}
            fi
            ;;
        Python)
            python3 -u ${FileName}.py 2>&1 | tee -a ${LogFile}
            ;;
        TypeScript)
            ts-node-transpile-only ${FileName}.ts 2>&1 | tee -a ${LogFile}
            ;;
        esac
        echo -e "\n[$(date "${TIME}:%N" | cut -c1-23)] 执行结束" >>${LogFile}
        ;;
    2)
        if [ $2 = "-c" ]; then
            case $Arch in
            armv7l | armv6l)
                echo -e "\n$ERROR 您当前使用的是32位处理器，考虑到性能不佳已禁用并发执行功能！"
                Help
                exit 1
                ;;
            *)
                local p=$1
                FileNameTmp1=$(echo $p | awk -F '/' '{print $NF}' | perl -pe "{s|\.js||; s|\.py||; s|\.ts||}")
                FileNameTmp2=$(echo $p | awk -F '/' '{print $NF}' | perl -pe "{s|jd_||; s|\.js||; s|\.py||; s|\.ts||; s|^|jd_|}")
                if [ -f $ScriptsDir/${FileNameTmp1}.js ]; then
                    FileName=${FileNameTmp1}
                    FileFormat="JavaScript"
                elif [ -f $ScriptsDir/${FileNameTmp1}.ts ]; then
                    FileName=${FileNameTmp1}
                    FileFormat="TypeScript"
                elif [ -f $ScriptsDir/${FileNameTmp1}.py ]; then
                    FileName=${FileNameTmp1}
                    FileFormat="Python"
                elif [ -f $ScriptsDir/${FileNameTmp2}.js ]; then
                    FileName=${FileNameTmp2}
                    FileFormat="JavaScript"
                elif [ -f $ScriptsDir/${FileNameTmp2}.ts ]; then
                    FileName=${FileNameTmp2}
                    FileFormat="TypeScript"
                elif [ -f $ScriptsDir/${FileNameTmp2}.py ]; then
                    FileName=${FileNameTmp2}
                    FileFormat="Python"
                else
                    echo -e "\n$ERROR 在 $ScriptsDir 目录下未检测到 $p 脚本的存在，请确认！"
                    Help
                    exit 1
                fi
                Import_Config ${FileName}
                Count_UserSum
                export JD_COOKIE=$(Combin_Sub Cookie)
                Run_Concurrent_Lite ${FileName} ${FileFormat}
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
    ps -ef | grep -Ev "grep|pkill" | grep "${FileName}" -wq
    local ExitSearchProcess=$?
    if [[ ${ExitSearchProcess} == 0 ]]; then
        kill -9 $(ps -ef | grep "${FileName}" | grep -v "pkill" | awk '$0 !~/grep/ {print $2}' | tr -s '\n' ' ') >/dev/null 2>&1
        sleep 1
        kill -9 $(ps -ef | grep "${FileName}" | grep -v "pkill" | awk '$0 !~/grep/ {print $2}' | tr -s '\n' ' ') >/dev/null 2>&1
        ps -ef | grep -Ev "grep|pkill" | grep "${FileName}" -wq
        if [ $? -eq 0 ]; then
            echo -e "\n$ERROR 进程终止失败，请尝试手动终止 kill -9 <pid>\n"
            ps -axo pid,pcpu,pmem,command --sort -pmem | less | grep ${FileName} | grep -Ev "grep|pkill"
            echo ''
        else
            echo -e "\n$COMPLETE 已终止相关进程\n"
        fi
    else
        echo -e "\n$ERROR 未检测到与 ${FileName} 脚本相关的进程，请重新确认！"
        Help
        exit 1
    fi
}

## 远程执行
function Run_RawScript() {
    local Input_Url=$1
    local DownloadJudge RepositoryJudge ProxyJudge ScriptName FormatFileName RepositoryName RunMod
    ScriptName=${Input_Url##*/}
    ## 判断来源仓库
    RepositoryName=$(echo $Input_Url | grep -Eo "github|gitee|gitlab")
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

    ## 判断参数
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
            exit 1
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
            exit 1
        fi
        if [ $3 = "-c" ]; then
            RunMod="concurrent"
        elif [ $3 = "-p" ]; then
            DownloadJudge=${GithubProxy}
        else
            echo -e "\n$COMMAND_ERROR"
            Help
            exit 1
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

    echo -en "\n$WORKING 正在从${RepositoryJudge}远程仓库${ProxyJudge}下载 ${ScriptName} 脚本... "
    wget -q --no-check-certificate "${DownloadJudge}$Input_Url" -O "$ScriptsDir/${ScriptName}.new" -T 8
    local ExitStatus=$?
    echo ''

    if [[ $ExitStatus -eq 0 ]]; then
        mv -f "$ScriptsDir/${ScriptName}.new" "$ScriptsDir/${ScriptName}"
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
        FormatFileName=$(echo ${ScriptName} | perl -pe "{s|\.js||; s|\.py||; s|\.ts||}")
        case ${RunMod} in
        normal)
            Run_Normal ${FormatFileName} now
            ;;
        concurrent)
            case $Arch in
            armv7l | armv6l)
                echo -e "\n$ERROR 您当前使用的是32位处理器，考虑到性能不佳已禁用并发执行功能！"
                Help
                exit 1
                ;;
            *)
                Run_Concurrent ${FormatFileName}
                ;;
            esac
            ;;
        esac
        [[ ${AutoDelRawFiles} == true ]] && rm -rf "$ScriptsDir/${ScriptName}"
    else
        [ -f "$ScriptsDir/${ScriptName}.new" ] && rm -rf "$ScriptsDir/${ScriptName}.new"
        echo -e "\n$ERROR 脚本 ${ScriptName} 下载失败，请检查 URL 地址是否正确或网络连通性问题..."
        Help
        exit 1
    fi
}

## 账号控制功能
function Cookies_Control() {
    local TRUE="[✔]"
    local FALSE="[X]"
    local Interface="https://bean.m.jd.com/bean/signIndex.action"
    case $1 in
    check)
        Import_Config
        Count_UserSum
        [ -f $FileSendMark ] && rm -rf $FileSendMark
        ## 生成 pt_pin 数组
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
        ## 检测
        function CheckCookie() {
            local p=$1
            local ConnectionTest="$(curl -I -s --connect-timeout 5 ${Interface} -w %{http_code} | tail -n1)"
            local CookieValidityTest="$(curl -s --noproxy "*" "${Interface}" -H "cookie: $p")"
            if [ "$ConnectionTest" -eq "302" ]; then
                if [[ "$CookieValidityTest" ]]; then
                    echo -e "\033[32m${TRUE}\033[0m"
                else
                    echo -e "\033[31m${FALSE}\033[0m"
                fi
            else
                echo -e "\033[31m[ API 请求失败 ]\033[0m"
            fi
        }
        ## 汇总输出以及计算时间
        function Print_Info() {
            echo -e "\n检测到本地共有 \033[34m$UserSum\033[0m 个账号，当前状态信息如下（${TRUE}为有效，${FALSE}为无效）："
            for ((m = 0; m < $UserSum; m++)); do
                ## 查询上次更新时间
                local CookieUpdatedDate=$(grep "上次更新：" $FileConfUser | grep ${pt_pin[m]} | head -1 | perl -pe "{s|pt_pin=.*;||g; s|.*上次更新：||g; s|备注：.*||g; s|[ ]*$||g;}")
                if [[ ${CookieUpdatedDate} ]]; then
                    local UpdateTime="更新日期：[\033[34m${CookieUpdatedDate}\033[0m]"
                    local Tmp1=$(($(date -d $(date "+%Y-%m-%d") +%s) - $(date -d "${CookieUpdatedDate}" +%s)))
                    local Tmp2=$(($Tmp1 / 86400))
                    local Tmp3=$((30 - $Tmp2))
                    [ -z $CheckCookieDaysAgo ] && local Days="2" || local Days=$(($CheckCookieDaysAgo - 1))
                    if [ $Tmp3 -le $Days ] && [ $Tmp3 -ge 0 ]; then
                        [ $Tmp3 = 0 ] && local TmpTime="今天" || local TmpTime="$Tmp3天后"
                        echo -e "账号$((m + 1))：$(printf $(echo ${pt_pin[m]} | perl -pe "s|%|\\\x|g;")) 将在$TmpTime过期" >>$FileSendMark
                    fi
                else
                    local UpdateTime="更新日期：[\033[34mUnknow\033[0m]"
                fi
                num=$((m + 1))
                echo -e "$num：$(printf $(echo ${pt_pin[m]} | perl -pe "s|%|\\\x|g;")) $(CheckCookie $(grep -E "Cookie[1-9]" $FileConfUser | grep ${pt_pin[m]} | awk -F "[\"\']" '{print$2}'))    $UpdateTime"
            done
        }
        Gen_pt_pin_array
        Print_Info
        ## 过期提醒推送通知
        if [ -f $FileSendMark ]; then
            echo -e "\n检测到下面的账号将在近期失效，请注意即时更新！"
            cat $FileSendMark
            sed -i 's/$/&\\n/g' $FileSendMark
            Notify "账号过期提醒" "$(cat $FileSendMark)"
            rm -rf $FileSendMark
        fi
        echo ''
        ;;
    update)
        Import_Config_Not_Check
        local ExitStatus LogPath LogFile
        [ -f $FileSendMark ] && rm -rf $FileSendMark

        ## 更新 sign 签名
        function UpdateSign() {
            Make_Dir $SignDir
            if [ ! -d $SignDir/.git ]; then
                git clone -b master ${SignsRepositoryUrl} $SignDir >/dev/null
                ExitStatus=$?
            else
                cd $SignDir
                if [ $(date "+%H") -eq 9 -o $(date "+%H") -eq 21 ] && [ $(date "+%S") -eq 00 ]; then
                    local Tmp=$((${RANDOM} % 10))
                    echo -en "\n检测到当前处于整点，已随机延迟，$Tmp 秒后开始执行..."
                    sleep $Tmp
                    echo ''
                fi
                git fetch --all >/dev/null
                ExitStatus=$?
                git reset --hard origin/master >/dev/null
            fi
        }

        ## 全部更新
        function UpdateNormal() {
            local UserNum Tmp CookieTmp LogFile
            ## 生成 pt_pin 数组
            local pt_pin_array=(
                $(cat $FileAccountConf | jq '.[] | {pt_pin:.pt_pin,}' | grep -F "\"pt_pin\":" | grep -v "ptpin的值" | awk -F '\"' '{print$4}' | sed '/^$/d')
            )

            if [[ ${#pt_pin_array[@]} -ge 1 ]]; then
                LogFile="${LogPath}/$(date "+%Y-%m-%d-%H-%M-%S")_$UserNum.log"
                echo -e "\n$WORKING 检测到 \033[34m${#pt_pin_array[@]}\033[0m 个账号，开始更新...\n"
                echo -e "[$(date "${TIME}:%N" | cut -c1-23)] 开始执行\n" >>${LogFile}
                for ((i = 1; i <= ${#pt_pin_array[@]}; i++)); do
                    UserNum=$((i - 1))
                    ## 声明变量
                    export JD_PT_PIN=${pt_pin_array[$UserNum]}
                    ## 执行脚本
                    node updateCookies.js &>>${LogFile} &
                    wait
                    ## 写入至推送通知文件
                    Tmp=$(echo ${pt_pin_array[$UserNum]} | perl -pe '{s|\-|\.\*|g;}')
                    grep "Cookie => \[$Tmp\]" ${LogFile} | tee -a $FileSendMark
                done
                echo -e "\n[$(date "${TIME}:%N" | cut -c1-23)] 执行结束" >>${LogFile}
                ## 优化日志排版
                sed -i '/更新Cookies,.*\!/d' ${LogFile}
                echo "" >>$FileSendMark
                ## 更新后检测 Cookie 是否有效
                echo -e "\n$WORKING 更新后检测：\n"
                for ((i = 1; i <= ${#pt_pin_array[@]}; i++)); do
                    UserNum=$((i - 1))
                    Tmp=$(echo ${pt_pin_array[$UserNum]} | perl -pe '{s|\-|\.\*|g;}')
                    CookieTmp="$(grep "^Cookie.*pt_pin=$Tmp" $FileConfUser | awk -F "[\"\']" '{print$2}')"
                    [ $(grep "Cookie => \[$Tmp\]" ${LogFile} | awk -F ' ' '{print$NF}') != "更新成功" ] && continue
                    if [[ $(grep "^Cookie.*pt_pin=$Tmp" $FileConfUser) ]]; then
                        if [ "$(curl -I -s --connect-timeout 5 ${Interface} -w %{http_code} | tail -n1)" -eq "302" ]; then
                            if [[ $(curl -s --noproxy "*" "${Interface}" -H "cookie: ${CookieTmp}") ]]; then
                                echo -e "${pt_pin_array[$UserNum]} 的 Cookie 有效 \033[32m${TRUE}\033[0m"
                                echo -e "${pt_pin_array[$UserNum]} 更新后的 Cookie 有效 ${TRUE}" >>$FileSendMark
                            else
                                echo -e "${pt_pin_array[$UserNum]} 的 Cookie 无效 \033[31m${FALSE}\033[0m"
                                echo -e "${pt_pin_array[$UserNum]} 更新后的 Cookie 无效 ${FALSE}" >>$FileSendMark
                            fi
                        else
                            echo -e "${pt_pin_array[$UserNum]} 检测出错 \033[31m[ API 请求失败 ]\033[0m"
                            echo -e "${pt_pin_array[$UserNum]} 更新后检测出错 [ API 请求失败 ]" >>$FileSendMark
                        fi
                    else
                        echo -e "${pt_pin_array[$UserNum]} 的 Cookie 不存在 \033[31m${FALSE}\033[0m"
                        echo -e "${pt_pin_array[$UserNum]} 更新后的 Cookie 不存在 ${FALSE}" >>$FileSendMark
                    fi
                    ## 打印 Cookie
                    # echo -e "Cookie：$(grep "^Cookie.*pt_pin=$Tmp" $FileConfUser | awk -F "[\"\']" '{print$2}')\n"
                done
                echo -e "\n$COMPLETE 更新完成\n"
            else
                echo -e "\n$ERROR 请先在 $FileAccountConf 中配置好您的 pt_pin ！\n"
            fi
        }

        ## 指定账号更新
        function UpdateSpecify() {
            local UserNum=$1
            local Tmp CookieTmp LogFile
            local AccountNum=Cookie$UserNum
            if [[ -z ${!AccountNum} ]]; then
                echo -e "\n$ERROR 账号不存在！"
                Help
                exit 1
            fi
            Tmp="$(echo ${!AccountNum} | grep -o "pt_pin.*;" | awk -F '\;' '{print$1}' | perl -pe '{s|pt_pin=||g; s|;||g; s|\-|\.\*|g;}')"
            CookieTmp="$(grep "^Cookie.*pt_pin=$Tmp" $FileConfUser | awk -F "[\"\']" '{print$2}')"
            ## 判定是否存在包含该 pt_pin 的 Cookie
            grep -q $Tmp $FileAccountConf
            if [[ $? -eq 0 ]]; then
                LogFile="${LogPath}/$(date "+%Y-%m-%d-%H-%M-%S")_$UserNum.log"
                echo -e "\n$WORKING 开始更新...\n"
                ## 声明变量
                export JD_PT_PIN=$(echo ${!AccountNum} | grep -o "pt_pin.*;" | perl -pe '{s|pt_pin=||g; s|pt_pin=||g; s|;||g;}')
                ## 执行脚本
                echo -e "[$(date "${TIME}:%N" | cut -c1-23)] 开始执行\n" >>${LogFile}
                node updateCookies.js &>>${LogFile} &
                wait
                echo -e "\n[$(date "${TIME}:%N" | cut -c1-23)] 执行结束" >>${LogFile}
                ## 优化日志排版
                sed -i '/更新Cookies,.*\!/d' ${LogFile}
                ## 写入至推送通知文件
                grep "Cookie => \[$Tmp\]" ${LogFile} | tee -a $FileSendMark
                ## 更新后检测 Cookie 是否有效
                if [ $(grep "Cookie => \[$Tmp\]" ${LogFile} | awk -F ' ' '{print$NF}') = "更新成功" ]; then
                    echo -e "\n$WORKING 更新后检测：\n"
                    if [[ $(grep "^Cookie.*pt_pin=$Tmp" $FileConfUser) ]]; then
                        if [ "$(curl -I -s --connect-timeout 5 ${Interface} -w %{http_code} | tail -n1)" -eq "302" ]; then
                            if [[ $(curl -s --noproxy "*" "${Interface}" -H "cookie: ${CookieTmp}") ]]; then
                                echo -e "$JD_PT_PIN 的 Cookie 有效 \033[32m${TRUE}\033[0m"
                                echo -e "$JD_PT_PIN 更新后的 Cookie 有效 ${TRUE}" >>$FileSendMark
                            else
                                echo -e "$JD_PT_PIN 的 Cookie 无效 \033[31m${FALSE}\033[0m"
                                echo -e "$JD_PT_PIN 更新后的 Cookie 无效 ${FALSE}" >>$FileSendMark
                            fi
                        else
                            echo -e "$JD_PT_PIN 检测出错 \033[31m[ API 请求失败 ]\033[0m"
                            echo -e "$JD_PT_PIN 更新后检测出错 [ API 请求失败 ]" >>$FileSendMark
                        fi
                    else
                        echo -e "$JD_PT_PIN 的 Cookie 不存在 \033[31m${FALSE}\033[0m"
                        echo -e "$JD_PT_PIN 更新后的 Cookie 不存在 ${FALSE}" >>$FileSendMark
                    fi
                ## 打印 Cookie
                # echo -e "Cookie：$(grep "^Cookie.*pt_pin=$Tmp" $FileConfUser | awk -F "[\"\']" '{print$2}')\n"
                fi
                echo -e "\n$COMPLETE 更新完成\n"
            else
                echo -e "\n$ERROR 请先在 $FileAccountConf 中配置好该账号的 pt_pin ！\n"
            fi
        }
        ## 汇总
        if [ -f $FileUpdateCookie ]; then
            if [[ $(cat $FileAccountConf | jq '.[] | {ws_key:.ws_key,}' | grep -F "\"ws_key\"" | grep -v "wskey的值" | awk -F '\"' '{print$4}' | sed '/^$/d') ]]; then
                UpdateSign
                if [[ $ExitStatus -eq 0 ]]; then
                    LogPath="$LogDir/UpdateCookies"
                    Make_Dir ${LogPath}
                    cd $PanelDir
                    case $# in
                    1)
                        UpdateNormal
                        ;;
                    2)
                        UpdateSpecify $2
                        ;;
                    esac
                    ## 推送通知
                    [ -f $FileSendMark ] && sed -i "/未设置ws_key不更新/d" $FileSendMark
                    if [ -s $FileSendMark ]; then
                        [[ ${EnableCookieUpdateNotify} == true ]] && Notify "账号更新结果通知" "$(cat $FileSendMark)"
                    fi
                    [ -f $FileSendMark ] && rm -rf $FileSendMark
                else
                    echo -e "\n$ERROR 签名更新失败，请检查网络环境后重试！\n"
                fi
            else
                echo -e "\n$ERROR 请先在 $FileAccountConf 中配置好您的 ws_key ！\n"
            fi
        else
            echo -e "\n$ERROR 账号更新脚本不存在，请确认是否移动！\n"
        fi
        ;;
    esac
}

## 管理全局环境变量功能
function Manage_Env() {
    local Variable Value VariableTmp ValueTmp Remarks FullContent OldContent NewContent InputA InputB Input1 Input2 Keys

    ## 控制变量启用与禁用
    function ControlEnv() {
        case $# in
        1)
            local VariableTmp=$1
            ;;
        2)
            local Mod=$1
            local VariableTmp=$2
            ;;
        *)
            echo -e "\n$COMMAND_ERROR"
            Help
            exit 1
            ;;
        esac
        OldContent=$(grep ".*export ${VariableTmp}=" $FileConfUser | head -1)
        ## 判断变量是否被注释
        grep "[# ]export ${VariableTmp}=" -q $FileConfUser
        local ExitStatus=$?
        case $# in
        1)
            if [[ $ExitStatus -eq 0 ]]; then
                while true; do
                    read -p "$(echo -e '\n\033[1m└ 检测到该变量已禁用，是否启用 [ Y/n ]：\033[0m')" InputA
                    [ -z ${InputA} ] && InputA=Y
                    case ${InputA} in
                    [Yy] | [Yy][Ee][Ss])
                        sed -i "s/.*export ${VariableTmp}=/export ${VariableTmp}=/g" $FileConfUser
                        break
                        ;;
                    [Nn] | [Nn][Oo])
                        break
                        ;;
                    *)
                        echo -e '\n\033[33m----- 输入错误 -----\033[0m'
                        ;;
                    esac
                done
            else
                while true; do
                    read -p "$(echo -e '\n\033[1m└ 检测到该变量已启用，是否禁用 [ Y/n ]：\033[0m')" InputB
                    [ -z ${InputB} ] && InputB=Y
                    case ${InputB} in
                    [Yy] | [Yy][Ee][Ss])
                        sed -i "s/.*export ${VariableTmp}=/# export ${VariableTmp}=/g" $FileConfUser
                        break
                        ;;
                    [Nn] | [Nn][Oo])
                        break
                        ;;
                    *)
                        echo -e '\n\033[33m----- 输入错误 -----\033[0m'
                        ;;
                    esac
                done
            fi
            ;;
        2)
            if [[ $ExitStatus -eq 0 ]]; then
                case ${Mod} in
                enable)
                    sed -i "s/.*export ${VariableTmp}=/export ${VariableTmp}=/g" $FileConfUser
                    ;;
                disable)
                    echo -e "\n$ERROR 该变量已经禁用，无需任何操作！\n"
                    exit
                    ;;
                *)
                    echo -e "\n$COMMAND_ERROR"
                    Help
                    exit 1
                    ;;
                esac
            else
                case ${Mod} in
                enable)
                    echo -e "\n$ERROR 该变量已经启用，无需任何操作！\n"
                    exit
                    ;;
                disable)
                    sed -i "s/.*export ${VariableTmp}=/# export ${VariableTmp}=/g" $FileConfUser
                    ;;
                *)
                    echo -e "\n$COMMAND_ERROR"
                    Help
                    exit 1
                    ;;
                esac
            fi
            ;;
        esac

        ## 前后对比
        NewContent=$(grep ".*export ${VariableTmp}=" $FileConfUser | head -1)
        echo -e "\n\033[41;37m${OldContent}\033[0m \033[31m-\033[0m\n\033[42m${NewContent}\033[0m \033[32m+\033[0m"
        ## 结果判定
        if [[ ${OldContent} = ${NewContent} ]]; then
            echo -e "\n$ERROR 修改失败\n"
        else
            echo -e "\n$COMPLETE 修改完毕\n"
        fi
    }

    ## 修改变量的值
    function ModifyValue() {
        local VariableTmp=$1
        OldContent=$(grep ".*export ${VariableTmp}=" $FileConfUser | head -1)
        Remarks=$(grep ".*export ${VariableTmp}=" $FileConfUser | head -n 1 | awk -F "[\"\']" '{print$NF}')
        case $# in
        1)
            read -p "$(echo -e "\n\033[1m└ 请输入环境变量 \033[34m${VariableTmp}\033[0m \033[1m新的值：\033[0m")" ValueTmp
            ## 判断变量备注内容
            if [[ ${Remarks} != "" ]]; then
                while true; do
                    read -p "$(echo -e '\n\033[1m└ 检测到该变量存在备注内容，是否修改 [ Y/n ]：\033[0m')" InputA
                    [ -z ${InputA} ] && InputA=Y
                    case ${InputA} in
                    [Yy] | [Yy][Ee][Ss])
                        read -p "$(echo -e "\n\033[1m└ 请输入环境变量 \033[34m${Variable}\033[0m \033[1m新的备注内容：\033[0m")" InputB
                        Remarks=" # ${InputB}"
                        break
                        ;;
                    [Nn] | [Nn][Oo])
                        break
                        ;;
                    *)
                        echo -e '\n\033[33m----- 输入错误 -----\033[0m'
                        ;;
                    esac
                done
            fi
            ;;
        2)
            local ValueTmp=$2
            ;;
        *)
            echo -e "\n$COMMAND_ERROR"
            Help
            exit 1
            ;;
        esac

        ## 修改
        sed -i "s/\(export ${VariableTmp}=\).*/\1\"${ValueTmp}\"${Remarks}/" $FileConfUser
        ## 前后对比
        NewContent=$(grep ".*export ${VariableTmp}=" $FileConfUser | head -1)
        echo -e "\n\033[41;37m${OldContent}\033[0m \033[31m-\033[0m\n\033[42m${NewContent}\033[0m \033[32m+\033[0m"
        ## 结果判定
        grep ".*export ${VariableTmp}=\"${ValueTmp}\"${Remarks}" $FileConfUser -q
        local ExitStatus=$?
        if [[ $ExitStatus -eq 0 ]]; then
            echo -e "\n$COMPLETE 修改完毕\n"
        else
            echo -e "\n$ERROR 修改失败\n"
        fi
    }

    case $1 in
    ## 新增变量
    add)
        case $# in
        1)
            read -p "$(echo -e '\n\033[1m└ 请输入需要添加的环境变量名称：\033[0m')" Variable
            ## 检测是否已存在该变量
            grep ".*export.*=" $FileConfUser | grep "^export ${Variable}=" -q
            local ExitStatus=$?
            if [[ $ExitStatus -eq 0 ]]; then
                echo -e "\n\033[34m检测到已存在该环境变量：\033[0m\n$(grep -n "^export ${Variable}=" $FileConfUser | perl -pe '{s|^|第|g; s|:|行：|g;}')"
                while true; do
                    read -p "$(echo -e '\n\033[1m└ 是否继续修改 [ Y/n ]：\033[0m')" Input1
                    [ -z ${Input1} ] && Input1=Y
                    case ${Input1} in
                    [Yy] | [Yy][Ee][Ss])
                        ModifyValue "${Variable}"
                        break
                        ;;
                    [Nn] | [Nn][Oo])
                        echo -e "\n$COMPLETE 结束，未做任何更改\n"
                        break
                        ;;
                    *)
                        echo -e '\n\033[33m----- 输入错误 -----\033[0m'
                        ;;
                    esac
                done
            else
                read -p "$(echo -e "\n\033[1m└ 请输入环境变量 \033[34m${Variable}\033[0m \033[1m的值：\033[0m")" Value
                ## 插入备注
                while true; do
                    read -p "$(echo -e '\n\033[1m└ 是否添加备注 [ Y/n ]：\033[0m')" Input2
                    [ -z ${Input2} ] && Input2=Y
                    case ${Input2} in
                    [Yy] | [Yy][Ee][Ss])
                        read -p "$(echo -e "\n\033[1m└ 请输入环境变量 \033[34m${Variable}\033[0m \033[1m的备注内容：\033[0m")" Remarks
                        FullContent="export ${Variable}=\"${Value}\" # ${Remarks}"
                        break
                        ;;
                    [Nn] | [Nn][Oo])
                        FullContent="export ${Variable}=\"${Value}\""
                        break
                        ;;
                    *)
                        echo -e '\n\033[33m----- 输入错误 -----\033[0m'
                        ;;
                    esac
                done
                sed -i "9 i ${FullContent}" $FileConfUser
                echo -e "\n$COMPLETE ${FullContent} -> 添加完成\n"
            fi
            ;;
        3)
            local Variable=$2
            local Value=$3

            ## 检测是否已存在该变量
            grep ".*export.*=" $FileConfUser | grep "^export ${Variable}=" -q
            local ExitStatus=$?
            if [[ $ExitStatus -eq 0 ]]; then
                echo -e "\n\033[34m检测到已存在该环境变量：\033[0m\n$(grep -n "^export ${Variable}=" $FileConfUser | perl -pe '{s|^|第|g; s|:|行：|g;}')"
                echo -e "\n$ERROR 该变量已经存在，无需任何操作！\n"
                exit
            else
                FullContent="export ${Variable}=\"${Value}\""
                sed -i "9 i ${FullContent}" $FileConfUser
                echo -e "\n$COMPLETE ${FullContent} -> 添加完成\n"
            fi
            ;;
        esac
        ;;
    ## 删除变量
    del)
        case $# in
        1)
            read -p "$(echo -e '\n\033[1m└ 请输入需要删除的环境变量名称：\033[0m')" Input1
            VariableNums=$(grep ".*export.*=" $FileConfUser | grep -c ".*export ${Input1}=" | head -n 1)
            Variable=$(grep -n ".*export ${Input1}=" $FileConfUser | perl -pe '{s|^|第|g; s|:|行: |g;}')
            if [[ ${VariableNums} -ne "0" ]]; then
                if [[ ${VariableNums} -gt "1" ]]; then
                    echo -e "\n\033[34m检测到多个环境变量：\033[0m\n${Variable}"
                elif [[ ${VariableNums} -eq "1" ]]; then
                    echo -e "\n\033[34m检测到环境变量：\033[0m\n${Variable}"
                fi
                while true; do
                    read -p "$(echo -e '\n\033[1m└ 是否确认删除 [ Y/n ]：\033[0m')" Input2
                    [ -z ${Input2} ] && Input2=Y
                    case ${Input2} in
                    [Yy] | [Yy][Ee][Ss])
                        sed -i "/export ${Input1}=/d" $FileConfUser
                        echo -e "\n$COMPLETE 删除完毕\n"
                        break
                        ;;
                    [Nn] | [Nn][Oo])
                        echo -e "\n$COMPLETE 结束，未做任何更改\n"
                        break
                        ;;
                    *)
                        echo -e '\n\033[33m----- 输入错误 -----\033[0m'
                        ;;
                    esac
                done
            else
                echo -e "\n$ERROR 未查询到相关环境变量！\n"
            fi
            ;;
        2)
            local Variable=$2

            ## 检测是否已存在该变量
            grep ".*export.*=" $FileConfUser | grep "^export ${Variable}=" -q
            local ExitStatus=$?
            if [[ $ExitStatus -eq 0 ]]; then
                echo -e "\n\033[34m检测到环境变量：\033[0m\n$(grep -n ".*export ${Variable}=" $FileConfUser | perl -pe '{s|^|第|g; s|:|行: |g;}')"
                sed -i "/export ${Variable}=/d" $FileConfUser
                echo -e "\n$COMPLETE 删除完毕\n"
            else
                echo -e "\n$ERROR 未查询到相关环境变量！\n"
            fi

            ;;
        esac
        ;;
    ## 修改变量
    edit)
        case $# in
        1)
            read -p "$(echo -e '\n\033[1m└ 请输入需要修改的环境变量名称：\033[0m')" Variable
            ## 检测是否存在该变量
            grep ".*export.*=" $FileConfUser | grep ".*export ${Variable}=" -q
            local ExitStatus=$?
            if [[ $ExitStatus -eq 0 ]]; then
                echo -e "\n\033[34m当前环境变量：\033[0m\n$(grep -n ".*export ${Variable}=" $FileConfUser | perl -pe '{s|^|第|g; s|:|行：|g;}')\n"
                echo -e '1)   启用或禁用'
                echo -e '2)   修改变量的值'
                while true; do
                    read -p "$(echo -e '\n\033[1m└ 请选择操作模式 [ 1-2 ]：\033[0m')" Input1
                    case $Input1 in
                    1)
                        ControlEnv "${Variable}"
                        break
                        ;;
                    2)
                        ModifyValue "${Variable}"
                        break
                        ;;
                    esac
                    echo -e "\n$ERROR 输入错误！"
                done
            else
                echo -e "\n$ERROR 未查询到相关环境变量！\n"
            fi
            ;;
        3)
            case $2 in
            enable | disable)
                local Variable=$3
                ;;
            *)
                local Variable=$2
                ;;
            esac
            grep ".*export.*=" $FileConfUser | grep ".*export ${Variable}=" -q
            local ExitStatus=$?
            if [[ $ExitStatus -eq 0 ]]; then
                case $2 in
                enable | disable)
                    ControlEnv "$2" "$3"
                    ;;
                *)
                    ModifyValue "$2" "$3"
                    ;;
                esac
            else
                echo -e "\n$ERROR 未查询到相关环境变量！\n"
            fi
            ;;
        esac
        ;;
    ## 查询变量
    search)
        case $# in
        1)
            read -p "$(echo -e '\n\033[1m└ 请输入需要查询的关键词：\033[0m')" Keys
            ;;
        2)
            Keys=$2
            ;;
        esac
        ## 检测搜索结果是否为空
        grep ".*export.*=" $FileConfUser | grep "${Keys}" -q
        local ExitStatus=$?
        if [[ $ExitStatus -eq 0 ]]; then
            echo -e "\n\033[34m检测到的环境变量：\033[0m"
            grep -n ".*export.*=" $FileConfUser | grep "${Keys}" | perl -pe "{s|^|第|g; s|:|行：|g; s|${Keys}|\033[31m${Keys}\033[0m|g;}"
            echo -e "\n$COMPLETE 查询完毕\n"
        else
            echo -e "\n$ERROR 未查询到相关环境变量！\n"
        fi
        ;;
    esac
}

## 推送通知
function SendNotify() {
    Import_Config_Not_Check
    Notify $1 $2
}

## 调试模式
function Debug() {
    local CurrentBranch=$(git branch | head -n 1 | awk -F ' ' '{print$NF}')
    if [[ ${CurrentBranch} == "main" ]]; then
        echo ''
        git reset --hard
        git checkout dev
        echo -e "\n$COMPLETE 你好开发者，已为您切换至开发分支\n"
    elif [[ ${CurrentBranch} == "dev" ]]; then
        echo ''
        git reset --hard
        git checkout main
        echo -e "\n$COMPLETE 已切换回用户分支\n"
    fi
}

## 删除日志
function Remove_LogFiles() {
    local LogFileList LogDate DiffTime Stmp DateDelLog LineEndGitPull LineEndBotRun
    Import_Config
    function Rm_JsLog() {
        LogFileList=$(ls -l $LogDir/*/*.log | awk '{print $9}' | grep -v "log/bot")
        for log in ${LogFileList}; do
            ## 文件名比文件属性获得的日期要可靠
            LogDate=$(echo ${log} | awk -F '/' '{print $NF}' | grep -Eo "20[2-9][0-9]-[0-1][0-9]-[0-3][0-9]")
            [[ -z ${LogDate} ]] && continue
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
        echo -e "\n$WORKING 开始检索日志文件...\n"
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
    local MemoryAvailable=$(free -m | grep Mem | awk -F ' ' '{print$7}')
    local MemoryUsage=$(awk 'BEGIN{printf "%.1f%%\n",('$MemoryUsed'/'$MemoryTotal')*100}')
    local CPUUsage=$(busybox top -n 1 | grep CPU | head -1 | awk -F ' ' '{print$2}')
    echo -e "\n\033[34m[性能监控]\033[0m  CPU：\033[33m${CPUUsage}\033[0m   Memory：\033[33m${MemoryUsage}\033[0m   可用内存：\033[33m${MemoryAvailable}MB\033[0m   空闲内存：\033[33m${MemoryFree}MB\033[0m"
    ## 检测占用过高后释放内存
    if [[ $(echo ${MemoryUsage} | awk -F '.' '{print$1}') -gt "89" ]]; then
        sync >/dev/null 2>&1
        echo 3 >/proc/sys/vm/drop_caches >/dev/null 2>&1
        local MemoryUsedNew=$(free -m | grep Mem | awk -F ' ' '{print$3}')
        local MemoryAvailableNew=$(free -m | grep Mem | awk -F ' ' '{print$4}')
        local MemoryUsageNew=$(awk 'BEGIN{printf "%.1f%%\n",('$MemoryUsedNew'/'$MemoryTotal')*100}')
        echo -e "\n$WORKING 检测到内存占用过高，开始尝试释放内存..."
        echo -e "\033[34m[释放后]\033[0m  Memory：\033[33m${MemoryUsageNew}\033[0m   可用内存：\033[33m${MemoryAvailableNew}MB\033[0m"
    fi
    ## 列出进程
    echo -e "\n\033[34m[运行时长]  [CPU]    [内存]    [脚本名称]\033[0m"
    ps -axo user,time,pcpu,user,pmem,user,command --sort -pmem | less | egrep "\.js\b|\.py\b|\.ts\b" | egrep -v "server.js|pm2|egrep|perl|sed|bash" |
        perl -pe '{s| root     |% |g; s|\/usr\/bin\/ts-node ||g; s|\/usr\/bin\/python3 ||g; s|python3 -u ||g; s|\/usr\/bin\/python ||g; s|\/usr\/bin\/node ||g; s|node -r global-agent/bootstrap |(代理)|g; s|node ||g;  s|root     |#|g; s|#[0-9][0-9]:|#|g;  s|  | |g; s| |     |g; s|#|•  |g; s|/jd/scripts/jd_cfd_loop\.js|jd_cfd_loop\.js|g; s|\./utils/||g;}'
    echo ''
}

## 列出本地脚本清单
function List_Local_Scripts() {
    local ScriptType Tmp1 Tmp2
    case $Arch in
    armv7l | armv6l)
        ScriptType="\.js\b"
        ;;
    *)
        if [ -x /usr/bin/python3 ]; then
            Tmp1="|\.py\b"
        else
            Tmp1=""
        fi
        if [ -x /usr/bin/ts-node ]; then
            Tmp2="|\.ts\b"
        else
            Tmp2=""
        fi
        ScriptType="\.js\b${Tmp1}${Tmp2}"
        ;;
    esac

    ## 列出 Scripts 仓库中的脚本
    function List_Scripts() {
        local Name
        cd $ScriptsDir
        local ListFiles=($(
            git ls-files | grep -E "${ScriptType}" | grep -E "j[drx]_" | grep -Ev "/|${ShieldingKeywords}"
        ))
        echo -e "\n❖ Scripts 仓库的脚本："
        for ((i = 0; i < ${#ListFiles[*]}; i++)); do
            Query_Name ${ListFiles[i]}
            echo -e "$(($i + 1)).${Name}：${ListFiles[i]}"
        done
    }

    ## 列出本地其它仓库中的脚本
    function List_Own() {
        local Name FileName WhichDir Tmp1 Tmp2 Tmp3 repo_num
        Import_Config_Not_Check

        if [[ ${OwnRepoUrl1} ]]; then
            for ((i = 1; i <= 0x64; i++)); do
                Tmp1=OwnRepoUrl$i
                Tmp2=${!Tmp1}
                [[ $Tmp2 ]] && OwnRepoSum=$i || break
            done

            if [[ $OwnRepoSum -ge 1 ]]; then
                for ((i = 1; i <= $OwnRepoSum; i++)); do
                    repo_num=$((i - 1))
                    Tmp1=OwnRepoUrl$i
                    array_own_repo_url[$repo_num]=${!Tmp1}
                    array_own_repo_dir[$repo_num]=$(echo ${array_own_repo_url[$repo_num]} | perl -pe "s|\.git||" | awk -F "/|:" '{print $((NF - 1)) "_" $NF}')
                    Tmp3=OwnRepoPath$i
                    if [[ -z ${!Tmp3} ]]; then
                        array_own_repo_path[$repo_num]="$OwnDir/${array_own_repo_dir[$repo_num]}"
                    else
                        array_own_repo_path[$repo_num]="$OwnDir/${array_own_repo_dir[$repo_num]}/${!Tmp3}"
                    fi
                done
            fi

            local ListFiles=($(
                for ((i = 1; i <= $OwnRepoSum; i++)); do
                    repo_num=$((i - 1))
                    ls ${array_own_repo_path[repo_num]} | grep -E "${ScriptType}" | grep -Ev "/|${ShieldingKeywords}" | perl -pe "{s|^|${array_own_repo_path[repo_num]}/|g;}"
                done
                if [[ ${#OwnRawFile[*]} -ge 1 ]]; then
                    ls $RawDir | grep -E "${ScriptType}" | grep -Ev "/|${ShieldingKeywords}" | perl -pe "{s|^|$RawDir/|g;}"
                fi
            ))

            echo -e "\n❖ Own 仓库的脚本："
            for ((i = 0; i < ${#ListFiles[*]}; i++)); do
                FileName=${ListFiles[i]##*/}
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
            ls | grep -E "${ScriptType}" | grep -Ev "$(git ls-files)|${ShieldingKeywords}"
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
    case $Arch in
    armv7l | armv6l) ;;
    *)
        echo -e "TypeScript 脚本如遇报错可使用 tsc 命令转换成 js 脚本后执行，转换命令格式：tsc <含有绝对路径的脚本名>"
        ;;
    esac

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
    debug)
        Debug
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
    add | del | edit | search)
        case $1 in
        env)
            Manage_Env $2
            ;;
        *)
            echo -e "\n$COMMAND_ERROR"
            Help
            ;;
        esac
        ;;
    *)
        case $1 in
        list | exsc | rmlog | ps)
            echo -e "\n$TOO_MANY_COMMANDS"
            Help
            ;;
        *)
            echo -e "\n$COMMAND_ERROR"
            Help
            ;;
        esac
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
    now | conc | pkill | check | [1-9] | [1-9][0-9] | [1-9][0-9][0-9])
        echo -e "\n$TOO_MANY_COMMANDS"
        Help
        ;;
    update)
        case $1 in
        cookie)
            case $3 in
            [1-9] | [1-9][0-9] | [1-9][0-9][0-9])
                Cookies_Control $2 $3
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
    del | search)
        Manage_Env $2 $3
        ;;
    enable | disable)
        Manage_Env edit $2 $3
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
    add | edit)
        Manage_Env $2 $3 "$4"
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
