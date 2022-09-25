"use strict";
/**
 * 小程序-领现金-1.5
 * cron: 15 14,15,19 * * *
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var TS_JDHelloWorld_1 = require("./TS_JDHelloWorld");
var Jd_cash_help = /** @class */ (function (_super) {
    __extends(Jd_cash_help, _super);
    function Jd_cash_help() {
        var _this = _super.call(this) || this;
        _this.shareCodeSelf = [];
        return _this;
    }
    Jd_cash_help.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.run(this)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Jd_cash_help.prototype.api = function (fn, body) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.wait(1000)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.post('https://api.m.jd.com/client.action', new URLSearchParams({
                                'functionId': fn,
                                'body': JSON.stringify(body),
                                'appid': 'CashRewardMiniH5Env',
                                'loginType': '2',
                                'loginWQBiz': 'interact'
                            }), {
                                'Host': 'api.m.jd.com',
                                "Referer": "https://servicewechat.com/wx91d27dbf599dff74/621/page-frame.html",
                                'User-Agent': "Mozilla/5.0 (iPhone; CPU iPhone OS ".concat(this.getIosVer(), " like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E217 MicroMessenger/6.8.0(0x16080000) NetType/WIFI Language/en Branch/Br_trunk MiniProgramEnv/Mac"),
                                'Cookie': this.user.cookie
                            })];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Jd_cash_help.prototype.main = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            var res, _a, _b, t, e_1_1, e_2;
            var e_1, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        this.user = user;
                        _d.label = 1;
                    case 1:
                        _d.trys.push([1, 16, , 17]);
                        return [4 /*yield*/, this.api('cash_mob_home', { "isLTRedPacket": "1" })];
                    case 2:
                        res = _d.sent();
                        _d.label = 3;
                    case 3:
                        _d.trys.push([3, 9, 10, 11]);
                        _a = __values(res.data.result.taskInfos), _b = _a.next();
                        _d.label = 4;
                    case 4:
                        if (!!_b.done) return [3 /*break*/, 8];
                        t = _b.value;
                        if (!(t.doTimes !== t.times)) return [3 /*break*/, 7];
                        console.log(t.name);
                        return [4 /*yield*/, this.api('cash_doTask', { "type": t.type, "taskInfo": t.desc })];
                    case 5:
                        res = _d.sent();
                        console.log(res.data.result.totalMoney);
                        return [4 /*yield*/, this.api('cash_mob_home', { "isLTRedPacket": "1" })];
                    case 6:
                        res = _d.sent();
                        _d.label = 7;
                    case 7:
                        _b = _a.next();
                        return [3 /*break*/, 4];
                    case 8: return [3 /*break*/, 11];
                    case 9:
                        e_1_1 = _d.sent();
                        e_1 = { error: e_1_1 };
                        return [3 /*break*/, 11];
                    case 10:
                        try {
                            if (_b && !_b.done && (_c = _a["return"])) _c.call(_a);
                        }
                        finally { if (e_1) throw e_1.error; }
                        return [7 /*endfinally*/];
                    case 11:
                        this.o2s(res);
                        if (!(new Date().getHours() >= 11 && new Date().getHours() < 22)) return [3 /*break*/, 14];
                        return [4 /*yield*/, this.api('cash_join_limited_redpacket', { "id": 5, "level": 3 })];
                    case 12:
                        res = _d.sent();
                        res.data.bizCode === 0 ? console.log('开启成功') : console.log(res.data.bizMsg);
                        return [4 /*yield*/, this.api('cash_mob_home', { "isLTRedPacket": "1" })];
                    case 13:
                        res = _d.sent();
                        if (res.data.result.inviteCode && res.data.result.shareDate) {
                            this.shareCodeSelf.push({
                                inviteCode: res.data.result.inviteCode,
                                shareDate: res.data.result.shareDate
                            });
                            console.log('助力码', res.data.result.inviteCode, res.data.result.shareDate);
                        }
                        return [3 /*break*/, 15];
                    case 14:
                        console.log('不在时间范围');
                        _d.label = 15;
                    case 15: return [3 /*break*/, 17];
                    case 16:
                        e_2 = _d.sent();
                        console.log('error', e_2.message);
                        return [3 /*break*/, 17];
                    case 17: return [2 /*return*/];
                }
            });
        });
    };
    Jd_cash_help.prototype.help = function (users) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        return __awaiter(this, void 0, void 0, function () {
            var shareCodeHW, shareCode, full, res, users_1, users_1_1, user, shareCode_1, shareCode_1_1, code, e_3_1, e_4, e_5_1, users_2, users_2_1, user, i, e_6, e_7_1;
            var e_5, _k, e_3, _l, e_7, _m;
            return __generator(this, function (_o) {
                switch (_o.label) {
                    case 0:
                        shareCodeHW = [], shareCode = [], full = [];
                        this.o2s(this.shareCodeSelf, '内部助力');
                        _o.label = 1;
                    case 1:
                        _o.trys.push([1, 17, 18, 19]);
                        users_1 = __values(users), users_1_1 = users_1.next();
                        _o.label = 2;
                    case 2:
                        if (!!users_1_1.done) return [3 /*break*/, 16];
                        user = users_1_1.value;
                        _o.label = 3;
                    case 3:
                        _o.trys.push([3, 14, , 15]);
                        this.user = user;
                        if (!(shareCodeHW.length === 0)) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.getshareCodeHW('cash')];
                    case 4:
                        shareCodeHW = _o.sent();
                        _o.label = 5;
                    case 5:
                        if (user.index === 0) {
                            shareCode = __spreadArray(__spreadArray([], __read(shareCodeHW), false), __read(this.shareCodeSelf), false);
                        }
                        else {
                            shareCode = __spreadArray(__spreadArray([], __read(this.shareCodeSelf), false), __read(shareCodeHW), false);
                        }
                        _o.label = 6;
                    case 6:
                        _o.trys.push([6, 11, 12, 13]);
                        shareCode_1 = (e_3 = void 0, __values(shareCode)), shareCode_1_1 = shareCode_1.next();
                        _o.label = 7;
                    case 7:
                        if (!!shareCode_1_1.done) return [3 /*break*/, 10];
                        code = shareCode_1_1.value;
                        console.log("\u8D26\u53F7".concat(user.index + 1, " ").concat(user.UserName, " \u53BB\u52A9\u529B ").concat(code.inviteCode));
                        if (full.includes(code.inviteCode)) {
                            console.log('full contains');
                            return [3 /*break*/, 9];
                        }
                        return [4 /*yield*/, this.api('redpack_limited_assist', { "inviteCode": code.inviteCode, "shareDate": code.shareDate })];
                    case 8:
                        res = _o.sent();
                        console.log((_c = (_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.result) === null || _b === void 0 ? void 0 : _b.limitTimeAssist) === null || _c === void 0 ? void 0 : _c.tips);
                        if (((_f = (_e = (_d = res.data) === null || _d === void 0 ? void 0 : _d.result) === null || _e === void 0 ? void 0 : _e.limitTimeAssist) === null || _f === void 0 ? void 0 : _f.tips) === '您来晚啦，您的好友已经领到全部奖励了')
                            full.push(code.inviteCode);
                        if (((_j = (_h = (_g = res.data) === null || _g === void 0 ? void 0 : _g.result) === null || _h === void 0 ? void 0 : _h.limitTimeAssist) === null || _j === void 0 ? void 0 : _j.assistCode) === '207') {
                            return [3 /*break*/, 10];
                        }
                        _o.label = 9;
                    case 9:
                        shareCode_1_1 = shareCode_1.next();
                        return [3 /*break*/, 7];
                    case 10: return [3 /*break*/, 13];
                    case 11:
                        e_3_1 = _o.sent();
                        e_3 = { error: e_3_1 };
                        return [3 /*break*/, 13];
                    case 12:
                        try {
                            if (shareCode_1_1 && !shareCode_1_1.done && (_l = shareCode_1["return"])) _l.call(shareCode_1);
                        }
                        finally { if (e_3) throw e_3.error; }
                        return [7 /*endfinally*/];
                    case 13: return [3 /*break*/, 15];
                    case 14:
                        e_4 = _o.sent();
                        console.log('error', e_4.message);
                        return [3 /*break*/, 15];
                    case 15:
                        users_1_1 = users_1.next();
                        return [3 /*break*/, 2];
                    case 16: return [3 /*break*/, 19];
                    case 17:
                        e_5_1 = _o.sent();
                        e_5 = { error: e_5_1 };
                        return [3 /*break*/, 19];
                    case 18:
                        try {
                            if (users_1_1 && !users_1_1.done && (_k = users_1["return"])) _k.call(users_1);
                        }
                        finally { if (e_5) throw e_5.error; }
                        return [7 /*endfinally*/];
                    case 19:
                        _o.trys.push([19, 29, 30, 31]);
                        users_2 = __values(users), users_2_1 = users_2.next();
                        _o.label = 20;
                    case 20:
                        if (!!users_2_1.done) return [3 /*break*/, 28];
                        user = users_2_1.value;
                        _o.label = 21;
                    case 21:
                        _o.trys.push([21, 26, , 27]);
                        this.user = user;
                        console.log("\u8D26\u53F7".concat(user.index + 1, " ").concat(user.UserName));
                        i = 1;
                        _o.label = 22;
                    case 22:
                        if (!(i < 5)) return [3 /*break*/, 25];
                        return [4 /*yield*/, this.api('cash_open_limited_redpacket', { "node": i })
                            // this.o2s(res)
                        ];
                    case 23:
                        res = _o.sent();
                        // this.o2s(res)
                        console.log(res.data.bizMsg);
                        if (res.data.bizMsg === '无资格')
                            return [3 /*break*/, 25];
                        _o.label = 24;
                    case 24:
                        i++;
                        return [3 /*break*/, 22];
                    case 25: return [3 /*break*/, 27];
                    case 26:
                        e_6 = _o.sent();
                        console.log('error', e_6.message);
                        return [3 /*break*/, 27];
                    case 27:
                        users_2_1 = users_2.next();
                        return [3 /*break*/, 20];
                    case 28: return [3 /*break*/, 31];
                    case 29:
                        e_7_1 = _o.sent();
                        e_7 = { error: e_7_1 };
                        return [3 /*break*/, 31];
                    case 30:
                        try {
                            if (users_2_1 && !users_2_1.done && (_m = users_2["return"])) _m.call(users_2);
                        }
                        finally { if (e_7) throw e_7.error; }
                        return [7 /*endfinally*/];
                    case 31: return [2 /*return*/];
                }
            });
        });
    };
    return Jd_cash_help;
}(TS_JDHelloWorld_1.JDHelloWorld));
new Jd_cash_help().init().then();
