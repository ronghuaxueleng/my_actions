#!/bin/bash
# Update: 2022-01-21
# Content: add  jd_txjf.js(通讯积分)
#          del  jd_travel.js

##############################  京  东  商  城  ##############################
## 列表格式： 脚本名称 | 活动名称 | 备注说明

#  jd_price.js                     京东价保
#  jd_try.js                       京东试用
#  jd_try_notify.py                京东试用待领取通知
#  jd_bean_change.js               京东资产变动强化版
#  jd_bean_xibean.js               过期京豆自动兑换喜豆
#  jd_unsubscriLive.js             取关所有主播
#  jd_unsubscribe_xh.js            取关店铺和商品
#  jd_super_redrain.js             整点京豆雨
#  jd_half_redrain.js              半点京豆雨
#  jd_shop_sign.js                 店铺签到                 (内置店铺 Token，定期更新)
#  jd_productZ4Brand.js            特物Z
#  jd_DrawEntrance.js              天天优惠大乐透
#  jd_sign_graphics.js             京东签到图形验证
#  jd_morningSc.js                 早起赢现金               (活动入口在京东汽车-瓜分万元，支付一元才能参与活动)
#  jd_moneyTree_heip.js            京东摇钱树助力
#  jd_joy_park.js                  汪汪乐园
#  jd_joy_park_task.js             汪汪乐园每日任务
#  jd_dwapp.js                     积分换话费
#  jd_nnfls.js                     牛牛福利社
#  jd_fanli.js                     京东饭粒
#  jd_medal.js                     农场集勋章
#  jd_gold_sign.js                 京东金榜签到
#  jd_beauty_ex.js                 美丽研究院兑换京豆
#  jd_joy_tx.js                    汪汪乐园提现
#  jd_lxLottery.js                 京东我的理想家
#  gua_UnknownTask9.js             发现好货
#  jd_jfcz.js                      见缝插针
#  jd_angryKoi.py                  安静的锦鲤               (全民开红包)
#  jd_qqxing.js                    QQ星系牧场               (执行时间较长并且API容易请求失败，建议仅指定前几个头部账号运行)
#  jd_jdtj_winner.js               京东特价翻翻乐
#  jd_sevenDay.js                  超级无线店铺签到
#  jd_nh_sign.js                   年货节签到
#  jd_m_sign.js                    京东通天塔--签到
#  jd_mofang_ex.js                 京东小魔方--收集兑换
#  jd_xiaolong.js                  骁龙
#  jd_cjhz.js                      京东超级盒子
#  jd_mpdzcar.js                   京东汽车
#  jd_bt_sign.js                   白条抽奖
#  jx_ttysq.js                     天天压岁钱
#  jd_dns_shop.js                  全民炸年兽店铺大富翁
#  jd_babel_sign.js                通天塔签到共建
#  jd_mhyyl.js                     萌虎摇摇乐
#  rush_xuanyuan.js                轩辕虎越,风生水起
#  jx_ttysq.js                     天天压岁钱
#  jd_txjf.js                      通讯积分

##############################  脚  本  内  环  境  变  量  ##############################
## 推荐使用项目自带的环境变量管理命令，默认交互支持快捷命令
## 快速添加环境变量：task env add <变量名> <变量的值>

# "早起赢现金"
#    export morningScPins=""  # 指定打卡账号，填 pt_pin 的值
# "京东试用"
#    export JD_TRY_PRICE=""              # 只申请试用高于此价格的商品
#    export JD_TRY_TABID=""              # 试用商品类型：1)精选 2)闪电试 3)家用电器 4)手机数码 5)电脑办公 默认为精选
#    export JD_TRY_TITLEFILTERS=""       # 试用商品标题关键词过滤，黑名单，多个关键词用@隔开
#    export JD_TRY_TRIALPRICE=""         # 试用价格，有些商品的试用价格不为0即不完全免费，默认为0
#    export JD_TRY_MINSUPPLYNUM=""       # 试用资格数量最小值，若商品提供的试用资格数量小于设定值则不会申请
#    export JD_TRY_APPLYNUMFILTER=""     # 过滤大于设定值的已申请人数的商品
#    export JD_TRY_APPLYINTERVAL=""      # 商品试用之间和获取商品之间的间隔, 单位毫秒，默认为3秒
#    export JD_TRY_MAXLENGTH=""          # 申请的商品队列长度
#    export JD_TRY_PASSZC=""             # 过滤种草官类试用，某些试用商品是专属官专属，默认为true
#    export JD_TRY_PLOG=""               # 是否打印输出到日志，默认为true，建议改为false因为日志太长了
#    export JD_TRY_WHITELIST=""          # 试用商品标题白名单是否打开，开启白名单后黑名单将不生效失效，默认为false
#    export JD_TRY_WHITELISTKEYWORDS=""  # 试用商品标题白名单关键词，多个关键词用@隔开
#    export JD_TRY_SENDNUM=""            # 每多少个账号推送一次通知，默认为4
# "批量取关店铺和商品"
#    export JD_UNSUB_GKEYWORDS="" # 商品类过滤关键词，多个用@分隔
#    export JD_UNSUB_SKEYWORDS="" # 店铺类过滤关键词，多个用@分隔

