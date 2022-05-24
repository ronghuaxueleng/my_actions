"use strict";
/**
 * 京东骑驴
 * cron: 10 8,15,20 * * *
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
        console.log('version: 1300');
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
        var _a, _b, _c, _d, _e;
        return __awaiter(this, void 0, void 0, function () {
            var res, data, log, secretp, totalScore, nextLevelScore, i, scenceId, e_2, qryList, qryList_1, qryList_1_1, t, ActivityId, appId, taskVos, taskVos_1, taskVos_1_1, tp, i, vos, e_3_1, userLightChance, fragmentList, lotteryTimes, i, e_4_1, loop, inviteId, _f, _g, t, e_5_1, _h, _j, t, _k, _l, tp, e_6_1, _m, _o, tp, e_7_1, _p, _q, tp, e_8_1, times, maxTimes, _r, _s, tp, e_9_1, _t, _u, tp, e_10_1, e_11_1, e_12;
            var e_4, _v, e_3, _w, e_5, _x, e_11, _y, e_6, _z, e_7, _0, e_8, _1, e_9, _2, e_10, _3;
            return __generator(this, function (_4) {
                switch (_4.label) {
                    case 0:
                        this.user = user;
                        return [4 /*yield*/, this.api('promote_getHomeData', {})];
                    case 1:
                        res = _4.sent();
                        secretp = res.data.result.homeMainInfo.secretp;
                        totalScore = parseInt(res.data.result.homeMainInfo.raiseInfo.totalScore), nextLevelScore = parseInt(res.data.result.homeMainInfo.raiseInfo.scenceMap.sceneInfo[0].redNum.nextLevelScore);
                        console.log('当前金币', totalScore);
                        return [4 /*yield*/, this.getLog()];
                    case 2:
                        log = _4.sent();
                        return [4 /*yield*/, this.api('promote_collectAutoScore', { ss: JSON.stringify({ extraData: { log: encodeURIComponent(log.log), sceneid: 'RAhomePageh5' }, secretp: secretp, random: log.random }) })];
                    case 3:
                        res = _4.sent();
                        console.log('收金币', parseInt(res.data.result.produceScore));
                        return [4 /*yield*/, this.wait(3000)];
                    case 4:
                        _4.sent();
                        return [4 /*yield*/, this.api('promote_getHomeData', {})];
                    case 5:
                        res = _4.sent();
                        if (!(res.data.result.homeMainInfo.todaySignStatus === 0)) return [3 /*break*/, 9];
                        console.log('开始签到');
                        return [4 /*yield*/, this.getLog()];
                    case 6:
                        log = _4.sent();
                        return [4 /*yield*/, this.api('promote_sign', { "ss": JSON.stringify({ extraData: { log: encodeURIComponent(log.log), sceneid: 'RAhomePageh5' }, secretp: secretp, random: log.random }) })];
                    case 7:
                        data = _4.sent();
                        if ((_c = (_b = (_a = data.data) === null || _a === void 0 ? void 0 : _a.result) === null || _b === void 0 ? void 0 : _b.awardResult) === null || _c === void 0 ? void 0 : _c.redPacketResult) {
                            console.log('🧧', parseFloat(data.data.result.awardResult.redPacketResult.value));
                        }
                        else if ((_e = (_d = data === null || data === void 0 ? void 0 : data.data) === null || _d === void 0 ? void 0 : _d.result) === null || _e === void 0 ? void 0 : _e.scoreResult) {
                            console.log('金币', parseInt(data.data.result.scoreResult.todaySignScore));
                        }
                        else {
                            this.o2s(data);
                        }
                        return [4 /*yield*/, this.wait(3000)];
                    case 8:
                        _4.sent();
                        return [3 /*break*/, 10];
                    case 9:
                        console.log('已签到');
                        _4.label = 10;
                    case 10:
                        i = 0;
                        _4.label = 11;
                    case 11:
                        if (!(i < 20)) return [3 /*break*/, 19];
                        if (!(nextLevelScore <= totalScore)) return [3 /*break*/, 18];
                        console.log(nextLevelScore, totalScore);
                        _4.label = 12;
                    case 12:
                        _4.trys.push([12, 17, , 18]);
                        return [4 /*yield*/, this.getLog()];
                    case 13:
                        log = _4.sent();
                        scenceId = this.getRandomNumberByRange(1, 5);
                        if (i === 0)
                            scenceId = 1;
                        console.log(scenceId);
                        return [4 /*yield*/, this.api('promote_raise', { "scenceId": scenceId, "ss": JSON.stringify({ extraData: { log: encodeURIComponent(log.log), sceneid: 'RAhomePageh5' }, secretp: secretp, random: log.random }) })];
                    case 14:
                        res = _4.sent();
                        if (res.data.result.levelUpAward.redNum) {
                            console.log('转盘分红', res.data.result.levelUpAward.redNum);
                        }
                        else {
                            console.log('转盘其他奖励');
                        }
                        return [4 /*yield*/, this.api('promote_getHomeData', {})];
                    case 15:
                        res = _4.sent();
                        totalScore = parseInt(res.data.result.homeMainInfo.raiseInfo.totalScore);
                        nextLevelScore = parseInt(res.data.result.homeMainInfo.raiseInfo.scenceMap.sceneInfo[0].redNum.nextLevelScore);
                        return [4 /*yield*/, this.wait(3000)];
                    case 16:
                        _4.sent();
                        return [3 /*break*/, 18];
                    case 17:
                        e_2 = _4.sent();
                        return [3 /*break*/, 19];
                    case 18:
                        i++;
                        return [3 /*break*/, 11];
                    case 19: return [4 /*yield*/, this.api('qryCompositeMaterials', { "qryParam": "[{\"type\":\"advertGroup\",\"mapTo\":\"brand\",\"id\":\"06306976\"}]", "activityId": "2fUope8TDN3dUJfNzQswkBLc7uE8", "pageId": "", "reqSrc": "", "applyKey": "jd_star" })];
                    case 20:
                        res = _4.sent();
                        this.o2s(res);
                        qryList = res.data.brand.list;
                        _4.label = 21;
                    case 21:
                        _4.trys.push([21, 49, 50, 51]);
                        qryList_1 = __values(qryList), qryList_1_1 = qryList_1.next();
                        _4.label = 22;
                    case 22:
                        if (!!qryList_1_1.done) return [3 /*break*/, 48];
                        t = qryList_1_1.value;
                        ActivityId = t.extension.venderLink1.match(/Zeus\/(\w*)/)[1];
                        console.log('ActivityId', ActivityId);
                        return [4 /*yield*/, this.api('factory_getStaticConfig', { "encryptActivityId": ActivityId, "channelId": 1 })];
                    case 23:
                        data = _4.sent();
                        appId = data.data.result.appId;
                        return [4 /*yield*/, this.api('template_mongo_getHomeData', { "taskToken": "", "appId": appId, "actId": ActivityId, "channelId": 1 })];
                    case 24:
                        res = _4.sent();
                        taskVos = res.data.result.taskVos;
                        _4.label = 25;
                    case 25:
                        _4.trys.push([25, 39, 40, 41]);
                        taskVos_1 = (e_3 = void 0, __values(taskVos)), taskVos_1_1 = taskVos_1.next();
                        _4.label = 26;
                    case 26:
                        if (!!taskVos_1_1.done) return [3 /*break*/, 38];
                        tp = taskVos_1_1.value;
                        if (!(tp.times === 0)) return [3 /*break*/, 37];
                        if (!(tp.taskName === '每日签到')) return [3 /*break*/, 30];
                        return [4 /*yield*/, this.getLog()];
                    case 27:
                        log = _4.sent();
                        return [4 /*yield*/, this.api('template_mongo_collectScore', {
                                "taskToken": tp.simpleRecordInfoVo.taskToken,
                                "taskId": tp.taskId,
                                "actionType": 0,
                                "appId": appId,
                                "safeStr": "{\"random\":\"".concat(log.random, "\",\"sceneid\":\"RAGJSYh5\",\"log\":\"").concat(log.log, "\"}")
                            })];
                    case 28:
                        data = _4.sent();
                        console.log('签到成功', parseInt(data.data.result.acquiredScore));
                        return [4 /*yield*/, this.wait(3000)];
                    case 29:
                        _4.sent();
                        return [3 /*break*/, 37];
                    case 30:
                        if (!(tp.followShopVo || tp.productInfoVos || tp.shoppingActivityVos)) return [3 /*break*/, 36];
                        i = tp.times;
                        _4.label = 31;
                    case 31:
                        if (!(i < tp.maxTimes)) return [3 /*break*/, 35];
                        vos = tp.followShopVo || tp.productInfoVos || tp.shoppingActivityVos;
                        console.log(tp.taskName);
                        return [4 /*yield*/, this.api('template_mongo_collectScore', { "taskToken": vos[i].taskToken, "taskId": tp.taskId, "actionType": 0, "appId": appId, "safeStr": "{\"random\":\"".concat(log.random, "\",\"sceneid\":\"RAGJSYh5\",\"log\":\"").concat(log.log, "\"}") })];
                    case 32:
                        data = _4.sent();
                        console.log(parseInt(data.data.result.acquiredScore));
                        return [4 /*yield*/, this.wait(1000)];
                    case 33:
                        _4.sent();
                        _4.label = 34;
                    case 34:
                        i++;
                        return [3 /*break*/, 31];
                    case 35: return [3 /*break*/, 37];
                    case 36:
                        if (tp.taskName.includes('会员') || tp.taskName.includes('下单')) {
                            console.log(tp.taskName, 'pass');
                        }
                        else {
                            console.log(tp);
                        }
                        _4.label = 37;
                    case 37:
                        taskVos_1_1 = taskVos_1.next();
                        return [3 /*break*/, 26];
                    case 38: return [3 /*break*/, 41];
                    case 39:
                        e_3_1 = _4.sent();
                        e_3 = { error: e_3_1 };
                        return [3 /*break*/, 41];
                    case 40:
                        try {
                            if (taskVos_1_1 && !taskVos_1_1.done && (_w = taskVos_1["return"])) _w.call(taskVos_1);
                        }
                        finally { if (e_3) throw e_3.error; }
                        return [7 /*endfinally*/];
                    case 41: return [4 /*yield*/, this.api('template_mongo_getHomeData', { "taskToken": "", "appId": appId, "actId": ActivityId, "channelId": 1 })];
                    case 42:
                        res = _4.sent();
                        userLightChance = res.data.result.userInfo.userLightChance, fragmentList = res.data.result.userInfo.fragmentList;
                        console.log('可抽奖', userLightChance);
                        lotteryTimes = 0;
                        i = 1;
                        _4.label = 43;
                    case 43:
                        if (!(i < 7)) return [3 /*break*/, 47];
                        if (lotteryTimes === userLightChance)
                            return [3 /*break*/, 47];
                        if (!!fragmentList.includes(i)) return [3 /*break*/, 46];
                        return [4 /*yield*/, this.api('template_mongo_lottery', { "appId": appId, "fragmentId": i })];
                    case 44:
                        data = _4.sent();
                        if (data.data.result.userAwardDto.couponVo)
                            console.log(data.data.result.userAwardDto.couponVo.prizeName);
                        else if (data.data.result.userAwardDto.scoreVo)
                            console.log(parseInt(data.data.result.userAwardDto.scoreVo.quantity), '金币');
                        else
                            console.log(data.data.result.userAwardDto);
                        return [4 /*yield*/, this.wait(2000)];
                    case 45:
                        _4.sent();
                        lotteryTimes++;
                        _4.label = 46;
                    case 46:
                        i++;
                        return [3 /*break*/, 43];
                    case 47:
                        qryList_1_1 = qryList_1.next();
                        return [3 /*break*/, 22];
                    case 48: return [3 /*break*/, 51];
                    case 49:
                        e_4_1 = _4.sent();
                        e_4 = { error: e_4_1 };
                        return [3 /*break*/, 51];
                    case 50:
                        try {
                            if (qryList_1_1 && !qryList_1_1.done && (_v = qryList_1["return"])) _v.call(qryList_1);
                        }
                        finally { if (e_4) throw e_4.error; }
                        return [7 /*endfinally*/];
                    case 51:
                        loop = 0;
                        _4.label = 52;
                    case 52:
                        if (!(loop < 3)) return [3 /*break*/, 141];
                        _4.label = 53;
                    case 53:
                        _4.trys.push([53, 137, , 138]);
                        console.log('loop', loop);
                        return [4 /*yield*/, this.api('promote_getTaskDetail', {})];
                    case 54:
                        res = _4.sent();
                        this.o2s(res);
                        if (loop === 0) {
                            inviteId = res.data.result.inviteId;
                            console.log('助力码', inviteId);
                            this.shareCodeSelf.push(inviteId);
                        }
                        _4.label = 55;
                    case 55:
                        _4.trys.push([55, 61, 62, 63]);
                        _f = (e_5 = void 0, __values(res.data.result.lotteryTaskVos[0].badgeAwardVos)), _g = _f.next();
                        _4.label = 56;
                    case 56:
                        if (!!_g.done) return [3 /*break*/, 60];
                        t = _g.value;
                        if (!(t.status === 3)) return [3 /*break*/, 59];
                        return [4 /*yield*/, this.api('promote_getBadgeAward', { "awardToken": t.awardToken })];
                    case 57:
                        data = _4.sent();
                        console.log(t.awardName, parseInt(data.data.result.myAwardVos[0].pointVo.score));
                        return [4 /*yield*/, this.wait(3000)];
                    case 58:
                        _4.sent();
                        _4.label = 59;
                    case 59:
                        _g = _f.next();
                        return [3 /*break*/, 56];
                    case 60: return [3 /*break*/, 63];
                    case 61:
                        e_5_1 = _4.sent();
                        e_5 = { error: e_5_1 };
                        return [3 /*break*/, 63];
                    case 62:
                        try {
                            if (_g && !_g.done && (_x = _f["return"])) _x.call(_f);
                        }
                        finally { if (e_5) throw e_5.error; }
                        return [7 /*endfinally*/];
                    case 63:
                        _4.trys.push([63, 134, 135, 136]);
                        _h = (e_11 = void 0, __values(res.data.result.taskVos)), _j = _h.next();
                        _4.label = 64;
                    case 64:
                        if (!!_j.done) return [3 /*break*/, 133];
                        t = _j.value;
                        if (!t.taskName.includes('小程序')) return [3 /*break*/, 74];
                        _4.label = 65;
                    case 65:
                        _4.trys.push([65, 72, 73, 74]);
                        _k = (e_6 = void 0, __values(t.shoppingActivityVos)), _l = _k.next();
                        _4.label = 66;
                    case 66:
                        if (!!_l.done) return [3 /*break*/, 71];
                        tp = _l.value;
                        if (!(tp.status === 1)) return [3 /*break*/, 70];
                        return [4 /*yield*/, this.getLog()];
                    case 67:
                        log = _4.sent();
                        return [4 /*yield*/, this.api('promote_collectScore', { "taskId": t.taskId, "taskToken": tp.taskToken, "ss": JSON.stringify({ extraData: { log: encodeURIComponent(log.log), sceneid: 'RAhomePageh5' }, secretp: secretp, random: log.random }) })];
                    case 68:
                        data = _4.sent();
                        console.log(parseInt(data.data.result.acquiredScore));
                        return [4 /*yield*/, this.wait(2000)];
                    case 69:
                        _4.sent();
                        _4.label = 70;
                    case 70:
                        _l = _k.next();
                        return [3 /*break*/, 66];
                    case 71: return [3 /*break*/, 74];
                    case 72:
                        e_6_1 = _4.sent();
                        e_6 = { error: e_6_1 };
                        return [3 /*break*/, 74];
                    case 73:
                        try {
                            if (_l && !_l.done && (_z = _k["return"])) _z.call(_k);
                        }
                        finally { if (e_6) throw e_6.error; }
                        return [7 /*endfinally*/];
                    case 74:
                        if (!t.browseShopVo) return [3 /*break*/, 88];
                        _4.label = 75;
                    case 75:
                        _4.trys.push([75, 86, 87, 88]);
                        _m = (e_7 = void 0, __values(t.browseShopVo)), _o = _m.next();
                        _4.label = 76;
                    case 76:
                        if (!!_o.done) return [3 /*break*/, 85];
                        tp = _o.value;
                        if (!(tp.status === 1)) return [3 /*break*/, 84];
                        console.log(tp.shopName);
                        return [4 /*yield*/, this.getLog()];
                    case 77:
                        log = _4.sent();
                        return [4 /*yield*/, this.api('followShop', { "shopId": tp.shopId, "follow": true, "type": "0" })];
                    case 78:
                        data = _4.sent();
                        console.log('followShop', data.msg);
                        return [4 /*yield*/, this.wait(1000)];
                    case 79:
                        _4.sent();
                        return [4 /*yield*/, this.api('promote_collectScore', { "taskId": t.taskId.toString(), "taskToken": tp.taskToken, "actionType": 1, "ss": JSON.stringify({ extraData: { log: encodeURIComponent(log.log), sceneid: 'RAhomePageh5' }, secretp: secretp, random: log.random }) })];
                    case 80:
                        data = _4.sent();
                        console.log(data.data.bizMsg);
                        return [4 /*yield*/, this.wait(t.waitDuration * 1000 || 3000)];
                    case 81:
                        _4.sent();
                        return [4 /*yield*/, this.qryViewkitCallbackResult(tp.taskToken)];
                    case 82:
                        data = _4.sent();
                        console.log(data.toast.subTitle);
                        return [4 /*yield*/, this.wait(8000)];
                    case 83:
                        _4.sent();
                        _4.label = 84;
                    case 84:
                        _o = _m.next();
                        return [3 /*break*/, 76];
                    case 85: return [3 /*break*/, 88];
                    case 86:
                        e_7_1 = _4.sent();
                        e_7 = { error: e_7_1 };
                        return [3 /*break*/, 88];
                    case 87:
                        try {
                            if (_o && !_o.done && (_0 = _m["return"])) _0.call(_m);
                        }
                        finally { if (e_7) throw e_7.error; }
                        return [7 /*endfinally*/];
                    case 88:
                        if (!t.shoppingActivityVos) return [3 /*break*/, 102];
                        _4.label = 89;
                    case 89:
                        _4.trys.push([89, 100, 101, 102]);
                        _p = (e_8 = void 0, __values(t.shoppingActivityVos)), _q = _p.next();
                        _4.label = 90;
                    case 90:
                        if (!!_q.done) return [3 /*break*/, 99];
                        tp = _q.value;
                        if (!(tp.status === 1)) return [3 /*break*/, 96];
                        return [4 /*yield*/, this.getLog()];
                    case 91:
                        log = _4.sent();
                        console.log(tp.title);
                        return [4 /*yield*/, this.api('promote_collectScore', { "taskId": t.taskId, "taskToken": tp.taskToken, "actionType": 1, "ss": JSON.stringify({ extraData: { log: encodeURIComponent(log.log), sceneid: 'RAhomePageh5' }, secretp: secretp, random: log.random }) })];
                    case 92:
                        data = _4.sent();
                        console.log(data.data.bizMsg);
                        return [4 /*yield*/, this.wait(t.waitDuration * 1000 || 3000)];
                    case 93:
                        _4.sent();
                        if (!![3].includes(t.taskType)) return [3 /*break*/, 96];
                        return [4 /*yield*/, this.qryViewkitCallbackResult(tp.taskToken)];
                    case 94:
                        data = _4.sent();
                        console.log(data.toast.subTitle);
                        return [4 /*yield*/, this.wait(5000)];
                    case 95:
                        _4.sent();
                        _4.label = 96;
                    case 96: return [4 /*yield*/, this.wait(5000)];
                    case 97:
                        _4.sent();
                        _4.label = 98;
                    case 98:
                        _q = _p.next();
                        return [3 /*break*/, 90];
                    case 99: return [3 /*break*/, 102];
                    case 100:
                        e_8_1 = _4.sent();
                        e_8 = { error: e_8_1 };
                        return [3 /*break*/, 102];
                    case 101:
                        try {
                            if (_q && !_q.done && (_1 = _p["return"])) _1.call(_p);
                        }
                        finally { if (e_8) throw e_8.error; }
                        return [7 /*endfinally*/];
                    case 102:
                        if (!t.taskName.includes('加购')) return [3 /*break*/, 105];
                        console.log(t.taskName);
                        return [4 /*yield*/, this.api('promote_getTaskDetail', { taskId: t.taskId })];
                    case 103:
                        data = _4.sent();
                        return [4 /*yield*/, this.feed(t.taskId, secretp)];
                    case 104:
                        _4.sent();
                        _4.label = 105;
                    case 105:
                        if (!(t.taskType === 0)) return [3 /*break*/, 108];
                        console.log(t.taskName);
                        return [4 /*yield*/, this.getLog()];
                    case 106:
                        log = _4.sent();
                        return [4 /*yield*/, this.api('promote_collectScore', { "taskId": t.taskId, "taskToken": t.simpleRecordInfoVo.taskToken, "ss": JSON.stringify({ extraData: { log: encodeURIComponent(log.log), sceneid: 'RAhomePageh5' }, secretp: secretp, random: log.random }) })];
                    case 107:
                        data = _4.sent();
                        console.log(parseInt(data.data.result.acquiredScore));
                        _4.label = 108;
                    case 108:
                        if (!(t.taskType === 2)) return [3 /*break*/, 120];
                        return [4 /*yield*/, this.api('promote_getFeedDetail', { taskId: t.taskId })];
                    case 109:
                        data = _4.sent();
                        return [4 /*yield*/, this.wait(1000)];
                    case 110:
                        _4.sent();
                        times = data.data.result.addProductVos[0].times, maxTimes = data.data.result.addProductVos[0].maxTimes;
                        _4.label = 111;
                    case 111:
                        _4.trys.push([111, 118, 119, 120]);
                        _r = (e_9 = void 0, __values(data.data.result.addProductVos[0].productInfoVos)), _s = _r.next();
                        _4.label = 112;
                    case 112:
                        if (!!_s.done) return [3 /*break*/, 117];
                        tp = _s.value;
                        if (times === maxTimes)
                            return [3 /*break*/, 117];
                        console.log(tp.skuName);
                        return [4 /*yield*/, this.getLog()];
                    case 113:
                        log = _4.sent();
                        return [4 /*yield*/, this.api('promote_collectScore', { "taskId": t.taskId, "taskToken": tp.taskToken, "ss": JSON.stringify({ extraData: { log: encodeURIComponent(log.log), sceneid: 'RAhomePageh5' }, secretp: secretp, random: log.random }) })];
                    case 114:
                        data = _4.sent();
                        times++;
                        console.log(parseInt(data.data.result.acquiredScore));
                        return [4 /*yield*/, this.wait(1000)];
                    case 115:
                        _4.sent();
                        _4.label = 116;
                    case 116:
                        _s = _r.next();
                        return [3 /*break*/, 112];
                    case 117: return [3 /*break*/, 120];
                    case 118:
                        e_9_1 = _4.sent();
                        e_9 = { error: e_9_1 };
                        return [3 /*break*/, 120];
                    case 119:
                        try {
                            if (_s && !_s.done && (_2 = _r["return"])) _2.call(_r);
                        }
                        finally { if (e_9) throw e_9.error; }
                        return [7 /*endfinally*/];
                    case 120:
                        if (!(t.taskType === 5)) return [3 /*break*/, 132];
                        console.log(t.taskName);
                        return [4 /*yield*/, this.api('promote_getFeedDetail', { taskId: t.taskId })];
                    case 121:
                        res = _4.sent();
                        return [4 /*yield*/, this.wait(1000)];
                    case 122:
                        _4.sent();
                        _4.label = 123;
                    case 123:
                        _4.trys.push([123, 130, 131, 132]);
                        _t = (e_10 = void 0, __values(res.data.result.taskVos[0].browseShopVo.slice(0, 4))), _u = _t.next();
                        _4.label = 124;
                    case 124:
                        if (!!_u.done) return [3 /*break*/, 129];
                        tp = _u.value;
                        if (!(tp.status === 1)) return [3 /*break*/, 128];
                        return [4 /*yield*/, this.getLog()];
                    case 125:
                        log = _4.sent();
                        return [4 /*yield*/, this.api('promote_collectScore', { "taskId": t.taskId, "taskToken": tp.taskToken, "ss": JSON.stringify({ extraData: { log: encodeURIComponent(log.log), sceneid: 'RAhomePageh5' }, secretp: secretp, random: log.random }) })];
                    case 126:
                        data = _4.sent();
                        console.log(data.data.result.successToast);
                        return [4 /*yield*/, this.wait(2000)];
                    case 127:
                        _4.sent();
                        _4.label = 128;
                    case 128:
                        _u = _t.next();
                        return [3 /*break*/, 124];
                    case 129: return [3 /*break*/, 132];
                    case 130:
                        e_10_1 = _4.sent();
                        e_10 = { error: e_10_1 };
                        return [3 /*break*/, 132];
                    case 131:
                        try {
                            if (_u && !_u.done && (_3 = _t["return"])) _3.call(_t);
                        }
                        finally { if (e_10) throw e_10.error; }
                        return [7 /*endfinally*/];
                    case 132:
                        _j = _h.next();
                        return [3 /*break*/, 64];
                    case 133: return [3 /*break*/, 136];
                    case 134:
                        e_11_1 = _4.sent();
                        e_11 = { error: e_11_1 };
                        return [3 /*break*/, 136];
                    case 135:
                        try {
                            if (_j && !_j.done && (_y = _h["return"])) _y.call(_h);
                        }
                        finally { if (e_11) throw e_11.error; }
                        return [7 /*endfinally*/];
                    case 136: return [3 /*break*/, 138];
                    case 137:
                        e_12 = _4.sent();
                        console.log('Error', e_12);
                        return [3 /*break*/, 141];
                    case 138: return [4 /*yield*/, this.wait(6000)];
                    case 139:
                        _4.sent();
                        _4.label = 140;
                    case 140:
                        loop++;
                        return [3 /*break*/, 52];
                    case 141: return [2 /*return*/];
                }
            });
        });
    };
    Jd_618.prototype.help = function (users) {
        var _a, _b, _c, _d;
        return __awaiter(this, void 0, void 0, function () {
            var shareCodeHW_group, shareCodeHW, shareCode, full, groups, users_1, users_1_1, user, res, memberCount, groupJoinInviteId, e_13, e_14_1, users_2, users_2_1, user, res, log, secretp, shareCode_1, shareCode_1_1, code, e_15_1, memberCount, groups_1, groups_1_1, group, e_16_1, e_17, e_18_1;
            var e_14, _e, e_18, _f, e_15, _g, e_16, _h;
            return __generator(this, function (_j) {
                switch (_j.label) {
                    case 0:
                        shareCodeHW_group = [], shareCodeHW = [], shareCode = [], full = [], groups = [];
                        _j.label = 1;
                    case 1:
                        _j.trys.push([1, 12, 13, 14]);
                        users_1 = __values(users), users_1_1 = users_1.next();
                        _j.label = 2;
                    case 2:
                        if (!!users_1_1.done) return [3 /*break*/, 11];
                        user = users_1_1.value;
                        _j.label = 3;
                    case 3:
                        _j.trys.push([3, 7, , 8]);
                        console.log("\n\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7".concat(user.index + 1, "\u3011").concat(user.UserName, " \u83B7\u53D6\u961F\u4F0D\u4FE1\u606F\n"));
                        this.user = user;
                        res = void 0;
                        return [4 /*yield*/, this.api('promote_pk_getHomeData', {})];
                    case 4:
                        res = _j.sent();
                        if (!res.data.result.groupInfo.memberList) return [3 /*break*/, 6];
                        memberCount = res.data.result.groupInfo.memberList.length;
                        console.log('当前队伍有', memberCount, '人');
                        groupJoinInviteId = "";
                        if (!(memberCount < 30)) return [3 /*break*/, 6];
                        groupJoinInviteId = res.data.result.groupInfo.groupJoinInviteId;
                        return [4 /*yield*/, this.api('getEncryptedPinColor', {})];
                    case 5:
                        res = _j.sent();
                        groups.push({ mpin: res.result, groupJoinInviteId: groupJoinInviteId });
                        console.log('队伍未满', groupJoinInviteId);
                        _j.label = 6;
                    case 6: return [3 /*break*/, 8];
                    case 7:
                        e_13 = _j.sent();
                        return [3 /*break*/, 8];
                    case 8: return [4 /*yield*/, this.wait(2000)];
                    case 9:
                        _j.sent();
                        _j.label = 10;
                    case 10:
                        users_1_1 = users_1.next();
                        return [3 /*break*/, 2];
                    case 11: return [3 /*break*/, 14];
                    case 12:
                        e_14_1 = _j.sent();
                        e_14 = { error: e_14_1 };
                        return [3 /*break*/, 14];
                    case 13:
                        try {
                            if (users_1_1 && !users_1_1.done && (_e = users_1["return"])) _e.call(users_1);
                        }
                        finally { if (e_14) throw e_14.error; }
                        return [7 /*endfinally*/];
                    case 14:
                        _j.trys.push([14, 50, 51, 52]);
                        users_2 = __values(users), users_2_1 = users_2.next();
                        _j.label = 15;
                    case 15:
                        if (!!users_2_1.done) return [3 /*break*/, 49];
                        user = users_2_1.value;
                        _j.label = 16;
                    case 16:
                        _j.trys.push([16, 47, , 48]);
                        console.log("\n\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7".concat(user.index + 1, "\u3011").concat(user.UserName, "\n"));
                        this.user = user;
                        res = void 0, log = void 0;
                        return [4 /*yield*/, this.api('promote_getHomeData', {})];
                    case 17:
                        res = _j.sent();
                        secretp = res.data.result.homeMainInfo.secretp;
                        if (!(shareCodeHW.length === 0)) return [3 /*break*/, 19];
                        return [4 /*yield*/, this.getshareCodeHW('lyb')];
                    case 18:
                        shareCodeHW = _j.sent();
                        _j.label = 19;
                    case 19:
                        if (user.index === 0) {
                            shareCode = Array.from(new Set(__spreadArray(__spreadArray([], __read(shareCodeHW), false), __read(this.shareCodeSelf), false)));
                        }
                        else {
                            shareCode = Array.from(new Set(__spreadArray(__spreadArray([], __read(this.shareCodeSelf), false), __read(shareCodeHW), false)));
                        }
                        this.o2s(this.shareCodeSelf, '内部助力');
                        _j.label = 20;
                    case 20:
                        _j.trys.push([20, 27, 28, 29]);
                        shareCode_1 = (e_15 = void 0, __values(shareCode)), shareCode_1_1 = shareCode_1.next();
                        _j.label = 21;
                    case 21:
                        if (!!shareCode_1_1.done) return [3 /*break*/, 26];
                        code = shareCode_1_1.value;
                        if (!!full.includes(code)) return [3 /*break*/, 25];
                        console.log("\u8D26\u53F7".concat(user.index + 1, " ").concat(user.UserName, " \u53BB\u52A9\u529B ").concat(code));
                        return [4 /*yield*/, this.getLog()];
                    case 22:
                        log = _j.sent();
                        return [4 /*yield*/, this.api('promote_collectScore', {
                                "ss": JSON.stringify({ extraData: { log: encodeURIComponent(log.log), sceneid: 'RAhomePageh5' }, secretp: secretp, random: log.random }),
                                "actionType": "0",
                                "inviteId": code
                            })];
                    case 23:
                        res = _j.sent();
                        if (res.data.bizCode === 0) {
                            console.log('助力成功', parseFloat(res.data.result.acquiredScore));
                            if ((_b = (_a = res.data.result) === null || _a === void 0 ? void 0 : _a.redpacket) === null || _b === void 0 ? void 0 : _b.value)
                                console.log('🧧', parseFloat((_d = (_c = res.data.result) === null || _c === void 0 ? void 0 : _c.redpacket) === null || _d === void 0 ? void 0 : _d.value));
                        }
                        else if (res.data.bizMsg === '助力次数用完啦~') {
                            console.log('上限');
                            return [3 /*break*/, 26];
                        }
                        else if (res.data.bizMsg === '好友人气爆棚，不需要助力啦~') {
                            console.log(res.data.bizMsg);
                            full.push(code);
                        }
                        else {
                            console.log(res.data.bizMsg);
                        }
                        return [4 /*yield*/, this.wait(4000)];
                    case 24:
                        _j.sent();
                        _j.label = 25;
                    case 25:
                        shareCode_1_1 = shareCode_1.next();
                        return [3 /*break*/, 21];
                    case 26: return [3 /*break*/, 29];
                    case 27:
                        e_15_1 = _j.sent();
                        e_15 = { error: e_15_1 };
                        return [3 /*break*/, 29];
                    case 28:
                        try {
                            if (shareCode_1_1 && !shareCode_1_1.done && (_g = shareCode_1["return"])) _g.call(shareCode_1);
                        }
                        finally { if (e_15) throw e_15.error; }
                        return [7 /*endfinally*/];
                    case 29: return [4 /*yield*/, this.api('promote_pk_getHomeData', {})];
                    case 30:
                        res = _j.sent();
                        if (!res.data.result.groupInfo.memberList) return [3 /*break*/, 46];
                        if (!(shareCodeHW_group.length === 0)) return [3 /*break*/, 32];
                        return [4 /*yield*/, this.getshareCodeHW('lyb_group')];
                    case 31:
                        shareCodeHW_group = _j.sent();
                        _j.label = 32;
                    case 32:
                        if (user.index === users.length - 1) {
                            groups = __spreadArray(__spreadArray([], __read(shareCodeHW_group), false), __read(groups), false);
                        }
                        memberCount = res.data.result.groupInfo.memberList.length;
                        if (!(memberCount === 1)) return [3 /*break*/, 44];
                        _j.label = 33;
                    case 33:
                        _j.trys.push([33, 42, 43, 44]);
                        groups_1 = (e_16 = void 0, __values(groups)), groups_1_1 = groups_1.next();
                        _j.label = 34;
                    case 34:
                        if (!!groups_1_1.done) return [3 /*break*/, 41];
                        group = groups_1_1.value;
                        return [4 /*yield*/, this.getLog()];
                    case 35:
                        log = _j.sent();
                        return [4 /*yield*/, this.api('collectFriendRecordColor', { "mpin": group.mpin, "businessCode": "20136", "assistType": "2", "shareSource": 1 })];
                    case 36:
                        res = _j.sent();
                        return [4 /*yield*/, this.api('promote_pk_joinGroup', { "inviteId": group.groupJoinInviteId, "ss": JSON.stringify({ extraData: { log: encodeURIComponent(log.log), sceneid: 'RAhomePageh5' }, secretp: secretp, random: log.random }), "confirmFlag": 1 })];
                    case 37:
                        res = _j.sent();
                        return [4 /*yield*/, this.wait(3000)];
                    case 38:
                        _j.sent();
                        if (res.data.bizCode === 0) {
                            console.log('加入队伍成功');
                            return [3 /*break*/, 41];
                        }
                        else {
                            console.log(res.data.bizMsg);
                        }
                        return [4 /*yield*/, this.api('promote_pk_getHomeData', {})];
                    case 39:
                        res = _j.sent();
                        _j.label = 40;
                    case 40:
                        groups_1_1 = groups_1.next();
                        return [3 /*break*/, 34];
                    case 41: return [3 /*break*/, 44];
                    case 42:
                        e_16_1 = _j.sent();
                        e_16 = { error: e_16_1 };
                        return [3 /*break*/, 44];
                    case 43:
                        try {
                            if (groups_1_1 && !groups_1_1.done && (_h = groups_1["return"])) _h.call(groups_1);
                        }
                        finally { if (e_16) throw e_16.error; }
                        return [7 /*endfinally*/];
                    case 44: return [4 /*yield*/, this.wait(3000)];
                    case 45:
                        _j.sent();
                        _j.label = 46;
                    case 46: return [3 /*break*/, 48];
                    case 47:
                        e_17 = _j.sent();
                        console.log(e_17);
                        return [3 /*break*/, 48];
                    case 48:
                        users_2_1 = users_2.next();
                        return [3 /*break*/, 15];
                    case 49: return [3 /*break*/, 52];
                    case 50:
                        e_18_1 = _j.sent();
                        e_18 = { error: e_18_1 };
                        return [3 /*break*/, 52];
                    case 51:
                        try {
                            if (users_2_1 && !users_2_1.done && (_f = users_2["return"])) _f.call(users_2);
                        }
                        finally { if (e_18) throw e_18.error; }
                        return [7 /*endfinally*/];
                    case 52: return [2 /*return*/];
                }
            });
        });
    };
    return Jd_618;
}(TS_JDHelloWorld_1.JDHelloWorld));
new Jd_618().init().then();
