#!/bin/bash
# 下载节点配置文件
wget -O config.yaml https://gitee.com/getready/get_v2/raw/main/pub/changfengoss.yaml
# 有些供应商会把 external-controller 设为 127.0.0.1，导致很多人搭起来连不上。这里替换成 0.0.0.0
sed -i 's/127.0.0.1:9090/0.0.0.0:9090/g' config.yaml
# 重启 clash
ps -ef | grep clash | grep -v grep | awk '{print $2}' | xargs kill -9
clash