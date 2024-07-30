/*
活动名称：领京豆签到
环境变量：jd_beanSign_interval // 自定义运行间隔时长（整数，单位毫秒），默认1500
        jd_beanSign_notify // 是否推送通知（true/false），默认不推送
        jd_beanSign_pinFilter // 账号pin过滤，多个用@进行分割

cron:15 0,16 * * *

*/

const $ = new Env('领京豆签到')
function _0x5e75(){const _0x4da501=['WR7cSSoGjCkdC8k3buVdVx0','WO0HW752gc4','4PI8EUIfS+wTNEs4IUI8SEIGJ+MwMUMzREAxH+MwRoITVoE8J+MvK+IUMG','uSoHWOJdVxO','W6OlW7pdGGKaDCk2gZtdLCoeWRdcPrmoWP4I','W4vnW7ZdUSoWrfRcOSk4sCooW43cRmkuxCkQWRlcTSo9zmoo','WPjlW7ZdRSkIWQpdTIVdK1PIh3y','W6G7W6LqwYe+iwv+WRZcMmoGyKDAW4hcLCowd1NcSHZcMHORDmo3WPyDW7ueWOJdGmkan04GW6ddVComW6mwW5hdGCkJeConWOXUWOJdG1xdP3DjWP56AN3dO0PWeWBcImokySoHW4mgidJdG2BcSmkiW4/dP8kwW7JcLIxcNSk9h8olxCoefmkRWQD1x8o4W50xfSk5W6j2x8ozpSkwuSkto3ZdI17cQ3DPiI9jmmkYWPaLW5lcIa7cNrdcNYZcO09kt0aplSogbCkcELBcKSoJqCorhIPwh3JdVmkHASoFW4WJEaWYW6ddT8o6W5RdISoIW7qEt8kkfMuNWQhdHmodWQCeW51TWONcRq5hWOjiuCkXrSkBWR99WP5BWRBcU8octmoCeHbDeZddKCovW6GLE3hcSmoVAvvYWONcRJzJfSo5ACoFlNnEWPJdQ0BdLmoFfmoYW41xA8oJxmo8da8AnNadgIbmWRHbW6FdHSkPySo5vfCph8obW7uRWO0rgmkQWPKrWR/dSCkrv8kcWP7dUMe+W53cUmo0W7z2lX7dSSk4WR09WOZcMmkQbsilASkexSkmW7FcLCk+WOZcT8o1W7FdNrNcNMTNW7FcSYZcVv8nw0RdJaKciGxdU0P8x8kCW43dKSoVWR0uW5qZW6NdS8o4W6W6W5dcImoHmuCMW7iklCkOW47cJmkrW7bzWR0RySkMWOS6a8knvCkWWOhdJgD7Ab5KW6xdPMZcRNaGdx02W7/cOSowW5xcO8oKWQ1PW5m8W7hdS8kSW7mOWRxcNSk7W7FdQcnXaCoubhNcQhFdISofC1VcSIJdM8odWOKMW6xcQuVdMCkYz2RcSSkKcmkSeSkLaJFcKK/cOvHMaSobWOP4aaT2W5aUWOH7W79QWPxcQmk1r8kbW5BcLgz1W6/cHCk4W4u6W6GTitJcK10AW48acmkaECkYWPtdMwODfWddGmo4z0ldSGSCW78TW7lcNSkZWPJdVu5MWPxdTIqfbKdcNSo2hCokWO3cPayidxTXWRRdUSotW6pcPSoNW6CMWQZcPCk9dt7dPxztWR8CW4etWRNcIKvT','qwRdISkOWQi','W63dUSkxWRJdVITFW4NcQYf5W7PV','WRqjW4jEWOi','e8kzW4ldJG','WPODWQNcRG','BSkVF2xdHCogymodWPbvtIzSbMNcThldH1JcP1hdGHD3p2pdSG','WOOrdZi','b3RcV8keWQBdK8olWQhdLmotWOFcHCogbrSZgCoyWO4wW5C','gmkuWPq6W4e','aa49W4tdQ8kmqGDZW7pdKW','bv3cTmoLnSobqCoPWQ9sAeFdL8oKECo0WQe','W6WkW4ldHXGj','DCoMpa','W7eZW7C','WPtdJexcUs8h','W4DhW74','joIVSEAZTEwKI+I0Vmov4P2sfG','c3dcTCkmWPhdL8oi','W6tdOLOgW6/dQComWOFdRSkzWRhdUW','W59bW63dSSoh','WPNdKfe','8kUPN0S','eSkLfCoIAtFdNIJcIIldLCoAWPe','yvu/','W4WLn3y','dSoepCoVWOa','5lIR6lonW7tWMikg','W6NcVGhcReL2W7RdO8kmWOL9ESo0bCoVWOW','uCoyW7VdGCkGfK/cOG','amowlG','b8knW4xdHW','yCogwY8/itaYWQHjW6Po','W77cTWu8W67cQCo6','DSoTpSojWPNdMq','tCo/sW','WRq4xCoxuZddQ8ogmCoDsce','u1K3xWVdKmoLW4rgya','W64kW5VdTr8eACkKbtldICo/','gqvJfG','WO3cS8kevL5gWPa2xuxdPmkDWPFcLmoO','56sMWPlOVQBOOiJPLPZPMOJMLy7PLRm','6lwN5y6V5PEK5PAY','W7a/W7FcOdFcIq','WPlcTCke','W7ZcPhBcQmoe','hbNcHKO2q8kPta','buJcO8kzWQOK','W7S/W63cHcZcJIGhWPXNWRlcRHqV','cGv+aW','W43dIHS','W6tcVYRcH0j7W73dNSkaWQ18s8oPdSo1WP3cPWldKxm','x2FdOCkMWQjrWQ1NW4JcHHm3W7WAW4BdOXZcSIOAWQe','WQ/cPmojW6pcQa','evFcSCo8BG','6lE65yY/6l2N5RMKW7C4na','W74/W7JcQqlcLIiCWP0','WOBdILtcHceDnvG','W64oW4hdHq','m8o1AexdHCoEF8kj','5lIS6lcPWOZWT5gA','W4ytWR0','WO0RW7C','fCkLhSoJzdFdNW/cKZddRCogWOa','y2pdG3D8WOBcVvCNWOW','WP/dM2NcSI0in27cO21wW5eVdSoQsZqf','W5RdImossCk3y8kI','cGvJdK/cRmkVWPGjoq','W6FcTay','a8k7oeO','ECkmlSkZuqBdV8oJfSkC','W5BcRWTNW6T2aSovb8k3','W6RdM0hdGSk0','f8k8WQtdGvGHqqK','WPqrW6xcOa','ESkbnCkXwq','baqNW6FdSmkz','ASonxYy4rbSlWPvoW44','44gr6lw+5y+Z','WRufW4b/WQzR','5RAh5yU45ysH5y+97726W7jcnoMLHoMHUmof5lM05lIM56sR5P+QW43NR5hLI6u','WOyHW6rDdtiVW7OfWQ/dLCo1xHvqW4Dip8oH','W5NdJmomxW','rexdKH5Wfmo8tqnWWQjjW7K','jCo4y2u','mSoLENtdJCoE','WPxcI0S','4P+mB+AET+EFHEIVN+AXMte','dSkHzau','uSoYovfcWOVcKCoOcCkegCk5','DmkoB8oov8kyACop','W7iAW4ldPqif','lSoLB3xdVSopFSkdWRrvBYXVhL/cOL7dH1JcIg0','WQddTb/cGwr1W7ZdPSkaWQ8','z8kioCk2BHddLSoTfmkyl8k3qmoEWRRdGwuPyrVdQW','W4xdHaHI','WOpcRH8WphxdLCkP','grJcGG','cSoapCoaWOCTWPFcP8oJy3PrwZe','W6WaW4S','WQFINjFdTa','W581W7FcSYBcJZDdWQ1iWQpcPW','W4ZdRSkPx25nWOOd','wveYuqldNSkEWPWyebqF','WOmreJ0','cCoepCoT','W4v/WPi','sSoNWPS','W5/cRWH/W71Ga8o1f8kZW7xdNq','smo+x8k1l3e','A3CU','dGu6W6tdQ8kk','pa5SwqSkWQfkW7e','W4D1WOldQSktW61Qq8kjiGtcJW','W6nrpdFcGWFdMmkA','lmoLzhBdMmoc','W4HhW7FdQSolt0lcPmk6vComW5xcOSknua','5lID6lkmx/cvSRG','dKJcUG','WORcQmkwxq','W4T1WPtdKCkJW6DTBmkk','5lII6lkDvFggGje','f8k+W4VcPs9ujaxdTN/dQgvg','WOivW6dcTmkawta','WPhdKfJcTq','hXJcJeG','6ykA556Q5OY16ycHeJTk','W7pORPVMS67LPlROT6y54P6Gn+AwJ+wsUUw4MoAvHoAoGG','tCodW4tdKSkCfxNdJ8kLW6ddSmkwWOfvW4uRWQlcKLNdVMpcPxy','CmkbDa','W73ORldMSARLKA3LUP0f','aGu/','WPyvWQtcO8kFhaRdSmoZeq','W6BdUmkNDmoxta','tCkFW4C','D3pdLfL8WOBcVq','W4y4AvybW51HsCkrq8otWQKhW4G','W6BcQhxcKCosWO7dMSkQqh/dS8ox','6zAx6zM45Pwh6zEzW49zuq','W6pdQSkGFa','5yYl6yAJ5B6S5zcK54M15OcyasPssSkXcCorW4qjza','W4uuWQFcRSo3W6C','WPNcRH8Q','5y2x6ywM54Qf5OkS57Iv5PYXWRBdNSo5gKFdQvGYWPFcSa','W5xdImoavmkvA8kYyCkl','WR7cNqFdT8kXa8oLWQBcPG','5lMa55g75B+l5yAPWQJcTCkB','jtLWWPS','FmoNlq','WOC/WOddI8kjW6rRlCkSjHtcJSo3wCkniq','sSoTWPldTMSk','W73dNf3dQmkOcG','W7VcUgdcKmoiWP/dHmko','WORWPkgpWOdOVRZOOk3NU4JMNBL4','u2RdKmkLWQTCWRO','WPtdIfFcOIWLme7cVG','emk1EGG'];_0x5e75=function(){return _0x4da501;};return _0x5e75();}const _0x4a33b3=_0x3dbe;(function(_0x47c485,_0x2c8abb){const _0x154ba6=_0x3dbe,_0xe1f2c7=_0x47c485();while(!![]){try{const _0xf2e8a9=-parseInt(_0x154ba6(0x16c,'VIjl'))/0x1*(-parseInt(_0x154ba6(0x118,'WVIS'))/0x2)+parseInt(_0x154ba6(0x136,'Z#NB'))/0x3*(parseInt(_0x154ba6(0x135,'71$@'))/0x4)+-parseInt(_0x154ba6(0x122,'025%'))/0x5+parseInt(_0x154ba6(0x172,'A%b4'))/0x6+-parseInt(_0x154ba6(0xe6,'iJ3A'))/0x7+-parseInt(_0x154ba6(0x128,'I1Fc'))/0x8*(parseInt(_0x154ba6(0x160,'OmHE'))/0x9)+-parseInt(_0x154ba6(0x10e,'iJ3A'))/0xa;if(_0xf2e8a9===_0x2c8abb)break;else _0xe1f2c7['push'](_0xe1f2c7['shift']());}catch(_0x437d65){_0xe1f2c7['push'](_0xe1f2c7['shift']());}}}(_0x5e75,0xcac41));const jdCookie=require(_0x4a33b3(0x12c,'G1$q')),notify=require(_0x4a33b3(0xd5,'N8Ws')),common=require(_0x4a33b3(0x14f,'K$m@')),{H5st}=require(_0x4a33b3(0x164,'cIOh'));let taskThreads=process['env']['jd_beanSign__threads']||'1';const runInterval=process[_0x4a33b3(0x152,'dst4')][_0x4a33b3(0x102,'G1$q')]||_0x4a33b3(0x178,'nFaU'),isNotify=(process['env'][_0x4a33b3(0x170,'v0)O')]||process[_0x4a33b3(0x10c,'A%b4')][_0x4a33b3(0x110,'fc1o')])===_0x4a33b3(0x146,'71$@'),pinFilter=(process[_0x4a33b3(0xdc,'*V6K')][_0x4a33b3(0x103,'mRdT')]||'')[_0x4a33b3(0x105,'zmEE')]('@'),maxThreads=0x1;let cookiesArr=Object['keys'](jdCookie)['map'](_0x405c44=>jdCookie[_0x405c44])[_0x4a33b3(0x11e,'nwnX')](_0x4f2bc2=>_0x4f2bc2);!cookiesArr[0x0]&&($[_0x4a33b3(0xed,'7#HH')]($['name'],'【提示】请先获取Cookie'),process[_0x4a33b3(0x123,'N8Ws')](0x1));function _0x3dbe(_0x594f21,_0x161d9a){const _0x5e758c=_0x5e75();return _0x3dbe=function(_0x3dbea1,_0x496552){_0x3dbea1=_0x3dbea1-0xd5;let _0x5851fd=_0x5e758c[_0x3dbea1];if(_0x3dbe['IhhlDv']===undefined){var _0x24575e=function(_0x4f2bc2){const _0x1f5bdf='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x5c1d2c='',_0x54e692='';for(let _0x15f4ca=0x0,_0x2dd02f,_0x36e096,_0x1c622f=0x0;_0x36e096=_0x4f2bc2['charAt'](_0x1c622f++);~_0x36e096&&(_0x2dd02f=_0x15f4ca%0x4?_0x2dd02f*0x40+_0x36e096:_0x36e096,_0x15f4ca++%0x4)?_0x5c1d2c+=String['fromCharCode'](0xff&_0x2dd02f>>(-0x2*_0x15f4ca&0x6)):0x0){_0x36e096=_0x1f5bdf['indexOf'](_0x36e096);}for(let _0x31a61d=0x0,_0x57772d=_0x5c1d2c['length'];_0x31a61d<_0x57772d;_0x31a61d++){_0x54e692+='%'+('00'+_0x5c1d2c['charCodeAt'](_0x31a61d)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x54e692);};const _0x405c44=function(_0x32f217,_0x5aefdd){let _0x2f140f=[],_0x2fc0f2=0x0,_0x2f0ea2,_0x5d2fc8='';_0x32f217=_0x24575e(_0x32f217);let _0x747920;for(_0x747920=0x0;_0x747920<0x100;_0x747920++){_0x2f140f[_0x747920]=_0x747920;}for(_0x747920=0x0;_0x747920<0x100;_0x747920++){_0x2fc0f2=(_0x2fc0f2+_0x2f140f[_0x747920]+_0x5aefdd['charCodeAt'](_0x747920%_0x5aefdd['length']))%0x100,_0x2f0ea2=_0x2f140f[_0x747920],_0x2f140f[_0x747920]=_0x2f140f[_0x2fc0f2],_0x2f140f[_0x2fc0f2]=_0x2f0ea2;}_0x747920=0x0,_0x2fc0f2=0x0;for(let _0x298017=0x0;_0x298017<_0x32f217['length'];_0x298017++){_0x747920=(_0x747920+0x1)%0x100,_0x2fc0f2=(_0x2fc0f2+_0x2f140f[_0x747920])%0x100,_0x2f0ea2=_0x2f140f[_0x747920],_0x2f140f[_0x747920]=_0x2f140f[_0x2fc0f2],_0x2f140f[_0x2fc0f2]=_0x2f0ea2,_0x5d2fc8+=String['fromCharCode'](_0x32f217['charCodeAt'](_0x298017)^_0x2f140f[(_0x2f140f[_0x747920]+_0x2f140f[_0x2fc0f2])%0x100]);}return _0x5d2fc8;};_0x3dbe['wAPnNm']=_0x405c44,_0x594f21=arguments,_0x3dbe['IhhlDv']=!![];}const _0xa49d8b=_0x5e758c[0x0],_0x4b0e3a=_0x3dbea1+_0xa49d8b,_0x175fb6=_0x594f21[_0x4b0e3a];return!_0x175fb6?(_0x3dbe['sNLWuC']===undefined&&(_0x3dbe['sNLWuC']=!![]),_0x5851fd=_0x3dbe['wAPnNm'](_0x5851fd,_0x496552),_0x594f21[_0x4b0e3a]=_0x5851fd):_0x5851fd=_0x175fb6,_0x5851fd;},_0x3dbe(_0x594f21,_0x161d9a);}!(async()=>{const _0x31a7b1=_0x4a33b3;notify[_0x31a7b1(0x11b,'dst4')]({'title':$[_0x31a7b1(0x127,'I1Fc')]}),await Main(),isNotify&&notify[_0x31a7b1(0x116,'2B@b')]()&&await notify[_0x31a7b1(0x177,'K$m@')]();})()[_0x4a33b3(0xe9,'7#HH')](_0x1f5bdf=>$[_0x4a33b3(0xfe,'leBx')](_0x1f5bdf))[_0x4a33b3(0x169,'mRdT')](()=>$[_0x4a33b3(0x14b,'fc1o')]());async function Main(){const _0x26be45=_0x4a33b3;try{try{const _0x54e692=parseInt(taskThreads);_0x54e692>0x0&&_0x54e692!==0x1&&(taskThreads=_0x54e692);}catch{taskThreads=0x1;}taskThreads=Math[_0x26be45(0xdd,'e9rV')](taskThreads,maxThreads),$['waitTime']=null;if(runInterval)try{const _0x15f4ca=parseInt(runInterval);_0x15f4ca>=0x0&&($[_0x26be45(0x12f,'6M*Z')]=_0x15f4ca);}catch{console[_0x26be45(0xdf,'nFaU')](_0x26be45(0x16e,'e9rV'));}$[_0x26be45(0x171,'nFaU')]=[],console[_0x26be45(0x132,'v0)O')](_0x26be45(0x153,'nFaU')+$[_0x26be45(0x121,'H1wE')]+_0x26be45(0x15b,'nwnX')),console[_0x26be45(0x130,'025%')](_0x26be45(0x11f,'(Yd3')),console['log'](_0x26be45(0x159,'K$m@')+$['waitTime']/0x3e8+_0x26be45(0xf8,'6M*Z')),console[_0x26be45(0x10d,'cP^s')](_0x26be45(0x161,'A%b4')+common['getProxyStatus']()+']'),console[_0x26be45(0x155,'7kGu')](_0x26be45(0x14d,'i$kL')+(isNotify?'开启':'关闭')+']'),console[_0x26be45(0x101,'Az4&')](_0x26be45(0x106,'VT$&')+pinFilter[_0x26be45(0x14c,'025%')](',\x20')+']'),console[_0x26be45(0x139,'cIOh')](_0x26be45(0xf4,'Z#NB')+$[_0x26be45(0x109,'v0)O')]+_0x26be45(0x15e,'OmHE')),console['log'](''),await common['concTask'](taskThreads,cookiesArr,taskFnc),$['runEnd']=![];$[_0x26be45(0xd7,'Ko2Z')][_0x26be45(0x165,'WVIS')]>0x0&&(cookiesArr=cookiesArr[_0x26be45(0x15c,'A%b4')]((_0x2dd02f,_0x36e096)=>!$['needRemoveCookieIndex'][_0x26be45(0x141,'!Nni')](_0x36e096+0x1)),$[_0x26be45(0x12b,'N8Ws')]=[]);const _0x5c1d2c=notify[_0x26be45(0x10f,'re6U')]();_0x5c1d2c&&console[_0x26be45(0xfb,'71$@')](_0x26be45(0x168,'v0)O')+_0x5c1d2c['replace'](/：/g,_0x26be45(0x133,'VIjl')));}catch(_0x1c622f){console[_0x26be45(0x145,'zmEE')]('❌\x20脚本运行遇到了错误\x0a'+_0x1c622f);}}async function taskFnc(_0x31a61d,_0x57772d){const _0x756b8a=_0x4a33b3;if($['runEnd'])return{'runEnd':!![]};const _0x32f217=decodeURIComponent(common[_0x756b8a(0xff,'e9rV')](_0x31a61d,'pt_pin'));function _0x5aefdd(_0x55494e,_0x389118){const _0x59209d=_0x756b8a;if(_0x55494e[_0x59209d(0x16d,'cP^s')]<=0x4)return _0x55494e;else{const _0x5cca74=_0x55494e[_0x59209d(0x104,'VT$&')](0x0,0x2),_0x9ff0e1=_0x55494e[_0x59209d(0x11a,'fPvs')](-0x2),_0x5782da=Math[_0x59209d(0x150,'LLVf')](_0x389118-_0x5cca74[_0x59209d(0xdb,'v0)O')]-_0x9ff0e1[_0x59209d(0xfa,'e9rV')],0x0),_0x58b596='*'[_0x59209d(0x124,'N8Ws')](_0x5782da);return _0x5cca74+_0x58b596+_0x9ff0e1;}}const _0x2f140f=decodeURIComponent(_0x32f217),_0x2fc0f2=_0x5aefdd(_0x2f140f,0x6),_0x2f0ea2=_0x756b8a(0x11d,'bSj!')+_0x57772d+'】'+_0x2fc0f2+'：',_0x5d2fc8=notify[_0x756b8a(0xf1,'YSvQ')](_0x57772d,_0x32f217);if(pinFilter[_0x756b8a(0x142,'N8Ws')]>0x0&&(pinFilter[_0x756b8a(0x129,'LLVf')](_0x32f217)||pinFilter[_0x756b8a(0xfd,'025%')](encodeURIComponent(_0x32f217)))){_0x5d2fc8['fix']('已设置跳过运行当前账号'),console[_0x756b8a(0x163,'*V6K')](_0x5d2fc8[_0x756b8a(0xeb,'G1$q')]()),$[_0x756b8a(0x12d,'fPvs')][_0x756b8a(0xe8,'(Yd3')](_0x57772d);return;}const _0x747920=await common[_0x756b8a(0x131,'7#HH')](_0x31a61d);if(!_0x747920&&typeof _0x747920===_0x756b8a(0xe1,'Ko2Z')){console[_0x756b8a(0x101,'Az4&')](_0x2f0ea2+_0x756b8a(0xf9,'bSj!')),_0x5d2fc8['fix']('账号无效'),$[_0x756b8a(0x171,'nFaU')][_0x756b8a(0x16b,'I1Fc')](_0x57772d);return;}const _0x298017=common[_0x756b8a(0x176,'nwnX')](_0x32f217);await _0x2f86f0(_0x756b8a(0x15d,'6M*Z'));if($[_0x756b8a(0x166,'OmHE')])return{'runEnd':!![]};await $['wait'](parseInt($['waitTime']*0x1+0x1f4,0xa));async function _0x538c14(_0x5c3241,_0x2947c3){const _0x12f015=_0x756b8a;try{switch(_0x5c3241){case _0x12f015(0x137,'CeTw'):if(_0x2947c3['code']==0x0&&!_0x2947c3?.['errorCode']){if(_0x2947c3?.[_0x12f015(0x100,'Z#NB')]?.['newUserAward'])console[_0x12f015(0x13a,'WVIS')](''+_0x2f0ea2+(_0x2947c3?.['data']?.[_0x12f015(0xf3,'MBOZ')]?.[_0x12f015(0xfc,'J#9V')]||'')+(_0x2947c3?.['data']?.[_0x12f015(0x158,'J#9V')]?.['subTitle']||'')+(_0x2947c3?.[_0x12f015(0x15a,'VIjl')]?.[_0x12f015(0x140,'cIOh')]?.['awardList'][0x1]?.['beanCount']||0x0)+_0x12f015(0x10b,'v0)O')),_0x5d2fc8[_0x12f015(0x13c,'iJ3A')](''+(_0x2947c3?.[_0x12f015(0x138,'7#HH')]?.[_0x12f015(0x13b,'2B@b')]?.[_0x12f015(0x174,'mRdT')]||'')+(_0x2947c3?.[_0x12f015(0x119,'DPX*')]?.[_0x12f015(0x158,'J#9V')]?.[_0x12f015(0x108,'fc1o')]||'')+(_0x2947c3?.[_0x12f015(0x162,'bSj!')]?.[_0x12f015(0xf5,'v0)O')]?.[_0x12f015(0x16a,'fc1o')][0x1]?.[_0x12f015(0x15f,'H1wE')]||0x0)+_0x12f015(0x148,'G1$q'));else{let _0x1684fc=_0x2947c3?.['data']?.[_0x12f015(0x112,'Z#NB')]||_0x2947c3?.[_0x12f015(0x12e,'Az4&')]?.[_0x12f015(0x143,'nFaU')]||_0x2947c3?.[_0x12f015(0xd6,'CeTw')]?.['newUserAward'];console[_0x12f015(0xe7,'xkBi')](''+_0x2f0ea2+(_0x1684fc?.[_0x12f015(0xe3,'nFaU')]||'')+(_0x1684fc?.[_0x12f015(0x167,'J#9V')]||'')+(_0x1684fc?.[_0x12f015(0x107,'e9rV')]?.['beanCount']||0x0)+_0x12f015(0x144,'2B@b')),_0x5d2fc8[_0x12f015(0x13e,'dst4')](''+(_0x1684fc?.[_0x12f015(0x16f,'WVIS')]||'')+(_0x1684fc?.[_0x12f015(0x10a,'N8Ws')]||'')+(_0x1684fc?.['beanAward']?.[_0x12f015(0x147,'cIOh')]||0x0)+_0x12f015(0xea,'VIjl'));}}else msg=common[_0x12f015(0xd9,'dst4')](_0x2947c3),console['log'](_0x2f0ea2+'签到失败：'+msg);break;}}catch(_0x51fc4a){console[_0x12f015(0xf2,'iJ3A')]('❌\x20未能正确处理\x20'+_0x5c3241+_0x12f015(0x151,'y#bs')+(_0x51fc4a[_0x12f015(0x111,'H1wE')]||_0x51fc4a));}}async function _0x2f86f0(_0x42e592){const _0x4ff3d3=_0x756b8a;if($[_0x4ff3d3(0x12a,'v0)O')])return;let _0x3c51cc='',_0x519eed=null,_0x1c2ab9=null,_0x51daaf=_0x4ff3d3(0x114,'L%tk'),_0x3d8bdf={},_0x55f4f6={};switch(_0x42e592){case _0x4ff3d3(0x137,'CeTw'):_0x55f4f6={'appId':_0x4ff3d3(0xd8,'7kGu'),'functionId':'signBeanAct','appid':_0x4ff3d3(0xf7,'71$@'),'clientVersion':common[_0x4ff3d3(0x120,'cP^s')](),'client':_0x4ff3d3(0x113,'G1$q'),'body':{},'version':_0x4ff3d3(0x125,'Az4&'),'ua':_0x298017,'t':!![]},_0x3d8bdf=await H5st['getH5st'](_0x55f4f6),_0x3c51cc='https://api.m.jd.com/client.action',_0x519eed=_0x3d8bdf[_0x4ff3d3(0x115,'fPvs')];break;default:console[_0x4ff3d3(0xe7,'xkBi')](_0x4ff3d3(0x126,'i$kL')+_0x42e592);return;}const _0x268976={};_0x519eed&&Object[_0x4ff3d3(0xde,'fc1o')](_0x519eed,_0x268976);_0x1c2ab9&&Object[_0x4ff3d3(0x154,'VIjl')](_0x1c2ab9,_0x268976);const _0x1934b1={'url':_0x3c51cc,'method':_0x51daaf,'headers':{'Host':_0x4ff3d3(0xe2,'cpW('),'Accept':_0x4ff3d3(0x13d,'bSj!'),'Cookie':_0x31a61d,'User-Agent':_0x298017,'Accept-Language':_0x4ff3d3(0x157,'(Yd3'),'Accept-Encoding':_0x4ff3d3(0xda,'zmEE'),'Referer':_0x4ff3d3(0x173,'i$kL')},'params':_0x1c2ab9,'data':_0x519eed,'timeout':0x7530};_0x51daaf==='GET'&&(delete _0x1934b1['data'],delete _0x1934b1[_0x4ff3d3(0xf0,'i^*1')][_0x4ff3d3(0x134,'e9rV')]);const _0x2f8fb7=0x1;let _0x67ef1f=0x0,_0x1674a6=null;while(_0x67ef1f<_0x2f8fb7){_0x67ef1f>0x0&&await $[_0x4ff3d3(0xf6,'Z#NB')](0x3e8);const _0x2b7c4b=await common[_0x4ff3d3(0x14a,'DPX*')](_0x1934b1);if(!_0x2b7c4b[_0x4ff3d3(0x156,'re6U')]){_0x1674a6=_0x4ff3d3(0xe5,'L%tk')+_0x42e592+_0x4ff3d3(0xe0,'re6U')+_0x2b7c4b[_0x4ff3d3(0x117,'OmHE')],_0x67ef1f++;continue;}if(!_0x2b7c4b[_0x4ff3d3(0xee,'K$m@')]){_0x1674a6='🚫\x20'+_0x42e592+_0x4ff3d3(0x14e,'nwnX'),_0x67ef1f++;continue;}await _0x538c14(_0x42e592,_0x2b7c4b[_0x4ff3d3(0x12e,'Az4&')]);break;}_0x67ef1f>=_0x2f8fb7&&console[_0x4ff3d3(0xe4,'fc1o')](_0x1674a6);}}
// prettier-ignore
function Env(t, e) { "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0); class s { constructor(t) { this.env = t } send(t, e = "GET") { t = "string" == typeof t ? { url: t } : t; let s = this.get; return "POST" === e && (s = this.post), new Promise((e, i) => { s.call(this, t, (t, s, r) => { t ? i(t) : e(s) }) }) } get(t) { return this.send.call(this.env, t) } post(t) { return this.send.call(this.env, t, "POST") } } return new class { constructor(t, e) { this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `🔔${this.name}, 开始!`) } isNode() { return "undefined" != typeof module && !!module.exports } isQuanX() { return "undefined" != typeof $task } isSurge() { return "undefined" != typeof $httpClient && "undefined" == typeof $loon } isLoon() { return "undefined" != typeof $loon } toObj(t, e = null) { try { return JSON.parse(t) } catch { return e } } toStr(t, e = null) { try { return JSON.stringify(t) } catch { return e } } getjson(t, e) { let s = e; const i = this.getdata(t); if (i) try { s = JSON.parse(this.getdata(t)) } catch { } return s } setjson(t, e) { try { return this.setdata(JSON.stringify(t), e) } catch { return !1 } } getScript(t) { return new Promise(e => { this.get({ url: t }, (t, s, i) => e(i)) }) } runScript(t, e) { return new Promise(s => { let i = this.getdata("@chavy_boxjs_userCfgs.httpapi"); i = i ? i.replace(/\n/g, "").trim() : i; let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout"); r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r; const [o, h] = i.split("@"), n = { url: `http://${h}/v1/scripting/evaluate`, body: { script_text: t, mock_type: "cron", timeout: r }, headers: { "X-Key": o, Accept: "*/*" } }; this.post(n, (t, e, i) => s(i)) }).catch(t => this.logErr(t)) } loaddata() { if (!this.isNode()) return {}; { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e); if (!s && !i) return {}; { const i = s ? t : e; try { return JSON.parse(this.fs.readFileSync(i)) } catch (t) { return {} } } } } writedata() { if (this.isNode()) { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e), r = JSON.stringify(this.data); s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r) } } lodash_get(t, e, s) { const i = e.replace(/\[(\d+)\]/g, ".$1").split("."); let r = t; for (const t of i) if (r = Object(r)[t], void 0 === r) return s; return r } lodash_set(t, e, s) { return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t) } getdata(t) { let e = this.getval(t); if (/^@/.test(t)) { const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : ""; if (r) try { const t = JSON.parse(r); e = t ? this.lodash_get(t, i, "") : e } catch (t) { e = "" } } return e } setdata(t, e) { let s = !1; if (/^@/.test(e)) { const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e), o = this.getval(i), h = i ? "null" === o ? null : o || "{}" : "{}"; try { const e = JSON.parse(h); this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i) } catch (e) { const o = {}; this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i) } } else s = this.setval(t, e); return s } getval(t) { return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null } setval(t, e) { return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null } initGotEnv(t) { this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar)) } get(t, e = (() => { })) { t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.get(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => { try { if (t.headers["set-cookie"]) { const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString(); s && this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar } } catch (t) { this.logErr(t) } }).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) })) } post(t, e = (() => { })) { if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.post(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) }); else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t)); else if (this.isNode()) { this.initGotEnv(t); const { url: s, ...i } = t; this.got.post(s, i).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) }) } } time(t, e = null) { const s = e ? new Date(e) : new Date; let i = { "M+": s.getMonth() + 1, "d+": s.getDate(), "H+": s.getHours(), "m+": s.getMinutes(), "s+": s.getSeconds(), "q+": Math.floor((s.getMonth() + 3) / 3), S: s.getMilliseconds() }; /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length))); for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length))); return t } msg(e = t, s = "", i = "", r) { const o = t => { if (!t) return t; if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? { "open-url": t } : this.isSurge() ? { url: t } : void 0; if ("object" == typeof t) { if (this.isLoon()) { let e = t.openUrl || t.url || t["open-url"], s = t.mediaUrl || t["media-url"]; return { openUrl: e, mediaUrl: s } } if (this.isQuanX()) { let e = t["open-url"] || t.url || t.openUrl, s = t["media-url"] || t.mediaUrl; return { "open-url": e, "media-url": s } } if (this.isSurge()) { let e = t.url || t.openUrl || t["open-url"]; return { url: e } } } }; if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))), !this.isMuteLog) { let t = ["", "==============📣系统通知📣=============="]; t.push(e), s && t.push(s), i && t.push(i), console.log(t.join("\n")), this.logs = this.logs.concat(t) } } log(...t) { t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator)) } logErr(t, e) { const s = !this.isSurge() && !this.isQuanX() && !this.isLoon(); s ? this.log("", `❗️${this.name}, 错误!`, t.stack) : this.log("", `❗️${this.name}, 错误!`, t) } wait(t) { return new Promise(e => setTimeout(e, t)) } done(t = {}) { const e = (new Date).getTime(), s = (e - this.startTime) / 1e3; this.log("", `🔔${this.name}, 结束! 🕛 ${s} 秒`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t) } }(t, e) }
