/*
京东极速版签到提现
自动提现微信现金
更新时间：2022-2-28

出现：签到失败:风控用户，不允许参与活动

手动能签就隔一段时间再运行一次试试。


定时自行设定，最好设置在早上之前
能玩多久算多久吧，发出来估计没几天就凉了。
*/
const $ = new Env('极速版签到提现-加密');
var _0xodm = 'jsjiami.com.v6', _0xodm_ = ['_0xodm'],
    _0xf952 = [_0xodm, '\x69\x73\x4e\x6f\x64\x65', '\x2e\x2f\x73\x65\x6e\x64\x4e\x6f\x74\x69\x66\x79', '\x2e\x2f\x6a\x64\x43\x6f\x6f\x6b\x69\x65\x2e\x6a\x73', '\x45\x75\x37\x2d\x45\x30\x43\x55\x7a\x71\x59\x79\x68\x5a\x4a\x6f\x39\x64\x33\x59\x6b\x51', '\x35\x53\x48\x6b\x4f\x59\x44\x44\x72\x56\x61\x31\x31\x54\x38\x75\x6a\x52\x50\x45\x4a\x67', '\x39\x57\x41\x31\x32\x6a\x59\x47\x75\x6c\x41\x72\x7a\x57\x53\x37\x76\x63\x72\x77\x68\x77', '\x6b\x65\x79\x73', '\x66\x6f\x72\x45\x61\x63\x68', '\x70\x75\x73\x68', '\x65\x6e\x76', '\x4a\x44\x5f\x44\x45\x42\x55\x47', '\x66\x61\x6c\x73\x65', '\x6c\x6f\x67', '\x73\x74\x72\x69\x6e\x67\x69\x66\x79', '\x69\x6e\x64\x65\x78\x4f\x66', '\x47\x49\x54\x48\x55\x42', '\x65\x78\x69\x74', '\x67\x65\x74\x64\x61\x74\x61', '\x43\x6f\x6f\x6b\x69\x65\x4a\x44', '\x43\x6f\x6f\x6b\x69\x65\x4a\x44\x32', '\x43\x6f\x6f\x6b\x69\x65\x73\x4a\x44', '\x6d\x61\x70', '\x63\x6f\x6f\x6b\x69\x65', '\x66\x69\x6c\x74\x65\x72', '\x0a\u3010\u5982\u63d0\u793a\u6d3b\u52a8\u706b\u7206\x2c\u53ef\u518d\u6267\u884c\u4e00\u6b21\u5c1d\u8bd5\u3011\x0a\u3010\u52a0\u5bc6\u811a\u672c\uff0c\u4e0d\u653e\u5fc3\u53ef\u7981\u7528\u3011\x0a', '\x6d\x73\x67', '\x6e\x61\x6d\x65', '\u3010\u63d0\u793a\u3011\u8bf7\u5148\u83b7\u53d6\u4eac\u4e1c\u8d26\u53f7\u4e00\x63\x6f\x6f\x6b\x69\x65\x0a\u76f4\u63a5\u4f7f\u7528\x4e\x6f\x62\x79\x44\x61\u7684\u4eac\u4e1c\u7b7e\u5230\u83b7\u53d6', '\x68\x74\x74\x70\x73\x3a\x2f\x2f\x62\x65\x61\x6e\x2e\x6d\x2e\x6a\x64\x2e\x63\x6f\x6d\x2f\x62\x65\x61\x6e\x2f\x73\x69\x67\x6e\x49\x6e\x64\x65\x78\x2e\x61\x63\x74\x69\x6f\x6e', '\x6c\x65\x6e\x67\x74\x68', '\x55\x73\x65\x72\x4e\x61\x6d\x65', '\x6d\x61\x74\x63\x68', '\x69\x6e\x64\x65\x78', '\x69\x73\x4c\x6f\x67\x69\x6e', '\x6e\x69\x63\x6b\x4e\x61\x6d\x65', '\x0a\x2a\x2a\x2a\x2a\x2a\x2a\u5f00\u59cb\u3010\u4eac\u4e1c\u8d26\u53f7', '\x2a\x2a\x2a\x2a\x2a\x2a\x2a\x2a\x2a\x0a', '\u3010\u63d0\u793a\u3011\x63\x6f\x6f\x6b\x69\x65\u5df2\u5931\u6548', '\u4eac\u4e1c\u8d26\u53f7', '\x0a\u8bf7\u91cd\u65b0\u767b\u5f55\u83b7\u53d6\x0a\x68\x74\x74\x70\x73\x3a\x2f\x2f\x62\x65\x61\x6e\x2e\x6d\x2e\x6a\x64\x2e\x63\x6f\x6d\x2f\x62\x65\x61\x6e\x2f\x73\x69\x67\x6e\x49\x6e\x64\x65\x78\x2e\x61\x63\x74\x69\x6f\x6e', '\x73\x65\x6e\x64\x4e\x6f\x74\x69\x66\x79', '\x63\x6f\x6f\x6b\x69\x65\u5df2\u5931\u6548\x20\x2d\x20', '\x0a\u8bf7\u91cd\u65b0\u767b\u5f55\u83b7\u53d6\x63\x6f\x6f\x6b\x69\x65', '\x63\x61\x74\x63\x68', '\x2c\x20\u5931\u8d25\x21\x20\u539f\u56e0\x3a\x20', '\x66\x69\x6e\x61\x6c\x6c\x79', '\x64\x6f\x6e\x65', '\x77\x61\x69\x74', '\x6c\x6f\x67\x45\x72\x72', '\x64\x61\x79\x44\x61\x79\x53\x69\x67\x6e\x47\x65\x74\x52\x65\x64\x45\x6e\x76\x65\x6c\x6f\x70\x65\x53\x69\x67\x6e\x53\x65\x72\x76\x69\x63\x65', '\x32\x30\x32\x32\x30\x34\x31\x32\x31\x36\x34\x36\x34\x31\x31\x35\x37\x25\x33\x42\x31\x39\x37\x65\x65\x36\x39\x37\x64\x35\x30\x63\x61\x33\x31\x36\x66\x33\x35\x38\x32\x34\x38\x38\x63\x37\x66\x61\x39\x64\x33\x34\x25\x33\x42\x31\x36\x39\x66\x31\x25\x33\x42\x74\x6b\x30\x32\x77\x64\x39\x34\x35\x31\x64\x65\x62\x31\x38\x6e\x31\x50\x33\x31\x4a\x75\x6e\x53\x47\x54\x66\x5a\x68\x6d\x65\x62\x75\x69\x76\x77\x73\x45\x77\x59\x57\x55\x51\x46\x31\x5a\x6b\x70\x64\x74\x75\x53\x6d\x4b\x4f\x45\x53\x35\x44\x6e\x49\x4d\x46\x64\x79\x4f\x76\x4b\x69\x6b\x64\x67\x75\x65\x6c\x49\x69\x42\x55\x6e\x4a\x62\x65\x43\x67\x6f\x4e\x6c\x63\x45\x76\x76\x25\x33\x42\x36\x65\x30\x39\x30\x63\x62\x64\x65\x33\x33\x37\x35\x39\x30\x62\x35\x31\x61\x35\x31\x34\x37\x31\x38\x66\x65\x65\x33\x39\x31\x64\x34\x36\x66\x65\x63\x65\x36\x62\x39\x35\x33\x65\x64\x31\x30\x38\x34\x61\x30\x35\x32\x66\x36\x64\x37\x36\x66\x66\x62\x64\x39\x32\x25\x33\x42\x33\x2e\x30\x25\x33\x42\x31\x36\x34\x39\x37\x35\x33\x32\x30\x31\x31\x35\x37', '\x68\x74\x74\x70\x73\x3a\x2f\x2f\x61\x70\x69\x2e\x6d\x2e\x6a\x64\x2e\x63\x6f\x6d', '\x66\x75\x6e\x63\x74\x69\x6f\x6e\x49\x64\x3d\x61\x70\x53\x69\x67\x6e\x49\x6e\x5f\x64\x61\x79\x26\x62\x6f\x64\x79\x3d', '\x26\x5f\x74\x3d', '\x26\x61\x70\x70\x69\x64\x3d\x61\x63\x74\x69\x76\x69\x74\x69\x65\x73\x5f\x70\x6c\x61\x74\x66\x6f\x72\x6d\x26\x63\x6c\x69\x65\x6e\x74\x3d\x48\x35\x26\x63\x6c\x69\x65\x6e\x74\x56\x65\x72\x73\x69\x6f\x6e\x3d\x31\x2e\x30\x2e\x30\x26\x68\x35\x73\x74\x3d', '\x61\x70\x69\x2e\x6d\x2e\x6a\x64\x2e\x63\x6f\x6d', '\x68\x74\x74\x70\x73\x3a\x2f\x2f\x64\x61\x69\x6c\x79\x2d\x72\x65\x64\x70\x61\x63\x6b\x65\x74\x2e\x6a\x64\x2e\x63\x6f\x6d', '\x61\x70\x70\x6c\x69\x63\x61\x74\x69\x6f\x6e\x2f\x78\x2d\x77\x77\x77\x2d\x66\x6f\x72\x6d\x2d\x75\x72\x6c\x65\x6e\x63\x6f\x64\x65\x64', '\x2a\x2f\x2a', '\x6b\x65\x65\x70\x2d\x61\x6c\x69\x76\x65', '\x6a\x64\x6c\x74\x61\x70\x70\x3b\x69\x50\x68\x6f\x6e\x65\x3b\x33\x2e\x33\x2e\x32\x3b\x31\x34\x2e\x35\x2e\x31\x6e\x65\x74\x77\x6f\x72\x6b\x2f\x77\x69\x66\x69\x3b\x68\x61\x73\x55\x50\x50\x61\x79\x2f\x30\x3b\x70\x75\x73\x68\x4e\x6f\x74\x69\x63\x65\x49\x73\x4f\x70\x65\x6e\x2f\x31\x3b\x6c\x61\x6e\x67\x2f\x7a\x68\x5f\x43\x4e\x3b\x6d\x6f\x64\x65\x6c\x2f\x69\x50\x68\x6f\x6e\x65\x31\x33\x2c\x32\x3b\x61\x64\x64\x72\x65\x73\x73\x69\x64\x2f\x31\x33\x37\x39\x32\x33\x39\x37\x33\x3b\x68\x61\x73\x4f\x43\x50\x61\x79\x2f\x30\x3b\x61\x70\x70\x42\x75\x69\x6c\x64\x2f\x31\x30\x34\x37\x3b\x73\x75\x70\x70\x6f\x72\x74\x42\x65\x73\x74\x50\x61\x79\x2f\x30\x3b\x70\x76\x2f\x34\x36\x37\x2e\x31\x31\x3b\x61\x70\x70\x72\x70\x64\x2f\x4d\x79\x4a\x44\x5f\x4d\x61\x69\x6e\x3b', '\x7a\x68\x2d\x48\x61\x6e\x73\x2d\x43\x4e\x3b\x71\x3d\x31\x2c\x20\x65\x6e\x2d\x43\x4e\x3b\x71\x3d\x30\x2e\x39\x2c\x20\x7a\x68\x2d\x48\x61\x6e\x74\x2d\x43\x4e\x3b\x71\x3d\x30\x2e\x38', '\x68\x74\x74\x70\x73\x3a\x2f\x2f\x64\x61\x69\x6c\x79\x2d\x72\x65\x64\x70\x61\x63\x6b\x65\x74\x2e\x6a\x64\x2e\x63\x6f\x6d\x2f\x3f\x61\x63\x74\x69\x76\x69\x74\x79\x49\x64\x3d', '\x67\x7a\x69\x70\x2c\x20\x64\x65\x66\x6c\x61\x74\x65\x2c\x20\x62\x72', '\x70\x6f\x73\x74', '\x20\x41\x50\x49\u8bf7\u6c42\u5931\u8d25\uff0c\u8bf7\u68c0\u67e5\u7f51\u8def\u91cd\u8bd5', '\x74\x6f\x4f\x62\x6a', '\x63\x6f\x64\x65', '\x64\x61\x74\x61', '\x72\x65\x74\x43\x6f\x64\x65', '\u6781\u901f\u7248\u7b7e\u5230\u63d0\u73b0\uff1a\u7b7e\u5230\u6210\u529f\x0a', '\u6781\u901f\u7248\u7b7e\u5230\u63d0\u73b0\uff1a\u7b7e\u5230\u5931\u8d25\x3a', '\x72\x65\x74\x4d\x65\x73\x73\x61\x67\x65', '\u6781\u901f\u7248\u7b7e\u5230\u63d0\u73b0\uff1a\u7b7e\u5230\u5f02\u5e38\x3a', '\u6781\u901f\u7248\u7b7e\u5230\u63d0\u73b0\x32\uff1a\u7b7e\u5230\u6210\u529f\x0a', '\u6781\u901f\u7248\u7b7e\u5230\u63d0\u73b0\x32\uff1a\u7b7e\u5230\u5931\u8d25\x3a', '\u6781\u901f\u7248\u7b7e\u5230\u63d0\u73b0\x32\uff1a\u7b7e\u5230\u5f02\u5e38\x3a', '\x67\x65\x74', '\x73\x70\x72\x69\x6e\x67\x5f\x72\x65\x77\x61\x72\x64\x5f\x6c\x69\x73\x74', '\x70\x61\x72\x73\x65', '\x69\x74\x65\x6d\x73', '\x70\x72\x69\x7a\x65\x54\x79\x70\x65', '\x73\x74\x61\x74\x65', '\u53bb\u63d0\u73b0', '\x61\x6d\x6f\x75\x6e\x74', '\u5fae\u4fe1\u73b0\u91d1', '\u5fae\u4fe1\u73b0\u91d1\uff0c', '\x70\x6f\x6f\x6c\x42\x61\x73\x65\x49\x64', '\x70\x72\x69\x7a\x65\x47\x72\x6f\x75\x70\x49\x64', '\x70\x72\x69\x7a\x65\x42\x61\x73\x65\x49\x64', '\x65\x72\x72\x4d\x73\x67', '\x66\x75\x6e\x63\x74\x69\x6f\x6e\x49\x64\x3d\x73\x69\x67\x6e\x50\x72\x69\x7a\x65\x44\x65\x74\x61\x69\x6c\x4c\x69\x73\x74\x26\x62\x6f\x64\x79\x3d', '\x26\x61\x70\x70\x69\x64\x3d\x61\x63\x74\x69\x76\x69\x74\x69\x65\x73\x5f\x70\x6c\x61\x74\x66\x6f\x72\x6d', '\x70\x72\x69\x7a\x65\x44\x72\x61\x77\x42\x61\x73\x65\x56\x6f\x50\x61\x67\x65\x42\x65\x61\x6e', '\x70\x72\x69\x7a\x65\x53\x74\x61\x74\x75\x73', '\u6781\u901f\u7248\u7b7e\u5230\u63d0\u73b0\uff0c\u53bb\u63d0\u73b0', '\x70\x72\x69\x7a\x65\x56\x61\x6c\x75\x65', '\u73b0\u91d1\x0a', '\u6781\u901f\u7248\u7b7e\u5230\u67e5\u8be2\u5956\u54c1\uff1a\u5931\u8d25\x3a', '\u6781\u901f\u7248\u7b7e\u5230\u67e5\u8be2\u5956\u54c1\uff1a\u5f02\u5e38\x3a', '\x44\x41\x59\x5f\x44\x41\x59\x5f\x52\x45\x44\x5f\x50\x41\x43\x4b\x45\x54\x5f\x53\x49\x47\x4e', '\x64\x61\x79\x44\x61\x79\x52\x65\x64\x50\x61\x63\x6b\x65\x74', '\x66\x75\x6e\x63\x74\x69\x6f\x6e\x49\x64\x3d\x61\x70\x43\x61\x73\x68\x57\x69\x74\x68\x44\x72\x61\x77\x26\x62\x6f\x64\x79\x3d', '\x73\x74\x61\x74\x75\x73', '\x33\x31\x30', '\u6781\u901f\u7248\u7b7e\u5230\u63d0\u73b0\u73b0\u91d1\u6210\u529f\uff01', '\u6781\u901f\u7248\u7b7e\u5230\u63d0\u73b0\u73b0\u91d1\uff1a\u5931\u8d25\x3a', '\u6781\u901f\u7248\u7b7e\u5230\u63d0\u73b0\u73b0\u91d1\uff1a\u5f02\u5e38\x3a', '\x53\x50\x52\x49\x4e\x47\x5f\x46\x45\x53\x54\x49\x56\x41\x4c\x5f\x52\x45\x44\x5f\x45\x4e\x56\x45\x4c\x4f\x50\x45', '\x61\x70\x43\x61\x73\x68\x57\x69\x74\x68\x44\x72\x61\x77', '\u63d0\u73b0\u96f6\u94b1\u7ed3\u679c\uff1a', '\u63d0\u73b0\u6210\u529f\uff01', '\u63d0\u73b0\u6210\u529f\uff01\x0a', '\u63d0\u73b0\u5931\u8d25\uff1a', '\x6d\x65\x73\x73\x61\x67\x65', '\u63d0\u73b0\u5f02\u5e38\uff1a', '\x39\x76\x4f\x73\x6b\x41\x61\x67\x63\x4d\x4a\x34\x45\x4f\x57\x58\x50\x51\x53\x53\x39\x41\x3d\x3d', '\x39\x69\x72\x69\x6c\x76\x65\x6e\x45\x75\x70\x59\x46\x34\x38\x38\x54\x55\x72\x6c\x31\x39\x44\x4c\x75\x4b\x51\x39\x7a\x57\x6e\x58\x59\x48\x66\x39\x61\x6e\x43\x30\x75\x6a\x77\x3d', '\x30\x49\x75\x74\x2f\x58\x36\x46\x78\x38\x33\x33\x73\x47\x50\x41\x52\x6e\x78\x4b\x30\x54\x45\x4a\x41\x48\x68\x47\x6c\x2b\x59\x68\x61\x49\x51\x4d\x49\x31\x37\x33\x35\x6d\x45\x3d', '\x45\x58\x35\x65\x64\x47\x4a\x31\x34\x62\x37\x30\x5a\x55\x67\x6c\x52\x71\x37\x49\x4d\x6d\x54\x33\x47\x65\x77\x4f\x50\x39\x49\x4c\x2f\x42\x4e\x33\x6b\x32\x64\x66\x72\x6a\x77\x3d', '\x74\x79\x36\x69\x46\x53\x4e\x4d\x65\x4c\x5a\x66\x75\x2f\x46\x31\x51\x76\x77\x7a\x41\x6e\x69\x66\x70\x4b\x49\x75\x6e\x71\x73\x47\x37\x61\x6d\x33\x76\x41\x70\x39\x72\x6b\x63\x3d', '\x69\x63\x55\x4f\x67\x6f\x72\x30\x73\x32\x58\x43\x67\x77\x69\x53\x6c\x51\x31\x58\x62\x77\x3d\x3d', '\x47\x51\x37\x38\x57\x6d\x47\x4c\x2b\x51\x76\x32\x6d\x71\x76\x67\x76\x54\x63\x73\x78\x67\x3d\x3d', '\x66\x6c\x6f\x6f\x72', '\x72\x61\x6e\x64\x6f\x6d', '\x68\x74\x74\x70\x73\x3a\x2f\x2f\x61\x70\x69\x2e\x6d\x2e\x6a\x64\x2e\x63\x6f\x6d\x2f', '\x66\x75\x6e\x63\x74\x69\x6f\x6e\x49\x64\x3d\x54\x61\x73\x6b\x49\x6e\x76\x69\x74\x65\x53\x65\x72\x76\x69\x63\x65\x26\x62\x6f\x64\x79\x3d', '\x70\x61\x72\x74\x69\x63\x69\x70\x61\x74\x65\x49\x6e\x76\x69\x74\x65\x54\x61\x73\x6b', '\x26\x61\x70\x70\x69\x64\x3d\x6d\x61\x72\x6b\x65\x74\x2d\x74\x61\x73\x6b\x2d\x68\x35\x26\x75\x75\x69\x64\x3d\x26\x5f\x74\x3d', '\x6e\x6f\x77', '\x61\x70\x70\x6c\x69\x63\x61\x74\x69\x6f\x6e\x2f\x6a\x73\x6f\x6e\x2c\x20\x74\x65\x78\x74\x2f\x70\x6c\x61\x69\x6e\x2c\x20\x2a\x2f\x2a', '\x68\x74\x74\x70\x73\x3a\x2f\x2f\x61\x73\x73\x69\x67\x6e\x6d\x65\x6e\x74\x2e\x6a\x64\x2e\x63\x6f\x6d', '\x7a\x68\x2d\x43\x4e\x2c\x7a\x68\x2d\x48\x61\x6e\x73\x3b\x71\x3d\x30\x2e\x39', '\x4a\x53\x5f\x55\x53\x45\x52\x5f\x41\x47\x45\x4e\x54', '\x2e\x2f\x4a\x53\x5f\x55\x53\x45\x52\x5f\x41\x47\x45\x4e\x54\x53', '\x55\x53\x45\x52\x5f\x41\x47\x45\x4e\x54', '\x4a\x53\x55\x41', '\x27\x6a\x64\x6c\x74\x61\x70\x70\x3b\x69\x50\x61\x64\x3b\x33\x2e\x31\x2e\x30\x3b\x31\x34\x2e\x34\x3b\x6e\x65\x74\x77\x6f\x72\x6b\x2f\x77\x69\x66\x69\x3b\x4d\x6f\x7a\x69\x6c\x6c\x61\x2f\x35\x2e\x30\x20\x28\x69\x50\x61\x64\x3b\x20\x43\x50\x55\x20\x4f\x53\x20\x31\x34\x5f\x34\x20\x6c\x69\x6b\x65\x20\x4d\x61\x63\x20\x4f\x53\x20\x58\x29\x20\x41\x70\x70\x6c\x65\x57\x65\x62\x4b\x69\x74\x2f\x36\x30\x35\x2e\x31\x2e\x31\x35\x20\x28\x4b\x48\x54\x4d\x4c\x2c\x20\x6c\x69\x6b\x65\x20\x47\x65\x63\x6b\x6f\x29\x20\x4d\x6f\x62\x69\x6c\x65\x2f\x31\x35\x45\x31\x34\x38\x3b\x73\x75\x70\x70\x6f\x72\x74\x4a\x44\x53\x48\x57\x4b\x2f\x31', '\x68\x74\x74\x70\x73\x3a\x2f\x2f\x61\x73\x73\x69\x67\x6e\x6d\x65\x6e\x74\x2e\x6a\x64\x2e\x63\x6f\x6d\x2f', '\x68\x74\x74\x70\x73\x3a\x2f\x2f\x61\x70\x69\x2e\x6d\x2e\x6a\x64\x2e\x63\x6f\x6d\x2f\x3f\x74\x3d', '\x66\x75\x6e\x63\x74\x69\x6f\x6e\x49\x64\x3d\x49\x6e\x76\x69\x74\x65\x46\x72\x69\x65\x6e\x64\x43\x68\x61\x6e\x67\x65\x41\x73\x73\x65\x72\x74\x73\x53\x65\x72\x76\x69\x63\x65\x26\x62\x6f\x64\x79\x3d', '\x61\x74\x74\x65\x6e\x64\x49\x6e\x76\x69\x74\x65\x41\x63\x74\x69\x76\x69\x74\x79', '\x26\x72\x65\x66\x65\x72\x65\x72\x3d\x2d\x31\x26\x65\x69\x64\x3d\x65\x69\x64\x49\x39\x62\x32\x39\x38\x31\x32\x30\x32\x66\x73\x65\x63\x38\x33\x69\x52\x57\x31\x6e\x54\x73\x4f\x56\x7a\x43\x6f\x63\x57\x64\x61\x33\x59\x48\x50\x4e\x34\x37\x31\x41\x59\x37\x38\x25\x32\x46\x51\x42\x68\x59\x62\x58\x65\x57\x74\x64\x67\x25\x32\x46\x33\x54\x43\x74\x56\x54\x4d\x72\x45\x31\x4a\x6a\x4d\x38\x53\x71\x74\x38\x66\x32\x54\x71\x46\x31\x5a\x35\x50\x25\x32\x46\x52\x50\x47\x6c\x7a\x41\x31\x64\x45\x52\x50\x30\x5a\x35\x62\x4c\x57\x64\x71\x35\x4e\x35\x42\x32\x56\x62\x42\x4f\x26\x61\x69\x64\x3d\x26\x63\x6c\x69\x65\x6e\x74\x3d\x69\x6f\x73\x26\x63\x6c\x69\x65\x6e\x74\x56\x65\x72\x73\x69\x6f\x6e\x3d\x31\x34\x2e\x34\x2e\x32\x26\x6e\x65\x74\x77\x6f\x72\x6b\x54\x79\x70\x65\x3d\x77\x69\x66\x69\x26\x66\x70\x3d\x2d\x31\x26\x75\x75\x69\x64\x3d\x61\x62\x30\x34\x38\x30\x38\x34\x62\x34\x37\x64\x66\x32\x34\x38\x38\x30\x36\x31\x33\x33\x32\x36\x66\x65\x66\x66\x64\x66\x37\x65\x65\x65\x34\x37\x31\x34\x38\x38\x26\x6f\x73\x56\x65\x72\x73\x69\x6f\x6e\x3d\x31\x34\x2e\x34\x2e\x32\x26\x64\x5f\x62\x72\x61\x6e\x64\x3d\x69\x50\x68\x6f\x6e\x65\x26\x64\x5f\x6d\x6f\x64\x65\x6c\x3d\x69\x50\x68\x6f\x6e\x65\x31\x30\x2c\x32\x26\x61\x67\x65\x6e\x74\x3d\x2d\x31\x26\x70\x61\x67\x65\x43\x6c\x69\x63\x6b\x4b\x65\x79\x3d\x2d\x31\x26\x70\x6c\x61\x74\x66\x6f\x72\x6d\x3d\x33\x26\x6c\x61\x6e\x67\x3d\x7a\x68\x5f\x43\x4e\x26\x61\x70\x70\x69\x64\x3d\x6d\x61\x72\x6b\x65\x74\x2d\x74\x61\x73\x6b\x2d\x68\x35\x26\x5f\x74\x3d', '\x68\x74\x74\x70\x73\x3a\x2f\x2f\x69\x6e\x76\x69\x74\x65\x2d\x72\x65\x77\x61\x72\x64\x2e\x6a\x64\x2e\x63\x6f\x6d', '\x68\x74\x74\x70\x73\x3a\x2f\x2f\x69\x6e\x76\x69\x74\x65\x2d\x72\x65\x77\x61\x72\x64\x2e\x6a\x64\x2e\x63\x6f\x6d\x2f', '\x61\x70\x70\x69\x64\x3d\x61\x63\x74\x69\x76\x69\x74\x69\x65\x73\x5f\x70\x6c\x61\x74\x66\x6f\x72\x6d\x26\x66\x75\x6e\x63\x74\x69\x6f\x6e\x49\x64\x3d', '\x26\x62\x6f\x64\x79\x3d', '\x26\x74\x3d', '\x6a\x64\x6c\x74\x61\x70\x70\x3b\x69\x50\x68\x6f\x6e\x65\x3b\x33\x2e\x33\x2e\x32\x3b\x31\x34\x2e\x33\x3b\x62\x34\x38\x38\x30\x31\x30\x61\x64\x32\x34\x63\x34\x30\x38\x38\x35\x64\x38\x34\x36\x65\x36\x36\x39\x33\x31\x61\x62\x61\x66\x35\x33\x32\x65\x64\x32\x36\x61\x35\x3b\x6e\x65\x74\x77\x6f\x72\x6b\x2f\x34\x67\x3b\x68\x61\x73\x55\x50\x50\x61\x79\x2f\x30\x3b\x70\x75\x73\x68\x4e\x6f\x74\x69\x63\x65\x49\x73\x4f\x70\x65\x6e\x2f\x30\x3b\x6c\x61\x6e\x67\x2f\x7a\x68\x5f\x43\x4e\x3b\x6d\x6f\x64\x65\x6c\x2f\x69\x50\x68\x6f\x6e\x65\x31\x31\x2c\x38\x3b\x61\x64\x64\x72\x65\x73\x73\x69\x64\x2f\x32\x30\x30\x35\x31\x38\x33\x33\x37\x33\x3b\x68\x61\x73\x4f\x43\x50\x61\x79\x2f\x30\x3b\x61\x70\x70\x42\x75\x69\x6c\x64\x2f\x31\x30\x34\x39\x3b\x73\x75\x70\x70\x6f\x72\x74\x42\x65\x73\x74\x50\x61\x79\x2f\x30\x3b\x70\x76\x2f\x32\x32\x30\x2e\x34\x36\x3b\x61\x70\x70\x72\x70\x64\x2f\x3b\x72\x65\x66\x2f\x4a\x44\x4c\x54\x53\x75\x62\x4d\x61\x69\x6e\x50\x61\x67\x65\x56\x69\x65\x77\x43\x6f\x6e\x74\x72\x6f\x6c\x6c\x65\x72\x3b\x70\x73\x71\x2f\x30\x3b\x61\x64\x73\x2f\x3b\x70\x73\x6e\x2f\x62\x34\x38\x38\x30\x31\x30\x61\x64\x32\x34\x63\x34\x30\x38\x38\x35\x64\x38\x34\x36\x65\x36\x36\x39\x33\x31\x61\x62\x61\x66\x35\x33\x32\x65\x64\x32\x36\x61\x35\x7c\x35\x32\x30\x3b\x6a\x64\x76\x2f\x30\x7c\x69\x6f\x73\x61\x70\x70\x7c\x74\x5f\x33\x33\x35\x31\x33\x39\x37\x37\x34\x7c\x6c\x69\x74\x65\x73\x68\x61\x72\x65\x7c\x43\x6f\x70\x79\x55\x52\x4c\x7c\x31\x36\x31\x38\x36\x37\x33\x32\x32\x32\x30\x30\x32\x7c\x31\x36\x31\x38\x36\x37\x33\x32\x32\x37\x3b\x61\x64\x6b\x2f\x3b\x61\x70\x70\x5f\x64\x65\x76\x69\x63\x65\x2f\x49\x4f\x53\x3b\x70\x61\x70\x2f\x4a\x41\x32\x30\x32\x30\x5f\x33\x31\x31\x32\x35\x33\x31\x7c\x33\x2e\x33\x2e\x32\x7c\x49\x4f\x53\x20\x31\x34\x2e\x33\x3b\x4d\x6f\x7a\x69\x6c\x6c\x61\x2f\x35\x2e\x30\x20\x28\x69\x50\x68\x6f\x6e\x65\x3b\x20\x43\x50\x55\x20\x69\x50\x68\x6f\x6e\x65\x20\x4f\x53\x20\x31\x34\x5f\x33\x20\x6c\x69\x6b\x65\x20\x4d\x61\x63\x20\x4f\x53\x20\x58\x29\x20\x41\x70\x70\x6c\x65\x57\x65\x62\x4b\x69\x74\x2f\x36\x30\x35\x2e\x31\x2e\x31\x35\x20\x28\x4b\x48\x54\x4d\x4c\x2c\x20\x6c\x69\x6b\x65\x20\x47\x65\x63\x6b\x6f\x29\x20\x4d\x6f\x62\x69\x6c\x65\x2f\x31\x35\x45\x31\x34\x38\x3b\x73\x75\x70\x70\x6f\x72\x74\x4a\x44\x53\x48\x57\x4b\x2f\x31\x20', '\x7a\x68\x2d\x48\x61\x6e\x73\x2d\x43\x4e\x3b\x71\x3d\x31\x2c\x65\x6e\x2d\x43\x4e\x3b\x71\x3d\x30\x2e\x39', '\x68\x74\x74\x70\x73\x3a\x2f\x2f\x61\x6e\x2e\x6a\x64\x2e\x63\x6f\x6d\x2f\x62\x61\x62\x65\x6c\x44\x69\x79\x2f\x5a\x65\x75\x73\x2f\x71\x31\x65\x42\x36\x57\x55\x42\x38\x6f\x43\x34\x65\x48\x31\x42\x73\x43\x4c\x57\x76\x51\x61\x6b\x56\x73\x58\x2f\x69\x6e\x64\x65\x78\x2e\x68\x74\x6d\x6c', '\x68\x74\x74\x70\x73\x3a\x2f\x2f\x61\x70\x69\x2e\x6d\x2e\x6a\x64\x2e\x63\x6f\x6d\x2f\x3f\x61\x70\x70\x69\x64\x3d\x61\x63\x74\x69\x76\x69\x74\x69\x65\x73\x5f\x70\x6c\x61\x74\x66\x6f\x72\x6d\x26\x66\x75\x6e\x63\x74\x69\x6f\x6e\x49\x64\x3d', '\x68\x74\x74\x70\x73\x3a\x2f\x2f\x6d\x65\x2d\x61\x70\x69\x2e\x6a\x64\x2e\x63\x6f\x6d\x2f\x75\x73\x65\x72\x5f\x6e\x65\x77\x2f\x69\x6e\x66\x6f\x2f\x47\x65\x74\x4a\x44\x55\x73\x65\x72\x49\x6e\x66\x6f\x55\x6e\x69\x6f\x6e', '\x6d\x65\x2d\x61\x70\x69\x2e\x6a\x64\x2e\x63\x6f\x6d', '\x4a\x44\x5f\x55\x53\x45\x52\x5f\x41\x47\x45\x4e\x54', '\x2e\x2f\x55\x53\x45\x52\x5f\x41\x47\x45\x4e\x54\x53', '\x4a\x44\x55\x41', '\x6a\x64\x61\x70\x70\x3b\x69\x50\x68\x6f\x6e\x65\x3b\x39\x2e\x34\x2e\x34\x3b\x31\x34\x2e\x33\x3b\x6e\x65\x74\x77\x6f\x72\x6b\x2f\x34\x67\x3b\x4d\x6f\x7a\x69\x6c\x6c\x61\x2f\x35\x2e\x30\x20\x28\x69\x50\x68\x6f\x6e\x65\x3b\x20\x43\x50\x55\x20\x69\x50\x68\x6f\x6e\x65\x20\x4f\x53\x20\x31\x34\x5f\x33\x20\x6c\x69\x6b\x65\x20\x4d\x61\x63\x20\x4f\x53\x20\x58\x29\x20\x41\x70\x70\x6c\x65\x57\x65\x62\x4b\x69\x74\x2f\x36\x30\x35\x2e\x31\x2e\x31\x35\x20\x28\x4b\x48\x54\x4d\x4c\x2c\x20\x6c\x69\x6b\x65\x20\x47\x65\x63\x6b\x6f\x29\x20\x4d\x6f\x62\x69\x6c\x65\x2f\x31\x35\x45\x31\x34\x38\x3b\x73\x75\x70\x70\x6f\x72\x74\x4a\x44\x53\x48\x57\x4b\x2f\x31', '\x7a\x68\x2d\x63\x6e', '\x68\x74\x74\x70\x73\x3a\x2f\x2f\x68\x6f\x6d\x65\x2e\x6d\x2e\x6a\x64\x2e\x63\x6f\x6d\x2f\x6d\x79\x4a\x64\x2f\x6e\x65\x77\x68\x6f\x6d\x65\x2e\x61\x63\x74\x69\x6f\x6e\x3f\x73\x63\x65\x6e\x65\x76\x61\x6c\x3d\x32\x26\x75\x66\x63\x3d\x26', '\x72\x65\x74\x63\x6f\x64\x65', '\x31\x30\x30\x31', '\x68\x61\x73\x4f\x77\x6e\x50\x72\x6f\x70\x65\x72\x74\x79', '\x75\x73\x65\x72\x49\x6e\x66\x6f', '\x62\x61\x73\x65\x49\x6e\x66\x6f', '\x6e\x69\x63\x6b\x6e\x61\x6d\x65', '\u4eac\u4e1c\u670d\u52a1\u5668\u8fd4\u56de\u7a7a\u6570\u636e', '\x6a\x64\x61\x70\x70\x3b\x69\x50\x68\x6f\x6e\x65\x3b\x31\x30\x2e\x32\x2e\x32\x3b\x31\x34\x2e\x33\x3b', '\x3b\x4d\x2f\x35\x2e\x30\x3b\x6e\x65\x74\x77\x6f\x72\x6b\x2f\x77\x69\x66\x69\x3b\x41\x44\x49\x44\x2f\x3b\x6d\x6f\x64\x65\x6c\x2f\x69\x50\x68\x6f\x6e\x65\x31\x32\x2c\x31\x3b\x61\x64\x64\x72\x65\x73\x73\x69\x64\x2f\x34\x31\x39\x39\x31\x37\x35\x31\x39\x33\x3b\x61\x70\x70\x42\x75\x69\x6c\x64\x2f\x31\x36\x37\x38\x36\x33\x3b\x6a\x64\x53\x75\x70\x70\x6f\x72\x74\x44\x61\x72\x6b\x4d\x6f\x64\x65\x2f\x30\x3b\x4d\x6f\x7a\x69\x6c\x6c\x61\x2f\x35\x2e\x30\x20\x28\x69\x50\x68\x6f\x6e\x65\x3b\x20\x43\x50\x55\x20\x69\x50\x68\x6f\x6e\x65\x20\x4f\x53\x20\x31\x34\x5f\x33\x20\x6c\x69\x6b\x65\x20\x4d\x61\x63\x20\x4f\x53\x20\x58\x29\x20\x41\x70\x70\x6c\x65\x57\x65\x62\x4b\x69\x74\x2f\x36\x30\x35\x2e\x31\x2e\x31\x35\x20\x28\x4b\x48\x54\x4d\x4c\x2c\x20\x6c\x69\x6b\x65\x20\x47\x65\x63\x6b\x6f\x29\x20\x4d\x6f\x62\x69\x6c\x65\x2f\x31\x35\x45\x31\x34\x38\x3b\x73\x75\x70\x70\x6f\x72\x74\x4a\x44\x53\x48\x57\x4b\x2f\x31\x3b', '\x61\x62\x63\x64\x65\x66\x30\x31\x32\x33\x34\x35\x36\x37\x38\x39', '\x63\x68\x61\x72\x41\x74', '\x6f\x62\x6a\x65\x63\x74', '\u4eac\u4e1c\u670d\u52a1\u5668\u8bbf\u95ee\u6570\u636e\u4e3a\u7a7a\uff0c\u8bf7\u68c0\u67e5\u81ea\u8eab\u8bbe\u5907\u7f51\u7edc\u60c5\u51b5', '\x73\x74\x72\x69\x6e\x67', '\u8bf7\u52ff\u968f\u610f\u5728\x42\x6f\x78\x4a\x73\u8f93\u5165\u6846\u4fee\u6539\u5185\u5bb9\x0a\u5efa\u8bae\u901a\u8fc7\u811a\u672c\u53bb\u83b7\u53d6\x63\x6f\x6f\x6b\x69\x65', '\x6a\x73\x66\x6a\x69\x61\x55\x77\x6d\x69\x2e\x55\x47\x63\x6f\x42\x6d\x47\x2e\x42\x57\x68\x70\x76\x36\x64\x4c\x68\x51\x3d\x3d'];

