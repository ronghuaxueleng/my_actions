/*
当日收支查询
环境变量：jd_querryBeans_notify // 是否推送通知（true/false），默认不推送

cron:1 1 1 1 *

*/

const $ = new Env('当日收支查询')
const _0x3cf638=_0x49c1;(function(_0x5826c4,_0x100305){const _0x393c89=_0x49c1,_0x3b945a=_0x5826c4();while(!![]){try{const _0x4480b0=-parseInt(_0x393c89(0x217,'qrO5'))/0x1*(-parseInt(_0x393c89(0x1f8,'NPGM'))/0x2)+parseInt(_0x393c89(0x196,'@pKP'))/0x3+-parseInt(_0x393c89(0x1ab,'loc5'))/0x4+-parseInt(_0x393c89(0x1ba,'tj@w'))/0x5+parseInt(_0x393c89(0x1c0,'jXT('))/0x6*(parseInt(_0x393c89(0x1dc,'Do!2'))/0x7)+-parseInt(_0x393c89(0x1e2,'7z)#'))/0x8*(-parseInt(_0x393c89(0x1ea,'l2DZ'))/0x9)+-parseInt(_0x393c89(0x19f,'z(GV'))/0xa;if(_0x4480b0===_0x100305)break;else _0x3b945a['push'](_0x3b945a['shift']());}catch(_0x44c492){_0x3b945a['push'](_0x3b945a['shift']());}}}(_0x5e04,0x4115d));const jdCookie=require(_0x3cf638(0x19c,'tj@w')),notify=require(_0x3cf638(0x1f0,'#[T5')),common=require(_0x3cf638(0x1ad,'da1W')),isNotify=process[_0x3cf638(0x1e4,'YNXN')]['jd_querryBeans_notify']===_0x3cf638(0x1b9,'IEw$'),todayString=$['time'](_0x3cf638(0x1f3,'!(oy'),Date['now']());let cookie='';const cookiesArr=Object[_0x3cf638(0x218,'z(GV')](jdCookie)['map'](_0x313ad7=>jdCookie[_0x313ad7])[_0x3cf638(0x1b7,'[5*C')](_0x13c269=>_0x13c269);!cookiesArr[0x0]&&($[_0x3cf638(0x21e,'0$0@')]($[_0x3cf638(0x1f6,'t@$d')],'【提示】请先获取Cookie'),process[_0x3cf638(0x1af,'BQ!Z')](0x1));function _0x5e04(){const _0x448b75=['W4HtWRiU','WPNcH8ozW7BcHuVdTtCCWRTr','uuHpv8kjWOj6','WRBdHGhcKW','WRxORPpMS5JLKipLU5dcVq','wHawWRNdIGO','sXGtWRK','WOtcHepcSa','WP8fW6nZrfP3EmkiltvU','WPhdHCkh','WOvdWQhdKCkcW4VcUG','pmoPtmkRcL8','n8oPtmkzpW','W5RdMSkDWQNdLMhdQq','W4DNWPxcNHtdMeZcQIH7','ogtdNSoluSkpW51JdW','nmoTvSkP','W77KUi3OSyJdNFgcOOldM+s4TEAuUEAcToAwR+weU+++KG','W6pdU8oTWQRcNwRdPG','WQPMiKpcRSkYyfvp','W7efW67cRW','ySoSWRBdJmkLFSoW','WPxcGfpcU3miW6KyWOjnW7X6','WPJcK1FcSwi3W7S','q1bdqCkcWOu','qmkGBcyLh8klmConvmkmFNbq','AqOFWR/dOrNcJvK','WQBdMay','rcFcUqGTaJ3cSmkUhG','iN7dImohra','WOHIhmkW','w8kdCHW','ch/dGSowwCkgW4aOiSkhnmkW','nCojW5ZdICkIlCk5eYuIWOzSWODK','jCoTWPddQmk/W5P9iq','5P+05P256k+05yU95lQD5Pwf5lIZ6lgG5y++5yI45PMv57It5PsB5O+z77605B+L5yYK5y2z5lUl5REh5yU36i6u5y+r5zgica','WP1HlaHnz2m','oWVcHSkLqvhdPW','8lE6N8kO','WP41W7xdRq','5lU16lk/WRVWS5on','qsFcRcSmfdRcSmkGfW','W4ZcVvBcI2RcVeBdRCkhW5C','4P+xW4hMNjROGARMRO7NOiVLPi3NKzFcNG','idi3WO0SW6ZdHCk2','gs41','W6VOR6NMSRtLPi7OTzVdIEkFRCkm','oSoQuSoHA0tcON8','DSoGxwWllIRcJte','5lMo6lc5rVcxSy0','WPNcNmk4','WRH7WOj8eCkggSofW5C','lt5y','4P+VW5/MNQ7NNBBORlJMSRZdKW','W6iecmkdnW','W4hdJeGGW7JdQmkI','W6pdRCotWOJcUJ/dLvVcJCo8WPm','W7hcIf7dSmkPah0WW5DwC8oFWQFdRG','Fv7dHmo5fWdcSSopCe/dLCkdWRy','W6FdSmo6WRZcHa','W6/cQsxdTg7cLmkNvfpdTqhcVsa','l3hdMmod','WQ9kcCkunKegWRZcNaJdMSkSFmk3udH/WQ/dJmk4dricW6GwBxa','WOvQlb5yq2NdTCk6FNm','E8o8x2FdJXNcISoVisZcICkS','xSk8yrnNnCkVCSo6ra','WOrHla8','6lsb5yYY5PE45PsI','n8kyW7BdLq','jmkPW7S','W5RdTmk3WRqLxSk6WQWUW7ZdVW','WQVdHXhcJumYeZnwW5tcH8othSoXsCkRWOjzoq/cPCkJe8ohpedcUSk3WRiHtGSZ','mmkxW7/dLCkd','WPhdOqi','nmkGcK8dirVcSbaQea','WPBcMutcKgyMW6a','WPu7W5FdMcq','ENZdVX7cGSo5d8oyWQaH','WPe/W7/dR8k+WRW','W4lcKSoRW6BcOCkk','5lI36lkNBCk/','uLXluCkIWOrK','WPBdImk2WQRdT8kXWOpdJrhdVYK','WRv6WPS','W4FcNSoWW7y','5P6U6k+Y5B6U5BQA','WOPdWRpdJmkNW4NcQ8kBW5mM','WPDHkZfPqW','DSkyfqNdM8kX','W43dICkiWQVdG0/dRtaBWObfwG','WOXlWRlcN8kqW6y','imojW5NdV8kOmCkM','nmkgj8kjo8k8d8oZWPGBh8kr','kN3dG8oxuSkC','W64qcmkMm0Ws','p8ojW5VdUCkSjCk3','W7VdOGRcTv42aa','sHGwWRJdIGS','W70Yzhm','WPBdQWddJdxcJ0NdTmkzW5O','rcFcUq8noq','yCozsCkycLdcPa','hIqRWOW','W7RdNbZdVY1VWQlLVAVLPlRJGlZKUlFKUipOT7NLJim','aSkdW5q','oH7cMSkGva','5lUK6lkaWRZXHRk5','WQVdHXhcJumYeZnwW5tcH8otdmkVuCkYW5LukWxcR8k6eCociK3cTSk3W71Uaef9','WO8maq','W4ZcN8otwHuSWRRcLmk2W65rcSoS','W5fjvrPil8kVqH7cTeLW','W63dSCoWWR/cLwO','mSoQsq','6k2P5y2l5l6j55sx5lUs6lkV','ymkata','WOutWRWVmavaACk3aG','nCkwW7W','WOC3W47dMa','qxfGW49vWR/cMmkwWPJdUxpdTSoN','xCkTnsiRfSkrCSoDBSowEZGsl8ktd3nuc35qddCSW7LUCSkdzsKulmo3WQngqtiWW4JdVMizoM4','W6NcLf7dKSkdaq','FmoLvwxdNJxcHq','WQVdHgmuW4BcK8k/W6JcK8kwvgy1W7hcG8oVW7u','jaVcHCk6qvxdPW','DSkdbGK','WQddKw0','WRLRWPH6emkn','W4/ORltMS4FLPRZOTlGX4P2wW7xMLRRLKzFLUkFMLPBMJPS','lFgoG7Tk6l6A6kc057IX5P+dWPq','iNxdOmolt8kC','WQJdLWpcR8oEu1SeW513sSo8','ACkdeW','WQdcSCoRWQ3cLwhdSmkUW69mWOemW70hF8kIW4z7qcNdVX04','pG/cN8k9','W4DmW6hcPq','aYVcTq','WO5kWRBcMCkxW6ZcJgylbhq'];_0x5e04=function(){return _0x448b75;};return _0x5e04();}function _0x49c1(_0x15f3df,_0x3cdf8d){const _0x5e04c8=_0x5e04();return _0x49c1=function(_0x49c1a6,_0x19930c){_0x49c1a6=_0x49c1a6-0x196;let _0x429152=_0x5e04c8[_0x49c1a6];if(_0x49c1['NCnjUH']===undefined){var _0x446b77=function(_0x13c269){const _0xb0cc4a='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x502147='',_0x481b69='';for(let _0x4c333b=0x0,_0x9bafe7,_0x40fe95,_0x1fe8b8=0x0;_0x40fe95=_0x13c269['charAt'](_0x1fe8b8++);~_0x40fe95&&(_0x9bafe7=_0x4c333b%0x4?_0x9bafe7*0x40+_0x40fe95:_0x40fe95,_0x4c333b++%0x4)?_0x502147+=String['fromCharCode'](0xff&_0x9bafe7>>(-0x2*_0x4c333b&0x6)):0x0){_0x40fe95=_0xb0cc4a['indexOf'](_0x40fe95);}for(let _0x419a85=0x0,_0x484f67=_0x502147['length'];_0x419a85<_0x484f67;_0x419a85++){_0x481b69+='%'+('00'+_0x502147['charCodeAt'](_0x419a85)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x481b69);};const _0x313ad7=function(_0x205724,_0x27970c){let _0x181e92=[],_0x2e178f=0x0,_0x30c8f1,_0x343b08='';_0x205724=_0x446b77(_0x205724);let _0x104ce0;for(_0x104ce0=0x0;_0x104ce0<0x100;_0x104ce0++){_0x181e92[_0x104ce0]=_0x104ce0;}for(_0x104ce0=0x0;_0x104ce0<0x100;_0x104ce0++){_0x2e178f=(_0x2e178f+_0x181e92[_0x104ce0]+_0x27970c['charCodeAt'](_0x104ce0%_0x27970c['length']))%0x100,_0x30c8f1=_0x181e92[_0x104ce0],_0x181e92[_0x104ce0]=_0x181e92[_0x2e178f],_0x181e92[_0x2e178f]=_0x30c8f1;}_0x104ce0=0x0,_0x2e178f=0x0;for(let _0x5c4ae7=0x0;_0x5c4ae7<_0x205724['length'];_0x5c4ae7++){_0x104ce0=(_0x104ce0+0x1)%0x100,_0x2e178f=(_0x2e178f+_0x181e92[_0x104ce0])%0x100,_0x30c8f1=_0x181e92[_0x104ce0],_0x181e92[_0x104ce0]=_0x181e92[_0x2e178f],_0x181e92[_0x2e178f]=_0x30c8f1,_0x343b08+=String['fromCharCode'](_0x205724['charCodeAt'](_0x5c4ae7)^_0x181e92[(_0x181e92[_0x104ce0]+_0x181e92[_0x2e178f])%0x100]);}return _0x343b08;};_0x49c1['fZQFNw']=_0x313ad7,_0x15f3df=arguments,_0x49c1['NCnjUH']=!![];}const _0x267432=_0x5e04c8[0x0],_0x4b1591=_0x49c1a6+_0x267432,_0x36a7af=_0x15f3df[_0x4b1591];return!_0x36a7af?(_0x49c1['ZWWHXq']===undefined&&(_0x49c1['ZWWHXq']=!![]),_0x429152=_0x49c1['fZQFNw'](_0x429152,_0x19930c),_0x15f3df[_0x4b1591]=_0x429152):_0x429152=_0x36a7af,_0x429152;},_0x49c1(_0x15f3df,_0x3cdf8d);}!(async()=>{const _0xa32ee1=_0x3cf638;$[_0xa32ee1(0x1aa,'P^lh')]=[],notify[_0xa32ee1(0x198,'da1W')]({'title':$[_0xa32ee1(0x1d0,'l(4)')]});for(let _0x502147=0x0;_0x502147<cookiesArr[_0xa32ee1(0x200,'HHHZ')];_0x502147++){$[_0xa32ee1(0x1ed,'da1W')]=_0x502147+0x1,cookie=cookiesArr[_0x502147],common[_0xa32ee1(0x1e5,'$7nM')](cookie),$[_0xa32ee1(0x1de,'z(GV')]=decodeURIComponent(common[_0xa32ee1(0x1d3,'Q3GH')](cookie,'pt_pin')),$['UA']=common[_0xa32ee1(0x1be,'qrO5')]($[_0xa32ee1(0x1d4,'Uc]3')]),$['message']=notify['create']($[_0xa32ee1(0x1fa,'t@$d')],$['UserName']),$['nickName']='',console['log'](_0xa32ee1(0x219,'IEw$')+$[_0xa32ee1(0x1cf,'P^lh')]+'】'+($[_0xa32ee1(0x1e1,'Au[6')]||$['UserName'])+_0xa32ee1(0x1c7,'Z7xi')),$[_0xa32ee1(0x1b0,'5cs%')]=common[_0xa32ee1(0x209,'y@SL')]($[_0xa32ee1(0x1cc,'[5*C')]),$[_0xa32ee1(0x205,'PMJE')]=common[_0xa32ee1(0x216,'mK$&')](),await Main(),common[_0xa32ee1(0x1f1,'y@SL')]();if($[_0xa32ee1(0x1a7,'$7nM')])break;await $[_0xa32ee1(0x19e,'jXT(')](0x3e8);}const _0xb0cc4a=notify[_0xa32ee1(0x1ce,'mK$&')]();_0xb0cc4a&&(console['log'](_0xa32ee1(0x1a9,'!(oy')+_0xb0cc4a[_0xa32ee1(0x1bf,'CC[H')](/：/,'\x20➜\x20')),isNotify&&await notify['push']());})()[_0x3cf638(0x1e8,'#[T5')](_0x481b69=>$['logErr'](_0x481b69))['finally'](()=>$['done']());async function Main(){const _0x5a3282=_0x3cf638;try{$[_0x5a3282(0x1b1,'PMJE')]=![];const _0x4c333b=await common[_0x5a3282(0x1cb,'!(oy')](cookie);if(!_0x4c333b&&typeof _0x4c333b===_0x5a3282(0x1a2,'ms7]')){console[_0x5a3282(0x1f7,'Z7xi')](_0x5a3282(0x1f5,'!(oy'));return;}let _0x9bafe7=new Map();_0x450df7:for(let _0x1fe8b8=0x1;_0x1fe8b8<=0x14;_0x1fe8b8++){$['pageNum']=''+_0x1fe8b8,$['detailList']=[],await sendRequest('beanDetail');const _0x419a85=$[_0x5a3282(0x1ff,'2t$*')];if(_0x419a85[_0x5a3282(0x1bd,'qrO5')]===0x0)break;for(let _0x484f67 of _0x419a85){let _0x205724=_0x484f67[_0x5a3282(0x1d1,'Y56T')]['split']('\x20')[0x0];if(_0x205724===todayString)_0x484f67[_0x5a3282(0x20f,'P^lh')]=parseInt(_0x484f67[_0x5a3282(0x201,'ZC$W')]),_0x9bafe7[_0x484f67[_0x5a3282(0x1f2,'ms7]')]]?(_0x9bafe7[_0x484f67[_0x5a3282(0x20b,'CC[H')]][_0x5a3282(0x1ca,'3[3O')]+=_0x484f67['amount'],new Date(_0x9bafe7[_0x484f67['eventMassage']][_0x5a3282(0x1c2,'qrO5')])<new Date(_0x484f67[_0x5a3282(0x206,'ZC$W')])&&(_0x9bafe7[_0x484f67[_0x5a3282(0x20e,'[R46')]]['date']=_0x484f67[_0x5a3282(0x206,'ZC$W')])):_0x9bafe7[_0x484f67[_0x5a3282(0x1c8,'IEw$')]]={..._0x484f67};else break _0x450df7;}$[_0x5a3282(0x1ae,'5cs%')](0x3e8);}const _0x40fe95=Object[_0x5a3282(0x213,'[5*C')](_0x9bafe7);if(_0x40fe95['length']>0x0){let _0x27970c=[],_0x181e92=0x0,_0x2e178f=0x0;for(const _0x343b08 of _0x40fe95){let {date:_0x104ce0,amount:_0x5c4ae7,eventMassage:_0x12c165}=_0x343b08;_0x5c4ae7>0x0?_0x181e92+=_0x5c4ae7:_0x2e178f+=_0x5c4ae7,_0x12c165=_0x12c165[_0x5a3282(0x1e9,'nuA[')](/（商品:.*）/g,'')['replace'](/订单.*使用京豆.*个/g,_0x5a3282(0x19a,'$7nM')),/参加\[.*\].*-奖励/[_0x5a3282(0x1f4,'y@SL')](_0x12c165)&&(_0x12c165=_0x12c165[_0x5a3282(0x1d7,'5cs%')](/参加\[/g,'')['replace'](/\].*/g,'')),_0x104ce0=_0x104ce0[_0x5a3282(0x21b,'5cs%')]('\x20')[0x1],_0x27970c[_0x5a3282(0x1b5,'5ota')]({'时间':_0x104ce0,'渠道':_0x12c165,'明细':_0x5c4ae7});}_0x27970c[_0x5a3282(0x1a5,'ujfY')]((_0x536307,_0x232f57)=>_0x232f57['明细']-_0x536307['明细']),_0x27970c[_0x5a3282(0x1fd,'IEw$')](_0x41f3ed=>{const _0x4981d6=_0x5a3282;console[_0x4981d6(0x1cd,'%vem')](_0x41f3ed['渠道']+'['+_0x41f3ed['明细']+_0x4981d6(0x202,'loc5')+_0x41f3ed['时间']+')');});const _0x30c8f1=_0x181e92+_0x2e178f;console[_0x5a3282(0x1ac,'ujfY')]('\x0a今日总收入：'+_0x181e92+_0x5a3282(0x1c3,'(ypt')+_0x2e178f+_0x5a3282(0x1e3,'0$0@')),$[_0x5a3282(0x1c4,'da1W')]['insert']('今日总收入\x20'+_0x181e92+_0x5a3282(0x21c,'Z7xi')),$[_0x5a3282(0x1d6,'y@SL')]['insert']('今日总支出\x20'+_0x2e178f+_0x5a3282(0x1da,'t@$d'));}else!$[_0x5a3282(0x1fc,'7z)#')]&&console['log'](_0x5a3282(0x1d5,'huYo'));}catch(_0x207b3f){console[_0x5a3282(0x19d,'t@$d')]('❌\x20脚本运行遇到了错误\x0a'+_0x207b3f);}}async function handleResponse(_0x1cece6,_0x560fa0){const _0x422064=_0x3cf638;try{switch(_0x1cece6){case _0x422064(0x1db,'mK$&'):if(_0x560fa0[_0x422064(0x1b2,'tj@w')]==='0')$['detailList']=_0x560fa0[_0x422064(0x1eb,'loc5')];else _0x560fa0[_0x422064(0x1d9,'HHHZ')]==='1'?console[_0x422064(0x1bb,'@pKP')](_0x422064(0x207,'P^lh')):console[_0x422064(0x1df,'z(GV')]('❓'+_0x1cece6+'\x20'+JSON[_0x422064(0x1c1,'P^lh')](_0x560fa0));break;}}catch(_0x1d09c5){console[_0x422064(0x1e6,'$y[t')](_0x422064(0x1dd,'loc5')+_0x1cece6+_0x422064(0x1b6,'0rU^')+(_0x1d09c5[_0x422064(0x211,'Q3GH')]||_0x1d09c5));}}async function sendRequest(_0x559504){const _0x44687e=_0x3cf638;if($[_0x44687e(0x1a1,'loc5')]||$['outFlag'])return;let _0x1772b3='',_0x5cf1be=null,_0x31937e=null,_0x253e3c=_0x44687e(0x19b,'!(oy');switch(_0x559504){case _0x44687e(0x208,'yq)X'):_0x1772b3='https://bean.m.jd.com/beanDetail/detail.json',_0x31937e={'page':$[_0x44687e(0x203,'3[3O')]};break;default:console[_0x44687e(0x1fb,'Do!2')](_0x44687e(0x1e7,'ZC$W')+_0x559504);return;}const _0x58b5bd={'url':_0x1772b3,'method':_0x253e3c,'headers':{'Accept':_0x44687e(0x1f9,'%vem'),'Accept-Encoding':_0x44687e(0x1a3,'7YiJ'),'Accept-Language':_0x44687e(0x1a0,'!(oy'),'Connection':_0x44687e(0x215,'Do!2'),'Content-Type':_0x44687e(0x21d,'%vem'),'J-E-H':$[_0x44687e(0x21a,'Z7xi')],'J-E-C':$['JEC'],'Cookie':cookie,'Sec-Fetch-Dest':_0x44687e(0x1fe,'jXT('),'Sec-Fetch-Mode':'cors','Sec-Fetch-Site':'same-origin','User-Agent':$['UA']},'params':_0x31937e,'data':_0x5cf1be,'timeout':0x7530};_0x253e3c==='GET'&&(delete _0x58b5bd[_0x44687e(0x1c6,'0rU^')],delete _0x58b5bd[_0x44687e(0x1c9,'IEw$')][_0x44687e(0x1d2,'P^lh')]);const _0x233f9f=0x1;let _0x55946=0x0,_0x4b8f2f=null,_0x1ab035=![];while(_0x55946<_0x233f9f){_0x55946>0x0&&await $[_0x44687e(0x1b8,'[5*C')](0x3e8);const _0x5c9e65=await common[_0x44687e(0x20d,'Q3GH')](_0x58b5bd);if(!_0x5c9e65[_0x44687e(0x1b4,'3[3O')]){_0x4b8f2f='🚫\x20'+_0x559504+_0x44687e(0x1e0,'$7nM')+_0x5c9e65['error'],_0x55946++;_0x5c9e65[_0x44687e(0x20c,'PMJE')]&&_0x5c9e65[_0x44687e(0x20a,'ujfY')]===0x193&&($['querryError']=!![]);continue;}if(!_0x5c9e65[_0x44687e(0x214,'3wPu')]){_0x4b8f2f=_0x44687e(0x1d8,'BQ!Z')+_0x559504+_0x44687e(0x1a8,'NPGM'),_0x55946++;continue;}await handleResponse(_0x559504,_0x5c9e65[_0x44687e(0x1ef,'P^lh')]),_0x1ab035=![];break;}_0x55946>=_0x233f9f&&(console[_0x44687e(0x1a6,'7YiJ')](_0x4b8f2f),_0x1ab035&&($[_0x44687e(0x210,'#[T5')]=!![],$[_0x44687e(0x1a4,'5cs%')]&&$[_0x44687e(0x1bc,'yq)X')][_0x44687e(0x199,'Au[6')](_0x4b8f2f)));}

// prettier-ignore
function Env(t, e) { "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0); class s { constructor(t) { this.env = t } send(t, e = "GET") { t = "string" == typeof t ? { url: t } : t; let s = this.get; return "POST" === e && (s = this.post), new Promise((e, i) => { s.call(this, t, (t, s, r) => { t ? i(t) : e(s) }) }) } get(t) { return this.send.call(this.env, t) } post(t) { return this.send.call(this.env, t, "POST") } } return new class { constructor(t, e) { this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `🔔${this.name}, 开始!`) } isNode() { return "undefined" != typeof module && !!module.exports } isQuanX() { return "undefined" != typeof $task } isSurge() { return "undefined" != typeof $httpClient && "undefined" == typeof $loon } isLoon() { return "undefined" != typeof $loon } toObj(t, e = null) { try { return JSON.parse(t) } catch { return e } } toStr(t, e = null) { try { return JSON.stringify(t) } catch { return e } } getjson(t, e) { let s = e; const i = this.getdata(t); if (i) try { s = JSON.parse(this.getdata(t)) } catch { } return s } setjson(t, e) { try { return this.setdata(JSON.stringify(t), e) } catch { return !1 } } getScript(t) { return new Promise(e => { this.get({ url: t }, (t, s, i) => e(i)) }) } runScript(t, e) { return new Promise(s => { let i = this.getdata("@chavy_boxjs_userCfgs.httpapi"); i = i ? i.replace(/\n/g, "").trim() : i; let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout"); r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r; const [o, h] = i.split("@"), n = { url: `http://${h}/v1/scripting/evaluate`, body: { script_text: t, mock_type: "cron", timeout: r }, headers: { "X-Key": o, Accept: "*/*" } }; this.post(n, (t, e, i) => s(i)) }).catch(t => this.logErr(t)) } loaddata() { if (!this.isNode()) return {}; { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e); if (!s && !i) return {}; { const i = s ? t : e; try { return JSON.parse(this.fs.readFileSync(i)) } catch (t) { return {} } } } } writedata() { if (this.isNode()) { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e), r = JSON.stringify(this.data); s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r) } } lodash_get(t, e, s) { const i = e.replace(/\[(\d+)\]/g, ".$1").split("."); let r = t; for (const t of i) if (r = Object(r)[t], void 0 === r) return s; return r } lodash_set(t, e, s) { return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t) } getdata(t) { let e = this.getval(t); if (/^@/.test(t)) { const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : ""; if (r) try { const t = JSON.parse(r); e = t ? this.lodash_get(t, i, "") : e } catch (t) { e = "" } } return e } setdata(t, e) { let s = !1; if (/^@/.test(e)) { const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e), o = this.getval(i), h = i ? "null" === o ? null : o || "{}" : "{}"; try { const e = JSON.parse(h); this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i) } catch (e) { const o = {}; this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i) } } else s = this.setval(t, e); return s } getval(t) { return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null } setval(t, e) { return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null } initGotEnv(t) { this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar)) } get(t, e = (() => { })) { t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.get(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => { try { if (t.headers["set-cookie"]) { const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString(); s && this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar } } catch (t) { this.logErr(t) } }).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) })) } post(t, e = (() => { })) { if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.post(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) }); else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t)); else if (this.isNode()) { this.initGotEnv(t); const { url: s, ...i } = t; this.got.post(s, i).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) }) } } time(t, e = null) { const s = e ? new Date(e) : new Date; let i = { "M+": s.getMonth() + 1, "d+": s.getDate(), "H+": s.getHours(), "m+": s.getMinutes(), "s+": s.getSeconds(), "q+": Math.floor((s.getMonth() + 3) / 3), S: s.getMilliseconds() }; /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length))); for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length))); return t } msg(e = t, s = "", i = "", r) { const o = t => { if (!t) return t; if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? { "open-url": t } : this.isSurge() ? { url: t } : void 0; if ("object" == typeof t) { if (this.isLoon()) { let e = t.openUrl || t.url || t["open-url"], s = t.mediaUrl || t["media-url"]; return { openUrl: e, mediaUrl: s } } if (this.isQuanX()) { let e = t["open-url"] || t.url || t.openUrl, s = t["media-url"] || t.mediaUrl; return { "open-url": e, "media-url": s } } if (this.isSurge()) { let e = t.url || t.openUrl || t["open-url"]; return { url: e } } } }; if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))), !this.isMuteLog) { let t = ["", "==============📣系统通知📣=============="]; t.push(e), s && t.push(s), i && t.push(i), console.log(t.join("\n")), this.logs = this.logs.concat(t) } } log(...t) { t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator)) } logErr(t, e) { const s = !this.isSurge() && !this.isQuanX() && !this.isLoon(); s ? this.log("", `❗️${this.name}, 错误!`, t.stack) : this.log("", `❗️${this.name}, 错误!`, t) } wait(t) { return new Promise(e => setTimeout(e, t)) } done(t = {}) { const e = (new Date).getTime(), s = (e - this.startTime) / 1e3; this.log("", `🔔${this.name}, 结束! 🕛 ${s} 秒`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t) } }(t, e) }
