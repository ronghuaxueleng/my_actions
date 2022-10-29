#!/bin/bash
## Author: SuperManito
## Modified: 2022-10-27

ShellDir=${WORK_DIR}/shell
. $ShellDir/share.sh

## 查找脚本
function Find_Script() {

    ## 通过各种判断将得到的必要信息传给接下来运行的函数或命令

    ##   "FileName"     脚本名称（去后缀）
    ##   "FileSuffix"   脚本后缀名
    ##   "FileFormat"   脚本类型
    ##   "FileDir"      脚本所在目录（绝对路径）

    ## 不论何种匹配方式或查找方式，当未指定脚本类型但存在同名脚本时，执行优先级为 JavaScript > Python > TypeScript > Shell

    local InputContent=$1
    FileName=""
    FileDir=""
    FileFormat=""

    ## 匹配指定路径下的脚本
    function MatchingPathFile() {
        local AbsolutePath PwdTmp FileNameTmp FileDirTmp

        ## 判定路径格式
        echo $1 | grep "/$" -q
        if [ $? -eq 0 ]; then
            echo -e "\n$ERROR 请输入正确的脚本路径！\n"
            exit ## 终止退出
        fi

        ## 判定传入的是绝对路径还是相对路径
        echo ${InputContent} | grep "^$RootDir" -q
        if [ $? -eq 0 ]; then
            AbsolutePath=${InputContent}
        else
            echo ${InputContent} | grep "\.\./" -q
            if [ $? -eq 0 ]; then
                PwdTmp=$(pwd | perl -pe "{s|/$(pwd | awk -F '/' '{printf$NF}')||g;}")
                AbsolutePath=$(echo "${InputContent}" | perl -pe "{s|\.\./|${PwdTmp}/|;}")
            else
                local TmpDirName=$(echo ${InputContent} | awk -F '/' '{printf$1}')
                if [ -d "$OwnDir/$TmpDirName" ]; then
                    AbsolutePath=$(echo "${InputContent}" | perl -pe "{s|^|$OwnDir/|;}")
                else
                    ## 适配在定时清单中使用相对路径时将自动纠正为绝对路径
                    if [[ $(pwd) == "/root" ]]; then
                        AbsolutePath=$(echo "${InputContent}" | perl -pe "{s|\.\/||; s|^*|$RootDir/|;}")
                    else
                        AbsolutePath=$(echo "${InputContent}" | perl -pe "{s|\.\/||; s|^*|$(pwd)/|;}")
                    fi
                fi
            fi
            echo ${InputContent} | grep "\.\./" -q
        fi
        ## 判定传入是否含有后缀格式
        FileNameTmp=${AbsolutePath##*/}
        FileDirTmp=${AbsolutePath%/*}
        echo ${FileNameTmp} | grep "\." -q
        if [ $? -eq 0 ]; then
            if [ -f ${AbsolutePath} ]; then
                FileSuffix=${FileNameTmp##*.}
                ## 判断并定义脚本类型
                case ${FileSuffix} in
                js)
                    FileFormat="JavaScript"
                    ;;
                py)
                    FileFormat="Python"
                    ;;
                ts)
                    FileFormat="TypeScript"
                    ;;
                sh)
                    FileFormat="Shell"
                    ;;
                *)
                    echo -e "\n$ERROR 项目不支持运行 .${FileSuffix} 类型的脚本！\n"
                    exit ## 终止退出
                    ;;
                esac
                FileName=${FileNameTmp%.*}
                FileDir=${FileDirTmp}
            fi
        else
            if [ -f ${FileDirTmp}/${FileNameTmp}.js ]; then
                FileName=${FileNameTmp}
                FileFormat="JavaScript"
                FileDir=${FileDirTmp}
            elif [ -f ${FileDirTmp}/${FileNameTmp}.py ]; then
                FileName=${FileNameTmp}
                FileFormat="Python"
                FileDir=${FileDirTmp}
            elif [ -f ${FileDirTmp}/${FileNameTmp}.ts ]; then
                FileName=${FileNameTmp}
                FileFormat="TypeScript"
                FileDir=${FileDirTmp}
            elif [ -f ${FileDirTmp}/${FileNameTmp}.sh ]; then
                FileName=${FileNameTmp}
                FileFormat="Shell"
                FileDir=${FileDirTmp}
            fi
        fi

        ## 判定变量是否存在否则报错终止退出
        if [ -n "${FileName}" ] && [ -n "${FileDir}" ]; then
            ## 添加依赖文件
            [[ ${FileFormat} == "JavaScript" ]] && Check_Moudules $FileDir
            ## 定义日志路径
            if [[ $(echo ${AbsolutePath} | awk -F '/' '{print$3}') == "own" ]]; then
                LogPath="$LogDir/$(echo ${AbsolutePath} | awk -F '/' '{print$4}')_${FileName}"
            else
                LogPath="$LogDir/${FileName}"
            fi
            Make_Dir ${LogPath}
        else
            echo -e "\n$ERROR 在 ${BLUE}${AbsolutePath%/*}${PLAIN} 目录未检测到 ${BLUE}${AbsolutePath##*/}${PLAIN} 脚本的存在，请重新确认！\n"
            exit ## 终止退出
        fi
    }

    ## 匹配 Scripts 目录下的脚本
    function MatchingScriptsFile() {
        local FileNameTmp1 FileNameTmp2 FileNameTmp3 SeekDir SeekExtension
        ## 定义目录范围，优先级为 /jd/scripts > /jd/scripts/utils > /jd/scripts/backUp
        SeekDir="$ScriptsDir $ScriptsDir/utils $ScriptsDir/backUp"
        ## 定义后缀格式
        SeekExtension="js py ts sh"

        ## 判定传入是否含有后缀格式
        ## 如果存在后缀格式则为精确查找，否则为模糊查找，仅限关于脚本名称的定位目录除外
        ## 当模糊查找的脚本名称含有 "jd_" 或 "jx_" 开头时，支持省略、去掉该前缀后传入，同时当存在相同类型的脚本时前者优先级大于后者

        ## 判定是否传入了后缀格式
        echo ${InputContent} | grep "\." -q
        ## 精确查找
        if [ $? -eq 0 ]; then
            ## 判断并定义脚本类型
            FileSuffix=${InputContent##*.}
            case ${FileSuffix} in
            js)
                FileFormat="JavaScript"
                ;;
            py)
                FileFormat="Python"
                ;;
            ts)
                FileFormat="TypeScript"
                ;;
            sh)
                FileFormat="Shell"
                ;;
            *)
                echo -e "\n$ERROR 项目不支持运行 .${FileSuffix} 类型的脚本！\n"
                exit ## 终止退出
                ;;
            esac
            for dir in ${SeekDir}; do
                if [ -f ${dir}/${InputContent} ]; then
                    FileName=${InputContent%.*}
                    FileDir=${dir}
                    break
                fi
            done

        else
            ## 模糊查找
            FileNameTmp1=$(echo ${InputContent} | perl -pe "{s|\.js||; s|\.py||; s|\.ts||; s|\.sh||}")
            FileNameTmp2=$(echo ${FileNameTmp1} | perl -pe "{s|jd_||; s|^|jd_|}")
            FileNameTmp3=$(echo ${FileNameTmp1} | perl -pe "{s|jx_||; s|^|jx_|}")
            for dir in ${SeekDir}; do
                for ext in ${SeekExtension}; do
                    ## 第一种名称类型
                    if [ -f ${dir}/${FileNameTmp1}\.${ext} ]; then
                        FileName=${FileNameTmp1}
                        FileDir=${dir}
                        FileSuffix=${ext}
                        break 2
                    ## 第二种名称类型
                    elif [ -f ${dir}/${FileNameTmp2}\.${ext} ]; then
                        FileName=${FileNameTmp2}
                        FileDir=${dir}
                        FileSuffix=${ext}
                        break 2
                    ## 第三种名称类型
                    elif [ -f ${dir}/${FileNameTmp3}\.${ext} ]; then
                        FileName=${FileNameTmp3}
                        FileDir=${dir}
                        FileSuffix=${ext}
                        break 2
                    fi
                done
            done

            ## 判断并定义脚本类型
            if [ -n "${FileName}" ] && [ -n "${FileDir}" ]; then
                case ${FileSuffix} in
                js)
                    FileFormat="JavaScript"
                    ;;
                py)
                    FileFormat="Python"
                    ;;
                ts)
                    FileFormat="TypeScript"
                    ;;
                sh)
                    FileFormat="Shell"
                    ;;
                esac
            fi
        fi

        ## 判定变量是否存在否则报错终止退出
        if [ -n "${FileName}" ] && [ -n "${FileDir}" ]; then
            ## 添加依赖文件
            [[ ${FileFormat} == "JavaScript" ]] && Check_Moudules $FileDir
            ## 定义日志路径
            LogPath="$LogDir/${FileName}"
            Make_Dir ${LogPath}
        else
            echo -e "\n$ERROR 在 ${BLUE}$ScriptsDir${PLAIN} 根目录以及 ${BLUE}./backUp${PLAIN} ${BLUE}./utils${PLAIN} 二个子目录下均未检测到 ${BLUE}${InputContent}${PLAIN} 脚本的存在，请重新确认！\n"
            exit ## 终止退出
        fi
    }

    ## 匹配位于远程仓库的脚本
    function MatchingRemoteFile() {
        local DownloadJudge RepoJudge ProxyJudge RepoName FormatInputContent
        local FileNameTmp=${InputContent##*/}

        ## 判断并定义脚本类型
        FileSuffix=${FileNameTmp##*.}
        case ${FileSuffix} in
        js)
            FileFormat="JavaScript"
            ;;
        py)
            FileFormat="Python"
            ;;
        ts)
            FileFormat="TypeScript"
            ;;
        sh)
            FileFormat="Shell"
            ;;
        "")
            echo -e "\n$ERROR 未能识别脚本类型，请检查链接地址是否正确！\n"
            exit ## 终止退出
            ;;
        *)
            echo -e "\n$ERROR 本项目不支持运行 ${BLUE}.${FileSuffix}${PLAIN} 类型的脚本！\n"
            exit ## 终止退出
            ;;
        esac

        ## 判断来源仓库并处理链接
        RepoName=$(echo "${InputContent}" | grep -Eo "github|gitee|gitlab|jsdelivr")
        case ${RepoName} in
        github | jsdelivr)
            RepoJudge=" GitHub "
            ## 地址纠正
            echo "${InputContent}" | grep "github\.com\/.*\/blob\/.*" -q
            if [ $? -eq 0 ]; then
                local Tmp=$(echo "${InputContent}" | perl -pe "{s|github\.com/|raw\.githubusercontent\.com/|g; s|\/blob\/|\/|g}")
            else
                local Tmp=${InputContent}
            fi
            ## 验证 GitHub 地址格式
            echo "${Tmp}" | grep "raw\.githubusercontent\.com|github\.io|jsdelivr\.net\/gh" -Eq
            if [ $? -ne 0 ]; then
                echo -e "\n$FAIL 格式错误，请输入正确的 GitHub 地址！\n"
                exit ## 终止退出
            fi
            ## 判定是否使用下载代理参数
            if [[ ${DOWNLOAD_PROXY} == true ]]; then
                local Branch=$(echo "${Tmp}" | sed "s/https:\/\/raw\.githubusercontent\.com\///g" | awk -F '/' '{print$3}')
                FormatInputContent=$(echo "${Tmp}" | perl -pe "{s|raw\.githubusercontent\.com|cdn\.jsdelivr\.net\/gh|g; s|\/${Branch}\/|\@${Branch}\/|g}")
                ProxyJudge="使用代理"
            else
                FormatInputContent="${Tmp}"
                ProxyJudge=""
            fi
            ;;
        gitee)
            RepoJudge=" Gitee "
            ## 地址纠正
            echo "${InputContent}" | grep "gitee\.com\/.*\/blob\/.*" -q
            if [ $? -eq 0 ]; then
                FormatInputContent=$(echo "${InputContent}" | sed "s/\/blob\//\/raw\//g")
            else
                FormatInputContent="${InputContent}"
            fi
            ProxyJudge=""
            ;;
        gitlab)
            RepoJudge=" GitLab "
            ## 地址纠正
            echo "${InputContent}" | grep "gitlab\.com\/.*\/blob\/.*" -q
            if [ $? -eq 0 ]; then
                FormatInputContent=$(echo "${InputContent}" | sed "s/\/blob\//\/raw\//g")
            else
                FormatInputContent="${InputContent}"
            fi
            ProxyJudge=""
            ;;
        *)
            RepoJudge=""
            ## 其它托管仓库或链接不进行处理
            FormatInputContent="${InputContent}"
            ProxyJudge=""
            ;;
        esac

        ## 拉取脚本
        echo -en "\n$WORKING 正在从${BLUE}${RepoJudge}${PLAIN}远程仓库${ProxyJudge}下载 ${BLUE}${FileNameTmp}${PLAIN} 脚本..."
        wget -q --no-check-certificate "${FormatInputContent}" -O "$ScriptsDir/${FileNameTmp}.new" -T 20
        local ExitStatus=$?
        echo ''

        ## 判定拉取结果
        if [[ $ExitStatus -eq 0 ]]; then
            mv -f "$ScriptsDir/${FileNameTmp}.new" "$ScriptsDir/${FileNameTmp}"
            case ${RUN_MODE} in
            normal)
                RunModJudge=""
                ;;
            concurrent)
                RunModJudge="并发"
                ;;
            esac
            echo ''
            ## 等待动画
            local spin=('.   ' '..  ' '... ' '....')
            local n=0
            tput civis
            while (true); do
                ((n++))
                echo -en "$COMPLETE 下载完毕，倒计时 3 秒后开始${RunModJudge}执行${spin[$((n % 4))]}${PLAIN}" "\r"
                sleep 0.3
                [ $n = 10 ] && echo -e "\033[?25h\n${PLAIN}" && break
            done
            tput cnorm
            FileName=${FileNameTmp%.*}
            FileDir=$ScriptsDir
            ## 添加依赖文件
            [[ ${FileFormat} == "JavaScript" ]] && Check_Moudules $FileDir
            ## 定义日志路径
            LogPath="$LogDir/${FileName}"
            Make_Dir ${LogPath}
            RUN_REMOTE="true"
        else
            [ -f "$ScriptsDir/${FileNameTmp}.new" ] && rm -rf "$ScriptsDir/${FileNameTmp}.new"
            echo -e "\n$FAIL 脚本 ${FileNameTmp} 下载异常，请检查网络连通性并对目标 URL 地址是否正确进行验证！\n"
            exit ## 终止退出
        fi
    }

    ## 检测环境，添加依赖文件
    function Check_Moudules() {
        local WorkDir=$1
        ## 拷贝核心组件
        for file in ${CoreFiles}; do
            [ ! -f $WorkDir/$file ] && cp -rf $UtilsDir/$file $WorkDir
        done
        ## 拷贝推送通知模块
        Apply_SendNotify $WorkDir
    }

    ## 根据传入内容判断匹配方式（主要）
    echo ${InputContent} | grep "/" -q
    if [ $? -eq 0 ]; then
        ## 判定传入的是路径还是URL
        echo ${InputContent} | grep -Eq "http.*:"
        if [ $? -eq 0 ]; then
            MatchingRemoteFile
        else
            MatchingPathFile
        fi
    else
        MatchingScriptsFile
    fi

    ## 针对较旧的处理器架构进行一些处理
    case ${ARCH} in
    armv7l | armv6l)
        if [[ ${RUN_MODE} == "concurrent" ]]; then
            echo -e "\n$ERROR 检测到当前使用的是32位处理器，由于性能不佳故禁用并发功能！\n"
            exit ## 终止退出
        fi
        case ${FileFormat} in
        Python | TypeScript)
            echo -e "\n$ERROR 当前宿主机的处理器架构不支持运行 Python 和 TypeScript 脚本，建议更换运行环境！\n"
            exit ## 终止退出
            ;;
        esac
        ;;
    esac
}

## 随机延迟
function Random_Delay() {
    if [[ ${RUN_DELAY} == true ]]; then
        if [[ -n ${RandomDelay} ]] && [[ ${RandomDelay} -gt 0 ]]; then
            local CurMin=$(date "+%-M")
            local CurDelay=$((${RANDOM} % ${RandomDelay} + 1))
            ## 当时间处于每小时的 0~3,30,58~59 分时不延迟
            case ${CRON_TASK} in
            true)
                if [[ ${CurMin} -gt 3 && ${CurMin} -lt 30 ]] || [[ ${CurMin} -gt 31 && ${CurMin} -lt 58 ]]; then
                    sleep ${CurDelay}
                fi
                ;;
            *)
                echo -en "\n$WORKING 已启用随机延迟，此任务将在 ${CurDelay} 秒后开始运行..."
                sleep ${CurDelay}
                ;;
            esac
        fi
    fi
}

## 等待执行
function RunWait() {
    local FormatPrint
    if [[ ${RUN_WAIT} == true ]]; then
        echo ${RUN_WAIT_TIMES} | grep -E "\.[smd]$|\.$"
        if [ $? -eq 0 ]; then
            echo -e "\n$ERROR 等待时间值格式有误！\n"
            exit ## 终止退出
        fi
        Tmp=$(echo ${RUN_WAIT_TIMES} | perl -pe '{s|[smd]||g}')
        case ${RUN_WAIT_TIMES:0-1} in
        s)
            FormatPrint=" ${BLUE}${Tmp}${PLAIN} 秒"
            ;;
        m)
            FormatPrint=" ${BLUE}${Tmp}${PLAIN} 分"
            ;;
        d)
            FormatPrint=" ${BLUE}${Tmp}${PLAIN} 天"
            ;;
        *)
            FormatPrint=" ${BLUE}${Tmp}${PLAIN} 秒"
            ;;
        esac
        echo -en "\n$WORKING 此任务将在${FormatPrint}后开始运行..."
        sleep ${RUN_WAIT_TIMES}
        echo ''
    fi
}

## 判定账号是否存在
function Account_ExistenceJudgment() {
    local Num=$1
    local Tmp=Cookie$Num
    if [[ -z ${!Tmp} ]]; then
        echo -e "\n$ERROR 账号 ${BLUE}$Num${PLAIN} 不存在，请重新确认！\n"
        exit 1 ## 终止退出
    fi
}

