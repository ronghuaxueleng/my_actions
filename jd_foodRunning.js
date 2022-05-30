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
exports.__esModule = true;
var axios_1 = require("axios");
var TS_USER_AGENTS_1 = require("./TS_USER_AGENTS");
var cookie = '', cookiesArr = [], res;
var token2 = '', buyerNick = '', UserName;
var index, remain = 0;
!(function () { return __awaiter(void 0, void 0, void 0, function () {
    var i, i_1, tasks, _a, _b, t, i_2, shopList, _c, _d, s, e_1_1, i_3, e_2_1;
    var e_2, _e, e_1, _f;
    return __generator(this, function (_g) {
        switch (_g.label) {
            case 0: return [4 /*yield*/, requireConfig()];
            case 1:
                _g.sent();
                i = 0;
                _g.label = 2;
            case 2:
                if (!(i < cookiesArr.length)) return [3 /*break*/, 41];
                cookie = cookiesArr[i];
                UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                index = i + 1;
                console.log("\n\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7".concat(index, "\u3011").concat(UserName, "\n"));
                return [4 /*yield*/, getIsvToken2()];
            case 3:
                _g.sent();
                return [4 /*yield*/, api('setMixNick')];
            case 4:
                res = _g.sent();
                buyerNick = res.data.data.msg;
                console.log('buyerNick:', buyerNick);
                return [4 /*yield*/, api('UserInfo')];
            case 5:
                res = _g.sent();
                console.log('total:', res.data.data.totalChance, 'remain:', res.data.data.remainChance);
                remain = res.data.data.remainChance;
                // 换豆
                if (remain > 50000) {
                    console.log('乞丐版暂无换豆功能！');
                }
                return [4 /*yield*/, api('SendCoinNum')];
            case 6:
                // 333 * 3
                res = _g.sent();
                if (!(res.data.data.missionTypes.hasGotNum !== res.data.data.missionTypes.dayTop)) return [3 /*break*/, 11];
                i_1 = 0;
                _g.label = 7;
            case 7:
                if (!(i_1 < 3)) return [3 /*break*/, 11];
                return [4 /*yield*/, mission('treeCoin', i_1, 'treeCoin')];
            case 8:
                res = _g.sent();
                console.log(res);
                return [4 /*yield*/, wait(5000)];
            case 9:
                _g.sent();
                _g.label = 10;
            case 10:
                i_1++;
                return [3 /*break*/, 7];
            case 11: return [4 /*yield*/, api('DailyTask')];
            case 12:
                tasks = _g.sent();
                _g.label = 13;
            case 13:
                _g.trys.push([13, 38, 39, 40]);
                _a = (e_2 = void 0, __values(tasks.data.data)), _b = _a.next();
                _g.label = 14;
            case 14:
                if (!!_b.done) return [3 /*break*/, 37];
                t = _b.value;
                if (!(t.dayTop !== t.hasGotNum)) return [3 /*break*/, 35];
                if (!(t.type === 'viewBanner')) return [3 /*break*/, 19];
                i_2 = 1;
                _g.label = 15;
            case 15:
                if (!(i_2 < 4)) return [3 /*break*/, 19];
                return [4 /*yield*/, mission('', i_2, t.type)];
            case 16:
                res = _g.sent();
                if (res.errorCode === 200 || res.errorCode === '200') {
                    console.log('任务完成，获得：', res.data.data.sendNum);
                }
                else {
                    console.log('任务失败：', res);
                }
                return [4 /*yield*/, wait(5000)];
            case 17:
                _g.sent();
                _g.label = 18;
            case 18:
                i_2++;
                return [3 /*break*/, 15];
            case 19:
                if (!(t.type === 'viewShop')) return [3 /*break*/, 29];
                console.log(t.missionName);
                return [4 /*yield*/, api('ShopList')];
            case 20:
                shopList = _g.sent();
                _g.label = 21;
            case 21:
                _g.trys.push([21, 27, 28, 29]);
                _c = (e_1 = void 0, __values(shopList.data.data)), _d = _c.next();
                _g.label = 22;
            case 22:
                if (!!_d.done) return [3 /*break*/, 26];
                s = _d.value;
                console.log(s.id, s.shopTitle);
                return [4 /*yield*/, mission('', s.id, t.type)];
            case 23:
                res = _g.sent();
                if (res.errorCode === 200 || res.errorCode === '200') {
                    console.log('任务完成，获得：', res.data.data.sendNum);
                }
                else {
                    console.log('任务失败：', res);
                }
                return [4 /*yield*/, wait(5000)];
            case 24:
                _g.sent();
                _g.label = 25;
            case 25:
                _d = _c.next();
                return [3 /*break*/, 22];
            case 26: return [3 /*break*/, 29];
            case 27:
                e_1_1 = _g.sent();
                e_1 = { error: e_1_1 };
                return [3 /*break*/, 29];
            case 28:
                try {
                    if (_d && !_d.done && (_f = _c["return"])) _f.call(_c);
                }
                finally { if (e_1) throw e_1.error; }
                return [7 /*endfinally*/];
            case 29:
                if (!(t.type === 'viewGoods')) return [3 /*break*/, 34];
                i_3 = 1;
                _g.label = 30;
            case 30:
                if (!(i_3 < 5)) return [3 /*break*/, 34];
                return [4 /*yield*/, mission('', i_3, t.type)];
            case 31:
                res = _g.sent();
                if (res.errorCode === 200 || res.errorCode === '200') {
                    console.log('任务完成，获得：', res.data.data.sendNum);
                }
                else {
                    console.log('任务失败：', res);
                }
                return [4 /*yield*/, wait(5000)];
            case 32:
                _g.sent();
                _g.label = 33;
            case 33:
                i_3++;
                return [3 /*break*/, 30];
            case 34: return [3 /*break*/, 36];
            case 35:
                console.log("".concat(t.missionName, "--\u5DF2\u5168\u90E8\u5B8C\u6210"));
                _g.label = 36;
            case 36:
                _b = _a.next();
                return [3 /*break*/, 14];
            case 37: return [3 /*break*/, 40];
            case 38:
                e_2_1 = _g.sent();
                e_2 = { error: e_2_1 };
                return [3 /*break*/, 40];
            case 39:
                try {
                    if (_b && !_b.done && (_e = _a["return"])) _e.call(_a);
                }
                finally { if (e_2) throw e_2.error; }
                return [7 /*endfinally*/];
            case 40:
                i++;
                return [3 /*break*/, 2];
            case 41: return [2 /*return*/];
        }
    });
}); })();
function mission(fn, goodsNumId, missionType) {
    var _this = this;
    var body = {
        "jsonRpc": "2.0",
        "params": {
            "commonParameter": {
                "appkey": "51B59BB805903DA4CE513D29EC448375",
                "m": "POST",
                "sign": "0028b0b0431cdff0e69353b74a3aad8e",
                "timestamp": Date.now(),
                "userId": 10299171
            },
            "admJson": {
                "missionType": missionType,
                "method": "/foodRunning/complete/mission",
                "actId": "jd_food_running",
                "buyerNick": buyerNick,
                "pushWay": 1,
                "userId": 10299171
            }
        }
    };
    if (fn === 'jdAward1') {
        Object.assign(body.params.admJson, { awardId: fn });
    }
    else if (fn === 'treeCoin') {
        Object.assign(body.params.admJson, { which: goodsNumId });
    }
    else {
        Object.assign(body.params.admJson, { goodsNumId: goodsNumId });
    }
    return new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios_1["default"].post("https://jinggengjcq-isv.isvjcloud.com/dm/front/foodRunning/complete/mission?open_id=&mix_nick=&bizExtString=&user_id=10299171", JSON.stringify(body), {
                        headers: {
                            'Origin': 'https://jinggengjcq-isv.isvjcloud.com',
                            'X-Requested-With': 'XMLHttpRequest',
                            'User-Agent': TS_USER_AGENTS_1["default"],
                            'Referer': 'https://jinggengjcq-isv.isvjcloud.com/paoku/index.html',
                            'Content-Type': 'application/json; charset=UTF-8',
                            'Host': 'jinggengjcq-isv.isvjcloud.com'
                        }
                    })];
                case 1:
                    data = (_a.sent()).data;
                    resolve(data);
                    return [2 /*return*/];
            }
        });
    }); });
}
function api(fn) {
    var _this = this;
    return new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios_1["default"].post("https://jinggengjcq-isv.isvjcloud.com/dm/front/foodRunning/".concat(fn, "?open_id=&mix_nick=&bizExtString=&user_id=10299171"), JSON.stringify({
                        "jsonRpc": "2.0",
                        "params": {
                            "commonParameter": {
                                "appkey": "51B59BB805903DA4CE513D29EC448375",
                                "m": "POST",
                                "sign": "c29adb1d2c970d64c233d66cbcf3fcdf",
                                "timestamp": Date.now(),
                                "userId": "10299171"
                            },
                            "admJson": {
                                "source": "01",
                                "strTMMixNick": token2,
                                "method": "/foodRunning/".concat(fn),
                                "actId": "jd_food_running",
                                "buyerNick": buyerNick,
                                "pushWay": 1,
                                "userId": "10299171"
                            }
                        }
                    }), {
                        headers: {
                            'Origin': 'https://jinggengjcq-isv.isvjcloud.com',
                            'X-Requested-With': 'XMLHttpRequest',
                            'User-Agent': TS_USER_AGENTS_1["default"],
                            'Referer': 'https://jinggengjcq-isv.isvjcloud.com/paoku/index.html',
                            'Content-Type': 'application/json; charset=UTF-8',
                            'Host': 'jinggengjcq-isv.isvjcloud.com'
                        }
                    })];
                case 1:
                    data = (_a.sent()).data;
                    resolve(data);
                    return [2 /*return*/];
            }
        });
    }); });
}
function getIsvToken2() {
    var _this = this;
    return new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios_1["default"].post("https://api.m.jd.com/client.action?functionId=isvObfuscator&clientVersion=10.0.2&client=android&uuid=818aa057737ba6a4&st=1623934998790&sign=e571148c8dfb456a1795d249c6aa3956&sv=100", 'body=%7B%22id%22%3A%22%22%2C%22url%22%3A%22https%3A//xinruidddj-isv.isvjcloud.com%22%7D', {
                        headers: {
                            'Host': 'api.m.jd.com',
                            'user-agent': TS_USER_AGENTS_1["default"],
                            'content-type': 'application/x-www-form-urlencoded',
                            'Cookie': cookie
                        }
                    })];
                case 1:
                    data = (_a.sent()).data;
                    token2 = data.token;
                    cookie += 'IsvToken=' + token2 + ';';
                    resolve();
                    return [2 /*return*/];
            }
        });
    }); });
}
function requireConfig() {
    return new Promise(function (resolve) {
        console.log('\n====================Hello World====================\n');
        console.log('开始获取配置文件\n');
        var jdCookieNode = require('./jdCookie.js');
        Object.keys(jdCookieNode).forEach(function (item) {
            if (jdCookieNode[item]) {
                cookiesArr.push(jdCookieNode[item]);
            }
        });
        console.log("\u5171".concat(cookiesArr.length, "\u4E2A\u4EAC\u4E1C\u8D26\u53F7\n"));
        resolve(0);
    });
}
function wait(t) {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve();
        }, t);
    });
}
