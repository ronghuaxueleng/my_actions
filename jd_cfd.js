"use strict";
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
var h5st_3_1_1 = require("./utils/h5st_3.1");
var TS_USER_AGENTS_1 = require("./TS_USER_AGENTS");
var Cfd = /** @class */ (function (_super) {
    __extends(Cfd, _super);
    function Cfd() {
        var _this = _super.call(this) || this;
        _this.shareCodeSelf = [];
        return _this;
    }
    Cfd.prototype.init = function () {
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
    Cfd.prototype.api = function (fn, obj) {
        if (obj === void 0) { obj = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var timestamp, body, h5stBody, _a, _b, key, _c, _d, params, _e, _f, key, data;
            var e_1, _g, e_2, _h;
            return __generator(this, function (_j) {
                switch (_j.label) {
                    case 0:
                        timestamp = Date.now();
                        body = {
                            'strZone': 'jxbfd',
                            'bizCode': 'jxbfd',
                            'source': 'jxbfd',
                            'strDeviceId': this.token.strPhoneID,
                            'dwEnv': '7',
                            '_cfd_t': timestamp.toString(),
                            'ptag': '',
                            '_ste': '1',
                            '_': timestamp.toString(),
                            'sceneval': '2',
                            'g_login_type': '1',
                            'callback': "jsonpCBK".concat(this.getRandomWord()),
                            'g_ty': 'ls',
                            'appCode': 'msd1188198'
                        };
                        Object.assign(body, obj);
                        this._ombfd ? body['_imbfd'] = this._ombfd : '';
                        if (body['_stk'].includes('_imbfd') && (!this._ombfd || !body['_imbfd'])) {
                            console.log('h5st body 缺少 _imbfd');
                            process.exit(0);
                        }
                        h5stBody = {};
                        try {
                            for (_a = __values(body['_stk'].split(',').sort()), _b = _a.next(); !_b.done; _b = _a.next()) {
                                key = _b.value;
                                h5stBody[key] = body[key];
                            }
                        }
                        catch (e_1_1) { e_1 = { error: e_1_1 }; }
                        finally {
                            try {
                                if (_b && !_b.done && (_g = _a["return"])) _g.call(_a);
                            }
                            finally { if (e_1) throw e_1.error; }
                        }
                        _c = body;
                        _d = 'h5st';
                        return [4 /*yield*/, this.h5stTool.__genH5st(h5stBody)];
                    case 1:
                        _c[_d] = _j.sent();
                        params = '';
                        try {
                            for (_e = __values(Object.keys(body)), _f = _e.next(); !_f.done; _f = _e.next()) {
                                key = _f.value;
                                params += "".concat(key, "=").concat(body[key], "&");
                            }
                        }
                        catch (e_2_1) { e_2 = { error: e_2_1 }; }
                        finally {
                            try {
                                if (_f && !_f.done && (_h = _e["return"])) _h.call(_e);
                            }
                            finally { if (e_2) throw e_2.error; }
                        }
                        return [4 /*yield*/, this.get("https://m.jingxi.com/jxbfd/".concat(fn, "?").concat(params), {
                                'Host': 'm.jingxi.com',
                                'User-Agent': this.user.UserAgent,
                                'Referer': 'https://st.jingxi.com/',
                                'cookie': this.user.cookie
                            })];
                    case 2:
                        data = _j.sent();
                        data = JSON.parse(data.match(/jsonpCBK.?.?\(([\w\W]*)\)/)[1]);
                        this._ombfd = data._ombfd || '';
                        return [2 /*return*/, data];
                }
            });
        });
    };
    Cfd.prototype.main = function (user) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var res, data, _b, _c, xb, e_3_1, _d, _e, pick, e_4_1, _f, _g, strBuildIndex, e_5_1;
            var e_3, _h, e_4, _j, e_5, _k;
            return __generator(this, function (_l) {
                switch (_l.label) {
                    case 0:
                        this.user = user;
                        this.user.cookie += '; cid=4;';
                        this.user.UserAgent = "jdpingou;Mozilla/5.0 (iPhone; CPU iPhone OS ".concat(this.getIosVer(), " like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;");
                        this.token = (0, TS_USER_AGENTS_1.getJxToken)(this.user.cookie);
                        this.h5stTool = new h5st_3_1_1.H5ST('92a36', this.user.UserAgent, (_a = process.env.FP_92A36) !== null && _a !== void 0 ? _a : "", 'https://st.jingxi.com/fortune_island/index2.html', 'https://st.jingxi.com', this.user.UserName);
                        return [4 /*yield*/, this.h5stTool.__genAlgo()];
                    case 1:
                        _l.sent();
                        return [4 /*yield*/, this.api('user/QueryUserInfo', {
                                _stk: '_cfd_t,bizCode,ddwTaskId,dwEnv,dwIsReJoin,ptag,source,strDeviceId,strMarkList,strPgUUNum,strPgtimestamp,strPhoneID,strShareId,strVersion,strZone',
                                'ddwTaskId': '',
                                'strShareId': '',
                                'strMarkList': 'guider_step,collect_coin_auth,guider_medal,guider_over_flag,build_food_full,build_sea_full,build_shop_full,build_fun_full,medal_guider_show,guide_guider_show,guide_receive_vistor,daily_task,guider_daily_task,cfd_has_show_selef_point,choose_goods_has_show,daily_task_win,new_user_task_win,guider_new_user_task,guider_daily_task_icon,guider_nn_task_icon,tool_layer,new_ask_friend_m',
                                'strPgtimestamp': this.token.strPgtimestamp,
                                'strPhoneID': this.token.strPhoneID,
                                'strPgUUNum': this.token.strPgUUNum,
                                'strVersion': '1.0.1',
                                'dwIsReJoin': '0'
                            })];
                    case 2:
                        res = _l.sent();
                        this.o2s(res);
                        return [4 /*yield*/, this.wait(1000)];
                    case 3:
                        _l.sent();
                        _l.label = 4;
                    case 4:
                        _l.trys.push([4, 10, 11, 12]);
                        _b = __values(res.XbStatus.XBDetail), _c = _b.next();
                        _l.label = 5;
                    case 5:
                        if (!!_c.done) return [3 /*break*/, 9];
                        xb = _c.value;
                        if (!(xb.dwRemainCnt && Date.now() > xb.ddwColdEndTm * 1000)) return [3 /*break*/, 8];
                        return [4 /*yield*/, this.api('user/TreasureHunt', {
                                _stk: '_cfd_t,_imbfd,bizCode,dwEnv,ptag,source,strDeviceId,strIndex,strZone',
                                strIndex: xb.strIndex
                            })];
                    case 6:
                        data = _l.sent();
                        console.log('寻宝', xb.strIndex, data.AwardInfo.ddwValue);
                        return [4 /*yield*/, this.wait(5000)];
                    case 7:
                        _l.sent();
                        _l.label = 8;
                    case 8:
                        _c = _b.next();
                        return [3 /*break*/, 5];
                    case 9: return [3 /*break*/, 12];
                    case 10:
                        e_3_1 = _l.sent();
                        e_3 = { error: e_3_1 };
                        return [3 /*break*/, 12];
                    case 11:
                        try {
                            if (_c && !_c.done && (_h = _b["return"])) _h.call(_b);
                        }
                        finally { if (e_3) throw e_3.error; }
                        return [7 /*endfinally*/];
                    case 12: return [4 /*yield*/, this.api('story/queryshell', {
                            _stk: '_cfd_t,_imbfd,bizCode,dwEnv,ptag,source,strDeviceId,strZone'
                        })];
                    case 13:
                        // 贝壳
                        res = _l.sent();
                        return [4 /*yield*/, this.wait(1000)];
                    case 14:
                        _l.sent();
                        _l.label = 15;
                    case 15:
                        _l.trys.push([15, 23, 24, 25]);
                        _d = __values(res.Data.NormShell), _e = _d.next();
                        _l.label = 16;
                    case 16:
                        if (!!_e.done) return [3 /*break*/, 22];
                        pick = _e.value;
                        _l.label = 17;
                    case 17:
                        if (!pick.dwNum) return [3 /*break*/, 21];
                        return [4 /*yield*/, this.api('story/pickshell', {
                                _stk: '_cfd_t,_imbfd,bizCode,dwEnv,dwType,ptag,source,strDeviceId,strZone',
                                dwType: pick.dwType
                            })];
                    case 18:
                        data = _l.sent();
                        console.log(data.Data.strFirstDesc);
                        return [4 /*yield*/, this.wait(2000)];
                    case 19:
                        _l.sent();
                        _l.label = 20;
                    case 20:
                        pick.dwNum--;
                        return [3 /*break*/, 17];
                    case 21:
                        _e = _d.next();
                        return [3 /*break*/, 16];
                    case 22: return [3 /*break*/, 25];
                    case 23:
                        e_4_1 = _l.sent();
                        e_4 = { error: e_4_1 };
                        return [3 /*break*/, 25];
                    case 24:
                        try {
                            if (_e && !_e.done && (_j = _d["return"])) _j.call(_d);
                        }
                        finally { if (e_4) throw e_4.error; }
                        return [7 /*endfinally*/];
                    case 25:
                        _l.trys.push([25, 31, 32, 33]);
                        _f = __values(['fun', 'shop', 'sea', 'food']), _g = _f.next();
                        _l.label = 26;
                    case 26:
                        if (!!_g.done) return [3 /*break*/, 30];
                        strBuildIndex = _g.value;
                        return [4 /*yield*/, this.api('user/CollectCoin', {
                                _stk: '_cfd_t,_imbfd,bizCode,dwEnv,dwType,ptag,source,strBuildIndex,strDeviceId,strZone',
                                dwType: '1',
                                strBuildIndex: strBuildIndex
                            })];
                    case 27:
                        data = _l.sent();
                        console.log("".concat(strBuildIndex, "\u6536\u91D1\u5E01:"), data.ddwCoin);
                        return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
                    case 28:
                        _l.sent();
                        _l.label = 29;
                    case 29:
                        _g = _f.next();
                        return [3 /*break*/, 26];
                    case 30: return [3 /*break*/, 33];
                    case 31:
                        e_5_1 = _l.sent();
                        e_5 = { error: e_5_1 };
                        return [3 /*break*/, 33];
                    case 32:
                        try {
                            if (_g && !_g.done && (_k = _f["return"])) _k.call(_f);
                        }
                        finally { if (e_5) throw e_5.error; }
                        return [7 /*endfinally*/];
                    case 33: return [2 /*return*/];
                }
            });
        });
    };
    return Cfd;
}(TS_JDHelloWorld_1.JDHelloWorld));
new Cfd().init().then();
