# 《使用教程》
- __修订日期：2021 年 9 月 4 日__

## 容器基础教程：
>附：[Docker 容器基础使用教程](https://www.runoob.com/docker/docker-container-usage.html)

***

ㅤ
## 一、基础使用教程
### 1. 执行特定脚本：
    task <name/path> now
> _注意：1. `name` 为脚本名（仅限scripts目录）、`path` 脚本的相对路径或绝对路径。_\
> _ㅤㅤㅤ2. 依次执行，无论是否设置了随机延迟，均立即运行，前台会输出日志，同时记录在日志文件中。_\
> _ㅤㅤㅤ3. 可通过下面教程中的 `task list` 命令具体查看本地有哪些可以执行的活动脚本。_


### 2. 更新全部脚本：
    update 或 update all
> _注意：每次使用前请执行此命令，确保使用最新的项目脚本和活动脚本，此脚本也配置了定时任务可自动执行。_

> _更新仓库时的常见报错：_\
> _提示 `Repository more than 5 connections` 是由于 `Gitee` 限制了每秒同时拉取项目的IP不能超过 `5` 个所导致，此报错为正常现象，重新执行更新命令即可。_\
> _提示 `ssh: connect to host gitee.com port 22/443: Connection timed out` 是由于您使用平台的 `22/443` 端口不可用所导致，自行解决处理。_\
> _提示 `Could not resolve hostname gitee.com: Temporary failure in name resolution lost connection` 是由于无法解析到 `Gitee` 服务器，表明网络环境异常，自行解决处理。_


### 3. 查看本地脚本清单：
    task list


### 4. 查看命令帮助：
    task
> _注意：所有的使用命令都在其中，并且针对不同架构的设备做了特殊处理。_


***

ㅤ
## 二、高阶使用教程
### 1. 并发执行：
    task <name/path> conc
> _注意：并发执行非常消耗资源，不要盲目使用尤其是0点，否则资源占满导致终端连不上后只能物理重启。_


### 2. 延迟执行
    task <name/path>
> _注意：如果设置了随机延迟并且当时时间不在0-2、30-31、59分内，将随机延迟一定秒数。_


### 3. 指定执行：
    task <name/path> <num>
> _注意：指定某账号单独运行脚本，num为某 Cookie 账号在配置文件中的具体编号。_


### 4. 远程执行：
    task <url> raw
> _注意：拉取位于远程仓库的脚本后并执行，url为链接地址，可选参数(加在末尾)：-p 使用代理([Ghproxy](https://ghproxy.com))、-c 并发执行。_


### 5. 迅速执行：
    task <name> rapid
> _注意：此功能不会组合互助码变量，最大化降低脚本执行前耗时，主要适用于抢兑类脚本，可选参数(加在末尾)：-c 并发执行。_


### 6. 终止执行：
    task <name/path> pkill
> _注意：根据脚本名称搜索对应的进程并立即杀死，当脚本报错死循环时可使用此功能。_


### 7. 全部执行：
    source runall  或  . runall
> _注意：1. 此脚本的作用为执行所有本地所有的脚本，高达数十个甚至上百，时间较长且与账号数量成正比。_\
> _ㅤㅤㅤ2. 除手动运行活动脚本外该项目还会通过定时的方式自动执行活动脚本，可通过日志查看运行记录。_


### 8. 单独更新：
    update <cmd>
> _注意：项目源码 shell、"Scripts"仓库 scripts、"Own"仓库 own。_


### 9. 删除脚本运行日志：
    task rmlog
> _注意：删除活动脚本与更新脚本的日志文件，默认删除 `7天` 以上的日志文件，可以通过配置文件中的相关变量更改默认时间值。_


### 10. 进程监控：
    task ps
> _注意：查看资源消耗情况和正在运行的脚本进程。_


### 11. 账号功能：
    task cookie <cmd>
> _注意：1. 检测账号是否有效 check，更新日期从配置文件中的备注获取，同时判断账号过期时间。_\
> _ㅤㅤㅤ2. 使用WSKEY更新CK update，需要在 account.json 中正确配置您的信息。_


### 12. 安装 Python 和 TypeSciprt 环境：
    taskctl env install


### 13. 安装脚本依赖：
- 进入容器内脚本目录：

      cd /jd/scripts
- JavaScript | TypeScript 类脚本安装/修复方法：

      npm install <xxx>                 ## npm安装指定模块（看报错提示缺什么就尝试装什么）
- Python 类脚本安装/修复方法：

      pip3 install <xxx>                ## pip通用安装模块命令

> _注意：当新脚本报错提示 `need module xxx` 类似字样说明缺少脚本所需的依赖，看见 `module` 字样应立即联想到安装模块上。_


***

ㅤ
## 三、互助功能教程
### 1. 获取互助码：
    task get_share_code now


### 2. 格式化导出互助码：
    task exsc
> _注意：输出可直接应用在配置文件中的代码，其原理是从各个活动脚本的日志中获取，所以当新装环境运行完相关活动脚本后才能正常使用。_


### 3. 自动互助功能：
    ## 配置文件
    AutoHelpOther="true"
> _注意：详见配置文件中的相关注释。_


### 4. 手动定义互助码与相互助力：
    填法示例：

    1. 定义东东农场互助
    MyFruit1="xxxxxxxxxxxxxxxxxxxxxxxxx"
    MyFruit2="xxxxxxxxxxxxxxxxxxxxxxxxx"
    MyFruitA=""
    MyFruitB=""
    ForOtherFruit1="${MyFruit1}@${MyFruit2}"
    ForOtherFruit2="${MyFruit1}@${MyFruit2}"
    
    1. 定义东东萌宠互助
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
> _注意：所有符号需严格使用英文格式！_


### 5. 提交您的互助码到公共助力池（Telegram Bot）：
> Telegram Bot：\
> [@JD_ShareCode_Bot](https://t.me/JD_ShareCode_Bot) \
> 每周六晚 9 点清空助力池，同时开放提交，需要加官方群才可以提交

> 输入 /help 查看使用帮助


***

ㅤ
## 四、相关功能控制教程
### 1. 查看所有服务的状态

    taskctl server status
> _注意：如遇相关服务没有启动或状态异常，在容器初始成功的前提下请先尝试手动启动。_


### 2. 后台挂机程序
> _作用：在后台循环执行挂机类活动脚本。_
  - 启动/重启后台挂机程序：

        taskctl hang up
    > _注意：当有新的账号添加或账号变动时须重启此程序，否则仍加载之前配置文件中的变量执行挂机活动脚本。_

  - 停止后台挂机程序：

        taskctl hang down

  - 查看后台挂机程序的运行日志：

        taskctl hang logs
    > _注意：Ctrl+C 退出，如发现脚本报错可尝试重启。_
ㅤ

### 3. 控制面板和网页终端
  - 开启/重启控制面板和网页终端：

        taskctl panel on
    > _注意：1. 容器第一次启动时如果启用了该功能变量后会自动启动相关服务无需手动执行此命令。_\
    > _ㅤㅤㅤ2. 在某些环境下当系统重启导致控制面板没有在容器启动时自启可用此命令手动启动。_\
    > _ㅤㅤㅤ3. 当控制面板或网页终端服务进程异常时还可尝试修复，如果仍然无法访问请检查容器是否初始化成功。_

  - 关闭控制面板和网页终端：

        taskctl panel off

  - 查看控制面板的登录信息：

        taskctl panel info

  - 重置控制面板的用户名和密码：

        taskctl respwd
    > _注意：重置后的用户名和密码均为初始信息。_


### 4. Telegram Bot
  - 配置 Bot：

        https://crawling-nectarine-ef2.notion.site/Telegram-Bot-9709bbae7bf8488ab01f3b4867e29b44

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

      mv config/config.sh config/bak/config.sh

  - 替换新版配置文件

      cp -f sample/config.sh.sample config/config.sh
    > _注意：此操作为直接替换配置文件，您也可以通过控制面板的对比工具自行修改。_


### 2. 修复环境：
    taskctl env repairs
> _注意：当 npm 程序崩溃时可执行此命令进行修复。_


### 3. 检测配置文件完整性：
    taskctl check files
> _注意：检测项目相关配置文件是否存在，如果缺失就从模板导入。_


***
