#!/bin/bash

function replaceShareCode() {
    if [ ! -f "$1" ]; then
        sed -i 's/const readShareCodeRes = await readShareCode();/const readShareCodeRes = {"code": -1};/g' $1.js
        for file in `ls $1*`; do
            basename=${file%%.*}
            replacename=${basename//$1/$1_$2}
            mv $file $replacename.js
        done
        sed -i s/$1/$1_$2/g docker/crontab_list.sh
    fi
}

function replaceShareCodeV1() {
    if [ ! -f "$1" ]; then
        sed -i 's/readShareCodeRes = await readShareCode();/readShareCodeRes = {"code": -1};/g' $1.js
        for file in `ls $1*`; do
            basename=${file%%.*}
            replacename=${basename//$1/$1_$2}
            mv $file $replacename.js
        done
        sed -i s/$1/$1_$2/g docker/crontab_list.sh
    fi
}

function deleteShareCode() {
    if [ ! -f "$1" ]; then
        sed -i '/await readShareCode();/d' $1.js
        for file in `ls $1*`; do
            basename=${file%%.*}
            replacename=${basename//$1/$1_$2}
            mv $file $replacename.js
        done
        sed -i s/$1/$1_$2/g docker/crontab_list.sh
    fi
}

# [ ! -d sngxprov2p/docker ] && mkdir -p sngxprov2p/docker
# wget "https://raw.githubusercontent.com/Oreomeow/QuanX/master/V2pTaskSub/sngxprov2p.json" -O sngxprov2p.json
# json=$(cat ./sngxprov2p.json)
# crontab_list=""
# pattern='京[东|喜].*'
# for row in $(echo "${json}" | jq -r '.list[] | @base64'); do
#     _jq() {
#         echo ${row} | base64 --decode | jq -r ${1}
#     }

#     name=$(_jq '.name')
#     time=$(_jq '.time')
#     target=$(_jq '.job|.target')
#     if [[ $name =~ $pattern ]] && [[ $name != '京东京喜财富岛' ]] && [[ $name != '京喜财富岛提现并发修改版ztxtop' ]] && [[ $name != '京东注销会员链接生成墨鱼版' ]] && [[ $name != '京东注销会员修复版' ]] && [[ $name != '京东领现金兑换10元红包' ]] && [[ $name != '京东白条' ]] && [[ $name != '京东手机狂欢城隐藏姓名版' ]] && [[ $name != '京东手机狂欢城新一期' ]]; then
#         jsname=${target##*/}
#         wget -q $target -O sngxprov2p/$jsname
#         # wget -q $(echo "${target}" | perl -pe "s|(?:https:\/\/ghproxy\.com/)?(https:\/\/raw\.githubusercontent\.com.+)|https:\/\/ghproxy\.com/\1|") -O sngxprov2p/$jsname
#         if [ $? -eq 0 ]; then
#             echo -e "下载 $jsname 完成...\n"
#             crontab_list+="#$name \n"
#             crontab_list+="$time node /scripts/$jsname >> /scripts/logs/${jsname%.*}.log 2>&1\n"
#         fi
#     fi
# done
# cat > sngxprov2p/docker/crontab_list.sh <<EOF
# $(echo -e "$crontab_list")
# EOF
# sed '/^$/d' sngxprov2p/docker/crontab_list.sh

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

replaceShareCode jd_dreamFactory JDHelloWorld
replaceShareCode jd_fruit JDHelloWorld
replaceShareCode jd_health JDHelloWorld
replaceShareCode jd_jdfactory JDHelloWorld
replaceShareCode jd_pet JDHelloWorld
replaceShareCode jd_plantBean JDHelloWorld
replaceShareCode jd_sgmh JDHelloWorld

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

cd JDHelp
replaceShareCode jd_cash JDHelp
deleteShareCode jd_cfd JDHelp
replaceShareCodeV1 jd_dreamFactory JDHelp
replaceShareCodeV1 jd_fruit JDHelp
replaceShareCode jd_health JDHelp
replaceShareCode jd_jdfactory JDHelp
replaceShareCodeV1 jd_pet JDHelp
replaceShareCode jd_plantBean JDHelp
replaceShareCode jd_sgmh JDHelp
cd ..

git clone https://github.com/wuzhi04/MyActions.git MyActions
cd MyActions
replaceShareCode jd_cash MyActions
replaceShareCode jd_cfd MyActions
replaceShareCode jd_dreamFactory MyActions
replaceShareCode jd_fruit MyActions
replaceShareCode jd_health MyActions
replaceShareCode jd_jdfactory MyActions
replaceShareCode jd_pet MyActions
replaceShareCode jd_plantBean MyActions
replaceShareCode jd_sgmh MyActions
cd ..

git clone https://github.com/Aaron-lv/sync.git Aaron
cd Aaron
replaceShareCode jd_cash Aaron
replaceShareCode jd_cfd Aaron
replaceShareCode jd_dreamFactory Aaron
replaceShareCode jd_fruit Aaron
replaceShareCode jd_health Aaron
replaceShareCode jd_jdfactory Aaron
replaceShareCodeV1 jd_pet Aaron
replaceShareCode jd_plantBean Aaron
replaceShareCode jd_sgmh Aaron
cd ..

git clone https://github.com/shufflewzc/faker2.git faker2
cd faker2
replaceShareCode jd_cash faker2
replaceShareCode jd_cfd faker2
replaceShareCode jd_dreamFactory faker2
replaceShareCode jd_fruit faker2
replaceShareCode jd_health faker2
replaceShareCode jd_jdfactory faker2
replaceShareCodeV1 jd_pet faker2
replaceShareCode jd_plantBean faker2
replaceShareCode jd_sgmh faker2
cd ..

git clone -b scripts https://gitee.com/getready/my_actions.git MyScript

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
# ListCronScripts3=sngxprov2p/docker/crontab_list.sh
ListCronScripts4=MyScript/docker/crontab_list.sh
ListCronScripts5=JDHelp/docker/crontab_list.sh
ListCronScripts6=Aaron/docker/crontab_list.sh
ListCronScripts7=faker2/docker/crontab_list.sh

# cat ${ListCronScripts} ${ListCronScripts2} ${ListCronScripts3} ${ListCronScripts4} ${ListCronScripts5} ${ListCronScripts6} ${ListCronScripts7} | tr -s [:space:] | sed '$!N; /^\(.*\)\n\1$/!P; D' > ${ListCronSh}

cat ${ListCronScripts} ${ListCronScripts2} ${ListCronScripts4} ${ListCronScripts5} ${ListCronScripts6} ${ListCronScripts7} | tr -s [:space:] | sed '$!N; /^\(.*\)\n\1$/!P; D' > ${ListCronSh}


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

jq -s 'reduce .[] as $item ({}; . * $item)' MyActions/package.json JDHelloWorld/package.json JDHelp/package.json Aaron/package.json faker2/package.json > package.json

cp -rf $(ls MyActions | grep -v docker | sed "s:^:MyActions/:" | xargs) ${ScriptsDir}
cp -rf $(ls JDHelloWorld | grep -v docker | sed "s:^:JDHelloWorld/:" | xargs) ${ScriptsDir}
# cp -rf $(ls sngxprov2p | grep -v docker | sed "s:^:sngxprov2p/:" | xargs) ${ScriptsDir}
cp -rf $(ls JDHelp | grep -v docker | sed "s:^:JDHelp/:" | xargs) ${ScriptsDir}
cp -rf $(ls Aaron | grep -v docker | sed "s:^:Aaron/:" | xargs) ${ScriptsDir}
cp -rf $(ls faker2 | grep -v docker | sed "s:^:faker2/:" | xargs) ${ScriptsDir}
cp -rf $(ls MyScript | grep -v docker | sed "s:^:MyScript/:" | xargs) ${ScriptsDir}
cp -rf package.json ${ScriptsDir}