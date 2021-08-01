/*
Last Modified time: 2021-06-06 21:22:37
宠汪汪积分兑换奖品脚本, 目前脚本只兑换京豆，兑换京豆成功，才会发出通知提示，其他情况不通知。
活动入口：京东APP我的-更多工具-宠汪汪
兑换规则：一个账号一天只能兑换一次京豆。
兑换奖品成功后才会有系统弹窗通知
每日京豆库存会在0:00、8:00、16:00更新。
脚本兼容: Quantumult X, Surge, Loon, JSBox, Node.js
==============Quantumult X==============
[task_local]
#宠汪汪积分兑换奖品
0 0-16/8 * * * https://gitee.com/lxk0301/jd_scripts/raw/master/jd_joy_reward.js, tag=宠汪汪积分兑换奖品, img-url=https://raw.githubusercontent.com/58xinian/icon/master/jdcww.png, enabled=true

==============Loon==============
[Script]
cron "0 0-16/8 * * *" script-path=https://gitee.com/lxk0301/jd_scripts/raw/master/jd_joy_reward.js,tag=宠汪汪积分兑换奖品

================Surge===============
宠汪汪积分兑换奖品 = type=cron,cronexp="0 0-16/8 * * *",wake-system=1,timeout=3600,script-path=https://gitee.com/lxk0301/jd_scripts/raw/master/jd_joy_reward.js

===============小火箭==========
宠汪汪积分兑换奖品 = type=cron,script-path=https://gitee.com/lxk0301/jd_scripts/raw/master/jd_joy_reward.js, cronexpr="0 0-16/8 * * *", timeout=3600, enable=true
 */
