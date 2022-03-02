"use strict";
/**
 * 京喜财富岛
 * cron: 40 * * * *
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
var ts_md5_1 = require("ts-md5");
var date_fns_1 = require("date-fns");
var TS_USER_AGENTS_1 = require("./TS_USER_AGENTS");
var V3_1 = require("./utils/V3");
var fs_1 = require("fs");
var cookie = '', res = '', UserName, index, ua = null, account = [];
var shareCode = [], shareCodeSelf = [], shareCodeHW = [], isCollector = false, token = {};
!(function () { return __awaiter(void 0, void 0, void 0, function () {
    var cookiesArr, i, account_1, account_1_1, acc, e_1, todayMoney, flag, dwPageIndex, _a, _b, t, _c, _d, xb, e_2_1, tasks, _e, _f, t, prizeInfo, CardList, cards, CardList_1, CardList_1_1, card, e_3_1, richcard, coincard, coincard_1, coincard_1_1, card, e_4_1, richcard_1, richcard_1_1, card, e_5_1, j, j, wallet, build, minLV, _g, _h, b, e_6_1, employee, employee_1, employee_1_1, emp, empRes, e_7_1, _j, _k, sign, e_8_1, shipRes, bags_1, _l, _m, s, strTypeCnt_1, n, bags, _o, _p, s, strTypeCnt, n, j, _q, _r, t, e_9_1, _s, _t, t, e_10_1, _u, _v, e, employ, e_11_1, _w, _x, b, e_12_1, _y, _z, _0, index_1, value, pool, shareCode_1, shareCode_1_1, code, e_13_1, e_14_1;
    var e_15, _1, e_16, _2, e_2, _3, e_3, _4, e_17, _5, e_4, _6, e_5, _7, e_6, _8, e_7, _9, e_8, _10, e_18, _11, e_19, _12, e_9, _13, e_10, _14, e_11, _15, e_12, _16, e_14, _17, e_13, _18;
    var _19;
    return __generator(this, function (_20) {
        switch (_20.label) {
            case 0:
                if ((0, fs_1.existsSync)('./utils/account.json')) {
                    try {
                        account = JSON.parse((0, fs_1.readFileSync)('./utils/account.json').toString());
                    }
                    catch (e) {
                        console.log(e);
                    }
                }
                return [4 /*yield*/, (0, V3_1.requestAlgo)('92a36', 'jdpingou;')];
            case 1:
                _20.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.requireConfig)()];
            case 2:
                cookiesArr = _20.sent();
                i = 0;
                _20.label = 3;
            case 3:
                if (!(i < cookiesArr.length)) return [3 /*break*/, 179];
                cookie = cookiesArr[i];
                UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                index = i + 1;
                console.log("\n\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7".concat(index, "\u3011").concat(UserName, "\n"));
                ua = 'jdpingou;';
                try {
                    for (account_1 = (e_15 = void 0, __values(account)), account_1_1 = account_1.next(); !account_1_1.done; account_1_1 = account_1.next()) {
                        acc = account_1_1.value;
                        if ((acc === null || acc === void 0 ? void 0 : acc.pt_pin.includes(UserName)) && (acc === null || acc === void 0 ? void 0 : acc.jdpingou)) {
                            ua = acc.jdpingou;
                            console.log('指定UA：', ua);
                            break;
                        }
                    }
                }
                catch (e_15_1) { e_15 = { error: e_15_1 }; }
                finally {
                    try {
                        if (account_1_1 && !account_1_1.done && (_1 = account_1["return"])) _1.call(account_1);
                    }
                    finally { if (e_15) throw e_15.error; }
                }
                token = (0, TS_USER_AGENTS_1.getJxToken)(cookie);
                _20.label = 4;
            case 4:
                _20.trys.push([4, 6, , 7]);
                return [4 /*yield*/, makeshareCode()];
            case 5:
                _20.sent();
                return [3 /*break*/, 7];
            case 6:
                e_1 = _20.sent();
                console.log(e_1);
                return [3 /*break*/, 7];
            case 7:
                todayMoney = 0, flag = true;
                dwPageIndex = 0;
                _20.label = 8;
            case 8:
                if (!(dwPageIndex < 5)) return [3 /*break*/, 12];
                if (!flag)
                    return [3 /*break*/, 12];
                return [4 /*yield*/, api('user/GetMoneyDetail', '_cfd_t,bizCode,dwEnv,dwPageIndex,dwPageSize,dwProperty,dwQueryType,ptag,source,strZone', { dwQueryType: 0, dwPageIndex: 1, dwPageSize: 10, dwProperty: 1 })];
            case 9:
                res = _20.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 10:
                _20.sent();
                try {
                    for (_a = (e_16 = void 0, __values(res === null || res === void 0 ? void 0 : res.Detail)), _b = _a.next(); !_b.done; _b = _a.next()) {
                        t = _b.value;
                        if ((0, date_fns_1.getDate)(t.ddwTime * 1000) === (0, date_fns_1.getDate)(new Date())) {
                            todayMoney += t.ddwValue;
                        }
                        else {
                            flag = false;
                            break;
                        }
                    }
                }
                catch (e_16_1) { e_16 = { error: e_16_1 }; }
                finally {
                    try {
                        if (_b && !_b.done && (_2 = _a["return"])) _2.call(_a);
                    }
                    finally { if (e_16) throw e_16.error; }
                }
                _20.label = 11;
            case 11:
                dwPageIndex++;
                return [3 /*break*/, 8];
            case 12:
                console.log('今日累计获得财富:', todayMoney);
                return [4 /*yield*/, api('user/QueryUserInfo', '_cfd_t,bizCode,ddwTaskId,dwEnv,ptag,source,strMarkList,strPgUUNum,strPgtimestamp,strPhoneID,strShareId,strZone', { ddwTaskId: '', strShareId: '', strMarkList: 'guider_step,collect_coin_auth,guider_medal,guider_over_flag,build_food_full,build_sea_full,build_shop_full,build_fun_full,medal_guider_show,guide_guider_show,guide_receive_vistor,daily_task,guider_daily_task', strPgtimestamp: token.strPgtimestamp, strPhoneID: token.strPhoneID, strPgUUNum: token.strPgUUNum })];
            case 13:
                // 离线
                res = _20.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(5000)];
            case 14:
                _20.sent();
                return [4 /*yield*/, api('user/QueryUserInfo', '_cfd_t,bizCode,ddwTaskId,dwEnv,dwIsReJoin,ptag,source,strPgUUNum,strPgtimestamp,strPhoneID,strShareId,strVersion,strZone', { ddwTaskId: '', strShareId: '', strMarkList: 'undefined', strVersion: '1.0.1', dwIsReJoin: 0, strPgtimestamp: token.strPgtimestamp, strPhoneID: token.strPhoneID, strPgUUNum: token.strPgUUNum })];
            case 15:
                res = _20.sent();
                console.log('财富余额:', res.ddwRichBalance);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(5000)
                    // 寻宝
                ];
            case 16:
                _20.sent();
                _20.label = 17;
            case 17:
                _20.trys.push([17, 23, 24, 25]);
                _c = (e_2 = void 0, __values(res.XbStatus.XBDetail)), _d = _c.next();
                _20.label = 18;
            case 18:
                if (!!_d.done) return [3 /*break*/, 22];
                xb = _d.value;
                if (!(xb.dwRemainCnt !== 0)) return [3 /*break*/, 21];
                return [4 /*yield*/, api('user/TreasureHunt', '_cfd_t,bizCode,dwEnv,ptag,source,strIndex,strZone', { strIndex: xb.strIndex })];
            case 19:
                res = _20.sent();
                if (res.iRet === 0) {
                    console.log('发现宝物:', res.AwardInfo.ddwValue);
                }
                else {
                    console.log('寻宝失败:', res);
                    return [3 /*break*/, 22];
                }
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 20:
                _20.sent();
                _20.label = 21;
            case 21:
                _d = _c.next();
                return [3 /*break*/, 18];
            case 22: return [3 /*break*/, 25];
            case 23:
                e_2_1 = _20.sent();
                e_2 = { error: e_2_1 };
                return [3 /*break*/, 25];
            case 24:
                try {
                    if (_d && !_d.done && (_3 = _c["return"])) _3.call(_c);
                }
                finally { if (e_2) throw e_2.error; }
                return [7 /*endfinally*/];
            case 25:
                tasks = void 0;
                return [4 /*yield*/, api('story/GetPropTask', '_cfd_t,bizCode,dwEnv,ptag,source,strZone')];
            case 26:
                // 加速卡任务
                tasks = _20.sent();
                _20.label = 27;
            case 27:
                _20.trys.push([27, 36, 37, 38]);
                _e = (e_3 = void 0, __values(tasks.Data.TaskList)), _f = _e.next();
                _20.label = 28;
            case 28:
                if (!!_f.done) return [3 /*break*/, 35];
                t = _f.value;
                if (!(t.dwCompleteNum === t.dwTargetNum && t.dwAwardStatus === 2)) return [3 /*break*/, 31];
                return [4 /*yield*/, api('Award', '_cfd_t,bizCode,dwEnv,ptag,source,strZone,taskId', { bizCode: tasks.Data.strZone, taskId: t.ddwTaskId })];
            case 29:
                res = _20.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 30:
                _20.sent();
                if (res.ret === 0) {
                    prizeInfo = JSON.parse(res.data.prizeInfo);
                    CardList = prizeInfo.CardInfo.CardList;
                    cards = '';
                    try {
                        for (CardList_1 = (e_17 = void 0, __values(CardList)), CardList_1_1 = CardList_1.next(); !CardList_1_1.done; CardList_1_1 = CardList_1.next()) {
                            card = CardList_1_1.value;
                            cards += card.strCardName;
                        }
                    }
                    catch (e_17_1) { e_17 = { error: e_17_1 }; }
                    finally {
                        try {
                            if (CardList_1_1 && !CardList_1_1.done && (_5 = CardList_1["return"])) _5.call(CardList_1);
                        }
                        finally { if (e_17) throw e_17.error; }
                    }
                    console.log('加速卡领取成功', cards);
                }
                else {
                    console.log('加速卡领取失败', res);
                    return [3 /*break*/, 35];
                }
                _20.label = 31;
            case 31:
                if (!(t.dwCompleteNum < t.dwTargetNum && t.strTaskName !== '去接待NPC' && t.strTaskName.indexOf('累计邀请') === -1)) return [3 /*break*/, 34];
                console.log(t.strTaskName);
                return [4 /*yield*/, api('DoTask', '_cfd_t,bizCode,configExtra,dwEnv,ptag,source,strZone,taskId', { bizCode: tasks.Data.strZone, taskId: t.ddwTaskId })];
            case 32:
                res = _20.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)((_19 = t.dwLookTime * 1000) !== null && _19 !== void 0 ? _19 : 2000)];
            case 33:
                _20.sent();
                if (res.ret === 0) {
                    console.log('加速卡任务完成');
                }
                else {
                    console.log('加速卡任务失败', res);
                    return [3 /*break*/, 35];
                }
                _20.label = 34;
            case 34:
                _f = _e.next();
                return [3 /*break*/, 28];
            case 35: return [3 /*break*/, 38];
            case 36:
                e_3_1 = _20.sent();
                e_3 = { error: e_3_1 };
                return [3 /*break*/, 38];
            case 37:
                try {
                    if (_f && !_f.done && (_4 = _e["return"])) _4.call(_e);
                }
                finally { if (e_3) throw e_3.error; }
                return [7 /*endfinally*/];
            case 38: return [4 /*yield*/, api('user/GetPropCardCenterInfo', '_cfd_t,bizCode,dwEnv,ptag,source,strZone')];
            case 39:
                // 加速卡
                res = _20.sent();
                richcard = res.cardInfo.richcard, coincard = res.cardInfo.coincard;
                _20.label = 40;
            case 40:
                _20.trys.push([40, 45, 46, 47]);
                coincard_1 = (e_4 = void 0, __values(coincard)), coincard_1_1 = coincard_1.next();
                _20.label = 41;
            case 41:
                if (!!coincard_1_1.done) return [3 /*break*/, 44];
                card = coincard_1_1.value;
                if (!(card.dwCardNums !== 0)) return [3 /*break*/, 43];
                return [4 /*yield*/, api('user/UsePropCard', '_cfd_t,bizCode,dwCardType,dwEnv,ptag,source,strCardTypeIndex,strZone', { dwCardType: 1, strCardTypeIndex: encodeURIComponent(card.strCardTypeIndex) })];
            case 42:
                res = _20.sent();
                if (res.iRet === 0) {
                    console.log('金币加速卡使用成功');
                }
                else {
                    console.log('金币加速卡使用失败', res);
                }
                return [3 /*break*/, 44];
            case 43:
                coincard_1_1 = coincard_1.next();
                return [3 /*break*/, 41];
            case 44: return [3 /*break*/, 47];
            case 45:
                e_4_1 = _20.sent();
                e_4 = { error: e_4_1 };
                return [3 /*break*/, 47];
            case 46:
                try {
                    if (coincard_1_1 && !coincard_1_1.done && (_6 = coincard_1["return"])) _6.call(coincard_1);
                }
                finally { if (e_4) throw e_4.error; }
                return [7 /*endfinally*/];
            case 47:
                _20.trys.push([47, 52, 53, 54]);
                richcard_1 = (e_5 = void 0, __values(richcard)), richcard_1_1 = richcard_1.next();
                _20.label = 48;
            case 48:
                if (!!richcard_1_1.done) return [3 /*break*/, 51];
                card = richcard_1_1.value;
                if (!(card.dwCardNums !== 0)) return [3 /*break*/, 50];
                return [4 /*yield*/, api('user/UsePropCard', '_cfd_t,bizCode,dwCardType,dwEnv,ptag,source,strCardTypeIndex,strZone', { dwCardType: 2, strCardTypeIndex: encodeURIComponent(card.strCardTypeIndex) })];
            case 49:
                res = _20.sent();
                if (res.iRet === 0) {
                    console.log('点券加速卡使用成功');
                }
                else {
                    console.log('点券加速卡使用失败', res);
                }
                return [3 /*break*/, 51];
            case 50:
                richcard_1_1 = richcard_1.next();
                return [3 /*break*/, 48];
            case 51: return [3 /*break*/, 54];
            case 52:
                e_5_1 = _20.sent();
                e_5 = { error: e_5_1 };
                return [3 /*break*/, 54];
            case 53:
                try {
                    if (richcard_1_1 && !richcard_1_1.done && (_7 = richcard_1["return"])) _7.call(richcard_1);
                }
                finally { if (e_5) throw e_5.error; }
                return [7 /*endfinally*/];
            case 54:
                // 任务⬇️
                console.log('底部任务列表开始');
                j = 0;
                _20.label = 55;
            case 55:
                if (!(j < 30)) return [3 /*break*/, 59];
                return [4 /*yield*/, task()];
            case 56:
                if ((_20.sent()) === 0) {
                    return [3 /*break*/, 59];
                }
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(3000)];
            case 57:
                _20.sent();
                _20.label = 58;
            case 58:
                j++;
                return [3 /*break*/, 55];
            case 59:
                console.log('底部任务列表结束');
                j = 0;
                _20.label = 60;
            case 60:
                if (!(j < 5)) return [3 /*break*/, 82];
                return [4 /*yield*/, api('user/QueryUserInfo', '_cfd_t,bizCode,ddwTaskId,dwEnv,ptag,source,strMarkList,strPgUUNum,strPgtimestamp,strPhoneID,strShareId,strZone', { ddwTaskId: '', strShareId: '', strMarkList: 'guider_step,collect_coin_auth,guider_medal,guider_over_flag,build_food_full,build_sea_full,build_shop_full,build_fun_full,medal_guider_show,guide_guider_show,guide_receive_vistor,daily_task,guider_daily_task', strPgtimestamp: token.strPgtimestamp, strPhoneID: token.strPhoneID, strPgUUNum: token.strPgUUNum })];
            case 61:
                res = _20.sent();
                wallet = res.ddwCoinBalance;
                console.log('金币余额:', wallet);
                build = '', minLV = 99999;
                _20.label = 62;
            case 62:
                _20.trys.push([62, 68, 69, 70]);
                _g = (e_6 = void 0, __values(['food', 'fun', 'shop', 'sea'])), _h = _g.next();
                _20.label = 63;
            case 63:
                if (!!_h.done) return [3 /*break*/, 67];
                b = _h.value;
                return [4 /*yield*/, api('user/GetBuildInfo', '_cfd_t,bizCode,dwEnv,dwType,ptag,source,strBuildIndex,strZone', { strBuildIndex: b })];
            case 64:
                res = _20.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 65:
                _20.sent();
                if (res.dwBuildLvl <= minLV) {
                    minLV = res.dwBuildLvl;
                    build = b;
                }
                _20.label = 66;
            case 66:
                _h = _g.next();
                return [3 /*break*/, 63];
            case 67: return [3 /*break*/, 70];
            case 68:
                e_6_1 = _20.sent();
                e_6 = { error: e_6_1 };
                return [3 /*break*/, 70];
            case 69:
                try {
                    if (_h && !_h.done && (_8 = _g["return"])) _8.call(_g);
                }
                finally { if (e_6) throw e_6.error; }
                return [7 /*endfinally*/];
            case 70:
                console.log('最低等级建筑:', minLV, build);
                return [4 /*yield*/, api('user/GetBuildInfo', '_cfd_t,bizCode,dwEnv,dwType,ptag,source,strBuildIndex,strZone', { strBuildIndex: build })];
            case 71:
                res = _20.sent();
                console.log("".concat(build, "\u5347\u7EA7\u9700\u8981:"), res.ddwNextLvlCostCoin);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 72:
                _20.sent();
                if (!(res.dwCanLvlUp === 1 && res.ddwNextLvlCostCoin <= wallet)) return [3 /*break*/, 78];
                return [4 /*yield*/, api('user/BuildLvlUp', '_cfd_t,bizCode,ddwCostCoin,dwEnv,ptag,source,strBuildIndex,strZone', { ddwCostCoin: res.ddwNextLvlCostCoin, strBuildIndex: build })];
            case 73:
                res = _20.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 74:
                _20.sent();
                if (!(res.iRet === 0)) return [3 /*break*/, 76];
                console.log("\u5347\u7EA7\u6210\u529F");
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 75:
                _20.sent();
                return [3 /*break*/, 77];
            case 76:
                console.log('升级失败', res);
                _20.label = 77;
            case 77: return [3 /*break*/, 79];
            case 78: return [3 /*break*/, 82];
            case 79: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(3000)];
            case 80:
                _20.sent();
                _20.label = 81;
            case 81:
                j++;
                return [3 /*break*/, 60];
            case 82: return [4 /*yield*/, api('story/GetTakeAggrPage', '_cfd_t,bizCode,dwEnv,ptag,source,strZone')];
            case 83:
                // 签到 助力奖励
                res = _20.sent();
                employee = res.Data.Employee.EmployeeList.filter(function (e) {
                    return e.dwStatus === 0;
                });
                _20.label = 84;
            case 84:
                _20.trys.push([84, 90, 91, 92]);
                employee_1 = (e_7 = void 0, __values(employee)), employee_1_1 = employee_1.next();
                _20.label = 85;
            case 85:
                if (!!employee_1_1.done) return [3 /*break*/, 89];
                emp = employee_1_1.value;
                return [4 /*yield*/, api('story/helpdraw', '_cfd_t,bizCode,dwEnv,dwUserId,ptag,source,strZone', { dwUserId: emp.dwId })];
            case 86:
                empRes = _20.sent();
                if (empRes.iRet === 0)
                    console.log('助力奖励领取成功:', empRes.Data.ddwCoin);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 87:
                _20.sent();
                _20.label = 88;
            case 88:
                employee_1_1 = employee_1.next();
                return [3 /*break*/, 85];
            case 89: return [3 /*break*/, 92];
            case 90:
                e_7_1 = _20.sent();
                e_7 = { error: e_7_1 };
                return [3 /*break*/, 92];
            case 91:
                try {
                    if (employee_1_1 && !employee_1_1.done && (_9 = employee_1["return"])) _9.call(employee_1);
                }
                finally { if (e_7) throw e_7.error; }
                return [7 /*endfinally*/];
            case 92:
                if (!(res.Data.Sign.dwTodayStatus === 0)) return [3 /*break*/, 101];
                console.log('今日未签到');
                _20.label = 93;
            case 93:
                _20.trys.push([93, 98, 99, 100]);
                _j = (e_8 = void 0, __values(res.Data.Sign.SignList)), _k = _j.next();
                _20.label = 94;
            case 94:
                if (!!_k.done) return [3 /*break*/, 97];
                sign = _k.value;
                if (!(sign.dwDayId === res.Data.Sign.dwTodayId)) return [3 /*break*/, 96];
                return [4 /*yield*/, api('story/RewardSign', '_cfd_t,bizCode,ddwCoin,ddwMoney,dwEnv,dwPrizeLv,dwPrizeType,ptag,source,strPgUUNum,strPgtimestamp,strPhoneID,strPrizePool,strZone', {
                        ddwCoin: sign.ddwCoin,
                        ddwMoney: sign.ddwMoney,
                        dwPrizeLv: sign.dwBingoLevel,
                        dwPrizeType: sign.dwPrizeType,
                        strPrizePool: sign.strPrizePool,
                        strPgtimestamp: token.strPgtimestamp,
                        strPhoneID: token.strPhoneID,
                        strPgUUNum: token.strPgUUNum
                    })];
            case 95:
                res = _20.sent();
                if (res.iRet === 0)
                    console.log('签到成功:', res.Data.ddwCoin, res.Data.ddwMoney, res.Data.strPrizePool);
                else
                    console.log('签到失败:', res);
                return [3 /*break*/, 97];
            case 96:
                _k = _j.next();
                return [3 /*break*/, 94];
            case 97: return [3 /*break*/, 100];
            case 98:
                e_8_1 = _20.sent();
                e_8 = { error: e_8_1 };
                return [3 /*break*/, 100];
            case 99:
                try {
                    if (_k && !_k.done && (_10 = _j["return"])) _10.call(_j);
                }
                finally { if (e_8) throw e_8.error; }
                return [7 /*endfinally*/];
            case 100: return [3 /*break*/, 102];
            case 101:
                console.log('今日已经签到');
                _20.label = 102;
            case 102: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 103:
                _20.sent();
                return [4 /*yield*/, api('user/QueryUserInfo', '_cfd_t,bizCode,ddwTaskId,dwEnv,ptag,source,strMarkList,strPgUUNum,strPgtimestamp,strPhoneID,strShareId,strVersion,strZone', {
                        ddwTaskId: '',
                        strShareId: '',
                        strMarkList: 'guider_step,collect_coin_auth,guider_medal,guider_over_flag,build_food_full,build_sea_full,build_shop_full,build_fun_full,medal_guider_show,guide_guider_show,guide_receive_vistor,daily_task,guider_daily_task,cfd_has_show_selef_point',
                        strPgUUNum: token.strPgUUNum,
                        strPgtimestamp: token.strPgtimestamp,
                        strPhoneID: token.strPhoneID,
                        strVersion: '1.0.1'
                    })];
            case 104:
                res = _20.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(5000)];
            case 105:
                _20.sent();
                if (!res.StoryInfo.StoryList) return [3 /*break*/, 118];
                // 美人鱼
                if (res.StoryInfo.StoryList[0].Mermaid) {
                    console.log("\u53D1\u73B0\u7F8E\u4EBA\u9C7C\uD83E\uDDDC\u200D\u2640\uFE0F");
                    /*
                    let MermaidRes: any = await api('story/MermaidOper', '_cfd_t,bizCode,ddwTriggerDay,dwEnv,dwType,ptag,source,strStoryId,strZone', {
                      strStoryId: res.StoryInfo.StoryList[0].strStoryId,
                      dwType: '1',
                      ddwTriggerDay: res.StoryInfo.StoryList[0].ddwTriggerDay
                    })
                    await wait(3000)
                    if (MermaidRes.iRet === 0) {
                      MermaidRes = await api('story/MermaidOpe', '_cfd_t,bizCode,ddwTriggerDay,dwEnv,dwType,ptag,source,strStoryId,strZone', {
                        strStoryId: res.StoryInfo.StoryList[0].strStoryId,
                        dwType: '3',
                        ddwTriggerDay: res.StoryInfo.StoryList[0].ddwTriggerDay
                      })
                      if (MermaidRes.iRet === 0) {
                        console.log(`拯救美人鱼成功`)
                      }
                    }
                    await wait(1000)
                    MermaidRes = await api('story/MermaidOper', '_cfd_t,bizCode,ddwTriggerDay,dwEnv,dwType,ptag,source,strStoryId,strZone', {
                      strStoryId: res.StoryInfo.StoryList[0].strStoryId,
                      dwType: '2',
                      ddwTriggerDay: res.StoryInfo.StoryList[0].ddwTriggerDay
                    })
                    if (MermaidRes.iRet === 0)
                      console.log('获得金币:', MermaidRes.Data.ddwCoin)
            
                     */
                }
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 106:
                _20.sent();
                if (!res.StoryInfo.StoryList[0].Special) return [3 /*break*/, 110];
                console.log("\u8239\u6765\u4E86\uFF0C\u4E58\u5BA2\u662F".concat(res.StoryInfo.StoryList[0].Special.strName));
                return [4 /*yield*/, api('story/SpecialUserOper', '_cfd_t,bizCode,ddwTriggerDay,dwEnv,dwType,ptag,source,strStoryId,strZone,triggerType', {
                        strStoryId: res.StoryInfo.StoryList[0].strStoryId,
                        dwType: '2',
                        triggerType: 0,
                        ddwTriggerDay: res.StoryInfo.StoryList[0].ddwTriggerDay
                    })];
            case 107:
                shipRes = _20.sent();
                console.log('正在下船，等待30s');
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(30000)];
            case 108:
                _20.sent();
                return [4 /*yield*/, api('story/SpecialUserOper', '_cfd_t,bizCode,ddwTriggerDay,dwEnv,dwType,ptag,source,strStoryId,strZone,triggerType', {
                        strStoryId: res.StoryInfo.StoryList[0].strStoryId,
                        dwType: '3',
                        triggerType: 0,
                        ddwTriggerDay: res.StoryInfo.StoryList[0].ddwTriggerDay
                    })];
            case 109:
                shipRes = _20.sent();
                if (shipRes.iRet === 0)
                    console.log('船客接待成功');
                else
                    console.log('船客接待失败', shipRes);
                _20.label = 110;
            case 110:
                isCollector = false;
                if (!res.StoryInfo.StoryList[0].Collector) return [3 /*break*/, 116];
                console.log('收藏家出现');
                return [4 /*yield*/, api('story/CollectorOper', '_cfd_t,bizCode,dwEnv,ptag,source,strZone,strStoryId,dwType,ddwTriggerDay', { strStoryId: res.StoryInfo.StoryList[0].strStoryId, dwType: '2', ddwTriggerDay: res.StoryInfo.StoryList[0].ddwTriggerDay })];
            case 111:
                // TODO 背包满了再卖给收破烂的
                res = _20.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 112:
                _20.sent();
                isCollector = true;
                return [4 /*yield*/, api('story/querystorageroom', '_cfd_t,bizCode,dwEnv,ptag,source,strZone')];
            case 113:
                // 清空背包
                res = _20.sent();
                bags_1 = [];
                try {
                    for (_l = (e_18 = void 0, __values(res.Data.Office)), _m = _l.next(); !_m.done; _m = _l.next()) {
                        s = _m.value;
                        bags_1.push(s.dwType);
                        bags_1.push(s.dwCount);
                    }
                }
                catch (e_18_1) { e_18 = { error: e_18_1 }; }
                finally {
                    try {
                        if (_m && !_m.done && (_11 = _l["return"])) _11.call(_l);
                    }
                    finally { if (e_18) throw e_18.error; }
                }
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 114:
                _20.sent();
                strTypeCnt_1 = '';
                for (n = 0; n < bags_1.length; n++) {
                    if (n % 2 === 0)
                        strTypeCnt_1 += "".concat(bags_1[n], ":");
                    else
                        strTypeCnt_1 += "".concat(bags_1[n], "|");
                }
                if (!(bags_1.length !== 0)) return [3 /*break*/, 116];
                return [4 /*yield*/, api('story/sellgoods', '_cfd_t,bizCode,dwEnv,dwSceneId,ptag,source,strTypeCnt,strZone', { dwSceneId: isCollector ? '2' : '1', strTypeCnt: strTypeCnt_1 })];
            case 115:
                res = _20.sent();
                console.log('卖贝壳收入:', res.Data.ddwCoin, res.Data.ddwMoney);
                _20.label = 116;
            case 116: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 117:
                _20.sent();
                _20.label = 118;
            case 118: return [4 /*yield*/, api('story/querystorageroom', '_cfd_t,bizCode,dwEnv,ptag,source,strZone')];
            case 119:
                // 清空背包
                res = _20.sent();
                bags = [];
                try {
                    for (_o = (e_19 = void 0, __values(res.Data.Office)), _p = _o.next(); !_p.done; _p = _o.next()) {
                        s = _p.value;
                        bags.push(s.dwType);
                        bags.push(s.dwCount);
                    }
                }
                catch (e_19_1) { e_19 = { error: e_19_1 }; }
                finally {
                    try {
                        if (_p && !_p.done && (_12 = _o["return"])) _12.call(_o);
                    }
                    finally { if (e_19) throw e_19.error; }
                }
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 120:
                _20.sent();
                strTypeCnt = '';
                for (n = 0; n < bags.length; n++) {
                    if (n % 2 === 0)
                        strTypeCnt += "".concat(bags[n], ":");
                    else
                        strTypeCnt += "".concat(bags[n], "|");
                }
                if (!(bags.length !== 0)) return [3 /*break*/, 122];
                return [4 /*yield*/, api('story/sellgoods', '_cfd_t,bizCode,dwEnv,dwSceneId,ptag,source,strTypeCnt,strZone', { dwSceneId: isCollector ? '2' : '1', strTypeCnt: strTypeCnt })];
            case 121:
                res = _20.sent();
                console.log('卖贝壳收入:', res.Data.ddwCoin, res.Data.ddwMoney);
                _20.label = 122;
            case 122: return [4 /*yield*/, api('story/QueryRubbishInfo', '_cfd_t,bizCode,dwEnv,ptag,source,strZone')];
            case 123:
                // 垃圾🚮
                res = _20.sent();
                if (!(res.Data.StoryInfo.StoryList.length !== 0)) return [3 /*break*/, 130];
                console.log('有垃圾');
                return [4 /*yield*/, api('story/RubbishOper', '_cfd_t,bizCode,dwEnv,dwRewardType,dwType,ptag,source,strZone', {
                        dwType: '1',
                        dwRewardType: 0
                    })];
            case 124:
                _20.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 125:
                _20.sent();
                j = 1;
                _20.label = 126;
            case 126:
                if (!(j < 9)) return [3 /*break*/, 130];
                return [4 /*yield*/, api('story/RubbishOper', '_cfd_t,bizCode,dwEnv,dwRewardType,dwRubbishId,dwType,ptag,source,strZone', {
                        dwType: '2',
                        dwRewardType: 0,
                        dwRubbishId: j
                    })];
            case 127:
                res = _20.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1500)];
            case 128:
                _20.sent();
                _20.label = 129;
            case 129:
                j++;
                return [3 /*break*/, 126];
            case 130: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)
                // 任务➡️
            ];
            case 131:
                _20.sent();
                return [4 /*yield*/, api('story/GetActTask', '_cfd_t,bizCode,dwEnv,ptag,source,strZone')];
            case 132:
                // 任务➡️
                res = _20.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 133:
                _20.sent();
                _20.label = 134;
            case 134:
                _20.trys.push([134, 140, 141, 142]);
                _q = (e_9 = void 0, __values(res.Data.TaskList)), _r = _q.next();
                _20.label = 135;
            case 135:
                if (!!_r.done) return [3 /*break*/, 139];
                t = _r.value;
                if (!([1, 2].indexOf(t.dwOrderId) > -1 && t.dwCompleteNum < t.dwTargetNum && t.strTaskName !== '升级1个建筑')) return [3 /*break*/, 138];
                console.log('开始任务➡️:', t.strTaskName);
                return [4 /*yield*/, api('DoTask', '_cfd_t,bizCode,configExtra,dwEnv,ptag,source,strZone,taskId', { taskId: t.ddwTaskId, configExtra: '' }, 'right')];
            case 136:
                res = _20.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(t.dwLookTime * 1000)];
            case 137:
                _20.sent();
                if (res.ret === 0) {
                    console.log('任务完成');
                }
                else {
                    console.log('任务失败', res);
                }
                _20.label = 138;
            case 138:
                _r = _q.next();
                return [3 /*break*/, 135];
            case 139: return [3 /*break*/, 142];
            case 140:
                e_9_1 = _20.sent();
                e_9 = { error: e_9_1 };
                return [3 /*break*/, 142];
            case 141:
                try {
                    if (_r && !_r.done && (_13 = _q["return"])) _13.call(_q);
                }
                finally { if (e_9) throw e_9.error; }
                return [7 /*endfinally*/];
            case 142: return [4 /*yield*/, api('story/GetActTask', '_cfd_t,bizCode,dwEnv,ptag,source,strZone')];
            case 143:
                res = _20.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 144:
                _20.sent();
                _20.label = 145;
            case 145:
                _20.trys.push([145, 151, 152, 153]);
                _s = (e_10 = void 0, __values(res.Data.TaskList)), _t = _s.next();
                _20.label = 146;
            case 146:
                if (!!_t.done) return [3 /*break*/, 150];
                t = _t.value;
                if (!(t.dwCompleteNum === t.dwTargetNum && t.dwAwardStatus === 2)) return [3 /*break*/, 149];
                return [4 /*yield*/, api('Award', '_cfd_t,bizCode,configExtra,dwEnv,ptag,source,strZone,taskId', { taskId: t.ddwTaskId }, 'right')];
            case 147:
                res = _20.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 148:
                _20.sent();
                if (res.ret === 0) {
                    try {
                        res = JSON.parse(res.data.prizeInfo);
                        console.log("\u9886\u5956\u6210\u529F:", res.ddwCoin, res.ddwMoney);
                    }
                    catch (e) {
                        console.log("\u9886\u5956\u6210\u529F:", res);
                    }
                }
                else {
                    console.log('领奖失败', res);
                }
                _20.label = 149;
            case 149:
                _t = _s.next();
                return [3 /*break*/, 146];
            case 150: return [3 /*break*/, 153];
            case 151:
                e_10_1 = _20.sent();
                e_10 = { error: e_10_1 };
                return [3 /*break*/, 153];
            case 152:
                try {
                    if (_t && !_t.done && (_14 = _s["return"])) _14.call(_s);
                }
                finally { if (e_10) throw e_10.error; }
                return [7 /*endfinally*/];
            case 153: return [4 /*yield*/, api('story/GetActTask', '_cfd_t,bizCode,dwEnv,ptag,source,strZone')];
            case 154:
                res = _20.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 155:
                _20.sent();
                if (!(res.Data.dwStatus === 3)) return [3 /*break*/, 157];
                return [4 /*yield*/, api('story/ActTaskAward', '_cfd_t,bizCode,dwEnv,ptag,source,strZone')];
            case 156:
                res = _20.sent();
                if (res.ret === 0) {
                    console.log('100财富任务完成');
                }
                _20.label = 157;
            case 157: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)
                // 导游
            ];
            case 158:
                _20.sent();
                return [4 /*yield*/, api('user/EmployTourGuideInfo', '_cfd_t,bizCode,dwEnv,ptag,source,strZone')];
            case 159:
                // 导游
                res = _20.sent();
                if (!!res.TourGuideList) return [3 /*break*/, 160];
                console.log('手动雇佣4个试用导游');
                return [3 /*break*/, 168];
            case 160:
                _20.trys.push([160, 166, 167, 168]);
                _u = (e_11 = void 0, __values(res.TourGuideList)), _v = _u.next();
                _20.label = 161;
            case 161:
                if (!!_v.done) return [3 /*break*/, 165];
                e = _v.value;
                if (!(e.strBuildIndex !== 'food' && e.ddwRemainTm === 0)) return [3 /*break*/, 164];
                return [4 /*yield*/, api('user/EmployTourGuide', '_cfd_t,bizCode,ddwConsumeCoin,dwEnv,dwIsFree,ptag,source,strBuildIndex,strZone', { ddwConsumeCoin: e.ddwCostCoin, dwIsFree: 0, strBuildIndex: e.strBuildIndex })];
            case 162:
                employ = _20.sent();
                if (employ.iRet === 0)
                    console.log("\u96C7\u4F63".concat(e.strBuildIndex, "\u5BFC\u6E38\u6210\u529F"));
                if (employ.iRet === 2003)
                    return [3 /*break*/, 165];
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 163:
                _20.sent();
                _20.label = 164;
            case 164:
                _v = _u.next();
                return [3 /*break*/, 161];
            case 165: return [3 /*break*/, 168];
            case 166:
                e_11_1 = _20.sent();
                e_11 = { error: e_11_1 };
                return [3 /*break*/, 168];
            case 167:
                try {
                    if (_v && !_v.done && (_15 = _u["return"])) _15.call(_u);
                }
                finally { if (e_11) throw e_11.error; }
                return [7 /*endfinally*/];
            case 168: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 169:
                _20.sent();
                _20.label = 170;
            case 170:
                _20.trys.push([170, 176, 177, 178]);
                _w = (e_12 = void 0, __values(['fun', 'shop', 'sea', 'food'])), _x = _w.next();
                _20.label = 171;
            case 171:
                if (!!_x.done) return [3 /*break*/, 175];
                b = _x.value;
                return [4 /*yield*/, api('user/CollectCoin', '_cfd_t,bizCode,dwEnv,dwType,ptag,source,strBuildIndex,strZone', { strBuildIndex: b, dwType: '1' })];
            case 172:
                res = _20.sent();
                console.log("".concat(b, "\u6536\u91D1\u5E01:"), res.ddwCoin);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 173:
                _20.sent();
                _20.label = 174;
            case 174:
                _x = _w.next();
                return [3 /*break*/, 171];
            case 175: return [3 /*break*/, 178];
            case 176:
                e_12_1 = _20.sent();
                e_12 = { error: e_12_1 };
                return [3 /*break*/, 178];
            case 177:
                try {
                    if (_x && !_x.done && (_16 = _w["return"])) _16.call(_w);
                }
                finally { if (e_12) throw e_12.error; }
                return [7 /*endfinally*/];
            case 178:
                i++;
                return [3 /*break*/, 3];
            case 179:
                _20.trys.push([179, 194, 195, 196]);
                _y = __values(cookiesArr.entries()), _z = _y.next();
                _20.label = 180;
            case 180:
                if (!!_z.done) return [3 /*break*/, 193];
                _0 = __read(_z.value, 2), index_1 = _0[0], value = _0[1];
                cookie = value;
                if (!(shareCodeHW.length === 0)) return [3 /*break*/, 182];
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.getshareCodeHW)('jxcfd')];
            case 181:
                shareCodeHW = _20.sent();
                _20.label = 182;
            case 182: return [4 /*yield*/, (0, TS_USER_AGENTS_1.getShareCodePool)('jxcfd', 30)];
            case 183:
                pool = _20.sent();
                shareCode = Array.from(new Set(__spreadArray(__spreadArray(__spreadArray([], __read(shareCodeSelf), false), __read(shareCodeHW), false), __read(pool), false)));
                _20.label = 184;
            case 184:
                _20.trys.push([184, 190, 191, 192]);
                shareCode_1 = (e_13 = void 0, __values(shareCode)), shareCode_1_1 = shareCode_1.next();
                _20.label = 185;
            case 185:
                if (!!shareCode_1_1.done) return [3 /*break*/, 189];
                code = shareCode_1_1.value;
                UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                console.log("\u3010\u8D26\u53F7".concat(index_1 + 1, "\u3011 ").concat(UserName, " \u53BB\u52A9\u529B ").concat(code));
                return [4 /*yield*/, api('story/helpbystage', '_cfd_t,bizCode,dwEnv,ptag,source,strShareId,strZone', { strShareId: code })];
            case 186:
                res = _20.sent();
                if (res.iRet === 0) {
                    console.log('助力成功:', res.Data.GuestPrizeInfo.strPrizeName);
                }
                else if (res.iRet === 2190 || res.sErrMsg === '达到助力上限') {
                    console.log('上限');
                    return [3 /*break*/, 189];
                }
                else if (res.iRet === 1023) {
                    console.log('信号弱');
                    return [3 /*break*/, 189];
                }
                else if (res.iRet === 2191) {
                    console.log('已助力');
                }
                else {
                    console.log('其他错误:', res);
                }
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(3000)];
            case 187:
                _20.sent();
                _20.label = 188;
            case 188:
                shareCode_1_1 = shareCode_1.next();
                return [3 /*break*/, 185];
            case 189: return [3 /*break*/, 192];
            case 190:
                e_13_1 = _20.sent();
                e_13 = { error: e_13_1 };
                return [3 /*break*/, 192];
            case 191:
                try {
                    if (shareCode_1_1 && !shareCode_1_1.done && (_18 = shareCode_1["return"])) _18.call(shareCode_1);
                }
                finally { if (e_13) throw e_13.error; }
                return [7 /*endfinally*/];
            case 192:
                _z = _y.next();
                return [3 /*break*/, 180];
            case 193: return [3 /*break*/, 196];
            case 194:
                e_14_1 = _20.sent();
                e_14 = { error: e_14_1 };
                return [3 /*break*/, 196];
            case 195:
                try {
                    if (_z && !_z.done && (_17 = _y["return"])) _17.call(_y);
                }
                finally { if (e_14) throw e_14.error; }
                return [7 /*endfinally*/];
            case 196: return [2 /*return*/];
        }
    });
}); })();
function api(fn, stk, params, taskPosition) {
    if (params === void 0) { params = {}; }
    if (taskPosition === void 0) { taskPosition = ''; }
    return __awaiter(this, void 0, void 0, function () {
        var timestamp, url, t, bizCode, _a, _b, _c, key, value, h5st, data;
        var e_20, _d;
        return __generator(this, function (_e) {
            switch (_e.label) {
                case 0:
                    timestamp = Date.now();
                    t = [
                        { key: 'strZone', value: 'jxbfd' },
                        { key: 'source', value: 'jxbfd' },
                        { key: 'dwEnv', value: '7' },
                        { key: 'ptag', value: '' },
                        { key: '_cfd_t', value: timestamp.toString() },
                    ];
                    if (['GetUserTaskStatusList', 'Award', 'DoTask'].includes(fn)) {
                        bizCode = void 0;
                        if (!params.bizCode) {
                            bizCode = taskPosition === 'right' ? 'jxbfddch' : 'jxbfd';
                        }
                        else {
                            bizCode = params.bizCode;
                        }
                        url = "https://m.jingxi.com/newtasksys/newtasksys_front/".concat(fn, "?strZone=jxbfd&bizCode=").concat(bizCode, "&source=jxbfd&dwEnv=7&_cfd_t=").concat(timestamp, "&ptag=&_stk=").concat(encodeURIComponent(stk), "&_ste=1&_=").concat(Date.now(), "&sceneval=2&g_login_type=1&callback=jsonpCBK").concat((0, TS_USER_AGENTS_1.randomWord)(), "&g_ty=ls");
                    }
                    else {
                        url = "https://m.jingxi.com/jxbfd/".concat(fn, "?strZone=jxbfd&bizCode=jxbfd&source=jxbfd&dwEnv=7&_cfd_t=").concat(timestamp, "&ptag=&_stk=").concat(encodeURIComponent(stk), "&_ste=1&_=").concat(timestamp, "&sceneval=2&g_login_type=1&callback=jsonpCBK").concat((0, TS_USER_AGENTS_1.randomWord)(), "&g_ty=ls");
                    }
                    try {
                        for (_a = __values(Object.entries(params)), _b = _a.next(); !_b.done; _b = _a.next()) {
                            _c = __read(_b.value, 2), key = _c[0], value = _c[1];
                            t.push({ key: key, value: value });
                            url += "&".concat(key, "=").concat(value);
                        }
                    }
                    catch (e_20_1) { e_20 = { error: e_20_1 }; }
                    finally {
                        try {
                            if (_b && !_b.done && (_d = _a["return"])) _d.call(_a);
                        }
                        finally { if (e_20) throw e_20.error; }
                    }
                    h5st = (0, V3_1.geth5st)(t, '92a36');
                    url += "&h5st=".concat(encodeURIComponent(h5st));
                    return [4 /*yield*/, axios_1["default"].get(url, {
                            headers: {
                                'Host': 'm.jingxi.com',
                                'Accept': '*/*',
                                'Connection': 'keep-alive',
                                'Accept-Language': 'zh-CN,zh-Hans;q=0.9',
                                'User-Agent': ua,
                                'Referer': 'https://st.jingxi.com/',
                                'Cookie': cookie
                            }
                        })];
                case 1:
                    data = (_e.sent()).data;
                    try {
                        return [2 /*return*/, JSON.parse(data.match(/jsonpCBK.?\(([^)]*)/)[1])];
                    }
                    catch (e) {
                        console.log(data);
                        return [2 /*return*/, ''];
                    }
                    return [2 /*return*/];
            }
        });
    });
}
function task() {
    return __awaiter(this, void 0, void 0, function () {
        var _a, _b, t, e_21_1;
        var e_21, _c;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    console.log('刷新任务列表');
                    return [4 /*yield*/, api('GetUserTaskStatusList', '_cfd_t,bizCode,dwEnv,ptag,showAreaTaskFlag,source,strZone,taskId', { taskId: 0, showAreaTaskFlag: 1 })];
                case 1:
                    res = _d.sent();
                    return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
                case 2:
                    _d.sent();
                    _d.label = 3;
                case 3:
                    _d.trys.push([3, 14, 15, 16]);
                    _a = __values(res.data.userTaskStatusList), _b = _a.next();
                    _d.label = 4;
                case 4:
                    if (!!_b.done) return [3 /*break*/, 13];
                    t = _b.value;
                    if (!(t.awardStatus === 2 && t.completedTimes === t.targetTimes)) return [3 /*break*/, 9];
                    console.log('可领奖:', t.taskName);
                    return [4 /*yield*/, api('Award', '_cfd_t,bizCode,dwEnv,ptag,source,strZone,taskId', { taskId: t.taskId, bizCode: t.bizCode })];
                case 5:
                    res = _d.sent();
                    return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
                case 6:
                    _d.sent();
                    if (!(res.ret === 0)) return [3 /*break*/, 8];
                    try {
                        res = JSON.parse(res.data.prizeInfo);
                        console.log("\u9886\u5956\u6210\u529F:", res.ddwCoin, res.ddwMoney);
                    }
                    catch (e) {
                        console.log('领奖成功:', res);
                    }
                    return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
                case 7:
                    _d.sent();
                    return [2 /*return*/, 1];
                case 8:
                    console.log('领奖失败:', res);
                    return [2 /*return*/, 0];
                case 9:
                    if (!(t.dateType === 2 && t.awardStatus === 2 && t.completedTimes < t.targetTimes && t.taskCaller === 1)) return [3 /*break*/, 12];
                    console.log('做任务:', t.taskId, t.taskName, t.completedTimes, t.targetTimes);
                    return [4 /*yield*/, api('DoTask', '_cfd_t,bizCode,configExtra,dwEnv,ptag,source,strZone,taskId', { taskId: t.taskId, configExtra: '', bizCode: t.bizCode })];
                case 10:
                    res = _d.sent();
                    return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(5000)];
                case 11:
                    _d.sent();
                    if (res.ret === 0) {
                        console.log('任务完成');
                        return [2 /*return*/, 1];
                    }
                    else {
                        console.log('任务失败');
                        return [2 /*return*/, 0];
                    }
                    _d.label = 12;
                case 12:
                    _b = _a.next();
                    return [3 /*break*/, 4];
                case 13: return [3 /*break*/, 16];
                case 14:
                    e_21_1 = _d.sent();
                    e_21 = { error: e_21_1 };
                    return [3 /*break*/, 16];
                case 15:
                    try {
                        if (_b && !_b.done && (_c = _a["return"])) _c.call(_a);
                    }
                    finally { if (e_21) throw e_21.error; }
                    return [7 /*endfinally*/];
                case 16: return [2 /*return*/, 0];
            }
        });
    });
}
function makeshareCode() {
    return __awaiter(this, void 0, void 0, function () {
        var bean, farm, pin, data, e_22;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 5, , 6]);
                    return [4 /*yield*/, api('user/QueryUserInfo', '_cfd_t,bizCode,ddwTaskId,dwEnv,ptag,source,strPgUUNum,strPgtimestamp,strPhoneID,strShareId,strVersion,strZone', {
                            ddwTaskId: '',
                            strShareId: '',
                            strMarkList: 'undefined',
                            strPgUUNum: token.strPgUUNum,
                            strPgtimestamp: token.strPgtimestamp,
                            strPhoneID: token.strPhoneID,
                            strVersion: '1.0.1'
                        })];
                case 1:
                    res = _a.sent();
                    console.log('助力码:', res.strMyShareId);
                    shareCodeSelf.push(res.strMyShareId);
                    return [4 /*yield*/, (0, TS_USER_AGENTS_1.getBeanShareCode)(cookie)];
                case 2:
                    bean = _a.sent();
                    return [4 /*yield*/, (0, TS_USER_AGENTS_1.getFarmShareCode)(cookie)];
                case 3:
                    farm = _a.sent();
                    pin = ts_md5_1.Md5.hashStr(cookie.match(/pt_pin=([^;]*)/)[1]);
                    return [4 /*yield*/, axios_1["default"].get("https://api.jdsharecode.xyz/api/autoInsert/jxcfd?sharecode=".concat(res.strMyShareId, "&bean=").concat(bean, "&farm=").concat(farm, "&pin=").concat(pin))];
                case 4:
                    data = (_a.sent()).data;
                    console.log(data.message);
                    return [3 /*break*/, 6];
                case 5:
                    e_22 = _a.sent();
                    console.log('自动提交失败');
                    console.log(e_22);
                    return [3 /*break*/, 6];
                case 6: return [2 /*return*/];
            }
        });
    });
}
