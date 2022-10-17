/*
联合开卡
https://jinggengjcq-isv.isvjcloud.com/fronth5/#/pages/unitedCardNew20220302/unitedCardNew20220302?actId=fe595e5ceec04518a151_220302
export DPLHTY="活动Id"           活动id必须
export DPLHTY_DRAWNUM="3"       抽奖次数不写则默认为3
cron "1 1 1 1 1" jd_opencardLH.js
*/

const $ = new Env('通用大牌联合开卡');
const jdCookieNode = $.isNode() ? require('./jdCookie.js') : '';
const notify = $.isNode() ? require('./sendNotify') : '';


var __encode = 'jsjiami.com', _a = {},
    _0xb483 = ["\x5F\x64\x65\x63\x6F\x64\x65", "\x68\x74\x74\x70\x3A\x2F\x2F\x77\x77\x77\x2E\x73\x6F\x6A\x73\x6F\x6E\x2E\x63\x6F\x6D\x2F\x6A\x61\x76\x61\x73\x63\x72\x69\x70\x74\x6F\x62\x66\x75\x73\x63\x61\x74\x6F\x72\x2E\x68\x74\x6D\x6C"];
(function (_0xd642x1) {
    _0xd642x1[_0xb483[0]] = _0xb483[1]
})(_a);
var __Oxeced1 = ["\x63\x72\x79\x70\x74\x6F\x2D\x6A\x73", "", "\x69\x73\x4E\x6F\x64\x65", "\x70\x75\x73\x68", "\x66\x6F\x72\x45\x61\x63\x68", "\x6B\x65\x79\x73", "\x44\x50\x4C\x48\x54\x59", "\x65\x6E\x76", "\x44\x50\x4C\x48\x54\x59\x5F\x44\x52\x41\x57\x4E\x55\x4D", "\x4A\x44\x5F\x44\x45\x42\x55\x47", "\x66\x61\x6C\x73\x65", "\x6C\x6F\x67", "\x66\x69\x6C\x74\x65\x72", "\x43\x6F\x6F\x6B\x69\x65\x4A\x44", "\x67\x65\x74\x64\x61\x74\x61", "\x43\x6F\x6F\x6B\x69\x65\x4A\x44\x32", "\x63\x6F\x6F\x6B\x69\x65", "\x6D\x61\x70", "\x43\x6F\x6F\x6B\x69\x65\x73\x4A\x44", "\x5B\x5D", "\x68\x6F\x74\x46\x6C\x61\x67", "\x6F\x75\x74\x46\x6C\x61\x67", "\x61\x63\x74\x69\x76\x69\x74\x79\x45\x6E\x64", "\x74\x72\x79\x42\x61\x6E\x64\x69\x6E\x67", "\x74\x72\x79\x4D\x69\x73\x73\x69\x6F\x6E", "\x61\x75\x74\x68\x6F\x72\x69\x6E\x76\x69\x74\x65\x4E\x69\x63\x6B", "\x75\x73\x65\x64\x43\x68\x61\x6E\x63\x65", "\x64\x6F\x6E\x65", "\x66\x69\x6E\x61\x6C\x6C\x79", "\x6C\x6F\x67\x45\x72\x72", "\x63\x61\x74\x63\x68", "\x6E\x61\x6D\x65", "\u3010\u63D0\u793A\u3011\u8BF7\u5148\u83B7\u53D6\x63\x6F\x6F\x6B\x69\x65\x0A\u76F4\u63A5\u4F7F\u7528\x4E\x6F\x62\x79\x44\x61\u7684\u4EAC\u4E1C\u7B7E\u5230\u83B7\u53D6", "\x68\x74\x74\x70\x73\x3A\x2F\x2F\x62\x65\x61\x6E\x2E\x6D\x2E\x6A\x64\x2E\x63\x6F\x6D\x2F", "\x6D\x73\x67", "\u8BF7\u8BBE\u7F6E\x2C\x20\x65\x78\x70\x6F\x72\x74\x20\x44\x50\x4C\x48\x54\x59\x3D\x22\u6D3B\u52A8\x49\x64\x22", "\u6D3B\u52A8\x49\x64\x3A", "\x72\x61\x6E\x64\x6F\x6D", "\x77\x61\x69\x74", "\x22", "\x72\x65\x70\x6C\x61\x63\x65\x41\x6C\x6C", "\x5C\x2F", "\x2F", "\x69\x6E\x76\x69\x74\x65\x4E\x69\x63\x6B", "\x61\x70\x70\x6B\x65\x79", "\x35\x31\x42\x35\x39\x42\x42\x38\x30\x35\x39\x30\x33\x44\x41\x34\x43\x45\x35\x31\x33\x44\x32\x39\x45\x43\x34\x34\x38\x33\x37\x35", "\x75\x73\x65\x72\x49\x64", "\x31\x30\x32\x39\x39\x31\x37\x31", "\x61\x63\x74\x49\x64", "\x4D\x69\x78\x4E\x69\x63\x6B\x73", "\x6C\x65\x6E\x67\x74\x68", "\x55\x73\x65\x72\x4E\x61\x6D\x65", "\x6D\x61\x74\x63\x68", "\x69\x6E\x64\x65\x78", "\x62\x65\x61\x6E", "\x6E\x69\x63\x6B\x4E\x61\x6D\x65", "\x2A\x2A\x2A\x2A\x2A\x2A\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7", "\u3011", "\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A", "\x4D\x69\x78\x4E\x69\x63\x6B", "\u6B64\x69\x70\u5DF2\u88AB\u9650\u5236\uFF0C\u8BF7\u8FC7\x31\x30\u5206\u949F\u540E\u518D\u6267\u884C\u811A\u672C", "\x73\x65\x6E\x64\x4E\x6F\x74\x69\x66\x79", "\x68\x61\x73\x45\x6E\x64", "\x65\x6E\x64\x54\x69\x6D\x65", "\x54\x6F\x6B\x65\x6E", "\x50\x69\x6E", "\x69\x73\x76\x4F\x62\x66\x75\x73\x63\x61\x74\x6F\x72", "\u83B7\u53D6\x5B\x74\x6F\x6B\x65\x6E\x5D\u5931\u8D25\uFF01", "\x61\x63\x74\x69\x76\x69\x74\x79\x5F\x6C\x6F\x61\x64", "\u6B64\x69\x70\u5DF2\u88AB\u9650\u5236\uFF0C\u8BF7\u8FC7\x31\x30\u5206\u949F\u540E\u518D\u6267\u884C\u811A\u672C\x0A", "\x6E\x6F\x77", "\u6D3B\u52A8\u7ED3\u675F", "\u83B7\u53D6\x63\x6F\x6F\x6B\x69\x65\u5931\u8D25", "\x74\x6F\x42\x69\x6E\x64", "\u7ED1\u5B9A", "\u91CD\u8BD5\x3A\x20", "\u6B21", "\x6F\x70\x65\x6E\x43\x61\x72\x64\x4C\x6F\x61\x64", "\u5168\u90E8\u5361\x3A", "\x75\x73\x65\x72\x49\x64\x4C\x69\x73\x74", "\u9700\u8981\u5F00\x3A", "\x75\x73\x65\x72\x49\x64\x4E\x65\x65\x64\x4C\x69\x73\x74", "\u5F00\u5361", "\u5F20", "\x6D\x69\x73\x73\x69\x6F\x6E\x54\x79\x70\x65", "\x6F\x70\x65\x6E\x43\x61\x72\x64", "\x6A\x6F\x69\x6E\x56\x65\x6E\x64\x65\x72\x49\x64", "\x75\x73\x65\x72\x49\x64\x3A", "\x6D\x69\x73\x73\x69\x6F\x6E", "\u6D3B\u52A8\u592A\u706B\u7206\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5", "\x69\x6E\x64\x65\x78\x4F\x66", "\x65\x72\x72\x6F\x72\x4A\x6F\x69\x6E\x53\x68\x6F\x70", "\u52A0\u5165\u5E97\u94FA\u4F1A\u5458\u5931\u8D25", "\u7B2C\x31\u6B21\u91CD\u8BD5", "\u7B2C\x32\u6B21\u91CD\u8BD5", "\u7B2C\x33\u6B21\u91CD\u8BD5", "\x68\x61\x73\x43\x6F\x6C\x6C\x65\x63\x74\x53\x68\x6F\x70", "\x75\x6E\x69\x74\x65\x43\x6F\x6C\x6C\x65\x63\x74\x53\x68\x6F\x70", "\u5DF2\u7ECF\u5173\u6CE8", "\x75\x6E\x69\x74\x65\x41\x64\x64\x43\x61\x72\x74", "\x72\x75\x6E\x46\x61\x6C\x61\x67", "\u62BD\u5956\u6B21\u6570\u4E3A\x3A", "\u9ED8\u8BA4\u6267\u884C\u62BD\u5956", "\u7B2C", "\u6B21\u62BD\u5956", "\u62BD\u5956", "\u62BD\u5956\u592A\u591A\u6B21", "\x6D\x79\x41\x77\x61\x72\x64", "\x6D\x69\x73\x73\x69\x6F\x6E\x49\x6E\x76\x69\x74\x65\x4C\x69\x73\x74", "\u5F53\u524D\u52A9\u529B\x3A", "\u540E\u9762\u7684\u53F7\u90FD\u4F1A\u52A9\u529B\x3A", "\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6A\x69\x6E\x67\x67\x65\x6E\x67\x6A\x63\x71\x2D\x69\x73\x76\x2E\x69\x73\x76\x6A\x63\x6C\x6F\x75\x64\x2E\x63\x6F\x6D", "\x50\x4F\x53\x54", "\x68\x74\x74\x70\x73\x3A\x2F\x2F\x61\x70\x69\x2E\x6D\x2E\x6A\x64\x2E\x63\x6F\x6D\x2F\x63\x6C\x69\x65\x6E\x74\x2E\x61\x63\x74\x69\x6F\x6E\x3F\x66\x75\x6E\x63\x74\x69\x6F\x6E\x49\x64\x3D\x69\x73\x76\x4F\x62\x66\x75\x73\x63\x61\x74\x6F\x72", "\x2F\x64\x6D\x2F\x66\x72\x6F\x6E\x74\x2F\x6F\x70\x65\x6E\x43\x61\x72\x64\x4E\x65\x77\x2F\x61\x63\x74\x69\x76\x69\x74\x79\x5F\x6C\x6F\x61\x64\x3F\x6D\x69\x78\x5F\x6E\x69\x63\x6B\x3D", "\x30\x31", "\x2F\x6F\x70\x65\x6E\x43\x61\x72\x64\x4E\x65\x77\x2F\x61\x63\x74\x69\x76\x69\x74\x79\x5F\x6C\x6F\x61\x64", "\x2F\x64\x6D\x2F\x66\x72\x6F\x6E\x74\x2F\x6F\x70\x65\x6E\x43\x61\x72\x64\x4E\x65\x77\x2F\x73\x68\x6F\x70\x4C\x69\x73\x74\x3F\x6D\x69\x78\x5F\x6E\x69\x63\x6B\x3D", "\x2F\x6F\x70\x65\x6E\x43\x61\x72\x64\x4E\x65\x77\x2F\x73\x68\x6F\x70\x4C\x69\x73\x74", "\x73\x68\x6F\x70\x4C\x69\x73\x74", "\x2F\x64\x6D\x2F\x66\x72\x6F\x6E\x74\x2F\x6F\x70\x65\x6E\x43\x61\x72\x64\x4E\x65\x77\x2F\x73\x68\x6F\x70\x2F\x6F\x70\x65\x6E\x43\x61\x72\x64\x4C\x6F\x61\x64\x3F\x6F\x70\x65\x6E\x5F\x69\x64\x3D\x26\x6D\x69\x78\x5F\x6E\x69\x63\x6B\x3D", "\x26\x75\x73\x65\x72\x5F\x69\x64\x3D", "\x2F\x6F\x70\x65\x6E\x43\x61\x72\x64\x4E\x65\x77\x2F\x73\x68\x6F\x70\x2F\x6F\x70\x65\x6E\x43\x61\x72\x64\x4C\x6F\x61\x64", "\x2F\x64\x6D\x2F\x66\x72\x6F\x6E\x74\x2F\x6F\x70\x65\x6E\x43\x61\x72\x64\x4E\x65\x77\x2F\x63\x6F\x6D\x70\x6C\x65\x74\x65\x2F\x6D\x69\x73\x73\x69\x6F\x6E\x3F\x6D\x69\x78\x5F\x6E\x69\x63\x6B\x3D", "\x72\x65\x6C\x61\x74\x69\x6F\x6E\x42\x69\x6E\x64", "\x2F\x6F\x70\x65\x6E\x43\x61\x72\x64\x4E\x65\x77\x2F\x63\x6F\x6D\x70\x6C\x65\x74\x65\x2F\x6D\x69\x73\x73\x69\x6F\x6E", "\x2F\x64\x6D\x2F\x66\x72\x6F\x6E\x74\x2F\x6F\x70\x65\x6E\x43\x61\x72\x64\x4E\x65\x77\x2F\x64\x72\x61\x77\x2F\x70\x6F\x73\x74\x3F\x6D\x69\x78\x5F\x6E\x69\x63\x6B\x3D", "\x64\x72\x61\x77", "\x32", "\x2F\x6F\x70\x65\x6E\x43\x61\x72\x64\x4E\x65\x77\x2F\x64\x72\x61\x77\x2F\x70\x6F\x73\x74", "\x2F\x64\x6D\x2F\x66\x72\x6F\x6E\x74\x2F\x6F\x70\x65\x6E\x43\x61\x72\x64\x4E\x65\x77\x2F\x66\x6F\x6C\x6C\x6F\x77\x53\x68\x6F\x70\x3F\x6D\x69\x78\x5F\x6E\x69\x63\x6B\x3D", "\x63\x6F\x6C\x6C\x65\x63\x74\x53\x68\x6F\x70", "\x2F\x6F\x70\x65\x6E\x43\x61\x72\x64\x4E\x65\x77\x2F\x66\x6F\x6C\x6C\x6F\x77\x53\x68\x6F\x70", "\x66\x6F\x6C\x6C\x6F\x77\x53\x68\x6F\x70", "\x2F\x64\x6D\x2F\x66\x72\x6F\x6E\x74\x2F\x6F\x70\x65\x6E\x43\x61\x72\x64\x4E\x65\x77\x2F\x61\x64\x64\x43\x61\x72\x74\x3F\x6D\x69\x78\x5F\x6E\x69\x63\x6B\x3D", "\x61\x64\x64\x43\x61\x72\x74", "\x2F\x6F\x70\x65\x6E\x43\x61\x72\x64\x4E\x65\x77\x2F\x61\x64\x64\x43\x61\x72\x74", "\x2F\x64\x6D\x2F\x66\x72\x6F\x6E\x74\x2F\x6F\x70\x65\x6E\x43\x61\x72\x64\x4E\x65\x77\x2F\x6D\x79\x41\x77\x61\x72\x64\x73\x3F\x6D\x69\x78\x5F\x6E\x69\x63\x6B\x3D", "\x2F\x6F\x70\x65\x6E\x43\x61\x72\x64\x4E\x65\x77\x2F\x6D\x79\x41\x77\x61\x72\x64\x73", "\x2F\x64\x6D\x2F\x66\x72\x6F\x6E\x74\x2F\x6F\x70\x65\x6E\x43\x61\x72\x64\x4E\x65\x77\x2F\x6D\x69\x73\x73\x69\x6F\x6E\x49\x6E\x76\x69\x74\x65\x4C\x69\x73\x74\x3F\x6D\x69\x78\x5F\x6E\x69\x63\x6B\x3D", "\x73\x68\x61\x72\x65\x41\x63\x74", "\x2F\x6F\x70\x65\x6E\x43\x61\x72\x64\x4E\x65\x77\x2F\x6D\x69\x73\x73\x69\x6F\x6E\x49\x6E\x76\x69\x74\x65\x4C\x69\x73\x74", "\u9519\u8BEF", "\x73\x74\x61\x74\x75\x73\x43\x6F\x64\x65", "\x74\x6F\x53\x74\x72", "\x20\x41\x50\x49\u8BF7\u6C42\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u7F51\u8DEF\u91CD\u8BD5", "\x70\x6F\x73\x74", "\x61\x63\x63\x65\x73\x73\x4C\x6F\x67\x57\x69\x74\x68\x41\x44", "\x64\x72\x61\x77\x43\x6F\x6E\x74\x65\x6E\x74", "\x70\x61\x72\x73\x65", "\x20\u6267\u884C\u4EFB\u52A1\u5F02\u5E38", "\x6F\x62\x6A\x65\x63\x74", "\x65\x72\x72\x63\x6F\x64\x65", "\x74\x6F\x6B\x65\x6E", "\x75\x6E\x64\x65\x66\x69\x6E\x65\x64", "\x6D\x65\x73\x73\x61\x67\x65", "\x20", "\x73\x75\x63\x63\x65\x73\x73", "\x6F\x70\x65\x6E\x4C\x69\x73\x74", "\x64\x61\x74\x61", "\x6F\x70\x65\x6E", "\x76\x61\x6C\x75\x65\x73", "\x6C\x6F\x61\x64\x55\x6E\x69\x74\x65\x4F\x70\x65\x6E\x43\x61\x72\x64", "\x73\x65\x74\x4D\x69\x78\x4E\x69\x63\x6B", "\x75\x6E\x69\x74\x65\x4F\x70\x65\x6E\x43\x61\x72\x64\x4F\x6E\x65", "\x63\x68\x65\x63\x6B\x4F\x70\x65\x6E\x43\x61\x72\x64", "\u5173\u6CE8", "\u52A0\u8D2D", "\x73\x74\x61\x74\x75\x73", "\x69\x73\x4F\x70\x65\x6E\x43\x61\x72\x64", "\x72\x65\x6D\x61\x72\x6B", "\x3A", "\u7ED1\u5B9A\u6210\u529F", "\x63\x75\x73\x41\x63\x74\x69\x76\x69\x74\x79", "\x62\x75\x79\x65\x72\x4E\x69\x63\x6B", "\x6D\x69\x73\x73\x69\x6F\x6E\x43\x75\x73\x74\x6F\x6D\x65\x72", "\u4E0D\u662F\u4F1A\u5458", "\x75\x6E\x69\x74\x65\x4F\x70\x65\x6E\x43\x61\x72", "\u6211\u7684\u5956\u54C1\uFF1A", "\x6C\x69\x73\x74", "\x61\x77\x61\x72\x64\x44\x65\x73", "\u5171\u83B7\u5F97", "\u4EAC\u8C46\x20\u65E0\u6CD5\u5224\u65AD\u5956\u52B1\u662F\u5426\u4E3A\u9080\u8BF7\u5956\u52B1\uFF0C\u6240\u4EE5\u76F4\u63A5\u663E\u793A\u83B7\u5F97\u591A\u5C11\u8C46", "\u9080\u8BF7\u4EBA\u6570\x28", "\x74\x6F\x74\x61\x6C", "\x69\x6E\x76\x69\x74\x65\x64\x4C\x6F\x67\x4C\x69\x73\x74", "\x29", "\u6D3B\u52A8\u672A\u5F00\u59CB", "\x65\x72\x72\x6F\x72\x4D\x65\x73\x73\x61\x67\x65", "\u706B\u7206", "\x2D\x3E\x20", "\x61\x70\x70\x6C\x69\x63\x61\x74\x69\x6F\x6E\x2F\x6A\x73\x6F\x6E", "\x67\x7A\x69\x70\x2C\x20\x64\x65\x66\x6C\x61\x74\x65\x2C\x20\x62\x72", "\x7A\x68\x2D\x63\x6E", "\x6B\x65\x65\x70\x2D\x61\x6C\x69\x76\x65", "\x61\x70\x70\x6C\x69\x63\x61\x74\x69\x6F\x6E\x2F\x78\x2D\x77\x77\x77\x2D\x66\x6F\x72\x6D\x2D\x75\x72\x6C\x65\x6E\x63\x6F\x64\x65\x64", "\x55\x41", "\x58\x4D\x4C\x48\x74\x74\x70\x52\x65\x71\x75\x65\x73\x74", "\x4F\x72\x69\x67\x69\x6E", "\x43\x6F\x6E\x74\x65\x6E\x74\x2D\x54\x79\x70\x65", "\x61\x70\x70\x6C\x69\x63\x61\x74\x69\x6F\x6E\x2F\x6A\x73\x6F\x6E\x3B\x20\x63\x68\x61\x72\x73\x65\x74\x3D\x75\x74\x66\x2D\x38", "\x43\x6F\x6F\x6B\x69\x65", "\x32\x2E\x30", "\x61\x64\x6D\x4A\x73\x6F\x6E", "\x70\x61\x72\x61\x6D\x73", "\x61\x73\x73\x69\x67\x6E", "\x73\x69\x67\x6E", "\x63\x6F\x6D\x6D\x6F\x6E\x50\x61\x72\x61\x6D\x65\x74\x65\x72", "\x74\x69\x6D\x65\x73\x74\x61\x6D\x70", "\x74\x69\x6D\x65\x53\x74\x61\x6D\x70", "\x6A\x64\x61\x70\x70\x3B\x69\x50\x68\x6F\x6E\x65\x3B\x31\x30\x2E\x34\x2E\x36\x3B\x31\x33\x2E\x31\x2E\x32\x3B", "\x3B\x6E\x65\x74\x77\x6F\x72\x6B\x2F\x77\x69\x66\x69\x3B\x6D\x6F\x64\x65\x6C\x2F\x69\x50\x68\x6F\x6E\x65\x38\x2C\x31\x3B\x61\x64\x64\x72\x65\x73\x73\x69\x64\x2F\x32\x33\x30\x38\x34\x36\x30\x36\x31\x31\x3B\x61\x70\x70\x42\x75\x69\x6C\x64\x2F\x31\x36\x37\x38\x31\x34\x3B\x6A\x64\x53\x75\x70\x70\x6F\x72\x74\x44\x61\x72\x6B\x4D\x6F\x64\x65\x2F\x30\x3B\x4D\x6F\x7A\x69\x6C\x6C\x61\x2F\x35\x2E\x30\x20\x28\x69\x50\x68\x6F\x6E\x65\x3B\x20\x43\x50\x55\x20\x69\x50\x68\x6F\x6E\x65\x20\x4F\x53\x20\x31\x33\x5F\x31\x5F\x32\x20\x6C\x69\x6B\x65\x20\x4D\x61\x63\x20\x4F\x53\x20\x58\x29\x20\x41\x70\x70\x6C\x65\x57\x65\x62\x4B\x69\x74\x2F\x36\x30\x35\x2E\x31\x2E\x31\x35\x20\x28\x4B\x48\x54\x4D\x4C\x2C\x20\x6C\x69\x6B\x65\x20\x47\x65\x63\x6B\x6F\x29\x20\x4D\x6F\x62\x69\x6C\x65\x2F\x31\x35\x45\x31\x34\x38\x3B\x73\x75\x70\x70\x6F\x72\x74\x4A\x44\x53\x48\x57\x4B\x2F\x31", "\x61\x62\x63\x64\x65\x66\x30\x31\x32\x33\x34\x35\x36\x37\x38\x39", "\x66\x6C\x6F\x6F\x72", "\x63\x68\x61\x72\x41\x74", "\x73\x74\x72\x69\x6E\x67", "\u8BF7\u52FF\u968F\u610F\u5728\x42\x6F\x78\x4A\x73\u8F93\u5165\u6846\u4FEE\u6539\u5185\u5BB9\x0A\u5EFA\u8BAE\u901A\u8FC7\u811A\u672C\u53BB\u83B7\u53D6\x63\x6F\x6F\x6B\x69\x65", "\x38\x35\x36\x32\x33\x33\x31\x32\x30\x34\x34\x32\x35\x38\x34\x36\x34\x33\x32\x35\x32\x32\x37\x36\x36\x36\x38\x38\x33\x35\x34\x36", "\x32\x35\x37\x34\x37\x37\x31\x37", "\x73\x74\x72\x69\x6E\x67\x69\x66\x79", "\x27", "\x67", "\x7E", "\x25\x32\x37", "\x72\x65\x70\x6C\x61\x63\x65", "\x25\x37\x45", "\x61\x70\x70\x4B\x65\x79", "\x74\x6F\x4C\x6F\x77\x65\x72\x43\x61\x73\x65", "\x73\x68\x6F\x70\x61\x63\x74\x69\x76\x69\x74\x79\x49\x64", "\x2C\x22\x61\x63\x74\x69\x76\x69\x74\x79\x49\x64\x22\x3A", "\x7B\x22\x76\x65\x6E\x64\x65\x72\x49\x64\x22\x3A\x22", "\x22\x2C\x22\x73\x68\x6F\x70\x49\x64\x22\x3A\x22", "\x22\x2C\x22\x62\x69\x6E\x64\x42\x79\x56\x65\x72\x69\x66\x79\x43\x6F\x64\x65\x46\x6C\x61\x67\x22\x3A\x31\x2C\x22\x72\x65\x67\x69\x73\x74\x65\x72\x45\x78\x74\x65\x6E\x64\x22\x3A\x7B\x7D\x2C\x22\x77\x72\x69\x74\x65\x43\x68\x69\x6C\x64\x46\x6C\x61\x67\x22\x3A\x30", "\x2C\x22\x63\x68\x61\x6E\x6E\x65\x6C\x22\x3A\x34\x30\x31\x7D", "\x68\x74\x74\x70\x73\x3A\x2F\x2F\x61\x70\x69\x2E\x6D\x2E\x6A\x64\x2E\x63\x6F\x6D\x2F\x63\x6C\x69\x65\x6E\x74\x2E\x61\x63\x74\x69\x6F\x6E\x3F\x61\x70\x70\x69\x64\x3D\x6A\x64\x5F\x73\x68\x6F\x70\x5F\x6D\x65\x6D\x62\x65\x72\x26\x66\x75\x6E\x63\x74\x69\x6F\x6E\x49\x64\x3D\x62\x69\x6E\x64\x57\x69\x74\x68\x56\x65\x6E\x64\x65\x72\x26\x62\x6F\x64\x79\x3D", "\x26\x63\x6C\x69\x65\x6E\x74\x3D\x48\x35\x26\x63\x6C\x69\x65\x6E\x74\x56\x65\x72\x73\x69\x6F\x6E\x3D\x39\x2E\x32\x2E\x30\x26\x75\x75\x69\x64\x3D\x38\x38\x38\x38\x38\x26\x68\x35\x73\x74\x3D", "\x74\x65\x78\x74\x2F\x70\x6C\x61\x69\x6E\x3B\x20\x43\x68\x61\x72\x73\x65\x74\x3D\x55\x54\x46\x2D\x38", "\x68\x74\x74\x70\x73\x3A\x2F\x2F\x61\x70\x69\x2E\x6D\x2E\x6A\x64\x2E\x63\x6F\x6D", "\x61\x70\x69\x2E\x6D\x2E\x6A\x64\x2E\x63\x6F\x6D", "\x2A\x2F\x2A", "\x74\x6F\x4F\x62\x6A", "\x72\x65\x73\x75\x6C\x74", "\x67\x69\x66\x74\x49\x6E\x66\x6F", "\x67\x69\x66\x74\x4C\x69\x73\x74", "\u5165\u4F1A\u83B7\u5F97\x3A", "\x64\x69\x73\x63\x6F\x75\x6E\x74\x53\x74\x72\x69\x6E\x67", "\x70\x72\x69\x7A\x65\x4E\x61\x6D\x65", "\x73\x65\x63\x6F\x6E\x64\x4C\x69\x6E\x65\x44\x65\x73\x63", "\x67\x65\x74", "\x79\x79\x79\x79\x4D\x4D\x64\x64\x68\x68\x6D\x6D\x73\x73\x53\x53\x53", "\x3B", "\x3B\x65\x66\x37\x39\x61\x3B\x74\x6B\x30\x32\x77\x37\x31\x34\x31\x31\x61\x39\x65\x31\x38\x6E\x38\x6A\x6D\x6D\x44\x4B\x48\x4D\x35\x71\x59\x32\x47\x51\x45\x48\x4E\x38\x4D\x45\x44\x6E\x78\x6E\x4D\x4E\x42\x56\x55\x47\x56\x49\x74\x52\x65\x65\x54\x33\x30\x46\x78\x41\x33\x4E\x49\x6F\x49\x6A\x71\x70\x57\x54\x37\x54\x65\x38\x62\x46\x33\x37\x46\x4A\x32\x57\x2B\x57\x7A\x69\x69\x78\x4C\x48\x68\x46\x30\x31\x3B\x33\x39\x32\x63\x66\x39\x62\x61\x64\x65\x34\x65\x31\x62\x30\x32\x65\x36\x66\x61\x38\x33\x63\x31\x64\x34\x37\x64\x37\x66\x31\x32\x34\x35\x65\x35\x61\x37\x61\x65\x39\x65\x62\x39\x32\x36\x34\x35\x31\x34\x32\x32\x37\x61\x64\x36\x66\x39\x33\x35\x64\x66\x39\x65\x3B\x33\x2E\x30\x3B", "\x68\x74\x74\x70\x73\x3A\x2F\x2F\x61\x70\x69\x2E\x6D\x2E\x6A\x64\x2E\x63\x6F\x6D\x2F\x63\x6C\x69\x65\x6E\x74\x2E\x61\x63\x74\x69\x6F\x6E\x3F\x61\x70\x70\x69\x64\x3D\x6A\x64\x5F\x73\x68\x6F\x70\x5F\x6D\x65\x6D\x62\x65\x72\x26\x66\x75\x6E\x63\x74\x69\x6F\x6E\x49\x64\x3D\x67\x65\x74\x53\x68\x6F\x70\x4F\x70\x65\x6E\x43\x61\x72\x64\x49\x6E\x66\x6F\x26\x62\x6F\x64\x79\x3D\x25\x37\x42\x25\x32\x32\x76\x65\x6E\x64\x65\x72\x49\x64\x25\x32\x32\x25\x33\x41\x25\x32\x32", "\x25\x32\x32\x25\x32\x43\x25\x32\x32\x63\x68\x61\x6E\x6E\x65\x6C\x25\x32\x32\x25\x33\x41\x34\x30\x31\x25\x37\x44\x26\x63\x6C\x69\x65\x6E\x74\x3D\x48\x35\x26\x63\x6C\x69\x65\x6E\x74\x56\x65\x72\x73\x69\x6F\x6E\x3D\x39\x2E\x32\x2E\x30\x26\x75\x75\x69\x64\x3D\x38\x38\x38\x38\x38\x26\x68\x35\x73\x74\x3D", "\u5165\u4F1A\x3A", "\x76\x65\x6E\x64\x65\x72\x43\x61\x72\x64\x4E\x61\x6D\x65", "\x73\x68\x6F\x70\x4D\x65\x6D\x62\x65\x72\x43\x61\x72\x64\x49\x6E\x66\x6F", "\x69\x6E\x74\x65\x72\x65\x73\x74\x73\x52\x75\x6C\x65\x4C\x69\x73\x74", "\x69\x6E\x74\x65\x72\x65\x73\x74\x73\x49\x6E\x66\x6F", "\x61\x63\x74\x69\x76\x69\x74\x79\x49\x64", "\x30\x31\x32\x33\x34\x35\x36\x37\x38\x39", "\x73\x6C\x69\x63\x65", "\x3B\x65\x66\x37\x39\x61\x3B\x74\x6B\x30\x32\x77\x39\x39\x62\x63\x31\x62\x39\x38\x31\x38\x6E\x38\x75\x46\x68\x52\x38\x6B\x73\x33\x72\x79\x51\x57\x4D\x4F\x5A\x7A\x6A\x70\x44\x56\x43\x49\x4E\x4A\x4A\x48\x38\x61\x50\x30\x79\x32\x52\x57\x46\x4C\x69\x4A\x42\x6D\x4C\x6B\x33\x5A\x37\x6A\x39\x72\x68\x6D\x35\x63\x6A\x37\x44\x4E\x30\x77\x39\x6D\x49\x48\x65\x73\x71\x6F\x6D\x75\x30\x42\x34\x36\x68\x30\x68\x3B\x35\x61\x62\x35\x65\x66\x64\x35\x64\x63\x37\x63\x33\x64\x35\x32\x64\x64\x31\x39\x61\x38\x65\x61\x61\x62\x63\x37\x62\x63\x39\x39\x63\x31\x62\x39\x64\x62\x38\x30\x30\x61\x34\x32\x30\x38\x62\x61\x31\x31\x34\x32\x63\x38\x61\x37\x63\x37\x62\x66\x38\x35\x32\x65\x3B\x33\x2E\x30\x3B", "\x3B\x31\x36\x39\x66\x31\x3B\x74\x6B\x30\x32\x77\x63\x30\x66\x39\x31\x63\x38\x61\x31\x38\x6E\x76\x57\x56\x4D\x47\x72\x51\x4F\x31\x69\x46\x6C\x70\x51\x72\x65\x32\x53\x68\x32\x6D\x47\x74\x4E\x72\x6F\x31\x6C\x30\x55\x70\x5A\x71\x47\x4C\x52\x62\x48\x69\x79\x71\x66\x61\x55\x51\x61\x50\x79\x36\x34\x57\x54\x37\x75\x7A\x37\x45\x2F\x67\x75\x6A\x47\x41\x42\x35\x30\x6B\x79\x4F\x37\x68\x77\x42\x79\x57\x4B\x3B\x37\x37\x63\x38\x61\x30\x35\x65\x36\x61\x36\x36\x66\x61\x65\x65\x64\x30\x30\x65\x34\x65\x32\x38\x30\x61\x64\x38\x63\x34\x30\x66\x61\x62\x36\x30\x37\x32\x33\x62\x35\x62\x35\x36\x31\x32\x33\x30\x33\x38\x30\x65\x62\x34\x30\x37\x65\x31\x39\x33\x35\x34\x66\x37\x3B\x33\x2E\x30\x3B", "\x3B\x65\x66\x37\x39\x61\x3B\x74\x6B\x30\x32\x77\x39\x32\x36\x33\x31\x62\x66\x61\x31\x38\x6E\x68\x44\x34\x75\x62\x66\x33\x51\x66\x4E\x69\x55\x38\x45\x44\x32\x50\x49\x32\x37\x30\x79\x67\x73\x6E\x2B\x76\x61\x6D\x75\x42\x51\x68\x30\x6C\x56\x45\x36\x76\x37\x55\x41\x77\x63\x6B\x7A\x33\x73\x32\x4F\x74\x6C\x46\x45\x66\x74\x68\x35\x4C\x62\x51\x64\x57\x4F\x50\x4E\x76\x50\x45\x59\x48\x75\x55\x32\x54\x77\x3B\x30\x66\x33\x36\x64\x64\x64\x65\x66\x66\x33\x66\x38\x37\x38\x36\x36\x36\x33\x62\x35\x30\x62\x62\x33\x34\x36\x36\x35\x63\x34\x65\x39\x64\x36\x30\x38\x35\x39\x66\x38\x66\x62\x65\x38\x32\x32\x66\x62\x35\x35\x66\x64\x30\x32\x65\x64\x32\x65\x38\x34\x66\x64\x32\x3B\x33\x2E\x30\x3B", "\x46\x6F\x72\x6D\x61\x74", "\x70\x72\x6F\x74\x6F\x74\x79\x70\x65", "\x67\x65\x74\x4D\x6F\x6E\x74\x68", "\x67\x65\x74\x44\x61\x74\x65", "\x67\x65\x74\x48\x6F\x75\x72\x73", "\x67\x65\x74\x4D\x69\x6E\x75\x74\x65\x73", "\x67\x65\x74\x53\x65\x63\x6F\x6E\x64\x73", "\x67\x65\x74\x44\x61\x79", "\x67\x65\x74\x4D\x69\x6C\x6C\x69\x73\x65\x63\x6F\x6E\x64\x73", "\x74\x65\x73\x74", "\x24\x31", "\x73\x75\x62\x73\x74\x72", "\x67\x65\x74\x46\x75\x6C\x6C\x59\x65\x61\x72", "\x63\x6F\x6E\x63\x61\x74", "\x28", "\x53\x2B", "\x30\x30\x30", "\x30\x30", "\x68\x74\x74\x70\x3A\x2F\x2F\x68\x7A\x2E\x66\x65\x76\x65\x72\x72\x75\x6E\x2E\x74\x6F\x70\x3A\x39\x39\x2F\x73\x68\x61\x72\x65\x2F\x61\x75\x74\x68\x6F\x72\x2F\x6A\x69\x6E\x67\x67\x65\x6E\x67\x6A\x63\x71\x3F\x5F\x74\x3D", "\x4D\x6F\x7A\x69\x6C\x6C\x61\x2F\x35\x2E\x30\x20\x28\x57\x69\x6E\x64\x6F\x77\x73\x20\x4E\x54\x20\x32\x30\x2E\x30\x3B\x20\x57\x69\x6E\x36\x34\x3B\x20\x78\x36\x34\x29\x20\x41\x70\x70\x6C\x65\x57\x65\x62\x4B\x69\x74\x2F\x35\x33\x37\x2E\x33\x36\x20\x28\x4B\x48\x54\x4D\x4C\x2C\x20\x6C\x69\x6B\x65\x20\x47\x65\x63\x6B\x6F\x29\x20\x43\x68\x72\x6F\x6D\x65\x2F\x31\x30\x33\x2E\x30\x2E\x30\x2E\x30\x20\x53\x61\x66\x61\x72\x69\x2F\x35\x33\x37\x2E\x33\x36", "\u8BF7\u6C42\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u7F51\u8DEF", "\x68\x74\x74\x70\x3A\x2F\x2F\x68\x7A\x2E\x66\x65\x76\x65\x72\x72\x75\x6E\x2E\x74\x6F\x70\x3A\x39\x39\x2F\x73\x68\x61\x72\x65\x2F\x63\x61\x72\x64\x2F\x67\x65\x74\x54\x6F\x6B\x65\x6E\x3F\x74\x79\x70\x65\x3D\x6A\x69\x6E\x67\x67\x65\x6E\x67\x6A\x63\x71", "\x6A\x64\x61\x70\x70\x3B\x61\x6E\x64\x72\x6F\x69\x64\x3B\x31\x31\x2E\x31\x2E\x34\x3B\x6A\x64\x53\x75\x70\x70\x6F\x72\x74\x44\x61\x72\x6B\x4D\x6F\x64\x65\x2F\x30\x3B\x4D\x6F\x7A\x69\x6C\x6C\x61\x2F\x35\x2E\x30\x20\x28\x4C\x69\x6E\x75\x78\x3B\x20\x41\x6E\x64\x72\x6F\x69\x64\x20\x31\x30\x3B\x20\x50\x43\x43\x4D\x30\x30\x20\x42\x75\x69\x6C\x64\x2F\x51\x4B\x51\x31\x2E\x31\x39\x31\x30\x32\x31\x2E\x30\x30\x32\x3B\x20\x77\x76\x29\x20\x41\x70\x70\x6C\x65\x57\x65\x62\x4B\x69\x74\x2F\x35\x33\x37\x2E\x33\x36\x20\x28\x4B\x48\x54\x4D\x4C\x2C\x20\x6C\x69\x6B\x65\x20\x47\x65\x63\x6B\x6F\x29\x20\x56\x65\x72\x73\x69\x6F\x6E\x2F\x34\x2E\x30\x20\x43\x68\x72\x6F\x6D\x65\x2F\x38\x39\x2E\x30\x2E\x34\x33\x38\x39\x2E\x37\x32\x20\x4D\x51\x51\x42\x72\x6F\x77\x73\x65\x72\x2F\x36\x2E\x32\x20\x54\x42\x53\x2F\x30\x34\x36\x30\x31\x31\x20\x4D\x6F\x62\x69\x6C\x65\x20\x53\x61\x66\x61\x72\x69\x2F\x35\x33\x37\x2E\x33\x36", "\x63\x6F\x64\x65", "\u5220\u9664", "\u7248\u672C\u53F7\uFF0C\x6A\x73\u4F1A\u5B9A", "\u671F\u5F39\u7A97\uFF0C", "\u8FD8\u8BF7\u652F\u6301\u6211\u4EEC\u7684\u5DE5\u4F5C", "\x6A\x73\x6A\x69\x61", "\x6D\x69\x2E\x63\x6F\x6D"];
const CryptoJS = require(__Oxeced1[0x0]);
let cookiesArr = [], cookie = __Oxeced1[0x1];
let dplh_actId = __Oxeced1[0x1];
let dplh_drawNum = 3;
if ($[__Oxeced1[0x2]]()) {
    Object[__Oxeced1[0x5]](jdCookieNode)[__Oxeced1[0x4]]((_0xb8a2x6) => {
        cookiesArr[__Oxeced1[0x3]](jdCookieNode[_0xb8a2x6])
    });
    if (process[__Oxeced1[0x7]][__Oxeced1[0x6]]) {
        dplh_actId = process[__Oxeced1[0x7]][__Oxeced1[0x6]]
    }
    ;
    if (process[__Oxeced1[0x7]][__Oxeced1[0x8]]) {
        dplh_drawNum = parseInt(process[__Oxeced1[0x7]].DPLHTY_DRAWNUM)
    }
    ;
    if (process[__Oxeced1[0x7]][__Oxeced1[0x9]] && process[__Oxeced1[0x7]][__Oxeced1[0x9]] === __Oxeced1[0xa]) {
        console[__Oxeced1[0xb]] = () => {
        }
    }
} else {
    cookiesArr = [$[__Oxeced1[0xe]](__Oxeced1[0xd]), $[__Oxeced1[0xe]](__Oxeced1[0xf]), ...jsonParse($[__Oxeced1[0xe]](__Oxeced1[0x12]) || __Oxeced1[0x13])[__Oxeced1[0x11]]((_0xb8a2x6) => {
        return _0xb8a2x6[__Oxeced1[0x10]]
    })][__Oxeced1[0xc]]((_0xb8a2x6) => {
        return !!_0xb8a2x6
    })
}
;allMessage = __Oxeced1[0x1], message = __Oxeced1[0x1];
$[__Oxeced1[0x14]] = false;
$[__Oxeced1[0x15]] = false;
$[__Oxeced1[0x16]] = false;
$[__Oxeced1[0x17]] = false;
$[__Oxeced1[0x18]] = false;
$[__Oxeced1[0x19]] = __Oxeced1[0x1];
$[__Oxeced1[0x1a]] = 0;
let lz_jdpin_token_cookie = __Oxeced1[0x1];
let activityCookie = __Oxeced1[0x1];
let tryBandingNum = 0;
let tryMissionNum = 0;
let flagg = false;
let flag = false;
!(async () => {
    if (!cookiesArr[0x0]) {
        $[__Oxeced1[0x22]]($[__Oxeced1[0x1f]], __Oxeced1[0x20], __Oxeced1[0x21], {"\x6F\x70\x65\x6E\x2D\x75\x72\x6C": __Oxeced1[0x21]});
        return
    }
    ;
    if (!dplh_actId) {
        console[__Oxeced1[0xb]](`${__Oxeced1[0x23]}`);
        return
    } else {
        console[__Oxeced1[0xb]](`${__Oxeced1[0x24]}${dplh_actId}${__Oxeced1[0x1]}`)
    }
    ;await $[__Oxeced1[0x26]](parseInt(Math[__Oxeced1[0x25]]() * 2500 + 500, 10));
    await getAuthorCode();
    await $[__Oxeced1[0x26]](parseInt(Math[__Oxeced1[0x25]]() * 3500 + 500, 10));
    $[__Oxeced1[0x19]] = $[__Oxeced1[0x19]][__Oxeced1[0x28]](__Oxeced1[0x27], __Oxeced1[0x1]);
    $[__Oxeced1[0x19]] = $[__Oxeced1[0x19]][__Oxeced1[0x28]](__Oxeced1[0x29], __Oxeced1[0x2a]);
    $[__Oxeced1[0x2b]] = `${__Oxeced1[0x1]}${$[__Oxeced1[0x19]]}${__Oxeced1[0x1]}`;
    $[__Oxeced1[0x2c]] = __Oxeced1[0x2d];
    $[__Oxeced1[0x2e]] = __Oxeced1[0x2f];
    $[__Oxeced1[0x30]] = dplh_actId;
    $[__Oxeced1[0x31]] = __Oxeced1[0x1];
    for (let _0xb8a2xe = 0; _0xb8a2xe < cookiesArr[__Oxeced1[0x32]]; _0xb8a2xe++) {
        cookie = cookiesArr[_0xb8a2xe];
        if (cookie) {
            $[__Oxeced1[0x33]] = decodeURIComponent(cookie[__Oxeced1[0x34]](/pt_pin=([^; ]+)(?=;?)/) && cookie[__Oxeced1[0x34]](/pt_pin=([^; ]+)(?=;?)/)[0x1]);
            $[__Oxeced1[0x35]] = _0xb8a2xe + 1;
            message = __Oxeced1[0x1];
            $[__Oxeced1[0x36]] = 0;
            $[__Oxeced1[0x14]] = false;
            $[__Oxeced1[0x15]] = false;
            $[__Oxeced1[0x37]] = __Oxeced1[0x1];
            console[__Oxeced1[0xb]](`${__Oxeced1[0x38]}${$[__Oxeced1[0x35]]}${__Oxeced1[0x39]}${$[__Oxeced1[0x37]] || $[__Oxeced1[0x33]]}${__Oxeced1[0x3a]}`);
            await getUA();
            await run();
            if (_0xb8a2xe == 0 && !$[__Oxeced1[0x3b]]) {
                $[__Oxeced1[0x2b]] = $[__Oxeced1[0x19]]
            }
            ;
            if ($[__Oxeced1[0x15]] || $[__Oxeced1[0x16]]) {
                break
            }
            ;await $[__Oxeced1[0x26]](parseInt(Math[__Oxeced1[0x25]]() * 10000 + 10000), 10)
        }
    }
    ;
    if ($[__Oxeced1[0x15]]) {
        let _0xb8a2xf = __Oxeced1[0x3c];
        $[__Oxeced1[0x22]]($[__Oxeced1[0x1f]], `${__Oxeced1[0x1]}`, `${__Oxeced1[0x1]}${_0xb8a2xf}${__Oxeced1[0x1]}`);
        if ($[__Oxeced1[0x2]]()) {
            await notify[__Oxeced1[0x3d]](`${__Oxeced1[0x1]}${$[__Oxeced1[0x1f]]}${__Oxeced1[0x1]}`, `${__Oxeced1[0x1]}${_0xb8a2xf}${__Oxeced1[0x1]}`)
        }
    }
})()[__Oxeced1[0x1e]]((_0xb8a2xd) => {
    return $[__Oxeced1[0x1d]](_0xb8a2xd)
})[__Oxeced1[0x1c]](() => {
    return $[__Oxeced1[0x1b]]()
});

