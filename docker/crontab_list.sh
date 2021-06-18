# 更新脚本
28,43 5-23 * * * bash git_pull >> /jd/log/git_pull.log 2>&1
# 删除 RmLogDaysAgo 指定天数以前的旧日志，本行为不记录日志
57 13 * * * bash rm_log >/dev/null 2>&1
# 导出所有互助码清单，日志在log/export_sharecodes下
48 5 * * * bash export_sharecodes
# 京豆变更通知
5 9 * * * bash jd jd_bean_change
# 更新代理配置
* 0 * * * cd /root/.config/clash && /usr/bin/bash refresh.sh
#拾取好友与自己零件、厂长翻倍任务、点击厂长任务
0 1,18 * * * node /scripts/jd_factory_component.js >> /scripts/logs/jd_factory_component.log 2>&1
#财富岛提现
0 0 * * * node /scripts/jx_cfdtx.js >> /scripts/logs/jx_cfdtx.log 2>&1
#生成财富岛提现token
59 23 * * * node /scripts/get_jx_token.js >> /scripts/logs/get_jx_token.log 2>&1
#获取助力码
0 * * * * node /scripts/jd_get_share_code_4_bot.js >> /scripts/logs/jd_get_share_code_4_bot.log 2>&1
# 提交助力码
5 * * * * /usr/bin/python3 /jd/shareCode.py >> /jd/log/shareCode.log 2>&1