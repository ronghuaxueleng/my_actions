/*
关注有礼-自动解析通用
环境变量 样例
export whx_drawShopGift="https://u.jd.com/VtcZjCp"
7 7 7 7 7 jd_whx_drawShopGift.js
*/
const $ = new Env('关注有礼-自动解析通用');
const notify = $.isNode() ? require('./sendNotify') : '';
const axios = require("axios")
const jdCookieNode = $.isNode() ? require('./jdCookie.js') : '';
let cookiesArr = [], cookie = '';
let jfurl = process.env.whx_drawShopGift ?? "https://u.jd.com/VIHwZ33";

if ($.isNode()) {
  Object.keys(jdCookieNode).forEach((item) => {
    cookiesArr.push(jdCookieNode[item])
  })
  if (process.env.JD_DEBUG && process.env.JD_DEBUG === 'false') console.log = () => {
  };
} else {
  cookiesArr = [$.getdata('CookieJD'), $.getdata('CookieJD2'), ...jsonParse($.getdata('CookiesJD') || "[]").map(item => item.cookie)].filter(item => !!item);
}
!(async () => {
  if (!cookiesArr[0]) {
    $.msg($.name, '【提示】请先获取京东账号一cookie\n直接使用NobyDa的京东签到获取', 'https://bean.m.jd.com/bean/signIndex.action', { "open-url": "https://bean.m.jd.com/bean/signIndex.action" });
    return;
  }
  for (let i = 0; i < cookiesArr.length; i++) {
    if (cookiesArr[i]) {
      cookie = cookiesArr[i];
      $.UserName = decodeURIComponent(cookie.match(/pt_pin=([^; ]+)(?=;?)/) && cookie.match(/pt_pin=([^; ]+)(?=;?)/)[1])
      $.index = i + 1;
      $.isLogin = true;
      $.nickName = '';
      message = '';
      await TotalBean();
      console.log(`\n******开始【京东账号${$.index}】${$.nickName || $.UserName}*********\n`);
      if (!$.isLogin) {
        $.msg($.name, `【提示】cookie已失效`, `京东账号${$.index} ${$.nickName || $.UserName}\n请重新登录获取\nhttps://bean.m.jd.com/bean/signIndex.action`, { "open-url": "https://bean.m.jd.com/bean/signIndex.action" });
        if ($.isNode()) {
          // await notify.sendNotify(`${$.name}cookie已失效 - ${$.UserName}`, `京东账号${$.index} ${$.UserName}\n请重新登录获取cookie`);
        }
        continue
      }
      $.jfurl = jfurl
      $.hrl = ''
      $.shopId = ''
      $.gx = ''
      $.utm_campaign = ''
      $.utm_term = ''
      $.activityId = ''
      await main()
      await $.wait(2000);
    }
  }
})().catch((e) => { $.log('', `❌ ${$.name}, 失败! 原因: ${e}!`, '') }).finally(() => { $.done(); })

async function main(){
  await getShorttoLong()
  await whx_getShopHomeActivityInfo()
  if ($.activityId) {
    await whx_drawShopGift()
  }
}

