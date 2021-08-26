#!/usr/bin/env bash
## 安装目前环境所需要的软件包

ShellDir=${JD_DIR:-$(
    cd $(dirname $0)
    pwd
)}
[[ ${JD_DIR} ]] && ShellJd=jd || ShellJd=${ShellDir}/jd.sh
ScriptsDir=${ShellDir}/scripts
Arch=$(uname -m)

if [ ${Arch} = "armv7l" ]; then
    echo -e "\033[33m[WARN]\033[0m 你的处理器架构为 ARMv7 ，无法安装 Python 软件包/n已跳过安装，建议更换运行环境/n下面尝试安装 TypeScript/n"
elif [ $Arch = "armv6l" ]; then
    echo -e "\033[33m[WARN]\033[0m 你的处理器架构为 ARMv6 ，无法安装 Python 软件包/n已跳过安装，建议更换运行环境/n下面尝试安装 TypeScript/n"
else
    apk update
    apk add --no-cache python3 py3-pip sudo
    pip3 config set global.index-url https://mirrors.aliyun.com/pypi/simple/
    pip3 install --upgrade pip
    cd ${ScriptsDir}
    pip3 install requests
fi
cd ${ScriptsDir}
npm install -g npm npm-install-peers
npm install -g ts-node typescript --unsafe-perm=true --allow-root
npm install -g ts-node typescript @types/node date-fns axios require tslib fs crypto-js ts-md5 dotenv crypto
npm install --save-dev @types/node @types/tunnel
echo -e '\n\033[32mTips:\033[0m 忽略 \033[33m[WARN]\033[0m 警告类输出内容，如有 \033[31m[ERROR]\033[0m 类报错，90% 都是由网络原因所导致的，自行解读日志。'
