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
#女装盲盒 活动时间：2021-05-1到2021-05-31
35 1,22 * * * node /scripts/jd_nzmh.js >> /scripts/logs/jd_nzmh.log 2>&1
#金榜创造营
40 9,21 * * * node /scripts/jd_gold_creator.js >> /scripts/logs/jd_gold_creator.log 2>&1
#5g超级盲盒
0 */4 * * * node /scripts/jd_mohe.js >> /scripts/logs/jd_mohe.log 2>&1
#京喜牧场
20 0-23/3 * * * node /scripts/jd_jxmc.js >> /scripts/logs/jd_jxmc.log 2>&1
#东东电竞经理
47 10 * * * node /scripts/jd_djjl.js >> /scripts/logs/jd_djjl.log 2>&1
#食力街跑酷达人
10 11 * * * node /scripts/jd_paoku.js >> /scripts/logs/jd_paoku.log 2>&1
#天天优惠大乐透
25 6 * * * node /scripts/jd_DrawEntrance.js >> /scripts/logs/jd_DrawEntrance.log 2>&1
#国创
25 8 * * * node /scripts/jd_superBrand.js >> /scripts/logs/jd_superBrand.log 2>&1
#pk
33 10 * * * node /scripts/jd_ddopk.js >> /scripts/logs/jd_ddopk.log 2>&1
#全民抢京豆
1,10,20 0 * * * node /scripts/jd_qjd.js >> /scripts/logs/jd_qjd.log 2>&1
#QQ星
1 0-23/2 * * * bash jd jd_qqxing
#众筹许愿池
20 12 * * * node /scripts/jd_wishingPool.js >> /scripts/logs/jd_wishingPool.log 2>&1
#汪汪乐园
30 2,20 * * * node /scripts/jd_joy_park.js >> /scripts/logs/jd_joy_park.log 2>&1
#燃动夏季
10 0,6-23/1 * * * node /scripts/jd_summer_movement.js >> /scripts/logs/jd_summer_movement.log 2>&1
#燃动夏季SH互助
12 7-23 * * * node /scripts/jd_summer_movement_help.js >> /scripts/logs/jd_summer_movement_help.log 2>&1
#新签到
10 0,18 * * * node /scripts/jd_NewSign.js >> /scripts/logs/jd_NewSign.log 2>&1
#早起福利
30 6 * * * node /scripts/jd_goodMorning.js >> /scripts/logs/jd_goodMorning.log 2>&1
#送豆得豆
30 0,12 * * * node /scripts/jd_sendBeans.js >> /scripts/logs/jd_sendBeans.log 2>&1
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
# 京喜农场
0 9,12,18 * * * node /scripts/jd_jxnc.js >> /scripts/logs/jd_jxnc.log 2>&1
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
# 环境测试
0 12 * * * node /scripts/jd_api_test.js >> /scripts/logs/jd_api_test.log 2>&1
# 电竞经理
0 0-23/2 * * * node /scripts/jd_EsportsManager.js >> /scripts/logs/jd_EsportsManager.log 2>&1
#京东众筹许愿池柠檬版 
0 8,12 * * * node /scripts/jd_wish.js >> /scripts/logs/jd_wish.log 2>&1
#京东汪汪乐园柠檬版 
0 */1 * * * node /scripts/jd_joy-park.js >> /scripts/logs/jd_joy-park.log 2>&1
#京东京享值PK史蒂夫版 
15 0,6,13,19,21 * * node /scripts/jxzpk.js >> /scripts/logs/jxzpk.log 2>&1
#京东京享值PK史蒂夫版 
15 0,6,13,19,21 * * node /scripts/jxzpk.js >> /scripts/logs/jxzpk.log 2>&1
#京东京享值PK史蒂夫版 
15 0,6,13,19,21 * * node /scripts/jxzpk.js >> /scripts/logs/jxzpk.log 2>&1
#京东京享值PK柠檬版 
0 10,11 * * * node /scripts/jd_pk.js >> /scripts/logs/jd_pk.log 2>&1
#京东点点券photonmang修复版 
10 0,20 * * * node /scripts/jd_necklace.js >> /scripts/logs/jd_necklace.log 2>&1
#京东宠汪汪兑换photonmang修复版 
0 0-16/8 * * * node /scripts/jd_joy_reward.js >> /scripts/logs/jd_joy_reward.log 2>&1
#京东宠汪汪photonmang修复版 
15 0-23/2 * * * node /scripts/jd_joy.js >> /scripts/logs/jd_joy.log 2>&1
#京东待收货 
8 8 12 * * * node /scripts/jddsh.js >> /scripts/logs/jddsh.log 2>&1
#京东点点券史蒂夫修复版 
10 0,20 * * * node /scripts/jd_necklace.js >> /scripts/logs/jd_necklace.log 2>&1
#京东柠檬砍价3 
30 */1 * * * node /scripts/jd_kanjia3.js >> /scripts/logs/jd_kanjia3.log 2>&1
#京东价格保护 
5 0 * * * node /scripts/jd_priceProtect.js >> /scripts/logs/jd_priceProtect.log 2>&1
#京东柠檬极速版砍价2（需填变量） 
0 5 * * * node /scripts/jd_kanjia2.js >> /scripts/logs/jd_kanjia2.log 2>&1
#京东特物ZX签到Tom版 
0 0 * * * node /scripts/jdmn.js >> /scripts/logs/jdmn.log 2>&1
#京东新潮品牌狂欢隐藏姓名版 
4 10 * * * node /scripts/jd_mcxhd.js >> /scripts/logs/jd_mcxhd.log 2>&1
#京东明星小店 
0 1,21 * * * node /scripts/jd_star_shop.js >> /scripts/logs/jd_star_shop.log 2>&1
#京东5G超级盲盒 
0 0,1-23/3 * * * node /scripts/jd_mohe.js >> /scripts/logs/jd_mohe.log 2>&1
#京东金榜创造营隐藏姓名版 
13 1,22 * * * node /scripts/jd_gold_creator.js >> /scripts/logs/jd_gold_creator.log 2>&1
#京东手机狂欢城隐藏姓名版 
0 0-18/6 * * * node /scripts/jd_carnivalcity.js >> /scripts/logs/jd_carnivalcity.log 2>&1
#京东跳跳乐瓜分京豆 
1 0,11,21 * * * node /scripts/jd_jump.js >> /scripts/logs/jd_jump.log 2>&1
#京东每日抽奖 
13 1,22,23 * * * node /scripts/jd_daily_lottery.js >> /scripts/logs/jd_daily_lottery.log 2>&1
#京东领金贴 
10 0 * * * node /scripts/jd_jin_tie.js >> /scripts/logs/jd_jin_tie.log 2>&1
#京东幸运大转盘隐藏姓名版 
4 10 * * * node /scripts/jd_market_lottery.js >> /scripts/logs/jd_market_lottery.log 2>&1
#京东健康社区隐藏姓名版 
10 0-23/4 * * * node /scripts/jd_health.js >> /scripts/logs/jd_health.log 2>&1
#京东健康社区收能量隐藏姓名版 
5-45/20 * * * * node /scripts/jd_health_collect.js >> /scripts/logs/jd_health_collect.log 2>&1
#京东女装盲盒 
0 8 1-8/1,27,28 2,3 * node /scripts/jd_nzmh.js >> /scripts/logs/jd_nzmh.log 2>&1
#京东直播 
10-20/5 12 * * * node /scripts/jd_live.js >> /scripts/logs/jd_live.log 2>&1
#京东直播间红包雨9日临时恢复 
0,31 20-23/1 9,12 3 * node /scripts/jd_live_redrain.js >> /scripts/logs/jd_live_redrain.log 2>&1
#京东疯狂的joy挂机 
10 1,12 * * * node /scripts/jd_crazy_joy_coin.js >> /scripts/logs/jd_crazy_joy_coin.log 2>&1
#京东京豆变动通知 
2 9 * * * node /scripts/jd_bean_change.js >> /scripts/logs/jd_bean_change.log 2>&1
#京东领京豆额外奖励 
10 7 * * * node /scripts/jd_bean_home.js >> /scripts/logs/jd_bean_home.log 2>&1
#京东东东超市兑换奖品 
0 0 0 * * * node /scripts/jd_blueCoin.js >> /scripts/logs/jd_blueCoin.log 2>&1
#京东汽车 
10 7 * * * node /scripts/jd_car.js >> /scripts/logs/jd_car.log 2>&1
#京东汽车兑换 
0 0 * * * node /scripts/jd_car_exchange.js >> /scripts/logs/jd_car_exchange.log 2>&1
#京东签到领现金 
2 0-23/4 * * * node /scripts/jd_cash.js >> /scripts/logs/jd_cash.log 2>&1
#京东摇京豆 
5 0 * * * node /scripts/jd_club_lottery.js >> /scripts/logs/jd_club_lottery.log 2>&1
#京东crazyJoy任务 
10 7 * * * node /scripts/jd_crazy_joy.js >> /scripts/logs/jd_crazy_joy.log 2>&1
#京东监控crazyJoy分红 
10 12 * * * node /scripts/jd_crazy_joy_bonus.js >> /scripts/logs/jd_crazy_joy_bonus.log 2>&1
#京东天天提鹅 
10 * * * * node /scripts/jd_daily_egg.js >> /scripts/logs/jd_daily_egg.log 2>&1
#京东京喜工厂 
10 * * * * node /scripts/jd_dreamFactory.js >> /scripts/logs/jd_dreamFactory.log 2>&1
#京东东东农场 
5 6-18/6 * * * node /scripts/jd_fruit.js >> /scripts/logs/jd_fruit.log 2>&1
#京东获取互助码 
20 13 * * 6 node /scripts/jd_get_share_code.js >> /scripts/logs/jd_get_share_code.log 2>&1
#京东东东工厂 
10 * * * * node /scripts/jd_jdfactory.js >> /scripts/logs/jd_jdfactory.log 2>&1
#京东赚赚 
10 0 * * * node /scripts/jd_jdzz.js >> /scripts/logs/jd_jdzz.log 2>&1
#京东宠汪汪 
15 0-23/2 * * * node /scripts/jd_joy.js >> /scripts/logs/jd_joy.log 2>&1
#京东宠汪汪喂食 
15 0-23/1 * * * node /scripts/jd_joy_feedPets.js >> /scripts/logs/jd_joy_feedPets.log 2>&1
#京东宠汪汪积分兑换奖品 
0 0-16/8 * * * node /scripts/jd_joy_reward.js >> /scripts/logs/jd_joy_reward.log 2>&1
#京东宠汪汪邀请助力与赛跑助力 
15 10 * * * node /scripts/jd_joy_run.js >> /scripts/logs/jd_joy_run.log 2>&1
#京东宠汪汪偷好友积分与狗粮 
10 0-21/3 * * * node /scripts/jd_joy_steal.js >> /scripts/logs/jd_joy_steal.log 2>&1
#京东快递签到 
10 0 * * * node /scripts/jd_kd.js >> /scripts/logs/jd_kd.log 2>&1
#京东摇钱树 
3 0-23/2 * * * node /scripts/jd_moneyTree.js >> /scripts/logs/jd_moneyTree.log 2>&1
#京东秒秒币 
10 7 * * * node /scripts/jd_ms.js >> /scripts/logs/jd_ms.log 2>&1
#京东东东萌宠 
15 6-18/6 * * * node /scripts/jd_pet.js >> /scripts/logs/jd_pet.log 2>&1
#京东金融养猪猪 
12 * * * * node /scripts/jd_pigPet.js >> /scripts/logs/jd_pigPet.log 2>&1
#京东种豆得豆 
1 7-21/2 * * * node /scripts/jd_plantBean.js >> /scripts/logs/jd_plantBean.log 2>&1
#京东保价 
0 2 * * * node /scripts/jd_price.js >> /scripts/logs/jd_price.log 2>&1
#京东全民开红包 
1 1 * * * node /scripts/jd_redPacket.js >> /scripts/logs/jd_redPacket.log 2>&1
#京东闪购盲盒 
20 8 * * * node /scripts/jd_sgmh.js >> /scripts/logs/jd_sgmh.log 2>&1
#京东进店领豆 
10 0 * * * node /scripts/jd_shop.js >> /scripts/logs/jd_shop.log 2>&1
#京东东东小窝 
16 22 * * * node /scripts/jd_small_home.js >> /scripts/logs/jd_small_home.log 2>&1
#京东天天加速 
8 0-23/3 * * * node /scripts/jd_speed.js >> /scripts/logs/jd_speed.log 2>&1
#京东极速版 
0 7 * * * node /scripts/jd_speed_sign.js >> /scripts/logs/jd_speed_sign.log 2>&1
#京东东东超市 
11 * * * * node /scripts/jd_superMarket.js >> /scripts/logs/jd_superMarket.log 2>&1
#取关京东店铺商品 
55 23 * * * node /scripts/jd_unsubscribe.js >> /scripts/logs/jd_unsubscribe.log 2>&1
#京东京喜牧场刷金币 
0 10 * * * * node /scripts/jx_mc_coin.js >> /scripts/logs/jx_mc_coin.log 2>&1
#京东柠檬极速版砍价（需填变量） 
0 0 * * * node /scripts/jd_kanjia.js >> /scripts/logs/jd_kanjia.log 2>&1
#京东京喜牧场隐藏姓名版 
20 0-23/3 * * * node /scripts/jd_jxmc.js >> /scripts/logs/jd_jxmc.log 2>&1
#京东京喜牧场 
0 * * * * node /scripts/jx_mc.js >> /scripts/logs/jx_mc.log 2>&1
#京东京享值PK 
15 0,6,13,19,21 * * * node /scripts/ddo_pk.js >> /scripts/logs/ddo_pk.log 2>&1
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
#京东沸腾之夜 
0 15-19/1 * * * node /scripts/jd_party_night.js >> /scripts/logs/jd_party_night.log 2>&1
#京东一次性入会领豆13 
0 7 * * * node /scripts/member_13.js >> /scripts/logs/member_13.log 2>&1
#京东一次性入会领豆12 
0 7 * * * node /scripts/member_12.js >> /scripts/logs/member_12.log 2>&1
#京东一次性入会领豆11 
0 7 * * * node /scripts/member_11.js >> /scripts/logs/member_11.log 2>&1
#京东星推官获取互助隐藏姓名版 
0 0 0 * * * node /scripts/jd_xtg_help.js >> /scripts/logs/jd_xtg_help.log 2>&1
#京东一次性入会领豆10 
0 7 * * * node /scripts/member_10.js >> /scripts/logs/member_10.log 2>&1
#京东抽盲盒一次性领豆 
0 9 * * * node /scripts/jay_freshgoods.js >> /scripts/logs/jay_freshgoods.log 2>&1
#京东领现金兑换10元红包 
0,1,2 0 * * * node /scripts/jd_cash_exchange.js >> /scripts/logs/jd_cash_exchange.log 2>&1
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
#京东白条 
0 9 * * * node /scripts/JD_BaiTiao.js >> /scripts/logs/JD_BaiTiao.log 2>&1
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
#生成京喜农场互助码
59 23 * * * node /scripts/get_jxnc_token.js >> /scripts/logs/get_jxnc_token.log 2>&1
#获取助力码
58 20 * * 6 node /scripts/jd_get_share_code_4_bot.js >> /scripts/logs/jd_get_share_code_4_bot.log 2>&1
# 提交助力码
0,1,2 21 * * 6 bash -x /jd/shareCode.sh >> /jd/log/shareCode.log 2>&1
# 财富岛热气球
0 * * * * node /scripts/jd_cfd_loop.js >> /scripts/logs/jd_cfd_loop.log 2>&12 9 * * * https://raw.githubusercontent.com/he1pu/JDHelp/main/jd_bean_change.js, tag=京东资产变动通知, img-url=https://raw.githubusercontent.com/Orz-3/mini/master/Color/jd.png, enabled=true10 7 * * * https://raw.githubusercontent.com/he1pu/JDHelp/main/jd_bean_home.js, tag=领京豆额外奖励, img-url=https://raw.githubusercontent.com/58xinian/icon/master/jd_bean_home.png, enabled=true20 * * * * https://raw.githubusercontent.com/he1pu/JDHelp/main/jd_big_winner.js, tag=省钱大赢家之翻翻乐, img-url=https://raw.githubusercontent.com/Orz-3/mini/master/Color/jd.png, enabled=true0 0 0 * * * https://raw.githubusercontent.com/he1pu/JDHelp/main/jd_blueCoin.js, tag=东东超市兑换奖品, img-url=https://raw.githubusercontent.com/58xinian/icon/master/jxc.png, enabled=true1 8,12,18 * * * https://raw.githubusercontent.com/he1pu/JDHelp/main/jd_bookshop.js, tag=口袋书店, img-url=https://raw.githubusercontent.com/Orz-3/mini/master/Color/jd.png, enabled=true10 7 * * * https://raw.githubusercontent.com/he1pu/JDHelp/main/jd_car.js, tag=京东汽车, img-url=https://raw.githubusercontent.com/58xinian/icon/master/jd_redPacket.png, enabled=true0 0 * * * https://raw.githubusercontent.com/he1pu/JDHelp/main/jd_car_exchange.js, tag=京东汽车兑换, img-url=https://raw.githubusercontent.com/58xinian/icon/master/jd_redPacket.png, enabled=true2 0-23/4 * * * https://raw.githubusercontent.com/he1pu/JDHelp/main/jd_cash.js, tag=签到领现金, img-url=https://raw.githubusercontent.com/Orz-3/mini/master/Color/jd.png, enabled=true5 8,13,19 * * * https://raw.githubusercontent.com/he1pu/JDHelp/main/jd_cfd.js, tag=京喜财富岛, img-url=https://raw.githubusercontent.com/58xinian/icon/master/jxcfd.png, enabled=true5 0,23 * * * https://raw.githubusercontent.com/he1pu/JDHelp/main/jd_club_lottery.js, tag=摇京豆, img-url=https://raw.githubusercontent.com/58xinian/icon/master/jdyjd.png, enabled=true10 9 * * * https://raw.githubusercontent.com/he1pu/JDHelp/main/jd_crazy_joy.js, tag=crazyJoy任务, img-url=https://raw.githubusercontent.com/58xinian/icon/master/jd_crazy_joy.png, enabled=true10 12 * * * https://raw.githubusercontent.com/he1pu/JDHelp/main/jd_crazy_joy_bonus.js, tag=监控crazyJoy分红, img-url=https://raw.githubusercontent.com/58xinian/icon/master/jd_crazy_joy.png, enabled=true10 1,12 * * * https://raw.githubusercontent.com/he1pu/JDHelp/main/jd_crazy_joy_coin.js, tag=crazyJoy挂机, img-url=https://raw.githubusercontent.com/58xinian/icon/master/jd_crazy_joy.png, enabled=true10 * * * * https://raw.githubusercontent.com/he1pu/JDHelp/main/jd_daily_egg.js, tag=天天提鹅, img-url=https://raw.githubusercontent.com/58xinian/icon/master/jdte.png, enabled=true13 1,22,23 * * * https://raw.githubusercontent.com/he1pu/JDHelp/main/jd_daily_lottery.js, tag=每日抽奖, img-url=https://raw.githubusercontent.com/Orz-3/mini/master/Color/jd.png, enabled=true10 * * * * https://raw.githubusercontent.com/he1pu/JDHelp/main/jd_dreamFactory.js, tag=京喜工厂, img-url=https://github.com/58xinian/icon/raw/master/jdgc.png, enabled=true1 12,23 * * * https://raw.githubusercontent.com/he1pu/JDHelp/main/jd_family.js, tag=京东家庭号, img-url=https://raw.githubusercontent.com/58xinian/icon/master/jd_family.png, enabled=true5 6-18/6 * * * https://raw.githubusercontent.com/he1pu/JDHelp/main/jd_fruit.js, tag=东东农场, img-url=https://raw.githubusercontent.com/58xinian/icon/master/jdnc.png, enabled=true20 13 * * 6 https://raw.githubusercontent.com/he1pu/JDHelp/main/jd_get_share_code.js, tag=获取互助码, img-url=https://raw.githubusercontent.com/Orz-3/mini/master/Color/jd.png, enabled=true13 1,22 * * * https://raw.githubusercontent.com/he1pu/JDHelp/main/jd_gold_creator.js, tag=金榜创造营, img-url=https://raw.githubusercontent.com/Orz-3/mini/master/Color/jd.png, enabled=true13 1,6,22 * * * https://raw.githubusercontent.com/he1pu/JDHelp/main/jd_health.js, tag=东东健康社区, img-url=https://raw.githubusercontent.com/Orz-3/mini/master/Color/jd.png, enabled=true5-45/20 * * * * https://raw.githubusercontent.com/he1pu/JDHelp/main/jd_health_collect.js, tag=东东健康社区收集能量, img-url=https://raw.githubusercontent.com/Orz-3/mini/master/Color/jd.png, enabled=true10 * * * * https://raw.githubusercontent.com/he1pu/JDHelp/main/jd_jdfactory.js, tag=东东工厂, img-url=https://raw.githubusercontent.com/58xinian/icon/master/jd_factory.png, enabled=true10 0 * * * https://raw.githubusercontent.com/he1pu/JDHelp/main/jd_jdzz.js, tag=京东赚赚, img-url=https://raw.githubusercontent.com/58xinian/icon/master/jdzz.png, enabled=true10 0 * * * https://raw.githubusercontent.com/he1pu/JDHelp/main/jd_jin_tie.js, tag=领金贴, img-url=https://raw.githubusercontent.com/Orz-3/mini/master/Color/jd.png, enabled=true15 0-23/2 * * * https://raw.githubusercontent.com/he1pu/JDHelp/main/jd_joy.js, tag=京东宠汪汪, img-url=https://raw.githubusercontent.com/58xinian/icon/master/jdcww.png, enabled=true15 0-23/1 * * * https://raw.githubusercontent.com/he1pu/JDHelp/main/jd_joy_feedPets.js, tag=京东宠汪汪喂食, img-url=https://raw.githubusercontent.com/58xinian/icon/master/jdcww.png, enabled=true0 0-16/8 * * * https://raw.githubusercontent.com/he1pu/JDHelp/main/jd_joy_reward.js, tag=宠汪汪积分兑换奖品, img-url=https://raw.githubusercontent.com/58xinian/icon/master/jdcww.png, enabled=true15 10 * * * https://raw.githubusercontent.com/he1pu/JDHelp/main/jd_joy_run.js, tag=宠汪汪邀请助力与赛跑助力, img-url=https://raw.githubusercontent.com/58xinian/icon/master/jdcww.png, enabled=true10 0-21/3 * * * https://raw.githubusercontent.com/he1pu/JDHelp/main/jd_joy_steal.js, tag=宠汪汪偷好友积分与狗粮, img-url=https://raw.githubusercontent.com/58xinian/icon/master/jdcww.png, enabled=true1 0,11,21 * * * https://raw.githubusercontent.com/he1pu/JDHelp/main/jd_jump.js, tag=跳跳乐瓜分京豆, img-url=https://raw.githubusercontent.com/Orz-3/mini/master/Color/jd.png, enabled=true4 10 * * * https://raw.githubusercontent.com/he1pu/JDHelp/main/jd_jxlhb.js, tag=京喜领88元红包, img-url=https://raw.githubusercontent.com/Orz-3/mini/master/Color/jd.png, enabled=true20 0-23/3 * * * https://raw.githubusercontent.com/he1pu/JDHelp/main/jd_jxmc.js, tag=惊喜牧场, img-url=https://github.com/58xinian/icon/raw/master/jdgc.png, enabled=true0 9,12,18 * * * https://raw.githubusercontent.com/he1pu/JDHelp/main/jd_jxnc.js, tag=京喜农场, img-url=https://raw.githubusercontent.com/58xinian/icon/master/jxnc.png, enabled=true10 0 * * * https://raw.githubusercontent.com/he1pu/JDHelp/main/jd_kd.js, tag=京东快递签到, img-url=https://raw.githubusercontent.com/58xinian/icon/master/jd_kd.png, enabled=true10-20/5 12 * * * https://raw.githubusercontent.com/he1pu/JDHelp/main/jd_live.js, tag=京东直播, img-url=https://raw.githubusercontent.com/Orz-3/mini/master/Color/jd.png, enabled=true0,30 0-23/1 * * * https://raw.githubusercontent.com/he1pu/JDHelp/main/jd_live_redrain.js, tag=超级直播间红包雨, img-url=https://raw.githubusercontent.com/Orz-3/mini/master/Color/jd.png, enabled=true4 10 * * * https://raw.githubusercontent.com/he1pu/JDHelp/main/jd_market_lottery.js, tag=幸运大转盘, img-url=https://raw.githubusercontent.com/Orz-3/mini/master/Color/jd.png, enabled=true4 10 * * * https://raw.githubusercontent.com/he1pu/JDHelp/main/jd_mcxhd.js, tag=新潮品牌狂欢, img-url=https://raw.githubusercontent.com/Orz-3/mini/master/Color/jd.png, enabled=true0 0,1-23/3 * * * https://raw.githubusercontent.com/he1pu/JDHelp/main/jd_mohe.js, tag=5G超级盲盒, img-url=https://raw.githubusercontent.com/Orz-3/mini/master/Color/jd.png, enabled=true3 0-23/2 * * * https://raw.githubusercontent.com/he1pu/JDHelp/main/jd_moneyTree.js, tag=京东摇钱树, img-url=https://raw.githubusercontent.com/58xinian/icon/master/jdyqs.png, enabled=true10 7 * * * https://raw.githubusercontent.com/he1pu/JDHelp/main/jd_ms.js, tag=京东秒秒币, img-url=https://raw.githubusercontent.com/yogayyy/Scripts/master/Icon/shylocks/jd_ms.jpg, enabled=true10 0,20 * * * https://raw.githubusercontent.com/he1pu/JDHelp/main/jd_necklace.js, tag=点点券, img-url=https://raw.githubusercontent.com/Orz-3/mini/master/Color/jd.png, enabled=true35 1,23 * * * https://raw.githubusercontent.com/he1pu/JDHelp/main/jd_nzmh.js, tag=女装盲盒, img-url=https://raw.githubusercontent.com/Orz-3/mini/master/Color/jd.png, enabled=true15 6-18/6 * * * https://raw.githubusercontent.com/he1pu/JDHelp/main/jd_pet.js, tag=东东萌宠, img-url=https://raw.githubusercontent.com/58xinian/icon/master/jdmc.png, enabled=true12 0-23/6 * * * https://raw.githubusercontent.com/he1pu/JDHelp/main/jd_pigPet.js, tag=京东金融养猪猪, img-url=https://raw.githubusercontent.com/58xinian/icon/master/jdyz.png, enabled=true1 7-21/2 * * * https://raw.githubusercontent.com/he1pu/JDHelp/main/jd_plantBean.js, tag=种豆得豆, img-url=https://raw.githubusercontent.com/58xinian/icon/master/jdzd.png, enabled=true0 2 * * * https://raw.githubusercontent.com/he1pu/JDHelp/main/jd_price.js, tag=京东保价, img-url=https://raw.githubusercontent.com/Orz-3/task/master/jd.png, enabled=true1 1,2,23 * * * https://raw.githubusercontent.com/he1pu/JDHelp/main/jd_redPacket.js, tag=京东全民开红包, img-url=https://raw.githubusercontent.com/58xinian/icon/master/jd_redPacket.png, enabled=true20 8 * * * https://raw.githubusercontent.com/he1pu/JDHelp/main/jd_sgmh.js, tag=闪购盲盒, img-url=https://raw.githubusercontent.com/Orz-3/mini/master/Color/jd.png, enabled=true10 0 * * * https://raw.githubusercontent.com/he1pu/JDHelp/main/jd_shop.js, tag=进店领豆, img-url=https://raw.githubusercontent.com/58xinian/icon/master/jd_shop.png, enabled=true16 22 * * * https://raw.githubusercontent.com/he1pu/JDHelp/main/jd_small_home.js, tag=东东小窝, img-url=https://raw.githubusercontent.com/58xinian/icon/master/ddxw.png, enabled=true8 0-23/3 * * * https://raw.githubusercontent.com/he1pu/JDHelp/main/jd_speed.js, tag=京东天天加速, img-url=https://raw.githubusercontent.com/58xinian/icon/master/jdjs.png, enabled=true20 0,22 * * * https://raw.githubusercontent.com/he1pu/JDHelp/main/jd_speed_redpocke.js, tag=京东极速版红包, img-url=https://raw.githubusercontent.com/Orz-3/mini/master/Color/jd.png, enabled=true0 7 * * * https://raw.githubusercontent.com/he1pu/JDHelp/main/jd_speed_sign.js, tag=京东极速版, img-url=https://raw.githubusercontent.com/Orz-3/task/master/jd.png, enabled=true0 1,21 * * * https://raw.githubusercontent.com/he1pu/JDHelp/main/jd_star_shop.js, tag=明星小店, img-url=https://raw.githubusercontent.com/Orz-3/mini/master/Color/jd.png, enabled=true11 * * * * https://raw.githubusercontent.com/he1pu/JDHelp/main/jd_superMarket.js, tag=东东超市, img-url=https://raw.githubusercontent.com/58xinian/icon/master/jxc.png, enabled=true55 23 * * * https://raw.githubusercontent.com/he1pu/JDHelp/main/jd_unsubscribe.js, tag=取关京东店铺商品, img-url=https://raw.githubusercontent.com/Orz-3/mini/master/Color/jd.png, enabled=true15 17 * * * https://raw.githubusercontent.com/he1pu/JDHelp/main/backUp/xmSports.js, tag=小米运动, img-url=https://raw.githubusercontent.com/58xinian/icon/master/xmyd.png, enabled=true0 12 * * * https://raw.githubusercontent.com/he1pu/JDHelp/main/jd_api_test.js, tag=环境测试, img-url=https://raw.githubusercontent.com/Orz-3/mini/master/Color/jd.png, enabled=true0 0-23/2 * * * https://raw.githubusercontent.com/he1pu/JDHelp/main/jd_EsportsManager.js, tag=电竞经理, img-url=https://raw.githubusercontent.com/he1pu/JDHelp_demo/main/jd_EsportsManager.png, enabled=true