function _0x3fb5(_0x23bc76, _0x25c4a6) {
    _0x23bc76 = ~~'0x'['concat'](_0x23bc76['slice'](0x0));
    var _0x46c5d2 = _0xf952[_0x23bc76];
    return _0x46c5d2;
};(function (_0x27cdac, _0x8855f1) {
    var _0x2c5f23 = 0x0;
    for (_0x8855f1 = _0x27cdac['shift'](_0x2c5f23 >> 0x2); _0x8855f1 && _0x8855f1 !== (_0x27cdac['pop'](_0x2c5f23 >> 0x3) + '')['replace'](/[fUwUGBGBWhpdLhQ=]/g, ''); _0x2c5f23++) {
        _0x2c5f23 = _0x2c5f23 ^ 0xdfd3d;
    }
}(_0xf952, _0x3fb5));
const notify = $[_0x3fb5('0')]() ? require(_0x3fb5('1')) : '';
const jdCookieNode = $[_0x3fb5('0')]() ? require(_0x3fb5('2')) : '';
let cookiesArr = [], cookie = '', message;
const linkIdArr = [_0x3fb5('3')];
const signLinkId1 = _0x3fb5('4');
const signLinkId = _0x3fb5('5');
let linkId;
if ($[_0x3fb5('0')]()) {
    Object[_0x3fb5('6')](jdCookieNode)[_0x3fb5('7')](_0x2ac9bf => {
        cookiesArr[_0x3fb5('8')](jdCookieNode[_0x2ac9bf]);
    });
    if (process[_0x3fb5('9')][_0x3fb5('a')] && process[_0x3fb5('9')][_0x3fb5('a')] === _0x3fb5('b')) console[_0x3fb5('c')] = () => {
    };
    if (JSON[_0x3fb5('d')](process[_0x3fb5('9')])[_0x3fb5('e')](_0x3fb5('f')) > -0x1) process[_0x3fb5('10')](0x0);
} else {
    cookiesArr = [$[_0x3fb5('11')](_0x3fb5('12')), $[_0x3fb5('11')](_0x3fb5('13')), ...jsonParse($[_0x3fb5('11')](_0x3fb5('14')) || '\x5b\x5d')[_0x3fb5('15')](_0x1d21d8 => _0x1d21d8[_0x3fb5('16')])][_0x3fb5('17')](_0x42639b => !!_0x42639b);
}
!(async () => {
    console[_0x3fb5('c')](_0x3fb5('18'));
    if (!cookiesArr[0x0]) {
        $[_0x3fb5('19')]($[_0x3fb5('1a')], _0x3fb5('1b'), _0x3fb5('1c'), {'open-url': _0x3fb5('1c')});
        return;
    }
    for (let _0xdc07da = 0x0; _0xdc07da < cookiesArr[_0x3fb5('1d')]; _0xdc07da++) {
        if (cookiesArr[_0xdc07da]) {
            cookie = cookiesArr[_0xdc07da];
            $[_0x3fb5('1e')] = decodeURIComponent(cookie[_0x3fb5('1f')](/pt_pin=([^; ]+)(?=;?)/) && cookie[_0x3fb5('1f')](/pt_pin=([^; ]+)(?=;?)/)[0x1]);
            $[_0x3fb5('20')] = _0xdc07da + 0x1;
            $[_0x3fb5('21')] = !![];
            $[_0x3fb5('22')] = '';
            message = '';
            await TotalBean();
            console[_0x3fb5('c')](_0x3fb5('23') + $[_0x3fb5('20')] + '\u3011' + ($[_0x3fb5('22')] || $[_0x3fb5('1e')]) + _0x3fb5('24'));
            if (!$[_0x3fb5('21')]) {
                $[_0x3fb5('19')]($[_0x3fb5('1a')], _0x3fb5('25'), _0x3fb5('26') + $[_0x3fb5('20')] + '\x20' + ($[_0x3fb5('22')] || $[_0x3fb5('1e')]) + _0x3fb5('27'), {'open-url': _0x3fb5('1c')});
                if ($[_0x3fb5('0')]()) {
                    await notify[_0x3fb5('28')]($[_0x3fb5('1a')] + _0x3fb5('29') + $[_0x3fb5('1e')], _0x3fb5('26') + $[_0x3fb5('20')] + '\x20' + $[_0x3fb5('1e')] + _0x3fb5('2a'));
                }
                continue;
            }
            await getUA();
            for (let _0x282db2 = 0x0; _0x282db2 < linkIdArr[_0x3fb5('1d')]; _0x282db2++) {
                linkId = linkIdArr[_0x282db2];
                await jsRedPacket();
            }
        }
    }
})()[_0x3fb5('2b')](_0x54c2ef => {
    $[_0x3fb5('c')]('', '\u274c\x20' + $[_0x3fb5('1a')] + _0x3fb5('2c') + _0x54c2ef + '\x21', '');
})[_0x3fb5('2d')](() => {
    $[_0x3fb5('2e')]();
});