## 静默执行，不推送通知消息
function NoPushNotify() {
    ## Server酱
    export PUSH_KEY=""
    export SCKEY_WECOM=""
    export SCKEY_WECOM_URL=""
    ## Bark
    export BARK_PUSH=""
    export BARK_SOUND=""
    export BARK_GROUP=""
    ## Telegram
    export TG_BOT_TOKEN=""
    export TG_USER_ID=""
    ## 钉钉
    export DD_BOT_TOKEN=""
    export DD_BOT_SECRET=""
    ## 企业微信
    export QYWX_KEY=""
    export QYWX_AM=""
    ## iGot聚合
    export IGOT_PUSH_KEY=""
    ## pushplus
    export PUSH_PLUS_TOKEN=""
    export PUSH_PLUS_USER=""
    ## go-cqhttp
    export GO_CQHTTP_URL=""
    export GO_CQHTTP_QQ=""
    export GO_CQHTTP_METHOD=""
    export GO_CQHTTP_SCRIPTS=""
    export GO_CQHTTP_LINK=""
    export GO_CQHTTP_MSG_SIZE=""
    export GO_CQHTTP_EXPIRE_SEND_PRIVATE=""
    ## WxPusher
    export WP_APP_TOKEN=""
    export WP_UIDS=""
    export WP_TOPICIDS=""
    export WP_URL=""
}

