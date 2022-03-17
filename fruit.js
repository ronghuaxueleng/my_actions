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
var message = '';
!(function () { return __awaiter(void 0, void 0, void 0, function () {
    var cookiesArr, i, totalEnergy, _a, _b, fr, e_1_1, beanCard, i_1, friendList, i_2, friendList_1, friendList_1_1, fr, e_2_1, _c, _d, t, e_3_1, farmAssistInit_waterEnergy, _e, _f, t, e_4_1, _g, _h, t, e_5_1, _j, _k, t, e_6_1, shareCodeSelf_1, shareCodeSelf_1_1, code, e_7_1, i_3, shareCodeSelf_2, shareCodeSelf_2_1, code, e_8_1;
    var e_1, _l, e_2, _m, e_3, _o, e_4, _p, e_5, _q, e_6, _r, e_7, _s, e_8, _t;
    return __generator(this, function (_u) {
        switch (_u.label) {
            case 0: return [4 /*yield*/, (0, TS_USER_AGENTS_1.requireConfig)()];
            case 1:
                cookiesArr = _u.sent();
                try {
                    shareCodeSelf = JSON.parse((0, fs_1.readFileSync)('./utils/sharecodes.json').toString()).fruit;
                    console.log(shareCodeSelf);
                }
                catch (e) {
                    console.log('读取分享码失败');
                }
                i = 0;
                _u.label = 2;
            case 2:
                if (!(i < cookiesArr.length)) return [3 /*break*/, 142];
                cookie = cookiesArr[i];
                UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                index = i + 1;
                console.log("\n\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7".concat(index, "\u3011").concat(UserName, "\n"));
                return [4 /*yield*/, api('initForFarm', { "version": 11, "channel": 3 })];
            case 3:
                // 初始化
                res = _u.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 4:
                _u.sent();
                if (!res.todayGotWaterGoalTask.canPop) return [3 /*break*/, 6];
                return [4 /*yield*/, api('gotWaterGoalTaskForFarm', { "type": 3, "version": 14, "channel": 1, "babelChannel": "120" })];
            case 5:
                data = _u.sent();
                (0, TS_USER_AGENTS_1.o2s)(data);
                console.log("弹窗获得水滴", data.addEnergy);
                _u.label = 6;
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
                res = _u.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 8:
                _u.sent();
                if (!!res.newFriendMsg) return [3 /*break*/, 17];
                _u.label = 9;
            case 9:
                _u.trys.push([9, 15, 16, 17]);
                _a = (e_1 = void 0, __values(res.friends)), _b = _a.next();
                _u.label = 10;
            case 10:
                if (!!_b.done) return [3 /*break*/, 14];
                fr = _b.value;
                return [4 /*yield*/, api('deleteFriendForFarm', { "shareCode": fr.shareCode, "version": 8, "channel": 1 })];
            case 11:
                res = _u.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 12:
                _u.sent();
                if (res.code === '0') {
                    console.log("\u5220\u9664\u597D\u53CB".concat(fr.nickName, "\u6210\u529F"));
                }
                else {
                    console.log("\u5220\u9664\u597D\u53CB".concat(fr.nickName, "\u5931\u8D25"));
                    return [3 /*break*/, 14];
                }
                _u.label = 13;
            case 13:
                _b = _a.next();
                return [3 /*break*/, 10];
            case 14: return [3 /*break*/, 17];
            case 15:
                e_1_1 = _u.sent();
                e_1 = { error: e_1_1 };
                return [3 /*break*/, 17];
            case 16:
                try {
                    if (_b && !_b.done && (_l = _a["return"])) _l.call(_a);
                }
                finally { if (e_1) throw e_1.error; }
                return [7 /*endfinally*/];
            case 17:
                // 背包
                process.env.jdFruitBeanCard = 'True';
                if (!(process.env.jdFruitBeanCard.toLowerCase() === 'true')) return [3 /*break*/, 24];
                return [4 /*yield*/, api('myCardInfoForFarm', { "version": 14, "channel": 3, "babelChannel": "10" })];
            case 18:
                res = _u.sent();
                (0, TS_USER_AGENTS_1.o2s)(res, 'myCardInfoForFarm');
                beanCard = res.beanCard // 换豆卡
                ;
                console.log('换豆卡数量', beanCard);
                i_1 = 0;
                _u.label = 19;
            case 19:
                if (!(i_1 < 10)) return [3 /*break*/, 23];
                if (!(totalEnergy >= 100 && beanCard)) return [3 /*break*/, 22];
                return [4 /*yield*/, api('userMyCardForFarm', { "cardType": "beanCard", "babelChannel": "10", "channel": 3, "version": 14 })];
            case 20:
                data = _u.sent();
                console.log('使用水滴换豆卡，获得京豆', data.beanCount);
                totalEnergy -= 100;
                beanCard--;
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 21:
                _u.sent();
                _u.label = 22;
            case 22:
                i_1++;
                return [3 /*break*/, 19];
            case 23: return [3 /*break*/, 25];
            case 24:
                console.log('未设置水滴换豆卡环境变量');
                _u.label = 25;
            case 25: return [4 /*yield*/, api('friendListInitForFarm', { "lastId": null, "version": 14, "channel": 1, "babelChannel": "120" })];
            case 26:
                // 好友邀请奖励
                res = _u.sent();
                (0, TS_USER_AGENTS_1.o2s)(res, 'friendListInitForFarm');
                friendList = res.friends;
                if (!(res.inviteFriendCount > res.inviteFriendGotAwardCount)) return [3 /*break*/, 29];
                return [4 /*yield*/, api('awardInviteFriendForFarm', {})];
            case 27:
                data = _u.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 28:
                _u.sent();
                (0, TS_USER_AGENTS_1.o2s)(data, '好友邀请奖励');
                _u.label = 29;
            case 29: return [4 /*yield*/, api('taskInitForFarm', { "version": 14, "channel": 1, "babelChannel": "120" })];
            case 30:
                // 给好友浇水
                res = _u.sent();
                (0, TS_USER_AGENTS_1.o2s)(res, 'taskInitForFarm');
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 31:
                _u.sent();
                console.log("\u4ECA\u65E5\u5DF2\u7ED9".concat(res.waterFriendTaskInit.waterFriendCountKey, "\u4E2A\u597D\u53CB\u6D47\u6C34"));
                if (!(res.waterFriendTaskInit.waterFriendCountKey < res.waterFriendTaskInit.waterFriendMax)) return [3 /*break*/, 43];
                i_2 = res.waterFriendTaskInit.waterFriendCountKey;
                _u.label = 32;
            case 32:
                if (!(i_2 < res.waterFriendTaskInit.waterFriendMax)) return [3 /*break*/, 42];
                _u.label = 33;
            case 33:
                _u.trys.push([33, 39, 40, 41]);
                friendList_1 = (e_2 = void 0, __values(friendList)), friendList_1_1 = friendList_1.next();
                _u.label = 34;
            case 34:
                if (!!friendList_1_1.done) return [3 /*break*/, 38];
                fr = friendList_1_1.value;
                if (!(fr.friendState === 1)) return [3 /*break*/, 37];
                return [4 /*yield*/, api('waterFriendForFarm', { "shareCode": fr.shareCode, "version": 14, "channel": 1, "babelChannel": "120" })];
            case 35:
                data = _u.sent();
                if (data.code === '0')
                    console.log("\u7ED9\u597D\u53CB".concat(fr.nickName, "\u6D47\u6C34\u6210\u529F"));
                if (data.cardInfo) {
                    console.log('获得卡片');
                }
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 36:
                _u.sent();
                return [3 /*break*/, 38];
            case 37:
                friendList_1_1 = friendList_1.next();
                return [3 /*break*/, 34];
            case 38: return [3 /*break*/, 41];
            case 39:
                e_2_1 = _u.sent();
                e_2 = { error: e_2_1 };
                return [3 /*break*/, 41];
            case 40:
                try {
                    if (friendList_1_1 && !friendList_1_1.done && (_m = friendList_1["return"])) _m.call(friendList_1);
                }
                finally { if (e_2) throw e_2.error; }
                return [7 /*endfinally*/];
            case 41:
                i_2++;
                return [3 /*break*/, 32];
            case 42: return [3 /*break*/, 46];
            case 43:
                if (!(res.waterFriendTaskInit.waterFriendCountKey === res.waterFriendTaskInit.waterFriendMax && !res.waterFriendTaskInit.waterFriendGotAward)) return [3 /*break*/, 46];
                return [4 /*yield*/, api('waterFriendGotAwardForFarm', { "version": 14, "channel": 1, "babelChannel": "120" })];
            case 44:
                data = _u.sent();
                console.log('给好友浇水奖励', data.addWater);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 45:
                _u.sent();
                _u.label = 46;
            case 46: return [4 /*yield*/, api('clockInInitForFarm', { "timestamp": Date.now(), "version": 14, "channel": 1, "babelChannel": "120" })];
            case 47:
                // 签到
                res = _u.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 48:
                _u.sent();
                if (!!res.todaySigned) return [3 /*break*/, 54];
                return [4 /*yield*/, api('clockInForFarm', { "type": 1, "version": 14, "channel": 1, "babelChannel": "120" })];
            case 49:
                data = _u.sent();
                if (!(data.signDay === 7)) return [3 /*break*/, 52];
                return [4 /*yield*/, api('gotClockInGift', { "type": 2, "version": 14, "channel": 1, "babelChannel": "120" })];
            case 50:
                data = _u.sent();
                (0, TS_USER_AGENTS_1.o2s)(data, 'gotClockInGift');
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 51:
                _u.sent();
                _u.label = 52;
            case 52: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 53:
                _u.sent();
                _u.label = 54;
            case 54: return [4 /*yield*/, api('clockInInitForFarm', { "timestamp": Date.now(), "version": 14, "channel": 1, "babelChannel": "120" })];
            case 55:
                res = _u.sent();
                _u.label = 56;
            case 56:
                _u.trys.push([56, 63, 64, 65]);
                _c = (e_3 = void 0, __values(res.themes || [])), _d = _c.next();
                _u.label = 57;
            case 57:
                if (!!_d.done) return [3 /*break*/, 62];
                t = _d.value;
                if (!!t.hadGot) return [3 /*break*/, 61];
                console.log('关注', t.name);
                return [4 /*yield*/, api('clockInFollowForFarm', { "id": t.id, "type": "theme", "step": 1, "version": 14, "channel": 1, "babelChannel": "120" })];
            case 58:
                res = _u.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(5000)];
            case 59:
                _u.sent();
                return [4 /*yield*/, api('clockInFollowForFarm', { "id": t.id, "type": "theme", "step": 2, "version": 14, "channel": 1, "babelChannel": "120" })];
            case 60:
                res = _u.sent();
                console.log('获得水滴', res.amount);
                _u.label = 61;
            case 61:
                _d = _c.next();
                return [3 /*break*/, 57];
            case 62: return [3 /*break*/, 65];
            case 63:
                e_3_1 = _u.sent();
                e_3 = { error: e_3_1 };
                return [3 /*break*/, 65];
            case 64:
                try {
                    if (_d && !_d.done && (_o = _c["return"])) _o.call(_c);
                }
                finally { if (e_3) throw e_3.error; }
                return [7 /*endfinally*/];
            case 65: return [4 /*yield*/, api('farmAssistInit', { "version": 14, "channel": 1, "babelChannel": "120" })];
            case 66:
                // 助力奖励
                res = _u.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 67:
                _u.sent();
                (0, TS_USER_AGENTS_1.o2s)(res, 'farmAssistInit');
                farmAssistInit_waterEnergy = 0;
                _u.label = 68;
            case 68:
                _u.trys.push([68, 75, 76, 77]);
                _e = (e_4 = void 0, __values(res.assistStageList)), _f = _e.next();
                _u.label = 69;
            case 69:
                if (!!_f.done) return [3 /*break*/, 74];
                t = _f.value;
                if (!(t.percentage === '100%' && t.stageStaus === 2)) return [3 /*break*/, 72];
                return [4 /*yield*/, api('receiveStageEnergy', { "version": 14, "channel": 1, "babelChannel": "120" })];
            case 70:
                data = _u.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 71:
                _u.sent();
                farmAssistInit_waterEnergy += t.waterEnergy;
                return [3 /*break*/, 73];
            case 72:
                if (t.stageStaus === 3) {
                    farmAssistInit_waterEnergy += t.waterEnergy;
                }
                _u.label = 73;
            case 73:
                _f = _e.next();
                return [3 /*break*/, 69];
            case 74: return [3 /*break*/, 77];
            case 75:
                e_4_1 = _u.sent();
                e_4 = { error: e_4_1 };
                return [3 /*break*/, 77];
            case 76:
                try {
                    if (_f && !_f.done && (_p = _e["return"])) _p.call(_e);
                }
                finally { if (e_4) throw e_4.error; }
                return [7 /*endfinally*/];
            case 77:
                console.log('助力已领取', farmAssistInit_waterEnergy);
                return [4 /*yield*/, api('taskInitForFarm', { "version": 14, "channel": 1, "babelChannel": "120" })];
            case 78:
                // 任务
                res = _u.sent();
                (0, TS_USER_AGENTS_1.o2s)(res);
                if (!!res.gotBrowseTaskAdInit.f) return [3 /*break*/, 90];
                _u.label = 79;
            case 79:
                _u.trys.push([79, 88, 89, 90]);
                _g = (e_5 = void 0, __values(res.gotBrowseTaskAdInit.userBrowseTaskAds)), _h = _g.next();
                _u.label = 80;
            case 80:
                if (!!_h.done) return [3 /*break*/, 87];
                t = _h.value;
                if (!(t.hadFinishedTimes !== t.limit)) return [3 /*break*/, 84];
                return [4 /*yield*/, api('browseAdTaskForFarm', { "advertId": t.advertId, "type": 0, "version": 14, "channel": 1, "babelChannel": "120" })];
            case 81:
                data = _u.sent();
                (0, TS_USER_AGENTS_1.o2s)(data, 'browseAdTaskForFarm');
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(t.time * 1000 || 1000)];
            case 82:
                _u.sent();
                return [4 /*yield*/, api('browseAdTaskForFarm', { "advertId": t.advertId, "type": 1, "version": 14, "channel": 1, "babelChannel": "120" })];
            case 83:
                data = _u.sent();
                console.log('任务完成，获得', data.amount);
                _u.label = 84;
            case 84: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 85:
                _u.sent();
                _u.label = 86;
            case 86:
                _h = _g.next();
                return [3 /*break*/, 80];
            case 87: return [3 /*break*/, 90];
            case 88:
                e_5_1 = _u.sent();
                e_5 = { error: e_5_1 };
                return [3 /*break*/, 90];
            case 89:
                try {
                    if (_h && !_h.done && (_q = _g["return"])) _q.call(_g);
                }
                finally { if (e_5) throw e_5.error; }
                return [7 /*endfinally*/];
            case 90:
                if (!!res.gotThreeMealInit.f) return [3 /*break*/, 93];
                if (!![10, 15, 16, 22, 23].includes(new Date().getHours())) return [3 /*break*/, 93];
                return [4 /*yield*/, api('gotThreeMealForFarm', { "version": 14, "channel": 1, "babelChannel": "120" })];
            case 91:
                data = _u.sent();
                if (data.code === '0') {
                    console.log('定时奖励成功', data.amount);
                }
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 92:
                _u.sent();
                _u.label = 93;
            case 93:
                if (!res.signInit.todaySigned) return [3 /*break*/, 94];
                console.log("\u4ECA\u5929\u5DF2\u7B7E\u5230,\u5DF2\u7ECF\u8FDE\u7EED\u7B7E\u5230".concat(res.signInit.totalSigned, "\u5929,\u4E0B\u6B21\u7B7E\u5230\u53EF\u5F97").concat(res.signInit.signEnergyEachAmount, "g"));
                return [3 /*break*/, 97];
            case 94: return [4 /*yield*/, api('signForFarm', { "version": 14, "channel": 1, "babelChannel": "120" })];
            case 95:
                data = _u.sent();
                console.log('签到成功', data.amount);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 96:
                _u.sent();
                _u.label = 97;
            case 97:
                if (!!res.waterRainInit.f) return [3 /*break*/, 99];
                if (!(Date.now < res.waterRainInit.lastTime + 3 * 60 * 60 * 1000)) return [3 /*break*/, 99];
                return [4 /*yield*/, api('waterRainForFarm', { "type": 1, "hongBaoTimes": 100, "version": 3 })];
            case 98:
                data = _u.sent();
                (0, TS_USER_AGENTS_1.o2s)(data, 'waterRainForFarm');
                if (data.code === '0') {
                    console.log('获得水滴', data.addEnergy);
                }
                _u.label = 99;
            case 99:
                if (!(!res.firstWaterInit.f && res.firstWaterInit.totalWaterTimes !== 0)) return [3 /*break*/, 101];
                return [4 /*yield*/, api('firstWaterTaskForFarm', { "version": 14, "channel": 1, "babelChannel": "120" })];
            case 100:
                data = _u.sent();
                console.log('firstWaterTaskForFarm', data.amount);
                _u.label = 101;
            case 101: return [4 /*yield*/, api('initForTurntableFarm', { "version": 4, "channel": 1 })];
            case 102:
                // 红包
                res = _u.sent();
                (0, TS_USER_AGENTS_1.o2s)(res, 'initForTurntableFarm');
                _u.label = 103;
            case 103:
                _u.trys.push([103, 110, 111, 112]);
                _j = (e_6 = void 0, __values(res.turntableBrowserAds)), _k = _j.next();
                _u.label = 104;
            case 104:
                if (!!_k.done) return [3 /*break*/, 109];
                t = _k.value;
                if (!!t.status) return [3 /*break*/, 108];
                console.log("browserForTurntableFarm", t.main);
                return [4 /*yield*/, api('browserForTurntableFarm', { "type": 1, "adId": t.adId, "version": 4, "channel": 1 })];
            case 105:
                data = _u.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(t.browserTimes * 1000 || 1000)];
            case 106:
                _u.sent();
                return [4 /*yield*/, api('browserForTurntableFarm', { "type": 2, "adId": t.adId, "version": 4, "channel": 1 })];
            case 107:
                data = _u.sent();
                _u.label = 108;
            case 108:
                _k = _j.next();
                return [3 /*break*/, 104];
            case 109: return [3 /*break*/, 112];
            case 110:
                e_6_1 = _u.sent();
                e_6 = { error: e_6_1 };
                return [3 /*break*/, 112];
            case 111:
                try {
                    if (_k && !_k.done && (_r = _j["return"])) _r.call(_j);
                }
                finally { if (e_6) throw e_6.error; }
                return [7 /*endfinally*/];
            case 112:
                if (!(!res.timingGotStatus && res.remainLotteryTimes)) return [3 /*break*/, 116];
                if (!(Date.now() > (res.timingLastSysTime + 60 * 60 * res.timingIntervalHours * 1000))) return [3 /*break*/, 115];
                return [4 /*yield*/, api('timingAwardForTurntableFarm', { "version": 4, "channel": 1 })];
            case 113:
                data = _u.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 114:
                _u.sent();
                (0, TS_USER_AGENTS_1.o2s)(data, 'timingAwardForTurntableFarm');
                return [3 /*break*/, 116];
            case 115:
                console.log("\u514D\u8D39\u8D60\u9001\u7684\u62BD\u5956\u673A\u4F1A\u672A\u5230\u65F6\u95F4");
                _u.label = 116;
            case 116: return [4 /*yield*/, (0, TS_USER_AGENTS_1.getShareCodePool)('farm', 30)];
            case 117:
                // 天天红包助力
                shareCodePool = _u.sent();
                shareCode = Array.from(new Set(__spreadArray(__spreadArray([], __read(shareCodeSelf), false), __read(shareCodePool), false)));
                _u.label = 118;
            case 118:
                _u.trys.push([118, 124, 125, 126]);
                shareCodeSelf_1 = (e_7 = void 0, __values(shareCodeSelf)), shareCodeSelf_1_1 = shareCodeSelf_1.next();
                _u.label = 119;
            case 119:
                if (!!shareCodeSelf_1_1.done) return [3 /*break*/, 123];
                code = shareCodeSelf_1_1.value;
                console.log('去红包助力', code);
                return [4 /*yield*/, api('initForFarm', { "shareCode": "".concat(code, "-3"), "lng": "0.000000", "lat": "0.000000", "sid": "2871ac0252645ef0e2731aa7d03c1d3w", "un_area": "16_1341_1347_44750", "version": 14, "channel": 1, "babelChannel": 0 })];
            case 120:
                data = _u.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(3000)];
            case 121:
                _u.sent();
                if (data.code === '0') {
                    console.log('红包助力成功');
                }
                else if (data.code === '11') {
                    console.log('红包已助力过');
                }
                else if (data.code === '13') {
                    console.log('上限');
                    return [3 /*break*/, 123];
                }
                _u.label = 122;
            case 122:
                shareCodeSelf_1_1 = shareCodeSelf_1.next();
                return [3 /*break*/, 119];
            case 123: return [3 /*break*/, 126];
            case 124:
                e_7_1 = _u.sent();
                e_7 = { error: e_7_1 };
                return [3 /*break*/, 126];
            case 125:
                try {
                    if (shareCodeSelf_1_1 && !shareCodeSelf_1_1.done && (_s = shareCodeSelf_1["return"])) _s.call(shareCodeSelf_1);
                }
                finally { if (e_7) throw e_7.error; }
                return [7 /*endfinally*/];
            case 126:
                i_3 = 0;
                _u.label = 127;
            case 127:
                if (!(i_3 < res.remainLotteryTimes)) return [3 /*break*/, 131];
                return [4 /*yield*/, api('lotteryForTurntableFarm', { "type": 1, "version": 4, "channel": 1 })];
            case 128:
                data = _u.sent();
                if (data.type === 'thanks') {
                    console.log('抽奖获得 空气');
                }
                else {
                    console.log('抽奖获得', data.type);
                }
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 129:
                _u.sent();
                _u.label = 130;
            case 130:
                i_3++;
                return [3 /*break*/, 127];
            case 131: return [4 /*yield*/, (0, TS_USER_AGENTS_1.getShareCodePool)('farm', 30)];
            case 132:
                // 助力
                shareCodePool = _u.sent();
                shareCode = Array.from(new Set(__spreadArray(__spreadArray([], __read(shareCodeSelf), false), __read(shareCodePool), false)));
                _u.label = 133;
            case 133:
                _u.trys.push([133, 139, 140, 141]);
                shareCodeSelf_2 = (e_8 = void 0, __values(shareCodeSelf)), shareCodeSelf_2_1 = shareCodeSelf_2.next();
                _u.label = 134;
            case 134:
                if (!!shareCodeSelf_2_1.done) return [3 /*break*/, 138];
                code = shareCodeSelf_2_1.value;
                console.log('去助力', code);
                return [4 /*yield*/, api('initForFarm', { "mpin": "", "utm_campaign": "t_335139774", "utm_medium": "appshare", "shareCode": code, "utm_term": "Wxfriends", "utm_source": "iosapp", "imageUrl": "", "nickName": "", "version": 14, "channel": 2, "babelChannel": 0 })];
            case 135:
                res = _u.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(3000)];
            case 136:
                _u.sent();
                (0, TS_USER_AGENTS_1.o2s)(res, '助力');
                if (res.helpResult.code === '7') {
                    console.log('不给自己助力');
                }
                else if (res.helpResult.code === '0') {
                    console.log('助力成功,获得', res.helpResult.salveHelpAddWater);
                }
                else if (res.helpResult.code === '8') {
                    console.log('上限');
                    return [3 /*break*/, 138];
                }
                else if (res.helpResult.code === '9') {
                    console.log('已助力');
                }
                else if (res.helpResult.code === '10') {
                    console.log('已满');
                }
                else if (res.helpResult.remainTimes === 0) {
                    console.log('次数用完');
                    return [3 /*break*/, 138];
                }
                _u.label = 137;
            case 137:
                shareCodeSelf_2_1 = shareCodeSelf_2.next();
                return [3 /*break*/, 134];
            case 138: return [3 /*break*/, 141];
            case 139:
                e_8_1 = _u.sent();
                e_8 = { error: e_8_1 };
                return [3 /*break*/, 141];
            case 140:
                try {
                    if (shareCodeSelf_2_1 && !shareCodeSelf_2_1.done && (_t = shareCodeSelf_2["return"])) _t.call(shareCodeSelf_2);
                }
                finally { if (e_8) throw e_8.error; }
                return [7 /*endfinally*/];
            case 141:
                i++;
                return [3 /*break*/, 2];
            case 142: return [2 /*return*/];
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
