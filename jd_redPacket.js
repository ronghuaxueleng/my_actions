/*
京东全民开红包
Last Modified time: 2021-05-19 16:27:18
活动入口：京东APP首页-领券-锦鲤红包。[活动地址](https://happy.m.jd.com/babelDiy/zjyw/3ugedFa7yA6NhxLN5gw2L3PF9sQC/index.html)
未实现功能：领3张券功能

脚本兼容: QuantumultX, Surge, Loon, JSBox, Node.js
================QuantumultX==================
[task_local]
#京东全民开红包
1 1,2,23 * * * jd_redPacket.js, tag=京东全民开红包, img-url=https://raw.githubusercontent.com/58xinian/icon/master/jd_redPacket.png, enabled=true
===================Loon==============
[Script]
cron "1 1,2,23 * * *" script-path=jd_redPacket.js, tag=京东全民开红包
===============Surge===============
[Script]
京东全民开红包 = type=cron,cronexp="1 1,2,23 * * *",wake-system=1,timeout=3600,script-path=jd_redPacket.js
====================================小火箭=============================
京东全民开红包 = type=cron,script-path=jd_redPacket.js, cronexpr="1 1,2,23 * * *", timeout=3600, enable=true
 */
const $ = new Env('京东全民开红包');
const notify = $.isNode() ? require('./sendNotify') : '';
//Node.js用户请在jdCookie.js处填写京东ck;
const jdCookieNode = $.isNode() ? require('./jdCookie.js') : '';

//IOS等用户直接用NobyDa的jd cookie
let cookiesArr = [], cookie = '';
$.redPacketId = [];