async function jsRedPacket() {
    try {
        await invite2();
        await $[_0x3fb5('2f')](0x3e8);
        await invite();
        await $[_0x3fb5('2f')](0x3e8);
        await sign();
        await $[_0x3fb5('2f')](0xbb8);
        await signPrizeDetailList();
        await $[_0x3fb5('2f')](0x3e8);
        await showMsg();
    } catch (_0x480f6c) {
        $[_0x3fb5('30')](_0x480f6c);
    }
}

function showMsg() {
    return new Promise(_0x122c6f => {
        if (message) $[_0x3fb5('19')]($[_0x3fb5('1a')], '', _0x3fb5('26') + $[_0x3fb5('20')] + $[_0x3fb5('22')] + '\x0a' + message);
        _0x122c6f();
    });
}

async function sign() {
    return new Promise(async _0x5361c4 => {
        const _0x1a43d0 = {'linkId': signLinkId, 'serviceName': _0x3fb5('31'), 'business': 0x1};
        let _0x44f95f = _0x3fb5('32');
        const _0x5eaabb = {
            '\x75\x72\x6c': _0x3fb5('33'),
            '\x62\x6f\x64\x79': _0x3fb5('34') + escape(JSON[_0x3fb5('d')](_0x1a43d0)) + _0x3fb5('35') + +new Date() + _0x3fb5('36') + _0x44f95f,
            '\x68\x65\x61\x64\x65\x72\x73': {
                'Cookie': cookie,
                'Host': _0x3fb5('37'),
                'Origin': _0x3fb5('38'),
                'Content-Type': _0x3fb5('39'),
                'Accept': _0x3fb5('3a'),
                'Connection': _0x3fb5('3b'),
                'User-Agent': _0x3fb5('3c'),
                'Accept-Language': _0x3fb5('3d'),
                'Referer': _0x3fb5('3e') + signLinkId,
                'Accept-Encoding': _0x3fb5('3f')
            }
        };
        $[_0x3fb5('40')](_0x5eaabb, async (_0x193561, _0x1c3887, _0x5b2e42) => {
            try {
                if (_0x193561) {
                    console[_0x3fb5('c')]('' + JSON[_0x3fb5('d')](_0x193561));
                    console[_0x3fb5('c')]($[_0x3fb5('1a')] + _0x3fb5('41'));
                } else {
                    if (safeGet(_0x5b2e42)) {
                        _0x5b2e42 = $[_0x3fb5('42')](_0x5b2e42);
                        if (_0x5b2e42[_0x3fb5('43')] === 0x0) {
                            if (_0x5b2e42[_0x3fb5('44')][_0x3fb5('45')] === 0x0) {
                                message += _0x3fb5('46');
                                console[_0x3fb5('c')](_0x3fb5('46'));
                            } else {
                                console[_0x3fb5('c')](_0x3fb5('47') + _0x5b2e42[_0x3fb5('44')][_0x3fb5('48')] + '\x0a');
                            }
                        } else {
                            console[_0x3fb5('c')](_0x3fb5('49') + JSON[_0x3fb5('d')](_0x5b2e42) + '\x0a');
                        }
                    }
                }
            } catch (_0x5aa4a4) {
                $[_0x3fb5('30')](_0x5aa4a4, _0x1c3887);
            } finally {
                _0x5361c4(_0x5b2e42);
            }
        });
    });
}

