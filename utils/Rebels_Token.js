/*
主要获取 isvObfuscator token值

获取签名，自定义使用方法如下

  - 请求 API 获取

    export JD_SIGN_API="" # 接口地址，例：http://127.0.0.1:3000/api/getSign，默认 'http://api.nolanstore.cc/sign'
    export JD_SIGN_API_BODY_FIELD="" # body参数字段名，默认 'body'
    export JD_SIGN_API_FUNCTIONID_FIELD="" # functionId参数字段名，默认 'fn'
    export JD_SIGN_API_METHOD="" # 请求方法，默认 'POST'，自定义仅支持 'GET'
    export JD_SIGN_API_CONTENT_TYPE="" # 请求头 'Content-Type'，默认 'application/json; charset=utf-8'，支持 'application/x-www-form-urlencoded' 格式
    JSON响应格式解析的字段目前仅支持 `body` `convertUrl` `convertUrlNew`

  - 本地自定义脚本生成

    如果存在本地签名生成脚本则会优先加载本地签名，具体规范如下：
    - 1. 需要将脚本命名为 Rebels_Sign.js 并存储在与 Rebels_Token 脚本同一目录下
    - 2. 调用函数名为 genSign 并且需要 export 导出
    - 3. 函数固定两个传参，分别是 functionId（函数id） 和 bodyParams（body参数对象）
    - 4. 函数需要返回含有 body、st、sign、sv 等关键字段的url参数形式的签名字符串

  不管通过何种途径获取签名，最终需要的签名形式为url参数格式且至少包含 `body` `st` `sv` `sign` 字段



new Env('Rebels_Token');
*/

