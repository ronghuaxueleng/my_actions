# 《使用教程》
- __修订日期：2021 年 10 月 16 日__
ㅤ
## 一、基础教程
### 1. 执行特定脚本：
    task <name/path> now
> _注：1. `name` 为脚本名（仅限 scripts 目录）、`path` 为脚本的相对路径或绝对路径。_\
> _ㅤㅤ2. 依次执行，无论是否设置了随机延迟，均立即运行，前台会输出日志，同时记录在日志文件中。_\
> _ㅤㅤ3. 可通过下面教程中的 `task list` 命令具体查看本地有哪些可以执行的活动脚本。_


### 2. 更新全部脚本：
    update  或  update all
> _注：每次使用前请执行此命令，确保使用最新的项目脚本和活动脚本，此脚本也配置了定时任务可自动执行。_

> _更新仓库时的常见报错：_\
> _提示 `Repository more than 5 connections` 是由于 `Gitee` 限制了每秒同时拉取项目的IP不能超过 `5` 个所导致，此报错为正常现象，重新执行更新命令即可。_\
> _提示 `ssh: connect to host gitee.com port 22/443: Connection timed out` 是由于您使用平台的 `22/443` 端口不可用所导致。_\
> _提示 `Could not resolve hostname gitee.com: Temporary failure in name resolution lost connection` 是由于无法解析到 `Gitee` 服务器，表明网络环境异常。_


### 3. 查看本地脚本清单：
    task list


### 4. 查看命令帮助：
    task
> _注：所有的使用命令都在其中，并且针对不同架构的设备做了特殊处理。_


***

ㅤ
## 二、高阶教程
### 1. 并发执行：
    task <name/path> conc
> _注：并发执行非常消耗资源，不要盲目使用尤其是0点，否则资源占满导致终端连不上后只能强制关机重启。_


### 2. 延迟执行
    task <name/path>
> _注：如果设置了随机延迟并且当时时间不在0-2、30-31、59分内，将随机延迟一定秒数。_


### 3. 指定执行：
    task <name/path> <num>
> _注：指定某账号单独运行脚本，num为某 Cookie 账号在配置文件中的具体编号。_


### 4. 远程执行：
    task <url> raw
