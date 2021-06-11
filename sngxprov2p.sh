#!/bin/bash

[ ! -d sngxprov2p/docker ] && mkdir -p sngxprov2p/docker

json=$(curl -s "https://raw.fastgit.org/sngxpro/QuanX/master/V2pTaskSub/sngxprov2p.json")
crontab_list=""
pattern='京[东|喜].*'
for row in $(echo "${json}" | jq -r '.list[] | @base64'); do
    _jq() {
        echo ${row} | base64 --decode | jq -r ${1}
    }

    name=$(_jq '.name')
    time=$(_jq '.time')
    target=$(_jq '.job|.target')
    if [[ $name =~ $pattern ]]; then
        jsname=${target##*/}
        # wget $(echo "${target}" | sed 's/https:\/\/raw.githubusercontent.com/https:\/\/raw.fastgit.org/g' | sed 's/https:\/\/ghproxy.com\///g') -O sngxprov2p/$jsname
        wget $target -O sngxprov2p/$jsname
        crontab_list+="#$name \n"
        crontab_list+="$time node /scripts/$jsname >> /scripts/logs/${jsname%.*}.log 2>&1\n"
    fi
done
cat > sngxprov2p/docker/crontab_list.sh <<EOF
$(echo -e "$crontab_list")
EOF