##############################  近  期  删  除  ##############################

# jd_travel.js

##############################  京  东  到  家  ##############################

## jddj_bean.js                     鲜豆任务
## jddj_fruit.js                    果园任务
## jddj_fruit_collectWater.js       果园水车收水滴
## jddj_plantBeans.js               鲜豆庄园
## jddj_getPoints.js                鲜豆庄园收水滴

## 京东到家需开通 "到家果园" 活动，自行挑选水果种植与 "东东农场" 类似，不想薅这个APP的羊毛就忽略这些脚本，可以注释掉定时任务

## 京东到家账号环境变量（必填）：
## export JDDJ_CKPATH="/jd/scripts/jdCookie.js"  # 指定组合COOKIE脚本的路径

##############################  主  要  代  码  ##############################
## 免责声明：当作者的脚本不可拉取时，会临时启用别人 FORK 或搬运的库代替

NEWLINE="\n          "
UpdateDate="2022-01-21"
UpdateContent="add  jd_txjf.js(通讯积分)${NEWLINE}del  jd_travel.js"

## 作者
author_list="Public passerby_b smiek2221 star261 shufflewzc X1a0He KingRan Dellear jiulan wuye999 mmnvnmm ccwav"
author_name=(
  Public
  passerby-b
  青蛙
  star261
  Facker
  X1a0He
  KingRan
  Dellear
  jiulan
  wuye999
  小埋
  ccwav
)

## 定义下载代理 (非内置功能)
if [[ ${EnableExtraShellProxy} ]] && [[ ${EnableExtraShellProxy} == true ]]; then
  ProxyJudge=${GithubProxy}
else
  ProxyJudge="https://ghproxy.com/"
fi

## Public
scripts_base_url_Public=https://gitee.com/SuperManito/scripts/raw/master/
my_scripts_list_Public="jd_shop_sign.js jd_super_redrain.js jd_half_redrain.js jd_qqxing.js rush_xuanyuan.js"

## 京东到家
scripts_base_url_passerby_b=${ProxyJudge}https://raw.githubusercontent.com/passerby-b/JDDJ/main/
my_scripts_list_passerby_b="jddj_fruit.js jddj_fruit_collectWater.js jddj_bean.js jddj_plantBeans.js jddj_getPoints.js jddjCookie.js"

## 青蛙
scripts_base_url_smiek2221=${ProxyJudge}https://raw.githubusercontent.com/smiek2121/scripts/master/
my_scripts_list_smiek2221="jd_sign_graphics.js sign_graphics_validate.js JDJRValidator_Pure.js gua_UnknownTask9.js"

## star261
scripts_base_url_star261=${ProxyJudge}https://raw.githubusercontent.com/star261/jd/main/scripts/
my_scripts_list_star261="jd_productZ4Brand.js jd_nh_sign.js jd_xiaolong.js jd_dns_shop.js jd_mhyyl.js"

## Facker
scripts_base_url_shufflewzc=${ProxyJudge}https://raw.githubusercontent.com/shufflewzc/faker2/main/
my_scripts_list_shufflewzc="jd_try.js jd_try_notify.py jd_DrawEntrance.js jd_morningSc.js jd_moneyTree_heip.js jd_dwapp.js jd_unsubscriLive.js jd_nnfls.js jd_gold_sign.js jd_lxLottery.js jd_m_sign.js jd_bt_sign.js jx_ttysq.js jd_babel_sign.js jx_ttysq.js"