## 普通执行
function Run_Normal() {
    local InputContent=$1
    local UserNum LogFile
    ## 匹配脚本
    Find_Script ${InputContent}
    ## 导入配置文件
    Import_Config ${FileName}
    ## 统计账号数量
    Count_UserSum
    ## 静默运行
    [[ ${RUN_MUTE} == true ]] && NoPushNotify

    ## 运行主命令
    function Main() {
        if [[ ${RUN_BACKGROUND} == true ]]; then
            ## 记录执行开始时间
            echo -e "[$(date "${TIME_FORMAT}" | cut -c1-23)] 执行开始，后台运行不记录结束时间\n" >>${LogFile}
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
            Shell)
                bash ${FileName}.sh 2>&1 &>>${LogFile} &
                ;;
            esac
            echo -e "\n$COMPLETE 已部署当前任务并于后台运行中，如需查询脚本运行记录请前往 ${BLUE}${LogPath:4}${PLAIN} 目录查看最新日志\n"
        else
            ## 记录执行开始时间
            echo -e "[$(date "${TIME_FORMAT}" | cut -c1-23)] 执行开始\n" >>${LogFile}
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
            Shell)
                bash ${FileName}.sh 2>&1 | tee -a ${LogFile}
                ;;
            esac
            ## 记录执行结束时间
            echo -e "\n[$(date "${TIME_FORMAT}" | cut -c1-23)] 执行结束" >>${LogFile}
        fi
    }

    ## 组合账号变量
    function Combin_Designated_Cookie() {
        local Num="$1"
        local Tmp1=Cookie$Num
        local Tmp2=${!Tmp1}
        local CombinAll="${COOKIE_TMP}&${Tmp2}"
        COOKIE_TMP=$(echo $CombinAll | perl -pe "{s|^&||}")
    }

    ## 指定运行账号
    function Designated_Account() {
        local AccountsTmp="$1"
        for UserNum in ${AccountsTmp}; do
            echo "${UserNum}" | grep "-" -q
            if [ $? -eq 0 ]; then
                ## 格式检测
                if [[ $(echo "${UserNum}" | perl -pe "{s|-|-\\n|g}" | grep "-" -c) -ge 2 ]]; then
                    Help
                    echo -e "$ERROR 检测到无效参数值 ${BLUE}${UserNum}${PLAIN} ，存在多个连接符 ${BLUE}-${PLAIN} ，账号区间语法有误 ！\n"
                    exit ## 终止退出
                elif [[ $(echo "${UserNum}" | perl -pe "{s|\%|\%\\n|g}" | grep "%" -c) -ge 2 ]]; then
                    Help
                    echo -e "$ERROR 检测到无效参数值 ${BLUE}${UserNum}${PLAIN} ，存在多个账号总数代符 ${BLUE}%${PLAIN} ，账号区间语法有误！\n"
                    exit ## 终止退出
                fi
                if [[ ${UserNum%-*} -lt ${UserNum##*-} ]]; then
                    for ((i = ${UserNum%-*}; i <= ${UserNum##*-}; i++)); do
                        ## 判定账号是否存在
                        Account_ExistenceJudgment $i
                        Combin_Designated_Cookie $i
                    done
                else
                    Help
                    echo -e "$ERROR 检测到无效参数值 ${BLUE}${UserNum}${PLAIN} ，账号区间语法有误，请重新输入！\n"
                    exit ## 终止退出
                fi
            else
                ## 判定账号是否存在
                Account_ExistenceJudgment $UserNum
                Combin_Designated_Cookie $UserNum
            fi
        done
        ## 声明变量
        export JD_COOKIE=${COOKIE_TMP}
    }

    ## 后台挂起（守护进程）
    function Daemon_Process() {
        pm2 list | sed "/─/d" | perl -pe "{s| ||g; s#│#|#g}" | sed "1d" >$FilePm2List
        cat $FilePm2List | awk -F '|' '{print$3}' | grep $FileName -wq
        ExitStatus=$?
        ## 删除原有
        pm2 stop $FileName >/dev/null 2>&1
        pm2 flush >/dev/null 2>&1
        pm2 delete $FileName >/dev/null 2>&1
        ## 启用
        echo -e "[$(date "${TIME_FORMAT}" | cut -c1-23)] 守护进程启动\n" >>${LogFile}
        case ${FileFormat} in
        JavaScript)
            pm2 start "${FileName}.${FileSuffix}" --name "$FileName" --watch --log ${LogFile}
            ;;
        Python)
            pm2 start "${FileName}.${FileSuffix}" --interpreter /usr/bin/python3 --log ${LogFile}  -- -u
            ;;
        TypeScript)
            pm2 start "${FileName}.${FileSuffix}" --interpreter /usr/bin/ts-node-transpile-only --name "$FileName" --log ${LogFile}
            ;;
        Shell)
            pm2 start "${FileName}.${FileSuffix}" --interpreter bash --name "$FileName" --log ${LogFile}
            ;;
        esac
        if [[ $ExitStatus -eq 0 ]]; then
            echo -e "\n$COMPLETE 已重启 ${BLUE}$FileName${PLAIN} 守护进程，日志位于 ${BLUE}${LogFile}${PLAIN}\n"
        else
            echo -e "\n$SUCCESS 已启动 ${BLUE}$FileName${PLAIN} 守护进程，日志位于 ${BLUE}${LogFile}${PLAIN}\n"
        fi
        ## 删除 PM2 进程日志清单
        [ -f $FilePm2List ] && rm -rf $FilePm2List
    }

    ## 迅速模式
    if [[ ${RUN_RAPID} != "true" ]]; then
        ## 同步定时清单
        Synchronize_Crontab
        ## 组合互助码
        Combin_ShareCodes
    fi
    ## 进入脚本所在目录
    cd ${FileDir}
    ## 定义日志文件路径
    LogFile="${LogPath}/$(date "+%Y-%m-%d-%H-%M-%S").log"

    ## 账号分组
    if [[ ${RUN_GROUPING} == true ]]; then
        ## 定义分组
        local Groups=$(echo ${GROUPING_VALUE} | perl -pe "{s|@| |g}")
        for g in ${Groups}; do
            local Accounts=$(echo ${g} | perl -pe "{s|%|${UserSum}|g, s|,| |g}")
            Designated_Account "${Accounts}"

            ## 执行脚本
            if [[ ${RUN_LOOP} == true ]]; then
                ## 循环运行
                Run_Times=$(($RUN_LOOP_TIMES + 1))
            else
                Run_Times=1
            fi
            for ((i = 1; i <= ${Run_Times}; i++)); do
                ## 随机延迟
                Random_Delay
                ## 等待执行
                RunWait
                ## 运行
                if [[ ${RUN_DAEMON} == true ]]; then
                    ## 后台挂起（守护进程）
                    Daemon_Process
                else
                    Main
                fi
            done

            ## 重新组合变量
            COOKIE_TMP=""
        done
    else
        ## 指定账号
        if [[ ${RUN_DESIGNATED} == true ]]; then
            local Accounts=$(echo ${DESIGNATED_VALUE} | perl -pe "{s|%|${UserSum}|g, s|,| |g}")
            Designated_Account "${Accounts}"
        else
            ## 加载全部账号
            Combin_AllCookie
        fi

        ## 执行脚本
        if [[ ${RUN_LOOP} == true ]]; then
            ## 循环运行
            Run_Times=$(($RUN_LOOP_TIMES + 1))
        else
            Run_Times=1
        fi
        for ((i = 1; i <= ${Run_Times}; i++)); do
            ## 随机延迟
            Random_Delay
            ## 等待执行
            RunWait
            ## 运行
            if [[ ${RUN_DAEMON} == true ]]; then
                ## 后台挂起（守护进程）
                Daemon_Process
            else
                Main
            fi
        done

    fi

    ## 判断远程脚本执行后是否删除
    if [[ ${RUN_REMOTE} == true && ${AutoDelRawFiles} == true ]]; then
        rm -rf "${FileDir}/${FileName}.${FileSuffix}"
    fi
}

## 并发执行
function Run_Concurrent() {
    local InputContent=$1
    local UserNum LogFile
    ## 匹配脚本
    Find_Script ${InputContent}
    ## 导入配置文件
    Import_Config ${FileName}
    ## 统计账号数量
    Count_UserSum
    ## 静默运行参数
    [[ ${RUN_MUTE} == true ]] && NoPushNotify

    ## 运行主命令
    function Main() {
        local Num=$1
        local Tmp=Cookie${Num}
        export JD_COOKIE=${!Tmp}
        ## 定义日志文件路径
        LogFile="${LogPath}/$(date "+%Y-%m-%d-%H-%M-%S")_${Num}.log"
        ## 记录执行开始时间
        echo -e "[$(date "${TIME_FORMAT}" | cut -c1-23)] 执行开始，后台运行不记录结束时间\n" >>${LogFile}
        ## 执行脚本
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
        Shell)
            bash ${FileName}.sh 2>&1 &>>${LogFile} &
            ;;
        esac
    }

    ## 处理其它参数：
    ## 迅速模式
    if [[ ${RUN_RAPID} != "true" ]]; then
        ## 同步定时清单
        Synchronize_Crontab
        ## 组合互助码
        Combin_ShareCodes
    fi

    ## 进入脚本所在目录
    cd ${FileDir}
    ## 随机延迟
    Random_Delay
    ## 等待执行
    RunWait
    ## 加载账号并执行
    if [[ ${RUN_DESIGNATED} == true ]]; then
        ## 判定账号是否存在
        local Accounts=$(echo ${DESIGNATED_VALUE} | perl -pe "{s|%|${UserSum}|g, s|,| |g}")
        for UserNum in ${Accounts}; do
            echo "${UserNum}" | grep "-" -q
            if [ $? -eq 0 ]; then
                ## 格式检测
                if [[ $(echo "${UserNum}" | perl -pe "{s|-|-\\n|g}" | grep "-" -c) -gt 2 ]]; then
                    Help
                    echo -e "$ERROR 检测到无效参数值 ${BLUE}${UserNum}${PLAIN} ，账号区间语法有误，存在多个连接符(${BLUE}-${PLAIN})！\n"
                    exit ## 终止退出
                elif [[ $(echo "${UserNum}" | perl -pe "{s|\%|\%\\n|g}" | grep "%" -c) -gt 2 ]]; then
                    Help
                    echo -e "$ERROR 检测到无效参数值 ${BLUE}${UserNum}${PLAIN} ，账号区间语法有误，存在多个账号总数代符(${BLUE}%${PLAIN})！\n"
                    exit ## 终止退出
                fi
                if [[ ${UserNum%-*} -lt ${UserNum##*-} ]]; then
                    for ((i = ${UserNum%-*}; i <= ${UserNum##*-}; i++)); do
                        ## 判定账号是否存在
                        Account_ExistenceJudgment $i
                    done
                else
                    Help
                    echo -e "$ERROR 检测到无效参数值 ${BLUE}${UserNum}${PLAIN} ，账号区间语法有误，请重新输入！\n"
                    exit ## 终止退出
                fi
            else
                ## 判定账号是否存在
                Account_ExistenceJudgment $UserNum
            fi
        done

        ## 指定运行账号
        for UserNum in ${Accounts}; do
            echo "${UserNum}" | grep "-" -q
            if [ $? -eq 0 ]; then
                for ((i = ${UserNum%-*}; i <= ${UserNum##*-}; i++)); do
                    ## 执行脚本
                    Main $i
                done
            else
                ## 执行脚本
                Main ${UserNum}
            fi
        done
    else
        ## 加载全部账号
        ## 全局屏蔽
        grep "^TempBlockCookie=" $FileConfUser -q 2>/dev/null
        if [ $? -eq 0 ]; then
            local GlobalBlockCookie=$(grep "^TempBlockCookie=" $FileConfUser | awk -F "[\"\']" '{print$2}')
        fi
        for ((UserNum = 1; UserNum <= ${UserSum}; UserNum++)); do
            if [[ ${GlobalBlockCookie} ]]; then
                for num1 in ${GlobalBlockCookie}; do
                    [[ $i -eq $num1 ]] && continue 2
                done
            fi
            for num in ${TempBlockCookie}; do
                [[ $UserNum -eq $num ]] && continue 2
            done
            ## 执行脚本
            Main ${UserNum}
        done
    fi
    echo -e "\n$COMPLETE 已部署当前任务并于后台运行中，如需查询脚本运行记录请前往 ${BLUE}${LogPath:4}${PLAIN} 目录查看相关日志\n"

    ## 判断远程脚本执行后是否删除
    if [[ ${RUN_REMOTE} == true && ${AutoDelRawFiles} == true ]]; then
        rm -rf "${FileDir}/${FileName}.${FileSuffix}"
    fi
}

## 终止执行
function Process_Kill() {
    local InputContent=$1
    local ProcessShielding="grep|pkill|/bin/bash /usr/local/bin| task "
    ## 匹配脚本
    Find_Script ${InputContent}
    local ProcessKeywords="${FileName}\.${FileSuffix}\$"
    ## 判定对应脚本是否存在相关进程
    ps -ef | grep -Ev "grep|pkill" | grep "${FileName}\.${FileSuffix}$" -wq
    local ExitStatus=$?
    if [[ ${ExitStatus} == 0 ]]; then
        ## 列出检测到的相关进程
        echo -e "\n检测到下列关于 ${BLUE}${FileName}.${FileSuffix}${PLAIN} 脚本的进程："
        echo -e "\n${BLUE}[进程]  [任务]${PLAIN}"
        ps -axo pid,command | grep "${ProcessKeywords}" | grep -Ev "${ProcessShielding}"
        ## 终止前等待确认
        echo -en "\n$WORKING 进程将在 ${BLUE}3${PLAIN} 秒后终止，可通过 ${BLUE}Ctrl + Z${PLAIN} 中断此操作..."
        sleep 3
        echo ''
        ## 杀死进程
        kill -9 $(ps -ef | grep "${ProcessKeywords}" | grep -Ev "${ProcessShielding}" | awk '$0 !~/grep/ {print $2}' | tr -s '\n' ' ') >/dev/null 2>&1
        sleep 1
        kill -9 $(ps -ef | grep "${ProcessKeywords}" | grep -Ev "${ProcessShielding}" | awk '$0 !~/grep/ {print $2}' | tr -s '\n' ' ') >/dev/null 2>&1

        ## 验证
        ps -ef | grep -Ev "grep|pkill" | grep "\.${FileSuffix}$" -wq
        if [ $? -eq 0 ]; then
            ps -axo pid,command | less | grep "${ProcessKeywords}" | grep -Ev "${ProcessShielding}"
            echo -e "\n$FAIL 未能成功终止进程，请尝试手动 ${BLUE}kill -9 <pid>${PLAIN}\n"
        else
            echo -e "\n$SUCCESS 已终止相关进程\n"
        fi
    else
        echo -e "\n$ERROR 未检测到与 ${BLUE}${FileName}${PLAIN} 脚本相关的进程，可能此时没有正在运行，请确认！\n"
    fi
}

## 进程清理功能（终止卡死进程释放内存）
function Process_CleanUp() {
    local CheckHour ProcessArray FormatCurrentTime StartTime FormatDiffTime Tmp
    ## 判断检测时间，单位小时
    case $# in
    0)
        CheckHour=6
        ;;
    1)
        CheckHour=$1
        ;;
    esac
    ## 生成进程清单
    ps -axo pid,time,user,start,command | egrep "\.js$|\.py$|\.ts$" | egrep -v "server\.js|pm2|egrep|perl|sed|bash" | grep -E "00:[0-9][0-9]:[0-9][0-9] root" >${FileProcessList}
    if [[ "$(cat ${FileProcessList})" != "" ]]; then
        echo -e "\n$WORKING 开始匹配并清理启动超过 ${BLUE}${CheckHour}${PLAIN} 小时的卡死进程...\n"
        ## 生成进程 PID 数组
        ProcessArray=($(
            cat ${FileProcessList} | awk -F ' ' '{print$1}'
        ))
        ## 定义当前时间戳
        FormatCurrentTime=$(date +%s)
        for ((i = 1; i <= ${#ProcessArray[@]}; i++)); do
            local n=$((i - 1))
            ## 判断启动时间的类型（距离启动超过1天会显示为日期）
            StartTime=$(grep "${ProcessArray[n]}" ${FileProcessList} | awk -F ' ' '{print$4}')
            if [[ ${StartTime} = [0-9][0-9]:[0-9][0-9]:[0-9][0-9] ]]; then
                ## 定义实际时间戳
                Tmp=$(date +%s -d "$(date "+%Y-%m-%d") ${StartTime}")
                [[ ${Tmp} -gt ${FormatCurrentTime} ]] && FormatStartTime=$((${Tmp} - 86400)) || FormatStartTime=${Tmp}
                ## 比较时间
                FormatDiffTime=$((${FormatCurrentTime} - 3600 * ${CheckHour}))
                if [[ ${FormatDiffTime} -gt ${FormatStartTime} ]]; then
                    echo -e "已终止进程：${ProcessArray[n]}  脚本名称：$(grep ${ProcessArray[n]} ${FileProcessList} | awk -F ' ' '{print$NF}')"
                    kill -9 ${ProcessArray[n]} >/dev/null 2>&1
                else
                    continue
                fi
            elif [[ ${StartTime} = [ADFJMNOS][a-z]* ]]; then
                echo -e "已终止进程：${ProcessArray[n]}  脚本名称：$(grep ${ProcessArray[n]} ${FileProcessList} | awk -F ' ' '{print$NF}')"
                kill -9 ${ProcessArray[n]} >/dev/null 2>&1
            fi
        done
        echo -e "\n$COMPLETE 运行结束\n"
        [ -f ${FileProcessList} ] && rm -rf ${FileProcessList}
    else
        echo -e "\n$COMPLETE 未查询到正在运行中的进程\n"
    fi
}

## 账号控制功能
function Accounts_Control() {
    local SUCCESS_ICON="[✔]"
    local FAIL_ICON="[×]"
    local Valid="${GREEN}${SUCCESS_ICON}${PLAIN}"
    local Invalid="${RED}${FAIL_ICON}${PLAIN}"
    local INTERFACE_URL="https://me-api.jd.com/user_new/info/GetJDUserInfoUnion"

    ## 检测
    function CheckCookie() {
        local InputContent=$1
        local Check="$(curl -s --noproxy "*" "${INTERFACE_URL}" -H "cookie: ${InputContent}" | jq -r '.retcode')"
        case $Check in
        0)
            echo -e "${Valid}"
            ;;
        1001)
            echo -e "${Invalid}"
            ;;
        *)
            echo -e "${RED}未知${PLAIN}"
            ;;
        esac
    }

    case $1 in
    ## 检测账号是否有效
    check)
        ## 导入配置文件
        Import_Config

        ## 检测全部账号
        function CheckCookie_All() {
            local TmpA TmpB pt_pin pt_pin_temp FormatPin EscapePin EscapePin_Length_Add State CookieUpdatedDate UpdateTimes TmpDays TmpTime Tmp1 Tmp2 Tmp3 num

            ## 统计账号数量
            Count_UserSum

            ## 生成 pt_pin 数组
            for ((user_num = 1; user_num <= $UserSum; user_num++)); do
                TmpA=Cookie$user_num
                TmpB=${!TmpA}
                i=$(($user_num - 1))
                pt_pin_temp=$(echo ${TmpB} | perl -pe "{s|.*pt_pin=([^; ]+)(?=;?).*|\1|}")
                pt_pin[i]=$pt_pin_temp
            done

            echo -e "\n$WORKING 当前本地共有 ${BLUE}$UserSum${PLAIN} 个账号，开始检测...\n"

            ## 汇总输出
            for ((m = 0; m < $UserSum; m++)); do
                ## 定义格式化后的pt_pin
                FormatPin=$(echo ${pt_pin[m]} | perl -pe '{s|[\.\<\>\/\[\]\!\@\#\$\%\^\&\*\(\)\-\+]|\\$&|g;}')
                ## 转义pt_pin中的汉字
                EscapePin=$(printf $(echo ${pt_pin[m]} | perl -pe "s|%|\\\x|g;"))
                ## 定义pt_pin中的长度（受限于编码，汉字多占1长度，短横杠长度为0）
                EscapePin_Length_Add=$(StringLength $(echo ${EscapePin} | perl -pe '{s|[0-9a-zA-Z\.\=\:\_-]||g;}'))
                ## 定义账号状态
                State="$(CheckCookie $(grep -E "Cookie[1-9].*${FormatPin}" $FileConfUser | awk -F "[\"\']" '{print$2}'))"
                ## 查询上次更新时间并计算过期时间
                CookieUpdatedDate=$(grep "\#.*上次更新：" $FileConfUser | grep "${FormatPin}" | head -1 | awk -F '上次更新：' '{print$NF}' | awk -F '  ' '{print$1}' | perl -pe "{s|;||g}")
                if [[ ${CookieUpdatedDate} ]]; then
                    UpdateTimes="${CookieUpdatedDate}"
                else
                    UpdateTimes="未知"
                fi
                sleep 1 ## 降低频率以减少出现因查询太快导致API请求失败的情况
                num=$((m + 1))
                ## 格式化输出
                printf "%-3s ${BLUE}%-$((18 + ${EscapePin_Length_Add}))s${PLAIN} %-s${BLUE}%-s${PLAIN}\n" "$num." "${EscapePin}" " ${State}   上次更新: " "${UpdateTimes}"
            done

            ## 检测 wskey
            ## 统计 account.json 的数组总数，即最多配置了多少个账号，即使数组为空值
            local ArrayLength=$(cat $FileAccountConf | jq 'keys' | tail -n 2 | head -n 1 | grep -Eo "[0-9]{1,3}")
            if [[ ${ArrayLength} -ge 1 ]]; then
                num=1
                for ((i = 0; i <= ${ArrayLength}; i++)); do
                    PT_PIN_TMP=$(cat $FileAccountConf | jq -r ".[$i] | .pt_pin" | sed "s/null//g; s/ //g")
                    WS_KEY_TMP=$(cat $FileAccountConf | jq -r ".[$i] | .ws_key" | sed "s/null//g; s/ //g")
                    ## 没有配置相应值就跳出当前循环
                    [ -z ${PT_PIN_TMP} ] && continue
                    if [ -z ${WS_KEY_TMP} ]; then
                        continue
                    else
                        echo -e "\n$WORKING 开始检测 wskey 状态...\n"
                        break
                    fi
                done

                for ((i = 0; i <= ${ArrayLength}; i++)); do
                    local PT_PIN_TMP=$(cat $FileAccountConf | jq -r ".[$i] | .pt_pin" | sed "s/null//g; s/ //g")
                    local WS_KEY_TMP=$(cat $FileAccountConf | jq -r ".[$i] | .ws_key" | sed "s/null//g; s/ //g")
                    ## 没有配置相应值就跳出当前循环
                    [ -z ${PT_PIN_TMP} ] && continue
                    [ -z ${WS_KEY_TMP} ] && continue
                    ## 转义pt_pin中的汉字
                    EscapePin=$(printf $(echo ${PT_PIN_TMP} | perl -pe "s|%|\\\x|g;"))
                    ## 定义pt_pin中的长度（受限于编码，汉字多占1长度，短横杠长度为0）
                    EscapePin_Length_Add=$(StringLength $(echo ${EscapePin} | perl -pe '{s|[0-9a-zA-Z\.\=\:\_-]||g;}'))
                    ## 打印
                    printf "%-3s ${BLUE}%-$((19 + ${EscapePin_Length_Add}))s${PLAIN} %-s\n" "$num." "${EscapePin}" "$(CheckCookie "wskey=${WS_KEY_TMP}")"
                    sleep 1 ## 降低频率以减少出现因查询太快导致API请求失败的情况
                    let num++
                done
            fi
        }

        ## 检测指定账号
        function CheckCookie_Designated() {
            local pt_pin FormatPin State CookieUpdatedDate UpdateTimes TmpDays TmpTime Tmp1 Tmp2 Tmp3
            local UserNum=$1
            ## 判定账号是否存在
            Account_ExistenceJudgment ${UserNum}
            echo -e "\n$WORKING 开始检测第 ${BLUE}${UserNum}${PLAIN} 个账号...\n"
            ## 定义pt_pin
            pt_pin=$(grep "Cookie${UserNum}=" $FileConfUser | head -1 | awk -F "[\"\']" '{print$2}' | perl -pe "{s|.*pt_pin=([^; ]+)(?=;?).*|\1|}")
            FormatPin=$(echo ${pt_pin} | perl -pe '{s|[\.\<\>\/\[\]\!\@\#\$\%\^\&\*\(\)\-\+]|\\$&|g;}')
            ## 转义 pt_pin 中的 UrlEncode 输出中文
            EscapePin=$(printf $(echo ${FormatPin} | perl -pe "s|%|\\\x|g;"))
            echo -e "账号：${BLUE}${EscapePin}${PLAIN}\n"
            ## 定义账号状态
            State="$(CheckCookie $(grep -E "Cookie[1-9].*${FormatPin}" $FileConfUser | awk -F "[\"\']" '{print$2}'))"
            ## 查询上次更新时间并计算过期时间
            CookieUpdatedDate=$(grep "\#.*上次更新：" $FileConfUser | grep "${FormatPin}" | head -1 | awk -F '上次更新：' '{print$NF}' | awk -F '  ' '{print$1}' | perl -pe "{s|;||g}")
            if [[ ${CookieUpdatedDate} ]]; then
                UpdateTimes="${CookieUpdatedDate}"
            else
                UpdateTimes="未知"
            fi
            ## 输出
            echo -en "Cookie => ${State}"

            ## 检测 wskey
            grep -q "${pt_pin}" $FileAccountConf
            if [[ $? -eq 0 ]]; then
                ## 统计 account.json 数组中的元素数量，即最多配置了多少个账号，即使元素为空值
                local ArrayLength=$(cat $FileAccountConf | jq 'keys' | tail -n 2 | head -n 1 | grep -Eo "[0-9]{1,3}")

                for ((i = 0; i <= ${ArrayLength}; i++)); do
                    local PT_PIN_TMP=$(cat $FileAccountConf | jq -r ".[$i] | .pt_pin" | sed "s/null//g; s/ //g")
                    local WS_KEY_TMP=$(cat $FileAccountConf | jq -r ".[$i] | .ws_key" | sed "s/null//g; s/ //g")
                    ## 没有配置相应值就跳出当前循环
                    [ -z ${PT_PIN_TMP} ] && continue
                    if [[ ${PT_PIN_TMP} == ${pt_pin} ]]; then
                        ## 输出
                        echo -en "   ws_key => $(CheckCookie "wskey=${WS_KEY_TMP}")"
                        break
                    else
                        continue
                    fi
                    [ -z ${WS_KEY_TMP} ] && continue
                done
            fi
            echo ''
            echo -e "上次更新: ${BLUE}${UpdateTimes}${PLAIN}"
        }

        ## 先检测网络环境
        for ((n = 1; n <= 3; n++)); do
            if [[ "$(curl -I -s --connect-timeout 5 ${INTERFACE_URL} -w %{http_code} | tail -n 1)" == "200" ]]; then
                break
            fi
            sleep 0.5
            if [[ $n -eq 3 ]]; then
                echo -e "$ERROR API 请求失败，请检查当前网络环境！"
                exit
            fi
        done

        ## 汇总
        case $# in
        1)
            CheckCookie_All
            ;;
        2)
            CheckCookie_Designated $2
            ;;
        esac

        echo -e "\n$COMPLETE 检测完毕\n"
        ;;

    ## 使用 WSKEY 更新账号
    update)
        Import_Config_Not_Check "UpdateCookies"
        local ExitStatus LogPath LogFile
        [ -f $FileSendMark ] && rm -rf $FileSendMark

        ## 更新 sign 签名
        function UpdateSign() {
            Make_Dir $SignDir
            if [ ! -d $SignDir/.git ]; then
                git clone -b master ${SignsRepoGitUrl} $SignDir >/dev/null
                ExitStatus=$?
            else
                cd $SignDir
                if [[ $(date "+%-H") -eq 1 || $(date "+%-H") -eq 9 || $(date "+%-H") -eq 17 ]] && [[ $(date "+%-S") -eq 0 ]]; then
                    local Tmp=$((${RANDOM} % 10))
                    echo -en "\n检测到当前处于整点，已启用随机延迟，此任务将在 $Tmp 秒后开始执行..."
                    sleep $Tmp
                    echo ''
                fi
                git fetch --all >/dev/null
                ExitStatus=$?
                git reset --hard origin/master >/dev/null
            fi
        }

        ## 更新全部账号
        function UpdateCookie_All() {
            local UserNum PT_PIN_TMP WS_KEY_TMP FormatPin EscapePin EscapePin_Length_Add CookieTmp LogFile
            ## 统计 account.json 的数组总数，即最多配置了多少个账号，即使数组为空值
            local ArrayLength=$(cat $FileAccountConf | jq 'keys' | tail -n 2 | head -n 1 | grep -Eo "[0-9]{1,3}")
            ## 生成 pt_pin 数组
            local pt_pin_array=(
                $(cat $FileAccountConf | jq -r '.[] | {pt_pin:.pt_pin,} | .pt_pin' | grep -Ev "pt_pin的值|null|^$")
            )
            if [[ ${#pt_pin_array[@]} -ge 1 ]]; then
                local num=1
                ## 定义日志文件路径
                LogFile="${LogPath}/$(date "+%Y-%m-%d-%H-%M-%S").log"
                echo -e "\n$WORKING 检测到已配置 ${BLUE}${#pt_pin_array[@]}${PLAIN} 个账号，开始更新...\n"
                ## 记录执行开始时间
                echo -e "[$(date "${TIME_FORMAT}" | cut -c1-23)] 执行开始\n" >>${LogFile}

                for ((i = 0; i <= ${ArrayLength}; i++)); do
                    PT_PIN_TMP=$(cat $FileAccountConf | jq -r ".[$i] | .pt_pin" | sed "s/null//g; s/ //g")
                    WS_KEY_TMP=$(cat $FileAccountConf | jq -r ".[$i] | .ws_key" | sed "s/null//g; s/ //g")
                    ## 没有配置相应值就跳出当前循环
                    [ -z ${PT_PIN_TMP} ] && continue
                    [ -z ${WS_KEY_TMP} ] && continue
                    ## 声明变量
                    export JD_PT_PIN=${PT_PIN_TMP}
                    ## 定义格式化后的pt_pin
                    FormatPin=$(echo ${PT_PIN_TMP} | perl -pe '{s|[\.\<\>\/\[\]\!\@\#\$\%\^\&\*\(\)\-\+]|\\$&|g;}')
                    ## 转义pt_pin中的汉字
                    EscapePin=$(printf $(echo ${PT_PIN_TMP} | perl -pe "s|%|\\\x|g;"))
                    ## 定义pt_pin中的长度（受限于编码，汉字多占1长度，短横杠长度为0）
                    EscapePin_Length_Add=$(StringLength $(echo ${EscapePin} | perl -pe '{s|[0-9a-zA-Z\.\=\:\_ -]||g;}'))
                    ## 执行脚本
                    if [[ ${EnableGlobalProxy} == true ]]; then
                        node -r 'global-agent/bootstrap' ${FileUpdateCookie##*/} &>>${LogFile} &
                    else
                        node ${FileUpdateCookie##*/} &>>${LogFile} &
                    fi
                    wait
                    ## 判断结果
                    if [[ $(grep "Cookie => \[${FormatPin}\]  更新成功" ${LogFile}) ]]; then
                        ## 格式化输出
                        printf "%-3s ${BLUE}%-$((20 + ${EscapePin_Length_Add}))s${PLAIN} ${GREEN}%-s${PLAIN}\n" "$num." "${EscapePin}" "${SUCCESS_ICON}"
                    else
                        printf "%-3s ${BLUE}%-$((20 + ${EscapePin_Length_Add}))s${PLAIN} ${RED}%-s${PLAIN}\n" "$num." "${EscapePin}" "${FAIL_ICON}"
                        ## 账号更新异常告警与状态检测
                        local UserNum=$(grep -E "Cookie[0-9]{1,3}=.*pt_pin=${FormatPin}" $FileConfUser | awk -F '=' '{print$1}' | awk -F 'Cookie' '{print$2}')
                        local CheckTmp="$(curl -s --noproxy "*" "${INTERFACE_URL}" -H "cookie: wskey=${WS_KEY_TMP}" | jq -r '.retcode')"
                        if [[ ${CheckTmp} == "0" ]]; then
                            echo -e "    该账号的WSKEY状态 => ${Valid}\n"
                        elif [[ ${CheckTmp} == "1001" ]]; then
                            echo -e "    该账号的WSKEY状态 => ${Invalid}\n"
                        else
                            echo -e "    该账号的WSKEY状态 => ${RED}未知${PLAIN}\n"
                        fi
                        if [[ ${EnableCookieUpdateFailureNotify} == true ]]; then
                            if [[ ${CheckTmp} == "1001" ]]; then
                                Notify "账号更新异常通知" "检测到第$UserNum个账号 ${EscapePin} 的 wskey 已经失效，导致未能正常更新，请尽快处理"
                            else
                                Notify "账号更新异常通知" "检测到第$UserNum个账号 ${EscapePin} 的 wskey 更新出现异常，请尽快处理"
                            fi
                            echo ''
                        fi
                    fi
                    let num++
                done
                ## 优化日志排版
                sed -i '/更新Cookies,.*\!/d; /^$/d; s/===.*//g' ${LogFile}
                ## 记录执行结束时间
                echo -e "\n[$(date "${TIME_FORMAT}" | cut -c1-23)] 执行结束" >>${LogFile}
                ## 推送通知
                grep "Cookie => \[" ${LogFile} >>$FileSendMark
                if [[ $(grep "Cookie =>" ${LogFile}) ]]; then
                    ## 转义中文用户名
                    local tmp_array=(
                        $(cat $FileSendMark | grep -o "\[.*\%.*\]" | perl -pe '{s|\[||g; s|\]||g}')
                    )
                    if [[ ${#tmp_array[@]} -ge 1 ]]; then
                        for ((i = 1; i <= ${#tmp_array[@]}; i++)); do
                            UserNum=$((i - 1))
                            EscapePin=$(printf $(echo ${tmp_array[$UserNum]} | perl -pe "s|%|\\\x|g;"))
                            sed -i "s/${tmp_array[$UserNum]}/${EscapePin}/g" $FileSendMark
                        done
                    fi
                    ## 格式化通知内容
                    perl -pe '{s|Cookie => ||g; s|\[||g; s|\]|\ \ \-|g}' -i $FileSendMark
                    echo "" >>$FileSendMark
                    echo -e "\n$COMPLETE 更新完毕\n"
                else
                    echo -e "\n$ERROR 更新异常，请检查当前网络环境并查看 ${BLUE}log/UpdateCookies${PLAIN} 目录下的运行日志！\n"
                fi
            else
                echo -e "\n$ERROR 请先在 ${BLUE}$FileAccountConf${PLAIN} 中配置好 ${BLUE}pt_pin${PLAIN} ！\n"
                exit ## 终止退出
            fi
        }

        ## 更新指定账号
        function UpdateCookie_Designated() {
            local UserNum=$1
            local ArrayNum PT_PIN_TMP WS_KEY_TMP FormatPin EscapePin CookieTmp LogFile
            local COOKIE_TMP=Cookie$UserNum
            ## 判定账号是否存在
            Account_ExistenceJudgment $UserNum
            PT_PIN_TMP=$(echo ${!COOKIE_TMP} | perl -pe "{s|.*pt_pin=([^; ]+)(?=;?).*|\1|}")
            ## 定义格式化后的pt_pin
            FormatPin="$(echo ${PT_PIN_TMP} | perl -pe '{s|[\.\<\>\/\[\]\!\@\#\$\%\^\&\*\(\)\-\+]|\\$&|g;}')"
            ## 判定在 account.json 中是否存在该 pt_pin
            grep "${FormatPin}" -q $FileAccountConf
            if [ $? -eq 0 ]; then
                ArrayNum=$(($(cat $FileAccountConf | jq 'map_values(.pt_pin)' | grep -n "${FormatPin}" | awk -F ':' '{print$1}') - 2))
                WS_KEY_TMP=$(cat $FileAccountConf | jq -r ".[$ArrayNum] | .ws_key" | sed "s/null//g; s/ //g")
                ## 没有配置 ws_key 就退出
                if [ -z ${WS_KEY_TMP} ]; then
                    echo -e "\n$ERROR 请先在 ${BLUE}$FileAccountConf${PLAIN} 中配置该账号的 ${BLUE}ws_key${PLAIN} ！\n"
                    exit ## 终止退出
                else
                    ## 定义日志文件路径
                    LogFile="${LogPath}/$(date "+%Y-%m-%d-%H-%M-%S")_$UserNum.log"
                    echo -e "\n$WORKING 开始更新第 ${BLUE}$UserNum${PLAIN} 个账号...\n"
                    ## 声明变量
                    export JD_PT_PIN=${PT_PIN_TMP}
                    ## 转义pt_pin中的汉字
                    EscapePin=$(printf $(echo ${PT_PIN_TMP} | perl -pe "s|%|\\\x|g;"))
                    ## 记录执行开始时间
                    echo -e "[$(date "${TIME_FORMAT}" | cut -c1-23)] 执行开始\n" >>${LogFile}
                    ## 执行脚本
                    if [[ ${EnableGlobalProxy} == true ]]; then
                        node -r 'global-agent/bootstrap' ${FileUpdateCookie##*/} &>>${LogFile} &
                    else
                        node ${FileUpdateCookie##*/} &>>${LogFile} &
                    fi
                    wait
                    ## 优化日志排版
                    sed -i '/更新Cookies,.*\!/d; /^$/d; s/===.*//g' ${LogFile}
                    ## 记录执行结束时间
                    echo -e "\n[$(date "${TIME_FORMAT}" | cut -c1-23)] 执行结束" >>${LogFile}
                    ## 判断结果
                    if [[ $(grep "Cookie => \[${FormatPin}\]  更新成功" ${LogFile}) ]]; then
                        echo -e "${BLUE}${EscapePin}${PLAIN}  ${Valid}"
                        ## 打印 Cookie
                        # echo -e "Cookie：$(grep -E "^Cookie[1-9].*pt_pin=${FormatPin}" $FileConfUser | awk -F "[\"\']" '{print$2}')\n"
                    else
                        echo -e "${BLUE}${EscapePin}${PLAIN}  ${Invalid}"
                        ## 账号状态检测
                        local CheckTmp="$(curl -s --noproxy "*" "${INTERFACE_URL}" -H "cookie: wskey=${WS_KEY_TMP}" | jq -r '.retcode')"
                        if [[ ${CheckTmp} == "0" ]]; then
                            echo -e "该账号wskey状态 => ${Valid}\n"
                        elif [[ ${CheckTmp} == "1001" ]]; then
                            echo -e "该账号wskey状态 => ${Invalid}\n"
                        else
                            echo -e "该账号wskey状态 => ${RED}未知${PLAIN}\n"
                        fi
                    fi
                    ## 推送通知
                    grep "Cookie => \[" ${LogFile} >>$FileSendMark
                    if [[ $(grep "Cookie =>" ${LogFile}) ]]; then
                        ## 转义中文用户名
                        local tmp_pt_pin=$(cat $FileSendMark | grep -o "\[.*\%.*\]" | perl -pe '{s|\[||g; s|\]||g}')
                        if [[ ${tmp_pt_pin} ]]; then
                            EscapePin=$(printf $(echo ${tmp_pt_pin} | perl -pe "s|%|\\\x|g;"))
                            sed -i "s/${tmp_pt_pin}/${EscapePin}/g" $FileSendMark
                        fi
                        ## 格式化通知内容
                        perl -pe '{s|Cookie => ||g; s|\[||g; s|\]|\ \ \-|g}' -i $FileSendMark
                        echo "" >>$FileSendMark
                        echo -e "\n$COMPLETE 更新完毕\n"
                    else
                        echo -e "\n$ERROR 更新异常，请检查当前网络环境并查看 ${BLUE}log/UpdateCookies${PLAIN} 目录下的运行日志！\n"
                    fi
                fi
            else
                echo -e "\n$ERROR 请先在 ${BLUE}$FileAccountConf${PLAIN} 中配置该账号的 ${BLUE}pt_pin${PLAIN} ！\n"
                exit ## 终止退出
            fi
        }

        ## 汇总
        if [ -f $FileUpdateCookie ]; then
            if [[ $(cat $FileAccountConf | jq '.[] | {ws_key:.ws_key,}' | grep -F "\"ws_key\"" | grep -v "wskey的值" | awk -F '\"' '{print$4}' | grep -v '^$') ]]; then
                UpdateSign
                if [[ $ExitStatus -eq 0 ]]; then
                    LogPath="$LogDir/UpdateCookies"
                    Make_Dir ${LogPath}
                    cd $UtilsDir
                    case $# in
                    1)
                        UpdateCookie_All
                        ;;
                    2)
                        UpdateCookie_Designated $2
                        ;;
                    esac
                    ## 推送通知
                    [ -f $FileSendMark ] && sed -i "/未设置ws_key跳过更新/d" $FileSendMark
                    if [ -s $FileSendMark ]; then
                        [[ ${EnableCookieUpdateNotify} == true ]] && Notify "账号更新结果通知" "$(cat $FileSendMark)"
                    fi
                    [ -f $FileSendMark ] && rm -rf $FileSendMark
                else
                    echo -e "\n$FAIL 签名更新异常，请检查网络环境后重试！\n"
                fi
            else
                echo -e "\n$ERROR 请先在 ${BLUE}$FileAccountConf${PLAIN} 中配置好 ${BLUE}ws_key${PLAIN} ！\n"
            fi
        else
            echo -e "\n$ERROR 账号更新脚本不存在，请确认是否移动！\n"
        fi
        ;;
    beans)
        Import_Config
        Count_UserSum

        function getJingBeanBalanceDetail() {
            local pageNum=$1
            body="body=$(UrlEncode "{\"pageSize\": \"20\",\"page\": \"${pageNum}\"}")&appid=ld"
            curl -s -X POST "https://api.m.jd.com/client.action?functionId=getJingBeanBalanceDetail" \
            -H "Host: api.m.jd.com" \
            -H "Content-Type: application/x-www-form-urlencoded" \
            -H "Accept-Charset: UTF-8" \
            -H "User-Agent: jdapp;iPhone;9.4.4;14.3;network/4g;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1" \
            -H "Cookie: ${CK}" \
            --data-raw "$body" | jq .detailList | jq -c '.[]'
        }

        function QueryBeanInfo() {
            local TMP_LOG=".tmp.log"
            local DATA_LOG=".data.log"
            local DATA_FILE=".data.json"
            rm -rf $TMP_LOG $DATA_LOG $DATA_FILE
            local page lines todayStr data date dateStr amount eventMassage Name_Array Beans_Array Name LengthTmp Time Beans Income Expense defaultLength

            todayStr=$(date +%s -d "$(date "+%Y-%m-%d")")
            for ((page = 1; page <= 100; page++)); do
                ## 获取页面数据（一页20条）
                getJingBeanBalanceDetail $page >$DATA_LOG
                if [ -s $DATA_LOG ]; then
                    for ((lines = 0; lines <= 19; lines++)); do
                        date=$(cat $DATA_LOG | sed -n "$(($lines + 1)),$(($lines + 1))p" | jq -r ".date")
                        dateStr=$(date -d "${date}" +%s)
                        amount=$(cat $DATA_LOG | sed -n "$(($lines + 1)),$(($lines + 1))p" | jq -r ".amount")
                        eventMassage=$(cat $DATA_LOG | sed -n "$(($lines + 1)),$(($lines + 1))p" | jq -r ".eventMassage")
                        data="{\"date\":\"${dateStr}\",\"amount\":\"${amount}\",\"eventMassage\":\"${eventMassage}\"}"
                        ## 判断是否为今天的数据，否则跳出
                        # echo $data
                        if [[ ${dateStr} -lt ${todayStr} ]]; then
                            break 2
                        fi
                        if [[ $page == "1" ]] && [[ $lines == "0" ]]; then
                            echo "$data" | jq >>$TMP_LOG
                        else
                            echo -e "," >>$TMP_LOG
                            echo "$data" | jq >>$TMP_LOG
                        fi
                    done
                else
                    echo -e "$FAIL 查询接口请求异常，目标账号已被官方接口限制或当前网络环境异常！"
                    return
                fi
                sleep 1
            done
            if [[ ! -s $TMP_LOG ]]; then
                echo -e "未查询到今日京豆变动明细数据，快去参与活动获取吧~"
                return
            fi
            echo -e "[\n$(cat $TMP_LOG)\n]" >$TMP_LOG
            cat $TMP_LOG | jq >$DATA_FILE
            # cat $DATA_FILE

            ## 根据时间排序定义名称数组（空格临时换成了下划线）
            ## 减少使用管道出现的异常
            cat $DATA_FILE | jq .[] | jq '{eventMassage: .eventMassage}' >$TMP_LOG
            cat $TMP_LOG | jq -r '.eventMassage' >$DATA_LOG
            # cat $DATA_FILE
            Name_Array=(
                $(cat $DATA_LOG | sed "s/ /_/g" | awk '!a[$0]++')
            )
            if [[ ${#Name_Array[@]} -gt 0 ]]; then
                Income=0
                Expense=0
                echo -e "[最新时间]                         [变动渠道]                          [明细]\n"
                ## 遍历数组，打印数据
                for i in ${Name_Array[@]}; do
                    defaultLength=50
                    i=$(echo "$i" | sed "s/_/ /g")
                    Name=$(printf "%ls\n" "$i")
                    Beans_Array=$(cat $DATA_FILE | jq -c '.[]' | grep -F "\"$i\"" | jq -r .amount | tr "\n" " ")
                    Time=$(date -d @$(cat $DATA_FILE | jq -c '.[]' | grep -F "$i" | head -n 1 | jq -r .date) +"%H:%M:%S")
                    Time=$(echo $Time | sed "s/^0/ /g")
                    Beans=0
                    for i in ${Beans_Array[@]}; do
                        let Beans+=$i
                    done
                    ## 格式化名称
                    Name=$(echo "${Name}" | sed "s/（商品:.*）//g; s/订单.*使用京豆.*个/订单使用京豆/g")
                    echo "${Name}" | grep -q "参加\[.*\].*-奖励"
                    if [ $? -eq 0 ]; then
                        Name=$(echo "${Name}" | perl -pe "{s|参加\[||g; s|\].*||g;}")
                    fi
                    LengthTmp=$(StringLength $(echo "${Name}" | sed "s/ //g" | perl -pe "{s|[0-9a-zA-Z\.\=\:\_\(\)\'\"-\/\!]||g;}"))
                    ## 中文的引号在等宽字体中占1格而非2格
                    [[ $(echo "${Name}" | grep -c "“") -gt 0 ]] && let defaultLength+=$(echo "${Name}" | grep -c "“")
                    [[ $(echo "${Name}" | grep -c "”") -gt 0 ]] && let defaultLength+=$(echo "${Name}" | grep -c "”")
                    [[ $(echo "${Name}" | grep -c "‘") -gt 0 ]] && let defaultLength+=$(echo "${Name}" | grep -c "‘")
                    [[ $(echo "${Name}" | grep -c "’") -gt 0 ]] && let defaultLength+=$(echo "${Name}" | grep -c "’")
                    spacesNums=$(($(($defaultLength - ${LengthTmp} - ${#Name})) / 2))
                    for ((i = 1; i <= ${spacesNums}; i++)); do
                        Name=" ${Name}"
                    done
                    Name=$(echo "${Name}" | sed "s/“/ “/g; s/”/” /g; s/‘/ ‘/g; s/’/’ /g")
                    if [[ $Beans -gt 0 ]]; then
                        Income=$(($Income + $Beans))
                        printf "· %-12s ${BLUE}%-$(($defaultLength + ${LengthTmp}))s${PLAIN}    ${GREEN}%8s${PLAIN}\n" "$Time" "$Name" "+$Beans"
                    else
                        Expense=$(($Expense + $Beans))
                        printf "· %-12s ${BLUE}%-$(($defaultLength + ${LengthTmp}))s${PLAIN}    ${RED}%8s${PLAIN}\n" "$Time" "$Name" "-$((0 - $Beans))"
                    fi
                done
                echo -e "\n                [${BLUE}今日收入${PLAIN}] ${Income}🐶                    [${BLUE}今日支出${PLAIN}] $((0 - $Expense))🐶"
            else
                echo -e "未查询到今日京豆变动明细数据，快去参与活动获取吧~"
            fi
            rm -rf $DATA_FILE $TMP_LOG $DATA_LOG
        }

        function CheckStatus() {
            local InputContent="$1"
            local CHECK_LOG=".check.log"
            curl -s --noproxy "*" "${INTERFACE_URL}" -H "cookie: ${InputContent}" >$CHECK_LOG
            StatusCode="$(cat $CHECK_LOG | jq -r '.retcode')"
            [[ ${StatusCode} == "0" ]] && nickName="$(cat $CHECK_LOG | jq -r '.data.userInfo.baseInfo.nickname')"
            rm -rf $CHECK_LOG
        }

        local Cookie_Tmp CK nickName StatusCode
        ## 汇总
        case $# in
        1)
            for ((i = 1; i <= ${UserSum}; i++)); do
                echo -e "\n$WORKING 正在请求接口获取账号 ${BLUE}$i${PLAIN} 的今日收支数据...\n"
                nickName=""
                StatusCode=""
                Cookie_Tmp=Cookie$i
                CK=${!Cookie_Tmp}
                CheckStatus "${CK}"
                if [[ ${StatusCode} == "0" ]]; then
                    echo -e "❖ 账号$i · [${BLUE}${nickName}${PLAIN}]\n"
                    QueryBeanInfo
                else
                    echo -e "$WARN 账号$i · [${BLUE}$(echo "$CK" | perl -pe "{s|.*pt_pin=([^; ]+)(?=;?).*|\1|g;}")${PLAIN}] 无效，跳过查询..."
                fi
                echo -e "\n............................................."
                sleep 1
            done
            ;;
        2)
            echo -e "\n$WORKING 正在请求接口获取账号 ${BLUE}$2${PLAIN} 的今日收支数据...\n"
            nickName=""
            StatusCode=""
            Cookie_Tmp=Cookie$2
            CK=${!Cookie_Tmp}
            CheckStatus "${CK}"
            if [[ ${StatusCode} == "0" ]]; then
                echo -e "❖ ${BLUE}${nickName}${PLAIN}\n"
                QueryBeanInfo
            else
                echo -e "$WARN ${BLUE}$(echo "$CK" | perl -pe "{s|.*pt_pin=([^; ]+)(?=;?).*|\1|g;}")${PLAIN} 无效！"
            fi
            ;;
        esac

        echo -e "\n$COMPLETE 查询完毕\n"
        ;;

    list)
        Import_Config
        Count_UserSum
        local Tmp1 Tmp2 num pt_pin_arr pt_pin_len_add remark phone phone_len_add remark_len_add
        for ((n = 1; n <= $UserSum; n++)); do
            Tmp1=Cookie$n
            Tmp2=${!Tmp1}
            num=$(($n - 1))
            pt_pin_arr[num]=$(echo $Tmp2 | perl -pe "{s|.*pt_pin=([^; ]+)(?=;?).*|\1|g;}")
            pt_pin_len_add[num]=$(StringLength $(UrlDecode "${pt_pin_arr[num]}" | perl -pe '{s|[0-9a-zA-Z\.\=\:\_ -]||g;}'))
        done

        echo ''
        for ((i = 0; i < ${#pt_pin_arr[@]}; i++)); do
            grep -Eq "^## pt_pin=${pt_pin_arr[i]};  联系方式：.*;  上次更新：.*;  备注：.*;" $FileConfUser
            if [ $? -eq 0 ]; then
                remark=$(grep -E "^## pt_pin=${pt_pin_arr[i]};  联系方式：.*;  上次更新：.*;  备注：.*;" $FileConfUser | grep -Eo "备注：.*;" | awk -F ';' '{print$1}' | sed "s/备注：//g")

                if [[ -z ${remark} || ${remark} == "无" ]]; then
                    remark="未登记"
                fi
                phone=$(grep -E "^## pt_pin=${pt_pin_arr[i]};  联系方式：.*;  上次更新：.*;  备注：.*;" $FileConfUser | grep -Eo "联系方式：.*;" | awk -F ';' '{print$1}' | sed "s/联系方式：//g")
                if [[ -z ${phone} || ${phone} == "无" ]]; then
                    phone="未登记"
                fi
                phone_len_add=$(StringLength $(echo "${phone}" | perl -pe '{s|[0-9a-zA-Z\.\=\:\_\(\)\[\] \-]||g;}'))
                remark_len_add=$(StringLength $(echo "${remark}" | perl -pe '{s|[0-9a-zA-Z\.\=\:\_\(\)\[\] \-]||g;}'))

                printf "%-3s ${BLUE}%-$((22 + ${pt_pin_len_add[i]}))s${PLAIN} 备注：${BLUE}%-$((24 + ${remark_len_add}))s${PLAIN} 联系方式：${BLUE}%-s${PLAIN}\n" "$(($i + 1))." "$(UrlDecode "${pt_pin_arr[i]}")" "${remark}" "${phone}"
            else
                printf "%-3s ${BLUE}%-$((22 + ${pt_pin_len_add[i]}))s${PLAIN} 备注：${BLUE}未登记${PLAIN}                联系方式：${BLUE}未登记${PLAIN}\n" "$(($i + 1))." "$(UrlDecode "${pt_pin_arr[i]}")"
            fi
        done
        echo ''
        ;;
    esac
}

## 添加 Own 仓库功能
function Add_OwnRepo() {
    local RepoUrl=$1
    local RepoDir="$OwnDir/$(echo ${RepoUrl} | perl -pe "s|\.git||" | awk -F "/|:" '{print $((NF - 1)) "_" $NF}')"
    case $# in
    1)
        local RepoBranch=""
        local RepoPath=""
        ;;
    2)
        local RepoBranch=$2
        local RepoPath=""
        ;;
    3)
        local RepoBranch=$2
        local RepoPath=$(echo $3 | perl -pe '{s|\" |\"|g; s| \"|\"|g; s#\|# #g;}')
        ;;
    esac

    ## 判断传入信息格式是否正确
    function CheckFormat() {
        ## 判断仓库地址格式
        echo ${RepoUrl} | grep -Eq "http.*:"
        if [ $? -ne 0 ]; then
            echo ${RepoUrl} | grep -Eq "^git\@"
            if [ $? -ne 0 ]; then
                echo -e "\n$ERROR ${BLUE}${RepoUrl}${PLAIN} 不是一个有效的仓库地址！\n"
                exit ## 终止退出
            fi
        fi
        echo ${RepoUrl} | grep -Eq "\.git$"
        if [ $? -ne 0 ]; then
            echo -e "\n$ERROR ${BLUE}${RepoUrl}${PLAIN} 不是一个有效的仓库地址，链接必须以 ${BLUE}.git${PLAIN} 为结尾！\n"
            exit ## 终止退出
        fi

        ## 判断路径格式
        if [ ! -z ${RepoPath} ]; then
            echo ${RepoPath} | grep -Eq "[\!@#$%^&*]|\(|\)|\[|\]|\{|\}"
            if [ $? -eq 0 ]; then
                echo -e "\n$ERROR 路径 ${BLUE}${RepoPath}${PLAIN} 格式有误，不支持特殊字符！\n"
                exit ## 终止退出
            fi
        fi

        ## 判断仓库本地是否已经存在
        if [ -d $RepoDir/.git ]; then
            echo -e "\n$ERROR ${BLUE}$RepoDir${PLAIN} 目录下已存在仓库，请先删除！\n"
            exit ## 终止退出
        else
            [ -d $RepoDir ] && rm -rf $RepoDir
        fi
    }

    ## 克隆仓库
    function Clone_Repo() {
        local CurrentDir=$(pwd)
        echo -e "\n$WORKING 开始克隆仓库 ${BLUE}${RepoUrl}${PLAIN} 到 ${BLUE}$RepoDir${PLAIN} ... \n"
        if [ -z ${RepoBranch} ]; then
            git clone ${RepoUrl} $RepoDir
        else
            git clone -b ${RepoBranch} ${RepoUrl} $RepoDir
        fi
        if [ $? -ne 0 ]; then
            echo -e "\n$FAIL 仓库克隆失败，请检查信息是否正确！\n"
            exit ## 终止退出
        fi
        ## 确定分支名
        if [ -z ${RepoBranch} ]; then
            cd $RepoDir
            RepoBranch=$(git status | head -n 1 | awk -F ' ' '{print$NF}')
            cd $CurrentDir
        fi
    }

    ## 在配置文件中插入变量
    function Add_Env_Own() {
        local FormatRepoUrl FormatRepoPath Tmp1 Tmp2 Sum SumTmp
        ## 导入配置文件
        Import_Config_Not_Check

        ## 格式化特殊符号用于sed命令
        FormatRepoUrl=$(echo ${RepoUrl} | perl -pe '{s|[\.\<\>\/\[\]\!\@\#\$\%\^\&\*\(\)\-\+]|\\$&|g;}')
        FormatRepoPath=$(echo ${RepoPath} | perl -pe '{s|[\ \.\<\>\/\[\]\!\@\#\$\%\^\&\*\(\)\-\+]|\\$&|g;}')

        if [[ -z ${OwnRepoUrl1} ]]; then
            ## 没有 Own 仓库
            sed -i "s/^\(OwnRepoUrl1=\).*/\1\"${FormatRepoUrl}\"/" $FileConfUser
            local ExitStatus=$?
            sed -i "s/^\(OwnRepoBranch1=\).*/\1\"${RepoBranch}\"/" $FileConfUser
            sed -i "s/^\(OwnRepoPath1=\).*/\1\"${FormatRepoPath}\"/" $FileConfUser
        else
            ## 统计当前仓库数量
            for ((i = 1; i <= 0x64; i++)); do
                Tmp1=OwnRepoUrl$i
                Tmp2=${!Tmp1}
                [[ $Tmp2 ]] && Sum=$i || break
            done
            ## 判断编辑模式（如果只要一个仓库就改2号变量，否则追加新变量）
            if [[ $Sum -eq 1 ]]; then
                ## 有1个 Own 仓库
                sed -i "s/^\(OwnRepoUrl2=\).*/\1\"${FormatRepoUrl}\"/" $FileConfUser
                local ExitStatus=$?
                sed -i "s/^\(OwnRepoBranch2=\).*/\1\"${RepoBranch}\"/" $FileConfUser
                sed -i "s/^\(OwnRepoPath2=\).*/\1\"${FormatRepoPath}\"/" $FileConfUser
            else
                sed -i "/^\(OwnRepoUrl${Sum}\)/a \OwnRepoUrl$((${Sum} + 1))=\"${FormatRepoUrl}\"" $FileConfUser
                local ExitStatus=$?
                sed -i "/^\(OwnRepoBranch${Sum}\)/a \OwnRepoBranch$((${Sum} + 1))=\"${RepoBranch}\"" $FileConfUser
                sed -i "/^\(OwnRepoPath${Sum}\)/a \OwnRepoPath$((${Sum} + 1))=\"${FormatRepoPath}\"" $FileConfUser
            fi
        fi
        ## 判定结果
        if [[ $ExitStatus -eq 0 ]]; then
            echo -e "\n$COMPLETE 变量已添加"
        else
            echo -e "\n$FAIL 变量添加失败"
        fi
    }

    ## 统计 own 仓库数量
    function Count_OwnRepoSum() {
        ## 导入配置文件
        Import_Config_Not_Check
        if [[ -z ${OwnRepoUrl1} ]]; then
            OwnRepoSum=0
        else
            for ((i = 1; i <= 0x64; i++)); do
                local Tmp1=OwnRepoUrl$i
                local Tmp2=${!Tmp1}
                [[ $Tmp2 ]] && OwnRepoSum=$i || break
            done
        fi
    }

    ## 生成数组
    function Gen_Own_Dir_And_Path() {
        local scripts_path_num="-1"
        local repo_num Tmp1 Tmp2 Tmp3 Tmp4 Tmp5 dir

        if [[ $OwnRepoSum -ge 1 ]]; then
            for ((i = 1; i <= $OwnRepoSum; i++)); do
                repo_num=$((i - 1))
                ## 仓库地址
                Tmp1=OwnRepoUrl$i
                array_own_repo_url[$repo_num]=${!Tmp1}
                ## 仓库分支
                Tmp2=OwnRepoBranch$i
                array_own_repo_branch[$repo_num]=${!Tmp2}
                ## 仓库文件夹名（作者_仓库名）
                array_own_repo_dir[$repo_num]=$(echo ${array_own_repo_url[$repo_num]} | perl -pe "s|\.git||" | awk -F "/|:" '{print $((NF - 1)) "_" $NF}')
                ## 仓库路径
                array_own_repo_path[$repo_num]=$OwnDir/${array_own_repo_dir[$repo_num]}
                Tmp3=OwnRepoPath$i
                if [[ ${!Tmp3} ]]; then
                    for dir in ${!Tmp3}; do
                        let scripts_path_num++
                        Tmp4="${array_own_repo_dir[repo_num]}/$dir"
                        Tmp5=$(echo $Tmp4 | perl -pe "{s|//|/|g; s|/$||}") # 去掉多余的/
                        array_own_scripts_path[$scripts_path_num]="$OwnDir/$Tmp5"
                    done
                else
                    let scripts_path_num++
                    array_own_scripts_path[$scripts_path_num]="${array_own_repo_path[$repo_num]}"
                fi
            done
        fi
        if [[ ${#OwnRawFile[*]} -ge 1 ]]; then
            let scripts_path_num++
            array_own_scripts_path[$scripts_path_num]=$RawDir
        fi
    }

    ## 生成绝对路径清单
    function Gen_ListOwn() {
        local CurrentDir=$(pwd)
        ## 导入用户的定时
        local ListCrontabOwnTmp=$LogTmpDir/crontab_own.list
        Make_Dir $LogTmpDir
        [ ! -f $ListOwnScripts ] && touch $ListOwnScripts
        grep -vwf $ListOwnScripts $ListCrontabUser | grep -Eq " $TaskCmd $OwnDir"
        local ExitStatus=$?
        [[ $ExitStatus -eq 0 ]] && grep -vwf $ListOwnScripts $ListCrontabUser | grep -E " $TaskCmd $OwnDir" | perl -pe "s|.*$TaskCmd ([^\s]+)( .+\|$)|\1|" | sort -u >$ListCrontabOwnTmp
        rm -rf $LogTmpDir/own*.list
        for ((i = 0; i < ${#array_own_scripts_path[*]}; i++)); do
            cd ${array_own_scripts_path[i]}
            if [ ${array_own_scripts_path[i]} = $RawDir ]; then
                if [[ $(ls 2>/dev/null | grep -E "\.js$|\.py$|\.ts$" | grep -Ev "${RawDirUtils}" 2>/dev/null) ]]; then
                    for file in $(ls 2>/dev/null | grep -E "\.js$|\.py$|\.ts$" | grep -Ev "${RawDirUtils}"); do
                        if [ -f $file ]; then
                            echo "$RawDir/$file" >>$ListOwnScripts
                        fi
                    done
                fi
            else
                ## Own仓库脚本定时屏蔽
                if [[ -z ${OwnRepoCronShielding} ]]; then
                    local Matching=$(ls *.js 2>/dev/null)
                else
                    local ShieldTmp=$(echo ${OwnRepoCronShielding} | perl -pe '{s|^ ||g; s| $||g; s# #\|#g;}')
                    local Matching=$(ls *.js 2>/dev/null | grep -Ev ${ShieldTmp})
                fi
                if [[ $(ls *.js 2>/dev/null) ]]; then
                    ls | grep "\.js$" -q
                    if [ $? -eq 0 ]; then
                        for file in ${Matching}; do
                            if [ -f $file ]; then
                                perl -ne "print if /.*([\d\*]*[\*-\/,\d]*[\d\*] ){4}[\d\*]*[\*-\/,\d]*[\d\*]( |,|\").*\/?$file/" $file |
                                    perl -pe "s|.*(([\d\*]*[\*-\/,\d]*[\d\*] ){4}[\d\*]*[\*-\/,\d]*[\d\*])( \|,\|\").*/?$file.*|${array_own_scripts_path[i]}/$file|g" |
                                    sort -u | head -1 >>$ListOwnScripts
                            fi
                        done
                    fi
                fi
            fi
        done
        [ ! -f $ListOwnScripts ] && touch $ListOwnScripts
        ## 汇总去重
        echo "$(sort -u $ListOwnScripts)" >$ListOwnScripts
        ## 导入用户的定时
        cat $ListOwnScripts >$ListOwnAll
        [[ $ExitStatus -eq 0 ]] && cat $ListCrontabOwnTmp >>$ListOwnAll

        if [[ $ExitStatus -eq 0 ]]; then
            grep -E " $TaskCmd $OwnDir" $ListCrontabUser | grep -Ev "$(cat $ListCrontabOwnTmp)" | perl -pe "s|.*$TaskCmd ([^\s]+)( .+\|$)|\1|" | sort -u >$ListOwnUser
            cat $ListCrontabOwnTmp >>$ListOwnUser
        else
            grep -E " $TaskCmd $OwnDir" $ListCrontabUser | perl -pe "s|.*$TaskCmd ([^\s]+)( .+\|$)|\1|" | sort -u >$ListOwnUser
        fi
        [ -f $ListCrontabOwnTmp ] && rm -f $ListCrontabOwnTmp
        cd $CurrentDir
    }

    ## 检测cron的差异
    function Diff_Own_Cron() {
        if [ -s $ListOwnUser ] && [ -s $ListOwnAll ]; then
            diff $ListOwnAll $ListOwnUser | grep "<" | awk '{print $2}' >$ListOwnAdd
            diff $ListOwnAll $ListOwnUser | grep ">" | awk '{print $2}' >$ListOwnDrop
        elif [ ! -s $ListOwnUser ] && [ -s $ListOwnAll ]; then
            cp -f $ListOwnAll $ListOwnAdd
        elif [ -s $ListOwnUser ] && [ ! -s $ListOwnAll ]; then
            cp -f $ListOwnUser $ListOwnDrop
        fi
        ## 比对清单
        grep -v "$RawDir/" $ListOwnAdd >$ListOwnRepoAdd
    }

    ## 添加定时
    function Add_Cron_Own() {
        local ListCrontabOwnTmp=$LogTmpDir/crontab_own.list
        [ -f $ListCrontabOwnTmp ] && rm -f $ListCrontabOwnTmp
        if [ -s $ListOwnRepoAdd ]; then
            if [[ ${AutoAddOwnRepoCron} == true ]]; then
                echo ''
                if [ -s $ListOwnRepoAdd ] && [ -s $ListCrontabUser ]; then
                    local Detail=$(cat $ListOwnRepoAdd)
                    for FilePath in $Detail; do
                        local FileName=$(echo ${FilePath} | awk -F "/" '{print $NF}')
                        if [ -f ${FilePath} ]; then
                            local Cron=$(perl -ne "print if /.*([\d\*]*[\*-\/,\d]*[\d\*] ){4}[\d\*]*[\*-\/,\d]*[\d\*]( |,|\").*${FileName}/" ${FilePath} | perl -pe "{s|[^\d\*]*(([\d\*]*[\*-\/,\d]*[\d\*] ){4,5}[\d\*]*[\*-\/,\d]*[\d\*])( \|,\|\").*/?${FileName}.*|\1 $TaskCmd ${FilePath}|g;s|  | |g; s|^[^ ]+ (([^ ]+ ){5}$TaskCmd ${FilePath})|\1|;}" | sort -u | head -1)
                            ## 新增定时任务自动禁用
                            if [[ ${DisableNewOwnRepoCron} == true ]]; then
                                echo "${Cron}" | perl -pe '{s|^|# |}' >>$ListCrontabOwnTmp
                            else
                                grep -E " $TaskCmd $OwnDir/" $ListCrontabUser | grep -Ev "^#" | awk -F '/' '{print$NF}' | grep "${FileName}" -q
                                if [ $? -eq 0 ]; then
                                    ## 重复定时任务自动禁用
                                    if [[ ${DisableDuplicateOwnRepoCron} == true ]]; then
                                        echo "${Cron}" | perl -pe '{s|^|# |}' >>$ListCrontabOwnTmp
                                    else
                                        echo "${Cron}" >>$ListCrontabOwnTmp
                                    fi
                                else
                                    echo "${Cron}" >>$ListCrontabOwnTmp
                                fi
                            fi
                        fi
                    done
                    perl -i -pe "s|(# 自用own任务结束.+)|$(cat $ListCrontabOwnTmp)\n\1|" $ListCrontabUser
                    ExitStatus=$?
                fi
                ## 判定结果
                if [[ $ExitStatus -eq 0 ]]; then
                    ## 打印定时
                    cat $ListCrontabOwnTmp | perl -pe "{s|^|${GREEN}+${PLAIN} |g}"
                    echo -e "\n$COMPLETE 定时任务已添加"
                else
                    echo -e "\n$FAIL 定时任务添加失败"
                fi
                [ -f $ListCrontabOwnTmp ] && rm -f $ListCrontabOwnTmp
            else
                echo -e "\n$WARN 已设置为不添加定时任务，跳过添加"
            fi
        else
            echo -e "\n$WARN 没有检测到新增脚本，跳过添加定时任务"
        fi
    }

    ## 检测格式
    CheckFormat
    ## 克隆仓库
    Clone_Repo
    ## 添加变量
    Add_Env_Own
    ## 统计信息
    Count_OwnRepoSum
    ## 生成相关清单
    Gen_Own_Dir_And_Path
    Gen_ListOwn
    ## 比较定时任务
    Diff_Own_Cron
    ## 添加定时
    Add_Cron_Own
    echo ''
}

## 添加 Raw 脚本功能
function Add_RawFile() {
    local RawFileName FormatUrl ReformatUrl RepoBranch RepoUrl RepoPlatformUrl DownloadUrl FormatDownloadUrl RawFilePath FormatRawFilePath
    local InputContent=$1
    ## 定义脚本名称
    RawFileName=$(echo ${InputContent} | awk -F "/" '{print $NF}')

    Make_Dir $RawDir
    ## 格式检测
    echo ${InputContent} | grep -Eq "http.*:"
    if [ $? -ne 0 ]; then
        echo -e "\n$ERROR ${BLUE}$2${PLAIN} 不是一个有效的 URL 链接地址！\n"
        exit ## 终止退出
    fi
    ## 判断脚本来源（ 托管仓库 or 普通网站 ）
    echo ${InputContent} | grep -Eq "github|gitee|gitlab"
    if [ $? -eq 0 ]; then
        ## 纠正链接地址（将传入的链接地址转换为对应代码托管仓库的raw原始文件链接地址）
        echo ${InputContent} | grep "\.com\/.*\/blob\/.*" -q
        if [ $? -eq 0 ]; then
            case $(echo ${InputContent} | grep -Eo "github|gitee|gitlab") in
            github)
                echo ${InputContent} | grep "github\.com\/.*\/blob\/.*" -q
                if [ $? -eq 0 ]; then
                    DownloadUrl=$(echo ${InputContent} | perl -pe "{s|github\.com/|raw\.githubusercontent\.com/|g; s|\/blob\/|\/|g}")
                else
                    DownloadUrl=${InputContent}
                fi
                ;;
            gitee)
                echo ${InputContent} | grep "gitee\.com\/.*\/blob\/.*" -q
                if [ $? -eq 0 ]; then
                    DownloadUrl=$(echo ${InputContent} | sed "s/\/blob\//\/raw\//g")
                else
                    DownloadUrl=${InputContent}
                fi
                ;;
            gitlab)
                echo ${InputContent} | grep "gitlab\.com\/.*\/blob\/.*" -q
                if [ $? -eq 0 ]; then
                    DownloadUrl=$(echo ${InputContent} | sed "s/\/blob\//\/raw\//g")
                else
                    DownloadUrl=${InputContent}
                fi
                ;;
            esac
        else
            ## 原始链接不做任何处理
            DownloadUrl=${InputContent}
        fi

        echo ${DownloadUrl} | grep -E "git.*\.io/" -q
        if [ $? -eq 0 ]; then
            echo -e "\n$WORKING 开始从网站 ${BLUE}$(echo ${InputContent} | perl -pe "{s|\/${RawFileName}||g;}")${PLAIN} 下载 ${BLUE}${RawFileName}${PLAIN} 脚本..."
        else
            ## 处理仓库地址
            FormatUrl=$(echo ${DownloadUrl} | perl -pe "{s|${RawFileName}||g;}" | awk -F '.com' '{print$NF}' | sed 's/.$//')
            ## 判断仓库平台
            case $(echo ${DownloadUrl} | grep -Eo "github|gitee|gitlab") in
            github)
                RepoPlatformUrl="https://github.com"
                RepoBranch=$(echo $FormatUrl | awk -F '/' '{print$4}')
                ReformatUrl=$(echo $FormatUrl | sed "s|$RepoBranch|tree/$RepoBranch|g")
                ## 定义脚本来源仓库地址链接
                RepoUrl="${RepoPlatformUrl}${ReformatUrl}"
                ;;
            gitee)
                RepoPlatformUrl="https://gitee.com"
                ReformatUrl=$(echo $FormatUrl | sed "s|/raw/|/tree/|g")
                ## 定义脚本来源仓库地址链接
                RepoUrl="${RepoPlatformUrl}${ReformatUrl}"
                ;;
            gitlab)
                ## 定义脚本来源仓库地址链接
                RepoUrl=${DownloadUrl}
                ;;
            esac
            ## 拉取脚本
            echo -e "\n$WORKING 开始从仓库 ${BLUE}${RepoUrl}${PLAIN} 下载 ${BLUE}${RawFileName}${PLAIN} 脚本..."
        fi
        wget -q --no-check-certificate -O "$RawDir/${RawFileName}.new" ${DownloadUrl} -T 20
    else
        ## 拉取脚本
        DownloadUrl="${InputContent}"
        echo -e "\n$WORKING 开始从网站 ${BLUE}$(echo ${InputContent} | perl -pe "{s|\/${RawFileName}||g;}")${PLAIN} 下载 ${BLUE}${RawFileName}${PLAIN} 脚本..."
        wget -q --no-check-certificate -O "$RawDir/${RawFileName}.new" ${DownloadUrl} -T 20
    fi

    ## 判断下载结果
    if [ $? -eq 0 ]; then
        mv -f "$RawDir/${RawFileName}.new" "$RawDir/${RawFileName}"
        echo -e "\n$COMPLETE ${RawFileName} 下载完毕，脚本保存路径：$RawDir/${RawFileName}"

        ## 定义脚本路径
        RawFilePath="$RawDir/${RawFileName}"
        ## 判断表达式所在行
        local Tmp1=$(grep -E "^cron|script-path=|tag=|[0-9] \* \*|^[0-9]\*.*${RawFileName}" ${RawFilePath} | grep -Ev "^https\?:|^function " | head -1 | perl -pe '{s|[a-zA-Z\"\.\=\:\:\_]||g;}')
        ## 判断开头
        local Tmp2=$(echo "${Tmp1}" | awk -F '[0-9]' '{print$1}' | sed 's/\*/\\*/g; s/\./\\./g')
        ## 判断表达式的第一个数字（分钟）
        local Tmp3=$(echo "${Tmp1}" | grep -Eo "[0-9]" | head -1)
        ## 判定开头是否为空值
        if [[ $(echo "${Tmp2}" | perl -pe '{s| ||g;}') = "" ]]; then
            local cron=$(echo "${Tmp1}" | awk '{if($1~/^[0-9]{1,2}/) print $1,$2,$3,$4,$5; else if ($1~/^[*]/) print $2,$3,$4,$5,$6}')
        else
            local cron=$(echo "${Tmp1}" | perl -pe "{s|${Tmp2}${Tmp3}|${Tmp3}|g;}" | awk '{if($1~/^[0-9]{1,2}/) print $1,$2,$3,$4,$5; else if ($1~/^[*]/) print $2,$3,$4,$5,$6}')
        fi
        ## 如果未检测出定时就随机一个每天执行1次的定时
        echo "${Tmp1}" | grep "[0-9]" -q
        if [ $? -eq 0 ]; then
            local FullContent="$(echo "$cron $TaskCmd ${RawFilePath}" | sort -u | head -1)"
        else
            local FullContent="$(echo "$((${RANDOM} % 60)) $((${RANDOM} % 24)) * * * $TaskCmd ${RawFilePath}" | sort -u | head -1)"
        fi

        ## 导入配置文件
        Import_Config_Not_Check

        ## 添加定时任务
        if [[ ${AutoAddOwnRawCron} == true ]]; then
            FormatRawFilePath=$(echo ${RawFilePath} | perl -pe '{s|[\.\<\>\/\[\]\!\@\#\$\%\^\&\*\(\)\-\+]|\\$&|g;}')
            if [ $(grep -c " $TaskCmd ${FormatRawFilePath}" $ListCrontabUser) -eq 0 ]; then
                perl -i -pe "s|(# 自用own任务结束.+)|${FullContent}\n\1|" $ListCrontabUser
                ## 判断添加结果
                if [ $? -eq 0 ]; then
                    ## 写进清单
                    echo "${RawFilePath}" >>$ListOwnAll
                    echo "${RawFilePath}" >>$ListOwnScripts
                    ## 打印定时
                    echo -e "\n${GREEN}+${PLAIN} ${FullContent}"
                    echo -e "\n$COMPLETE 定时任务已添加"
                else
                    echo -e "\n$FAIL 无法添加定时任务，可能遇到了一些问题~"
                fi
            else
                echo -e "\n$WARN 该脚本定时任务已存在，跳过添加"
            fi
        else
            echo -e "\n$WARN 已设置为不添加定时任务，跳过添加"
        fi

        ## 添加变量
        for ((i = 0; i < ${#OwnRawFile[*]}; i++)); do
            if [[ ${OwnRawFile[i]} == ${DownloadUrl} ]]; then
                echo -e "\n$WARN 检测到该脚本已存在于 ${BLUE}OwnRawFile${PLAIN} 变量中，跳过添加"
                echo -e "\n${GREEN}Tips：${PLAIN}请尽量不要尝试重复添加以免产生未知问题！\n"
                exit ## 终止退出
            fi
        done
        FormatDownloadUrl=$(echo ${DownloadUrl} | perl -pe '{s|[\.\<\>\/\[\]\!\@\#\$\%\^\&\*\(\)\-\+]|\\$&|g;}')
        sed -i "/^OwnRawFile=(/a\  ${FormatDownloadUrl}" $FileConfUser
        if [ $? -eq 0 ]; then
            echo -e "\n$COMPLETE 变量已添加\n"
        else
            echo -e "\n$FAIL 未能添加变量，可能遇到了一些问题~\n"
        fi

    else
        [ -f "$RawDir/${RawFileName}.new" ] && rm -rf "$RawDir/${RawFileName}.new"
        echo -e "\n$FAIL 脚本 ${RawFileName} 下载失败，请检查网络连通性并对目标 URL 地址是否正确进行验证！\n"
        exit ## 终止退出
    fi
}

## 管理全局环境变量功能
function Manage_Env() {
    local Variable Value Remarks FullContent Input1 Input2 Keys

    ## 启用与禁用
    function ControlEnv() {
        local VariableTmp Mod OldContent NewContent InputA InputB
        case $# in
        1)
            VariableTmp="$1"
            ;;
        2)
            Mod="$1"
            VariableTmp="$2"
            ;;
        *)
            Output_Command_Error 1 ## 命令错误
            exit                   ## 终止退出
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
                    read -p "$(echo -e "\n${BOLD}└ 检测到该变量已禁用，是否启用? [Y/n] ${PLAIN}")" InputA
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
                        echo -e "\n${YELLOW}----- 输入错误 -----${PLAIN}"
                        ;;
                    esac
                done
            else
                while true; do
                    read -p "$(echo -e "\n${BOLD}└ 检测到该变量已启用，是否禁用? [Y/n] ${PLAIN}")" InputB
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
                        echo -e "\n${YELLOW}----- 输入错误 -----${PLAIN}"
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
                    echo -e "\n$COMPLETE 该环境变量已经禁用，不执行任何操作\n"
                    exit 1 ## 终止退出
                    ;;
                *)
                    Output_Command_Error 1 ## 命令错误
                    exit                   ## 终止退出
                    ;;
                esac
            else
                case ${Mod} in
                enable)
                    echo -e "\n$COMPLETE 该环境变量已经启用，不执行任何操作\n"
                    exit 1 ## 终止退出
                    ;;
                disable)
                    sed -i "s/.*export ${VariableTmp}=/# export ${VariableTmp}=/g" $FileConfUser
                    ;;
                *)
                    Output_Command_Error 1 ## 命令错误
                    exit                   ## 终止退出
                    ;;
                esac
            fi
            ;;
        esac

        ## 前后对比
        NewContent=$(grep ".*export ${VariableTmp}=" $FileConfUser | head -1)
        echo -e "\n${RED}-${PLAIN} \033[41;37m${OldContent}${PLAIN}\n${GREEN}+${PLAIN} \033[42;30m${NewContent}${PLAIN}"
        ## 结果判定
        if [[ ${OldContent} = ${NewContent} ]]; then
            echo -e "\n$FAIL 未能修改环境变量，可能遇到了一些问题~\n"
        else
            case ${Mod} in
            enable)
                echo -e "\n$COMPLETE 环境变量已启用\n"
                ;;
            disable)
                echo -e "\n$COMPLETE 环境变量已禁用\n"
                ;;
            esac
        fi
    }

    ## 添加
    function AddEnv() {
        local VariableTmp="$1"
        local ValueTmp=$(echo "$2" | perl -pe '{s|[\.\<\>\/\[\]\!\@\#\$\%\^\&\*\(\)\-\+]|\\$&|g;}')
        case $# in
        2)
            local FullContent="export ${Variable}=\"${Value}\""
            ;;
        3)
            local RemarksTmp="$3"
            local FullContent="export ${Variable}=\"${Value}\" # ${RemarksTmp}"
            ;;
        esac
        grep "# 可在下方编写您需要用到的额外环境变量" $FileConfUser -q
        ## 插入内容
        if [ $? -eq 0 ]; then
            perl -i -pe "s|(# 可在下方编写您需要用到的额外环境变量.+\n)|\1\n${FullContent}|" $FileConfUser
        else
            sed -i "9 i ${FullContent}" $FileConfUser
        fi
        echo -e "\n${GREEN}+${PLAIN} \033[42;30m${FullContent}${PLAIN}"
        echo -e "\n$COMPLETE 环境变量已添加\n"
    }

    ## 修改
    function ModifyEnv() {
        local VariableTmp="$1"
        local OldContent NewContent Remarks InputA InputB InputC
        OldContent=$(grep ".*export ${VariableTmp}=" $FileConfUser | head -1)
        Remarks=$(grep ".*export ${VariableTmp}=" $FileConfUser | head -n 1 | awk -F "[\"\']" '{print$NF}')
        case $# in
        1)
            read -p "$(echo -e "\n${BOLD}└ 请输入环境变量 ${BLUE}${VariableTmp}${PLAIN} ${BOLD}新的值：${PLAIN}")" InputA
            local ValueTmp=$(echo "${InputA}" | perl -pe '{s|[\.\<\>\/\[\]\!\@\#\$\%\^\&\*\(\)\-\+]|\\$&|g;}')
            ## 判断变量备注内容
            if [[ ${Remarks} != "" ]]; then
                while true; do
                    read -p "$(echo -e "\n${BOLD}└ 检测到该变量存在备注内容，是否修改? [Y/n] ${PLAIN}")" InputB
                    [ -z ${InputB} ] && InputB=Y
                    case ${InputB} in
                    [Yy] | [Yy][Ee][Ss])
                        read -p "$(echo -e "\n${BOLD}└ 请输入环境变量 ${BLUE}${Variable}${PLAIN} ${BOLD}新的备注内容：${PLAIN}")" InputC
                        Remarks=" # ${InputC}"
                        break
                        ;;
                    [Nn] | [Nn][Oo])
                        break
                        ;;
                    *)
                        echo -e "\n${YELLOW}----- 输入错误 -----${PLAIN}"
                        ;;
                    esac
                done
            fi
            ;;
        2)
            local ValueTmp=$(echo "$2" | perl -pe '{s|[\.\<\>\/\[\]\!\@\#\$\%\^\&\*\(\)\-\+]|\\$&|g;}')
            ;;
        3)
            local ValueTmp=$(echo "$2" | perl -pe '{s|[\.\<\>\/\[\]\!\@\#\$\%\^\&\*\(\)\-\+]|\\$&|g;}')
            Remarks=" # $3"
            ;;
        esac
        ## 修改
        sed -i "s/\(export ${VariableTmp}=\).*/\1\"${ValueTmp}\"${Remarks}/" $FileConfUser
        ## 前后对比
        NewContent=$(grep ".*export ${VariableTmp}=" $FileConfUser | head -1)
        echo -e "\n${RED}-${PLAIN} \033[41;37m${OldContent}${PLAIN}\n${GREEN}+${PLAIN} \033[42;30m${NewContent}${PLAIN}"
        ## 结果判定
        grep ".*export ${VariableTmp}=\"${ValueTmp}\"${Remarks}" -q $FileConfUser
        local ExitStatus=$?
        if [[ $ExitStatus -eq 0 ]]; then
            echo -e "\n$COMPLETE 环境变量修改完毕\n"
        else
            echo -e "\n$FAIL 未能修改环境变量，可能遇到了一些问题~\n"
        fi
    }

    case $1 in

    ## 新增变量
    add)
        case $# in
        1)
            read -p "$(echo -e "\n${BOLD}└ 请输入需要添加的环境变量名称：${PLAIN}")" Variable
            ## 检测是否已存在该变量
            grep ".*export ${Variable}=" -q $FileConfUser
            if [ $? -eq 0 ]; then
                echo -e "\n${BLUE}检测到已存在该环境变量：${PLAIN}\n$(grep -n ".*export ${Variable}=" $FileConfUser | perl -pe '{s|^|第|g; s|:|行：|g;}')"
                while true; do
                    read -p "$(echo -e "\n${BOLD}└ 是否继续修改? [Y/n] ${PLAIN}")" Input1
                    [ -z ${Input1} ] && Input1=Y
                    case ${Input1} in
                    [Yy] | [Yy][Ee][Ss])
                        ModifyEnv "${Variable}"
                        break
                        ;;
                    [Nn] | [Nn][Oo])
                        echo -e "\n$COMPLETE 结束，未做任何更改\n"
                        break
                        ;;
                    *)
                        echo -e "\n${YELLOW}----- 输入错误 -----${PLAIN}"
                        ;;
                    esac
                done
            else
                read -p "$(echo -e "\n${BOLD}└ 请输入环境变量 ${BLUE}${Variable}${PLAIN} ${BOLD}的值：${PLAIN}")" Value
                ## 插入备注
                while true; do
                    read -p "$(echo -e "\n${BOLD}└ 是否添加备注? [Y/n] ${PLAIN}")" Input2
                    [ -z ${Input2} ] && Input2=Y
                    case ${Input2} in
                    [Yy] | [Yy][Ee][Ss])
                        read -p "$(echo -e "\n${BOLD}└ 请输入环境变量 ${BLUE}${Variable}${PLAIN} ${BOLD}的备注内容：${PLAIN}")" Remarks
                        AddEnv "${Variable}" "${Value}" "${Remarks}"
                        break
                        ;;
                    [Nn] | [Nn][Oo])
                        AddEnv "${Variable}" "${Value}"
                        break
                        ;;
                    *)
                        echo -e "\n${YELLOW}----- 输入错误 -----${PLAIN}"
                        ;;
                    esac
                done
            fi
            ;;
        3 | 4)
            Variable=$2
            Value=$3
            ## 检测是否已存在该变量
            grep ".*export ${Variable}=" -q $FileConfUser
            if [ $? -eq 0 ]; then
                echo -e "\n${BLUE}检测到已存在该环境变量：${PLAIN}\n$(grep -n ".*export ${Variable}=" $FileConfUser | perl -pe '{s|^|第|g; s|:|行：|g;}')"
                echo -e "\n$ERROR 环境变量 ${BLUE}${Variable}${PLAIN} 已经存在，请重新确认！"
            else
                case $# in
                3)
                    AddEnv "${Variable}" "${Value}" "添加时间：$(date "+%Y-%m-%d %T")"
                    ;;
                4)
                    AddEnv "${Variable}" "${Value}" "$4"
                    ;;
                esac
            fi
            ;;
        esac
        ;;

    ## 删除变量
    del)
        case $# in
        1)
            read -p "$(echo -e "\n${BOLD}└ 请输入需要删除的环境变量名称：${PLAIN}")" Variable
            VariableNums=$(grep -c ".*export ${Variable}=" $FileConfUser | head -n 1)
            local VariableTmp=$(grep -n ".*export ${Variable}=" $FileConfUser | perl -pe '{s|^|第|g; s|:|行: |g;}')
            if [[ ${VariableNums} -ne "0" ]]; then
                if [[ ${VariableNums} -gt "1" ]]; then
                    echo -e "\n${BLUE}检测到多个环境变量：${PLAIN}\n${VariableTmp}"
                elif [[ ${VariableNums} -eq "1" ]]; then
                    echo -e "\n${BLUE}检测到环境变量：${PLAIN}\n${VariableTmp}"
                fi
                while true; do
                    read -p "$(echo -e "\n${BOLD}└ 是否确认删除? [Y/n] ${PLAIN}")" Input1
                    [ -z ${Input1} ] && Input1=Y
                    case ${Input1} in
                    [Yy] | [Yy][Ee][Ss])
                        FullContent="$(grep ".*export ${Variable}=" $FileConfUser)"
                        sed -i "/export ${Variable}=/d" $FileConfUser
                        if [[ ${VariableNums} -gt "1" ]]; then
                            echo -e "\n$(echo -e "${FullContent}" | perl -pe '{s|^|\033[41;37m|g; s|$|\033[0m|g;}' | sed '$d')"
                        elif [[ ${VariableNums} -eq "1" ]]; then
                            echo -e "\n${RED}-${PLAIN} \033[41;37m${FullContent}${PLAIN}"
                        fi
                        echo -e "\n$COMPLETE 环境变量已删除\n"
                        break
                        ;;
                    [Nn] | [Nn][Oo])
                        echo -e "\n$COMPLETE 结束，未做任何更改\n"
                        break
                        ;;
                    *)
                        echo -e "\n${YELLOW}----- 输入错误 -----${PLAIN}"
                        ;;
                    esac
                done
            else
                echo -e "\n$ERROR 在配置文件中未检测到 ${BLUE}${Variable}${PLAIN} 环境变量，请重新确认！\n"
            fi
            ;;
        2)
            Variable=$2
            ## 检测是否已存在该变量
            VariableNums=$(grep -c ".*export ${Variable}=" $FileConfUser | head -n 1)
            if [[ ${VariableNums} -ne "0" ]]; then
                FullContent="$(grep ".*export ${Variable}=" $FileConfUser)"
                sed -i "/export ${Variable}=/d" $FileConfUser
                if [[ ${VariableNums} -gt "1" ]]; then
                    echo -e "\n$(echo -e "${FullContent}" | perl -pe '{s|^|\033[41;37m|g; s|$|\033[0m|g;}' | sed '$d')"
                elif [[ ${VariableNums} -eq "1" ]]; then
                    echo -e "\n${RED}-${PLAIN} \033[41;37m${FullContent}${PLAIN}"
                fi
                echo -e "\n$COMPLETE 环境变量 ${BLUE}${Variable}${PLAIN} 已删除\n"
            else
                echo -e "\n$ERROR 在配置文件中未检测到 ${BLUE}${Variable}${PLAIN} 环境变量，请重新确认！\n"
            fi
            ;;
        esac
        ;;

    ## 修改变量
    edit)
        case $# in
        1)
            read -p "$(echo -e "\n${BOLD}└ 请输入需要修改的环境变量名称：${PLAIN}")" Variable
            ## 检测是否存在该变量
            grep ".*export.*=" $FileConfUser | grep ".*export ${Variable}=" -q
            if [ $? -eq 0 ]; then
                echo -e "\n${BLUE}当前环境变量：${PLAIN}\n$(grep -n ".*export ${Variable}=" $FileConfUser | perl -pe '{s|^|第|g; s|:|行：|g;}')\n"
                echo -e '1)  启用或禁用'
                echo -e '2)  修改变量的值'
                while true; do
                    read -p "$(echo -e "\n${BOLD}└ 请选择操作模式 [ 1-2 ]：${PLAIN}")" Input1
                    case ${Input1} in
                    1)
                        ControlEnv "${Variable}"
                        break
                        ;;
                    2)
                        ModifyEnv "${Variable}"
                        break
                        ;;
                    esac
                    echo -e "\n$ERROR 输入错误！"
                done
            else
                echo -e "\n$ERROR 在配置文件中未检测到 ${BLUE}${Variable}${PLAIN} 环境变量，请重新确认！\n"
            fi
            ;;
        3 | 4)
            case $2 in
            enable | disable)
                Variable=$3
                if [ $ExitStatus -eq 0 ]; then
                    ControlEnv "$2" "${Variable}"
                else
                    echo -e "\n$ERROR 在配置文件中未检测到 ${BLUE}${Variable}${PLAIN} 环境变量，请重新确认！\n"
                fi
                ;;
            *)
                Variable=$2
                Value=$3
                grep ".*export.*=" $FileConfUser | grep ".*export ${Variable}=" -q
                local ExitStatus=$?
                case $# in
                3)
                    if [ $ExitStatus -eq 0 ]; then
                        ModifyEnv "${Variable}" "${Value}"
                    else
                        echo -e "\n$WARN 由于未检测到该环境变量因此将自动添加"
                        AddEnv "${Variable}" "${Value}" "添加时间：$(date "+%Y-%m-%d %T")"
                    fi
                    ;;
                4)
                    if [ $ExitStatus -eq 0 ]; then
                        ModifyEnv "${Variable}" "${Value}" "$4"
                    else
                        echo -e "\n$WARN 由于未检测到该环境变量因此将自动添加"
                        AddEnv "${Variable}" "${Value}" "添加时间：$(date "+%Y-%m-%d %T")"
                    fi
                    ;;
                esac
                ;;
            esac
            ;;
        esac
        ;;

    ## 查询变量
    search)
        case $# in
        1)
            read -p "$(echo -e "\n${BOLD}└ 请输入需要查询的关键词：${PLAIN}")" Keys
            ;;
        2)
            Keys=$2
            ;;
        esac
        ## 检测搜索结果是否为空
        grep ".*export.*=" $FileConfUser | grep "${Keys}" -q
        local ExitStatus=$?
        if [[ $ExitStatus -eq 0 ]]; then
            echo -e "\n${BLUE}检测到的环境变量：${PLAIN}"
            grep -n ".*export.*=" $FileConfUser | grep "${Keys}" | perl -pe "{s|^|第|g; s|:|行：|g; s|${Keys}|${RED}${Keys}${PLAIN}|g;}"
            echo -e "\n$COMPLETE 查询完毕\n"
        else
            echo -e "\n$ERROR 未查询到包含 ${BLUE}${Keys}${PLAIN} 内容的相关环境变量！\n"
            exit 1
        fi
        ;;
    esac
}

