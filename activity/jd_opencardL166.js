/*
6.1-6.18 京东粉丝联盟福利社 入会赢专享好礼
新增开卡脚本，一次性脚本


第一个账号助力作者 其他依次助力CK1
第一个CK失效会退出脚本

————————————————
入口：[ 6.1-6.18 京东粉丝联盟福利社 入会赢专享好礼 ]

请求太频繁会被黑ip
过10分钟再执行

cron:10 0 1-18 6 *
============Quantumultx===============
[task_local]
#4.13-4.20 京东粉丝联盟福利社 入会赢专享好礼
10 0 1-18 6 * jd_opencardL166.js, tag=6.1-6.18 京东粉丝联盟福利社 入会赢专享好礼, enabled=true

*/

const $ = new Env('6.1-6.18 京东粉丝联盟福利社');
const jdCookieNode = $.isNode() ? require('./jdCookie.js') : '';
const notify = $.isNode() ? require('./sendNotify') : '';
//IOS等用户直接用NobyDa的jd cookie

let cookiesArr = [],
    cookie = '';
if ($.isNode()) {
  Object.keys(jdCookieNode).forEach((item) => {
    cookiesArr.push(jdCookieNode[item])
  })
  if (process.env.JD_DEBUG && process.env.JD_DEBUG === 'false') console.log = () => {};
} else {
  cookiesArr = [$.getdata('CookieJD'), $.getdata('CookieJD2'), ...jsonParse($.getdata('CookiesJD') || "[]").map(item => item.cookie)].filter(item => !!item);
}
allMessage = ""
message = ""
$.hotFlag = false
$.outFlag = false
$.activityEnd = false
let lz_jdpin_token_cookie =''
let activityCookie =''
!(async () => {
  if (!cookiesArr[0]) {
    $.msg($.name, '【提示】请先获取cookie\n直接使用NobyDa的京东签到获取', 'https://bean.m.jd.com/', {
      "open-url": "https://bean.m.jd.com/"
    });
    return;
  }
  $.activityId = "dzefcdd5e64484bfb7a8168364shop"
  $.shareUuid = "ca5b720ebda64fbd8bcc06d78733e159"
  console.log(`入口:\nhttps://lzdz1-isv.isvjcloud.com/dingzhi/shop/league/activity?activityId=${$.activityId}&shareUuid=${$.shareUuid}`)
  let shareUuidArr = ["ca5b720ebda64fbd8bcc06d78733e159","b9ade888fdd4427dbd38ffb905175d25","c82894c8a318467aa2240c51716769aa"]
  let s = Math.floor((Math.random()*3))
  let n = 0
  n = Math.floor((Math.random()*shareUuidArr.length))
  $.shareUuid = shareUuidArr[n] ? shareUuidArr[n] : $.shareUuid
  for (let i = 0; i < cookiesArr.length; i++) {
    cookie = cookiesArr[i];
    if (cookie) {
      $.UserName = decodeURIComponent(cookie.match(/pt_pin=([^; ]+)(?=;?)/) && cookie.match(/pt_pin=([^; ]+)(?=;?)/)[1])
      $.index = i + 1;
      message = ""
      $.bean = 0
      $.hotFlag = false
      $.nickName = '';
      console.log(`\n\n******开始【京东账号${$.index}】${$.nickName || $.UserName}*********\n`);
      await getUA()
      await run();
      if(i == 0 && !$.actorUuid) break
      if($.outFlag || $.activityEnd) break
    }
  }
  if($.outFlag) {
    let msg = '此ip已被限制，请过10分钟后再执行脚本'
    $.msg($.name, ``, `${msg}`);
    if ($.isNode()) await notify.sendNotify(`${$.name}`, `${msg}`);
  }
})()
    .catch((e) => $.logErr(e))
    .finally(() => $.done())


