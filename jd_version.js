"use strict";
/**
 * 仓库可更新提醒
 * 仅通知，不会自动更新
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
exports.__esModule = true;
var axios_1 = require("axios");
var child_process_1 = require("child_process");
var sendNotify_1 = require("./sendNotify");
!(function () { return __awaiter(void 0, void 0, void 0, function () {
    var cwd, localVersion, remote;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                cwd = '.';
                if (process.env.HOSTNAME === 'qinglong') {
                    cwd = '/ql/repo/JDHelloWorld_jd_scripts';
                }
                localVersion = (0, child_process_1.execSync)("git rev-parse HEAD", { cwd: cwd }).toString().trim();
                console.log('local ', localVersion);
                return [4 /*yield*/, githubVersion()];
            case 1:
                remote = _a.sent();
                console.log('remote', remote);
                if (!(remote.version && remote.version !== localVersion)) return [3 /*break*/, 3];
                return [4 /*yield*/, (0, sendNotify_1.sendNotify)('JDHelloWorld new commit', "\u6709\u65B0\u7248\u672C\u4E86\n".concat(remote.commit))];
            case 2:
                _a.sent();
                _a.label = 3;
            case 3: return [2 /*return*/];
        }
    });
}); })();
function githubVersion() {
    return __awaiter(this, void 0, void 0, function () {
        var config, data, e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    config = { timeout: 5000 };
                    if (process.env.ProxyUrl) {
                        Object.assign(config, {
                            proxy: {
                                host: process.env.ProxyUrl.match(/https?:\/\/(.*):/)[1],
                                port: parseInt(process.env.ProxyUrl.match(/https?:.*:(\d+)/)[1])
                            }
                        });
                    }
                    return [4 /*yield*/, axios_1["default"].get('https://github.com/JDHelloWorld/jd_scripts/commits/main', config)];
                case 1:
                    data = (_a.sent()).data;
                    return [2 /*return*/, {
                            version: data.match(/<a.*commit\/(.*)" class="d-none js-permalink-shortcut" data-hotkey="y">Permalink<\/a>/)[1],
                            commit: data.match(/<a class="Link--primary text-bold js-navigation-open markdown-title" data-pjax="true" href="\/JDHelloWorld\/jd_scripts\/commit\/.*">(.*)<\/a>/)[1]
                        }];
                case 2:
                    e_1 = _a.sent();
                    return [2 /*return*/, {
                            version: '',
                            commit: ''
                        }];
                case 3: return [2 /*return*/];
            }
        });
    });
}
