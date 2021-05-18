#拾取好友与自己零件、厂长翻倍任务、点击厂长任务
0 1,18 * * * node /scripts/jd_factory_component.js >> /scripts/logs/jd_factory_component.log 2>&1
10 10 * * * node /scripts/jd_xmf.js >> /scripts/logs/jd_xmf.log 2>&1
0 0 * * * node /scripts/jx_cfdtx.js >> /scripts/logs/jx_cfdtx.log 2>&1
#joy总动员
30 10 * * * node /scripts/jd_friend.js >> /scripts/logs/jd_friend.log 2>&1