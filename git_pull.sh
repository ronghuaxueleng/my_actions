#!/usr/bin/env bash

## 文件路径、脚本网址、文件版本以及各种环境的判断
ShellDir=${JD_DIR:-$(
    cd $(dirname $0)
    pwd
)}
[[ ${JD_DIR} ]] && ShellJd=jd || ShellJd=${ShellDir}/jd.sh
LogDir=${ShellDir}/log
[ ! -d ${LogDir} ] && mkdir -p ${LogDir}
ScriptsDir=${ShellDir}/scripts
ConfigDir=${ShellDir}/config
ToolsDir=${ShellDir}/docker
FileRunAll=${ShellDir}/run_all.sh
FileConf=${ConfigDir}/config.sh
FileDiy=${ConfigDir}/diy.sh
FileConfSample=${ShellDir}/sample/config.sh.sample
ListCron=${ConfigDir}/crontab.list
## 判断 Scripts 仓库是否提供定时清单
[[ -f ${ScriptsDir}/docker/crontab_list.sh ]] && ListCronPublic=${ScriptsDir}/docker/crontab_list.sh || ListCronPublic=${ToolsDir}/crontab_list.sh
ListTask=${LogDir}/task.list
ListDiyTask=${LogDir}/task-diy.list
ListJs=${LogDir}/js.list
ListDiyJs=${LogDir}/js-diy.list
ListJsAdd=${LogDir}/js-add.list
ListJsDrop=${LogDir}/js-drop.list
ContentVersion=${ShellDir}/version
ContentNewTask=${ShellDir}/new_task
ContentDropTask=${ShellDir}/drop_task
SendCount=${ShellDir}/send_count
isTermux=${ANDROID_RUNTIME_ROOT}${ANDROID_ROOT}
ScriptsURL=https://gitee.com/getready/my_actions.git

SUCCESS='\033[32m[Done]\033[0m'
WARN='\033[33m[WARN]\033[0m'
ERROR='\033[31m[ERROR]\033[0m'
WAITING='\033[33m[*]\033[0m'

