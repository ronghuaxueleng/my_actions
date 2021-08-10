# 《使用教程》
- __修订日期：2021 年 8 月 8 日__

## 容器基础教程：
>附：[Docker 容器基础使用教程](https://www.runoob.com/docker/docker-container-usage.html)
### 进入容器

    docker exec -it jd bash

### 退出容器

    exit

### 在容器外部执行命令

    docker exec -it jd bash <command>
> _注意：1. 大部分命令都可在容器外部执行，但部分复杂命令只能在容器内执行。_\
> _ㅤㅤㅤ 3. 如果你修改了默认的容器名称，那么需要将 `jd`替换为你定义的容器名称。_\
> _ㅤㅤㅤ 4. 例如 `docker exec -it <newname> bash jd <xxx> now` ，也可使用 `容器ID`代替。_

***

ㅤ
## 一、基础使用教程
### 1. 执行特定脚本：
    bash jd <xxx>      # 延迟执行，如果设置了随机延迟并且当时时间不在0-2、30-31、59分内，将随机延迟一定秒数
    bash jd <xxx> now  # 依次执行，无论是否设置了随机延迟，均立即运行，前台会输出日志，同时记录在日志文件中
> _注意：可通过命令 `bash jd list` 具体查看本地有哪些可以执行的活动脚本，`xxx` 为脚本名。_


### 2. 更新脚本：
    bash git_pull 或 bash jd update
> _注意：每次使用前请执行此命令，确保使用最新的项目脚本和活动脚本，此脚本也配置了定时任务可自动执行。_

> _常见报错：_\
> _提示 `Repository more than 5 connections` 是由于 `Gitee` 限制了每秒同时拉取项目的IP不能超过 `5` 个所导致，此报错为正常现象，重新执行更新命令即可。_\
> _提示 `ssh: connect to host gitee.com port 22/443: Connection timed out` 是由于你使用平台的 `22/443` 端口不可用所导致，自行解决处理。_\
> _提示 `Could not resolve hostname gitee.com: Temporary failure in name resolution lost connection` 是由于无法解析到 `Gitee` 服务器，表明网络环境异常，自行解决处理。_


### 3. 查看本地脚本清单：

    bash jd list


### 4. 查看帮助文档：
    cat README.md
> _注意：此文档为《使用教程》，即当前页面内容，跟随项目同步更新。_


### 5. 快捷命令：
    jtask  ==  bash jd
     jup   ==  bash git_pull

***

ㅤ
## 二、高阶使用教程
### 1. 并发执行特定脚本：
    bash jd <xxx> conc
> _注意：并发执行非常消耗资源，不要盲目使用尤其是0点，否则资源占满导致终端连不上后只能物理重启。_


### 2. 指定单个账号执行特定脚本：
    bash jd <xxx> <num>
> _注意：指定某账号单独运行脚本，num为某 Cookie 账号在配置文件中的具体编号。_


### 3. 拉取远程仓库的脚本并执行：
    bash jd <url> raw
> _注意：url为位于远程仓库的脚本地址，可选参数(加在末尾)：-p 使用代理([Ghproxy](https://ghproxy.com))、-c 并发执行。_


### 4. 迅速执行特定脚本：
    bash jd <xxx> rapid
> _注意：此功能区别于立即执行不会组合互助码变量等操作，最大化降低脚本执行前耗时，主要适用于抢兑类脚本。_


### 5. 执行所有脚本：
    source run_all.sh  或  . run_all.sh
> _ㅤ注意：1. 此脚本的作用为执行所有本地所有的脚本，高达数十个甚至上百，时间较长且与账号数量成正比。_\
> _ㅤㅤㅤ  2. 除手动运行活动脚本外该项目还会通过定时的方式自动执行活动脚本，可通过日志查看运行记录。_


### 6. 使用 Diy 自定义脚本扩展脚本数量：
- 使用需知

      1. 此脚本的用途为添加第三方作者编写的活动脚本到项目中
      2. 你必须使用本项目中的模板文件根据教程说明自己动手编写
      3. 你还可以将自制的 Diy 脚本上传至你的仓库并使用自动同步功能
- 启用该功能

      cp -rf sample/diy.sh.sample config/diy.sh                                   ## 拷贝模板
      sed -i 's/EnableExtraShell=""/EnableExtraShell="true"/g' config/config.sh   ## 赋值变量


### 7. 导入并使用第三方脚本：
    1. 通过远程执行功能
    2. 将脚本放置在该项目容器内 scripts 子目录下后，也可放在外部的主机挂载目录（默认为/opt/jd/scripts）
> _注意：导入的第三方活动脚本不会随项目本身活动脚本的更新而删除。_


### 8. 删除脚本运行日志：
    bash jd rmlog
> _注意：删除活动脚本与更新脚本的日志文件，默认删除 `7天` 以上的日志文件，可以通过配置文件中的相关变量更改默认时间值。_


### 9. 查看正在运行的脚本：
    bash jd ps


### 10. 终止正在运行的脚本：
    bash jd <xxx> pkill
> _注意：根据脚本名称搜索对应的进程并立即杀死，当脚本报错死循环时可使用此功能。_


### 11. 安装/修复脚本依赖：
- 进入容器内脚本目录：

      cd /jd/scripts
- JavaScript | TypeScript 类脚本安装/修复方法：

      bash /jd/docker/install_env.sh    ## 容器初始化时统一执行的安装脚本
      npm install                       ## npm通用安装依赖命令
      # npm install <xxx>               ## npm安装指定模块（看报错提示缺什么就尝试装什么）
- Python 类脚本安装/修复方法：

      pip3 install requests             ## pip通用安装模块命令

> _注意：当新脚本报错提示 `need module xxx` 类似字样说明缺少脚本所需的依赖包，看见 `module` 字样应立即联想到安装模块上，目前新的镜像已在启动容器初始化时安装大部分环境所需的软件包和依赖模块。_

***

ㅤ
## 三、互助码教程
### 1. 获取互助码：
    bash jd get_share_code now


### 2. 格式化导出互助码：
    bash jd exsc
> _注意：输出可直接应用在配置文件中的代码，其原理是从各个活动脚本的日志中获取，所以当新装环境运行完相关活动脚本后才能正常使用。_


### 3. 配置互助码与相互助力：
    填法示例：

    ########################## 1. 定义东东农场互助（选填） ##########################

    MyFruit1="xxxxxxxxxxxxxxxxxxxxxxxxx"
    MyFruit2="xxxxxxxxxxxxxxxxxxxxxxxxx"
    MyFruitA=""
    MyFruitB=""
    
    ForOtherFruit1="${MyFruit1}@${MyFruit2}"
    ForOtherFruit2="${MyFruit1}@${MyFruit2}"
    
    ########################## 2. 定义东东萌宠互助（选填） ##########################
    
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

### 4. 提交你的互助码到公共助力池（Telegram Bot）：
> Telegram Bot：\
> [@JD_ShareCode_Bot](https://t.me/JD_ShareCode_Bot) \
> 每周六晚 9 点清空助力池，同时开放提交，需要加官方群才可以提交

> 输入 /help 查看使用帮助

***

ㅤ
## 四、相关功能控制教程
### 1. 查看所有服务的状态

    bash jd server status
> _注意：如遇相关服务没有启动或状态异常，在容器初始成功的前提下请先尝试手动启动。_


### 2. 后台挂机程序
> _作用：在后台循环执行挂机类活动脚本。_
  - 启动/重启后台挂机程序：

           bash jd hang up
    > _注意：当有新的账号添加须重启此程序，否则将继续执行之前配置文件中的账号。_

  - 停止后台挂机程序：

           bash jd hang down

  - 查看后台挂机程序的运行日志：

           bash jd hang logs
    > _注意：Ctrl+C 退出，如发现脚本报错可尝试重启。_
ㅤ

### 3. 控制面板和网页终端
  - 开启/重启控制面板和网页终端：

           bash jd panel on
    > _注意：1. 容器第一次启动时如果启用了该功能变量后会自动启动相关服务无需手动执行此命令。_\
    > _ㅤㅤㅤ2. 在某些环境下当系统重启导致控制面板没有在容器启动时自启可用此命令手动启动。_\
    > _ㅤㅤㅤ3. 当控制面板或网页终端服务进程异常时还可通过此命令尝试修复，如果仍然异常请检查容器是否初始化成功。_

  - 关闭控制面板和网页终端：

           bash jd panel off

  - 重置控制面板的用户名和密码：

           bash jd resetpwd


### 4. Telegram Bot
  - 配置 Bot：

           https://crawling-nectarine-ef2.notion.site/Telegram-Bot-9709bbae7bf8488ab01f3b4867e29b44

  - 启动/重启 Bot 服务：

           bash jd jbot start

  - 停止 Bot 服务：

           bash jd jbot stop

  - 查看 Bot 的运行日志：

           bash jd jbot logs

***

ㅤ
## 五、更新教程
### 更新配置文件：
  - 备份当前配置文件

      mv config/config.sh config/bak/config.sh

  - 替换新版配置文件

      cp -f sample/config.sh.sample config/config.sh
    > _注意：此操作为直接替换配置文件，你也可以通过控制面板的对比工具自行修改。_

***

ㅤ
## 使用需知
- __1. `jd.sh` 为项目主体脚本，`git_pull.sh` 为更新脚本，`run_all.sh` 为一键执行所有活动脚本__
- __2. 本项目可以通过定时的方式全天候自动运行活动脚本，具体运行记录可通过日志查看__
- __3. 项目已配置好 `Crontab` 定时任务，定时配置文件 `crontab.list` 会随活动脚本的更新而同步更新__
- __4. 你可以通过容器外的挂载目录来编辑配置文件、查看活动运行日志、查看脚本文件__
- __5. 由于京东活动一直变化可能会出现无法参加活动、报错等正常现象，可手动执行更新脚本完成更新__
- __6. 账号的 `Cookie` 具有一定的时效性，若提示失效请根据教程重新获取并手动更新__