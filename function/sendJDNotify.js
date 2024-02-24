/*
一个强大的推送通知库，主要用于汇总多条账号消息后集中推送通知
默认情况下账号消息指的是单一账号的消息，它由“<前缀><用户名><消息内容>”组成，其中消息内容由一条或多条组成最后用指定字符拼接成一条合并内容
脚本最终汇总多条账号消息后集中触发推送通知业务，每个账号的消息占用一行，排列顺序以优先触发记录为原则
此库封装了多条方法，推送通知业务调用自 sendNotify.js，可引用此模块来平替引用它，支持单消息推送

账号消息自定义功能如下（环境变量）
1。关键词过滤，触发时不推送对应单条账号消息 JD_NOTIFY_FILTER_KEYWORDS
  例：export JD_NOTIFY_FILTER_KEYWORDS="空气@会员"，多个关键词用@分割
2。消息内容分隔符 JD_NOTIFY_DELIMITER，默认为中文逗号
  例：export JD_NOTIFY_DELIMITER="、"，此分隔符用于分隔多条账号消息
3。设置替换用户名为昵称 JD_NOTIFY_NICKNAMES
  例：export JD_NOTIFY_NICKNAMES="userpin_α@哥哥,userpin_β@弟弟"，多个昵称配置用英文逗号分割，用户名和昵称用@分割
4。是否显示用户名 JD_NOTIFY_SHOW_USERNAME（true/false），默认显示
  例：export JD_NOTIFY_SHOW_USERNAME="false"
5. 设置推送通知的用户名是否脱敏 JD_NOTIFY_USERNAME_DESENSITIZATION（true/false），默认不脱敏，根据用户名长度动态将部分字符用*替换
  例：JD_NOTIFY_USERNAME_DESENSITIZATION="true"
6。设置消息前缀格式 JD_NOTIFY_PREFIX_FORMATA，默认为 "【京东账号<序号>】"
  例：export JD_NOTIFY_PREFIX_FORMATA="[账号%]"，%代表账号序号
7。设置自动合并消息中用数字开头表示数量的内容 JD_NOTIFY_AUTO_MERGE_TYPE
  例：export JD_NOTIFY_AUTO_MERGE_TYPE="积分 🎟️"，多个规则用@分割，正则匹配

new Env('sendJDNotify');
*/