## 更新crontab，gitee服务器同一时间限制5个链接，因此每个人更新代码必须错开时间，每次执行git_pull随机生成。
## 每天次数随机，更新时间随机，更新秒数随机，至少6次，至多12次，大部分为8-10次，符合正态分布。
function Update_Cron() {
    if [[ $(date "+%-H") -le 2 ]] && [ -f ${ListCron} ]; then
        RanMin=$((${RANDOM} % 60))
        RanSleep=$((${RANDOM} % 56))
        RanHourArray[0]=$((${RANDOM} % 3))
        for ((i = 1; i < 14; i++)); do
            j=$(($i - 1))
            tmp=$((${RANDOM} % 3 + ${RanHourArray[j]} + 2))
            [[ ${tmp} -lt 24 ]] && RanHourArray[i]=${tmp} || break
        done
        RanHour=${RanHourArray[0]}
        for ((i = 1; i < ${#RanHourArray[*]}; i++)); do
            RanHour="${RanHour},${RanHourArray[i]}"
        done
        perl -i -pe "s|.+(bash.+git_pull.+log.*)|${RanMin} ${RanHour} \* \* \* sleep ${RanSleep} && \1|" ${ListCron}
        cat ${ListCron} | sort -k2n | uniq > ${ListCron}.uniq
        mv ${ListCron}.uniq ${ListCron}
        crontab ${ListCron}
    fi
}

## 更新Shell源码
function Git_PullShell() {
    echo -e "\n${WAITING} 开始更新仓库 /jd\n"
    cd ${ShellDir}
    git fetch --all
    ExitStatusShell=$?
    git reset --hard origin/source
    git pull
}

## 克隆scripts
function Git_CloneScripts() {
    echo -e "\n${WAITING} 开始克隆仓库 /jd/scripts\n"
    git clone -b j_scripts ${ScriptsURL} ${ScriptsDir}
    ExitStatusScripts=$?
}

## 更新scripts
function Git_PullScripts() {
    echo -e "\n${WAITING} 开始更新仓库 /jd/scripts\n"
    cd ${ScriptsDir}
    git fetch --all
    ExitStatusScripts=$?
    git reset --hard origin/j_scripts
    git pull
}

## 导入配置文件并组合函数
function Import_Conf() {
    if [ -f ${FileConf} ]; then
        . ${FileConf}
    fi
}

## 推送通知 pt_pin 标记备注（Helloworld库功能）
## 自行编辑 config 目录下的 account.json 配置文件
function NotifyAccountsRemarks() {
    if [ -f ${ScriptsDir}/tools/account.json ]; then
        [ -f ${ConfigDir}/account.json ] || cp -fv ${ShellDir}/sample/account.json ${ConfigDir}/account.json
        cp -rf ${ConfigDir}/account.json ${ScriptsDir}/tools/account.json
    fi
}

## 检测文件：scripts 仓库中的 docker/crontab_list.sh
## 检测定时任务是否有变化，此函数会在Log文件夹下生成四个文件，分别为：
## task.list      crontab.list中的所有任务清单，仅保留脚本名
## task-diy.list  自定义脚本中的所有任务清单，仅保留脚本名，主要用于定时变动判断
## js.list        上述检测文件中用来运行js脚本的清单（去掉后缀.js，非运行脚本不会包括在内）
## js-diy.list    自定义脚本导入的js脚本清单（去掉后缀.js，非运行脚本不会包括在内）
## js-add.list    如果上述检测文件增加了定时任务，这个文件内容将不为空
## js-drop.list   如果上述检测文件删除了定时任务，这个文件内容将不为空
function Diff_Cron() {
    if [ -f ${ListCron} ]; then
        if [ -n "${JD_DIR}" ]; then
            grep -E " j[drx]_\w+" ${ListCron} | perl -pe "s|.+ (j[drx]_\w+).*|\1|" | sort -u >${ListTask}
        else
            grep "${ShellDir}/" ${ListCron} | grep -E " j[drx]_\w+" | perl -pe "s|.+ (j[drx]_\w+).*|\1|" | sort -u >${ListTask}
        fi
        cat ${ListCronPublic} ${ToolsDir}/crontab_list.sh | grep -E "j[drx]_\w+\.js" | perl -pe "s|.+(j[drx]_\w+)\.js.+|\1|" | sort -u >${ListJs}

        if [ -f ${FileDiy} ]; then
            if [[ -n ${EnableExtraShell} && ${EnableExtraShell} == "true" ]]; then
                grep "my_scripts_list" ${FileDiy} | grep -v '#' | grep -ioE "\w+\.js|\w+\.py|\w+\.ts" | perl -pe "{s|\.js||; s|\.py||; s|\.ts||}" | grep -v 'Tokens' | sort -u >>${ListJs}
                grep "my_scripts_list" ${FileDiy} | grep -v '#' | grep -ioE "\w+\.js|\w+\.py|\w+\.ts" | perl -pe "{s|\.js||; s|\.py||; s|\.ts||}" | grep -v 'Tokens' | sort -u >>${ListTask}
                grep "my_scripts_list" ${FileDiy} | grep -v '#' | grep -ioE "\w+\.js|\w+\.py|\w+\.ts" | perl -pe "{s|\.js||; s|\.py||; s|\.ts||}" | grep -v 'Tokens' | sort -u >${ListDiyJs}
            fi
        fi

        grep -vwf ${ListTask} ${ListJs} >${ListJsAdd}
        grep -vwf ${ListJs} ${ListTask} >${ListJsDrop}

        if [ -f ${FileDiy} ]; then
            if [[ -n ${EnableExtraShell} && ${EnableExtraShell} == "true" ]]; then
                grep -vwf ${ListDiyTask} ${ListDiyJs} >>${ListJsAdd}
                grep -vwf ${ListDiyJs} ${ListDiyTask} >>${ListJsDrop}
                sort -u ${ListJsDrop} -o ${ListJsDrop}
                grep "my_scripts_list" ${FileDiy} | grep -v '#' | grep -ioE "\w+\.js|\w+\.py|\w+\.ts" | perl -pe "{s|\.js||; s|\.py||; s|\.ts||}" | grep -v 'Tokens' | sort -u >${ListDiyTask}
            fi
        fi
    else
        echo -e "${ListCron} 文件不存在，请先定义你自己的crontab.list...\n"
    fi
}

## 发送删除失效定时任务的消息
function Notify_DropTask() {
    cd ${ShellDir}
    node notify.js
    [ -f ${ContentDropTask} ] && rm -f ${ContentDropTask}
}

## 发送新的定时任务消息
function Notify_NewTask() {
    cd ${ShellDir}
    node notify.js
    [ -f ${ContentNewTask} ] && rm -f ${ContentNewTask}
}

## 检测配置文件版本
function Notify_Version() {
    ## 识别出两个文件的版本号
    VerConfSample=$(grep " Version: " ${FileConfSample} | perl -pe "s|.+v((\d+\.?){3})|\1|")
    [ -f ${FileConf} ] && VerConf=$(grep " Version: " ${FileConf} | perl -pe "s|.+v((\d+\.?){3})|\1|")

    ## 删除旧的发送记录文件
    [ -f "${SendCount}" ] && [[ $(cat ${SendCount}) != ${VerConfSample} ]] && rm -f ${SendCount}

    ## 识别出更新日期和更新内容
    UpdateDate=$(grep " Date: " ${FileConfSample} | awk -F ": " '{print $2}')
    UpdateContent=$(grep " Update Content: " ${FileConfSample} | awk -F ": " '{print $2}')

    ## 如果是今天，并且版本号不一致，则发送通知
    if [ -f ${FileConf} ] && [[ "${VerConf}" != "${VerConfSample}" ]] && [[ ${UpdateDate} == $(date "+%Y-%m-%d") ]]; then
        if [ ! -f ${SendCount} ]; then
            echo -e "日期: ${UpdateDate}\n版本: ${VerConf} -> ${VerConfSample}\n内容: ${UpdateContent}\n\n" | tee ${ContentVersion}
            echo -e "如需更新请手动操作，仅更新当天通知一次!" >>${ContentVersion}
            cd ${ShellDir}
            node notify.js
            echo -e "检查到配置文件有更新，已复制一份 config.sh.sample 到 ${ConfigDir} 目录"
            cp -fv ${FileConfSample} ${ConfigDir}/config.sh.sample
            echo ''
            if [ $? -eq 0 ]; then
                echo "${VerConfSample}" >${SendCount}
                [ -f ${ContentVersion} ] && rm -f ${ContentVersion}
            fi
        fi
    else
        [ -f ${ContentVersion} ] && rm -f ${ContentVersion}
        [ -f ${SendCount} ] && rm -f ${SendCount}
    fi
}

## npm install 子程序，判断是否为安卓，判断是否安装有yarn
function Npm_InstallSub() {
    if [ -n "${isTermux}" ]; then
        npm install --no-bin-links || npm install --no-bin-links --registry=https://registry.npm.taobao.org
    elif ! type yarn >/dev/null 2>&1; then
        npm install || npm install --registry=https://registry.npm.taobao.org
    else
        echo -e "检测到本机安装了 yarn，使用 yarn 替代 npm...\n"
        yarn install || yarn install --registry=https://registry.npm.taobao.org
    fi
}

## npm install
function Npm_Install() {
    cd ${ScriptsDir}
    if [[ "${PackageListOld}" != "$(cat package.json)" ]]; then
        echo -e "${WAITING} 检测到 package.json 有变化，运行 npm install...\n"
        Npm_InstallSub
        if [ $? -ne 0 ]; then
            echo -e "\n${ERROR} npm install 运行不成功，自动删除 ${ScriptsDir}/node_modules 后再次尝试一遍..."
            rm -rf ${ScriptsDir}/node_modules
        fi
        echo
    fi

    if [ ! -d ${ScriptsDir}/node_modules ]; then
        echo -e "运行 npm install...\n"
        Npm_InstallSub
        if [ $? -ne 0 ]; then
            echo -e "\nnpm install 运行不成功，自动删除 ${ScriptsDir}/node_modules...\n"
            echo -e "请进入 ${ScriptsDir} 目录后按照wiki教程手动运行 npm install...\n"
            echo -e "当 npm install 失败时，如果检测到有新任务或失效任务，只会输出日志，不会自动增加或删除定时任务...\n"
            echo -e "3...\n"
            sleep 1
            echo -e "2...\n"
            sleep 1
            echo -e "1...\n"
            sleep 1
            rm -rf ${ScriptsDir}/node_modules
        fi
    fi
}

## 输出是否有新的定时任务
function Output_ListJsAdd() {
    if [ -s ${ListJsAdd} ]; then
        echo -e "检测到有新的定时任务：\n"
        cat ${ListJsAdd}
        echo
    fi
}

## 输出是否有失效的定时任务
function Output_ListJsDrop() {
    if [ ${ExitStatusScripts} -eq 0 ] && [ -s ${ListJsDrop} ]; then
        echo -e "检测到有失效的定时任务：\n"
        cat ${ListJsDrop}
        echo
    fi
}

## 自动删除失效的脚本与定时任务，需要5个条件：1.AutoDelCron 设置为 true；2.正常更新js脚本，没有报错；3.js-drop.list不为空；4.crontab.list存在并且不为空；5.已经正常运行过npm install
## 检测文件：scripts 仓库中的 docker/crontab_list.sh
## 如果检测到某个定时任务在上述检测文件中已删除，那么在本地也删除对应定时任务
function Del_Cron() {
    if [ "${AutoDelCron}" = "true" ] && [ -s ${ListJsDrop} ] && [ -s ${ListCron} ] && [ -d ${ScriptsDir}/node_modules ]; then
        echo -e "开始尝试自动删除定时任务如下：\n"
        cat ${ListJsDrop}
        echo
        JsDrop=$(cat ${ListJsDrop})
        for Cron in ${JsDrop}; do
            perl -i -ne "{print unless / ${Cron}( |$)/}" ${ListCron}
        done
        cat ${ListCron} | sort -k2n | uniq > ${ListCron}.uniq
        mv ${ListCron}.uniq ${ListCron}
        crontab ${ListCron}
        echo -e "成功删除失效的脚本与定时任务，当前的定时任务清单如下：\n\n--------------------------------------------------------------\n"
        crontab -l
        echo -e "\n--------------------------------------------------------------\n"
        if [ -d ${ScriptsDir}/node_modules ]; then
            echo -e "删除失效的定时任务：\n\n${JsDrop}" >${ContentDropTask}
            Notify_DropTask
        fi
    fi
}

## 自动增加新的定时任务，需要5个条件：1.AutoAddCron 设置为 true；2.正常更新js脚本，没有报错；3.js-add.list不为空；4.crontab.list存在并且不为空；5.已经正常运行过npm install
## 检测文件：scripts 仓库中的 docker/crontab_list.sh
## 如果检测到检测文件中增加新的定时任务，那么在本地也增加
## 本功能生效时，会自动从检测文件新增加的任务中读取时间，该时间为北京时间
function Add_Cron() {
    if [ "${AutoAddCron}" = "true" ] && [ -s ${ListJsAdd} ] && [ -s ${ListCron} ] && [ -d ${ScriptsDir}/node_modules ]; then
        echo -e "开始尝试自动添加定时任务如下：\n"
        cat ${ListJsAdd}
        echo
        JsAdd=$(cat ${ListJsAdd})

        for Cron in ${JsAdd}; do
            if [[ ${Cron} == jd_bean_sign ]]; then
                echo "4 0,9 * * * bash ${ShellJd} ${Cron}" >>${ListCron}
            else
                cat ${ListCronPublic} ${ToolsDir}/crontab_list.sh | grep -E "\/${Cron}\." | perl -pe "s|(^.+)node */scripts/(j[drx]_\w+)\.js.+|\1bash ${ShellJd} \2|" >>${ListCron}
            fi
        done

        if [ $? -eq 0 ]; then
            cat ${ListCron} | sort -k2n | uniq > ${ListCron}.uniq
            mv ${ListCron}.uniq ${ListCron}
            crontab ${ListCron}
            echo -e "成功添加新的定时任务，当前的定时任务清单如下：\n\n--------------------------------------------------------------\n"
            crontab -l
            echo -e "\n--------------------------------------------------------------\n"
            if [ -d ${ScriptsDir}/node_modules ]; then
                echo -e "成功添加新的定时任务：\n\n${JsAdd}" >${ContentNewTask}
                Notify_NewTask
            fi
        else
            echo -e "添加新的定时任务出错，请手动添加...\n"
            if [ -d ${ScriptsDir}/node_modules ]; then
                echo -e "尝试自动添加以下新的定时任务出错，请手动添加：\n\n${JsAdd}" >${ContentNewTask}
                Notify_NewTask
            fi
        fi
    fi
}

## 同步自定义脚本
function ExtraShellSync() {
    ## 自动同步用户自定义的diy.sh
    if [[ ${EnableExtraShellUpdate} == true ]]; then
        wget -q --no-check-certificate $EnableExtraShellURL -O ${FileDiy}.new
        if [ $? -eq 0 ]; then
            mv -f "${FileDiy}.new" "${FileDiy}"
            echo -e "${SUCCESS} 自定义脚本同步完成\n"
            sleep 1s
        else
            echo -e "${ERROR} 自定义脚本同步失败，请检查原因或再次执行更新命令......\n"
            sleep 3s
        fi
        [ -f "${FileDiy}.new" ] && rm -rf "${FileDiy}.new"
    fi
}

## 自定义脚本功能
function ExtraShell() {
    ## 调用用户自定义的diy.sh
    if [[ ${EnableExtraShell} == true ]]; then
        if [ -f ${FileDiy} ]; then
            . ${FileDiy}
        else
            echo -e "${FileDiy} 文件不存在，跳过执行自定义 DIY 脚本...\n"
            echo -e ''
        fi
    fi
}

## 一键执行所有活动脚本
function Run_All() {
    ## 默认将 "jd、jx、jr" 开头的活动脚本加入其中
    rm -rf ${FileRunAll}
    Tips='echo -e "\n\\033[32m[Tips]\\033[0m 执行期间如果卡住，可按回车键尝试或通过命令 Ctrl + Z 跳过继续执行剩余活动脚本，倒计时 3 秒后开始执行\n" && sleep 1 && echo -e "3..." && sleep 1 && echo -e "2.." && sleep 1 && echo -e "1." && sleep 1'

    ## 调整执行顺序
    cat ${ListJs} | grep -v "jd_bean_change|jd_joy_reward|blueCoin" >>${FileRunAll}
    sed -i "1i\jd_bean_change" ${FileRunAll} ## 置顶京豆变动通知

    ## 去除不适合的活动脚本
    sed -i '/jd_delCoupon/d' ${FileRunAll} ## "删除优惠券"
    sed -i '/jd_family/d' ${FileRunAll}    ## "京东家庭号"

    ## 去除执行时间过长的脚本
    sed -i '/jd_try/d' ${FileRunAll}

    sed -i "s/^/jtask &/g" ${FileRunAll}
    sed -i 's/$/& now/g' ${FileRunAll}

    ## 加入说明
    sed -i "1i\ ${Tips}" ${FileRunAll}
    sed -i '1i\#!/bin/env bash' ${FileRunAll}
    # sed -i '/^\s*$/d' ${FileRunAll}
}

function Title() {
    echo -e "\n+----------------- 开 始 执 行 更 新 脚 本 -----------------+"
    echo -e ''
    echo -e "   脚本根目录：${ShellDir}"
    echo -e ''
    echo -e "   Scripts 仓库目录：${ScriptsDir}"
    echo -e ''
    echo -e "   当前系统时间：$(date "+%Y-%m-%d %H:%M")"
    echo -e ''
    echo -e "+-----------------------------------------------------------+"
}

function Notice() {
    echo -e "\n+----------------------- 郑 重 提 醒 -----------------------+"
    echo -e ""
    echo -e "  本项目目前闭源并且仅面向内部开放，脚本免费使用仅供于学习！"
    echo -e ""
    echo -e "  圈内资源禁止以任何形式发布到咸鱼等国内平台，否则后果自负！"
    echo -e ""
    echo -e "  我们始终致力于打击使用本项目进行违法贩卖行为的个人或组织！"
    echo -e ""
    echo -e "  我们不会放纵某些行为，不保证不采取非常手段，请勿挑战底线！"
    echo -e ""
    echo -e "+-----------------------------------------------------------+\n"
}

## 在日志中记录时间与路径
Title
## 导入配置文件
Import_Conf
## 更新crontab
[[ $(date "+%-H") -le 2 ]] && Update_Cron
## 更新源码
[ -d ${ShellDir}/.git ] && Git_PullShell
## 克隆或更新js脚本
[ -f ${ScriptsDir}/package.json ] && PackageListOld=$(cat ${ScriptsDir}/package.json)
[ -d ${ScriptsDir}/.git ] && Git_PullScripts || Git_CloneScripts
# [ -f ${ScriptsDir}/sendNotify.js ] && sed -i '/desp += author;/a\  if (text.includes("FreeFuck") || desp.includes("FreeFuck")) return ;' ${ScriptsDir}/sendNotify.js
Notice
## 执行各函数
if [[ ${ExitStatusScripts} -eq 0 ]]; then
    echo -e "${SUCCESS} Scripts 仓库更新完成\n"
    ExtraShellSync
    NotifyAccountsRemarks
    [ -d ${ScriptsDir}/node_modules ] && Notify_Version
    Diff_Cron
    Npm_Install
    Output_ListJsAdd
    Output_ListJsDrop
    Del_Cron
    Add_Cron
    ExtraShell
    Run_All
else
    echo -e "${ERROR} Scripts 仓库更新失败，请检查原因或再次执行更新命令...\n"
    ExtraShellSync
    NotifyAccountsRemarks
    ExtraShell
    Run_All
fi
