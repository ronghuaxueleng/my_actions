/*
活动名称：惊喜红包一次性

cron:15 19 18 7 *

*/

const $ = new Env('惊喜红包一次性')
function _0x41b0(_0x32119c,_0x4cf9c6){const _0x3757bf=_0x3757();return _0x41b0=function(_0x41b00e,_0x1d836c){_0x41b00e=_0x41b00e-0xf7;let _0x3286a5=_0x3757bf[_0x41b00e];if(_0x41b0['tgJCiw']===undefined){var _0xfa0a50=function(_0x35a0e6){const _0x5e4823='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x4b5b3c='',_0x25dab2='';for(let _0x53023c=0x0,_0x410263,_0x495664,_0x489629=0x0;_0x495664=_0x35a0e6['charAt'](_0x489629++);~_0x495664&&(_0x410263=_0x53023c%0x4?_0x410263*0x40+_0x495664:_0x495664,_0x53023c++%0x4)?_0x4b5b3c+=String['fromCharCode'](0xff&_0x410263>>(-0x2*_0x53023c&0x6)):0x0){_0x495664=_0x5e4823['indexOf'](_0x495664);}for(let _0x52da2f=0x0,_0x578428=_0x4b5b3c['length'];_0x52da2f<_0x578428;_0x52da2f++){_0x25dab2+='%'+('00'+_0x4b5b3c['charCodeAt'](_0x52da2f)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x25dab2);};const _0x33c0c6=function(_0x2c10df,_0x28274f){let _0x6218fc=[],_0x556a02=0x0,_0x432c92,_0x47a1a4='';_0x2c10df=_0xfa0a50(_0x2c10df);let _0x57d573;for(_0x57d573=0x0;_0x57d573<0x100;_0x57d573++){_0x6218fc[_0x57d573]=_0x57d573;}for(_0x57d573=0x0;_0x57d573<0x100;_0x57d573++){_0x556a02=(_0x556a02+_0x6218fc[_0x57d573]+_0x28274f['charCodeAt'](_0x57d573%_0x28274f['length']))%0x100,_0x432c92=_0x6218fc[_0x57d573],_0x6218fc[_0x57d573]=_0x6218fc[_0x556a02],_0x6218fc[_0x556a02]=_0x432c92;}_0x57d573=0x0,_0x556a02=0x0;for(let _0x5655c4=0x0;_0x5655c4<_0x2c10df['length'];_0x5655c4++){_0x57d573=(_0x57d573+0x1)%0x100,_0x556a02=(_0x556a02+_0x6218fc[_0x57d573])%0x100,_0x432c92=_0x6218fc[_0x57d573],_0x6218fc[_0x57d573]=_0x6218fc[_0x556a02],_0x6218fc[_0x556a02]=_0x432c92,_0x47a1a4+=String['fromCharCode'](_0x2c10df['charCodeAt'](_0x5655c4)^_0x6218fc[(_0x6218fc[_0x57d573]+_0x6218fc[_0x556a02])%0x100]);}return _0x47a1a4;};_0x41b0['svSeHk']=_0x33c0c6,_0x32119c=arguments,_0x41b0['tgJCiw']=!![];}const _0x1a6fd4=_0x3757bf[0x0],_0x3a26cd=_0x41b00e+_0x1a6fd4,_0x300ec5=_0x32119c[_0x3a26cd];return!_0x300ec5?(_0x41b0['ASePPz']===undefined&&(_0x41b0['ASePPz']=!![]),_0x3286a5=_0x41b0['svSeHk'](_0x3286a5,_0x1d836c),_0x32119c[_0x3a26cd]=_0x3286a5):_0x3286a5=_0x300ec5,_0x3286a5;},_0x41b0(_0x32119c,_0x4cf9c6);}const _0x1c440f=_0x41b0;(function(_0x56e01,_0x51215a){const _0x1cfcc0=_0x41b0,_0x1952a1=_0x56e01();while(!![]){try{const _0x31a9d8=parseInt(_0x1cfcc0(0x143,'kU!n'))/0x1+parseInt(_0x1cfcc0(0x16c,'c0%o'))/0x2*(-parseInt(_0x1cfcc0(0x14e,'@nRA'))/0x3)+-parseInt(_0x1cfcc0(0x163,'^n[('))/0x4+parseInt(_0x1cfcc0(0x102,'kU!n'))/0x5+-parseInt(_0x1cfcc0(0x13c,'bfoz'))/0x6+-parseInt(_0x1cfcc0(0xfc,'bfoz'))/0x7*(parseInt(_0x1cfcc0(0x190,'@nRA'))/0x8)+-parseInt(_0x1cfcc0(0x123,'wl02'))/0x9*(-parseInt(_0x1cfcc0(0x15b,'@$Ya'))/0xa);if(_0x31a9d8===_0x51215a)break;else _0x1952a1['push'](_0x1952a1['shift']());}catch(_0x5112ec){_0x1952a1['push'](_0x1952a1['shift']());}}}(_0x3757,0x9af9d));const jdCookie=require(_0x1c440f(0x116,'@Cew')),notify=require(_0x1c440f(0x154,'c0%o')),common=require(_0x1c440f(0x189,'%hNH')),{H5st}=require(_0x1c440f(0x12d,'F9Tf'));let taskThreads=process[_0x1c440f(0x182,'@nRA')][_0x1c440f(0x155,'7Ywd')]||'1';const runInterval=process[_0x1c440f(0x13b,'gOQq')]['jd_Surprise_Red_interval']||'1500',isNotify=(process['env']['jd_Surprise_Red_notify']||process[_0x1c440f(0x177,'gni[')][_0x1c440f(0x133,'@nRA')])===_0x1c440f(0x18c,'2Wg@'),pinFilter=(process[_0x1c440f(0x11e,'q0Km')][_0x1c440f(0x15f,'N^UC')]||'')['split']('@'),maxThreads=0x1;let cookiesArr=Object[_0x1c440f(0xf7,'f4Cd')](jdCookie)[_0x1c440f(0x146,'@1ZF')](_0x33c0c6=>jdCookie[_0x33c0c6])['filter'](_0x35a0e6=>_0x35a0e6);!cookiesArr[0x0]&&($[_0x1c440f(0x117,'f4Cd')]($[_0x1c440f(0x160,'impB')],_0x1c440f(0x106,'v[Y[')),process[_0x1c440f(0x13f,'akU1')](0x1));!(async()=>{const _0x5c0870=_0x1c440f;notify[_0x5c0870(0x118,'4[xX')]({'title':$['name']}),await Main(),isNotify&&notify[_0x5c0870(0x132,'bQn$')]()&&await notify[_0x5c0870(0x165,'5&p4')]();})()[_0x1c440f(0x129,'c0%o')](_0x5e4823=>$[_0x1c440f(0x149,'bfoz')](_0x5e4823))[_0x1c440f(0x11f,'kU!n')](()=>$[_0x1c440f(0x110,'@$Ya')]());async function Main(){const _0x54f411=_0x1c440f;try{try{const _0x25dab2=parseInt(taskThreads);_0x25dab2>0x0&&_0x25dab2!==0x1&&(taskThreads=_0x25dab2);}catch{taskThreads=0x1;}taskThreads=Math[_0x54f411(0x18e,'!^En')](taskThreads,maxThreads),$[_0x54f411(0x196,'@$Ya')]=null;if(runInterval)try{const _0x53023c=parseInt(runInterval);_0x53023c>=0x0&&($['waitTime']=_0x53023c);}catch{console[_0x54f411(0x15d,'V]i$')]('⚠\x20自定义运行间隔时长设置错误');}$['needRemoveCookieIndex']=[],console[_0x54f411(0x193,'eJ)j')](_0x54f411(0xfa,'c0%o')+$[_0x54f411(0x175,'v[Y[')]+_0x54f411(0x156,'4[xX')),console[_0x54f411(0x135,'N^UC')](_0x54f411(0x11b,'v2r0')+$[_0x54f411(0x151,'b3G4')]/0x3e8+_0x54f411(0x138,'qw4k')),console[_0x54f411(0x12f,'5&p4')](_0x54f411(0x121,'^n[(')+common[_0x54f411(0x178,'hF2p')]()+']'),console['log'](_0x54f411(0x150,'gOQq')+(isNotify?'开启':'关闭')+']'),console[_0x54f411(0x188,'wLka')]('账号过滤:\x20['+pinFilter['join'](',\x20')+']'),console[_0x54f411(0xfb,'^n[(')](_0x54f411(0x17d,'bfoz')+$[_0x54f411(0x147,'gni[')]+_0x54f411(0x158,'impB')),console[_0x54f411(0x18b,'X@Yp')](''),await common[_0x54f411(0x14f,'@$Ya')](taskThreads,cookiesArr,taskFnc),$[_0x54f411(0xf8,'Hvzp')]=![];$['needRemoveCookieIndex'][_0x54f411(0x162,'gOQq')]>0x0&&(cookiesArr=cookiesArr[_0x54f411(0x14b,'5&p4')]((_0x410263,_0x495664)=>!$[_0x54f411(0x153,'7Ywd')][_0x54f411(0x145,'b3G4')](_0x495664+0x1)),$[_0x54f411(0x171,'eJ)j')]=[]);const _0x4b5b3c=notify[_0x54f411(0x126,'eJ)j')]();_0x4b5b3c&&console[_0x54f411(0x16b,'@nRA')](_0x54f411(0x122,'7Ywd')+_0x4b5b3c[_0x54f411(0x127,'@$Ya')](/：/g,_0x54f411(0x12e,'e*o9')));}catch(_0x489629){console[_0x54f411(0x152,'gOQq')]('❌\x20脚本运行遇到了错误\x0a'+_0x489629);}}async function taskFnc(_0x52da2f,_0x578428){const _0x1cb21a=_0x1c440f;if($['runEnd'])return{'runEnd':!![]};const _0x2c10df=decodeURIComponent(common[_0x1cb21a(0x10a,'^n[(')](_0x52da2f,_0x1cb21a(0x11d,'wLka')));function _0x28274f(_0x40af29,_0x1c5bdc){const _0x5bc6af=_0x1cb21a;if(_0x40af29[_0x5bc6af(0xfd,'6jHH')]<=0x4)return _0x40af29;else{const _0x9ad6e1=_0x40af29[_0x5bc6af(0x15a,'7[jk')](0x0,0x2),_0x16fa61=_0x40af29[_0x5bc6af(0x197,'!^En')](-0x2),_0x23be2b=Math[_0x5bc6af(0x17c,'Rg#O')](_0x1c5bdc-_0x9ad6e1['length']-_0x16fa61[_0x5bc6af(0x144,'f4Cd')],0x0),_0x1e8e50='*'[_0x5bc6af(0x14d,'4[xX')](_0x23be2b);return _0x9ad6e1+_0x1e8e50+_0x16fa61;}}const _0x6218fc=decodeURIComponent(_0x2c10df),_0x556a02=_0x28274f(_0x6218fc,0x6),_0x432c92=_0x1cb21a(0x185,'SKDH')+_0x578428+'】'+_0x556a02+'：',_0x47a1a4=notify[_0x1cb21a(0x124,'v2r0')](_0x578428,_0x2c10df);if(pinFilter[_0x1cb21a(0x159,'%hNH')]>0x0&&(pinFilter['includes'](_0x2c10df)||pinFilter[_0x1cb21a(0x11c,'6fs@')](encodeURIComponent(_0x2c10df)))){_0x47a1a4[_0x1cb21a(0x174,'F9Tf')](_0x1cb21a(0x130,'X)OL')),console[_0x1cb21a(0x18f,'!H5e')](_0x47a1a4[_0x1cb21a(0x157,'6jHH')]()),$[_0x1cb21a(0x166,'5&p4')][_0x1cb21a(0x14c,'q0Km')](_0x578428);return;}const _0x57d573=await common['getLoginStatus'](_0x52da2f);if(!_0x57d573&&typeof _0x57d573===_0x1cb21a(0x173,'tzRf')){console[_0x1cb21a(0x10b,'^1z%')](_0x432c92+_0x1cb21a(0x172,'Rg#O')),_0x47a1a4[_0x1cb21a(0x140,'X@Yp')](_0x1cb21a(0x112,'kU!n')),$[_0x1cb21a(0x16d,'!^En')][_0x1cb21a(0x170,'X@Yp')](_0x578428);return;}const _0x5655c4=common[_0x1cb21a(0x199,'X@Yp')](_0x2c10df);await _0x2e9490(_0x1cb21a(0x104,'q0Km'));if($[_0x1cb21a(0x107,'wl02')])return{'runEnd':!![]};await $[_0x1cb21a(0x15e,'gOQq')](parseInt($[_0x1cb21a(0x161,'6jHH')]*0x1+0x1f4,0xa));async function _0x542772(_0x222dc6,_0x2f7db2){const _0x11f4b6=_0x1cb21a;try{switch(_0x222dc6){case _0x11f4b6(0x100,'!H5e'):if(_0x2f7db2['code']===0xc8){if(Array[_0x11f4b6(0x115,'6fs@')](_0x2f7db2[_0x11f4b6(0x12a,'gOQq')][_0x11f4b6(0x113,'Rg#O')])){const _0x51be20=_0x2f7db2[_0x11f4b6(0x187,'$o2a')][_0x11f4b6(0x111,'r!z5')];let _0x3f5cc2='';_0x51be20[_0x11f4b6(0x180,'X)OL')](_0x5cd649=>{const _0x13d88d=_0x11f4b6;_0x5cd649['materialInfo'][_0x13d88d(0x141,'wl02')](_0x5eadb1=>{const _0x32bc11=_0x13d88d;if(_0x5eadb1[_0x32bc11(0x14a,'Tdw4')]===0x6)_0x3f5cc2+=_0x5eadb1[_0x32bc11(0x15c,'b3G4')][_0x32bc11(0x125,'$o2a')]+_0x32bc11(0x114,'@$Ya');else _0x5eadb1[_0x32bc11(0x17b,'zLPk')]===0x2&&(_0x3f5cc2+=_0x5eadb1[_0x32bc11(0x109,'^n[(')][_0x32bc11(0x184,'6jHH')]+'('+_0x5eadb1[_0x32bc11(0x169,'^1z%')][_0x32bc11(0x105,'6fs@')]+'-'+_0x5eadb1[_0x32bc11(0x176,'tzRf')][_0x32bc11(0x108,'5&p4')]+'优惠券),');});}),_0x3f5cc2=_0x3f5cc2[_0x11f4b6(0x12b,'hF2p')](0x0,-0x1),console[_0x11f4b6(0x17f,'c0%o')](_0x432c92+_0x11f4b6(0x183,'hF2p')+_0x3f5cc2);}else console[_0x11f4b6(0x131,'6jHH')](_0x432c92+_0x11f4b6(0x181,'V]i$'));}else msg=common[_0x11f4b6(0x11a,'!H5e')](_0x2f7db2),console[_0x11f4b6(0x10b,'^1z%')](_0x432c92+'领取失败：'+msg);break;}}catch(_0x1d1116){console['log'](_0x11f4b6(0x13e,'6fs@')+_0x222dc6+_0x11f4b6(0x16e,'bQn$')+(_0x1d1116[_0x11f4b6(0x142,'eJ)j')]||_0x1d1116));}}async function _0x2e9490(_0x5e2b25){const _0x381297=_0x1cb21a;if($['runEnd'])return;let _0x336fed='',_0x5419c6=null,_0x1574df=null,_0x216880=_0x381297(0x168,'X)OL'),_0x2dfd7b={},_0x765013={};switch(_0x5e2b25){case'jutouDisplayIndex':_0x765013={'appId':_0x381297(0x12c,'kU!n'),'functionId':_0x381297(0x195,'^n[('),'appid':'pages-factory','clientVersion':common[_0x381297(0x13d,'7Ywd')](),'client':_0x381297(0x101,'$o2a'),'body':{'channelId':'12128','lid':_0x381297(0x128,'qw4k'),'ext':{'babelActivityId':_0x381297(0x13a,'bfoz')}},'version':'4.7','ua':_0x5655c4,'t':!![]},_0x2dfd7b=await H5st[_0x381297(0x16a,'r!z5')](_0x765013),_0x336fed=_0x381297(0xfe,'^1z%'),_0x5419c6=_0x2dfd7b[_0x381297(0x148,'@1ZF')];break;default:console[_0x381297(0x194,'F9Tf')](_0x381297(0x134,'7Ywd')+_0x5e2b25);return;}const _0x5a883e={};_0x5419c6&&Object[_0x381297(0x18a,'r!z5')](_0x5419c6,_0x5a883e);_0x1574df&&Object[_0x381297(0x191,'7Ywd')](_0x1574df,_0x5a883e);const _0x5467e7={'url':_0x336fed,'method':_0x216880,'headers':{'Host':'api.m.jd.com','Accept':_0x381297(0x10c,'^1z%'),'Cookie':_0x52da2f,'User-Agent':_0x5655c4,'Accept-Language':_0x381297(0x10f,'f4Cd'),'Accept-Encoding':_0x381297(0x17a,'7Ywd'),'Referer':_0x381297(0x167,'bQn$')},'params':_0x1574df,'data':_0x5419c6,'timeout':0x7530};_0x216880===_0x381297(0x18d,'gni[')&&(delete _0x5467e7[_0x381297(0x139,'gni[')],delete _0x5467e7[_0x381297(0x17e,'impB')][_0x381297(0x179,'7[jk')]);const _0x21628b=0x1;let _0x34a755=0x0,_0x5c5caa=null;while(_0x34a755<_0x21628b){_0x34a755>0x0&&await $[_0x381297(0x192,'Hvzp')](0x3e8);const _0x58ea95=await common[_0x381297(0x103,'7[jk')](_0x5467e7);if(!_0x58ea95['success']){_0x5c5caa=_0x381297(0x120,'bQn$')+_0x5e2b25+'\x20请求失败\x20➜\x20'+_0x58ea95[_0x381297(0x164,'V]i$')],_0x34a755++;continue;}if(!_0x58ea95[_0x381297(0x139,'gni[')]){_0x5c5caa='🚫\x20'+_0x5e2b25+_0x381297(0xf9,'7k1Z'),_0x34a755++;continue;}await _0x542772(_0x5e2b25,_0x58ea95[_0x381297(0x136,'6fs@')]);break;}_0x34a755>=_0x21628b&&console[_0x381297(0x10e,'impB')](_0x5c5caa);}}function _0x3757(){const _0x1fdd12=['k1G6W6PxW4jXWQG','CGvuF8kBW5LvhvtdMCkYW7tdRHO','EafuwCkgW59FghxdQSkNW7NdSHm','W5FcQmoM','WPhdQmkR','W6tcLGq9ieWpfCo6WOaBW4Kb','WP4BnW','a8oRW5RdSq80WRJcJWJdQ8kpkc/cRW','fSk2iCkD','WQhcKCo0W7tcJ8omxfZdQ0ldQ8oLWR7cKXq7x8oIWPWa','6lwQ5y+e5PAg5Pwr','WRlcPfvGWOVcH2GTW6ZdTcajmWpdHZ9gWOCrWPa','57Uq5y+CyW','sKTuW4hcUmo8WQa','D8oCFmkQrmouWQhcJCkGW6q','fmoWWPa','xJZcImo+WOJdIq','WRzFW5lcIeOxFSo3hSouWRzZ','wGFdK2hcM8o0jCoDCx7dHW','6zwH6zU25PAc6zAaB0GP','sLz2W5/cV8o5WRZcPq','EMldT8o4W6BdLq','wNKV','kLOiEmorzCon','8k6OUZa','5lU855gI5BYG5ywPW5pcKg8','EFgoOABcR+I8HoIHHUE6SoAFSHC','k8kcW4vgW60VW5ygW4BcSmo/ka','W7yqeCkEiq0','tqZdNxmqq3ZdJq','WP3cIYHsmMxdVSoZgrO','amk8p8kuWQ/dOSoX','DvNdR8k0W4LmW7/dTdldO8kbiX43dmoIac4+srf4ffW','W6mRWPhcUCov','WOrLWOWQ','ebZcI8ovvG','DvDsimoE','WQXsW6WjW5zeiW3dGtPcxSonW7TlW6K','WRlIN5Kz','i14U','5BwE6kYB572b6lEH6l+V6l2t6kk75B+R5yQU6lwU5y60','W6LBW70','imo1zbJdVSoVb8k/WQtdVW','E8oVCCkwxmoPW5zzW6RcKmkTWPFcU0RdRmoME2XwWO8TBa','4PY/W6FMNQ/NNARORkpMSyHd','W6Hbaq','r1LHW5i','q8oOD8ooW7/cSCkIxCohkwJdLSoq','56EWA+I9TUIIOUMuJEMASEAvREMxGG','xdeSja','WO3cSc3dMmkoW7pdHSoY','WOvQWO4','WOVcSIldKCkhW7pdHmkBW4xcP8k1W5PR','fmkIW7hdG8k1FGyDACkzu2yCW5ddL0pcISkvda','4P2VgoACV+IbJUAUQEEJS+wNNEEtKmkF','W4RdHHFcUG','bLqM','FmoFWO80WRX8W7C','WPFcIY9SnNhdQa','FqjEl8kmoCkcWQddRfj4oqS','fCoMWPNdNHOY','zW9HBdzFgmku','WRtdRNa','vJe1ia','WQNdRNldIbddMCk4WQNdPMC','W5hdRN3cRmonWRy','W6OmWP7dMGHovSo6cmoCWQju','kvGLW71DW4u','t2iQyW','tZBcLSo9WOddMG','imk7gCoXFmotW5jmW6xcOa','eCk2iCkBWPRdOmoNFq','6yo655+H5O2q6ygkWRldVaS','EqbRDbDsemkc','WOXRWP8','hCkIW6ddQ8kgBW4bA8k9yhKLW57dJfxcQSkubSoHW4G','WQ5LWPdcRSoulZVdMmkkub03WRxdQCk7W45NW7bZxmkiW6bXC8kGWPGU','gCkJW5RdNmkHEbmCDmkRrKKyW5ddGw/cVmkocSo2W5xdTcRcPW','5y+L6yAC5B+M5zk354Mx5OkVu10IW6/cR8oHW7HlsSkd','W6jrW67dRCknW6zBuSktm8opjCoyW5JcNmkz','5yYQ6yA754UM5OkB57Ma5PY/e1ddJb/dVSkEWQyYW41o','ACkHWRBdNCkFWP4','ESosW60AW64','r8oQF8kVWQJdGmoUq8oA','yWb2ztfshmklW5ZcOfnEW5VdGq','eSk1gW','WPDLWPe/','W65kouyeWRmYWOlcKthdHXaACxSzv8oUDSo1WRmCW6eGWQm','WPWvpCo/','W7jvW7pdKmk3W6nFwq','WOXHWPySW7ZcTa','lv0ylmorWOKccvZdSCktW7FdOq','g8kOdSktWP8','p0q6W6e','ivqSW61QW5jYWRmyW4ZdLSofWOlcIYNcNCkHwY5eiW','l8oKzcxdQmkMw8oXWQVcRWzqWQ3dMLu2mvT9W7xdQcRdK8ouagXOpJ8himokodVdPSk/dCkmv8kAWQrADJVdGmohW7JdT8oTkCkpWRdcSZNdKNhdPI8oamopqbLslL54WPa/W4lcOM44W65QW4qkig7dKmoIW7COsSkpFMFdOSkdudldS8kgdsKSdsOochFcNCkQW5WQzxRcGqFdJCkTzd/cQmo2WP05W7RdSY7dM8kdW7NcGCo9xvCvgCkcWOlcLXNdULyWmSouWQFdGSoXjMC4DSk3CdxcQGZcPSofWQWHWP0xFrKvW7yamGu1W7RdLHK4W6f3W6v4FZJcTSoKoeOjxCoGW4NdMSoTtmkKlSkmWRZcLrWzFwRdSmkVWQtcHZS1W6ldHCkffepcJJxcR14pgSobW4qSnwtcQCoTW4ddOvbfWO3dIbhdKSk/W6meFSk1W7jzW5WNaCowW7BcGuhcSCo1ttRcI8ooprTlWQ3dJwldGmo6E0RdLCkDW4VdKCkUBuS/lHpcJvK8b0pdLYiXWPVcV8kPg8oVzMddS8kmnSkyWPhdU8oOWQWUymkBz3DdW63dI2FcVSkAW5rqxSoAtSo6cSoIW7RdSX/cHqZcKHvvWQi+cfddImkBvmkXaHJcV8o0WQPpW5a9gZNdG8k/qdOkWQfvDvBcQSksmXdcLxGEW4tcMmoACSkEWR7dHMNdOmkqWRG0fSkxWOS7W6FdGJFdL8kEcdqfWO/dRSkxBqpcTCkcWQZdVrTrWPZcH05SWRPnwWW4wSk6WRzgiCkMymosvdNdLtiVbCkMe10GsIHVeSogwbpcISkPd3y1WPigWOj0qmkuW5HhjdvbqHBcTr3cPN9qW6eseCkPaCobW4ddRwdcKH/cVmoFwXHNWQ8GWRzUWRFdQSoqubHqWRddUetcTCkIWPePfxL9imkyamkBWPC7W4JdMmkoWQL6dYtcKMldJvhcUCorWPtcTq1iW450ng9bWPWAWPvoWOnLW6RdNh5lW4JcUCodeSoRWPm6WOTOsGn1WRJcQSkDFMfVWOFcQJxcRIH0','W7ZdQNXg','W5BcPSo1WO7cJSornCkzeCo7WQRcMCo6Fq','WQxcM8oTW4ZdLCortq','FCoKsq','WRfYW5ddOSosnGVcJ8kbqG','WOhdUvdcVmkIFSowz1ZcMatcV8o9sb0Efabof0m','z+ITP+AXKUwsMow4J8k8','WRqmWQ/cNmkmW79XrmkVbW','eeGTWPK','WPtcIZL7bxpdOmo9cbRdHmoCWRJdSmkhWOrdaCkVWRddMG','6lE35yY85PEy5Pwy','w1PJDMWFtG','W6quW6e','W63cUW/cGa','vfr4F3SxqvxdNCouCWBdQtW','xt4U','bbxcLSoMqCo8W4Obvmoxe8klFSkO','sSorW6OnW67dHCkAW7dcP8oHW5VdJq','fmk9W6ZdV8o4kGClE8k0qMiVWPNcHvlcKq','wCo2DsaUWPKsjJBdI2lcRq','WRZcQKa','WOdcVcFdLmkcW7NdI8o/WOddRa','WPOrmCo+W7ysxq','W6WLWOi','W4RdIL1xsCoGWP8','5RoF5P+t6i+l5B2R57Mp5y2Y5OML5l2f5Ogc5yMF','DmoLwa','6i+u5B+N77+4','W6LDW7FdJCkxW5LgtG','44kx6lwp5y6Q','WPRcJeVdUCoaWPSucmoSWRlcGmoiya','tqtdMNe','zNNdJW','k8oRWQ3dJSkcWPPbax4ytCo+gu4hAI9GrhJdMM0T','WQpcJCoQW63cH8om','dfi5','WQBdL0LG','FXum','WOldTvS','uq3dGa','iSk5fSo9zSoQW6vCW7FcHG','eSk0W7BdPSkZza','t8oOmYa','WPBcGtS','W64sW74','DrfuDCkCW7rDaMddKmkNW6ZdJHH2W4ZdSW','bCk4jSkmWPRdQmo5CW','WPZdSfZcU8kv','osdcKmkXW7ZdRdtcG8otFG','b1GWWQq0','vq5UWQytW7VcTti3','eSoMWO7dIG','sSo8nbhcVmkd','qoITLoAYREwMP+I2R2/INjSK5PEy5zk35BUf5PEa5OYy','WR13W5JdP8kaFNxdISoLca','CWTh','WO7cTYldKmomWPpcHmkGW6JcOG','W6LrW7tdG8kxW6i','W5pcS8o1WPVcJ8kcE8oAnmoUWRFdLSo+pXOdCNKgkmkqW48Xn11XEmk6W5VdTSkughHd','g1ZcLIzhdYtdGutcV8o0W6FcVW','vXFdK0VcNmoci8oCtghdGuRcHwuFW4xdRG','qaRdNq','EqftlSkjpmkeWQxdH3TAlZC','E8oBW7umW67dMmkA','vwiTzmkXCCoIsrS8WRaED8oQW5dcNbC','uK16W4FcQW','44kt5OYk56wy44o06kYI5yEk6i2n5y6nmIZdQ8kdW4Wq','AmofWPm0WRn7'];_0x3757=function(){return _0x1fdd12;};return _0x3757();}
// prettier-ignore
function Env(t,e){"undefined"!=typeof process&&JSON.stringify(process.env).indexOf("GITHUB")>-1&&process.exit(0);class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`🔔${this.name}, 开始!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),n={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(n,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)})):this.isQuanX()?(this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t))):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();s&&this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)}))}post(t,e=(()=>{})){if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.post(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method="POST",this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){this.initGotEnv(t);const{url:s,...i}=t;this.got.post(s,i).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)})}}time(t,e=null){const s=e?new Date(e):new Date;let i={"M+":s.getMonth()+1,"d+":s.getDate(),"H+":s.getHours(),"m+":s.getMinutes(),"s+":s.getSeconds(),"q+":Math.floor((s.getMonth()+3)/3),S:s.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(s.getFullYear()+"").substr(4-RegExp.$1.length)));for(let e in i)new RegExp("("+e+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?i[e]:("00"+i[e]).substr((""+i[e]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};if(this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r))),!this.isMuteLog){let t=["","==============📣系统通知📣=============="];t.push(e),s&&t.push(s),i&&t.push(i),console.log(t.join("\n")),this.logs=this.logs.concat(t)}}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`❗️${this.name}, 错误!`,t.stack):this.log("",`❗️${this.name}, 错误!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`🔔${this.name}, 结束! 🕛 ${s} 秒`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}