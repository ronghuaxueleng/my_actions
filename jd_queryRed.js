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
var fs_1 = require("fs");
var date_fns_1 = require("date-fns");
var sendNotify_1 = require("./sendNotify");
var pushplus_1 = require("./utils/pushplus");
var TS_USER_AGENTS_1 = require("./TS_USER_AGENTS");
var cookie = '', res = '', UserName;
var date = (0, date_fns_1.getDate)(new Date()), message = '', allMessage = '', pushplusArr, pushplusUser = [];
!(function () { return __awaiter(void 0, void 0, void 0, function () {
    var pushplusArr_1, pushplusArr_1_1, user, cookiesArr, _a, _b, _c, index, value, jdRed, jdRedExp, _d, _e, red, e_1_1;
    var e_2, _f, e_1, _g, e_3, _h;
    return __generator(this, function (_j) {
        switch (_j.label) {
            case 0:
                if (Object.keys(process.env).includes("QL_DIR"))
                    return [2 /*return*/];
                try {
                    pushplusArr = JSON.parse((0, fs_1.readFileSync)('./utils/account.json', 'utf-8').toString());
                }
                catch (e) {
                    console.log('utils/pushplus.json 加载错误');
                    pushplusArr = [];
                }
                try {
                    for (pushplusArr_1 = __values(pushplusArr), pushplusArr_1_1 = pushplusArr_1.next(); !pushplusArr_1_1.done; pushplusArr_1_1 = pushplusArr_1.next()) {
                        user = pushplusArr_1_1.value;
                        if (user.pushplus) {
                            pushplusUser.push(decodeURIComponent(user.pt_pin));
                        }
                    }
                }
                catch (e_2_1) { e_2 = { error: e_2_1 }; }
                finally {
                    try {
                        if (pushplusArr_1_1 && !pushplusArr_1_1.done && (_f = pushplusArr_1["return"])) _f.call(pushplusArr_1);
                    }
                    finally { if (e_2) throw e_2.error; }
                }
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.requireConfig)()];
            case 1:
                cookiesArr = _j.sent();
                _j.label = 2;
            case 2:
                _j.trys.push([2, 10, 11, 12]);
                _a = __values(cookiesArr.entries()), _b = _a.next();
                _j.label = 3;
            case 3:
                if (!!_b.done) return [3 /*break*/, 9];
                _c = __read(_b.value, 2), index = _c[0], value = _c[1];
                cookie = value;
                UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                console.log("\n\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7".concat(index + 1, "\u3011").concat(UserName, "\n"));
                jdRed = 0, jdRedExp = 0;
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.get)("https://wq.jd.com/user/info/QueryUserRedEnvelopesV2?type=1&orgFlag=JD_PinGou_New&page=1&cashRedType=1&redBalanceFlag=1&channel=3&_=".concat(Date.now(), "&sceneval=2&g_login_type=1&callback=jsonpCBK").concat((0, TS_USER_AGENTS_1.randomWord)(), "&g_ty=ls"), '', {
                        'authority': 'wq.jd.com',
                        'user-agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 10_3_1 like Mac OS X) AppleWebKit/603.1.30 (KHTML, like Gecko) Version/10.0 Mobile/14E304 Safari/602.1',
                        'referer': 'https://wqs.jd.com/',
                        'cookie': cookie
                    })];
            case 4:
                res = _j.sent();
                try {
                    for (_d = (e_3 = void 0, __values(res.data.useRedInfo.redList)), _e = _d.next(); !_e.done; _e = _d.next()) {
                        red = _e.value;
                        if (red.orgLimitStr.includes("京喜")) {
                        }
                        else if (red.activityName.includes('极速版')) {
                        }
                        else if (red.orgLimitStr.includes('京东健康')) {
                        }
                        else {
                            jdRed += parseFloat(red.balance);
                            (0, date_fns_1.getDate)(red.endTime * 1000) === date ? jdRedExp += parseFloat(red.balance) : '';
                        }
                    }
                }
                catch (e_3_1) { e_3 = { error: e_3_1 }; }
                finally {
                    try {
                        if (_e && !_e.done && (_h = _d["return"])) _h.call(_d);
                    }
                    finally { if (e_3) throw e_3.error; }
                }
                console.log(parseFloat(jdRed.toFixed(2)), parseFloat(jdRedExp.toFixed(2)));
                message = "\u3010\u4EAC\u4E1C\u8D26\u53F7".concat(index + 1, "\u3011 ").concat(UserName, "\n\u4EAC\u4E1C\u7EA2\u5305  ").concat(jdRed.toFixed(2), "\n\u4ECA\u65E5\u8FC7\u671F  ").concat(jdRedExp.toFixed(2), "\n\n");
                if (!pushplusUser.includes(UserName)) return [3 /*break*/, 6];
                return [4 /*yield*/, (0, pushplus_1.pushplus)('京东红包', message)];
            case 5:
                _j.sent();
                _j.label = 6;
            case 6:
                allMessage += message;
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 7:
                _j.sent();
                _j.label = 8;
            case 8:
                _b = _a.next();
                return [3 /*break*/, 3];
            case 9: return [3 /*break*/, 12];
            case 10:
                e_1_1 = _j.sent();
                e_1 = { error: e_1_1 };
                return [3 /*break*/, 12];
            case 11:
                try {
                    if (_b && !_b.done && (_g = _a["return"])) _g.call(_a);
                }
                finally { if (e_1) throw e_1.error; }
                return [7 /*endfinally*/];
            case 12:
                if (!allMessage) return [3 /*break*/, 14];
                return [4 /*yield*/, (0, sendNotify_1.sendNotify)('京东红包', allMessage)];
            case 13:
                _j.sent();
                _j.label = 14;
            case 14: return [2 /*return*/];
        }
    });
}); })();
