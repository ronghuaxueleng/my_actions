"use strict";
/**
 * 京东-锦鲤红包
 * 做任务、助力、开红包
 * cron: 1 0,6,18 * * *
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
var jinli_log_1 = require("./utils/jinli_log");
var TS_USER_AGENTS_1 = require("./TS_USER_AGENTS");
var cookie = '', res = '', UserName, UA = '';
var shareCodesSelf = [], shareCodes = [], shareCodesHW = [], fullCode = [];
var min = [0.02, 0.12, 0.3, 0.6, 0.7, 0.8, 1, 2], log = '', logIndex = 10;
!(function () { return __awaiter(void 0, void 0, void 0, function () {
    var cookiesArr, _a, _b, _c, index, value, random, log1, e_1, e_2_1, _d, _e, _f, index, value, shareCodes_1, shareCodes_1_1, code, random, log1, e_3_1, e_4, e_5_1, _g, _h, _j, index, value, random, log1, j, _k, _l, t, e_6_1, e_7, e_8_1;
    var e_2, _m, e_5, _o, e_3, _p, e_8, _q, e_6, _r;
    return __generator(this, function (_s) {
        switch (_s.label) {
            case 0: return [4 /*yield*/, (0, TS_USER_AGENTS_1.requireConfig)(false)];
            case 1:
                cookiesArr = _s.sent();
                _s.label = 2;
            case 2:
                _s.trys.push([2, 12, 13, 14]);
                _a = __values(cookiesArr.entries()), _b = _a.next();
                _s.label = 3;
            case 3:
                if (!!_b.done) return [3 /*break*/, 11];
                _c = __read(_b.value, 2), index = _c[0], value = _c[1];
                _s.label = 4;
            case 4:
                _s.trys.push([4, 9, , 10]);
                cookie = value;
                UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                console.log("\n\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7".concat(index + 1, "\u3011").concat(UserName, "\n"));
                UA = "jdltapp;iPhone;3.1.0;".concat(Math.ceil(Math.random() * 4 + 10), ".").concat(Math.ceil(Math.random() * 4), ";").concat((0, TS_USER_AGENTS_1.randomString)(40));
                log = jinli_log_1.logs[(0, TS_USER_AGENTS_1.getRandomNumberByRange)(0, jinli_log_1.logs.length - 1)];
                random = log.match(/"random":"(\d+)"/)[1], log1 = log.match(/"log":"(.*)"/)[1];
                return [4 /*yield*/, api('h5launch', { "followShop": 0, "random": random, "log": log1, "sceneid": "JLHBhPageh5" })];
            case 5:
                res = _s.sent();
                console.log('活动初始化：', res.data.result.statusDesc);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 6:
                _s.sent();
                return [4 /*yield*/, api('h5activityIndex', { "isjdapp": 1 })];
            case 7:
                res = _s.sent();
                console.log('红包ID：', res.data.result.redpacketInfo.id);
                shareCodesSelf.push(res.data.result.redpacketInfo.id);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 8:
                _s.sent();
                return [3 /*break*/, 10];
            case 9:
                e_1 = _s.sent();
                console.log(e_1);
                return [3 /*break*/, 10];
            case 10:
                _b = _a.next();
                return [3 /*break*/, 3];
            case 11: return [3 /*break*/, 14];
            case 12:
                e_2_1 = _s.sent();
                e_2 = { error: e_2_1 };
                return [3 /*break*/, 14];
            case 13:
                try {
                    if (_b && !_b.done && (_m = _a["return"])) _m.call(_a);
                }
                finally { if (e_2) throw e_2.error; }
                return [7 /*endfinally*/];
            case 14: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(3000)];
            case 15:
                _s.sent();
                console.log('内部助力：', shareCodesSelf);
                _s.label = 16;
            case 16:
                _s.trys.push([16, 37, 38, 39]);
                _d = __values(cookiesArr.entries()), _e = _d.next();
                _s.label = 17;
            case 17:
                if (!!_e.done) return [3 /*break*/, 36];
                _f = __read(_e.value, 2), index = _f[0], value = _f[1];
                _s.label = 18;
            case 18:
                _s.trys.push([18, 34, , 35]);
                cookie = value;
                UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                if (!(shareCodesHW.length === 0)) return [3 /*break*/, 20];
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.getshareCodeHW)('jlhb')];
            case 19:
                shareCodesHW = _s.sent();
                _s.label = 20;
            case 20:
                // 2 4 9 12
                if (index === 0 || cookiesArr.length === 2) { // 红包1需2个助力
                    shareCodes = Array.from(new Set(__spreadArray(__spreadArray([], __read(shareCodesHW), false), __read(shareCodesSelf), false)));
                }
                else {
                    shareCodes = Array.from(new Set(__spreadArray(__spreadArray([], __read(shareCodesSelf), false), __read(shareCodesHW), false)));
                }
                if (cookiesArr.length > 5 && cookiesArr.length < 8 && index > 4) { // 红包3需要7个助力
                    shareCodes = Array.from(new Set(__spreadArray(__spreadArray([], __read(shareCodesHW), false), __read(shareCodesSelf), false)));
                }
                _s.label = 21;
            case 21:
                _s.trys.push([21, 31, 32, 33]);
                shareCodes_1 = (e_3 = void 0, __values(shareCodes)), shareCodes_1_1 = shareCodes_1.next();
                _s.label = 22;
            case 22:
                if (!!shareCodes_1_1.done) return [3 /*break*/, 30];
                code = shareCodes_1_1.value;
                if (!!fullCode.includes(code)) return [3 /*break*/, 28];
                UA = "jdltapp;iPhone;3.1.0;".concat(Math.ceil(Math.random() * 4 + 10), ".").concat(Math.ceil(Math.random() * 4), ";").concat((0, TS_USER_AGENTS_1.randomString)(40));
                log = jinli_log_1.logs[(0, TS_USER_AGENTS_1.getRandomNumberByRange)(0, jinli_log_1.logs.length - 1)];
                random = log.match(/"random":"(\d+)"/)[1], log1 = log.match(/"log":"(.*)"/)[1];
                console.log("\u8D26\u53F7".concat(index + 1, " ").concat(UserName, " \u53BB\u52A9\u529B ").concat(code, " ").concat(shareCodesSelf.includes(code) ? '*内部*' : ''));
                return [4 /*yield*/, api('jinli_h5assist', { "redPacketId": code, "followShop": 0, "random": random, "log": log1, "sceneid": "JLHBhPageh5" })];
            case 23:
                res = _s.sent();
                (0, TS_USER_AGENTS_1.o2s)(res, 'jinli_h5assist');
                if (!(res.data.result.status === 0)) return [3 /*break*/, 25];
                console.log('助力成功：', parseFloat(res.data.result.assistReward.discount));
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 24:
                _s.sent();
                return [3 /*break*/, 30];
            case 25:
                if (res.data.result.status === 3) {
                    console.log('今日助力次数已满');
                    return [3 /*break*/, 30];
                }
                else {
                    console.log('助力结果：', res.data.result.statusDesc);
                    if (res.data.result.statusDesc === '啊偶，TA的助力已满，开启自己的红包活动吧~') {
                        fullCode.push(code);
                    }
                }
                _s.label = 26;
            case 26: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 27:
                _s.sent();
                return [3 /*break*/, 29];
            case 28:
                console.log("Code ".concat(code, " \u5DF2\u88AB\u52A9\u6EE1"));
                _s.label = 29;
            case 29:
                shareCodes_1_1 = shareCodes_1.next();
                return [3 /*break*/, 22];
            case 30: return [3 /*break*/, 33];
            case 31:
                e_3_1 = _s.sent();
                e_3 = { error: e_3_1 };
                return [3 /*break*/, 33];
            case 32:
                try {
                    if (shareCodes_1_1 && !shareCodes_1_1.done && (_p = shareCodes_1["return"])) _p.call(shareCodes_1);
                }
                finally { if (e_3) throw e_3.error; }
                return [7 /*endfinally*/];
            case 33: return [3 /*break*/, 35];
            case 34:
                e_4 = _s.sent();
                console.log(e_4);
                return [3 /*break*/, 35];
            case 35:
                _e = _d.next();
                return [3 /*break*/, 17];
            case 36: return [3 /*break*/, 39];
            case 37:
                e_5_1 = _s.sent();
                e_5 = { error: e_5_1 };
                return [3 /*break*/, 39];
            case 38:
                try {
                    if (_e && !_e.done && (_o = _d["return"])) _o.call(_d);
                }
                finally { if (e_5) throw e_5.error; }
                return [7 /*endfinally*/];
            case 39:
                _s.trys.push([39, 60, 61, 62]);
                _g = __values(cookiesArr.entries()), _h = _g.next();
                _s.label = 40;
            case 40:
                if (!!_h.done) return [3 /*break*/, 59];
                _j = __read(_h.value, 2), index = _j[0], value = _j[1];
                _s.label = 41;
            case 41:
                _s.trys.push([41, 55, , 56]);
                cookie = value;
                UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                console.log("\n\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7".concat(index + 1, "\u3011").concat(UserName, "\n"));
                UA = "jdltapp;iPhone;3.1.0;".concat(Math.ceil(Math.random() * 4 + 10), ".").concat(Math.ceil(Math.random() * 4), ";").concat((0, TS_USER_AGENTS_1.randomString)(40));
                log = jinli_log_1.logs[(0, TS_USER_AGENTS_1.getRandomNumberByRange)(0, jinli_log_1.logs.length - 1)];
                random = log.match(/"random":"(\d+)"/)[1], log1 = log.match(/"log":"(.*)"/)[1];
                j = 1;
                return [4 /*yield*/, api('h5activityIndex', { "isjdapp": 1 })];
            case 42:
                res = _s.sent();
                _s.label = 43;
            case 43:
                _s.trys.push([43, 52, 53, 54]);
                _k = (e_6 = void 0, __values(res.data.result.redpacketConfigFillRewardInfo)), _l = _k.next();
                _s.label = 44;
            case 44:
                if (!!_l.done) return [3 /*break*/, 51];
                t = _l.value;
                if (!(t.packetStatus === 2)) return [3 /*break*/, 45];
                console.log("\u7EA2\u5305".concat(j, "\u5DF2\u62C6\u8FC7\uFF0C\u83B7\u5F97"), t.packetAmount);
                return [3 /*break*/, 49];
            case 45:
                if (!(t.packetStatus === 1)) return [3 /*break*/, 48];
                console.log("\u7EA2\u5305".concat(j, "\u53EF\u62C6"));
                return [4 /*yield*/, api('h5receiveRedpacketAll', { "random": random, "log": log1, "sceneid": "JLHBhPageh5" })];
            case 46:
                res = _s.sent();
                console.log(res.data.biz_msg, parseFloat(res.data.result.discount));
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 47:
                _s.sent();
                return [3 /*break*/, 49];
            case 48:
                console.log("".concat(j), t.hasAssistNum, '/', t.requireAssistNum);
                _s.label = 49;
            case 49:
                j++;
                _s.label = 50;
            case 50:
                _l = _k.next();
                return [3 /*break*/, 44];
            case 51: return [3 /*break*/, 54];
            case 52:
                e_6_1 = _s.sent();
                e_6 = { error: e_6_1 };
                return [3 /*break*/, 54];
            case 53:
                try {
                    if (_l && !_l.done && (_r = _k["return"])) _r.call(_k);
                }
                finally { if (e_6) throw e_6.error; }
                return [7 /*endfinally*/];
            case 54: return [3 /*break*/, 56];
            case 55:
                e_7 = _s.sent();
                console.log(e_7);
                return [3 /*break*/, 56];
            case 56: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 57:
                _s.sent();
                _s.label = 58;
            case 58:
                _h = _g.next();
                return [3 /*break*/, 40];
            case 59: return [3 /*break*/, 62];
            case 60:
                e_8_1 = _s.sent();
                e_8 = { error: e_8_1 };
                return [3 /*break*/, 62];
            case 61:
                try {
                    if (_h && !_h.done && (_q = _g["return"])) _q.call(_g);
                }
                finally { if (e_8) throw e_8.error; }
                return [7 /*endfinally*/];
            case 62: return [2 /*return*/];
        }
    });
}); })();
function api(fn, body, retry) {
    if (retry === void 0) { retry = 0; }
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
                    if (!(data.rtn_code === 403 && retry < 3)) return [3 /*break*/, 4];
                    console.log('retry...');
                    return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
                case 2:
                    _a.sent();
                    log = jinli_log_1.logs[(0, TS_USER_AGENTS_1.getRandomNumberByRange)(0, jinli_log_1.logs.length - 1)];
                    body['random'] = log.match(/"random":"(\d+)"/)[1];
                    body['log'] = log.match(/"log":"(.*)"/)[1];
                    return [4 /*yield*/, api(fn, body, ++retry)];
                case 3:
                    _a.sent();
                    _a.label = 4;
                case 4: return [2 /*return*/, data];
            }
        });
    });
}