var iｉl='jsjiami.com.v7';function Iii11l(){const i1lIiI=(function(){return[...[iｉl,'CLjksjhiVraWmGNUiI.HKcndodPmJ.uvVwO7MFhN==','W6RcKWZdHmkn','dCkPW7pcMmk8WQ0C','C8oOWP7dOcC','D8o6arbch8oTnt1ACCk1WOa','n8kcoJ/dIq','WRBcGJypfmouWRa','WOZcK8k/pH7dHSoSDComhq','WR8Ia8kQW7CfW63cLfddU2uhWQJcJW','nqj1WRRcVaVcMZFcPZtcOcyRWQW','cfXtW67dTmofW6itW48ltWNdTY4','WOyQgmk6','EmkLW44VWPy','WQKqW44mnq','xCoyqtT7iCoUFxmjoXW2fG','WReScWz5','fZJdU1e7','WRy2f8kPW4ZcVCosrXBcRCoprwfoWOiScCkhWOOCrmkiW6f+mG','WRvKW4n0WOdcVM7cS8oLWOhdRSkwW5G','WOZcR8oKFGK','W4OgrhuS','WQvIW6XHWOq','gcBdOx43cW','W6JcKHNcKw4','WOpcPGSjfW','e1dcUXet','y8oGCY5g','ESoPWOyavW','kbvSWRJcTbe','pSo/WO1CW4ZdKCkVqHyynCkgWOC','mHVdMw4B','W6v4W7XDaa','eIFdQ30M','44gk5lU55lMq6lAe5yY7fEocPq','W5/cIWVdJSk4mg3dTtLwWPJdKSo2jW','W53dNmkbgCk9zXOGdSkLW6GiW63dOa','W7ldQCobp8oOFCkhAI3dGa','W53dQmozgSoP','W6lcJ2HBBLvm','WOb4W4j1','W5LjeSkzW5rmpCo8WP4bWRVdL8oUW68','W79VjX3dOW','v8kRW4ODWPpcRCo8zt41eCkSWRX5','amohlWhcLSkLBtG8W6S5W5yjcmkyW4nX','nSonhbdcQa','W53dKmkrh8k1tZi3gSkZW50wW7JdTG','mX54WRJcRq','WQWPbtHvWO5SW4tdOWOgefNdVu7dUbOhW7JcImoD','WRldK8ksfdG5','D8oRebzla8o7bYfPBSkMWPuJ','WR3dMCksbYK/yG','C8kUW75SFSkskmkRkCkgbItcGq','WR08W4ZcM18','kCo1WOS9ca','WOq5eZL0','WPzJB8k7wrjcamkWj8o4WO1DWRz7WOWr','WOWUW6Ovcq','W4ubwhuW','W6xcIbG','W6boW71NdSkpeSkpWOWd','WOqJW4BcUa','tSoJhWfbba','ew3dImkQWR8','WRlcJSoVvGlcS8o6WQvAWQ7cPdWq','WOJcISo2yYS','h8oXWQGMp8ofFCkDn8ktbGRcVMNcK8o1ea','W6RcGmooqxq0tSkpuCoeW64','WOOJW4/cNKq','o8kEnIm','mWRcIsTVW7BdPr8','W486wmoiamo2sJqfWQBdNZrdaG','W77cSWxcIW','CCkTW7XSF8kDlmkHimkvbXtcLa','WOCMhIzD','WQvRzmkVxHS','Df4ZWQ7cSaVcSHZcUZpcQcC3','d8kPW67cJa','WOhcTdHkvCojiCkxoWtdTCowWOz5CSoQs8kBfN3dJ8ofDZW','v8oNWPtcMfi','W6ngeq','W7ldQSonl8oWCSkbyGZdLJHrW6bSWPntWQi','ECoEWQGcAG','nSkKW6xcM8k2WRakdSoxuColW7i0qSoEC1SXW5zYqtG','WQ3cPcvl','W63dG8kndmkZBbOGdSkLW6GiW63dOa','lJhdG3CX','WRtcHdC6gSoeWR0','WP95mmk9WOO','FmonWQeDr8kgWRe'],...(function(){return[...['WOzYW7VdO2tcTG','W7rbasVdIX3cPbddO8kmy2q0W4q','aLlcUmo0WQqhfIhdHSoXWR48Bmo+WOBdSCkv','W67dLmkkdmkUAG','FCk5W5OBWRlcGCo0CG','cSoyWPiBa8oWu8k+kSkPoJhcLKBcRSoiprCysSktWO5JiW','WRbjW6XGiSkmdW','WQDvkSkzWPSQj8o2De0','rmoVhrjqhG','aSkwltpdTeJcNrLKr8kpWPXKvG','W7aVsbLP','xSkeW7CzWRq','amoForFcL8kkAZaDW4OWW4Wbd8kFW493W6tcHCk8dSkzWPPn','WPPIW5HZ','WO95W50','W45kW4z8pW','fvtcPSoH','acmCW6pcNq','WQC+W5lcQg0','W4O1q8oehq','aSkckYldQuVcMqzMzSk+WPzXxCogWO3dKgZdQ8k1WPJdGCk2xa','W4DUWOhcG0xcVSkkWQn4','W4ZcOa/cRh8','ksuGW4VcUa','zmkVW5eoWOJcIa','ov/dHSkYWQRdQCoMefrYWOJcVsO','WRSYW6ZcTh4','WOtcKmo+xXhcVSoNWPa','W6ZcGWddM8kRpq','W65Uc8kVW6i','WOC9aYC','a8kYWR5VpaDL','W6lcVLZcLM8XDtpdSSonitHdW5ZcRqTNWPtdVr0X','e8kPWQrY','zGKeWRtcQSkgWRXEW6OVvXJdPse','CCo8WQFcVKZcNdddJ8k9WQdcPGpdQwS','WRlcPcviu8oV','W5LfaSkEW4HGp8oRWR8nWOpdMSo7W7JdSCooDmkCn8o6jrK','W45ofa','p0/cUH0bW7DTl8oxW5RdL8kjpa','tCoYWQRcQuBcHYO','WPL7W7ZdP3u','WOy0i8kxW68','WO7cSmotzqu','WRddLdiwoG0iWR/dVISrjZxdOW','WQParmkEsW','W6tcJX3dJmkWjKu','WQ8Al8kFW5m','W6tdMmkih8k/Ca','WQPsjSkWWPK','lgJdSCktWPldQmoCm39JWRRcMabeWPpcISoZW4O/mSoUW6a0','rCkPW709WOu','lSkhnc7dRW','WRJdN8kefIG','W7y/rSkbkmkXuH3dRMJdSmo9W7Ww','W511W7ddJLNcRJO','WPe7ktHl','W5e/rSkIWQS0WRRcMGm','WQmtk8keW6ZcNmo1DtZcS8o8yLr4','WQbtW4RdIL/cIH3cO8olWPCMgCk0wuPQW5WZW7y','WRDuv8krWO99ASoYW4O','WPlcKmk6dre','WQdcKSk0ktxdH8oRDCoEdr/cLHddTSkvW4lcRSk7WO0BySoU','WPpcK8k/pstdGq','WPuMbc4','W57cJM9myfvzW6VdJt0','fuddH8k+WRG','WPe4W4m','WPKZW4BcO1ZcNSkvWRS','44cO5lQW5lM/6lAm5y2WooodLa','iCkrW63cQ8kB','tCoKbq','ktKLW4hcQq','tg4kW4C','DSoCucv5','WQ3dHSkqgJG','xNupW57dOM8','W5JcTKu','D8oKgHzpgmo0hJDB','WRmoW4ejnmkcWRJdLq','W4VcPfLHrg9XW4ddSre9dqRdGr3dTCoAWPRcKuHMW4RcIMS+','mmkskZtdUMlcNrG','cvlcSr4dW4z7oq','W7lcKgPgAf4','WRbXeKm+wxKPWRPHeIap','mmkrmXddMG','lXFcJZvuW7pdRqK','xmkRW7aZWRK','WOhdHSkofIO4BSkRECoLW6NdGH8','h8oSWR8WkSonySk+hmkebWlcPW'],...(function(){return['kqRcVbr8','W4hdOSogo8o3EW','W5ekqmkWja','W7NcRGhcGW','WRFdLtqAoWOoW5pdPWylfW0','WPVcHa9eyG','W486tSoFamooqtirWOldUt9shG','WQdcM8k0kspdImo/ECoUaqNcLHpdUmk0W5tcUq','W5LBd8kcW4Xuk8oRWOSQWO7dG8o7','W5/cHW3dN8kWie7dPdLKWOVdH8oYlq','WRrcn8k5','WOzYW4v8WOpcGW','udjkEbhdGCkQWRqX','WQrMW65qWPK','WQvEka','lSkBmstdVG','BSkAksJcG8k3BWS','br51WR7cVGVcTZ/cStq','oqVcHdn/W7ZdTa','W7NcIu11BW','W6mAESkScmkqDs/dHhBdG8oAW4KGfmkemIVcS8oNWRpdRSk+WOhdJW','W6bjc8kEW54','W5O7s8kgcCkRsaddU1a','WQ4sW4Si','W5WNraLPatGtWPr4ba4ZWPjKjCkQWRNdV8kgaCkT','W6jtW7LfgCkieG','qCoUWRq0va','WP5+W6hdQhu','W5xcOa/cHwP6W7FdISkgrhZcIuRcPG','WR8WhSkXW68DW7VcG0xdKfatWR0','eg8qtYFdQCkKWRy2uW','kSozlWdcQ8kLzZG','oSoepa','W7hdGmkxlSkr','WPa2bCk2','uCopBa1p','E8oyWRuquSkaWOdcSmkgqfW','s2qLW5ldTq','W7CXsbC','WP7cTSkEASk7iCoqtWFdUaz9W4O','ACoJWPtdOq','W6lcTLRcH2K+yb/dTmor','r8o4gHjngmoyfIfBFCkZWPeP','e1pcVXC','WOZcUYDQCa','WQdcL8kYot/dNmo2AmozjrFcJr/dQa','WOVcHmkKpW','ovxcOSoNWQaAeG7dMSox','W47cVv3cGeW/DrVdT8oB','WOhdV8ksgJG','pgCBwq7dO8kDWROJww3cLmkWWOq','WPi/W5NcPfJcIW','CmoPWPpdQW','s8oLhqfbgmoH','W6TnfmkEW5PMpCo9','WPRcRsStdq','cCoGpZRcNa','WOyZW4xcVfZcMSkv','W415WPtdJXNdLN5/nmk2W7K','W57cGwvmze5wW7ldMW8jnIFdRa','vJTkhGZdQCkBWPyAFa','fu/cTWa4W4nZlW','sNNdRei4h8kmW6m','h8oPWR4WpSoQE8kvfSkYdXdcTM7cLmo5fJGTECkQWQzyda','W7lcKgPgFW','WOaJaYLD','WR4sW6RcNNlcRCk5WO5ap3NcPCoIkgRdRSkbW5ldOCoYbYqrW5a','WOm2W4pcTwy','W4H+WPFdHblcIHbeimkgW77dTeG','WO95W6m','uCojWRissCkqWRRcRCkbBuSqW6tdUW','W7m0vCoFcSoTua','W47cTfRcH2C','lCkahqldSa','pSozot7cVa','mvriW6JdVW','WO7dQqxdKJPInZRdNSoPbHnW','nXvVWQ7cTalcSYe','E8kVW5enWRlcJ8oTFJ8P','WO3cK8kHnJhdISo9','omk6WQ58pafUW4pdHGNcRaZdHSkO','WQZcGHjUqG','WOORamk1W4u','WOhcM8oZvbdcSG','W6lcUuBcKg0DzaddTSohac9hW4O','E8oBWRqdAmkeWRNcVa','W7ldG8ovWOBcH30Pk8ocW5q','amkUW6tcJCkR'];}())];}())];}());Iii11l=function(){return i1lIiI;};return Iii11l();};const iI1IlI=iii1II;function iii1II(_0x503738,_0x4634ac){const _0x19230f=Iii11l();return iii1II=function(_0x29b106,_0x22285a){_0x29b106=_0x29b106-0x140;let _0x331953=_0x19230f[_0x29b106];if(iii1II['OdqpcW']===undefined){var _0x248dcf=function(_0x2c42c6){const _0x1b5a33='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x19665f='',_0x2b1b23='';for(let _0x1fad19=0x0,_0xb6d471,_0x5d23f5,_0x20a471=0x0;_0x5d23f5=_0x2c42c6['charAt'](_0x20a471++);~_0x5d23f5&&(_0xb6d471=_0x1fad19%0x4?_0xb6d471*0x40+_0x5d23f5:_0x5d23f5,_0x1fad19++%0x4)?_0x19665f+=String['fromCharCode'](0xff&_0xb6d471>>(-0x2*_0x1fad19&0x6)):0x0){_0x5d23f5=_0x1b5a33['indexOf'](_0x5d23f5);}for(let _0x5c427e=0x0,_0x9dc96c=_0x19665f['length'];_0x5c427e<_0x9dc96c;_0x5c427e++){_0x2b1b23+='%'+('00'+_0x19665f['charCodeAt'](_0x5c427e)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x2b1b23);};const _0x45fa7e=function(_0x508463,_0x4eca75){let _0x2bea73=[],_0x4c7f76=0x0,_0x45dcb2,_0x1f35e5='';_0x508463=_0x248dcf(_0x508463);let _0x28abe3;for(_0x28abe3=0x0;_0x28abe3<0x100;_0x28abe3++){_0x2bea73[_0x28abe3]=_0x28abe3;}for(_0x28abe3=0x0;_0x28abe3<0x100;_0x28abe3++){_0x4c7f76=(_0x4c7f76+_0x2bea73[_0x28abe3]+_0x4eca75['charCodeAt'](_0x28abe3%_0x4eca75['length']))%0x100,_0x45dcb2=_0x2bea73[_0x28abe3],_0x2bea73[_0x28abe3]=_0x2bea73[_0x4c7f76],_0x2bea73[_0x4c7f76]=_0x45dcb2;}_0x28abe3=0x0,_0x4c7f76=0x0;for(let _0x7df86f=0x0;_0x7df86f<_0x508463['length'];_0x7df86f++){_0x28abe3=(_0x28abe3+0x1)%0x100,_0x4c7f76=(_0x4c7f76+_0x2bea73[_0x28abe3])%0x100,_0x45dcb2=_0x2bea73[_0x28abe3],_0x2bea73[_0x28abe3]=_0x2bea73[_0x4c7f76],_0x2bea73[_0x4c7f76]=_0x45dcb2,_0x1f35e5+=String['fromCharCode'](_0x508463['charCodeAt'](_0x7df86f)^_0x2bea73[(_0x2bea73[_0x28abe3]+_0x2bea73[_0x4c7f76])%0x100]);}return _0x1f35e5;};iii1II['wtRzlD']=_0x45fa7e,_0x503738=arguments,iii1II['OdqpcW']=!![];}const _0x42c54a=_0x19230f[0x0],_0x56f1bc=_0x29b106+_0x42c54a,_0x1ae46b=_0x503738[_0x56f1bc];return!_0x1ae46b?(iii1II['ghSsDb']===undefined&&(iii1II['ghSsDb']=!![]),_0x331953=iii1II['wtRzlD'](_0x331953,_0x22285a),_0x503738[_0x56f1bc]=_0x331953):_0x331953=_0x1ae46b,_0x331953;},iii1II(_0x503738,_0x4634ac);}(function(li11I,lliiII,iiIi1i,liI1ll,ll1II,IllIii,liI1li){return li11I=li11I>>0x3,IllIii='hs',liI1li='hs',function(IllIil,ill1Ii,llIIl1,ill1Il,i1lll1){const i1lllI=iii1II;ill1Il='tfi',IllIii=ill1Il+IllIii,i1lll1='up',liI1li+=i1lll1,IllIii=llIIl1(IllIii),liI1li=llIIl1(liI1li),llIIl1=0x0;const Ii1I1I=IllIil();while(!![]&&--liI1ll+ill1Ii){try{ill1Il=parseInt(i1lllI(0x175,'i51x'))/0x1+parseInt(i1lllI(0x22c,'06XQ'))/0x2+parseInt(i1lllI(0x19b,'hoc&'))/0x3*(-parseInt(i1lllI(0x16f,'5llg'))/0x4)+-parseInt(i1lllI(0x21c,'1@ff'))/0x5*(parseInt(i1lllI(0x236,'#wIt'))/0x6)+parseInt(i1lllI(0x18c,'O$@p'))/0x7*(-parseInt(i1lllI(0x14a,'DWUB'))/0x8)+-parseInt(i1lllI(0x160,'i51x'))/0x9+parseInt(i1lllI(0x21e,'4ziK'))/0xa*(parseInt(i1lllI(0x1b2,'TjIm'))/0xb);}catch(l1i1Ii){ill1Il=llIIl1;}finally{i1lll1=Ii1I1I[IllIii]();if(li11I<=liI1ll)llIIl1?ll1II?ill1Il=i1lll1:ll1II=i1lll1:llIIl1=i1lll1;else{if(llIIl1==ll1II['replace'](/[rWHkOVPJnUMLKhGuNIwCdF=]/g,'')){if(ill1Il===ill1Ii){Ii1I1I['un'+IllIii](i1lll1);break;}Ii1I1I[liI1li](i1lll1);}}}}}(iiIi1i,lliiII,function(l1iI1,lliiI1,IiiI1,lilII,IIIiI,iii1i1,IllIll){return lliiI1='\x73\x70\x6c\x69\x74',l1iI1=arguments[0x0],l1iI1=l1iI1[lliiI1](''),IiiI1=`\x72\x65\x76\x65\x72\x73\x65`,l1iI1=l1iI1[IiiI1]('\x76'),lilII=`\x6a\x6f\x69\x6e`,(0x149587,l1iI1[lilII](''));});}(0x648,0xd4421,Iii11l,0xcb),Iii11l)&&(iｉl=0xcb);class lI1IIi{constructor(){const llIIi1=iii1II,I1l11I={'hDnRE':function(Ilil1l,iIIiii){return Ilil1l(iIIiii);},'yzPEq':llIIi1(0x178,']*vn')};this['title']='',this[llIIi1(0x215,'dk29')]='',this[llIIi1(0x1f6,'pW7V')]=I1l11I['hDnRE'](require,I1l11I[llIIi1(0x17b,'eSRU')])[llIIi1(0x1f6,'pW7V')],this[llIIi1(0x20d,'l0!o')]=[],this[llIIi1(0x164,'hed4')]='',this['_messageFilterKeywords']=[],this[llIIi1(0x1e8,'FQVm')]=!![],this['_userNameDesensitization']=![],this[llIIi1(0x151,'xvm(')]={},this[llIIi1(0x16c,'@EaN')]=llIIi1(0x14e,'O]ds'),this['_autoMergeType']='',this[llIIi1(0x211,'5llg')]();}[iI1IlI(0x184,'(]82')](){const l1i1Il=iI1IlI,iilll={'cNNVa':function(il1iI1,IlllIi){return il1iI1===IlllIi;},'DQdiB':function(iIIiil,i1l1Ii){return iIIiil>i1l1Ii;},'lqtIe':l1i1Il(0x201,'eUw4'),'aQyMm':l1i1Il(0x1f5,'FQVm'),'IRVvE':function(I1iIIi,I1iIIl){return I1iIIi!==I1iIIl;},'zVTgJ':l1i1Il(0x19c,'N$D!')};process[l1i1Il(0x1ac,'Cmfh')]['JD_NOTIFY_FILTER_KEYWORDS']&&(this[l1i1Il(0x1ab,'FQVm')]=process[l1i1Il(0x167,'l*Zq')][l1i1Il(0x1d6,'TjIm')][l1i1Il(0x1d1,'5llg')]('@')['map'](lI1IIl=>lI1IIl[l1i1Il(0x1ea,'(]82')]())[l1i1Il(0x16a,'dk29')](Boolean));this['_messageDelimiter']=process[l1i1Il(0x225,'yAF6')]['JD_NOTIFY_DELIMITER']||'，';if(process[l1i1Il(0x200,'Xnv!')]['JD_NOTIFY_NICKNAMES']){if(iilll[l1i1Il(0x247,'4ziK')]===iilll['lqtIe']){const i1ilI=process['env'][l1i1Il(0x1c1,'yAF6')][l1i1Il(0x244,'5sbR')](',');i1ilI['forEach'](iii1lI=>{const ill1I1=l1i1Il;let i1ilI1=iii1lI[ill1I1(0x19d,'O]ds')]('@');iilll[ill1I1(0x1b3,'hed4')](i1ilI1[ill1I1(0x189,'eUw4')],0x2)&&i1ilI1[0x0]&&i1ilI1[0x1]&&(this[ill1I1(0x1d4,'dk29')][i1ilI1[0x0]]=i1ilI1[0x1]);});}else{const Iil1li=l1i1Il(0x1bf,'A2Yd')['split']('|');let Iiilil=0x0;while(!![]){switch(Iil1li[Iiilil++]){case'0':liiIIl[l1i1Il(0x166,'*UDM')]=!![];continue;case'1':if(!i1i1II)return;continue;case'2':if(iilll['DQdiB'](il1i1I[l1i1Il(0x1c5,'l0!o')],0x0)&&lI1li1[l1i1Il(0x196,'!#4M')](Iil1ll=>IlIIi[l1i1Il(0x1d5,'5sbR')](Iil1ll)))return;continue;case'3':iil1iI[l1i1Il(0x181,'eUw4')]=[IlIllI];continue;case'4':iIII1I[l1i1Il(0x216,'FQVm')]=[ilil1i];continue;}break;}}}this[l1i1Il(0x1fd,'A2Yd')]=!iilll[l1i1Il(0x1b1,'@EaN')](process['env'][l1i1Il(0x1b8,'#wlk')],iilll[l1i1Il(0x140,'@EaN')]),this[l1i1Il(0x17a,'9Tzm')]=process[l1i1Il(0x1cd,'dk29')]['JD_NOTIFY_USERNAME_DESENSITIZATION']===l1i1Il(0x20e,'l0!o'),process[l1i1Il(0x1d3,'06XQ')]['JD_NOTIFY_PREFIX_FORMATA']&&(this['_prefixFormat']=process['env'][l1i1Il(0x222,'hoc&')]),process[l1i1Il(0x194,'Fe)^')]['JD_NOTIFY_AUTO_MERGE_TYPE']&&(iilll[l1i1Il(0x14b,'4ziK')](iilll['zVTgJ'],l1i1Il(0x148,'DA8P'))?this[l1i1Il(0x23f,'A2Yd')]=process[l1i1Il(0x1c9,'hoc&')][l1i1Il(0x1f4,'pW7V')]:liIiI[l1i1Il(0x15b,']*vn')]=l1il1I);}[iI1IlI(0x212,'1@ff')](lI1III,IIliIi){const l1i1II=iI1IlI,IllIiI={'BHqee':function(I1l111,IIii1l){return I1l111+IIii1l;},'SzHDS':function(I1iIII,liiI11){return I1iIII+liiI11;},'rCYAe':function(ililI1,IIii1i){return ililI1+IIii1i;},'Fdjtu':function(i1ili,Iiill1){return i1ili+Iiill1;},'UxLoo':function(I1iII1,lilII1){return I1iII1!==lilII1;},'pwEEk':'dqMxi','bSuwk':function(iill1,iii1l1){return iill1===iii1l1;},'zyeHG':l1i1II(0x197,'O]ds'),'poqFj':l1i1II(0x195,'O$@p'),'etkPO':function(IIliIl,II11ll){return IIliIl(II11ll);},'VJuHy':function(liiI1I,ililII,lI1II1,i1ilII){return liiI1I(ililII,lI1II1,i1ilII);},'xiKZd':function(iIIii1,IllIi1){return iIIii1<IllIi1;},'assLY':function(lilIII,Ii1ilI){return lilIII===Ii1ilI;},'XMddZ':function(II11i1,iliIil){return II11i1!==iliIil;},'jubxR':l1i1II(0x156,'Cmfh')},i1il1=lI1III;try{if(IllIiI[l1i1II(0x14c,'O$@p')](IllIiI[l1i1II(0x223,'$64C')],IllIiI['zyeHG'])){function iliIii(il1li){const ili111=l1i1II,iIIill=il1li['match'](/(\d+)(.+)/);return iIIill?{'count':parseInt(iIIill[0x1]),'name':iIIill[0x2][ili111(0x1a4,'K1X&')]()}:{'count':null,'name':il1li};}function lill1i(iilii,Ill11i,iilil){const Ii1I11=l1i1II;if(IllIiI[Ii1I11(0x182,'4ziK')](IllIiI[Ii1I11(0x229,'*VPe')],Ii1I11(0x1cc,'U%1U')))return Ill11i!==null&&iilil['split']('@')[Ii1I11(0x1d8,'9^a8')](iilii);else switch(l1iil[Ii1I11(0x177,'hed4')]){case 0x1:return l1l11l;case 0x2:return IllIiI['BHqee'](IilIil[Ii1I11(0x221,'K1X&')](0x0,0x1),'*');case 0x3:return IllIiI[Ii1I11(0x203,'6mL8')](IllIiI[Ii1I11(0x231,'9Tzm')](l1iIi[Ii1I11(0x1ce,'O]ds')](0x0,0x1),'*'),l1l11i[Ii1I11(0x1c8,'#wlk')](-0x1));case 0x4:return IllIiI['Fdjtu'](l1iIl[Ii1I11(0x1ef,'*VPe')](0x0,0x2),'**');}}for(let il1ll=0x0;il1ll<lI1III[l1i1II(0x19e,'DWUB')];il1ll++){if(IllIiI[l1i1II(0x144,'N$D!')](IllIiI[l1i1II(0x243,'DWUB')],IllIiI[l1i1II(0x152,'xvm(')])){const {count:i1ilIi,name:lill1l}=IllIiI['etkPO'](iliIii,lI1III[il1ll]);if(IllIiI[l1i1II(0x218,'Xnv!')](lill1i,lill1l,i1ilIi,IIliIi))for(let l1l1i1=il1ll+0x1;IllIiI[l1i1II(0x1f3,'TjIm')](l1l1i1,lI1III[l1i1II(0x15d,'5llg')]);l1l1i1++){const {count:i1iiI,name:i1ilIl}=IllIiI[l1i1II(0x16d,'@EaN')](iliIii,lI1III[l1l1i1]);IllIiI[l1i1II(0x22a,'Xnv!')](lill1l,i1ilIl)&&(lI1III[il1ll]=''+(i1ilIi+i1iiI)+lill1l,lI1III[l1i1II(0x1d9,'TjIm')](l1l1i1,0x1),l1l1i1--);}}else this['_prefixFormat']=II1Ii[l1i1II(0x17c,'FQVm')][l1i1II(0x18b,'i51x')];}return lI1III;}else illlIi=this[l1i1II(0x14f,'l*Zq')](I1lIii,this[l1i1II(0x1e6,'KIT2')]);}catch{if(IllIiI['XMddZ'](IllIiI[l1i1II(0x238,'l*Zq')],IllIiI[l1i1II(0x23c,'*VPe')]))this[l1i1II(0x20f,'!#4M')][lilIlI[0x0]]=iIIIIi[0x1];else return i1il1;}}[iI1IlI(0x17f,'U%1U')](Iil1i1){const IllIli=iI1IlI,IIii11={'czhub':IllIli(0x1cb,'KPbj'),'OuGzs':'JoiCN','ShgxP':function(iliIl1,Ii1il1){return iliIl1+Ii1il1;},'VNHpH':function(iii1ll,IIliI1){return iii1ll+IIliI1;},'RzlEW':function(il1lI,IliIIl){return il1lI!==IliIIl;},'OFeEr':IllIli(0x1e2,'pW7V'),'Znxor':'Pcfll','aUWgZ':function(I1il1l,lI1l1l){return I1il1l-lI1l1l;}};if(Iil1i1[IllIli(0x18e,'dk29')]<0x5){if(IllIli(0x1b7,'(]82')!==IIii11[IllIli(0x142,'Fe)^')])switch(Iil1i1[IllIli(0x1a2,'l*Zq')]){case 0x1:return Iil1i1;case 0x2:return IIii11[IllIli(0x1b5,'e8Lf')](Iil1i1['slice'](0x0,0x1),'*');case 0x3:return IIii11[IllIli(0x165,'5sbR')](IIii11[IllIli(0x191,'DWUB')](Iil1i1['slice'](0x0,0x1),'*'),Iil1i1[IllIli(0x146,'9^a8')](-0x1));case 0x4:return IIii11[IllIli(0x198,'hoc&')](Iil1i1[IllIli(0x1ce,'O]ds')](0x0,0x2),'**');}else li1['messages'][IllIli(0x169,'hoc&')](...illIl1);}else{if(IIii11[IllIli(0x20c,'9Tzm')](IIii11[IllIli(0x1fa,'DA8P')],IIii11[IllIli(0x199,'KIT2')]))return IIii11['VNHpH'](Iil1i1[IllIli(0x190,'XkVO')](0x0,0x2)+'*'['repeat'](IIii11[IllIli(0x147,'6mL8')](Iil1i1[IllIli(0x1aa,'9Tzm')],0x4)),Iil1i1[IllIli(0x1af,'yAF6')](-0x2));else{const Ill11I='2|3|0|9|11|6|5|8|1|7|4|10'[IllIli(0x1ba,'*VPe')]('|');let I1il1i=0x0;while(!![]){switch(Ill11I[I1il1i++]){case'0':this[IllIli(0x22e,'DWUB')]=iIIIII('../sendNotify')[IllIli(0x23e,'l0!o')];continue;case'1':this[IllIli(0x209,'06XQ')]={};continue;case'2':this[IllIli(0x1d0,'6mL8')]='';continue;case'3':this['content']='';continue;case'4':this['_autoMergeType']='';continue;case'5':this['_showUserName']=!![];continue;case'6':this['_messageFilterKeywords']=[];continue;case'7':this[IllIli(0x1de,'5llg')]=IIii11['czhub'];continue;case'8':this[IllIli(0x192,'Xnv!')]=![];continue;case'9':this['_accountsArray']=[];continue;case'10':this[IllIli(0x211,'5llg')]();continue;case'11':this[IllIli(0x158,'Xnv!')]='';continue;}break;}}}}['_formatAcountsMessage'](){const ii1Ii=iI1IlI,IliIIi={'McBTy':function(i1iil,llI11l){return i1iil===llI11l;},'igVbM':function(I1llIl,i1iii){return I1llIl>i1iii;},'PqMwH':function(I1llIi,IIii1I){return I1llIi!==IIii1I;},'EaouL':'EEWQt','hFlBY':'IMazc'};let lI1l1i=[];for(let {userName:llI11i,index:i1iIi1,messages:l1l1il}of this[ii1Ii(0x1c0,'e8Lf')]){l1l1il=l1l1il[ii1Ii(0x1d2,'KPbj')](iliIi1=>iliIi1!==null&&iliIi1!==undefined&&iliIi1!=='');const I11i1I=lI1l1i[ii1Ii(0x1c6,'K1X&')](l1l1ii=>l1l1ii[ii1Ii(0x1ff,'Xnv!')]===llI11i);if(I11i1I){IliIIi[ii1Ii(0x1b9,'DWUB')](I11i1I[ii1Ii(0x141,'*UDM')],'')&&(I11i1I[ii1Ii(0x14d,'4ziK')]=i1iIi1);if(IliIIi[ii1Ii(0x159,'Xnv!')](l1l1il[ii1Ii(0x18e,'dk29')],0x0)){if(IliIIi['PqMwH'](IliIIi['EaouL'],IliIIi[ii1Ii(0x1a3,'FQVm')]))I11i1I[ii1Ii(0x1d7,'*VPe')][ii1Ii(0x202,'A2Yd')](...l1l1il);else{const Ii1iii=this[ii1Ii(0x21b,'TjIm')][ii1Ii(0x171,'*VPe')](iIIilI=>i11ili(iIIilI[ii1Ii(0x21d,'9^a8')])===iil1l1(lllli));Ii1iii&&this[ii1Ii(0x239,'U%1U')](Ii1iii);}}}else lI1l1i['push']({'userName':llI11i,'index':i1iIi1,'messages':l1l1il});}lI1l1i=lI1l1i['filter'](il1l1=>il1l1['messages'][ii1Ii(0x1e1,'xvm(')]>0x0),this[ii1Ii(0x234,'06XQ')]&&lI1l1i[ii1Ii(0x183,'ZTd3')](Ii1iil=>{const ii1Il=ii1Ii;Ii1iil[ii1Il(0x1ca,'hoc&')]=this[ii1Il(0x245,'6mL8')](Ii1iil[ii1Il(0x22d,']*vn')],this[ii1Il(0x157,'DWUB')]);}),this[ii1Ii(0x1e9,'l*Zq')]=lI1l1i;}[iI1IlI(0x143,'4ziK')]({title:Ilil1i,content:iili1,messageDelimiter:II11ii}){const l1iII=iI1IlI,Iil1iI={'snVSf':function(II11il,iIIil1){return II11il!==iIIil1;},'QMNvl':function(IlllII,I1il1I){return IlllII!==I1il1I;},'NqEKn':l1iII(0x205,'KPbj'),'oJgdU':function(II111,lI1l1I){return II111!==lI1l1I;}};Iil1iI[l1iII(0x1e0,'[*9L')](Ilil1i,undefined)&&(this[l1iII(0x176,'K1X&')]=Ilil1i),Iil1iI[l1iII(0x145,'ZTd3')](iili1,undefined)&&(Iil1iI[l1iII(0x1ed,'Fe)^')]!==Iil1iI['NqEKn']?this[l1iII(0x15a,'eUw4')]=I1iIl1[l1iII(0x1ee,'(]82')][l1iII(0x248,'e8Lf')]:this[l1iII(0x1f2,'[*9L')]=iili1),Iil1iI['oJgdU'](II11ii,undefined)&&(this[l1iII(0x17d,'xvm(')]=II11ii);}[iI1IlI(0x204,'DA8P')](liI1i1){const iI1Ill=iI1IlI;this[iI1Ill(0x1fb,'yAF6')]=liI1i1;}['updateContent'](I11i11){const lilI1=iI1IlI;this[lilI1(0x1ae,'eSRU')]=I11i11;}['create'](I1llII,Iil1il){const IIIi1=iI1IlI,I11i1i={'vYHRF':IIIi1(0x246,'K1X&'),'mfkWA':function(iIIili,Ii1iiI){return iIIili>Ii1iiI;},'EEDkE':function(Ilil1I,iliIiI){return Ilil1I+iliIiI;},'vziYC':function(II11iI,Il1i1l){return II11iI-Il1i1l;},'baSAO':IIIi1(0x1b0,'e8Lf'),'qvBgy':'fkEWl','TaOZE':function(Iil1ii,lill1I){return Iil1ii===lill1I;},'bjJNO':function(Ii1ii1,Ilil11){return Ii1ii1!==Ilil11;},'OdYdC':'fyILS','hVzWT':function(i1ii1,il1ii){return i1ii1(il1ii);}},l1l1iI=this['_messageFilterKeywords'],I1llI1=this['_prefixFormat'],I11i1l=this[IIIi1(0x1c7,'TjIm')],il1il=this[IIIi1(0x249,'Fe)^')];I1llII===undefined&&(I1llII='');const Il1i1i={'index':''+I1llII,'userName':Iil1il,'fixed':![],'messages':[],'originMessages':[],'insert'(llI111){const i1llli=IIIi1;if(i1llli(0x217,'ZTd3')===I11i1i[i1llli(0x232,'e8Lf')])this[i1llli(0x226,'DA8P')]=this['_accountsArray'][i1llli(0x1b6,'eUw4')](IlllI1=>IlllI1!==i11ill);else{if(!llI111)return;if(Il1i1i[i1llli(0x22b,'g2ox')])return;Il1i1i[i1llli(0x20a,'dk29')][i1llli(0x193,'Fe)^')](llI111);if(I11i1i[i1llli(0x1c3,'l0!o')](l1l1iI[i1llli(0x186,'yAF6')],0x0)&&l1l1iI[i1llli(0x20b,'9^a8')](I1il11=>llI111[i1llli(0x172,'[*9L')](I1il11)))return;Il1i1i['messages']['push'](llI111);}},'fix'(lI1l11){const i1llll=IIIi1;if(I11i1i['baSAO']===I11i1i['qvBgy'])return I11i1i[i1llll(0x1e5,'9Tzm')](I11i1i['EEDkE'](iiilli[i1llll(0x228,'06XQ')](0x0,0x2),'*'[i1llll(0x149,']*vn')](I11i1i['vziYC'](l1iIIl[i1llll(0x1e1,'xvm(')],0x4))),iiilll[i1llll(0x170,'$64C')](-0x2));else{const II11i=i1llll(0x1c2,'FQVm')[i1llll(0x220,'TjIm')]('|');let iI1Iii=0x0;while(!![]){switch(II11i[iI1Iii++]){case'0':Il1i1i[i1llll(0x1bb,'5llg')]=!![];continue;case'1':if(!lI1l11)return;continue;case'2':if(I11i1i[i1llll(0x1db,'*VPe')](l1l1iI['length'],0x0)&&l1l1iI[i1llll(0x1e3,'N$D!')](liI1ii=>lI1l11[i1llll(0x1a1,'@EaN')](liI1ii)))return;continue;case'3':Il1i1i['messages']=[lI1l11];continue;case'4':Il1i1i[i1llll(0x240,']*vn')]=[lI1l11];continue;}break;}}},'updateIndex'(lIIiIl){const iI1Ili=IIIi1;Il1i1i[iI1Ili(0x237,'U%1U')]=''+lIIiIl;},'updateUsername'(iI1Iil){const llIIiI=IIIi1;Il1i1i[llIIiI(0x18a,'DWUB')]=iI1Iil;},'getInlineContent'(){const IIIl1=IIIi1,il1iI={'iiFhD':function(llIlIl,II11I){const iI1111=iii1II;return I11i1i[iI1111(0x1dd,'DWUB')](llIlIl,II11I);}};let i1iIii=this[IIIl1(0x181,'eUw4')][IIIl1(0x214,'u#UZ')](this[IIIl1(0x16e,'i51x')])[IIIl1(0x1cf,'KPbj')]();if(this[IIIl1(0x155,'FQVm')]){if(I11i1i['bjJNO'](I11i1i[IIIl1(0x1a0,'hoc&')],I11i1i['OdYdC'])){if(il1iI[IIIl1(0x162,'i51x')](this[IIIl1(0x230,'2!D!')][IIIl1(0x233,'@EaN')],0x0))return'';this[IIIl1(0x1a6,'06XQ')]();if(il1iI['iiFhD'](this[IIIl1(0x173,'KIT2')]['length'],0x0))return'';let lIIiIi='';for(const {userName:liI1iI,index:iI1Il1,messages:i1iIl1}of this['_accountsArray']){const i1lli1=this[IIIl1(0x1df,'i51x')][IIIl1(0x185,'DA8P')]('%',iI1Il1),llIlII=lil111(this['_nicknames'][liI1iI]||liI1iI),IIlII=this[IIIl1(0x1ad,'9^a8')]?(this[IIIl1(0x21f,'i51x')]&&i11ilI?this[IIIl1(0x1c4,'l0!o')](llIlII):llIlII)+'：':'',lIIiII=i1iIl1[IIIl1(0x154,'Fe)^')](this['_messageDelimiter'])[IIIl1(0x1a7,'2!D!')]();lIIiIi+=''+i1lli1+IIlII+lIIiII+'\x0a';}return lIIiIi[IIIl1(0x174,'N$D!')]();}else i1iIii=this[IIIl1(0x150,'eUw4')](i1iIii,this[IIIl1(0x18f,'*VPe')]);}const i1iIil=I1llI1[IIIl1(0x22f,'l0!o')]('%',this[IIIl1(0x23a,'u#UZ')]),liI1il=I11i1i['hVzWT'](decodeURIComponent,I11i1l[this[IIIl1(0x1dc,'[*9L')]]||this[IIIl1(0x235,'DA8P')]),llIlIi=il1il?liI1il+'：':'';return''+i1iIil+llIlIi+(i1iIii||'无');}};return this[IIIi1(0x241,'g2ox')]['push'](Il1i1i),Il1i1i;}[iI1IlI(0x1a5,'2!D!')](i1iIlI){const ii1ii=iI1IlI;this[ii1ii(0x1bc,'pW7V')]=this[ii1ii(0x241,'g2ox')][ii1ii(0x213,'hoc&')](li111=>li111!==i1iIlI);}[iI1IlI(0x188,'!#4M')](liI1lI){const Iii1=iI1IlI,lIIiI1=this[Iii1(0x1a9,'eSRU')][Iii1(0x179,'U%1U')](ll1I1=>decodeURIComponent(ll1I1['userName'])===decodeURIComponent(liI1lI));lIIiI1&&this[Iii1(0x23d,'ZTd3')](lIIiI1);}['disposeByIndex'](Ii1ili){const I1I1lI=iI1IlI,iI1Ii1=this[I1I1lI(0x15e,'dk29')][I1I1lI(0x242,'A2Yd')](Ii1ill=>Ii1ill['index']===''+Ii1ili);iI1Ii1&&this[I1I1lI(0x1b4,'l*Zq')](iI1Ii1);}[iI1IlI(0x168,'O$@p')](llIlI1=![]){const ii1il=iI1IlI,iI1IiI={'IjyKb':function(i1iIli,i1iIll){return i1iIli!==i1iIll;},'wvysL':'siTwA','wAfwb':function(i1lliI,liI1l1){return i1lliI(liI1l1);}};if(this['_accountsArray']['length']===0x0)return'';this[ii1il(0x15c,'K1X&')]();if(this[ii1il(0x187,'Cmfh')][ii1il(0x1eb,'Fe)^')]===0x0)return'';let IIlI1='';for(const {userName:IllIlI,index:IiillI,messages:ili11I}of this[ii1il(0x1fc,'N$D!')]){if(iI1IiI[ii1il(0x161,'hoc&')](iI1IiI[ii1il(0x163,'K1X&')],iI1IiI[ii1il(0x17e,'DA8P')]))I1lIl1['userName']=lil11i;else{const lliiIl=this[ii1il(0x23b,'dk29')][ii1il(0x219,'hoc&')]('%',IiillI),li11i=iI1IiI[ii1il(0x16b,'#wlk')](decodeURIComponent,this[ii1il(0x1f1,']*vn')][IllIlI]||IllIlI),lliiIi=this[ii1il(0x19f,'#wlk')]?(this[ii1il(0x19a,'*VPe')]&&llIlI1?this[ii1il(0x1f8,'XkVO')](li11i):li11i)+'：':'',iiIi1I=ili11I['join'](this[ii1il(0x1e7,'l0!o')])['trim']();IIlI1+=''+lliiIl+lliiIi+iiIi1I+'\x0a';}}return IIlI1[ii1il(0x206,'XkVO')]();}async['send'](IllIl1,ll1Ii){const l1iIlI=iI1IlI;await this[l1iIlI(0x1fe,'1@ff')](IllIl1,ll1Ii);}async[iI1IlI(0x210,'06XQ')](ll1Il,iiIi11){const iI111I=iI1IlI;await this[iI111I(0x208,'u#UZ')](ll1Il,iiIi11);}async['push'](){const IIIlI1=iI1IlI,ill1II={'btCrs':function(l1i1I1,llIIil){return l1i1I1+llIIil;}};this[IIIlI1(0x227,'KIT2')]=this[IIIlI1(0x15f,'5llg')]['trim']();let i1llil=this[IIIlI1(0x153,'TjIm')];const i1llii=this[IIIlI1(0x18d,'(]82')](!![]);if(i1llii)i1llil=ill1II[IIIlI1(0x1be,'K1X&')](i1llii[IIIlI1(0x1f7,'5sbR')]()+'\x0a\x0a',i1llil);await this[IIIlI1(0x180,'9Tzm')](this[IIIlI1(0x1fb,'yAF6')],i1llil);}}module[iI1IlI(0x1f9,'O$@p')]=new lI1IIi();var version_ = 'jsjiami.com.v7';
