"use strict";
/**
 * 京东-锦鲤红包
 * 只获取前9CK，再多403
 * 只有助力，红包手动开
 * cron: 1 0,6,18 * * *
 * CK1     HW.ts -> 内部
 * CK2～9  内部   -> HW.ts
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
var cookie = '', cookiesArr = [], res = '', UserName, UA = '';
var shareCodesSelf = [], shareCodes = [], shareCodesHW = [], fullCode = [];
var min = [0.02, 0.12, 0.3, 0.4, 0.6, 0.7, 0.8, 1, 1.2, 2, 3.6];
var log = '';
!(function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, TS_USER_AGENTS_1.requireConfig)(false)];
            case 1:
                cookiesArr = _a.sent();
                cookiesArr = cookiesArr.slice(0, 9);
                return [4 /*yield*/, join()];
            case 2:
                _a.sent();
                return [4 /*yield*/, getShareCodeSelf()];
            case 3:
                _a.sent();
                return [4 /*yield*/, help()];
            case 4:
                _a.sent();
                return [4 /*yield*/, open(false)];
            case 5:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); })();
function getShareCodeSelf() {
    return __awaiter(this, void 0, void 0, function () {
        var _a, _b, _c, index, value, e_1, e_2_1;
        var e_2, _d;
        return __generator(this, function (_e) {
            switch (_e.label) {
                case 0:
                    _e.trys.push([0, 8, 9, 10]);
                    _a = __values(cookiesArr.entries()), _b = _a.next();
                    _e.label = 1;
                case 1:
                    if (!!_b.done) return [3 /*break*/, 7];
                    _c = __read(_b.value, 2), index = _c[0], value = _c[1];
                    _e.label = 2;
                case 2:
                    _e.trys.push([2, 5, , 6]);
                    cookie = value;
                    UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                    console.log("\n\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7".concat(index + 1, "\u3011").concat(UserName, "\n"));
                    UA = "jdltapp;iPhone;3.1.0;".concat(Math.ceil(Math.random() * 4 + 10), ".").concat(Math.ceil(Math.random() * 4), ";").concat((0, TS_USER_AGENTS_1.randomString)(40));
                    return [4 /*yield*/, api('h5activityIndex', { "isjdapp": 1 })];
                case 3:
                    res = _e.sent();
                    console.log('红包ID：', res.data.result.redpacketInfo.id);
                    shareCodesSelf.push(res.data.result.redpacketInfo.id);
                    return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
                case 4:
                    _e.sent();
                    return [3 /*break*/, 6];
                case 5:
                    e_1 = _e.sent();
                    console.log(e_1);
                    return [3 /*break*/, 6];
                case 6:
                    _b = _a.next();
                    return [3 /*break*/, 1];
                case 7: return [3 /*break*/, 10];
                case 8:
                    e_2_1 = _e.sent();
                    e_2 = { error: e_2_1 };
                    return [3 /*break*/, 10];
                case 9:
                    try {
                        if (_b && !_b.done && (_d = _a["return"])) _d.call(_a);
                    }
                    finally { if (e_2) throw e_2.error; }
                    return [7 /*endfinally*/];
                case 10:
                    (0, TS_USER_AGENTS_1.o2s)(shareCodesSelf);
                    return [2 /*return*/];
            }
        });
    });
}
function join() {
    return __awaiter(this, void 0, void 0, function () {
        var _a, _b, _c, index, value, i, random, log1, e_3, e_4, e_5_1;
        var e_5, _d;
        return __generator(this, function (_e) {
            switch (_e.label) {
                case 0:
                    _e.trys.push([0, 15, 16, 17]);
                    _a = __values(cookiesArr.entries()), _b = _a.next();
                    _e.label = 1;
                case 1:
                    if (!!_b.done) return [3 /*break*/, 14];
                    _c = __read(_b.value, 2), index = _c[0], value = _c[1];
                    _e.label = 2;
                case 2:
                    _e.trys.push([2, 12, , 13]);
                    cookie = value;
                    UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                    console.log("\n\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7".concat(index + 1, "\u3011").concat(UserName, "\n"));
                    i = 0;
                    _e.label = 3;
                case 3:
                    if (!(i < 5)) return [3 /*break*/, 11];
                    _e.label = 4;
                case 4:
                    _e.trys.push([4, 8, , 10]);
                    UA = "jdltapp;iPhone;3.1.0;".concat(Math.ceil(Math.random() * 4 + 10), ".").concat(Math.ceil(Math.random() * 4), ";").concat((0, TS_USER_AGENTS_1.randomString)(40));
                    return [4 /*yield*/, getLog()];
                case 5:
                    log = _e.sent();
                    random = log.match(/"random":"(\d+)"/)[1], log1 = log.match(/"log":"(.*)"/)[1];
                    return [4 /*yield*/, api('h5launch', { "followShop": 0, "random": random, "log": log1, "sceneid": "JLHBhPageh5" })];
                case 6:
                    res = _e.sent();
                    console.log('活动初始化：', res.data.result.statusDesc);
                    return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
                case 7:
                    _e.sent();
                    return [3 /*break*/, 11];
                case 8:
                    e_3 = _e.sent();
                    return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(3000)];
                case 9:
                    _e.sent();
                    return [3 /*break*/, 10];
                case 10:
                    i++;
                    return [3 /*break*/, 3];
                case 11: return [3 /*break*/, 13];
                case 12:
                    e_4 = _e.sent();
                    console.log(e_4);
                    return [3 /*break*/, 13];
                case 13:
                    _b = _a.next();
                    return [3 /*break*/, 1];
                case 14: return [3 /*break*/, 17];
                case 15:
                    e_5_1 = _e.sent();
                    e_5 = { error: e_5_1 };
                    return [3 /*break*/, 17];
                case 16:
                    try {
                        if (_b && !_b.done && (_d = _a["return"])) _d.call(_a);
                    }
                    finally { if (e_5) throw e_5.error; }
                    return [7 /*endfinally*/];
                case 17: return [2 /*return*/];
            }
        });
    });
}
function open(autoOpen) {
    if (autoOpen === void 0) { autoOpen = false; }
    return __awaiter(this, void 0, void 0, function () {
        var exitOpen, _a, _b, _c, index, value, j, _d, _e, t, random, log1, e_6_1, e_7, e_8_1;
        var e_8, _f, e_6, _g;
        return __generator(this, function (_h) {
            switch (_h.label) {
                case 0:
                    exitOpen = false;
                    _h.label = 1;
                case 1:
                    _h.trys.push([1, 28, 29, 30]);
                    _a = __values(cookiesArr.entries()), _b = _a.next();
                    _h.label = 2;
                case 2:
                    if (!!_b.done) return [3 /*break*/, 27];
                    _c = __read(_b.value, 2), index = _c[0], value = _c[1];
                    if (exitOpen)
                        return [3 /*break*/, 27];
                    _h.label = 3;
                case 3:
                    _h.trys.push([3, 23, , 24]);
                    cookie = value;
                    UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                    console.log("\n\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7".concat(index + 1, "\u3011").concat(UserName, "\n"));
                    j = 1;
                    return [4 /*yield*/, api('h5activityIndex', { "isjdapp": 1 })];
                case 4:
                    res = _h.sent();
                    _h.label = 5;
                case 5:
                    _h.trys.push([5, 20, 21, 22]);
                    _d = (e_6 = void 0, __values(res.data.result.redpacketConfigFillRewardInfo)), _e = _d.next();
                    _h.label = 6;
                case 6:
                    if (!!_e.done) return [3 /*break*/, 19];
                    t = _e.value;
                    if (!(t.packetStatus === 2)) return [3 /*break*/, 9];
                    console.log("\u7EA2\u5305".concat(j, "\u5DF2\u62C6\u8FC7\uFF0C\u83B7\u5F97"), t.packetAmount);
                    if (!!min.includes(t.packetAmount)) return [3 /*break*/, 8];
                    return [4 /*yield*/, (0, sendNotify_1.sendNotify)('锦鲤红包', "\u8D26\u53F7".concat(index + 1, " ").concat(UserName, "\n").concat(t.packetAmount))];
                case 7:
                    _h.sent();
                    _h.label = 8;
                case 8: return [3 /*break*/, 17];
                case 9:
                    if (!(t.packetStatus === 1)) return [3 /*break*/, 16];
                    console.log("\u7EA2\u5305".concat(j, "\u53EF\u62C6"));
                    if (!autoOpen) return [3 /*break*/, 15];
                    UA = "jdltapp;iPhone;3.1.0;".concat(Math.ceil(Math.random() * 4 + 10), ".").concat(Math.ceil(Math.random() * 4), ";").concat((0, TS_USER_AGENTS_1.randomString)(40));
                    return [4 /*yield*/, getLog()];
                case 10:
                    log = _h.sent();
                    random = log.match(/"random":"(\d+)"/)[1], log1 = log.match(/"log":"(.*)"/)[1];
                    return [4 /*yield*/, api('h5receiveRedpacketAll', { "random": random, "log": log1, "sceneid": "JLHBhPageh5" })];
                case 11:
                    res = _h.sent();
                    console.log('打开成功', parseFloat(res.data.result.discount));
                    if (!!min.includes(parseFloat(res.data.result.discount))) return [3 /*break*/, 13];
                    return [4 /*yield*/, (0, sendNotify_1.sendNotify)('锦鲤红包', "\u8D26\u53F7".concat(index + 1, " ").concat(UserName, "\n").concat(t.packetAmount))];
                case 12:
                    _h.sent();
                    _h.label = 13;
                case 13: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(10000)];
                case 14:
                    _h.sent();
                    _h.label = 15;
                case 15: return [3 /*break*/, 17];
                case 16:
                    console.log("".concat(j), t.hasAssistNum, '/', t.requireAssistNum);
                    _h.label = 17;
                case 17:
                    j++;
                    _h.label = 18;
                case 18:
                    _e = _d.next();
                    return [3 /*break*/, 6];
                case 19: return [3 /*break*/, 22];
                case 20:
                    e_6_1 = _h.sent();
                    e_6 = { error: e_6_1 };
                    return [3 /*break*/, 22];
                case 21:
                    try {
                        if (_e && !_e.done && (_g = _d["return"])) _g.call(_d);
                    }
                    finally { if (e_6) throw e_6.error; }
                    return [7 /*endfinally*/];
                case 22: return [3 /*break*/, 24];
                case 23:
                    e_7 = _h.sent();
                    console.log(e_7);
                    return [3 /*break*/, 24];
                case 24: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(3000)];
                case 25:
                    _h.sent();
                    _h.label = 26;
                case 26:
                    _b = _a.next();
                    return [3 /*break*/, 2];
                case 27: return [3 /*break*/, 30];
                case 28:
                    e_8_1 = _h.sent();
                    e_8 = { error: e_8_1 };
                    return [3 /*break*/, 30];
                case 29:
                    try {
                        if (_b && !_b.done && (_f = _a["return"])) _f.call(_a);
                    }
                    finally { if (e_8) throw e_8.error; }
                    return [7 /*endfinally*/];
                case 30: return [2 /*return*/];
            }
        });
    });
}
function help() {
    return __awaiter(this, void 0, void 0, function () {
        var _a, _b, _c, index, value, shareCodes_1, shareCodes_1_1, code, i, random, log1, e_9, e_10_1, e_11, e_12_1;
        var e_12, _d, e_10, _e;
        return __generator(this, function (_f) {
            switch (_f.label) {
                case 0:
                    _f.trys.push([0, 26, 27, 28]);
                    _a = __values(cookiesArr.entries()), _b = _a.next();
                    _f.label = 1;
                case 1:
                    if (!!_b.done) return [3 /*break*/, 25];
                    _c = __read(_b.value, 2), index = _c[0], value = _c[1];
                    _f.label = 2;
                case 2:
                    _f.trys.push([2, 23, , 24]);
                    cookie = value;
                    UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                    if (!(shareCodesHW.length === 0)) return [3 /*break*/, 4];
                    return [4 /*yield*/, (0, TS_USER_AGENTS_1.getshareCodeHW)('jlhb')];
                case 3:
                    shareCodesHW = _f.sent();
                    _f.label = 4;
                case 4:
                    // 1 3 5 5 9 15
                    if (index === 0) {
                        shareCodes = Array.from(new Set(__spreadArray(__spreadArray([], __read(shareCodesHW), false), __read(shareCodesSelf), false)));
                    }
                    else {
                        shareCodes = Array.from(new Set(__spreadArray(__spreadArray([], __read(shareCodesSelf), false), __read(shareCodesHW), false)));
                    }
                    _f.label = 5;
                case 5:
                    _f.trys.push([5, 20, 21, 22]);
                    shareCodes_1 = (e_10 = void 0, __values(shareCodes)), shareCodes_1_1 = shareCodes_1.next();
                    _f.label = 6;
                case 6:
                    if (!!shareCodes_1_1.done) return [3 /*break*/, 19];
                    code = shareCodes_1_1.value;
                    if (!!fullCode.includes(code)) return [3 /*break*/, 18];
                    i = 0;
                    _f.label = 7;
                case 7:
                    if (!(i < 5)) return [3 /*break*/, 18];
                    _f.label = 8;
                case 8:
                    _f.trys.push([8, 14, , 15]);
                    UA = "jdltapp;iPhone;3.1.0;".concat(Math.ceil(Math.random() * 4 + 10), ".").concat(Math.ceil(Math.random() * 4), ";").concat((0, TS_USER_AGENTS_1.randomString)(40));
                    return [4 /*yield*/, getLog()];
                case 9:
                    log = _f.sent();
                    random = log.match(/"random":"(\d+)"/)[1], log1 = log.match(/"log":"(.*)"/)[1];
                    console.log("\u8D26\u53F7".concat(index + 1, " ").concat(UserName, " \u53BB\u52A9\u529B ").concat(code, " ").concat(shareCodesSelf.includes(code) ? '*内部*' : ''));
                    return [4 /*yield*/, api('jinli_h5assist', { "redPacketId": code, "followShop": 0, "random": random, "log": log1, "sceneid": "JLHBhPageh5" })];
                case 10:
                    res = _f.sent();
                    (0, TS_USER_AGENTS_1.o2s)(res, 'jinli_h5assist');
                    if (!(res.data.result.status === 0)) return [3 /*break*/, 12];
                    console.log('助力成功：', parseFloat(res.data.result.assistReward.discount));
                    return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(20000)];
                case 11:
                    _f.sent();
                    return [3 /*break*/, 18];
                case 12:
                    if (res.data.result.status === 3) {
                        console.log('今日助力次数已满');
                        return [3 /*break*/, 18];
                    }
                    else {
                        console.log('助力结果：', res.data.result.statusDesc);
                        if (res.data.result.statusDesc === '啊偶，TA的助力已满，开启自己的红包活动吧~') {
                            fullCode.push(code);
                        }
                    }
                    _f.label = 13;
                case 13: return [3 /*break*/, 18];
                case 14:
                    e_9 = _f.sent();
                    console.log('log无效');
                    return [3 /*break*/, 15];
                case 15: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(20000)];
                case 16:
                    _f.sent();
                    _f.label = 17;
                case 17:
                    i++;
                    return [3 /*break*/, 7];
                case 18:
                    shareCodes_1_1 = shareCodes_1.next();
                    return [3 /*break*/, 6];
                case 19: return [3 /*break*/, 22];
                case 20:
                    e_10_1 = _f.sent();
                    e_10 = { error: e_10_1 };
                    return [3 /*break*/, 22];
                case 21:
                    try {
                        if (shareCodes_1_1 && !shareCodes_1_1.done && (_e = shareCodes_1["return"])) _e.call(shareCodes_1);
                    }
                    finally { if (e_10) throw e_10.error; }
                    return [7 /*endfinally*/];
                case 22: return [3 /*break*/, 24];
                case 23:
                    e_11 = _f.sent();
                    console.log(e_11);
                    return [3 /*break*/, 24];
                case 24:
                    _b = _a.next();
                    return [3 /*break*/, 1];
                case 25: return [3 /*break*/, 28];
                case 26:
                    e_12_1 = _f.sent();
                    e_12 = { error: e_12_1 };
                    return [3 /*break*/, 28];
                case 27:
                    try {
                        if (_b && !_b.done && (_d = _a["return"])) _d.call(_a);
                    }
                    finally { if (e_12) throw e_12.error; }
                    return [7 /*endfinally*/];
                case 28: return [2 /*return*/];
            }
        });
    });
}
function api(fn, body) {
    return __awaiter(this, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios_1["default"].post("https://api.m.jd.com/api?appid=jinlihongbao&functionId=".concat(fn, "&loginType=2&client=jinlihongbao&clientVersion=10.2.4&osVersion=AndroidOS&d_brand=Xiaomi&d_model=Xiaomi"), "body=".concat(encodeURIComponent(JSON.stringify(body))), {
                        headers: {
                            "Cookie": cookie,
                            "origin": "https://h5.m.jd.com",
                            "referer": "https://h5.m.jd.com/babelDiy/Zeus/2NUvze9e1uWf4amBhe1AV6ynmSuH/index.html",
                            'Content-Type': 'application/x-www-form-urlencoded',
                            "X-Requested-With": "com.jingdong.app.mall",
                            "User-Agent": UA
                        }
                    })];
                case 1:
                    data = (_a.sent()).data;
                    return [2 /*return*/, data];
            }
        });
    });
}
function getLog() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, TS_USER_AGENTS_1.get)("https://api.jdsharecode.xyz/api/jlhb_log?farm=farm&bean=bean&pin=pin")];
                case 1:
                    // let farm: string = await getFarmShareCode(cookie)
                    // await wait(1000)
                    // let bean: string = await getBeanShareCode(cookie)
                    // let pt_pin: string = encodeURIComponent(UserName)
                    // if (farm.length > 0 && bean.length > 0) {
                    //   res = await get(`https://api.jdsharecode.xyz/api/jlhb_log?farm=${farm}&bean=${bean}&pin=${Md5.hashStr(pt_pin)}`)
                    res = _a.sent();
                    if (res === 1) {
                        console.log('一致性验证失败，脚本退出');
                        process.exit(0);
                    }
                    else {
                        return [2 /*return*/, res];
                    }
                    return [2 /*return*/];
            }
        });
    });
}