## X1a0He
scripts_base_url_X1a0He=${ProxyJudge}https://raw.githubusercontent.com/X1a0He/jd_scripts_fixed/main/
my_scripts_list_X1a0He="jd_unsubscribe_xh.js"

## KingRan
scripts_base_url_KingRan=${ProxyJudge}https://raw.githubusercontent.com/KingRan/JDJB/main/
my_scripts_list_KingRan="jd_joy_park.js jd_joy_park_task.js jd_fanli.js jd_medal.js jd_cjhz.js"

## Dellear
scripts_base_url_Dellear=${ProxyJudge}https://raw.githubusercontent.com/Dellear/lost/main/extra/
my_scripts_list_Dellear="jd_bean_xibean.js jd_price.js"

## jiulan
scripts_base_url_jiulan=${ProxyJudge}https://raw.githubusercontent.com/jiulan/platypus/main/scripts/
my_scripts_list_jiulan="jd_joy_tx.js jd_jfcz.js jd_jdtj_winner.js jd_txjf.js"

## wuye999
scripts_base_url_wuye999=${ProxyJudge}https://raw.githubusercontent.com/wuye999/myScripts/main/jd/
my_scripts_list_wuye999="jd_angryKoi.py"

## 小埋
scripts_base_url_mmnvnmm=${ProxyJudge}https://raw.githubusercontent.com/mmnvnmm/omo/master/
my_scripts_list_mmnvnmm="jd_sevenDay.js jd_beauty_ex.js jd_mpdzcar.js"

## ccwav
scripts_base_url_ccwav=${ProxyJudge}https://raw.githubusercontent.com/ccwav/QLScript2/main/
my_scripts_list_ccwav="jd_bean_change.js"

## he1pu
scripts_base_url_he1pu=${ProxyJudge}https://raw.githubusercontent.com/he1pu/JDHelp/main/
my_scripts_list_he1pu=""

## cdle
scripts_base_url_cdle=${ProxyJudge}https://raw.githubusercontent.com/cdle/carry/main/
my_scripts_list_cdle=""

## curtinlv
scripts_base_url_curtinlv=${ProxyJudge}https://raw.githubusercontent.com/curtinlv/JD-Script/main/
my_scripts_list_curtinlv=""

##############################  主 命 令  ##############################
cd $RootDir
if [ -d $RootDir/.git ]; then
  git remote -v | grep "git@jd_base_gitee:supermanito/jd_base.git" -wq
fi

echo -e "更新日期：\033[33m${UpdateDate}\033[0m"
echo -e "更新内容：\033[33m${UpdateContent}\033[0m\n"

## 随机函数
rand() {
  min=$1
  max=$(($2 - $min + 1))
  num=$(cat /proc/sys/kernel/random/uuid | cksum | awk -F ' ' '{print $1}')
  echo $(($num % $max + $min))
}