var _0xode = 'jsjiami.com.v6',
  _0x2868 = [_0xode, 'K8Kaw7HCjFU=', 'PlzCpmfCvA==', 'wrJ6PHnDmw==', 'wrxawoA=', 'X33DliE=', 'KsOwwrJ2P+acseisguivjuawgeWlvOi0kA3igKDvu6vig6TvuZo=', 'IMKCw50=', 'DcKAw6nCjGk=', 'ccK6fWhn', 'J8K/w7LCsGw=', 'wqPCj8OCVxE=', 'OzY9DcK1', 'MMOaSkAl', 'w4bDnuWNi+i2oeWInOWIgee7peWMv8Ot5oiW5Yuc77y857mt5Y6TwoNqw5g=', 'c0/CksOhUA==', 'wrLDo8KcBh4=', 'DcOaSGYAwrPDm31bQsKM', 'cMOewokgAw==', 'w5YYwpYufA==', 'wrhTw7RhwrE=', 'BCHljLvotanli4LliqHnuoXljJAS5ae46Leb776p', 'esKywrZfLw==', 'w5wzwoEVesKV', 'w6YywpQDdA==', 'FcKvwp3Ci8Ov', 'wrMpw4jCiEQ=', '5Y+R6LWO5YqL5Yi157i+5Y+2w7jlpajotq/vvpw=', 'N8KXwrjCjsONwozDocOfCA==', 'wqrDpyhHwpvDjA==', 'ZMOmwrjCmCTCnMKDw6Jfb3kcwogDwpPClsKVGsOeR8OnH3gww5HDiE4=', 'OcOSfEvDtknDsw==', 'woXDujnDscOQ', 'BDYxK8KJ', 'AMOtZ8Kow5w=', 'wrzDr8KiBS0=', 'B8O+bUIV', 'H8KSw74TNw==', 'DsKnwpXCssOwwq7DmsOmMCxdewk=', 'w4zDjcOEdjkxC8KJw7EwJcKyBA==', 'w7x3EVcACQ97TcKF', 'w7taYhQ=', 'OcOSfHvDvlDDtw==', 'Wn0IVUQ=', 'AMKOw4AWLg==', 'w5ddQBQx', 'VcKKwqltFA==', 'wpDChD1AQw==', 'F8OiOQEHw4w=', 'w6LClAZEw44=', 'wp7Dp8KWHD/DoA==', 'DVPCiHfCgQ==', 'eEvCrsOQeQ==', 'ekolckA=', 'wpJvJn3Dpg==', 'wogow6LCgzZe', 'bMOTwrQ/Ag==', 'wrPCoSB/Zg==', 'eCpWw5PDnw==', 'PcOKZsKLw4s=', 'J8K9w4zCiWk=', 'wprCiRxF', 'albCssOb', 'SV7CvEok', 'wrVbwpE=', 'wppxwrgzwoV8TcOp', 'wrd4EkTDsw==', 'wqFOw5vDucOz', 'w5pQJmwxLyFYeg==', 'MXnCpw==', 'LcKNwq7CgsObwqTDrg==', 'EMO2SnHDrg==', 'eTdxw7c=', 'wpRtwoEvwqk=', 'FcOxNwIw', 'H8OPJzEA', 'w4TCiDZ7w6U=', 'wpgVN1IN', 'd2NXw4DDqg==', 'wpHDqcKdNSjDtw==', 'UF8fTGZDw5fCu8Ob', 'JsKGw4jCm2M=', 'IcOJBTo1', 'McOSw4wGMlDDijvCgcOcZ3rDuCVt', 'chbCoMOQwqcjw5MZwphrPsO3wrpwFg==', 'RgPCpMKiHcK5w69AVhjCjMOeZcKZw70=', 'woPCiRZDWBw=', 'R0IeRmdRw5DCqQ==', 'wo3Dp8KZGz/DscKxw7dV', 'wrsww67Cvl/DvBcQ', 'Sl/CtsKiBsKlw7dd', 'CDU8BcKhw41D', 'OsOWfH4=', 'csOubsKQwrA=', 'YmUHXF8=', 'wpJrG3PDrg==', 'w4XClBtow78=', 'wp7Dp8KUOD/DqcKS', 'SEfCnMKNLw==', 'wr7DtMKfNCI=', 'M8KawrLCpcO7', '5Yqz5Yq45b+D5bqL77+J', 'wr3Cj8OdQ8Kww4TDusKgwpQ=', 'PMOECgwgw7w=', 'w53CnQZEw4bCplLCoMOyC8Kgw6kkLF/CgSzCmjHCpBdUZMOzwpnClALCiULCvQfCpcOlRMKMKMOPUxMyw4rDi8Klwp9vw7U8dsK+YcORw75VMiRJwqLCvMK4UjTCpsOgYsK3McO7wokrRsOqwpPDssKWBMKTwr3DgsK0wrxjUcK2w5XCj8OBcsOlwo82CcOVwrjCuHxyZxXDsihLWkLCmMKQwrpTR8KWdMKNaMKIW1PDicOwwp3DviF/wrdZw4vCvx44PAkbInPDisOj', 'w7HCghZaw4jCuGHDq8O2G8Kow7Q=', 'WcOTwrkpNcKsF8Otw47DgMOXUA==', 'OU/Ct3rCvA==', 'eMKBwqBSPw==', 'wojDt2PDosKFOGIOw7V2EcKDOjx/wppLwofDqsKkw5bCmz/CgWbDtnnDvcKewqfCtzZZw4XCmMOoA8Kdw73CqMOSYcK5w51Aw4oMw4fDq8K/LxZ3NXvDhcOmwqrDkzdjwqVyTBTDqlTCjCvCllDCkMKaw43Cu8KSTjPChcO3wrg4w4fCiCrCoVfChA7DncKdKmPDh3bDjcKdwojCkAnDp8KowpXDv8KxflDChMKIJ33Ct8OYYsOwNi3DkcOsOmHDisOVwqfDgQXCkhDDl8Oyw7jCr8OtSg==', 'w6Igw5XCnTA=', 'LcOaAg==', 'LsKGw4QR', 'Q3nDiyvClC7Dm8KMYDEASQ==', 'wr5NUDs=', 'PsKIw57CrmXDtVvCjsOLw5kE', 'a0jCp8O3e0zDvsK8Y27ChHQ=', 'ZlrCqVMI', 'C0zCl2gawqgow5UrWcK2K8Oww63CoyNE', 'OsO3wqHDhiDDlsOUw6wVU3sB', 'OsKwYsKPwrMhw5rDrMOmwpQRAsO6', 'w7jCqTZr', 'NMOTaW/Drx/DvyxeOcO8SjgnO8Kzw6TCoXhxwpPDtQlYQsKQw5NIwpBFwprDssOcKMOtw6RbEsKKw7PDlsKKwrrDlSgjH8KRw6kaeR3DnMK8w6Uiw5XCoUPCtsKDcWjDhkZMGHEcGELCscKswrHCux/DlHEPwrXDqcOWIBLCrsODNsOCwoJIX8KoGV7CmChyw6bDvi8ow5gFw71CLAI1w5/DnyzCm8KgwqzDocOzwovDtMOnw6dcWcKofcKOwqoEesKGw6fDuhYkw71/EMOhw5INKSZYw7zCn8OhwobCrXpRbE7CsEMpwr/DgMOywr/DvBU=', 'acOPwp8uDw==', 'UU4eUGRQ', 'dg4cEhU=', 'FsOmamjDkQ==', 'wpfDkivDoMK1', 'DQIdO8Kt', 'wpPCqh1UVw==', 'DA7DmjRh', 'DcOHRlIW', 'WjgVCMKgwpU=', 'w4HDsnPDpcKAdSoYwqcqRMOUYHNwwpMHw5HDpcO1w5nCnGrDg2zDpTbDrMKGwrvCszQIwqDCm8OqEcKGw7PCq8KcfcKkwo1Lw4xIwpHCqsOhOxJ0YSvChMK7w77CiX0qwrBwCULCsQHDhyXClkTCkMKfw5/CscOFEX7DnMKxw7s0w4bCnSnCpErDkg7CmcOKK3fDhX3CmsKZw43DlAvDosKrw5TCu8KpfAHCkQ==', 'B1jCt1HCug==', 'wrVUw5d2wrc=', 'csO5w7vCrDM=', 'wqRvw4jDo8OWw49Ke8OfYsOjF8O3aEzCpzLDpMKjwr13wpnDok1ZasK7w7h0w7ETM8Kjw4/DvDTCgcOhw5nDkllEw41Ow6Nw', 'PEHCrsOXwqp3', 'dGl1w6LDvg==', 'Ojptw6oAwqDCo8Odb8KXLyXDuA/DhcKKw7LDt8KPK1smw5pZwpUWTsKWHMO/w7Ixw6jDkcKlw6NCwqQmJsKDwoIxwphmw6LCqkvCkUjCicKbUTZceUhjw6UOD8KcbcO5UsKDf3XCjsOrG3LDksO0RMKzW8Klw4zDtW/CncKndMOzKHvCrsKFwrXDiiLDv8K8MsKNOcOdwqxkw4A1VcKWGSfDvsK9', 'w6dyw47Chx3Dj3DCpyVnw5MjHCTDnw==', 'dsKpwptpJA==', 'wovDlnHDocKy', 'HlPCiXlEw6w/', 'dsOtwrs0DA==', 'CcO5RH7Dqg==', 'w4o3woYB', 'wo/DtVfDucKq', 'UCNHw6bDoA==', 'BETCr214', 'w57CiA1Nw5PCvg==', 'woXDqGLDtcOZ', 'cwVCw6fDmg==', 'TwZCw6LDmD/CoMKCdQ==', 'wrjCmsOWwqHDmQ==', 'T2bCuV0m', 'fhc8Cjo=', 'WHHCkMKlIA==', 'N8OqYMKQw48ZJMKkTsOiBWMhwotEUAx6wrXDohRvFsKIFEjDj8KwEhBWKMOA', 'w5vCni1Fw4PCsw==', 'e8KvwqI=', 'w4UDw7DCsTrDo1TCkRBZw58DLA==', 'wpUdw4LCiGPDjCs7w6lowqIvw4A=', 'McOjwofChDs=', 'BcO4KBsNw49Xw5jDoxI=', 'fUbCtcOXwrI+w4Q=', 'W8KLUVZB', 'PsOcSEYv', 'G8KCw5DCl2s=', 'aULCpMOs', 'wr7CscOpwqPDmcOu', 'cHo6YGY=', 'UcOTwpweKw==', 'wp7ClsOEQsKc', 'LDQeJMKD', '5Lm85Lip6aWx6aCC54G55YeF4oCE6aCo5Ymc4oCB6YCtw7hhw7rkuq7li7DChw==', 'Pm3Cg3bCkw==', 'wrxawoAywrJM', 'EsK2wqzCtsOk', 'PCLCsHHChsO1wo7DsMO5Y8OYw6LDlMKfWg==', 'wrV4ClY=', 'ECnljJDot4Tlibrli5HnuIfljbXDjOaIguWLqO++g+e5vOWMkCcyfw==', 'WT5Ww64H', 'ZMOcw5zCly0=', 'w4N7UwUTworDlcK6djnCpA==', 'wodDw6F/', 'w7fCnC1Hw4Q=', 'wpDCh8O1dR0AP8Ktw4I8Dw==', 'wrctw6nCrUPCs1ZLw4tLwolPw77Ds003IDkUw5LDjsKtMjrCkws1wq7Cm05Dw548w7NRw6ltw7NVTMOVNyDDsmfDgA3CocO/w7JJfMOcFMO3woLCsUzDn8KNNsOMwooiw5JiO2tQw6rCpzkxJSwnwrBs', 'fMOjw7PCniM=', 'eVNrw6XDrg==', 'RRdGw4jDuw==', 'Q0bCqMOmwrs=', 'woHDuS7DoMKb', 'wpXDhj5WwqU=', 'wp9Sw7DDssOk', 'QsOZQMKZwo8=', 'wrhqMFjDsiA=', 'f03Ctw==', 'RMKXwqx2JMKbwrhgHAV6fkg=', 'w71jC1UNBxBnXMKBwofDmsO4', 'wo3DuSrDssKh', 'w7QwwpsHZQ==', 'w4FQIHUsBz5bccKZwrzDvMOc', 'CVjCiA==', 'wrPDgFnDnMK2B0p5w4BaM8K/DA==', 'HC7Dhw9E', 'woLDuys=', 'TsO7wpMJCMKNDMORw7/DpMO9cMKt', 'f8KywqcMwrTDuA==', 'fkjCow==', 'esKKwrt1Jw==', 'wrvCjStzZQ==', 'RMKuwpIWwpQ=', 'w7bDtMObwobDvOadv+iupeivjeayj+Wkt+i1pgbig7Pvupnig7bvuKE=', 'wpLCg8OjVhk=', 'VMOUwpgXIw==', 'IsKMw5fCmw==', 'w6V5w5zCjXnmnazorpvorpPms6rlpJ7ot4JB4oKo77qP4oCV77md', '6aKg5Y2a5LmO5YmM772+', 'IcKmw7zCkHc=', 'fcKbwrVIBQ==', 'wrZDQx88w5g=', 'wobDpTTCpsKAwofDoMOZw7rDjiNi', 'wpzDtsKKHDPDpsKDw7ZRRig9dcKFw5Euw7HDuMK+WiZTByRnTVvCiMOHFjVINA==', 'w43CqCw=', 'w4YiwoYQZcObwqVSXD4uOcOeSsObw6NvAMKGH0JGc8KeFcKcw5bCiSbCicO/eMKOwpFLaRZ0B8K6RcOTO8Oaw7MLw7sqTCTDj8OkwrNwMTAcwrjDpsOiVsOLwph8wrgAZcKZTjbDpGjDlsK2cE0=', 'BCEYNR0AAMOawqhqw53DuSA9XMKPNHrCshJWw6jDiWotEsKO', 'UGrCmMO+Zw==', 'QnfCn8KjPA==', 'MDzDhQxL', 'wo/Ds3LDvMKXcj0Pw7dzDMKcIXt+w5EEw5DCpcOiwovCkA==', 'wrVawqgmwoY=', 'wppaw719wo8=', 'wr4yw4XCp3g=', 'VQF+w6TDkj0=', 'wpBoew8dw69WOkPDjBHDpMOn', 'IcKNwrw=', 'Nh4lOcKKw611N3hubHTCow==', 'Wz5Hw47Dmg==', 'KsOsaWQ+wpHDt11hXw==', 'wrg8w6nCuVHDvRg=', 'MMO7asK3w60=', 'e1jDrgU=', 'T8O/w7vCggDDqQ==', 'w4UzwosT', 'GcOQXnMAwrPDmA==', 'wpLCl8OiTQ==', 'w4s4woQ=', 'XsObaMKYwrMxw5DDqg==', 'wp8jw6c=', 'UMO4wpMdH8KAAcOP', 'ei50w7AB', 'wqwtw6/CtF7DrhACw5E=', 'XWrClcO7woYI', 'M8OiecKI', 'aU7CnnoKTkY=', 'w45BIGE+PCk=', 'wr7DqcKVGzPDoMKow4YK', 'ecKkwqABwrLDosOT', 'Tkod', 'wrJ2EVzDvyA=', 'MMOzfMKIw4MI', 'VAZEw7vDhWLDpsOLbWhkw4bDmMOPSsKWwrvCnXpiesOXwqYP', '44CM5o6f56Si44KS6K6T5YeV6Iys5Yyz5Lu75Lqz6LSx5Y+q5LuASsOJwonDsMO7woRV55qS5o+i5L+V55SBwrccCsKMNMO355iT5Luz5LqA56+55Yuw6Iym5Y+n', 'wpoKMUcZZ8KSw6jDl8OhC8KRBMOgDyfCncKgwonDtMKgCkxcw4zDvzfDtxfDg8OVci/DgcKGwp7Cm37ClcOVwrLClcOD', 'w6QRwrV0', 'J8OWYWQP', 'wo7Dt8KrPBU=', 'wrJYUCp0woUrBmbDpXrDi8OdLBrClQ4GwoTDtRzClATDk3DCnMOSw446TA==', 'wqlrw7/DpcOS', 'JcKWwr7Cj8OMwpnDhcOAIgN5RzgJwoPCvg==', 'w7MgwohZDA==', 'wr18EFDDoi0=', 'cS5sw6AM', 'R1jCocKkEQ==', 'ecKjwr9JEcK9wo4=', 'fsK5wpBNOMK1wo1c', 'N8Oowq8=', 'w4YxwpbCucKP5b+15aau44GE5LiS5LiO6Las5Y+O', 'c8OSwqg8Ig==', 'wr9wHVzDmCRowoU=', 'wq/DuwNtwo7Dl8K3', 'wpwfKFI=', '44Ki5oy956WZ44C7w4TCuU3DpcOxCuW0v+Wmt+aUjg==', '5LuV5LmY6LaP5Y6y', 'aVdGw4vDpA==', 'w7vorJvphqjmlobnmY/lvL3ojr7lj4d/PsKVwqLCqg4yQw9Pw5xtwoHCq8Oow6zDksOsVcOew4XDjRp5wqBYX8OBbGUHDcKQwqdZw4VZL0jDisObw5XCgMOJ', 'OsKIw4IOL1zltY7lpaPmlr3ChQM0', 'OUXCm2p4w6khw5U=', '5LmO5Lu+6La35Y+S', 'w5vCgwdPw58=', 'LOitu+mFuOaVneeYn+W/meiOl+WOi8O5wocDTQTDgQ==', 'w41NJ2YwPSZK', 'wpjDtsK5Bi0=', 'dsOZwqI+LsKq', 'VUpHw5zDksKSwrU8', 'wq7DqnTDucKI', 'AVfCinte', 'ecOdwqIRP8KuJA==', 'wr5+w5jDg8OEwpYOMcOKW8Ou', 'UBdew6zDgjA=', 'dsOTwqs=', 'w7BH6IW75bSH6LW85Y+d5Yap6YOF5Lm95Yui', 'wqJQwoMnwqFdc8OLEFVS', 'eMOwUA==', '6LSa5Y6FEA==', 'MsOpwqzCjTU=', 'wooqw7jCr37DqBQB', 'OuW8o+Wkiue5qsOz', 'w5LovqXooInlip7li7E=', 'wpRXw7xfwpDCssOX', 'wpYiw7Y=', '5q265pe35bS655eA5a+B5ouu5raF5Yig54GQ54i277yY6Laf5YSt5YuC5Yi9', 'N3bCv1rCl8Owwog=', 'dULCsA==', 'BCHmn6PlibfkvLLlipPlirzmnK/kvKjli5DnuKfkv6/og5ArwoJ7wo/Ds2Me6L6E6KK75YmB5Yml', 'w64yw5vCjAbDlEvCtwJ2w7s/HQjDg2w=', 'T0QK', 'wrh3GlLDrg==', 'w5o0w4rClifDh2vCqw==', 'wo7ovo3oor7li4nlio0=', 'PcOWZlfDukjDpg==', 'Vy8P', '5qyh5pWJ5beQ55aG5ayQ77+/6LSr5Yaj5Yij5Yid', 'L8KMw47CnWw=', 'VWTlppjotaAMwpjljLvlmKxIw4Y=', 'akTChHs=', 'wo/Djjpawr4=', 'STjCnTkfw4TCl8KwQ8Kaw40=', 'asKsfX5e', 'chECEh8=', 'QnTCncKJJg==', 'wrIUw6fChUM=', 'W0HCpMOqSw==', 'aVPCrcOawqc=', 'UsKFwppyGw==', 'F8OtbmXDrw==', 'WGnDnCnCtg==', 'JFPCmUrCow==', 'w4Btw5DCphPmn4/or47or5rmsq3lpbrotbEC4oGx77iR4oGv77qT', 'wovDqGE=', 'UB1X', 'EjsXCQ==', '6I6j5byI57qV5Y+Z77+s', 'HS3DmiZCw43DisK4', '5YWaJ8Od', 'UhZtw7IR', 'worCpMOiwozDnQ==', 'IMKXwrrCqMOC', 'wo/CucOYesK0', 'QWLCo8O9ag==', 'XkbCtsOawos=', 'dG/DkDLCoA==', 'ZMO+VMK3wpMHw5bDmMOM', 'cVnCo8OoegLCksOwVn/CnjEADmUlwpMywr/DrcOSwrnDkcKbTsK3wqLDr8K+w6nCvCvCmwF5wqUJHWDDm8Opw5oewpzClcKiw7/Dhm1LwoLCikx8w5fCnGpyHMK2Z8KLNcOywqDDnHhCNw7DiE4/WG83BHAYJkrDpMOOQ1rDmsO2w4jDuHjDgn5EwpJZwoU6wphVAsKZwogiw5DDvmUCNEdywqoTwoxFS8OOwpbClQjDgMKjw6EkBsOFc8OYDA49IQ9GN8K0bsKbwrAiwptKJ8OPw5o3w53DrMO6wpsAwo/DpMO4DUJ4wo/DoRIzDsONfEfCkxPCmR18wqrDvw/CtsOQWcOpw5ttcAJPZThSDcORw74gK0g6QcOTMyBCQMOuw77CugvCqU4BKlLDuMK/wqluPMOswo8mcC/Dthhdw44wVsKgwop6wrPDolVbYsOdw5rDv8OQWSvCjjZmCD/Cp8KEWDPDssKN', 'wrctw6nCrUPCs1ZLw4Aaw4kMwrrDqk18Lz8P', 'AMOhKCA+', 'wptAK0LDnA==', 'axh7w47Dmw==', 'W3jDmjTClmHDscK/XD8dR8O+wrLDglIPw7jCgsKxw4B0XcOoDBQhwrDCj8KZBsOBNzPCisOsScOeesKowooeEmYPw6PDr8O+cFYUc8Oew5pHwpPCrF5Hw5ksAcKRwpsTwoRSYMOuHsOUF8KpDsOVfGU8TTVhw71lw67Cpi3DnMK6Ew7CnsORwp/CjMOfw78iw6HCpMKsw6wpwrElwr5wOjgbw7nDucK1NFk/ODDCjWFqwoIcUcOPw7bDqyjDtMK2SX3Dpn81aVrCh2LDksOuHULDlsO5wr/DlsOmw4ZJUcOwe8OUQcOBEcKwVMORAMKbSgbDuFvCnjArw44eRzlZwpbCisKFR3I7PG1uw47DpMOTw41Xw5bDlcOLw6c7GUICw4plA8OkasO0bnPDqSILw6AEwrxkXFDCucObXiw0HXxlCzEUw7dAcQtVw6rCsyfDvD7CjcKDNRXCisKowossQ8Ksw73DvE7CiRB5woDDkld2w4jDosO2cMOqwoVpw5bCn8OpTwLCl1QPaF1bw43Cg0Ma', 'w7vCgjpNw60=', 'wqTCoMOuwqbDhsKgaBXCpTNtS8Ohw7zCrgDCm3zDjMKhXMKFwo3DpnoAGV8LI8ORw5cLKcKkw50Pw5IuKEXCusKsw73ClCbCqMOywp7DmsO2wq4dw7rCuMO/wq7DnsK1C8Ksw6fDl8KIw4jCg8KmCcOXDsKzAw==', 'TMOGRMK3wpQ=', 'Sy8bMQ==', 'LC48IcKa', 'wqIKA3op', 'wrvCuw99Yw==', 'RGLChMKoHQ==', 'wqrDqsKUNjg=', 'OHjCtg==', 'wpTDs3TDpcKKL3tGw6Y=', 'csKuwrM=', 'YErCh3s=', 'dFbCgVvorIXms57lp4notrzvvoHor63moZHmnannv6HotJXph6/oraM=', 'BAPCn3tCw6E6w5k5TMKeMcOxwqTDuw==', 'wqh6w4jDsg==', 'K8KCw5oENF3Djw==', 'GDMJD8K2w51JHA==', 'esKowqcGwrzDo8Ocw6U=', 'w4o/woEDecKUw6QJ', 'wqLDoTxhwobDi8K3Ww==', 'w4VxcTwKwozDmg==', 'wrIVw4XCtUY=', 'w5wLw4HCtgU=', 'U3VMw7zDsA==', 'CSXDmzZI', 'wphPw5RawpM=', 'wrTDrTx3woXDig==', 'w481woYpcg==', 'HlPCjW1aw7w=', 'OsOvc8KXw58+N8KxUMOJCjg4', 'bMKkwrA1wrLDtcOZw7QzQkY=', 'wp/CqhdTRQ==', 'wpd8WDELw5Q=', 'woEKN14EOsOUwqHDjA==', 'WcOKWV8Fw63CiCAXM8OQw7Mrwrx4w50WA0HCgy/Djz7CpRvDijhTC8O+esOUGjrCrMKRw5NNJWYdesKbw7vCtCMuwpsmfMOiFmg5R1bDgnzDq8KvJB1/IQjCtFYzasK1w5NAHMOTwqzCqCM5w6/CrFTDtcOBVxfDpsOyEcOZwrh+wqfDj3lDwq/CqUoQJSbCicOvw5vDgcOJBTo=', '5YuF5ZKIw4NeY+aIuOWmtOiMteW+r+OAuee7pOWMl+OAnO++sg==', 'ThdDw77Dmiw=', '5YmH5ZKxFRhY5omt5aem6I6v5b6444Cb5L+w5oCr5Yir44KL77yB', 'LMOSe2rDs1A=', 'XFPCtsK0BcKk', 'w4FsXi8XwqfDn8KyZw==', 'aMOZwr8sNsK2', 'wqrDvSxpwpDDusKrTsOFw7EDcl8=', 'a8OJwqMtO8KGMcO7w4M=', 'wqDCu8O9', '5Yik5ZGBIcKtXeaIoOWnjeiNkuWlpui2iu+8jeS7l+aUpRrmrofmiZvlp43mnqjkv7vltq3nlY7lr4vCoA==', 'wr94E1I=', 'w6oVwqYnwonmn5vor7rorZnmsKblpK3otJPDqeKBre+6huKBqe+5ng==', 'JcOuYsKVw4gdLMK2Xg==', 'wptZw7U=', 'QlnCog==', 'wok5w6PCnzRNRUvClg==', 'bnzCssOZWA==', 'ci51w6Y=', '6I+h5byN57qy5Y+57768', '5YW4SmI=', 'fkrCssOQwrw/w4sE', 'CFvCiWFT', 'wp4bw6XCuS8=', 'wroOw7TCpEA=', 'wrHDohVhwrw=', 'c0XDvSfClw==', 'w74Rwqt6MsOge8OIAsKjYm3CncOUw58Z', 'woTDujnDrQ==', 'bsKJRk1GBxdw', 'wrLDqTxpwqHDkcK0SsOiw5QFY3rClsKTwpc=', 'w5bCjBdL', 'LcKGw54OD1fDmj3Chg==', 'woXCjRZdfQZvfg==', 'WlfCtsKqIMK+w79G', 'wrZJSj06w4I=', 'WBFyw7/DkA==', 'wrBFaDQr', 'wp1fw555wpA=', 'w4I5wpU=', 'GCjDmyBMw5zDncKeF8KFwp3CmW0aw6lccMOWLQM=', 'SSUZMB0WWMOzwqNAw57DvQ==', 'OgPDocKTw7Nq', 'wpsQK1IYDsOJwqbDgcOxGQ==', 'wq5NVzEHw4RiCg==', 'wqfClcOBT8Ksw7DDp8KnwpnDhMOb', 'wqRcwpMbwqU=', 'XRnlt5DnuaHpoJrljKXlpo7li6g=', 'FsORQlMTwoPDhHlbfsKb', 'D8OxccKtw64=', 'bsOdwr8yDsK7JMOt', 'C8OeX101wqnDgH0=', 'wqczJHsM', 'aC5rw6gww6TDq8KA', 'bjcHNDM=', 'asOdwr4qPw==', 'wqrCmsObSw==', 'ZMOVw7PCjhU=', 'woPDtCnDqQ==', 'FSvDjg==', '5om357q85Yyy6I+i5b+l77+z', 'PcKGw5kE', 'wqN8DULDujE=', 'woLCmBdfWg9gdww=', 'C8OWWFoE', '44Cg5Lun5Yia', '5b255aaP6aCv5Y6T44C9', 'w51NIGk6', '44OB5LuO5YmG5oi35b2X57qc5Yyd5ae45YuV', 'OTw0NsKp', 'wpbCg8OiTigaJMKt', 'wqPCmsOSczM=', 'w5o3woELQsKYw7oY', '5b6x5aeV5YGt44GF', 'OMKEw47CkmE=', '44O25Lm85Yqn', 'Wl/CscKtDA==', 'DcKL5Yuy6IK05p245b6O5Y+B', 'w6RTVhkU', 'Ui4GIAY3ScORwrhAw4M=', 'w7vlv6zlpq7porDlj6Ljgbg=', 'UsOlw4HCgQE=', 'McOMGi0o', 'w4V/RD4mwpDDjsK6', 'asKgwqcOwofDr8OCw7Q=', 'UcO+w57Cujc=', 'woYfNlw+JMONwqI=', 'w6Yfwr8=', 'ZMK5wodKEw==', 'wpvCssO+c8Kk', 'wonDp8KJGw7DvMKSw6c=', 'wqLClMOI', '5b6u5aad6aG05Y6244CG', 'woNfw6Z7wpA=', '44Og5LiX5YuE5om25b6j57uK5YyM5aWH5YuE', 'AMOtWsKLw58=', 'wqs4w67CtmTDsAkB', 'JMOKHiIGw7dgw7g=', '44Om5LuN5Yiz', 'woTDhWzDqsKF', 'GMOGWH8X', 'bSI6CD8=', 'w6Yfwr9UCMO9', 'dFBWw4LDuQ==', 'HuiMqOWPoeS4p+WJl+WJpOijreW+r+W6me+/iw==', 'bsOdwr8yEsKtOcOtw7DDlcOVR8K9WAfCjg==', 'wr9vw53Dp8OQwoYhMcONcQ==', 'w41FIGQ=', 'NsKGwrnCksOPwp8=', 'wpDCh8OmRA4HJw==', 'UMKfR2th', 'SSUMNRUHVsOVwrh8w57DrxA=', 'wpXDonfDucKNOndhw6xhFcKfLBtmwpI=', 'w60uw5XCuwrDiWLCqw==', 'W0IMQ1E=', 'eMKBT3liGhY=', 'McOYHiAhw7pxw7PDmTU=', 'dsO0wrUGwqfDv8OEw7gzcmtfT8KUwps=', 'fsKJQUc=', 'Sx4MRnxNw4jCtMOWH3nCjsOmPsOd', 'CFfCink=', 'asKNQ2N5', 'wp4sw6XClw==', 'akbCt8O2wqU=', 'YWPCo8O5fg==', 'aFhRw73DucKdwrwXw7/Dq8KGw7ES', 'esKgwqAE', 'bCpuw4YS', 'wo/DtC7Dm8KIw4fDrsOzwqHDgC5qwqc=', 'aWPCgsONUQ==', 'w6sDwqt4CcO7d8ODJsKx', 'FG8bD8Ktw4FRAU1QYFTCk0rDuQ==', 'wobCg8OlRA==', 'w4LCozZ/w78=', 'wrdsw7zCvkTDoA8Nw5xWwq4Pw7DDpVE=', 'JMOYw5vCnXDDv0bCgsOLw6kpcAcJw6U=', 'wrksH1TDoixzwok+OsKLw7HCtcOzdQ==', 'w64Rwqxw', 'RMOlw4/CsgfDo0Q4', 'wr3CucOowpvDmQ==', 'wrgJN3oE', 'HkbCtn1k', 'KMKMwq3CosORwpk=', 'ZsKzwqRLNQ==', 'eMOlwpJFAsK9wpZQNzR8Q3jCgcKg', 'cRjCtsO7fVHDi8K2Q3bCvnEJRXc=', 'WBNEw6o=', 'CsOhAycB', 'csKJwq06LsKrIsOhw5TDjcO7TMKdXAs=', 'w5krVjYGwoDDiMK2dgnCiQLCgMKYw7k=', 'wqwOw4TCimA=', 'wqTDrAXDisK7', 'w70iw4vCtAjDhW3CqyVXw74=', 'bxhBw5Q0', 'WcKRbWRZ', 'aAxDw43DqMKawq4ww77Dv8Ktw7oEZUM=', 'w50Bwqs3Rg==', 'w5rCvQ9Ow7I=', '5Lm65aeW5Y6m772F5b2S566i', 'w6cmw5zCtwzDiGLCgCRzw7goCg==', '5Lu777yV5YiX5L2u', 'wql7fQ0e', 'IsOOHjw+w7o=', '5Li057mj5Y+R5b+g5b+T776a5bWA5p6Y', 'wpDCnxZfRxxofwEl', 'w4ZjwpMDYsKIw7wUQCYXJ8ODAcOO', 'fkLCtcOS', 'wpwgw4XCn2Y=', 'w6dQXgMZ', '5b+h5Yqg5Y6M5ous57iF5Y+T5LiI5pe+776C', 'wqhkwrYzwqQ=', 'IMOMd8Kuw6A=', 'wovDujo=', 'woAbNkIGKQ==', 'A8KWw6ItNQ==', 'anrCjsOPWQ==', 'TzcaFAc=', 'UMOawoUrFQ==', 'KMOQwpHCvx0=', 'wqBQwpEywrY=', 'wrjCo8OowofDhg==', 'HzsUJMK8w4RX', 'RcObw6/ClQg=', 'MMOzfMKQ', 'wpYow7/CkS5C', 'wqIOw7/CvDc=', 'wqZ4F0M=', 'wrgAwoYUwrRXbsOHEGV/wqc1w6wt', 'QsOtw4HCjA==', 'wqTDocO7wrXDgcOzMVPCuX8KSMKrw7PCsg==', 'P8OmwrzCiQ==', 'wqrCmsOCTsKm', 'wp4RIg==', 'wpXCs8KbEy7DrMKUw6tMUA98acONw54=', 'VX3DjyU=', 'XXPDnA==', 'AlfCk30=', 'IMOIdHZG5p6M6K6T6K+o5rOA5aSl6LaWwp7igLXvu4Dig6XvuZQ=', 'YMO+RMK3wr4cw6jDiMOxwrA4M8OtwofCqgQ=', 'L8O1blEt', 'K8OPa13DnA==', 'VjtGw6HDow==', 'QMK3woRENA==', 'O8Klw7sDLw==', 'woDDky7DoMKY', 'RsKTwqlxDg==', 'VjVAw5/DlQ==', 'wrbDpzx2', 'SnjCocOqcw==', 'wrE4w7DCuA==', 'wpPDqFXDuMKWIXxH', 'w6w1wqMjcA==', 'WmfCosKyOQ==', 'wodaJGDDrg==', 'wrrCncOjXcKZ', 'wq5KaC0J', 'VAZEw7vDhWLDpsOLbWhkw4bDmMOPSsKWwrvCnXpiesOVwroPw4vDg2XDrX4hw68IDl/CrxMYKVPChhjDgnAaf8Oe', 'w5vDpMKVFCPCuA==', 'esKUwr8Nwr0=', 'bztqw6oKw7rDssKDLg==', 'wo9RIWw7dXAGO8Opw7DCsMKUK2JVbMOqa8ObwplPwqvClMOhNcOiw77CiW3DrhPDqGpyWj8yHWUywoBkw7ASRRsbA8Omw7IqwqBMPhJ7EyVTQsKiw7pkQBXCk8K3w4LDoUErwqU6HxPCgCgLDjjDiWhpwqxQMsOAw47ClMKfVjRnbsKlwqluQy/CpDYlw6LDuMO0McKX', 'GmDCkkvCgQ==', 'wpXDoQpJwpk=', 'AFnCmQ==', 'HMKsw7TCvS3mnanor4Lorqrms5jlp5notYkG4oGR77qr4oKd77qU', 'wo7CjcO2', 'wqNBwpUewq5ZccOIHQ==', 'JnLComfCnsOo', 'wo7Cl8OyTgUnJsKpw4ExCsKSNg==', 'IsOOCRkzw617w7jDmQ9B', '5YqR5ZCqbStm5ou15aSe6I6J5b6U44OB57mq5Y6N44K977yX', 'fMKlwpBND8KQwpJYNAlUWX0=', '5Yii5ZKyw7V3Y+aJv+WkguiMv+W8t+OCpOS+quaDguWLgeOAqO+9qQ==', 'w4VRN24mDDpfdMKVwqnDvMON', 'wqjCvcOpwrXDmsOvKU4=', 'JMO/Y8KJw4oO', 'Yl7CiXUSflV0RcKNwp/Dh8K0', 'wodEw7ttwpDCkMOGfg4=', 'w5tBJ3AzPA==', 'w6YFwrt6A8OLZMOMJcKGZHzCuA==', 'Ul4CUWlgw5vCrsOB', 'VFTCgsOqwqA=', 'wpnClhNuTQ==', 'PzcMAcKt', 'dsKHUg==', '5Yie5ZKCwozDg13miLHlpbboj6rlvI3jg7jnu47ljKPjgbzvvr4=', 'SSUbMBgQ', 'wovDsmXDp8KdDGBBw6hWHcKYOQ==', 'DsOKQ0IA', 'w5o3woELXsKOw6cYZD45LMOjBcOCwqw=', 'w4F/RSYX', 'w57CggRvw5XCpA==', 'w5lwIFAO', 'w5zCjA5P', 'wpR2wrMwX+achOitqOiuiuaxtuWlrui1u2nigpvvuavigorvu4I=', 'w4VLMw==', 'KsKTw58MKF7DlTTCjA==', 'QnrDnjHCkA==', 'BsOeXsKPw7E=', 'woYRLlIE', 'w5wlw6nClyo=', 'w4RAYQ==', 'w6EUw4HCrB0=', 'SDQaLBoDVMOWwrU=', 'w5Q3wpA4cg==', 'P8KZw4jCl2rDsVnCjcOG', 'PMKCw4nCig==', 'w4dFOWA=', 'wo4iw4LCgihDQko=', 'wrkKEHwl', 'wqB0w5s=', 'NcOmwqXCjQ==', 'wrVnw67CtCDmnYPor6TorLnmsJPlpK/otr9t4oGE77mO4oKb77iQ', 'wqJtDF7DuCJswoYz', 'wr7CmsOdWcK7', 'wo11w4V9woM=', 'wrvChsOBYzM=', 'B8OTWFnDkA==', 'w580wqcVYg==', 'woscw4bCvgA=', 'fsOPWMKYwrg=', 'wq/CmsO5wozDnw==', 'NsKtw4MuNQ==', 'ZXd6w5zDkA==', 'M8OECSw=', 'w71jFXwb', 'McOKenIS', 'w4BPYB0o', 'CMOeRUI=', 'w7wzw47CkBzDlQ==', '6aKc5Y+15Li65YiS77+J', '5Luh5Yid5Yub6KCx5Lmg56q4eOaLg+WIiOi9r+WHl0PCiUnlh7bmoK/mn7t95pug5ZCm5a6U5Z+qBuS4peS7muiwhumnqOmisei+semhlOWLp+S4uOW/u+mDigrDr+emnifnmojkuKrliLYJ5aWf5a6I5Z+abOitgOaJn+WJu+WtnOaKqOWGgOi8iuijpeiGg+aekQ==', 'wpzCnwI=', 'wr5UwooS', '5omV5Ymp6LyP5YSAwrLDpsOC5YSU5qKH5p+uKOaYnuWQjeWuqeWfi8KC5Li75LmN6LG06aaI6aGN6L2E6aGW5Yqo5Lmz5b666YCKLUvnpZ3Dp+eavOS4t+WImsKQ5aa45a285Z2Qd+iuhuaKuOWLoeWvoOaJnOWGjOi8hOiihOiHoeacsQ==', 'c8OPwoI2PsKn', 'P8KIw5TCmkrDuUTCgsOZw6k=', 'OsOFFei0gOWPuA==', 'wrY3w7nCuEg=', 'HF8Q', 'wpQkw7LCnRRLQUg=', '5omz6KOT6ISt5p+w5YSM54+D5b6H5bqVwqvorKbmiJTli77ovbLlhoPCvxVQ5YaM5qCx5p6cfuaZgeWRr+Wvo+Wfo8KC5Luc5Lmy6LCe6aay6aGC6L6B6aOW5Yml5Luo5b+g6YKNfcOG56eEwq/nmKjkupDlibXDq+WntOWssuWeqMOP6K2z5oqQ5YuN5a+c5oqV5Yey6L2w6KKj6IeN5pyu', 'wqXCqyRPcA==', 'woV+w4Jwwo8=', 'OsKpw44/LA==', 'woQJeeWFsuS8jOS6s+WLqeivmOaDhsO8w6XCpQ==', 'wqlYVjMgw41tA3s=', 'PMOECg==', 'JMOhwpU1wprmnbPorZDorabmsIXlpLrotIcR4oCX77u+4oOf77uW', 'w4JqRTwcwo7Dl8K5ew==', 'wpYUw6XCvHQ=', 'C8OSworCgC4=', 'Sm1Qw7bDuw==', 'w74Ww4jCrgM=', 'wqfCo8Oqf8Ky', 'wqjDqhZWwoo=', 'bcKaU2JL', 'VSEFIA==', 'bULChMOse1HDk8K4', 'wp0kw4DCjz0=', 'I8KKwpvCnsOE', 'woJ1OEfDtA==', 'wp/CjQhT', 'wrBQwplBM+adquivtOitmuawkOWns+i0oCjig6Xvurrigpfvubc=', 'KcKGw58WIw==', 'wpPDp8KXFQ==', 'wovDnsKAHj4=', 'G8Odak4K', 'w5V8cS0Z', 'D8OeXkUE', 'wqh0w5LDtg==', '5Yut5Ym45b+I5buf7765', 'EDUdKcKrw5o=', 'wpjCnMO7wqLDuA==', 'wqNNSwAq', 'bTQaBhI=', 'wr12GQ==', 'wozCg8O8QA==', 'w50iwoAJeMKGw6MbTQ==', 'w4DCiBNFw5XComHDrcOMDsK+w60=', '5LmL5Lqb6aaQ6aO554Gd5Yaz4oCO6aKm5Yqn4oCP6YGnw51oJuS7qOWJnlQ=', 'BkHCnWjCtg==', 'w6Eww7rCgSo=', 'dSMxAwA=', 'MMKMwqHCgsON', 'wpbCjsOgZAY=', 'XHjCjg==', 'wqPCn8Ka', 'TgFDw73DlQ==', 'MMOUeMKew6I=', 'AFvCt3zCmA==', 'O8Kew6kjHg==', 'LsOYe2s=', 'Y1hOw4LDucKW', 'wqJ6w5HDtg==', 'ZMK/wqBSBMK9wo5e', 'QMKBwrdeEw==', 'wpNNGmfDuA==', 'TVM+cHk=', 'wonDpmvDqQ==', 'fsODwovCt8Oq5pyO6K2q6K2O5rCz5aWa6LS9FeKBoe+5j+KDm++7gg==', 'E8OQSw==', 'TBNCw7jDkw==', 'wpHCl8OyRhkQJw==', 'SlfCscKg', 'w6Mow4g=', '57mF5Y6Q6aOb5Y2e5ou95Yi2776G6IyK5b2D', 'PcKOw54GKUzDkiY=', 'MsOzY8Kfw4kPK8Kk', 'XMOxwpUSMQ==', 'wqLDqTtj', 'ZsO6RMKpwpoH', 'NMOCHio9w7t+w6k=', 'dkHCpVYs', 'wpNIfTEj', 'cCB/', 'dMKJWEM=', 'wp8Dw7N0woHCt8OReh9vwrMcw49HRw==', 'wo/CoDzDq8KZw4DDvMOUwqDDlAVhwrEZw6s=', 'wpR6wp8lwqw=', 'csOdVEV7AAd2w7Ztw7rDkG3CqsKh', 'w4UCw5nCvhg=', 'wpVWBmXDug==', 'DcOaW1cTwrTDgw==', 'wpnDr8KJEzXDsMKMw7Y=', 'cMO2RMK/wpkGw6vDmQ==', 'MMKMwozCjsObwo7DrA==', 'wqvCssOfQzY=', 'MMOiwrHCuTo=', 'OsO1d8K5w5QI', 'ZFBRw43Ds8KGwrYt', 'w6suw5zChwbDk2jCug==', 'w50iwpMUY8KSw44YRzw=', 'w5fCjBJtw54=', 'dlwBd28=', 'IX/Cl3RF', 'wrrCosOqwqDDug==', 'wqrDrHXDg8Kg', 'HcOVTnTDjQ==', 'dcKPWW98', 'dMOdw7rCugc=', 'woU2PUEL', 'wrXDnCNUwp0=', 'wodZw6Fj', 'w5U2w4PCtCc=', 'wqV2LUPDpCxrwoc=', 'D2DCn31i', 'OcOrwqDCvyQ=', 'O8OvDh0D', 'wrhRw5HDksOv', 'NMONwqzChCQ=', 'SsKxbEF1', 'acOIwr4wNMKlPcOuw5k=', 'esO+WsK5', 'wo4XwqIp6K+h5rKj5aa76LWY77y46K6o5qKe5p6s57+26LaL6YW76KyY', 'PsOKACw=', 'wr/CoMOowr/Dm8O9LlzCtA==', 'DDsIH8K8', 'w5V/QzQ=', 'aljCtMO7bEvDjg==', 'fMKGwrZTJw==', 'fQhWw68F', 'wrA7w6XCjDM=', 'wpHDqcKd', '57mV5Yyz6aCU5Y+B5oul5YmB776r6I6k5b+8', 'KMKMw47Cnw==', 'w64ZwqtyFcO6eMOZ', 'w7w1wpZhEQ==', 'K8KCw54QKk0=', 'MsOYbw==', 'woXoj7DljbnkuJ/li4jlirHooa7lv4zluanvvIQ=', 'Y8KkwoFPGMKzwolfOg==', 'ZsO6R8KzwoQHw4bDjsO1wrAsPQ==', 'QU/Co8OSfA==', 'woPCpsOYwqTDmg==', 'e0TCrcOHalfDmcK6', 'J2PCsGbCh8OvwrzDvMO+eQ==', 'wpBhHFHDpg==', 'wr1vGVnDpQ==', 'd0zCusO9', 'w6pLO242LTt0Rw==', 'amvCsMOLwoQ=', 'wp7CosOWwpvDuA==', 'bmgbS1g=', 'woHDvBlAwqE=', 'wqhJVy8iw54=', 'wrVAZyg6', 'w4tGIUkF', 'NsK1wrPCgcOh', 'wrBCw4RVwr0=', 'YzE6ABY=', 'woIRNkM=', 'TF88blo=', 'w4gDwr0vWQ==', 'WcK7wpxiLA==', 'wq7DrGnDiMK+', 'RHjDmTzCkw==', 'C8KRwojClcOM', 'UsOrw7zCvCE=', 'wo7CjcO2YA4R', 'VyNvw7kB', 'VsO9wp0gPQ==', 'wr1JUD4vw55l', 'fSUHEhg=', 'wppXw6I=', 'OMOeZGvDulY=', 'K8OmwrrCmyg=', 'akrCnn8=', 'w6NzVTIh', '5Yq35Yma57iH5p+577+J', 'w6VyfAE7', 'wqrDpELDocKG', 'MGfCmVTCuw==', 'QMOzfMKIwr8=', 'V0DChcOewrE=', 'wo7DllLDvcK2', 'wpI6w5nCsFI=', 'wpLCjQt+UQR5', 'NcKIw4o=', '5Yqn5Yqw5b+o5bim772x', 'w7wzw53CjQfDgW/CqCg=', 'wpfChsOzXQk=', 'woPCuhxQdg==', 'wpQsw7zCkw==', 'w53Cp0fDnMKt5p6t6K+w6K+X5rOd5aSj6LWZw4zigaTvuZrigK/vu7A=', 'alnCpcOxZ1/DlMK5Tg==', 'wovDujrDjcKfw5s=', 'Wgpbw6HDsA==', 'wqDDlxXDvsKf', '44O35o2X56S844Kd6KyT5YSA6I6l5Y+25Liz5LiO6LWa5Yyb5LmYNnzCkAXDncOuwovnmJDmjZjkvaXnlptOw69yw7bCrsKz55mS5Lu25Lmg566I5YuO6Iyv5Y60', 'wp/Dr8KALzfDtsKF', 'wqbCuRVibQ==', 'NMOzasKjw4UVIcK1', 'wrRcwpQUwq9LdsOa', 'w6ZABHcT', 'NsKcw5/Ckkw=', 'wo44w7/CmD9G', 'wpcpwqQ=', 'cSst', 'wp7CnMO9ZcKI', 'KMOzwrrCgSPCn8OXw65C', 'wrHDsMKrMwA=', 'wqXDqSNuwozDmw==', 'wrrClMO8XsKsw4rDvcKh', 'TX7Cu0gb', 'K8OowrvCnA==', 'K8OZZHgY', 'wprCpsOecAo=', 'L8O+ccKTw6c=', 'woJ1NmXDgw==', 'wrdfQw==', 'EcOeQVM=', 'VsOXbsKEwoE=', 'eVTClcODwro=', 'dkzCpg==', 'VhbCv0h/5p2t6K6u6K2H5rCP5aSE6Leyf+KCqe+7juKCv++5jg==', 'I8OfHyA8w6l5w7vDlA==', 'woAkFGE/', 'aMOmwp0PDw==', 'dMKxwodH', 'w4laeAAE', 'wqLCicOkYsKK', '5oiX57q75Y276I6A5byB772f', 'EsOvwp7Crx8=', 'VkzDjA7Clw==', 'wrM2w7o=', '6aG757ik5Y+/5aWB6LW/776f', 'w4HCmRFDw4nCsUvDqMOh', 'w6XCvyBOw54=', 'w5g+wpVBGA==', 'dcK+woU=', 'AFDCjkLCoMOTwqDDgMOSUsOew5/DpA==', 'w5kbwrMPWw==', 'TsKvanZdJilGw51Ew7zDrF0=', 'LcKew4nCl2PDuA==', 'EDUd', 'NsKCaXzDq03DoBVCL8ObQWd7bQ==', 'w6jCiBJEw6s=', 'w4VLM0AtOg==', 'aMKNRlNjHQ==', 'YsK1wpd2F8K3wotcNwRR', 'wr3Cj8OOXsKrw5DDl8Kjwp7Dkg==', 'worDvjdmwps=', 'dcOvXsOywptdw6/DicKPwrIwOw==', 'NsODfG/DrB7CuVNeN8OiX3oweMKpwqDDsW0jw4jCtg==', 'fMOrQ8KswoVJwqrCgsOJwrAvJsOQw4jCs0tKbcOfGhsDZsOZwqrCu3fCshxNTnUqN8K8VMK5fcKDccKXw4gtwrXDlg8rwrbCrcOswqMpHsKwGMOXw53CmzFiwqMgw4jChMOQVnzDuMOzw5g5wqfDkBXDgm0=', 'IcOvw6XCiyM=', 'VcOQwrYoEw==', 'fy50w68Bw7g=', 'e8KYRUpmChBrw6t7w53CkXHDosKuLBhcUynCjcOsZ8KCe8K5J8OfR8Oqw6/DrBM=', 'w4DCvCRhw4A=', 'w6Qiw4rClETDh2rCpyd7', 'jsyPjirPamGi.Gcoml.qDMkvq6KT=='];