## 自定义推送通知功能
function SendNotify() {
    Import_Config_Not_Check
    Notify "$1" "$2"
}

## 切换分支功能
function SwitchBranch() {
    local CurrentBranch=$(git status | head -n 1 | awk -F ' ' '{print$NF}')
    if [[ ${CurrentBranch} == "master" ]]; then
        echo ''
        git reset --hard
        git checkout dev
        echo -e "\n$COMPLETE 已为您切换至开发分支，感谢参与测试\n"
    elif [[ ${CurrentBranch} == "dev" ]]; then
        echo ''
        git reset --hard
        git checkout master
        echo -e "\n$COMPLETE 已切换回用户分支\n"
    fi
}

## 删除日志功能
function Remove_LogFiles() {
    local LogFileList LogDate DiffTime Stmp DateDelLog LineEndGitPull LineEndBotRun RmDays
    case $# in
    0)
        Import_Config_Not_Check
        RmDays=${RmLogDaysAgo}
        ;;
    1)
        RmDays=$1
        ;;
    esac
    function Rm_JsLog() {
        LogFileList=$(ls -l $LogDir/*/*.log 2>/dev/null | awk '{print $9}' | grep -v "log/bot")
        for log in ${LogFileList}; do
            ## 文件名比文件属性获得的日期要可靠
            LogDate=$(echo ${log} | awk -F '/' '{print $NF}' | grep -Eo "20[2-9][0-9]-[0-1][0-9]-[0-3][0-9]")
            [[ -z ${LogDate} ]] && continue
            DiffTime=$(($(date +%s) - $(date +%s -d "${LogDate}")))
            [ ${DiffTime} -gt $((${RmDays} * 86400)) ] && rm -vf ${log}
        done
    }
    ## 删除 update 的运行日志
    function Rm_UpdateLog() {
        if [ -f $LogDir/update.log ]; then
            Stmp=$(($(date "+%s") - 86400 * ${RmDays}))
            DateDelLog=$(date -d "@${Stmp}" "+%Y-%m-%d")
            LineEndGitPull=$(($(cat $LogDir/update.log | grep -n "${DateDelLog}" | head -1 | awk -F ":" '{print $1}') - 3))
            [ ${LineEndGitPull} -gt 0 ] && perl -i -ne "{print unless 1 .. ${LineEndGitPull} }" $LogDir/update.log
        fi
    }
    ## 删除 Bot 的运行日志
    function Rm_BotLog() {
        if [ -f $BotLogDir/run.log ]; then
            Stmp=$(($(date "+%s") - 86400 * ${RmDays}))
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
    ## 汇总
    if [ -n "${RmDays}" ]; then
        echo -e "\n$WORKING 开始检索并删除超过 ${BLUE}${RmDays}${PLAIN} 天的日志文件...\n"
        Rm_JsLog
        Rm_UpdateLog
        Rm_BotLog
        Rm_EmptyDir
        [ -f $RootDir/core ] && rm -rf $RootDir/core
        echo -e "\n$COMPLETE 运行结束\n"
    fi
}

## 进程监控功能
function Process_Monitor() {
    local MemoryTotal MemoryUsed MemoryFree MemoryAvailable MemoryUsage CPUUsage MemoryUsedNew MemoryAvailableNew MemoryUsageNew LogFilesSpace
    MemoryTotal=$(free -m | grep Mem | awk -F ' ' '{print$2}')
    MemoryUsed=$(free -m | grep Mem | awk -F ' ' '{print$3}')
    MemoryFree=$(free -m | grep Mem | awk -F ' ' '{print$4}')
    MemoryAvailable=$(free -m | grep Mem | awk -F ' ' '{print$7}')
    MemoryUsage=$(awk 'BEGIN{printf "%.1f%\n",('$MemoryUsed'/'$MemoryTotal')*100}')
    CPUUsage=$(busybox top -n 1 | grep CPU | head -1 | awk -F ' ' '{print$2}')
    ConfigSpaceUsage=$(du -sm $ConfigDir | awk -F ' ' '{print$1}')
    LogFilesSpaceUsage=$(du -sm $LogDir | awk -F ' ' '{print$1}')
    ScriptsRepoSpaceUsage=$(du -sm $ScriptsDir | awk -F ' ' '{print$1}')
    OwnReposSpaceUsage=$(du -sm $OwnDir | awk -F ' ' '{print$1}')
    ReposSpaceUsage=$((${ScriptsRepoSpaceUsage} + ${OwnReposSpaceUsage}))
    echo -e "\n❖  处理器使用率：${YELLOW}${CPUUsage}${PLAIN}   内存使用率：${YELLOW}${MemoryUsage}${PLAIN}   可用内存：${YELLOW}${MemoryAvailable}MB${PLAIN}   空闲内存：${YELLOW}${MemoryFree}MB${PLAIN}   \n\n❖  配置文件占用空间：${YELLOW}${ConfigSpaceUsage}MB${PLAIN}    日志占用空间：${YELLOW}${LogFilesSpaceUsage}MB${PLAIN}    脚本占用空间：${YELLOW}${ReposSpaceUsage}MB${PLAIN}"
    ## 检测占用过高后释放内存
    if [[ $(echo ${MemoryUsage} | awk -F '.' '{print$1}') -gt "89" ]]; then
        sync >/dev/null 2>&1
        echo 3 >/proc/sys/vm/drop_caches >/dev/null 2>&1
        MemoryUsedNew=$(free -m | grep Mem | awk -F ' ' '{print$3}')
        MemoryAvailableNew=$(free -m | grep Mem | awk -F ' ' '{print$4}')
        MemoryUsageNew=$(awk 'BEGIN{printf "%.1f%%\n",('$MemoryUsedNew'/'$MemoryTotal')*100}')
        echo -e "\n$WORKING 检测到内存占用过高，开始尝试释放内存..."
        echo -e "${BLUE}[释放后]${PLAIN}  内存占用：${YELLOW}${MemoryUsageNew}${PLAIN}   可用内存：${YELLOW}${MemoryAvailableNew}MB${PLAIN}"
    fi
    ## 列出进程
    echo -e "\n${BLUE}[运行时长]  [CPU]    [内存]    [脚本名称]${PLAIN}"
    ps -axo user,time,pcpu,user,pmem,user,command --sort -pmem | less | egrep "\.js$|\.py$|\.ts$" | egrep -v "\/jd\/web\/server\.js|pm2 |egrep |perl |sed |bash |wget |\<defunct\>" |
        perl -pe '{s| root     |% |g; s|\/usr\/bin\/ts-node-transpile-only ||g; s|\/usr\/bin\/ts-node ||g; s|\/usr\/bin\/python3 ||g; s|python3 -u ||g; s|\/usr\/bin\/python ||g; s|\/usr\/bin\/node ||g; s|node -r global-agent/bootstrap |(代理)|g; s|node ||g;  s|root     |#|g; s|#[0-9][0-9]:|#|g;  s|  | |g; s| |     |g; s|#|•  |g; s|/jd/scripts/jd_cfd_loop\.js|jd_cfd_loop\.js|g; s|\./utils/||g;}'
    echo ''
}

## 列出本地脚本清单功能
function List_Local_Scripts() {
    local ScriptType Tmp1 Tmp2
    ## 根据处理器架构判断匹配脚本类型
    case ${ARCH} in
    armv7l | armv6l)
        ScriptType="\.js$"
        ;;
    *)
        if [ -x /usr/bin/python3 ]; then
            Tmp1="|\.py$"
        else
            Tmp1=""
        fi
        if [ -x /usr/bin/ts-node ]; then
            Tmp2="|\.ts$"
        else
            Tmp2=""
        fi
        ScriptType="\.js\$${Tmp1}${Tmp2}"
        ;;
    esac

    ## 列出 Scripts 主要仓库中的脚本
    function List_Scripts() {
        echo -e "\n❖ Scripts 主要仓库脚本："
        if [ -d $ScriptsDir/.git ]; then
            cd $ScriptsDir
            local ListFiles=($(
                git ls-files | grep -E "${ScriptType}" | grep -E "j[drx]_" | grep -Ev "/|${ShieldingKeywords}"
            ))
            local NumTmp=0
            for ((i = 0; i < ${#ListFiles[*]}; i++)); do
                if [ -f ${ListFiles[i]} ]; then
                    Query_ScriptName ${ListFiles[i]}
                    let NumTmp++
                    printf "%3s  %-30s %s\n" "$NumTmp" "${ListFiles[i]}" "${ScriptName}"
                fi
            done
        else
            echo -e "请先配置仓库"
        fi
    }

    ## 列出所有 Own 仓库中的脚本
    function List_Own() {
        local FileName FileDir Tmp1 Tmp2 Tmp3 repo_num
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
                    ls ${array_own_repo_path[repo_num]} 2>/dev/null | grep -E "${ScriptType}" | grep -Ev "/|${ShieldingKeywords}" | perl -pe "{s|^|${array_own_repo_path[repo_num]}/|g;}"
                done
                if [[ ${#OwnRawFile[*]} -ge 1 ]]; then
                    ls $RawDir 2>/dev/null | grep -E "${ScriptType}" | grep -Ev "/|${ShieldingKeywords}" | perl -pe "{s|^|$RawDir/|g;}"
                fi
            ))

            echo -e "\n❖ Own 扩展脚本："
            for ((i = 0; i < ${#ListFiles[*]}; i++)); do
                FileName=${ListFiles[i]##*/}
                FileDir=$(echo ${ListFiles[i]} | awk -F "$FileName" '{print$1}')
                cd $FileDir
                Query_ScriptName $FileName
                printf "%4s  %-50s %s\n" "$(($i + 1))" "${ListFiles[i]:8}" "${ScriptName}"
            done
        fi
    }

    ## 列出 scripts 目录下的第三方脚本
    function List_Other() {
        if [ -d $ScriptsDir/.git ]; then
            cd $ScriptsDir
            local ListFiles=($(
                ls | grep -E "${ScriptType}" | grep -Ev "$(git ls-files)|${ShieldingKeywords}"
            ))
            if [ ${#ListFiles[*]} != 0 ]; then
                echo -e "\n❖ 第三方脚本："
                for ((i = 0; i < ${#ListFiles[*]}; i++)); do
                    Query_ScriptName ${ListFiles[i]}
                    printf "%3s  %-36s   %s\n" "$(($i + 1))" "${ListFiles[i]}" "${ScriptName}"
                done
            fi
        fi
    }

    ## 列出指定目录下的脚本
    function List_Designated() {
        local InputContent WorkDir PwdTmp LengthTmp spacesNums
        ## 去掉传入参数中的最后一个/
        echo $1 | grep "/$" -q
        if [ $? -eq 0 ]; then
            InputContent=${1%?}
        else
            InputContent=$1
        fi
        ## 判断传入参数
        echo ${InputContent} | grep "\/" -q
        if [ $? -eq 0 ]; then
            ## 判定传入的是绝对路径还是相对路径
            echo ${InputContent} | grep "^$RootDir" -q
            if [ $? -eq 0 ]; then
                WorkDir=${InputContent}
            else
                ## 处理上级目录
                echo ${InputContent} | grep "\.\./" -q
                if [ $? -eq 0 ]; then
                    PwdTmp=$(pwd | perl -pe "{s|/$(pwd | awk -F '/' '{printf$NF}')||g;}")
                    WorkDir=$(echo "${InputContent}" | perl -pe "{s|\.\./|${PwdTmp}/|;}")
                else
                    WorkDir=$(echo "${InputContent}" | perl -pe "{s|\.\/||; s|^*|$(pwd)/|;}")
                fi
            fi
        else
            if [[ "${InputContent}" = "." ]]; then
                WorkDir="$(pwd)"
            elif [[ "${InputContent}" = "./" ]]; then
                WorkDir="$(pwd)"
            else
                WorkDir="$(pwd)/${InputContent}"
            fi
        fi
        ## 判断路径是否存在
        if [ -d $WorkDir ]; then
            if [ "$(ls -A $WorkDir | grep -E "${ScriptType}")" = "" ]; then
                if [ "$(ls -A $WorkDir)" = "" ]; then
                    echo -e "\n$ERROR 路径 ${BLUE}$WorkDir${PLAIN} 为空！\n"
                else
                    echo -e "\n$FAIL 在 ${BLUE}$WorkDir${PLAIN} 路径下未检测到任何脚本！\n"
                fi
                exit ## 终止退出
            fi
        else
            echo -e "\n$ERROR 目标路径 ${BLUE}$WorkDir${PLAIN} 不存在，请重新确认！\n"
            exit 1 ## 终止退出
        fi

        cd $WorkDir
        ## 打印仓库地址
        if [ -d .git ]; then
            local RemoteUrl=$(git remote -v | head -n 1 | awk -F ' ' '{print$2}')
            echo "$RemoteUrl" | grep "git@" -q
            if [ $? -ne 0 ]; then
                echo -e "\n❖ 远程仓库地址: ${BLUE}${RemoteUrl%\.*}${PLAIN}"
            fi
        fi
        local ListFiles=(
            $(ls | grep -E "${ScriptType}" | grep -Ev "${ShieldingKeywords}")
        )
        [ ${#ListFiles[*]} = 0 ] && exit ## 终止退出
        if [[ ${#ListFiles[*]} -ge "10" ]]; then
            if [[ ${#ListFiles[*]} -ge "100" ]]; then
                TmpNum="3"
            else
                TmpNum="2"
            fi
        else
            TmpNum="1"
        fi
        printf "\n${BLUE}%$((28 + ${TmpNum}))s${PLAIN} ${BLUE}%29s${PLAIN}  ${BLUE}%6s${PLAIN}             ${BLUE}%s${PLAIN}\n" "[文件名称]" "[修改时间]" " [大小]" "[脚本名称]"

        for ((i = 0; i < ${#ListFiles[*]}; i++)); do
            echo ''
            Query_ScriptName ${ListFiles[i]}
            Query_ScriptSize ${ListFiles[i]}
            Query_ScriptEditTimes ${ListFiles[i]}
            LengthTmp1=$(StringLength $(echo ${ListFiles[i]} | perl -pe '{s|[0-9a-zA-Z\,\.\=\:\_\-\(\)\[\]\<\>\~]||g;}'))
            spacesNums1=$(($((34 - ${LengthTmp1} - ${#ListFiles[i]})) / 2))
            for ((a = 1; a <= ${spacesNums1}; a++)); do
                ListFiles[i]=" ${ListFiles[i]}"
            done
            LengthTmp2=$(StringLength $(echo ${ScriptName} | perl -pe '{s|[0-9a-zA-Z\,\.\=\:\_\-\(\)\[\]\<\>\~]||g;}'))
            spacesNums2=$(($((34 - ${LengthTmp2} - ${#ScriptName})) / 2))
            for ((a = 1; a <= ${spacesNums2}; a++)); do
                ScriptName=" ${ScriptName}"
            done
            printf "%${TmpNum}s  %-$((34 + ${LengthTmp1}))s %14s %6s  %-$((34 + ${LengthTmp2}))s\n" "$(($i + 1))" "${ListFiles[i]}" "$(echo ${ScriptEditTimes} | sed "s/ /  /g")" "${ScriptSize}" "${ScriptName}"
        done
    }

    case $# in
    0)
        List_Scripts
        List_Own
        List_Other
        ;;
    1)
        List_Designated $1
        ;;
    esac
    echo ''
}

## 判断传入命令
case $# in
0)
    Help
    ;;
1)
    case $1 in
    ps)
        Process_Monitor
        ;;
    list)
        List_Local_Scripts
        ;;
    exsc)
        bash $FileCode
        ;;
    rmlog)
        Remove_LogFiles
        ;;
    cleanup)
        Process_CleanUp
        ;;
    debug)
        SwitchBranch
        ;;
    *)
        RUN_DELAY="true"
        CRON_TASK="true"
        RUN_MODE=normal
        Run_Normal $1
        ;;
    esac
    ;;

## 2个参数
2)
    case $2 in
    now)
        RUN_MODE=normal
        Run_Normal $1
        ;;
    conc)
        RUN_MODE=concurrent
        Run_Concurrent $1
        ;;
    [1-9] | [1-9][0-9] | [1-9][0-9][0-9])
        case $1 in
        rmlog)
            Remove_LogFiles $2
            ;;
        cleanup)
            Process_CleanUp $2
            ;;
        *)
            Output_Command_Error 1 ## 命令错误
            ;;
        esac
        ;;
    pkill)
        Process_Kill $1
        ;;
    update | check | list | beans)
        case $1 in
        cookie)
            Accounts_Control $2
            ;;
        *)
            Output_Command_Error 1 ## 命令错误
            ;;
        esac
        ;;
    add | del | edit | search)
        case $1 in
        env)
            Manage_Env $2
            ;;
        *)
            Output_Command_Error 1 ## 命令错误
            ;;
        esac
        ;;
    *)
        case $1 in
        list)
            List_Local_Scripts $2
            ;;
        repo)
            Add_OwnRepo $2
            ;;
        raw)
            Add_RawFile $2
            ;;
        ps | exsc)
            Output_Command_Error 2 ## 命令过多
            ;;
        *)
            Output_Command_Error 1 ## 命令错误
            ;;
        esac
        ;;
    esac
    ;;

