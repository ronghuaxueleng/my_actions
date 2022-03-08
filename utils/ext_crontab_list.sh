# 开卡
0 8,15 * * * cd /jd/OpenCard && bash run.sh
# 更新代理配置
# * 3 * * * cd /root/.config/clash && /bin/bash refresh.sh
# 向机器人提交助力码
# 0 9,21 * * * bash -x /jd/shareCode.sh >> /jd/log/shareCode.log 2>&1
# 0 0 * * 1 bash -x /jd/shareCode1.sh >> /jd/log/shareCode1.log 2>&1
# 0 8,9 * * * bash -x /jd/shareCode2.sh >> /jd/log/shareCode2.log 2>&1
# 提交助力码
# 0 1 * * * bash /jd/submitme.sh >> /jd/log/submitme.log 2>&1
# 更新cookie
#2 7 * * * python updateConfig.py /jd/config/config.sh >> /jd/log/updateCookie.py.log 2>&1
#获取助力码
58 20 * * * task jd_get_share_code_4_bot >> /scripts/logs/jd_get_share_code_4_bot.log 2>&1
# 自动更新Cookie(需要配置wskey)
59 * * * * task cookie update >/dev/null 2>&1
# 京东极速版签到提现
15 4 * * * task jd_js_sign >/dev/null 2>&1

