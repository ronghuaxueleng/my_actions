# 更新脚本
28,43 5-23 * * * bash git_pull >> /jd/log/git_pull.log 2>&1
# 删除 RmLogDaysAgo 指定天数以前的旧日志，本行为不记录日志
57 13 * * * bash rm_log >/dev/null 2>&1
# 开卡
0 8,15 * * * cd /jd/OpenCard && bash run.sh
# 导出所有互助码清单，日志在log/export_sharecodes下
48 5 * * * bash export_sharecodes
# 京豆变更通知
5 9 * * * bash jd jd_bean_change
# 更新代理配置
* 3 * * * cd /root/.config/clash && /usr/bin/bash refresh.sh
#拾取好友与自己零件、厂长翻倍任务、点击厂长任务
0 1,18 * * * node /scripts/jd_factory_component.js >> /scripts/logs/jd_factory_component.log 2>&1
#财富岛提现
0 0,12 * * * node /scripts/jd_cfdtx.js >> /scripts/logs/jd_cfdtx.log 2>&1
#生成财富岛提现token
59 23 * * * node /scripts/get_jx_token.js >> /scripts/logs/get_jx_token.log 2>&1
#生成京喜农场互助码
59 23 * * * node /scripts/get_jxnc_token.js >> /scripts/logs/get_jxnc_token.log 2>&1
#获取助力码
58 20 * * 6 node /scripts/jd_get_share_code_4_bot.js >> /scripts/logs/jd_get_share_code_4_bot.log 2>&1
# 提交助力码
0 21 * * 6 bash -x /jd/shareCode.sh >> /jd/log/shareCode.log 2>&1
# 财富岛热气球
1 * * * * node /scripts/jd_cfd_loop.js >> /scripts/logs/jd_cfd_loop.log 2>&1
# 预存验证
50 * * * * node /scripts/jd_validate_Worker.js >> /scripts/logs/jd_validate_Worker.log 2>&1
# 零食街
10 11 * * * node /scripts/jd_foodRunning.js >> /scripts/logs/jd_foodRunning.log 2>&1
# 早起福利
30 6 * * * node /scripts/jd_getUp.js >> /scripts/logs/jd_getUp.log 2>&1
# 宠汪汪二代目
15 */2 * * * node /scripts/jd_joy_new.js >> /scripts/logs/jd_joy_new.log 2>&1
# 发财大赢家
20 * * * * node /scripts/jd_big_winner.js >> /scripts/logs/jd_big_winner.log 2>&1
# 发财大赢家助力
25 * * * * node /scripts/jd_speed_redEnvelope.js >> /scripts/logs/jd_speed_redEnvelope.log 2>&1
