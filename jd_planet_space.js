"use strict";
/**
 * 515券民空间站
 * CK1 -> 优先HW.ts
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
var Planet_Space = /** @class */ (function (_super) {
    __extends(Planet_Space, _super);
    function Planet_Space() {
        var _this = _super.call(this) || this;
        _this.shareCodeSelf = [];
        return _this;
    }
    Planet_Space.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.run(new Planet_Space(), this.help)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Planet_Space.prototype.api = function (fn, body) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.post("https://api.m.jd.com/api?functionId=".concat(fn, "&appid=coupon-space&client=wh5&t=").concat(Date.now()), "body=".concat(encodeURIComponent(JSON.stringify(body))), {
                            'Host': 'api.m.jd.com',
                            'Origin': 'https://h5.m.jd.com',
                            'User-Agent': 'jdapp;',
                            'Referer': 'https://h5.m.jd.com/',
                            'Cookie': this.user.cookie
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Planet_Space.prototype.main = function (user) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () {
            var res, i, encryptProjectId, specialComponentTaskPid, specialComponentTaskInfo, componentTaskInfo, remain, specialComponentTaskInfo_1, specialComponentTaskInfo_1_1, t, e_1_1, componentTaskInfo_1, componentTaskInfo_1_1, t, e_2_1, drawCardChance, i, code;
            var e_1, _c, e_2, _d;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        this.user = user;
                        i = 0;
                        _e.label = 1;
                    case 1:
                        if (!(i < 4)) return [3 /*break*/, 23];
                        return [4 /*yield*/, this.api('explorePlanet_taskList', { "activityId": 1 })];
                    case 2:
                        res = _e.sent();
                        encryptProjectId = res.data.result.componentTaskPid;
                        specialComponentTaskPid = res.data.result.specialComponentTaskPid;
                        specialComponentTaskInfo = res.data.result.specialComponentTaskInfo;
                        componentTaskInfo = res.data.result.componentTaskInfo;
                        remain = res.data.result.componentTaskInfo.some(function (item) { return !item.taskDesc.includes('加入品牌') && item.completedItemCount !== item.groupItemCount; });
                        _e.label = 3;
                    case 3:
                        _e.trys.push([3, 8, 9, 10]);
                        specialComponentTaskInfo_1 = (e_1 = void 0, __values(specialComponentTaskInfo)), specialComponentTaskInfo_1_1 = specialComponentTaskInfo_1.next();
                        _e.label = 4;
                    case 4:
                        if (!!specialComponentTaskInfo_1_1.done) return [3 /*break*/, 7];
                        t = specialComponentTaskInfo_1_1.value;
                        console.log('特殊任务', t.taskDesc);
                        return [4 /*yield*/, this.api('explorePlanet_taskReport', { "activityId": 1, "encryptTaskId": t.encryptTaskId, "encryptProjectId": specialComponentTaskPid, "itemId": t.itemId })];
                    case 5:
                        res = _e.sent();
                        console.log(res.data.biz_msg);
                        _e.label = 6;
                    case 6:
                        specialComponentTaskInfo_1_1 = specialComponentTaskInfo_1.next();
                        return [3 /*break*/, 4];
                    case 7: return [3 /*break*/, 10];
                    case 8:
                        e_1_1 = _e.sent();
                        e_1 = { error: e_1_1 };
                        return [3 /*break*/, 10];
                    case 9:
                        try {
                            if (specialComponentTaskInfo_1_1 && !specialComponentTaskInfo_1_1.done && (_c = specialComponentTaskInfo_1["return"])) _c.call(specialComponentTaskInfo_1);
                        }
                        finally { if (e_1) throw e_1.error; }
                        return [7 /*endfinally*/];
                    case 10:
                        console.log(remain);
                        if (!remain) return [3 /*break*/, 21];
                        _e.label = 11;
                    case 11:
                        _e.trys.push([11, 17, 18, 19]);
                        componentTaskInfo_1 = (e_2 = void 0, __values(componentTaskInfo)), componentTaskInfo_1_1 = componentTaskInfo_1.next();
                        _e.label = 12;
                    case 12:
                        if (!!componentTaskInfo_1_1.done) return [3 /*break*/, 16];
                        t = componentTaskInfo_1_1.value;
                        if (!(t.completedItemCount !== t.groupItemCount && !t.taskDesc.includes('加入品牌'))) return [3 /*break*/, 15];
                        console.log(t.taskDesc);
                        return [4 /*yield*/, this.api('explorePlanet_taskReport', { "activityId": 1, "encryptTaskId": t.encryptTaskId, "encryptProjectId": encryptProjectId, "itemId": t.itemId })];
                    case 13:
                        res = _e.sent();
                        return [4 /*yield*/, this.wait(t.waitDuration || 1000)];
                    case 14:
                        _e.sent();
                        this.o2s(res);
                        _e.label = 15;
                    case 15:
                        componentTaskInfo_1_1 = componentTaskInfo_1.next();
                        return [3 /*break*/, 12];
                    case 16: return [3 /*break*/, 19];
                    case 17:
                        e_2_1 = _e.sent();
                        e_2 = { error: e_2_1 };
                        return [3 /*break*/, 19];
                    case 18:
                        try {
                            if (componentTaskInfo_1_1 && !componentTaskInfo_1_1.done && (_d = componentTaskInfo_1["return"])) _d.call(componentTaskInfo_1);
                        }
                        finally { if (e_2) throw e_2.error; }
                        return [7 /*endfinally*/];
                    case 19: return [4 /*yield*/, this.wait(3000)];
                    case 20:
                        _e.sent();
                        return [3 /*break*/, 22];
                    case 21: return [3 /*break*/, 23];
                    case 22:
                        i++;
                        return [3 /*break*/, 1];
                    case 23: return [4 /*yield*/, this.api('explorePlanet_homePage', { "channel": "1" })];
                    case 24:
                        res = _e.sent();
                        drawCardChance = res.data.result.drawCardChance || 0;
                        console.log('抽奖次数', drawCardChance);
                        i = 0;
                        _e.label = 25;
                    case 25:
                        if (!(i < drawCardChance)) return [3 /*break*/, 29];
                        return [4 /*yield*/, this.api('explorePlanet_explore', { "activityId": 1 })];
                    case 26:
                        res = _e.sent();
                        this.o2s(res);
                        if (res.data.result.cardInfo) {
                            console.log('抽到卡片');
                        }
                        else if (res.data.result.couponInfo) {
                            console.log('抽到券');
                        }
                        return [4 /*yield*/, this.wait(2000)];
                    case 27:
                        _e.sent();
                        _e.label = 28;
                    case 28:
                        i++;
                        return [3 /*break*/, 25];
                    case 29: return [4 /*yield*/, this.api('explorePlanet_taskList', { "activityId": 1 })];
                    case 30:
                        res = _e.sent();
                        if (!!((_b = (_a = res.data.result) === null || _a === void 0 ? void 0 : _a.assistTaskInfo) === null || _b === void 0 ? void 0 : _b.groupId)) return [3 /*break*/, 32];
                        return [4 /*yield*/, this.api('explorePlanet_openGroup', { "activityId": 1 })];
                    case 31:
                        res = _e.sent();
                        code = res.data.result.assistTaskInfo.groupId;
                        return [3 /*break*/, 33];
                    case 32:
                        code = res.data.result.assistTaskInfo.groupId;
                        _e.label = 33;
                    case 33:
                        console.log('助力码', code);
                        this.shareCodeSelf.push(code);
                        return [2 /*return*/];
                }
            });
        });
    };
    Planet_Space.prototype.help = function (users) {
        return __awaiter(this, void 0, void 0, function () {
            var full, shareCodeHW, users_1, users_1_1, user, shareCode, shareCode_1, shareCode_1_1, code, res, e_3, e_4_1, e_5_1;
            var e_5, _a, e_4, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        this.o2s(this.shareCodeSelf, '内部助力码');
                        full = ['b'], shareCodeHW = [];
                        _c.label = 1;
                    case 1:
                        _c.trys.push([1, 20, 21, 22]);
                        users_1 = __values(users), users_1_1 = users_1.next();
                        _c.label = 2;
                    case 2:
                        if (!!users_1_1.done) return [3 /*break*/, 19];
                        user = users_1_1.value;
                        this.user = user;
                        if (!(shareCodeHW.length === 0)) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.getshareCodeHW('space')];
                    case 3:
                        shareCodeHW = _c.sent();
                        _c.label = 4;
                    case 4:
                        shareCode = user.index === 0
                            ? Array.from(new Set(__spreadArray(__spreadArray([], __read(shareCodeHW), false), __read(this.shareCodeSelf), false)))
                            : Array.from(new Set(__spreadArray(__spreadArray([], __read(this.shareCodeSelf), false), __read(shareCodeHW), false)));
                        console.log("\n\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7".concat(user.index + 1, "\u3011").concat(user.UserName, "\n"));
                        _c.label = 5;
                    case 5:
                        _c.trys.push([5, 14, 15, 16]);
                        shareCode_1 = (e_4 = void 0, __values(shareCode)), shareCode_1_1 = shareCode_1.next();
                        _c.label = 6;
                    case 6:
                        if (!!shareCode_1_1.done) return [3 /*break*/, 13];
                        code = shareCode_1_1.value;
                        if (full.includes(code))
                            return [3 /*break*/, 12];
                        _c.label = 7;
                    case 7:
                        _c.trys.push([7, 9, , 10]);
                        console.log("\u8D26\u53F7".concat(user.index + 1, " ").concat(user.UserName, " \u53BB\u52A9\u529B ").concat(code));
                        return [4 /*yield*/, this.api('explorePlanet_assist', { "activityId": "1", "groupId": code })];
                    case 8:
                        res = _c.sent();
                        console.log(res.data.biz_msg);
                        if (res.data.biz_msg === '今日助力机会已用完，去完成自己的活动吧') {
                            console.log('上限');
                            return [3 /*break*/, 13];
                        }
                        return [3 /*break*/, 10];
                    case 9:
                        e_3 = _c.sent();
                        console.log(e_3);
                        return [3 /*break*/, 13];
                    case 10: return [4 /*yield*/, this.wait(2000)];
                    case 11:
                        _c.sent();
                        _c.label = 12;
                    case 12:
                        shareCode_1_1 = shareCode_1.next();
                        return [3 /*break*/, 6];
                    case 13: return [3 /*break*/, 16];
                    case 14:
                        e_4_1 = _c.sent();
                        e_4 = { error: e_4_1 };
                        return [3 /*break*/, 16];
                    case 15:
                        try {
                            if (shareCode_1_1 && !shareCode_1_1.done && (_b = shareCode_1["return"])) _b.call(shareCode_1);
                        }
                        finally { if (e_4) throw e_4.error; }
                        return [7 /*endfinally*/];
                    case 16: return [4 /*yield*/, this.wait(2000)];
                    case 17:
                        _c.sent();
                        _c.label = 18;
                    case 18:
                        users_1_1 = users_1.next();
                        return [3 /*break*/, 2];
                    case 19: return [3 /*break*/, 22];
                    case 20:
                        e_5_1 = _c.sent();
                        e_5 = { error: e_5_1 };
                        return [3 /*break*/, 22];
                    case 21:
                        try {
                            if (users_1_1 && !users_1_1.done && (_a = users_1["return"])) _a.call(users_1);
                        }
                        finally { if (e_5) throw e_5.error; }
                        return [7 /*endfinally*/];
                    case 22: return [2 /*return*/];
                }
            });
        });
    };
    return Planet_Space;
}(TS_JDHelloWorld_1.JDHelloWorld));
new Planet_Space().init().then();