(function (_0x154ddc, _0x402e8a, _0x4790d2) {
  var _0x2613d0 = function (_0x407a55, _0x17de10, _0x3c0bbf, _0x37a9fe, _0x41134c) {
    _0x17de10 = _0x17de10 >> 0x8, _0x41134c = 'po';
    var _0x47e52d = 'shift', _0x2cef52 = 'push';
    if (_0x17de10 < _0x407a55) {
      while (--_0x407a55) {
        _0x37a9fe = _0x154ddc[_0x47e52d]();
        if (_0x17de10 === _0x407a55) {
          _0x17de10 = _0x37a9fe;
          _0x3c0bbf = _0x154ddc[_0x41134c + 'p']();
        } else if (_0x17de10 && _0x3c0bbf['replace'](/[yPrPGGlqDMkqKT=]/g, '') === _0x17de10) {
          _0x154ddc[_0x2cef52](_0x37a9fe);
        }
      }
      _0x154ddc[_0x2cef52](_0x154ddc[_0x47e52d]());
    }
    return 0x8d638;
  };
  return _0x2613d0(++_0x402e8a, _0x4790d2) >> _0x402e8a ^ _0x4790d2;
}(_0x2868, 0xf4, 0xf400));
var _0x5c3d = function (_0x3202c0, _0xca92ee) {
  _0x3202c0 = ~~'0x'['concat'](_0x3202c0);
  var _0x547ba8 = _0x2868[_0x3202c0];
  if (_0x5c3d['NnsbZD'] === undefined) {
    (function () {
      var _0x53126e = typeof window !== 'undefined' ? window : typeof process === 'object' && typeof require === 'function' && typeof global === 'object' ? global : this;
      var _0x29e8c3 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
      _0x53126e['atob'] || (_0x53126e['atob'] = function (_0x55c50f) {
        var _0xac331e = String(_0x55c50f)['replace'](/=+$/, '');
        for (var _0x4926fa = 0x0, _0x265202, _0x1fc323, _0x10ba17 = 0x0, _0x5969c8 = ''; _0x1fc323 = _0xac331e['charAt'](_0x10ba17++); ~_0x1fc323 && (_0x265202 = _0x4926fa % 0x4 ? _0x265202 * 0x40 + _0x1fc323 : _0x1fc323, _0x4926fa++ % 0x4) ? _0x5969c8 += String['fromCharCode'](0xff & _0x265202 >> (-0x2 * _0x4926fa & 0x6)) : 0x0) {
          _0x1fc323 = _0x29e8c3['indexOf'](_0x1fc323);
        }
        return _0x5969c8;
      });
    }());
    var _0x31849a = function (_0x40bc29, _0xca92ee) {
      var _0x435b65 = [], _0x675213 = 0x0, _0xf1e236, _0x1cd4ad = '', _0x93eebb = '';
      _0x40bc29 = atob(_0x40bc29);
      for (var _0x4719a7 = 0x0, _0x5dad92 = _0x40bc29['length']; _0x4719a7 < _0x5dad92; _0x4719a7++) {
        _0x93eebb += '%' + ('00' + _0x40bc29['charCodeAt'](_0x4719a7)['toString'](0x10))['slice'](-0x2);
      }
      _0x40bc29 = decodeURIComponent(_0x93eebb);
      for (var _0x32cb2e = 0x0; _0x32cb2e < 0x100; _0x32cb2e++) {
        _0x435b65[_0x32cb2e] = _0x32cb2e;
      }
      for (_0x32cb2e = 0x0; _0x32cb2e < 0x100; _0x32cb2e++) {
        _0x675213 = (_0x675213 + _0x435b65[_0x32cb2e] + _0xca92ee['charCodeAt'](_0x32cb2e % _0xca92ee['length'])) % 0x100;
        _0xf1e236 = _0x435b65[_0x32cb2e];
        _0x435b65[_0x32cb2e] = _0x435b65[_0x675213];
        _0x435b65[_0x675213] = _0xf1e236;
      }
      _0x32cb2e = 0x0;
      _0x675213 = 0x0;
      for (var _0x57ae42 = 0x0; _0x57ae42 < _0x40bc29['length']; _0x57ae42++) {
        _0x32cb2e = (_0x32cb2e + 0x1) % 0x100;
        _0x675213 = (_0x675213 + _0x435b65[_0x32cb2e]) % 0x100;
        _0xf1e236 = _0x435b65[_0x32cb2e];
        _0x435b65[_0x32cb2e] = _0x435b65[_0x675213];
        _0x435b65[_0x675213] = _0xf1e236;
        _0x1cd4ad += String['fromCharCode'](_0x40bc29['charCodeAt'](_0x57ae42) ^ _0x435b65[(_0x435b65[_0x32cb2e] + _0x435b65[_0x675213]) % 0x100]);
      }
      return _0x1cd4ad;
    };
    _0x5c3d['vtykse'] = _0x31849a;
    _0x5c3d['WMPZzF'] = {};
    _0x5c3d['NnsbZD'] = !![];
  }
  var _0x7316f3 = _0x5c3d['WMPZzF'][_0x3202c0];
  if (_0x7316f3 === undefined) {
    if (_0x5c3d['mFDlWa'] === undefined) {
      _0x5c3d['mFDlWa'] = !![];
    }
    _0x547ba8 = _0x5c3d['vtykse'](_0x547ba8, _0xca92ee);
    _0x5c3d['WMPZzF'][_0x3202c0] = _0x547ba8;
  } else {
    _0x547ba8 = _0x7316f3;
  }
  return _0x547ba8;
};
if ($[_0x5c3d('0', ']G5@')]()) {
  Object[_0x5c3d('1', 's2t@')](jdCookieNode)[_0x5c3d('2', 'Vm#Z')](_0x331d2e => {
    cookiesArr[_0x5c3d('3', 'KKA&')](jdCookieNode[_0x331d2e]);
  });
  if (process[_0x5c3d('4', 's2t@')][_0x5c3d('5', 'J(]D')] && process[_0x5c3d('6', '7De#')][_0x5c3d('7', 'pqb(')] === _0x5c3d('8', 'P3j6')) console['log'] = () => {
  };
  if (JSON[_0x5c3d('9', 'o%Hs')](process['env'])['indexOf'](_0x5c3d('a', '8ye]')) > -0x1) process[_0x5c3d('b', 'piza')](0x0);
} else {
  cookiesArr = [$[_0x5c3d('c', 'RJ[D')]('CookieJD'), $[_0x5c3d('d', '#g!5')](_0x5c3d('e', 'sEZ[')), ...jsonParse($[_0x5c3d('f', 'qt1B')]('CookiesJD') || '[]')[_0x5c3d('10', 'inWv')](_0x571e32 => _0x571e32[_0x5c3d('11', 'qi!x')])][_0x5c3d('12', 'piza')](_0x279622 => !!_0x279622);
}
const JD_API_HOST = _0x5c3d('13', 'oaTe');
!(async () => {
  var _0x2b599c = {
    'XiMRn': _0x5c3d('14', 'P3j6'), 'tEAqv': _0x5c3d('15', '$[C2'), 'WDhXz': function (_0x29359d, _0x5b1802) {
      return _0x29359d(_0x5b1802);
    }, 'sqQLO': function (_0x554cb2, _0x134370) {
      return _0x554cb2(_0x134370);
    }, 'epCvw': function (_0xdf550) {
      return _0xdf550();
    }, 'yPPHv': function (_0x9a55e3, _0x3fc3fa) {
      return _0x9a55e3 < _0x3fc3fa;
    }, 'IREKc': function (_0x54b598) {
      return _0x54b598();
    }, 'Wxsdm': function (_0x426515, _0x1f6180) {
      return _0x426515 < _0x1f6180;
    }, 'duSwE': function (_0x4e533d, _0x36f384) {
      return _0x4e533d + _0x36f384;
    }, 'Imrul': function (_0x3662a4, _0x2a6f59) {
      return _0x3662a4(_0x2a6f59);
    }
  };
  if (!cookiesArr[0x0]) {
    $['msg']($[_0x5c3d('16', 'dECe')], _0x2b599c[_0x5c3d('17', 'Vm#Z')], _0x2b599c['tEAqv'], {'open-url': 'https://bean.m.jd.com/bean/signIndex.action'});
    return;
  }
  let _0x254699 = [],
    _0x49dd90 = [];
  if (!_0x254699) _0x254699 = [];
  $[_0x5c3d('1b', 'Ykax')] = [..._0x254699 || [], ..._0x49dd90 || []];
  for (let _0xd83cb6 = 0x0; _0x2b599c[_0x5c3d('1c', 'dECe')](_0xd83cb6, cookiesArr[_0x5c3d('1d', 'qi!x')]); _0xd83cb6++) {
    if (cookiesArr[_0xd83cb6]) {
      cookie = cookiesArr[_0xd83cb6];
      $['UserName'] = decodeURIComponent(cookie['match'](/pt_pin=([^; ]+)(?=;?)/) && cookie[_0x5c3d('1e', 'P3j6')](/pt_pin=([^; ]+)(?=;?)/)[0x1]);
      $[_0x5c3d('1f', '@YZ@')] = _0xd83cb6 + 0x1;
      $[_0x5c3d('20', 'QeIx')] = !![];
      $[_0x5c3d('21', 'QeIx')] = '';
      await TotalBean();
      console[_0x5c3d('22', 'I($f')](_0x5c3d('23', 'm0Q1') + $[_0x5c3d('24', 'pqb(')] + '】' + ($[_0x5c3d('25', 'qi!x')] || $['UserName']) + '****\x0a');
      if (!$[_0x5c3d('26', 'wc[h')]) {
        $['msg']($[_0x5c3d('27', '$[C2')], _0x5c3d('28', 'lR53'), _0x5c3d('29', 'GEp&') + $[_0x5c3d('2a', 'Jnb7')] + '\x20' + ($['nickName'] || $['UserName']) + _0x5c3d('2b', ']loZ'), {'open-url': 'https://bean.m.jd.com/bean/signIndex.action'});
        if ($['isNode']()) {
          await notify['sendNotify']($['name'] + _0x5c3d('2c', 's%P1') + $[_0x5c3d('2d', '$lyO')], _0x5c3d('2e', 'KKA&') + $[_0x5c3d('2f', 'lR53')] + '\x20' + $['UserName'] + _0x5c3d('30', ']G5@'));
        }
        continue;
      }
      $[_0x5c3d('31', '#g!5')] = 0x0;
      await _0x2b599c[_0x5c3d('32', 'sEZ[')](redPacket);
      await _0x2b599c['IREKc'](showMsg);
    }
  }
  for (let _0x108dc3 = 0x0; _0x2b599c['Wxsdm'](_0x108dc3, cookiesArr[_0x5c3d('33', 'pqb(')]); _0x108dc3++) {
    cookie = cookiesArr[_0x108dc3];
    $['index'] = _0x2b599c['duSwE'](_0x108dc3, 0x1);
    $[_0x5c3d('34', 'Jnb7')] = _0x2b599c[_0x5c3d('35', 'DI]G')](decodeURIComponent, cookie[_0x5c3d('36', '$lyO')](/pt_pin=([^; ]+)(?=;?)/) && cookie['match'](/pt_pin=([^; ]+)(?=;?)/)[0x1]);
    $[_0x5c3d('37', 'pqb(')] = !![];
    $['redPacketId'] = [...new Set($[_0x5c3d('38', 'm0Q1')])];
    if (cookiesArr && cookiesArr[_0x5c3d('39', 'oaTe')] > 0x2) {
      console[_0x5c3d('3a', 'pqb(')](_0x5c3d('3b', '7De#'));
      for (let _0x5c5ad1 of $[_0x5c3d('3c', 'f$@p')]) {
        console[_0x5c3d('3d', 'J(]D')](_0x5c3d('3e', 'oaTe') + $[_0x5c3d('3f', 'I($f')] + '\x20' + $[_0x5c3d('40', 'o%Hs')] + _0x5c3d('41', '8ye]') + _0x5c5ad1 + _0x5c3d('42', '$[C2'));
        await jinli_h5assist(_0x5c5ad1);
        if (!$[_0x5c3d('43', 'GR%&')]) {
          console[_0x5c3d('44', '7De#')](_0x5c3d('45', 'I($f'));
          break;
        }
      }
    }
    if ($[_0x5c3d('46', '1xX6')]) {
      console[_0x5c3d('47', 'o7vD')](_0x5c3d('48', 'RJ[D'));
      for (let _0x3f5aaf of $[_0x5c3d('49', 'afg[')] || []) {
        console[_0x5c3d('4a', 'inWv')]('\x0a账号\x20' + $[_0x5c3d('4b', 'qi!x')] + '\x20' + $[_0x5c3d('4c', 'afg[')] + '\x20开始给作者\x20' + _0x3f5aaf + _0x5c3d('4d', 's2t@'));
        await jinli_h5assist(_0x3f5aaf);
        if (!$[_0x5c3d('4e', 'p4$W')]) {
          console[_0x5c3d('4f', '4%Cg')](_0x5c3d('50', 'Jnb7'));
          break;
        }
      }
    }
  }
})()[_0x5c3d('51', 'NJq]')](_0x598b1d => {
  $['log']('', '❌\x20' + $['name'] + _0x5c3d('52', 'GEp&') + _0x598b1d + '!', '');
})['finally'](() => {
  $[_0x5c3d('53', 'RJ[D')]();
});

async function redPacket() {
  var _0x3d851d = {
    'IQjWk': function (_0x4e5540, _0x468579) {
      return _0x4e5540 !== _0x468579;
    }, 'mMzXs': _0x5c3d('54', 'wc[h'), 'BlsrB': _0x5c3d('55', 'GEp&'), 'BUiTm': function (_0x4e7cbd) {
      return _0x4e7cbd();
    }, 'yEhDu': function (_0x36015b) {
      return _0x36015b();
    }, 'yFsBV': function (_0x5dc7ce) {
      return _0x5dc7ce();
    }, 'IZfzp': function (_0x434552) {
      return _0x434552();
    }, 'iugmP': function (_0x357435, _0x15bf7f) {
      return _0x357435 === _0x15bf7f;
    }, 'EkOxt': _0x5c3d('56', 'SI!Z')
  };
  try {
    if (_0x3d851d[_0x5c3d('57', '4%Cg')](_0x5c3d('58', '@YZ@'), _0x3d851d[_0x5c3d('59', 'o%Hs')])) {
      var _0x15e94e = _0x3d851d[_0x5c3d('5a', 'o7vD')][_0x5c3d('5b', '8ye]')]('|'), _0x2d5c8a = 0x0;
      while (!![]) {
        switch (_0x15e94e[_0x2d5c8a++]) {
          case'0':
            await _0x3d851d[_0x5c3d('5c', 'QeIx')](doLuckDrawFun);
            continue;
          case'1':
            await _0x3d851d['yEhDu'](red);
            continue;
          case'2':
            await _0x3d851d['yFsBV'](doTask);
            continue;
          case'3':
            await h5activityIndex();
            continue;
          case'4':
            await taskHomePage();
            continue;
          case'5':
            await _0x3d851d[_0x5c3d('5d', 'p4$W')](h5activityIndex);
            continue;
        }
        break;
      }
    } else {
      resolve(data);
    }
  } catch (_0x4372c4) {
    if (_0x3d851d[_0x5c3d('5e', 'OghG')](_0x3d851d['EkOxt'], _0x5c3d('5f', '1xX6'))) {
      $['logErr'](_0x4372c4);
    } else {
      console['log']('\x0a' + $['name'] + _0x5c3d('60', '7De#'));
      console[_0x5c3d('61', 'DI]G')](JSON['stringify'](err));
    }
  }
}

