"use strict";
/**
 * cron: 15 0,1,6,18 * * *
 * CK1     HW.ts -> 内部
 * CK2～n  内部   -> HW.ts
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
var crypto_js_1 = require("crypto-js");
var cookie = '', res = '', UserName, data;
var shareCodes = [], shareCodesHW = [], shareCodesSelf = [];
!(function () { return __awaiter(void 0, void 0, void 0, function () {
    var cookiesArr, _a, _b, _c, index, value, e_1, e_2_1, _d, _e, _f, index, value, shareCodesSelf_1, shareCodesSelf_1_1, code, e_3_1, e_4, e_5_1, _g, _h, _j, index, value, blood, i, j, e_6_1;
    var e_2, _k, e_5, _l, e_3, _m, e_6, _o;
    return __generator(this, function (_p) {
        switch (_p.label) {
            case 0: return [4 /*yield*/, (0, TS_USER_AGENTS_1.requireConfig)()
                // 获取助力码
            ];
            case 1:
                cookiesArr = _p.sent();
                _p.label = 2;
            case 2:
                _p.trys.push([2, 12, 13, 14]);
                _a = __values(cookiesArr.entries()), _b = _a.next();
                _p.label = 3;
            case 3:
                if (!!_b.done) return [3 /*break*/, 11];
                _c = __read(_b.value, 2), index = _c[0], value = _c[1];
                _p.label = 4;
            case 4:
                _p.trys.push([4, 7, , 8]);
                cookie = value;
                UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                console.log("\n\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7".concat(index + 1, "\u3011").concat(UserName, "\n"));
                return [4 /*yield*/, (0, V3_1.requestAlgo)('ce6c2', 'jdltapp;')];
            case 5:
                _p.sent();
                return [4 /*yield*/, api('happyDigHome', { "linkId": "pTTvJeSTrpthgk9ASBVGsw" })];
            case 6:
                res = _p.sent();
                console.log('助力码', res.data.markedPin, res.data.inviteCode);
                shareCodesSelf.push({ inviter: res.data.markedPin, inviteCode: res.data.inviteCode });
                return [3 /*break*/, 8];
            case 7:
                e_1 = _p.sent();
                console.log('error', e_1);
                return [3 /*break*/, 8];
            case 8: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 9:
                _p.sent();
                _p.label = 10;
            case 10:
                _b = _a.next();
                return [3 /*break*/, 3];
            case 11: return [3 /*break*/, 14];
            case 12:
                e_2_1 = _p.sent();
                e_2 = { error: e_2_1 };
                return [3 /*break*/, 14];
            case 13:
                try {
                    if (_b && !_b.done && (_k = _a["return"])) _k.call(_a);
                }
                finally { if (e_2) throw e_2.error; }
                return [7 /*endfinally*/];
            case 14:
                console.log('内部助力');
                (0, TS_USER_AGENTS_1.o2s)(shareCodesSelf);
                _p.label = 15;
            case 15:
                _p.trys.push([15, 39, 40, 41]);
                _d = __values(cookiesArr.entries()), _e = _d.next();
                _p.label = 16;
            case 16:
                if (!!_e.done) return [3 /*break*/, 38];
                _f = __read(_e.value, 2), index = _f[0], value = _f[1];
                _p.label = 17;
            case 17:
                _p.trys.push([17, 35, , 37]);
                cookie = value;
                UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                console.log("\n\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7".concat(index + 1, "\u3011").concat(UserName, "\n"));
                return [4 /*yield*/, (0, V3_1.requestAlgo)('ce6c2', 'jdltapp;')];
            case 18:
                _p.sent();
                if (!(shareCodesHW.length === 0)) return [3 /*break*/, 20];
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.getshareCodeHW)('fcwb')];
            case 19:
                shareCodesHW = _p.sent();
                _p.label = 20;
            case 20:
                if (index === 0 && cookiesArr.length === 1) {
                    shareCodes = Array.from(new Set(__spreadArray(__spreadArray([], __read(shareCodesHW), false), __read(shareCodesSelf), false)));
                }
                else {
                    shareCodes = Array.from(new Set(__spreadArray(__spreadArray([], __read(shareCodesSelf), false), __read(shareCodesHW), false)));
                }
                _p.label = 21;
            case 21:
                _p.trys.push([21, 32, 33, 34]);
                shareCodesSelf_1 = (e_3 = void 0, __values(shareCodesSelf)), shareCodesSelf_1_1 = shareCodesSelf_1.next();
                _p.label = 22;
            case 22:
                if (!!shareCodesSelf_1_1.done) return [3 /*break*/, 31];
                code = shareCodesSelf_1_1.value;
                console.log("\u53BB\u52A9\u529B ".concat(code.inviteCode));
                return [4 /*yield*/, api('happyDigHelp', { "linkId": "pTTvJeSTrpthgk9ASBVGsw", "inviter": code.inviter, "inviteCode": code.inviteCode })];
            case 23:
                res = _p.sent();
                if (!(res.code === 0)) return [3 /*break*/, 24];
                console.log('助力成功');
                return [3 /*break*/, 28];
            case 24:
                if (!(res.code === 16143)) return [3 /*break*/, 25];
                console.log('已助力');
                return [3 /*break*/, 28];
            case 25:
                if (!(res.code === 16144)) return [3 /*break*/, 27];
                console.log('上限');
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 26:
                _p.sent();
                return [3 /*break*/, 31];
            case 27:
                (0, TS_USER_AGENTS_1.o2s)(res);
                _p.label = 28;
            case 28: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 29:
                _p.sent();
                _p.label = 30;
            case 30:
                shareCodesSelf_1_1 = shareCodesSelf_1.next();
                return [3 /*break*/, 22];
            case 31: return [3 /*break*/, 34];
            case 32:
                e_3_1 = _p.sent();
                e_3 = { error: e_3_1 };
                return [3 /*break*/, 34];
            case 33:
                try {
                    if (shareCodesSelf_1_1 && !shareCodesSelf_1_1.done && (_m = shareCodesSelf_1["return"])) _m.call(shareCodesSelf_1);
                }
                finally { if (e_3) throw e_3.error; }
                return [7 /*endfinally*/];
            case 34: return [3 /*break*/, 37];
            case 35:
                e_4 = _p.sent();
                console.log('error', e_4);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 36:
                _p.sent();
                return [3 /*break*/, 37];
            case 37:
                _e = _d.next();
                return [3 /*break*/, 16];
            case 38: return [3 /*break*/, 41];
            case 39:
                e_5_1 = _p.sent();
                e_5 = { error: e_5_1 };
                return [3 /*break*/, 41];
            case 40:
                try {
                    if (_e && !_e.done && (_l = _d["return"])) _l.call(_d);
                }
                finally { if (e_5) throw e_5.error; }
                return [7 /*endfinally*/];
            case 41:
                _p.trys.push([41, 54, 55, 56]);
                _g = __values(cookiesArr.entries()), _h = _g.next();
                _p.label = 42;
            case 42:
                if (!!_h.done) return [3 /*break*/, 53];
                _j = __read(_h.value, 2), index = _j[0], value = _j[1];
                cookie = value;
                UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                console.log("\n\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7".concat(index + 1, "\u3011").concat(UserName, "\n"));
                return [4 /*yield*/, (0, V3_1.requestAlgo)('ce6c2', 'jdltapp;')];
            case 43:
                _p.sent();
                blood = res.data.blood;
                i = 0;
                _p.label = 44;
            case 44:
                if (!(i < 4)) return [3 /*break*/, 52];
                if (blood <= 1) {
                    console.log('能量剩余1，跳过 A');
                    return [3 /*break*/, 52];
                }
                j = 0;
                _p.label = 45;
            case 45:
                if (!(j < 4)) return [3 /*break*/, 51];
                if (blood <= 1) {
                    console.log('能量剩余1，跳过 B');
                    return [3 /*break*/, 51];
                }
                return [4 /*yield*/, api('happyDigDo', { "round": 1, "rowIdx": i, "colIdx": j, "linkId": "pTTvJeSTrpthgk9ASBVGsw" })];
            case 46:
                res = _p.sent();
                (0, TS_USER_AGENTS_1.o2s)(res);
                if (res.data.chunk.type === 1) {
                    console.log('挖到👎');
                }
                else if (res.data.chunk.type === 2) {
                    console.log('挖到🧧', parseFloat(res.data.chunk.value));
                }
                else if (res.data.chunk.type === 4) {
                    console.log('挖到💣');
                }
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 47:
                _p.sent();
                return [4 /*yield*/, api('happyDigHome', { "linkId": "pTTvJeSTrpthgk9ASBVGsw" })];
            case 48:
                res = _p.sent();
                if (res.data.blood === 1) {
                    blood = 1;
                    console.log('能量剩余1，退出');
                    return [3 /*break*/, 51];
                }
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 49:
                _p.sent();
                _p.label = 50;
            case 50:
                j++;
                return [3 /*break*/, 45];
            case 51:
                i++;
                return [3 /*break*/, 44];
            case 52:
                _h = _g.next();
                return [3 /*break*/, 42];
            case 53: return [3 /*break*/, 56];
            case 54:
                e_6_1 = _p.sent();
                e_6 = { error: e_6_1 };
                return [3 /*break*/, 56];
            case 55:
                try {
                    if (_h && !_h.done && (_o = _g["return"])) _o.call(_g);
                }
                finally { if (e_6) throw e_6.error; }
                return [7 /*endfinally*/];
            case 56: return [2 /*return*/];
        }
    });
}); })();
function api(fn, body) {
    return __awaiter(this, void 0, void 0, function () {
        var timestamp, t, h5st, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    timestamp = Date.now(), t = [
                        { key: 'functionId', value: fn },
                        { key: 'body', value: (0, crypto_js_1.SHA256)(JSON.stringify(body)).toString() },
                        { key: 't', value: timestamp.toString() },
                        { key: 'appid', value: 'activities_platform' },
                        { key: 'client', value: 'H5' },
                        { key: 'clientVersion', value: '1.0.0' },
                    ];
                    h5st = (0, V3_1.geth5st)(t, '63d78');
                    return [4 /*yield*/, axios_1["default"].get("https://api.m.jd.com/?functionId=".concat(fn, "&body=").concat(encodeURIComponent(JSON.stringify(body)), "&t=").concat(Date.now(), "&appid=activities_platform&client=H5&clientVersion=1.0.0&h5st=").concat(h5st), {
                            headers: {
                                'Host': 'api.m.jd.com',
                                'Origin': 'https://bnzf.jd.com',
                                'User-Agent': "jdapp;iPhone;10.2.2;14.3;".concat((0, TS_USER_AGENTS_1.randomString)(40), ";M/5.0;network/wifi;ADID/;model/iPhone12,1;addressid/4199175193;appBuild/167863;jdSupportDarkMode/0;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1;"),
                                'Referer': 'https://bnzf.jd.com/',
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
