#!/bin/bash
## Author: SuperManito
## Modified: 2022-01-20

## 目录
RootDir=${WORK_DIR}
ShellDir=$RootDir/shell
ScriptsDir=$RootDir/scripts
UtilsDir=$RootDir/utils
PanelDir=$RootDir/web
ConfigDir=$RootDir/config
SampleDir=$RootDir/sample
LogDir=$RootDir/log
logDir=$RootDir/log
logdir=$RootDir/log
LogTmpDir=$LogDir/.tmp
SignDir=$UtilsDir/.sign
CodeDir=$LogDir/ShareCodes
OwnDir=$RootDir/own
RawDir=$OwnDir/raw
BotDir=$RootDir/jbot
BotLogDir=$LogDir/bot
BotRepoDir=$UtilsDir/dockerbot
RootDir_NodeModules=$RootDir/node_modules
ScriptsDir_NodeModules=$ScriptsDir/node_modules

## 文件
FileCode=$ShellDir/code.sh
FileRunAll=$ShellDir/runall.sh
FileConfUser=$ConfigDir/config.sh
FileConfSample=$SampleDir/config.sample.sh
FileAuth=$ConfigDir/auth.json
FileAuthSample=$SampleDir/auth.json
FileAccountConf=$ConfigDir/account.json
FileAccountConfSample=$SampleDir/account.json
FileExtra=$ConfigDir/extra.sh
FileNotify=$UtilsDir/notify.js
FileSendNotify=$UtilsDir/sendNotify.js
FileSendNotifyScripts=$ScriptsDir/sendNotify.js
FileSendMark=$RootDir/send_mark
FilePm2List=$RootDir/.pm2_list.log
FileProcessList=$RootDir/.process_list.log
FileUpdateCookie=$UtilsDir/UpdateCookies.js
FileScriptDictionary=$ShellDir/script_name.sh

## 清单
ListCronScripts=$ScriptsDir/docker/crontab_list.sh
ListCrontabUser=$ConfigDir/crontab.list
ListCrontabSample=$SampleDir/crontab.sample.list
ListTaskScripts=$LogTmpDir/task_scripts.list
ListTaskUser=$LogTmpDir/task_user.list
ListTaskAdd=$LogTmpDir/task_add.list
ListTaskDrop=$LogTmpDir/task_drop.list
ListOwnScripts=$LogTmpDir/own_scripts.list
ListOwnUser=$LogTmpDir/own_user.list
ListOwnAdd=$LogTmpDir/own_add.list
ListOwnRepoAdd=$LogTmpDir/own_repo_add.list
ListOwnRawAdd=$LogTmpDir/own_raw_add.list
ListOwnDrop=$LogTmpDir/own_drop.list
ListOwnRepoDrop=$LogTmpDir/own_repo_drop.list
ListOwnRawDrop=$LogTmpDir/own_raw_drop.list
ListOwnAll=$LogTmpDir/own_all.list

## 字符串
ARCH=$(uname -m)
TaskCmd="task"
ContrlCmd="taskctl"
UpdateCmd="update"
TIME_FORMAT="+%Y-%m-%d %T:%N"
RED='\033[31m'
GREEN='\033[32m'
YELLOW='\033[33m'
BLUE='\033[34m'
PLAIN='\033[0m'
BOLD='\033[1m'
SUCCESS='[\033[32mOK\033[0m]'
COMPLETE='[\033[32mDone\033[0m]'
WARN='[\033[33mWARN\033[0m]'
ERROR='[\033[31mERROR\033[0m]'
WORKING='[\033[34m*\033[0m]'
EXAMPLE='[\033[32m参考命令\033[0m]'
TIPS='[\033[32m友情提示\033[0m]'
COMMAND_ERROR="$ERROR 命令错误，请确认后重新输入！"
TOO_MANY_COMMANDS="$ERROR 输入命令过多，请确认后重新输入！"
RawDirUtils="jdCookie\.js|USER_AGENTS|sendNotify\.js|node_modules|\.json\b"
ShieldingScripts="\.json\b|jd_update\.js|jd_env_copy\.js|index\.js|ql\.js|jd_enen\.js|jd_disable\.py|jd_updateCron\.ts"
ShieldingKeywords="AGENTS|Cookie|cookie|Token|ShareCodes|sendNotify|^JDJR|Validator|validate|ZooFaker|MovementFaker|tencentscf|^api_test|^app\.|^main\.|jdEnv|${ShieldingScripts}"

