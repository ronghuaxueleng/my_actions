/*
签到领现金，每日2毛～5毛
活动入口：京东APP搜索领现金进入
无需指定定时，每天运行一次即可
 */
const $ = new Env('签到领现金');
const notify = $.isNode() ? require('./sendNotify') : '';
const jdCookieNode = $.isNode() ? require('./jdCookie.js') : '';


var __encode ='jsjiami.com',_a={}, _0xb483=["\x5F\x64\x65\x63\x6F\x64\x65","\x68\x74\x74\x70\x3A\x2F\x2F\x77\x77\x77\x2E\x73\x6F\x6A\x73\x6F\x6E\x2E\x63\x6F\x6D\x2F\x6A\x61\x76\x61\x73\x63\x72\x69\x70\x74\x6F\x62\x66\x75\x73\x63\x61\x74\x6F\x72\x2E\x68\x74\x6D\x6C"];(function(_0xd642x1){_0xd642x1[_0xb483[0]]= _0xb483[1]})(_a);var __Oxf0c71=["","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x61\x70\x69\x2E\x6D\x2E\x6A\x64\x2E\x63\x6F\x6D\x2F\x63\x6C\x69\x65\x6E\x74\x2E\x61\x63\x74\x69\x6F\x6E","\x69\x73\x4E\x6F\x64\x65","\x70\x75\x73\x68","\x66\x6F\x72\x45\x61\x63\x68","\x6B\x65\x79\x73","\x4A\x44\x5F\x44\x45\x42\x55\x47","\x65\x6E\x76","\x66\x61\x6C\x73\x65","\x6C\x6F\x67","\x66\x69\x6C\x74\x65\x72","\x43\x6F\x6F\x6B\x69\x65\x4A\x44","\x67\x65\x74\x64\x61\x74\x61","\x43\x6F\x6F\x6B\x69\x65\x4A\x44\x32","\x63\x6F\x6F\x6B\x69\x65","\x6D\x61\x70","\x43\x6F\x6F\x6B\x69\x65\x73\x4A\x44","\x5B\x5D","\x64\x6F\x6E\x65","\x66\x69\x6E\x61\x6C\x6C\x79","\u274C\x20","\x6E\x61\x6D\x65","\x2C\x20\u5931\u8D25\x21\x20\u539F\u56E0\x3A\x20","\x21","\x63\x61\x74\x63\x68","\u3010\u63D0\u793A\u3011\u8BF7\u5148\u83B7\u53D6\u4EAC\u4E1C\u8D26\u53F7\u4E00\x63\x6F\x6F\x6B\x69\x65\x0A\u76F4\u63A5\u4F7F\u7528\x4E\x6F\x62\x79\x44\x61\u7684\u4EAC\u4E1C\u7B7E\u5230\u83B7\u53D6","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x62\x65\x61\x6E\x2E\x6D\x2E\x6A\x64\x2E\x63\x6F\x6D\x2F\x62\x65\x61\x6E\x2F\x73\x69\x67\x6E\x49\x6E\x64\x65\x78\x2E\x61\x63\x74\x69\x6F\x6E","\x6D\x73\x67","\u52A0\u5165\u9891\u9053\x3A\x20\x68\x74\x74\x70\x73\x3A\x2F\x2F\x74\x2E\x6D\x65\x2F\x70\x72\x6F\x65\x6E\x76\x63","\x6C\x65\x6E\x67\x74\x68","\x55\x73\x65\x72\x4E\x61\x6D\x65","\x6D\x61\x74\x63\x68","\x69\x6E\x64\x65\x78","\x69\x73\x4C\x6F\x67\x69\x6E","\x6E\x69\x63\x6B\x4E\x61\x6D\x65","\x2A\x2A\x2A\x2A\x2A\x2A\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7","\u3011","\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A","\u3010\u63D0\u793A\u3011\x63\x6F\x6F\x6B\x69\x65\u5DF2\u5931\u6548","\u4EAC\u4E1C\u8D26\u53F7","\x20","\x5C\x6E\u8BF7\u91CD\u65B0\u767B\u5F55\u83B7\u53D6\x5C\x6E\x68\x74\x74\x70\x73\x3A\x2F\x2F\x62\x65\x61\x6E\x2E\x6D\x2E\x6A\x64\x2E\x63\x6F\x6D\x2F\x62\x65\x61\x6E\x2F\x73\x69\x67\x6E\x49\x6E\x64\x65\x78\x2E\x61\x63\x74\x69\x6F\x6E","\x63\x6F\x6F\x6B\x69\x65\u5DF2\u5931\u6548\x20\x2D\x20","\x5C\x6E\u8BF7\u91CD\u65B0\u767B\u5F55\u83B7\u53D6\x63\x6F\x6F\x6B\x69\x65","\x73\x65\x6E\x64\x4E\x6F\x74\x69\x66\x79","\x72\x61\x6E\x64\x6F\x6D","\x77\x61\x69\x74","\x43\x41\x53\x48\x5F\x4E\x4F\x54\x49\x46\x59\x5F\x43\x4F\x4E\x54\x52\x4F\x4C","\x73\x69\x67\x6E\x4D\x6F\x6E\x65\x79","\x65\x78\x63\x68\x61\x6E\x67\x65\x42\x65\x61\x6E\x4E\x75\x6D","\x63\x61\x73\x68\x5F\x73\x69\x67\x6E","\x73\x74\x72\x69\x6E\x67\x69\x66\x79","\x63\x61\x73\x68\x5F\x73\x69\x67\x6E\x20\x41\x50\x49\u8BF7\u6C42\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u7F51\u8DEF\u91CD\u8BD5","\x70\x61\x72\x73\x65","\x62\x69\x7A\x43\x6F\x64\x65","\x64\x61\x74\x61","\u7B7E\u5230","\x62\x69\x7A\x4D\x73\x67","\x6C\x6F\x67\x45\x72\x72","\x70\x6F\x73\x74","\x63\x61\x73\x68\x5F\x68\x6F\x6D\x65\x50\x61\x67\x65","\x20\x41\x50\x49\u8BF7\u6C42\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u7F51\u8DEF\u91CD\u8BD5","\x63\x6F\x64\x65","\x72\x65\x73\x75\x6C\x74","\u5F53\u524D\u73B0\u91D1\uFF1A","\x74\x6F\x74\x61\x6C\x4D\x6F\x6E\x65\x79","\u5143","\x5C\x6E","\x0A\x0A","\x69\x6E\x76\x69\x74\x65\x64\x43\x6F\x64\x65","\x73\x68\x61\x72\x65\x44\x61\x74\x65","\x74\x61\x73\x6B\x49\x6E\x66\x6F\x73","\x74\x79\x70\x65","\x64\x6F\x54\x69\x6D\x65\x73","\x74\x69\x6D\x65\x73","\u53BB\u505A","\u4EFB\u52A1\x20","\x2F","\x73\x6B\x75\x49\x64","\x70\x61\x72\x61\x6D\x73","\x6A\x75\x6D\x70","\x73\x68\x6F\x70\x49\x64","\x70\x61\x74\x68","\x75\x72\x6C","\x63\x61\x73\x68\x5F\x64\x6F\x54\x61\x73\x6B","\u4EFB\u52A1\u5B8C\u6210\u6210\u529F","\x67\x65\x74","\x68\x74\x74\x70\x3A\x2F\x2F\x68\x7A\x2E\x66\x65\x76\x65\x72\x72\x75\x6E\x2E\x74\x6F\x70\x3A\x39\x39\x2F\x73\x68\x61\x72\x65\x2F\x63\x61\x72\x64\x2F\x67\x65\x74\x53\x69\x67\x6E","\x66\x6E\x3D","\x26\x62\x6F\x64\x79\x3D","\x6A\x64\x61\x70\x70\x3B\x61\x6E\x64\x72\x6F\x69\x64\x3B\x31\x31\x2E\x33\x2E\x34\x3B\x6A\x64\x53\x75\x70\x70\x6F\x72\x74\x44\x61\x72\x6B\x4D\x6F\x64\x65\x2F\x30\x3B\x4D\x6F\x7A\x69\x6C\x6C\x61\x2F\x35\x2E\x30\x20\x28\x4C\x69\x6E\x75\x78\x3B\x20\x41\x6E\x64\x72\x6F\x69\x64\x20\x31\x30\x3B\x20\x50\x43\x43\x4D\x30\x6F\x20\x42\x75\x69\x6C\x64\x2F\x51\x4B\x51\x31\x2E\x31\x39\x31\x30\x32\x31\x2E\x30\x30\x32\x3B\x20\x77\x76\x29\x20\x41\x70\x70\x6C\x65\x57\x65\x62\x4B\x69\x74\x2F\x35\x33\x37\x2E\x33\x36\x20\x28\x4B\x48\x54\x4D\x4C\x2C\x20\x6C\x69\x6B\x65\x20\x47\x65\x63\x6B\x6F\x29\x20\x56\x65\x72\x73\x69\x6F\x6E\x2F\x34\x2E\x30\x20\x43\x68\x72\x6F\x6D\x65\x2F\x38\x39\x2E\x30\x2E\x34\x33\x38\x39\x2E\x37\x32\x20\x4D\x51\x51\x42\x72\x6F\x77\x73\x65\x72\x2F\x36\x2E\x32\x20\x54\x42\x53\x2F\x30\x34\x36\x30\x31\x31\x20\x4D\x6F\x62\x69\x6C\x65\x20\x53\x61\x66\x61\x72\x69\x2F\x35\x33\x37\x2E\x33\x36","\u8BF7\u6C42\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u7F51\u8DEF","\x62\x6F\x64\x79\x3D","\x26","\x61\x70\x69\x2E\x6D\x2E\x6A\x64\x2E\x63\x6F\x6D","\x6B\x65\x65\x70\x2D\x61\x6C\x69\x76\x65","\x61\x70\x70\x6C\x69\x63\x61\x74\x69\x6F\x6E\x2F\x78\x2D\x77\x77\x77\x2D\x66\x6F\x72\x6D\x2D\x75\x72\x6C\x65\x6E\x63\x6F\x64\x65\x64","\x4A\x44\x34\x69\x50\x68\x6F\x6E\x65\x2F\x31\x36\x37\x37\x37\x34\x20\x28\x69\x50\x68\x6F\x6E\x65\x3B\x20\x69\x4F\x53\x20\x31\x34\x2E\x37\x2E\x31\x3B\x20\x53\x63\x61\x6C\x65\x2F\x33\x2E\x30\x30\x29","\x7A\x68\x2D\x48\x61\x6E\x73\x2D\x43\x4E\x3B\x71\x3D\x31","\x67\x7A\x69\x70\x2C\x20\x64\x65\x66\x6C\x61\x74\x65\x2C\x20\x62\x72","\x3F\x66\x75\x6E\x63\x74\x69\x6F\x6E\x49\x64\x3D","\x61\x70\x70\x6C\x69\x63\x61\x74\x69\x6F\x6E\x2F\x6A\x73\x6F\x6E","\x68\x74\x74\x70\x3A\x2F\x2F\x77\x71\x2E\x6A\x64\x2E\x63\x6F\x6D\x2F\x77\x78\x61\x70\x70\x2F\x70\x61\x67\x65\x73\x2F\x68\x64\x2D\x69\x6E\x74\x65\x72\x61\x63\x74\x69\x6F\x6E\x2F\x69\x6E\x64\x65\x78\x2F\x69\x6E\x64\x65\x78","\x4A\x44\x5F\x55\x53\x45\x52\x5F\x41\x47\x45\x4E\x54","\x55\x53\x45\x52\x5F\x41\x47\x45\x4E\x54","\x2E\x2F\x55\x53\x45\x52\x5F\x41\x47\x45\x4E\x54\x53","\x4A\x44\x55\x41","\x6A\x64\x61\x70\x70\x3B\x69\x50\x68\x6F\x6E\x65\x3B\x39\x2E\x34\x2E\x34\x3B\x31\x34\x2E\x33\x3B\x6E\x65\x74\x77\x6F\x72\x6B\x2F\x34\x67\x3B\x4D\x6F\x7A\x69\x6C\x6C\x61\x2F\x35\x2E\x30\x20\x28\x69\x50\x68\x6F\x6E\x65\x3B\x20\x43\x50\x55\x20\x69\x50\x68\x6F\x6E\x65\x20\x4F\x53\x20\x31\x34\x5F\x33\x20\x6C\x69\x6B\x65\x20\x4D\x61\x63\x20\x4F\x53\x20\x58\x29\x20\x41\x70\x70\x6C\x65\x57\x65\x62\x4B\x69\x74\x2F\x36\x30\x35\x2E\x31\x2E\x31\x35\x20\x28\x4B\x48\x54\x4D\x4C\x2C\x20\x6C\x69\x6B\x65\x20\x47\x65\x63\x6B\x6F\x29\x20\x4D\x6F\x62\x69\x6C\x65\x2F\x31\x35\x45\x31\x34\x38\x3B\x73\x75\x70\x70\x6F\x72\x74\x4A\x44\x53\x48\x57\x4B\x2F\x31","\x7A\x68\x2D\x63\x6E","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x77\x71\x2E\x6A\x64\x2E\x63\x6F\x6D\x2F\x75\x73\x65\x72\x2F\x69\x6E\x66\x6F\x2F\x51\x75\x65\x72\x79\x4A\x44\x55\x73\x65\x72\x49\x6E\x66\x6F\x3F\x73\x63\x65\x6E\x65\x76\x61\x6C\x3D\x32","\x61\x70\x70\x6C\x69\x63\x61\x74\x69\x6F\x6E\x2F\x6A\x73\x6F\x6E\x2C\x74\x65\x78\x74\x2F\x70\x6C\x61\x69\x6E\x2C\x20\x2A\x2F\x2A","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x77\x71\x73\x2E\x6A\x64\x2E\x63\x6F\x6D\x2F\x6D\x79\x2F\x6A\x69\x6E\x67\x64\x6F\x75\x2F\x6D\x79\x2E\x73\x68\x74\x6D\x6C\x3F\x73\x63\x65\x6E\x65\x76\x61\x6C\x3D\x32","\x72\x65\x74\x63\x6F\x64\x65","\x62\x61\x73\x65","\x6E\x69\x63\x6B\x6E\x61\x6D\x65","\u4EAC\u4E1C\u670D\u52A1\u5668\u8FD4\u56DE\u7A7A\u6570\u636E","\x6F\x62\x6A\x65\x63\x74","\u4EAC\u4E1C\u670D\u52A1\u5668\u8BBF\u95EE\u6570\u636E\u4E3A\u7A7A\uFF0C\u8BF7\u68C0\u67E5\u81EA\u8EAB\u8BBE\u5907\u7F51\u7EDC\u60C5\u51B5","\x73\x74\x72\x69\x6E\x67","\u8BF7\u52FF\u968F\u610F\u5728\x42\x6F\x78\x4A\x73\u8F93\u5165\u6846\u4FEE\u6539\u5185\u5BB9\x0A\u5EFA\u8BAE\u901A\u8FC7\u811A\u672C\u53BB\u83B7\u53D6\x63\x6F\x6F\x6B\x69\x65","\x75\x6E\x64\x65\x66\x69\x6E\x65\x64","\u5220\u9664","\u7248\u672C\u53F7\uFF0C\x6A\x73\u4F1A\u5B9A","\u671F\u5F39\u7A97\uFF0C","\u8FD8\u8BF7\u652F\u6301\u6211\u4EEC\u7684\u5DE5\u4F5C","\x6A\x73\x6A\x69\x61","\x6D\x69\x2E\x63\x6F\x6D"];let cookiesArr=[],cookie=__Oxf0c71[0x0],message,allMessage=__Oxf0c71[0x0];const JD_API_HOST=__Oxf0c71[0x1];if($[__Oxf0c71[0x2]]()){Object[__Oxf0c71[0x5]](jdCookieNode)[__Oxf0c71[0x4]]((_0xbb28x6)=>{cookiesArr[__Oxf0c71[0x3]](jdCookieNode[_0xbb28x6])});if(process[__Oxf0c71[0x7]][__Oxf0c71[0x6]]&& process[__Oxf0c71[0x7]][__Oxf0c71[0x6]]=== __Oxf0c71[0x8]){console[__Oxf0c71[0x9]]= ()=>{}}}else {cookiesArr= [$[__Oxf0c71[0xc]](__Oxf0c71[0xb]),$[__Oxf0c71[0xc]](__Oxf0c71[0xd]),...jsonParse($[__Oxf0c71[0xc]](__Oxf0c71[0x10])|| __Oxf0c71[0x11])[__Oxf0c71[0xf]]((_0xbb28x6)=>{return _0xbb28x6[__Oxf0c71[0xe]]})][__Oxf0c71[0xa]]((_0xbb28x6)=>{return !!_0xbb28x6})};!(async ()=>{if(!cookiesArr[0x0]){$[__Oxf0c71[0x1b]]($[__Oxf0c71[0x15]],__Oxf0c71[0x19],__Oxf0c71[0x1a],{"\x6F\x70\x65\x6E\x2D\x75\x72\x6C":__Oxf0c71[0x1a]});return};console[__Oxf0c71[0x9]](__Oxf0c71[0x1c]);for(let _0xbb28x8=0;_0xbb28x8< cookiesArr[__Oxf0c71[0x1d]];_0xbb28x8++){if(cookiesArr[_0xbb28x8]){cookie= cookiesArr[_0xbb28x8];$[__Oxf0c71[0x1e]]= decodeURIComponent(cookie[__Oxf0c71[0x1f]](/pt_pin=([^; ]+)(?=;?)/)&& cookie[__Oxf0c71[0x1f]](/pt_pin=([^; ]+)(?=;?)/)[0x1]);$[__Oxf0c71[0x20]]= _0xbb28x8+ 1;$[__Oxf0c71[0x21]]= true;$[__Oxf0c71[0x22]]= __Oxf0c71[0x0];message= __Oxf0c71[0x0];console[__Oxf0c71[0x9]](`${__Oxf0c71[0x23]}${$[__Oxf0c71[0x20]]}${__Oxf0c71[0x24]}${$[__Oxf0c71[0x22]]|| $[__Oxf0c71[0x1e]]}${__Oxf0c71[0x25]}`);if(!$[__Oxf0c71[0x21]]){$[__Oxf0c71[0x1b]]($[__Oxf0c71[0x15]],`${__Oxf0c71[0x26]}`,`${__Oxf0c71[0x27]}${$[__Oxf0c71[0x20]]}${__Oxf0c71[0x28]}${$[__Oxf0c71[0x22]]|| $[__Oxf0c71[0x1e]]}${__Oxf0c71[0x29]}`,{"\x6F\x70\x65\x6E\x2D\x75\x72\x6C":__Oxf0c71[0x1a]});if($[__Oxf0c71[0x2]]()){ await notify[__Oxf0c71[0x2c]](`${__Oxf0c71[0x0]}${$[__Oxf0c71[0x15]]}${__Oxf0c71[0x2a]}${$[__Oxf0c71[0x1e]]}${__Oxf0c71[0x0]}`,`${__Oxf0c71[0x27]}${$[__Oxf0c71[0x20]]}${__Oxf0c71[0x28]}${$[__Oxf0c71[0x1e]]}${__Oxf0c71[0x2b]}`)};continue}; await jdCash(); await $[__Oxf0c71[0x2e]](parseInt(Math[__Oxf0c71[0x2d]]()* 15000+ 5500,10))}};if(allMessage){if($[__Oxf0c71[0x2]]()&& (process[__Oxf0c71[0x7]][__Oxf0c71[0x2f]]?process[__Oxf0c71[0x7]][__Oxf0c71[0x2f]]=== __Oxf0c71[0x8]:!!1)){ await notify[__Oxf0c71[0x2c]]($[__Oxf0c71[0x15]],allMessage)};$[__Oxf0c71[0x1b]]($[__Oxf0c71[0x15]],__Oxf0c71[0x0],allMessage)}})()[__Oxf0c71[0x18]]((_0xbb28x7)=>{$[__Oxf0c71[0x9]](__Oxf0c71[0x0],`${__Oxf0c71[0x14]}${$[__Oxf0c71[0x15]]}${__Oxf0c71[0x16]}${_0xbb28x7}${__Oxf0c71[0x17]}`,__Oxf0c71[0x0])})[__Oxf0c71[0x13]](()=>{$[__Oxf0c71[0x12]]()});async function jdCash(){$[__Oxf0c71[0x30]]= 0; await $[__Oxf0c71[0x2e]](parseInt(Math[__Oxf0c71[0x2d]]()* 1500+ 500,10)); await cash_sign(); await $[__Oxf0c71[0x2e]](parseInt(Math[__Oxf0c71[0x2d]]()* 5500+ 500,10)); await $[__Oxf0c71[0x2e]](parseInt(Math[__Oxf0c71[0x2d]]()* 1500+ 500,10)); await cash_homePage(); await $[__Oxf0c71[0x2e]](parseInt(Math[__Oxf0c71[0x2d]]()* 1500+ 500,10));$[__Oxf0c71[0x31]]= 0; await cash_homePage(true); await $[__Oxf0c71[0x2e]](parseInt(Math[__Oxf0c71[0x2d]]()* 1500+ 500,10))}async function cash_sign(){return  new Promise(async (_0xbb28xb)=>{let _0xbb28xc={"\x62\x72\x65\x61\x6B\x52\x65\x77\x61\x72\x64":0,"\x69\x6E\x76\x69\x74\x65\x43\x6F\x64\x65":null,"\x72\x65\x6D\x69\x6E\x64":0,"\x74\x79\x70\x65":0};let _0xbb28xd= await getSign(__Oxf0c71[0x32],_0xbb28xc);$[__Oxf0c71[0x3b]](apptaskUrl(__Oxf0c71[0x32],_0xbb28xc,_0xbb28xd),(_0xbb28xe,_0xbb28xf,_0xbb28x10)=>{try{if(_0xbb28xe){console[__Oxf0c71[0x9]](`${__Oxf0c71[0x0]}${JSON[__Oxf0c71[0x33]](_0xbb28xe)}${__Oxf0c71[0x0]}`);console[__Oxf0c71[0x9]](`${__Oxf0c71[0x34]}`)}else {if(safeGet(_0xbb28x10)){_0xbb28x10= JSON[__Oxf0c71[0x35]](_0xbb28x10);if(_0xbb28x10[__Oxf0c71[0x37]][__Oxf0c71[0x36]]=== 0){console[__Oxf0c71[0x9]](`${__Oxf0c71[0x38]}${_0xbb28x10[__Oxf0c71[0x37]][__Oxf0c71[0x39]]}${__Oxf0c71[0x0]}`)}else {console[__Oxf0c71[0x9]](_0xbb28x10[__Oxf0c71[0x37]][__Oxf0c71[0x39]])}}}}catch(e){$[__Oxf0c71[0x3a]](e,_0xbb28xf)}finally{_0xbb28xb()}})})}async function cash_homePage(_0xbb28x12= false){let _0xbb28x13=__Oxf0c71[0x3c];let _0xbb28x14={}; await $[__Oxf0c71[0x2e]](500);let _0xbb28xd= await getSign(_0xbb28x13,_0xbb28x14);return  new Promise((_0xbb28xb)=>{$[__Oxf0c71[0x3b]](apptaskUrl(_0xbb28x13,_0xbb28x14,_0xbb28xd),async (_0xbb28xe,_0xbb28xf,_0xbb28x10)=>{try{if(_0xbb28xe){console[__Oxf0c71[0x9]](`${__Oxf0c71[0x0]}${JSON[__Oxf0c71[0x33]](_0xbb28xe)}${__Oxf0c71[0x0]}`);console[__Oxf0c71[0x9]](`${__Oxf0c71[0x0]}${$[__Oxf0c71[0x15]]}${__Oxf0c71[0x3d]}`); await $[__Oxf0c71[0x2e]](5000)}else {if(safeGet(_0xbb28x10)){_0xbb28x10= JSON[__Oxf0c71[0x35]](_0xbb28x10);if(_0xbb28x10[__Oxf0c71[0x3e]]=== 0&& _0xbb28x10[__Oxf0c71[0x37]][__Oxf0c71[0x3f]]){if(_0xbb28x12){if(message){message+= `${__Oxf0c71[0x40]}${_0xbb28x10[__Oxf0c71[0x37]][__Oxf0c71[0x3f]][__Oxf0c71[0x41]]}${__Oxf0c71[0x42]}`;allMessage+= `${__Oxf0c71[0x27]}${$[__Oxf0c71[0x20]]}${__Oxf0c71[0x0]}${$[__Oxf0c71[0x22]]}${__Oxf0c71[0x43]}${message}${__Oxf0c71[0x0]}${$[__Oxf0c71[0x20]]!== cookiesArr[__Oxf0c71[0x1d]]?__Oxf0c71[0x44]:__Oxf0c71[0x0]}${__Oxf0c71[0x0]}`};console[__Oxf0c71[0x9]](`${__Oxf0c71[0x40]}${_0xbb28x10[__Oxf0c71[0x37]][__Oxf0c71[0x3f]][__Oxf0c71[0x41]]}${__Oxf0c71[0x42]}`);return};$[__Oxf0c71[0x30]]= _0xbb28x10[__Oxf0c71[0x37]][__Oxf0c71[0x3f]][__Oxf0c71[0x41]];let _0xbb28x15={'\x69\x6E\x76\x69\x74\x65\x43\x6F\x64\x65':_0xbb28x10[__Oxf0c71[0x37]][__Oxf0c71[0x3f]][__Oxf0c71[0x45]],'\x73\x68\x61\x72\x65\x44\x61\x74\x65':_0xbb28x10[__Oxf0c71[0x37]][__Oxf0c71[0x3f]][__Oxf0c71[0x46]]};$[__Oxf0c71[0x46]]= _0xbb28x10[__Oxf0c71[0x37]][__Oxf0c71[0x3f]][__Oxf0c71[0x46]];for(let _0xbb28x16 of _0xbb28x10[__Oxf0c71[0x37]][__Oxf0c71[0x3f]][__Oxf0c71[0x47]]){if(_0xbb28x16[__Oxf0c71[0x48]]=== 4){for(let _0xbb28x8=_0xbb28x16[__Oxf0c71[0x49]];_0xbb28x8< _0xbb28x16[__Oxf0c71[0x4a]];++_0xbb28x8){console[__Oxf0c71[0x9]](`${__Oxf0c71[0x4b]}${_0xbb28x16[__Oxf0c71[0x15]]}${__Oxf0c71[0x4c]}${_0xbb28x8+ 1}${__Oxf0c71[0x4d]}${_0xbb28x16[__Oxf0c71[0x4a]]}${__Oxf0c71[0x0]}`); await appdoTask(_0xbb28x16[__Oxf0c71[0x48]],_0xbb28x16[__Oxf0c71[0x50]][__Oxf0c71[0x4f]][__Oxf0c71[0x4e]]); await $[__Oxf0c71[0x2e]](5000)}}else {if(_0xbb28x16[__Oxf0c71[0x48]]=== 2){for(let _0xbb28x8=_0xbb28x16[__Oxf0c71[0x49]];_0xbb28x8< _0xbb28x16[__Oxf0c71[0x4a]];++_0xbb28x8){console[__Oxf0c71[0x9]](`${__Oxf0c71[0x4b]}${_0xbb28x16[__Oxf0c71[0x15]]}${__Oxf0c71[0x4c]}${_0xbb28x8+ 1}${__Oxf0c71[0x4d]}${_0xbb28x16[__Oxf0c71[0x4a]]}${__Oxf0c71[0x0]}`); await appdoTask(_0xbb28x16[__Oxf0c71[0x48]],_0xbb28x16[__Oxf0c71[0x50]][__Oxf0c71[0x4f]][__Oxf0c71[0x51]]); await $[__Oxf0c71[0x2e]](5000)}}else {if(_0xbb28x16[__Oxf0c71[0x48]]=== 30){for(let _0xbb28x8=_0xbb28x16[__Oxf0c71[0x49]];_0xbb28x8< _0xbb28x16[__Oxf0c71[0x4a]];++_0xbb28x8){console[__Oxf0c71[0x9]](`${__Oxf0c71[0x4b]}${_0xbb28x16[__Oxf0c71[0x15]]}${__Oxf0c71[0x4c]}${_0xbb28x8+ 1}${__Oxf0c71[0x4d]}${_0xbb28x16[__Oxf0c71[0x4a]]}${__Oxf0c71[0x0]}`); await appdoTask(_0xbb28x16[__Oxf0c71[0x48]],_0xbb28x16[__Oxf0c71[0x50]][__Oxf0c71[0x4f]][__Oxf0c71[0x52]]); await $[__Oxf0c71[0x2e]](5000)}}else {if(_0xbb28x16[__Oxf0c71[0x48]]=== 16|| _0xbb28x16[__Oxf0c71[0x48]]=== 3|| _0xbb28x16[__Oxf0c71[0x48]]=== 5|| _0xbb28x16[__Oxf0c71[0x48]]=== 17|| _0xbb28x16[__Oxf0c71[0x48]]=== 21){for(let _0xbb28x8=_0xbb28x16[__Oxf0c71[0x49]];_0xbb28x8< _0xbb28x16[__Oxf0c71[0x4a]];++_0xbb28x8){console[__Oxf0c71[0x9]](`${__Oxf0c71[0x4b]}${_0xbb28x16[__Oxf0c71[0x15]]}${__Oxf0c71[0x4c]}${_0xbb28x8+ 1}${__Oxf0c71[0x4d]}${_0xbb28x16[__Oxf0c71[0x4a]]}${__Oxf0c71[0x0]}`); await appdoTask(_0xbb28x16[__Oxf0c71[0x48]],_0xbb28x16[__Oxf0c71[0x50]][__Oxf0c71[0x4f]][__Oxf0c71[0x53]]); await $[__Oxf0c71[0x2e]](5000)}}}}}}}}}}catch(e){$[__Oxf0c71[0x3a]](e,_0xbb28xf)}finally{_0xbb28xb(_0xbb28x10)}})})}async function appdoTask(_0xbb28x18,_0xbb28x19){let _0xbb28x13=__Oxf0c71[0x54];let _0xbb28x14={"\x74\x79\x70\x65":_0xbb28x18,"\x74\x61\x73\x6B\x49\x6E\x66\x6F":_0xbb28x19}; await $[__Oxf0c71[0x2e]](parseInt(Math[__Oxf0c71[0x2d]]()* 2500+ 500,10));let _0xbb28xd= await getSign(_0xbb28x13,_0xbb28x14);return  new Promise((_0xbb28xb)=>{$[__Oxf0c71[0x3b]](apptaskUrl(_0xbb28x13,_0xbb28x14,_0xbb28xd),(_0xbb28xe,_0xbb28xf,_0xbb28x10)=>{try{if(_0xbb28xe){console[__Oxf0c71[0x9]](`${__Oxf0c71[0x0]}${JSON[__Oxf0c71[0x33]](_0xbb28xe)}${__Oxf0c71[0x0]}`);console[__Oxf0c71[0x9]](`${__Oxf0c71[0x0]}${$[__Oxf0c71[0x15]]}${__Oxf0c71[0x3d]}`)}else {if(safeGet(_0xbb28x10)){_0xbb28x10= JSON[__Oxf0c71[0x35]](_0xbb28x10);if(_0xbb28x10[__Oxf0c71[0x3e]]=== 0){console[__Oxf0c71[0x9]](`${__Oxf0c71[0x55]}`)}else {console[__Oxf0c71[0x9]](JSON[__Oxf0c71[0x33]](_0xbb28x10))}}}}catch(e){$[__Oxf0c71[0x3a]](e,_0xbb28xf)}finally{_0xbb28xb(_0xbb28x10)}})})}function doTask(_0xbb28x18,_0xbb28x19){return  new Promise((_0xbb28xb)=>{$[__Oxf0c71[0x56]](taskUrl(__Oxf0c71[0x54],{"\x74\x79\x70\x65":_0xbb28x18,"\x74\x61\x73\x6B\x49\x6E\x66\x6F":_0xbb28x19}),(_0xbb28xe,_0xbb28xf,_0xbb28x10)=>{try{if(_0xbb28xe){console[__Oxf0c71[0x9]](`${__Oxf0c71[0x0]}${JSON[__Oxf0c71[0x33]](_0xbb28xe)}${__Oxf0c71[0x0]}`);console[__Oxf0c71[0x9]](`${__Oxf0c71[0x0]}${$[__Oxf0c71[0x15]]}${__Oxf0c71[0x3d]}`)}else {if(safeGet(_0xbb28x10)){_0xbb28x10= JSON[__Oxf0c71[0x35]](_0xbb28x10);if(_0xbb28x10[__Oxf0c71[0x3e]]=== 0){console[__Oxf0c71[0x9]](`${__Oxf0c71[0x55]}`)}else {console[__Oxf0c71[0x9]](_0xbb28x10)}}}}catch(e){$[__Oxf0c71[0x3a]](e,_0xbb28xf)}finally{_0xbb28xb(_0xbb28x10)}})})}async function getSign(_0xbb28x1c,_0xbb28x14){return  new Promise((_0xbb28xb)=>{$[__Oxf0c71[0x3b]]({url:`${__Oxf0c71[0x57]}`,body:`${__Oxf0c71[0x58]}${_0xbb28x1c}${__Oxf0c71[0x59]}${JSON[__Oxf0c71[0x33]](_0xbb28x14)}${__Oxf0c71[0x0]}`,headers:{"\x55\x73\x65\x72\x2D\x41\x67\x65\x6E\x74":__Oxf0c71[0x5a]},timeout:99000},(_0xbb28xe,_0xbb28xf,_0xbb28x10)=>{try{if(_0xbb28xe){console[__Oxf0c71[0x9]](`${__Oxf0c71[0x5b]}`)}else {try{_0xbb28x10= _0xbb28x10}catch(e){_0xbb28x10= __Oxf0c71[0x0]}}}catch(e){}finally{_0xbb28xb(_0xbb28x10|| __Oxf0c71[0x0])}})})}function apptaskUrl(_0xbb28x13= __Oxf0c71[0x0],_0xbb28x14= __Oxf0c71[0x0],_0xbb28xd){return {url:`${__Oxf0c71[0x0]}${JD_API_HOST}${__Oxf0c71[0x0]}`,body:`${__Oxf0c71[0x5c]}${encodeURIComponent(JSON[__Oxf0c71[0x33]](_0xbb28x14))}${__Oxf0c71[0x5d]}${_0xbb28xd}${__Oxf0c71[0x0]}`,headers:{'\x43\x6F\x6F\x6B\x69\x65':cookie,'\x48\x6F\x73\x74':__Oxf0c71[0x5e],'\x43\x6F\x6E\x6E\x65\x63\x74\x69\x6F\x6E':__Oxf0c71[0x5f],'\x43\x6F\x6E\x74\x65\x6E\x74\x2D\x54\x79\x70\x65':__Oxf0c71[0x60],'\x52\x65\x66\x65\x72\x65\x72':__Oxf0c71[0x0],'\x55\x73\x65\x72\x2D\x41\x67\x65\x6E\x74':__Oxf0c71[0x61],'\x41\x63\x63\x65\x70\x74\x2D\x4C\x61\x6E\x67\x75\x61\x67\x65':__Oxf0c71[0x62],'\x41\x63\x63\x65\x70\x74\x2D\x45\x6E\x63\x6F\x64\x69\x6E\x67':__Oxf0c71[0x63]}}}function taskUrl(_0xbb28x13,_0xbb28x14= {}){return {url:`${__Oxf0c71[0x0]}${JD_API_HOST}${__Oxf0c71[0x64]}${_0xbb28x13}${__Oxf0c71[0x59]}${encodeURIComponent(JSON[__Oxf0c71[0x33]](_0xbb28x14))}${__Oxf0c71[0x0]}`,headers:{'\x43\x6F\x6F\x6B\x69\x65':cookie,'\x48\x6F\x73\x74':__Oxf0c71[0x5e],'\x43\x6F\x6E\x6E\x65\x63\x74\x69\x6F\x6E':__Oxf0c71[0x5f],'\x43\x6F\x6E\x74\x65\x6E\x74\x2D\x54\x79\x70\x65':__Oxf0c71[0x65],'\x52\x65\x66\x65\x72\x65\x72':__Oxf0c71[0x66],'\x55\x73\x65\x72\x2D\x41\x67\x65\x6E\x74':$[__Oxf0c71[0x2]]()?(process[__Oxf0c71[0x7]][__Oxf0c71[0x67]]?process[__Oxf0c71[0x7]][__Oxf0c71[0x67]]:(require(__Oxf0c71[0x69])[__Oxf0c71[0x68]])):($[__Oxf0c71[0xc]](__Oxf0c71[0x6a])?$[__Oxf0c71[0xc]](__Oxf0c71[0x6a]):__Oxf0c71[0x6b]),'\x41\x63\x63\x65\x70\x74\x2D\x4C\x61\x6E\x67\x75\x61\x67\x65':__Oxf0c71[0x6c],'\x41\x63\x63\x65\x70\x74\x2D\x45\x6E\x63\x6F\x64\x69\x6E\x67':__Oxf0c71[0x63]}}}function TotalBean(){return  new Promise(async (_0xbb28xb)=>{const _0xbb28x20={"\x75\x72\x6C":`${__Oxf0c71[0x6d]}`,"\x68\x65\x61\x64\x65\x72\x73":{"\x41\x63\x63\x65\x70\x74":__Oxf0c71[0x6e],"\x43\x6F\x6E\x74\x65\x6E\x74\x2D\x54\x79\x70\x65":__Oxf0c71[0x60],"\x41\x63\x63\x65\x70\x74\x2D\x45\x6E\x63\x6F\x64\x69\x6E\x67":__Oxf0c71[0x63],"\x41\x63\x63\x65\x70\x74\x2D\x4C\x61\x6E\x67\x75\x61\x67\x65":__Oxf0c71[0x6c],"\x43\x6F\x6E\x6E\x65\x63\x74\x69\x6F\x6E":__Oxf0c71[0x5f],"\x43\x6F\x6F\x6B\x69\x65":cookie,"\x52\x65\x66\x65\x72\x65\x72":__Oxf0c71[0x6f],"\x55\x73\x65\x72\x2D\x41\x67\x65\x6E\x74":$[__Oxf0c71[0x2]]()?(process[__Oxf0c71[0x7]][__Oxf0c71[0x67]]?process[__Oxf0c71[0x7]][__Oxf0c71[0x67]]:(require(__Oxf0c71[0x69])[__Oxf0c71[0x68]])):($[__Oxf0c71[0xc]](__Oxf0c71[0x6a])?$[__Oxf0c71[0xc]](__Oxf0c71[0x6a]):__Oxf0c71[0x6b])}};$[__Oxf0c71[0x3b]](_0xbb28x20,(_0xbb28xe,_0xbb28xf,_0xbb28x10)=>{try{if(_0xbb28xe){console[__Oxf0c71[0x9]](`${__Oxf0c71[0x0]}${JSON[__Oxf0c71[0x33]](_0xbb28xe)}${__Oxf0c71[0x0]}`);console[__Oxf0c71[0x9]](`${__Oxf0c71[0x0]}${$[__Oxf0c71[0x15]]}${__Oxf0c71[0x3d]}`)}else {if(_0xbb28x10){_0xbb28x10= JSON[__Oxf0c71[0x35]](_0xbb28x10);if(_0xbb28x10[__Oxf0c71[0x70]]=== 13){$[__Oxf0c71[0x21]]= false;return};if(_0xbb28x10[__Oxf0c71[0x70]]=== 0){$[__Oxf0c71[0x22]]= (_0xbb28x10[__Oxf0c71[0x71]]&& _0xbb28x10[__Oxf0c71[0x71]][__Oxf0c71[0x72]])|| $[__Oxf0c71[0x1e]]}else {$[__Oxf0c71[0x22]]= $[__Oxf0c71[0x1e]]}}else {console[__Oxf0c71[0x9]](`${__Oxf0c71[0x73]}`)}}}catch(e){$[__Oxf0c71[0x3a]](e,_0xbb28xf)}finally{_0xbb28xb()}})})}function safeGet(_0xbb28x10){try{if( typeof JSON[__Oxf0c71[0x35]](_0xbb28x10)== __Oxf0c71[0x74]){return true}}catch(e){console[__Oxf0c71[0x9]](e);console[__Oxf0c71[0x9]](`${__Oxf0c71[0x75]}`);return false}}function jsonParse(_0xbb28x23){if( typeof _0xbb28x23== __Oxf0c71[0x76]){try{return JSON[__Oxf0c71[0x35]](_0xbb28x23)}catch(e){console[__Oxf0c71[0x9]](e);$[__Oxf0c71[0x1b]]($[__Oxf0c71[0x15]],__Oxf0c71[0x0],__Oxf0c71[0x77]);return []}}}(function(_0xbb28x24,_0xbb28x25,_0xbb28x26,_0xbb28x27,_0xbb28x28,_0xbb28x29){_0xbb28x29= __Oxf0c71[0x78];_0xbb28x27= function(_0xbb28x2a){if( typeof alert!== _0xbb28x29){alert(_0xbb28x2a)};if( typeof console!== _0xbb28x29){console[__Oxf0c71[0x9]](_0xbb28x2a)}};_0xbb28x26= function(_0xbb28x2b,_0xbb28x24){return _0xbb28x2b+ _0xbb28x24};_0xbb28x28= _0xbb28x26(__Oxf0c71[0x79],_0xbb28x26(_0xbb28x26(__Oxf0c71[0x7a],__Oxf0c71[0x7b]),__Oxf0c71[0x7c]));try{_0xbb28x24= __encode;if(!( typeof _0xbb28x24!== _0xbb28x29&& _0xbb28x24=== _0xbb28x26(__Oxf0c71[0x7d],__Oxf0c71[0x7e]))){_0xbb28x27(_0xbb28x28)}}catch(e){_0xbb28x27(_0xbb28x28)}})({})


