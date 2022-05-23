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
            var appid;
            return __generator(this, function (_a) {
                appid = fn.includes('promote_') ? 'signed_wh5' : 'wh5';
                return [2 /*return*/, this.post("https://api.m.jd.com/client.action?functionId=".concat(fn), "functionId=".concat(fn, "&client=m&clientVersion=1.0.0&appid=").concat(appid, "&body=").concat(JSON.stringify(body)), {
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
            var res, data, log, secretp, totalScore, nextLevelScore, i, scenceId, e_2, qryList, qryList_1, qryList_1_1, t, ActivityId, appId, taskVos, taskVos_1, taskVos_1_1, tp, i, vos, e_3_1, userLightChance, fragmentList, lotteryTimes, i, e_4_1, loop, inviteId, _a, _b, t, e_5_1, _c, _d, t, _e, _f, tp, e_6_1, _g, _h, tp, e_7_1, _j, _k, tp, e_8_1, _l, _m, tp, e_9_1, e_10_1, e_11;
            var e_4, _o, e_3, _p, e_5, _q, e_10, _r, e_6, _s, e_7, _t, e_8, _u, e_9, _v;
            return __generator(this, function (_w) {
                switch (_w.label) {
                    case 0:
                        this.user = user;
                        return [4 /*yield*/, this.api('promote_getHomeData', {})];
                    case 1:
                        res = _w.sent();
                        secretp = res.data.result.homeMainInfo.secretp;
                        totalScore = parseInt(res.data.result.homeMainInfo.raiseInfo.totalScore), nextLevelScore = parseInt(res.data.result.homeMainInfo.raiseInfo.scenceMap.sceneInfo[0].redNum.nextLevelScore);
                        console.log('当前金币', totalScore);
                        console.log('签到', res.data.result.homeMainInfo.todaySignStatus);
                        i = 0;
                        _w.label = 2;
                    case 2:
                        if (!(i < 20)) return [3 /*break*/, 10];
                        if (!(nextLevelScore <= totalScore)) return [3 /*break*/, 9];
                        console.log(nextLevelScore, totalScore);
                        _w.label = 3;
                    case 3:
                        _w.trys.push([3, 8, , 9]);
                        return [4 /*yield*/, this.logTool.main()];
                    case 4:
                        log = _w.sent();
                        scenceId = this.getRandomNumberByRange(1, 5);
                        if (i === 0)
                            scenceId = 1;
                        console.log(scenceId);
                        return [4 /*yield*/, this.api('promote_raise', { "scenceId": scenceId, "ss": JSON.stringify({ extraData: { log: encodeURIComponent(log.log), sceneid: 'RAhomePageh5' }, secretp: secretp, random: log.random }) })];
                    case 5:
                        res = _w.sent();
                        if (res.data.result.levelUpAward.redNum) {
                            console.log('转盘分红', res.data.result.levelUpAward.redNum);
                        }
                        else {
                            console.log('转盘其他奖励');
                        }
                        return [4 /*yield*/, this.api('promote_getHomeData', {})];
                    case 6:
                        res = _w.sent();
                        totalScore = parseInt(res.data.result.homeMainInfo.raiseInfo.totalScore);
                        nextLevelScore = parseInt(res.data.result.homeMainInfo.raiseInfo.scenceMap.sceneInfo[0].redNum.nextLevelScore);
                        return [4 /*yield*/, this.wait(3000)];
                    case 7:
                        _w.sent();
                        return [3 /*break*/, 9];
                    case 8:
                        e_2 = _w.sent();
                        return [3 /*break*/, 10];
                    case 9:
                        i++;
                        return [3 /*break*/, 2];
                    case 10: return [4 /*yield*/, this.api('qryCompositeMaterials', { "qryParam": "[{\"type\":\"advertGroup\",\"mapTo\":\"brand\",\"id\":\"06306976\"}]", "activityId": "2fUope8TDN3dUJfNzQswkBLc7uE8", "pageId": "", "reqSrc": "", "applyKey": "jd_star" })];
                    case 11:
                        res = _w.sent();
                        this.o2s(res);
                        qryList = res.data.brand.list;
                        _w.label = 12;
                    case 12:
                        _w.trys.push([12, 42, 43, 44]);
                        qryList_1 = __values(qryList), qryList_1_1 = qryList_1.next();
                        _w.label = 13;
                    case 13:
                        if (!!qryList_1_1.done) return [3 /*break*/, 41];
                        t = qryList_1_1.value;
                        ActivityId = t.extension.venderLink1.match(/Zeus\/(\w*)/)[1];
                        console.log('ActivityId', ActivityId);
                        return [4 /*yield*/, this.api('factory_getStaticConfig', { "encryptActivityId": ActivityId, "channelId": 1 })];
                    case 14:
                        data = _w.sent();
                        appId = data.data.result.appId;
                        return [4 /*yield*/, this.api('template_mongo_getHomeData', { "taskToken": "", "appId": appId, "actId": ActivityId, "channelId": 1 })];
                    case 15:
                        res = _w.sent();
                        taskVos = res.data.result.taskVos;
                        _w.label = 16;
                    case 16:
                        _w.trys.push([16, 32, 33, 34]);
                        taskVos_1 = (e_3 = void 0, __values(taskVos)), taskVos_1_1 = taskVos_1.next();
                        _w.label = 17;
                    case 17:
                        if (!!taskVos_1_1.done) return [3 /*break*/, 31];
                        tp = taskVos_1_1.value;
                        if (!(tp.times === 0)) return [3 /*break*/, 30];
                        if (!(tp.taskName === '每日签到')) return [3 /*break*/, 21];
                        return [4 /*yield*/, this.getLog()];
                    case 18:
                        log = _w.sent();
                        return [4 /*yield*/, this.api('template_mongo_collectScore', {
                                "taskToken": tp.simpleRecordInfoVo.taskToken,
                                "taskId": tp.taskId,
                                "actionType": 0,
                                "appId": appId,
                                "safeStr": "{\"random\":\"".concat(log.random, "\",\"sceneid\":\"RAGJSYh5\",\"log\":\"").concat(log.log, "\"}")
                            })];
                    case 19:
                        data = _w.sent();
                        console.log('签到成功', parseInt(data.data.result.acquiredScore));
                        return [4 /*yield*/, this.wait(3000)];
                    case 20:
                        _w.sent();
                        return [3 /*break*/, 28];
                    case 21:
                        if (!(tp.followShopVo || tp.productInfoVos || tp.shoppingActivityVos)) return [3 /*break*/, 27];
                        i = tp.times;
                        _w.label = 22;
                    case 22:
                        if (!(i < tp.maxTimes)) return [3 /*break*/, 26];
                        vos = tp.followShopVo || tp.productInfoVos || tp.shoppingActivityVos;
                        console.log(tp.taskName);
                        return [4 /*yield*/, this.api('template_mongo_collectScore', { "taskToken": vos[i].taskToken, "taskId": tp.taskId, "actionType": 0, "appId": appId, "safeStr": "{\"random\":\"".concat(log.random, "\",\"sceneid\":\"RAGJSYh5\",\"log\":\"").concat(log.log, "\"}") })];
                    case 23:
                        data = _w.sent();
                        console.log(parseInt(data.data.result.acquiredScore));
                        return [4 /*yield*/, this.wait(1000)];
                    case 24:
                        _w.sent();
                        _w.label = 25;
                    case 25:
                        i++;
                        return [3 /*break*/, 22];
                    case 26: return [3 /*break*/, 28];
                    case 27:
                        if (tp.taskName.includes('会员') || tp.taskName.includes('下单')) {
                            console.log(tp.taskName, 'pass');
                        }
                        else {
                            console.log(tp);
                        }
                        _w.label = 28;
                    case 28: return [4 /*yield*/, this.wait(3000)];
                    case 29:
                        _w.sent();
                        _w.label = 30;
                    case 30:
                        taskVos_1_1 = taskVos_1.next();
                        return [3 /*break*/, 17];
                    case 31: return [3 /*break*/, 34];
                    case 32:
                        e_3_1 = _w.sent();
                        e_3 = { error: e_3_1 };
                        return [3 /*break*/, 34];
                    case 33:
                        try {
                            if (taskVos_1_1 && !taskVos_1_1.done && (_p = taskVos_1["return"])) _p.call(taskVos_1);
                        }
                        finally { if (e_3) throw e_3.error; }
                        return [7 /*endfinally*/];
                    case 34: return [4 /*yield*/, this.api('template_mongo_getHomeData', { "taskToken": "", "appId": appId, "actId": ActivityId, "channelId": 1 })];
                    case 35:
                        res = _w.sent();
                        userLightChance = res.data.result.userInfo.userLightChance, fragmentList = res.data.result.userInfo.fragmentList;
                        console.log('可抽奖', userLightChance);
                        lotteryTimes = 0;
                        i = 1;
                        _w.label = 36;
                    case 36:
                        if (!(i < 7)) return [3 /*break*/, 40];
                        if (lotteryTimes === userLightChance)
                            return [3 /*break*/, 40];
                        if (!!fragmentList.includes(i)) return [3 /*break*/, 39];
                        return [4 /*yield*/, this.api('template_mongo_lottery', { "appId": appId, "fragmentId": i })];
                    case 37:
                        data = _w.sent();
                        console.log(data.data.result.userAwardDto);
                        return [4 /*yield*/, this.wait(2000)];
                    case 38:
                        _w.sent();
                        lotteryTimes++;
                        _w.label = 39;
                    case 39:
                        i++;
                        return [3 /*break*/, 36];
                    case 40:
                        qryList_1_1 = qryList_1.next();
                        return [3 /*break*/, 13];
                    case 41: return [3 /*break*/, 44];
                    case 42:
                        e_4_1 = _w.sent();
                        e_4 = { error: e_4_1 };
                        return [3 /*break*/, 44];
                    case 43:
                        try {
                            if (qryList_1_1 && !qryList_1_1.done && (_o = qryList_1["return"])) _o.call(qryList_1);
                        }
                        finally { if (e_4) throw e_4.error; }
                        return [7 /*endfinally*/];
                    case 44: return [4 /*yield*/, this.getLog()];
                    case 45:
                        log = _w.sent();
                        return [4 /*yield*/, this.api('promote_collectAutoScore', { ss: JSON.stringify({ extraData: { log: encodeURIComponent(log.log), sceneid: 'RAhomePageh5' }, secretp: secretp, random: log.random }) })];
                    case 46:
                        res = _w.sent();
                        console.log('收金币', parseInt(res.data.result.produceScore));
                        return [4 /*yield*/, this.wait(3000)];
                    case 47:
                        _w.sent();
                        loop = 0;
                        _w.label = 48;
                    case 48:
                        if (!(loop < 1)) return [3 /*break*/, 122];
                        _w.label = 49;
                    case 49:
                        _w.trys.push([49, 118, , 119]);
                        console.log('loop', loop);
                        return [4 /*yield*/, this.api('promote_getTaskDetail', {})];
                    case 50:
                        res = _w.sent();
                        this.o2s(res);
                        if (loop === 0) {
                            inviteId = res.data.result.inviteId;
                            console.log('助力码', inviteId);
                            this.shareCodeSelf.push(inviteId);
                        }
                        _w.label = 51;
                    case 51:
                        _w.trys.push([51, 57, 58, 59]);
                        _a = (e_5 = void 0, __values(res.data.result.lotteryTaskVos[0].badgeAwardVos)), _b = _a.next();
                        _w.label = 52;
                    case 52:
                        if (!!_b.done) return [3 /*break*/, 56];
                        t = _b.value;
                        if (!(t.status === 3)) return [3 /*break*/, 55];
                        return [4 /*yield*/, this.api('promote_getBadgeAward', { "awardToken": t.awardToken })];
                    case 53:
                        data = _w.sent();
                        console.log(t.awardName, parseInt(data.data.result.myAwardVos[0].pointVo.score));
                        return [4 /*yield*/, this.wait(3000)];
                    case 54:
                        _w.sent();
                        _w.label = 55;
                    case 55:
                        _b = _a.next();
                        return [3 /*break*/, 52];
                    case 56: return [3 /*break*/, 59];
                    case 57:
                        e_5_1 = _w.sent();
                        e_5 = { error: e_5_1 };
                        return [3 /*break*/, 59];
                    case 58:
                        try {
                            if (_b && !_b.done && (_q = _a["return"])) _q.call(_a);
                        }
                        finally { if (e_5) throw e_5.error; }
                        return [7 /*endfinally*/];
                    case 59:
                        _w.trys.push([59, 115, 116, 117]);
                        _c = (e_10 = void 0, __values(res.data.result.taskVos)), _d = _c.next();
                        _w.label = 60;
                    case 60:
                        if (!!_d.done) return [3 /*break*/, 114];
                        t = _d.value;
                        if (t.taskName.includes('下单')) {
                            console.log('pass', t);
                            return [3 /*break*/, 113];
                        }
                        if (!t.taskName.includes('小程序')) return [3 /*break*/, 70];
                        _w.label = 61;
                    case 61:
                        _w.trys.push([61, 68, 69, 70]);
                        _e = (e_6 = void 0, __values(t.shoppingActivityVos)), _f = _e.next();
                        _w.label = 62;
                    case 62:
                        if (!!_f.done) return [3 /*break*/, 67];
                        tp = _f.value;
                        if (!(tp.status === 1)) return [3 /*break*/, 66];
                        return [4 /*yield*/, this.getLog()];
                    case 63:
                        log = _w.sent();
                        return [4 /*yield*/, this.api('promote_collectScore', { "taskId": t.taskId, "taskToken": tp.taskToken, "ss": JSON.stringify({ extraData: { log: encodeURIComponent(log.log), sceneid: 'RAhomePageh5' }, secretp: secretp, random: log.random }) })];
                    case 64:
                        data = _w.sent();
                        console.log(parseInt(data.data.result.acquiredScore));
                        return [4 /*yield*/, this.wait(2000)];
                    case 65:
                        _w.sent();
                        _w.label = 66;
                    case 66:
                        _f = _e.next();
                        return [3 /*break*/, 62];
                    case 67: return [3 /*break*/, 70];
                    case 68:
                        e_6_1 = _w.sent();
                        e_6 = { error: e_6_1 };
                        return [3 /*break*/, 70];
                    case 69:
                        try {
                            if (_f && !_f.done && (_s = _e["return"])) _s.call(_e);
                        }
                        finally { if (e_6) throw e_6.error; }
                        return [7 /*endfinally*/];
                    case 70:
                        if (!t.browseShopVo) return [3 /*break*/, 84];
                        _w.label = 71;
                    case 71:
                        _w.trys.push([71, 82, 83, 84]);
                        _g = (e_7 = void 0, __values(t.browseShopVo)), _h = _g.next();
                        _w.label = 72;
                    case 72:
                        if (!!_h.done) return [3 /*break*/, 81];
                        tp = _h.value;
                        if (!(tp.status === 1)) return [3 /*break*/, 80];
                        console.log(tp.shopName);
                        return [4 /*yield*/, this.getLog()];
                    case 73:
                        log = _w.sent();
                        return [4 /*yield*/, this.api('followShop', { "shopId": tp.shopId, "follow": true, "type": "0" })];
                    case 74:
                        data = _w.sent();
                        console.log('followShop', data.msg);
                        return [4 /*yield*/, this.wait(1000)];
                    case 75:
                        _w.sent();
                        return [4 /*yield*/, this.api('promote_collectScore', { "taskId": t.taskId.toString(), "taskToken": tp.taskToken, "actionType": 1, "ss": JSON.stringify({ extraData: { log: encodeURIComponent(log.log), sceneid: 'RAhomePageh5' }, secretp: secretp, random: log.random }) })];
                    case 76:
                        data = _w.sent();
                        console.log(data.data.bizMsg);
                        return [4 /*yield*/, this.wait(t.waitDuration * 1000 || 3000)];
                    case 77:
                        _w.sent();
                        return [4 /*yield*/, this.qryViewkitCallbackResult(tp.taskToken)];
                    case 78:
                        data = _w.sent();
                        console.log(data.toast.subTitle);
                        return [4 /*yield*/, this.wait(8000)];
                    case 79:
                        _w.sent();
                        _w.label = 80;
                    case 80:
                        _h = _g.next();
                        return [3 /*break*/, 72];
                    case 81: return [3 /*break*/, 84];
                    case 82:
                        e_7_1 = _w.sent();
                        e_7 = { error: e_7_1 };
                        return [3 /*break*/, 84];
                    case 83:
                        try {
                            if (_h && !_h.done && (_t = _g["return"])) _t.call(_g);
                        }
                        finally { if (e_7) throw e_7.error; }
                        return [7 /*endfinally*/];
                    case 84:
                        if (!t.shoppingActivityVos) return [3 /*break*/, 98];
                        _w.label = 85;
                    case 85:
                        _w.trys.push([85, 96, 97, 98]);
                        _j = (e_8 = void 0, __values(t.shoppingActivityVos)), _k = _j.next();
                        _w.label = 86;
                    case 86:
                        if (!!_k.done) return [3 /*break*/, 95];
                        tp = _k.value;
                        if (!(tp.status === 1)) return [3 /*break*/, 92];
                        return [4 /*yield*/, this.getLog()];
                    case 87:
                        log = _w.sent();
                        console.log(tp.title);
                        return [4 /*yield*/, this.api('promote_collectScore', { "taskId": t.taskId, "taskToken": tp.taskToken, "actionType": 1, "ss": JSON.stringify({ extraData: { log: encodeURIComponent(log.log), sceneid: 'RAhomePageh5' }, secretp: secretp, random: log.random }) })];
                    case 88:
                        data = _w.sent();
                        console.log(data.data.bizMsg);
                        return [4 /*yield*/, this.wait(t.waitDuration * 1000 || 3000)];
                    case 89:
                        _w.sent();
                        return [4 /*yield*/, this.qryViewkitCallbackResult(tp.taskToken)];
                    case 90:
                        data = _w.sent();
                        console.log(data.toast.subTitle);
                        return [4 /*yield*/, this.wait(5000)];
                    case 91:
                        _w.sent();
                        _w.label = 92;
                    case 92: return [4 /*yield*/, this.wait(5000)];
                    case 93:
                        _w.sent();
                        _w.label = 94;
                    case 94:
                        _k = _j.next();
                        return [3 /*break*/, 86];
                    case 95: return [3 /*break*/, 98];
                    case 96:
                        e_8_1 = _w.sent();
                        e_8 = { error: e_8_1 };
                        return [3 /*break*/, 98];
                    case 97:
                        try {
                            if (_k && !_k.done && (_u = _j["return"])) _u.call(_j);
                        }
                        finally { if (e_8) throw e_8.error; }
                        return [7 /*endfinally*/];
                    case 98:
                        if (!t.taskName.includes('加购')) return [3 /*break*/, 101];
                        console.log(t.taskName);
                        return [4 /*yield*/, this.api('promote_getTaskDetail', { taskId: t.taskId })];
                    case 99:
                        data = _w.sent();
                        return [4 /*yield*/, this.feed(t.taskId, secretp)];
                    case 100:
                        _w.sent();
                        _w.label = 101;
                    case 101:
                        if (!(t.taskType === 5)) return [3 /*break*/, 113];
                        console.log(t.taskName);
                        return [4 /*yield*/, this.api('promote_getFeedDetail', { taskId: t.taskId })];
                    case 102:
                        res = _w.sent();
                        return [4 /*yield*/, this.wait(1000)];
                    case 103:
                        _w.sent();
                        _w.label = 104;
                    case 104:
                        _w.trys.push([104, 111, 112, 113]);
                        _l = (e_9 = void 0, __values(res.data.result.taskVos[0].browseShopVo.slice(0, 4))), _m = _l.next();
                        _w.label = 105;
                    case 105:
                        if (!!_m.done) return [3 /*break*/, 110];
                        tp = _m.value;
                        if (!(tp.status === 1)) return [3 /*break*/, 109];
                        return [4 /*yield*/, this.getLog()];
                    case 106:
                        log = _w.sent();
                        return [4 /*yield*/, this.api('promote_collectScore', { "taskId": t.taskId, "taskToken": tp.taskToken, "ss": JSON.stringify({ extraData: { log: encodeURIComponent(log.log), sceneid: 'RAhomePageh5' }, secretp: secretp, random: log.random }) })];
                    case 107:
                        data = _w.sent();
                        console.log(data.data.result.successToast);
                        return [4 /*yield*/, this.wait(2000)];
                    case 108:
                        _w.sent();
                        _w.label = 109;
                    case 109:
                        _m = _l.next();
                        return [3 /*break*/, 105];
                    case 110: return [3 /*break*/, 113];
                    case 111:
                        e_9_1 = _w.sent();
                        e_9 = { error: e_9_1 };
                        return [3 /*break*/, 113];
                    case 112:
                        try {
                            if (_m && !_m.done && (_v = _l["return"])) _v.call(_l);
                        }
                        finally { if (e_9) throw e_9.error; }
                        return [7 /*endfinally*/];
                    case 113:
                        _d = _c.next();
                        return [3 /*break*/, 60];
                    case 114: return [3 /*break*/, 117];
                    case 115:
                        e_10_1 = _w.sent();
                        e_10 = { error: e_10_1 };
                        return [3 /*break*/, 117];
                    case 116:
                        try {
                            if (_d && !_d.done && (_r = _c["return"])) _r.call(_c);
                        }
                        finally { if (e_10) throw e_10.error; }
                        return [7 /*endfinally*/];
                    case 117: return [3 /*break*/, 119];
                    case 118:
                        e_11 = _w.sent();
                        console.log('Error', e_11);
                        return [3 /*break*/, 122];
                    case 119: return [4 /*yield*/, this.wait(6000)];
                    case 120:
                        _w.sent();
                        _w.label = 121;
                    case 121:
                        loop++;
                        return [3 /*break*/, 48];
                    case 122: return [2 /*return*/];
                }
            });
        });
    };
    Jd_618.prototype.help = function (users) {
        var _a, _b, _c, _d;
        return __awaiter(this, void 0, void 0, function () {
            var shareCodeHW_group, shareCodeHW, shareCode, full, users_1, users_1_1, user, res, log, secretp, shareCode_1, shareCode_1_1, code, e_12_1, memberCount, groupJoinInviteId, e_13_1;
            var e_13, _e, e_12, _f;
            return __generator(this, function (_g) {
                switch (_g.label) {
                    case 0:
                        shareCodeHW_group = [], shareCodeHW = [], shareCode = [], full = [];
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
                        shareCode_1 = (e_12 = void 0, __values(shareCode)), shareCode_1_1 = shareCode_1.next();
                        _g.label = 7;
                    case 7:
                        if (!!shareCode_1_1.done) return [3 /*break*/, 12];
                        code = shareCode_1_1.value;
                        if (!!full.includes(code)) return [3 /*break*/, 11];
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
                        else if (res.data.bizMsg === '助力次数用完啦~') {
                            console.log(res.data.bizMsg);
                            return [3 /*break*/, 12];
                        }
                        else if (res.data.bizMsg === '好友人气爆棚，不需要助力啦~') {
                            console.log(res.data.bizMsg);
                            full.push(code);
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
                        e_12_1 = _g.sent();
                        e_12 = { error: e_12_1 };
                        return [3 /*break*/, 15];
                    case 14:
                        try {
                            if (shareCode_1_1 && !shareCode_1_1.done && (_f = shareCode_1["return"])) _f.call(shareCode_1);
                        }
                        finally { if (e_12) throw e_12.error; }
                        return [7 /*endfinally*/];
                    case 15: return [4 /*yield*/, this.api('promote_pk_getHomeData', {})];
                    case 16:
                        res = _g.sent();
                        if (!res.data.result.memberList) return [3 /*break*/, 25];
                        memberCount = res.data.result.groupInfo.memberList.length;
                        console.log('当前队伍有', memberCount, '人');
                        groupJoinInviteId = "";
                        if (!groupJoinInviteId && memberCount < 20) {
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
                        return [4 /*yield*/, this.api('promote_pk_joinGroup', { "inviteId": groupJoinInviteId, "ss": JSON.stringify({ extraData: { log: encodeURIComponent(log.log), sceneid: 'RAhomePageh5' }, secretp: secretp, random: log.random }), "confirmFlag": 1 })];
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
                    case 23: return [4 /*yield*/, this.wait(3000)];
                    case 24:
                        _g.sent();
                        _g.label = 25;
                    case 25:
                        users_1_1 = users_1.next();
                        return [3 /*break*/, 2];
                    case 26: return [3 /*break*/, 29];
                    case 27:
                        e_13_1 = _g.sent();
                        e_13 = { error: e_13_1 };
                        return [3 /*break*/, 29];
                    case 28:
                        try {
                            if (users_1_1 && !users_1_1.done && (_e = users_1["return"])) _e.call(users_1);
                        }
                        finally { if (e_13) throw e_13.error; }
                        return [7 /*endfinally*/];
                    case 29: return [2 /*return*/];
                }
            });
        });
    };
    return Jd_618;
}(TS_JDHelloWorld_1.JDHelloWorld));
new Jd_618().init().then();
