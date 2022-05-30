"use strict";
/**
 * export DELETE_CART_WHITELIST="name1&name2"
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
var Jd_deleteCart = /** @class */ (function (_super) {
    __extends(Jd_deleteCart, _super);
    function Jd_deleteCart() {
        return _super.call(this) || this;
    }
    Jd_deleteCart.prototype.init = function () {
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
    Jd_deleteCart.prototype.main = function (user) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () {
            var whiteList, res, venderCart, areaId, venderCart_1, venderCart_1_1, vender, postBody, _c, _d, sortedItem, pid, _loop_1, _e, _f, p, e_1_1;
            var e_1, _g, e_2, _h, e_3, _j;
            return __generator(this, function (_k) {
                switch (_k.label) {
                    case 0:
                        whiteList = process.env.DELETE_CART_WHITELIST
                            ? process.env.DELETE_CART_WHITELIST.split('&')
                            : [];
                        return [4 /*yield*/, this.get('https://p.m.jd.com/cart/cart.action?fromnav=1', {
                                'Host': 'p.m.jd.com',
                                'User-Agent': user.UserAgent,
                                'Referer': 'https://m.jd.com/',
                                cookie: user.cookie
                            })];
                    case 1:
                        res = _k.sent();
                        res = JSON.parse(res.match(/window\.cartData = ([^;]*)/)[1]);
                        venderCart = res.cart.venderCart, areaId = res.addrInfo.areaId;
                        _k.label = 2;
                    case 2:
                        _k.trys.push([2, 8, 9, 10]);
                        venderCart_1 = __values(venderCart), venderCart_1_1 = venderCart_1.next();
                        _k.label = 3;
                    case 3:
                        if (!!venderCart_1_1.done) return [3 /*break*/, 7];
                        vender = venderCart_1_1.value;
                        postBody = '';
                        try {
                            for (_c = (e_2 = void 0, __values(vender.sortedItems)), _d = _c.next(); !_d.done; _d = _c.next()) {
                                sortedItem = _d.value;
                                pid = (_b = (_a = sortedItem.polyItem) === null || _a === void 0 ? void 0 : _a.promotion) === null || _b === void 0 ? void 0 : _b.pid;
                                _loop_1 = function (p) {
                                    var commlist = p.mainSku.id, name_1 = p.mainSku.name, skuUuid = p.skuUuid;
                                    var pass = whiteList.some(function (item) { return name_1.includes(item); });
                                    if (!pass) {
                                        pid
                                            ? postBody += "".concat(commlist, ",,1,").concat(commlist, ",11,").concat(pid, ",0,skuUuid:").concat(skuUuid, "@@useUuid:0$")
                                            : postBody += "".concat(commlist, ",,1,").concat(commlist, ",1,,0,skuUuid:").concat(skuUuid, "@@useUuid:0$");
                                    }
                                    console.log(pass, name_1);
                                };
                                try {
                                    for (_e = (e_3 = void 0, __values(sortedItem.polyItem.products)), _f = _e.next(); !_f.done; _f = _e.next()) {
                                        p = _f.value;
                                        _loop_1(p);
                                    }
                                }
                                catch (e_3_1) { e_3 = { error: e_3_1 }; }
                                finally {
                                    try {
                                        if (_f && !_f.done && (_j = _e["return"])) _j.call(_e);
                                    }
                                    finally { if (e_3) throw e_3.error; }
                                }
                            }
                        }
                        catch (e_2_1) { e_2 = { error: e_2_1 }; }
                        finally {
                            try {
                                if (_d && !_d.done && (_h = _c["return"])) _h.call(_c);
                            }
                            finally { if (e_2) throw e_2.error; }
                        }
                        if (!postBody) return [3 /*break*/, 6];
                        return [4 /*yield*/, this.post('https://api.m.jd.com/client.action/deal/mshopcart/rmvcmdy/m?sceneval=2&g_login_type=1&g_ty=ajax', "body={\"tenantCode\":\"jgm\",\"bizModelCode\":\"1\",\"bizModeClientType\":\"M\",\"externalLoginType\":1,\"platform\":3,\"pingouchannel\":0,\"commlist\":".concat(JSON.stringify(postBody), ",\"type\":0,\"checked\":0,\"locationid\":\"").concat(areaId, "\",\"templete\":1,\"reg\":1,\"scene\":0,\"version\":\"20190418\",\"traceid\":\"\",\"sceneval\":2}&loginType=2&loginWQBiz=golden-trade&appid=m_core&platform=3&functionId=deal_mshopcart_rmvcmdy_m&uuid=").concat(this.getRandomNumString(17), "&osVersion=&screen=jdm&d_brand=&d_model=&lang=zh_CN"), {
                                'Host': 'api.m.jd.com',
                                'Cookie': user.cookie,
                                'accept': 'application/json',
                                'content-type': 'application/x-www-form-urlencoded',
                                'origin': 'https://p.m.jd.com',
                                'user-agent': user.UserAgent,
                                'referer': 'https://p.m.jd.com/'
                            })];
                    case 4:
                        res = _k.sent();
                        res.errId === '0' ? console.log('删除成功✅') : console.log(res.errMsg);
                        return [4 /*yield*/, this.wait(2000)];
                    case 5:
                        _k.sent();
                        _k.label = 6;
                    case 6:
                        venderCart_1_1 = venderCart_1.next();
                        return [3 /*break*/, 3];
                    case 7: return [3 /*break*/, 10];
                    case 8:
                        e_1_1 = _k.sent();
                        e_1 = { error: e_1_1 };
                        return [3 /*break*/, 10];
                    case 9:
                        try {
                            if (venderCart_1_1 && !venderCart_1_1.done && (_g = venderCart_1["return"])) _g.call(venderCart_1);
                        }
                        finally { if (e_1) throw e_1.error; }
                        return [7 /*endfinally*/];
                    case 10: return [2 /*return*/];
                }
            });
        });
    };
    return Jd_deleteCart;
}(TS_JDHelloWorld_1.JDHelloWorld));
new Jd_deleteCart().init().then();
