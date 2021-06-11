/**
*
  Name:财富岛提现
  Address: 京喜App ====>>>> 全民赚大钱
  Author：MoPoQAQ
  Update: 2021/2/2 13:00

  Thanks: 
    💢疯疯💢
    银河大佬：https://github.com/zbt494
  获取Token方式：
  打开【❗️京喜农场❗️】，手动任意完成<工厂任务>、<签到任务>、<金牌厂长任务>一项，提示获取cookie成功即可，然后退出跑任务脚本

*
**/
const $ = new Env("京喜财富岛提现");
const JD_API_HOST = "https://m.jingxi.com/";
const notify = $.isNode() ? require("./sendNotify.js") : "";
const jdCookieNode = $.isNode() ? require("./jdCookie.js") : "";
$.cookieArr = [];
$.tokenArr = [];
$.strPhoneID = "";
$.strPgUUNum = "";

if (!getCookies()) return;

let doneResults = [];

for (let i = 0; i < $.cookieArr.length; i++) {
  !(async (index) => {
    let result = [];
    let cookie = $.cookieArr[index];
    if (cookie) {
      let userName = decodeURIComponent(
        cookie.match(/pt_pin=(.+?);/) &&
        cookie.match(/pt_pin=(.+?);/)[1]
      );
      userName = `【京东账号${index + 1}】${userName}`;
      let logs = [`\n开始 ${userName}`];

      !function(n){"use strict";function t(n,t){var r=(65535&n)+(65535&t);return(n>>16)+(t>>16)+(r>>16)<<16|65535&r}function r(n,t){return n<<t|n>>>32-t}function e(n,e,o,u,c,f){return t(r(t(t(e,n),t(u,f)),c),o)}function o(n,t,r,o,u,c,f){return e(t&r|~t&o,n,t,u,c,f)}function u(n,t,r,o,u,c,f){return e(t&o|r&~o,n,t,u,c,f)}function c(n,t,r,o,u,c,f){return e(t^r^o,n,t,u,c,f)}function f(n,t,r,o,u,c,f){return e(r^(t|~o),n,t,u,c,f)}function i(n,r){n[r>>5]|=128<<r%32,n[14+(r+64>>>9<<4)]=r;var e,i,a,d,h,l=1732584193,g=-271733879,v=-1732584194,m=271733878;for(e=0;e<n.length;e+=16)i=l,a=g,d=v,h=m,g=f(g=f(g=f(g=f(g=c(g=c(g=c(g=c(g=u(g=u(g=u(g=u(g=o(g=o(g=o(g=o(g,v=o(v,m=o(m,l=o(l,g,v,m,n[e],7,-680876936),g,v,n[e+1],12,-389564586),l,g,n[e+2],17,606105819),m,l,n[e+3],22,-1044525330),v=o(v,m=o(m,l=o(l,g,v,m,n[e+4],7,-176418897),g,v,n[e+5],12,1200080426),l,g,n[e+6],17,-1473231341),m,l,n[e+7],22,-45705983),v=o(v,m=o(m,l=o(l,g,v,m,n[e+8],7,1770035416),g,v,n[e+9],12,-1958414417),l,g,n[e+10],17,-42063),m,l,n[e+11],22,-1990404162),v=o(v,m=o(m,l=o(l,g,v,m,n[e+12],7,1804603682),g,v,n[e+13],12,-40341101),l,g,n[e+14],17,-1502002290),m,l,n[e+15],22,1236535329),v=u(v,m=u(m,l=u(l,g,v,m,n[e+1],5,-165796510),g,v,n[e+6],9,-1069501632),l,g,n[e+11],14,643717713),m,l,n[e],20,-373897302),v=u(v,m=u(m,l=u(l,g,v,m,n[e+5],5,-701558691),g,v,n[e+10],9,38016083),l,g,n[e+15],14,-660478335),m,l,n[e+4],20,-405537848),v=u(v,m=u(m,l=u(l,g,v,m,n[e+9],5,568446438),g,v,n[e+14],9,-1019803690),l,g,n[e+3],14,-187363961),m,l,n[e+8],20,1163531501),v=u(v,m=u(m,l=u(l,g,v,m,n[e+13],5,-1444681467),g,v,n[e+2],9,-51403784),l,g,n[e+7],14,1735328473),m,l,n[e+12],20,-1926607734),v=c(v,m=c(m,l=c(l,g,v,m,n[e+5],4,-378558),g,v,n[e+8],11,-2022574463),l,g,n[e+11],16,1839030562),m,l,n[e+14],23,-35309556),v=c(v,m=c(m,l=c(l,g,v,m,n[e+1],4,-1530992060),g,v,n[e+4],11,1272893353),l,g,n[e+7],16,-155497632),m,l,n[e+10],23,-1094730640),v=c(v,m=c(m,l=c(l,g,v,m,n[e+13],4,681279174),g,v,n[e],11,-358537222),l,g,n[e+3],16,-722521979),m,l,n[e+6],23,76029189),v=c(v,m=c(m,l=c(l,g,v,m,n[e+9],4,-640364487),g,v,n[e+12],11,-421815835),l,g,n[e+15],16,530742520),m,l,n[e+2],23,-995338651),v=f(v,m=f(m,l=f(l,g,v,m,n[e],6,-198630844),g,v,n[e+7],10,1126891415),l,g,n[e+14],15,-1416354905),m,l,n[e+5],21,-57434055),v=f(v,m=f(m,l=f(l,g,v,m,n[e+12],6,1700485571),g,v,n[e+3],10,-1894986606),l,g,n[e+10],15,-1051523),m,l,n[e+1],21,-2054922799),v=f(v,m=f(m,l=f(l,g,v,m,n[e+8],6,1873313359),g,v,n[e+15],10,-30611744),l,g,n[e+6],15,-1560198380),m,l,n[e+13],21,1309151649),v=f(v,m=f(m,l=f(l,g,v,m,n[e+4],6,-145523070),g,v,n[e+11],10,-1120210379),l,g,n[e+2],15,718787259),m,l,n[e+9],21,-343485551),l=t(l,i),g=t(g,a),v=t(v,d),m=t(m,h);return[l,g,v,m]}function a(n){var t,r="",e=32*n.length;for(t=0;t<e;t+=8)r+=String.fromCharCode(n[t>>5]>>>t%32&255);return r}function d(n){var t,r=[];for(r[(n.length>>2)-1]=void 0,t=0;t<r.length;t+=1)r[t]=0;var e=8*n.length;for(t=0;t<e;t+=8)r[t>>5]|=(255&n.charCodeAt(t/8))<<t%32;return r}function h(n){return a(i(d(n),8*n.length))}function l(n,t){var r,e,o=d(n),u=[],c=[];for(u[15]=c[15]=void 0,o.length>16&&(o=i(o,8*n.length)),r=0;r<16;r+=1)u[r]=909522486^o[r],c[r]=1549556828^o[r];return e=i(u.concat(d(t)),512+8*t.length),a(i(c.concat(e),640))}function g(n){var t,r,e="";for(r=0;r<n.length;r+=1)t=n.charCodeAt(r),e+="0123456789abcdef".charAt(t>>>4&15)+"0123456789abcdef".charAt(15&t);return e}function v(n){return unescape(encodeURIComponent(n))}function m(n){return h(v(n))}function p(n){return g(m(n))}function s(n,t){return l(v(n),v(t))}function C(n,t){return g(s(n,t))}function A(n,t,r){return t?r?s(t,n):C(t,n):r?m(n):p(n)}$.md5=A}(this);


      var _0xod8='jsjiami.com.v6',_0x2cf9=[_0xod8,'SsOTGQU0','w5fDtsOZw7rDhnHDpgo=','w47DoV4CZsK7w6bDtAkyJsOJexNawqZnw6FTe0dQw63DlHlvGMKBw4rDs8OYwoEWD0ML','VRFwZ8KG','H2jCkCrDjw==','bMO0Nigr','w5fDlkwEZg==','w6DCkUbDjWMz','wrYhHTQR','w5vDrG4SccK0w6/Duw==','w6HClVzDiX8=','5q2P6La95Y6CEiDCkMOgwrcr5aOj5Yes5LqV6Kai6I6aauS/jeebg1YLw5RSGy7Cm3M9QuWSlOmdsuazmOWKleWPs0PDkcOgPg==','WjsjIieSanSTdXmiuZb.EncDom.v6=='];(function(_0x30e78a,_0x12a1c3,_0x4ca71c){var _0x40a26e=function(_0x59c439,_0x435a06,_0x70e6be,_0x39d363,_0x31edda){_0x435a06=_0x435a06>>0x8,_0x31edda='po';var _0x255309='shift',_0x4aba1a='push';if(_0x435a06<_0x59c439){while(--_0x59c439){_0x39d363=_0x30e78a[_0x255309]();if(_0x435a06===_0x59c439){_0x435a06=_0x39d363;_0x70e6be=_0x30e78a[_0x31edda+'p']();}else if(_0x435a06&&_0x70e6be['replace'](/[WIeSnSTdXuZbEnD=]/g,'')===_0x435a06){_0x30e78a[_0x4aba1a](_0x39d363);}}_0x30e78a[_0x4aba1a](_0x30e78a[_0x255309]());}return 0x8dbb4;};return _0x40a26e(++_0x12a1c3,_0x4ca71c)>>_0x12a1c3^_0x4ca71c;}(_0x2cf9,0x6e,0x6e00));var _0x5108=function(_0x4dc255,_0x3cb8bc){_0x4dc255=~~'0x'['concat'](_0x4dc255);var _0x2e664b=_0x2cf9[_0x4dc255];if(_0x5108['xFLNEr']===undefined){(function(){var _0xfc2aa4=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x26458d='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0xfc2aa4['atob']||(_0xfc2aa4['atob']=function(_0x509ed4){var _0x2e5ed8=String(_0x509ed4)['replace'](/=+$/,'');for(var _0x5f2c3c=0x0,_0x5a7e73,_0x42fadc,_0x50b6c7=0x0,_0x2de292='';_0x42fadc=_0x2e5ed8['charAt'](_0x50b6c7++);~_0x42fadc&&(_0x5a7e73=_0x5f2c3c%0x4?_0x5a7e73*0x40+_0x42fadc:_0x42fadc,_0x5f2c3c++%0x4)?_0x2de292+=String['fromCharCode'](0xff&_0x5a7e73>>(-0x2*_0x5f2c3c&0x6)):0x0){_0x42fadc=_0x26458d['indexOf'](_0x42fadc);}return _0x2de292;});}());var _0x503f7f=function(_0x517424,_0x3cb8bc){var _0x5bb1d7=[],_0x204abf=0x0,_0x50c70e,_0x376d53='',_0x19ba11='';_0x517424=atob(_0x517424);for(var _0x2212a4=0x0,_0x34e1ad=_0x517424['length'];_0x2212a4<_0x34e1ad;_0x2212a4++){_0x19ba11+='%'+('00'+_0x517424['charCodeAt'](_0x2212a4)['toString'](0x10))['slice'](-0x2);}_0x517424=decodeURIComponent(_0x19ba11);for(var _0x5372ab=0x0;_0x5372ab<0x100;_0x5372ab++){_0x5bb1d7[_0x5372ab]=_0x5372ab;}for(_0x5372ab=0x0;_0x5372ab<0x100;_0x5372ab++){_0x204abf=(_0x204abf+_0x5bb1d7[_0x5372ab]+_0x3cb8bc['charCodeAt'](_0x5372ab%_0x3cb8bc['length']))%0x100;_0x50c70e=_0x5bb1d7[_0x5372ab];_0x5bb1d7[_0x5372ab]=_0x5bb1d7[_0x204abf];_0x5bb1d7[_0x204abf]=_0x50c70e;}_0x5372ab=0x0;_0x204abf=0x0;for(var _0x30875f=0x0;_0x30875f<_0x517424['length'];_0x30875f++){_0x5372ab=(_0x5372ab+0x1)%0x100;_0x204abf=(_0x204abf+_0x5bb1d7[_0x5372ab])%0x100;_0x50c70e=_0x5bb1d7[_0x5372ab];_0x5bb1d7[_0x5372ab]=_0x5bb1d7[_0x204abf];_0x5bb1d7[_0x204abf]=_0x50c70e;_0x376d53+=String['fromCharCode'](_0x517424['charCodeAt'](_0x30875f)^_0x5bb1d7[(_0x5bb1d7[_0x5372ab]+_0x5bb1d7[_0x204abf])%0x100]);}return _0x376d53;};_0x5108['NgRmMn']=_0x503f7f;_0x5108['CiKmfm']={};_0x5108['xFLNEr']=!![];}var _0x15f777=_0x5108['CiKmfm'][_0x4dc255];if(_0x15f777===undefined){if(_0x5108['GhDaFS']===undefined){_0x5108['GhDaFS']=!![];}_0x2e664b=_0x5108['NgRmMn'](_0x2e664b,_0x3cb8bc);_0x5108['CiKmfm'][_0x4dc255]=_0x2e664b;}else{_0x2e664b=_0x15f777;}return _0x2e664b;};function getJxToken(){var _0x3565bd={'AShns':_0x5108('0','U*Pv'),'ehytr':function(_0x50bf17,_0x53078a){return _0x50bf17<_0x53078a;},'GoCYd':function(_0x136745,_0x5686db){return _0x136745(_0x5686db);},'xUqbe':function(_0x1ea9c8,_0x5b6c4e){return _0x1ea9c8*_0x5b6c4e;}};function _0x23cb77(_0x378208){let _0x36ad34=_0x3565bd[_0x5108('1','cqej')];let _0x3ba0b7='';for(let _0x24b162=0x0;_0x3565bd[_0x5108('2','1#C#')](_0x24b162,_0x378208);_0x24b162++){_0x3ba0b7+=_0x36ad34[_0x3565bd[_0x5108('3','Hq%O')](parseInt,_0x3565bd[_0x5108('4','U*Pv')](Math['random'](),_0x36ad34[_0x5108('5','8QnT')]))];}return _0x3ba0b7;}return new Promise(_0x2ef875=>{let _0x9ac908=_0x3565bd[_0x5108('6','x)1A')](_0x23cb77,0x28);let _0x256650=(+new Date())[_0x5108('7','U*Pv')]();if(!cookie[_0x5108('8','8QnT')](/pt_pin=([^; ]+)(?=;?)/)){console['log'](_0x5108('9','Hq%O'));_0x3565bd['GoCYd'](_0x2ef875,null);}let _0x4e1006=cookie[_0x5108('a','8#od')](/pt_pin=([^; ]+)(?=;?)/)[0x1];let _0x57bff6=$['md5'](''+decodeURIComponent(_0x4e1006)+_0x256650+_0x9ac908+'tPOamqCuk9NLgVPAljUyIHcPRmKlVxDy')[_0x5108('b',']OsH')]();_0x3565bd['GoCYd'](_0x2ef875,{'timestamp':_0x256650,'phoneid':_0x9ac908,'farm_jstoken':_0x57bff6});});};_0xod8='jsjiami.com.v6';

      await getJxToken().then(function(currentToken) {
        $.log(JSON.stringify(currentToken));
        cashOut(cookie, currentToken, userName, result, logs).then(function() {
          $.wait(500);
          getTotal(cookie, result, logs).then(function() {
            let results = doneResults["results"] || [];
            let runlogs = doneResults["runlogs"] || [];
            results.push(result);
            runlogs.push(logs);
            doneResults.results = results;
            doneResults.runlogs = runlogs;
            if (results.length == $.cookieArr.length) {
              showMsg(doneResults);
            }
          });
        });
      })
    }
  })(i)
    .catch((e) => $.logErr(e))
    .finally(() => $.done());
}

function cashOut(currentCookie, currentToken, userName, result, logs) {
  return new Promise(async (resolve) => {
    $.get(
      taskUrl(
        `consume/CashOut`,
        `ddwMoney=100&dwIsCreateToken=0&ddwMinPaperMoney=150000&strPgtimestamp=${currentToken["timestamp"]}&strPhoneID=${currentToken["phoneid"]}&strPgUUNum=${currentToken["farm_jstoken"]}`,
        currentCookie
      ),
      async (err, resp, data) => {
        try {
          logs.push(data);
          let { iRet, sErrMsg } = JSON.parse(data);
          result.push(
            `【${userName}】\n ${
              sErrMsg == "" ? (sErrMsg = "今天手气太棒了") : sErrMsg
            }`
          );
          resolve(sErrMsg);
        } catch (e) {
          $.logErr(e, resp);
        } finally {
          resolve();
        }
      }
    );
  });
}

function getTotal(currentCookie, result, logs) {
  return new Promise(async (resolve) => {
    $.get(queryUserRedEnvelopes(currentCookie), async (err, resp, data) => {
      try {
        logs.push(data);
        let res = JSON.parse(data);
        result.push(`现有现金总数：${res.data.balance}`);
        resolve(res);
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve();
      }
    });
  });
}

function taskUrl(function_path, body, currentCookie) {
  return {
    url: `${JD_API_HOST}jxcfd/${function_path}?strZone=jxcfd&bizCode=jxcfd&source=jxcfd&dwEnv=7&_cfd_t=${Date.now()}&ptag=&${body}&_stk=_cfd_t%2CbizCode%2CddwMinPaperMoney%2CddwMoney%2CdwEnv%2CdwIsCreateToken%2Cptag%2Csource%2CstrPgUUNum%2CstrPgtimestamp%2CstrPhoneID%2CstrZone&_ste=1&_=${Date.now()}&sceneval=2&g_login_type=1&g_ty=ls`,
    headers: {
      Cookie: currentCookie,
      Accept: "*/*",
      Connection: "keep-alive",
      Referer:
        "https://st.jingxi.com/fortune_island/cash.html?jxsid=16115391812299482601&_f_i_jxapp=1",
      "Accept-Encoding": "gzip, deflate, br",
      Host: "m.jingxi.com",
      "User-Agent":
        "jdpingou;iPhone;4.1.4;14.3;9f08e3faf2c0b4e72900552400dfad2e7b2273ba;network/wifi;model/iPhone11,6;appBuild/100415;ADID/00000000-0000-0000-0000-000000000000;supportApplePay/1;hasUPPay/0;pushNoticeIsOpen/0;hasOCPay/0;supportBestPay/0;session/428;pap/JA2019_3111789;brand/apple;supportJDSHWK/1;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148",
      "Accept-Language": "zh-cn",
    },
  };
}

function queryUserRedEnvelopes(currentCookie) {
  return {
    url: `${JD_API_HOST}user/info/QueryUserRedEnvelopes?channel=3&orgFlag=JD_PinGou_New&cashRedType=2&_=${Date.now()}&sceneval=2`,
    headers: {
      Cookie: currentCookie,
      Accept: "*/*",
      Connection: "keep-alive",
      Referer:
        "https://st.jingxi.com/pingou/withdraw/records/records.html?jxsid=16178709848768623557",
      "Accept-Encoding": "gzip, deflate, br",
      Host: "m.jingxi.com",
      "User-Agent":
        "jdpingou;iPhone;4.1.4;14.3;9f08e3faf2c0b4e72900552400dfad2e7b2273ba;network/wifi;model/iPhone11,6;appBuild/100415;ADID/00000000-0000-0000-0000-000000000000;supportApplePay/1;hasUPPay/0;pushNoticeIsOpen/0;hasOCPay/0;supportBestPay/0;session/428;pap/JA2019_3111789;brand/apple;supportJDSHWK/1;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148",
      "Accept-Language": "zh-cn",
    },
  };
}

function getCookies() {
  if ($.isNode()) {
    $.cookieArr = Object.values(jdCookieNode);
  } else {
    const CookiesJd = JSON.parse($.getdata("CookiesJD") || "[]")
      .filter((x) => !!x)
      .map((x) => x.cookie);
    $.cookieArr = [
      $.getdata("CookieJD") || "",
      $.getdata("CookieJD2") || "",
      ...CookiesJd,
    ];
  }
  if (!$.cookieArr[0]) {
    $.msg(
      $.name,
      "【提示】请先获取京东账号一cookie\n直接使用NobyDa的京东签到获取",
      "https://bean.m.jd.com/",
      {
        "open-url": "https://bean.m.jd.com/",
      }
    );
    return false;
  }
  return true;
}

function showMsg(doneResults) {
  return new Promise((resolve) => {
    let results = doneResults["results"] || [];
    let runlogs = doneResults["runlogs"] || [];
    if ($.notifyTime) {
      const notifyTimes = $.notifyTime.split(",").map((x) => x.split(":"));
      const now = $.time("HH:mm").split(":");
      runlogs.push(`${JSON.stringify(notifyTimes)}`);
      runlogs.push(`${JSON.stringify(now)}`);
      $.log(runlogs.join("\n"));
      if (
        notifyTimes.some((x) => x[0] === now[0] && (!x[1] || x[1] === now[1]))
      ) {
        $.msg($.name, "", `\n${results.join("\n")}`);
        notify.sendNotify($.name, `\n${results.join("\n")}`);
      }
    } else {
      $.msg($.name, "", `\n${results.join("\n")}`);
      notify.sendNotify($.name, `\n${results.join("\n")}`);
    }
    resolve();
  });
}

// prettier-ignore
function Env(t,e){class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`\ud83d\udd14${this.name}, \u5f00\u59cb!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),a={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(a,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)})):this.isQuanX()?(this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t))):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();s&&this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)}))}post(t,e=(()=>{})){if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.post(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method="POST",this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){this.initGotEnv(t);const{url:s,...i}=t;this.got.post(s,i).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)})}}time(t){let e={"M+":(new Date).getMonth()+1,"d+":(new Date).getDate(),"H+":(new Date).getHours(),"m+":(new Date).getMinutes(),"s+":(new Date).getSeconds(),"q+":Math.floor(((new Date).getMonth()+3)/3),S:(new Date).getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,((new Date).getFullYear()+"").substr(4-RegExp.$1.length)));for(let s in e)new RegExp("("+s+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?e[s]:("00"+e[s]).substr((""+e[s]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};if(this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r))),!this.isMuteLog){let t=["","==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="];t.push(e),s&&t.push(s),i&&t.push(i),console.log(t.join("\n")),this.logs=this.logs.concat(t)}}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`\u2757\ufe0f${this.name}, \u9519\u8bef!`,t.stack):this.log("",`\u2757\ufe0f${this.name}, \u9519\u8bef!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`\ud83d\udd14${this.name}, \u7ed3\u675f! \ud83d\udd5b ${s} \u79d2`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}
