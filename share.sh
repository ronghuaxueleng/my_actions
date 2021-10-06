#!/usr/bin/env bash
## Author: SuperManito
## Modified: 2021-10-05

## 目录
ShellDir=${JD_DIR}
ScriptsDir=$ShellDir/scripts
UtilsDir=$ShellDir/utils
PanelDir=$ShellDir/web
ConfigDir=$ShellDir/config
SampleDir=$ShellDir/sample
LogDir=$ShellDir/log
logDir=$ShellDir/log
logdir=$ShellDir/log
LogTmpDir=$LogDir/.tmp
SignDir=$UtilsDir/sign
CodeDir=$LogDir/ShareCodes
OwnDir=$ShellDir/own
RawDir=$OwnDir/raw
BotDir=$ShellDir/jbot
BotLogDir=$LogDir/bot
BotRepositoryDir=$UtilsDir/dockerbot
ShellDir_NodeModules=$ShellDir/node_modules
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
FileSendMark=$ShellDir/send_mark
FilePm2List=$ShellDir/pm2_list.log
FileUpdateCookie=$PanelDir/updateCookies.js
FileScriptDictionary=$UtilsDir/script_name.sh

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
ListOwnDrop=$LogTmpDir/own_drop.list
ListOwnAll=$LogTmpDir/own_all.list

## 字符串
Arch=$(uname -m)
TaskCmd="task"
ContrlCmd="taskctl"
UpdateCmd="update"
TIME="+%Y-%m-%d %T"
SUCCESS='[\033[32mOK\033[0m]'
COMPLETE='[\033[32mDone\033[0m]'
WARN='[\033[33mWARN\033[0m]'
ERROR='[\033[31mERROR\033[0m]'
WORKING='[\033[34m*\033[0m]'
COMMAND_ERROR="$ERROR 命令错误，请确认后重新输入！"
TOO_MANY_COMMANDS="$ERROR 输入命令过多，请确认后重新输入！"
ShieldingScripts="\.json\b|jd_update\.js|jd_env_copy\.js|index\.js|ql\.js|jd_enen\.js|jd_disable\.py|jd_updateCron\.ts"
ShieldingKeywords="AGENTS|Cookie|cookie|Token|ShareCodes|sendNotify|JDJR|validate|ZooFaker|MovementFaker|tencentscf|api_test|app\.|main\.|jdEnv|${ShieldingScripts}"

## URL
GithubProxy="https://ghproxy.com/"
BotRepositoryUrl="${GithubProxy}https://github.com/SuMaiKaDe/bot.git"
SignsRepositoryUrl="git@jd_base_gitee:supermanito/panel_sign_json.git"

## 用于组合互助码的数组（保留部分限时活动变量）
## 脚本日志所在的文件夹名称
name_script=(
    jd_fruit
    jd_pet
    jd_plantBean
    jd_dreamFactory
    jd_jdfactory
    jd_jxnc
    jd_bookshop
    jd_cash
    jd_sgmh
    jd_health
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
    Jxnc
    BookShop
    Cash
    Sgmh
    Health
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
    京喜农场
    口袋书店
    签到领现金
    闪购盲盒
    东东健康社区
    环球挑战赛
    京东手机狂欢城
    城城领现金
)

## 导入配置文件
function Import_Config() {
    if [ -f $FileConfUser ]; then
        timeStamp=`date -d "$current" +%s%N`
        python $ShellDir/updateConfig.py $FileConfUser.$timeStamp
        . $FileConfUser.$timeStamp
        rm -rf $FileConfUser.$timeStamp
        if [ -z "${Cookie1}" ]; then
            echo -e "\n$ERROR 请先在 $FileConfUser 配置文件中配置好 Cookie ！\n"
            exit 1
        fi
    else
        echo -e "\n$ERROR 配置文件 $FileConfUser 不存在，请检查是否移动过该文件！\n"
        exit 1
    fi
}
function Import_Config_Not_Check() {
    if [ -f $FileConfUser ]; then
        timeStamp=`date -d "$current" +%s%N`
        python $ShellDir/updateConfig.py $FileConfUser.$timeStamp
        . $FileConfUser.$timeStamp
        rm -rf $FileConfUser.$timeStamp
    fi
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
    if [[ $AutoHelpOther == true ]] && [[ -d $CodeDir ]]; then
        if [[ $(ls $CodeDir) ]]; then
            local LatestLog=$(ls -r $CodeDir | head -1)
            . $CodeDir/$LatestLog
        fi
    fi
    export FRUITSHARECODES=$(Combin_Sub ForOtherFruit)                  ## 东东农场 (jd_fruit.js)
    export PETSHARECODES=$(Combin_Sub ForOtherPet)                      ## 东东萌宠 (jd_pet.js)
    export PLANT_BEAN_SHARECODES=$(Combin_Sub ForOtherBean)             ## 种豆得豆 (jd_plantBean.js)
    export DDFACTORY_SHARECODES=$(Combin_Sub ForOtherJdFactory)         ## 东东工厂 (jd_jdfactory.js)
    export DREAM_FACTORY_SHARE_CODES=$(Combin_Sub ForOtherDreamFactory) ## 京喜工厂 (jd_dreamFactory.js)
    export BOOKSHOP_SHARECODES=$(Combin_Sub ForOtherBookShop)           ## 口袋书店 (jd_bookshop.js)
    export JD_CASH_SHARECODES=$(Combin_Sub ForOtherCash)                ## 签到领现金 (jd_cash.js)
    export JDSGMH_SHARECODES=$(Combin_Sub ForOtherSgmh)                 ## 闪购盲盒 (jd_sgmh.js)
    export JDHEALTH_SHARECODES=$(Combin_Sub ForOtherHealth)             ## 东东健康社区 (jd_health.js)
    # export JXNC_SHARECODES=$(Combin_Sub ForOtherJxnc)                 ## 京喜农场 (jd_jxnc.js)
    # export JDGLOBAL_SHARECODES=$(combine_sub ForOtherGlobal)          ## 环球挑战赛 (jd_global.js)
    # export JD818_SHARECODES=$(Combin_Sub ForOtherCarni)               ## 手机狂欢城 (jd_carnivalcity.js)
    # export CITY_SHARECODES=$(Combin_Sub ForOtherCity)                 ## 城城分现金 (jd_city.js)
}

