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
fi
cd ${ScriptsDir}
pip3 install requests
npm set registry https://r.npm.taobao.org # 注册模块镜像
npm set disturl https://npm.taobao.org/dist # node-gyp 编译依赖的 node 源码镜像

## 以下选择添加
npm set sass_binary_site https://npm.taobao.org/mirrors/node-sass # node-sass 二进制包镜像
npm set electron_mirror https://npm.taobao.org/mirrors/electron/ # electron 二进制包镜像
npm set puppeteer_download_host https://npm.taobao.org/mirrors # puppeteer 二进制包镜像
npm set chromedriver_cdnurl https://npm.taobao.org/mirrors/chromedriver # chromedriver 二进制包镜像
npm set operadriver_cdnurl https://npm.taobao.org/mirrors/operadriver # operadriver 二进制包镜像
npm set phantomjs_cdnurl https://npm.taobao.org/mirrors/phantomjs # phantomjs 二进制包镜像
npm set selenium_cdnurl https://npm.taobao.org/mirrors/selenium # selenium 二进制包镜像
npm set node_inspector_cdnurl https://npm.taobao.org/mirrors/node-inspector # node-inspector 二进制包镜像

npm cache clean --force # 清空缓存

# ==========================================================
# YARN
# ==========================================================

yarn config set registry https://r.npm.taobao.org # 注册模块镜像
yarn config set disturl https://npm.taobao.org/dist # node-gyp 编译依赖的 node 源码镜像

## 以下选择添加
yarn config set sass_binary_site https://npm.taobao.org/mirrors/node-sass # node-sass 二进制包镜像
yarn config set electron_mirror https://npm.taobao.org/mirrors/electron/ # electron 二进制包镜像
yarn config set puppeteer_download_host https://npm.taobao.org/mirrors # puppeteer 二进制包镜像
yarn config set chromedriver_cdnurl https://npm.taobao.org/mirrors/chromedriver # chromedriver 二进制包镜像
yarn config set operadriver_cdnurl https://npm.taobao.org/mirrors/operadriver # operadriver 二进制包镜像
yarn config set phantomjs_cdnurl https://npm.taobao.org/mirrors/phantomjs # phantomjs 二进制包镜像
yarn config set selenium_cdnurl https://npm.taobao.org/mirrors/selenium # selenium 二进制包镜像
yarn config set node_inspector_cdnurl https://npm.taobao.org/mirrors/node-inspector # node-inspector 二进制包镜像

yarn cache clean # 清空缓存
npm install -g npm npm-install-peers
npm install -g ts-node typescript --unsafe-perm=true --allow-root
npm install -g ts-node typescript @types/node date-fns axios require tslib fs crypto-js ts-md5 dotenv
npm install --save-dev @types/node @types/tunnel
echo -e '\n\033[32mTips:\033[0m 忽略 \033[33m[WARN]\033[0m 警告类输出内容! 如有 \033[31m[ERROR]\033[0m 类报错，90% 都是由网络原因所导致的，自行解读日志。'
