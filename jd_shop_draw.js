/*
店铺抽奖
export jd_shop_draw_ids="shopId&shopId&shopId"              必须
export jd_shop_draw_num="15"                                不设置默认最多跑15个号
cron "2 2 29 2 *" jd_shop_draw.js
 */
const $ = new Env('店铺抽奖');
const notify = $.isNode() ? require('./sendNotify') : '';
const jdCookieNode = $.isNode() ? require('./jdCookie.js') : '';


var __encode ='jsjiami.com',_a={}, _0xb483=["\x5F\x64\x65\x63\x6F\x64\x65","\x68\x74\x74\x70\x3A\x2F\x2F\x77\x77\x77\x2E\x73\x6F\x6A\x73\x6F\x6E\x2E\x63\x6F\x6D\x2F\x6A\x61\x76\x61\x73\x63\x72\x69\x70\x74\x6F\x62\x66\x75\x73\x63\x61\x74\x6F\x72\x2E\x68\x74\x6D\x6C"];(function(_0xd642x1){_0xd642x1[_0xb483[0]]= _0xb483[1]})(_a);var __Oxf0c80=["","\x6A\x64\x5F\x73\x68\x6F\x70\x5F\x64\x72\x61\x77\x5F\x69\x64\x73","\x65\x6E\x76","\x6A\x64\x5F\x73\x68\x6F\x70\x5F\x64\x72\x61\x77\x5F\x6E\x75\x6D","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x61\x70\x69\x2E\x6D\x2E\x6A\x64\x2E\x63\x6F\x6D\x2F\x63\x6C\x69\x65\x6E\x74\x2E\x61\x63\x74\x69\x6F\x6E","\x26","\x69\x6E\x64\x65\x78\x4F\x66","\x73\x70\x6C\x69\x74","\x69\x73\x4E\x6F\x64\x65","\x70\x75\x73\x68","\x66\x6F\x72\x45\x61\x63\x68","\x6B\x65\x79\x73","\x4A\x44\x5F\x44\x45\x42\x55\x47","\x66\x61\x6C\x73\x65","\x6C\x6F\x67","\x66\x69\x6C\x74\x65\x72","\x43\x6F\x6F\x6B\x69\x65\x4A\x44","\x67\x65\x74\x64\x61\x74\x61","\x43\x6F\x6F\x6B\x69\x65\x4A\x44\x32","\x63\x6F\x6F\x6B\x69\x65","\x6D\x61\x70","\x43\x6F\x6F\x6B\x69\x65\x73\x4A\x44","\x5B\x5D","\x64\x6F\x6E\x65","\x66\x69\x6E\x61\x6C\x6C\x79","\u274C\x20","\x6E\x61\x6D\x65","\x2C\x20\u5931\u8D25\x21\x20\u539F\u56E0\x3A\x20","\x21","\x63\x61\x74\x63\x68","\u3010\u63D0\u793A\u3011\u8BF7\u5148\u83B7\u53D6\u4EAC\u4E1C\u8D26\u53F7\u4E00\x63\x6F\x6F\x6B\x69\x65\x0A\u76F4\u63A5\u4F7F\u7528\x4E\x6F\x62\x79\x44\x61\u7684\u4EAC\u4E1C\u7B7E\u5230\u83B7\u53D6","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x62\x65\x61\x6E\x2E\x6D\x2E\x6A\x64\x2E\x63\x6F\x6D\x2F\x62\x65\x61\x6E\x2F\x73\x69\x67\x6E\x49\x6E\x64\x65\x78\x2E\x61\x63\x74\x69\x6F\x6E","\x6D\x73\x67","\x6C\x65\x6E\x67\x74\x68","\u3010\u4FDD\u62A4\u73AF\u5883\u3011\x68\x74\x74\x70\x73\x3A\x2F\x2F\x74\x2E\x6D\x65\x2F\x70\x72\x6F\x65\x6E\x76\x63\x20\u63D0\u9192\u4F60\x3A","\x65\x78\x70\x6F\x72\x74\x20\x6A\x64\x5F\x73\x68\x6F\x70\x5F\x64\x72\x61\x77\x5F\x69\x64\x73\x3D\x22\x73\x68\x6F\x70\x31\x26\x73\x68\x6F\x70\x32\x26\x73\x68\x6F\x70\x33\x2E\x2E\x2E\x22\x20\u672A\u8BBE\u7F6E\x20\u9000\u51FA\uFF01\uFF01\uFF01","\u52A0\u5165\u9891\u9053\x3A\x20\x68\x74\x74\x70\x73\x3A\x2F\x2F\x74\x2E\x6D\x65\x2F\x70\x72\x6F\x65\x6E\x76\x63","\x69\x69","\x73\x68\x6F\x70\x49\x64","\u5E97\u94FA\x49\x64\x3A\x20","\x55\x73\x65\x72\x4E\x61\x6D\x65","\x6D\x61\x74\x63\x68","\x69\x6E\x64\x65\x78","\x69\x73\x4C\x6F\x67\x69\x6E","\x6E\x69\x63\x6B\x4E\x61\x6D\x65","\x61\x63\x74\x69\x76\x69\x74\x79\x49\x64","\x2A\x2A\x2A\x2A\x2A\x2A\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7","\u3011","\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A","\u3010\u63D0\u793A\u3011\x63\x6F\x6F\x6B\x69\x65\u5DF2\u5931\u6548","\u4EAC\u4E1C\u8D26\u53F7","\x20","\x5C\x6E\u8BF7\u91CD\u65B0\u767B\u5F55\u83B7\u53D6\x5C\x6E\x68\x74\x74\x70\x73\x3A\x2F\x2F\x62\x65\x61\x6E\x2E\x6D\x2E\x6A\x64\x2E\x63\x6F\x6D\x2F\x62\x65\x61\x6E\x2F\x73\x69\x67\x6E\x49\x6E\x64\x65\x78\x2E\x61\x63\x74\x69\x6F\x6E","\x63\x6F\x6F\x6B\x69\x65\u5DF2\u5931\u6548\x20\x2D\x20","\x5C\x6E\u8BF7\u91CD\u65B0\u767B\u5F55\u83B7\u53D6\x63\x6F\x6F\x6B\x69\x65","\x73\x65\x6E\x64\x4E\x6F\x74\x69\x66\x79","\u6700\u591A\u6267\u884C","\u4E2A\u53F7\uFF0C\x20\u9000\u51FA\uFF01","\x72\x61\x6E\x64\x6F\x6D","\x77\x61\x69\x74","\x76\x65\x6E\x64\x65\x72\x49\x64\x3A\x20","\x76\x65\x6E\x64\x65\x72\x49\x64","\u53EF\u80FD\u662F\u9ED1\u53F7\u4E5F\u53EF\u80FD\u662F\u6D3B\u52A8\u7ED3\u675F\u4E86","\x43\x41\x53\x48\x5F\x4E\x4F\x54\x49\x46\x59\x5F\x43\x4F\x4E\x54\x52\x4F\x4C","\x30\x2E","\x6D\x5F\x64\x65\x73\x74\x69\x6E\x61\x74\x69\x6F\x6E\x5F\x70\x61\x67\x65\x5F\x6E\x75\x6C\x6C","\x61\x70\x70\x2D\x73\x68\x6F\x70","\x73\x68\x6F\x70\x5F\x61\x70\x70\x5F\x68\x6F\x6D\x65\x5F\x68\x6F\x6D\x65","\x67\x65\x74\x53\x68\x6F\x70\x48\x6F\x6D\x65\x41\x63\x74\x69\x76\x69\x74\x79\x49\x6E\x66\x6F","\x73\x74\x72\x69\x6E\x67\x69\x66\x79","\x67\x65\x74\x53\x68\x6F\x70\x48\x6F\x6D\x65\x41\x63\x74\x69\x76\x69\x74\x79\x49\x6E\x66\x6F\x20\x41\x50\x49\u8BF7\u6C42\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u7F51\u8DEF\u91CD\u8BD5","\x70\x61\x72\x73\x65","\x63\x6F\x64\x65","\x72\x65\x73\x75\x6C\x74","\x73\x68\x6F\x70\x47\x69\x66\x74\x73","\u5956\u54C1\x3A\x20","\x6C\x6F\x67\x45\x72\x72","\x70\x6F\x73\x74","\x67\x65\x74\x53\x68\x6F\x70\x48\x6F\x6D\x65\x42\x61\x73\x65\x49\x6E\x66\x6F","\x67\x65\x74\x53\x68\x6F\x70\x48\x6F\x6D\x65\x42\x61\x73\x65\x49\x6E\x66\x6F\x20\x41\x50\x49\u8BF7\u6C42\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u7F51\u8DEF\u91CD\u8BD5","\x73\x68\x6F\x70\x49\x6E\x66\x6F","\u7B2C","\u4E2A\u6D3B\u52A8","\x73\x69\x67\x6E\x41\x63\x74\x69\x76\x69\x74\x79\x52\x75\x6C\x65","\u6D3B\u52A8\x3A\x20","\x61\x77\x61\x72\x64\x4E\x61\x6D\x65","\u65F6\u95F4\x3A\x20","\x61\x63\x74\x69\x76\x69\x74\x79\x54\x69\x6D\x65","\u5956\u52B1\x3A\x20","\x61\x77\x61\x72\x64\x44\x65\x73\x63\x72\x69\x70\x74\x69\x6F\x6E","\x67\x65\x74\x53\x69\x67\x6E\x49\x6E\x66\x6F","\x67\x65\x74\x53\x69\x67\x6E\x49\x6E\x66\x6F\x20\x41\x50\x49\u8BF7\u6C42\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u7F51\u8DEF\u91CD\u8BD5","\x73\x68\x6F\x70\x5F\x61\x70\x70\x5F\x73\x69\x67\x6E\x5F\x68\x6F\x6D\x65","\x73\x69\x67\x6E","\x73\x69\x67\x6E\x20","\x73\x69\x67\x6E\x20\x41\x50\x49\u8BF7\u6C42\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u7F51\u8DEF\u91CD\u8BD5","\x73\x69\x67\x6E\x54\x69\x74\x6C\x65\x41\x74\x74\x61\x63\x68","\u606D\u559C\u4E2D\u5956","\u62BD\u5956\x3A\x20","\x73\x69\x67\x6E\x52\x65\x77\x61\x72\x64","\u62BD\u5956\x3A\x20\u7A7A\u6C14","\x68\x74\x74\x70\x3A\x2F\x2F\x68\x7A\x2E\x66\x65\x76\x65\x72\x72\x75\x6E\x2E\x74\x6F\x70\x3A\x39\x39\x2F\x73\x68\x61\x72\x65\x2F\x63\x61\x72\x64\x2F\x67\x65\x74\x53\x69\x67\x6E","\x66\x6E\x3D","\x26\x62\x6F\x64\x79\x3D","\x6A\x64\x61\x70\x70\x3B\x61\x6E\x64\x72\x6F\x69\x64\x3B\x31\x31\x2E\x33\x2E\x34\x3B\x6A\x64\x53\x75\x70\x70\x6F\x72\x74\x44\x61\x72\x6B\x4D\x6F\x64\x65\x2F\x30\x3B\x4D\x6F\x7A\x69\x6C\x6C\x61\x2F\x35\x2E\x30\x20\x28\x4C\x69\x6E\x75\x78\x3B\x20\x41\x6E\x64\x72\x6F\x69\x64\x20\x31\x30\x3B\x20\x50\x43\x43\x4D\x30\x6F\x20\x42\x75\x69\x6C\x64\x2F\x51\x4B\x51\x31\x2E\x31\x39\x31\x30\x32\x31\x2E\x30\x30\x32\x3B\x20\x77\x76\x29\x20\x41\x70\x70\x6C\x65\x57\x65\x62\x4B\x69\x74\x2F\x35\x33\x37\x2E\x33\x36\x20\x28\x4B\x48\x54\x4D\x4C\x2C\x20\x6C\x69\x6B\x65\x20\x47\x65\x63\x6B\x6F\x29\x20\x56\x65\x72\x73\x69\x6F\x6E\x2F\x34\x2E\x30\x20\x43\x68\x72\x6F\x6D\x65\x2F\x38\x39\x2E\x30\x2E\x34\x33\x38\x39\x2E\x37\x32\x20\x4D\x51\x51\x42\x72\x6F\x77\x73\x65\x72\x2F\x36\x2E\x32\x20\x54\x42\x53\x2F\x30\x34\x36\x30\x31\x31\x20\x4D\x6F\x62\x69\x6C\x65\x20\x53\x61\x66\x61\x72\x69\x2F\x35\x33\x37\x2E\x33\x36","\u8BF7\u6C42\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u7F51\u8DEF","\x62\x6F\x64\x79\x3D","\x61\x70\x70\x6C\x69\x63\x61\x74\x69\x6F\x6E\x2F\x78\x2D\x77\x77\x77\x2D\x66\x6F\x72\x6D\x2D\x75\x72\x6C\x65\x6E\x63\x6F\x64\x65\x64\x3B\x20\x63\x68\x61\x72\x73\x65\x74\x3D\x55\x54\x46\x2D\x38","\x6F\x6B\x68\x74\x74\x70\x2F\x33\x2E\x31\x32\x2E\x31\x3B\x6A\x64\x6D\x61\x6C\x6C\x3B\x61\x6E\x64\x72\x6F\x69\x64\x3B\x76\x65\x72\x73\x69\x6F\x6E\x2F\x31\x31\x2E\x33\x2E\x34\x3B\x62\x75\x69\x6C\x64\x2F","\x3B","\x7A\x68\x2D\x48\x61\x6E\x73\x2D\x43\x4E\x3B\x71\x3D\x31","\x67\x7A\x69\x70\x2C\x64\x65\x66\x6C\x61\x74\x65","\x3F\x66\x75\x6E\x63\x74\x69\x6F\x6E\x49\x64\x3D","\x61\x70\x69\x2E\x6D\x2E\x6A\x64\x2E\x63\x6F\x6D","\x6B\x65\x65\x70\x2D\x61\x6C\x69\x76\x65","\x61\x70\x70\x6C\x69\x63\x61\x74\x69\x6F\x6E\x2F\x6A\x73\x6F\x6E","\x68\x74\x74\x70\x3A\x2F\x2F\x77\x71\x2E\x6A\x64\x2E\x63\x6F\x6D\x2F\x77\x78\x61\x70\x70\x2F\x70\x61\x67\x65\x73\x2F\x68\x64\x2D\x69\x6E\x74\x65\x72\x61\x63\x74\x69\x6F\x6E\x2F\x69\x6E\x64\x65\x78\x2F\x69\x6E\x64\x65\x78","\x4A\x44\x5F\x55\x53\x45\x52\x5F\x41\x47\x45\x4E\x54","\x55\x53\x45\x52\x5F\x41\x47\x45\x4E\x54","\x2E\x2F\x55\x53\x45\x52\x5F\x41\x47\x45\x4E\x54\x53","\x4A\x44\x55\x41","\x6A\x64\x61\x70\x70\x3B\x69\x50\x68\x6F\x6E\x65\x3B\x39\x2E\x34\x2E\x34\x3B\x31\x34\x2E\x33\x3B\x6E\x65\x74\x77\x6F\x72\x6B\x2F\x34\x67\x3B\x4D\x6F\x7A\x69\x6C\x6C\x61\x2F\x35\x2E\x30\x20\x28\x69\x50\x68\x6F\x6E\x65\x3B\x20\x43\x50\x55\x20\x69\x50\x68\x6F\x6E\x65\x20\x4F\x53\x20\x31\x34\x5F\x33\x20\x6C\x69\x6B\x65\x20\x4D\x61\x63\x20\x4F\x53\x20\x58\x29\x20\x41\x70\x70\x6C\x65\x57\x65\x62\x4B\x69\x74\x2F\x36\x30\x35\x2E\x31\x2E\x31\x35\x20\x28\x4B\x48\x54\x4D\x4C\x2C\x20\x6C\x69\x6B\x65\x20\x47\x65\x63\x6B\x6F\x29\x20\x4D\x6F\x62\x69\x6C\x65\x2F\x31\x35\x45\x31\x34\x38\x3B\x73\x75\x70\x70\x6F\x72\x74\x4A\x44\x53\x48\x57\x4B\x2F\x31","\x7A\x68\x2D\x63\x6E","\x67\x7A\x69\x70\x2C\x20\x64\x65\x66\x6C\x61\x74\x65\x2C\x20\x62\x72","\x6F\x62\x6A\x65\x63\x74","\u4EAC\u4E1C\u670D\u52A1\u5668\u8BBF\u95EE\u6570\u636E\u4E3A\u7A7A\uFF0C\u8BF7\u68C0\u67E5\u81EA\u8EAB\u8BBE\u5907\u7F51\u7EDC\u60C5\u51B5","\x73\x74\x72\x69\x6E\x67","\u8BF7\u52FF\u968F\u610F\u5728\x42\x6F\x78\x4A\x73\u8F93\u5165\u6846\u4FEE\u6539\u5185\u5BB9\x0A\u5EFA\u8BAE\u901A\u8FC7\u811A\u672C\u53BB\u83B7\u53D6\x63\x6F\x6F\x6B\x69\x65","\x75\x6E\x64\x65\x66\x69\x6E\x65\x64","\u5220\u9664","\u7248\u672C\u53F7\uFF0C\x6A\x73\u4F1A\u5B9A","\u671F\u5F39\u7A97\uFF0C","\u8FD8\u8BF7\u652F\u6301\u6211\u4EEC\u7684\u5DE5\u4F5C","\x6A\x73\x6A\x69\x61","\x6D\x69\x2E\x63\x6F\x6D"];let cookiesArr=[],cookie=__Oxf0c80[0x0],message,allMessage=__Oxf0c80[0x0];let jd_shop_draw_ids=process[__Oxf0c80[0x2]][__Oxf0c80[0x1]]?process[__Oxf0c80[0x2]][__Oxf0c80[0x1]]:__Oxf0c80[0x0];let jd_shop_draw_num=process[__Oxf0c80[0x2]][__Oxf0c80[0x3]]?process[__Oxf0c80[0x2]][__Oxf0c80[0x3]]:15;const JD_API_HOST=__Oxf0c80[0x4];let ids=[];let idss=[];if(jd_shop_draw_ids[__Oxf0c80[0x6]](__Oxf0c80[0x5])>  -1){ids= jd_shop_draw_ids[__Oxf0c80[0x7]](__Oxf0c80[0x5])}else {ids= [jd_shop_draw_ids]};if($[__Oxf0c80[0x8]]()){Object[__Oxf0c80[0xb]](jdCookieNode)[__Oxf0c80[0xa]]((_0x7197xa)=>{cookiesArr[__Oxf0c80[0x9]](jdCookieNode[_0x7197xa])});if(process[__Oxf0c80[0x2]][__Oxf0c80[0xc]]&& process[__Oxf0c80[0x2]][__Oxf0c80[0xc]]=== __Oxf0c80[0xd]){console[__Oxf0c80[0xe]]= ()=>{}}}else {cookiesArr= [$[__Oxf0c80[0x11]](__Oxf0c80[0x10]),$[__Oxf0c80[0x11]](__Oxf0c80[0x12]),...jsonParse($[__Oxf0c80[0x11]](__Oxf0c80[0x15])|| __Oxf0c80[0x16])[__Oxf0c80[0x14]]((_0x7197xa)=>{return _0x7197xa[__Oxf0c80[0x13]]})][__Oxf0c80[0xf]]((_0x7197xa)=>{return !!_0x7197xa})};!(async ()=>{if(!cookiesArr[0x0]){$[__Oxf0c80[0x20]]($[__Oxf0c80[0x1a]],__Oxf0c80[0x1e],__Oxf0c80[0x1f],{"\x6F\x70\x65\x6E\x2D\x75\x72\x6C":__Oxf0c80[0x1f]});return};if(ids[__Oxf0c80[0x21]]< 1||  !jd_shop_draw_ids){console[__Oxf0c80[0xe]](`${__Oxf0c80[0x22]}`);console[__Oxf0c80[0xe]](`${__Oxf0c80[0x23]}`);return};console[__Oxf0c80[0xe]](__Oxf0c80[0x24]);for(let _0x7197xc=0;_0x7197xc< ids[__Oxf0c80[0x21]];_0x7197xc++){$[__Oxf0c80[0x25]]= _0x7197xc+ 1;$[__Oxf0c80[0x26]]= ids[_0x7197xc];console[__Oxf0c80[0xe]]();console[__Oxf0c80[0xe]](`${__Oxf0c80[0x27]}${$[__Oxf0c80[0x26]]}${__Oxf0c80[0x0]}`);for(let _0x7197xd=0;_0x7197xd< cookiesArr[__Oxf0c80[0x21]];_0x7197xd++){if(cookiesArr[_0x7197xd]){cookie= cookiesArr[_0x7197xd];$[__Oxf0c80[0x28]]= decodeURIComponent(cookie[__Oxf0c80[0x29]](/pt_pin=([^; ]+)(?=;?)/)&& cookie[__Oxf0c80[0x29]](/pt_pin=([^; ]+)(?=;?)/)[0x1]);$[__Oxf0c80[0x2a]]= _0x7197xd+ 1;$[__Oxf0c80[0x2b]]= true;$[__Oxf0c80[0x2c]]= __Oxf0c80[0x0];$[__Oxf0c80[0x2d]]= __Oxf0c80[0x0];message= __Oxf0c80[0x0];console[__Oxf0c80[0xe]](`${__Oxf0c80[0x2e]}${$[__Oxf0c80[0x2a]]}${__Oxf0c80[0x2f]}${$[__Oxf0c80[0x2c]]|| $[__Oxf0c80[0x28]]}${__Oxf0c80[0x30]}`);if(!$[__Oxf0c80[0x2b]]){$[__Oxf0c80[0x20]]($[__Oxf0c80[0x1a]],`${__Oxf0c80[0x31]}`,`${__Oxf0c80[0x32]}${$[__Oxf0c80[0x2a]]}${__Oxf0c80[0x33]}${$[__Oxf0c80[0x2c]]|| $[__Oxf0c80[0x28]]}${__Oxf0c80[0x34]}`,{"\x6F\x70\x65\x6E\x2D\x75\x72\x6C":__Oxf0c80[0x1f]});if($[__Oxf0c80[0x8]]()){ await notify[__Oxf0c80[0x37]](`${__Oxf0c80[0x0]}${$[__Oxf0c80[0x1a]]}${__Oxf0c80[0x35]}${$[__Oxf0c80[0x28]]}${__Oxf0c80[0x0]}`,`${__Oxf0c80[0x32]}${$[__Oxf0c80[0x2a]]}${__Oxf0c80[0x33]}${$[__Oxf0c80[0x28]]}${__Oxf0c80[0x36]}`)};continue};if($[__Oxf0c80[0x2a]]> jd_shop_draw_num){console[__Oxf0c80[0xe]](`${__Oxf0c80[0x38]}${jd_shop_draw_num}${__Oxf0c80[0x39]}`);break};try{ await $[__Oxf0c80[0x3b]](parseInt(Math[__Oxf0c80[0x3a]]()* 3500+ 1500,10));if($[__Oxf0c80[0x2a]]== 1){ await getShopHomeBaseInfo();console[__Oxf0c80[0xe]](`${__Oxf0c80[0x3c]}${$[__Oxf0c80[0x3d]]}${__Oxf0c80[0x0]}`); await getSignInfo(); await signActivityRule()}; await $[__Oxf0c80[0x3b]](parseInt(Math[__Oxf0c80[0x3a]]()* 3500+ 1500,10)); await sign(); await $[__Oxf0c80[0x3b]](parseInt(Math[__Oxf0c80[0x3a]]()* 5500+ 5500,10))}catch(e){console[__Oxf0c80[0xe]](`${__Oxf0c80[0x3e]}`); await $[__Oxf0c80[0x3b]](parseInt(Math[__Oxf0c80[0x3a]]()* 5500+ 5500,10))}}}};if(allMessage){if($[__Oxf0c80[0x8]]()&& (process[__Oxf0c80[0x2]][__Oxf0c80[0x3f]]?process[__Oxf0c80[0x2]][__Oxf0c80[0x3f]]=== __Oxf0c80[0xd]:!!1)){ await notify[__Oxf0c80[0x37]]($[__Oxf0c80[0x1a]],allMessage)};$[__Oxf0c80[0x20]]($[__Oxf0c80[0x1a]],__Oxf0c80[0x0],allMessage)}})()[__Oxf0c80[0x1d]]((_0x7197xb)=>{$[__Oxf0c80[0xe]](__Oxf0c80[0x0],`${__Oxf0c80[0x19]}${$[__Oxf0c80[0x1a]]}${__Oxf0c80[0x1b]}${_0x7197xb}${__Oxf0c80[0x1c]}`,__Oxf0c80[0x0])})[__Oxf0c80[0x18]](()=>{$[__Oxf0c80[0x17]]()});async function getShopHomeActivityInfo(){return  new Promise(async (_0x7197xf)=>{let _0x7197x10=__Oxf0c80[0x40]+ parseInt(Math[__Oxf0c80[0x3a]]()* 50+ 10,10)+ parseInt(Math[__Oxf0c80[0x3a]]()* 9+ 1,10);let _0x7197x11={"\x52\x4E\x56\x65\x72\x73\x69\x6F\x6E":_0x7197x10,"\x61\x62\x74\x65\x73\x74":__Oxf0c80[0x0],"\x6C\x61\x74":__Oxf0c80[0x0],"\x6C\x61\x74\x57\x73":__Oxf0c80[0x0],"\x6C\x6E\x67":__Oxf0c80[0x0],"\x6C\x6E\x67\x57\x73":__Oxf0c80[0x0],"\x72\x65\x66\x65\x72":__Oxf0c80[0x41],"\x73\x68\x6F\x70\x49\x64":$[__Oxf0c80[0x26]],"\x73\x6F\x75\x72\x63\x65":__Oxf0c80[0x42],"\x73\x6F\x75\x72\x63\x65\x52\x70\x63":__Oxf0c80[0x43]};let sign= await getSign(__Oxf0c80[0x44],_0x7197x11);$[__Oxf0c80[0x4d]](apptaskUrl(__Oxf0c80[0x44],_0x7197x11,sign),(_0x7197x13,_0x7197x14,_0x7197x15)=>{try{if(_0x7197x13){console[__Oxf0c80[0xe]](`${__Oxf0c80[0x0]}${JSON[__Oxf0c80[0x45]](_0x7197x13)}${__Oxf0c80[0x0]}`);console[__Oxf0c80[0xe]](`${__Oxf0c80[0x46]}`)}else {if(safeGet(_0x7197x15)){res= JSON[__Oxf0c80[0x47]](_0x7197x15);if(res[__Oxf0c80[0x48]]== 0&& res[__Oxf0c80[0x49]]){try{$[__Oxf0c80[0x2d]]= res[__Oxf0c80[0x49]][__Oxf0c80[0x2d]]?res[__Oxf0c80[0x49]][__Oxf0c80[0x2d]]:__Oxf0c80[0x0]}catch(e){$[__Oxf0c80[0x2d]]= __Oxf0c80[0x0]};if($[__Oxf0c80[0x2a]]== 1&& $[__Oxf0c80[0x2d]]){if(res[__Oxf0c80[0x49]][__Oxf0c80[0x4a]][__Oxf0c80[0x21]]>= 1){console[__Oxf0c80[0xe]](`${__Oxf0c80[0x4b]}${JSON[__Oxf0c80[0x45]](res[__Oxf0c80[0x49]][__Oxf0c80[0x4a]])}${__Oxf0c80[0x0]}`)}}}else {console[__Oxf0c80[0xe]](_0x7197x15)}}}}catch(e){$[__Oxf0c80[0x4c]](e,_0x7197x14)}finally{_0x7197xf()}})})}async function getShopHomeBaseInfo(){return  new Promise(async (_0x7197xf)=>{let _0x7197x10=__Oxf0c80[0x40]+ parseInt(Math[__Oxf0c80[0x3a]]()* 50+ 10,10)+ parseInt(Math[__Oxf0c80[0x3a]]()* 9+ 1,10);let _0x7197x11={"\x52\x4E\x56\x65\x72\x73\x69\x6F\x6E":_0x7197x10,"\x61\x62\x74\x65\x73\x74":__Oxf0c80[0x0],"\x6C\x61\x74":__Oxf0c80[0x0],"\x6C\x61\x74\x57\x73":__Oxf0c80[0x0],"\x6C\x6E\x67":__Oxf0c80[0x0],"\x6C\x6E\x67\x57\x73":__Oxf0c80[0x0],"\x72\x65\x66\x65\x72":__Oxf0c80[0x41],"\x73\x68\x6F\x70\x49\x64":$[__Oxf0c80[0x26]],"\x73\x6F\x75\x72\x63\x65":__Oxf0c80[0x42],"\x73\x6F\x75\x72\x63\x65\x52\x70\x63":__Oxf0c80[0x43]};let sign= await getSign(__Oxf0c80[0x4e],_0x7197x11);$[__Oxf0c80[0x4d]](apptaskUrl(__Oxf0c80[0x4e],_0x7197x11,sign),(_0x7197x13,_0x7197x14,_0x7197x15)=>{try{if(_0x7197x13){console[__Oxf0c80[0xe]](`${__Oxf0c80[0x0]}${JSON[__Oxf0c80[0x45]](_0x7197x13)}${__Oxf0c80[0x0]}`);console[__Oxf0c80[0xe]](`${__Oxf0c80[0x4f]}`)}else {if(safeGet(_0x7197x15)){res= JSON[__Oxf0c80[0x47]](_0x7197x15);if(res[__Oxf0c80[0x48]]== 0&& res[__Oxf0c80[0x49]]){$[__Oxf0c80[0x50]]= res[__Oxf0c80[0x49]][__Oxf0c80[0x50]];console[__Oxf0c80[0xe]](`${__Oxf0c80[0x51]}${$[__Oxf0c80[0x25]]}${__Oxf0c80[0x52]}`);$[__Oxf0c80[0x3d]]= $[__Oxf0c80[0x50]][__Oxf0c80[0x3d]]}else {console[__Oxf0c80[0xe]](_0x7197x15)}}}}catch(e){$[__Oxf0c80[0x4c]](e,_0x7197x14)}finally{_0x7197xf()}})})}async function signActivityRule(){return  new Promise(async (_0x7197xf)=>{let _0x7197x11={"\x76\x65\x6E\x64\x6F\x72\x49\x64":$[__Oxf0c80[0x3d]]};let sign= await getSign(__Oxf0c80[0x53],_0x7197x11);$[__Oxf0c80[0x4d]](apptaskUrl(__Oxf0c80[0x53],_0x7197x11,sign),(_0x7197x13,_0x7197x14,_0x7197x15)=>{try{if(_0x7197x13){console[__Oxf0c80[0xe]](`${__Oxf0c80[0x0]}${JSON[__Oxf0c80[0x45]](_0x7197x13)}${__Oxf0c80[0x0]}`);console[__Oxf0c80[0xe]](`${__Oxf0c80[0x46]}`)}else {if(safeGet(_0x7197x15)){res= JSON[__Oxf0c80[0x47]](_0x7197x15);if(res[__Oxf0c80[0x48]]== 0&& res[__Oxf0c80[0x49]]){console[__Oxf0c80[0xe]](`${__Oxf0c80[0x54]}${res[__Oxf0c80[0x49]][__Oxf0c80[0x55]]}${__Oxf0c80[0x0]}`);console[__Oxf0c80[0xe]](`${__Oxf0c80[0x56]}${res[__Oxf0c80[0x49]][__Oxf0c80[0x57]]}${__Oxf0c80[0x0]}`);console[__Oxf0c80[0xe]](`${__Oxf0c80[0x58]}${res[__Oxf0c80[0x49]][__Oxf0c80[0x59]]}${__Oxf0c80[0x0]}`)}}}}catch(e){$[__Oxf0c80[0x4c]](e,_0x7197x14)}finally{_0x7197xf()}})})}async function getSignInfo(){return  new Promise(async (_0x7197xf)=>{let _0x7197x11={"\x76\x65\x6E\x64\x6F\x72\x49\x64":$[__Oxf0c80[0x3d]]};let sign= await getSign(__Oxf0c80[0x5a],_0x7197x11);$[__Oxf0c80[0x4d]](apptaskUrl(__Oxf0c80[0x5a],_0x7197x11,sign),(_0x7197x13,_0x7197x14,_0x7197x15)=>{try{if(_0x7197x13){console[__Oxf0c80[0xe]](`${__Oxf0c80[0x0]}${JSON[__Oxf0c80[0x45]](_0x7197x13)}${__Oxf0c80[0x0]}`);console[__Oxf0c80[0xe]](`${__Oxf0c80[0x5b]}`)}else {if(safeGet(_0x7197x15)){}else {console[__Oxf0c80[0xe]](_0x7197x15)}}}catch(e){$[__Oxf0c80[0x4c]](e,_0x7197x14)}finally{_0x7197xf()}})})}async function sign(){return  new Promise(async (_0x7197xf)=>{let _0x7197x11={"\x73\x6F\x75\x72\x63\x65\x52\x70\x63":__Oxf0c80[0x5c],"\x76\x65\x6E\x64\x6F\x72\x49\x64":$[__Oxf0c80[0x3d]]};let sign= await getSign(__Oxf0c80[0x5d],_0x7197x11);$[__Oxf0c80[0x4d]](apptaskUrl(__Oxf0c80[0x5e],_0x7197x11,sign),(_0x7197x13,_0x7197x14,_0x7197x15)=>{try{if(_0x7197x13){console[__Oxf0c80[0xe]](`${__Oxf0c80[0x0]}${JSON[__Oxf0c80[0x45]](_0x7197x13)}${__Oxf0c80[0x0]}`);console[__Oxf0c80[0xe]](`${__Oxf0c80[0x5f]}`)}else {if(safeGet(_0x7197x15)){res= JSON[__Oxf0c80[0x47]](_0x7197x15);if(res[__Oxf0c80[0x48]]== 0&& res[__Oxf0c80[0x49]]){console[__Oxf0c80[0xe]](`${__Oxf0c80[0x0]}${res[__Oxf0c80[0x49]][__Oxf0c80[0x60]]}${__Oxf0c80[0x0]}`);try{if(res[__Oxf0c80[0x49]][__Oxf0c80[0x60]][__Oxf0c80[0x6]](__Oxf0c80[0x61])>  -1){console[__Oxf0c80[0xe]](`${__Oxf0c80[0x62]}${res[__Oxf0c80[0x49]][__Oxf0c80[0x63]][__Oxf0c80[0x1a]]}${__Oxf0c80[0x0]}`)}else {console[__Oxf0c80[0xe]](`${__Oxf0c80[0x64]}`)}}catch(e){console[__Oxf0c80[0xe]](`${__Oxf0c80[0x64]}`)}}}else {console[__Oxf0c80[0xe]](_0x7197x15)}}}catch(e){$[__Oxf0c80[0x4c]](e,_0x7197x14)}finally{_0x7197xf()}})})}async function getSign(_0x7197x1a,_0x7197x1b){return  new Promise((_0x7197xf)=>{$[__Oxf0c80[0x4d]]({url:`${__Oxf0c80[0x65]}`,body:`${__Oxf0c80[0x66]}${_0x7197x1a}${__Oxf0c80[0x67]}${JSON[__Oxf0c80[0x45]](_0x7197x1b)}${__Oxf0c80[0x0]}`,headers:{"\x55\x73\x65\x72\x2D\x41\x67\x65\x6E\x74":__Oxf0c80[0x68]},timeout:60000},(_0x7197x13,_0x7197x14,_0x7197x15)=>{try{if(_0x7197x13){console[__Oxf0c80[0xe]](`${__Oxf0c80[0x69]}`)}else {try{_0x7197x15= _0x7197x15}catch(e){_0x7197x15= __Oxf0c80[0x0]}}}catch(e){}finally{_0x7197xf(_0x7197x15|| __Oxf0c80[0x0])}})})}function apptaskUrl(_0x7197x1d= __Oxf0c80[0x0],_0x7197x1b= __Oxf0c80[0x0],sign){return {url:`${__Oxf0c80[0x0]}${JD_API_HOST}${__Oxf0c80[0x0]}`,body:`${__Oxf0c80[0x6a]}${encodeURIComponent(JSON[__Oxf0c80[0x45]](_0x7197x1b))}${__Oxf0c80[0x5]}${sign}${__Oxf0c80[0x0]}`,headers:{'\x43\x6F\x6F\x6B\x69\x65':cookie,'\x43\x6F\x6E\x74\x65\x6E\x74\x2D\x54\x79\x70\x65':__Oxf0c80[0x6b],'\x55\x73\x65\x72\x2D\x41\x67\x65\x6E\x74':__Oxf0c80[0x6c]+ parseInt(Math[__Oxf0c80[0x3a]]()* 9999+ 90000,10)+ __Oxf0c80[0x6d],'\x41\x63\x63\x65\x70\x74\x2D\x4C\x61\x6E\x67\x75\x61\x67\x65':__Oxf0c80[0x6e],'\x41\x63\x63\x65\x70\x74\x2D\x45\x6E\x63\x6F\x64\x69\x6E\x67':__Oxf0c80[0x6f]},timeout:60000}}function taskUrl(_0x7197x1d,_0x7197x1b= {}){return {url:`${__Oxf0c80[0x0]}${JD_API_HOST}${__Oxf0c80[0x70]}${_0x7197x1d}${__Oxf0c80[0x67]}${encodeURIComponent(JSON[__Oxf0c80[0x45]](_0x7197x1b))}${__Oxf0c80[0x0]}`,headers:{'\x43\x6F\x6F\x6B\x69\x65':cookie,'\x48\x6F\x73\x74':__Oxf0c80[0x71],'\x43\x6F\x6E\x6E\x65\x63\x74\x69\x6F\x6E':__Oxf0c80[0x72],'\x43\x6F\x6E\x74\x65\x6E\x74\x2D\x54\x79\x70\x65':__Oxf0c80[0x73],'\x52\x65\x66\x65\x72\x65\x72':__Oxf0c80[0x74],'\x55\x73\x65\x72\x2D\x41\x67\x65\x6E\x74':$[__Oxf0c80[0x8]]()?(process[__Oxf0c80[0x2]][__Oxf0c80[0x75]]?process[__Oxf0c80[0x2]][__Oxf0c80[0x75]]:(require(__Oxf0c80[0x77])[__Oxf0c80[0x76]])):($[__Oxf0c80[0x11]](__Oxf0c80[0x78])?$[__Oxf0c80[0x11]](__Oxf0c80[0x78]):__Oxf0c80[0x79]),'\x41\x63\x63\x65\x70\x74\x2D\x4C\x61\x6E\x67\x75\x61\x67\x65':__Oxf0c80[0x7a],'\x41\x63\x63\x65\x70\x74\x2D\x45\x6E\x63\x6F\x64\x69\x6E\x67':__Oxf0c80[0x7b]}}}function safeGet(_0x7197x15){try{if( typeof JSON[__Oxf0c80[0x47]](_0x7197x15)== __Oxf0c80[0x7c]){return true}}catch(e){console[__Oxf0c80[0xe]](e);console[__Oxf0c80[0xe]](`${__Oxf0c80[0x7d]}`);return false}}function jsonParse(_0x7197x21){if( typeof _0x7197x21== __Oxf0c80[0x7e]){try{return JSON[__Oxf0c80[0x47]](_0x7197x21)}catch(e){console[__Oxf0c80[0xe]](e);$[__Oxf0c80[0x20]]($[__Oxf0c80[0x1a]],__Oxf0c80[0x0],__Oxf0c80[0x7f]);return []}}}(function(_0x7197x22,_0x7197x23,_0x7197x24,_0x7197x25,_0x7197x26,_0x7197x27){_0x7197x27= __Oxf0c80[0x80];_0x7197x25= function(_0x7197x28){if( typeof alert!== _0x7197x27){alert(_0x7197x28)};if( typeof console!== _0x7197x27){console[__Oxf0c80[0xe]](_0x7197x28)}};_0x7197x24= function(_0x7197x29,_0x7197x22){return _0x7197x29+ _0x7197x22};_0x7197x26= _0x7197x24(__Oxf0c80[0x81],_0x7197x24(_0x7197x24(__Oxf0c80[0x82],__Oxf0c80[0x83]),__Oxf0c80[0x84]));try{_0x7197x22= __encode;if(!( typeof _0x7197x22!== _0x7197x27&& _0x7197x22=== _0x7197x24(__Oxf0c80[0x85],__Oxf0c80[0x86]))){_0x7197x25(_0x7197x26)}}catch(e){_0x7197x25(_0x7197x26)}})({})