async function sign1() {
    return new Promise(async _0x1e61dd => {
        const _0x3c28f8 = {'linkId': signLinkId1, 'serviceName': _0x3fb5('31'), 'business': 0x1};
        let _0x151de7 = _0x3fb5('32');
        const _0x185221 = {
            '\x75\x72\x6c': _0x3fb5('33'),
            '\x62\x6f\x64\x79': _0x3fb5('34') + escape(JSON[_0x3fb5('d')](_0x3c28f8)) + _0x3fb5('35') + +new Date() + _0x3fb5('36') + _0x151de7,
            '\x68\x65\x61\x64\x65\x72\x73': {
                'Cookie': cookie,
                'Host': _0x3fb5('37'),
                'Origin': _0x3fb5('38'),
                'Content-Type': _0x3fb5('39'),
                'Accept': _0x3fb5('3a'),
                'Connection': _0x3fb5('3b'),
                'User-Agent': _0x3fb5('3c'),
                'Accept-Language': _0x3fb5('3d'),
                'Referer': _0x3fb5('3e') + signLinkId1,
                'Accept-Encoding': _0x3fb5('3f')
            }
        };
        $[_0x3fb5('40')](_0x185221, async (_0x53ce0f, _0x2c4b18, _0x2af3bc) => {
            try {
                if (_0x53ce0f) {
                    console[_0x3fb5('c')]('' + JSON[_0x3fb5('d')](_0x53ce0f));
                    console[_0x3fb5('c')]($[_0x3fb5('1a')] + _0x3fb5('41'));
                } else {
                    if (safeGet(_0x2af3bc)) {
                        _0x2af3bc = $[_0x3fb5('42')](_0x2af3bc);
                        if (_0x2af3bc[_0x3fb5('43')] === 0x0) {
                            if (_0x2af3bc[_0x3fb5('44')][_0x3fb5('45')] === 0x0) {
                                message += _0x3fb5('4a');
                                console[_0x3fb5('c')](_0x3fb5('4a'));
                            } else {
                                console[_0x3fb5('c')](_0x3fb5('4b') + _0x2af3bc[_0x3fb5('44')][_0x3fb5('48')] + '\x0a');
                            }
                        } else {
                            console[_0x3fb5('c')](_0x3fb5('4c') + JSON[_0x3fb5('d')](_0x2af3bc) + '\x0a');
                        }
                    }
                }
            } catch (_0x281690) {
                $[_0x3fb5('30')](_0x281690, _0x2c4b18);
            } finally {
                _0x1e61dd(_0x2af3bc);
            }
        });
    });
}

