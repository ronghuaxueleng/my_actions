"use strict";
/**
 * 京东-领现金
 * 兼容panda api和本地sign
 *
 * 使用panda sign
 * export PANDA_TOKEN=""
 * 本地sign算法 import {getSign} from './test/sign'
 */
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
exports.__esModule = true;
var TS_USER_AGENTS_1 = require("./TS_USER_AGENTS");
var fs_1 = require("fs");
var cookie = '', res = '', data, UserName, PANDA_TOKEN = undefined, getSign = undefined;
if ((0, fs_1.existsSync)('./test/sign.ts')) {
    getSign = require('./test/sign').getSign;
    console.log('使用本地sign');
}
else {
    console.log('未找到本地sign');
    PANDA_TOKEN = process.env.PANDA_TOKEN;
    if (PANDA_TOKEN) {
        console.log('使用panda api');
        getSign = function (fn, body) { return __awaiter(void 0, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (0, TS_USER_AGENTS_1.post)('https://api.jds.codes/jd/sign', { 'fn': fn, 'body': body }, {
                            'Authorization': "Bearer ".concat(PANDA_TOKEN)
                        })];
                    case 1:
                        data = (_a.sent()).data;
                        return [2 /*return*/, data.sign];
                }
            });
        }); };
    }
    else {
        console.log('未设置PANDA_TOKEN\n脚本退出');
        process.exit(0);
    }
}
!(function () { return __awaiter(void 0, void 0, void 0, function () {
    var cookiesArr, _loop_1, _a, _b, _c, index, value, e_1_1;
    var e_1, _d;
    var _e, _f, _g;
    return __generator(this, function (_h) {
        switch (_h.label) {
            case 0: return [4 /*yield*/, (0, TS_USER_AGENTS_1.getCookie)()];
            case 1:
                cookiesArr = _h.sent();
                _loop_1 = function (index, value) {
                    var type, otherTaskNum, taskNum, i, _j, _k, t, e_2_1;
                    var e_2, _l;
                    return __generator(this, function (_m) {
                        switch (_m.label) {
                            case 0:
                                cookie = value;
                                UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                                console.log("\n\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7".concat(index + 1, "\u3011").concat(UserName, "\n"));
                                return [4 /*yield*/, api('cash_homePage', {})];
                            case 1:
                                res = _m.sent();
                                if (!(res.data.result.signedStatus !== 1)) return [3 /*break*/, 4];
                                console.log('今日未签到');
                                return [4 /*yield*/, api('cash_sign', { "remind": 0, "inviteCode": "", "type": 0, "breakReward": 0 })];
                            case 2:
                                data = _m.sent();
                                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
                            case 3:
                                _m.sent();
                                console.log('签到成功');
                                _m.label = 4;
                            case 4: return [4 /*yield*/, api('cash_homePage', {})];
                            case 5:
                                res = _m.sent();
                                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
                            case 6:
                                _m.sent();
                                type = [2, 4, 31, 16, 3, 5, 17, 21];
                                otherTaskNum = res.data.result.taskInfos.filter(function (item) { return !type.includes(item.type); }).length;
                                taskNum = res.data.result.taskInfos.filter(function (item) { return type.includes(item.type); }).length;
                                console.log(taskNum, otherTaskNum);
                                i = 0;
                                _m.label = 7;
                            case 7:
                                if (!(i < 10)) return [3 /*break*/, 20];
                                return [4 /*yield*/, api('cash_homePage', {})];
                            case 8:
                                res = _m.sent();
                                if (res.data.result.taskInfos.filter(function (item) { return type.includes(item.type) && item.doTimes === item.times; }).length === taskNum) {
                                    console.log('任务全部完成');
                                    return [3 /*break*/, 20];
                                }
                                _m.label = 9;
                            case 9:
                                _m.trys.push([9, 15, 16, 17]);
                                _j = (e_2 = void 0, __values(((_f = (_e = res === null || res === void 0 ? void 0 : res.data) === null || _e === void 0 ? void 0 : _e.result) === null || _f === void 0 ? void 0 : _f.taskInfos) || [])), _k = _j.next();
                                _m.label = 10;
                            case 10:
                                if (!!_k.done) return [3 /*break*/, 14];
                                t = _k.value;
                                if (!(t.doTimes < t.times && t.type !== 7)) return [3 /*break*/, 13];
                                console.log(t.name);
                                return [4 /*yield*/, api('cash_doTask', { "type": t.type, "taskInfo": t.desc })];
                            case 11:
                                data = _m.sent();
                                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(t.duration * 1000 || 1000)];
                            case 12:
                                _m.sent();
                                if (data.data.bizCode === 0) {
                                    console.log('任务完成', (_g = data.data.result.totalMoney) !== null && _g !== void 0 ? _g : '');
                                    return [3 /*break*/, 14];
                                }
                                else {
                                    console.log('任务失败', JSON.stringify(data));
                                    return [3 /*break*/, 14];
                                }
                                _m.label = 13;
                            case 13:
                                _k = _j.next();
                                return [3 /*break*/, 10];
                            case 14: return [3 /*break*/, 17];
                            case 15:
                                e_2_1 = _m.sent();
                                e_2 = { error: e_2_1 };
                                return [3 /*break*/, 17];
                            case 16:
                                try {
                                    if (_k && !_k.done && (_l = _j["return"])) _l.call(_j);
                                }
                                finally { if (e_2) throw e_2.error; }
                                return [7 /*endfinally*/];
                            case 17: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
                            case 18:
                                _m.sent();
                                _m.label = 19;
                            case 19:
                                i++;
                                return [3 /*break*/, 7];
                            case 20: return [2 /*return*/];
                        }
                    });
                };
                _h.label = 2;
            case 2:
                _h.trys.push([2, 7, 8, 9]);
                _a = __values(cookiesArr.entries()), _b = _a.next();
                _h.label = 3;
            case 3:
                if (!!_b.done) return [3 /*break*/, 6];
                _c = __read(_b.value, 2), index = _c[0], value = _c[1];
                return [5 /*yield**/, _loop_1(index, value)];
            case 4:
                _h.sent();
                _h.label = 5;
            case 5:
                _b = _a.next();
                return [3 /*break*/, 3];
            case 6: return [3 /*break*/, 9];
            case 7:
                e_1_1 = _h.sent();
                e_1 = { error: e_1_1 };
                return [3 /*break*/, 9];
            case 8:
                try {
                    if (_b && !_b.done && (_d = _a["return"])) _d.call(_a);
                }
                finally { if (e_1) throw e_1.error; }
                return [7 /*endfinally*/];
            case 9: return [2 /*return*/];
        }
    });
}); })();
function api(fn, body) {
    return __awaiter(this, void 0, void 0, function () {
        var sign, _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (!PANDA_TOKEN) return [3 /*break*/, 2];
                    return [4 /*yield*/, getSign(fn, body)];
                case 1:
                    _a = _b.sent();
                    return [3 /*break*/, 3];
                case 2:
                    _a = getSign(fn, body);
                    _b.label = 3;
                case 3:
                    sign = _a;
                    return [4 /*yield*/, (0, TS_USER_AGENTS_1.post)("https://api.m.jd.com/client.action?functionId=".concat(fn), sign, {
                            'Host': 'api.m.jd.com',
                            'Cookie': cookie,
                            'content-type': 'application/x-www-form-urlencoded',
                            'user-agent': TS_USER_AGENTS_1["default"],
                            'referer': ''
                        })];
                case 4: return [2 /*return*/, _b.sent()];
            }
        });
    });
}
