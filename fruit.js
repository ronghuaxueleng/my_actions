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
var sendNotify_1 = require("./sendNotify");
var TS_USER_AGENTS_1 = require("./TS_USER_AGENTS");
var cookie = '', res = '', data, UserName;
var shareCodeSelf = [], shareCodePool = [], shareCode = [], shareCodeFile = require('./jdFruitShareCodes');
var message = '';
!(function () { return __awaiter(void 0, void 0, void 0, function () {
    var cookiesArr, _a, _b, _c, index, value, totalEnergy, _d, _e, fr, e_1_1, friendList, i, friendList_1, friendList_1_1, fr, e_2_1, _f, _g, t, e_3_1, _h, _j, t, e_4_1, _k, _l, t, e_5_1, shareCodeSelf_1, shareCodeSelf_1_1, code, e_6_1, i, shareCodeSelf_2, shareCodeSelf_2_1, code, e_7_1, farmAssistInit_waterEnergy, _m, _o, t, e_8_1, e_9, e_10_1;
    var e_10, _p, e_1, _q, e_2, _r, e_3, _s, e_4, _t, e_5, _u, e_6, _v, e_7, _w, e_8, _x;
    return __generator(this, function (_y) {
        switch (_y.label) {
            case 0: return [4 /*yield*/, (0, TS_USER_AGENTS_1.requireConfig)()];
            case 1:
                cookiesArr = _y.sent();
                _y.label = 2;
            case 2:
                _y.trys.push([2, 146, 147, 148]);
                _a = __values(cookiesArr.entries()), _b = _a.next();
                _y.label = 3;
            case 3:
                if (!!_b.done) return [3 /*break*/, 145];
                _c = __read(_b.value, 2), index = _c[0], value = _c[1];
                cookie = value;
                UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                console.log("\n\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7".concat(index + 1, "\u3011").concat(UserName, "\n"));
                message += "\u3010\u8D26\u53F7".concat(index + 1, "\u3011  ").concat(UserName, "\n");
                _y.label = 4;
            case 4:
                _y.trys.push([4, 141, 142, 144]);
                if (Object.keys(shareCodeFile)[index]) {
                    shareCodeSelf = shareCodeFile[Object.keys(shareCodeFile)[index]].split('@');
                }
                console.log("\u7B2C".concat(index + 1, "\u4E2A\u8D26\u53F7\u83B7\u53D6\u7684\u5185\u90E8\u4E92\u52A9"), shareCodeSelf);
                return [4 /*yield*/, api('initForFarm', { "version": 11, "channel": 3 })];
            case 5:
                // 初始化
                res = _y.sent();
                if (!(res.code === '6')) return [3 /*break*/, 7];
                console.log('黑号');
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(5000)];
            case 6:
                _y.sent();
                return [3 /*break*/, 144];
            case 7: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 8:
                _y.sent();
                if (!res.todayGotWaterGoalTask.canPop) return [3 /*break*/, 10];
                return [4 /*yield*/, api('gotWaterGoalTaskForFarm', { "type": 3, "version": 14, "channel": 1, "babelChannel": "120" })];
            case 9:
                data = _y.sent();
                (0, TS_USER_AGENTS_1.o2s)(data);
                console.log("弹窗获得水滴", data.addEnergy);
                _y.label = 10;
            case 10:
                (0, TS_USER_AGENTS_1.o2s)(res, 'initForFarm');
                totalEnergy = res.farmUserPro.totalEnergy // 背包剩余水滴
                ;
                if (!(res.farmUserPro.treeState === 2)) return [3 /*break*/, 12];
                console.log("可以兑换奖品了");
                return [4 /*yield*/, (0, sendNotify_1.sendNotify)("东东农场", "\u8D26\u53F7".concat(index + 1, "  ").concat(UserName, "\n\n\u5DF2\u6210\u719F"))];
            case 11:
                _y.sent();
                return [3 /*break*/, 13];
            case 12:
                if (res.farmUserPro.treeState === 0) {
                    console.log("自动种植");
                }
                _y.label = 13;
            case 13: return [4 /*yield*/, api('friendListInitForFarm', { "lastId": null, "version": 14, "channel": 1, "babelChannel": "120" })];
            case 14:
                // 添加好友
                // 删除好友
                res = _y.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 15:
                _y.sent();
                if (!!res.newFriendMsg) return [3 /*break*/, 24];
                _y.label = 16;
            case 16:
                _y.trys.push([16, 22, 23, 24]);
                _d = (e_1 = void 0, __values(res.friends)), _e = _d.next();
                _y.label = 17;
            case 17:
                if (!!_e.done) return [3 /*break*/, 21];
                fr = _e.value;
                return [4 /*yield*/, api('deleteFriendForFarm', { "shareCode": fr.shareCode, "version": 14, "channel": 1, "babelChannel": "121" })];
            case 18:
                res = _y.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 19:
                _y.sent();
                if (res.code === '0') {
                    console.log("\u5220\u9664\u597D\u53CB".concat(fr.nickName, "\u6210\u529F"));
                }
                else {
                    console.log("\u5220\u9664\u597D\u53CB".concat(fr.nickName, "\u5931\u8D25"));
                    return [3 /*break*/, 21];
                }
                _y.label = 20;
            case 20:
                _e = _d.next();
                return [3 /*break*/, 17];
            case 21: return [3 /*break*/, 24];
            case 22:
                e_1_1 = _y.sent();
                e_1 = { error: e_1_1 };
                return [3 /*break*/, 24];
            case 23:
                try {
                    if (_e && !_e.done && (_q = _d["return"])) _q.call(_d);
                }
                finally { if (e_1) throw e_1.error; }
                return [7 /*endfinally*/];
            case 24: return [4 /*yield*/, api('friendListInitForFarm', { "lastId": null, "version": 14, "channel": 1, "babelChannel": "120" })];
            case 25:
                // 背包
                // process.env.jdFruitBeanCard = 'True'
                // if (process.env.jdFruitBeanCard.toLowerCase() === 'true') {
                //   res = await api('myCardInfoForFarm', {"version": 14, "channel": 3, "babelChannel": "10"})
                //   o2s(res, 'myCardInfoForFarm')
                //   let beanCard: number = res.beanCard  // 换豆卡
                //   console.log('换豆卡数量', beanCard)
                //   for (let i = 0; i < 10; i++) {
                //     if (totalEnergy >= 100 && beanCard) {
                //       data = await api('userMyCardForFarm', {"cardType": "beanCard", "babelChannel": "10", "channel": 3, "version": 14})
                //       console.log('使用水滴换豆卡，获得京豆', data.beanCount)
                //       totalEnergy -= 100
                //       beanCard--
                //       await wait(1000)
                //     }
                //   }
                // } else {
                //   console.log('未设置水滴换豆卡环境变量')
                // }
                // 好友邀请奖励
                res = _y.sent();
                (0, TS_USER_AGENTS_1.o2s)(res, 'friendListInitForFarm');
                friendList = res.friends;
                if (!(res.inviteFriendCount > res.inviteFriendGotAwardCount)) return [3 /*break*/, 28];
                return [4 /*yield*/, api('awardInviteFriendForFarm', {})];
            case 26:
                data = _y.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 27:
                _y.sent();
                (0, TS_USER_AGENTS_1.o2s)(data, '好友邀请奖励');
                _y.label = 28;
            case 28: return [4 /*yield*/, api('taskInitForFarm', { "version": 14, "channel": 1, "babelChannel": "120" })];
            case 29:
                // 给好友浇水
                res = _y.sent();
                (0, TS_USER_AGENTS_1.o2s)(res, 'taskInitForFarm');
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 30:
                _y.sent();
                console.log("\u4ECA\u65E5\u5DF2\u7ED9".concat(res.waterFriendTaskInit.waterFriendCountKey, "\u4E2A\u597D\u53CB\u6D47\u6C34"));
                if (!(res.waterFriendTaskInit.waterFriendCountKey < res.waterFriendTaskInit.waterFriendMax)) return [3 /*break*/, 42];
                i = res.waterFriendTaskInit.waterFriendCountKey;
                _y.label = 31;
            case 31:
                if (!(i < res.waterFriendTaskInit.waterFriendMax)) return [3 /*break*/, 41];
                _y.label = 32;
            case 32:
                _y.trys.push([32, 38, 39, 40]);
                friendList_1 = (e_2 = void 0, __values(friendList)), friendList_1_1 = friendList_1.next();
                _y.label = 33;
            case 33:
                if (!!friendList_1_1.done) return [3 /*break*/, 37];
                fr = friendList_1_1.value;
                if (!(fr.friendState === 1)) return [3 /*break*/, 36];
                return [4 /*yield*/, api('waterFriendForFarm', { "shareCode": fr.shareCode, "version": 14, "channel": 1, "babelChannel": "120" })];
            case 34:
                data = _y.sent();
                if (data.code === '0')
                    console.log("\u7ED9\u597D\u53CB".concat(fr.nickName, "\u6D47\u6C34\u6210\u529F"));
                if (data.cardInfo) {
                    console.log('获得卡片');
                }
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 35:
                _y.sent();
                return [3 /*break*/, 37];
            case 36:
                friendList_1_1 = friendList_1.next();
                return [3 /*break*/, 33];
            case 37: return [3 /*break*/, 40];
            case 38:
                e_2_1 = _y.sent();
                e_2 = { error: e_2_1 };
                return [3 /*break*/, 40];
            case 39:
                try {
                    if (friendList_1_1 && !friendList_1_1.done && (_r = friendList_1["return"])) _r.call(friendList_1);
                }
                finally { if (e_2) throw e_2.error; }
                return [7 /*endfinally*/];
            case 40:
                i++;
                return [3 /*break*/, 31];
            case 41: return [3 /*break*/, 45];
            case 42:
                if (!(res.waterFriendTaskInit.waterFriendCountKey === res.waterFriendTaskInit.waterFriendMax && !res.waterFriendTaskInit.waterFriendGotAward)) return [3 /*break*/, 45];
                return [4 /*yield*/, api('waterFriendGotAwardForFarm', { "version": 14, "channel": 1, "babelChannel": "120" })];
            case 43:
                data = _y.sent();
                console.log('给好友浇水奖励', data.addWater);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 44:
                _y.sent();
                _y.label = 45;
            case 45: return [4 /*yield*/, api('clockInInitForFarm', { "timestamp": Date.now(), "version": 14, "channel": 1, "babelChannel": "120" })];
            case 46:
                // 签到
                res = _y.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 47:
                _y.sent();
                if (!!res.todaySigned) return [3 /*break*/, 53];
                return [4 /*yield*/, api('clockInForFarm', { "type": 1, "version": 14, "channel": 1, "babelChannel": "120" })];
            case 48:
                data = _y.sent();
                if (!(data.signDay === 7)) return [3 /*break*/, 51];
                return [4 /*yield*/, api('gotClockInGift', { "type": 2, "version": 14, "channel": 1, "babelChannel": "120" })];
            case 49:
                data = _y.sent();
                (0, TS_USER_AGENTS_1.o2s)(data, 'gotClockInGift');
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 50:
                _y.sent();
                _y.label = 51;
            case 51: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 52:
                _y.sent();
                _y.label = 53;
            case 53: return [4 /*yield*/, api('clockInInitForFarm', { "timestamp": Date.now(), "version": 14, "channel": 1, "babelChannel": "120" })];
            case 54:
                res = _y.sent();
                _y.label = 55;
            case 55:
                _y.trys.push([55, 62, 63, 64]);
                _f = (e_3 = void 0, __values(res.themes || [])), _g = _f.next();
                _y.label = 56;
            case 56:
                if (!!_g.done) return [3 /*break*/, 61];
                t = _g.value;
                if (!!t.hadGot) return [3 /*break*/, 60];
                console.log('关注', t.name);
                return [4 /*yield*/, api('clockInFollowForFarm', { "id": t.id, "type": "theme", "step": 1, "version": 14, "channel": 1, "babelChannel": "120" })];
            case 57:
                res = _y.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(5000)];
            case 58:
                _y.sent();
                return [4 /*yield*/, api('clockInFollowForFarm', { "id": t.id, "type": "theme", "step": 2, "version": 14, "channel": 1, "babelChannel": "120" })];
            case 59:
                res = _y.sent();
                console.log('获得水滴', res.amount);
                _y.label = 60;
            case 60:
                _g = _f.next();
                return [3 /*break*/, 56];
            case 61: return [3 /*break*/, 64];
            case 62:
                e_3_1 = _y.sent();
                e_3 = { error: e_3_1 };
                return [3 /*break*/, 64];
            case 63:
                try {
                    if (_g && !_g.done && (_s = _f["return"])) _s.call(_f);
                }
                finally { if (e_3) throw e_3.error; }
                return [7 /*endfinally*/];
            case 64: return [4 /*yield*/, api('taskInitForFarm', { "version": 14, "channel": 1, "babelChannel": "120" })];
            case 65:
                // 任务
                res = _y.sent();
                (0, TS_USER_AGENTS_1.o2s)(res);
                if (!!res.gotBrowseTaskAdInit.f) return [3 /*break*/, 77];
                _y.label = 66;
            case 66:
                _y.trys.push([66, 75, 76, 77]);
                _h = (e_4 = void 0, __values(res.gotBrowseTaskAdInit.userBrowseTaskAds)), _j = _h.next();
                _y.label = 67;
            case 67:
                if (!!_j.done) return [3 /*break*/, 74];
                t = _j.value;
                if (!(t.hadFinishedTimes !== t.limit)) return [3 /*break*/, 71];
                return [4 /*yield*/, api('browseAdTaskForFarm', { "advertId": t.advertId, "type": 0, "version": 14, "channel": 1, "babelChannel": "120" })];
            case 68:
                data = _y.sent();
                (0, TS_USER_AGENTS_1.o2s)(data, 'browseAdTaskForFarm');
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(t.time * 1000 || 1000)];
            case 69:
                _y.sent();
                return [4 /*yield*/, api('browseAdTaskForFarm', { "advertId": t.advertId, "type": 1, "version": 14, "channel": 1, "babelChannel": "120" })];
            case 70:
                data = _y.sent();
                console.log('任务完成，获得', data.amount);
                _y.label = 71;
            case 71: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 72:
                _y.sent();
                _y.label = 73;
            case 73:
                _j = _h.next();
                return [3 /*break*/, 67];
            case 74: return [3 /*break*/, 77];
            case 75:
                e_4_1 = _y.sent();
                e_4 = { error: e_4_1 };
                return [3 /*break*/, 77];
            case 76:
                try {
                    if (_j && !_j.done && (_t = _h["return"])) _t.call(_h);
                }
                finally { if (e_4) throw e_4.error; }
                return [7 /*endfinally*/];
            case 77:
                if (!!res.gotThreeMealInit.f) return [3 /*break*/, 80];
                if (!![10, 15, 16, 22, 23].includes(new Date().getHours())) return [3 /*break*/, 80];
                return [4 /*yield*/, api('gotThreeMealForFarm', { "version": 14, "channel": 1, "babelChannel": "120" })];
            case 78:
                data = _y.sent();
                if (data.code === '0') {
                    console.log('定时奖励成功', data.amount);
                }
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 79:
                _y.sent();
                _y.label = 80;
            case 80:
                if (!res.signInit.todaySigned) return [3 /*break*/, 81];
                console.log("\u4ECA\u5929\u5DF2\u7B7E\u5230,\u5DF2\u7ECF\u8FDE\u7EED\u7B7E\u5230".concat(res.signInit.totalSigned, "\u5929,\u4E0B\u6B21\u7B7E\u5230\u53EF\u5F97").concat(res.signInit.signEnergyEachAmount, "g"));
                return [3 /*break*/, 84];
            case 81: return [4 /*yield*/, api('signForFarm', { "version": 14, "channel": 1, "babelChannel": "120" })];
            case 82:
                data = _y.sent();
                console.log('签到成功', data.amount);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 83:
                _y.sent();
                _y.label = 84;
            case 84:
                if (!!res.waterRainInit.f) return [3 /*break*/, 86];
                if (!(Date.now < res.waterRainInit.lastTime + 3 * 60 * 60 * 1000)) return [3 /*break*/, 86];
                return [4 /*yield*/, api('waterRainForFarm', { "type": 1, "hongBaoTimes": 100, "version": 3 })];
            case 85:
                data = _y.sent();
                (0, TS_USER_AGENTS_1.o2s)(data, 'waterRainForFarm');
                if (data.code === '0') {
                    console.log('获得水滴', data.addEnergy);
                }
                _y.label = 86;
            case 86:
                if (!(!res.firstWaterInit.f && res.firstWaterInit.totalWaterTimes !== 0)) return [3 /*break*/, 88];
                return [4 /*yield*/, api('firstWaterTaskForFarm', { "version": 14, "channel": 1, "babelChannel": "120" })];
            case 87:
                data = _y.sent();
                console.log('firstWaterTaskForFarm', data.amount);
                _y.label = 88;
            case 88: return [4 /*yield*/, api('initForTurntableFarm', { "version": 4, "channel": 1 })];
            case 89:
                // 红包
                res = _y.sent();
                (0, TS_USER_AGENTS_1.o2s)(res, 'initForTurntableFarm');
                _y.label = 90;
            case 90:
                _y.trys.push([90, 97, 98, 99]);
                _k = (e_5 = void 0, __values(res.turntableBrowserAds)), _l = _k.next();
                _y.label = 91;
            case 91:
                if (!!_l.done) return [3 /*break*/, 96];
                t = _l.value;
                if (!!t.status) return [3 /*break*/, 95];
                console.log("browserForTurntableFarm", t.main);
                return [4 /*yield*/, api('browserForTurntableFarm', { "type": 1, "adId": t.adId, "version": 4, "channel": 1 })];
            case 92:
                data = _y.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(t.browserTimes * 1000 || 1000)];
            case 93:
                _y.sent();
                return [4 /*yield*/, api('browserForTurntableFarm', { "type": 2, "adId": t.adId, "version": 4, "channel": 1 })];
            case 94:
                data = _y.sent();
                _y.label = 95;
            case 95:
                _l = _k.next();
                return [3 /*break*/, 91];
            case 96: return [3 /*break*/, 99];
            case 97:
                e_5_1 = _y.sent();
                e_5 = { error: e_5_1 };
                return [3 /*break*/, 99];
            case 98:
                try {
                    if (_l && !_l.done && (_u = _k["return"])) _u.call(_k);
                }
                finally { if (e_5) throw e_5.error; }
                return [7 /*endfinally*/];
            case 99:
                if (!(!res.timingGotStatus && res.remainLotteryTimes)) return [3 /*break*/, 103];
                if (!(Date.now() > (res.timingLastSysTime + 60 * 60 * res.timingIntervalHours * 1000))) return [3 /*break*/, 102];
                return [4 /*yield*/, api('timingAwardForTurntableFarm', { "version": 4, "channel": 1 })];
            case 100:
                data = _y.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 101:
                _y.sent();
                (0, TS_USER_AGENTS_1.o2s)(data, 'timingAwardForTurntableFarm');
                return [3 /*break*/, 103];
            case 102:
                console.log("\u514D\u8D39\u8D60\u9001\u7684\u62BD\u5956\u673A\u4F1A\u672A\u5230\u65F6\u95F4");
                _y.label = 103;
            case 103: return [4 /*yield*/, (0, TS_USER_AGENTS_1.getShareCodePool)('farm', 30)];
            case 104:
                // 天天红包助力
                shareCodePool = _y.sent();
                shareCode = Array.from(new Set(__spreadArray(__spreadArray([], __read(shareCodeSelf), false), __read(shareCodePool), false)));
                _y.label = 105;
            case 105:
                _y.trys.push([105, 111, 112, 113]);
                shareCodeSelf_1 = (e_6 = void 0, __values(shareCodeSelf)), shareCodeSelf_1_1 = shareCodeSelf_1.next();
                _y.label = 106;
            case 106:
                if (!!shareCodeSelf_1_1.done) return [3 /*break*/, 110];
                code = shareCodeSelf_1_1.value;
                console.log('去红包助力', code);
                return [4 /*yield*/, api('initForFarm', { "shareCode": "".concat(code, "-3"), "lng": "0.000000", "lat": "0.000000", "sid": "2871ac0252645ef0e2731aa7d03c1d3w", "un_area": "16_1341_1347_44750", "version": 14, "channel": 1, "babelChannel": 0 })];
            case 107:
                data = _y.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(3000)];
            case 108:
                _y.sent();
                if (data.code === '0') {
                    console.log('红包助力成功');
                }
                else if (data.code === '11') {
                    console.log('红包已助力过');
                }
                else if (data.code === '13') {
                    console.log('上限');
                    return [3 /*break*/, 110];
                }
                _y.label = 109;
            case 109:
                shareCodeSelf_1_1 = shareCodeSelf_1.next();
                return [3 /*break*/, 106];
            case 110: return [3 /*break*/, 113];
            case 111:
                e_6_1 = _y.sent();
                e_6 = { error: e_6_1 };
                return [3 /*break*/, 113];
            case 112:
                try {
                    if (shareCodeSelf_1_1 && !shareCodeSelf_1_1.done && (_v = shareCodeSelf_1["return"])) _v.call(shareCodeSelf_1);
                }
                finally { if (e_6) throw e_6.error; }
                return [7 /*endfinally*/];
            case 113:
                i = 0;
                _y.label = 114;
            case 114:
                if (!(i < res.remainLotteryTimes)) return [3 /*break*/, 118];
                return [4 /*yield*/, api('lotteryForTurntableFarm', { "type": 1, "version": 4, "channel": 1 })];
            case 115:
                data = _y.sent();
                if (data.type === 'thanks') {
                    console.log('抽奖获得 空气');
                }
                else {
                    console.log('抽奖获得', data.type);
                }
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 116:
                _y.sent();
                _y.label = 117;
            case 117:
                i++;
                return [3 /*break*/, 114];
            case 118: return [4 /*yield*/, (0, TS_USER_AGENTS_1.getShareCodePool)('farm', 30)];
            case 119:
                // 助力
                shareCodePool = _y.sent();
                shareCode = Array.from(new Set(__spreadArray(__spreadArray([], __read(shareCodeSelf), false), __read(shareCodePool), false)));
                _y.label = 120;
            case 120:
                _y.trys.push([120, 126, 127, 128]);
                shareCodeSelf_2 = (e_7 = void 0, __values(shareCodeSelf)), shareCodeSelf_2_1 = shareCodeSelf_2.next();
                _y.label = 121;
            case 121:
                if (!!shareCodeSelf_2_1.done) return [3 /*break*/, 125];
                code = shareCodeSelf_2_1.value;
                console.log('去助力', code);
                return [4 /*yield*/, api('initForFarm', { "mpin": "", "utm_campaign": "t_335139774", "utm_medium": "appshare", "shareCode": code, "utm_term": "Wxfriends", "utm_source": "iosapp", "imageUrl": "", "nickName": "", "version": 14, "channel": 2, "babelChannel": 0 })];
            case 122:
                res = _y.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(3000)];
            case 123:
                _y.sent();
                (0, TS_USER_AGENTS_1.o2s)(res, '助力');
                if (res.helpResult.code === '7') {
                    console.log('不给自己助力');
                }
                else if (res.helpResult.code === '0') {
                    console.log('助力成功,获得', res.helpResult.salveHelpAddWater);
                }
                else if (res.helpResult.code === '8') {
                    console.log('上限');
                    return [3 /*break*/, 125];
                }
                else if (res.helpResult.code === '9') {
                    console.log('已助力');
                }
                else if (res.helpResult.code === '10') {
                    console.log('已满');
                }
                else if (res.helpResult.remainTimes === 0) {
                    console.log('次数用完');
                    return [3 /*break*/, 125];
                }
                _y.label = 124;
            case 124:
                shareCodeSelf_2_1 = shareCodeSelf_2.next();
                return [3 /*break*/, 121];
            case 125: return [3 /*break*/, 128];
            case 126:
                e_7_1 = _y.sent();
                e_7 = { error: e_7_1 };
                return [3 /*break*/, 128];
            case 127:
                try {
                    if (shareCodeSelf_2_1 && !shareCodeSelf_2_1.done && (_w = shareCodeSelf_2["return"])) _w.call(shareCodeSelf_2);
                }
                finally { if (e_7) throw e_7.error; }
                return [7 /*endfinally*/];
            case 128: return [4 /*yield*/, api('farmAssistInit', { "version": 14, "channel": 1, "babelChannel": "120" })];
            case 129:
                // 助力奖励
                res = _y.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 130:
                _y.sent();
                (0, TS_USER_AGENTS_1.o2s)(res, 'farmAssistInit');
                farmAssistInit_waterEnergy = 0;
                _y.label = 131;
            case 131:
                _y.trys.push([131, 138, 139, 140]);
                _m = (e_8 = void 0, __values(res.assistStageList)), _o = _m.next();
                _y.label = 132;
            case 132:
                if (!!_o.done) return [3 /*break*/, 137];
                t = _o.value;
                if (!(t.percentage === '100%' && t.stageStaus === 2)) return [3 /*break*/, 135];
                return [4 /*yield*/, api('receiveStageEnergy', { "version": 14, "channel": 1, "babelChannel": "120" })];
            case 133:
                data = _y.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 134:
                _y.sent();
                farmAssistInit_waterEnergy += t.waterEnergy;
                return [3 /*break*/, 136];
            case 135:
                if (t.stageStaus === 3) {
                    farmAssistInit_waterEnergy += t.waterEnergy;
                }
                _y.label = 136;
            case 136:
                _o = _m.next();
                return [3 /*break*/, 132];
            case 137: return [3 /*break*/, 140];
            case 138:
                e_8_1 = _y.sent();
                e_8 = { error: e_8_1 };
                return [3 /*break*/, 140];
            case 139:
                try {
                    if (_o && !_o.done && (_x = _m["return"])) _x.call(_m);
                }
                finally { if (e_8) throw e_8.error; }
                return [7 /*endfinally*/];
            case 140:
                console.log('收到助力', res.assistFriendList.length);
                console.log('助力已领取', farmAssistInit_waterEnergy);
                message += "\u3010\u52A9\u529B\u5DF2\u9886\u53D6\u3011  ".concat(farmAssistInit_waterEnergy, "\n");
                message += '\n\n';
                return [3 /*break*/, 144];
            case 141:
                e_9 = _y.sent();
                console.log(e_9);
                return [3 /*break*/, 144];
            case 142: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(5000)];
            case 143:
                _y.sent();
                return [7 /*endfinally*/];
            case 144:
                _b = _a.next();
                return [3 /*break*/, 3];
            case 145: return [3 /*break*/, 148];
            case 146:
                e_10_1 = _y.sent();
                e_10 = { error: e_10_1 };
                return [3 /*break*/, 148];
            case 147:
                try {
                    if (_b && !_b.done && (_p = _a["return"])) _p.call(_a);
                }
                finally { if (e_10) throw e_10.error; }
                return [7 /*endfinally*/];
            case 148:
                if (!message) return [3 /*break*/, 150];
                return [4 /*yield*/, (0, sendNotify_1.sendNotify)('东东农场', message)];
            case 149:
                _y.sent();
                _y.label = 150;
            case 150: return [2 /*return*/];
        }
    });
}); })();
function api(fn, body) {
    return __awaiter(this, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios_1["default"].get("https://api.m.jd.com/client.action?functionId=".concat(fn, "&body=").concat(JSON.stringify(body), "&appid=wh5&client=apple&clientVersion=10.2.4"), {
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
