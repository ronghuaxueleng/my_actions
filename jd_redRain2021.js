/*
活动名称：京豆红包雨
环境变量：jd_redRain2021_threads // 控制并发线程数（正整数），默认1，最大3，尽量使用默认值，否则请开启代理运行
        jd_redRain2021_interval // 自定义运行间隔时长（整数，单位毫秒），默认2000
        jd_redRain2021_notify // 是否推送通知（true/false），默认不推送
        jd_redRain2021_pinFilter // 账号pin过滤，多个用@进行分割

高并发脚本，谨慎使用并发
活动限制IP严重，建议使用代理
定时请自行修改

cron:1 1 1 1 *

*/

const $ = new Env('京豆红包雨')
const _0x769467=_0x1f44;(function(_0x22c23b,_0x211342){const _0x539a48=_0x1f44,_0x3fcf43=_0x22c23b();while(!![]){try{const _0x56d664=parseInt(_0x539a48(0x2bb,'[Erf'))/0x1*(-parseInt(_0x539a48(0x29a,'OaUk'))/0x2)+parseInt(_0x539a48(0x231,'9iK&'))/0x3+-parseInt(_0x539a48(0x256,'mzZm'))/0x4+-parseInt(_0x539a48(0x22c,'1WSM'))/0x5*(-parseInt(_0x539a48(0x307,']ZG]'))/0x6)+parseInt(_0x539a48(0x30a,'xD2W'))/0x7+parseInt(_0x539a48(0x1ee,'S#9y'))/0x8+-parseInt(_0x539a48(0x2cb,'mzZm'))/0x9*(-parseInt(_0x539a48(0x30e,'yMsM'))/0xa);if(_0x56d664===_0x211342)break;else _0x3fcf43['push'](_0x3fcf43['shift']());}catch(_0x44f4aa){_0x3fcf43['push'](_0x3fcf43['shift']());}}}(_0x5d13,0xa9470));const jdCookie=require(_0x769467(0x289,'xD2W')),common=require(_0x769467(0x25a,'c[Yy')),notify=require(_0x769467(0x214,'K&TZ'));let taskThreads=process['env']['jd_redRain2021_threads']||'1';const runInterval=process[_0x769467(0x29b,'ys^6')][_0x769467(0x2e5,'5]32')]||'2000',isNotify=(process['env'][_0x769467(0x1fc,'Uqgj')]||process[_0x769467(0x21a,'2673')]['jd_redRain2021_Notify'])===_0x769467(0x215,'eCIV'),pinFilter=(process['env'][_0x769467(0x2ab,'kpB7')]||'')['split']('@');interaction=[];let hasGetBasicInfo=![],cookiesArr=Object[_0x769467(0x2f6,'H2gh')](jdCookie)['map'](_0x4ff1ad=>jdCookie[_0x4ff1ad])[_0x769467(0x1ff,'hk@R')](_0x3a132c=>_0x3a132c);function _0x5d13(){const _0x455848=['WRRKUyxOS7jY','rZ/cG8ksnCoxWQRdOMBdKhZdLCochSoMW58YrYyOW5BcHJhdJmo/gwutrHXwW51zhg8tWReHo8kSqSo7WPOdW45eW6T4W7fAW5OLyfdcNcSKW7hdT8oyu8oTWQroWQddGL7dSCksWPVdOdWjW5elWRFcJfpdL8khBe3cH8kEWR/dVSobkSkOpCk1WPJdQeeqWPjqW515udFcISkvBaNcUghdOx3cLmo2WO5wWROZt8oUW5VcUeldN1xcLXFcIcZdU8ogm8o9W7X3gSo+W58bq8kjWRldHe0DWQ3cSSkIW4BcH8oBW4mRv8krWQutW4DEgSoLWPCGWPDUbSkoeh/cVKSQsSkOW74RoSk1jeVcNteLW7ZdPmoplmoYcCoRnSoMWP5kW49SW4ZcR3lcOtSuCtxcVSoQk8keWQPkW77dKSk/hmkTpSkloComxf5QWPNdTZ/dLYtcPSoOW7WRWR14DSkCW43cLwqjDCk0WPG3W4mQmmoVgKZdJ8ozzhxcRN/cMNWNy3xdSdNcLrunoJ0UW5aRlSkRW4xcKheeW7DPWRJcRsFcKSorq8oWWOzwWR/cU8ohWORcKCkXavblWQdcM3VdJCkxWRK7bCoLjgZcIxhdT8oVv0pcTgvcWPVcRZXsW4pcIfm5o8oUW5KEWORcTCoqWOJcJ2PMWQtcJmkBfHRdRXWwEWn3WPHMWPhcOqiVASo1gwvoeWZdUeWxENGcW43dTCoht8kQW4XZW4JdPgNcUmoHW6LtWRTpW6ipWOpcRHuAW4D9WOOudCkihgVcNYZdJrL2cmoiqtBdKry/W5lcSdhdSN51hmotBCoUW4JcSSoZW6JcSbv6W77dQaVdTCk3WPrwWObGW6uuWOBdPmoghfJdVSoYWRVdM8oqaGOEWP/dMCknW5pdM2JdUHtdHmo0W6FcUKRdTmoUqN4yW5ZcJCo5eJFdSCoZWRWPxmk5wCkTWQ/dPSo5jCoyWQzuW67dTmkkptVcG3bZmCotaM8VzMlcGgJdM8kmAdZcRmkSWRRdLbJdHNhdKWC2nsddHv7cO8osW7u/W4u/FbBcLv4yc0VdR0SNzsxcOGtdV8oGWO0BWQurW5W7WQtdQCkYmWNcTCkEW4NdGSoNW67cTSkbWOhcR8oZW4/dT8keFSktWRJcSIxdHSorW5fjuSkhbwtcNdddVa3dJ8okr0f7W4qRWO/cHhqYWRjAW7nfhmo6wCkZW7X0W7JdHSotWQiFWQ7cQCoWm35AxmoSAmk5wu7cH3a8WP7dGHqBWQRcQcFcQ8knW4TlW7hcKGtdKMBcH27dGqziWRFdQ8oTW4zmWQZdNe8LpcBcGmoPW4tcS8k9WQCeW4ZdUJqrWQaHWPtcGmk4WPBdR0j1W7aKW4fMhWS2mwOXWRn4t8kMWRxdOSkYsSoCWOVcSwqlfMCcWOuToLxdU1TfWPKkoSoYWReRnwSlnM8ZWR5CWR7cGWW5WR13ESk3EYHtW5hdOcXvW6iSa8kjW7VdSSo3WRFdHSk7EWNcPuXUWQlcLmo2WQOKW6FcGHGGW6mgWOGVW751vKuqbmonW5RcVmkVrHFdLCooamkFWOjhzXxdVfddTCkpeSk2kSkzW75TfSoLW6dcSmoYyCo+fX4','W4qRW5xdMCo4bNG','zdDwyG','yZDnzty','8yc7Jmk2','8jwpUWxLH4/ORlBdSq','jMyyW5KfW4/dGmo1WR1H','wt3dS8oHWRJdVCoLeLWMAmo0WR/dTbWcW6vrW5O','CCoTwCkCW7eEWRW','W5xdUmotmwZcJfHq','WRnvWQlcUCk9hG','lW3cRq','rhjdW4RdHmkLW6lcJSoE','56wpWQBOVANOOPVPLP/PM4/MLQlPLAC','8jE4Rba','6lsr5y+y6lYX5RQbWQnFnW','W5ZdQSoa','imoREmoaASkKW7tcQd0YrGZdGfqfwSoDhw45Cq','W5biW6pdLCoVWRG/xSk6WRFdK8ksW5T6WP3cGCoUw8k2WQxdP8k6nSoHWORcIZm','W5Wddvq','E8ojga','p2ywW4S','mrFcPmotEKe','t8oTiq7cTcKVk2ywaa','W5BcPha','CmkrwW','WQ1pWQS','bmolvq','W5/dUmoknq','icRcH8oSW7/dQq','W4tcQ28T','4P+elEAFQoECQoISPUAXKSo5','vJZdUCo9','W7OTWQm','ktLtW7ykySoeW7OjrYS','hoIUPoAZKUwrNUw5LCkT','W4tcLmo8WRBcTCoo','W5/cPwe','W4BLRAxNI5dcIG','pZjzW4yMyCof','W5pcImo1WRdcQCo1oSkxW6WfurtdHcPAqryqW6Xg','ntBcKmoYWQBdJcnOf8kkzNGqWP8nW5S','WOytC8kDv8ovWOfE','5y2P6yww54Ir5Ogr57UV5P6YeqvkWOpdVHhcJ8oyW5T/','yCkll0VcPmkpW684WO1cWPJdV8kUcCoYWRNcJgldNCkcW4y','W7BcQa/cMCkQWRurWPBdKG','8lM4LSk4','oqOCEvddU0CSWQxdI8oncvW','kHNcOq','WRbvWQNcJSkQm8k6WPOuWRWBWPaigSoTcY55x8oh','vSo3xa','W4K8W4BdKSoV','pYRcH8oVW4NdPaKShCk6l109','5RsW5yQt5AwZ5zkl772+','CmoNtq','AdZcNCo3WRqPWOfr','C0JcTaRdN8ovWODKkNqhwrRcJSozxa','W6SlW6a','DSojba','W4qufLzxWPS','5BA86kYW572Z6lwx6l+/6lYr6kov5B6u5yIg6lwX5y+Y','vspdMSkHcmobW7/cPtZdKsJdI8kbcCkGW55YhZH4W4NdI2xcICo/gtX6zurtWOKgxgDzWQeHDCknEmkVWOv3WPPxWQu','W4iHW4m','AdZcNCoYWOKV','W7FcUqRcKCk2WRylWRNdHuNcUa','WQVdHCk8ymkSWRWwFmkkW6VdSdO','udZdTW','u3ntWRNdUwa','zK1BWOBdGW','W7pcMSouWRi','WR1JW73cVmkz','ogWi','WRzbWQxcImkhe8k5WOS','qYtcKa','WQDbWQxcKmkbh8kJWO8dWQOj','xtddPmo6WRFdQa','WOCslmo8emkNW5qiW67cPffTBmkbfCo2W6hcS2TOvd41hZjSgWKpiCkWWObgWQjpWRe','W7XDemkznSopW79OW6xcLhpdPW','W6vidCkvn8ky','W5xdUmotmq','W7CcfaVdO0tcNCkS','WRmiW6ZdImoQWRGTxSoDW7ZcGCoxWP9GWPlcMSoKw8k3W5tcG8k3cCoaW4pcHbRcMmogaCkvFIpdGGBcSfVcLblcPdFcSCoxW5vXWRldT1xcJJRdJHNcVSkclmo6WPOjWPDdWQDZW6JcNIlcN8k2Ar4AWQxcLCkdWPvTWRa7Bmk3amoWW77cI0xdGsXbWO3dOLGhltmGW5xcICkIW7ddOmkKW5JdQ1bKcfpdQ8kdW53dMmkDWQtcOqtcNuRcPdFcP8oYWODsWRGGW4VcN8kHFSkoWO4qWPyMhCk7W6pdVGnLWPldUrKfiXBdPKNdOrRcI8oLxcFcTCk9oG','nJnA','W4hNPjNLIOSf','CvpdU8kKibm0bSkIwfK1W7G','6lAH5y295PEW5Pwd','r8o8u8kFW7ve','k8oGFSowqCkXW63cLZK4BWBdJeSLwW','vZq6qSk7WPhdQxFdO8kUWOpcHbHbW70GjMlcJSk4W6/dNCkq','WO/dOmk/WOuUWORcLG','8yUtOmkP5yYo542b5lUd6loO57I05y2j6zIk776g5yYO5Bg35BYG5AAn6l606kggrq','6AcB5yYT5AAi6lEYuxS','qe7cNXe','WPJdTmkOWOC','f8kzlmkJArO','6yo755Eb5y225PwFW69s5OY+6i2n5B6u5zg35lQt55gbWPxcSdi','WQBdSxFdPSkMWQu','kUkERCoT','yX7cTSk2','kILoW7O','W6JcUmot','4PQRg+IhJ+wVKos4REI8N+IGV+MwToMzGEAvUEMxT+IVMEE9I+MuJUIUPa','WQqiWOe','mw0mW4OoW5VdUSoeWQjRW4ldIXZdRCkqxq','W7JcLCoAWQuskYbiWQpcO0pdLfyhAvG','WPKcW6ldRmoJWQC/emkpWRC','5PYh5lIB6lkv57MI5yYA6zIj','W47cMmo+WQxcPmou','iCodaspcV8oftNb4vq','W547W5RdUmoZea','W7HSWRdcVSk0','umoJkW','W4pcJCoGWQ7cUCoFnCkxW6ayxLJdMJbdsNnEW75mWOBdK8oiWQzrWQRdHSotlSovWRisfG','44kJ5OYA56s844gi6k6M5yEv6i6L5y2alSkWWRBdVrDi','W6JcK8o6oCoUW6Gx','l8oiDM3dQ8ktjqm','WPGnWQi','AfrblW','zZZcLa','s8o3wCo4WRlcUMFdUsecsv/cNgK','6AcJ55QY5PYx5B6s5AAe','W7qkebO','WPiiW7e','vCoIlWFdRci4mq','tx1A','WRtdOe/dV8kHWP/cKxVcTG','6yg455+g5O+A6yccvqOb','W7NcLmoWWRKFpIz5WRlcUeddH1aYu0/dLCoqaL3cVSoKWPS','W57cUwe','Ee9xiWRcQbOMWQW','mWiEW4K','rhHc','B1/cRGhcI8oOWR4zph9nDdhdGmo9vq','E8kBsfFdRmkugImGk3hdKhNcVrBdKG','lGpcUG','WQOee8kyaSksW5nSW6lcLW','W63dObxcItlcICobgCkPW5pcRCou','EtBcL8oMWOeHWPWxesBdQCk3','W6Pkfmkz','oqypW4ZcOrOkmSohsILts8kSlSodsWZdJ8kfpq','WOinWRVdOmoti143','W7ewhbhdG0tcHmkW','W4CRW5hdJCkWfwFdMNRcRG','hmkzlmkwFbXbW5CymWCWWOeXEq','5B2b5As55PAc6zEkWPtdJW','WOSvW7O','W63cQaNcGmk3W6HxW5/dIL/cVSohW6ZcLmkHoSo2WR0NWQSuW6VcR3KUgdubW77cKKuTW4H9','W6BcSW/cGW','zCkkfq','W5aSlIS','W65KWQ7cUCk0yG','CtVdNSoCWOeMWOexyfJdOmo3W7GsW6vHWR/cOazWWRhcHdKrEmoThXL9ofidgx4SEqpcTmoBWQZcT8kgWQXndW','uXrcnv8DBmkdWROfvXzC','WPNdU8kQ','W6NdICoQkmoAhSotW53cMq','B8o9sCkmW7ukWQOqW6hdI8kGW49WWP4','WQmuWO8A','B1PrkW','pIRcMmo+W67dSHO','z1rc','W4dcVMCTjmoU','8l6OOta','W4hORj7MS7BLPj7OT7bs4PYkpq','6ls65yYj5PEC5Pww','W5dcImo8WQC','FCosWR3cPf3cHmklW6ZcO0ftAW0','BJ3cKmoMWPK4WOz7ugxcSSoHWQToWQWVWQ7cH08','smo7smoKWR/cRGhcRgTh','WQroWQJcQmk6f8kX','WRPMW5BcRCkuc8o8W7CLWOZcUgTderKuyYhcQSoYoJDaWRa','WQvpWOxcKSkNh8kMWO8sWROtWOuzmSoOhq5Wv8ofW6BdUde','AYbwCYr5lglcKmkJrem','W4rwFCkSqCoHWPe','57U15y2M6zQc','jaFcVSocFuHH','FqFcRCoaW6ldJZq','WR3LPjlOTlVVV4pLJRVLMBlVV7G','WRhdOfZdLCkGWQtcK3/cTNz2CGxcOG','wmoXs8oXWQlcPWhcSgnw','yYFcH8oKWPnYW50vqMBcSSkOWQGnWQmLW7tcRurEW5ddNcrflCkTuHS8iu5hpNe','rwrc','WRGoWOmgWO13W5CeWPXHdSolAXfPesuKnCoo','jgiDW4Ss','AmklpMxcS8kI','pYruW6y','AXr5W5KMqSo6','5AwW6lEx77245Rsf5yIg5BsD57IZ5P2z5OMO5lQJ5A6A5z+G','W4uGW4ddMmoVfwJdH2xcPc4','gmkoj8kLArC','WRKoWPuC','fx4PqSkbWONdTtVdMG','W7dOR7xMS4VLP67OT5rp4PYYWRBMLQZLKk/LUj7MLkVMJj8','kSoHC8ob','jHdcUmo5zG','W6ddR2rgxNZcIMrvWRK','W5ZMTR7LIOdPM4BLI7NdSCoy5PYw5AEj5OQD5Awbjfa','W79SWQVcUCkfECk0W5C','BdBcH8oEWQul','cg4UwmkMWPtdRIe','W67dLmoSlCor','tSoMssddJMq','CftcGmoLFu5siG','W6xdR3DIvvVcKgHx','EftcVaBcL8oRWR4','ltZcMSoIW6ZdRWmGhCkAcLKRW5e','W6VdPxC','ma3cP8oZ','nHdcPG','ib/cVG','W6fJWQhcOCkKDmk8W4e','BuVcPapdNSk4WQ4SkhXgztFcMmkuu8oo','W6upgbldKKpcHmkfW5jlWQe','W6ffgSkoomknW4HgW7JcGxpdP1Kba28rWPpdLq','W6/cSXtcNG','ycjEyIy4','EsBcN8oX','4P65toAFUoEDSEITSoAWIbm','W7BdVaJcNc3dL8k8u8kQW5tcRSkoW40aEMBcMhNdHcO','kXBcVSoMzX8Rq8k4A25JW4tcRdNdPSksW6NdOYS','W6Gxcq/cJqldN8kQW5rCWRddHSoHfvVcRSoHfMddSIWNWQ7cG8oEfG7dGKm6W5RcUvRcLvlcNgLNW6xcV8kPW4u','l8ktgvS','dKWv','D0hdTJCwWQRcKHZdI8kCWPbhWOq','W4pdRmolnq','Bmo9wCkh','rSoMrcq','WRJdPexdSW','W7FcN8oMWQuopWz5WRJcOHVcGqDcF1xdKSodculcRCoRWOm','rx5l','WRXTW64','WPGjWQhdP8oMlvy','ECkmtNhdSa','W4uuc0jcWPtdPa','rSoOEsVdIhldOmkwW5b3dLCPb8kalmobaCkrW5lcPCo1WR4','5lQn6lgu6zUv','txtcMq','W6/cJSoxWPifpW','lY5r','57US5y6l6zU1WP4y','jq7cPCo5zG','oCoVDmoqBmkOW7tcOG','W7lcVrtcHmkqWRSvWPu','t8oPiG/dNcG5fMGscW','shXEWRhdO2L8WPu','D8oTu8kC','c34HuSk3WO/dNJNdHCkQ','q8o0qYZdM3NdV8ksW513m0GHi8kae8obc8kwW4S','pmo7C8oHvSkL','4P2WC+IgIUAEV+I8KEIJGEMdLUwjO+s6QEMvJoIVRSkz','W4GHW73dK8oPexNdKM/cVYKWWPXwlI1DWRXYWQebxSoD','yYnmFG','z1rcdXBcVq','W7BdKSo/','q3nFWRJdUMuS','W7RcNSonWP0Uga','uSoPkq/dIYmWlxCAlvHVwNNdJMu7eCoFra','r8oPuZFdHwFdPSk2W4bWdKyIk8kwmCoCl8kB','t8o5lIJdTIi4','hhuSrmkRWO3dRHNdGSk4WOJcHHPFW4CKnMJcHq','yuHkja','hKyS','WQZcSe7dN2JdLCkNdCkBW6hcOSojW4C','W48VW4ddNSo1','zLtcOXtcHSoW','WRatsSopDmonW7HDW6NcKfxdTa','5y+56yED5BY95zoY54IG5OcmjmoBWPabuCo6W5FcPCkeW5a','W40+W4tdKCo0f2RdH2xcPc5PWOe6kILdW7z6WQmwxCkeyCkgrmo6WOeoW6azWQ7cNq','W67cJSoBWPqepZe','WRBcUseZcZ/cI29rWQvlqa','W77cL8o5oq','sdZcNCoGWOuMWOyxD2/cQ8oJ','ugfmW5VdOmoJW47cGSoBWOdcTSkL','W7xdV35ovwS','W4aHW5m','hCkvoG','uwDoWRu','WRBcUN1zseJcMMq','s8oPuYNdIxpdT8ke','f8ktjq','Dmo8xSkFW6ndW7zTW6xdJmkOWPn5W4mOBSo2W6hdLmoU','DZDlDWmQg2u','pGdcR2rrWQ/dPXJdImkzWPnH','4P2geEAFP+IcJUAUKEEJTUwNJUErJ24','cN4HuSkxWPpdVGZdMmkMWOq','j8oGACobsSkGW7RcSYi4AW','44cS6lw15y2N','W7tcLCoAWRSEpZfR','W4pdRmojfvlcIq','qUIVLoAWSowKSUI1IGRIN4BdIoAuT+wsQ+w6QEAuP+AnSa','thzrW58','WPdLPOZOTR3VVy3LJkVLMPNVVQa','e1yxCrzJnmkCWRiuxdrQWQ5hDhPZsCku','x8oMua','WRRdQK8','q8o6smo1WQlcOJBcVxPCfW','EUs5TUs6KEIZLoE7REwmIEMzIoA2LEwlIca','iWOhW40','d0ybCa5npW','WQ7dS0hdS8k4W7NcU3NcVuz+Eq','W6ldPhn5qN/cJvvaWRn0q8oWWQBcP8om','zmo+q8kkW6DlWPOTW6RdMSkOW5O','qN1tWR7dT3K','g34Ox8k8WQNdSZxdLa','cCkjlmkbCXy','W5FdTCoip07cOuvlaW','WRFdRKNdGSo9W6foWP7dNMpcMSkRW6G','nqWlW5RcLY8gl8oqqHK','W6RdQ2rOuW','pmoRASofsSkLW43cVJSY','W40ho15nWOFdPmophq','kmkCf1ldM8klWOv1','W5xcLCkL','DCoMxSkkW6iyWRO2W63dK8kV','iUs8G+AcR+wiJSkp','8lkJGt4','WO/MLQZMJjpMN5ROJBpLJitMIAJLIA/VVQFOR5JMOjFMNiZNV5dNUABMM6tLKBJMRRVLU6BVVytcHvtdP8kOEs7MMzNLKAFMNkBML5C','bcFcNG','c00rBXPop8kB','uCoPpXJdUce4','zCkkfv3cK8koW5a2WPjjW6NcOmoZu8oeWRlcQNJdKmkbW4C','E8kBuKVdGW','5B2Y5yMF5AwR5zcC5BwK6l6Z5yIP5yY35PAt5lI26zI8','W7ZcN8oHlmo5W74','WRtdQKFdUSkQWQRcLG'];_0x5d13=function(){return _0x455848;};return _0x5d13();}!cookiesArr[0x0]&&($[_0x769467(0x282,'2673')]($[_0x769467(0x28c,'xD2W')],_0x769467(0x273,'2673')),process[_0x769467(0x2ba,'[Erf')](0x1));const prize_map={0x1:_0x769467(0x255,'hk@R'),0x3:_0x769467(0x201,'!pYY'),0x5:_0x769467(0x228,'5]32'),0x7:'[优惠券]',0x8:_0x769467(0x1f6,'c[Yy')};!(async()=>{const _0x4854a5=_0x769467;notify[_0x4854a5(0x241,']#1b')]({'title':$[_0x4854a5(0x247,'5]32')]}),await Main(),isNotify&&notify[_0x4854a5(0x26b,'K&TZ')]()&&await notify[_0x4854a5(0x265,'[Erf')]();})()[_0x769467(0x308,'D#uZ')](_0x1d720b=>$[_0x769467(0x2fd,'9iK&')](_0x1d720b))['finally'](()=>$[_0x769467(0x2c2,'P%AO')]());async function Main(){const _0x1a8fc8=_0x769467;try{try{const _0x2f813e=parseInt(taskThreads);_0x2f813e>0x0&&_0x2f813e!==0x1&&(taskThreads=_0x2f813e);}catch{taskThreads=0x1;}taskThreads=Math[_0x1a8fc8(0x2e6,'Igi%')](taskThreads,0x3),$[_0x1a8fc8(0x24a,'y($(')]=null;if(runInterval)try{const _0x20b4cd=parseInt(runInterval);_0x20b4cd>=0x0&&($[_0x1a8fc8(0x2f2,'P%AO')]=_0x20b4cd);}catch{console[_0x1a8fc8(0x313,'D#uZ')](_0x1a8fc8(0x267,'9iK&'));}console[_0x1a8fc8(0x318,'Tmx$')]('=========='+$[_0x1a8fc8(0x2de,'Al!A')]+_0x1a8fc8(0x30b,'R6YO')),console[_0x1a8fc8(0x313,'D#uZ')](_0x1a8fc8(0x261,'!pYY')+$[_0x1a8fc8(0x2c6,'YE%f')]/0x3e8+_0x1a8fc8(0x20f,'5]32')),console[_0x1a8fc8(0x2fe,'!J@f')](_0x1a8fc8(0x280,'OaUk')+(isNotify?'开启':'关闭')+']'),console[_0x1a8fc8(0x271,'mn&y')](_0x1a8fc8(0x211,'ImQI')+pinFilter['join'](',\x20')+']'),console[_0x1a8fc8(0x227,'2673')](_0x1a8fc8(0x26e,'![l@')+$[_0x1a8fc8(0x2e4,'xjpZ')]+_0x1a8fc8(0x22d,'F4yF')),console['log']('');const _0x50c622=_0x1a8fc8(0x296,'Uqgj')+common[_0x1a8fc8(0x291,'Tmx$')](0xd,_0x1a8fc8(0x24e,'1WSM'));$['UA']=common[_0x1a8fc8(0x1fd,'![l@')](_0x50c622),$[_0x1a8fc8(0x306,'TxG1')]=common[_0x1a8fc8(0x300,'5]32')](_0x50c622),$[_0x1a8fc8(0x23c,'mn&y')]=common[_0x1a8fc8(0x2b9,'Uqgj')](),$[_0x1a8fc8(0x32c,'xjpZ')]='';let _0x4254bf=![];await sendRequest('xview2Config');if($['xview2Config'])for(let _0x9ead4d of $[_0x1a8fc8(0x2ad,'j6V[')]['targets']||[]){for(let _0x602e74 of _0x9ead4d[_0x1a8fc8(0x2ca,'v$w(')]||[]){if([_0x1a8fc8(0x2af,'s!Cd'),_0x1a8fc8(0x2ec,'R6YO')][_0x1a8fc8(0x2d0,'mzZm')](_0xa825d3=>_0x602e74[_0x1a8fc8(0x21e,'F4yF')][_0x1a8fc8(0x2f5,'R6YO')](_0xa825d3))){let _0x57728c=_0x602e74[_0x1a8fc8(0x2f7,'c[Yy')][_0x1a8fc8(0x326,'![yY')],_0x52292b=_0x602e74['preDownLoadList'][0x0][_0x1a8fc8(0x293,'K&TZ')],_0x2dcd9a;for(let _0x555048 of[_0x57728c,_0x52292b]){if(_0x555048[_0x1a8fc8(0x1f3,'Al!A')](_0x1a8fc8(0x250,'xD2W'))){_0x2dcd9a=_0x555048;break;}}if(!_0x2dcd9a&&_0x57728c[_0x1a8fc8(0x317,'v$w(')](_0x1a8fc8(0x305,'9iK&')))try{ss=await jsonurl(_0x57728c);for(let _0x160dc5 of ss[_0x1a8fc8(0x234,'v$w(')][_0x1a8fc8(0x2d5,'sRg%')]){if(_0x160dc5[_0x1a8fc8(0x31a,'j6V[')][_0x1a8fc8(0x2ef,'[Erf')]['includes'](_0x1a8fc8(0x24d,'6TxE'))){_0x2dcd9a=_0x160dc5[_0x1a8fc8(0x20b,'F4yF')][_0x1a8fc8(0x2d1,'mzZm')];break;}}}catch(_0x29e939){}if(_0x2dcd9a){if(_0x602e74[_0x1a8fc8(0x2d9,']#1b')][_0x1a8fc8(0x27f,'xjpZ')]){_0x4254bf=!![];let _0x27da94=_0x602e74[_0x1a8fc8(0x2e1,'F4yF')][_0x1a8fc8(0x2cc,'yMsM')],_0x21e85a=_0x602e74[_0x1a8fc8(0x2a6,'27fX')][_0x1a8fc8(0x229,'[Erf')];const _0x1e554d=$[_0x1a8fc8(0x27b,'sRg%')](_0x1a8fc8(0x23a,'oE7S'),_0x27da94),_0xa00774=$[_0x1a8fc8(0x32a,'s!Cd')](_0x1a8fc8(0x22b,'G^XY'),_0x21e85a);let _0x11597a=new Date()[_0x1a8fc8(0x2b0,'mzZm')]();if(_0x11597a>_0x21e85a)console[_0x1a8fc8(0x2fe,'!J@f')]('🔚\x20京豆红包雨已经结束');else _0x11597a>_0x27da94?(console[_0x1a8fc8(0x285,'Igi%')](_0x1a8fc8(0x25c,'kpB7')),await redRainurl(_0x2dcd9a)):console['log'](_0x1a8fc8(0x1f7,'1WSM')+_0x1e554d+'至'+_0xa00774+_0x1a8fc8(0x26c,'b2D['));}}}}}!_0x4254bf&&(interaction=await jsonurl(_0x1a8fc8(0x2dd,'sRg%')));if(interaction[_0x1a8fc8(0x26d,'27fX')]>0x0)console[_0x1a8fc8(0x24b,'3BKn')](_0x1a8fc8(0x207,'Igi%')+interaction[_0x1a8fc8(0x309,'oE7S')]+_0x1a8fc8(0x329,'[Erf'));else return;for(let _0x170fc0=0x0;_0x170fc0<interaction['length'];_0x170fc0++){$['needRemoveCookieIndex']=[],$[_0x1a8fc8(0x32d,'yMsM')]=interaction[_0x170fc0][_0x1a8fc8(0x26a,'5]32')],$[_0x1a8fc8(0x2a8,']#1b')]=interaction[_0x170fc0][_0x1a8fc8(0x304,'c[Yy')],await common[_0x1a8fc8(0x239,']#1b')](taskThreads,cookiesArr,taskFnc),$[_0x1a8fc8(0x218,'mzZm')]=![];_0x170fc0!==interaction['length']-0x1&&console[_0x1a8fc8(0x21c,'y($(')]('');$[_0x1a8fc8(0x28d,'s!Cd')][_0x1a8fc8(0x260,'Tmx$')]>0x0&&(cookiesArr=cookiesArr[_0x1a8fc8(0x298,'YE%f')]((_0x2fbde0,_0x27cc58)=>!$[_0x1a8fc8(0x22e,'Uqgj')]['includes'](_0x27cc58+0x1)),$['needRemoveCookieIndex']=[]);const _0x2838d6=notify[_0x1a8fc8(0x2c4,'yMsM')]();_0x2838d6&&console[_0x1a8fc8(0x278,']#1b')]('\x0a📣\x20运行结果\x0a'+_0x2838d6['replace'](/：/g,_0x1a8fc8(0x263,'oE7S')));}}catch(_0x3b1ec2){console[_0x1a8fc8(0x2a1,'9iK&')](_0x1a8fc8(0x2fa,'6TxE')+_0x3b1ec2);}}function _0x1f44(_0x1da2fa,_0x309791){const _0x5d132b=_0x5d13();return _0x1f44=function(_0x1f4483,_0x352aa4){_0x1f4483=_0x1f4483-0x1eb;let _0x312ac9=_0x5d132b[_0x1f4483];if(_0x1f44['yNiDmv']===undefined){var _0x16c37a=function(_0x3a132c){const _0x1d720b='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x50c622='',_0x4254bf='';for(let _0x2f813e=0x0,_0x20b4cd,_0x9ead4d,_0x602e74=0x0;_0x9ead4d=_0x3a132c['charAt'](_0x602e74++);~_0x9ead4d&&(_0x20b4cd=_0x2f813e%0x4?_0x20b4cd*0x40+_0x9ead4d:_0x9ead4d,_0x2f813e++%0x4)?_0x50c622+=String['fromCharCode'](0xff&_0x20b4cd>>(-0x2*_0x2f813e&0x6)):0x0){_0x9ead4d=_0x1d720b['indexOf'](_0x9ead4d);}for(let _0xa825d3=0x0,_0x57728c=_0x50c622['length'];_0xa825d3<_0x57728c;_0xa825d3++){_0x4254bf+='%'+('00'+_0x50c622['charCodeAt'](_0xa825d3)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x4254bf);};const _0x4ff1ad=function(_0x52292b,_0x2dcd9a){let _0x555048=[],_0x160dc5=0x0,_0x29e939,_0x27da94='';_0x52292b=_0x16c37a(_0x52292b);let _0x21e85a;for(_0x21e85a=0x0;_0x21e85a<0x100;_0x21e85a++){_0x555048[_0x21e85a]=_0x21e85a;}for(_0x21e85a=0x0;_0x21e85a<0x100;_0x21e85a++){_0x160dc5=(_0x160dc5+_0x555048[_0x21e85a]+_0x2dcd9a['charCodeAt'](_0x21e85a%_0x2dcd9a['length']))%0x100,_0x29e939=_0x555048[_0x21e85a],_0x555048[_0x21e85a]=_0x555048[_0x160dc5],_0x555048[_0x160dc5]=_0x29e939;}_0x21e85a=0x0,_0x160dc5=0x0;for(let _0x1e554d=0x0;_0x1e554d<_0x52292b['length'];_0x1e554d++){_0x21e85a=(_0x21e85a+0x1)%0x100,_0x160dc5=(_0x160dc5+_0x555048[_0x21e85a])%0x100,_0x29e939=_0x555048[_0x21e85a],_0x555048[_0x21e85a]=_0x555048[_0x160dc5],_0x555048[_0x160dc5]=_0x29e939,_0x27da94+=String['fromCharCode'](_0x52292b['charCodeAt'](_0x1e554d)^_0x555048[(_0x555048[_0x21e85a]+_0x555048[_0x160dc5])%0x100]);}return _0x27da94;};_0x1f44['xlZzTr']=_0x4ff1ad,_0x1da2fa=arguments,_0x1f44['yNiDmv']=!![];}const _0x24aa09=_0x5d132b[0x0],_0x548ce2=_0x1f4483+_0x24aa09,_0x3c9628=_0x1da2fa[_0x548ce2];return!_0x3c9628?(_0x1f44['kMZCQX']===undefined&&(_0x1f44['kMZCQX']=!![]),_0x312ac9=_0x1f44['xlZzTr'](_0x312ac9,_0x352aa4),_0x1da2fa[_0x548ce2]=_0x312ac9):_0x312ac9=_0x3c9628,_0x312ac9;},_0x1f44(_0x1da2fa,_0x309791);}async function taskFnc(_0x48cc95,_0xf75355){const _0x1c1961=_0x769467;if($[_0x1c1961(0x20c,'y($(')])return{'runEnd':!![]};const _0x4a4879=decodeURIComponent(common[_0x1c1961(0x2b3,'xjpZ')](_0x48cc95,_0x1c1961(0x262,'xjpZ'))),_0x2d6029=_0x1c1961(0x31f,'6TxE')+_0xf75355+'】'+_0x4a4879+'：',_0x839a84=notify[_0x1c1961(0x2be,'Tmx$')](_0xf75355,_0x4a4879);if(pinFilter[_0x1c1961(0x23d,'eCIV')]>0x0&&(pinFilter[_0x1c1961(0x27d,'mn&y')](_0x4a4879)||pinFilter[_0x1c1961(0x320,'5]32')](encodeURIComponent(_0x4a4879)))){_0x839a84[_0x1c1961(0x314,'Tmx$')](_0x1c1961(0x23e,'P%AO')),console[_0x1c1961(0x238,'H2gh')](_0x839a84[_0x1c1961(0x287,'![l@')]()),$[_0x1c1961(0x213,'P%AO')][_0x1c1961(0x315,'R6YO')](_0xf75355);return;}const _0x35d823=await common['getLoginStatus'](_0x48cc95);if(!_0x35d823&&typeof _0x35d823===_0x1c1961(0x200,'xjpZ')){console[_0x1c1961(0x244,'6TxE')](_0x2d6029+_0x1c1961(0x257,'yMsM')),_0x839a84[_0x1c1961(0x2d2,'Gcb#')](_0x1c1961(0x2a5,'![l@')),$[_0x1c1961(0x301,'mn&y')][_0x1c1961(0x2e2,'H2gh')](_0xf75355);return;}let _0x174407;const _0x3c5ae1=common['genUA'](_0x4a4879),_0x19482c=common[_0x1c1961(0x2c7,']#1b')](_0x4a4879),_0x2ea857=common['getJEH']();if($['runEnd'])return{'runEnd':!![]};if(!hasGetBasicInfo){hasGetBasicInfo=!![],await _0xf5a087(_0x1c1961(0x325,'OaUk')),await $[_0x1c1961(0x220,'2673')](parseInt($[_0x1c1961(0x2f3,'S#9y')]*0x1+0x1f4,0xa));if(_0x174407){let _0x49eac1=_0x174407?.[_0x1c1961(0x2ce,'G^XY')]?.[_0x1c1961(0x226,'27fX')](_0x488c26=>_0x488c26['assignmentType']==0x0);prizeInfo=_0x49eac1[0x0];if(prizeInfo){let _0x1e1342=[],_0x41885c=null;for(let _0xa3c312 of prizeInfo[_0x1c1961(0x274,'hk@R')]){if(_0xa3c312['sendBeginTime']&&_0xa3c312[_0x1c1961(0x31d,'c[Yy')]){const _0x315009=Date['now'](),_0x5f1787=new Date(_0xa3c312[_0x1c1961(0x2a7,'b2D[')]),_0x7dcc84=new Date(_0xa3c312[_0x1c1961(0x2f4,'mn&y')]);_0x5f1787<=_0x315009&&_0x315009<=_0x7dcc84&&(_0x1e1342[_0x1c1961(0x2bf,'3puB')](_0xa3c312),!_0x41885c&&(_0x41885c={'beginTime':_0xa3c312[_0x1c1961(0x236,'G^XY')],'endTime':_0xa3c312[_0x1c1961(0x224,'[Erf')]}));}}if(_0x41885c){console[_0x1c1961(0x285,'Igi%')](_0x1c1961(0x292,'Al!A')+_0x41885c[_0x1c1961(0x1eb,'c[Yy')]),console[_0x1c1961(0x20d,'mzZm')]('结束时间:\x20'+_0x41885c[_0x1c1961(0x2aa,'y($(')]);let _0x38bc30=_0x1e1342['map'](_0x690ce2=>{const _0x4a5d4b=_0x1c1961;let _0x49e021=prize_map[_0x690ce2[_0x4a5d4b(0x1f1,'P%AO')]]||_0x4a5d4b(0x258,'H2gh')+_0x690ce2[_0x4a5d4b(0x2b4,'![yY')]+']',_0x4e4b55=_0x690ce2[_0x4a5d4b(0x2c0,'c[Yy')]!==undefined?'(剩余'+_0x690ce2[_0x4a5d4b(0x20e,'Igi%')]+'份)':'';return''+_0x690ce2[_0x4a5d4b(0x208,'TxG1')]+_0x49e021+'\x20'+_0x4e4b55;}),_0x7408ce=_0x38bc30[_0x1c1961(0x222,'6TxE')]('，');prizeInfo[_0x1c1961(0x2f8,'v$w(')]>0x0&&(_0x7408ce+=_0x1c1961(0x2c5,'xjpZ')+prizeInfo['assignmentTimesLimit']+'次'),console[_0x1c1961(0x21b,'![l@')](_0x1c1961(0x237,'9iK&')+_0x7408ce+'\x0a');}else console[_0x1c1961(0x2cf,'yMsM')]('当前没有正在进行的活动，下次早点来吧~'),$[_0x1c1961(0x2f9,'P%AO')]=!![];}}}await _0xf5a087(_0x1c1961(0x2fb,'D#uZ'));if($[_0x1c1961(0x321,'F4yF')])return{'runEnd':!![]};if($[_0x1c1961(0x28e,'iaNp')])await $[_0x1c1961(0x204,'j6V[')]($[_0x1c1961(0x252,'sRg%')]);function _0x5d4061(_0x5f486f,_0xefbc1f){const _0x4054f5=_0x1c1961;try{switch(_0x5f486f){case _0x4054f5(0x233,'y($('):if(_0xefbc1f[_0x4054f5(0x277,'9iK&')]==0x0&&_0xefbc1f[_0x4054f5(0x30d,'5]32')]==0x0)_0x174407=_0xefbc1f;else{let _0x586abc=_0xefbc1f?.[_0x4054f5(0x268,'3puB')]||'';console[_0x4054f5(0x249,'TxG1')](''+_0x2d6029+_0x586abc),['项目']['some'](_0x230f76=>_0x586abc['includes'](_0x230f76))&&($[_0x4054f5(0x312,'yMsM')]=!![]);}break;case _0x4054f5(0x2ac,'y($('):if(_0xefbc1f&&_0xefbc1f[_0x4054f5(0x303,'mn&y')]==0x0){let _0x470b10=[],_0x452c31=Object[_0x4054f5(0x217,'TxG1')](_0xefbc1f?.[_0x4054f5(0x242,'S#9y')]?.[_0x4054f5(0x29d,'H2gh')]||{});for(let _0x2b6936 of _0x452c31){let _0x1e8243=_0xefbc1f['rewardsInfo']['successRewards'][_0x2b6936];_0x470b10=_0x470b10[_0x4054f5(0x32f,'R6YO')](_0x1e8243[_0x4054f5(0x276,'iaNp')](_0x133d70=>_0x133d70?.[_0x4054f5(0x28f,'sRg%')]?_0x133d70[_0x4054f5(0x2c8,'c[Yy')]+'京豆':'优惠券'));}if(_0x470b10['length']>0x0)console[_0x4054f5(0x27e,'R6YO')](_0x2d6029+_0x4054f5(0x2f0,'P%AO')+_0x470b10['join']('+')),_0x839a84['insert'](''+_0x470b10[_0x4054f5(0x29e,'3puB')]('+'));else{if(_0xefbc1f?.['rewardsInfo']?.['failRewards']?.[_0x4054f5(0x21f,'G^XY')]>0x0){let _0x3c2826=_0xefbc1f?.['rewardsInfo']?.[_0x4054f5(0x24c,'y($(')]?.[_0x4054f5(0x288,'mzZm')](_0x31fc22=>_0x31fc22[_0x4054f5(0x2b6,'Igi%')])?.[_0x4054f5(0x2d7,'S#9y')](',')||'';console['log'](_0x2d6029+_0x4054f5(0x25d,'5]32')+_0x3c2826);if(_0x3c2826?.[_0x4054f5(0x27d,'mn&y')](_0x4054f5(0x1fe,'R6YO'))){}}}}else _0xefbc1f['msg']?(console['log'](_0x2d6029+'失败：'+_0xefbc1f['msg']),(_0xefbc1f[_0x4054f5(0x212,'F4yF')]?.[_0x4054f5(0x2d3,'YE%f')]('项目未上线')||_0xefbc1f['msg']?.['includes'](_0x4054f5(0x27a,'[Erf')))&&($['runEnd']=!![])):console[_0x4054f5(0x27c,'K&TZ')]('❓'+_0x5f486f+'\x20'+JSON['stringify'](_0xefbc1f));break;}}catch(_0x3e20ae){console[_0x4054f5(0x2e7,'kpB7')]('❌\x20未能正确处理\x20'+_0x5f486f+_0x4054f5(0x225,'6TxE')+(_0x3e20ae[_0x4054f5(0x2ea,'eCIV')]||_0x3e20ae));}}async function _0xf5a087(_0x54c3af){const _0x3ddebf=_0x1c1961;if($[_0x3ddebf(0x2ee,'5]32')])return;let _0x5afe1b='',_0x3c9b6f=null,_0x32882c=null,_0x130b3c=_0x3ddebf(0x1f9,'mzZm');switch(_0x54c3af){case _0x3ddebf(0x2b7,'3puB'):_0x130b3c='POST',_0x5afe1b=_0x3ddebf(0x2b5,']#1b'),_0x32882c={'functionId':_0x3ddebf(0x22a,'27fX')},_0x3c9b6f={'sign':'11','appid':_0x3ddebf(0x2ff,'R6YO'),'t':Date[_0x3ddebf(0x240,'D#uZ')](),'body':JSON[_0x3ddebf(0x22f,'S#9y')]({'projectId':0x233e7d,'encryptProjectId':$[_0x3ddebf(0x269,'TxG1')],'assignmentId':0x23f044,'encryptAssignmentId':$[_0x3ddebf(0x209,'6TxE')]})};break;case _0x3ddebf(0x2eb,'v$w('):_0x5afe1b=_0x3ddebf(0x294,'S#9y'),_0x32882c={'functionId':_0x3ddebf(0x281,'5]32'),'appid':_0x3ddebf(0x28b,']#1b'),'client':_0x3ddebf(0x1f4,'27fX'),'clientVersion':'1.0.0','body':JSON[_0x3ddebf(0x283,'9iK&')]({'completionFlag':!![],'sourceCode':_0x3ddebf(0x279,'![yY'),'encryptProjectId':$[_0x3ddebf(0x259,'P%AO')],'encryptAssignmentId':$[_0x3ddebf(0x2d6,'xD2W')]})};break;default:console[_0x3ddebf(0x2df,'OaUk')](_0x3ddebf(0x2da,'iaNp')+_0x54c3af);return;}const _0x1725df={'url':_0x5afe1b,'method':_0x130b3c,'headers':{'Accept':_0x3ddebf(0x272,'27fX'),'Accept-Encoding':'gzip,\x20deflate,\x20br','Accept-Language':_0x3ddebf(0x23f,'3BKn'),'Connection':_0x3ddebf(0x290,'D#uZ'),'Content-Type':'application/x-www-form-urlencoded','Cookie':_0x48cc95,'J-E-H':_0x2ea857,'J-E-C':_0x19482c,'Origin':_0x3ddebf(0x2dc,'mzZm'),'Referer':_0x3ddebf(0x2db,']ZG]'),'User-Agent':_0x3c5ae1},'params':_0x32882c,'data':_0x3c9b6f,'timeout':0x7530};_0x130b3c===_0x3ddebf(0x216,'mn&y')&&(delete _0x1725df[_0x3ddebf(0x29f,'9iK&')],delete _0x1725df[_0x3ddebf(0x203,'D#uZ')][_0x3ddebf(0x310,']#1b')]);const _0x3bf84e=0x1;let _0x5e3c6f=0x0,_0x5805c5=null,_0x5ef461=![];while(_0x5e3c6f<_0x3bf84e){const _0x3c9e88=await common['request'](_0x1725df);if(!_0x3c9e88[_0x3ddebf(0x25b,'ys^6')]){_0x5805c5=_0x3ddebf(0x2a3,'yMsM')+_0x54c3af+_0x3ddebf(0x2a4,'!pYY')+_0x3c9e88[_0x3ddebf(0x235,'D#uZ')],_0x5e3c6f++;continue;}if(!_0x3c9e88['data']){_0x5805c5=_0x3ddebf(0x206,'K&TZ')+_0x54c3af+_0x3ddebf(0x322,'OaUk'),_0x5e3c6f++;continue;}_0x5d4061(_0x54c3af,_0x3c9e88[_0x3ddebf(0x25f,'ys^6')]),_0x5ef461=![];break;}_0x5e3c6f>=_0x3bf84e&&(console[_0x3ddebf(0x2fe,'!J@f')](_0x5805c5),_0x5ef461&&($['outFlag']=!![]));}}async function handleResponse(_0x904e70,_0x9c6ccb){const _0x4a154e=_0x769467;try{switch(_0x904e70){case _0x4a154e(0x31b,'Gcb#'):if(_0x9c6ccb['code']===0x0&&_0x9c6ccb['data'])$[_0x4a154e(0x32e,'H2gh')]=_0x9c6ccb[_0x4a154e(0x29f,'9iK&')];else _0x9c6ccb['message']?console[_0x4a154e(0x271,'mn&y')](_0x9c6ccb[_0x4a154e(0x20a,'H2gh')]):console['log'](JSON[_0x4a154e(0x29c,'!J@f')](_0x9c6ccb));break;}}catch(_0x4d2e72){console[_0x4a154e(0x254,'[Erf')](_0x4a154e(0x31c,'oE7S')+_0x904e70+'\x20请求响应\x20'+(_0x4d2e72[_0x4a154e(0x1fb,'mn&y')]||_0x4d2e72));}}async function sendRequest(_0x5283cf){const _0x166648=_0x769467;if($[_0x166648(0x26f,'D#uZ')]||$['outFlag'])return;let _0x34f11a='',_0x19b647=null,_0x4d3217=null,_0x1f46b6=_0x166648(0x297,'sRg%'),_0x39b1b2={};switch(_0x5283cf){case _0x166648(0x311,'Igi%'):_0x34f11a=_0x166648(0x202,'3BKn'),_0x39b1b2={'body':{'api-version':_0x166648(0x246,'s!Cd')}},_0x4d3217={'functionId':_0x166648(0x24f,'xD2W')},_0x19b647='lmt=0&body={\x22api-version\x22:\x221.1.0\x22}';break;default:console[_0x166648(0x327,'xjpZ')](_0x166648(0x221,'YE%f')+_0x5283cf);return;}const _0x1f35ce={'url':_0x34f11a,'method':_0x1f46b6,'headers':{'Accept':_0x166648(0x223,'kpB7'),'Accept-Encoding':_0x166648(0x2d4,'oE7S'),'Accept-Language':_0x166648(0x299,']#1b'),'Connection':'keep-alive','Content-Type':_0x166648(0x30c,'D#uZ'),'J-E-H':$[_0x166648(0x21d,'P%AO')],'J-E-C':$[_0x166648(0x266,'27fX')],'Host':'api.m.jd.com','Origin':_0x166648(0x319,'H2gh'),'Sec-Fetch-Dest':'empty','Sec-Fetch-Mode':_0x166648(0x295,'S#9y'),'Sec-Fetch-Site':_0x166648(0x219,'mn&y'),'User-Agent':$['UA']},'params':_0x4d3217,'data':_0x19b647,'timeout':0x7530};_0x1f46b6===_0x166648(0x2ed,'oE7S')&&(delete _0x1f35ce[_0x166648(0x251,'F4yF')],delete _0x1f35ce['headers']['Content-Type']);const _0x10621f=0x1;let _0x7a79b8=0x0,_0x332d88=null,_0x54d6ea=![];while(_0x7a79b8<_0x10621f){_0x7a79b8>0x0&&await $[_0x166648(0x25e,'ImQI')](0x3e8);const _0x3bc3fe=await common[_0x166648(0x2a0,'G^XY')](_0x1f35ce);if(!_0x3bc3fe['success']){_0x332d88=_0x166648(0x230,'!J@f')+_0x5283cf+'\x20请求失败\x20➜\x20'+_0x3bc3fe[_0x166648(0x2c3,'mzZm')],_0x7a79b8++;continue;}if(!_0x3bc3fe[_0x166648(0x284,'s!Cd')]){_0x332d88=_0x166648(0x210,'v$w(')+_0x5283cf+_0x166648(0x2c1,'kpB7'),_0x7a79b8++;continue;}await handleResponse(_0x5283cf,_0x3bc3fe['data']),_0x54d6ea=![];break;}_0x7a79b8>=_0x10621f&&(console[_0x166648(0x232,'Gcb#')](_0x332d88),_0x54d6ea&&($['outFlag']=!![],$[_0x166648(0x2e8,'iaNp')]&&$[_0x166648(0x32b,'OaUk')]['fix'](_0x332d88)));}async function jsonurl(_0x16afdc){const _0x30dbf9=_0x769467,_0xd7a702=await common[_0x30dbf9(0x2cd,'oE7S')]({'url':_0x16afdc,'method':_0x30dbf9(0x23b,'D#uZ'),'headers':{'User-Agent':_0x30dbf9(0x253,'K&TZ')},'proxy':null,'debug':![],'timeout':0x7530}),_0x200adc=_0xd7a702['data'];return _0x200adc;}function random(_0x551273,_0x45ff96){const _0x13a2b2=_0x769467;return Math[_0x13a2b2(0x2f1,'mzZm')](Math[_0x13a2b2(0x245,'R6YO')]()*(_0x45ff96-_0x551273))+_0x551273;}async function redRainurl(_0x382efc){const _0x50a31d=_0x769467,_0x8cbb53={'url':_0x382efc,'method':'GET','headers':{'Cookie':cookiesArr[0x0],'User-Agent':$['UA']},'timeout':0x7530},_0x11daba=0x5;let _0x350a33=0x0,_0x45aa96=null,_0x4d4c36=![];while(_0x350a33<_0x11daba){_0x350a33>0x0&&await $['wait'](0x3e8);const _0x5b6583=await common['request'](_0x8cbb53);if(!_0x5b6583[_0x50a31d(0x2ae,'1WSM')]){_0x45aa96=''+_0x5b6583[_0x50a31d(0x2e9,'![l@')],_0x350a33++;_0x5b6583[_0x50a31d(0x2d8,'j6V[')]&&([0x193,0x1ed][_0x50a31d(0x1fa,'OaUk')](_0x5b6583[_0x50a31d(0x2a2,'2673')])&&(_0x4d4c36=!![]));continue;}if(!_0x5b6583[_0x50a31d(0x323,'Igi%')]){_0x45aa96='无响应数据',_0x350a33++;continue;}if(_0x5b6583['data'][_0x50a31d(0x248,'kpB7')](/(活动已经结束)/)&&_0x5b6583[_0x50a31d(0x2e3,'v$w(')][_0x50a31d(0x1f0,'yMsM')](/(活动已经结束)/)[0x1]){$[_0x50a31d(0x1ec,'Tmx$')]=!![],console['log'](_0x50a31d(0x2bc,'Al!A'));return;}let _0x53ad81=_0x5b6583[_0x50a31d(0x30f,'hk@R')]?.['match'](/__api_data__ *= *(\{.*?\});/);if(!_0x53ad81){_0x45aa96=_0x50a31d(0x1f8,'S#9y'),_0x350a33++;continue;}if(_0x53ad81){let _0x2c32a8=JSON[_0x50a31d(0x2b8,'TxG1')](_0x53ad81[0x1]);for(let _0x15ef6c of _0x2c32a8?.[_0x50a31d(0x1ed,'F4yF')]||[]){if(_0x15ef6c?.[_0x50a31d(0x1ef,'s!Cd')]?.[_0x50a31d(0x328,'![yY')]){let _0x2bdf37=JSON[_0x50a31d(0x270,'YE%f')](_0x15ef6c['boardParams'][_0x50a31d(0x1f5,'H2gh')]);if(_0x2bdf37?.[_0x50a31d(0x286,'oE7S')]&&_0x2bdf37?.[_0x50a31d(0x302,'v$w(')]){$[_0x50a31d(0x31e,'P%AO')]=_0x2bdf37,interaction[_0x50a31d(0x2fc,'j6V[')]($['interaction']);break;}}}if(!$[_0x50a31d(0x2bd,'D#uZ')]){let _0x4dc1fe=_0x2c32a8[_0x50a31d(0x28a,']ZG]')]?.[_0x50a31d(0x1f2,'eCIV')]||'{}';var _0x34c06f=JSON[_0x50a31d(0x205,'j6V[')](_0x4dc1fe);let _0xb4b90e='',_0x46cfe6='';_0x34c06f&&_0x34c06f['bottomText']&&(_0xb4b90e=_0x34c06f[_0x50a31d(0x2c9,'!J@f')]||'',_0x46cfe6=_0x34c06f[_0x50a31d(0x2a9,'![yY')]||'');if(!_0xb4b90e||!_0x46cfe6){console['log'](_0x50a31d(0x324,'!J@f')+_0x2c32a8['returnMsg']+'\x0a');break;}else{_0x45aa96=_0x50a31d(0x2b2,'1WSM')+_0xb4b90e+_0x50a31d(0x264,'mzZm')+_0x46cfe6+'\x0a',_0x350a33++;continue;}}}break;}_0x350a33>=_0x11daba&&(console['log'](_0x45aa96),_0x4d4c36&&($['outFlag']=!![]));}
// prettier-ignore
function Env(t,e){"undefined"!=typeof process&&JSON.stringify(process.env).indexOf("GITHUB")>-1&&process.exit(0);class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`🔔${this.name}, 开始!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),n={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(n,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)})):this.isQuanX()?(this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t))):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();s&&this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)}))}post(t,e=(()=>{})){if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.post(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method="POST",this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){this.initGotEnv(t);const{url:s,...i}=t;this.got.post(s,i).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)})}}time(t,e=null){const s=e?new Date(e):new Date;let i={"M+":s.getMonth()+1,"d+":s.getDate(),"H+":s.getHours(),"m+":s.getMinutes(),"s+":s.getSeconds(),"q+":Math.floor((s.getMonth()+3)/3),S:s.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(s.getFullYear()+"").substr(4-RegExp.$1.length)));for(let e in i)new RegExp("("+e+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?i[e]:("00"+i[e]).substr((""+i[e]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};if(this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r))),!this.isMuteLog){let t=["","==============📣系统通知📣=============="];t.push(e),s&&t.push(s),i&&t.push(i),console.log(t.join("\n")),this.logs=this.logs.concat(t)}}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`❗️${this.name}, 错误!`,t.stack):this.log("",`❗️${this.name}, 错误!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`🔔${this.name}, 结束! 🕛 ${s} 秒`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}
