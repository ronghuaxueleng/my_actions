-# 每3天的23:50分清理一次日志
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
#金榜创造营
40 9,21 * * * node /scripts/jd_gold_creator.js >> /scripts/logs/jd_gold_creator.log 2>&1
#5g超级盲盒
0 */4 * * * node /scripts/jd_mohe.js >> /scripts/logs/jd_mohe.log 2>&1
#京喜牧场
20 0-23/3 * * * node /scripts/jd_jxmc_MyActions.js >> /scripts/logs/jd_jxmc_MyActions.log 2>&1
#众筹许愿池
20 12 * * * node /scripts/jd_wishingPool.js >> /scripts/logs/jd_wishingPool.log 2>&1
#新签到
10 0,18 * * * node /scripts/jd_sign_graphics.js >> /scripts/logs/jd_sign_graphics.log 2>&1
# 摇钱树助力
0-59/30 * * * * node /scripts/jd_moneyTree_help.js >> /scripts/logs/jd_moneyTree_help.log 2>&1
# MMdou
21 9 * * * node /scripts/jd_MMdou.js >> /scripts/logs/jd_MMdou.log 2>&1
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
# 内容鉴赏官
15 2,5 * * * node /scripts/jd_connoisseur.js >> /scripts/logs/jd_connoisseur.log 2>&1
# 京喜财富岛合成月饼
5 * * * * node /scripts/jd_cfd_MyActions_mooncake.js >> /scripts/logs/jd_cfd_MyActions_mooncake.log 2>&1
# 母婴-跳跳乐
1 0,11,21 * * * node /scripts/jd_jump.js >> /scripts/logs/jd_jump.log 2>&1
# 送豆得豆
24 0,12 * * * node /scripts/jd_sendBeans.js >> /scripts/logs/jd_sendBeans.log 2>&1
#财富岛热气球接待
30 * * * * node /scripts/jd_cfd_MyActions_loop.js >> /scripts/logs/jd_cfd_MyActions_loop.log 2>&1
# 推一推
20 3,13 * * * node /scripts/jd_tyt.js >> /scripts/logs/jd_tyt.log 2>&1
# 签到免单
1 0,12,18 * * * node /scripts/jd_speed_signfree.js >> /scripts/logs/jd_speed_signfree.log 2>&1
# 超级盒子
24 3,13 * * * node /scripts/jd_superbox.js >> /scripts/logs/jd_superbox.log 2>&1
#京东小魔方--收集兑换
31 8 * * * node /scripts/jd_mofang_ex.js >> /scripts/logs/jd_mofang_ex.log 2>&1
# 京东小魔方
10 2,8 * * * node /scripts/jd_mf.js >> /scripts/logs/jd_mf.log 2>&1
# 财富岛珍珠兑换
59 0-23/1 * * * node /scripts/jd_cfd_MyActions_pearl_ex.js >> /scripts/logs/jd_cfd_MyActions_pearl_ex.log 2>&1
# 省钱大赢家翻翻乐2
20 0,6-23 * * * node /scripts/jd_big_winner.js >> /scripts/logs/jd_big_winner.log 2>&1
# 年货签到
0 8 * * * node /scripts/jd_nh_sign.js >> /scripts/logs/jd_nh_sign.log 2>&1
# 见缝插针
15 10 * * * node /scripts/jd_jfcz.js >> /scripts/logs/jd_jfcz.log 2>&1
# 特务z
23 11,20 * * * node /scripts/jd_superBrand.js >> /scripts/logs/jd_superBrand.log 2>&1
#饭粒
10 9 * * * node /scripts/jd_fanli.js >> /scripts/logs/jd_fanli.log 2>&1
#通天塔签到共建
0 0,3 * * * node /scripts/jd_babel_sign.js >> /scripts/logs/jd_babel_sign.log 2>&1
#小魔方
20 4,19 * * * node /scripts/jd_xmf.js >> /scripts/logs/jd_xmf.log 2>&1
#jd_xfxd_new
18 0 * * * node /scripts/jd_xfxd_new.js >> /scripts/logs/jd_xfxd_new.log 2>&1
#jd_ddworld_exchangebean
0 0,9 * * * node /scripts/jd_ddworld_exchangebean.js >> /scripts/logs/jd_ddworld_exchangebean.log 2>&1
#jd_pay_contract
35 21 */3 * * node /scripts/jd_pay_contract.js >> /scripts/logs/jd_pay_contract.log 2>&1
#jd_dwapp
33 5,17 * * * node /scripts/jd_dwapp.js >> /scripts/logs/jd_dwapp.log 2>&1
#jd_opencard196
3 1,12 * * * node /scripts/jd_opencard196.js >> /scripts/logs/jd_opencard196.log 2>&1
#jd_opencard198
2 2,14 * * * node /scripts/jd_opencard198.js >> /scripts/logs/jd_opencard198.log 2>&1
#jd_opencard200
1 3,20 * * * node /scripts/jd_opencard200.js >> /scripts/logs/jd_opencard200.log 2>&1
##############长期活动##############
# 签到
0 0,18 * * * cd /scripts && node jd_bean_sign.js >> /scripts/logs/jd_bean_sign.log 2>&1
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
# 进店领豆
10 0 * * * node /scripts/jd_shop.js >> /scripts/logs/jd_shop.log 2>&1
# 东东超市
11 */6 * * * node /scripts/jd_superMarket.js >> /scripts/logs/jd_superMarket.log 2>&1
# 取关京东店铺商品
55 23 * * * node /scripts/jd_unsubscribe.js >> /scripts/logs/jd_unsubscribe.log 2>&1
# 京豆变动通知
0 10 * * * node /scripts/jd_bean_change.js >> /scripts/logs/jd_bean_change.log 2>&1
# 京豆变动简洁版
0 9 * * * node /scripts/jd_bean_change_clean.js >> /scripts/logs/jd_bean_change_clean.log 2>&1
# 金融养猪
12 * * * * node /scripts/jd_pigPet.js >> /scripts/logs/jd_pigPet.log 2>&1
# 京喜工厂
20 * * * * node /scripts/jd_dreamFactory_MyActions.js >> /scripts/logs/jd_dreamFactory_MyActions.log 2>&1
# 京喜工厂开团
20 9,13,16 * * * node /scripts/jd_dreamFactory_MyActions_tuan.js >> /scripts/logs/jd_dreamFactory_MyActions_tuan.log 2>&1
# 东东工厂
36 */4 * * * node /scripts/jd_jdfactory_MyActions.js >> /scripts/logs/jd_jdfactory_MyActions.log 2>&1
# 京东快递签到
23 1 * * * node /scripts/jd_kd.js >> /scripts/logs/jd_kd.log 2>&1
# 领京豆额外奖励(每日可获得3京豆)
33 0-23/4 * * * node /scripts/jd_bean_home.js >> /scripts/logs/jd_bean_home.log 2>&1
# 京东直播(每日18豆)
10-20/5 12 * * * node /scripts/jd_live.js >> /scripts/logs/jd_live.log 2>&1
# 微信小程序京东赚赚
30 0,1 * * * node /scripts/jd_jdzz.js >> /scripts/logs/jd_jdzz.log 2>&1
# 导到所有互助码
47 7 * * * node /scripts/jd_get_share_code.js >> /scripts/logs/jd_get_share_code.log 2>&1
# 签到领现金
27 7,15 * * * node /scripts/jd_cash_MyActions.js >> /scripts/logs/jd_cash_MyActions.log 2>&1
# 闪购盲盒
27 8 * * * node /scripts/jd_sgmh_MyActions.js >> /scripts/logs/jd_sgmh_MyActions.log 2>&1
# 京东秒秒币
10 7 * * * node /scripts/jd_ms.js >> /scripts/logs/jd_ms.log 2>&1
# 京喜财富岛
10 * * * * node /scripts/jd_cfd_MyActions.js >> /scripts/logs/jd_cfd_MyActions.log 2>&1
# 京东极速版
48 0,12,18 * * * node /scripts/jd_speed_sign.js >> /scripts/logs/jd_speed_sign.log 2>&1
# 京东摇一摇
0 1,17 * * * node /scripts/jd_shake.js >> /scripts/logs/jd_shake.log 2>&1
#京东试用（默认注释，请配合取关脚本使用）
10 0 * * * node /scripts/jd_try_new.js >> /scripts/logs/jd_try_new.log 2>&1
##############默认注释活动##############
# jd_cash_MyActions_exchange
# 0,1,2 0 * * * node /scripts/jd_cash_MyActions_exchange.js >> /scripts/logs/jd_cash_MyActions_exchange.log 2>&1
# 惊喜红包返现助力
# 48 20 * * * node /scripts/jx_aid_cashback.js >> /scripts/logs/jx_aid_cashback.log 2>&1
# 清空购物车
# 0 1 * * * node /scripts/jd_CartRemove.js >> /scripts/logs/jd_CartRemove.log 2>&1
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
13 1,6,22 * * * node /scripts/jd_health2.js >> /scripts/logs/jd_health2.log 2>&1
# 东东健康社区收集能量
5-45/20 * * * * node /scripts/jd_health_collect.js >> /scripts/logs/jd_health_collect.log 2>&1
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
20 0-23/3 * * * node /scripts/jd_jxmc_JDHelp.js >> /scripts/logs/jd_jxmc_JDHelp.log 2>&1
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
# 京东极速版红包(活动时间：2021-6-1至2021-6-30)
45 0,23 * * * node /scripts/jd_speed_redpocke.js >> /scripts/logs/jd_speed_redpocke.log 2>&1
# 每日抽奖(活动时间：2021-05-01至2021-05-31)
30 1,22,23 * * * node /scripts/jd_daily_lottery.js >> /scripts/logs/jd_daily_lottery.log 2>&1
# 众筹许愿池
20 0,2 * * * node /scripts/jd_wish.js >> /scripts/logs/jd_wish.log 2>&1
##############长期活动##############
# 签到
7 0,17 * * * cd /scripts && node jd_bean_sign.js >> /scripts/logs/jd_bean_sign.log 2>&1
# 京喜签到
5 1,8 * * * node /scripts/jx_sign.js >> /scripts/logs/jx_sign.log 2>&1
# 摇京豆
6 0,23 * * * node /scripts/jd_club_lottery.js >> /scripts/logs/jd_club_lottery.log 2>&1
# 东东农场
15 6-18/6 * * * node /scripts/jd_fruit_Aaron.js >> /scripts/logs/jd_fruit_Aaron.log 2>&1
# 摇钱树
23 */2 * * * node /scripts/jd_moneyTree.js >> /scripts/logs/jd_moneyTree.log 2>&1
# 东东萌宠
35 6-18/6 * * * node /scripts/jd_pet_Aaron.js >> /scripts/logs/jd_pet_Aaron.log 2>&1
# 京东种豆得豆
10 7-22/1 * * * node /scripts/jd_plantBean_Aaron.js >> /scripts/logs/jd_plantBean_Aaron.log 2>&1
# 取关京东店铺商品
45 23 * * * node /scripts/jd_unsubscribe.js >> /scripts/logs/jd_unsubscribe.log 2>&1
# 京豆变动通知
20 10 * * * node /scripts/jd_bean_change.js >> /scripts/logs/jd_bean_change.log 2>&1
# 金融养猪
32 0-23/6 * * * node /scripts/jd_pigPet.js >> /scripts/logs/jd_pigPet.log 2>&1
# 京喜工厂
50 * * * * node /scripts/jd_dreamFactory_Aaron.js >> /scripts/logs/jd_dreamFactory_Aaron.log 2>&1
# 东东工厂
26 * * * * node /scripts/jd_jdfactory_Aaron.js >> /scripts/logs/jd_jdfactory_Aaron.log 2>&1
# 京东快递签到
47 1 * * * node /scripts/jd_kd.js >> /scripts/logs/jd_kd.log 2>&1
# 领京豆额外奖励(每日可获得3京豆)
# 23 1,12,22 * * * node /scripts/jd_bean_home.js >> /scripts/logs/jd_bean_home.log 2>&1
# 微信小程序京东赚赚
6 0-5/1,11 * * * node /scripts/jd_jdzz.js >> /scripts/logs/jd_jdzz.log 2>&1
# 导到所有互助码
23 7 * * * node /scripts/jd_get_share_code.js >> /scripts/logs/jd_get_share_code.log 2>&1
# 签到领现金
10 */4 * * * node /scripts/jd_cash_Aaron.js >> /scripts/logs/jd_cash_Aaron.log 2>&1
# 闪购盲盒
47 8,22 * * * node /scripts/jd_sgmh_Aaron.js >> /scripts/logs/jd_sgmh_Aaron.log 2>&1
# 美丽研究院
41 7,12,19 * * * node /scripts/jd_beauty.js >> /scripts/logs/jd_beauty.log 2>&1
# 京东极速版签到+赚现金任务
21 1,6 * * * node /scripts/jd_speed_sign.js >> /scripts/logs/jd_speed_sign.log 2>&1
# 京喜财富岛
1 * * * * node /scripts/jd_cfd_Aaron.js >> /scripts/logs/jd_cfd_Aaron.log 2>&1
# 家庭号
# 10 6,7 * * * node /scripts/jd_family.js >> /scripts/logs/jd_family.log 2>&1
# 京东健康社区
20 0,6,22 * * * node /scripts/jd_health_Aaron.js >> /scripts/logs/jd_health_Aaron.log 2>&1
# 京东健康社区收集健康能量
5-45/20 * * * * node /scripts/jd_health_Aaron_collect.js >> /scripts/logs/jd_health_Aaron_collect.log 2>&1
# 领金贴
5 0 * * * node /scripts/jd_jin_tie.js >> /scripts/logs/jd_jin_tie.log 2>&1
# 京喜牧场
15 * * * * node /scripts/jd_jxmc_Aaron.js >> /scripts/logs/jd_jxmc_Aaron.log 2>&1
# 领券中心签到
11 0 * * * node /scripts/jd_ccSign.js >> /scripts/logs/jd_ccSign.log 2>&1
# # 宠汪汪
# 5 */2,9,23 * * * node /scripts/jd_joy.js >> /scripts/logs/jd_joy.log 2>&1
# # 宠汪汪积分兑换京豆
# 59 7,15,23 * * * node /scripts/jd_joy_reward.js >> /scripts/logs/jd_joy_reward.log 2>&1
# # 宠汪汪喂食
# 35 */1 * * * node /scripts/jd_joy_feedPets.js >> /scripts/logs/jd_joy_feedPets.log 2>&1
# # 宠汪汪偷好友积分与喂食
# 30 0-21/3 * * * node /scripts/jd_joy_steal.js >> /scripts/logs/jd_joy_steal.log 2>&1
# # 宠汪汪邀请助力
# 10 9-20/1 * * * node /scripts/jd_joy_run.js >> /scripts/logs/jd_joy_run.log 2>&1
# 每3天的23:50分清理一次日志(互助码不清理，proc_file.sh对该文件进行了去重)
50 23 */3 * * find /scripts/logs -name '*.log' | grep -v 'sharecodeCollection' | xargs rm -rf
#收集助力码
30 * * * * sh +x /scripts/docker/auto_help.sh collect >> /scripts/logs/auto_help_collect.log 2>&1
##############活动##############
#宠汪汪
35 0-23/2 * * * node /scripts/jd_joy.js >> /scripts/logs/jd_joy.log 2>&1
#宠汪汪兑换
59 7,15,23 * * * node /scripts/jd_joy_reward.js >> /scripts/logs/jd_joy_reward.log 2>&1
#点点券
#10 6,20 * * * node /scripts/jd_necklace.js >> /scripts/logs/jd_necklace.log 2>&1
#惊喜签到
0 3,8 * * * node /scripts/jd_jxsign.js >> /scripts/logs/jd_jxsign.log 2>&1
#东东超市兑换奖品
59 23 * * * node /scripts/jd_blueCoin.js >> /scripts/logs/jd_blueCoin.log 2>&1
#财富岛
35 * * * * node /scripts/jd_cfd_yyds.js >> /scripts/logs/jd_cfd_yyds.log 2>&1
#京东汽车
10 4,20 * * * node /scripts/jd_car.js >> /scripts/logs/jd_car.log 2>&1
#金榜创造营
13 5,19 * * * node /scripts/jd_gold_creator.js >> /scripts/logs/jd_gold_creator.log 2>&1
#京东多合一签到
0 4,14 * * * node /scripts/jd_bean_sign.js >> /scripts/logs/jd_bean_sign.log 2>&1
#半点京豆雨
30 0-23/1 * * * node /scripts/jd_half_redrain.js >> /scripts/logs/jd_half_redrain.log 2>&1
#东东超市
39 * * * * node /scripts/jd_superMarket.js >> /scripts/logs/jd_superMarket.log 2>&1
#京东极速版红包
20 2,12 * * * node /scripts/jd_speed_redpocke.js >> /scripts/logs/jd_speed_redpocke.log 2>&1
#领京豆额外奖励
10 3,9 * * * node /scripts/jd_bean_home.js >> /scripts/logs/jd_bean_home.log 2>&1
#京东资产变动通知
0 12 * * * node /scripts/jd_bean_change.js >> /scripts/logs/jd_bean_change.log 2>&1
#京东极速版
0 1,7 * * * node /scripts/jd_speed_sign.js >> /scripts/logs/jd_speed_sign.log 2>&1
#我是大老板
35 0-23/1 * * * node /scripts/jd_wsdlb.js >> /scripts/logs/jd_wsdlb.log 2>&1
#
5 3,19 * * * node /scripts/jd_unsubscribe.js >> /scripts/logs/jd_unsubscribe.log 2>&1
#东东萌宠
45 6-18/6 * * * node /scripts/jd_pet_yyds.js >> /scripts/logs/jd_pet_yyds.log 2>&1
#挑一挑
1 3,9,18 * * * node /scripts/jd_jump.js >> /scripts/logs/jd_jump.log 2>&1
#
36 0,1-23/3 * * * node /scripts/jd_mohe.js >> /scripts/logs/jd_mohe.log 2>&1
#种豆得豆
44 0-23/6 * * * node /scripts/jd_plantBean_yyds.js >> /scripts/logs/jd_plantBean_yyds.log 2>&1
#东东农场
35 6-18/6 * * * node /scripts/jd_fruit_yyds.js >> /scripts/logs/jd_fruit_yyds.log 2>&1
#删除优惠券
0 3,20 * * * node /scripts/jd_delCoupon.js >> /scripts/logs/jd_delCoupon.log 2>&1
#
5 2,19 * * * node /scripts/jd_club_lottery.js >> /scripts/logs/jd_club_lottery.log 2>&1
#
40 * * * * node /scripts/jd_jdfactory_yyds.js >> /scripts/logs/jd_jdfactory_yyds.log 2>&1
#
0 0-23/1 * * * node /scripts/jd_super_redrain.js >> /scripts/logs/jd_super_redrain.log 2>&1
#领金贴
10 1 * * * node /scripts/jd_jin_tie.js >> /scripts/logs/jd_jin_tie.log 2>&1
#健康社区
13 2,5,20 * * * node /scripts/jd_health_yyds.js >> /scripts/logs/jd_health_yyds.log 2>&1
#秒秒币
10 2 * * * node /scripts/jd_ms.js >> /scripts/logs/jd_ms.log 2>&1
#
1 2,15,19 * * * node /scripts/jd_daily_lottery.js >> /scripts/logs/jd_daily_lottery.log 2>&1
#
9 0-23/3 * * * node /scripts/jd_ddnc_farmpark.js >> /scripts/logs/jd_ddnc_farmpark.log 2>&1
#京喜工厂
39 * * * * node /scripts/jd_dreamFactory_yyds.js >> /scripts/logs/jd_dreamFactory_yyds.log 2>&1
#闪购盲盒
20 4,16,19 * * * node /scripts/jd_sgmh_yyds.js >> /scripts/logs/jd_sgmh_yyds.log 2>&1
#
0 0 * * * node /scripts/jd_bean_change1.js >> /scripts/logs/jd_bean_change1.log 2>&1
#
1 0 * * * node /scripts/jd_shop.js >> /scripts/logs/jd_shop.log 2>&1
#摇钱树
23 0-23/2 * * * node /scripts/jd_moneyTree.js >> /scripts/logs/jd_moneyTree.log 2>&1
#排行榜
37 2 * * * node /scripts/jd_rankingList.js >> /scripts/logs/jd_rankingList.log 2>&1
#
32 0-23/6 * * * node /scripts/jd_pigPet.js >> /scripts/logs/jd_pigPet.log 2>&1
#
10-20/5 12 * * * node /scripts/jd_live.js >> /scripts/logs/jd_live.log 2>&1
#京东快递
40 0 * * * node /scripts/jd_kd.js >> /scripts/logs/jd_kd.log 2>&1
#美丽研究院
16 9,15,17 * * * node /scripts/jd_beauty.js >> /scripts/logs/jd_beauty.log 2>&1
#京喜牧场
48 0-23/3 * * * node /scripts/jd_jxmc_yyds.js >> /scripts/logs/jd_jxmc_yyds.log 2>&1
#京东试用
30 10 * * * node /scripts/jd_try.js >> /scripts/logs/jd_try.log 2>&1
#领现金
42 0-23/6 * * * node /scripts/jd_cash_yyds.js >> /scripts/logs/jd_cash_yyds.log 2>&1
#赚金币
0 8 * * * node /scripts/jd_zjb.js >> /scripts/logs/jd_zjb.log 2>&1
#
# 0 6 * * * node /scripts/getJDCookie.js >> /scripts/logs/getJDCookie.log 2>&1
#京东赚赚
10 0 * * * node /scripts/jd_jdzz.js >> /scripts/logs/jd_jdzz.log 2>&1
#获取互助码
20 13 * * 6 node /scripts/jd_get_share_code.js >> /scripts/logs/jd_get_share_code.log 2>&1
#
15-55/20 * * * * node /scripts/jd_health_yyds_collect.js >> /scripts/logs/jd_health_yyds_collect.log 2>&1
#京东到家果园
10 0,8,11,17 * * * node /scripts/jd_jddj_fruit.js >> /scripts/logs/jd_jddj_fruit.log 2>&1
#京东到家
5 0,6,12 * * * node /scripts/jd_jddj_bean.js >> /scripts/logs/jd_jddj_bean.log 2>&1
#京东到家收水滴
10 * * * * node /scripts/jd_jddj_collectWater.js >> /scripts/logs/jd_jddj_collectWater.log 2>&1
#京东到家
5-40/5 * * * * node /scripts/jd_jddj_getPoints.js >> /scripts/logs/jd_jddj_getPoints.log 2>&1
#京东到家
20 */4 * * * node /scripts/jd_jddj_plantBeans.js >> /scripts/logs/jd_jddj_plantBeans.log 2>&1
#
13 3 * * * node /scripts/jd_drawEntrance.js >> /scripts/logs/jd_drawEntrance.log 2>&1
#特务
1,10 0 * * * node /scripts/jd_superBrand.js >> /scripts/logs/jd_superBrand.log 2>&1
#送豆得豆
5 0,12 * * * node /scripts/jd_SendBean.js >> /scripts/logs/jd_SendBean.log 2>&1
#
20 0,2 * * * node /scripts/jd_wish.js >> /scripts/logs/jd_wish.log 2>&1
#财富岛气球
5 * * * * node /scripts/jd_cfd_yyds_loop.js >> /scripts/logs/jd_cfd_yyds_loop.log 2>&1
#宠汪汪偷狗粮
40 0-21/3 * * * node /scripts/jd_joy_steal.js >> /scripts/logs/jd_joy_steal.log 2>&1
#京小鸽
18 4,11 * * * node /scripts/jd_jxg.js >> /scripts/logs/jd_jxg.log 2>&1
#
20 6,7 * * * node /scripts/jd_morningSc.js >> /scripts/logs/jd_morningSc.log 2>&1
#领现金兑换
0 0 * * * node /scripts/jd_cash_yyds_exchange.js >> /scripts/logs/jd_cash_yyds_exchange.log 2>&1
#快手水果
33 1,8,12,19 * * * node /scripts/jd_ks_fruit.js >> /scripts/logs/jd_ks_fruit.log 2>&1
#宠汪汪喂食
15 0-23/1 * * * node /scripts/jd_joy_feedPets.js >> /scripts/logs/jd_joy_feedPets.log 2>&1
#宠汪汪赛跑
15 10,12 * * * node /scripts/jd_joy_run.js >> /scripts/logs/jd_joy_run.log 2>&1
#领京豆
38 8,13 * * * node /scripts/jd_mdou.js >> /scripts/logs/jd_mdou.log 2>&1
#
0 1 * * * node /scripts/jd_cleancart.js >> /scripts/logs/jd_cleancart.log 2>&1
#店铺签到
2 2 * * * node /scripts/jd_dpqd.js >> /scripts/logs/jd_dpqd.log 2>&1
#推一推
2 12 * * * node /scripts/jd_tyt.js >> /scripts/logs/jd_tyt.log 2>&1
#
55 6 * * * node /scripts/jd_unsubscriLive.js >> /scripts/logs/jd_unsubscriLive.log 2>&1
#女装盲盒
45 2,20 * * * node /scripts/jd_nzmh.js >> /scripts/logs/jd_nzmh.log 2>&1
#开卡74
47 3 25-30,1 11,12 * node /scripts/jd_opencard74.js >> /scripts/logs/jd_opencard74.log 2>&1
#开卡75
47 2 1-15 12 * node /scripts/jd_opencard75.js >> /scripts/logs/jd_opencard75.log 2>&1
#开卡76
47 3 3-12 12 * node /scripts/jd_opencard76.js >> /scripts/logs/jd_opencard76.log 2>&1
#积分换话费
43 5,17 * * * node /scripts/jd_dwapp.js >> /scripts/logs/jd_dwapp.log 2>&1
# 领券中心签到
5 0 * * * node /scripts/jd_ccSign.js >> /scripts/logs/jd_ccSign.log 2>&1
#邀请有礼
20 9 * * * node /scripts/jd_yqyl.js >> /scripts/logs/jd_yqyl.log 2>&1
#
20 3,6,9 * * * node /scripts/jd_dreamfactory_tuan.js >> /scripts/logs/jd_dreamfactory_tuan.log 2>&1
#京喜领红包
23 0,6,12,21 * * * node /scripts/jd_jxlhb.js >> /scripts/logs/jd_jxlhb.log 2>&1
#超级直播间盲盒抽京豆
1 18,20 * * * node /scripts/jd_super_mh.js >> /scripts/logs/jd_super_mh.log 2>&1
# 内容鉴赏官
5 2,5,16 * * * node /scripts/jd_connoisseur.js >> /scripts/logs/jd_connoisseur.log 2>&1
# 京喜财富岛月饼
5 * * * * node /scripts/jd_cfd_yyds_mooncake.js >> /scripts/logs/jd_cfd_yyds_mooncake.log 2>&1
# 东东世界
15 3,16 * * * node /scripts/jd_ddworld.js >> /scripts/logs/jd_ddworld.log 2>&1
# 小魔方
31 2,8 * * * node /scripts/jd_mf.js >> /scripts/logs/jd_mf.log 2>&1
# 魔方
11 7,19 * * * node /scripts/jd_mofang.js >> /scripts/logs/jd_mofang.log 2>&1
# 芥么签到
11 0,9 * * * node /scripts/jd_jmsign.js >> /scripts/logs/jd_jmsign.log 2>&1
# 芥么赚豪礼
37 0,11 * * * node /scripts/jd_jmzhl.js >> /scripts/logs/jd_jmzhl.log 2>&1
# 幸运扭蛋
24 9 * 10-11 * node /scripts/jd_lucky_egg.js >> /scripts/logs/jd_lucky_egg.log 2>&1
# 东东世界兑换
0 0 * * * node /scripts/jd_ddworld_exchange.js >> /scripts/logs/jd_ddworld_exchange.log 2>&1
# 天天提鹅
20 * * * * node /scripts/jd_daily_egg.js >> /scripts/logs/jd_daily_egg.log 2>&1
# 发财大赢家
1 2,10 * * * node /scripts/jd_fcdyj.js >> /scripts/logs/jd_fcdyj.log 2>&1
# 翻翻乐
20 * * * * node /scripts/jd_big_winner.js >> /scripts/logs/jd_big_winner.log 2>&1
# 京东极速版签到免单
18 8,12,20 * * * node /scripts/jd_speed_signfree.js >> /scripts/logs/jd_speed_signfree.log 2>&1
# 牛牛福利
1 9,19 * * * node /scripts/jd_nnfl.js >> /scripts/logs/jd_nnfl.log 2>&1
#赚京豆
10,40 0,1 * * * node /scripts/jd_syj.js >> /scripts/logs/jd_syj.log 2>&1
#搞基大神-饭粒
46 1,19 * * * node /scripts/jd_fanli.js >> /scripts/logs/jd_fanli.log 2>&1
#农场集勋章
16 7,16 * * * node /scripts/jd_medal.js >> /scripts/logs/jd_medal.log 2>&1
#京东签到翻牌
10 8,18 * * * node /scripts/jd_sign_graphics.js >> /scripts/logs/jd_sign_graphics.log 2>&1
#京喜财富岛合成生鲜
45 * * * * node /scripts/jd_cfd_yyds_fresh.js >> /scripts/logs/jd_cfd_yyds_fresh.log 2>&1
#财富岛珍珠兑换
59 0-23/1 * * * node /scripts/jd_cfd_yyds_pearl_ex.js >> /scripts/logs/jd_cfd_yyds_pearl_ex.log 2>&1
#美丽研究院--兑换
1 7,12,19 * * * node /scripts/jd_beauty_ex.js >> /scripts/logs/jd_beauty_ex.log 2>&1
#锦鲤
5 0 * * * node /scripts/jd_angryKoi.js >> /scripts/logs/jd_angryKoi.log 2>&1
#京东赚京豆一分钱抽奖
10 0 * * * node /scripts/jd_lottery_drew.js >> /scripts/logs/jd_lottery_drew.log 2>&1
#京东保价
41 23 * * * node /scripts/jd_price.js >> /scripts/logs/jd_price.log 2>&1
#金榜年终奖
10 0,2 * * * node /scripts/jd_split.js >> /scripts/logs/jd_split.log 2>&1
#京东小魔方--收集兑换
10 7 * * * node /scripts/jd_mofang_ex.js >> /scripts/logs/jd_mofang_ex.log 2>&1
#骁龙
10 9,17 * * * node /scripts/jd_xiaolong.js >> /scripts/logs/jd_xiaolong.log 2>&1
#京东我的理想家
10 7 * * * node /scripts/jd_lxLottery.js >> /scripts/logs/jd_lxLottery.log 2>&1
#京豆兑换为喜豆
33 9 * * * node /scripts/jd_exchangejxbeans.js >> /scripts/logs/jd_exchangejxbeans.log 2>&1
#早起签到
1 6,7 * * * python3 /jd/scripts/jd_zqfl.py >> /jd/log/jd_zqfl.log 2>&1