async function run() {
    try {
        $[__Oxeced1[0x3e]] = false;
        $[__Oxeced1[0x3f]] = 0;
        lz_jdpin_token_cookie = __Oxeced1[0x1];
        $[__Oxeced1[0x40]] = __Oxeced1[0x1];
        $[__Oxeced1[0x41]] = __Oxeced1[0x1];
        $[__Oxeced1[0x3b]] = __Oxeced1[0x1];
        flag = false;
        flagg = false;
        tryBandingNum = 0;
        tryMissionNum = 0;
        $[__Oxeced1[0x17]] = false;
        $[__Oxeced1[0x18]] = false;
        $[__Oxeced1[0x16]] = false;
        await takePostRequest(__Oxeced1[0x42]);
        await $[__Oxeced1[0x26]](parseInt(Math[__Oxeced1[0x25]]() * 2500 + 1000), 10);
        if ($[__Oxeced1[0x40]] == __Oxeced1[0x1]) {
            console[__Oxeced1[0xb]](__Oxeced1[0x43]);
            return
        }
        ;await takePostRequest(__Oxeced1[0x44]);
        if ($[__Oxeced1[0x15]]) {
            console[__Oxeced1[0xb]](__Oxeced1[0x45]);
            return
        }
        ;
        if ($[__Oxeced1[0x14]]) {
            return
        }
        ;
        if ($[__Oxeced1[0x3f]] && (Date[__Oxeced1[0x46]]() > $[__Oxeced1[0x3f]])) {
            $[__Oxeced1[0x3b]] = __Oxeced1[0x1];
            $[__Oxeced1[0x16]] = true;
            console[__Oxeced1[0xb]](__Oxeced1[0x47]);
            return
        }
        ;
        if ($[__Oxeced1[0x3b]] == __Oxeced1[0x1]) {
            console[__Oxeced1[0xb]](`${__Oxeced1[0x48]}`);
            return
        }
        ;$[__Oxeced1[0x49]] = 0;
        await takePostRequest(__Oxeced1[0x4a]);
        while ($[__Oxeced1[0x17]] == true) {
            tryBandingNum++;
            console[__Oxeced1[0xb]](`${__Oxeced1[0x4b]}${tryBandingNum}${__Oxeced1[0x4c]}`);
            await $[__Oxeced1[0x26]](parseInt(Math[__Oxeced1[0x25]]() * 3500 + 3500, 10));
            await takePostRequest(__Oxeced1[0x4a]);
            if (tryBandingNum >= 5) {
                break
            }
        }
        ;await $[__Oxeced1[0x26]](parseInt(Math[__Oxeced1[0x25]]() * 2500 + 1500, 10));
        await takePostRequest(__Oxeced1[0x4d]);
        if ($[__Oxeced1[0x16]]) {
            return
        }
        ;console[__Oxeced1[0xb]](`${__Oxeced1[0x4e]}${$[__Oxeced1[0x4f]]}${__Oxeced1[0x1]}`);
        console[__Oxeced1[0xb]](`${__Oxeced1[0x50]}${$[__Oxeced1[0x51]]}${__Oxeced1[0x1]}`);
        if ($[__Oxeced1[0x51]]) {
            console[__Oxeced1[0xb]](`${__Oxeced1[0x52]}${$[__Oxeced1[0x51]][__Oxeced1[0x32]]}${__Oxeced1[0x53]}`);
            for (o of $[__Oxeced1[0x51]]) {
                flag = true;
                $[__Oxeced1[0x54]] = __Oxeced1[0x55];
                $[__Oxeced1[0x55]] = false;
                $[__Oxeced1[0x56]] = o;
                console[__Oxeced1[0xb]](`${__Oxeced1[0x57]}${o}${__Oxeced1[0x1]}`);
                tryMissionNum = 0;
                await takePostRequest(__Oxeced1[0x58]);
                await $[__Oxeced1[0x26]](parseInt(Math[__Oxeced1[0x25]]() * 2000 + 1000, 10));
                while ($[__Oxeced1[0x18]] == true) {
                    tryMissionNum++;
                    console[__Oxeced1[0xb]](`${__Oxeced1[0x4b]}${tryMissionNum}${__Oxeced1[0x4c]}`);
                    await takePostRequest(__Oxeced1[0x58]);
                    await $[__Oxeced1[0x26]](parseInt(Math[__Oxeced1[0x25]]() * 2000 + 1000, 10));
                    if (tryMissionNum >= 5) {
                        break
                    }
                }
                ;await joinShop();
                await $[__Oxeced1[0x26]](parseInt(Math[__Oxeced1[0x25]]() * 2000 + 1000, 10));
                if ($[__Oxeced1[0x5b]][__Oxeced1[0x5a]](__Oxeced1[0x59]) > -1 || $[__Oxeced1[0x5b]][__Oxeced1[0x5a]](__Oxeced1[0x5c]) > -1) {
                    console[__Oxeced1[0xb]](__Oxeced1[0x5d]);
                    await joinShop();
                    await $[__Oxeced1[0x26]](parseInt(Math[__Oxeced1[0x25]]() * 2000 + 1000, 10))
                }
                ;
                if ($[__Oxeced1[0x5b]][__Oxeced1[0x5a]](__Oxeced1[0x59]) > -1 || $[__Oxeced1[0x5b]][__Oxeced1[0x5a]](__Oxeced1[0x5c]) > -1) {
                    console[__Oxeced1[0xb]](__Oxeced1[0x5e]);
                    await joinShop();
                    await $[__Oxeced1[0x26]](parseInt(Math[__Oxeced1[0x25]]() * 2000 + 1000, 10))
                }
                ;
                if ($[__Oxeced1[0x5b]][__Oxeced1[0x5a]](__Oxeced1[0x59]) > -1 || $[__Oxeced1[0x5b]][__Oxeced1[0x5a]](__Oxeced1[0x5c]) > -1) {
                    console[__Oxeced1[0xb]](__Oxeced1[0x5f]);
                    await joinShop();
                    await $[__Oxeced1[0x26]](parseInt(Math[__Oxeced1[0x25]]() * 2000 + 1000, 10))
                }
                ;await $[__Oxeced1[0x26]](parseInt(Math[__Oxeced1[0x25]]() * 2800 + 500, 10));
                await takePostRequest(__Oxeced1[0x44]);
                tryBandingNum = 0;
                while ($[__Oxeced1[0x17]] == true) {
                    tryBandingNum++;
                    console[__Oxeced1[0xb]](`${__Oxeced1[0x4b]}${tryBandingNum}${__Oxeced1[0x4c]}`);
                    await $[__Oxeced1[0x26]](parseInt(Math[__Oxeced1[0x25]]() * 3500 + 1500, 10));
                    await takePostRequest(__Oxeced1[0x44]);
                    if (tryBandingNum >= 5) {
                        break
                    }
                }
            }
        }
        ;$[__Oxeced1[0x56]] = __Oxeced1[0x1];
        if ($[__Oxeced1[0x60]] === 0) {
            flagg = true;
            tryMissionNum = 0;
            $[__Oxeced1[0x54]] = __Oxeced1[0x61];
            await takePostRequest(__Oxeced1[0x58]);
            await $[__Oxeced1[0x26]](parseInt(Math[__Oxeced1[0x25]]() * 1500 + 1500, 10));
            while ($[__Oxeced1[0x18]] == true) {
                tryMissionNum++;
                console[__Oxeced1[0xb]](`${__Oxeced1[0x4b]}${tryMissionNum}${__Oxeced1[0x4c]}`);
                await takePostRequest(__Oxeced1[0x58]);
                await $[__Oxeced1[0x26]](parseInt(Math[__Oxeced1[0x25]]() * 1500 + 1500, 10));
                if (tryMissionNum >= 5) {
                    break
                }
            }
        } else {
            console[__Oxeced1[0xb]](__Oxeced1[0x62]);
            if (flag == true) {
                flagg = true;
                tryMissionNum = 0;
                $[__Oxeced1[0x54]] = __Oxeced1[0x61];
                await takePostRequest(__Oxeced1[0x58]);
                await $[__Oxeced1[0x26]](parseInt(Math[__Oxeced1[0x25]]() * 1500 + 1500, 10));
                while ($[__Oxeced1[0x18]] == true) {
                    tryMissionNum++;
                    console[__Oxeced1[0xb]](`${__Oxeced1[0x4b]}${tryMissionNum}${__Oxeced1[0x4c]}`);
                    await takePostRequest(__Oxeced1[0x58]);
                    await $[__Oxeced1[0x26]](parseInt(Math[__Oxeced1[0x25]]() * 1500 + 1500, 10));
                    if (tryMissionNum >= 5) {
                        break
                    }
                }
            }
        }
        ;
        if (flagg == true) {
            tryMissionNum = 0;
            $[__Oxeced1[0x54]] = __Oxeced1[0x63];
            await $[__Oxeced1[0x26]](parseInt(Math[__Oxeced1[0x25]]() * 1500 + 1500, 10));
            await takePostRequest(__Oxeced1[0x58]);
            await $[__Oxeced1[0x26]](parseInt(Math[__Oxeced1[0x25]]() * 1500 + 1500, 10));
            while ($[__Oxeced1[0x18]] == true) {
                tryMissionNum++;
                console[__Oxeced1[0xb]](`${__Oxeced1[0x4b]}${tryMissionNum}${__Oxeced1[0x4c]}`);
                await $[__Oxeced1[0x26]](parseInt(Math[__Oxeced1[0x25]]() * 1500 + 1500, 10));
                await takePostRequest(__Oxeced1[0x58]);
                await $[__Oxeced1[0x26]](parseInt(Math[__Oxeced1[0x25]]() * 1500 + 1500, 10));
                if (tryMissionNum >= 5) {
                    break
                }
            }
            ;await takePostRequest(__Oxeced1[0x44]);
            await $[__Oxeced1[0x26]](parseInt(Math[__Oxeced1[0x25]]() * 1500 + 1500), 10)
        }
        ;$[__Oxeced1[0x64]] = true;
        let _0xb8a2x11 = parseInt($[__Oxeced1[0x1a]], 10) ? parseInt($[__Oxeced1[0x1a]], 10) : 3;
        console[__Oxeced1[0xb]](`${__Oxeced1[0x65]}${_0xb8a2x11}${__Oxeced1[0x1]}`);
        console[__Oxeced1[0xb]](`${__Oxeced1[0x66]}`);
        for (ii = 0; ii < _0xb8a2x11; ii++) {
            if (parseInt(parseInt($[__Oxeced1[0x1a]], 10)) <= 0) {
                break
            }
            ;
            if (parseInt(dplh_drawNum) == 0) {
                break
            }
            ;console[__Oxeced1[0xb]](`${__Oxeced1[0x67]}${ii + 1}${__Oxeced1[0x68]}`);
            await takePostRequest(__Oxeced1[0x69]);
            if ($[__Oxeced1[0x64]] == false) {
                break
            }
            ;
            if (dplh_drawNum >= _0xb8a2x11) {
                dplh_drawNum = _0xb8a2x11
            }
            ;
            if ((ii + 1) > dplh_drawNum) {
                console[__Oxeced1[0xb]](`${__Oxeced1[0x6a]}`);
                break
            }
            ;await $[__Oxeced1[0x26]](parseInt(Math[__Oxeced1[0x25]]() * 2500 + 2500, 10))
        }
        ;await takePostRequest(__Oxeced1[0x6b]);
        await $[__Oxeced1[0x26]](parseInt(Math[__Oxeced1[0x25]]() * 1500 + 1500), 10);
        await takePostRequest(__Oxeced1[0x6c]);
        await $[__Oxeced1[0x26]](parseInt(Math[__Oxeced1[0x25]]() * 1500 + 1500), 10);
        console[__Oxeced1[0xb]]($.MixNick);
        console[__Oxeced1[0xb]](`${__Oxeced1[0x6d]}${$[__Oxeced1[0x2b]]}${__Oxeced1[0x1]}`);
        if ($[__Oxeced1[0x35]] == 1) {
            $[__Oxeced1[0x2b]] = $[__Oxeced1[0x3b]];
            console[__Oxeced1[0xb]](`${__Oxeced1[0x6e]}${$[__Oxeced1[0x2b]]}${__Oxeced1[0x1]}`)
        }
        ;await $[__Oxeced1[0x26]](parseInt(Math[__Oxeced1[0x25]]() * 2500 + 2500, 10))
    } catch (e) {
        console[__Oxeced1[0xb]](e)
    }
}

