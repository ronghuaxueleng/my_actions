"use strict";
/**
 * 小程序-赚京豆
 * cron: 15,30,45 0 * * *
 * export ZJD_OPEN=5  // 前n个账号开团, 默认全开
 * CK1 优先助力HW.ts
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
var h5st_pro_1 = require("./utils/h5st_pro");
var shareCodeSelf = [], shareCode = [], shareCodeHW = [];
var Zjd = /** @class */ (function (_super) {
    __extends(Zjd, _super);
    function Zjd() {
        var _this = _super.call(this) || this;
        _this.openNum = 0;
        return _this;
    }
    Zjd.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.run(this, this.help, this.tips)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Zjd.prototype.tips = function () {
        this.zjd_open = Number(process.env.ZJD_OPEN) || 10;
        process.env.ZJD_OPEN ? console.log('自定义', this.zjd_open, '个账号开团') : '';
    };
    Zjd.prototype.api = function (fn, body) {
        return __awaiter(this, void 0, void 0, function () {
            var h5st;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.wait(3000)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.h5stTool.__genH5st({
                                appid: 'swat_miniprogram',
                                body: JSON.stringify(body),
                                functionId: fn
                            })];
                    case 2:
                        h5st = _a.sent();
                        return [2 /*return*/, this.post("https://api.m.jd.com/api", "functionId=".concat(fn, "&h5st=").concat(h5st, "&body=").concat(encodeURIComponent(JSON.stringify(body)), "&appid=swat_miniprogram"), {
                                'user-agent': this.user.UserAgent,
                                'referer': 'https://servicewechat.com/wxa5bf5ee667d91626/173/page-frame.html',
                                'Cookie': this.user.cookie
                            })];
                }
            });
        });
    };
    Zjd.prototype.main = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            var fp, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.user = user;
                        this.user.UserAgent = "Mozilla/5.0 (iPhone; CPU iPhone OS ".concat(this.getIosVer(), " like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E217 MicroMessenger/6.8.0(0x16080000) NetType/WIFI Language/en Branch/Br_trunk MiniProgramEnv/Mac");
                        return [4 /*yield*/, this.getFp()];
                    case 1:
                        fp = _a.sent();
                        this.h5stTool = new h5st_pro_1.H5ST('d8ac0', this.user.UserAgent, fp, 'https://servicewechat.com/wxa5bf5ee667d91626/173/page-frame.html', 'https://servicewechat.com', this.user.UserName);
                        return [4 /*yield*/, this.h5stTool.__genAlgo()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.api('distributeBeanActivityInfo', { "paramData": { "channel": "FISSION_BEAN" } })];
                    case 3:
                        res = _a.sent();
                        if (!(res.data.assistStatus === 1)) return [3 /*break*/, 4];
                        // 已开，没满
                        console.log('已开团，', res.data.assistedRecords.length, '/', res.data.assistNum, '，剩余', Math.round(res.data.assistValidMilliseconds / 1000 / 60), '分钟');
                        shareCodeSelf.push({
                            assistStartRecordId: res.data.assistStartRecordId,
                            encPin: res.data.encPin,
                            id: res.data.id
                        });
                        return [3 /*break*/, 17];
                    case 4:
                        if (!(res.data.assistStatus === 2 && res.data.canStartNewAssist && this.openNum < this.zjd_open)) return [3 /*break*/, 10];
                        // 没开团
                        this.openNum++;
                        this.h5stTool = new h5st_pro_1.H5ST('dde2b', this.user.UserAgent, fp, 'https://servicewechat.com/wxa5bf5ee667d91626/173/page-frame.html', 'https://servicewechat.com', this.user.UserName);
                        return [4 /*yield*/, this.h5stTool.__genAlgo()];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, this.api('vvipclub_distributeBean_startAssist', { "activityIdEncrypted": res.data.id, "channel": "FISSION_BEAN" })];
                    case 6:
                        res = _a.sent();
                        if (!res.success) return [3 /*break*/, 8];
                        console.log("\u5F00\u56E2\u6210\u529F\uFF0C\u7ED3\u675F\u65F6\u95F4\uFF1A".concat(res.data.endTime));
                        return [4 /*yield*/, this.api('distributeBeanActivityInfo', { "paramData": { "channel": "FISSION_BEAN" } })];
                    case 7:
                        res = _a.sent();
                        shareCodeSelf.push({
                            assistStartRecordId: res.data.assistStartRecordId,
                            encPin: res.data.encPin,
                            id: res.data.id
                        });
                        return [3 /*break*/, 9];
                    case 8:
                        this.o2s(res, '开团失败');
                        _a.label = 9;
                    case 9: return [3 /*break*/, 17];
                    case 10:
                        if (!(res.data.assistedRecords.length === res.data.assistNum)) return [3 /*break*/, 16];
                        console.log('已成团');
                        if (!res.data.canStartNewAssist) return [3 /*break*/, 15];
                        this.h5stTool = new h5st_pro_1.H5ST('dde2b', this.user.UserAgent, fp, 'https://servicewechat.com/wxa5bf5ee667d91626/173/page-frame.html', 'https://servicewechat.com', this.user.UserName);
                        return [4 /*yield*/, this.h5stTool.__genAlgo()];
                    case 11:
                        _a.sent();
                        return [4 /*yield*/, this.api('vvipclub_distributeBean_startAssist', { "activityIdEncrypted": res.data.id, "channel": "FISSION_BEAN" })];
                    case 12:
                        res = _a.sent();
                        if (!res.success) return [3 /*break*/, 14];
                        console.log("\u5F00\u56E2\u6210\u529F\uFF0C\u7ED3\u675F\u65F6\u95F4\uFF1A".concat(res.data.endTime));
                        return [4 /*yield*/, this.api('distributeBeanActivityInfo', { "paramData": { "channel": "FISSION_BEAN" } })];
                    case 13:
                        res = _a.sent();
                        shareCodeSelf.push({
                            assistStartRecordId: res.data.assistStartRecordId,
                            encPin: res.data.encPin,
                            id: res.data.id
                        });
                        return [3 /*break*/, 15];
                    case 14:
                        this.o2s(res, '开团失败');
                        _a.label = 15;
                    case 15: return [3 /*break*/, 17];
                    case 16:
                        if (!res.data.canStartNewAssist) {
                            console.log('不可开团');
                        }
                        _a.label = 17;
                    case 17: return [2 /*return*/];
                }
            });
        });
    };
    Zjd.prototype.help = function (users) {
        return __awaiter(this, void 0, void 0, function () {
            var users_1, users_1_1, user, fp, shareCode_1, shareCode_1_1, code, res, e_1, e_2_1, e_3_1;
            var e_3, _a, e_2, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        this.o2s(shareCodeSelf, '内部助力');
                        _c.label = 1;
                    case 1:
                        _c.trys.push([1, 18, 19, 20]);
                        users_1 = __values(users), users_1_1 = users_1.next();
                        _c.label = 2;
                    case 2:
                        if (!!users_1_1.done) return [3 /*break*/, 17];
                        user = users_1_1.value;
                        this.user = user;
                        this.user.UserAgent = "Mozilla/5.0 (iPhone; CPU iPhone OS ".concat(this.getIosVer(), " like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E217 MicroMessenger/6.8.0(0x16080000) NetType/WIFI Language/en Branch/Br_trunk MiniProgramEnv/Mac");
                        if (!(shareCodeHW.length === 0)) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.getshareCodeHW('zjd')];
                    case 3:
                        shareCodeHW = _c.sent();
                        _c.label = 4;
                    case 4:
                        shareCode = user.index === 0
                            ? Array.from(new Set(__spreadArray(__spreadArray([], __read(shareCodeHW), false), __read(shareCodeSelf), false)))
                            : Array.from(new Set(__spreadArray(__spreadArray([], __read(shareCodeSelf), false), __read(shareCodeHW), false)));
                        return [4 /*yield*/, this.getFp()];
                    case 5:
                        fp = _c.sent();
                        this.h5stTool = new h5st_pro_1.H5ST('b9790', this.user.UserAgent, fp, 'https://servicewechat.com/wxa5bf5ee667d91626/173/page-frame.html', 'https://servicewechat.com', this.user.UserName);
                        return [4 /*yield*/, this.h5stTool.__genAlgo()];
                    case 6:
                        _c.sent();
                        _c.label = 7;
                    case 7:
                        _c.trys.push([7, 14, 15, 16]);
                        shareCode_1 = (e_2 = void 0, __values(shareCode)), shareCode_1_1 = shareCode_1.next();
                        _c.label = 8;
                    case 8:
                        if (!!shareCode_1_1.done) return [3 /*break*/, 13];
                        code = shareCode_1_1.value;
                        _c.label = 9;
                    case 9:
                        _c.trys.push([9, 11, , 12]);
                        console.log("\u8D26\u53F7".concat(user.index + 1, " ").concat(user.UserName, " \u53BB\u52A9\u529B ").concat(code.encPin.replace("\n", "")));
                        return [4 /*yield*/, this.api('vvipclub_distributeBean_assist', { "assistStartRecordId": code.assistStartRecordId, "assistedPinEncrypted": code.encPin, "activityIdEncrypted": code.id, "channel": "FISSION_BEAN" })];
                    case 10:
                        res = _c.sent();
                        if (res.success) {
                            console.log('助力成功');
                        }
                        else if (res.resultCode === '9200008') {
                            console.log('不能助力自己');
                        }
                        else if (res.resultCode === '90000014') {
                            console.log('上限');
                            return [3 /*break*/, 13];
                        }
                        else if (res.resultCode === '2400205') {
                            console.log('对方已成团');
                        }
                        else if (res.resultCode === '9200011') {
                            console.log('已助力过');
                        }
                        else {
                            this.o2s(res, 'vvipclub_distributeBean_assist');
                        }
                        return [3 /*break*/, 12];
                    case 11:
                        e_1 = _c.sent();
                        console.log(e_1);
                        return [3 /*break*/, 13];
                    case 12:
                        shareCode_1_1 = shareCode_1.next();
                        return [3 /*break*/, 8];
                    case 13: return [3 /*break*/, 16];
                    case 14:
                        e_2_1 = _c.sent();
                        e_2 = { error: e_2_1 };
                        return [3 /*break*/, 16];
                    case 15:
                        try {
                            if (shareCode_1_1 && !shareCode_1_1.done && (_b = shareCode_1["return"])) _b.call(shareCode_1);
                        }
                        finally { if (e_2) throw e_2.error; }
                        return [7 /*endfinally*/];
                    case 16:
                        users_1_1 = users_1.next();
                        return [3 /*break*/, 2];
                    case 17: return [3 /*break*/, 20];
                    case 18:
                        e_3_1 = _c.sent();
                        e_3 = { error: e_3_1 };
                        return [3 /*break*/, 20];
                    case 19:
                        try {
                            if (users_1_1 && !users_1_1.done && (_a = users_1["return"])) _a.call(users_1);
                        }
                        finally { if (e_3) throw e_3.error; }
                        return [7 /*endfinally*/];
                    case 20: return [2 /*return*/];
                }
            });
        });
    };
    return Zjd;
}(TS_JDHelloWorld_1.JDHelloWorld));
new Zjd().init().then();
