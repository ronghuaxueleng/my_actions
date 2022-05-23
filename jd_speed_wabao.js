"use strict";
/**
 * 极速版-挖宝
 * cron: 2 0,1,6 * * *
 * export FP_CE6C2=""
 * CK1 优先助力 HW.ts
 * TODO 提现
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
var h5st_1 = require("./utils/h5st");
var Jd_speed_wabao = /** @class */ (function (_super) {
    __extends(Jd_speed_wabao, _super);
    function Jd_speed_wabao() {
        var _this = _super.call(this) || this;
        _this.sharecode = [];
        _this.shareCodesSelf = [];
        return _this;
    }
    Jd_speed_wabao.prototype.init = function () {
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
    Jd_speed_wabao.prototype.api = function (fn, body) {
        return __awaiter(this, void 0, void 0, function () {
            var timestamp, h5st;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        timestamp = Date.now();
                        h5st = this.h5stTool.__genH5st({
                            appid: 'activities_platform',
                            body: JSON.stringify(body),
                            client: 'H5',
                            clientVersion: '1.0.0',
                            functionId: fn,
                            t: timestamp.toString()
                        });
                        return [4 /*yield*/, this.get("https://api.m.jd.com/?functionId=".concat(fn, "&body=").concat(encodeURIComponent(JSON.stringify(body)), "&t=").concat(timestamp, "&appid=activities_platform&client=H5&clientVersion=1.0.0&h5st=").concat(h5st), {
                                'Host': 'api.m.jd.com',
                                'Origin': 'https://bnzf.jd.com',
                                'User-Agent': "jdltapp;",
                                'Referer': 'https://bnzf.jd.com/',
                                'Cookie': this.cookie
                            })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Jd_speed_wabao.prototype.main = function (user) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var res, data, _b, _c, t, e_1_1, e_2;
            var e_1, _d;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        this.cookie = user.cookie;
                        this.h5stTool = new h5st_1.H5ST("ce6c2", "jdltapp;", (_a = process.env.FP_CE6C2) !== null && _a !== void 0 ? _a : "9929056438203725");
                        return [4 /*yield*/, this.h5stTool.__genAlgo()];
                    case 1:
                        _e.sent();
                        _e.label = 2;
                    case 2:
                        _e.trys.push([2, 15, , 16]);
                        return [4 /*yield*/, this.api('happyDigHome', { "linkId": "pTTvJeSTrpthgk9ASBVGsw" })];
                    case 3:
                        res = _e.sent();
                        console.log('助力码', res.data.markedPin, res.data.inviteCode);
                        this.shareCodesSelf.push({ inviter: res.data.markedPin, inviteCode: res.data.inviteCode });
                        return [4 /*yield*/, this.api('apTaskList', { "linkId": "pTTvJeSTrpthgk9ASBVGsw" })];
                    case 4:
                        res = _e.sent();
                        return [4 /*yield*/, this.wait(1000)];
                    case 5:
                        _e.sent();
                        _e.label = 6;
                    case 6:
                        _e.trys.push([6, 12, 13, 14]);
                        _b = __values(res.data), _c = _b.next();
                        _e.label = 7;
                    case 7:
                        if (!!_c.done) return [3 /*break*/, 11];
                        t = _c.value;
                        if (!(t.taskType === 'BROWSE_CHANNEL' && t.taskDoTimes === 0 && t.taskLimitTimes === 1)) return [3 /*break*/, 10];
                        console.log(t.taskShowTitle);
                        return [4 /*yield*/, this.api('apDoTask', { "linkId": "pTTvJeSTrpthgk9ASBVGsw", "taskType": "BROWSE_CHANNEL", "taskId": t.id, "channel": 4, "itemId": encodeURIComponent(t.taskSourceUrl), "checkVersion": false })];
                    case 8:
                        data = _e.sent();
                        return [4 /*yield*/, this.wait(1000)];
                    case 9:
                        _e.sent();
                        if (data.success) {
                            console.log('任务完成');
                        }
                        else {
                            this.o2s(data, '任务失败');
                        }
                        _e.label = 10;
                    case 10:
                        _c = _b.next();
                        return [3 /*break*/, 7];
                    case 11: return [3 /*break*/, 14];
                    case 12:
                        e_1_1 = _e.sent();
                        e_1 = { error: e_1_1 };
                        return [3 /*break*/, 14];
                    case 13:
                        try {
                            if (_c && !_c.done && (_d = _b["return"])) _d.call(_b);
                        }
                        finally { if (e_1) throw e_1.error; }
                        return [7 /*endfinally*/];
                    case 14: return [3 /*break*/, 16];
                    case 15:
                        e_2 = _e.sent();
                        console.log('error', e_2);
                        return [3 /*break*/, 16];
                    case 16: return [2 /*return*/];
                }
            });
        });
    };
    Jd_speed_wabao.prototype.help = function (users) {
        return __awaiter(this, void 0, void 0, function () {
            var res, shareCodesHW, shareCodes, users_1, users_1_1, user, shareCodes_1, shareCodes_1_1, code, e_3_1, e_4, e_5_1, users_2, users_2_1, user, blood, gameOver, round, i, j, e_6, e_7_1;
            var e_5, _a, e_3, _b, e_7, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        console.log('内部助力');
                        this.o2s(this.shareCodesSelf);
                        shareCodesHW = [];
                        _d.label = 1;
                    case 1:
                        _d.trys.push([1, 23, 24, 25]);
                        users_1 = __values(users), users_1_1 = users_1.next();
                        _d.label = 2;
                    case 2:
                        if (!!users_1_1.done) return [3 /*break*/, 22];
                        user = users_1_1.value;
                        this.cookie = user.cookie;
                        console.log("\n\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7".concat(user.index + 1, "\u3011").concat(user.UserName, "\n"));
                        _d.label = 3;
                    case 3:
                        _d.trys.push([3, 20, , 21]);
                        return [4 /*yield*/, this.h5stTool.__genAlgo()];
                    case 4:
                        _d.sent();
                        if (!(shareCodesHW.length === 0)) return [3 /*break*/, 6];
                        return [4 /*yield*/, this.getshareCodeHW('fcwb')];
                    case 5:
                        shareCodesHW = _d.sent();
                        _d.label = 6;
                    case 6:
                        if (user.index === 0) {
                            shareCodes = __spreadArray(__spreadArray([], __read(shareCodesHW), false), __read(this.shareCodesSelf), false);
                        }
                        else {
                            shareCodes = __spreadArray(__spreadArray([], __read(this.shareCodesSelf), false), __read(shareCodesHW), false);
                        }
                        _d.label = 7;
                    case 7:
                        _d.trys.push([7, 17, 18, 19]);
                        shareCodes_1 = (e_3 = void 0, __values(shareCodes)), shareCodes_1_1 = shareCodes_1.next();
                        _d.label = 8;
                    case 8:
                        if (!!shareCodes_1_1.done) return [3 /*break*/, 16];
                        code = shareCodes_1_1.value;
                        console.log("\u8D26\u53F7".concat(user.index + 1, " ").concat(user.UserName, " \u53BB\u52A9\u529B ").concat(code.inviteCode));
                        return [4 /*yield*/, this.api('happyDigHelp', { "linkId": "pTTvJeSTrpthgk9ASBVGsw", "inviter": code.inviter, "inviteCode": code.inviteCode })];
                    case 9:
                        res = _d.sent();
                        if (!(res.code === 0)) return [3 /*break*/, 11];
                        console.log('助力成功');
                        return [4 /*yield*/, this.wait(2000)];
                    case 10:
                        _d.sent();
                        return [3 /*break*/, 16];
                    case 11:
                        if (!(res.code === 16144)) return [3 /*break*/, 13];
                        console.log('上限');
                        return [4 /*yield*/, this.wait(2000)];
                    case 12:
                        _d.sent();
                        return [3 /*break*/, 16];
                    case 13:
                        console.log(res.code, res.errMsg);
                        return [4 /*yield*/, this.wait(2000)];
                    case 14:
                        _d.sent();
                        _d.label = 15;
                    case 15:
                        shareCodes_1_1 = shareCodes_1.next();
                        return [3 /*break*/, 8];
                    case 16: return [3 /*break*/, 19];
                    case 17:
                        e_3_1 = _d.sent();
                        e_3 = { error: e_3_1 };
                        return [3 /*break*/, 19];
                    case 18:
                        try {
                            if (shareCodes_1_1 && !shareCodes_1_1.done && (_b = shareCodes_1["return"])) _b.call(shareCodes_1);
                        }
                        finally { if (e_3) throw e_3.error; }
                        return [7 /*endfinally*/];
                    case 19: return [3 /*break*/, 21];
                    case 20:
                        e_4 = _d.sent();
                        console.log('error', e_4);
                        return [3 /*break*/, 21];
                    case 21:
                        users_1_1 = users_1.next();
                        return [3 /*break*/, 2];
                    case 22: return [3 /*break*/, 25];
                    case 23:
                        e_5_1 = _d.sent();
                        e_5 = { error: e_5_1 };
                        return [3 /*break*/, 25];
                    case 24:
                        try {
                            if (users_1_1 && !users_1_1.done && (_a = users_1["return"])) _a.call(users_1);
                        }
                        finally { if (e_5) throw e_5.error; }
                        return [7 /*endfinally*/];
                    case 25:
                        _d.trys.push([25, 44, 45, 46]);
                        users_2 = __values(users), users_2_1 = users_2.next();
                        _d.label = 26;
                    case 26:
                        if (!!users_2_1.done) return [3 /*break*/, 43];
                        user = users_2_1.value;
                        this.cookie = user.cookie;
                        console.log("\n\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7".concat(user.index + 1, "\u3011").concat(user.UserName, "\n"));
                        return [4 /*yield*/, this.h5stTool.__genAlgo()];
                    case 27:
                        _d.sent();
                        return [4 /*yield*/, this.api('happyDigHome', { "linkId": "pTTvJeSTrpthgk9ASBVGsw" })];
                    case 28:
                        res = _d.sent();
                        blood = res.data.blood, gameOver = false;
                        if (blood <= 1)
                            gameOver = true;
                        console.log('❤️', blood);
                        round = 1;
                        _d.label = 29;
                    case 29:
                        if (!(round < 4)) return [3 /*break*/, 42];
                        if (gameOver)
                            return [3 /*break*/, 42];
                        i = 0;
                        _d.label = 30;
                    case 30:
                        if (!(i < 4)) return [3 /*break*/, 41];
                        _d.label = 31;
                    case 31:
                        _d.trys.push([31, 39, , 40]);
                        if (gameOver) {
                            console.log('能量剩余1，跳过 A');
                            return [3 /*break*/, 41];
                        }
                        j = 0;
                        _d.label = 32;
                    case 32:
                        if (!(j < 4)) return [3 /*break*/, 38];
                        if (gameOver) {
                            console.log('能量剩余1，跳过 B');
                            return [3 /*break*/, 38];
                        }
                        return [4 /*yield*/, this.api('happyDigDo', { "round": round, "rowIdx": i, "colIdx": j, "linkId": "pTTvJeSTrpthgk9ASBVGsw" })];
                    case 33:
                        res = _d.sent();
                        if (res.data.chunk.type === 1) {
                            console.log('👎');
                        }
                        else if (res.data.chunk.type === 2) {
                            console.log('🧧', parseFloat(res.data.chunk.value));
                        }
                        else if (res.data.chunk.type === 3) {
                            console.log('💰', parseFloat(res.data.chunk.value));
                        }
                        else if (res.data.chunk.type === 4) {
                            console.log('💣');
                        }
                        else {
                            this.o2s(res, '🤔️');
                        }
                        return [4 /*yield*/, this.wait(3000)];
                    case 34:
                        _d.sent();
                        return [4 /*yield*/, this.api('happyDigHome', { "linkId": "pTTvJeSTrpthgk9ASBVGsw" })];
                    case 35:
                        res = _d.sent();
                        console.log('❤️', res.data.blood);
                        if (res.data.blood === 1) {
                            gameOver = true;
                            console.log('能量剩余1，退出');
                            return [3 /*break*/, 38];
                        }
                        return [4 /*yield*/, this.wait(2000)];
                    case 36:
                        _d.sent();
                        _d.label = 37;
                    case 37:
                        j++;
                        return [3 /*break*/, 32];
                    case 38: return [3 /*break*/, 40];
                    case 39:
                        e_6 = _d.sent();
                        console.log('error', e_6);
                        gameOver = true;
                        return [3 /*break*/, 40];
                    case 40:
                        i++;
                        return [3 /*break*/, 30];
                    case 41:
                        round++;
                        return [3 /*break*/, 29];
                    case 42:
                        users_2_1 = users_2.next();
                        return [3 /*break*/, 26];
                    case 43: return [3 /*break*/, 46];
                    case 44:
                        e_7_1 = _d.sent();
                        e_7 = { error: e_7_1 };
                        return [3 /*break*/, 46];
                    case 45:
                        try {
                            if (users_2_1 && !users_2_1.done && (_c = users_2["return"])) _c.call(users_2);
                        }
                        finally { if (e_7) throw e_7.error; }
                        return [7 /*endfinally*/];
                    case 46: return [2 /*return*/];
                }
            });
        });
    };
    return Jd_speed_wabao;
}(TS_JDHelloWorld_1.JDHelloWorld));
new Jd_speed_wabao().init().then();
