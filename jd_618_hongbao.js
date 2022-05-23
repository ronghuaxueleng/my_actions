"use strict";
/**
 * 20点开奖的🧧
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
var axios_1 = require("axios");
var TS_USER_AGENTS_1 = require("./TS_USER_AGENTS");
var log_618_1 = require("./utils/log_618");
var cookie = '', res = '', UserName, index, log, secretp = '';
var shareCodeHW = [], shareCodeSelf = [], shareCode = [];
!(function () { return __awaiter(void 0, void 0, void 0, function () {
    var cookiesArr, tool, i, e_1, i, shareCode_1, shareCode_1_1, code, e_2_1, e_3;
    var e_2, _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0: return [4 /*yield*/, (0, TS_USER_AGENTS_1.getCookie)()];
            case 1:
                cookiesArr = _b.sent();
                tool = new log_618_1.Log_618();
                i = 0;
                _b.label = 2;
            case 2:
                if (!(i < cookiesArr.length)) return [3 /*break*/, 13];
                _b.label = 3;
            case 3:
                _b.trys.push([3, 9, 10, 12]);
                cookie = cookiesArr[i];
                UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                index = i + 1;
                console.log("\n\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7".concat(index, "\u3011").concat(UserName, "\n"));
                return [4 /*yield*/, api('promote_getHomeData', {})];
            case 4:
                res = _b.sent();
                secretp = res.data.result.homeMainInfo.secretp;
                return [4 /*yield*/, api('promote_pk_getAmountForecast', {})];
            case 5:
                res = _b.sent();
                console.log('🧧', parseFloat(res.data.result.userAward));
                return [4 /*yield*/, tool.main()];
            case 6:
                log = _b.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(3000)];
            case 7:
                _b.sent();
                return [4 /*yield*/, api('promote_pk_getExpandDetail', { "ss": JSON.stringify({ extraData: { log: encodeURIComponent(log.log), sceneid: 'RAhomePageh5' }, secretp: secretp, random: log.random }) })];
            case 8:
                res = _b.sent();
                console.log('助力码', res.data.result.inviteId);
                shareCodeSelf.push(res.data.result.inviteId);
                return [3 /*break*/, 12];
            case 9:
                e_1 = _b.sent();
                console.log('error', e_1);
                return [3 /*break*/, 12];
            case 10: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 11:
                _b.sent();
                return [7 /*endfinally*/];
            case 12:
                i++;
                return [3 /*break*/, 2];
            case 13:
                console.log('内部互助');
                (0, TS_USER_AGENTS_1.o2s)(shareCodeSelf);
                i = 0;
                _b.label = 14;
            case 14:
                if (!(i < cookiesArr.length)) return [3 /*break*/, 33];
                _b.label = 15;
            case 15:
                _b.trys.push([15, 29, 30, 32]);
                cookie = cookiesArr[i];
                UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                index = i + 1;
                console.log("\n\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7".concat(index, "\u3011").concat(UserName, "\n"));
                return [4 /*yield*/, api('promote_getHomeData', {})];
            case 16:
                res = _b.sent();
                secretp = res.data.result.homeMainInfo.secretp;
                if (!(shareCodeHW.length === 0)) return [3 /*break*/, 18];
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.getshareCodeHW)('lyb_pz')];
            case 17:
                shareCodeHW = _b.sent();
                _b.label = 18;
            case 18:
                if (i === 0) {
                    shareCode = Array.from(new Set(__spreadArray(__spreadArray([], __read(shareCodeHW), false), __read(shareCodeSelf), false)));
                }
                else {
                    shareCode = Array.from(new Set(__spreadArray(__spreadArray([], __read(shareCodeSelf), false), __read(shareCodeHW), false)));
                }
                _b.label = 19;
            case 19:
                _b.trys.push([19, 26, 27, 28]);
                shareCode_1 = (e_2 = void 0, __values(shareCode)), shareCode_1_1 = shareCode_1.next();
                _b.label = 20;
            case 20:
                if (!!shareCode_1_1.done) return [3 /*break*/, 25];
                code = shareCode_1_1.value;
                console.log('去助力', code);
                return [4 /*yield*/, tool.main()];
            case 21:
                log = _b.sent();
                return [4 /*yield*/, api('promote_pk_collectPkExpandScore', {
                        "ss": JSON.stringify({ extraData: { log: encodeURIComponent(log.log), sceneid: 'RAhomePageh5' }, secretp: secretp, random: log.random }),
                        "actionType": "0",
                        "inviteId": code
                    })];
            case 22:
                res = _b.sent();
                console.log(res.data.bizMsg);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(3000)];
            case 23:
                _b.sent();
                _b.label = 24;
            case 24:
                shareCode_1_1 = shareCode_1.next();
                return [3 /*break*/, 20];
            case 25: return [3 /*break*/, 28];
            case 26:
                e_2_1 = _b.sent();
                e_2 = { error: e_2_1 };
                return [3 /*break*/, 28];
            case 27:
                try {
                    if (shareCode_1_1 && !shareCode_1_1.done && (_a = shareCode_1["return"])) _a.call(shareCode_1);
                }
                finally { if (e_2) throw e_2.error; }
                return [7 /*endfinally*/];
            case 28: return [3 /*break*/, 32];
            case 29:
                e_3 = _b.sent();
                console.log('error', e_3);
                return [3 /*break*/, 32];
            case 30: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 31:
                _b.sent();
                return [7 /*endfinally*/];
            case 32:
                i++;
                return [3 /*break*/, 14];
            case 33: return [2 /*return*/];
        }
    });
}); })();
function api(fn, body) {
    return __awaiter(this, void 0, void 0, function () {
        var appid, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    appid = fn.includes('promote_') ? 'signed_wh5' : 'wh5';
                    return [4 /*yield*/, axios_1["default"].post("https://api.m.jd.com/client.action?functionId=".concat(fn), "functionId=".concat(fn, "&client=m&clientVersion=1.0.0&appid=").concat(appid, "&body=").concat(JSON.stringify(body)), {
                            headers: {
                                'Host': 'api.m.jd.com',
                                'Origin': 'https://wbbny.m.jd.com',
                                'Accept': 'application/json, text/plain, */*',
                                'User-Agent': TS_USER_AGENTS_1["default"],
                                'Referer': 'https://wbbny.m.jd.com/',
                                'Content-Type': 'application/x-www-form-urlencoded',
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
