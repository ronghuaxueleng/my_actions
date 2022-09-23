#!/bin/bash
ShellDir=${JD_DIR:-$(
    cd $(dirname $0)
    pwd
)}

function replaceShareCode() {
    if [ ! -f "$1" ]; then
        sed -i 's/const readShareCodeRes = await readShareCode();/const readShareCodeRes = {"code": -1};/g' $1.js
        sed -i 's/$.currentStep = $.homeInfo?.finishedtaskId/$.currentStep = $.homeInfo.finishedtaskId/g' $1.js
        sed -i 's/$.currentStep = $.DoMainTask?.finishedtaskId/$.currentStep = $.DoMainTask.finishedtaskId/g' $1.js
        sed -i 's/$.homeInfo?.petinfo/$.homeInfo.petinfo/g' $1.js
        sed -i 's/$.homeInfo?.coins/$.homeInfo.coins/g' $1.js
        sed -i -e '1h;2,$H;$!d;g' -re 's/let shareCodes = \[(.*\n)+?]/let shareCodes = []/g' $1.js
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
        sed -i -e '1h;2,$H;$!d;g' -re 's/let shareCodes = \[(.*\n)+?]/let shareCodes = []/g' $1.js
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
json=$(cat JDHelloWorld/iOS/QX.json)
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
cp -rf ${ShellDir}/replace/* ./

replaceShareCode jd_dreamFactory JDHelloWorld
replaceShareCode jd_fruit JDHelloWorld
replaceShareCode jd_jdfactory JDHelloWorld
replaceShareCode jd_pet JDHelloWorld
replaceShareCode jd_plantBean JDHelloWorld
replaceShareCode jd_sgmh JDHelloWorld

npm install
npm install -g npm npm-install-peers
npm install -g ts-node typescript --unsafe-perm=true --allow-root
npm install -g ts-node typescript @types/node date-fns axios require tslib fs
npm install --save-dev @types/node
ls *.ts | grep -v jd_喂猪 | grep -v jd_speed_redEnvelope | xargs tsc --downlevelIteration

rm -rf node_modules
rm -rf package-lock.json
cd ${ShellDir}

git clone -b master https://github.com/okyyds/yyds.git yyds
cd yyds
cp -rf ${ShellDir}/replace/* ./
replaceShareCode jd_cash yyds
replaceShareCode jd_cfd yyds
replaceShareCode jd_dreamFactory yyds
replaceShareCode jd_fruit yyds
replaceShareCode jd_health yyds
replaceShareCode jd_jdfactory yyds
replaceShareCodeV1 jd_pet yyds
replaceShareCode jd_plantBean yyds
replaceShareCode jd_sgmh yyds
replaceShareCode jd_jxmc yyds
cd ${ShellDir}

git clone https://github.com/Akali5/jd-depot.git jddepot
cd jddepot
replaceShareCode jd_cash jddepot
replaceShareCode jd_cfd jddepot
replaceShareCode jd_dreamFactory jddepot
replaceShareCode jd_fruit jddepot
replaceShareCode jd_health jddepot
replaceShareCode jd_jdfactory jddepot
replaceShareCodeV1 jd_pet jddepot
replaceShareCode jd_plantBean jddepot
replaceShareCode jd_sgmh jddepot
replaceShareCode jd_jxmc jddepot
cd ${ShellDir}

git https://github.com/ShuaiLeiLu/JD_Scripts.git ShuaiLeiLu
cd ShuaiLeiLu
replaceShareCode jd_cash ShuaiLeiLu
replaceShareCode jd_cfd ShuaiLeiLu
replaceShareCode jd_dreamFactory ShuaiLeiLu
replaceShareCode jd_fruit ShuaiLeiLu
replaceShareCode jd_health ShuaiLeiLu
replaceShareCode jd_jdfactory ShuaiLeiLu
replaceShareCodeV1 jd_pet ShuaiLeiLu
replaceShareCode jd_plantBean ShuaiLeiLu
replaceShareCode jd_sgmh ShuaiLeiLu
replaceShareCode jd_jxmc ShuaiLeiLu
cd ${ShellDir}

git clone -b scripts https://gitee.com/getready/my_actions.git MyScript

ScriptsDir=${ShellDir}/jd_scripts
[ ! -d ${ScriptsDir} ] && mkdir -p ${ScriptsDir}
DockerDir=${ScriptsDir}/docker
[ ! -d ${DockerDir} ] && mkdir -p ${DockerDir}
ListCronSh=${DockerDir}/crontab_list.sh
ListCronScripts2=JDHelloWorld/docker/crontab_list.sh
ListCronScripts3=ShuaiLeiLu/docker/crontab_list.sh
ListCronScripts4=MyScript/docker/crontab_list.sh
ListCronScripts8=yyds/docker/crontab_list.sh


cat ${ListCronScripts2} ${ListCronScripts3} ${ListCronScripts4} ${ListCronScripts8} | tr -s [:space:] | sed '$!N; /^\(.*\)\n\1$/!P; D' > ${ListCronSh}

cd ${ShellDir}

jq -s 'reduce .[] as $item ({}; . * $item)' JDHelloWorld/package.json Aaron/package.json yyds/package.json > package.json

cp -rf $(ls JDHelloWorld | grep -v docker | sed "s:^:JDHelloWorld/:" | xargs) ${ScriptsDir}
cp -rf $(ls yyds | grep -v docker | sed "s:^:yyds/:" | xargs) ${ScriptsDir}
cp -rf $(ls MyScript | grep -v docker | sed "s:^:MyScript/:" | xargs) ${ScriptsDir}
cp -rf $(ls jddepot | grep -v docker | sed "s:^:jddepot/:" | xargs) ${ScriptsDir}
cp -rf $(ls ShuaiLeiLu | grep -v docker | sed "s:^:ShuaiLeiLu/:" | xargs) ${ScriptsDir}
cp -rf package.json ${ScriptsDir}