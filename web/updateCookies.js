const fs = require("fs");
const vm = new Env('更新Cookies');

//Node.js用户请在jdCookie.js处填写京东ck;
const jdCookieNode = vm.isNode() ? require('../utils/jdCookie.js') : '';
//IOS等用户直接用NobyDa的jd cookie
let cookiesArr = [];
if (vm.isNode()) {
    Object.keys(jdCookieNode).forEach((item) => {
        cookiesArr.push(jdCookieNode[item])
    })
    if (process.env.JD_DEBUG && process.env.JD_DEBUG === 'false') console.log = () => {
    };
} else {
    cookiesArr = [vm.getdata('CookieJD'), vm.getdata('CookieJD2'), ...jsonParse(vm.getdata('CookiesJD') || "[]").map(item => item.cookie)].filter(item => !!item);
}
if (cookiesArr.length === 0) {
    vm.msg(vm.name, '未设置cookies,停止更新cookies');
    return;
}

let globalOptions = {
    message: '',
    clientVersion: "10.1.4",
    successCount: 0,
    accountsList: [],
    signJsonFileCount: 50,
    signList: [],
    signServerUrl: "",
}
const globalConfig = {
    configShPath: "../config/config.sh",
    accountPath: "../config/account.json",
    signPath: "../utils/sign/",
    UA: `okhttp/3.12.1;jdmall;android;version/${globalOptions.clientVersion};build/89743;screen/1080x2206;os/11;network/wifi;`,
}



const loadAccount = () => {
    try {
        fs.accessSync(globalConfig.accountPath)
        globalOptions.accountsList = JSON.parse(fs.readFileSync(globalConfig.accountPath).toString())
    } catch (e) {
    }
}
const loadLocalSign = () => {
    let signFile = `${globalConfig.signPath}${(Math.floor(Math.random() * (globalOptions.signJsonFileCount - 1)) + 1)}.json`;
    try {
        fs.accessSync(signFile)
        globalOptions.signList = JSON.parse(fs.readFileSync(signFile).toString())
    } catch (e) {
        console.log("签名文件加载失败")
    }
}

const checkCookie = (cookie) => {
    //console.log(ws_Key,pt_pin,sign)
    const options = {
        url: `https://bean.m.jd.com/bean/signIndex.action`,
        headers: {
            Host: 'api.m.jd.com',
            Cookie: cookie,
            accept: '*/*',
            referer: '',
            'User-Agent': globalConfig.UA,
        }
    };
    return new Promise((resolve, reject) => {
        vm.get(options, (err, resp, data) => {
            resolve(resp.status !== 302)
        });
    });
}

