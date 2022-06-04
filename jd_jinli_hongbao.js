"use strict";
/**
 * 京东-锦鲤红包
 * cron: 2 0,1,6 * * *
 * CK app_open 1  优先助力HW.ts
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
var TS_USER_AGENTS_1 = require("./TS_USER_AGENTS");
var cookie, cookiesArr = [], res, UserName;
var shareCodesSelf = [], shareCodes = [], shareCodesHW = [], fullCode = [];
var remote_ua = null, step = -1, ck_type = -1, random = '', log = '';
!(function () { return __awaiter(void 0, void 0, void 0, function () {
    var allCookie, allCookie_1, allCookie_1_1, ck;
    var e_1, _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0: return [4 /*yield*/, (0, TS_USER_AGENTS_1.getCookie)()];
            case 1:
                allCookie = _b.sent();
                try {
                    for (allCookie_1 = __values(allCookie), allCookie_1_1 = allCookie_1.next(); !allCookie_1_1.done; allCookie_1_1 = allCookie_1.next()) {
                        ck = allCookie_1_1.value;
                        if (ck.includes('pt_key=app_open')) {
                            cookiesArr = [ck];
                            break;
                        }
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (allCookie_1_1 && !allCookie_1_1.done && (_a = allCookie_1["return"])) _a.call(allCookie_1);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
                if (cookiesArr.length === 0) {
                    cookiesArr = allCookie.slice(0, 1);
                }
                step = 0;
                return [4 /*yield*/, join()];
            case 2:
                _b.sent();
                return [4 /*yield*/, help()];
            case 3:
                _b.sent();
                cookiesArr = allCookie.slice(0, 9);
                step = 1;
                if (![0, 1].includes(new Date().getHours())) return [3 /*break*/, 5];
                return [4 /*yield*/, join()];
            case 4:
                _b.sent();
                _b.label = 5;
            case 5: return [4 /*yield*/, getShareCodeSelf()];
            case 6:
                _b.sent();
                return [4 /*yield*/, help()];
            case 7:
                _b.sent();
                return [2 /*return*/];
        }
    });
}); })();
function join() {
    return __awaiter(this, void 0, void 0, function () {
        var _a, _b, _c, index, value, i, e_2, e_3, e_4_1;
        var e_4, _d;
        return __generator(this, function (_e) {
            switch (_e.label) {
                case 0:
                    _e.trys.push([0, 16, 17, 18]);
                    _a = __values(cookiesArr.entries()), _b = _a.next();
                    _e.label = 1;
                case 1:
                    if (!!_b.done) return [3 /*break*/, 15];
                    _c = __read(_b.value, 2), index = _c[0], value = _c[1];
                    _e.label = 2;
                case 2:
                    _e.trys.push([2, 11, , 12]);
                    cookie = value;
                    UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                    ck_type = cookie.includes('pt_key=app_open') ? 0 : 1;
                    console.log("\n\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7".concat(index + 1, "\u3011").concat(UserName, "\n"));
                    i = 0;
                    _e.label = 3;
                case 3:
                    if (!(i < 3)) return [3 /*break*/, 10];
                    _e.label = 4;
                case 4:
                    _e.trys.push([4, 7, , 9]);
                    return [4 /*yield*/, getLog(-1)];
                case 5:
                    _e.sent();
                    return [4 /*yield*/, api('h5launch', { followShop: 0, random: random, log: log, sceneid: 'JLHBhPageh5' })];
                case 6:
                    res = _e.sent();
                    console.log('活动初始化：', res.data.result.statusDesc);
                    if (res.rtn_code === 0) {
                        return [3 /*break*/, 10];
                    }
                    return [3 /*break*/, 9];
                case 7:
                    e_2 = _e.sent();
                    console.log('join error', res === null || res === void 0 ? void 0 : res.rtn_code);
                    return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(5000)];
                case 8:
                    _e.sent();
                    return [3 /*break*/, 9];
                case 9:
                    i++;
                    return [3 /*break*/, 3];
                case 10: return [3 /*break*/, 12];
                case 11:
                    e_3 = _e.sent();
                    console.log(e_3);
                    return [3 /*break*/, 12];
                case 12: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(5000)];
                case 13:
                    _e.sent();
                    _e.label = 14;
                case 14:
                    _b = _a.next();
                    return [3 /*break*/, 1];
                case 15: return [3 /*break*/, 18];
                case 16:
                    e_4_1 = _e.sent();
                    e_4 = { error: e_4_1 };
                    return [3 /*break*/, 18];
                case 17:
                    try {
                        if (_b && !_b.done && (_d = _a["return"])) _d.call(_a);
                    }
                    finally { if (e_4) throw e_4.error; }
                    return [7 /*endfinally*/];
                case 18: return [2 /*return*/];
            }
        });
    });
}
function help() {
    return __awaiter(this, void 0, void 0, function () {
        var _a, _b, _c, index, value, me, remain, shareCodes_1, shareCodes_1_1, code, success, i, e_5_1, e_6, e_7_1;
        var e_7, _d, e_5, _e;
        return __generator(this, function (_f) {
            switch (_f.label) {
                case 0:
                    _f.trys.push([0, 29, 30, 31]);
                    _a = __values(cookiesArr.entries()), _b = _a.next();
                    _f.label = 1;
                case 1:
                    if (!!_b.done) return [3 /*break*/, 28];
                    _c = __read(_b.value, 2), index = _c[0], value = _c[1];
                    _f.label = 2;
                case 2:
                    _f.trys.push([2, 24, , 25]);
                    cookie = value;
                    UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                    ck_type = cookie.includes('pt_key=app_open') ? 0 : 1;
                    if (!(shareCodesHW.length === 0)) return [3 /*break*/, 4];
                    return [4 /*yield*/, (0, TS_USER_AGENTS_1.getshareCodeHW)('jlhb')];
                case 3:
                    shareCodesHW = _f.sent();
                    _f.label = 4;
                case 4:
                    if (cookiesArr.length === 1) {
                        shareCodes = Array.from(new Set(__spreadArray(__spreadArray([], __read(shareCodesHW), false), __read(shareCodesSelf), false)));
                    }
                    else {
                        shareCodes = Array.from(new Set(__spreadArray(__spreadArray([], __read(shareCodesSelf), false), __read(shareCodesHW), false)));
                    }
                    return [4 /*yield*/, getShareCodeSelf(true)];
                case 5:
                    me = _f.sent(), remain = true;
                    _f.label = 6;
                case 6:
                    _f.trys.push([6, 21, 22, 23]);
                    shareCodes_1 = (e_5 = void 0, __values(shareCodes)), shareCodes_1_1 = shareCodes_1.next();
                    _f.label = 7;
                case 7:
                    if (!!shareCodes_1_1.done) return [3 /*break*/, 20];
                    code = shareCodes_1_1.value;
                    if (!remain)
                        return [3 /*break*/, 20];
                    success = false;
                    if (!(!fullCode.includes(code) && code !== me)) return [3 /*break*/, 19];
                    console.log("\u8D26\u53F7".concat(index + 1, " ").concat(UserName, " \u53BB\u52A9\u529B ").concat(code, " ").concat(shareCodesSelf.includes(code) ? '*内部*' : ''));
                    i = 0;
                    _f.label = 8;
                case 8:
                    if (!(i < 5)) return [3 /*break*/, 19];
                    if (success)
                        return [3 /*break*/, 19];
                    return [4 /*yield*/, getLog(index)];
                case 9:
                    _f.sent();
                    return [4 /*yield*/, api('jinli_h5assist', { "redPacketId": code, "followShop": 0, random: random, log: log, sceneid: 'JLHBhPageh5' })];
                case 10:
                    res = _f.sent();
                    if (!(res.rtn_code !== 0)) return [3 /*break*/, 12];
                    console.log('help error', res.rtn_code);
                    return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(5000)];
                case 11:
                    _f.sent();
                    return [3 /*break*/, 18];
                case 12:
                    success = true;
                    if (!(res.data.result.status === 0)) return [3 /*break*/, 14];
                    console.log('助力成功：', parseFloat(res.data.result.assistReward.discount));
                    return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(45000)];
                case 13:
                    _f.sent();
                    remain = false;
                    return [3 /*break*/, 19];
                case 14:
                    if (!(res.data.result.status === 3)) return [3 /*break*/, 16];
                    console.log('今日助力次数已满');
                    remain = false;
                    return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(45000)];
                case 15:
                    _f.sent();
                    return [3 /*break*/, 19];
                case 16:
                    console.log('助力结果：', res.data.result.statusDesc);
                    if (res.data.result.statusDesc === '啊偶，TA的助力已满，开启自己的红包活动吧~') {
                        fullCode.push(code);
                    }
                    return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(45000)];
                case 17:
                    _f.sent();
                    _f.label = 18;
                case 18:
                    i++;
                    return [3 /*break*/, 8];
                case 19:
                    shareCodes_1_1 = shareCodes_1.next();
                    return [3 /*break*/, 7];
                case 20: return [3 /*break*/, 23];
                case 21:
                    e_5_1 = _f.sent();
                    e_5 = { error: e_5_1 };
                    return [3 /*break*/, 23];
                case 22:
                    try {
                        if (shareCodes_1_1 && !shareCodes_1_1.done && (_e = shareCodes_1["return"])) _e.call(shareCodes_1);
                    }
                    finally { if (e_5) throw e_5.error; }
                    return [7 /*endfinally*/];
                case 23: return [3 /*break*/, 25];
                case 24:
                    e_6 = _f.sent();
                    console.log(e_6);
                    return [3 /*break*/, 25];
                case 25: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(5000)];
                case 26:
                    _f.sent();
                    _f.label = 27;
                case 27:
                    _b = _a.next();
                    return [3 /*break*/, 1];
                case 28: return [3 /*break*/, 31];
                case 29:
                    e_7_1 = _f.sent();
                    e_7 = { error: e_7_1 };
                    return [3 /*break*/, 31];
                case 30:
                    try {
                        if (_b && !_b.done && (_d = _a["return"])) _d.call(_a);
                    }
                    finally { if (e_7) throw e_7.error; }
                    return [7 /*endfinally*/];
                case 31: return [2 /*return*/];
            }
        });
    });
}
function getShareCodeSelf(one) {
    var _a, _b, _c;
    if (one === void 0) { one = false; }
    return __awaiter(this, void 0, void 0, function () {
        var _d, _e, _f, index, value, e_8, e_9_1;
        var e_9, _g;
        return __generator(this, function (_h) {
            switch (_h.label) {
                case 0:
                    if (!one) return [3 /*break*/, 2];
                    return [4 /*yield*/, api('h5activityIndex', { "isjdapp": 1 })];
                case 1:
                    res = _h.sent();
                    return [2 /*return*/, (_c = (_b = (_a = res === null || res === void 0 ? void 0 : res.data) === null || _a === void 0 ? void 0 : _a.result) === null || _b === void 0 ? void 0 : _b.redpacketInfo) === null || _c === void 0 ? void 0 : _c.id];
                case 2:
                    _h.trys.push([2, 11, 12, 13]);
                    _d = __values(cookiesArr.entries()), _e = _d.next();
                    _h.label = 3;
                case 3:
                    if (!!_e.done) return [3 /*break*/, 10];
                    _f = __read(_e.value, 2), index = _f[0], value = _f[1];
                    _h.label = 4;
                case 4:
                    _h.trys.push([4, 6, , 7]);
                    cookie = value;
                    UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                    console.log("\n\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7".concat(index + 1, "\u3011").concat(UserName, "\n"));
                    return [4 /*yield*/, api('h5activityIndex', { "isjdapp": 1 })];
                case 5:
                    res = _h.sent();
                    console.log('ID：', res.data.result.redpacketInfo.id);
                    shareCodesSelf.push(res.data.result.redpacketInfo.id);
                    return [3 /*break*/, 7];
                case 6:
                    e_8 = _h.sent();
                    console.log('getShareCodeSelf error', e_8);
                    return [3 /*break*/, 7];
                case 7: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
                case 8:
                    _h.sent();
                    _h.label = 9;
                case 9:
                    _e = _d.next();
                    return [3 /*break*/, 3];
                case 10: return [3 /*break*/, 13];
                case 11:
                    e_9_1 = _h.sent();
                    e_9 = { error: e_9_1 };
                    return [3 /*break*/, 13];
                case 12:
                    try {
                        if (_e && !_e.done && (_g = _d["return"])) _g.call(_d);
                    }
                    finally { if (e_9) throw e_9.error; }
                    return [7 /*endfinally*/];
                case 13:
                    (0, TS_USER_AGENTS_1.o2s)(shareCodesSelf);
                    _h.label = 14;
                case 14: return [2 /*return*/];
            }
        });
    });
}
function api(fn, body) {
    return __awaiter(this, void 0, void 0, function () {
        var ua;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!!remote_ua) return [3 /*break*/, 2];
                    return [4 /*yield*/, (0, TS_USER_AGENTS_1.get)('https://api.jdsharecode.xyz/api/jlhb_ua')];
                case 1:
                    remote_ua = _a.sent();
                    _a.label = 2;
                case 2:
                    ua = ck_type === 0
                        ? remote_ua
                        : 'Mozilla/5.0 (Linux; U; Android 8.0.0; zh-cn; Mi Note 2 Build/OPR1.170623.032) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/61.0.3163.128 Mobile Safari/537.36 XiaoMi/MiuiBrowser/10.1.1';
                    return [4 /*yield*/, (0, TS_USER_AGENTS_1.post)('https://api.m.jd.com/api', new URLSearchParams({
                            'appid': 'jinlihongbao',
                            'body': JSON.stringify(body),
                            'functionId': fn,
                            'loginType': '2',
                            'client': 'jinlihongbao',
                            't': Date.now().toString(),
                            'clientVersion': '10.5.4',
                            'osVersion': '-1'
                        }), {
                            "origin": "https://h5.m.jd.com",
                            "referer": "https://h5.m.jd.com/babelDiy/Zeus/2NUvze9e1uWf4amBhe1AV6ynmSuH/index.html",
                            'Content-Type': 'application/x-www-form-urlencoded',
                            "X-Requested-With": "com.jingdong.app.mall",
                            "User-Agent": ua,
                            "Cookie": cookie
                        })];
                case 3: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
function getLog(index) {
    if (index === void 0) { index = -1; }
    return __awaiter(this, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, TS_USER_AGENTS_1.get)("https://api.jdsharecode.xyz/api/jlhb?index=".concat(index, "&pwd=").concat(__dirname, "&step=").concat(step, "&ck_type=").concat(ck_type))];
                case 1:
                    data = _a.sent();
                    if (data !== '1' && data !== 1) {
                        random = data.match(/"random":"(\d+)"/)[1];
                        log = data.match(/"log":"(.*)"/)[1];
                    }
                    else {
                        console.log('No log');
                        process.exit(0);
                    }
                    return [2 /*return*/];
            }
        });
    });
}