async function takePostRequest(_0xb8a2x13) {
    if ($[__Oxeced1[0x15]]) {
        return
    }
    ;let _0xb8a2x14 = __Oxeced1[0x6f];
    let _0xb8a2x15 = `${__Oxeced1[0x1]}`;
    let _0xb8a2x16 = __Oxeced1[0x70];
    let _0xb8a2x17 = __Oxeced1[0x1];
    switch (_0xb8a2x13) {
        case __Oxeced1[0x42]:
            url = `${__Oxeced1[0x71]}`;
            _0xb8a2x15 = await getToken();
            break;
        case __Oxeced1[0x44]:
            url = `${__Oxeced1[0x1]}${_0xb8a2x14}${__Oxeced1[0x72]}${$[__Oxeced1[0x3b]] || $[__Oxeced1[0x31]] || __Oxeced1[0x1]}${__Oxeced1[0x1]}`;
            _0xb8a2x17 = {
                "\x6A\x64\x54\x6F\x6B\x65\x6E": $[__Oxeced1[0x40]],
                "\x73\x6F\x75\x72\x63\x65": __Oxeced1[0x73],
                "\x69\x6E\x76\x69\x74\x65\x4E\x69\x63\x6B": ($[__Oxeced1[0x2b]] || __Oxeced1[0x1])
            };
            if ($[__Oxeced1[0x56]]) {
                _0xb8a2x17 = {
                    ..._0xb8a2x17,
                    "\x73\x68\x6F\x70\x49\x64": `${__Oxeced1[0x1]}${$[__Oxeced1[0x56]]}${__Oxeced1[0x1]}`
                }
            }
            ;_0xb8a2x15 = taskPostUrl(__Oxeced1[0x74], _0xb8a2x17);
            break;
        case __Oxeced1[0x77]:
            url = `${__Oxeced1[0x1]}${_0xb8a2x14}${__Oxeced1[0x75]}${$[__Oxeced1[0x3b]] || $[__Oxeced1[0x31]] || __Oxeced1[0x1]}${__Oxeced1[0x1]}`;
            _0xb8a2x17 = {};
            _0xb8a2x15 = taskPostUrl(__Oxeced1[0x76], _0xb8a2x17);
            break;
        case __Oxeced1[0x4d]:
            url = `${__Oxeced1[0x1]}${_0xb8a2x14}${__Oxeced1[0x78]}${$[__Oxeced1[0x3b]] || $[__Oxeced1[0x31]] || __Oxeced1[0x1]}${__Oxeced1[0x79]}${$[__Oxeced1[0x2e]]}${__Oxeced1[0x1]}`;
            _0xb8a2x17 = {};
            _0xb8a2x15 = taskPostUrl(__Oxeced1[0x7a], _0xb8a2x17);
            break;
        case __Oxeced1[0x4a]:
            url = `${__Oxeced1[0x1]}${_0xb8a2x14}${__Oxeced1[0x7b]}${$[__Oxeced1[0x3b]] || $[__Oxeced1[0x31]] || __Oxeced1[0x1]}${__Oxeced1[0x1]}`;
            _0xb8a2x17 = {
                "\x6D\x69\x73\x73\x69\x6F\x6E\x54\x79\x70\x65": __Oxeced1[0x7c],
                "\x69\x6E\x76\x69\x74\x65\x72\x4E\x69\x63\x6B": ($[__Oxeced1[0x2b]] || __Oxeced1[0x1])
            };
            _0xb8a2x15 = taskPostUrl(__Oxeced1[0x7d], _0xb8a2x17);
            break;
        case __Oxeced1[0x58]:
            url = `${__Oxeced1[0x1]}${_0xb8a2x14}${__Oxeced1[0x7b]}${$[__Oxeced1[0x3b]] || $[__Oxeced1[0x31]] || __Oxeced1[0x1]}${__Oxeced1[0x1]}`;
            _0xb8a2x17 = {"\x6D\x69\x73\x73\x69\x6F\x6E\x54\x79\x70\x65": $[__Oxeced1[0x54]]};
            if ($[__Oxeced1[0x56]]) {
                _0xb8a2x17 = {..._0xb8a2x17, "\x73\x68\x6F\x70\x49\x64": $[__Oxeced1[0x56]]}
            }
            ;_0xb8a2x15 = taskPostUrl(__Oxeced1[0x7d], _0xb8a2x17);
            break;
        case __Oxeced1[0x69]:
            url = `${__Oxeced1[0x1]}${_0xb8a2x14}${__Oxeced1[0x7e]}${$[__Oxeced1[0x3b]] || $[__Oxeced1[0x31]] || __Oxeced1[0x1]}${__Oxeced1[0x1]}`;
            _0xb8a2x17 = {
                "\x64\x61\x74\x61\x54\x79\x70\x65": __Oxeced1[0x7f],
                "\x75\x73\x65\x64\x47\x61\x6D\x65\x4E\x75\x6D": __Oxeced1[0x80]
            };
            _0xb8a2x15 = taskPostUrl(__Oxeced1[0x81], _0xb8a2x17);
            break;
        case __Oxeced1[0x85]:
            url = `${__Oxeced1[0x1]}${_0xb8a2x14}${__Oxeced1[0x82]}${$[__Oxeced1[0x3b]] || $[__Oxeced1[0x31]] || __Oxeced1[0x1]}${__Oxeced1[0x1]}`;
            _0xb8a2x17 = {
                "\x61\x63\x74\x49\x64": $[__Oxeced1[0x30]],
                "\x6D\x69\x73\x73\x69\x6F\x6E\x54\x79\x70\x65": __Oxeced1[0x83]
            };
            _0xb8a2x15 = taskPostUrl(__Oxeced1[0x84], _0xb8a2x17);
            break;
        case __Oxeced1[0x87]:
            url = `${__Oxeced1[0x1]}${_0xb8a2x14}${__Oxeced1[0x86]}${$[__Oxeced1[0x3b]] || $[__Oxeced1[0x31]] || __Oxeced1[0x1]}${__Oxeced1[0x1]}`;
            _0xb8a2x17 = {
                "\x61\x63\x74\x49\x64": $[__Oxeced1[0x30]],
                "\x6D\x69\x73\x73\x69\x6F\x6E\x54\x79\x70\x65": __Oxeced1[0x87]
            };
            _0xb8a2x15 = taskPostUrl(__Oxeced1[0x88], _0xb8a2x17);
            break;
        case __Oxeced1[0x6b]:
            url = `${__Oxeced1[0x1]}${_0xb8a2x14}${__Oxeced1[0x89]}${$[__Oxeced1[0x3b]] || $[__Oxeced1[0x31]] || __Oxeced1[0x1]}${__Oxeced1[0x1]}`;
            _0xb8a2x17 = {"\x70\x61\x67\x65\x4E\x6F": 1, "\x70\x61\x67\x65\x53\x69\x7A\x65": 9999};
            _0xb8a2x15 = taskPostUrl(__Oxeced1[0x8a], _0xb8a2x17);
            break;
        case __Oxeced1[0x6c]:
            url = `${__Oxeced1[0x1]}${_0xb8a2x14}${__Oxeced1[0x8b]}${$[__Oxeced1[0x3b]] || $[__Oxeced1[0x31]] || __Oxeced1[0x1]}${__Oxeced1[0x1]}`;
            _0xb8a2x17 = {
                "\x69\x6E\x76\x69\x74\x65\x4C\x69\x73\x74\x52\x65\x71\x75\x65\x73\x74": {
                    "\x61\x63\x74\x49\x64": $[__Oxeced1[0x30]],
                    "\x75\x73\x65\x72\x49\x64": 10299171,
                    "\x6D\x69\x73\x73\x69\x6F\x6E\x54\x79\x70\x65": __Oxeced1[0x8c],
                    "\x69\x6E\x76\x69\x74\x65\x54\x79\x70\x65": 1,
                    "\x62\x75\x79\x65\x72\x4E\x69\x63\x6B": ($[__Oxeced1[0x3b]] || __Oxeced1[0x1])
                }
            };
            _0xb8a2x15 = taskPostUrl(__Oxeced1[0x8d], _0xb8a2x17);
            break;
        default:
            console[__Oxeced1[0xb]](`${__Oxeced1[0x8e]}${_0xb8a2x13}${__Oxeced1[0x1]}`)
    }
    ;let _0xb8a2x18 = getPostRequest(url, _0xb8a2x15, _0xb8a2x16);
    await $[__Oxeced1[0x26]](parseInt(Math[__Oxeced1[0x25]]() * 500 + 500, 10));
    return new Promise(async (_0xb8a2x19) => {
        $[__Oxeced1[0x92]](_0xb8a2x18, (_0xb8a2x1a, _0xb8a2x1b, _0xb8a2x1c) => {
            try {
                if (_0xb8a2x1a) {
                    if (_0xb8a2x1b && _0xb8a2x1b[__Oxeced1[0x8f]] && _0xb8a2x1b[__Oxeced1[0x8f]] == 493) {
                        console[__Oxeced1[0xb]](__Oxeced1[0x45]);
                        $[__Oxeced1[0x15]] = true
                    }
                    ;console[__Oxeced1[0xb]](`${__Oxeced1[0x1]}${$[__Oxeced1[0x90]](_0xb8a2x1a, _0xb8a2x1a)}${__Oxeced1[0x1]}`);
                    console[__Oxeced1[0xb]](`${__Oxeced1[0x1]}${_0xb8a2x13}${__Oxeced1[0x91]}`);
                    if (_0xb8a2x13 == __Oxeced1[0x4a]) {
                        $[__Oxeced1[0x17]] = true
                    }
                    ;
                    if (_0xb8a2x13 == __Oxeced1[0x58]) {
                        $[__Oxeced1[0x18]] = true
                    }
                    ;
                    if (_0xb8a2x13 == __Oxeced1[0x44]) {
                        $[__Oxeced1[0x17]] = true
                    }
                } else {
                    $[__Oxeced1[0x17]] = false;
                    $[__Oxeced1[0x18]] = false;
                    dealReturn(_0xb8a2x13, _0xb8a2x1c)
                }
            } catch (e) {
                console[__Oxeced1[0xb]](e, _0xb8a2x1b)
            } finally {
                _0xb8a2x19()
            }
        })
    })
}

