#!/bin/bash

[ ! -d sngxprov2p/docker ] && mkdir -p sngxprov2p/docker
wget "https://raw.githubusercontent.com/Oreomeow/QuanX/master/V2pTaskSub/sngxprov2p.json" -O sngxprov2p.json
json=$(cat ./sngxprov2p.json)
crontab_list=""
pattern='京[东|喜].*'
for row in $(echo "${json}" | jq -r '.list[] | @base64'); do
    _jq() {
        echo ${row} | base64 --decode | jq -r ${1}
    }

    name=$(_jq '.name')
    time=$(_jq '.time')
    target=$(_jq '.job|.target')
    if [[ $name =~ $pattern ]] && [[ $name != '京东京喜财富岛' ]] && [[ $name != '京喜财富岛提现并发修改版ztxtop' ]] && [[ $name != '京东注销会员链接生成墨鱼版' ]] && [[ $name != '京东注销会员修复版' ]] && [[ $name != '京东领现金兑换10元红包' ]] && [[ $name != '京东白条' ]] && [[ $name != '京东手机狂欢城隐藏姓名版' ]] && [[ $name != '京东手机狂欢城新一期' ]]; then
        jsname=${target##*/}
        wget -q $target -O sngxprov2p/$jsname
        # wget -q $(echo "${target}" | perl -pe "s|(?:https:\/\/ghproxy\.com/)?(https:\/\/raw\.githubusercontent\.com.+)|https:\/\/ghproxy\.com/\1|") -O sngxprov2p/$jsname
        if [ $? -eq 0 ]; then
            echo -e "下载 $jsname 完成...\n"
            crontab_list+="#$name \n"
            crontab_list+="$time node /scripts/$jsname >> /scripts/logs/${jsname%.*}.log 2>&1\n"
        fi
    fi
done
cat > sngxprov2p/docker/crontab_list.sh <<EOF
$(echo -e "$crontab_list")
EOF
sed '/^$/d' sngxprov2p/docker/crontab_list.sh

git clone https://github.com/JDHelloWorld/jd_scripts.git JDHelloWorld
[ ! -d JDHelloWorld/docker ] && mkdir -p JDHelloWorld/docker
json=$(cat JDHelloWorld/QuantumultX/gallery.json)
crontab_list=""
for row in $(echo "${json}" | jq -r '.task[] | @base64'); do
    _jq() {
        echo ${row} | base64 --decode | jq -r ${1}
    }

    config=$(_jq '.config')
    # configs=(${config//,/ })
    crontab_list+=$(echo "${config}" | perl -pe "s|(\S+\s\S+\s\S+\s\S+\s(?:\S+\s)?)https:\/\/raw\.githubusercontent\.com\/JDHelloWorld\/jd_scripts\/main\/(\S+_?\w+)\.js(?:\s+)?,(?:\s+)?tag=(.+)(?:\s+)?,(?:\s+)?img-url=.+|\n# \3\n\1node /scripts/\2.js >> /scripts/logs/\2.log 2>&1|")
done
cat > JDHelloWorld/docker/crontab_list.sh <<EOF
$(echo -e "$crontab_list")
EOF
sed '/^$/d' JDHelloWorld/docker/crontab_list.sh

cd JDHelloWorld

npm install
npm install -g npm npm-install-peers
npm install -g ts-node typescript --unsafe-perm=true --allow-root
npm install -g ts-node typescript @types/node date-fns axios require tslib fs
npm install --save-dev @types/node
ls *.ts | xargs tsc
rm -rf node_modules
rm -rf package-lock.json
cd ..

git clone https://github.com/he1pu/JDHelp.git JDHelp
[ ! -d JDHelp/docker ] && mkdir -p JDHelp/docker
json=$(cat JDHelp/QuantumultX/gallery.json)
crontab_list=""
for row in $(echo "${json}" | jq -r '.task[] | @base64'); do
    _jq() {
        echo ${row} | base64 --decode | jq -r ${1}
    }

    config=$(_jq '.config')
    # configs=(${config//,/ })
    crontab_list+=$(echo "${config}" | perl -pe "s|(\S+\s\S+\s\S+\s\S+\s(?:\S+\s)?)https:\/\/raw\.githubusercontent\.com\/he1pu\/JDHelp\/main\/(\S+_?\w+)\.js(?:\s+)?,(?:\s+)?tag=(.+)(?:\s+)?,(?:\s+)?img-url=.+|\n# \3\n\1node /scripts/\2.js >> /scripts/logs/\2.log 2>&1|")
done
cat > JDHelp/docker/crontab_list.sh <<EOF
$(echo -e "$crontab_list")
EOF
sed '/^$/d' JDHelp/docker/crontab_list.sh

git clone https://github.com/wuzhi04/MyActions.git MyActions
git clone -b scripts https://gitee.com/getready/my_actions.git MyScript

rm -rf JDHelp/package.json

ShellDir=${JD_DIR:-$(
    cd $(dirname $0)
    pwd
)}
ScriptsDir=${ShellDir}/jd_scripts
[ ! -d ${ScriptsDir} ] && mkdir -p ${ScriptsDir}
DockerDir=${ScriptsDir}/docker
[ ! -d ${DockerDir} ] && mkdir -p ${DockerDir}
ListCronSh=${DockerDir}/crontab_list.sh
ListCronScripts=MyActions/docker/crontab_list.sh
ListCronScripts2=JDHelloWorld/docker/crontab_list.sh
ListCronScripts3=sngxprov2p/docker/crontab_list.sh
ListCronScripts4=MyScript/docker/crontab_list.sh
ListCronScripts5=JDHelp/docker/crontab_list.sh

cat ${ListCronScripts} ${ListCronScripts2} ${ListCronScripts3} ${ListCronScripts4} ${ListCronScripts5} | tr -s [:space:] | sed '$!N; /^\(.*\)\n\1$/!P; D' > ${ListCronSh}

# cat ${ListCronScripts} ${ListCronScripts2} ${ListCronScripts4} | tr -s [:space:] | sed '$!N; /^\(.*\)\n\1$/!P; D' > ${ListCronSh}

FileDiy=diy.sh
EnableExtraShellProxyDownload="false"
ExtraShellProxyUrl="https://ghproxy.com/"
EnableExtraShellURL="https://gitee.com/SuperManito/scripts/raw/master/diy.sh"
wget -q $EnableExtraShellURL -O ${FileDiy}

if [ $? -eq 0 ]; then
    echo -e "自定义 DIY 脚本同步完成......"
    echo -e ''
    # sed -i 's/https:\/\/raw.githubusercontent.com/https:\/\/cdn.staticaly.com\/gh/' ${FileDiy}
    sed -i 's/ListCron/ListCronSh/g' ${FileDiy}
    sed -i 's/scripts\/\$name/\$\{ScriptsDir\}\/\$name/g' ${FileDiy}
    sed -i -E '/^rm\s+-rf\s+\$\{ScriptsDir\}.+\$\{ListCronSh\}/d' ${FileDiy}
    sed -i '/exit 1/d' ${FileDiy}
    # cat ${FileDiy}
    sleep 2s
    . ${FileDiy}
fi

cp -rf $(ls MyActions | grep -v docker | sed "s:^:MyActions/:" | xargs) ${ScriptsDir}
cp -rf $(ls JDHelloWorld | grep -v docker | sed "s:^:JDHelloWorld/:" | xargs) ${ScriptsDir}
cp -rf $(ls sngxprov2p | grep -v docker | sed "s:^:sngxprov2p/:" | xargs) ${ScriptsDir}
cp -rf $(ls JDHelp | grep -v docker | sed "s:^:JDHelp/:" | xargs) ${ScriptsDir}
cp -rf $(ls MyScript | grep -v docker | sed "s:^:MyScript/:" | xargs) ${ScriptsDir}