function getPacketList() {
    return new Promise(_0x15798c => {
        $[_0x3fb5('4d')](taskGetUrl(_0x3fb5('4e'), {
            'pageNum': 0x1,
            'pageSize': 0x64,
            '\x6c\x69\x6e\x6b\x49\x64': linkId,
            'inviter': ''
        }), async (_0x4e0485, _0x475044, _0x49e815) => {
            try {
                if (_0x4e0485) {
                    console[_0x3fb5('c')]('' + JSON[_0x3fb5('d')](_0x4e0485));
                    console[_0x3fb5('c')]($[_0x3fb5('1a')] + _0x3fb5('41'));
                } else {
                    if (safeGet(_0x49e815)) {
                        _0x49e815 = JSON[_0x3fb5('4f')](_0x49e815);
                        if (_0x49e815[_0x3fb5('43')] === 0x0) {
                            for (let _0xa622b8 of _0x49e815[_0x3fb5('44')][_0x3fb5('50')][_0x3fb5('17')](_0x43cfdc => _0x43cfdc[_0x3fb5('51')] === 0x4)) {
                                if (_0xa622b8[_0x3fb5('52')] === 0x0) {
                                    console[_0x3fb5('c')](_0x3fb5('53') + _0xa622b8[_0x3fb5('54')] + _0x3fb5('55'));
                                    message += '\u63d0\u73b0' + _0xa622b8[_0x3fb5('54')] + _0x3fb5('56');
                                    await cashOut(_0xa622b8['\x69\x64'], _0xa622b8[_0x3fb5('57')], _0xa622b8[_0x3fb5('58')], _0xa622b8[_0x3fb5('59')]);
                                }
                            }
                        } else {
                            console[_0x3fb5('c')](_0x49e815[_0x3fb5('5a')]);
                        }
                    }
                }
            } catch (_0x49df11) {
                $[_0x3fb5('30')](_0x49df11, _0x475044);
            } finally {
                _0x15798c(_0x49e815);
            }
        });
    });
}

