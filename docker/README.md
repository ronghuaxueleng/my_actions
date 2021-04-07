# 关于 Docker 版本的《使用与更新》教程
## 修订日期：2021年 3 月 14 日
ㅤ
## 一、基础使用教程
#### 1. 进入与退出容器：
    docker exec -it jd /bin/bash
> _注意：`exit` 为退出容器；大部分命令都可在容器外部执行，但部分复制命令只能在容器内执行。_
#### 2. 手动运行一键脚本开始您的薅羊毛行为：
    #进入容器
    docker exec -it jd /bin/bash
    #执行一键脚本
    source run_all.sh 或 . run_all.sh
    #退出容器
    exit
> _注意：1. 此脚本为执行所有活动脚本` ，共有几十个活动脚本，时间较长且与账号数量成正比。_\
> _ㅤㅤㅤ2. 此一键脚本会在最后执行挂机活动脚本，您可以根据使用需知的第`5`条停止其运行。_\
> _ㅤㅤㅤ3. 除手动运行活动脚本外该项目还会通过定时的方式自动执行活动脚本，注意看日志。_\
> _ㅤㅤㅤ4. 执行此脚本后无需守在电脑旁，会自动在最后无限制运行挂机活动脚本，需要您手动停止。_
#### 3. 一键更新脚本：
    docker exec -it jd bash git_pull.sh
#### 4. 执行特定活动脚本：
    docker exec -it jd bash jd.sh xxx      # 如果设置了随机延迟并且当时时间不在0-2、30-31、59分内，将随机延迟一定秒数
    docker exec -it jd bash jd.sh xxx now  # 无论是否设置了随机延迟，均立即运行
> _注意：具体查看活动脚本列表可通过命令 `docker exec -it jd bash jd.sh` 查看， `xxx` 为脚本名。_
#### 5. 查看帮助文档：
    docker exec -it jd cat docker/README.md
> _注意：此文档为《使用与更新》教程，即当前页面内容，保持项目同步更新。_

***

ㅤ
## 二、高阶使用教程
#### 1. 获取互助码：
    docker exec -it jd bash jd.sh get_share_code now
#### 2. 格式化导出互助码：
    docker exec -it jd bash export_sharecodes.sh
> _注意：其原理是从各个活动脚本的日志中获取，只有运行完所有活动脚本后才可使用。_
#### 3. 配置互助码与相互助力：
> 填法示例：
> 
> ################################## 1. 定义东东农场互助（选填） ##################################
> 
> MyFruit1="xxxxxxxxxxxxxxxxxxxxxxxxx"\
> MyFruit2="xxxxxxxxxxxxxxxxxxxxxxxxx"\
> MyFruit3=""\
> MyFruit4=""\
> MyFruit5=""\
> MyFruit6=""\
> MyFruitA=""\
> MyFruitB=""
> 
> ForOtherFruit1="${MyFruit1}@${MyFruit2}@${MyFruit3}@${MyFruit4}@${MyFruit5}@${MyFruit6}"
> ForOtherFruit2="${MyFruit1}@${MyFruit2}@${MyFruit3}@${MyFruit4}@${MyFruit5}@${MyFruit6}"\
> ForOtherFruit3=""\
> ForOtherFruit4=""\
> ForOtherFruit5=""\
> ForOtherFruit6=""
> 
> ################################## 2. 定义东东萌宠互助（选填） ##################################
> 
> MyPet1="xxxxxxxxxxxxxxxxxxxxxxxxx"\
> MyPet2="xxxxxxxxxxxxxxxxxxxxxxxxx"\
> MyPet3="xxxxxxxxxxxxxxxxxxxxxxxxx"\
> MyPet4="xxxxxxxxxxxxxxxxxxxxxxxxx"\
> MyPet5="xxxxxxxxxxxxxxxxxxxxxxxxx"\
> MyPet6="xxxxxxxxxxxxxxxxxxxxxxxxx"\
> MyPet7="xxxxxxxxxxxxxxxxxxxxxxxxx"\
> MyPet8="xxxxxxxxxxxxxxxxxxxxxxxxx"\
> MyPetA=""\
> MyPetB=""
> 
> ForOtherPet1="${MyPet1}@${MyPet2}@${MyPet3}@${MyPet4}@${MyPet5}@${MyPet6}@${MyPet7}@${MyPet8}"
> ForOtherPet2="${MyPet1}@${MyPet2}@${MyPet3}@${MyPet4}@${MyPet5}@${MyPet6}@${MyPet7}@${MyPet8}"
> ForOtherPet3="${MyPet1}@${MyPet2}@${MyPet3}@${MyPet4}@${MyPet5}@${MyPet6}@${MyPet7}@${MyPet8}"
> ForOtherPet4="${MyPet1}@${MyPet2}@${MyPet3}@${MyPet4}@${MyPet5}@${MyPet6}@${MyPet7}@${MyPet8}"
> ForOtherPet5="${MyPet1}@${MyPet2}@${MyPet3}@${MyPet4}@${MyPet5}@${MyPet6}@${MyPet7}@${MyPet8}"
> ForOtherPet6="${MyPet1}@${MyPet2}@${MyPet3}@${MyPet4}@${MyPet5}@${MyPet6}@${MyPet7}@${MyPet8}"
> ForOtherPet7="${MyPet1}@${MyPet2}@${MyPet3}@${MyPet4}@${MyPet5}@${MyPet6}@${MyPet7}@${MyPet8}"
> ForOtherPet8="${MyPet1}@${MyPet2}@${MyPet3}@${MyPet4}@${MyPet5}@${MyPet6}@${MyPet7}@${MyPet8}"
#### 4. 后台运行挂机活动脚本：
    docker exec -it jd pm2 start jd_crazy_joy_coin
#### 5. 停止后台运行挂机活动脚本：
    docker exec -it jd pm2 stop jd_crazy_joy_coin
#### 6. 导入并使用第三方活动脚本：
    1. 将脚本放置在该项目容器内 scripts 子目录下，也可放在外部的挂载目录（默认为/opt/jd/scripts）
    2. 然后通过命令 docker exec -it jd bash jd.sh xxx now 运行
    3. 如果您想将第三方脚本加入到 run_all.sh 一键脚本中可将脚本名改为"jd_"开头即可
> _注意：导入的第三方活动脚本不会随项目本身活动脚本的更新而删除。_
#### 7. 使用 `diy` 自定义脚本：
- 使用需知

      1. 此脚本的用途为加入非 lxk0301 的第三方活动脚本
      2. 您可以开启自动同步功能，默认同步本人项目里的 diy 脚本
      3. 您也可以使用本项目中的模板文件自定义构建您的专属脚本
      4. 您可以将自制的 diy 脚本上传至您的仓库并使用同步功能
      5. 如果您使用了自制的脚本请更改配置文件里的地址链接
- 启用该功能

      docker exec -it jd sed -i 's/EnableExtraShell=""/EnableExtraShell="true"/g' config/config.sh
- 启用自动同步功能

      docker exec -it jd sed -i 's/EnableExtraShellUpdate=""/EnableExtraShellUpdate="true"/g' config/config.sh
> _ㅤ注意：1. 启用该功能后便可直接下载或同步更新本项目中的 diy 脚本。_\
> _ㅤㅤㅤㅤ2. 如果您想更换同步的地址链接自行修改配置文件中的相关变量。_

> ㅤ如果您想推荐某位作者的第三方活动脚本并将它加入到本项目自定义脚本中，您可以在 Issues 专题下方留言。

***

ㅤ
## 三、控制面板教程
#### 1. 手动启用控制面板：
    docker exec -it jd pm2 start panel/ecosystem.config.js
> _注意：在某些环境下当系统重启导致控制面板无法访问提示拒绝连接时可用此命令恢复使用。_
#### 2. 手动关闭控制面板：
    docker exec -it jd pm2 stop panel/ecosystem.config.js
> _注意：`VPS` 平台用户关机前请先执行此命令手动停止控制面板，否则在仪表盘强制关机重启后可能会出现无法保存配置文件的问题。_
#### 3. 重启控制面板：
    docker exec -it jd pm2 restart panel/ecosystem.config.js
#### 4. 重置控制面板的用户名和密码：
    docker exec -it jd bash jd.sh resetpwd
#### 5. 升级控制面板：
    docker exec -it jd /bin/bash
    cd panel
    yarn install || yarn install --registry=https://registry.npm.taobao.org
    exit
> _注意：如果您更改了默认访问端口，那么在执行此命令后需要重新修改。_
#### 6. 重新安装控制面板：
    docker exec -it jd /bin/bash
    cd panel
    yarn install || yarn install --registry=https://registry.npm.taobao.org
    npm install -g pm2
    pm2 start ecosystem.config.js
    exit
> _注意：此命令适用于在容器初始化过程中安装失败时使用。_

***

ㅤ
## 四、更新教程
#### 1. 更新 `一键更新` 脚本：
    docker exec -it jd wget https://gitee.com/SuperManito/JD-FreeFuck/raw/source/git_pull.sh -O git_pull.sh
#### 2. 更新 `配置文件` ：
- 备份当前配置文件

      docker exec -it jd mv config/config.sh config/bak/config.sh
- 替换新版配置文件

      docker exec -it jd cp -f sample/config.sh.sample config/config.sh
> _ㅤ注意：操作为直接替换配置文件，您也可以通过控制面板对比工具自行修改。_
#### 3. 修复与升级：
- 进入容器

      docker exec -it jd /bin/bash
- 执行修复与升级脚本

      bash <(curl -sSL https://gitee.com/SuperManito/JD-FreeFuck/raw/main/update.sh)
- 退出容器

      exit
> _ㅤ注意：此脚本适用于后期维护，当需要执行时会在项目通知，未经通知不要擅自执行，否则出现问题后果自负。_

***

ㅤ
## 五、使用需知
#### 1.  `run_all.sh` 为一键执行所有活动脚本， `git_pull.sh` 为一键更新脚本
#### 2. 手动执行 `run_all.sh` 脚本后无需守在电脑旁，会自动在最后运行挂机活动脚本
#### 3. 执行 `run_all.sh` 脚本期间如果卡住，可按回车键尝试或通过命令 `Ctrl + Z` 跳过继续执行剩余活动脚本
#### 4. 由于京东活动一直变化可能会出现无法参加活动、报错等正常现象，可手动更新活动脚本
#### 5. 如果需要更新活动脚本，请执行 `docker exec -it jd bash git_pull.sh` 命令一键更新即可，它会同步更新 `run_all.sh` 脚本
#### 6. 除手动运行活动脚本外该项目还会通过定时的方式全天候自动运行活动脚本，具体运行记录可通过日志查看
#### 7. 该项目已默认配置好 `Crontab` 定时任务，定时配置文件 `crontab.list` 会通过活动脚本的更新而同步更新
#### 8. 之前填入的 `Cookie部分内容` 具有一定的时效性，若提示失效请根据教程重新获取并手动更新
#### 9. 我不是活动脚本的开发者，但后续使用遇到任何问题都可访问本项目寻求帮助，制作不易，理解万岁
