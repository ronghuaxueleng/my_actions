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
        var _a, _b, _c, _d, _e;
        return __awaiter(this, void 0, void 0, function () {
            var res, data, log, secretp, totalScore, nextLevelScore, i, scenceId, e_2, qryList, qryList_1, qryList_1_1, t, ActivityId, appId, taskVos, taskVos_1, taskVos_1_1, tp, i, vos, e_3_1, userLightChance, fragmentList, lotteryTimes, i, e_4_1, loop, inviteId, _f, _g, t, e_5_1, _h, _j, t, _k, _l, tp, e_6_1, _m, _o, tp, e_7_1, _p, _q, tp, e_8_1, _r, _s, tp, e_9_1, e_10_1, e_11;
            var e_4, _t, e_3, _u, e_5, _v, e_10, _w, e_6, _x, e_7, _y, e_8, _z, e_9, _0;
            return __generator(this, function (_1) {
                switch (_1.label) {
                    case 0:
                        this.user = user;
                        return [4 /*yield*/, this.api('promote_getHomeData', {})];
                    case 1:
                        res = _1.sent();
                        secretp = res.data.result.homeMainInfo.secretp;
                        totalScore = parseInt(res.data.result.homeMainInfo.raiseInfo.totalScore), nextLevelScore = parseInt(res.data.result.homeMainInfo.raiseInfo.scenceMap.sceneInfo[0].redNum.nextLevelScore);
                        console.log('当前金币', totalScore);
                        if (!(res.data.result.homeMainInfo.todaySignStatus === 0)) return [3 /*break*/, 5];
                        console.log('开始签到');
                        return [4 /*yield*/, this.getLog()];
                    case 2:
                        log = _1.sent();
                        return [4 /*yield*/, this.api('promote_sign', { "ss": JSON.stringify({ extraData: { log: encodeURIComponent(log.log), sceneid: 'RAhomePageh5' }, secretp: secretp, random: log.random }) })];
                    case 3:
                        data = _1.sent();
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
                    case 4:
                        _1.sent();
                        return [3 /*break*/, 6];
                    case 5:
                        console.log('已签到');
                        _1.label = 6;
                    case 6:
                        i = 0;
                        _1.label = 7;
                    case 7:
                        if (!(i < 20)) return [3 /*break*/, 15];
                        if (!(nextLevelScore <= totalScore)) return [3 /*break*/, 14];
                        console.log(nextLevelScore, totalScore);
                        _1.label = 8;
                    case 8:
                        _1.trys.push([8, 13, , 14]);
                        return [4 /*yield*/, this.logTool.main()];
                    case 9:
                        log = _1.sent();
                        scenceId = this.getRandomNumberByRange(1, 5);
                        if (i === 0)
                            scenceId = 1;
                        console.log(scenceId);
                        return [4 /*yield*/, this.api('promote_raise', { "scenceId": scenceId, "ss": JSON.stringify({ extraData: { log: encodeURIComponent(log.log), sceneid: 'RAhomePageh5' }, secretp: secretp, random: log.random }) })];
                    case 10:
                        res = _1.sent();
                        if (res.data.result.levelUpAward.redNum) {
                            console.log('转盘分红', res.data.result.levelUpAward.redNum);
                        }
                        else {
                            console.log('转盘其他奖励');
                        }
                        return [4 /*yield*/, this.api('promote_getHomeData', {})];
                    case 11:
                        res = _1.sent();
                        totalScore = parseInt(res.data.result.homeMainInfo.raiseInfo.totalScore);
                        nextLevelScore = parseInt(res.data.result.homeMainInfo.raiseInfo.scenceMap.sceneInfo[0].redNum.nextLevelScore);
                        return [4 /*yield*/, this.wait(3000)];
                    case 12:
                        _1.sent();
                        return [3 /*break*/, 14];
                    case 13:
                        e_2 = _1.sent();
                        return [3 /*break*/, 15];
                    case 14:
                        i++;
                        return [3 /*break*/, 7];
                    case 15: return [4 /*yield*/, this.api('qryCompositeMaterials', { "qryParam": "[{\"type\":\"advertGroup\",\"mapTo\":\"brand\",\"id\":\"06306976\"}]", "activityId": "2fUope8TDN3dUJfNzQswkBLc7uE8", "pageId": "", "reqSrc": "", "applyKey": "jd_star" })];
                    case 16:
                        res = _1.sent();
                        this.o2s(res);
                        qryList = res.data.brand.list;
                        _1.label = 17;
                    case 17:
                        _1.trys.push([17, 47, 48, 49]);
                        qryList_1 = __values(qryList), qryList_1_1 = qryList_1.next();
                        _1.label = 18;
                    case 18:
                        if (!!qryList_1_1.done) return [3 /*break*/, 46];
                        t = qryList_1_1.value;
                        ActivityId = t.extension.venderLink1.match(/Zeus\/(\w*)/)[1];
                        console.log('ActivityId', ActivityId);
                        return [4 /*yield*/, this.api('factory_getStaticConfig', { "encryptActivityId": ActivityId, "channelId": 1 })];
                    case 19:
                        data = _1.sent();
                        appId = data.data.result.appId;
                        return [4 /*yield*/, this.api('template_mongo_getHomeData', { "taskToken": "", "appId": appId, "actId": ActivityId, "channelId": 1 })];
                    case 20:
                        res = _1.sent();
                        taskVos = res.data.result.taskVos;
                        _1.label = 21;
                    case 21:
                        _1.trys.push([21, 37, 38, 39]);
                        taskVos_1 = (e_3 = void 0, __values(taskVos)), taskVos_1_1 = taskVos_1.next();
                        _1.label = 22;
                    case 22:
                        if (!!taskVos_1_1.done) return [3 /*break*/, 36];
                        tp = taskVos_1_1.value;
                        if (!(tp.times === 0)) return [3 /*break*/, 35];
                        if (!(tp.taskName === '每日签到')) return [3 /*break*/, 26];
                        return [4 /*yield*/, this.getLog()];
                    case 23:
                        log = _1.sent();
                        return [4 /*yield*/, this.api('template_mongo_collectScore', {
                                "taskToken": tp.simpleRecordInfoVo.taskToken,
                                "taskId": tp.taskId,
                                "actionType": 0,
                                "appId": appId,
                                "safeStr": "{\"random\":\"".concat(log.random, "\",\"sceneid\":\"RAGJSYh5\",\"log\":\"").concat(log.log, "\"}")
                            })];
                    case 24:
                        data = _1.sent();
                        console.log('签到成功', parseInt(data.data.result.acquiredScore));
                        return [4 /*yield*/, this.wait(3000)];
                    case 25:
                        _1.sent();
                        return [3 /*break*/, 33];
                    case 26:
                        if (!(tp.followShopVo || tp.productInfoVos || tp.shoppingActivityVos)) return [3 /*break*/, 32];
                        i = tp.times;
                        _1.label = 27;
                    case 27:
                        if (!(i < tp.maxTimes)) return [3 /*break*/, 31];
                        vos = tp.followShopVo || tp.productInfoVos || tp.shoppingActivityVos;
                        console.log(tp.taskName);
                        return [4 /*yield*/, this.api('template_mongo_collectScore', { "taskToken": vos[i].taskToken, "taskId": tp.taskId, "actionType": 0, "appId": appId, "safeStr": "{\"random\":\"".concat(log.random, "\",\"sceneid\":\"RAGJSYh5\",\"log\":\"").concat(log.log, "\"}") })];
                    case 28:
                        data = _1.sent();
                        console.log(parseInt(data.data.result.acquiredScore));
                        return [4 /*yield*/, this.wait(1000)];
                    case 29:
                        _1.sent();
                        _1.label = 30;
                    case 30:
                        i++;
                        return [3 /*break*/, 27];
                    case 31: return [3 /*break*/, 33];
                    case 32:
                        if (tp.taskName.includes('会员') || tp.taskName.includes('下单')) {
                            console.log(tp.taskName, 'pass');
                        }
                        else {
                            console.log(tp);
                        }
                        _1.label = 33;
                    case 33: return [4 /*yield*/, this.wait(3000)];
                    case 34:
                        _1.sent();
                        _1.label = 35;
                    case 35:
                        taskVos_1_1 = taskVos_1.next();
                        return [3 /*break*/, 22];
                    case 36: return [3 /*break*/, 39];
                    case 37:
                        e_3_1 = _1.sent();
                        e_3 = { error: e_3_1 };
                        return [3 /*break*/, 39];
                    case 38:
                        try {
                            if (taskVos_1_1 && !taskVos_1_1.done && (_u = taskVos_1["return"])) _u.call(taskVos_1);
                        }
                        finally { if (e_3) throw e_3.error; }
                        return [7 /*endfinally*/];
                    case 39: return [4 /*yield*/, this.api('template_mongo_getHomeData', { "taskToken": "", "appId": appId, "actId": ActivityId, "channelId": 1 })];
                    case 40:
                        res = _1.sent();
                        userLightChance = res.data.result.userInfo.userLightChance, fragmentList = res.data.result.userInfo.fragmentList;
                        console.log('可抽奖', userLightChance);
                        lotteryTimes = 0;
                        i = 1;
                        _1.label = 41;
                    case 41:
                        if (!(i < 7)) return [3 /*break*/, 45];
                        if (lotteryTimes === userLightChance)
                            return [3 /*break*/, 45];
                        if (!!fragmentList.includes(i)) return [3 /*break*/, 44];
                        return [4 /*yield*/, this.api('template_mongo_lottery', { "appId": appId, "fragmentId": i })];
                    case 42:
                        data = _1.sent();
                        if (data.data.result.userAwardDto.couponVo)
                            console.log(data.data.result.userAwardDto.couponVo.prizeName);
                        else if (data.data.result.userAwardDto.scoreVo)
                            console.log(parseInt(data.data.result.userAwardDto.scoreVo.quantity), '金币');
                        else
                            console.log(data.data.result.userAwardDto);
                        return [4 /*yield*/, this.wait(2000)];
                    case 43:
                        _1.sent();
                        lotteryTimes++;
                        _1.label = 44;
                    case 44:
                        i++;
                        return [3 /*break*/, 41];
                    case 45:
                        qryList_1_1 = qryList_1.next();
                        return [3 /*break*/, 18];
                    case 46: return [3 /*break*/, 49];
                    case 47:
                        e_4_1 = _1.sent();
                        e_4 = { error: e_4_1 };
                        return [3 /*break*/, 49];
                    case 48:
                        try {
                            if (qryList_1_1 && !qryList_1_1.done && (_t = qryList_1["return"])) _t.call(qryList_1);
                        }
                        finally { if (e_4) throw e_4.error; }
                        return [7 /*endfinally*/];
                    case 49: return [4 /*yield*/, this.getLog()];
                    case 50:
                        log = _1.sent();
                        return [4 /*yield*/, this.api('promote_collectAutoScore', { ss: JSON.stringify({ extraData: { log: encodeURIComponent(log.log), sceneid: 'RAhomePageh5' }, secretp: secretp, random: log.random }) })];
                    case 51:
                        res = _1.sent();
                        console.log('收金币', parseInt(res.data.result.produceScore));
                        return [4 /*yield*/, this.wait(3000)];
                    case 52:
                        _1.sent();
                        loop = 0;
                        _1.label = 53;
                    case 53:
                        if (!(loop < 3)) return [3 /*break*/, 127];
                        _1.label = 54;
                    case 54:
                        _1.trys.push([54, 123, , 124]);
                        console.log('loop', loop);
                        return [4 /*yield*/, this.api('promote_getTaskDetail', {})];
                    case 55:
                        res = _1.sent();
                        this.o2s(res);
                        if (loop === 0) {
                            inviteId = res.data.result.inviteId;
                            console.log('助力码', inviteId);
                            this.shareCodeSelf.push(inviteId);
                        }
                        _1.label = 56;
                    case 56:
                        _1.trys.push([56, 62, 63, 64]);
                        _f = (e_5 = void 0, __values(res.data.result.lotteryTaskVos[0].badgeAwardVos)), _g = _f.next();
                        _1.label = 57;
                    case 57:
                        if (!!_g.done) return [3 /*break*/, 61];
                        t = _g.value;
                        if (!(t.status === 3)) return [3 /*break*/, 60];
                        return [4 /*yield*/, this.api('promote_getBadgeAward', { "awardToken": t.awardToken })];
                    case 58:
                        data = _1.sent();
                        console.log(t.awardName, parseInt(data.data.result.myAwardVos[0].pointVo.score));
                        return [4 /*yield*/, this.wait(3000)];
                    case 59:
                        _1.sent();
                        _1.label = 60;
                    case 60:
                        _g = _f.next();
                        return [3 /*break*/, 57];
                    case 61: return [3 /*break*/, 64];
                    case 62:
                        e_5_1 = _1.sent();
                        e_5 = { error: e_5_1 };
                        return [3 /*break*/, 64];
                    case 63:
                        try {
                            if (_g && !_g.done && (_v = _f["return"])) _v.call(_f);
                        }
                        finally { if (e_5) throw e_5.error; }
                        return [7 /*endfinally*/];
                    case 64:
                        _1.trys.push([64, 120, 121, 122]);
                        _h = (e_10 = void 0, __values(res.data.result.taskVos)), _j = _h.next();
                        _1.label = 65;
                    case 65:
                        if (!!_j.done) return [3 /*break*/, 119];
                        t = _j.value;
                        if (t.taskName.includes('下单')) {
                            console.log('pass', t);
                            return [3 /*break*/, 118];
                        }
                        if (!t.taskName.includes('小程序')) return [3 /*break*/, 75];
                        _1.label = 66;
                    case 66:
                        _1.trys.push([66, 73, 74, 75]);
                        _k = (e_6 = void 0, __values(t.shoppingActivityVos)), _l = _k.next();
                        _1.label = 67;
                    case 67:
                        if (!!_l.done) return [3 /*break*/, 72];
                        tp = _l.value;
                        if (!(tp.status === 1)) return [3 /*break*/, 71];
                        return [4 /*yield*/, this.getLog()];
                    case 68:
                        log = _1.sent();
                        return [4 /*yield*/, this.api('promote_collectScore', { "taskId": t.taskId, "taskToken": tp.taskToken, "ss": JSON.stringify({ extraData: { log: encodeURIComponent(log.log), sceneid: 'RAhomePageh5' }, secretp: secretp, random: log.random }) })];
                    case 69:
                        data = _1.sent();
                        console.log(parseInt(data.data.result.acquiredScore));
                        return [4 /*yield*/, this.wait(2000)];
                    case 70:
                        _1.sent();
                        _1.label = 71;
                    case 71:
                        _l = _k.next();
                        return [3 /*break*/, 67];
                    case 72: return [3 /*break*/, 75];
                    case 73:
                        e_6_1 = _1.sent();
                        e_6 = { error: e_6_1 };
                        return [3 /*break*/, 75];
                    case 74:
                        try {
                            if (_l && !_l.done && (_x = _k["return"])) _x.call(_k);
                        }
                        finally { if (e_6) throw e_6.error; }
                        return [7 /*endfinally*/];
                    case 75:
                        if (!t.browseShopVo) return [3 /*break*/, 89];
                        _1.label = 76;
                    case 76:
                        _1.trys.push([76, 87, 88, 89]);
                        _m = (e_7 = void 0, __values(t.browseShopVo)), _o = _m.next();
                        _1.label = 77;
                    case 77:
                        if (!!_o.done) return [3 /*break*/, 86];
                        tp = _o.value;
                        if (!(tp.status === 1)) return [3 /*break*/, 85];
                        console.log(tp.shopName);
                        return [4 /*yield*/, this.getLog()];
                    case 78:
                        log = _1.sent();
                        return [4 /*yield*/, this.api('followShop', { "shopId": tp.shopId, "follow": true, "type": "0" })];
                    case 79:
                        data = _1.sent();
                        console.log('followShop', data.msg);
                        return [4 /*yield*/, this.wait(1000)];
                    case 80:
                        _1.sent();
                        return [4 /*yield*/, this.api('promote_collectScore', { "taskId": t.taskId.toString(), "taskToken": tp.taskToken, "actionType": 1, "ss": JSON.stringify({ extraData: { log: encodeURIComponent(log.log), sceneid: 'RAhomePageh5' }, secretp: secretp, random: log.random }) })];
                    case 81:
                        data = _1.sent();
                        console.log(data.data.bizMsg);
                        return [4 /*yield*/, this.wait(t.waitDuration * 1000 || 3000)];
                    case 82:
                        _1.sent();
                        return [4 /*yield*/, this.qryViewkitCallbackResult(tp.taskToken)];
                    case 83:
                        data = _1.sent();
                        console.log(data.toast.subTitle);
                        return [4 /*yield*/, this.wait(8000)];
                    case 84:
                        _1.sent();
                        _1.label = 85;
                    case 85:
                        _o = _m.next();
                        return [3 /*break*/, 77];
                    case 86: return [3 /*break*/, 89];
                    case 87:
                        e_7_1 = _1.sent();
                        e_7 = { error: e_7_1 };
                        return [3 /*break*/, 89];
                    case 88:
                        try {
                            if (_o && !_o.done && (_y = _m["return"])) _y.call(_m);
                        }
                        finally { if (e_7) throw e_7.error; }
                        return [7 /*endfinally*/];
                    case 89:
                        if (!t.shoppingActivityVos) return [3 /*break*/, 103];
                        _1.label = 90;
                    case 90:
                        _1.trys.push([90, 101, 102, 103]);
                        _p = (e_8 = void 0, __values(t.shoppingActivityVos)), _q = _p.next();
                        _1.label = 91;
                    case 91:
                        if (!!_q.done) return [3 /*break*/, 100];
                        tp = _q.value;
                        if (!(tp.status === 1)) return [3 /*break*/, 97];
                        return [4 /*yield*/, this.getLog()];
                    case 92:
                        log = _1.sent();
                        console.log(tp.title);
                        return [4 /*yield*/, this.api('promote_collectScore', { "taskId": t.taskId, "taskToken": tp.taskToken, "actionType": 1, "ss": JSON.stringify({ extraData: { log: encodeURIComponent(log.log), sceneid: 'RAhomePageh5' }, secretp: secretp, random: log.random }) })];
                    case 93:
                        data = _1.sent();
                        console.log(data.data.bizMsg);
                        return [4 /*yield*/, this.wait(t.waitDuration * 1000 || 3000)];
                    case 94:
                        _1.sent();
                        return [4 /*yield*/, this.qryViewkitCallbackResult(tp.taskToken)];
                    case 95:
                        data = _1.sent();
                        console.log(data.toast.subTitle);
                        return [4 /*yield*/, this.wait(5000)];
                    case 96:
                        _1.sent();
                        _1.label = 97;
                    case 97: return [4 /*yield*/, this.wait(5000)];
                    case 98:
                        _1.sent();
                        _1.label = 99;
                    case 99:
                        _q = _p.next();
                        return [3 /*break*/, 91];
                    case 100: return [3 /*break*/, 103];
                    case 101:
                        e_8_1 = _1.sent();
                        e_8 = { error: e_8_1 };
                        return [3 /*break*/, 103];
                    case 102:
                        try {
                            if (_q && !_q.done && (_z = _p["return"])) _z.call(_p);
                        }
                        finally { if (e_8) throw e_8.error; }
                        return [7 /*endfinally*/];
                    case 103:
                        if (!t.taskName.includes('加购')) return [3 /*break*/, 106];
                        console.log(t.taskName);
                        return [4 /*yield*/, this.api('promote_getTaskDetail', { taskId: t.taskId })];
                    case 104:
                        data = _1.sent();
                        return [4 /*yield*/, this.feed(t.taskId, secretp)];
                    case 105:
                        _1.sent();
                        _1.label = 106;
                    case 106:
                        if (!(t.taskType === 5)) return [3 /*break*/, 118];
                        console.log(t.taskName);
                        return [4 /*yield*/, this.api('promote_getFeedDetail', { taskId: t.taskId })];
                    case 107:
                        res = _1.sent();
                        return [4 /*yield*/, this.wait(1000)];
                    case 108:
                        _1.sent();
                        _1.label = 109;
                    case 109:
                        _1.trys.push([109, 116, 117, 118]);
                        _r = (e_9 = void 0, __values(res.data.result.taskVos[0].browseShopVo.slice(0, 4))), _s = _r.next();
                        _1.label = 110;
                    case 110:
                        if (!!_s.done) return [3 /*break*/, 115];
                        tp = _s.value;
                        if (!(tp.status === 1)) return [3 /*break*/, 114];
                        return [4 /*yield*/, this.getLog()];
                    case 111:
                        log = _1.sent();
                        return [4 /*yield*/, this.api('promote_collectScore', { "taskId": t.taskId, "taskToken": tp.taskToken, "ss": JSON.stringify({ extraData: { log: encodeURIComponent(log.log), sceneid: 'RAhomePageh5' }, secretp: secretp, random: log.random }) })];
                    case 112:
                        data = _1.sent();
                        console.log(data.data.result.successToast);
                        return [4 /*yield*/, this.wait(2000)];
                    case 113:
                        _1.sent();
                        _1.label = 114;
                    case 114:
                        _s = _r.next();
                        return [3 /*break*/, 110];
                    case 115: return [3 /*break*/, 118];
                    case 116:
                        e_9_1 = _1.sent();
                        e_9 = { error: e_9_1 };
                        return [3 /*break*/, 118];
                    case 117:
                        try {
                            if (_s && !_s.done && (_0 = _r["return"])) _0.call(_r);
                        }
                        finally { if (e_9) throw e_9.error; }
                        return [7 /*endfinally*/];
                    case 118:
                        _j = _h.next();
                        return [3 /*break*/, 65];
                    case 119: return [3 /*break*/, 122];
                    case 120:
                        e_10_1 = _1.sent();
                        e_10 = { error: e_10_1 };
                        return [3 /*break*/, 122];
                    case 121:
                        try {
                            if (_j && !_j.done && (_w = _h["return"])) _w.call(_h);
                        }
                        finally { if (e_10) throw e_10.error; }
                        return [7 /*endfinally*/];
                    case 122: return [3 /*break*/, 124];
                    case 123:
                        e_11 = _1.sent();
                        console.log('Error', e_11);
                        return [3 /*break*/, 127];
                    case 124: return [4 /*yield*/, this.wait(6000)];
                    case 125:
                        _1.sent();
                        _1.label = 126;
                    case 126:
                        loop++;
                        return [3 /*break*/, 53];
                    case 127: return [2 /*return*/];
                }
            });
        });
    };
    Jd_618.prototype.help = function (users) {
        var _a, _b, _c, _d;
        return __awaiter(this, void 0, void 0, function () {
            var shareCodeHW_group, shareCodeHW, shareCode, full, groups, users_1, users_1_1, user, res, memberCount, groupJoinInviteId, e_12, e_13_1, users_2, users_2_1, user, res, log, secretp, shareCode_1, shareCode_1_1, code, e_14_1, memberCount, groups_1, groups_1_1, group, e_15_1, e_16, e_17_1;
            var e_13, _e, e_17, _f, e_14, _g, e_15, _h;
            return __generator(this, function (_j) {
                switch (_j.label) {
                    case 0:
                        shareCodeHW_group = [], shareCodeHW = [], shareCode = [], full = [], groups = [];
                        _j.label = 1;
                    case 1:
                        _j.trys.push([1, 10, 11, 12]);
                        users_1 = __values(users), users_1_1 = users_1.next();
                        _j.label = 2;
                    case 2:
                        if (!!users_1_1.done) return [3 /*break*/, 9];
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
                        e_12 = _j.sent();
                        return [3 /*break*/, 8];
                    case 8:
                        users_1_1 = users_1.next();
                        return [3 /*break*/, 2];
                    case 9: return [3 /*break*/, 12];
                    case 10:
                        e_13_1 = _j.sent();
                        e_13 = { error: e_13_1 };
                        return [3 /*break*/, 12];
                    case 11:
                        try {
                            if (users_1_1 && !users_1_1.done && (_e = users_1["return"])) _e.call(users_1);
                        }
                        finally { if (e_13) throw e_13.error; }
                        return [7 /*endfinally*/];
                    case 12:
                        _j.trys.push([12, 48, 49, 50]);
                        users_2 = __values(users), users_2_1 = users_2.next();
                        _j.label = 13;
                    case 13:
                        if (!!users_2_1.done) return [3 /*break*/, 47];
                        user = users_2_1.value;
                        _j.label = 14;
                    case 14:
                        _j.trys.push([14, 45, , 46]);
                        console.log("\n\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7".concat(user.index + 1, "\u3011").concat(user.UserName, "\n"));
                        this.user = user;
                        res = void 0, log = void 0;
                        return [4 /*yield*/, this.api('promote_getHomeData', {})];
                    case 15:
                        res = _j.sent();
                        secretp = res.data.result.homeMainInfo.secretp;
                        if (!(shareCodeHW.length === 0)) return [3 /*break*/, 17];
                        return [4 /*yield*/, this.getshareCodeHW('lyb')];
                    case 16:
                        shareCodeHW = _j.sent();
                        _j.label = 17;
                    case 17:
                        if (user.index === 0) {
                            shareCode = Array.from(new Set(__spreadArray(__spreadArray([], __read(shareCodeHW), false), __read(this.shareCodeSelf), false)));
                        }
                        else {
                            shareCode = Array.from(new Set(__spreadArray(__spreadArray([], __read(this.shareCodeSelf), false), __read(shareCodeHW), false)));
                        }
                        this.o2s(this.shareCodeSelf, '内部助力');
                        _j.label = 18;
                    case 18:
                        _j.trys.push([18, 25, 26, 27]);
                        shareCode_1 = (e_14 = void 0, __values(shareCode)), shareCode_1_1 = shareCode_1.next();
                        _j.label = 19;
                    case 19:
                        if (!!shareCode_1_1.done) return [3 /*break*/, 24];
                        code = shareCode_1_1.value;
                        if (!!full.includes(code)) return [3 /*break*/, 23];
                        console.log("\u8D26\u53F7".concat(user.index + 1, " ").concat(user.UserName, " \u53BB\u52A9\u529B ").concat(code));
                        return [4 /*yield*/, this.getLog()];
                    case 20:
                        log = _j.sent();
                        return [4 /*yield*/, this.api('promote_collectScore', {
                                "ss": JSON.stringify({ extraData: { log: encodeURIComponent(log.log), sceneid: 'RAhomePageh5' }, secretp: secretp, random: log.random }),
                                "actionType": "0",
                                "inviteId": code
                            })];
                    case 21:
                        res = _j.sent();
                        if (res.data.bizCode === 0) {
                            console.log('助力成功', parseFloat(res.data.result.acquiredScore));
                            if ((_b = (_a = res.data.result) === null || _a === void 0 ? void 0 : _a.redpacket) === null || _b === void 0 ? void 0 : _b.value)
                                console.log('🧧', parseFloat((_d = (_c = res.data.result) === null || _c === void 0 ? void 0 : _c.redpacket) === null || _d === void 0 ? void 0 : _d.value));
                        }
                        else if (res.data.bizMsg === '助力次数用完啦~') {
                            console.log(res.data.bizMsg);
                            return [3 /*break*/, 24];
                        }
                        else if (res.data.bizMsg === '好友人气爆棚，不需要助力啦~') {
                            console.log(res.data.bizMsg);
                            full.push(code);
                        }
                        else {
                            console.log(res.data.bizMsg);
                        }
                        return [4 /*yield*/, this.wait(4000)];
                    case 22:
                        _j.sent();
                        _j.label = 23;
                    case 23:
                        shareCode_1_1 = shareCode_1.next();
                        return [3 /*break*/, 19];
                    case 24: return [3 /*break*/, 27];
                    case 25:
                        e_14_1 = _j.sent();
                        e_14 = { error: e_14_1 };
                        return [3 /*break*/, 27];
                    case 26:
                        try {
                            if (shareCode_1_1 && !shareCode_1_1.done && (_g = shareCode_1["return"])) _g.call(shareCode_1);
                        }
                        finally { if (e_14) throw e_14.error; }
                        return [7 /*endfinally*/];
                    case 27: return [4 /*yield*/, this.api('promote_pk_getHomeData', {})];
                    case 28:
                        res = _j.sent();
                        if (!res.data.result.groupInfo.memberList) return [3 /*break*/, 44];
                        if (!(shareCodeHW_group.length === 0)) return [3 /*break*/, 30];
                        return [4 /*yield*/, this.getshareCodeHW('lyb_group')];
                    case 29:
                        shareCodeHW_group = _j.sent();
                        _j.label = 30;
                    case 30:
                        if (user.index === users.length - 1) {
                            groups = __spreadArray(__spreadArray([], __read(shareCodeHW_group), false), __read(groups), false);
                        }
                        memberCount = res.data.result.groupInfo.memberList.length;
                        if (!(memberCount === 1)) return [3 /*break*/, 42];
                        _j.label = 31;
                    case 31:
                        _j.trys.push([31, 40, 41, 42]);
                        groups_1 = (e_15 = void 0, __values(groups)), groups_1_1 = groups_1.next();
                        _j.label = 32;
                    case 32:
                        if (!!groups_1_1.done) return [3 /*break*/, 39];
                        group = groups_1_1.value;
                        return [4 /*yield*/, this.getLog()];
                    case 33:
                        log = _j.sent();
                        return [4 /*yield*/, this.api('collectFriendRecordColor', { "mpin": group.mpin, "businessCode": "20136", "assistType": "2", "shareSource": 1 })];
                    case 34:
                        res = _j.sent();
                        return [4 /*yield*/, this.api('promote_pk_joinGroup', { "inviteId": group.groupJoinInviteId, "ss": JSON.stringify({ extraData: { log: encodeURIComponent(log.log), sceneid: 'RAhomePageh5' }, secretp: secretp, random: log.random }), "confirmFlag": 1 })];
                    case 35:
                        res = _j.sent();
                        return [4 /*yield*/, this.wait(3000)];
                    case 36:
                        _j.sent();
                        if (res.data.bizCode === 0) {
                            console.log('加入队伍成功');
                            return [3 /*break*/, 39];
                        }
                        else {
                            console.log(res.data.bizMsg);
                        }
                        return [4 /*yield*/, this.api('promote_pk_getHomeData', {})];
                    case 37:
                        res = _j.sent();
                        _j.label = 38;
                    case 38:
                        groups_1_1 = groups_1.next();
                        return [3 /*break*/, 32];
                    case 39: return [3 /*break*/, 42];
                    case 40:
                        e_15_1 = _j.sent();
                        e_15 = { error: e_15_1 };
                        return [3 /*break*/, 42];
                    case 41:
                        try {
                            if (groups_1_1 && !groups_1_1.done && (_h = groups_1["return"])) _h.call(groups_1);
                        }
                        finally { if (e_15) throw e_15.error; }
                        return [7 /*endfinally*/];
                    case 42: return [4 /*yield*/, this.wait(3000)];
                    case 43:
                        _j.sent();
                        _j.label = 44;
                    case 44: return [3 /*break*/, 46];
                    case 45:
                        e_16 = _j.sent();
                        console.log('e');
                        return [3 /*break*/, 46];
                    case 46:
                        users_2_1 = users_2.next();
                        return [3 /*break*/, 13];
                    case 47: return [3 /*break*/, 50];
                    case 48:
                        e_17_1 = _j.sent();
                        e_17 = { error: e_17_1 };
                        return [3 /*break*/, 50];
                    case 49:
                        try {
                            if (users_2_1 && !users_2_1.done && (_f = users_2["return"])) _f.call(users_2);
                        }
                        finally { if (e_17) throw e_17.error; }
                        return [7 /*endfinally*/];
                    case 50: return [2 /*return*/];
                }
            });
        });
    };
    return Jd_618;
}(TS_JDHelloWorld_1.JDHelloWorld));
new Jd_618().init().then();