///----------------------
var iｉl='jsjiami.com.v6',i1l1i=[iｉl,'UMK6ccOxwqpAL3ox','wqsmSA==','wpzDtsOd','PEvCiXA=','YmLCtsKDJA==','wrTDgyTCqMOBeA==','XkDDq2UkRw==','CMOQwpTCmw==','wrRcMg==','fMK0SCjDoGI=','XMO8FcKOw7bCvg==','VgvCjA42','NcOWTGzCmw==','w7UKw5gTDcKM','w57CgW3DvCXDiA==','JS5LWQ==','LMKCw4TCsDc=','FsOWwpfCkH7CqlXCpA==','T8Kcw6gqwozCuQ==','w6tCPwjCnsOg','wo7Dmg/DqsOZ','S1Ajw6AGbg==','wp3DisKuw5MNwro=','w5nDisKow7zCgDE=','VcKZw6N1w7HCmcOrw4Q=','LMOWwpnCknvCig==','RsO1CMOqw5zCuCjDqsKhVQTDlsKmwq/Ct3TCvA==','w4/CngnDtAlp','dnPDlC4=','TEXDuXo5VknChg/DvkzCmU7DhMONw7t9PmbDu0vCqsK9OsK+woDDpGDDqMKzXAXChg==','wpBtKnzCiDhTwpfCqmxVZsKyA8O0HHvCvUI+wrlbw40Vd8KtEsOlZWbDhcKVw7g=','wrDCqcOXQ8Kuwq8=','AsOawoQ=','w5nDisKow7zCgGk=','DMKOwpnCkl7Crw==','A8O0JcKowqPCsg==','b8KZw6gqw7TDgQ==','wqMKKj/CnEE=','c3PDlHZuwr4=','LAQ5','JOeuq+WSveiuo+azo+WkgOi1je+/j+ivjOerhOWStOWHgOivng==','XMKUbVDDoGI=','MMKOFEk=','UcOYYsOxw7/DhA==','wqnCj8KPG8O1Qg==','ScKtw4DDsEsX','w74sbsOnwqbCpg==','w43ClgjDmA==','wrTDhALDkcKww50=','YsK6w4IRw4BSAA==','DMO+JMOGw70=','wp98N3U=','w6tINirCmMO6','Rz/Ck8KDAcK4','wrfDghnCsMOQcwU=','cMKQwq7Cqmcn','w5EsM8O6worDpQ==','w5PClhfDjgU=','wrjDj8Krw7MNwpo=','w57CgWjDuQ==','BXbDngFaZA==','5oyG5YyU6LGm55aV6ZW56K63','wqbDhi/DtcOYJFLDpsOywpI1JQ==','w5sycA==','wpJxM3XCjy9kwobCsXBSJsK2','T1zCgyFWY8O7w49LwrFQw63DnsKVWcKE','VsKyLjTCnVvDrA==','NcOTNEnDhsON','Sn7Cj8OeIcKSYFYIwrXCh0R2w7w3UAopEE/Dr8OEXsKaYyXCjAMrCcKZw5cbw44=','5o6l5YyH6LOy55ep6ZSb6K6x','NsKKwpnCjBs=','wp0sNiHCqGo=','w6tOPSbChsOk','wrc7w5pgwrTCtw==','cS9+w78=','bcKcw7k4wpB4','LMO+BMOGw7h/','T8KHMsORwqhL','ScOVwpjCiG43','cwvCjA4zwp4=','XCIxFg4=','wo3DnDTDiMK1w7o=','wosAVMOaXVk=','LMOTwpnCl17Cig==','BMO0FBbDiQ==','O14lAyAd','bCU8csKnwojDtE9V','aMKcw7k9w414','Z8KBwoXCh3cyw5V1w5LCocKi','Rh50bsK6w5Y=','wqvChyrCksOZQw==','Z8KBwoXCjG0ww41E','wrPDmRXCr8OHY1bDpQ==','QHIvLAc4','wrTCm2lUOEXCrg==','dMKLwqLCtXA3w5dL','wo7Dny/CksOZOw==','GHh9XA==','w5fCmDbDiRIxeMKz','GUQk','wpc9A8OT','KcKXw5rCrDwGwrx3w4g=','KHrCvA==','AMORwpM=','WcOZNcKuw5PDpg==','w4TDhWbDoz3Ciw==','bcKLwpXCpA==','eMOSEQ==','wonDucOa','ecO9w6ooXA==','wrhUa3zCiBI=','wqwhw6lCwr3Cog==','WcOiw5YrAsO5','ScKIwrjDsGtv','fyMacsK6wok=','w45uYCbChg==','WGvCi8KfK8KebkkIwr/DhBtvwqMzQg8=','wpZEWMK6AcOK','DMO2wrnCkgPCqg==','wphUE1nCqGo=','w64WPQM=','FUYrw4LDrXs=','CQc3woBzZA==','BMKMFBbCsUs=','w69Sw5YRN8KFLMKrwqfCoVYuwo4=','d8K8w5c6w7JUGsK1XsK7w68/Zw==','DMO+JMOGw50=','WcO5EMKOw5PCng==','wpDCqcOSZg==','wqJRORA6','fMOMbVDDhRo=','csKFwp/CpW0z','w7UKw5gTDcKp','c8KNwpbCr1E7w4taw5LCssKFTgY=','wqDDkzI=','ScK1A8O0fMOd','SMKRw6l+','ZcKJXgrDjCo=','SUUSw7QAbQ==','W8OxEcKi','wofDgsKuw68B','w4DCj8Kew7vCiXnCqA==','wqsmw6lCwr3Cog==','w7zCs8OGwosEwosTEw==','NsKKw4TCjDso','woYMfA==','wrTDnyHCtcOmb0rDtMK5woMPOsOu','SeetgeWTouiuv+axseWkvOi2qu+/vuivneerkuWQuuWEkuitpA==','BMO0MW7ClEs=','w57CgW3DvCDCkA==','wqMKcjrCnGE=','ZkrDig==','wqDDkzLCncOAZlTDm8K5wpAo','wo7CqsObwrg9wo4=','LcOqw7oiw5hiw7F2','NwxPFRPCk8OXfA==','GGXDjzvCtA8zSQ==','KQI3w5hWOQ==','AEPCrQbCry8=','PsOaCWjDhcOqNGs=','Z8OhHsO5dMOFDw==','BMO0MRY=','wq7DnzTDjw==','HVDCvDxBZMOhwpU=','F3l3','wq9ZUsOL','jsnjZOiaZBmiA.cBBomt.vrfh6CxAbU=='];(function(_0x3dfa34,_0x20b79c,_0x3ebd5d){var _0x2ab61d=function(_0x507947,_0x14e007,_0x3333ba,_0x475f98,_0x33264b){_0x14e007=_0x14e007>>0x8,_0x33264b='po';var _0xec6e60='shift',_0x191c63='push';if(_0x14e007<_0x507947){while(--_0x507947){_0x475f98=_0x3dfa34[_0xec6e60]();if(_0x14e007===_0x507947){_0x14e007=_0x475f98;_0x3333ba=_0x3dfa34[_0x33264b+'p']();}else if(_0x14e007&&_0x3333ba['replace'](/[nZOZBABBtrfhCxAbU=]/g,'')===_0x14e007){_0x3dfa34[_0x191c63](_0x475f98);}}_0x3dfa34[_0x191c63](_0x3dfa34[_0xec6e60]());}return 0xa7201;};return _0x2ab61d(++_0x20b79c,_0x3ebd5d)>>_0x20b79c^_0x3ebd5d;}(i1l1i,0x119,0x11900));var Iil1Il=function(_0x14e22b,_0x27127f){_0x14e22b=~~'0x'['concat'](_0x14e22b);var _0xf86416=i1l1i[_0x14e22b];if(Iil1Il['i11I1l']===undefined){(function(){var _0x10816a;try{var _0x4978a7=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');');_0x10816a=_0x4978a7();}catch(_0x60f76){_0x10816a=window;}var _0x5968c6='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x10816a['atob']||(_0x10816a['atob']=function(_0x1b12a0){var _0x50eea4=String(_0x1b12a0)['replace'](/=+$/,'');for(var _0x38d613=0x0,_0x223bb1,_0x438ce6,_0x1ef82d=0x0,_0x474ad9='';_0x438ce6=_0x50eea4['charAt'](_0x1ef82d++);~_0x438ce6&&(_0x223bb1=_0x38d613%0x4?_0x223bb1*0x40+_0x438ce6:_0x438ce6,_0x38d613++%0x4)?_0x474ad9+=String['fromCharCode'](0xff&_0x223bb1>>(-0x2*_0x38d613&0x6)):0x0){_0x438ce6=_0x5968c6['indexOf'](_0x438ce6);}return _0x474ad9;});}());var _0x23e182=function(_0x3940b3,_0x27127f){var _0x35289a=[],_0x55e25d=0x0,_0x2fc920,_0x29fa2c='',_0x3e2fdf='';_0x3940b3=atob(_0x3940b3);for(var _0x2597fd=0x0,_0x53e1db=_0x3940b3['length'];_0x2597fd<_0x53e1db;_0x2597fd++){_0x3e2fdf+='%'+('00'+_0x3940b3['charCodeAt'](_0x2597fd)['toString'](0x10))['slice'](-0x2);}_0x3940b3=decodeURIComponent(_0x3e2fdf);for(var _0x324af0=0x0;_0x324af0<0x100;_0x324af0++){_0x35289a[_0x324af0]=_0x324af0;}for(_0x324af0=0x0;_0x324af0<0x100;_0x324af0++){_0x55e25d=(_0x55e25d+_0x35289a[_0x324af0]+_0x27127f['charCodeAt'](_0x324af0%_0x27127f['length']))%0x100;_0x2fc920=_0x35289a[_0x324af0];_0x35289a[_0x324af0]=_0x35289a[_0x55e25d];_0x35289a[_0x55e25d]=_0x2fc920;}_0x324af0=0x0;_0x55e25d=0x0;for(var _0x3b42bb=0x0;_0x3b42bb<_0x3940b3['length'];_0x3b42bb++){_0x324af0=(_0x324af0+0x1)%0x100;_0x55e25d=(_0x55e25d+_0x35289a[_0x324af0])%0x100;_0x2fc920=_0x35289a[_0x324af0];_0x35289a[_0x324af0]=_0x35289a[_0x55e25d];_0x35289a[_0x55e25d]=_0x2fc920;_0x29fa2c+=String['fromCharCode'](_0x3940b3['charCodeAt'](_0x3b42bb)^_0x35289a[(_0x35289a[_0x324af0]+_0x35289a[_0x55e25d])%0x100]);}return _0x29fa2c;};Iil1Il['lil']=_0x23e182;Iil1Il['IllI1l']={};Iil1Il['i11I1l']=!![];}var _0x196b64=Iil1Il['IllI1l'][_0x14e22b];if(_0x196b64===undefined){if(Iil1Il['i11I1i']===undefined){Iil1Il['i11I1i']=!![];}_0xf86416=Iil1Il['lil'](_0xf86416,_0x27127f);Iil1Il['IllI1l'][_0x14e22b]=_0xf86416;}else{_0xf86416=_0x196b64;}return _0xf86416;};const l1lIl1=()=>{var IiiIlI={'i1ll':function(Iilli1,I1l1Il){return Iilli1+I1l1Il;},'i1l1lI':function(llIll1,Illl1l){return llIll1*Illl1l;},'i1iliI':function(Illl1i,lIIiil){return Illl1i-lIIiil;},'i1l11':'iIIIIl','i1l1li':function(l1lIii,I11iI1){return l1lIii!==I11iI1;},'i1ilii':Iil1Il('0','!qnN'),'iIIII1':function(l1lIil,IiiIli){return l1lIil(IiiIli);},'iIIl1i':Iil1Il('1','bi$J'),'I1lllI':function(iillli,I1l1Ii){return iillli>I1l1Ii;},'ill111':function(I1i11i,I1i11l){return I1i11i+I1i11l;},'Iliil1':function(llIlii,llIlil){return llIlii+llIlil;},'i1III':function(IIlil,ilI1lI){return IIlil!==ilI1lI;},'Ii1iIi':function(IiiIll,IIlii){return IiiIll*IIlii;},'iliIIl':Iil1Il('2','UKvv'),'Ii1iIl':function(IlI1il,IilliI){return IlI1il===IilliI;},'iliIIi':'II1Ii','ill11I':function(IlI1ii,lIIiii){return IlI1ii-lIIiii;}};return new Promise(iI1lli=>{var ll1iI={'I1iIil':IiiIlI[Iil1Il('3','fK87')],'lI1Iil':function(iI1lll,l1lIll){return IiiIlI['iIIII1'](iI1lll,l1lIll);},'lilIiI':function(I1l1II,IIli1I){return IiiIlI[Iil1Il('4','$!t0')](I1l1II,IIli1I);},'IiilIi':'crypto-js','IiilIl':function(I1i11I,llIliI){return IiiIlI['I1lllI'](I1i11I,llIliI);},'iii1Ii':function(I1l1I1,I1i111){return I1l1I1+I1i111;},'iii1Il':function(ilI1li,IIliI){return IiiIlI[Iil1Il('5','!qnN')](ilI1li,IIliI);},'lI1IiI':function(ilI1ll,Iillii){return IiiIlI[Iil1Il('6','8a7X')](ilI1ll,Iillii);},'i1lI':function(IlI1iI,Iillil){return IiiIlI[Iil1Il('7','tXHz')](IlI1iI,Iillil);},'IlI1l':function(l1lIli,lIIiiI){return IiiIlI['Iliil1'](l1lIli,lIIiiI);},'li1I1':function(II1lil,IIli1l){return IiiIlI['i1III'](II1lil,IIli1l);},'i1ilil':Iil1Il('8','5bJ3'),'lilIii':function(II1lii,lIIii1){return IiiIlI['Ii1iIi'](II1lii,lIIii1);},'i1ill1':function(ll1i1,IIli1i){return ll1i1-IIli1i;}};if(globalOptions[Iil1Il('9','TXJs')]&&IiiIlI['i1III'](globalOptions[Iil1Il('a','Mp$4')],'')){if(IiiIlI[Iil1Il('b','euZ6')](Iil1Il('c','bU2R'),IiiIlI['iliIIl'])){return IiiIlI[Iil1Il('d','6XDQ')](Math[Iil1Il('e','uPH5')](IiiIlI[Iil1Il('f','xbuU')](Math[Iil1Il('10','0hE4')](),IiiIlI[Iil1Il('11','TXJs')](max,min))),min);}else{const lliil1={'url':globalOptions[Iil1Il('12','0hE4')],'timeout':0x2710};vm[Iil1Il('13','dE9x')](lliil1,async(IIllI,lliilI,lili1)=>{try{if(IIllI){if('IlI11'===IiiIlI['i1l11']){try{const Iii11l=require(ll1iI[Iil1Il('14','STO(')]);const iii1II=Iii11l(response);const Iil1Ii={};iii1II['filter'](I1iIlI=>I1iIlI[Iil1Il('15','G(03')]===Iil1Il('16','xbuU')||I1iIlI['name']===Iil1Il('17','kjHE'))['forEach'](iIIIII=>{Iil1Ii[iIIIII[Iil1Il('18','bU2R')]]=iIIIII[Iil1Il('19','D]8L')];});ll1iI['lI1Iil'](iI1lli,Iil1Il('1a','Yf1!')+Iil1Ii[Iil1Il('1b','LKJ3')]+Iil1Il('1c','e4qa')+pt_pin+';');}catch(IliI1l){ll1iI[Iil1Il('1d','Wx[L')](iI1lli,'');}}else{console[Iil1Il('1e','Zicb')](globalOptions[Iil1Il('1f','dE9x')]+Iil1Il('20','TZ[e'));}}}catch(lliiil){if(IiiIlI[Iil1Il('21','5bJ3')]('II1Il',IiiIlI[Iil1Il('22','oqKZ')])){const IlI1I=require(ll1iI[Iil1Il('23','Zicb')]);let II11Ii=new Date();let II11Il=IlI1I[Iil1Il('24','bi$J')]([II11Ii[Iil1Il('25','dE9x')](),ll1iI[Iil1Il('26','e4qa')](II11Ii[Iil1Il('27','NLk4')]()+0x1,0x9)?ll1iI['iii1Ii'](II11Ii[Iil1Il('28','eTc0')](),0x1)[Iil1Il('29','6YfZ')]():ll1iI[Iil1Il('2a','tXHz')]('0',ll1iI[Iil1Il('2b','6YfZ')](II11Ii[Iil1Il('2c','l#of')](),0x1)),II11Ii[Iil1Il('2d','STO(')]()>0x9?II11Ii['getDate']()['toString']():ll1iI[Iil1Il('2e','5bJ3')]('0',II11Ii['getDate']())][Iil1Il('2f','jU5Z')]('-'))[Iil1Il('30','TZ[e')]();return IlI1I[Iil1Il('31','Gp@a')][Iil1Il('32','UKvv')][Iil1Il('33','j5*u')](IlI1I[Iil1Il('34','Zicb')]['decrypt'](sign,IlI1I[Iil1Il('35','6XDQ')][Iil1Il('36','TZ[e')]['parse'](ll1iI[Iil1Il('37','bi$J')](II11Il['substr'](0x1,0x4)+II11Il[Iil1Il('38','dE9x')](0x7,0x4),II11Il[Iil1Il('39','Lo[V')](0x10,0x8))),{'mode':IlI1I[Iil1Il('3a','fK87')]['ECB'],'padding':IlI1I[Iil1Il('3b','uPH5')]['Pkcs7']}));}else{vm['logErr'](lliiil,lliilI);}}finally{IiiIlI[Iil1Il('3c','xbuU')](iI1lli,lili1);}});}}else{if(IiiIlI['Ii1iIl'](IiiIlI[Iil1Il('3d','bU2R')],Iil1Il('3e','ABrJ'))){let IllIII=(ii1li,IIll1)=>{if(ll1iI[Iil1Il('3f','l#of')](ll1iI[Iil1Il('40','TXJs')],'iii1I1')){return Math['floor'](ll1iI['lilIii'](Math['random'](),ll1iI[Iil1Il('41','oqKZ')](IIll1,ii1li)))+ii1li;}else{ck[o[Iil1Il('42','BH@a')]]=o[Iil1Il('43','Wx[L')];}};iI1lli(globalOptions[Iil1Il('44','fK87')][IllIII(0x0,IiiIlI[Iil1Il('45','G(03')](globalOptions['signList'][Iil1Il('46','!qnN')],0x1))]);}else{let I1lli1=(IlI1i,Iii11i)=>{return ll1iI[Iil1Il('47','dE9x')](Math['floor'](ll1iI['lilIii'](Math[Iil1Il('48','kjHE')](),Iii11i-IlI1i)),IlI1i);};ll1iI[Iil1Il('49','D]8L')](iI1lli,globalOptions['signList'][I1lli1(0x0,ll1iI[Iil1Il('4a','Yf1!')](globalOptions[Iil1Il('4b','G(03')]['length'],0x1))]);}}});};const Illl1I=(lliiiI,lilil)=>{var ll1ll={'l1l1II':function(Illl11,ii1lI){return Illl11(ii1lI);},'Iil1I1':function(I1ilIl,I11iII){return I1ilIl===I11iII;},'Ii1iII':Iil1Il('4c','fK87'),'l1i11I':'IliI1I','II11II':Iil1Il('4d','bU2R'),'Ii1iI1':function(I1ilIi,IiiiI){return I1ilIi===IiiiI;},'lilIli':Iil1Il('4e','2TNS'),'Iliill':Iil1Il('4f','ABrJ'),'IIII11':Iil1Il('50','Lo[V'),'i1illi':Iil1Il('51','$!t0'),'i1illl':'zh-cn'};return new Promise((llIlli,llIlll)=>{var lliii1={'I1lll1':ll1ll['Iliill'],'i1IIi':Iil1Il('52','6XDQ')};vm[Iil1Il('53','fK87')]({'url':'https://un.m.jd.com/cgi-bin/app/appjmp?tokenKey='+lilil+'&to=https%3A%2F%2Fhome.m.jd.com%2FmyJd%2Fnewhome.action','method':'GET','headers':{'Content-Type':ll1ll['IIII11'],'Accept':ll1ll[Iil1Il('54','Yf1!')],'Accept-Language':ll1ll[Iil1Il('55','fK87')],'User-Agent':globalConfig['UA']},'followRedirect':![]},async function(Iiii1,lIIili,IiiIil){var IiiIii={'Iliiii':function(IIlll,liliI){return ll1ll[Iil1Il('56','&n^p')](IIlll,liliI);}};if(ll1ll[Iil1Il('57','G(03')](ll1ll[Iil1Il('58','Zicb')],ll1ll[Iil1Il('59','ABrJ')])){console[Iil1Il('5a','tXHz')](globalOptions['signServerUrl']+Iil1Il('5b','Mp$4'));}else{try{if(ll1ll[Iil1Il('5c','xbuU')](Iil1Il('5d','l#of'),Iil1Il('5e','jawS'))){IiiIii['Iliiii'](llIlll,err);}else{const IIlli=ll1ll[Iil1Il('5f','SMD]')](require,ll1ll[Iil1Il('60','0hE4')]);const l1iil=IIlli(lIIili);const ii1l1={};l1iil[Iil1Il('61','IBAN')](lIIill=>lIIill[Iil1Il('62','2TNS')]==='pt_key'||lIIill['name']===Iil1Il('63','jU5Z'))[Iil1Il('64','Mp$4')](I11iIi=>{if(lliii1['I1lll1']!==lliii1[Iil1Il('65','euZ6')]){ii1l1[I11iIi[Iil1Il('66','$!t0')]]=I11iIi['value'];}else{vm[Iil1Il('67','!qnN')](e,resp);}});ll1ll[Iil1Il('68','bi$J')](llIlli,Iil1Il('69','dE9x')+ii1l1[Iil1Il('6a','0hE4')]+';pt_pin='+lliiiI+';');}}catch(I11iIl){if(ll1ll[Iil1Il('6b','IBAN')](ll1ll['lilIli'],ll1ll['lilIli'])){llIlli('');}else{const i1l1l1=JSON[Iil1Il('6c','2TNS')](data);IiiIii[Iil1Il('6d','D]8L')](llIlli,i1l1l1);}}}});});};const l1iIi=(l1l11i,l1iIl,illIll)=>{var iIli1I={'iIIl1I':function(Iiil1,iiilli){return Iiil1(iiilli);},'I1iIli':function(l1iIIl,iiilll){return l1iIIl===iiilll;},'lI1Ill':Iil1Il('6e','oqKZ'),'lI1Ili':Iil1Il('6f','TZ[e'),'IliilI':function(lI11Il,lIII1i){return lI11Il(lIII1i);},'i1II1':Iil1Il('70','2TNS'),'l1l1I1':'li1II','I1lliI':Iil1Il('71','dE9x'),'llIllI':Iil1Il('72','$!t0')};const l11i11={'url':'https://api.m.jd.com/client.action?functionId=genToken&body=%7B%22to%22%3A%22https%253a%252f%252fplogin.m.jd.com%252fjd-mlogin%252fstatic%252fhtml%252fappjmp_blank.html%22%7D&clientVersion='+globalOptions[Iil1Il('73','$!t0')]+Iil1Il('74','TZ[e')+illIll,'headers':{'Host':iIli1I['I1lliI'],'Cookie':'pin='+l1iIl+Iil1Il('75','5bJ3')+l1l11i+';','accept':iIli1I[Iil1Il('76','l#of')],'referer':'','User-Agent':globalConfig['UA'],'Content-Type':Iil1Il('77','bi$J')}};return new Promise((IilIl1,lIII1l)=>{var l1iIIi={'lilIll':function(lilIi,l1l11I){return lilIi(l1l11I);},'l1i111':Iil1Il('78','0hE4')};if(Iil1Il('79','Wx[L')!==iIli1I[Iil1Il('7a','$!t0')]){try{const IIII1l=JSON['parse'](data);l1iIIi[Iil1Il('7b','!qnN')](IilIl1,IIII1l);}catch(iIli11){l1iIIi[Iil1Il('7c','LKJ3')](lIII1l,l1iIIi['l1i111']);}}else{vm[Iil1Il('7d','w]9#')](l11i11,(Iiiil,Iiiii,l11i1I)=>{var IiII={'II11I1':function(llIIli,lIII1I){return iIli1I[Iil1Il('7e','Mp$4')](llIIli,lIII1I);}};if(iIli1I[Iil1Il('7f','euZ6')](iIli1I['lI1Ill'],iIli1I[Iil1Il('80','j5*u')])){if(!Iiiil){try{if(iIli1I[Iil1Il('81','0hE4')](iIli1I[Iil1Il('82','ABrJ')],iIli1I['lI1Ili'])){const illIlI=JSON[Iil1Il('83','A!O]')](l11i1I);iIli1I[Iil1Il('84','jU5Z')](IilIl1,illIlI);}else{IiII[Iil1Il('85','oa#%')](IilIl1,'');}}catch(l1il1I){iIli1I[Iil1Il('86','fK87')](lIII1l,iIli1I[Iil1Il('87','5bJ3')]);}}else{lIII1l(Iiiil);}}else{IiII[Iil1Il('88','Gp@a')](IilIl1,l11i1I);}});}});};const IilIli=li1=>{var illIl1={'iillll':function(l1llII,IilIll){return l1llII(IilIll);},'lIIilI':Iil1Il('89','b]M%'),'II1li1':function(lI11Ii,Iiill){return lI11Ii>Iiill;},'l1lIlI':function(l11i1i,lI11I1){return l11i1i+lI11I1;},'IiiIl1':function(l1il11,IiI1){return l1il11+IiI1;},'lIIil1':function(liI,illIli){return liI+illIli;}};const l11i1l=illIl1['iillll'](require,illIl1[Iil1Il('8a','Mp$4')]);let lIII11=new Date();let IiilI=l11i1l['MD5']([lIII11[Iil1Il('8b','0hE4')](),illIl1[Iil1Il('8c','b]M%')](lIII11['getMonth']()+0x1,0x9)?illIl1[Iil1Il('8d','dE9x')](lIII11[Iil1Il('8e','0hE4')](),0x1)[Iil1Il('8f','dE9x')]():'0'+illIl1[Iil1Il('90','A!O]')](lIII11['getMonth'](),0x1),lIII11['getDate']()>0x9?lIII11[Iil1Il('91','aQ(T')]()[Iil1Il('92','0hE4')]():illIl1[Iil1Il('93','dE9x')]('0',lIII11['getDate']())][Iil1Il('94','Gp@a')]('-'))[Iil1Il('95','2TNS')]();return l11i1l[Iil1Il('96','8a7X')][Iil1Il('97','oa#%')][Iil1Il('98','Wx[L')](l11i1l[Iil1Il('99','TZ[e')]['decrypt'](li1,l11i1l[Iil1Il('9a','fK87')]['Utf8']['parse'](illIl1[Iil1Il('9b','bU2R')](IiilI['substr'](0x1,0x4)+IiilI[Iil1Il('9c','oqKZ')](0x7,0x4),IiilI[Iil1Il('38','dE9x')](0x10,0x8))),{'mode':l11i1l[Iil1Il('9d','0hE4')][Iil1Il('9e','jawS')],'padding':l11i1l[Iil1Il('9f','6XDQ')][Iil1Il('a0',')YF^')]}));};const getCkByWsKey=async ii1I11=>{var liIi1={'II1liI':function(lI11II){return lI11II();},'IlI1i1':function(l1llI1,llIIll,IillIi){return l1llI1(llIIll,IillIi);}};let lii=await liIi1[Iil1Il('a1','$!t0')](l1lIl1);const IllI1i=await l1iIi(ii1I11[Iil1Il('a2','LKJ3')],ii1I11[Iil1Il('a3',')YF^')],IilIli(lii));return await liIi1[Iil1Il('a4','0hE4')](Illl1I,ii1I11[Iil1Il('a5','b]M%')],IllI1i['tokenKey']);};;iｉl='jsjiami.com.v6';
///----------------------

const pre = () => {
    if (process.env.SIGN_SERVER_URL && process.env.SIGN_SERVER_URL !== "") {
        globalOptions.signServerUrl = process.env.SIGN_SERVER_URL;
    }
    if (!globalOptions.signServerUrl || globalOptions.signServerUrl === "") {
        loadLocalSign();
    }
    loadAccount();
}
const updateLocalCookie = (cookie) => {
    fs.accessSync(globalConfig.configShPath)
    const content = fs.readFileSync(globalConfig.configShPath, 'utf8').toString();
    const lines = content.split('\n');
    const pt_pin = cookie.match(/pt_pin=.+?;/)[0];
    let lastIndex = 0;
    let maxCookieCount = 0;
    let updateFlag = false;
    let success = false;
    for (var i = 0; i < lines.length; i++) {
        var line = lines[i];
        if (line.startsWith('Cookie')) {
            maxCookieCount = Math.max(
                Number(line.split('=')[0].split('Cookie')[1]),
                maxCookieCount
            );
            lastIndex = i;
            if (line.match(/pt_pin=.+?;/) && line.match(/pt_pin=.+?;/)[0] === pt_pin) {
                const head = line.split('=')[0];
                lines[i] = [head, '=', '"', cookie, '"'].join('');
                let lineNext = lines[i + 1];
                updateFlag = true;
                if (
                    lineNext.match(/上次更新：/)
                ) {
                    const bz = lineNext.split('备注：')[1];
                    lines[i + 1] = ['## ', pt_pin, ' 上次更新：', new Date().toLocaleDateString(), ' 备注：', bz ? bz : '暂无备注'].join('');
                } else {
                    const newLine = ['## ', pt_pin, ' 上次更新：', new Date().toLocaleDateString(), ' 备注：', "暂无备注"].join('');
                    lines.splice(lastIndex + 1, 0, newLine);
                }
                success = true;
            }
        }
    }
    let CookieCount = Number(maxCookieCount) + 1;
    if (!updateFlag) {
        lastIndex++;
        let newLine = [
            'Cookie',
            CookieCount,
            '=',
            '"',
            cookie,
            '"',
        ].join('');
        //提交备注
        lines.splice(lastIndex + 1, 0, newLine);
        newLine = ['## ', pt_pin, ' 上次更新：', new Date().toLocaleDateString(), ' 备注：', '暂无备注'].join('');
        lines.splice(lastIndex + 2, 0, newLine);
    }
    fs.writeFileSync(globalConfig.configShPath, lines.join('\n'));
    return success
}
const updateCookies = async (cookie) => {
    let pt_pin = cookie.match(/pt_pin=([^; ]+)(?=;?)/) && cookie.match(/pt_pin=([^; ]+)(?=;?)/)[1];
    for (const account of globalOptions.accountsList) {
        if (pt_pin === account.pt_pin) {
            let headerMsg = `Cookie => [remarks=${decodeURIComponent(account.remarks)}] `;
            if (account.ws_key && account.ws_key !== "") {
                let success = false;
                let ck = await getCkByWsKey(account);
                if (ck !== '') {
                    let checkResult = await checkCookie(ck);
                    if (checkResult) {
                        success = updateLocalCookie(ck);
                        globalOptions.successCount++;
                        globalOptions.message += `${headerMsg} ${success ? '更新成功' : '更新失败'}\n`;
                    } else if (!checkResult) {
                        globalOptions.message += `${headerMsg} 生成的cookie已失效\n`;
                    }
                } else {
                    globalOptions.message += `${headerMsg} 更新失败,请检查ws_key是否正确}\n`;
                }
            } else {
                globalOptions.message += `${headerMsg} 未设置ws_key不更新\n`;
            }
        }
    }
}


!(async () => {
    pre()
    for (const cookie of cookiesArr) {
        await updateCookies(cookie)
    }
    vm.msg(vm.name, 'Cookies更新结果:', globalOptions.message);


})()
    .catch((e) => {
        vm.log('', `❌ ${vm.name}, 失败! 原因: ${e}!`, '')
    })
    .finally(() => {
        vm.done();
    })



// prettier-ignore
function Env(t,e){"undefined"!=typeof process&&JSON.stringify(process.env).indexOf("GITHUB")>-1&&process.exit(0);class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`🔔${this.name}, 开始!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),n={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(n,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)})):this.isQuanX()?(this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t))):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();s&&this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)}))}post(t,e=(()=>{})){if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.post(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method="POST",this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){this.initGotEnv(t);const{url:s,...i}=t;this.got.post(s,i).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)})}}time(t,e=null){const s=e?new Date(e):new Date;let i={"M+":s.getMonth()+1,"d+":s.getDate(),"H+":s.getHours(),"m+":s.getMinutes(),"s+":s.getSeconds(),"q+":Math.floor((s.getMonth()+3)/3),S:s.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(s.getFullYear()+"").substr(4-RegExp.$1.length)));for(let e in i)new RegExp("("+e+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?i[e]:("00"+i[e]).substr((""+i[e]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};if(this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r))),!this.isMuteLog){let t=["","==============📣系统通知📣=============="];t.push(e),s&&t.push(s),i&&t.push(i),console.log(t.join("\n")),this.logs=this.logs.concat(t)}}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`❗️${this.name}, 错误!`,t.stack):this.log("",`❗️${this.name}, 错误!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`🔔${this.name}, 结束! 🕛 ${s} 秒`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}
