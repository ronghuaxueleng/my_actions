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

var iｉl='jsjiami.com.v7';const lI1llI=iii1II;(function(IlIli1,illIiI,lI1lli,Ill1l,llI1Il,ii1iii,i11iil){return IlIli1=IlIli1>>0x9,ii1iii='hs',i11iil='hs',function(Ill1i,ii1iil,lllI1l,i11iii,llI1Ii){const ii1il1=iii1II;i11iii='tfi',ii1iii=i11iii+ii1iii,llI1Ii='up',i11iil+=llI1Ii,ii1iii=lllI1l(ii1iii),i11iil=lllI1l(i11iil),lllI1l=0x0;const lllI1i=Ill1i();while(!![]&&--Ill1l+ii1iil){try{i11iii=-parseInt(ii1il1(0x1e9,'aLbt'))/0x1+parseInt(ii1il1(0x1ff,'[61H'))/0x2*(-parseInt(ii1il1(0x1a3,'Iga3'))/0x3)+parseInt(ii1il1(0x1e7,'@XH)'))/0x4+parseInt(ii1il1(0x1c3,'Blk&'))/0x5+parseInt(ii1il1(0x1be,'Fv!&'))/0x6+-parseInt(ii1il1(0x1a2,'m%JJ'))/0x7*(-parseInt(ii1il1(0x1cf,'7TCW'))/0x8)+-parseInt(ii1il1(0x19f,'D1vx'))/0x9*(-parseInt(ii1il1(0x1f3,'148)'))/0xa);}catch(li1i1l){i11iii=lllI1l;}finally{llI1Ii=lllI1i[ii1iii]();if(IlIli1<=Ill1l)lllI1l?llI1Il?i11iii=llI1Ii:llI1Il=llI1Ii:lllI1l=llI1Ii;else{if(lllI1l==llI1Il['replace'](/[LGABYPgIwdHepXlVnEbF=]/g,'')){if(i11iii===ii1iil){lllI1i['un'+ii1iii](llI1Ii);break;}lllI1i[i11iil](llI1Ii);}}}}}(lI1lli,illIiI,function(II1i1,lI1lll,iIiII,iil1lI,iiiliI,li1i1I,illIii){return lI1lll='\x73\x70\x6c\x69\x74',II1i1=arguments[0x0],II1i1=II1i1[lI1lll](''),iIiII=`\x72\x65\x76\x65\x72\x73\x65`,II1i1=II1i1[iIiII]('\x76'),iil1lI=`\x6a\x6f\x69\x6e`,(0x162ead,II1i1[iil1lI](''));});}(0x17a00,0x2d12f,Iii11l,0xbf),Iii11l)&&(iｉl=lI1llI(0x242,'N@2f'));const path=require(lI1llI(0x1c1,'^N*x')),common=require(lI1llI(0x1f5,'oVix'));let scriptName=null,expireMinutes=0x1d;try{let tmpMinutes=parseInt(process['env'][lI1llI(0x23a,'m%JJ')]||'29');expireMinutes=tmpMinutes;}catch{}function iii1II(_0x1f098c,_0x5c1801){const _0x2cbe9f=Iii11l();return iii1II=function(_0x30a8a8,_0x580331){_0x30a8a8=_0x30a8a8-0x174;let _0x1ee2d2=_0x2cbe9f[_0x30a8a8];if(iii1II['knCYBi']===undefined){var _0x5c6649=function(_0x126bd5){const _0x24e2cf='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x33a08e='',_0x190610='';for(let _0x437460=0x0,_0x2cfc2d,_0x296e47,_0xc7f2f9=0x0;_0x296e47=_0x126bd5['charAt'](_0xc7f2f9++);~_0x296e47&&(_0x2cfc2d=_0x437460%0x4?_0x2cfc2d*0x40+_0x296e47:_0x296e47,_0x437460++%0x4)?_0x33a08e+=String['fromCharCode'](0xff&_0x2cfc2d>>(-0x2*_0x437460&0x6)):0x0){_0x296e47=_0x24e2cf['indexOf'](_0x296e47);}for(let _0x215f1d=0x0,_0x23d5a6=_0x33a08e['length'];_0x215f1d<_0x23d5a6;_0x215f1d++){_0x190610+='%'+('00'+_0x33a08e['charCodeAt'](_0x215f1d)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x190610);};const _0xe212e=function(_0x4223c1,_0x4021fb){let _0x355224=[],_0x1f65eb=0x0,_0x33c9a7,_0x34c297='';_0x4223c1=_0x5c6649(_0x4223c1);let _0x4a61c5;for(_0x4a61c5=0x0;_0x4a61c5<0x100;_0x4a61c5++){_0x355224[_0x4a61c5]=_0x4a61c5;}for(_0x4a61c5=0x0;_0x4a61c5<0x100;_0x4a61c5++){_0x1f65eb=(_0x1f65eb+_0x355224[_0x4a61c5]+_0x4021fb['charCodeAt'](_0x4a61c5%_0x4021fb['length']))%0x100,_0x33c9a7=_0x355224[_0x4a61c5],_0x355224[_0x4a61c5]=_0x355224[_0x1f65eb],_0x355224[_0x1f65eb]=_0x33c9a7;}_0x4a61c5=0x0,_0x1f65eb=0x0;for(let _0x356493=0x0;_0x356493<_0x4223c1['length'];_0x356493++){_0x4a61c5=(_0x4a61c5+0x1)%0x100,_0x1f65eb=(_0x1f65eb+_0x355224[_0x4a61c5])%0x100,_0x33c9a7=_0x355224[_0x4a61c5],_0x355224[_0x4a61c5]=_0x355224[_0x1f65eb],_0x355224[_0x1f65eb]=_0x33c9a7,_0x34c297+=String['fromCharCode'](_0x4223c1['charCodeAt'](_0x356493)^_0x355224[(_0x355224[_0x4a61c5]+_0x355224[_0x1f65eb])%0x100]);}return _0x34c297;};iii1II['LfOLZg']=_0xe212e,_0x1f098c=arguments,iii1II['knCYBi']=!![];}const _0x4355c2=_0x2cbe9f[0x0],_0xf2917=_0x30a8a8+_0x4355c2,_0x5d9318=_0x1f098c[_0xf2917];return!_0x5d9318?(iii1II['YXHFEZ']===undefined&&(iii1II['YXHFEZ']=!![]),_0x1ee2d2=iii1II['LfOLZg'](_0x1ee2d2,_0x580331),_0x1f098c[_0xf2917]=_0x1ee2d2):_0x1ee2d2=_0x5d9318,_0x1ee2d2;},iii1II(_0x1f098c,_0x5c1801);}const cacheDefaultTTL=expireMinutes*0x3c*0x3e8,Cache=require(lI1llI(0x182,'bfSy')),cacheFile=new Cache(cacheDefaultTTL,process[lI1llI(0x210,'@XH)')][lI1llI(0x1b1,'@Ba!')]||__dirname+lI1llI(0x233,'7TCW')),lzkjPinFilter=(process[lI1llI(0x1e4,'Iga3')]['JD_ISV_TOKEN_LZKJ_PIN_FILTER']||'')[lI1llI(0x22e,'34b4')]('@'),lzkjPinFilter_interactsaas_and_interaction_v1=(process[lI1llI(0x218,'N@2f')][lI1llI(0x21c,'aLbt')]||process[lI1llI(0x199,'7TCW')][lI1llI(0x19e,'U7]j')]||process['env']['JD_ISV_TOKEN_LZKJ_LOREAL_PIN_FILTER']||'')[lI1llI(0x19b,'TAs*')]('@'),lzkjPinFilter_interaction_v2=(process[lI1llI(0x210,'@XH)')]['JD_ISV_TOKEN_LZKJ_INTERACTION_V2_PIN_FILTER']||'')['split']('@'),cjhyPinFilter=(process[lI1llI(0x1d8,'DhR$')][lI1llI(0x213,'f@pD')]||'')[lI1llI(0x189,'iUb[')]('@');function Iii11l(){const Ill1I=(function(){return[...[iｉl,'nXYjHwlsdGHjieEaVmHLiAI.bXceogelmB.PpFv7==','WQddR2PGW4C','FdNcOamL','WO04ew4','W4tcV8kIW5JdRanlqdhdLctcN8kLWQmZ','WP9wW4bUWPTrWPhdQZBcLCo6WPe','FIruW7BcHa','WRhdNgdcGCot','ACo0W4qXW5tdOWe','e37cU8oztCofvK3cQ1CNa0KxWRCP','bhJcPhW','W7G4W6TxWOhdJMTAW5tdLmkOzCkbhCoqWRVcP+wsPUEwHXj8hSoPWPldLNTnFmk0W5GmCUs5OoEqV8oM5PAHy8kKWRDwWRVcHSoKWPZcUSoaW6u1px4nW592W6G','DMBcKa','W6RdTCo5uWq','o3FcN0u','W7RcKHSWrCoLaZ4CmJ8+WOVcJ8kgW4y0tazJEmoyCmkYW7pdRW','WONcICorp8kE','aCk+oCknd8kZwSkx','W75opa','WOxcTSopWRRdJ8oPA8oX','W49SWOZcNJm','ue3dG8kBW5/dIWtcPmodncldImkmoMBcSmoXCmk3xmkRmSkrBIa2d8oEpc3dQCoosttcQX86oCowbCoKWRe5s8o8WQRdRa','sdBcJICC','WPNdLSovlWBdUCkaWPqV','W7Xfjb7cKq','W4RdUSo3','WQP1dW','5BwC6k+z576w6lAV6l2K6l606kkr6k2e6lw05yYn776i5yA45Bkq5Bgh6jEE776C','mSkAsM0tlmoWl8kXW5dcGSkYgmkelmoowGnFW41oW6BcIer8wLeD','W77dJ8ogtmk6','m8oaFW','aSkImCoJWRBcPG','u2PE','FSkyzehcG8ojbW','ESk6zmkmWPq','oW9S','WQZcIMTGbu/dHSk2W5VcOa','uSkSDq','WRaYW7W','ymoJW5m','yaXoqfu','AYLVvhzZDuufW6jyBq','mHjY','W4hdT8kDW47cLmk1qmoGqJpdObi','pmk1bmkpra','W7hcVmkyW4ddHHPozW','W4NdLmkfzSozzeXEESoqiMe','8lUATCo+W4VdOb/cMSkAmmkkWPRdLoEUPUwqOoIoHowmLUwLVoI2Ra','gYvfx8o6W4xdLJe','4P+JWRtdPMC0mYNdQX14C8o+W5FdGX3dJ+APHUwDMEwlKEI+TUwKKoI0RfJINPFcQq','W7n4pcNcVG','oxJdLJVdRmkAWPW5uJ0jW5y','4P21WO0ymmoSWPHLW5xdK8klW7lKUzlNK6BMQj3LNzdLIkpOVl/LPB/OTkvz4P6+W6q','WQNdQmkjW4xdKd52ua','WOhdP31bW57dMIBdOmoI','Emkbw31KW6pcTmoofJZcIL/cMSk5WQ1PW5q','WPDBW7hcHKVdRghcGtpdUZW','WQxcLIDAefldOSoYW6ZcHMNcUZhdQq','WRldO0BcOSoJ','AIxcIgJcU8opWQKU','WR9PfSoUW7hdUZuzW63cRCkj','8ygPH8kvmCkijhP5x8oWiqlLNzhLP7/NK4lORl/MS5lML6FPGzdLIzNKUO3PL7hORzK','oXnJ','WPNdThTo','yxTWW5xdOa','WQ4uEh3dQCkMhmkzEwK6W6K','z8o1bNy7mhv3kmkUkmokuSkSW7hdPe8ChhBdIs3dO3DAjwja','4P+tioAoGUs9R+EzG+s4TUEqIowESEwFGEAvHoAwQo+9GoI3KEI9SEwqVoEwHJuJc355dHRcRSkIWRRKUktNKiJMSR/KU7ZNKya','WOHNWRCfW7a','W4S7sSkTW7pdLmkJdxZcMG8u','W5mZs8oSW5e','umkUBmkMWRdcNNSVcqlcLru2peXhWRq1W7BdV2n4','W4LmWPPnEG','4P2FW51Wv8kwW7OnwSkCoCoP6k6O5RkV5AwT6lwdjokDRmkw','WOi7W6Cez8orpSo+W7j0WPiZeSoIpCkvvCkKW59Ar8o4','WOjXWOKAW5xcNq','Et/cGuhcVmodWQ0/','W7WnWRukW4q','yKHDffO','W4jcWOvWcCk6xmkxWOacW6PaCmkpuSoN5zcI55EvWQb8CSofWRdcSmkrbmkYW5JKUA/NKlFMSzdKUBpNK7RdTUAvH8oRbctcHKFdMbJcJSk7isxcPtnOnSo/','r8opW7apW7i','W47cQHNdMmkEtwWOW4esWOldRW'],...(function(){return[...['p3aP','nNe4','W7vKdCkyWR3cVMtdNG','WR/dIK9TW4hdPrtdNCozWOG5tuSgdavnl8kMWR3cRepcOCosjXtcR8k8','ycpcGW','8y2BLmkykLhdSZxdHCowwSk5xEIUUUAZSoMvTUISTs3INAhcOoIoRowpGEwiMEAdPEs4VoEtVowDKEwENowNIEI2QE+8VEw3GUISRUE+KUI0REI8SoISTEAXUW','W6GHw8olW68','W55KWO0','iCkjfG','DgBcGa','W6fXcG','W6FdHmoDzSklDuC','WRRcGCo1WR/dTCosxCortG3dRY/dVCoZmKNdTSkWs8ogwmkRucNcSSoByf46W4LxeYVcJexcQCk/B8oxWPRcHCkZdKrNW407W7BcS1jRbmo+WPFdICkgW7qkW4lcRW','WPNdR2nqW4FdGc7dNCo/WQ4zugaKkZ0','5yQS5PwOWPpdG8oxfeRKU5VNKy7dNHVVV6S','4P+Ir+AmQos/H+EyP+s6H+EtM+wEKEwCKUAuMUAxIo+/NoI0O+I/J+wtJoEwVCkMxSoyfCoyW67cRgFdL8kr5lIU55oU5RcY5lUc55kR','BCo8W4qYW4/dTbpcKeyOWOFdGSk2WPxdTbNdUehdJmkEu3WQzcrGc8kbnGdcTCkEda','WOZdR0dcMmosc3ClW5ev','xwvUfNK','8jYyP8kuoCodW6mMWOTeiSkhW43ORlNMS7RLPRlOTyVcR+kFSmkk5Psr5zoS5BQf5Pw35O2/','W5CyWOZcKai','F2FcGq','W48Lvq','gCkUFa','FZn1x2i','W690WQhcSrq','W6mqWQZcUq4','kmkrrNa','xmovcYFdUCkVFSoQW5/cImk3W4lcLf1QW7m','WOCpW5uAea/cGSoBpSkVW7y9WO7cGvRdKmkJWPZdVf9dvKVcKSoA','g8ksiIZcPW','xCodnKCrjuvnaCkmcG','BHfzz0m','W7HslYRcPmo3b8khyeidW5K','FSkTuSkpWOm','h8oRnCkBbCkDgSkIc8oPEwtcU8onBSoXWQS','WRpcKw0','WPddSM3cSSoV','W71hWRpdISoO','zSkoCN7cI8odc0u','mXHMzCojW6FdSG','W5qfWPKZW68','ue3cQmk7W5ZdTttcNSoPufBcSmoKtXldG8kzhCkbsCkBdCk2wv5jk8oyivJcJmk4na','WPtcPmoEWPC','WPFcOmoEWQxdJ8oJBa','quDRW6VdJmoLAa','W7HearlcVa','W5bLpctcUq','WOddGmoElcBdUa','kZXrrCoz','lSkucSkVrmkZAJ3dOmo5W6hdSmokW74','WRVdTMz3W5C','nhFcNa','rg5Wg3G','W5FcSsanyW','W5VdPSo0zW','vxfnW7xdVa','WPNcQ8ojWPRdK8oGz8o2','WOVcNfXIgG','W5xcLZi','E8kjy0lcKCkutr7cMcFcOhhcGhimymoEW5vgvYxcOmkmBCoMESkRW51wjmoVWQaHxt3cPZagW4hcH8kpWOhdKXGCWO/cQmkkW68dDmosW4VdR1mNW6iAvq','FwZcG8kXW6ddJadcO8odtxlcKSooAq','WOhdGmododpdT8ki','pCoBwLTL','WRHbWOKJW6/cPqKZWQBcOSoqfSoJCmk/W4NdGSoq','oSobBG','W7RcI8kaW4BdKa','g8khCL0l','WRlcM3LHefVdTa','WRGqW4O5','W4FcKXbtnG','ACoIW4i','W4DjWRddJCoe','fSk0p8kpDSkixeFdJmoDW4NcKmoJWPLQth5oW6xdPYJcUqJcL8oPdSodCWZdQxddQG0qDmoSDCk/','W5WcWOGWW4ihWRG','WPa8fNveCmkg','8lw7OapdPmo7WO7cNqy5WPWowEAnTUwoUUwqTUw7Qow/VEw7RfVINyBdJUI3VEwmSoAwOEAxHq','W7VcObWExG','xSoicW','WOnQWRqSW6G','WOhdOcKmDmo4mYS','dmk3Eeeme8oceSkk','W4tcUsawWQdcHWRdQ8oNWRuZyq'],...(function(){return['gMNcQa','8kQ4HsL/y8oYWOZdKIiZWOa85O2q5yY35zcn5BQs5B645BQEW5BINPz4','tbfTzhu','h8kLjmogWR8','WRKZW60','F8ksCa','WQeUW67cNmk1','W4ldSCoYCseaiW','BSo9Dq','8ls7Jmoyo8ogemkjW445WP/dRSoWWOjTWOFdVmo157YQ5A+L5Awq6lAPWQhINzSI','W7HLjSkKWRxcUNBdUmoaW4dcHd5hW4vGW7L8mazlxqG','kmkibW','ggNcUa','W67cQ8kIW4JdQbHjxtS','qe1/','W53cGsHHpW','u35ocfe','aCk6ymoow8okbSkfkmoQvLRdLa','WOVcNSoAlSkue0f4uSo8ka','xIxcSNGJWQNcVJeAWQGxnhW','lCkja8kQumk6zMa','WOxcTSopWPldSSoTB8oGCG','4P+9wCkYWOydW70aD+AuJUApV+w7VUI/PUAoPow9Pow4Nmku4PYIWP0','vwtcSSk8W7C','mmkce8kY','xfb3W6ddLmobyKBcOtLP','W5DxWQZcKW0','8ycOSahcJCoddhqnW44yWPBcJUwFM+wLSEErGEAnQowpNEwqMEw5P+AvOoMaM+wiPEs7LEMuJ+ISS8kN4P6gW6G','W5ZdOCoIysuunq','W7HpWRxdMSkqw8k0W7a5W50rWOVcMmoLWPxdHCkUDtRdHNdcVSkOrmo3W78qWOxcIY7cRW','W5SQWRxcPtu','zWL6xfa','jcLfrSoQ','aCkUnSokWPZcI8kQftddKW','yfeToZldSmoHW5VdLIBdUrq','nmksfa','vSkCB2pcPG','nxNcKK4','EGBcHxFcNa','8jYyP8kuoCodW6mMWOTeiSkhW43MJAVLJzVLKy7LU7RLVO3LUztcIUkDRqe','qmoukKWjau8','oxeXcceKqa','vCoMiG','dLarkr4','bxBcO8ocwa','gM/cPM4O','xSoFW6SxW7xdGs3cSgamWQZcO8krW6JdKshdLZxdTCkWCvG','eLZcPgNcG8oNlSkcDhBdHI4uAmkrCZJdJ8kzWRCgWO7dTmkbqmoIkWtdSSoDWQT0','W71oWO5/aSkWgCopW7PfWRWB','W7BcGCkQW4RdKq','WPpcNmonWO/dRq','kZVdG8oeWRNcKvJcMCoQC1NcRSo6','W6yVW60Efr3cNW','uWXFFx4','dgW8nb0','eN3cL2O3','WOddMvXYW4q','W7iKCmosW6y','WQJcLf5dcW','W5zQWP7dSG','Fd7cI3xcRmoTWQSLrbO5','Fmo+W5SMW5/dLb3cIKKUWO4','W41uWRBcTrVdTItcJMxdPNXdW6S','WQbwWOKJW6/cPqKZWQBcOSoqfSoJz8kHW4NdMmoiW6nTsYNdKSkEW6a','W4tdPSoVFSkF','qthcIW','WRhcQmoQh8k+bNfcE8oEcMWMWRJcKCkBW4rEwJziWQNdTCo2WQ4','W7PtWRfmv8kWlgnT','DmkhFKldJSkobLtcNZVcQcVcIhbgzSkc','qtbfD3e','W71chSkwWPe','BSoRDZNcICkKjZdcPCkCWPlcNYbZkHa','WRi5W74','CSoJkbL9r8ksrSodWQBdUSobESoRvmk35zc855w4imoPASorWPrUsgPTCEs7QUErTEAZRos7OoEtK0VML4PEWRNdQSotW41CzZuCr8oRWQ1anmoeba','4P2GaKRdVCojW6T+coAwT+AmVUw6NEI8S+AoNEw/HEw6VCka4P21zW','v8occa','4P63W4ZdKJpcMqrbFvhdU2/KU4hNKB/MQ5RLNPpLIAJOV63LPkdOTljj4P6xW4G','W4XiWRpcJG','tCkwu8kuWPm','W63dHJOIrqJdS8kxW6hcJt/cIq'];}())];}())];}());Iii11l=function(){return Ill1I;};return Iii11l();};let requestAxiosProxyConfig,requestDynamicProxyConfig;try{const proxyAddress=process[lI1llI(0x226,']jSe')][lI1llI(0x22d,'Iga3')]||process[lI1llI(0x24b,'7co(')][lI1llI(0x250,'%UPt')]||'';if(proxyAddress){const proxyConfig=common[lI1llI(0x1c2,'148)')](proxyAddress);proxyConfig?(requestAxiosProxyConfig=proxyConfig,console['log'](lI1llI(0x20d,'D1vx'))):console['log'](lI1llI(0x21f,'Blk&'));}else{const proxyApi=process[lI1llI(0x177,'anHb')][lI1llI(0x19d,'10xZ')]||process[lI1llI(0x1fc,'Qa7(')][lI1llI(0x208,'D1vx')]||'';if(proxyApi){requestDynamicProxyConfig={'api':null,'proxyConfig':null,'useLimit':null,'timeLimit':null,'fetchFailContinue':null,'extractTimestamp':null,'lastUseTimeStamp':null,'usedTimes':null},requestDynamicProxyConfig['api']=proxyApi;const useLimit=process[lI1llI(0x225,'m%JJ')]['RS_ISV_TOKEN_PROXY_USE_LIMIT']||process[lI1llI(0x1d7,'^gxg')][lI1llI(0x1cd,'g^E5')]||'0';try{requestDynamicProxyConfig['useLimit']=parseInt(useLimit);}catch{requestDynamicProxyConfig[lI1llI(0x1d1,'aLbt')]=0x1;}const timeLimit=process[lI1llI(0x257,'10xZ')]['RS_ISV_TOKEN_PROXY_TIME_LIMIT']||lI1llI(0x175,'z]Yb');try{requestDynamicProxyConfig['timeLimit']=parseInt(timeLimit);}catch{requestDynamicProxyConfig[lI1llI(0x1f4,'f@pD')]=0x2710;}requestDynamicProxyConfig['fetchFailContinue']=(process[lI1llI(0x1dc,'oVix')][lI1llI(0x259,'N@2f')]||lI1llI(0x247,'^gxg'))===lI1llI(0x1c8,'bfSy'),console['log'](lI1llI(0x1c9,'%UPt'));}}const globalProxy=process[lI1llI(0x1de,'*d67')][lI1llI(0x1ae,'%UPt')]==='true';if(globalProxy)try{require('global-agent/bootstrap'),console['log']('\x0a===============启用\x20getToken\x20代理池代理(旧)==============\x0a');}catch(iI1lil){console['log'](lI1llI(0x1f2,'!KwG')+iI1lil[lI1llI(0x238,'Qa7(')]);}}catch{}const redisUrl=process[lI1llI(0x1e3,'JW*O')][lI1llI(0x1da,'iX!7')]||'',redisKey=process[lI1llI(0x1d0,'[61H')][lI1llI(0x200,'vK@e')]||'',redisSubmit=!(process['env'][lI1llI(0x18c,'0IRx')]===lI1llI(0x224,'*[3F')),hasRedisKey=/<pt_pin>/[lI1llI(0x187,'N@2f')](redisKey);let redisClient=null;if(redisUrl){let redis=null;try{redis=require(lI1llI(0x1ce,'@Ba!'));}catch(l1lIi1){console['log'](lI1llI(0x1ef,'^gxg')+l1lIi1[lI1llI(0x21b,'Tz0*')]);}if(redis)try{redisClient=redis[lI1llI(0x231,'[61H')]({'url':redisUrl});}catch(iIli1l){console['log'](lI1llI(0x185,'*[3F')+(iIli1l[lI1llI(0x23d,'YqGF')]||iIli1l));}}async function getToken(i1i1II,liiIIl,iil1iI=!![]){const illIil=lI1llI,IlIllI={'bwFsw':function(lI1li1,iI11II){return lI1li1(iI11II);},'NGAku':'jd_lzkj_v2_','OmENx':illIil(0x201,'k(G6'),'kKLdJ':illIil(0x1fb,'@Ba!'),'KSaKm':illIil(0x204,']jSe'),'tnhYP':illIil(0x209,'%UPt'),'XcIrY':function(iIII1I,ilil1i){return iIII1I===ilil1i;},'KCDQT':'ySUmQ','RiLZi':illIil(0x21a,'DhR$'),'QgLaw':illIil(0x1fd,'f@pD'),'zbaoL':function(IlIIi,IiI1l){return IlIIi!==IiI1l;},'MxgHE':illIil(0x216,']jSe'),'XoSQx':illIil(0x1eb,'148)'),'elCxG':function(illlII,iIII11){return illlII===iIII11;},'ezfvz':illIil(0x230,'7Yz5'),'iLXQl':function(IiI1i,llll1){return IiI1i===llll1;},'ehbEN':illIil(0x19a,'@XH)'),'mxlcs':'cjhy','EaxQD':function(lil11l,i1i1Il){return lil11l>i1i1Il;},'mYmfm':function(I1lIl1,lil11i){return I1lIl1!==lil11i;},'VuIws':'RoLJJ','DIVkf':illIil(0x24a,'Fv!&'),'ggdtu':illIil(0x1d9,'Blk&'),'bfNIf':illIil(0x1ad,'iUb['),'uWLVV':illIil(0x245,'*d67'),'IrqJM':illIil(0x1f6,'iUb['),'cdKYl':illIil(0x215,'D1vx'),'WWnaA':illIil(0x22b,'iX!7'),'zMIpE':illIil(0x203,']jSe'),'jewwh':illIil(0x1d3,'m%JJ'),'uBDvx':function(IlIIl,lI1liI){return IlIIl>=lI1liI;},'vJazI':function(i1i1Ii,lllii){return i1i1Ii-lllii;},'DNyXV':function(iI11Ii,iIII1l){return iI11Ii||iIII1l;},'VrcRY':illIil(0x1f0,'[61H'),'kaFhR':'KvXgH','RjMVg':illIil(0x223,'10xZ'),'NxvSE':'aSGjl','jSUFR':function(lllil,iI11Il){return lllil&&iI11Il;},'MYhMM':illIil(0x235,'U60h'),'qobFT':function(iIII1i,iil1i1){return iIII1i(iil1i1);},'bBLbV':function(il1i11,IlIll1){return il1i11+IlIll1;},'zTPPB':illIil(0x23f,'[61H'),'kuSCc':illIil(0x1a1,'aLbt'),'TLujq':function(IlIII,ilil1l){return IlIII>=ilil1l;},'JjMya':function(illlIi,I1lIii){return illlIi===I1lIii;},'wjTQz':illIil(0x1bf,'f@pD')};let il1i1I='';try{if(IlIllI[illIil(0x229,'iUb[')]===IlIllI['KSaKm']){const IiI1I=IlIllI[illIil(0x1c4,'LA0#')](decodeURIComponent,common[illIil(0x24d,'m%JJ')](i1i1II,IlIllI[illIil(0x1db,'Tz0*')]));if(IiI1I){if(IlIllI['XcIrY'](illIil(0x248,'YqGF'),IlIllI[illIil(0x20e,'10xZ')])){if(!scriptName){const IIIl1l=require[illIil(0x194,'U7]j')][illIil(0x1f9,'oRU[')];scriptName=path['basename'](IIIl1l,IlIllI[illIil(0x22a,'*[3F')]);}if(iil1iI){let lllll=[];if(liiIIl['includes'](IlIllI[illIil(0x1c0,'ItYM')])){if(IlIllI[illIil(0x266,'4@Vl')](IlIllI[illIil(0x1e0,'JW*O')],IlIllI[illIil(0x1f8,'U60h')]))iIIl1i['log'](illIil(0x1bb,'@Ba!')+I1lllI[illIil(0x176,'^gxg')]);else{if(scriptName[illIil(0x221,'U60h')](IlIllI[illIil(0x1c5,'U60h')]))lllll=lzkjPinFilter_interaction_v2;else{if(scriptName[illIil(0x1e2,'Fv!&')](IlIllI[illIil(0x1a8,']jSe')]))IlIllI['elCxG'](IlIllI[illIil(0x17f,'*d67')],'elsoc')?(Iillil=l1lIli[illIil(0x1ac,'10xZ')],lIIiiI=!![]):lllll=lzkjPinFilter_interactsaas_and_interaction_v1;else{if(IlIllI['iLXQl'](illIil(0x241,'Qa7('),IlIllI[illIil(0x1d4,'ItYM')]))try{IlIllI[illIil(0x18e,'7Yz5')](i1ilii,illIil(0x205,'JW*O')),iIIII1[illIil(0x1ca,'m%JJ')](illIil(0x1b8,'iX!7'));}catch(iiili1){I1iIiI[illIil(0x244,'U7]j')]('❌\x20getToken\x20代理模块加载失败\x20➜\x20'+iiili1['message']);}else lllll=lzkjPinFilter;}}}}else{if(liiIIl['includes'](IlIllI[illIil(0x17e,'7co(')])){if(IlIllI[illIil(0x202,'%UPt')](illIil(0x232,'JW*O'),illIil(0x265,'7Yz5'))){if(I1ilI1['startsWith'](IlIllI[illIil(0x1af,'Tz0*')]))II1liI=IlI1i1;else II1li1['startsWith'](illIil(0x212,'k(G6'))?l1lIl1=IiiIlI:Iilli1=I1l1Il;}else lllll=cjhyPinFilter;}}if(IlIllI[illIil(0x193,'Bb$q')](lllll[illIil(0x240,')6Wy')],0x0)&&(lllll[illIil(0x249,'aLbt')](IiI1I)||lllll[illIil(0x183,'N@2f')](IlIllI[illIil(0x1a6,'bfSy')](encodeURIComponent,IiI1I)))){if(IlIllI[illIil(0x236,'z]Yb')](IlIllI['VuIws'],IlIllI['DIVkf']))return console[illIil(0x1e8,'Qa7(')](IlIllI[illIil(0x246,'g^E5')]),'';else{const ill11l=II11Ii['_getProxyConfig'](II11Il);ill11l?(lilIlI=ill11l,iIIIIi['log']('\x0a===============启用\x20getToken\x20代理池代理(新)==============\x0a')):iii1I1['log'](IlIllI[illIil(0x186,'m%JJ')]);}}il1i1I=cacheFile[illIil(0x1b7,'Iga3')](IiI1I)||'';if(il1i1I)return il1i1I;if(redisClient){try{await redisClient['connect']();}catch{}try{const I1lIiI=encodeURIComponent(hasRedisKey?redisKey['replace'](/<pt_pin>/g,IiI1I):''+redisKey+IiI1I);il1i1I=await redisClient[illIil(0x25e,'!KwG')](I1lIiI);if(il1i1I)return il1i1I;}catch(lllili){console[illIil(0x1b0,'ItYM')]('🚫\x20getToken\x20Redis缓存异常\x20➜\x20'+(lllili[illIil(0x1df,'Bb$q')]||lllili));}}}}else try{IIII1I=Iii111['createClient']({'url':l1l1II});}catch(Ill11){Ii1iII[illIil(0x214,'oRU[')](illIil(0x1b9,'YqGF')+(Ill11[illIil(0x254,'Fv!&')]||Ill11));}}const illlIl=await common[illIil(0x23c,'aLbt')](IlIllI['bfNIf'],{'url':liiIIl,'id':''});if(!illlIl)return console[illIil(0x1e5,'10xZ')]('🚫\x20getToken\x20签名获取失败'),'';let i11ill=null,IIIIIi=![];if(requestAxiosProxyConfig||requestDynamicProxyConfig){if(requestAxiosProxyConfig)i11ill=requestAxiosProxyConfig;else{if(requestDynamicProxyConfig){if(requestDynamicProxyConfig[illIil(0x1ab,'oRU[')])i11ill=requestDynamicProxyConfig[illIil(0x1fa,'DhR$')],IIIIIi=!![];else{if(IlIllI['mYmfm'](IlIllI[illIil(0x1a7,'f@pD')],'yrJOe')){const liiIII=await common[illIil(0x179,'k(G6')](requestDynamicProxyConfig[illIil(0x227,'iX!7')]),li1i11=common['_getProxyConfig'](liiIII);if(li1i11){const iI11I1=IlIllI['IrqJM'][illIil(0x19b,'TAs*')]('|');let il1i1l=0x0;while(!![]){switch(iI11I1[il1i1l++]){case'0':i11ill=li1i11;continue;case'1':requestDynamicProxyConfig['usedTimes']=0x0;continue;case'2':requestDynamicProxyConfig[illIil(0x181,'@Ba!')]=li1i11;continue;case'3':requestDynamicProxyConfig[illIil(0x1c7,'TAs*')]=Date[illIil(0x1ba,'!KwG')]();continue;case'4':IIIIIi=!![];continue;case'5':console['log'](illIil(0x21e,'148)')+li1i11[illIil(0x1bc,'iUb[')]+':'+li1i11[illIil(0x255,'D1vx')]);continue;}break;}}else{if(!requestDynamicProxyConfig['fetchFailContinue'])return console[illIil(0x217,'0IRx')](IlIllI[illIil(0x23e,'[61H')]),'';}}else liIiI[illIil(0x234,'Fv!&')](l1il1I);}}}}const IIIIIl={'url':illIil(0x24c,'Bb$q'),'method':IlIllI[illIil(0x258,'z]Yb')],'headers':{'Host':IlIllI[illIil(0x228,'7Yz5')],'Content-Type':illIil(0x220,'10xZ'),'User-Agent':common[illIil(0x1d6,'[61H')](IiI1I)||IlIllI[illIil(0x19c,'bfSy')],'Accept-Language':illIil(0x1f7,'Fv!&'),'Accept-Encoding':illIil(0x1b3,'Bb$q'),'J-E-H':common['getJEH'](),'J-E-C':common[illIil(0x1dd,'4@Vl')](IiI1I),'Cookie':i1i1II},'proxy':i11ill,'data':illlIl,'debug':![],'timeout':0xea60},I1lIil=0x2;let IIIl1i=0x0,liiII1=null;while(IIIl1i<I1lIil){if(illIil(0x206,'[B^m')===illIil(0x1ea,'N@2f'))return IilliI;else{const iil1ii=await common['request'](IIIIIl);if(IIIIIi){requestDynamicProxyConfig[illIil(0x21d,'f@pD')]=Date[illIil(0x1e1,'6Z(Z')](),requestDynamicProxyConfig[illIil(0x1d5,')6Wy')]++;const IlIlli=requestDynamicProxyConfig[illIil(0x20a,'oRU[')]>0x0&&requestDynamicProxyConfig[illIil(0x17c,'148)')]>=requestDynamicProxyConfig[illIil(0x237,'Bb$q')],il1i1i=IlIllI[illIil(0x1cb,'^gxg')](requestDynamicProxyConfig[illIil(0x1b2,'[B^m')],0x0)&&IlIllI['uBDvx'](IlIllI[illIil(0x195,'oRU[')](Date[illIil(0x17b,'TAs*')](),requestDynamicProxyConfig[illIil(0x22c,'!KwG')]),requestDynamicProxyConfig[illIil(0x261,'iX!7')]);IlIllI[illIil(0x1b4,'7Yz5')](IlIlli,il1i1i)&&(IlIllI[illIil(0x1a5,'@XH)')]===IlIllI[illIil(0x1a4,'7Yz5')]?(requestDynamicProxyConfig[illIil(0x188,'YqGF')]=null,requestDynamicProxyConfig['lastUseTimeStamp']=null,requestDynamicProxyConfig['extractTimestamp']=null,requestDynamicProxyConfig['usedTimes']=0x0):IIlil=ilI1lI);}if(!iil1ii[illIil(0x18b,'^gxg')]){if(illIil(0x25d,'g^E5')===IlIllI[illIil(0x222,'*d67')]){liiII1=illIil(0x207,'Bb$q')+iil1ii[illIil(0x1e6,'7Yz5')],IIIl1i++;continue;}else return l1llII['log'](IlIllI[illIil(0x1d2,'iUb[')]),IilIll[illIil(0x174,'Bb$q')](lI11Ii),Iiill;}if(!iil1ii[illIil(0x23b,'aLbt')]){liiII1=IlIllI[illIil(0x20b,'Blk&')],IIIl1i++;continue;}try{if(IlIllI[illIil(0x239,'Blk&')](IlIllI[illIil(0x243,'f@pD')],illIil(0x252,'148)')))l1l11I[illIil(0x263,'TAs*')](illIil(0x264,'oVix')+lilIl['stringify'](IilIlI));else{const llllI=iil1ii[illIil(0x1aa,'0IRx')];if(llllI['code']==='0'){il1i1I=llllI['token'],cacheFile[illIil(0x192,'N@2f')](IiI1I,il1i1I,cacheDefaultTTL);if(IlIllI[illIil(0x18d,'*[3F')](redisClient,redisSubmit)){try{IlIllI[illIil(0x1a0,'148)')](IlIllI[illIil(0x1fe,'YqGF')],IlIllI['MYhMM'])?I1i11i=I1i11l:await redisClient[illIil(0x198,'@XH)')]();}catch{}const lllil1=IlIllI[illIil(0x25f,'%UPt')](encodeURIComponent,hasRedisKey?redisKey[illIil(0x25a,'Blk&')](/<pt_pin>/g,IiI1I):''+redisKey+IiI1I),iil1il=il1i1I,ilil1I=Math['floor'](IlIllI[illIil(0x1b5,'k(G6')](Date[illIil(0x219,'m%JJ')](),cacheDefaultTTL)/0x3e8);try{await redisClient['set'](lllil1,iil1il),await redisClient[illIil(0x1ee,'Qa7(')](lllil1,ilil1I);}catch(ii1iiI){console['log'](illIil(0x178,'Blk&')+(ii1iiI[illIil(0x25b,'^N*x')]||ii1iiI));}}}else{if(llllI[illIil(0x1cc,'U7]j')]==='3'&&IlIllI['XcIrY'](llllI['errcode'],0x108))IlIllI['zbaoL'](IlIllI[illIil(0x18f,'Qa7(')],IlIllI[illIil(0x1bd,'JW*O')])?(lI1Il1=lilIi1,IiilII[illIil(0x17a,'N@2f')]('\x0a===============启用\x20getToken\x20代理池代理(新)==============\x0a')):console['log'](illIil(0x25c,']jSe'));else{if(illIil(0x253,'iX!7')===IlIllI[illIil(0x24f,'oVix')])console['log'](illIil(0x196,'10xZ')+JSON['stringify'](llllI));else return llIliI[illIil(0x251,'oVix')](illIil(0x1ed,'z]Yb')),'';}}}}catch(illlI1){console['log'](illIil(0x18a,'U60h')+(illlI1[illIil(0x24e,')6Wy')]||illlI1));}break;}}return IlIllI[illIil(0x20c,'*d67')](IIIl1i,I1lIil)&&console[illIil(0x267,'Iga3')](liiII1),il1i1I;}else l1lIll[illIil(0x211,'@XH)')]('🚫\x20getToken\x20Redis缓存异常\x20➜\x20'+(I1l1II[illIil(0x197,'vK@e')]||IIli1I));}catch(I1lIi1){return console['log']('🚫\x20getToken\x20在处理请求时遇到了错误'),console['log'](I1lIi1),il1i1I;}finally{if(redisClient)try{IlIllI['JjMya'](IlIllI[illIil(0x1a9,'Fv!&')],IlIllI[illIil(0x256,'7co(')])?await redisClient[illIil(0x190,'4@Vl')]():(ll1l1[illIil(0x1b6,'anHb')]=IllIIi['now'](),IllIIl[illIil(0x184,'aLbt')]=0x0,IiiIi1[illIil(0x22f,'vK@e')]=l1ii1,ii1ll=IliI1l,lliiil[illIil(0x17d,'YqGF')]('刷新Token代理IP：'+lliiii['host']+':'+IliI1i['port']),ll1ii=!![]);}catch{}}}module[lI1llI(0x1c6,'10xZ')]=getToken;var version_ = 'jsjiami.com.v7';