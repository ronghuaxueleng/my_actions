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
exports.__esModule = true;
var axios_1 = require("axios");
var date_fns_1 = require("date-fns");
var TS_USER_AGENTS_1 = require("./TS_USER_AGENTS");
var UserName, index;
var cookie = '';
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var cookiesArr, i, _a, isLogin, nickName, data;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, TS_USER_AGENTS_1.requireConfig()];
                case 1:
                    cookiesArr = _b.sent();
                    i = 0;
                    _b.label = 2;
                case 2:
                    if (!(i < cookiesArr.length)) return [3 /*break*/, 11];
                    cookie = cookiesArr[i];
                    UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                    index = i + 1;
                    return [4 /*yield*/, TS_USER_AGENTS_1.TotalBean(cookie)];
                case 3:
                    _a = _b.sent(), isLogin = _a.isLogin, nickName = _a.nickName;
                    if (!isLogin) {
                        return [3 /*break*/, 10];
                    }
                    console.log("\n\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7" + index + "\u3011" + (nickName || UserName) + "\n");
                    _b.label = 4;
                case 4:
                    if (!1) return [3 /*break*/, 8];
                    if (!(new Date().getSeconds() < 30)) return [3 /*break*/, 5];
                    return [3 /*break*/, 8];
                case 5: return [4 /*yield*/, TS_USER_AGENTS_1.wait(100)];
                case 6:
                    _b.sent();
                    _b.label = 7;
                case 7: return [3 /*break*/, 4];
                case 8:
                    console.log('exchange()', date_fns_1.format(new Date(), 'hh:mm:ss:SSS'));
                    return [4 /*yield*/, axios_1["default"].get("https://car-member.jd.com/api/v1/user/exchange/bean/check?timestamp=" + Date.now(), {
                            headers: {
                                'Accept-Language': 'zh-cn',
                                'Accept': 'application/json, text/plain, */*',
                                'Origin': 'https://h5.m.jd.com',
                                'Referer': 'https://h5.m.jd.com/babelDiy/Zeus/44bjzCpzH9GpspWeBzYSqBA7jEtP/index.html',
                                'User-Agent': TS_USER_AGENTS_1["default"],
                                'ActivityId': '39443aee3ff74fcb806a6f755240d127',
                                'Host': 'car-member.jd.com',
                                'Cookie': cookie
                            }
                        })];
                case 9:
                    data = (_b.sent()).data;
                    console.log(data);
                    _b.label = 10;
                case 10:
                    i++;
                    return [3 /*break*/, 2];
                case 11: return [2 /*return*/];
            }
        });
    });
}
main().then();
