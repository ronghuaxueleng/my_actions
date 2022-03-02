"use strict";
/**
 * 京东快递更新通知
 * cron: 0 0-23/4 * * *
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
exports.__esModule = true;
var path = require("path");
var sendNotify_1 = require("./sendNotify");
var fs_1 = require("fs");
var TS_USER_AGENTS_1 = require("./TS_USER_AGENTS");
var pushplus_1 = require("./utils/pushplus");
var cookie = '', UserName, allMessage = '', res = '';
!(function () { return __awaiter(void 0, void 0, void 0, function () {
    var cookiesArr, except, orders, pushplusArr, pushplusUser, pushplusArr_1, pushplusArr_1_1, user, _a, _b, _c, index, value, message, markdown, i, headers, _d, _e, order, orderId, orderType, title, t, status_1, carrier, carriageId, e_1_1, e_2_1, account, account_1, account_1_1, acc;
    var e_3, _f, e_2, _g, e_1, _h, e_4, _j;
    var _k, _l;
    return __generator(this, function (_m) {
        switch (_m.label) {
            case 0: return [4 /*yield*/, (0, TS_USER_AGENTS_1.requireConfig)()];
            case 1:
                cookiesArr = _m.sent();
                except = (0, TS_USER_AGENTS_1.exceptCookie)(path.basename(__filename));
                orders = {}, pushplusUser = [];
                try {
                    pushplusArr = JSON.parse((0, fs_1.readFileSync)('./utils/account.json').toString());
                }
                catch (e) {
                    console.log('utils/pushplus.json load failed');
                }
                try {
                    for (pushplusArr_1 = __values(pushplusArr), pushplusArr_1_1 = pushplusArr_1.next(); !pushplusArr_1_1.done; pushplusArr_1_1 = pushplusArr_1.next()) {
                        user = pushplusArr_1_1.value;
                        if (user.pushplus)
                            pushplusUser.push(decodeURIComponent(user.pt_pin));
                    }
                }
                catch (e_3_1) { e_3 = { error: e_3_1 }; }
                finally {
                    try {
                        if (pushplusArr_1_1 && !pushplusArr_1_1.done && (_f = pushplusArr_1["return"])) _f.call(pushplusArr_1);
                    }
                    finally { if (e_3) throw e_3.error; }
                }
                if ((0, fs_1.existsSync)('./json')) {
                    if ((0, fs_1.existsSync)('./json/jd_track.json')) {
                        orders = JSON.parse((0, fs_1.readFileSync)('./json/jd_track.json').toString() || '{}');
                    }
                    else {
                        (0, fs_1.writeFileSync)('./json/jd_track.json', '{}');
                    }
                }
                else {
                    (0, fs_1.mkdirSync)('./json');
                    (0, fs_1.writeFileSync)('./json/jd_track.json', '{}');
                }
                _m.label = 2;
            case 2:
                _m.trys.push([2, 19, 20, 21]);
                _a = __values(cookiesArr.entries()), _b = _a.next();
                _m.label = 3;
            case 3:
                if (!!_b.done) return [3 /*break*/, 18];
                _c = __read(_b.value, 2), index = _c[0], value = _c[1];
                cookie = value;
                UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                console.log("\n\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7".concat(index + 1, "\u3011").concat(UserName, "\n"));
                if (except.includes(encodeURIComponent(UserName))) {
                    console.log('已设置跳过');
                    return [3 /*break*/, 17];
                }
                message = '', markdown = '', i = 1;
                headers = {
                    'authority': 'wq.jd.com',
                    'user-agent': TS_USER_AGENTS_1["default"],
                    'referer': 'https://wqs.jd.com/',
                    'cookie': cookie
                };
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.get)("https://wq.jd.com/bases/orderlist/list?order_type=2&start_page=1&last_page=0&page_size=10&callersource=mainorder&t=".concat(Date.now(), "&sceneval=2&_=").concat(Date.now(), "&sceneval=2"), '', headers)];
            case 4:
                res = _m.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 5:
                _m.sent();
                _m.label = 6;
            case 6:
                _m.trys.push([6, 11, 12, 13]);
                _d = (e_1 = void 0, __values(res.orderList)), _e = _d.next();
                _m.label = 7;
            case 7:
                if (!!_e.done) return [3 /*break*/, 10];
                order = _e.value;
                orderId = order.orderId;
                orderType = order.orderType;
                title = order.productList[0].title;
                t = ((_k = order.progressInfo) === null || _k === void 0 ? void 0 : _k.tip) || null;
                status_1 = ((_l = order.progressInfo) === null || _l === void 0 ? void 0 : _l.content) || null;
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.get)("https://wq.jd.com/bases/wuliudetail/dealloglist?deal_id=".concat(orderId, "&orderstate=15&ordertype=").concat(orderType, "&t=").concat(Date.now(), "&sceneval=2"), '', headers)];
            case 8:
                res = _m.sent();
                carrier = res.carrier, carriageId = res.carriageId;
                if (t && status_1) {
                    if (status_1.match(/(?=签收|已取走|已暂存)/))
                        return [3 /*break*/, 9];
                    if (!pushplusUser.includes(UserName)) {
                        console.log(title);
                        console.log('\t', t, status_1);
                        console.log();
                    }
                    else {
                        console.log('隐私保护，不显示日志');
                    }
                    if (!Object.keys(orders).includes(orderId) || orders[orderId]['status'] !== status_1) {
                        if (pushplusUser.includes(UserName)) {
                            console.log('+ pushplus');
                            markdown += "".concat(i++, ". ").concat(title, "\n\t- ").concat(carrier, "  ").concat(carriageId, "\n\t- ").concat(t, "  ").concat(status_1, "\n");
                        }
                        else {
                            console.log('+ sendNotify');
                            message += "".concat(title, "\n").concat(carrier, "  ").concat(carriageId, "\n").concat(t, "  ").concat(status_1, "\n\n");
                        }
                    }
                    orders[orderId] = {
                        user: UserName,
                        title: title,
                        t: t,
                        status: status_1,
                        carrier: carrier,
                        carriageId: carriageId
                    };
                }
                _m.label = 9;
            case 9:
                _e = _d.next();
                return [3 /*break*/, 7];
            case 10: return [3 /*break*/, 13];
            case 11:
                e_1_1 = _m.sent();
                e_1 = { error: e_1_1 };
                return [3 /*break*/, 13];
            case 12:
                try {
                    if (_e && !_e.done && (_h = _d["return"])) _h.call(_d);
                }
                finally { if (e_1) throw e_1.error; }
                return [7 /*endfinally*/];
            case 13:
                if (message) {
                    message = "<\u4EAC\u4E1C\u8D26\u53F7".concat(index + 1, ">  ").concat(UserName, "\n\n").concat(message);
                    allMessage += message;
                }
                if (!markdown) return [3 /*break*/, 15];
                markdown = "#### <".concat(UserName, ">\n").concat(markdown);
                return [4 /*yield*/, (0, pushplus_1.pushplus)('京东快递更新', markdown, 'markdown')];
            case 14:
                _m.sent();
                _m.label = 15;
            case 15: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 16:
                _m.sent();
                _m.label = 17;
            case 17:
                _b = _a.next();
                return [3 /*break*/, 3];
            case 18: return [3 /*break*/, 21];
            case 19:
                e_2_1 = _m.sent();
                e_2 = { error: e_2_1 };
                return [3 /*break*/, 21];
            case 20:
                try {
                    if (_b && !_b.done && (_g = _a["return"])) _g.call(_a);
                }
                finally { if (e_2) throw e_2.error; }
                return [7 /*endfinally*/];
            case 21:
                account = [];
                try {
                    account = JSON.parse((0, fs_1.readFileSync)('./utils/account.json').toString());
                }
                catch (e) {
                    console.log('utils/account.json load failed');
                }
                // 删除已签收
                Object.keys(orders).map(function (key) {
                    if (orders[key].status.match(/(?=签收|已取走|已暂存)/)) {
                        delete orders[key];
                    }
                    if (pushplusUser.includes(orders[key].user)) {
                        orders[key].title = '******';
                    }
                });
                // 替换通知中的用户名为备注
                orders = JSON.stringify(orders, null, 2);
                try {
                    for (account_1 = __values(account), account_1_1 = account_1.next(); !account_1_1.done; account_1_1 = account_1.next()) {
                        acc = account_1_1.value;
                        orders = orders.replace(new RegExp(decodeURIComponent(acc.pt_pin), 'g'), acc.remarks);
                    }
                }
                catch (e_4_1) { e_4 = { error: e_4_1 }; }
                finally {
                    try {
                        if (account_1_1 && !account_1_1.done && (_j = account_1["return"])) _j.call(account_1);
                    }
                    finally { if (e_4) throw e_4.error; }
                }
                (0, fs_1.writeFileSync)('./json/jd_track.json', orders);
                if (!allMessage) return [3 /*break*/, 23];
                return [4 /*yield*/, (0, sendNotify_1.sendNotify)('京东快递更新', allMessage)];
            case 22:
                _m.sent();
                _m.label = 23;
            case 23: return [2 /*return*/];
        }
    });
}); })();
