#拾取好友与自己零件、厂长翻倍任务、点击厂长任务
0 1,18 * * * node /scripts/jd_factory_component.js >> /scripts/logs/jd_factory_component.log 2>&1
#答题赢京豆
5 1 23-25 3 * node /scripts/jd_grassy.js >> /scripts/logs/jd_grassy.log 2>&1
#乘风破浪的姐姐
12 12 24-26 3 * node /scripts/jd_sister.js >> /scripts/logs/jd_sister.log 2>&1
