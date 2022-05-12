"use strict";
/**
 * 京东-新品-魔方
 * cron: 10 9,12,15 * * *
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
var Mofang = /** @class */ (function (_super) {
    __extends(Mofang, _super);
    function Mofang() {
        return _super.call(this) || this;
    }
    Mofang.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.run(new Mofang())];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Mofang.prototype.api = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.wait(1000)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.post("https://api.m.jd.com/client.action", params, {
                                'Content-Type': 'application/x-www-form-urlencoded',
                                "User-Agent": this.user.UserAgent,
                                'Referer': 'https://h5.m.jd.com/babelDiy/Zeus/2bf3XEEyWG11pQzPGkKpKX2GxJz2/index.html',
                                'Origin': 'https://h5.m.jd.com',
                                'Host': 'api.m.jd.com',
                                'Cookie': this.user.cookie
                            })];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Mofang.prototype.getLog = function () {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.get("http://127.0.0.1:10007?fn=doInteractiveAssignment&uid=".concat(encodeURIComponent(this.user.UserName)))];
                    case 1:
                        data = _a.sent();
                        if (data !== 1 && data !== '1') {
                            return [2 /*return*/, data.toString()];
                        }
                        else {
                            console.log('No log');
                            process.exit(0);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    Mofang.prototype.main = function (user) {
        var _a, _b, _c, _d, _e;
        return __awaiter(this, void 0, void 0, function () {
            var log, res, sign, _f, _g, t, signDay, type, _h, _j, proInfo, e_1_1, _k, _l, proInfo, e_2_1, _m, _o, proInfo, e_3_1, _p, _q, proInfo, e_4_1, e_5_1;
            var e_5, _r, e_1, _s, e_2, _t, e_3, _u, e_4, _v;
            return __generator(this, function (_w) {
                switch (_w.label) {
                    case 0:
                        this.user = user;
                        log = '';
                        return [4 /*yield*/, this.api("functionId=getInteractionHomeInfo&body=%7B%22sign%22%3A%22u6vtLQ7ztxgykLEr%22%7D&appid=content_ecology&client=wh5&clientVersion=1.0.0")];
                    case 1:
                        res = _w.sent();
                        sign = res.result.taskConfig.projectId;
                        return [4 /*yield*/, this.api("functionId=queryInteractiveInfo&body=%7B%22encryptProjectId%22%3A%22".concat(sign, "%22%2C%22sourceCode%22%3A%22acexinpin0823%22%2C%22ext%22%3A%7B%7D%7D&client=wh5&clientVersion=1.0.0&appid=content_ecology"))];
                    case 2:
                        res = _w.sent();
                        _w.label = 3;
                    case 3:
                        _w.trys.push([3, 48, 49, 50]);
                        _f = __values(res.assignmentList), _g = _f.next();
                        _w.label = 4;
                    case 4:
                        if (!!_g.done) return [3 /*break*/, 47];
                        t = _g.value;
                        if (!(t.completionCnt < t.assignmentTimesLimit)) return [3 /*break*/, 46];
                        if (!t.ext) return [3 /*break*/, 46];
                        if (!(t.assignmentName === '每日签到')) return [3 /*break*/, 8];
                        if (!(t.ext.sign1.status === 1)) return [3 /*break*/, 7];
                        signDay = ((_a = t.ext.sign1.signList) === null || _a === void 0 ? void 0 : _a.length) || 0, type = t.rewards[signDay].rewardType;
                        console.log(signDay, type);
                        return [4 /*yield*/, this.getLog()];
                    case 5:
                        log = _w.sent();
                        return [4 /*yield*/, this.api("functionId=doInteractiveAssignment&body=".concat(JSON.stringify({
                                "encryptProjectId": sign, "encryptAssignmentId": t.encryptAssignmentId, "sourceCode": "acexinpin0823", "itemId": "1", "actionType": "", "completionFlag": "", "ext": {}, "extParam": { "businessData": { "random": log.match(/"random":"(\d+)"/)[1] }, "signStr": log.match(/"log":"(.*)"/)[1], "sceneid": "XMFhPageh5" }
                            }), "&client=wh5&clientVersion=1.0.0&appid=content_ecology"))];
                    case 6:
                        res = _w.sent();
                        console.log('签到成功');
                        return [3 /*break*/, 8];
                    case 7:
                        console.log('已签到');
                        _w.label = 8;
                    case 8:
                        _w.trys.push([8, 14, 15, 16]);
                        _h = (e_1 = void 0, __values((_b = t.ext.productsInfo) !== null && _b !== void 0 ? _b : [])), _j = _h.next();
                        _w.label = 9;
                    case 9:
                        if (!!_j.done) return [3 /*break*/, 13];
                        proInfo = _j.value;
                        if (!(proInfo.status === 1)) return [3 /*break*/, 12];
                        console.log(t.assignmentName);
                        return [4 /*yield*/, this.getLog()];
                    case 10:
                        log = _w.sent();
                        return [4 /*yield*/, this.api("functionId=doInteractiveAssignment&body=".concat(encodeURIComponent(JSON.stringify({ "encryptProjectId": sign, "encryptAssignmentId": t.encryptAssignmentId, "sourceCode": "acexinpin0823", "itemId": proInfo.itemId, "actionType": 0, "completionFlag": "", "ext": {}, "extParam": { "businessData": { "random": log.match(/"random":"(\d+)"/)[1] }, "signStr": log.match(/"log":"(.*)"/)[1], "sceneid": "XMFhPageh5" } })), "&client=wh5&clientVersion=1.0.0&appid=content_ecology"))];
                    case 11:
                        res = _w.sent();
                        console.log(res.msg);
                        if (res.msg === '任务已完成') {
                            return [3 /*break*/, 13];
                        }
                        _w.label = 12;
                    case 12:
                        _j = _h.next();
                        return [3 /*break*/, 9];
                    case 13: return [3 /*break*/, 16];
                    case 14:
                        e_1_1 = _w.sent();
                        e_1 = { error: e_1_1 };
                        return [3 /*break*/, 16];
                    case 15:
                        try {
                            if (_j && !_j.done && (_s = _h["return"])) _s.call(_h);
                        }
                        finally { if (e_1) throw e_1.error; }
                        return [7 /*endfinally*/];
                    case 16:
                        _w.trys.push([16, 25, 26, 27]);
                        _k = (e_2 = void 0, __values((_c = t.ext.shoppingActivity) !== null && _c !== void 0 ? _c : [])), _l = _k.next();
                        _w.label = 17;
                    case 17:
                        if (!!_l.done) return [3 /*break*/, 24];
                        proInfo = _l.value;
                        if (!(proInfo.status === 1)) return [3 /*break*/, 23];
                        console.log(t.assignmentName);
                        return [4 /*yield*/, this.getLog()];
                    case 18:
                        log = _w.sent();
                        return [4 /*yield*/, this.api("functionId=doInteractiveAssignment&body=".concat(encodeURIComponent(JSON.stringify({ "encryptProjectId": sign, "encryptAssignmentId": t.encryptAssignmentId, "sourceCode": "acexinpin0823", "itemId": proInfo.itemId, "actionType": 1, "completionFlag": "", "ext": {}, "extParam": { "businessData": { "random": log.match(/"random":"(\d+)"/)[1] }, "signStr": log.match(/"log":"(.*)"/)[1], "sceneid": "XMFhPageh5" } })), "&client=wh5&clientVersion=1.0.0&appid=content_ecology"))];
                    case 19:
                        res = _w.sent();
                        console.log(res.msg);
                        return [4 /*yield*/, this.wait(t.ext.waitDuration * 1000)];
                    case 20:
                        _w.sent();
                        return [4 /*yield*/, this.getLog()];
                    case 21:
                        log = _w.sent();
                        return [4 /*yield*/, this.api("functionId=doInteractiveAssignment&body=".concat(encodeURIComponent(JSON.stringify({ "encryptProjectId": sign, "encryptAssignmentId": t.encryptAssignmentId, "sourceCode": "acexinpin0823", "itemId": proInfo.itemId, "actionType": 0, "completionFlag": "", "ext": {}, "extParam": { "businessData": { "random": log.match(/"random":"(\d+)"/)[1] }, "signStr": log.match(/"log":"(.*)"/)[1], "sceneid": "XMFhPageh5" } })), "&client=wh5&clientVersion=1.0.0&appid=content_ecology"))];
                    case 22:
                        res = _w.sent();
                        console.log(res.msg);
                        _w.label = 23;
                    case 23:
                        _l = _k.next();
                        return [3 /*break*/, 17];
                    case 24: return [3 /*break*/, 27];
                    case 25:
                        e_2_1 = _w.sent();
                        e_2 = { error: e_2_1 };
                        return [3 /*break*/, 27];
                    case 26:
                        try {
                            if (_l && !_l.done && (_t = _k["return"])) _t.call(_k);
                        }
                        finally { if (e_2) throw e_2.error; }
                        return [7 /*endfinally*/];
                    case 27:
                        _w.trys.push([27, 36, 37, 38]);
                        _m = (e_3 = void 0, __values((_d = t.ext.browseShop) !== null && _d !== void 0 ? _d : [])), _o = _m.next();
                        _w.label = 28;
                    case 28:
                        if (!!_o.done) return [3 /*break*/, 35];
                        proInfo = _o.value;
                        if (!(proInfo.status === 1)) return [3 /*break*/, 34];
                        console.log(t.assignmentName);
                        return [4 /*yield*/, this.getLog()];
                    case 29:
                        log = _w.sent();
                        return [4 /*yield*/, this.api("functionId=doInteractiveAssignment&body=".concat(JSON.stringify({
                                "encryptProjectId": sign, "encryptAssignmentId": t.encryptAssignmentId, "sourceCode": "acexinpin0823", "itemId": proInfo.itemId, "actionType": 1, "completionFlag": "", "ext": {}, "extParam": { "businessData": { "random": log.match(/"random":"(\d+)"/)[1] }, "signStr": log.match(/"log":"(.*)"/)[1], "sceneid": "XMFhPageh5" }
                            }), "&client=wh5&clientVersion=1.0.0&appid=content_ecology"))];
                    case 30:
                        res = _w.sent();
                        console.log(res.msg);
                        return [4 /*yield*/, this.wait(t.ext.waitDuration * 1000)];
                    case 31:
                        _w.sent();
                        return [4 /*yield*/, this.getLog()];
                    case 32:
                        log = _w.sent();
                        return [4 /*yield*/, this.api("functionId=doInteractiveAssignment&body=".concat(JSON.stringify({
                                "encryptProjectId": sign, "encryptAssignmentId": t.encryptAssignmentId, "sourceCode": "acexinpin0823", "itemId": proInfo.itemId, "actionType": 0, "completionFlag": "", "ext": {}, "extParam": { "businessData": { "random": log.match(/"random":"(\d+)"/)[1] }, "signStr": log.match(/"log":"(.*)"/)[1], "sceneid": "XMFhPageh5" }
                            }), "&client=wh5&clientVersion=1.0.0&appid=content_ecology"))];
                    case 33:
                        res = _w.sent();
                        console.log(res.msg);
                        _w.label = 34;
                    case 34:
                        _o = _m.next();
                        return [3 /*break*/, 28];
                    case 35: return [3 /*break*/, 38];
                    case 36:
                        e_3_1 = _w.sent();
                        e_3 = { error: e_3_1 };
                        return [3 /*break*/, 38];
                    case 37:
                        try {
                            if (_o && !_o.done && (_u = _m["return"])) _u.call(_m);
                        }
                        finally { if (e_3) throw e_3.error; }
                        return [7 /*endfinally*/];
                    case 38:
                        _w.trys.push([38, 44, 45, 46]);
                        _p = (e_4 = void 0, __values((_e = t.ext.addCart) !== null && _e !== void 0 ? _e : [])), _q = _p.next();
                        _w.label = 39;
                    case 39:
                        if (!!_q.done) return [3 /*break*/, 43];
                        proInfo = _q.value;
                        if (!(proInfo.status === 1)) return [3 /*break*/, 42];
                        console.log(t.assignmentName);
                        return [4 /*yield*/, this.getLog()];
                    case 40:
                        log = _w.sent();
                        return [4 /*yield*/, this.api("functionId=doInteractiveAssignment&body=".concat(encodeURIComponent(JSON.stringify({ "encryptProjectId": sign, "encryptAssignmentId": t.encryptAssignmentId, "sourceCode": "acexinpin0823", "itemId": proInfo.itemId, "actionType": "0", "completionFlag": "", "ext": {}, "extParam": { "businessData": { "random": log.match(/"random":"(\d+)"/)[1] }, "signStr": log.match(/"log":"(.*)"/)[1], "sceneid": "XMFJGh5" } })), "&client=wh5&clientVersion=1.0.0&appid=content_ecology"))];
                    case 41:
                        res = _w.sent();
                        console.log(res.msg);
                        if (res.msg === '任务已完成') {
                            return [3 /*break*/, 43];
                        }
                        _w.label = 42;
                    case 42:
                        _q = _p.next();
                        return [3 /*break*/, 39];
                    case 43: return [3 /*break*/, 46];
                    case 44:
                        e_4_1 = _w.sent();
                        e_4 = { error: e_4_1 };
                        return [3 /*break*/, 46];
                    case 45:
                        try {
                            if (_q && !_q.done && (_v = _p["return"])) _v.call(_p);
                        }
                        finally { if (e_4) throw e_4.error; }
                        return [7 /*endfinally*/];
                    case 46:
                        _g = _f.next();
                        return [3 /*break*/, 4];
                    case 47: return [3 /*break*/, 50];
                    case 48:
                        e_5_1 = _w.sent();
                        e_5 = { error: e_5_1 };
                        return [3 /*break*/, 50];
                    case 49:
                        try {
                            if (_g && !_g.done && (_r = _f["return"])) _r.call(_f);
                        }
                        finally { if (e_5) throw e_5.error; }
                        return [7 /*endfinally*/];
                    case 50: return [2 /*return*/];
                }
            });
        });
    };
    return Mofang;
}(TS_JDHelloWorld_1.JDHelloWorld));
new Mofang().init().then();
