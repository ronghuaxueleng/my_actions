"use strict";
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
var Health = /** @class */ (function (_super) {
    __extends(Health, _super);
    function Health() {
        var _this = _super.call(this) || this;
        _this.shareCodeSelf = [];
        _this.shareCodePool = [];
        return _this;
    }
    Health.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.run(new Health, this.help)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Health.prototype.api = function (fn, body) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.post('https://api.m.jd.com/', "functionId=".concat(fn, "&body=").concat(encodeURIComponent(JSON.stringify(body)), "&client=wh5&clientVersion=1.0.0&uuid="), {
                            'Host': 'api.m.jd.com',
                            'Origin': 'https://h5.m.jd.com',
                            'User-Agent': this.user.UserAgent,
                            'Referer': 'https://h5.m.jd.com/',
                            'Content-Type': 'application/x-www-form-urlencoded',
                            'Cookie': this.user.cookie
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Health.prototype.runTimes = function (code) {
        return __awaiter(this, void 0, void 0, function () {
            var data, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 4]);
                        return [4 /*yield*/, this.get("https://sharecodepool.cnmb.win/api/runTimes0701?activityId=health&sharecode=".concat(code))];
                    case 1:
                        data = _a.sent();
                        console.log(data);
                        return [3 /*break*/, 4];
                    case 2:
                        e_1 = _a.sent();
                        return [4 /*yield*/, this.wait(5000)];
                    case 3:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    Health.prototype.main = function (user) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var res, i, _b, _c, t, data, _d, _e, tp, e_2_1, e_3_1, e_4;
            var e_3, _f, e_2, _g;
            return __generator(this, function (_h) {
                switch (_h.label) {
                    case 0:
                        this.user = user;
                        return [4 /*yield*/, this.api('jdhealth_getHomeData', {})];
                    case 1:
                        res = _h.sent();
                        if (!((_a = res.data) === null || _a === void 0 ? void 0 : _a.result)) {
                            return [2 /*return*/];
                        }
                        if (!res.data.result.popupInfo.continuousSignInfo) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.api('jdhealth_collectScore', { "taskToken": res.data.result.popupInfo.continuousSignInfo.signInTaskToken, "taskId": res.data.result.continuousSignTaskId, "actionType": "0" })];
                    case 2:
                        res = _h.sent();
                        if (res.data.bizCode === 0) {
                            console.log('签到成功', res.data.result.acquiredScore);
                        }
                        _h.label = 3;
                    case 3:
                        i = 0;
                        _h.label = 4;
                    case 4:
                        if (!(i < 1)) return [3 /*break*/, 32];
                        return [4 /*yield*/, this.api('jdhealth_getTaskDetail', { "buildingId": "", "taskId": "", "channelId": 1 })];
                    case 5:
                        res = _h.sent();
                        _h.label = 6;
                    case 6:
                        _h.trys.push([6, 28, , 29]);
                        _h.label = 7;
                    case 7:
                        _h.trys.push([7, 25, 26, 27]);
                        _b = (e_3 = void 0, __values(res.data.result.taskVos)), _c = _b.next();
                        _h.label = 8;
                    case 8:
                        if (!!_c.done) return [3 /*break*/, 24];
                        t = _c.value;
                        if (!(t.status === 1 || t.status === 3)) return [3 /*break*/, 23];
                        console.log(t.taskName);
                        if (!(t.taskName.includes('打卡') && t.threeMealInfoVos[0].status === 1)) return [3 /*break*/, 11];
                        return [4 /*yield*/, this.api('jdhealth_collectScore', { "taskToken": t.threeMealInfoVos[0].taskToken, "taskId": t.taskId, "actionType": 0 })];
                    case 9:
                        data = _h.sent();
                        if (res.data.bizCode === 0)
                            console.log('打卡成功', parseInt(data.data.result.score));
                        else
                            console.log('打卡失败', data.data.bizMsg);
                        return [4 /*yield*/, this.wait(1000)];
                    case 10:
                        _h.sent();
                        _h.label = 11;
                    case 11:
                        _h.trys.push([11, 21, 22, 23]);
                        _d = (e_2 = void 0, __values(t.productInfoVos || t.followShopVo || t.shoppingActivityVos || [])), _e = _d.next();
                        _h.label = 12;
                    case 12:
                        if (!!_e.done) return [3 /*break*/, 20];
                        tp = _e.value;
                        if (!(tp.status === 1)) return [3 /*break*/, 19];
                        console.log('\t', tp.skuName || tp.shopName || tp.title);
                        if (!t.waitDuration) return [3 /*break*/, 15];
                        return [4 /*yield*/, this.api('jdhealth_collectScore', { "taskToken": tp.taskToken, "taskId": t.taskId, "actionType": 1 })];
                    case 13:
                        res = _h.sent();
                        console.log('\t', res.data.bizMsg);
                        return [4 /*yield*/, this.wait(t.waitDuration * 1000)];
                    case 14:
                        _h.sent();
                        _h.label = 15;
                    case 15: return [4 /*yield*/, this.api('jdhealth_collectScore', { "taskToken": tp.taskToken, "taskId": t.taskId, "actionType": 0 })];
                    case 16:
                        res = _h.sent();
                        if (!res.data.bizMsg.includes('做完')) return [3 /*break*/, 17];
                        console.log(res.data.bizMsg);
                        return [3 /*break*/, 20];
                    case 17:
                        console.log(res.data.bizMsg, parseInt(res.data.result.score));
                        return [4 /*yield*/, this.wait(1500)];
                    case 18:
                        _h.sent();
                        _h.label = 19;
                    case 19:
                        _e = _d.next();
                        return [3 /*break*/, 12];
                    case 20: return [3 /*break*/, 23];
                    case 21:
                        e_2_1 = _h.sent();
                        e_2 = { error: e_2_1 };
                        return [3 /*break*/, 23];
                    case 22:
                        try {
                            if (_e && !_e.done && (_g = _d["return"])) _g.call(_d);
                        }
                        finally { if (e_2) throw e_2.error; }
                        return [7 /*endfinally*/];
                    case 23:
                        _c = _b.next();
                        return [3 /*break*/, 8];
                    case 24: return [3 /*break*/, 27];
                    case 25:
                        e_3_1 = _h.sent();
                        e_3 = { error: e_3_1 };
                        return [3 /*break*/, 27];
                    case 26:
                        try {
                            if (_c && !_c.done && (_f = _b["return"])) _f.call(_b);
                        }
                        finally { if (e_3) throw e_3.error; }
                        return [7 /*endfinally*/];
                    case 27: return [3 /*break*/, 29];
                    case 28:
                        e_4 = _h.sent();
                        console.log('Error', e_4);
                        return [3 /*break*/, 29];
                    case 29: return [4 /*yield*/, this.wait(3000)];
                    case 30:
                        _h.sent();
                        _h.label = 31;
                    case 31:
                        i++;
                        return [3 /*break*/, 4];
                    case 32: return [2 /*return*/];
                }
            });
        });
    };
    Health.prototype.help = function (users) {
        return __awaiter(this, void 0, void 0, function () {
            var res, users_1, users_1_1, user, code, e_5, e_6_1, users_2, users_2_1, user, _a, shareCode, full, shareCode_1, shareCode_1_1, code, e_7, e_8_1, e_9_1;
            var e_6, _b, e_9, _c, e_8, _d;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        _e.trys.push([0, 9, 10, 11]);
                        users_1 = __values(users), users_1_1 = users_1.next();
                        _e.label = 1;
                    case 1:
                        if (!!users_1_1.done) return [3 /*break*/, 8];
                        user = users_1_1.value;
                        this.user = user;
                        console.log("\n\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7".concat(user.index + 1, "\u3011").concat(user.UserName, "\n"));
                        return [4 /*yield*/, this.api('jdhealth_getTaskDetail', { "buildingId": "", "taskId": 6, "channelId": 1 })];
                    case 2:
                        res = _e.sent();
                        _e.label = 3;
                    case 3:
                        _e.trys.push([3, 6, , 7]);
                        code = res.data.result.taskVos[0].assistTaskDetailVo.taskToken;
                        console.log('助力码', code);
                        this.shareCodeSelf.push(code);
                        return [4 /*yield*/, this.runTimes(code)];
                    case 4:
                        _e.sent();
                        return [4 /*yield*/, this.wait(1000)];
                    case 5:
                        _e.sent();
                        return [3 /*break*/, 7];
                    case 6:
                        e_5 = _e.sent();
                        return [3 /*break*/, 7];
                    case 7:
                        users_1_1 = users_1.next();
                        return [3 /*break*/, 1];
                    case 8: return [3 /*break*/, 11];
                    case 9:
                        e_6_1 = _e.sent();
                        e_6 = { error: e_6_1 };
                        return [3 /*break*/, 11];
                    case 10:
                        try {
                            if (users_1_1 && !users_1_1.done && (_b = users_1["return"])) _b.call(users_1);
                        }
                        finally { if (e_6) throw e_6.error; }
                        return [7 /*endfinally*/];
                    case 11:
                        this.o2s(this.shareCodeSelf, '内部助力码');
                        _e.label = 12;
                    case 12:
                        _e.trys.push([12, 28, 29, 30]);
                        users_2 = __values(users), users_2_1 = users_2.next();
                        _e.label = 13;
                    case 13:
                        if (!!users_2_1.done) return [3 /*break*/, 27];
                        user = users_2_1.value;
                        this.user = user;
                        _a = this;
                        return [4 /*yield*/, this.getShareCodePool('health', 1)];
                    case 14:
                        _a.shareCodePool = _e.sent();
                        shareCode = Array.from(new Set(__spreadArray(__spreadArray([], __read(this.shareCodeSelf), false), __read(this.shareCodePool), false))), full = [];
                        _e.label = 15;
                    case 15:
                        _e.trys.push([15, 24, 25, 26]);
                        shareCode_1 = (e_8 = void 0, __values(shareCode)), shareCode_1_1 = shareCode_1.next();
                        _e.label = 16;
                    case 16:
                        if (!!shareCode_1_1.done) return [3 /*break*/, 23];
                        code = shareCode_1_1.value;
                        if (full.includes(code))
                            return [3 /*break*/, 22];
                        console.log("\u8D26\u53F7".concat(user.index + 1, " ").concat(user.UserName, " \u53BB\u52A9\u529B ").concat(code));
                        return [4 /*yield*/, this.api('jdhealth_collectScore', { "taskToken": code, "taskId": "6", "actionType": 0 })];
                    case 17:
                        res = _e.sent();
                        _e.label = 18;
                    case 18:
                        _e.trys.push([18, 19, 20, 22]);
                        if (res.data.bizMsg === '助力失败丨啊哦您今日的爱心值已爆棚，明天继续吧') {
                            return [3 /*break*/, 23];
                        }
                        else if (res.data.bizMsg === '助力失败丨助力已满员！谢谢你哦~') {
                            full.push(code);
                        }
                        else {
                            console.log(res.data.bizMsg);
                        }
                        return [3 /*break*/, 22];
                    case 19:
                        e_7 = _e.sent();
                        this.o2s(res, 'jdhealth_collectScore catch');
                        return [3 /*break*/, 22];
                    case 20: return [4 /*yield*/, this.wait(3000)];
                    case 21:
                        _e.sent();
                        return [7 /*endfinally*/];
                    case 22:
                        shareCode_1_1 = shareCode_1.next();
                        return [3 /*break*/, 16];
                    case 23: return [3 /*break*/, 26];
                    case 24:
                        e_8_1 = _e.sent();
                        e_8 = { error: e_8_1 };
                        return [3 /*break*/, 26];
                    case 25:
                        try {
                            if (shareCode_1_1 && !shareCode_1_1.done && (_d = shareCode_1["return"])) _d.call(shareCode_1);
                        }
                        finally { if (e_8) throw e_8.error; }
                        return [7 /*endfinally*/];
                    case 26:
                        users_2_1 = users_2.next();
                        return [3 /*break*/, 13];
                    case 27: return [3 /*break*/, 30];
                    case 28:
                        e_9_1 = _e.sent();
                        e_9 = { error: e_9_1 };
                        return [3 /*break*/, 30];
                    case 29:
                        try {
                            if (users_2_1 && !users_2_1.done && (_c = users_2["return"])) _c.call(users_2);
                        }
                        finally { if (e_9) throw e_9.error; }
                        return [7 /*endfinally*/];
                    case 30: return [2 /*return*/];
                }
            });
        });
    };
    return Health;
}(TS_JDHelloWorld_1.JDHelloWorld));
new Health().init().then();
