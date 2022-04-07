"use strict";
/**
 * 京喜-首页-牛牛福利
 * 助力 内部 -> HW.ts
 * 1 0,9,19,23 * * *
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
var axios_1 = require("axios");
var TS_USER_AGENTS_1 = require("./TS_USER_AGENTS");
var cookie = '', UserName, index, res = '';
var shareCodeSelf = [], shareCode = [], shareCodeHW = [];
!(function () { return __awaiter(void 0, void 0, void 0, function () {
    var cookiesArr, i, coin, _a, _b, t, e_1_1, surplusTimes, j, i, shareCode_1, shareCode_1_1, code, e_2_1;
    var e_1, _c, e_2, _d;
    return __generator(this, function (_e) {
        switch (_e.label) {
            case 0: return [4 /*yield*/, (0, TS_USER_AGENTS_1.requireConfig)()];
            case 1:
                cookiesArr = _e.sent();
                i = 0;
                _e.label = 2;
            case 2:
                if (!(i < cookiesArr.length)) return [3 /*break*/, 24];
                cookie = cookiesArr[i];
                UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                index = i + 1;
                console.log("\n\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7".concat(index, "\u3011").concat(UserName, "\n"));
                return [4 /*yield*/, api('sign/UserSignNew', 'sceneval,source', { source: '' })];
            case 3:
                res = _e.sent();
                console.log('签到');
                console.log('助力码', res.data.token);
                shareCodeSelf.push(res.data.token);
                coin = res.data.pgAmountTotal;
                console.log('金币', coin);
                return [4 /*yield*/, api('task/QueryPgTaskCfg', 'sceneval', {})];
            case 4:
                /*
                res = await api('task/QueryUserTask', 'sceneval,taskType', {taskType: 0})
                let tasks: number[] = []
                if (res.datas) {
                  for (let t of res.datas) {
                    if (t.state !== 2)
                      tasks.push(t.taskid)
                  }
                } else {
                  res = await api('task/QueryPgTaskCfg', 'sceneval', {})
                  if (tasks.length === 0) {
                    for (let t of res.data.tasks) {
                      tasks.push(t.taskid)
                    }
                  }
                }
                console.log('tasks:', tasks)
                await wait(2000)
            
                 */
                res = _e.sent();
                _e.label = 5;
            case 5:
                _e.trys.push([5, 13, 14, 15]);
                _a = (e_1 = void 0, __values(res.data.tasks)), _b = _a.next();
                _e.label = 6;
            case 6:
                if (!!_b.done) return [3 /*break*/, 12];
                t = _b.value;
                console.log(t.taskName);
                return [4 /*yield*/, api('task/drawUserTask', 'sceneval,taskid', { taskid: t.taskId })];
            case 7:
                res = _e.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(t.param7 * 1000 + 1000)];
            case 8:
                _e.sent();
                return [4 /*yield*/, api('task/UserTaskFinish', 'sceneval,taskid', { taskid: t.taskId })];
            case 9:
                res = _e.sent();
                (0, TS_USER_AGENTS_1.o2s)(res);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 10:
                _e.sent();
                _e.label = 11;
            case 11:
                _b = _a.next();
                return [3 /*break*/, 6];
            case 12: return [3 /*break*/, 15];
            case 13:
                e_1_1 = _e.sent();
                e_1 = { error: e_1_1 };
                return [3 /*break*/, 15];
            case 14:
                try {
                    if (_b && !_b.done && (_c = _a["return"])) _c.call(_a);
                }
                finally { if (e_1) throw e_1.error; }
                return [7 /*endfinally*/];
            case 15: return [4 /*yield*/, api('active/LuckyTwistUserInfo', 'sceneval', {})];
            case 16:
                res = _e.sent();
                surplusTimes = res.data.surplusTimes;
                console.log('剩余抽奖次数', surplusTimes);
                j = 0;
                _e.label = 17;
            case 17:
                if (!(j < surplusTimes && coin >= 10)) return [3 /*break*/, 21];
                return [4 /*yield*/, api('active/LuckyTwistDraw', 'active,activedesc,sceneval', { active: 'rwjs_fk1111', activedesc: encodeURIComponent('幸运扭蛋机抽奖') })];
            case 18:
                res = _e.sent();
                console.log('抽奖成功', res.data);
                coin -= 10;
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(5000)];
            case 19:
                _e.sent();
                _e.label = 20;
            case 20:
                j++;
                return [3 /*break*/, 17];
            case 21: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 22:
                _e.sent();
                _e.label = 23;
            case 23:
                i++;
                return [3 /*break*/, 2];
            case 24:
                console.log('内部助力', shareCodeSelf);
                i = 0;
                _e.label = 25;
            case 25:
                if (!(i < cookiesArr.length)) return [3 /*break*/, 39];
                if (!(shareCodeHW.length === 0)) return [3 /*break*/, 27];
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.getshareCodeHW)('nnfls')];
            case 26:
                shareCodeHW = _e.sent();
                _e.label = 27;
            case 27:
                shareCode = Array.from(new Set(__spreadArray(__spreadArray([], __read(shareCodeSelf), false), __read(shareCodeHW), false)));
                cookie = cookiesArr[i];
                UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                _e.label = 28;
            case 28:
                _e.trys.push([28, 36, 37, 38]);
                shareCode_1 = (e_2 = void 0, __values(shareCode)), shareCode_1_1 = shareCode_1.next();
                _e.label = 29;
            case 29:
                if (!!shareCode_1_1.done) return [3 /*break*/, 35];
                code = shareCode_1_1.value;
                console.log("".concat(UserName, " \u53BB\u52A9\u529B ").concat(code));
                return [4 /*yield*/, api('sign/helpSign', 'flag,sceneval,token', { flag: 0, token: code })];
            case 30:
                res = _e.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(3000)];
            case 31:
                _e.sent();
                return [4 /*yield*/, api('sign/helpSign', 'flag,sceneval,token', { flag: 1, token: code })];
            case 32:
                res = _e.sent();
                console.log('助力结果', res.errMsg);
                if (res.errMsg === 'help day limit')
                    return [3 /*break*/, 35];
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 33:
                _e.sent();
                _e.label = 34;
            case 34:
                shareCode_1_1 = shareCode_1.next();
                return [3 /*break*/, 29];
            case 35: return [3 /*break*/, 38];
            case 36:
                e_2_1 = _e.sent();
                e_2 = { error: e_2_1 };
                return [3 /*break*/, 38];
            case 37:
                try {
                    if (shareCode_1_1 && !shareCode_1_1.done && (_d = shareCode_1["return"])) _d.call(shareCode_1);
                }
                finally { if (e_2) throw e_2.error; }
                return [7 /*endfinally*/];
            case 38:
                i++;
                return [3 /*break*/, 25];
            case 39: return [2 /*return*/];
        }
    });
}); })();
function api(fn, stk, params) {
    return __awaiter(this, void 0, void 0, function () {
        var url, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    url = (0, TS_USER_AGENTS_1.h5st)("https://m.jingxi.com/pgcenter/".concat(fn, "?sceneval=2&_stk=sceneval&_ste=1&_=").concat(Date.now(), "&sceneval=2"), stk, params, 10012);
                    return [4 /*yield*/, axios_1["default"].get(url, {
                            headers: {
                                'Host': 'm.jingxi.com',
                                'User-Agent': 'jdpingou;',
                                'Referer': 'https://st.jingxi.com/pingou/taskcenter/index.html',
                                'Cookie': cookie
                            }
                        })];
                case 1:
                    data = (_a.sent()).data;
                    return [2 /*return*/, data];
            }
        });
    });
}
