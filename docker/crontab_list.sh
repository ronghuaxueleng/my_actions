# 每3天的23:50分清理一次日志
50 23 */3 * * rm -rf /scripts/logs/*.log
##############短期活动##############
#极速版红包
40 0,8 * * * node /scripts/jd_speed_redpocke.js >> /scripts/logs/jd_speed_redpocke.log 2>&1
#jd_health_MyActions
13 1,7,22 * * * node /scripts/jd_health_MyActions.js >> /scripts/logs/jd_health_MyActions.log 2>&1
#jd_health_MyActions_collect
5-45/20 * * * * node /scripts/jd_health_MyActions_collect.js >> /scripts/logs/jd_health_MyActions_collect.log 2>&1
#jd_market_lottery
4 10,19 * * * node /scripts/jd_market_lottery.js >> /scripts/logs/jd_market_lottery.log 2>&1
#jd_jintie
10 0 * * * node /scripts/jd_jintie.js >> /scripts/logs/jd_jintie.log 2>&1
#jd_daily_lottery
13 1,22,23 * * * node /scripts/jd_daily_lottery.js >> /scripts/logs/jd_daily_lottery.log 2>&1
#jd_beauty
1 7,12,19 * * * node /scripts/jd_beauty.js >> /scripts/logs/jd_beauty.log 2>&1
#金榜创造营
40 9,21 * * * node /scripts/jd_gold_creator.js >> /scripts/logs/jd_gold_creator.log 2>&1
#5g超级盲盒
0 */4 * * * node /scripts/jd_mohe.js >> /scripts/logs/jd_mohe.log 2>&1
#京喜牧场
20 0-23/3 * * * node /scripts/jd_jxmc.js >> /scripts/logs/jd_jxmc.log 2>&1
#东东电竞经理
47 10 * * * node /scripts/jd_djjl.js >> /scripts/logs/jd_djjl.log 2>&1
#众筹许愿池
20 12 * * * node /scripts/jd_wishingPool.js >> /scripts/logs/jd_wishingPool.log 2>&1
#新签到
10 0,18 * * * node /scripts/jd_NewSign.js >> /scripts/logs/jd_NewSign.log 2>&1
# 翻翻乐(7.15-8.15)
20 * * * * node /scripts/jd_flipcards.js >> /scripts/logs/jd_flipcards.log 2>&1
# 京喜财富岛提现
0 0,12 * * * node /scripts/jd_cfd_MyActionstx.js >> /scripts/logs/jd_cfd_MyActionstx.log 2>&1
# 摇钱树助力
0-59/30 * * * * node /scripts/jd_moneyTree_help.js >> /scripts/logs/jd_moneyTree_help.log 2>&1
# MMdou
21 9 * * * node /scripts/jd_MMdou.js >> /scripts/logs/jd_MMdou.log 2>&1
#京喜领88元红包
30 1,6,12,15,18 * * * node /scripts/jd_jxlhb.js >> /scripts/logs/jd_jxlhb.log 2>&1
#京喜首页签到
20 1 * * * node /scripts/jx_sign.js >> /scripts/logs/jx_sign.log 2>&1
#特物
30 8,9 * * * node /scripts/jd_productZ4Brand.js >> /scripts/logs/jd_productZ4Brand.log 2>&1
#女装盲盒
54 9 * * * node /scripts/jd_nzmh.js >> /scripts/logs/jd_nzmh.log 2>&1
# 京小鸽吾悦寄
35 4,7 * * * node /scripts/jd_jxg.js >> /scripts/logs/jd_jxg.log 2>&1
# 领卷中心签到
15 10 * * * node /scripts/jd_ccSign.js >> /scripts/logs/jd_ccSign.log 2>&1
# 零食街
15 0,12 * * * node /scripts/jd_lsj.js >> /scripts/logs/jd_lsj.log 2>&1
# jd_opencard16
0 1,5,16 * * * node /scripts/jd_opencard16.js >> /scripts/logs/jd_opencard16.log 2>&1
# jd_opencard24
15 6,14,23 * * * node /scripts/jd_opencard24.js >> /scripts/logs/jd_opencard24.log 2>&1
# jd_opencard22
30 5,13,22 * * * node /scripts/jd_opencard22.js >> /scripts/logs/jd_opencard22.log 2>&1
# jd_opencard21
30 4,12,21 * * * node /scripts/jd_opencard21.js >> /scripts/logs/jd_opencard21.log 2>&1
# jd_opencard20
30 0,9,18 * * * node /scripts/jd_opencard20.js >> /scripts/logs/jd_opencard20.log 2>&1
# jd_opencard17
30 1,10,19 * * * node /scripts/jd_opencard17.js >> /scripts/logs/jd_opencard17.log 2>&1
# jd_opencard18
30 2,8,17 * * * node /scripts/jd_opencard18.js >> /scripts/logs/jd_opencard18.log 2>&1
# jd_opencard19
30 3,11,20 * * * node /scripts/jd_opencard19.js >> /scripts/logs/jd_opencard19.log 2>&1
# 内容鉴赏官
15 2,5 * * * node /scripts/jd_connoisseur.js >> /scripts/logs/jd_connoisseur.log 2>&1
# 京喜财富岛合成月饼
5 * * * * node /scripts/jd_cfd_MyActions_mooncake.js >> /scripts/logs/jd_cfd_MyActions_mooncake.log 2>&1
# 母婴-跳跳乐
1 0,11,21 * * * node /scripts/jd_jump.js >> /scripts/logs/jd_jump.log 2>&1
# 明星小店
12 9,19 10-17 9 * node /scripts/jd_star_shop.js >> /scripts/logs/jd_star_shop.log 2>&1
# 送豆得豆
24 0,12 * * * node /scripts/jd_sendBeans.js >> /scripts/logs/jd_sendBeans.log 2>&1
#东东世界
15 3,16 * * * node /scripts/jd_ddworld.js >> /scripts/logs/jd_ddworld.log 2>&1
#京东手机狂欢城
0 0-18/6 * * * node /scripts/jd_carnivalcity.js >> /scripts/logs/jd_carnivalcity.log 2>&1
##############长期活动##############
# 签到
0 0,18 * * * cd /scripts && node jd_bean_sign.js >> /scripts/logs/jd_bean_sign.log 2>&1
# 东东超市兑换奖品
0,30 0 * * * node /scripts/jd_blueCoin.js >> /scripts/logs/jd_blueCoin.log 2>&1
# 摇京豆
0 0 * * * node /scripts/jd_club_lottery.js >> /scripts/logs/jd_club_lottery.log 2>&1
# 东东农场
5 6-18/6 * * * node /scripts/jd_fruit_MyActions.js >> /scripts/logs/jd_fruit_MyActions.log 2>&1
# 摇钱树
0 */2 * * * node /scripts/jd_moneyTree.js >> /scripts/logs/jd_moneyTree.log 2>&1
# 东东萌宠
5 6-18/6 * * * node /scripts/jd_pet_MyActions.js >> /scripts/logs/jd_pet_MyActions.log 2>&1
# 京东种豆得豆
0 */6 * * * node /scripts/jd_plantBean_MyActions.js >> /scripts/logs/jd_plantBean_MyActions.log 2>&1
# 京东全民开红包
1 1 * * * node /scripts/jd_redPacket.js >> /scripts/logs/jd_redPacket.log 2>&1
# 进店领豆
10 0 * * * node /scripts/jd_shop.js >> /scripts/logs/jd_shop.log 2>&1
# 京东天天加速
8 */3 * * * node /scripts/jd_speed.js >> /scripts/logs/jd_speed.log 2>&1
# 东东超市
11 */6 * * * node /scripts/jd_superMarket.js >> /scripts/logs/jd_superMarket.log 2>&1
# 取关京东店铺商品
55 23 * * * node /scripts/jd_unsubscribe.js >> /scripts/logs/jd_unsubscribe.log 2>&1
# 京豆变动通知
0 10 * * * node /scripts/jd_bean_change.js >> /scripts/logs/jd_bean_change.log 2>&1
# 京豆变动简洁版
0 9 * * * node /scripts/jd_bean_change_clean.js >> /scripts/logs/jd_bean_change_clean.log 2>&1
# 天天提鹅
18 * * * * node /scripts/jd_daily_egg.js >> /scripts/logs/jd_daily_egg.log 2>&1
# 金融养猪
12 * * * * node /scripts/jd_pigPet.js >> /scripts/logs/jd_pigPet.log 2>&1
# 京喜工厂
20 * * * * node /scripts/jd_dreamFactory_MyActions.js >> /scripts/logs/jd_dreamFactory_MyActions.log 2>&1
# 京喜工厂开团
20 9,13,16 * * * node /scripts/jd_dreamFactory_MyActions_tuan.js >> /scripts/logs/jd_dreamFactory_MyActions_tuan.log 2>&1
# 东东小窝
16 6,23 * * * node /scripts/jd_small_home.js >> /scripts/logs/jd_small_home.log 2>&1
# 东东工厂
36 */4 * * * node /scripts/jd_jdfactory_MyActions.js >> /scripts/logs/jd_jdfactory_MyActions.log 2>&1
# 十元街
36 0-23/4 * * * node /scripts/jd_syj.js >> /scripts/logs/jd_syj.log 2>&1
# 京东快递签到
23 1 * * * node /scripts/jd_kd.js >> /scripts/logs/jd_kd.log 2>&1
# 京东汽车(签到满500赛点可兑换500京豆)
0 0 * * * node /scripts/jd_car.js >> /scripts/logs/jd_car.log 2>&1
# 领京豆额外奖励(每日可获得3京豆)
33 0-23/4 * * * node /scripts/jd_bean_home.js >> /scripts/logs/jd_bean_home.log 2>&1
# 京东直播(每日18豆)
10-20/5 12 * * * node /scripts/jd_live.js >> /scripts/logs/jd_live.log 2>&1
# 微信小程序京东赚赚
30 0,1 * * * node /scripts/jd_jdzz.js >> /scripts/logs/jd_jdzz.log 2>&1
# 导到所有互助码
47 7 * * * node /scripts/jd_get_share_code.js >> /scripts/logs/jd_get_share_code.log 2>&1
# 口袋书店
7 8,12,18 * * * node /scripts/jd_bookshop.js >> /scripts/logs/jd_bookshop.log 2>&1
# 签到领现金
27 7,15 * * * node /scripts/jd_cash_MyActions.js >> /scripts/logs/jd_cash_MyActions.log 2>&1
# 闪购盲盒
27 8 * * * node /scripts/jd_sgmh_MyActions.js >> /scripts/logs/jd_sgmh_MyActions.log 2>&1
# 京东秒秒币
10 7 * * * node /scripts/jd_ms.js >> /scripts/logs/jd_ms.log 2>&1
# 京喜财富岛
10 * * * * node /scripts/jd_cfd_MyActions.js >> /scripts/logs/jd_cfd_MyActions.log 2>&1
# 京喜财富岛提现
0 0 * * * node /scripts/jx_cfdtx.js >> /scripts/logs/jx_cfdtx.log 2>&1
# 京东极速版
48 0,12,18 * * * node /scripts/jd_speed_sign.js >> /scripts/logs/jd_speed_sign.log 2>&1
# 京东抽奖机
22 0,12,18 * * * node /scripts/jd_lotteryMachine.js >> /scripts/logs/jd_lotteryMachine.log 2>&1
# 宠汪汪
45 */2,23 * * * node /scripts/jd_joy.js >> /scripts/logs/jd_joy.log 2>&1
# 宠汪汪积分兑换京豆
59 7,15,23 * * * node /scripts/jd_joy_reward.js >> /scripts/logs/jd_joy_reward.log 2>&1
# 宠汪汪喂食
35 */1 * * * node /scripts/jd_joy_feedPets.js >> /scripts/logs/jd_joy_feedPets.log 2>&1
# 宠汪汪偷好友积分与喂食
30 0-21/3 * * * node /scripts/jd_joy_steal.js >> /scripts/logs/jd_joy_steal.log 2>&1
# 宠汪汪邀请助力
10 13-20/1 * * * node /scripts/jd_joy_run.js >> /scripts/logs/jd_joy_run.log 2>&1
# 京东摇一摇
0 1,17 * * * node /scripts/jd_shake.js >> /scripts/logs/jd_shake.log 2>&1
京东试用（默认注释，请配合取关脚本使用）
10 0 * * * node /scripts/jd_try_new.js >> /scripts/logs/jd_try_new.log 2>&1
##############默认注释活动##############
# jd_cash_MyActions_exchange
# 0,1,2 0 * * * node /scripts/jd_cash_MyActions_exchange.js >> /scripts/logs/jd_cash_MyActions_exchange.log 2>&1
# 京喜农场
#0 9,12,18 * * * node /scripts/jd_jxnc.js >> /scripts/logs/jd_jxnc.log 2>&1
# 价格保护
# 48 */8 * * * node /scripts/jd_work_price.js >> /scripts/logs/jd_work_price.log 2>&1
# 惊喜红包返现助力
# 48 20 * * * node /scripts/jx_aid_cashback.js >> /scripts/logs/jx_aid_cashback.log 2>&1
# jd_car_exchange
#0 0 * * * node /scripts/jd_car_exchange.js >> /scripts/logs/jd_car_exchange.log 2>&1
# 京东资产变动通知
2 9 * * * node /scripts/jd_bean_change.js >> /scripts/logs/jd_bean_change.log 2>&1
# 领京豆额外奖励
10 7 * * * node /scripts/jd_bean_home.js >> /scripts/logs/jd_bean_home.log 2>&1
# 省钱大赢家之翻翻乐
20 * * * * node /scripts/jd_big_winner.js >> /scripts/logs/jd_big_winner.log 2>&10 
# 东东超市兑换奖品
0 0 * * * node /scripts/jd_blueCoin.js >> /scripts/logs/jd_blueCoin.log 2>&1
# 口袋书店
1 8,12,18 * * * node /scripts/jd_bookshop.js >> /scripts/logs/jd_bookshop.log 2>&1
# 京东汽车
10 7 * * * node /scripts/jd_car.js >> /scripts/logs/jd_car.log 2>&1
# 京东汽车兑换
0 0 * * * node /scripts/jd_car_exchange.js >> /scripts/logs/jd_car_exchange.log 2>&1
# 签到领现金
2 0-23/4 * * * node /scripts/jd_cash.js >> /scripts/logs/jd_cash.log 2>&1
# 京喜财富岛
5 8,13,19 * * * node /scripts/jd_cfd.js >> /scripts/logs/jd_cfd.log 2>&1
# 摇京豆
5 0,23 * * * node /scripts/jd_club_lottery.js >> /scripts/logs/jd_club_lottery.log 2>&1
# crazyJoy任务
10 9 * * * node /scripts/jd_crazy_joy.js >> /scripts/logs/jd_crazy_joy.log 2>&1
# 监控crazyJoy分红
10 12 * * * node /scripts/jd_crazy_joy_bonus.js >> /scripts/logs/jd_crazy_joy_bonus.log 2>&1
# crazyJoy挂机
10 1,12 * * * node /scripts/jd_crazy_joy_coin.js >> /scripts/logs/jd_crazy_joy_coin.log 2>&1
# 天天提鹅
10 * * * * node /scripts/jd_daily_egg.js >> /scripts/logs/jd_daily_egg.log 2>&1
# 每日抽奖
13 1,22,23 * * * node /scripts/jd_daily_lottery.js >> /scripts/logs/jd_daily_lottery.log 2>&1
# 京喜工厂
10 * * * * node /scripts/jd_dreamFactory_JDHelloWorld.js >> /scripts/logs/jd_dreamFactory_JDHelloWorld.log 2>&1
# 京喜工厂助力
10 * * * * node /scripts/jd_dreamFactory_JDHelloWorld_help.js >> /scripts/logs/jd_dreamFactory_JDHelloWorld_help.log 2>&1
# 京东家庭号
1 12,23 * * * node /scripts/jd_family.js >> /scripts/logs/jd_family.log 2>&1
# 东东农场
5 6-18/6 * * * node /scripts/jd_fruit_JDHelloWorld.js >> /scripts/logs/jd_fruit_JDHelloWorld.log 2>&1
# 获取互助码
20 13 * * 6 node /scripts/jd_get_share_code.js >> /scripts/logs/jd_get_share_code.log 2>&1
# 金榜创造营
13 1,22 * * * node /scripts/jd_gold_creator.js >> /scripts/logs/jd_gold_creator.log 2>&1
# 东东健康社区
13 1,6,22 * * * node /scripts/jd_health_JDHelloWorld.js >> /scripts/logs/jd_health_JDHelloWorld.log 2>&1
# 东东健康社区收集能量
5-45/20 * * * * node /scripts/jd_health_JDHelloWorld_collect.js >> /scripts/logs/jd_health_JDHelloWorld_collect.log 2>&1
# 东东工厂
10 * * * * node /scripts/jd_jdfactory_JDHelloWorld.js >> /scripts/logs/jd_jdfactory_JDHelloWorld.log 2>&1
# 京东赚赚
10 0 * * * node /scripts/jd_jdzz.js >> /scripts/logs/jd_jdzz.log 2>&1
# 领金贴
10 0 * * * node /scripts/jd_jin_tie.js >> /scripts/logs/jd_jin_tie.log 2>&1
# 京东宠汪汪
15 0-23/2 * * * node /scripts/jd_joy.js >> /scripts/logs/jd_joy.log 2>&1
# 京东宠汪汪喂食
15 0-23/1 * * * node /scripts/jd_joy_feedPets.js >> /scripts/logs/jd_joy_feedPets.log 2>&1
# 宠汪汪积分兑换奖品
0 0-16/8 * * * node /scripts/jd_joy_reward.js >> /scripts/logs/jd_joy_reward.log 2>&1
# 宠汪汪邀请助力与赛跑助力
15 10 * * * node /scripts/jd_joy_run.js >> /scripts/logs/jd_joy_run.log 2>&1
# 宠汪汪偷好友积分与狗粮
10 0-21/3 * * * node /scripts/jd_joy_steal.js >> /scripts/logs/jd_joy_steal.log 2>&1
# 跳跳乐瓜分京豆
1 0,11,21 * * * node /scripts/jd_jump.js >> /scripts/logs/jd_jump.log 2>&1
# 京喜领88元红包
4 10 * * * node /scripts/jd_jxlhb.js >> /scripts/logs/jd_jxlhb.log 2>&1
# 惊喜牧场
20 0-23/3 * * * node /scripts/jd_jxmc.js >> /scripts/logs/jd_jxmc.log 2>&1
# 京喜农场
0 9,12,18 * * * node /scripts/jd_jxnc.js >> /scripts/logs/jd_jxnc.log 2>&1
# 京东快递签到
10 0 * * * node /scripts/jd_kd.js >> /scripts/logs/jd_kd.log 2>&1
# 京东直播
10-20/5 12 * * * node /scripts/jd_live.js >> /scripts/logs/jd_live.log 2>&1
# 超级直播间红包雨
0,30 0-23/1 * * * node /scripts/jd_live_redrain.js >> /scripts/logs/jd_live_redrain.log 2>&1
# 幸运大转盘
4 10 * * * node /scripts/jd_market_lottery.js >> /scripts/logs/jd_market_lottery.log 2>&1
# 新潮品牌狂欢
4 10 * * * node /scripts/jd_mcxhd.js >> /scripts/logs/jd_mcxhd.log 2>&1
# 5G超级盲盒
0 0,1-23/3 * * * node /scripts/jd_mohe.js >> /scripts/logs/jd_mohe.log 2>&1
# 京东摇钱树
3 0-23/2 * * * node /scripts/jd_moneyTree.js >> /scripts/logs/jd_moneyTree.log 2>&1
# 京东秒秒币
10 7 * * * node /scripts/jd_ms.js >> /scripts/logs/jd_ms.log 2>&1
# 点点券
10 0,20 * * * node /scripts/jd_necklace.js >> /scripts/logs/jd_necklace.log 2>&1
# 女装盲盒
35 1,23 * * * node /scripts/jd_nzmh.js >> /scripts/logs/jd_nzmh.log 2>&1
# 东东萌宠
15 6-18/6 * * * node /scripts/jd_pet_JDHelloWorld.js >> /scripts/logs/jd_pet_JDHelloWorld.log 2>&1
# 京东金融养猪猪
12 0-23/6 * * * node /scripts/jd_pigPet.js >> /scripts/logs/jd_pigPet.log 2>&1
# 种豆得豆
1 7-21/2 * * * node /scripts/jd_plantBean_JDHelloWorld.js >> /scripts/logs/jd_plantBean_JDHelloWorld.log 2>&1
# 京东保价
0 2 * * * node /scripts/jd_price.js >> /scripts/logs/jd_price.log 2>&1
# 京东全民开红包
1 1,2,23 * * * node /scripts/jd_redPacket.js >> /scripts/logs/jd_redPacket.log 2>&1
# 闪购盲盒
20 8 * * * node /scripts/jd_sgmh_JDHelloWorld.js >> /scripts/logs/jd_sgmh_JDHelloWorld.log 2>&1
# 进店领豆
10 0 * * * node /scripts/jd_shop.js >> /scripts/logs/jd_shop.log 2>&1
# 东东小窝
16 22 * * * node /scripts/jd_small_home.js >> /scripts/logs/jd_small_home.log 2>&1
# 京东天天加速
8 0-23/3 * * * node /scripts/jd_speed.js >> /scripts/logs/jd_speed.log 2>&1
# 京东极速版红包
20 0,22 * * * node /scripts/jd_speed_redpocke.js >> /scripts/logs/jd_speed_redpocke.log 2>&1
# 京东极速版
0 7 * * * node /scripts/jd_speed_sign.js >> /scripts/logs/jd_speed_sign.log 2>&1
# 明星小店
0 1,21 * * * node /scripts/jd_star_shop.js >> /scripts/logs/jd_star_shop.log 2>&1
# 东东超市
11 * * * * node /scripts/jd_superMarket.js >> /scripts/logs/jd_superMarket.log 2>&1
# 赚京豆
10 0,7,23 * * * node /scripts/jd_syj.js >> /scripts/logs/jd_syj.log 2>&1
# 取关京东店铺商品
55 23 * * * node /scripts/jd_unsubscribe.js >> /scripts/logs/jd_unsubscribe.log 2>&1
# 小米运动
15 17 * * * node /scripts/backUp/xmSport.js >> /scripts/logs/backUp/xmSport.log 2>&1
# 电竞经理
0 0-23/2 * * * node /scripts/jd_EsportsManager.js >> /scripts/logs/jd_EsportsManager.log 2>&1
# 导出所有互助码清单，日志在log/export_sharecodes下
48 5 * * * bash export_sharecodes
#拾取好友与自己零件、厂长翻倍任务、点击厂长任务
0 1,18 * * * node /scripts/jd_factory_component.js >> /scripts/logs/jd_factory_component.log 2>&1
#财富岛提现
# 0 0,12 * * * node /scripts/jd_cfdtx.js >> /scripts/logs/jd_cfdtx.log 2>&1
#生成财富岛提现token
# 59 23 * * * node /scripts/get_jx_token.js >> /scripts/logs/get_jx_token.log 2>&1
#生成京喜农场互助码
59 23 * * * node /scripts/get_jxnc_token.js >> /scripts/logs/get_jxnc_token.log 2>&1
#获取助力码
58 20 * * 6 node /scripts/jd_get_share_code_4_bot.js >> /scripts/logs/jd_get_share_code_4_bot.log 2>&1
# 财富岛热气球
1 * * * * node /scripts/jd_cfd_loop.js >> /scripts/logs/jd_cfd_loop.log 2>&1
# 预存验证
50 * * * * node /scripts/jd_validate_Worker.js >> /scripts/logs/jd_validate_Worker.log 2>&1
# 京东资产变动通知
2 9 * * * node /scripts/jd_bean_change.js >> /scripts/logs/jd_bean_change.log 2>&1
# 领京豆额外奖励
10 7 * * * node /scripts/jd_bean_home.js >> /scripts/logs/jd_bean_home.log 2>&1
# 省钱大赢家之翻翻乐
20 * * * * node /scripts/jd_big_winner.js >> /scripts/logs/jd_big_winner.log 2>&10 
# 东东超市兑换奖品
0 0 * * * node /scripts/jd_blueCoin.js >> /scripts/logs/jd_blueCoin.log 2>&1
# 口袋书店
1 8,12,18 * * * node /scripts/jd_bookshop.js >> /scripts/logs/jd_bookshop.log 2>&1
# 京东汽车
10 7 * * * node /scripts/jd_car.js >> /scripts/logs/jd_car.log 2>&1
# 京东汽车兑换
0 0 * * * node /scripts/jd_car_exchange.js >> /scripts/logs/jd_car_exchange.log 2>&1
# 签到领现金
2 0-23/4 * * * node /scripts/jd_cash_JDHelp.js >> /scripts/logs/jd_cash_JDHelp.log 2>&1
# 京喜财富岛
5 8,13,19 * * * node /scripts/jd_cfd_JDHelp.js >> /scripts/logs/jd_cfd_JDHelp.log 2>&1
# 摇京豆
5 0,23 * * * node /scripts/jd_club_lottery.js >> /scripts/logs/jd_club_lottery.log 2>&1
# crazyJoy任务
10 9 * * * node /scripts/jd_crazy_joy.js >> /scripts/logs/jd_crazy_joy.log 2>&1
# 监控crazyJoy分红
10 12 * * * node /scripts/jd_crazy_joy_bonus.js >> /scripts/logs/jd_crazy_joy_bonus.log 2>&1
# crazyJoy挂机
10 1,12 * * * node /scripts/jd_crazy_joy_coin.js >> /scripts/logs/jd_crazy_joy_coin.log 2>&1
# 天天提鹅
10 * * * * node /scripts/jd_daily_egg.js >> /scripts/logs/jd_daily_egg.log 2>&1
# 每日抽奖
13 1,22,23 * * * node /scripts/jd_daily_lottery.js >> /scripts/logs/jd_daily_lottery.log 2>&1
# 京喜工厂
10 * * * * node /scripts/jd_dreamFactory_JDHelp.js >> /scripts/logs/jd_dreamFactory_JDHelp.log 2>&1
# 京东家庭号
1 12,23 * * * node /scripts/jd_family.js >> /scripts/logs/jd_family.log 2>&1
# 东东农场
5 6-18/6 * * * node /scripts/jd_fruit_JDHelp.js >> /scripts/logs/jd_fruit_JDHelp.log 2>&1
# 获取互助码
20 13 * * 6 node /scripts/jd_get_share_code.js >> /scripts/logs/jd_get_share_code.log 2>&1
# 金榜创造营
13 1,22 * * * node /scripts/jd_gold_creator.js >> /scripts/logs/jd_gold_creator.log 2>&1
# 东东健康社区
13 1,6,22 * * * node /scripts/jd_health_JDHelp.js >> /scripts/logs/jd_health_JDHelp.log 2>&1
# 东东健康社区收集能量
5-45/20 * * * * node /scripts/jd_health_JDHelp_collect.js >> /scripts/logs/jd_health_JDHelp_collect.log 2>&1
# 东东工厂
10 * * * * node /scripts/jd_jdfactory_JDHelp.js >> /scripts/logs/jd_jdfactory_JDHelp.log 2>&1
# 京东赚赚
10 0 * * * node /scripts/jd_jdzz.js >> /scripts/logs/jd_jdzz.log 2>&1
# 领金贴
10 0 * * * node /scripts/jd_jin_tie.js >> /scripts/logs/jd_jin_tie.log 2>&1
# 京东宠汪汪
15 0-23/2 * * * node /scripts/jd_joy.js >> /scripts/logs/jd_joy.log 2>&1
# 京东宠汪汪喂食
15 0-23/1 * * * node /scripts/jd_joy_feedPets.js >> /scripts/logs/jd_joy_feedPets.log 2>&1
# 宠汪汪积分兑换奖品
0 0-16/8 * * * node /scripts/jd_joy_reward.js >> /scripts/logs/jd_joy_reward.log 2>&1
# 宠汪汪邀请助力与赛跑助力
15 10 * * * node /scripts/jd_joy_run.js >> /scripts/logs/jd_joy_run.log 2>&1
# 宠汪汪偷好友积分与狗粮
10 0-21/3 * * * node /scripts/jd_joy_steal.js >> /scripts/logs/jd_joy_steal.log 2>&1
# 跳跳乐瓜分京豆
1 0,11,21 * * * node /scripts/jd_jump.js >> /scripts/logs/jd_jump.log 2>&1
# 京喜领88元红包
4 10 * * * node /scripts/jd_jxlhb.js >> /scripts/logs/jd_jxlhb.log 2>&1
# 惊喜牧场
20 0-23/3 * * * node /scripts/jd_jxmc.js >> /scripts/logs/jd_jxmc.log 2>&1
# 京喜农场
0 9,12,18 * * * node /scripts/jd_jxnc.js >> /scripts/logs/jd_jxnc.log 2>&1
# 京东快递签到
10 0 * * * node /scripts/jd_kd.js >> /scripts/logs/jd_kd.log 2>&1
# 京东直播
10-20/5 12 * * * node /scripts/jd_live.js >> /scripts/logs/jd_live.log 2>&1
# 超级直播间红包雨
0,30 0-23/1 * * * node /scripts/jd_live_redrain.js >> /scripts/logs/jd_live_redrain.log 2>&1
# 幸运大转盘
4 10 * * * node /scripts/jd_market_lottery.js >> /scripts/logs/jd_market_lottery.log 2>&1
# 新潮品牌狂欢
4 10 * * * node /scripts/jd_mcxhd.js >> /scripts/logs/jd_mcxhd.log 2>&1
# 5G超级盲盒
0 0,1-23/3 * * * node /scripts/jd_mohe.js >> /scripts/logs/jd_mohe.log 2>&1
# 京东摇钱树
3 0-23/2 * * * node /scripts/jd_moneyTree.js >> /scripts/logs/jd_moneyTree.log 2>&1
# 京东秒秒币
10 7 * * * node /scripts/jd_ms.js >> /scripts/logs/jd_ms.log 2>&1
# 点点券
10 0,20 * * * node /scripts/jd_necklace.js >> /scripts/logs/jd_necklace.log 2>&1
# 女装盲盒
35 1,23 * * * node /scripts/jd_nzmh.js >> /scripts/logs/jd_nzmh.log 2>&1
# 东东萌宠
15 6-18/6 * * * node /scripts/jd_pet_JDHelp.js >> /scripts/logs/jd_pet_JDHelp.log 2>&1
# 京东金融养猪猪
12 0-23/6 * * * node /scripts/jd_pigPet.js >> /scripts/logs/jd_pigPet.log 2>&1
# 种豆得豆
1 7-21/2 * * * node /scripts/jd_plantBean_JDHelp.js >> /scripts/logs/jd_plantBean_JDHelp.log 2>&1
# 京东保价
0 2 * * * node /scripts/jd_price.js >> /scripts/logs/jd_price.log 2>&1
# 京东全民开红包
1 1,2,23 * * * node /scripts/jd_redPacket.js >> /scripts/logs/jd_redPacket.log 2>&1
# 闪购盲盒
20 8 * * * node /scripts/jd_sgmh_JDHelp.js >> /scripts/logs/jd_sgmh_JDHelp.log 2>&1
# 进店领豆
10 0 * * * node /scripts/jd_shop.js >> /scripts/logs/jd_shop.log 2>&1
# 东东小窝
16 22 * * * node /scripts/jd_small_home.js >> /scripts/logs/jd_small_home.log 2>&1
# 京东天天加速
8 0-23/3 * * * node /scripts/jd_speed.js >> /scripts/logs/jd_speed.log 2>&1
# 京东极速版红包
20 0,22 * * * node /scripts/jd_speed_redpocke.js >> /scripts/logs/jd_speed_redpocke.log 2>&1
# 京东极速版
0 7 * * * node /scripts/jd_speed_sign.js >> /scripts/logs/jd_speed_sign.log 2>&1
# 明星小店
0 1,21 * * * node /scripts/jd_star_shop.js >> /scripts/logs/jd_star_shop.log 2>&1
# 东东超市
11 * * * * node /scripts/jd_superMarket.js >> /scripts/logs/jd_superMarket.log 2>&1
# 取关京东店铺商品
55 23 * * * node /scripts/jd_unsubscribe.js >> /scripts/logs/jd_unsubscribe.log 2>&1
# 小米运动
15 17 * * * node /scripts/backUp/xmSports.js >> /scripts/logs/backUp/xmSports.log 2>&1
# 环境测试
0 12 * * * node /scripts/jd_api_test.js >> /scripts/logs/jd_api_test.log 2>&1
# 电竞经理
0 0-23/2 * * * node /scripts/jd_EsportsManager.js >> /scripts/logs/jd_EsportsManager.log 2>&1
# 每3天的23:50分清理一次日志(互助码不清理，proc_file.sh对该文件进行了去重)
50 23 */3 * * find /scripts/logs -name '*.log' | grep -v 'sharecodeCollection' | xargs rm -rf
# 收集助力码
30 * * * * sh /scripts/docker/auto_help.sh collect >> /scripts/logs/auto_help_collect.log 2>&1
##############短期活动##############
# 女装盲盒
35 1,22 * * * node /scripts/jd_nzmh.js >> /scripts/logs/jd_nzmh.log 2>&1
# 京东极速版红包(活动时间：2021-6-1至2021-6-30)
45 0,23 * * * node /scripts/jd_speed_redpocke.js >> /scripts/logs/jd_speed_redpocke.log 2>&1
# 超级直播间红包雨(活动时间不定期，出现异常提示请忽略。红包雨期间会正常)
1,31 0-23/1 * * * node /scripts/jd_live_redrain.js >> /scripts/logs/jd_live_redrain.log 2>&1
# 每日抽奖(活动时间：2021-05-01至2021-05-31)
30 1,22,23 * * * node /scripts/jd_daily_lottery.js >> /scripts/logs/jd_daily_lottery.log 2>&1
# 金榜创造营 活动时间：2021-05-21至2021-12-31
0 1,22 * * * node /scripts/jd_gold_creator.js >> /scripts/logs/jd_gold_creator.log 2>&1
# 5G超级盲盒(活动时间：2021-8-2到2021-10-29)
0 0,1-23/3 * * * node /scripts/jd_mohe.js >> /scripts/logs/jd_mohe.log 2>&1
# 酷跑零食街
18 7,12,20 * * * node /scripts/jd_foodRunning.js >> /scripts/logs/jd_foodRunning.log 2>&1
# 省钱大赢家翻翻乐(7.15-8.15)
20 * * * * node /scripts/jd_big_winner.js >> /scripts/logs/jd_big_winner.log 2>&1
# 京喜领88元红包
30 1,6,12,21 * * * node /scripts/jd_jxlhb.js >> /scripts/logs/jd_jxlhb.log 2>&1
# 众筹许愿池
20 0,2 * * * node /scripts/jd_wish.js >> /scripts/logs/jd_wish.log 2>&1
# 内容鉴赏官
15 2,5 * * * node /scripts/jd_connoisseur.js >> /scripts/logs/jd_connoisseur.log 2>&1
# 母婴-跳跳乐
1 0,11,21 * * * node /scripts/jd_jump.js >> /scripts/logs/jd_jump.log 2>&1
# 手机狂欢城(2021-9-16至2021-10-1)
0 0-18/6 * * * node /scripts/jd_carnivalcity.js >> /scripts/logs/jd_carnivalcity.log 2>&1
# 东东世界
25 2,10 * * * node /scripts/jd_ddworld.js >> /scripts/logs/jd_ddworld.log 2>&1
##############长期活动##############
# 签到
7 0,17 * * * cd /scripts && node jd_bean_sign.js >> /scripts/logs/jd_bean_sign.log 2>&1
# 京喜签到
5 1,8 * * * node /scripts/jx_sign.js >> /scripts/logs/jx_sign.log 2>&1
# 东东超市兑换奖品
59 23 * * * node /scripts/jd_blueCoin.js >> /scripts/logs/jd_blueCoin.log 2>&1
# 摇京豆
6 0,23 * * * node /scripts/jd_club_lottery.js >> /scripts/logs/jd_club_lottery.log 2>&1
# 东东农场
15 6-18/6 * * * node /scripts/jd_fruit_Aaron.js >> /scripts/logs/jd_fruit_Aaron.log 2>&1
# 宠汪汪
5 */2,9,23 * * * node /scripts/jd_joy.js >> /scripts/logs/jd_joy.log 2>&1
# 宠汪汪积分兑换京豆
59 7,15,23 * * * node /scripts/jd_joy_reward.js >> /scripts/logs/jd_joy_reward.log 2>&1
# 宠汪汪喂食
35 */1 * * * node /scripts/jd_joy_feedPets.js >> /scripts/logs/jd_joy_feedPets.log 2>&1
# 宠汪汪偷好友积分与喂食
30 0-21/3 * * * node /scripts/jd_joy_steal.js >> /scripts/logs/jd_joy_steal.log 2>&1
# 宠汪汪邀请助力
10 9-20/1 * * * node /scripts/jd_joy_run.js >> /scripts/logs/jd_joy_run.log 2>&1
# 摇钱树
23 */2 * * * node /scripts/jd_moneyTree.js >> /scripts/logs/jd_moneyTree.log 2>&1
# 东东萌宠
35 6-18/6 * * * node /scripts/jd_pet_Aaron.js >> /scripts/logs/jd_pet_Aaron.log 2>&1
# 京东种豆得豆
10 7-22/1 * * * node /scripts/jd_plantBean_Aaron.js >> /scripts/logs/jd_plantBean_Aaron.log 2>&1
# 京东全民开红包
12 0-23/4 * * * node /scripts/jd_redPacket.js >> /scripts/logs/jd_redPacket.log 2>&1
# 进店领豆
6 0 * * * node /scripts/jd_shop.js >> /scripts/logs/jd_shop.log 2>&1
# 东东超市
31 0,1-23/2 * * * node /scripts/jd_superMarket.js >> /scripts/logs/jd_superMarket.log 2>&1
# 取关京东店铺商品
45 23 * * * node /scripts/jd_unsubscribe.js >> /scripts/logs/jd_unsubscribe.log 2>&1
# 京豆变动通知
20 10 * * * node /scripts/jd_bean_change.js >> /scripts/logs/jd_bean_change.log 2>&1
# 京东抽奖机
0 0,12,23 * * * node /scripts/jd_lotteryMachine.js >> /scripts/logs/jd_lotteryMachine.log 2>&1
# 天天提鹅
28 * * * * node /scripts/jd_daily_egg.js >> /scripts/logs/jd_daily_egg.log 2>&1
# 金融养猪
32 0-23/6 * * * node /scripts/jd_pigPet.js >> /scripts/logs/jd_pigPet.log 2>&1
# 京喜工厂
50 * * * * node /scripts/jd_dreamFactory_Aaron.js >> /scripts/logs/jd_dreamFactory_Aaron.log 2>&1
# 东东小窝
46 6,23 * * * node /scripts/jd_small_home.js >> /scripts/logs/jd_small_home.log 2>&1
# 东东工厂
26 * * * * node /scripts/jd_jdfactory_Aaron.js >> /scripts/logs/jd_jdfactory_Aaron.log 2>&1
# 赚京豆(微信小程序)
12 * * * * node /scripts/jd_syj.js >> /scripts/logs/jd_syj.log 2>&1
# 京东快递签到
47 1 * * * node /scripts/jd_kd.js >> /scripts/logs/jd_kd.log 2>&1
# 京东汽车(签到满500赛点可兑换500京豆)
0 0 * * * node /scripts/jd_car.js >> /scripts/logs/jd_car.log 2>&1
# 领京豆额外奖励(每日可获得3京豆)
23 1,12,22 * * * node /scripts/jd_bean_home.js >> /scripts/logs/jd_bean_home.log 2>&1
# 微信小程序京东赚赚
6 0-5/1,11 * * * node /scripts/jd_jdzz.js >> /scripts/logs/jd_jdzz.log 2>&1
# crazyJoy自动每日任务
# 30 7,23 * * * node /scripts/jd_crazy_joy.js >> /scripts/logs/jd_crazy_joy.log 2>&1
# 京东汽车旅程赛点兑换金豆
0 0 * * * node /scripts/jd_car_exchange.js >> /scripts/logs/jd_car_exchange.log 2>&1
# 导到所有互助码
23 7 * * * node /scripts/jd_get_share_code.js >> /scripts/logs/jd_get_share_code.log 2>&1
# 京喜农场
30 9,12,18 * * * node /scripts/jd_jxnc.js >> /scripts/logs/jd_jxnc.log 2>&1
# 签到领现金
10 */4 * * * node /scripts/jd_cash_Aaron.js >> /scripts/logs/jd_cash_Aaron.log 2>&1
# 闪购盲盒
47 8,22 * * * node /scripts/jd_sgmh_Aaron.js >> /scripts/logs/jd_sgmh_Aaron.log 2>&1
# 京东秒秒币
10 6,21 * * * node /scripts/jd_ms.js >> /scripts/logs/jd_ms.log 2>&1
# 美丽研究院
41 7,12,19 * * * node /scripts/jd_beauty.js >> /scripts/logs/jd_beauty.log 2>&1
# 京东保价
# 41 0,23 * * * node /scripts/jd_price.js >> /scripts/logs/jd_price.log 2>&1
# 京东极速版签到+赚现金任务
21 1,6 * * * node /scripts/jd_speed_sign.js >> /scripts/logs/jd_speed_sign.log 2>&1
# 监控crazyJoy分红
# 10 12 * * * node /scripts/jd_crazy_joy_bonus.js >> /scripts/logs/jd_crazy_joy_bonus.log 2>&1
# 京喜财富岛
5 * * * * node /scripts/jd_cfd_Aaron.js >> /scripts/logs/jd_cfd_Aaron.log 2>&1
# 京喜财富岛合成月饼
5 * * * * node /scripts/jd_cfd_Aaron_mooncake.js >> /scripts/logs/jd_cfd_Aaron_mooncake.log 2>&1 
# 京喜财富岛提现
# 59 11,12,23 * * * node /scripts/jd_cfd_Aarontx.js >> /scripts/logs/jd_cfd_Aarontx.log 2>&1
# 删除优惠券(默认注释，如需要自己开启，如有误删，已删除的券可以在回收站中还原，慎用)
# 20 9 * * 6 node /scripts/jd_delCoupon.js >> /scripts/logs/jd_delCoupon.log 2>&1
# 家庭号
# 10 6,7 * * * node /scripts/jd_family.js >> /scripts/logs/jd_family.log 2>&1
# 京东直播（又回来了）
10 12-14 * * * node /scripts/jd_live.js >> /scripts/logs/jd_live.log 2>&1
# 京东健康社区
20 0,6,22 * * * node /scripts/jd_health_Aaron.js >> /scripts/logs/jd_health_Aaron.log 2>&1
# 京东健康社区收集健康能量
5-45/20 * * * * node /scripts/jd_health_Aaron_collect.js >> /scripts/logs/jd_health_Aaron_collect.log 2>&1
# 幸运大转盘
10 10,23 * * * node /scripts/jd_market_lottery.js >> /scripts/logs/jd_market_lottery.log 2>&1
# 领金贴
5 0 * * * node /scripts/jd_jin_tie.js >> /scripts/logs/jd_jin_tie.log 2>&1
# 京喜牧场
15 0-23/3 * * * node /scripts/jd_jxmc.js >> /scripts/logs/jd_jxmc.log 2>&1
# 点点券
# 10 0,1,20 * * * node /scripts/jd_necklace.js >> /scripts/logs/jd_necklace.log 2>&1
# 京小鸽
30 2,20 * * * node /scripts/jd_jxg.js >> /scripts/logs/jd_jxg.log 2>&1
# 天天加速
30 12 * * * node /scripts/jd_speed.js >> /scripts/logs/jd_speed.log 2>&1
# 电竞经理
30 3,12,22 * * * node /scripts/jd_esManager.js >> /scripts/logs/jd_esManager.log 2>&1
# 送豆得豆
24 0,12 * * * node /scripts/jd_sendBeans.js >> /scripts/logs/jd_sendBeans.log 2>&1
# 领券中心签到
11 0 * * * node /scripts/jd_ccSign.js >> /scripts/logs/jd_ccSign.log 2>&1
# 每3天的23:50分清理一次日志(互助码不清理，proc_file.sh对该文件进行了去重)
50 23 */3 * * find /scripts/logs -name '*.log' | grep -v 'sharecodeCollection' | xargs rm -rf
# 收集助力码
30 * * * * sh /scripts/docker/auto_help.sh collect >> /scripts/logs/auto_help_collect.log 2>&1
##############短期活动##############
# 女装盲盒
35 1,22 * * * node /scripts/jd_nzmh.js >> /scripts/logs/jd_nzmh.log 2>&1
# 京东极速版红包(活动时间：2021-6-1至2021-6-30)
45 0,23 * * * node /scripts/jd_speed_redpocke.js >> /scripts/logs/jd_speed_redpocke.log 2>&1
# 超级直播间红包雨(活动时间不定期，出现异常提示请忽略。红包雨期间会正常)
1,31 0-23/1 * * * node /scripts/jd_live_redrain.js >> /scripts/logs/jd_live_redrain.log 2>&1
# 每日抽奖(活动时间：2021-05-01至2021-05-31)
30 1,22,23 * * * node /scripts/jd_daily_lottery.js >> /scripts/logs/jd_daily_lottery.log 2>&1
# 金榜创造营 活动时间：2021-05-21至2021-12-31
0 1,22 * * * node /scripts/jd_gold_creator.js >> /scripts/logs/jd_gold_creator.log 2>&1
# 5G超级盲盒(活动时间：2021-8-2到2021-10-29)
0 0,1-23/3 * * * node /scripts/jd_mohe.js >> /scripts/logs/jd_mohe.log 2>&1
# 酷跑零食街
18 7,12,20 * * * node /scripts/jd_foodRunning.js >> /scripts/logs/jd_foodRunning.log 2>&1
# 省钱大赢家翻翻乐(7.15-8.15)
20 * * * * node /scripts/jd_big_winner.js >> /scripts/logs/jd_big_winner.log 2>&1
# 京喜领88元红包
30 1,6,12,21 * * * node /scripts/jd_jxlhb.js >> /scripts/logs/jd_jxlhb.log 2>&1
# 手机狂欢城(8.9-8.28)
0 0,12,18,21 * * * node /scripts/jd_carnivalcity.js >> /scripts/logs/jd_carnivalcity.log 2>&1
# 手机狂欢城助力(8.9-8.28)
10 0,8 * * * node /scripts/jd_carnivalcity_help.js >> /scripts/logs/jd_carnivalcity_help.log 2>&1
# 众筹许愿池
20 0,2 * * * node /scripts/jd_wish.js >> /scripts/logs/jd_wish.log 2>&1
##############长期活动##############
# 签到
7 0,17 * * * cd /scripts && node jd_bean_sign.js >> /scripts/logs/jd_bean_sign.log 2>&1
# 京喜签到
5 1,8 * * * node /scripts/jx_sign.js >> /scripts/logs/jx_sign.log 2>&1
# 东东超市兑换奖品
59 23 * * * node /scripts/jd_blueCoin.js >> /scripts/logs/jd_blueCoin.log 2>&1
# 摇京豆
6 0,23 * * * node /scripts/jd_club_lottery.js >> /scripts/logs/jd_club_lottery.log 2>&1
# 东东农场
15 6-18/6 * * * node /scripts/jd_fruit_faker2.js >> /scripts/logs/jd_fruit_faker2.log 2>&1
# 宠汪汪
45 */2,23 * * * node /scripts/jd_joy.js >> /scripts/logs/jd_joy.log 2>&1
# 宠汪汪积分兑换京豆
59 7,15,23 * * * node /scripts/jd_joy_reward.js >> /scripts/logs/jd_joy_reward.log 2>&1
# 宠汪汪喂食
35 */1 * * * node /scripts/jd_joy_feedPets.js >> /scripts/logs/jd_joy_feedPets.log 2>&1
# 宠汪汪偷好友积分与喂食
30 0-21/3 * * * node /scripts/jd_joy_steal.js >> /scripts/logs/jd_joy_steal.log 2>&1
# 宠汪汪邀请助力
10 13-20/1 * * * node /scripts/jd_joy_run.js >> /scripts/logs/jd_joy_run.log 2>&1
# 摇钱树
23 */2 * * * node /scripts/jd_moneyTree.js >> /scripts/logs/jd_moneyTree.log 2>&1
# 东东萌宠
35 6-18/6 * * * node /scripts/jd_pet_faker2.js >> /scripts/logs/jd_pet_faker2.log 2>&1
# 京东种豆得豆
10 7-22/1 * * * node /scripts/jd_plantBean_faker2.js >> /scripts/logs/jd_plantBean_faker2.log 2>&1
# 京东全民开红包
12 0-23/4 * * * node /scripts/jd_redPacket.js >> /scripts/logs/jd_redPacket.log 2>&1
# 进店领豆
6 0 * * * node /scripts/jd_shop.js >> /scripts/logs/jd_shop.log 2>&1
# 东东超市
31 0,1-23/2 * * * node /scripts/jd_superMarket.js >> /scripts/logs/jd_superMarket.log 2>&1
# 取关京东店铺商品
45 23 * * * node /scripts/jd_unsubscribe.js >> /scripts/logs/jd_unsubscribe.log 2>&1
# 京豆变动通知
20 10 * * * node /scripts/jd_bean_change.js >> /scripts/logs/jd_bean_change.log 2>&1
# 京东抽奖机
0 0,12,23 * * * node /scripts/jd_lotteryMachine.js >> /scripts/logs/jd_lotteryMachine.log 2>&1
# 京东排行榜
21 9 * * * node /scripts/jd_rankingList.js >> /scripts/logs/jd_rankingList.log 2>&1
# 天天提鹅
28 * * * * node /scripts/jd_daily_egg.js >> /scripts/logs/jd_daily_egg.log 2>&1
# 金融养猪
32 0-23/6 * * * node /scripts/jd_pigPet.js >> /scripts/logs/jd_pigPet.log 2>&1
# 京喜工厂
50 * * * * node /scripts/jd_dreamFactory_faker2.js >> /scripts/logs/jd_dreamFactory_faker2.log 2>&1
# 东东小窝
46 6,23 * * * node /scripts/jd_small_home.js >> /scripts/logs/jd_small_home.log 2>&1
# 东东工厂
26 * * * * node /scripts/jd_jdfactory_faker2.js >> /scripts/logs/jd_jdfactory_faker2.log 2>&1
# 赚京豆(微信小程序)
12 * * * * node /scripts/jd_syj.js >> /scripts/logs/jd_syj.log 2>&1
# 京东快递签到
47 1 * * * node /scripts/jd_kd.js >> /scripts/logs/jd_kd.log 2>&1
# 京东汽车(签到满500赛点可兑换500京豆)
0 0 * * * node /scripts/jd_car.js >> /scripts/logs/jd_car.log 2>&1
# 领京豆额外奖励(每日可获得3京豆)
23 1,12,22 * * * node /scripts/jd_bean_home.js >> /scripts/logs/jd_bean_home.log 2>&1
# 微信小程序京东赚赚
6 0-5/1,11 * * * node /scripts/jd_jdzz.js >> /scripts/logs/jd_jdzz.log 2>&1
# crazyJoy自动每日任务
# 30 7,23 * * * node /scripts/jd_crazy_joy.js >> /scripts/logs/jd_crazy_joy.log 2>&1
# 京东汽车旅程赛点兑换金豆
0 0 * * * node /scripts/jd_car_exchange.js >> /scripts/logs/jd_car_exchange.log 2>&1
# 导到所有互助码
23 7 * * * node /scripts/jd_get_share_code.js >> /scripts/logs/jd_get_share_code.log 2>&1
# 口袋书店
38 8,12,18 * * * node /scripts/jd_bookshop.js >> /scripts/logs/jd_bookshop.log 2>&1
# 京喜农场
30 9,12,18 * * * node /scripts/jd_jxnc.js >> /scripts/logs/jd_jxnc.log 2>&1
# 签到领现金
10 */4 * * * node /scripts/jd_cash_faker2.js >> /scripts/logs/jd_cash_faker2.log 2>&1
# 闪购盲盒
47 8,22 * * * node /scripts/jd_sgmh_faker2.js >> /scripts/logs/jd_sgmh_faker2.log 2>&1
# 京东秒秒币
10 6,21 * * * node /scripts/jd_ms.js >> /scripts/logs/jd_ms.log 2>&1
# 美丽研究院
41 7,12,19 * * * node /scripts/jd_beauty.js >> /scripts/logs/jd_beauty.log 2>&1
# 京东保价
# 41 0,23 * * * node /scripts/jd_price.js >> /scripts/logs/jd_price.log 2>&1
# 京东极速版签到+赚现金任务
21 1,6 * * * node /scripts/jd_speed_sign.js >> /scripts/logs/jd_speed_sign.log 2>&1
# 监控crazyJoy分红
# 10 12 * * * node /scripts/jd_crazy_joy_bonus.js >> /scripts/logs/jd_crazy_joy_bonus.log 2>&1
# 京喜财富岛
5 * * * * node /scripts/jd_cfd_faker2.js >> /scripts/logs/jd_cfd_faker2.log 2>&1
# 京喜财富岛提现
# 59 11,12,23 * * * node /scripts/jd_cfd_faker2tx.js >> /scripts/logs/jd_cfd_faker2tx.log 2>&1
# 删除优惠券(默认注释，如需要自己开启，如有误删，已删除的券可以在回收站中还原，慎用)
# 20 9 * * 6 node /scripts/jd_delCoupon.js >> /scripts/logs/jd_delCoupon.log 2>&1
# 家庭号
# 10 6,7 * * * node /scripts/jd_family.js >> /scripts/logs/jd_family.log 2>&1
# 京东直播（又回来了）
30-50/5 12,23 * * * node /scripts/jd_live.js >> /scripts/logs/jd_live.log 2>&1
# 京东健康社区
20 0,6,22 * * * node /scripts/jd_health_faker2.js >> /scripts/logs/jd_health_faker2.log 2>&1
# 京东健康社区收集健康能量
5-45/20 * * * * node /scripts/jd_health_faker2_collect.js >> /scripts/logs/jd_health_faker2_collect.log 2>&1
# 幸运大转盘
10 10,23 * * * node /scripts/jd_market_lottery.js >> /scripts/logs/jd_market_lottery.log 2>&1
# 领金贴
5 0 * * * node /scripts/jd_jin_tie.js >> /scripts/logs/jd_jin_tie.log 2>&1
# 京喜牧场
15 0-23/3 * * * node /scripts/jd_jxmc.js >> /scripts/logs/jd_jxmc.log 2>&1
# 点点券
# 10 0,1,20 * * * node /scripts/jd_necklace.js >> /scripts/logs/jd_necklace.log 2>&1
# 京小鸽
30 2,20 * * * node /scripts/jd_jxg.js >> /scripts/logs/jd_jxg.log 2>&1
# 天天加速
30 12 * * * node /scripts/jd_speed.js >> /scripts/logs/jd_speed.log 2>&1
# 电竞经理
30 3,12,22 * * * node /scripts/jd_esManager.js >> /scripts/logs/jd_esManager.log 2>&1
# 送豆得豆
24 0,12 * * * node /scripts/jd_sendBeans.js >> /scripts/logs/jd_sendBeans.log 2>&1
# 领券中心签到
11 0 * * * node /scripts/jd_ccSign.js >> /scripts/logs/jd_ccSign.log 2>&1
