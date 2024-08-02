/*
取关（收藏的）店铺和商品
环境变量：JD_UNFOLLOW_PIN_FILTER_GOODS // 不取关商品收藏的账号（填入pin，多个用@分割）
          JD_UNFOLLOW_PIN_FILTER_SHOP // 不取关店铺关注的账号（填入pin，多个用@分割）

cron:15 0-23/12 * * *
============Quantumultx===============
[task_local]
#取关（收藏的）店铺和商品
15 0-23/12 * * * jd_unfollow.js, tag=取关（收藏的）店铺和商品, enabled=true

注：系统可能会存在无法被正常取关的异常商品或异常店铺

*/

const $ = new Env('取关店铺关注和商品')
const _0x3e30e2=_0x31c1;function _0x53a7(){const _0x2be173=['xCkMWQ7cSwz+W4NcOSkbsvm','WQVcQrlcOhNdMCk5','6lsX5y+a5PED5PwY','CSouW6HzWR5FaG','W7/cLLxdHCosyW','ueddK8ogW6JcHW','WO/dTwK','kfbe','W6OAWQGNobZdLYWQWPm','WPtdKc00W6tcRuS','WQVcJxBdQSoEWOtdSaOj','WRLfW5jCWPLr','dmo/oSktW6tcLSoJWRac','W7FcPCo4W4ypg2Wg','WP9XW6RcHxJdSG','W7DBzG','CmkTW5K','WOWSdCoFW67dJ8oJ','WP8duIrAAa','zX3cShb1','WQmErdnMFsDi','WQBcUmkivZZdL0pLV4dLPiVJGyZKUOdKUB3OTzhLJR8','CWJcQf9UfZ1MB8obFSoUWRK','5Rk95P+l5PAi6jwb55Iq5zwf5zka','W7yWbCoUWRCCWRVdLHW','mrldJmocWOjIWQuK','BSk8W4ntlSoFmdxdLSoBW75EWRm/W6pdTG','WQiHFmo5W7FcGW','rL5kWQRdN8oWCmkfyKvzW7yvWOVcSmooW6z2WR9+u8kQ','WQfiW5r1','WQrBnW','WOPHW7dcJhFdOHfQxfT8W4ZcJtyqBfFdRa0','xvZdHW','nSoOWPtcPmk+kuS','zSk2W4G','WQBdSmoOW5mfeeO+zCoqiCkIWRe','WQacjmovpmozjSkWec87FG','DCoEW7je','WQCGAa','W6GCW6WcnutcHq','pXxcLCoGWQaaWQOHWRbVW7OgoeGtuSkuD8kouxdcJIiFcwlcRSopW67dSM/dJZqVWPFdJqBdHwCZEmoGlmowpW/dKq','q0LeW7THWOmX','A8kPW595kmoqps7dImoKW6iEWQ9NW7FdTrH0W4nQWQFcJ8o2BSoIwanDWRjEl8k/W6q','W5LOWP0bBaPEza3dSrCRW7JcUwxdGG','5y2v5ywi5BQ66zkY5ysW5RkO5OQR5yQl','i3vJqCk+DGVcOgZcN8kukSk3','lsavW6ldLW','uerxWPFdS8o2','W4tdOSkrBgTlW55EW6JcSa','4P2xz+AETUIUKUw4N+MsTowfI+AWNowiLUIIS+wNI+I1PSo5cSkzaW','AmoJgSodWRJdTXW','WOfHWQW','W7DhySkUECkk','WQBcPmkbomoNhG','WQyICHu','s8kNWRpcSNTA','W7qXeSo1WQa9WR3dNaNcSSkrtvXWps3dR8kL','W5tcJNiVW4/cSxi6W6a','Dt8hDmoaxMu','5Bwp5yw+5Rcz','rvZdLmooW6pcPZNcOa','D0tcJ8kvW5KDW6CSW6r2WRfNvq','jmkUleNdG8o2W7i','5BA16k+o57YD5B2D5yUF6lsl5y+k5lM75y6g5ysv5zw+5zcv5Pwg6jAT','WOVdLYu','WQXhW5nXWO56','WP5SW6VcT0xdVHTPzhn/W4G','qKnq','CKFdNxBcQxNcQ8kd','WQDfW41oWOHkbG','D8o5hG','kX8u','W6TEtcWMmSoi','W5pdUmkyCN16W6jAW6VcR8odrCk8W5lcQKtcQMG','WQLgW4C','WQdcPrK','5lQj5zEn5zkj','WQbdF8kJr8kEkL8','q8kTWQtcPW','5y6r5ysd5zs15zop5PAK6jEI5Asm6lwt','DIiGa8oPkv0','W47dQmktz3bu','5Rgu5PY55ywP5Rc555Qn5BMO6zk9','WPHuECo/W6LyW4ac','ECoyW7DEWRPk','WOjylW','EvzqxW','e8kYjLFdQmo2W7hcQq','F0njsGNdIXf+W7ldSmkFW4r+W4pdPq9JzuBcG8kMtSkxpCkXp0BdKSouW4ddPLi3WOS','E8ouW7DSWRbuc8o+dSkUWQLhWPFcLSoRta','WQ/dKGddJ8oeFGlcNZK','5BsZ5PAJ6jwt','Ac88amobkKS','uSkMxCo+','FmoEW7zhWPzC','4P65eoAFV+ISS+wvJ+wqVUweToAZKUwlVEIGMUwKJEI2OMbVW77dNW','CrxcTw0','WPLFFq','WQfAnmkesq','renaWQJdUCoxB8kzuuDxW4KlWOJcU8omW7zD','WQ3cPmkBgCo8gSoqWQFcP3/cU8oUbW','A8kJW5FdUG','W44g5yYC5ysu5zs55zkc5PEZ6js65AsW6lw5W6ZdQmoddG','5lMj5y+P5ywq5BUX6zkC5yEV5Rkw6lAX5y2XW4ZcHtW','WQy8Aa','W7dcI1C','5Rkq5P+k5ywh5Rg655Mv5BIG6zcP','W58Fma','zSoRkSkKW7hcVSkf','5lMY5y2D5ys75zA85zgl5PEh6jwf6lEW5y6mDaSK','WOfRW6m','k8kGmW','WQnewcRcGKZdPSkbWQzJvmoSAW','iIqpW6BdI2u','uLnrWPZdR8o9BmkAsNTiW7yj','FsG/hmoNowJcHM7cV8kpimkTE8ooufW','WRhdOCodW6udeG','4P6kW6ZMNyVNNlBOR6/MS7ZdVa','DclcJ8krWRe','WQBcRSki','CCkXW5BdOCoKlJldNM7dNJ4','jampceRdHaDHW5BdLmkxWQ5hWQK','WQOLBSoK','AmoIc8ojWRpdOWBcPNC','WPnjWQ4c','WP1oAmoSW7XqW5OdW5FdUCktWRjotCoUjeqn','eSoQxSo2pYhcKqlcTJpcOcxdT8kpW6JcPCoZeCkKWRCHFei2Cd91','WOjPWR8GksZdJmod','WQNcRSkDla','WPHVWQGQcWpdLmol','W5fIWPy','5BEo5yA25Rod','xfBdK8oCW67cJIK','W6fDF8kuwCkflSkukaqPFa','WRzexXNcGvq','5REU5yQi5yEz5y+y77+3EclcNmkF5OQg55I1WPtLU5FPKkBLHkhMS7GQ5zAK5zgi5Pwm6jE/','xCkMwSo1WQxdNW','zmoCsSoxWROMtZtdHmoSWRq','q1xdJgu','vLLbWR8','5y6X5yYp5yEC','W4FORy/MSidLPBxOTOJdQEkEPe4','WQRcOWy','W7ddVaxcGh3dMCkwW5W','CCkNW43dVCo1zcq','ECkWW4ZdOCoM','5lIB5BQK6zgA','WOddNtyiW4lcRLeaW6xdHa/dI1ir','WRrqW4XxWOrAe8k4W5VdUmoFWPyQWQ89FG','WOa7p00Qma','WOnZWP8btwC','dNT8mYJdMJhdM8okWRNdSJJdPH46W5uExL4+W7RdVMCOW5LRWQBcHG','WRLpW5S','wfnwWQNdOCo2zq','W7HAECkn','DfHqvZpcLq','8y25QSop','WQWv5y+g5yAq5BQD6zcx5ysY5Rcm5Awv6lwiEJxcVMa','WOvUWR8NeINdHmov','WOhdLY4OW4lcVMGCW5NdLbVdNfmUzXSb','WPLiWQ4cbW','WQXvwbZcNHRcPCobWQjyu8oZnCojW7WtESkQW7ijmCos','fCoSjq','B8kQW5hdUCohAY7dG0pdHtLz','x1f6WQNdQmo+Ca','WOddNtymWPJcUKW','WQngW4X4WPn5z8oToN3cOWZcSvKlD8o/','WO7dLIeOW5JcRv0D','W6WqWOukW5GjomkLW4hdNmo8W5m','WRBdTmo1W6e','44of5O+W56Ag44cQ6kYA5ywX6i+f5yYAW7hdUmoEW5iPWRK','x8kIwCo3','WQbajmkrqSoCjMitWRCPWPfFeLyCWQLKCGtcNSotWPBcIhxdTvJdMSovwSoiW7VdKf4','WOHgW5P9WPbIvSkWydFdPK/dRxWYzCoVWPmEW7tcUmo6W5v0tSofW7dcLCoxv8o2W6H1W5hcQJRdKSonWPxcVvmyWR9mptVdJNX2jmoLjq4ZW5tcOCoDW4DRW4tdNSoczSoBFLBcJ8ofW5L5w8oVlSk3W6zDWRWmW41iW4DgxmoSexJdOJfXyGBcSHpdMhv9W7xcLJu6w8kdW7e7WPTXDcFcSXJdGSoxfSooCxzMW7yRW7lcLmosgCoVWQe9WQ/cHmoPhSkLCw/cR1HkW5ddNmoukW5yW5NcLmo+sYiTs8oWuZ3dN8ovmvaEFIS9pIDPW4ldNKhdS8k3WQvUW57cHmkFWRtdMmkkfKVdSmojACoaW4KHWOVdV8k9DmkRy8oXlmo7jba','5y6W5y2y5ysQ','WOTRW6JcRhNdOsrRr355W5/cRX8lBeO','ECkXW4bIeSoBmYRdRCoIW79f','WOldUSoYW6epeLj8rSo6oCkO','mCkGkLe','aCoYbSkHW6xcGSoLW4fmW6i','WQ/cMg3dTW','sLhdI3FcHN/cOW','WOVdLYubW5/cUW','W7lcHv3dGq','W6VdL8o2','4PYih+ACIEIcM+ASHEEJSUwLUUEsKCkM','W7eRa8oMWRu1WQFdNq','ESkTW5ldOSo7DbhdGwddId9oWRVcQCkKWPFcHa','WPzjWQyledtcLCkhBJJcUCk2WOLIvZhdKq','FMnKW5W','sSocW75yWPfzcSo0','WRZcLMRdPG','ECkTW518l8ountZdMa','WQ1ptWdcMetdR8kD','5lUk5zAd5zoQ','W53cUUwpMoweNUw4GUMrVUwgGEAXTUAiPowkSG','AmoHnmk6W5NcVq','C8oEW7W','WOVdRNODW6BcVSoDWRfhrCoAuCo2kmoDv2ist3ir','W5rJWPiRDGjxEa','WR7cLMJdR8oFWPtdIGqFCG','ja/dNCoc','FIOJbmoX','W4/dVCogga','WO0SemolW7VdGa','5lI95BQG6zoh','zCoarq','W5VdUSkx','4P2fWO/OHlJMNPtOVjROOyFPGBVLIANKUkpPLOFORk/cJq','5yYO6yEP54M85OgM57QS5PYCW7JdIdXHW7hdQmoaeWn/','c8oKpmkBW6BcV8o/WRS','gmoUpmk3W6/cGSo5WRCCkW','W7SpW4LpWOrvaCoJW6ddSSotW5WSWQ8nwa','WP7cQ8kvsYhdJf7cPCkVnfOWna','W77dR8oy','W4hcUCopmgu','WRGNymoSW5RcMSo+W4iWtYNcVrK','WOiMe8obW4BdJa','W6qvWOuiW5ulqmkLW5tdKSoFW70h','jNPUtCk1CWxdItZdPG','W6qgW7uPeee','wvLc','ja7dI8okWOLc','WQ3cPmkBhmo8gCoxWQhcTxRcSSoTaH0','WP9pF8o3W6TXW5WjW4i','E8kNW5ddNmo1BsxdNgldVZ5FWQBcI8kQ','E19sW7PoWOu5vq','DCkSW43dQ8oMDW','WPLTWOansW','W4ehkCoPo8ohhw/cNZXWW4G','fqpcJdldKsZcOCkYW4BdICkNWOG','xKBdLmoPW6pcIcS','5BA06k2/57YT5B225yUR6lAX5y2R5lUb5y6m5yA45BUA6zge5yAr5RkI','qSkNWRtcUG','WRjiW4LG','zmk2W5G','5RcM5P2G5yER5RkS55UD5BQY6zcy','w1ZdICob','W5mgcSowW53dM8oE','BCoHnCk7W7/cRSkWWPtdOmktfvNcGCkwkmoHWQS','W6ihW64'];_0x53a7=function(){return _0x2be173;};return _0x53a7();}(function(_0x299280,_0x1c81c1){const _0x5bb286=_0x31c1,_0x357c50=_0x299280();while(!![]){try{const _0x1180a2=parseInt(_0x5bb286(0x1e5,'et1Y'))/0x1+parseInt(_0x5bb286(0x177,'uAu&'))/0x2*(-parseInt(_0x5bb286(0x17a,'MRGf'))/0x3)+parseInt(_0x5bb286(0x131,'4pdX'))/0x4*(parseInt(_0x5bb286(0x1cc,'STGi'))/0x5)+parseInt(_0x5bb286(0x217,'et1Y'))/0x6+parseInt(_0x5bb286(0x16a,'eFB9'))/0x7+parseInt(_0x5bb286(0x132,'!q5^'))/0x8*(parseInt(_0x5bb286(0x197,'LwVd'))/0x9)+-parseInt(_0x5bb286(0x1b6,'AZ*F'))/0xa;if(_0x1180a2===_0x1c81c1)break;else _0x357c50['push'](_0x357c50['shift']());}catch(_0x53e6da){_0x357c50['push'](_0x357c50['shift']());}}}(_0x53a7,0xb17b2));const jdCookie=require('./jdCookie'),notify=require(_0x3e30e2(0x1bb,'og6k')),common=require('./utils/Rebels_jdCommon'),{H5st}=require(_0x3e30e2(0x211,'et1Y')),pinFilterGoods=(process[_0x3e30e2(0x13c,'([*s')][_0x3e30e2(0x1d4,'&syQ')]||'')[_0x3e30e2(0x150,'7q$H')]('@'),pinFilterShop=(process[_0x3e30e2(0x14c,'j)8n')]['JD_UNFOLLOW_PIN_FILTER_SHOP']||'')[_0x3e30e2(0x130,'$h%h')]('@'),isNotify=![];let cookie='';const cookiesArr=Object[_0x3e30e2(0x18b,'!&qC')](jdCookie)['map'](_0xe9296c=>jdCookie[_0xe9296c])['filter'](_0x3d0a3d=>_0x3d0a3d);function _0x31c1(_0x3ad405,_0x1583b0){const _0x53a7a6=_0x53a7();return _0x31c1=function(_0x31c183,_0x2f78df){_0x31c183=_0x31c183-0x129;let _0x9f7476=_0x53a7a6[_0x31c183];if(_0x31c1['xKUzEr']===undefined){var _0x1aa385=function(_0x3d0a3d){const _0x5a0c77='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x2c816a='',_0x4ad66b='';for(let _0xde9e1b=0x0,_0x1b2741,_0x2ebfc0,_0x590b80=0x0;_0x2ebfc0=_0x3d0a3d['charAt'](_0x590b80++);~_0x2ebfc0&&(_0x1b2741=_0xde9e1b%0x4?_0x1b2741*0x40+_0x2ebfc0:_0x2ebfc0,_0xde9e1b++%0x4)?_0x2c816a+=String['fromCharCode'](0xff&_0x1b2741>>(-0x2*_0xde9e1b&0x6)):0x0){_0x2ebfc0=_0x5a0c77['indexOf'](_0x2ebfc0);}for(let _0xb48c2b=0x0,_0x256c63=_0x2c816a['length'];_0xb48c2b<_0x256c63;_0xb48c2b++){_0x4ad66b+='%'+('00'+_0x2c816a['charCodeAt'](_0xb48c2b)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x4ad66b);};const _0xe9296c=function(_0x4953b6,_0x137e82){let _0x549389=[],_0x25ca91=0x0,_0x3f235e,_0x5b4333='';_0x4953b6=_0x1aa385(_0x4953b6);let _0x393929;for(_0x393929=0x0;_0x393929<0x100;_0x393929++){_0x549389[_0x393929]=_0x393929;}for(_0x393929=0x0;_0x393929<0x100;_0x393929++){_0x25ca91=(_0x25ca91+_0x549389[_0x393929]+_0x137e82['charCodeAt'](_0x393929%_0x137e82['length']))%0x100,_0x3f235e=_0x549389[_0x393929],_0x549389[_0x393929]=_0x549389[_0x25ca91],_0x549389[_0x25ca91]=_0x3f235e;}_0x393929=0x0,_0x25ca91=0x0;for(let _0x545ae0=0x0;_0x545ae0<_0x4953b6['length'];_0x545ae0++){_0x393929=(_0x393929+0x1)%0x100,_0x25ca91=(_0x25ca91+_0x549389[_0x393929])%0x100,_0x3f235e=_0x549389[_0x393929],_0x549389[_0x393929]=_0x549389[_0x25ca91],_0x549389[_0x25ca91]=_0x3f235e,_0x5b4333+=String['fromCharCode'](_0x4953b6['charCodeAt'](_0x545ae0)^_0x549389[(_0x549389[_0x393929]+_0x549389[_0x25ca91])%0x100]);}return _0x5b4333;};_0x31c1['CWQafu']=_0xe9296c,_0x3ad405=arguments,_0x31c1['xKUzEr']=!![];}const _0x61c561=_0x53a7a6[0x0],_0xaa3c54=_0x31c183+_0x61c561,_0xd94ea=_0x3ad405[_0xaa3c54];return!_0xd94ea?(_0x31c1['tFbzQH']===undefined&&(_0x31c1['tFbzQH']=!![]),_0x9f7476=_0x31c1['CWQafu'](_0x9f7476,_0x2f78df),_0x3ad405[_0xaa3c54]=_0x9f7476):_0x9f7476=_0xd94ea,_0x9f7476;},_0x31c1(_0x3ad405,_0x1583b0);}!cookiesArr[0x0]&&($[_0x3e30e2(0x1a5,'Y9Gr')]($[_0x3e30e2(0x1e8,'rTEK')],_0x3e30e2(0x1e7,'et1Y')),process[_0x3e30e2(0x19d,'7q$H')](0x1));!(async()=>{const _0x59d4a0=_0x3e30e2;console[_0x59d4a0(0x14d,'25UP')]('=========='+$[_0x59d4a0(0x1f4,'LwVd')]+'变量开启状态=========='),console[_0x59d4a0(0x1d5,'et1Y')](_0x59d4a0(0x1c4,'et1Y')),console[_0x59d4a0(0x17d,']oYL')]('代理开关:\x20['+common['getProxyStatus']()+']'),console[_0x59d4a0(0x144,'&syQ')](_0x59d4a0(0x1aa,'8&&v')+pinFilterGoods[_0x59d4a0(0x1d7,'j)8n')](',\x20')+']'),console[_0x59d4a0(0x15b,'2kNh')](_0x59d4a0(0x1a4,'&syQ')+pinFilterShop[_0x59d4a0(0x135,'!&qC')](',\x20')+']'),console[_0x59d4a0(0x1a6,'LwVd')](_0x59d4a0(0x218,'eFB9')+$[_0x59d4a0(0x1f4,'LwVd')]+_0x59d4a0(0x20e,'##5)')),notify[_0x59d4a0(0x174,'!&qC')]({'title':$[_0x59d4a0(0x193,'AZ*F')]});for(let _0x5a0c77=0x0;_0x5a0c77<cookiesArr[_0x59d4a0(0x209,'@SCy')];_0x5a0c77++){$[_0x59d4a0(0x1dd,'##5)')]=_0x5a0c77+0x1,cookie=cookiesArr[_0x5a0c77],common['setCookie'](cookie),$[_0x59d4a0(0x18a,'4pdX')]=decodeURIComponent(common[_0x59d4a0(0x12b,'A[(D')](cookie,_0x59d4a0(0x1b1,'HrGu'))),$[_0x59d4a0(0x1c1,'FQ[]')]=notify[_0x59d4a0(0x141,'LwVd')]($['index'],$[_0x59d4a0(0x18a,'4pdX')]),$[_0x59d4a0(0x206,'MRGf')]=_0x59d4a0(0x1b3,'MRGf')+common[_0x59d4a0(0x12d,'25UP')](0x4,_0x59d4a0(0x1f0,'rTEK'))+'_0',$['nickName']='',console[_0x59d4a0(0x1cb,'STGi')](_0x59d4a0(0x152,'fv@m')+$[_0x59d4a0(0x19f,'2kNh')]+'】'+($[_0x59d4a0(0x1bc,'8on5')]||$[_0x59d4a0(0x181,'!q5^')])+_0x59d4a0(0x15e,'25UP')),await Main(),common[_0x59d4a0(0x13d,'!&qC')]();if($[_0x59d4a0(0x1d2,'PN8Z')])break;await $[_0x59d4a0(0x1e6,'HrGu')](0x7d0);}isNotify&&notify[_0x59d4a0(0x210,'8&&v')]()&&await notify['push']();})()[_0x3e30e2(0x16b,'rxik')](_0x2c816a=>$[_0x3e30e2(0x1f3,']oYL')](_0x2c816a))['finally'](()=>$[_0x3e30e2(0x1fc,'Kefs')]());async function Main(){const _0x11b8d6=_0x3e30e2,_0x4ad66b=await common[_0x11b8d6(0x1d0,']oYL')](cookie);if(!_0x4ad66b&&typeof _0x4ad66b===_0x11b8d6(0x17b,'aqm]')){console[_0x11b8d6(0x163,'Y9Gr')](_0x11b8d6(0x13f,'AZ*F'));return;}try{if(pinFilterGoods[_0x11b8d6(0x148,'et1Y')]>0x0&&(pinFilterGoods[_0x11b8d6(0x1e4,']oYL')]($[_0x11b8d6(0x12e,'uXG7')])||pinFilterGoods[_0x11b8d6(0x1db,'8on5')](encodeURIComponent($[_0x11b8d6(0x151,'(zWa')]))))console[_0x11b8d6(0x19e,'4pdX')](_0x11b8d6(0x17c,'uAu&'));else{$[_0x11b8d6(0x190,'^]%w')]=0x0,$[_0x11b8d6(0x1f9,'##5)')]=[],await sendRequest(_0x11b8d6(0x1a0,'@^QK'));if($['totalNum']>0x0){console[_0x11b8d6(0x202,'5z[#')]('已收藏'+$[_0x11b8d6(0x156,'MRGf')]+_0x11b8d6(0x1ff,'og6k')),$[_0x11b8d6(0x1c1,'FQ[]')][_0x11b8d6(0x158,'Y9Gr')](_0x11b8d6(0x198,'HrGu')+$[_0x11b8d6(0x1f7,'!b0D')]+'件商品');const _0xde9e1b=Math[_0x11b8d6(0x19a,'rTEK')]($[_0x11b8d6(0x1be,'8on5')]/0x1e);for(let _0x1b2741=0x0;_0x1b2741<_0xde9e1b;_0x1b2741++){await $[_0x11b8d6(0x1f1,'Kefs')](0x3e8),$[_0x11b8d6(0x1f8,'25UP')]=$[_0x11b8d6(0x1ec,'@ZQM')][_0x11b8d6(0x191,'5z[#')](_0x2ebfc0=>_0x2ebfc0?.['commTitle']&&_0x2ebfc0?.[_0x11b8d6(0x216,'@SCy')]&&_0x2ebfc0?.[_0x11b8d6(0x201,'Dnn6')]!=='0');if($[_0x11b8d6(0x1b0,'eFB9')][_0x11b8d6(0x172,'A[(D')]>0x0){const _0x590b80=$[_0x11b8d6(0x1dc,']oYL')][_0x11b8d6(0x1ac,'aqm]')](_0xb48c2b=>_0xb48c2b[_0x11b8d6(0x219,'([*s')]);console[_0x11b8d6(0x15d,'FQ[]')](_0x11b8d6(0x1eb,'Dnn6')+_0x590b80[_0x11b8d6(0x18e,'^HCL')]+_0x11b8d6(0x189,'8&&v')),$['commId']=_0x590b80[_0x11b8d6(0x162,'5z[#')](','),await sendRequest('delFollowProduct'),await $['wait'](0x7d0);}$[_0x11b8d6(0x13b,'Dnn6')]=[],$[_0x11b8d6(0x19b,'5z[#')]='',await sendRequest(_0x11b8d6(0x186,'^HCL')),await $[_0x11b8d6(0x1a2,'25UP')](0x1388);}}else console[_0x11b8d6(0x183,'Saq!')](_0x11b8d6(0x154,'25UP')),$[_0x11b8d6(0x1f2,'!q5^')]['insert']('没有收藏的商品');}console[_0x11b8d6(0x20b,'*]V6')]('');if(pinFilterShop[_0x11b8d6(0x1c5,'rTEK')]>0x0&&(pinFilterShop[_0x11b8d6(0x1fe,'oEGq')]($[_0x11b8d6(0x1fb,'5z[#')])||pinFilterShop['includes'](encodeURIComponent($[_0x11b8d6(0x194,'aqm]')]))))console[_0x11b8d6(0x19e,'4pdX')](_0x11b8d6(0x134,'aqm]'));else{$[_0x11b8d6(0x1be,'8on5')]=0x0,$[_0x11b8d6(0x1af,'@^QK')]='',await sendRequest(_0x11b8d6(0x1a1,'A[(D'));if($[_0x11b8d6(0x160,'HrGu')]){if($[_0x11b8d6(0x20f,'8&&v')]>0x0){console[_0x11b8d6(0x184,'uAu&')](_0x11b8d6(0x1c0,'og6k')+$['totalNum']+'个店铺'),$[_0x11b8d6(0x14e,'@SCy')][_0x11b8d6(0x17e,'#0QF')](_0x11b8d6(0x178,'(h$@')+$[_0x11b8d6(0x156,'MRGf')]+_0x11b8d6(0x20a,'AZ*F'));const _0x256c63=Math['ceil']($[_0x11b8d6(0x179,'FQ[]')]/0x14);for(let _0x4953b6=0x0;_0x4953b6<_0x256c63;_0x4953b6++){let {floorClosedShops:floorClosedShops=[],floorSuperMarketShops:floorSuperMarketShops=[],showShopList:showShopList=[]}=$['getFollowShop']||{};$[_0x11b8d6(0x1e0,'25UP')]=[...new Set([...floorSuperMarketShops,...showShopList,...floorClosedShops])],$['showShopList']&&$[_0x11b8d6(0x1c2,'j)8n')][_0x11b8d6(0x1ae,'rxik')]>0x0&&($[_0x11b8d6(0x146,']oYL')]=$['showShopList'][_0x11b8d6(0x170,'8on5')](_0x137e82=>_0x137e82['shopId'])[_0x11b8d6(0x139,'FQ[]')](','),console[_0x11b8d6(0x129,'@^QK')](_0x11b8d6(0x1c9,'YS2n')+$[_0x11b8d6(0x1ed,'YS2n')]['length']+_0x11b8d6(0x1cf,'FQ[]')),await $[_0x11b8d6(0x136,'#0QF')](0x7d0),await sendRequest(_0x11b8d6(0x16d,'^HCL'))),$[_0x11b8d6(0x17f,'@ZQM')]=[],await sendRequest(_0x11b8d6(0x1ad,'oEGq')),await $[_0x11b8d6(0x1ef,'aqm]')](0x1388);}}else console[_0x11b8d6(0x183,'Saq!')](_0x11b8d6(0x18f,'4pdX')),$[_0x11b8d6(0x1a9,'Dnn6')]['insert'](_0x11b8d6(0x1a7,'rTEK'));}else console[_0x11b8d6(0x1bf,'(h$@')](_0x11b8d6(0x138,'([*s'));}}catch(_0x549389){console['log'](_0x11b8d6(0x20d,'*]V6')+_0x549389);}}async function handleResponse(_0x25ca91,_0x3f235e){const _0x200fb2=_0x3e30e2;try{switch(_0x25ca91){case _0x200fb2(0x1ba,'^]%w'):_0x3f235e[_0x200fb2(0x1b9,'##5)')]==='0'?($['followProductList']=_0x3f235e[_0x200fb2(0x1e3,'#0QF')]||[],$['totalNum']=parseInt(_0x3f235e?.['totalNum']||0x0)):console[_0x200fb2(0x15b,'2kNh')](_0x200fb2(0x19c,'4pdX')+(_0x3f235e?.[_0x200fb2(0x171,'j)8n')]||JSON[_0x200fb2(0x149,'8&&v')](_0x3f235e)));break;case'delFollowProduct':_0x3f235e[_0x200fb2(0x1c8,'@^QK')]==='0'?(console[_0x200fb2(0x1ab,'@ZQM')]('>\x20取关商品收藏成功'),$[_0x200fb2(0x13e,'STGi')][_0x200fb2(0x12f,'25UP')]('取关商品收藏成功')):(console[_0x200fb2(0x15f,'YS2n')](_0x200fb2(0x1a3,'##5)')+(_0x3f235e?.[_0x200fb2(0x16c,'@^QK')]||JSON[_0x200fb2(0x155,'!b0D')](_0x3f235e))),$[_0x200fb2(0x1d6,'@^QK')]['insert'](_0x200fb2(0x18c,'uAu&')));break;case'getFollowShop':_0x3f235e[_0x200fb2(0x208,'fv@m')]==='0'?($[_0x200fb2(0x153,'7q$H')]=_0x3f235e['result']||[],$['totalNum']=parseInt(_0x3f235e[_0x200fb2(0x1c3,'oEGq')]['totalCount']||0x0)):console[_0x200fb2(0x143,'k%4t')](_0x200fb2(0x16e,'eFB9')+JSON[_0x200fb2(0x12c,'^]%w')](_0x3f235e));break;case'followShop':_0x3f235e['code']==='0'?(console['log'](_0x200fb2(0x200,'k%4t')),$[_0x200fb2(0x1cd,'25UP')][_0x200fb2(0x14f,'(zWa')](_0x200fb2(0x169,'6M*j'))):(console[_0x200fb2(0x184,'uAu&')](_0x200fb2(0x1da,'j)8n')+JSON['stringify'](_0x3f235e)),$[_0x200fb2(0x140,'5z[#')][_0x200fb2(0x1d3,'$h%h')]('取关店铺关注失败'));break;}}catch(_0x5b4333){console[_0x200fb2(0x180,'uXG7')](_0x200fb2(0x1f6,'&syQ')+_0x25ca91+'\x20请求响应\x20'+(_0x5b4333[_0x200fb2(0x166,'uXG7')]||_0x5b4333));}}async function sendRequest(_0x393929){const _0x472888=_0x3e30e2;if($[_0x472888(0x14b,'@ZQM')]||$[_0x472888(0x164,'([*s')])return;let _0x545ae0='',_0x142c6a=null,_0x42ede4=null,_0x2ce180=_0x472888(0x1f5,'fv@m'),_0x50f311={},_0x36c8c2={};switch(_0x393929){case _0x472888(0x1ba,'^]%w'):_0x36c8c2={'appId':_0x472888(0x214,'^HCL'),'functionId':_0x472888(0x175,'!b0D'),'appid':'jd-cphdeveloper-m','body':{'cp':0x1,'pageSize':0x1e,'category':'','promote':0x0,'cutPrice':0x0,'coupon':0x0,'stock':0x0,'area':$['area'],'tenantCode':'jgm','bizModelCode':'6','bizModeClientType':'M','externalLoginType':'1'},'version':_0x472888(0x213,'A[(D'),'ua':_0x472888(0x1ea,'#0QF')},_0x50f311=await H5st[_0x472888(0x1e2,']oYL')](_0x36c8c2),_0x545ae0='https://api.m.jd.com/api',_0x42ede4=Object[_0x472888(0x142,'FQ[]')]({},_0x50f311['paramsData'],{'g_ty':_0x472888(0x1b7,'Y9Gr'),'loginType':'2','sceneval':'2','g_login_type':'1','appCode':_0x472888(0x145,'([*s')});break;case _0x472888(0x196,'5z[#'):_0x545ae0='https://api.m.jd.com/api',_0x42ede4={'appid':'jd-cphdeveloper-m','functionId':_0x472888(0x168,'(h$@'),'body':JSON[_0x472888(0x1fd,'YS2n')]({'commId':$[_0x472888(0x1d8,'AZ*F')],'tenantCode':_0x472888(0x1df,'8&&v'),'bizModelCode':'6','bizModeClientType':'M','externalLoginType':'1'}),'g_ty':'ajax','loginType':'2','sceneval':'2','g_login_type':'1','appCode':'ms0ca95114'};break;case _0x472888(0x1a1,'A[(D'):_0x2ce180=_0x472888(0x173,'(zWa'),_0x545ae0=_0x472888(0x195,'AZ*F'),_0x142c6a={'functionId':_0x393929,'body':JSON[_0x472888(0x147,'Kefs')]({'page':0x1,'activityStatus':0x1,'refresh':![],'pageSize':0x14,'channel':_0x472888(0x1e1,'@^QK')}),'appid':'shop_m_jd_com','t':Date['now'](),'clientVersion':common[_0x472888(0x15c,'@ZQM')](),'client':_0x472888(0x192,'4pdX'),'loginType':0x2,'loginWQBiz':_0x472888(0x1c6,'*]V6')};break;case _0x472888(0x205,'Kefs'):_0x2ce180=_0x472888(0x1fa,'uXG7'),_0x545ae0=_0x472888(0x1e9,'2kNh'),_0x142c6a={'functionId':_0x393929,'body':JSON[_0x472888(0x1b8,'Saq!')]({'shopId':$[_0x472888(0x199,'eFB9')],'follow':![],'sourceRpc':_0x472888(0x159,'@^QK')}),'appid':_0x472888(0x215,'Y9Gr'),'t':Date[_0x472888(0x137,'YS2n')](),'clientVersion':common['getLatestAppVersion'](),'client':_0x472888(0x20c,'fv@m'),'loginType':0x2,'loginWQBiz':_0x472888(0x1b5,'25UP')};break;default:console[_0x472888(0x187,'#0QF')](_0x472888(0x1b2,'STGi')+_0x393929);return;}const _0x5e8627={};_0x142c6a&&Object[_0x472888(0x12a,'MRGf')](_0x142c6a,_0x5e8627);_0x42ede4&&Object['assign'](_0x42ede4,_0x5e8627);const _0x4c4fc2={'url':_0x545ae0,'method':_0x2ce180,'headers':{'Accept':['queryFollowProduct',_0x472888(0x157,'YS2n')][_0x472888(0x204,'(h$@')](_0x393929)?_0x472888(0x1d1,'et1Y'):_0x472888(0x1a8,'4pdX'),'Accept-Encoding':'gzip,\x20deflate,\x20br','Accept-Language':_0x472888(0x165,'MRGf'),'Connection':'keep-alive','Content-Type':_0x472888(0x167,'YS2n'),'Cookie':cookie,'Origin':_0x472888(0x203,'k%4t'),'Referer':_0x472888(0x1de,'oEGq'),'Sec-Fetch-Dest':_0x472888(0x207,'eFB9'),'Sec-Fetch-Mode':_0x472888(0x1bd,'A[(D'),'Sec-Fetch-Site':'same-origin','User-Agent':'Mozilla/5.0\x20(iPad;\x20CPU\x20OS\x2016_4_1\x20like\x20Mac\x20OS\x20X)\x20AppleWebKit/605.1.15\x20(KHTML,\x20like\x20Gecko)\x20Mobile/15E148\x20MicroMessenger/8.0.49(0x1800312d)\x20NetType/WIFI\x20Language/zh_CN\x20miniProgram/wx91d27dbf599dff74'},'params':_0x42ede4,'data':_0x142c6a,'timeout':0x7530,'httpsTlsOptions':common['useAppTls']()};_0x2ce180==='GET'&&(delete _0x4c4fc2[_0x472888(0x15a,'#0QF')],delete _0x4c4fc2[_0x472888(0x185,'6M*j')][_0x472888(0x1ee,'HrGu')]);const _0x47bd2a=0x1;let _0x6a2eb1=0x0,_0x43e070=null,_0xd47c6=![];while(_0x6a2eb1<_0x47bd2a){_0x6a2eb1>0x0&&await $['wait'](0x3e8);const _0xda4314=await common[_0x472888(0x182,'et1Y')](_0x4c4fc2);if(!_0xda4314[_0x472888(0x16f,'Saq!')]){_0x43e070='🚫\x20'+_0x393929+_0x472888(0x1ca,']oYL')+_0xda4314[_0x472888(0x1ce,'25UP')],_0x6a2eb1++;continue;}if(!_0xda4314[_0x472888(0x1c7,'!q5^')]){_0x43e070=_0x472888(0x1d9,'A[(D')+_0x393929+'\x20请求失败\x20➜\x20无响应数据',_0x6a2eb1++;continue;}await handleResponse(_0x393929,_0xda4314[_0x472888(0x1c7,'!q5^')]),_0xd47c6=![];break;}_0x6a2eb1>=_0x47bd2a&&(console[_0x472888(0x1b4,'A[(D')](_0x43e070),_0xd47c6&&($[_0x472888(0x133,'FQ[]')]=!![],$['message']&&$[_0x472888(0x18d,'eFB9')][_0x472888(0x188,'STGi')](_0x43e070)));}
// prettier-ignore
function Env(t, e) { "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0); class s { constructor(t) { this.env = t } send(t, e = "GET") { t = "string" == typeof t ? { url: t } : t; let s = this.get; return "POST" === e && (s = this.post), new Promise((e, i) => { s.call(this, t, (t, s, r) => { t ? i(t) : e(s) }) }) } get(t) { return this.send.call(this.env, t) } post(t) { return this.send.call(this.env, t, "POST") } } return new class { constructor(t, e) { this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `🔔${this.name}, 开始!`) } isNode() { return "undefined" != typeof module && !!module.exports } isQuanX() { return "undefined" != typeof $task } isSurge() { return "undefined" != typeof $httpClient && "undefined" == typeof $loon } isLoon() { return "undefined" != typeof $loon } toObj(t, e = null) { try { return JSON.parse(t) } catch { return e } } toStr(t, e = null) { try { return JSON.stringify(t) } catch { return e } } getjson(t, e) { let s = e; const i = this.getdata(t); if (i) try { s = JSON.parse(this.getdata(t)) } catch { } return s } setjson(t, e) { try { return this.setdata(JSON.stringify(t), e) } catch { return !1 } } getScript(t) { return new Promise(e => { this.get({ url: t }, (t, s, i) => e(i)) }) } runScript(t, e) { return new Promise(s => { let i = this.getdata("@chavy_boxjs_userCfgs.httpapi"); i = i ? i.replace(/\n/g, "").trim() : i; let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout"); r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r; const [o, h] = i.split("@"), n = { url: `http://${h}/v1/scripting/evaluate`, body: { script_text: t, mock_type: "cron", timeout: r }, headers: { "X-Key": o, Accept: "*/*" } }; this.post(n, (t, e, i) => s(i)) }).catch(t => this.logErr(t)) } loaddata() { if (!this.isNode()) return {}; { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e); if (!s && !i) return {}; { const i = s ? t : e; try { return JSON.parse(this.fs.readFileSync(i)) } catch (t) { return {} } } } } writedata() { if (this.isNode()) { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e), r = JSON.stringify(this.data); s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r) } } lodash_get(t, e, s) { const i = e.replace(/\[(\d+)\]/g, ".$1").split("."); let r = t; for (const t of i) if (r = Object(r)[t], void 0 === r) return s; return r } lodash_set(t, e, s) { return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t) } getdata(t) { let e = this.getval(t); if (/^@/.test(t)) { const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : ""; if (r) try { const t = JSON.parse(r); e = t ? this.lodash_get(t, i, "") : e } catch (t) { e = "" } } return e } setdata(t, e) { let s = !1; if (/^@/.test(e)) { const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e), o = this.getval(i), h = i ? "null" === o ? null : o || "{}" : "{}"; try { const e = JSON.parse(h); this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i) } catch (e) { const o = {}; this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i) } } else s = this.setval(t, e); return s } getval(t) { return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null } setval(t, e) { return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null } initGotEnv(t) { this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar)) } get(t, e = (() => { })) { t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.get(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => { try { if (t.headers["set-cookie"]) { const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString(); s && this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar } } catch (t) { this.logErr(t) } }).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) })) } post(t, e = (() => { })) { if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.post(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) }); else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t)); else if (this.isNode()) { this.initGotEnv(t); const { url: s, ...i } = t; this.got.post(s, i).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) }) } } time(t, e = null) { const s = e ? new Date(e) : new Date; let i = { "M+": s.getMonth() + 1, "d+": s.getDate(), "H+": s.getHours(), "m+": s.getMinutes(), "s+": s.getSeconds(), "q+": Math.floor((s.getMonth() + 3) / 3), S: s.getMilliseconds() }; /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length))); for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length))); return t } msg(e = t, s = "", i = "", r) { const o = t => { if (!t) return t; if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? { "open-url": t } : this.isSurge() ? { url: t } : void 0; if ("object" == typeof t) { if (this.isLoon()) { let e = t.openUrl || t.url || t["open-url"], s = t.mediaUrl || t["media-url"]; return { openUrl: e, mediaUrl: s } } if (this.isQuanX()) { let e = t["open-url"] || t.url || t.openUrl, s = t["media-url"] || t.mediaUrl; return { "open-url": e, "media-url": s } } if (this.isSurge()) { let e = t.url || t.openUrl || t["open-url"]; return { url: e } } } }; if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))), !this.isMuteLog) { let t = ["", "==============📣系统通知📣=============="]; t.push(e), s && t.push(s), i && t.push(i), console.log(t.join("\n")), this.logs = this.logs.concat(t) } } log(...t) { t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator)) } logErr(t, e) { const s = !this.isSurge() && !this.isQuanX() && !this.isLoon(); s ? this.log("", `❗️${this.name}, 错误!`, t.stack) : this.log("", `❗️${this.name}, 错误!`, t) } wait(t) { return new Promise(e => setTimeout(e, t)) } done(t = {}) { const e = (new Date).getTime(), s = (e - this.startTime) / 1e3; this.log("", `🔔${this.name}, 结束! 🕛 ${s} 秒`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t) } }(t, e) }
