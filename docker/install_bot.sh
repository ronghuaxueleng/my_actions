#!/usr/bin/env bash

ShellDir=/jd
LogDir=${ShellDir}/log
RepoPath="${ShellDir}/docker/dockerbot"
BotRepositoryURL="https://ghproxy.com/https://github.com/SuMaiKaDe/bot.git"
SUCCESS='\033[32m[Done]\033[0m'
WARN='\033[33m[WARN]\033[0m'
ERROR='\033[31m[ERROR]\033[0m'
WAITING='\033[33m[*]\033[0m'

## 安装依赖
apk --no-cache add -f zlib-dev gcc jpeg-dev python3-dev musl-dev freetype-dev py3-pip
if [ $? -eq 0 ]; then
    echo -e "\n${SUCCESS} 依赖安装完成\n"
else
    echo -e "\n${ERROR} 依赖安装失败，请检查原因后重试\n"
    exit
fi

## 拉取组件
if [ -d ${RepoPath}/.git ]; then
    cd ${RepoPath}
    echo -e "${WAITING} 开始更新仓库\n"
    git remote set-url origin ${BotRepositoryURL} >/dev/null
    git reset --hard origin/main >/dev/null
    git fetch --all
    ExitStatusBot=$?
    git reset --hard origin/main
    git pull
else
    echo -e "${WAITING} 开始克隆仓库\n"
    rm -rf ${RepoPath}
    git clone -b main ${BotRepositoryURL} ${RepoPath}
    ExitStatusBot=$?
fi

if [[ ${ExitStatusBot} -eq 0 ]]; then
    echo -e "\n${SUCCESS} 仓库更新成功\n"
else
    echo -e "\n${ERROR} 仓库更新失败，请检查原因后重试\n"
    exit
fi

## 安装模块
echo -e "${WAITING} 正在安装模块\n"
cp -rf ${RepoPath}/jbot ${ShellDir}
cd ${ShellDir}/jbot
pip3 config set global.index-url https://mirrors.aliyun.com/pypi/simple/
pip3 --default-timeout=100 install -r requirements.txt --no-cache-dir
if [[ $? -eq 0 ]]; then
    echo -e "\n${SUCCESS} 模块安装完成\n"
else
    echo -e "\n${ERROR} 模块安装失败，请检查原因后重试\n"
fi
