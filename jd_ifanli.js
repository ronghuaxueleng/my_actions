"use strict";
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
var axios_1 = require("axios");
var TS_USER_AGENTS_1 = require("./TS_USER_AGENTS");
var cookie = '', res = '';
!(function () { return __awaiter(void 0, void 0, void 0, function () {
    var cookiesArr, _a, _b, _c, index, value, UserName, finishCount, maxTaskCount, i, tasks, tasks_1, tasks_1_1, t, e_1_1, e_2_1;
    var e_2, _d, e_1, _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0: return [4 /*yield*/, (0, TS_USER_AGENTS_1.requireConfig)()];
            case 1:
                cookiesArr = _f.sent();
                _f.label = 2;
            case 2:
                _f.trys.push([2, 22, 23, 24]);
                _a = __values(cookiesArr.entries()), _b = _a.next();
                _f.label = 3;
            case 3:
                if (!!_b.done) return [3 /*break*/, 21];
                _c = __read(_b.value, 2), index = _c[0], value = _c[1];
                cookie = value;
                UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                console.log("\n\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7".concat(index + 1, "\u3011").concat(UserName, "\n"));
                return [4 /*yield*/, api('getTaskFinishCount')];
            case 4:
                res = _f.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 5:
                _f.sent();
                finishCount = res.content.content.finishCount, maxTaskCount = res.content.content.maxTaskCount;
                console.log(finishCount, '/', maxTaskCount);
                i = finishCount;
                _f.label = 6;
            case 6:
                if (!(i < maxTaskCount)) return [3 /*break*/, 20];
                return [4 /*yield*/, api('getTaskList')];
            case 7:
                tasks = _f.sent();
                tasks = tasks.content;
                tasks = tasks.sort(compare('rewardBeans'));
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(3000)];
            case 8:
                _f.sent();
                _f.label = 9;
            case 9:
                _f.trys.push([9, 17, 18, 19]);
                tasks_1 = (e_1 = void 0, __values(tasks)), tasks_1_1 = tasks_1.next();
                _f.label = 10;
            case 10:
                if (!!tasks_1_1.done) return [3 /*break*/, 16];
                t = tasks_1_1.value;
                if (!(t.statusName !== '活动结束' && t.status !== 2)) return [3 /*break*/, 15];
                return [4 /*yield*/, taskApi('saveTaskRecord', { "taskId": null, "taskType": 2, "businessId": null })];
            case 11:
                res = _f.sent();
                (0, TS_USER_AGENTS_1.o2s)(res);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(t.watchTime * 1000 + 500)];
            case 12:
                _f.sent();
                return [4 /*yield*/, taskApi('saveTaskRecord', { taskId: t.taskId, taskType: t.taskType, businessId: t.businessId, uid: res.content.uid, tt: res.content.tt })];
            case 13:
                res = _f.sent();
                (0, TS_USER_AGENTS_1.o2s)(res);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 14:
                _f.sent();
                _f.label = 15;
            case 15:
                tasks_1_1 = tasks_1.next();
                return [3 /*break*/, 10];
            case 16: return [3 /*break*/, 19];
            case 17:
                e_1_1 = _f.sent();
                e_1 = { error: e_1_1 };
                return [3 /*break*/, 19];
            case 18:
                try {
                    if (tasks_1_1 && !tasks_1_1.done && (_e = tasks_1["return"])) _e.call(tasks_1);
                }
                finally { if (e_1) throw e_1.error; }
                return [7 /*endfinally*/];
            case 19:
                i++;
                return [3 /*break*/, 6];
            case 20:
                _b = _a.next();
                return [3 /*break*/, 3];
            case 21: return [3 /*break*/, 24];
            case 22:
                e_2_1 = _f.sent();
                e_2 = { error: e_2_1 };
                return [3 /*break*/, 24];
            case 23:
                try {
                    if (_b && !_b.done && (_d = _a["return"])) _d.call(_a);
                }
                finally { if (e_2) throw e_2.error; }
                return [7 /*endfinally*/];
            case 24: return [2 /*return*/];
        }
    });
}); })();
function api(fn) {
    return __awaiter(this, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios_1["default"].get("https://ifanli.m.jd.com/rebateapi/task/".concat(fn), {
                        headers: {
                            "Host": "ifanli.m.jd.com",
                            'user-agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 10_3_1 like Mac OS X) AppleWebKit/603.1.30 (KHTML, like Gecko) Version/10.0 Mobile/14E304 Safari/602.1',
                            'referer': 'https://ifanli.m.jd.com/rebate/earnBean.html?paltform=null',
                            "Cookie": cookie,
                            "Content-Type": "application/json;charset=UTF-8"
                        }
                    })];
                case 1:
                    data = (_a.sent()).data;
                    return [2 /*return*/, data];
            }
        });
    });
}
function taskApi(fn, body) {
    return __awaiter(this, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios_1["default"].post("https://ifanli.m.jd.com/rebateapi/task/".concat(fn), JSON.stringify(body), {
                        headers: {
                            'authority': 'ifanli.m.jd.com',
                            'user-agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 10_3_1 like Mac OS X) AppleWebKit/603.1.30 (KHTML, like Gecko) Version/10.0 Mobile/14E304 Safari/602.1',
                            'referer': 'https://ifanli.m.jd.com/rebate/earnBean.html?paltform=null',
                            'cookie': cookie
                        }
                    })];
                case 1:
                    data = (_a.sent()).data;
                    return [2 /*return*/, data];
            }
        });
    });
}
function compare(property) {
    return function (a, b) {
        var value1 = a[property];
        var value2 = b[property];
        return value2 - value1;
    };
}