## URL
GithubProxy="https://endpoint.fastgit.org/"
ScriptsRepoBranch="j_scripts"
ScriptsRepoGitUrl="https://gitee.com/getready/my_actions.git"
BotRepoGitUrl="${GithubProxy}https://github.com/SuMaiKaDe/bot.git"
SignsRepoGitUrl="git@jd_base_gitee:supermanito/panel_sign_json.git"

## 用于组合互助码的数组（保留部分限时活动变量）
## 脚本日志所在的文件夹名称
name_script=(
    jd_fruit
    jd_pet
    jd_plantBean
    jd_dreamFactory
    jd_jdfactory
    jd_sgmh
    jd_cfd
    jd_health
    jd_cash
    jd_bookshop
    jd_global
    jd_carnivalcity
    jd_city
)
## 助力码变量名 My<xxx>
name_config=(
    Fruit
    Pet
    Bean
    DreamFactory
    JdFactory
    Sgmh
    Cfd
    Health
    Cash
    BookShop
    Global
    Carni
    City
)
## 脚本输出内容中互助码所在行的中文标识
name_chinese=(
    东东农场
    东东萌宠
    京东种豆得豆
    京喜工厂
    东东工厂
    闪购盲盒
    京喜财富岛
    东东健康社区
    签到领现金
    口袋书店
    环球挑战赛
    京东手机狂欢城
    城城领现金
)
## 用于 Bot 提交的命令前缀
bot_command=(
    farm
    pet
    bean
    jxfactory
    ddfactory
    sgmh
    cfd
    health
    sign
    bookshop
    global
    carnivalcity
    city
)

## 导入配置文件
function Import_Config() {
    if [ -f $FileConfUser ]; then
        . $FileConfUser
        if [ -z "${Cookie1}" ]; then
            echo -e "\n$ERROR 请先在 $FileConfUser 配置文件中配置好 Cookie ！\n"
            exit
        fi
    else
        echo -e "\n$ERROR 配置文件 $FileConfUser 不存在，请检查是否移动过该文件！\n"
        exit
    fi
}
function Import_Config_Not_Check() {
    if [ -f $FileConfUser ]; then
        . $FileConfUser >/dev/null 2>&1
    fi
}

## 输出命令错误提示
function Output_Command_Error() {
    local Mod=$1
    case $Mod in
    1)
        Help
        echo -e "$COMMAND_ERROR\n"
        ;;
    2)
        Help
        echo -e "$TOO_MANY_COMMANDS\n"
        ;;
    esac
}