## 组合全部
function Combin_All() {
    export JD_COOKIE=$(Combin_Sub Cookie)
    Combin_ShareCodes
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
function Update_Crontab() {
    if [[ $(cat $ListCrontabUser) != $(crontab -l) ]]; then
        crontab $ListCrontabUser
    fi
}

## 查询脚本名，$1 为脚本名
function Query_Name() {
    local p=$1
    case $(echo $p | awk -F '\.' '{print$NF}') in
    js)
        grep "\$ \=" $p | grep -Eiq ".*Env"
        if [ $? -eq 0 ]; then
            Name=$(grep "\$ \=" $p | grep -Ei ".*Env" | head -1 | awk -F "\(" '{print $2}' | awk -F "\)" '{print $1}' | sed 's:^.\(.*\).$:\1:')
        else
            local Tmp=$(grep -w "script-path" $p | head -1 | sed "s/\W//g" | sed "s/[0-9a-zA-Z_]//g")
            if [[ ${Tmp} ]]; then
                Name=$Tmp
            else
                Name="<未知>"
            fi
        fi
        ;;
    py | ts)
        ## 从收录的词典中获取
        . $FileScriptDictionary $p
        ;;
    esac
}

## 命令帮助
function Help() {
    case $Arch in
    armv7l | armv6l)
        echo -e "
 ❖  $TaskCmd <name/path>         ✧ 延迟执行，如果设置了随机延迟并且当时时间不在0-2、30-31、59分内，将随机延迟一定秒数
 ❖  $TaskCmd <name/path> now     ✧ 依次执行，无论是否设置了随机延迟，均立即运行，前台会输出内容，同时记录在日志文件中
 ❖  $TaskCmd <name/path> <num>   ✧ 指定执行，指定某账号单独运行脚本，num 为某 Cookie 账号在配置文件中的具体编号
 ❖  $TaskCmd <name/path> pkill   ✧ 终止执行，根据脚本名称搜索对应的进程并立即杀死，当脚本报错死循环时可使用此功能
 ❖  $TaskCmd <name> rapid        ✧ 迅速执行，不组合互助码等步骤最大化降低执行前耗时，主要适用于抢兑类活动脚本
 ❖  $TaskCmd <url> raw           ✧ 远程执行，拉取远程仓库的脚本后执行，可选参数(加在末尾): -p 代理
 ❖  source runall            ✧ 全部执行，通过交互选择运行模式执行指定范围的脚本，非常耗时不要盲目使用

 ❖  $TaskCmd list                ✧ 查看本地脚本清单
 ❖  $TaskCmd ps                  ✧ 查看资源消耗情况和正在运行的脚本进程，当检测到内存占用较高时自动尝试释放
 ❖  $TaskCmd exsc                ✧ 导出互助码变量和助力格式，互助码从最后一个日志提取，受日志内容影响
 ❖  $TaskCmd rmlog               ✧ 删除各脚本产生的日志文件，可根据配置文件中的相关变量定义删除日期
 ❖  $TaskCmd cookie <cmd>        ✧ 检测本地账号是否有效 check、使用 WSKEY 更新COOKIE update，支持指定账号进行更新
 ❖  $TaskCmd env <cmd>           ✧ 管理全局环境变量功能(交互)，添加 add、删除 del、修改 edit、查询 search，支持快捷命令

 ❖  $ContrlCmd server status    ✧ 查看各服务的详细信息，包括运行状态、创建时间、处理器占用、内存占用、运行时长
 ❖  $ContrlCmd hang <cmd>       ✧ 后台挂机程序(后台循环执行活动脚本)功能控制，启动/重启 up、停止 down、查看日志 logs
 ❖  $ContrlCmd panel <cmd>      ✧ 控制面板和网页终端功能控制，开启/重启 on、关闭 off、登录信息 info、重置密码 respwd
 ❖  $ContrlCmd env <cmd>        ✧ 执行环境软件包相关命令(不支持 TypeSciprt 和 Python )，修复 repairs
 ❖  $ContrlCmd check files      ✧ 检测项目相关配置文件是否存在，如果缺失就从模板导入

 ❖  $UpdateCmd | $UpdateCmd all      ✧ 全部更新，包括项目源码、所有仓库和脚本、自定义脚本等
 ❖  $UpdateCmd <cmd>             ✧ 单独更新，项目源码 shell、\"Scripts\"仓库 scripts、\"Own\"仓库 own、自定义脚本 extra

 ❋  <name> 脚本名(仅限scripts目录); <path> 脚本的相对路径或绝对路径; <cmd> 固定的可选命令参数(加在末尾); <url> 链接地址

 脚本名无需输入后缀格式，前缀如果是 \"jd_\" 也可以省略，如果脚本同名则优先执行的是 \"js\" 脚本，项目仅支持运行 \"js\" 脚本
