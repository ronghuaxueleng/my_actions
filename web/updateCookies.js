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

const globalConfig = {
    configShPath: "../config/config.sh",
    accountPath: "../config/account.json",
    signPath: "../utils/sign/",
    UA: `okhttp/3.12.1;jdmall;android;version/10.1.2;build/89743;screen/1080x2206;os/11;network/wifi;`,
}
let globalOptions = {
    message: '',
    successCount: 0,
    accountsList: [],
    signJsonFileCount: 50,
    signList: [],
    signServerUrl: "",
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
/*
 * 加密工具已经升级了一个版本，目前为 jsjiami.com.v6 ，更新了加密算法，缩减了体积;
 * 另外 jsjiami.com.v6 已经强制加入校验，注释可以去掉，但是 jsjiami.com.v6 不能去掉，其他都没有任何绑定。
 * 誓死不会加入任何后门，JsJiami.com 加密的使命就是为了保护你们的Javascript 。
 */
var iｉl='jsjiami.com.v6',i1l1i=[iｉl,'w5DDu8K8FMOj','w4t9wowlwpxF','w7DClzDCqMOhwog=','AMOgBsO7EBI=','HsKCHcO7ZMKn','VE9PLQvDn2vDoy8IcsOPQA==','wornrrTlkJfor5Tmso/lpYTotafvvpjorpnnqpLlkoTlh6jor6Q=','wq0vw5Y=','wq/Di3FpTMOfw5YPfMOQwqBgfipSwodaw6PCtAlJwpVxwosjwqN9wqlCw7pyw5PDocO3bsK2wrnCsyHDisKaYMOEB8Onfygd','QWsBw7YIS8ONwqQJacK9d8K7EUtYasObWnbCmcKTw65PDsK1wpMvw5HDgMKne8OKUsOhw5Q+wpTDoBRjw5NBw4cfKDbDnsK0OmHDnEIhJQ==','w7PCkU4=','Bm8ewqcJXMOYwqATI8OgGcO0UGITdMK9RnzCjMKCw69STMK+wp5vwp7Cj8OgccOS','wpdvKXvDrMOl','w7TDq8KqSxY/','CX4Dwq4=','wqM5w7fCtsOow5w=','QsKkwpvDvMKZAMOX','w7fDgMOyw7U=','wr1kYi0beizDrw==','wpoEw6HCj8Kww7s=','wqQrw49Z','w4diw6w3wq0=','w64Fw5Qlwpkd','w73CvXPCoSht','RMO0wrjDhgBB','ZUtzwolnfQcpXjvDhXs=','w73DpXPCoSgV','woYEfMOV','wqrCkMK/','wq7Dlml1U8KJ','SBnDkMKAwoXChg==','ByRjL8OXwpM=','bXJTw4s7Gg==','w7TDq8KvbhZn','wqU9wolnXsOM','wrzDqGh3E8KZ','bcKnwoDDkMKUKg==','c8OPG3VAw6E=','wrnDqBBSTsOB','JkXCoMOXwpAG','KsKuZBDCsMKp','5o+H5Y6J6LGy55aw6ZWa6Ky1','PCxkesKJwrc=','wrnCkDBSE8Kc','PSRtcMKqwrPDoFg=','JEbCqAvDgcKgDQA=','DgMdw5EvwrY=','NDDDtsKhBg==','w4/Cu8KoQxVj','w5Rjw7dDG8O2LcOTwq9TKA==','w50yw6wLwqTCvw==','w4DDjsOfU8OHw6nDgcKJ','PhvCn8KSwqteUl0=','w7XDqMOWw7kKTA==','Q8Kuwp3DtMKXDcOLdg==','wpTDvCEIVAR4','U3MGIsKvacKV','wqpJSz7Dl8OFNcOJ','AHoawo8BS8Oc','DXAHwqU=','BsOxbg==','JFvCvQzDo8KuFxJm','w7XDoMKT','w4/DvcOy','w6TCnEU9','w7pPwrJpB8OT','w6lhF1Viwr4=','wroBw5pdRsOS','w4NXVA==','Gh/Cr8KVw64=','w5jClMKswpUSEQ==','UFV3KD3Dgw==','bMOMF8Osw6hx','bcKiwoDDsMKUKg==','J8Kfc8OiRMKA','U0lDJjbDsXzDrA==','UsOIwpzDpMK0wrQ=','w7NdPG9fwqU=','w47DosOiV8Ohw6s=','WmwDScKt','wrcXcSM=','wqBFw5FCXsKR','PsKiZcO+HMKC','w53DrMKJwrBPTA==','w51vw4kuwqHDhw==','IMOAfsO+aDI=','w694ekNaIg==','CsOWRBDClcO0','w5N4HE96w70=','wqBFw7Fnew==','w73DrMOxwpUS','wpdPKSPDrMOF','wrTDlmJ3bMKAwotWbMOMw5t/PA==','w53CuHPChChI','wqPDiD5QLMKVwoHDi1UTwqt0PQ==','w7ElwoICwqMRFsO/AMOpwoLClUE=','YcO0wr3DoyAc','PsKCRcKjZMKC','S09ECjTDsw==','f2wDScKtYw==','wqN7w451','wpnDjRAPTg==','VcOUAcKtw60=','fMOUDkxdwr9YD8KO','w6FxYjQefy7Ci8KMw7BH','aFIrw65D','w6hmfA1vw7I=','w6DCjsO3KcKew7nDtsO1','eMODA3FGwr4BDQ==','w6fDmsOhw5rDocK5IQ==','w57CmyjDncOJw43Cow==','TsKkwoDDlw==','UMKkwrrDjcKKCsOReQ==','w5HDi8Kj','w7R+c3w=','YFFAacKqTcKEwqZL','CMOMZA==','w7zDj8O8','VMKqwpvDisKd','NMOSel1Lw6I=','w4fDkMKiwq8KUg==','wqPDlDtNC8KC','w4LCnUF2MMKg','w6t7chc=','bcOewpY=','w4HCiUc=','w5InwoYfw4c=','wpcAHQ==','cjnChsOfwp/DkmIZwpzDuSpyCw==','w4vDhMOMW8Oaw7U=','dBYAw57Ch0w=','PsOaQMKjHA==','woDDsDIiZhVvw4jDoHhBw4km','wofnr5Xlkqbor6nms6rlprbotpDvv63or4znqI7lkYnlhZjorKI=','d15uwoppPAImGT3Ch2YCKWEDwqo=','c8OPG3VAwpk=','DcO+YDw=','V1J3KD3Dgw==','w5dsw7IHwqnClcKn','w5rCtXfCqA==','UUdENj0=','w7MlGRdf','w5fDn8O0dcONw77CiA==','JC7DokDCjEM=','w7DDjcO2w5kvEQ==','cTYlw57CpxE=','Ph7Co1TDocKl','w5TCs8KvFjM/','MjbDkkTCmw==','JjvDk0/Chlc=','wrokw4HDt8OIw5s=','w5Q6w74BUsKD','OsOgUMO8FTLCgDg=','OzDDtcO/RcKL','wrodw59AfsOJEsKQ','w6nCjsO8w7LDqcKh','w6slwoxdwrkd','wq8dw5RaV8OS','wrBHdS8=','w5MSw5oI','TcOAwpnCoMKY','w5pvw6o0J8Oz','VMK/wrbDksKdGsKC','w6VWbBXDlcOFNcKT','cjXClcKcwq/DmH8EwpDDrlJwBsK9DhrDqg==','bQpzw4s=','McKqJyVLwpo=','eQ8cw7vCh0MOwqnCj8K0wqHDncOCw4AEw7kHw5MjfCtNKE3CgFbCm8KLYMKqEsObwqI=','jsjYiami.lkcoMDQJTm.v6UngMQMO=='];(function(_0x2c568c,_0x36dc8a,_0x5d2e65){var _0x2bf25c=function(_0x36f244,_0x5be8eb,_0x1c543,_0x3dfd95,_0xb9addb){_0x5be8eb=_0x5be8eb>>0x8,_0xb9addb='po';var _0x259821='shift',_0x4d4b6c='push';if(_0x5be8eb<_0x36f244){while(--_0x36f244){_0x3dfd95=_0x2c568c[_0x259821]();if(_0x5be8eb===_0x36f244){_0x5be8eb=_0x3dfd95;_0x1c543=_0x2c568c[_0xb9addb+'p']();}else if(_0x5be8eb&&_0x1c543['replace'](/[YlkMDQJTUngMQMO=]/g,'')===_0x5be8eb){_0x2c568c[_0x4d4b6c](_0x3dfd95);}}_0x2c568c[_0x4d4b6c](_0x2c568c[_0x259821]());}return 0xa6c7f;};return _0x2bf25c(++_0x36dc8a,_0x5d2e65)>>_0x36dc8a^_0x5d2e65;}(i1l1i,0x19c,0x19c00));var Iil1Il=function(_0xbf3f17,_0x17ff60){_0xbf3f17=~~'0x'['concat'](_0xbf3f17);var _0x270bc8=i1l1i[_0xbf3f17];if(Iil1Il['l1il1i']===undefined){(function(){var _0xab7dc1=function(){var _0x84af0;try{_0x84af0=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');')();}catch(_0x28ee36){_0x84af0=window;}return _0x84af0;};var _0x1f6056=_0xab7dc1();var _0xbe8007='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x1f6056['atob']||(_0x1f6056['atob']=function(_0x45ecff){var _0x3c63d3=String(_0x45ecff)['replace'](/=+$/,'');for(var _0x246fd4=0x0,_0x36b635,_0x59128e,_0x5de54d=0x0,_0x2e4f31='';_0x59128e=_0x3c63d3['charAt'](_0x5de54d++);~_0x59128e&&(_0x36b635=_0x246fd4%0x4?_0x36b635*0x40+_0x59128e:_0x59128e,_0x246fd4++%0x4)?_0x2e4f31+=String['fromCharCode'](0xff&_0x36b635>>(-0x2*_0x246fd4&0x6)):0x0){_0x59128e=_0xbe8007['indexOf'](_0x59128e);}return _0x2e4f31;});}());var _0x53ad97=function(_0x2c959a,_0x17ff60){var _0x1247f2=[],_0x4eda30=0x0,_0x267747,_0x17a7f1='',_0x102765='';_0x2c959a=atob(_0x2c959a);for(var _0xb87d38=0x0,_0x3e4257=_0x2c959a['length'];_0xb87d38<_0x3e4257;_0xb87d38++){_0x102765+='%'+('00'+_0x2c959a['charCodeAt'](_0xb87d38)['toString'](0x10))['slice'](-0x2);}_0x2c959a=decodeURIComponent(_0x102765);for(var _0x1f310b=0x0;_0x1f310b<0x100;_0x1f310b++){_0x1247f2[_0x1f310b]=_0x1f310b;}for(_0x1f310b=0x0;_0x1f310b<0x100;_0x1f310b++){_0x4eda30=(_0x4eda30+_0x1247f2[_0x1f310b]+_0x17ff60['charCodeAt'](_0x1f310b%_0x17ff60['length']))%0x100;_0x267747=_0x1247f2[_0x1f310b];_0x1247f2[_0x1f310b]=_0x1247f2[_0x4eda30];_0x1247f2[_0x4eda30]=_0x267747;}_0x1f310b=0x0;_0x4eda30=0x0;for(var _0x1ba5cf=0x0;_0x1ba5cf<_0x2c959a['length'];_0x1ba5cf++){_0x1f310b=(_0x1f310b+0x1)%0x100;_0x4eda30=(_0x4eda30+_0x1247f2[_0x1f310b])%0x100;_0x267747=_0x1247f2[_0x1f310b];_0x1247f2[_0x1f310b]=_0x1247f2[_0x4eda30];_0x1247f2[_0x4eda30]=_0x267747;_0x17a7f1+=String['fromCharCode'](_0x2c959a['charCodeAt'](_0x1ba5cf)^_0x1247f2[(_0x1247f2[_0x1f310b]+_0x1247f2[_0x4eda30])%0x100]);}return _0x17a7f1;};Iil1Il['ll1']=_0x53ad97;Iil1Il['iI1llI']={};Iil1Il['l1il1i']=!![];}var _0x57a972=Iil1Il['iI1llI'][_0xbf3f17];if(_0x57a972===undefined){if(Iil1Il['llliii']===undefined){Iil1Il['llliii']=!![];}_0x270bc8=Iil1Il['ll1'](_0x270bc8,_0x17ff60);Iil1Il['iI1llI'][_0xbf3f17]=_0x270bc8;}else{_0x270bc8=_0x57a972;}return _0x270bc8;};const I1l1Il=()=>{var llIll1={'iIIII1':function(Illl1l,Illl1i){return Illl1l===Illl1i;},'i1l1ll':Iil1Il('0','H8UV'),'i1ill1':function(lIIiil,l1lIii){return lIIiil>l1lIii;},'iIIl1l':function(I11iI1,l1lIil){return I11iI1+l1lIil;},'llIli1':function(IiiIli,iillli){return IiiIli+iillli;},'iliIII':function(I1l1Ii,I1i11i){return I1l1Ii(I1i11i);},'iIIl1i':function(I1i11l,llIlii){return I1i11l(llIlii);},'I1lllI':function(llIlil,IIlil){return llIlil!==IIlil;},'ill111':Iil1Il('1','e&(E'),'Iliil1':Iil1Il('2','2]]U'),'i1III':function(ilI1lI,IiiIll){return ilI1lI!==IiiIll;},'Ii1iIi':'set-cookie-parser','iliIIl':function(IIlii,IlI1il){return IIlii!==IlI1il;},'Ii1iIl':Iil1Il('3','C#YY'),'iliIIi':Iil1Il('4','t]%('),'ill11I':function(IilliI,IlI1ii,lIIiii){return IilliI(IlI1ii,lIIiii);},'Iliiil':function(iI1lli,ll1iI){return iI1lli-ll1iI;}};return new Promise(iI1lll=>{var l1lIll={'li1II':function(I1l1II,IIli1I){return llIll1[Iil1Il('5','plW]')](I1l1II,IIli1I);},'IliI11':function(I1i11I,llIliI){return llIll1[Iil1Il('6','xot#')](I1i11I,llIliI);},'i1ll':function(I1l1I1,I1i111){return llIll1[Iil1Il('7','vs)&')](I1l1I1,I1i111);},'i1l1lI':function(ilI1li,IIliI){return llIll1[Iil1Il('8','!GyU')](ilI1li,IIliI);},'i1iliI':function(ilI1ll,Iillii){return ilI1ll+Iillii;},'IiilIl':function(IlI1iI,Iillil){return llIll1['iliIII'](IlI1iI,Iillil);},'iii1Ii':function(l1lIli,lIIiiI){return llIll1[Iil1Il('9','PaRC')](l1lIli,lIIiiI);},'iii1Il':function(II1lil,IIli1l){return llIll1['I1lllI'](II1lil,IIli1l);},'lI1IiI':llIll1[Iil1Il('a','Jb4K')],'i1lI':function(II1lii,lIIii1){return llIll1[Iil1Il('b','q(V%')](II1lii,lIIii1);},'IlI1l':llIll1[Iil1Il('c','e&(E')],'lilIil':function(ll1i1,IIli1i){return llIll1[Iil1Il('d','plW]')](ll1i1,IIli1i);},'i1l11':Iil1Il('e','vs)&'),'i1ilil':llIll1[Iil1Il('f','t]%(')]};if(globalOptions[Iil1Il('10','dvLC')]&&llIll1[Iil1Il('11','!YYB')](globalOptions[Iil1Il('12','^[Sw')],'')){const I1iIi1={'url':globalOptions[Iil1Il('13','Jc!Y')],'timeout':0x2710};vm['get'](I1iIi1,async(lliil1,IIllI,lliilI)=>{var lili1={'lI1Iil':function(ll1l1,IllIIi){return l1lIll[Iil1Il('14','PZYm')](ll1l1,IllIIi);},'lilIiI':function(IllIIl,IiiIi1){return IllIIl(IiiIi1);},'i1l1I':function(l1ii1,ii1ll){return l1lIll['iii1Ii'](l1ii1,ii1ll);}};if(l1lIll[Iil1Il('15','xot#')](Iil1Il('16','Y)Zo'),l1lIll[Iil1Il('17','C#YY')])){try{if(lliil1){if(l1lIll[Iil1Il('18','eXgp')](Iil1Il('19','^[Sw'),l1lIll[Iil1Il('1a','CG29')])){const IlI1I=require(Iil1Il('1b','i2$*'));let II11Ii=new Date();let II11Il=IlI1I['MD5']([II11Ii[Iil1Il('1c','Jb4K')](),l1lIll[Iil1Il('1d','5urA')](l1lIll[Iil1Il('1e','yTMB')](II11Ii['getMonth'](),0x1),0x9)?(II11Ii[Iil1Il('1f','qPWU')]()+0x1)['toString']():l1lIll['i1ll']('0',II11Ii[Iil1Il('20','i2$*')]()+0x1),II11Ii[Iil1Il('21',')hsL')]()>0x9?II11Ii['getDate']()['toString']():'0'+II11Ii[Iil1Il('22','DILp')]()][Iil1Il('23','uu4q')]('-'))[Iil1Il('24','uu4q')]();return IlI1I[Iil1Il('25','vs)&')][Iil1Il('26','yTMB')][Iil1Il('27','C#YY')](IlI1I[Iil1Il('28','PaRC')]['decrypt'](sign,IlI1I[Iil1Il('29','$Nj5')]['Utf8'][Iil1Il('2a','uu4q')](l1lIll[Iil1Il('2b','Cit7')](l1lIll['i1iliI'](II11Il[Iil1Il('2c','vs)&')](0x1,0x4),II11Il[Iil1Il('2d','^[Sw')](0x7,0x4)),II11Il[Iil1Il('2e','b#NU')](0x10,0x8))),{'mode':IlI1I[Iil1Il('2f','Jb4K')][Iil1Il('30','PZYm')],'padding':IlI1I[Iil1Il('31','b#NU')][Iil1Il('32','Jc!Y')]}));}else{console[Iil1Il('33','eUB)')](globalOptions[Iil1Il('34','3clc')]+'\x20签名请求失败，请稍后再试');}}}catch(ll1ii){vm[Iil1Il('35','2]]U')](ll1ii,IIllI);}finally{if(l1lIll[Iil1Il('36','ap!H')](l1lIll[Iil1Il('37','xot#')],'II1Il')){console['log'](globalOptions[Iil1Il('38','afDl')]+Iil1Il('39','2]]U'));}else{iI1lll(lliilI);}}}else{try{const Iii11l=lili1['lI1Iil'](require,Iil1Il('3a','5urA'));const iii1II=lili1[Iil1Il('3b','i2$*')](Iii11l,response);const Iil1Ii={};iii1II['filter'](I1iIlI=>I1iIlI[Iil1Il('3c','q(V%')]===Iil1Il('3d','Y)Zo')||I1iIlI['name']==='pt_pin')[Iil1Il('3e','!GyU')](iIIIII=>{Iil1Ii[iIIIII[Iil1Il('3f','!YYB')]]=iIIIII[Iil1Il('40','Y)Zo')];});lili1[Iil1Il('41','e&(E')](iI1lll,Iil1Il('42','2]]U')+Iil1Ii[Iil1Il('43','Z6Sc')]+';pt_pin='+pt_pin+';');}catch(l1iiI){lili1['i1l1I'](iI1lll,'');}}});}else{if(llIll1[Iil1Il('44','$Nj5')](llIll1['Ii1iIl'],llIll1['iliIIi'])){let ll1li=(Illl1I,lliiiI)=>{if(llIll1[Iil1Il('45','ap!H')](llIll1[Iil1Il('46','FjZK')],Iil1Il('47','38TA'))){return Math[Iil1Il('48','Z6Sc')](Math[Iil1Il('49','Z6Sc')]()*(lliiiI-Illl1I))+Illl1I;}else{l1lIll[Iil1Il('4a','t53w')](iI1lll,'');}};llIll1[Iil1Il('4b','gSuT')](iI1lll,globalOptions[Iil1Il('4c','PaRC')][llIll1[Iil1Il('4d','^^6H')](ll1li,0x0,llIll1['Iliiil'](globalOptions[Iil1Il('4e','plW]')]['length'],0x1))]);}else{const lilIl1=l1lIll['iii1Ii'](require,l1lIll[Iil1Il('4f',')hsL')]);const i1l1ii=l1lIll[Iil1Il('50','Jc!Y')](lilIl1,response);const i1l1={};i1l1ii[Iil1Il('51','plW]')](IIII1i=>IIII1i['name']==='pt_key'||IIII1i[Iil1Il('52','t]%(')]==='pt_pin')['forEach'](IiilI1=>{i1l1[IiilI1[Iil1Il('53','gSuT')]]=IiilI1[Iil1Il('54','H8UV')];});l1lIll[Iil1Il('55','(uap')](iI1lll,Iil1Il('56','uu4q')+i1l1['pt_key']+Iil1Il('57','t]%(')+pt_pin+';');}}});};const IiiiI=(llIlli,llIlll)=>{var lliii1={'l1l1II':Iil1Il('58','3clc'),'Iil1I1':Iil1Il('59','5urA'),'Ii1iII':Iil1Il('5a','Cit7'),'l1i11I':Iil1Il('5b','ap!H'),'II11II':Iil1Il('5c','UeAN')};return new Promise((Iiii1,lIIili)=>{var IiiIil={'I1lll1':lliii1['l1l1II'],'i1IIi':Iil1Il('5d','Jc!Y'),'IIII1I':lliii1[Iil1Il('5e','DILp')]};if(lliii1[Iil1Il('5f','PaRC')]!==lliii1[Iil1Il('60','xot#')]){if(err){console['log'](globalOptions[Iil1Il('61','Y)Zo')]+Iil1Il('62','t$RJ'));}}else{vm[Iil1Il('63','eXgp')]({'url':Iil1Il('64','dvLC')+llIlll+Iil1Il('65','JWZ]'),'method':Iil1Il('66','!YYB'),'headers':{'Content-Type':lliii1['l1i11I'],'Accept':Iil1Il('67','JWZ]'),'Accept-Language':lliii1[Iil1Il('68','t]%(')],'User-Agent':globalConfig['UA']},'followRedirect':![]},async function(IIlll,liliI,ll1lI){try{const l1iii=require(IiiIil[Iil1Il('69','38TA')]);const IIlli=l1iii(liliI);const l1iil={};IIlli['filter'](ii1l1=>ii1l1[Iil1Il('52','t]%(')]==='pt_key'||ii1l1[Iil1Il('6a','JWZ]')]===Iil1Il('6b','t53w'))[Iil1Il('6c','uu4q')](lIIill=>{l1iil[lIIill[Iil1Il('6d','$Nj5')]]=lIIill['value'];});Iiii1('pt_key='+l1iil['pt_key']+Iil1Il('6e','Jb4K')+llIlli+';');}catch(I11iIi){if(IiiIil['i1IIi']!==IiiIil[Iil1Il('6f','t53w')]){Iiii1('');}else{ck[o[Iil1Il('70','eXgp')]]=o[Iil1Il('71','!GyU')];}}});}});};const I11iIl=(l1l11l,IilIil,l1iIi)=>{var l1l11i={'II11I1':function(l1iIl,illIll){return l1iIl*illIll;},'Iii11I':function(iIli1I,Iiil1){return iIli1I(Iiil1);},'Iil1II':function(iiilli,l1iIIl){return iiilli-l1iIIl;},'iIIl1I':function(iiilll,lI11Il){return iiilll+lI11Il;},'I1iIli':Iil1Il('72','Jc!Y'),'lI1Ill':function(lIII1i,l11i11){return lIII1i!==l11i11;},'lI1Ili':Iil1Il('73','!YYB'),'IliilI':'IliI1I','i1II1':function(IilIl1,lIII1l){return IilIl1===lIII1l;},'iIIl11':Iil1Il('74','PZYm'),'l1l1I1':function(l1iIIi,lilIi){return l1iIIi(lilIi);},'I1iIll':function(l1l11I,lilIl){return l1l11I(lilIl);},'I1ilI1':Iil1Il('75','5urA'),'iillll':'application/x-www-form-urlencoded;'};const IilIlI={'url':'https://api.m.jd.com/client.action?functionId=genToken&body=%7B%22to%22%3A%22https%253a%252f%252fplogin.m.jd.com%252fjd-mlogin%252fstatic%252fhtml%252fappjmp_blank.html%22%7D&clientVersion=10.1.2&client=android&'+l1iIi,'headers':{'Host':l1l11i[Iil1Il('76','!YYB')],'Cookie':Iil1Il('77','82$L')+IilIil+';wskey='+l1l11l+';','accept':Iil1Il('78',')hsL'),'referer':'','User-Agent':globalConfig['UA'],'Content-Type':l1l11i[Iil1Il('79','dvLC')]}};return new Promise((iIli11,Iiiil)=>{var Iiiii={'Iliili':function(l11i1I,IiII){return l11i1I(IiII);}};vm['post'](IilIlI,(llIIli,lIII1I,illIlI)=>{var liIiI={'IIII11':function(l1il1I,Iiili){return l1l11i[Iil1Il('7a','3clc')](l1il1I,Iiili);},'i1illl':function(IilIli,li1){return l1l11i[Iil1Il('7b','GkVN')](IilIli,li1);},'I1llil':function(illIl1,l1llII){return l1l11i['Iil1II'](illIl1,l1llII);},'lilIll':function(IilIll,lI11Ii){return l1l11i[Iil1Il('7c','5urA')](IilIll,lI11Ii);},'l1i111':function(Iiill,l11i1i){return Iiill*l11i1i;}};if(l1l11i[Iil1Il('7d','38TA')]===l1l11i['I1iIli']){if(!llIIli){if(l1l11i[Iil1Il('7e','plW]')](l1l11i[Iil1Il('7f','^[Sw')],l1l11i[Iil1Il('80','uu4q')])){try{if(l1l11i['i1II1'](Iil1Il('81','i2$*'),l1l11i[Iil1Il('82','^[Sw')])){const lI11I1=JSON['parse'](illIlI);l1l11i[Iil1Il('83','S#1C')](iIli11,lI11I1);}else{const i1l1l1=JSON['parse'](illIlI);Iiiii['Iliili'](iIli11,i1l1l1);}}catch(liI){l1l11i[Iil1Il('84','q(V%')](Iiiil,Iil1Il('85','H9aM'));}}else{let I1lli1=(IlI1i,Iii11i)=>{return Math['floor'](liIiI['IIII11'](Math[Iil1Il('86','GkVN')](),Iii11i-IlI1i))+IlI1i;};liIiI[Iil1Il('87','^[Sw')](iIli11,globalOptions[Iil1Il('88','GkVN')][I1lli1(0x0,liIiI['I1llil'](globalOptions[Iil1Il('89','FjZK')]['length'],0x1))]);}}else{Iiiil(llIIli);}}else{return liIiI[Iil1Il('8a','H9aM')](Math[Iil1Il('8b','^^6H')](liIiI['l1i111'](Math[Iil1Il('8c','38TA')](),max-min)),min);}});});};const liIi1=lI11II=>{var l1llI1={'II1li1':function(llIIll,IillIi){return llIIll>IillIi;},'l1lIlI':function(lii,IllI1i){return lii+IllI1i;},'IiiIl1':function(i11I1l,lil){return i11I1l+lil;},'lIIil1':function(IllI1l,i11I1i){return IllI1l+i11I1i;},'IIli1':function(IillIl,llliil){return IillIl+llliil;},'II1liI':function(liIl1,II1lll){return liIl1+II1lll;}};const II1lli=require('crypto-js');let ii1I1I=new Date();let IiIl=II1lli['MD5']([ii1I1I[Iil1Il('8d','(uap')](),l1llI1['II1li1'](l1llI1[Iil1Il('8e','!GyU')](ii1I1I[Iil1Il('8f','2]]U')](),0x1),0x9)?l1llI1['IiiIl1'](ii1I1I['getMonth'](),0x1)[Iil1Il('90','S#1C')]():l1llI1[Iil1Il('91','$Nj5')]('0',l1llI1['IIli1'](ii1I1I[Iil1Il('92','uu4q')](),0x1)),ii1I1I[Iil1Il('93','afDl')]()>0x9?ii1I1I[Iil1Il('94','PpWz')]()[Iil1Il('95','t]%(')]():'0'+ii1I1I[Iil1Il('96','JWZ]')]()][Iil1Il('97','JWZ]')]('-'))['toString']();return II1lli[Iil1Il('98','q(V%')][Iil1Il('26','yTMB')][Iil1Il('99','FjZK')](II1lli[Iil1Il('9a','vs)&')]['decrypt'](lI11II,II1lli[Iil1Il('9b','UeAN')][Iil1Il('9c','b#NU')]['parse'](l1llI1[Iil1Il('9d','(uap')](IiIl[Iil1Il('9e','e&(E')](0x1,0x4),IiIl[Iil1Il('9f','plW]')](0x7,0x4))+IiIl['substr'](0x10,0x8)),{'mode':II1lli['mode'][Iil1Il('a0','Jb4K')],'padding':II1lli['pad'][Iil1Il('a1','S#1C')]}));};const getCkByWsKey=async IiIi=>{var iI1ll1={'l1lIl1':function(IlI1Il){return IlI1Il();},'IiiIlI':function(l1il1l,liIil){return l1il1l(liIil);},'Iilli1':function(IllI1I,liIii,II1ll1){return IllI1I(liIii,II1ll1);}};let IlI1Ii=await iI1ll1[Iil1Il('a2','vs)&')](I1l1Il);const i11I1I=await I11iIl(IiIi[Iil1Il('a3','Y)Zo')],IiIi[Iil1Il('a4','CG29')],iI1ll1[Iil1Il('a5','uu4q')](liIi1,IlI1Ii));return await iI1ll1['Iilli1'](IiiiI,IiIi[Iil1Il('a6','xot#')],i11I1I[Iil1Il('a7','Y)Zo')]);};;iｉl='jsjiami.com.v6';///----------------------

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