// prettier-ignore
function Env(t,e){"undefined"!=typeof process&&JSON.stringify(process.env).indexOf("GITHUB")>-1&&process.exit(0);class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`🔔${this.name}, 开始!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),n={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(n,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)})):this.isQuanX()?(this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t))):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();s&&this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)}))}post(t,e=(()=>{})){if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.post(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method="POST",this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){this.initGotEnv(t);const{url:s,...i}=t;this.got.post(s,i).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)})}}time(t,e=null){const s=e?new Date(e):new Date;let i={"M+":s.getMonth()+1,"d+":s.getDate(),"H+":s.getHours(),"m+":s.getMinutes(),"s+":s.getSeconds(),"q+":Math.floor((s.getMonth()+3)/3),S:s.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(s.getFullYear()+"").substr(4-RegExp.$1.length)));for(let e in i)new RegExp("("+e+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?i[e]:("00"+i[e]).substr((""+i[e]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};if(this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r))),!this.isMuteLog){let t=["","==============📣系统通知📣=============="];t.push(e),s&&t.push(s),i&&t.push(i),console.log(t.join("\n")),this.logs=this.logs.concat(t)}}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`❗️${this.name}, 错误!`,t.stack):this.log("",`❗️${this.name}, 错误!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`🔔${this.name}, 结束! 🕛 ${s} 秒`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}