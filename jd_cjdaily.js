/*
CJ每日抢好礼通用活动

变量：
//export jd_cjdaily_activityId="活动ID"

cron:1 1 1 1 *
============Quantumultx===============
[task_local]
#CJ每日抢好礼通用活动
1 1 1 1 * jd_cjdaily.js, tag=CJ每日抢好礼通用活动, enabled=true

*/

const $ = new Env('CJ每日抢好礼通用活动');
var __encode ='jsjiami.com',_a={}, _0xb483=["\x5F\x64\x65\x63\x6F\x64\x65","\x68\x74\x74\x70\x3A\x2F\x2F\x77\x77\x77\x2E\x73\x6F\x6A\x73\x6F\x6E\x2E\x63\x6F\x6D\x2F\x6A\x61\x76\x61\x73\x63\x72\x69\x70\x74\x6F\x62\x66\x75\x73\x63\x61\x74\x6F\x72\x2E\x68\x74\x6D\x6C"];(function(_0xd642x1){_0xd642x1[_0xb483[0]]= _0xb483[1]})(_a);var __Oxec03f=["\x69\x73\x4E\x6F\x64\x65","\x2E\x2F\x6A\x64\x43\x6F\x6F\x6B\x69\x65\x2E\x6A\x73","","\x2E\x2F\x73\x65\x6E\x64\x4E\x6F\x74\x69\x66\x79","\x2E\x2F\x66\x75\x6E\x63\x74\x69\x6F\x6E\x2F\x6B\x72\x67\x65\x74\x54\x6F\x6B\x65\x6E","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x63\x6A\x68\x79\x2D\x69\x73\x76\x2E\x69\x73\x76\x6A\x63\x6C\x6F\x75\x64\x2E\x63\x6F\x6D","\x70\x75\x73\x68","\x66\x6F\x72\x45\x61\x63\x68","\x6B\x65\x79\x73","\x4A\x44\x5F\x44\x45\x42\x55\x47","\x65\x6E\x76","\x66\x61\x6C\x73\x65","\x6C\x6F\x67","\x66\x69\x6C\x74\x65\x72","\x43\x6F\x6F\x6B\x69\x65\x4A\x44","\x67\x65\x74\x64\x61\x74\x61","\x43\x6F\x6F\x6B\x69\x65\x4A\x44\x32","\x63\x6F\x6F\x6B\x69\x65","\x6D\x61\x70","\x43\x6F\x6F\x6B\x69\x65\x73\x4A\x44","\x5B\x5D","\x68\x6F\x74\x46\x6C\x61\x67","\x6F\x75\x74\x46\x6C\x61\x67","\x61\x63\x74\x69\x76\x69\x74\x79\x45\x6E\x64","\u6765\u665A\u4E86","\u62A2\u5149\u4E86","\u5DF2\u53D1\u5B8C","\u5DF2\u9886\u5B8C","\u975E\u6CD5\u64CD\u4F5C","\u5956\u54C1\u53D1\u9001\u5931\u8D25","\u672A\u5F00\u59CB","\u53D1\u653E\u5B8C","\u5168\u90E8\u88AB\u9886\u53D6","\u4F59\u989D\u4E0D\u8DB3","\u5DF2\u7ED3\u675F","\u4EAC\u8C46\u8BA1\u5212","\x6A\x64\x5F\x63\x6A\x64\x61\x69\x6C\x79\x5F\x61\x63\x74\x69\x76\x69\x74\x79\x49\x64","\x64\x6F\x6E\x65","\x66\x69\x6E\x61\x6C\x6C\x79","\x6C\x6F\x67\x45\x72\x72","\x63\x61\x74\x63\x68","\x5C\x6E\u8BF7\u586B\u5199\x43\x4A\u6BCF\u65E5\u62A2\u597D\u793C\u7684\u6D3B\u52A8\x49\x44\x2C\u53D8\u91CF\u662F\x6A\x64\x5F\x63\x6A\x64\x61\x69\x6C\x79\x5F\x61\x63\x74\x69\x76\x69\x74\x79\x49\x64\x5C\x6E","\x6E\x61\x6D\x65","\u3010\u63D0\u793A\u3011\u8BF7\u5148\u83B7\u53D6\x63\x6F\x6F\x6B\x69\x65\x0A\u76F4\u63A5\u4F7F\u7528\x4E\x6F\x62\x79\x44\x61\u7684\u4EAC\u4E1C\u7B7E\u5230\u83B7\u53D6","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x62\x65\x61\x6E\x2E\x6D\x2E\x6A\x64\x2E\x63\x6F\x6D\x2F","\x6D\x73\x67","\x61\x63\x74\x69\x76\x69\x74\x79\x49\x64","\u6D3B\u52A8\u5165\u53E3\x3A\x20\x68\x74\x74\x70\x73\x3A\x2F\x2F\x63\x6A\x68\x79\x2D\x69\x73\x76\x2E\x69\x73\x76\x6A\x63\x6C\x6F\x75\x64\x2E\x63\x6F\x6D\x2F\x61\x63\x74\x69\x76\x69\x74\x79\x2F\x64\x61\x69\x6C\x79\x2F\x77\x78\x2F\x69\x6E\x64\x65\x78\x50\x61\x67\x65\x3F\x61\x63\x74\x69\x76\x69\x74\x79\x49\x64\x3D","\x6C\x65\x6E\x67\x74\x68","\x55\x73\x65\x72\x4E\x61\x6D\x65","\x6D\x61\x74\x63\x68","\x69\x6E\x64\x65\x78","\x62\x65\x61\x6E","\x6E\x69\x63\x6B\x4E\x61\x6D\x65","\x0A\x2A\x2A\x2A\x2A\x2A\x2A\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7","\u3011","\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x0A","\x65\x6E\x64\x54\x69\x6D\x65","\x74\x6F\x6B\x65\x6E","\x50\x69\x6E","\x65\x72\x72\x73","\u83B7\u53D6\x5B\x74\x6F\x6B\x65\x6E\x5D\u5931\u8D25\uFF01","\u83B7\u53D6\x63\x6F\x6F\x6B\x69\x65\u5931\u8D25","\u6D3B\u52A8\u7ED3\u675F","\u6B64\x69\x70\u5DF2\u88AB\u9650\u5236\uFF0C\u8BF7\u8FC7\x31\x30\u5206\u949F\u540E\u518D\u6267\u884C\u811A\u672C\x0A","\x67\x65\x74\x53\x69\x6D\x70\x6C\x65\x41\x63\x74\x49\x6E\x66\x6F\x56\x6F","\x77\x61\x69\x74","\x67\x65\x74\x4D\x79\x50\x69\x6E\x67","\u83B7\u53D6\x5B\x50\x69\x6E\x5D\u5931\u8D25\uFF01","\x61\x63\x63\x65\x73\x73\x4C\x6F\x67\x57\x69\x74\x68\x41\x44","\x67\x72\x61\x62\x47\x69\x66\x74","\x72\x61\x6E\x64\x6F\x6D","\x50\x4F\x53\x54","\x2F\x63\x75\x73\x74\x6F\x6D\x65\x72\x2F\x67\x65\x74\x4D\x79\x50\x69\x6E\x67","\x74\x6F\x6B\x65\x6E\x3D","\x26\x66\x72\x6F\x6D\x54\x79\x70\x65\x3D\x41\x50\x50\x26\x75\x73\x65\x72\x49\x64\x3D","\x76\x65\x6E\x64\x65\x72\x49\x64","\x2F\x63\x75\x73\x74\x6F\x6D\x65\x72\x2F\x67\x65\x74\x53\x69\x6D\x70\x6C\x65\x41\x63\x74\x49\x6E\x66\x6F\x56\x6F","\x61\x63\x74\x69\x76\x69\x74\x79\x49\x64\x3D","\x2F\x6D\x63\x2F\x6E\x65\x77\x2F\x62\x72\x61\x6E\x64\x43\x61\x72\x64\x2F\x63\x6F\x6D\x6D\x6F\x6E\x2F\x73\x68\x6F\x70\x41\x6E\x64\x42\x72\x61\x6E\x64\x2F\x67\x65\x74\x4F\x70\x65\x6E\x43\x61\x72\x64\x49\x6E\x66\x6F","\x76\x65\x6E\x64\x65\x72\x49\x64\x3D","\x26\x61\x63\x74\x69\x76\x69\x74\x79\x54\x79\x70\x65\x3D","\x61\x63\x74\x69\x76\x69\x74\x79\x54\x79\x70\x65","\x26\x62\x75\x79\x65\x72\x50\x69\x6E\x3D","\x67\x65\x74\x4F\x70\x65\x6E\x43\x61\x72\x64\x49\x6E\x66\x6F","\x2F\x63\x6F\x6D\x6D\x6F\x6E\x2F\x61\x63\x63\x65\x73\x73\x4C\x6F\x67","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x63\x6A\x68\x79\x2D\x69\x73\x76\x2E\x69\x73\x76\x6A\x63\x6C\x6F\x75\x64\x2E\x63\x6F\x6D\x2F\x61\x63\x74\x69\x76\x69\x74\x79\x2F\x64\x61\x69\x6C\x79\x2F\x77\x78\x2F\x69\x6E\x64\x65\x78\x50\x61\x67\x65\x3F\x61\x63\x74\x69\x76\x69\x74\x79\x49\x64\x3D","\x26\x63\x6F\x64\x65\x3D","\x26\x70\x69\x6E\x3D","\x26\x61\x63\x74\x69\x76\x69\x74\x79\x49\x64\x3D","\x26\x70\x61\x67\x65\x55\x72\x6C\x3D","\x26\x73\x75\x62\x54\x79\x70\x65\x3D\x61\x70\x70\x26\x61\x64\x53\x6F\x75\x72\x63\x65\x3D","\x2F\x64\x61\x69\x6C\x79\x2F\x61\x63\x74\x69\x76\x69\x74\x79\x43\x6F\x6E\x74\x65\x6E\x74","\x61\x63\x74\x69\x76\x69\x74\x79\x43\x6F\x6E\x74\x65\x6E\x74","\x2F\x64\x61\x69\x6C\x79\x2F\x66\x6F\x6C\x6C\x6F\x77","\x66\x6F\x6C\x6C\x6F\x77","\x2F\x61\x63\x74\x69\x76\x69\x74\x79\x2F\x64\x61\x69\x6C\x79\x2F\x77\x78\x2F\x67\x72\x61\x62\x47\x69\x66\x74","\x61\x63\x74\x49\x64\x3D","\x2F\x64\x61\x69\x6C\x79\x2F\x73\x68\x6F\x70\x49\x6E\x66\x6F","\x67\x65\x74\x53\x68\x61\x72\x65\x52\x65\x63\x6F\x72\x64","\x2F\x77\x78\x41\x63\x74\x69\x6F\x6E\x43\x6F\x6D\x6D\x6F\x6E\x2F\x67\x65\x74\x55\x73\x65\x72\x49\x6E\x66\x6F","\x70\x69\x6E\x3D","\x67\x65\x74\x55\x73\x65\x72\x49\x6E\x66\x6F","\u9519\u8BEF","\x73\x74\x61\x74\x75\x73\x43\x6F\x64\x65","\x75\x6E\x64\x65\x66\x69\x6E\x65\x64","\x74\x6F\x53\x74\x72","\x20\x41\x50\x49\u8BF7\u6C42\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u7F51\u8DEF\u91CD\u8BD5","\x70\x6F\x73\x74","\x64\x72\x61\x77\x43\x6F\x6E\x74\x65\x6E\x74","\x70\x61\x72\x73\x65","\x20\u6267\u884C\u4EFB\u52A1\u5F02\u5E38","\x72\x75\x6E\x46\x61\x6C\x61\x67","\x6F\x62\x6A\x65\x63\x74","\x72\x65\x73\x75\x6C\x74","\x64\x61\x74\x61","\x73\x65\x63\x72\x65\x74\x50\x69\x6E","\x6E\x69\x63\x6B\x6E\x61\x6D\x65","\x65\x72\x72\x6F\x72\x4D\x65\x73\x73\x61\x67\x65","\x20","\x73\x68\x6F\x70\x49\x64","\x63\x6F\x75\x6E\x74","\x6F\x70\x65\x6E\x43\x61\x72\x64","\x6F\x70\x65\x6E\x65\x64\x43\x61\x72\x64","\x79\x75\x6E\x4D\x69\x64\x49\x6D\x61\x67\x65\x55\x72\x6C","\x61\x74\x74\x72\x54\x6F\x75\x58\x69\x61\x6E\x67","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x69\x6D\x67\x31\x30\x2E\x33\x36\x30\x62\x75\x79\x69\x6D\x67\x2E\x63\x6F\x6D\x2F\x69\x6D\x67\x7A\x6F\x6E\x65\x2F\x6A\x66\x73\x2F\x74\x31\x2F\x37\x30\x32\x30\x2F\x32\x37\x2F\x31\x33\x35\x31\x31\x2F\x36\x31\x34\x32\x2F\x35\x63\x35\x31\x33\x38\x64\x38\x45\x34\x64\x66\x32\x65\x37\x36\x34\x2F\x35\x61\x31\x32\x31\x36\x61\x33\x61\x35\x30\x34\x33\x63\x35\x64\x2E\x70\x6E\x67","\x6A\x64\x4E\x69\x63\x6B","\x63\x61\x6E\x4A\x6F\x69\x6E","\x6E\x65\x65\x64\x46\x6F\x6C\x6C\x6F\x77","\x68\x61\x73\x46\x6F\x6C\x6C\x6F\x77","\x73\x74\x61\x72\x74\x54\x69\x6D\x65","\x74\x69\x74\x6C\x65","\x63\x75\x72\x72\x65\x6E\x74\x46\x6C\x6F\x6F\x72\x73","\x74\x6F\x74\x61\x6C\x4A\x6F\x69\x6E\x4D\x61\x6E\x73","\u7ED3\u675F","\x69\x6E\x64\x65\x78\x4F\x66","\x67\x69\x66\x74","\x69\x73\x4F\x6B","\u83B7\u5F97\uFF1A","\x67\x69\x66\x74\x4E\x61\x6D\x65","\x69\x6E\x63\x6C\x75\x64\x65\x73","\u4E0D\u8DB3","\u706B\u7206","\u4E0A\u9650","\u4E00\u6B21","\u64E6\u80A9","\u4E0B\u6B21\u518D\u6765","\u4F1A\u5458","\x2D\x3E\x20","\x61\x70\x70\x6C\x69\x63\x61\x74\x69\x6F\x6E\x2F\x6A\x73\x6F\x6E","\x67\x7A\x69\x70\x2C\x20\x64\x65\x66\x6C\x61\x74\x65\x2C\x20\x62\x72","\x7A\x68\x2D\x63\x6E","\x6B\x65\x65\x70\x2D\x61\x6C\x69\x76\x65","\x61\x70\x70\x6C\x69\x63\x61\x74\x69\x6F\x6E\x2F\x78\x2D\x77\x77\x77\x2D\x66\x6F\x72\x6D\x2D\x75\x72\x6C\x65\x6E\x63\x6F\x64\x65\x64","\x55\x41","\x58\x4D\x4C\x48\x74\x74\x70\x52\x65\x71\x75\x65\x73\x74","\x52\x65\x66\x65\x72\x65\x72","\x43\x6F\x6F\x6B\x69\x65","\x41\x55\x54\x48\x5F\x43\x5F\x55\x53\x45\x52\x3D","\x3B","\x61\x70\x70\x6C\x69\x63\x61\x74\x69\x6F\x6E\x2F\x6A\x73\x6F\x6E\x2C\x20\x74\x65\x78\x74\x2F\x70\x6C\x61\x69\x6E\x2C\x20\x2A\x2F\x2A","\x20\x63\x6F\x6F\x6B\x69\x65\x20\x41\x50\x49\u8BF7\u6C42\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u7F51\u8DEF\u91CD\u8BD5","\u6D3B\u52A8\u5DF2\u7ED3\u675F","\x67\x65\x74","\x73\x65\x74\x2D\x63\x6F\x6F\x6B\x69\x65","\x68\x65\x61\x64\x65\x72\x73","\x3D","\x73\x70\x6C\x69\x74","\x73\x75\x62\x73\x74\x72","\x6A\x64\x61\x70\x70\x3B\x69\x50\x68\x6F\x6E\x65\x3B\x31\x30\x2E\x31\x2E\x34\x3B\x31\x33\x2E\x31\x2E\x32\x3B","\x3B\x6E\x65\x74\x77\x6F\x72\x6B\x2F\x77\x69\x66\x69\x3B\x6D\x6F\x64\x65\x6C\x2F\x69\x50\x68\x6F\x6E\x65\x38\x2C\x31\x3B\x61\x64\x64\x72\x65\x73\x73\x69\x64\x2F\x32\x33\x30\x38\x34\x36\x30\x36\x31\x31\x3B\x61\x70\x70\x42\x75\x69\x6C\x64\x2F\x31\x36\x37\x38\x31\x34\x3B\x6A\x64\x53\x75\x70\x70\x6F\x72\x74\x44\x61\x72\x6B\x4D\x6F\x64\x65\x2F\x30\x3B\x4D\x6F\x7A\x69\x6C\x6C\x61\x2F\x35\x2E\x30\x20\x28\x69\x50\x68\x6F\x6E\x65\x3B\x20\x43\x50\x55\x20\x69\x50\x68\x6F\x6E\x65\x20\x4F\x53\x20\x31\x33\x5F\x31\x5F\x32\x20\x6C\x69\x6B\x65\x20\x4D\x61\x63\x20\x4F\x53\x20\x58\x29\x20\x41\x70\x70\x6C\x65\x57\x65\x62\x4B\x69\x74\x2F\x36\x30\x35\x2E\x31\x2E\x31\x35\x20\x28\x4B\x48\x54\x4D\x4C\x2C\x20\x6C\x69\x6B\x65\x20\x47\x65\x63\x6B\x6F\x29\x20\x4D\x6F\x62\x69\x6C\x65\x2F\x31\x35\x45\x31\x34\x38\x3B\x73\x75\x70\x70\x6F\x72\x74\x4A\x44\x53\x48\x57\x4B\x2F\x31","\x61\x62\x63\x64\x65\x66\x30\x31\x32\x33\x34\x35\x36\x37\x38\x39","\x66\x6C\x6F\x6F\x72","\x63\x68\x61\x72\x41\x74","\x73\x74\x72\x69\x6E\x67","\u8BF7\u52FF\u968F\u610F\u5728\x42\x6F\x78\x4A\x73\u8F93\u5165\u6846\u4FEE\u6539\u5185\u5BB9\x0A\u5EFA\u8BAE\u901A\u8FC7\u811A\u672C\u53BB\u83B7\u53D6\x63\x6F\x6F\x6B\x69\x65","\u5220\u9664","\u7248\u672C\u53F7\uFF0C\x6A\x73\u4F1A\u5B9A","\u671F\u5F39\u7A97\uFF0C","\u8FD8\u8BF7\u652F\u6301\u6211\u4EEC\u7684\u5DE5\u4F5C","\x6A\x73\x6A\x69\x61","\x6D\x69\x2E\x63\x6F\x6D"];const jdCookieNode=$[__Oxec03f[0x0]]()?require(__Oxec03f[0x1]):__Oxec03f[0x2];const notify=$[__Oxec03f[0x0]]()?require(__Oxec03f[0x3]):__Oxec03f[0x2];const getToken=require(__Oxec03f[0x4]);let domains=__Oxec03f[0x5];let cookiesArr=[],cookie=__Oxec03f[0x2];if($[__Oxec03f[0x0]]()){Object[__Oxec03f[0x8]](jdCookieNode)[__Oxec03f[0x7]]((_0x4524x7)=>{cookiesArr[__Oxec03f[0x6]](jdCookieNode[_0x4524x7])});if(process[__Oxec03f[0xa]][__Oxec03f[0x9]]&& process[__Oxec03f[0xa]][__Oxec03f[0x9]]=== __Oxec03f[0xb]){console[__Oxec03f[0xc]]= ()=>{}}}else {cookiesArr= [$[__Oxec03f[0xf]](__Oxec03f[0xe]),$[__Oxec03f[0xf]](__Oxec03f[0x10]),...jsonParse($[__Oxec03f[0xf]](__Oxec03f[0x13])|| __Oxec03f[0x14])[__Oxec03f[0x12]]((_0x4524x7)=>{return _0x4524x7[__Oxec03f[0x11]]})][__Oxec03f[0xd]]((_0x4524x7)=>{return !!_0x4524x7})};allMessage= __Oxec03f[0x2];message= __Oxec03f[0x2];$[__Oxec03f[0x15]]= false;$[__Oxec03f[0x16]]= false;$[__Oxec03f[0x17]]= false;let lz_jdpin_token_cookie=__Oxec03f[0x2];let activityCookie=__Oxec03f[0x2];let lz_cookie={};let jd_cjdaily_activityId=__Oxec03f[0x2];let stopKeywords=[__Oxec03f[0x18],__Oxec03f[0x19],__Oxec03f[0x1a],__Oxec03f[0x1b],__Oxec03f[0x1c],__Oxec03f[0x1d],__Oxec03f[0x1e],__Oxec03f[0x1f],__Oxec03f[0x20],__Oxec03f[0x21],__Oxec03f[0x22],__Oxec03f[0x23]];jd_cjdaily_activityId= $[__Oxec03f[0x0]]()?(process[__Oxec03f[0xa]][__Oxec03f[0x24]]?process[__Oxec03f[0xa]][__Oxec03f[0x24]]:`${__Oxec03f[0x2]}${jd_cjdaily_activityId}${__Oxec03f[0x2]}`):($[__Oxec03f[0xf]](__Oxec03f[0x24])?$[__Oxec03f[0xf]](__Oxec03f[0x24]):`${__Oxec03f[0x2]}${jd_cjdaily_activityId}${__Oxec03f[0x2]}`);!(async ()=>{if(!jd_cjdaily_activityId){console[__Oxec03f[0xc]](`${__Oxec03f[0x29]}`);return};if(!cookiesArr[0x0]){$[__Oxec03f[0x2d]]($[__Oxec03f[0x2a]],__Oxec03f[0x2b],__Oxec03f[0x2c],{"\x6F\x70\x65\x6E\x2D\x75\x72\x6C":__Oxec03f[0x2c]});return};$[__Oxec03f[0x2e]]= jd_cjdaily_activityId;console[__Oxec03f[0xc]](__Oxec03f[0x2f]+ $[__Oxec03f[0x2e]]);for(let _0x4524xe=0;_0x4524xe< cookiesArr[__Oxec03f[0x30]];_0x4524xe++){cookie= cookiesArr[_0x4524xe];originCookie= cookiesArr[_0x4524xe];if(cookie){$[__Oxec03f[0x31]]= decodeURIComponent(cookie[__Oxec03f[0x32]](/pt_pin=([^; ]+)(?=;?)/)&& cookie[__Oxec03f[0x32]](/pt_pin=([^; ]+)(?=;?)/)[0x1]);$[__Oxec03f[0x33]]= _0x4524xe+ 1;message= __Oxec03f[0x2];$[__Oxec03f[0x34]]= 0;$[__Oxec03f[0x15]]= false;$[__Oxec03f[0x35]]= __Oxec03f[0x2];console[__Oxec03f[0xc]](__Oxec03f[0x36]+ $[__Oxec03f[0x33]]+ __Oxec03f[0x37]+ ($[__Oxec03f[0x35]]|| $[__Oxec03f[0x31]])+ __Oxec03f[0x38]); await getUA(); await run();if($[__Oxec03f[0x16]]|| $[__Oxec03f[0x17]]){break}}};if(allMessage){$[__Oxec03f[0x2d]]($[__Oxec03f[0x2a]],`${__Oxec03f[0x2]}`,`${__Oxec03f[0x2]}${allMessage}${__Oxec03f[0x2]}`)}})()[__Oxec03f[0x28]]((_0x4524xd)=>{return $[__Oxec03f[0x27]](_0x4524xd)})[__Oxec03f[0x26]](()=>{return $[__Oxec03f[0x25]]()});async function run(){try{$[__Oxec03f[0x39]]= 0;lz_jdpin_token_cookie= __Oxec03f[0x2];$[__Oxec03f[0x3a]]= __Oxec03f[0x2];$[__Oxec03f[0x3b]]= __Oxec03f[0x2];$[__Oxec03f[0x3c]]= false;let _0x4524x10=false;$[__Oxec03f[0x3a]]=  await getToken(cookie,domains);if($[__Oxec03f[0x3a]]== __Oxec03f[0x2]){console[__Oxec03f[0xc]](__Oxec03f[0x3d]);return}; await getCk();if(activityCookie== __Oxec03f[0x2]){console[__Oxec03f[0xc]](`${__Oxec03f[0x3e]}`);return};if($[__Oxec03f[0x17]]=== true){console[__Oxec03f[0xc]](__Oxec03f[0x3f]);return};if($[__Oxec03f[0x16]]){console[__Oxec03f[0xc]](__Oxec03f[0x40]);return}; await takePostRequest(__Oxec03f[0x41]); await $[__Oxec03f[0x42]](200); await takePostRequest(__Oxec03f[0x43]);if(!$[__Oxec03f[0x3b]]){console[__Oxec03f[0xc]](__Oxec03f[0x44]);return}; await takePostRequest(__Oxec03f[0x45]); await $[__Oxec03f[0x42]](200);if($[__Oxec03f[0x15]]){return};for(let _0x4524x11=0;_0x4524x11< 5;_0x4524x11++){if(!$[__Oxec03f[0x3c]]){ await takePostRequest(__Oxec03f[0x46]); await $[__Oxec03f[0x42]](500)}};if($[__Oxec03f[0x16]]){console[__Oxec03f[0xc]](__Oxec03f[0x40]);return}; await $[__Oxec03f[0x42]](1000);if($[__Oxec03f[0x33]]% 3== 0){ await $[__Oxec03f[0x42]](parseInt(Math[__Oxec03f[0x47]]()* 3000+ 3000,10))}}catch(e){console[__Oxec03f[0xc]](e)}}async function takePostRequest(_0x4524x13){if($[__Oxec03f[0x16]]){return};let _0x4524x14=__Oxec03f[0x5];let _0x4524x15=`${__Oxec03f[0x2]}`;let _0x4524x16=__Oxec03f[0x48];let _0x4524x17=__Oxec03f[0x2];switch(_0x4524x13){case __Oxec03f[0x43]:url= `${__Oxec03f[0x2]}${_0x4524x14}${__Oxec03f[0x49]}`;_0x4524x15= `${__Oxec03f[0x4a]}${$[__Oxec03f[0x3a]]}${__Oxec03f[0x4b]}${$[__Oxec03f[0x4c]]}${__Oxec03f[0x2]}`;break;case __Oxec03f[0x41]:url= `${__Oxec03f[0x2]}${_0x4524x14}${__Oxec03f[0x4d]}`;_0x4524x15= `${__Oxec03f[0x4e]}${$[__Oxec03f[0x2e]]}${__Oxec03f[0x2]}`;break;case __Oxec03f[0x54]:url= `${__Oxec03f[0x2]}${_0x4524x14}${__Oxec03f[0x4f]}`;_0x4524x15= `${__Oxec03f[0x50]}${$[__Oxec03f[0x4c]]}${__Oxec03f[0x51]}${$[__Oxec03f[0x52]]}${__Oxec03f[0x53]}${encodeURIComponent(encodeURIComponent($.Pin))}${__Oxec03f[0x2]}`;break;case __Oxec03f[0x45]:url= `${__Oxec03f[0x2]}${_0x4524x14}${__Oxec03f[0x55]}`;let _0x4524x18=`${__Oxec03f[0x56]}${$[__Oxec03f[0x2e]]}${__Oxec03f[0x2]}`;_0x4524x15= `${__Oxec03f[0x50]}${$[__Oxec03f[0x4c]]}${__Oxec03f[0x57]}${$[__Oxec03f[0x52]]}${__Oxec03f[0x58]}${encodeURIComponent(encodeURIComponent($.Pin))}${__Oxec03f[0x59]}${$[__Oxec03f[0x2e]]}${__Oxec03f[0x5a]}${encodeURIComponent(_0x4524x18)}${__Oxec03f[0x5b]}`;break;case __Oxec03f[0x5d]:url= `${__Oxec03f[0x2]}${_0x4524x14}${__Oxec03f[0x5c]}`;_0x4524x15= `${__Oxec03f[0x4e]}${$[__Oxec03f[0x2e]]}${__Oxec03f[0x58]}${encodeURIComponent(encodeURIComponent($.Pin))}${__Oxec03f[0x2]}`;break;case __Oxec03f[0x5f]:url= `${__Oxec03f[0x2]}${_0x4524x14}${__Oxec03f[0x5e]}`;_0x4524x15= `${__Oxec03f[0x4e]}${$[__Oxec03f[0x2e]]}${__Oxec03f[0x58]}${encodeURIComponent(encodeURIComponent($.Pin))}${__Oxec03f[0x2]}`;break;case __Oxec03f[0x46]:url= `${__Oxec03f[0x2]}${_0x4524x14}${__Oxec03f[0x60]}`;_0x4524x15= `${__Oxec03f[0x61]}${$[__Oxec03f[0x2e]]}${__Oxec03f[0x58]}${encodeURIComponent(encodeURIComponent($.Pin))}${__Oxec03f[0x2]}`;break;case __Oxec03f[0x63]:url= `${__Oxec03f[0x2]}${_0x4524x14}${__Oxec03f[0x62]}`;_0x4524x15= `${__Oxec03f[0x4e]}${$[__Oxec03f[0x2e]]}${__Oxec03f[0x2]}`;break;case __Oxec03f[0x66]:url= `${__Oxec03f[0x2]}${_0x4524x14}${__Oxec03f[0x64]}`;_0x4524x15= `${__Oxec03f[0x65]}${encodeURIComponent(encodeURIComponent($.Pin))}${__Oxec03f[0x2]}`;break;default:console[__Oxec03f[0xc]](`${__Oxec03f[0x67]}${_0x4524x13}${__Oxec03f[0x2]}`)};let _0x4524x19=getPostRequest(url,_0x4524x15,_0x4524x16);return  new Promise(async (_0x4524x1a)=>{$[__Oxec03f[0x6c]](_0x4524x19,(_0x4524x1b,_0x4524x1c,_0x4524x1d)=>{try{setActivityCookie(_0x4524x1c);if(_0x4524x1b){if(_0x4524x1c&&  typeof _0x4524x1c[__Oxec03f[0x68]]!= __Oxec03f[0x69]){if(_0x4524x1c[__Oxec03f[0x68]]== 493){console[__Oxec03f[0xc]](__Oxec03f[0x40]);$[__Oxec03f[0x16]]= true}};console[__Oxec03f[0xc]](`${__Oxec03f[0x2]}${$[__Oxec03f[0x6a]](_0x4524x1b,_0x4524x1b)}${__Oxec03f[0x2]}`);console[__Oxec03f[0xc]](`${__Oxec03f[0x2]}${_0x4524x13}${__Oxec03f[0x6b]}`)}else {dealReturn(_0x4524x13,_0x4524x1d)}}catch(e){console[__Oxec03f[0xc]](e,_0x4524x1c)}finally{_0x4524x1a()}})})}async function dealReturn(_0x4524x13,_0x4524x1d){let _0x4524x1f=__Oxec03f[0x2];try{if(_0x4524x13!= __Oxec03f[0x45]|| _0x4524x13!= __Oxec03f[0x6d]){if(_0x4524x1d){_0x4524x1f= JSON[__Oxec03f[0x6e]](_0x4524x1d)}}}catch(_0x4524xd){console[__Oxec03f[0xc]](`${__Oxec03f[0x2]}${_0x4524x13}${__Oxec03f[0x6f]}`);console[__Oxec03f[0xc]](_0x4524x1d);$[__Oxec03f[0x70]]= false};try{switch(_0x4524x13){case __Oxec03f[0x43]:if( typeof _0x4524x1f== __Oxec03f[0x71]){if(_0x4524x1f[__Oxec03f[0x72]]&& _0x4524x1f[__Oxec03f[0x72]]=== true){if(_0x4524x1f[__Oxec03f[0x73]]&&  typeof _0x4524x1f[__Oxec03f[0x73]][__Oxec03f[0x74]]!= __Oxec03f[0x69]){$[__Oxec03f[0x3b]]= _0x4524x1f[__Oxec03f[0x73]][__Oxec03f[0x74]]};if(_0x4524x1f[__Oxec03f[0x73]]&&  typeof _0x4524x1f[__Oxec03f[0x73]][__Oxec03f[0x75]]!= __Oxec03f[0x69]){$[__Oxec03f[0x75]]= _0x4524x1f[__Oxec03f[0x73]][__Oxec03f[0x75]]}}else {if(_0x4524x1f[__Oxec03f[0x76]]){console[__Oxec03f[0xc]](`${__Oxec03f[0x2]}${_0x4524x13}${__Oxec03f[0x77]}${_0x4524x1f[__Oxec03f[0x76]]|| __Oxec03f[0x2]}${__Oxec03f[0x2]}`)}else {console[__Oxec03f[0xc]](`${__Oxec03f[0x2]}${_0x4524x13}${__Oxec03f[0x77]}${_0x4524x1d}${__Oxec03f[0x2]}`)}}}else {console[__Oxec03f[0xc]](`${__Oxec03f[0x2]}${_0x4524x13}${__Oxec03f[0x77]}${_0x4524x1d}${__Oxec03f[0x2]}`)};break;case __Oxec03f[0x41]:if( typeof _0x4524x1f== __Oxec03f[0x71]){if(_0x4524x1f[__Oxec03f[0x72]]&& _0x4524x1f[__Oxec03f[0x72]]=== true){if( typeof _0x4524x1f[__Oxec03f[0x73]][__Oxec03f[0x78]]!= __Oxec03f[0x69]){$[__Oxec03f[0x78]]= _0x4524x1f[__Oxec03f[0x73]][__Oxec03f[0x78]]};if( typeof _0x4524x1f[__Oxec03f[0x73]][__Oxec03f[0x4c]]!= __Oxec03f[0x69]){$[__Oxec03f[0x4c]]= _0x4524x1f[__Oxec03f[0x73]][__Oxec03f[0x4c]]};$[__Oxec03f[0x52]]= _0x4524x1f[__Oxec03f[0x73]][__Oxec03f[0x52]]}else {if(_0x4524x1f[__Oxec03f[0x76]]){console[__Oxec03f[0xc]](`${__Oxec03f[0x2]}${_0x4524x13}${__Oxec03f[0x77]}${_0x4524x1f[__Oxec03f[0x76]]|| __Oxec03f[0x2]}${__Oxec03f[0x2]}`)}else {console[__Oxec03f[0xc]](`${__Oxec03f[0x2]}${_0x4524x13}${__Oxec03f[0x77]}${_0x4524x1d}${__Oxec03f[0x2]}`)}}}else {console[__Oxec03f[0xc]](`${__Oxec03f[0x2]}${_0x4524x13}${__Oxec03f[0x77]}${_0x4524x1d}${__Oxec03f[0x2]}`)};break;case __Oxec03f[0x5f]:if( typeof _0x4524x1f== __Oxec03f[0x71]){if(_0x4524x1f[__Oxec03f[0x72]]&& _0x4524x1f[__Oxec03f[0x72]]=== true&& _0x4524x1f[__Oxec03f[0x79]]=== 0){}else {if(_0x4524x1f[__Oxec03f[0x76]]){console[__Oxec03f[0xc]](`${__Oxec03f[0x2]}${_0x4524x13}${__Oxec03f[0x77]}${_0x4524x1f[__Oxec03f[0x76]]|| __Oxec03f[0x2]}${__Oxec03f[0x2]}`)}else {console[__Oxec03f[0xc]](`${__Oxec03f[0x2]}${_0x4524x13}${__Oxec03f[0x77]}${_0x4524x1d}${__Oxec03f[0x2]}`)}}}else {console[__Oxec03f[0xc]](`${__Oxec03f[0x2]}${_0x4524x13}${__Oxec03f[0x77]}${_0x4524x1d}${__Oxec03f[0x2]}`)};break;case __Oxec03f[0x54]:if( typeof _0x4524x1f== __Oxec03f[0x71]){if(_0x4524x1f[__Oxec03f[0x72]]&& _0x4524x1f[__Oxec03f[0x72]]=== true){$[__Oxec03f[0x7a]]= _0x4524x1f[__Oxec03f[0x73]][__Oxec03f[0x7b]]|| false}else {if(_0x4524x1f[__Oxec03f[0x76]]){console[__Oxec03f[0xc]](`${__Oxec03f[0x2]}${_0x4524x13}${__Oxec03f[0x77]}${_0x4524x1f[__Oxec03f[0x76]]|| __Oxec03f[0x2]}${__Oxec03f[0x2]}`)}else {console[__Oxec03f[0xc]](`${__Oxec03f[0x2]}${_0x4524x13}${__Oxec03f[0x77]}${_0x4524x1d}${__Oxec03f[0x2]}`)}}}else {console[__Oxec03f[0xc]](`${__Oxec03f[0x2]}${_0x4524x13}${__Oxec03f[0x77]}${_0x4524x1d}${__Oxec03f[0x2]}`)};break;case __Oxec03f[0x66]:if( typeof _0x4524x1f== __Oxec03f[0x71]){if(_0x4524x1f[__Oxec03f[0x72]]&& _0x4524x1f[__Oxec03f[0x72]]=== true){if(_0x4524x1f[__Oxec03f[0x73]]&&  typeof _0x4524x1f[__Oxec03f[0x73]][__Oxec03f[0x7c]]!= __Oxec03f[0x69]){$[__Oxec03f[0x7d]]= _0x4524x1f[__Oxec03f[0x73]][__Oxec03f[0x7c]]|| __Oxec03f[0x7e]};$[__Oxec03f[0x7f]]= _0x4524x1f[__Oxec03f[0x73]][__Oxec03f[0x75]]|| __Oxec03f[0x2]}else {if(_0x4524x1f[__Oxec03f[0x76]]){console[__Oxec03f[0xc]](`${__Oxec03f[0x2]}${_0x4524x13}${__Oxec03f[0x77]}${_0x4524x1f[__Oxec03f[0x76]]|| __Oxec03f[0x2]}${__Oxec03f[0x2]}`)}else {console[__Oxec03f[0xc]](`${__Oxec03f[0x2]}${_0x4524x13}${__Oxec03f[0x77]}${_0x4524x1d}${__Oxec03f[0x2]}`)}}}else {console[__Oxec03f[0xc]](`${__Oxec03f[0x2]}${_0x4524x13}${__Oxec03f[0x77]}${_0x4524x1d}${__Oxec03f[0x2]}`)};break;case __Oxec03f[0x5d]:if( typeof _0x4524x1f== __Oxec03f[0x71]){if(_0x4524x1f[__Oxec03f[0x72]]&& _0x4524x1f[__Oxec03f[0x72]]=== true){$[__Oxec03f[0x80]]= _0x4524x1f[__Oxec03f[0x73]][__Oxec03f[0x80]]|| false;$[__Oxec03f[0x81]]= _0x4524x1f[__Oxec03f[0x73]][__Oxec03f[0x81]]|| false;$[__Oxec03f[0x82]]= _0x4524x1f[__Oxec03f[0x73]][__Oxec03f[0x82]]|| false;$[__Oxec03f[0x39]]= _0x4524x1f[__Oxec03f[0x73]][__Oxec03f[0x39]]|| __Oxec03f[0x2];$[__Oxec03f[0x83]]= _0x4524x1f[__Oxec03f[0x73]][__Oxec03f[0x83]]|| __Oxec03f[0x2];$[__Oxec03f[0x84]]= _0x4524x1f[__Oxec03f[0x73]][__Oxec03f[0x84]]|| __Oxec03f[0x2];$[__Oxec03f[0x85]]= _0x4524x1f[__Oxec03f[0x73]][__Oxec03f[0x85]]|| 0;$[__Oxec03f[0x86]]= _0x4524x1f[__Oxec03f[0x73]][__Oxec03f[0x86]]|| 0}else {if(_0x4524x1f[__Oxec03f[0x76]]){if(_0x4524x1f[__Oxec03f[0x76]][__Oxec03f[0x88]](__Oxec03f[0x87])>  -1){$[__Oxec03f[0x17]]= true};console[__Oxec03f[0xc]](`${__Oxec03f[0x2]}${_0x4524x13}${__Oxec03f[0x77]}${_0x4524x1f[__Oxec03f[0x76]]|| __Oxec03f[0x2]}${__Oxec03f[0x2]}`)}else {console[__Oxec03f[0xc]](`${__Oxec03f[0x2]}${_0x4524x13}${__Oxec03f[0x77]}${_0x4524x1d}${__Oxec03f[0x2]}`)}}}else {console[__Oxec03f[0xc]](`${__Oxec03f[0x2]}${_0x4524x13}${__Oxec03f[0x77]}${_0x4524x1d}${__Oxec03f[0x2]}`)};break;case __Oxec03f[0x46]:if( typeof _0x4524x1f== __Oxec03f[0x71]){if(_0x4524x1f[__Oxec03f[0x89]]&& _0x4524x1f[__Oxec03f[0x8a]]=== true){console[__Oxec03f[0xc]](`${__Oxec03f[0x8b]}${_0x4524x1f[__Oxec03f[0x89]][__Oxec03f[0x89]][__Oxec03f[0x8c]]}${__Oxec03f[0x2]}`)}else {msg= _0x4524x1f[__Oxec03f[0x2d]];if(msg){console[__Oxec03f[0xc]](`${__Oxec03f[0x2]}${_0x4524x1f[__Oxec03f[0x2d]]}${__Oxec03f[0x2]}`);for(let _0x4524xd of stopKeywords){if(msg[__Oxec03f[0x8d]](_0x4524xd)){$[__Oxec03f[0x17]]= true;break}};for(let _0x4524xd of [__Oxec03f[0x8e],__Oxec03f[0x8f],__Oxec03f[0x90],__Oxec03f[0x91],__Oxec03f[0x92],__Oxec03f[0x93],__Oxec03f[0x94]]){if(msg[__Oxec03f[0x8d]](_0x4524xd)){$[__Oxec03f[0x3c]]= true;break}}}else {console[__Oxec03f[0xc]](`${__Oxec03f[0x2]}${_0x4524x1d}${__Oxec03f[0x2]}`)}}};break;case __Oxec03f[0x45]:;case __Oxec03f[0x6d]:break;default:console[__Oxec03f[0xc]](`${__Oxec03f[0x2]}${_0x4524x13}${__Oxec03f[0x95]}${_0x4524x1d}${__Oxec03f[0x2]}`)};if( typeof _0x4524x1f== __Oxec03f[0x71]){if(_0x4524x1f[__Oxec03f[0x76]]){if(_0x4524x1f[__Oxec03f[0x76]][__Oxec03f[0x88]](__Oxec03f[0x8f])>  -1){$[__Oxec03f[0x15]]= true}}}}catch(_0x4524xd){console[__Oxec03f[0xc]](_0x4524xd)}}function getPostRequest(_0x4524x21,_0x4524x15,_0x4524x16= __Oxec03f[0x48]){let _0x4524x22={"\x41\x63\x63\x65\x70\x74":__Oxec03f[0x96],"\x41\x63\x63\x65\x70\x74\x2D\x45\x6E\x63\x6F\x64\x69\x6E\x67":__Oxec03f[0x97],"\x41\x63\x63\x65\x70\x74\x2D\x4C\x61\x6E\x67\x75\x61\x67\x65":__Oxec03f[0x98],"\x43\x6F\x6E\x6E\x65\x63\x74\x69\x6F\x6E":__Oxec03f[0x99],"\x43\x6F\x6E\x74\x65\x6E\x74\x2D\x54\x79\x70\x65":__Oxec03f[0x9a],"\x43\x6F\x6F\x6B\x69\x65":cookie,"\x55\x73\x65\x72\x2D\x41\x67\x65\x6E\x74":$[__Oxec03f[0x9b]],"\x58\x2D\x52\x65\x71\x75\x65\x73\x74\x65\x64\x2D\x57\x69\x74\x68":__Oxec03f[0x9c]};if(_0x4524x21[__Oxec03f[0x88]](__Oxec03f[0x5])>  -1){_0x4524x22[__Oxec03f[0x9d]]= `${__Oxec03f[0x56]}${$[__Oxec03f[0x2e]]}${__Oxec03f[0x2]}`;_0x4524x22[__Oxec03f[0x9e]]= `${__Oxec03f[0x2]}${lz_jdpin_token_cookie&& lz_jdpin_token_cookie|| __Oxec03f[0x2]}${__Oxec03f[0x2]}${$[__Oxec03f[0x3b]]&& __Oxec03f[0x9f]+ $[__Oxec03f[0x3b]]+ __Oxec03f[0xa0]|| __Oxec03f[0x2]}${__Oxec03f[0x2]}${activityCookie}${__Oxec03f[0x2]}`};return {url:_0x4524x21,method:_0x4524x16,headers:_0x4524x22,body:_0x4524x15,timeout:30000}}function getCk(){return  new Promise((_0x4524x1a)=>{let _0x4524x24={url:`${__Oxec03f[0x56]}${$[__Oxec03f[0x2e]]}${__Oxec03f[0x2]}`,headers:{"\x41\x63\x63\x65\x70\x74":__Oxec03f[0xa1],"\x41\x63\x63\x65\x70\x74\x2D\x45\x6E\x63\x6F\x64\x69\x6E\x67":__Oxec03f[0x97],"\x41\x63\x63\x65\x70\x74\x2D\x4C\x61\x6E\x67\x75\x61\x67\x65":__Oxec03f[0x98],"\x43\x6F\x6E\x6E\x65\x63\x74\x69\x6F\x6E":__Oxec03f[0x99],"\x43\x6F\x6E\x74\x65\x6E\x74\x2D\x54\x79\x70\x65":__Oxec03f[0x9a],"\x43\x6F\x6F\x6B\x69\x65":cookie,"\x52\x65\x66\x65\x72\x65\x72":`${__Oxec03f[0x56]}${$[__Oxec03f[0x2e]]}${__Oxec03f[0x2]}`,"\x55\x73\x65\x72\x2D\x41\x67\x65\x6E\x74":$[__Oxec03f[0x9b]]},timeout:30000};$[__Oxec03f[0xa4]](_0x4524x24,async (_0x4524x1b,_0x4524x1c,_0x4524x1d)=>{try{if(_0x4524x1b){if(_0x4524x1c&&  typeof _0x4524x1c[__Oxec03f[0x68]]!= __Oxec03f[0x69]){if(_0x4524x1c[__Oxec03f[0x68]]== 493){console[__Oxec03f[0xc]](__Oxec03f[0x40]);$[__Oxec03f[0x16]]= true}};console[__Oxec03f[0xc]](`${__Oxec03f[0x2]}${$[__Oxec03f[0x6a]](_0x4524x1b)}${__Oxec03f[0x2]}`);console[__Oxec03f[0xc]](`${__Oxec03f[0x2]}${$[__Oxec03f[0x2a]]}${__Oxec03f[0xa2]}`)}else {let _0x4524x25=_0x4524x1d[__Oxec03f[0x32]](/(活动已经结束)/)&& _0x4524x1d[__Oxec03f[0x32]](/(活动已经结束)/)[0x1]|| __Oxec03f[0x2];if(_0x4524x25){$[__Oxec03f[0x17]]= true;console[__Oxec03f[0xc]](__Oxec03f[0xa3])};setActivityCookie(_0x4524x1c)}}catch(e){$[__Oxec03f[0x27]](e,_0x4524x1c)}finally{_0x4524x1a()}})})}function setActivityCookie(_0x4524x1c){if(_0x4524x1c){if(_0x4524x1c[__Oxec03f[0xa6]][__Oxec03f[0xa5]]){cookie= `${__Oxec03f[0x2]}${originCookie}${__Oxec03f[0xa0]}`;for(let _0x4524x27 of _0x4524x1c[__Oxec03f[0xa6]][__Oxec03f[0xa5]]){lz_cookie[_0x4524x27[__Oxec03f[0xa8]](__Oxec03f[0xa0])[0x0][__Oxec03f[0xa9]](0,_0x4524x27[__Oxec03f[0xa8]](__Oxec03f[0xa0])[0x0][__Oxec03f[0x88]](__Oxec03f[0xa7]))]= _0x4524x27[__Oxec03f[0xa8]](__Oxec03f[0xa0])[0x0][__Oxec03f[0xa9]](_0x4524x27[__Oxec03f[0xa8]](__Oxec03f[0xa0])[0x0][__Oxec03f[0x88]](__Oxec03f[0xa7])+ 1)};for(const _0x4524x28 of Object[__Oxec03f[0x8]](lz_cookie)){cookie+= _0x4524x28+ __Oxec03f[0xa7]+ lz_cookie[_0x4524x28]+ __Oxec03f[0xa0]};activityCookie= cookie}}}async function getUA(){$[__Oxec03f[0x9b]]= `${__Oxec03f[0xaa]}${randomString(40)}${__Oxec03f[0xab]}`}function randomString(_0x4524xd){_0x4524xd= _0x4524xd|| 32;let _0x4524x2b=__Oxec03f[0xac],_0x4524x2c=_0x4524x2b[__Oxec03f[0x30]],_0x4524x2d=__Oxec03f[0x2];for(i= 0;i< _0x4524xd;i++){_0x4524x2d+= _0x4524x2b[__Oxec03f[0xae]](Math[__Oxec03f[0xad]](Math[__Oxec03f[0x47]]()* _0x4524x2c))};return _0x4524x2d}function jsonParse(_0x4524x2f){if( typeof _0x4524x2f== __Oxec03f[0xaf]){try{return JSON[__Oxec03f[0x6e]](_0x4524x2f)}catch(e){console[__Oxec03f[0xc]](e);$[__Oxec03f[0x2d]]($[__Oxec03f[0x2a]],__Oxec03f[0x2],__Oxec03f[0xb0]);return []}}}(function(_0x4524x30,_0x4524x31,_0x4524x32,_0x4524x33,_0x4524x34,_0x4524x35){_0x4524x35= __Oxec03f[0x69];_0x4524x33= function(_0x4524x36){if( typeof alert!== _0x4524x35){alert(_0x4524x36)};if( typeof console!== _0x4524x35){console[__Oxec03f[0xc]](_0x4524x36)}};_0x4524x32= function(_0x4524x2c,_0x4524x30){return _0x4524x2c+ _0x4524x30};_0x4524x34= _0x4524x32(__Oxec03f[0xb1],_0x4524x32(_0x4524x32(__Oxec03f[0xb2],__Oxec03f[0xb3]),__Oxec03f[0xb4]));try{_0x4524x30= __encode;if(!( typeof _0x4524x30!== _0x4524x35&& _0x4524x30=== _0x4524x32(__Oxec03f[0xb5],__Oxec03f[0xb6]))){_0x4524x33(_0x4524x34)}}catch(e){_0x4524x33(_0x4524x34)}})({})
// prettier-ignore
function Env(t,e){"undefined"!=typeof process&&JSON.stringify(process.env).indexOf("GITHUB")>-1&&process.exit(0);class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`🔔${this.name}, 开始!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),n={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(n,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)})):this.isQuanX()?(this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t))):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();s&&this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)}))}post(t,e=(()=>{})){if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.post(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method="POST",this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){this.initGotEnv(t);const{url:s,...i}=t;this.got.post(s,i).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)})}}time(t,e=null){const s=e?new Date(e):new Date;let i={"M+":s.getMonth()+1,"d+":s.getDate(),"H+":s.getHours(),"m+":s.getMinutes(),"s+":s.getSeconds(),"q+":Math.floor((s.getMonth()+3)/3),S:s.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(s.getFullYear()+"").substr(4-RegExp.$1.length)));for(let e in i)new RegExp("("+e+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?i[e]:("00"+i[e]).substr((""+i[e]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};if(this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r))),!this.isMuteLog){let t=["","==============📣系统通知📣=============="];t.push(e),s&&t.push(s),i&&t.push(i),console.log(t.join("\n")),this.logs=this.logs.concat(t)}}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`❗️${this.name}, 错误!`,t.stack):this.log("",`❗️${this.name}, 错误!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`🔔${this.name}, 结束! 🕛 ${s} 秒`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}

