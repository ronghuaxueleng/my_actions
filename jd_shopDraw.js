/*
店铺左侧刮刮乐

店铺抽奖 左侧

也可点击顶部【精选】后面的【活动】选项，找到抽奖活动

必须有venderId= 参数
//export jd_shopDraw_venderId="" //店铺ID，多个 @ 链接或者 | 链接 或者 & 链接

cron:1 1 1 1 *
============Quantumultx===============
[task_local]
#店铺左侧刮刮乐
1 1 1 1 * jd_shopDraw.js, tag=店铺刮刮乐, enabled=true
 */

const $ = new Env('店铺左侧刮刮乐');
var version_='jsjiami.com.v7';const _0x3ef4a7=_0x2fcd;(function(_0x267d38,_0x26a5ce,_0x3dc92a,_0x13af95,_0x1fecf4,_0x5d28ac,_0x228c22){return _0x267d38=_0x267d38>>0x6,_0x5d28ac='hs',_0x228c22='hs',function(_0x17b030,_0x5f42c4,_0x555393,_0x317fe6,_0x52e389){const _0x13f622=_0x2fcd;_0x317fe6='tfi',_0x5d28ac=_0x317fe6+_0x5d28ac,_0x52e389='up',_0x228c22+=_0x52e389,_0x5d28ac=_0x555393(_0x5d28ac),_0x228c22=_0x555393(_0x228c22),_0x555393=0x0;const _0x477cca=_0x17b030();while(!![]&&--_0x13af95+_0x5f42c4){try{_0x317fe6=-parseInt(_0x13f622(0x14a,'DABh'))/0x1*(-parseInt(_0x13f622(0x216,'m!bB'))/0x2)+parseInt(_0x13f622(0x205,'NulH'))/0x3*(parseInt(_0x13f622(0x18e,'R[El'))/0x4)+parseInt(_0x13f622(0x1d0,'Fs@q'))/0x5*(-parseInt(_0x13f622(0x200,'%ws!'))/0x6)+parseInt(_0x13f622(0x1bf,'t6MM'))/0x7*(parseInt(_0x13f622(0x1bb,'B(JF'))/0x8)+-parseInt(_0x13f622(0x171,'WmzD'))/0x9+-parseInt(_0x13f622(0x11a,'^z0R'))/0xa*(-parseInt(_0x13f622(0x1ed,'EFed'))/0xb)+-parseInt(_0x13f622(0x1f6,'R[El'))/0xc;}catch(_0x95104b){_0x317fe6=_0x555393;}finally{_0x52e389=_0x477cca[_0x5d28ac]();if(_0x267d38<=_0x13af95)_0x555393?_0x1fecf4?_0x317fe6=_0x52e389:_0x1fecf4=_0x52e389:_0x555393=_0x52e389;else{if(_0x555393==_0x1fecf4['replace'](/[rDMXElIUnVxRqbuTfk=]/g,'')){if(_0x317fe6===_0x5f42c4){_0x477cca['un'+_0x5d28ac](_0x52e389);break;}_0x477cca[_0x228c22](_0x52e389);}}}}}(_0x3dc92a,_0x26a5ce,function(_0x2bf013,_0x4b940e,_0x4e36c9,_0x34464e,_0x28176a,_0x134445,_0x361313){return _0x4b940e='\x73\x70\x6c\x69\x74',_0x2bf013=arguments[0x0],_0x2bf013=_0x2bf013[_0x4b940e](''),_0x4e36c9='\x72\x65\x76\x65\x72\x73\x65',_0x2bf013=_0x2bf013[_0x4e36c9]('\x76'),_0x34464e='\x6a\x6f\x69\x6e',(0x139f9b,_0x2bf013[_0x34464e](''));});}(0x2fc0,0xa04c8,_0x1d9c,0xc1),_0x1d9c)&&(version_=_0x1d9c);function _0x1d9c(){const _0x32653e=(function(){return[version_,'UVxjRsjXfiaumVDiE.cDlTormV.MIv7xkbqRuMxn==','W64mWQNdUsP4na','z8kwW7ZcL8kB','dmoScW','WQRcSSo6WQ1S','emowdSoKiW','W5z6W5xdQY3cMG','WRlcSgxdLSou','iX7cS1nswfq','W4/dRfnbWR8','WQ44WRWr','W7VdI29xWRa','FSodW40','WOmUWRmSWOe','W59dCJ3cUG','eCoUW7ldHConiCouW6K','ESkuW7KcWQm','nGFcO3Pq','WOdcKmoLWRzYELG','nmoGEIDSECoLa8oF','cxpcNdFcVG','Fmk9q8oIWQndW7LyWOP4zmo3wSoYWOVdLmolDXmy','W6RORiBPH5lMLiJNM4BLVRlOJiJLJ4xcPKLPbSkSW4C','W43cL8kEq0FdP8kvaq','W6P4W7pdVtG','hLFcUgRcOG','5REJ5yQLWPPJ5lMi5AY85z6Y','5BEW57QA5y275lUG6lY95RAK5yU5WPvz','b8oUzZ9G','5OYz5y+z6i6Z5y6B5AEQ6lEd77+d6lEW6lYs','WOhcRMpdKCoU','zmoGW5y','hCo8oCkrq2XUWQVdISkKWP5iW6uH','sCkz5Asg6lwPnSkn5y+D5zU+W6ZdQa','pmoKBaDs','WONcGLhdL8ozWOi','j8k8WQ/cSYDb','AmkvW54','WRBdGW7dI2NcGSkf','iSoyzGPZ','DCkyW7q','xmo0oIWH','WQNcSXiOW6RdO8kpW57cRCkRW7JcIa','WPmqxHK','y8omtSkpFW','fCoYDIzd','zKRcNSo+bW','nb/dHmkFFCo3WQdcRWVdHaPj','BxVcO8oHma','jqDMWRHv','coIUOUMfToAvNUEAGEw/IUIpPUwmVvLLWQvzW7xdISoIWOpcJ3xdKZxdKJy4W4XkWQ5UtbFdSmkEqCo8iSo5W449W5uEsce0WPldVsvrWRXcW7SYWOZdQG','x8k2sSoIWPi','5O6G5y+p6i2c5y2+5Aw16lER77+d6lsy6l6F','5B+y5AEg56+F','pCo/zJ9Y','5lUf5lQE6lwB5y2A','WR9vc8oZivZcMSkE','k2ZdT0tcLG','q8kMzmobfYO','j8o2gSoFcG','W7BdPSonDsivxCkQWOzVjc3cNxeKtSoY','WRGUvCkEWRBdGXGOW7S0uG/dLti','WQlcRgBdGSo/','nLJdQeu','rWtcMuhcQ8osaCkH','xSoLWOFcRGeAwSk3','WR5mW7JcM1O','b8k5W6PQW5u','W5BdKhrBWRy','mGbkhb8','CsxdLCkhWO4','qSkytCoDWO4','WO3dMSoComkp','WOWFoCkqD8kI','zCo2icO3','rSocW4rMW5K','zJRdL8kl','WOVcQ8onWRPv','WQNdImoLjSkY','5BEI57MZ5y+G5lUO6l+m5Rs25yMwWRhdLq','najwWOG','WQfse8o5WOS','WRJdG8oDnSkpwbCdu8od','mqzmWOLJbW','WPNcQGu','WODhgSoIbW','FSkCrvhcKa','DCojW55GW4SBWRC','eSoHyW','W4bwW4NdSt8','WOvEmCo5WP4','W4XBDJ7cVG','smoPycjMAmo/jSo1W5pdHmo/WOb1WQ/dLW','pSkUWO7cQsu','WRmbm8kcWRe','WQNdH8o7WQvq','WQTKWPrPdaRdVmkO','ACo5WOBcPq','WOaspCkdCCkKCfTVrW','WObcmCoYb1lcH8k/WRFcI3BdNCkYv193ddrLyG','WRRJGipKUjxKUOpOTA7LJj8','Emowgcqn','ESovW6DDW44','W73dS8od','W4hdTqbfWRe','WRBdN8ou','WOlcMmo/WRy','WRu+bCk+qa'].concat((function(){return['WPhcSwddK8oZCq','BCkuW53cPmkM','BJRdNG','zCkQwmoChq','WRTIWP1XibBdRSksW64y','WRzSWP5I','b8k8WRRcTJu','rCk3xConeZa','W5bvyW','WP4dfgrHW6C','5lIX5lM56lYA5zMj5lU/56M25Ps25OYw','wmoqBmkKBW','W5bXBWNcVa','etrqhZddT8oIW6e','iCk/oauNW5zEWP9+W5ijgCog','E8k0u1ZcKa','W7ddQ8ofD2PXxmk8WOnXlcNcJdrRqG','qmkRAq','WPZdOH3dLLW','ndXdWPqvW7m4WQLmW6X7yXZdLuVdRsVdGtznW5OtnW3dHCobrtyOrY7dVSkF','W4VdQtnj','icDCeHa','WQTKWPrPfHddQa','EGVdHq','zJtdJCkp','WOihcNq','WPddICkQ','WPNcTMaDW6HNW60DWOzTjt97jW','AZVdNCklWOi','b8oiW5JdSCog','kmkMWPdcRIvD','WPJdLmkFzuW','BSoNmXmaW71uWOD0W4voa8obWQFdICod','bL/cV0C','tSk+WO3cQmkoW67cJNX5W7WMseXfWPXFldZdPSkAW6hdUmolW67cNSkZWQ0uWP7cUaFdKSkyW6JcV1RcLCknfx/dKCkPW5VdMfr3WQm','WO4yvbjSiCks','W5HiCcpcKG','wmkYsCkCEWZdTmkPW58tW7ZcKMu','amoxqq','xM7cSgJdR8kmjCol','k1ddOK4','B8kYjSoOW7O','WPpcMhJdLSoVWOldIhlcT0i','lCoJk8oOna','WOhcT2JdLSojymo8','EaddH8kSW71Rwq','amoShSobov3cO8kX','n8kbW6bR','D8ktW57cR8knW7lcKW','WO5hgSoG','WOlcKrdcR8kF','nelcVNtcIW','WOVdOa3dIxW','rMtcTmo6hq','C0tcSCoqbG','ECojW490WOCoWRP/ctK','WQ3cHvVdN8o/','W5fjyW','AmoQoXfiWPLvWPfXW5Tgb8oqW6lcHSopvG','oCosW6lcN8o4W5VdIZS0W7vRwLi','vbVdM8kjWR4','CWddNCkVW6H3','bt5AWOiz','cLxcPspcJxDE','pCkQWPlcVG5aWPNdLmoHWQS','CrBdJmkwWQG','gCoUEcK','cvtcOq','CSkYkW','W5JdSYre','WRmyoa','WP/cLfZdS8o2','5OUA5Ash57UT5P+N772p8l6aG8kLkEERTEAZU8ou','5Rsx5yMS5Awy5zgL772U','WP/cKeZdT8ox','W5Ssxmk0vWVcHCknWQBcOKpdTW','fYjUWRbk','WQOYWQWqWOZcHCo4','B8khW4yTWP0','gSoUys9T','wmofW5XHW6W','WOdcS37dMCoB','jCk5WOtcQseyq8k7WR/dRb8kW7z/BSkjWRFdLa','WQlcImofWOfC','5Rws5yIQnmoP772w','WO8uqaLtiq','m8oyWRK','WOPbWPbKka','WOesn8km','W7JdQ1C','qCkYsCoHgG','z8kVFCo+WOK','WR7dOmo+iSkA','te7cGSoyfa','WOJdNmoDWO9exWG','W7fwzqpcQG','uCkJzmolWPm','xSkICa','WPeWqrzL','CCodW45H','bvNcQ13cImoqdmklW4tcNJdcJuBdUmo0W4K','WQtdT8oWWO5GFJuT','WOColKby','D8koW7atWP8','ASkYW6tdKSoTjmo3W6mhASkyqq','WOCTWRmzWRC','gCo3dSof','Fmotrq','zCo0drimW5zbWRbLW5zqlmodWQVdImojqvddMxq'].concat((function(){return['x8kTACokjYOS','zfZcNmkgkCoGWQxcJ3BdTHr2','5lQE5lUr6l+d5zUo5lMV56IY5PE75O+x','W5/cG8kyW7SsdvbAxSoGWOBdHZhdGq','WOldGHhdQ3a','W5/cISkBW7OCbvq5zSoiWRddQdG','z8o5WOu','WPK9WQOhWRS','DCosva','5lMz5lUz6l625zIl5lMq56MU5Psv5O2/','WPBdUSo2b8kj','gL/cQW','WOJdVSo5bmkR','ySodW5LW','BZtdIq','WRJcMJVdKCokFmoHW5TmnJCFWQzwW6KZWQWYWQ7dKhBcRKqrCCo7x2DKnZhcM0TpW7fGeCkTWRzIWRKdW58iWR/dRCot','W5P3W6BdRcdcH2nuWObjACo9gSkChZJcGSkwkmkw','wSoBz8kSuW','W67dOe90WPFcUSkEW6xcOCkf','y8oXWPBcHsq','y8o/nq','bmkkWQtcTWm','W4BdPZPj','W7ekWQK','dJ9AhI0','ymojwSkxAG','W6lWRRgoW5W','n2ddM8k5WP7dPYJcSW','huNdQwRcGa','DHBdVCkNW7H6','zmofcdmS','wmoUESk3wa','smkGFxZcGG','lqjsWPK','gmkSB8olbq4p','WRniW63cMW','44o+5O2J56Av44oB6k+s5yw06i+x5y685lQW5lQK6lEc5y2i5lMOW6BcP8kLWR/dJ8k7W4ZNMzxMJQRKVQRNL4vXWOpdNIupWPhNM7hKUPpKUAhNR6pLIPdOJ4ZLJka','WRFdG8ou','y8kaW5dcSCoYWQBcHxD6WR92cH5FWOKnFG','DmowWRONWQ3cSCkuhua8bhG','W5S5gmoiWRDdW71cDCk0bSkbtCkXCSoyW77dKSozWPxdSW','WROzkq','tSkPECosWOO','tCkZDmoDda','wmkzFhFcKa','zCkXC8oHWPrnW7LSWQDQESopqSoiWO3dN8odya','W5X9W7hdUZa','b8oYW7JdNmoQjCokW4y3','ihFdNwlcIq','WOCNpxHb','dSoCuJW6W4WUD8kGWQ0','WPBcMmo5WQr7','WOzjcq','rWhcN1BcISoKc8kG','Bf/cU8ohimkR','a8kpW6z0W7FdOSk7cW','WRJdLtBdGg/cN8kk','j8oYW7JdNmoQjq','WR/dMCoRWPbU','WPT/hCowWPDbW6ro','WRnOWOP0','5RsR5yIus8kc5lIg5A2v5z+w','zNBcJ8o/ca','WP7cSwG','DdddL8kkWP/dRrJcJW','sbhdPSkQWR/dNqtcRa','W51kDchcSSkfWQ53WRXMlCkiW4Kgq8oIdNpcNmkJFM7cTCo6sHxdVwJcLYBdG8o0W5W','WOBcMuNdVmoX','lCktW64','WOrClCoVga','WODsa8otjG','nHBcUe5K','W6hdVCowDMS','WO4QhmkYWPO','qCkKCh7cUJZdUq','WO7dN8owmSkKsW4Z','pmo+xHTQ','mcjf','d1xcUa3cHxhLT4tLP7FML5NdH8okxW','AqNcSrhdU2D4uSkXq8otFKW','WQq5WRSyWPJcLCo8W68','WRWsewb4WP8sW6BcS8kwWQNcQIapcSo1jvBcIgK','pCo8yYPk','jSkpEmkrAxZcUSkH','WQfZo8okaa','y8oIWPBcRdXbgmo9WRhdSLLpW6K2yCkzW6ZdLJ9PgHyXDgzybNFdGMbKemkzWPO','lmk6W5HNW6K','WPmyubDXnmknW5O','WPdcQXq','W6NdGajLWQK','shRcSmoVjW','BGRdN1FcRImovW','WRb5WOD3nL7cTCoOW74rWRHMW4VcVCoeFqRcOrddTL3cQYhcQCkTWQbikrTmWOFdPCkLBSouWP3dTtNdU8kQW43dVcW','WQWNfCkZ','arL9WQ5U','W7ddPfvZWRe','iSkpW61M','ymk3w8ojWOG','nfBdOG','xq7cGHtcJNvpWOu','WOuMW5VdIcZcKgPi','jIvuWPyVW6qR','WRbzW6dcMeWdqHHcnqNdGYLEWQBdQfrBW7pdGmorhKtcLmoVtXtcHIe1WRVcULZdSSkcumkbWQ8MWO0/sSot','mConW6FdKmop','lSo5W4JdHmoRl8ojW4GbySkjz8oQx2bUW4yVW78/','5lQ85lQG6l+25zI45lQn56M35PAo5O6H','WOZdRSkcyKm'];}()));}()));}());_0x1d9c=function(){return _0x32653e;};return _0x1d9c();};const _0x276998=$[_0x3ef4a7(0x189,'qrpo')]()?require(_0x3ef4a7(0x167,'4wGv')):'',_0x47f881=$['isNode']()?require(_0x3ef4a7(0x10d,'DoOh')):'',_0x2d7a9c=require(_0x3ef4a7(0x194,'BP$A')),_0x40e627=require('./function/krgetSign'),_0x49d505=require(_0x3ef4a7(0x151,'lcg^'));let _0x520315=[],_0x56f896='';if($[_0x3ef4a7(0x1a2,'NulH')]()){Object[_0x3ef4a7(0x1a8,'sP6T')](_0x47f881)[_0x3ef4a7(0x15d,'WmzD')](_0x518c4a=>{const _0x199df9=_0x3ef4a7;_0x520315[_0x199df9(0x144,'^z0R')](_0x47f881[_0x518c4a]);});if(process[_0x3ef4a7(0x142,'gna!')][_0x3ef4a7(0x164,'WmzD')]&&process['env']['JD_DEBUG']===_0x3ef4a7(0x218,'gKfr'))console[_0x3ef4a7(0x191,'GGMd')]=()=>{};}else _0x520315=[$[_0x3ef4a7(0x22d,'n20A')]('CookieJD'),$['getdata']('CookieJD2'),..._0x305f6d($[_0x3ef4a7(0x12c,'qrpo')](_0x3ef4a7(0x19b,'4wGv'))||'[]')['map'](_0x533ff1=>_0x533ff1[_0x3ef4a7(0x1a5,'4wGv')])][_0x3ef4a7(0x11d,'%Q[(')](_0x2a2e7c=>!!_0x2a2e7c);let _0x53f6c6=[];if(process[_0x3ef4a7(0x145,'6gMo')][_0x3ef4a7(0x1bd,'6gMo')]){if(process[_0x3ef4a7(0x174,'t6MM')]['jd_shopDraw_venderId']['includes']('|'))_0x53f6c6=[...process[_0x3ef4a7(0x22e,']uZZ')][_0x3ef4a7(0x1eb,'wR)D')][_0x3ef4a7(0x202,'t6MM')]('|'),..._0x53f6c6];else process[_0x3ef4a7(0x1d9,'w[Y7')]['jd_shopDraw_venderId'][_0x3ef4a7(0x12d,'w[Y7')]('@')?_0x53f6c6=[...process['env'][_0x3ef4a7(0x17c,'Fs@q')][_0x3ef4a7(0x21c,'0DPv')]('@'),..._0x53f6c6]:_0x53f6c6=[...process['env'][_0x3ef4a7(0x239,'DABh')][_0x3ef4a7(0x1f4,'yqGl')]('&'),..._0x53f6c6];}function _0x2fcd(_0x597e53,_0x1bd23d){const _0x1d9c67=_0x1d9c();return _0x2fcd=function(_0x2fcd73,_0x1b3847){_0x2fcd73=_0x2fcd73-0xfc;let _0x20814d=_0x1d9c67[_0x2fcd73];if(_0x2fcd['AgWrOs']===undefined){var _0x4994db=function(_0x32073d){const _0x1c570f='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x1d3813='',_0x7bd4e0='';for(let _0x9519dd=0x0,_0x19e8e9,_0x486965,_0x1c76f3=0x0;_0x486965=_0x32073d['charAt'](_0x1c76f3++);~_0x486965&&(_0x19e8e9=_0x9519dd%0x4?_0x19e8e9*0x40+_0x486965:_0x486965,_0x9519dd++%0x4)?_0x1d3813+=String['fromCharCode'](0xff&_0x19e8e9>>(-0x2*_0x9519dd&0x6)):0x0){_0x486965=_0x1c570f['indexOf'](_0x486965);}for(let _0x5be3a2=0x0,_0x3a053d=_0x1d3813['length'];_0x5be3a2<_0x3a053d;_0x5be3a2++){_0x7bd4e0+='%'+('00'+_0x1d3813['charCodeAt'](_0x5be3a2)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x7bd4e0);};const _0x9d7105=function(_0x296e40,_0x447b4d){let _0x7b3f82=[],_0x57940a=0x0,_0x5446af,_0x5ec943='';_0x296e40=_0x4994db(_0x296e40);let _0x2f35d1;for(_0x2f35d1=0x0;_0x2f35d1<0x100;_0x2f35d1++){_0x7b3f82[_0x2f35d1]=_0x2f35d1;}for(_0x2f35d1=0x0;_0x2f35d1<0x100;_0x2f35d1++){_0x57940a=(_0x57940a+_0x7b3f82[_0x2f35d1]+_0x447b4d['charCodeAt'](_0x2f35d1%_0x447b4d['length']))%0x100,_0x5446af=_0x7b3f82[_0x2f35d1],_0x7b3f82[_0x2f35d1]=_0x7b3f82[_0x57940a],_0x7b3f82[_0x57940a]=_0x5446af;}_0x2f35d1=0x0,_0x57940a=0x0;for(let _0x2cbeb8=0x0;_0x2cbeb8<_0x296e40['length'];_0x2cbeb8++){_0x2f35d1=(_0x2f35d1+0x1)%0x100,_0x57940a=(_0x57940a+_0x7b3f82[_0x2f35d1])%0x100,_0x5446af=_0x7b3f82[_0x2f35d1],_0x7b3f82[_0x2f35d1]=_0x7b3f82[_0x57940a],_0x7b3f82[_0x57940a]=_0x5446af,_0x5ec943+=String['fromCharCode'](_0x296e40['charCodeAt'](_0x2cbeb8)^_0x7b3f82[(_0x7b3f82[_0x2f35d1]+_0x7b3f82[_0x57940a])%0x100]);}return _0x5ec943;};_0x2fcd['DvGvsq']=_0x9d7105,_0x597e53=arguments,_0x2fcd['AgWrOs']=!![];}const _0x455f74=_0x1d9c67[0x0],_0x5bd771=_0x2fcd73+_0x455f74,_0x1a4323=_0x597e53[_0x5bd771];return!_0x1a4323?(_0x2fcd['gWyZjC']===undefined&&(_0x2fcd['gWyZjC']=!![]),_0x20814d=_0x2fcd['DvGvsq'](_0x20814d,_0x1b3847),_0x597e53[_0x5bd771]=_0x20814d):_0x20814d=_0x1a4323,_0x20814d;},_0x2fcd(_0x597e53,_0x1bd23d);}const _0x27d64d=process['env']['JD_SIGN_KRAPI']||'';let _0x2a79c5='';const _0x40a731=_0x3ef4a7(0x1c1,'lcg^');!(async()=>{const _0x4392f1=_0x3ef4a7,_0x521e8a={'bycUn':function(_0x51305c,_0x446698){return _0x51305c(_0x446698);},'emwCQ':function(_0x49464a){return _0x49464a();},'JzkmZ':function(_0x5577d6,_0x5c911b){return _0x5577d6!==_0x5c911b;},'pKAjT':_0x4392f1(0x197,'R[El'),'KqKWo':_0x4392f1(0x1f0,'sP6T'),'eIKQR':_0x4392f1(0x190,'WmzD'),'yLGxT':_0x4392f1(0x1c8,'sP6T'),'HlNBd':_0x4392f1(0x153,'w[Y7'),'NMeQG':function(_0x229492,_0x46c807){return _0x229492<_0x46c807;},'KkyKW':'wxWWZ','hgtYk':_0x4392f1(0x1dd,'e$jJ'),'mJSKl':function(_0x4b47a5,_0x6cdc12){return _0x4b47a5+_0x6cdc12;},'NykXl':function(_0x2e26bc,_0x36693f){return _0x2e26bc+_0x36693f;},'DukIc':function(_0x1c02c6,_0x17e5a8){return _0x1c02c6+_0x17e5a8;},'ZkJbp':function(_0x37e1df,_0x44fd23){return _0x37e1df!==_0x44fd23;},'sWLcD':_0x4392f1(0x23c,'n20A'),'lArjZ':function(_0x56384b){return _0x56384b();}};if(_0x53f6c6['length']<=0x0){if(_0x521e8a[_0x4392f1(0x168,'CdlX')](_0x521e8a[_0x4392f1(0x203,'R9(k')],_0x521e8a['pKAjT']))_0x320b79[_0x4392f1(0x22a,'2qj5')](_0xf92ed5);else{$[_0x4392f1(0x180,'DoOh')](_0x521e8a[_0x4392f1(0x1b8,']uZZ')]);return;}}if(!_0x520315[0x0]){$[_0x4392f1(0x138,'iao0')]($[_0x4392f1(0x104,'sP6T')],_0x521e8a[_0x4392f1(0x1ea,'gna!')],'https://bean.m.jd.com/bean/signIndex.action',{'open-url':_0x521e8a['yLGxT']});return;}console[_0x4392f1(0x143,'@]a(')](_0x521e8a[_0x4392f1(0x10a,'t6MM')]+_0x53f6c6);for(let _0x1ca1f8=0x0;_0x521e8a['NMeQG'](_0x1ca1f8,_0x520315['length']);_0x1ca1f8++){if(_0x521e8a['JzkmZ'](_0x521e8a[_0x4392f1(0x1f8,']uZZ')],_0x4392f1(0x178,'GGMd'))){if(_0x520315[_0x1ca1f8]){if(_0x521e8a[_0x4392f1(0x17f,'lcg^')]!==_0x521e8a[_0x4392f1(0x1ef,'m!bB')])return _0x521e8a['bycUn'](_0x5bb281,_0x214cd8[0x2]);else{_0x56f896=_0x520315[_0x1ca1f8],$[_0x4392f1(0x1b7,'GGMd')]=_0x521e8a['bycUn'](decodeURIComponent,_0x56f896[_0x4392f1(0x1cb,'%ws!')](/pt_pin=([^; ]+)(?=;?)/)&&_0x56f896[_0x4392f1(0x22b,'DABh')](/pt_pin=([^; ]+)(?=;?)/)[0x1]),$[_0x4392f1(0x184,'uwpD')]=_0x521e8a[_0x4392f1(0x146,'yqGl')](_0x1ca1f8,0x1),$['isLogin']=!![],$[_0x4392f1(0x1c3,'#NLq')]='',message='',console[_0x4392f1(0x172,'lcg^')](_0x521e8a['NykXl'](_0x521e8a[_0x4392f1(0x1e3,'CdlX')](_0x521e8a['DukIc'](_0x4392f1(0x23a,'Fs@q'),$[_0x4392f1(0x100,'7tlV')])+'】',$[_0x4392f1(0x1a7,'BP$A')]||$[_0x4392f1(0x217,'lcg^')]),'\x0a'));if(!$[_0x4392f1(0x1a4,'A%FC')]){$[_0x4392f1(0xfc,'GGMd')]($['name'],'【提示】cookie已失效',_0x4392f1(0x20d,'w[Y7')+$[_0x4392f1(0x11b,'0DPv')]+'\x20'+($['nickName']||$[_0x4392f1(0x1e5,'4wGv')])+_0x4392f1(0x208,'0DPv'),{'open-url':_0x4392f1(0x1d2,'gKfr')});$['isNode']()&&(_0x521e8a[_0x4392f1(0x1ee,'Fs@q')](_0x521e8a['sWLcD'],_0x521e8a['sWLcD'])?_0x521e8a['emwCQ'](_0x3890bd):await _0x276998[_0x4392f1(0x13f,'%Q[(')]($[_0x4392f1(0x141,']uZZ')]+_0x4392f1(0x1ba,'gna!')+$['UserName'],'京东账号'+$['index']+'\x20'+$[_0x4392f1(0x20e,'DABh')]+_0x4392f1(0x1ec,'e$jJ')));continue;}await _0x521e8a[_0x4392f1(0x161,'#NLq')](_0x3891f7);}}}else _0x237e0f['signStr']=_0x42f01e?.[_0x4392f1(0xfd,'yOE0')]?.['convertUrl']||'';}if(_0x2a79c5){if($[_0x4392f1(0x1f9,'e$jJ')]())await _0x276998[_0x4392f1(0x17e,'%ws!')](''+$[_0x4392f1(0x215,'B(JF')],''+_0x2a79c5);$[_0x4392f1(0x1b0,'s4sF')]($[_0x4392f1(0x1c9,'ma@w')],'',_0x2a79c5);}})()['catch'](_0x5a78f4=>{const _0x401219=_0x3ef4a7;$[_0x401219(0x110,'R[El')]('','❌\x20'+$[_0x401219(0x201,'#NLq')]+',\x20失败!\x20原因:\x20'+_0x5a78f4+'!','');})[_0x3ef4a7(0x1e8,'yOE0')](()=>{const _0x2424f1=_0x3ef4a7;$[_0x2424f1(0x222,'0DPv')]();});async function _0x3891f7(){const _0x3fc816=_0x3ef4a7,_0x587732={'UWsFv':function(_0x18cff2,_0x48d791){return _0x18cff2<_0x48d791;},'MtDgB':function(_0x2535af,_0x2223c3){return _0x2535af+_0x2223c3;},'DssVY':function(_0x15d4dc,_0x5a0b61){return _0x15d4dc==_0x5a0b61;},'Vvoxe':function(_0x2fcc07,_0xacc22f){return _0x2fcc07===_0xacc22f;},'EplJL':_0x3fc816(0x1f1,'0DPv')};for(let _0xdebd26=0x0;_0x587732[_0x3fc816(0x1fd,']uZZ')](_0xdebd26,_0x53f6c6[_0x3fc816(0x13c,'qrpo')]);_0xdebd26++){console[_0x3fc816(0x172,'lcg^')](_0x3fc816(0x20b,'sP6T')+_0x587732[_0x3fc816(0x137,'e$jJ')](_0xdebd26,0x1)+'个店铺抽奖：'+_0x53f6c6[_0xdebd26]),$['venderId']=_0x53f6c6[_0xdebd26],await _0x760b02(),await $[_0x3fc816(0x226,'uc^6')](0x1f4),_0x587732['DssVY']($['index'],0x1)&&await _0x28fac4(),await $[_0x3fc816(0x12e,'s4sF')](0x1f4),$[_0x3fc816(0x106,'R[El')]!=0x2?await _0xf70f80():_0x587732[_0x3fc816(0x21e,'GGMd')]('vnGXC',_0x3fc816(0x1cd,'wR)D'))?console[_0x3fc816(0x195,'6gMo')](_0x587732[_0x3fc816(0x188,'B(JF')]):_0x17c034[_0x3fc816(0x143,'@]a(')]('','❌\x20'+_0x5dd151[_0x3fc816(0x182,'^z0R')]+_0x3fc816(0x1f7,'R9(k')+_0x3ce1e1+'!','');}}async function _0x760b02(){const _0xa21ce9=_0x3ef4a7,_0x179d98={'UQtgJ':function(_0x3b9db4,_0x113190){return _0x3b9db4+_0x113190;},'XEnlz':function(_0x22ea63,_0x25e8f7){return _0x22ea63+_0x25e8f7;},'wyhyM':_0xa21ce9(0x13a,'7tlV'),'VCVKT':function(_0x3d4528,_0x4bbac3){return _0x3d4528!=_0x4bbac3;},'qGKTf':function(_0x47d0f8,_0x2e0844){return _0x47d0f8(_0x2e0844);},'tzHvx':function(_0x466d14){return _0x466d14();},'SdhME':_0xa21ce9(0x210,'R[El'),'jfrKS':function(_0x16f355,_0x23b9c7){return _0x16f355!==_0x23b9c7;},'cNKip':_0xa21ce9(0x230,'BP$A'),'MlaNq':_0xa21ce9(0x16e,'Q$IJ'),'wTrzI':function(_0x40fdfe){return _0x40fdfe();},'Jpssw':function(_0x5d7683,_0x5aaf85){return _0x5d7683===_0x5aaf85;},'vhDxB':_0xa21ce9(0x152,'yOE0'),'IoVsY':function(_0x114075,_0x253771,_0x3c043a){return _0x114075(_0x253771,_0x3c043a);},'vpUVf':'getSignInfo','GtTou':_0xa21ce9(0x1f3,'iao0'),'fNNGi':'api.m.jd.com','rmqaA':_0xa21ce9(0x1ae,'iao0'),'HRXQS':_0xa21ce9(0x1f5,'%Q[('),'khIQU':_0xa21ce9(0x136,'n20A'),'ijKZK':_0xa21ce9(0x192,'7tlV')};sign=await _0x179d98[_0xa21ce9(0x209,'wR)D')](_0x40e627,_0x179d98[_0xa21ce9(0x14d,'VrpK')],{'vendorId':$['venderId']});_0x27d64d?$[_0xa21ce9(0x1d7,'U4Jz')]=sign?.['data']?.['convertUrl']||'':$[_0xa21ce9(0x12f,'7tlV')]=sign?.[_0xa21ce9(0x1cc,'s4sF')]||'';if(!$[_0xa21ce9(0x1de,')OQw')]){if('eSPmi'!==_0xa21ce9(0x132,'m!bB'))console[_0xa21ce9(0x172,'lcg^')](_0x179d98[_0xa21ce9(0x235,'WmzD')]);else{let _0x302cda=new _0x3800a0(_0x179d98[_0xa21ce9(0x21b,'uwpD')](_0x179d98['XEnlz'](_0xa21ce9(0x126,'m!bB'),_0x3a11cc),_0x179d98['wyhyM'])),_0x24e649=_0x2c79d5['match'](_0x302cda);if(_0x179d98[_0xa21ce9(0xfe,'0q9[')](_0x24e649,null))return _0x179d98[_0xa21ce9(0x234,'ma@w')](_0x477d48,_0x24e649[0x2]);return'';}}let _0x2c2e65={'url':_0x40a731+'?functionId=getSignInfo','headers':{'Host':_0x179d98[_0xa21ce9(0x1e1,'%ws!')],'Content-Type':_0x179d98[_0xa21ce9(0x150,'yqGl')],'Accept':_0x179d98[_0xa21ce9(0x18b,'t6MM')],'Connection':_0x179d98[_0xa21ce9(0x165,'t5n6')],'Cookie':_0x56f896,'User-Agent':_0xa21ce9(0x17b,'yqGl'),'Accept-Language':_0xa21ce9(0x213,'ma@w'),'Accept-Encoding':_0x179d98['ijKZK']},'body':''+$[_0xa21ce9(0x1d1,'GErz')]};return new Promise(_0x31660c=>{const _0x1292a7=_0xa21ce9;_0x179d98[_0x1292a7(0x20c,']uZZ')](_0x179d98[_0x1292a7(0x135,'NulH')],_0x1292a7(0x196,'wR)D'))?_0x489631[_0x1292a7(0x12b,'yqGl')]=_0x4d9dc5?.[_0x1292a7(0x157,'0q9[')]||'':$[_0x1292a7(0x120,'m!bB')](_0x2c2e65,(_0x265e17,_0x19d022,_0x15de19)=>{const _0x1a8230=_0x1292a7,_0x1369b7={'cZzWL':function(_0xcf626a){return _0x179d98['tzHvx'](_0xcf626a);}};if('GYcuK'===_0x1a8230(0x219,'s4sF'))try{_0x265e17?$['log'](_0x265e17):(_0x15de19=JSON[_0x1a8230(0x19f,'yOE0')](_0x15de19),typeof _0x15de19==_0x179d98[_0x1a8230(0x1ff,'DoOh')]?_0x15de19[_0x1a8230(0x113,'^z0R')]==0x0&&(_0x179d98[_0x1a8230(0x220,'DoOh')](_0x179d98['cNKip'],_0x1a8230(0x1d6,'EFed'))?_0x17ef56['signStr']=_0x4c2011?.[_0x1a8230(0x130,'DABh')]?.[_0x1a8230(0x228,'GGMd')]||'':$['isSign']=_0x15de19['result'][_0x1a8230(0x236,'sP6T')][_0x1a8230(0x1fa,'%Q[(')]):console['log'](_0x179d98[_0x1a8230(0x15e,'iao0')]));}catch(_0x5a79d4){$[_0x1a8230(0x1ce,'B(JF')](_0x5a79d4);}finally{_0x179d98[_0x1a8230(0x131,'2qj5')](_0x31660c);}else _0x1369b7[_0x1a8230(0x1aa,'NulH')](_0x4ee778);});});}async function _0x28fac4(){const _0x4063a3=_0x3ef4a7,_0x5005dd={'tGFDk':_0x4063a3(0x225,'t6MM'),'puxqa':function(_0x5d4844,_0x3f1766){return _0x5d4844==_0x3f1766;},'RRPWs':_0x4063a3(0x21f,'0q9['),'lYTsD':function(_0x98faf,_0x390f82){return _0x98faf+_0x390f82;},'JiveF':_0x4063a3(0x148,'R[El'),'InVxi':_0x4063a3(0x109,'U4Jz'),'mNCOM':_0x4063a3(0x156,'sP6T'),'wFJEi':function(_0x187d35,_0x30c233){return _0x187d35+_0x30c233;},'nychd':function(_0x2bf79b,_0x3c90af,_0x2175f1){return _0x2bf79b(_0x3c90af,_0x2175f1);},'QjDZK':_0x4063a3(0x163,'m!bB'),'NtgrF':function(_0x14fb8e,_0x3fb670){return _0x14fb8e!==_0x3fb670;},'kAZiL':'WbxxD','RMhwa':'KfIVm','NxIjV':_0x4063a3(0x1df,'%ws!'),'UtUoj':_0x4063a3(0x16d,'NulH'),'xNXBE':_0x4063a3(0x155,'VrpK'),'OfcHL':_0x4063a3(0x19e,'R9(k'),'hWVIt':'JD4iPhone/167650\x20(iPhone;\x20iOS\x2013.7;\x20Scale/3.00)','BzBRa':'zh-Hans-CN;q=1','GzxZX':_0x4063a3(0x139,'DoOh')};sign=await _0x5005dd[_0x4063a3(0x166,'VrpK')](_0x40e627,_0x5005dd[_0x4063a3(0x1a6,'WmzD')],{'vendorId':$[_0x4063a3(0x1ac,'0DPv')]});_0x27d64d?$['signStr']=sign?.[_0x4063a3(0x117,'0DPv')]?.[_0x4063a3(0x103,'sP6T')]||'':_0x5005dd[_0x4063a3(0x211,'w[Y7')](_0x5005dd[_0x4063a3(0x19d,'t5n6')],_0x5005dd[_0x4063a3(0x19d,'t5n6')])?_0x40e357[_0x4063a3(0x160,'Q$IJ')](_0x5005dd[_0x4063a3(0x1af,'yqGl')]):$[_0x4063a3(0x122,'#NLq')]=sign?.[_0x4063a3(0x237,'lcg^')]||'';!$['signStr']&&(_0x5005dd['RMhwa']!==_0x5005dd['NxIjV']?console[_0x4063a3(0x1a0,'DABh')]('接口获取失败，跳过'):(_0x13f46=_0x2b7afb[_0x4063a3(0x231,'iao0')](_0x4900a5),_0x5005dd['puxqa'](typeof _0x569c0b,_0x5005dd['RRPWs'])?_0x5005dd[_0x4063a3(0x185,'t6MM')](_0x1f6233['code'],0x0)&&_0xab6a4a[_0x4063a3(0x119,'EFed')](_0x5005dd['lYTsD'](_0x5005dd[_0x4063a3(0x14f,'n20A')],_0x547e73[_0x4063a3(0x229,'uc^6')][_0x4063a3(0x11f,'DoOh')])+'\x0a'):_0xf9b90d[_0x4063a3(0x191,'GGMd')](_0x5005dd[_0x4063a3(0x102,'R[El')])));let _0x23a1d5={'url':_0x40a731+'?functionId=signActivityRule','headers':{'Host':_0x5005dd['UtUoj'],'Content-Type':_0x4063a3(0x112,'GErz'),'Accept':_0x5005dd[_0x4063a3(0x19c,'B(JF')],'Connection':_0x5005dd['OfcHL'],'Cookie':_0x56f896,'User-Agent':_0x5005dd[_0x4063a3(0x206,'NulH')],'Accept-Language':_0x5005dd[_0x4063a3(0x1ca,'uc^6')],'Accept-Encoding':_0x5005dd[_0x4063a3(0x15f,'wR)D')]},'body':''+$[_0x4063a3(0x1b6,'Q$IJ')]};return new Promise(_0x316155=>{const _0x44c9e0=_0x4063a3,_0x59c13a={'CHARY':function(_0x4010aa,_0x1418b3){return _0x4010aa===_0x1418b3;},'KUUKo':_0x5005dd[_0x44c9e0(0x149,'yqGl')],'MRAtZ':_0x5005dd['RRPWs'],'nzCnw':function(_0x569e97,_0x29d482){const _0x153059=_0x44c9e0;return _0x5005dd[_0x153059(0x23b,'DoOh')](_0x569e97,_0x29d482);},'DHXpE':_0x5005dd['JiveF'],'VXyZH':function(_0x4e887e,_0x571e92){return _0x4e887e!==_0x571e92;},'cfkVC':'YaXSW'};$['post'](_0x23a1d5,(_0x4bff80,_0x3d7e78,_0x31eb8e)=>{const _0x160ac0=_0x44c9e0;if(_0x59c13a[_0x160ac0(0x134,'NulH')](_0x59c13a[_0x160ac0(0x21a,'%ws!')],_0x59c13a[_0x160ac0(0x1c0,'DABh')]))try{_0x4bff80?$[_0x160ac0(0x23d,'^LJa')](_0x4bff80):(_0x31eb8e=JSON[_0x160ac0(0x1f2,']uZZ')](_0x31eb8e),typeof _0x31eb8e==_0x59c13a['MRAtZ']?_0x31eb8e[_0x160ac0(0x162,'n20A')]==0x0&&console[_0x160ac0(0x110,'R[El')](_0x59c13a[_0x160ac0(0x1b1,'DABh')](_0x59c13a['DHXpE']+_0x31eb8e[_0x160ac0(0x108,'t5n6')][_0x160ac0(0x10f,'^LJa')],'\x0a')):$[_0x160ac0(0x177,'m!bB')](_0x160ac0(0x175,'2qj5')));}catch(_0x538fa7){$['log'](_0x538fa7);}finally{if(_0x59c13a['VXyZH'](_0x59c13a[_0x160ac0(0x204,'NulH')],'YaXSW')){if(_0x2b4234[_0x160ac0(0x1b9,'GErz')]['jd_shopDraw_venderId'][_0x160ac0(0x1bc,'CdlX')]('|'))_0x10e5be=[..._0x2cb291[_0x160ac0(0x1c4,'2qj5')]['jd_shopDraw_venderId']['split']('|'),..._0x32e131];else _0x649f87[_0x160ac0(0x116,'qrpo')][_0x160ac0(0x1d4,'4wGv')]['includes']('@')?_0x2e1ae0=[..._0x5de213[_0x160ac0(0x158,'%ws!')]['jd_shopDraw_venderId']['split']('@'),..._0x5d1c3c]:_0x14da62=[..._0x3d0297[_0x160ac0(0x125,'R9(k')]['jd_shopDraw_venderId']['split']('&'),..._0x470312];}else _0x316155();}else _0x1fd28b['log'](_0x50d820);});});}async function _0xf70f80(){const _0x26df8c=_0x3ef4a7,_0x27cd69={'sCuxR':function(_0x3f6f6a){return _0x3f6f6a();},'TjrsV':_0x26df8c(0x1a9,'t6MM'),'ZFwft':function(_0x927304,_0x3ddcf6){return _0x927304(_0x3ddcf6);},'VWImQ':_0x26df8c(0x1e9,']uZZ'),'IbwpP':'YsrWK','rdVfX':_0x26df8c(0x11c,'4wGv'),'JEXmC':_0x26df8c(0x1e4,'iao0'),'mvGEn':function(_0x2ab7f4,_0x1d574f){return _0x2ab7f4==_0x1d574f;},'ccjyX':_0x26df8c(0x19a,'Fs@q'),'lZQxw':function(_0x469eea,_0x51839c){return _0x469eea+_0x51839c;},'GvbiE':'抽奖结果：','MDgyT':'账号未登录\x0a','WQibr':function(_0x28aa7e,_0x26a267,_0x34a8e1){return _0x28aa7e(_0x26a267,_0x34a8e1);},'eDaIx':_0x26df8c(0x127,'B(JF'),'lwUjp':_0x26df8c(0x199,'wR)D'),'cRhBq':_0x26df8c(0x176,'GGMd'),'clEVE':'mRFmK','uPpgL':function(_0x2a988a,_0x5f5965){return _0x2a988a===_0x5f5965;},'sUrdZ':_0x26df8c(0x198,'Q$IJ'),'ywgvw':_0x26df8c(0x20a,'NulH'),'PufYL':'api.m.jd.com','zmjlk':'application/x-www-form-urlencoded','drRCH':'*/*','IyDLy':'keep-alive','WHETu':_0x26df8c(0x121,'7tlV'),'Tnnbs':'zh-Hans-CN;q=1','YJqYO':_0x26df8c(0x212,'^LJa')};sign=await _0x27cd69['WQibr'](_0x40e627,_0x27cd69['eDaIx'],{'vendorId':$[_0x26df8c(0x10c,'uwpD')],'sourceRpc':_0x27cd69['lwUjp']});if(_0x27d64d)_0x26df8c(0x1c6,'NulH')===_0x27cd69['cRhBq']?$['signStr']=sign?.['data']?.[_0x26df8c(0x238,'0q9[')]||'':_0x27cd69[_0x26df8c(0x140,'0DPv')](_0xf84b4b);else{if(_0x27cd69[_0x26df8c(0x1d8,'7tlV')]===_0x26df8c(0x223,'yOE0'))$[_0x26df8c(0x16c,'R[El')]=sign?.['body']||'';else{_0x4ffa4a[_0x26df8c(0x107,'iao0')](_0x27cd69[_0x26df8c(0x173,'CdlX')]);return;}}!$[_0x26df8c(0x115,'sP6T')]&&(_0x27cd69[_0x26df8c(0x1d3,'4wGv')](_0x27cd69[_0x26df8c(0x20f,'B(JF')],_0x27cd69['sUrdZ'])?console[_0x26df8c(0x1fb,'7tlV')](_0x27cd69['ywgvw']):_0x375f35=[..._0x449fba[_0x26df8c(0x142,'gna!')][_0x26df8c(0x16b,'DoOh')]['split']('&'),..._0x6f68ad]);let _0x6dc66d={'url':_0x40a731+_0x26df8c(0x232,']uZZ'),'headers':{'Host':_0x27cd69['PufYL'],'Content-Type':_0x27cd69[_0x26df8c(0x18c,'Q$IJ')],'Accept':_0x27cd69[_0x26df8c(0x11e,'EFed')],'Connection':_0x27cd69[_0x26df8c(0x10e,'Q$IJ')],'Cookie':_0x56f896,'User-Agent':_0x27cd69['WHETu'],'Accept-Language':_0x27cd69[_0x26df8c(0x221,'n20A')],'Accept-Encoding':_0x27cd69['YJqYO']},'body':''+$[_0x26df8c(0x1de,')OQw')]};return new Promise(_0x4a0e9d=>{const _0x58a13d=_0x26df8c,_0x4c567f={'yTsIo':function(_0x47ffdd,_0x12fe13){const _0x4d5f09=_0x2fcd;return _0x27cd69[_0x4d5f09(0x133,'A%FC')](_0x47ffdd,_0x12fe13);},'qwJCL':_0x27cd69['VWImQ'],'TAQLE':function(_0x3da0a0,_0x383ca2){return _0x3da0a0===_0x383ca2;},'qzQsL':function(_0x488827,_0x1f5ecd){return _0x488827!==_0x1f5ecd;},'eLMbp':_0x27cd69[_0x58a13d(0x15c,'NulH')],'fdYDZ':_0x27cd69[_0x58a13d(0x224,'GGMd')],'kUZRH':_0x27cd69[_0x58a13d(0x181,'%Q[(')],'LKqzr':function(_0x482f4e,_0x41dd94){const _0x462fb2=_0x58a13d;return _0x27cd69[_0x462fb2(0x159,'R[El')](_0x482f4e,_0x41dd94);},'ljlXR':_0x27cd69[_0x58a13d(0x1e6,'VrpK')],'JsvfO':'yRnOF','AFUIv':function(_0x58bc2e,_0x325e54){const _0x541bb7=_0x58a13d;return _0x27cd69[_0x541bb7(0x1c2,'s4sF')](_0x58bc2e,_0x325e54);},'BPmWR':_0x27cd69[_0x58a13d(0x114,'uwpD')],'TDmDR':_0x58a13d(0x186,'ma@w'),'IkkvS':_0x27cd69[_0x58a13d(0x111,'A%FC')],'VNbgD':'wjXoA','qojob':_0x58a13d(0x17d,'t6MM'),'IsFlu':function(_0x485743){return _0x485743();}};$[_0x58a13d(0x179,'n20A')](_0x6dc66d,(_0x1e7457,_0x6e4414,_0x1394a4)=>{const _0x2e0285=_0x58a13d;try{if(_0x4c567f['qzQsL'](_0x4c567f[_0x2e0285(0x15b,'GGMd')],_0x2e0285(0x170,'A%FC'))){if(_0x1e7457)$[_0x2e0285(0x1e2,'n20A')](_0x1e7457);else{if(_0x4c567f['TAQLE'](_0x4c567f[_0x2e0285(0x207,'uc^6')],_0x4c567f[_0x2e0285(0x18a,'DoOh')]))_0x90d4c1['done']();else{_0x1394a4=JSON[_0x2e0285(0x233,'%Q[(')](_0x1394a4);if(_0x4c567f[_0x2e0285(0x1da,'yOE0')](typeof _0x1394a4,'object'))_0x4c567f[_0x2e0285(0x14b,'uc^6')](_0x4c567f['ljlXR'],_0x4c567f[_0x2e0285(0x1be,']uZZ')])?_0x2d88d4=[_0x2ae46d['getdata'](_0x2e0285(0x1a3,'s4sF')),_0x1bdbfe[_0x2e0285(0x14c,'CdlX')]('CookieJD2'),..._0x4c567f[_0x2e0285(0x1db,'w[Y7')](_0x513093,_0x111d01[_0x2e0285(0x1fc,'A%FC')](_0x4c567f['qwJCL'])||'[]')[_0x2e0285(0x17a,'0DPv')](_0x1223c1=>_0x1223c1[_0x2e0285(0xff,'yqGl')])][_0x2e0285(0x1dc,'Fs@q')](_0xfbb277=>!!_0xfbb277):_0x4c567f['LKqzr'](_0x1394a4[_0x2e0285(0x1e0,'CdlX')],0x0)?_0x1394a4['result'][_0x2e0285(0x23e,'^z0R')]?($[_0x2e0285(0x214,'yqGl')]=_0x1394a4[_0x2e0285(0x154,'#NLq')][_0x2e0285(0x129,'e$jJ')][_0x2e0285(0x118,'t5n6')]||'',console[_0x2e0285(0x22a,'2qj5')](_0x4c567f[_0x2e0285(0x1c5,'^z0R')](_0x4c567f['BPmWR'],$[_0x2e0285(0x13d,'GErz')])+_0x4c567f[_0x2e0285(0x227,'BP$A')])):console[_0x2e0285(0x1fe,'VrpK')](_0x2e0285(0x147,'uwpD')):console[_0x2e0285(0x183,'U4Jz')](_0x4c567f['IkkvS']);else{if(_0x4c567f['qzQsL'](_0x4c567f[_0x2e0285(0x13b,'0DPv')],_0x4c567f[_0x2e0285(0x128,'@]a(')]))console[_0x2e0285(0x101,'0DPv')](_0x2e0285(0x1d5,'t6MM'));else{_0x486965[_0x2e0285(0x18f,'gKfr')](_0x1c76f3)[_0x2e0285(0x13e,'gna!')](_0xa0f80b=>{const _0x5d2a06=_0x2e0285;_0x57940a[_0x5d2a06(0x169,'w[Y7')](_0x5446af[_0xa0f80b]);});if(_0x296e40['env'][_0x2e0285(0x1ad,'0DPv')]&&_0x4c567f[_0x2e0285(0x21d,'wR)D')](_0x447b4d['env']['JD_DEBUG'],_0x2e0285(0x1b3,')OQw')))_0x7b3f82[_0x2e0285(0x1ce,'B(JF')]=()=>{};}}}}}else _0x43c7d6['log'](_0x68ba97);}catch(_0x1c7393){$[_0x2e0285(0x1ab,'yqGl')](_0x1c7393);}finally{_0x4c567f[_0x2e0285(0x105,'%Q[(')](_0x4a0e9d);}});});}function _0x305f6d(_0x324481){const _0x63f0c6=_0x3ef4a7,_0xf25a14={'qvaoB':function(_0x88a2bd,_0x53d939){return _0x88a2bd==_0x53d939;},'LQRAy':'string'};if(_0xf25a14[_0x63f0c6(0x15a,'wR)D')](typeof _0x324481,_0xf25a14[_0x63f0c6(0x22c,'Q$IJ')]))try{return JSON[_0x63f0c6(0x1b4,'^LJa')](_0x324481);}catch(_0x23d105){return console[_0x63f0c6(0x110,'R[El')](_0x23d105),$['msg']($[_0x63f0c6(0x18d,'uc^6')],'','请勿随意在BoxJs输入框修改内容\x0a建议通过脚本去获取cookie'),[];}}function _0x21e61a(_0x33a50d,_0x1c585d){const _0x314f67=_0x3ef4a7,_0x3698c0={'LlddM':'接口获取失败，跳过','DaVEx':function(_0x172346,_0x39835a){return _0x172346+_0x39835a;},'BeFFA':'=([^&]*)(&|$)','drtnI':function(_0x1ebfda,_0x32f281){return _0x1ebfda!=_0x32f281;},'pEpnw':function(_0x37671d,_0x18c2a3){return _0x37671d!==_0x18c2a3;},'kZFry':_0x314f67(0x1e7,')OQw'),'lKkDg':'UYrYD','mtmRI':function(_0x4834f1,_0x247f2d){return _0x4834f1(_0x247f2d);}};let _0x4d3bd6=new RegExp(_0x3698c0[_0x314f67(0x12a,'w[Y7')]('(^|[&?])'+_0x1c585d,_0x3698c0['BeFFA'])),_0x127065=_0x33a50d[_0x314f67(0x14e,']uZZ')](_0x4d3bd6);if(_0x3698c0[_0x314f67(0x123,'iao0')](_0x127065,null)){if(_0x3698c0[_0x314f67(0x22f,'Fs@q')](_0x3698c0['kZFry'],_0x3698c0[_0x314f67(0x10b,'iao0')]))return _0x3698c0[_0x314f67(0x1b2,'DABh')](unescape,_0x127065[0x2]);else _0x12419a[_0x314f67(0x16a,'t6MM')](_0x3698c0[_0x314f67(0x1b5,'ma@w')]);}return'';}var version_ = 'jsjiami.com.v7';
// prettier-ignore
function Env(t,e){"undefined"!=typeof process&&JSON.stringify(process.env).indexOf("GITHUB")>-1&&process.exit(0);class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`🔔${this.name}, 开始!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),n={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(n,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)})):this.isQuanX()?(this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t))):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();s&&this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)}))}post(t,e=(()=>{})){if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.post(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method="POST",this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){this.initGotEnv(t);const{url:s,...i}=t;this.got.post(s,i).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)})}}time(t,e=null){const s=e?new Date(e):new Date;let i={"M+":s.getMonth()+1,"d+":s.getDate(),"H+":s.getHours(),"m+":s.getMinutes(),"s+":s.getSeconds(),"q+":Math.floor((s.getMonth()+3)/3),S:s.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(s.getFullYear()+"").substr(4-RegExp.$1.length)));for(let e in i)new RegExp("("+e+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?i[e]:("00"+i[e]).substr((""+i[e]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};if(this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r))),!this.isMuteLog){let t=["","==============📣系统通知📣=============="];t.push(e),s&&t.push(s),i&&t.push(i),console.log(t.join("\n")),this.logs=this.logs.concat(t)}}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`❗️${this.name}, 错误!`,t.stack):this.log("",`❗️${this.name}, 错误!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`🔔${this.name}, 结束! 🕛 ${s} 秒`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}