async function run() {
  try {
    $.hasEnd = true
    $.endTime = 0
    lz_jdpin_token_cookie = ''
    $.Token = ''
    $.Pin = ''
    let flag = false
    await takePostRequest('isvObfuscator');
    if($.Token == ''){
      console.log('获取[token]失败！')
      return
    }
    await getCk()
    if (activityCookie == '') {
      console.log(`获取cookie失败`); return;
    }
    if($.activityEnd === true){
      console.log('活动结束')
      return
    }
    if($.outFlag){
      console.log('此ip已被限制，请过10分钟后再执行脚本\n')
      return
    }
    await takePostRequest('getSimpleActInfoVo');
    await takePostRequest('getMyPing');
    if(!$.Pin){
      console.log('获取[Pin]失败！')
      return
    }
    await takePostRequest('accessLogWithAD');
    await takePostRequest('getUserInfo');
    await takePostRequest('activityContent');
    if($.hotFlag) return
    if(!$.actorUuid){
      console.log('获取不到[actorUuid]退出执行，请重新执行')
      return
    }
    if($.hasEnd === true || Date.now() > $.endTime){
      $.activityEnd = true
      console.log('活动结束')
      return
    }
    await takePostRequest('drawContent');
    await $.wait(1000)
    $.openList = []
    $.allOpenCard = false
    await takePostRequest('checkOpenCard');
    console.log($.actorUuid)
    //return
    if($.allOpenCard == false){
      console.log('开卡任务')
      for(o of $.openList){
        $.openCard = false
        if(o.status == 0){
          flag = true
          $.joinVenderId = o.value
          $.shopactivityId = ''
          await getshopactivityId()
          for (let i = 0; i < Array(7).length; i++) {
            if (i > 0) console.log(`第${i}次 重新开卡`)
            await joinShop()
            if ($.errorJoinShop.indexOf('活动太火爆，请稍后再试') == -1) {
              break
            }
          }
          if ($.errorJoinShop.indexOf('活动太火爆，请稍后再试') > -1) {
            console.log("开卡失败❌ ，重新执行脚本")
            allMessage += `【账号${$.index}】开卡失败❌ ，重新执行脚本\n`
          } else {
            $.joinStatus = true
          }
          await takePostRequest('drawContent');
          await takePostRequest('checkOpenCard');
          await $.wait(parseInt(Math.random() * 1000 + 2000, 10))
        }
      }
      await takePostRequest('activityContent');
    }else{
      console.log('已全部开卡')
    }
    if($.openCardScore1 == 1 && !$.outFlag){
      $.startDraw = 1
      flag = true
      await takePostRequest('startDraw');
      await $.wait(parseInt(Math.random() * 1000 + 2000, 10))
    }
    if($.openCardScore2 == 1 && !$.outFlag){
      $.startDraw = 2
      flag = true
      await takePostRequest('startDraw');
      await $.wait(parseInt(Math.random() * 1000 + 3000, 10))
    }
    
    if($.openCardScore3 == 1 && !$.outFlag){
      $.startDraw = 3
      flag = true
      await takePostRequest('startDraw');
      await $.wait(parseInt(Math.random() * 1000 + 3000, 10))
    }
    $.log("关注: " + $.followShop)
    if(!$.followShop && !$.outFlag){
      flag = true
      $.followShopValue = 1
      await takePostRequest('followShop');
      await $.wait(parseInt(Math.random() * 1000 + 1000, 10))
    }
    
    $.log("加购: " + $.addSku)
    if(!$.addSku && !$.outFlag){
        flag = true
        $.followShopValue = 2
        await takePostRequest('addSku');
    }
    $.runFalag = true
    if(flag){
      await takePostRequest('activityContent');
    }
    await $.wait(parseInt(Math.random() * 1000 + 2000, 10))
    await takePostRequest('getDrawRecordHasCoupon');
    await takePostRequest('getShareRecord');
    if($.outFlag){
      console.log('此ip已被限制，请过10分钟后再执行脚本\n')
      return
    }
    console.log($.actorUuid)
    console.log(`当前助力:${$.shareUuid}`)
    if($.index == 1){
      $.shareUuid = $.actorUuid
      console.log(`后面的号都会助力:${$.shareUuid}`)
    }
      if($.index % 3 == 0) console.log('休息一下，别被黑ip了\n可持续发展')
      if($.index % 3 == 0) await $.wait(parseInt(Math.random() * 5000 + 20000, 10))
  } catch (e) {
    console.log(e)
  }
}

