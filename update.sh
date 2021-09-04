#!/usr/bin/env bash
## Author: SuperManito
## Modified: 2021-09-04

ShellDir=${JD_DIR}
. $ShellDir/share.sh

## 定义 Scripts 仓库
ScriptsBranch="j_scripts"
ScriptsUrl="https://gitee.com/getready/my_actions.git"

## Aaron-lv（当前默认）
# ScriptsUrl="${GithubProxy}https://github.com/Aaron-lv/sync.git"
## Facker
# ScriptsUrl="${GithubProxy}https://github.com/shufflewzc/faker2.git"
## JDHelloWorld
# ScriptsUrl="${GithubProxy}https://github.com/JDHelloWorld/jd_scripts.git"

## 创建日志文件夹
Make_Dir $LogDir
## 导入配置文件（不检查）
Import_Config_Not_Check

## 更新crontab，gitee服务器同一时间限制5个链接，因此每个人更新代码必须错开时间，每次执行git_pull随机生成。
## 每天次数随机，更新时间随机，更新秒数随机，至少4次，至多6次，大部分为5次，符合正态分布。
function Random_Update_Cron() {
    if [[ $(date "+%-H") -le 2 ]] && [ -f ${ListCrontabUser} ]; then
        local RanMin=$((${RANDOM} % 60))
        local RanSleep=$((${RANDOM} % 56))
        local RanHourArray[0]=$((${RANDOM} % 3))
        local RanHour=${RanHourArray[0]}
        for ((i = 1; i < 14; i++)); do
            j=$(($i - 1))
            Tmp=$((${RANDOM} % 3 + ${RanHourArray[j]} + 2))
            [[ ${Tmp} -lt 24 ]] && RanHourArray[i]=${Tmp} || break
        done

        for ((i = 1; i < ${#RanHourArray[*]}; i++)); do
            RanHour="${RanHour},${RanHourArray[i]}"
        done
        perl -i -pe "s|.+(update.+update.+log.*)|${RanMin} ${RanHour} \* \* \* sleep ${RanSleep} && \1|" ${ListCrontabUser}
        cat ${ListCrontabUser} | sort -k2n | uniq > ${ListCrontabUser}.uniq
        mv ${ListCrontabUser}.uniq ${ListCrontabUser}
        cat ${ListCrontabUser} ${UtilsDir}/ext_crontab_list.sh > ${ListCrontabUser}.mix
        mv ${ListCrontabUser}.mix ${ListCrontabUser}
        crontab ${ListCrontabUser}
    fi
}

## 克隆脚本，$1：仓库地址，$2：仓库保存路径，$3：分支（可省略）
function Git_Clone() {
    local Url=$1
    local Dir=$2
    local Branch=$3
    [[ $Branch ]] && local Command="-b $Branch "
    echo -e "\n$WORKING 开始克隆仓库 $Url 到 $Dir\n"
    git clone $Command $Url $Dir
    ExitStatus=$?
}

## 更新脚本，$1：仓库保存路径
function Git_Pull() {
    local CurrentDir=$(pwd)
    local WorkDir=$1
    local Branch=$2
    cd $WorkDir
    echo -e "\n$WORKING 开始更新仓库：$WorkDir\n"
    git fetch --all
    ExitStatus=$?
    git pull
    git reset --hard origin/$Branch
    cd $CurrentDir
}

## 重置仓库remote url，docker专用，$1：要重置的目录，$2：要重置为的网址
function Reset_Romote_Url() {
    local CurrentDir=$(pwd)
    local WorkDir=$1
    local Url=$2
    local Branch=$3
    if [ -d "$WorkDir/.git" ]; then
        cd $WorkDir
        git remote set-url origin $Url >/dev/null
        git fetch --all >/dev/null
        git reset --hard origin/$Branch >/dev/null
        cd $CurrentDir
    fi
}

## 统计 own 仓库数量
function Count_OwnRepoSum() {
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

## 形成 own 仓库的文件夹名清单，依赖于 Import_Conf 或 Import_Config_Not_Check
## array_own_repo_path：repo存放的绝对路径组成的数组；array_own_scripts_path：所有要使用的脚本所在的绝对路径组成的数组
function Gen_own_dir_and_path() {
    local scripts_path_num="-1"
    local repo_num Tmp1 Tmp2 Tmp3 Tmp4 Tmp5 dir

    if [[ $OwnRepoSum -ge 1 ]]; then
        for ((i = 1; i <= $OwnRepoSum; i++)); do
            repo_num=$((i - 1))

            Tmp1=OwnRepoUrl$i
            array_own_repo_url[$repo_num]=${!Tmp1}

            Tmp2=OwnRepoBranch$i
            array_own_repo_branch[$repo_num]=${!Tmp2}

            array_own_repo_dir[$repo_num]=$(echo ${array_own_repo_url[$repo_num]} | perl -pe "s|\.git||" | awk -F "/|:" '{print $((NF - 1)) "_" $NF}')
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

## 生成 Scripts仓库 task 清单，仅有去掉后缀的文件名
function Gen_ListTask() {
    Make_Dir $LogTmpDir
    grep -E "node.+j[drx]_\w+\.js" $ListCronScripts | perl -pe "s|.+(j[drx]_\w+)\.js.+|\1|" | sort -u >$ListTaskScripts
    grep -E " $TaskCmd j[drx]_\w+" $ListCrontabUser | perl -pe "s|.*$TaskCmd (j[drx]_\w+).*|\1|" | sort -u >$ListTaskUser
}

## 生成 own 脚本的绝对路径清单
function Gen_ListOwn() {
    local CurrentDir=$(pwd)
    local Own_Scripts_Tmp
    rm -f $LogTmpDir/own*.list >/dev/null 2>&1
    for ((i = 0; i < ${#array_own_scripts_path[*]}; i++)); do
        cd ${array_own_scripts_path[i]}
        if [[ $(ls *.js 2>/dev/null) ]]; then
            for file in $(ls *.js); do
                if [ -f $file ]; then
                    perl -ne "print if /.*([\d\*]*[\*-\/,\d]*[\d\*] ){4}[\d\*]*[\*-\/,\d]*[\d\*]( |,|\").*\/?$file/" $file |
                        perl -pe "s|.*(([\d\*]*[\*-\/,\d]*[\d\*] ){4}[\d\*]*[\*-\/,\d]*[\d\*])( \|,\|\").*/?$file.*|${array_own_scripts_path[i]}/$file|g" |
                        sort -u | head -1 >>$ListOwnScripts
                fi
            done
        fi
    done
    Own_Scripts_Tmp=$(sort -u $ListOwnScripts)
    echo "$Own_Scripts_Tmp" >$ListOwnScripts
    grep -E " $TaskCmd $OwnDir" $ListCrontabUser | perl -pe "s|.*$TaskCmd ([^\s]+)( .+\|$)|\1|" | sort -u >$ListOwnUser
    cd $CurrentDir
}

## 检测cron的差异，$1：脚本清单文件路径，$2：cron任务清单文件路径，$3：增加任务清单文件路径，$4：删除任务清单文件路径
function Diff_Cron() {
    Make_Dir $LogTmpDir
    local ListScripts="$1"
    local ListTask="$2"
    local ListAdd="$3"
    local ListDrop="$4"
    if [ -s $ListTask ] && [ -s $ListScripts ]; then
        diff $ListScripts $ListTask | grep "<" | awk '{print $2}' >$ListAdd
        diff $ListScripts $ListTask | grep ">" | awk '{print $2}' >$ListDrop
    elif [ ! -s $ListTask ] && [ -s $ListScripts ]; then
        cp -f $ListScripts $ListAdd
    elif [ -s $ListTask ] && [ ! -s $ListScripts ]; then
        cp -f $ListTask $ListDrop
    fi
}

## 检测配置文件版本
function Detect_Config_Version() {
    ## 识别出两个文件的版本号
    VerConfSample=$(grep " Version: " $FileConfSample | perl -pe "s|.+v((\d+\.?){3})|\1|")
    [ -f $FileConfUser ] && VerConfUser=$(grep " Version: " $FileConfUser | perl -pe "s|.+v((\d+\.?){3})|\1|")

    ## 删除旧的发送记录文件
    [ -f $FileSendMark ] && [[ $(cat $FileSendMark) != $VerConfSample ]] && rm -f $FileSendMark

    ## 识别出更新日期和更新内容
    UpdateDate=$(grep " Date: " $FileConfSample | awk -F ": " '{print $2}')
    UpdateContent=$(grep " Update Content: " $FileConfSample | awk -F ": " '{print $2}')

    ## 如果是今天，并且版本号不一致，则发送通知
    if [ -f $FileConfUser ] && [[ $VerConfUser != $VerConfSample ]] && [[ $UpdateDate == $(date "+%Y-%m-%d") ]]; then
        if [ ! -f $FileSendMark ]; then
            local NotifyTitle="配置文件更新通知"
            local NotifyContent="更新日期: $UpdateDate\n用户版本: $VerConfUser\n新的版本: $VerConfSample\n更新内容: $UpdateContent\n"
            echo -e $NotifyContent
            Notify "$NotifyTitle" "$NotifyContent"
            [[ $? -eq 0 ]] && echo $VerConfSample >$FileSendMark
        fi
    else
        [ -f $FileSendMark ] && rm -f $FileSendMark
    fi
}

## npm install，$1：package.json文件所在路径
function Npm_Install_1() {
    local CurrentDir=$(pwd)
    local WorkDir=$1
    cd $WorkDir
    echo -e "$WORKING 运行 npm install...\n"
    npm install
    [[ $? -ne 0 ]] && echo -e "\n$ERROR 依赖安装失败，请进入 $WorkDir 目录后手动运行 npm install ...\n"
    cd $CurrentDir
}
function Npm_Install_2() {
    local CurrentDir=$(pwd)
    local WorkDir=$1
    cd $WorkDir
    echo -e "\n$WORKING 检测到 $WorkDir 的依赖包有变化，运行 npm install...\n"
    npm install
    [[ $? -ne 0 ]] && echo -e "\n$ERROR 位于 $WorkDir 的依赖包安装失败，再次尝试一遍...\n"
    Npm_Install_1 $WorkDir
    cd $CurrentDir
}

## 输出是否有新的或失效的定时任务，$1：新的或失效的任务清单文件路径，$2：新/失效
function Output_List_Add_Drop() {
    local List=$1
    local Type=$2
    if [ -s $List ]; then
        echo -e "\n检测到有$Type的定时任务：\n"
        cat $List
        echo
    fi
}

## 自动删除失效的脚本与定时任务，需要：1.AutoDelCron/AutoDelOwnCron 设置为 true；2.正常更新脚本，没有报错；3.存在失效任务；4.crontab.list存在并且不为空
## $1：失效任务清单文件路径，$2：task
function Del_Cron() {
    local ListDrop=$1
    local Type=$2
    local Detail Detail2
    if [ -s $ListDrop ] && [ -s $ListCrontabUser ]; then
        Detail=$(cat $ListDrop)
        echo -e "$WORKING 开始尝试自动删除的定时任务...\n"
        for cron in $Detail; do
            local Tmp=$(echo $cron | perl -pe "s|/|\.|g")
            perl -i -ne "{print unless / $Type $Tmp( |$)/}" $ListCrontabUser
        done
        cat ${ListCrontabUser} | sort -k2n | uniq > ${ListCrontabUser}.uniq
        mv ${ListCrontabUser}.uniq ${ListCrontabUser}
        cat ${ListCrontabUser} ${UtilsDir}/ext_crontab_list.sh > ${ListCrontabUser}.mix
        mv ${ListCrontabUser}.mix ${ListCrontabUser}
        crontab $ListCrontabUser
        Detail2=$(echo $Detail | perl -pe "s| |\\\n|g")
        echo -e "$SUCCESS 成功删除失效的定时任务\n"
        Notify "删除失效任务通知" "成功删除以下失效的定时任务：\n$Detail2"
    fi
}

## 自动增加Scripts仓库新的定时任务，需要：1.AutoAddCron 设置为 true；2.正常更新脚本，没有报错；3.存在新任务；4.crontab.list存在并且不为空
## $1：新任务清单文件路径
function Add_Cron_Scripts() {
    local ListAdd=$1
    if [[ ${AutoAddCron} == true ]] && [ -s $ListAdd ] && [ -s $ListCrontabUser ]; then
        echo -e "$WORKING 开始尝试自动添加Scipts仓库的定时任务...\n"
        local Detail=$(cat $ListAdd)
        for cron in $Detail; do
            if [[ $cron == jd_bean_sign ]]; then
                echo "4 0,9 * * * $TaskCmd $cron" >>$ListCrontabUser
            else
                cat $ListCronScripts | grep -E "\/$cron\." | perl -pe "s|(^.+)node */scripts/(j[drx]_\w+)\.js.+|\1$TaskCmd \2|" >>$ListCrontabUser
            fi
        done
        ExitStatus=$?
    fi
}

## 自动增加自己额外的脚本的定时任务，需要：1.AutoAddOwnCron 设置为 true；2.正常更新脚本，没有报错；3.存在新任务；4.crontab.list存在并且不为空
## $1：新任务清单文件路径
function Add_Cron_Own() {
    local ListAdd=$1
    local ListCrontabOwnTmp=$LogTmpDir/crontab_own.list
    [ -f $ListCrontabOwnTmp ] && rm -f $ListCrontabOwnTmp
    if [[ ${AutoAddOwnCron} == true ]] && [ -s $ListAdd ] && [ -s $ListCrontabUser ]; then
        echo -e "$WORKING 开始尝试自动添加 own 脚本的定时任务...\n"
        local Detail=$(cat $ListAdd)
        for FilePath in $Detail; do
            local FileName=$(echo $FilePath | awk -F "/" '{print $NF}')
            if [ -f $FilePath ]; then
                perl -ne "print if /.*([\d\*]*[\*-\/,\d]*[\d\*] ){4}[\d\*]*[\*-\/,\d]*[\d\*]( |,|\").*$FileName/" $FilePath |
                    perl -pe "{s|[^\d\*]*(([\d\*]*[\*-\/,\d]*[\d\*] ){4,5}[\d\*]*[\*-\/,\d]*[\d\*])( \|,\|\").*/?$FileName.*|\1 $TaskCmd $FilePath|g;s|  | |g; s|^[^ ]+ (([^ ]+ ){5}$TaskCmd $FilePath)|\1|;}" |
                    sort -u | head -1 >>$ListCrontabOwnTmp
            fi
        done
        crontab_tmp="$(cat $ListCrontabOwnTmp)"
        perl -i -pe "s|(# 自用own任务结束.+)|$crontab_tmp\n\1|" $ListCrontabUser
        ExitStatus=$?
    fi
    [ -f $ListCrontabOwnTmp ] && rm -f $ListCrontabOwnTmp
}

## 向系统添加定时任务以及通知，$1：写入crontab.list时的exit状态，$2：新增清单文件路径，$3：Scripts仓库脚本/own脚本
function Add_Cron_Notify() {
    local status_code=$1
    local ListAdd=$2
    local Tmp=$(echo $(cat $ListAdd))
    local Detail=$(echo $Tmp | perl -pe "s| |\\\n|g")
    local Type=$3
    if [[ $status_code -eq 0 ]]; then
        cat ${ListCrontabUser} | sort -k2n | uniq > ${ListCrontabUser}.uniq
        mv ${ListCrontabUser}.uniq ${ListCrontabUser}
        cat ${ListCrontabUser} ${UtilsDir}/ext_crontab_list.sh > ${ListCrontabUser}.mix
        mv ${ListCrontabUser}.mix ${ListCrontabUser}
        crontab $ListCrontabUser
        echo -e "$SUCCESS 成功添加新的定时任务\n"
        Notify "新增任务通知" "成功添加新的定时任务（$Type）：\n$Detail"
    else
        echo -e "添加新的定时任务出错，请手动添加...\n"
        Notify "新任务添加失败通知" "尝试自动添加以下新的定时任务出错，请手动添加（$Type）：\n$Detail"
    fi
}

## 一键执行所有活动脚本
function Run_All() {
    ## 默认将 "jd、jx、jr" 开头的活动脚本加入其中
    rm -rf $FileRunAll
    local Tips='echo -e "\n\\033[32m[Tips]\\033[0m 执行期间如果卡住，可按回车键尝试或通过命令 Ctrl + Z 跳过继续执行剩余活动脚本，倒计时 3 秒后开始执行\n" && sleep 1 && echo -e "3..." && sleep 1 && echo -e "2.." && sleep 1 && echo -e "1." && sleep 1'

    ## 调整执行顺序
    cat $ListTaskUser | egrep -v "jd_bean_change|joy_reward|blueCoin" >>$FileRunAll
    sed -i "1i\jd_bean_change" $FileRunAll ## 置顶京豆变动通知

    ## 去除不适合的活动脚本
    sed -i '/jd_delCoupon/d' $FileRunAll ## "删除优惠券"
    sed -i '/jd_family/d' $FileRunAll    ## "京东家庭号"
    sed -i '/jd_try/d' $FileRunAll       ## "京东试用"，执行时间过长

    ## 加入命令
    sed -i "s/^/$TaskCmd &/g" $FileRunAll
    sed -i 's/$/& now/g' $FileRunAll

    ## 加入说明
    sed -i "1i $Tips" $FileRunAll
    sed -i '1i\#!/bin/env bash' $FileRunAll
    chmod 777 $FileRunAll
}

## 更新 own 所有仓库
function Update_Own_Repo() {
    [[ ${#array_own_repo_url[*]} -gt 0 ]] && echo -e "-------------------------------------------------------------"
    for ((i = 0; i < ${#array_own_repo_url[*]}; i++)); do
        if [ -d ${array_own_repo_path[i]}/.git ]; then
            Reset_Romote_Url ${array_own_repo_path[i]} ${array_own_repo_url[i]} ${array_own_repo_branch[i]}
            Git_Pull ${array_own_repo_path[i]} ${array_own_repo_branch[i]}
        else
            Git_Clone ${array_own_repo_url[i]} ${array_own_repo_path[i]} ${array_own_repo_branch[i]}
        fi
        if [[ $ExitStatus -eq 0 ]]; then
            echo -e "\n$COMPLETE ${array_own_repo_path[i]} 仓库更新完成"
        else
            echo -e "\n$ERROR ${array_own_repo_path[i]} 仓库更新失败，请检查原因..."
        fi
    done
}

## 更新 own 所有 raw 脚本
function Update_Own_Raw() {
    local rm_mark format_url repository_platform repository_branch reformat_url repository_url repository_url_tmp
    if [[ ${#array_own_repo_url[*]} -eq 0 ]] && [[ ${#OwnRawFile[*]} -gt 0 ]]; then
        echo -e "-------------------------------------------------------------"
    fi
    for ((i = 0; i < ${#OwnRawFile[*]}; i++)); do
        raw_file_name[$i]=$(echo ${OwnRawFile[i]} | awk -F "/" '{print $NF}')
        ## 判断脚本来源仓库
        repository_url_tmp=$(echo ${OwnRawFile[i]} | perl -pe "{s|${raw_file_name[$i]}||g;}")
        format_url=$(echo $repository_url_tmp | awk -F '.com' '{print$NF}' | sed 's/.$//')
        case $(echo $repository_url_tmp | egrep -o "github|gitee") in
        github)
            repository_platform="https://github.com"
            repository_branch=$(echo $format_url | awk -F '/' '{print$4}')
            reformat_url=$(echo $format_url | sed "s|$repository_branch|tree/$repository_branch|g")
            ;;
        gitee)
            repository_platform="https://gitee.com"
            reformat_url=$(echo $format_url | sed "s|/raw/|/tree/|g")
            ;;
        esac
        repository_url="$repository_platform$reformat_url"
        echo -e "\n$WORKING 开始从仓库 $repository_url 下载 ${raw_file_name[$i]} 脚本"
        wget -q --no-check-certificate -O "$RawDir/${raw_file_name[$i]}.new" ${OwnRawFile[i]}
        if [[ $? -eq 0 ]]; then
            mv -f "$RawDir/${raw_file_name[$i]}.new" "$RawDir/${raw_file_name[$i]}"
            echo -e "$COMPLETE ${raw_file_name[$i]} 下载完成，脚本保存路径：$RawDir/${raw_file_name[$i]}"
        else
            echo -e "$ERROR 下载 ${raw_file_name[$i]} 失败，保留之前正常下载的版本...\n"
            [ -f "$RawDir/${raw_file_name[$i]}.new" ] && rm -f "$RawDir/${raw_file_name[$i]}.new"
        fi
    done
    for file in $(ls $RawDir); do
        rm_mark="yes"
        for ((i = 0; i < ${#raw_file_name[*]}; i++)); do
            if [[ $file == ${raw_file_name[$i]} ]]; then
                rm_mark="no"
                break
            fi
        done
        [[ $rm_mark == yes ]] && rm -f $RawDir/$file 2>/dev/null
    done
}

## 更新shell
function Update_Shell() {
    echo -e "-------------------------------------------------------------"
    [ -f $PanelDir/package.json ] && local PanelDependOld=$(cat $PanelDir/package.json)

    ## 随机定义更新任务的定时
    Random_Update_Cron

    cd $ShellDir
    echo -e "\n$WORKING 开始更新源码仓库：/jd\n"
    git fetch --all
    git pull
    git reset --hard origin/$(git status | head -n 1 | awk -F ' ' '{print$NF}')
    if [[ $ExitStatus -eq 0 ]]; then
        echo -e "\n$COMPLETE 源码仓库更新完成\n"
    else
        echo -e "\n$ERROR 源码仓库更新失败，请检查原因...\n"
    fi

    [ -f $PanelDir/package.json ] && local PanelDependNew=$(cat $PanelDir/package.json)
    if [[ "$PanelDependOld" != "$PanelDependNew" ]]; then
        if [[ $ENABLE_WEB_PANEL = true ]]; then
            pm2 delete server >/dev/null 2>&1
            $ContrlCmd panel on
        else
            Npm_Install_2 $PanelDir
        fi
    fi
    ## 检测配置文件版本
    Detect_Config_Version
}

## 更新scripts仓库
function Update_Scripts() {
    echo -e "-------------------------------------------------------------"
    ## 更新前先存储package.json
    [ -f $ScriptsDir/package.json ] && local ScriptsDependOld=$(cat $ScriptsDir/package.json)

    ## 更新或克隆scripts
    if [ -d $ScriptsDir/.git ]; then
        Git_Pull $ScriptsDir $ScriptsBranch
    else
        Git_Clone $ScriptsUrl $ScriptsDir $ScriptsBranch
    fi

    if [[ ! -f $ScriptsDir/docker/crontab_list.sh ]] && [[ $ScriptsUrl == "${GithubProxy}https://github.com/JDHelloWorld/jd_scripts.git" ]]; then
        cp -rf $UtilsDir/crontab_list_public.sh $ScriptsDir/docker
    fi

    if [[ $ExitStatus -eq 0 ]]; then
        ## 安装模块
        [ ! -d $ScriptsDir/node_modules ] && Npm_Install_1 $ScriptsDir
        [ -f $ScriptsDir/package.json ] && local ScriptsDependNew=$(cat $ScriptsDir/package.json)
        [[ "$ScriptsDependOld" != "$ScriptsDependNew" ]] && Npm_Install_2 $ScriptsDir

        ## 更换 sendNotify
        [ -f $FileSendNotifyScripts ] && cp -rf $FileSendNotify $ScriptsDir

        ## 比较定时任务
        Gen_ListTask
        Diff_Cron $ListTaskScripts $ListTaskUser $ListTaskAdd $ListTaskDrop

        ## 失效任务通知
        if [ -s $ListTaskDrop ]; then
            Output_List_Add_Drop $ListTaskDrop "失效"
            [[ ${AutoDelCron} == true ]] && Del_Cron $ListTaskDrop $TaskCmd
        fi

        ## 新增任务通知
        if [ -s $ListTaskAdd ]; then
            Output_List_Add_Drop $ListTaskAdd "新"
            Add_Cron_Scripts $ListTaskAdd
            [[ ${AutoAddCron} == true ]] && Add_Cron_Notify $ExitStatus $ListTaskAdd "Scripts仓库脚本"
        fi
        ## 全部执行
        Run_All
        echo -e "\n$COMPLETE Scripts 仓库更新完成\n"
    else
        echo -e "\n$ERROR Scripts 仓库更新失败，请检查原因...\n"
    fi
}

## 更新own脚本
function Update_Own() {
    Count_OwnRepoSum
    Gen_own_dir_and_path
    if [[ ${#array_own_scripts_path[*]} -gt 0 ]]; then
        Make_Dir $RawDir
        ## 更新仓库
        Update_Own_Repo
        Update_Own_Raw
        ## 比较定时任务
        Gen_ListOwn
        Diff_Cron $ListOwnScripts $ListOwnUser $ListOwnAdd $ListOwnDrop

        ## 失效任务通知
        if [ -s $ListOwnDrop ]; then
            Output_List_Add_Drop $ListOwnDrop "失效"
            [[ ${AutoDelOwnCron} == true ]] && Del_Cron $ListOwnDrop $TaskCmd
        fi

        ## 新增任务通知
        if [ -s $ListOwnAdd ]; then
            Output_List_Add_Drop $ListOwnAdd "新"
            Add_Cron_Own $ListOwnAdd
            [[ ${AutoAddOwnCron} == true ]] && Add_Cron_Notify $ExitStatus $ListOwnAdd "Own仓库脚本"
        fi
    else
        perl -i -ne "{print unless / $TaskCmd \/jd\/own/}" $ListCrontabUser
    fi
    echo ''
}

## 自定义脚本
function ExtraShell() {
    ## 调用用户自定义的diy.sh
    if [[ $EnableExtraShell == true ]]; then
        echo -e "-------------------------------------------------------------\n"
        ## 自动同步用户自定义的diy.sh
        if [[ $EnableExtraShellSync == true ]]; then
            wget -q --no-check-certificate $ExtraShellSyncUrl -O $FileExtra.new
            if [ $? -eq 0 ]; then
                mv -f "$FileExtra.new" "$FileExtra"
                echo -e "$COMPLETE 自定义脚本同步完成\n"
                sleep 1s
            else
                if [ -f $FileExtra ]; then
                    echo -e "$ERROR 自定义脚本同步失败，保留之前的版本...\n"
                else
                    echo -e "$ERROR 自定义脚本同步失败，请检查原因...\n"
                fi
                sleep 2s
            fi
            [ -f "$FileExtra.new" ] && rm -rf "$FileExtra.new"
        fi
        ## 执行
        if [ -f $FileExtra ]; then
            echo -e "$WORKING 开始执行自定义脚本：$FileExtra\n"
            . $FileExtra
            echo -e "\n$COMPLETE 自定义脚本执行完毕\n"
        else
            echo -e "$ERROR 自定义脚本不存在，跳过执行...\n"
        fi
    fi
}

## 修复crontab
function Fix_Crontab() {
    if [[ $JD_DIR ]]; then
        perl -i -pe "s|( ?&>/dev/null)+||g" $ListCrontabUser
        Update_Crontab
    fi
}

function Title() {
    local p=$1
    local Mod
    case $1 in
    all)
        Mod="    全  部   "
        ;;
    shell)
        Mod="   仅 源 码  "
        ;;
    scripts)
        Mod="仅Scripts仓库"
        ;;
    own)
        Mod="  仅Own仓库  "
        ;;
    esac
    echo -e "\n+----------------- 开 始 执 行 更 新 脚 本 -----------------+"
    echo -e ''
    echo -e "                系统时间：$(date "+%Y-%m-%d %H:%M:%S")"
    echo -e ''
    echo -e "         更新模式：$Mod     脚本根目录：$ShellDir"
    echo -e ''
    echo -e "    Scripts仓库目录：$ScriptsDir     Own仓库目录：$OwnDir"
    echo -e ''
}
function Notice() {
    echo -e "+----------------------- 郑 重 提 醒 -----------------------+"
    echo -e ""
    echo -e "  本项目为非营利性的公益闭源项目，脚本免费使用仅供用于学习！"
    echo -e ""
    echo -e "  圈内资源禁止以任何形式发布到咸鱼等国内平台，否则后果自负！"
    echo -e ""
    echo -e "  我们始终致力于打击使用本项目进行违法贩卖行为的个人或组织！"
    echo -e ""
    echo -e "  我们不会放纵某些行为，不保证不采取非常手段，请勿挑战底线！"
    echo -e ""
    echo -e "+-----------------------------------------------------------+"
}

## 组合函数
function Combin_Function() {
    case $# in
    0)
        Title "all"
        Update_Shell
        Update_Scripts
        Update_Own
        ExtraShell
        ;;
    1)
        case $1 in
        all)
            Title $1
            Update_Shell
            Update_Scripts
            Update_Own
            ExtraShell
            ;;
        shell)
            Title $1
            Update_Shell
            ;;
        scripts)
            Title $1
            Update_Scripts
            ;;
        own)
            Title $1
            Update_Own
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
    Fix_Crontab
    Notice
    echo ''
    exit 0
}
Combin_Function "$@"
