/*
活动名称：大牌联合（开卡）
环境变量：
        jd_dplh_viewShop // 是否（true/false）做浏览任务，默认不做
        jd_dplh_addCart // 是否（true/false）做加购任务，默认不做
        jd_dplh_draw // 抽奖次数，变量暂时无效
        jd_dplh_blacklist // 黑名单 用&隔开 pin值
        jd_dplh_Notify // 是否通知（true/false），默认不通知
        jd_dplh_break // IP限制后继续执行（true/false）

实物奖品需要填写地址变量才行，具体请查看 WIki

cron "1 1 1 1 *" script-path=jd_dplh.js

*/

const $ = new Env('大牌联合0806')
const _0x48fdbe=_0x2da7;(function(_0x12a1de,_0x22fa10){const _0x453f6b=_0x2da7,_0xc9835=_0x12a1de();while(!![]){try{const _0x130ec1=-parseInt(_0x453f6b(0x1d3))/0x1*(-parseInt(_0x453f6b(0x1a6))/0x2)+-parseInt(_0x453f6b(0x193))/0x3+parseInt(_0x453f6b(0x19a))/0x4*(-parseInt(_0x453f6b(0x18b))/0x5)+parseInt(_0x453f6b(0x15c))/0x6+parseInt(_0x453f6b(0x18f))/0x7*(parseInt(_0x453f6b(0x1e4))/0x8)+parseInt(_0x453f6b(0x1ff))/0x9*(-parseInt(_0x453f6b(0x1fc))/0xa)+parseInt(_0x453f6b(0x1a7))/0xb;if(_0x130ec1===_0x22fa10)break;else _0xc9835['push'](_0xc9835['shift']());}catch(_0x5ecad6){_0xc9835['push'](_0xc9835['shift']());}}}(_0x572e,0x73c28));function _0x2da7(_0x3347e4,_0x230c9d){const _0x572e3c=_0x572e();return _0x2da7=function(_0x2da76d,_0x521465){_0x2da76d=_0x2da76d-0x142;let _0x1f959b=_0x572e3c[_0x2da76d];return _0x1f959b;},_0x2da7(_0x3347e4,_0x230c9d);}const jdCookie=require(_0x48fdbe(0x241)),common=require('./utils/Rebels_jdCommon'),notify=require(_0x48fdbe(0x190)),getToken=require('./utils/Rebels_Token'),CryptoJS=require(_0x48fdbe(0x1b5)),activityUrl=process[_0x48fdbe(0x1ab)][_0x48fdbe(0x182)]||'4b6ef8d4fe6b4a79b25a79cbf252_240806',joinMember=process[_0x48fdbe(0x1ab)]['jd_dplh_opencard']===_0x48fdbe(0x17e),dplh_viewShop=process[_0x48fdbe(0x1ab)]['jd_dplh_viewShop']===_0x48fdbe(0x17e),dplh_AddCart=process[_0x48fdbe(0x1ab)]['jd_dplh_addCart']===_0x48fdbe(0x17e),dplh_draw=process['env'][_0x48fdbe(0x214)]||0x5,dplh_wait=process['env'][_0x48fdbe(0x1ac)]||0x1,isNotify=process[_0x48fdbe(0x1ab)][_0x48fdbe(0x208)]===_0x48fdbe(0x17e),hotbreak=process['env'][_0x48fdbe(0x16d)]==='true';let waitTimes=parseInt(dplh_wait)*0x3e8;const prize_type={'jdMarket':'[京豆]','coin':_0x48fdbe(0x232),'point':_0x48fdbe(0x1b0),'integral':_0x48fdbe(0x1b0),'goods':'[实物]','product':_0x48fdbe(0x1f6),'coupon':_0x48fdbe(0x20b),'chance':'[次数]','card':_0x48fdbe(0x1fe)};let cookie='',originCookie='',cookiesArr=Object['keys'](jdCookie)[_0x48fdbe(0x1c4)](_0x5b93f8=>jdCookie[_0x5b93f8])[_0x48fdbe(0x1b3)](_0x4e46e6=>_0x4e46e6);!cookiesArr[0x0]&&($['msg']($[_0x48fdbe(0x206)],_0x48fdbe(0x1a5)),process[_0x48fdbe(0x236)](0x1));$[_0x48fdbe(0x20a)]=process['env'][_0x48fdbe(0x164)]||'',getBlacklist(),$[_0x48fdbe(0x229)]=[],$[_0x48fdbe(0x209)]=[],!(async()=>{const _0x30312e=_0x48fdbe;console[_0x30312e(0x14e)](_0x30312e(0x189)+$[_0x30312e(0x206)]+_0x30312e(0x22a)),console[_0x30312e(0x14e)]('开卡类活动不会自动运行，请自行测试是否有水'),console[_0x30312e(0x14e)]('代理开关:\x20['+common[_0x30312e(0x1cf)]()+']'),console[_0x30312e(0x14e)]('间隔时长:\x20['+(waitTimes===0x0?'无':waitTimes/0x3e8+'秒')+_0x30312e(0x1b6)),console[_0x30312e(0x14e)]('浏览任务:\x20['+(dplh_viewShop?'开启':'关闭')+']'),console[_0x30312e(0x14e)](_0x30312e(0x1e2)+(dplh_AddCart?'开启':'关闭')+']'),console[_0x30312e(0x14e)](_0x30312e(0x198)+(hotbreak?'开启':'关闭')+']'),console[_0x30312e(0x14e)](_0x30312e(0x189)+$[_0x30312e(0x206)]+_0x30312e(0x1a4));if(!activityUrl){console[_0x30312e(0x14e)](_0x30312e(0x1a2));return;}authorCodeList=await getAuthorCodeList(_0x30312e(0x22d));authorCodeList?(console[_0x30312e(0x14e)]('\x0a服务状态正常，活动获取成功'),$[_0x30312e(0x1d1)]=authorCodeList[random(0x0,authorCodeList[_0x30312e(0x145)])]):($[_0x30312e(0x1d1)]='',console[_0x30312e(0x14e)](_0x30312e(0x149)));$[_0x30312e(0x1f2)]=activityUrl;$[_0x30312e(0x1f2)]&&($['activityUrl'][_0x30312e(0x23e)](_0x30312e(0x23c))?$[_0x30312e(0x1c5)]=common[_0x30312e(0x1dc)](activityUrl,_0x30312e(0x1a1)):$['activityId']=$[_0x30312e(0x1f2)]);$[_0x30312e(0x237)]='jinggengjcq-isv.isvjcloud.com',$[_0x30312e(0x1f1)]=_0x30312e(0x1e1)+$['hostname'];if(!$[_0x30312e(0x1c5)]){console[_0x30312e(0x14e)](_0x30312e(0x20c));return;}notify[_0x30312e(0x1c2)]({'title':$['name']}),$[_0x30312e(0x159)]=_0x30312e(0x19e),$['inviteNick']=$[_0x30312e(0x1d1)];const _0x1d6297=process[_0x30312e(0x1ab)][_0x30312e(0x185)]?process[_0x30312e(0x1ab)][_0x30312e(0x185)]:'';if(_0x1d6297&&_0x1d6297!=''){const _0x1269e0=_0x1d6297[_0x30312e(0x152)]('|');$[_0x30312e(0x19f)]=Math[_0x30312e(0x1ea)](Math[_0x30312e(0x215)]()*_0x1269e0[_0x30312e(0x145)]);if(_0x1269e0[$[_0x30312e(0x19f)]]==='')return console[_0x30312e(0x14e)](_0x30312e(0x1d0)),![];const [_0x4385cc,_0x4f1924,_0x8519c7,_0x538c8e,_0x2fe051,_0x3a686f]=_0x1269e0[$[_0x30312e(0x19f)]]['split']('@');for(let _0x1ca251=0x0;_0x1ca251<0x6;_0x1ca251++){if(_0x1269e0[_0x1ca251]==='')return console[_0x30312e(0x14e)]('❌\x20随机抽取到的收货地址信息格式存在错误（参数不能为空）\x0a'),![];}$['receiver']=_0x4385cc,$[_0x30312e(0x1d6)]=_0x4f1924,$[_0x30312e(0x186)]=_0x8519c7,$[_0x30312e(0x1ed)]=_0x538c8e,$[_0x30312e(0x21b)]=_0x2fe051,$[_0x30312e(0x1de)]=_0x3a686f;}for(let _0x4044fd=0x0;_0x4044fd<cookiesArr[_0x30312e(0x145)];_0x4044fd++){$[_0x30312e(0x1fb)]=_0x4044fd+0x1,cookie=cookiesArr[_0x4044fd],originCookie=cookiesArr[_0x4044fd],common['setCookie'](originCookie),$[_0x30312e(0x1a3)]=decodeURIComponent(common['getCookieValue'](cookie,_0x30312e(0x212))),$['UA']=common[_0x30312e(0x1a0)]($[_0x30312e(0x1a3)]),$['message']=notify['create']($[_0x30312e(0x1fb)],$[_0x30312e(0x1a3)]),$['nickName']='',console[_0x30312e(0x14e)]('\x0a******开始【京东账号'+$[_0x30312e(0x1fb)]+'】'+($['nickName']||$[_0x30312e(0x1a3)])+'******\x0a'),await Main(),common[_0x30312e(0x1d2)]();if($[_0x30312e(0x1e9)]||$[_0x30312e(0x21c)])break;}if($[_0x30312e(0x229)][_0x30312e(0x145)]>0x0){let _0x4fd84a=_0x30312e(0x1eb)+$[_0x30312e(0x229)][_0x30312e(0x1cb)]('&')+'\x22';console[_0x30312e(0x14e)](_0x4fd84a);}if($['errOpencard']['length']>0x0){let _0x4a335c=_0x30312e(0x148)+$[_0x30312e(0x209)]['join']('&')+'\x22';console[_0x30312e(0x14e)](_0x4a335c);}isNotify&&notify[_0x30312e(0x219)]()&&(notify[_0x30312e(0x170)](_0x30312e(0x16f)+$['activityId']),await notify[_0x30312e(0x22c)]());})()['catch'](_0x2fea51=>$[_0x48fdbe(0x1f3)](_0x2fea51))[_0x48fdbe(0x174)](()=>$[_0x48fdbe(0x19d)]());async function Main(){const _0x5ad1da=_0x48fdbe;try{$['skipRun']=![],$[_0x5ad1da(0x1bf)]=![],$['jdToken']='';if($[_0x5ad1da(0x21c)]||$['outFlag'])return;$[_0x5ad1da(0x18c)]=await getToken(originCookie,$[_0x5ad1da(0x1f1)]);if(!$['jdToken']){console[_0x5ad1da(0x14e)](_0x5ad1da(0x1ce)),$[_0x5ad1da(0x1bb)][_0x5ad1da(0x169)](_0x5ad1da(0x1ee));return;}$[_0x5ad1da(0x16e)]='',await sendRequest(_0x5ad1da(0x1e8));if($[_0x5ad1da(0x1b9)]==''){console[_0x5ad1da(0x14e)]('获取[活动信息]失败，可能是黑号或者太卡了');return;}if($[_0x5ad1da(0x21c)]||$[_0x5ad1da(0x1e9)]||$[_0x5ad1da(0x1ad)])return;if(!$[_0x5ad1da(0x17b)]){$[_0x5ad1da(0x17b)]=!![];const _0x305d39=$[_0x5ad1da(0x213)]('yyyy-MM-dd\x20HH:mm',$[_0x5ad1da(0x1e0)]),_0xda3dc4=$['time'](_0x5ad1da(0x200),$[_0x5ad1da(0x191)]);console[_0x5ad1da(0x14e)](_0x5ad1da(0x158)+$['activityId']+_0x5ad1da(0x216)+_0x305d39+_0x5ad1da(0x17f)+_0xda3dc4),notify[_0x5ad1da(0x170)](_0x5ad1da(0x158)+$[_0x5ad1da(0x1c5)]+']\x0a开始时间：'+_0x305d39+_0x5ad1da(0x17f)+_0xda3dc4);const _0xc4a86b=Date['now']();if($[_0x5ad1da(0x1e0)]&&_0xc4a86b<$[_0x5ad1da(0x1e0)]){console[_0x5ad1da(0x14e)]('活动将在\x20'+_0x305d39+_0x5ad1da(0x1e6)),$[_0x5ad1da(0x1bb)][_0x5ad1da(0x169)](_0x5ad1da(0x156)+_0x305d39),$['runEnd']=!![];return;}if($[_0x5ad1da(0x191)]&&_0xc4a86b>$[_0x5ad1da(0x191)]){console[_0x5ad1da(0x14e)]('活动已于\x20'+_0xda3dc4+_0x5ad1da(0x235)),$['message'][_0x5ad1da(0x169)](_0x5ad1da(0x16c)+_0xda3dc4),$[_0x5ad1da(0x21c)]=!![];return;}}console[_0x5ad1da(0x14e)](_0x5ad1da(0x184)+$[_0x5ad1da(0x1b9)]+']\x0a');$[_0x5ad1da(0x192)]&&(await sendRequest('绑定'),await $[_0x5ad1da(0x1c6)](parseInt(waitTimes*0x1+0x64,0xa)));if($[_0x5ad1da(0x21c)]||$[_0x5ad1da(0x1e9)])return;$[_0x5ad1da(0x1ba)]='',await sendRequest(_0x5ad1da(0x1ba)),await $[_0x5ad1da(0x1c6)](parseInt(waitTimes*0x1+0x64,0xa));if($['shopList']){let _0x46a3e6=($[_0x5ad1da(0x1ba)]||[])[_0x5ad1da(0x1b3)](_0x26cdbf=>_0x26cdbf[_0x5ad1da(0x1cc)]==![]);console[_0x5ad1da(0x14e)]('共有'+$[_0x5ad1da(0x1ba)][_0x5ad1da(0x145)]+_0x5ad1da(0x20d)+_0x46a3e6['length']+'张卡');for(let _0x17745b of _0x46a3e6||[]){if(!_0x17745b[_0x5ad1da(0x1cc)]){$[_0x5ad1da(0x163)]=_0x5ad1da(0x1d7),$[_0x5ad1da(0x1bc)]=_0x17745b['openCardUrl'],$[_0x5ad1da(0x16a)]=_0x17745b[_0x5ad1da(0x16a)],$['dplhVenderId']=_0x17745b['userId'],$[_0x5ad1da(0x1df)]=common[_0x5ad1da(0x1dc)]($[_0x5ad1da(0x1bc)],_0x5ad1da(0x179));(!$['openUrl']||!/^\d+$/['test']($[_0x5ad1da(0x1df)]))&&($[_0x5ad1da(0x1df)]=_0x17745b[_0x5ad1da(0x159)]);await sendRequest('mission'),await $[_0x5ad1da(0x1c6)](parseInt(waitTimes*0x1+0x3e8,0xa));const _0x3c0414=await common['joinShopMember']($[_0x5ad1da(0x1df)]);if(_0x3c0414)console[_0x5ad1da(0x14e)]('加入['+$['shopTitle']+']店铺会员成功'),await $[_0x5ad1da(0x1c6)](parseInt(waitTimes*0x1+0x64,0xa));else{console[_0x5ad1da(0x14e)]('['+$['shopTitle']+_0x5ad1da(0x16b));break;}await sendRequest(_0x5ad1da(0x1e8)),await $[_0x5ad1da(0x1c6)](parseInt(waitTimes*0x1+0x64,0xa)),$[_0x5ad1da(0x21f)]='';}}}$[_0x5ad1da(0x151)]==0x0&&($[_0x5ad1da(0x163)]='uniteCollectShop',await sendRequest('mission'),await $[_0x5ad1da(0x1c6)](parseInt(waitTimes*0x1+0x3e8,0xa)));dplh_AddCart?$['hasAddCart']==0x0&&($[_0x5ad1da(0x163)]=_0x5ad1da(0x217),await sendRequest(_0x5ad1da(0x197)),await $[_0x5ad1da(0x1c6)](parseInt(waitTimes*0x1+0x3e8,0xa))):console[_0x5ad1da(0x14e)](_0x5ad1da(0x1e7));if(dplh_viewShop){if($['shopList'])for(let _0x4b83f4 of $['shopList']||[]){$['missionType']='viewShop',$[_0x5ad1da(0x20f)]=_0x4b83f4[_0x5ad1da(0x159)],await sendRequest(_0x5ad1da(0x197)),await $[_0x5ad1da(0x1c6)](parseInt(waitTimes*0x1+0x7d0,0xa));}}else console[_0x5ad1da(0x14e)](_0x5ad1da(0x15f));await sendRequest(_0x5ad1da(0x143)),await $[_0x5ad1da(0x1c6)](parseInt(waitTimes*0x1+0x64,0xa));if(dplh_draw!=0x0){if($['open_draw']){let _0x431411=parseInt($[_0x5ad1da(0x180)]/0xc8);if(_0x431411>dplh_draw)_0x431411=dplh_draw;console[_0x5ad1da(0x14e)]('设定抽奖次数为:'+_0x431411+_0x5ad1da(0x194)+$[_0x5ad1da(0x180)]);for(m=0x1;_0x431411--;m++){console['log']('第'+m+_0x5ad1da(0x218)),await $['wait'](parseInt(waitTimes*0x1+0xbb8,0xa)),await sendRequest('抽奖');if(Number(_0x431411)<=0x0)break;if(m>=0xa){console[_0x5ad1da(0x14e)](_0x5ad1da(0x1c7));break;}await $['wait'](parseInt(waitTimes*0x1+0xbb8,0xa));}}}console['log'](_0x5ad1da(0x150)+($[_0x5ad1da(0x192)]||_0x5ad1da(0x18d))+']'),$[_0x5ad1da(0x1fb)]==0x1&&($[_0x5ad1da(0x192)]=$[_0x5ad1da(0x1b9)],console[_0x5ad1da(0x14e)](_0x5ad1da(0x1b2)+$[_0x5ad1da(0x192)]+']')),await $[_0x5ad1da(0x1c6)](parseInt(waitTimes*0x1+0x64,0xa));}catch(_0x22f641){console[_0x5ad1da(0x14e)](_0x5ad1da(0x1d8)+_0x22f641);}}async function handleResponse(_0xb91103,_0x2a5e56){const _0x220852=_0x48fdbe;try{switch(_0xb91103){case _0x220852(0x1e8):if(_0x2a5e56[_0x220852(0x18a)]&&_0x2a5e56[_0x220852(0x17d)]?.[_0x220852(0x240)]==0xc8){$[_0x220852(0x16e)]=_0x2a5e56?.[_0x220852(0x17d)]?.[_0x220852(0x17d)],$['startTime']=$[_0x220852(0x16e)]?.['cusActivity']?.[_0x220852(0x1e0)],$[_0x220852(0x191)]=$[_0x220852(0x16e)]?.['cusActivity']?.['endTime'],$[_0x220852(0x230)]=$[_0x220852(0x16e)]?.['cusActivity']?.[_0x220852(0x230)],$[_0x220852(0x1b9)]=$[_0x220852(0x16e)]?.[_0x220852(0x210)]?.[_0x220852(0x187)],$[_0x220852(0x155)]=$[_0x220852(0x16e)]?.[_0x220852(0x210)]?.['totalChance'],$['usedChance']=$[_0x220852(0x16e)]?.[_0x220852(0x210)]?.['usedChance'],$[_0x220852(0x224)]=$[_0x220852(0x16e)]?.['missionCustomer']?.['remainChance'],$[_0x220852(0x221)]=$[_0x220852(0x16e)]?.['missionCustomer']?.[_0x220852(0x221)],$[_0x220852(0x204)]=$[_0x220852(0x16e)]?.['missionCustomer']?.[_0x220852(0x204)],$[_0x220852(0x180)]=$[_0x220852(0x16e)]?.[_0x220852(0x210)]?.['remainPoint'],$[_0x220852(0x151)]=$[_0x220852(0x16e)]?.[_0x220852(0x210)]?.['hasCollectShop'],$[_0x220852(0x177)]=$[_0x220852(0x16e)]?.[_0x220852(0x210)]?.[_0x220852(0x177)],$['openCardStatus']=$['activityload']?.[_0x220852(0x1f0)]||![],$[_0x220852(0x201)]=$[_0x220852(0x16e)]?.[_0x220852(0x201)]||![];if($[_0x220852(0x16e)]?.[_0x220852(0x1d5)])console['log']($[_0x220852(0x16e)]?.[_0x220852(0x1d5)]);}else _0x2a5e56[_0x220852(0x17d)]?.['status']==0x1f4?(console[_0x220852(0x14e)](''+_0x2a5e56[_0x220852(0x1f8)]),$[_0x220852(0x229)]['push']($['UserName']),$['message'][_0x220852(0x169)](''+_0x2a5e56[_0x220852(0x1f8)]),$[_0x220852(0x1ad)]=!![]):console['log']('❓'+_0xb91103+'\x20'+JSON[_0x220852(0x1cd)](_0x2a5e56));break;case'绑定':if(_0x2a5e56[_0x220852(0x18a)]&&_0x2a5e56[_0x220852(0x17d)]?.[_0x220852(0x240)]==0xc8)console['log'](''+_0x2a5e56['data']?.[_0x220852(0x1f5)]);else _0x2a5e56[_0x220852(0x17d)]?.['status']==0x1f4?(console['log'](''+_0x2a5e56[_0x220852(0x1f8)]),['结束','开始']['some'](_0x4d3c31=>_0x2a5e56[_0x220852(0x1f8)][_0x220852(0x23e)](_0x4d3c31))&&($[_0x220852(0x21c)]=!![])):console['log']('❓'+_0xb91103+'\x20'+JSON[_0x220852(0x1cd)](_0x2a5e56));break;case'shopList':if(_0x2a5e56['success']&&_0x2a5e56[_0x220852(0x17d)]?.[_0x220852(0x240)]==0xc8)$['shopList']=_0x2a5e56?.[_0x220852(0x17d)]?.[_0x220852(0x17d)]||[];else _0x2a5e56['data']?.[_0x220852(0x240)]==0x1f4?console[_0x220852(0x14e)](''+_0x2a5e56[_0x220852(0x1f8)]):console['log']('❓'+_0xb91103+'\x20'+JSON['stringify'](_0x2a5e56));break;case _0x220852(0x197):if(_0x2a5e56[_0x220852(0x18a)]&&_0x2a5e56[_0x220852(0x17d)]?.[_0x220852(0x240)]==0xc8)$[_0x220852(0x197)]=_0x2a5e56?.[_0x220852(0x17d)]?.['data'],console['log'](''+(_0x2a5e56[_0x220852(0x1f5)]||$['mission']?.[_0x220852(0x14a)]||'')),$[_0x220852(0x1bb)][_0x220852(0x169)](''+(_0x2a5e56['msg']||$[_0x220852(0x197)]?.['remark']||''));else _0x2a5e56[_0x220852(0x17d)]?.[_0x220852(0x240)]==0x1f4?console[_0x220852(0x14e)](''+_0x2a5e56[_0x220852(0x1f8)]):console['log']('❓'+_0xb91103+'\x20'+JSON[_0x220852(0x1cd)](_0x2a5e56));break;case _0x220852(0x15d):if(_0x2a5e56[_0x220852(0x18a)]&&_0x2a5e56['data']?.[_0x220852(0x240)]==0xc8)$[_0x220852(0x15d)]=_0x2a5e56?.[_0x220852(0x17d)]?.[_0x220852(0x17d)]?.[_0x220852(0x1a8)];else _0x2a5e56['data']?.[_0x220852(0x240)]==0x1f4?console['log'](''+_0x2a5e56['errorMessage']):console['log']('❓'+_0xb91103+'\x20'+JSON[_0x220852(0x1cd)](_0x2a5e56));break;case'exchangePost':if(_0x2a5e56[_0x220852(0x18a)]&&_0x2a5e56[_0x220852(0x17d)]?.['status']==0xc8){$['exchangesuccess']=!![],$[_0x220852(0x1b1)]=_0x2a5e56?.[_0x220852(0x17d)]?.['data'];let _0x46e500=$[_0x220852(0x1b1)]?.[_0x220852(0x166)],_0x587bea=_0x46e500?.['awardType'];switch(_0x587bea){case _0x220852(0x1e3):console['log'](_0x220852(0x1f9)+_0x46e500?.[_0x220852(0x1b8)]+_0x220852(0x18e)),$[_0x220852(0x1bb)][_0x220852(0x169)](_0x220852(0x1f9)+_0x46e500?.['awardName']+_0x220852(0x18e));break;case _0x220852(0x1c9):case _0x220852(0x14f):console[_0x220852(0x14e)](_0x220852(0x1ae)+_0x46e500?.[_0x220852(0x1b8)]+'\x20\x20🎟️'),$['message'][_0x220852(0x169)](_0x220852(0x1ae)+_0x46e500?.[_0x220852(0x1b8)]+_0x220852(0x227));break;case _0x220852(0x22f):$['generateId']=_0x46e500?.['id'],$['prizeShiWu']=_0x46e500?.[_0x220852(0x1b8)],console['log'](_0x220852(0x225)),console[_0x220852(0x14e)](_0x220852(0x23f)+$[_0x220852(0x14b)]);if(_0x46e500?.[_0x220852(0x17c)])console[_0x220852(0x14e)](_0x220852(0x1f4)+_0x46e500?.['awardPic']);$[_0x220852(0x1bb)][_0x220852(0x169)](_0x220852(0x181)+$[_0x220852(0x14b)]);process[_0x220852(0x1ab)][_0x220852(0x185)]&&(await sendRequest('updateAddress'),await $['wait'](0xfa0));break;case _0x220852(0x203):case _0x220852(0x223):case'coupon':case _0x220852(0x1f7):case'card':console[_0x220852(0x14e)](_0x220852(0x1ae)+prize_type[prizeType]);break;default:console['log'](_0x587bea+_0x220852(0x171)),console['log'](''+JSON[_0x220852(0x1cd)]($['exchangePost']));}}else _0x2a5e56[_0x220852(0x17d)]?.[_0x220852(0x240)]==0x1f4?console[_0x220852(0x14e)](''+_0x2a5e56[_0x220852(0x1f8)]):console[_0x220852(0x14e)]('❓'+_0xb91103+'\x20'+JSON[_0x220852(0x1cd)](_0x2a5e56));break;case _0x220852(0x175):if(_0x2a5e56[_0x220852(0x18a)]&&_0x2a5e56[_0x220852(0x17d)]?.['status']==0xc8)$[_0x220852(0x175)]=_0x2a5e56?.[_0x220852(0x17d)]?.[_0x220852(0x17d)];else _0x2a5e56[_0x220852(0x17d)]?.[_0x220852(0x240)]==0x1f4?console[_0x220852(0x14e)](''+_0x2a5e56[_0x220852(0x1f8)]):console['log']('❓'+_0xb91103+'\x20'+JSON[_0x220852(0x1cd)](_0x2a5e56));break;case _0x220852(0x143):if(_0x2a5e56[_0x220852(0x18a)]&&_0x2a5e56['data']?.[_0x220852(0x240)]==0xc8){let _0x9231a0=0x0;for(let _0x204f02 in _0x2a5e56[_0x220852(0x17d)][_0x220852(0x17d)][_0x220852(0x143)]||[]){let _0x26d4da=_0x2a5e56[_0x220852(0x17d)]['data'][_0x220852(0x143)][_0x204f02];_0x9231a0+=Number(_0x26d4da[_0x220852(0x1be)]);}if(_0x9231a0>0x0)console[_0x220852(0x14e)](_0x220852(0x220)+_0x9231a0+'京豆\x0a');}else _0x2a5e56[_0x220852(0x17d)]?.[_0x220852(0x240)]==0x1f4?console[_0x220852(0x14e)](''+_0x2a5e56[_0x220852(0x1f8)]):console[_0x220852(0x14e)]('❓'+_0xb91103+'\x20'+JSON[_0x220852(0x1cd)](_0x2a5e56));break;case _0x220852(0x199):if(_0x2a5e56[_0x220852(0x18a)]&&_0x2a5e56['data']?.['status']==0xc8)_0x2a5e56?.[_0x220852(0x17d)]?.[_0x220852(0x17d)]?.[_0x220852(0x207)]?(console[_0x220852(0x14e)](_0x220852(0x1d9)+($[_0x220852(0x19f)]+0x1)+_0x220852(0x1ef)+$['receiver']+'\x20('+$['phone'][_0x220852(0x168)](/^(\d{3})\d{4}(\d{4})$/,_0x220852(0x173))+'）\x0a'),!isNotify&&await notify[_0x220852(0x1c1)]($['name']+'中奖通知',_0x220852(0x1b7)+$[_0x220852(0x1fb)]+'】'+$['nickName']+_0x220852(0x23d)+$[_0x220852(0x14b)]+_0x220852(0x183)+$[_0x220852(0x1c5)]),$[_0x220852(0x1bb)][_0x220852(0x211)]($[_0x220852(0x14b)]+_0x220852(0x233))):console['log'](_0x2a5e56[_0x220852(0x17d)][_0x220852(0x17d)]);else _0x2a5e56['data']?.[_0x220852(0x240)]==0x1f4?console[_0x220852(0x14e)](''+_0x2a5e56[_0x220852(0x1f8)]):console[_0x220852(0x14e)]('❓'+_0xb91103+'\x20'+JSON['stringify'](_0x2a5e56));break;case'抽奖':console['log']('❓'+_0xb91103+'\x20'+JSON[_0x220852(0x1cd)](_0x2a5e56));if(_0x2a5e56[_0x220852(0x18a)]&&_0x2a5e56[_0x220852(0x17d)]?.[_0x220852(0x240)]==0xc8){$[_0x220852(0x205)]=_0x2a5e56?.[_0x220852(0x17d)]?.[_0x220852(0x17d)];let _0x9f13e0=$['dplhdraw']?.[_0x220852(0x166)],_0x4d56c9=_0x9f13e0?.[_0x220852(0x22b)];switch(_0x4d56c9){case _0x220852(0x1e3):console['log']('🎉\x20'+_0x9f13e0?.[_0x220852(0x1b8)]+_0x220852(0x18e)),$[_0x220852(0x1bb)]['fix'](_0x220852(0x1f9)+_0x9f13e0?.[_0x220852(0x1b8)]+'\x20🐶');break;case _0x220852(0x1c9):case _0x220852(0x14f):console[_0x220852(0x14e)](_0x220852(0x1ae)+_0x9f13e0?.[_0x220852(0x1b8)]+_0x220852(0x227)),$[_0x220852(0x1bb)]['fix'](_0x220852(0x1ae)+_0x9f13e0?.[_0x220852(0x1b8)]+_0x220852(0x227));break;case _0x220852(0x22f):$[_0x220852(0x161)]=_0x9f13e0?.['id'],$['prizeShiWu']=_0x9f13e0?.[_0x220852(0x1b8)],console[_0x220852(0x14e)](_0x220852(0x225)),console[_0x220852(0x14e)]('奖品名称：'+$[_0x220852(0x14b)]);if(_0x9f13e0?.['awardPic'])console['log'](_0x220852(0x1f4)+_0x9f13e0?.[_0x220852(0x17c)]);$[_0x220852(0x1bb)][_0x220852(0x169)]('🎉\x20恭喜获得实物，奖品名称：'+$[_0x220852(0x14b)]);process[_0x220852(0x1ab)][_0x220852(0x185)]&&(await sendRequest(_0x220852(0x199)),await $[_0x220852(0x1c6)](0xfa0));break;case _0x220852(0x203):case'product':case _0x220852(0x154):case'chance':case'card':console[_0x220852(0x14e)]('🗑️\x20'+prize_type[_0x4d56c9]);break;default:console[_0x220852(0x14e)](_0x4d56c9+_0x220852(0x171)),console[_0x220852(0x14e)](''+JSON[_0x220852(0x1cd)]($['exchangePost']));}}else _0x2a5e56[_0x220852(0x17d)]?.[_0x220852(0x240)]==0x1f4?console[_0x220852(0x14e)](''+_0x2a5e56[_0x220852(0x1f8)]):console[_0x220852(0x14e)]('❓'+_0xb91103+'\x20'+JSON[_0x220852(0x1cd)](_0x2a5e56));break;}}catch(_0x1dc71d){console[_0x220852(0x14e)](_0x220852(0x226)+_0xb91103+_0x220852(0x19b)+(_0x1dc71d['message']||_0x1dc71d));}}function _0x572e(){const _0x4b9d71=['log','integral','当前助力:[','hasCollectShop','split','dataType','coupon','totalChance','活动尚未开始，开始时间：','Cookie','活动名称：#联合开卡[','userId','admJson','XMLHttpRequest','2154288YYBHJe','getAwardSettingList','/jdJoinCardtf/mission/completeMission','未设置浏览任务变量，不执行浏览任务\x0a','indexOf','generateId','\x20请求失败\x20➜\x20','missionType','jd_dplh_blacklist','application/json','awardSendLog','/dm/front/jdJoinCardtf/awards/updateAddress','replace','fix','shopTitle',']店铺开卡失败,跳过执行~','活动已结束，结束时间：','jd_dplh_break','activityload','\x0a【活动ID】','appendContent','\x20暂时未收录，请联系作者添加\x0a','params','$1****$2','finally','inviteList','/jdJoinCardtf/awards/getAwardSettingList','hasAddCart','keep-alive','venderId','error','hasGetBasicInfo','awardPic','data','true','\x0a结束时间：','remainPoint','🎉\x20恭喜获得实物，奖品名称：','jd_dplh_url','，已成功自动登记收货地址\x0a\x0a活动ID：','账号活动信息：\x0a助力码：[','WX_ADDRESS','province','buyerNick','/jdJoinCardtf/customer/inviteList','==========','success','825495Bjchii','jdToken','未获取到数据','\x20🐶','420EHluSB','./utils/Rebels_sendJDNotify','endTime','inviteNick','1642260LsLVuP','，当前积分：','sign','/dm/front/jdJoinCardtf/mission/completeMission','mission','IP限制后继续执行:\x20[','updateAddress','20SbFtLi','\x20请求响应\x20','6cc5dbd8900e434b94c4bdb0c16348ed','done','10299171','randNum','genUA','actId','⚠\x20请先定义必要的环境变量后再运行脚本','UserName','变量状态结束==========','【提示】请先获取Cookie','122754Njquoy','12029292fiFQaC','awardSettings','headers','zh-cn','env','jd_dplh_wait','skipRun','🗑️\x20','/dm/front/jdJoinCardtf/customer/inviteRelation','[积分]','exchangePost','后面都助力:[','filter','application/x-www-form-urlencoded','crypto-js',']运行间隔时长','【京东账号','awardName','MixNick','shopList','message','openUrl','from','awardDes','open_draw','🚫\x20','sendNotify','config','application/json;\x20charset=utf-8','map','activityId','wait','抽奖太多次，多余的次数请再执行脚本','valueOf','point','2.0','join','open','stringify','获取\x20Token\x20失败！','getProxyStatus','❌\x20随机抽取到的收货地址信息为空，请正确使用\x20\x22|\x22\x20管道符以用于分割多个收货地址！\x0a','authorCode','unsetCookie','10watwlA','/jdJoinCardtf/customer/inviteRelation','openCardMsg','phone','openCard','❌\x20脚本运行遇到了错误\x0a','已提交收货地址\x20✅\x0a登记为随机抽取到的第','request','%27','getUrlParameter','missionInviteList','address','joinVenderId','startTime','https://','加购任务:\x20[','jdMarket','73672dvUcqz','MD5','\x20开始，晚点再来吧~','未设置加购任务变量，不执行加购任务\x0a','activity_load','outFlag','floor','\x0a以下账号可能是火爆，请加入黑名单\x0aexport\x20jd_dplh_blacklist=\x22','match','city','获取[Token]失败','套收货地址信息\x0a联系信息：','openCardStatus','baseUrl','activityUrl','logErr','预览图片：','msg','[广告]','chance','errorMessage','🎉\x20','/jdJoinCardtf/interactive/drawPost','index','10fSyiME','draw','[卡片]','6946767IQVTdp','yyyy-MM-dd\x20HH:mm','isGetRankGoods','POST','coin','usedPoint','dplhdraw','name','result','jd_dplh_Notify','errOpencard','blacklist','[优惠券]','⚠\x20请填写格式正确的变量','张卡,还需开','/dm/front/jdJoinCardtf/activity/load','goodsNumId','missionCustomer','insert','pt_pin','time','jd_dplh_draw','random',']\x0a开始时间：','uniteAddCart','次抽奖','getMessage','timeStamp','county','runEnd','/dm/front/jdJoinCardtf/awards/list','/jdJoinCardtf/activity/load','dplhVenderId','查询奖励成功，累计获得','totalPoint','https://jinggengjcq-isv.isvjcloud.com','product','remainChance','🎉\x20恭喜获得实物~','❌\x20未能正确处理\x20','\x20\x20🎟️','GET','errMsgPin','变量开启状态==========','awardType','push','http://code.257999.xyz/jd_dplh.json','assign','goods','awardTime','/jdJoinCardtf/awards/updateAddress','[金币]','(已填地址)🎁','Content-Type','\x20结束，下次早点来吧~','exit','hostname','/dm/front/jdJoinCardtf/shop/shopList','jinggengjcq-isv.isvjcloud.com','awardId','splice','actId=','\x0a抽中实物\x20','includes','奖品名称：','status','./jdCookie','Mozilla/5.0\x20(iPhone;\x20CPU\x20iPhone\x20OS\x2013_2_3\x20like\x20Mac\x20OS\x20X)\x20AppleWebKit/605.1.15\x20(KHTML,\x20like\x20Gecko)\x20Version/13.0.3\x20Mobile/15E148\x20Safari/604.1\x20Edg/87.0.4280.88','list','\x20请求失败\x20➜\x20无响应数据','length','toLowerCase','receiver','\x0a以下账号开卡火爆，请自行决定是否加入黑名单\x0a\x22','\x0a服务状态异常，请检查网络是否正常\x0a','remark','prizeShiWu','/dm/front/jdJoinCardtf/awards/getAwardSettingList','/dm/front/jdJoinCardtf/customer/inviteList'];_0x572e=function(){return _0x4b9d71;};return _0x572e();}async function sendRequest(_0x5beedb){const _0x112789=_0x48fdbe;if($['runEnd']||$['outFlag'])return;let _0x19230d=$[_0x112789(0x1f1)],_0x2d1052=null,_0x1f3cc2=null,_0x187052=_0x112789(0x202);switch(_0x5beedb){case _0x112789(0x1e8):_0x19230d+=_0x112789(0x20e),_0x1f3cc2={'open_id':'','mix_nick':$[_0x112789(0x1b9)]||'','user_id':$[_0x112789(0x159)]},_0x2d1052=getSignBody(_0x112789(0x21e),Object['assign']({'jdToken':$[_0x112789(0x18c)],'source':'01','inviteNick':$['inviteNick']||''},$['dplhVenderId']?{'shopId':''+$[_0x112789(0x21f)]}:{}));break;case'shopList':_0x19230d+=_0x112789(0x238),_0x1f3cc2={'open_id':'','mix_nick':$[_0x112789(0x1b9)]||'','user_id':$[_0x112789(0x159)]},_0x2d1052=getSignBody('/jdJoinCardtf/shop/shopList',{});break;case'绑定':_0x19230d+=_0x112789(0x1af),_0x1f3cc2={'open_id':'','mix_nick':$[_0x112789(0x1b9)]||'','user_id':$[_0x112789(0x159)]},_0x2d1052=getSignBody(_0x112789(0x1d4),{'inviterNick':$[_0x112789(0x192)]||''});break;case'mission':_0x19230d+=_0x112789(0x196),_0x1f3cc2={'open_id':'','mix_nick':$[_0x112789(0x1b9)]||'','user_id':$['userId']},_0x2d1052=getSignBody(_0x112789(0x15e),Object[_0x112789(0x22e)]({'missionType':$['missionType']},$[_0x112789(0x21f)]?{'shopId':$[_0x112789(0x21f)]}:{},$[_0x112789(0x20f)]?{'goodsNumId':$[_0x112789(0x20f)]}:{}));break;case _0x112789(0x15d):_0x19230d+=_0x112789(0x14c),_0x1f3cc2={'open_id':'','mix_nick':$[_0x112789(0x1b9)]||'','user_id':$[_0x112789(0x159)]},_0x2d1052=getSignBody(_0x112789(0x176),{'dataType':$[_0x112789(0x153)]});break;case'exchangePost':_0x19230d+='/dm/front/jdJoinCardtf/interactive/exchangePost',_0x1f3cc2={'open_id':'','mix_nick':$['MixNick']||'','user_id':$[_0x112789(0x159)]},_0x2d1052=getSignBody('/jdJoinCardtf/interactive/exchangePost',{'dataType':$['dataType'],'awardId':$[_0x112789(0x23a)]});break;case'抽奖':_0x19230d+='/dm/front/jdJoinCardtf/interactive/drawPost',_0x1f3cc2={'open_id':'','mix_nick':$[_0x112789(0x1b9)]||'','user_id':$[_0x112789(0x159)]},_0x2d1052=getSignBody(_0x112789(0x1fa),{'dataType':_0x112789(0x1fd),'usedGameNum':'2'});break;case'updateAddress':_0x19230d+=_0x112789(0x167),_0x1f3cc2={'open_id':'','mix_nick':$[_0x112789(0x1b9)]||'','user_id':$[_0x112789(0x159)]},_0x2d1052=getSignBody(_0x112789(0x231),{'receiverName':$[_0x112789(0x147)],'receiverMobile':$[_0x112789(0x1d6)],'receiverProvince':$[_0x112789(0x186)],'receiverCity':$[_0x112789(0x1ed)],'receiverDistrict':$['county'],'receiverAddress':$['address'],'logId':$['generateId']});break;case _0x112789(0x175):_0x19230d+=_0x112789(0x14d),_0x1f3cc2={'open_id':'','mix_nick':$[_0x112789(0x1b9)]||'','bizExtString':'','user_id':$['userId']},_0x2d1052=getSignBody(_0x112789(0x188),{});break;case _0x112789(0x143):_0x19230d+=_0x112789(0x21d),_0x1f3cc2={'open_id':'','mix_nick':$[_0x112789(0x1b9)]||'','bizExtString':'','user_id':$['userId']},_0x2d1052=getSignBody('/jdJoinCardtf/awards/list',{'pageNo':0x1,'pageSize':0x270f});break;default:console[_0x112789(0x14e)]('❌\x20未知请求\x20'+_0x5beedb);return;}const _0x1808e7={};_0x2d1052&&Object['assign'](_0x2d1052,_0x1808e7);_0x1f3cc2&&Object[_0x112789(0x22e)](_0x1f3cc2,_0x1808e7);const _0x57c1a0={'url':_0x19230d,'method':_0x187052,'headers':{'Accept':_0x112789(0x165),'Accept-Encoding':'gzip,\x20deflate,\x20br','Accept-Language':_0x112789(0x1aa),'Connection':_0x112789(0x178),'Content-Type':_0x112789(0x1b4),'Cookie':cookie,'User-Agent':$['UA'],'X-Requested-With':_0x112789(0x15b)},'params':_0x1f3cc2,'data':_0x2d1052,'timeout':0x7530};_0x187052===_0x112789(0x228)&&(delete _0x57c1a0[_0x112789(0x17d)],delete _0x57c1a0['headers'][_0x112789(0x234)]);$[_0x112789(0x1f1)][_0x112789(0x23e)](_0x112789(0x239))&&(Object['assign'](_0x57c1a0[_0x112789(0x1a9)],{'Origin':_0x112789(0x222),'Content-Type':_0x112789(0x1c3)}),delete _0x57c1a0[_0x112789(0x1a9)][_0x112789(0x157)]);const _0x22cf59=0x5;let _0x214070=0x0,_0x56b0e9=null,_0x2d9db6=![];while(_0x214070<_0x22cf59){_0x214070>0x0&&await $[_0x112789(0x1c6)](0x3e8);const _0x1a1b67=await common['request'](_0x57c1a0);if(!_0x1a1b67['success']){_0x56b0e9='🚫\x20'+_0x5beedb+_0x112789(0x162)+_0x1a1b67[_0x112789(0x17a)],_0x214070++;continue;}if(!_0x1a1b67[_0x112789(0x17d)]){_0x56b0e9=_0x112789(0x1c0)+_0x5beedb+_0x112789(0x144),_0x214070++;continue;}await handleResponse(_0x5beedb,_0x1a1b67[_0x112789(0x17d)]),_0x2d9db6=![];break;}_0x214070>=_0x22cf59&&(console[_0x112789(0x14e)](_0x56b0e9),_0x2d9db6&&(!hotbreak&&($[_0x112789(0x1e9)]=!![],$[_0x112789(0x1bb)]&&$['message'][_0x112789(0x169)](_0x56b0e9))));}function getSignBody(_0x4325b8,_0x37dbee){const _0xcf9eb9=_0x48fdbe,_0x3ff32e=mpdzSign({'actId':$[_0xcf9eb9(0x1c5)],..._0x37dbee,'method':_0x4325b8,'userId':$[_0xcf9eb9(0x159)],'buyerNick':$[_0xcf9eb9(0x1b9)]||''}),_0x3b5a05={'jsonRpc':_0xcf9eb9(0x1ca),'params':{'commonParameter':{'m':_0xcf9eb9(0x202),'oba':_0x3ff32e[_0xcf9eb9(0x195)],'timestamp':_0x3ff32e[_0xcf9eb9(0x21a)],'userId':$['userId']},'admJson':{'actId':$[_0xcf9eb9(0x1c5)],..._0x37dbee,'method':_0x4325b8,'userId':$['userId'],'buyerNick':$[_0xcf9eb9(0x1b9)]||''}}};return _0x4325b8[_0xcf9eb9(0x160)](_0xcf9eb9(0x1dd))>-0x1&&delete _0x3b5a05[_0xcf9eb9(0x172)][_0xcf9eb9(0x15a)][_0xcf9eb9(0x1a1)],_0x3b5a05;}function mpdzSign(_0x4c7e4f){const _0x36ae1f=_0x48fdbe,_0x113134=_0x36ae1f(0x19c),_0x9a31fc='c1614da9ac68',_0x4f3eb8=new Date()[_0x36ae1f(0x1c8)](),_0x114d5f=new RegExp('\x27','g'),_0xf8889c=new RegExp('~','g'),_0x578ef3=encodeURIComponent(JSON[_0x36ae1f(0x1cd)](_0x4c7e4f))['replace'](_0x114d5f,_0x36ae1f(0x1db))[_0x36ae1f(0x168)](_0xf8889c,'%7E'),_0x17a70a='f'+_0x9a31fc+'D'+_0x578ef3+'c'+_0x4f3eb8+_0x113134,_0x3016f0=CryptoJS[_0x36ae1f(0x1e5)](_0x17a70a[_0x36ae1f(0x146)]())['toString']();return{'sign':_0x3016f0,'timeStamp':_0x4f3eb8};}async function getAuthorCodeList(_0x37e9c0){const _0x2429d5=_0x48fdbe,_0x3579ed=await common[_0x2429d5(0x1da)]({'url':_0x37e9c0,'method':'GET','headers':{'User-Agent':_0x2429d5(0x142)},'proxy':null,'debug':![],'timeout':0x7530}),_0x5833bc=_0x3579ed[_0x2429d5(0x17d)];return _0x5833bc;}function random(_0x53880b,_0x44db96){const _0x4ff7f0=_0x48fdbe;return Math[_0x4ff7f0(0x1ea)](Math[_0x4ff7f0(0x215)]()*(_0x44db96-_0x53880b))+_0x53880b;}function getBlacklist(){const _0x990386=_0x48fdbe;if($[_0x990386(0x20a)]=='')return;console[_0x990386(0x14e)]('当前已设置黑名单：');const _0x4904e4=Array[_0x990386(0x1bd)](new Set($['blacklist'][_0x990386(0x152)]('&')));console[_0x990386(0x14e)](_0x4904e4['join']('&')+'\x0a');let _0x2c73b7=_0x4904e4,_0x401974=[],_0xf574c7=![];for(let _0x5b308c=0x0;_0x5b308c<cookiesArr[_0x990386(0x145)];_0x5b308c++){let _0xb66291=decodeURIComponent(cookiesArr[_0x5b308c][_0x990386(0x1ec)](/pt_pin=([^; ]+)(?=;?)/)&&cookiesArr[_0x5b308c][_0x990386(0x1ec)](/pt_pin=([^; ]+)(?=;?)/)[0x1]||'');if(!_0xb66291)break;let _0x524b09=![];for(let _0x303903 of _0x2c73b7){if(_0x303903&&_0x303903==_0xb66291){_0x524b09=!![];break;}}!_0x524b09&&(_0xf574c7=!![],_0x401974[_0x990386(0x23b)](_0x5b308c,-0x1,cookiesArr[_0x5b308c]));}if(_0xf574c7)cookiesArr=_0x401974;}