function showMsg() {
  console[_0x5c3d('62', 'oaTe')]('\x0a\x0a' + $[_0x5c3d('63', 'XpI[')] + _0x5c3d('64', 'J(]D') + $[_0x5c3d('65', 'GEp&')] + _0x5c3d('66', 'o7vD'));
}

async function doLuckDrawFun() {
  var _0x1678ca = {
    'NYuqu': function (_0x4b1ea9, _0x7f2ae4) {
      return _0x4b1ea9 < _0x7f2ae4;
    }, 'FpxZh': function (_0x269f7c) {
      return _0x269f7c();
    }
  };
  for (let _0x44f666 = 0x0; _0x1678ca[_0x5c3d('67', 'P3j6')](_0x44f666, 0x3); _0x44f666++) {
    await _0x1678ca[_0x5c3d('68', 'm)@n')](doLuckDrawEntrance);
  }
}

function doLuckDrawEntrance() {
  var _0x2d8ba8 = {
    'PtFMC': _0x5c3d('69', 'Ykax'),
    'JWjKW': function (_0x54a1c9, _0x1e41cf) {
      return _0x54a1c9 !== _0x1e41cf;
    },
    'WlnFb': _0x5c3d('6a', 'fCgc'),
    'mLXhv': function (_0x4d7ec2, _0x4aab2e) {
      return _0x4d7ec2 === _0x4aab2e;
    },
    'SLnRl': _0x5c3d('6b', 'o7vD'),
    'oyFMf': _0x5c3d('6c', '8ye]'),
    'BCqMn': _0x5c3d('6d', 'OghG'),
    'dhJSE': 'esyld',
    'wQeAQ': function (_0x35e64a) {
      return _0x35e64a();
    },
    'PJEil': 'result',
    'JYUuJ': _0x5c3d('6e', 'J(]D'),
    'HXwNK': _0x5c3d('6f', 'o7vD'),
    'DHYQj': _0x5c3d('70', 'o%Hs'),
    'WjKEm': 'keep-alive',
    'EKCYp': 'application/json,\x20text/plain,\x20*/*',
    'IoYgJ': 'zh-cn',
    'XYskb': 'gzip,\x20deflate,\x20br'
  };
  return new Promise(_0x3d43ca => {
    var _0x55ffbc = {'JDPbl': _0x2d8ba8[_0x5c3d('71', ')4(@')], 'KIKDy': _0x2d8ba8[_0x5c3d('72', 'qi!x')]};
    const _0x441d8b = {
      'url': _0x2d8ba8['HXwNK'],
      'headers': {
        'Host': 'api.m.jd.com',
        'Origin': _0x2d8ba8['DHYQj'],
        'Cookie': cookie,
        'Content-Length': '0',
        'Connection': _0x2d8ba8[_0x5c3d('73', 'oaTe')],
        'Accept': _0x2d8ba8['EKCYp'],
        'User-Agent': _0x5c3d('74', 'OghG'),
        'Accept-Language': _0x2d8ba8[_0x5c3d('75', 'lR53')],
        'Referer': _0x5c3d('76', 'm)@n'),
        'Accept-Encoding': _0x2d8ba8[_0x5c3d('77', 'J(]D')]
      }
    };
    $[_0x5c3d('78', '4%Cg')](_0x441d8b, async (_0x446f01, _0x352ba9, _0x41b7f) => {
      if (_0x2d8ba8[_0x5c3d('79', 'XpI[')] === _0x2d8ba8[_0x5c3d('7a', '$[C2')]) {
        try {
          if (_0x446f01) {
            if (_0x2d8ba8[_0x5c3d('7b', ']loZ')](_0x5c3d('7c', '@YZ@'), _0x2d8ba8[_0x5c3d('7d', 'sEZ[')])) {
              console[_0x5c3d('7e', '1xX6')]('' + JSON[_0x5c3d('7f', 'DI]G')](_0x446f01));
              console[_0x5c3d('80', 'qt1B')]($[_0x5c3d('81', 'RJ[D')] + _0x5c3d('82', '1xX6'));
            } else {
              const _0x4ec2ee = $[_0x5c3d('83', '$lyO')][_0x5c3d('84', 'm0Q1')][_0x55ffbc['JDPbl']][_0x5c3d('85', 's%P1')] || [];
              for (let _0x9bcdf9 of _0x4ec2ee) {
                $[_0x5c3d('86', 'XpI[')] += _0x9bcdf9[_0x55ffbc['KIKDy']];
              }
              if ($[_0x5c3d('87', 'qt1B')]) $[_0x5c3d('88', 's2t@')] = $[_0x5c3d('89', 'wc[h')][_0x5c3d('8a', '96*f')](0x2);
            }
          } else {
            if (_0x41b7f) {
              if (_0x2d8ba8[_0x5c3d('8b', 'o%Hs')](_0x2d8ba8[_0x5c3d('8c', 'afg[')], _0x2d8ba8[_0x5c3d('8d', 'Jnb7')])) {
                _0x41b7f = JSON[_0x5c3d('8e', 'GEp&')](_0x41b7f);
                if (_0x2d8ba8['mLXhv'](_0x41b7f['code'], '0') && _0x41b7f['busiCode'] === '0') {
                  if (_0x2d8ba8[_0x5c3d('8f', 'GR%&')] !== _0x2d8ba8['BCqMn']) {
                    if (_0x41b7f[_0x5c3d('90', 'wc[h')]['luckyDrawData'][_0x5c3d('91', 's2t@')]) {
                      if (_0x41b7f[_0x5c3d('92', '$lyO')][_0x5c3d('93', 'piza')][_0x5c3d('94', 'qt1B')]) {
                        if (_0x2d8ba8['dhJSE'] === _0x5c3d('95', ']loZ')) {
                          url = 'https://api.m.jd.com/client.action?functionId=' + functionId + _0x5c3d('96', '96*f') + escape(JSON[_0x5c3d('97', '$[C2')](body)) + _0x5c3d('98', 'Vm#Z');
                        } else {
                          console[_0x5c3d('3a', 'pqb(')](_0x5c3d('99', 'sEZ[') + _0x41b7f[_0x5c3d('9a', 'oaTe')]['luckyDrawData']['quota'] + '元');
                        }
                      } else {
                        console['log'](_0x5c3d('9b', 'Vm#Z') + _0x41b7f[_0x5c3d('9c', 'p4$W')]['luckyDrawData']['discount'] + '元：' + _0x41b7f[_0x5c3d('9d', '@YZ@')]['luckyDrawData'][_0x5c3d('9e', '96*f')] + '，' + _0x41b7f[_0x5c3d('9f', 'pqb(')][_0x5c3d('a0', 'wc[h')][_0x5c3d('a1', 'pqb(')]);
                      }
                    } else {
                      console[_0x5c3d('a2', 'm)@n')](_0x5c3d('a3', 'P3j6'));
                    }
                  } else {
                    console['log']('\x0a' + $[_0x5c3d('a4', 'qi!x')] + _0x5c3d('a5', 'f$@p'));
                    console['log'](JSON[_0x5c3d('a6', 'piza')](_0x446f01));
                  }
                }
              } else {
                console[_0x5c3d('a7', 'GR%&')]('\x0a' + $['name'] + ':\x20API查询请求失败\x20‼️‼️');
                console[_0x5c3d('a8', '@YZ@')](JSON[_0x5c3d('a9', '7De#')](_0x446f01));
              }
            }
          }
        } catch (_0x46dfee) {
          $['logErr'](_0x46dfee, _0x352ba9);
        } finally {
          _0x2d8ba8[_0x5c3d('aa', 'o7vD')](_0x3d43ca);
        }
      } else {
        console[_0x5c3d('22', 'I($f')]('\x0a\x0a' + $[_0x5c3d('ab', 'P3j6')] + _0x5c3d('ac', 'piza') + $['discount'] + _0x5c3d('ad', '4%Cg'));
      }
    });
  });
}

async function doTask() {
  var _0x3b27d9 = {
    'BYFcq': function (_0x585d0c, _0x2f6147) {
      return _0x585d0c === _0x2f6147;
    }, 'wMOyt': 'biz_code', 'dHvqM': _0x5c3d('ae', '8ye]'), 'ebjCO': function (_0x340b23, _0x2227ce) {
      return _0x340b23 > _0x2227ce;
    }, 'dcBtf': function (_0x5a6316, _0x134112) {
      return _0x5a6316 !== _0x134112;
    }, 'jiLne': _0x5c3d('af', '$lyO'), 'YkaQH': function (_0xa77453, _0x3eea0a) {
      return _0xa77453(_0x3eea0a);
    }, 'UMaLf': function (_0x1ac51a, _0x175b3c) {
      return _0x1ac51a !== _0x175b3c;
    }, 'ZjWmx': function (_0x569396, _0x3c40aa) {
      return _0x569396 === _0x3c40aa;
    }, 'LUede': _0x5c3d('b0', '7De#'), 'UwoqG': _0x5c3d('b1', 'o%Hs'), 'gtfAT': function (_0x2896a0, _0xc4df41) {
      return _0x2896a0(_0xc4df41);
    }, 'EfNZp': function (_0x561911, _0x56651d) {
      return _0x561911(_0x56651d);
    }, 'AxCVO': function (_0x513aff, _0x17f1d7) {
      return _0x513aff === _0x17f1d7;
    }, 'cBjfa': function (_0x7fb95b) {
      return _0x7fb95b();
    }, 'agwdz': function (_0x3d2b5b, _0x223593) {
      return _0x3d2b5b(_0x223593);
    }, 'wrkWS': function (_0xd8d795, _0x2bb90d) {
      return _0xd8d795 !== _0x2bb90d;
    }, 'UIQYz': function (_0x41680a, _0x5516ec) {
      return _0x41680a(_0x5516ec);
    }, 'VwJwy': function (_0x424a48, _0x2fb958) {
      return _0x424a48(_0x2fb958);
    }, 'gytIv': _0x5c3d('b2', 'wc[h'), 'VbRMK': 'jslUq'
  };
  if ($['taskHomePageData'] && _0x3b27d9[_0x5c3d('b3', 'OghG')]($[_0x5c3d('b4', 'dECe')][_0x5c3d('b5', 'n@nG')], 0x0)) {
    $[_0x5c3d('b6', 'SI!Z')] = $[_0x5c3d('b7', 'wc[h')][_0x5c3d('b8', 'lR53')][_0x5c3d('9c', 'p4$W')][_0x5c3d('b9', 's%P1')];
    if ($[_0x5c3d('ba', ']loZ')] && _0x3b27d9['ebjCO']($[_0x5c3d('bb', '@YZ@')][_0x5c3d('bc', '(S7p')], 0x0)) {
      if (_0x3b27d9[_0x5c3d('bd', 'oaTe')](_0x3b27d9[_0x5c3d('be', '(S7p')], _0x3b27d9[_0x5c3d('bf', 'GR%&')])) {
        resolve(data);
      } else {
        console[_0x5c3d('c0', 's2t@')]('\x20\x20\x20\x20任务\x20\x20\x20\x20\x20状态\x20\x20红包是否领取');
        for (let _0x2c246a of $['taskInfo']) {
          console['log'](_0x2c246a['title']['slice'](-0x6) + '\x20\x20\x20' + (_0x2c246a[_0x5c3d('c1', 'GEp&')] ? _0x2c246a['alreadyReceivedCount'] : 0x0) + '/' + _0x2c246a[_0x5c3d('c2', '4%Cg')] + _0x5c3d('c3', '8ye]') + (_0x2c246a[_0x5c3d('c4', '$[C2')] === 0x4 ? '是' : '否'));
        }
        for (let _0x9c974d of $[_0x5c3d('c5', '(S7p')]) {
          if (_0x3b27d9['BYFcq'](_0x9c974d[_0x5c3d('c6', 'fCgc')], 0x4)) {
            console['log']('[' + _0x9c974d[_0x5c3d('c7', 'f$@p')] + _0x5c3d('c8', 'Jnb7'));
          } else if (_0x9c974d[_0x5c3d('c9', 'Vm#Z')] === 0x3) {
            await _0x3b27d9[_0x5c3d('ca', 'piza')](receiveTaskRedpacket, _0x9c974d[_0x5c3d('cb', 'pqb(')]);
          } else if (_0x9c974d['innerStatus'] === 0x2) {
            if (_0x3b27d9['dcBtf'](_0x9c974d[_0x5c3d('cc', 'Vm#Z')], 0x0) && _0x3b27d9[_0x5c3d('cd', '$[C2')](_0x9c974d[_0x5c3d('ce', 'P3j6')], 0x1)) {
              if (_0x3b27d9['ZjWmx'](_0x3b27d9['LUede'], _0x3b27d9[_0x5c3d('cf', '4%Cg')])) {
                data = JSON[_0x5c3d('d0', 'pqb(')](data);
                if (data && data[_0x5c3d('d1', 'fCgc')] && _0x3b27d9[_0x5c3d('d2', ']G5@')](data[_0x5c3d('d3', 'n@nG')][_0x3b27d9['wMOyt']], 0x0)) {
                  console[_0x5c3d('d4', 'GEp&')](_0x5c3d('d5', '96*f') + data[_0x5c3d('d6', 's%P1')][_0x5c3d('d7', 'qi!x')][_0x3b27d9['dHvqM']] + '元');
                } else {
                  console['log']('领红包失败：' + JSON[_0x5c3d('d8', ']loZ')](data));
                }
              } else {
                console['log']('开始做【' + _0x9c974d[_0x5c3d('d9', 'Vm#Z')] + _0x5c3d('da', 'OghG'));
                await _0x3b27d9['gtfAT'](active, _0x9c974d['taskType']);
                console['log'](_0x5c3d('db', 'GEp&') + _0x9c974d[_0x5c3d('dc', '#g!5')] + _0x5c3d('dd', 'f$@p'));
                await _0x3b27d9[_0x5c3d('de', 'XpI[')](receiveTaskRedpacket, _0x9c974d[_0x5c3d('df', 'KKA&')]);
              }
            } else if (_0x3b27d9[_0x5c3d('e0', 'KKA&')](_0x9c974d[_0x5c3d('e1', 's2t@')], 0x1)) {
              console[_0x5c3d('44', '7De#')](_0x5c3d('e2', '96*f') + _0x9c974d[_0x5c3d('e3', 'NJq]')] + _0x5c3d('e4', 'DI]G'));
              await _0x3b27d9['cBjfa'](doAppTask);
            } else {
              console[_0x5c3d('80', 'qt1B')]('[' + _0x9c974d[_0x5c3d('e5', '@YZ@')] + _0x5c3d('e6', ')4(@'));
            }
          } else if (_0x3b27d9[_0x5c3d('e7', '96*f')](_0x9c974d[_0x5c3d('e8', '4%Cg')], 0x4)) {
            console['log'](_0x5c3d('e9', ']loZ') + _0x9c974d[_0x5c3d('ea', ']G5@')] + '】任务');
            await _0x3b27d9[_0x5c3d('eb', ')4(@')](startTask, _0x9c974d[_0x5c3d('ec', '96*f')]);
            if (_0x3b27d9['wrkWS'](_0x9c974d[_0x5c3d('ed', 'qt1B')], 0x0) && _0x3b27d9[_0x5c3d('ee', ']G5@')](_0x9c974d[_0x5c3d('ef', '$[C2')], 0x1)) {
              console[_0x5c3d('f0', 'dECe')](_0x5c3d('e2', '96*f') + _0x9c974d[_0x5c3d('f1', 'QeIx')] + '】任务');
              await _0x3b27d9[_0x5c3d('f2', 'fCgc')](active, _0x9c974d[_0x5c3d('f3', 'sEZ[')]);
              console[_0x5c3d('f4', 'fCgc')](_0x5c3d('f5', 's2t@') + _0x9c974d[_0x5c3d('f6', 'GR%&')] + _0x5c3d('f7', ']loZ'));
              await _0x3b27d9[_0x5c3d('f8', 'piza')](receiveTaskRedpacket, _0x9c974d[_0x5c3d('f9', 'o%Hs')]);
            } else if (_0x9c974d[_0x5c3d('fa', ')4(@')] === 0x1) {
              console['log'](_0x5c3d('e2', '96*f') + _0x9c974d[_0x5c3d('d9', 'Vm#Z')] + _0x5c3d('fb', 'GR%&'));
              await _0x3b27d9[_0x5c3d('fc', 'DI]G')](doAppTask);
            } else {
              if (_0x3b27d9['AxCVO'](_0x3b27d9[_0x5c3d('fd', 'Vm#Z')], _0x3b27d9[_0x5c3d('fe', '4%Cg')])) {
                $[_0x5c3d('ff', 'dECe')](e, resp);
              } else {
                console['log']('[' + _0x9c974d[_0x5c3d('100', 'Jnb7')] + ']\x20功能未开发');
              }
            }
          }
        }
      }
    }
  } else {
    console['log'](_0x5c3d('101', 'J(]D') + JSON['stringify']($[_0x5c3d('102', 'pqb(')]) + '\x0a');
  }
}

async function red() {
  var _0xf8d4f2 = {
    'ZqOHs': _0x5c3d('103', 'm0Q1'), 'sWYWP': _0x5c3d('104', '#g!5'), 'pevEv': _0x5c3d('105', 'Ykax'), 'twrQs': 'status', 'JfIrO': function (_0x5b9dda, _0x8d031) {
      return _0x5b9dda === _0x8d031;
    }, 'xNtaw': _0x5c3d('106', 'KKA&'), 'pNUUX': 'assistants', 'qmrMl': function (_0x342aa2, _0xa867b5) {
      return _0x342aa2 !== _0xa867b5;
    }, 'rpHeR': _0x5c3d('107', 'SI!Z'), 'vcWmC': function (_0x2fedbc) {
      return _0x2fedbc();
    }, 'ZJnnS': function (_0x2d851e, _0x175f4d) {
      return _0x2d851e === _0x175f4d;
    }, 'CyXBV': _0x5c3d('108', '4%Cg'), 'hPldU': _0x5c3d('109', 'DI]G'), 'VNiVk': 'waitOpenTimes', 'xQQDd': function (_0x50d088, _0x1d7f5b) {
      return _0x50d088 > _0x1d7f5b;
    }, 'vVgRF': 'bBLKh', 'cWZxl': function (_0x52fde0, _0x28f34a) {
      return _0x52fde0 < _0x28f34a;
    }, 'XCnJm': function (_0x4890ce, _0x2ff254) {
      return _0x4890ce(_0x2ff254);
    }, 'eHsRq': _0x5c3d('10a', 'afg['), 'damdx': _0x5c3d('10b', 'inWv'), 'tSMtB': _0x5c3d('10c', 'SI!Z')
  };
  $['hasSendNumber'] = 0x0;
  $[_0x5c3d('10d', ')4(@')] = 0x0;
  if ($[_0x5c3d('10e', 'qt1B')] && $['h5activityIndex'][_0x5c3d('10f', 'SI!Z')] && $[_0x5c3d('110', 'inWv')][_0x5c3d('111', '$lyO')][_0xf8d4f2[_0x5c3d('112', 'SI!Z')]]) {
    const _0x519517 = $['h5activityIndex'][_0x5c3d('113', '7De#')][_0xf8d4f2[_0x5c3d('114', '8ye]')]][_0xf8d4f2[_0x5c3d('115', 'o7vD')]] || [];
    $[_0x5c3d('116', 'Jnb7')] = $['h5activityIndex'][_0x5c3d('117', 'qt1B')][_0xf8d4f2[_0x5c3d('118', 'P3j6')]][_0x5c3d('119', 'n@nG')];
    if ($['h5activityIndex']['data']['result'][_0xf8d4f2[_0x5c3d('11a', 'o7vD')]]) {
      $[_0x5c3d('11b', 'dECe')] = $[_0x5c3d('11c', 'XpI[')][_0x5c3d('11d', 'KKA&')][_0xf8d4f2['pevEv']][_0xf8d4f2[_0x5c3d('11e', 'lR53')]]['length'] || 0x0;
    }
  }
  if ($[_0x5c3d('11f', 'o%Hs')] && $[_0x5c3d('120', 'NJq]')]['data'] && _0xf8d4f2['JfIrO']($[_0x5c3d('121', 'qi!x')][_0x5c3d('122', 'dECe')][_0x5c3d('123', ']G5@')], 0x2712)) {
    if (_0xf8d4f2[_0x5c3d('124', 'm)@n')](_0x5c3d('125', '$[C2'), _0xf8d4f2[_0x5c3d('126', '$lyO')])) {
      $[_0x5c3d('127', 'Ykax')](e);
    } else {
      await _0xf8d4f2[_0x5c3d('128', 'QeIx')](h5launch);
    }
  } else if ($[_0x5c3d('129', 'QeIx')] && $[_0x5c3d('12a', 'o7vD')][_0x5c3d('12b', 'oaTe')] && _0xf8d4f2[_0x5c3d('12c', ')4(@')]($[_0x5c3d('12d', 'pqb(')]['data']['biz_code'], 0x4e21)) {
    const _0xdfe9b5 = $[_0x5c3d('12e', '96*f')][_0xf8d4f2[_0x5c3d('12f', 'o%Hs')]][_0xf8d4f2['pevEv']][_0xf8d4f2[_0x5c3d('130', 'n@nG')]]['id'];
    if (_0xdfe9b5) $[_0x5c3d('131', 'afg[')]['push'](_0xdfe9b5);
    console['log']('\x0a\x0a当前待拆红包ID:' + $['h5activityIndex'][_0xf8d4f2[_0x5c3d('132', 'P3j6')]][_0xf8d4f2['pevEv']][_0xf8d4f2[_0x5c3d('133', 'SI!Z')]]['id'] + '，进度：再邀' + $[_0x5c3d('134', 'Jnb7')][_0xf8d4f2[_0x5c3d('135', 's2t@')]][_0xf8d4f2['pevEv']][_0xf8d4f2[_0x5c3d('136', 'lR53')]] + _0x5c3d('137', ')4(@') + ($['hasSendNumber'] + 0x1) + '个红包。当前已拆红包：' + $[_0x5c3d('138', 'afg[')] + _0x5c3d('139', 'qi!x') + $['h5activityIndex'][_0xf8d4f2[_0x5c3d('13a', '(S7p')]][_0x5c3d('13b', ')4(@')]['remainRedpacketNumber'] + _0x5c3d('13c', 'qt1B') + $[_0x5c3d('13d', ']loZ')] + '好友助力\x0a\x0a');
    const _0x3aaf94 = $[_0x5c3d('13e', 's2t@')][_0x5c3d('13f', '8ye]')][_0xf8d4f2['pevEv']][_0xf8d4f2[_0x5c3d('140', 'o%Hs')]][_0xf8d4f2[_0x5c3d('141', '96*f')]] || 0x0;
    console['log'](_0x5c3d('142', 'lR53') + _0x3aaf94);
    if (_0xf8d4f2[_0x5c3d('143', 'f$@p')](_0x3aaf94, 0x0)) {
      if (_0xf8d4f2[_0x5c3d('144', 'piza')] !== 'bBLKh') {
        console[_0x5c3d('145', 'n@nG')]('助力结果：' + data['data'][_0x5c3d('146', '$[C2')][_0xf8d4f2[_0x5c3d('147', 's%P1')]]);
        if (data[_0xf8d4f2[_0x5c3d('148', 'o7vD')]][_0xf8d4f2['pevEv']][_0xf8d4f2[_0x5c3d('149', '4%Cg')]] === 0x3) $['canHelp'] = ![];
        if (_0xf8d4f2[_0x5c3d('14a', 'pqb(')](data[_0xf8d4f2[_0x5c3d('14b', 'I($f')]][_0xf8d4f2[_0x5c3d('14c', 'f$@p')]][_0xf8d4f2[_0x5c3d('14d', 'm)@n')]], 0x9)) $[_0x5c3d('14e', 'XpI[')] = ![];
      } else {
        for (let _0x1e176e = 0x0; _0xf8d4f2[_0x5c3d('14f', ']G5@')](_0x1e176e, new Array(_0x3aaf94)[_0x5c3d('150', 'piza')]('')[_0x5c3d('151', '7De#')]); _0x1e176e++) {
          if (!_0xdfe9b5) break;
          await _0xf8d4f2[_0x5c3d('152', '7De#')](h5receiveRedpacket, _0xdfe9b5);
          await $[_0x5c3d('153', 'qi!x')](0x1f4);
        }
      }
    }
  } else if ($['h5activityIndex'] && $[_0x5c3d('154', 'f$@p')][_0x5c3d('155', ']G5@')] && $[_0x5c3d('156', 'm)@n')][_0x5c3d('157', 'I($f')][_0xf8d4f2['eHsRq']] === 0x4e22) {
    if ('qVBZh' !== _0xf8d4f2[_0x5c3d('158', 'fCgc')]) {
      console[_0x5c3d('159', '$[C2')]('\x0a' + $[_0x5c3d('15a', 'sEZ[')][_0x5c3d('15b', 'OghG')][_0xf8d4f2['tSMtB']] + '\x0a');
    } else {
      if (err) {
        console[_0x5c3d('15c', 'OghG')]('\x0a' + $[_0x5c3d('15d', '$lyO')] + _0x5c3d('15e', 'SI!Z'));
        console[_0x5c3d('d4', 'GEp&')](JSON['stringify'](err));
      } else {
        $[_0x5c3d('15f', 'J(]D')] = JSON[_0x5c3d('d0', 'pqb(')](data);
      }
    }
  }
}

