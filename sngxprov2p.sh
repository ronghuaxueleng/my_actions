#!/bin/bash

[ ! -d sngxprov2p/docker ] && mkdir -p sngxprov2p/docker

json=$(curl -s "https://raw.fastgit.org/sngxpro/QuanX/master/V2pTaskSub/sngxprov2p.json")
# echo "$json" | jq '.list[]|.time,.job.target'
# echo "$json" | jq -r '.list[]  | . as {name: $name, time: $time, job: {target: $target}} | $name + "|" +$time + " " +$target | select( test("京[东|喜]"))'
# urls=$(echo "$json" | jq -r '.list[]  | . as {name: $name, time: $time, job: {target: $target}} | $name | select( test("京[东|喜]")) | $target' | sed 's/https:\/\/raw.githubusercontent.com/https:\/\/raw.fastgit.org/g' | sed 's/https:\/\/ghproxy.com\///g')
# for url in $urls; do
#     # wget $url -O sngxprov2p/${url##*/}
#     echo $url
# done
# crons=$(echo "$json" | jq -r '.list[]  | . as {name: $name, time: $time, job: {target: $target}} | $name + "|" +$time + "|" +$target' | awk -F'|' '{if ($1 ~ /京[东|喜]/) {print $2 " " $3}}')

# for cron in $crons; do
#     echo "${cron}"
# done

for row in $(echo "${json}" | jq -r '.list[] | @base64'); do
    _jq() {
        echo ${row} | base64 --decode | jq -r ${1}
    }

    name=$(_jq '.name')
    time=$(_jq '.time')
    target=$(_jq '.job|.target')
    if [ $name =~ "京[东|喜]" ]; then
        echo $name
        echo "$time"
        echo $target
    fi
done