> _注：拉取位于远程仓库的脚本后并执行，url为链接地址，可选参数(加在末尾)：`-p` 使用代理([Ghproxy](https://ghproxy.com))、`-c` 并发。_


### 5. 迅速执行：
    task <name> rapid
> _注：此功能不会组合互助码变量，最大化降低脚本执行前耗时，主要适用于抢兑类脚本，可选参数(加在末尾)：`-c` 并发。_


### 6. 终止执行：
    task <name/path> pkill
> _注：根据脚本名称搜索对应的进程并立即杀死，当脚本报错死循环时可使用此功能。_


### 7. 全部执行：
    source runall  或  . runall
> _注：通过交互选择运行模式执行指定范围的脚本，时间较长不要盲目使用。_


### 8. 单独更新：
    update <cmd>
> _注：项目源码 shell、"Scripts"仓库 scripts、"Own" 仓库 own、所有仓库 repo、"Raw" 脚本 raw、自定义脚本 extra。_


### 9. 删除脚本运行日志：
    task rmlog
> _注：删除活动脚本与更新脚本的日志文件，默认删除 `7天` 以上的日志文件，可以通过配置文件中的相关变量更改默认时间值，可选参数(加在末尾): `<days>` 指定天数。_


### 10. 进程监控：
    task ps
> _注：查看资源消耗情况和正在运行的脚本进程。_


### 11. 清理内存：
    task cleanup
> _注：检测并终止卡死的脚本进程以此释放内存占用，默认杀死距离启动超过6个小时的卡死进程，可选参数(加在末尾): `<hours>` 指定时间。_


### 12. 账号功能：
    task cookie <cmd>
> _注：1. 检测账号是否有效 check，更新日期从配置文件中的备注获取，同时判断账号过期时间。_\
> _ㅤㅤ2. 使用 `WSKEY` 更新CK update，需要在 account.json 中正确配置您的信息，注意格式。_\
> _ㅤㅤ3. 支持指定账号进行更新，后面跟上某 Cookie 账号在配置文件中的具体编号即可，与指定执行类似。_


### 13. 管理全局环境变量功能：
    task env <cmd>
> _注：通过交互管理全局环境变量，添加 add、删除 del、修改 edit、查询 search，支持快捷命令。_
  - 增加环境变量快捷命令：

        task env add <变量名称> <变量的值>

  - 修改环境变量快捷命令：

        task env edit <变量名称> <变量新的值>

  - 删除环境变量快捷命令：

        task env del <变量名称>

  - 启用环境变量快捷命令：

        task env enable <变量名称>

  - 禁用环境变量快捷命令：

        task env disable <变量名称>

  - 查询环境变量快捷命令：

        task env search <查询关键词>


### 14. 安装环境：
    taskctl env install
>  _注：全局安装常用模块便于执行非 Scripts 目录下的脚本，64位处理器还支持附带安装 Python 和 TypeSciprt 环境。_


### 15. 安装脚本依赖：
    ## 全局安装指定模块
    npm install -g <xxx>
> _注：1. 当脚本报错提示 `need module xxx` 类似字样说明缺少脚本运行所需的依赖，看见 `module` 字样应立即联想到安装模块上。_\
> _ㅤㅤ2. 特别要注意的是如果缺少的依赖中带有 `/` 则表示本地依赖文件，一般开发者都会提供相关组件，注意与安装模块区分开不要弄混。_


***

ㅤ
## 三、互助功能教程
### 1. 获取互助码：
    task get_share_code now


### 2. 格式化导出互助码：
    task exsc
> _注：输出可直接应用在配置文件中的代码，其原理是从各个活动脚本的日志中获取，所以当新装环境运行完相关活动脚本后才能正常使用。_


### 3. 自动互助功能：
    ## 在配置文件中赋值该变量
    AutoHelpOther="true"
> _注：详见配置文件中的相关注释，最好理解该功能的工作原理。_


### 4. 手动定义互助码与相互助力：
    填法示例：

    ## 1.定义东东农场互助
    MyFruit1="xxxxxxxxxxxxxxxxxxxxxxxxx"
    MyFruit2="xxxxxxxxxxxxxxxxxxxxxxxxx"
    MyFruitA=""
    MyFruitB=""
    ForOtherFruit1="${MyFruit1}@${MyFruit2}"
    ForOtherFruit2="${MyFruit1}@${MyFruit2}"

    ## 2.定义东东萌宠互助
    MyPet1="xxxxxxxxxxxxxxxxxxxxxxxxx"
    MyPet2="xxxxxxxxxxxxxxxxxxxxxxxxx"
    MyPet3="xxxxxxxxxxxxxxxxxxxxxxxxx"
    MyPet4="xxxxxxxxxxxxxxxxxxxxxxxxx"
    MyPet5="xxxxxxxxxxxxxxxxxxxxxxxxx"
    MyPet6="xxxxxxxxxxxxxxxxxxxxxxxxx"
    MyPetA=""
    MyPetB=""
    ForOtherPet1="${MyPet1}@${MyPet2}@${MyPet3}@${MyPet4}@${MyPet5}@${MyPet6}"
    ForOtherPet2="${MyPet1}@${MyPet2}@${MyPet3}@${MyPet4}@${MyPet5}@${MyPet6}"
    ForOtherPet3="${MyPet1}@${MyPet2}@${MyPet3}@${MyPet4}@${MyPet5}@${MyPet6}"
    ForOtherPet4="${MyPet1}@${MyPet2}@${MyPet3}@${MyPet4}@${MyPet5}@${MyPet6}"
    ForOtherPet5="${MyPet1}@${MyPet2}@${MyPet3}@${MyPet4}@${MyPet5}@${MyPet6}"
    ForOtherPet6="${MyPet1}@${MyPet2}@${MyPet3}@${MyPet4}@${MyPet5}@${MyPet6}"
> _注：所有符号需严格使用英文格式！如果在上一步启用了自动互助功能那么手动定义的互助码变量均会被覆盖，等于无效。_


### 5. 提交您的互助码到公共助力池（Telegram Bot）：
> Telegram Bot：\
> [@JDShareCodebot](https://t.me/JDShareCodebot) \
> 每周末清空助力池，同时开放提交

> 输入 /help 查看使用帮助


### 6. 定义导出用于提交到 Bot 的互助码格式的账号排序
    ## 在配置文件中编辑该变量
    BotSubmit=(
      1
      2
      3
      4
      5
    )
> _注：数字为某 Cookie 账号在配置文件中的具体编号，注意缩进和格式，每行开头四个或两个空格，默认导出前5个账号。_


***

ㅤ
## 四、项目服务类功能控制教程
### 1. 查看所有服务的状态

    taskctl server status
> _注：如遇相关服务没有启动或状态异常，在容器初始成功的前提下请先尝试手动启动。_


### 2. 后台挂机程序
> _作用：在后台循环执行挂机类活动脚本。_
  - 启动/重启后台挂机程序：

        taskctl hang up
    > _注：当有新的账号添加或账号变动时须重启此程序，否则仍加载之前配置文件中的变量执行挂机活动脚本。_

  - 停止后台挂机程序：

        taskctl hang down

  - 查看后台挂机程序的运行日志：

        taskctl hang logs
    > _注：Ctrl+C 退出，如发现脚本报错可尝试重启。_


### 3. 控制面板和网页终端
  - 开启/重启控制面板和网页终端服务：

        taskctl panel on
    > _注：1. 容器第一次启动时如果启用了该功能变量后会自动启动相关服务无需手动执行此命令。_\
    > _ㅤㅤ2. 在某些环境下当系统重启导致控制面板没有在容器启动时自启可用此命令手动启动。_\
    > _ㅤㅤ3. 当控制面板或网页终端服务进程异常时还可尝试修复，如果仍然无法访问请检查容器是否初始化成功。_

  - 关闭控制面板和网页终端服务：

        taskctl panel off

  - 查看控制面板的登录信息：

        taskctl panel info
    > _注：如果忘记了登录密码可以用此方法查看。_

  - 重置控制面板用于登录的用户名和密码：

        taskctl respwd
    > _注：重置后的用户名和密码均为初始信息。_


### 4. Telegram Bot
> 关于如何配置该功能 [点此查看](https://crawling-nectarine-ef2.notion.site/Telegram-Bot-9709bbae7bf8488ab01f3b4867e29b44)

  - 启动/重启 Bot 服务：

        taskctl jbot start

  - 停止 Bot 服务：

        taskctl jbot stop

  - 查看 Bot 的运行日志：

        taskctl jbot logs


***

ㅤ
## 五、环境相关教程
### 1. 更新配置文件：
  - 备份当前配置文件

        cp -f /jd/config/config.sh /jd/config/bak/config.sh

  - 替换新版配置文件

        cp -f /jd/sample/config.sample.sh /jd/config/config.sh
    > _注：此操作为直接替换配置文件，您也可以通过控制面板的对比工具自行修改。_


### 2. 修复环境：
    taskctl env repairs
> _注：当 npm 程序崩溃时可执行此命令进行修复。_


### 3. 检测配置文件完整性：
    taskctl check files
> _注：检测项目相关配置文件是否存在，如果缺失就从模板导入。_


***