async function getShort(short) {
  try {
      let { data } = await axios.get(short);
      if (data) {
          let jump = data.match(/hrl=\'(.*)\';var.ua/)[1];
          if (jump) {
              return await axios
                  .get(jump)
                  .then((res) => {
                      return res.request?._redirectable?._currentUrl;
                  })
                  .catch((err) => {
                      return err.request?._redirectable?._currentUrl;
                  });
          } else {
              return null;
          }
      } else {
          return null;
      }
  } catch (error) {
      return null;
  }
}

async function getShorttoLong() {
  return getShort($.jfurl).then(long=>{
      console.log(long);
      $.hrl = long
  })
}

var _0xodk='jsjiami.com.v6',_0xodk_=['‮_0xodk'],_0x3c82=[_0xodk,'QWrDiQ==','eQwWJXI=','wrnCsMO/Fwk=','w6rDgsKN','NsOlw6d3','fMOMwpzCrsOc','wrBUCFjCi8KQ','bMKNcjbCqcOBawZDPUPCnQ==','wo/DoMOJw6HDhg==','w6ZPwpbDnMKH','w6RxIyZEQcOTw7o=','bcK4eEQXwpA=','FXR5','wozCoBQfFsO2wqBR','EELDs1hH','Fy3DosK8Iic=','dcKcaQzCpsO6YwRNGUHCnXHCjig3','X8KFw7AdVw==','fsKhw68hSA==','wpVqwq5XC8Okw4gBFw==','AMOxLMOOw4XCkWwo','fsOHF8Ouw5kt','P2UpwqV6VMOKUMO+OQ==','wqPClC0yBw==','P2UpwqV6VMOKUMO+OcKu','w5hVwo/Cr1PCk8K9ZcK3wpc=','w5HDrcKfJMOi','wqnDuMOWw6B3','UMKDVzHCsw==','MHvDl0tQ','GMOoTgFNDw==','BsOoSxFNIXPDvMOqasOwwp0FMsKXw5M=','fsKQeR3CiMOBYTJDIEXCoWHCqC83wro=','woQUwp91wovDjQ==','bMOwfUkUwrrDgSsneXPCvwxqZBY=','w5t1I8OBZnpXFcKx','wr/CthMBAw==','wqjCiSwWAg==','wpvCpg4SBcOtwp1MEcKt','fG7CoCTDmA4=','w4p5K8ORQWl5NcOtMVXCmXtFwqPCrQA=','TcOpwqzCtsO7P8K+wpfCrMOS','BsOiWg==','5LiV5Lqc5p2b5Yqh5Ziz6L6D5ZmY56qA5peJ5o2B','w5LClsOKw7XCtMKP','NsOnNcOmVMO+BcKGwqJBKcOHesKLw4TCq2I=','w4UnK8KYw4o=','wq7DisOHw53DhQ==','JB95w4vCmicrFA==','W8OwwqxCw4DDhTLCghPCiA==','wq3CqcO1Cj8ww7UtEsKWO8OtwqB8NsK4Sg==','w5VZwpw=','HMO4NcO/w5E=','NghbZsO0wqvCrFV5PFg=','eQQSIEdzK33CtgA=','CjlhFhA=','M8OWNQ==','wpvDosK/w4hqw5PCpXnCg8Ofw7I1AcOCw4/CoQRlCQ==','w7AIMsK8w5Eq','wrg/wrR3wrI=','w7kBDcKhw7Y=','NnIpwrx/B8KRBsOWLcOnPn4tw4fDhcKVTcKLM3fCsG9mSMKQw5FCcHwVdcOSXsKdfAXDlR9vEsKFwofDoMOdOMODJcKhwrDDm8KFw6rDriHCjMOOw5fDtToPwpjCicOzacOkwqp4','w7LDkDhlNg==','IsO6IcO7eMO4C8Kkwro=','csOVw7cz','wpTCqg0=','w5rDp8Ohw4DDnSHDjsKyYXMqw5RDbXdyeiLDtcKBRioAdVPDvsK8wrTDtmx7w6UVdMOFwpBgJW5Uw6t+wrTDtcKbwqTCoUbDnxPDvSNEw7A0w57DkycMw7c=','w5fDocKHNcOA','w5jCksOcw4nDpgPCqMO1BkfDgcKqwqdmw6YMMcKOQyBs','fx0POR06O2HCmQhZw753RcKZQMKI','L1xWHEY=','UyQhGWY=','VcKMw4c9WQ==','dAgB','eQsULFB+JlbCmgddw6NkDMOdZcKTwovCsEw=','QQV1wpsKG0fCog==','wonDvHg0w69u','fG7CtwbDmwha','wpFqwrNGAsOi','w6IML8Kpw7kqw4g9TWfCr1HDqsO/bko2w6UVw4g=','w5LClsOYw7LCj8KUVMO1','wq4BGwjCqQ==','wpdIFXLCsw==','w5/CjsO8w47DlA==','wo9gwqc=','5LiV5Liq5p+25Ymn5ZmN6Lyu5ZiX56mm5paO5o6d','dcKWeCzCuMOS','wpbCqh0=','J8O+w7Fnf8O5dsOgwqY=','w4lmwp3DjsKMIkTClk4=','GcOmHcOjWQ==','HMOMfh5N','w7pxOcOQQg==','esOpUDsM','w4AcCU1GwoBjw5V1','w7NxGTha','bMKNcjbCqcOBawZDPUPCnTk=','O8O9Ux0rT8KRw4bCkcO3','w4XCksOFw6bDoVzDtcK3SA==','wrdOEk0=','w43DhcKZN8ORwooW','Z8ONCsO8','woHDsSYCw402wpxyworCpCMjw4fDlxkTw41twqQ=','w5zCsA4WLMOxwppQKsO0','ScO7wrdbw7/DiHs=','woUZwo1ywoI=','SsO/wq1Yw5vDiSvCmT/Cng==','wotzOMKY','QC8Lw54fw6FgasK0w4I+','w6nCgMKJw53DqcOG','w5jClMOE','w4pewpTCtmzCnsO0','cGLDh8OPwrs=','w4xrwpzDmsKgNA==','OyhvFwk=','PxlD','w6BMwpnCq3Q=','w7nCosOuw4nCrA==','IsOmPMOiX8O7Qg==','ZcO+wpfCqcOP','ZcOzw78=','DmN4F0U=','Ih9CUMOhwqPCtVxRMR/Drw==','G18FwoZ0','w4vDtMKwwozDrQ==','cE3DvcOgwps=','wpTDvsO/w5RQwprCrXw=','w5FEwpc=','LXYxwqV4','YsONEw==','Ezxaw5s=','wpPCsjMVAw==','w4TClMOdw5w=','J8Oiw6x+WMO6','bRMLFlJ7MnTCng1fw6Q=','w4XDv8OWJHArwrDDrg==','wp/Ds0EXw6k=','MysuwqRjTQ==','w5dxwp8=','w7QqNcKEw54=','w45mwqHCrk4=','wpTDoMOjw6jDnA==','QsOlwq8=','wpgewps=','f8OKwoBhw44=','w5jDucOX','wpLDosO9w7ttwpvDog==','wpFyDhjCuA==','H3rDmH5KDsKTaHrDlMKXwpw=','OiJiaMOv','wrZTN0fCrg==','B1MFwo59','wpvCnBAiJQ==','w7fDhcKVw4XDj8OS','JMO6PsONdcO+D8KywqJcL8O7','QsO6wopSw5k=','M8OjB8OXZA==','Ih9CUMO2wqfCqkE=','XsO5wpJ9w5w=','EBtfw5rCng==','H3rDmH5dCsKMdSY=','wq9TAA==','HjN5w7XCvA==','X25qPE8UwpDClgbCoQ==','WcOEXGUM','w5QGwps=','VcO3PMOZw4Q=','wrBUBlrCpw==','w5jDmTxZDQ==','ecKZw6kBXA==','woMWQm3DsEzDqcOPCWxLw4PChA1Cwr3CmGnDiMOOKnDDpkNGwp/CnMK/w6HDuhUCesKldMKbwpDCom4UHMOSwrJgw5M8wo3CrixGNhHCh0zCicK1w6nDh8O+wqpebigpecK1HR3DrjN3woHCsApgwpIhw6FV','w4PDv8OJEmopwqvDpcK+','ecKbw5k9','w50jEgDChcKRCcK3wrIKwpxJHMKPTcKJw7hHacKZwpbDjX8fBsKkw5TCjMOPdzhIwoJ0w6law5jDgcKVcsKZw77CjcOYUFh4w6gDwqVlw7sBRcK7wqcAw7U6wqY=','w5vDgsO/','PMO+w7d+YsKkMMKpwqzClw7DqsOKwpx5RSbCnsOZUQA=','M8Oww6p+PcK+e8OjwrnCkwDDrsKBw513TTA=','RMOMW2gL','J8OiRx1NF3fCocKwCcKlw5NYDsK1w5dNw7LCgsODVWHDiMO+w73CucKKCsKxw5LDtH/Cp09HcQLDv8K5G8OFw4jChx3DjVxew6bDpW7CrsOPfgAFOsOQw5nCvhnDqyNJw7FbwpPDlMOWwplRwozDrMKhwrXDp8KPw5HCnsOLQMK7A8K3w5Qme8OxAE7Dh8OuMmfDoBfCiB1fwoDDhULDugnDgsKGDsKpw404fQtbQwDDlMOGHUnDkGwkGXbDjxnCuMORFcK5dmfDrkLChcO6wojDkcKHw7I=','HMOwwrBKw5jDgiPCl2c=','ey5dwosp','GFvDr2Rm','Bj1lExg=','GTBYw4PChQ==','w4gqEsKgw6I=','DTVuIiw=','wo/CgSk4OQ==','w5fDssKTwpnDjA==','w5NswpTDr8KbIg==','wpl2KmzCpA==','TMOlYUMK','w7zClsOCw5bDpw==','w58Rw4E=','w5TDmMKFOcOZwogRwrjDiQ==','HTxZ','w7BAwrnCvGk=','VsO8wr9uw4TDng==','wrPDocO0w4jDog==','RMOCw5YHLw==','w554IsOVSmw=','w5PDqRRCOA==','ccKLcw==','QAh7wpkUEAg=','cMO9YFUX','d8Kbw5o=','a8KUfhvCpQ==','bMOewoh6w58=','aw8JOXh+','w6zDn8KW','w4p3wp7DtcKKMWDCghLDnCPCvQ==','YjstrutjiDEahtmiPU.SLhUcom.v6=='];if(function(_0x57bf00,_0x17d249,_0x58ed36){function _0xca7700(_0x299fd5,_0x209121,_0x109d5d,_0x592b0a,_0x47d424,_0x2c28a0){_0x209121=_0x209121>>0x8,_0x47d424='po';var _0x4e0906='shift',_0x3ca315='push',_0x2c28a0='‮';if(_0x209121<_0x299fd5){while(--_0x299fd5){_0x592b0a=_0x57bf00[_0x4e0906]();if(_0x209121===_0x299fd5&&_0x2c28a0==='‮'&&_0x2c28a0['length']===0x1){_0x209121=_0x592b0a,_0x109d5d=_0x57bf00[_0x47d424+'p']();}else if(_0x209121&&_0x109d5d['replace'](/[YtrutDEhtPUSLhU=]/g,'')===_0x209121){_0x57bf00[_0x3ca315](_0x592b0a);}}_0x57bf00[_0x3ca315](_0x57bf00[_0x4e0906]());}return 0x10178d;};return _0xca7700(++_0x17d249,_0x58ed36)>>_0x17d249^_0x58ed36;}(_0x3c82,0x12b,0x12b00),_0x3c82){_0xodk_=_0x3c82['length']^0x12b;};function _0xa087(_0x283bec,_0x245ede){_0x283bec=~~'0x'['concat'](_0x283bec['slice'](0x1));var _0x25a7e8=_0x3c82[_0x283bec];if(_0xa087['yVVDjx']===undefined){(function(){var _0x3cd310=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x57c0d8='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x3cd310['atob']||(_0x3cd310['atob']=function(_0x5be8da){var _0x5b62ee=String(_0x5be8da)['replace'](/=+$/,'');for(var _0xa8284=0x0,_0x275bcd,_0x2493f1,_0x364444=0x0,_0x54726f='';_0x2493f1=_0x5b62ee['charAt'](_0x364444++);~_0x2493f1&&(_0x275bcd=_0xa8284%0x4?_0x275bcd*0x40+_0x2493f1:_0x2493f1,_0xa8284++%0x4)?_0x54726f+=String['fromCharCode'](0xff&_0x275bcd>>(-0x2*_0xa8284&0x6)):0x0){_0x2493f1=_0x57c0d8['indexOf'](_0x2493f1);}return _0x54726f;});}());function _0x1213db(_0x6a7492,_0x245ede){var _0x605c36=[],_0x26ae20=0x0,_0x5daeeb,_0x1eca0='',_0x428cc3='';_0x6a7492=atob(_0x6a7492);for(var _0x4bdc29=0x0,_0x43166d=_0x6a7492['length'];_0x4bdc29<_0x43166d;_0x4bdc29++){_0x428cc3+='%'+('00'+_0x6a7492['charCodeAt'](_0x4bdc29)['toString'](0x10))['slice'](-0x2);}_0x6a7492=decodeURIComponent(_0x428cc3);for(var _0x26f83f=0x0;_0x26f83f<0x100;_0x26f83f++){_0x605c36[_0x26f83f]=_0x26f83f;}for(_0x26f83f=0x0;_0x26f83f<0x100;_0x26f83f++){_0x26ae20=(_0x26ae20+_0x605c36[_0x26f83f]+_0x245ede['charCodeAt'](_0x26f83f%_0x245ede['length']))%0x100;_0x5daeeb=_0x605c36[_0x26f83f];_0x605c36[_0x26f83f]=_0x605c36[_0x26ae20];_0x605c36[_0x26ae20]=_0x5daeeb;}_0x26f83f=0x0;_0x26ae20=0x0;for(var _0x3f54b8=0x0;_0x3f54b8<_0x6a7492['length'];_0x3f54b8++){_0x26f83f=(_0x26f83f+0x1)%0x100;_0x26ae20=(_0x26ae20+_0x605c36[_0x26f83f])%0x100;_0x5daeeb=_0x605c36[_0x26f83f];_0x605c36[_0x26f83f]=_0x605c36[_0x26ae20];_0x605c36[_0x26ae20]=_0x5daeeb;_0x1eca0+=String['fromCharCode'](_0x6a7492['charCodeAt'](_0x3f54b8)^_0x605c36[(_0x605c36[_0x26f83f]+_0x605c36[_0x26ae20])%0x100]);}return _0x1eca0;}_0xa087['kKxJAM']=_0x1213db;_0xa087['xIanZk']={};_0xa087['yVVDjx']=!![];}var _0xbbca0f=_0xa087['xIanZk'][_0x283bec];if(_0xbbca0f===undefined){if(_0xa087['iHtMAx']===undefined){_0xa087['iHtMAx']=!![];}_0x25a7e8=_0xa087['kKxJAM'](_0x25a7e8,_0x245ede);_0xa087['xIanZk'][_0x283bec]=_0x25a7e8;}else{_0x25a7e8=_0xbbca0f;}return _0x25a7e8;};async function whx_getShopHomeActivityInfo(){var _0x5b11a2={'zLFyn':function(_0x4b490a,_0x55c4d9,_0x3571ba,_0x123bab){return _0x4b490a(_0x55c4d9,_0x3571ba,_0x123bab);},'HNIbt':function(_0x4bce9b,_0x149bbe){return _0x4bce9b+_0x149bbe;},'rUZEO':'venderId\x20','DqMYy':_0xa087('‮0','y7ie'),'DonIb':function(_0x2cb52d,_0x6c5d83){return _0x2cb52d+_0x6c5d83;},'KJOlz':_0xa087('‫1','4qGQ'),'OgexV':function(_0x5b9d3f,_0x54d45b){return _0x5b9d3f!==_0x54d45b;},'iiszM':'uDSCJ','ZJMDf':function(_0x5ad067,_0xf29f61){return _0x5ad067===_0xf29f61;},'Lpjor':_0xa087('‮2','[lUd'),'IvBzL':_0xa087('‫3','z3wC'),'MwlKt':_0xa087('‫4','sbJR'),'eURef':_0xa087('‫5','4L!('),'MOjsN':function(_0x35586a,_0x84a51c){return _0x35586a+_0x84a51c;},'YQWIt':function(_0x52b8fa,_0x287d4f){return _0x52b8fa+_0x287d4f;},'vAhtU':function(_0x5049f7,_0x4fc743){return _0x5049f7!==_0x4fc743;},'IzHXy':_0xa087('‫6','1!az'),'Zubjy':function(_0x449e7e){return _0x449e7e();},'uoPol':_0xa087('‮7',')BBC'),'YUXBq':_0xa087('‮8','sbJR'),'pZfPR':_0xa087('‫9','[GGI'),'aYjYV':_0xa087('‮a','5*8('),'xiRyo':_0xa087('‫b','pe)y'),'bmTEr':_0xa087('‮c','XcvP'),'maAXK':function(_0x2cbbb6,_0x3a9f9d){return _0x2cbbb6(_0x3a9f9d);},'kBuaJ':_0xa087('‮d','gSpC'),'DYPDs':'https://shop.m.jd.com/','YzbmQ':_0xa087('‫e','bldn'),'yzdMs':function(_0x3b007e,_0x1ec700,_0x10e242,_0xb0eec5){return _0x3b007e(_0x1ec700,_0x10e242,_0xb0eec5);},'wJhHF':_0xa087('‮f','7xyF'),'ItOvB':function(_0x265324,_0x2d37d4,_0x15bd9e,_0x55ba78){return _0x265324(_0x2d37d4,_0x15bd9e,_0x55ba78);},'EUgdY':'gx=','wxfFU':'&ad_od=','EYXJx':function(_0x4a01cd,_0x2f73e0,_0x3479ef,_0xc92215){return _0x4a01cd(_0x2f73e0,_0x3479ef,_0xc92215);},'iwInp':_0xa087('‫10','M%LZ'),'djJVj':_0xa087('‫11','7xyF'),'wPZhk':_0xa087('‫12','z3wC'),'hfrXh':_0xa087('‫13','dZB7'),'mIMgm':function(_0xa16287,_0x163fdd,_0x3c93d0,_0x4541f2){return _0xa16287(_0x163fdd,_0x3c93d0,_0x4541f2);},'BaHua':_0xa087('‮14','HPh5'),'LInZC':function(_0x3d1ac6,_0x471042){return _0x3d1ac6+_0x471042;}};if(_0x5b11a2['zLFyn'](getSubstr,$[_0xa087('‫15','[GGI')],_0xa087('‮16','sPFY'),_0x5b11a2[_0xa087('‮17','i80$')])){$[_0xa087('‫18','y7ie')]=_0x5b11a2[_0xa087('‮19','FPTi')](getSubstr,$[_0xa087('‫1a','Qkeb')],_0x5b11a2['wJhHF'],_0x5b11a2[_0xa087('‮1b','sPFY')]);console['log'](_0x5b11a2[_0xa087('‮1c','U8eE')](_0xa087('‫1d','4qGQ'),$[_0xa087('‫18','y7ie')]));$['gx']=_0x5b11a2[_0xa087('‮1e','hELs')](getSubstr,$[_0xa087('‮1f','BrjE')],_0x5b11a2['EUgdY'],_0x5b11a2[_0xa087('‮20','nIIs')]);$[_0xa087('‫21','Qkeb')]=_0x5b11a2[_0xa087('‫22','rqpg')](getSubstr,$['hrl'],_0x5b11a2[_0xa087('‫23','!lRL')],_0x5b11a2[_0xa087('‮24','i80$')]);$[_0xa087('‫25','qU#V')]=$[_0xa087('‫26','sPFY')][_0xa087('‮27','rqpg')](_0x5b11a2['pZfPR'])[0x1];$['now']=Date[_0xa087('‫28','XcvP')]();$[_0xa087('‫29','dZB7')]={'ad_od':_0x5b11a2[_0xa087('‫2a','bldn')],'cu':_0xa087('‫2b','[GGI'),'gx':$['gx'],'shopId':$[_0xa087('‮2c','[26M')],'utm_campaign':$[_0xa087('‫2d','@%ch')],'utm_medium':_0x5b11a2['xiRyo'],'utm_source':_0x5b11a2['bmTEr'],'utm_term':$[_0xa087('‫2e','%%*&')],'utm_user':_0x5b11a2[_0xa087('‫2f','gSpC')],'source':_0xa087('‮30','rqpg')};}else if(_0x5b11a2[_0xa087('‫22','rqpg')](getSubstr,$[_0xa087('‫31','y7ie')],_0x5b11a2[_0xa087('‮32','Oobx')],_0x5b11a2[_0xa087('‫33','sPFY')])){var _0xa7e6bd=_0x5b11a2[_0xa087('‮34','HY9*')]['split']('|'),_0x954840=0x0;while(!![]){switch(_0xa7e6bd[_0x954840++]){case'0':$[_0xa087('‫35','hELs')]=Date[_0xa087('‮36','M%LZ')]();continue;case'1':$['shopId']=_0x5b11a2[_0xa087('‮37','7xyF')](getSubstr,$[_0xa087('‫38','%%*&')],_0xa087('‮39','qU#V'),_0x5b11a2[_0xa087('‫3a','d8of')]);continue;case'2':$[_0xa087('‫3b','C0wy')]=_0x5b11a2[_0xa087('‫3c','Qkeb')](getSubstr,$[_0xa087('‫31','y7ie')],_0x5b11a2[_0xa087('‮3d','5*8(')],_0x5b11a2[_0xa087('‮3e','rqpg')]);continue;case'3':$['body']={'cu':_0x5b11a2[_0xa087('‮3f','bldn')],'shopId':$[_0xa087('‮40','HPh5')],'utm_campaign':$[_0xa087('‫41','4qGQ')],'utm_medium':_0x5b11a2[_0xa087('‮42','7xyF')],'utm_source':_0x5b11a2[_0xa087('‮43','4qGQ')],'utm_term':$[_0xa087('‮44','Qkeb')],'utm_user':_0x5b11a2[_0xa087('‫45','7xyF')],'source':_0x5b11a2[_0xa087('‮46','A5hO')]};continue;case'4':$['utm_term']=$['hrl']['split'](_0xa087('‫47','C0wy'))[0x1];continue;case'5':console[_0xa087('‮48','5*8(')](_0x5b11a2[_0xa087('‮49','A5hO')]('shopId\x20',$['shopId']));continue;}break;}}return new Promise(async _0x2ba569=>{var _0x8700e6={'jiBBc':function(_0x1e6509,_0x5d8005,_0x4e3b32,_0x3fd42f){return _0x1e6509(_0x5d8005,_0x4e3b32,_0x3fd42f);},'phkyo':_0xa087('‮4a','nIIs'),'rmaro':function(_0x576df0,_0x2ae12a){return _0x5b11a2[_0xa087('‮4b','t%3#')](_0x576df0,_0x2ae12a);},'VMPQi':'shopId\x20','SaoNZ':_0xa087('‮4c','saDE'),'IUnDc':'&ad_od=','jJDqo':_0x5b11a2['uoPol'],'akplC':_0x5b11a2[_0xa087('‫4d','XcvP')],'ydtPK':_0x5b11a2['pZfPR'],'PFDqQ':_0xa087('‮4e','5*8('),'cANBH':_0x5b11a2[_0xa087('‮4f','ZU79')],'sfXQr':_0x5b11a2['xiRyo'],'YLevn':_0x5b11a2[_0xa087('‮50','@kLR')]};const _0x52257a={'url':_0xa087('‮51','zl!]')+_0x5b11a2['maAXK'](encodeURIComponent,JSON[_0xa087('‫52','%%*&')]($[_0xa087('‫53','@kLR')]))+'&_t='+$[_0xa087('‫28','XcvP')]+_0xa087('‮54','n2VB'),'headers':{'Accept':_0xa087('‮55','&QMW'),'Origin':_0xa087('‮56','[26M'),'Accept-Encoding':_0xa087('‮57','[26M'),'Accept-Language':_0x5b11a2['kBuaJ'],'Cookie':cookie,'Referer':_0x5b11a2[_0xa087('‫58','t%3#')],'User-Agent':_0xa087('‮59','[lUd')}};$['get'](_0x52257a,(_0x4bdabe,_0xd23108,_0x2c2cb5)=>{var _0x183503={'FGvTR':function(_0x18bf29,_0x5b2e0b,_0x215028,_0x333068){return _0x5b11a2['zLFyn'](_0x18bf29,_0x5b2e0b,_0x215028,_0x333068);},'QAudq':_0xa087('‫5a','7xyF'),'Esizp':function(_0x59d6a7,_0x1a9be4){return _0x5b11a2[_0xa087('‮5b','cK4M')](_0x59d6a7,_0x1a9be4);},'RLVmq':_0x5b11a2[_0xa087('‮5c','C0wy')],'lbGVj':_0x5b11a2['DqMYy'],'jlwUq':function(_0x38403e,_0x262078){return _0x5b11a2[_0xa087('‮5d','FPTi')](_0x38403e,_0x262078);}};if(_0x5b11a2[_0xa087('‮5e','A5hO')]===_0x5b11a2[_0xa087('‫5f','Oobx')]){try{if(_0x5b11a2[_0xa087('‫60','FPTi')](_0xa087('‫61','bldn'),_0x5b11a2[_0xa087('‮62','!lRL')])){$[_0xa087('‮63','y7ie')](e,_0xd23108);}else{if(_0x4bdabe){if(_0x5b11a2[_0xa087('‫64','5*8(')](_0x5b11a2[_0xa087('‮65','t%3#')],_0x5b11a2[_0xa087('‮66','[GGI')])){console[_0xa087('‫67','saDE')](''+JSON[_0xa087('‮68','pe)y')](_0x4bdabe));}else{console[_0xa087('‮69','dZB7')]('京东服务器返回空数据');}}else{if(_0x5b11a2['IvBzL']!==_0x5b11a2[_0xa087('‫6a','sPFY')]){$[_0xa087('‫6b','7xyF')](e,_0xd23108);}else{if(_0x2c2cb5){if(_0x5b11a2[_0xa087('‫6c','HY9*')](_0xa087('‮6d','BrjE'),'ICEAQ')){$[_0xa087('‫6e','z3wC')]=_0x8700e6[_0xa087('‫6f','ZU79')](getSubstr,$[_0xa087('‫70',')BBC')],_0xa087('‫71','cK4M'),_0x8700e6[_0xa087('‮72','t%3#')]);console[_0xa087('‮73','@kLR')](_0x8700e6[_0xa087('‫74',')BBC')](_0x8700e6[_0xa087('‮75','7xyF')],$[_0xa087('‫76','@%ch')]));$['gx']=getSubstr($[_0xa087('‫77','HPh5')],_0x8700e6['SaoNZ'],_0x8700e6['IUnDc']);$[_0xa087('‮78','y7ie')]=_0x8700e6['jiBBc'](getSubstr,$[_0xa087('‫79','i80$')],_0x8700e6['jJDqo'],_0x8700e6[_0xa087('‫7a','@%ch')]);$['utm_term']=$['hrl'][_0xa087('‫7b','fCVy')](_0x8700e6['ydtPK'])[0x1];$['now']=Date[_0xa087('‮7c','HPh5')]();$[_0xa087('‮7d','[26M')]={'ad_od':_0x8700e6[_0xa087('‫7e','hELs')],'cu':_0x8700e6['cANBH'],'gx':$['gx'],'shopId':$[_0xa087('‮7f','5*8(')],'utm_campaign':$[_0xa087('‫80',')BBC')],'utm_medium':_0x8700e6[_0xa087('‫81','HY9*')],'utm_source':_0x8700e6[_0xa087('‫82','y7ie')],'utm_term':$[_0xa087('‫83','1!az')],'utm_user':'plusmember','source':_0xa087('‫84','t%3#')};}else{_0x2c2cb5=JSON['parse'](_0x2c2cb5);if(_0x2c2cb5['result']['levelZeroMenuUrl']&&_0x2c2cb5['result']['giftBagDataResult']){if(_0x5b11a2['OgexV'](_0x5b11a2['MwlKt'],_0x5b11a2['MwlKt'])){console[_0xa087('‮85','nIIs')](_0x2c2cb5);}else{$[_0xa087('‮86','bldn')]=_0x5b11a2[_0xa087('‮87','C0wy')](getSubstr,_0x2c2cb5[_0xa087('‮88','T01i')][_0xa087('‮89',')BBC')],_0x5b11a2[_0xa087('‫8a','@kLR')],_0x5b11a2[_0xa087('‮8b','@kLR')]);console['log'](_0x5b11a2['MOjsN'](_0xa087('‫8c','&qlQ'),$[_0xa087('‮8d','FGkl')]));$['activityId']=_0x2c2cb5[_0xa087('‮8e','XcvP')]['giftBagDataResult'][_0xa087('‫8f','rqpg')];console['log'](_0x5b11a2[_0xa087('‫90','bldn')](_0xa087('‮91','rqpg'),$[_0xa087('‮92','sPFY')]));}}}}else{console['log']('京东服务器返回空数据');}}}}}catch(_0x118b63){$['logErr'](_0x118b63,_0xd23108);}finally{if(_0x5b11a2[_0xa087('‮93','pe)y')](_0xa087('‮94','qU#V'),_0x5b11a2[_0xa087('‫95',')BBC')])){_0x5b11a2[_0xa087('‮96','C0wy')](_0x2ba569);}else{if(_0x2c2cb5){_0x2c2cb5=JSON['parse'](_0x2c2cb5);if(_0x2c2cb5[_0xa087('‮97','[lUd')][_0xa087('‮98','[lUd')]&&_0x2c2cb5['result'][_0xa087('‮99',')BBC')]){$['venderId']=_0x183503['FGvTR'](getSubstr,_0x2c2cb5[_0xa087('‮9a','M%LZ')][_0xa087('‮9b','t%3#')],_0xa087('‫9c','z3wC'),_0x183503['QAudq']);console[_0xa087('‮85','nIIs')](_0x183503[_0xa087('‫9d','bldn')](_0x183503[_0xa087('‮9e','bldn')],$[_0xa087('‮8d','FGkl')]));$[_0xa087('‫9f','bldn')]=_0x2c2cb5[_0xa087('‮a0',']gr)')][_0xa087('‫a1','z3wC')][_0xa087('‮a2','hELs')];console['log']('activityId\x20'+$[_0xa087('‫8f','rqpg')]);}}else{console[_0xa087('‮a3','[lUd')](_0xa087('‫a4','ZU79'));}}}}else{_0x2c2cb5=JSON['parse'](_0x2c2cb5);if(_0x2c2cb5[_0xa087('‮a5','U8eE')]['levelZeroMenuUrl']&&_0x2c2cb5[_0xa087('‮9a','M%LZ')][_0xa087('‮a6','4qGQ')]){$['venderId']=_0x183503[_0xa087('‫a7','Oobx')](getSubstr,_0x2c2cb5[_0xa087('‮88','T01i')]['levelZeroMenuUrl'],_0x183503['lbGVj'],'&channel=');console[_0xa087('‮a3','[lUd')](_0x183503['jlwUq'](_0x183503[_0xa087('‫a8','HY9*')],$[_0xa087('‮a9','A5hO')]));$[_0xa087('‮aa','7xyF')]=_0x2c2cb5['result'][_0xa087('‮ab','fCVy')]['activityId'];console[_0xa087('‮ac','sPFY')](_0x183503[_0xa087('‮ad','FGkl')](_0xa087('‮ae','Qkeb'),$[_0xa087('‮af','@%ch')]));}}});});}async function whx_drawShopGift(){var _0x4ba58f={'NNXwU':function(_0x409f08){return _0x409f08();},'dDtlr':function(_0x32f6ac,_0x22a592){return _0x32f6ac===_0x22a592;},'QfpYl':_0xa087('‮b0','FPTi'),'zaPmn':'TtrZq','KPnem':function(_0x5721b9,_0x1ef039){return _0x5721b9(_0x1ef039);},'pMpew':_0xa087('‫b1',')BBC'),'VGHMV':_0xa087('‫b2','qU#V')};$['now']=Date[_0xa087('‫35','hELs')]();const _0x42ff51={'shopId':$[_0xa087('‮b3','Oobx')],'venderId':$['venderId'],'activityId':$['activityId']};return new Promise(async _0x2f675c=>{var _0x18f6b1={'WElxA':function(_0x1052f5){return _0x4ba58f[_0xa087('‮b4','M%LZ')](_0x1052f5);},'KCGPW':function(_0x4c8e28,_0x1da101){return _0x4ba58f['dDtlr'](_0x4c8e28,_0x1da101);},'Nxzyw':_0x4ba58f['QfpYl'],'luzkk':function(_0x4e2dbb,_0x5ce8f5){return _0x4e2dbb+_0x5ce8f5;},'UCyxE':function(_0x3758dd,_0x2fb5a3){return _0x3758dd!==_0x2fb5a3;},'ohTwA':_0x4ba58f[_0xa087('‫b5','Oobx')],'SvXBR':function(_0x11e17e){return _0x11e17e();}};const _0x520856={'url':_0xa087('‮b6','rqpg')+_0x4ba58f[_0xa087('‮b7','ZU79')](encodeURIComponent,JSON[_0xa087('‮b8','4qGQ')](_0x42ff51))+_0xa087('‫b9','[26M')+$[_0xa087('‫ba','bldn')]+_0xa087('‫bb','HY9*'),'headers':{'Accept':_0x4ba58f[_0xa087('‫bc','pe)y')],'Origin':_0xa087('‫bd','[GGI'),'Accept-Encoding':_0xa087('‫be','@%ch'),'Accept-Language':_0x4ba58f[_0xa087('‫bf','nIIs')],'Cookie':cookie,'Referer':'https://shop.m.jd.com/','User-Agent':'Mozilla/5.0\x20(iPhone;\x20CPU\x20iPhone\x20OS\x2015_6_1\x20like\x20Mac\x20OS\x20X)\x20AppleWebKit/605.1.15\x20(KHTML,\x20like\x20Gecko)\x20Version/15.6.1\x20Mobile/15E148\x20Safari/604.1'}};$['get'](_0x520856,(_0x58fbef,_0x1ae32c,_0x590351)=>{var _0x149888={'ThJgf':function(_0x5458fa){return _0x18f6b1['WElxA'](_0x5458fa);}};if(_0x18f6b1[_0xa087('‫c0','@%ch')]('HkjLj',_0x18f6b1[_0xa087('‮c1','@kLR')])){try{if(_0x58fbef){console[_0xa087('‫c2','@%ch')](''+JSON['stringify'](_0x58fbef));}else{if(_0x590351){_0x590351=JSON['parse'](_0x590351);if(_0x590351['result'][_0xa087('‮c3','@%ch')][0x0][_0xa087('‮c4','cK4M')]){console[_0xa087('‮73','@kLR')](_0x18f6b1['luzkk'](_0x590351[_0xa087('‮c5','gSpC')]['alreadyReceivedGifts'][0x0][_0xa087('‮c6',']gr)')],'\x20')+_0x590351[_0xa087('‫c7','&qlQ')][_0xa087('‫c8','Oobx')][0x0][_0xa087('‫c9','U8eE')]);}else{if(_0x18f6b1[_0xa087('‮ca','n2VB')](_0xa087('‫cb','5*8('),_0x18f6b1[_0xa087('‮cc','[GGI')])){_0x149888['ThJgf'](_0x2f675c);}else{console[_0xa087('‮cd','&qlQ')](_0x590351);}}}else{console[_0xa087('‫67','saDE')](_0xa087('‫ce','sPFY'));}}}catch(_0x5059f4){$[_0xa087('‫cf',')BBC')](_0x5059f4,_0x1ae32c);}finally{_0x18f6b1['SvXBR'](_0x2f675c);}}else{console[_0xa087('‫d0','bldn')](''+JSON[_0xa087('‮d1','[26M')](_0x58fbef));}});});};_0xodk='jsjiami.com.v6';
// prettier-ignore
function getSubstr(str, leftStr, rightStr){
  let left = str.indexOf(leftStr);
  let right = str.indexOf(rightStr, left);
  if(left < 0 || right < left) return '';
  return str.substring(left + leftStr.length, right);
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
        "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0.2 Mobile/15E148 Safari/604.1"
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
            if (data['retcode'] === 13) {
              $.isLogin = false; //cookie过期
              return
            }
            if (data['retcode'] === 0) {
              $.nickName = (data['base'] && data['base'].nickname) || $.UserName;
            } else {
              $.nickName = $.UserName
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
function Env(t, e) { "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0); class s { constructor(t) { this.env = t } send(t, e = "GET") { t = "string" == typeof t ? { url: t } : t; let s = this.get; return "POST" === e && (s = this.post), new Promise((e, i) => { s.call(this, t, (t, s, r) => { t ? i(t) : e(s) }) }) } get(t) { return this.send.call(this.env, t) } post(t) { return this.send.call(this.env, t, "POST") } } return new class { constructor(t, e) { this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `🔔${this.name}, 开始!`) } isNode() { return "undefined" != typeof module && !!module.exports } isQuanX() { return "undefined" != typeof $task } isSurge() { return "undefined" != typeof $httpClient && "undefined" == typeof $loon } isLoon() { return "undefined" != typeof $loon } toObj(t, e = null) { try { return JSON.parse(t) } catch { return e } } toStr(t, e = null) { try { return JSON.stringify(t) } catch { return e } } getjson(t, e) { let s = e; const i = this.getdata(t); if (i) try { s = JSON.parse(this.getdata(t)) } catch { } return s } setjson(t, e) { try { return this.setdata(JSON.stringify(t), e) } catch { return !1 } } getScript(t) { return new Promise(e => { this.get({ url: t }, (t, s, i) => e(i)) }) } runScript(t, e) { return new Promise(s => { let i = this.getdata("@chavy_boxjs_userCfgs.httpapi"); i = i ? i.replace(/\n/g, "").trim() : i; let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout"); r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r; const [o, h] = i.split("@"), n = { url: `http://${h}/v1/scripting/evaluate`, body: { script_text: t, mock_type: "cron", timeout: r }, headers: { "X-Key": o, Accept: "*/*" } }; this.post(n, (t, e, i) => s(i)) }).catch(t => this.logErr(t)) } loaddata() { if (!this.isNode()) return {}; { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e); if (!s && !i) return {}; { const i = s ? t : e; try { return JSON.parse(this.fs.readFileSync(i)) } catch (t) { return {} } } } } writedata() { if (this.isNode()) { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e), r = JSON.stringify(this.data); s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r) } } lodash_get(t, e, s) { const i = e.replace(/\[(\d+)\]/g, ".$1").split("."); let r = t; for (const t of i) if (r = Object(r)[t], void 0 === r) return s; return r } lodash_set(t, e, s) { return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t) } getdata(t) { let e = this.getval(t); if (/^@/.test(t)) { const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : ""; if (r) try { const t = JSON.parse(r); e = t ? this.lodash_get(t, i, "") : e } catch (t) { e = "" } } return e } setdata(t, e) { let s = !1; if (/^@/.test(e)) { const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e), o = this.getval(i), h = i ? "null" === o ? null : o || "{}" : "{}"; try { const e = JSON.parse(h); this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i) } catch (e) { const o = {}; this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i) } } else s = this.setval(t, e); return s } getval(t) { return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null } setval(t, e) { return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null } initGotEnv(t) { this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar)) } get(t, e = (() => { })) { t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.get(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => { try { if (t.headers["set-cookie"]) { const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString(); s && this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar } } catch (t) { this.logErr(t) } }).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) })) } post(t, e = (() => { })) { if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.post(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) }); else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t)); else if (this.isNode()) { this.initGotEnv(t); const { url: s, ...i } = t; this.got.post(s, i).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) }) } } time(t, e = null) { const s = e ? new Date(e) : new Date; let i = { "M+": s.getMonth() + 1, "d+": s.getDate(), "H+": s.getHours(), "m+": s.getMinutes(), "s+": s.getSeconds(), "q+": Math.floor((s.getMonth() + 3) / 3), S: s.getMilliseconds() }; /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length))); for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length))); return t } msg(e = t, s = "", i = "", r) { const o = t => { if (!t) return t; if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? { "open-url": t } : this.isSurge() ? { url: t } : void 0; if ("object" == typeof t) { if (this.isLoon()) { let e = t.openUrl || t.url || t["open-url"], s = t.mediaUrl || t["media-url"]; return { openUrl: e, mediaUrl: s } } if (this.isQuanX()) { let e = t["open-url"] || t.url || t.openUrl, s = t["media-url"] || t.mediaUrl; return { "open-url": e, "media-url": s } } if (this.isSurge()) { let e = t.url || t.openUrl || t["open-url"]; return { url: e } } } }; if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))), !this.isMuteLog) { let t = ["", "==============📣系统通知📣=============="]; t.push(e), s && t.push(s), i && t.push(i), console.log(t.join("\n")), this.logs = this.logs.concat(t) } } log(...t) { t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator)) } logErr(t, e) { const s = !this.isSurge() && !this.isQuanX() && !this.isLoon(); s ? this.log("", `❗️${this.name}, 错误!`, t.stack) : this.log("", `❗️${this.name}, 错误!`, t) } wait(t) { return new Promise(e => setTimeout(e, t)) } done(t = {}) { const e = (new Date).getTime(), s = (e - this.startTime) / 1e3; this.log("", `🔔${this.name}, 结束! 🕛 ${s} 秒`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t) } }(t, e) }