async function takePostRequest(type) {
  if ($.outFlag) return
  let domain = 'https://lzdz1-isv.isvjcloud.com';
  let body = ``;
  let method = 'POST'
  let admJson = ''
  switch (type) {
    case 'isvObfuscator':
      url = `https://api.m.jd.com/client.action?functionId=isvObfuscator`;
      body = `body=%7B%22url%22%3A%20%22https%3A//lzkj-isv.isvjcloud.com%22%2C%20%22id%22%3A%20%22%22%7D&uuid=hjudwgohxzVu96krv&client=apple&clientVersion=9.4.0&st=1620476162000&sv=111&sign=f9d1b7e3b943b6a136d54fe4f892af05`;
      break;
    case 'getSimpleActInfoVo':
      url = `${domain}/dz/common/getSimpleActInfoVo`;
      body = `activityId=${$.activityId}`;
      break;
    case 'getMyPing':
      url = `${domain}/customer/getMyPing`;
      body = `userId=${$.shopId || $.venderId || ''}&token=${$.Token}&fromType=APP`;
      break;
    case 'accessLogWithAD':
      url = `${domain}/common/accessLogWithAD`;
      let pageurl = `${domain}/dingzhi/shop/league/activity?activityId=${$.activityId}&shareUuid=${$.shareUuid}`
      body = `venderId=${$.shopId || $.venderId || ''}&code=99&pin=${encodeURIComponent($.Pin)}&activityId=${$.activityId}&pageUrl=${encodeURIComponent(pageurl)}&subType=app&adSource=`
      break;
    case 'getUserInfo':
      url = `${domain}/wxActionCommon/getUserInfo`;
      body = `pin=${encodeURIComponent($.Pin)}`;
      break;
    case 'activityContent':
      url = `${domain}/dingzhi/shop/league/activityContent`;
      body = `activityId=${$.activityId}&pin=${encodeURIComponent($.Pin)}&pinImg=${encodeURIComponent($.attrTouXiang)}&nick=${encodeURIComponent($.nickname)}&cjyxPin=&cjhyPin=&shareUuid=${$.shareUuid}`
      break;
    case 'drawContent':
      url = `${domain}/dingzhi/taskact/common/drawContent`;
      body = `activityId=${$.activityId}&pin=${encodeURIComponent($.Pin)}`
      break;
    case 'checkOpenCard':
      url = `${domain}/dingzhi/shop/league/checkOpenCard`;
      body = `activityId=${$.activityId}&actorUuid=${$.actorUuid}&pin=${encodeURIComponent($.Pin)}&shareUuid=${$.shareUuid}`
      break;
    case 'startDraw':
      url = `${domain}/dingzhi/shop/league/startDraw`;
      body = `activityId=${$.activityId}&actorUuid=${$.actorUuid}&pin=${encodeURIComponent($.Pin)}${$.startDraw && '&type=' + $.startDraw || ''}`
      break;
    case 'followShop':
      url = `${domain}/dingzhi/shop/league/saveTask`;
      body = `activityId=${$.activityId}&pin=${encodeURIComponent($.Pin)}&actorUuid=${$.actorUuid}&shareUuid=${$.shareUuid}&taskType=1&taskValue=${$.followShopValue}`
      break;
    case 'viewVideo':
    case 'visitSku':
    case 'toShop':
    case 'addSku':
      url = `${domain}/dingzhi/shop/league/saveTask`;
      let taskType = ''
      let taskValue = ''
      if (type == 'viewVideo') {
        taskType = 31
        taskValue = 31
      } else if (type == 'visitSku') {
        taskType = 5
        taskValue = $.visitSkuValue || 5
      } else if (type == 'toShop') {
        taskType = 14
        taskValue = $.toShopValue || 14
      } else if (type == 'addSku') {
        taskType = 2
        taskValue = $.addSkuValue || 2
      }
      body = `activityId=${$.activityId}&pin=${encodeURIComponent($.Pin)}&actorUuid=${$.actorUuid}&taskType=${taskType}&taskValue=${taskValue}`
      break;
    case 'getDrawRecordHasCoupon':
      url = `${domain}/dingzhi/taskact/common/getDrawRecordHasCoupon`;
      body = `activityId=${$.activityId}&pin=${encodeURIComponent($.Pin)}&actorUuid=${$.actorUuid}`
      break;
    case 'getShareRecord':
      url = `${domain}/dingzhi/taskact/common/getShareRecord`;
      body = `activityId=${$.activityId}&actorUuid=${$.actorUuid}`
      break;
    case '邀请':
    case '助力':
      if (type == '助力') {
        url = `${domain}/dingzhi/light/wishLamp/assist`;
      } else {
        url = `${domain}/dingzhi/linkgame/assist/status`;
      }
      body = `activityId=${$.activityId}&pin=${encodeURIComponent($.Pin)}&shareUuid=${$.shareUuid}`
      break;
    default:
      console.log(`错误${type}`);
  }
  let myRequest = getPostRequest(url, body, method);
  return new Promise(async resolve => {
    $.post(myRequest, (err, resp, data) => {
      try {
        setActivityCookie(resp)
        if (err) {
          if (resp && typeof resp.statusCode != 'undefined') {
            if (resp.statusCode == 493) {
              console.log('此ip已被限制，请过10分钟后再执行脚本\n')
              $.outFlag = true
            }
          }
          console.log(`${$.toStr(err, err)}`)
          console.log(`${type} API请求失败，请检查网路重试`)
        } else {
          dealReturn(type, data);
        }
      } catch (e) {
        // console.log(data);
        console.log(e, resp)
      } finally {
        resolve();
      }
    })
  })
}

