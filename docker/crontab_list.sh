
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
# 每3天的23:50分清理一次日志(互助码不清理，proc_file.sh对该文件进行了去重)
50 23 */3 * * find /scripts/logs -name '*.log' | grep -v 'sharecodeCollection' | xargs rm -rf
#收集助力码
30 * * * * sh +x /scripts/docker/auto_help.sh collect >> /scripts/logs/auto_help_collect.log 2>&1
##############活动##############
# 京东资产变动通知
30 21 * * * node /scripts/jd_bean_change.js >> /scripts/logs/jd_bean_change.log 2>&1
# 领京豆额外奖励
23 1,18 * * * node /scripts/jd_bean_home.js >> /scripts/logs/jd_bean_home.log 2>&1
# 详细版京东京豆统计
20 22 * * * node /scripts/jd_bean_info.js >> /scripts/logs/jd_bean_info.log 2>&1
# 京东多合一签到脚本修改版
0 0 * * * node /scripts/JD_DailyBonus.js >> /scripts/logs/JD_DailyBonus.log 2>&1
# 京东多合一签到
0 0 * * * node /scripts/jd_bean_sign.js >> /scripts/logs/jd_bean_sign.log 2>&1
# 美丽研究院
20 7,12,19 * * * node /scripts/jd_beauty.js >> /scripts/logs/jd_beauty.log 2>&1
# 头文字
30 4,16 * * * node /scripts/jd_carplay.js >> /scripts/logs/jd_carplay.log 2>&1
# 领现金
11 1,20 * * * node /scripts/jd_cash_ShuaiLeiLu_nolan.js >> /scripts/logs/jd_cash_ShuaiLeiLu_nolan.log 2>&1
# 微信签到领现金
11 1,20 * * * node /scripts/jd_cash_ShuaiLeiLu_wx.js >> /scripts/logs/jd_cash_ShuaiLeiLu_wx.log 2>&1
# 财富岛
1 0-23/2 * * * node /scripts/jd_cfd_ShuaiLeiLu.js >> /scripts/logs/jd_cfd_ShuaiLeiLu.log 2>&1
# 摇京豆
5 0,23 * * * node /scripts/jd_club_lottery.js >> /scripts/logs/jd_club_lottery.log 2>&1
# 京东日常签到-加密
1 0,8 * * * node /scripts/jd_dailysign.js >> /scripts/logs/jd_dailysign.log 2>&1
# 东东乐园
30 7 * * * node /scripts/jd_ddnc_farmpark.js >> /scripts/logs/jd_ddnc_farmpark.log 2>&1
# 店铺签到
0 4,18 * * * node /scripts/jd_dpqd.js >> /scripts/logs/jd_dpqd.log 2>&1
# LZ刮刮乐抽奖通用活动
31 1 1 1 1 node /scripts/jd_drawCenter.js >> /scripts/logs/jd_drawCenter.log 2>&1
# 京喜工厂
10 0,6-23 * * * node /scripts/jd_dreamFactory_ShuaiLeiLu.js >> /scripts/logs/jd_dreamFactory_ShuaiLeiLu.log 2>&1
# 京豆夺宝
40,45 23 * * * node /scripts/jd_duobao.js >> /scripts/logs/jd_duobao.log 2>&1
# 积分换话费
33 7 * * * node /scripts/jd_dwapp.js >> /scripts/logs/jd_dwapp.log 2>&1
### 发财挖宝
#40 6,17 * * * node /scripts/jd_fcwb.js >> /scripts/logs/jd_fcwb.log 2>&1
## 发财挖宝
#40 6,17 * * * node /scripts/jd_fcwb.py >> /scripts/logs/jd_fcwb.log 2>&1
# 发财挖宝Nark免费
#40 1,17 * * * node /scripts/jd_fcwb_mfhelp.js >> /scripts/logs/jd_fcwb_mfhelp.log 2>&1
# 东东农场日常任务
12 2-22/10 * * * node /scripts/jd_fruit_ShuaiLeiLu.js >> /scripts/logs/jd_fruit_ShuaiLeiLu.log 2>&1
# 东东农场好友删减奖励
10 2 * * * node /scripts/jd_fruit_ShuaiLeiLu_friend.js >> /scripts/logs/jd_fruit_ShuaiLeiLu_friend.log 2>&1
# 东东农场好友删减奖励
10 2 * * * node /scripts/jd_fruit_ShuaiLeiLu_help.js >> /scripts/logs/jd_fruit_ShuaiLeiLu_help.log 2>&1
# 通用游戏任务
5 6-18/6 * * * node /scripts/jd_game.js >> /scripts/logs/jd_game.log 2>&1
# 金榜创造营
13 1,22 * * * node /scripts/jd_gold_creator.js >> /scripts/logs/jd_gold_creator.log 2>&1
# 京东金榜
13 1,22 * * * node /scripts/jd_gold_sign.js >> /scripts/logs/jd_gold_sign.log 2>&1
# 东东健康社区
13 1,6,22 * * * node /scripts/jd_health_ShuaiLeiLu.js >> /scripts/logs/jd_health_ShuaiLeiLu.log 2>&1
# 京洞察问卷通知
35 11 * * * node /scripts/jd_insight.js >> /scripts/logs/jd_insight.log 2>&1
# 京东到家果园
10 0,3,8,11,17 * * * node /scripts/jd_jddj_fruit.js >> /scripts/logs/jd_jddj_fruit.log 2>&1
# 东东工厂
10 0,6-23 * * * node /scripts/jd_jdfactory_ShuaiLeiLu.js >> /scripts/logs/jd_jdfactory_ShuaiLeiLu.log 2>&1
# 京东赚赚
10 1,19 * * * node /scripts/jd_jdzz.js >> /scripts/logs/jd_jdzz.log 2>&1
# 领金贴
10 0 * * * node /scripts/jd_jin_tie.js >> /scripts/logs/jd_jin_tie.log 2>&1
# 汪汪乐园-跑步+组队
30 0 * * * * node /scripts/jd_joy_park_run.ts >> /scripts/logs/jd_joy_park_run.log 2>&1
# 汪汪乐园每日任务
0 1,7,20 * * * node /scripts/jd_joypark_task.js >> /scripts/logs/jd_joypark_task.log 2>&1
# 汪汪赛跑-提现10元
3 0 0 * * 5 node /scripts/jd_joy_run_reward.ts >> /scripts/logs/jd_joy_run_reward.log 2>&1
# JoyJd任务脚本
0 1,7,20 * * * node /scripts/jd_joyjd_open.js >> /scripts/logs/jd_joyjd_open.log 2>&1
# JOY庄园每日任务
0 1,7,20 * * * node /scripts/jd_joymanor_task.js >> /scripts/logs/jd_joymanor_task.log 2>&1
# 京东金融-双签
10 19 * * * node /scripts/jd_jrsign.js >> /scripts/logs/jd_jrsign.log 2>&1
# 极速版签到提现
0 1 * * * node /scripts/jd_js_sign.js >> /scripts/logs/jd_js_sign.log 2>&1
# 京喜签到
20 1,8 * * * node /scripts/jd_jx_sign.js >> /scripts/logs/jd_jx_sign.log 2>&1
# 京喜工厂商品列表详情
10 10 * * * node /scripts/jd_jxgckc.js >> /scripts/logs/jd_jxgckc.log 2>&1
# 京喜牧场
20 0-23/2 * * * node /scripts/jd_jxmc_ShuaiLeiLu.js >> /scripts/logs/jd_jxmc_ShuaiLeiLu.log 2>&1
# 砍价免费拿
0 0 * * * node /scripts/jd_kanjia.js >> /scripts/logs/jd_kanjia.log 2>&1
# 京东快递签到
10 0 * * * node /scripts/jd_kd.js >> /scripts/logs/jd_kd.log 2>&1
# joy抽奖机通用
0 0,10 * * * node /scripts/jd_lottery.js >> /scripts/logs/jd_lottery.log 2>&1
# 京东小魔方
45 8,19 * * * node /scripts/jd_mf_new.js >> /scripts/logs/jd_mf_new.log 2>&1
# 京东新品-集魔方兑换-本地log版
10 8 * * * node /scripts/jd_mofang.js >> /scripts/logs/jd_mofang.log 2>&1
# 生鲜早起打卡
15 6,7 * * * node /scripts/jd_morningSc.js >> /scripts/logs/jd_morningSc.log 2>&1
# 东东萌宠
15 6-18/6 * * * node /scripts/jd_pet_ShuaiLeiLu.js >> /scripts/logs/jd_pet_ShuaiLeiLu.log 2>&1
# 东东萌宠
15 6-18/6 * * * node /scripts/jd_pet_ShuaiLeiLu_help.js >> /scripts/logs/jd_pet_ShuaiLeiLu_help.log 2>&1
# 种豆得豆
1 7-21/2 * * * node /scripts/jd_plantBean_ShuaiLeiLu.js >> /scripts/logs/jd_plantBean_ShuaiLeiLu.log 2>&1
# 种豆得豆
1 7-21/2 * * * node /scripts/jd_plantBean_ShuaiLeiLu_help.js >> /scripts/logs/jd_plantBean_ShuaiLeiLu_help.log 2>&1
# 京东保价
40 19 * * * node /scripts/jd_price.js >> /scripts/logs/jd_price.log 2>&1
# 闪购盲盒
20 8 * * * node /scripts/jd_sgmh_ShuaiLeiLu.js >> /scripts/logs/jd_sgmh_ShuaiLeiLu.log 2>&1
# 闪购签到有礼
10 10 * * * node /scripts/jd_shangou.js >> /scripts/logs/jd_shangou.log 2>&1
# 京东签到
48 9,22 * * * node /scripts/jd_sign.js >> /scripts/logs/jd_sign.log 2>&1
# 京东签到翻牌
48 9,22 * * * node /scripts/sign_graphics_validate.js >> /scripts/logs/sign_graphics_validate.log 2>&1
# 京东极速版红包
20 0,22 * * * node /scripts/jd_speed_redpocke.js >> /scripts/logs/jd_speed_redpocke.log 2>&1
# 京东极速版
21 3,8 * * * node /scripts/jd_speed_sign.js >> /scripts/logs/jd_speed_sign.log 2>&1
# 京东极速版签到免单
18 8,20 * * * node /scripts/jd_speed_signfree.js >> /scripts/logs/jd_speed_signfree.log 2>&1
# 特务Z-II
35 10,18,20 * * * node /scripts/jd_superBrand.js >> /scripts/logs/jd_superBrand.log 2>&1
# 特务集卡
2 10,18,20 * * * node /scripts/jd_superBrandJK.js >> /scripts/logs/jd_superBrandJK.log 2>&1
# 特务集勋章
8 10,18,20 * * * node /scripts/jd_superBrandJXZ.js >> /scripts/logs/jd_superBrandJXZ.log 2>&1
# 特务之明星送好礼
36 2,19 * * * node /scripts/jd_superBrandStar.js >> /scripts/logs/jd_superBrandStar.log 2>&1
# 探味奇遇记
31 0,13 13-20 8 * node /scripts/jd_tanwei.js >> /scripts/logs/jd_tanwei.log 2>&1
# 京东试用
4 1-22/8 * * * node /scripts/jd_try.js >> /scripts/logs/jd_try.log 2>&1
# 京东试用待领取通知
22 15 * * * node /scripts/jd_try_notify.js >> /scripts/logs/jd_try_notify.log 2>&1
# 取关所有主播
55 22 * * * node /scripts/jd_unsubscriLive.js >> /scripts/logs/jd_unsubscriLive.log 2>&1
# 批量取关京东店铺和商品
5 3,19 * * * node /scripts/jd_unsubscribe.js >> /scripts/logs/jd_unsubscribe.log 2>&1
# 众筹许愿池
40 0,2 * * * node /scripts/jd_wish.js >> /scripts/logs/jd_wish.log 2>&1
# 极速版我是大老板农场
5 0-23/6 * * * node /scripts/jd_wsdlb.js >> /scripts/logs/jd_wsdlb.log 2>&1
# 京享周周乐
2 6 * * 5 node /scripts/jd_xs_zzl.js >> /scripts/logs/jd_xs_zzl.log 2>&1
# 柠檬赚金币
20 0 * * * node /scripts/jd_zjb.js >> /scripts/logs/jd_zjb.log 2>&1
# 赚喜豆-TS版
15,30,45 0 * * * node /scripts/jd_zjd.ts >> /scripts/logs/jd_zjb.log 2>&1
# 滑块验证的签到
43 1,16 * * * node /scripts/jd_slider_sign.js >> /scripts/logs/jd_slider_sign.log 2>&1
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
# 每3天的23:50分清理一次日志(互助码不清理，proc_file.sh对该文件进行了去重)
50 23 */3 * * find /scripts/logs -name '*.log' | grep -v 'sharecodeCollection' | xargs rm -rf
#收集助力码
30 * * * * sh +x /scripts/docker/auto_help.sh collect >> /scripts/logs/auto_help_collect.log 2>&1
##############活动##############
# 东东电竞经理
20 0-23/2 * * * node /scripts/jd_EsportsManager.js >> /scripts/logs/jd_EsportsManager.log 2>&1
# 京东资产变动
30 21 * * * node /scripts/jd_bean_change.js >> /scripts/logs/jd_bean_change.log 2>&1
# 京东资产变动
30 21 * * * node /scripts/jd_bean_change_pro.js >> /scripts/logs/jd_bean_change_pro.log 2>&1
# 领京豆额外奖励
23 1,12,22 * * * node /scripts/jd_bean_home.js >> /scripts/logs/jd_bean_home.log 2>&1
# 京豆详情统计
# 7 7 7 7 7 node /scripts/jd_bean_info.js >> /scripts/logs/jd_bean_info.log 2>&1
# 京东多合一签到
5 0 * * * node /scripts/jd_bean_sign.js >> /scripts/logs/jd_bean_sign.log 2>&1
# 美丽研究院
20 7,12,19 * * * node /scripts/jd_beauty.js >> /scripts/logs/jd_beauty.log 2>&1
# 美丽研究院--兑换
20 12 * * * node /scripts/jd_beauty_ex.js >> /scripts/logs/jd_beauty_ex.log 2>&1
# 化妆馆-种植园自动任务
# 10 9,11,15,21 * * * node /scripts/jd_beauty_plant.py >> /scripts/logs/jd_beauty_plant.log 2>&1
# 东东超市兑换奖品
# 59 23 * * * node /scripts/jd_blueCoin.js >> /scripts/logs/jd_blueCoin.log 2>&1
# 京东金融天天试手气
# 23 10 * * * node /scripts/jd_btdraw.py >> /scripts/logs/jd_btdraw.log 2>&1
# 领券中心签到
15 0 * * * node /scripts/jd_ccSign.js >> /scripts/logs/jd_ccSign.log 2>&1
# 京喜财富岛
1 * * * * node /scripts/jd_cfd_yyds.js >> /scripts/logs/jd_cfd_yyds.log 2>&1
# 京喜财富岛热气球
# 30 * * * * node /scripts/jd_cfd_yyds_loop.js >> /scripts/logs/jd_cfd_yyds_loop.log 2>&1
# 清空购物车
# 7 7 7 7 7 node /scripts/jd_cleancart.js >> /scripts/logs/jd_cleancart.log 2>&1
# 摇京豆
5 0,23 * * * node /scripts/jd_club_lottery.js >> /scripts/logs/jd_club_lottery.log 2>&1
# 内容鉴赏官
15 3,6 * * * node /scripts/jd_connoisseur.js >> /scripts/logs/jd_connoisseur.log 2>&1
# 京东快递-每日抽奖
13 1,22,23 * * * node /scripts/jd_daily_lottery.js >> /scripts/logs/jd_daily_lottery.log 2>&1
# 东东乐园
30 7 * * * node /scripts/jd_ddly.js >> /scripts/logs/jd_ddly.log 2>&1
# 京东集魔方
2 0,11 * * * node /scripts/jd_desire.js >> /scripts/logs/jd_desire.log 2>&1
# 店铺签到
15 2,14 * * * node /scripts/jd_dpqd.js >> /scripts/logs/jd_dpqd.log 2>&1
# 京喜工厂
10 * * * * node /scripts/jd_dreamFactory_yyds.js >> /scripts/logs/jd_dreamFactory_yyds.log 2>&1
# 京喜工厂招工互助
5 6,18 * * * node /scripts/jd_dreamFactory_yyds_help.js >> /scripts/logs/jd_dreamFactory_yyds_help.log 2>&1
# 京喜工厂开团
1 0 * * * node /scripts/jd_dreamFactory_yyds_tuan.js >> /scripts/logs/jd_dreamFactory_yyds_tuan.log 2>&1
# 积分换话费
33 7 * * * node /scripts/jd_dwapp.js >> /scripts/logs/jd_dwapp.log 2>&1
# M农场自动化
# 20 5,12,21 * * * node /scripts/jd_farautomation.js >> /scripts/logs/jd_farautomation.log 2>&1
# 东东农场互助版
5 6-18/6 * * * node /scripts/jd_fruit_yyds.js >> /scripts/logs/jd_fruit_yyds.log 2>&1
# 东东农场好友删减奖励
10 5,17 * * * node /scripts/jd_fruit_yyds_friend.js >> /scripts/logs/jd_fruit_yyds_friend.log 2>&1
# 农场自动收+种4级
# 7 7 7 7 7 node /scripts/jd_fruit_yyds_plant.ts >> /scripts/logs/jd_fruit_yyds_plant.log 2>&1
# 获取互助码
20 13 * * 6 node /scripts/jd_get_share_code.js >> /scripts/logs/jd_get_share_code.log 2>&1
# 金榜创造营
13 1,22 * * * node /scripts/jd_gold_creator.js >> /scripts/logs/jd_gold_creator.log 2>&1
# 京东金榜
13 7 * * * node /scripts/jd_gold_sign.js >> /scripts/logs/jd_gold_sign.log 2>&1
# 早起福利
30 6 * * * node /scripts/jd_goodMorning.js >> /scripts/logs/jd_goodMorning.log 2>&1
# 半点京豆雨
# 30 16-23/1 * * * node /scripts/jd_half_redrain.js >> /scripts/logs/jd_half_redrain.log 2>&1
# 东东健康社区
13 0,6,22 * * * node /scripts/jd_health_yyds.js >> /scripts/logs/jd_health_yyds.log 2>&1
# 东东健康社区收集能量收集
5-45/20 * * * * node /scripts/jd_health_yyds_collect.js >> /scripts/logs/jd_health_yyds_collect.log 2>&1
# 东东健康社区内部互助
5 4,14 * * * node /scripts/jd_health_yyds_help.js >> /scripts/logs/jd_health_yyds_help.log 2>&1
# 京洞察问卷通知
35 11 * * * node /scripts/jd_insight.js >> /scripts/logs/jd_insight.log 2>&1
# 东东工厂_内部互助
10 0,6-23 * * * node /scripts/jd_jdfactory_yyds.js >> /scripts/logs/jd_jdfactory_yyds.log 2>&1
# 京东赚赚
10 0 * * * node /scripts/jd_jdzz.js >> /scripts/logs/jd_jdzz.log 2>&1
# 见缝插针
15 10 * * * node /scripts/jd_jfcz.js >> /scripts/logs/jd_jfcz.log 2>&1
# 领金贴
# 7 7 7 7 7 node /scripts/jd_jin_tie.js >> /scripts/logs/jd_jin_tie.log 2>&1
# 专属礼 
6 10 * * * node /scripts/jd_jingBeanReceive.js >> /scripts/logs/jd_jingBeanReceive.log 2>&1
# 汪汪乐园-提现
3 0 0 * * node /scripts/jd_joy_joy_reward.ts >> /scripts/logs/jd_joy_joy_reward.log 2>&1
# 汪汪乐园养joy
20 0-23/3 * * * node /scripts/jd_joy_park.js >> /scripts/logs/jd_joy_park.log 2>&1
# 汪汪乐园养joy
20 0-23/3 * * * node /scripts/jd_joy_park_Mod.js >> /scripts/logs/jd_joy_park_Mod.log 2>&1
# 汪汪乐园-跑步+组队
30 0 * * * node /scripts/jd_joy_park_run.ts >> /scripts/logs/jd_joy_park_run.log 2>&1
# 汪汪乐园每日任务
0 1,7,20 * * * node /scripts/jd_joy_park_task.js >> /scripts/logs/jd_joy_park_task.log 2>&1
# 汪汪乐园每日任务
0 0,7,9,17,20 * * * node /scripts/jd_joy_park_task_Mod.js >> /scripts/logs/jd_joy_park_task_Mod.log 2>&1
# 汪汪赛跑-提现10元
# 2 0 0 * * node /scripts/jd_joy_run_reward.ts >> /scripts/logs/jd_joy_run_reward.log 2>&1
# 京东金融每周领取权益活动
10 17 6 12 * node /scripts/jd_jr_draw.js >> /scripts/logs/jd_jr_draw.log 2>&1
# 京东金融分享助力
5 0 10 * * * node /scripts/jd_jrmx.py >> /scripts/logs/jd_jrmx.log 2>&1
# 京喜工厂商品列表详情
10 10 * * * node /scripts/jd_jxgckc.js >> /scripts/logs/jd_jxgckc.log 2>&1
# 京喜领88元红包
4 2,10 * * * node /scripts/jd_jxlhb.js >> /scripts/logs/jd_jxlhb.log 2>&1
# 京喜牧场
20 * * * * node /scripts/jd_jxmc_yyds.js >> /scripts/logs/jd_jxmc_yyds.log 2>&1
# 京东直播
7 7 7 7 7 node /scripts/jd_live.js >> /scripts/logs/jd_live.log 2>&1
# 超级直播间红包雨
0,30 0-23/1 * * * node /scripts/jd_live_redrain.js >> /scripts/logs/jd_live_redrain.log 2>&1
# 领京豆
7 7 7 7 7 node /scripts/jd_ljd_xh.js >> /scripts/logs/jd_ljd_xh.log 2>&1
# 京东通天塔--签到
3 1,11 * * * node /scripts/jd_m_sign.js >> /scripts/logs/jd_m_sign.log 2>&1
# 4月蒙牛春日音乐节抽奖机
31 14 9-21/3 4 * node /scripts/jd_mncryyj.js >> /scripts/logs/jd_mncryyj.log 2>&1
# 京东-新品-魔方
10 9,12,15 * * * node /scripts/jd_mofang.ts >> /scripts/logs/jd_mofang.log 2>&1
# 京东摇钱树
3 0-23/2 * * * node /scripts/jd_moneyTree.js >> /scripts/logs/jd_moneyTree.log 2>&1
# 京东摇钱树助力
0-59/30 * * * * node /scripts/jd_moneyTree_heip.js >> /scripts/logs/jd_moneyTree_heip.log 2>&1
# 生鲜早起打卡
15 6,7 * * * node /scripts/jd_morningSc.js >> /scripts/logs/jd_morningSc.log 2>&1
# 头文字j助力
16 16,17,18 * * * node /scripts/jd_mpdz_car_help.js >> /scripts/logs/jd_mpdz_car_help.log 2>&1
# 头文字j任务
16 16,17,18 * * * node /scripts/jd_mpdz_car_task.js >> /scripts/logs/jd_mpdz_car_task.log 2>&1
# 牛牛福利
1 0,19,23 * * * node /scripts/jd_nnfls.js >> /scripts/logs/jd_nnfls.log 2>&1
# 女装盲盒抽京豆
35 1,23 * * * node /scripts/jd_nzmh.js >> /scripts/logs/jd_nzmh.log 2>&1
# 东东萌宠互助版
15 6-18/6 * * * node /scripts/jd_pet_yyds.js >> /scripts/logs/jd_pet_yyds.log 2>&1
# M萌宠自动化
40 5,12,21 * * * node /scripts/jd_pet_yyds_automation.js >> /scripts/logs/jd_pet_yyds_automation.log 2>&1
# 金融养猪
12 0-23/6 * * * node /scripts/jd_pigPet.js >> /scripts/logs/jd_pigPet.log 2>&1
# 种豆得豆
1 7-21/2 * * * node /scripts/jd_plantBean_yyds.js >> /scripts/logs/jd_plantBean_yyds.log 2>&1
# 种豆得豆内部互助
40 4,17 * * * node /scripts/jd_plantBean_yyds_help.js >> /scripts/logs/jd_plantBean_yyds_help.log 2>&1
# 京东保价
39 20 * * * node /scripts/jd_price.js >> /scripts/logs/jd_price.log 2>&1
# 特务Z
23 8,9 * * * node /scripts/jd_productZ4Brand.js >> /scripts/logs/jd_productZ4Brand.log 2>&1
# QQ星系牧场
1 0-23/2 * * * node /scripts/jd_qqxing.js >> /scripts/logs/jd_qqxing.log 2>&1
# 整点京豆雨
# 0 * * * * node /scripts/jd_redrain.js >> /scripts/logs/jd_redrain.log 2>&1
# 半点京豆雨
# 30 21,22 * * * node /scripts/jd_redrain_half.js >> /scripts/logs/jd_redrain_half.log 2>&1
# 超级无线店铺签到
0 0 * * * node /scripts/jd_sevenDay.js >> /scripts/logs/jd_sevenDay.log 2>&1
# 闪购盲盒
20 8 * * * node /scripts/jd_sgmh_yyds.js >> /scripts/logs/jd_sgmh_yyds.log 2>&1
# 闪购签到有礼
10 10 * * * node /scripts/jd_shangou.js >> /scripts/logs/jd_shangou.log 2>&1
# 店铺签到
0 0 * * * node /scripts/jd_shop_sign.js >> /scripts/logs/jd_shop_sign.log 2>&1
# 极速免费签到
7 7 7 7 7 node /scripts/jd_signFree.js >> /scripts/logs/jd_signFree.log 2>&1
# 京东签到翻牌
10 8 * * * node /scripts/jd_sign_graphics.js >> /scripts/logs/jd_sign_graphics.log 2>&1
# 京东签到翻牌
10 8 * * * node /scripts/jd_sign_graphics1.js >> /scripts/logs/jd_sign_graphics1.log 2>&1
# 京东极速版红包
20 0,22 * * * node /scripts/jd_speed_redpocke.js >> /scripts/logs/jd_speed_redpocke.log 2>&1
# 京东极速版
21 3,8 * * * node /scripts/jd_speed_sign.js >> /scripts/logs/jd_speed_sign.log 2>&1
# 京东极速版签到免单
18 8,12,20 * * * node /scripts/jd_speed_signfree.js >> /scripts/logs/jd_speed_signfree.log 2>&1
# 特务Z-II
35 10,18,20 * * * node /scripts/jd_superBrand.js >> /scripts/logs/jd_superBrand.log 2>&1
# 特务集卡
2 10,18,20 * * * node /scripts/jd_superBrandJK.js >> /scripts/logs/jd_superBrandJK.log 2>&1
# 特务之明星送好礼
36 2,19 * * * node /scripts/jd_superBrandStar.js >> /scripts/logs/jd_superBrandStar.log 2>&1
# 京东超级盲盒
0 20 3,17 6 * node /scripts/jd_supermh.js >> /scripts/logs/jd_supermh.log 2>&1
# 京东生鲜每日抽奖
10 7 * * * node /scripts/jd_sxLottery.js >> /scripts/logs/jd_sxLottery.log 2>&1
# 探味奇遇记
7 7 7 7 7 node /scripts/jd_tanwei.js >> /scripts/logs/jd_tanwei.log 2>&1
# 京东试用
# 7 7 7 7 7 node /scripts/jd_try.js >> /scripts/logs/jd_try.log 2>&1
# 京东试用待领取通知
# 22 15 * * * node /scripts/jd_try_notify.js >> /scripts/logs/jd_try_notify.log 2>&1
# 极速版-推推赚大钱
0 1 * * * node /scripts/jd_tyt.js >> /scripts/logs/jd_tyt.log 2>&1
# 推推赚大钱-快速
0 0 * * * node /scripts/jd_tyt_ks.js >> /scripts/logs/jd_tyt_ks.log 2>&1
# 取关所有主播
55 6 * * * node /scripts/jd_unsubscriLive.js >> /scripts/logs/jd_unsubscriLive.log 2>&1
# 批量取关店铺和商品
30 9,23 * * * node /scripts/jd_unsubscribe_xh.js >> /scripts/logs/jd_unsubscribe_xh.log 2>&1
# 微信小程序签到红包
8 0 * * * node /scripts/jd_wechat_sign.ts >> /scripts/logs/jd_wechat_sign.log 2>&1
# 微信赚赚
30 9 * * * node /scripts/jd_wechat_zz.ts >> /scripts/logs/jd_wechat_zz.log 2>&1
# 众筹许愿池
40 0,2 * * * node /scripts/jd_wish.js >> /scripts/logs/jd_wish.log 2>&1
# 微信签到领红包
7 7 7 7 7 node /scripts/jd_wq_wxsign.js >> /scripts/logs/jd_wq_wxsign.log 2>&1
# 玩一玩成就
0 8 * * * node /scripts/jd_wyw.js >> /scripts/logs/jd_wyw.log 2>&1
# 小鸽有礼
3 0,7 * * * node /scripts/jd_xgyl_wx.js >> /scripts/logs/jd_xgyl_wx.log 2>&1
# 赚京豆
15,30,45 0 * * * node /scripts/jd_zjd.ts >> /scripts/logs/jd_zjd.log 2>&1
# 京喜购物返红包助力
44 */6 * * * node /scripts/jx_aid_cashback.js >> /scripts/logs/jx_aid_cashback.log 2>&1
# M工厂自动化
20 * * * * node /scripts/jx_factory_automation.js >> /scripts/logs/jx_factory_automation.log 2>&1
# M京喜工厂商品
1 0,8-18/3 * * * node /scripts/jx_factory_commodity.js >> /scripts/logs/jx_factory_commodity.log 2>&1
# 京喜签到
20 1,8 * * * node /scripts/jx_sign.js >> /scripts/logs/jx_sign.log 2>&1