function taskHomePage() {
  var _0x18f4cb = {
    'BcQCf': function (_0x59df51, _0xb12e4d) {
      return _0x59df51 !== _0xb12e4d;
    }, 'KxnUO': _0x5c3d('160', 'Vm#Z'), 'VCZWx': function (_0x247d50, _0x302d75) {
      return _0x247d50 !== _0x302d75;
    }, 'tfLwG': _0x5c3d('161', 'p4$W'), 'NwCYs': function (_0x308b76, _0xa26687) {
      return _0x308b76 === _0xa26687;
    }, 'SiEKp': _0x5c3d('162', 'oaTe'), 'hzvXy': 'qIscY', 'Cmvmt': _0x5c3d('163', 'QeIx'), 'pTtUQ': function (_0x15fc99, _0x4c2bb2) {
      return _0x15fc99(_0x4c2bb2);
    }, 'gFshu': function (_0x57fd53, _0x1b0122) {
      return _0x57fd53(_0x1b0122);
    }, 'jGpTc': _0x5c3d('164', 's%P1'), 'JmYGW': 'pIuGm', 'SUvrz': function (_0x4bab97, _0x3de7a8, _0x1beb27) {
      return _0x4bab97(_0x3de7a8, _0x1beb27);
    }
  };
  return new Promise(_0x58f1a5 => {
    var _0x4c7fe3 = {
      'tQgsP': function (_0x133a89) {
        return _0x133a89();
      }, 'dUkhn': function (_0x267817, _0x418364) {
        return _0x18f4cb[_0x5c3d('165', 'n@nG')](_0x267817, _0x418364);
      }
    };
    if (_0x18f4cb[_0x5c3d('166', 'QeIx')](_0x18f4cb[_0x5c3d('167', 'oaTe')], _0x18f4cb['JmYGW'])) {
      $[_0x5c3d('168', 'wc[h')](_0x18f4cb[_0x5c3d('169', 'o7vD')](taskUrl, arguments['callee'][_0x5c3d('16a', 'o%Hs')][_0x5c3d('16b', 'DI]G')](), {'clientInfo': {}}), (_0x1c6bdd, _0x356597, _0x518e89) => {
        if (_0x18f4cb[_0x5c3d('16c', 's2t@')](_0x18f4cb['KxnUO'], _0x18f4cb['KxnUO'])) {
          _0x4c7fe3[_0x5c3d('16d', '@YZ@')](_0x58f1a5);
        } else {
          try {
            if (_0x18f4cb[_0x5c3d('16e', 'qi!x')](_0x18f4cb[_0x5c3d('16f', 'fCgc')], _0x18f4cb[_0x5c3d('170', '(S7p')])) {
              url = _0x5c3d('171', 'oaTe') + functionId + _0x5c3d('172', 'sEZ[') + _0x4c7fe3[_0x5c3d('173', 'qt1B')](escape, JSON[_0x5c3d('174', 'P3j6')](body)) + _0x5c3d('175', '#g!5');
            } else {
              if (_0x1c6bdd) {
                if (_0x18f4cb[_0x5c3d('176', '1xX6')](_0x18f4cb[_0x5c3d('177', 'wc[h')], 'jIvjU')) {
                  console[_0x5c3d('178', '$lyO')]('\x0a' + $[_0x5c3d('16', 'dECe')] + _0x5c3d('179', ']G5@'));
                  console[_0x5c3d('17a', 'KKA&')](JSON[_0x5c3d('17b', 'f$@p')](_0x1c6bdd));
                } else {
                  if (_0x518e89[_0x5c3d('17c', '1xX6')][_0x5c3d('17d', 'KKA&')][_0x5c3d('17e', ')4(@')]) {
                    console['log'](_0x5c3d('17f', '#g!5') + _0x518e89[_0x5c3d('105', 'Ykax')][_0x5c3d('180', 'QeIx')]['quota'] + '元');
                  } else {
                    console[_0x5c3d('15c', 'OghG')](_0x5c3d('181', 'pqb(') + _0x518e89['result'][_0x5c3d('182', '#g!5')][_0x5c3d('183', 'm)@n')] + '元：' + _0x518e89[_0x5c3d('184', 'piza')][_0x5c3d('185', 'RJ[D')][_0x5c3d('186', 'GR%&')] + '，' + _0x518e89[_0x5c3d('187', '#g!5')][_0x5c3d('188', 'dECe')][_0x5c3d('189', 'inWv')]);
                  }
                }
              } else {
                if (_0x18f4cb[_0x5c3d('18a', '8ye]')](_0x18f4cb[_0x5c3d('18b', ']loZ')], _0x18f4cb[_0x5c3d('18c', 'XpI[')])) {
                  console[_0x5c3d('18d', 'SI!Z')](_0x5c3d('18e', ']G5@') + _0x518e89[_0x5c3d('18f', '4%Cg')][_0x5c3d('190', 'DI]G')][_0x5c3d('191', 'Vm#Z')] + '元');
                } else {
                  $[_0x5c3d('192', 's2t@')] = JSON[_0x5c3d('193', '96*f')](_0x518e89);
                }
              }
            }
          } catch (_0x16847c) {
            $[_0x5c3d('194', 'lR53')](_0x16847c, _0x356597);
          } finally {
            _0x18f4cb[_0x5c3d('195', '#g!5')](_0x58f1a5, _0x518e89);
          }
        }
      });
    } else {
      console[_0x5c3d('80', 'qt1B')]('\x0a' + $[_0x5c3d('196', 'lR53')] + _0x5c3d('197', 's2t@'));
      console[_0x5c3d('198', '#g!5')](JSON[_0x5c3d('199', 's%P1')](err));
    }
  });
}

function startTask(_0x4ac69a) {
  var _0x20180a = {
    'KtUKO': function (_0x14d335, _0x250ca3) {
      return _0x14d335 !== _0x250ca3;
    }, 'ohdvi': _0x5c3d('19a', 'OghG'), 'zCWjv': function (_0xb39e7, _0x5c31ea) {
      return _0xb39e7 === _0x5c31ea;
    }, 'YdPFO': _0x5c3d('19b', 'piza'), 'qbUut': function (_0x338fe6, _0x117ecb) {
      return _0x338fe6(_0x117ecb);
    }, 'VYCPR': 'VktFU', 'SbFsC': _0x5c3d('19c', '$[C2'), 'nSnHt': function (_0xcfa2, _0x78487e) {
      return _0xcfa2 + _0x78487e;
    }
  };
  let _0x3d654a = {'taskType': _0x4ac69a};
  _0x3d654a[_0x20180a[_0x5c3d('19d', 'afg[')]] = $[_0x5c3d('19e', '#g!5')]($['md5'](_0x20180a[_0x5c3d('19f', 'afg[')]('j', JSON[_0x5c3d('1a0', '4%Cg')](_0x3d654a)) + 'D'));
  return new Promise(_0x60cd4e => {
    if (_0x20180a['VYCPR'] === _0x5c3d('1a1', 's2t@')) {
      console[_0x5c3d('f4', 'fCgc')]('---具体任务详情---' + JSON[_0x5c3d('1a2', 'NJq]')](getTaskDetailForColorRes));
    } else {
      $[_0x5c3d('1a3', 'NJq]')](taskUrl(arguments['callee'][_0x5c3d('1a4', '#g!5')][_0x5c3d('1a5', '7De#')](), _0x3d654a), (_0x1f5a73, _0x1d7290, _0x3d654a) => {
        try {
          if (_0x20180a[_0x5c3d('1a6', '$[C2')]('sfeuv', _0x20180a['ohdvi'])) {
            $['taskHomePageData'] = JSON['parse'](_0x3d654a);
          } else {
            if (_0x1f5a73) {
              console[_0x5c3d('1a7', 'm0Q1')]('\x0a' + $[_0x5c3d('1a8', 'I($f')] + _0x5c3d('1a9', 'afg['));
              console['log'](JSON[_0x5c3d('1aa', 'qi!x')](_0x1f5a73));
            } else {
              console[_0x5c3d('3a', 'pqb(')]('领取任务：' + _0x3d654a);
              _0x3d654a = JSON[_0x5c3d('1ab', 'fCgc')](_0x3d654a);
            }
          }
        } catch (_0x5baedf) {
          $['logErr'](_0x5baedf, _0x1d7290);
        } finally {
          if (_0x20180a[_0x5c3d('1ac', 'GR%&')](_0x20180a[_0x5c3d('1ad', 'KKA&')], _0x20180a[_0x5c3d('1ae', 'p4$W')])) {
            _0x20180a[_0x5c3d('1af', 's2t@')](_0x60cd4e, _0x3d654a);
          } else {
            console[_0x5c3d('f4', 'fCgc')]('发起助力红包\x20失败：' + JSON['stringify'](_0x3d654a));
          }
        }
      });
    }
  });
}

async function active(_0x2bea66) {
  var _0x353a1a = {
    'SXOvX': function (_0x4e6a3a) {
      return _0x4e6a3a();
    }, 'oJnKs': function (_0x276141, _0x7435e) {
      return _0x276141(_0x7435e);
    }, 'eNXrL': function (_0xbb1d8c, _0x325883) {
      return _0xbb1d8c === _0x325883;
    }, 'TGAyD': function (_0xb873d2, _0x56b43d) {
      return _0xb873d2 === _0x56b43d;
    }, 'NuVDs': _0x5c3d('1b0', '7De#'), 'cqjXG': _0x5c3d('1b1', 'J(]D'), 'UFdUs': 'ZPIlv', 'puRgv': function (_0x3055c9, _0x245b8b, _0x4c9f00) {
      return _0x3055c9(_0x245b8b, _0x4c9f00);
    }, 'rHPgz': _0x5c3d('1b2', 'm)@n')
  };
  const _0x39c8d9 = await _0x353a1a[_0x5c3d('1b3', 's%P1')](getTaskDetailForColor, _0x2bea66);
  if (_0x39c8d9 && _0x353a1a[_0x5c3d('1b4', 'Jnb7')](_0x39c8d9[_0x5c3d('1b5', ')4(@')], 0x0)) {
    if (_0x39c8d9[_0x5c3d('117', 'qt1B')] && _0x39c8d9['data']['result']) {
      const {advertDetails} = _0x39c8d9['data'][_0x5c3d('17c', '1xX6')];
      for (let _0x5611dd of advertDetails) {
        if (_0x353a1a[_0x5c3d('1b6', '#g!5')](_0x353a1a[_0x5c3d('1b7', 'Vm#Z')], _0x5c3d('1b8', '96*f'))) {
          await $[_0x5c3d('1b9', 'Vm#Z')](0x3e8);
          if (_0x5611dd['id'] && _0x5611dd[_0x5c3d('1ba', 'afg[')] === 0x0) {
            if (_0x353a1a['cqjXG'] === _0x353a1a['UFdUs']) {
              console['log'](_0x5c3d('1bb', '8ye]') + data);
              data = JSON['parse'](data);
            } else {
              await _0x353a1a['puRgv'](taskReportForColor, _0x2bea66, _0x5611dd['id']);
            }
          }
        } else {
          _0x353a1a['SXOvX'](resolve);
        }
      }
    } else {
      console[_0x5c3d('22', 'I($f')](_0x5c3d('1bc', 'pqb('));
      $[_0x5c3d('1bd', ']loZ')]('' + $[_0x5c3d('1be', 'f$@p')], '', _0x5c3d('1bf', 'qt1B'));
      if ($[_0x5c3d('1c0', 'pqb(')]()) await notify[_0x5c3d('1c1', 'NJq]')]($[_0x5c3d('27', '$[C2')] + _0x5c3d('1c2', 'SI!Z') + $[_0x5c3d('1c3', 'o%Hs')] + _0x5c3d('1c4', 'oaTe') + $[_0x5c3d('1c5', '7De#')], _0x5c3d('1c6', 'J(]D'));
    }
  } else {
    if (_0x353a1a[_0x5c3d('1c7', ']loZ')](_0x353a1a[_0x5c3d('1c8', 'GR%&')], _0x5c3d('1c9', 's%P1'))) {
      console['log'](_0x5c3d('1ca', '#g!5') + JSON[_0x5c3d('1cb', '(S7p')](_0x39c8d9));
    } else {
      console[_0x5c3d('1cc', ')4(@')]('\x0a' + $['name'] + _0x5c3d('1cd', 'qt1B'));
      console['log'](JSON[_0x5c3d('1ce', '96*f')](err));
    }
  }
}

function getTaskDetailForColor(_0x2c4c7b) {
  var _0x2682ae = {
    'giQyg': _0x5c3d('1cf', 'o%Hs'), 'SlFpb': function (_0x578895, _0x5dfb99) {
      return _0x578895 === _0x5dfb99;
    }, 'znQly': 'MCILP', 'ejnGm': _0x5c3d('1d0', 'I($f'), 'vXznd': function (_0x49d202, _0x3077b1) {
      return _0x49d202 === _0x3077b1;
    }, 'dbFxk': _0x5c3d('1d1', 'Jnb7'), 'QEckC': _0x5c3d('1d2', 'afg['), 'VtrCf': function (_0x1ffb7f, _0x298bd0) {
      return _0x1ffb7f(_0x298bd0);
    }, 'nbYTc': function (_0x5beb60, _0x5a89e8) {
      return _0x5beb60 !== _0x5a89e8;
    }, 'GSsrS': _0x5c3d('1d3', 'fCgc'), 'wrfDD': 'hghwF', 'nmAsw': function (_0x5930f8, _0x4a8582, _0xfc044c) {
      return _0x5930f8(_0x4a8582, _0xfc044c);
    }
  };
  const _0x574b60 = {'clientInfo': {}, 'taskType': _0x2c4c7b};
  return new Promise(_0x2f2f57 => {
    if (_0x2682ae[_0x5c3d('1d4', 'wc[h')](_0x2682ae['GSsrS'], _0x2682ae[_0x5c3d('1d5', 'SI!Z')])) {
      $['post'](_0x2682ae['nmAsw'](taskUrl, arguments['callee'][_0x5c3d('1d6', '4%Cg')][_0x5c3d('1d7', 'o7vD')](), _0x574b60), (_0x167487, _0x312813, _0x574b60) => {
        if (_0x2682ae[_0x5c3d('1d8', '7De#')] === _0x2682ae[_0x5c3d('1d9', 'Ykax')]) {
          try {
            if (_0x2682ae[_0x5c3d('1da', 'qi!x')](_0x2682ae['znQly'], _0x2682ae['ejnGm'])) {
              if (_0x167487) {
                console[_0x5c3d('80', 'qt1B')]('\x0a' + $[_0x5c3d('1db', ']loZ')] + _0x5c3d('1dc', 'dECe'));
                console[_0x5c3d('22', 'I($f')](JSON[_0x5c3d('1aa', 'qi!x')](_0x167487));
              } else {
                _0x574b60 = JSON[_0x5c3d('1dd', 's%P1')](_0x574b60);
              }
            } else {
              if (_0x167487) {
                console['log']('\x0a' + $[_0x5c3d('1de', 'sEZ[')] + ':\x20API查询请求失败\x20‼️‼️');
                console['log'](JSON[_0x5c3d('7f', 'DI]G')](_0x167487));
              } else {
                if (_0x2682ae[_0x5c3d('1df', 'sEZ[')](_0x2682ae[_0x5c3d('1e0', 'Vm#Z')], _0x2682ae[_0x5c3d('1e1', '96*f')])) {
                  _0x574b60 = JSON[_0x5c3d('1e2', 'Vm#Z')](_0x574b60);
                } else {
                  $[_0x5c3d('1e3', 'm0Q1')]();
                }
              }
            }
          } catch (_0x3f13d7) {
            if (_0x2682ae['vXznd']('OnggA', _0x2682ae['QEckC'])) {
              console[_0x5c3d('4f', '4%Cg')](_0x5c3d('1e4', 'Ykax') + JSON[_0x5c3d('1ce', '96*f')](_0x574b60));
            } else {
              $[_0x5c3d('1e5', 'XpI[')](_0x3f13d7, _0x312813);
            }
          } finally {
            if (_0x5c3d('1e6', 'm)@n') !== _0x5c3d('1e7', '(S7p')) {
              _0x2682ae[_0x5c3d('1e8', '4%Cg')](_0x2f2f57, _0x574b60);
            } else {
              console['log']('[' + item[_0x5c3d('f6', 'GR%&')] + ']\x20已经领取奖励');
            }
          }
        } else {
          console[_0x5c3d('1e9', 'qi!x')]('\x0a' + $[_0x5c3d('1ea', 'KKA&')] + ':\x20API查询请求失败\x20‼️‼️');
          console['log'](JSON[_0x5c3d('1eb', 's2t@')](_0x167487));
        }
      });
    } else {
      if (_0x574b60) {
        if (type === '1' && functionId === _0x5c3d('1ec', 'lR53')) console['log'](_0x5c3d('1ed', 'DI]G') + _0x574b60);
      }
    }
  });
}

