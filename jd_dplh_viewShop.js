/*
活动名称：大牌联合浏览豆专用
环境变量：jd_dplh_viewShop_ids // 活动ID 多个用, @ 换行分割
        jd_dplh_viewShop_threads // 控制并发线程数（正整数），默认1，最大10，尽量使用默认值，否则请开启代理运行
        jd_dplh_viewShop_interval // 自定义运行间隔时长（整数，单位毫秒），默认1000
        jd_dplh_viewShop_notify // 是否推送通知（true/false），默认不推送
        jd_dplh_viewShop_pinFilter // 账号pin过滤，多个用@进行分割

高并发脚本，谨慎使用并发
活动限制IP严重，建议使用代理

cron:1 1 1 1 *

*/

const $ = new Env('大牌联合浏览豆专用')
var iｉl='jsjiami.com.v7';const iii1lI=iii1II;function iii1II(_0x278603,_0x1cdb45){const _0x4e9f2f=Iii11l();return iii1II=function(_0x4b8816,_0x54c243){_0x4b8816=_0x4b8816-0xfd;let _0x43dadc=_0x4e9f2f[_0x4b8816];if(iii1II['zLkMnn']===undefined){var _0x3bbe7c=function(_0x14d18b){const _0x5bc80b='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x5b95a7='',_0x18ec63='';for(let _0x13081c=0x0,_0x48f214,_0x1a3b8f,_0x2be254=0x0;_0x1a3b8f=_0x14d18b['charAt'](_0x2be254++);~_0x1a3b8f&&(_0x48f214=_0x13081c%0x4?_0x48f214*0x40+_0x1a3b8f:_0x1a3b8f,_0x13081c++%0x4)?_0x5b95a7+=String['fromCharCode'](0xff&_0x48f214>>(-0x2*_0x13081c&0x6)):0x0){_0x1a3b8f=_0x5bc80b['indexOf'](_0x1a3b8f);}for(let _0x270c96=0x0,_0x2fdbd7=_0x5b95a7['length'];_0x270c96<_0x2fdbd7;_0x270c96++){_0x18ec63+='%'+('00'+_0x5b95a7['charCodeAt'](_0x270c96)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x18ec63);};const _0x4a2338=function(_0x35bce1,_0x37444b){let _0x5f39c3=[],_0x5db6a7=0x0,_0x4313f6,_0x34815c='';_0x35bce1=_0x3bbe7c(_0x35bce1);let _0x60876b;for(_0x60876b=0x0;_0x60876b<0x100;_0x60876b++){_0x5f39c3[_0x60876b]=_0x60876b;}for(_0x60876b=0x0;_0x60876b<0x100;_0x60876b++){_0x5db6a7=(_0x5db6a7+_0x5f39c3[_0x60876b]+_0x37444b['charCodeAt'](_0x60876b%_0x37444b['length']))%0x100,_0x4313f6=_0x5f39c3[_0x60876b],_0x5f39c3[_0x60876b]=_0x5f39c3[_0x5db6a7],_0x5f39c3[_0x5db6a7]=_0x4313f6;}_0x60876b=0x0,_0x5db6a7=0x0;for(let _0xadff50=0x0;_0xadff50<_0x35bce1['length'];_0xadff50++){_0x60876b=(_0x60876b+0x1)%0x100,_0x5db6a7=(_0x5db6a7+_0x5f39c3[_0x60876b])%0x100,_0x4313f6=_0x5f39c3[_0x60876b],_0x5f39c3[_0x60876b]=_0x5f39c3[_0x5db6a7],_0x5f39c3[_0x5db6a7]=_0x4313f6,_0x34815c+=String['fromCharCode'](_0x35bce1['charCodeAt'](_0xadff50)^_0x5f39c3[(_0x5f39c3[_0x60876b]+_0x5f39c3[_0x5db6a7])%0x100]);}return _0x34815c;};iii1II['JMoMlP']=_0x4a2338,_0x278603=arguments,iii1II['zLkMnn']=!![];}const _0x2e8f2c=_0x4e9f2f[0x0],_0x37de34=_0x4b8816+_0x2e8f2c,_0x52f6a9=_0x278603[_0x37de34];return!_0x52f6a9?(iii1II['mCWIpl']===undefined&&(iii1II['mCWIpl']=!![]),_0x43dadc=iii1II['JMoMlP'](_0x43dadc,_0x54c243),_0x278603[_0x37de34]=_0x43dadc):_0x43dadc=_0x52f6a9,_0x43dadc;},iii1II(_0x278603,_0x1cdb45);}(function(II11l1,Iil1lI,IiiliI,iii1iI,llIll,il1iII,iilli){return II11l1=II11l1>>0x6,il1iII='hs',iilli='hs',function(IlllIl,II11lI,lI1IIi,I1l11I,Ilil1l){const i1ilI=iii1II;I1l11I='tfi',il1iII=I1l11I+il1iII,Ilil1l='up',iilli+=Ilil1l,il1iII=lI1IIi(il1iII),iilli=lI1IIi(iilli),lI1IIi=0x0;const iIIiii=IlllIl();while(!![]&&--iii1iI+II11lI){try{I1l11I=parseInt(i1ilI(0x222,'y&@a'))/0x1*(-parseInt(i1ilI(0x1a2,'!]PP'))/0x2)+parseInt(i1ilI(0x1d0,'@7Qj'))/0x3+parseInt(i1ilI(0x154,'UJUk'))/0x4*(-parseInt(i1ilI(0x1c6,'@w%z'))/0x5)+-parseInt(i1ilI(0x22d,'L^pc'))/0x6+-parseInt(i1ilI(0x162,'!@I^'))/0x7*(parseInt(i1ilI(0x102,'r&37'))/0x8)+-parseInt(i1ilI(0x11d,'DdWr'))/0x9+parseInt(i1ilI(0x1f4,'DdWr'))/0xa;}catch(iilll){I1l11I=lI1IIi;}finally{Ilil1l=iIIiii[il1iII]();if(II11l1<=iii1iI)lI1IIi?llIll?I1l11I=Ilil1l:llIll=Ilil1l:lI1IIi=Ilil1l;else{if(lI1IIi==llIll['replace'](/[nVNuAeYdRMXqIbUJTftSl=]/g,'')){if(I1l11I===II11lI){iIIiii['un'+il1iII](Ilil1l);break;}iIIiii[iilli](Ilil1l);}}}}}(IiiliI,Iil1lI,function(il1iI1,IlllIi,iIIiil,i1l1Ii,I1iIIi,I1iIIl,lI1IIl){return IlllIi='\x73\x70\x6c\x69\x74',il1iI1=arguments[0x0],il1iI1=il1iI1[IlllIi](''),iIIiil=`\x72\x65\x76\x65\x72\x73\x65`,il1iI1=il1iI1[iIIiil]('\x76'),i1l1Ii=`\x6a\x6f\x69\x6e`,(0x16bf38,il1iI1[i1l1Ii](''));});}(0x30c0,0xd36a6,Iii11l,0xc5),Iii11l)&&(iｉl=0xc5);const jdCookie=require(iii1lI(0x207,'66l)')),common=require(iii1lI(0x1fe,'EGk#')),notify=require('./utils/Rebels_sendJDNotify'),getToken=require(iii1lI(0x164,'c%rV')),CryptoJS=require(iii1lI(0x1ed,'%7ea'));console[iii1lI(0x13f,'UJUk')](''),console[iii1lI(0x166,'x!Ru')](iii1lI(0x13c,'qMj0')+$[iii1lI(0x16d,'x2jW')]+iii1lI(0x1df,'W#iJ')),console[iii1lI(0x229,'dY!w')](iii1lI(0x198,'EGk#')),console[iii1lI(0x1ea,'qMj0')]('jd_dplh_viewShop_threads\x20//\x20控制并发线程数，默认1，最大10'),console['log'](iii1lI(0x19b,'*Mbw')),console['log']('jd_dplh_viewShop_notify\x20//\x20是否通知(true/false)，默认不推送'),console[iii1lI(0x166,'x!Ru')](iii1lI(0x14f,')XC3')),console['log'](iii1lI(0x182,'Fg3&')+$['name']+iii1lI(0x203,'*trm')),console[iii1lI(0x1d7,'!@I^')]('');const dplhIdList=(process['env']['jd_dplh_viewShop_ids']||'')[iii1lI(0x1c0,'1BON')](/[,@\n]+/g)['map'](lI1liI=>lI1liI[iii1lI(0x12d,'2W)2')]())[iii1lI(0x1f0,'1BON')](Boolean);let taskThreads=process['env'][iii1lI(0x10a,'%7ea')]||'1';const runInterval=process[iii1lI(0x1db,'c%rV')]['jd_dplh_viewShop_interval']||iii1lI(0x1b1,'qMj0'),isNotify=(process['env']['jd_dplh_viewShop_notify']||process['env'][iii1lI(0x142,'#Nem')])===iii1lI(0x186,'65fl'),pinFilter=(process[iii1lI(0x1dc,'(!Cz')][iii1lI(0x1be,'nx%B')]||'')[iii1lI(0x1cf,'EGk#')]('@');interaction=[];let cookiesArr=Object[iii1lI(0x200,'!]PP')](jdCookie)[iii1lI(0x11c,'Xxd%')](i1i1Ii=>jdCookie[i1i1Ii])['filter'](lllii=>lllii);!cookiesArr[0x0]&&($[iii1lI(0x16e,'qMj0')]($[iii1lI(0x171,'65fl')],'【提示】请先获取Cookie'),process[iii1lI(0x1cb,'AGfv')](0x1));!(async()=>{const i1ilI1=iii1lI;notify['config']({'title':$['name']}),await Main(),isNotify&&notify[i1ilI1(0x1b4,'@7Qj')]()&&await notify[i1ilI1(0x1d9,'c%rV')]();})()['catch'](iI11Ii=>$[iii1lI(0x181,'(!Cz')](iI11Ii))[iii1lI(0x108,'14n3')](()=>$['done']());async function Main(){const Iiilii=iii1lI,iIII1l={'AiiZr':Iiilii(0x117,'xwB@'),'wySDf':function(lllil,iI11Il){return lllil===iI11Il;},'YtlUK':Iiilii(0x132,'J0Gc'),'otqVi':'⚠\x20请先定义必要的环境变量后再运行脚本','WhKji':function(iIII1i,iil1i1){return iIII1i(iil1i1);},'fydLb':function(il1i11,IlIll1){return il1i11!==IlIll1;},'itwJr':Iiilii(0x1b7,'(!Cz'),'ZQByd':Iiilii(0x1de,'hOOJ'),'QsRVi':function(IlIII,ilil1l){return IlIII===ilil1l;},'rFrej':Iiilii(0x22c,'y&@a'),'wCogK':Iiilii(0x176,'(!Cz'),'RezsX':Iiilii(0x13b,'Xxd%')};try{if(iIII1l[Iiilii(0x121,'*trm')]('nxGGe',iIII1l[Iiilii(0x1e0,'&jAT')]))iillll['log'](''+lIIilI+II1li1[Iiilii(0x11e,'x!Ru')]),l1lIlI[Iiilii(0x210,'14n3')](''+IiiIl1[Iiilii(0x185,'Fg3&')]),lIIil1=!![];else{if(dplhIdList[Iiilii(0x220,'Ua$r')]===0x0){console[Iiilii(0x1eb,'L^pc')](iIII1l['otqVi']);return;}const I1lIii=[...new Set(dplhIdList)];try{const IiI1I=iIII1l[Iiilii(0x1f5,'W#iJ')](parseInt,taskThreads);IiI1I>0x0&&iIII1l['fydLb'](IiI1I,0x1)&&(taskThreads=IiI1I);}catch{iIII1l['itwJr']===Iiilii(0x1e6,'UJUk')?(iliIII=iIIl1i['filter']((i11ill,IIIIIi)=>!Iliil1[Iiilii(0x150,'2W)2')]['includes'](IIIIIi+0x1)),ill111[Iiilii(0x14e,'J0Gc')]=[]):taskThreads=0x1;}taskThreads=Math[Iiilii(0x17a,'qMj0')](taskThreads,0xa),$[Iiilii(0x139,'AGfv')]=null;if(runInterval){if('WcNut'!=='WcNut')IlI1l[Iiilii(0x17f,'L^pc')]=lilIil;else try{const I1lIil=parseInt(runInterval);I1lIil>=0x0&&($[Iiilii(0x163,'W)PT')]=I1lIil);}catch{console[Iiilii(0x1fd,'EGk#')](iIII1l[Iiilii(0x1b2,'$o&u')]);}}I1lIii['length']>0x0&&console['log'](Iiilii(0x1c1,'J0Gc')+I1lIii[Iiilii(0x19f,'UJUk')]+Iiilii(0x1f7,'@s4H'));for(let IIIl1i=0x0;IIIl1i<I1lIii[Iiilii(0x120,'&jAT')];IIIl1i++){$[Iiilii(0x134,'@7Qj')]=[],$[Iiilii(0x1b5,'Ua$r')]=I1lIii[IIIl1i],console[Iiilii(0x105,'2W)2')]('🏬\x20开始\x20['+$[Iiilii(0x15e,'@s4H')]+Iiilii(0x209,'pxy(')),await common[Iiilii(0x145,'qMj0')](taskThreads,cookiesArr,taskFnc),$[Iiilii(0x100,'$$Y@')]=![],$['runEnd']=![],IIIl1i!==I1lIii['length']-0x1&&(iIII1l[Iiilii(0x1e1,'@w%z')](Iiilii(0x158,'1BON'),iIII1l[Iiilii(0x1e9,'c%rV')])?console[Iiilii(0x1f8,'$o&u')](''):(delete lilil[Iiilii(0x1c7,'*trm')],delete ll1ll['headers'][iIII1l[Iiilii(0x10b,'pxy(')]])),$[Iiilii(0x15c,'&jAT')][Iiilii(0x193,'r&37')]>0x0&&(iIII1l[Iiilii(0x213,'66l)')](iIII1l[Iiilii(0x1a7,'Ua$r')],iIII1l[Iiilii(0x202,'1BON')])?II1lil['log'](''+IIli1l+II1lii[Iiilii(0x10d,'AJXF')]):(cookiesArr=cookiesArr[Iiilii(0x1c2,'Fg3&')]((lllll,i11ili)=>!$[Iiilii(0x150,'2W)2')][Iiilii(0x1a4,'W#iJ')](i11ili+0x1)),$[Iiilii(0x1da,'#Nem')]=[]));}}}catch(iil1l1){iIII1l[Iiilii(0x1fb,'W)PT')](Iiilii(0x17e,'c%rV'),iIII1l[Iiilii(0x1ca,'hOOJ')])?console[Iiilii(0x1ff,'66l)')](Iiilii(0x170,'66l)')+iil1l1):delete lIII1l[Iiilii(0x22e,'66l)')][Iiilii(0x204,'Ua$r')][Iiilii(0x165,'[lgT')];}}function Iii11l(){const IllIiI=(function(){return[...[iｉl,'XIjUsujIVibnaAmRJiqY.MbcfTloNUemf.tdvSJ7==','W4BcUXRcIJO','WO7dPCkqW4NdUfa','uSkffL01oMe','WOpdS8knW4FdQ1y','awmtnZXiua','W5pdJdrJrq','iSopnCoAWPxcSCo/yW','WPzwWOddTxjNsmo1WRm','6lEq5y2M5Pw+5Psc','W6dcKYhcHay','W4hdTCo9qLKhW54FWRm3W4ybWR4qsCoDWRfOWPrYW4jLaCoMWPLhDCkpFq','W7/cTs/cHYJdJW8','vKOr','x8kEW6bFAW','W7RcVXVcTsm','W4xdKstcICk3WRvcW6dcJIS','W5ZcP8krW5/cPmoi','BCoxW6S','WPJdOM5flSkmW5FcPwu','fd3cVSom','WQ3dGCknW6RdUG','5BA56kYo572v6lwI6l626lYV6ko25BYA5yMx6lsq5yYS','W7ldNdHGzsFdMCo3qNK','W7BcSZRcIJVdLaHmqWq','W5q1WP8','uCozW5X2jG','WRT2WQjxmq','W53cNI3cLIK','nxbRW53cPq','EtDz','BSkExmksW4pcVa','hXxdOCkvWRldOmk3W6VcOsmBxZZdLa','tSkajuWGgw/dRSorW6DsW5m1krlcGmoUWQBdImkfWONdHmoIWR8Qdq','4P2PlEAEPoIaGEAVOEEGPUwNOoEqI8kp','WONdP3Tjka','8kkCTCoq5ysx6kY6yG','W43dTCo/uvSq','lmoFvmo1aSkXW48Ku1i','WQznWP3dT3vL','mmkyCCoIlSoBW4/dTwCIW5rztmkDW6FdU0hcPCo5m8kPmq/dUmoqtCkYWQ7dT8krrgrJde9xW5a','lCohW4DSDYHUua','w8kusCof','aCk8g8oIcq','W7NdTX4SufS','gxWtW53dQG','d1qcW6W','WPCBWQJdMmki','dK0FW7K','WQddJCkCW7BdMW','omoav8o4bq','WQhcI3WAowpcNSo+Fu9BWPnx','mCkczSo+kmkfWOxcQq','aCk2WRWjW6WNsmopwGpcOG','W4xcOCkRCIpcLgddPSoGoJRcSftcGW','yGNdTI9zWP9OW5vicmooW4H1','WP3cHN7dR0K','DmkTgmoBma','amk8kq','W5hdLItcNCkiWPjeW7K','uSkWmSoe','W5pdMCoLWPHczXbPjCkdumkHW7HyW5rrWQ94WOSLiq','r8kRnW','BSoqW6u','W47dQCojWRHY','4PURoEIgG+wSTos7U+I8UUIJIEMxQoMyGoAuGUMvUoISIEE9R+MuKoITJG','5y6t6ywU6k6I5PQ4W53dQmkNlCksW7PoWQWhW7O','vSkzq8kUW68','sCkbW4fCDW','qwZdUSkD','AmkcqmkFW5FcNdxdHCoDWOy','4PU2cEIhSUwSHUs6QEI8VoIHUUMvO+MzPUAvQ+MxHUITQoE8LoMuR+ISRW','ASkpE8onWPu','WOtdGCk1W6VdNW','W6dcRhKP','WQRcNCoRW7RcQI1jqK7cSCkmWQSQA8kxWRldQq','umkdm8ojfW','swldQq','jSk5bW','d3T7WRZdMmorWOddSa','WQ/cN1pdTKRdUSkzWOmo','y8kcsa','draLtIu','WPZdVNTuoCkW','fhDTWRJdQSoEWOO','bSkoWOWWld0','cfZdNG','hLVcRN3cHSoRye3cS8o4jmoyybq','hmojhCoCWOK','wGRdSJe','gUs7JoA2MowlIqW','WPVdV8kO','l1L9W4JcGq','W4FcR8kZW43cQa','WPddQmo6bNq','W7JcUCkhW6VcPq','j8oFxa','zCkFtSoLgmktW4LMsfpcUCkyD8k3W7CAW70ZWOpcR8kXsSkk','W7VcONC','xNetlW','W6RdHtWPAG','WO3dLhHhfW','5O+V56Ep57UU5P+7W4zTiLxdIK8fW7JcUCk1'],...(function(){return[...['W7BcTcpcQt7dKHi','oLtcOq','W7VdPriQtvyeW6q','WRNdONO5W6FcMKyXWPWd','vmkdW4yfvbBdKmonfd9ItMVdR8olWQZdQSkiAWSk','W5i15lMN5yQvdW','wSkxACksW4O','W6dcRhKPW7dcNeq/','W50OWOPSF8kMW4BdRcNcV8oXW6e','kNODW4FdHmkdW7fLW4VcMgJdLMu','W6KXWQXQEG','WOtdTSowkxK','WQmEWQy','cColW5Gz','tuuJhG4','W7hcThqrW4y','cMz/WR/dVSok','FSkBW6S','vmkrcua','pmoap8oc','eCkBWPKL','xSkrumoUWOG/Cq','W7uZWQ8XWRW','jNaAW53dM8kfW6S','W4/cLfqhW4S','W6T0W6Hv','jhCjW7pcVW','imoDCSo9hW','W7VcTsdcHdNdLq','l8ort8oW','W7RdKCk1WRRcTdX4sf7cSCkFWQC','dSkPpCocnG','WPtcOCo5WQlcQJBdULFcVCkFiGu','k8kYdszVaa4','W6RcOmoxnGKEsGT5W4mTW68m','tSkQjG','g8kYj8oa','fJ0b','WQhcHfNdTvFdUSoAWQOiW7hdR2rizNq','W4ldRt8MvG','WO/cG8oZW4ldLa','ECoGu1KQxftdN8oOW4BdMLmQ','W6FcRgi8W4NcHG','WR3dT8kqyG','cdCwwZqxuW','jmkYWQqpW6W','W4RdNCoPWOG','W7BcOZ3cIIRdKW','WO1dWOhdJg5Pt8oNWOS/b8kWWOq+WQ8','lx85W7pcLq','WRvQW4T/WQ/dVSo/pCoTFG','W7BcVMm0W4pcMW','c8odW5q','W6ddQXW','W7RdLrrkyW','8l6RTCoF','WQmEWRddVCkOemkv','oSougCopWPldP3hdJCoqWQ8cFCkb','WQBcIxxdOK7dUCoCWRylW6VdVNX2A2KOW45FW4ddIZ56W7RcGW','W458W7vUDW','vtylgdmgwCozWPRdUKP0zW/cPum2W5uIDe3dK8kzW7NcH8kAW4yBa2hdN0mddr1hcwBdU8kmWOKPW4FdUWjo','WPv2WPPBcCoxD8kNW7SDcwi','mKHSW70','smkbfe8Khq','z8orW7q','pmkiWQqhzsD3A2KPWO4b','kSoCWQm','W7bcWORdUSkTpSkuuG','W6ddOru5BvC','csyuxJStx8orWPC','pmoap8ocWRtcVmo3Dq','EfyyoCkQW79eWO0rb8oEaG','zGJdIWpdMG','WO3cNfNdSNe','W4iQWQ1TFa','WOaGe8kQdG','W5OVW6i','gflcRxhcHCoMzXJcJ8oBeSoIra','W4FdJdNcGSk2WRzsW77cTc5bfa','WPBdSNLhkmkQ','y8kiqCkCW5dcUG','smkmBSoGWP0','u8kUamoOca','WR/cGSoYW6BdP25i','uLCskmk3W55w','j8k3ga','CmkxW7jUEXHL','W687WP4JWPJdR8oe','vLafpSkMW75EW7q8dSol','z8kIf8okdG','msNdICkSWQ8','t8katSom','WO8odCkPkq','W7JdTHiZ','W6HWW6H3AHe0nIlcOCkCvSoEW6q','W5uZWOTWzmkeW40','W5VdLCo4','W5pcNWdcHIy','nSkTWPKXW5a','W5RdMCoUWQLr','W7VdNcLjuJhdH8o5u3LBWRbOxvO7WR/cN0BcQbO','h8k6kCoA','WO/dR8khW6BdJW','WRxdUCkd'],...(function(){return['WRNdUCklW6VdKq','hu0cW6ZdSmoLw8oH','auSHW4hdIa','W4uBW6DBoq','gddcS8obWR91W5KWWPjv','W4aqW4u','WRFORlRMSzlLKPdLUlddLq','WO7dR8kz','W4SVWPTGAmkyW5a','44cR6lsF5y6b','W5FdMmoFWPHGBHvzjCkpDSk5W4rBW5jeWRLyWOa0mhu+','W43dHYeuvW','smklhq','rMldOmkFW5yPWPDM','AdZdGmoYWQddPSkOW5FcSh0exGxdJ8kpvmoEE0S5x0dcVZldUCkwn8o6W6SFW5P4W6dcV8owFW','W47dImoHWOHLCq','gYiwwZWxv8odWOFcUK4/rXpcO0m','EvhcOLipW4eYW75XkCoPW7bdaw7cV1hdH8o3vCkbW5ZdR1FdUJ3dLW','jNaAW53dM8kfW6TiW63cHgi','z+s5SUA2LUwjTCom','m1TQW7pcKG','8kgkUt4','g8k8WPucW4KNv8oJtrxcHf3cHSoQvXpdOLq9WOxdOG','pf/cMxWqW4q0W6jMmSoOW7n2rNlcP2hdH8kXsmkVW5RdS2/dTJZcGYJcGZFOTyFLJl07sLlOV5pMUk/VVBZLPi3KUk3NLPJdJ+I9LoIGRowlGUwkMa','W6ldOr46s1OeW658faddPgJdH8oOxSkjWOjzkSkf','WODLWOfal8oZF8kX','W6VcOSoqo21onJrOW7G','W4ddKstcGCkHWPPz','W5BcTSojWPRcUgJdRelcVComWRS','WOFcKCoTW5ZdSa','n8kyW7DaCqn4qSoaiqBdSCkBWRDWWRBcOCoUkmkRW7mrW6VdUmoVBCk6dCo0ugzJW5hdSSokd8kF','W5JdSmo6rLS','WRJdS2zOdG','WO3dLc/cP8kRWPjzW47cPJ1cbCk3sK/cVSokW6RcKCoowaldJXtdJe7cIa','WR7cIfRdO1/dOq','WRVdKufmmq','yCkisSkFW7BcTY3dH8oIWOCzE8k+WRFcNXldI8kSq8ksW5a','W5tdKSoJWPbLzHH1','w8kfW5CiCbRdICoBkZ4','dSoqWPrvmIpdKSounGXB','5BAF6kYu57+c6lAl6l2c6lYi6kcu5B655yUF6lAu5y6T','WObqWOddS25nrmoGWRK9fmkC','xCoMF8knv1TqW5ddR0yJ','WOhdSmo3pKldHtVcSW','dmoQnmoyfmo1W6aydIfMWRBdISoXr8ouWP43W7Oz','oCkpCCoBoq','W47dKsW','AUISOEAWOUwsOEw6Ie8','xH7dUcBdLSkGjq','iLlcQ30ZW5W9W5bG','WO7cImoSW77dO2nzcNZcPmkDWRO','nZNdN8k8WQVdPW','aG/dTMRdLCkHorpcV8k5imoVxGZdKhjnqGbuW6JdSmoozb5AW5xcNdHaB2lcNCk7BmoY','g8kBWOaH','sh7dQq','q8kebSollq','4P+BW63OHiRMNBhOVBtOORNPGA7LIARKUBpPLB/OR5xdGW','ktNdGmk4','W4VdQaGlBa','W6VdOq8xD1maW69VmIZdPxpdICoVtW','WPPTWOzthmo/FmkZW6iFhYRcPCk1WOJcKHlcUgFdVMtcNCoaWRhcIs4pWOFdUW','WPRdVSo5','tmohW7bXeW','vLafpSkMW75E','s8kZW7iLza','uMVdT8kPW6O','sgtdOa','8y6EM8o+5yET6k2Lxa','amkkzmo+kq','kwqjW4ZdQq','yCkWe8oKka','pCk3crHibG3dNa','dCktna','z8orW7rYjwq','WPBcOCkUganFWO1fW6rP','juf3W6ZcRmkfrCoJ','W6pcPh04W7FcGuG3WOu','W47dRSoHsKWVW5ulWQO1W5bj','mYRdMmk4','WOdcIMZdOhi','kSkMnSo6iG','ewzQWRVdUmkdW4dcR8odWONdLCocW5X4W6j9W5PTA8oRaSoGWQqmW6/dPXNcGmoyWRWRl3VdNYmXzW','o1lcTwSjW4CY','4PYhWOhOHyZMNPROVldOOPNPG53LIkdKUkNPL57ORPZcMW','BSkow8kYW4a','WR7cJ8oTW7RdIMrEuW','kSott8o4b8kwW44WrvRcTmkCFW','4P2ZW5xMNjFOGzNMRPJNOl7LPjVNKA7dLW','W6JdPq8/','W5/cVZJcOs4','bSkTWOipW7uLu8oQqG','W6S7WPeGWONdTq','WP9kWOvJha','nN0AW5q','hSotxCoabW','k8kyzmoMkmks','iCouzmo1aCktW5iwBf/cVSkksmkSW4CaW4yzWOJcSCo8cSolE+A2GEwlGmoTWPnx5AAg5lM+55sFjCowrSkg5O+x6koL5yUI5yIs','4PY5W5RMN4FNNQhORQ7MSiWA','W702W5iKWPm','e3zbWQ/dU8ovWOFdN8oFWONdNSosW6H1W6nQW69NDmkYdSoHWQrdW6RcTeddHCkB6is65A+E5lIt6l+p6kk96zA06zUk5PE86zww77+u6BQ66kY7W5LTWOyi','W7RcPgmUW43cMKCtWPSqu8k9W4uGW65crG','m1X9WR7dRW'];}())];}())];}());Iii11l=function(){return IllIiI;};return Iii11l();};async function taskFnc(iiili1,ill11i){const Iil1li=iii1lI,lllill={'RlvDL':Iil1li(0x188,'!@I^'),'xQIBP':function(ilil1I,i11il1){return ilil1I-i11il1;},'CHbTM':function(ii1iiI,lllilI){return ii1iiI-lllilI;},'AqstO':Iil1li(0x1e4,'6qgb'),'HovBc':function(ilil11,illlI1){return ilil11==illlI1;},'SmbGE':Iil1li(0x187,'%7ea'),'xRtNW':'shopList','EgVfs':function(IIIl11,I1lIi1){return IIIl11!==I1lIi1;},'VhYwM':'AqNNg','NiDxO':Iil1li(0x21b,'hOOJ'),'xNdGf':function(liiIIi,lil11I){return liiIIi==lil11I;},'yKBwV':function(Iliii1,iIiIi){return Iliii1(iIiIi);},'Xfalt':Iil1li(0x1bb,'hOOJ'),'WwZYH':function(iil1ll,iiilil){return iil1ll>iiilil;},'AFVlm':'missionInviteList','cYsAE':Iil1li(0x20d,'hOOJ'),'QkTiw':function(iil1li,lillIl,iIiIl){return iil1li(lillIl,iIiIl);},'kgJYl':Iil1li(0x156,'@w%z'),'PXesm':Iil1li(0x148,'dY!w'),'sUIDb':Iil1li(0x19a,'r&37'),'moyHC':'keep-alive','brXdk':'application/x-www-form-urlencoded','wBCyp':function(iiilii,li1i1i){return iiilii!==li1i1i;},'QjkFa':Iil1li(0x1c5,'[lgT'),'qUQDb':'Cookie','KcPFi':function(IlIli1,illIiI){return IlIli1>illIiI;},'BMbXW':Iil1li(0x12a,'65fl'),'olXgc':function(lI1lli,Ill1l){return lI1lli>=Ill1l;},'GlsUu':function(llI1Il,ii1iii){return llI1Il===ii1iii;},'UcfQv':function(i11iil,Ill1i){return i11iil||Ill1i;},'xzGsx':function(ii1iil,lllI1l){return ii1iil!==lllI1l;},'dTToo':'hkDIN','keZPs':Iil1li(0x155,'y&@a'),'Smizi':'6cc5dbd8900e434b94c4bdb0c16348ed','DONek':function(i11iii,llI1Ii){return i11iii+llI1Ii;},'KrJcJ':function(lllI1i,li1i1l){return lllI1i(li1i1l);},'EhqnI':function(II1i1,lI1lll){return II1i1(lI1lll);},'fAGws':Iil1li(0x19d,'*Mbw'),'zpUnq':Iil1li(0x194,'AJXF'),'UzFin':function(iIiII,iil1lI){return iIiII*iil1lI;},'DrOwD':function(iiiliI,li1i1I){return iiiliI!==li1i1I;},'lYFdO':Iil1li(0x1ac,'Ua$r'),'fBjeZ':Iil1li(0x1ec,'*Mbw'),'rgHco':function(illIii,ii1il1,lI1llI){return illIii(ii1il1,lI1llI);},'vmfNp':function(illIil,Ill1I){return illIil*Ill1I;},'aAGgP':function(i11iiI,lIli11,lllI1I){return i11iiI(lIli11,lllI1I);},'AyMsW':function(lillI1,IlIlii){return lillI1+IlIlii;}};if($['runEnd'])return{'runEnd':!![]};const ill11l=lllill[Iil1li(0x1b8,'AJXF')](decodeURIComponent,common[Iil1li(0x12e,'pxy(')](iiili1,'pt_pin'));function I1lIiI(i1l1i1,liil11){const Iiilil=Iil1li;if(lllill[Iiilil(0x1cc,'14n3')]===Iiilil(0x1a3,'@7Qj')){const iiillI=i1l1i1[Iiilil(0x157,'Fg3&')](0x0,0x2),l1l111=i1l1i1['slice'](-0x2),l1iIII=Math[Iiilil(0x125,'L^pc')](lllill[Iiilil(0x212,'!]PP')](lllill[Iiilil(0x17d,'AGfv')](liil11,iiillI['length']),l1l111[Iiilil(0x11f,'1BON')]),0x0),llI1I1='*'[Iiilil(0x15a,'%7ea')](l1iIII);return iiillI+llI1I1+l1l111;}else i1l1ll[Iiilil(0x110,'(!Cz')](Iiilil(0x17b,'14n3')+I1iIiI[Iiilil(0x10f,'nx%B')]+Iiilil(0x14b,'65fl'));}const lllili=decodeURIComponent(ill11l),IliiiI=I1lIiI(lllili,0x6),Ill11=Iil1li(0x141,'xwB@')+ill11i+'】'+IliiiI+'：',liiIII=notify[Iil1li(0x1ae,'4&G4')](ill11i,ill11l);if(pinFilter[Iil1li(0x114,'2W)2')]>0x0&&(pinFilter[Iil1li(0x1d1,'[lgT')](ill11l)||pinFilter[Iil1li(0x15d,'#Nem')](lllill['EhqnI'](encodeURIComponent,ill11l)))){if(lllill[Iil1li(0x1ab,'@w%z')](Iil1li(0x1b9,'Ua$r'),lllill[Iil1li(0x201,'2W)2')])){liiIII[Iil1li(0x104,'4rvM')](Iil1li(0x1b3,'EGk#')),console[Iil1li(0x1ee,'&jAT')](liiIII[Iil1li(0x173,'2W)2')]()),$['needRemoveCookieIndex']['push'](ill11i);return;}else return;}const li1i11=await common['getLoginStatus'](iiili1);if(!li1i11&&typeof li1i11===Iil1li(0x153,'x!Ru')){console[Iil1li(0x1ee,'&jAT')](Ill11+'账号无效'),liiIII[Iil1li(0x130,'#Nem')](Iil1li(0x1a6,'W)PT')),$[Iil1li(0x208,'@s4H')][Iil1li(0x12b,'*trm')](ill11i);return;}const iI11I1=common[Iil1li(0x133,'#Nem')](ill11l);let il1i1l='',IlIlll=$['activityId'],IIIl1I='10299171',iil1ii='',IlIlli=Iil1li(0x1a8,'Fg3&'),il1i1i='https://'+IlIlli,lil111='',i11ilI=![];iil1ii=await lllill[Iil1li(0x1d5,'%7ea')](getToken,iiili1,il1i1i),await $[Iil1li(0x1e7,'66l)')](parseInt($[Iil1li(0x116,'W#iJ')]*0x1+0x1f4,0xa));if(!iil1ii){if(lllill[Iil1li(0x172,'2W)2')](lllill[Iil1li(0x11a,'5tRw')],Iil1li(0x179,'qMj0')))lilii[Iil1li(0x1a1,'UJUk')](l1iiI,ll1li);else return;}await llllI(lllill['cYsAE']),await $[Iil1li(0x1f6,'DdWr')](lllill[Iil1li(0x19e,'Ua$r')](parseInt,$['waitTime']*0x1+0x1f4,0xa));if(il1i1l=='')return;if($['runEnd']||i11ilI)return;$['shopList']='',await llllI(Iil1li(0x183,'6qgb')),await $[Iil1li(0x228,'!@I^')](lllill[Iil1li(0xfd,'J0Gc')](parseInt,lllill[Iil1li(0x1e5,'*trm')]($[Iil1li(0x139,'AGfv')],0x1)+0x1f4,0xa));if($[Iil1li(0x1d8,'x!Ru')])for(let lllI11 of $['shopList']||[]){lllill['DrOwD'](Iil1li(0x1c8,'!@I^'),lllill['lYFdO'])?(I11iII[Iil1li(0x1bc,'&jAT')](I1ilIi[Iil1li(0x1a9,'Ua$r')],{'Origin':Iil1li(0x189,'*Mbw'),'Content-Type':'application/json;\x20charset=utf-8'}),delete IiiiI['headers'][Iil1li(0x1c4,'$$Y@')]):($[Iil1li(0x14a,'hOOJ')]=lllill['fBjeZ'],$[Iil1li(0x1ad,'x!Ru')]=lllI11[Iil1li(0x1c9,'2W)2')],await llllI('mission'),await $[Iil1li(0xfe,'#Nem')](lllill[Iil1li(0x20f,'W)PT')](parseInt,lllill['vmfNp']($[Iil1li(0x20b,'66l)')],0x1)+0x5dc,0xa)));}if($['runEnd'])return{'runEnd':!![]};await $['wait'](lllill[Iil1li(0x16f,'c%rV')](parseInt,lllill['AyMsW'](lllill[Iil1li(0x20a,'&jAT')]($[Iil1li(0x151,'AJXF')],0x1),0x1f4),0xa));async function ii1ii1(I1lIli,II1ii){const Iil1ll=Iil1li,IIIIII={'bzsvQ':function(lillII,ii1ilI){return lillII>=ii1ilI;},'qkADu':lllill[Iil1ll(0x119,'%7ea')]};try{switch(I1lIli){case Iil1ll(0x18e,'EGk#'):if(II1ii['success']&&lllill[Iil1ll(0x191,'Ua$r')](II1ii['data']?.['status'],0xc8))il1i1l=II1ii['data']['data']?.[Iil1ll(0x22a,'%7ea')]?.[Iil1ll(0x1b0,'1BON')];else II1ii[Iil1ll(0x21d,'pxy(')]?.[Iil1ll(0x147,'#Nem')]==0x1f4?(console['log'](''+Ill11+II1ii['errorMessage']),liiIII[Iil1ll(0x215,'@w%z')](''+II1ii['errorMessage']),i11ilI=!![]):lllill['SmbGE']===Iil1ll(0x1f9,'6qgb')?IIli11['assign'](IllIII,ii1li):console[Iil1ll(0x144,'nx%B')]('❓'+I1lIli+'\x20'+JSON['stringify'](II1ii));break;case lllill['xRtNW']:if(II1ii[Iil1ll(0x168,'DdWr')]&&II1ii['data']?.['status']==0xc8)$[Iil1ll(0x18d,'y&@a')]=II1ii?.[Iil1ll(0x211,'4rvM')]?.[Iil1ll(0x218,'x2jW')]||[];else{if(II1ii[Iil1ll(0x1cd,'AGfv')]?.[Iil1ll(0x197,'[lgT')]==0x1f4)console['log'](''+Ill11+II1ii[Iil1ll(0x161,'$$Y@')]);else{if(lllill[Iil1ll(0x129,'c%rV')](lllill[Iil1ll(0x1d6,'c%rV')],Iil1ll(0x21a,'r&37')))console[Iil1ll(0x205,')XC3')]('❓'+I1lIli+'\x20'+JSON[Iil1ll(0x192,'J0Gc')](II1ii));else try{const liil1I=li1II(IliI11);IIIIII[Iil1ll(0x223,'!@I^')](liil1I,0x0)&&(i1l1lI[Iil1ll(0x206,'2W)2')]=liil1I);}catch{I1iIii['log'](IIIIII[Iil1ll(0x122,'c%rV')]);}}}break;case lllill[Iil1ll(0x22b,'2W)2')]:if(II1ii['success']&&II1ii[Iil1ll(0x221,'EGk#')]?.[Iil1ll(0x1f2,'x2jW')]==0xc8)$[Iil1ll(0x18a,')XC3')]=II1ii?.['data']?.[Iil1ll(0x1e2,'qMj0')],console[Iil1ll(0x227,'c%rV')](''+Ill11+(II1ii['msg']||$[Iil1ll(0x177,'xwB@')]?.['remark']||'')),liiIII['fix'](''+(II1ii[Iil1ll(0x1aa,'xwB@')]||$[Iil1ll(0x12f,'5tRw')]?.['remark']||''));else lllill['xNdGf'](II1ii['data']?.[Iil1ll(0x214,'*Mbw')],0x1f4)?console['log'](''+Ill11+II1ii[Iil1ll(0x20c,'5tRw')]):console[Iil1ll(0x137,'*Z95')]('❓'+I1lIli+'\x20'+JSON[Iil1ll(0x115,'dY!w')](II1ii));break;}}catch(i11ii1){console['log'](Iil1ll(0x1bf,'qMj0')+I1lIli+Iil1ll(0x167,'L^pc')+(i11ii1[Iil1ll(0x1f1,'*Mbw')]||i11ii1));}}async function llllI(IlIliI){const iillI=Iil1li;if($['runEnd'])return;let l1iII1=il1i1i,iiill1=null,lIli1i=null,IIIII1='POST';switch(IlIliI){case lllill[iillI(0x1ba,'6qgb')]:l1iII1+=iillI(0x146,'65fl'),lIli1i={'open_id':'','mix_nick':il1i1l||'','user_id':IIIl1I},iiill1=lllil1(iillI(0x159,'x!Ru'),Object['assign']({'jdToken':iil1ii,'source':'01','inviteNick':lil111||''}));break;case lllill['xRtNW']:l1iII1+=iillI(0x16c,'DdWr'),lIli1i={'open_id':'','mix_nick':il1i1l||'','user_id':IIIl1I},iiill1=lllill[iillI(0x20e,'5tRw')](lllil1,iillI(0x149,')XC3'),{});break;case lllill[iillI(0x138,'$o&u')]:l1iII1+=iillI(0x10c,'dY!w'),lIli1i={'open_id':'','mix_nick':il1i1l||'','user_id':IIIl1I},iiill1=lllil1(lllill[iillI(0x13a,'AGfv')],Object['assign']({'missionType':$[iillI(0x128,'xwB@')]},$[iillI(0x1e3,'&jAT')]?{'goodsNumId':$[iillI(0x1c3,'EGk#')]}:{}));break;default:console[iillI(0x175,'W)PT')](iillI(0x199,'x2jW')+IlIliI);return;}const I1lIlI={};iiill1&&Object[iillI(0x103,'66l)')](iiill1,I1lIlI);lIli1i&&Object['assign'](lIli1i,I1lIlI);const ii1ill={'url':l1iII1,'method':IIIII1,'headers':{'Accept':lllill['PXesm'],'Accept-Encoding':iillI(0x1e8,'y&@a'),'Accept-Language':lllill[iillI(0x1dd,'#Nem')],'Connection':lllill[iillI(0x136,'UJUk')],'Content-Type':lllill['brXdk'],'Cookie':iiili1,'User-Agent':iI11I1,'X-Requested-With':iillI(0x1bd,'65fl')},'params':lIli1i,'data':iiill1,'timeout':0x7530};IIIII1===iillI(0x180,'L^pc')&&(delete ii1ill['data'],delete ii1ill[iillI(0x126,'@w%z')][iillI(0x16a,'y&@a')]);il1i1i['includes'](iillI(0x174,'AJXF'))&&(lllill[iillI(0x1ef,'dY!w')](iillI(0x143,'2W)2'),'jLsMI')?(Object[iillI(0xff,'Ua$r')](ii1ill[iillI(0x127,'r&37')],{'Origin':lllill['QjkFa'],'Content-Type':'application/json;\x20charset=utf-8'}),delete ii1ill['headers'][lllill[iillI(0x178,'@s4H')]]):l1ii1[iillI(0x1b6,'5tRw')](iillI(0x18f,'*trm')+ii1ll+iillI(0x13e,'66l)')+(IliI1l['message']||lliiil)));const II1iI=0x1;let llI1II=0x0,lIli1l=null;while(llI1II<II1iI){lllill[iillI(0x118,'DdWr')](llI1II,0x0)&&await $[iillI(0x217,'W#iJ')](0x3e8);const illIi1=await common['request'](ii1ill);if(!illIi1[iillI(0x140,'5tRw')]){lIli1l=iillI(0x14d,'*Mbw')+IlIliI+'\x20请求失败\x20➜\x20'+illIi1[iillI(0x14c,'6qgb')],llI1II++;continue;}if(!illIi1[iillI(0x218,'x2jW')]){if('MSfqR'!==lllill[iillI(0x1ce,'UJUk')]){lIli1l=iillI(0x107,'r&37')+IlIliI+'\x20请求失败\x20➜\x20无响应数据',llI1II++;continue;}else{const liil1i=lllill['yKBwV'](I11iIl,{'actId':l1l11l,...IilIil,'method':l1iIi,'userId':l1l11i,'buyerNick':l1iIl||''}),lI1lil={'jsonRpc':lllill[iillI(0x17c,'[lgT')],'params':{'commonParameter':{'m':'POST','oba':liil1i[iillI(0x135,'!@I^')],'timestamp':liil1i[iillI(0x169,')XC3')],'userId':illIll},'admJson':{'actId':iIli1I,...Iiil1,'method':iiilli,'userId':l1iIIl,'buyerNick':iiilll||''}}};return lllill[iillI(0x12c,'@SlS')](lI11Il[iillI(0x124,'xwB@')](lllill[iillI(0x15b,'1BON')]),-0x1)&&delete lI1lil['params'][iillI(0x225,'L^pc')][iillI(0x18c,'&jAT')],lI1lil;}}await ii1ii1(IlIliI,illIi1[iillI(0x22f,'*Z95')]);break;}lllill[iillI(0x106,'@7Qj')](llI1II,II1iI)&&(lllill[iillI(0x1fc,'4&G4')](iillI(0x21c,'66l)'),iillI(0x11b,'@SlS'))?console[iillI(0x105,'2W)2')](lIli1l):lIIiil[iillI(0x18d,'y&@a')]=l1lIii?.[iillI(0x10e,'6qgb')]?.[iillI(0x190,'2W)2')]||[]);}function lllil1(liil1l,lI1lii){const lI1III=Iil1li,Iiili1=iil1il({'actId':IlIlll,...lI1lii,'method':liil1l,'userId':IIIl1I,'buyerNick':il1i1l||''}),Iil1l1={'jsonRpc':lI1III(0x112,'@w%z'),'params':{'commonParameter':{'m':'POST','oba':Iiili1[lI1III(0x195,'jFu7')],'timestamp':Iiili1[lI1III(0x184,'66l)')],'userId':IIIl1I},'admJson':{'actId':IlIlll,...lI1lii,'method':liil1l,'userId':IIIl1I,'buyerNick':lllill[lI1III(0x196,'EGk#')](il1i1l,'')}}};if(liil1l['indexOf'](lI1III(0x19c,'66l)'))>-0x1){if(lllill[lI1III(0x1fa,'4&G4')](lI1III(0x101,'jFu7'),lllill['dTToo'])){Iliili[lI1III(0x1af,'(!Cz')](lI1III(0x160,'4rvM')),Iliill[lI1III(0x1ee,'&jAT')](IIII11['getInlineContent']()),i1illi['needRemoveCookieIndex'][lI1III(0x216,'nx%B')](i1illl);return;}else delete Iil1l1[lI1III(0x16b,'65fl')][lI1III(0x219,'*trm')][lI1III(0x21e,'jFu7')];}return Iil1l1;}function iil1il(il1iIl){const IIliIi=Iil1li;if(IIliIi(0x21f,'EGk#')===lllill['keZPs'])iliIIi[IIliIi(0x1ea,'qMj0')](IIliIi(0x18b,'W#iJ')+ill11I);else{const il1iIi=lllill['Smizi'],iii1il=IIliIi(0x224,'$o&u'),II11li=new Date()[IIliIi(0x1a0,'nx%B')](),I1l11i=new RegExp('\x27','g'),iIIiiI=new RegExp('~','g'),liiI1i=encodeURIComponent(JSON[IIliIi(0x1a5,'$$Y@')](il1iIl))[IIliIi(0x230,'dY!w')](I1l11i,IIliIi(0x13d,'$$Y@'))[IIliIi(0x123,'y&@a')](iIIiiI,IIliIi(0x1f3,'DdWr')),ililIi=lllill['DONek'](lllill[IIliIi(0x131,'Ua$r')]('f'+iii1il+'D',liiI1i)+'c'+II11li,il1iIi),lilIIl=CryptoJS['MD5'](ililIi[IIliIi(0x1d2,'J0Gc')]())['toString']();return{'sign':lilIIl,'timeStamp':II11li};}}}var version_ = 'jsjiami.com.v7';
// prettier-ignore
function Env(t,e){"undefined"!=typeof process&&JSON.stringify(process.env).indexOf("GITHUB")>-1&&process.exit(0);class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`🔔${this.name}, 开始!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),n={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(n,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)})):this.isQuanX()?(this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t))):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();s&&this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)}))}post(t,e=(()=>{})){if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.post(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method="POST",this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){this.initGotEnv(t);const{url:s,...i}=t;this.got.post(s,i).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)})}}time(t,e=null){const s=e?new Date(e):new Date;let i={"M+":s.getMonth()+1,"d+":s.getDate(),"H+":s.getHours(),"m+":s.getMinutes(),"s+":s.getSeconds(),"q+":Math.floor((s.getMonth()+3)/3),S:s.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(s.getFullYear()+"").substr(4-RegExp.$1.length)));for(let e in i)new RegExp("("+e+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?i[e]:("00"+i[e]).substr((""+i[e]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};if(this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r))),!this.isMuteLog){let t=["","==============📣系统通知📣=============="];t.push(e),s&&t.push(s),i&&t.push(i),console.log(t.join("\n")),this.logs=this.logs.concat(t)}}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`❗️${this.name}, 错误!`,t.stack):this.log("",`❗️${this.name}, 错误!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`🔔${this.name}, 结束! 🕛 ${s} 秒`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}
