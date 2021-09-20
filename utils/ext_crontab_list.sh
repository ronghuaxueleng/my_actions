# 开卡
0 8,15 * * * cd /jd/OpenCard && bash run.sh
# 更新代理配置
* 3 * * * cd /root/.config/clash && /bin/bash refresh.sh
# 向机器人提交助力码
0 21 * * 6 bash -x /jd/shareCode.sh >> /jd/log/shareCode.log 2>&1
# 提交助力码
0 1 * * * bash /jd/submitme.sh >> /jd/log/submitme.log 2>&1
# 更新cookie
2 7 * * * python updateConfig.py /jd/config/config.sh >> /jd/log/updateCookie.py.log 2>&1
# 自动更新Cookie(需要配置wskey)
#3 7 * * * task cookie update >/dev/null 2>&1