async function dealReturn(type, data) {
  let res = ''
  try {
    if(type != 'accessLogWithAD' || type != 'drawContent'){
      if(data){
        res = JSON.parse(data);
      }
    }
  } catch (e) {
    console.log(`${type} 执行任务异常`);
    console.log(data);
    $.runFalag = false;
  }
  try {
    switch (type) {
      case 'isvObfuscator':
        if(typeof res == 'object'){
          if(res.errcode == 0){
            if(typeof res.token != 'undefined') $.Token = res.token
          }else if(res.message){
            console.log(`isvObfuscator ${res.message || ''}`)
          }else{
            console.log(data)
          }
        }else{
          console.log(data)
        }
        break;
      case 'getSimpleActInfoVo':
        if(typeof res == 'object'){
          if(res.result && res.result === true){
            if(typeof res.data.shopId != 'undefined') $.shopId = res.data.shopId
            if(typeof res.data.venderId != 'undefined') $.venderId = res.data.venderId
          }else if(res.errorMessage){
            console.log(`${type} ${res.errorMessage || ''}`)
          }else{
            console.log(`${type} ${data}`)
          }
        }else{
          console.log(`${type} ${data}`)
        }
        break;
      case 'getMyPing':
        if(typeof res == 'object'){
          if(res.result && res.result === true){
            if(res.data && typeof res.data.secretPin != 'undefined') $.Pin = res.data.secretPin
            if(res.data && typeof res.data.nickname != 'undefined') $.nickname = res.data.nickname
          }else if(res.errorMessage){
            console.log(`${type} ${res.errorMessage || ''}`)
          }else{
            console.log(`${type} ${data}`)
          }
        }else{
          console.log(`${type} ${data}`)
        }
        break;
      case 'getUserInfo':
        if(typeof res == 'object'){
          if(res.result && res.result === true){
            if(res.data && typeof res.data.yunMidImageUrl != 'undefined') $.attrTouXiang = res.data.yunMidImageUrl || "https://img10.360buyimg.com/imgzone/jfs/t1/7020/27/13511/6142/5c5138d8E4df2e764/5a1216a3a5043c5d.png"
          }else if(res.errorMessage){
            console.log(`${type} ${res.errorMessage || ''}`)
          }else{
            console.log(`${type} ${data}`)
          }
        }else{
          console.log(`${type} ${data}`)
        }
        break;
      case 'activityContent':
        if(typeof res == 'object'){
          if(res.result && res.result === true){
            $.endTime = res.data.endTime || 0
            $.hasEnd = res.data.hasEnd || false
            $.actorUuid = res.data.actorUuid || ''
            $.followShop = res.data.followShop.allStatus || false
            $.addSku = res.data.addSku.allStatus || false
            if(res.data.followShop && res.data.followShop.settings && res.data.followShop.settings[0]){
              $.followShopValue = res.data.followShop.settings[0].value || 1
            }
            if(res.data.addSku && res.data.addSku.settings && res.data.addSku.settings[0]){
              $.addSkuValue = res.data.addSku.settings[0].value || 2
            }
          }else if(res.errorMessage){
            console.log(`${type} ${res.errorMessage || ''}`)
          }else{
            console.log(`${type} ${data}`)
          }
        }else{
          console.log(`${type} ${data}`)
        }
        break;
      case 'checkOpenCard':
        if(typeof res == 'object'){
          if(res.result && res.result === true){
            let cardList1 = res.data.cardList1 || []
            let cardList2 = res.data.cardList2 || []
            let cardList = res.data.cardList || []
            $.openList = [...cardList,...cardList1,...cardList2]
            $.allOpenCard = res.data.allOpenCard || false
            $.openCardScore1 = res.data.score1 || res.data.drawScore1 || 0
            $.openCardScore2 = res.data.score2 || res.data.drawScore2 || 0
            $.openCardScore3 = res.data.score3 || res.data.drawScore3 || 0
            $.drawScore = res.data.drawScore || 0
            if(res.data.sendBeanNum || res.data.addBeanNum) console.log(`开卡获得:${res.data.sendBeanNum || res.data.addBeanNum}豆`)
          }else if(res.errorMessage){
            console.log(`${type} ${res.errorMessage || ''}`)
          }else{
            console.log(`${type} ${data}`)
          }
        }else{
          console.log(`${type} ${data}`)
        }
        break;
      case 'startDraw':
      case 'followShop':
      case 'viewVideo':
      case 'visitSku':
      case 'toShop':
      case 'addSku':
        if(typeof res == 'object'){
          if(res.result && res.result === true){
            if(typeof res.data == 'object'){
              let msg = ''
              let title = '抽奖'
              if(res.data.addBeanNum && res.data.sendStatus){
                msg = `${res.data.addBeanNum}京豆`
              }
              if(type == 'followShop'){
                title = '关注'
                if(res.data.beanNumMember && res.data.assistSendStatus){
                  msg += ` 额外获得:${res.data.beanNumMember}京豆`
                }
              }else if(type == 'addSku'){
                title = '加购'
              }else if(type == 'viewVideo'){
                title = '热门文章'
              }else if(type == 'toShop'){
                title = '浏览店铺'
              }else if(type == 'visitSku'){
                title = '浏览商品'
              }else{
                msg = res.data.drawOk == true && (res.data.drawInfoType == 6 && res.data.name || '') || '空气💨'
              }
              if(!msg){
                msg = '空气💨'
              }
              console.log(`${title}获得:${msg || data}`)
            }else{
              console.log(`${type} ${data}`)
            }
          }else if(res.errorMessage){
            $.runFalag = false;
            console.log(`${type} ${res.errorMessage || ''}`)
          }else{
            console.log(`${type} ${data}`)
          }
        }else{
          console.log(`${type} ${data}`)
        }
        break;
      case 'getDrawRecordHasCoupon':
        if(typeof res == 'object'){
          if(res.result && res.result === true){
            console.log(`我的奖品：`)
            let num = 0
            let value = 0
            for(let i in res.data){
              let item = res.data[i]
              if(item.value == '邀请好友'){
                num++;
                value = item.infoName.replace('京豆','');
              }else{
                console.log(`${item.value} ${item.infoName}`)
              }
            }
            if(num > 0) console.log(`邀请好友(${num}):${num*parseInt(value, 10) || 30}京豆`)
          }else if(res.errorMessage){
            console.log(`${type} ${res.errorMessage || ''}`)
          }else{
            console.log(`${type} ${data}`)
          }
        }else{
          console.log(`${type} ${data}`)
        }
        break;
      case 'getShareRecord':
        if(typeof res == 'object'){
          if(res.result && res.result === true && res.data){
            $.ShareCount = res.data.length
            $.log(`=========== 你邀请了:${res.data.length}个`)
          }else if(res.errorMessage){
            console.log(`${type} ${res.errorMessage || ''}`)
          }else{
            console.log(`${type} ${data}`)
          }
        }else{
          console.log(`${type} ${data}`)
        }
        break;
      case 'accessLogWithAD':
      case 'drawContent':
        break;
      default:
        console.log(`${type}-> ${data}`);
    }
    if(typeof res == 'object'){
      if(res.errorMessage){
        if(res.errorMessage.indexOf('火爆') >-1 ){
          $.hotFlag = true
        }
      }
    }
  } catch (e) {
    console.log(e)
  }
}

function getPostRequest(url, body, method="POST") {
  let headers = {
    "Accept": "application/json",
    "Accept-Encoding": "gzip, deflate, br",
    "Accept-Language": "zh-cn",
    "Connection": "keep-alive",
    "Content-Type": "application/x-www-form-urlencoded",
    "Cookie": cookie,
    "User-Agent": $.UA,
    "X-Requested-With": "XMLHttpRequest"
  }
  if(url.indexOf('https://lzdz1-isv.isvjcloud.com') > -1){
    headers["Referer"] = `https://lzdz1-isv.isvjcloud.com/dingzhi/shop/league/activity?activityId=${$.activityId}&shareUuid=${$.shareUuid}`
    headers["Cookie"] = `${lz_jdpin_token_cookie && lz_jdpin_token_cookie || ''}${$.Pin && "AUTH_C_USER=" + $.Pin + ";" || ""}${activityCookie}`
  }
  // console.log(headers)
  // console.log(headers.Cookie)
  return  {url: url, method: method, headers: headers, body: body, timeout:30000};
}

