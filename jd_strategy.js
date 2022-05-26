"use strict";
/**
 * https://appliances-activity.jd.com/
 * export FP_F093B=""
 * cron: 0 20 * * *
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
var h5st_1 = require("./utils/h5st");
var TS_JDHelloWorld_1 = require("./TS_JDHelloWorld");
var Jd_strategy = /** @class */ (function (_super) {
    __extends(Jd_strategy, _super);
    function Jd_strategy() {
        var _this = _super.call(this) || this;
        _this.shareCodeSelf = [];
        return _this;
    }
    Jd_strategy.prototype.init = function () {
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
    Jd_strategy.prototype.api = function (body) {
        return __awaiter(this, void 0, void 0, function () {
            var timestamp, h5st;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        timestamp = Date.now();
                        h5st = this.h5stTool.__genH5st({
                            appid: 'reinforceints',
                            body: JSON.stringify(body),
                            functionId: 'strategy_vote_prod',
                            t: timestamp.toString()
                        });
                        return [4 /*yield*/, this.post('https://api.m.jd.com/api', "appid=reinforceints&functionId=strategy_vote_prod&body=".concat(JSON.stringify(body), "&t=").concat(timestamp, "&h5st=").concat(h5st, "&loginType=2"), {
                                'Host': 'api.m.jd.com',
                                'Origin': 'https://appliances-activity.jd.com',
                                'User-Agent': 'jdapp;',
                                'Referer': 'https://appliances-activity.jd.com/',
                                'Content-Type': 'application/x-www-form-urlencoded',
                                'Cookie': this.cookie
                            })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Jd_strategy.prototype.main = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            var res, data, gg, _a, _b, t, i, _c, _d, tp, e_1_1, e_2, e_3_1;
            var e_3, _e, e_1, _f;
            return __generator(this, function (_g) {
                switch (_g.label) {
                    case 0:
                        this.cookie = user.cookie;
                        this.h5stTool = new h5st_1.H5ST("f093b", user.UserAgent, process.env.FP_F093B || "7063407705917609");
                        return [4 /*yield*/, this.h5stTool.__genAlgo()];
                    case 1:
                        _g.sent();
                        gg = false;
                        return [4 /*yield*/, this.api({ "apiMapping": "/api/index/indexInfo" })];
                    case 2:
                        res = _g.sent();
                        _g.label = 3;
                    case 3:
                        _g.trys.push([3, 22, 23, 24]);
                        _a = __values(res.data.track), _b = _a.next();
                        _g.label = 4;
                    case 4:
                        if (!!_b.done) return [3 /*break*/, 21];
                        t = _b.value;
                        _g.label = 5;
                    case 5:
                        _g.trys.push([5, 19, , 20]);
                        if (!(!t.jbeanSuccess && new Date().getHours() > 19)) return [3 /*break*/, 16];
                        console.log('type', t.type);
                        i = 1;
                        _g.label = 6;
                    case 6:
                        _g.trys.push([6, 11, 12, 13]);
                        _c = (e_1 = void 0, __values(t.skuList)), _d = _c.next();
                        _g.label = 7;
                    case 7:
                        if (!!_d.done) return [3 /*break*/, 10];
                        tp = _d.value;
                        return [4 /*yield*/, this.api({ "type": t.type, "like": 1, "skuId": tp.skuId, "index": i, "apiMapping": "/api/index/vote" })];
                    case 8:
                        data = _g.sent();
                        console.log('投票', data.msg, data.data);
                        if (data.msg.includes('火爆')) {
                            gg = true;
                            return [3 /*break*/, 10];
                        }
                        i++;
                        _g.label = 9;
                    case 9:
                        _d = _c.next();
                        return [3 /*break*/, 7];
                    case 10: return [3 /*break*/, 13];
                    case 11:
                        e_1_1 = _g.sent();
                        e_1 = { error: e_1_1 };
                        return [3 /*break*/, 13];
                    case 12:
                        try {
                            if (_d && !_d.done && (_f = _c["return"])) _f.call(_c);
                        }
                        finally { if (e_1) throw e_1.error; }
                        return [7 /*endfinally*/];
                    case 13:
                        if (!!gg) return [3 /*break*/, 15];
                        return [4 /*yield*/, this.api({ "type": t.type, "apiMapping": "/api/lottery/lottery" })];
                    case 14:
                        data = _g.sent();
                        console.log('抽奖', data.msg, data.data);
                        _g.label = 15;
                    case 15: return [3 /*break*/, 17];
                    case 16:
                        console.log("type ".concat(t.type, " \u5DF2\u5B8C\u6210"));
                        _g.label = 17;
                    case 17: return [4 /*yield*/, this.api({ "type": t.type, "apiMapping": "/api/supportTask/getShareId" })];
                    case 18:
                        data = _g.sent();
                        console.log("type ".concat(t.type, " \u52A9\u529B\u7801"), data.data);
                        this.shareCodeSelf.push({ type: t.type, code: data.data });
                        return [3 /*break*/, 20];
                    case 19:
                        e_2 = _g.sent();
                        console.log('error', e_2);
                        return [3 /*break*/, 20];
                    case 20:
                        _b = _a.next();
                        return [3 /*break*/, 4];
                    case 21: return [3 /*break*/, 24];
                    case 22:
                        e_3_1 = _g.sent();
                        e_3 = { error: e_3_1 };
                        return [3 /*break*/, 24];
                    case 23:
                        try {
                            if (_b && !_b.done && (_e = _a["return"])) _e.call(_a);
                        }
                        finally { if (e_3) throw e_3.error; }
                        return [7 /*endfinally*/];
                    case 24: return [2 /*return*/];
                }
            });
        });
    };
    Jd_strategy.prototype.help = function (users) {
        return __awaiter(this, void 0, void 0, function () {
            var res, data, shareCode, shareCodeHW, users_1, users_1_1, user, shareCode_1, shareCode_1_1, code, e_4_1, e_5, e_6_1, users_2, users_2_1, user, _a, _b, t, e_7_1, e_8, e_9_1;
            var e_6, _c, e_4, _d, e_9, _e, e_7, _f;
            return __generator(this, function (_g) {
                switch (_g.label) {
                    case 0:
                        this.o2s(this.shareCodeSelf, '内部助力');
                        shareCode = [], shareCodeHW = [];
                        _g.label = 1;
                    case 1:
                        _g.trys.push([1, 17, 18, 19]);
                        users_1 = __values(users), users_1_1 = users_1.next();
                        _g.label = 2;
                    case 2:
                        if (!!users_1_1.done) return [3 /*break*/, 16];
                        user = users_1_1.value;
                        _g.label = 3;
                    case 3:
                        _g.trys.push([3, 14, , 15]);
                        this.cookie = user.cookie;
                        if (!(shareCodeHW.length === 0)) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.getshareCodeHW('strategy')];
                    case 4:
                        shareCodeHW = _g.sent();
                        _g.label = 5;
                    case 5:
                        shareCode = __spreadArray(__spreadArray([], __read(this.shareCodeSelf), false), __read(shareCodeHW), false);
                        _g.label = 6;
                    case 6:
                        _g.trys.push([6, 11, 12, 13]);
                        shareCode_1 = (e_4 = void 0, __values(shareCode)), shareCode_1_1 = shareCode_1.next();
                        _g.label = 7;
                    case 7:
                        if (!!shareCode_1_1.done) return [3 /*break*/, 10];
                        code = shareCode_1_1.value;
                        console.log("\u8D26\u53F7".concat(user.index + 1, " ").concat(user.UserName, " \u53BB\u52A9\u529B ").concat(code.code));
                        return [4 /*yield*/, this.api({ "shareId": code.code, "type": code.type, "apiMapping": "/api/supportTask/doSupport" })];
                    case 8:
                        data = _g.sent();
                        console.log(data.msg, data.data.status);
                        _g.label = 9;
                    case 9:
                        shareCode_1_1 = shareCode_1.next();
                        return [3 /*break*/, 7];
                    case 10: return [3 /*break*/, 13];
                    case 11:
                        e_4_1 = _g.sent();
                        e_4 = { error: e_4_1 };
                        return [3 /*break*/, 13];
                    case 12:
                        try {
                            if (shareCode_1_1 && !shareCode_1_1.done && (_d = shareCode_1["return"])) _d.call(shareCode_1);
                        }
                        finally { if (e_4) throw e_4.error; }
                        return [7 /*endfinally*/];
                    case 13: return [3 /*break*/, 15];
                    case 14:
                        e_5 = _g.sent();
                        console.log('error', e_5);
                        return [3 /*break*/, 15];
                    case 15:
                        users_1_1 = users_1.next();
                        return [3 /*break*/, 2];
                    case 16: return [3 /*break*/, 19];
                    case 17:
                        e_6_1 = _g.sent();
                        e_6 = { error: e_6_1 };
                        return [3 /*break*/, 19];
                    case 18:
                        try {
                            if (users_1_1 && !users_1_1.done && (_c = users_1["return"])) _c.call(users_1);
                        }
                        finally { if (e_6) throw e_6.error; }
                        return [7 /*endfinally*/];
                    case 19:
                        _g.trys.push([19, 34, 35, 36]);
                        users_2 = __values(users), users_2_1 = users_2.next();
                        _g.label = 20;
                    case 20:
                        if (!!users_2_1.done) return [3 /*break*/, 33];
                        user = users_2_1.value;
                        _g.label = 21;
                    case 21:
                        _g.trys.push([21, 31, , 32]);
                        this.cookie = user.cookie;
                        console.log("\u8D26\u53F7".concat(user.index + 1, " ").concat(user.UserName));
                        return [4 /*yield*/, this.api({ "apiMapping": "/api/index/indexInfo" })];
                    case 22:
                        res = _g.sent();
                        _g.label = 23;
                    case 23:
                        _g.trys.push([23, 28, 29, 30]);
                        _a = (e_7 = void 0, __values(res.data.track)), _b = _a.next();
                        _g.label = 24;
                    case 24:
                        if (!!_b.done) return [3 /*break*/, 27];
                        t = _b.value;
                        return [4 /*yield*/, this.api({ "type": t.type, "apiMapping": "/api/lottery/lottery" })];
                    case 25:
                        data = _g.sent();
                        console.log('抽奖', data.msg, data.data);
                        _g.label = 26;
                    case 26:
                        _b = _a.next();
                        return [3 /*break*/, 24];
                    case 27: return [3 /*break*/, 30];
                    case 28:
                        e_7_1 = _g.sent();
                        e_7 = { error: e_7_1 };
                        return [3 /*break*/, 30];
                    case 29:
                        try {
                            if (_b && !_b.done && (_f = _a["return"])) _f.call(_a);
                        }
                        finally { if (e_7) throw e_7.error; }
                        return [7 /*endfinally*/];
                    case 30: return [3 /*break*/, 32];
                    case 31:
                        e_8 = _g.sent();
                        console.log('error', e_8);
                        return [3 /*break*/, 32];
                    case 32:
                        users_2_1 = users_2.next();
                        return [3 /*break*/, 20];
                    case 33: return [3 /*break*/, 36];
                    case 34:
                        e_9_1 = _g.sent();
                        e_9 = { error: e_9_1 };
                        return [3 /*break*/, 36];
                    case 35:
                        try {
                            if (users_2_1 && !users_2_1.done && (_e = users_2["return"])) _e.call(users_2);
                        }
                        finally { if (e_9) throw e_9.error; }
                        return [7 /*endfinally*/];
                    case 36: return [2 /*return*/];
                }
            });
        });
    };
    return Jd_strategy;
}(TS_JDHelloWorld_1.JDHelloWorld));
new Jd_strategy().init().then();