function taskReportForColor(_0x2f201d, _0x19e657) {
  var _0x425c25 = {
    'PQDxe': function (_0x22e30f, _0x402b42) {
      return _0x22e30f !== _0x402b42;
    }, 'nxSUq': 'BTdPn', 'xjOHG': function (_0x30f742, _0x5987c6) {
      return _0x30f742 === _0x5987c6;
    }, 'IdYkm': _0x5c3d('1ee', '1xX6'), 'BHsvy': function (_0x48c0f1, _0x2883bb) {
      return _0x48c0f1 !== _0x2883bb;
    }, 'fNhbD': _0x5c3d('9d', '@YZ@'), 'TLfnj': 'data', 'zVZan': 'packetSum', 'hOFqU': _0x5c3d('1ef', 'afg['), 'byDFX': _0x5c3d('1f0', '4%Cg'), 'RHfJb': function (_0x1ff966, _0x3bbb99, _0x2f88e2) {
      return _0x1ff966(_0x3bbb99, _0x2f88e2);
    }, 'tlqAz': _0x5c3d('1f1', 'Ykax'), 'TTfnO': function (_0x40d24d, _0x201347) {
      return _0x40d24d + _0x201347;
    }, 'rssvc': function (_0x170cec, _0x3a628c) {
      return _0x170cec + _0x3a628c;
    }
  };
  const _0x1e84f5 = {'taskType': _0x2f201d, 'detailId': _0x19e657};
  _0x1e84f5[_0x425c25[_0x5c3d('1f2', 'KKA&')]] = $[_0x5c3d('1f3', 'OghG')]($[_0x5c3d('1f4', 'fCgc')](_0x425c25['TTfnO'](_0x425c25[_0x5c3d('1f5', 'oaTe')]('j', JSON['stringify'](_0x1e84f5)), 'D')));
  return new Promise(_0x58dd7b => {
    var _0x59e4e9 = {'DOxRl': _0x425c25[_0x5c3d('1f6', 'piza')], 'JEvZq': _0x425c25[_0x5c3d('1f7', '1xX6')], 'KMfLp': _0x425c25['zVZan']};
    if (_0x425c25['hOFqU'] !== _0x425c25[_0x5c3d('1f8', 's%P1')]) {
      $[_0x5c3d('1f9', 'p4$W')](_0x425c25['RHfJb'](taskUrl, arguments[_0x5c3d('1fa', 'Jnb7')][_0x5c3d('1fb', 'm0Q1')][_0x5c3d('1fc', 'QeIx')](), _0x1e84f5), (_0x99f409, _0x27df77, _0x1e84f5) => {
        var _0x237957 = {
          'FMYKk': function (_0x3f983b, _0x41de54) {
            return _0x3f983b(_0x41de54);
          }
        };
        if (_0x425c25[_0x5c3d('1fd', 'QeIx')](_0x5c3d('1fe', 'qi!x'), _0x425c25[_0x5c3d('1ff', 'inWv')])) {
          if (_0x99f409) {
            console['log']('\x0a' + $[_0x5c3d('200', 'DI]G')] + _0x5c3d('201', 'Ykax'));
            console[_0x5c3d('202', 'Vm#Z')](JSON[_0x5c3d('1aa', 'qi!x')](_0x99f409));
          } else {
            _0x1e84f5 = JSON[_0x5c3d('203', 'oaTe')](_0x1e84f5);
            if (_0x1e84f5[_0x5c3d('10f', 'SI!Z')][_0x5c3d('204', 'KKA&')] && _0x1e84f5[_0x5c3d('205', '@YZ@')]['biz_code'] === 0x0) {
              console[_0x5c3d('206', 'afg[')](_0x5c3d('207', 'n@nG') + _0x1e84f5[_0x5c3d('84', 'm0Q1')][_0x5c3d('92', '$lyO')][_0x5c3d('208', 's%P1')] + '元\x0a');
              $[_0x5c3d('209', 'piza')] += _0x237957[_0x5c3d('20a', 'pqb(')](Number, _0x1e84f5[_0x5c3d('20b', 'wc[h')][_0x5c3d('20c', 'J(]D')][_0x5c3d('20d', ')4(@')]);
            }
          }
        } else {
          try {
            if (_0x99f409) {
              if (_0x425c25[_0x5c3d('20e', 'RJ[D')](_0x425c25[_0x5c3d('20f', '(S7p')], 'RVLzD')) {
                console[_0x5c3d('210', 'P3j6')]('\x0a' + $[_0x5c3d('211', 'SI!Z')] + _0x5c3d('1a9', 'afg['));
                console[_0x5c3d('a7', 'GR%&')](JSON[_0x5c3d('174', 'P3j6')](_0x99f409));
              } else {
                _0x1e84f5 = JSON[_0x5c3d('1ab', 'fCgc')](_0x1e84f5);
                $[_0x5c3d('121', 'qi!x')] = _0x1e84f5;
                $[_0x5c3d('183', 'm)@n')] = 0x0;
                if ($['h5activityIndex'] && $[_0x5c3d('212', 'GR%&')][_0x5c3d('d3', 'n@nG')] && $[_0x5c3d('213', 'n@nG')]['data'][_0x59e4e9[_0x5c3d('214', 'f$@p')]]) {
                  const _0x3da410 = $[_0x5c3d('215', 'SI!Z')][_0x59e4e9[_0x5c3d('216', 'afg[')]][_0x59e4e9[_0x5c3d('217', 'qi!x')]][_0x5c3d('218', 'Vm#Z')] || [];
                  for (let _0x2632df of _0x3da410) {
                    $['discount'] += _0x2632df[_0x59e4e9['KMfLp']];
                  }
                  if ($[_0x5c3d('219', 'sEZ[')]) $[_0x5c3d('183', 'm)@n')] = $[_0x5c3d('21a', 'J(]D')][_0x5c3d('21b', 'Ykax')](0x2);
                }
              }
            } else {
              if (_0x425c25['BHsvy'](_0x5c3d('21c', 'KKA&'), _0x5c3d('21d', 'I($f'))) {
                _0x1e84f5 = JSON['parse'](_0x1e84f5);
              } else {
                $[_0x5c3d('21e', 'piza')](e, _0x27df77);
              }
            }
          } catch (_0x35fc23) {
            $['logErr'](_0x35fc23, _0x27df77);
          } finally {
            _0x58dd7b(_0x1e84f5);
          }
        }
      });
    } else {
      console[_0x5c3d('1cc', ')4(@')]('红包领取成功，获得' + _0x1e84f5['data'][_0x5c3d('13b', ')4(@')][_0x5c3d('21f', 'Jnb7')] + '元\x0a');
      $['discount'] += Number(_0x1e84f5['data'][_0x5c3d('105', 'Ykax')][_0x5c3d('220', 'afg[')]);
    }
  });
}

function receiveTaskRedpacket(_0x271e7d) {
  var _0x278eaf = {
    'vvpvO': _0x5c3d('221', 's2t@'), 'MksOD': function (_0x5cc27c, _0x4aea3d) {
      return _0x5cc27c !== _0x4aea3d;
    }, 'oglIs': _0x5c3d('222', 'lR53'), 'FWaej': function (_0x3b4ea5, _0x1cb55f) {
      return _0x3b4ea5 === _0x1cb55f;
    }, 'CaHuF': _0x5c3d('223', 'inWv'), 'RQOWc': _0x5c3d('224', '$lyO'), 'ZqlPN': function (_0x4b5687, _0x588fe7, _0x3987b2) {
      return _0x4b5687(_0x588fe7, _0x3987b2);
    }
  };
  const _0x25a45c = {'clientInfo': {}, 'taskType': _0x271e7d};
  return new Promise(_0x1aef5d => {
    var _0x294ead = {
      'cVaeT': _0x5c3d('10f', 'SI!Z'), 'blhWi': _0x278eaf[_0x5c3d('225', 'm)@n')], 'kDcTQ': function (_0x269890, _0x55eb24) {
        return _0x278eaf[_0x5c3d('226', 'DI]G')](_0x269890, _0x55eb24);
      }, 'tJmAJ': _0x5c3d('227', 'p4$W'), 'kwmCv': _0x278eaf[_0x5c3d('228', 'SI!Z')], 'tlBXJ': function (_0x1a6257, _0x532118) {
        return _0x278eaf['FWaej'](_0x1a6257, _0x532118);
      }, 'oJdli': _0x278eaf['CaHuF'], 'PYYgz': _0x278eaf[_0x5c3d('229', ']G5@')], 'lVEuQ': function (_0x1eaa31, _0x400761) {
        return _0x278eaf['FWaej'](_0x1eaa31, _0x400761);
      }, 'aGNla': _0x5c3d('22a', '$[C2'), 'Jvtzi': _0x5c3d('22b', 'wc[h'), 'gqYTT': function (_0x103840, _0x2cf19e) {
        return _0x103840(_0x2cf19e);
      }
    };
    $[_0x5c3d('22c', 'GR%&')](_0x278eaf[_0x5c3d('22d', 'afg[')](taskUrl, arguments['callee']['name'][_0x5c3d('22e', 'qi!x')](), _0x25a45c), (_0x1da607, _0x16fc0c, _0x51b3e3) => {
      var _0x496324 = {'vENpk': _0x294ead[_0x5c3d('22f', '$lyO')], 'eXkGV': _0x294ead[_0x5c3d('230', 'I($f')]};
      if (_0x294ead[_0x5c3d('231', ')4(@')](_0x294ead[_0x5c3d('232', 'm0Q1')], _0x294ead['kwmCv'])) {
        try {
          if (_0x1da607) {
            if (_0x294ead['tlBXJ'](_0x294ead[_0x5c3d('233', 'I($f')], _0x294ead[_0x5c3d('234', 'SI!Z')])) {
              console[_0x5c3d('a7', 'GR%&')]('' + JSON[_0x5c3d('235', 'pqb(')](_0x1da607));
              console[_0x5c3d('1a7', 'm0Q1')]($[_0x5c3d('236', 'J(]D')] + _0x5c3d('237', 's2t@'));
            } else {
              console[_0x5c3d('f0', 'dECe')]('\x0a' + $[_0x5c3d('238', ')4(@')] + _0x5c3d('1dc', 'dECe'));
              console['log'](JSON[_0x5c3d('239', 'm)@n')](_0x1da607));
            }
          } else {
            _0x51b3e3 = JSON[_0x5c3d('23a', 'XpI[')](_0x51b3e3);
            if (_0x51b3e3[_0x5c3d('23b', '96*f')][_0x5c3d('23c', 'o7vD')] && _0x294ead[_0x5c3d('23d', 'QeIx')](_0x51b3e3['data']['biz_code'], 0x0)) {
              if (_0x294ead[_0x5c3d('23e', 'P3j6')] !== _0x294ead[_0x5c3d('23f', '7De#')]) {
                console[_0x5c3d('240', 'sEZ[')](_0x5c3d('241', 'GR%&') + _0x51b3e3[_0x5c3d('242', 'NJq]')][_0x5c3d('13b', ')4(@')][_0x5c3d('243', 'dECe')] + '元\x0a');
                $['discount'] += Number(_0x51b3e3[_0x5c3d('d6', 's%P1')]['result']['discount']);
              } else {
                console[_0x5c3d('210', 'P3j6')]('\x0a\x0a发起助力红包\x20失败：' + _0x51b3e3[_0x496324[_0x5c3d('244', 'dECe')]][_0x5c3d('245', 's%P1')][_0x496324['eXkGV']]);
              }
            }
          }
        } catch (_0x3b76f5) {
          $['logErr'](_0x3b76f5, _0x16fc0c);
        } finally {
          _0x294ead['gqYTT'](_0x1aef5d, _0x51b3e3);
        }
      } else {
        console[_0x5c3d('246', 'p4$W')](_0x5c3d('247', 'afg[') + JSON[_0x5c3d('248', 'QeIx')]($['taskHomePageData']) + '\x0a');
      }
    });
  });
}

function jinli_h5assist(_0x538d51) {
  var _0xb3d0e2 = {
    'GtVBH': function (_0x192f86, _0x2f0bdd) {
      return _0x192f86 === _0x2f0bdd;
    }, 'GBHvr': _0x5c3d('249', 'J(]D'), 'ApSGa': function (_0x1be415) {
      return _0x1be415();
    }, 'pHqxW': _0x5c3d('24a', 'o7vD'), 'RvLMM': function (_0x58fd52, _0x38fbfd) {
      return _0x58fd52 !== _0x38fbfd;
    }, 'MCvnP': _0x5c3d('24b', 'm)@n'), 'tDRyw': _0x5c3d('24c', 'o7vD'), 'olCrt': _0x5c3d('24d', '1xX6'), 'bbuLZ': 'status', 'XqREb': _0x5c3d('24e', 'qi!x'), 'lvgns': function (_0x416c93, _0x7a4fb3, _0x223887) {
      return _0x416c93(_0x7a4fb3, _0x223887);
    }
  };
  const _0x2314c6 = {'clientInfo': {}, 'redPacketId': _0x538d51, 'followShop': 0x0, 'promUserState': ''};
  const _0x324215 = _0xb3d0e2[_0x5c3d('24f', 'qi!x')](taskUrl, arguments['callee'][_0x5c3d('250', 'o7vD')]['toString'](), _0x2314c6);
  return new Promise(_0x5e4722 => {
    var _0x3ca517 = {
      'jrEgT': function (_0x417d33) {
        return _0xb3d0e2['ApSGa'](_0x417d33);
      },
      'otQKR': 'CookieJD2',
      'fUOOO': _0x5c3d('251', '#g!5'),
      'IkoDZ': _0xb3d0e2[_0x5c3d('252', '8ye]')],
      'udbxu': function (_0x239451, _0x129eac) {
        return _0xb3d0e2[_0x5c3d('253', 'm)@n')](_0x239451, _0x129eac);
      },
      'tgIQE': _0xb3d0e2[_0x5c3d('254', 'inWv')],
      'KjMSK': function (_0x2c876a, _0x572de4) {
        return _0xb3d0e2[_0x5c3d('255', 'wc[h')](_0x2c876a, _0x572de4);
      },
      'LAQyg': 'KZRhZ',
      'RmbgS': function (_0x29e566, _0x3bd110) {
        return _0x29e566 === _0x3bd110;
      },
      'UvmqM': _0xb3d0e2['tDRyw'],
      'TlKTI': 'data',
      'McDmb': _0x5c3d('256', '(S7p'),
      'dpHFI': _0xb3d0e2[_0x5c3d('257', '(S7p')],
      'iQTqR': _0xb3d0e2[_0x5c3d('258', '#g!5')],
      'UJShO': _0x5c3d('259', 'Ykax'),
      'fxkjF': function (_0x25b09f) {
        return _0x25b09f();
      }
    };
    if (_0xb3d0e2[_0x5c3d('25a', 'GR%&')]('Axbfp', _0xb3d0e2[_0x5c3d('25b', '4%Cg')])) {
      $[_0x5c3d('25c', '$[C2')](_0x324215, (_0x8fddbf, _0x418387, _0x143ac0) => {
        var _0x3a16d4 = {'OTVIZ': _0x3ca517[_0x5c3d('25d', 'inWv')], 'FeoWl': _0x3ca517[_0x5c3d('25e', 's2t@')]};
        try {
          if (_0x3ca517[_0x5c3d('25f', 'QeIx')] !== _0x3ca517[_0x5c3d('260', 'DI]G')]) {
            _0x3ca517['jrEgT'](_0x5e4722);
          } else {
            if (_0x8fddbf) {
              if (_0x3ca517[_0x5c3d('261', 'OghG')](_0x5c3d('262', 'Ykax'), _0x3ca517[_0x5c3d('263', ']G5@')])) {
                $[_0x5c3d('264', 'KKA&')](e, _0x418387);
              } else {
                console[_0x5c3d('246', 'p4$W')]('\x0a' + $['name'] + ':\x20API查询请求失败\x20‼️‼️');
                console['log'](JSON[_0x5c3d('a9', '7De#')](_0x8fddbf));
              }
            } else {
              if (_0x3ca517['KjMSK'](_0x5c3d('265', 'P3j6'), _0x3ca517[_0x5c3d('266', 'pqb(')])) {
                cookiesArr = [$['getdata']('CookieJD'), $[_0x5c3d('c', 'RJ[D')](_0x3a16d4['OTVIZ']), ...jsonParse($[_0x5c3d('267', '(S7p')](_0x3a16d4[_0x5c3d('268', '4%Cg')]) || '[]')[_0x5c3d('269', 'GR%&')](_0x5dd5bf => _0x5dd5bf['cookie'])][_0x5c3d('26a', 'p4$W')](_0x437f9c => !!_0x437f9c);
              } else {
                _0x143ac0 = JSON[_0x5c3d('26b', 'I($f')](_0x143ac0);
                if (_0x143ac0 && _0x143ac0[_0x5c3d('26c', 'RJ[D')] && _0x3ca517[_0x5c3d('26d', '96*f')](_0x143ac0['data'][_0x3ca517['UvmqM']], 0x0)) {
                  console[_0x5c3d('246', 'p4$W')](_0x5c3d('26e', 'qt1B') + _0x143ac0[_0x3ca517[_0x5c3d('26f', '96*f')]][_0x3ca517[_0x5c3d('270', 'DI]G')]][_0x3ca517[_0x5c3d('271', '1xX6')]]);
                  if (_0x143ac0[_0x3ca517[_0x5c3d('272', 'J(]D')]][_0x3ca517[_0x5c3d('273', '8ye]')]][_0x3ca517[_0x5c3d('274', 'DI]G')]] === 0x3) $[_0x5c3d('4e', 'p4$W')] = ![];
                  if (_0x3ca517['RmbgS'](_0x143ac0['data'][_0x3ca517[_0x5c3d('275', 'o%Hs')]]['status'], 0x9)) $[_0x5c3d('276', ']loZ')] = ![];
                } else {
                  console[_0x5c3d('277', 's%P1')](_0x5c3d('278', 'RJ[D') + JSON[_0x5c3d('279', 'afg[')](_0x143ac0));
                }
              }
            }
          }
        } catch (_0x2694df) {
          if (_0x3ca517[_0x5c3d('27a', 'KKA&')](_0x5c3d('27b', ']loZ'), _0x3ca517['UJShO'])) {
            console[_0x5c3d('202', 'Vm#Z')]('\x0a' + $[_0x5c3d('27c', '7De#')] + _0x5c3d('27d', 'DI]G'));
            console[_0x5c3d('246', 'p4$W')](JSON[_0x5c3d('27e', 'o7vD')](_0x8fddbf));
          } else {
            $[_0x5c3d('27f', 'n@nG')](_0x2694df, _0x418387);
          }
        } finally {
          _0x3ca517[_0x5c3d('280', 'oaTe')](_0x5e4722);
        }
      });
    } else {
      if (type === '1' && _0xb3d0e2['GtVBH'](functionId, _0xb3d0e2[_0x5c3d('281', 'n@nG')])) console[_0x5c3d('80', 'qt1B')]('京东首页点击“领券”逛10s任务:' + data);
    }
  });
}

function h5receiveRedpacket(_0x5f4c06) {
  var _0x57afad = {
    'TfHNy': _0x5c3d('282', 'DI]G'), 'tygiq': _0x5c3d('283', 'sEZ['), 'xDOUv': function (_0x5db70b, _0x24df3c) {
      return _0x5db70b === _0x24df3c;
    }, 'rZQVU': _0x5c3d('284', ']loZ'), 'lrKHT': _0x5c3d('285', 'piza'), 'YIoks': _0x5c3d('d3', 'n@nG'), 'IhVGR': _0x5c3d('286', 'f$@p'), 'gPwJq': function (_0x28c411, _0x49a35b) {
      return _0x28c411 !== _0x49a35b;
    }, 'ykVma': _0x5c3d('287', '#g!5'), 'SOAlQ': _0x5c3d('288', 'NJq]'), 'CUQVp': function (_0x5eceaa, _0x29db57) {
      return _0x5eceaa(_0x29db57);
    }, 'JKsBh': _0x5c3d('289', '7De#'), 'PgROV': function (_0x33e47e, _0x19f5ac) {
      return _0x33e47e + _0x19f5ac;
    }, 'LvQCZ': function (_0x49c7b7, _0x225ba0, _0x1da602) {
      return _0x49c7b7(_0x225ba0, _0x1da602);
    }
  };
  const _0x3b7254 = {'redPacketId': _0x5f4c06};
  _0x3b7254[_0x5c3d('1f1', 'Ykax')] = $[_0x5c3d('28a', '7De#')]($[_0x5c3d('28b', 'P3j6')](_0x57afad[_0x5c3d('28c', 'fCgc')]('j', JSON[_0x5c3d('28d', 'I($f')](_0x3b7254)) + 'D'));
  const _0x2ec437 = _0x57afad[_0x5c3d('28e', 'sEZ[')](taskUrl, arguments[_0x5c3d('28f', 'wc[h')][_0x5c3d('1ea', 'KKA&')][_0x5c3d('290', 'fCgc')](), _0x3b7254);
  return new Promise(_0xa03e44 => {
    var _0x4a1f39 = {
      'WRCdy': function (_0x552a02, _0x18d261) {
        return _0x57afad[_0x5c3d('291', 'RJ[D')](_0x552a02, _0x18d261);
      }, 'RNMPb': _0x57afad['JKsBh'], 'wMAoM': function (_0x2240b1, _0x3a6c56) {
        return _0x2240b1 * _0x3a6c56;
      }
    };
    $[_0x5c3d('292', 'I($f')](_0x2ec437, (_0x3ef482, _0x554b2c, _0x3b7254) => {
      var _0x10cd55 = {'BHYXw': _0x57afad[_0x5c3d('293', 'Vm#Z')], 'cwTpi': 'https://bean.m.jd.com/bean/signIndex.action', 'ZeqnL': _0x57afad['tygiq']};
      try {
        if (_0x57afad[_0x5c3d('294', 'KKA&')](_0x5c3d('295', 'piza'), _0x5c3d('296', 'qi!x'))) {
          $[_0x5c3d('297', '(S7p')]($[_0x5c3d('298', 'Vm#Z')], _0x10cd55[_0x5c3d('299', 'J(]D')], _0x10cd55[_0x5c3d('29a', '8ye]')], {'open-url': _0x10cd55['cwTpi']});
          return;
        } else {
          if (_0x3ef482) {
            console[_0x5c3d('29b', '8ye]')]('\x0a' + $['name'] + _0x5c3d('29c', '$lyO'));
            console[_0x5c3d('a2', 'm)@n')](JSON[_0x5c3d('29d', ')4(@')](_0x3ef482));
          } else {
            if (_0x57afad[_0x5c3d('29e', '$[C2')] === _0x57afad[_0x5c3d('29f', 'pqb(')]) {
              _0x3b7254 = JSON['parse'](_0x3b7254);
              if (_0x3b7254 && _0x3b7254[_0x5c3d('2a0', 'QeIx')] && _0x57afad[_0x5c3d('2a1', '96*f')](_0x3b7254[_0x5c3d('122', 'dECe')][_0x57afad[_0x5c3d('2a2', 'fCgc')]], 0x0)) {
                console[_0x5c3d('47', 'o7vD')](_0x5c3d('2a3', 'qi!x') + _0x3b7254[_0x57afad['YIoks']][_0x5c3d('17c', '1xX6')][_0x57afad[_0x5c3d('2a4', 'I($f')]] + '元');
              } else {
                if (_0x57afad[_0x5c3d('2a5', 'OghG')](_0x57afad['ykVma'], _0x57afad['SOAlQ'])) {
                  console[_0x5c3d('2a6', 'o%Hs')](_0x5c3d('2a7', 'sEZ[') + JSON[_0x5c3d('2a8', 'lR53')](_0x3b7254));
                } else {
                  const _0x5999b0 = _0x4a1f39[_0x5c3d('2a9', 'lR53')](require, _0x4a1f39[_0x5c3d('2aa', 'dECe')]);
                  const _0x5b0a6e = {
                    'https': _0x5999b0['httpsOverHttp']({
                      'proxy': {
                        'host': process[_0x5c3d('2ab', 'QeIx')][_0x5c3d('2ac', '1xX6')],
                        'port': _0x4a1f39[_0x5c3d('2ad', 's2t@')](process['env'][_0x5c3d('2ae', 'SI!Z')], 0x1)
                      }
                    })
                  };
                  Object[_0x5c3d('2af', 'NJq]')](_0x2ec437, {'agent': _0x5b0a6e});
                }
              }
            } else {
              console[_0x5c3d('2b0', 'XpI[')]('\x0a' + $[_0x5c3d('2b1', 'p4$W')]['data'][_0x10cd55[_0x5c3d('2b2', 'lR53')]] + '\x0a');
            }
          }
        }
      } catch (_0x409930) {
        $[_0x5c3d('2b3', '#g!5')](_0x409930, _0x554b2c);
      } finally {
        _0x57afad['CUQVp'](_0xa03e44, _0x3b7254);
      }
    });
  });
}