// prettier-ignore
!function (t, r) { "object" == typeof exports ? module.exports = exports = r() : "function" == typeof define && define.amd ? define([], r) : t.CryptoJS = r() }(this, function () {
  var t = t || function (t, r) { var e = Object.create || function () { function t() { } return function (r) { var e; return t.prototype = r, e = new t, t.prototype = null, e } }(), i = {}, n = i.lib = {}, o = n.Base = function () { return { extend: function (t) { var r = e(this); return t && r.mixIn(t), r.hasOwnProperty("init") && this.init !== r.init || (r.init = function () { r.$super.init.apply(this, arguments) }), r.init.prototype = r, r.$super = this, r }, create: function () { var t = this.extend(); return t.init.apply(t, arguments), t }, init: function () { }, mixIn: function (t) { for (var r in t) t.hasOwnProperty(r) && (this[r] = t[r]); t.hasOwnProperty("toString") && (this.toString = t.toString) }, clone: function () { return this.init.prototype.extend(this) } } }(), s = n.WordArray = o.extend({ init: function (t, e) { t = this.words = t || [], e != r ? this.sigBytes = e : this.sigBytes = 4 * t.length }, toString: function (t) { return (t || c).stringify(this) }, concat: function (t) { var r = this.words, e = t.words, i = this.sigBytes, n = t.sigBytes; if (this.clamp(), i % 4) for (var o = 0; o < n; o++) { var s = e[o >>> 2] >>> 24 - o % 4 * 8 & 255; r[i + o >>> 2] |= s << 24 - (i + o) % 4 * 8 } else for (var o = 0; o < n; o += 4)r[i + o >>> 2] = e[o >>> 2]; return this.sigBytes += n, this }, clamp: function () { var r = this.words, e = this.sigBytes; r[e >>> 2] &= 4294967295 << 32 - e % 4 * 8, r.length = t.ceil(e / 4) }, clone: function () { var t = o.clone.call(this); return t.words = this.words.slice(0), t }, random: function (r) { for (var e, i = [], n = function (r) { var r = r, e = 987654321, i = 4294967295; return function () { e = 36969 * (65535 & e) + (e >> 16) & i, r = 18e3 * (65535 & r) + (r >> 16) & i; var n = (e << 16) + r & i; return n /= 4294967296, n += .5, n * (t.random() > .5 ? 1 : -1) } }, o = 0; o < r; o += 4) { var a = n(4294967296 * (e || t.random())); e = 987654071 * a(), i.push(4294967296 * a() | 0) } return new s.init(i, r) } }), a = i.enc = {}, c = a.Hex = { stringify: function (t) { for (var r = t.words, e = t.sigBytes, i = [], n = 0; n < e; n++) { var o = r[n >>> 2] >>> 24 - n % 4 * 8 & 255; i.push((o >>> 4).toString(16)), i.push((15 & o).toString(16)) } return i.join("") }, parse: function (t) { for (var r = t.length, e = [], i = 0; i < r; i += 2)e[i >>> 3] |= parseInt(t.substr(i, 2), 16) << 24 - i % 8 * 4; return new s.init(e, r / 2) } }, h = a.Latin1 = { stringify: function (t) { for (var r = t.words, e = t.sigBytes, i = [], n = 0; n < e; n++) { var o = r[n >>> 2] >>> 24 - n % 4 * 8 & 255; i.push(String.fromCharCode(o)) } return i.join("") }, parse: function (t) { for (var r = t.length, e = [], i = 0; i < r; i++)e[i >>> 2] |= (255 & t.charCodeAt(i)) << 24 - i % 4 * 8; return new s.init(e, r) } }, l = a.Utf8 = { stringify: function (t) { try { return decodeURIComponent(escape(h.stringify(t))) } catch (t) { throw new Error("Malformed UTF-8 data") } }, parse: function (t) { return h.parse(unescape(encodeURIComponent(t))) } }, f = n.BufferedBlockAlgorithm = o.extend({ reset: function () { this._data = new s.init, this._nDataBytes = 0 }, _append: function (t) { "string" == typeof t && (t = l.parse(t)), this._data.concat(t), this._nDataBytes += t.sigBytes }, _process: function (r) { var e = this._data, i = e.words, n = e.sigBytes, o = this.blockSize, a = 4 * o, c = n / a; c = r ? t.ceil(c) : t.max((0 | c) - this._minBufferSize, 0); var h = c * o, l = t.min(4 * h, n); if (h) { for (var f = 0; f < h; f += o)this._doProcessBlock(i, f); var u = i.splice(0, h); e.sigBytes -= l } return new s.init(u, l) }, clone: function () { var t = o.clone.call(this); return t._data = this._data.clone(), t }, _minBufferSize: 0 }), u = (n.Hasher = f.extend({ cfg: o.extend(), init: function (t) { this.cfg = this.cfg.extend(t), this.reset() }, reset: function () { f.reset.call(this), this._doReset() }, update: function (t) { return this._append(t), this._process(), this }, finalize: function (t) { t && this._append(t); var r = this._doFinalize(); return r }, blockSize: 16, _createHelper: function (t) { return function (r, e) { return new t.init(e).finalize(r) } }, _createHmacHelper: function (t) { return function (r, e) { return new u.HMAC.init(t, e).finalize(r) } } }), i.algo = {}); return i }(Math); return function () { function r(t, r, e) { for (var i = [], o = 0, s = 0; s < r; s++)if (s % 4) { var a = e[t.charCodeAt(s - 1)] << s % 4 * 2, c = e[t.charCodeAt(s)] >>> 6 - s % 4 * 2; i[o >>> 2] |= (a | c) << 24 - o % 4 * 8, o++ } return n.create(i, o) } var e = t, i = e.lib, n = i.WordArray, o = e.enc; o.Base64 = { stringify: function (t) { var r = t.words, e = t.sigBytes, i = this._map; t.clamp(); for (var n = [], o = 0; o < e; o += 3)for (var s = r[o >>> 2] >>> 24 - o % 4 * 8 & 255, a = r[o + 1 >>> 2] >>> 24 - (o + 1) % 4 * 8 & 255, c = r[o + 2 >>> 2] >>> 24 - (o + 2) % 4 * 8 & 255, h = s << 16 | a << 8 | c, l = 0; l < 4 && o + .75 * l < e; l++)n.push(i.charAt(h >>> 6 * (3 - l) & 63)); var f = i.charAt(64); if (f) for (; n.length % 4;)n.push(f); return n.join("") }, parse: function (t) { var e = t.length, i = this._map, n = this._reverseMap; if (!n) { n = this._reverseMap = []; for (var o = 0; o < i.length; o++)n[i.charCodeAt(o)] = o } var s = i.charAt(64); if (s) { var a = t.indexOf(s); a !== -1 && (e = a) } return r(t, e, n) }, _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=" } }(), function (r) { function e(t, r, e, i, n, o, s) { var a = t + (r & e | ~r & i) + n + s; return (a << o | a >>> 32 - o) + r } function i(t, r, e, i, n, o, s) { var a = t + (r & i | e & ~i) + n + s; return (a << o | a >>> 32 - o) + r } function n(t, r, e, i, n, o, s) { var a = t + (r ^ e ^ i) + n + s; return (a << o | a >>> 32 - o) + r } function o(t, r, e, i, n, o, s) { var a = t + (e ^ (r | ~i)) + n + s; return (a << o | a >>> 32 - o) + r } var s = t, a = s.lib, c = a.WordArray, h = a.Hasher, l = s.algo, f = []; !function () { for (var t = 0; t < 64; t++)f[t] = 4294967296 * r.abs(r.sin(t + 1)) | 0 }(); var u = l.MD5 = h.extend({ _doReset: function () { this._hash = new c.init([1732584193, 4023233417, 2562383102, 271733878]) }, _doProcessBlock: function (t, r) { for (var s = 0; s < 16; s++) { var a = r + s, c = t[a]; t[a] = 16711935 & (c << 8 | c >>> 24) | 4278255360 & (c << 24 | c >>> 8) } var h = this._hash.words, l = t[r + 0], u = t[r + 1], d = t[r + 2], v = t[r + 3], p = t[r + 4], _ = t[r + 5], y = t[r + 6], g = t[r + 7], B = t[r + 8], w = t[r + 9], k = t[r + 10], S = t[r + 11], m = t[r + 12], x = t[r + 13], b = t[r + 14], H = t[r + 15], z = h[0], A = h[1], C = h[2], D = h[3]; z = e(z, A, C, D, l, 7, f[0]), D = e(D, z, A, C, u, 12, f[1]), C = e(C, D, z, A, d, 17, f[2]), A = e(A, C, D, z, v, 22, f[3]), z = e(z, A, C, D, p, 7, f[4]), D = e(D, z, A, C, _, 12, f[5]), C = e(C, D, z, A, y, 17, f[6]), A = e(A, C, D, z, g, 22, f[7]), z = e(z, A, C, D, B, 7, f[8]), D = e(D, z, A, C, w, 12, f[9]), C = e(C, D, z, A, k, 17, f[10]), A = e(A, C, D, z, S, 22, f[11]), z = e(z, A, C, D, m, 7, f[12]), D = e(D, z, A, C, x, 12, f[13]), C = e(C, D, z, A, b, 17, f[14]), A = e(A, C, D, z, H, 22, f[15]), z = i(z, A, C, D, u, 5, f[16]), D = i(D, z, A, C, y, 9, f[17]), C = i(C, D, z, A, S, 14, f[18]), A = i(A, C, D, z, l, 20, f[19]), z = i(z, A, C, D, _, 5, f[20]), D = i(D, z, A, C, k, 9, f[21]), C = i(C, D, z, A, H, 14, f[22]), A = i(A, C, D, z, p, 20, f[23]), z = i(z, A, C, D, w, 5, f[24]), D = i(D, z, A, C, b, 9, f[25]), C = i(C, D, z, A, v, 14, f[26]), A = i(A, C, D, z, B, 20, f[27]), z = i(z, A, C, D, x, 5, f[28]), D = i(D, z, A, C, d, 9, f[29]), C = i(C, D, z, A, g, 14, f[30]), A = i(A, C, D, z, m, 20, f[31]), z = n(z, A, C, D, _, 4, f[32]), D = n(D, z, A, C, B, 11, f[33]), C = n(C, D, z, A, S, 16, f[34]), A = n(A, C, D, z, b, 23, f[35]), z = n(z, A, C, D, u, 4, f[36]), D = n(D, z, A, C, p, 11, f[37]), C = n(C, D, z, A, g, 16, f[38]), A = n(A, C, D, z, k, 23, f[39]), z = n(z, A, C, D, x, 4, f[40]), D = n(D, z, A, C, l, 11, f[41]), C = n(C, D, z, A, v, 16, f[42]), A = n(A, C, D, z, y, 23, f[43]), z = n(z, A, C, D, w, 4, f[44]), D = n(D, z, A, C, m, 11, f[45]), C = n(C, D, z, A, H, 16, f[46]), A = n(A, C, D, z, d, 23, f[47]), z = o(z, A, C, D, l, 6, f[48]), D = o(D, z, A, C, g, 10, f[49]), C = o(C, D, z, A, b, 15, f[50]), A = o(A, C, D, z, _, 21, f[51]), z = o(z, A, C, D, m, 6, f[52]), D = o(D, z, A, C, v, 10, f[53]), C = o(C, D, z, A, k, 15, f[54]), A = o(A, C, D, z, u, 21, f[55]), z = o(z, A, C, D, B, 6, f[56]), D = o(D, z, A, C, H, 10, f[57]), C = o(C, D, z, A, y, 15, f[58]), A = o(A, C, D, z, x, 21, f[59]), z = o(z, A, C, D, p, 6, f[60]), D = o(D, z, A, C, S, 10, f[61]), C = o(C, D, z, A, d, 15, f[62]), A = o(A, C, D, z, w, 21, f[63]), h[0] = h[0] + z | 0, h[1] = h[1] + A | 0, h[2] = h[2] + C | 0, h[3] = h[3] + D | 0 }, _doFinalize: function () { var t = this._data, e = t.words, i = 8 * this._nDataBytes, n = 8 * t.sigBytes; e[n >>> 5] |= 128 << 24 - n % 32; var o = r.floor(i / 4294967296), s = i; e[(n + 64 >>> 9 << 4) + 15] = 16711935 & (o << 8 | o >>> 24) | 4278255360 & (o << 24 | o >>> 8), e[(n + 64 >>> 9 << 4) + 14] = 16711935 & (s << 8 | s >>> 24) | 4278255360 & (s << 24 | s >>> 8), t.sigBytes = 4 * (e.length + 1), this._process(); for (var a = this._hash, c = a.words, h = 0; h < 4; h++) { var l = c[h]; c[h] = 16711935 & (l << 8 | l >>> 24) | 4278255360 & (l << 24 | l >>> 8) } return a }, clone: function () { var t = h.clone.call(this); return t._hash = this._hash.clone(), t } }); s.MD5 = h._createHelper(u), s.HmacMD5 = h._createHmacHelper(u) }(Math), function () { var r = t, e = r.lib, i = e.WordArray, n = e.Hasher, o = r.algo, s = [], a = o.SHA1 = n.extend({ _doReset: function () { this._hash = new i.init([1732584193, 4023233417, 2562383102, 271733878, 3285377520]) }, _doProcessBlock: function (t, r) { for (var e = this._hash.words, i = e[0], n = e[1], o = e[2], a = e[3], c = e[4], h = 0; h < 80; h++) { if (h < 16) s[h] = 0 | t[r + h]; else { var l = s[h - 3] ^ s[h - 8] ^ s[h - 14] ^ s[h - 16]; s[h] = l << 1 | l >>> 31 } var f = (i << 5 | i >>> 27) + c + s[h]; f += h < 20 ? (n & o | ~n & a) + 1518500249 : h < 40 ? (n ^ o ^ a) + 1859775393 : h < 60 ? (n & o | n & a | o & a) - 1894007588 : (n ^ o ^ a) - 899497514, c = a, a = o, o = n << 30 | n >>> 2, n = i, i = f } e[0] = e[0] + i | 0, e[1] = e[1] + n | 0, e[2] = e[2] + o | 0, e[3] = e[3] + a | 0, e[4] = e[4] + c | 0 }, _doFinalize: function () { var t = this._data, r = t.words, e = 8 * this._nDataBytes, i = 8 * t.sigBytes; return r[i >>> 5] |= 128 << 24 - i % 32, r[(i + 64 >>> 9 << 4) + 14] = Math.floor(e / 4294967296), r[(i + 64 >>> 9 << 4) + 15] = e, t.sigBytes = 4 * r.length, this._process(), this._hash }, clone: function () { var t = n.clone.call(this); return t._hash = this._hash.clone(), t } }); r.SHA1 = n._createHelper(a), r.HmacSHA1 = n._createHmacHelper(a) }(), function (r) { var e = t, i = e.lib, n = i.WordArray, o = i.Hasher, s = e.algo, a = [], c = []; !function () { function t(t) { for (var e = r.sqrt(t), i = 2; i <= e; i++)if (!(t % i)) return !1; return !0 } function e(t) { return 4294967296 * (t - (0 | t)) | 0 } for (var i = 2, n = 0; n < 64;)t(i) && (n < 8 && (a[n] = e(r.pow(i, .5))), c[n] = e(r.pow(i, 1 / 3)), n++), i++ }(); var h = [], l = s.SHA256 = o.extend({ _doReset: function () { this._hash = new n.init(a.slice(0)) }, _doProcessBlock: function (t, r) { for (var e = this._hash.words, i = e[0], n = e[1], o = e[2], s = e[3], a = e[4], l = e[5], f = e[6], u = e[7], d = 0; d < 64; d++) { if (d < 16) h[d] = 0 | t[r + d]; else { var v = h[d - 15], p = (v << 25 | v >>> 7) ^ (v << 14 | v >>> 18) ^ v >>> 3, _ = h[d - 2], y = (_ << 15 | _ >>> 17) ^ (_ << 13 | _ >>> 19) ^ _ >>> 10; h[d] = p + h[d - 7] + y + h[d - 16] } var g = a & l ^ ~a & f, B = i & n ^ i & o ^ n & o, w = (i << 30 | i >>> 2) ^ (i << 19 | i >>> 13) ^ (i << 10 | i >>> 22), k = (a << 26 | a >>> 6) ^ (a << 21 | a >>> 11) ^ (a << 7 | a >>> 25), S = u + k + g + c[d] + h[d], m = w + B; u = f, f = l, l = a, a = s + S | 0, s = o, o = n, n = i, i = S + m | 0 } e[0] = e[0] + i | 0, e[1] = e[1] + n | 0, e[2] = e[2] + o | 0, e[3] = e[3] + s | 0, e[4] = e[4] + a | 0, e[5] = e[5] + l | 0, e[6] = e[6] + f | 0, e[7] = e[7] + u | 0 }, _doFinalize: function () { var t = this._data, e = t.words, i = 8 * this._nDataBytes, n = 8 * t.sigBytes; return e[n >>> 5] |= 128 << 24 - n % 32, e[(n + 64 >>> 9 << 4) + 14] = r.floor(i / 4294967296), e[(n + 64 >>> 9 << 4) + 15] = i, t.sigBytes = 4 * e.length, this._process(), this._hash }, clone: function () { var t = o.clone.call(this); return t._hash = this._hash.clone(), t } }); e.SHA256 = o._createHelper(l), e.HmacSHA256 = o._createHmacHelper(l) }(Math), function () { function r(t) { return t << 8 & 4278255360 | t >>> 8 & 16711935 } var e = t, i = e.lib, n = i.WordArray, o = e.enc; o.Utf16 = o.Utf16BE = { stringify: function (t) { for (var r = t.words, e = t.sigBytes, i = [], n = 0; n < e; n += 2) { var o = r[n >>> 2] >>> 16 - n % 4 * 8 & 65535; i.push(String.fromCharCode(o)) } return i.join("") }, parse: function (t) { for (var r = t.length, e = [], i = 0; i < r; i++)e[i >>> 1] |= t.charCodeAt(i) << 16 - i % 2 * 16; return n.create(e, 2 * r) } }; o.Utf16LE = { stringify: function (t) { for (var e = t.words, i = t.sigBytes, n = [], o = 0; o < i; o += 2) { var s = r(e[o >>> 2] >>> 16 - o % 4 * 8 & 65535); n.push(String.fromCharCode(s)) } return n.join("") }, parse: function (t) { for (var e = t.length, i = [], o = 0; o < e; o++)i[o >>> 1] |= r(t.charCodeAt(o) << 16 - o % 2 * 16); return n.create(i, 2 * e) } } }(), function () { if ("function" == typeof ArrayBuffer) { var r = t, e = r.lib, i = e.WordArray, n = i.init, o = i.init = function (t) { if (t instanceof ArrayBuffer && (t = new Uint8Array(t)), (t instanceof Int8Array || "undefined" != typeof Uint8ClampedArray && t instanceof Uint8ClampedArray || t instanceof Int16Array || t instanceof Uint16Array || t instanceof Int32Array || t instanceof Uint32Array || t instanceof Float32Array || t instanceof Float64Array) && (t = new Uint8Array(t.buffer, t.byteOffset, t.byteLength)), t instanceof Uint8Array) { for (var r = t.byteLength, e = [], i = 0; i < r; i++)e[i >>> 2] |= t[i] << 24 - i % 4 * 8; n.call(this, e, r) } else n.apply(this, arguments) }; o.prototype = i } }(), function (r) { function e(t, r, e) { return t ^ r ^ e } function i(t, r, e) { return t & r | ~t & e } function n(t, r, e) { return (t | ~r) ^ e } function o(t, r, e) { return t & e | r & ~e } function s(t, r, e) { return t ^ (r | ~e) } function a(t, r) { return t << r | t >>> 32 - r } var c = t, h = c.lib, l = h.WordArray, f = h.Hasher, u = c.algo, d = l.create([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13]), v = l.create([5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11]), p = l.create([11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6]), _ = l.create([8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11]), y = l.create([0, 1518500249, 1859775393, 2400959708, 2840853838]), g = l.create([1352829926, 1548603684, 1836072691, 2053994217, 0]), B = u.RIPEMD160 = f.extend({ _doReset: function () { this._hash = l.create([1732584193, 4023233417, 2562383102, 271733878, 3285377520]) }, _doProcessBlock: function (t, r) { for (var c = 0; c < 16; c++) { var h = r + c, l = t[h]; t[h] = 16711935 & (l << 8 | l >>> 24) | 4278255360 & (l << 24 | l >>> 8) } var f, u, B, w, k, S, m, x, b, H, z = this._hash.words, A = y.words, C = g.words, D = d.words, R = v.words, E = p.words, M = _.words; S = f = z[0], m = u = z[1], x = B = z[2], b = w = z[3], H = k = z[4]; for (var F, c = 0; c < 80; c += 1)F = f + t[r + D[c]] | 0, F += c < 16 ? e(u, B, w) + A[0] : c < 32 ? i(u, B, w) + A[1] : c < 48 ? n(u, B, w) + A[2] : c < 64 ? o(u, B, w) + A[3] : s(u, B, w) + A[4], F |= 0, F = a(F, E[c]), F = F + k | 0, f = k, k = w, w = a(B, 10), B = u, u = F, F = S + t[r + R[c]] | 0, F += c < 16 ? s(m, x, b) + C[0] : c < 32 ? o(m, x, b) + C[1] : c < 48 ? n(m, x, b) + C[2] : c < 64 ? i(m, x, b) + C[3] : e(m, x, b) + C[4], F |= 0, F = a(F, M[c]), F = F + H | 0, S = H, H = b, b = a(x, 10), x = m, m = F; F = z[1] + B + b | 0, z[1] = z[2] + w + H | 0, z[2] = z[3] + k + S | 0, z[3] = z[4] + f + m | 0, z[4] = z[0] + u + x | 0, z[0] = F }, _doFinalize: function () { var t = this._data, r = t.words, e = 8 * this._nDataBytes, i = 8 * t.sigBytes; r[i >>> 5] |= 128 << 24 - i % 32, r[(i + 64 >>> 9 << 4) + 14] = 16711935 & (e << 8 | e >>> 24) | 4278255360 & (e << 24 | e >>> 8), t.sigBytes = 4 * (r.length + 1), this._process(); for (var n = this._hash, o = n.words, s = 0; s < 5; s++) { var a = o[s]; o[s] = 16711935 & (a << 8 | a >>> 24) | 4278255360 & (a << 24 | a >>> 8) } return n }, clone: function () { var t = f.clone.call(this); return t._hash = this._hash.clone(), t } }); c.RIPEMD160 = f._createHelper(B), c.HmacRIPEMD160 = f._createHmacHelper(B) }(Math), function () { var r = t, e = r.lib, i = e.Base, n = r.enc, o = n.Utf8, s = r.algo; s.HMAC = i.extend({ init: function (t, r) { t = this._hasher = new t.init, "string" == typeof r && (r = o.parse(r)); var e = t.blockSize, i = 4 * e; r.sigBytes > i && (r = t.finalize(r)), r.clamp(); for (var n = this._oKey = r.clone(), s = this._iKey = r.clone(), a = n.words, c = s.words, h = 0; h < e; h++)a[h] ^= 1549556828, c[h] ^= 909522486; n.sigBytes = s.sigBytes = i, this.reset() }, reset: function () { var t = this._hasher; t.reset(), t.update(this._iKey) }, update: function (t) { return this._hasher.update(t), this }, finalize: function (t) { var r = this._hasher, e = r.finalize(t); r.reset(); var i = r.finalize(this._oKey.clone().concat(e)); return i } }) }(), function () { var r = t, e = r.lib, i = e.Base, n = e.WordArray, o = r.algo, s = o.SHA1, a = o.HMAC, c = o.PBKDF2 = i.extend({ cfg: i.extend({ keySize: 4, hasher: s, iterations: 1 }), init: function (t) { this.cfg = this.cfg.extend(t) }, compute: function (t, r) { for (var e = this.cfg, i = a.create(e.hasher, t), o = n.create(), s = n.create([1]), c = o.words, h = s.words, l = e.keySize, f = e.iterations; c.length < l;) { var u = i.update(r).finalize(s); i.reset(); for (var d = u.words, v = d.length, p = u, _ = 1; _ < f; _++) { p = i.finalize(p), i.reset(); for (var y = p.words, g = 0; g < v; g++)d[g] ^= y[g] } o.concat(u), h[0]++ } return o.sigBytes = 4 * l, o } }); r.PBKDF2 = function (t, r, e) { return c.create(e).compute(t, r) } }(), function () { var r = t, e = r.lib, i = e.Base, n = e.WordArray, o = r.algo, s = o.MD5, a = o.EvpKDF = i.extend({ cfg: i.extend({ keySize: 4, hasher: s, iterations: 1 }), init: function (t) { this.cfg = this.cfg.extend(t) }, compute: function (t, r) { for (var e = this.cfg, i = e.hasher.create(), o = n.create(), s = o.words, a = e.keySize, c = e.iterations; s.length < a;) { h && i.update(h); var h = i.update(t).finalize(r); i.reset(); for (var l = 1; l < c; l++)h = i.finalize(h), i.reset(); o.concat(h) } return o.sigBytes = 4 * a, o } }); r.EvpKDF = function (t, r, e) { return a.create(e).compute(t, r) } }(), function () { var r = t, e = r.lib, i = e.WordArray, n = r.algo, o = n.SHA256, s = n.SHA224 = o.extend({ _doReset: function () { this._hash = new i.init([3238371032, 914150663, 812702999, 4144912697, 4290775857, 1750603025, 1694076839, 3204075428]) }, _doFinalize: function () { var t = o._doFinalize.call(this); return t.sigBytes -= 4, t } }); r.SHA224 = o._createHelper(s), r.HmacSHA224 = o._createHmacHelper(s) }(), function (r) { var e = t, i = e.lib, n = i.Base, o = i.WordArray, s = e.x64 = {}; s.Word = n.extend({ init: function (t, r) { this.high = t, this.low = r } }), s.WordArray = n.extend({ init: function (t, e) { t = this.words = t || [], e != r ? this.sigBytes = e : this.sigBytes = 8 * t.length }, toX32: function () { for (var t = this.words, r = t.length, e = [], i = 0; i < r; i++) { var n = t[i]; e.push(n.high), e.push(n.low) } return o.create(e, this.sigBytes) }, clone: function () { for (var t = n.clone.call(this), r = t.words = this.words.slice(0), e = r.length, i = 0; i < e; i++)r[i] = r[i].clone(); return t } }) }(), function (r) { var e = t, i = e.lib, n = i.WordArray, o = i.Hasher, s = e.x64, a = s.Word, c = e.algo, h = [], l = [], f = []; !function () { for (var t = 1, r = 0, e = 0; e < 24; e++) { h[t + 5 * r] = (e + 1) * (e + 2) / 2 % 64; var i = r % 5, n = (2 * t + 3 * r) % 5; t = i, r = n } for (var t = 0; t < 5; t++)for (var r = 0; r < 5; r++)l[t + 5 * r] = r + (2 * t + 3 * r) % 5 * 5; for (var o = 1, s = 0; s < 24; s++) { for (var c = 0, u = 0, d = 0; d < 7; d++) { if (1 & o) { var v = (1 << d) - 1; v < 32 ? u ^= 1 << v : c ^= 1 << v - 32 } 128 & o ? o = o << 1 ^ 113 : o <<= 1 } f[s] = a.create(c, u) } }(); var u = []; !function () { for (var t = 0; t < 25; t++)u[t] = a.create() }(); var d = c.SHA3 = o.extend({ cfg: o.cfg.extend({ outputLength: 512 }), _doReset: function () { for (var t = this._state = [], r = 0; r < 25; r++)t[r] = new a.init; this.blockSize = (1600 - 2 * this.cfg.outputLength) / 32 }, _doProcessBlock: function (t, r) { for (var e = this._state, i = this.blockSize / 2, n = 0; n < i; n++) { var o = t[r + 2 * n], s = t[r + 2 * n + 1]; o = 16711935 & (o << 8 | o >>> 24) | 4278255360 & (o << 24 | o >>> 8), s = 16711935 & (s << 8 | s >>> 24) | 4278255360 & (s << 24 | s >>> 8); var a = e[n]; a.high ^= s, a.low ^= o } for (var c = 0; c < 24; c++) { for (var d = 0; d < 5; d++) { for (var v = 0, p = 0, _ = 0; _ < 5; _++) { var a = e[d + 5 * _]; v ^= a.high, p ^= a.low } var y = u[d]; y.high = v, y.low = p } for (var d = 0; d < 5; d++)for (var g = u[(d + 4) % 5], B = u[(d + 1) % 5], w = B.high, k = B.low, v = g.high ^ (w << 1 | k >>> 31), p = g.low ^ (k << 1 | w >>> 31), _ = 0; _ < 5; _++) { var a = e[d + 5 * _]; a.high ^= v, a.low ^= p } for (var S = 1; S < 25; S++) { var a = e[S], m = a.high, x = a.low, b = h[S]; if (b < 32) var v = m << b | x >>> 32 - b, p = x << b | m >>> 32 - b; else var v = x << b - 32 | m >>> 64 - b, p = m << b - 32 | x >>> 64 - b; var H = u[l[S]]; H.high = v, H.low = p } var z = u[0], A = e[0]; z.high = A.high, z.low = A.low; for (var d = 0; d < 5; d++)for (var _ = 0; _ < 5; _++) { var S = d + 5 * _, a = e[S], C = u[S], D = u[(d + 1) % 5 + 5 * _], R = u[(d + 2) % 5 + 5 * _]; a.high = C.high ^ ~D.high & R.high, a.low = C.low ^ ~D.low & R.low } var a = e[0], E = f[c]; a.high ^= E.high, a.low ^= E.low } }, _doFinalize: function () { var t = this._data, e = t.words, i = (8 * this._nDataBytes, 8 * t.sigBytes), o = 32 * this.blockSize; e[i >>> 5] |= 1 << 24 - i % 32, e[(r.ceil((i + 1) / o) * o >>> 5) - 1] |= 128, t.sigBytes = 4 * e.length, this._process(); for (var s = this._state, a = this.cfg.outputLength / 8, c = a / 8, h = [], l = 0; l < c; l++) { var f = s[l], u = f.high, d = f.low; u = 16711935 & (u << 8 | u >>> 24) | 4278255360 & (u << 24 | u >>> 8), d = 16711935 & (d << 8 | d >>> 24) | 4278255360 & (d << 24 | d >>> 8), h.push(d), h.push(u) } return new n.init(h, a) }, clone: function () { for (var t = o.clone.call(this), r = t._state = this._state.slice(0), e = 0; e < 25; e++)r[e] = r[e].clone(); return t } }); e.SHA3 = o._createHelper(d), e.HmacSHA3 = o._createHmacHelper(d) }(Math), function () { function r() { return s.create.apply(s, arguments) } var e = t, i = e.lib, n = i.Hasher, o = e.x64, s = o.Word, a = o.WordArray, c = e.algo, h = [r(1116352408, 3609767458), r(1899447441, 602891725), r(3049323471, 3964484399), r(3921009573, 2173295548), r(961987163, 4081628472), r(1508970993, 3053834265), r(2453635748, 2937671579), r(2870763221, 3664609560), r(3624381080, 2734883394), r(310598401, 1164996542), r(607225278, 1323610764), r(1426881987, 3590304994), r(1925078388, 4068182383), r(2162078206, 991336113), r(2614888103, 633803317), r(3248222580, 3479774868), r(3835390401, 2666613458), r(4022224774, 944711139), r(264347078, 2341262773), r(604807628, 2007800933), r(770255983, 1495990901), r(1249150122, 1856431235), r(1555081692, 3175218132), r(1996064986, 2198950837), r(2554220882, 3999719339), r(2821834349, 766784016), r(2952996808, 2566594879), r(3210313671, 3203337956), r(3336571891, 1034457026), r(3584528711, 2466948901), r(113926993, 3758326383), r(338241895, 168717936), r(666307205, 1188179964), r(773529912, 1546045734), r(1294757372, 1522805485), r(1396182291, 2643833823), r(1695183700, 2343527390), r(1986661051, 1014477480), r(2177026350, 1206759142), r(2456956037, 344077627), r(2730485921, 1290863460), r(2820302411, 3158454273), r(3259730800, 3505952657), r(3345764771, 106217008), r(3516065817, 3606008344), r(3600352804, 1432725776), r(4094571909, 1467031594), r(275423344, 851169720), r(430227734, 3100823752), r(506948616, 1363258195), r(659060556, 3750685593), r(883997877, 3785050280), r(958139571, 3318307427), r(1322822218, 3812723403), r(1537002063, 2003034995), r(1747873779, 3602036899), r(1955562222, 1575990012), r(2024104815, 1125592928), r(2227730452, 2716904306), r(2361852424, 442776044), r(2428436474, 593698344), r(2756734187, 3733110249), r(3204031479, 2999351573), r(3329325298, 3815920427), r(3391569614, 3928383900), r(3515267271, 566280711), r(3940187606, 3454069534), r(4118630271, 4000239992), r(116418474, 1914138554), r(174292421, 2731055270), r(289380356, 3203993006), r(460393269, 320620315), r(685471733, 587496836), r(852142971, 1086792851), r(1017036298, 365543100), r(1126000580, 2618297676), r(1288033470, 3409855158), r(1501505948, 4234509866), r(1607167915, 987167468), r(1816402316, 1246189591)], l = []; !function () { for (var t = 0; t < 80; t++)l[t] = r() }(); var f = c.SHA512 = n.extend({ _doReset: function () { this._hash = new a.init([new s.init(1779033703, 4089235720), new s.init(3144134277, 2227873595), new s.init(1013904242, 4271175723), new s.init(2773480762, 1595750129), new s.init(1359893119, 2917565137), new s.init(2600822924, 725511199), new s.init(528734635, 4215389547), new s.init(1541459225, 327033209)]) }, _doProcessBlock: function (t, r) { for (var e = this._hash.words, i = e[0], n = e[1], o = e[2], s = e[3], a = e[4], c = e[5], f = e[6], u = e[7], d = i.high, v = i.low, p = n.high, _ = n.low, y = o.high, g = o.low, B = s.high, w = s.low, k = a.high, S = a.low, m = c.high, x = c.low, b = f.high, H = f.low, z = u.high, A = u.low, C = d, D = v, R = p, E = _, M = y, F = g, P = B, W = w, O = k, U = S, I = m, K = x, X = b, L = H, j = z, N = A, T = 0; T < 80; T++) { var Z = l[T]; if (T < 16) var q = Z.high = 0 | t[r + 2 * T], G = Z.low = 0 | t[r + 2 * T + 1]; else { var J = l[T - 15], $ = J.high, Q = J.low, V = ($ >>> 1 | Q << 31) ^ ($ >>> 8 | Q << 24) ^ $ >>> 7, Y = (Q >>> 1 | $ << 31) ^ (Q >>> 8 | $ << 24) ^ (Q >>> 7 | $ << 25), tt = l[T - 2], rt = tt.high, et = tt.low, it = (rt >>> 19 | et << 13) ^ (rt << 3 | et >>> 29) ^ rt >>> 6, nt = (et >>> 19 | rt << 13) ^ (et << 3 | rt >>> 29) ^ (et >>> 6 | rt << 26), ot = l[T - 7], st = ot.high, at = ot.low, ct = l[T - 16], ht = ct.high, lt = ct.low, G = Y + at, q = V + st + (G >>> 0 < Y >>> 0 ? 1 : 0), G = G + nt, q = q + it + (G >>> 0 < nt >>> 0 ? 1 : 0), G = G + lt, q = q + ht + (G >>> 0 < lt >>> 0 ? 1 : 0); Z.high = q, Z.low = G } var ft = O & I ^ ~O & X, ut = U & K ^ ~U & L, dt = C & R ^ C & M ^ R & M, vt = D & E ^ D & F ^ E & F, pt = (C >>> 28 | D << 4) ^ (C << 30 | D >>> 2) ^ (C << 25 | D >>> 7), _t = (D >>> 28 | C << 4) ^ (D << 30 | C >>> 2) ^ (D << 25 | C >>> 7), yt = (O >>> 14 | U << 18) ^ (O >>> 18 | U << 14) ^ (O << 23 | U >>> 9), gt = (U >>> 14 | O << 18) ^ (U >>> 18 | O << 14) ^ (U << 23 | O >>> 9), Bt = h[T], wt = Bt.high, kt = Bt.low, St = N + gt, mt = j + yt + (St >>> 0 < N >>> 0 ? 1 : 0), St = St + ut, mt = mt + ft + (St >>> 0 < ut >>> 0 ? 1 : 0), St = St + kt, mt = mt + wt + (St >>> 0 < kt >>> 0 ? 1 : 0), St = St + G, mt = mt + q + (St >>> 0 < G >>> 0 ? 1 : 0), xt = _t + vt, bt = pt + dt + (xt >>> 0 < _t >>> 0 ? 1 : 0); j = X, N = L, X = I, L = K, I = O, K = U, U = W + St | 0, O = P + mt + (U >>> 0 < W >>> 0 ? 1 : 0) | 0, P = M, W = F, M = R, F = E, R = C, E = D, D = St + xt | 0, C = mt + bt + (D >>> 0 < St >>> 0 ? 1 : 0) | 0 } v = i.low = v + D, i.high = d + C + (v >>> 0 < D >>> 0 ? 1 : 0), _ = n.low = _ + E, n.high = p + R + (_ >>> 0 < E >>> 0 ? 1 : 0), g = o.low = g + F, o.high = y + M + (g >>> 0 < F >>> 0 ? 1 : 0), w = s.low = w + W, s.high = B + P + (w >>> 0 < W >>> 0 ? 1 : 0), S = a.low = S + U, a.high = k + O + (S >>> 0 < U >>> 0 ? 1 : 0), x = c.low = x + K, c.high = m + I + (x >>> 0 < K >>> 0 ? 1 : 0), H = f.low = H + L, f.high = b + X + (H >>> 0 < L >>> 0 ? 1 : 0), A = u.low = A + N, u.high = z + j + (A >>> 0 < N >>> 0 ? 1 : 0) }, _doFinalize: function () { var t = this._data, r = t.words, e = 8 * this._nDataBytes, i = 8 * t.sigBytes; r[i >>> 5] |= 128 << 24 - i % 32, r[(i + 128 >>> 10 << 5) + 30] = Math.floor(e / 4294967296), r[(i + 128 >>> 10 << 5) + 31] = e, t.sigBytes = 4 * r.length, this._process(); var n = this._hash.toX32(); return n }, clone: function () { var t = n.clone.call(this); return t._hash = this._hash.clone(), t }, blockSize: 32 }); e.SHA512 = n._createHelper(f), e.HmacSHA512 = n._createHmacHelper(f) }(), function () { var r = t, e = r.x64, i = e.Word, n = e.WordArray, o = r.algo, s = o.SHA512, a = o.SHA384 = s.extend({ _doReset: function () { this._hash = new n.init([new i.init(3418070365, 3238371032), new i.init(1654270250, 914150663), new i.init(2438529370, 812702999), new i.init(355462360, 4144912697), new i.init(1731405415, 4290775857), new i.init(2394180231, 1750603025), new i.init(3675008525, 1694076839), new i.init(1203062813, 3204075428)]) }, _doFinalize: function () { var t = s._doFinalize.call(this); return t.sigBytes -= 16, t } }); r.SHA384 = s._createHelper(a), r.HmacSHA384 = s._createHmacHelper(a) }(), t.lib.Cipher || function (r) { var e = t, i = e.lib, n = i.Base, o = i.WordArray, s = i.BufferedBlockAlgorithm, a = e.enc, c = (a.Utf8, a.Base64), h = e.algo, l = h.EvpKDF, f = i.Cipher = s.extend({ cfg: n.extend(), createEncryptor: function (t, r) { return this.create(this._ENC_XFORM_MODE, t, r) }, createDecryptor: function (t, r) { return this.create(this._DEC_XFORM_MODE, t, r) }, init: function (t, r, e) { this.cfg = this.cfg.extend(e), this._xformMode = t, this._key = r, this.reset() }, reset: function () { s.reset.call(this), this._doReset() }, process: function (t) { return this._append(t), this._process() }, finalize: function (t) { t && this._append(t); var r = this._doFinalize(); return r }, keySize: 4, ivSize: 4, _ENC_XFORM_MODE: 1, _DEC_XFORM_MODE: 2, _createHelper: function () { function t(t) { return "string" == typeof t ? m : w } return function (r) { return { encrypt: function (e, i, n) { return t(i).encrypt(r, e, i, n) }, decrypt: function (e, i, n) { return t(i).decrypt(r, e, i, n) } } } }() }), u = (i.StreamCipher = f.extend({ _doFinalize: function () { var t = this._process(!0); return t }, blockSize: 1 }), e.mode = {}), d = i.BlockCipherMode = n.extend({ createEncryptor: function (t, r) { return this.Encryptor.create(t, r) }, createDecryptor: function (t, r) { return this.Decryptor.create(t, r) }, init: function (t, r) { this._cipher = t, this._iv = r } }), v = u.CBC = function () { function t(t, e, i) { var n = this._iv; if (n) { var o = n; this._iv = r } else var o = this._prevBlock; for (var s = 0; s < i; s++)t[e + s] ^= o[s] } var e = d.extend(); return e.Encryptor = e.extend({ processBlock: function (r, e) { var i = this._cipher, n = i.blockSize; t.call(this, r, e, n), i.encryptBlock(r, e), this._prevBlock = r.slice(e, e + n) } }), e.Decryptor = e.extend({ processBlock: function (r, e) { var i = this._cipher, n = i.blockSize, o = r.slice(e, e + n); i.decryptBlock(r, e), t.call(this, r, e, n), this._prevBlock = o } }), e }(), p = e.pad = {}, _ = p.Pkcs7 = { pad: function (t, r) { for (var e = 4 * r, i = e - t.sigBytes % e, n = i << 24 | i << 16 | i << 8 | i, s = [], a = 0; a < i; a += 4)s.push(n); var c = o.create(s, i); t.concat(c) }, unpad: function (t) { var r = 255 & t.words[t.sigBytes - 1 >>> 2]; t.sigBytes -= r } }, y = (i.BlockCipher = f.extend({ cfg: f.cfg.extend({ mode: v, padding: _ }), reset: function () { f.reset.call(this); var t = this.cfg, r = t.iv, e = t.mode; if (this._xformMode == this._ENC_XFORM_MODE) var i = e.createEncryptor; else { var i = e.createDecryptor; this._minBufferSize = 1 } this._mode && this._mode.__creator == i ? this._mode.init(this, r && r.words) : (this._mode = i.call(e, this, r && r.words), this._mode.__creator = i) }, _doProcessBlock: function (t, r) { this._mode.processBlock(t, r) }, _doFinalize: function () { var t = this.cfg.padding; if (this._xformMode == this._ENC_XFORM_MODE) { t.pad(this._data, this.blockSize); var r = this._process(!0) } else { var r = this._process(!0); t.unpad(r) } return r }, blockSize: 4 }), i.CipherParams = n.extend({ init: function (t) { this.mixIn(t) }, toString: function (t) { return (t || this.formatter).stringify(this) } })), g = e.format = {}, B = g.OpenSSL = { stringify: function (t) { var r = t.ciphertext, e = t.salt; if (e) var i = o.create([1398893684, 1701076831]).concat(e).concat(r); else var i = r; return i.toString(c) }, parse: function (t) { var r = c.parse(t), e = r.words; if (1398893684 == e[0] && 1701076831 == e[1]) { var i = o.create(e.slice(2, 4)); e.splice(0, 4), r.sigBytes -= 16 } return y.create({ ciphertext: r, salt: i }) } }, w = i.SerializableCipher = n.extend({ cfg: n.extend({ format: B }), encrypt: function (t, r, e, i) { i = this.cfg.extend(i); var n = t.createEncryptor(e, i), o = n.finalize(r), s = n.cfg; return y.create({ ciphertext: o, key: e, iv: s.iv, algorithm: t, mode: s.mode, padding: s.padding, blockSize: t.blockSize, formatter: i.format }) }, decrypt: function (t, r, e, i) { i = this.cfg.extend(i), r = this._parse(r, i.format); var n = t.createDecryptor(e, i).finalize(r.ciphertext); return n }, _parse: function (t, r) { return "string" == typeof t ? r.parse(t, this) : t } }), k = e.kdf = {}, S = k.OpenSSL = { execute: function (t, r, e, i) { i || (i = o.random(8)); var n = l.create({ keySize: r + e }).compute(t, i), s = o.create(n.words.slice(r), 4 * e); return n.sigBytes = 4 * r, y.create({ key: n, iv: s, salt: i }) } }, m = i.PasswordBasedCipher = w.extend({ cfg: w.cfg.extend({ kdf: S }), encrypt: function (t, r, e, i) { i = this.cfg.extend(i); var n = i.kdf.execute(e, t.keySize, t.ivSize); i.iv = n.iv; var o = w.encrypt.call(this, t, r, n.key, i); return o.mixIn(n), o }, decrypt: function (t, r, e, i) { i = this.cfg.extend(i), r = this._parse(r, i.format); var n = i.kdf.execute(e, t.keySize, t.ivSize, r.salt); i.iv = n.iv; var o = w.decrypt.call(this, t, r, n.key, i); return o } }) }(), t.mode.CFB = function () { function r(t, r, e, i) { var n = this._iv; if (n) { var o = n.slice(0); this._iv = void 0 } else var o = this._prevBlock; i.encryptBlock(o, 0); for (var s = 0; s < e; s++)t[r + s] ^= o[s] } var e = t.lib.BlockCipherMode.extend(); return e.Encryptor = e.extend({ processBlock: function (t, e) { var i = this._cipher, n = i.blockSize; r.call(this, t, e, n, i), this._prevBlock = t.slice(e, e + n) } }), e.Decryptor = e.extend({ processBlock: function (t, e) { var i = this._cipher, n = i.blockSize, o = t.slice(e, e + n); r.call(this, t, e, n, i), this._prevBlock = o } }), e }(), t.mode.ECB = function () { var r = t.lib.BlockCipherMode.extend(); return r.Encryptor = r.extend({ processBlock: function (t, r) { this._cipher.encryptBlock(t, r) } }), r.Decryptor = r.extend({ processBlock: function (t, r) { this._cipher.decryptBlock(t, r) } }), r }(), t.pad.AnsiX923 = { pad: function (t, r) { var e = t.sigBytes, i = 4 * r, n = i - e % i, o = e + n - 1; t.clamp(), t.words[o >>> 2] |= n << 24 - o % 4 * 8, t.sigBytes += n }, unpad: function (t) { var r = 255 & t.words[t.sigBytes - 1 >>> 2]; t.sigBytes -= r } }, t.pad.Iso10126 = { pad: function (r, e) { var i = 4 * e, n = i - r.sigBytes % i; r.concat(t.lib.WordArray.random(n - 1)).concat(t.lib.WordArray.create([n << 24], 1)) }, unpad: function (t) { var r = 255 & t.words[t.sigBytes - 1 >>> 2]; t.sigBytes -= r } }, t.pad.Iso97971 = { pad: function (r, e) { r.concat(t.lib.WordArray.create([2147483648], 1)), t.pad.ZeroPadding.pad(r, e) }, unpad: function (r) { t.pad.ZeroPadding.unpad(r), r.sigBytes-- } }, t.mode.OFB = function () { var r = t.lib.BlockCipherMode.extend(), e = r.Encryptor = r.extend({ processBlock: function (t, r) { var e = this._cipher, i = e.blockSize, n = this._iv, o = this._keystream; n && (o = this._keystream = n.slice(0), this._iv = void 0), e.encryptBlock(o, 0); for (var s = 0; s < i; s++)t[r + s] ^= o[s] } }); return r.Decryptor = e, r }(), t.pad.NoPadding = { pad: function () { }, unpad: function () { } }, function (r) { var e = t, i = e.lib, n = i.CipherParams, o = e.enc, s = o.Hex, a = e.format; a.Hex = { stringify: function (t) { return t.ciphertext.toString(s) }, parse: function (t) { var r = s.parse(t); return n.create({ ciphertext: r }) } } }(), function () { var r = t, e = r.lib, i = e.BlockCipher, n = r.algo, o = [], s = [], a = [], c = [], h = [], l = [], f = [], u = [], d = [], v = []; !function () { for (var t = [], r = 0; r < 256; r++)r < 128 ? t[r] = r << 1 : t[r] = r << 1 ^ 283; for (var e = 0, i = 0, r = 0; r < 256; r++) { var n = i ^ i << 1 ^ i << 2 ^ i << 3 ^ i << 4; n = n >>> 8 ^ 255 & n ^ 99, o[e] = n, s[n] = e; var p = t[e], _ = t[p], y = t[_], g = 257 * t[n] ^ 16843008 * n; a[e] = g << 24 | g >>> 8, c[e] = g << 16 | g >>> 16, h[e] = g << 8 | g >>> 24, l[e] = g; var g = 16843009 * y ^ 65537 * _ ^ 257 * p ^ 16843008 * e; f[n] = g << 24 | g >>> 8, u[n] = g << 16 | g >>> 16, d[n] = g << 8 | g >>> 24, v[n] = g, e ? (e = p ^ t[t[t[y ^ p]]], i ^= t[t[i]]) : e = i = 1 } }(); var p = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54], _ = n.AES = i.extend({ _doReset: function () { if (!this._nRounds || this._keyPriorReset !== this._key) { for (var t = this._keyPriorReset = this._key, r = t.words, e = t.sigBytes / 4, i = this._nRounds = e + 6, n = 4 * (i + 1), s = this._keySchedule = [], a = 0; a < n; a++)if (a < e) s[a] = r[a]; else { var c = s[a - 1]; a % e ? e > 6 && a % e == 4 && (c = o[c >>> 24] << 24 | o[c >>> 16 & 255] << 16 | o[c >>> 8 & 255] << 8 | o[255 & c]) : (c = c << 8 | c >>> 24, c = o[c >>> 24] << 24 | o[c >>> 16 & 255] << 16 | o[c >>> 8 & 255] << 8 | o[255 & c], c ^= p[a / e | 0] << 24), s[a] = s[a - e] ^ c } for (var h = this._invKeySchedule = [], l = 0; l < n; l++) { var a = n - l; if (l % 4) var c = s[a]; else var c = s[a - 4]; l < 4 || a <= 4 ? h[l] = c : h[l] = f[o[c >>> 24]] ^ u[o[c >>> 16 & 255]] ^ d[o[c >>> 8 & 255]] ^ v[o[255 & c]] } } }, encryptBlock: function (t, r) { this._doCryptBlock(t, r, this._keySchedule, a, c, h, l, o) }, decryptBlock: function (t, r) { var e = t[r + 1]; t[r + 1] = t[r + 3], t[r + 3] = e, this._doCryptBlock(t, r, this._invKeySchedule, f, u, d, v, s); var e = t[r + 1]; t[r + 1] = t[r + 3], t[r + 3] = e }, _doCryptBlock: function (t, r, e, i, n, o, s, a) { for (var c = this._nRounds, h = t[r] ^ e[0], l = t[r + 1] ^ e[1], f = t[r + 2] ^ e[2], u = t[r + 3] ^ e[3], d = 4, v = 1; v < c; v++) { var p = i[h >>> 24] ^ n[l >>> 16 & 255] ^ o[f >>> 8 & 255] ^ s[255 & u] ^ e[d++], _ = i[l >>> 24] ^ n[f >>> 16 & 255] ^ o[u >>> 8 & 255] ^ s[255 & h] ^ e[d++], y = i[f >>> 24] ^ n[u >>> 16 & 255] ^ o[h >>> 8 & 255] ^ s[255 & l] ^ e[d++], g = i[u >>> 24] ^ n[h >>> 16 & 255] ^ o[l >>> 8 & 255] ^ s[255 & f] ^ e[d++]; h = p, l = _, f = y, u = g } var p = (a[h >>> 24] << 24 | a[l >>> 16 & 255] << 16 | a[f >>> 8 & 255] << 8 | a[255 & u]) ^ e[d++], _ = (a[l >>> 24] << 24 | a[f >>> 16 & 255] << 16 | a[u >>> 8 & 255] << 8 | a[255 & h]) ^ e[d++], y = (a[f >>> 24] << 24 | a[u >>> 16 & 255] << 16 | a[h >>> 8 & 255] << 8 | a[255 & l]) ^ e[d++], g = (a[u >>> 24] << 24 | a[h >>> 16 & 255] << 16 | a[l >>> 8 & 255] << 8 | a[255 & f]) ^ e[d++]; t[r] = p, t[r + 1] = _, t[r + 2] = y, t[r + 3] = g }, keySize: 8 }); r.AES = i._createHelper(_) }(), function () {
    function r(t, r) { var e = (this._lBlock >>> t ^ this._rBlock) & r; this._rBlock ^= e, this._lBlock ^= e << t } function e(t, r) {
      var e = (this._rBlock >>> t ^ this._lBlock) & r; this._lBlock ^= e, this._rBlock ^= e << t;
    } var i = t, n = i.lib, o = n.WordArray, s = n.BlockCipher, a = i.algo, c = [57, 49, 41, 33, 25, 17, 9, 1, 58, 50, 42, 34, 26, 18, 10, 2, 59, 51, 43, 35, 27, 19, 11, 3, 60, 52, 44, 36, 63, 55, 47, 39, 31, 23, 15, 7, 62, 54, 46, 38, 30, 22, 14, 6, 61, 53, 45, 37, 29, 21, 13, 5, 28, 20, 12, 4], h = [14, 17, 11, 24, 1, 5, 3, 28, 15, 6, 21, 10, 23, 19, 12, 4, 26, 8, 16, 7, 27, 20, 13, 2, 41, 52, 31, 37, 47, 55, 30, 40, 51, 45, 33, 48, 44, 49, 39, 56, 34, 53, 46, 42, 50, 36, 29, 32], l = [1, 2, 4, 6, 8, 10, 12, 14, 15, 17, 19, 21, 23, 25, 27, 28], f = [{ 0: 8421888, 268435456: 32768, 536870912: 8421378, 805306368: 2, 1073741824: 512, 1342177280: 8421890, 1610612736: 8389122, 1879048192: 8388608, 2147483648: 514, 2415919104: 8389120, 2684354560: 33280, 2952790016: 8421376, 3221225472: 32770, 3489660928: 8388610, 3758096384: 0, 4026531840: 33282, 134217728: 0, 402653184: 8421890, 671088640: 33282, 939524096: 32768, 1207959552: 8421888, 1476395008: 512, 1744830464: 8421378, 2013265920: 2, 2281701376: 8389120, 2550136832: 33280, 2818572288: 8421376, 3087007744: 8389122, 3355443200: 8388610, 3623878656: 32770, 3892314112: 514, 4160749568: 8388608, 1: 32768, 268435457: 2, 536870913: 8421888, 805306369: 8388608, 1073741825: 8421378, 1342177281: 33280, 1610612737: 512, 1879048193: 8389122, 2147483649: 8421890, 2415919105: 8421376, 2684354561: 8388610, 2952790017: 33282, 3221225473: 514, 3489660929: 8389120, 3758096385: 32770, 4026531841: 0, 134217729: 8421890, 402653185: 8421376, 671088641: 8388608, 939524097: 512, 1207959553: 32768, 1476395009: 8388610, 1744830465: 2, 2013265921: 33282, 2281701377: 32770, 2550136833: 8389122, 2818572289: 514, 3087007745: 8421888, 3355443201: 8389120, 3623878657: 0, 3892314113: 33280, 4160749569: 8421378 }, { 0: 1074282512, 16777216: 16384, 33554432: 524288, 50331648: 1074266128, 67108864: 1073741840, 83886080: 1074282496, 100663296: 1073758208, 117440512: 16, 134217728: 540672, 150994944: 1073758224, 167772160: 1073741824, 184549376: 540688, 201326592: 524304, 218103808: 0, 234881024: 16400, 251658240: 1074266112, 8388608: 1073758208, 25165824: 540688, 41943040: 16, 58720256: 1073758224, 75497472: 1074282512, 92274688: 1073741824, 109051904: 524288, 125829120: 1074266128, 142606336: 524304, 159383552: 0, 176160768: 16384, 192937984: 1074266112, 209715200: 1073741840, 226492416: 540672, 243269632: 1074282496, 260046848: 16400, 268435456: 0, 285212672: 1074266128, 301989888: 1073758224, 318767104: 1074282496, 335544320: 1074266112, 352321536: 16, 369098752: 540688, 385875968: 16384, 402653184: 16400, 419430400: 524288, 436207616: 524304, 452984832: 1073741840, 469762048: 540672, 486539264: 1073758208, 503316480: 1073741824, 520093696: 1074282512, 276824064: 540688, 293601280: 524288, 310378496: 1074266112, 327155712: 16384, 343932928: 1073758208, 360710144: 1074282512, 377487360: 16, 394264576: 1073741824, 411041792: 1074282496, 427819008: 1073741840, 444596224: 1073758224, 461373440: 524304, 478150656: 0, 494927872: 16400, 511705088: 1074266128, 528482304: 540672 }, { 0: 260, 1048576: 0, 2097152: 67109120, 3145728: 65796, 4194304: 65540, 5242880: 67108868, 6291456: 67174660, 7340032: 67174400, 8388608: 67108864, 9437184: 67174656, 10485760: 65792, 11534336: 67174404, 12582912: 67109124, 13631488: 65536, 14680064: 4, 15728640: 256, 524288: 67174656, 1572864: 67174404, 2621440: 0, 3670016: 67109120, 4718592: 67108868, 5767168: 65536, 6815744: 65540, 7864320: 260, 8912896: 4, 9961472: 256, 11010048: 67174400, 12058624: 65796, 13107200: 65792, 14155776: 67109124, 15204352: 67174660, 16252928: 67108864, 16777216: 67174656, 17825792: 65540, 18874368: 65536, 19922944: 67109120, 20971520: 256, 22020096: 67174660, 23068672: 67108868, 24117248: 0, 25165824: 67109124, 26214400: 67108864, 27262976: 4, 28311552: 65792, 29360128: 67174400, 30408704: 260, 31457280: 65796, 32505856: 67174404, 17301504: 67108864, 18350080: 260, 19398656: 67174656, 20447232: 0, 21495808: 65540, 22544384: 67109120, 23592960: 256, 24641536: 67174404, 25690112: 65536, 26738688: 67174660, 27787264: 65796, 28835840: 67108868, 29884416: 67109124, 30932992: 67174400, 31981568: 4, 33030144: 65792 }, { 0: 2151682048, 65536: 2147487808, 131072: 4198464, 196608: 2151677952, 262144: 0, 327680: 4198400, 393216: 2147483712, 458752: 4194368, 524288: 2147483648, 589824: 4194304, 655360: 64, 720896: 2147487744, 786432: 2151678016, 851968: 4160, 917504: 4096, 983040: 2151682112, 32768: 2147487808, 98304: 64, 163840: 2151678016, 229376: 2147487744, 294912: 4198400, 360448: 2151682112, 425984: 0, 491520: 2151677952, 557056: 4096, 622592: 2151682048, 688128: 4194304, 753664: 4160, 819200: 2147483648, 884736: 4194368, 950272: 4198464, 1015808: 2147483712, 1048576: 4194368, 1114112: 4198400, 1179648: 2147483712, 1245184: 0, 1310720: 4160, 1376256: 2151678016, 1441792: 2151682048, 1507328: 2147487808, 1572864: 2151682112, 1638400: 2147483648, 1703936: 2151677952, 1769472: 4198464, 1835008: 2147487744, 1900544: 4194304, 1966080: 64, 2031616: 4096, 1081344: 2151677952, 1146880: 2151682112, 1212416: 0, 1277952: 4198400, 1343488: 4194368, 1409024: 2147483648, 1474560: 2147487808, 1540096: 64, 1605632: 2147483712, 1671168: 4096, 1736704: 2147487744, 1802240: 2151678016, 1867776: 4160, 1933312: 2151682048, 1998848: 4194304, 2064384: 4198464 }, { 0: 128, 4096: 17039360, 8192: 262144, 12288: 536870912, 16384: 537133184, 20480: 16777344, 24576: 553648256, 28672: 262272, 32768: 16777216, 36864: 537133056, 40960: 536871040, 45056: 553910400, 49152: 553910272, 53248: 0, 57344: 17039488, 61440: 553648128, 2048: 17039488, 6144: 553648256, 10240: 128, 14336: 17039360, 18432: 262144, 22528: 537133184, 26624: 553910272, 30720: 536870912, 34816: 537133056, 38912: 0, 43008: 553910400, 47104: 16777344, 51200: 536871040, 55296: 553648128, 59392: 16777216, 63488: 262272, 65536: 262144, 69632: 128, 73728: 536870912, 77824: 553648256, 81920: 16777344, 86016: 553910272, 90112: 537133184, 94208: 16777216, 98304: 553910400, 102400: 553648128, 106496: 17039360, 110592: 537133056, 114688: 262272, 118784: 536871040, 122880: 0, 126976: 17039488, 67584: 553648256, 71680: 16777216, 75776: 17039360, 79872: 537133184, 83968: 536870912, 88064: 17039488, 92160: 128, 96256: 553910272, 100352: 262272, 104448: 553910400, 108544: 0, 112640: 553648128, 116736: 16777344, 120832: 262144, 124928: 537133056, 129024: 536871040 }, { 0: 268435464, 256: 8192, 512: 270532608, 768: 270540808, 1024: 268443648, 1280: 2097152, 1536: 2097160, 1792: 268435456, 2048: 0, 2304: 268443656, 2560: 2105344, 2816: 8, 3072: 270532616, 3328: 2105352, 3584: 8200, 3840: 270540800, 128: 270532608, 384: 270540808, 640: 8, 896: 2097152, 1152: 2105352, 1408: 268435464, 1664: 268443648, 1920: 8200, 2176: 2097160, 2432: 8192, 2688: 268443656, 2944: 270532616, 3200: 0, 3456: 270540800, 3712: 2105344, 3968: 268435456, 4096: 268443648, 4352: 270532616, 4608: 270540808, 4864: 8200, 5120: 2097152, 5376: 268435456, 5632: 268435464, 5888: 2105344, 6144: 2105352, 6400: 0, 6656: 8, 6912: 270532608, 7168: 8192, 7424: 268443656, 7680: 270540800, 7936: 2097160, 4224: 8, 4480: 2105344, 4736: 2097152, 4992: 268435464, 5248: 268443648, 5504: 8200, 5760: 270540808, 6016: 270532608, 6272: 270540800, 6528: 270532616, 6784: 8192, 7040: 2105352, 7296: 2097160, 7552: 0, 7808: 268435456, 8064: 268443656 }, { 0: 1048576, 16: 33555457, 32: 1024, 48: 1049601, 64: 34604033, 80: 0, 96: 1, 112: 34603009, 128: 33555456, 144: 1048577, 160: 33554433, 176: 34604032, 192: 34603008, 208: 1025, 224: 1049600, 240: 33554432, 8: 34603009, 24: 0, 40: 33555457, 56: 34604032, 72: 1048576, 88: 33554433, 104: 33554432, 120: 1025, 136: 1049601, 152: 33555456, 168: 34603008, 184: 1048577, 200: 1024, 216: 34604033, 232: 1, 248: 1049600, 256: 33554432, 272: 1048576, 288: 33555457, 304: 34603009, 320: 1048577, 336: 33555456, 352: 34604032, 368: 1049601, 384: 1025, 400: 34604033, 416: 1049600, 432: 1, 448: 0, 464: 34603008, 480: 33554433, 496: 1024, 264: 1049600, 280: 33555457, 296: 34603009, 312: 1, 328: 33554432, 344: 1048576, 360: 1025, 376: 34604032, 392: 33554433, 408: 34603008, 424: 0, 440: 34604033, 456: 1049601, 472: 1024, 488: 33555456, 504: 1048577 }, { 0: 134219808, 1: 131072, 2: 134217728, 3: 32, 4: 131104, 5: 134350880, 6: 134350848, 7: 2048, 8: 134348800, 9: 134219776, 10: 133120, 11: 134348832, 12: 2080, 13: 0, 14: 134217760, 15: 133152, 2147483648: 2048, 2147483649: 134350880, 2147483650: 134219808, 2147483651: 134217728, 2147483652: 134348800, 2147483653: 133120, 2147483654: 133152, 2147483655: 32, 2147483656: 134217760, 2147483657: 2080, 2147483658: 131104, 2147483659: 134350848, 2147483660: 0, 2147483661: 134348832, 2147483662: 134219776, 2147483663: 131072, 16: 133152, 17: 134350848, 18: 32, 19: 2048, 20: 134219776, 21: 134217760, 22: 134348832, 23: 131072, 24: 0, 25: 131104, 26: 134348800, 27: 134219808, 28: 134350880, 29: 133120, 30: 2080, 31: 134217728, 2147483664: 131072, 2147483665: 2048, 2147483666: 134348832, 2147483667: 133152, 2147483668: 32, 2147483669: 134348800, 2147483670: 134217728, 2147483671: 134219808, 2147483672: 134350880, 2147483673: 134217760, 2147483674: 134219776, 2147483675: 0, 2147483676: 133120, 2147483677: 2080, 2147483678: 131104, 2147483679: 134350848 }], u = [4160749569, 528482304, 33030144, 2064384, 129024, 8064, 504, 2147483679], d = a.DES = s.extend({ _doReset: function () { for (var t = this._key, r = t.words, e = [], i = 0; i < 56; i++) { var n = c[i] - 1; e[i] = r[n >>> 5] >>> 31 - n % 32 & 1 } for (var o = this._subKeys = [], s = 0; s < 16; s++) { for (var a = o[s] = [], f = l[s], i = 0; i < 24; i++)a[i / 6 | 0] |= e[(h[i] - 1 + f) % 28] << 31 - i % 6, a[4 + (i / 6 | 0)] |= e[28 + (h[i + 24] - 1 + f) % 28] << 31 - i % 6; a[0] = a[0] << 1 | a[0] >>> 31; for (var i = 1; i < 7; i++)a[i] = a[i] >>> 4 * (i - 1) + 3; a[7] = a[7] << 5 | a[7] >>> 27 } for (var u = this._invSubKeys = [], i = 0; i < 16; i++)u[i] = o[15 - i] }, encryptBlock: function (t, r) { this._doCryptBlock(t, r, this._subKeys) }, decryptBlock: function (t, r) { this._doCryptBlock(t, r, this._invSubKeys) }, _doCryptBlock: function (t, i, n) { this._lBlock = t[i], this._rBlock = t[i + 1], r.call(this, 4, 252645135), r.call(this, 16, 65535), e.call(this, 2, 858993459), e.call(this, 8, 16711935), r.call(this, 1, 1431655765); for (var o = 0; o < 16; o++) { for (var s = n[o], a = this._lBlock, c = this._rBlock, h = 0, l = 0; l < 8; l++)h |= f[l][((c ^ s[l]) & u[l]) >>> 0]; this._lBlock = c, this._rBlock = a ^ h } var d = this._lBlock; this._lBlock = this._rBlock, this._rBlock = d, r.call(this, 1, 1431655765), e.call(this, 8, 16711935), e.call(this, 2, 858993459), r.call(this, 16, 65535), r.call(this, 4, 252645135), t[i] = this._lBlock, t[i + 1] = this._rBlock }, keySize: 2, ivSize: 2, blockSize: 2 }); i.DES = s._createHelper(d); var v = a.TripleDES = s.extend({ _doReset: function () { var t = this._key, r = t.words; this._des1 = d.createEncryptor(o.create(r.slice(0, 2))), this._des2 = d.createEncryptor(o.create(r.slice(2, 4))), this._des3 = d.createEncryptor(o.create(r.slice(4, 6))) }, encryptBlock: function (t, r) { this._des1.encryptBlock(t, r), this._des2.decryptBlock(t, r), this._des3.encryptBlock(t, r) }, decryptBlock: function (t, r) { this._des3.decryptBlock(t, r), this._des2.encryptBlock(t, r), this._des1.decryptBlock(t, r) }, keySize: 6, ivSize: 2, blockSize: 2 }); i.TripleDES = s._createHelper(v)
  }(), function () { function r() { for (var t = this._S, r = this._i, e = this._j, i = 0, n = 0; n < 4; n++) { r = (r + 1) % 256, e = (e + t[r]) % 256; var o = t[r]; t[r] = t[e], t[e] = o, i |= t[(t[r] + t[e]) % 256] << 24 - 8 * n } return this._i = r, this._j = e, i } var e = t, i = e.lib, n = i.StreamCipher, o = e.algo, s = o.RC4 = n.extend({ _doReset: function () { for (var t = this._key, r = t.words, e = t.sigBytes, i = this._S = [], n = 0; n < 256; n++)i[n] = n; for (var n = 0, o = 0; n < 256; n++) { var s = n % e, a = r[s >>> 2] >>> 24 - s % 4 * 8 & 255; o = (o + i[n] + a) % 256; var c = i[n]; i[n] = i[o], i[o] = c } this._i = this._j = 0 }, _doProcessBlock: function (t, e) { t[e] ^= r.call(this) }, keySize: 8, ivSize: 0 }); e.RC4 = n._createHelper(s); var a = o.RC4Drop = s.extend({ cfg: s.cfg.extend({ drop: 192 }), _doReset: function () { s._doReset.call(this); for (var t = this.cfg.drop; t > 0; t--)r.call(this) } }); e.RC4Drop = n._createHelper(a) }(), t.mode.CTRGladman = function () { function r(t) { if (255 === (t >> 24 & 255)) { var r = t >> 16 & 255, e = t >> 8 & 255, i = 255 & t; 255 === r ? (r = 0, 255 === e ? (e = 0, 255 === i ? i = 0 : ++i) : ++e) : ++r, t = 0, t += r << 16, t += e << 8, t += i } else t += 1 << 24; return t } function e(t) { return 0 === (t[0] = r(t[0])) && (t[1] = r(t[1])), t } var i = t.lib.BlockCipherMode.extend(), n = i.Encryptor = i.extend({ processBlock: function (t, r) { var i = this._cipher, n = i.blockSize, o = this._iv, s = this._counter; o && (s = this._counter = o.slice(0), this._iv = void 0), e(s); var a = s.slice(0); i.encryptBlock(a, 0); for (var c = 0; c < n; c++)t[r + c] ^= a[c] } }); return i.Decryptor = n, i }(), function () { function r() { for (var t = this._X, r = this._C, e = 0; e < 8; e++)a[e] = r[e]; r[0] = r[0] + 1295307597 + this._b | 0, r[1] = r[1] + 3545052371 + (r[0] >>> 0 < a[0] >>> 0 ? 1 : 0) | 0, r[2] = r[2] + 886263092 + (r[1] >>> 0 < a[1] >>> 0 ? 1 : 0) | 0, r[3] = r[3] + 1295307597 + (r[2] >>> 0 < a[2] >>> 0 ? 1 : 0) | 0, r[4] = r[4] + 3545052371 + (r[3] >>> 0 < a[3] >>> 0 ? 1 : 0) | 0, r[5] = r[5] + 886263092 + (r[4] >>> 0 < a[4] >>> 0 ? 1 : 0) | 0, r[6] = r[6] + 1295307597 + (r[5] >>> 0 < a[5] >>> 0 ? 1 : 0) | 0, r[7] = r[7] + 3545052371 + (r[6] >>> 0 < a[6] >>> 0 ? 1 : 0) | 0, this._b = r[7] >>> 0 < a[7] >>> 0 ? 1 : 0; for (var e = 0; e < 8; e++) { var i = t[e] + r[e], n = 65535 & i, o = i >>> 16, s = ((n * n >>> 17) + n * o >>> 15) + o * o, h = ((4294901760 & i) * i | 0) + ((65535 & i) * i | 0); c[e] = s ^ h } t[0] = c[0] + (c[7] << 16 | c[7] >>> 16) + (c[6] << 16 | c[6] >>> 16) | 0, t[1] = c[1] + (c[0] << 8 | c[0] >>> 24) + c[7] | 0, t[2] = c[2] + (c[1] << 16 | c[1] >>> 16) + (c[0] << 16 | c[0] >>> 16) | 0, t[3] = c[3] + (c[2] << 8 | c[2] >>> 24) + c[1] | 0, t[4] = c[4] + (c[3] << 16 | c[3] >>> 16) + (c[2] << 16 | c[2] >>> 16) | 0, t[5] = c[5] + (c[4] << 8 | c[4] >>> 24) + c[3] | 0, t[6] = c[6] + (c[5] << 16 | c[5] >>> 16) + (c[4] << 16 | c[4] >>> 16) | 0, t[7] = c[7] + (c[6] << 8 | c[6] >>> 24) + c[5] | 0 } var e = t, i = e.lib, n = i.StreamCipher, o = e.algo, s = [], a = [], c = [], h = o.Rabbit = n.extend({ _doReset: function () { for (var t = this._key.words, e = this.cfg.iv, i = 0; i < 4; i++)t[i] = 16711935 & (t[i] << 8 | t[i] >>> 24) | 4278255360 & (t[i] << 24 | t[i] >>> 8); var n = this._X = [t[0], t[3] << 16 | t[2] >>> 16, t[1], t[0] << 16 | t[3] >>> 16, t[2], t[1] << 16 | t[0] >>> 16, t[3], t[2] << 16 | t[1] >>> 16], o = this._C = [t[2] << 16 | t[2] >>> 16, 4294901760 & t[0] | 65535 & t[1], t[3] << 16 | t[3] >>> 16, 4294901760 & t[1] | 65535 & t[2], t[0] << 16 | t[0] >>> 16, 4294901760 & t[2] | 65535 & t[3], t[1] << 16 | t[1] >>> 16, 4294901760 & t[3] | 65535 & t[0]]; this._b = 0; for (var i = 0; i < 4; i++)r.call(this); for (var i = 0; i < 8; i++)o[i] ^= n[i + 4 & 7]; if (e) { var s = e.words, a = s[0], c = s[1], h = 16711935 & (a << 8 | a >>> 24) | 4278255360 & (a << 24 | a >>> 8), l = 16711935 & (c << 8 | c >>> 24) | 4278255360 & (c << 24 | c >>> 8), f = h >>> 16 | 4294901760 & l, u = l << 16 | 65535 & h; o[0] ^= h, o[1] ^= f, o[2] ^= l, o[3] ^= u, o[4] ^= h, o[5] ^= f, o[6] ^= l, o[7] ^= u; for (var i = 0; i < 4; i++)r.call(this) } }, _doProcessBlock: function (t, e) { var i = this._X; r.call(this), s[0] = i[0] ^ i[5] >>> 16 ^ i[3] << 16, s[1] = i[2] ^ i[7] >>> 16 ^ i[5] << 16, s[2] = i[4] ^ i[1] >>> 16 ^ i[7] << 16, s[3] = i[6] ^ i[3] >>> 16 ^ i[1] << 16; for (var n = 0; n < 4; n++)s[n] = 16711935 & (s[n] << 8 | s[n] >>> 24) | 4278255360 & (s[n] << 24 | s[n] >>> 8), t[e + n] ^= s[n] }, blockSize: 4, ivSize: 2 }); e.Rabbit = n._createHelper(h) }(), t.mode.CTR = function () { var r = t.lib.BlockCipherMode.extend(), e = r.Encryptor = r.extend({ processBlock: function (t, r) { var e = this._cipher, i = e.blockSize, n = this._iv, o = this._counter; n && (o = this._counter = n.slice(0), this._iv = void 0); var s = o.slice(0); e.encryptBlock(s, 0), o[i - 1] = o[i - 1] + 1 | 0; for (var a = 0; a < i; a++)t[r + a] ^= s[a] } }); return r.Decryptor = e, r }(), function () { function r() { for (var t = this._X, r = this._C, e = 0; e < 8; e++)a[e] = r[e]; r[0] = r[0] + 1295307597 + this._b | 0, r[1] = r[1] + 3545052371 + (r[0] >>> 0 < a[0] >>> 0 ? 1 : 0) | 0, r[2] = r[2] + 886263092 + (r[1] >>> 0 < a[1] >>> 0 ? 1 : 0) | 0, r[3] = r[3] + 1295307597 + (r[2] >>> 0 < a[2] >>> 0 ? 1 : 0) | 0, r[4] = r[4] + 3545052371 + (r[3] >>> 0 < a[3] >>> 0 ? 1 : 0) | 0, r[5] = r[5] + 886263092 + (r[4] >>> 0 < a[4] >>> 0 ? 1 : 0) | 0, r[6] = r[6] + 1295307597 + (r[5] >>> 0 < a[5] >>> 0 ? 1 : 0) | 0, r[7] = r[7] + 3545052371 + (r[6] >>> 0 < a[6] >>> 0 ? 1 : 0) | 0, this._b = r[7] >>> 0 < a[7] >>> 0 ? 1 : 0; for (var e = 0; e < 8; e++) { var i = t[e] + r[e], n = 65535 & i, o = i >>> 16, s = ((n * n >>> 17) + n * o >>> 15) + o * o, h = ((4294901760 & i) * i | 0) + ((65535 & i) * i | 0); c[e] = s ^ h } t[0] = c[0] + (c[7] << 16 | c[7] >>> 16) + (c[6] << 16 | c[6] >>> 16) | 0, t[1] = c[1] + (c[0] << 8 | c[0] >>> 24) + c[7] | 0, t[2] = c[2] + (c[1] << 16 | c[1] >>> 16) + (c[0] << 16 | c[0] >>> 16) | 0, t[3] = c[3] + (c[2] << 8 | c[2] >>> 24) + c[1] | 0, t[4] = c[4] + (c[3] << 16 | c[3] >>> 16) + (c[2] << 16 | c[2] >>> 16) | 0, t[5] = c[5] + (c[4] << 8 | c[4] >>> 24) + c[3] | 0, t[6] = c[6] + (c[5] << 16 | c[5] >>> 16) + (c[4] << 16 | c[4] >>> 16) | 0, t[7] = c[7] + (c[6] << 8 | c[6] >>> 24) + c[5] | 0 } var e = t, i = e.lib, n = i.StreamCipher, o = e.algo, s = [], a = [], c = [], h = o.RabbitLegacy = n.extend({ _doReset: function () { var t = this._key.words, e = this.cfg.iv, i = this._X = [t[0], t[3] << 16 | t[2] >>> 16, t[1], t[0] << 16 | t[3] >>> 16, t[2], t[1] << 16 | t[0] >>> 16, t[3], t[2] << 16 | t[1] >>> 16], n = this._C = [t[2] << 16 | t[2] >>> 16, 4294901760 & t[0] | 65535 & t[1], t[3] << 16 | t[3] >>> 16, 4294901760 & t[1] | 65535 & t[2], t[0] << 16 | t[0] >>> 16, 4294901760 & t[2] | 65535 & t[3], t[1] << 16 | t[1] >>> 16, 4294901760 & t[3] | 65535 & t[0]]; this._b = 0; for (var o = 0; o < 4; o++)r.call(this); for (var o = 0; o < 8; o++)n[o] ^= i[o + 4 & 7]; if (e) { var s = e.words, a = s[0], c = s[1], h = 16711935 & (a << 8 | a >>> 24) | 4278255360 & (a << 24 | a >>> 8), l = 16711935 & (c << 8 | c >>> 24) | 4278255360 & (c << 24 | c >>> 8), f = h >>> 16 | 4294901760 & l, u = l << 16 | 65535 & h; n[0] ^= h, n[1] ^= f, n[2] ^= l, n[3] ^= u, n[4] ^= h, n[5] ^= f, n[6] ^= l, n[7] ^= u; for (var o = 0; o < 4; o++)r.call(this) } }, _doProcessBlock: function (t, e) { var i = this._X; r.call(this), s[0] = i[0] ^ i[5] >>> 16 ^ i[3] << 16, s[1] = i[2] ^ i[7] >>> 16 ^ i[5] << 16, s[2] = i[4] ^ i[1] >>> 16 ^ i[7] << 16, s[3] = i[6] ^ i[3] >>> 16 ^ i[1] << 16; for (var n = 0; n < 4; n++)s[n] = 16711935 & (s[n] << 8 | s[n] >>> 24) | 4278255360 & (s[n] << 24 | s[n] >>> 8), t[e + n] ^= s[n] }, blockSize: 4, ivSize: 2 }); e.RabbitLegacy = n._createHelper(h) }(), t.pad.ZeroPadding = { pad: function (t, r) { var e = 4 * r; t.clamp(), t.sigBytes += e - (t.sigBytes % e || e) }, unpad: function (t) { for (var r = t.words, e = t.sigBytes - 1; !(r[e >>> 2] >>> 24 - e % 4 * 8 & 255);)e--; t.sigBytes = e + 1 } }, t
});

const $ = new Env('宠汪汪积分兑换奖品');
let allMessage = '';
let joyRewardName = 0;//是否兑换京豆，默认0不兑换京豆，其中20为兑换20京豆,500为兑换500京豆，0为不兑换京豆.数量有限先到先得
//Node.js用户请在jdCookie.js处填写京东ck;
const jdCookieNode = $.isNode() ? require('./jdCookie.js') : '';
const notify = $.isNode() ? require('./sendNotify') : '';
let jdNotify = false;//是否开启静默运行，默认false关闭(即:奖品兑换成功后会发出通知提示)
//IOS等用户直接用NobyDa的jd cookie
let cookiesArr = [], cookie = '';
if ($.isNode()) {
  Object.keys(jdCookieNode).forEach((item) => {
    cookiesArr.push(jdCookieNode[item])
  })
  if (process.env.JD_DEBUG && process.env.JD_DEBUG === 'false') console.log = () => {};
} else {
  cookiesArr = [$.getdata('CookieJD'), $.getdata('CookieJD2'), ...jsonParse($.getdata('CookiesJD') || "[]").map(item => item.cookie)].filter(item => !!item);
}
const JD_API_HOST = 'https://jdjoy.jd.com';
Date.prototype.Format = function (fmt) { //author: meizz
  var o = {
    "M+": this.getMonth() + 1, //月份
    "d+": this.getDate(), //日
    "h+": this.getHours(), //小时
    "m+": this.getMinutes(), //分
    "s+": this.getSeconds(), //秒
    "S": this.getMilliseconds() //毫秒
  };
  if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
  for (var k in o)
    if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
  return fmt;
}

const https = require('https');
const http = require('http');
const stream = require('stream');
const zlib = require('zlib');
const vm = require('vm');
const {
    createCanvas,
    Image
} = require('canvas');
Math.avg = function average() {
    var sum = 0;
    var len = this.length;
    for (var i = 0; i < len; i++) {
        sum += this[i];
    }
    return sum / len;
};

function sleep(timeout) {
    return new Promise((resolve) => setTimeout(resolve, timeout));
}
const canvas = createCanvas();
const PUZZLE_GAP = 8;
const PUZZLE_PAD = 10;
class PuzzleRecognizer {
    constructor(bg, patch, y) {
        // console.log(bg);
        const imgBg = new Image();
        const imgPatch = new Image();
        imgBg.src = bg;
        imgPatch.src = patch;
        // console.log(imgBg.naturalWidth);
        this.bg = imgBg;
        this.patch = imgPatch;
        this.y = y;
        this.w = imgBg.naturalWidth;
        this.h = imgBg.naturalHeight;
        this.ctx = canvas.getContext('2d');
    }
    run() {
        const {
            ctx,
            w,
            h
        } = this;
        canvas.width = w;
        canvas.height = h;
        ctx.clearRect(0, 0, w, h);
        ctx.drawImage(this.bg, 0, 0, w, h);
        return this.recognize();
    }
    recognize() {
        const {
            ctx,
            w: width
        } = this;
        const {
            naturalHeight,
            naturalWidth
        } = this.patch;
        const posY = this.y + PUZZLE_PAD + ((naturalHeight - PUZZLE_PAD) / 2) - (PUZZLE_GAP / 2);
        // const cData = ctx.getImageData(0, a.y + 10 + 20 - 4, 360, 8).data;
        const cData = ctx.getImageData(0, posY, width, PUZZLE_GAP).data;
        const lumas = [];
        for (let x = 0; x < width; x++) {
            var sum = 0;
            // y xais
            for (let y = 0; y < PUZZLE_GAP; y++) {
                var idx = x * 4 + y * (width * 4);
                var r = cData[idx];
                var g = cData[idx + 1];
                var b = cData[idx + 2];
                var luma = 0.2126 * r + 0.7152 * g + 0.0722 * b;
                sum += luma;
            }
            lumas.push(sum / PUZZLE_GAP);
        }
        const n = 2; // minium macroscopic image width (px)
        const margin = naturalWidth - PUZZLE_PAD;
        const diff = 20; // macroscopic brightness difference
        const radius = PUZZLE_PAD;
        for (let i = 0, len = lumas.length - 2 * 4; i < len; i++) {
            const left = (lumas[i] + lumas[i + 1]) / n;
            const right = (lumas[i + 2] + lumas[i + 3]) / n;
            const mi = margin + i;
            const mLeft = (lumas[mi] + lumas[mi + 1]) / n;
            const mRigth = (lumas[mi + 2] + lumas[mi + 3]) / n;
            if (left - right > diff && mLeft - mRigth < -diff) {
                const pieces = lumas.slice(i + 2, margin + i + 2);
                const median = pieces.sort((x1, x2) => x1 - x2)[20];
                const avg = Math.avg(pieces);
                // noise reducation
                if (median > left || median > mRigth) return;
                if (avg > 100) return;
                // console.table({left,right,mLeft,mRigth,median});
                // ctx.fillRect(i+n-radius, 0, 1, 360);
                // console.log(i+n-radius);
                return i + n - radius;
            }
        }
        // not found
        return -1;
    }
}
const DATA = {
    "appId": "17839d5db83",
    "scene": "cww",
    "product": "embed",
    "lang": "zh_CN",
};
const SERVER = 'iv.jd.com';
class JDJRValidator {
    constructor(params) {
        this.data = {};
        this.x = 0;
        this.t = Date.now();
    }
    async run() {
        const tryRecognize = async () => {
            const x = await this.recognize();
            if (x > 0) {
                return x;
            }
            // retry
            return await tryRecognize();
        };
        const puzzleX = await tryRecognize();
        // console.log(puzzleX);
        const pos = new MousePosFaker(puzzleX).run();
        const d = getCoordinate(pos);
        // console.log(pos[pos.length-1][2] -Date.now());
        // await sleep(4500);
        await sleep(pos[pos.length - 1][2] - Date.now());
        const result = await JDJRValidator.jsonp('/slide/s.html', {
            d,
            ...this.data
        });
        if (result.message === 'success') {
            console.log(result);
            $.validate = result.validate
            //console.log('JDJRValidator: %fs', (Date.now() - this.t) / 1000);
            return result.validate
        } else {
            //console.count(JSON.stringify(result));
            await this.run();
        }
    }
    async recognize() {
        const data = await JDJRValidator.jsonp('/slide/g.html', {
            e: ''
        });
        const {
            bg,
            patch,
            y
        } = data;
        const uri = 'data:image/png;base64,';
        const re = new PuzzleRecognizer(uri + bg, uri + patch, y);
        const puzzleX = re.run();
        if (puzzleX > 0) {
            this.data = {
                c: data.challenge,
                w: re.w,
                e: '',
                s: '',
                o: '',
            };
            this.x = puzzleX;
        }
        return puzzleX;
    }
    async report(n) {
        console.time('PuzzleRecognizer');
        let count = 0;
        for (let i = 0; i < n; i++) {
            const x = await this.recognize();
            if (x > 0) count++;
            if (i % 50 === 0) {
                console.log('%f\%', (i / n) * 100);
            }
        }
        console.log('successful: %f\%', (count / n) * 100);
        console.timeEnd('PuzzleRecognizer');
    }
    static jsonp(api, data = {}) {
        return new Promise((resolve, reject) => {
            const fnId = `jsonp_${String(Math.random()).replace('.', '')}`;
            const extraData = {
                callback: fnId
            };
            const query = new URLSearchParams({ ...DATA,
                ...extraData,
                ...data
            }).toString();
            const url = `http://${SERVER}${api}?${query}`;
            const headers = {
                'Accept': '*/*',
                'Accept-Encoding': 'gzip,deflate,br',
                'Accept-Language': 'zh-CN,en-US',
                'Connection': 'keep-alive',
                'Host': SERVER,
                'Cookie': $.cookie,
                'Proxy-Connection': 'keep-alive',
                'Referer': 'https://h5.m.jd.com/babelDiy/Zeus/2wuqXrZrhygTQzYA7VufBEpj4amH/index.html',
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36',
            };
            const req = http.get(url, {
                headers
            }, (response) => {
                let res = response;
                if (res.headers['content-encoding'] === 'gzip') {
                    const unzipStream = new stream.PassThrough();
                    stream.pipeline(response, zlib.createGunzip(), unzipStream, reject, );
                    res = unzipStream;
                }
                res.setEncoding('utf8');
                let rawData = '';
                res.on('data', (chunk) => rawData += chunk);
                res.on('end', () => {
                    try {
                        const ctx = {
                            [fnId]: (data) => ctx.data = data,
                            data: {},
                        };
                        vm.createContext(ctx);
                        vm.runInContext(rawData, ctx);
                        // console.log(ctx.data);
                        res.resume();
                        resolve(ctx.data);
                    } catch (e) {
                        reject(e);
                    }
                });
            });
            req.on('error', reject);
            req.end();
        });
    }
}

function getCoordinate(c) {
    function string10to64(d) {
        var c = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-~".split(""),
            b = c.length,
            e = +d,
            a = [];
        do {
            mod = e % b;
            e = (e - mod) / b;
            a.unshift(c[mod])
        } while (e);
        return a.join("")
    }

    function prefixInteger(a, b) {
        return (Array(b).join(0) + a).slice(-b)
    }

    function pretreatment(d, c, b) {
        var e = string10to64(Math.abs(d));
        var a = "";
        if (!b) {
            a += (d > 0 ? "1" : "0")
        }
        a += prefixInteger(e, c);
        return a
    }
    var b = new Array();
    for (var e = 0; e < c.length; e++) {
        if (e == 0) {
            b.push(pretreatment(c[e][0] < 262143 ? c[e][0] : 262143, 3, true));
            b.push(pretreatment(c[e][1] < 16777215 ? c[e][1] : 16777215, 4, true));
            b.push(pretreatment(c[e][2] < 4398046511103 ? c[e][2] : 4398046511103, 7, true))
        } else {
            var a = c[e][0] - c[e - 1][0];
            var f = c[e][1] - c[e - 1][1];
            var d = c[e][2] - c[e - 1][2];
            b.push(pretreatment(a < 4095 ? a : 4095, 2, false));
            b.push(pretreatment(f < 4095 ? f : 4095, 2, false));
            b.push(pretreatment(d < 16777215 ? d : 16777215, 4, true))
        }
    }
    return b.join("")
}
const HZ = 60;
class MousePosFaker {
    constructor(puzzleX) {
        this.x = parseInt(Math.random() * 20 + 20, 10);
        this.y = parseInt(Math.random() * 80 + 80, 10);
        this.t = Date.now();
        this.pos = [
            [this.x, this.y, this.t]
        ];
        this.minDuration = parseInt(1000 / HZ, 10);
        // this.puzzleX = puzzleX;
        this.puzzleX = puzzleX + parseInt(Math.random() * 2 - 1, 10);
        this.STEP = parseInt(Math.random() * 6 + 5, 10);
        this.DURATION = parseInt(Math.random() * 7 + 14, 10) * 100;
        // [9,1600] [10,1400]
        this.STEP = 9;
        // this.DURATION = 2000;
        console.log(this.STEP, this.DURATION);
    }
    run() {
        const perX = this.puzzleX / this.STEP;
        const perDuration = this.DURATION / this.STEP;
        const firstPos = [this.x - parseInt(Math.random() * 6, 10), this.y + parseInt(Math.random() * 11, 10), this.t];
        this.pos.unshift(firstPos);
        this.stepPos(perX, perDuration);
        this.fixPos();
        const reactTime = parseInt(60 + Math.random() * 100, 10);
        const lastIdx = this.pos.length - 1;
        const lastPos = [this.pos[lastIdx][0], this.pos[lastIdx][1], this.pos[lastIdx][2] + reactTime];
        this.pos.push(lastPos);
        return this.pos;
    }
    stepPos(x, duration) {
        let n = 0;
        const sqrt2 = Math.sqrt(2);
        for (let i = 1; i <= this.STEP; i++) {
            n += 1 / i;
        }
        for (let i = 0; i < this.STEP; i++) {
            x = this.puzzleX / (n * (i + 1));
            const currX = parseInt((Math.random() * 30 - 15) + x, 10);
            const currY = parseInt(Math.random() * 7 - 3, 10);
            const currDuration = parseInt((Math.random() * 0.4 + 0.8) * duration, 10);
            this.moveToAndCollect({
                x: currX,
                y: currY,
                duration: currDuration,
            });
        }
    }
    fixPos() {
        const actualX = this.pos[this.pos.length - 1][0] - this.pos[1][0];
        const deviation = this.puzzleX - actualX;
        if (Math.abs(deviation) > 4) {
            this.moveToAndCollect({
                x: deviation,
                y: parseInt(Math.random() * 8 - 3, 10),
                duration: 250,
            });
        }
    }
    moveToAndCollect({
        x,
        y,
        duration
    }) {
        let movedX = 0;
        let movedY = 0;
        let movedT = 0;
        const times = duration / this.minDuration;
        let perX = x / times;
        let perY = y / times;
        let padDuration = 0;
        if (Math.abs(perX) < 1) {
            padDuration = duration / Math.abs(x) - this.minDuration;
            perX = 1;
            perY = y / Math.abs(x);
        }
        while (Math.abs(movedX) < Math.abs(x)) {
            const rDuration = parseInt(padDuration + Math.random() * 16 - 4, 10);
            movedX += perX + Math.random() * 2 - 1;
            movedY += perY;
            movedT += this.minDuration + rDuration;
            const currX = parseInt(this.x + movedX, 10);
            const currY = parseInt(this.y + movedY, 10);
            const currT = this.t + movedT;
            this.pos.push([currX, currY, currT]);
        }
        this.x += x;
        this.y += y;
        this.t += Math.max(duration, movedT);
    }
}

!(async () => {
  if (!cookiesArr[0]) {
    $.msg('【京东账号一】宠汪汪积分兑换奖品失败', '【提示】请先获取京东账号一cookie\n直接使用NobyDa的京东签到获取', 'https://bean.m.jd.com/bean/signIndex.action', {"open-url": "https://bean.m.jd.com/bean/signIndex.action"});
  }
  for (let i = 0; i < cookiesArr.length; i++) {
    if (cookiesArr[i]) {
      cookie = cookiesArr[i];
      $.UserName = decodeURIComponent(cookie.match(/pt_pin=([^; ]+)(?=;?)/) && cookie.match(/pt_pin=([^; ]+)(?=;?)/)[1])
      $.index = i + 1;
      $.isLogin = true;
      $.nickName = '' || $.UserName;
      await TotalBean();
      console.log(`\n*****开始【京东账号${$.index}】${$.nickName || $.UserName}****\n`);
      if (!$.isLogin) {
        $.msg($.name, `【提示】cookie已失效`, `京东账号${$.index} ${$.nickName || $.UserName}\n请重新登录获取\nhttps://bean.m.jd.com/bean/signIndex.action`, {"open-url": "https://bean.m.jd.com/bean/signIndex.action"});

        // if ($.isNode()) {
        //   await notify.sendNotify(`${$.name}cookie已失效 - ${$.UserName}`, `京东账号${$.index} ${$.UserName}\n请重新登录获取cookie`);
        // }
        continue
      }
      // console.log(`本地时间与京东服务器时间差(毫秒)：${await get_diff_time()}`);
      console.log(`脚本开始请求时间 ${(new Date()).Format("yyyy-MM-dd hh:mm:ss | S")}`);
      await joyReward();
    }
  }
  if ($.isNode() && allMessage && $.ctrTemp) {
    await notify.sendNotify(`${$.name}`, `${allMessage}`)
  }
})()
    .catch((e) => {
      $.log('', `❌ ${$.name}, 失败! 原因: ${e}!`, '')
    })
    .finally(() => {
      $.done();
    })


async function joyReward() {
  try {
  	   $.cookie = cookie;
        let yz = new JDJRValidator($);
        await yz.run()
        console.log($.validate)
    await getExchangeRewards();
    if ($.getExchangeRewardsRes && $.getExchangeRewardsRes.success) {
      // console.log('success', $.getExchangeRewardsRes);
      const data = $.getExchangeRewardsRes.data;
      // const levelSaleInfos = data.levelSaleInfos;
      // const giftSaleInfos = levelSaleInfos.giftSaleInfos;
      // console.log(`当前积分 ${data.coin}\n`);
      // console.log(`宠物等级 ${data.level}\n`);
      let saleInfoId = '', giftValue = '', extInfo = '', leftStock = 0, salePrice = 0;
      let rewardNum = 0;
      if ($.isNode() && process.env.JD_JOY_REWARD_NAME) {
        rewardNum = process.env.JD_JOY_REWARD_NAME * 1;
      } else if ($.getdata('joyRewardName')) {
        if ($.getdata('joyRewardName') * 1 === 1) {
          //兼容之前的BoxJs设置
          rewardNum = 20;
        } else {
          rewardNum = $.getdata('joyRewardName') * 1;
        }
      } else {
        rewardNum = joyRewardName;
      } 
      let giftSaleInfos = 'beanConfigs0';
      let time = new Date($.getExchangeRewardsRes['currentTime']).getHours();
      if (time >= 0 && time < 8) {
        giftSaleInfos = 'beanConfigs0';
      }
      if (time >= 8 && time < 16) {
        giftSaleInfos = 'beanConfigs8';
      }
      if (time >= 16 && time < 24) {
        giftSaleInfos = 'beanConfigs16';
      }
      console.log(`\ndebug场次:${giftSaleInfos}\n`)
      for (let item of data[giftSaleInfos]) {
        console.log(`${item['giftName']}当前库存:${item['leftStock']}，id：${item.id}`)
        if (item.giftType === 'jd_bean' && item['giftValue'] === rewardNum) {
          saleInfoId = item.id;
          leftStock = item.leftStock;
          salePrice = item.salePrice;
          giftValue = item.giftValue;
        }
      }
      // console.log(`${giftValue}京豆当前京豆库存:${leftStock}`)
      // console.log(`saleInfoId:${saleInfoId}`)
      // 兼容之前BoxJs兑换设置的数据
      if (rewardNum && (rewardNum === 1 || rewardNum === 20 || rewardNum === 50 || rewardNum === 100 || rewardNum === 500 || rewardNum === 1000)) {
        //开始兑换
        if (salePrice) {
          if (leftStock) {
            if (!saleInfoId) return
            // console.log(`当前账户积分:${data.coin}\n当前京豆库存:${leftStock}\n满足兑换条件,开始为您兑换京豆\n`);
            console.log(`\n您设置的兑换${giftValue}京豆库存充足,开始为您兑换${giftValue}京豆\n`);
            console.log(`脚本开始兑换${rewardNum}京豆时间 ${(new Date()).Format("yyyy-MM-dd hh:mm:ss | S")}`);
            await exchange(saleInfoId, 'pet');
            console.log(`请求兑换API后时间 ${(new Date()).Format("yyyy-MM-dd hh:mm:ss | S")}`);
            if ($.exchangeRes && $.exchangeRes.success) {
              if ($.exchangeRes.errorCode === 'buy_success') {
                // console.log(`兑换${giftValue}成功,【宠物等级】${data.level}\n【消耗积分】${salePrice}个\n【剩余积分】${data.coin - salePrice}个\n`)
                console.log(`\n兑换${giftValue}成功,【消耗积分】${salePrice}个\n`)
                if ($.isNode() && process.env.JD_JOY_REWARD_NOTIFY) {
                  $.ctrTemp = `${process.env.JD_JOY_REWARD_NOTIFY}` === 'false';
                } else if ($.getdata('jdJoyRewardNotify')) {
                  $.ctrTemp = $.getdata('jdJoyRewardNotify') === 'false';
                } else {
                  $.ctrTemp = `${jdNotify}` === 'false';
                }
                if ($.ctrTemp) {
                  $.msg($.name, ``, `【京东账号${$.index}】${$.nickName}\n【${giftValue}京豆】兑换成功🎉\n【积分详情】消耗积分 ${salePrice}`);
                  if ($.isNode()) {
                    allMessage += `【京东账号${$.index}】 ${$.nickName}\n【${giftValue}京豆】兑换成功🎉\n【积分详情】消耗积分 ${salePrice}${$.index !== cookiesArr.length ? '\n\n' : ''}`
                    // await notify.sendNotify(`${$.name} - 账号${$.index} - ${$.nickName}`, `【京东账号${$.index}】 ${$.nickName}\n【${giftValue}京豆】兑换成功\n【宠物等级】${data.level}\n【积分详情】消耗积分 ${salePrice}, 剩余积分 ${data.coin - salePrice}`);
                  }
                }
                // if ($.isNode()) {
                //   await notify.BarkNotify(`${$.name}`, `【京东账号${$.index}】 ${$.nickName}\n【兑换${giftName}】成功\n【宠物等级】${data.level}\n【消耗积分】${salePrice}分\n【当前剩余】${data.coin - salePrice}积分`);
                // }
              } else if ($.exchangeRes && $.exchangeRes.errorCode === 'buy_limit') {
                console.log(`\n兑换${rewardNum}京豆失败，原因：兑换京豆已达上限，请把机会留给更多的小伙伴~\n`)
                //$.msg($.name, `兑换${giftName}失败`, `【京东账号${$.index}】${$.nickName}\n兑换京豆已达上限\n请把机会留给更多的小伙伴~\n`)
              } else if ($.exchangeRes && $.exchangeRes.errorCode === 'stock_empty'){
                console.log(`\n兑换${rewardNum}京豆失败，原因：当前京豆库存为空\n`)
              } else if ($.exchangeRes && $.exchangeRes.errorCode === 'insufficient'){
                console.log(`\n兑换${rewardNum}京豆失败，原因：当前账号积分不足兑换${giftValue}京豆所需的${salePrice}积分\n`)
              } else {
                console.log(`\n兑奖失败:${JSON.stringify($.exchangeRes)}`)
              }
            } else {
              console.log(`\n兑换京豆异常:${JSON.stringify($.exchangeRes)}`)
            }
          } else {
            console.log(`\n按您设置的兑换${rewardNum}京豆失败，原因：京豆库存不足，已抢完，请下一场再兑换\n`);
          }
        } else {
          // console.log(`兑换${rewardNum}京豆失败，原因：您目前只有${data.coin}积分，已不足兑换${giftValue}京豆所需的${salePrice}积分\n`)
          //$.msg($.name, `兑换${giftName}失败`, `【京东账号${$.index}】${$.nickName}\n目前只有${data.coin}积分\n已不足兑换${giftName}所需的${salePrice}积分\n`)
        }
      } else {
        console.log(`\n您设置了不兑换京豆,如需兑换京豆，请去BoxJs处设置或修改joyRewardName代码或设置环境变量 JD_JOY_REWARD_NAME`)
      }
    } else {
      console.log(`${$.name}getExchangeRewards异常,${JSON.stringify($.getExchangeRewardsRes)}`)
    }
  } catch (e) {
    $.logErr(e)
  }
}
function getExchangeRewards() {
  let opt = {
    url: `//jdjoy.jd.com/common/gift/getBeanConfigs?reqSource=h5&invokeKey=NRp8OPxZMFXmGkaE&validate=${$.validate}`,
    method: "GET",
    data: {},
    credentials: "include",
    header: {"content-type": "application/json"}
  }
  return new Promise((resolve) => {
    const option = {
      url: "https:"+ taroRequest(opt)['url'],
      headers: {
        "Host": "jdjoy.jd.com",
        "Content-Type": "application/json",
        "Cookie": cookie,
        "reqSource": "h5",
        "Connection": "keep-alive",
        "Accept": "*/*",
        "User-Agent": $.isNode() ? (process.env.JD_USER_AGENT ? process.env.JD_USER_AGENT : (require('./USER_AGENTS').USER_AGENT)) : ($.getdata('JDUA') ? $.getdata('JDUA') : "jdapp;iPhone;9.4.4;14.3;network/4g;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1"),
        "Referer": "https://jdjoy.jd.com/pet/index",
        "Accept-Language": "zh-cn",
        "Accept-Encoding": "gzip, deflate, br"
      },
    }
    $.get(option, (err, resp, data) => {
      try {
        if (err) {
          console.log(`${JSON.stringify(err)}`)
          console.log(`${$.name} API请求失败，请检查网路重试`)
        } else {
          $.getExchangeRewardsRes = {};
          if (safeGet(data)) {
            $.getExchangeRewardsRes = JSON.parse(data);
          }
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve();
      }
    });
  })
}
function exchange(saleInfoId, orderSource) {
  let body = {"buyParam":{"orderSource":orderSource,"saleInfoId":saleInfoId},"deviceInfo":{}}
  let opt = {
    "url": `//jdjoy.jd.com/common/gift/new/exchange?reqSource=h5&invokeKey=NRp8OPxZMFXmGkaE&validate=${$.validate}`,
    "data":body,
    "credentials":"include","method":"POST","header":{"content-type":"application/json"}
  }
  return new Promise((resolve) => {
    const option = {
      url: "https:"+ taroRequest(opt)['url'],
      body: `${JSON.stringify(body)}`,
      headers: {
        "Host": "jdjoy.jd.com",
        "Accept": "*/*",
        "Accept-Encoding": "gzip, deflate, br",
        "Accept-Language": "zh-cn",
        "Content-Type": "application/json",
        "Origin": "https://jdjoy.jd.com",
        "reqSource": "h5",
        "Connection": "keep-alive",
        "User-Agent": $.isNode() ? (process.env.JD_USER_AGENT ? process.env.JD_USER_AGENT : (require('./USER_AGENTS').USER_AGENT)) : ($.getdata('JDUA') ? $.getdata('JDUA') : "jdapp;iPhone;9.4.4;14.3;network/4g;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1"),
        "Referer": "https://jdjoy.jd.com/pet/index",
        "Content-Length": "10",
        "Cookie": cookie
      },
    }
    $.post(option, (err, resp, data) => {
      try {
        if (err) {
          console.log(`${JSON.stringify(err)}`)
          console.log(`${$.name} API请求失败，请检查网路重试`)
        } else {
          console.log(`兑换结果:${data}`);
          $.exchangeRes = {};
          if (safeGet(data)) {
            $.exchangeRes = JSON.parse(data);
          }
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve();
      }
    });
  })
}
function TotalBean() {
  return new Promise(async resolve => {
    const options = {
      "url": `https://wq.jd.com/user/info/QueryJDUserInfo?sceneval=2`,
      "headers": {
        "Accept": "application/json,text/plain, */*",
        "Content-Type": "application/x-www-form-urlencoded",
        "Accept-Encoding": "gzip, deflate, br",
        "Accept-Language": "zh-cn",
        "Connection": "keep-alive",
        "Cookie": cookie,
        "Referer": "https://wqs.jd.com/my/jingdou/my.shtml?sceneval=2",
        "User-Agent": $.isNode() ? (process.env.JD_USER_AGENT ? process.env.JD_USER_AGENT : (require('./USER_AGENTS').USER_AGENT)) : ($.getdata('JDUA') ? $.getdata('JDUA') : "jdapp;iPhone;9.4.4;14.3;network/4g;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1")
      }
    }
    $.post(options, (err, resp, data) => {
      try {
        if (err) {
          console.log(`${JSON.stringify(err)}`)
          console.log(`${$.name} API请求失败，请检查网路重试`)
        } else {
          if (data) {
            data = JSON.parse(data);
            if (data['retcode'] === 13) {
              $.isLogin = false; //cookie过期
              return
            }
            if (data['retcode'] === 0) {
              $.nickName = (data['base'] && data['base'].nickname) || $.UserName;
            } else {
              $.nickName = $.UserName
            }
          } else {
            console.log(`京东服务器返回空数据`)
          }
        }
      } catch (e) {
        $.logErr(e, resp)
      } finally {
        resolve();
      }
    })
  })
}
function getJDServerTime() {
  return new Promise(resolve => {
    // console.log(Date.now())
    $.get({url: "https://a.jd.com//ajax/queryServerData.html",headers:{
        "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1 Edg/87.0.4280.88"
      }}, async (err, resp, data) => {
      try {
        if (err) {
          console.log(`${JSON.stringify(err)}`)
          console.log(`${$.name} 获取京东服务器时间失败，请检查网路重试`)
        } else {
          data = JSON.parse(data);
          $.jdTime = data['serverTime'];
          // console.log(data['serverTime']);
          // console.log(data['serverTime'] - Date.now())
        }
      } catch (e) {
        $.logErr(e, resp)
      } finally {
        resolve($.jdTime);
      }
    })
  })
}
async function get_diff_time() {
  // console.log(`本机时间戳 ${Date.now()}`)
  // console.log(`京东服务器时间戳 ${await getJDServerTime()}`)
  return Date.now() - await getJDServerTime();
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
function safeGet(data) {
  try {
    if (typeof JSON.parse(data) == "object") {
      return true;
    }
  } catch (e) {
    console.log(e);
    console.log(`京东服务器访问数据为空，请检查自身设备网络情况`);
    return false;
  }
}
var _0xodV='jsjiami.com.v6',_0x3589=[_0xodV,'AMO6wrh8','w5FmZQ==','w7oZwrIXLQ==','w50Bw5tGwpd6w5k=','GsOTwqvDn8Kl','w6IAcsOBwpg=','NcOgAVos','EcOFE8OBaA==','w7sew75xwq0=','wpbCvyc=','wpnDsA/CvSTDnUTCrsKxw7fDjsKC','w4/ClMOVwoltX8OmEhg/w6VE','bEh1','fUhcwrk=','w4BzYS57w7QwMmXDjnjCh1lQBDfDu8KiwojCm8OBw59EQsO2wqg4JsOESsKTZGk=','wqDCuXLCisOeahfDtxo=','w7shKMO5wozCg205woXCvFciw4gIw7ttw5nDqcORbcOhwrjCucKtCsONX8K8J04/RA==','wrbCjMOKKMKGTAzCtcKOwqXCl0TDvMOEwrRz','LUwMwp19MxQiw6fDvMKLcg==','w54we8OJwr1Y','w6EDwogjKQ==','TmDDmkwM','wrbDnmVuXw==','aElM','JMOFQcKv','w7d8UBpG','w7oSw4M=','aHzDpiU=','w68dw5LDssOr','w446w7p6wps=','KHvCoWbDpg==','N8OrwqpBwqE=','KkgfdcKb','w7YtQsOLwro=','w5rCg8OZwpxj','w4MedsO+','fsKFwo3DumHDgw==','NEwEwr0=','JkYB','L8OWwr3DksKQ','w7TCucOPwpJb','Z0hGwqM=','JGY5U8KJ','wpbDjsOnw5R/Ni8=','OMOrEcOATg==','w5zCncKgcm0=','W0PDuXgZ','w6JzQQ==','woZsw7w/','w7sMw4bCrMON','BcONEw==','wqVqw5kXw4fCssKa','JkgVQA==','w5HCssKb','wrslFA==','a8KuJsKkXQ==','w41AeBNcJipqwq7ClQ==','w7IrasO3AMOoFcOo','LkkS','OMOeIw==','w4vDscOjbcKJ','wrjDvhLCrHfChw==','CcOtwpvClsOOw59/fA4=','w69sWw==','wrfCiMKfb8OMWkw=','CmXCocKa','w4gvw7c=','w5gaaw==','w5YvWsOwRQ==','wqd3w4lzw6zDm8KsaQ==','JMOMLA==','R8KfwrJt','BcOedMOjLS/CsMKd','wpbCv23Dgg==','wqbCpWg=','w4kMw4fCusKewo0=','w4Q3R8OPwrdawobDh8Kt','wqLDgHxJaA==','McOOCkcZ','w4Q4wqg9Iw==','XGHDt1ok','BBHChsKswp8=','w7TDlcKZ','woHCqnjCn8KcMQ==','MRLCpsKJwpjDjsOhwrs=','YVl7AA==','w4VMcQg=','wqYlAA==','DcOMwpjCssOp','VEZ8wqHCiQ==','w5QBw59F','wqbCqBLDpRA=','PCNQwqMhGsOP','wrlfw7tVw7k=','HMOBCMOGaA==','w6Eqw5XCjcOP','w4k7w6VCwrc=','AMOybMO7Fg==','JsOfZcOGNQ==','w7JWGig3','PCNXwqosMcOMwqk=','w6NtPQ==','w5pGWw9LPTBo','w41iQjVB','w680w5nDsMOg','DlPCsMKlwqc=','w41mfyVmw78=','w4gPw5jCh8Os','McOqNm47','w71ndTBR','woDCucKSXsOd','wr7DsFZT','w40Bw4Rf','w5gawpM=','TkVDwpXCnA==','F8O/wptQwpg=','Fg5AwrAO','OsOcD2rCgw==','worClMK6f8OT','wpTDji7CgAc=','wpDDmMOlw4B+','w4ltehJY','w4hdDTUt','w5smW8OBwq1V','w4wjbcOwIg==','w60+w5XCjcOe','wpnDs8Oiw6Nx','AsOEwrPDvMKy','L3PCrFTDpQ==','w6XClcOYwpF9VcO3TA==','DU0ecsKw','wqLDkjXCsQc=','wrDDiATCvyo=','w7nClcKhVQ==','wr3Cnx3DuiLCjw==','w6fCnsOCwo4=','WUxt','w6Erwq06Gg==','wp8UPsKbEA==','eMKEwr07','w4Awwq8VGg==','wqIqFMKVGMOnCw==','w70NwpMQLQ==','dX7DsFwP','w7YYw4Zqwr8=','wrLDqRHCiAY=','PsOwGcOVSA==','PS9SwoQT','woFlw7cTw5E=','MC5hwoAd','wrEpwrPDiAs=','w7EBRsO0wrI=','w73DnsKUwpDCgXI=','w6fCiMO2wo9H','woZbw7Vpw5w=','w7RAfixQ','e8KOwoDDsWDDj8O0w6c=','VGbDo3E9w6Nmwos=','w5wew5PCsMOP','w4AZacOPw5Q=','A8OUV8O7PiXCuw==','w7jDt8O/aMK+','w5AVwoA=','wqrDlMOlwok=','FMOfRA==','EE7Ds8KtUEY=','w4jDpMOjd8KCBMO7w7XDgQ==','e8KFwrc5wonCncOFFw==','c8Oww4DDl8KnLwDCpA==','wrDDnX9ZVA==','UMKnwozDj1s=','w60Zw5DDrcOvwpjDnQ==','d8KjwoQswo8=','M8O2SMOFEQ==','wr3DsE5EQis=','w74fw5g=','wqVqw5gTw4w=','w7EjwpIFMw==','wqt3L8Ktw4DCrzI=','wrzDg8OEw6Fz','w4FFWy5G','wowcGcKZKQ==','fGhoUjk=','w5ItVg==','H8OxwrE=','w7YlS8OwFw==','wpHCjMKPeMKDHg==','wqbDoV1JST4GwpjCow==','McO+CA==','IMOtIyzDvHzCtQ==','wr7CgsKYeA==','FMOWwoo=','O0YV','FRbClsKOw50=','w4BWOw==','T8Oqw4XCgw==','wrZ2GMK8w4rCiTpn','wr42HA==','w6HCnsOPwpVnVQ==','N8OLCXPChw==','w4sJw7nDjsOI','w68Mw4DCvg==','wpfDhcOiw5ViCw==','EMOvL8OZZg==','wovDj8OPw55wHDtvw7bDqMKF','wrrCnwrDnjnCg1k=','Xll8dms=','wpgNA8K7Jw==','w7xcACsT','em5wdC8=','S8KPwowHwrI=','w6QuQMOrw5g=','w555ejtt','WcOWw7LDv8Ko','w6XDlMK2wpjCgn8ETMK/wpJr','PMOxwrDDjg==','w5kewo02HsKZ','w7bDtMKke8KCAMO9w7fDnQ==','wonCkSvDuCQ=','w6QBbMOqHw==','YG9FRSs=','w7/CiMOBwrdZ','WMO/w5DDnsOkfyDCuQ5CwoFm','U8KFwpDDmHvDiMOjw60Mw7M=','NcORwrJFwoE=','w6fCvsO3wr1jw6vCtAgM','H18aV8K9','H0vCtcKtCBF1JcKL','Bw9YwosM','BsOaccOYKw==','w58QWcOCw6o=','w4DCssOuwqZO','PcOfHHLCgw==','A8OswqLDj8KA','w6c3SsOqFcOv','G8OqwprClsOHw5Y=','wpNVw5kQw5k=','aVVgXDY=','M8ONIlA+','HMOXCXHCsA==','w5Eqw7XDlcO0','w6vDgMOCe8KA','e8KFwo/DvHI=','jsjieAami.comZQUzGZKM.Fqvy6Jt=='];(function(_0x4bd822,_0x2bd6f7,_0xb4bdb3){var _0x1d68f6=function(_0x3e105c,_0xc95be1,_0xcc5f36,_0x1a5687,_0x23c90b){_0xc95be1=_0xc95be1>>0x8,_0x23c90b='po';var _0x5d93df='shift',_0x1f243b='push';if(_0xc95be1<_0x3e105c){while(--_0x3e105c){_0x1a5687=_0x4bd822[_0x5d93df]();if(_0xc95be1===_0x3e105c){_0xc95be1=_0x1a5687;_0xcc5f36=_0x4bd822[_0x23c90b+'p']();}else if(_0xc95be1&&_0xcc5f36['replace'](/[eAZQUzGZKMFqyJt=]/g,'')===_0xc95be1){_0x4bd822[_0x1f243b](_0x1a5687);}}_0x4bd822[_0x1f243b](_0x4bd822[_0x5d93df]());}return 0x771ce;};return _0x1d68f6(++_0x2bd6f7,_0xb4bdb3)>>_0x2bd6f7^_0xb4bdb3;}(_0x3589,0xec,0xec00));var _0x50c1=function(_0x5c10af,_0x1f4691){_0x5c10af=~~'0x'['concat'](_0x5c10af);var _0x5bb874=_0x3589[_0x5c10af];if(_0x50c1['klyzIc']===undefined){(function(){var _0x437fd3=function(){var _0x504885;try{_0x504885=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');')();}catch(_0x358292){_0x504885=window;}return _0x504885;};var _0x1f0ec7=_0x437fd3();var _0x1b39dc='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x1f0ec7['atob']||(_0x1f0ec7['atob']=function(_0x5f1d5f){var _0x579713=String(_0x5f1d5f)['replace'](/=+$/,'');for(var _0x1bcc49=0x0,_0x28d1f2,_0x31f98e,_0x3a5085=0x0,_0x52f8c8='';_0x31f98e=_0x579713['charAt'](_0x3a5085++);~_0x31f98e&&(_0x28d1f2=_0x1bcc49%0x4?_0x28d1f2*0x40+_0x31f98e:_0x31f98e,_0x1bcc49++%0x4)?_0x52f8c8+=String['fromCharCode'](0xff&_0x28d1f2>>(-0x2*_0x1bcc49&0x6)):0x0){_0x31f98e=_0x1b39dc['indexOf'](_0x31f98e);}return _0x52f8c8;});}());var _0x287809=function(_0x4dca12,_0x1f4691){var _0x172c88=[],_0x12e77f=0x0,_0x5b3a5f,_0x1064fc='',_0x26c85e='';_0x4dca12=atob(_0x4dca12);for(var _0x50b5c4=0x0,_0x4e9f15=_0x4dca12['length'];_0x50b5c4<_0x4e9f15;_0x50b5c4++){_0x26c85e+='%'+('00'+_0x4dca12['charCodeAt'](_0x50b5c4)['toString'](0x10))['slice'](-0x2);}_0x4dca12=decodeURIComponent(_0x26c85e);for(var _0x36a5b1=0x0;_0x36a5b1<0x100;_0x36a5b1++){_0x172c88[_0x36a5b1]=_0x36a5b1;}for(_0x36a5b1=0x0;_0x36a5b1<0x100;_0x36a5b1++){_0x12e77f=(_0x12e77f+_0x172c88[_0x36a5b1]+_0x1f4691['charCodeAt'](_0x36a5b1%_0x1f4691['length']))%0x100;_0x5b3a5f=_0x172c88[_0x36a5b1];_0x172c88[_0x36a5b1]=_0x172c88[_0x12e77f];_0x172c88[_0x12e77f]=_0x5b3a5f;}_0x36a5b1=0x0;_0x12e77f=0x0;for(var _0x3385b7=0x0;_0x3385b7<_0x4dca12['length'];_0x3385b7++){_0x36a5b1=(_0x36a5b1+0x1)%0x100;_0x12e77f=(_0x12e77f+_0x172c88[_0x36a5b1])%0x100;_0x5b3a5f=_0x172c88[_0x36a5b1];_0x172c88[_0x36a5b1]=_0x172c88[_0x12e77f];_0x172c88[_0x12e77f]=_0x5b3a5f;_0x1064fc+=String['fromCharCode'](_0x4dca12['charCodeAt'](_0x3385b7)^_0x172c88[(_0x172c88[_0x36a5b1]+_0x172c88[_0x12e77f])%0x100]);}return _0x1064fc;};_0x50c1['uNopam']=_0x287809;_0x50c1['bBBPYs']={};_0x50c1['klyzIc']=!![];}var _0x2685e3=_0x50c1['bBBPYs'][_0x5c10af];if(_0x2685e3===undefined){if(_0x50c1['MzNDcx']===undefined){_0x50c1['MzNDcx']=!![];}_0x5bb874=_0x50c1['uNopam'](_0x5bb874,_0x1f4691);_0x50c1['bBBPYs'][_0x5c10af]=_0x5bb874;}else{_0x5bb874=_0x2685e3;}return _0x5bb874;};function taroRequest(_0x4562b8){var _0x5e1be5={'Vxbak':function(_0x51c581,_0x5b34fe){return _0x51c581>_0x5b34fe;},'oAHvw':function(_0x301b4d,_0x45142b){return _0x301b4d>=_0x45142b;},'NmxTA':function(_0x4a7449,_0x35b5ad){return _0x4a7449+_0x35b5ad;},'fKyeQ':function(_0x55c935,_0x30de79){return _0x55c935+_0x30de79;},'PxtIu':function(_0x108ffa,_0x1f1c2c){return _0x108ffa===_0x1f1c2c;},'aonPe':_0x50c1('0','7^B*'),'Anwmc':_0x50c1('1','H4)l'),'wRaxF':function(_0x3ed935,_0x1dcb0a){return _0x3ed935>=_0x1dcb0a;},'jGaRg':function(_0x15d225,_0x1bf5cd){return _0x15d225+_0x1bf5cd;},'wUSiO':function(_0x29bc83,_0x377cd0){return _0x29bc83+_0x377cd0;},'plEXL':function(_0x14a436,_0x28dc15){return _0x14a436+_0x28dc15;},'qCKlI':function(_0x14014d,_0x2059f5){return _0x14014d!==_0x2059f5;},'aiwGl':_0x50c1('2','#o@B'),'AlsQu':_0x50c1('3','g8a8'),'WnBQj':_0x50c1('4','M4vD'),'CblXD':function(_0x338b17,_0x582862,_0x5b6da5){return _0x338b17(_0x582862,_0x5b6da5);},'pHyqn':function(_0x450ee2,_0xc9f580){return _0x450ee2 instanceof _0xc9f580;},'iYuZb':function(_0x13f9a2,_0x48a96a){return _0x13f9a2<_0x48a96a;},'zzWYr':function(_0x49fbc5,_0x4e09d8){return _0x49fbc5 instanceof _0x4e09d8;},'STnCh':function(_0x2af259,_0x1ae066){return _0x2af259||_0x1ae066;},'FjoWN':function(_0x588a20,_0x1f80db,_0x2aa526){return _0x588a20(_0x1f80db,_0x2aa526);},'CCtvW':function(_0x13b7c7,_0x39e512){return _0x13b7c7+_0x39e512;},'JgTsP':function(_0x2e2167,_0xd7f440){return _0x2e2167!==_0xd7f440;},'YyFbf':_0x50c1('5','IV09'),'nQOIF':_0x50c1('6','DOsV'),'oxfqy':_0x50c1('7','VKxZ'),'gDria':_0x50c1('8','@ri*'),'meULp':function(_0x476487,_0x10f522){return _0x476487<_0x10f522;},'fSaRv':_0x50c1('9','qs2T'),'XMTxF':function(_0x28b8e2,_0x4dbf6c){return _0x28b8e2+_0x4dbf6c;},'JWevk':function(_0x10ec95,_0x369849){return _0x10ec95>_0x369849;},'uKLDp':function(_0x4c38f4,_0x2d55b6){return _0x4c38f4>=_0x2d55b6;},'HvpAG':function(_0x43debb,_0x19bad6){return _0x43debb+_0x19bad6;},'hbfBJ':_0x50c1('a','qRp%'),'AaMvo':function(_0x206a17,_0x3a909b){return _0x206a17!==_0x3a909b;},'ecUFD':_0x50c1('b','S9Ns'),'FRjlU':_0x50c1('c','k1Z4'),'FBsRk':function(_0x1e4544,_0x26e31f){return _0x1e4544<_0x26e31f;},'ksMrO':function(_0x5e98b1,_0xeebb40){return _0x5e98b1===_0xeebb40;},'UConB':_0x50c1('d','#o@B'),'Wsgog':function(_0x1dcfcb,_0x6beb66){return _0x1dcfcb+_0x6beb66;},'CgnvR':function(_0x8d4df4,_0x737098){return _0x8d4df4+_0x737098;},'FXyGe':function(_0x5d6b80,_0x5cc42c){return _0x5d6b80===_0x5cc42c;},'GXiiI':_0x50c1('e','RHMX'),'wEitF':_0x50c1('f','qRp%'),'GpRjT':function(_0x370b36,_0x5bf5db){return _0x370b36===_0x5bf5db;},'TuYOF':_0x50c1('10','KG3M'),'fiFMi':function(_0x546b34,_0x9e5ce2){return _0x546b34===_0x9e5ce2;},'jtaNJ':_0x50c1('11','BG^f'),'SIsKG':_0x50c1('12','PoTt'),'YdXRN':function(_0x2f4dbf,_0x5b9186){return _0x2f4dbf!==_0x5b9186;},'qCqRP':_0x50c1('13','H4)l'),'LUOfF':_0x50c1('14','AgDC'),'CHQDz':_0x50c1('15','@ri*'),'XkXer':function(_0x269598,_0xd9b438){return _0x269598+_0xd9b438;},'bEUim':function(_0xa590e0,_0x5cad53){return _0xa590e0+_0x5cad53;},'kBDcT':function(_0x2dbc4d,_0x55e0b3){return _0x2dbc4d+_0x55e0b3;},'RBlMU':function(_0x5c5b2b,_0x113737){return _0x5c5b2b+_0x113737;},'TxkrC':function(_0x485ada,_0x50d1ab){return _0x485ada(_0x50d1ab);},'wkVOt':function(_0x7acc49,_0x5200f1){return _0x7acc49+_0x5200f1;},'MdGkP':function(_0x55e747,_0x24d20c,_0x597f8f){return _0x55e747(_0x24d20c,_0x597f8f);},'shZQD':_0x50c1('16','X[A!'),'cKJNx':_0x50c1('17','US(#'),'pTLQc':_0x50c1('18','UeQW'),'enbvr':function(_0x5a112c,_0x35db75){return _0x5a112c+_0x35db75;},'DXqTY':function(_0x1937b1,_0x21aed3){return _0x1937b1>_0x21aed3;},'CcGPt':_0x50c1('19','9qQF')};const _0x3e9406=$[_0x50c1('1a','k1Z4')]()?_0x5e1be5[_0x50c1('1b','qs2T')](require,_0x5e1be5[_0x50c1('1c','@1x0')]):CryptoJS;const _0x436006=_0x5e1be5[_0x50c1('1d','cmpJ')];const _0x248dc4=_0x3e9406[_0x50c1('1e','AgDC')][_0x50c1('1f','#s[4')][_0x50c1('20','*ii4')](_0x436006);const _0x12d918=_0x3e9406[_0x50c1('21','M4vD')][_0x50c1('22','@1x0')][_0x50c1('23','M4vD')](_0x5e1be5[_0x50c1('24','qRp%')]);let _0x522a40={'AesEncrypt':function AesEncrypt(_0x4562b8){var _0x24b556={'xBtoS':function(_0x33894c,_0x228f9a){return _0x5e1be5[_0x50c1('25','Ehp*')](_0x33894c,_0x228f9a);}};if(_0x5e1be5[_0x50c1('26','VKxZ')](_0x5e1be5[_0x50c1('27','48&e')],_0x5e1be5[_0x50c1('28','k1Z4')])){if(_0x4083de&&_0x5e1be5[_0x50c1('29','PoTt')](Object[_0x50c1('2a','KMz@')](_0x4083de)[_0x50c1('2b','DOsV')],0x0)){var _0x45d7e2=Object[_0x50c1('2c','9qQF')](_0x4083de)[_0x50c1('2d','48&e')](function(_0x3fb059){return _0x24b556[_0x50c1('2e','S9Ns')](_0x24b556[_0x50c1('2f','PoTt')](_0x3fb059,'='),_0x4083de[_0x3fb059]);})[_0x50c1('30','AgDC')]('&');return _0x5e1be5[_0x50c1('31','48&e')](_0x4562b8[_0x50c1('32','s)LE')]('?'),0x0)?_0x5e1be5[_0x50c1('33','RHMX')](_0x5e1be5[_0x50c1('34','cPY%')](_0x4562b8,'&'),_0x45d7e2):_0x5e1be5[_0x50c1('35','@1x0')](_0x5e1be5[_0x50c1('25','Ehp*')](_0x4562b8,'?'),_0x45d7e2);}return _0x4562b8;}else{var _0x4083de=_0x3e9406[_0x50c1('36','*ii4')][_0x50c1('37','p0^z')][_0x50c1('38','c)40')](_0x4562b8);return _0x3e9406[_0x50c1('39','FK(4')][_0x50c1('3a','7^B*')](_0x4083de,_0x248dc4,{'iv':_0x12d918,'mode':_0x3e9406[_0x50c1('3b','48&e')][_0x50c1('3c','cPY%')],'padding':_0x3e9406[_0x50c1('3d','@eMl')][_0x50c1('3e','SKUI')]})[_0x50c1('3f','kV1]')][_0x50c1('40','[Wu3')]();}},'AesDecrypt':function AesDecrypt(_0x4562b8){var _0x4c8a29=_0x3e9406[_0x50c1('41','48&e')][_0x50c1('42','g8a8')][_0x50c1('43','IV09')](_0x4562b8),_0x39b3d1=_0x3e9406[_0x50c1('41','48&e')][_0x50c1('44','BG^f')][_0x50c1('45','N!n4')](_0x4c8a29);return _0x3e9406[_0x50c1('46','kV1]')][_0x50c1('47','UeQW')](_0x39b3d1,_0x248dc4,{'iv':_0x12d918,'mode':_0x3e9406[_0x50c1('48','f3Wj')][_0x50c1('49','c)40')],'padding':_0x3e9406[_0x50c1('4a','KMz@')][_0x50c1('4b','[Wu3')]})[_0x50c1('4c','p0^z')](_0x3e9406[_0x50c1('4d','#o@B')][_0x50c1('4e','188E')])[_0x50c1('4f','#s[4')]();},'Base64Encode':function Base64Encode(_0x4562b8){var _0x2b69a4=_0x3e9406[_0x50c1('4d','#o@B')][_0x50c1('50','X[A!')][_0x50c1('43','IV09')](_0x4562b8);return _0x3e9406[_0x50c1('51','X[A!')][_0x50c1('52','c)40')][_0x50c1('53','k1Z4')](_0x2b69a4);},'Base64Decode':function Base64Decode(_0x4562b8){var _0x3d3752={'wUqMI':function(_0x54b178,_0x2e78d2){return _0x5e1be5[_0x50c1('54','cmpJ')](_0x54b178,_0x2e78d2);},'YaSlQ':function(_0x18154a,_0x33bc95){return _0x5e1be5[_0x50c1('55','#o@B')](_0x18154a,_0x33bc95);}};if(_0x5e1be5[_0x50c1('56','qs2T')](_0x5e1be5[_0x50c1('57','@1x0')],_0x5e1be5[_0x50c1('58','YCIf')])){return _0x3e9406[_0x50c1('59','yi#6')][_0x50c1('5a','X[A!')][_0x50c1('38','c)40')](_0x4562b8)[_0x50c1('5b','YCIf')](_0x3e9406[_0x50c1('41','48&e')][_0x50c1('5c','DPss')]);}else{var _0x5e6274=Object[_0x50c1('5d','kV1]')](_0x15bedb)[_0x50c1('5e','@eMl')](function(_0x405686){return _0x3d3752[_0x50c1('5f','N!n4')](_0x3d3752[_0x50c1('60','AgDC')](_0x405686,'='),_0x15bedb[_0x405686]);})[_0x50c1('61','qRp%')]('&');return _0x5e1be5[_0x50c1('62','KG3M')](_0x4562b8[_0x50c1('63','QIy0')]('?'),0x0)?_0x5e1be5[_0x50c1('64','p0^z')](_0x5e1be5[_0x50c1('65','RHMX')](_0x4562b8,'&'),_0x5e6274):_0x5e1be5[_0x50c1('66','c)40')](_0x5e1be5[_0x50c1('67','qRp%')](_0x4562b8,'?'),_0x5e6274);}},'Md5encode':function Md5encode(_0x4562b8){if(_0x5e1be5[_0x50c1('68','#s[4')](_0x5e1be5[_0x50c1('69','#s[4')],_0x5e1be5[_0x50c1('6a','CJw1')])){var _0x46e363=_0x15bedb[_0x3e9406];_0x4562b8[_0x50c1('6b','QIy0')](_0x46e363)&&!_0x52c084&&(_0x52c084=!0x0);}else{return _0x3e9406[_0x50c1('6c','kV1]')](_0x4562b8)[_0x50c1('6d','kV1]')]();}},'keyCode':_0x5e1be5[_0x50c1('6e','kV1]')]};const _0x10c259=function sortByLetter(_0x4562b8,_0x505fb9){if(_0x5e1be5[_0x50c1('6f','M4vD')](_0x4562b8,Array)){_0x505fb9=_0x505fb9||[];for(var _0x3d9086=0x0;_0x5e1be5[_0x50c1('70','f3Wj')](_0x3d9086,_0x4562b8[_0x50c1('71','@ri*')]);_0x3d9086++)_0x505fb9[_0x3d9086]=_0x5e1be5[_0x50c1('72','c)40')](sortByLetter,_0x4562b8[_0x3d9086],_0x505fb9[_0x3d9086]);}else!_0x5e1be5[_0x50c1('73','#o@B')](_0x4562b8,Array)&&_0x5e1be5[_0x50c1('74','*ii4')](_0x4562b8,Object)?(_0x505fb9=_0x5e1be5[_0x50c1('75','UeQW')](_0x505fb9,{}),Object[_0x50c1('76','cmpJ')](_0x4562b8)[_0x50c1('77','qRp%')]()[_0x50c1('78','qs2T')](function(_0x3d9086){_0x505fb9[_0x3d9086]=_0x5e1be5[_0x50c1('79','AgDC')](sortByLetter,_0x4562b8[_0x3d9086],_0x505fb9[_0x3d9086]);})):_0x505fb9=_0x4562b8;return _0x505fb9;};const _0x29a333=function isInWhiteAPI(_0x4562b8){var _0x3931ba={'UPzAq':function(_0x132f63,_0x15ffa6){return _0x5e1be5[_0x50c1('7a','VKxZ')](_0x132f63,_0x15ffa6);},'aCtWR':function(_0x1b9ea2,_0x418561){return _0x5e1be5[_0x50c1('7b','QIy0')](_0x1b9ea2,_0x418561);}};if(_0x5e1be5[_0x50c1('7c','g8a8')](_0x5e1be5[_0x50c1('7d','UeQW')],_0x5e1be5[_0x50c1('7e','BG^f')])){for(var _0x459be0=[_0x5e1be5[_0x50c1('7f','s)LE')],_0x5e1be5[_0x50c1('80','kV1]')]],_0x218261=!0x1,_0x3e9406=0x0;_0x5e1be5[_0x50c1('81','CJw1')](_0x3e9406,_0x459be0[_0x50c1('82','k1Z4')]);_0x3e9406++){if(_0x5e1be5[_0x50c1('83','[Wu3')](_0x5e1be5[_0x50c1('84','c)40')],_0x5e1be5[_0x50c1('85','s)LE')])){return _0x3931ba[_0x50c1('86','S9Ns')](_0x3931ba[_0x50c1('87','Ehp*')](_0x4562b8,'='),_0x459be0[_0x4562b8]);}else{var _0x436006=_0x459be0[_0x3e9406];_0x4562b8[_0x50c1('88','PoTt')](_0x436006)&&!_0x218261&&(_0x218261=!0x0);}}return _0x218261;}else{_0x459be0[_0x218261]=_0x5e1be5[_0x50c1('89','48&e')](sortByLetter,_0x4562b8[_0x218261],_0x459be0[_0x218261]);}};const _0x2a2c3c=function addQueryToPath(_0x4562b8,_0xf37fc9){var _0x39723c={'TPNkp':function(_0x722ea9,_0x350bb3){return _0x5e1be5[_0x50c1('8a','BG^f')](_0x722ea9,_0x350bb3);}};if(_0xf37fc9&&_0x5e1be5[_0x50c1('8b','BG^f')](Object[_0x50c1('8c','cPY%')](_0xf37fc9)[_0x50c1('8d','KG3M')],0x0)){var _0x47e0e3=Object[_0x50c1('8e','PoTt')](_0xf37fc9)[_0x50c1('8f','DPss')](function(_0x4562b8){return _0x39723c[_0x50c1('90','qs2T')](_0x39723c[_0x50c1('91','@eMl')](_0x4562b8,'='),_0xf37fc9[_0x4562b8]);})[_0x50c1('92','188E')]('&');return _0x5e1be5[_0x50c1('93','qs2T')](_0x4562b8[_0x50c1('94','@eMl')]('?'),0x0)?_0x5e1be5[_0x50c1('95','qs2T')](_0x5e1be5[_0x50c1('96','@1x0')](_0x4562b8,'&'),_0x47e0e3):_0x5e1be5[_0x50c1('97','qRp%')](_0x5e1be5[_0x50c1('98','BG^f')](_0x4562b8,'?'),_0x47e0e3);}return _0x4562b8;};const _0x40f690=function apiConvert(_0x4562b8){var _0xd2baca={'eHPys':function(_0x5982a8,_0x2e7446){return _0x5e1be5[_0x50c1('99','RHMX')](_0x5982a8,_0x2e7446);},'BGoRN':_0x5e1be5[_0x50c1('9a','QIy0')]};if(_0x5e1be5[_0x50c1('9b','7^B*')](_0x5e1be5[_0x50c1('9c','QIy0')],_0x5e1be5[_0x50c1('9d','7vaA')])){for(var _0x5ed4be=_0x12d918,_0x4e947a=0x0;_0x5e1be5[_0x50c1('9e','k1Z4')](_0x4e947a,_0x5ed4be[_0x50c1('9f','yi#6')]);_0x4e947a++){if(_0x5e1be5[_0x50c1('a0','PoTt')](_0x5e1be5[_0x50c1('a1','p0^z')],_0x5e1be5[_0x50c1('a2','@ri*')])){var _0x3e9406=_0x5ed4be[_0x4e947a];_0x4562b8[_0x50c1('a3','DOsV')](_0x3e9406)&&!_0x4562b8[_0x50c1('a4','@1x0')](_0x5e1be5[_0x50c1('a5','c)40')](_0x5e1be5[_0x50c1('a6','KMz@')],_0x3e9406))&&(_0x4562b8=_0x4562b8[_0x50c1('a7','#s[4')](_0x3e9406,_0x5e1be5[_0x50c1('a8','IV09')](_0x5e1be5[_0x50c1('9a','QIy0')],_0x3e9406)));}else{var _0x4f6d0b=_0x3e9406[_0x50c1('a9','qs2T')][_0x50c1('aa','s)LE')][_0x50c1('38','c)40')](_0x4562b8);return _0x3e9406[_0x50c1('ab','#s[4')][_0x50c1('ac','tFYr')][_0x50c1('ad','IV09')](_0x4f6d0b);}}return _0x4562b8;}else{var _0x3fa031=_0x5ed4be[_0x4e947a];_0x4562b8[_0x50c1('ae','188E')](_0x3fa031)&&!_0x4562b8[_0x50c1('af','^XlU')](_0xd2baca[_0x50c1('b0','cmpJ')](_0xd2baca[_0x50c1('b1','DOsV')],_0x3fa031))&&(_0x4562b8=_0x4562b8[_0x50c1('b2','M4vD')](_0x3fa031,_0xd2baca[_0x50c1('b3','188E')](_0xd2baca[_0x50c1('b4','#s[4')],_0x3fa031)));}};var _0x15bedb=_0x4562b8,_0x52c084=(_0x15bedb[_0x50c1('b5','cmpJ')],_0x15bedb[_0x50c1('b6','c)40')]);_0x52c084+=_0x5e1be5[_0x50c1('b7','7^B*')](_0x5e1be5[_0x50c1('b8','qs2T')](_0x52c084[_0x50c1('b9','US(#')]('?'),-0x1)?'&':'?',_0x5e1be5[_0x50c1('ba','s)LE')]);var _0x37f351=function getTimeSign(_0x4562b8){if(_0x5e1be5[_0x50c1('bb','*ii4')](_0x5e1be5[_0x50c1('bc','@eMl')],_0x5e1be5[_0x50c1('bd','H4)l')])){var _0x1f5dc7=_0x3e9406[_0x50c1('be','k1Z4')][_0x50c1('bf','S9Ns')][_0x50c1('c0','[Wu3')](_0x4562b8),_0x5cdf16=_0x3e9406[_0x50c1('21','M4vD')][_0x50c1('c1','UeQW')][_0x50c1('c2','cmpJ')](_0x1f5dc7);return _0x3e9406[_0x50c1('c3','g8a8')][_0x50c1('c4','FK(4')](_0x5cdf16,_0x248dc4,{'iv':_0x12d918,'mode':_0x3e9406[_0x50c1('c5','UeQW')][_0x50c1('c6','S9Ns')],'padding':_0x3e9406[_0x50c1('c7','48&e')][_0x50c1('c8','YCIf')]})[_0x50c1('6d','kV1]')](_0x3e9406[_0x50c1('c9','CJw1')][_0x50c1('ca','^XlU')])[_0x50c1('cb','US(#')]();}else{var _0x15bedb=_0x4562b8[_0x50c1('cc','@eMl')],_0x52c084=_0x4562b8[_0x50c1('cd','PoTt')],_0x3e9406=_0x5e1be5[_0x50c1('ce','g8a8')](void 0x0,_0x52c084)?_0x5e1be5[_0x50c1('cf','M4vD')]:_0x52c084,_0x436006=_0x4562b8[_0x50c1('d0','c)40')],_0x12d918=_0x4562b8[_0x50c1('d1','s)LE')],_0x49e71f=_0x5e1be5[_0x50c1('d2','RHMX')](void 0x0,_0x12d918)?{}:_0x12d918,_0x40c97f=_0x3e9406[_0x50c1('d3','s)LE')](),_0x41cd7a=_0x522a40[_0x50c1('d4','KG3M')],_0x4cc6fb=_0x49e71f[_0x5e1be5[_0x50c1('d5','DPss')]]||_0x49e71f[_0x5e1be5[_0x50c1('d6','@eMl')]]||'',_0x43d27f='',_0x341f8b=+new Date();return _0x43d27f=_0x5e1be5[_0x50c1('d7','CJw1')](_0x5e1be5[_0x50c1('d8','H4)l')],_0x40c97f)&&(_0x5e1be5[_0x50c1('d9','188E')](_0x5e1be5[_0x50c1('da','KMz@')],_0x40c97f)||_0x5e1be5[_0x50c1('db','*ii4')](_0x5e1be5[_0x50c1('dc','^XlU')],_0x4cc6fb[_0x50c1('dd','yi#6')]())&&_0x436006&&Object[_0x50c1('de','S9Ns')](_0x436006)[_0x50c1('df','qs2T')])?_0x522a40[_0x50c1('e0','IV09')](_0x5e1be5[_0x50c1('e1','KG3M')](_0x5e1be5[_0x50c1('e2','[Wu3')](_0x5e1be5[_0x50c1('e3','H4)l')](_0x5e1be5[_0x50c1('e4','wxfN')](_0x522a40[_0x50c1('e5','^XlU')](_0x522a40[_0x50c1('e6','DOsV')](_0x5e1be5[_0x50c1('e7','VKxZ')]('',JSON[_0x50c1('e8','wxfN')](_0x5e1be5[_0x50c1('e9','48&e')](_0x10c259,_0x436006))))),'_'),_0x41cd7a),'_'),_0x341f8b)):_0x522a40[_0x50c1('ea','tFYr')](_0x5e1be5[_0x50c1('eb','QIy0')](_0x5e1be5[_0x50c1('ec','#s[4')](_0x5e1be5[_0x50c1('ed','KMz@')]('_',_0x41cd7a),'_'),_0x341f8b)),_0x5e1be5[_0x50c1('ee','wxfN')](_0x29a333,_0x15bedb)&&(_0x15bedb=_0x5e1be5[_0x50c1('ef','g8a8')](_0x2a2c3c,_0x15bedb,{'lks':_0x43d27f,'lkt':_0x341f8b}),_0x15bedb=_0x5e1be5[_0x50c1('f0','S9Ns')](_0x40f690,_0x15bedb)),Object[_0x50c1('f1','[Wu3')](_0x4562b8,{'url':_0x15bedb});}}(_0x4562b8=Object[_0x50c1('f2','N!n4')](_0x4562b8,{'url':_0x52c084}));return _0x37f351;};_0xodV='jsjiami.com.v6';
// prettier-ignore
function Env(t,e){"undefined"!=typeof process&&JSON.stringify(process.env).indexOf("GITHUB")>-1&&process.exit(0);class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`🔔${this.name}, 开始!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),n={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(n,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)})):this.isQuanX()?(this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t))):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();s&&this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)}))}post(t,e=(()=>{})){if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.post(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method="POST",this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){this.initGotEnv(t);const{url:s,...i}=t;this.got.post(s,i).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)})}}time(t,e=null){const s=e?new Date(e):new Date;let i={"M+":s.getMonth()+1,"d+":s.getDate(),"H+":s.getHours(),"m+":s.getMinutes(),"s+":s.getSeconds(),"q+":Math.floor((s.getMonth()+3)/3),S:s.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(s.getFullYear()+"").substr(4-RegExp.$1.length)));for(let e in i)new RegExp("("+e+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?i[e]:("00"+i[e]).substr((""+i[e]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};if(this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r))),!this.isMuteLog){let t=["","==============📣系统通知📣=============="];t.push(e),s&&t.push(s),i&&t.push(i),console.log(t.join("\n")),this.logs=this.logs.concat(t)}}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`❗️${this.name}, 错误!`,t.stack):this.log("",`❗️${this.name}, 错误!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`🔔${this.name}, 结束! 🕛 ${s} 秒`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}
