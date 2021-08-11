#!/bin/bash
set -e
Arch=$(uname -m)
SUCCESS='\033[32m[Done]\033[0m'
WARN='\033[33m[WARN]\033[0m'
ERROR='\033[31m[ERROR]\033[0m'
WAITING='\033[33m[*]\033[0m'

if [ ! -d ${JD_DIR}/config ]; then
  echo -e "没有映射 config 配置文件目录给本容器，请先按教程映射 config 配置文件目录...\n"
  exit 1
fi

echo -e "\n======================== 1. 更新源代码 ========================\n"
[ ! -d ${JD_DIR}/log ] && mkdir -p ${JD_DIR}/log
crond
cd ${JD_DIR}
git fetch --all
git reset --hard origin/master
git pull
bash git_pull.sh
echo

echo -e "======================== 2. 检测配置文件 ========================\n"
if [ -s ${JD_DIR}/config/crontab.list ]; then
  echo -e "检测到 config 配置文件目录下存在 crontab.list ，自动导入定时任务...\n"
  crontab ${JD_DIR}/config/crontab.list
  echo -e "成功添加定时任务...\n"
else
  echo -e "检测到 config 配置目录下不存在crontab.list或存在但文件为空，从示例文件复制一份用于初始化...\n"
  cp -fv ${JD_DIR}/sample/docker.list.sample ${JD_DIR}/config/crontab.list
  echo
  crontab ${JD_DIR}/config/crontab.list
  echo -e "成功添加定时任务...\n"
fi

TemplateFiles="config.sh diy_server.js"
for file in ${TemplateFiles}; do
  if [ ! -s ${JD_DIR}/config/$file ]; then
    echo -e "检测到 config 配置文件目录下不存在 $file ，从示例文件复制一份用于初始化...\n"
    cp -fv ${JD_DIR}/sample/$file.sample ${JD_DIR}/config/$file
    echo
  fi
done

JsonFiles="auth.json bot.json account.json"
for file in ${JsonFiles}; do
  if [ ! -s ${JD_DIR}/config/$file ]; then
    echo -e "检测到 config 配置文件目录下不存在 $file ，从示例文件复制一份用于初始化...\n"
    cp -fv ${JD_DIR}/sample/$file ${JD_DIR}/config/$file
    echo
  fi
done

echo -e "======================== 3. 安装环境软件包 ========================\n"

if [ ${Arch} = "armv7l" ]; then
  echo -e "${WARN} 你的处理器架构为 ARMv7 ，无法安装环境软件包/n可能无法运行 Python 和 TypeScript 脚本，建议更换运行环境"
elif [ $Arch = "armv6l" ]; then
  echo -e "${WARN} 你的处理器架构为 ARMv6 ，无法安装环境软件包/n可能无法运行 Python 和 TypeScript 脚本，建议更换运行环境"
else
  bash ${JD_DIR}/docker/install_env.sh
fi
echo ''

echo -e "======================== 4. 挂机程序 ========================\n"
if [[ ${ENABLE_HANGUP} == true ]]; then
  . ${JD_DIR}/config/config.sh
  if [ -n "${Cookie1}" ]; then
    bash jd hang up 2>/dev/null
    echo -e "${SUCCESS} 挂机程序启动成功\n"
  else
    echo -e "配置文件 config.sh 中还未填入有效的 Cookie，可能是首次部署容器，因此不启动挂机程序\n"
  fi
elif [[ ${ENABLE_HANGUP} == false ]]; then
  echo -e "已设置为不自动启动挂机程序\n"
fi
echo -e "======================== 5. Telegram Bot ========================\n"
if [[ ${ENABLE_TG_BOT} == true ]]; then
  bash ${JD_DIR}/docker/install_bot.sh
  if [[ -z $(grep -E "123456789" $JD_DIR/config/bot.json) ]]; then
    cd ${JD_DIR}/jbot
    pm2 start ecosystem.config.js
  else
    echo -e "似乎 $JD_DIR/config/bot.json 还未修改为你自己的信息，可能是首次部署容器，因此不启动 Telegram Bot ...\n"
  fi
else
  echo -e "已设置为不启动 Telegram Bot\n"
fi
echo -e "======================== 6. 控制面板和网页终端 ========================\n"
if [[ ${ENABLE_WEB_PANEL} == true ]]; then
  cd ${JD_DIR}
  if [ ${Arch} = "armv7l" ]; then
    TTYD_ARCH=armhf
  elif [ $Arch = "armv6l" ]; then
    TTYD_ARCH=arm
  else
    TTYD_ARCH=${Arch}
  fi
  if [ ! -x /usr/local/bin/ttyd ]; then
    rm -rf /usr/local/bin/ttyd
    if [ -f panel/ttyd/ttyd.${TTYD_ARCH} ]; then
      cp -rf panel/ttyd/ttyd.${TTYD_ARCH} /usr/local/bin/ttyd
    else
      echo -e "${WAITING} 正在下载 ttyd 网页终端二进制文件"
      wget https://ghproxy.com/https://github.com/tsl0922/ttyd/releases/download/1.6.3/ttyd.${TTYD_ARCH} -O /usr/local/bin/ttyd -q
      echo ''
    fi
    chmod +x /usr/local/bin/ttyd
  fi
  if [ -x /usr/local/bin/ttyd ]; then
    export PS1="\u@\h:\w \$ "
    pm2 start ttyd --name="ttyd" -- -t fontSize=15 -t disableLeaveAlert=true -t rendererType=webgl bash
    if [ $? -eq 0 ]; then
      echo -e "\n${SUCCESS} 网页终端启动成功\n"
    else
      echo -e "\n${ERROR} 网页终端启动失败，但容器将继续启动\n"
    fi
  fi
  cd ${JD_DIR}/panel
  npm install >/dev/null 2>&1
  pm2 start ecosystem.config.js
  echo -e "\n${SUCCESS} 控制面板启动成功\n"
  echo -e "Tips: 如未修改用户名密码，则初始用户名为：admin，初始密码为：admin\n请访问 http://<内部或外部IP地址>:5678 登陆并修改配置\n"
elif [[ ${ENABLE_WEB_PANEL} == false ]]; then
  echo -e "已设置为不自动启动控制面板，跳过...\n"
fi

if [ "${1#-}" != "${1}" ] || [ -z "$(command -v "${1}")" ]; then
  set -- node "$@"
fi

echo -e "\033[32m ============= 容   器   启   动   成   功  =============\033[0m\n"
exec "$@"
