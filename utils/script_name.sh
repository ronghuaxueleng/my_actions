#!/usr/bin/env bash
## Update: 2021-09-19

case $1 in
jd_IndustryLottery.ts)
    Name="京东工业品抽奖"
    ;;
jd_bean_box.ts)
    Name="领京豆"
    ;;
jd_bean_sign.ts)
    Name="京东多合一签到"
    ;;
jd_cfd.ts)
    Name="京喜财富岛"
    ;;
jd_cfd_hb.ts)
    Name="京喜财富岛兑换红包"
    ;;
jd_cfd_loop.ts)
    Name="京喜财富岛热气球挂机"
    ;;
jd_cfd_stock.ts)
    Name="京喜财富岛库存监控"
    ;;
jd_cfd_withdraw.ts)
    Name="京喜财富岛提现"
    ;;
jd_checkCookie.ts)
    Name="检测Cookie是否有效"
    ;;
jd_ddWorld.ts)
    Name="东东世界"
    ;;
jd_foodRunning.ts)
    Name="零食街"
    ;;
jd_fruit_moreTask.ts)
    Name="东东农场额外任务"
    ;;
jd_getShareCodes.ts)
    Name="获取互助码"
    ;;
jd_getShareCodes.ts)
    Name="获取互助码"
    ;;
jd_getUp.ts)
    Name="早起福利"
    ;;
jd_joy_park.ts)
    Name="汪汪乐园"
    ;;
jd_joy_reward.ts)
    Name="宠汪汪兑换二代目"
    ;;
jd_jxgc.ts)
    Name="京喜工厂"
    ;;
jd_jxmc.ts)
    Name="京喜牧场"
    ;;
jd_jxmc_stock.ts)
    Name="京喜牧场兑换新品通知"
    ;;
jd_moneyTree.ts)
    Name="京东摇钱树"
    ;;
jd_qq_pasture.ts)
    Name="星系牧场"
    ;;
jd_speed_redEnvelope.ts)
    Name="极速版-发财大赢家"
    ;;
jd_yili_cow.ts)
    Name="伊利养牛记"
    ;;
jx_sign.ts)
    Name="京喜签到"
    ;;
jd_OpenCard.py)
    Name="开卡有礼"
    ;;
jd_blueCoin.py)
    Name="东东超市商品兑换"
    ;;
jd_cashHelp.py)
    Name="签到领现金"
    ;;
jd_getFollowGift.py)
    Name="关注有礼"
    ;;
jd_jxgc_tuan.py)
    Name="京喜工厂开团"
    ;;
jd_qjd.py)
    Name="抢京豆"
    ;;
jd_zjd.py)
    Name="赚京豆"
    ;;
*)
    Name=""
    ;;
esac