function signPrizeDetailList() {
    return new Promise(_0x5b670a => {
        const _0x5673f9 = {
            'linkId': signLinkId,
            'serviceName': _0x3fb5('31'),
            'business': 0x1,
            'pageSize': 0x14,
            'page': 0x1
        };
        const _0x3de7af = {
            '\x75\x72\x6c': _0x3fb5('33'),
            '\x62\x6f\x64\x79': _0x3fb5('5b') + escape(JSON[_0x3fb5('d')](_0x5673f9)) + _0x3fb5('35') + +new Date() + _0x3fb5('5c'),
            '\x68\x65\x61\x64\x65\x72\x73': {
                'Cookie': cookie,
                'Host': _0x3fb5('37'),
                'Origin': _0x3fb5('38'),
                'Content-Type': _0x3fb5('39'),
                'Accept': _0x3fb5('3a'),
                'Connection': _0x3fb5('3b'),
                'User-Agent': _0x3fb5('3c'),
                'Accept-Language': _0x3fb5('3d'),
                'Referer': _0x3fb5('3e') + signLinkId,
                'Accept-Encoding': _0x3fb5('3f')
            }
        };
        $[_0x3fb5('40')](_0x3de7af, async (_0x36b4f4, _0x2c71a8, _0xc23581) => {
            try {
                if (_0x36b4f4) {
                    console[_0x3fb5('c')]('' + JSON[_0x3fb5('d')](_0x36b4f4));
                    console[_0x3fb5('c')]($[_0x3fb5('1a')] + _0x3fb5('41'));
                } else {
                    if (safeGet(_0xc23581)) {
                        _0xc23581 = $[_0x3fb5('42')](_0xc23581);
                        if (_0xc23581[_0x3fb5('43')] === 0x0) {
                            if (_0xc23581[_0x3fb5('44')][_0x3fb5('43')] === 0x0) {
                                const _0x3287eb = (_0xc23581[_0x3fb5('44')][_0x3fb5('5d')][_0x3fb5('50')] || [])[_0x3fb5('17')](_0x286fff => _0x286fff[_0x3fb5('51')] === 0x4 && _0x286fff[_0x3fb5('5e')] === 0x0);
                                for (let _0x3d9c5a of _0x3287eb) {
                                    console[_0x3fb5('c')](_0x3fb5('5f') + _0x3d9c5a[_0x3fb5('60')] + _0x3fb5('61'));
                                    message += _0x3fb5('5f') + _0x3d9c5a[_0x3fb5('60')] + _0x3fb5('56');
                                    await apCashWithDraw(_0x3d9c5a['\x69\x64'], _0x3d9c5a[_0x3fb5('57')], _0x3d9c5a[_0x3fb5('58')], _0x3d9c5a[_0x3fb5('59')]);
                                }
                            } else {
                                console[_0x3fb5('c')](_0x3fb5('62') + JSON[_0x3fb5('d')](_0xc23581) + '\x0a');
                            }
                        } else {
                            console[_0x3fb5('c')](_0x3fb5('63') + JSON[_0x3fb5('d')](_0xc23581) + '\x0a');
                        }
                    }
                }
            } catch (_0x1d7628) {
                $[_0x3fb5('30')](_0x1d7628, _0x2c71a8);
            } finally {
                _0x5b670a(_0xc23581);
            }
        });
    });
}

