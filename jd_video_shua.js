/*
活动名称：逛视频刷视频
环境变量：jd_video_threads // 控制并发线程数（正整数），默认1，最大3
        jd_video_notify // 是否推送通知（true/false），默认不推送
        jd_video_pinFilter // 账号pin过滤，多个用@进行分割
        jd_video_signapi // 自定义SIGN的API

自行定时，多次运行

*/

const $ = new Env('逛视频刷视频')
const _0x211c28=_0x2bb5;(function(_0xad26ca,_0x5348d6){const _0x5d12f5=_0x2bb5,_0x2237e9=_0xad26ca();while(!![]){try{const _0x2980ab=-parseInt(_0x5d12f5(0x75,'XS]['))/0x1+-parseInt(_0x5d12f5(0xce,'(mDw'))/0x2*(-parseInt(_0x5d12f5(0xea,'YH[7'))/0x3)+parseInt(_0x5d12f5(0x7a,'R&2&'))/0x4*(parseInt(_0x5d12f5(0xe6,'H6#Z'))/0x5)+parseInt(_0x5d12f5(0x185,'ox(i'))/0x6+parseInt(_0x5d12f5(0x95,'tkh@'))/0x7*(parseInt(_0x5d12f5(0x7b,'MykJ'))/0x8)+-parseInt(_0x5d12f5(0xc4,'b!Jl'))/0x9+-parseInt(_0x5d12f5(0xd6,'FCz5'))/0xa;if(_0x2980ab===_0x5348d6)break;else _0x2237e9['push'](_0x2237e9['shift']());}catch(_0x29f53f){_0x2237e9['push'](_0x2237e9['shift']());}}}(_0x3c15,0xd5724));const jdCookie=require(_0x211c28(0x163,'H6#Z')),notify=require(_0x211c28(0x178,'wBap')),common=require('./utils/Rebels_jdCommon'),{H5st}=require(_0x211c28(0x111,'84ki'));let taskThreads=process[_0x211c28(0x16f,'QpUT')]['jd_video_threads']||'1';const runInterval=process[_0x211c28(0x6d,'ox(i')][_0x211c28(0x13e,'KPsG')]||_0x211c28(0xb3,'QpUT'),isNotify=(process[_0x211c28(0xcc,'wD0E')]['jd_video_notify']||process[_0x211c28(0xe3,'q[Zp')]['jd_video_Notify'])===_0x211c28(0x91,'Gz2S'),pinFilter=(process[_0x211c28(0x158,'la5%')][_0x211c28(0x186,'b!Jl')]||'')[_0x211c28(0x79,'8o3W')]('@'),randomApi=process[_0x211c28(0x128,'Hq%5')][_0x211c28(0x160,'MykJ')]||'http://rsign.257999.xyz/rsign',maxThreads=0x3;let cookiesArr=Object[_0x211c28(0xb1,'mCPt')](jdCookie)[_0x211c28(0x17c,'YH[7')](_0x558873=>jdCookie[_0x558873])[_0x211c28(0x15e,'Gz2S')](_0x68c92e=>_0x68c92e);!cookiesArr[0x0]&&($['msg']($['name'],'【提示】请先获取Cookie'),process['exit'](0x1));function _0x3c15(){const _0x2a7e9e=['W5ijlG','ESortCoQp2RdVSkJW5rScg4x','WPS4tv4Ksgq','rSkBW4VdImkJ','WRNdPZDYpvHpdq','WOPKWPhdHvmtFayOWOZdLH7dNsRdVgBdJCkapdjkWQTMbgX2W50KW7tdKaC9oG','W542qem','W71gWP1qhSoj','W6vEW6xcJCoEW6nXW4u','W7ZcG8k7WOTyWPePW6n3v8k+W4ZcNmoiWPS','W61AW4hdQNrfjCk7W4tdISozWQKA','W5/dHWFcUWRdV8kvWOK','56+55yUX5OUq5yIAhIa','WQVdHxJcGa','W6rwW6JcNmoLW4j+W6pcOCo5nNdcGCox','W63cJ8kRWQnsW48OW6D0ua','eHpcVmoYyftdICk5jINcTCk8pcNdOsFcMmkPeb7dMgdcOr4cCcpcNxFdMfRdTmoHyCo4','C8ozdSoYnG1bWRW','WOidWO/cMG','W73dOSkOW4lcRSo2WO3dGq','WRhcVfOeWROVW7vRcXq','uCkJASo+','W5ePW77cISo+xmoC','WP7dNdG','W67cI8kRWO8','W4jWW5/cRq','BGFcM28jW7FcRf3dPSot','ChvlAaexWOddQCofW4Whq8oWW5D3W44JmmkdDCoT','obe0iCkOFCkaWRq','W7RdPwq','W6/cONaUtGyClmo6rmoZW6hdHq','WQCLW6PSW5ZdRmkZz8o/DNiP','5BU15yYQ57QH56QGqSkFWPi','W65tWP1zfSoEnSojW7HFW47cR8kgW5bhhdHmWRKFWPddJqNcKCk3y8kueGdcGI1jWR4','W77dTCkJ','5OY654+f5AAS6lE3W78','WRVdGwxcUmo1WPFcKmkJWOj+WR3dV8oScSo+W5TSyCo7','eHpcVmoYycVdNSk4eIRcT8kWDdxcNa','W7ZcKMtdMSkZdxtdQvW','W45vWOJdSfRcP8o5WPW','56+c5yQa5AwL6lEQma','bXVcQ8o/','yCo2WPRcMW','WPRdNYeGfSkJhSkdva','lCkhASkSjG','W7hcKgW','F8kpjq','WPKAW6/cPG','WRtOR6tMSyVLPjZOTjhcKEkCJb8','W6BcHCk4','W78iWQTUka','W6hdSGa','vbnJWPhcP2JdJ2mhWOOiA8k7CSojW4quuCk0o8kT','W6tcNMRdRGRdJCkMbSk0lwi','W6ZdQSkTW4lcN8oT','W74gWRT0','WOfwWQFcVmoGWORdQ0usxZ8','W6NcSvWDWOetmhebW4zeae5MW5RdOMq3WP90','W75qW6S','WQ4iWP3cPW','WPhdIt0','WPPGgaD5hJrnEXb3xCka','WOtcPG0','q8kRESo6W6FdUCkYW4SqW416WQxcRt5rWQdcGHytWOiuWOhcLSoiW6xcPmoDW4dcVmoHW6xcU38','W4/dNd3cRa4','6ycU6kse6Akp6Asj6Ao95AAA6lEYW7q','WRFdLsK','W54joYz6fSkvxq','W7xcI3/dN8kUqWJcSK/dKZz8FG83gCocyCoxifOsW7tcUcFdJmodacGhCCkGWQ/dUa','WRJcPxBcSdTkW7vPogJdSd55W4JdRmoN','WPalWP/cNSorsmotDatdVmkhoftdGW','CmoIWOFcTKHU','5O2c54YQ5AE16lw/W4W','WR4mWOdcM3mhyq','W7/cKgtdG8k4geK','qSkeW5BdKSk/W6/dVWLP','W6lcLNhdNHBdIW','5BsR6k+x576A6lsG6l6b6l6K6kgz5B6W5yUI6lAo5y2l','vSkWE8o+W7ZdJG','W5FdRu4mlsLfWOxcOJBdMWfQtSkIW4FdNxys','5yAb57+wnmopjsRMNkhLIBG','CSkvj8k/ysVcIupdKmkkWRpcMmonfSozWP/cGCkRW7XHfa','W6NdRmkVW5dcK8o4','W7xdPwFcOq','WQ3dKxtcHSoTWRdcGCkIWP9rWQRdM8ovimoUW4jGBCoH','fEISTEAXNowMRUI2RCkl4P2lWO/MLQdLKAhLUO3MLR7MJQy','W7/dV8k3kCo2reK','5RED5yUk5yAE5yYyWOqGW7bNi8ko5P+J5lMC6z216yk96AoUAUMdNq','kqS0b8ksEa','WRagWOC','W5ZdQumLpHPpWPRcSJtdHbHsAmkXW4tdH2WqW6dcSNpcOru','oCk+jSoRwL/cPshdPCk7WQO','WQ7cTCkr','WOXXWPxdPvSeEae1WQldIehdS2ldUwldK8ocna','WRVcTCoWWOtdGSkRW5xdImkSW60RW4P8','WOhdJMtdJMbezZW','WOGaW67cU8oNkSoFW78','nXe9','WQNcRSkuW4xcJYKiBq','F2rlueDEW5S','WQvzWRxcMSk+','oCkdeCkN','t8kgW54','WOeZW6NcISoxxmoEzq','5OIR55UY54626ysK5l6S6AkqWPGS','qSkJD8oRW5ZdGSk6W4O','W58+tviHDwDoyXTLBmkJW7tcJYlcOe5+WPFdT8o8C0KcW49MbduLkmowW4ePWQa','WO5oWOm','WOibW6NcOSoxF8kuWRxcQL/dHmo1W59QWQjlstCwWRZcKq','WO/cHw3dT1NcUmowWQ3cH8kiW51yyG','W7zEW7JcMa','rhmazKeXW6agW6NcT3xcSc82','WRVdGwxcSCoMWPhcMSkIWRTmWQO','5Q2G5Q6z5O6354Y25Awt6lwb','W6BdPtHpW652WQ05AxyFWOBdLmo8ltfDW70','5P6355Qe5B2E','iSknhW','5ywK5O6G546U6ywo5AA56lAo5AEM6lAkgW','4PIYh+IfPUwTO+s7G+I9MUIHKoMvLoMzGUAvKoMuREIUOEE+RoMwUEITQW','W4HbWOtdTNFcNCoGWOVcMSkXW7tdVGFcV8kezwqyW4y','uxmfueSTW78','W47dLspcRHNdR8kTWONcPa','W7LkWOLqemoVmSozW4frW4pdQ8kjW5DGhxKjWP0BWO/dNhNcKmkUz8kpbwhdJwKdW60','W7FdP8oEqG','BfWjqCkcWOWgWPKSkCkDW4GPW6JcRsW','W4RdMtdcQGtdMCkfWP7cK8kCW5bszeRdM8oyxSoYWRnIWP3dJCoyamkRWR5nWQxcKeNcTJuy','5P6+6k6C5lYd6AoF5AEn6ls5WQG','WQpcUSkuW7ZcVI8cFayNjSoKWOLAWRe','W7pcT18','xrnYWRdcH3/dJx48WPWS','W719EKHgW4u','FSkaj8kU','WQ5zW60+jG','W7n2FwubW4ldPa','4P+geEACKoEETEISToAYUbu','WPmNW6JcGSo5qmo+yty/','ouVdNZyZW4lcJNu','W49DWOxdOwhcHSo2WR7cNmkZW7FdQqFcMCkiuguuW5WV','W7JcKx0','WQZdHwpcLCo5WPdcSCkXWOjE','Aeip','W5Kcps5Df8kDqCoPDwLLoZz6h8kPpCoAWRzL','WPriWOdcUmo9WRZdIe0Tus4ehSktW5FcSSkKW6BcJaddGSkbW5OWCmopBmkvd8oHW43dPSk0','f8oKn8kEWRr4WPJcGCkxWOH+WPRcH8omfSkHkCkFwbdcTG','W7XEW6hcNa','W77cNNNdI8kU','W5RdMtJcUW7dUq','W63cJ8kRWQjwW4G+W7vNDmkVW5VdP8ofW5WlWOJcUui','WOZdHvFdNePpAZ1eWRBcJmkuWPXxWRxcHW','vCkaW53dGSk+W5pdJJ5SlIxdRmosW6mDdSoUga','WQFcTmka','DrhdHJSZW4lcHxVdRSoy','zCoYWP3cO1rLW7ldRH00u8kvWPrx','nu9bhCki','W7pcMMZdIHxdJmknfCknpW','54YI6yEU5P2P6kYB5AA76lAVrW','W6BcJ8kXWOLdW5q','5yQ66kAp6AkJ5RcH5P2R6i+i5B+16yAn5BQ+','rmkJW4D8W4ldO8oD','W6SbW6O','WQhdPfW','5P+76i+75y2y5yI55PEd5O+k77+D5Qo45REh572o57Uj5PMO5zgb5Q6S5BQK','DSoDfSoZbXDy','WO56WPC','5lIO6ywg5BUO5yYC5lUd5ywB5O+O54YN6yAF','WPPHeqmKCKfEvqS','W57dHsFcPIJdPmkeWP8','WOCuW6NcSCom','pffE','W6VdPbnWW6L+WQe4u2OzWOBdLmo8mtm','6ycb6ksN6Aoc6Awz6AgN5AsG6lAdnW','W6FcI8kN','W7lcI2tcGmo9WO/cHSo/WQrAWQ/dQSowhmotW5TGymoXcCo0xGRcLWyJda','WRNcVSkxW4dcRsuj','W5SipW','WQldPqvfW5nMBWTtWPC','WRBdSZq','WQNcSSkDW7JcVICpBq4G','zSonfmoViqTiWRW','5yEw5O6J542W6ywu5OI05yQF77YT5RIy6lwd5O2a54+O5Bc05l205yYv5OYX546r','t3mAqLO2','W6n7pa','W73cI8k2WPO','nf9nAG','4P6DBoIgLoACPEI9O+IJQoMcLUwiIos4IUMuHUIVUK0','WQZdRWLiW5LIzfeMW4brgwC','Cmkfdmk5E3xdGWpdRSkkWRpdMmoMuCoFWO/dISk6','WPhdGghdNNDcyZC','kCowySo7jIlcKLJcHa','W6pdS8ozsW','W6HestNcGmkvuxO','FCkej8kkygpdIr7dVmkjWR0','W6VdPbnXWRjHWRW','FKaqtSko','6zsx6zUs5PwS6zACWQ4tW6e','cbxcVW','bqNcQ8o+AgG','WQ1FW6W','W7RcTK4','WRyPW7PmW4hdLSk+sSobBhi','5OQD5yUw5O+I54YWoq','W7H8BG','WQZcVSktW6NcVJqdEGO3nq','WO4wWO/cI8onoSkEgbldK8kkExRcMSo9i8oOiMZdNrG','Fu0ltmkgWPWJWOWXjW','44kx6lEN5yY3','smk3y8oiW54PW4dcGSkUWOzpWRVcOG','566v5yIK5AEq6lAmyq','uSkNCmokW4K','WQCLW6PSW5ZdRmkZz8oIEMieeSk8W6GhWOeJW5DeFH1fnJJcJa','lCkRpSohxa','bSo0jSkRW6ldVSkuW5SMW50','W5FcKtZcKLLgFsDCWPW','W61hW4m','W6/dRGnC','WRFdVsm','W5xdNJFcOX7dR8kfWOK','5y6d6yEX54IA5OgE57QJ5P+YW5CTWRRcGcjVWQGUWOLn','n1VdGJGeW4u','WOfoWOdcUa','WR0JW6K','W7hdU8ojt8kUW4qUWRtcRmkCW4JdRmoDcSoj','WRugWPm','W586W5y','vmkJW414W4hdH8ogWO/dNConE8kknJVdN8oQpJhdVZ8','54YZ6ysQ5P+76k2j5Awj6lAAWPi','WR3cSSkdW4NcO2SEBsmMm8okW4PuW6S','W4RcGxHSqCkhpCkqzmkmW6m','E0uDsmkeWQCfWRiRi8keWQq2W6JcTI3dP3ustSolW7SaW7RdLmkB','A0uvwCkoWP0','4P+WWPdMNB7OGllMRiJNO6xLP6tNK7ZdOW','jf9kychdH1tcO8kgW5O','W63dPSk1W7pcImoTWO/dLSkUW7u+','5yQJ6kEv6Aky5AsC6lsrW6O','W4JdGIhcQG','W4FdQvm0','8lIPSXG','W444rvmnsgTe','WOGhW5FcVtFcNSoKWP7cSCkCW6q','W71zdW','kpgnSyO96l2+6kod57M35P2uWRG','lvFdIdOFW6xcIe/dQCoyAbhdOgddGb9de1dcVe7cGZm9gCoP','56sXg+I9IUIIR+MvOoMAP+AvJoMvVW','WOriWPW','W64MvSoL','W7SGvSoLdtCaa8orFKWZjx90W7FcKSozAmosW6JcVZddVdSD','W7ynWOb7ksBdSK1MW7hdSxfidmoEFW','WPFIN7T4','W6qNuCoSfXShlW','mSk0nq','5yEQ772B6yE45BI25lYx6Ak6oaO','W77cKg/dIG','W6NdRmkLW5m','W7XyxJxcRmkYv0avzwldIq','WQ3dUYb+erPzdCo1xSoqW6xcV299','eCo1jSkkWPuNW5RdGCkaWP1uW5VcHCkjfCkGtSksuXJdOCkynLBdHYdcMZa6kmkHlmoLaW','W77dTaL8W6L2','qwmhtg0XW68k','rhmaAu8QW64CW7JcOgtcRaW2W6VdJSkXWO3dJG','WPTGWR7dMvmE','W7amWRfQncO','W5OIsLqRvhe','WOD7WOy','W7hdTCkGpW','bHxcVmoU','5lMX55c55B6m5yAkWRdcQKC','W6ZcPmk5W7y','W5D2WQ7dLSkKaSknrcKMkSosxG','W5KKW5hcMq','CSora8oJdsXoWPPDWQrLWRfmW70RW6y+W44','WO4uW6NcSW','W73cRuSrWQ00nLm','5yAi77+x6ys25BQT5l6v6AoBvIG','WRfOWQpcK+AEN+wjJ8kxcsy','E25BFq','W6ddRGa','W4eopc9GoSksBCoOt0jLotHdg8khnG','uSkNASoAW7RdMCk4W50nW59+','W7ddS8oexSkvWOaXWRq','WOGhWP7cN8oSzCoCwaxdHSkGohJdN8o+iSkpl2FdLu8','W6tcJ8k6WOPLW5K2W6LLumkCW4tdNSolW4CDWQJcUeJcRCoc','ASoJWP3cG1uWWQxcUd4YxCkfWOrsW6BcNCkMW7FcRCkIDZLM','WRyTWQJcRW','abVcRmo2','WOCNW67cGG','kCouASo3iclcKdVdTCkpWRtdL8od','tKmxwCkoWOetW4arp8kdWOi','WQJcUSkuW4tcJICaAsKNn8oRWOTtWRfW','WP0uW7tcPSoWlmowW78','6lAw5y2/6l+95RQKDN17','W6tVVk7PN6hMMBdMJAZcNCoDWR7cVEAFKUwiSUAkVos8L+ExMowfO+E9OviYW7ue5P6M5yMx','qhKqqa','E0uDsmkeWR0cWOKvj8kqWOWMW6/cII3dP3uWz8ooW5i+W6BdICkkWO05E37dH1rBWPO+'];_0x3c15=function(){return _0x2a7e9e;};return _0x3c15();}!(async()=>{const _0x19d09a=_0x211c28;notify[_0x19d09a(0x11e,'xX3D')]({'title':$['name']}),await Main(),isNotify&&notify[_0x19d09a(0xdb,'SuGW')]()&&await notify['push']();})()[_0x211c28(0xfe,'m3Sh')](_0x1a49a1=>$['logErr'](_0x1a49a1))[_0x211c28(0x16a,'Hw)0')](()=>$['done']());async function Main(){const _0x4d80e7=_0x211c28;try{try{const _0x10fee8=parseInt(taskThreads);_0x10fee8>0x0&&_0x10fee8!==0x1&&(taskThreads=_0x10fee8);}catch{taskThreads=0x1;}taskThreads=Math['min'](taskThreads,maxThreads),$['waitTime']=null;if(runInterval)try{const _0x26dba7=parseInt(runInterval);_0x26dba7>=0x0&&($[_0x4d80e7(0xc7,'Q37V')]=_0x26dba7);}catch{console['log'](_0x4d80e7(0x142,'KREt'));}console[_0x4d80e7(0xa0,'8o3W')](_0x4d80e7(0x17b,'ox(i')+$['name']+'变量开启状态=========='),console[_0x4d80e7(0xf9,'YDE3')](_0x4d80e7(0x123,'yzRQ')),console[_0x4d80e7(0x6a,'w)J^')](_0x4d80e7(0xec,'ka1A')+taskThreads+']'),console[_0x4d80e7(0x14c,'ox(i')](_0x4d80e7(0xb8,'3@yB')+(process[_0x4d80e7(0xfa,'b!Jl')][_0x4d80e7(0x160,'MykJ')]?''+process[_0x4d80e7(0x156,'YDE3')][_0x4d80e7(0x9d,'m3Sh')]:_0x4d80e7(0x11c,'uetl'))+']'),console[_0x4d80e7(0x17a,'wD0E')](_0x4d80e7(0x69,'&3#9')+$[_0x4d80e7(0x135,'R&2&')]/0x3e8+_0x4d80e7(0x99,'&3#9')),console[_0x4d80e7(0x132,'RrZw')](_0x4d80e7(0xb0,'KREt')+common[_0x4d80e7(0x164,'J)R)')]()+']'),console[_0x4d80e7(0x162,'Hq%5')]('通知推送:\x20['+(isNotify?'开启':'关闭')+']'),console['log'](_0x4d80e7(0xc8,'T(Oj')+pinFilter['join'](',\x20')+']'),console['log'](_0x4d80e7(0xe0,'KPsG')+$[_0x4d80e7(0x15c,'KREt')]+_0x4d80e7(0x80,'H6#Z')),console[_0x4d80e7(0x6a,'w)J^')]('');if(!randomApi){console['log']('⚠\x20请先定义SIGN环境变量后再运行脚本！');return;}$[_0x4d80e7(0x15b,'XS][')]=[],await common[_0x4d80e7(0xe8,'^gzz')](taskThreads,cookiesArr,taskFnc),$[_0x4d80e7(0x14b,'Hq%5')]=![],$['runEnd']=![];$[_0x4d80e7(0x100,'1*kh')][_0x4d80e7(0xab,'m3Sh')]>0x0&&(cookiesArr=cookiesArr[_0x4d80e7(0x102,'xX3D')]((_0x473b82,_0x282d2d)=>!$[_0x4d80e7(0xbf,'SuGW')][_0x4d80e7(0x9f,'eiVi')](_0x282d2d+0x1)),$['needRemoveCookieIndex']=[]);const _0x210764=notify['getMessage']();_0x210764&&console[_0x4d80e7(0x12d,'^gzz')](_0x4d80e7(0x97,'Hw)0')+_0x210764[_0x4d80e7(0x179,'Hq%5')](/：/g,_0x4d80e7(0x9e,'wD0E')));}catch(_0x3a6488){console[_0x4d80e7(0x70,']pnH')](_0x4d80e7(0x184,'%Fop')+_0x3a6488);}}async function taskFnc(_0x3cab07,_0x21ee59){const _0x37c9c7=_0x211c28;if($[_0x37c9c7(0x124,'^gzz')])return{'runEnd':!![]};const _0x471354=decodeURIComponent(common[_0x37c9c7(0x13b,'k(r!')](_0x3cab07,_0x37c9c7(0xaa,'QpUT')));function _0x229746(_0x4da193,_0x43c1a2){const _0x527ae6=_0x37c9c7;if(_0x4da193[_0x527ae6(0x180,'k(r!')]<=0x4)return _0x4da193;else{const _0x9c657e=_0x4da193[_0x527ae6(0x68,'la5%')](0x0,0x2),_0x205d83=_0x4da193[_0x527ae6(0x10c,'Gz2S')](-0x2),_0x59d0bd=Math[_0x527ae6(0x177,'SuGW')](_0x43c1a2-_0x9c657e[_0x527ae6(0x168,'SuGW')]-_0x205d83[_0x527ae6(0x81,'H6#Z')],0x0),_0x5df921='*'[_0x527ae6(0xd3,'6FkY')](_0x59d0bd);return _0x9c657e+_0x5df921+_0x205d83;}}const _0x41a083=decodeURIComponent(_0x471354),_0x577fee=_0x229746(_0x41a083,0x6),_0x150f59=_0x37c9c7(0x74,'mCPt')+_0x21ee59+'】'+_0x577fee+'：',_0x282231=notify[_0x37c9c7(0x11a,'R&2&')](_0x21ee59,_0x471354);if(pinFilter[_0x37c9c7(0x180,'k(r!')]>0x0&&(pinFilter['includes'](_0x471354)||pinFilter[_0x37c9c7(0x7f,'Gz2S')](encodeURIComponent(_0x471354)))){_0x282231['fix'](_0x37c9c7(0x119,'FCz5')),console['log'](_0x282231[_0x37c9c7(0x175,'KPsG')]()),$[_0x37c9c7(0x159,'wD0E')][_0x37c9c7(0x147,'Nz$E')](_0x21ee59);return;}const _0x37b56f=await common['getLoginStatus'](_0x3cab07);if(!_0x37b56f&&typeof _0x37b56f===_0x37c9c7(0x116,'YDE3')){console[_0x37c9c7(0x85,'FCz5')](_0x150f59+'账号无效'),_0x282231[_0x37c9c7(0x9a,'3@yB')]('账号无效'),$[_0x37c9c7(0xbe,'yzRQ')]['push'](_0x21ee59);return;}const _0x40775e=common[_0x37c9c7(0x77,'R&2&')](_0x471354);let _0x380ccc=![],_0x3bcfbe=![],_0x5164ed=![],_0x18f182=!![],_0x108a66,_0x3a9084,_0x3f15b4,_0x37c026,_0x1397a0,_0x4d7111,_0x34fd18;_0x108a66='',await _0x1776c0(_0x37c9c7(0x78,'%Fop')),await $[_0x37c9c7(0xd9,'wBap')](parseInt($[_0x37c9c7(0xdf,'xX3D')]*0x1+0x1f4,0xa));if($[_0x37c9c7(0xa7,'KPsG')]||_0x380ccc)return;if(_0x108a66){let {popAlertInfo:_0x1d258e}=_0x108a66;if(_0x1d258e){let {hbAmount:_0x49d5a0,defaultPopAlertToast:_0x921554}=_0x1d258e;console['log'](''+_0x150f59+_0x921554+':\x20'+_0x49d5a0+'元');}if(_0x108a66?.[_0x37c9c7(0x126,'T(Oj')]?.[_0x37c9c7(0x8e,'9Yf4')])_0x3bcfbe=!![],console[_0x37c9c7(0x140,'ccB!')](_0x150f59+'今天已刷完视频');else{if(!_0x3bcfbe){let _0x4c6f21=0x0;while(_0x18f182&&_0x4c6f21<0x14&&!_0x380ccc){_0x3a9084='',await $[_0x37c9c7(0xd2,'(mDw')](parseInt($[_0x37c9c7(0xdd,'uetl')]*0x1+0x1f4,0xa)),await _0x1776c0(_0x37c9c7(0x155,'tkh@')),await $[_0x37c9c7(0x107,'FCz5')](parseInt($['waitTime']*0x1+0x1f4,0xa));if(_0x3a9084){let {hasNext:_0xa6531,rewardValue:_0xccc5f4,goldCoinAmount:_0x169b6d}=_0x3a9084;_0xccc5f4?console['log'](_0x150f59+'刷视频获得'+_0xccc5f4+'金币:\x20总金币'+_0x169b6d):console[_0x37c9c7(0x174,'9Yf4')](_0x150f59+_0x37c9c7(0x169,'eiVi')),_0x18f182=_0xa6531;}_0x4c6f21++;}}}if(!_0x18f182){await _0x1776c0(_0x37c9c7(0x146,'6FkY')),await $[_0x37c9c7(0x92,'T(Oj')](parseInt($['waitTime']*0x1+0x1f4,0xa));_0x34fd18>0x3e8?(await _0x1776c0(_0x37c9c7(0x136,'(mDw')),await $['wait'](parseInt($[_0x37c9c7(0xd4,'KREt')]*0x1+0x1f4,0xa))):console[_0x37c9c7(0x140,'ccB!')](_0x150f59+'还需'+(0x3e8-_0x34fd18)+_0x37c9c7(0x170,'J)R)'));_0x3f15b4='',await _0x1776c0('videoHbCw_homePage'),await $[_0x37c9c7(0xd2,'(mDw')](parseInt($[_0x37c9c7(0xbd,'Nz$E')]*0x1+0x1f4,0xa));if(_0x3f15b4){_0x1397a0=parseFloat(_0x3f15b4?.[_0x37c9c7(0xc6,'Hq%5')]?.[_0x37c9c7(0x118,'ka1A')]||0x0);let _0x4dbfc0=_0x3f15b4?.[_0x37c9c7(0x104,'3@yB')]?.[_0x37c9c7(0x15d,'YDE3')]||[];_0x4dbfc0=_0x4dbfc0[_0x37c9c7(0x8c,'la5%')](_0x51f36c=>_0x51f36c[_0x37c9c7(0xd7,'Gz2S')]===0x0&&parseFloat(_0x51f36c[_0x37c9c7(0x117,'RrZw')])<=_0x1397a0)[_0x37c9c7(0xfb,'Q37V')](function(_0xb93a16,_0x144dd0){const _0x395a23=_0x37c9c7;return parseFloat(_0x144dd0[_0x395a23(0xf7,'q[Zp')])-parseFloat(_0xb93a16[_0x395a23(0xf2,'YDE3')]);});for(let _0x3b77e6 of _0x4dbfc0){if(_0x5164ed)break;_0x37c026=_0x3b77e6,await _0x1776c0(_0x37c9c7(0x112,'yzRQ')),await $[_0x37c9c7(0x107,'FCz5')](parseInt($[_0x37c9c7(0x187,'MykJ')]*0x1+0xdac,0xa));}}}}if($['runEnd'])return{'runEnd':!![]};await $[_0x37c9c7(0x182,'SuGW')](parseInt($[_0x37c9c7(0xf3,'tkh@')]*0x1+0x1f4,0xa));async function _0x408468(_0xd2e734,_0x4e5fc8){const _0x23c214=_0x37c9c7;try{let _0xf03858;switch(_0xd2e734){case _0x23c214(0x8b,'la5%'):_0x4e5fc8[_0x23c214(0x9b,'eiVi')]==='0'?_0x4e5fc8[_0x23c214(0x172,'Gz2S')]==='0'?_0x108a66=_0x4e5fc8[_0x23c214(0x13a,'KREt')]:(_0xf03858=common[_0x23c214(0x14d,'1*kh')](_0x4e5fc8),['降级']['some'](_0x35479b=>_0xf03858[_0x23c214(0x10f,'wD0E')](_0x35479b))?console[_0x23c214(0x17a,'wD0E')](_0x150f59+_0x23c214(0x10d,'R&2&')+_0x4e5fc8[_0x23c214(0xa8,'k(r!')]+_0x23c214(0xc9,'tkh@')):console['log'](_0x150f59+_0x23c214(0x176,'b!Jl')+_0x4e5fc8[_0x23c214(0xb6,'ox(i')]+']：'+_0xf03858),_0x380ccc=!![]):(_0xf03858=common[_0x23c214(0x66,'b!Jl')](_0x4e5fc8),console['log'](_0x150f59+'逛视频首页失败['+_0x4e5fc8[_0x23c214(0xb9,'gZ13')]+']：'+_0xf03858),_0x380ccc=!![]);break;case _0x23c214(0xa4,'T7IB'):_0x4e5fc8[_0x23c214(0xa3,'xX3D')]==='0'?_0x4e5fc8['busiCode']==='0'?(_0xf03858=_0x4e5fc8?.[_0x23c214(0x14f,'b!Jl')]?.[_0x23c214(0x145,'Gz2S')]?.[_0x23c214(0xff,'KPsG')]?.[_0x23c214(0x173,'Q37V')](/(余额到账[\d\.]+[元]*)/)?.[0x1]||'',console[_0x23c214(0xad,'QpUT')](_0x150f59+_0x23c214(0xd8,'mCPt')+_0xf03858)):(_0xf03858=common[_0x23c214(0x101,'ka1A')](_0x4e5fc8),console[_0x23c214(0xfd,'SuGW')](_0x150f59+_0x23c214(0x76,'QpUT')+_0x4e5fc8[_0x23c214(0xd0,'YH[7')]+']：'+_0xf03858)):(_0xf03858=common['getErrorMsg'](_0x4e5fc8),console[_0x23c214(0xee,')H6[')](_0x150f59+_0x23c214(0xf4,'Gz2S')+_0x4e5fc8[_0x23c214(0x7d,'KPsG')]+']：'+_0xf03858));break;case'videoRedPacketHomePage_exchangeCash':_0x4e5fc8['code']==='0'?_0x4e5fc8[_0x23c214(0x154,'H6#Z')]==='0'?console[_0x23c214(0xe9,'84ki')](_0x150f59+_0x23c214(0x17f,'mCPt')):(_0xf03858=common[_0x23c214(0x13c,'wBap')](_0x4e5fc8),console['log'](_0x150f59+'兑换现金失败['+_0x4e5fc8[_0x23c214(0x154,'H6#Z')]+']：'+_0xf03858)):(_0xf03858=common[_0x23c214(0x14d,'1*kh')](_0x4e5fc8),console['log'](_0x150f59+_0x23c214(0x141,'R&2&')+_0x4e5fc8['code']+']：'+_0xf03858));break;case _0x23c214(0xbb,'wD0E'):_0x4e5fc8[_0x23c214(0x82,'3@yB')]==='0'?_0x4e5fc8['busiCode']==='0'?_0x3f15b4=_0x4e5fc8[_0x23c214(0xde,'yzRQ')]:(_0xf03858=common[_0x23c214(0xbc,'R&2&')](_0x4e5fc8),console['log'](_0x150f59+_0x23c214(0x88,'ka1A')+_0x4e5fc8[_0x23c214(0x17e,'uetl')]+']：'+_0xf03858)):(_0xf03858=common[_0x23c214(0x8f,'xX3D')](_0x4e5fc8),console[_0x23c214(0x132,'RrZw')](_0x150f59+_0x23c214(0x167,'KREt')+_0x4e5fc8[_0x23c214(0x11f,'84ki')]+']：'+_0xf03858));break;case'videoHbGoldCoin_done':_0x4e5fc8[_0x23c214(0x11f,'84ki')]==='0'?_0x4e5fc8['busiCode']==='0'?_0x3a9084=_0x4e5fc8[_0x23c214(0x189,'Nz$E')]:(_0xf03858=common[_0x23c214(0x127,'8o3W')](_0x4e5fc8),console[_0x23c214(0x83,'%Fop')](_0x150f59+_0x23c214(0x90,']pnH')+_0x4e5fc8[_0x23c214(0x12c,'Q37V')]+']：'+_0xf03858)):(_0xf03858=common[_0x23c214(0x71,'Hq%5')](_0x4e5fc8),console[_0x23c214(0x106,'KREt')](_0x150f59+'刷视频失败['+_0x4e5fc8['code']+']：'+_0xf03858),_0xf03858?.[_0x23c214(0x9f,'eiVi')](_0x23c214(0x13f,'YDE3'))&&(_0x380ccc=!![]));break;case'videoHbCw_doCw':_0x4e5fc8[_0x23c214(0xa2,'YDE3')]==='0'?_0x4e5fc8['busiCode']==='0'?(_0x1397a0-=parseFloat(_0x4e5fc8?.[_0x23c214(0xe4,'SuGW')]?.['amount']),console[_0x23c214(0x162,'Hq%5')](_0x150f59+_0x23c214(0x6f,'eiVi')+_0x4e5fc8?.[_0x23c214(0x183,'9Yf4')]?.['amount']+'元],请在APP-我的-钱包中查看')):(_0xf03858=common['getErrorMsg'](_0x4e5fc8),console['log'](_0x150f59+_0x23c214(0x114,')H6[')+_0x4e5fc8[_0x23c214(0x18a,'T7IB')]+']：'+_0xf03858),_0xf03858?.[_0x23c214(0x10f,'wD0E')](_0x23c214(0x13d,'uetl'))&&(_0x5164ed=!![])):(_0xf03858=common['getErrorMsg'](_0x4e5fc8),console[_0x23c214(0x7e,'YH[7')](_0x150f59+_0x23c214(0xef,'Q37V')+_0x4e5fc8[_0x23c214(0xca,'k(r!')]+']：'+_0xf03858));break;case _0x23c214(0x15a,'3@yB'):_0x4e5fc8[_0x23c214(0x7d,'KPsG')]==='0'?_0x4e5fc8[_0x23c214(0x133,'&3#9')]==='0'?(_0x4d7111=_0x4e5fc8?.[_0x23c214(0xe1,'R&2&')]?.[_0x23c214(0xf5,'w)J^')]||0x0,_0x34fd18=_0x4e5fc8?.['data']?.[_0x23c214(0x12b,'MykJ')]||0x0,console[_0x23c214(0xba,'KPsG')](_0x150f59+_0x23c214(0x134,'1*kh')+_0x4d7111+_0x23c214(0xb7,'Hq%5')+_0x34fd18+'金币'),_0x282231[_0x23c214(0x14e,']pnH')]('我的现金余额:\x20'+_0x4e5fc8?.[_0x23c214(0xe1,'R&2&')]?.[_0x23c214(0xf6,'J)R)')]+_0x23c214(0xa1,'(mDw')+_0x4e5fc8?.[_0x23c214(0xc2,'w)J^')]?.[_0x23c214(0x94,'(mDw')]+'金币')):(_0xf03858=common['getErrorMsg'](_0x4e5fc8),console['log'](_0x150f59+'查询余额失败['+_0x4e5fc8[_0x23c214(0x12e,'Hq%5')]+']：'+_0xf03858)):(_0xf03858=common[_0x23c214(0x6e,'%Fop')](_0x4e5fc8),console['log'](_0x150f59+_0x23c214(0x14a,'^gzz')+_0x4e5fc8[_0x23c214(0xae,')H6[')]+']：'+_0xf03858));break;}}catch(_0x1feff5){console[_0x23c214(0x132,'RrZw')](_0x23c214(0x8d,'Gz2S')+_0xd2e734+'\x20请求响应\x20'+(_0x1feff5[_0x23c214(0x122,')H6[')]||_0x1feff5));}}async function _0x1776c0(_0x3fbae8){const _0x416abc=_0x37c9c7;if($[_0x416abc(0x113,'J)R)')])return;let _0xa3537f='',_0x4c1384=null,_0x1c0ef3=null,_0x23cbea=_0x416abc(0xe5,'KREt'),_0x55e138={},_0x32c743={},_0x32db03={};switch(_0x3fbae8){case _0x416abc(0x9c,'eiVi'):_0xa3537f=_0x416abc(0xa6,'XS]['),_0x55e138={},_0x1c0ef3={'functionId':_0x416abc(0x98,'H6#Z')},_0x4c1384=common[_0x416abc(0x120,'wBap')](await getSign('videoHb_newCustomerHbLayer',_0x55e138));break;case _0x416abc(0xeb,'%Fop'):_0x32db03={'appId':_0x416abc(0x150,'m3Sh'),'functionId':'videoHb_sign','appid':_0x416abc(0xf1,'w)J^'),'clientVersion':common[_0x416abc(0x15f,'SuGW')](),'client':_0x416abc(0x108,'MykJ'),'body':{},'version':_0x416abc(0x10a,'T(Oj'),'ua':_0x40775e,'t':!![]},_0x32c743=await H5st[_0x416abc(0x151,']pnH')](_0x32db03),_0xa3537f='https://api.m.jd.com/',_0x4c1384=_0x32c743['paramsData'];break;case _0x416abc(0xdc,'w)J^'):_0x32db03={'appId':_0x416abc(0x165,'la5%'),'functionId':_0x416abc(0xcb,'la5%'),'appid':_0x416abc(0x84,'Nz$E'),'clientVersion':common[_0x416abc(0x11b,'T(Oj')](),'client':_0x416abc(0x96,'T7IB'),'body':{},'version':_0x416abc(0x10e,'ka1A'),'ua':_0x40775e,'t':!![]},_0x32c743=await H5st[_0x416abc(0x115,'FCz5')](_0x32db03),_0xa3537f=_0x416abc(0x72,'yzRQ'),_0x4c1384=_0x32c743[_0x416abc(0x73,'la5%')];break;case _0x416abc(0x161,'RrZw'):_0x32db03={'appId':_0x416abc(0x130,'KREt'),'functionId':_0x416abc(0xb4,'uetl'),'appid':_0x416abc(0xa5,'YH[7'),'clientVersion':common[_0x416abc(0x129,'QpUT')](),'client':_0x416abc(0x181,']pnH'),'body':{},'version':_0x416abc(0x86,'QpUT'),'ua':_0x40775e,'t':!![]},_0x32c743=await H5st[_0x416abc(0x67,'KPsG')](_0x32db03),_0xa3537f=_0x416abc(0xe7,'gZ13'),_0x4c1384=_0x32c743[_0x416abc(0x157,'wBap')];break;case _0x416abc(0x105,'ox(i'):_0xa3537f=_0x416abc(0x110,'YDE3'),_0x55e138={'contentId':_0x416abc(0x188,'b!Jl'),'jsLabel':'4ltgbXKkRshCe6GnSlUDvA+g9Fa0rrkBU\x5c/\x5c/B\x5c/yiFbd9FIKv\x5c/JbAtuXFz6FONLlyuK+Vw0JMqNshWaQy6Na6G4PT\x5c/Cvu8XWrPhFP6ibzY+UuNOZ0m6+m\x5c/jSeCmEe0a3mxfa6k3eupkZYmCUBGKfd1GYpVv3ztGei1Or2tWMqcBu8=','playType':_0x416abc(0x6c,'m3Sh')},_0x1c0ef3={'functionId':_0x416abc(0x87,'Hw)0')},_0x4c1384=common[_0x416abc(0x143,'tkh@')](await getSign('videoHbGoldCoin_done',_0x55e138));break;case'videoHbCw_doCw':_0x32db03={'appId':_0x416abc(0xf8,'b!Jl'),'functionId':_0x416abc(0xda,'KREt'),'appid':_0x416abc(0x89,'Hq%5'),'clientVersion':common[_0x416abc(0xa9,'k(r!')](),'client':_0x416abc(0x16b,'m3Sh'),'body':{'bizTraceId':_0x37c026[_0x416abc(0x17d,'Hq%5')],'amount':_0x37c026['amountStr']},'version':_0x416abc(0x7c,'FCz5'),'ua':_0x40775e,'t':!![]},_0x32c743=await H5st[_0x416abc(0x12f,'gZ13')](_0x32db03),_0xa3537f=_0x416abc(0x138,'Q37V'),_0x4c1384=_0x32c743[_0x416abc(0x166,'ka1A')];break;case _0x416abc(0x10b,'R&2&'):_0x32db03={'appId':'a3b98','functionId':_0x416abc(0x149,'Gz2S'),'appid':_0x416abc(0xd5,'SuGW'),'clientVersion':common[_0x416abc(0xf0,'wBap')](),'client':'wh5','body':{'activitySource':'1','realClient':_0x416abc(0x125,'FCz5')},'version':'4.7','ua':_0x40775e,'t':!![]},_0x32c743=await H5st['getH5st'](_0x32db03),_0xa3537f=_0x416abc(0x11d,'b!Jl'),_0x4c1384=_0x32c743[_0x416abc(0x153,'&3#9')];break;default:console['log'](_0x416abc(0x152,'T7IB')+_0x3fbae8);return;}const _0x59cbda={};_0x4c1384&&Object['assign'](_0x4c1384,_0x59cbda);_0x1c0ef3&&Object[_0x416abc(0x6b,'w)J^')](_0x1c0ef3,_0x59cbda);const _0x127be0={'url':_0xa3537f,'method':_0x23cbea,'headers':{'origin':_0x416abc(0xc0,'J)R)'),'Referer':'https://pro.m.jd.com/mall/active/8WYa8CGWvkB5b3EC9TcyAbAobeo/index.html','User-Agent':_0x40775e,'Cookie':_0x3cab07,'content-type':_0x416abc(0xd1,'QpUT'),'accept':_0x416abc(0xed,'6FkY')},'params':_0x1c0ef3,'data':_0x4c1384,'timeout':0x7530};_0x23cbea===_0x416abc(0x16c,'MykJ')&&(delete _0x127be0['data'],delete _0x127be0['headers'][_0x416abc(0xc5,'la5%')]);const _0x7d3d16=0x1;let _0x4bdf1a=0x0,_0x520fdd=null;while(_0x4bdf1a<_0x7d3d16){_0x4bdf1a>0x0&&await $[_0x416abc(0x131,'ccB!')](0x3e8);const _0x330345=await common[_0x416abc(0x16e,'uetl')](_0x127be0);if(!_0x330345[_0x416abc(0xac,'(mDw')]){_0x520fdd=_0x416abc(0x93,'ox(i')+_0x3fbae8+_0x416abc(0xfc,']pnH')+_0x330345[_0x416abc(0xcf,'RrZw')],_0x4bdf1a++;continue;}if(!_0x330345[_0x416abc(0xe1,'R&2&')]){_0x520fdd='🚫\x20'+_0x3fbae8+_0x416abc(0x121,'R&2&'),_0x4bdf1a++;continue;}await _0x408468(_0x3fbae8,_0x330345[_0x416abc(0xc3,'&3#9')]);break;}_0x4bdf1a>=_0x7d3d16&&console[_0x416abc(0x137,'3@yB')](_0x520fdd);}}function _0x2bb5(_0x42edf7,_0x3c59ff){const _0x3c1568=_0x3c15();return _0x2bb5=function(_0x2bb53e,_0x6e9da0){_0x2bb53e=_0x2bb53e-0x66;let _0x3c04ae=_0x3c1568[_0x2bb53e];if(_0x2bb5['QdYnGG']===undefined){var _0x4b2490=function(_0x68c92e){const _0x1a49a1='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x210764='',_0x10fee8='';for(let _0x26dba7=0x0,_0x473b82,_0x282d2d,_0x3a6488=0x0;_0x282d2d=_0x68c92e['charAt'](_0x3a6488++);~_0x282d2d&&(_0x473b82=_0x26dba7%0x4?_0x473b82*0x40+_0x282d2d:_0x282d2d,_0x26dba7++%0x4)?_0x210764+=String['fromCharCode'](0xff&_0x473b82>>(-0x2*_0x26dba7&0x6)):0x0){_0x282d2d=_0x1a49a1['indexOf'](_0x282d2d);}for(let _0x3cab07=0x0,_0x21ee59=_0x210764['length'];_0x3cab07<_0x21ee59;_0x3cab07++){_0x10fee8+='%'+('00'+_0x210764['charCodeAt'](_0x3cab07)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x10fee8);};const _0x558873=function(_0x471354,_0x229746){let _0x41a083=[],_0x577fee=0x0,_0x150f59,_0x282231='';_0x471354=_0x4b2490(_0x471354);let _0x37b56f;for(_0x37b56f=0x0;_0x37b56f<0x100;_0x37b56f++){_0x41a083[_0x37b56f]=_0x37b56f;}for(_0x37b56f=0x0;_0x37b56f<0x100;_0x37b56f++){_0x577fee=(_0x577fee+_0x41a083[_0x37b56f]+_0x229746['charCodeAt'](_0x37b56f%_0x229746['length']))%0x100,_0x150f59=_0x41a083[_0x37b56f],_0x41a083[_0x37b56f]=_0x41a083[_0x577fee],_0x41a083[_0x577fee]=_0x150f59;}_0x37b56f=0x0,_0x577fee=0x0;for(let _0x40775e=0x0;_0x40775e<_0x471354['length'];_0x40775e++){_0x37b56f=(_0x37b56f+0x1)%0x100,_0x577fee=(_0x577fee+_0x41a083[_0x37b56f])%0x100,_0x150f59=_0x41a083[_0x37b56f],_0x41a083[_0x37b56f]=_0x41a083[_0x577fee],_0x41a083[_0x577fee]=_0x150f59,_0x282231+=String['fromCharCode'](_0x471354['charCodeAt'](_0x40775e)^_0x41a083[(_0x41a083[_0x37b56f]+_0x41a083[_0x577fee])%0x100]);}return _0x282231;};_0x2bb5['bMbAFM']=_0x558873,_0x42edf7=arguments,_0x2bb5['QdYnGG']=!![];}const _0x1d8b60=_0x3c1568[0x0],_0x4ec03a=_0x2bb53e+_0x1d8b60,_0x160410=_0x42edf7[_0x4ec03a];return!_0x160410?(_0x2bb5['UjdEYj']===undefined&&(_0x2bb5['UjdEYj']=!![]),_0x3c04ae=_0x2bb5['bMbAFM'](_0x3c04ae,_0x6e9da0),_0x42edf7[_0x4ec03a]=_0x3c04ae):_0x3c04ae=_0x160410,_0x3c04ae;},_0x2bb5(_0x42edf7,_0x3c59ff);}async function getSign(_0x426820,_0x5a8333){const _0x7335ab=_0x211c28,_0x175dab=await common[_0x7335ab(0x144,'k(r!')]({'url':randomApi,'method':_0x7335ab(0xc1,'yzRQ'),'headers':{'Content-Type':_0x7335ab(0x148,'la5%')},'body':JSON['stringify']({'fn':_0x426820,'body':_0x5a8333}),'proxy':null,'debug':![],'timeout':0x7530}),_0x30440d=_0x175dab[_0x7335ab(0xb5,'Q37V')];if(_0x30440d&&_0x30440d[_0x7335ab(0x103,'m3Sh')])return _0x30440d[_0x7335ab(0xaf,'w)J^')];else console['error'](_0x7335ab(0x16d,'%Fop'));}
// prettier-ignore
function Env(t,e){"undefined"!=typeof process&&JSON.stringify(process.env).indexOf("GITHUB")>-1&&process.exit(0);class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`🔔${this.name}, 开始!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),n={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(n,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)})):this.isQuanX()?(this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t))):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();s&&this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)}))}post(t,e=(()=>{})){if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.post(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method="POST",this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){this.initGotEnv(t);const{url:s,...i}=t;this.got.post(s,i).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)})}}time(t,e=null){const s=e?new Date(e):new Date;let i={"M+":s.getMonth()+1,"d+":s.getDate(),"H+":s.getHours(),"m+":s.getMinutes(),"s+":s.getSeconds(),"q+":Math.floor((s.getMonth()+3)/3),S:s.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(s.getFullYear()+"").substr(4-RegExp.$1.length)));for(let e in i)new RegExp("("+e+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?i[e]:("00"+i[e]).substr((""+i[e]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};if(this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r))),!this.isMuteLog){let t=["","==============📣系统通知📣=============="];t.push(e),s&&t.push(s),i&&t.push(i),console.log(t.join("\n")),this.logs=this.logs.concat(t)}}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`❗️${this.name}, 错误!`,t.stack):this.log("",`❗️${this.name}, 错误!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`🔔${this.name}, 结束! 🕛 ${s} 秒`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}
