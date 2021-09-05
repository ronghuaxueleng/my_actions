/*
京喜财富岛
cron 5 * * * * jd_cfd.js
更新时间：2021-7-13
活动入口：京喜APP-我的-京喜财富岛

已支持IOS双京东账号,Node.js支持N个京东账号
脚本兼容: QuantumultX, Surge, Loon, JSBox, Node.js
============Quantumultx===============
[task_local]
#京喜财富岛
5 * * * * https://raw.githubusercontent.com/Aaron-lv/sync/jd_scripts/jd_cfd.js, tag=京喜财富岛, img-url=https://raw.githubusercontent.com/58xinian/icon/master/jxcfd.png, enabled=true

================Loon==============
[Script]
cron "5 * * * *" script-path=https://raw.githubusercontent.com/Aaron-lv/sync/jd_scripts/jd_cfd.js,tag=京喜财富岛

===============Surge=================
京喜财富岛 = type=cron,cronexp="5 * * * *",wake-system=1,timeout=3600,script-path=https://raw.githubusercontent.com/Aaron-lv/sync/jd_scripts/jd_cfd.js

============小火箭=========
京喜财富岛 = type=cron,script-path=https://raw.githubusercontent.com/Aaron-lv/sync/jd_scripts/jd_cfd.js, cronexpr="5 * * * *", timeout=3600, enable=true
 */