## 3个参数
3)
    case $2 in
    now | conc)
        ## 定义执行内容，下面的判断会把参数打乱
        RUN_TARGET=$1
        case $2 in
        now)
            RUN_MODE=normal
            ;;
        conc)
            RUN_MODE=concurrent
            ;;
        esac
        ## 判断参数
        while [ $# -gt 2 ]; do
            case $3 in
            -l | --loop)
                Help
                case ${RUN_MODE} in
                normal)
                    echo -e "$ERROR 检测到 ${BLUE}$3${PLAIN} 为无效参数，请在该参数后指定循环次数！\n"
                    ;;
                concurrent)
                    echo -e "$ERROR 检测到 ${BLUE}$3${PLAIN} 为无效参数，该参数仅适用于普通执行！\n"
                    ;;
                esac
                exit ## 终止退出
                ;;
            -m | --mute)
                RUN_MUTE="true"
                ;;
            -w | --wait)
                Help
                echo -e "$ERROR 检测到 ${BLUE}$3${PLAIN} 为无效参数，请在该参数后指定等待时间！\n"
                exit ## 终止退出
                ;;
            -d | --delay)
                RUN_DELAY="true"
                ;;
            -p | --proxy)
                echo ${RUN_TARGET} | grep -Eq "http.*:.*github"
                if [ $? -eq 0 ]; then
                    DOWNLOAD_PROXY="true"
                else
                    Help
                    echo -e "$ERROR 检测到 ${BLUE}$3${PLAIN} 为无效参数，该参数仅适用于执行位于 GitHub 仓库的脚本，请确认后重新输入！\n"
                    exit ## 终止退出
                fi
                ;;
            -r | --rapid)
                RUN_RAPID="true"
                ;;
            -h | --hang)
                case ${RUN_MODE} in
                normal)
                    RUN_DAEMON="true"
                    ;;
                concurrent)
                    Help
                    echo -e "$ERROR 检测到 ${BLUE}$3${PLAIN} 为无效参数，该参数仅适用于普通执行！\n"
                    exit ## 终止退出
                    ;;
                esac
                ;;
            -c | --cookie)
                Help
                echo -e "$ERROR 检测到 ${BLUE}$3${PLAIN} 为无效参数，请在该参数后指定运行账号！\n"
                exit ## 终止退出
                ;;
            -g | --grouping)
                Help
                case ${RUN_MODE} in
                normal)
                    echo -e "$ERROR 检测到 ${BLUE}$3${PLAIN} 为无效参数，请在该参数后指定账号运行分组！\n"
                    ;;
                concurrent)
                    echo -e "$ERROR 检测到 ${BLUE}$3${PLAIN} 为无效参数，该参数仅适用于普通执行！\n"
                    ;;
                esac
                exit ## 终止退出
                ;;
            -b | --background)
                case ${RUN_MODE} in
                normal)
                    RUN_BACKGROUND="true"
                    ;;
                concurrent)
                    Help
                    echo -e "$ERROR 检测到 ${BLUE}$3${PLAIN} 为无效参数，该参数仅适用于普通执行！\n"
                    exit ## 终止退出
                    ;;
                esac
                ;;
            *)
                Help
                echo -e "$ERROR 检测到 ${BLUE}$3${PLAIN} 为无效参数，请确认后重新输入！\n"
                exit ## 终止退出
                ;;
            esac
            shift
        done
        ## 运行
        case ${RUN_MODE} in
        normal)
            Run_Normal ${RUN_TARGET}
            ;;
        concurrent)
            Run_Concurrent ${RUN_TARGET}
            ;;
        esac
        ;;
    update | check | beans)
        case $1 in
        cookie)
            case $3 in
            [1-9] | [1-9][0-9] | [1-9][0-9][0-9])
                Accounts_Control $2 $3
                ;;
            *)
                grep -Eq "Cookie[0-9]{1,3}=.*pt_pin=$3;.*" $FileConfUser
                if [ $? -eq 0 ]; then
                    Accounts_Control $2 $(grep -E "Cookie[0-9]{1,3}=.*pt_pin=$3;.*" $FileConfUser | awk -F '=' '{print$1}' | awk -F 'Cookie' '{print$2}')
                else
                    Output_Command_Error 1 ## 命令错误
                fi
                ;;
            esac
            ;;
        *)
            Output_Command_Error 1 ## 命令错误
            ;;
        esac
        ;;
    del | search)
        case $1 in
        env)
            Manage_Env $2 $3
            ;;
        *)
            Output_Command_Error 1 ## 命令错误
            ;;
        esac
        ;;
    enable | disable)
        case $1 in
        env)
            Manage_Env edit $2 $3
            ;;
        *)
            Output_Command_Error 1 ## 命令错误
            ;;
        esac
        ;;
    *)
        case $1 in
        notify)
            SendNotify $2 $3
            ;;
        repo)
            Add_OwnRepo $2 $3
            ;;
        *)
            Output_Command_Error 1 ## 命令错误
            ;;
        esac
        ;;
    esac
    ;;

