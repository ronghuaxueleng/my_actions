# 开卡
0 8,15 * * * cd /jd/OpenCard && bash run.sh
# 更新代理配置
* 3 * * * cd /root/.config/clash && /usr/bin/bash refresh.sh
# 提交助力码
0 21 * * 6 bash -x /jd/shareCode.sh >> /jd/log/shareCode.log 2>&1