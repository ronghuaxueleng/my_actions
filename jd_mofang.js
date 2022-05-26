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
var log_1 = require("./log");
var Mofang = /** @class */ (function (_super) {
    __extends(Mofang, _super);
    function Mofang() {
        return _super.call(this) || this;
    }
    Mofang.prototype.init = function () {
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
    Mofang.prototype.api = function (fn, body) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.wait(1000)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.post("https://api.m.jd.com/client.action", new URLSearchParams({
                                'functionId': fn,
                                'body': JSON.stringify(body),
                                'client': 'wh5',
                                'clientVersion': '1.0.0',
                                'appid': 'content_ecology'
                            }), {
                                'Host': 'api.m.jd.com',
                                'Origin': 'https://h5.m.jd.com',
                                'User-Agent': 'jdapp;',
                                'Referer': 'https://h5.m.jd.com/pb/010631430/2bf3XEEyWG11pQzPGkKpKX2GxJz2/index.html',
                                'Cookie': this.user.cookie
                            })];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Mofang.prototype.getLog = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.mfTool.main()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Mofang.prototype.main = function (user) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var log, res, taskConfig_projectId, projectPoolId, giftConfig_projectId, _b, _c, t, signDay, type, _d, _e, proInfo, e_1_1, _f, _g, proInfo, e_2_1, e_3_1, exchangeRestScoreMap368, i, exchangeRestScoreMap367, arr, arr_1, arr_1_1, encryptAssignmentId, e_4_1;
            var e_3, _h, e_1, _j, e_2, _k, e_4, _l;
            return __generator(this, function (_m) {
                switch (_m.label) {
                    case 0:
                        this.user = user;
                        this.mfTool = new log_1.Log('50091', 'doInteractiveAssignment', 'XMFhPageh5');
                        return [4 /*yield*/, this.mfTool.init()];
                    case 1:
                        _m.sent();
                        log = '';
                        return [4 /*yield*/, this.api('getInteractionHomeInfo', { "sign": "u6vtLQ7ztxgykLEr" })];
                    case 2:
                        res = _m.sent();
                        taskConfig_projectId = res.result.taskConfig.projectId;
                        projectPoolId = res.result.taskConfig.projectPoolId;
                        giftConfig_projectId = res.result.giftConfig.projectId;
                        return [4 /*yield*/, this.api('queryInteractiveInfo', { "encryptProjectId": taskConfig_projectId, "sourceCode": "acexinpin0823", "ext": {} })];
                    case 3:
                        res = _m.sent();
                        _m.label = 4;
                    case 4:
                        _m.trys.push([4, 30, 31, 32]);
                        _b = __values(res.assignmentList), _c = _b.next();
                        _m.label = 5;
                    case 5:
                        if (!!_c.done) return [3 /*break*/, 29];
                        t = _c.value;
                        if (!(t.completionCnt < t.assignmentTimesLimit)) return [3 /*break*/, 28];
                        if (!(t.assignmentName === '每日签到')) return [3 /*break*/, 9];
                        if (!(t.ext.sign1.status === 1)) return [3 /*break*/, 8];
                        signDay = ((_a = t.ext.sign1.signList) === null || _a === void 0 ? void 0 : _a.length) || 0, type = t.rewards[signDay].rewardType;
                        console.log(signDay, type);
                        return [4 /*yield*/, this.getLog()];
                    case 6:
                        log = _m.sent();
                        return [4 /*yield*/, this.api('doInteractiveAssignment', { "encryptProjectId": taskConfig_projectId, "encryptAssignmentId": t.encryptAssignmentId, "sourceCode": "acexinpin0823", "itemId": "1", "actionType": "", "completionFlag": "", "ext": {}, "extParam": { "businessData": { "random": log.match(/"random":"(\d+)"/)[1] }, "signStr": log.match(/"log":"(.*)"/)[1], "sceneid": "XMFhPageh5" } })];
                    case 7:
                        res = _m.sent();
                        console.log('签到成功');
                        return [3 /*break*/, 9];
                    case 8:
                        console.log('已签到');
                        _m.label = 9;
                    case 9:
                        _m.trys.push([9, 18, 19, 20]);
                        _d = (e_1 = void 0, __values(t.ext.shoppingActivity || t.ext.browseShop || [])), _e = _d.next();
                        _m.label = 10;
                    case 10:
                        if (!!_e.done) return [3 /*break*/, 17];
                        proInfo = _e.value;
                        if (!(proInfo.status === 1)) return [3 /*break*/, 16];
                        console.log(t.assignmentName);
                        return [4 /*yield*/, this.getLog()];
                    case 11:
                        log = _m.sent();
                        return [4 /*yield*/, this.api('doInteractiveAssignment', { "encryptProjectId": taskConfig_projectId, "encryptAssignmentId": t.encryptAssignmentId, "sourceCode": "acexinpin0823", "itemId": proInfo.itemId, "actionType": 1, "completionFlag": "", "ext": {}, "extParam": { "businessData": { "random": log.match(/"random":"(\d+)"/)[1] }, "signStr": log.match(/"log":"(.*)"/)[1], "sceneid": "XMFhPageh5" } })];
                    case 12:
                        res = _m.sent();
                        console.log(res.msg);
                        return [4 /*yield*/, this.wait(t.ext.waitDuration * 1000 || 1000)];
                    case 13:
                        _m.sent();
                        return [4 /*yield*/, this.getLog()];
                    case 14:
                        log = _m.sent();
                        return [4 /*yield*/, this.api('doInteractiveAssignment', { "encryptProjectId": taskConfig_projectId, "encryptAssignmentId": t.encryptAssignmentId, "sourceCode": "acexinpin0823", "itemId": proInfo.itemId, "actionType": 0, "completionFlag": "", "ext": {}, "extParam": { "businessData": { "random": log.match(/"random":"(\d+)"/)[1] }, "signStr": log.match(/"log":"(.*)"/)[1], "sceneid": "XMFhPageh5" } })];
                    case 15:
                        res = _m.sent();
                        console.log(res.msg);
                        _m.label = 16;
                    case 16:
                        _e = _d.next();
                        return [3 /*break*/, 10];
                    case 17: return [3 /*break*/, 20];
                    case 18:
                        e_1_1 = _m.sent();
                        e_1 = { error: e_1_1 };
                        return [3 /*break*/, 20];
                    case 19:
                        try {
                            if (_e && !_e.done && (_j = _d["return"])) _j.call(_d);
                        }
                        finally { if (e_1) throw e_1.error; }
                        return [7 /*endfinally*/];
                    case 20:
                        _m.trys.push([20, 26, 27, 28]);
                        _f = (e_2 = void 0, __values(t.ext.productsInfo || t.ext.addCart || [])), _g = _f.next();
                        _m.label = 21;
                    case 21:
                        if (!!_g.done) return [3 /*break*/, 25];
                        proInfo = _g.value;
                        if (!(proInfo.status === 1)) return [3 /*break*/, 24];
                        console.log(t.assignmentName);
                        return [4 /*yield*/, this.getLog()];
                    case 22:
                        log = _m.sent();
                        return [4 /*yield*/, this.api('doInteractiveAssignment', { "encryptProjectId": taskConfig_projectId, "encryptAssignmentId": t.encryptAssignmentId, "sourceCode": "acexinpin0823", "itemId": proInfo.itemId, "actionType": 0, "completionFlag": "", "ext": {}, "extParam": { "businessData": { "random": log.match(/"random":"(\d+)"/)[1] }, "signStr": log.match(/"log":"(.*)"/)[1], "sceneid": "XMFhPageh5" } })];
                    case 23:
                        res = _m.sent();
                        console.log(res.msg);
                        if (res.msg === '任务已完成') {
                            return [3 /*break*/, 25];
                        }
                        _m.label = 24;
                    case 24:
                        _g = _f.next();
                        return [3 /*break*/, 21];
                    case 25: return [3 /*break*/, 28];
                    case 26:
                        e_2_1 = _m.sent();
                        e_2 = { error: e_2_1 };
                        return [3 /*break*/, 28];
                    case 27:
                        try {
                            if (_g && !_g.done && (_k = _f["return"])) _k.call(_f);
                        }
                        finally { if (e_2) throw e_2.error; }
                        return [7 /*endfinally*/];
                    case 28:
                        _c = _b.next();
                        return [3 /*break*/, 5];
                    case 29: return [3 /*break*/, 32];
                    case 30:
                        e_3_1 = _m.sent();
                        e_3 = { error: e_3_1 };
                        return [3 /*break*/, 32];
                    case 31:
                        try {
                            if (_c && !_c.done && (_h = _b["return"])) _h.call(_b);
                        }
                        finally { if (e_3) throw e_3.error; }
                        return [7 /*endfinally*/];
                    case 32: return [4 /*yield*/, this.api('queryInteractiveRewardInfo', { "encryptProjectId": giftConfig_projectId, "sourceCode": "acexinpin0823", "ext": { "needExchangeRestScore": "1" } })];
                    case 33:
                        res = _m.sent();
                        console.log('当前魔方', res.exchangeRestScoreMap["367"]);
                        return [4 /*yield*/, this.api('queryInteractiveRewardInfo', { "encryptProjectPoolId": projectPoolId, "sourceCode": "acexinpin0823", "ext": { "needPoolRewards": 1, "needExchangeRestScore": 1 } })];
                    case 34:
                        res = _m.sent();
                        console.log('碎片进度', res.exchangeRestScoreMap["368"]);
                        exchangeRestScoreMap368 = res.exchangeRestScoreMap["368"];
                        i = 1;
                        _m.label = 35;
                    case 35:
                        if (!(i < Math.floor(exchangeRestScoreMap368 / 6))) return [3 /*break*/, 39];
                        return [4 /*yield*/, this.getLog()];
                    case 36:
                        log = _m.sent();
                        return [4 /*yield*/, this.api('doInteractiveAssignment', { "encryptProjectId": giftConfig_projectId, "encryptAssignmentId": "wE62TwscdA52Z4WkpTJq7NaMvfw", "sourceCode": "acexinpin0823", "itemId": "", "actionType": "", "completionFlag": "", "ext": { "exchangeNum": 1 }, "extParam": { "businessData": { "random": log.match(/"random":"(\d+)"/)[1] }, "signStr": log.match(/"log":"(.*)"/)[1], "sceneid": "XMFhPageh5" } })];
                    case 37:
                        res = _m.sent();
                        console.log('合成魔方', res.rewardsInfo.successRewards['1'].quantity);
                        if (i === 20)
                            return [3 /*break*/, 39];
                        _m.label = 38;
                    case 38:
                        i++;
                        return [3 /*break*/, 35];
                    case 39: return [4 /*yield*/, this.api('queryInteractiveRewardInfo', { "encryptProjectId": giftConfig_projectId, "sourceCode": "acexinpin0823", "ext": { "needExchangeRestScore": "1" } })];
                    case 40:
                        res = _m.sent();
                        console.log('当前魔方', res.exchangeRestScoreMap["367"]);
                        exchangeRestScoreMap367 = res.exchangeRestScoreMap["367"], arr = [];
                        exchangeRestScoreMap367 >= 1 ? arr.push('2VUEMo9KjtktsQNvb2yHED2m2oCh') : '';
                        exchangeRestScoreMap367 >= 4 ? arr.push('khdCzL9YRdYjh3dWFXfZLteUTYu') : '';
                        exchangeRestScoreMap367 >= 24 ? arr.push('JkfeMeE5JGmkXiTeJZGzcAWv5cr') : '';
                        _m.label = 41;
                    case 41:
                        _m.trys.push([41, 47, 48, 49]);
                        arr_1 = __values(arr), arr_1_1 = arr_1.next();
                        _m.label = 42;
                    case 42:
                        if (!!arr_1_1.done) return [3 /*break*/, 46];
                        encryptAssignmentId = arr_1_1.value;
                        return [4 /*yield*/, this.getLog()];
                    case 43:
                        log = _m.sent();
                        return [4 /*yield*/, this.api('doInteractiveAssignment', { "encryptProjectId": giftConfig_projectId, "encryptAssignmentId": encryptAssignmentId, "sourceCode": "acexinpin0823", "itemId": "", "actionType": "", "completionFlag": "", "ext": { "exchangeNum": 1 }, "extParam": { "businessData": { "random": log.match(/"random":"(\d+)"/)[1] }, "signStr": log.match(/"log":"(.*)"/)[1], "sceneid": "XMFDHh5" } })];
                    case 44:
                        res = _m.sent();
                        if (res.subCode === '0') {
                            console.log('兑换成功', res.rewardsInfo.successRewards['3'][0].rewardName);
                        }
                        else {
                            console.log('兑换失败', res.msg);
                            return [3 /*break*/, 46];
                        }
                        _m.label = 45;
                    case 45:
                        arr_1_1 = arr_1.next();
                        return [3 /*break*/, 42];
                    case 46: return [3 /*break*/, 49];
                    case 47:
                        e_4_1 = _m.sent();
                        e_4 = { error: e_4_1 };
                        return [3 /*break*/, 49];
                    case 48:
                        try {
                            if (arr_1_1 && !arr_1_1.done && (_l = arr_1["return"])) _l.call(arr_1);
                        }
                        finally { if (e_4) throw e_4.error; }
                        return [7 /*endfinally*/];
                    case 49: return [2 /*return*/];
                }
            });
        });
    };
    return Mofang;
}(TS_JDHelloWorld_1.JDHelloWorld));
new Mofang().init().then();
