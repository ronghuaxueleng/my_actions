/*
活动名称：批量店铺签到（历史查询）
活动链接：https://h5.m.jd.com/babelDiy/Zeus/2PAAf74aG3D61qvfKUM5dxUssJQ9/index.html?token=<token>
环境变量：jd_dpqd_tokens // 活动令牌，多个用英文逗号分割
        jd_dpqd_task_threads // 控制签到并发线程数（正整数），默认1
        jd_dpqd_account_threads // 控制账号并发线程数（正整数），默认1
        jd_dpqd_account_interval // 自定义运行间隔时长（整数，单位毫秒），默认0

此脚本为高并发历史查询本，需要读取主脚本生成的活动信息缓存
脚本主要用于查询连签天数，不会进行签到操作，为了提高签到本的效率故将此功能分离

7 7 7 7 *

*/

const $ = new Env('批量店铺签到（历史查询）')
const jdCookie = require('./jdCookie')
const notify = require('./function/sendJDNotify')
const common = require('./function/jdCommon')
const { jsTk } = require('./function/jdCrypto')

var iｉl='jsjiami.com.v7';const i1iiIIii=IIlilIii;(function(I1Iil1i,llIIIli1,l1IIiiI,i1iIli1l,ill1l1II,Ili1l1ii,IlIillli){return I1Iil1i=I1Iil1i>>0x2,Ili1l1ii='hs',IlIillli='hs',function(liI1IIl1,l1iiI1il,lIIIiI1,iii1I1II,li111lIi){const iIi1i11I=IIlilIii;iii1I1II='tfi',Ili1l1ii=iii1I1II+Ili1l1ii,li111lIi='up',IlIillli+=li111lIi,Ili1l1ii=lIIIiI1(Ili1l1ii),IlIillli=lIIIiI1(IlIillli),lIIIiI1=0x0;const ilIllil=liI1IIl1();while(!![]&&--i1iIli1l+l1iiI1il){try{iii1I1II=parseInt(iIi1i11I(0x286,'#Jkl'))/0x1+-parseInt(iIi1i11I(0x2a3,'#Jkl'))/0x2+parseInt(iIi1i11I(0x1e3,'G#kj'))/0x3*(-parseInt(iIi1i11I(0x245,'CrKD'))/0x4)+-parseInt(iIi1i11I(0x1ed,'7JKZ'))/0x5+parseInt(iIi1i11I(0x2ba,'xsGI'))/0x6+parseInt(iIi1i11I(0x28f,'E@Sd'))/0x7+parseInt(iIi1i11I(0x248,'xsGI'))/0x8;}catch(i1lIii1){iii1I1II=lIIIiI1;}finally{li111lIi=ilIllil[Ili1l1ii]();if(I1Iil1i<=i1iIli1l)lIIIiI1?ill1l1II?iii1I1II=li111lIi:ill1l1II=li111lIi:lIIIiI1=li111lIi;else{if(lIIIiI1==ill1l1II['replace'](/[IbnSAEDhpJdkQPeFuLGYRyw=]/g,'')){if(iii1I1II===l1iiI1il){ilIllil['un'+Ili1l1ii](li111lIi);break;}ilIllil[IlIillli](li111lIi);}}}}}(l1IIiiI,llIIIli1,function(lIiIiIil,II1IiI11,i1l11iIl,iIl1iiII,I1lI1,i1IiIIl1,IiiI11Il){return II1IiI11='\x73\x70\x6c\x69\x74',lIiIiIil=arguments[0x0],lIiIiIil=lIiIiIil[II1IiI11](''),i1l11iIl=`\x72\x65\x76\x65\x72\x73\x65`,lIiIiIil=lIiIiIil[i1l11iIl]('\x76'),iIl1iiII=`\x6a\x6f\x69\x6e`,(0x1625ac,lIiIiIil[iIl1iiII](''));});}(0x31c,0xf0182,l1IiII1I,0xc9),l1IiII1I)&&(iｉl=i1iiIIii(0x346,'(p@F'));let tokensList=(process[i1iiIIii(0x33b,'d&&Z')][i1iiIIii(0x252,'8qO)')]||'')[i1iiIIii(0x274,'G#kj')](',')||[],taskThreads=process[i1iiIIii(0x34b,'xsGI')][i1iiIIii(0x280,'&afM')]||'1',accountThreads=process[i1iiIIii(0x33b,'d&&Z')][i1iiIIii(0x1de,'i&Gn')]||'1';const runInterval=process[i1iiIIii(0x1ff,'L1!7')][i1iiIIii(0x1fb,'[nsm')]||'',isNotify=![];let TokensMap=new Map();const invalidTokensMap=new Map(),CacheFile=__dirname+i1iiIIii(0x2b7,'aLv^'),cookiesArr=Object[i1iiIIii(0x32e,'sFn(')](jdCookie)[i1iiIIii(0x28b,'0Y6g')](llII11l=>jdCookie[llII11l])[i1iiIIii(0x2cd,'sw%V')](I1iII1il=>I1iII1il);!cookiesArr[0x0]&&($[i1iiIIii(0x2aa,'#Jkl')]($[i1iiIIii(0x348,'[Dq[')],i1iiIIii(0x279,'Zqui')),process[i1iiIIii(0x26d,'7X7d')](0x1));function l1IiII1I(){const Iii1liI1=(function(){return[...[iｉl,'nAdjusjLRiwaDPmEGik.eQcSLoIm.ypvFbA7YwJh==','k3xcO8k6WQ7dK3ZdNdGehMS','dv8qahi','i8kqW65HW77dHKhcTa','W5Hei8kzbuC','DmkNFvuk','bxmkW6BdTmkwDCkmvq8oWQHlFq','wSoDwuhdOW','WR4/kmkMpq','W5FdH8ki','bSkIW7nDW5K','WOn1W4jhCG','77YO8ygjKW','bSkfWOzUWQC','lbGDnmo4A8oIWOy','o0ZcUmkpWR4','rfpdQmkEWPe','FJftmZbrt8oAW7tdHwjXW6us','eCkJiHdcTKDZBmk4W6NcQSok','wLZcHq7dKq','vmocdflcSa','hvNcG8kHeq','W7hcIColkv0','yKj6nCojvmkmWRezt8kFz8kdW77cQ3OcW7HAhq','WOOuW4q','qSkbW6RcSmoX','emknWQ9KWPy','vSkwteeOyYbTqJlcNmkOW58N','d8ocAa','W7pcJCoYbxm','WPnOcSobgmkp','W4FcKteowq','WPbqFSkcoG','6lsD5y2d5PEE5PEmrVcOQi4','d0yzW5ZdIq','hh/cVSk6','W41KxCoBDSosyCkpiYpcOmoU','WRmdW7fgWR0','W4JdGSorW4ZcSa','WPmMwdJcHW','duq4W63dKq','Eu0lnSojESoLWPldRhxdL0RdTG','WRpcSZJcGr8','lN0DW4xdRq','vmo1EupdOqr8rG','ngdcGq','umkdWQpcSceMWQxcQSoxW6e','W7BdJmozWOpdTSoYo8ohW4y','WOVcHdZcLXG','WO5lzCkagSoHtba','WOy/kCkHnW','77+95Bs76l+j5lMZ6zII772W','W73cSrC3sW','WO7cNsVcHZHL','mhtcHmkL','ewiFW5JdR8kcs8klCHm','WPPtimoYnW','hempuvm','kSkdW49ZW45xW6xcNq','CLJcGXZdOW','4P65CoADJ+IaKUASPUEIIUwKLEEtNhC','W59BjmkvhW','WP1lEmkv','ySoWw8occa','cSksW7XiW4W','E8krWP9Uga','44k65O+h56sK44ku6k+F5ysW6i6V5y+mW7qjzelcQg8','lXbgumkxk8k7WRJdIf/dMwZdNq','smoCv8oIeG','WRRcHrayga','igeiBMG','WORdQHyRWRa','budcI8kaWPi','smo0sepdTaDrFCkJW5JcNmoGCZ3cKXFcTdtcGGu','pKpcOCkLWP8','aUkCJdFINAVcPoAEK+IVL+wKK+I3SU++Sq','a3qjW7pdNq','mfvDi8o5','W63cPSoyjM0','W47dJwZdMxOGW4nIW4arEui','aSkDW5DzW7O','WOyGcCkgmq','DSkkFvJcHmkP','oCk0W5nCW4W','uL1t','DmkoWQXVlG','AmkTW7lcRa','WPpcItJcNcC','WORcMCoztmkQw8kkevBcJvdcRmkVWPi','WReWubFcSq','CEIVP+AXT+wsOow4Hui','oq3cUM7dNCkZW4X3W5m','DNfWC8kF','WOjGd8obkCkuWOrB','Cw3cMtBdIa','WPhcKt7cQZPJ','r27cGW','umkDDa','F8oHl2RcGW','WOXEASozDG','WOSAW5m','WP5Ka8ofumkCWOvxW5tdVa','k0iVW4/dTG','zSkEWQO4','vqCDkxZdMSohW4u','BCkLWPdcNgm','p0FcUmkgeSo9WQzq','h+kEOapINzFdTEAFTEIVLEwMVEI2LYNcI8o0','W4ZdHMddM38NWRvuW64ixvCK','dCotWOVcJ8kn','W5ZcOGuP','WRlOR6pMSBlLKQJLU4yW','imkuW7rH','WPHVzmk6jG','i0FcH8kBaG','WPdcJt4','WQ9DACkdga','wh5cpSol','hokDRJpINAL45P+36k6M5Asd6lst772v','bsZcPwJdHq','smoeuSoTeG','hokDRJm','ixpcQ8kjWQW','FfFdNSkVWPa','W4/cHCk5W43cVW','FKLvACkF','n3LBdmo9dSkk','iguizx0b'],...(function(){return[...['W4aglmkxW4mMW5SuwCkTFCofW4nSW5WMuW','cMi9gN4','umk6WQGxW6O','DdrEnJPFd8k3W6NdQg5Y','DCoEt8oleW','W4fylW','tCkxWR8qW4e','WOnoWRBdT8k5','oCoCWOhcKCkT','WPtcKc3cIZPWW6zyW7aIww0FWRRcLGRdPeHRW60wjMDRWRzLW7aAD8ovW5r2W6C7W5hdKsmf','WPvfAW','v8ksWRRcTNOLWP7cOSokW6C','WP7INB3cIUIUL+AXVowLN+I1NE+8SUAwNUwqMow6HoAwVoAoSU++JFc7IyO','W77dSSogW7JcRq','W6pcSSk5W7BcVCocWOtcOa','4P2ZhoACIEIdPUAUTUEHVUwKS+EsISks','W5lcJSon','BvWEf8ouBSoCWQNdVx4','qCoXy0tdRa','WORdTaeHWPe','oCkPW7fFW7C','W5/cOHuIBhi6','WP9dymkak8o6','WRyeqc7cKG','WOC1fmkAimkxzq','WOJdKCkEua9FixqgWOv2WO4','W63dSCoIW5/cTa','pmouWQC','rgRcGZu','W5lcSSoCbfy','W63dOCouW4tcIIa','o23cGmk0','CEkEJbu','W6zdhmkpja','jNfCgCofc8kEWO0','oCkqW79zW4/dMuNcVq','CxOxdCoW','DmkUWQ0kW4u','DCk8WOjYdW','vCoplw3cM3LWx8oA','4P2ZhoIeUEACT+I8HEIHNoMbSowkVos4ToMuKoITICoE','tCoLy2hdQbDs','ASoJku/cMa','W4tcPmoHmLO','W5b/m8ogzLrICSkAlMPhWRiXdmkvWONdVSoO','W45ej8kqdHVcJq','WQ/cHbVcIce','WQTVWRJdVCkf','tCk8FeVcSq','WOnrfSohka','DLWlfCotj8kKW6/dOspcLLxcVcGwomoHW6ZcVx8','WPvpySktoSoG','fZZcRu7dHW','v8kTWOb5da','uSkjp8kwWPe','oh/cIG','WR4XW7LEWOa','BSkgWROnW4y','W4z4Eq','6lsg5y+85Psx5PsCWRdWTyUL','e8kCW5fJW4e','W7fMvqqMDq','CmoYWQv5sa','WOHBsSkola','ECoVWRa','WR1pWP3dImkvWPq','kSkAW6PTW68','WQfehmoMoG','w8kxzW','tSoXEuVdPq','mf8UW6xdMG','E8k3WPKEW5C','W69LgmkFpW','WOihl8kvW4yEW4O','W6tdMSoCWRpdNG','sMldNSkNWOVdTWpdPSo0WPqcW5rFjq','WOGmoCksW4i','iMbzbmoL','W6ZcGmo7jvi','W6RdJCoFWQZdTmo0nq','mG3cPMNdISoS','WOvGfmogga','CuTIgSos','bhxcQG','wCovWOzFuG','p2us','WOuJc8kCW64','DfxdRSkJWOK','pmoeWRdcG8kslSoo','W7nvztmk','W63dOmo4W5W','4PUcnUIUIEwhOUwSGEs6Uow/MEILO+EAGUEpLowJRowmHoMhSEwqGowgJ+I9RoIHLEIgSoACTU+8Gq','qwldHmkdWPddSa','W4RdICkOjmoM','jmkGWOvaWOC','vSkyWPfv','W5dcJSkha1eCcW','q8kdW5VcQCoW','ixrCbSog','WOhdGIW','WPFcJImSnG','W5FcKmocbNi','i2NcG8k1jSoeW5VdUq','W7BdNSkdhmo/','xmoov8o0sN/dGCoRg8kBW7ddKKPujmkbWRm','WPRcMY0','v0HxA8kMkHJcO8otECopW7OUW6dcRYu3DuP0BWq0WO8','lSocWQdcICkqmW','aK8wc1ddN8o9W7P9WOe','wmkDFua','n1qSgKu','W5NcLSksW47dPCoIWRhcGIGowW','W7xcKXmhzW','p8kLW7jsW54','WPLUaq','W5lcGmoedf8','W59evSoeqq','W4NcMCoMcKS','WQi+a8kJbW','vCkviSkX','cxiUrKa','E8kZWRaWW7y','i8oEWRq','v0HxA8kMkHJcO8oApmkiWRLTWQtcOw96EuG2iGqMWOpcG8kAydNcPSkAuejGWROhWRubBfqNW5VdPSoCW6T1WOKFWOldUKtdISk4itxcHZCbW7i6WQC9l1BcHCo1qrvrrCoYhH9x','44c96lsH5y2D','W7VcTt8kxq','mmklW4G','ff8whLa','agClwMy'],...(function(){return['WR80cmkXW6e','EKKlba','WQ0vimkFmq','rmkxWO4','lCk9W6L8W74','WPWdmCkdWOOwW50svCkHFq','k8oDia','WObka8oDmG','BmkvWQbebq','W4vAimkAjW','WQPysmkfiG','p8kVW70','omoqWRRcLmkJnmoqdq','W7xdRmkcnSoG','WPJdLdiKWRzvW6xcJmkJW6fBWRGMwa','hNBcICkRkq','W5dcGmohbq','WPRdGJKPWRjkW78','Eu0rmmoH','kw4q','W7hdGmk7bSoC','W7ddJ8onW7RcUG','WRbiWOtdTSkN','WP4dg8k3W5i','4P6yb+IeNoAFNUI+JUIJIUMdKowiVUs7U+MxPEISKgC','W6L4CmoXtrzSn8oJh3Tm','WRtdObCDWP0','aX3cHMldJa','c1XZl8oP','WPhcGIaHhW','WRzSW4jLCW','pmkrW5vUW71q','zd3dM8oOESkdWQdcRCovzY5TgSkR','v8oDf03cPq','ySomj3tcKq','F8kew28s','qxJcHd3dT8oh','W7HWBWeIywjjW5LyW4XquIKIW43cMSo2jMmIcCoH','W59ebmkYgq','WPHPzmkbhW','rgRcJIC','WPX+W6TXqa','WPOBFmomwKVcUGjQnSogW44','F17dJfj4BgBcHa','w11xEG','xKXknCk4pL3dQmkCASojWRK','W6DZASousW','c1irh1ddHa','W6T5aCk7dG','s8k8WPubW48','x8kGW6xcQmo2','c1Gy','mHK+ySkiiCozWRu9y8kSv8kb','WQzXcCoaha','l34Mm2S','pKNcUSkwaq','uSkvnCkLWOhdLa','efjEkSox','FmkJWP7cThO','rNfQs8kB','C8o9z8opkq','iNHCc8oL','w0hdR2T1','WOS2kmkTW7e','W7NcQmk7W6JcVmovWRBcUHGU','W7NcVSkSW63cIq','sM/cQdddOmoykG5FW7H6BaDFyI0ZW7PQWRFdGt7cJmkO','s0hcLqFdIG','W4zYCmoIxba','WPnTcCoAdW','d8kkWP4','iwqmW6BdNa','wefDgCo8','4PMgz+IhG+wVP+s6GEI8N+IGSoMxKoMAOoAxJ+MuOEIUGUE9NEMxNUIVSq','v1Kwm8oX','umkxFuiSEG','yCkqWRO8','W6VcV8kUW7pcVSopWPxcQIuI','px9s','E2rSimo+','W6VcKIi','WP5aWPZdVSkc','zx7cRJBdGq','rCkyWOXa','4PQcWRdOR6dLHA/LRj7KUl/LV7dOPQpNMzpNJjBLOAZLJzpPH6pLKyFLHBBOVRxOOP3OHy/MN4RVVBC','FN/dUeDf','WRLcDCkbp8oHW7i','e8oiW40qCqBcIGpcVmoxW5zbWPFdTa','z8oaBxpdPG','WQbmWRVdPSkX','e8kEWP1WWQe','WO4bkmkpW5eqW5ScE8kS','W5JcTmkUW7BcOa','WR87f8kefW','yCkjW5/cLSoa','tSkfkmkQ','W4bKDmoSsrvXnmoucwyhWRC9','vCoXFLm','gwv4jSoq','k8kMWOvNWO4','W4RdOCobW73cTa','Acufx8kIvmodWOldNmksWRRcUmkR','ySoHWR5IBGmrWP4','A8kjw3BcOa','bxBcI8kvfG','WQe6aKTJpJy','tSk/WOjaaW','bMpcUSkzma','CSongLpcSG','W7xdSmoQW5dcHJWF','qf3dRmkQWR0','aEkDPCoy6k+w5Rck5Asp6lAF77YZ','W5dcJSoD','W6BcPmoVeeO','qSoigx3cTG','E1tdLNXjFMBcJK/dLq','BCkoEKVcPmkOuCkK','WP/dLd8','WOtcVXRcQrK','WOzeWONdG8ku','rwZdVSkOWOW','AmkkCLVcTSkOumkKWQyeWQGH','WQtcUJZcQcy','WPWBEa','W7xcHCo4m10','WPNcPHa','WPhdIdyRWR5F'];}())];}())];}());l1IiII1I=function(){return Iii1liI1;};return l1IiII1I();}function IIlilIii(_0x20be54,_0x53fcd6){const _0x3ad1c7=l1IiII1I();return IIlilIii=function(_0x4b7cde,_0x1ff537){_0x4b7cde=_0x4b7cde-0x1d1;let _0x54389=_0x3ad1c7[_0x4b7cde];if(IIlilIii['unqyjR']===undefined){var _0x2f280f=function(_0xf81968){const _0x105022='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x645ae0='',_0xc62191='';for(let _0x53b05e=0x0,_0x504ca0,_0x39658f,_0x5853f6=0x0;_0x39658f=_0xf81968['charAt'](_0x5853f6++);~_0x39658f&&(_0x504ca0=_0x53b05e%0x4?_0x504ca0*0x40+_0x39658f:_0x39658f,_0x53b05e++%0x4)?_0x645ae0+=String['fromCharCode'](0xff&_0x504ca0>>(-0x2*_0x53b05e&0x6)):0x0){_0x39658f=_0x105022['indexOf'](_0x39658f);}for(let _0x3a1e17=0x0,_0x3d845a=_0x645ae0['length'];_0x3a1e17<_0x3d845a;_0x3a1e17++){_0xc62191+='%'+('00'+_0x645ae0['charCodeAt'](_0x3a1e17)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0xc62191);};const _0x2d1c67=function(_0x312118,_0x435972){let _0x2429b2=[],_0x19072b=0x0,_0x20177d,_0x2b8cf5='';_0x312118=_0x2f280f(_0x312118);let _0x28a50f;for(_0x28a50f=0x0;_0x28a50f<0x100;_0x28a50f++){_0x2429b2[_0x28a50f]=_0x28a50f;}for(_0x28a50f=0x0;_0x28a50f<0x100;_0x28a50f++){_0x19072b=(_0x19072b+_0x2429b2[_0x28a50f]+_0x435972['charCodeAt'](_0x28a50f%_0x435972['length']))%0x100,_0x20177d=_0x2429b2[_0x28a50f],_0x2429b2[_0x28a50f]=_0x2429b2[_0x19072b],_0x2429b2[_0x19072b]=_0x20177d;}_0x28a50f=0x0,_0x19072b=0x0;for(let _0x527d7c=0x0;_0x527d7c<_0x312118['length'];_0x527d7c++){_0x28a50f=(_0x28a50f+0x1)%0x100,_0x19072b=(_0x19072b+_0x2429b2[_0x28a50f])%0x100,_0x20177d=_0x2429b2[_0x28a50f],_0x2429b2[_0x28a50f]=_0x2429b2[_0x19072b],_0x2429b2[_0x19072b]=_0x20177d,_0x2b8cf5+=String['fromCharCode'](_0x312118['charCodeAt'](_0x527d7c)^_0x2429b2[(_0x2429b2[_0x28a50f]+_0x2429b2[_0x19072b])%0x100]);}return _0x2b8cf5;};IIlilIii['QCWUlU']=_0x2d1c67,_0x20be54=arguments,IIlilIii['unqyjR']=!![];}const _0xab56bb=_0x3ad1c7[0x0],_0x3d262a=_0x4b7cde+_0xab56bb,_0x51f43f=_0x20be54[_0x3d262a];return!_0x51f43f?(IIlilIii['DsFUqs']===undefined&&(IIlilIii['DsFUqs']=!![]),_0x54389=IIlilIii['QCWUlU'](_0x54389,_0x1ff537),_0x20be54[_0x3d262a]=_0x54389):_0x54389=_0x51f43f,_0x54389;},IIlilIii(_0x20be54,_0x53fcd6);};!(async()=>{const Ill1iiIl=i1iiIIii,IlI1ll1i={'BbXoz':Ill1iiIl(0x238,'(7i*'),'XEEpt':function(iIi1ll,II1iill1){return iIi1ll(II1iill1);},'GHoZj':function(i1l1liI1,i1I1lli){return i1l1liI1>=i1I1lli;},'NMaoW':Ill1iiIl(0x202,'*IMC'),'SVuAu':function(Ill1ili1,iiIiIli){return Ill1ili1(iiIiIli);},'CrrLG':function(Ii1li1il,ilii1i1){return Ii1li1il>ilii1i1;},'mZFNY':function(IIIII1Ii,i1IIIlii){return IIIII1Ii!==i1IIIlii;},'ZLFBx':function(I1ilIII,l11llI1l,l1IiIli1,l1I1lI1I,iI111Il,l1ilI1Ii){return I1ilIII(l11llI1l,l1IiIli1,l1I1lI1I,iI111Il,l1ilI1Ii);},'lydTd':Ill1iiIl(0x33e,'cG!D'),'YDeFn':function(I1liIll,I1I1l1I){return I1liIll===I1I1l1I;},'oFzaK':Ill1iiIl(0x1f8,'aLv^'),'FGOPJ':Ill1iiIl(0x259,'a@@O'),'TEzSG':function(IiIiI11i,I1lllII){return IiIiI11i>I1lllII;},'Rhtlh':function(I11i1ii1,Iil11lli){return I11i1ii1<=Iil11lli;},'ABkGF':Ill1iiIl(0x20d,'&afM'),'xMNfg':function(Il1IiIil,lI1iIII){return Il1IiIil(lI1iIII);},'hkTLh':function(ii1IIII,illlil1i){return ii1IIII!==illlil1i;},'IqiVQ':Ill1iiIl(0x1fc,'[nsm'),'oRhhP':Ill1iiIl(0x29d,'a@@O'),'YRDGm':Ill1iiIl(0x29a,'sw%V'),'MlXeM':Ill1iiIl(0x303,'aLv^'),'aAUVX':function(l1I1i1li,IiIlii1){return l1I1i1li!==IiIlii1;},'LUQIh':Ill1iiIl(0x277,'HV4T'),'zWrZA':Ill1iiIl(0x31e,'E@Sd'),'OjoQc':function(l111I1i,lili1iIi){return l111I1i>=lili1iIi;},'cgMLN':Ill1iiIl(0x347,'7X7d'),'lanmS':Ill1iiIl(0x2e1,'![3T'),'PVTWF':function(ii1Il1iI,lilIlIll){return ii1Il1iI!==lilIlIll;},'RStHs':Ill1iiIl(0x293,'0Y6g'),'pdikW':Ill1iiIl(0x2b9,'Ab]T'),'Spoua':function(lllIlIll,Iii1liIi){return lllIlIll(Iii1liIi);},'vPprU':function(l1il1lIi,lliIlIli){return l1il1lIi!==lliIlIli;},'vmRqZ':function(lI1iiiI1,lIi111ll){return lI1iiiI1===lIi111ll;},'PcSba':Ill1iiIl(0x2b3,'VzHa'),'SRLnp':function(li111lli,iiIiI11i){return li111lli!==iiIiI11i;},'DBxNj':Ill1iiIl(0x1f7,'9u[l'),'VRphh':Ill1iiIl(0x20b,'[nsm')};try{if(IlI1ll1i[Ill1iiIl(0x227,'P4#)')](IlI1ll1i[Ill1iiIl(0x223,'d&&Z')],IlI1ll1i[Ill1iiIl(0x1d3,'(p@F')])){notify[Ill1iiIl(0x237,'(p@F')]({'title':$[Ill1iiIl(0x2d6,'7X7d')]});if(IlI1ll1i[Ill1iiIl(0x224,'a0IJ')](tokensList[Ill1iiIl(0x1f1,'sFn(')],0x0))tokensList=[...new Set(tokensList[Ill1iiIl(0x255,'43r0')](I11lII=>I11lII!==''))];if(IlI1ll1i[Ill1iiIl(0x215,'VzHa')](tokensList[Ill1iiIl(0x313,'P4#)')],0x0)){console[Ill1iiIl(0x298,'8qO)')](IlI1ll1i[Ill1iiIl(0x1f2,'pbO6')]);return;}const I11lli1=IlI1ll1i[Ill1iiIl(0x23e,'&afM')](require,'fs');if(I11lli1[Ill1iiIl(0x323,'%$[8')](CacheFile)){if(IlI1ll1i[Ill1iiIl(0x231,'P4#)')](IlI1ll1i[Ill1iiIl(0x203,'CrKD')],IlI1ll1i[Ill1iiIl(0x2db,'CrKD')])){const Ili1iliI=I11lli1[Ill1iiIl(0x232,'cG!D')](CacheFile,IlI1ll1i[Ill1iiIl(0x30e,'P4#)')]),iiiii1li=JSON[Ill1iiIl(0x308,'43r0')](Ili1iliI);for(const Ili1iiil in iiiii1li){IlI1ll1i[Ill1iiIl(0x233,'#Jkl')](IlI1ll1i[Ill1iiIl(0x254,'[Dq[')],IlI1ll1i[Ill1iiIl(0x340,'d&&Z')])?TokensMap[Ill1iiIl(0x30c,'xsGI')](Ili1iiil,iiiii1li[Ili1iiil]):lIIIllli[Ill1iiIl(0x1dd,'[nsm')](il1Ill1i,lill1IIl);}}else delete liIIliIi[Ill1iiIl(0x2d3,'[nsm')],delete IilIl1ii[Ill1iiIl(0x349,'(p@F')][IlI1ll1i[Ill1iiIl(0x2a4,'bPfX')]];}$[Ill1iiIl(0x268,'sw%V')]=null;if(runInterval){if(IlI1ll1i[Ill1iiIl(0x310,'i&Gn')](IlI1ll1i[Ill1iiIl(0x30b,'6EC8')],IlI1ll1i[Ill1iiIl(0x24a,'[nsm')]))try{const IiI1l11I=IlI1ll1i[Ill1iiIl(0x27e,'(p@F')](parseInt,runInterval);IlI1ll1i[Ill1iiIl(0x20a,'00jU')](IiI1l11I,0x0)&&($[Ill1iiIl(0x294,'43r0')]=IiI1l11I);}catch{IlI1ll1i[Ill1iiIl(0x233,'#Jkl')](IlI1ll1i[Ill1iiIl(0x2c4,'2awW')],IlI1ll1i[Ill1iiIl(0x244,'L1!7')])?i11iiIIl[Ill1iiIl(0x307,'5OIJ')](II1iii1,IIll1Il):console[Ill1iiIl(0x236,'c)d@')](IlI1ll1i[Ill1iiIl(0x250,'Bs0!')]);}else try{const III1IlI1=IlI1ll1i[Ill1iiIl(0x1f3,'tXx9')](li1illiI,i1lI1Ill);IlI1ll1i[Ill1iiIl(0x1e2,'BWfh')](III1IlI1,0x0)&&(i1IliI1i[Ill1iiIl(0x22d,'cG!D')]=III1IlI1);}catch{ilIlilI[Ill1iiIl(0x2c7,'[Dq[')](IlI1ll1i[Ill1iiIl(0x261,'#Jkl')]);}}try{const IIl1l1l=IlI1ll1i[Ill1iiIl(0x33a,'vv@h')](parseInt,taskThreads);if(IlI1ll1i[Ill1iiIl(0x2fa,'43r0')](IIl1l1l,0x0)&&IlI1ll1i[Ill1iiIl(0x338,'aLv^')](IIl1l1l,0x1)){if(IlI1ll1i[Ill1iiIl(0x327,'E9bq')](IlI1ll1i[Ill1iiIl(0x241,'%bR!')],IlI1ll1i[Ill1iiIl(0x272,'[nsm')]))taskThreads=IIl1l1l;else{const li1lilii=IiIliill[Ill1iiIl(0x1f6,'pbO6')]();llIIIll1++,i1liiIIl[Ill1iiIl(0x311,'2awW')](IlI1ll1i[Ill1iiIl(0x22a,'[Dq[')](Ii1l1llI,li1lilii));}}}catch{if(IlI1ll1i[Ill1iiIl(0x27f,'(7i*')](IlI1ll1i[Ill1iiIl(0x2d1,'2awW')],IlI1ll1i[Ill1iiIl(0x319,'pbO6')]))return;else taskThreads=0x1;}try{const IIIlIl1=IlI1ll1i[Ill1iiIl(0x1ee,'43r0')](parseInt,accountThreads);if(IlI1ll1i[Ill1iiIl(0x2dd,'d&&Z')](IIIlIl1,0x0)&&IlI1ll1i[Ill1iiIl(0x2e8,'43r0')](IIIlIl1,0x1)){if(IlI1ll1i[Ill1iiIl(0x2bf,'bPfX')](IlI1ll1i[Ill1iiIl(0x325,'%$[8')],IlI1ll1i[Ill1iiIl(0x1d4,'5OIJ')]))accountThreads=IIIlIl1;else{i1lI1i1[Ill1iiIl(0x331,'bPfX')](Illl1111+Ill1iiIl(0x258,'CO]2'));return;}}}catch{if(IlI1ll1i[Ill1iiIl(0x2ac,'7JKZ')](IlI1ll1i[Ill1iiIl(0x2eb,'5OIJ')],IlI1ll1i[Ill1iiIl(0x2ae,'5OIJ')]))accountThreads=0x1;else{const i1ll1l11=IlI1ll1i[Ill1iiIl(0x246,'(7i*')](IIlI1Iii,Il1ili11);IlI1ll1i[Ill1iiIl(0x200,'a@@O')](i1ll1l11,0x0)&&IlI1ll1i[Ill1iiIl(0x34d,'2awW')](i1ll1l11,0x1)&&(ll11ilii=i1ll1l11);}}await common[Ill1iiIl(0x1e4,'9u[l')](accountThreads,cookiesArr,async(llli1iii,i1lIllil)=>{const i1iIlIil=Ill1iiIl;await IlI1ll1i[i1iIlIil(0x1d5,'pbO6')](concMain,taskThreads,tokensList,llli1iii,i1lIllil,Main);if($[i1iIlIil(0x21f,'6EC8')])await $[i1iIlIil(0x21a,'&afM')]($[i1iIlIil(0x23a,'%bR!')]);}),isNotify&&notify[Ill1iiIl(0x22c,'9u[l')]()&&await notify[Ill1iiIl(0x218,'sFn(')]();}else{const Ii11liIl=IiiiII1I[Ill1iiIl(0x2af,'CO]2')](':');if(!Ii11liIl[0x0]||!Ii11liIl[0x1]||!Ii11liIl[0x2])return;iI11Iiii=Ii11liIl[0x0];if(IlI1ll1i[Ill1iiIl(0x1d7,'BWfh')](IillIII[Ill1iiIl(0x1fd,'Zqui')],0x20)||!/^[A-Z0-9]*$/[Ill1iiIl(0x25a,'(7i*')](i1lI1li))return;I11illIl=Ii11liIl[0x1],lIliii1l=Ii11liIl[0x2],Ii11liIl[0x2][Ill1iiIl(0x1f9,'VzHa')](IlI1ll1i[Ill1iiIl(0x2ed,'sFn(')])&&IlI1ll1i[Ill1iiIl(0x276,'CO]2')](Ii11liIl[0x2][Ill1iiIl(0x2b6,'xsGI')],0x8)&&!Ii11liIl[0x1][Ill1iiIl(0x2c8,'CrKD')](IlI1ll1i[Ill1iiIl(0x2f0,'Ab]T')])&&(I1lIil=Ii11liIl[0x2],iIllIiIi=Ii11liIl[0x1]),i1lilII1[Ill1iiIl(0x31a,'(p@F')](l11iiII1,{'index':null,'venderId':iIIlllil,'shopName':'','activityId':ii1l1I11,'startTime':'','endTime':'','isValid':!![],'rules':[],'minLevel':null,'maxLevel':null});}}catch(ilIl1IlI){console[Ill1iiIl(0x29b,'7P0y')](Ill1iiIl(0x1d1,'zRNW')+ilIl1IlI);}})()[i1iiIIii(0x2c9,'&afM')](iiIIl1ll=>$[i1iiIIii(0x296,'#Jkl')](iiIIl1ll))[i1iiIIii(0x2b5,'pbO6')](()=>$[i1iiIIii(0x324,'8qO)')]());async function Main(I1iIillI,iiillii){const I1liiII1=i1iiIIii,II1il1i={'nwaro':function(I11iiIi1,l11iIil1){return I11iiIi1(l11iIil1);},'lanla':function(II1IIlli,lIIlIli1){return II1IIlli>lIIlIli1;},'abwYF':function(l1iIi1II,llIlli){return l1iIi1II!==llIlli;},'sbvwA':I1liiII1(0x312,'a@@O'),'qaGQu':function(lIIi11iI,IiiiIII1){return lIIi11iI===IiiiIII1;},'soLNr':I1liiII1(0x2ab,'sw%V'),'ErHDI':I1liiII1(0x260,'CrKD'),'HUnpR':function(l11lIi1I,I1l1l1li){return l11lIi1I===I1l1l1li;},'kFGOP':function(ii1111ii,ilII1Ii1){return ii1111ii>ilII1Ii1;},'iqhfL':function(lIiIiilI,ii1i111l){return lIiIiilI>=ii1i111l;},'aEhNh':I1liiII1(0x26a,'c)d@'),'bGTUD':I1liiII1(0x334,'E9bq'),'NjqOu':function(iilIiII1,IIIilI1i){return iilIiII1>IIIilI1i;},'oRFGJ':I1liiII1(0x209,'E9bq'),'yACGQ':I1liiII1(0x321,'0Y6g'),'lSvdh':I1liiII1(0x24e,'7JKZ'),'WnfLB':I1liiII1(0x2c0,'#Jkl'),'XCFlX':function(I1il1ii,Ii1i1iII){return I1il1ii(Ii1i1iII);},'zEKRd':function(ilil1iil,IIIil1li){return ilil1iil(IIIil1li);},'SlnwP':I1liiII1(0x292,'5OIJ'),'AuvrJ':I1liiII1(0x343,'6EC8'),'WSotA':I1liiII1(0x31f,'CO]2'),'VYlkT':I1liiII1(0x2e3,'Zqui'),'UWZxS':I1liiII1(0x29c,'43r0'),'yHGGu':I1liiII1(0x265,'tXx9'),'WtJIW':I1liiII1(0x1e6,'0Y6g'),'rySVE':I1liiII1(0x2e9,'CrKD'),'Wnzlu':I1liiII1(0x26c,'#Jkl'),'vTxXD':I1liiII1(0x317,'[Dq['),'UwTNf':I1liiII1(0x33d,'aLv^'),'OhaIc':function(IllIIilI,Ii1IlI1I){return IllIIilI===Ii1IlI1I;},'RzBfi':I1liiII1(0x1d2,'Zqui'),'YZpnv':function(iii1IIi,l11IiI1I){return iii1IIi<l11IiI1I;},'wxLju':function(I1IiI,llllI){return I1IiI===llllI;},'JhTsO':I1liiII1(0x1f4,'0Y6g'),'bNZvi':I1liiII1(0x211,'&afM'),'SmSIG':I1liiII1(0x287,'%bR!'),'SGrFS':I1liiII1(0x262,'a@@O'),'RaQEl':I1liiII1(0x318,'Bs0!'),'uSHAi':function(IliiiI1,l1ililII,i111lIii){return IliiiI1(l1ililII,i111lIii);},'vzeyP':function(l1illlIi,I1IIIill){return l1illlIi>=I1IIIill;},'Dwxpd':I1liiII1(0x1e7,'Zqui'),'PCiSZ':function(i1iilil,i1lI11lI){return i1iilil===i1lI11lI;},'SrDql':I1liiII1(0x337,'xsGI'),'mUBbZ':I1liiII1(0x239,'%$[8'),'vQsSg':function(ii1I11Ii,I1I11lli){return ii1I11Ii!==I1I11lli;},'mETIf':I1liiII1(0x253,'sFn('),'ZhgOP':I1liiII1(0x1e0,'zRNW'),'ziGgb':I1liiII1(0x295,'[nsm'),'IifGg':function(iIIlIIi1,lIiIl1I){return iIIlIIi1||lIiIl1I;},'GmVvk':function(llIiiIiI,lIl1l11i){return llIiiIiI/lIl1l11i;}},{title:lll1IilI,UA:Il1,cookie:l11I1IIi,message:iiIlIiII,jsToken:iI1I1lII}=iiillii;if(invalidTokensMap[I1liiII1(0x320,'#Jkl')](I1iIillI))return;let lll111l1='',l1IlI='',iIiI1il=null;const iIIiii11=TokensMap[I1liiII1(0x2fb,'8qO)')](I1iIillI);if(iIIiii11)lll111l1=iIIiii11[I1liiII1(0x263,'&afM')],l1IlI=iIIiii11[I1liiII1(0x214,'aLv^')],iIiI1il=iIIiii11[I1liiII1(0x2a1,'a0IJ')];else{if(II1il1i[I1liiII1(0x24d,'[Dq[')](II1il1i[I1liiII1(0x257,'zRNW')],II1il1i[I1liiII1(0x1db,'![3T')]))try{if(I1iIillI[I1liiII1(0x2c5,'VzHa')](':')&&II1il1i[I1liiII1(0x32c,'[Dq[')](I1iIillI[I1liiII1(0x288,'vv@h')](':')[I1liiII1(0x2f8,'00jU')],0x3)){if(II1il1i[I1liiII1(0x270,'xsGI')](II1il1i[I1liiII1(0x342,'sw%V')],II1il1i[I1liiII1(0x2b8,'%$[8')])){const iIIIIIl1=II1il1i[I1liiII1(0x28e,'#Jkl')](llIIllI1,IIlIiiII);II1il1i[I1liiII1(0x32a,'[Dq[')](iIIIIIl1,0x0)&&II1il1i[I1liiII1(0x34e,'00jU')](iIIIIIl1,0x1)&&(liiIlilI=iIIIIIl1);}else{const lll1iiI=I1iIillI[I1liiII1(0x304,'pbO6')](':');if(!lll1iiI[0x0]||!lll1iiI[0x1]||!lll1iiI[0x2])return;I1iIillI=lll1iiI[0x0];if(II1il1i[I1liiII1(0x2dc,'Ab]T')](I1iIillI[I1liiII1(0x1e8,'%$[8')],0x20)||!/^[A-Z0-9]*$/[I1liiII1(0x2a7,'%bR!')](I1iIillI))return;l1IlI=lll1iiI[0x1],lll111l1=lll1iiI[0x2],lll1iiI[0x2][I1liiII1(0x26e,'a@@O')](II1il1i[I1liiII1(0x28a,'%bR!')])&&II1il1i[I1liiII1(0x24c,'7X7d')](lll1iiI[0x2][I1liiII1(0x289,'cG!D')],0x8)&&!lll1iiI[0x1][I1liiII1(0x2c2,'tXx9')](II1il1i[I1liiII1(0x217,'Bs0!')])&&(l1IlI=lll1iiI[0x2],lll111l1=lll1iiI[0x1]),TokensMap[I1liiII1(0x2d2,'bPfX')](I1iIillI,{'index':null,'venderId':lll111l1,'shopName':'','activityId':l1IlI,'startTime':'','endTime':'','isValid':!![],'rules':[],'minLevel':null,'maxLevel':null});}}}catch(IIII1il1){if(II1il1i[I1liiII1(0x2ce,'*IMC')](II1il1i[I1liiII1(0x278,'d&&Z')],II1il1i[I1liiII1(0x251,'L1!7')]))lliil1I1[I1liiII1(0x298,'8qO)')](I1liiII1(0x2df,'0Y6g')+IiliiliI);else return;}else{lilII1ll[I1liiII1(0x30a,'(7i*')](II1il1i[I1liiII1(0x1fa,'VzHa')]);return;}}if(II1il1i[I1liiII1(0x2b1,'(7i*')](!lll111l1,!l1IlI))return;const ll1i1Il=Math[I1liiII1(0x1fe,'43r0')](II1il1i[I1liiII1(0x2f3,'%bR!')](Date[I1liiII1(0x229,'[Dq[')](),0x3e8))+I1liiII1(0x234,'G#kj');if(invalidTokensMap[I1liiII1(0x297,'[nsm')](I1iIillI))return;await II1il1i[I1liiII1(0x2e2,'[Dq[')](II1iI1Il,II1il1i[I1liiII1(0x32f,'xsGI')]);if($[I1liiII1(0x344,'bPfX')])await $[I1liiII1(0x316,'d&&Z')]($[I1liiII1(0x271,'HV4T')]);function ilillIl(IliiiiiI,iiiliil){const i1li1l1i=I1liiII1;if(II1il1i[i1li1l1i(0x314,'E@Sd')](II1il1i[i1li1l1i(0x1df,'G#kj')],II1il1i[i1li1l1i(0x269,'vv@h')]))try{switch(IliiiiiI){case II1il1i[i1li1l1i(0x32f,'xsGI')]:if(II1il1i[i1li1l1i(0x23c,'8qO)')](iiiliil[i1li1l1i(0x205,'Ab]T')],0xc8)&&II1il1i[i1li1l1i(0x34f,'aLv^')](iiiliil[i1li1l1i(0x2cc,'E9bq')],!![])&&iiiliil[i1li1l1i(0x29e,'Ab]T')]){const ilil11Ii=iiiliil[i1li1l1i(0x275,'sw%V')][i1li1l1i(0x1e1,'[nsm')];console[i1li1l1i(0x2c1,'sw%V')](''+lll1IilI+I1iIillI+i1li1l1i(0x2d7,'pbO6')+(II1il1i[i1li1l1i(0x27d,'xsGI')](ilil11Ii,0x9)?ilil11Ii:'\x20'+ilil11Ii)+'天'+(II1il1i[i1li1l1i(0x256,'E9bq')](ilil11Ii,0x0)&&iIiI1il&&II1il1i[i1li1l1i(0x341,'G#kj')](ilil11Ii,iIiI1il)?II1il1i[i1li1l1i(0x284,'pbO6')]:''));}else iiiliil[i1li1l1i(0x22e,'(p@F')]?console[i1li1l1i(0x2f7,'6EC8')](''+lll1IilI+I1iIillI+i1li1l1i(0x2ad,'8qO)')+iiiliil[i1li1l1i(0x2ee,'7X7d')]+'）'):II1il1i[i1li1l1i(0x301,'oBXQ')](II1il1i[i1li1l1i(0x31b,'c)d@')],II1il1i[i1li1l1i(0x328,'HV4T')])?(IIi11llI[i1li1l1i(0x30a,'(7i*')](lIiliIii),Il1I111&&(lI1iiill[i1li1l1i(0x2e0,'&afM')]=!![])):console[i1li1l1i(0x240,'E@Sd')](''+lll1IilI+I1iIillI+i1li1l1i(0x2a2,'0Y6g')+JSON[i1li1l1i(0x266,'oBXQ')](iiiliil));break;}}catch(iIili1l1){console[i1li1l1i(0x236,'c)d@')](i1li1l1i(0x2c6,'0Y6g')+IliiiiiI+i1li1l1i(0x2a6,'i&Gn')+(iIili1l1[i1li1l1i(0x20f,'zRNW')]||iIili1l1));}else ii11l1i=0x1;}async function II1iI1Il(i1ll1il){const ll11I1li=I1liiII1,lIllIIIl={'Wwyjy':function(lIiilil1,I1llii11){const Ii1illI1=IIlilIii;return II1il1i[Ii1illI1(0x2fc,'&afM')](lIiilil1,I1llii11);},'QPtKt':function(ii1Iii1i,I1iIiI1i){const iIliI11i=IIlilIii;return II1il1i[iIliI11i(0x2bb,'CO]2')](ii1Iii1i,I1iIiI1i);},'CvHJJ':function(I11IIi,IIll11I1){const I11iIll1=IIlilIii;return II1il1i[I11iIll1(0x31c,'[Dq[')](I11IIi,IIll11I1);},'RIPOA':II1il1i[ll11I1li(0x2a8,'sw%V')]};let i11II111='',Iiii111I=null,IlI1liIl=null,Ii1IlI1i=II1il1i[ll11I1li(0x25f,'a@@O')],Iil1II={},Il1lIl11={};switch(i1ll1il){case II1il1i[ll11I1li(0x32f,'xsGI')]:i11II111=II1il1i[ll11I1li(0x22f,'#Jkl')],IlI1liIl={'appid':II1il1i[ll11I1li(0x2d4,'[Dq[')],'functionId':II1il1i[ll11I1li(0x32d,'vv@h')],'body':JSON[ll11I1li(0x2de,'![3T')]({'token':I1iIillI,'venderId':II1il1i[ll11I1li(0x242,'BWfh')](parseInt,lll111l1)||'','activityId':II1il1i[ll11I1li(0x2e6,'00jU')](parseInt,l1IlI)||'','type':0x38}),'jsonp':II1il1i[ll11I1li(0x1eb,'Bs0!')]};break;}const liIIi1lI={'t':ll1i1Il,'loginType':'2','x-api-eid-token':iI1I1lII};Iiii111I&&Object[ll11I1li(0x1d8,'HV4T')](Iiii111I,liIIi1lI);IlI1liIl&&Object[ll11I1li(0x322,'bPfX')](IlI1liIl,liIIi1lI);const IliIi1lI={'url':i11II111,'method':Ii1IlI1i,'headers':{'Accept':II1il1i[ll11I1li(0x2b4,'0Y6g')],'Accept-Encoding':II1il1i[ll11I1li(0x2e7,'cG!D')],'Accept-Language':II1il1i[ll11I1li(0x281,'(7i*')],'Connection':II1il1i[ll11I1li(0x25d,'2awW')],'Content-Type':II1il1i[ll11I1li(0x2fe,'Ab]T')],'Host':II1il1i[ll11I1li(0x21d,'2awW')],'Referer':II1il1i[ll11I1li(0x24b,'![3T')],'Sec-Fetch-Dest':II1il1i[ll11I1li(0x230,'00jU')],'Sec-Fetch-Mode':II1il1i[ll11I1li(0x2ec,'d&&Z')],'Sec-Fetch-Site':II1il1i[ll11I1li(0x28c,'d&&Z')],'User-Agent':Il1,'Cookie':l11I1IIi},'params':IlI1liIl,'data':Iiii111I,'timeout':0x7530};II1il1i[ll11I1li(0x2bd,'Ab]T')](Ii1IlI1i,II1il1i[ll11I1li(0x26f,'43r0')])&&(delete IliIi1lI[ll11I1li(0x1e5,'0Y6g')],delete IliIi1lI[ll11I1li(0x226,'2awW')][II1il1i[ll11I1li(0x2e5,'#Jkl')]]);const lI1ilI1l=0x3;let il1iilII=0x0,lIIll1ll=null,li11I1li=![];while(II1il1i[ll11I1li(0x299,'![3T')](il1iilII,lI1ilI1l)){if(II1il1i[ll11I1li(0x2f9,'HV4T')](II1il1i[ll11I1li(0x2d8,'G#kj')],II1il1i[ll11I1li(0x34c,'E@Sd')])){const IIli11Il=await common[ll11I1li(0x2cf,'vv@h')](IliIi1lI);if(!IIli11Il[ll11I1li(0x30f,'bPfX')]){if(II1il1i[ll11I1li(0x2a9,'a0IJ')](II1il1i[ll11I1li(0x20e,'9u[l')],II1il1i[ll11I1li(0x201,'7JKZ')]))IiiI1lI=0x1;else{lIIll1ll=''+lll1IilI+I1iIillI+ll11I1li(0x228,'d&&Z')+IIli11Il[ll11I1li(0x2f5,'6EC8')]+ll11I1li(0x243,'d&&Z'),il1iilII++;continue;}}if(!IIli11Il[ll11I1li(0x339,'CrKD')]){if(II1il1i[ll11I1li(0x283,'a@@O')](II1il1i[ll11I1li(0x285,'[Dq[')],II1il1i[ll11I1li(0x305,'[Dq[')])){lIIll1ll=''+lll1IilI+I1iIillI+ll11I1li(0x2c3,'[Dq['),il1iilII++;continue;}else{const Il1i=IIiiIli[ll11I1li(0x20c,'d&&Z')][ll11I1li(0x28d,'Bs0!')];l1iIIIlI[ll11I1li(0x1ec,'%$[8')](''+IliIiliI+l1lIiI1i+ll11I1li(0x2b0,'8qO)')+(lIllIIIl[ll11I1li(0x290,'*IMC')](Il1i,0x9)?Il1i:'\x20'+Il1i)+'天'+(lIllIIIl[ll11I1li(0x2b2,'P4#)')](Il1i,0x0)&&iI111Ii&&lIllIIIl[ll11I1li(0x1dc,'8qO)')](Il1i,iI11iili)?lIllIIIl[ll11I1li(0x2fd,'a@@O')]:''));}}II1il1i[ll11I1li(0x32b,'Zqui')](ilillIl,i1ll1il,IIli11Il[ll11I1li(0x1e5,'0Y6g')]),li11I1li=![];break;}else lliii1i=iilI1llI[ll11I1li(0x31d,'7X7d')],lii1IIi=llIIliiI[ll11I1li(0x206,'VzHa')],IlIlIlII=iiiIli[ll11I1li(0x2da,'%bR!')];}II1il1i[ll11I1li(0x267,'#Jkl')](il1iilII,lI1ilI1l)&&(console[ll11I1li(0x2f1,'Zqui')](lIIll1ll),li11I1li&&($[ll11I1li(0x306,'oBXQ')]=!![]));}}async function concMain(IIli1IlI=0x1,I1l1l11,ll1liiiI,IIllI1iI,illI1i1I){const illll11I=i1iiIIii,I11illl={'dKWXm':function(IiiIlli1,lilI1I1i){return IiiIlli1===lilI1I1i;},'yLniT':illll11I(0x2be,'00jU'),'iTBzu':function(l11I1llI,iII1Illl,i11IIiI1){return l11I1llI(iII1Illl,i11IIiI1);},'qfHIP':function(ilIlii1I){return ilIlii1I();},'JkrkR':function(IIi1I1,iIIilI11){return IIi1I1(iIIilI11);},'uKehO':function(I11I1111,llIl1I11){return I11I1111>=llIl1I11;},'ICKXm':function(iIilI11I,i1iiIill){return iIilI11I===i1iiIill;},'HIYKO':illll11I(0x213,'L1!7'),'pHbpE':function(li1l11i,l11i11I1){return li1l11i<l11i11I1;},'ABmdz':function(IIlillll,ililIiIl){return IIlillll>ililIiIl;},'NDmCs':function(l1liI1II,Illllil){return l1liI1II(Illllil);},'kEWGB':function(I111I,i1llIiIi,l1I1iI11){return I111I(i1llIiIi,l1I1iI11);},'YDMOz':illll11I(0x2d5,'2awW'),'uaqEO':illll11I(0x2e4,'G#kj'),'HuMKA':function(iIiiIiII,iIl1ll1I){return iIiiIiII!==iIl1ll1I;},'KdRSc':illll11I(0x221,'7X7d'),'KoMIx':illll11I(0x309,'7JKZ'),'CNPcT':function(lllllli,lll1iIii,li11il,Il1IIIii){return lllllli(lll1iIii,li11il,Il1IIIii);},'GRIGe':illll11I(0x332,'0Y6g'),'dsFyC':illll11I(0x326,'VzHa'),'xSYlF':illll11I(0x222,'i&Gn'),'jAWzI':function(i1111iIl,lIi1I1I){return i1111iIl<lIi1I1I;},'OLgaj':function(iI1ll1ll,lllIll1){return iI1ll1ll===lllIll1;},'TvEWG':illll11I(0x26b,'E9bq'),'qqFzb':function(liilIII,l1Ii1lII){return liilIII(l1Ii1lII);}},Ili111Il=I1l1l11[illll11I(0x24f,'7P0y')](lIlIllil=>lIlIllil),lllilIIl=I11illl[illll11I(0x345,'E@Sd')](decodeURIComponent,common[illll11I(0x302,'P4#)')](ll1liiiI,I11illl[illll11I(0x2ef,'7P0y')])),Ii11i11=illll11I(0x333,'P4#)')+IIllI1iI+'】'+lllilIIl+'：',Ili11lii=await common[illll11I(0x23d,'a@@O')](ll1liiiI);if(!Ili11lii&&I11illl[illll11I(0x2cb,'HV4T')](typeof Ili11lii,I11illl[illll11I(0x25e,'*IMC')])){if(I11illl[illll11I(0x21b,'pbO6')](I11illl[illll11I(0x235,'[Dq[')],I11illl[illll11I(0x23f,'vv@h')])){console[illll11I(0x331,'bPfX')](Ii11i11+illll11I(0x2f2,'[nsm'));return;}else il1lIIi[illll11I(0x207,'pbO6')](illll11I(0x273,'vv@h')+IIi1i1l1+illll11I(0x291,'pbO6')+(Iiil1li[illll11I(0x300,'aLv^')]||liiIliIl));}const illI11iI=notify[illll11I(0x2f4,'i&Gn')](IIllI1iI,lllilIIl),l11lIll=common[illll11I(0x34a,'CrKD')](lllilIIl),{jsToken:I11l1il1}=await I11illl[illll11I(0x2ff,'G#kj')](jsTk,l11lIll,I11illl[illll11I(0x1e9,'G#kj')],{'bizId':I11illl[illll11I(0x22b,'![3T')],'v':I11illl[illll11I(0x2ca,'(p@F')],'qs':illll11I(0x23b,'G#kj')+I1l1l11[0x0]}),llIllll1={'cookie':ll1liiiI,'index':IIllI1iI,'title':Ii11i11,'UA':l11lIll,'message':illI11iI,'jsToken':I11l1il1};let IiliI111=0x0;async function IIIllIIl(llIi1Ii){const iiIIi1i=illll11I;I11illl[iiIIi1i(0x1d6,'c)d@')](I11illl[iiIIi1i(0x33c,'%bR!')],I11illl[iiIIi1i(0x330,'Ab]T')])?(await I11illl[iiIIi1i(0x247,'P4#)')](illI1i1I,llIi1Ii,llIllll1),IiliI111--,I11illl[iiIIi1i(0x212,'00jU')](li1II11i)):(Ili1IIll=lIi11iI[0x2],IIIII1l=iIi1Illl[0x1]);}async function li1II11i(){const lillIlII=illll11I;if(I11illl[lillIlII(0x2a0,'tXx9')](I11illl[lillIlII(0x1ef,'%$[8')],I11illl[lillIlII(0x1f5,'CO]2')]))while(I11illl[lillIlII(0x208,'7JKZ')](IiliI111,IIli1IlI)&&I11illl[lillIlII(0x21c,'L1!7')](Ili111Il[lillIlII(0x204,'8qO)')],0x0)){const iiIlIlI=Ili111Il[lillIlII(0x336,'%$[8')]();IiliI111++,await I11illl[lillIlII(0x315,'L1!7')](IIIllIIl,iiIlIlI);}else{const lIli1lII=I11illl[lillIlII(0x216,'vv@h')](I1Ill1l1,illIIi1I);I11illl[lillIlII(0x33f,'43r0')](lIli1lII,0x0)&&(iii11i1I[lillIlII(0x2d9,'pbO6')]=lIli1lII);}}const Il11IllI=Math[illll11I(0x335,'HV4T')](Ili111Il[illll11I(0x2ea,'sw%V')],IIli1IlI),I1I1ill1=[];for(let ili11Il=0x0;I11illl[illll11I(0x30d,'aLv^')](ili11Il,Il11IllI);ili11Il++){if(I11illl[illll11I(0x27c,'c)d@')](I11illl[illll11I(0x225,'![3T')],I11illl[illll11I(0x25c,'7P0y')])){const Ili1ll1l=Ili111Il[illll11I(0x27b,'CO]2')]();IiliI111++,I1I1ill1[illll11I(0x2a5,'E9bq')](I11illl[illll11I(0x2f6,'sw%V')](IIIllIIl,Ili1ll1l));}else Iiil1iil[illll11I(0x329,'43r0')](''+I11iiill+i1Il11l1+illll11I(0x282,'&afM')+Ill1l1lI[illll11I(0x2bc,'G#kj')]+'）');}await Promise[illll11I(0x264,'7X7d')](I1I1ill1),I11illl[illll11I(0x220,'cG!D')](li1II11i),await new Promise(iiIIlI1l=>{const l1III=illll11I,iilii11i=I11illl[l1III(0x1f0,'7X7d')](setInterval,()=>{const IililIll=l1III;I11illl[IililIll(0x1ea,'Ab]T')](IiliI111,0x0)&&(I11illl[IililIll(0x315,'L1!7')](clearInterval,iilii11i),I11illl[IililIll(0x1da,'![3T')](iiIIlI1l));},0x64);});}var version_ = 'jsjiami.com.v7';

// prettier-ignore
function Env(t,e){"undefined"!=typeof process&&JSON.stringify(process.env).indexOf("GITHUB")>-1&&process.exit(0);class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`🔔${this.name}, 开始!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),n={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(n,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)})):this.isQuanX()?(this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t))):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();s&&this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)}))}post(t,e=(()=>{})){if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.post(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method="POST",this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){this.initGotEnv(t);const{url:s,...i}=t;this.got.post(s,i).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)})}}time(t,e=null){const s=e?new Date(e):new Date;let i={"M+":s.getMonth()+1,"d+":s.getDate(),"H+":s.getHours(),"m+":s.getMinutes(),"s+":s.getSeconds(),"q+":Math.floor((s.getMonth()+3)/3),S:s.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(s.getFullYear()+"").substr(4-RegExp.$1.length)));for(let e in i)new RegExp("("+e+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?i[e]:("00"+i[e]).substr((""+i[e]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};if(this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r))),!this.isMuteLog){let t=["","==============📣系统通知📣=============="];t.push(e),s&&t.push(s),i&&t.push(i),console.log(t.join("\n")),this.logs=this.logs.concat(t)}}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`❗️${this.name}, 错误!`,t.stack):this.log("",`❗️${this.name}, 错误!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`🔔${this.name}, 结束! 🕛 ${s} 秒`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}