"
        ;;
    *)
        echo -e "
 ❖  $TaskCmd <name/path>         ✧ 延迟执行，如果设置了随机延迟并且当时时间不在0-2、30-31、59分内，将随机延迟一定秒数
 ❖  $TaskCmd <name/path> now     ✧ 依次执行，无论是否设置了随机延迟，均立即运行，前台会输出内容，同时记录在日志文件中
 ❖  $TaskCmd <name/path> conc    ✧ 并发执行，无论是否设置了随机延迟，均立即运行，前台不输出内容，直接记录在日志文件中
 ❖  $TaskCmd <name/path> <num>   ✧ 指定执行，指定某账号单独运行脚本，num 为某 Cookie 账号在配置文件中的具体编号
 ❖  $TaskCmd <name/path> pkill   ✧ 终止执行，根据脚本名称搜索对应的进程并立即杀死，当脚本报错死循环时可使用此功能
 ❖  $TaskCmd <name> rapid        ✧ 迅速执行，不组合互助码等步骤最大化降低执行前耗时，可选参数(加在末尾): -c 并发
 ❖  $TaskCmd <url> raw           ✧ 远程执行，拉取远程仓库的脚本后执行，可选参数(加在末尾): -p 代理、-c 并发
 ❖  source runall            ✧ 全部执行，通过交互选择运行模式执行指定范围的脚本，非常耗时不要盲目使用

 ❖  $TaskCmd list                ✧ 查看本地脚本清单
 ❖  $TaskCmd ps                  ✧ 查看资源消耗情况和正在运行的脚本进程，当检测到内存占用较高时自动尝试释放
 ❖  $TaskCmd exsc                ✧ 导出互助码变量和助力格式，互助码从最后一个日志提取，受日志内容影响
 ❖  $TaskCmd rmlog               ✧ 删除各脚本产生的日志文件，可根据配置文件中的相关变量定义删除日期
 ❖  $TaskCmd cookie <cmd>        ✧ 检测本地账号是否有效 check、使用 WSKEY 更新COOKIE update，支持指定账号进行更新
 ❖  $TaskCmd env <cmd>           ✧ 管理全局环境变量功能(交互)，添加 add、删除 del、修改 edit、查询 search，支持快捷命令

 ❖  $ContrlCmd server status    ✧ 查看各服务的详细信息，包括运行状态、创建时间、处理器占用、内存占用、运行时长
 ❖  $ContrlCmd hang <cmd>       ✧ 后台挂机程序(后台循环执行活动脚本)功能控制，启动/重启 up、停止 down、查看日志 logs
 ❖  $ContrlCmd panel <cmd>      ✧ 控制面板和网页终端功能控制，开启/重启 on、关闭 off、登录信息 info、重置密码 respwd
 ❖  $ContrlCmd jbot <cmd>       ✧ Telegram Bot 功能控制，启动/重启 start、停止 stop、查看日志 logs
 ❖  $ContrlCmd env <cmd>        ✧ 执行环境软件包相关命令(支持 TypeSciprt 和 Python )，安装 install、修复 repairs
 ❖  $ContrlCmd check files      ✧ 检测项目相关配置文件是否存在，如果缺失就从模板导入

 ❖  $UpdateCmd | $UpdateCmd all      ✧ 全部更新，包括项目源码、所有仓库和脚本、自定义脚本等
 ❖  $UpdateCmd <cmd>             ✧ 单独更新，项目源码 shell、\"Scripts\"仓库 scripts、\"Own\"仓库 own、自定义脚本 extra

 ❋  <name> 脚本名(仅限scripts目录); <path> 脚本的相对路径或绝对路径; <cmd> 固定的可选命令参数; <url> 链接地址

 脚本名无需输入后缀格式，前缀如果是 \"jd_\" 也可以省略，如果脚本同名则优先执行的是 \"js\" 脚本
 项目仅预装 \"JavaScript\" 环境，支持运行 \"js、py、ts\" 脚本，如需运行其它类型的脚本需安装环境
"
        ;;
    esac
}