async function dealReturn(_0xb8a2x13, _0xb8a2x1c) {
    let _0xb8a2x1e = __Oxeced1[0x1];
    try {
        if (_0xb8a2x13 != __Oxeced1[0x93] || _0xb8a2x13 != __Oxeced1[0x94]) {
            if (_0xb8a2x1c) {
                _0xb8a2x1e = JSON[__Oxeced1[0x95]](_0xb8a2x1c)
            }
        }
    } catch (e) {
        console[__Oxeced1[0xb]](`${__Oxeced1[0x1]}${_0xb8a2x13}${__Oxeced1[0x96]}`);
        console[__Oxeced1[0xb]](_0xb8a2x1c);
        $[__Oxeced1[0x64]] = false
    }
    ;
    try {
        let _0xb8a2x1f = __Oxeced1[0x1];
        switch (_0xb8a2x13) {
            case __Oxeced1[0x42]:
                if (typeof _0xb8a2x1e == __Oxeced1[0x97]) {
                    if (_0xb8a2x1e[__Oxeced1[0x98]] == 0) {
                        if (typeof _0xb8a2x1e[__Oxeced1[0x99]] != __Oxeced1[0x9a]) {
                            $[__Oxeced1[0x40]] = _0xb8a2x1e[__Oxeced1[0x99]]
                        }
                    } else {
                        if (_0xb8a2x1e[__Oxeced1[0x9b]]) {
                            console[__Oxeced1[0xb]](`${__Oxeced1[0x1]}${_0xb8a2x13}${__Oxeced1[0x9c]}${_0xb8a2x1e[__Oxeced1[0x9b]] || __Oxeced1[0x1]}${__Oxeced1[0x1]}`)
                        } else {
                            console[__Oxeced1[0xb]](_0xb8a2x1c)
                        }
                    }
                } else {
                    console[__Oxeced1[0xb]](_0xb8a2x1c)
                }
                ;
                break;
            case __Oxeced1[0x93]:
                ;
            case __Oxeced1[0x94]:
                ;
            case __Oxeced1[0x44]:
                ;
            case __Oxeced1[0x58]:
                ;
            case __Oxeced1[0x77]:
                ;
            case __Oxeced1[0x4d]:
                if (typeof _0xb8a2x1e == __Oxeced1[0x97]) {
                    if (_0xb8a2x1e[__Oxeced1[0x9d]] == true) {
                        $[__Oxeced1[0x9e]] = [];
                        $[__Oxeced1[0x9e]] = _0xb8a2x1e[__Oxeced1[0x9f]][__Oxeced1[0x9f]];
                        $[__Oxeced1[0x4f]] = [];
                        $[__Oxeced1[0x51]] = [];
                        Object[__Oxeced1[0xa1]]($[__Oxeced1[0x9e]])[__Oxeced1[0x4]](function (_0xb8a2x20) {
                            $[__Oxeced1[0x4f]][__Oxeced1[0x3]](_0xb8a2x20[__Oxeced1[0x2e]]);
                            if (_0xb8a2x20[__Oxeced1[0xa0]] == false) {
                                $[__Oxeced1[0x51]][__Oxeced1[0x3]](_0xb8a2x20[__Oxeced1[0x2e]])
                            }
                        })
                    }
                }
                ;
            case __Oxeced1[0xa2]:
                ;
            case __Oxeced1[0xa3]:
                ;
            case __Oxeced1[0xa4]:
                ;
            case __Oxeced1[0xa5]:
                ;
            case __Oxeced1[0x85]:
                ;
            case __Oxeced1[0x87]:
                ;
            case __Oxeced1[0x6b]:
                ;
            case __Oxeced1[0x6c]:
                ;
            case __Oxeced1[0x69]:
                _0xb8a2x1f = __Oxeced1[0x1];
                if (_0xb8a2x13 == __Oxeced1[0x85]) {
                    _0xb8a2x1f = __Oxeced1[0xa6]
                }
                ;
                if (_0xb8a2x13 == __Oxeced1[0x87]) {
                    _0xb8a2x1f = __Oxeced1[0xa7]
                }
                ;
                if (typeof _0xb8a2x1e == __Oxeced1[0x97]) {
                    if (_0xb8a2x1e[__Oxeced1[0x9d]] && _0xb8a2x1e[__Oxeced1[0x9d]] === true && _0xb8a2x1e[__Oxeced1[0x9f]]) {
                        if (_0xb8a2x1e[__Oxeced1[0x9f]][__Oxeced1[0xa8]] && _0xb8a2x1e[__Oxeced1[0x9f]][__Oxeced1[0xa8]] == 200) {
                            _0xb8a2x1e = _0xb8a2x1e[__Oxeced1[0x9f]];
                            if (_0xb8a2x13 != __Oxeced1[0xa3] && (_0xb8a2x1e[__Oxeced1[0x22]] || _0xb8a2x1e[__Oxeced1[0x9f]][__Oxeced1[0xa9]] || _0xb8a2x1e[__Oxeced1[0x9f]][__Oxeced1[0xaa]])) {
                                console[__Oxeced1[0xb]](`${__Oxeced1[0x1]}${_0xb8a2x1f && _0xb8a2x1f + __Oxeced1[0xab] || __Oxeced1[0x1]}${__Oxeced1[0x1]}${_0xb8a2x1e[__Oxeced1[0x22]] || _0xb8a2x1e[__Oxeced1[0x9f]][__Oxeced1[0xa9]] || _0xb8a2x1e[__Oxeced1[0x9f]][__Oxeced1[0xaa]] || __Oxeced1[0x1]}${__Oxeced1[0x1]}`)
                            }
                            ;
                            if (_0xb8a2x13 == __Oxeced1[0x44]) {
                                if (_0xb8a2x1e[__Oxeced1[0x22]] || _0xb8a2x1e[__Oxeced1[0x9f]][__Oxeced1[0xa9]]) {
                                    if ((_0xb8a2x1e[__Oxeced1[0x22]] || _0xb8a2x1e[__Oxeced1[0x9f]][__Oxeced1[0xa9]] || __Oxeced1[0x1])[__Oxeced1[0x5a]](__Oxeced1[0xac]) > -1) {
                                        $[__Oxeced1[0x49]] = 1
                                    }
                                }
                                ;
                                if (_0xb8a2x1e[__Oxeced1[0x9f]]) {
                                    $[__Oxeced1[0x3f]] = _0xb8a2x1e[__Oxeced1[0x9f]][__Oxeced1[0xad]][__Oxeced1[0x3f]] || 0;
                                    $[__Oxeced1[0x3b]] = _0xb8a2x1e[__Oxeced1[0x9f]][__Oxeced1[0xae]] || __Oxeced1[0x1];
                                    $[__Oxeced1[0x1a]] = _0xb8a2x1e[__Oxeced1[0x9f]][__Oxeced1[0xaf]][__Oxeced1[0x1a]] || 0;
                                    $[__Oxeced1[0x60]] = _0xb8a2x1e[__Oxeced1[0x9f]][__Oxeced1[0xaf]][__Oxeced1[0x60]] || 0
                                }
                            } else {
                                if (_0xb8a2x13 == __Oxeced1[0x77]) {
                                } else {
                                    if (_0xb8a2x13 == __Oxeced1[0x58]) {
                                        if (_0xb8a2x1e[__Oxeced1[0x9f]][__Oxeced1[0xaa]][__Oxeced1[0x5a]](__Oxeced1[0xb0]) > -1) {
                                            $[__Oxeced1[0x55]] = true
                                        } else {
                                            $[__Oxeced1[0x55]] = false
                                        }
                                    } else {
                                        if (_0xb8a2x13 == __Oxeced1[0xa4]) {
                                            $[__Oxeced1[0xb1]] = _0xb8a2x1e[__Oxeced1[0x22]] || _0xb8a2x1e[__Oxeced1[0x9f]][__Oxeced1[0x22]] || __Oxeced1[0x1]
                                        } else {
                                            if (_0xb8a2x13 == __Oxeced1[0x6b]) {
                                                console[__Oxeced1[0xb]](`${__Oxeced1[0xb2]}`);
                                                let _0xb8a2x21 = 0;
                                                let _0xb8a2x22 = 0;
                                                for (let _0xb8a2xe in _0xb8a2x1e[__Oxeced1[0x9f]][__Oxeced1[0xb3]] || []) {
                                                    let _0xb8a2x6 = _0xb8a2x1e[__Oxeced1[0x9f]][__Oxeced1[0xb3]][_0xb8a2xe];
                                                    _0xb8a2x22 += Number(_0xb8a2x6[__Oxeced1[0xb4]])
                                                }
                                                ;
                                                if (_0xb8a2x22 > 0) {
                                                    console[__Oxeced1[0xb]](`${__Oxeced1[0xb5]}${_0xb8a2x22}${__Oxeced1[0xb6]}`)
                                                }
                                            } else {
                                                if (_0xb8a2x13 == __Oxeced1[0x6c]) {
                                                    console[__Oxeced1[0xb]](`${__Oxeced1[0xb7]}${_0xb8a2x1e[__Oxeced1[0x9f]][__Oxeced1[0xb9]][__Oxeced1[0xb8]]}${__Oxeced1[0xba]}`)
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        } else {
                            if (_0xb8a2x1e[__Oxeced1[0x9f]][__Oxeced1[0x22]]) {
                                if (_0xb8a2x1e[__Oxeced1[0xbc]][__Oxeced1[0x5a]](__Oxeced1[0xbb]) > -1) {
                                    $[__Oxeced1[0x16]] = true
                                }
                                ;console[__Oxeced1[0xb]](`${__Oxeced1[0x1]}${_0xb8a2x1f || _0xb8a2x13}${__Oxeced1[0x9c]}${_0xb8a2x1e[__Oxeced1[0x9f]][__Oxeced1[0x22]] || __Oxeced1[0x1]}${__Oxeced1[0x1]}`)
                            } else {
                                if (_0xb8a2x1e[__Oxeced1[0xbc]]) {
                                    if (_0xb8a2x1e[__Oxeced1[0xbc]][__Oxeced1[0x5a]](__Oxeced1[0xbd]) > -1) {
                                        $[__Oxeced1[0x14]] = true
                                    }
                                    ;console[__Oxeced1[0xb]](`${__Oxeced1[0x1]}${_0xb8a2x1f || _0xb8a2x13}${__Oxeced1[0x9c]}${_0xb8a2x1e[__Oxeced1[0xbc]] || __Oxeced1[0x1]}${__Oxeced1[0x1]}`)
                                } else {
                                    console[__Oxeced1[0xb]](`${__Oxeced1[0x1]}${_0xb8a2x1f || _0xb8a2x13}${__Oxeced1[0x9c]}${_0xb8a2x1c}${__Oxeced1[0x1]}`)
                                }
                            }
                        }
                    } else {
                        if (_0xb8a2x1e[__Oxeced1[0xbc]]) {
                            console[__Oxeced1[0xb]](`${__Oxeced1[0x1]}${_0xb8a2x1f || _0xb8a2x13}${__Oxeced1[0x9c]}${_0xb8a2x1e[__Oxeced1[0xbc]] || __Oxeced1[0x1]}${__Oxeced1[0x1]}`)
                        } else {
                            console[__Oxeced1[0xb]](`${__Oxeced1[0x1]}${_0xb8a2x1f || _0xb8a2x13}${__Oxeced1[0x9c]}${_0xb8a2x1c}${__Oxeced1[0x1]}`)
                        }
                    }
                } else {
                    console[__Oxeced1[0xb]](`${__Oxeced1[0x1]}${_0xb8a2x1f || _0xb8a2x13}${__Oxeced1[0x9c]}${_0xb8a2x1c}${__Oxeced1[0x1]}`)
                }
                ;
                break;
            default:
                console[__Oxeced1[0xb]](`${__Oxeced1[0x1]}${_0xb8a2x1f || _0xb8a2x13}${__Oxeced1[0xbe]}${_0xb8a2x1c}${__Oxeced1[0x1]}`)
        }
        ;
        if (typeof _0xb8a2x1e == __Oxeced1[0x97]) {
            if (_0xb8a2x1e[__Oxeced1[0xbc]]) {
                if (_0xb8a2x1e[__Oxeced1[0xbc]][__Oxeced1[0x5a]](__Oxeced1[0xbd]) > -1) {
                    $[__Oxeced1[0x14]] = true
                }
            }
        }
    } catch (e) {
        console[__Oxeced1[0xb]](e)
    }
}

function getPostRequest(_0xb8a2x24, _0xb8a2x15, _0xb8a2x16 = __Oxeced1[0x70]) {
    let _0xb8a2x25 = {
        "\x41\x63\x63\x65\x70\x74": __Oxeced1[0xbf],
        "\x41\x63\x63\x65\x70\x74\x2D\x45\x6E\x63\x6F\x64\x69\x6E\x67": __Oxeced1[0xc0],
        "\x41\x63\x63\x65\x70\x74\x2D\x4C\x61\x6E\x67\x75\x61\x67\x65": __Oxeced1[0xc1],
        "\x43\x6F\x6E\x6E\x65\x63\x74\x69\x6F\x6E": __Oxeced1[0xc2],
        "\x43\x6F\x6E\x74\x65\x6E\x74\x2D\x54\x79\x70\x65": __Oxeced1[0xc3],
        "\x43\x6F\x6F\x6B\x69\x65": cookie,
        "\x55\x73\x65\x72\x2D\x41\x67\x65\x6E\x74": $[__Oxeced1[0xc4]],
        "\x58\x2D\x52\x65\x71\x75\x65\x73\x74\x65\x64\x2D\x57\x69\x74\x68": __Oxeced1[0xc5]
    };
    if (_0xb8a2x24[__Oxeced1[0x5a]](__Oxeced1[0x6f]) > -1) {
        _0xb8a2x25[__Oxeced1[0xc6]] = `${__Oxeced1[0x6f]}`;
        _0xb8a2x25[__Oxeced1[0xc7]] = `${__Oxeced1[0xc8]}`;
        delete _0xb8a2x25[__Oxeced1[0xc9]]
    }
    ;
    return {url: _0xb8a2x24, method: _0xb8a2x16, headers: _0xb8a2x25, body: _0xb8a2x15, timeout: 65000}
}

function taskPostUrl(_0xb8a2x24, _0xb8a2x27) {
    const _0xb8a2x28 = {
        "\x6A\x73\x6F\x6E\x52\x70\x63": __Oxeced1[0xca],
        "\x70\x61\x72\x61\x6D\x73": {
            "\x63\x6F\x6D\x6D\x6F\x6E\x50\x61\x72\x61\x6D\x65\x74\x65\x72": {
                "\x61\x70\x70\x6B\x65\x79": $[__Oxeced1[0x2c]],
                "\x6D": __Oxeced1[0x70],
                "\x74\x69\x6D\x65\x73\x74\x61\x6D\x70": Date[__Oxeced1[0x46]](),
                "\x75\x73\x65\x72\x49\x64": $[__Oxeced1[0x2e]]
            },
            "\x61\x64\x6D\x4A\x73\x6F\x6E": {
                "\x61\x63\x74\x49\x64": $[__Oxeced1[0x30]],
                "\x75\x73\x65\x72\x49\x64": $[__Oxeced1[0x2e]], ..._0xb8a2x27,
                "\x6D\x65\x74\x68\x6F\x64": _0xb8a2x24,
                "\x62\x75\x79\x65\x72\x4E\x69\x63\x6B": ($[__Oxeced1[0x3b]] || __Oxeced1[0x1])
            }
        }
    };
    Object[__Oxeced1[0xcd]](_0xb8a2x28[__Oxeced1[0xcc]][__Oxeced1[0xcb]], _0xb8a2x27);
    let _0xb8a2x29 = getSign(_0xb8a2x28[__Oxeced1[0xcc]][__Oxeced1[0xcb]]);
    _0xb8a2x28[__Oxeced1[0xcc]][__Oxeced1[0xcf]][__Oxeced1[0xce]] = _0xb8a2x29[__Oxeced1[0xce]];
    _0xb8a2x28[__Oxeced1[0xcc]][__Oxeced1[0xcf]][__Oxeced1[0xd0]] = _0xb8a2x29[__Oxeced1[0xd1]];
    if (_0xb8a2x24[__Oxeced1[0x5a]](__Oxeced1[0x6c]) > -1) {
        delete _0xb8a2x28[__Oxeced1[0xcc]][__Oxeced1[0xcb]][__Oxeced1[0x30]]
    }
    ;
    return $[__Oxeced1[0x90]](_0xb8a2x28, _0xb8a2x28)
}

async function getUA() {
    $[__Oxeced1[0xc4]] = `${__Oxeced1[0xd2]}${randomString(40)}${__Oxeced1[0xd3]}`
}

function randomString(_0xb8a2xd) {
    _0xb8a2xd = _0xb8a2xd || 32;
    let _0xb8a2x27 = __Oxeced1[0xd4], _0xb8a2x2c = _0xb8a2x27[__Oxeced1[0x32]], _0xb8a2x2d = __Oxeced1[0x1];
    for (i = 0; i < _0xb8a2xd; i++) {
        _0xb8a2x2d += _0xb8a2x27[__Oxeced1[0xd6]](Math[__Oxeced1[0xd5]](Math[__Oxeced1[0x25]]() * _0xb8a2x2c))
    }
    ;
    return _0xb8a2x2d
}

function jsonParse(_0xb8a2x2f) {
    if (typeof _0xb8a2x2f == __Oxeced1[0xd7]) {
        try {
            return JSON[__Oxeced1[0x95]](_0xb8a2x2f)
        } catch (e) {
            console[__Oxeced1[0xb]](e);
            $[__Oxeced1[0x22]]($[__Oxeced1[0x1f]], __Oxeced1[0x1], __Oxeced1[0xd8]);
            return []
        }
    }
}

function getSign(_0xb8a2x31) {
    var _0xb8a2x27 = new Date().valueOf(), _0xb8a2x32 = __Oxeced1[0xd9], _0xb8a2x2c = __Oxeced1[0xda],
        _0xb8a2x33 = JSON[__Oxeced1[0xdb]](_0xb8a2x31), _0xb8a2x34 = encodeURIComponent(_0xb8a2x33),
        _0xb8a2x28 = new RegExp(__Oxeced1[0xdc], __Oxeced1[0xdd]),
        _0xb8a2x35 = new RegExp(__Oxeced1[0xde], __Oxeced1[0xdd]),
        _0xb8a2x34 = _0xb8a2x34[__Oxeced1[0xe0]](_0xb8a2x28, __Oxeced1[0xdf]),
        _0xb8a2x34 = _0xb8a2x34[__Oxeced1[0xe0]](_0xb8a2x35, __Oxeced1[0xe1]),
        _0xb8a2x36 = (_0xb8a2x2c + __Oxeced1[0xe2] + _0xb8a2x2c + __Oxeced1[0xcb] + _0xb8a2x34 + __Oxeced1[0xd0] + _0xb8a2x27 + _0xb8a2x32);
    return {
        '\x73\x69\x67\x6E': CryptoJS.MD5(_0xb8a2x36[__Oxeced1[0xe3]]()).toString(),
        '\x74\x69\x6D\x65\x53\x74\x61\x6D\x70': _0xb8a2x27
    }
}

function joinShop() {
    if (!$[__Oxeced1[0x56]]) {
        return
    }
    ;
    return new Promise(async (_0xb8a2x19) => {
        $[__Oxeced1[0xe4]] = __Oxeced1[0x1];
        $[__Oxeced1[0x5b]] = __Oxeced1[0x59];
        await getshopactivityId();
        await $[__Oxeced1[0x26]](500);
        let _0xb8a2x38 = `${__Oxeced1[0x1]}`;
        if ($[__Oxeced1[0xe4]]) {
            _0xb8a2x38 = `${__Oxeced1[0xe5]}${$[__Oxeced1[0xe4]]}${__Oxeced1[0x1]}`
        }
        ;let _0xb8a2x15 = `${__Oxeced1[0xe6]}${$[__Oxeced1[0x56]]}${__Oxeced1[0xe7]}${$[__Oxeced1[0x56]]}${__Oxeced1[0xe8]}${_0xb8a2x38}${__Oxeced1[0xe9]}`;
        let _0xb8a2x39 = __Oxeced1[0x1];
        _0xb8a2x39 = await geth5st();
        const _0xb8a2x3a = {
            url: `${__Oxeced1[0xea]}${_0xb8a2x15}${__Oxeced1[0xeb]}${_0xb8a2x39}${__Oxeced1[0x1]}`,
            headers: {
                '\x43\x6F\x6E\x74\x65\x6E\x74\x2D\x54\x79\x70\x65': __Oxeced1[0xec],
                '\x4F\x72\x69\x67\x69\x6E': __Oxeced1[0xed],
                '\x48\x6F\x73\x74': __Oxeced1[0xee],
                '\x61\x63\x63\x65\x70\x74': __Oxeced1[0xef],
                '\x55\x73\x65\x72\x2D\x41\x67\x65\x6E\x74': $[__Oxeced1[0xc4]],
                '\x63\x6F\x6E\x74\x65\x6E\x74\x2D\x74\x79\x70\x65': __Oxeced1[0xc3],
                '\x43\x6F\x6F\x6B\x69\x65': cookie
            }
        };
        await $[__Oxeced1[0x26]](500);
        $[__Oxeced1[0xf8]](_0xb8a2x3a, async (_0xb8a2x1a, _0xb8a2x1b, _0xb8a2x1c) => {
            try {
                let _0xb8a2x1e = $[__Oxeced1[0xf0]](_0xb8a2x1c, _0xb8a2x1c);
                if (typeof _0xb8a2x1e == __Oxeced1[0x97]) {
                    if (_0xb8a2x1e[__Oxeced1[0x9d]] === true) {
                        $[__Oxeced1[0x5b]] = _0xb8a2x1e[__Oxeced1[0x9b]];
                        console[__Oxeced1[0xb]](_0xb8a2x1e[__Oxeced1[0x9b]]);
                        if (_0xb8a2x1e[__Oxeced1[0xf1]] && _0xb8a2x1e[__Oxeced1[0xf1]][__Oxeced1[0xf2]]) {
                            for (let _0xb8a2xe of _0xb8a2x1e[__Oxeced1[0xf1]][__Oxeced1[0xf2]][__Oxeced1[0xf3]]) {
                                console[__Oxeced1[0xb]](`${__Oxeced1[0xf4]}${_0xb8a2xe[__Oxeced1[0xf5]]}${__Oxeced1[0x1]}${_0xb8a2xe[__Oxeced1[0xf6]]}${__Oxeced1[0x1]}${_0xb8a2xe[__Oxeced1[0xf7]]}${__Oxeced1[0x1]}`)
                            }
                        }
                    } else {
                        if (typeof _0xb8a2x1e == __Oxeced1[0x97] && _0xb8a2x1e[__Oxeced1[0x9b]]) {
                            $[__Oxeced1[0x5b]] = _0xb8a2x1e[__Oxeced1[0x9b]];
                            console[__Oxeced1[0xb]](`${__Oxeced1[0x1]}${_0xb8a2x1e[__Oxeced1[0x9b]] || __Oxeced1[0x1]}${__Oxeced1[0x1]}`)
                        } else {
                            console[__Oxeced1[0xb]](_0xb8a2x1c)
                        }
                    }
                } else {
                    console[__Oxeced1[0xb]](_0xb8a2x1c)
                }
            } catch (e) {
                $[__Oxeced1[0x1d]](e, _0xb8a2x1b)
            } finally {
                _0xb8a2x19()
            }
        })
    })
}

function getshopactivityId() {
    return new Promise((_0xb8a2x19) => {
        let _0xb8a2x39 = `${__Oxeced1[0x1]}${new Date(Date[__Oxeced1[0x46]]()).Format(__Oxeced1[0xf9])}${__Oxeced1[0xfa]}${generateFp()}${__Oxeced1[0xfb]}${Date[__Oxeced1[0x46]]()}${__Oxeced1[0x1]}`;
        _0xb8a2x39 = encodeURIComponent(_0xb8a2x39);
        const _0xb8a2x3a = {
            url: `${__Oxeced1[0xfc]}${$[__Oxeced1[0x56]]}${__Oxeced1[0xfd]}${_0xb8a2x39}${__Oxeced1[0x1]}`,
            headers: {
                '\x43\x6F\x6E\x74\x65\x6E\x74\x2D\x54\x79\x70\x65': __Oxeced1[0xec],
                '\x4F\x72\x69\x67\x69\x6E': __Oxeced1[0xed],
                '\x48\x6F\x73\x74': __Oxeced1[0xee],
                '\x61\x63\x63\x65\x70\x74': __Oxeced1[0xef],
                '\x55\x73\x65\x72\x2D\x41\x67\x65\x6E\x74': $[__Oxeced1[0xc4]],
                '\x63\x6F\x6E\x74\x65\x6E\x74\x2D\x74\x79\x70\x65': __Oxeced1[0xc3],
                '\x43\x6F\x6F\x6B\x69\x65': cookie
            }
        };
        $[__Oxeced1[0xf8]](_0xb8a2x3a, async (_0xb8a2x1a, _0xb8a2x1b, _0xb8a2x1c) => {
            try {
                let _0xb8a2x1e = $[__Oxeced1[0xf0]](_0xb8a2x1c, _0xb8a2x1c);
                if (typeof _0xb8a2x1e == __Oxeced1[0x97]) {
                    if (_0xb8a2x1e[__Oxeced1[0x9d]] == true) {
                        console[__Oxeced1[0xb]](`${__Oxeced1[0xfe]}${_0xb8a2x1e[__Oxeced1[0xf1]][__Oxeced1[0x100]][__Oxeced1[0xff]] || __Oxeced1[0x1]}${__Oxeced1[0x1]}`);
                        $[__Oxeced1[0xe4]] = _0xb8a2x1e[__Oxeced1[0xf1]][__Oxeced1[0x101]] && _0xb8a2x1e[__Oxeced1[0xf1]][__Oxeced1[0x101]][0x0] && _0xb8a2x1e[__Oxeced1[0xf1]][__Oxeced1[0x101]][0x0][__Oxeced1[0x102]] && _0xb8a2x1e[__Oxeced1[0xf1]][__Oxeced1[0x101]][0x0][__Oxeced1[0x102]][__Oxeced1[0x103]] || __Oxeced1[0x1]
                    }
                } else {
                    console[__Oxeced1[0xb]](_0xb8a2x1c)
                }
            } catch (e) {
                $[__Oxeced1[0x1d]](e, _0xb8a2x1b)
            } finally {
                _0xb8a2x19()
            }
        })
    })
}

function generateFp() {
    let _0xb8a2xd = __Oxeced1[0x104];
    let _0xb8a2x2c = 13;
    let _0xb8a2xe = __Oxeced1[0x1];
    for (; _0xb8a2x2c--;) {
        _0xb8a2xe += _0xb8a2xd[Math[__Oxeced1[0x25]]() * _0xb8a2xd[__Oxeced1[0x32]] | 0]
    }
    ;
    return (_0xb8a2xe + Date[__Oxeced1[0x46]]())[__Oxeced1[0x105]](0, 16)
}

function geth5st() {
    let _0xb8a2x3e = Date[__Oxeced1[0x46]]();
    let _0xb8a2x3f = generateFp();
    let _0xb8a2x40 = new Date(_0xb8a2x3e).Format(__Oxeced1[0xf9]);
    let _0xb8a2x41 = __Oxeced1[0x1];
    let _0xb8a2x42 = __Oxeced1[0x1];
    let _0xb8a2x43 = [__Oxeced1[0x106], __Oxeced1[0x107], __Oxeced1[0x108]];
    let _0xb8a2x44 = _0xb8a2x43[random(0, _0xb8a2x43[__Oxeced1[0x32]])];
    return encodeURIComponent(_0xb8a2x40 + __Oxeced1[0xfa] + _0xb8a2x44 + _0xb8a2x3f + __Oxeced1[0x1] + Date[__Oxeced1[0x46]]())
}

function getH5st() {
    let _0xb8a2x3e = Date[__Oxeced1[0x46]]();
    let _0xb8a2x3f = generateFp();
    let _0xb8a2x40 = new Date(_0xb8a2x3e).Format(__Oxeced1[0xf9]);
    return encodeURIComponent(_0xb8a2x40 + __Oxeced1[0xfa] + __Oxeced1[0x1] + _0xb8a2x3f + __Oxeced1[0x107] + Date[__Oxeced1[0x46]]())
}

Date[__Oxeced1[0x10a]][__Oxeced1[0x109]] = function (_0xb8a2x46) {
    var _0xb8a2xd, _0xb8a2x2d = this, _0xb8a2x47 = _0xb8a2x46, _0xb8a2x48 = {
        "\x4D\x2B": _0xb8a2x2d[__Oxeced1[0x10b]]() + 1,
        "\x64\x2B": _0xb8a2x2d[__Oxeced1[0x10c]](),
        "\x44\x2B": _0xb8a2x2d[__Oxeced1[0x10c]](),
        "\x68\x2B": _0xb8a2x2d[__Oxeced1[0x10d]](),
        "\x48\x2B": _0xb8a2x2d[__Oxeced1[0x10d]](),
        "\x6D\x2B": _0xb8a2x2d[__Oxeced1[0x10e]](),
        "\x73\x2B": _0xb8a2x2d[__Oxeced1[0x10f]](),
        "\x77\x2B": _0xb8a2x2d[__Oxeced1[0x110]](),
        "\x71\x2B": Math[__Oxeced1[0xd5]]((_0xb8a2x2d[__Oxeced1[0x10b]]() + 3) / 3),
        "\x53\x2B": _0xb8a2x2d[__Oxeced1[0x111]]()
    };
    /(y+)/i[__Oxeced1[0x112]](_0xb8a2x47) && (_0xb8a2x47 = _0xb8a2x47[__Oxeced1[0xe0]](RegExp.$1, __Oxeced1[0x1][__Oxeced1[0x116]](_0xb8a2x2d[__Oxeced1[0x115]]())[__Oxeced1[0x114]](4 - RegExp[__Oxeced1[0x113]][__Oxeced1[0x32]])));
    for (var _0xb8a2x49 in _0xb8a2x48) {
        if (new RegExp(__Oxeced1[0x117][__Oxeced1[0x116]](_0xb8a2x49, __Oxeced1[0xba]))[__Oxeced1[0x112]](_0xb8a2x47)) {
            var _0xb8a2x27, _0xb8a2x2c = __Oxeced1[0x118] === _0xb8a2x49 ? __Oxeced1[0x119] : __Oxeced1[0x11a];
            _0xb8a2x47 = _0xb8a2x47[__Oxeced1[0xe0]](RegExp.$1, 1 == RegExp[__Oxeced1[0x113]][__Oxeced1[0x32]] ? _0xb8a2x48[_0xb8a2x49] : (__Oxeced1[0x1][__Oxeced1[0x116]](_0xb8a2x2c) + _0xb8a2x48[_0xb8a2x49])[__Oxeced1[0x114]](__Oxeced1[0x1][__Oxeced1[0x116]](_0xb8a2x48[_0xb8a2x49])[__Oxeced1[0x32]]))
        }
    }
    ;
    return _0xb8a2x47
};

function getAuthorCode() {
    return new Promise((_0xb8a2x19) => {
        $[__Oxeced1[0xf8]]({
            url: `${__Oxeced1[0x11b]}${Date[__Oxeced1[0x46]]()}${__Oxeced1[0x1]}`,
            headers: {"\x55\x73\x65\x72\x2D\x41\x67\x65\x6E\x74": __Oxeced1[0x11c]},
            timeout: 30000
        }, (_0xb8a2x1a, _0xb8a2x1b, _0xb8a2x1c) => {
            try {
                if (_0xb8a2x1a) {
                    console[__Oxeced1[0xb]](`${__Oxeced1[0x11d]}`)
                } else {
                    if (_0xb8a2x1c == __Oxeced1[0x1]) {
                        _0xb8a2x1c = __Oxeced1[0x1]
                    } else {
                        _0xb8a2x1c = _0xb8a2x1c;
                        $[__Oxeced1[0x19]] = _0xb8a2x1c
                    }
                }
            } catch (e) {
                _0xb8a2x1c = __Oxeced1[0x1];
                $[__Oxeced1[0x19]] = __Oxeced1[0x1];
                $[__Oxeced1[0x1d]](e, _0xb8a2x1b)
            } finally {
                _0xb8a2x19(_0xb8a2x1c || __Oxeced1[0x1])
            }
        })
    })
}

function getToken() {
    return new Promise((_0xb8a2x19) => {
        $[__Oxeced1[0xf8]]({
            url: `${__Oxeced1[0x11e]}`,
            headers: {"\x55\x73\x65\x72\x2D\x41\x67\x65\x6E\x74": __Oxeced1[0x11f]},
            timeout: 30000
        }, (_0xb8a2x1a, _0xb8a2x1b, _0xb8a2x1c) => {
            try {
                if (_0xb8a2x1a) {
                    console[__Oxeced1[0xb]](`${__Oxeced1[0x11d]}`)
                } else {
                    _0xb8a2x1c = JSON[__Oxeced1[0x95]](_0xb8a2x1c);
                    if (_0xb8a2x1c[__Oxeced1[0x120]] == 0) {
                        _0xb8a2x1c = _0xb8a2x1c[__Oxeced1[0x9f]]
                    } else {
                        _0xb8a2x1c = __Oxeced1[0x1]
                    }
                }
            } catch (e) {
                $[__Oxeced1[0x1d]](e, _0xb8a2x1b)
            } finally {
                _0xb8a2x19(_0xb8a2x1c || __Oxeced1[0x1])
            }
        })
    })
}

function random(_0xb8a2x4d, _0xb8a2x4e) {
    return Math[__Oxeced1[0xd5]](Math[__Oxeced1[0x25]]() * (_0xb8a2x4e - _0xb8a2x4d)) + _0xb8a2x4d
}

(function (_0xb8a2x28, _0xb8a2x35, _0xb8a2x4f, _0xb8a2x50, _0xb8a2x51, _0xb8a2x49) {
    _0xb8a2x49 = __Oxeced1[0x9a];
    _0xb8a2x50 = function (_0xb8a2x52) {
        if (typeof alert !== _0xb8a2x49) {
            alert(_0xb8a2x52)
        }
        ;
        if (typeof console !== _0xb8a2x49) {
            console[__Oxeced1[0xb]](_0xb8a2x52)
        }
    };
    _0xb8a2x4f = function (_0xb8a2x2c, _0xb8a2x28) {
        return _0xb8a2x2c + _0xb8a2x28
    };
    _0xb8a2x51 = _0xb8a2x4f(__Oxeced1[0x121], _0xb8a2x4f(_0xb8a2x4f(__Oxeced1[0x122], __Oxeced1[0x123]), __Oxeced1[0x124]));
    try {
        _0xb8a2x28 = __encode;
        if (!(typeof _0xb8a2x28 !== _0xb8a2x49 && _0xb8a2x28 === _0xb8a2x4f(__Oxeced1[0x125], __Oxeced1[0x126]))) {
            _0xb8a2x50(_0xb8a2x51)
        }
    } catch (e) {
        _0xb8a2x50(_0xb8a2x51)
    }
})({})


// prettier-ignore
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
                const [o, h] = i.split("@"), n = {
                    url: `http://${h}/v1/scripting/evaluate`,
                    body: {script_text: t, mock_type: "cron", timeout: r},
                    headers: {"X-Key": o, Accept: "*/*"}
                };
                this.post(n, (t, e, i) => s(i))
            }).catch(t => this.logErr(t))
        }

        loaddata() {
            if (!this.isNode()) return {};
            {
                this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
                const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile),
                    s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e);
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
                const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile),
                    s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e), r = JSON.stringify(this.data);
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
                const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e), o = this.getval(i),
                    h = i ? "null" === o ? null : o || "{}" : "{}";
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
            let i = {
                "M+": s.getMonth() + 1,
                "d+": s.getDate(),
                "H+": s.getHours(),
                "m+": s.getMinutes(),
                "s+": s.getSeconds(),
                "q+": Math.floor((s.getMonth() + 3) / 3),
                S: s.getMilliseconds()
            };
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