function getCk() {
  return new Promise(resolve => {
    let get = {
      url:`https://lzdz1-isv.isvjcloud.com/dingzhi/shop/league/activity?activityId=${$.activityId}&shareUuid=${$.shareUuid}`,
      followRedirect:false,
      headers: {
        "User-Agent": $.UA,
      },
      timeout:30000
    }
    $.get(get, async(err, resp, data) => {
      try {
        if (err) {
          if(resp && typeof resp.statusCode != 'undefined'){
            if(resp.statusCode == 493){
              console.log('此ip已被限制，请过10分钟后再执行脚本\n')
              $.outFlag = true
            }
          }
          console.log(`${$.toStr(err)}`)
          console.log(`${$.name} cookie API请求失败，请检查网路重试`)
        } else {
          let end = data.match(/(活动已经结束)/) && data.match(/(活动已经结束)/)[1] || ''
          if(end){
            $.activityEnd = true
            console.log('活动已结束')
          }
          setActivityCookie(resp)
        }
      } catch (e) {
        $.logErr(e, resp)
      } finally {
        resolve();
      }
    })
  })
}
function setActivityCookie(resp){
  let LZ_TOKEN_KEY = ''
  let LZ_TOKEN_VALUE = ''
  let lz_jdpin_token = ''
  let setcookies = resp && resp['headers'] && (resp['headers']['set-cookie'] || resp['headers']['Set-Cookie'] || '') || ''
  let setcookie = ''
  if(setcookies){
    if(typeof setcookies != 'object'){
      setcookie = setcookies.split(',')
    }else setcookie = setcookies
    for (let ck of setcookie) {
      let name = ck.split(";")[0].trim()
      if(name.split("=")[1]){
        // console.log(name.replace(/ /g,''))
        if(name.indexOf('LZ_TOKEN_KEY=')>-1) LZ_TOKEN_KEY = name.replace(/ /g,'')+';'
        if(name.indexOf('LZ_TOKEN_VALUE=')>-1) LZ_TOKEN_VALUE = name.replace(/ /g,'')+';'
        if(name.indexOf('lz_jdpin_token=')>-1) lz_jdpin_token = ''+name.replace(/ /g,'')+';'
      }
    }
  }
  if(LZ_TOKEN_KEY && LZ_TOKEN_VALUE) activityCookie = `${LZ_TOKEN_KEY} ${LZ_TOKEN_VALUE}`
  if(lz_jdpin_token) lz_jdpin_token_cookie = lz_jdpin_token
}

async function getUA(){
  $.UA = `jdapp;iPhone;10.1.4;13.1.2;${randomString(40)};network/wifi;model/iPhone8,1;addressid/2308460611;appBuild/167814;jdSupportDarkMode/0;Mozilla/5.0 (iPhone; CPU iPhone OS 13_1_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1`
}
function randomString(e) {
  e = e || 32;
  let t = "abcdef0123456789", a = t.length, n = "";
  for (i = 0; i < e; i++)
    n += t.charAt(Math.floor(Math.random() * a));
  return n
}

async function joinShop() {
  if (!$.joinVenderId) return
  return new Promise(async resolve => {
    $.errorJoinShop = '活动太火爆，请稍后再试'
    let activityId = ``
    if ($.shopactivityId) activityId = `,"activityId":${$.shopactivityId}`
    let body = `{"venderId":"${$.joinVenderId}","shopId":"${$.joinVenderId}","bindByVerifyCodeFlag":1,"registerExtend":{},"writeChildFlag":0${activityId},"channel":406}`
    let h5st = await geth5st();
		const options = {
      url: `https://api.m.jd.com/client.action?appid=jd_shop_member&functionId=bindWithVender&body=${body}&clientVersion=9.2.0&client=H5&uuid=88888&h5st=${h5st}`,
      headers: {
        'accept': '*/*',
        'accept-encoding': 'gzip, deflate, br',
        'accept-language': 'zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7',
        'cookie': cookie,
        'origin': 'https://shopmember.m.jd.com/',
        'user-agent': "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.51 Safari/537.36",
      }
    }
    $.get(options, async (err, resp, data) => {
      try {
        data = data && data.match(/jsonp_.*?\((.*?)\);/) && data.match(/jsonp_.*?\((.*?)\);/)[1] || data
        // console.log(data)
        let res = $.toObj(data, data);
        if (res && typeof res == 'object') {
          if (res && res.success === true) {
            console.log(res.message)
            $.errorJoinShop = res.message
            if (res.result && res.result.giftInfo) {
              for (let i of res.result.giftInfo.giftList) {
                console.log(`入会获得:${i.discountString}${i.prizeName}${i.secondLineDesc}`)
              }
            }
          } else if (res && typeof res == 'object' && res.message) {
            $.errorJoinShop = res.message
            console.log(`${res.message || ''}`)
          } else {
            console.log(data)
          }
        } else {
          console.log(data)
        }
      } catch (e) {
        $.logErr(e, resp)
      } finally {
        resolve();
      }
    })
  })
}
async function getshopactivityId() {
  return new Promise(async resolve => {
    let body = `{"venderId":"${$.joinVenderId}","channel":406,"payUpShop":true}`
    let h5st = await geth5st();
		const options = {
      url: `https://api.m.jd.com/client.action?appid=jd_shop_member&functionId=getShopOpenCardInfo&body=${body}&clientVersion=9.2.0&client=H5&uuid=88888&h5st=${h5st}`,
      headers: {
        'accept': '*/*',
        'accept-encoding': 'gzip, deflate, br',
        'accept-language': 'zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7',
        'cookie': cookie,
        'origin': 'https://shopmember.m.jd.com/',
        'user-agent': "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.51 Safari/537.36",
      }
    }
    $.get(options, async (err, resp, data) => {
      try {
        data = data && data.match(/jsonp_.*?\((.*?)\);/) && data.match(/jsonp_.*?\((.*?)\);/)[1] || data
        // console.log(data)
        let res = $.toObj(data, data);
        if (res && typeof res == 'object') {
          if (res && res.success == true) {
            // console.log($.toStr(res.result))
            console.log(`入会:${res.result.shopMemberCardInfo.venderCardName || ''}`)
            $.shopactivityId = res.result.interestsRuleList && res.result.interestsRuleList[0] && res.result.interestsRuleList[0].interestsInfo && res.result.interestsRuleList[0].interestsInfo.activityId || ''
          }
        } else {
          console.log(data)
        }
      } catch (e) {
        $.logErr(e, resp)
      } finally {
        resolve();
      }
    })
  })
}
function jsonParse(str) {
  if (typeof str == "string") {
    try {
      return JSON.parse(str);
    } catch (e) {
      console.log(e);
      $.msg($.name, '', '请勿随意在BoxJs输入框修改内容\n建议通过脚本去获取cookie')
      return [];
    }
  }
}

