"use strict";
/**
 * 京东-锦鲤红包
 * 6点后做全部CK
 * cron: 5 0,1,6 * * *
 * CK1     HW.ts -> 内部
 * CK2～n  内部   -> HW.ts
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
var axios_1 = require("axios");
var sendNotify_1 = require("./sendNotify");
var TS_USER_AGENTS_1 = require("./TS_USER_AGENTS");
// import {logs} from './test'
var cookie, cookiesArr = [], res, UserName;
var shareCodesSelf = [], shareCodes = [], shareCodesHW = [], fullCode = [];
var min = [0.02, 0.12, 0.3, 0.4, 0.6, 0.7, 0.8, 1, 1.2, 2, 3.6], needLog = true;
!(function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, TS_USER_AGENTS_1.requireConfig)(false)];
            case 1:
                cookiesArr = _a.sent();
                if (new Date().getHours() === 0) {
                    cookiesArr = cookiesArr.slice(0, 1);
                }
                else {
                    cookiesArr = cookiesArr.slice(1, 9);
                }
                return [4 /*yield*/, join()];
            case 2:
                _a.sent();
                return [4 /*yield*/, getShareCodeSelf()];
            case 3:
                _a.sent();
                return [4 /*yield*/, help()];
            case 4:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); })();
function join() {
    return __awaiter(this, void 0, void 0, function () {
        var _a, _b, _c, index, value, i, e_1, e_2, e_3_1;
        var e_3, _d;
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
                    console.log("\n\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7".concat(index + 1, "\u3011").concat(UserName, "\n"));
                    i = 0;
                    _e.label = 3;
                case 3:
                    if (!(i < 5)) return [3 /*break*/, 10];
                    _e.label = 4;
                case 4:
                    _e.trys.push([4, 7, , 9]);
                    return [4 /*yield*/, api('h5launch', { "followShop": 0 })];
                case 5:
                    res = _e.sent();
                    console.log('活动初始化：', res.data.result.statusDesc);
                    return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
                case 6:
                    _e.sent();
                    if (res.rtn_code !== 403) {
                        return [3 /*break*/, 10];
                    }
                    return [3 /*break*/, 9];
                case 7:
                    e_1 = _e.sent();
                    console.log('error', e_1);
                    return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(3000)];
                case 8:
                    _e.sent();
                    return [3 /*break*/, 9];
                case 9:
                    i++;
                    return [3 /*break*/, 3];
                case 10: return [3 /*break*/, 12];
                case 11:
                    e_2 = _e.sent();
                    console.log(e_2);
                    return [3 /*break*/, 12];
                case 12: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
                case 13:
                    _e.sent();
                    _e.label = 14;
                case 14:
                    _b = _a.next();
                    return [3 /*break*/, 1];
                case 15: return [3 /*break*/, 18];
                case 16:
                    e_3_1 = _e.sent();
                    e_3 = { error: e_3_1 };
                    return [3 /*break*/, 18];
                case 17:
                    try {
                        if (_b && !_b.done && (_d = _a["return"])) _d.call(_a);
                    }
                    finally { if (e_3) throw e_3.error; }
                    return [7 /*endfinally*/];
                case 18: return [2 /*return*/];
            }
        });
    });
}
function getShareCodeSelf(one) {
    if (one === void 0) { one = false; }
    return __awaiter(this, void 0, void 0, function () {
        var _a, _b, _c, index, value, e_4, e_5_1;
        var e_5, _d;
        return __generator(this, function (_e) {
            switch (_e.label) {
                case 0:
                    if (!one) return [3 /*break*/, 2];
                    return [4 /*yield*/, api('h5activityIndex', { "isjdapp": 1 })];
                case 1:
                    res = _e.sent();
                    return [2 /*return*/, res.data.result.redpacketInfo.id];
                case 2:
                    _e.trys.push([2, 12, 13, 14]);
                    _a = __values(cookiesArr.entries()), _b = _a.next();
                    _e.label = 3;
                case 3:
                    if (!!_b.done) return [3 /*break*/, 11];
                    _c = __read(_b.value, 2), index = _c[0], value = _c[1];
                    _e.label = 4;
                case 4:
                    _e.trys.push([4, 7, , 8]);
                    cookie = value;
                    UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                    console.log("\n\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7".concat(index + 1, "\u3011").concat(UserName, "\n"));
                    return [4 /*yield*/, api('h5activityIndex', { "isjdapp": 1 })];
                case 5:
                    res = _e.sent();
                    console.log('红包ID：', res.data.result.redpacketInfo.id);
                    shareCodesSelf.push(res.data.result.redpacketInfo.id);
                    return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
                case 6:
                    _e.sent();
                    return [3 /*break*/, 8];
                case 7:
                    e_4 = _e.sent();
                    console.log(e_4);
                    return [3 /*break*/, 8];
                case 8: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
                case 9:
                    _e.sent();
                    _e.label = 10;
                case 10:
                    _b = _a.next();
                    return [3 /*break*/, 3];
                case 11: return [3 /*break*/, 14];
                case 12:
                    e_5_1 = _e.sent();
                    e_5 = { error: e_5_1 };
                    return [3 /*break*/, 14];
                case 13:
                    try {
                        if (_b && !_b.done && (_d = _a["return"])) _d.call(_a);
                    }
                    finally { if (e_5) throw e_5.error; }
                    return [7 /*endfinally*/];
                case 14:
                    (0, TS_USER_AGENTS_1.o2s)(shareCodesSelf);
                    _e.label = 15;
                case 15: return [2 /*return*/];
            }
        });
    });
}
function open(autoOpen) {
    if (autoOpen === void 0) { autoOpen = false; }
    return __awaiter(this, void 0, void 0, function () {
        var _a, _b, _c, index, value, j, _d, _e, t, e_6_1, e_7, e_8_1;
        var e_8, _f, e_6, _g;
        return __generator(this, function (_h) {
            switch (_h.label) {
                case 0:
                    if (new Date().getHours() === 18) {
                        autoOpen = true;
                    }
                    _h.label = 1;
                case 1:
                    _h.trys.push([1, 27, 28, 29]);
                    _a = __values(cookiesArr.entries()), _b = _a.next();
                    _h.label = 2;
                case 2:
                    if (!!_b.done) return [3 /*break*/, 26];
                    _c = __read(_b.value, 2), index = _c[0], value = _c[1];
                    _h.label = 3;
                case 3:
                    _h.trys.push([3, 22, , 23]);
                    cookie = value;
                    UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                    console.log("\n\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7".concat(index + 1, "\u3011").concat(UserName, "\n"));
                    j = 1;
                    return [4 /*yield*/, api('h5activityIndex', { "isjdapp": 1 })];
                case 4:
                    res = _h.sent();
                    _h.label = 5;
                case 5:
                    _h.trys.push([5, 19, 20, 21]);
                    _d = (e_6 = void 0, __values(res.data.result.redpacketConfigFillRewardInfo)), _e = _d.next();
                    _h.label = 6;
                case 6:
                    if (!!_e.done) return [3 /*break*/, 18];
                    t = _e.value;
                    if (!(t.packetStatus === 2)) return [3 /*break*/, 9];
                    console.log("\u7EA2\u5305".concat(j, "\u5DF2\u62C6\u8FC7\uFF0C\u83B7\u5F97"), t.packetAmount);
                    if (!!min.includes(t.packetAmount)) return [3 /*break*/, 8];
                    return [4 /*yield*/, (0, sendNotify_1.sendNotify)('锦鲤红包', "\u8D26\u53F7".concat(index + 1, " ").concat(UserName, "\n").concat(t.packetAmount))];
                case 7:
                    _h.sent();
                    _h.label = 8;
                case 8: return [3 /*break*/, 16];
                case 9:
                    if (!(t.packetStatus === 1)) return [3 /*break*/, 15];
                    console.log("\u7EA2\u5305".concat(j, "\u53EF\u62C6"));
                    if (!autoOpen) return [3 /*break*/, 14];
                    return [4 /*yield*/, api('h5receiveRedpacketAll', {})];
                case 10:
                    res = _h.sent();
                    console.log('打开成功', parseFloat(res.data.result.discount));
                    if (!!min.includes(parseFloat(res.data.result.discount))) return [3 /*break*/, 12];
                    return [4 /*yield*/, (0, sendNotify_1.sendNotify)('锦鲤红包', "\u8D26\u53F7".concat(index + 1, " ").concat(UserName, "\n").concat(t.packetAmount))];
                case 11:
                    _h.sent();
                    _h.label = 12;
                case 12: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(10000)];
                case 13:
                    _h.sent();
                    _h.label = 14;
                case 14: return [3 /*break*/, 16];
                case 15:
                    console.log("".concat(j), t.hasAssistNum, '/', t.requireAssistNum);
                    _h.label = 16;
                case 16:
                    j++;
                    _h.label = 17;
                case 17:
                    _e = _d.next();
                    return [3 /*break*/, 6];
                case 18: return [3 /*break*/, 21];
                case 19:
                    e_6_1 = _h.sent();
                    e_6 = { error: e_6_1 };
                    return [3 /*break*/, 21];
                case 20:
                    try {
                        if (_e && !_e.done && (_g = _d["return"])) _g.call(_d);
                    }
                    finally { if (e_6) throw e_6.error; }
                    return [7 /*endfinally*/];
                case 21: return [3 /*break*/, 23];
                case 22:
                    e_7 = _h.sent();
                    console.log(e_7);
                    return [3 /*break*/, 23];
                case 23: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(6000)];
                case 24:
                    _h.sent();
                    _h.label = 25;
                case 25:
                    _b = _a.next();
                    return [3 /*break*/, 2];
                case 26: return [3 /*break*/, 29];
                case 27:
                    e_8_1 = _h.sent();
                    e_8 = { error: e_8_1 };
                    return [3 /*break*/, 29];
                case 28:
                    try {
                        if (_b && !_b.done && (_f = _a["return"])) _f.call(_a);
                    }
                    finally { if (e_8) throw e_8.error; }
                    return [7 /*endfinally*/];
                case 29: return [2 /*return*/];
            }
        });
    });
}
function help() {
    return __awaiter(this, void 0, void 0, function () {
        var _a, _b, _c, index, value, me, shareCodes_1, shareCodes_1_1, code, e_9_1, e_10, e_11_1;
        var e_11, _d, e_9, _e;
        return __generator(this, function (_f) {
            switch (_f.label) {
                case 0:
                    _f.trys.push([0, 24, 25, 26]);
                    _a = __values(cookiesArr.entries()), _b = _a.next();
                    _f.label = 1;
                case 1:
                    if (!!_b.done) return [3 /*break*/, 23];
                    _c = __read(_b.value, 2), index = _c[0], value = _c[1];
                    _f.label = 2;
                case 2:
                    _f.trys.push([2, 19, , 20]);
                    cookie = value;
                    UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                    if (!(shareCodesHW.length === 0)) return [3 /*break*/, 4];
                    return [4 /*yield*/, (0, TS_USER_AGENTS_1.getshareCodeHW)('jlhb')];
                case 3:
                    shareCodesHW = _f.sent();
                    _f.label = 4;
                case 4:
                    if (index === 0 && new Date().getHours() === 0) {
                        shareCodes = Array.from(new Set(__spreadArray(__spreadArray([], __read(shareCodesHW), false), __read(shareCodesSelf), false)));
                    }
                    else {
                        shareCodes = Array.from(new Set(__spreadArray(__spreadArray([], __read(shareCodesSelf), false), __read(shareCodesHW), false)));
                    }
                    return [4 /*yield*/, getShareCodeSelf(true)];
                case 5:
                    me = _f.sent();
                    _f.label = 6;
                case 6:
                    _f.trys.push([6, 16, 17, 18]);
                    shareCodes_1 = (e_9 = void 0, __values(shareCodes)), shareCodes_1_1 = shareCodes_1.next();
                    _f.label = 7;
                case 7:
                    if (!!shareCodes_1_1.done) return [3 /*break*/, 15];
                    code = shareCodes_1_1.value;
                    if (!(!fullCode.includes(code) && code !== me)) return [3 /*break*/, 14];
                    console.log("\u8D26\u53F7".concat(index + 1, " ").concat(UserName, " \u53BB\u52A9\u529B ").concat(code, " ").concat(shareCodesSelf.includes(code) ? '*内部*' : ''));
                    return [4 /*yield*/, api('jinli_h5assist', { "redPacketId": code, "followShop": 0 })];
                case 8:
                    res = _f.sent();
                    if (!(res.data.result.status === 0)) return [3 /*break*/, 10];
                    console.log('助力成功：', parseFloat(res.data.result.assistReward.discount));
                    return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(45000)];
                case 9:
                    _f.sent();
                    return [3 /*break*/, 15];
                case 10:
                    if (!(res.data.result.status === 3)) return [3 /*break*/, 12];
                    console.log('今日助力次数已满');
                    return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(45000)];
                case 11:
                    _f.sent();
                    return [3 /*break*/, 15];
                case 12:
                    console.log('助力结果：', res.data.result.statusDesc);
                    if (res.data.result.statusDesc === '啊偶，TA的助力已满，开启自己的红包活动吧~') {
                        fullCode.push(code);
                    }
                    return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(45000)];
                case 13:
                    _f.sent();
                    _f.label = 14;
                case 14:
                    shareCodes_1_1 = shareCodes_1.next();
                    return [3 /*break*/, 7];
                case 15: return [3 /*break*/, 18];
                case 16:
                    e_9_1 = _f.sent();
                    e_9 = { error: e_9_1 };
                    return [3 /*break*/, 18];
                case 17:
                    try {
                        if (shareCodes_1_1 && !shareCodes_1_1.done && (_e = shareCodes_1["return"])) _e.call(shareCodes_1);
                    }
                    finally { if (e_9) throw e_9.error; }
                    return [7 /*endfinally*/];
                case 18: return [3 /*break*/, 20];
                case 19:
                    e_10 = _f.sent();
                    console.log(e_10);
                    return [3 /*break*/, 20];
                case 20: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(6000)];
                case 21:
                    _f.sent();
                    _f.label = 22;
                case 22:
                    _b = _a.next();
                    return [3 /*break*/, 1];
                case 23: return [3 /*break*/, 26];
                case 24:
                    e_11_1 = _f.sent();
                    e_11 = { error: e_11_1 };
                    return [3 /*break*/, 26];
                case 25:
                    try {
                        if (_b && !_b.done && (_d = _a["return"])) _d.call(_a);
                    }
                    finally { if (e_11) throw e_11.error; }
                    return [7 /*endfinally*/];
                case 26: return [2 /*return*/];
            }
        });
    });
}
function api(fn, body) {
    return __awaiter(this, void 0, void 0, function () {
        var log, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(needLog || fn === 'startTask')) return [3 /*break*/, 2];
                    return [4 /*yield*/, getLog()];
                case 1:
                    log = _a.sent();
                    Object.assign(body, {
                        random: log.match(/"random":"(\d+)"/)[1],
                        log: log.match(/"log":"(.*)"/)[1],
                        sceneid: 'JLHBhPageh5'
                    });
                    _a.label = 2;
                case 2: return [4 /*yield*/, axios_1["default"].post("https://api.m.jd.com/api?appid=jinlihongbao&functionId=".concat(fn, "&loginType=2&client=jinlihongbao&clientVersion=10.2.4&osVersion=AndroidOS&d_brand=Xiaomi&d_model=Xiaomi"), "body=".concat(encodeURIComponent(JSON.stringify(body))), {
                        headers: {
                            "origin": "https://h5.m.jd.com",
                            "referer": "https://h5.m.jd.com/babelDiy/Zeus/2NUvze9e1uWf4amBhe1AV6ynmSuH/index.html",
                            'Content-Type': 'application/x-www-form-urlencoded',
                            "X-Requested-With": "com.jingdong.app.mall",
                            "User-Agent": "Mozilla/5.0 (Linux; U; Android 8.0.0; zh-cn; Mi Note 2 Build/OPR1.170623.032) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/61.0.3163.128 Mobile Safari/537.36 XiaoMi/MiuiBrowser/10.1.1",
                            "Cookie": cookie
                        }
                    })];
                case 3:
                    data = (_a.sent()).data;
                    return [2 /*return*/, data];
            }
        });
    });
}
function getLog() {
    return __awaiter(this, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, TS_USER_AGENTS_1.get)("https://api.jdsharecode.xyz/api/jlhb_log")];
                case 1:
                    data = _a.sent();
                    if (data !== 1 && data !== '1') {
                        return [2 /*return*/, data];
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