index=0
for author in $author_list; do
  eval scripts_list=\$my_scripts_list_${author}
  eval url_list=\$scripts_base_url_${author}
  eval author="author_name[${index}]"

  ## 判断脚本来源仓库
  format_url=$(echo $url_list | awk -F '.com' '{print$NF}' | sed 's/.$//')
  if [[ $(echo $url_list | grep -Eo "github|gitee") == "github" ]]; then
    repository_platform="https://github.com"
    repository_branch=$(echo $format_url | awk -F '/' '{print$4}')
    reformat_url=$(echo $format_url | sed "s|$repository_branch|tree/$repository_branch|g")
    [[ ${EnableExtraShellProxy} == true ]] && DownloadJudge="(代理)" || DownloadJudge=""
  elif [[ $(echo $url_list | grep -Eo "github|gitee") == "gitee" ]]; then
    repository_platform="https://gitee.com"
    reformat_url=$(echo $format_url | sed "s|/raw/|/tree/|g")
    DownloadJudge=""
  fi
  repository_url="$repository_platform$reformat_url"
  echo -e "[${YELLOW}更新${PLAIN}] ${!author} ${DownloadJudge}"
  echo -e "[${YELLOW}仓库${PLAIN}] $repository_url"

  for js in $scripts_list; do
    croname=""
    script_cron_standard=""

    eval url=$url_list$js
    eval name=$js
    eval formatname=$(echo $js | awk -F '/' '{print$NF}')
    wget -q --no-check-certificate $url -O "$ScriptsDir/$name.new" -T 20
    if [ $? -eq 0 ]; then
      mv -f $ScriptsDir/$name.new $ScriptsDir/$name
      echo -e "$COMPLETE $formatname"

      case $name in
      jddjCookie.js | sign_graphics_validate.js | JDJRValidator_Pure.js | TS_USER_AGENTS.ts | function/*)
        continue
        ;;
      esac

      croname=$(echo "$name" | awk -F\. '{print $1}' | perl -pe "{s|^jd_||; s|^jx_||; s|^jr_||;}")
      script_cron_standard=$(cat $ScriptsDir/$name | grep "https" | awk '{if($1~/^[0-9]{1,2}/) print $1,$2,$3,$4,$5}' | sort -u | head -n 1)
      case $name in
      jd_try.js)
        script_cron="30 10 * * *" # 指定京东试用的定时
        ;;
      jd_unsubscribe_xh.js)
        script_cron="20 10,23 * * *" # 指定取关脚本的定时
        ;;
      jd_productZ4Brand.js)
        script_cron="5 20,21 * * *" # 指定特物Z的定时
        ;;
      jd_jchsign.js)
        script_cron="$(rand 1 59) $(rand 1 23) * * *" # 京车会签到，随机定时
        ;;
      jd_beauty_ex.js)
        script_cron="$(rand 1 5) $(rand 6 8),$(rand 11 13),$(rand 18 20) * * * " # 美丽研究院兑换，随机定时
        ;;
      *)
        if [[ -z ${script_cron_standard} ]]; then
          tmp1=$(grep -E "cron|script-path|tag|\* \*|$name" $ScriptsDir/$name | grep -Ev "^http.*:" | head -1 | perl -pe '{s|[a-zA-Z\"\.\=\:\_]||g;}')
          ## 判断开头
          tmp2=$(echo "${tmp1}" | awk -F '[0-9]' '{print$1}' | sed 's/\*/\\*/g; s/\./\\./g')
          ## 判断表达式的第一个数字（分钟）
          tmp3=$(echo "${tmp1}" | grep -Eo "[0-9]" | head -1)
          ## 判定开头是否为空值
          if [[ $(echo "${tmp2}" | perl -pe '{s| ||g;}') = "" ]]; then
            script_cron=$(echo "${tmp1}" | awk '{if($1~/^[0-9]{1,2}/) print $1,$2,$3,$4,$5; else if ($1~/^[*]/) print $2,$3,$4,$5,$6}')
          else
            script_cron=$(echo "${tmp1}" | perl -pe "{s|${tmp2}${tmp3}|${tmp3}|g;}" | awk '{if($1~/^[0-9]{1,2}/) print $1,$2,$3,$4,$5; else if ($1~/^[*]/) print $2,$3,$4,$5,$6}')
          fi
        else
          script_cron=${script_cron_standard}
        fi
        ;;
      esac

      if [ -z "${script_cron}" ]; then
        cron_min=$(rand 1 59)
        cron_hour=$(rand 1 23)
        [ $(grep -c " $TaskCmd $croname" $ListCrontabUser) -eq 0 ] && sed -i "/hang up/a${cron_min} ${cron_hour} * * * $TaskCmd $croname" $ListCrontabUser
      else
        [ $(grep -c " $TaskCmd $croname" $ListCrontabUser) -eq 0 ] && sed -i "/hang up/a${script_cron} $TaskCmd $croname" $ListCrontabUser
      fi
    else
      [ -f $ScriptsDir/$name.new ] && rm -f $ScriptsDir/$name.new
      echo -e "[${RED}FAIL${PLAIN}] $formatname 更新失败"
    fi
  done
  let index+=1
  echo ''
done
##############################  自  定  义  命  令  ##############################

## 删除垃圾文件
DeleteCacheFiles=""
for del in ${DeleteCacheFiles}; do
  [ -f $ScriptsDir/$del ] && rm -rf $ScriptsDir/$del
done

## 删除脚本和定时
DeleteScripts="jd_travel.js"
for del in ${DeleteScripts}; do
  [ -f $ScriptsDir/$del ] && rm -rf $ScriptsDir/$del && sed -i "/ $TaskCmd $(echo "$del" | awk -F\. '{print $1}' | perl -pe "{s|^jd_||; s|^jx_||; s|^jr_||;}")/d" $ListCrontabUser
done