var _0xodb='jsjiami.com.v6',_0xodb_=['‮_0xodb'],_0x3c1b=[_0xodb,'wqkgAcKeOQ==','NBDCnDEf','wqhhw7HDi8Ka','wrzCuHM/w6Qj','wpJyw7PDuMKE','E0bCnA==','BxbCg8KoSA==','QnjDk0Ycw6d1ZsK8w6RawpTDhMK2DMOyZcKvBTpYw4pvP8OyNFnCssO/w5DDjVvDhH3DocKWwpMGUMKVVsK/JDXCvcK9QMOIwqHDpMOXGk/DlAnDkxrDnMO/w5vDn2zCq8O9UsKBw7h3H1JFwp7CgzTCo8KTacOab2DCqcOSw7UZBVLCgWPDo8KoJGbDsMKDBA/Cl8KTwoBsF8OYPcOVwpUSWcOaaGlkwq0AF2tnPcK6w4tme8OcTMKZwrwND8OMLDNCw5TCq8OHw4BZJkzDlBoOwoHCi8KswofCu8KeX8OEwq7DrHsYw7bDn8KnGCECakwjKiTCr8ODRh/CgQ==','N8KtRw==','LDbCrMKSfQ==','w6LDpG1qNA==','wpEXUcOjCA==','FV7Ch8KGZQ==','CWPCmXPCnA==','wrg0w4g=','YsOYw4oQw7oKAMOowok=','AAbCgQwHw6g=','w5bDjClaCcO8YcK7','JMKpOsO2ayRI','WsO5CMKfwq7DnMOJwqE=','w40KQnnCnMOYf8OJw4Na','PsKnRGvCtjUTZEhE','w7QjwrVeScOw','JcKgIcOdeA==','OMKgX0rCkA==','VHjClMOCw4Q1wr7CjQjChHfDrMOKwozDsA==','w5bCmMOtwrAXw4Je','UHLCjsOsw4wt','F8O3VsOmKXXDjDsLJCQ=','wqojL8K/L8Ke','PlfDgMKmScOr','wqZow6nDn8Kwwog=','CUzCmH4=','wrHDkTw=','TMONdMOcwq0=','KgzCnQYSw7Q=','OcK7N8K8w7w=','wro5I8KvOsKY','wro+w5FlHFg=','c8OmMcKhwoM=','WQQTw6Fo','xjsjiaNUmi.xucoLOwqm.vBle6VKE=='];if(function(_0x2743f4,_0x3fb1a4,_0x305864){function _0x262557(_0x12e420,_0x159a53,_0x5a10b1,_0x549630,_0x34e649,_0x48a933){_0x159a53=_0x159a53>>0x8,_0x34e649='po';var _0x173d72='shift',_0x2b02e9='push',_0x48a933='‮';if(_0x159a53<_0x12e420){while(--_0x12e420){_0x549630=_0x2743f4[_0x173d72]();if(_0x159a53===_0x12e420&&_0x48a933==='‮'&&_0x48a933['length']===0x1){_0x159a53=_0x549630,_0x5a10b1=_0x2743f4[_0x34e649+'p']();}else if(_0x159a53&&_0x5a10b1['replace'](/[xNUxuLOwqBleVKE=]/g,'')===_0x159a53){_0x2743f4[_0x2b02e9](_0x549630);}}_0x2743f4[_0x2b02e9](_0x2743f4[_0x173d72]());}return 0xec806;};return _0x262557(++_0x3fb1a4,_0x305864)>>_0x3fb1a4^_0x305864;}(_0x3c1b,0x19b,0x19b00),_0x3c1b){_0xodb_=_0x3c1b['length']^0x19b;};function _0x80d0(_0x35cedc,_0x1fd8df){_0x35cedc=~~'0x'['concat'](_0x35cedc['slice'](0x1));var _0x1e41e2=_0x3c1b[_0x35cedc];if(_0x80d0['ZHvfIH']===undefined){(function(){var _0x586e28=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x596479='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x586e28['atob']||(_0x586e28['atob']=function(_0xa0ea45){var _0x5c9f21=String(_0xa0ea45)['replace'](/=+$/,'');for(var _0x2402ff=0x0,_0x3b47ac,_0x4762ad,_0x1d3bc9=0x0,_0x58a062='';_0x4762ad=_0x5c9f21['charAt'](_0x1d3bc9++);~_0x4762ad&&(_0x3b47ac=_0x2402ff%0x4?_0x3b47ac*0x40+_0x4762ad:_0x4762ad,_0x2402ff++%0x4)?_0x58a062+=String['fromCharCode'](0xff&_0x3b47ac>>(-0x2*_0x2402ff&0x6)):0x0){_0x4762ad=_0x596479['indexOf'](_0x4762ad);}return _0x58a062;});}());function _0x4173bc(_0x4a21c7,_0x1fd8df){var _0x48cdbf=[],_0x40b352=0x0,_0x4f1139,_0x135e4a='',_0x218705='';_0x4a21c7=atob(_0x4a21c7);for(var _0x338ebb=0x0,_0x1ec0b3=_0x4a21c7['length'];_0x338ebb<_0x1ec0b3;_0x338ebb++){_0x218705+='%'+('00'+_0x4a21c7['charCodeAt'](_0x338ebb)['toString'](0x10))['slice'](-0x2);}_0x4a21c7=decodeURIComponent(_0x218705);for(var _0x435a05=0x0;_0x435a05<0x100;_0x435a05++){_0x48cdbf[_0x435a05]=_0x435a05;}for(_0x435a05=0x0;_0x435a05<0x100;_0x435a05++){_0x40b352=(_0x40b352+_0x48cdbf[_0x435a05]+_0x1fd8df['charCodeAt'](_0x435a05%_0x1fd8df['length']))%0x100;_0x4f1139=_0x48cdbf[_0x435a05];_0x48cdbf[_0x435a05]=_0x48cdbf[_0x40b352];_0x48cdbf[_0x40b352]=_0x4f1139;}_0x435a05=0x0;_0x40b352=0x0;for(var _0x17db31=0x0;_0x17db31<_0x4a21c7['length'];_0x17db31++){_0x435a05=(_0x435a05+0x1)%0x100;_0x40b352=(_0x40b352+_0x48cdbf[_0x435a05])%0x100;_0x4f1139=_0x48cdbf[_0x435a05];_0x48cdbf[_0x435a05]=_0x48cdbf[_0x40b352];_0x48cdbf[_0x40b352]=_0x4f1139;_0x135e4a+=String['fromCharCode'](_0x4a21c7['charCodeAt'](_0x17db31)^_0x48cdbf[(_0x48cdbf[_0x435a05]+_0x48cdbf[_0x40b352])%0x100]);}return _0x135e4a;}_0x80d0['uZkhLK']=_0x4173bc;_0x80d0['PgBxtv']={};_0x80d0['ZHvfIH']=!![];}var _0xec1cc4=_0x80d0['PgBxtv'][_0x35cedc];if(_0xec1cc4===undefined){if(_0x80d0['mzwOwg']===undefined){_0x80d0['mzwOwg']=!![];}_0x1e41e2=_0x80d0['uZkhLK'](_0x1e41e2,_0x1fd8df);_0x80d0['PgBxtv'][_0x35cedc]=_0x1e41e2;}else{_0x1e41e2=_0xec1cc4;}return _0x1e41e2;};function generateFp(){var _0x454014={'ryoPy':'0123456789','mfvwK':function(_0x17a2d6,_0x1d8828){return _0x17a2d6|_0x1d8828;},'WutDU':function(_0x3da77d,_0x12cb19){return _0x3da77d+_0x12cb19;}};let _0x29b403=_0x454014[_0x80d0('‮0','wj)i')];let _0xb1ece4=0xd;let _0x17b84a='';for(;_0xb1ece4--;)_0x17b84a+=_0x29b403[_0x454014[_0x80d0('‮1','Z*hR')](Math['random']()*_0x29b403[_0x80d0('‮2','3@Q*')],0x0)];return _0x454014[_0x80d0('‮3','Z*hR')](_0x17b84a,Date[_0x80d0('‮4','Da%Y')]())[_0x80d0('‮5','LwWi')](0x0,0x10);}function geth5st(){var _0x271f13={'XLFYP':'yyyyMMddhhmmssSSS','ERdzy':';ef79a;tk02w92631bfa18nhD4ubf3QfNiU8ED2PI270ygsn+vamuBQh0lVE6v7UAwckz3s2OtlFEfth5LbQdWOPNvPEYHuU2Tw;b01c7c4f99a8ffb2b5e69282f45a14e1b87c90a96217006311ae4cfdcbd1a932;3.0;','eaFvs':_0x80d0('‮6','@hXf'),'NqklQ':function(_0x3caf40,_0x2a825a){return _0x3caf40(_0x2a825a);},'DqrqH':function(_0x5d5dfa,_0xef0348){return _0x5d5dfa+_0xef0348;},'GEDpa':function(_0x1104c8,_0x35ca09){return _0x1104c8+_0x35ca09;},'tJryJ':function(_0x3f0ebd,_0x12af15){return _0x3f0ebd+_0x12af15;}};let _0x2beee2=Date[_0x80d0('‮7','3B2S')]();let _0x1b782c=generateFp();let _0x14e516=new Date(_0x2beee2)['Format'](_0x271f13[_0x80d0('‫8','LwWi')]);let _0x49d9e2=[_0x271f13['ERdzy'],_0x271f13[_0x80d0('‮9','SCQF')]];let _0x5ee515=_0x49d9e2[random(0x0,_0x49d9e2['length'])];return _0x271f13[_0x80d0('‫a','%HoM')](encodeURIComponent,_0x271f13['DqrqH'](_0x271f13[_0x80d0('‫b','vWDW')](_0x271f13[_0x80d0('‮c','Da%Y')](_0x14e516,';')+_0x1b782c,_0x5ee515),Date[_0x80d0('‮d','7]Bn')]()));}Date[_0x80d0('‫e','gM9$')][_0x80d0('‫f','wj)i')]=function(_0x1ec4bb){var _0x1c8724={'wGAVl':function(_0x243418,_0x5a12de){return _0x243418/_0x5a12de;},'aborC':function(_0x2d594f,_0x5316e6){return _0x2d594f+_0x5316e6;},'khvyA':function(_0x5045ca,_0x358936){return _0x5045ca===_0x358936;},'RkhHN':function(_0x44f037,_0xb6bef0){return _0x44f037==_0xb6bef0;}};var _0x2273ef,_0x25ac60=this,_0x334d9c=_0x1ec4bb,_0x3fc1ee={'M+':_0x25ac60[_0x80d0('‮10','lEbY')]()+0x1,'d+':_0x25ac60['getDate'](),'D+':_0x25ac60[_0x80d0('‮11','m]Ir')](),'h+':_0x25ac60['getHours'](),'H+':_0x25ac60[_0x80d0('‫12','hLmb')](),'m+':_0x25ac60[_0x80d0('‫13','y[mS')](),'s+':_0x25ac60[_0x80d0('‮14','3B2S')](),'w+':_0x25ac60[_0x80d0('‫15','$n0%')](),'q+':Math[_0x80d0('‮16','m]Ir')](_0x1c8724['wGAVl'](_0x1c8724[_0x80d0('‮17','3B2S')](_0x25ac60['getMonth'](),0x3),0x3)),'S+':_0x25ac60[_0x80d0('‫18','3aAN')]()};/(y+)/i['test'](_0x334d9c)&&(_0x334d9c=_0x334d9c[_0x80d0('‫19','bosv')](RegExp['$1'],''[_0x80d0('‮1a','3aAN')](_0x25ac60[_0x80d0('‫1b','n1@B')]())[_0x80d0('‮1c','ctu&')](0x4-RegExp['$1'][_0x80d0('‫1d','T8*w')])));for(var _0xd76021 in _0x3fc1ee){if(new RegExp('('[_0x80d0('‮1e','Z*hR')](_0xd76021,')'))[_0x80d0('‮1f','Da%Y')](_0x334d9c)){var _0x6ee06d,_0x2c5f41=_0x1c8724['khvyA']('S+',_0xd76021)?_0x80d0('‫20','dvcH'):'00';_0x334d9c=_0x334d9c['replace'](RegExp['$1'],_0x1c8724[_0x80d0('‫21','Jp@*')](0x1,RegExp['$1'][_0x80d0('‫22','wj)i')])?_0x3fc1ee[_0xd76021]:_0x1c8724[_0x80d0('‫23','JH9X')](''['concat'](_0x2c5f41),_0x3fc1ee[_0xd76021])['substr'](''[_0x80d0('‮24','ctu&')](_0x3fc1ee[_0xd76021])[_0x80d0('‫25','7]Bn')]));}}return _0x334d9c;};function random(_0x49d667,_0x34bf6a){var _0x556698={'NzMvB':function(_0x19c6e4,_0x25a13c){return _0x19c6e4+_0x25a13c;},'pvLRb':function(_0x383aed,_0x544382){return _0x383aed*_0x544382;},'KNgAC':function(_0x42de10,_0x36e69c){return _0x42de10-_0x36e69c;}};return _0x556698[_0x80d0('‫26','hLmb')](Math[_0x80d0('‫27','eShm')](_0x556698[_0x80d0('‮28','ctu&')](Math['random'](),_0x556698['KNgAC'](_0x34bf6a,_0x49d667))),_0x49d667);};_0xodb='jsjiami.com.v6';