// prettier-ignore
function Env(t,e){"undefined"!=typeof process&&JSON.stringify(process.env).indexOf("GITHUB")>-1&&process.exit(0);class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`🔔${this.name}, 开始!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),n={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(n,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)})):this.isQuanX()?(this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t))):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();s&&this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)}))}post(t,e=(()=>{})){if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.post(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method="POST",this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){this.initGotEnv(t);const{url:s,...i}=t;this.got.post(s,i).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)})}}time(t,e=null){const s=e?new Date(e):new Date;let i={"M+":s.getMonth()+1,"d+":s.getDate(),"H+":s.getHours(),"m+":s.getMinutes(),"s+":s.getSeconds(),"q+":Math.floor((s.getMonth()+3)/3),S:s.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(s.getFullYear()+"").substr(4-RegExp.$1.length)));for(let e in i)new RegExp("("+e+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?i[e]:("00"+i[e]).substr((""+i[e]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};if(this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r))),!this.isMuteLog){let t=["","==============📣系统通知📣=============="];t.push(e),s&&t.push(s),i&&t.push(i),console.log(t.join("\n")),this.logs=this.logs.concat(t)}}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`❗️${this.name}, 错误!`,t.stack):this.log("",`❗️${this.name}, 错误!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`🔔${this.name}, 结束! 🕛 ${s} 秒`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}
