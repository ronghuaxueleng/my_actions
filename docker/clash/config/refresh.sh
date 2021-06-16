# 下载节点配置文件
wget -O config.yaml https://cdn.staticaly.com/gh/ronghuaxueleng/get_v2/main/c1
# 有些供应商会把 external-controller 设为 127.0.0.1，导致很多人搭起来连不上。这里替换成 0.0.0.0
sed -i 's/127.0.0.1:9090/0.0.0.0:9090/g' config.yaml
# 重启 clash 容器
docker container restart clash
# 等待 5 秒，clash 服务启动需要一点时间
sleep 5