function h5launch() {
  var _0x8f78f1 = {
    'AmSrm': function (_0x440a00, _0x25fa3a) {
      return _0x440a00 === _0x25fa3a;
    }, 'kRHNh': 'pwjAu', 'GlGal': 'biz_code', 'jbEyY': _0x5c3d('20b', 'wc[h'), 'xNdNj': _0x5c3d('2b4', 'SI!Z'), 'OefvD': _0x5c3d('2b5', 'QeIx'), 'gcEhY': _0x5c3d('2b6', 'fCgc'), 'Hdfcb': function (_0x1bf02f, _0x598634) {
      return _0x1bf02f !== _0x598634;
    }, 'QLWlL': _0x5c3d('2b7', 'wc[h'), 'lpUUt': 'pLRSX', 'aZJTi': 'gjTgV', 'fCwAC': function (_0x31aedd, _0x2f4f4b) {
      return _0x31aedd(_0x2f4f4b);
    }, 'tFmbN': _0x5c3d('2b8', 'J(]D'), 'aswdy': _0x5c3d('2b9', 'p4$W'), 'rQGKg': 'gzip,\x20deflate,\x20br', 'gwKrQ': function (_0x1b9725, _0x56ba65) {
      return _0x1b9725(_0x56ba65);
    }, 'jKwuN': _0x5c3d('2ba', 'J(]D'), 'ccBNM': _0x5c3d('2bb', 'I($f'), 'OlzqI': function (_0x7340ad, _0x2fc039, _0x283caa) {
      return _0x7340ad(_0x2fc039, _0x283caa);
    }
  };
  const _0x19d3bc = {'clientInfo': {}, 'followShop': 0x0, 'promUserState': ''};
  const _0x1367bf = _0x8f78f1[_0x5c3d('2bc', 'pqb(')](taskUrl, arguments[_0x5c3d('2bd', 'P3j6')][_0x5c3d('298', 'Vm#Z')][_0x5c3d('1a5', '7De#')](), _0x19d3bc);
  return new Promise(_0x1a5a6b => {
    var _0x1dec42 = {
      'xlKGP': _0x8f78f1['tFmbN'],
      'VwwTz': _0x5c3d('2be', 'SI!Z'),
      'AiXuw': _0x8f78f1['aswdy'],
      'xAAtt': _0x8f78f1[_0x5c3d('2bf', 'lR53')],
      'FuSvq': _0x5c3d('2c0', 'afg['),
      'orAXH': function (_0x513fd8, _0xa61046) {
        return _0x8f78f1[_0x5c3d('2c1', 'NJq]')](_0x513fd8, _0xa61046);
      },
      'yVepL': _0x8f78f1[_0x5c3d('2c2', '1xX6')],
      'Yimsh': _0x8f78f1[_0x5c3d('2c3', 'qi!x')]
    };
    $['post'](_0x1367bf, (_0x2fefe9, _0x4be56c, _0xad8b82) => {
      try {
        if (_0x2fefe9) {
          console[_0x5c3d('2c4', 'f$@p')]('\x0a' + $[_0x5c3d('2c5', 'OghG')] + _0x5c3d('2c6', 'QeIx'));
          console[_0x5c3d('2c7', 'NJq]')](JSON[_0x5c3d('1a2', 'NJq]')](_0x2fefe9));
        } else {
          if (_0x8f78f1[_0x5c3d('2c8', 'NJq]')](_0x8f78f1[_0x5c3d('2c9', 'SI!Z')], _0x8f78f1[_0x5c3d('2ca', 'NJq]')])) {
            _0xad8b82 = JSON['parse'](_0xad8b82);
            if (_0xad8b82 && _0xad8b82[_0x5c3d('117', 'qt1B')] && _0x8f78f1[_0x5c3d('2cb', 'KKA&')](_0xad8b82[_0x5c3d('2a0', 'QeIx')][_0x8f78f1[_0x5c3d('2cc', 'XpI[')]], 0x0)) {
              if (_0xad8b82[_0x8f78f1['jbEyY']][_0x8f78f1['xNdNj']][_0x8f78f1[_0x5c3d('2cd', 'Vm#Z')]]) {
                console['log'](_0x5c3d('2ce', 'm)@n') + _0xad8b82[_0x8f78f1[_0x5c3d('2cf', 'o7vD')]]['result'][_0x8f78f1[_0x5c3d('2d0', 'sEZ[')]]);
                $[_0x5c3d('2d1', 'Vm#Z')]['push'](_0xad8b82[_0x8f78f1[_0x5c3d('2d2', 'pqb(')]][_0x8f78f1[_0x5c3d('2d3', 's2t@')]][_0x8f78f1[_0x5c3d('2d4', 'GR%&')]]);
              } else {
                console['log'](_0x5c3d('2d5', 'RJ[D') + _0xad8b82[_0x8f78f1[_0x5c3d('2d6', 'QeIx')]][_0x5c3d('2d7', 's2t@')][_0x8f78f1['gcEhY']]);
              }
            } else {
              if (_0x8f78f1[_0x5c3d('2d8', 's2t@')](_0x8f78f1[_0x5c3d('2d9', 'Ykax')], _0x8f78f1[_0x5c3d('2da', 'o%Hs')])) {
                console['log'](_0x5c3d('2db', 'Jnb7') + JSON[_0x5c3d('2dc', 'Ykax')](_0xad8b82));
              } else {
                _0x1a5a6b(_0xad8b82);
              }
            }
          } else {
            $[_0x5c3d('2dd', 'wc[h')](e, _0x4be56c);
          }
        }
      } catch (_0x152115) {
        $['logErr'](_0x152115, _0x4be56c);
      } finally {
        if ('gjTgV' !== _0x8f78f1['aZJTi']) {
          return {
            'url': JD_API_HOST + _0x5c3d('2de', 'I($f') + function_id + '&loginType=2&client=jd_mp_h5&t=' + new Date()[_0x5c3d('2df', 'p4$W')]() * 0x3e8,
            'body': _0x5c3d('2e0', 'n@nG') + JSON[_0x5c3d('1cb', '(S7p')](_0x19d3bc),
            'headers': {
              'Host': _0x1dec42[_0x5c3d('2e1', 'XpI[')],
              'Content-Type': _0x1dec42[_0x5c3d('2e2', 'piza')],
              'Origin': _0x1dec42[_0x5c3d('2e3', 'sEZ[')],
              'Accept-Encoding': _0x1dec42[_0x5c3d('2e4', 'Vm#Z')],
              'Cookie': cookie,
              'Connection': _0x1dec42[_0x5c3d('2e5', 's%P1')],
              'Accept': '*/*',
              'User-Agent': $['isNode']() ? process['env'][_0x5c3d('2e6', 'Ykax')] ? process['env'][_0x5c3d('2e6', 'Ykax')] : _0x1dec42['orAXH'](require, _0x5c3d('2e7', 'KKA&'))[_0x5c3d('2e8', '#g!5')] : $['getdata'](_0x5c3d('2e9', '96*f')) ? $[_0x5c3d('2ea', 'p4$W')]('JDUA') : 'jdapp;iPhone;9.4.4;14.3;network/4g;Mozilla/5.0\x20(iPhone;\x20CPU\x20iPhone\x20OS\x2014_3\x20like\x20Mac\x20OS\x20X)\x20AppleWebKit/605.1.15\x20(KHTML,\x20like\x20Gecko)\x20Mobile/15E148;supportJDSHWK/1',
              'Referer': _0x1dec42[_0x5c3d('2eb', 'inWv')],
              'Content-Length': '36',
              'Accept-Language': _0x1dec42[_0x5c3d('2ec', 's%P1')]
            }
          };
        } else {
          _0x8f78f1[_0x5c3d('2ed', '96*f')](_0x1a5a6b, _0xad8b82);
        }
      }
    });
  });
}

function h5activityIndex() {
  var _0x162440 = {
    'CvXJp': _0x5c3d('2a0', 'QeIx'), 'ShfDj': 'statusDesc', 'voxfX': function (_0x5b4a3b, _0xb95871) {
      return _0x5b4a3b === _0xb95871;
    }, 'BMEIR': 'status', 'DXfXi': function (_0x145a86, _0x1f6f9b) {
      return _0x145a86 !== _0x1f6f9b;
    }, 'kPvwm': 'vzgRf', 'OdJxR': _0x5c3d('2ee', 'QeIx'), 'jkreg': function (_0x23254a, _0x5943e2) {
      return _0x23254a === _0x5943e2;
    }, 'wZunv': 'pemmx', 'IkUWK': _0x5c3d('2ef', ']loZ'), 'qbhsg': 'AAHYX', 'aOmMF': _0x5c3d('20c', 'J(]D'), 'bsMVx': function (_0x381aac) {
      return _0x381aac();
    }, 'YDYes': function (_0xa2e9c0, _0x3a6812) {
      return _0xa2e9c0 === _0x3a6812;
    }, 'afyHp': function (_0x5c9b56, _0x597a0f) {
      return _0x5c9b56 > _0x597a0f;
    }, 'YaHWH': _0x5c3d('2f0', ')4(@'), 'MkWKS': function (_0x4f1eb6, _0x4d23ea) {
      return _0x4f1eb6(_0x4d23ea);
    }, 'Pyeni': function (_0x7be5c3, _0x19104d, _0x35b100) {
      return _0x7be5c3(_0x19104d, _0x35b100);
    }
  };
  const _0x1ae3a2 = {'clientInfo': {}, 'isjdapp': 0x1};
  const _0x275296 = _0x162440[_0x5c3d('2f1', 'lR53')](taskUrl, arguments[_0x5c3d('2f2', 'sEZ[')]['name'][_0x5c3d('22e', 'qi!x')](), _0x1ae3a2);
  return new Promise(_0x4fdd05 => {
    var _0x5728d6 = {
      'GuVTO': function (_0x54bf5f, _0x524d8c) {
        return _0x162440[_0x5c3d('2f3', '1xX6')](_0x54bf5f, _0x524d8c);
      }, 'mUgjV': function (_0x46793e, _0x301d17) {
        return _0x162440[_0x5c3d('2f4', 'o7vD')](_0x46793e, _0x301d17);
      }, 'NABnq': _0x162440[_0x5c3d('2f5', 'inWv')], 'veUQB': function (_0x150697, _0x2e0a84) {
        return _0x162440['MkWKS'](_0x150697, _0x2e0a84);
      }
    };
    $['post'](_0x275296, async (_0x99ed74, _0x4c2cfe, _0x1dd6a5) => {
      var _0x5b01ff = {
        'fqYLF': _0x162440[_0x5c3d('2f6', 'qi!x')], 'CreDx': _0x5c3d('2f7', '7De#'), 'ANjyW': _0x162440['ShfDj'], 'XPhld': function (_0x4ee67a, _0x523e3c) {
          return _0x162440[_0x5c3d('2f8', 'pqb(')](_0x4ee67a, _0x523e3c);
        }, 'wyxBX': _0x162440[_0x5c3d('2f9', ']loZ')]
      };
      if (_0x162440[_0x5c3d('2fa', 'oaTe')](_0x162440[_0x5c3d('2fb', 'piza')], _0x162440[_0x5c3d('2fc', 'NJq]')])) {
        Object[_0x5c3d('2fd', ']loZ')](jdCookieNode)['forEach'](_0x3c1564 => {
          cookiesArr[_0x5c3d('2fe', '8ye]')](jdCookieNode[_0x3c1564]);
        });
        if (process['env']['JD_DEBUG'] && _0x5728d6[_0x5c3d('2ff', 'RJ[D')](process[_0x5c3d('300', 'f$@p')][_0x5c3d('301', 'f$@p')], _0x5c3d('302', 'qi!x'))) console[_0x5c3d('1e9', 'qi!x')] = () => {
        };
        if (_0x5728d6[_0x5c3d('303', 'm0Q1')](JSON[_0x5c3d('304', '#g!5')](process[_0x5c3d('305', '1xX6')])[_0x5c3d('306', 'Ykax')](_0x5728d6[_0x5c3d('307', 'p4$W')]), -0x1)) process[_0x5c3d('308', 'P3j6')](0x0);
      } else {
        try {
          if (_0x162440[_0x5c3d('309', 'f$@p')](_0x5c3d('30a', ')4(@'), _0x162440[_0x5c3d('30b', ')4(@')])) {
            _0x5728d6[_0x5c3d('30c', 'lR53')](_0x4fdd05, _0x1dd6a5);
          } else {
            if (_0x99ed74) {
              if (_0x162440[_0x5c3d('30d', '$[C2')](_0x162440[_0x5c3d('30e', 'Jnb7')], _0x162440['IkUWK'])) {
                $[_0x5c3d('30f', 'sEZ[')](e, _0x4c2cfe);
              } else {
                console['log']('\x0a' + $['name'] + ':\x20API查询请求失败\x20‼️‼️');
                console['log'](JSON[_0x5c3d('310', 'inWv')](_0x99ed74));
              }
            } else {
              if (_0x162440[_0x5c3d('311', 'NJq]')](_0x162440[_0x5c3d('312', ')4(@')], _0x162440['qbhsg'])) {
                _0x1dd6a5 = JSON['parse'](_0x1dd6a5);
                $[_0x5c3d('313', 's%P1')] = _0x1dd6a5;
                $['discount'] = 0x0;
                if ($[_0x5c3d('314', '8ye]')] && $[_0x5c3d('212', 'GR%&')][_0x5c3d('111', '$lyO')] && $['h5activityIndex']['data'][_0x162440['aOmMF']]) {
                  const _0x5e5760 = $[_0x5c3d('315', '@YZ@')][_0x162440['CvXJp']][_0x5c3d('316', ']loZ')]['rewards'] || [];
                  for (let _0x5ac63a of _0x5e5760) {
                    $[_0x5c3d('317', 'inWv')] += _0x5ac63a[_0x5c3d('318', 'sEZ[')];
                  }
                  if ($[_0x5c3d('319', 'o%Hs')]) $[_0x5c3d('31a', '@YZ@')] = $['discount'][_0x5c3d('31b', 'XpI[')](0x2);
                }
              } else {
                _0x1dd6a5 = JSON['parse'](_0x1dd6a5);
                if (_0x1dd6a5 && _0x1dd6a5[_0x5c3d('31c', 'p4$W')] && _0x1dd6a5[_0x5c3d('15b', 'OghG')]['biz_code'] === 0x0) {
                  console['log']('助力结果：' + _0x1dd6a5[_0x5b01ff[_0x5c3d('31d', 'J(]D')]][_0x5b01ff['CreDx']][_0x5b01ff[_0x5c3d('31e', 'inWv')]]);
                  if (_0x5b01ff['XPhld'](_0x1dd6a5[_0x5c3d('122', 'dECe')][_0x5b01ff[_0x5c3d('31f', 'qi!x')]][_0x5b01ff[_0x5c3d('320', 'lR53')]], 0x3)) $[_0x5c3d('321', 'sEZ[')] = ![];
                  if (_0x1dd6a5[_0x5b01ff[_0x5c3d('322', '@YZ@')]][_0x5b01ff[_0x5c3d('323', 'sEZ[')]][_0x5b01ff[_0x5c3d('324', 'Ykax')]] === 0x9) $['canHelp'] = ![];
                } else {
                  console[_0x5c3d('4f', '4%Cg')](_0x5c3d('325', '8ye]') + JSON[_0x5c3d('326', 'fCgc')](_0x1dd6a5));
                }
              }
            }
          }
        } catch (_0x330ef8) {
          $[_0x5c3d('327', ')4(@')](_0x330ef8, _0x4c2cfe);
        } finally {
          _0x162440['bsMVx'](_0x4fdd05);
        }
      }
    });
  });
}

async function doAppTask(_0x5dc9db = '1') {
  var _0x24594b = {
    'mXfhN': _0x5c3d('328', 'lR53'), 'hQStI': function (_0x44e700, _0x5ca729, _0x14dcd2, _0x3e29f9) {
      return _0x44e700(_0x5ca729, _0x14dcd2, _0x3e29f9);
    }, 'jVhOM': 'getCcTaskList', 'mgzyY': _0x5c3d('329', 'lR53'), 'CrwZj': function (_0x2d412d, _0x532632, _0x549e72, _0x512387) {
      return _0x2d412d(_0x532632, _0x549e72, _0x512387);
    }
  };
  let _0x2c2d84 = {'pageClickKey': _0x5c3d('32a', 'pqb('), 'childActivityUrl': _0x24594b[_0x5c3d('32b', '1xX6')], 'lat': '', 'globalLat': '', 'lng': '', 'globalLng': ''};
  await _0x24594b[_0x5c3d('32c', 'QeIx')](getCcTaskList, _0x24594b['jVhOM'], _0x2c2d84, _0x5dc9db);
  _0x2c2d84 = {
    'globalLng': '',
    'globalLat': '',
    'monitorSource': 'ccgroup_ios_index_task',
    'monitorRefer': '',
    'taskType': '1',
    'childActivityUrl': _0x5c3d('32d', 'DI]G'),
    'pageClickKey': _0x24594b[_0x5c3d('32e', 'afg[')],
    'lat': '',
    'taskId': _0x5c3d('32f', 'SI!Z'),
    'lng': ''
  };
  await $[_0x5c3d('330', 's%P1')](0x2904);
  await _0x24594b['CrwZj'](getCcTaskList, _0x5c3d('331', 'OghG'), _0x2c2d84, _0x5dc9db);
}

function getCcTaskList(_0xc3ff0a, _0x2374b3, _0x4f75cc = '1') {
  var _0x1d4147 = {
    'ssSwU': _0x5c3d('332', '(S7p'),
    'MNtWa': 'hasSendNumber',
    'cUVqh': 'assistants',
    'HQbwN': function (_0x5ad9b1, _0x2032cc) {
      return _0x5ad9b1(_0x2032cc);
    },
    'pGvhX': _0x5c3d('333', 'NJq]'),
    'qXgWt': 'PmkhB',
    'uJsqL': 'ZEBou',
    'rxjdw': 'getCcTaskList',
    'SOfCH': function (_0x4c4175, _0x9d81ea) {
      return _0x4c4175 === _0x9d81ea;
    },
    'BbEaB': _0x5c3d('334', 'o7vD'),
    'KwxqA': function (_0x17c825, _0x20e7b5) {
      return _0x17c825 !== _0x20e7b5;
    },
    'woXdF': 'TuOnv',
    'TuNAW': _0x5c3d('335', 'RJ[D'),
    'tPWLb': function (_0x1eac18, _0x427815) {
      return _0x1eac18(_0x427815);
    },
    'Owrll': function (_0x5c1f32, _0x606adf) {
      return _0x5c1f32(_0x606adf);
    },
    'tNLwl': 'application/json,\x20text/plain,\x20*/*',
    'AMSCM': _0x5c3d('336', '$lyO'),
    'EWTON': 'zh-cn',
    'vGUdI': 'keep-alive',
    'mGCLo': _0x5c3d('337', 'I($f'),
    'GyDUe': 'https://h5.m.jd.com',
    'jdOlv': _0x5c3d('338', 'J(]D'),
    'AcdpN': _0x5c3d('339', 'lR53'),
    'Wojio': _0x5c3d('33a', 'p4$W')
  };
  let _0x5c7395 = '';
  return new Promise(_0x255188 => {
    var _0x1f300a = {
      'fyhOR': _0x1d4147[_0x5c3d('33b', 'pqb(')], 'lQwmV': _0x5c3d('33c', 'inWv'), 'WNLau': _0x1d4147[_0x5c3d('33d', '4%Cg')], 'hrQuN': _0x1d4147['cUVqh'], 'SsPRb': function (_0xa4479f, _0x4d8cf0) {
        return _0x1d4147[_0x5c3d('33e', 'p4$W')](_0xa4479f, _0x4d8cf0);
      }, 'SQWEn': _0x1d4147[_0x5c3d('33f', 'n@nG')], 'PndHZ': function (_0x586b27, _0x59a869) {
        return _0x586b27 === _0x59a869;
      }, 'KoPGq': _0x1d4147[_0x5c3d('340', 'XpI[')], 'gETOZ': _0x5c3d('341', ']loZ'), 'VUfQG': _0x1d4147[_0x5c3d('342', 'GEp&')]
    };
    if (_0xc3ff0a === _0x1d4147[_0x5c3d('343', 'Vm#Z')]) {
      _0x5c7395 = 'https://api.m.jd.com/client.action?functionId=' + _0xc3ff0a + _0x5c3d('344', 'XpI[') + _0x1d4147[_0x5c3d('33e', 'p4$W')](escape, JSON[_0x5c3d('1aa', 'qi!x')](_0x2374b3)) + _0x5c3d('345', 'DI]G');
    } else if (_0x1d4147[_0x5c3d('346', '1xX6')](_0xc3ff0a, _0x1d4147[_0x5c3d('347', 'GR%&')])) {
      if (_0x1d4147['KwxqA'](_0x1d4147['woXdF'], _0x1d4147[_0x5c3d('348', ']G5@')])) {
        _0x5c7395 = _0x5c3d('349', 'm0Q1') + _0xc3ff0a + _0x5c3d('34a', '8ye]') + _0x1d4147[_0x5c3d('34b', 'Jnb7')](escape, JSON['stringify'](_0x2374b3)) + _0x5c3d('34c', 'P3j6');
      } else {
        const _0x557ef4 = $[_0x5c3d('34d', 'afg[')][_0x1f300a[_0x5c3d('34e', 'QeIx')]][_0x1f300a[_0x5c3d('34f', 'DI]G')]][_0x5c3d('350', '$lyO')] || [];
        $['hasSendNumber'] = $['h5activityIndex'][_0x5c3d('157', 'I($f')][_0x1f300a[_0x5c3d('351', 'pqb(')]][_0x1f300a[_0x5c3d('352', 'p4$W')]];
        if ($['h5activityIndex'][_0x5c3d('353', 's2t@')]['result'][_0x1f300a[_0x5c3d('354', 'DI]G')]]) {
          $['assistants'] = $['h5activityIndex'][_0x5c3d('122', 'dECe')][_0x1f300a[_0x5c3d('355', 'oaTe')]][_0x1f300a[_0x5c3d('356', '$lyO')]][_0x5c3d('357', 'lR53')] || 0x0;
        }
      }
    }
    const _0x49ddb5 = {
      'url': _0x5c7395,
      'body': _0x5c3d('358', 'DI]G') + _0x1d4147[_0x5c3d('359', 'oaTe')](escape, JSON[_0x5c3d('35a', 'oaTe')](_0x2374b3)),
      'headers': {
        'Accept': _0x1d4147[_0x5c3d('35b', 'm)@n')],
        'Accept-Encoding': _0x1d4147[_0x5c3d('35c', 'RJ[D')],
        'Accept-Language': _0x1d4147[_0x5c3d('35d', '4%Cg')],
        'Connection': _0x1d4147[_0x5c3d('35e', '@YZ@')],
        'Content-Length': '63',
        'Content-Type': _0x5c3d('35f', 'piza'),
        'Host': _0x1d4147['mGCLo'],
        'Origin': _0x1d4147['GyDUe'],
        'Cookie': cookie,
        'Referer': 'https://h5.m.jd.com/babelDiy/Zeus/4ZK4ZpvoSreRB92RRo8bpJAQNoTq/index.html',
        'User-Agent': $[_0x5c3d('360', 'lR53')]() ? process[_0x5c3d('361', 'qt1B')][_0x5c3d('362', 'afg[')] ? process[_0x5c3d('305', '1xX6')][_0x5c3d('363', 'o%Hs')] : require(_0x1d4147[_0x5c3d('364', 'I($f')])[_0x5c3d('365', ')4(@')] : $[_0x5c3d('366', '8ye]')](_0x1d4147[_0x5c3d('367', 'SI!Z')]) ? $['getdata'](_0x1d4147[_0x5c3d('368', 'Vm#Z')]) : _0x1d4147[_0x5c3d('369', 'NJq]')]
      }
    };
    $[_0x5c3d('36a', 'o7vD')](_0x49ddb5, async (_0x77d0b0, _0x4b4e13, _0x395ac5) => {
      var _0x4d439d = {
        'jzRda': function (_0x18145d, _0x4e0861) {
          return _0x1f300a['SsPRb'](_0x18145d, _0x4e0861);
        }, 'EqNmc': _0x5c3d('36b', 'm)@n'), 'BPizI': _0x1f300a[_0x5c3d('36c', 'inWv')], 'gzTpY': _0x1f300a['fyhOR']
      };
      if (_0x1f300a['PndHZ'](_0x1f300a[_0x5c3d('36d', 'pqb(')], _0x5c3d('36e', 'fCgc'))) {
        try {
          if (_0x77d0b0) {
            console[_0x5c3d('47', 'o7vD')]('' + JSON[_0x5c3d('d8', ']loZ')](_0x77d0b0));
            console['log']($[_0x5c3d('250', 'o7vD')] + '\x20API请求失败，请检查网路重试');
          } else {
            if (_0x395ac5) {
              if (_0x1f300a[_0x5c3d('36f', 'XpI[')](_0x4f75cc, '1') && _0x1f300a['PndHZ'](_0xc3ff0a, 'reportCcTask')) console['log'](_0x5c3d('370', 'f$@p') + _0x395ac5);
            }
          }
        } catch (_0x42e673) {
          if (_0x1f300a['gETOZ'] !== 'bFxbc') {
            _0x4d439d[_0x5c3d('371', '1xX6')](_0x255188, _0x395ac5);
          } else {
            $[_0x5c3d('372', 'f$@p')](_0x42e673, _0x4b4e13);
          }
        } finally {
          if (_0x1f300a['VUfQG'] !== _0x1f300a[_0x5c3d('373', 'Ykax')]) {
            $['assistants'] = $[_0x5c3d('374', '1xX6')][_0x5c3d('375', 'qi!x')][_0x1f300a[_0x5c3d('355', 'oaTe')]][_0x1f300a[_0x5c3d('356', '$lyO')]]['length'] || 0x0;
          } else {
            _0x255188();
          }
        }
      } else {
        console[_0x5c3d('159', '$[C2')](_0x5c3d('376', '8ye]') + _0x395ac5[_0x5c3d('155', ']G5@')][_0x4d439d[_0x5c3d('377', 'P3j6')]][_0x4d439d[_0x5c3d('378', ']G5@')]]);
        $[_0x5c3d('379', '96*f')][_0x5c3d('37a', 'GR%&')](_0x395ac5[_0x4d439d['gzTpY']][_0x4d439d[_0x5c3d('37b', 'lR53')]][_0x5c3d('37c', 'KKA&')]);
      }
    });
  });
}

