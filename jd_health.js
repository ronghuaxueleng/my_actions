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
var TEST = /** @class */ (function (_super) {
    __extends(TEST, _super);
    function TEST() {
        return _super.call(this) || this;
    }
    TEST.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.run(new TEST)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    TEST.prototype.api = function (fn, body) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.post('https://api.m.jd.com/', "functionId=".concat(fn, "&body=").concat(encodeURIComponent(JSON.stringify(body)), "&client=wh5&clientVersion=1.0.0&uuid="), {
                            'Host': 'api.m.jd.com',
                            'Origin': 'https://h5.m.jd.com',
                            'User-Agent': this.user.UserAgent,
                            'Referer': 'https://h5.m.jd.com/',
                            'Content-Type': 'application/x-www-form-urlencoded',
                            'Cookie': this.user.cookie
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    TEST.prototype.main = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            var res, _a, _b, t, _c, _d, tp, e_1_1, e_2_1, e_3;
            var e_2, _e, e_1, _f;
            return __generator(this, function (_g) {
                switch (_g.label) {
                    case 0:
                        this.user = user;
                        return [4 /*yield*/, this.api('jdhealth_getTaskDetail', { "buildingId": "", "taskId": "", "channelId": 1 })];
                    case 1:
                        res = _g.sent();
                        _g.label = 2;
                    case 2:
                        _g.trys.push([2, 25, , 26]);
                        _g.label = 3;
                    case 3:
                        _g.trys.push([3, 22, 23, 24]);
                        _a = __values(res.data.result.taskVos), _b = _a.next();
                        _g.label = 4;
                    case 4:
                        if (!!_b.done) return [3 /*break*/, 21];
                        t = _b.value;
                        if (!(t.status === 1 || t.status === 3)) return [3 /*break*/, 20];
                        console.log(t.taskName);
                        _g.label = 5;
                    case 5:
                        _g.trys.push([5, 18, 19, 20]);
                        _c = (e_1 = void 0, __values(t.productInfoVos || t.followShopVo || t.shoppingActivityVos || [])), _d = _c.next();
                        _g.label = 6;
                    case 6:
                        if (!!_d.done) return [3 /*break*/, 17];
                        tp = _d.value;
                        if (!(tp.status === 1)) return [3 /*break*/, 16];
                        console.log('\t', tp.skuName || tp.shopName || tp.title);
                        if (!(t.taskName.includes('早睡打卡') && t.taskBeginTime < Date.now() && t.taskEndTime > Date.now())) return [3 /*break*/, 9];
                        return [4 /*yield*/, this.api('jdhealth_collectScore', { "taskToken": tp.taskToken, "taskId": t.taskId, "actionType": 1 })];
                    case 7:
                        res = _g.sent();
                        return [4 /*yield*/, this.wait(2000)];
                    case 8:
                        _g.sent();
                        console.log('\t', res.data.bizMsg);
                        _g.label = 9;
                    case 9:
                        if (!t.waitDuration) return [3 /*break*/, 12];
                        return [4 /*yield*/, this.api('jdhealth_collectScore', { "taskToken": tp.taskToken, "taskId": t.taskId, "actionType": 1 })];
                    case 10:
                        res = _g.sent();
                        console.log('\t', res.data.bizMsg);
                        return [4 /*yield*/, this.wait(t.waitDuration * 1000)];
                    case 11:
                        _g.sent();
                        _g.label = 12;
                    case 12: return [4 /*yield*/, this.api('jdhealth_collectScore', { "taskToken": tp.taskToken, "taskId": t.taskId, "actionType": 0 })];
                    case 13:
                        res = _g.sent();
                        if (!res.data.bizMsg.includes('做完')) return [3 /*break*/, 14];
                        console.log(res.data.bizMsg);
                        return [3 /*break*/, 17];
                    case 14:
                        console.log(res.data.bizMsg, parseInt(res.data.result.score));
                        return [4 /*yield*/, this.wait(1500)];
                    case 15:
                        _g.sent();
                        _g.label = 16;
                    case 16:
                        _d = _c.next();
                        return [3 /*break*/, 6];
                    case 17: return [3 /*break*/, 20];
                    case 18:
                        e_1_1 = _g.sent();
                        e_1 = { error: e_1_1 };
                        return [3 /*break*/, 20];
                    case 19:
                        try {
                            if (_d && !_d.done && (_f = _c["return"])) _f.call(_c);
                        }
                        finally { if (e_1) throw e_1.error; }
                        return [7 /*endfinally*/];
                    case 20:
                        _b = _a.next();
                        return [3 /*break*/, 4];
                    case 21: return [3 /*break*/, 24];
                    case 22:
                        e_2_1 = _g.sent();
                        e_2 = { error: e_2_1 };
                        return [3 /*break*/, 24];
                    case 23:
                        try {
                            if (_b && !_b.done && (_e = _a["return"])) _e.call(_a);
                        }
                        finally { if (e_2) throw e_2.error; }
                        return [7 /*endfinally*/];
                    case 24: return [3 /*break*/, 26];
                    case 25:
                        e_3 = _g.sent();
                        console.log('Error', e_3);
                        return [3 /*break*/, 26];
                    case 26: return [2 /*return*/];
                }
            });
        });
    };
    return TEST;
}(TS_JDHelloWorld_1.JDHelloWorld));
new TEST().init().then();
