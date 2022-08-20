"use strict";
/**
 * 汪汪乐园-跑步+组队+浏览
 * cron: 20 * * * *
 * export FP_448DE=""
 * export FP_B6AC3=""
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
exports.__esModule = true;
var log_1 = require("./utils/log");
var date_fns_1 = require("date-fns");
var TS_JDHelloWorld_1 = require("./TS_JDHelloWorld");
var Joy_Park_Run = /** @class */ (function (_super) {
    __extends(Joy_Park_Run, _super);
    function Joy_Park_Run() {
        return _super.call(this) || this;
    }
    Joy_Park_Run.prototype.init = function () {
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
    // 秒转分:秒
    Joy_Park_Run.prototype.secondsToMinutes = function (seconds) {
        var minutes = Math.floor(seconds / 60);
        var second = Math.floor(seconds % 60);
        return "".concat(minutes, "\u5206").concat(second, "\u79D2");
    };
    Joy_Park_Run.prototype.team = function (fn, body) {
        return __awaiter(this, void 0, void 0, function () {
            var timestamp, h5st;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        timestamp = Date.now();
                        h5st = this.teamTool.__genH5st({
                            appid: "activities_platform",
                            body: JSON.stringify(body),
                            client: "ios",
                            clientVersion: "3.9.2",
                            functionId: fn,
                            t: timestamp.toString()
                        });
                        return [4 /*yield*/, this.get("https://api.m.jd.com/?functionId=".concat(fn, "&body=").concat(encodeURIComponent(JSON.stringify(body)), "&t=").concat(timestamp, "&appid=activities_platform&client=ios&clientVersion=3.9.2&cthr=1&h5st=").concat(h5st), {
                                'Host': 'api.m.jd.com',
                                'User-Agent': this.user.UserAgent,
                                'Origin': 'https://h5platform.jd.com',
                                'X-Requested-With': 'com.jd.jdlite',
                                'Referer': 'https://h5platform.jd.com/',
                                'Cookie': this.user.cookie
                            })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Joy_Park_Run.prototype.api = function (fn, body) {
        return __awaiter(this, void 0, void 0, function () {
            var timestamp, h5st, params;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        timestamp = Date.now(), h5st = '';
                        if (fn === 'runningOpenBox') {
                            h5st = this.apiTool.__genH5st({
                                appid: "activities_platform",
                                body: JSON.stringify(body),
                                client: "ios",
                                clientVersion: "3.9.2",
                                functionId: fn,
                                t: timestamp.toString()
                            });
                        }
                        params = "functionId=".concat(fn, "&body=").concat(JSON.stringify(body), "&t=").concat(timestamp, "&appid=activities_platform&client=ios&clientVersion=3.9.2&cthr=1");
                        h5st && (params += "&h5st=".concat(h5st));
                        return [4 /*yield*/, this.post('https://api.m.jd.com/', params, {
                                'authority': 'api.m.jd.com',
                                'content-type': 'application/x-www-form-urlencoded',
                                'cookie': this.user.cookie,
                                'origin': 'https://h5platform.jd.com',
                                'referer': 'https://h5platform.jd.com/',
                                'User-Agent': this.user.UserAgent
                            })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Joy_Park_Run.prototype.runningPageHome = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.get("https://api.m.jd.com/?functionId=runningPageHome&body=%7B%22linkId%22:%22L-sOanK_5RJCz7I314FpnQ%22,%22isFromJoyPark%22:true,%22joyLinkId%22:%22LsQNxL7iWDlXUs6cFl-AAg%22%7D&t=".concat(Date.now(), "&appid=activities_platform&client=ios&clientVersion=3.9.2"), {
                        'Host': 'api.m.jd.com',
                        'Origin': 'https://h5platform.jd.com',
                        'User-Agent': this.user.UserAgent,
                        'Referer': 'https://h5platform.jd.com/',
                        'Cookie': this.user.cookie
                    })];
            });
        });
    };
    Joy_Park_Run.prototype.startRunning = function (res, assets) {
        return __awaiter(this, void 0, void 0, function () {
            var i, assets_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!res.data.runningHomeInfo.nextRunningTime) return [3 /*break*/, 10];
                        console.log('终点目标', assets);
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < 5)) return [3 /*break*/, 10];
                        return [4 /*yield*/, this.api('runningOpenBox', { "linkId": "L-sOanK_5RJCz7I314FpnQ" })];
                    case 2:
                        res = _a.sent();
                        if (!(parseFloat(res.data.assets) >= assets)) return [3 /*break*/, 4];
                        assets_1 = parseFloat(res.data.assets);
                        return [4 /*yield*/, this.api('runningPreserveAssets', { "linkId": "L-sOanK_5RJCz7I314FpnQ" })];
                    case 3:
                        res = _a.sent();
                        console.log('领取成功', assets_1);
                        return [3 /*break*/, 10];
                    case 4:
                        if (!res.data.doubleSuccess) return [3 /*break*/, 6];
                        console.log('翻倍成功', parseFloat(res.data.assets));
                        return [4 /*yield*/, this.wait(10000)];
                    case 5:
                        _a.sent();
                        return [3 /*break*/, 9];
                    case 6:
                        if (!(!res.data.doubleSuccess && !res.data.runningHomeInfo.runningFinish)) return [3 /*break*/, 8];
                        console.log('开始跑步', parseFloat(res.data.assets));
                        return [4 /*yield*/, this.wait(10000)];
                    case 7:
                        _a.sent();
                        return [3 /*break*/, 9];
                    case 8:
                        console.log('翻倍失败');
                        return [3 /*break*/, 10];
                    case 9:
                        i++;
                        return [3 /*break*/, 1];
                    case 10: return [4 /*yield*/, this.wait(3000)];
                    case 11:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Joy_Park_Run.prototype.main = function (user) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var assets, rewardAmount, res, apTaskList, _b, _c, t, e_1_1, _d, _e, t, apTaskDetail, taskItemList, i, e_2_1, sum, success, _f, _g, t, _h, _j, member, energy, i, e_3;
            var e_1, _k, e_2, _l, e_4, _m, e_5, _o;
            return __generator(this, function (_p) {
                switch (_p.label) {
                    case 0:
                        this.user = user;
                        this.user.UserAgent = "jdltapp;iPhone;3.9.2;Mozilla/5.0 (iPhone; CPU iPhone OS ".concat(this.getIosVer(), " like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1;");
                        assets = parseFloat(process.env.JD_JOY_PARK_RUN_ASSETS || '0.08');
                        rewardAmount = 0;
                        _p.label = 1;
                    case 1:
                        _p.trys.push([1, 59, , 61]);
                        this.teamTool = new log_1.H5ST('448de', this.user.UserAgent, process.env.FP_448DE || '', 'https://h5platform.jd.com/swm-stable/people-run/index?activityId=L-sOanK_5RJCz7I314FpnQ', 'https://h5platform.jd.com');
                        return [4 /*yield*/, this.teamTool.__genAlgo()];
                    case 2:
                        _p.sent();
                        res = void 0, apTaskList = void 0;
                        return [4 /*yield*/, this.api('apTaskList', { "linkId": "LsQNxL7iWDlXUs6cFl-AAg" })];
                    case 3:
                        apTaskList = _p.sent();
                        _p.label = 4;
                    case 4:
                        _p.trys.push([4, 11, 12, 13]);
                        _b = __values(apTaskList.data), _c = _b.next();
                        _p.label = 5;
                    case 5:
                        if (!!_c.done) return [3 /*break*/, 10];
                        t = _c.value;
                        if (!(t.taskType === 'BROWSE_CHANNEL' && !t.taskFinished)) return [3 /*break*/, 9];
                        console.log(t.taskTitle);
                        return [4 /*yield*/, this.api('apDoTask', { "taskType": t.taskType, "taskId": t.id, "itemId": encodeURIComponent(t.taskSourceUrl), "linkId": "LsQNxL7iWDlXUs6cFl-AAg" })];
                    case 6:
                        res = _p.sent();
                        res.success ? console.log('任务完成') : this.o2s(res, '任务失败');
                        return [4 /*yield*/, this.wait(1000)];
                    case 7:
                        _p.sent();
                        return [4 /*yield*/, this.api('apTaskDrawAward', { "taskType": t.taskType, "taskId": t.id, "linkId": "LsQNxL7iWDlXUs6cFl-AAg" })];
                    case 8:
                        res = _p.sent();
                        res.success ? console.log('领奖成功', res.data[0].awardGivenNumber) : this.o2s(res, '领奖失败');
                        _p.label = 9;
                    case 9:
                        _c = _b.next();
                        return [3 /*break*/, 5];
                    case 10: return [3 /*break*/, 13];
                    case 11:
                        e_1_1 = _p.sent();
                        e_1 = { error: e_1_1 };
                        return [3 /*break*/, 13];
                    case 12:
                        try {
                            if (_c && !_c.done && (_k = _b["return"])) _k.call(_b);
                        }
                        finally { if (e_1) throw e_1.error; }
                        return [7 /*endfinally*/];
                    case 13: return [4 /*yield*/, this.api('apTaskList', { "linkId": "L-sOanK_5RJCz7I314FpnQ" })];
                    case 14:
                        apTaskList = _p.sent();
                        _p.label = 15;
                    case 15:
                        _p.trys.push([15, 27, 28, 29]);
                        _d = __values(apTaskList.data), _e = _d.next();
                        _p.label = 16;
                    case 16:
                        if (!!_e.done) return [3 /*break*/, 26];
                        t = _e.value;
                        if (!(t.taskShowTitle === '逛会场得生命值' && !t.taskFinished)) return [3 /*break*/, 25];
                        return [4 /*yield*/, this.api('apTaskDetail', { "linkId": "L-sOanK_5RJCz7I314FpnQ", "taskType": "BROWSE_CHANNEL", "taskId": t.id, "channel": 4 })];
                    case 17:
                        apTaskDetail = _p.sent();
                        return [4 /*yield*/, this.wait(1000)];
                    case 18:
                        _p.sent();
                        taskItemList = apTaskDetail.data.taskItemList;
                        i = apTaskDetail.data.status.userFinishedTimes;
                        _p.label = 19;
                    case 19:
                        if (!(i < apTaskDetail.data.status.finishNeed)) return [3 /*break*/, 25];
                        console.log(taskItemList[i].itemName);
                        return [4 /*yield*/, this.api('apTaskTimeRecord', { "linkId": "L-sOanK_5RJCz7I314FpnQ", "taskId": 817 })];
                    case 20:
                        res = _p.sent();
                        return [4 /*yield*/, this.wait(31000)];
                    case 21:
                        _p.sent();
                        return [4 /*yield*/, this.api('apDoTask', { "linkId": "L-sOanK_5RJCz7I314FpnQ", "taskType": "BROWSE_CHANNEL", "taskId": t.id, "channel": 4, "itemId": encodeURIComponent(taskItemList[i].itemId), "checkVersion": true })];
                    case 22:
                        res = _p.sent();
                        if (res.success) {
                            console.log('任务完成');
                        }
                        else {
                            this.o2s(res, '任务失败');
                        }
                        return [4 /*yield*/, this.wait(3000)];
                    case 23:
                        _p.sent();
                        _p.label = 24;
                    case 24:
                        i++;
                        return [3 /*break*/, 19];
                    case 25:
                        _e = _d.next();
                        return [3 /*break*/, 16];
                    case 26: return [3 /*break*/, 29];
                    case 27:
                        e_2_1 = _p.sent();
                        e_2 = { error: e_2_1 };
                        return [3 /*break*/, 29];
                    case 28:
                        try {
                            if (_e && !_e.done && (_l = _d["return"])) _l.call(_d);
                        }
                        finally { if (e_2) throw e_2.error; }
                        return [7 /*endfinally*/];
                    case 29: return [4 /*yield*/, this.wait(2000)];
                    case 30:
                        _p.sent();
                        return [4 /*yield*/, this.team('runningMyPrize', { "linkId": "L-sOanK_5RJCz7I314FpnQ", "pageSize": 20, "time": null, "ids": null })
                            // res = await this.team('runningMyPrize', {"linkId": "L-sOanK_5RJCz7I314FpnQ", "pageSize": 10, "time": 1660943842000, "ids": [1263040]})
                            // this.o2s(res)
                        ];
                    case 31:
                        res = _p.sent();
                        sum = 0, success = 0;
                        rewardAmount = res.data.rewardAmount;
                        if (!(res.data.runningCashStatus.currentEndTime && res.data.runningCashStatus.status === 0)) return [3 /*break*/, 35];
                        console.log('可提现', rewardAmount);
                        return [4 /*yield*/, this.api('runningPrizeDraw', { "linkId": "L-sOanK_5RJCz7I314FpnQ", "type": 2 })];
                    case 32:
                        res = _p.sent();
                        return [4 /*yield*/, this.wait(2000)];
                    case 33:
                        _p.sent();
                        console.log(res.data.message);
                        return [4 /*yield*/, this.team('runningMyPrize', { "linkId": "L-sOanK_5RJCz7I314FpnQ", "pageSize": 20, "time": null, "ids": null })];
                    case 34:
                        res = _p.sent();
                        _p.label = 35;
                    case 35:
                        try {
                            for (_f = __values(((_a = res === null || res === void 0 ? void 0 : res.data) === null || _a === void 0 ? void 0 : _a.detailVos) || []), _g = _f.next(); !_g.done; _g = _f.next()) {
                                t = _g.value;
                                if (t.amount > 0 && (0, date_fns_1.getDate)(new Date(t.createTime)) === new Date().getDate()) {
                                    sum += t.amount;
                                    success++;
                                }
                                else {
                                    break;
                                }
                            }
                        }
                        catch (e_4_1) { e_4 = { error: e_4_1 }; }
                        finally {
                            try {
                                if (_g && !_g.done && (_m = _f["return"])) _m.call(_f);
                            }
                            finally { if (e_4) throw e_4.error; }
                        }
                        console.log('成功', success);
                        sum = parseFloat(sum.toFixed(2));
                        console.log('收益', sum);
                        return [4 /*yield*/, this.team('runningTeamInfo', { "linkId": "L-sOanK_5RJCz7I314FpnQ" })];
                    case 36:
                        res = _p.sent();
                        if (!!this.captainId) return [3 /*break*/, 37];
                        if (res.data.members.length === 0) {
                            console.log('成为队长');
                            this.captainId = res.data.captainId;
                        }
                        else if (res.data.members.length !== 6) {
                            console.log('队伍未满', res.data.members.length);
                            this.captainId = res.data.captainId;
                        }
                        else {
                            console.log('队伍已满');
                        }
                        return [3 /*break*/, 40];
                    case 37:
                        if (!(this.captainId && res.data.members.length === 0)) return [3 /*break*/, 39];
                        console.log('已有组队ID，未加入队伍');
                        return [4 /*yield*/, this.team('runningJoinTeam', { "linkId": "L-sOanK_5RJCz7I314FpnQ", "captainId": this.captainId })];
                    case 38:
                        res = _p.sent();
                        if (res.code === 0) {
                            console.log('组队成功');
                            try {
                                for (_h = __values(res.data.members), _j = _h.next(); !_j.done; _j = _h.next()) {
                                    member = _j.value;
                                    if (member.captain) {
                                        console.log('队长', member.nickName);
                                        break;
                                    }
                                }
                            }
                            catch (e_5_1) { e_5 = { error: e_5_1 }; }
                            finally {
                                try {
                                    if (_j && !_j.done && (_o = _h["return"])) _o.call(_h);
                                }
                                finally { if (e_5) throw e_5.error; }
                            }
                            if (res.data.members.length === 6) {
                                console.log('队伍已满');
                                this.captainId = '';
                            }
                        }
                        else {
                            this.o2s(res, '组队失败');
                        }
                        return [3 /*break*/, 40];
                    case 39:
                        console.log('已组队', res.data.members.length);
                        console.log('战队收益', res.data.teamSumPrize);
                        _p.label = 40;
                    case 40:
                        this.apiTool = new log_1.H5ST('b6ac3', this.user.UserAgent, process.env.FP_B6AC3 || '', 'https://h5platform.jd.com/swm-stable/people-run/index?activityId=L-sOanK_5RJCz7I314FpnQ', 'https://h5platform.jd.com');
                        return [4 /*yield*/, this.apiTool.__genAlgo()];
                    case 41:
                        _p.sent();
                        return [4 /*yield*/, this.runningPageHome()];
                    case 42:
                        res = _p.sent();
                        console.log('🧧', res.data.runningHomeInfo.prizeValue);
                        console.log('💊', res.data.runningHomeInfo.energy);
                        energy = res.data.runningHomeInfo.energy;
                        return [4 /*yield*/, this.wait(2000)];
                    case 43:
                        _p.sent();
                        console.log('⏳', this.secondsToMinutes(res.data.runningHomeInfo.nextRunningTime / 1000));
                        if (!(res.data.runningHomeInfo.nextRunningTime && res.data.runningHomeInfo.nextRunningTime / 1000 < 300)) return [3 /*break*/, 47];
                        console.log('⏳');
                        return [4 /*yield*/, this.wait(res.data.runningHomeInfo.nextRunningTime + 3000)];
                    case 44:
                        _p.sent();
                        return [4 /*yield*/, this.runningPageHome()];
                    case 45:
                        res = _p.sent();
                        return [4 /*yield*/, this.wait(1000)];
                    case 46:
                        _p.sent();
                        _p.label = 47;
                    case 47: return [4 /*yield*/, this.startRunning(res, assets)];
                    case 48:
                        _p.sent();
                        return [4 /*yield*/, this.runningPageHome()];
                    case 49:
                        res = _p.sent();
                        i = 0;
                        _p.label = 50;
                    case 50:
                        if (!(i < energy)) return [3 /*break*/, 56];
                        if (res.data.runningHomeInfo.nextRunningTime / 1000 < 3000 || new Date().getHours() > 15)
                            return [3 /*break*/, 56];
                        console.log('💉');
                        return [4 /*yield*/, this.api('runningUseEnergyBar', { "linkId": "L-sOanK_5RJCz7I314FpnQ" })];
                    case 51:
                        res = _p.sent();
                        console.log(res.errMsg);
                        return [4 /*yield*/, this.runningPageHome()];
                    case 52:
                        res = _p.sent();
                        return [4 /*yield*/, this.startRunning(res, assets)];
                    case 53:
                        _p.sent();
                        return [4 /*yield*/, this.wait(1000)];
                    case 54:
                        _p.sent();
                        _p.label = 55;
                    case 55:
                        i++;
                        return [3 /*break*/, 50];
                    case 56: return [4 /*yield*/, this.runningPageHome()];
                    case 57:
                        res = _p.sent();
                        console.log('🧧', res.data.runningHomeInfo.prizeValue);
                        return [4 /*yield*/, this.wait(2000)];
                    case 58:
                        _p.sent();
                        return [3 /*break*/, 61];
                    case 59:
                        e_3 = _p.sent();
                        console.log('Error', e_3.message);
                        return [4 /*yield*/, this.wait(3000)];
                    case 60:
                        _p.sent();
                        return [3 /*break*/, 61];
                    case 61: return [2 /*return*/];
                }
            });
        });
    };
    return Joy_Park_Run;
}(TS_JDHelloWorld_1.JDHelloWorld));
new Joy_Park_Run().init().then();