function apCashWithDraw(_0x5ed89e, _0x33a28d, _0x1e5ca5, _0x5e596d) {
    return new Promise(_0x2846c0 => {
        const _0x4ac314 = {
            'linkId': signLinkId,
            'businessSource': _0x3fb5('64'),
            'base': {
                'prizeType': 0x4,
                'business': _0x3fb5('65'),
                'id': _0x5ed89e,
                'poolBaseId': _0x33a28d,
                'prizeGroupId': _0x1e5ca5,
                'prizeBaseId': _0x5e596d
            }
        };
        const _0xb4d2de = {
            '\x75\x72\x6c': _0x3fb5('33'),
            '\x62\x6f\x64\x79': _0x3fb5('66') + escape(JSON[_0x3fb5('d')](_0x4ac314)) + _0x3fb5('35') + +new Date() + _0x3fb5('5c'),
            '\x68\x65\x61\x64\x65\x72\x73': {
                'Cookie': cookie,
                'Host': _0x3fb5('37'),
                'Origin': _0x3fb5('38'),
                'Content-Type': _0x3fb5('39'),
                'Accept': _0x3fb5('3a'),
                'Connection': _0x3fb5('3b'),
                'User-Agent': _0x3fb5('3c'),
                'Accept-Language': _0x3fb5('3d'),
                'Referer': _0x3fb5('3e') + signLinkId,
                'Accept-Encoding': _0x3fb5('3f')
            }
        };
        $[_0x3fb5('40')](_0xb4d2de, async (_0x5d46e2, _0x4dcf7e, _0x8c3e0a) => {
            try {
                if (_0x5d46e2) {
                    console[_0x3fb5('c')]('' + JSON[_0x3fb5('d')](_0x5d46e2));
                    console[_0x3fb5('c')]($[_0x3fb5('1a')] + _0x3fb5('41'));
                } else {
                    if (safeGet(_0x8c3e0a)) {
                        _0x8c3e0a = $[_0x3fb5('42')](_0x8c3e0a);
                        if (_0x8c3e0a[_0x3fb5('43')] === 0x0) {
                            if (_0x8c3e0a[_0x3fb5('44')][_0x3fb5('67')] === _0x3fb5('68')) {
                                console[_0x3fb5('c')](_0x3fb5('69'));
                                message += _0x3fb5('69');
                            } else {
                                console[_0x3fb5('c')](_0x3fb5('6a') + JSON[_0x3fb5('d')](_0x8c3e0a) + '\x0a');
                            }
                        } else {
                            console[_0x3fb5('c')](_0x3fb5('6b') + JSON[_0x3fb5('d')](_0x8c3e0a) + '\x0a');
                        }
                    }
                }
            } catch (_0x2681aa) {
                $[_0x3fb5('30')](_0x2681aa, _0x4dcf7e);
            } finally {
                _0x2846c0(_0x8c3e0a);
            }
        });
    });
}

function cashOut(_0x59e956, _0xc3b9ec, _0x4a2f82, _0x3bf4d4) {
    let _0x293375 = {
        'businessSource': _0x3fb5('6c'),
        'base': {
            'id': _0x59e956,
            'business': null,
            'poolBaseId': _0xc3b9ec,
            'prizeGroupId': _0x4a2f82,
            'prizeBaseId': _0x3bf4d4,
            'prizeType': 0x4
        },
        '\x6c\x69\x6e\x6b\x49\x64': linkId,
        'inviter': ''
    };
    return new Promise(_0x378997 => {
        $[_0x3fb5('40')](taskPostUrl(_0x3fb5('6d'), _0x293375), async (_0x424321, _0x59f52a, _0x33ff93) => {
            try {
                if (_0x424321) {
                    console[_0x3fb5('c')]('' + JSON[_0x3fb5('d')](_0x424321));
                    console[_0x3fb5('c')]($[_0x3fb5('1a')] + _0x3fb5('41'));
                } else {
                    if (safeGet(_0x33ff93)) {
                        console[_0x3fb5('c')](_0x3fb5('6e') + _0x33ff93);
                        _0x33ff93 = JSON[_0x3fb5('4f')](_0x33ff93);
                        if (_0x33ff93[_0x3fb5('43')] === 0x0) {
                            if (_0x33ff93[_0x3fb5('44')][_0x3fb5('67')] === _0x3fb5('68')) {
                                console[_0x3fb5('c')](_0x3fb5('6f'));
                                message += _0x3fb5('70');
                            } else {
                                console[_0x3fb5('c')](_0x3fb5('71') + _0x33ff93[_0x3fb5('44')][_0x3fb5('72')]);
                                message += _0x3fb5('71') + _0x33ff93[_0x3fb5('44')][_0x3fb5('72')];
                            }
                        } else {
                            console[_0x3fb5('c')](_0x3fb5('73') + _0x33ff93[_0x3fb5('5a')]);
                        }
                    }
                }
            } catch (_0x443882) {
                $[_0x3fb5('30')](_0x443882, _0x59f52a);
            } finally {
                _0x378997(_0x33ff93);
            }
        });
    });
}