## 统计账号数量
function Count_UserSum() {
    for ((i = 1; i <= 0x3e8; i++)); do
        local Tmp=Cookie$i
        local CookieTmp=${!Tmp}
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

## 组合互助码
function Combin_ShareCodes() {
    ## 读取已导出的互助码类变量（自动互助）
    if [[ $AutoHelpOther == true ]] && [[ -d $CodeDir ]]; then
        if [[ $(ls $CodeDir) ]]; then
            local LatestLog=$(ls -r $CodeDir | head -1)
            . $CodeDir/$LatestLog
        fi
    fi
    export FRUITSHARECODES=$(Combin_Sub ForOtherFruit)                  ## 东东农场 - (jd_fruit.js)
    export PETSHARECODES=$(Combin_Sub ForOtherPet)                      ## 东东萌宠 - (jd_pet.js)
    export PLANT_BEAN_SHARECODES=$(Combin_Sub ForOtherBean)             ## 种豆得豆 - (jd_plantBean.js)
    export DDFACTORY_SHARECODES=$(Combin_Sub ForOtherJdFactory)         ## 东东工厂 - (jd_jdfactory.js)
    export DREAM_FACTORY_SHARE_CODES=$(Combin_Sub ForOtherDreamFactory) ## 京喜工厂 - (jd_dreamFactory.js)
    export JDSGMH_SHARECODES=$(Combin_Sub ForOtherSgmh)                 ## 闪购盲盒 - (jd_sgmh.js)
    export JDHEALTH_SHARECODES=$(Combin_Sub ForOtherHealth)             ## 东东健康社区 - (jd_health.js)
    export JD_CASH_SHARECODES=$(Combin_Sub ForOtherCash)                ## 签到领现金 - (jd_cash.js)
    export BOOKSHOP_SHARECODES=$(Combin_Sub ForOtherBookShop)           ## 口袋书店 - (jd_bookshop.js)
    export JDGLOBAL_SHARECODES=$(Combin_Sub ForOtherGlobal)             ## 环球挑战赛 - (jd_global.js)
    export JD818_SHARECODES=$(Combin_Sub ForOtherCarni)                 ## 手机狂欢城 - (jd_carnivalcity.js)
    export CITY_SHARECODES=$(Combin_Sub ForOtherCity)                   ## 城城分现金 - (jd_city.js)
}

## 组合Cookie
function Combin_Cookie() {
    export JD_COOKIE=$(Combin_Sub Cookie)
}

## 推送通知
function Notify() {
    local title=$(echo "$1" | perl -pe 's|-|_|g')
    local msg="$(echo -e "$2")"
    if [ -d $ScriptsDir_NodeModules ]; then
        node $FileNotify "$title" "$msg"
    fi
}

## 创建目录
function Make_Dir() {
    local Dir=$1
    [ ! -d $Dir ] && mkdir -p $Dir
}

## 同步定时清单
function Synchronize_Crontab() {
    if [[ $(cat $ListCrontabUser) != $(crontab -l) ]]; then
        crontab $ListCrontabUser
    fi
}

## 查询脚本名，$1 为脚本名
function Query_Name() {
    local FileName=$1
    grep "\$ \=" $FileName | grep -Eiq ".*Env"
    if [ $? -eq 0 ]; then
        local Tmp=$(grep "\$ \=" $FileName | grep -Ei ".*Env" | head -1 | awk -F "\(" '{print $2}' | awk -F "\)" '{print $1}' | sed 's:^.\(.*\).$:\1:')
    else
        local Tmp=$(grep -w "script-path" $FileName | head -1 | sed "s/\W//g" | sed "s/[0-9a-zA-Z_]//g")
    fi
    if [[ ${Tmp} ]]; then
        ScriptName=${Tmp}
    else
        ScriptName="<未知>"
    fi
}

## 命令帮助
function Help() {
    case ${ARCH} in
    armv7l | armv6l)
        echo -e "
 ❖  ${BLUE}$TaskCmd <name/path/url> now${PLAIN}          ✧ 普通执行，前台运行并在命令行输出进度，可选参数(支持多个，加在末尾)：${BLUE}-<m/w/p/r/d/c/b>${PLAIN}
 ❖  ${BLUE}$TaskCmd <name/path> pkill${PLAIN}            ✧ 终止执行，根据脚本匹配对应的进程并立即杀死，脚本死循环时建议使用
 ❖  ${BLUE}source runall${PLAIN}                     ✧ 全部执行，在选择运行模式后执行指定范围的脚本(交互)，非常耗时不要盲目使用

 ❖  ${BLUE}$TaskCmd list${PLAIN}                         ✧ 列出本地脚本清单，扩展用法(加在末尾): ${BLUE}<path>${PLAIN} 列出指定路径下的脚本
 ❖  ${BLUE}$TaskCmd ps${PLAIN}                           ✧ 查看资源消耗情况和正在运行的脚本进程，当检测到内存占用较高时自动尝试释放
 ❖  ${BLUE}$TaskCmd exsc${PLAIN}                         ✧ 导出互助码变量和助力格式，互助码从最后一个日志提取，受日志内容影响
 ❖  ${BLUE}$TaskCmd rmlog${PLAIN}                        ✧ 删除项目产生的日志文件，默认检测7天以前的日志，扩展用法(加在末尾): ${BLUE}<days>${PLAIN} 指定天数
 ❖  ${BLUE}$TaskCmd cleanup${PLAIN}                      ✧ 检测并终止卡死的脚本进程以此释放内存占用，扩展用法(加在末尾): ${BLUE}<hours>${PLAIN} 指定时间
 ❖  ${BLUE}$TaskCmd cookie <cmd>${PLAIN}                 ✧ 检测本地账号是否有效 ${BLUE}check${PLAIN}、使用WSKEY更新CK ${BLUE}update${PLAIN}，扩展用法(加在末尾): ${BLUE}<num>${PLAIN} 指定账号
 ❖  ${BLUE}$TaskCmd env <cmd>${PLAIN}                    ✧ 管理全局环境变量功能(交互)，添加 ${BLUE}add${PLAIN}、删除 ${BLUE}del${PLAIN}、修改 ${BLUE}edit${PLAIN}、查询 ${BLUE}search${PLAIN}，支持快捷命令
 ❖  ${BLUE}$TaskCmd notify <title> <content> ${PLAIN}    ✧ 自定义推送通知消息，参数为标题加内容，支持转义字符

 ❖  ${BLUE}$TaskCmd repo <url> <branch> <path>${PLAIN}   ✧ 添加 Own Repo 扩展仓库功能，拉取仓库至本地后自动添加相关变量并配置定时任务
 ❖  ${BLUE}$TaskCmd raw <url>${PLAIN}                    ✧ 添加 Own RawFile 扩展脚本功能，单独拉取脚本至本地后自动添加相关变量并配置定时任务

 ❖  ${BLUE}$ContrlCmd server status${PLAIN}             ✧ 查看各服务的详细信息，包括运行状态、创建时间、处理器占用、内存占用、运行时长
 ❖  ${BLUE}$ContrlCmd hang <cmd>${PLAIN}                ✧ 后台挂机程序(后台循环执行活动脚本)功能控制，启动或重启 ${BLUE}up${PLAIN}、停止 ${BLUE}down${PLAIN}、查看日志 ${BLUE}logs${PLAIN}
 ❖  ${BLUE}$ContrlCmd panel <cmd>${PLAIN}               ✧ 控制面板和网页终端功能控制，开启或重启 ${BLUE}on${PLAIN}、关闭 ${BLUE}off${PLAIN}、登录信息 ${BLUE}info${PLAIN}、重置密码 ${BLUE}respwd${PLAIN}
 ❖  ${BLUE}$ContrlCmd jbot <cmd>${PLAIN}                ✧ Telegram Bot 功能控制，启动或重启 ${BLUE}start${PLAIN}、停止 ${BLUE}stop${PLAIN}、查看日志 ${BLUE}logs${PLAIN}
 ❖  ${BLUE}$ContrlCmd env <cmd>${PLAIN}                 ✧ 执行环境软件包相关命令(不支持 TypeSciprt 和 Python )，安装 ${BLUE}install${PLAIN}、修复 ${BLUE}repairs${PLAIN}
 ❖  ${BLUE}$ContrlCmd check files${PLAIN}               ✧ 检查项目相关配置文件是否存在，如果缺失就从模板导入

 ❖  ${BLUE}$UpdateCmd${PLAIN} | ${BLUE}$UpdateCmd all${PLAIN}               ✧ 全部更新，包括项目源码、所有仓库和脚本、自定义脚本等
 ❖  ${BLUE}$UpdateCmd <cmd/path>${PLAIN}                 ✧ 单独更新，项目源码 ${BLUE}shell${PLAIN}、Scripts主要仓库 ${BLUE}scripts${PLAIN}、Own扩展仓库 ${BLUE}own${PLAIN}、所有仓库 ${BLUE}repo${PLAIN}
                                                  Raw 脚本 ${BLUE}raw${PLAIN}、自定义脚本 ${BLUE}extra${PLAIN}、指定仓库 ${BLUE}<path>${PLAIN}

 ❋ 基本命令注释：
    ${BLUE}<name>${PLAIN} 脚本名（仅限scripts目录）;  ${BLUE}<path>${PLAIN} 相对路径或绝对路径;  ${BLUE}<url>${PLAIN} 脚本链接地址;  ${BLUE}<cmd>${PLAIN} 固定可选的子命令

 ❋ 用于执行脚本的可选参数： 
    ${BLUE}-m${PLAIN} | ${BLUE}--mute${PLAIN}          静默运行，不推送任何通知消息
    ${BLUE}-w${PLAIN} | ${BLUE}--wait${PLAIN}          等待执行，等待指定时间后再运行任务，参数后面需跟时间值
    ${BLUE}-p${PLAIN} | ${BLUE}--proxy${PLAIN}         下载代理，仅适用于执行位于远程仓库的脚本
    ${BLUE}-r${PLAIN} | ${BLUE}--rapid${PLAIN}         迅速模式，不组合互助码等步骤降低脚本执行前耗时
    ${BLUE}-d${PLAIN} | ${BLUE}--delay${PLAIN}         延迟执行，随机倒数一定秒数后再执行脚本
    ${BLUE}-c${PLAIN} | ${BLUE}--cookie${PLAIN}        指定账号运行，参数后面需跟账号序号，多个需用 \",\" 隔开，账号区间用 \"-\" 连接
    ${BLUE}-b${PLAIN} | ${BLUE}--background${PLAIN}    后台运行，不在前台输出脚本执行进度
"
        ;;
    *)
        echo -e "
 ❖  ${BLUE}$TaskCmd <name/path/url> now${PLAIN}          ✧ 普通执行，前台运行并在命令行输出进度，可选参数(支持多个，加在末尾)：${BLUE}-<m/w/p/r/d/c/b>${PLAIN}
 ❖  ${BLUE}$TaskCmd <name/path/url> conc${PLAIN}         ✧ 并发执行，后台运行不在命令行输出进度，可选参数(支持多个，加在末尾)：${BLUE}-<m/w/p/r/d/c>${PLAIN}
 ❖  ${BLUE}$TaskCmd <name/path> pkill${PLAIN}            ✧ 终止执行，根据脚本匹配对应的进程并立即杀死，脚本死循环时建议使用
 ❖  ${BLUE}source runall${PLAIN}                     ✧ 全部执行，在选择运行模式后执行指定范围的脚本(交互)，非常耗时不要盲目使用

 ❖  ${BLUE}$TaskCmd list${PLAIN}                         ✧ 列出本地脚本清单，扩展用法(加在末尾): ${BLUE}<path>${PLAIN} 列出指定路径下的脚本
 ❖  ${BLUE}$TaskCmd ps${PLAIN}                           ✧ 查看资源消耗情况和正在运行的脚本进程，当检测到内存占用较高时自动尝试释放
 ❖  ${BLUE}$TaskCmd exsc${PLAIN}                         ✧ 导出互助码变量和助力格式，互助码从最后一个日志提取，受日志内容影响
 ❖  ${BLUE}$TaskCmd rmlog${PLAIN}                        ✧ 删除项目产生的日志文件，默认检测7天以前的日志，扩展用法(加在末尾): ${BLUE}<days>${PLAIN} 指定天数
 ❖  ${BLUE}$TaskCmd cleanup${PLAIN}                      ✧ 检测并终止卡死的脚本进程以此释放内存占用，扩展用法(加在末尾): ${BLUE}<hours>${PLAIN} 指定时间
 ❖  ${BLUE}$TaskCmd cookie <cmd>${PLAIN}                 ✧ 检测本地账号是否有效 ${BLUE}check${PLAIN}、使用WSKEY更新CK ${BLUE}update${PLAIN}，扩展用法(加在末尾): ${BLUE}<num>${PLAIN} 指定账号
 ❖  ${BLUE}$TaskCmd env <cmd>${PLAIN}                    ✧ 管理全局环境变量功能(交互)，添加 ${BLUE}add${PLAIN}、删除 ${BLUE}del${PLAIN}、修改 ${BLUE}edit${PLAIN}、查询 ${BLUE}search${PLAIN}，支持快捷命令
 ❖  ${BLUE}$TaskCmd notify <title> <content> ${PLAIN}    ✧ 自定义推送通知消息，参数为标题加内容，支持转义字符

 ❖  ${BLUE}$TaskCmd repo <url> <branch> <path>${PLAIN}   ✧ 添加 Own Repo 扩展仓库功能，拉取仓库至本地后自动添加相关变量并配置定时任务
 ❖  ${BLUE}$TaskCmd raw <url>${PLAIN}                    ✧ 添加 Own RawFile 扩展脚本功能，单独拉取脚本至本地后自动添加相关变量并配置定时任务

 ❖  ${BLUE}$ContrlCmd server status${PLAIN}             ✧ 查看各服务的详细信息，包括运行状态、创建时间、处理器占用、内存占用、运行时长
 ❖  ${BLUE}$ContrlCmd hang <cmd>${PLAIN}                ✧ 后台挂机程序(后台循环执行活动脚本)功能控制，启动或重启 ${BLUE}up${PLAIN}、停止 ${BLUE}down${PLAIN}、查看日志 ${BLUE}logs${PLAIN}
 ❖  ${BLUE}$ContrlCmd panel <cmd>${PLAIN}               ✧ 控制面板和网页终端功能控制，开启或重启 ${BLUE}on${PLAIN}、关闭 ${BLUE}off${PLAIN}、登录信息 ${BLUE}info${PLAIN}、重置密码 ${BLUE}respwd${PLAIN}
 ❖  ${BLUE}$ContrlCmd jbot <cmd>${PLAIN}                ✧ Telegram Bot 功能控制，启动或重启 ${BLUE}start${PLAIN}、停止 ${BLUE}stop${PLAIN}、查看日志 ${BLUE}logs${PLAIN}
 ❖  ${BLUE}$ContrlCmd env <cmd>${PLAIN}                 ✧ 执行环境软件包相关命令(支持 TypeSciprt 和 Python )，安装 ${BLUE}install${PLAIN}、修复 ${BLUE}repairs${PLAIN}
 ❖  ${BLUE}$ContrlCmd check files${PLAIN}               ✧ 检查项目相关配置文件是否存在，如果缺失就从模板导入

 ❖  ${BLUE}$UpdateCmd${PLAIN} | ${BLUE}$UpdateCmd all${PLAIN}               ✧ 全部更新，包括项目源码、所有仓库和脚本、自定义脚本等
 ❖  ${BLUE}$UpdateCmd <cmd/path>${PLAIN}                 ✧ 单独更新，项目源码 ${BLUE}shell${PLAIN}、Scripts主要仓库 ${BLUE}scripts${PLAIN}、Own扩展仓库 ${BLUE}own${PLAIN}、所有仓库 ${BLUE}repo${PLAIN}
                                                  Raw 脚本 ${BLUE}raw${PLAIN}、自定义脚本 ${BLUE}extra${PLAIN}、指定仓库 ${BLUE}<path>${PLAIN}

 ❋ 基本命令注释：
    ${BLUE}<name>${PLAIN} 脚本名（仅限scripts目录）;  ${BLUE}<path>${PLAIN} 相对路径或绝对路径;  ${BLUE}<url>${PLAIN} 脚本链接地址;  ${BLUE}<cmd>${PLAIN} 固定可选的子命令

 ❋ 用于执行脚本的可选参数： 
    ${BLUE}-m${PLAIN} | ${BLUE}--mute${PLAIN}          静默运行，不推送任何通知消息
    ${BLUE}-w${PLAIN} | ${BLUE}--wait${PLAIN}          等待执行，等待指定时间后再运行任务，参数后面需跟时间值
    ${BLUE}-p${PLAIN} | ${BLUE}--proxy${PLAIN}         下载代理，仅适用于执行位于远程仓库的脚本
    ${BLUE}-r${PLAIN} | ${BLUE}--rapid${PLAIN}         迅速模式，不组合互助码等步骤降低脚本执行前耗时
    ${BLUE}-d${PLAIN} | ${BLUE}--delay${PLAIN}         延迟执行，随机倒数一定秒数后再执行脚本
    ${BLUE}-c${PLAIN} | ${BLUE}--cookie${PLAIN}        指定账号运行，参数后面需跟账号序号，多个需用 \",\" 隔开，账号区间用 \"-\" 连接
    ${BLUE}-b${PLAIN} | ${BLUE}--background${PLAIN}    后台运行，不在前台输出脚本执行进度
"
        ;;
    esac
}
