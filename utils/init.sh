#!/usr/bin/env bash
## Author: SuperManito
## Modified: 2021-09-04

set -e
SUCCESS='[\033[32mOK\033[0m]'
ERROR='[\033[31mERROR\033[0m]'
ContrlCmd="taskctl"

if [ ! -d $JD_DIR/config ]; then
  echo -e "$ERROR 没有映射 config 配置文件目录给本容器，请先按教程映射该目录...\n"
  exit 1
fi

## ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓ 第 一 区 域 ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
echo -e "\n[\033[34m$(date "+%Y-%m-%d %H:%M:%S")\033[0m] ----- ➀ 同步最新源码开始 -----\n"
cd $JD_DIR
crond
sleep 1
git fetch --all
git reset --hard origin/source0904
bash update.sh
echo -e "\n[\033[34m$(date "+%Y-%m-%d %H:%M:%S")\033[0m] ----- ➀ 同步最新源码结束 -----\n"

## ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓ 第 二 区 域 ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
echo -e "\n[\033[34m$(date "+%Y-%m-%d %H:%M:%S")\033[0m] ----- ➁ 检测配置文件完整性开始 -----\n"
taskctl check files
echo -e "\n[\033[34m$(date "+%Y-%m-%d %H:%M:%S")\033[0m] ----- ➁ 检测配置文件完整性结束 -----\n"

## ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓ 第 三 区 域 ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
echo -e "\n[\033[34m$(date "+%Y-%m-%d %H:%M:%S")\033[0m] ----- ➂ 挂机程序开始 -----\n"
if [[ ${ENABLE_HANGUP} == true ]]; then
  . $JD_DIR/config/config.sh
  if [ -n "${Cookie1}" ]; then
    $ContrlCmd hang up
  else
    echo -e "检测到当前可能是首次部署容器，配置文件中还未填入有效的信息，因此不启动挂机程序\n"
  fi
elif [[ ${ENABLE_HANGUP} == false ]]; then
  echo -e "已设置为不自动启动挂机程序\n"
fi
echo -e "[\033[34m$(date "+%Y-%m-%d %H:%M:%S")\033[0m] ----- ➂ 挂机程序结束 -----\n"

## ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓ 第 四 区 域 ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
echo -e "\n[\033[34m$(date "+%Y-%m-%d %H:%M:%S")\033[0m] ----- ➃ Telegram Bot 开始 -----\n"
if [[ ${ENABLE_TG_BOT} == true ]]; then
  case $(uname -m) in
  armv7l | armv6l)
    echo -e "您的处理器架构不支持使用此功能\n"
    ;;
  *)
    if [[ -z $(grep -E "123456789" $JD_DIR/config/bot.json) ]]; then
      $ContrlCmd jbot start
    else
      echo -e "检测到当前可能是首次部署容器，还没有配置 bot.json 因此不启动 Telegram Bot ...\n"
    fi
    ;;
  esac
else
  echo -e "已设置为不启动 Telegram Bot\n"
fi
echo -e "[\033[34m$(date "+%Y-%m-%d %H:%M:%S")\033[0m] ----- ➃ Telegram Bot 结束 -----\n"

## ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓ 第 五 区 域 ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
echo -e "\n[\033[34m$(date "+%Y-%m-%d %H:%M:%S")\033[0m] ----- ➄ 控制面板和网页终端开始 -----\n"
if [[ ${ENABLE_WEB_PANEL} == true ]]; then
  cd $JD_DIR
  export PS1="\u@\h:\w $ "
  if [[ $(ifdata -p eth0 | awk -F ' ' '{print$1}') = "172.17.0.1" ]]; then
    pm2 start ttyd --name="ttyd" -- -p 7681 -t fontSize=15 -t disableLeaveAlert=true -t rendererType=webgl bash
  else
    pm2 start ttyd --name="ttyd" -- -t fontSize=15 -t disableLeaveAlert=true -t rendererType=webgl bash
  fi
  echo -e "\n[\033[34m$(date "+%Y-%m-%d %H:%M:%S")\033[0m] 网页终端启动成功 $SUCCESS\n"

  cd $JD_DIR/web
  npm install >/dev/null 2>&1
  pm2 start ecosystem.config.js
  cd $JD_DIR
  echo -e "\n[\033[34m$(date "+%Y-%m-%d %H:%M:%S")\033[0m] 控制面板启动成功 $SUCCESS\n"
  echo -e "Tips: 如未修改用户名密码，则初始用户名为：admin，初始密码为：admin"
  echo -e "      请访问 http://<IP>:5678 登陆控制面板并修改配置，第一次登录会自动修改初始密码"
elif [[ ${ENABLE_WEB_PANEL} == false ]]; then
  echo -e "已设置为不自动启动控制面板\n"
fi
echo -e "\n[\033[34m$(date "+%Y-%m-%d %H:%M:%S")\033[0m] ----- ➄ 控制面板和网页终端结束 -----\n"

## ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓ 第 六 区 域 ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
echo -e "\n[\033[34m$(date "+%Y-%m-%d %H:%M:%S")\033[0m] ----- ➅ 自动安装Python 和 TypeSciprt 环境开始 -----\n"
if [[ ${ENABLE_ALL_ENV} == true ]]; then
  taskctl env install
else
  echo -e "已设置为不自动安装Python 和 TypeSciprt 环境\n"
fi
echo -e "\n[\033[34m$(date "+%Y-%m-%d %H:%M:%S")\033[0m] ----- ➅ 自动安装Python 和 TypeSciprt 环境结束 -----\n"

echo -e "..."
sleep 1
echo -e "...."
sleep 1
echo -e "....."
sleep 1

if [ "${1#-}" != "${1}" ] || [ -z "$(command -v "${1}")" ]; then
  set -- node "$@"
fi

echo -e "\n[\033[34m$(date "+%Y-%m-%d %H:%M:%S")\033[0m] \033[32m容器启动成功\033[0m\n"
echo -e "Tips: 请退出查看日志"
/usr/bin/mitmdump -p 5900 -s mproxy.py --set block_global=false
exec "$@"