!function (t, r) { "object" == typeof exports ? module.exports = exports = r() : "function" == typeof define && define.amd ? define([], r) : t.CryptoJS = r() }(this, function () {
  var t = t || function (t, r) { var e = Object.create || function () { function t() { } return function (r) { var e; return t.prototype = r, e = new t, t.prototype = null, e } }(), i = {}, n = i.lib = {}, o = n.Base = function () { return { extend: function (t) { var r = e(this); return t && r.mixIn(t), r.hasOwnProperty("init") && this.init !== r.init || (r.init = function () { r.$super.init.apply(this, arguments) }), r.init.prototype = r, r.$super = this, r }, create: function () { var t = this.extend(); return t.init.apply(t, arguments), t }, init: function () { }, mixIn: function (t) { for (var r in t) t.hasOwnProperty(r) && (this[r] = t[r]); t.hasOwnProperty("toString") && (this.toString = t.toString) }, clone: function () { return this.init.prototype.extend(this) } } }(), s = n.WordArray = o.extend({ init: function (t, e) { t = this.words = t || [], e != r ? this.sigBytes = e : this.sigBytes = 4 * t.length }, toString: function (t) { return (t || c).stringify(this) }, concat: function (t) { var r = this.words, e = t.words, i = this.sigBytes, n = t.sigBytes; if (this.clamp(), i % 4) for (var o = 0; o < n; o++) { var s = e[o >>> 2] >>> 24 - o % 4 * 8 & 255; r[i + o >>> 2] |= s << 24 - (i + o) % 4 * 8 } else for (var o = 0; o < n; o += 4)r[i + o >>> 2] = e[o >>> 2]; return this.sigBytes += n, this }, clamp: function () { var r = this.words, e = this.sigBytes; r[e >>> 2] &= 4294967295 << 32 - e % 4 * 8, r.length = t.ceil(e / 4) }, clone: function () { var t = o.clone.call(this); return t.words = this.words.slice(0), t }, random: function (r) { for (var e, i = [], n = function (r) { var r = r, e = 987654321, i = 4294967295; return function () { e = 36969 * (65535 & e) + (e >> 16) & i, r = 18e3 * (65535 & r) + (r >> 16) & i; var n = (e << 16) + r & i; return n /= 4294967296, n += .5, n * (t.random() > .5 ? 1 : -1) } }, o = 0; o < r; o += 4) { var a = n(4294967296 * (e || t.random())); e = 987654071 * a(), i.push(4294967296 * a() | 0) } return new s.init(i, r) } }), a = i.enc = {}, c = a.Hex = { stringify: function (t) { for (var r = t.words, e = t.sigBytes, i = [], n = 0; n < e; n++) { var o = r[n >>> 2] >>> 24 - n % 4 * 8 & 255; i.push((o >>> 4).toString(16)), i.push((15 & o).toString(16)) } return i.join("") }, parse: function (t) { for (var r = t.length, e = [], i = 0; i < r; i += 2)e[i >>> 3] |= parseInt(t.substr(i, 2), 16) << 24 - i % 8 * 4; return new s.init(e, r / 2) } }, h = a.Latin1 = { stringify: function (t) { for (var r = t.words, e = t.sigBytes, i = [], n = 0; n < e; n++) { var o = r[n >>> 2] >>> 24 - n % 4 * 8 & 255; i.push(String.fromCharCode(o)) } return i.join("") }, parse: function (t) { for (var r = t.length, e = [], i = 0; i < r; i++)e[i >>> 2] |= (255 & t.charCodeAt(i)) << 24 - i % 4 * 8; return new s.init(e, r) } }, l = a.Utf8 = { stringify: function (t) { try { return decodeURIComponent(escape(h.stringify(t))) } catch (t) { throw new Error("Malformed UTF-8 data") } }, parse: function (t) { return h.parse(unescape(encodeURIComponent(t))) } }, f = n.BufferedBlockAlgorithm = o.extend({ reset: function () { this._data = new s.init, this._nDataBytes = 0 }, _append: function (t) { "string" == typeof t && (t = l.parse(t)), this._data.concat(t), this._nDataBytes += t.sigBytes }, _process: function (r) { var e = this._data, i = e.words, n = e.sigBytes, o = this.blockSize, a = 4 * o, c = n / a; c = r ? t.ceil(c) : t.max((0 | c) - this._minBufferSize, 0); var h = c * o, l = t.min(4 * h, n); if (h) { for (var f = 0; f < h; f += o)this._doProcessBlock(i, f); var u = i.splice(0, h); e.sigBytes -= l } return new s.init(u, l) }, clone: function () { var t = o.clone.call(this); return t._data = this._data.clone(), t }, _minBufferSize: 0 }), u = (n.Hasher = f.extend({ cfg: o.extend(), init: function (t) { this.cfg = this.cfg.extend(t), this.reset() }, reset: function () { f.reset.call(this), this._doReset() }, update: function (t) { return this._append(t), this._process(), this }, finalize: function (t) { t && this._append(t); var r = this._doFinalize(); return r }, blockSize: 16, _createHelper: function (t) { return function (r, e) { return new t.init(e).finalize(r) } }, _createHmacHelper: function (t) { return function (r, e) { return new u.HMAC.init(t, e).finalize(r) } } }), i.algo = {}); return i }(Math); return function () { function r(t, r, e) { for (var i = [], o = 0, s = 0; s < r; s++)if (s % 4) { var a = e[t.charCodeAt(s - 1)] << s % 4 * 2, c = e[t.charCodeAt(s)] >>> 6 - s % 4 * 2; i[o >>> 2] |= (a | c) << 24 - o % 4 * 8, o++ } return n.create(i, o) } var e = t, i = e.lib, n = i.WordArray, o = e.enc; o.Base64 = { stringify: function (t) { var r = t.words, e = t.sigBytes, i = this._map; t.clamp(); for (var n = [], o = 0; o < e; o += 3)for (var s = r[o >>> 2] >>> 24 - o % 4 * 8 & 255, a = r[o + 1 >>> 2] >>> 24 - (o + 1) % 4 * 8 & 255, c = r[o + 2 >>> 2] >>> 24 - (o + 2) % 4 * 8 & 255, h = s << 16 | a << 8 | c, l = 0; l < 4 && o + .75 * l < e; l++)n.push(i.charAt(h >>> 6 * (3 - l) & 63)); var f = i.charAt(64); if (f) for (; n.length % 4;)n.push(f); return n.join("") }, parse: function (t) { var e = t.length, i = this._map, n = this._reverseMap; if (!n) { n = this._reverseMap = []; for (var o = 0; o < i.length; o++)n[i.charCodeAt(o)] = o } var s = i.charAt(64); if (s) { var a = t.indexOf(s); a !== -1 && (e = a) } return r(t, e, n) }, _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=" } }(), function (r) { function e(t, r, e, i, n, o, s) { var a = t + (r & e | ~r & i) + n + s; return (a << o | a >>> 32 - o) + r } function i(t, r, e, i, n, o, s) { var a = t + (r & i | e & ~i) + n + s; return (a << o | a >>> 32 - o) + r } function n(t, r, e, i, n, o, s) { var a = t + (r ^ e ^ i) + n + s; return (a << o | a >>> 32 - o) + r } function o(t, r, e, i, n, o, s) { var a = t + (e ^ (r | ~i)) + n + s; return (a << o | a >>> 32 - o) + r } var s = t, a = s.lib, c = a.WordArray, h = a.Hasher, l = s.algo, f = []; !function () { for (var t = 0; t < 64; t++)f[t] = 4294967296 * r.abs(r.sin(t + 1)) | 0 }(); var u = l.MD5 = h.extend({ _doReset: function () { this._hash = new c.init([1732584193, 4023233417, 2562383102, 271733878]) }, _doProcessBlock: function (t, r) { for (var s = 0; s < 16; s++) { var a = r + s, c = t[a]; t[a] = 16711935 & (c << 8 | c >>> 24) | 4278255360 & (c << 24 | c >>> 8) } var h = this._hash.words, l = t[r + 0], u = t[r + 1], d = t[r + 2], v = t[r + 3], p = t[r + 4], _ = t[r + 5], y = t[r + 6], g = t[r + 7], B = t[r + 8], w = t[r + 9], k = t[r + 10], S = t[r + 11], m = t[r + 12], x = t[r + 13], b = t[r + 14], H = t[r + 15], z = h[0], A = h[1], C = h[2], D = h[3]; z = e(z, A, C, D, l, 7, f[0]), D = e(D, z, A, C, u, 12, f[1]), C = e(C, D, z, A, d, 17, f[2]), A = e(A, C, D, z, v, 22, f[3]), z = e(z, A, C, D, p, 7, f[4]), D = e(D, z, A, C, _, 12, f[5]), C = e(C, D, z, A, y, 17, f[6]), A = e(A, C, D, z, g, 22, f[7]), z = e(z, A, C, D, B, 7, f[8]), D = e(D, z, A, C, w, 12, f[9]), C = e(C, D, z, A, k, 17, f[10]), A = e(A, C, D, z, S, 22, f[11]), z = e(z, A, C, D, m, 7, f[12]), D = e(D, z, A, C, x, 12, f[13]), C = e(C, D, z, A, b, 17, f[14]), A = e(A, C, D, z, H, 22, f[15]), z = i(z, A, C, D, u, 5, f[16]), D = i(D, z, A, C, y, 9, f[17]), C = i(C, D, z, A, S, 14, f[18]), A = i(A, C, D, z, l, 20, f[19]), z = i(z, A, C, D, _, 5, f[20]), D = i(D, z, A, C, k, 9, f[21]), C = i(C, D, z, A, H, 14, f[22]), A = i(A, C, D, z, p, 20, f[23]), z = i(z, A, C, D, w, 5, f[24]), D = i(D, z, A, C, b, 9, f[25]), C = i(C, D, z, A, v, 14, f[26]), A = i(A, C, D, z, B, 20, f[27]), z = i(z, A, C, D, x, 5, f[28]), D = i(D, z, A, C, d, 9, f[29]), C = i(C, D, z, A, g, 14, f[30]), A = i(A, C, D, z, m, 20, f[31]), z = n(z, A, C, D, _, 4, f[32]), D = n(D, z, A, C, B, 11, f[33]), C = n(C, D, z, A, S, 16, f[34]), A = n(A, C, D, z, b, 23, f[35]), z = n(z, A, C, D, u, 4, f[36]), D = n(D, z, A, C, p, 11, f[37]), C = n(C, D, z, A, g, 16, f[38]), A = n(A, C, D, z, k, 23, f[39]), z = n(z, A, C, D, x, 4, f[40]), D = n(D, z, A, C, l, 11, f[41]), C = n(C, D, z, A, v, 16, f[42]), A = n(A, C, D, z, y, 23, f[43]), z = n(z, A, C, D, w, 4, f[44]), D = n(D, z, A, C, m, 11, f[45]), C = n(C, D, z, A, H, 16, f[46]), A = n(A, C, D, z, d, 23, f[47]), z = o(z, A, C, D, l, 6, f[48]), D = o(D, z, A, C, g, 10, f[49]), C = o(C, D, z, A, b, 15, f[50]), A = o(A, C, D, z, _, 21, f[51]), z = o(z, A, C, D, m, 6, f[52]), D = o(D, z, A, C, v, 10, f[53]), C = o(C, D, z, A, k, 15, f[54]), A = o(A, C, D, z, u, 21, f[55]), z = o(z, A, C, D, B, 6, f[56]), D = o(D, z, A, C, H, 10, f[57]), C = o(C, D, z, A, y, 15, f[58]), A = o(A, C, D, z, x, 21, f[59]), z = o(z, A, C, D, p, 6, f[60]), D = o(D, z, A, C, S, 10, f[61]), C = o(C, D, z, A, d, 15, f[62]), A = o(A, C, D, z, w, 21, f[63]), h[0] = h[0] + z | 0, h[1] = h[1] + A | 0, h[2] = h[2] + C | 0, h[3] = h[3] + D | 0 }, _doFinalize: function () { var t = this._data, e = t.words, i = 8 * this._nDataBytes, n = 8 * t.sigBytes; e[n >>> 5] |= 128 << 24 - n % 32; var o = r.floor(i / 4294967296), s = i; e[(n + 64 >>> 9 << 4) + 15] = 16711935 & (o << 8 | o >>> 24) | 4278255360 & (o << 24 | o >>> 8), e[(n + 64 >>> 9 << 4) + 14] = 16711935 & (s << 8 | s >>> 24) | 4278255360 & (s << 24 | s >>> 8), t.sigBytes = 4 * (e.length + 1), this._process(); for (var a = this._hash, c = a.words, h = 0; h < 4; h++) { var l = c[h]; c[h] = 16711935 & (l << 8 | l >>> 24) | 4278255360 & (l << 24 | l >>> 8) } return a }, clone: function () { var t = h.clone.call(this); return t._hash = this._hash.clone(), t } }); s.MD5 = h._createHelper(u), s.HmacMD5 = h._createHmacHelper(u) }(Math), function () { var r = t, e = r.lib, i = e.WordArray, n = e.Hasher, o = r.algo, s = [], a = o.SHA1 = n.extend({ _doReset: function () { this._hash = new i.init([1732584193, 4023233417, 2562383102, 271733878, 3285377520]) }, _doProcessBlock: function (t, r) { for (var e = this._hash.words, i = e[0], n = e[1], o = e[2], a = e[3], c = e[4], h = 0; h < 80; h++) { if (h < 16) s[h] = 0 | t[r + h]; else { var l = s[h - 3] ^ s[h - 8] ^ s[h - 14] ^ s[h - 16]; s[h] = l << 1 | l >>> 31 } var f = (i << 5 | i >>> 27) + c + s[h]; f += h < 20 ? (n & o | ~n & a) + 1518500249 : h < 40 ? (n ^ o ^ a) + 1859775393 : h < 60 ? (n & o | n & a | o & a) - 1894007588 : (n ^ o ^ a) - 899497514, c = a, a = o, o = n << 30 | n >>> 2, n = i, i = f } e[0] = e[0] + i | 0, e[1] = e[1] + n | 0, e[2] = e[2] + o | 0, e[3] = e[3] + a | 0, e[4] = e[4] + c | 0 }, _doFinalize: function () { var t = this._data, r = t.words, e = 8 * this._nDataBytes, i = 8 * t.sigBytes; return r[i >>> 5] |= 128 << 24 - i % 32, r[(i + 64 >>> 9 << 4) + 14] = Math.floor(e / 4294967296), r[(i + 64 >>> 9 << 4) + 15] = e, t.sigBytes = 4 * r.length, this._process(), this._hash }, clone: function () { var t = n.clone.call(this); return t._hash = this._hash.clone(), t } }); r.SHA1 = n._createHelper(a), r.HmacSHA1 = n._createHmacHelper(a) }(), function (r) { var e = t, i = e.lib, n = i.WordArray, o = i.Hasher, s = e.algo, a = [], c = []; !function () { function t(t) { for (var e = r.sqrt(t), i = 2; i <= e; i++)if (!(t % i)) return !1; return !0 } function e(t) { return 4294967296 * (t - (0 | t)) | 0 } for (var i = 2, n = 0; n < 64;)t(i) && (n < 8 && (a[n] = e(r.pow(i, .5))), c[n] = e(r.pow(i, 1 / 3)), n++), i++ }(); var h = [], l = s.SHA256 = o.extend({ _doReset: function () { this._hash = new n.init(a.slice(0)) }, _doProcessBlock: function (t, r) { for (var e = this._hash.words, i = e[0], n = e[1], o = e[2], s = e[3], a = e[4], l = e[5], f = e[6], u = e[7], d = 0; d < 64; d++) { if (d < 16) h[d] = 0 | t[r + d]; else { var v = h[d - 15], p = (v << 25 | v >>> 7) ^ (v << 14 | v >>> 18) ^ v >>> 3, _ = h[d - 2], y = (_ << 15 | _ >>> 17) ^ (_ << 13 | _ >>> 19) ^ _ >>> 10; h[d] = p + h[d - 7] + y + h[d - 16] } var g = a & l ^ ~a & f, B = i & n ^ i & o ^ n & o, w = (i << 30 | i >>> 2) ^ (i << 19 | i >>> 13) ^ (i << 10 | i >>> 22), k = (a << 26 | a >>> 6) ^ (a << 21 | a >>> 11) ^ (a << 7 | a >>> 25), S = u + k + g + c[d] + h[d], m = w + B; u = f, f = l, l = a, a = s + S | 0, s = o, o = n, n = i, i = S + m | 0 } e[0] = e[0] + i | 0, e[1] = e[1] + n | 0, e[2] = e[2] + o | 0, e[3] = e[3] + s | 0, e[4] = e[4] + a | 0, e[5] = e[5] + l | 0, e[6] = e[6] + f | 0, e[7] = e[7] + u | 0 }, _doFinalize: function () { var t = this._data, e = t.words, i = 8 * this._nDataBytes, n = 8 * t.sigBytes; return e[n >>> 5] |= 128 << 24 - n % 32, e[(n + 64 >>> 9 << 4) + 14] = r.floor(i / 4294967296), e[(n + 64 >>> 9 << 4) + 15] = i, t.sigBytes = 4 * e.length, this._process(), this._hash }, clone: function () { var t = o.clone.call(this); return t._hash = this._hash.clone(), t } }); e.SHA256 = o._createHelper(l), e.HmacSHA256 = o._createHmacHelper(l) }(Math), function () { function r(t) { return t << 8 & 4278255360 | t >>> 8 & 16711935 } var e = t, i = e.lib, n = i.WordArray, o = e.enc; o.Utf16 = o.Utf16BE = { stringify: function (t) { for (var r = t.words, e = t.sigBytes, i = [], n = 0; n < e; n += 2) { var o = r[n >>> 2] >>> 16 - n % 4 * 8 & 65535; i.push(String.fromCharCode(o)) } return i.join("") }, parse: function (t) { for (var r = t.length, e = [], i = 0; i < r; i++)e[i >>> 1] |= t.charCodeAt(i) << 16 - i % 2 * 16; return n.create(e, 2 * r) } }; o.Utf16LE = { stringify: function (t) { for (var e = t.words, i = t.sigBytes, n = [], o = 0; o < i; o += 2) { var s = r(e[o >>> 2] >>> 16 - o % 4 * 8 & 65535); n.push(String.fromCharCode(s)) } return n.join("") }, parse: function (t) { for (var e = t.length, i = [], o = 0; o < e; o++)i[o >>> 1] |= r(t.charCodeAt(o) << 16 - o % 2 * 16); return n.create(i, 2 * e) } } }(), function () { if ("function" == typeof ArrayBuffer) { var r = t, e = r.lib, i = e.WordArray, n = i.init, o = i.init = function (t) { if (t instanceof ArrayBuffer && (t = new Uint8Array(t)), (t instanceof Int8Array || "undefined" != typeof Uint8ClampedArray && t instanceof Uint8ClampedArray || t instanceof Int16Array || t instanceof Uint16Array || t instanceof Int32Array || t instanceof Uint32Array || t instanceof Float32Array || t instanceof Float64Array) && (t = new Uint8Array(t.buffer, t.byteOffset, t.byteLength)), t instanceof Uint8Array) { for (var r = t.byteLength, e = [], i = 0; i < r; i++)e[i >>> 2] |= t[i] << 24 - i % 4 * 8; n.call(this, e, r) } else n.apply(this, arguments) }; o.prototype = i } }(), function (r) { function e(t, r, e) { return t ^ r ^ e } function i(t, r, e) { return t & r | ~t & e } function n(t, r, e) { return (t | ~r) ^ e } function o(t, r, e) { return t & e | r & ~e } function s(t, r, e) { return t ^ (r | ~e) } function a(t, r) { return t << r | t >>> 32 - r } var c = t, h = c.lib, l = h.WordArray, f = h.Hasher, u = c.algo, d = l.create([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13]), v = l.create([5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11]), p = l.create([11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6]), _ = l.create([8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11]), y = l.create([0, 1518500249, 1859775393, 2400959708, 2840853838]), g = l.create([1352829926, 1548603684, 1836072691, 2053994217, 0]), B = u.RIPEMD160 = f.extend({ _doReset: function () { this._hash = l.create([1732584193, 4023233417, 2562383102, 271733878, 3285377520]) }, _doProcessBlock: function (t, r) { for (var c = 0; c < 16; c++) { var h = r + c, l = t[h]; t[h] = 16711935 & (l << 8 | l >>> 24) | 4278255360 & (l << 24 | l >>> 8) } var f, u, B, w, k, S, m, x, b, H, z = this._hash.words, A = y.words, C = g.words, D = d.words, R = v.words, E = p.words, M = _.words; S = f = z[0], m = u = z[1], x = B = z[2], b = w = z[3], H = k = z[4]; for (var F, c = 0; c < 80; c += 1)F = f + t[r + D[c]] | 0, F += c < 16 ? e(u, B, w) + A[0] : c < 32 ? i(u, B, w) + A[1] : c < 48 ? n(u, B, w) + A[2] : c < 64 ? o(u, B, w) + A[3] : s(u, B, w) + A[4], F |= 0, F = a(F, E[c]), F = F + k | 0, f = k, k = w, w = a(B, 10), B = u, u = F, F = S + t[r + R[c]] | 0, F += c < 16 ? s(m, x, b) + C[0] : c < 32 ? o(m, x, b) + C[1] : c < 48 ? n(m, x, b) + C[2] : c < 64 ? i(m, x, b) + C[3] : e(m, x, b) + C[4], F |= 0, F = a(F, M[c]), F = F + H | 0, S = H, H = b, b = a(x, 10), x = m, m = F; F = z[1] + B + b | 0, z[1] = z[2] + w + H | 0, z[2] = z[3] + k + S | 0, z[3] = z[4] + f + m | 0, z[4] = z[0] + u + x | 0, z[0] = F }, _doFinalize: function () { var t = this._data, r = t.words, e = 8 * this._nDataBytes, i = 8 * t.sigBytes; r[i >>> 5] |= 128 << 24 - i % 32, r[(i + 64 >>> 9 << 4) + 14] = 16711935 & (e << 8 | e >>> 24) | 4278255360 & (e << 24 | e >>> 8), t.sigBytes = 4 * (r.length + 1), this._process(); for (var n = this._hash, o = n.words, s = 0; s < 5; s++) { var a = o[s]; o[s] = 16711935 & (a << 8 | a >>> 24) | 4278255360 & (a << 24 | a >>> 8) } return n }, clone: function () { var t = f.clone.call(this); return t._hash = this._hash.clone(), t } }); c.RIPEMD160 = f._createHelper(B), c.HmacRIPEMD160 = f._createHmacHelper(B) }(Math), function () { var r = t, e = r.lib, i = e.Base, n = r.enc, o = n.Utf8, s = r.algo; s.HMAC = i.extend({ init: function (t, r) { t = this._hasher = new t.init, "string" == typeof r && (r = o.parse(r)); var e = t.blockSize, i = 4 * e; r.sigBytes > i && (r = t.finalize(r)), r.clamp(); for (var n = this._oKey = r.clone(), s = this._iKey = r.clone(), a = n.words, c = s.words, h = 0; h < e; h++)a[h] ^= 1549556828, c[h] ^= 909522486; n.sigBytes = s.sigBytes = i, this.reset() }, reset: function () { var t = this._hasher; t.reset(), t.update(this._iKey) }, update: function (t) { return this._hasher.update(t), this }, finalize: function (t) { var r = this._hasher, e = r.finalize(t); r.reset(); var i = r.finalize(this._oKey.clone().concat(e)); return i } }) }(), function () { var r = t, e = r.lib, i = e.Base, n = e.WordArray, o = r.algo, s = o.SHA1, a = o.HMAC, c = o.PBKDF2 = i.extend({ cfg: i.extend({ keySize: 4, hasher: s, iterations: 1 }), init: function (t) { this.cfg = this.cfg.extend(t) }, compute: function (t, r) { for (var e = this.cfg, i = a.create(e.hasher, t), o = n.create(), s = n.create([1]), c = o.words, h = s.words, l = e.keySize, f = e.iterations; c.length < l;) { var u = i.update(r).finalize(s); i.reset(); for (var d = u.words, v = d.length, p = u, _ = 1; _ < f; _++) { p = i.finalize(p), i.reset(); for (var y = p.words, g = 0; g < v; g++)d[g] ^= y[g] } o.concat(u), h[0]++ } return o.sigBytes = 4 * l, o } }); r.PBKDF2 = function (t, r, e) { return c.create(e).compute(t, r) } }(), function () { var r = t, e = r.lib, i = e.Base, n = e.WordArray, o = r.algo, s = o.MD5, a = o.EvpKDF = i.extend({ cfg: i.extend({ keySize: 4, hasher: s, iterations: 1 }), init: function (t) { this.cfg = this.cfg.extend(t) }, compute: function (t, r) { for (var e = this.cfg, i = e.hasher.create(), o = n.create(), s = o.words, a = e.keySize, c = e.iterations; s.length < a;) { h && i.update(h); var h = i.update(t).finalize(r); i.reset(); for (var l = 1; l < c; l++)h = i.finalize(h), i.reset(); o.concat(h) } return o.sigBytes = 4 * a, o } }); r.EvpKDF = function (t, r, e) { return a.create(e).compute(t, r) } }(), function () { var r = t, e = r.lib, i = e.WordArray, n = r.algo, o = n.SHA256, s = n.SHA224 = o.extend({ _doReset: function () { this._hash = new i.init([3238371032, 914150663, 812702999, 4144912697, 4290775857, 1750603025, 1694076839, 3204075428]) }, _doFinalize: function () { var t = o._doFinalize.call(this); return t.sigBytes -= 4, t } }); r.SHA224 = o._createHelper(s), r.HmacSHA224 = o._createHmacHelper(s) }(), function (r) { var e = t, i = e.lib, n = i.Base, o = i.WordArray, s = e.x64 = {}; s.Word = n.extend({ init: function (t, r) { this.high = t, this.low = r } }), s.WordArray = n.extend({ init: function (t, e) { t = this.words = t || [], e != r ? this.sigBytes = e : this.sigBytes = 8 * t.length }, toX32: function () { for (var t = this.words, r = t.length, e = [], i = 0; i < r; i++) { var n = t[i]; e.push(n.high), e.push(n.low) } return o.create(e, this.sigBytes) }, clone: function () { for (var t = n.clone.call(this), r = t.words = this.words.slice(0), e = r.length, i = 0; i < e; i++)r[i] = r[i].clone(); return t } }) }(), function (r) { var e = t, i = e.lib, n = i.WordArray, o = i.Hasher, s = e.x64, a = s.Word, c = e.algo, h = [], l = [], f = []; !function () { for (var t = 1, r = 0, e = 0; e < 24; e++) { h[t + 5 * r] = (e + 1) * (e + 2) / 2 % 64; var i = r % 5, n = (2 * t + 3 * r) % 5; t = i, r = n } for (var t = 0; t < 5; t++)for (var r = 0; r < 5; r++)l[t + 5 * r] = r + (2 * t + 3 * r) % 5 * 5; for (var o = 1, s = 0; s < 24; s++) { for (var c = 0, u = 0, d = 0; d < 7; d++) { if (1 & o) { var v = (1 << d) - 1; v < 32 ? u ^= 1 << v : c ^= 1 << v - 32 } 128 & o ? o = o << 1 ^ 113 : o <<= 1 } f[s] = a.create(c, u) } }(); var u = []; !function () { for (var t = 0; t < 25; t++)u[t] = a.create() }(); var d = c.SHA3 = o.extend({ cfg: o.cfg.extend({ outputLength: 512 }), _doReset: function () { for (var t = this._state = [], r = 0; r < 25; r++)t[r] = new a.init; this.blockSize = (1600 - 2 * this.cfg.outputLength) / 32 }, _doProcessBlock: function (t, r) { for (var e = this._state, i = this.blockSize / 2, n = 0; n < i; n++) { var o = t[r + 2 * n], s = t[r + 2 * n + 1]; o = 16711935 & (o << 8 | o >>> 24) | 4278255360 & (o << 24 | o >>> 8), s = 16711935 & (s << 8 | s >>> 24) | 4278255360 & (s << 24 | s >>> 8); var a = e[n]; a.high ^= s, a.low ^= o } for (var c = 0; c < 24; c++) { for (var d = 0; d < 5; d++) { for (var v = 0, p = 0, _ = 0; _ < 5; _++) { var a = e[d + 5 * _]; v ^= a.high, p ^= a.low } var y = u[d]; y.high = v, y.low = p } for (var d = 0; d < 5; d++)for (var g = u[(d + 4) % 5], B = u[(d + 1) % 5], w = B.high, k = B.low, v = g.high ^ (w << 1 | k >>> 31), p = g.low ^ (k << 1 | w >>> 31), _ = 0; _ < 5; _++) { var a = e[d + 5 * _]; a.high ^= v, a.low ^= p } for (var S = 1; S < 25; S++) { var a = e[S], m = a.high, x = a.low, b = h[S]; if (b < 32) var v = m << b | x >>> 32 - b, p = x << b | m >>> 32 - b; else var v = x << b - 32 | m >>> 64 - b, p = m << b - 32 | x >>> 64 - b; var H = u[l[S]]; H.high = v, H.low = p } var z = u[0], A = e[0]; z.high = A.high, z.low = A.low; for (var d = 0; d < 5; d++)for (var _ = 0; _ < 5; _++) { var S = d + 5 * _, a = e[S], C = u[S], D = u[(d + 1) % 5 + 5 * _], R = u[(d + 2) % 5 + 5 * _]; a.high = C.high ^ ~D.high & R.high, a.low = C.low ^ ~D.low & R.low } var a = e[0], E = f[c]; a.high ^= E.high, a.low ^= E.low } }, _doFinalize: function () { var t = this._data, e = t.words, i = (8 * this._nDataBytes, 8 * t.sigBytes), o = 32 * this.blockSize; e[i >>> 5] |= 1 << 24 - i % 32, e[(r.ceil((i + 1) / o) * o >>> 5) - 1] |= 128, t.sigBytes = 4 * e.length, this._process(); for (var s = this._state, a = this.cfg.outputLength / 8, c = a / 8, h = [], l = 0; l < c; l++) { var f = s[l], u = f.high, d = f.low; u = 16711935 & (u << 8 | u >>> 24) | 4278255360 & (u << 24 | u >>> 8), d = 16711935 & (d << 8 | d >>> 24) | 4278255360 & (d << 24 | d >>> 8), h.push(d), h.push(u) } return new n.init(h, a) }, clone: function () { for (var t = o.clone.call(this), r = t._state = this._state.slice(0), e = 0; e < 25; e++)r[e] = r[e].clone(); return t } }); e.SHA3 = o._createHelper(d), e.HmacSHA3 = o._createHmacHelper(d) }(Math), function () { function r() { return s.create.apply(s, arguments) } var e = t, i = e.lib, n = i.Hasher, o = e.x64, s = o.Word, a = o.WordArray, c = e.algo, h = [r(1116352408, 3609767458), r(1899447441, 602891725), r(3049323471, 3964484399), r(3921009573, 2173295548), r(961987163, 4081628472), r(1508970993, 3053834265), r(2453635748, 2937671579), r(2870763221, 3664609560), r(3624381080, 2734883394), r(310598401, 1164996542), r(607225278, 1323610764), r(1426881987, 3590304994), r(1925078388, 4068182383), r(2162078206, 991336113), r(2614888103, 633803317), r(3248222580, 3479774868), r(3835390401, 2666613458), r(4022224774, 944711139), r(264347078, 2341262773), r(604807628, 2007800933), r(770255983, 1495990901), r(1249150122, 1856431235), r(1555081692, 3175218132), r(1996064986, 2198950837), r(2554220882, 3999719339), r(2821834349, 766784016), r(2952996808, 2566594879), r(3210313671, 3203337956), r(3336571891, 1034457026), r(3584528711, 2466948901), r(113926993, 3758326383), r(338241895, 168717936), r(666307205, 1188179964), r(773529912, 1546045734), r(1294757372, 1522805485), r(1396182291, 2643833823), r(1695183700, 2343527390), r(1986661051, 1014477480), r(2177026350, 1206759142), r(2456956037, 344077627), r(2730485921, 1290863460), r(2820302411, 3158454273), r(3259730800, 3505952657), r(3345764771, 106217008), r(3516065817, 3606008344), r(3600352804, 1432725776), r(4094571909, 1467031594), r(275423344, 851169720), r(430227734, 3100823752), r(506948616, 1363258195), r(659060556, 3750685593), r(883997877, 3785050280), r(958139571, 3318307427), r(1322822218, 3812723403), r(1537002063, 2003034995), r(1747873779, 3602036899), r(1955562222, 1575990012), r(2024104815, 1125592928), r(2227730452, 2716904306), r(2361852424, 442776044), r(2428436474, 593698344), r(2756734187, 3733110249), r(3204031479, 2999351573), r(3329325298, 3815920427), r(3391569614, 3928383900), r(3515267271, 566280711), r(3940187606, 3454069534), r(4118630271, 4000239992), r(116418474, 1914138554), r(174292421, 2731055270), r(289380356, 3203993006), r(460393269, 320620315), r(685471733, 587496836), r(852142971, 1086792851), r(1017036298, 365543100), r(1126000580, 2618297676), r(1288033470, 3409855158), r(1501505948, 4234509866), r(1607167915, 987167468), r(1816402316, 1246189591)], l = []; !function () { for (var t = 0; t < 80; t++)l[t] = r() }(); var f = c.SHA512 = n.extend({ _doReset: function () { this._hash = new a.init([new s.init(1779033703, 4089235720), new s.init(3144134277, 2227873595), new s.init(1013904242, 4271175723), new s.init(2773480762, 1595750129), new s.init(1359893119, 2917565137), new s.init(2600822924, 725511199), new s.init(528734635, 4215389547), new s.init(1541459225, 327033209)]) }, _doProcessBlock: function (t, r) { for (var e = this._hash.words, i = e[0], n = e[1], o = e[2], s = e[3], a = e[4], c = e[5], f = e[6], u = e[7], d = i.high, v = i.low, p = n.high, _ = n.low, y = o.high, g = o.low, B = s.high, w = s.low, k = a.high, S = a.low, m = c.high, x = c.low, b = f.high, H = f.low, z = u.high, A = u.low, C = d, D = v, R = p, E = _, M = y, F = g, P = B, W = w, O = k, U = S, I = m, K = x, X = b, L = H, j = z, N = A, T = 0; T < 80; T++) { var Z = l[T]; if (T < 16) var q = Z.high = 0 | t[r + 2 * T], G = Z.low = 0 | t[r + 2 * T + 1]; else { var J = l[T - 15], $ = J.high, Q = J.low, V = ($ >>> 1 | Q << 31) ^ ($ >>> 8 | Q << 24) ^ $ >>> 7, Y = (Q >>> 1 | $ << 31) ^ (Q >>> 8 | $ << 24) ^ (Q >>> 7 | $ << 25), tt = l[T - 2], rt = tt.high, et = tt.low, it = (rt >>> 19 | et << 13) ^ (rt << 3 | et >>> 29) ^ rt >>> 6, nt = (et >>> 19 | rt << 13) ^ (et << 3 | rt >>> 29) ^ (et >>> 6 | rt << 26), ot = l[T - 7], st = ot.high, at = ot.low, ct = l[T - 16], ht = ct.high, lt = ct.low, G = Y + at, q = V + st + (G >>> 0 < Y >>> 0 ? 1 : 0), G = G + nt, q = q + it + (G >>> 0 < nt >>> 0 ? 1 : 0), G = G + lt, q = q + ht + (G >>> 0 < lt >>> 0 ? 1 : 0); Z.high = q, Z.low = G } var ft = O & I ^ ~O & X, ut = U & K ^ ~U & L, dt = C & R ^ C & M ^ R & M, vt = D & E ^ D & F ^ E & F, pt = (C >>> 28 | D << 4) ^ (C << 30 | D >>> 2) ^ (C << 25 | D >>> 7), _t = (D >>> 28 | C << 4) ^ (D << 30 | C >>> 2) ^ (D << 25 | C >>> 7), yt = (O >>> 14 | U << 18) ^ (O >>> 18 | U << 14) ^ (O << 23 | U >>> 9), gt = (U >>> 14 | O << 18) ^ (U >>> 18 | O << 14) ^ (U << 23 | O >>> 9), Bt = h[T], wt = Bt.high, kt = Bt.low, St = N + gt, mt = j + yt + (St >>> 0 < N >>> 0 ? 1 : 0), St = St + ut, mt = mt + ft + (St >>> 0 < ut >>> 0 ? 1 : 0), St = St + kt, mt = mt + wt + (St >>> 0 < kt >>> 0 ? 1 : 0), St = St + G, mt = mt + q + (St >>> 0 < G >>> 0 ? 1 : 0), xt = _t + vt, bt = pt + dt + (xt >>> 0 < _t >>> 0 ? 1 : 0); j = X, N = L, X = I, L = K, I = O, K = U, U = W + St | 0, O = P + mt + (U >>> 0 < W >>> 0 ? 1 : 0) | 0, P = M, W = F, M = R, F = E, R = C, E = D, D = St + xt | 0, C = mt + bt + (D >>> 0 < St >>> 0 ? 1 : 0) | 0 } v = i.low = v + D, i.high = d + C + (v >>> 0 < D >>> 0 ? 1 : 0), _ = n.low = _ + E, n.high = p + R + (_ >>> 0 < E >>> 0 ? 1 : 0), g = o.low = g + F, o.high = y + M + (g >>> 0 < F >>> 0 ? 1 : 0), w = s.low = w + W, s.high = B + P + (w >>> 0 < W >>> 0 ? 1 : 0), S = a.low = S + U, a.high = k + O + (S >>> 0 < U >>> 0 ? 1 : 0), x = c.low = x + K, c.high = m + I + (x >>> 0 < K >>> 0 ? 1 : 0), H = f.low = H + L, f.high = b + X + (H >>> 0 < L >>> 0 ? 1 : 0), A = u.low = A + N, u.high = z + j + (A >>> 0 < N >>> 0 ? 1 : 0) }, _doFinalize: function () { var t = this._data, r = t.words, e = 8 * this._nDataBytes, i = 8 * t.sigBytes; r[i >>> 5] |= 128 << 24 - i % 32, r[(i + 128 >>> 10 << 5) + 30] = Math.floor(e / 4294967296), r[(i + 128 >>> 10 << 5) + 31] = e, t.sigBytes = 4 * r.length, this._process(); var n = this._hash.toX32(); return n }, clone: function () { var t = n.clone.call(this); return t._hash = this._hash.clone(), t }, blockSize: 32 }); e.SHA512 = n._createHelper(f), e.HmacSHA512 = n._createHmacHelper(f) }(), function () { var r = t, e = r.x64, i = e.Word, n = e.WordArray, o = r.algo, s = o.SHA512, a = o.SHA384 = s.extend({ _doReset: function () { this._hash = new n.init([new i.init(3418070365, 3238371032), new i.init(1654270250, 914150663), new i.init(2438529370, 812702999), new i.init(355462360, 4144912697), new i.init(1731405415, 4290775857), new i.init(2394180231, 1750603025), new i.init(3675008525, 1694076839), new i.init(1203062813, 3204075428)]) }, _doFinalize: function () { var t = s._doFinalize.call(this); return t.sigBytes -= 16, t } }); r.SHA384 = s._createHelper(a), r.HmacSHA384 = s._createHmacHelper(a) }(), t.lib.Cipher || function (r) { var e = t, i = e.lib, n = i.Base, o = i.WordArray, s = i.BufferedBlockAlgorithm, a = e.enc, c = (a.Utf8, a.Base64), h = e.algo, l = h.EvpKDF, f = i.Cipher = s.extend({ cfg: n.extend(), createEncryptor: function (t, r) { return this.create(this._ENC_XFORM_MODE, t, r) }, createDecryptor: function (t, r) { return this.create(this._DEC_XFORM_MODE, t, r) }, init: function (t, r, e) { this.cfg = this.cfg.extend(e), this._xformMode = t, this._key = r, this.reset() }, reset: function () { s.reset.call(this), this._doReset() }, process: function (t) { return this._append(t), this._process() }, finalize: function (t) { t && this._append(t); var r = this._doFinalize(); return r }, keySize: 4, ivSize: 4, _ENC_XFORM_MODE: 1, _DEC_XFORM_MODE: 2, _createHelper: function () { function t(t) { return "string" == typeof t ? m : w } return function (r) { return { encrypt: function (e, i, n) { return t(i).encrypt(r, e, i, n) }, decrypt: function (e, i, n) { return t(i).decrypt(r, e, i, n) } } } }() }), u = (i.StreamCipher = f.extend({ _doFinalize: function () { var t = this._process(!0); return t }, blockSize: 1 }), e.mode = {}), d = i.BlockCipherMode = n.extend({ createEncryptor: function (t, r) { return this.Encryptor.create(t, r) }, createDecryptor: function (t, r) { return this.Decryptor.create(t, r) }, init: function (t, r) { this._cipher = t, this._iv = r } }), v = u.CBC = function () { function t(t, e, i) { var n = this._iv; if (n) { var o = n; this._iv = r } else var o = this._prevBlock; for (var s = 0; s < i; s++)t[e + s] ^= o[s] } var e = d.extend(); return e.Encryptor = e.extend({ processBlock: function (r, e) { var i = this._cipher, n = i.blockSize; t.call(this, r, e, n), i.encryptBlock(r, e), this._prevBlock = r.slice(e, e + n) } }), e.Decryptor = e.extend({ processBlock: function (r, e) { var i = this._cipher, n = i.blockSize, o = r.slice(e, e + n); i.decryptBlock(r, e), t.call(this, r, e, n), this._prevBlock = o } }), e }(), p = e.pad = {}, _ = p.Pkcs7 = { pad: function (t, r) { for (var e = 4 * r, i = e - t.sigBytes % e, n = i << 24 | i << 16 | i << 8 | i, s = [], a = 0; a < i; a += 4)s.push(n); var c = o.create(s, i); t.concat(c) }, unpad: function (t) { var r = 255 & t.words[t.sigBytes - 1 >>> 2]; t.sigBytes -= r } }, y = (i.BlockCipher = f.extend({ cfg: f.cfg.extend({ mode: v, padding: _ }), reset: function () { f.reset.call(this); var t = this.cfg, r = t.iv, e = t.mode; if (this._xformMode == this._ENC_XFORM_MODE) var i = e.createEncryptor; else { var i = e.createDecryptor; this._minBufferSize = 1 } this._mode && this._mode.__creator == i ? this._mode.init(this, r && r.words) : (this._mode = i.call(e, this, r && r.words), this._mode.__creator = i) }, _doProcessBlock: function (t, r) { this._mode.processBlock(t, r) }, _doFinalize: function () { var t = this.cfg.padding; if (this._xformMode == this._ENC_XFORM_MODE) { t.pad(this._data, this.blockSize); var r = this._process(!0) } else { var r = this._process(!0); t.unpad(r) } return r }, blockSize: 4 }), i.CipherParams = n.extend({ init: function (t) { this.mixIn(t) }, toString: function (t) { return (t || this.formatter).stringify(this) } })), g = e.format = {}, B = g.OpenSSL = { stringify: function (t) { var r = t.ciphertext, e = t.salt; if (e) var i = o.create([1398893684, 1701076831]).concat(e).concat(r); else var i = r; return i.toString(c) }, parse: function (t) { var r = c.parse(t), e = r.words; if (1398893684 == e[0] && 1701076831 == e[1]) { var i = o.create(e.slice(2, 4)); e.splice(0, 4), r.sigBytes -= 16 } return y.create({ ciphertext: r, salt: i }) } }, w = i.SerializableCipher = n.extend({ cfg: n.extend({ format: B }), encrypt: function (t, r, e, i) { i = this.cfg.extend(i); var n = t.createEncryptor(e, i), o = n.finalize(r), s = n.cfg; return y.create({ ciphertext: o, key: e, iv: s.iv, algorithm: t, mode: s.mode, padding: s.padding, blockSize: t.blockSize, formatter: i.format }) }, decrypt: function (t, r, e, i) { i = this.cfg.extend(i), r = this._parse(r, i.format); var n = t.createDecryptor(e, i).finalize(r.ciphertext); return n }, _parse: function (t, r) { return "string" == typeof t ? r.parse(t, this) : t } }), k = e.kdf = {}, S = k.OpenSSL = { execute: function (t, r, e, i) { i || (i = o.random(8)); var n = l.create({ keySize: r + e }).compute(t, i), s = o.create(n.words.slice(r), 4 * e); return n.sigBytes = 4 * r, y.create({ key: n, iv: s, salt: i }) } }, m = i.PasswordBasedCipher = w.extend({ cfg: w.cfg.extend({ kdf: S }), encrypt: function (t, r, e, i) { i = this.cfg.extend(i); var n = i.kdf.execute(e, t.keySize, t.ivSize); i.iv = n.iv; var o = w.encrypt.call(this, t, r, n.key, i); return o.mixIn(n), o }, decrypt: function (t, r, e, i) { i = this.cfg.extend(i), r = this._parse(r, i.format); var n = i.kdf.execute(e, t.keySize, t.ivSize, r.salt); i.iv = n.iv; var o = w.decrypt.call(this, t, r, n.key, i); return o } }) }(), t.mode.CFB = function () { function r(t, r, e, i) { var n = this._iv; if (n) { var o = n.slice(0); this._iv = void 0 } else var o = this._prevBlock; i.encryptBlock(o, 0); for (var s = 0; s < e; s++)t[r + s] ^= o[s] } var e = t.lib.BlockCipherMode.extend(); return e.Encryptor = e.extend({ processBlock: function (t, e) { var i = this._cipher, n = i.blockSize; r.call(this, t, e, n, i), this._prevBlock = t.slice(e, e + n) } }), e.Decryptor = e.extend({ processBlock: function (t, e) { var i = this._cipher, n = i.blockSize, o = t.slice(e, e + n); r.call(this, t, e, n, i), this._prevBlock = o } }), e }(), t.mode.ECB = function () { var r = t.lib.BlockCipherMode.extend(); return r.Encryptor = r.extend({ processBlock: function (t, r) { this._cipher.encryptBlock(t, r) } }), r.Decryptor = r.extend({ processBlock: function (t, r) { this._cipher.decryptBlock(t, r) } }), r }(), t.pad.AnsiX923 = { pad: function (t, r) { var e = t.sigBytes, i = 4 * r, n = i - e % i, o = e + n - 1; t.clamp(), t.words[o >>> 2] |= n << 24 - o % 4 * 8, t.sigBytes += n }, unpad: function (t) { var r = 255 & t.words[t.sigBytes - 1 >>> 2]; t.sigBytes -= r } }, t.pad.Iso10126 = { pad: function (r, e) { var i = 4 * e, n = i - r.sigBytes % i; r.concat(t.lib.WordArray.random(n - 1)).concat(t.lib.WordArray.create([n << 24], 1)) }, unpad: function (t) { var r = 255 & t.words[t.sigBytes - 1 >>> 2]; t.sigBytes -= r } }, t.pad.Iso97971 = { pad: function (r, e) { r.concat(t.lib.WordArray.create([2147483648], 1)), t.pad.ZeroPadding.pad(r, e) }, unpad: function (r) { t.pad.ZeroPadding.unpad(r), r.sigBytes-- } }, t.mode.OFB = function () { var r = t.lib.BlockCipherMode.extend(), e = r.Encryptor = r.extend({ processBlock: function (t, r) { var e = this._cipher, i = e.blockSize, n = this._iv, o = this._keystream; n && (o = this._keystream = n.slice(0), this._iv = void 0), e.encryptBlock(o, 0); for (var s = 0; s < i; s++)t[r + s] ^= o[s] } }); return r.Decryptor = e, r }(), t.pad.NoPadding = { pad: function () { }, unpad: function () { } }, function (r) { var e = t, i = e.lib, n = i.CipherParams, o = e.enc, s = o.Hex, a = e.format; a.Hex = { stringify: function (t) { return t.ciphertext.toString(s) }, parse: function (t) { var r = s.parse(t); return n.create({ ciphertext: r }) } } }(), function () { var r = t, e = r.lib, i = e.BlockCipher, n = r.algo, o = [], s = [], a = [], c = [], h = [], l = [], f = [], u = [], d = [], v = []; !function () { for (var t = [], r = 0; r < 256; r++)r < 128 ? t[r] = r << 1 : t[r] = r << 1 ^ 283; for (var e = 0, i = 0, r = 0; r < 256; r++) { var n = i ^ i << 1 ^ i << 2 ^ i << 3 ^ i << 4; n = n >>> 8 ^ 255 & n ^ 99, o[e] = n, s[n] = e; var p = t[e], _ = t[p], y = t[_], g = 257 * t[n] ^ 16843008 * n; a[e] = g << 24 | g >>> 8, c[e] = g << 16 | g >>> 16, h[e] = g << 8 | g >>> 24, l[e] = g; var g = 16843009 * y ^ 65537 * _ ^ 257 * p ^ 16843008 * e; f[n] = g << 24 | g >>> 8, u[n] = g << 16 | g >>> 16, d[n] = g << 8 | g >>> 24, v[n] = g, e ? (e = p ^ t[t[t[y ^ p]]], i ^= t[t[i]]) : e = i = 1 } }(); var p = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54], _ = n.AES = i.extend({ _doReset: function () { if (!this._nRounds || this._keyPriorReset !== this._key) { for (var t = this._keyPriorReset = this._key, r = t.words, e = t.sigBytes / 4, i = this._nRounds = e + 6, n = 4 * (i + 1), s = this._keySchedule = [], a = 0; a < n; a++)if (a < e) s[a] = r[a]; else { var c = s[a - 1]; a % e ? e > 6 && a % e == 4 && (c = o[c >>> 24] << 24 | o[c >>> 16 & 255] << 16 | o[c >>> 8 & 255] << 8 | o[255 & c]) : (c = c << 8 | c >>> 24, c = o[c >>> 24] << 24 | o[c >>> 16 & 255] << 16 | o[c >>> 8 & 255] << 8 | o[255 & c], c ^= p[a / e | 0] << 24), s[a] = s[a - e] ^ c } for (var h = this._invKeySchedule = [], l = 0; l < n; l++) { var a = n - l; if (l % 4) var c = s[a]; else var c = s[a - 4]; l < 4 || a <= 4 ? h[l] = c : h[l] = f[o[c >>> 24]] ^ u[o[c >>> 16 & 255]] ^ d[o[c >>> 8 & 255]] ^ v[o[255 & c]] } } }, encryptBlock: function (t, r) { this._doCryptBlock(t, r, this._keySchedule, a, c, h, l, o) }, decryptBlock: function (t, r) { var e = t[r + 1]; t[r + 1] = t[r + 3], t[r + 3] = e, this._doCryptBlock(t, r, this._invKeySchedule, f, u, d, v, s); var e = t[r + 1]; t[r + 1] = t[r + 3], t[r + 3] = e }, _doCryptBlock: function (t, r, e, i, n, o, s, a) { for (var c = this._nRounds, h = t[r] ^ e[0], l = t[r + 1] ^ e[1], f = t[r + 2] ^ e[2], u = t[r + 3] ^ e[3], d = 4, v = 1; v < c; v++) { var p = i[h >>> 24] ^ n[l >>> 16 & 255] ^ o[f >>> 8 & 255] ^ s[255 & u] ^ e[d++], _ = i[l >>> 24] ^ n[f >>> 16 & 255] ^ o[u >>> 8 & 255] ^ s[255 & h] ^ e[d++], y = i[f >>> 24] ^ n[u >>> 16 & 255] ^ o[h >>> 8 & 255] ^ s[255 & l] ^ e[d++], g = i[u >>> 24] ^ n[h >>> 16 & 255] ^ o[l >>> 8 & 255] ^ s[255 & f] ^ e[d++]; h = p, l = _, f = y, u = g } var p = (a[h >>> 24] << 24 | a[l >>> 16 & 255] << 16 | a[f >>> 8 & 255] << 8 | a[255 & u]) ^ e[d++], _ = (a[l >>> 24] << 24 | a[f >>> 16 & 255] << 16 | a[u >>> 8 & 255] << 8 | a[255 & h]) ^ e[d++], y = (a[f >>> 24] << 24 | a[u >>> 16 & 255] << 16 | a[h >>> 8 & 255] << 8 | a[255 & l]) ^ e[d++], g = (a[u >>> 24] << 24 | a[h >>> 16 & 255] << 16 | a[l >>> 8 & 255] << 8 | a[255 & f]) ^ e[d++]; t[r] = p, t[r + 1] = _, t[r + 2] = y, t[r + 3] = g }, keySize: 8 }); r.AES = i._createHelper(_) }(), function () {
    function r(t, r) { var e = (this._lBlock >>> t ^ this._rBlock) & r; this._rBlock ^= e, this._lBlock ^= e << t } function e(t, r) {
      var e = (this._rBlock >>> t ^ this._lBlock) & r; this._lBlock ^= e, this._rBlock ^= e << t;
    } var i = t, n = i.lib, o = n.WordArray, s = n.BlockCipher, a = i.algo, c = [57, 49, 41, 33, 25, 17, 9, 1, 58, 50, 42, 34, 26, 18, 10, 2, 59, 51, 43, 35, 27, 19, 11, 3, 60, 52, 44, 36, 63, 55, 47, 39, 31, 23, 15, 7, 62, 54, 46, 38, 30, 22, 14, 6, 61, 53, 45, 37, 29, 21, 13, 5, 28, 20, 12, 4], h = [14, 17, 11, 24, 1, 5, 3, 28, 15, 6, 21, 10, 23, 19, 12, 4, 26, 8, 16, 7, 27, 20, 13, 2, 41, 52, 31, 37, 47, 55, 30, 40, 51, 45, 33, 48, 44, 49, 39, 56, 34, 53, 46, 42, 50, 36, 29, 32], l = [1, 2, 4, 6, 8, 10, 12, 14, 15, 17, 19, 21, 23, 25, 27, 28], f = [{ 0: 8421888, 268435456: 32768, 536870912: 8421378, 805306368: 2, 1073741824: 512, 1342177280: 8421890, 1610612736: 8389122, 1879048192: 8388608, 2147483648: 514, 2415919104: 8389120, 2684354560: 33280, 2952790016: 8421376, 3221225472: 32770, 3489660928: 8388610, 3758096384: 0, 4026531840: 33282, 134217728: 0, 402653184: 8421890, 671088640: 33282, 939524096: 32768, 1207959552: 8421888, 1476395008: 512, 1744830464: 8421378, 2013265920: 2, 2281701376: 8389120, 2550136832: 33280, 2818572288: 8421376, 3087007744: 8389122, 3355443200: 8388610, 3623878656: 32770, 3892314112: 514, 4160749568: 8388608, 1: 32768, 268435457: 2, 536870913: 8421888, 805306369: 8388608, 1073741825: 8421378, 1342177281: 33280, 1610612737: 512, 1879048193: 8389122, 2147483649: 8421890, 2415919105: 8421376, 2684354561: 8388610, 2952790017: 33282, 3221225473: 514, 3489660929: 8389120, 3758096385: 32770, 4026531841: 0, 134217729: 8421890, 402653185: 8421376, 671088641: 8388608, 939524097: 512, 1207959553: 32768, 1476395009: 8388610, 1744830465: 2, 2013265921: 33282, 2281701377: 32770, 2550136833: 8389122, 2818572289: 514, 3087007745: 8421888, 3355443201: 8389120, 3623878657: 0, 3892314113: 33280, 4160749569: 8421378 }, { 0: 1074282512, 16777216: 16384, 33554432: 524288, 50331648: 1074266128, 67108864: 1073741840, 83886080: 1074282496, 100663296: 1073758208, 117440512: 16, 134217728: 540672, 150994944: 1073758224, 167772160: 1073741824, 184549376: 540688, 201326592: 524304, 218103808: 0, 234881024: 16400, 251658240: 1074266112, 8388608: 1073758208, 25165824: 540688, 41943040: 16, 58720256: 1073758224, 75497472: 1074282512, 92274688: 1073741824, 109051904: 524288, 125829120: 1074266128, 142606336: 524304, 159383552: 0, 176160768: 16384, 192937984: 1074266112, 209715200: 1073741840, 226492416: 540672, 243269632: 1074282496, 260046848: 16400, 268435456: 0, 285212672: 1074266128, 301989888: 1073758224, 318767104: 1074282496, 335544320: 1074266112, 352321536: 16, 369098752: 540688, 385875968: 16384, 402653184: 16400, 419430400: 524288, 436207616: 524304, 452984832: 1073741840, 469762048: 540672, 486539264: 1073758208, 503316480: 1073741824, 520093696: 1074282512, 276824064: 540688, 293601280: 524288, 310378496: 1074266112, 327155712: 16384, 343932928: 1073758208, 360710144: 1074282512, 377487360: 16, 394264576: 1073741824, 411041792: 1074282496, 427819008: 1073741840, 444596224: 1073758224, 461373440: 524304, 478150656: 0, 494927872: 16400, 511705088: 1074266128, 528482304: 540672 }, { 0: 260, 1048576: 0, 2097152: 67109120, 3145728: 65796, 4194304: 65540, 5242880: 67108868, 6291456: 67174660, 7340032: 67174400, 8388608: 67108864, 9437184: 67174656, 10485760: 65792, 11534336: 67174404, 12582912: 67109124, 13631488: 65536, 14680064: 4, 15728640: 256, 524288: 67174656, 1572864: 67174404, 2621440: 0, 3670016: 67109120, 4718592: 67108868, 5767168: 65536, 6815744: 65540, 7864320: 260, 8912896: 4, 9961472: 256, 11010048: 67174400, 12058624: 65796, 13107200: 65792, 14155776: 67109124, 15204352: 67174660, 16252928: 67108864, 16777216: 67174656, 17825792: 65540, 18874368: 65536, 19922944: 67109120, 20971520: 256, 22020096: 67174660, 23068672: 67108868, 24117248: 0, 25165824: 67109124, 26214400: 67108864, 27262976: 4, 28311552: 65792, 29360128: 67174400, 30408704: 260, 31457280: 65796, 32505856: 67174404, 17301504: 67108864, 18350080: 260, 19398656: 67174656, 20447232: 0, 21495808: 65540, 22544384: 67109120, 23592960: 256, 24641536: 67174404, 25690112: 65536, 26738688: 67174660, 27787264: 65796, 28835840: 67108868, 29884416: 67109124, 30932992: 67174400, 31981568: 4, 33030144: 65792 }, { 0: 2151682048, 65536: 2147487808, 131072: 4198464, 196608: 2151677952, 262144: 0, 327680: 4198400, 393216: 2147483712, 458752: 4194368, 524288: 2147483648, 589824: 4194304, 655360: 64, 720896: 2147487744, 786432: 2151678016, 851968: 4160, 917504: 4096, 983040: 2151682112, 32768: 2147487808, 98304: 64, 163840: 2151678016, 229376: 2147487744, 294912: 4198400, 360448: 2151682112, 425984: 0, 491520: 2151677952, 557056: 4096, 622592: 2151682048, 688128: 4194304, 753664: 4160, 819200: 2147483648, 884736: 4194368, 950272: 4198464, 1015808: 2147483712, 1048576: 4194368, 1114112: 4198400, 1179648: 2147483712, 1245184: 0, 1310720: 4160, 1376256: 2151678016, 1441792: 2151682048, 1507328: 2147487808, 1572864: 2151682112, 1638400: 2147483648, 1703936: 2151677952, 1769472: 4198464, 1835008: 2147487744, 1900544: 4194304, 1966080: 64, 2031616: 4096, 1081344: 2151677952, 1146880: 2151682112, 1212416: 0, 1277952: 4198400, 1343488: 4194368, 1409024: 2147483648, 1474560: 2147487808, 1540096: 64, 1605632: 2147483712, 1671168: 4096, 1736704: 2147487744, 1802240: 2151678016, 1867776: 4160, 1933312: 2151682048, 1998848: 4194304, 2064384: 4198464 }, { 0: 128, 4096: 17039360, 8192: 262144, 12288: 536870912, 16384: 537133184, 20480: 16777344, 24576: 553648256, 28672: 262272, 32768: 16777216, 36864: 537133056, 40960: 536871040, 45056: 553910400, 49152: 553910272, 53248: 0, 57344: 17039488, 61440: 553648128, 2048: 17039488, 6144: 553648256, 10240: 128, 14336: 17039360, 18432: 262144, 22528: 537133184, 26624: 553910272, 30720: 536870912, 34816: 537133056, 38912: 0, 43008: 553910400, 47104: 16777344, 51200: 536871040, 55296: 553648128, 59392: 16777216, 63488: 262272, 65536: 262144, 69632: 128, 73728: 536870912, 77824: 553648256, 81920: 16777344, 86016: 553910272, 90112: 537133184, 94208: 16777216, 98304: 553910400, 102400: 553648128, 106496: 17039360, 110592: 537133056, 114688: 262272, 118784: 536871040, 122880: 0, 126976: 17039488, 67584: 553648256, 71680: 16777216, 75776: 17039360, 79872: 537133184, 83968: 536870912, 88064: 17039488, 92160: 128, 96256: 553910272, 100352: 262272, 104448: 553910400, 108544: 0, 112640: 553648128, 116736: 16777344, 120832: 262144, 124928: 537133056, 129024: 536871040 }, { 0: 268435464, 256: 8192, 512: 270532608, 768: 270540808, 1024: 268443648, 1280: 2097152, 1536: 2097160, 1792: 268435456, 2048: 0, 2304: 268443656, 2560: 2105344, 2816: 8, 3072: 270532616, 3328: 2105352, 3584: 8200, 3840: 270540800, 128: 270532608, 384: 270540808, 640: 8, 896: 2097152, 1152: 2105352, 1408: 268435464, 1664: 268443648, 1920: 8200, 2176: 2097160, 2432: 8192, 2688: 268443656, 2944: 270532616, 3200: 0, 3456: 270540800, 3712: 2105344, 3968: 268435456, 4096: 268443648, 4352: 270532616, 4608: 270540808, 4864: 8200, 5120: 2097152, 5376: 268435456, 5632: 268435464, 5888: 2105344, 6144: 2105352, 6400: 0, 6656: 8, 6912: 270532608, 7168: 8192, 7424: 268443656, 7680: 270540800, 7936: 2097160, 4224: 8, 4480: 2105344, 4736: 2097152, 4992: 268435464, 5248: 268443648, 5504: 8200, 5760: 270540808, 6016: 270532608, 6272: 270540800, 6528: 270532616, 6784: 8192, 7040: 2105352, 7296: 2097160, 7552: 0, 7808: 268435456, 8064: 268443656 }, { 0: 1048576, 16: 33555457, 32: 1024, 48: 1049601, 64: 34604033, 80: 0, 96: 1, 112: 34603009, 128: 33555456, 144: 1048577, 160: 33554433, 176: 34604032, 192: 34603008, 208: 1025, 224: 1049600, 240: 33554432, 8: 34603009, 24: 0, 40: 33555457, 56: 34604032, 72: 1048576, 88: 33554433, 104: 33554432, 120: 1025, 136: 1049601, 152: 33555456, 168: 34603008, 184: 1048577, 200: 1024, 216: 34604033, 232: 1, 248: 1049600, 256: 33554432, 272: 1048576, 288: 33555457, 304: 34603009, 320: 1048577, 336: 33555456, 352: 34604032, 368: 1049601, 384: 1025, 400: 34604033, 416: 1049600, 432: 1, 448: 0, 464: 34603008, 480: 33554433, 496: 1024, 264: 1049600, 280: 33555457, 296: 34603009, 312: 1, 328: 33554432, 344: 1048576, 360: 1025, 376: 34604032, 392: 33554433, 408: 34603008, 424: 0, 440: 34604033, 456: 1049601, 472: 1024, 488: 33555456, 504: 1048577 }, { 0: 134219808, 1: 131072, 2: 134217728, 3: 32, 4: 131104, 5: 134350880, 6: 134350848, 7: 2048, 8: 134348800, 9: 134219776, 10: 133120, 11: 134348832, 12: 2080, 13: 0, 14: 134217760, 15: 133152, 2147483648: 2048, 2147483649: 134350880, 2147483650: 134219808, 2147483651: 134217728, 2147483652: 134348800, 2147483653: 133120, 2147483654: 133152, 2147483655: 32, 2147483656: 134217760, 2147483657: 2080, 2147483658: 131104, 2147483659: 134350848, 2147483660: 0, 2147483661: 134348832, 2147483662: 134219776, 2147483663: 131072, 16: 133152, 17: 134350848, 18: 32, 19: 2048, 20: 134219776, 21: 134217760, 22: 134348832, 23: 131072, 24: 0, 25: 131104, 26: 134348800, 27: 134219808, 28: 134350880, 29: 133120, 30: 2080, 31: 134217728, 2147483664: 131072, 2147483665: 2048, 2147483666: 134348832, 2147483667: 133152, 2147483668: 32, 2147483669: 134348800, 2147483670: 134217728, 2147483671: 134219808, 2147483672: 134350880, 2147483673: 134217760, 2147483674: 134219776, 2147483675: 0, 2147483676: 133120, 2147483677: 2080, 2147483678: 131104, 2147483679: 134350848 }], u = [4160749569, 528482304, 33030144, 2064384, 129024, 8064, 504, 2147483679], d = a.DES = s.extend({ _doReset: function () { for (var t = this._key, r = t.words, e = [], i = 0; i < 56; i++) { var n = c[i] - 1; e[i] = r[n >>> 5] >>> 31 - n % 32 & 1 } for (var o = this._subKeys = [], s = 0; s < 16; s++) { for (var a = o[s] = [], f = l[s], i = 0; i < 24; i++)a[i / 6 | 0] |= e[(h[i] - 1 + f) % 28] << 31 - i % 6, a[4 + (i / 6 | 0)] |= e[28 + (h[i + 24] - 1 + f) % 28] << 31 - i % 6; a[0] = a[0] << 1 | a[0] >>> 31; for (var i = 1; i < 7; i++)a[i] = a[i] >>> 4 * (i - 1) + 3; a[7] = a[7] << 5 | a[7] >>> 27 } for (var u = this._invSubKeys = [], i = 0; i < 16; i++)u[i] = o[15 - i] }, encryptBlock: function (t, r) { this._doCryptBlock(t, r, this._subKeys) }, decryptBlock: function (t, r) { this._doCryptBlock(t, r, this._invSubKeys) }, _doCryptBlock: function (t, i, n) { this._lBlock = t[i], this._rBlock = t[i + 1], r.call(this, 4, 252645135), r.call(this, 16, 65535), e.call(this, 2, 858993459), e.call(this, 8, 16711935), r.call(this, 1, 1431655765); for (var o = 0; o < 16; o++) { for (var s = n[o], a = this._lBlock, c = this._rBlock, h = 0, l = 0; l < 8; l++)h |= f[l][((c ^ s[l]) & u[l]) >>> 0]; this._lBlock = c, this._rBlock = a ^ h } var d = this._lBlock; this._lBlock = this._rBlock, this._rBlock = d, r.call(this, 1, 1431655765), e.call(this, 8, 16711935), e.call(this, 2, 858993459), r.call(this, 16, 65535), r.call(this, 4, 252645135), t[i] = this._lBlock, t[i + 1] = this._rBlock }, keySize: 2, ivSize: 2, blockSize: 2 }); i.DES = s._createHelper(d); var v = a.TripleDES = s.extend({ _doReset: function () { var t = this._key, r = t.words; this._des1 = d.createEncryptor(o.create(r.slice(0, 2))), this._des2 = d.createEncryptor(o.create(r.slice(2, 4))), this._des3 = d.createEncryptor(o.create(r.slice(4, 6))) }, encryptBlock: function (t, r) { this._des1.encryptBlock(t, r), this._des2.decryptBlock(t, r), this._des3.encryptBlock(t, r) }, decryptBlock: function (t, r) { this._des3.decryptBlock(t, r), this._des2.encryptBlock(t, r), this._des1.decryptBlock(t, r) }, keySize: 6, ivSize: 2, blockSize: 2 }); i.TripleDES = s._createHelper(v)
  }(), function () { function r() { for (var t = this._S, r = this._i, e = this._j, i = 0, n = 0; n < 4; n++) { r = (r + 1) % 256, e = (e + t[r]) % 256; var o = t[r]; t[r] = t[e], t[e] = o, i |= t[(t[r] + t[e]) % 256] << 24 - 8 * n } return this._i = r, this._j = e, i } var e = t, i = e.lib, n = i.StreamCipher, o = e.algo, s = o.RC4 = n.extend({ _doReset: function () { for (var t = this._key, r = t.words, e = t.sigBytes, i = this._S = [], n = 0; n < 256; n++)i[n] = n; for (var n = 0, o = 0; n < 256; n++) { var s = n % e, a = r[s >>> 2] >>> 24 - s % 4 * 8 & 255; o = (o + i[n] + a) % 256; var c = i[n]; i[n] = i[o], i[o] = c } this._i = this._j = 0 }, _doProcessBlock: function (t, e) { t[e] ^= r.call(this) }, keySize: 8, ivSize: 0 }); e.RC4 = n._createHelper(s); var a = o.RC4Drop = s.extend({ cfg: s.cfg.extend({ drop: 192 }), _doReset: function () { s._doReset.call(this); for (var t = this.cfg.drop; t > 0; t--)r.call(this) } }); e.RC4Drop = n._createHelper(a) }(), t.mode.CTRGladman = function () { function r(t) { if (255 === (t >> 24 & 255)) { var r = t >> 16 & 255, e = t >> 8 & 255, i = 255 & t; 255 === r ? (r = 0, 255 === e ? (e = 0, 255 === i ? i = 0 : ++i) : ++e) : ++r, t = 0, t += r << 16, t += e << 8, t += i } else t += 1 << 24; return t } function e(t) { return 0 === (t[0] = r(t[0])) && (t[1] = r(t[1])), t } var i = t.lib.BlockCipherMode.extend(), n = i.Encryptor = i.extend({ processBlock: function (t, r) { var i = this._cipher, n = i.blockSize, o = this._iv, s = this._counter; o && (s = this._counter = o.slice(0), this._iv = void 0), e(s); var a = s.slice(0); i.encryptBlock(a, 0); for (var c = 0; c < n; c++)t[r + c] ^= a[c] } }); return i.Decryptor = n, i }(), function () { function r() { for (var t = this._X, r = this._C, e = 0; e < 8; e++)a[e] = r[e]; r[0] = r[0] + 1295307597 + this._b | 0, r[1] = r[1] + 3545052371 + (r[0] >>> 0 < a[0] >>> 0 ? 1 : 0) | 0, r[2] = r[2] + 886263092 + (r[1] >>> 0 < a[1] >>> 0 ? 1 : 0) | 0, r[3] = r[3] + 1295307597 + (r[2] >>> 0 < a[2] >>> 0 ? 1 : 0) | 0, r[4] = r[4] + 3545052371 + (r[3] >>> 0 < a[3] >>> 0 ? 1 : 0) | 0, r[5] = r[5] + 886263092 + (r[4] >>> 0 < a[4] >>> 0 ? 1 : 0) | 0, r[6] = r[6] + 1295307597 + (r[5] >>> 0 < a[5] >>> 0 ? 1 : 0) | 0, r[7] = r[7] + 3545052371 + (r[6] >>> 0 < a[6] >>> 0 ? 1 : 0) | 0, this._b = r[7] >>> 0 < a[7] >>> 0 ? 1 : 0; for (var e = 0; e < 8; e++) { var i = t[e] + r[e], n = 65535 & i, o = i >>> 16, s = ((n * n >>> 17) + n * o >>> 15) + o * o, h = ((4294901760 & i) * i | 0) + ((65535 & i) * i | 0); c[e] = s ^ h } t[0] = c[0] + (c[7] << 16 | c[7] >>> 16) + (c[6] << 16 | c[6] >>> 16) | 0, t[1] = c[1] + (c[0] << 8 | c[0] >>> 24) + c[7] | 0, t[2] = c[2] + (c[1] << 16 | c[1] >>> 16) + (c[0] << 16 | c[0] >>> 16) | 0, t[3] = c[3] + (c[2] << 8 | c[2] >>> 24) + c[1] | 0, t[4] = c[4] + (c[3] << 16 | c[3] >>> 16) + (c[2] << 16 | c[2] >>> 16) | 0, t[5] = c[5] + (c[4] << 8 | c[4] >>> 24) + c[3] | 0, t[6] = c[6] + (c[5] << 16 | c[5] >>> 16) + (c[4] << 16 | c[4] >>> 16) | 0, t[7] = c[7] + (c[6] << 8 | c[6] >>> 24) + c[5] | 0 } var e = t, i = e.lib, n = i.StreamCipher, o = e.algo, s = [], a = [], c = [], h = o.Rabbit = n.extend({ _doReset: function () { for (var t = this._key.words, e = this.cfg.iv, i = 0; i < 4; i++)t[i] = 16711935 & (t[i] << 8 | t[i] >>> 24) | 4278255360 & (t[i] << 24 | t[i] >>> 8); var n = this._X = [t[0], t[3] << 16 | t[2] >>> 16, t[1], t[0] << 16 | t[3] >>> 16, t[2], t[1] << 16 | t[0] >>> 16, t[3], t[2] << 16 | t[1] >>> 16], o = this._C = [t[2] << 16 | t[2] >>> 16, 4294901760 & t[0] | 65535 & t[1], t[3] << 16 | t[3] >>> 16, 4294901760 & t[1] | 65535 & t[2], t[0] << 16 | t[0] >>> 16, 4294901760 & t[2] | 65535 & t[3], t[1] << 16 | t[1] >>> 16, 4294901760 & t[3] | 65535 & t[0]]; this._b = 0; for (var i = 0; i < 4; i++)r.call(this); for (var i = 0; i < 8; i++)o[i] ^= n[i + 4 & 7]; if (e) { var s = e.words, a = s[0], c = s[1], h = 16711935 & (a << 8 | a >>> 24) | 4278255360 & (a << 24 | a >>> 8), l = 16711935 & (c << 8 | c >>> 24) | 4278255360 & (c << 24 | c >>> 8), f = h >>> 16 | 4294901760 & l, u = l << 16 | 65535 & h; o[0] ^= h, o[1] ^= f, o[2] ^= l, o[3] ^= u, o[4] ^= h, o[5] ^= f, o[6] ^= l, o[7] ^= u; for (var i = 0; i < 4; i++)r.call(this) } }, _doProcessBlock: function (t, e) { var i = this._X; r.call(this), s[0] = i[0] ^ i[5] >>> 16 ^ i[3] << 16, s[1] = i[2] ^ i[7] >>> 16 ^ i[5] << 16, s[2] = i[4] ^ i[1] >>> 16 ^ i[7] << 16, s[3] = i[6] ^ i[3] >>> 16 ^ i[1] << 16; for (var n = 0; n < 4; n++)s[n] = 16711935 & (s[n] << 8 | s[n] >>> 24) | 4278255360 & (s[n] << 24 | s[n] >>> 8), t[e + n] ^= s[n] }, blockSize: 4, ivSize: 2 }); e.Rabbit = n._createHelper(h) }(), t.mode.CTR = function () { var r = t.lib.BlockCipherMode.extend(), e = r.Encryptor = r.extend({ processBlock: function (t, r) { var e = this._cipher, i = e.blockSize, n = this._iv, o = this._counter; n && (o = this._counter = n.slice(0), this._iv = void 0); var s = o.slice(0); e.encryptBlock(s, 0), o[i - 1] = o[i - 1] + 1 | 0; for (var a = 0; a < i; a++)t[r + a] ^= s[a] } }); return r.Decryptor = e, r }(), function () { function r() { for (var t = this._X, r = this._C, e = 0; e < 8; e++)a[e] = r[e]; r[0] = r[0] + 1295307597 + this._b | 0, r[1] = r[1] + 3545052371 + (r[0] >>> 0 < a[0] >>> 0 ? 1 : 0) | 0, r[2] = r[2] + 886263092 + (r[1] >>> 0 < a[1] >>> 0 ? 1 : 0) | 0, r[3] = r[3] + 1295307597 + (r[2] >>> 0 < a[2] >>> 0 ? 1 : 0) | 0, r[4] = r[4] + 3545052371 + (r[3] >>> 0 < a[3] >>> 0 ? 1 : 0) | 0, r[5] = r[5] + 886263092 + (r[4] >>> 0 < a[4] >>> 0 ? 1 : 0) | 0, r[6] = r[6] + 1295307597 + (r[5] >>> 0 < a[5] >>> 0 ? 1 : 0) | 0, r[7] = r[7] + 3545052371 + (r[6] >>> 0 < a[6] >>> 0 ? 1 : 0) | 0, this._b = r[7] >>> 0 < a[7] >>> 0 ? 1 : 0; for (var e = 0; e < 8; e++) { var i = t[e] + r[e], n = 65535 & i, o = i >>> 16, s = ((n * n >>> 17) + n * o >>> 15) + o * o, h = ((4294901760 & i) * i | 0) + ((65535 & i) * i | 0); c[e] = s ^ h } t[0] = c[0] + (c[7] << 16 | c[7] >>> 16) + (c[6] << 16 | c[6] >>> 16) | 0, t[1] = c[1] + (c[0] << 8 | c[0] >>> 24) + c[7] | 0, t[2] = c[2] + (c[1] << 16 | c[1] >>> 16) + (c[0] << 16 | c[0] >>> 16) | 0, t[3] = c[3] + (c[2] << 8 | c[2] >>> 24) + c[1] | 0, t[4] = c[4] + (c[3] << 16 | c[3] >>> 16) + (c[2] << 16 | c[2] >>> 16) | 0, t[5] = c[5] + (c[4] << 8 | c[4] >>> 24) + c[3] | 0, t[6] = c[6] + (c[5] << 16 | c[5] >>> 16) + (c[4] << 16 | c[4] >>> 16) | 0, t[7] = c[7] + (c[6] << 8 | c[6] >>> 24) + c[5] | 0 } var e = t, i = e.lib, n = i.StreamCipher, o = e.algo, s = [], a = [], c = [], h = o.RabbitLegacy = n.extend({ _doReset: function () { var t = this._key.words, e = this.cfg.iv, i = this._X = [t[0], t[3] << 16 | t[2] >>> 16, t[1], t[0] << 16 | t[3] >>> 16, t[2], t[1] << 16 | t[0] >>> 16, t[3], t[2] << 16 | t[1] >>> 16], n = this._C = [t[2] << 16 | t[2] >>> 16, 4294901760 & t[0] | 65535 & t[1], t[3] << 16 | t[3] >>> 16, 4294901760 & t[1] | 65535 & t[2], t[0] << 16 | t[0] >>> 16, 4294901760 & t[2] | 65535 & t[3], t[1] << 16 | t[1] >>> 16, 4294901760 & t[3] | 65535 & t[0]]; this._b = 0; for (var o = 0; o < 4; o++)r.call(this); for (var o = 0; o < 8; o++)n[o] ^= i[o + 4 & 7]; if (e) { var s = e.words, a = s[0], c = s[1], h = 16711935 & (a << 8 | a >>> 24) | 4278255360 & (a << 24 | a >>> 8), l = 16711935 & (c << 8 | c >>> 24) | 4278255360 & (c << 24 | c >>> 8), f = h >>> 16 | 4294901760 & l, u = l << 16 | 65535 & h; n[0] ^= h, n[1] ^= f, n[2] ^= l, n[3] ^= u, n[4] ^= h, n[5] ^= f, n[6] ^= l, n[7] ^= u; for (var o = 0; o < 4; o++)r.call(this) } }, _doProcessBlock: function (t, e) { var i = this._X; r.call(this), s[0] = i[0] ^ i[5] >>> 16 ^ i[3] << 16, s[1] = i[2] ^ i[7] >>> 16 ^ i[5] << 16, s[2] = i[4] ^ i[1] >>> 16 ^ i[7] << 16, s[3] = i[6] ^ i[3] >>> 16 ^ i[1] << 16; for (var n = 0; n < 4; n++)s[n] = 16711935 & (s[n] << 8 | s[n] >>> 24) | 4278255360 & (s[n] << 24 | s[n] >>> 8), t[e + n] ^= s[n] }, blockSize: 4, ivSize: 2 }); e.RabbitLegacy = n._createHelper(h) }(), t.pad.ZeroPadding = { pad: function (t, r) { var e = 4 * r; t.clamp(), t.sigBytes += e - (t.sigBytes % e || e) }, unpad: function (t) { for (var r = t.words, e = t.sigBytes - 1; !(r[e >>> 2] >>> 24 - e % 4 * 8 & 255);)e--; t.sigBytes = e + 1 } }, t
});
const $ = new Env("京喜财富岛");
const JD_API_HOST = "https://m.jingxi.com/";
const notify = $.isNode() ? require('./sendNotify') : '';
const jdCookieNode = $.isNode() ? require("./jdCookie.js") : "";
$.showLog = $.getdata("cfd_showLog") ? $.getdata("cfd_showLog") === "true" : false;
$.notifyTime = $.getdata("cfd_notifyTime");
$.result = [];
$.shareCodes = [];
let cookiesArr = [], cookie = '', token = '';
let UA, UAInfo = {}
let nowTimes;

const randomCount = $.isNode() ? 3 : 3;
if ($.isNode()) {
  Object.keys(jdCookieNode).forEach((item) => {
    cookiesArr.push(jdCookieNode[item])
  })
  if (process.env.JD_DEBUG && process.env.JD_DEBUG === 'false') console.log = () => {};
  if (JSON.stringify(process.env).indexOf('GITHUB') > -1) process.exit(0);
} else {
  cookiesArr = [$.getdata('CookieJD'), $.getdata('CookieJD2'), ...jsonParse($.getdata('CookiesJD') || "[]").map(item => item.cookie)].filter(item => !!item);
}
$.appId = 10028;
!(async () => {
  await requireConfig();
  if (!cookiesArr[0]) {
    $.msg($.name, '【提示】请先获取京东账号一cookie\n直接使用NobyDa的京东签到获取', 'https://bean.m.jd.com/bean/signIndex.action', {"open-url": "https://bean.m.jd.com/bean/signIndex.action"});
    return;
  }
  $.CryptoJS = $.isNode() ? require('crypto-js') : CryptoJS;
  await requestAlgo();
  await $.wait(1000)
  let res = await getAuthorShareCode('https://wuzhi03.coding.net/p/dj/d/shareCodes/git/raw/main/jd_cfd.json')
  $.strMyShareIds = [...(res && res.shareId || [])]
  for (let i = 0; i < cookiesArr.length; i++) {
    if (cookiesArr[i]) {
      cookie = cookiesArr[i];
      $.UserName = decodeURIComponent(cookie.match(/pt_pin=([^; ]+)(?=;?)/) && cookie.match(/pt_pin=([^; ]+)(?=;?)/)[1]);
      $.index = i + 1;
      $.nickName = '';
      $.isLogin = true;
      await TotalBean();
      console.log(`\n******开始【京东账号${$.index}】${$.nickName || $.UserName}*********\n`);
      if (!$.isLogin) {
        $.msg($.name, `【提示】cookie已失效`, `京东账号${$.index} ${$.nickName || $.UserName}\n请重新登录获取\nhttps://bean.m.jd.com/bean/signIndex.action`, {"open-url": "https://bean.m.jd.com/bean/signIndex.action"});

        if ($.isNode()) {
          await notify.sendNotify(`${$.name}cookie已失效 - ${$.UserName}`, `京东账号${$.index} ${$.UserName}\n请重新登录获取cookie`);
        }
        continue
      }
      $.allTask = []
      $.info = {}
      UA = `jdpingou;iPhone;4.13.0;14.4.2;${randomString(40)};network/wifi;model/iPhone10,2;appBuild/100609;ADID/00000000-0000-0000-0000-000000000000;supportApplePay/1;hasUPPay/0;pushNoticeIsOpen/1;hasOCPay/0;supportBestPay/0;session/${Math.random * 98 + 1};pap/JA2019_3111789;brand/apple;supportJDSHWK/1;Mozilla/5.0 (iPhone; CPU iPhone OS 14_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148`
      token = await getJxToken()
      await shareCodesFormat()
      await cfd();
      await $.wait(2000);
      UAInfo[$.UserName] = UA
    }
  }
  for (let i = 0; i < cookiesArr.length; i++) {
    cookie = cookiesArr[i];
    $.UserName = decodeURIComponent(cookie.match(/pt_pin=([^; ]+)(?=;?)/) && cookie.match(/pt_pin=([^; ]+)(?=;?)/)[1])
    $.canHelp = true
    UA = UAInfo[$.UserName]
    if ($.shareCodes && $.shareCodes.length) {
      console.log(`\n自己账号内部循环互助\n`);
      for (let j = 0; j < $.shareCodes.length && $.canHelp; j++) {
        console.log(`账号${$.UserName} 去助力 ${$.shareCodes[j]}`)
        $.delcode = false
        await helpByStage($.shareCodes[j])
        await $.wait(2000)
        if ($.delcode) {
          $.shareCodes.splice(j, 1)
          j--
          continue
        }
      }
    }
    if ($.strMyShareIds && $.strMyShareIds.length && $.canHelp) {
      console.log(`\n助力作者\n`);
      for (let j = 0; j < $.strMyShareIds.length && $.canHelp; j++) {
        console.log(`账号${$.UserName} 去助力 ${$.strMyShareIds[j]}`)
        $.delcode = false
        await helpByStage($.strMyShareIds[j])
        await $.wait(2000)
        if ($.delcode) {
          $.strMyShareIds.splice(j, 1)
          j--
          continue
        }
      }
    }
  }
  await showMsg();
})()
    .catch((e) => $.logErr(e))
    .finally(() => $.done());

async function cfd() {
  try {
    nowTimes = new Date(new Date().getTime() + new Date().getTimezoneOffset() * 60 * 1000 + 8 * 60 * 60 * 1000)
    let beginInfo = await getUserInfo();
    if (beginInfo.LeadInfo.dwLeadType === 2) {
      console.log(`还未开通活动，尝试初始化`)
      await noviceTask()
      await $.wait(2000)
      beginInfo = await getUserInfo(false);
      if (beginInfo.LeadInfo.dwLeadType !== 2) {
        console.log(`初始化成功\n`)
      } else {
        console.log(`初始化失败\n`)
        return
      }
    }

    // 寻宝
    console.log(`寻宝`)
    let XBDetail = beginInfo.XbStatus.XBDetail.filter((x) => x.ddwColdEndTm === 0 && x.dwRemainCnt === 3)
    if (XBDetail.length !== 0) {
      console.log(`开始寻宝`)
      for (let key of Object.keys(beginInfo.XbStatus.XBDetail)) {
        let vo = beginInfo.XbStatus.XBDetail[key]
        await $.wait(2000)
        await TreasureHunt(vo.strIndex)
      }
    } else {
      console.log(`暂无宝物`)
    }

    //每日签到
    await $.wait(2000)
    await getTakeAggrPage('sign')

    //小程序每日签到
    await $.wait(2000)
    await getTakeAggrPage('wxsign')

    //助力奖励
    await $.wait(2000)
    await getTakeAggrPage('helpdraw')

    console.log('')
    //卖贝壳
    // await $.wait(2000)
    // await querystorageroom('1')

    //升级建筑
    await $.wait(2000)
    for(let key of Object.keys($.info.buildInfo.buildList)) {
      let vo = $.info.buildInfo.buildList[key]
      let body = `strBuildIndex=${vo.strBuildIndex}`
      await getBuildInfo(body, vo)
      await $.wait(2000)
    }

    //合成珍珠
    if (nowTimes.getHours() >= 5) {
      await $.wait(2000)
      await composeGameState()
    }

    //接待贵宾
    console.log(`接待贵宾`)
    if ($.info.StoryInfo.StoryList) {
      await $.wait(2000)
      for (let key of Object.keys($.info.StoryInfo.StoryList)) {
        let vo = $.info.StoryInfo.StoryList[key]
        if (vo.Special) {
          console.log(`请贵宾下船，需等待${vo.Special.dwWaitTime}秒`)
          await specialUserOper(vo.strStoryId, '2', vo.ddwTriggerDay, vo)
          await $.wait(vo.Special.dwWaitTime * 1000)
          await specialUserOper(vo.strStoryId, '3', vo.ddwTriggerDay, vo)
          await $.wait(2000)
        } else {
          console.log(`当前暂无贵宾\n`)
        }
      }
    } else {
      console.log(`当前暂无贵宾\n`)
    }

    //收藏家
    console.log(`收藏家`)
    if ($.info.StoryInfo.StoryList) {
      await $.wait(2000)
      for (let key of Object.keys($.info.StoryInfo.StoryList)) {
        let vo = $.info.StoryInfo.StoryList[key]
        if (vo.Collector) {
          console.log(`喜欢贝壳的收藏家来了，快去卖贝壳吧~`)
          await collectorOper(vo.strStoryId, '2', vo.ddwTriggerDay)
          await $.wait(2000)
          await querystorageroom('2')
          await $.wait(2000)
          await collectorOper(vo.strStoryId, '4', vo.ddwTriggerDay)
        } else {
          console.log(`当前暂无收藏家\n`)
        }
      }
    } else {
      console.log(`当前暂无收藏家\n`)
    }

    //美人鱼
    console.log(`美人鱼`)
    if ($.info.StoryInfo.StoryList) {
      await $.wait(2000)
      for (let key of Object.keys($.info.StoryInfo.StoryList)) {
        let vo = $.info.StoryInfo.StoryList[key]
        if (vo.Mermaid) {
          if (vo.Mermaid.dwIsToday === 1) {
            console.log(`可怜的美人鱼困在沙滩上了，快去解救她吧~`)
            await mermaidOper(vo.strStoryId, '1', vo.ddwTriggerDay)
          } else if (vo.Mermaid.dwIsToday === 0) {
            await mermaidOper(vo.strStoryId, '4', vo.ddwTriggerDay)
          }
        } else {
          console.log(`当前暂无美人鱼\n`)
        }
      }
    } else {
      console.log(`当前暂无美人鱼\n`)
    }

    //倒垃圾
    await $.wait(2000)
    await queryRubbishInfo()

    //雇导游
    await $.wait(2000);
    await employTourGuideInfo();

    console.log(`\n做任务`)
    //牛牛任务
    await $.wait(2000)
    await getActTask()

    //日常任务
    await $.wait(2000);
    await getTaskList(0);
    await $.wait(2000);
    await browserTask(0);

    //成就任务
    await $.wait(2000);
    await getTaskList(1);
    await $.wait(2000);
    await browserTask(1);

    await $.wait(2000);
    const endInfo = await getUserInfo(false);
    $.result.push(
        `【京东账号${$.index}】${$.nickName || $.UserName}`,
        `【🥇金币】${endInfo.ddwCoinBalance}`,
        `【💵财富值】${endInfo.ddwRichBalance}\n`,
    );

  } catch (e) {
    $.logErr(e)
  }
}

// 寻宝
function TreasureHunt(strIndex) {
  return new Promise((resolve) => {
    $.get(taskUrl(`user/TreasureHunt`, `strIndex=${strIndex}`), (err, resp, data) => {
      try {
        if (err) {
          console.log(`${JSON.stringify(err)}`)
          console.log(`${$.name} TreasureHunt API请求失败，请检查网路重试`)
        } else {
          data = JSON.parse(data);
          if (data.iRet === 0) {
            if (data.AwardInfo.dwAwardType === 0) {
              console.log(`${data.strAwardDesc}，获得 ${data.AwardInfo.ddwValue} 金币`)
            } else if (data.AwardInfo.dwAwardType === 1) {
              console.log(`${data.strAwardDesc}，获得 ${data.AwardInfo.ddwValue} 财富`)
            } else {
              console.log(JSON.stringify(data))
            }
          } else {
            console.log(`寻宝失败：${data.sErrMsg}`)
          }
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve();
      }
    })
  })
}

// 合成珍珠
async function composeGameState(type = true) {
  return new Promise(async (resolve) => {
    $.get(taskUrl(`user/ComposeGameState`, `dwFirst=1`), async (err, resp, data) => {
      try {
        if (err) {
          console.log(`${JSON.stringify(err)}`)
          console.log(`${$.name} ComposeGameState API请求失败，请检查网路重试`)
        } else {
          data = JSON.parse(data);
          if (type) {
            console.log(`合成珍珠`)
            if (data.iRet === 0) {
              if (data.dwCurProgress < data.stagelist[data.stagelist.length - 1].dwCurStageEndCnt && data.strDT) {
                let count = data.stagelist[data.stagelist.length - 1].dwCurStageEndCnt
                console.log(`当前已合成${data.dwCurProgress}颗珍珠，还需合成珍珠${count - data.dwCurProgress}颗\n`)
                for (let j = data.dwCurProgress; j < count; j++) {
                  let num = Math.ceil(Math.random() * 12 + 12)
                  console.log(`合成珍珠：模拟操作${num}次`)
                  for (let v = 0; v < num; v++) {
                    console.log(`模拟操作进度：${v + 1}/${num}`)
                    await $.wait(2000)
                    await realTmReport(data.strMyShareId)
                  }
                  let res = await composeGameAddProcess(data.strDT)
                  if (res.iRet === 0) {
                    console.log(`\n合成珍珠成功：${j + 1}/${count}\n`)
                  } else {
                    console.log(`\n合成珍珠失败：${data.sErrMsg}\n`)
                  }
                }
                let composeGameStateRes = await composeGameState(false)
                console.log("合成珍珠领奖")
                for (let key of Object.keys(composeGameStateRes.stagelist)) {
                  let vo = composeGameStateRes.stagelist[key]
                  if (vo.dwIsAward == 0 && composeGameStateRes.dwCurProgress >= vo.dwCurStageEndCnt) {
                    await $.wait(2000)
                    await composeGameAward(vo.dwCurStageEndCnt)
                  }
                }
              } else {
                console.log(`今日已完成\n`)
              }
            }
          }
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve(data);
      }
    })
  })
}
function realTmReport(strMyShareId) {
  return new Promise((resolve) => {
    $.get(taskUrl(`user/RealTmReport`, `dwIdentityType=0&strBussKey=composegame&strMyShareId=${strMyShareId}&ddwCount=5`), (err, resp, data) => {
      try {
        if (err) {
          console.log(`${JSON.stringify(err)}`)
          console.log(`${$.name} RealTmReport API请求失败，请检查网路重试`)
        } else {
          data = JSON.parse(data);
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve();
      }
    })
  })
}
function composeGameAddProcess(strDT) {
  return new Promise((resolve) => {
    $.get(taskUrl(`user/ComposeGameAddProcess`, `strBT=${strDT}`), (err, resp, data) => {
      try {
        if (err) {
          console.log(`${JSON.stringify(err)}`)
          console.log(`${$.name} ComposeGameAddProcess API请求失败，请检查网路重试`)
        } else {
          data = JSON.parse(data);
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve(data);
      }
    })
  })
}
function composeGameAward(dwCurStageEndCnt) {
  return new Promise((resolve) => {
    $.get(taskUrl(`user/ComposeGameAward`, `dwCurStageEndCnt=${dwCurStageEndCnt}`), (err, resp, data) => {
      try {
        if (err) {
          console.log(`${JSON.stringify(err)}`)
          console.log(`${$.name} ComposeGameAward API请求失败，请检查网路重试`)
        } else {
          data = JSON.parse(data);
          if (data.iRet === 0) {
            if (data.dwPrizeType === 0) {
              console.log(`合成珍珠领奖成功：获得${data.ddwCoin}金币`)
            } else if (data.dwPrizeType === 1) {
              console.log(`合成珍珠领奖成功：获得${data.ddwMoney}财富\n`)
            }
          } else {
            console.log(`合成珍珠领奖失败：${data.sErrMsg}\n`)
          }
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve(data);
      }
    })
  })
}

// 接待贵宾
function specialUserOper(strStoryId, dwType, ddwTriggerDay, StoryList) {
  return new Promise((resolve) => {
    $.get(taskUrl(`story/SpecialUserOper`, `strStoryId=${strStoryId}&dwType=${dwType}&triggerType=0&ddwTriggerDay=${ddwTriggerDay}`), (err, resp, data) => {
      try {
        if (err) {
          console.log(`${JSON.stringify(err)}`)
          console.log(`${$.name} SpecialUserOper API请求失败，请检查网路重试`)
        } else {
          data = JSON.parse(data);
          if (dwType === '2') {
            if (data.iRet === 0 || data.sErrMsg === "success") {
              console.log(`贵宾'${StoryList.Special.strName}'下船成功`)
            } else {
              console.log(`贵宾'${StoryList.Special.strName}'下船失败 ${data.sErrMsg}\n`)
            }
          } else if (dwType === '3') {
            if (data.iRet === 0 || data.sErrMsg === "success") {
              console.log(`贵宾'${StoryList.Special.strName}'用餐成功：获得${StoryList.Special.ddwCoin}金币\n`)
            } else {
              console.log(`贵宾'${StoryList.Special.strName}'用餐失败：${data.sErrMsg}\n`)
            }
          }
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve();
      }
    })
  })
}

// 收藏家
function collectorOper(strStoryId, dwType, ddwTriggerDay) {
  return new Promise((resolve) => {
    $.get(taskUrl(`story/CollectorOper`, `strStoryId=${strStoryId}&dwType=${dwType}&ddwTriggerDay=${ddwTriggerDay}`), (err, resp, data) => {
      try {
        if (err) {
          console.log(`${JSON.stringify(err)}`)
          console.log(`${$.name} CollectorOper API请求失败，请检查网路重试`)
        } else {
          data = JSON.parse(data);
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve(data);
      }
    })
  })
}

// 美人鱼
async function mermaidOper(strStoryId, dwType, ddwTriggerDay) {
  return new Promise(async (resolve) => {
    $.get(taskUrl(`story/MermaidOper`, `strStoryId=${strStoryId}&dwType=${dwType}&ddwTriggerDay=${ddwTriggerDay}`), async (err, resp, data) => {
      try {
        if (err) {
          console.log(`${JSON.stringify(err)}`)
          console.log(`${$.name} MermaidOper API请求失败，请检查网路重试`)
        } else {
          data = JSON.parse(data);
          switch (dwType) {
            case '1':
              if (data.iRet === 0 || data.sErrMsg === 'success') {
                console.log(`开始解救美人鱼`)
                dwType = '3'
                await mermaidOper(strStoryId, dwType, ddwTriggerDay)
                await $.wait(2000)
              } else {
                console.log(`开始解救美人鱼失败：${data.sErrMsg}\n`)
              }
              break
            case '2':
              break
            case '3':
              if (data.iRet === 0 || data.sErrMsg === 'success') {
                dwType = '2'
                let mermaidOperRes = await mermaidOper(strStoryId, dwType, ddwTriggerDay)
                console.log(`解救美人鱼成功：获得${mermaidOperRes.Data.ddwCoin || '0'}金币\n`)
              } else {
                console.log(`解救美人鱼失败：${data.sErrMsg}\n`)
              }
              break
            case '4':
              if (data.iRet === 0 || data.sErrMsg === 'success') {
                console.log(`昨日解救美人鱼领奖成功：获得${data.Data.Prize.strPrizeName}\n`)
              } else {
                console.log(`昨日解救美人鱼领奖失败：${data.sErrMsg}\n`)
              }             
              break
            default:
              break
          }
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve(data);
      }
    })
  })
}

// 卖贝壳
async function querystorageroom(dwSceneId) {
  return new Promise(async (resolve) => {
    $.get(taskUrl(`story/querystorageroom`), async (err, resp, data) => {
      try {
        if (err) {
          console.log(`${JSON.stringify(err)}`)
          console.log(`${$.name} querystorageroom API请求失败，请检查网路重试`)
        } else {
          data = JSON.parse(data);
          console.log(`\n卖贝壳`)
          let bags = []
          for (let key of Object.keys(data.Data.Office)) {
            let vo = data.Data.Office[key]
            bags.push(vo.dwType)
            bags.push(vo.dwCount)
          }
          if (bags.length !== 0) {
            let strTypeCnt = ''
            for (let j = 0; j < bags.length; j++) {
              if (j % 2 === 0) {
                strTypeCnt += `${bags[j]}:`
              } else {
                strTypeCnt += `${bags[j]}|`
              }
            }
            await $.wait(2000)
            await sellgoods(`strTypeCnt=${strTypeCnt}&dwSceneId=${dwSceneId}`)
          } else {
            console.log(`背包是空的，快去捡贝壳吧\n`)
          }
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve();
      }
    })
  })
}
function sellgoods(body) {
  return new Promise((resolve) => {
    $.get(taskUrl(`story/sellgoods`, body), (err, resp, data) => {
      try {
        if (err) {
          console.log(`${JSON.stringify(err)}`)
          console.log(`${$.name} sellgoods API请求失败，请检查网路重试`)
        } else {
          data = JSON.parse(data);
          if (data.iRet === 0) {
            console.log(`贝壳出售成功：获得${data.Data.ddwCoin}金币 ${data.Data.ddwMoney}财富\n`)
          } else {
            console.log(`贝壳出售失败：${data.sErrMsg}\n`)
          }
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve();
      }
    })
  })
}

// 每日签到
async function getTakeAggrPage(type) {
  return new Promise(async (resolve) => {
    switch (type) {
      case 'sign':
        $.get(taskUrl(`story/GetTakeAggrPage`), async (err, resp, data) => {
          try {
            if (err) {
              console.log(`${JSON.stringify(err)}`)
              console.log(`${$.name} GetTakeAggrPage API请求失败，请检查网路重试`)
            } else {
              data = JSON.parse(data);
              console.log(`\n每日签到`)
              for (let key of Object.keys(data.Data.Sign.SignList)) {
                let vo = data.Data.Sign.SignList[key]
                if (vo.dwDayId === data.Data.Sign.dwTodayId) {
                  if (vo.dwStatus !== 1) {
                    const body = `ddwCoin=${vo.ddwCoin}&ddwMoney=${vo.ddwMoney}&dwPrizeType=${vo.dwPrizeType}&strPrizePool=${vo.strPrizePool}&dwPrizeLv=${vo.dwBingoLevel}&strPgUUNum=${token['farm_jstoken']}&strPgtimestamp=${token['timestamp']}&strPhoneID=${token['phoneid']}`
                    await rewardSign(body)
                    await $.wait(2000)
                  } else {
                    console.log(`今日已签到\n`)
                    break
                  }
                }
              }
            }
          } catch (e) {
            $.logErr(e, resp);
          } finally {
            resolve();
          }
        })
        break
      case 'wxsign':
        $.get(taskUrl(`story/GetTakeAggrPage`, '', 6), async (err, resp, data) => {
          try {
            if (err) {
              console.log(`${JSON.stringify(err)}`)
              console.log(`${$.name} GetTakeAggrPage API请求失败，请检查网路重试`)
            } else {
              data = JSON.parse(data);
              console.log(`小程序每日签到`)
              for (let key of Object.keys(data.Data.Sign.SignList)) {
                let vo = data.Data.Sign.SignList[key]
                if (vo.dwDayId === data.Data.Sign.dwTodayId) {
                  if (vo.dwStatus !== 1) {
                    const body = `ddwCoin=${vo.ddwCoin}&ddwMoney=${vo.ddwMoney}&dwPrizeType=${vo.dwPrizeType}&strPrizePool=${vo.strPrizePool}&dwPrizeLv=${vo.dwBingoLevel}&strPgUUNum=${token['farm_jstoken']}&strPgtimestamp=${token['timestamp']}&strPhoneID=${token['phoneid']}`
                    await rewardSign(body, 6)
                    await $.wait(2000)
                  } else {
                    console.log(`今日已签到\n`)
                    break
                  }
                }
              }
            }
          } catch (e) {
            $.logErr(e, resp);
          } finally {
            resolve();
          }
        })
        break
      case 'helpdraw':
        $.get(taskUrl(`story/GetTakeAggrPage`), async (err, resp, data) => {
          try {
            if (err) {
              console.log(`${JSON.stringify(err)}`)
              console.log(`${$.name} GetTakeAggrPage API请求失败，请检查网路重试`)
            } else {
              data = JSON.parse(data);
              console.log(`领助力奖励`)
              let helpNum = []
              for (let key of Object.keys(data.Data.Employee.EmployeeList)) {
                let vo = data.Data.Employee.EmployeeList[key]
                if (vo.dwStatus !== 1) {
                  helpNum.push(vo.dwId)
                }
              }
              if (helpNum.length !== 0) {
                for (let j = 0; j < helpNum.length; j++) {
                  await helpdraw(helpNum[j])
                  await $.wait(2000)
                }
              } else {
                console.log(`暂无可领助力奖励`)
              }
            }
          } catch (e) {
            $.logErr(e, resp);
          } finally {
            resolve();
          }
        })
        break
      default:
        break
    }
  })
}
function rewardSign(body, dwEnv = 7) {
  return new Promise((resolve) => {
    $.get(taskUrl(`story/RewardSign`, body, dwEnv), (err, resp, data) => {
      try {
        if (err) {
          console.log(`${JSON.stringify(err)}`)
          console.log(`${$.name} RewardSign API请求失败，请检查网路重试`)
        } else {
          data = JSON.parse(data);
          if (data.iRet === 0 || data.sErrMsg === "success") {
            if (data.Data.ddwCoin) {
              console.log(`签到成功：获得${data.Data.ddwCoin}金币\n`)
            } else if (data.Data.ddwMoney) {
              console.log(`签到成功：获得${data.Data.ddwMoney}财富\n`)
            } else if (data.Data.strPrizeName) {
              console.log(`签到成功：获得${data.Data.strPrizeName}\n`)
            } else {
              console.log(`签到成功：很遗憾未中奖~\n`)
            }
          } else {
            console.log(`签到失败：${data.sErrMsg}\n`)
          }
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve();
      }
    })
  })
}
function helpdraw(dwUserId) {
  return new Promise((resolve) => {
    $.get(taskUrl(`story/helpdraw`, `dwUserId=${dwUserId}`), (err, resp, data) => {
      try {
        if (err) {
          console.log(`${JSON.stringify(err)}`)
          console.log(`${$.name} helpdraw API请求失败，请检查网路重试`)
        } else {
          data = JSON.parse(data);
          if (data.iRet === 0 || data.sErrMsg === "success") {
            if (data.Data.StagePrizeInfo) {
              console.log(`领取助力奖励成功：获得${data.Data.ddwCoin}金币 ${data.Data.StagePrizeInfo.ddwMoney}财富 ${(data.Data.StagePrizeInfo.strPrizeName && !data.Data.StagePrizeInfo.ddwMoney) ? data.Data.StagePrizeInfo.strPrizeName : `0元`}红包`)
            } else {
              console.log(`领取助力奖励成功：获得${data.Data.ddwCoin}金币`)
            }
          } else {
            console.log(`领取助力奖励失败：${data.sErrMsg}`)
          }
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve();
      }
    })
  })
}

// 倒垃圾
async function queryRubbishInfo() {
  return new Promise(async (resolve) => {
    $.get(taskUrl(`story/QueryRubbishInfo`), async (err, resp, data) => {
      try {
        if (err) {
          console.log(`${JSON.stringify(err)}`)
          console.log(`${$.name} QueryRubbishInfo API请求失败，请检查网路重试`)
        } else {
          data = JSON.parse(data);
          console.log(`倒垃圾`)
          if (data.Data.StoryInfo.StoryList.length !== 0) {
            for (let key of Object.keys(data.Data.StoryInfo.StoryList)) {
              let vo = data.Data.StoryInfo.StoryList[key]
              if (vo.Rubbish) {
                await $.wait(2000)
                let rubbishOperRes = await rubbishOper('1')
                if (Object.keys(rubbishOperRes.Data.ThrowRubbish.Game).length) {
                  console.log(`获取垃圾信息成功：本次需要垃圾分类`)
                  for (let key of Object.keys(rubbishOperRes.Data.ThrowRubbish.Game.RubbishList)) {
                    let vo = rubbishOperRes.Data.ThrowRubbish.Game.RubbishList[key]
                    await $.wait(2000)
                    var rubbishOperTwoRes = await rubbishOper('2', `dwRubbishId=${vo.dwId}`)
                  }
                  if (rubbishOperTwoRes.iRet === 0) {
                    let AllRubbish = rubbishOperTwoRes.Data.RubbishGame.AllRubbish
                    console.log(`倒垃圾成功：获得${AllRubbish.ddwCoin}金币 ${AllRubbish.ddwMoney}财富\n`)
                  } else {
                    console.log(`倒垃圾失败：${rubbishOperTwoRes.sErrMsg}\n`)
                  }
                } else {
                  console.log(`获取垃圾信息成功：本次不需要垃圾分类`)
                  if (rubbishOperRes.iRet === 0 || rubbishOperRes.sErrMsg === "success") {
                    console.log(`倒垃圾成功：获得${rubbishOperRes.Data.ThrowRubbish.ddwCoin}金币\n`)
                  } else {
                    console.log(`倒垃圾失败：${rubbishOperRes.sErrMsg}\n`)
                  }
                }
              } else {
                console.log(`当前暂无垃圾\n`)
              }
            }
          } else {
            console.log(`当前暂无垃圾\n`)
          }
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve();
      }
    })
  })
}
function rubbishOper(dwType, body = '') {
  return new Promise((resolve) => {
    switch(dwType) {
      case '1':
        $.get(taskUrl(`story/RubbishOper`, `dwType=1&dwRewardType=0`), (err, resp, data) => {
          try {
            if (err) {
              console.log(`${JSON.stringify(err)}`)
              console.log(`${$.name} RubbishOper API请求失败，请检查网路重试`)
            } else {
              data = JSON.parse(data);
            }
          } catch (e) {
            $.logErr(e, resp);
          } finally {
            resolve(data);
          }
        })
        break
      case '2':
        $.get(taskUrl(`story/RubbishOper`, `dwType=2&dwRewardType=0&${body}`), (err, resp, data) => {
          try {
            if (err) {
              console.log(`${JSON.stringify(err)}`)
              console.log(`${$.name} RubbishOper API请求失败，请检查网路重试`)
            } else {
              data = JSON.parse(data);
            }
          } catch (e) {
            $.logErr(e, resp);
          } finally {
            resolve(data);
          }
        })
        break
      default:
        break
    }
  })
}

// 牛牛任务
async function getActTask(type = true) {
  return new Promise(async (resolve) => {
    $.get(taskUrl(`story/GetActTask`), async (err, resp, data) => {
      try {
        if (err) {
          console.log(`${JSON.stringify(err)}`)
          console.log(`${$.name} GetActTask API请求失败，请检查网路重试`)
        } else {
          data = JSON.parse(data);
          if (type) {
            for (let key of Object.keys(data.Data.TaskList)) {
              let vo = data.Data.TaskList[key]
              if ([1, 2].includes(vo.dwOrderId) && (vo.dwCompleteNum !== vo.dwTargetNum)) {
                console.log(`开始【🐮牛牛任务】${vo.strTaskName}`)
                for (let i = vo.dwCompleteNum; i < vo.dwTargetNum; i++) {
                  console.log(`【🐮牛牛任务】${vo.strTaskName} 进度：${i + 1}/${vo.dwTargetNum}`)
                  await doTask(vo.ddwTaskId, 2)
                  await $.wait(2000)
                }
              }
            }
            data = await getActTask(false)
            for (let key of Object.keys(data.Data.TaskList)) {
              let vo = data.Data.TaskList[key]
              if ((vo.dwCompleteNum >= vo.dwTargetNum) && vo.dwAwardStatus !== 1) {
                await awardActTask('Award', vo)
                await $.wait(2000)
              }
            }
            data = await getActTask(false)
            if (data.Data.dwCompleteTaskNum >= data.Data.dwTotalTaskNum) {
              if (data.Data.dwStatus !== 4) {
                console.log(`【🐮牛牛任务】已做完，去开启宝箱`)
                await awardActTask('story/ActTaskAward')
                await $.wait(2000)
              } else {
                console.log(`【🐮牛牛任务】已做完，宝箱已开启`)
              }
            } else {
              console.log(`【🐮牛牛任务】未全部完成，无法开启宝箱\n`)
            }
          }
        }
      } catch (e) {
        $.logErr(e, resp)
      } finally {
        resolve(data)
      }
    })
  })
}
function awardActTask(function_path, taskInfo = '') {
  const { ddwTaskId, strTaskName} = taskInfo
  return new Promise((resolve) => {
    switch (function_path) {
      case 'Award':
        $.get(taskListUrl(function_path, `taskId=${ddwTaskId}`, 'jxbfddch'), (err, resp, data) => {
          try {
            if (err) {
              console.log(`${JSON.stringify(err)}`)
              console.log(`${$.name} awardActTask API请求失败，请检查网路重试`)
            } else {
              const {msg, ret, data: {prizeInfo = ''} = {}} = JSON.parse(data);
              let str = '';
              if (msg.indexOf('活动太火爆了') !== -1) {
                str = '任务为成就任务或者未到任务时间';
              } else {
                str = msg + prizeInfo ? `获得金币 ¥ ${JSON.parse(prizeInfo).ddwCoin}` : '';
              }
              console.log(`【🐮领牛牛任务奖励】${strTaskName} ${str}\n${$.showLog ? data : ''}`);
            }
          } catch (e) {
            $.logErr(e, resp);
          } finally {
            resolve();
          }
        })
        break
      case 'story/ActTaskAward':
        $.get(taskUrl(function_path), (err, resp, data) => {
          try {
            if (err) {
              console.log(`${JSON.stringify(err)}`)
              console.log(`${$.name} awardActTask API请求失败，请检查网路重试`)
            } else {
              data = JSON.parse(data);
              if (data.iRet === 0 || data.sErrMsg === 'success') {
                console.log(`【🐮牛牛任务】开启宝箱成功：获得财富 ¥ ${data.Data.ddwBigReward}\n`)
              } else {
                console.log(`【🐮牛牛任务】开启宝箱失败：${data.sErrMsg}\n`)
              }
            }
          } catch (e) {
            $.logErr(e, resp);
          } finally {
            resolve();
          }
        })
        break
      default:
        break
    }
  })
}

// 导游
async function employTourGuideInfo() {
  return new Promise(async (resolve) => {
    $.get(taskUrl(`user/EmployTourGuideInfo`), async (err, resp, data) => {
      try {
        if (err) {
          console.log(`${JSON.stringify(err)}`)
          console.log(`${$.name} EmployTourGuideInfo API请求失败，请检查网路重试`)
        } else {
          data = JSON.parse(data);
          console.log(`雇导游`)
          let minProductCoin = data.TourGuideList[0].ddwProductCoin
          for(let key of Object.keys(data.TourGuideList)) {
            let vo = data.TourGuideList[key]
            if (vo.ddwProductCoin < minProductCoin) {
              minProductCoin = vo.ddwProductCoin
            }
          }
          for(let key of Object.keys(data.TourGuideList)) {
            let vo = data.TourGuideList[key]
            let buildNmae;
            switch(vo.strBuildIndex) {
              case 'food':
                buildNmae = '京喜美食城'
                break
              case 'sea':
                buildNmae = '京喜旅馆'
                break
              case 'shop':
                buildNmae = '京喜商店'
                break
              case 'fun':
                buildNmae = '京喜游乐场'
              default:
                break
            }
            if(vo.ddwRemainTm === 0 && vo.ddwProductCoin !== minProductCoin) {
              let dwIsFree;
              if(vo.dwFreeMin !== 0) {
                dwIsFree = 1
              } else {
                dwIsFree = 0
              }
              console.log(`【${buildNmae}】雇佣费用：${vo.ddwCostCoin}金币 增加收益：${vo.ddwProductCoin}金币`)
              const body = `strBuildIndex=${vo.strBuildIndex}&dwIsFree=${dwIsFree}&ddwConsumeCoin=${vo.ddwCostCoin}`
              await employTourGuide(body, buildNmae)
            } else if (vo.ddwProductCoin !== minProductCoin) {
              console.log(`【${buildNmae}】无可雇佣导游`)
            }
            await $.wait(2000)
          }
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve();
      }
    })
  })
}
function employTourGuide(body, buildNmae) {
  return new Promise(async (resolve) => {
    $.get(taskUrl(`user/EmployTourGuide`, body), (err, resp, data) => {
      try {
        if (err) {
          console.log(`${JSON.stringify(err)}`)
          console.log(`${$.name} EmployTourGuide API请求失败，请检查网路重试`)
        } else {
          data = JSON.parse(data);
          if (data.iRet === 0) {
            console.log(`【${buildNmae}】雇佣导游成功`)
          } else {
            console.log(`【${buildNmae}】雇佣导游失败：${data.sErrMsg}`)
          }
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve();
      }
    })
  })
}

// 升级建筑
async function getBuildInfo(body, buildList, type = true) {
  let twobody = body
  return new Promise(async (resolve) => {
    $.get(taskUrl(`user/GetBuildInfo`, body), async (err, resp, data) => {
      try {
        if (err) {
          console.log(`${JSON.stringify(err)}`)
          console.log(`${$.name} GetBuildInfo API请求失败，请检查网路重试`)
        } else {
          data = JSON.parse(data);
          if (type) {
            let buildNmae;
            switch(buildList.strBuildIndex) {
              case 'food':
                buildNmae = '京喜美食城'
                break
              case 'sea':
                buildNmae = '京喜旅馆'
                break
              case 'shop':
                buildNmae = '京喜商店'
                break
              case 'fun':
                buildNmae = '京喜游乐场'
              default:
                break
            }
            if (data.dwBuildLvl === 0) {
              console.log(`创建建筑`)
              console.log(`【${buildNmae}】当前建筑还未创建，开始创建`)
              await createbuilding(`strBuildIndex=${data.strBuildIndex}`, buildNmae)
              await $.wait(2000)
              data = await getBuildInfo(twobody, buildList, false)
              await $.wait(2000)
            }
            console.log(`收金币`)
            const body = `strBuildIndex=${data.strBuildIndex}&dwType=1`
            let collectCoinRes = await collectCoin(body)
            console.log(`【${buildNmae}】收集${collectCoinRes.ddwCoin}金币`)
            await $.wait(2000)
            await getUserInfo(false)
            console.log(`升级建筑`)
            console.log(`【${buildNmae}】当前等级：${buildList.dwLvl}`)
            console.log(`【${buildNmae}】升级需要${data.ddwNextLvlCostCoin}金币，保留升级需要的3倍${data.ddwNextLvlCostCoin * 3}金币，当前拥有${$.info.ddwCoinBalance}金币`)
            if(data.dwCanLvlUp > 0 && $.info.ddwCoinBalance >= (data.ddwNextLvlCostCoin * 3)) {
              console.log(`【${buildNmae}】满足升级条件，开始升级`)
              const body = `ddwCostCoin=${data.ddwNextLvlCostCoin}&strBuildIndex=${data.strBuildIndex}`
              let buildLvlUpRes = await buildLvlUp(body)
              if (buildLvlUpRes.iRet === 0) {
                console.log(`【${buildNmae}】升级成功：获得${data.ddwLvlRich}财富\n`)
              } else {
                console.log(`【${buildNmae}】升级失败：${buildLvlUpRes.sErrMsg}\n`)
              }
            } else {
              console.log(`【${buildNmae}】不满足升级条件，跳过升级\n`)
            }
          }
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve(data);
      }
    })
  })
}
function collectCoin(body) {
  return new Promise((resolve) => {
    $.get(taskUrl(`user/CollectCoin`, body), (err, resp, data) => {
      try {
        if (err) {
          console.log(`${JSON.stringify(err)}`)
          console.log(`${$.name} CollectCoin API请求失败，请检查网路重试`)
        } else {
          data = JSON.parse(data);
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve(data);
      }
    })
  })
}
function buildLvlUp(body) {
  return new Promise((resolve) => {
    $.get(taskUrl(`user/BuildLvlUp`, body), (err, resp, data) => {
      try {
        if (err) {
          console.log(`${JSON.stringify(err)}`)
          console.log(`${$.name} BuildLvlUp API请求失败，请检查网路重试`)
        } else {
          data = JSON.parse(data);
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve(data);
      }
    })
  })
}
function createbuilding(body, buildNmae) {
  return new Promise(async (resolve) => {
    $.get(taskUrl(`user/createbuilding`, body), (err, resp, data) => {
      try {
        if (err) {
          console.log(`${JSON.stringify(err)}`)
          console.log(`${$.name} createbuilding API请求失败，请检查网路重试`)
        } else {
          data = JSON.parse(data);
          if (data.iRet === 0) console.log(`【${buildNmae}】创建成功`)
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve();
      }
    })
  })
}

// 助力
function helpByStage(shareCodes) {
  return new Promise((resolve) => {
    $.get(taskUrl(`story/helpbystage`, `strShareId=${shareCodes}`), (err, resp, data) => {
      try {
        if (err) {
          console.log(`${JSON.stringify(err)}`)
          console.log(`${$.name} helpbystage API请求失败，请检查网路重试`)
        } else {
          data = JSON.parse(data);
          if (data.iRet === 0 || data.sErrMsg === 'success') {
            console.log(`助力成功：获得${data.Data.GuestPrizeInfo.strPrizeName}`)
          } else if (data.iRet === 2232 || data.sErrMsg === '今日助力次数达到上限，明天再来帮忙吧~') {
            console.log(`助力失败：${data.sErrMsg}`)
            $.canHelp = false
          } else if (data.iRet === 9999 || data.sErrMsg === '您还没有登录，请先登录哦~') {
            console.log(`助力失败：${data.sErrMsg}`)
            $.canHelp = false
          } else if (data.iRet === 2229 || data.sErrMsg === '助力失败啦~') {
            console.log(`助力失败：您的账号或被助力的账号可能已黑，请联系客服`)
            // $.canHelp = false
          } else if (data.iRet === 2190 || data.sErrMsg === '达到助力上限') {
            console.log(`助力失败：${data.sErrMsg}`)
            $.delcode = true
          } else{
            console.log(`助力失败：${data.sErrMsg}`)
          }
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve(data);
      }
    })
  })
}

function getAuthorShareCode(url) {
  return new Promise(async resolve => {
    const options = {
      url: `${url}?${new Date()}`, "timeout": 10000, headers: {
        "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1 Edg/87.0.4280.88"
      }
    };
    if ($.isNode() && process.env.TG_PROXY_HOST && process.env.TG_PROXY_PORT) {
      const tunnel = require("tunnel");
      const agent = {
        https: tunnel.httpsOverHttp({
          proxy: {
            host: process.env.TG_PROXY_HOST,
            port: process.env.TG_PROXY_PORT * 1
          }
        })
      }
      Object.assign(options, { agent })
    }
    $.get(options, async (err, resp, data) => {
      try {
        resolve(JSON.parse(data))
      } catch (e) {
        // $.logErr(e, resp)
      } finally {
        resolve();
      }
    })
    await $.wait(10000)
    resolve();
  })
}

// 获取用户信息
function getUserInfo(showInvite = true) {
  return new Promise(async (resolve) => {
    $.get(taskUrl(`user/QueryUserInfo`, `ddwTaskId=&strShareId=&strMarkList=${escape('guider_step,collect_coin_auth,guider_medal,guider_over_flag,build_food_full,build_sea_full,build_shop_full,build_fun_full,medal_guider_show,guide_guider_show,guide_receive_vistor,daily_task,guider_daily_task')}&strPgUUNum=${token['farm_jstoken']}&strPgtimestamp=${token['timestamp']}&strPhoneID=${token['phoneid']}`), (err, resp, data) => {
      try {
        if (err) {
          console.log(`${JSON.stringify(err)}`)
          console.log(`${$.name} QueryUserInfo API请求失败，请检查网路重试`)
        } else {
          data = JSON.parse(data);
          const {
            buildInfo = {},
            ddwRichBalance,
            ddwCoinBalance,
            sErrMsg,
            strMyShareId,
            dwLandLvl,
            LeadInfo = {},
            StoryInfo = {},
            Business = {},
            XbStatus = {}
          } = data;
          if (showInvite) {
            console.log(`\n获取用户信息：${sErrMsg}\n${$.showLog ? data : ""}`);
            console.log(`\n当前等级:${dwLandLvl},金币:${ddwCoinBalance},财富值:${ddwRichBalance},连续营业天数:${Business.dwBussDayNum},离线收益:${Business.ddwCoin}\n`)
          }
          if (showInvite && strMyShareId) {
            console.log(`财富岛好友互助码每次运行都变化,旧的可继续使用`);
            console.log(`\n【京东账号${$.index}（${$.UserName}）的${$.name}好友互助码】${strMyShareId}\n\n`);
            $.shareCodes.push(strMyShareId)
          }
          $.info = {
            ...$.info,
            buildInfo,
            ddwRichBalance,
            ddwCoinBalance,
            strMyShareId,
            dwLandLvl,
            LeadInfo,
            StoryInfo,
            XbStatus
          };
          resolve({
            buildInfo,
            ddwRichBalance,
            ddwCoinBalance,
            strMyShareId,
            LeadInfo,
            StoryInfo,
            XbStatus
          });
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve();
      }
    })
  })
}

//任务
function getTaskList(taskType) {
  return new Promise(async (resolve) => {
    switch (taskType){
      case 0: //日常任务
        $.get(taskListUrl("GetUserTaskStatusList"), async (err, resp, data) => {
          try {
            if (err) {
              console.log(`${JSON.stringify(err)}`)
              console.log(`${$.name} GetUserTaskStatusList 日常任务 API请求失败，请检查网路重试`)
            } else {
              const { ret, data: { userTaskStatusList = [] } = {}, msg } = JSON.parse(data);
              $.allTask = userTaskStatusList.filter((x) => x.awardStatus !== 1 && x.taskCaller === 1);
              if($.allTask.length === 0) {
                console.log(`【📆日常任务】已做完`)
              } else {
                console.log(`获取【📆日常任务】列表 ${msg}，总共${$.allTask.length}个任务！\n${$.showLog ? data : ""}`);
              }
            }
          } catch (e) {
            $.logErr(e, resp);
          } finally {
            resolve();
          }
        });
        break;
      case 1: //成就任务
        $.get(taskListUrl("GetUserTaskStatusList"), async (err, resp, data) => {
          try {
            if (err) {
              console.log(`${JSON.stringify(err)}`)
              console.log(`${$.name} GetUserTaskStatusList 成就任务 API请求失败，请检查网路重试`)
            } else {
              const { ret, data: { userTaskStatusList = [] } = {}, msg } = JSON.parse(data);
              $.allTask = userTaskStatusList.filter((x) => (x.completedTimes >= x.targetTimes) && x.awardStatus !== 1 && x.taskCaller === 2);
              if($.allTask.length === 0) {
                console.log(`【🎖成就任务】没有可领奖的任务\n`)
              } else {
                console.log(`获取【🎖成就任务】列表 ${msg}，总共${$.allTask.length}个任务！\n${$.showLog ? data : ""}`);
              }
            }
          } catch (e) {
            $.logErr(e, resp);
          } finally {
            resolve();
          }
        });
        break;
      default:
        break;
    }
  });
}

//浏览任务 + 做任务 + 领取奖励
function browserTask(taskType) {
  return new Promise(async (resolve) => {
    switch (taskType) {
      case 0://日常任务
        for (let i = 0; i < $.allTask.length; i++) {
          const start = $.allTask[i].completedTimes, end = $.allTask[i].targetTimes
          const taskinfo = $.allTask[i];
          console.log(`开始第${i + 1}个【📆日常任务】${taskinfo.taskName}\n`);
          for (let i = start; i < end; i++) {
            //做任务
            console.log(`【📆日常任务】${taskinfo.taskName} 进度：${i + 1}/${end}`)
            await doTask(taskinfo.taskId);
            await $.wait(2000);
          }
          //领取奖励
          await awardTask(0, taskinfo);
        }
        break;
      case 1://成就任务
        for (let i = 0; i < $.allTask.length; i++) {
          const taskinfo = $.allTask[i];
          console.log(`开始第${i + 1}个【🎖成就任务】${taskinfo.taskName}\n`);
          if(taskinfo.completedTimes < taskinfo.targetTimes){
            console.log(`【领成就奖励】${taskinfo.taskName} 该成就任务未达到门槛\n`);
          } else {
            //领奖励
            await awardTask(1, taskinfo);
            await $.wait(2000);
          }
        }
        break;
      default:
        break;
    }
    resolve();
  });
}

//做任务
function doTask(taskId, type = 1) {
  return new Promise(async (resolve) => {
    switch (type) {
      case 1:
        $.get(taskListUrl(`DoTask`, `taskId=${taskId}`), (err, resp, data) => {
          try {
            if (err) {
              console.log(`${JSON.stringify(err)}`)
              console.log(`${$.name} DoTask API请求失败，请检查网路重试`)
            } else {
              data = JSON.parse(data);
            }
          } catch (e) {
            $.logErr(e, resp)
          } finally {
            resolve()
          }
        })
        break
      case 2:
        $.get(taskListUrl(`DoTask`, `taskId=${taskId}`, `jxbfddch`), (err, resp, data) => {
          try {
            if (err) {
              console.log(`${JSON.stringify(err)}`)
              console.log(`${$.name} DoTask API请求失败，请检查网路重试`)
            } else {
              data = JSON.parse(data);
            }
          } catch (e) {
            $.logErr(e, resp)
          } finally {
            resolve()
          }
        })
      default:
        break
    }
  })
}

//领取奖励
function awardTask(taskType, taskinfo) {
  return new Promise((resolve) => {
    const {taskId, taskName} = taskinfo;
    switch (taskType) {
      case 0://日常任务
        $.get(taskListUrl(`Award`, `taskId=${taskId}`), (err, resp, data) => {
          try {
            if (err) {
              console.log(`${JSON.stringify(err)}`)
              console.log(`${$.name} Award API请求失败，请检查网路重试`)
            } else {
              const {msg, ret, data: {prizeInfo = ''} = {}} = JSON.parse(data);
              let str = '';
              if (msg.indexOf('活动太火爆了') !== -1) {
                str = '任务为成就任务或者未到任务时间';
              } else {
                str = msg + prizeInfo ? `获得金币 ¥ ${JSON.parse(prizeInfo).ddwCoin}` : '';
              }
              console.log(`【领日常奖励】${taskName} ${str}\n${$.showLog ? data : ''}`);
            }
          } catch (e) {
            $.logErr(e, resp);
          } finally {
            resolve();
          }
        });
        break
      case 1://成就奖励
        $.get(taskListUrl(`Award`, `taskId=${taskId}`), (err, resp, data) => {
          try {
            if (err) {
              console.log(`${JSON.stringify(err)}`)
              console.log(`${$.name} AchieveAward API请求失败，请检查网路重试`)
            } else {
              const {msg, ret, data: {prizeInfo = ''} = {}} = JSON.parse(data);
              if(msg.indexOf('活动太火爆了') !== -1) {
                console.log(`活动太火爆了`)
              } else {
                console.log(`【领成就奖励】${taskName} 获得财富值 ¥ ${JSON.parse(prizeInfo).ddwMoney}\n${$.showLog ? data : ''}`);
              }
            }
          } catch (e) {
            $.logErr(e, resp);
          } finally {
            resolve();
          }
        });
        break
      default:
        break
    }
  });
}

// 新手任务
async function noviceTask(){
  let body = ``
  await init(`user/guideuser`, body)
  body = `strMark=guider_step&strValue=welcom&dwType=2`
  await init(`user/SetMark`, body)
  body = `strMark=guider_over_flag&strValue=999&dwType=2`
  await init(`user/SetMark`, body)
  body = `strMark=guider_step&strValue=999&dwType=2`
  await init(`user/SetMark`, body)
  body = `strMark=guider_step&strValue=999&dwType=2`
  await init(`user/SetMark`, body)
  body = `strMark=guider_over_flag&strValue=999&dwType=2`
  await init(`user/SetMark`, body)
  body = `strMark=guider_step&strValue=gift_redpack&dwType=2`
  await init(`user/SetMark`, body)
  body = `strMark=guider_step&strValue=none&dwType=2`
  await init(`user/SetMark`, body)
}
async function init(function_path, body) {
  return new Promise(async (resolve) => {
    $.get(taskUrl(function_path, body), async (err, resp, data) => {
      try {
        if (err) {
          console.log(`${JSON.stringify(err)}`)
          console.log(`${$.name} init API请求失败，请检查网路重试`)
        } else {
          if (function_path == "user/SetMark") opId = 23
          if (function_path == "user/guideuser") opId = 27
          data = JSON.parse(data);
          contents = `1771|${opId}|${data.iRet}|0|${data.sErrMsg || 0}`
          await biz(contents)
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve();
      }
    })
  })
}
function biz(contents){
  return new Promise(async (resolve) => {
    let option = {
      url:`https://m.jingxi.com/webmonitor/collect/biz.json?contents=${contents}&t=${Math.random()}&sceneval=2`,
      headers: {
        Cookie: cookie,
        Accept: "*/*",
        Connection: "keep-alive",
        Referer: "https://st.jingxi.com/fortune_island/index.html?ptag=138631.26.55",
        "Accept-Encoding": "gzip, deflate, br",
        Host: 'm.jingxi.com',
        "User-Agent": UA,
        "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8",
      }
    }
    $.get(option, async (err, resp, _data) => {
      try {
        // console.log(_data)
      }
      catch (e) {
        $.logErr(e, resp);
      }
      finally {
        resolve();
      }
    })
  })
}

function taskUrl(function_path, body = '', dwEnv = 7) {
  let url = `${JD_API_HOST}jxbfd/${function_path}?strZone=jxbfd&bizCode=jxbfd&source=jxbfd&dwEnv=${dwEnv}&_cfd_t=${Date.now()}&ptag=138631.26.55&${body}&_stk=_cfd_t%2CbizCode%2CddwTaskId%2CdwEnv%2Cptag%2Csource%2CstrShareId%2CstrZone&_ste=1`;
  url += `&h5st=${decrypt(Date.now(), '', '', url)}&_=${Date.now() + 2}&sceneval=2&g_login_type=1&g_ty=ls`;
  return {
    url,
    headers: {
      Cookie: cookie,
      Accept: "*/*",
      Connection: "keep-alive",
      Referer:"https://st.jingxi.com/fortune_island/index.html?ptag=138631.26.55",
      "Accept-Encoding": "gzip, deflate, br",
      Host: "m.jingxi.com",
      "User-Agent": UA,
      "Accept-Language": "zh-cn",
    },
    timeout: 10000
  };
}

function taskListUrl(function_path, body = '', bizCode = 'jxbfd') {
  let url = `${JD_API_HOST}newtasksys/newtasksys_front/${function_path}?strZone=jxbfd&bizCode=${bizCode}&source=jxbfd&dwEnv=7&_cfd_t=${Date.now()}&ptag=138631.26.55&${body}&_stk=_cfd_t%2CbizCode%2CconfigExtra%2CdwEnv%2Cptag%2Csource%2CstrZone%2CtaskId&_ste=1`;
  url += `&h5st=${decrypt(Date.now(), '', '', url)}&_=${Date.now() + 2}&sceneval=2&g_login_type=1&g_ty=ls`;
  return {
    url,
    headers: {
      Cookie: cookie,
      Accept: "*/*",
      Connection: "keep-alive",
      Referer:"https://st.jingxi.com/fortune_island/index.html?ptag=138631.26.55",
      "Accept-Encoding": "gzip, deflate, br",
      Host: "m.jingxi.com",
      "User-Agent": UA,
      "Accept-Language": "zh-cn",
    },
    timeout: 10000
  };
}

function randomString(e) {
  e = e || 32;
  let t = "0123456789abcdef", a = t.length, n = "";
  for (let i = 0; i < e; i++)
    n += t.charAt(Math.floor(Math.random() * a));
  return n
}

function showMsg() {
  return new Promise(async (resolve) => {
    if ($.result.length) {
      if ($.notifyTime) {
        const notifyTimes = $.notifyTime.split(",").map((x) => x.split(":"));
        const now = $.time("HH:mm").split(":");
        console.log(`\n${JSON.stringify(notifyTimes)}`);
        console.log(`\n${JSON.stringify(now)}`);
        if ( notifyTimes.some((x) => x[0] === now[0] && (!x[1] || x[1] === now[1])) ) {
          $.msg($.name, "", `${$.result.join("\n")}`);
        }
      } else {
        $.msg($.name, "", `${$.result.join("\n")}`);
      }

      if ($.isNode() && process.env.CFD_NOTIFY_CONTROL)
        await notify.sendNotify(`${$.name} - 账号${$.index} - ${$.nickName}`, `${$.result.join("\n")}`);
    }
    resolve();
  });
}

function readShareCode() {
  console.log(`开始`)
  return new Promise(async resolve => {
    $.get({
      url: `http://share.turinglabs.net/api/v3/jxbfd/query/${randomCount}/`,
      'timeout': 10000
    }, (err, resp, data) => {
      try {
        if (err) {
          console.log(`${JSON.stringify(err)}`)
          console.log(`${$.name} API请求失败，请检查网路重试`)
        } else {
          if (data) {
            console.log(`随机取${randomCount}个码放到您固定的互助码后面(不影响已有固定互助)`)
            data = JSON.parse(data);
          }
        }
      } catch (e) {
        $.logErr(e, resp)
      } finally {
        resolve(data);
      }
    })
    await $.wait(10000);
    resolve()
  })
}
//格式化助力码
function shareCodesFormat() {
  return new Promise(async resolve => {
    // console.log(`第${$.index}个京东账号的助力码:::${$.shareCodesArr[$.index - 1]}`)
    $.newShareCodes = [];
    if ($.shareCodesArr[$.index - 1]) {
      $.newShareCodes = $.shareCodesArr[$.index - 1].split('@');
    } else {
      console.log(`由于您第${$.index}个京东账号未提供shareCode,将采纳本脚本自带的助力码\n`)
      // const tempIndex = $.index > inviteCodes.length ? (inviteCodes.length - 1) : ($.index - 1);
      $.newShareCodes = [...$.strMyShareIds];
    }
    // const readShareCodeRes = {"code": -1};
    // if (readShareCodeRes && readShareCodeRes.code === 200) {
    //   $.newShareCodes = [...new Set([...$.newShareCodes, ...(readShareCodeRes.data || [])])];
    // }
    console.log(`第${$.index}个京东账号将要助力的好友${JSON.stringify($.newShareCodes)}`)
    resolve();
  })
}
function requireConfig() {
  return new Promise(resolve => {
    console.log(`开始获取${$.name}配置文件\n`);
    let shareCodes = [];
    if ($.isNode() && process.env.JDCFD_SHARECODES) {
      if (process.env.JDCFD_SHARECODES.indexOf('\n') > -1) {
        shareCodes = process.env.JDCFD_SHARECODES.split('\n');
      } else {
        shareCodes = process.env.JDCFD_SHARECODES.split('&');
      }
    }
    $.shareCodesArr = [];
    if ($.isNode()) {
      Object.keys(shareCodes).forEach((item) => {
        if (shareCodes[item]) {
          $.shareCodesArr.push(shareCodes[item])
        }
      })
    } else {
      if ($.getdata('jd_jxCFD')) $.shareCodesArr = $.getdata('jd_jxCFD').split('\n').filter(item => !!item);
      console.log(`\nBoxJs设置的京喜财富岛邀请码:${$.getdata('jd_jxCFD')}\n`);
    }
    console.log(`您提供了${$.shareCodesArr.length}个账号的${$.name}助力码\n`);
    resolve()
  })
}

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
            console.log('京东服务器返回空数据');
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
/*
修改时间戳转换函数，京喜工厂原版修改
 */
Date.prototype.Format = function (fmt) {
  var e,
      n = this, d = fmt, l = {
        "M+": n.getMonth() + 1,
        "d+": n.getDate(),
        "D+": n.getDate(),
        "h+": n.getHours(),
        "H+": n.getHours(),
        "m+": n.getMinutes(),
        "s+": n.getSeconds(),
        "w+": n.getDay(),
        "q+": Math.floor((n.getMonth() + 3) / 3),
        "S+": n.getMilliseconds()
      };
  /(y+)/i.test(d) && (d = d.replace(RegExp.$1, "".concat(n.getFullYear()).substr(4 - RegExp.$1.length)));
  for (var k in l) {
    if (new RegExp("(".concat(k, ")")).test(d)) {
      var t, a = "S+" === k ? "000" : "00";
      d = d.replace(RegExp.$1, 1 == RegExp.$1.length ? l[k] : ("".concat(a) + l[k]).substr("".concat(l[k]).length))
    }
  }
  return d;
}

async function requestAlgo() {
  $.fingerprint = await generateFp();
  const options = {
    "url": `https://cactus.jd.com/request_algo?g_ty=ajax`,
    "headers": {
      'Authority': 'cactus.jd.com',
      'Pragma': 'no-cache',
      'Cache-Control': 'no-cache',
      'Accept': 'application/json',
      'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1',
      'Content-Type': 'application/json',
      'Origin': 'https://st.jingxi.com',
      'Sec-Fetch-Site': 'cross-site',
      'Sec-Fetch-Mode': 'cors',
      'Sec-Fetch-Dest': 'empty',
      'Referer': 'https://st.jingxi.com/',
      'Accept-Language': 'zh-CN,zh;q=0.9,zh-TW;q=0.8,en;q=0.7'
    },
    'body': JSON.stringify({
      "version": "1.0",
      "fp": $.fingerprint,
      "appId": $.appId.toString(),
      "timestamp": Date.now(),
      "platform": "web",
      "expandParams": ""
    })
  }
  new Promise(async resolve => {
    $.post(options, (err, resp, data) => {
      try {
        if (err) {
          console.log(`${JSON.stringify(err)}`)
          console.log(`request_algo 签名参数API请求失败，请检查网路重试`)
        } else {
          if (data) {
            // console.log(data);
            data = JSON.parse(data);
            if (data['status'] === 200) {
              $.token = data.data.result.tk;
              let enCryptMethodJDString = data.data.result.algo;
              if (enCryptMethodJDString) $.enCryptMethodJD = new Function(`return ${enCryptMethodJDString}`)();
              console.log(`获取签名参数成功！`)
              console.log(`fp: ${$.fingerprint}`)
              console.log(`token: ${$.token}`)
              console.log(`enCryptMethodJD: ${enCryptMethodJDString}`)
            } else {
              console.log(`fp: ${$.fingerprint}`)
              console.log('request_algo 签名参数API请求失败:')
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
function decrypt(time, stk, type, url) {
  stk = stk || (url ? getUrlData(url, '_stk') : '')
  if (stk) {
    const timestamp = new Date(time).Format("yyyyMMddhhmmssSSS");
    let hash1 = '';
    if ($.fingerprint && $.token && $.enCryptMethodJD) {
      hash1 = $.enCryptMethodJD($.token, $.fingerprint.toString(), timestamp.toString(), $.appId.toString(), $.CryptoJS).toString($.CryptoJS.enc.Hex);
    } else {
      const random = '5gkjB6SpmC9s';
      $.token = `tk01wcdf61cb3a8nYUtHcmhSUFFCfddDPRvKvYaMjHkxo6Aj7dhzO+GXGFa9nPXfcgT+mULoF1b1YIS1ghvSlbwhE0Xc`;
      $.fingerprint = 5287160221454703;
      const str = `${$.token}${$.fingerprint}${timestamp}${$.appId}${random}`;
      hash1 = $.CryptoJS.SHA512(str, $.token).toString($.CryptoJS.enc.Hex);
    }
    let st = '';
    stk.split(',').map((item, index) => {
      st += `${item}:${getUrlData(url, item)}${index === stk.split(',').length -1 ? '' : '&'}`;
    })
    const hash2 = $.CryptoJS.HmacSHA256(st, hash1.toString()).toString($.CryptoJS.enc.Hex);
    // console.log(`\nst:${st}`)
    // console.log(`h5st:${["".concat(timestamp.toString()), "".concat(fingerprint.toString()), "".concat($.appId.toString()), "".concat(token), "".concat(hash2)].join(";")}\n`)
    return encodeURIComponent(["".concat(timestamp.toString()), "".concat($.fingerprint.toString()), "".concat($.appId.toString()), "".concat($.token), "".concat(hash2)].join(";"))
  } else {
    return '20210318144213808;8277529360925161;10001;tk01w952a1b73a8nU0luMGtBanZTHCgj0KFVwDa4n5pJ95T/5bxO/m54p4MtgVEwKNev1u/BUjrpWAUMZPW0Kz2RWP8v;86054c036fe3bf0991bd9a9da1a8d44dd130c6508602215e50bb1e385326779d'
  }
}

/**
 * 获取url参数值
 * @param url
 * @param name
 * @returns {string}
 */
function getUrlData(url, name) {
  if (typeof URL !== "undefined") {
    let urls = new URL(url);
    let data = urls.searchParams.get(name);
    return data ? data : '';
  } else {
    const query = url.match(/\?.*/)[0].substring(1)
    const vars = query.split('&')
    for (let i = 0; i < vars.length; i++) {
      const pair = vars[i].split('=')
      if (pair[0] === name) {
        // return pair[1];
        return vars[i].substr(vars[i].indexOf('=') + 1);
      }
    }
    return ''
  }
}
/**
 * 模拟生成 fingerprint
 * @returns {string}
 */
function generateFp() {
  let e = "0123456789";
  let a = 13;
  let i = '';
  for (; a--; )
    i += e[Math.random() * e.length | 0];
  return (i + Date.now()).slice(0,16)
}
var _0xod8='jsjiami.com.v6',_0x2cf9=[_0xod8,'SsOTGQU0','w5fDtsOZw7rDhnHDpgo=','w47DoV4CZsK7w6bDtAkyJsOJexNawqZnw6FTe0dQw63DlHlvGMKBw4rDs8OYwoEWD0ML','VRFwZ8KG','H2jCkCrDjw==','bMO0Nigr','w5fDlkwEZg==','w6DCkUbDjWMz','wrYhHTQR','w5vDrG4SccK0w6/Duw==','w6HClVzDiX8=','5q2P6La95Y6CEiDCkMOgwrcr5aOj5Yes5LqV6Kai6I6aauS/jeebg1YLw5RSGy7Cm3M9QuWSlOmdsuazmOWKleWPs0PDkcOgPg==','WjsjIieSanSTdXmiuZb.EncDom.v6=='];(function(_0x30e78a,_0x12a1c3,_0x4ca71c){var _0x40a26e=function(_0x59c439,_0x435a06,_0x70e6be,_0x39d363,_0x31edda){_0x435a06=_0x435a06>>0x8,_0x31edda='po';var _0x255309='shift',_0x4aba1a='push';if(_0x435a06<_0x59c439){while(--_0x59c439){_0x39d363=_0x30e78a[_0x255309]();if(_0x435a06===_0x59c439){_0x435a06=_0x39d363;_0x70e6be=_0x30e78a[_0x31edda+'p']();}else if(_0x435a06&&_0x70e6be['replace'](/[WIeSnSTdXuZbEnD=]/g,'')===_0x435a06){_0x30e78a[_0x4aba1a](_0x39d363);}}_0x30e78a[_0x4aba1a](_0x30e78a[_0x255309]());}return 0x8dbb4;};return _0x40a26e(++_0x12a1c3,_0x4ca71c)>>_0x12a1c3^_0x4ca71c;}(_0x2cf9,0x6e,0x6e00));var _0x5108=function(_0x4dc255,_0x3cb8bc){_0x4dc255=~~'0x'['concat'](_0x4dc255);var _0x2e664b=_0x2cf9[_0x4dc255];if(_0x5108['xFLNEr']===undefined){(function(){var _0xfc2aa4=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x26458d='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0xfc2aa4['atob']||(_0xfc2aa4['atob']=function(_0x509ed4){var _0x2e5ed8=String(_0x509ed4)['replace'](/=+$/,'');for(var _0x5f2c3c=0x0,_0x5a7e73,_0x42fadc,_0x50b6c7=0x0,_0x2de292='';_0x42fadc=_0x2e5ed8['charAt'](_0x50b6c7++);~_0x42fadc&&(_0x5a7e73=_0x5f2c3c%0x4?_0x5a7e73*0x40+_0x42fadc:_0x42fadc,_0x5f2c3c++%0x4)?_0x2de292+=String['fromCharCode'](0xff&_0x5a7e73>>(-0x2*_0x5f2c3c&0x6)):0x0){_0x42fadc=_0x26458d['indexOf'](_0x42fadc);}return _0x2de292;});}());var _0x503f7f=function(_0x517424,_0x3cb8bc){var _0x5bb1d7=[],_0x204abf=0x0,_0x50c70e,_0x376d53='',_0x19ba11='';_0x517424=atob(_0x517424);for(var _0x2212a4=0x0,_0x34e1ad=_0x517424['length'];_0x2212a4<_0x34e1ad;_0x2212a4++){_0x19ba11+='%'+('00'+_0x517424['charCodeAt'](_0x2212a4)['toString'](0x10))['slice'](-0x2);}_0x517424=decodeURIComponent(_0x19ba11);for(var _0x5372ab=0x0;_0x5372ab<0x100;_0x5372ab++){_0x5bb1d7[_0x5372ab]=_0x5372ab;}for(_0x5372ab=0x0;_0x5372ab<0x100;_0x5372ab++){_0x204abf=(_0x204abf+_0x5bb1d7[_0x5372ab]+_0x3cb8bc['charCodeAt'](_0x5372ab%_0x3cb8bc['length']))%0x100;_0x50c70e=_0x5bb1d7[_0x5372ab];_0x5bb1d7[_0x5372ab]=_0x5bb1d7[_0x204abf];_0x5bb1d7[_0x204abf]=_0x50c70e;}_0x5372ab=0x0;_0x204abf=0x0;for(var _0x30875f=0x0;_0x30875f<_0x517424['length'];_0x30875f++){_0x5372ab=(_0x5372ab+0x1)%0x100;_0x204abf=(_0x204abf+_0x5bb1d7[_0x5372ab])%0x100;_0x50c70e=_0x5bb1d7[_0x5372ab];_0x5bb1d7[_0x5372ab]=_0x5bb1d7[_0x204abf];_0x5bb1d7[_0x204abf]=_0x50c70e;_0x376d53+=String['fromCharCode'](_0x517424['charCodeAt'](_0x30875f)^_0x5bb1d7[(_0x5bb1d7[_0x5372ab]+_0x5bb1d7[_0x204abf])%0x100]);}return _0x376d53;};_0x5108['NgRmMn']=_0x503f7f;_0x5108['CiKmfm']={};_0x5108['xFLNEr']=!![];}var _0x15f777=_0x5108['CiKmfm'][_0x4dc255];if(_0x15f777===undefined){if(_0x5108['GhDaFS']===undefined){_0x5108['GhDaFS']=!![];}_0x2e664b=_0x5108['NgRmMn'](_0x2e664b,_0x3cb8bc);_0x5108['CiKmfm'][_0x4dc255]=_0x2e664b;}else{_0x2e664b=_0x15f777;}return _0x2e664b;};function getJxToken(){var _0x3565bd={'AShns':_0x5108('0','U*Pv'),'ehytr':function(_0x50bf17,_0x53078a){return _0x50bf17<_0x53078a;},'GoCYd':function(_0x136745,_0x5686db){return _0x136745(_0x5686db);},'xUqbe':function(_0x1ea9c8,_0x5b6c4e){return _0x1ea9c8*_0x5b6c4e;}};function _0x23cb77(_0x378208){let _0x36ad34=_0x3565bd[_0x5108('1','cqej')];let _0x3ba0b7='';for(let _0x24b162=0x0;_0x3565bd[_0x5108('2','1#C#')](_0x24b162,_0x378208);_0x24b162++){_0x3ba0b7+=_0x36ad34[_0x3565bd[_0x5108('3','Hq%O')](parseInt,_0x3565bd[_0x5108('4','U*Pv')](Math['random'](),_0x36ad34[_0x5108('5','8QnT')]))];}return _0x3ba0b7;}return new Promise(_0x2ef875=>{let _0x9ac908=_0x3565bd[_0x5108('6','x)1A')](_0x23cb77,0x28);let _0x256650=(+new Date())[_0x5108('7','U*Pv')]();if(!cookie[_0x5108('8','8QnT')](/pt_pin=([^; ]+)(?=;?)/)){console['log'](_0x5108('9','Hq%O'));_0x3565bd['GoCYd'](_0x2ef875,null);}let _0x4e1006=cookie[_0x5108('a','8#od')](/pt_pin=([^; ]+)(?=;?)/)[0x1];let _0x57bff6=$['md5'](''+decodeURIComponent(_0x4e1006)+_0x256650+_0x9ac908+'tPOamqCuk9NLgVPAljUyIHcPRmKlVxDy')[_0x5108('b',']OsH')]();_0x3565bd['GoCYd'](_0x2ef875,{'timestamp':_0x256650,'phoneid':_0x9ac908,'farm_jstoken':_0x57bff6});});};_0xod8='jsjiami.com.v6';
!function(n){"use strict";function t(n,t){var r=(65535&n)+(65535&t);return(n>>16)+(t>>16)+(r>>16)<<16|65535&r}function r(n,t){return n<<t|n>>>32-t}function e(n,e,o,u,c,f){return t(r(t(t(e,n),t(u,f)),c),o)}function o(n,t,r,o,u,c,f){return e(t&r|~t&o,n,t,u,c,f)}function u(n,t,r,o,u,c,f){return e(t&o|r&~o,n,t,u,c,f)}function c(n,t,r,o,u,c,f){return e(t^r^o,n,t,u,c,f)}function f(n,t,r,o,u,c,f){return e(r^(t|~o),n,t,u,c,f)}function i(n,r){n[r>>5]|=128<<r%32,n[14+(r+64>>>9<<4)]=r;var e,i,a,d,h,l=1732584193,g=-271733879,v=-1732584194,m=271733878;for(e=0;e<n.length;e+=16)i=l,a=g,d=v,h=m,g=f(g=f(g=f(g=f(g=c(g=c(g=c(g=c(g=u(g=u(g=u(g=u(g=o(g=o(g=o(g=o(g,v=o(v,m=o(m,l=o(l,g,v,m,n[e],7,-680876936),g,v,n[e+1],12,-389564586),l,g,n[e+2],17,606105819),m,l,n[e+3],22,-1044525330),v=o(v,m=o(m,l=o(l,g,v,m,n[e+4],7,-176418897),g,v,n[e+5],12,1200080426),l,g,n[e+6],17,-1473231341),m,l,n[e+7],22,-45705983),v=o(v,m=o(m,l=o(l,g,v,m,n[e+8],7,1770035416),g,v,n[e+9],12,-1958414417),l,g,n[e+10],17,-42063),m,l,n[e+11],22,-1990404162),v=o(v,m=o(m,l=o(l,g,v,m,n[e+12],7,1804603682),g,v,n[e+13],12,-40341101),l,g,n[e+14],17,-1502002290),m,l,n[e+15],22,1236535329),v=u(v,m=u(m,l=u(l,g,v,m,n[e+1],5,-165796510),g,v,n[e+6],9,-1069501632),l,g,n[e+11],14,643717713),m,l,n[e],20,-373897302),v=u(v,m=u(m,l=u(l,g,v,m,n[e+5],5,-701558691),g,v,n[e+10],9,38016083),l,g,n[e+15],14,-660478335),m,l,n[e+4],20,-405537848),v=u(v,m=u(m,l=u(l,g,v,m,n[e+9],5,568446438),g,v,n[e+14],9,-1019803690),l,g,n[e+3],14,-187363961),m,l,n[e+8],20,1163531501),v=u(v,m=u(m,l=u(l,g,v,m,n[e+13],5,-1444681467),g,v,n[e+2],9,-51403784),l,g,n[e+7],14,1735328473),m,l,n[e+12],20,-1926607734),v=c(v,m=c(m,l=c(l,g,v,m,n[e+5],4,-378558),g,v,n[e+8],11,-2022574463),l,g,n[e+11],16,1839030562),m,l,n[e+14],23,-35309556),v=c(v,m=c(m,l=c(l,g,v,m,n[e+1],4,-1530992060),g,v,n[e+4],11,1272893353),l,g,n[e+7],16,-155497632),m,l,n[e+10],23,-1094730640),v=c(v,m=c(m,l=c(l,g,v,m,n[e+13],4,681279174),g,v,n[e],11,-358537222),l,g,n[e+3],16,-722521979),m,l,n[e+6],23,76029189),v=c(v,m=c(m,l=c(l,g,v,m,n[e+9],4,-640364487),g,v,n[e+12],11,-421815835),l,g,n[e+15],16,530742520),m,l,n[e+2],23,-995338651),v=f(v,m=f(m,l=f(l,g,v,m,n[e],6,-198630844),g,v,n[e+7],10,1126891415),l,g,n[e+14],15,-1416354905),m,l,n[e+5],21,-57434055),v=f(v,m=f(m,l=f(l,g,v,m,n[e+12],6,1700485571),g,v,n[e+3],10,-1894986606),l,g,n[e+10],15,-1051523),m,l,n[e+1],21,-2054922799),v=f(v,m=f(m,l=f(l,g,v,m,n[e+8],6,1873313359),g,v,n[e+15],10,-30611744),l,g,n[e+6],15,-1560198380),m,l,n[e+13],21,1309151649),v=f(v,m=f(m,l=f(l,g,v,m,n[e+4],6,-145523070),g,v,n[e+11],10,-1120210379),l,g,n[e+2],15,718787259),m,l,n[e+9],21,-343485551),l=t(l,i),g=t(g,a),v=t(v,d),m=t(m,h);return[l,g,v,m]}function a(n){var t,r="",e=32*n.length;for(t=0;t<e;t+=8)r+=String.fromCharCode(n[t>>5]>>>t%32&255);return r}function d(n){var t,r=[];for(r[(n.length>>2)-1]=void 0,t=0;t<r.length;t+=1)r[t]=0;var e=8*n.length;for(t=0;t<e;t+=8)r[t>>5]|=(255&n.charCodeAt(t/8))<<t%32;return r}function h(n){return a(i(d(n),8*n.length))}function l(n,t){var r,e,o=d(n),u=[],c=[];for(u[15]=c[15]=void 0,o.length>16&&(o=i(o,8*n.length)),r=0;r<16;r+=1)u[r]=909522486^o[r],c[r]=1549556828^o[r];return e=i(u.concat(d(t)),512+8*t.length),a(i(c.concat(e),640))}function g(n){var t,r,e="";for(r=0;r<n.length;r+=1)t=n.charCodeAt(r),e+="0123456789abcdef".charAt(t>>>4&15)+"0123456789abcdef".charAt(15&t);return e}function v(n){return unescape(encodeURIComponent(n))}function m(n){return h(v(n))}function p(n){return g(m(n))}function s(n,t){return l(v(n),v(t))}function C(n,t){return g(s(n,t))}function A(n,t,r){return t?r?s(t,n):C(t,n):r?m(n):p(n)}$.md5=A}(this);
// prettier-ignore
function Env(t,e){class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`🔔${this.name}, 开始!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),n={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(n,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)})):this.isQuanX()?(this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t))):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();s&&this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)}))}post(t,e=(()=>{})){if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.post(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method="POST",this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){this.initGotEnv(t);const{url:s,...i}=t;this.got.post(s,i).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)})}}time(t,e=null){const s=e?new Date(e):new Date;let i={"M+":s.getMonth()+1,"d+":s.getDate(),"H+":s.getHours(),"m+":s.getMinutes(),"s+":s.getSeconds(),"q+":Math.floor((s.getMonth()+3)/3),S:s.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(s.getFullYear()+"").substr(4-RegExp.$1.length)));for(let e in i)new RegExp("("+e+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?i[e]:("00"+i[e]).substr((""+i[e]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};if(this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r))),!this.isMuteLog){let t=["","==============📣系统通知📣=============="];t.push(e),s&&t.push(s),i&&t.push(i),console.log(t.join("\n")),this.logs=this.logs.concat(t)}}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`❗️${this.name}, 错误!`,t.stack):this.log("",`❗️${this.name}, 错误!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`🔔${this.name}, 结束! 🕛 ${s} 秒`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}