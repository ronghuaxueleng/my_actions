/*
活动名称：服饰美妆签到
环境变量：jd_clothing_beauty_interval // 自定义运行间隔时长（整数，单位毫秒），默认1500
        jd_clothing_beauty_notify // 是否推送通知（true/false），默认不推送
        jd_clothing_beauty_pinFilter // 账号pin过滤，多个用@进行分割

定时随机

*/

const $ = new Env('服饰美妆签到')
const _0x2b549b=_0x1b7b;(function(_0x15163f,_0x3c63d4){const _0x4b9487=_0x1b7b,_0x541a61=_0x15163f();while(!![]){try{const _0x39cb75=-parseInt(_0x4b9487(0x1af,'Dz^9'))/0x1+parseInt(_0x4b9487(0x1c0,'#r&5'))/0x2*(parseInt(_0x4b9487(0x1c7,'ThkF'))/0x3)+-parseInt(_0x4b9487(0x1a0,'ThkF'))/0x4+parseInt(_0x4b9487(0x190,'CP^C'))/0x5*(parseInt(_0x4b9487(0x19f,'YQ@@'))/0x6)+-parseInt(_0x4b9487(0x14c,'e@fY'))/0x7*(parseInt(_0x4b9487(0x195,'N&VU'))/0x8)+-parseInt(_0x4b9487(0x140,'*C6t'))/0x9*(-parseInt(_0x4b9487(0x1d5,'zdAq'))/0xa)+parseInt(_0x4b9487(0x13f,'fYlV'))/0xb*(-parseInt(_0x4b9487(0x18f,'PVVJ'))/0xc);if(_0x39cb75===_0x3c63d4)break;else _0x541a61['push'](_0x541a61['shift']());}catch(_0x5724ae){_0x541a61['push'](_0x541a61['shift']());}}}(_0x4c3b,0xd81f4));const jdCookie=require(_0x2b549b(0x1c1,'&6V0')),notify=require('./utils/Rebels_sendJDNotify'),common=require('./utils/Rebels_jdCommon'),{H5st}=require('./utils/Rebels_H');let taskThreads=process[_0x2b549b(0x1cf,'Rx9Z')][_0x2b549b(0x168,'kdo6')]||'1';const runInterval=process['env'][_0x2b549b(0x1da,'#o4U')]||'1500',isNotify=(process[_0x2b549b(0x1b8,'ewxq')][_0x2b549b(0x1b2,'xo0#')]||process[_0x2b549b(0x17f,'(T9^')][_0x2b549b(0x1a5,'LqFs')])===_0x2b549b(0x198,'#o4U'),pinFilter=(process[_0x2b549b(0x1b8,'ewxq')][_0x2b549b(0x167,'xo0#')]||'')[_0x2b549b(0x149,'(T9^')]('@'),maxThreads=0x3;let cookiesArr=Object[_0x2b549b(0x165,'uoPL')](jdCookie)[_0x2b549b(0x196,'Rx9Z')](_0x249cf9=>jdCookie[_0x249cf9])['filter'](_0x505720=>_0x505720);function _0x1b7b(_0x506523,_0x53b464){const _0x4c3be2=_0x4c3b();return _0x1b7b=function(_0x1b7b26,_0x174849){_0x1b7b26=_0x1b7b26-0x135;let _0x22b531=_0x4c3be2[_0x1b7b26];if(_0x1b7b['Eczcsw']===undefined){var _0x58ebf1=function(_0x505720){const _0x2f5ed9='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x22eb0f='',_0x3a555e='';for(let _0x560367=0x0,_0x2d7504,_0x5d3d36,_0x3e99d1=0x0;_0x5d3d36=_0x505720['charAt'](_0x3e99d1++);~_0x5d3d36&&(_0x2d7504=_0x560367%0x4?_0x2d7504*0x40+_0x5d3d36:_0x5d3d36,_0x560367++%0x4)?_0x22eb0f+=String['fromCharCode'](0xff&_0x2d7504>>(-0x2*_0x560367&0x6)):0x0){_0x5d3d36=_0x2f5ed9['indexOf'](_0x5d3d36);}for(let _0x438f56=0x0,_0x57c752=_0x22eb0f['length'];_0x438f56<_0x57c752;_0x438f56++){_0x3a555e+='%'+('00'+_0x22eb0f['charCodeAt'](_0x438f56)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x3a555e);};const _0x249cf9=function(_0x3ac939,_0x56f317){let _0x3b83a4=[],_0x10275d=0x0,_0x544e83,_0x27436f='';_0x3ac939=_0x58ebf1(_0x3ac939);let _0x1348a5;for(_0x1348a5=0x0;_0x1348a5<0x100;_0x1348a5++){_0x3b83a4[_0x1348a5]=_0x1348a5;}for(_0x1348a5=0x0;_0x1348a5<0x100;_0x1348a5++){_0x10275d=(_0x10275d+_0x3b83a4[_0x1348a5]+_0x56f317['charCodeAt'](_0x1348a5%_0x56f317['length']))%0x100,_0x544e83=_0x3b83a4[_0x1348a5],_0x3b83a4[_0x1348a5]=_0x3b83a4[_0x10275d],_0x3b83a4[_0x10275d]=_0x544e83;}_0x1348a5=0x0,_0x10275d=0x0;for(let _0x273734=0x0;_0x273734<_0x3ac939['length'];_0x273734++){_0x1348a5=(_0x1348a5+0x1)%0x100,_0x10275d=(_0x10275d+_0x3b83a4[_0x1348a5])%0x100,_0x544e83=_0x3b83a4[_0x1348a5],_0x3b83a4[_0x1348a5]=_0x3b83a4[_0x10275d],_0x3b83a4[_0x10275d]=_0x544e83,_0x27436f+=String['fromCharCode'](_0x3ac939['charCodeAt'](_0x273734)^_0x3b83a4[(_0x3b83a4[_0x1348a5]+_0x3b83a4[_0x10275d])%0x100]);}return _0x27436f;};_0x1b7b['OrmSSe']=_0x249cf9,_0x506523=arguments,_0x1b7b['Eczcsw']=!![];}const _0x3856b7=_0x4c3be2[0x0],_0x527890=_0x1b7b26+_0x3856b7,_0x4da15f=_0x506523[_0x527890];return!_0x4da15f?(_0x1b7b['QkVpbA']===undefined&&(_0x1b7b['QkVpbA']=!![]),_0x22b531=_0x1b7b['OrmSSe'](_0x22b531,_0x174849),_0x506523[_0x527890]=_0x22b531):_0x22b531=_0x4da15f,_0x22b531;},_0x1b7b(_0x506523,_0x53b464);}function _0x4c3b(){const _0x98fa29=['WOlcGCkwWQBcOW','r1iw','6yoF55Yq5O6y6ygVttar','cmocW5KT','W49sWQiLmwNcPmkVWRFdVSk8WPqLd8opWPy8pSkYss4','rxddVLW','zmoKhG','ySoVjK9rBLldNvBdR8kDuqJcOevpW5VdTCoyWOSBWQBcKmk1fr/cHSoE','WOS8hKRdTSkGWOtdP08GzYisqaFdP8oXWQBdVSkWW7yeWORcK8k3WRbS','WPBWO6gxWPpOVltOORFNU4FMN6ldPa','r8kOsSkFEmo2','W5nfWQbV','tGTKmq','WQqXcCkpW5/dMbn9WPhdKceektxcI8oLeCoN','8kEFOSky562G5yQg5OM65yII772Q6iYd5B2V','r0aypq','WR3dRcWFW44A','W6ldS8or','coIUG+AZT+wMHEI3SSoP4P2gjW','W5xdL8o3W6ZcHmoR','b2bUWQrp','cmk8uq','ASocW7ldU8oTt8oWAmopWRNcG8kjWPe','ydDRjvPCoJnGfW','WPeAlMOBW7xdJ8kD','u8oXvxfBEa','4P64g+ADSUECHEISMoAZLSoS','W4hORQ/MSipLK6tLUi7dRW','qWiGbNeFWQldGxa3m8kyW6uQl8kzs8kKWRpdRu9fv0JdTSk9WP/cGSoeWRBcJSoDCCkPWRXhWQHqlmkbkW3cRJyLz8kf','A8oKhuK','5BAP6kYA57YB6lA86lYL6l2b6kks5B615yIV6lEp5y6s','baxdJG','5lQs6loWApczG6W','56ETW4pOV6lOOBJPL53PMP7MLOpPLlW','5y656yAK54Io5OcF57ML5PY1WObBWONdHCkyEfKQgmoc','6zAd6zQ55Pw16zwWWP0Qdq','DCo6WR4','WOq1mv3dOW','WOaDW7SZbfRcNSk4kSk7gXa','W5BdGSo3W6tcH8o/WQWUW44','4PYMWPhMNzNOGy7MRzdNO5FLPiJNKRldOa','6lA65y6e5Pwu5PE7','oCkbWRhcQSk9eq','W7jilSogu1XW','waW3fG','W6lcVYi2W6xdU8oV','mwT2','WQbfbCk1WQz1W6dcOG','xmkWW4/cKXZcGrLUWOG','dJNdLLtdOrddIf7cGmkqW5eeuvjOWO3cGCoGv8k8WQ3cL8oXcgtcUSk/','5lI96lkmyFcQGRy','44g55O2r56Ea44oB6k6K5yAF6i+85y+nWRXLW75aW6ZcVG','W5fXW4Pe','W7pdJarDrsG7WPm6wSo+W7K','WQaoW60','WOzEl8kbWP3dSmk/z3G8WQi','kxzKkq','W7/cRYqXW5ldRCoXWQJcV8kAsgbGWR7dShmnCmkyW4hdHa','iSokW40vWOJcICkdW6dcSSosW6tdVmkfquycf8kAW7SMW61GDmoVW5y','WPeCjW','W6Duna','Cmo7WRPsWQBcV8obWOy','W5bhW7DZCWRcISkhgmkXDqnxAsFcTSkGeCkTW45usemwWOrYiG','td4WW74EW7z5BLDRW4e','EmkoWOLDW4ZcG8kuWOJcOCooW6xcHmkz','aSk6wmoxW5CFW7a','WOhcHCkmWPi','B8oUdwfyCLxdLfJdPa','WQKoW6KB','qCkXbKPbW7VdOCozW6ddTSoqWQtdMmkNW5rRW7zUxSocn8kmC8kknW','WPFcGCkpWPlcKmoikSkrWPNcVSkh','W4XeWQa','W5fcWRqP','W41yWQa','WQekW7mDASkl','4PI8u+IfNUwSQEs6REI8Q+IHMoMwIUMzUUAuL+MuQoISGUE8I+MuUEIUQq','wHhdHCorWRBcVq','56YM5yUc5OUs5yMC','WQVcMCk0bIXk','hrzeASk3r8k+W43dO8oCrbK','W69ykCoHBL14WO7dGCkXWPD8WQNcUmoVW6eeW7ddNd9W','tHaGjmk7WO3cQMVcQW','ySoVjK9rBLldNvBdR8kDuqJcOevpW5VdTCoyWPuDWRZcV8k6aa','W7WwoW','44gA6lAy5y2o','WQ1bW7ldTmk2WQnngG','hgLMWQnpW65/','gYxdGNWSztTZ','W7KDW4i','a8klDstdPZG8FfpcVa','q8kIumk0DmoIhSk+WQjj','WPFcKCkwWRBcJmoi','W7qhW4ddG8kxW4e7uCkgW5r5W5flsIlcNCkBstS','WP01f8k/','WQeaW7O','5yYD6ys65BYW5zgb54Ub5OcrD8ojrHhcTmkDWRBcPSoTdW','oMi5zeimyJjmm8kaevO','emkziN3cMwPUkGFdPa','4P6bt+IgH+ADLUI/JUIIR+McV+wlSos7TEMwHEIURCoh','hSoLu8kuW6ldICkah8om','6lsJ5y626l635RUQWR8wWQG','wSoSqfTB','WRCHbSkvW7GrW4VcLG','ECovW780WRNdP8op','nCokWO5/zGddJmkBfsFdSSoeDmkyW5FdTSk8WPpcJq','W6vsbCoRsf1NWOddLmkGWR1LWQpcKSo1W7CKW7NdLJDTWPNcPW','WOWXlW','WRhINzzH','B8oUdwbszK/dM2ZdTCkBEH/cTG','u8o7xfnDyG','wHHOjeTw','WQGbW6S','r8k6pG','p3W5','W5TfWQK','hKpdOgpdKM4Zca','bCoUWP0','W6hcSHOPW50HW5zX','W5tOR4ZMSjRLP5hOT4RcTokDKa7ML7BLKPFLUzNMLjZMJBq','bCkJrSoAW5iqW6G7WPFdMCksdxb/EvTpoqVcRcpdTmoyEmoWWOVdQNBdMMGxWPzu','jcjE','WO03jG','n2bol00wp3NdS8kdW6FdSmoRC8oqeIVdRmkpWPjzW7eTt8oaW4hdIG','g1tdUG','W7vDWQPdkSkjWO3cMJldQte','WQpdJCkC','lYHnW4ldQNjj','u8oXvq','feldRwZdS2SLea','c8oUWPxcPJBcTIu','WRldQYC','weqajSoRaCky','rCkXa8kPW7/dUSk/bConfSktW4WaW4hdQmkHCx7cLJ9H','fCo+hmomi8kKvCkUWPzGnbbK','x8oFW6rvBJVcSgbkW5j0WOJdUq','W4HzWQqTfMJcRmkZ','kJtcLq','WOy7gq','rSkMpG','e2LZWPDyW7n0tuvQW5pcNg5e','tuqfemoHhCkhW6NdL8oeCI3cJCkc','WP01f8k/W67dGr9Q','WPiTiKRdV8k8WOpdNum5yq8uvG','eHVdLhFdGG','WQmkW7GEtmkgWPxcRWxdUqhcOSo0W5D4u3ZcSNxdJ24','W7GzimkEWOfjW5ZcTq','ySkvgcJcKmoWWONcKG','vmktWODYB2RdQ1BcRJXTuSod','cCorW5CrWP7dNCoyW6lcH8oBW73cTW','BZmJEXnjFhJdKSkIW5FdJSof','Emo+cKq','fx90WQ5nW7i','qNRdOa','5lQg55kL5B6W5ysWyhVcHa','WRexeN0','qhtdQKO','pYXqW77cI2HqW6i','b8kYqSovW5m','Emo2WRWmW6pdQCkxW4xdTYVcPCkjWOtdGSoq','jIHCW67cJwrqW6H0kZWwW7jpafRdHSkyDSoXW7C','kSkxWRlcR8k7hmkT','WOlcGCkmWRRcJmoammk2WPlcM8kheCoWpSk7aa','W5POW45v','kCkhWQpcRCkUfSk8vG','j8onW54','WO3cKmkmWOpcKCkwDSo3WP/dRCogeSkQmCkXwSonWOTo'];_0x4c3b=function(){return _0x98fa29;};return _0x4c3b();}!cookiesArr[0x0]&&($[_0x2b549b(0x144,'LqFs')]($[_0x2b549b(0x15c,'p(x^')],_0x2b549b(0x193,'CP^C')),process[_0x2b549b(0x194,'p(x^')](0x1));!(async()=>{const _0x98911b=_0x2b549b;notify[_0x98911b(0x16a,'fYlV')]({'title':$[_0x98911b(0x155,'uoPL')]}),await Main(),isNotify&&notify[_0x98911b(0x1a3,'xo0#')]()&&await notify[_0x98911b(0x1a8,'NdmR')]();})()[_0x2b549b(0x157,'jWti')](_0x2f5ed9=>$[_0x2b549b(0x179,'8EIR')](_0x2f5ed9))[_0x2b549b(0x1a1,'jWti')](()=>$[_0x2b549b(0x16b,'r(9K')]());async function Main(){const _0x4266dc=_0x2b549b;try{try{const _0x3a555e=parseInt(taskThreads);_0x3a555e>0x0&&_0x3a555e!==0x1&&(taskThreads=_0x3a555e);}catch{taskThreads=0x1;}taskThreads=Math[_0x4266dc(0x1ca,'kdo6')](taskThreads,maxThreads),$[_0x4266dc(0x1c6,'oH(h')]=null;if(runInterval)try{const _0x560367=parseInt(runInterval);_0x560367>=0x0&&($[_0x4266dc(0x147,'q@Wd')]=_0x560367);}catch{console['log'](_0x4266dc(0x1ab,'ewxq'));}$[_0x4266dc(0x13e,'T%To')]=[],console[_0x4266dc(0x152,'uoPL')]('=========='+$['name']+_0x4266dc(0x1bf,'N&VU')),console['log'](_0x4266dc(0x183,'6EcP')+$[_0x4266dc(0x156,'IPNc')]/0x3e8+_0x4266dc(0x181,'8EIR')),console[_0x4266dc(0x1d4,'CP^C')](_0x4266dc(0x153,'U2@e')+common[_0x4266dc(0x145,'YQ@@')]()+']'),console[_0x4266dc(0x184,'ZPup')](_0x4266dc(0x162,'N&VU')+(isNotify?'开启':'关闭')+']'),console[_0x4266dc(0x19b,'Huh(')](_0x4266dc(0x1c4,'mOk1')+pinFilter['join'](',\x20')+']'),console[_0x4266dc(0x135,'ze#h')](_0x4266dc(0x1b9,'&6V0')+$['name']+_0x4266dc(0x182,'(T9^')),console[_0x4266dc(0x142,'^zm%')](''),await common[_0x4266dc(0x13a,'6EcP')](taskThreads,cookiesArr,taskFnc),$['runEnd']=![];$[_0x4266dc(0x164,'NdmR')]['length']>0x0&&(cookiesArr=cookiesArr['filter']((_0x2d7504,_0x5d3d36)=>!$[_0x4266dc(0x14a,'Rx9Z')][_0x4266dc(0x19d,'ZPup')](_0x5d3d36+0x1)),$[_0x4266dc(0x159,'IPNc')]=[]);const _0x22eb0f=notify[_0x4266dc(0x1ba,'fYlV')]();_0x22eb0f&&console[_0x4266dc(0x1d2,'r(9K')](_0x4266dc(0x169,'ewxq')+_0x22eb0f[_0x4266dc(0x15a,'NR]v')](/：/g,_0x4266dc(0x1cb,'rWkB')));}catch(_0x3e99d1){console[_0x4266dc(0x166,'xo0#')](_0x4266dc(0x1c2,'Rx9Z')+_0x3e99d1);}}async function taskFnc(_0x438f56,_0x57c752){const _0xf69d2e=_0x2b549b;if($[_0xf69d2e(0x1bb,'LE)M')])return{'runEnd':!![]};const _0x3ac939=decodeURIComponent(common[_0xf69d2e(0x146,'Dz^9')](_0x438f56,'pt_pin'));function _0x56f317(_0x657ab3,_0x4faf3e){const _0x388b4e=_0xf69d2e;if(_0x657ab3[_0x388b4e(0x1aa,'Rx9Z')]<=0x4)return _0x657ab3;else{const _0x2aaafa=_0x657ab3[_0x388b4e(0x174,'YQ@@')](0x0,0x2),_0x3a368c=_0x657ab3['slice'](-0x2),_0x5bcbdf=Math[_0x388b4e(0x1b3,'PVVJ')](_0x4faf3e-_0x2aaafa['length']-_0x3a368c['length'],0x0),_0x58ae79='*'[_0x388b4e(0x1ac,'#Hf2')](_0x5bcbdf);return _0x2aaafa+_0x58ae79+_0x3a368c;}}const _0x3b83a4=decodeURIComponent(_0x3ac939),_0x10275d=_0x56f317(_0x3b83a4,0x6),_0x544e83=_0xf69d2e(0x1b4,'ThkF')+_0x57c752+'】'+_0x10275d+'：',_0x27436f=notify[_0xf69d2e(0x1ce,'Nj3#')](_0x57c752,_0x3ac939);if(pinFilter[_0xf69d2e(0x1cd,'8EIR')]>0x0&&(pinFilter[_0xf69d2e(0x14b,'PVVJ')](_0x3ac939)||pinFilter[_0xf69d2e(0x141,'NdmR')](encodeURIComponent(_0x3ac939)))){_0x27436f[_0xf69d2e(0x19c,'e&@T')](_0xf69d2e(0x17e,'e@fY')),console['log'](_0x27436f[_0xf69d2e(0x15b,'LE)M')]()),$[_0xf69d2e(0x1b0,'e&@T')]['push'](_0x57c752);return;}const _0x1348a5=await common[_0xf69d2e(0x1cc,'xo0#')](_0x438f56);if(!_0x1348a5&&typeof _0x1348a5===_0xf69d2e(0x13b,'CP^C')){console['log'](_0x544e83+'账号无效'),_0x27436f[_0xf69d2e(0x13c,'zdAq')](_0xf69d2e(0x189,'ewxq')),$[_0xf69d2e(0x199,'rWkB')][_0xf69d2e(0x150,'xo0#')](_0x57c752);return;}const _0x273734=common[_0xf69d2e(0x160,'LE)M')](_0x3ac939);await _0x45bb4d(_0xf69d2e(0x16f,'Dz^9'));if($[_0xf69d2e(0x1bb,'LE)M')])return{'runEnd':!![]};await $[_0xf69d2e(0x1bd,'q@Wd')](parseInt($['waitTime']*0x1+0x1f4,0xa));async function _0x5e9f4e(_0x2bd635,_0x335773){const _0x34a2aa=_0xf69d2e;try{switch(_0x2bd635){case _0x34a2aa(0x163,'U2@e'):if(_0x335773[_0x34a2aa(0x17d,'xo0#')]==='0')switch(_0x335773[_0x34a2aa(0x18b,'e&@T')]){case'0':_0x335773?.[_0x34a2aa(0x1a6,'LE)M')]?.[_0x34a2aa(0x148,'kdo6')]['3']?.['length']?(console[_0x34a2aa(0x1d9,'kdo6')](_0x544e83+_0x34a2aa(0x16e,'(T9^')+_0x335773['rewardsInfo']['successRewards']['3'][0x0]?.[_0x34a2aa(0x15d,'NR]v')]+_0x34a2aa(0x192,'rWkB')),_0x27436f[_0x34a2aa(0x170,'zdAq')](_0x335773[_0x34a2aa(0x197,'7E6N')]['successRewards']['3'][0x0]?.[_0x34a2aa(0x15d,'NR]v')]+_0x34a2aa(0x180,'&6V0'))):console[_0x34a2aa(0x1d0,'LqFs')](_0x544e83+_0x34a2aa(0x1ad,'NR]v'));break;case'103':console[_0x34a2aa(0x18e,'#o4U')](_0x544e83+'今日已签');break;case'1403':console[_0x34a2aa(0x1d8,'IPNc')](''+_0x544e83+_0x335773[_0x34a2aa(0x15e,'ThkF')]);break;default:console[_0x34a2aa(0x139,'8EIR')](''+_0x544e83+_0x335773['msg']);break;}else _0x335773[_0x34a2aa(0x1a7,'NdmR')]?console[_0x34a2aa(0x143,'q@Wd')](''+_0x544e83+_0x335773[_0x34a2aa(0x161,'Dz^9')]):console[_0x34a2aa(0x175,'jWti')]('❓'+_0x2bd635+'\x20'+JSON[_0x34a2aa(0x187,'zQdO')](_0x335773));break;}}catch(_0xd30aab){console[_0x34a2aa(0x137,'DKVQ')](_0x34a2aa(0x188,'jusI')+_0x2bd635+_0x34a2aa(0x17b,'kdo6')+(_0xd30aab['message']||_0xd30aab));}}async function _0x45bb4d(_0x3f604a){const _0x56fbd8=_0xf69d2e;if($[_0x56fbd8(0x1ae,'3bET')])return;let _0x5af3ae='',_0x40cd38=null,_0x361fcd=null,_0x29d0ad=_0x56fbd8(0x154,'kdo6');switch(_0x3f604a){case'main':req={'appId':'4013d','functionId':_0x56fbd8(0x1c9,'e&@T'),'appid':_0x56fbd8(0x16d,'q@Wd'),'clientVersion':common[_0x56fbd8(0x1c8,'EiPV')](),'client':'ios','body':{'sourceCode':_0x56fbd8(0x158,'ZPup'),'clientInfo':{'ip':_0x56fbd8(0x178,'Huh(')},'encryptProjectId':_0x56fbd8(0x191,'(T9^'),'encryptAssignmentId':_0x56fbd8(0x19e,'r(9K'),'itemId':'1','completionFlag':!![],'actionType':0x0},'version':_0x56fbd8(0x1d1,'#r&5'),'ua':$['UA'],'t':!![]};const _0x1fda96=await H5st[_0x56fbd8(0x138,'IPNc')](req);_0x5af3ae=_0x56fbd8(0x19a,'ThkF'),_0x40cd38=''+_0x1fda96?.[_0x56fbd8(0x173,'zQdO')];break;default:console[_0x56fbd8(0x1be,'Rx9Z')](_0x56fbd8(0x17a,'7E6N')+_0x3f604a);return;}const _0x22743b={};_0x40cd38&&Object[_0x56fbd8(0x18a,'NR]v')](_0x40cd38,_0x22743b);_0x361fcd&&Object[_0x56fbd8(0x151,'YQ@@')](_0x361fcd,_0x22743b);const _0x39c6b2={'url':_0x5af3ae,'method':_0x29d0ad,'headers':{'Accept':'application/json,\x20text/plain,\x20*/*','Accept-Encoding':'gzip,\x20deflate,\x20br','Accept-Language':_0x56fbd8(0x17c,'Nj3#'),'Connection':_0x56fbd8(0x177,'#r&5'),'Content-Type':_0x56fbd8(0x1d7,'jWti'),'Cookie':_0x438f56,'Host':'api.m.jd.com','Referer':_0x56fbd8(0x15f,'LE)M'),'Origin':_0x56fbd8(0x1bc,'ewxq'),'Sec-Fetch-Dest':_0x56fbd8(0x185,'kdo6'),'Sec-Fetch-Mode':_0x56fbd8(0x18c,'YP(W'),'Sec-Fetch-Site':'same-origin','User-Agent':_0x273734},'params':_0x361fcd,'data':_0x40cd38,'timeout':0x7530,'httpsTlsOptions':['main'][_0x56fbd8(0x1d3,'6EcP')](_0x3f604a)?common[_0x56fbd8(0x1b1,'YP(W')]():null};_0x29d0ad===_0x56fbd8(0x171,'zQdO')&&(delete _0x39c6b2[_0x56fbd8(0x1a4,'Rx9Z')],delete _0x39c6b2[_0x56fbd8(0x1b6,'YQ@@')][_0x56fbd8(0x14e,'ThkF')]);const _0x33f800=0x1;let _0x45e9b7=0x0,_0x13aa85=null;while(_0x45e9b7<_0x33f800){_0x45e9b7>0x0&&await $[_0x56fbd8(0x16c,'Nj3#')](0x3e8);const _0x17d012=await common[_0x56fbd8(0x13d,'Dz^9')](_0x39c6b2);if(!_0x17d012[_0x56fbd8(0x18d,'rWkB')]){_0x13aa85='🚫\x20'+_0x3f604a+_0x56fbd8(0x172,'#Hf2')+_0x17d012[_0x56fbd8(0x1c5,'8EIR')],_0x45e9b7++;continue;}if(!_0x17d012['data']){_0x13aa85='🚫\x20'+_0x3f604a+_0x56fbd8(0x1d6,'7E6N'),_0x45e9b7++;continue;}await _0x5e9f4e(_0x3f604a,_0x17d012[_0x56fbd8(0x1a2,'LE)M')]);break;}_0x45e9b7>=_0x33f800&&console[_0x56fbd8(0x1a9,'NdmR')](_0x13aa85);}}
// prettier-ignore
function Env(t, e) { "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0); class s { constructor(t) { this.env = t } send(t, e = "GET") { t = "string" == typeof t ? { url: t } : t; let s = this.get; return "POST" === e && (s = this.post), new Promise((e, i) => { s.call(this, t, (t, s, r) => { t ? i(t) : e(s) }) }) } get(t) { return this.send.call(this.env, t) } post(t) { return this.send.call(this.env, t, "POST") } } return new class { constructor(t, e) { this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `🔔${this.name}, 开始!`) } isNode() { return "undefined" != typeof module && !!module.exports } isQuanX() { return "undefined" != typeof $task } isSurge() { return "undefined" != typeof $httpClient && "undefined" == typeof $loon } isLoon() { return "undefined" != typeof $loon } toObj(t, e = null) { try { return JSON.parse(t) } catch { return e } } toStr(t, e = null) { try { return JSON.stringify(t) } catch { return e } } getjson(t, e) { let s = e; const i = this.getdata(t); if (i) try { s = JSON.parse(this.getdata(t)) } catch { } return s } setjson(t, e) { try { return this.setdata(JSON.stringify(t), e) } catch { return !1 } } getScript(t) { return new Promise(e => { this.get({ url: t }, (t, s, i) => e(i)) }) } runScript(t, e) { return new Promise(s => { let i = this.getdata("@chavy_boxjs_userCfgs.httpapi"); i = i ? i.replace(/\n/g, "").trim() : i; let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout"); r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r; const [o, h] = i.split("@"), n = { url: `http://${h}/v1/scripting/evaluate`, body: { script_text: t, mock_type: "cron", timeout: r }, headers: { "X-Key": o, Accept: "*/*" } }; this.post(n, (t, e, i) => s(i)) }).catch(t => this.logErr(t)) } loaddata() { if (!this.isNode()) return {}; { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e); if (!s && !i) return {}; { const i = s ? t : e; try { return JSON.parse(this.fs.readFileSync(i)) } catch (t) { return {} } } } } writedata() { if (this.isNode()) { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e), r = JSON.stringify(this.data); s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r) } } lodash_get(t, e, s) { const i = e.replace(/\[(\d+)\]/g, ".$1").split("."); let r = t; for (const t of i) if (r = Object(r)[t], void 0 === r) return s; return r } lodash_set(t, e, s) { return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t) } getdata(t) { let e = this.getval(t); if (/^@/.test(t)) { const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : ""; if (r) try { const t = JSON.parse(r); e = t ? this.lodash_get(t, i, "") : e } catch (t) { e = "" } } return e } setdata(t, e) { let s = !1; if (/^@/.test(e)) { const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e), o = this.getval(i), h = i ? "null" === o ? null : o || "{}" : "{}"; try { const e = JSON.parse(h); this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i) } catch (e) { const o = {}; this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i) } } else s = this.setval(t, e); return s } getval(t) { return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null } setval(t, e) { return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null } initGotEnv(t) { this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar)) } get(t, e = (() => { })) { t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.get(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => { try { if (t.headers["set-cookie"]) { const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString(); s && this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar } } catch (t) { this.logErr(t) } }).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) })) } post(t, e = (() => { })) { if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.post(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) }); else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t)); else if (this.isNode()) { this.initGotEnv(t); const { url: s, ...i } = t; this.got.post(s, i).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) }) } } time(t, e = null) { const s = e ? new Date(e) : new Date; let i = { "M+": s.getMonth() + 1, "d+": s.getDate(), "H+": s.getHours(), "m+": s.getMinutes(), "s+": s.getSeconds(), "q+": Math.floor((s.getMonth() + 3) / 3), S: s.getMilliseconds() }; /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length))); for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length))); return t } msg(e = t, s = "", i = "", r) { const o = t => { if (!t) return t; if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? { "open-url": t } : this.isSurge() ? { url: t } : void 0; if ("object" == typeof t) { if (this.isLoon()) { let e = t.openUrl || t.url || t["open-url"], s = t.mediaUrl || t["media-url"]; return { openUrl: e, mediaUrl: s } } if (this.isQuanX()) { let e = t["open-url"] || t.url || t.openUrl, s = t["media-url"] || t.mediaUrl; return { "open-url": e, "media-url": s } } if (this.isSurge()) { let e = t.url || t.openUrl || t["open-url"]; return { url: e } } } }; if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))), !this.isMuteLog) { let t = ["", "==============📣系统通知📣=============="]; t.push(e), s && t.push(s), i && t.push(i), console.log(t.join("\n")), this.logs = this.logs.concat(t) } } log(...t) { t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator)) } logErr(t, e) { const s = !this.isSurge() && !this.isQuanX() && !this.isLoon(); s ? this.log("", `❗️${this.name}, 错误!`, t.stack) : this.log("", `❗️${this.name}, 错误!`, t) } wait(t) { return new Promise(e => setTimeout(e, t)) } done(t = {}) { const e = (new Date).getTime(), s = (e - this.startTime) / 1e3; this.log("", `🔔${this.name}, 结束! 🕛 ${s} 秒`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t) } }(t, e) }