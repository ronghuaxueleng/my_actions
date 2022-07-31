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
var sendNotify_1 = require("./sendNotify");
var TS_USER_AGENTS_1 = require("./TS_USER_AGENTS");
var h5st_1 = require("./utils/h5st");
var cookie = '', res = '', data, UserName;
var shareCodeSelf = [], shareCodePool = [], shareCode = [], shareCodeFile = require('./jdFruitShareCodes');
var message = '', h5stTool = new h5st_1.H5ST("0c010", TS_USER_AGENTS_1["default"], process.env.FP_0C010 || "");
!(function () { return __awaiter(void 0, void 0, void 0, function () {
    var cookiesArr, _a, _b, _c, index, value, totalEnergy, _d, _e, fr, e_1_1, friendList, i, friendList_1, friendList_1_1, fr, e_2_1, _f, _g, t, e_3_1, _h, _j, t, e_4_1, _k, _l, t, e_5_1, shareCodeSelf_1, shareCodeSelf_1_1, code, e_6_1, i, farmAssistInit_waterEnergy, _m, _o, t, e_7_1, e_8, e_9_1;
    var e_9, _p, e_1, _q, e_2, _r, e_3, _s, e_4, _t, e_5, _u, e_6, _v, e_7, _w;
    return __generator(this, function (_x) {
        switch (_x.label) {
            case 0: return [4 /*yield*/, (0, TS_USER_AGENTS_1.getCookie)()];
            case 1:
                cookiesArr = _x.sent();
                _x.label = 2;
            case 2:
                _x.trys.push([2, 134, 135, 136]);
                _a = __values(cookiesArr.entries()), _b = _a.next();
                _x.label = 3;
            case 3:
                if (!!_b.done) return [3 /*break*/, 133];
                _c = __read(_b.value, 2), index = _c[0], value = _c[1];
                cookie = value;
                UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                console.log("\n\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7".concat(index + 1, "\u3011").concat(UserName, "\n"));
                message += "\u3010\u8D26\u53F7".concat(index + 1, "\u3011  ").concat(UserName, "\n");
                return [4 /*yield*/, h5stTool.__genAlgo()];
            case 4:
                _x.sent();
                _x.label = 5;
            case 5:
                _x.trys.push([5, 129, 130, 132]);
                if (Object.keys(shareCodeFile)[index]) {
                    shareCodeSelf = shareCodeFile[Object.keys(shareCodeFile)[index]].split('@');
                }
                (0, TS_USER_AGENTS_1.o2s)(shareCodeSelf, "\u7B2C".concat(index + 1, "\u4E2A\u8D26\u53F7\u83B7\u53D6\u7684\u5185\u90E8\u4E92\u52A9"));
                return [4 /*yield*/, api('initForFarm', { "version": 11, "channel": 3 })];
            case 6:
                // 初始化
                res = _x.sent();
                (0, TS_USER_AGENTS_1.o2s)(res);
                if (!(res.code === '6')) return [3 /*break*/, 8];
                console.log('黑号');
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(5000)];
            case 7:
                _x.sent();
                return [3 /*break*/, 132];
            case 8: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 9:
                _x.sent();
                if (!res.todayGotWaterGoalTask.canPop) return [3 /*break*/, 11];
                return [4 /*yield*/, api('gotWaterGoalTaskForFarm', { "type": 3, "version": 14, "channel": 1, "babelChannel": "120" })];
            case 10:
                data = _x.sent();
                (0, TS_USER_AGENTS_1.o2s)(data);
                console.log("弹窗获得水滴", data.addEnergy);
                _x.label = 11;
            case 11:
                (0, TS_USER_AGENTS_1.o2s)(res, 'initForFarm');
                totalEnergy = res.farmUserPro.totalEnergy // 背包剩余水滴
                ;
                if (!(res.farmUserPro.treeState === 2)) return [3 /*break*/, 13];
                console.log("可以兑换奖品了");
                return [4 /*yield*/, (0, sendNotify_1.sendNotify)("东东农场", "\u8D26\u53F7".concat(index + 1, "  ").concat(UserName, "\n\n\u5DF2\u6210\u719F"))];
            case 12:
                _x.sent();
                return [3 /*break*/, 14];
            case 13:
                if (res.farmUserPro.treeState === 0) {
                    console.log("自动种植");
                }
                _x.label = 14;
            case 14: return [4 /*yield*/, api('friendListInitForFarm', { "lastId": null, "version": 14, "channel": 1, "babelChannel": "120" })];
            case 15:
                // 添加好友
                // for (let i = 0; i < 30; i++) {
                //   res = await api('waterGoodForFarm', {"version": 16, "channel": 1, "babelChannel": "121"})
                //   o2s(res, 'waterGoodForFarm')
                //   await wait(3000)
                // }
                // 删除好友
                res = _x.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 16:
                _x.sent();
                if (!!res.newFriendMsg) return [3 /*break*/, 25];
                _x.label = 17;
            case 17:
                _x.trys.push([17, 23, 24, 25]);
                _d = (e_1 = void 0, __values(res.friends)), _e = _d.next();
                _x.label = 18;
            case 18:
                if (!!_e.done) return [3 /*break*/, 22];
                fr = _e.value;
                return [4 /*yield*/, api('deleteFriendForFarm', { "shareCode": fr.shareCode, "version": 14, "channel": 1, "babelChannel": "121" })];
            case 19:
                res = _x.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 20:
                _x.sent();
                if (res.code === '0') {
                    console.log("\u5220\u9664\u597D\u53CB".concat(fr.nickName, "\u6210\u529F"));
                }
                else {
                    console.log("\u5220\u9664\u597D\u53CB".concat(fr.nickName, "\u5931\u8D25"));
                    return [3 /*break*/, 22];
                }
                _x.label = 21;
            case 21:
                _e = _d.next();
                return [3 /*break*/, 18];
            case 22: return [3 /*break*/, 25];
            case 23:
                e_1_1 = _x.sent();
                e_1 = { error: e_1_1 };
                return [3 /*break*/, 25];
            case 24:
                try {
                    if (_e && !_e.done && (_q = _d["return"])) _q.call(_d);
                }
                finally { if (e_1) throw e_1.error; }
                return [7 /*endfinally*/];
            case 25: return [4 /*yield*/, api('friendListInitForFarm', { "lastId": null, "version": 14, "channel": 1, "babelChannel": "120" })];
            case 26:
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
                res = _x.sent();
                (0, TS_USER_AGENTS_1.o2s)(res, 'friendListInitForFarm');
                friendList = res.friends;
                if (!(res.inviteFriendCount > res.inviteFriendGotAwardCount)) return [3 /*break*/, 29];
                return [4 /*yield*/, api('awardInviteFriendForFarm', {})];
            case 27:
                data = _x.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 28:
                _x.sent();
                (0, TS_USER_AGENTS_1.o2s)(data, '好友邀请奖励');
                _x.label = 29;
            case 29: return [4 /*yield*/, api('taskInitForFarm', { "version": 14, "channel": 1, "babelChannel": "120" })];
            case 30:
                // 给好友浇水
                res = _x.sent();
                (0, TS_USER_AGENTS_1.o2s)(res, 'taskInitForFarm');
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 31:
                _x.sent();
                console.log("\u4ECA\u65E5\u5DF2\u7ED9".concat(res.waterFriendTaskInit.waterFriendCountKey, "\u4E2A\u597D\u53CB\u6D47\u6C34"));
                if (!(res.waterFriendTaskInit.waterFriendCountKey < res.waterFriendTaskInit.waterFriendMax)) return [3 /*break*/, 43];
                i = res.waterFriendTaskInit.waterFriendCountKey;
                _x.label = 32;
            case 32:
                if (!(i < res.waterFriendTaskInit.waterFriendMax)) return [3 /*break*/, 42];
                _x.label = 33;
            case 33:
                _x.trys.push([33, 39, 40, 41]);
                friendList_1 = (e_2 = void 0, __values(friendList)), friendList_1_1 = friendList_1.next();
                _x.label = 34;
            case 34:
                if (!!friendList_1_1.done) return [3 /*break*/, 38];
                fr = friendList_1_1.value;
                if (!(fr.friendState === 1)) return [3 /*break*/, 37];
                return [4 /*yield*/, api('waterFriendForFarm', { "shareCode": fr.shareCode, "version": 14, "channel": 1, "babelChannel": "120" })];
            case 35:
                data = _x.sent();
                if (data.code === '0')
                    console.log("\u7ED9\u597D\u53CB".concat(fr.nickName, "\u6D47\u6C34\u6210\u529F"));
                if (data.cardInfo) {
                    console.log('获得卡片');
                }
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 36:
                _x.sent();
                return [3 /*break*/, 38];
            case 37:
                friendList_1_1 = friendList_1.next();
                return [3 /*break*/, 34];
            case 38: return [3 /*break*/, 41];
            case 39:
                e_2_1 = _x.sent();
                e_2 = { error: e_2_1 };
                return [3 /*break*/, 41];
            case 40:
                try {
                    if (friendList_1_1 && !friendList_1_1.done && (_r = friendList_1["return"])) _r.call(friendList_1);
                }
                finally { if (e_2) throw e_2.error; }
                return [7 /*endfinally*/];
            case 41:
                i++;
                return [3 /*break*/, 32];
            case 42: return [3 /*break*/, 46];
            case 43:
                if (!(res.waterFriendTaskInit.waterFriendCountKey === res.waterFriendTaskInit.waterFriendMax && !res.waterFriendTaskInit.waterFriendGotAward)) return [3 /*break*/, 46];
                return [4 /*yield*/, api('waterFriendGotAwardForFarm', { "version": 14, "channel": 1, "babelChannel": "120" })];
            case 44:
                data = _x.sent();
                console.log('给好友浇水奖励', data.addWater);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 45:
                _x.sent();
                _x.label = 46;
            case 46: return [4 /*yield*/, api('clockInInitForFarm', { "timestamp": Date.now(), "version": 14, "channel": 1, "babelChannel": "120" })];
            case 47:
                // 签到
                res = _x.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 48:
                _x.sent();
                if (!!res.todaySigned) return [3 /*break*/, 51];
                return [4 /*yield*/, api('clockInForFarm', { "type": 1, "version": 14, "channel": 1, "babelChannel": "120" })];
            case 49:
                data = _x.sent();
                if (data.signDay === 7) {
                    // data = await api('gotClockInGift', {"type": 2, "version": 14, "channel": 1, "babelChannel": "120"})
                    // o2s(data, 'gotClockInGift')
                    // await wait(1000)
                }
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 50:
                _x.sent();
                _x.label = 51;
            case 51: return [4 /*yield*/, api('clockInInitForFarm', { "timestamp": Date.now(), "version": 14, "channel": 1, "babelChannel": "120" })];
            case 52:
                res = _x.sent();
                _x.label = 53;
            case 53:
                _x.trys.push([53, 60, 61, 62]);
                _f = (e_3 = void 0, __values(res.themes || [])), _g = _f.next();
                _x.label = 54;
            case 54:
                if (!!_g.done) return [3 /*break*/, 59];
                t = _g.value;
                if (!!t.hadGot) return [3 /*break*/, 58];
                console.log('关注', t.name);
                return [4 /*yield*/, api('clockInFollowForFarm', { "id": t.id, "type": "theme", "step": 1, "version": 14, "channel": 1, "babelChannel": "120" })];
            case 55:
                res = _x.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(5000)];
            case 56:
                _x.sent();
                return [4 /*yield*/, api('clockInFollowForFarm', { "id": t.id, "type": "theme", "step": 2, "version": 14, "channel": 1, "babelChannel": "120" })];
            case 57:
                res = _x.sent();
                console.log('获得水滴', res.amount);
                _x.label = 58;
            case 58:
                _g = _f.next();
                return [3 /*break*/, 54];
            case 59: return [3 /*break*/, 62];
            case 60:
                e_3_1 = _x.sent();
                e_3 = { error: e_3_1 };
                return [3 /*break*/, 62];
            case 61:
                try {
                    if (_g && !_g.done && (_s = _f["return"])) _s.call(_f);
                }
                finally { if (e_3) throw e_3.error; }
                return [7 /*endfinally*/];
            case 62: return [4 /*yield*/, api('taskInitForFarm', { "version": 14, "channel": 1, "babelChannel": "120" })];
            case 63:
                // 任务
                res = _x.sent();
                (0, TS_USER_AGENTS_1.o2s)(res);
                if (!res.signInit.todaySigned) return [3 /*break*/, 64];
                console.log("\u4ECA\u5929\u5DF2\u7B7E\u5230,\u5DF2\u7ECF\u8FDE\u7EED\u7B7E\u5230".concat(res.signInit.totalSigned, "\u5929,\u4E0B\u6B21\u7B7E\u5230\u53EF\u5F97").concat(res.signInit.signEnergyEachAmount, "g"));
                return [3 /*break*/, 67];
            case 64: return [4 /*yield*/, api('signForFarm', { "version": 14, "channel": 1, "babelChannel": "120" })];
            case 65:
                data = _x.sent();
                (0, TS_USER_AGENTS_1.o2s)(data, 'signForFarm');
                console.log('签到成功', data.amount);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 66:
                _x.sent();
                _x.label = 67;
            case 67:
                if (!!res.gotBrowseTaskAdInit.f) return [3 /*break*/, 79];
                _x.label = 68;
            case 68:
                _x.trys.push([68, 77, 78, 79]);
                _h = (e_4 = void 0, __values(res.gotBrowseTaskAdInit.userBrowseTaskAds)), _j = _h.next();
                _x.label = 69;
            case 69:
                if (!!_j.done) return [3 /*break*/, 76];
                t = _j.value;
                if (!(t.hadFinishedTimes !== t.limit)) return [3 /*break*/, 73];
                return [4 /*yield*/, api('browseAdTaskForFarm', { "advertId": t.advertId, "type": 0, "version": 14, "channel": 1, "babelChannel": "120" })];
            case 70:
                data = _x.sent();
                (0, TS_USER_AGENTS_1.o2s)(data, 'browseAdTaskForFarm');
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(t.time * 1000 || 1000)];
            case 71:
                _x.sent();
                return [4 /*yield*/, api('browseAdTaskForFarm', { "advertId": t.advertId, "type": 1, "version": 14, "channel": 1, "babelChannel": "120" })];
            case 72:
                data = _x.sent();
                console.log('任务完成，获得', data.amount);
                _x.label = 73;
            case 73: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 74:
                _x.sent();
                _x.label = 75;
            case 75:
                _j = _h.next();
                return [3 /*break*/, 69];
            case 76: return [3 /*break*/, 79];
            case 77:
                e_4_1 = _x.sent();
                e_4 = { error: e_4_1 };
                return [3 /*break*/, 79];
            case 78:
                try {
                    if (_j && !_j.done && (_t = _h["return"])) _t.call(_h);
                }
                finally { if (e_4) throw e_4.error; }
                return [7 /*endfinally*/];
            case 79:
                if (!!res.gotThreeMealInit.f) return [3 /*break*/, 82];
                if (!![10, 15, 16, 22, 23].includes(new Date().getHours())) return [3 /*break*/, 82];
                return [4 /*yield*/, api('gotThreeMealForFarm', { "version": 14, "channel": 1, "babelChannel": "120" })];
            case 80:
                data = _x.sent();
                if (data.code === '0') {
                    console.log('定时奖励成功', data.amount);
                }
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 81:
                _x.sent();
                _x.label = 82;
            case 82:
                if (!!res.waterRainInit.f) return [3 /*break*/, 84];
                if (!(Date.now < res.waterRainInit.lastTime + 3 * 60 * 60 * 1000)) return [3 /*break*/, 84];
                return [4 /*yield*/, api('waterRainForFarm', { "type": 1, "hongBaoTimes": 100, "version": 3 })];
            case 83:
                data = _x.sent();
                (0, TS_USER_AGENTS_1.o2s)(data, 'waterRainForFarm');
                if (data.code === '0') {
                    console.log('获得水滴', data.addEnergy);
                }
                _x.label = 84;
            case 84:
                if (!(!res.firstWaterInit.f && res.firstWaterInit.totalWaterTimes !== 0)) return [3 /*break*/, 86];
                return [4 /*yield*/, api('firstWaterTaskForFarm', { "version": 14, "channel": 1, "babelChannel": "120" })];
            case 85:
                data = _x.sent();
                console.log('firstWaterTaskForFarm', data.amount);
                _x.label = 86;
            case 86: return [4 /*yield*/, api('initForTurntableFarm', { "version": 4, "channel": 1 })];
            case 87:
                // 红包
                res = _x.sent();
                (0, TS_USER_AGENTS_1.o2s)(res, 'initForTurntableFarm');
                _x.label = 88;
            case 88:
                _x.trys.push([88, 95, 96, 97]);
                _k = (e_5 = void 0, __values(res.turntableBrowserAds)), _l = _k.next();
                _x.label = 89;
            case 89:
                if (!!_l.done) return [3 /*break*/, 94];
                t = _l.value;
                if (!!t.status) return [3 /*break*/, 93];
                console.log("browserForTurntableFarm", t.main);
                return [4 /*yield*/, api('browserForTurntableFarm', { "type": 1, "adId": t.adId, "version": 4, "channel": 1 })];
            case 90:
                data = _x.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(t.browserTimes * 1000 || 1000)];
            case 91:
                _x.sent();
                return [4 /*yield*/, api('browserForTurntableFarm', { "type": 2, "adId": t.adId, "version": 4, "channel": 1 })];
            case 92:
                data = _x.sent();
                _x.label = 93;
            case 93:
                _l = _k.next();
                return [3 /*break*/, 89];
            case 94: return [3 /*break*/, 97];
            case 95:
                e_5_1 = _x.sent();
                e_5 = { error: e_5_1 };
                return [3 /*break*/, 97];
            case 96:
                try {
                    if (_l && !_l.done && (_u = _k["return"])) _u.call(_k);
                }
                finally { if (e_5) throw e_5.error; }
                return [7 /*endfinally*/];
            case 97:
                if (!(!res.timingGotStatus && res.remainLotteryTimes)) return [3 /*break*/, 101];
                if (!(Date.now() > (res.timingLastSysTime + 60 * 60 * res.timingIntervalHours * 1000))) return [3 /*break*/, 100];
                return [4 /*yield*/, api('timingAwardForTurntableFarm', { "version": 4, "channel": 1 })];
            case 98:
                data = _x.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 99:
                _x.sent();
                (0, TS_USER_AGENTS_1.o2s)(data, 'timingAwardForTurntableFarm');
                return [3 /*break*/, 101];
            case 100:
                console.log("\u514D\u8D39\u8D60\u9001\u7684\u62BD\u5956\u673A\u4F1A\u672A\u5230\u65F6\u95F4");
                _x.label = 101;
            case 101: return [4 /*yield*/, (0, TS_USER_AGENTS_1.getShareCodePool)('farm', 30)];
            case 102:
                // 天天红包助力
                shareCodePool = _x.sent();
                shareCode = Array.from(new Set(__spreadArray(__spreadArray([], __read(shareCodeSelf), false), __read(shareCodePool), false)));
                _x.label = 103;
            case 103:
                _x.trys.push([103, 109, 110, 111]);
                shareCodeSelf_1 = (e_6 = void 0, __values(shareCodeSelf)), shareCodeSelf_1_1 = shareCodeSelf_1.next();
                _x.label = 104;
            case 104:
                if (!!shareCodeSelf_1_1.done) return [3 /*break*/, 108];
                code = shareCodeSelf_1_1.value;
                console.log('去红包助力', code);
                return [4 /*yield*/, api('initForFarm', { "shareCode": "".concat(code, "-3"), "lng": "0.000000", "lat": "0.000000", "sid": "2871ac0252645ef0e2731aa7d03c1d3w", "un_area": "16_1341_1347_44750", "version": 14, "channel": 1, "babelChannel": 0 })];
            case 105:
                data = _x.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(3000)];
            case 106:
                _x.sent();
                if (data.code === '0') {
                    console.log('红包助力成功');
                }
                else if (data.code === '11') {
                    console.log('红包已助力过');
                }
                else if (data.code === '13') {
                    console.log('上限');
                    return [3 /*break*/, 108];
                }
                _x.label = 107;
            case 107:
                shareCodeSelf_1_1 = shareCodeSelf_1.next();
                return [3 /*break*/, 104];
            case 108: return [3 /*break*/, 111];
            case 109:
                e_6_1 = _x.sent();
                e_6 = { error: e_6_1 };
                return [3 /*break*/, 111];
            case 110:
                try {
                    if (shareCodeSelf_1_1 && !shareCodeSelf_1_1.done && (_v = shareCodeSelf_1["return"])) _v.call(shareCodeSelf_1);
                }
                finally { if (e_6) throw e_6.error; }
                return [7 /*endfinally*/];
            case 111:
                i = 0;
                _x.label = 112;
            case 112:
                if (!(i < res.remainLotteryTimes)) return [3 /*break*/, 116];
                return [4 /*yield*/, api('lotteryForTurntableFarm', { "type": 1, "version": 4, "channel": 1 })];
            case 113:
                data = _x.sent();
                if (data.type === 'thanks') {
                    console.log('抽奖获得 空气');
                }
                else {
                    console.log('抽奖获得', data.type);
                }
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 114:
                _x.sent();
                _x.label = 115;
            case 115:
                i++;
                return [3 /*break*/, 112];
            case 116: return [4 /*yield*/, api('farmAssistInit', { "version": 14, "channel": 1, "babelChannel": "120" })];
            case 117:
                // 助力奖励
                res = _x.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 118:
                _x.sent();
                (0, TS_USER_AGENTS_1.o2s)(res, 'farmAssistInit');
                farmAssistInit_waterEnergy = 0;
                _x.label = 119;
            case 119:
                _x.trys.push([119, 126, 127, 128]);
                _m = (e_7 = void 0, __values(res.assistStageList)), _o = _m.next();
                _x.label = 120;
            case 120:
                if (!!_o.done) return [3 /*break*/, 125];
                t = _o.value;
                if (!(t.percentage === '100%' && t.stageStaus === 2)) return [3 /*break*/, 123];
                return [4 /*yield*/, api('receiveStageEnergy', { "version": 14, "channel": 1, "babelChannel": "120" })];
            case 121:
                data = _x.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 122:
                _x.sent();
                farmAssistInit_waterEnergy += t.waterEnergy;
                return [3 /*break*/, 124];
            case 123:
                if (t.stageStaus === 3) {
                    farmAssistInit_waterEnergy += t.waterEnergy;
                }
                _x.label = 124;
            case 124:
                _o = _m.next();
                return [3 /*break*/, 120];
            case 125: return [3 /*break*/, 128];
            case 126:
                e_7_1 = _x.sent();
                e_7 = { error: e_7_1 };
                return [3 /*break*/, 128];
            case 127:
                try {
                    if (_o && !_o.done && (_w = _m["return"])) _w.call(_m);
                }
                finally { if (e_7) throw e_7.error; }
                return [7 /*endfinally*/];
            case 128:
                console.log('收到助力', res.assistFriendList.length);
                console.log('助力已领取', farmAssistInit_waterEnergy);
                message += "\u3010\u52A9\u529B\u5DF2\u9886\u53D6\u3011  ".concat(farmAssistInit_waterEnergy, "\n");
                message += '\n\n';
                return [3 /*break*/, 132];
            case 129:
                e_8 = _x.sent();
                console.log(e_8);
                return [3 /*break*/, 132];
            case 130: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(5000)];
            case 131:
                _x.sent();
                return [7 /*endfinally*/];
            case 132:
                _b = _a.next();
                return [3 /*break*/, 3];
            case 133: return [3 /*break*/, 136];
            case 134:
                e_9_1 = _x.sent();
                e_9 = { error: e_9_1 };
                return [3 /*break*/, 136];
            case 135:
                try {
                    if (_b && !_b.done && (_p = _a["return"])) _p.call(_a);
                }
                finally { if (e_9) throw e_9.error; }
                return [7 /*endfinally*/];
            case 136:
                if (!message) return [3 /*break*/, 138];
                return [4 /*yield*/, (0, sendNotify_1.sendNotify)('东东农场', message)];
            case 137:
                _x.sent();
                _x.label = 138;
            case 138: return [2 /*return*/];
        }
    });
}); })();
function api(fn, body) {
    return __awaiter(this, void 0, void 0, function () {
        var h5st;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    h5st = h5stTool.__genH5st({
                        'appid': 'wh5',
                        'body': JSON.stringify(body),
                        'client': 'apple',
                        'clientVersion': '10.2.4',
                        'functionId': fn
                    });
                    return [4 /*yield*/, (0, TS_USER_AGENTS_1.get)("https://api.m.jd.com/client.action?functionId=".concat(fn, "&body=").concat(JSON.stringify(body), "&appid=wh5&client=apple&clientVersion=10.2.4&h5st=").concat(h5st), {
                            "Host": "api.m.jd.com",
                            "Origin": "https://carry.m.jd.com",
                            "User-Agent": TS_USER_AGENTS_1["default"],
                            "Accept-Language": "zh-CN,zh-Hans;q=0.9",
                            "Referer": "https://carry.m.jd.com/",
                            "Cookie": cookie
                        })];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