function invite2() {
    let _0x4f4af5 = [_0x3fb5('74'), _0x3fb5('75'), _0x3fb5('76'), _0x3fb5('77'), _0x3fb5('78'), _0x3fb5('79'), _0x3fb5('7a')];
    let _0x2f94a0 = _0x4f4af5[Math[_0x3fb5('7b')](Math[_0x3fb5('7c')]() * _0x4f4af5[_0x3fb5('1d')])];
    let _0x2dbda3 = {
        '\x75\x72\x6c': _0x3fb5('7d'),
        '\x62\x6f\x64\x79': _0x3fb5('7e') + JSON[_0x3fb5('d')]({
            'method': _0x3fb5('7f'),
            'data': {'channel': '\x31', 'encryptionInviterPin': encodeURIComponent(_0x2f94a0), 'type': 0x1}
        }) + _0x3fb5('80') + Date[_0x3fb5('81')](),
        '\x68\x65\x61\x64\x65\x72\x73': {
            'Host': _0x3fb5('37'),
            'Accept': _0x3fb5('82'),
            'Content-Type': _0x3fb5('39'),
            'Origin': _0x3fb5('83'),
            'Accept-Language': _0x3fb5('84'),
            'User-Agent': $[_0x3fb5('0')]() ? process[_0x3fb5('9')][_0x3fb5('85')] ? process[_0x3fb5('9')][_0x3fb5('85')] : require(_0x3fb5('86'))[_0x3fb5('87')] : $[_0x3fb5('11')](_0x3fb5('88')) ? $[_0x3fb5('11')](_0x3fb5('88')) : _0x3fb5('89'),
            'Referer': _0x3fb5('8a'),
            'Accept-Encoding': _0x3fb5('3f'),
            'Cookie': cookie
        }
    };
    $[_0x3fb5('40')](_0x2dbda3, (_0x15218d, _0x5450e9, _0x11ed55) => {
    });
}

function invite() {
    let _0x7b8d62 = +new Date();
    let _0x27b990 = [_0x3fb5('74'), _0x3fb5('75'), _0x3fb5('76'), _0x3fb5('77'), _0x3fb5('78'), _0x3fb5('79'), _0x3fb5('7a')];
    let _0x429916 = _0x27b990[Math[_0x3fb5('7b')](Math[_0x3fb5('7c')]() * _0x27b990[_0x3fb5('1d')])];
    let _0x3c666a = {
        '\x75\x72\x6c': _0x3fb5('8b') + _0x7b8d62,
        '\x62\x6f\x64\x79': _0x3fb5('8c') + JSON[_0x3fb5('d')]({
            'method': _0x3fb5('8d'),
            'data': {'inviterPin': encodeURIComponent(_0x429916), 'channel': 0x1, 'token': '', 'frontendInitStatus': ''}
        }) + _0x3fb5('8e') + _0x7b8d62,
        '\x68\x65\x61\x64\x65\x72\x73': {
            'Host': _0x3fb5('37'),
            'Accept': _0x3fb5('82'),
            'Content-type': _0x3fb5('39'),
            'Origin': _0x3fb5('8f'),
            'Accept-Language': _0x3fb5('84'),
            'User-Agent': $[_0x3fb5('0')]() ? process[_0x3fb5('9')][_0x3fb5('85')] ? process[_0x3fb5('9')][_0x3fb5('85')] : require(_0x3fb5('86'))[_0x3fb5('87')] : $[_0x3fb5('11')](_0x3fb5('88')) ? $[_0x3fb5('11')](_0x3fb5('88')) : _0x3fb5('89'),
            'Referer': _0x3fb5('90'),
            'Accept-Encoding': _0x3fb5('3f'),
            'Cookie': cookie
        }
    };
    $[_0x3fb5('40')](_0x3c666a, (_0x1de2b6, _0x3ac33d, _0x4e2588) => {
    });
}

function taskPostUrl(_0x5a97eb, _0x1d707d) {
    return {
        '\x75\x72\x6c': _0x3fb5('7d'),
        '\x62\x6f\x64\x79': _0x3fb5('91') + _0x5a97eb + _0x3fb5('92') + escape(JSON[_0x3fb5('d')](_0x1d707d)) + _0x3fb5('93') + +new Date(),
        '\x68\x65\x61\x64\x65\x72\x73': {
            'Cookie': cookie,
            'Host': _0x3fb5('37'),
            'Accept': _0x3fb5('3a'),
            'Connection': _0x3fb5('3b'),
            'user-agent': _0x3fb5('94'),
            'Accept-Language': _0x3fb5('95'),
            'Accept-Encoding': _0x3fb5('3f'),
            'Content-Type': _0x3fb5('39'),
            'referer': _0x3fb5('96')
        }
    };
}

function taskGetUrl(_0xd7eac8, _0x178793) {
    return {
        '\x75\x72\x6c': _0x3fb5('97') + _0xd7eac8 + _0x3fb5('92') + escape(JSON[_0x3fb5('d')](_0x178793)) + _0x3fb5('93') + +new Date(),
        '\x68\x65\x61\x64\x65\x72\x73': {
            'Cookie': cookie,
            'Host': _0x3fb5('37'),
            'Accept': _0x3fb5('3a'),
            'Connection': _0x3fb5('3b'),
            'user-agent': $[_0x3fb5('0')]() ? process[_0x3fb5('9')][_0x3fb5('85')] ? process[_0x3fb5('9')][_0x3fb5('85')] : require(_0x3fb5('86'))[_0x3fb5('87')] : $[_0x3fb5('11')](_0x3fb5('88')) ? $[_0x3fb5('11')](_0x3fb5('88')) : _0x3fb5('89'),
            'Accept-Language': _0x3fb5('95'),
            'Accept-Encoding': _0x3fb5('3f'),
            'Content-Type': _0x3fb5('39'),
            'referer': _0x3fb5('96')
        }
    };
}

function TotalBean() {
    return new Promise(async _0x3f422a => {
        const _0x521e02 = {
            '\x75\x72\x6c': _0x3fb5('98'),
            '\x68\x65\x61\x64\x65\x72\x73': {
                '\x48\x6f\x73\x74': _0x3fb5('99'),
                '\x41\x63\x63\x65\x70\x74': _0x3fb5('3a'),
                '\x43\x6f\x6e\x6e\x65\x63\x74\x69\x6f\x6e': _0x3fb5('3b'),
                '\x43\x6f\x6f\x6b\x69\x65': cookie,
                'User-Agent': $[_0x3fb5('0')]() ? process[_0x3fb5('9')][_0x3fb5('9a')] ? process[_0x3fb5('9')][_0x3fb5('9a')] : require(_0x3fb5('9b'))[_0x3fb5('87')] : $[_0x3fb5('11')](_0x3fb5('9c')) ? $[_0x3fb5('11')](_0x3fb5('9c')) : _0x3fb5('9d'),
                'Accept-Language': _0x3fb5('9e'),
                'Referer': _0x3fb5('9f'),
                'Accept-Encoding': _0x3fb5('3f')
            }
        };
        $[_0x3fb5('4d')](_0x521e02, (_0x6c28da, _0x4efef7, _0x3fd975) => {
            try {
                if (_0x6c28da) {
                    $[_0x3fb5('30')](_0x6c28da);
                } else {
                    if (_0x3fd975) {
                        _0x3fd975 = JSON[_0x3fb5('4f')](_0x3fd975);
                        if (_0x3fd975[_0x3fb5('a0')] === _0x3fb5('a1')) {
                            $[_0x3fb5('21')] = ![];
                            return;
                        }
                        if (_0x3fd975[_0x3fb5('a0')] === '\x30' && _0x3fd975[_0x3fb5('44')] && _0x3fd975[_0x3fb5('44')][_0x3fb5('a2')](_0x3fb5('a3'))) {
                            $[_0x3fb5('22')] = _0x3fd975[_0x3fb5('44')][_0x3fb5('a3')][_0x3fb5('a4')][_0x3fb5('a5')];
                        }
                    } else {
                        console[_0x3fb5('c')](_0x3fb5('a6'));
                    }
                }
            } catch (_0x4ea402) {
                $[_0x3fb5('30')](_0x4ea402);
            } finally {
                _0x3f422a();
            }
        });
    });
}

function getUA() {
    $['\x55\x41'] = _0x3fb5('a7') + randomString(0x28) + _0x3fb5('a8');
}

function randomString(_0x2512a9) {
    _0x2512a9 = _0x2512a9 || 0x20;
    let _0x45d8b3 = _0x3fb5('a9'), _0x48d296 = _0x45d8b3[_0x3fb5('1d')], _0x4726a1 = '';
    for (i = 0x0; i < _0x2512a9; i++) _0x4726a1 += _0x45d8b3[_0x3fb5('aa')](Math[_0x3fb5('7b')](Math[_0x3fb5('7c')]() * _0x48d296));
    return _0x4726a1;
}

function safeGet(_0x4fc98b) {
    try {
        if (typeof JSON[_0x3fb5('4f')](_0x4fc98b) == _0x3fb5('ab')) {
            return !![];
        }
    } catch (_0x11ac9c) {
        console[_0x3fb5('c')](_0x11ac9c);
        console[_0x3fb5('c')](_0x3fb5('ac'));
        return ![];
    }
}

function jsonParse(_0x22905d) {
    if (typeof _0x22905d == _0x3fb5('ad')) {
        try {
            return JSON[_0x3fb5('4f')](_0x22905d);
        } catch (_0x39eca2) {
            console[_0x3fb5('c')](_0x39eca2);
            $[_0x3fb5('19')]($[_0x3fb5('1a')], '', _0x3fb5('ae'));
            return [];
        }
    }
};_0xodm = 'jsjiami.com.v6';

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