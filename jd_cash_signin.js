"use strict";
/**
 * 京东-领现金
 * cron: 30 7,10 * * *
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
var TS_JDHelloWorld_1 = require("./TS_JDHelloWorld");
var Jd_cash_signin = /** @class */ (function (_super) {
    __extends(Jd_cash_signin, _super);
    function Jd_cash_signin() {
        return _super.call(this) || this;
    }
    Jd_cash_signin.prototype.init = function () {
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
    Jd_cash_signin.prototype.api = function (fn, body) {
        return __awaiter(this, void 0, void 0, function () {
            var sign;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getSign(fn, body)];
                    case 1:
                        sign = _a.sent();
                        return [4 /*yield*/, this.post("https://api.m.jd.com/client.action?functionId=".concat(fn), sign, {
                                'Host': 'api.m.jd.com',
                                'Cookie': this.cookie,
                                'user-agent': 'jdapp;'
                            })];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Jd_cash_signin.prototype.main = function (user) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function () {
            var res, type, data, otherTaskNum, taskNum, i, _d, _e, t, e_1_1;
            var e_1, _f;
            return __generator(this, function (_g) {
                switch (_g.label) {
                    case 0:
                        this.cookie = user.cookie;
                        return [4 /*yield*/, this.api('cash_homePage', {})];
                    case 1:
                        res = _g.sent();
                        if (!(res.data.result.signedStatus !== 1)) return [3 /*break*/, 4];
                        console.log('今日未签到');
                        return [4 /*yield*/, this.api('cash_sign', { "remind": 0, "inviteCode": "", "type": 0, "breakReward": 0 })];
                    case 2:
                        _g.sent();
                        return [4 /*yield*/, this.wait(1000)];
                    case 3:
                        _g.sent();
                        console.log('签到成功');
                        return [3 /*break*/, 5];
                    case 4:
                        console.log('今日已签到');
                        _g.label = 5;
                    case 5: return [4 /*yield*/, this.api('cash_homePage', {})];
                    case 6:
                        res = _g.sent();
                        type = [2, 4, 31, 16, 3, 5, 17, 21];
                        otherTaskNum = res.data.result.taskInfos.filter(function (item) { return !type.includes(item.type); }).length;
                        taskNum = res.data.result.taskInfos.filter(function (item) { return type.includes(item.type); }).length;
                        console.log(taskNum, otherTaskNum);
                        i = 0;
                        _g.label = 7;
                    case 7:
                        if (!(i < 10)) return [3 /*break*/, 20];
                        return [4 /*yield*/, this.api('cash_homePage', {})];
                    case 8:
                        res = _g.sent();
                        if (res.data.result.taskInfos.filter(function (item) { return type.includes(item.type) && item.doTimes === item.times; }).length === taskNum) {
                            console.log('任务全部完成');
                            return [3 /*break*/, 20];
                        }
                        _g.label = 9;
                    case 9:
                        _g.trys.push([9, 15, 16, 17]);
                        _d = (e_1 = void 0, __values(((_b = (_a = res === null || res === void 0 ? void 0 : res.data) === null || _a === void 0 ? void 0 : _a.result) === null || _b === void 0 ? void 0 : _b.taskInfos) || [])), _e = _d.next();
                        _g.label = 10;
                    case 10:
                        if (!!_e.done) return [3 /*break*/, 14];
                        t = _e.value;
                        if (!(t.doTimes < t.times && t.type !== 7)) return [3 /*break*/, 13];
                        console.log(t.name);
                        return [4 /*yield*/, this.api('cash_doTask', { "type": t.type, "taskInfo": t.desc })];
                    case 11:
                        data = _g.sent();
                        return [4 /*yield*/, this.wait(t.duration * 1000 || 1000)];
                    case 12:
                        _g.sent();
                        if (data.data.bizCode === 0) {
                            console.log('任务完成', (_c = data.data.result.totalMoney) !== null && _c !== void 0 ? _c : '');
                            return [3 /*break*/, 14];
                        }
                        else {
                            console.log('任务失败', JSON.stringify(data));
                            return [3 /*break*/, 14];
                        }
                        _g.label = 13;
                    case 13:
                        _e = _d.next();
                        return [3 /*break*/, 10];
                    case 14: return [3 /*break*/, 17];
                    case 15:
                        e_1_1 = _g.sent();
                        e_1 = { error: e_1_1 };
                        return [3 /*break*/, 17];
                    case 16:
                        try {
                            if (_e && !_e.done && (_f = _d["return"])) _f.call(_d);
                        }
                        finally { if (e_1) throw e_1.error; }
                        return [7 /*endfinally*/];
                    case 17: return [4 /*yield*/, this.wait(2000)];
                    case 18:
                        _g.sent();
                        _g.label = 19;
                    case 19:
                        i++;
                        return [3 /*break*/, 7];
                    case 20: return [2 /*return*/];
                }
            });
        });
    };
    return Jd_cash_signin;
}(TS_JDHelloWorld_1.JDHelloWorld));
new Jd_cash_signin().init().then();