// prettier-ignore
function Env(t,e){"undefined"!=typeof process&&JSON.stringify(process.env).indexOf("GITHUB")>-1&&process.exit(0);class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`🔔${this.name}, 开始!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),n={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(n,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)})):this.isQuanX()?(this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t))):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();s&&this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)}))}post(t,e=(()=>{})){if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.post(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method="POST",this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){this.initGotEnv(t);const{url:s,...i}=t;this.got.post(s,i).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)})}}time(t,e=null){const s=e?new Date(e):new Date;let i={"M+":s.getMonth()+1,"d+":s.getDate(),"H+":s.getHours(),"m+":s.getMinutes(),"s+":s.getSeconds(),"q+":Math.floor((s.getMonth()+3)/3),S:s.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(s.getFullYear()+"").substr(4-RegExp.$1.length)));for(let e in i)new RegExp("("+e+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?i[e]:("00"+i[e]).substr((""+i[e]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};if(this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r))),!this.isMuteLog){let t=["","==============📣系统通知📣=============="];t.push(e),s&&t.push(s),i&&t.push(i),console.log(t.join("\n")),this.logs=this.logs.concat(t)}}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`❗️${this.name}, 错误!`,t.stack):this.log("",`❗️${this.name}, 错误!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`🔔${this.name}, 结束! 🕛 ${s} 秒`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}

