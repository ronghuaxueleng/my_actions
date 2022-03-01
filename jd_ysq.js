"use strict";
/**
 * 京喜-天天压岁钱
 * cron: 5 0,9,18 * * *
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
var V3_1 = require("./utils/V3");
var cookie = '', res = '', UserName;
var shareCodes = [], shareCodesSelf = [], shareCodesHW = [];
!(function () { return __awaiter(void 0, void 0, void 0, function () {
    var cookiesArr, _a, _b, _c, index, value, _d, _e, t, e_1_1, e_2_1, _f, _g, _h, index, value, shareCodes_1, shareCodes_1_1, code, e_3_1, e_4_1;
    var e_2, _j, e_1, _k, e_4, _l, e_3, _m;
    return __generator(this, function (_o) {
        switch (_o.label) {
            case 0: return [4 /*yield*/, (0, V3_1.requestAlgo)('76a41', 'jdpingou;')];
            case 1:
                _o.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.requireConfig)()];
            case 2:
                cookiesArr = _o.sent();
                _o.label = 3;
            case 3:
                _o.trys.push([3, 21, 22, 23]);
                _a = __values(cookiesArr.entries()), _b = _a.next();
                _o.label = 4;
            case 4:
                if (!!_b.done) return [3 /*break*/, 20];
                _c = __read(_b.value, 2), index = _c[0], value = _c[1];
                cookie = value;
                UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                console.log("\n\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7".concat(index + 1, "\u3011").concat(UserName, "\n"));
                return [4 /*yield*/, api('GetUserInfo', '__t,dwEnv,nopopup,strInviteId', { strInviteId: '', nopopup: 1 })];
            case 5:
                // 助力码
                res = _o.sent();
                console.log('助力码:', res.myInfo.shareId);
                shareCodesSelf.push(res.myInfo.shareId);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 6:
                _o.sent();
                return [4 /*yield*/, api('GetTaskList', '__t,dwEnv', {})];
            case 7:
                res = _o.sent();
                _o.label = 8;
            case 8:
                _o.trys.push([8, 17, 18, 19]);
                _d = (e_1 = void 0, __values(res.data.taskList)), _e = _d.next();
                _o.label = 9;
            case 9:
                if (!!_e.done) return [3 /*break*/, 16];
                t = _e.value;
                if (!(t.completedTimes !== t.configTargetTimes)) return [3 /*break*/, 12];
                if (!(t.awardStatus === 2 && [2, 14].includes(t.taskType))) return [3 /*break*/, 12];
                console.log('开始任务:', t.taskName);
                return [4 /*yield*/, api('DoTask', '__t,bizCode,configExtra,dwEnv,strShareId,taskId', { bizCode: t.bizCode, configExtra: '', strShareId: '', taskId: t.taskId })];
            case 10:
                res = _o.sent();
                if (res.iRet === 0) {
                    console.log('任务完成');
                }
                else {
                    console.log('任务失败', (0, TS_USER_AGENTS_1.obj2str)(res));
                    return [3 /*break*/, 16];
                }
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(5000)];
            case 11:
                _o.sent();
                _o.label = 12;
            case 12:
                if (!(t.completedTimes === t.configTargetTimes && t.awardStatus === 2)) return [3 /*break*/, 15];
                return [4 /*yield*/, api('Award', '__t,bizCode,dwEnv,source,taskId', { bizCode: t.bizCode, source: t.bizCode, taskId: t.taskId })];
            case 13:
                res = _o.sent();
                if (!(res.ret === 0)) return [3 /*break*/, 15];
                res = JSON.parse(res.data.prizeInfo);
                console.log('领奖成功:', res.ddwAward, res.ddwExtAward);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1500)];
            case 14:
                _o.sent();
                _o.label = 15;
            case 15:
                _e = _d.next();
                return [3 /*break*/, 9];
            case 16: return [3 /*break*/, 19];
            case 17:
                e_1_1 = _o.sent();
                e_1 = { error: e_1_1 };
                return [3 /*break*/, 19];
            case 18:
                try {
                    if (_e && !_e.done && (_k = _d["return"])) _k.call(_d);
                }
                finally { if (e_1) throw e_1.error; }
                return [7 /*endfinally*/];
            case 19:
                _b = _a.next();
                return [3 /*break*/, 4];
            case 20: return [3 /*break*/, 23];
            case 21:
                e_2_1 = _o.sent();
                e_2 = { error: e_2_1 };
                return [3 /*break*/, 23];
            case 22:
                try {
                    if (_b && !_b.done && (_j = _a["return"])) _j.call(_a);
                }
                finally { if (e_2) throw e_2.error; }
                return [7 /*endfinally*/];
            case 23:
                _o.trys.push([23, 37, 38, 39]);
                _f = __values(cookiesArr.entries()), _g = _f.next();
                _o.label = 24;
            case 24:
                if (!!_g.done) return [3 /*break*/, 36];
                _h = __read(_g.value, 2), index = _h[0], value = _h[1];
                if (!(shareCodesHW.length === 0)) return [3 /*break*/, 26];
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.getshareCodeHW)('ysq')];
            case 25:
                shareCodesHW = _o.sent();
                _o.label = 26;
            case 26:
                shareCodes = Array.from(new Set(__spreadArray(__spreadArray([], __read(shareCodesSelf), false), __read(shareCodesHW), false)));
                cookie = value;
                _o.label = 27;
            case 27:
                _o.trys.push([27, 33, 34, 35]);
                shareCodes_1 = (e_3 = void 0, __values(shareCodes)), shareCodes_1_1 = shareCodes_1.next();
                _o.label = 28;
            case 28:
                if (!!shareCodes_1_1.done) return [3 /*break*/, 32];
                code = shareCodes_1_1.value;
                console.log("\u8D26\u53F7".concat(index + 1, " \u53BB\u52A9\u529B ").concat(code, " ").concat(shareCodesSelf.includes(code) ? '*内部*' : ''));
                return [4 /*yield*/, api('BestWishes', '__t,dwEnv,id,shareId', { id: 1, shareId: code })];
            case 29:
                res = _o.sent();
                if (res.iRet === 0) {
                    if (res.data.toast === '助力失败，活动太火爆，晚点再来试试吧～') {
                        console.log('黑号，无法助力别人');
                        return [3 /*break*/, 32];
                    }
                    else if (res.data.toast === '') {
                        console.log('助力成功');
                    }
                    else {
                        console.log(res.data.toast);
                    }
                }
                else {
                    console.log('助力失败', (0, TS_USER_AGENTS_1.obj2str)(res));
                    return [3 /*break*/, 32];
                }
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 30:
                _o.sent();
                _o.label = 31;
            case 31:
                shareCodes_1_1 = shareCodes_1.next();
                return [3 /*break*/, 28];
            case 32: return [3 /*break*/, 35];
            case 33:
                e_3_1 = _o.sent();
                e_3 = { error: e_3_1 };
                return [3 /*break*/, 35];
            case 34:
                try {
                    if (shareCodes_1_1 && !shareCodes_1_1.done && (_m = shareCodes_1["return"])) _m.call(shareCodes_1);
                }
                finally { if (e_3) throw e_3.error; }
                return [7 /*endfinally*/];
            case 35:
                _g = _f.next();
                return [3 /*break*/, 24];
            case 36: return [3 /*break*/, 39];
            case 37:
                e_4_1 = _o.sent();
                e_4 = { error: e_4_1 };
                return [3 /*break*/, 39];
            case 38:
                try {
                    if (_g && !_g.done && (_l = _f["return"])) _l.call(_f);
                }
                finally { if (e_4) throw e_4.error; }
                return [7 /*endfinally*/];
            case 39: return [2 /*return*/];
        }
    });
}); })();
function api(fn, stk, params) {
    return __awaiter(this, void 0, void 0, function () {
        var url, timestamp, t, _a, _b, _c, key, value, h5st, data;
        var e_5, _d;
        return __generator(this, function (_e) {
            switch (_e.label) {
                case 0:
                    timestamp = Date.now();
                    t = [
                        { key: '__t', value: timestamp.toString() },
                        { key: 'dwEnv', value: '7' },
                    ];
                    url = fn === 'Award'
                        ? "https://m.jingxi.com/newtasksys/newtasksys_front/".concat(fn, "?__t=").concat(timestamp, "&dwEnv=7&_stk=").concat(encodeURIComponent(stk), "&_ste=1&sceneval=2&g_login_type=1&g_ty=ajax")
                        : "https://m.jingxi.com/jxnhj/".concat(fn, "?__t=").concat(timestamp, "&dwEnv=7&_stk=").concat(encodeURIComponent(stk), "&_ste=1&sceneval=2&g_login_type=1&g_ty=ajax");
                    try {
                        for (_a = __values(Object.entries(params)), _b = _a.next(); !_b.done; _b = _a.next()) {
                            _c = __read(_b.value, 2), key = _c[0], value = _c[1];
                            t.push({ key: key, value: value });
                            url += "&".concat(key, "=").concat(value);
                        }
                    }
                    catch (e_5_1) { e_5 = { error: e_5_1 }; }
                    finally {
                        try {
                            if (_b && !_b.done && (_d = _a["return"])) _d.call(_a);
                        }
                        finally { if (e_5) throw e_5.error; }
                    }
                    h5st = (0, V3_1.geth5st)(t, '76a41');
                    url += "&h5st=".concat(encodeURIComponent(h5st));
                    return [4 /*yield*/, axios_1["default"].get(url, {
                            headers: {
                                'Host': 'm.jingxi.com',
                                'User-Agent': 'jdpingou;',
                                'Accept-Language': 'zh-CN,zh-Hans;q=0.9',
                                'Referer': 'https://st.jingxi.com/',
                                'Cookie': cookie
                            }
                        })];
                case 1:
                    data = (_e.sent()).data;
                    return [2 /*return*/, data];
            }
        });
    });
}
