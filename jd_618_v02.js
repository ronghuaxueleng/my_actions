"use strict";
/**
 * CK1   优先助力HW.ts
 * CK倒1 优先组队HW.ts
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
var log_618_1 = require("./utils/log_618");
var Jd_618 = /** @class */ (function (_super) {
    __extends(Jd_618, _super);
    function Jd_618() {
        var _this = _super.call(this) || this;
        _this.logTool = new log_618_1.Log_618();
        _this.shareCodeSelf = [];
        return _this;
    }
    Jd_618.prototype.init = function () {
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
    Jd_618.prototype.getLog = function () {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.logTool.main()];
                    case 1:
                        data = _a.sent();
                        return [4 /*yield*/, this.wait(4000)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, data];
                }
            });
        });
    };
    Jd_618.prototype.api = function (fn, body) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.post("https://api.m.jd.com/client.action?functionId=".concat(fn), "functionId=".concat(fn, "&client=m&clientVersion=-1&appid=signed_wh5&body=").concat(JSON.stringify(body)), {
                        'Host': 'api.m.jd.com',
                        'Origin': 'https://wbbny.m.jd.com',
                        'Accept': 'application/json, text/plain, */*',
                        'User-Agent': this.user.UserAgent,
                        'Referer': 'https://wbbny.m.jd.com/',
                        'Content-Type': 'application/x-www-form-urlencoded',
                        'Cookie': this.user.cookie
                    })];
            });
        });
    };
    Jd_618.prototype.qryViewkitCallbackResult = function (taskToken) {
        return __awaiter(this, void 0, void 0, function () {
            var body, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        body = { "dataSource": "newshortAward", "method": "getTaskAward", "reqParams": "{\"taskToken\":\"".concat(taskToken, "\"}") };
                        return [4 /*yield*/, this.logTool.qry('qryViewkitCallbackResult', body)];
                    case 1:
                        data = _a.sent();
                        return [4 /*yield*/, this.post('https://api.m.jd.com/client.action?functionId=qryViewkitCallbackResult', data, {
                                'Host': 'api.m.jd.com',
                                'Cookie': this.user.cookie,
                                'content-type': 'application/x-www-form-urlencoded',
                                'User-Agent': this.user.UserAgent
                            })];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Jd_618.prototype.feed = function (taskId, secretp) {
        return __awaiter(this, void 0, void 0, function () {
            var res, times, maxTimes, _a, _b, tp, log, data, e_1_1;
            var e_1, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0: return [4 /*yield*/, this.api('promote_getFeedDetail', { "taskId": taskId })];
                    case 1:
                        res = _d.sent();
                        times = res.data.result.addProductVos[0].times, maxTimes = res.data.result.addProductVos[0].maxTimes;
                        _d.label = 2;
                    case 2:
                        _d.trys.push([2, 9, 10, 11]);
                        _a = __values(res.data.result.addProductVos[0].productInfoVos), _b = _a.next();
                        _d.label = 3;
                    case 3:
                        if (!!_b.done) return [3 /*break*/, 8];
                        tp = _b.value;
                        if (times === maxTimes)
                            return [3 /*break*/, 8];
                        return [4 /*yield*/, this.getLog()];
                    case 4:
                        log = _d.sent();
                        return [4 /*yield*/, this.api('promote_collectScore', {
                                "taskId": taskId,
                                "taskToken": tp.taskToken,
                                "ss": JSON.stringify({ extraData: { log: encodeURIComponent(log.log), sceneid: 'RAhomePageh5' }, secretp: secretp, random: log.random })
                            })];
                    case 5:
                        data = _d.sent();
                        this.o2s(data);
                        times++;
                        return [4 /*yield*/, this.wait(3000)];
                    case 6:
                        _d.sent();
                        _d.label = 7;
                    case 7:
                        _b = _a.next();
                        return [3 /*break*/, 3];
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
                    case 11: return [2 /*return*/];
                }
            });
        });
    };
    Jd_618.prototype.main = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            var res, data, log, secretp, loop, inviteId, _a, _b, t, e_2_1, _c, _d, t, _e, _f, tp, e_3_1, _g, _h, tp, e_4_1, _j, _k, tp, e_5_1, e_6_1, e_7;
            var e_2, _l, e_6, _m, e_3, _o, e_4, _p, e_5, _q;
            return __generator(this, function (_r) {
                switch (_r.label) {
                    case 0:
                        this.user = user;
                        return [4 /*yield*/, this.api('promote_getHomeData', {})];
                    case 1:
                        res = _r.sent();
                        secretp = res.data.result.homeMainInfo.secretp;
                        console.log('当前金币', parseInt(res.data.result.homeMainInfo.raiseInfo.totalScore));
                        return [4 /*yield*/, this.getLog()];
                    case 2:
                        log = _r.sent();
                        return [4 /*yield*/, this.api('promote_collectAutoScore', {
                                ss: JSON.stringify({
                                    extraData: {
                                        log: encodeURIComponent(log.log),
                                        sceneid: 'RAhomePageh5'
                                    },
                                    secretp: secretp,
                                    random: log.random
                                })
                            })];
                    case 3:
                        res = _r.sent();
                        console.log('收金币', parseInt(res.data.result.produceScore));
                        return [4 /*yield*/, this.wait(3000)];
                    case 4:
                        _r.sent();
                        loop = 0;
                        _r.label = 5;
                    case 5:
                        if (!(loop < 3)) return [3 /*break*/, 68];
                        _r.label = 6;
                    case 6:
                        _r.trys.push([6, 64, , 65]);
                        console.log('loop', loop);
                        return [4 /*yield*/, this.api('promote_getTaskDetail', {})];
                    case 7:
                        res = _r.sent();
                        this.o2s(res);
                        inviteId = res.data.result.inviteId;
                        console.log('助力码', inviteId);
                        if (!this.shareCodeSelf.includes(inviteId))
                            this.shareCodeSelf.push(inviteId);
                        _r.label = 8;
                    case 8:
                        _r.trys.push([8, 14, 15, 16]);
                        _a = (e_2 = void 0, __values(res.data.result.lotteryTaskVos[0].badgeAwardVos)), _b = _a.next();
                        _r.label = 9;
                    case 9:
                        if (!!_b.done) return [3 /*break*/, 13];
                        t = _b.value;
                        if (!(t.status === 3)) return [3 /*break*/, 12];
                        return [4 /*yield*/, this.api('promote_getBadgeAward', { "awardToken": t.awardToken })];
                    case 10:
                        data = _r.sent();
                        console.log(t.awardName, parseInt(data.data.result.myAwardVos[0].pointVo.score));
                        return [4 /*yield*/, this.wait(3000)];
                    case 11:
                        _r.sent();
                        _r.label = 12;
                    case 12:
                        _b = _a.next();
                        return [3 /*break*/, 9];
                    case 13: return [3 /*break*/, 16];
                    case 14:
                        e_2_1 = _r.sent();
                        e_2 = { error: e_2_1 };
                        return [3 /*break*/, 16];
                    case 15:
                        try {
                            if (_b && !_b.done && (_l = _a["return"])) _l.call(_a);
                        }
                        finally { if (e_2) throw e_2.error; }
                        return [7 /*endfinally*/];
                    case 16:
                        _r.trys.push([16, 61, 62, 63]);
                        _c = (e_6 = void 0, __values(res.data.result.taskVos)), _d = _c.next();
                        _r.label = 17;
                    case 17:
                        if (!!_d.done) return [3 /*break*/, 60];
                        t = _d.value;
                        if (t.taskName.includes('下单') || t.taskName.includes('小程序')) {
                            console.log('pass', t);
                            return [3 /*break*/, 59];
                        }
                        if (!t.browseShopVo) return [3 /*break*/, 30];
                        _r.label = 18;
                    case 18:
                        _r.trys.push([18, 28, 29, 30]);
                        _e = (e_3 = void 0, __values(t.browseShopVo)), _f = _e.next();
                        _r.label = 19;
                    case 19:
                        if (!!_f.done) return [3 /*break*/, 27];
                        tp = _f.value;
                        if (!(tp.status === 1)) return [3 /*break*/, 26];
                        console.log(tp.shopName);
                        return [4 /*yield*/, this.getLog()];
                    case 20:
                        log = _r.sent();
                        return [4 /*yield*/, this.api('followShop', { "shopId": tp.shopId, "follow": true, "type": "0" })];
                    case 21:
                        data = _r.sent();
                        console.log('followShop', data.msg);
                        return [4 /*yield*/, this.api('promote_collectScore', {
                                "taskId": t.taskId.toString(),
                                "taskToken": tp.taskToken,
                                "actionType": 1,
                                "ss": JSON.stringify({ extraData: { log: encodeURIComponent(log.log), sceneid: 'RAhomePageh5' }, secretp: secretp, random: log.random })
                            })];
                    case 22:
                        data = _r.sent();
                        console.log(data.data.bizMsg);
                        return [4 /*yield*/, this.wait(t.waitDuration * 1000 || 3000)];
                    case 23:
                        _r.sent();
                        return [4 /*yield*/, this.qryViewkitCallbackResult(tp.taskToken)];
                    case 24:
                        data = _r.sent();
                        console.log(data.toast.subTitle);
                        return [4 /*yield*/, this.wait(5000)];
                    case 25:
                        _r.sent();
                        _r.label = 26;
                    case 26:
                        _f = _e.next();
                        return [3 /*break*/, 19];
                    case 27: return [3 /*break*/, 30];
                    case 28:
                        e_3_1 = _r.sent();
                        e_3 = { error: e_3_1 };
                        return [3 /*break*/, 30];
                    case 29:
                        try {
                            if (_f && !_f.done && (_o = _e["return"])) _o.call(_e);
                        }
                        finally { if (e_3) throw e_3.error; }
                        return [7 /*endfinally*/];
                    case 30:
                        if (!t.shoppingActivityVos) return [3 /*break*/, 44];
                        _r.label = 31;
                    case 31:
                        _r.trys.push([31, 42, 43, 44]);
                        _g = (e_4 = void 0, __values(t.shoppingActivityVos)), _h = _g.next();
                        _r.label = 32;
                    case 32:
                        if (!!_h.done) return [3 /*break*/, 41];
                        tp = _h.value;
                        if (!(tp.status === 1)) return [3 /*break*/, 38];
                        return [4 /*yield*/, this.getLog()];
                    case 33:
                        log = _r.sent();
                        console.log(tp.title);
                        return [4 /*yield*/, this.api('promote_collectScore', {
                                "taskId": t.taskId,
                                "taskToken": tp.taskToken,
                                "actionType": 1,
                                "ss": JSON.stringify({ extraData: { log: encodeURIComponent(log.log), sceneid: 'RAhomePageh5' }, secretp: secretp, random: log.random })
                            })];
                    case 34:
                        data = _r.sent();
                        console.log(data.data.bizMsg);
                        return [4 /*yield*/, this.wait(t.waitDuration * 1000 || 3000)];
                    case 35:
                        _r.sent();
                        return [4 /*yield*/, this.qryViewkitCallbackResult(tp.taskToken)];
                    case 36:
                        data = _r.sent();
                        console.log(data.toast.subTitle);
                        return [4 /*yield*/, this.wait(5000)];
                    case 37:
                        _r.sent();
                        _r.label = 38;
                    case 38: return [4 /*yield*/, this.wait(5000)];
                    case 39:
                        _r.sent();
                        _r.label = 40;
                    case 40:
                        _h = _g.next();
                        return [3 /*break*/, 32];
                    case 41: return [3 /*break*/, 44];
                    case 42:
                        e_4_1 = _r.sent();
                        e_4 = { error: e_4_1 };
                        return [3 /*break*/, 44];
                    case 43:
                        try {
                            if (_h && !_h.done && (_p = _g["return"])) _p.call(_g);
                        }
                        finally { if (e_4) throw e_4.error; }
                        return [7 /*endfinally*/];
                    case 44:
                        if (!t.taskName.includes('加购')) return [3 /*break*/, 47];
                        console.log(t.taskName);
                        return [4 /*yield*/, this.api('promote_getTaskDetail', { taskId: t.taskId })];
                    case 45:
                        data = _r.sent();
                        return [4 /*yield*/, this.feed(t.taskId, secretp)];
                    case 46:
                        _r.sent();
                        _r.label = 47;
                    case 47:
                        if (!(t.taskType === 5)) return [3 /*break*/, 59];
                        console.log(t.taskName);
                        return [4 /*yield*/, this.api('promote_getFeedDetail', { taskId: t.taskId })];
                    case 48:
                        res = _r.sent();
                        return [4 /*yield*/, this.wait(1000)];
                    case 49:
                        _r.sent();
                        _r.label = 50;
                    case 50:
                        _r.trys.push([50, 57, 58, 59]);
                        _j = (e_5 = void 0, __values(res.data.result.taskVos[0].browseShopVo.slice(0, 4))), _k = _j.next();
                        _r.label = 51;
                    case 51:
                        if (!!_k.done) return [3 /*break*/, 56];
                        tp = _k.value;
                        if (!(tp.status === 1)) return [3 /*break*/, 55];
                        return [4 /*yield*/, this.getLog()];
                    case 52:
                        log = _r.sent();
                        return [4 /*yield*/, this.api('promote_collectScore', {
                                "taskId": t.taskId,
                                "taskToken": tp.taskToken,
                                "ss": JSON.stringify({ extraData: { log: encodeURIComponent(log.log), sceneid: 'RAhomePageh5' }, secretp: secretp, random: log.random })
                            })];
                    case 53:
                        data = _r.sent();
                        console.log(data.data.result.successToast);
                        return [4 /*yield*/, this.wait(2000)];
                    case 54:
                        _r.sent();
                        _r.label = 55;
                    case 55:
                        _k = _j.next();
                        return [3 /*break*/, 51];
                    case 56: return [3 /*break*/, 59];
                    case 57:
                        e_5_1 = _r.sent();
                        e_5 = { error: e_5_1 };
                        return [3 /*break*/, 59];
                    case 58:
                        try {
                            if (_k && !_k.done && (_q = _j["return"])) _q.call(_j);
                        }
                        finally { if (e_5) throw e_5.error; }
                        return [7 /*endfinally*/];
                    case 59:
                        _d = _c.next();
                        return [3 /*break*/, 17];
                    case 60: return [3 /*break*/, 63];
                    case 61:
                        e_6_1 = _r.sent();
                        e_6 = { error: e_6_1 };
                        return [3 /*break*/, 63];
                    case 62:
                        try {
                            if (_d && !_d.done && (_m = _c["return"])) _m.call(_c);
                        }
                        finally { if (e_6) throw e_6.error; }
                        return [7 /*endfinally*/];
                    case 63: return [3 /*break*/, 65];
                    case 64:
                        e_7 = _r.sent();
                        console.log('Error', e_7);
                        return [3 /*break*/, 68];
                    case 65: return [4 /*yield*/, this.wait(6000)];
                    case 66:
                        _r.sent();
                        _r.label = 67;
                    case 67:
                        loop++;
                        return [3 /*break*/, 5];
                    case 68: return [2 /*return*/];
                }
            });
        });
    };
    Jd_618.prototype.help = function (users) {
        var _a, _b, _c, _d;
        return __awaiter(this, void 0, void 0, function () {
            var shareCodeHW_group, shareCodeHW, shareCode, users_1, users_1_1, user, res, log, secretp, shareCode_1, shareCode_1_1, code, e_8_1, memberCount, groupJoinInviteId, e_9_1;
            var e_9, _e, e_8, _f;
            return __generator(this, function (_g) {
                switch (_g.label) {
                    case 0:
                        shareCodeHW_group = [], shareCodeHW = [], shareCode = [];
                        _g.label = 1;
                    case 1:
                        _g.trys.push([1, 27, 28, 29]);
                        users_1 = __values(users), users_1_1 = users_1.next();
                        _g.label = 2;
                    case 2:
                        if (!!users_1_1.done) return [3 /*break*/, 26];
                        user = users_1_1.value;
                        console.log("\n\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7".concat(user.index + 1, "\u3011").concat(user.UserName, "\n"));
                        this.user = user;
                        res = void 0, log = void 0;
                        return [4 /*yield*/, this.api('promote_getHomeData', {})];
                    case 3:
                        res = _g.sent();
                        secretp = res.data.result.homeMainInfo.secretp;
                        if (!(shareCodeHW.length === 0)) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.getshareCodeHW('lyb')];
                    case 4:
                        shareCodeHW = _g.sent();
                        _g.label = 5;
                    case 5:
                        if (user.index === 0) {
                            shareCode = Array.from(new Set(__spreadArray(__spreadArray([], __read(shareCodeHW), false), __read(this.shareCodeSelf), false)));
                        }
                        else {
                            shareCode = Array.from(new Set(__spreadArray(__spreadArray([], __read(this.shareCodeSelf), false), __read(shareCodeHW), false)));
                        }
                        this.o2s(this.shareCodeSelf, '内部助力');
                        _g.label = 6;
                    case 6:
                        _g.trys.push([6, 13, 14, 15]);
                        shareCode_1 = (e_8 = void 0, __values(shareCode)), shareCode_1_1 = shareCode_1.next();
                        _g.label = 7;
                    case 7:
                        if (!!shareCode_1_1.done) return [3 /*break*/, 12];
                        code = shareCode_1_1.value;
                        console.log("\u8D26\u53F7".concat(user.index + 1, " ").concat(user.UserName, " \u53BB\u52A9\u529B ").concat(code));
                        return [4 /*yield*/, this.getLog()];
                    case 8:
                        log = _g.sent();
                        return [4 /*yield*/, this.api('promote_collectScore', {
                                "ss": JSON.stringify({ extraData: { log: encodeURIComponent(log.log), sceneid: 'RAhomePageh5' }, secretp: secretp, random: log.random }),
                                "actionType": "0",
                                "inviteId": code
                            })];
                    case 9:
                        res = _g.sent();
                        if (res.data.bizCode === 0) {
                            console.log('助力成功', parseFloat(res.data.result.acquiredScore));
                            if ((_b = (_a = res.data.result) === null || _a === void 0 ? void 0 : _a.redpacket) === null || _b === void 0 ? void 0 : _b.value)
                                console.log('🧧', parseFloat((_d = (_c = res.data.result) === null || _c === void 0 ? void 0 : _c.redpacket) === null || _d === void 0 ? void 0 : _d.value));
                        }
                        else {
                            console.log(res.data.bizMsg);
                        }
                        return [4 /*yield*/, this.wait(4000)];
                    case 10:
                        _g.sent();
                        _g.label = 11;
                    case 11:
                        shareCode_1_1 = shareCode_1.next();
                        return [3 /*break*/, 7];
                    case 12: return [3 /*break*/, 15];
                    case 13:
                        e_8_1 = _g.sent();
                        e_8 = { error: e_8_1 };
                        return [3 /*break*/, 15];
                    case 14:
                        try {
                            if (shareCode_1_1 && !shareCode_1_1.done && (_f = shareCode_1["return"])) _f.call(shareCode_1);
                        }
                        finally { if (e_8) throw e_8.error; }
                        return [7 /*endfinally*/];
                    case 15: return [4 /*yield*/, this.api('promote_pk_getHomeData', {})];
                    case 16:
                        res = _g.sent();
                        memberCount = res.data.result.groupInfo.memberList.length;
                        console.log('当前队伍有', memberCount, '人');
                        groupJoinInviteId = "";
                        if (memberCount < 20) {
                            groupJoinInviteId = res.data.result.groupInfo.groupJoinInviteId;
                            console.log('队伍未满', groupJoinInviteId);
                        }
                        if (!(shareCodeHW_group.length === 0)) return [3 /*break*/, 18];
                        return [4 /*yield*/, this.getshareCodeHW('lyb_group')];
                    case 17:
                        shareCodeHW_group = _g.sent();
                        _g.label = 18;
                    case 18:
                        if (user.index === users.length - 1) {
                            groupJoinInviteId = shareCodeHW[0];
                        }
                        if (!(memberCount === 1)) return [3 /*break*/, 23];
                        return [4 /*yield*/, this.getLog()];
                    case 19:
                        log = _g.sent();
                        return [4 /*yield*/, this.api('promote_pk_joinGroup', {
                                "inviteId": groupJoinInviteId,
                                "ss": JSON.stringify({ extraData: { log: encodeURIComponent(log.log), sceneid: 'RAhomePageh5' }, secretp: secretp, random: log.random }),
                                "confirmFlag": 1
                            })];
                    case 20:
                        res = _g.sent();
                        return [4 /*yield*/, this.wait(3000)];
                    case 21:
                        _g.sent();
                        if (res.data.bizCode === 0) {
                            console.log('加入队伍成功');
                        }
                        else {
                            console.log(res.data.bizMsg);
                        }
                        return [4 /*yield*/, this.api('promote_pk_getHomeData', {})];
                    case 22:
                        res = _g.sent();
                        this.o2s(res, 'promote_pk_getHomeData');
                        _g.label = 23;
                    case 23: return [4 /*yield*/, this.wait(5000)];
                    case 24:
                        _g.sent();
                        _g.label = 25;
                    case 25:
                        users_1_1 = users_1.next();
                        return [3 /*break*/, 2];
                    case 26: return [3 /*break*/, 29];
                    case 27:
                        e_9_1 = _g.sent();
                        e_9 = { error: e_9_1 };
                        return [3 /*break*/, 29];
                    case 28:
                        try {
                            if (users_1_1 && !users_1_1.done && (_e = users_1["return"])) _e.call(users_1);
                        }
                        finally { if (e_9) throw e_9.error; }
                        return [7 /*endfinally*/];
                    case 29: return [2 /*return*/];
                }
            });
        });
    };
    return Jd_618;
}(TS_JDHelloWorld_1.JDHelloWorld));
new Jd_618().init().then();