## 多个参数（ 2 + 参数个数 + 参数值个数 ）
4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16)
    case $2 in
    now | conc)
        ## 定义执行内容，下面的判断会把参数打乱
        RUN_TARGET=$1
        case $2 in
        now)
            RUN_MODE=normal
            ;;
        conc)
            RUN_MODE=concurrent
            ;;
        esac
        ## 判断参数
        while [ $# -gt 2 ]; do
            case $3 in
            -l | --loop)
                case ${RUN_MODE} in
                normal)
                    if [[ $4 ]]; then
                        echo "$4" | grep -Eq "[a-zA-Z,/\!@#$%^&*|\-_=\+]|\(|\)|\[|\]|\{|\}"
                        if [ $? -eq 0 ]; then
                            Help
                            echo -e "$ERROR 检测到无效参数值 ${BLUE}$4${PLAIN} ，语法有误请确认后重新输入！\n"
                            exit ## 终止退出
                        else
                            RUN_LOOP="true"
                            RUN_LOOP_TIMES="$4"
                            shift
                        fi
                    else
                        Help
                        echo -e "$ERROR 检测到 ${BLUE}$3${PLAIN} 为无效参数，请在该参数后指定循环次数！\n"
                        exit ## 终止退出
                    fi
                    ;;
                concurrent)
                    Help
                    echo -e "$ERROR 检测到 ${BLUE}$3${PLAIN} 为无效参数，该参数仅适用于普通执行！\n"
                    exit ## 终止退出
                    ;;
                esac
                ;;
            -m | --mute)
                RUN_MUTE="true"
                ;;
            -w | --wait)
                if [[ $4 ]]; then
                    echo "$4" | grep -Eq "[abcefgijklnopqrtuvwxyzA-Z,/\!@#$%^&*|\-_=\+]|\(|\)|\[|\]|\{|\}"
                    if [ $? -eq 0 ]; then
                        Help
                        echo -e "$ERROR 检测到无效参数值 ${BLUE}$4${PLAIN} ，语法有误请确认后重新输入！\n"
                        exit ## 终止退出
                    else
                        RUN_WAIT="true"
                        RUN_WAIT_TIMES="$4"
                        shift
                    fi
                else
                    Help
                    echo -e "$ERROR 检测到 ${BLUE}$3${PLAIN} 为无效参数，请在该参数后指定等待时间！\n"
                    exit ## 终止退出
                fi
                ;;
            -d | --delay)
                RUN_DELAY="true"
                ;;
            -p | --proxy)
                echo ${RUN_TARGET} | grep -Eq "http.*:.*github"
                if [ $? -eq 0 ]; then
                    DOWNLOAD_PROXY="true"
                else
                    Help
                    echo -e "$ERROR 检测到 ${BLUE}$3${PLAIN} 为无效参数，该参数仅适用于执行位于 GitHub 仓库的脚本，请确认后重新输入！\n"
                    exit ## 终止退出
                fi
                ;;
            -r | --rapid)
                RUN_RAPID="true"
                ;;
            -h | --hang)
                case ${RUN_MODE} in
                normal)
                    RUN_DAEMON="true"
                    ;;
                concurrent)
                    Help
                    echo -e "$ERROR 检测到 ${BLUE}$3${PLAIN} 为无效参数，该参数仅适用于普通执行！\n"
                    exit ## 终止退出
                    ;;
                esac
                ;;
            -c | --cookie)
                if [[ $4 ]]; then
                    echo "$4" | grep -Eq "[a-zA-Z\.;:\<\>/\!@#$^&*|\-_=\+]|\(|\)|\[|\]|\{|\}"
                    if [ $? -eq 0 ]; then
                        Help
                        echo -e "$ERROR 检测到无效参数值 ${BLUE}$4${PLAIN} ，语法有误请确认后重新输入！\n"
                        exit ## 终止退出
                    else
                        if [[ ${RUN_GROUPING} == true ]]; then
                            Help
                            echo -e "$ERROR 检测到无效参数 ${BLUE}$3${PLAIN} ，不可与账号分组参数同时使用！\n"
                            exit ## 终止退出
                        else
                            RUN_DESIGNATED="true"
                            DESIGNATED_VALUE="$4"
                            shift
                        fi
                    fi
                else
                    Help
                    echo -e "$ERROR 检测到 ${BLUE}$3${PLAIN} 为无效参数，请在该参数后指定运行账号！\n"
                    exit ## 终止退出
                fi
                ;;
            -g | --grouping)
                case ${RUN_MODE} in
                normal)
                    if [[ $4 ]]; then
                        echo "$4" | grep -Eq "[a-zA-Z\.;:\<\>/\!#$^&*|\-_=\+]|\(|\)|\[|\]|\{|\}"
                        if [ $? -eq 0 ]; then
                            Help
                            echo -e "$ERROR 检测到无效参数值 ${BLUE}$4${PLAIN} ，语法有误请确认后重新输入！\n"
                            exit ## 终止退出
                        else
                            if [[ ${RUN_DESIGNATED} == true ]]; then
                                Help
                                echo -e "$ERROR 检测到无效参数 ${BLUE}$3${PLAIN} ，不可与指定账号参数同时使用！\n"
                                exit ## 终止退出
                            else
                                ## 判断是否已分组
                                echo "$4" | grep -Eq "@"
                                if [ $? -eq 0 ]; then
                                    RUN_GROUPING="true"
                                    GROUPING_VALUE="$4"
                                    shift
                                else
                                    Help
                                    echo -e "$ERROR 检测到无效参数值 ${BLUE}$4${PLAIN} ，请定义账号分组否则请使用指定账号参数！\n"
                                    exit ## 终止退出
                                fi
                            fi
                        fi
                    else
                        Help
                        echo -e "$ERROR 检测到 ${BLUE}$3${PLAIN} 为无效参数，请在该参数后指定账号运行分组！\n"
                        exit ## 终止退出
                    fi
                    ;;
                concurrent)
                    Help
                    echo -e "$ERROR 检测到 ${BLUE}$3${PLAIN} 为无效参数，该参数仅适用于普通执行！\n"
                    exit ## 终止退出
                    ;;
                esac
                ;;
            -b | --background)
                case ${RUN_MODE} in
                normal)
                    RUN_BACKGROUND="true"
                    ;;
                concurrent)
                    Help
                    echo -e "$ERROR 检测到 ${BLUE}$3${PLAIN} 为无效参数，该参数仅适用于普通执行！\n"
                    exit ## 终止退出
                    ;;
                esac
                ;;
            *)
                Help
                echo -e "$ERROR 检测到 ${BLUE}$3${PLAIN} 为无效参数，请确认后重新输入！\n"
                exit ## 终止退出
                ;;
            esac
            shift
        done
        ## 运行
        case ${RUN_MODE} in
        normal)
            Run_Normal ${RUN_TARGET}
            ;;
        concurrent)
            Run_Concurrent ${RUN_TARGET}
            ;;
        esac
        ;;
    add | edit)
        case $1 in
        env)
            case $# in
            4)
                Manage_Env $2 $3 "$4"
                ;;
            5)
                Manage_Env $2 $3 "$4" "$5"
                ;;
            *)
                Output_Command_Error 2 ## 命令过多
                ;;
            esac
            ;;
        *)
            Output_Command_Error 1 ## 命令错误
            ;;
        esac
        ;;
    *)
        case $1 in
        repo)
            if [ $# -eq 4 ]; then
                Add_OwnRepo $2 $3 $4
            else
                Output_Command_Error 1 ## 命令错误
            fi
            ;;
        *)
            Output_Command_Error 1 ## 命令错误
            ;;
        esac
        ;;
    esac
    ;;

*)
    Output_Command_Error 2 ## 命令过多
    ;;
esac
