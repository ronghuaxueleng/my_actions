"use strict";
/**
 * 清空购物车
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
exports.__esModule = true;
var axios_1 = require("axios");
var TS_USER_AGENTS_1 = require("./TS_USER_AGENTS");
var cookie = '', res = '', UserName, index;
var UA = "jdapp;JD4iPhone/167724 (iPhone; iOS ".concat((0, TS_USER_AGENTS_1.getRandomNumberByRange)(12, 16), ".").concat((0, TS_USER_AGENTS_1.getRandomNumberByRange)(0, 4), "; Scale/3.00)");
!(function () { return __awaiter(void 0, void 0, void 0, function () {
    var cookiesArr, i, areaId, traceId, delCount, cartCount, venderCart, venderCart_1, venderCart_1_1, vender, _a, _b, sortedItem, pid, postBody, _c, _d, p, commlist, name_1, skuUuid, e_1_1, e_2_1;
    var e_2, _e, e_1, _f, e_3, _g;
    var _h, _j;
    return __generator(this, function (_k) {
        switch (_k.label) {
            case 0: return [4 /*yield*/, (0, TS_USER_AGENTS_1.requireConfig)()];
            case 1:
                cookiesArr = _k.sent();
                i = 0;
                _k.label = 2;
            case 2:
                if (!(i < cookiesArr.length)) return [3 /*break*/, 21];
                cookie = cookiesArr[i];
                UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                index = i + 1;
                console.log("\n\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7".concat(index, "\u3011").concat(UserName, "\n"));
                return [4 /*yield*/, getCartData()];
            case 3:
                res = _k.sent();
                areaId = res.areaId, traceId = res.traceId, delCount = 0, cartCount = parseInt(res.cartJson.num), venderCart = res.cart.venderCart;
                console.log('购物车有', cartCount, '件商品');
                if (!(cartCount > 0)) return [3 /*break*/, 20];
                _k.label = 4;
            case 4:
                _k.trys.push([4, 17, 18, 19]);
                venderCart_1 = (e_2 = void 0, __values(venderCart)), venderCart_1_1 = venderCart_1.next();
                _k.label = 5;
            case 5:
                if (!!venderCart_1_1.done) return [3 /*break*/, 16];
                vender = venderCart_1_1.value;
                _k.label = 6;
            case 6:
                _k.trys.push([6, 13, 14, 15]);
                _a = (e_1 = void 0, __values(vender.sortedItems)), _b = _a.next();
                _k.label = 7;
            case 7:
                if (!!_b.done) return [3 /*break*/, 12];
                sortedItem = _b.value;
                pid = (_j = (_h = sortedItem.polyItem) === null || _h === void 0 ? void 0 : _h.promotion) === null || _j === void 0 ? void 0 : _j.pid, postBody = '';
                try {
                    for (_c = (e_3 = void 0, __values(sortedItem.polyItem.products)), _d = _c.next(); !_d.done; _d = _c.next()) {
                        p = _d.value;
                        commlist = p.mainSku.id, name_1 = p.mainSku.name, skuUuid = p.skuUuid;
                        console.log('开始删除', name_1);
                        if (pid)
                            postBody = "pingouchannel=0&commlist=".concat(commlist, ",,1,").concat(commlist, ",11,").concat(pid, ",0,skuUuid:").concat(skuUuid, "@@useUuid:0&type=0&checked=0&locationid=1-72-2819-0&templete=1&reg=1&scene=0&version=20190418&traceid=1382552434001752779&tabMenuType=1&sceneval=2");
                        else
                            postBody = "pingouchannel=0&commlist=".concat(commlist, ",,1,").concat(commlist, ",1,,0,skuUuid:").concat(skuUuid, "@@useUuid:0&type=0&checked=0&locationid=").concat(areaId, "&templete=1&reg=1&scene=0&version=20190418&traceid=").concat(traceId, "&tabMenuType=1&sceneval=2");
                    }
                }
                catch (e_3_1) { e_3 = { error: e_3_1 }; }
                finally {
                    try {
                        if (_d && !_d.done && (_g = _c["return"])) _g.call(_c);
                    }
                    finally { if (e_3) throw e_3.error; }
                }
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.post)('https://wq.jd.com/deal/mshopcart/rmvCmdy?sceneval=2&g_login_type=1&g_ty=ajax', postBody, {
                        'authority': 'wq.jd.com',
                        'accept': 'application/json',
                        'user-agent': UA,
                        'content-type': 'application/x-www-form-urlencoded',
                        'origin': 'https://p.m.jd.com',
                        'referer': 'https://p.m.jd.com/',
                        'cookie': cookie
                    })];
            case 8:
                res = _k.sent();
                if (!(res.errId === '0')) return [3 /*break*/, 10];
                console.log('删除成功✅');
                delCount++;
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 9:
                _k.sent();
                return [3 /*break*/, 11];
            case 10:
                console.log(res.errMsg);
                return [3 /*break*/, 12];
            case 11:
                _b = _a.next();
                return [3 /*break*/, 7];
            case 12: return [3 /*break*/, 15];
            case 13:
                e_1_1 = _k.sent();
                e_1 = { error: e_1_1 };
                return [3 /*break*/, 15];
            case 14:
                try {
                    if (_b && !_b.done && (_f = _a["return"])) _f.call(_a);
                }
                finally { if (e_1) throw e_1.error; }
                return [7 /*endfinally*/];
            case 15:
                venderCart_1_1 = venderCart_1.next();
                return [3 /*break*/, 5];
            case 16: return [3 /*break*/, 19];
            case 17:
                e_2_1 = _k.sent();
                e_2 = { error: e_2_1 };
                return [3 /*break*/, 19];
            case 18:
                try {
                    if (venderCart_1_1 && !venderCart_1_1.done && (_e = venderCart_1["return"])) _e.call(venderCart_1);
                }
                finally { if (e_2) throw e_2.error; }
                return [7 /*endfinally*/];
            case 19:
                console.log('删除完成，共删除', delCount, '件商品');
                if (delCount === cartCount)
                    console.log('购物车已清空');
                _k.label = 20;
            case 20:
                i++;
                return [3 /*break*/, 2];
            case 21: return [2 /*return*/];
        }
    });
}); })();
function getCartData() {
    return __awaiter(this, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios_1["default"].get('https://p.m.jd.com/cart/cart.action?fromnav=1', {
                        headers: {
                            'Host': 'p.m.jd.com',
                            'User-Agent': UA,
                            'Referer': 'https://m.jd.com/',
                            cookie: cookie
                        }
                    })];
                case 1:
                    data = (_a.sent()).data;
                    data = data.match(/window\.cartData =([\s\S]*)window\._PFM_TIMING\[2] /)[1].replace(/\s*/g, '');
                    return [2 /*return*/, JSON.parse(data)];
            }
        });
    });
}