function getAuthorShareCode(_0x353afa = _0x5c3d('37d', 'o%Hs')) {
  return []
}


function taskUrl(_0x175cd6, _0x300a9f) {
  var _0x50f081 = {
    'IGOfn': function (_0xda5f5f, _0x1a7ab9) {
      return _0xda5f5f * _0x1a7ab9;
    }, 'lAZbU': _0x5c3d('3a0', 'n@nG'), 'IxlIf': _0x5c3d('3a1', 'sEZ['), 'eoOQF': 'gzip,\x20deflate,\x20br', 'mlojz': 'keep-alive', 'akXzH': _0x5c3d('3a2', 'DI]G'), 'gLwEl': function (_0x53956b, _0x478649) {
      return _0x53956b(_0x478649);
    }, 'fazKK': 'JDUA', 'DTiEG': _0x5c3d('33a', 'p4$W'), 'PKOHb': _0x5c3d('3a3', 's2t@')
  };
  return {
    'url': JD_API_HOST + _0x5c3d('3a4', '4%Cg') + _0x175cd6 + '&loginType=2&client=jd_mp_h5&t=' + _0x50f081[_0x5c3d('3a5', 'o7vD')](new Date()[_0x5c3d('2df', 'p4$W')](), 0x3e8),
    'body': 'body=' + JSON['stringify'](_0x300a9f),
    'headers': {
      'Host': _0x50f081[_0x5c3d('3a6', '@YZ@')],
      'Content-Type': _0x50f081[_0x5c3d('3a7', 'GEp&')],
      'Origin': _0x5c3d('3a8', 'DI]G'),
      'Accept-Encoding': _0x50f081[_0x5c3d('3a9', 'f$@p')],
      'Cookie': cookie,
      'Connection': _0x50f081[_0x5c3d('3aa', 'GR%&')],
      'Accept': _0x50f081[_0x5c3d('3ab', 'o%Hs')],
      'User-Agent': $[_0x5c3d('3ac', 'oaTe')]() ? process['env'][_0x5c3d('3ad', '(S7p')] ? process[_0x5c3d('3ae', 'Ykax')][_0x5c3d('3af', 'XpI[')] : _0x50f081[_0x5c3d('3b0', 'oaTe')](require, _0x5c3d('2e7', 'KKA&'))[_0x5c3d('3b1', 'Vm#Z')] : $[_0x5c3d('3b2', 'o%Hs')](_0x50f081[_0x5c3d('3b3', 'piza')]) ? $['getdata'](_0x5c3d('3b4', 'OghG')) : _0x50f081['DTiEG'],
      'Referer': _0x50f081['PKOHb'],
      'Content-Length': '36',
      'Accept-Language': 'zh-cn'
    }
  };
};_0xode = 'jsjiami.com.v6';


function TotalBean() {
  return new Promise(async resolve => {
    const options = {
      url: "https://me-api.jd.com/user_new/info/GetJDUserInfoUnion",
      headers: {
        Host: "me-api.jd.com",
        Accept: "*/*",
        Connection: "keep-alive",
        Cookie: cookie,
        "User-Agent": $.isNode() ? (process.env.JD_USER_AGENT ? process.env.JD_USER_AGENT : (require('./USER_AGENTS').USER_AGENT)) : ($.getdata('JDUA') ? $.getdata('JDUA') : "jdapp;iPhone;9.4.4;14.3;network/4g;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1"),
        "Accept-Language": "zh-cn",
        "Referer": "https://home.m.jd.com/myJd/newhome.action?sceneval=2&ufc=&",
        "Accept-Encoding": "gzip, deflate, br"
      }
    }
    $.get(options, (err, resp, data) => {
      try {
        if (err) {
          $.logErr(err)
        } else {
          if (data) {
            data = JSON.parse(data);
            if (data['retcode'] === "1001") {
              $.isLogin = false; //cookie过期
              return;
            }
            if (data['retcode'] === "0" && data.data && data.data.hasOwnProperty("userInfo")) {
              $.nickName = data.data.userInfo.baseInfo.nickname;
            }
          } else {
            $.log('京东服务器返回空数据');
          }
        }
      } catch (e) {
        $.logErr(e)
      } finally {
        resolve();
      }
    })
  })
}

function jsonParse(str) {
  if (typeof str == "string") {
    try {
      return JSON.parse(str);
    } catch (e) {
      console.log(e);
      $.msg($.name, '', '请勿随意在BoxJs输入框修改内容\n建议通过脚本去获取cookie')
      return [];
    }
  }
}

// prettier-ignore
// md5
!function (n) {
  function t(n, t) {
    var r = (65535 & n) + (65535 & t);
    return (n >> 16) + (t >> 16) + (r >> 16) << 16 | 65535 & r
  }

  function r(n, t) {
    return n << t | n >>> 32 - t
  }

  function e(n, e, o, u, c, f) {
    return t(r(t(t(e, n), t(u, f)), c), o)
  }

  function o(n, t, r, o, u, c, f) {
    return e(t & r | ~t & o, n, t, u, c, f)
  }

  function u(n, t, r, o, u, c, f) {
    return e(t & o | r & ~o, n, t, u, c, f)
  }

  function c(n, t, r, o, u, c, f) {
    return e(t ^ r ^ o, n, t, u, c, f)
  }

  function f(n, t, r, o, u, c, f) {
    return e(r ^ (t | ~o), n, t, u, c, f)
  }

  function i(n, r) {
    n[r >> 5] |= 128 << r % 32, n[14 + (r + 64 >>> 9 << 4)] = r;
    var e, i, a, d, h, l = 1732584193, g = -271733879, v = -1732584194, m = 271733878;
    for (e = 0; e < n.length; e += 16) {
      i = l, a = g, d = v, h = m, g = f(g = f(g = f(g = f(g = c(g = c(g = c(g = c(g = u(g = u(g = u(g = u(g = o(g = o(g = o(g = o(g, v = o(v, m = o(m, l = o(l, g, v, m, n[e], 7, -680876936), g, v, n[e + 1], 12, -389564586), l, g, n[e + 2], 17, 606105819), m, l, n[e + 3], 22, -1044525330), v = o(v, m = o(m, l = o(l, g, v, m, n[e + 4], 7, -176418897), g, v, n[e + 5], 12, 1200080426), l, g, n[e + 6], 17, -1473231341), m, l, n[e + 7], 22, -45705983), v = o(v, m = o(m, l = o(l, g, v, m, n[e + 8], 7, 1770035416), g, v, n[e + 9], 12, -1958414417), l, g, n[e + 10], 17, -42063), m, l, n[e + 11], 22, -1990404162), v = o(v, m = o(m, l = o(l, g, v, m, n[e + 12], 7, 1804603682), g, v, n[e + 13], 12, -40341101), l, g, n[e + 14], 17, -1502002290), m, l, n[e + 15], 22, 1236535329), v = u(v, m = u(m, l = u(l, g, v, m, n[e + 1], 5, -165796510), g, v, n[e + 6], 9, -1069501632), l, g, n[e + 11], 14, 643717713), m, l, n[e], 20, -373897302), v = u(v, m = u(m, l = u(l, g, v, m, n[e + 5], 5, -701558691), g, v, n[e + 10], 9, 38016083), l, g, n[e + 15], 14, -660478335), m, l, n[e + 4], 20, -405537848), v = u(v, m = u(m, l = u(l, g, v, m, n[e + 9], 5, 568446438), g, v, n[e + 14], 9, -1019803690), l, g, n[e + 3], 14, -187363961), m, l, n[e + 8], 20, 1163531501), v = u(v, m = u(m, l = u(l, g, v, m, n[e + 13], 5, -1444681467), g, v, n[e + 2], 9, -51403784), l, g, n[e + 7], 14, 1735328473), m, l, n[e + 12], 20, -1926607734), v = c(v, m = c(m, l = c(l, g, v, m, n[e + 5], 4, -378558), g, v, n[e + 8], 11, -2022574463), l, g, n[e + 11], 16, 1839030562), m, l, n[e + 14], 23, -35309556), v = c(v, m = c(m, l = c(l, g, v, m, n[e + 1], 4, -1530992060), g, v, n[e + 4], 11, 1272893353), l, g, n[e + 7], 16, -155497632), m, l, n[e + 10], 23, -1094730640), v = c(v, m = c(m, l = c(l, g, v, m, n[e + 13], 4, 681279174), g, v, n[e], 11, -358537222), l, g, n[e + 3], 16, -722521979), m, l, n[e + 6], 23, 76029189), v = c(v, m = c(m, l = c(l, g, v, m, n[e + 9], 4, -640364487), g, v, n[e + 12], 11, -421815835), l, g, n[e + 15], 16, 530742520), m, l, n[e + 2], 23, -995338651), v = f(v, m = f(m, l = f(l, g, v, m, n[e], 6, -198630844), g, v, n[e + 7], 10, 1126891415), l, g, n[e + 14], 15, -1416354905), m, l, n[e + 5], 21, -57434055), v = f(v, m = f(m, l = f(l, g, v, m, n[e + 12], 6, 1700485571), g, v, n[e + 3], 10, -1894986606), l, g, n[e + 10], 15, -1051523), m, l, n[e + 1], 21, -2054922799), v = f(v, m = f(m, l = f(l, g, v, m, n[e + 8], 6, 1873313359), g, v, n[e + 15], 10, -30611744), l, g, n[e + 6], 15, -1560198380), m, l, n[e + 13], 21, 1309151649), v = f(v, m = f(m, l = f(l, g, v, m, n[e + 4], 6, -145523070), g, v, n[e + 11], 10, -1120210379), l, g, n[e + 2], 15, 718787259), m, l, n[e + 9], 21, -343485551), l = t(l, i), g = t(g, a), v = t(v, d), m = t(m, h)
    }
    return [l, g, v, m]
  }

  function a(n) {
    var t, r = "", e = 32 * n.length;
    for (t = 0; t < e; t += 8) {
      r += String.fromCharCode(n[t >> 5] >>> t % 32 & 255)
    }
    return r
  }

  function d(n) {
    var t, r = [];
    for (r[(n.length >> 2) - 1] = void 0, t = 0; t < r.length; t += 1) {
      r[t] = 0
    }
    var e = 8 * n.length;
    for (t = 0; t < e; t += 8) {
      r[t >> 5] |= (255 & n.charCodeAt(t / 8)) << t % 32
    }
    return r
  }

  function h(n) {
    return a(i(d(n), 8 * n.length))
  }

  function l(n, t) {
    var r, e, o = d(n), u = [], c = [];
    for (u[15] = c[15] = void 0, o.length > 16 && (o = i(o, 8 * n.length)), r = 0; r < 16; r += 1) {
      u[r] = 909522486 ^ o[r], c[r] = 1549556828 ^ o[r]
    }
    return e = i(u.concat(d(t)), 512 + 8 * t.length), a(i(c.concat(e), 640))
  }

  function g(n) {
    var t, r, e = "";
    for (r = 0; r < n.length; r += 1) {
      t = n.charCodeAt(r), e += "0123456789abcdef".charAt(t >>> 4 & 15) + "0123456789abcdef".charAt(15 & t)
    }
    return e
  }

  function v(n) {
    return unescape(encodeURIComponent(n))
  }

  function m(n) {
    return h(v(n))
  }

  function p(n) {
    return g(m(n))
  }

  function s(n, t) {
    return l(v(n), v(t))
  }

  function C(n, t) {
    return g(s(n, t))
  }

  function A(n, t, r) {
    return t ? r ? s(t, n) : C(t, n) : r ? m(n) : p(n)
  }

  $.md5 = A
}(this);

function Env(t, e) {
  "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0);

  class s {
    constructor(t) {
      this.env = t
    }

    send(t, e = "GET") {
      t = "string" == typeof t ? {url: t} : t;
      let s = this.get;
      return "POST" === e && (s = this.post), new Promise((e, i) => {
        s.call(this, t, (t, s, r) => {
          t ? i(t) : e(s)
        })
      })
    }

    get(t) {
      return this.send.call(this.env, t)
    }

    post(t) {
      return this.send.call(this.env, t, "POST")
    }
  }

  return new class {
    constructor(t, e) {
      this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `🔔${this.name}, 开始!`)
    }

    isNode() {
      return "undefined" != typeof module && !!module.exports
    }

    isQuanX() {
      return "undefined" != typeof $task
    }

    isSurge() {
      return "undefined" != typeof $httpClient && "undefined" == typeof $loon
    }

    isLoon() {
      return "undefined" != typeof $loon
    }

    toObj(t, e = null) {
      try {
        return JSON.parse(t)
      } catch {
        return e
      }
    }

    toStr(t, e = null) {
      try {
        return JSON.stringify(t)
      } catch {
        return e
      }
    }

    getjson(t, e) {
      let s = e;
      const i = this.getdata(t);
      if (i) try {
        s = JSON.parse(this.getdata(t))
      } catch {
      }
      return s
    }

    setjson(t, e) {
      try {
        return this.setdata(JSON.stringify(t), e)
      } catch {
        return !1
      }
    }

    getScript(t) {
      return new Promise(e => {
        this.get({url: t}, (t, s, i) => e(i))
      })
    }

    runScript(t, e) {
      return new Promise(s => {
        let i = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        i = i ? i.replace(/\n/g, "").trim() : i;
        let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r;
        const [o, h] = i.split("@"), n = {url: `http://${h}/v1/scripting/evaluate`, body: {script_text: t, mock_type: "cron", timeout: r}, headers: {"X-Key": o, Accept: "*/*"}};
        this.post(n, (t, e, i) => s(i))
      }).catch(t => this.logErr(t))
    }

    loaddata() {
      if (!this.isNode()) return {};
      {
        this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e);
        if (!s && !i) return {};
        {
          const i = s ? t : e;
          try {
            return JSON.parse(this.fs.readFileSync(i))
          } catch (t) {
            return {}
          }
        }
      }
    }

    writedata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e), r = JSON.stringify(this.data);
        s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r)
      }
    }

    lodash_get(t, e, s) {
      const i = e.replace(/\[(\d+)\]/g, ".$1").split(".");
      let r = t;
      for (const t of i) if (r = Object(r)[t], void 0 === r) return s;
      return r
    }

    lodash_set(t, e, s) {
      return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t)
    }

    getdata(t) {
      let e = this.getval(t);
      if (/^@/.test(t)) {
        const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : "";
        if (r) try {
          const t = JSON.parse(r);
          e = t ? this.lodash_get(t, i, "") : e
        } catch (t) {
          e = ""
        }
      }
      return e
    }

    setdata(t, e) {
      let s = !1;
      if (/^@/.test(e)) {
        const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e), o = this.getval(i), h = i ? "null" === o ? null : o || "{}" : "{}";
        try {
          const e = JSON.parse(h);
          this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i)
        } catch (e) {
          const o = {};
          this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i)
        }
      } else s = this.setval(t, e);
      return s
    }

    getval(t) {
      return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null
    }

    setval(t, e) {
      return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null
    }

    initGotEnv(t) {
      this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar))
    }

    get(t, e = (() => {
    })) {
      t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {"X-Surge-Skip-Scripting": !1})), $httpClient.get(t, (t, s, i) => {
        !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i)
      })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {hints: !1})), $task.fetch(t).then(t => {
        const {statusCode: s, statusCode: i, headers: r, body: o} = t;
        e(null, {status: s, statusCode: i, headers: r, body: o}, o)
      }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => {
        try {
          if (t.headers["set-cookie"]) {
            const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
            s && this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar
          }
        } catch (t) {
          this.logErr(t)
        }
      }).then(t => {
        const {statusCode: s, statusCode: i, headers: r, body: o} = t;
        e(null, {status: s, statusCode: i, headers: r, body: o}, o)
      }, t => {
        const {message: s, response: i} = t;
        e(s, i, i && i.body)
      }))
    }

    post(t, e = (() => {
    })) {
      if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {"X-Surge-Skip-Scripting": !1})), $httpClient.post(t, (t, s, i) => {
        !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i)
      }); else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {hints: !1})), $task.fetch(t).then(t => {
        const {statusCode: s, statusCode: i, headers: r, body: o} = t;
        e(null, {status: s, statusCode: i, headers: r, body: o}, o)
      }, t => e(t)); else if (this.isNode()) {
        this.initGotEnv(t);
        const {url: s, ...i} = t;
        this.got.post(s, i).then(t => {
          const {statusCode: s, statusCode: i, headers: r, body: o} = t;
          e(null, {status: s, statusCode: i, headers: r, body: o}, o)
        }, t => {
          const {message: s, response: i} = t;
          e(s, i, i && i.body)
        })
      }
    }

    time(t, e = null) {
      const s = e ? new Date(e) : new Date;
      let i = {"M+": s.getMonth() + 1, "d+": s.getDate(), "H+": s.getHours(), "m+": s.getMinutes(), "s+": s.getSeconds(), "q+": Math.floor((s.getMonth() + 3) / 3), S: s.getMilliseconds()};
      /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length)));
      return t
    }

    msg(e = t, s = "", i = "", r) {
      const o = t => {
        if (!t) return t;
        if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? {"open-url": t} : this.isSurge() ? {url: t} : void 0;
        if ("object" == typeof t) {
          if (this.isLoon()) {
            let e = t.openUrl || t.url || t["open-url"], s = t.mediaUrl || t["media-url"];
            return {openUrl: e, mediaUrl: s}
          }
          if (this.isQuanX()) {
            let e = t["open-url"] || t.url || t.openUrl, s = t["media-url"] || t.mediaUrl;
            return {"open-url": e, "media-url": s}
          }
          if (this.isSurge()) {
            let e = t.url || t.openUrl || t["open-url"];
            return {url: e}
          }
        }
      };
      if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))), !this.isMuteLog) {
        let t = ["", "==============📣系统通知📣=============="];
        t.push(e), s && t.push(s), i && t.push(i), console.log(t.join("\n")), this.logs = this.logs.concat(t)
      }
    }

    log(...t) {
      t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator))
    }

    logErr(t, e) {
      const s = !this.isSurge() && !this.isQuanX() && !this.isLoon();
      s ? this.log("", `❗️${this.name}, 错误!`, t.stack) : this.log("", `❗️${this.name}, 错误!`, t)
    }

    wait(t) {
      return new Promise(e => setTimeout(e, t))
    }

    done(t = {}) {
      const e = (new Date).getTime(), s = (e - this.startTime) / 1e3;
      this.log("", `🔔${this.name}, 结束! 🕛 ${s} 秒`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t)
    }
  }(t, e)
}
