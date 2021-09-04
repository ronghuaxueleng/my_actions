# 开卡
0 8,15 * * * cd /jd/OpenCard && bash run.sh
# 更新代理配置
* 3 * * * cd /root/.config/clash && /bin/bash refresh.sh
# 向机器人提交助力码
0 21 * * 6 bash -x /jd/shareCode.sh >> /jd/log/shareCode.log 2>&1
# 提交助力码
0 1 * * * bash /jd/submitme.sh >> /jd/log/submitme.log 2>&1
# 更新cookie
0 12,23 * * * python updateCookie.py