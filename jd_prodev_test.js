/*
邀请好友入会赢好礼-测试,单店铺
只助力作者,介意禁止
1,12 * * * jd_prodev_test.js
*/
const $ = new Env('邀请好友入会赢好礼-测试');

var _0xods='jsjiami.com.v6',_0xods_=['‮_0xods'],_0x4f98=[_0xods,'wpbDn8OjBg==','KRjDs8OeQw==','RRk+wqnCjg==','CcOZGMKLwrE=','CwnDlMO5U3/Cp0rCisORw69caHbCl2nDq8ON','Ag3DjcO6','w74caWU2','SMOuwphgY8OCN8KlV8KpwprCp8KIIsOReWPCh3LDhBM/','B3Nzw4Fq','wobDoMOTwpB/NRg=','Yz/Cm0/ChsO7AQ==','wo01wr5lbQ3CmWkiw6vDicKC','Gk0Nw7LDsg==','wpkGwrVLMQ==','w7vDgsOVcGQ=','asOzwrPDkHM=','CcOow5fClsKE','AG0Tw6nDnA==','woYSwqxWLw==','PMOySUPDsg==','aSwAwq3Csg==','DcOXOcKMwqYcwrXCnQ==','d8OywoLDhXsDA8K6cW3CqQ==','OSUiw5B9w5h+EA==','UjYgwota','wrElHcKwHg==','w5PDv8O/bnzCmMOoAClSX2w=','w4MNaUELd8Oaw5oswr1iWQ==','wqXDv2LDisKqIVXCgsOzHMOtw7k=','wr3DocOKwppD','wqBww5/Cv8KU','IGh4w6JN','dMOSw4DCo8KPwo/Cng==','JHXCtF92w6hew6c=','wrBufcOaw7vDtcK8','ahFRworDsQ==','WMKMw4/DkUE=','CMKbwoZfWcOFacO1EA==','YMOywrjDnmID','wo4uwqB+ejI=','C3XCvA==','5LiE5LiV5p6w5YuG5ZmG6LyF5Zmo56qn5pWC5oye','PcOiw7LCp8Ky','AcOYTmTDuw==','wo9/LsKVw44=','w5I7fWoe','cBsZwo/ChA==','woEDT8K0DTA=','wovDnGHDgsKL','cMOQYkRNeCI=','w5bCl1vCow==','ZsODwrzDiRE=','GMOCw6jCvsK8w5XCoMOkSMODwqjCkRopw7x5w5hbGsKEwp1FwrVkWMKkfHMuTsO/wrk=','SGYsw6hawrFTwpMseGXCr8Kvw5zDrG7Dkw==','cA/Cg8OUw47Dln1dOsKcWBZaIsKTPcOuw6nCtk0qS8KjwroOPcOywrFFO8OPPmfDpU9QV3DCqMOxLXkKwrbCpgxZels=','WyEtwpN5d8KIGsORwowycAzDlMOkw5fCtMO4AWHCuMOswoAWw5nCk8Oaw43CucKpN8OFIQdUQw1NwrpDwqXDgsO4G8OKEVVuwq3Cl0jDlhtBPy4tw5zDgz9FecO4YQTDggHDsB16EMOkOcK+TQ9twpLCvCZqwpVwDE5nXTjDrF/DjMKdwp5RwoBHDcKIQMO/wofCosOwHcKow7FbwqXCv8OsR8OIwqxfwrjCpGjDqSoVZj4vNMOSfsKQVGTDuQnCi8KTN8ODJcKR','wrEHGcK7MQ==','DcKbwqJVQA==','wq3DvMO0KsO3','w51lw7EKXA==','WCzCk07Cgg==','NXBhw6l1','wqjDuWTDlcKrVh/DnsO3DMKkw7YJw49hO8OywqE3w5rCvUjDi8O2I8OHwrttw7s1wp3DmhbDlwQIUnDCtCfDn1vDjcOAasKTwp1TGMK7YcOaesK3','EMOFb0TDpg==','w6gywozClsOC','wrxubMOOwrfDoMKxwr0pw5U=','XMKnw7DClGM=','wojDkcO9Fw==','w44ZYkIN','wrZUw7jCk8KO','wojDrMKMwq8PRA==','woQowqs=','wobDocOCwpp0IQLDjT4=','Ri3DqcOS6K+B5rGP5aeU6LSd77+v6K2I5qGI5p+4572a6Let6YSK6K+d','OcO4QnXDtQ==','fz0bwpVycsKH','TSA3wqzChw==','woYuwq9hUSHCkX8=','BA3DisO+','IHF4w6Js','woYuwq9hcSHCkX8=','LMOLD8KKwpoUwrbCnw==','bMOcdUxsfSpj','TMKKw48=','JG0l','5Lu15LuW5p+z5Yid5Zme6L2u5Zu456iv5pS55oyE','FcOdw7/Cl8Knw4Q=','w7XChl3ChwI=','RcKXw5rDtGFnwoPCq8Ozw6IMFQ==','wpszwr5jcSfClXwo','w5jDv8OeKuito+azj+WnoOi0oe++nOisqOagqeacjee9u+i0jOmGsuiugA==','wrbDqH7DhsK0','UcOkwqZ2dMOZG8Kw','LEcsw4zDmB0EfMOCw7gc','IXXDnQ==','ZMOnwr7DhSdGFcKcdnLCrRtmwpvDuTfDtg==','SMKRw5zDq2AQw4nDt8Ohw7MCXgJgUcOlwpXDgMK3w6jCmTDCn8O3c8OKbMOsw7DCsAp3D8O5wqbCuwtEw4PCvcOmBDcmw7fCnWQCTWdgGhrCkMOlLTrCm8O2CHbCqjEdwpPCj8OZCQ7Cp8KiC8Kcw7LDnMKQWVJmw7xPFcODcsK1E3wLwqzCqgt2','L8OlbFnDtA==','wojCj8KSw4UcMyPCqsKrwovDg8K5fQdZYsOCXcOsPsKOJMKvbsOBwprDgXHCksODDWNuWcOnwrPCjWALw6wFw5IywpNrwpdB','a8OawpnDnx4=','wolsw7PCv8KrPMOHw5LCnlLCohRew6ViwpU2B8O5BiHChgpdJTrCl1vCvhfDjcKjX8OBBMOpw756w5dPwqJ1wrgtZw3CnX3Duyh2wo9zTHkSXh3DvgM8w57Dgj8Yw6TCpQ1fOF5WL07CocOiCy/CisOvMsK+Vi3Cr8KnIcOER8Krw49gIMOZwpcQODktMcKHwosewpJ1QwUJw5NaA1JHacOwHH/CjXRoIcOSL8OvHcKcw4JUEMK+IHLCkMOdf8Oxw5o=','R8KAw5w=','KcKrwozDj1M=','OWsTw4rDkQ==','fsO3ZAUuw7A=','wrwCwqZPHMOzMsO+','CRzDnMO1dWzCl1zCsMOLw6lpfnE=','wrLDqGPDkMK0GA==','w4PDvsOoc0fCu8OrHA==','T8KVw43DtVBLwpTCvMOTw7cKBBo9','w4fCn8Kww4MdOA==','cQjCucOLw5nCiQ==','NlTCncOAw77Cgz0ZJMKIBVJD','wqMVwpwJYsO4McKjD1LCgMKnwqsIb3w=','w4jCg8KMw6kYPj8=','wrTDjQknworDpQXCog==','wpDDu8OG','wo4mwqB5eg==','ZzXCkA==','wqgwAsKKGcKTL8Op','w4nCicKKw4gYKTY=','JQPDlsOwX2jCr3zDkQ==','AH/Cr1B+w7l1','WhxXwo3DnMOoKwvDjQ==','LMKiwpg=','w4bCmMKKw5wKZ3jDk8KswpzDkcK+PARKMcKIQcKhYcOFaMKhYsOFwprCmj/Cs8KRRV91VMOmw7bCmzlQwqBUwps0','V2Q9w6AOw6lPwo5nbHzCo8Kyw53CtHTDmUHCoMOCw43CkDzCkj4Xw78SwprDokYgdQjDokg=','w4Zow5AC','w64Yak08','SMKRw5zDq2AQw4nDt8Oiw6YKHkEjFcOrw5/CjcK7w6rDm3zCkcO7d8OKN8Kxw7jCtBBXDsOzw7zColVVw4nCrcKyAT0=','EcOdBsKIwpoAwrY=','EAnDl8O/U3/CrFw=','woXDhhjDtn48LVvCvnQ=','w4vDgWdDwoPDggtDwrjCnUg=','AVg4w5rDhQ==','wqYRRMKiLDxowr0=','FMOZHsKbwrw=','cRXCk8OBw4U=','JcKdwopffsOBd8Oa','FcOdw78=','woIxCcKECA==','wpFww6zCpMKJMcOLwpg=','JsK4PVpowq5lTMK8eg==','wq1ww4XCucKgOcOI','fcOWw5nCog==','5Lun5Luo6LeP5Y+D','wpDDoDUIwoHDhj3CgA==','w7vCn8Kbw543PDrCmQ==','JDk/w4trw5Q=','wqXDh8Kiwq4=','ecO7wqXDuzM=','woJeQMO6','YsOFfhom','w4tow4kERg==','fsK7w7g=','ckDDisOI','J3rlp4botJrDqcKu5Y+z5ZiBUMKA','PEcXw5k=','wpzDiHTDuw==','JnPCt3N0','b8OQe0VHbgV0GlZYCxrCt8OyJMO5R3JxZQ==','MAHDtcOhRQ==','DsKEwqdyQg==','NMK9w7HCq2XCmMKOWcKkGsKzJh3CiDM=','woPDpsKfwqseQsO7ImnDjMO3wp3Csy7DgQ==','cAMiwrbCqQ==','YcOVwrABwp0=','H8ONVWjDslZqwq8=','R8KAw5zDmnBewo/CrsOpw7cSIA4pXg==','dcO4wrnDkW4UOMKd','wqNmw73Cl8KkJMOPwovDggjDq2QXw6tX','FnTCkmVV','aMKmwqUSTMOyw6TDmQ==','IQDDscOwew==','Xh9wwo3DuA==','Mx/DnMOpeGzCiF0=','wpfDr3TDtsKU','wp/DphkswqA=','TA4DwpHCpsK4w7XCu8KS','CsOEwrjDqxE4wpFYRMKlTg==','wqhsw64=','Zy4ywpXChw==','DmnCt1t4w6R6','LkJ2w4ZR','U8KdwrI=','YcK1wq8JLsKzw63DmU3DtFnCvsKiPmDDgsKn','KsKmwo1/w74Tw73Cm14T','wo7DhWjDucKMwr/ClsO7woBvwoQ8DsOIw7M=','R2gxw6gFwqsYw5k6ZmvCv8KvwobDomHCj1PDqcKUw5bChynCkA==','wpvDusOH','wpDDhnA=','U3TDqcOGXg==','ScKWw4TDtHRDwog=','w7wqf1go','D8KNwph3dA==','wr7DtMK/wo4U','HcKzwo/Dv3I=','IyUG','JcO+wrbDmWcEEMKaeyPCkzBpw4TCtjvDtA==','wq/DlVPDlcK9','w5U9HA==','XHAvw6k7','ck7DkA==','RR/Cu3nCoA==','wpnDijABwo4=','wr1vaMOOw6rCusK0woQ3w58/ZcOBBMKcw5rDjsKlQ8KEw7osw4TDgQ==','V8OgX2M=','YsKkwpvDiEHDlVQ+Zh16w5PDisOHQMOFwq/CjsOf','QsOZwp7DsQ==','dRxf','J8Kbwo4=','wqcQwq5Y','ODrCp8Ot6K2K5rKu5aWj6LWX772B6Kya5qOr5p+d572h6Lap6YWw6K6L','w4PCl0HCsSc=','woEpwqhvZw/Cmg==','OsOwbGnDpA==','WsO0W292','cE7DgA==','wqTDnDIVwp4=','Sj1XwqzDjw==','ACLDlsOhdA==','N8O8w7rCnMKM','w5cWU0kx','5LmH5LmD5p2g5YmA5ZiY6Lyi5Zq756uX5paJ5oyt','JCQVw4F3w752','cWTDssOrYA==','wojDrMKM','w4xuw5IIYw==','wrtkbg==','5LqA5Lqx5p+b5Yi85ZiQ6L6Y5Ziq56my5pWd5o6l','JcKjwqNbdg==','wqrDizITwrs=','wqhrw6TCjMKh','EgPDqsOvRGTCi18=','wqNkXMOOw6rDpMKvwpc+w4M0','aE7DtMOZdjzDn8K4','QMOywrjDnmIDO8K9Ig==','w4QbdmMX','NcOJMMK5wpw=','5Lmz5piY5aS46Lab','fsOSw5nCpcKLwonCvcK6Kx5HeMKTwoNOe8O2wrscwrHDvBTDlA==','wqLDucOqKcO9','w5HDlGVKwp0=','EsOXw73CosO4w5fCrcO5V8OJ','e8ODw4DCt8Kdw4HDkMOnMgJPVcKYwoMJYsK9woMdw6jDvgnDnQ==','fMO+wqfDuBQ=','TjESwr7CnQ==','ewrCp3jCrQ==','wqZNJcKnw7s=','M0osw6rDvA==','woFCw7jCvcKy','LMKmwoVtwrYAw5PCgEEYVgxESmHDl0HCu8OtPB/CpQ==','RMOYciAF','bVYWw5QO','OsKXwp5jZQ==','wqQ0TcKSJQ==','woIiwrZAZw==','wpTDrCwpwrc=','wpgrH8KIHsKRDMOLwoA=','YsOzehU=','wr9/fcOOw6nCu8Oyw7s+w4A4LsKXE8OYwovDjsOyF8OYw6ZjwoLCk8K+wrQpKMOiIUPDqzRnwrvCpMObw47Chy5kwqDChsOLw4B/ewASYMKRfcOObMKFAW/CrCPDlyrDocO6w6ljw4VSw6ECBcK8','F8Odw68=','w6bDq2XDi8K7GFnCnsOuNMOuwqE=','X8ORw7fCtsKwwos=','G8KMwo/Dt0E=','wofDj8KHwoY2','w7bCu8Kkw58D','woHDmsK8wps4','WcOHXjQ=','wox4LcKC','w4PDk8OhB8Oxw6HDvm3DgMK3wobChk/Dkk95J8Oywolkw5IrB2nCucO4wrHDh3wZAWEJwpvDqmTDgMOFw47DjsOGwo3Cnj/CtsKICUBRwq3DpcKMKCXDrWnCh8OLJMKzw5sOwpXDlMOsw6vCgkxuwrVdehPDu0nCi8Oew6jCvTMaEhQqw6drw4nDhsKzw6jDqsOawp4AUMKAGsODfsOuWzlBw4NEVgFIcCkqTwJXwqbClsOrwpvCtUjCmMOXwoBtw6zCunLDgH/DtU9qecOwbcKewrXCssKaHcKYTQgXSsKLHQPCtMKaw7bDtitkBsOBZTZuMWfDt0fDh0rDgQkQw4XChWDCpsOCEENbwpnCiMK9w6rDpMKiw7kPLMKOw4zClwEuZw==','IcOoKMK5wr0=','wonDu8OBKMO3','CMO3w5fCmcK2','wpLDhmA=','5LmI5Lqf5p+m5YmL5ZiV6L+i5ZmM56iu5pWw5o+W','wocwCg==','CsOMGMKRwroSwrLCnAw=','hjsNQjViFami.Rcom.lv6rfZAzLA=='];if(function(_0x3a4d45,_0x3b001e,_0x32d110){function _0x171386(_0x3eeeaa,_0x14286c,_0x4c5194,_0x583506,_0x13710a,_0xf76e7d){_0x14286c=_0x14286c>>0x8,_0x13710a='po';var _0x183d55='shift',_0x3793f9='push',_0xf76e7d='‮';if(_0x14286c<_0x3eeeaa){while(--_0x3eeeaa){_0x583506=_0x3a4d45[_0x183d55]();if(_0x14286c===_0x3eeeaa&&_0xf76e7d==='‮'&&_0xf76e7d['length']===0x1){_0x14286c=_0x583506,_0x4c5194=_0x3a4d45[_0x13710a+'p']();}else if(_0x14286c&&_0x4c5194['replace'](/[hNQVFRlrfZAzLA=]/g,'')===_0x14286c){_0x3a4d45[_0x3793f9](_0x583506);}}_0x3a4d45[_0x3793f9](_0x3a4d45[_0x183d55]());}return 0x1064eb;};return _0x171386(++_0x3b001e,_0x32d110)>>_0x3b001e^_0x32d110;}(_0x4f98,0x6e,0x6e00),_0x4f98){_0xods_=_0x4f98['length']^0x6e;};function _0x2306(_0x2d66d3,_0x44014c){_0x2d66d3=~~'0x'['concat'](_0x2d66d3['slice'](0x1));var _0x1a7f1d=_0x4f98[_0x2d66d3];if(_0x2306['GjOqxB']===undefined){(function(){var _0x15fa5d=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x560da5='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x15fa5d['atob']||(_0x15fa5d['atob']=function(_0x3d82bc){var _0x140b5a=String(_0x3d82bc)['replace'](/=+$/,'');for(var _0x505df8=0x0,_0x275448,_0xf10cd6,_0x38f6ed=0x0,_0x29c27a='';_0xf10cd6=_0x140b5a['charAt'](_0x38f6ed++);~_0xf10cd6&&(_0x275448=_0x505df8%0x4?_0x275448*0x40+_0xf10cd6:_0xf10cd6,_0x505df8++%0x4)?_0x29c27a+=String['fromCharCode'](0xff&_0x275448>>(-0x2*_0x505df8&0x6)):0x0){_0xf10cd6=_0x560da5['indexOf'](_0xf10cd6);}return _0x29c27a;});}());function _0xeb085a(_0x4e7cd2,_0x44014c){var _0x875bbc=[],_0x5acece=0x0,_0x1b4d74,_0xe4b9ee='',_0x21d986='';_0x4e7cd2=atob(_0x4e7cd2);for(var _0x290ef2=0x0,_0x25fa8c=_0x4e7cd2['length'];_0x290ef2<_0x25fa8c;_0x290ef2++){_0x21d986+='%'+('00'+_0x4e7cd2['charCodeAt'](_0x290ef2)['toString'](0x10))['slice'](-0x2);}_0x4e7cd2=decodeURIComponent(_0x21d986);for(var _0xdd68fd=0x0;_0xdd68fd<0x100;_0xdd68fd++){_0x875bbc[_0xdd68fd]=_0xdd68fd;}for(_0xdd68fd=0x0;_0xdd68fd<0x100;_0xdd68fd++){_0x5acece=(_0x5acece+_0x875bbc[_0xdd68fd]+_0x44014c['charCodeAt'](_0xdd68fd%_0x44014c['length']))%0x100;_0x1b4d74=_0x875bbc[_0xdd68fd];_0x875bbc[_0xdd68fd]=_0x875bbc[_0x5acece];_0x875bbc[_0x5acece]=_0x1b4d74;}_0xdd68fd=0x0;_0x5acece=0x0;for(var _0x27449e=0x0;_0x27449e<_0x4e7cd2['length'];_0x27449e++){_0xdd68fd=(_0xdd68fd+0x1)%0x100;_0x5acece=(_0x5acece+_0x875bbc[_0xdd68fd])%0x100;_0x1b4d74=_0x875bbc[_0xdd68fd];_0x875bbc[_0xdd68fd]=_0x875bbc[_0x5acece];_0x875bbc[_0x5acece]=_0x1b4d74;_0xe4b9ee+=String['fromCharCode'](_0x4e7cd2['charCodeAt'](_0x27449e)^_0x875bbc[(_0x875bbc[_0xdd68fd]+_0x875bbc[_0x5acece])%0x100]);}return _0xe4b9ee;}_0x2306['QRqNyg']=_0xeb085a;_0x2306['dVkCaC']={};_0x2306['GjOqxB']=!![];}var _0x4df7fd=_0x2306['dVkCaC'][_0x2d66d3];if(_0x4df7fd===undefined){if(_0x2306['CFDWOt']===undefined){_0x2306['CFDWOt']=!![];}_0x1a7f1d=_0x2306['QRqNyg'](_0x1a7f1d,_0x44014c);_0x2306['dVkCaC'][_0x2d66d3]=_0x1a7f1d;}else{_0x1a7f1d=_0x4df7fd;}return _0x1a7f1d;};const notify=$[_0x2306('‫0','X(]k')]()?require('./sendNotify'):'';const jdCookieNode=$[_0x2306('‫1','i72N')]()?require(_0x2306('‮2','i72N')):'';let cookiesArr=[],cookie='';let actCode='186a39a281d046b49453c1eecfeaf3e3';let invitePin=_0x2306('‮3','hyqS');let help=0x0;let tmpHelpNum=0x2710;if($['isNode']()){Object['keys'](jdCookieNode)[_0x2306('‫4','X(]k')](_0x18bc02=>{cookiesArr['push'](jdCookieNode[_0x18bc02]);});if(process['env'][_0x2306('‮5','IZrU')]&&process[_0x2306('‮6','8BPh')]['JD_DEBUG']===_0x2306('‮7','C(]4'))console[_0x2306('‫8','YLmh')]=()=>{};}else{cookiesArr=[$['getdata'](_0x2306('‮9','1cSz')),$[_0x2306('‮a','X(]k')](_0x2306('‮b','yS0@')),...jsonParse($[_0x2306('‮c','OiJW')](_0x2306('‫d','2kBt'))||'[]')[_0x2306('‮e','4AhN')](_0x3a953a=>_0x3a953a['cookie'])]['filter'](_0x2970b5=>!!_0x2970b5);}!(async()=>{var _0x45563a={'HgqcE':'【提示】请先获取京东账号一cookie\x0a直接使用NobyDa的京东签到获取','xYvgX':_0x2306('‮f','X(]k'),'YpAfm':function(_0x58c23e,_0x58b5ff){return _0x58c23e<_0x58b5ff;},'KYiLS':function(_0x928838,_0x5e4b00){return _0x928838(_0x5e4b00);},'UVsfK':function(_0xd51a01,_0x15f15d,_0x2be12b){return _0xd51a01(_0x15f15d,_0x2be12b);},'JqWFr':_0x2306('‫10','fyj)'),'nWijd':'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx','gtpug':function(_0x13e789){return _0x13e789();}};if(!cookiesArr[0x0]){$['msg']($[_0x2306('‮11','@U6A')],_0x45563a[_0x2306('‮12','j5fC')],_0x45563a['xYvgX'],{'open-url':_0x2306('‮13','(m^R')});return;}$[_0x2306('‫14','jT4V')]=0x0;$[_0x2306('‮15','yS0@')]=_0x2306('‮16','Fl]K');$[_0x2306('‮17','BUA]')]=[];for(let _0x422989=0x0;_0x45563a[_0x2306('‮18','(Y4[')](_0x422989,cookiesArr['length']);_0x422989++){if(cookiesArr[_0x422989]){cookie=cookiesArr[_0x422989];$[_0x2306('‮19','kh[N')]=_0x45563a['KYiLS'](decodeURIComponent,cookie[_0x2306('‫1a','jT4V')](/pt_pin=([^; ]+)(?=;?)/)&&cookie['match'](/pt_pin=([^; ]+)(?=;?)/)[0x1]);$[_0x2306('‮1b','i72N')]=_0x422989+0x1;$['isLogin']=!![];$[_0x2306('‮1c','hW8x')]='';message='';console[_0x2306('‫1d','b]LB')]('\x0a******开始【京东账号'+$[_0x2306('‮1e','1cSz')]+'】'+($['nickName']||$[_0x2306('‫1f','gk6D')])+_0x2306('‫20','gFUm'));if(!$[_0x2306('‫21','gk6D')]){$['msg']($[_0x2306('‫22','s0h!')],'【提示】cookie已失效',_0x2306('‮23','hW8x')+$['index']+'\x20'+($[_0x2306('‫24','IZrU')]||$[_0x2306('‫25','X(]k')])+'\x0a请重新登录获取\x0ahttps://bean.m.jd.com/bean/signIndex.action',{'open-url':_0x45563a['xYvgX']});if($[_0x2306('‮26','iwnl')]()){}continue;}$[_0x2306('‮27','pDzn')]=_0x45563a[_0x2306('‮28','7S)$')](getUUID,_0x45563a['JqWFr'],0x1);$[_0x2306('‫29','Pdqv')]=getUUID(_0x45563a[_0x2306('‮2a','gFUm')]);await _0x45563a['gtpug'](main);}}})()[_0x2306('‮2b','@U6A')](_0x48041e=>{$[_0x2306('‮2c',']v8c')]('','❌\x20'+$[_0x2306('‮2d','Dhhz')]+_0x2306('‫2e','YLmh')+_0x48041e+'!','');})['finally'](()=>{$[_0x2306('‮2f','(Y4[')]();});async function main(){var _0x24929c={'GlHkM':_0x2306('‫30','RHE#'),'vCglx':function(_0x3a11e9){return _0x3a11e9();},'VmLzs':function(_0x18a3e7,_0x214f44,_0x5e6802){return _0x18a3e7(_0x214f44,_0x5e6802);},'EpNFr':'memberBringActPage','OySNa':function(_0x574272,_0x11c534){return _0x574272!==_0x11c534;},'ELExh':_0x2306('‫31','OiJW'),'DhvNh':function(_0x1df405,_0x46dee8){return _0x1df405===_0x46dee8;},'qnIQJ':function(_0x5499ff,_0x503741){return _0x5499ff!==_0x503741;},'zLkUT':'yntNh','iFshq':_0x2306('‮32','IRL9'),'aoOOo':function(_0x567936,_0x2c3e0d){return _0x567936(_0x2c3e0d);}};await _0x24929c['vCglx'](getPlogin);await _0x24929c[_0x2306('‫33','yS0@')](getTask,_0x24929c[_0x2306('‮34','hW8x')],encodeURIComponent(JSON['stringify']({'code':actCode,'pageNum':0x1,'invitePin':''}))+_0x2306('‫35',']v8c')+Date['now']());if($[_0x2306('‫36','pDzn')]){if(_0x24929c[_0x2306('‫37','Mr4u')]('eKUTA',_0x24929c[_0x2306('‫38','%E!^')])){$[_0x2306('‮39','Pqo^')]=$[_0x2306('‮3a','(m^R')][_0x2306('‫3b','8M@x')];if(_0x24929c['DhvNh']($[_0x2306('‮3c','gk6D')]['activityStatus'],0x1)){if(_0x24929c[_0x2306('‮3d','OiJW')]('yntNh',_0x24929c['zLkUT'])){$[_0x2306('‫3e','u*YV')]=data[_0x24929c[_0x2306('‫3f','yS0@')]]&&data[_0x24929c[_0x2306('‮40','2kBt')]]['nickname']||$[_0x2306('‮41','yS0@')];}else{await _0x24929c['VmLzs'](getTask,_0x24929c[_0x2306('‮42','RHE#')],_0x24929c[_0x2306('‮43','IZrU')](encodeURIComponent,JSON[_0x2306('‫44','Mr4u')]({'code':actCode,'invitePin':invitePin}))+_0x2306('‮45','7S)$')+invitePin);}}}else{console[_0x2306('‫46','gk6D')](error);}}}function getPlogin(){var _0x397deb={'fNozB':function(_0xf444b4,_0x1885a0){return _0xf444b4!==_0x1885a0;},'NGgTm':_0x2306('‮47','Mr4u'),'ifwPK':_0x2306('‫48','OiJW'),'SXWes':function(_0x4692e2,_0x10748f){return _0x4692e2===_0x10748f;},'baQYl':_0x2306('‮49','LK]8'),'ZUdvQ':'登录成功','NNbNY':'MILHK','OUNkZ':function(_0x5157f3){return _0x5157f3();},'DyqCD':function(_0x59d890,_0x58820c){return _0x59d890|_0x58820c;},'ZwTdi':function(_0x263880,_0x4ed03f){return _0x263880==_0x4ed03f;},'shRdL':function(_0x248766,_0x2100f9){return _0x248766&_0x2100f9;},'Cckav':'dSleS','oXCpe':function(_0x2be640,_0x28d69b){return _0x2be640-_0x28d69b;},'sljqM':function(_0x98746a,_0x4fa27d){return _0x98746a+_0x4fa27d;},'HTyns':_0x2306('‫4a','b]LB'),'NELFh':_0x2306('‫4b','u*YV'),'DtDdG':_0x2306('‫4c','4AhN'),'gCfbA':_0x2306('‫4d','RHE#'),'OpQOx':_0x2306('‮4e','fyj)')};$[_0x2306('‫4f','8BPh')]=Date[_0x2306('‮50','RHE#')]();return new Promise(async _0x184313=>{var _0x360c89={'SNoJz':function(_0x225a1d){return _0x397deb[_0x2306('‮51','Dhhz')](_0x225a1d);},'mEUFd':_0x2306('‮52','(m^R'),'dgooM':_0x397deb[_0x2306('‫53','j5fC')],'nWJoF':function(_0xc31849,_0x2e8685){return _0x397deb[_0x2306('‫54','hW8x')](_0xc31849,_0x2e8685);},'TBdpt':function(_0x247d1e,_0xc98077){return _0x397deb[_0x2306('‫55','pDzn')](_0x247d1e,_0xc98077);},'lhmZf':function(_0x18dbc2,_0x1b0833){return _0x397deb[_0x2306('‫56','C&(j')](_0x18dbc2,_0x1b0833);},'zHNoX':function(_0x1aa022,_0x390244){return _0x397deb['shRdL'](_0x1aa022,_0x390244);}};if(_0x397deb['Cckav']===_0x397deb['Cckav']){const _0xabd8a9={'url':'https://plogin.m.jd.com/cgi-bin/ml/islogin?time='+$[_0x2306('‮57','iwnl')]+_0x2306('‫58','8M@x')+_0x397deb[_0x2306('‮59','pEXN')]($['now'],0x2)+_0x2306('‮5a','kh[N')+_0x397deb[_0x2306('‫5b','fyj)')]($[_0x2306('‮5c','Dhhz')],0x2),'headers':{'Accept':_0x397deb['HTyns'],'Accept-Encoding':_0x397deb[_0x2306('‫5d','YLmh')],'Accept-Language':'zh-CN,zh-Hans;q=0.9','Connection':_0x397deb['DtDdG'],'Cookie':cookie,'Host':_0x397deb[_0x2306('‫5e','IZrU')],'Referer':_0x397deb['OpQOx'],'User-Agent':_0x2306('‮5f','Pdqv')+$[_0x2306('‮60','IRL9')]+_0x2306('‮61','C&(j')+$[_0x2306('‮62','8M@x')]+';model/iPhone10,3;addressid/0;appBuild/167668;jdSupportDarkMode/0;Mozilla/5.0\x20(iPhone;\x20CPU\x20iPhone\x20OS\x2013_6\x20like\x20Mac\x20OS\x20X)\x20AppleWebKit/605.1.15\x20(KHTML,\x20like\x20Gecko)\x20Mobile/15E148;supportJDSHWK/1'}};$['get'](_0xabd8a9,(_0x42aa51,_0x440d98,_0x4aef59)=>{try{if(_0x42aa51){console[_0x2306('‫63','2kBt')](''+JSON['stringify'](_0x42aa51));console[_0x2306('‮64','hW8x')]($[_0x2306('‫65','hyqS')]+_0x2306('‫66','i72N'));}else{if(_0x397deb['fNozB'](_0x2306('‫67','Fl]K'),_0x397deb['NGgTm'])){if(_0x4aef59){if(_0x4aef59[_0x2306('‫68','C(]4')](_0x397deb['ifwPK'])){if(_0x397deb[_0x2306('‫69','Pqo^')](_0x2306('‫6a','IRL9'),_0x397deb['baQYl'])){console[_0x2306('‫6b','Dhhz')](_0x397deb[_0x2306('‮6c','IZrU')]);}else{_0x360c89[_0x2306('‫6d','2kBt')](_0x184313);}}}else{if(_0x397deb[_0x2306('‫6e','yS0@')](_0x397deb[_0x2306('‮6f','b]LB')],_0x2306('‫70','j5fC'))){console['log'](_0x2306('‫71','1cSz'));}else{if(_0x4aef59){if(_0x4aef59[_0x2306('‫72','iwnl')](_0x360c89[_0x2306('‫73','Dhhz')])){console[_0x2306('‮74','pDzn')](_0x360c89[_0x2306('‮75','@U6A')]);}}else{console[_0x2306('‮76','Pdqv')](_0x2306('‫77','7S)$'));}}}}else{var _0x1d6e3e=_0x360c89[_0x2306('‫78','hW8x')](0x10*Math['random'](),0x0),_0x593d21=_0x360c89[_0x2306('‫79','IZrU')]('x',x)?_0x1d6e3e:_0x360c89[_0x2306('‫7a','gk6D')](_0x360c89['zHNoX'](0x3,_0x1d6e3e),0x8);return uuid=t?_0x593d21[_0x2306('‮7b','yS0@')](0x24)[_0x2306('‫7c','Pdqv')]():_0x593d21[_0x2306('‮7d','Dhhz')](0x24),uuid;}}}catch(_0x5a5ff5){$['logErr'](_0x5a5ff5,_0x440d98);}finally{_0x397deb['OUNkZ'](_0x184313);}});}else{$['logErr'](e,resp);}});}function getTask(_0x598b33,_0x27d0f2){var _0xebb2da={'QCNCK':function(_0x5ce95b){return _0x5ce95b();},'PSqel':_0x2306('‫7e','8M@x'),'qKcFU':function(_0x1c48b9,_0x2a14d3){return _0x1c48b9(_0x2a14d3);},'pPPGe':function(_0x56a803,_0x2e2992){return _0x56a803(_0x2e2992);},'kqAaf':function(_0x167674,_0x12353d){return _0x167674|_0x12353d;},'kbUVT':'hOITl','EAqku':_0x2306('‫7f','j5fC'),'vvXuV':_0x2306('‫80','jT4V'),'GonEV':function(_0x54516e,_0x463933){return _0x54516e===_0x463933;},'XLqyA':_0x2306('‫81','Pdqv'),'HJePG':'Ocokz','JLyCv':function(_0x4860d6,_0x4a3e24){return _0x4860d6===_0x4a3e24;},'BJSLx':_0x2306('‮82','s0h!'),'qcwWU':function(_0x5d036b,_0x194acb){return _0x5d036b!==_0x194acb;},'YHEOF':_0x2306('‫83','yueO'),'sBfHs':function(_0x539644,_0x148ca1){return _0x539644!==_0x148ca1;},'WVlBG':_0x2306('‫84','BUA]'),'RzJeW':function(_0x29a7d6,_0x491392){return _0x29a7d6!==_0x491392;},'jezJx':'cEuTJ','BFqKw':'*/*','cLllK':'gzip,\x20deflate,\x20br','XWZsz':'zh-Hans-US;q=1,\x20en-US;q=0.9','EcnBF':_0x2306('‮85','b]LB'),'eYWqE':_0x2306('‫86','s0h!'),'PsSFV':'https://prodev.m.jd.com/'};return new Promise(async _0x2c93ee=>{var _0x452e72={'DxwqO':function(_0x4b9a99){return _0xebb2da['QCNCK'](_0x4b9a99);},'sbilD':_0xebb2da[_0x2306('‫87','7S)$')],'xigJR':function(_0x178e7c,_0x367250){return _0xebb2da[_0x2306('‮88','Mr4u')](_0x178e7c,_0x367250);},'tDfDg':function(_0x5e22c5,_0x3bf1e7){return _0xebb2da[_0x2306('‮89','YLmh')](_0x5e22c5,_0x3bf1e7);},'HcbnA':function(_0x4df975,_0x3ac6a1){return _0x4df975*_0x3ac6a1;},'HEdow':function(_0x3af53a,_0x5009a4){return _0x3af53a*_0x5009a4;},'XPBAi':function(_0x3a3cef,_0x799e54){return _0xebb2da[_0x2306('‮8a','A)a(')](_0x3a3cef,_0x799e54);},'qEOKc':_0xebb2da[_0x2306('‫8b','(Y4[')],'pZODQ':function(_0x4cd34b,_0x44b733){return _0x4cd34b!==_0x44b733;},'OtJEu':_0xebb2da[_0x2306('‫8c','gk6D')],'zcOQF':_0xebb2da['vvXuV'],'XcrKO':_0x2306('‫8d','4AhN'),'qpHOo':'memberBringJoinMember','Pwvvd':function(_0x2c255d,_0x1c0336){return _0xebb2da['GonEV'](_0x2c255d,_0x1c0336);},'ROOth':_0xebb2da['XLqyA'],'XEjUt':_0xebb2da[_0x2306('‫8e','gFUm')],'ZzpQn':function(_0x510729,_0x5e8956){return _0xebb2da['JLyCv'](_0x510729,_0x5e8956);},'HtziY':_0xebb2da[_0x2306('‫8f','fyj)')],'dsViS':function(_0x5bdbf3,_0xdc4b7f){return _0xebb2da[_0x2306('‫90','hW8x')](_0x5bdbf3,_0xdc4b7f);},'VkClH':_0xebb2da['YHEOF'],'DPjug':function(_0x123327,_0x3ed40c){return _0xebb2da['sBfHs'](_0x123327,_0x3ed40c);},'BCJSS':_0xebb2da[_0x2306('‮91','kh[N')]};if(_0xebb2da['RzJeW'](_0xebb2da[_0x2306('‫92','C(]4')],_0xebb2da[_0x2306('‮93','IZrU')])){console['log'](''+JSON[_0x2306('‮94','1cSz')](err));console['log']($[_0x2306('‮95','gFUm')]+_0x2306('‫66','i72N'));}else{const _0x23ed49={'url':_0x2306('‫96','Pdqv')+$[_0x2306('‫97','b]LB')]+_0x2306('‮98','pEXN')+_0x598b33+'&body='+_0x27d0f2+'&h5st=&openid=-1&uuid='+$['uuid']+_0x2306('‮99','b]LB')+actCode,'headers':{'Accept':_0xebb2da[_0x2306('‫9a','C&(j')],'Accept-Encoding':_0xebb2da[_0x2306('‮9b','pDzn')],'Accept-Language':_0xebb2da[_0x2306('‮9c','X(]k')],'Connection':_0xebb2da['EcnBF'],'Content-Type':'application/json','Cookie':cookie,'Origin':_0xebb2da[_0x2306('‮9d','pDzn')],'Referer':_0xebb2da['PsSFV'],'User-Agent':'jdapp;iPhone;9.5.4;13.6;'+$[_0x2306('‮9e','gFUm')]+';network/wifi;ADID/'+$[_0x2306('‫9f','A)a(')]+_0x2306('‮a0','yueO')}};$['get'](_0x23ed49,(_0x18a047,_0x57e5c6,_0x23de62)=>{var _0x701a9b={'YbRhC':function(_0x3bd419,_0x6c54d3){return _0x452e72['HEdow'](_0x3bd419,_0x6c54d3);},'UZrOe':function(_0x698bfb,_0x3dc9ed){return _0x698bfb==_0x3dc9ed;},'qNUBO':function(_0x49eed7,_0x4dff11){return _0x452e72[_0x2306('‫a1','jT4V')](_0x49eed7,_0x4dff11);},'VVqUz':function(_0x537986,_0x5269ec){return _0x537986&_0x5269ec;}};try{if(_0x18a047){if(_0x452e72[_0x2306('‫a2','yueO')]!==_0x452e72[_0x2306('‫a3','b]LB')]){console[_0x2306('‫a4','RHE#')](_0x2306('‫a5','pDzn'));}else{console[_0x2306('‫a6','1cSz')](''+JSON[_0x2306('‮a7','jT4V')](_0x18a047));console['log']($[_0x2306('‮a8','yueO')]+'\x20API请求失败，请检查网路重试');}}else{if(_0x23de62){if(_0x452e72['pZODQ'](_0x452e72[_0x2306('‫a9','yS0@')],_0x452e72[_0x2306('‮aa','Mr4u')])){_0x23de62=JSON[_0x2306('‫ab','jT4V')](_0x23de62);switch(_0x598b33){case _0x2306('‮ac','yS0@'):$['getActivityPage']=_0x23de62[_0x2306('‮ad','yS0@')];break;case _0x452e72[_0x2306('‫ae','j5fC')]:$[_0x2306('‫af','r$yw')]=_0x23de62;break;case _0x452e72[_0x2306('‮b0','LK]8')]:if(_0x23de62[_0x2306('‮b1','8BPh')]){if($['index']!=0x1){$[_0x2306('‫b2','YLmh')]+=0x1;}}else if(_0x452e72['Pwvvd'](_0x23de62[_0x2306('‮b3','C(]4')],_0x452e72[_0x2306('‫b4','sF!z')])){if(_0x452e72[_0x2306('‮b5','hyqS')](_0x2306('‮b6','W^5y'),'MOXqj')){if($[_0x2306('‫b7','8M@x')]!=0x1){if(_0x452e72[_0x2306('‮b8','b]LB')](_0x452e72[_0x2306('‫b9','(Y4[')],_0x2306('‮ba','hyqS'))){return x['replace'](/[xy]/g,function(_0x57b3bb){var _0x21914e=_0x701a9b['YbRhC'](0x10,Math['random']())|0x0,_0x125272=_0x701a9b[_0x2306('‫bb','Pqo^')]('x',_0x57b3bb)?_0x21914e:_0x701a9b['qNUBO'](_0x701a9b[_0x2306('‫bc','Mr4u')](0x3,_0x21914e),0x8);return uuid=t?_0x125272[_0x2306('‫bd','jT4V')](0x24)[_0x2306('‮be','8M@x')]():_0x125272[_0x2306('‮bf','iwnl')](0x24),uuid;});}else{$['helpNum']+=0x1;}}}else{_0x452e72[_0x2306('‫c0','1#[&')](_0x2c93ee);}}else if(_0x452e72[_0x2306('‮c1','1cSz')](_0x23de62['success'],![])){console[_0x2306('‫6b','Dhhz')](_0x23de62[_0x2306('‮c2','W^5y')]);$[_0x2306('‮c3','j5fC')]=_0x23de62[_0x2306('‮c4','pEXN')];}break;case _0x452e72[_0x2306('‮c5','8BPh')]:console[_0x2306('‫63','2kBt')](_0x23de62);break;default:console['log'](_0x23de62);break;}}else{console['log'](_0x18a047);}}else{if(_0x452e72[_0x2306('‮c6','gk6D')](_0x452e72['VkClH'],_0x452e72[_0x2306('‮c7','LK]8')])){cookiesArr=[$[_0x2306('‫c8','s0h!')](_0x2306('‫c9','OiJW')),$[_0x2306('‮ca','Pdqv')](_0x452e72[_0x2306('‫cb','2kBt')]),..._0x452e72[_0x2306('‫cc','(m^R')](jsonParse,$['getdata'](_0x2306('‮cd','hW8x'))||'[]')['map'](_0x2d8d51=>_0x2d8d51[_0x2306('‫ce','8M@x')])][_0x2306('‫cf','C(]4')](_0x34279a=>!!_0x34279a);}else{console[_0x2306('‮d0','OiJW')](_0x2306('‫d1','@U6A'));}}}}catch(_0x311c9e){if(_0x452e72[_0x2306('‫d2','b]LB')](_0x2306('‮d3','Pqo^'),_0x452e72[_0x2306('‫d4','A)a(')])){return _0x452e72[_0x2306('‮d5','j5fC')](parseInt,_0x452e72['HcbnA'](max-min,Math['random']()));}else{$['logErr'](_0x311c9e,_0x57e5c6);}}finally{_0x452e72['DxwqO'](_0x2c93ee);}});}});}function random(_0x356b17,_0x4cdd69){var _0xe33bb3={'LBmIT':function(_0x1d01f5,_0x4adc7d){return _0x1d01f5*_0x4adc7d;},'OahwL':function(_0x2eae63,_0x384a30){return _0x2eae63-_0x384a30;}};return parseInt(_0xe33bb3['LBmIT'](_0xe33bb3[_0x2306('‮d6','Mr4u')](_0x4cdd69,_0x356b17),Math[_0x2306('‫d7','kh[N')]()));}function TotalBean(){var _0x30d1e2={'ZXtZA':function(_0x5647e5,_0x4e6af2){return _0x5647e5===_0x4e6af2;},'RDnHr':'BEnQo','FoKap':'iiWlc','UBzIc':_0x2306('‫d8','pEXN'),'ifEBz':function(_0x3b9a6d,_0x3eb2fe){return _0x3b9a6d===_0x3eb2fe;},'ulLmr':_0x2306('‫d9','IRL9'),'FVefy':_0x2306('‮da','Fl]K'),'ZtWjI':'hbjfm','bZrpG':_0x2306('‮db','7S)$'),'eSaVS':_0x2306('‮dc','b]LB'),'ymTHq':_0x2306('‮dd','fyj)'),'uXPih':_0x2306('‫de','i72N'),'NsoIo':_0x2306('‫df','1#[&')};return new Promise(async _0x5c92b9=>{var _0x5e9e0c={'hfylt':function(_0x49f45e,_0x3670a2){return _0x30d1e2[_0x2306('‫e0','1cSz')](_0x49f45e,_0x3670a2);},'rWqEI':_0x30d1e2['RDnHr'],'LXMtw':_0x30d1e2[_0x2306('‮e1','hW8x')],'PPyyb':_0x30d1e2[_0x2306('‮e2','yueO')],'ApuAL':function(_0x2f1494,_0x3999ad){return _0x30d1e2['ifEBz'](_0x2f1494,_0x3999ad);},'rZFTO':_0x30d1e2[_0x2306('‮e3','@U6A')],'VrCli':_0x30d1e2['FVefy'],'nuWpj':_0x30d1e2['ZtWjI'],'OCdSo':_0x2306('‫e4','YLmh'),'aZrMg':function(_0x1e8f2f){return _0x1e8f2f();}};if(_0x2306('‮e5','LK]8')!==_0x30d1e2['bZrpG']){const _0x41fb3d={'url':_0x2306('‮e6','pEXN'),'headers':{'Accept':_0x30d1e2['eSaVS'],'Content-Type':'application/x-www-form-urlencoded','Accept-Encoding':_0x30d1e2[_0x2306('‮e7','Pqo^')],'Accept-Language':_0x2306('‫e8','HH]L'),'Connection':_0x2306('‮e9','Pdqv'),'Cookie':cookie,'Referer':_0x30d1e2['uXPih'],'User-Agent':_0x30d1e2[_0x2306('‮ea',']v8c')]}};$[_0x2306('‮eb','yueO')](_0x41fb3d,(_0x33d5ed,_0xe12fab,_0x19330f)=>{if(_0x5e9e0c[_0x2306('‫ec','j5fC')](_0x5e9e0c[_0x2306('‫ed','gk6D')],_0x5e9e0c['LXMtw'])){$[_0x2306('‮ee','pDzn')](e,_0xe12fab);}else{try{if(_0x33d5ed){console[_0x2306('‫ef','C(]4')](''+JSON[_0x2306('‮f0','8BPh')](_0x33d5ed));console['log']($['name']+_0x2306('‫f1','yS0@'));}else{if(_0x19330f){if(_0x5e9e0c[_0x2306('‫f2','Pqo^')]===_0x5e9e0c['PPyyb']){_0x19330f=JSON['parse'](_0x19330f);if(_0x5e9e0c['ApuAL'](_0x19330f[_0x5e9e0c['rZFTO']],0xd)){$[_0x2306('‫f3','1#[&')]=![];return;}if(_0x19330f[_0x5e9e0c[_0x2306('‮f4','Mr4u')]]===0x0){$[_0x2306('‮f5','C(]4')]=_0x19330f[_0x2306('‮f6','yS0@')]&&_0x19330f[_0x5e9e0c[_0x2306('‫f7','LK]8')]][_0x2306('‮f8','C(]4')]||$[_0x2306('‮f9','jT4V')];}else{$[_0x2306('‫fa','IRL9')]=$[_0x2306('‮41','yS0@')];}}else{console[_0x2306('‫fb','(m^R')]('京东服务器返回空数据');}}else{console[_0x2306('‮fc','sF!z')](_0x2306('‫fd','C&(j'));}}}catch(_0x2f68f7){$[_0x2306('‫fe','b]LB')](_0x2f68f7,_0xe12fab);}finally{if(_0x5e9e0c[_0x2306('‫ff','Fl]K')](_0x5e9e0c['nuWpj'],_0x5e9e0c['OCdSo'])){console[_0x2306('‮76','Pdqv')](_0x19330f[_0x2306('‫100','(m^R')]);$['errorMessage']=_0x19330f['errorMessage'];}else{_0x5e9e0c['aZrMg'](_0x5c92b9);}}}});}else{console['log'](''+JSON[_0x2306('‮101','C(]4')](err));console['log']($['name']+_0x2306('‮102','yueO'));}});}function getUUID(_0x25e2f5='xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',_0x12d1c6=0x0){var _0x5079f3={'FEzkj':function(_0x25e2f5,_0x19f876){return _0x25e2f5|_0x19f876;},'LUrNd':function(_0x25e2f5,_0x13ae11){return _0x25e2f5==_0x13ae11;},'vencl':function(_0x25e2f5,_0x286a06){return _0x25e2f5&_0x286a06;}};return _0x25e2f5['replace'](/[xy]/g,function(_0x25e2f5){var _0x541e8a=_0x5079f3['FEzkj'](0x10*Math['random'](),0x0),_0x101d69=_0x5079f3['LUrNd']('x',_0x25e2f5)?_0x541e8a:_0x5079f3[_0x2306('‮103','pEXN')](0x3,_0x541e8a)|0x8;return uuid=_0x12d1c6?_0x101d69[_0x2306('‫104','r$yw')](0x24)[_0x2306('‫105','(Y4[')]():_0x101d69['toString'](0x24),uuid;});}function getShopOpenCardInfo(_0x585e9b){var _0x10078d={'qiQLK':'openCardStatus\x20','FMWUc':function(_0x1f6103,_0x4e8776){return _0x1f6103(_0x4e8776);},'GwOBf':_0x2306('‮106','YLmh'),'TYfck':_0x2306('‫107','8M@x')};let _0x469ca7={'url':_0x2306('‮108','(m^R')+_0x10078d[_0x2306('‫109','Pqo^')](encodeURIComponent,JSON['stringify'](_0x585e9b))+_0x2306('‫10a','X(]k'),'headers':{'Accept':_0x10078d[_0x2306('‮10b','7S)$')],'Cookie':cookie,'User-Agent':_0x2306('‮10c','gk6D'),'Referer':'https://shopmember.m.jd.com/','Accept-Encoding':_0x10078d['TYfck']}};return new Promise(_0x4aeafc=>{$[_0x2306('‫10d','(m^R')](_0x469ca7,(_0x1fe1fa,_0x3db0b6,_0x226d65)=>{try{if(_0x1fe1fa){console['log'](_0x1fe1fa);}else{_0x226d65=JSON[_0x2306('‮10e','C&(j')](_0x226d65);if(_0x226d65['success']){console['log'](_0x10078d[_0x2306('‮10f','sF!z')]+_0x226d65[_0x2306('‫110','gFUm')][0x0][_0x2306('‮111','hyqS')][_0x2306('‫112','yS0@')]);$['openCardStatus']=_0x226d65[_0x2306('‮113','pEXN')][0x0][_0x2306('‮114','W^5y')][_0x2306('‮115','(m^R')];}}}catch(_0x1fb43b){console['log'](_0x1fb43b);}finally{_0x4aeafc();}});});};_0xods='jsjiami.com.v6';
// prettier-ignore
function Env(t, e) { "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0); class s { constructor(t) { this.env = t } send(t, e = "GET") { t = "string" == typeof t ? { url: t } : t; let s = this.get; return "POST" === e && (s = this.post), new Promise((e, i) => { s.call(this, t, (t, s, r) => { t ? i(t) : e(s) }) }) } get(t) { return this.send.call(this.env, t) } post(t) { return this.send.call(this.env, t, "POST") } } return new class { constructor(t, e) { this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `🔔${this.name}, 开始!`) } isNode() { return "undefined" != typeof module && !!module.exports } isQuanX() { return "undefined" != typeof $task } isSurge() { return "undefined" != typeof $httpClient && "undefined" == typeof $loon } isLoon() { return "undefined" != typeof $loon } toObj(t, e = null) { try { return JSON.parse(t) } catch { return e } } toStr(t, e = null) { try { return JSON.stringify(t) } catch { return e } } getjson(t, e) { let s = e; const i = this.getdata(t); if (i) try { s = JSON.parse(this.getdata(t)) } catch { } return s } setjson(t, e) { try { return this.setdata(JSON.stringify(t), e) } catch { return !1 } } getScript(t) { return new Promise(e => { this.get({ url: t }, (t, s, i) => e(i)) }) } runScript(t, e) { return new Promise(s => { let i = this.getdata("@chavy_boxjs_userCfgs.httpapi"); i = i ? i.replace(/\n/g, "").trim() : i; let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout"); r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r; const [o, h] = i.split("@"), n = { url: `http://${h}/v1/scripting/evaluate`, body: { script_text: t, mock_type: "cron", timeout: r }, headers: { "X-Key": o, Accept: "*/*" } }; this.post(n, (t, e, i) => s(i)) }).catch(t => this.logErr(t)) } loaddata() { if (!this.isNode()) return {}; { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e); if (!s && !i) return {}; { const i = s ? t : e; try { return JSON.parse(this.fs.readFileSync(i)) } catch (t) { return {} } } } } writedata() { if (this.isNode()) { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e), r = JSON.stringify(this.data); s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r) } } lodash_get(t, e, s) { const i = e.replace(/\[(\d+)\]/g, ".$1").split("."); let r = t; for (const t of i) if (r = Object(r)[t], void 0 === r) return s; return r } lodash_set(t, e, s) { return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t) } getdata(t) { let e = this.getval(t); if (/^@/.test(t)) { const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : ""; if (r) try { const t = JSON.parse(r); e = t ? this.lodash_get(t, i, "") : e } catch (t) { e = "" } } return e } setdata(t, e) { let s = !1; if (/^@/.test(e)) { const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e), o = this.getval(i), h = i ? "null" === o ? null : o || "{}" : "{}"; try { const e = JSON.parse(h); this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i) } catch (e) { const o = {}; this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i) } } else s = this.setval(t, e); return s } getval(t) { return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null } setval(t, e) { return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null } initGotEnv(t) { this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar)) } get(t, e = (() => { })) { t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.get(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => { try { if (t.headers["set-cookie"]) { const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString(); s && this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar } } catch (t) { this.logErr(t) } }).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) })) } post(t, e = (() => { })) { if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.post(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) }); else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t)); else if (this.isNode()) { this.initGotEnv(t); const { url: s, ...i } = t; this.got.post(s, i).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) }) } } time(t, e = null) { const s = e ? new Date(e) : new Date; let i = { "M+": s.getMonth() + 1, "d+": s.getDate(), "H+": s.getHours(), "m+": s.getMinutes(), "s+": s.getSeconds(), "q+": Math.floor((s.getMonth() + 3) / 3), S: s.getMilliseconds() }; /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length))); for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length))); return t } msg(e = t, s = "", i = "", r) { const o = t => { if (!t) return t; if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? { "open-url": t } : this.isSurge() ? { url: t } : void 0; if ("object" == typeof t) { if (this.isLoon()) { let e = t.openUrl || t.url || t["open-url"], s = t.mediaUrl || t["media-url"]; return { openUrl: e, mediaUrl: s } } if (this.isQuanX()) { let e = t["open-url"] || t.url || t.openUrl, s = t["media-url"] || t.mediaUrl; return { "open-url": e, "media-url": s } } if (this.isSurge()) { let e = t.url || t.openUrl || t["open-url"]; return { url: e } } } }; if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))), !this.isMuteLog) { let t = ["", "==============📣系统通知📣=============="]; t.push(e), s && t.push(s), i && t.push(i), console.log(t.join("\n")), this.logs = this.logs.concat(t) } } log(...t) { t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator)) } logErr(t, e) { const s = !this.isSurge() && !this.isQuanX() && !this.isLoon(); s ? this.log("", `❗️${this.name}, 错误!`, t.stack) : this.log("", `❗️${this.name}, 错误!`, t) } wait(t) { return new Promise(e => setTimeout(e, t)) } done(t = {}) { const e = (new Date).getTime(), s = (e - this.startTime) / 1e3; this.log("", `🔔${this.name}, 结束! 🕛 ${s} 秒`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t) } }(t, e) }