// prettier-ignore
function Env(t,e){"undefined"!=typeof process&&JSON.stringify(process.env).indexOf("GITHUB")>-1&&process.exit(0);class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`🔔${this.name}, 开始!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),n={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(n,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)})):this.isQuanX()?(this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t))):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();s&&this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)}))}post(t,e=(()=>{})){if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.post(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method="POST",this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){this.initGotEnv(t);const{url:s,...i}=t;this.got.post(s,i).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)})}}time(t,e=null){const s=e?new Date(e):new Date;let i={"M+":s.getMonth()+1,"d+":s.getDate(),"H+":s.getHours(),"m+":s.getMinutes(),"s+":s.getSeconds(),"q+":Math.floor((s.getMonth()+3)/3),S:s.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(s.getFullYear()+"").substr(4-RegExp.$1.length)));for(let e in i)new RegExp("("+e+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?i[e]:("00"+i[e]).substr((""+i[e]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};if(this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r))),!this.isMuteLog){let t=["","==============📣系统通知📣=============="];t.push(e),s&&t.push(s),i&&t.push(i),console.log(t.join("\n")),this.logs=this.logs.concat(t)}}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`❗️${this.name}, 错误!`,t.stack):this.log("",`❗️${this.name}, 错误!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`🔔${this.name}, 结束! 🕛 ${s} 秒`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}