var iｉl='jsjiami.com.v7';const l1iIII=iii1II;(function(lllI1i,li1i1l,II1i1,lI1lll,iIiII,iil1lI,iiiliI){return lllI1i=lllI1i>>0x4,iil1lI='hs',iiiliI='hs',function(li1i1I,illIii,ii1il1,lI1llI,illIil){const l1l111=iii1II;lI1llI='tfi',iil1lI=lI1llI+iil1lI,illIil='up',iiiliI+=illIil,iil1lI=ii1il1(iil1lI),iiiliI=ii1il1(iiiliI),ii1il1=0x0;const Ill1I=li1i1I();while(!![]&&--lI1lll+illIii){try{lI1llI=-parseInt(l1l111(0x2c3,'smZa'))/0x1*(-parseInt(l1l111(0x205,'sET!'))/0x2)+-parseInt(l1l111(0x25d,'QGFg'))/0x3*(-parseInt(l1l111(0x22a,'PAfE'))/0x4)+-parseInt(l1l111(0x21e,'&88]'))/0x5+parseInt(l1l111(0x24f,'1b(u'))/0x6*(-parseInt(l1l111(0x24c,'sgHf'))/0x7)+-parseInt(l1l111(0x224,'6OW&'))/0x8+parseInt(l1l111(0x2b1,'X^Pr'))/0x9*(parseInt(l1l111(0x265,'!gU9'))/0xa)+-parseInt(l1l111(0x277,'71JV'))/0xb*(-parseInt(l1l111(0x2a6,'6g]N'))/0xc);}catch(i11iiI){lI1llI=ii1il1;}finally{illIil=Ill1I[iil1lI]();if(lllI1i<=lI1lll)ii1il1?iIiII?lI1llI=illIil:iIiII=illIil:ii1il1=illIil;else{if(ii1il1==iIiII['replace'](/[JeqwOVQBbyRSWdnfEXg=]/g,'')){if(lI1llI===illIii){Ill1I['un'+iil1lI](illIil);break;}Ill1I[iiiliI](illIil);}}}}}(II1i1,li1i1l,function(lIli11,lllI1I,lillI1,IlIlii,i1l1i1,liil11,iiillI){return lllI1I='\x73\x70\x6c\x69\x74',lIli11=arguments[0x0],lIli11=lIli11[lllI1I](''),lillI1=`\x72\x65\x76\x65\x72\x73\x65`,lIli11=lIli11[lillI1]('\x76'),IlIlii=`\x6a\x6f\x69\x6e`,(0x171c54,lIli11[IlIlii](''));});}(0xc80,0xcaf5b,Iii11l,0xca),Iii11l)&&(iｉl=0x1be4);const path=require(l1iIII(0x215,'SR!)')),common=require('./Rebels_jdCommon');function Iii11l(){const lllI11=(function(){return[...[iｉl,'JyjSEsjJWRiaenmXie.OEcbBomq.vdVS7OXQwbgf==','j8krswTj','W53cHdTXg3VdGXXOFwBcK8kq','WPeIW7TNWPO','amoju8ktcsLofSoNe8k4fSkOWQ1+W5O','W6LIq8oGrW','W7CnWO7cM8oD','WOZcJHhcL8o7','CmoSWP0vbXxdPSkmsWSRW6Pj','omkcWOy','A8oAreZcSmkiW64','WQ3cMd3cOCoS','m8kiWO/dN8kj','oSoqefGyW6zvmLJdRq','W7boemk8nCoZwa','W751W6e','WRCJtKC3p8k9W6OKWP7dLq','WPStW4VcOmo+WOxdRG','W7X/tCk0uG','W70bW5ZcVmojfSkD','WQVdUY1WW4vUW57cUSoR','W7q2dq','DhSEbuFcQCoZgKShfxVdPColcmkviSoyzYNcQSk/kvFcMSoqW50m','WRHWbJPlWRRdJCkGW5O','WODJeCk+nG','eSotvmkRhW','p8kKW6ffzW','W4XeASkIFKBdJ8kZ','8j2OMcfzpmoEW5VcICoOnSkwb+wCNEwMHEEsT+ISHoAZVUAuR+MdM+wjS+s7ToMxGUIUHW','WQ9xrG','8ksjTbbyAb08FvefWP3cMUEVT+wsMoIoG+woQEwNL+I3VW','phe1WRaj','5yUW5PAmW65kh03cS+s5JoEsGIeb77Yl','W5XzEq','W449rmocESk+b8k7W41IWPZcOY4EACoN5zgR55wVruObW6W1W4aVWQFdRSkz5lIn55cL5Rk45lUC55kbWOxMLzZdQKTBtKebvCkogL3cQNVcJ8kPW7C6','B8osDv8','gxXhWPJdMcr2WRqkWQJcQrtcI8otWPuRzmkpn8kNW6vFdhVcRKfTgq','dCkFW7HDza','hdPQowSJW5Lqd3xcQSk+hG','j8kBB3zEpZDgDsVcTSo0W5BdLMeSWRlcLColWQeiWOK3xb8','uLaM','WRdcV8ovhbHKwrhcJG','jwddQrddVGCEn8oQCmoUwhhcTCo8CaVdH8oZW4VdQ8ofW7xcINqGhmk+fY7dOcNdSq8tW4rgW54iW6JcV8kQWP4','WOlcG8op','y1JcSsvtdmkNWPjKnmkg','WQtdOMaYFW','igFdMZRdQG','WR8vW6/cHSo5','oGJdL38CbSk9WQj4Amk1','AgyEWPeA','jwdcGJddVtKUdCoafmkAibNdJ8ktc2hcSmotW5xdL8oVW4NcRGXupmk+cLhcHYJcGgHHWQPkW7SGW4JcJSoaW7/cPgDIjq','ltpcSSoTbaOnWPRdQXy','Ff4mqaPcWRb9gMFcGmk6kSoHWOldOXBdNH/dNgeW','Dx4IWQWok2fvAhxdVW','WPueW53cSSoRWOFdIcRcISkGWQKi','WRRdVdy','WONcNZFcI8oBW4tcLXv7oSkNdCkjWO7cV8orsCkYhNOrW5pdONSc','DNWHWR0d','exVdSCoK','WQzavCkAWPFdR8oQW7VdL8kqW4XyW78admk5','WOzkWQRdVuZcRSk6qvhcUaHUfmoKW41TbW','hZ1JowK','4PYQWQ/MJyxKV5BNMlRKUytNKi7LNPVLNjZML5NMLAZVVP3OTldOVQFLKPhNL4TYlsrwW4JdJmkXemoPpEs4JoEsMEAYSEs5T+EtLq','WPrDWQVdUW','mvjzWRZdHW','WQSeWRlcOSo2W6uGWOVcIIlcHCknuG','W7DIW7lcLdldHSkzm8oDWQ8pWQddL0RdOJe','WRhdTWfyWPObzWn7WQ5/bCoNW6G0W7PQWPa2kt0Cc35YfMfbCaBdM8oFfq','W6JdJXFcT1q','gCk+W71vvq','jCowW50bW40','WPJdHgq8vGhcMsH6v3G'],...(function(){return[...['WRnvW5DaoehcSmogW7a','oSkkmvy0W6/dRSkkW6S','jCk7W4O','CN/cMG','W6CYlSoxW7ToWOa','W6tdQaNcVua','W5ZdUgihxtlcLa','W70eW5FcIW','W6OCW4RcLW','4PYcnqRcVdTXpvhdL1hcPvyxwYRcGoI/T+AnOow9N+w5LGhIN4JdMa','W4TVvG','WPrtWOldJ8kyWPONg1KUWOGLWPZcG0m+5zko55A6W7yiaSo1hWRdMJj5W5VKU7xNK4hMSOFKUANNKBqz5PAoWPlcKwpdGtGvW5fkFCohb0iWWP7dP0e','oSkKW4ffrW','WOvbWQG','WP09lW','8kgkV8kIW7C+tYtcQSoJC8ovnEwFHEwLKoEsP+AoR+wnKowrPow6L+AwQUMcMEwjR+s4I+MuJEISI8kb4P+KmG','zvpcIq','hmkqW7XTxG','sM/dPmk6ia','W6RdUfVcKmoFW7NcMbjc','W7rpy8oWsa','W4bUvW','F2dcLa','WQTDW4LrivVcUmo7W60fnelcJmk5W5hcOW','hfddLYVdMsiwcSoruW','WQJdMWpdV3JdOSoRsa','WOXaWRK','WO5ejSk2fmovzCosWR8uW6tdKeXVdSkrdHG1zcRdHYFdPGJcLSofW6S','WQzjs8khWR4','WRRdJI/dQN/dRq','gw9cWQBdVq','W5BcUNBdS8kzWOpdQMv4','W4zVrCoh','W4JcMCowWO/dPCoaomkqz2eo','W6O8dKaK','8js6PNnUpgdcU0y+sCkRW5tMJ5dLJzlLKj3LUlJLVyZLUR9G4PYbeEI1N+wmNUAxK+AuKG','WQbxrCkn','aWHLi8kt','W6tdNYFcUvJcHNbF','a8kqW7jLyhVcICk8AaugW45cW4ddMI3cTSkbW5dcH0CnWPymWPBcUwVcUmktrbehW6xcLmkXW65fWRFdLbbJtSkAW4pcU08FWRhdKSovqCoebSk/WRlcU2VdMb7cTG','pL1RWQldQHvm','BSkiuW','BgWEbuFcQCoZgKShfxVdPCoyemksi8oEAdxcT8kLmflcN8ojW5ek','qCkIEICBW4jAjxldT8krW60aEc7dJduoFKpdImoQemo6WQT/nCo0','vKO1cLO','W7qJaum','FCkrycym','Amkuqa88W7fghvtdMCk6W5C','W64EWQpcJSkvE8oYbWCpqYxdTYxdSmkdWRuKW6xcUSkRWQBcHeFcGCo3WRBcH0fCpmo7yG','5BE06kYb572z6lEm6lYw6lY/6koh6k6J6lAe5y6x77YX5ysW5Bc75BgN6jss77+k','WQ3cQCoMWQ3dK8o4sCkUw0uLW6ZcJCoiW6dcS8kNW5Cgq8kkWPb6kuzqzMD4WPbrW47dJbdcLG','cCoqvmkvptLFfSoNe8k4nSkOWQ1+W5O','8kgkV8kIW7C+tYtcQSoJC8ovnEISMUAWLUwMKoI0R8kt4PY1i+AwVowqK+w7I+AxVEAnUG','BSkuvW0NW7bG','WPjOW50TW4jMEW','WP82lq','WQLHemkr','W7JdGIhcMutcJ3Xy','W7ibW5G','EmkwsqC8','gNVdRmo+pLGe','WRrzW44','4P+DWOWLWPbfWR92qahcGmogW7hdHSogi1BMQl/LNjdLI7pOV53LPRdOTQGM4PYftG','WOVdRce','WReODG','WRxcNIZcH8oC','FcjuW6L9eMrdW6HMW6Pogq','W6fUW6FcLcFdLSk6dSoaWQO','W70bW53cPConbSkm','q2GGEJHZWOO','gLFdKXxdHdWOfW','WRGPzW','W7D0W7a'],...(function(){return['W6OaWQu','uhNcGSk4WOO','fCodsmkzeqLvlmoOf8k6','f8owW7OIW6G','W4G+WPzMWPjmzmkstvXo','j3SoWRu6qtDj','W6RcSfZcVSk4W67dVt0gdCor','DCk4AG','WOddGN80xhJdMwL9tNBdJSkYWRnKc8oZWRaif8kkW4GtbJDCoWLBCJZcHCkLWRRdSIdcItdcUSkvBLldNCk6W6yFbbKGl8o9W7e/dmodW4hdTxZdGa','z8kjqG','qCkIEICBW4jAjxldT8krW60aEJNdHYqeFKhdMCoG','WP3cKCo5W5CNWQ3cS8oC','WRj8WOhdL3FcVSkeFhlcScjop8oDW7fxoI/dUSk6wCo4WQP8BG','Ex3dS8kPnrSPWO3dPYOegmoVdupdJG','DmkYFSoMF8oFWQK','fSofrSkthdLTk8o6fG','8kUQKZJcTSoUbN3cJY7cHSkcEUAnSEwnOUwqNEw7U+w8R+w7PeJINBJcHa','cMtdRSo5lW','gZ9Jpg0TW5PZiw/cVmkhoG','g8khW7jLyhVcICk8AaugW45cW5ZdKINcPmkhW4BcJ1yCWOCfWORcQ3NcSmkEsa0jW6xcHmkNW6LEWQy','W703ha','BCkLEmoW','rX1chSkpWQZdUq','W7qmWQpcUmov','ywu+WRCybMbEBwG','WQyqW4NcLCo0','WOL8FSkHWQxdMSobW7VdSCk2W6XLW5qXm8kgbCoRW7GYygRdVhPhW68','WOafW4bhWOxdJIboiIzj','WQe2mM1y','w342Bq19WOjmjG','W7tdGJq','tmkuwmouFq','W5XpF8kbzv/dLq','W60Qd00dW6NcImkleq','WRbDWOJdVee','W6ObW5tcL8ol','W6WWb0WBW6NcImkhfG','WPWyW4G','u1OYp3xcMmoj','gmkSvvTzaav3sq','mNpdLCoehW','W7y2hq','WQpcUSoxgZvHgrNcNqZdPtDxwcqFBSosW5yHW6Ly','vLVcIZ15fCkIWRvRrCk2WRycW7nioHHiWONcISkuWRFdUMZcUbG','W5u7WOa','BgiUWRGcdgTi','W7iof8oAW4tcUSovW4NdTmkZW65Y','WQBdLdzDW64','ygi7','WPuzW5K','WR41DeO5mCkuW5K7W4NdPgC','W7zDW7e','zgBdLSkAaa','o2yiWPuMsdTo','l8k+zvn0','W5ntumkcBuddJmky','W7GwW6JcISoR','f3VdTq','WPHOW5O','WQ3cPCoonJzRqqVcMqJdVYWk','s2mL','aCoBgfn1WQK4tadcGCoPWP5If1BcTEwrK+EvTqfNW6ZdNqZdKmkFtWNcMos4OUEqS+AZHUs4G+EsRxFML4FcQXeZfZxcSCogWQTxWQtdMSkGWO3dS8ojW64','E8khuqy','gI1Dh8k3WO/dN8kUy8otxCoJWQODsJ0','W6GRbveUW4pcISkabmoTvq','8y6zVCkyhJf5ybFcKqZdPwmQxY8zAEE+SUwVUUwhIUwhREwKMEI0H27INAddLG','tmo7AhBcGSk5W5qsW60RFbyKEh3cJmkGvW','wSkorCozBq','auVdGq','yCoAq3ZcVSkaW6aVW4C2wdqotq'];}())];}())];}());Iii11l=function(){return lllI11;};return Iii11l();};let scriptName=null,expireMinutes=0x1d;try{let tmpMinutes=parseInt(process[l1iIII(0x253,'GobZ')][l1iIII(0x25f,'KU78')]||'29');expireMinutes=tmpMinutes;}catch{}const defaultCacheTTL=expireMinutes*0x3c*0x3e8,TokenCache=new common['DataCache'](process[l1iIII(0x2c1,'mF1f')][l1iIII(0x243,'d]r1')]||__dirname+l1iIII(0x285,'ai4Z'),defaultCacheTTL,0x2bf20),lzkjPinFilter=(process[l1iIII(0x208,'R(zf')][l1iIII(0x27f,'PAfE')]||'')[l1iIII(0x270,'6OW&')]('@'),lzkjPinFilter_interactsaas_and_interaction_v1=(process['env'][l1iIII(0x28b,'6OW&')]||process[l1iIII(0x213,'qb0c')]['JD_ISV_TOKEN_LZKJ_NEW_PIN_FILTER']||process[l1iIII(0x23d,'X[eU')][l1iIII(0x296,'ai4Z')]||'')[l1iIII(0x29f,'SR!)')]('@'),lzkjPinFilter_interaction_v2=(process[l1iIII(0x2ad,'$jQP')][l1iIII(0x246,'edoH')]||'')[l1iIII(0x2be,'PaxW')]('@'),cjhyPinFilter=(process['env'][l1iIII(0x232,'%rcJ')]||'')[l1iIII(0x255,'WQz#')]('@');let requestAxiosProxyConfig,requestDynamicProxyConfig;try{const proxyAddress=process[l1iIII(0x28d,'SR!)')][l1iIII(0x2b9,'2X4l')]||process[l1iIII(0x1f5,'&BDB')][l1iIII(0x219,'(Kd[')]||'';if(proxyAddress){const proxyConfig=common[l1iIII(0x202,'sgHf')](proxyAddress);proxyConfig?(requestAxiosProxyConfig=proxyConfig,console['log'](l1iIII(0x26f,'r9ko'))):console[l1iIII(0x274,'sgHf')](l1iIII(0x25a,'kUtA'));}else{const proxyApi=process['env'][l1iIII(0x250,'qb0c')]||process[l1iIII(0x2ab,'b3%z')][l1iIII(0x2b7,'SR!)')]||'';if(proxyApi){requestDynamicProxyConfig={'api':null,'proxyConfig':null,'useLimit':null,'timeLimit':null,'fetchFailContinue':null,'extractTimestamp':null,'lastUseTimeStamp':null,'usedTimes':null},requestDynamicProxyConfig[l1iIII(0x267,'XyYK')]=proxyApi;const useLimit=process['env'][l1iIII(0x28e,'%rcJ')]||process[l1iIII(0x207,'WQz#')][l1iIII(0x1f1,'sET!')]||'0';try{requestDynamicProxyConfig[l1iIII(0x28a,'&BDB')]=parseInt(useLimit);}catch{requestDynamicProxyConfig['useLimit']=0x1;}const timeLimit=process[l1iIII(0x272,'%]Ek')]['RS_ISV_TOKEN_PROXY_TIME_LIMIT']||l1iIII(0x259,'qb0c');try{requestDynamicProxyConfig[l1iIII(0x245,'ZV]5')]=parseInt(timeLimit);}catch{requestDynamicProxyConfig['timeLimit']=0x2710;}requestDynamicProxyConfig[l1iIII(0x258,'2X4l')]=(process['env'][l1iIII(0x2c0,'6OW&')]||l1iIII(0x26c,'r9ko'))===l1iIII(0x2c2,'yn4U'),console[l1iIII(0x2b4,'yn4U')]('\x0a================启用\x20getToken\x20API代理(新)================\x0a');}}const globalProxy=process[l1iIII(0x279,'Tc0Q')][l1iIII(0x254,'71JV')]===l1iIII(0x25b,'2X4l');if(globalProxy)try{require('global-agent/bootstrap'),console[l1iIII(0x239,'sET!')](l1iIII(0x23e,'PAfE'));}catch(IilIii){console['log']('❌\x20getToken\x20代理模块加载失败\x20➜\x20'+IilIii[l1iIII(0x2a9,'qb0c')]);}}catch{}const redisUrl=process[l1iIII(0x2ac,'sS@e')][l1iIII(0x28f,'SR!)')]||'',redisKey=process[l1iIII(0x247,'ai4Z')][l1iIII(0x240,'fGL]')]||'',redisSubmit=!(process[l1iIII(0x203,'V(Qi')]['JD_ISV_TOKEN_REDIS_CACHE_SUBMIT']==='false'),hasRedisKey=/<pt_pin>/['test'](redisKey);let redisClient=null;function iii1II(_0x27335e,_0x25879b){const _0xaee9a5=Iii11l();return iii1II=function(_0x1fa7d5,_0x5f0a24){_0x1fa7d5=_0x1fa7d5-0x1ee;let _0xf70648=_0xaee9a5[_0x1fa7d5];if(iii1II['qTvwLM']===undefined){var _0x211fbf=function(_0x30823d){const _0x3506f7='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x411028='',_0x214718='';for(let _0xbdea2=0x0,_0x3f0a8a,_0x44fb60,_0x112f42=0x0;_0x44fb60=_0x30823d['charAt'](_0x112f42++);~_0x44fb60&&(_0x3f0a8a=_0xbdea2%0x4?_0x3f0a8a*0x40+_0x44fb60:_0x44fb60,_0xbdea2++%0x4)?_0x411028+=String['fromCharCode'](0xff&_0x3f0a8a>>(-0x2*_0xbdea2&0x6)):0x0){_0x44fb60=_0x3506f7['indexOf'](_0x44fb60);}for(let _0x332779=0x0,_0x24e277=_0x411028['length'];_0x332779<_0x24e277;_0x332779++){_0x214718+='%'+('00'+_0x411028['charCodeAt'](_0x332779)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x214718);};const _0x4512c0=function(_0x46eeff,_0x43665b){let _0x4cf5a8=[],_0x110fdd=0x0,_0x15c838,_0x25d61e='';_0x46eeff=_0x211fbf(_0x46eeff);let _0x2ec297;for(_0x2ec297=0x0;_0x2ec297<0x100;_0x2ec297++){_0x4cf5a8[_0x2ec297]=_0x2ec297;}for(_0x2ec297=0x0;_0x2ec297<0x100;_0x2ec297++){_0x110fdd=(_0x110fdd+_0x4cf5a8[_0x2ec297]+_0x43665b['charCodeAt'](_0x2ec297%_0x43665b['length']))%0x100,_0x15c838=_0x4cf5a8[_0x2ec297],_0x4cf5a8[_0x2ec297]=_0x4cf5a8[_0x110fdd],_0x4cf5a8[_0x110fdd]=_0x15c838;}_0x2ec297=0x0,_0x110fdd=0x0;for(let _0x2df95d=0x0;_0x2df95d<_0x46eeff['length'];_0x2df95d++){_0x2ec297=(_0x2ec297+0x1)%0x100,_0x110fdd=(_0x110fdd+_0x4cf5a8[_0x2ec297])%0x100,_0x15c838=_0x4cf5a8[_0x2ec297],_0x4cf5a8[_0x2ec297]=_0x4cf5a8[_0x110fdd],_0x4cf5a8[_0x110fdd]=_0x15c838,_0x25d61e+=String['fromCharCode'](_0x46eeff['charCodeAt'](_0x2df95d)^_0x4cf5a8[(_0x4cf5a8[_0x2ec297]+_0x4cf5a8[_0x110fdd])%0x100]);}return _0x25d61e;};iii1II['IoTToh']=_0x4512c0,_0x27335e=arguments,iii1II['qTvwLM']=!![];}const _0x4b3e3f=_0xaee9a5[0x0],_0xd7c1f5=_0x1fa7d5+_0x4b3e3f,_0x54da77=_0x27335e[_0xd7c1f5];return!_0x54da77?(iii1II['AmHJBY']===undefined&&(iii1II['AmHJBY']=!![]),_0xf70648=iii1II['IoTToh'](_0xf70648,_0x5f0a24),_0x27335e[_0xd7c1f5]=_0xf70648):_0xf70648=_0x54da77,_0xf70648;},iii1II(_0x27335e,_0x25879b);}if(redisUrl){let redis=null;try{redis=require(l1iIII(0x286,'mF1f'));}catch(iI1lil){console[l1iIII(0x231,'mF1f')](l1iIII(0x2a2,'&BDB')+iI1lil[l1iIII(0x28c,'fGL]')]);}if(redis)try{redisClient=redis[l1iIII(0x209,'b3%z')]({'url':redisUrl});}catch(l1lIi1){console[l1iIII(0x27a,'XyYK')](l1iIII(0x26d,'6g]N')+(l1lIi1[l1iIII(0x22d,'cS4@')]||l1lIi1));}}async function _redisCacheGet(iIli1l){const llI1I1=l1iIII,i1i1II={'PjPyf':function(il1i1I,lI1li1){return il1i1I(lI1li1);},'mjSEm':llI1I1(0x275,'6OW&'),'JWZwv':function(iI11II,iIII1I){return iI11II===iIII1I;},'BaUly':llI1I1(0x280,'sET!')},liiIIl=i1i1II[llI1I1(0x261,'6OW&')](encodeURIComponent,hasRedisKey?redisKey[llI1I1(0x22f,'ODr9')](/<pt_pin>/g,ptPin):''+redisKey+iIli1l),iil1iI=0x3;let IlIllI=null;for(let ilil1i=0x0;ilil1i<iil1iI;ilil1i++){try{await redisClient[llI1I1(0x2a0,'PaxW')]();}catch{}try{if(i1i1II['mjSEm']===i1i1II[llI1I1(0x24d,'WQz#')]){const IlIIi=await redisClient[llI1I1(0x29b,'%]Ek')](liiIIl);if(IlIIi)return IlIIi;IlIllI=null;break;}else IllII1[llI1I1(0x237,'X[eU')]=0x1;}catch(illlII){i1i1II[llI1I1(0x282,'fGL]')](i1i1II[llI1I1(0x20d,'d]r1')],'rPbiQ')?i1II1=iIIl11[llI1I1(0x1fd,'%rcJ')]||l1l1I1:IlIllI=illlII[llI1I1(0x29a,'X^Pr')]||illlII;}}if(IlIllI)console[llI1I1(0x29e,'r9ko')]('🚫\x20getToken\x20Redis缓存读取失败\x20➜\x20'+IlIllI);return'';}async function _redisCachePut(IiI1i,llll1){const IlIlil=l1iIII,lil11l={'CchAq':function(i1i1Ii,lllii){return i1i1Ii/lllii;},'LbbBl':function(iI11Ii,iIII1l){return iI11Ii+iIII1l;},'PFQcX':function(lllil,iI11Il){return lllil(iI11Il);},'vwEHD':IlIlil(0x1ff,'PaxW'),'XYEGX':IlIlil(0x20f,'ODr9')},i1i1Il=Math['floor'](lil11l[IlIlil(0x234,'PAfE')](lil11l[IlIlil(0x221,'Tc0Q')](Date['now'](),defaultCacheTTL),0x3e8)),I1lIl1=lil11l['PFQcX'](encodeURIComponent,hasRedisKey?redisKey['replace'](/<pt_pin>/g,ptPin):''+redisKey+IiI1i),lil11i=llll1,IlIIl=0x3;let lI1liI=null;for(let iIII1i=0x0;iIII1i<IlIIl;iIII1i++){try{await redisClient['connect']();}catch{}try{if(lil11l[IlIlil(0x292,'SR!)')]!==lil11l['XYEGX']){await redisClient[IlIlil(0x2a1,'DU24')](I1lIl1,lil11i),await redisClient['EXPIREAT'](I1lIl1,i1i1Il),lI1liI=null;break;}else li1[IlIlil(0x22b,'sS@e')](illIl1);}catch(il1i11){lI1liI=il1i11[IlIlil(0x2bb,'yn4U')]||il1i11;}}if(lI1liI)console[IlIlil(0x244,'%rcJ')](IlIlil(0x218,'ZV]5')+lI1liI);}async function _redisClientClose(){const lIli1I=l1iIII;try{await redisClient[lIli1I(0x1ef,'WQz#')]();}catch(IlIll1){errorMessage=IlIll1['message']||IlIll1;}}async function getToken(IlIII,ilil1l,illlIi=!![]){const II1il=l1iIII,I1lIii={'bjAmL':II1il(0x20e,'X[eU'),'vTUcd':function(illlIl,i11ill){return illlIl(i11ill);},'MuZDv':II1il(0x201,'ZV]5'),'CYHLs':function(IIIIIi,IIIIIl){return IIIIIi>=IIIIIl;},'eICLX':function(I1lIil,IIIl1i){return I1lIil(IIIl1i);},'JNyTD':II1il(0x281,'HcB6'),'hutFN':'.js','LTkvP':II1il(0x291,'mF1f'),'WByUs':'qwaHg','qYooV':II1il(0x26b,'r9ko'),'DKUqW':function(liiII1,IIIl1l){return liiII1>IIIl1l;},'uDKHq':function(lllll,i11ili){return lllll===i11ili;},'wbsJw':'OCmcG','naadM':'yAZnG','yRCOE':II1il(0x24b,'cS4@'),'tYljm':'🚫\x20getToken\x20请求错误\x20➜\x20获取动态代理地址失败，已设置跳过请求','Vjcat':II1il(0x2b5,'&88]'),'nRDET':'api.m.jd.com','UCCPT':II1il(0x294,'$jQP'),'QOBRc':'zh-Hans-CN;q=1','GXxme':'gzip,\x20deflate,\x20br','EHBZE':II1il(0x1ee,'V(Qi'),'wVRDy':function(iil1l1,lllli){return iil1l1-lllli;},'KgMgZ':II1il(0x298,'PaxW'),'yFvHg':function(iiili1,ill11i){return iiili1&&ill11i;},'RCjYW':'GRDIC','CvqZg':function(lllill,ill11l,I1lIiI){return lllill(ill11l,I1lIiI);},'KqgwZ':II1il(0x287,'qb0c'),'aBbPT':function(lllili,IliiiI){return lllili!==IliiiI;},'rdXiF':'kTgoH'};let IiI1I='';try{const Ill11=I1lIii['eICLX'](decodeURIComponent,common[II1il(0x21c,'(Kd[')](IlIII,I1lIii[II1il(0x21d,'d]r1')]));if(Ill11){if(!scriptName){const IlIlli=require[II1il(0x29c,'PAfE')][II1il(0x2b8,'T)U#')];scriptName=path[II1il(0x27d,'HcB6')](IlIlli,I1lIii[II1il(0x290,'%rcJ')]);}if(illlIi){let il1i1i=[];if(ilil1l[II1il(0x204,'WQz#')](I1lIii[II1il(0x249,'&88]')])){if(scriptName[II1il(0x2a7,'sS@e')](II1il(0x248,'sgHf')))il1i1i=lzkjPinFilter_interaction_v2;else{if(scriptName[II1il(0x2bc,'LAOU')](I1lIii['bjAmL']))'ycUBe'!==II1il(0x260,'&BDB')?(l11i11[II1il(0x2af,'LAOU')]=null,IilIl1['lastUseTimeStamp']=null,lIII1l[II1il(0x2ba,'1b(u')]=null,l1iIIi[II1il(0x1f8,'mF1f')]=0x0):il1i1i=lzkjPinFilter_interactsaas_and_interaction_v1;else{if(I1lIii[II1il(0x223,'71JV')]===II1il(0x20b,'1b(u')){if(l1lIii['startsWith'](II1il(0x22c,'b3%z')))llIlii=llIlil;else IiiIli[II1il(0x27c,'edoH')](I1lIii[II1il(0x25c,'fGL]')])?IIlil=ilI1lI:IiiIll=IIlii;}else il1i1i=lzkjPinFilter;}}}else ilil1l['includes'](I1lIii[II1il(0x2b0,'kUtA')])&&(il1i1i=cjhyPinFilter);if(I1lIii[II1il(0x241,'6OW&')](il1i1i['length'],0x0)&&(il1i1i[II1il(0x2b2,'6g]N')](Ill11)||il1i1i[II1il(0x29d,'&BDB')](encodeURIComponent(Ill11))))return I1lIii[II1il(0x289,'smZa')]('YekMT',II1il(0x1f3,'%]Ek'))?(console[II1il(0x2a3,'CaMI')](II1il(0x295,'(Kd[')),''):(lIIiiI['log'](II1il(0x23a,'d]r1')),'');IiI1I=TokenCache[II1il(0x211,'X^Pr')](Ill11)||'';if(IiI1I){if(I1lIii[II1il(0x235,'LAOU')]===II1il(0x24a,'edoH'))return IiI1I;else try{I1lIii[II1il(0x227,'71JV')](i1ilii,I1lIii['MuZDv']),iIIII1[II1il(0x225,'o0pM')](II1il(0x214,'SR!)'));}catch(lllil1){I1iIiI[II1il(0x27e,'2X4l')]('❌\x20getToken\x20代理模块加载失败\x20➜\x20'+lllil1['message']);}}redisClient&&(IiI1I=await I1lIii['eICLX'](_redisCacheGet,Ill11));}}const liiIII=await common[II1il(0x268,'6m9)')](II1il(0x212,'ZV]5'),{'url':ilil1l,'id':''});if(!liiIII)return console['log']('🚫\x20getToken\x20签名获取失败'),'';let li1i11=null,iI11I1=![];if(requestAxiosProxyConfig||requestDynamicProxyConfig){if(I1lIii[II1il(0x269,'&BDB')](I1lIii['naadM'],I1lIii['yRCOE']))Iliili=Iliill[II1il(0x293,'SR!)')]({'url':IIII11});else{if(requestAxiosProxyConfig)li1i11=requestAxiosProxyConfig;else{if(requestDynamicProxyConfig){if(requestDynamicProxyConfig[II1il(0x251,'WQz#')])li1i11=requestDynamicProxyConfig['proxyConfig'],iI11I1=!![];else{const ilil1I=await common['getProxyAddressWithApi'](requestDynamicProxyConfig['api']),i11il1=common['_getProxyConfigWithAddress'](ilil1I);if(i11il1){if(II1il(0x21f,'R(zf')!=='aUTXf'){let lllilI=lilIl1(i1l1ii[II1il(0x271,'2X4l')]['JD_ISV_TOKEN_CACHE_EXPIRE_MINUTES']||'29');i1l1=lllilI;}else{const ilil11=II1il(0x2b3,'71JV')['split']('|');let illlI1=0x0;while(!![]){switch(ilil11[illlI1++]){case'0':requestDynamicProxyConfig[II1il(0x263,'&88]')]=i11il1;continue;case'1':requestDynamicProxyConfig[II1il(0x25e,'sS@e')]=Date[II1il(0x210,'PaxW')]();continue;case'2':console['log'](II1il(0x23c,'DU24')+i11il1[II1il(0x256,'PaxW')]+':'+i11il1['port']);continue;case'3':iI11I1=!![];continue;case'4':requestDynamicProxyConfig[II1il(0x1f8,'mF1f')]=0x0;continue;case'5':li1i11=i11il1;continue;}break;}}}else{if(!requestDynamicProxyConfig['fetchFailContinue']){if(I1lIii[II1il(0x269,'&BDB')]('PfqFk',II1il(0x1f0,'cS4@')))return console[II1il(0x1fc,'R(zf')](I1lIii['tYljm']),'';else I1ilI1=iillll[II1il(0x226,'(Kd[')]||lIIilI;}}}}}}}const il1i1l={'url':I1lIii[II1il(0x276,'1b(u')],'method':'POST','headers':{'Host':I1lIii[II1il(0x2a5,'71JV')],'Content-Type':I1lIii['UCCPT'],'User-Agent':common[II1il(0x228,'o0pM')](Ill11)||II1il(0x24e,'edoH'),'Accept-Language':I1lIii[II1il(0x278,'Tc0Q')],'Accept-Encoding':I1lIii[II1il(0x222,'V(Qi')],'J-E-H':common['getJEH'](),'J-E-C':common['getJEC'](Ill11),'Cookie':IlIII},'proxy':li1i11,'data':liiIII,'debug':![],'timeout':0xea60},IlIlll=0x2;let IIIl1I=0x0,iil1ii=null;while(IIIl1I<IlIlll){const I1lIi1=await common[II1il(0x2a8,'ODr9')](il1i1l);if(iI11I1){if(I1lIii[II1il(0x22e,'X[eU')]!==II1il(0x236,'6OW&')){requestDynamicProxyConfig['lastUseTimeStamp']=Date[II1il(0x26e,'Tc0Q')](),requestDynamicProxyConfig[II1il(0x1f4,'qb0c')]++;const liiIIi=requestDynamicProxyConfig['useLimit']>0x0&&requestDynamicProxyConfig['usedTimes']>=requestDynamicProxyConfig['useLimit'],lil11I=requestDynamicProxyConfig[II1il(0x264,'DU24')]>0x0&&I1lIii['wVRDy'](Date[II1il(0x200,'mF1f')](),requestDynamicProxyConfig[II1il(0x220,'LAOU')])>=requestDynamicProxyConfig['timeLimit'];(liiIIi||lil11I)&&(requestDynamicProxyConfig[II1il(0x217,'mF1f')]=null,requestDynamicProxyConfig[II1il(0x27b,'DU24')]=null,requestDynamicProxyConfig[II1il(0x257,'sET!')]=null,requestDynamicProxyConfig['usedTimes']=0x0);}else try{IIII1I=Iii111[II1il(0x252,'cS4@')]({'url':l1l1II});}catch(iIiIi){Ii1iII[II1il(0x266,'6OW&')]('❌\x20getToken\x20Redis连接异常\x20➜\x20'+(iIiIi[II1il(0x29a,'X^Pr')]||iIiIi));}}if(!I1lIi1['success']){iil1ii='❌\x20getToken\x20请求失败\x20➜\x20'+I1lIi1['error'],IIIl1I++;continue;}if(!I1lIi1['data']){iil1ii=I1lIii['KgMgZ'],IIIl1I++;continue;}try{const iil1ll=I1lIi1[II1il(0x23f,'!gU9')];if(iil1ll[II1il(0x288,'sET!')]==='0'){IiI1I=iil1ll[II1il(0x1fa,'r9ko')],TokenCache['put'](Ill11,IiI1I,defaultCacheTTL);if(I1lIii[II1il(0x206,'GobZ')](redisClient,redisSubmit)){if(I1lIii['RCjYW']===II1il(0x1f9,'2X4l')){IIlll[II1il(0x216,'smZa')]=liliI[II1il(0x20a,'QGFg')](),ll1lI[II1il(0x1fe,'d]r1')]++;const iil1li=l1iii[II1il(0x20c,'6g]N')]>0x0&&IIlli['usedTimes']>=l1iil[II1il(0x2aa,'edoH')],lillIl=ii1l1[II1il(0x1fb,'mF1f')]>0x0&&I1lIii[II1il(0x262,'kUtA')](lIIill[II1il(0x21b,'edoH')]()-I11iIi[II1il(0x220,'LAOU')],I1ilII[II1il(0x230,'GobZ')]);(iil1li||lillIl)&&(l1l11i[II1il(0x1f2,'R(zf')]=null,l1iIl[II1il(0x297,'LAOU')]=null,illIll['extractTimestamp']=null,iIli1I[II1il(0x1f8,'mF1f')]=0x0);}else await I1lIii[II1il(0x2ae,'XyYK')](_redisCachePut,Ill11,IiI1I);}}else iil1ll[II1il(0x284,'Tc0Q')]==='3'&&iil1ll[II1il(0x299,'SR!)')]===0x108?console[II1il(0x2b4,'yn4U')](I1lIii['KqgwZ']):console[II1il(0x2a4,'b3%z')](II1il(0x2bd,'fGL]')+JSON[II1il(0x233,'Hk5A')](iil1ll));}catch(iIiIl){console[II1il(0x274,'sgHf')](II1il(0x273,'PaxW')+(iIiIl['message']||iIiIl));}break;}return I1lIii[II1il(0x21a,'yn4U')](IIIl1I,IlIlll)&&console[II1il(0x2b6,'SR!)')](iil1ii),IiI1I;}catch(iiilii){return console[II1il(0x27e,'2X4l')](II1il(0x238,'!gU9')),console[II1il(0x266,'6OW&')](iiilii),IiI1I;}finally{I1lIii['aBbPT'](I1lIii[II1il(0x23b,'6g]N')],II1il(0x1f6,'yn4U'))?redisClient&&await _redisClientClose():i1ll['useLimit']=i1l1lI(i1iliI);}}module[l1iIII(0x1f7,'X[eU')]=getToken;var version_ = 'jsjiami.com.v7';