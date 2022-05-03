"use strict";
/**
 * 京东-新品-魔方
 * rabbit log
 * cron: 10 9,12,15 * * *
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
var TS_USER_AGENTS_1 = require("./TS_USER_AGENTS");
var fs_1 = require("fs");
var dotenv = require("dotenv");
var cookie = '', res = '', UserName, index, log = '';
var rabbitToken = process.env.RABBIT_TOKEN || '', tg_id = process.env.TG_ID || '', mf_logs;
!(function () { return __awaiter(void 0, void 0, void 0, function () {
    var cookiesArr, i, sign, _a, _b, t, signDay, type, _c, _d, proInfo, e_1_1, _e, _f, proInfo, e_2_1, _g, _h, proInfo, e_3_1, _j, _k, proInfo, e_4_1, e_5_1;
    var e_5, _l, e_1, _m, e_2, _o, e_3, _p, e_4, _q;
    var _r, _s, _t, _u, _v;
    return __generator(this, function (_w) {
        switch (_w.label) {
            case 0:
                dotenv.config();
                if ((0, fs_1.existsSync)('./test/mf_log.ts')) {
                    mf_logs = require('./test/mf_log').mf_logs;
                }
                else {
                    console.log('./test/mf_log not found');
                }
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.requireConfig)()];
            case 1:
                cookiesArr = _w.sent();
                i = 0;
                _w.label = 2;
            case 2:
                if (!(i < cookiesArr.length)) return [3 /*break*/, 55];
                cookie = cookiesArr[i];
                UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                index = i + 1;
                console.log("\n\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7".concat(index, "\u3011").concat(UserName, "\n"));
                return [4 /*yield*/, api("functionId=getInteractionHomeInfo&body=%7B%22sign%22%3A%22u6vtLQ7ztxgykLEr%22%7D&appid=content_ecology&client=wh5&clientVersion=1.0.0")];
            case 3:
                res = _w.sent();
                sign = res.result.taskConfig.projectId;
                return [4 /*yield*/, api("functionId=queryInteractiveInfo&body=%7B%22encryptProjectId%22%3A%22".concat(sign, "%22%2C%22sourceCode%22%3A%22acexinpin0823%22%2C%22ext%22%3A%7B%7D%7D&client=wh5&clientVersion=1.0.0&appid=content_ecology"))];
            case 4:
                res = _w.sent();
                _w.label = 5;
            case 5:
                _w.trys.push([5, 52, 53, 54]);
                _a = (e_5 = void 0, __values(res.assignmentList)), _b = _a.next();
                _w.label = 6;
            case 6:
                if (!!_b.done) return [3 /*break*/, 51];
                t = _b.value;
                if (!(t.completionCnt < t.assignmentTimesLimit)) return [3 /*break*/, 50];
                if (!t.ext) return [3 /*break*/, 49];
                if (!(t.assignmentName === '每日签到')) return [3 /*break*/, 10];
                if (!(t.ext.sign1.status === 1)) return [3 /*break*/, 9];
                signDay = ((_r = t.ext.sign1.signList) === null || _r === void 0 ? void 0 : _r.length) || 0, type = t.rewards[signDay].rewardType;
                console.log(signDay, type);
                return [4 /*yield*/, getLog()];
            case 7:
                log = _w.sent();
                return [4 /*yield*/, api("functionId=doInteractiveAssignment&body=".concat(JSON.stringify({
                        "encryptProjectId": sign, "encryptAssignmentId": t.encryptAssignmentId, "sourceCode": "acexinpin0823", "itemId": "1", "actionType": "", "completionFlag": "", "ext": {}, "extParam": { "businessData": { "random": log.match(/"random":"(\d+)"/)[1] }, "signStr": log.match(/"log":"(.*)"/)[1], "sceneid": "XMFhPageh5" }
                    }), "&client=wh5&clientVersion=1.0.0&appid=content_ecology"))];
            case 8:
                res = _w.sent();
                console.log('签到成功');
                return [3 /*break*/, 10];
            case 9:
                console.log('已签到');
                _w.label = 10;
            case 10:
                _w.trys.push([10, 16, 17, 18]);
                _c = (e_1 = void 0, __values((_s = t.ext.productsInfo) !== null && _s !== void 0 ? _s : [])), _d = _c.next();
                _w.label = 11;
            case 11:
                if (!!_d.done) return [3 /*break*/, 15];
                proInfo = _d.value;
                if (!(proInfo.status === 1)) return [3 /*break*/, 14];
                console.log(t.assignmentName);
                return [4 /*yield*/, getLog()];
            case 12:
                log = _w.sent();
                return [4 /*yield*/, api("functionId=doInteractiveAssignment&body=".concat(encodeURIComponent(JSON.stringify({ "encryptProjectId": sign, "encryptAssignmentId": t.encryptAssignmentId, "sourceCode": "acexinpin0823", "itemId": proInfo.itemId, "actionType": 0, "completionFlag": "", "ext": {}, "extParam": { "businessData": { "random": log.match(/"random":"(\d+)"/)[1] }, "signStr": log.match(/"log":"(.*)"/)[1], "sceneid": "XMFhPageh5" } })), "&client=wh5&clientVersion=1.0.0&appid=content_ecology"))];
            case 13:
                res = _w.sent();
                console.log(res.msg);
                if (res.msg === '任务已完成') {
                    return [3 /*break*/, 15];
                }
                _w.label = 14;
            case 14:
                _d = _c.next();
                return [3 /*break*/, 11];
            case 15: return [3 /*break*/, 18];
            case 16:
                e_1_1 = _w.sent();
                e_1 = { error: e_1_1 };
                return [3 /*break*/, 18];
            case 17:
                try {
                    if (_d && !_d.done && (_m = _c["return"])) _m.call(_c);
                }
                finally { if (e_1) throw e_1.error; }
                return [7 /*endfinally*/];
            case 18:
                _w.trys.push([18, 27, 28, 29]);
                _e = (e_2 = void 0, __values((_t = t.ext.shoppingActivity) !== null && _t !== void 0 ? _t : [])), _f = _e.next();
                _w.label = 19;
            case 19:
                if (!!_f.done) return [3 /*break*/, 26];
                proInfo = _f.value;
                if (!(proInfo.status === 1)) return [3 /*break*/, 25];
                console.log(t.assignmentName);
                return [4 /*yield*/, getLog()];
            case 20:
                log = _w.sent();
                return [4 /*yield*/, api("functionId=doInteractiveAssignment&body=".concat(encodeURIComponent(JSON.stringify({ "encryptProjectId": sign, "encryptAssignmentId": t.encryptAssignmentId, "sourceCode": "acexinpin0823", "itemId": proInfo.itemId, "actionType": 1, "completionFlag": "", "ext": {}, "extParam": { "businessData": { "random": log.match(/"random":"(\d+)"/)[1] }, "signStr": log.match(/"log":"(.*)"/)[1], "sceneid": "XMFhPageh5" } })), "&client=wh5&clientVersion=1.0.0&appid=content_ecology"))];
            case 21:
                res = _w.sent();
                console.log(res.msg);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(t.ext.waitDuration * 1000)];
            case 22:
                _w.sent();
                return [4 /*yield*/, getLog()];
            case 23:
                log = _w.sent();
                return [4 /*yield*/, api("functionId=doInteractiveAssignment&body=".concat(encodeURIComponent(JSON.stringify({ "encryptProjectId": sign, "encryptAssignmentId": t.encryptAssignmentId, "sourceCode": "acexinpin0823", "itemId": proInfo.itemId, "actionType": 0, "completionFlag": "", "ext": {}, "extParam": { "businessData": { "random": log.match(/"random":"(\d+)"/)[1] }, "signStr": log.match(/"log":"(.*)"/)[1], "sceneid": "XMFhPageh5" } })), "&client=wh5&clientVersion=1.0.0&appid=content_ecology"))];
            case 24:
                res = _w.sent();
                console.log(res.msg);
                _w.label = 25;
            case 25:
                _f = _e.next();
                return [3 /*break*/, 19];
            case 26: return [3 /*break*/, 29];
            case 27:
                e_2_1 = _w.sent();
                e_2 = { error: e_2_1 };
                return [3 /*break*/, 29];
            case 28:
                try {
                    if (_f && !_f.done && (_o = _e["return"])) _o.call(_e);
                }
                finally { if (e_2) throw e_2.error; }
                return [7 /*endfinally*/];
            case 29:
                _w.trys.push([29, 38, 39, 40]);
                _g = (e_3 = void 0, __values((_u = t.ext.browseShop) !== null && _u !== void 0 ? _u : [])), _h = _g.next();
                _w.label = 30;
            case 30:
                if (!!_h.done) return [3 /*break*/, 37];
                proInfo = _h.value;
                if (!(proInfo.status === 1)) return [3 /*break*/, 36];
                console.log(t.assignmentName);
                return [4 /*yield*/, getLog()];
            case 31:
                log = _w.sent();
                return [4 /*yield*/, api("functionId=doInteractiveAssignment&body=".concat(JSON.stringify({
                        "encryptProjectId": sign, "encryptAssignmentId": t.encryptAssignmentId, "sourceCode": "acexinpin0823", "itemId": proInfo.itemId, "actionType": 1, "completionFlag": "", "ext": {}, "extParam": { "businessData": { "random": log.match(/"random":"(\d+)"/)[1] }, "signStr": log.match(/"log":"(.*)"/)[1], "sceneid": "XMFhPageh5" }
                    }), "&client=wh5&clientVersion=1.0.0&appid=content_ecology"))];
            case 32:
                res = _w.sent();
                console.log(res.msg);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(t.ext.waitDuration * 1000)];
            case 33:
                _w.sent();
                return [4 /*yield*/, getLog()];
            case 34:
                log = _w.sent();
                return [4 /*yield*/, api("functionId=doInteractiveAssignment&body=".concat(JSON.stringify({
                        "encryptProjectId": sign, "encryptAssignmentId": t.encryptAssignmentId, "sourceCode": "acexinpin0823", "itemId": proInfo.itemId, "actionType": 0, "completionFlag": "", "ext": {}, "extParam": { "businessData": { "random": log.match(/"random":"(\d+)"/)[1] }, "signStr": log.match(/"log":"(.*)"/)[1], "sceneid": "XMFhPageh5" }
                    }), "&client=wh5&clientVersion=1.0.0&appid=content_ecology"))];
            case 35:
                res = _w.sent();
                console.log(res.msg);
                _w.label = 36;
            case 36:
                _h = _g.next();
                return [3 /*break*/, 30];
            case 37: return [3 /*break*/, 40];
            case 38:
                e_3_1 = _w.sent();
                e_3 = { error: e_3_1 };
                return [3 /*break*/, 40];
            case 39:
                try {
                    if (_h && !_h.done && (_p = _g["return"])) _p.call(_g);
                }
                finally { if (e_3) throw e_3.error; }
                return [7 /*endfinally*/];
            case 40:
                _w.trys.push([40, 46, 47, 48]);
                _j = (e_4 = void 0, __values((_v = t.ext.addCart) !== null && _v !== void 0 ? _v : [])), _k = _j.next();
                _w.label = 41;
            case 41:
                if (!!_k.done) return [3 /*break*/, 45];
                proInfo = _k.value;
                if (!(proInfo.status === 1)) return [3 /*break*/, 44];
                console.log(t.assignmentName);
                return [4 /*yield*/, getLog()];
            case 42:
                log = _w.sent();
                return [4 /*yield*/, api("functionId=doInteractiveAssignment&body=".concat(encodeURIComponent(JSON.stringify({ "encryptProjectId": sign, "encryptAssignmentId": t.encryptAssignmentId, "sourceCode": "acexinpin0823", "itemId": proInfo.itemId, "actionType": "0", "completionFlag": "", "ext": {}, "extParam": { "businessData": { "random": log.match(/"random":"(\d+)"/)[1] }, "signStr": log.match(/"log":"(.*)"/)[1], "sceneid": "XMFJGh5" } })), "&client=wh5&clientVersion=1.0.0&appid=content_ecology"))];
            case 43:
                res = _w.sent();
                console.log(res.msg);
                if (res.msg === '任务已完成') {
                    return [3 /*break*/, 45];
                }
                _w.label = 44;
            case 44:
                _k = _j.next();
                return [3 /*break*/, 41];
            case 45: return [3 /*break*/, 48];
            case 46:
                e_4_1 = _w.sent();
                e_4 = { error: e_4_1 };
                return [3 /*break*/, 48];
            case 47:
                try {
                    if (_k && !_k.done && (_q = _j["return"])) _q.call(_j);
                }
                finally { if (e_4) throw e_4.error; }
                return [7 /*endfinally*/];
            case 48: return [3 /*break*/, 50];
            case 49:
                if (t.assignmentName === '去新品频道逛逛') {
                }
                _w.label = 50;
            case 50:
                _b = _a.next();
                return [3 /*break*/, 6];
            case 51: return [3 /*break*/, 54];
            case 52:
                e_5_1 = _w.sent();
                e_5 = { error: e_5_1 };
                return [3 /*break*/, 54];
            case 53:
                try {
                    if (_b && !_b.done && (_l = _a["return"])) _l.call(_a);
                }
                finally { if (e_5) throw e_5.error; }
                return [7 /*endfinally*/];
            case 54:
                i++;
                return [3 /*break*/, 2];
            case 55: return [2 /*return*/];
        }
    });
}); })();
function api(params) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, (0, TS_USER_AGENTS_1.post)("https://api.m.jd.com/client.action", params, {
                            'Content-Type': 'application/x-www-form-urlencoded',
                            "User-Agent": "Mozilla/5.0 (Linux; U; Android 8.0.0; zh-cn; Mi Note 2 Build/OPR1.170623.032) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/61.0.3163.128 Mobile Safari/537.36 XiaoMi/MiuiBrowser/10.1.1",
                            'Referer': 'https://h5.m.jd.com/babelDiy/Zeus/2bf3XEEyWG11pQzPGkKpKX2GxJz2/index.html',
                            'Origin': 'https://h5.m.jd.com',
                            'Host': 'api.m.jd.com',
                            'Cookie': cookie
                        })];
                case 2: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
function getLog() {
    return __awaiter(this, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(rabbitToken && tg_id)) return [3 /*break*/, 2];
                    console.log('rabbit log api');
                    return [4 /*yield*/, (0, TS_USER_AGENTS_1.get)("http://www.madrabbit.cf:8080/license/log?tg_id=".concat(tg_id, "&token=").concat(rabbitToken))];
                case 1:
                    data = (_a.sent()).data;
                    return [2 /*return*/, "'\"random\":\"".concat(data.random, "\",\"log\":\"").concat(data.log, "\"'")];
                case 2:
                    if (mf_logs) {
                        return [2 /*return*/, mf_logs[Math.floor(Math.random() * mf_logs.length)]];
                    }
                    else {
                        console.log('No log');
                        process.exit(0);
                    }
                    _a.label = 3;
                case 3: return [2 /*return*/];
            }
        });
    });
}
