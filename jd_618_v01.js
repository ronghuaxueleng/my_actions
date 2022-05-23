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
exports.__esModule = true;
var TS_JDHelloWorld_1 = require("./TS_JDHelloWorld");
var log_618_1 = require("./utils/log_618");
var Jd_618 = /** @class */ (function (_super) {
    __extends(Jd_618, _super);
    function Jd_618() {
        var _this = _super.call(this) || this;
        _this.logTool = new log_618_1.Log_618();
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
                                "ss": JSON.stringify({
                                    extraData: {
                                        log: encodeURIComponent(log.log),
                                        sceneid: 'RAhomePageh5'
                                    },
                                    secretp: secretp,
                                    random: log.random
                                })
                            })];
                    case 5:
                        data = _d.sent();
                        this.o2s(data);
                        times++;
                        return [4 /*yield*/, this.wait(1000)];
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
            var res, data, log, secretp, loop, _a, _b, t, e_2_1, _c, _d, t, _e, _f, tp, e_3_1, _g, _h, tp, e_4_1, e_5_1, e_6;
            var e_2, _j, e_5, _k, e_3, _l, e_4, _m;
            return __generator(this, function (_o) {
                switch (_o.label) {
                    case 0:
                        this.user = user;
                        return [4 /*yield*/, this.api('promote_getHomeData', {})];
                    case 1:
                        res = _o.sent();
                        secretp = res.data.result.homeMainInfo.secretp;
                        console.log('当前金币', parseInt(res.data.result.homeMainInfo.raiseInfo.totalScore));
                        return [4 /*yield*/, this.getLog()];
                    case 2:
                        log = _o.sent();
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
                        res = _o.sent();
                        console.log('收金币', parseInt(res.data.result.produceScore));
                        return [4 /*yield*/, this.wait(1000)];
                    case 4:
                        _o.sent();
                        loop = 0;
                        _o.label = 5;
                    case 5:
                        if (!(loop < 3)) return [3 /*break*/, 54];
                        _o.label = 6;
                    case 6:
                        _o.trys.push([6, 50, , 51]);
                        console.log('loop', loop);
                        return [4 /*yield*/, this.api('promote_getTaskDetail', {})];
                    case 7:
                        res = _o.sent();
                        this.o2s(res);
                        _o.label = 8;
                    case 8:
                        _o.trys.push([8, 14, 15, 16]);
                        _a = (e_2 = void 0, __values(res.data.result.lotteryTaskVos[0].badgeAwardVos)), _b = _a.next();
                        _o.label = 9;
                    case 9:
                        if (!!_b.done) return [3 /*break*/, 13];
                        t = _b.value;
                        if (!(t.status === 3)) return [3 /*break*/, 12];
                        return [4 /*yield*/, this.api('promote_getBadgeAward', { "awardToken": t.awardToken })];
                    case 10:
                        data = _o.sent();
                        console.log(t.awardName, parseInt(data.data.result.myAwardVos[0].pointVo.score));
                        return [4 /*yield*/, this.wait(2000)];
                    case 11:
                        _o.sent();
                        _o.label = 12;
                    case 12:
                        _b = _a.next();
                        return [3 /*break*/, 9];
                    case 13: return [3 /*break*/, 16];
                    case 14:
                        e_2_1 = _o.sent();
                        e_2 = { error: e_2_1 };
                        return [3 /*break*/, 16];
                    case 15:
                        try {
                            if (_b && !_b.done && (_j = _a["return"])) _j.call(_a);
                        }
                        finally { if (e_2) throw e_2.error; }
                        return [7 /*endfinally*/];
                    case 16:
                        _o.trys.push([16, 47, 48, 49]);
                        _c = (e_5 = void 0, __values(res.data.result.taskVos)), _d = _c.next();
                        _o.label = 17;
                    case 17:
                        if (!!_d.done) return [3 /*break*/, 46];
                        t = _d.value;
                        if (!t.browseShopVo) return [3 /*break*/, 29];
                        _o.label = 18;
                    case 18:
                        _o.trys.push([18, 27, 28, 29]);
                        _e = (e_3 = void 0, __values(t.browseShopVo)), _f = _e.next();
                        _o.label = 19;
                    case 19:
                        if (!!_f.done) return [3 /*break*/, 26];
                        tp = _f.value;
                        if (!(tp.status === 1)) return [3 /*break*/, 25];
                        console.log(tp.shopName);
                        return [4 /*yield*/, this.getLog()];
                    case 20:
                        log = _o.sent();
                        return [4 /*yield*/, this.api('followShop', { "shopId": tp.shopId, "follow": true, "type": "0" })];
                    case 21:
                        data = _o.sent();
                        console.log('followShop', data.msg);
                        return [4 /*yield*/, this.api('promote_collectScore', {
                                "taskId": t.taskId.toString(),
                                "taskToken": tp.taskToken,
                                "actionType": 1,
                                "ss": JSON.stringify({
                                    extraData: {
                                        log: encodeURIComponent(log.log),
                                        sceneid: 'RAhomePageh5'
                                    },
                                    secretp: secretp,
                                    random: log.random
                                })
                            })
                            // this.o2s(data, 'promote_collectScore')
                        ];
                    case 22:
                        data = _o.sent();
                        // this.o2s(data, 'promote_collectScore')
                        console.log(data.data.bizMsg);
                        return [4 /*yield*/, this.wait(t.waitDuration * 1000 || 1000)];
                    case 23:
                        _o.sent();
                        return [4 /*yield*/, this.qryViewkitCallbackResult(tp.taskToken)
                            // this.o2s(data, 'qryViewkitCallbackResult')
                        ];
                    case 24:
                        data = _o.sent();
                        // this.o2s(data, 'qryViewkitCallbackResult')
                        console.log(data.toast.subTitle);
                        _o.label = 25;
                    case 25:
                        _f = _e.next();
                        return [3 /*break*/, 19];
                    case 26: return [3 /*break*/, 29];
                    case 27:
                        e_3_1 = _o.sent();
                        e_3 = { error: e_3_1 };
                        return [3 /*break*/, 29];
                    case 28:
                        try {
                            if (_f && !_f.done && (_l = _e["return"])) _l.call(_e);
                        }
                        finally { if (e_3) throw e_3.error; }
                        return [7 /*endfinally*/];
                    case 29:
                        if (!t.shoppingActivityVos) return [3 /*break*/, 42];
                        _o.label = 30;
                    case 30:
                        _o.trys.push([30, 40, 41, 42]);
                        _g = (e_4 = void 0, __values(t.shoppingActivityVos)), _h = _g.next();
                        _o.label = 31;
                    case 31:
                        if (!!_h.done) return [3 /*break*/, 39];
                        tp = _h.value;
                        if (!(tp.status === 1)) return [3 /*break*/, 36];
                        return [4 /*yield*/, this.getLog()];
                    case 32:
                        log = _o.sent();
                        console.log(tp.title);
                        return [4 /*yield*/, this.api('promote_collectScore', {
                                "taskId": t.taskId, "taskToken": tp.taskToken, "actionType": 1, "ss": JSON.stringify({
                                    extraData: {
                                        log: encodeURIComponent(log.log),
                                        sceneid: 'RAhomePageh5'
                                    },
                                    secretp: secretp,
                                    random: log.random
                                })
                            })];
                    case 33:
                        data = _o.sent();
                        console.log(data.data.bizMsg);
                        return [4 /*yield*/, this.wait(t.waitDuration * 1000)];
                    case 34:
                        _o.sent();
                        return [4 /*yield*/, this.qryViewkitCallbackResult(tp.taskToken)];
                    case 35:
                        data = _o.sent();
                        console.log(data.toast.subTitle);
                        _o.label = 36;
                    case 36: return [4 /*yield*/, this.wait(2000)];
                    case 37:
                        _o.sent();
                        _o.label = 38;
                    case 38:
                        _h = _g.next();
                        return [3 /*break*/, 31];
                    case 39: return [3 /*break*/, 42];
                    case 40:
                        e_4_1 = _o.sent();
                        e_4 = { error: e_4_1 };
                        return [3 /*break*/, 42];
                    case 41:
                        try {
                            if (_h && !_h.done && (_m = _g["return"])) _m.call(_g);
                        }
                        finally { if (e_4) throw e_4.error; }
                        return [7 /*endfinally*/];
                    case 42:
                        if (!t.taskName.includes('加购')) return [3 /*break*/, 45];
                        console.log(t.taskName);
                        return [4 /*yield*/, this.api('promote_getTaskDetail', { taskId: t.taskId })];
                    case 43:
                        data = _o.sent();
                        return [4 /*yield*/, this.feed(t.taskId, secretp)];
                    case 44:
                        _o.sent();
                        _o.label = 45;
                    case 45:
                        _d = _c.next();
                        return [3 /*break*/, 17];
                    case 46: return [3 /*break*/, 49];
                    case 47:
                        e_5_1 = _o.sent();
                        e_5 = { error: e_5_1 };
                        return [3 /*break*/, 49];
                    case 48:
                        try {
                            if (_d && !_d.done && (_k = _c["return"])) _k.call(_c);
                        }
                        finally { if (e_5) throw e_5.error; }
                        return [7 /*endfinally*/];
                    case 49: return [3 /*break*/, 51];
                    case 50:
                        e_6 = _o.sent();
                        console.log('Error', e_6);
                        return [3 /*break*/, 54];
                    case 51: return [4 /*yield*/, this.wait(5000)];
                    case 52:
                        _o.sent();
                        _o.label = 53;
                    case 53:
                        loop++;
                        return [3 /*break*/, 5];
                    case 54: return [2 /*return*/];
                }
            });
        });
    };
    Jd_618.prototype.help = function (users) {
        return __awaiter(this, void 0, void 0, function () {
            var shareCodeHW, users_1, users_1_1, user, res, log, secretp, memberCount, groupJoinInviteId, e_7_1;
            var e_7, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        shareCodeHW = [];
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 15, 16, 17]);
                        users_1 = __values(users), users_1_1 = users_1.next();
                        _b.label = 2;
                    case 2:
                        if (!!users_1_1.done) return [3 /*break*/, 14];
                        user = users_1_1.value;
                        console.log("\n\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7".concat(user.index + 1, "\u3011").concat(user.UserName, "\n"));
                        this.user = user;
                        res = void 0, log = void 0;
                        return [4 /*yield*/, this.api('promote_getHomeData', {})];
                    case 3:
                        res = _b.sent();
                        secretp = res.data.result.homeMainInfo.secretp;
                        return [4 /*yield*/, this.api('promote_pk_getHomeData', {})];
                    case 4:
                        res = _b.sent();
                        memberCount = res.data.result.groupInfo.memberList.length;
                        console.log('当前队伍有', memberCount, '人');
                        groupJoinInviteId = "";
                        if (memberCount < 20) {
                            groupJoinInviteId = res.data.result.groupInfo.groupJoinInviteId;
                            console.log('队伍未满', groupJoinInviteId);
                        }
                        if (!(shareCodeHW.length === 0)) return [3 /*break*/, 6];
                        return [4 /*yield*/, this.getshareCodeHW('lyb_group')];
                    case 5:
                        shareCodeHW = _b.sent();
                        _b.label = 6;
                    case 6:
                        // let shareCode: string[] = []
                        if (user.index === users.length - 1) {
                            groupJoinInviteId = shareCodeHW[0];
                        }
                        if (!(memberCount === 1)) return [3 /*break*/, 11];
                        return [4 /*yield*/, this.getLog()];
                    case 7:
                        log = _b.sent();
                        return [4 /*yield*/, this.api('promote_pk_joinGroup', {
                                "inviteId": groupJoinInviteId,
                                "ss": JSON.stringify({
                                    extraData: {
                                        log: encodeURIComponent(log.log),
                                        sceneid: 'RAhomePageh5'
                                    },
                                    secretp: secretp,
                                    random: log.random
                                }),
                                "confirmFlag": 1
                            })];
                    case 8:
                        res = _b.sent();
                        return [4 /*yield*/, this.wait(1000)];
                    case 9:
                        _b.sent();
                        if (res.data.bizCode === 0) {
                            console.log('加入队伍成功');
                        }
                        else {
                            console.log(res.data.bizMsg);
                        }
                        return [4 /*yield*/, this.api('promote_pk_getHomeData', {})];
                    case 10:
                        res = _b.sent();
                        this.o2s(res, 'promote_pk_getHomeData');
                        _b.label = 11;
                    case 11: return [4 /*yield*/, this.wait(3000)];
                    case 12:
                        _b.sent();
                        _b.label = 13;
                    case 13:
                        users_1_1 = users_1.next();
                        return [3 /*break*/, 2];
                    case 14: return [3 /*break*/, 17];
                    case 15:
                        e_7_1 = _b.sent();
                        e_7 = { error: e_7_1 };
                        return [3 /*break*/, 17];
                    case 16:
                        try {
                            if (users_1_1 && !users_1_1.done && (_a = users_1["return"])) _a.call(users_1);
                        }
                        finally { if (e_7) throw e_7.error; }
                        return [7 /*endfinally*/];
                    case 17: return [2 /*return*/];
                }
            });
        });
    };
    return Jd_618;
}(TS_JDHelloWorld_1.JDHelloWorld));
new Jd_618().init().then();
