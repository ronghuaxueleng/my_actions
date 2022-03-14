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
var fs_1 = require("fs");
var TS_USER_AGENTS_1 = require("./TS_USER_AGENTS");
var cookie = '', res = '', data, UserName, index;
var shareCodeSelf = [], shareCodePool = [], shareCode = [];
!(function () { return __awaiter(void 0, void 0, void 0, function () {
    var cookiesArr, i, totalEnergy, _a, _b, fr, e_1_1, beanCard, i_1, friendList, i_2, friendList_1, friendList_1_1, fr, e_2_1, _c, _d, t, e_3_1, _e, _f, t, e_4_1, _g, _h, t, e_5_1, _j, _k, t, e_6_1, i_3, shareCodeSelf_1, shareCodeSelf_1_1, code, e_7_1;
    var e_1, _l, e_2, _m, e_3, _o, e_4, _p, e_5, _q, e_6, _r, e_7, _s;
    return __generator(this, function (_t) {
        switch (_t.label) {
            case 0: return [4 /*yield*/, (0, TS_USER_AGENTS_1.requireConfig)()];
            case 1:
                cookiesArr = _t.sent();
                try {
                    shareCodeSelf = JSON.parse((0, fs_1.readFileSync)('./utils/sharecodes.json').toString()).fruit;
                    console.log(shareCodeSelf);
                }
                catch (e) {
                    console.log('读取分享码失败');
                }
                i = 0;
                _t.label = 2;
            case 2:
                if (!(i < cookiesArr.length)) return [3 /*break*/, 121];
                cookie = cookiesArr[i];
                UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                index = i + 1;
                console.log("\n\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7".concat(index, "\u3011").concat(UserName, "\n"));
                return [4 /*yield*/, api('initForFarm', { "version": 11, "channel": 3 })];
            case 3:
                // 初始化
                res = _t.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 4:
                _t.sent();
                if (!res.todayGotWaterGoalTask.canPop) return [3 /*break*/, 6];
                return [4 /*yield*/, api('gotWaterGoalTaskForFarm', { "type": 3, "version": 14, "channel": 1, "babelChannel": "120" })];
            case 5:
                data = _t.sent();
                (0, TS_USER_AGENTS_1.o2s)(data);
                console.log("弹窗获得水滴", data.addEnergy);
                _t.label = 6;
            case 6:
                (0, TS_USER_AGENTS_1.o2s)(res, 'initForFarm');
                totalEnergy = res.farmUserPro.totalEnergy // 背包剩余水滴
                ;
                if (res.farmUserPro.treeState === 2) {
                    console.log("可以兑换奖品了");
                }
                else if (res.farmUserPro.treeState === 0) {
                    console.log("自动种植");
                }
                return [4 /*yield*/, api('friendListInitForFarm', { "lastId": null, "version": 14, "channel": 1, "babelChannel": "120" })];
            case 7:
                // 添加好友
                // 删除好友
                res = _t.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 8:
                _t.sent();
                if (!!res.newFriendMsg) return [3 /*break*/, 17];
                _t.label = 9;
            case 9:
                _t.trys.push([9, 15, 16, 17]);
                _a = (e_1 = void 0, __values(res.friends)), _b = _a.next();
                _t.label = 10;
            case 10:
                if (!!_b.done) return [3 /*break*/, 14];
                fr = _b.value;
                return [4 /*yield*/, api('deleteFriendForFarm', { "shareCode": fr.shareCode, "version": 8, "channel": 1 })];
            case 11:
                res = _t.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 12:
                _t.sent();
                if (res.code === '0') {
                    console.log("\u5220\u9664\u597D\u53CB".concat(fr.nickName, "\u6210\u529F"));
                }
                else {
                    console.log("\u5220\u9664\u597D\u53CB".concat(fr.nickName, "\u5931\u8D25"));
                    return [3 /*break*/, 14];
                }
                _t.label = 13;
            case 13:
                _b = _a.next();
                return [3 /*break*/, 10];
            case 14: return [3 /*break*/, 17];
            case 15:
                e_1_1 = _t.sent();
                e_1 = { error: e_1_1 };
                return [3 /*break*/, 17];
            case 16:
                try {
                    if (_b && !_b.done && (_l = _a["return"])) _l.call(_a);
                }
                finally { if (e_1) throw e_1.error; }
                return [7 /*endfinally*/];
            case 17: return [4 /*yield*/, api('myCardInfoForFarm', { "version": 14, "channel": 3, "babelChannel": "10" })];
            case 18:
                // 背包
                res = _t.sent();
                (0, TS_USER_AGENTS_1.o2s)(res, 'myCardInfoForFarm');
                beanCard = res.beanCard // 换豆卡
                ;
                i_1 = 0;
                _t.label = 19;
            case 19:
                if (!(i_1 < 5)) return [3 /*break*/, 23];
                if (!(totalEnergy >= 100 && beanCard)) return [3 /*break*/, 22];
                return [4 /*yield*/, api('userMyCardForFarm', { "cardType": "beanCard", "babelChannel": "10", "channel": 3, "version": 14 })];
            case 20:
                data = _t.sent();
                console.log('使用水滴换豆卡，获得京豆', data.beanCount);
                totalEnergy -= 100;
                beanCard--;
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 21:
                _t.sent();
                _t.label = 22;
            case 22:
                i_1++;
                return [3 /*break*/, 19];
            case 23: return [4 /*yield*/, api('friendListInitForFarm', { "lastId": null, "version": 14, "channel": 1, "babelChannel": "120" })];
            case 24:
                // 好友邀请奖励
                res = _t.sent();
                (0, TS_USER_AGENTS_1.o2s)(res, 'friendListInitForFarm');
                friendList = res.friends;
                if (!(res.inviteFriendCount > res.inviteFriendGotAwardCount)) return [3 /*break*/, 27];
                return [4 /*yield*/, api('awardInviteFriendForFarm', {})];
            case 25:
                data = _t.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 26:
                _t.sent();
                (0, TS_USER_AGENTS_1.o2s)(data, '好友邀请奖励');
                _t.label = 27;
            case 27: return [4 /*yield*/, api('taskInitForFarm', { "version": 14, "channel": 1, "babelChannel": "120" })];
            case 28:
                // 给好友浇水
                res = _t.sent();
                (0, TS_USER_AGENTS_1.o2s)(res, 'taskInitForFarm');
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 29:
                _t.sent();
                console.log("\u4ECA\u65E5\u5DF2\u7ED9".concat(res.waterFriendTaskInit.waterFriendCountKey, "\u4E2A\u597D\u53CB\u6D47\u6C34"));
                if (!(res.waterFriendTaskInit.waterFriendCountKey < res.waterFriendTaskInit.waterFriendMax)) return [3 /*break*/, 41];
                i_2 = res.waterFriendTaskInit.waterFriendCountKey;
                _t.label = 30;
            case 30:
                if (!(i_2 < res.waterFriendTaskInit.waterFriendMax)) return [3 /*break*/, 40];
                _t.label = 31;
            case 31:
                _t.trys.push([31, 37, 38, 39]);
                friendList_1 = (e_2 = void 0, __values(friendList)), friendList_1_1 = friendList_1.next();
                _t.label = 32;
            case 32:
                if (!!friendList_1_1.done) return [3 /*break*/, 36];
                fr = friendList_1_1.value;
                if (!(fr.friendState === 1)) return [3 /*break*/, 35];
                return [4 /*yield*/, api('waterFriendForFarm', { "shareCode": fr.shareCode, "version": 14, "channel": 1, "babelChannel": "120" })];
            case 33:
                data = _t.sent();
                if (data.code === '0')
                    console.log("\u7ED9\u597D\u53CB".concat(fr.nickName, "\u6D47\u6C34\u6210\u529F"));
                if (data.cardInfo) {
                    console.log('获得卡片');
                }
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 34:
                _t.sent();
                return [3 /*break*/, 36];
            case 35:
                friendList_1_1 = friendList_1.next();
                return [3 /*break*/, 32];
            case 36: return [3 /*break*/, 39];
            case 37:
                e_2_1 = _t.sent();
                e_2 = { error: e_2_1 };
                return [3 /*break*/, 39];
            case 38:
                try {
                    if (friendList_1_1 && !friendList_1_1.done && (_m = friendList_1["return"])) _m.call(friendList_1);
                }
                finally { if (e_2) throw e_2.error; }
                return [7 /*endfinally*/];
            case 39:
                i_2++;
                return [3 /*break*/, 30];
            case 40: return [3 /*break*/, 44];
            case 41:
                if (!(res.waterFriendTaskInit.waterFriendCountKey === res.waterFriendTaskInit.waterFriendMax && !res.waterFriendTaskInit.waterFriendGotAward)) return [3 /*break*/, 44];
                return [4 /*yield*/, api('waterFriendGotAwardForFarm', { "version": 14, "channel": 1, "babelChannel": "120" })];
            case 42:
                data = _t.sent();
                console.log('给好友浇水奖励', data.addWater);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 43:
                _t.sent();
                _t.label = 44;
            case 44: return [4 /*yield*/, api('clockInInitForFarm', { "timestamp": Date.now(), "version": 14, "channel": 1, "babelChannel": "120" })];
            case 45:
                // 签到
                res = _t.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 46:
                _t.sent();
                if (!!res.todaySigned) return [3 /*break*/, 52];
                return [4 /*yield*/, api('clockInForFarm', { "type": 1, "version": 14, "channel": 1, "babelChannel": "120" })];
            case 47:
                data = _t.sent();
                if (!(data.signDay === 7)) return [3 /*break*/, 50];
                return [4 /*yield*/, api('gotClockInGift', { "type": 2, "version": 14, "channel": 1, "babelChannel": "120" })];
            case 48:
                data = _t.sent();
                (0, TS_USER_AGENTS_1.o2s)(data, 'gotClockInGift');
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 49:
                _t.sent();
                _t.label = 50;
            case 50: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 51:
                _t.sent();
                _t.label = 52;
            case 52: return [4 /*yield*/, api('clockInInitForFarm', { "timestamp": Date.now(), "version": 14, "channel": 1, "babelChannel": "120" })];
            case 53:
                res = _t.sent();
                _t.label = 54;
            case 54:
                _t.trys.push([54, 61, 62, 63]);
                _c = (e_3 = void 0, __values(res.themes || [])), _d = _c.next();
                _t.label = 55;
            case 55:
                if (!!_d.done) return [3 /*break*/, 60];
                t = _d.value;
                if (!!t.hadGot) return [3 /*break*/, 59];
                console.log('关注', t.name);
                return [4 /*yield*/, api('clockInFollowForFarm', { "id": t.id, "type": "theme", "step": 1, "version": 14, "channel": 1, "babelChannel": "120" })];
            case 56:
                res = _t.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(5000)];
            case 57:
                _t.sent();
                return [4 /*yield*/, api('clockInFollowForFarm', { "id": t.id, "type": "theme", "step": 2, "version": 14, "channel": 1, "babelChannel": "120" })];
            case 58:
                res = _t.sent();
                console.log('获得水滴', res.amount);
                _t.label = 59;
            case 59:
                _d = _c.next();
                return [3 /*break*/, 55];
            case 60: return [3 /*break*/, 63];
            case 61:
                e_3_1 = _t.sent();
                e_3 = { error: e_3_1 };
                return [3 /*break*/, 63];
            case 62:
                try {
                    if (_d && !_d.done && (_o = _c["return"])) _o.call(_c);
                }
                finally { if (e_3) throw e_3.error; }
                return [7 /*endfinally*/];
            case 63: return [4 /*yield*/, api('farmAssistInit', { "version": 14, "channel": 1, "babelChannel": "120" })];
            case 64:
                // 助力奖励
                res = _t.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 65:
                _t.sent();
                (0, TS_USER_AGENTS_1.o2s)(res, 'farmAssistInit');
                _t.label = 66;
            case 66:
                _t.trys.push([66, 72, 73, 74]);
                _e = (e_4 = void 0, __values(res.assistStageList)), _f = _e.next();
                _t.label = 67;
            case 67:
                if (!!_f.done) return [3 /*break*/, 71];
                t = _f.value;
                if (!(t.percentage === '100%' && t.stageStaus === 2)) return [3 /*break*/, 70];
                return [4 /*yield*/, api('receiveStageEnergy', { "version": 14, "channel": 1, "babelChannel": "120" })];
            case 68:
                data = _t.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 69:
                _t.sent();
                console.log('被助力奖励', data.amount);
                _t.label = 70;
            case 70:
                _f = _e.next();
                return [3 /*break*/, 67];
            case 71: return [3 /*break*/, 74];
            case 72:
                e_4_1 = _t.sent();
                e_4 = { error: e_4_1 };
                return [3 /*break*/, 74];
            case 73:
                try {
                    if (_f && !_f.done && (_p = _e["return"])) _p.call(_e);
                }
                finally { if (e_4) throw e_4.error; }
                return [7 /*endfinally*/];
            case 74: return [4 /*yield*/, api('taskInitForFarm', { "version": 14, "channel": 1, "babelChannel": "120" })];
            case 75:
                // 任务
                res = _t.sent();
                (0, TS_USER_AGENTS_1.o2s)(res);
                if (!!res.gotBrowseTaskAdInit.f) return [3 /*break*/, 83];
                _t.label = 76;
            case 76:
                _t.trys.push([76, 81, 82, 83]);
                _g = (e_5 = void 0, __values(res.gotBrowseTaskAdInit.userBrowseTaskAds)), _h = _g.next();
                _t.label = 77;
            case 77:
                if (!!_h.done) return [3 /*break*/, 80];
                t = _h.value;
                return [4 /*yield*/, api('browseAdTaskForFarm', { "advertId": t.advertId, "type": 1, "version": 14, "channel": 1, "babelChannel": "120" })];
            case 78:
                // if (t.hadFinishedTimes !== t.limit) {
                // data = await api('browseAdTaskForFarm', {"advertId": t.advertId, "type": 0, "version": 14, "channel": 1, "babelChannel": "120"})
                // o2s(data, 'browseAdTaskForFarm')
                // await wait(t.time * 1000 || 1000)
                data = _t.sent();
                console.log('任务完成，获得', data.amount);
                _t.label = 79;
            case 79:
                _h = _g.next();
                return [3 /*break*/, 77];
            case 80: return [3 /*break*/, 83];
            case 81:
                e_5_1 = _t.sent();
                e_5 = { error: e_5_1 };
                return [3 /*break*/, 83];
            case 82:
                try {
                    if (_h && !_h.done && (_q = _g["return"])) _q.call(_g);
                }
                finally { if (e_5) throw e_5.error; }
                return [7 /*endfinally*/];
            case 83:
                if (!!res.gotThreeMealInit.f) return [3 /*break*/, 86];
                if (!![10, 15, 16, 22, 23].includes(new Date().getHours())) return [3 /*break*/, 86];
                return [4 /*yield*/, api('gotThreeMealForFarm', { "version": 14, "channel": 1, "babelChannel": "120" })];
            case 84:
                data = _t.sent();
                if (data.code === '0') {
                    console.log('定时奖励成功', data.amount);
                }
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 85:
                _t.sent();
                _t.label = 86;
            case 86:
                if (!res.signInit.todaySigned) return [3 /*break*/, 87];
                console.log("\u4ECA\u5929\u5DF2\u7B7E\u5230,\u5DF2\u7ECF\u8FDE\u7EED\u7B7E\u5230".concat(res.signInit.totalSigned, "\u5929,\u4E0B\u6B21\u7B7E\u5230\u53EF\u5F97").concat(res.signInit.signEnergyEachAmount, "g"));
                return [3 /*break*/, 90];
            case 87: return [4 /*yield*/, api('signForFarm', { "version": 14, "channel": 1, "babelChannel": "120" })];
            case 88:
                data = _t.sent();
                console.log('签到成功', data.amount);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 89:
                _t.sent();
                _t.label = 90;
            case 90:
                if (!!res.waterRainInit.f) return [3 /*break*/, 92];
                if (!(Date.now < res.waterRainInit.lastTime + 3 * 60 * 60 * 1000)) return [3 /*break*/, 92];
                return [4 /*yield*/, api('waterRainForFarm', { "type": 1, "hongBaoTimes": 100, "version": 3 })];
            case 91:
                data = _t.sent();
                (0, TS_USER_AGENTS_1.o2s)(data, 'waterRainForFarm');
                if (data.code === '0') {
                    console.log('获得水滴', data.addEnergy);
                }
                _t.label = 92;
            case 92:
                if (!(!res.firstWaterInit.f && res.firstWaterInit.totalWaterTimes !== 0)) return [3 /*break*/, 94];
                return [4 /*yield*/, api('firstWaterTaskForFarm', { "version": 14, "channel": 1, "babelChannel": "120" })];
            case 93:
                data = _t.sent();
                console.log('firstWaterTaskForFarm', data.amount);
                _t.label = 94;
            case 94: return [4 /*yield*/, api('initForTurntableFarm', { "version": 4, "channel": 1 })];
            case 95:
                // 红包
                res = _t.sent();
                (0, TS_USER_AGENTS_1.o2s)(res, 'initForTurntableFarm');
                _t.label = 96;
            case 96:
                _t.trys.push([96, 103, 104, 105]);
                _j = (e_6 = void 0, __values(res.turntableBrowserAds)), _k = _j.next();
                _t.label = 97;
            case 97:
                if (!!_k.done) return [3 /*break*/, 102];
                t = _k.value;
                if (!!t.status) return [3 /*break*/, 101];
                console.log(t.main);
                return [4 /*yield*/, api('browserForTurntableFarm', { "type": 1, "adId": t.adId, "version": 4, "channel": 1 })];
            case 98:
                data = _t.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(t.browserTimes * 1000 || 1000)];
            case 99:
                _t.sent();
                return [4 /*yield*/, api('browserForTurntableFarm', { "type": 2, "adId": t.adId, "version": 4, "channel": 1 })];
            case 100:
                data = _t.sent();
                _t.label = 101;
            case 101:
                _k = _j.next();
                return [3 /*break*/, 97];
            case 102: return [3 /*break*/, 105];
            case 103:
                e_6_1 = _t.sent();
                e_6 = { error: e_6_1 };
                return [3 /*break*/, 105];
            case 104:
                try {
                    if (_k && !_k.done && (_r = _j["return"])) _r.call(_j);
                }
                finally { if (e_6) throw e_6.error; }
                return [7 /*endfinally*/];
            case 105:
                i_3 = 0;
                _t.label = 106;
            case 106:
                if (!(i_3 < res.remainLotteryTimes)) return [3 /*break*/, 110];
                return [4 /*yield*/, api('lotteryForTurntableFarm', { "type": 1, "version": 4, "channel": 1 })];
            case 107:
                data = _t.sent();
                (0, TS_USER_AGENTS_1.o2s)(data, 'lotteryForTurntableFarm');
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 108:
                _t.sent();
                _t.label = 109;
            case 109:
                i_3++;
                return [3 /*break*/, 106];
            case 110: return [4 /*yield*/, (0, TS_USER_AGENTS_1.getShareCodePool)('farm', 30)];
            case 111:
                // if (!res.timingGotStatus && res.remainLotteryTimes) {
                //   if (Date.now() > (res.timingLastSysTime + 60 * 60 * res.timingIntervalHours * 1000)) {
                //     data = await api('timingAwardForTurntableFarm', {"version": 4, "channel": 1})
                //     await wait(1000)
                //     o2s(data, 'timingAwardForTurntableFarm')
                //   } else {
                //     console.log(`免费赠送的抽奖机会未到时间`)
                //   }
                // }
                // 助力
                shareCodePool = _t.sent();
                shareCode = Array.from(new Set(__spreadArray(__spreadArray([], __read(shareCodeSelf), false), __read(shareCodePool), false)));
                _t.label = 112;
            case 112:
                _t.trys.push([112, 118, 119, 120]);
                shareCodeSelf_1 = (e_7 = void 0, __values(shareCodeSelf)), shareCodeSelf_1_1 = shareCodeSelf_1.next();
                _t.label = 113;
            case 113:
                if (!!shareCodeSelf_1_1.done) return [3 /*break*/, 117];
                code = shareCodeSelf_1_1.value;
                console.log('去助力', code);
                return [4 /*yield*/, api('initForFarm', { "mpin": "", "utm_campaign": "t_335139774", "utm_medium": "appshare", "shareCode": code, "utm_term": "Wxfriends", "utm_source": "iosapp", "imageUrl": "", "nickName": "", "version": 14, "channel": 2, "babelChannel": 0 })];
            case 114:
                res = _t.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(3000)];
            case 115:
                _t.sent();
                (0, TS_USER_AGENTS_1.o2s)(res, '助力');
                if (res.helpResult.code === '7') {
                    console.log('不给自己助力');
                }
                else if (res.helpResult.code === '0') {
                    console.log('助力成功,获得', res.helpResult.salveHelpAddWater);
                }
                else if (res.helpResult.code === '8') {
                    console.log('上限');
                    return [3 /*break*/, 117];
                }
                else if (res.helpResult.code === '9') {
                    console.log('已助力');
                }
                else if (res.helpResult.code === '10') {
                    console.log('已满');
                }
                else if (res.helpResult.remainTimes === 0) {
                    console.log('次数用完');
                    return [3 /*break*/, 117];
                }
                _t.label = 116;
            case 116:
                shareCodeSelf_1_1 = shareCodeSelf_1.next();
                return [3 /*break*/, 113];
            case 117: return [3 /*break*/, 120];
            case 118:
                e_7_1 = _t.sent();
                e_7 = { error: e_7_1 };
                return [3 /*break*/, 120];
            case 119:
                try {
                    if (shareCodeSelf_1_1 && !shareCodeSelf_1_1.done && (_s = shareCodeSelf_1["return"])) _s.call(shareCodeSelf_1);
                }
                finally { if (e_7) throw e_7.error; }
                return [7 /*endfinally*/];
            case 120:
                i++;
                return [3 /*break*/, 2];
            case 121: return [2 /*return*/];
        }
    });
}); })();
function api(fn, body) {
    return __awaiter(this, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios_1["default"].get("https://api.m.jd.com/client.action?functionId=".concat(fn, "&body=").concat(JSON.stringify(body), "&&appid=wh5&client=apple&clientVersion=10.2.4"), {
                        headers: {
                            "Host": "api.m.jd.com",
                            "Origin": "https://carry.m.jd.com",
                            "User-Agent": TS_USER_AGENTS_1["default"],
                            "Accept-Language": "zh-CN,zh-Hans;q=0.9",
                            "Referer": "https://carry.m.jd.com/",
                            "Cookie": cookie
                        }
                    })];
                case 1:
                    data = (_a.sent()).data;
                    return [2 /*return*/, data];
            }
        });
    });
}
