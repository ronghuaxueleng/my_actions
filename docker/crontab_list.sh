# 每3天的23:50分清理一次日志
50 23 */3 * * rm -rf /scripts/logs/*.log
##############短期活动##############
#极速版红包
40 0,8 * * * node /scripts/jd_speed_redpocke.js >> /scripts/logs/jd_speed_redpocke.log 2>&1
#jd_health
13 1,7,22 * * * node /scripts/jd_health.js >> /scripts/logs/jd_health.log 2>&1
#jd_health_collect
5-45/20 * * * * node /scripts/jd_health_collect.js >> /scripts/logs/jd_health_collect.log 2>&1
#jd_market_lottery
4 10,19 * * * node /scripts/jd_market_lottery.js >> /scripts/logs/jd_market_lottery.log 2>&1
#jd_jintie
10 0 * * * node /scripts/jd_jintie.js >> /scripts/logs/jd_jintie.log 2>&1
#jd_super_redrain
1 0-23/1 * * * node /scripts/jd_super_redrain.js >> /scripts/logs/jd_super_redrain.log 2>&1
#jd_half_redrain
30 20-23/1 * * * node /scripts/jd_half_redrain.js >> /scripts/logs/jd_half_redrain.log 2>&1
#jd_daily_lottery
13 1,22,23 * * * node /scripts/jd_daily_lottery.js >> /scripts/logs/jd_daily_lottery.log 2>&1
#jd_beauty
1 7,12,19 * * * node /scripts/jd_beauty.js >> /scripts/logs/jd_beauty.log 2>&1
#jd_live_redrain
0,30 0-23/1 * * * node /scripts/jd_live_redrain.js >> /scripts/logs/jd_live_redrain.log 2>&1
#金榜创造营
40 9,21 * * * node /scripts/jd_gold_creator.js >> /scripts/logs/jd_gold_creator.log 2>&1
#5g超级盲盒
0 */4 * * * node /scripts/jd_mohe.js >> /scripts/logs/jd_mohe.log 2>&1
#京喜牧场
20 0-23/3 * * * node /scripts/jd_jxmc.js >> /scripts/logs/jd_jxmc.log 2>&1
#东东电竞经理
47 10 * * * node /scripts/jd_djjl.js >> /scripts/logs/jd_djjl.log 2>&1
#天天优惠大乐透
25 6 * * * node /scripts/jd_DrawEntrance.js >> /scripts/logs/jd_DrawEntrance.log 2>&1
#众筹许愿池
20 12 * * * node /scripts/jd_wishingPool.js >> /scripts/logs/jd_wishingPool.log 2>&1
#汪汪乐园
30 2,20 * * * node /scripts/jd_joy_park.js >> /scripts/logs/jd_joy_park.log 2>&1
#新签到
10 0,18 * * * node /scripts/jd_NewSign.js >> /scripts/logs/jd_NewSign.log 2>&1
#送豆得豆
30 0,12 * * * node /scripts/jd_sendBeans.js >> /scripts/logs/jd_sendBeans.log 2>&1
# 翻翻乐(7.15-8.15)
20 * * * * node /scripts/jd_flipcards.js >> /scripts/logs/jd_flipcards.log 2>&1
# 京喜财富岛提现
0 0,12 * * * node /scripts/jd_cfdtx.js >> /scripts/logs/jd_cfdtx.log 2>&1
# 摇钱树助力
0-59/30 * * * * node /scripts/jd_moneyTree_help.js >> /scripts/logs/jd_moneyTree_help.log 2>&1
# MMdou
21 9 * * * node /scripts/jd_MMdou.js >> /scripts/logs/jd_MMdou.log 2>&1
#京喜领88元红包
30 1,6,12,15,18 * * * node /scripts/jd_jxlhb.js >> /scripts/logs/jd_jxlhb.log 2>&1
#京喜首页签到
20 1 * * * node /scripts/jx_sign.js >> /scripts/logs/jx_sign.log 2>&1
#jd_opencard1
5 0,18,22 * * * node /scripts/jd_opencard1.js >> /scripts/logs/jd_opencard1.log 2>&1
#jd_opencard2
5 0,9,18,22 * * * node /scripts/jd_opencard2.js >> /scripts/logs/jd_opencard2.log 2>&1
#jd_qixi
0 0,9,18 * * * node /scripts/jd_qixi.js >> /scripts/logs/jd_qixi.log 2>&1
#jd_opencard4
10 0,9,18,22 * * * node /scripts/jd_opencard4.js >> /scripts/logs/jd_opencard4.log 2>&1
#特物
30 8,9 * * * node /scripts/jd_productZ4Brand.js >> /scripts/logs/jd_productZ4Brand.log 2>&1
#女装盲盒
54 9 * * * node /scripts/jd_nzmh.js >> /scripts/logs/jd_nzmh.log 2>&1
#粉丝互动
34 6,18 * * * node /scripts/jd_fan.js >> /scripts/logs/jd_fan.log 2>&1
# 手机狂欢城(8.9-8.28)
0 0,12,18,21 * * * node /scripts/jd_carnivalcity.js >> /scripts/logs/jd_carnivalcity.log 2>&1
# 手机狂欢城助力(8.9-8.28)
10 0,8 * * * node /scripts/jd_carnivalcity_help.js >> /scripts/logs/jd_carnivalcity_help.log 2>&1
# 荣耀换新季
0 1 * * * node /scripts/jd_ryhxj.js >> /scripts/logs/jd_ryhxj.log 2>&1
# 来电好物季
10 1 * * * node /scripts/jd_ldhwj.js >> /scripts/logs/jd_ldhwj.log 2>&1
# 金机奖投票
33 6,9 8-20 8 * node /scripts_goldPhone.js >> /scripts/logs_jd_goldPhone.log 2>&1
##############长期活动##############
# 签到
0 0,18 * * * cd /scripts && node jd_bean_sign.js >> /scripts/logs/jd_bean_sign.log 2>&1
# 东东超市兑换奖品
0,30 0 * * * node /scripts/jd_blueCoin.js >> /scripts/logs/jd_blueCoin.log 2>&1
# 摇京豆
0 0 * * * node /scripts/jd_club_lottery.js >> /scripts/logs/jd_club_lottery.log 2>&1
# 东东农场
5 6-18/6 * * * node /scripts/jd_fruit.js >> /scripts/logs/jd_fruit.log 2>&1
# 摇钱树
0 */2 * * * node /scripts/jd_moneyTree.js >> /scripts/logs/jd_moneyTree.log 2>&1
# 东东萌宠
5 6-18/6 * * * node /scripts/jd_pet.js >> /scripts/logs/jd_pet.log 2>&1
# 京东种豆得豆
0 */6 * * * node /scripts/jd_plantBean.js >> /scripts/logs/jd_plantBean.log 2>&1
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
# 京东排行榜
11 9 * * * node /scripts/jd_rankingList.js >> /scripts/logs/jd_rankingList.log 2>&1
# 天天提鹅
18 * * * * node /scripts/jd_daily_egg.js >> /scripts/logs/jd_daily_egg.log 2>&1
# 金融养猪
12 * * * * node /scripts/jd_pigPet.js >> /scripts/logs/jd_pigPet.log 2>&1
# 点点券
20 0,20 * * * node /scripts/jd_necklace.js >> /scripts/logs/jd_necklace.log 2>&1
# 京喜工厂
20 * * * * node /scripts/jd_dreamFactory.js >> /scripts/logs/jd_dreamFactory.log 2>&1
# 京喜工厂开团
20 9,13,16 * * * node /scripts/jd_dreamFactory_tuan.js >> /scripts/logs/jd_dreamFactory_tuan.log 2>&1
# 东东小窝
16 6,23 * * * node /scripts/jd_small_home.js >> /scripts/logs/jd_small_home.log 2>&1
# 东东工厂
36 */4 * * * node /scripts/jd_jdfactory.js >> /scripts/logs/jd_jdfactory.log 2>&1
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
# 京东汽车旅程赛点兑换金豆
0 0 * * * node /scripts/jd_car_exchange.js >> /scripts/logs/jd_car_exchange.log 2>&1
# 导到所有互助码
47 7 * * * node /scripts/jd_get_share_code.js >> /scripts/logs/jd_get_share_code.log 2>&1
# 口袋书店
7 8,12,18 * * * node /scripts/jd_bookshop.js >> /scripts/logs/jd_bookshop.log 2>&1
# 签到领现金
27 7,15 * * * node /scripts/jd_cash.js >> /scripts/logs/jd_cash.log 2>&1
# 闪购盲盒
27 8 * * * node /scripts/jd_sgmh.js >> /scripts/logs/jd_sgmh.log 2>&1
# 京东秒秒币
10 7 * * * node /scripts/jd_ms.js >> /scripts/logs/jd_ms.log 2>&1
# 京喜财富岛
10 * * * * node /scripts/jd_cfd.js >> /scripts/logs/jd_cfd.log 2>&1
# 京喜财富岛提现
0 0 * * * node /scripts/jx_cfdtx.js >> /scripts/logs/jx_cfdtx.log 2>&1
# 京东极速版
48 0,12,18 * * * node /scripts/jd_speed_sign.js >> /scripts/logs/jd_speed_sign.log 2>&1
# 京东抽奖机
22 0,12,18 * * * node /scripts/jd_lotteryMachine.js >> /scripts/logs/jd_lotteryMachine.log 2>&1
# 宠汪汪
15 */2 * * * node /scripts/jd_joy.js >> /scripts/logs/jd_joy.log 2>&1
# 宠汪汪偷狗粮
10 0-21/3 * * * node /scripts/jd_joy_steal.js >> /scripts/logs/jd_joy_steal.log 2>&1
# 宠汪汪兑换
0 0,8,12,16 * * * node /scripts/jd_joy_reward.js >> /scripts/logs/jd_joy_reward.log 2>&1
# 京东摇一摇
0 1,17 * * * node /scripts/jd_shake.js >> /scripts/logs/jd_shake.log 2>&1
# 保价
0 12 */3 * * node /scripts/jd_priceProtect.js >> /scripts/logs/jd_priceProtect.log 2>&1
##############默认注释活动##############
# 京东试用（默认注释，请配合取关脚本使用）
#10 0 * * * node /scripts/jd_try.js >> /scripts/logs/jd_try.log 2>&1
# 删除优惠券(默认注释，如需要自己开启，如有误删，已删除的券可以在回收站中还原，慎用)
#20 9 * * 6 node /scripts/jd_delCoupon.js >> /scripts/logs/jd_delCoupon.log 2>&1
# 京东家庭号(暂不知最佳cron)
# */20 * * * * node /scripts/jd_family.js >> /scripts/logs/jd_family.log 2>&1
# 监控crazyJoy分红
# 10 7 * * * node /scripts/jd_crazy_joy_bonus.js >> /scripts/logs/jd_crazy_joy_bonus.log 2>&1
# jd_cash_exchange
# 0,1,2 0 * * * node /scripts/jd_cash_exchange.js >> /scripts/logs/jd_cash_exchange.log 2>&1
# 京喜农场
#0 9,12,18 * * * node /scripts/jd_jxnc.js >> /scripts/logs/jd_jxnc.log 2>&1
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
10 * * * * node /scripts/jd_dreamFactory.js >> /scripts/logs/jd_dreamFactory.log 2>&1
# 京东家庭号
1 12,23 * * * node /scripts/jd_family.js >> /scripts/logs/jd_family.log 2>&1
# 东东农场
5 6-18/6 * * * node /scripts/jd_fruit.js >> /scripts/logs/jd_fruit.log 2>&1
# 获取互助码
20 13 * * 6 node /scripts/jd_get_share_code.js >> /scripts/logs/jd_get_share_code.log 2>&1
# 金榜创造营
13 1,22 * * * node /scripts/jd_gold_creator.js >> /scripts/logs/jd_gold_creator.log 2>&1
# 东东健康社区
13 1,6,22 * * * node /scripts/jd_health.js >> /scripts/logs/jd_health.log 2>&1
# 东东健康社区收集能量
5-45/20 * * * * node /scripts/jd_health_collect.js >> /scripts/logs/jd_health_collect.log 2>&1
# 东东工厂
10 * * * * node /scripts/jd_jdfactory.js >> /scripts/logs/jd_jdfactory.log 2>&1
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
15 6-18/6 * * * node /scripts/jd_pet.js >> /scripts/logs/jd_pet.log 2>&1
# 京东金融养猪猪
12 0-23/6 * * * node /scripts/jd_pigPet.js >> /scripts/logs/jd_pigPet.log 2>&1
# 种豆得豆
1 7-21/2 * * * node /scripts/jd_plantBean.js >> /scripts/logs/jd_plantBean.log 2>&1
# 京东保价
0 2 * * * node /scripts/jd_price.js >> /scripts/logs/jd_price.log 2>&1
# 京东全民开红包
1 1,2,23 * * * node /scripts/jd_redPacket.js >> /scripts/logs/jd_redPacket.log 2>&1
# 闪购盲盒
20 8 * * * node /scripts/jd_sgmh.js >> /scripts/logs/jd_sgmh.log 2>&1
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
15 17 * * * node /scripts/backUp/xmSports.js >> /scripts/logs/backUp/xmSports.log 2>&1
# 电竞经理
0 0-23/2 * * * node /scripts/jd_EsportsManager.js >> /scripts/logs/jd_EsportsManager.log 2>&1
#京东口袋书店 
1 8,12,18 * * * node /scripts/chinnkarahoi_jd_bookshop.js >> /scripts/logs/chinnkarahoi_jd_bookshop.log 2>&1
#京东清凉一夏开卡活动12 
5 0 * * * node /scripts/zooOpencard12.js >> /scripts/logs/zooOpencard12.log 2>&1
#京东零食街 
0 11 * * * node /scripts/jd_lsj.js >> /scripts/logs/jd_lsj.log 2>&1
#京东点点券photonmang修复版 
10 0,20 * * * node /scripts/jd_necklace.js >> /scripts/logs/jd_necklace.log 2>&1
#京东宠汪汪兑换photonmang修复版 
0 0-16/8 * * * node /scripts/jd_joy_reward.js >> /scripts/logs/jd_joy_reward.log 2>&1
#京东宠汪汪photonmang修复版 
15 0-23/2 * * * node /scripts/jd_joy.js >> /scripts/logs/jd_joy.log 2>&1
#京东待收货 
8 8 12 * * * node /scripts/jddsh.js >> /scripts/logs/jddsh.log 2>&1
#京东粽享优惠 
15 13 6-18 6 * node /scripts/zooLongzhou03.js >> /scripts/logs/zooLongzhou03.log 2>&1
#京东柠檬cookie失效检测 
0 10 * * * node /scripts/jd_ckcheck.js >> /scripts/logs/jd_ckcheck.log 2>&1
#京东星系牧场 
30 7 * * * node /scripts/jd_qqxing.js >> /scripts/logs/jd_qqxing.log 2>&1
#京东618开卡活动11 
5 0 * * * node /scripts/zooOpencard11.js >> /scripts/logs/zooOpencard11.log 2>&1
#京东东东电竞经理 
15 10 * * * node /scripts/zooElecsport.js >> /scripts/logs/zooElecsport.log 2>&1
#京东粽情端午 
15 13 6-18 6 * node /scripts/zooLongzhou02.js >> /scripts/logs/zooLongzhou02.log 2>&1
#京东东东乐园 
30 7 * * * node /scripts/jd_ddnc_farmpark.js >> /scripts/logs/jd_ddnc_farmpark.log 2>&1
#京东618开卡活动10 
5 0 * * * node /scripts/zooOpencard10.js >> /scripts/logs/zooOpencard10.log 2>&1
#京东618开卡活动9 
5 0 * * * node /scripts/zooOpencard09.js >> /scripts/logs/zooOpencard09.log 2>&1
#京东618开卡活动8 
15 9 1-18 6 node /scripts/zooOpencard08.js >> /scripts/logs/zooOpencard08.log 2>&1
#京东618开卡活动7 
15 9 9-20 6 node /scripts/zooOpencard07.js >> /scripts/logs/zooOpencard07.log 2>&1
#京东618开卡活动6 
15 9 9-20 6 node /scripts/zooOpencard06.js >> /scripts/logs/zooOpencard06.log 2>&1
#京东京喜88红包动物园版 
8 8 * 6 * node /scripts/zooJx88hongbao.js >> /scripts/logs/zooJx88hongbao.log 2>&1
#京东合肥旗舰店开业动物园版 
0 6 * * * node /scripts/zooSupershophf.js >> /scripts/logs/zooSupershophf.log 2>&1
#京东GNC组队瓜分京豆 
0 8 * * * node /scripts/zooJointeam01.js >> /scripts/logs/zooJointeam01.log 2>&1
#京东618限时盲盒动物园版 
10 10 1-18 6 * node /scripts/zooLimitbox.js >> /scripts/logs/zooLimitbox.log 2>&1
#京东618开卡活动5 
1 0 * * * node /scripts/zooOpencard05.js >> /scripts/logs/zooOpencard05.log 2>&1
#京东618开卡活动4 
1 0 * * * node /scripts/zooOpencard04.js >> /scripts/logs/zooOpencard04.log 2>&1
#京东618开卡活动3 
1 0 * * * node /scripts/zooOpencard03.js >> /scripts/logs/zooOpencard03.log 2>&1
#京东618开卡活动2 
1 0 * * * node /scripts/zooOpencard02.js >> /scripts/logs/zooOpencard02.log 2>&1
#京东618开卡活动1 
1 0 * * * node /scripts/zooOpencard01.js >> /scripts/logs/zooOpencard01.log 2>&1
#京东宝洁消消乐 
18 9 1-18 6 * node /scripts/zooBaojiexiaoxiaole.js >> /scripts/logs/zooBaojiexiaoxiaole.log 2>&1
#京东浓情618与粽不同 
0 9 * * * node /scripts/zooLongzhou.js >> /scripts/logs/zooLongzhou.log 2>&1
#京东价格保护 
5 0 * * * node /scripts/jd_priceProtect.js >> /scripts/logs/jd_priceProtect.log 2>&1
#京东柠檬赚金币（需填变量） 
0 5 * * * node /scripts/jd_zjb.js >> /scripts/logs/jd_zjb.log 2>&1
#京东天降红包 
1 0-23/1 * 6 * node /scripts/jd_SplitRedPacket.js >> /scripts/logs/jd_SplitRedPacket.log 2>&1
#京东特物ZX签到Tom版 
0 0 * * * node /scripts/jdmn.js >> /scripts/logs/jdmn.log 2>&1
#京东柠檬我是大老板农场 
5 6-18/6 * * * node /scripts/jd_wsdlb.js >> /scripts/logs/jd_wsdlb.log 2>&1
#京东柠檬京喜工厂抢茅台（需填变量） 
58,59,0 18,19 * * * node /scripts/jd_jxgc.js >> /scripts/logs/jd_jxgc.log 2>&1
#京东柠檬推一推（需填变量） 
0 0 * * * node /scripts/jd_tyt.js >> /scripts/logs/jd_tyt.log 2>&1
#京东京喜牧场刷金币 
0 10 * * * * node /scripts/jx_mc_coin.js >> /scripts/logs/jx_mc_coin.log 2>&1
#京东柠檬邀请有礼 
0 0 * * * node /scripts/jd_yqyl.js >> /scripts/logs/jd_yqyl.log 2>&1
#京东京喜牧场 
0 * * * * node /scripts/jx_mc.js >> /scripts/logs/jx_mc.log 2>&1
#京东京享值PK 
15 0,6,13,19,21 * * * node /scripts/ddo_pk.js >> /scripts/logs/ddo_pk.log 2>&1
#京东翻翻乐提现 
5,35 * * 6 * node /scripts/jd_ffl.js >> /scripts/logs/jd_ffl.log 2>&1
#京东城城分现金互助执意版 
5 0 * * * node /scripts/zy_ccfxj.js >> /scripts/logs/zy_ccfxj.log 2>&1
#京东618手机竞猜 
1 0 * * * node /scripts/zy_618jc.js >> /scripts/logs/zy_618jc.log 2>&1
#京东新潮品牌狂欢执意版 
0 10 * * * node /scripts/zy_xckh.js >> /scripts/logs/zy_xckh.log 2>&1
#京东618主会场红包雨 
1 20 1-18 6 * node /scripts/long_hby_lottery.js >> /scripts/logs/long_hby_lottery.log 2>&1
#京东欧乐b 
0 9 * * * node /scripts/jay_member_olb.js >> /scripts/logs/jay_member_olb.log 2>&1
#京东柠檬东东泡泡大战 
1 0 * * * node /scripts/jd_ppdz.js >> /scripts/logs/jd_ppdz.log 2>&1
#京东沸腾之夜 
0 15-19/1 * * * node /scripts/jd_party_night.js >> /scripts/logs/jd_party_night.log 2>&1
#京东一次性入会领豆13 
0 7 * * * node /scripts/member_13.js >> /scripts/logs/member_13.log 2>&1
#京东一次性入会领豆12 
0 7 * * * node /scripts/member_12.js >> /scripts/logs/member_12.log 2>&1
#京东步数换京豆柠檬版 
* 15 * * * node /scripts/jd_bs.js >> /scripts/logs/jd_bs.log 2>&1
#京东一次性入会领豆11 
0 7 * * * node /scripts/member_11.js >> /scripts/logs/member_11.log 2>&1
#京东星推官获取互助隐藏姓名版 
0 0 0 * * * node /scripts/jd_xtg_help.js >> /scripts/logs/jd_xtg_help.log 2>&1
#京东一次性入会领豆10 
0 7 * * * node /scripts/member_10.js >> /scripts/logs/member_10.log 2>&1
#京东抽盲盒一次性领豆 
0 9 * * * node /scripts/jay_freshgoods.js >> /scripts/logs/jay_freshgoods.log 2>&1
#京东一次性入会领豆9 
0 8 * * * node /scripts/member_09.js >> /scripts/logs/member_09.log 2>&1
#京东一次性入会领豆8 
0 7 * * * node /scripts/member_08.js >> /scripts/logs/member_08.log 2>&1
#京东金榜创造营 
0 8 21-31 5-12 * node /scripts/jd_jbczy.js >> /scripts/logs/jd_jbczy.log 2>&1
#京东金融领豆（不共用京东ck另抓） 
0 7 * * * node /scripts/jd_jr_sign.js >> /scripts/logs/jd_jr_sign.log 2>&1
#京东一次性入会领豆5 
0 7 * * * node /scripts/member_05.js >> /scripts/logs/member_05.log 2>&1
#京东一次性入会领豆2 
0 7 * * * node /scripts/member_02.js >> /scripts/logs/member_02.log 2>&1
#京东一次性入会领豆3 
0 7 * * * node /scripts/member_03.js >> /scripts/logs/member_03.log 2>&1
#京东半点京豆雨龙猪猪 
30 * * * * node /scripts/jd_half_redrain.js >> /scripts/logs/jd_half_redrain.log 2>&1
#京东整点京豆雨 
0 * * * * node /scripts/jd_super_redrain.js >> /scripts/logs/jd_super_redrain.log 2>&1
#京东到家鲜豆庄园领水滴 
0-25/5 0 * * * node /scripts/jddj_getPoints.js >> /scripts/logs/jddj_getPoints.log 2>&1
#京东到家鲜豆庄园 
0 9 * * * node /scripts/jddj_plantBeans.js >> /scripts/logs/jddj_plantBeans.log 2>&1
#京东到家鲜豆任务 
0 8 * * * node /scripts/jddj_bean.js >> /scripts/logs/jddj_bean.log 2>&1
#京东到家果园收水滴 
5 */2 * * * node /scripts/jddj_fruit_collectWater.js >> /scripts/logs/jddj_fruit_collectWater.log 2>&1
#京东到家果园任务 
10 0,8,11,17 * * * node /scripts/jddj_fruit.js >> /scripts/logs/jddj_fruit.log 2>&1
#京东美丽研究院 
1 7,12,19 * * * node /scripts/jd_beauty.js >> /scripts/logs/jd_beauty.log 2>&1
#京喜农场whyour版 
0 9,12,18 * * * node /scripts/jx_nc.js >> /scripts/logs/jx_nc.log 2>&1
#京东删除优惠券 
11 0 * * 1 node /scripts/jd_deleteCoupon.js >> /scripts/logs/jd_deleteCoupon.log 2>&1
#京喜工厂商品列表详情 
10 10 * * * node /scripts/jx_products_detail.js >> /scripts/logs/jx_products_detail.log 2>&1
#京东赚京东开团 
10 * * * * node /scripts/jd_zjd_tuan.js >> /scripts/logs/jd_zjd_tuan.log 2>&1
#京东读书签到 
0 10 0 * * * node /scripts/jddsSign.js >> /scripts/logs/jddsSign.log 2>&1
#京东 
0 9 * * * node /scripts/JD_DailyBonus.js >> /scripts/logs/JD_DailyBonus.log 2>&1
#京东成长分 
0 0 * * * node /scripts/jdczf.js >> /scripts/logs/jdczf.log 2>&1
#京东到家 
1 0 * * * node /scripts/jddj.js >> /scripts/logs/jddj.log 2>&1
#京东到家 
30 10 8 * * * node /scripts/jddj.js >> /scripts/logs/jddj.log 2>&1
#京东排行榜 
11 0 * * * node /scripts/jd_rankingList.js >> /scripts/logs/jd_rankingList.log 2>&1
#京东抽奖机 
11 1 * * * node /scripts/jd_lotteryMachine.js >> /scripts/logs/jd_lotteryMachine.log 2>&1
#京喜工厂助力+参团 
10 * * * * node /scripts/jx_factory.js >> /scripts/logs/jx_factory.log 2>&1
#京东赚赚 
0 9 * * * node /scripts/jdzz.js >> /scripts/logs/jdzz.log 2>&1
# 更新脚本
28,43 5-23 * * * bash git_pull >> /jd/log/git_pull.log 2>&1
# 删除 RmLogDaysAgo 指定天数以前的旧日志，本行为不记录日志
57 13 * * * bash rm_log >/dev/null 2>&1
# 开卡
0 8,15 * * * cd /jd/OpenCard bash run.sh
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
10 * * * * node /scripts/jd_dreamFactory.js >> /scripts/logs/jd_dreamFactory.log 2>&1
# 京东家庭号
1 12,23 * * * node /scripts/jd_family.js >> /scripts/logs/jd_family.log 2>&1
# 东东农场
5 6-18/6 * * * node /scripts/jd_fruit.js >> /scripts/logs/jd_fruit.log 2>&1
# 获取互助码
20 13 * * 6 node /scripts/jd_get_share_code.js >> /scripts/logs/jd_get_share_code.log 2>&1
# 金榜创造营
13 1,22 * * * node /scripts/jd_gold_creator.js >> /scripts/logs/jd_gold_creator.log 2>&1
# 东东健康社区
13 1,6,22 * * * node /scripts/jd_health.js >> /scripts/logs/jd_health.log 2>&1
# 东东健康社区收集能量
5-45/20 * * * * node /scripts/jd_health_collect.js >> /scripts/logs/jd_health_collect.log 2>&1
# 东东工厂
10 * * * * node /scripts/jd_jdfactory.js >> /scripts/logs/jd_jdfactory.log 2>&1
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
15 6-18/6 * * * node /scripts/jd_pet.js >> /scripts/logs/jd_pet.log 2>&1
# 京东金融养猪猪
12 0-23/6 * * * node /scripts/jd_pigPet.js >> /scripts/logs/jd_pigPet.log 2>&1
# 种豆得豆
1 7-21/2 * * * node /scripts/jd_plantBean.js >> /scripts/logs/jd_plantBean.log 2>&1
# 京东保价
0 2 * * * node /scripts/jd_price.js >> /scripts/logs/jd_price.log 2>&1
# 京东全民开红包
1 1,2,23 * * * node /scripts/jd_redPacket.js >> /scripts/logs/jd_redPacket.log 2>&1
# 闪购盲盒
20 8 * * * node /scripts/jd_sgmh.js >> /scripts/logs/jd_sgmh.log 2>&1
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
