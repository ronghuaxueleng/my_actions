"use strict";
exports.__esModule = true;
exports.zjdTool = exports.init = void 0;
var date_fns_1 = require("date-fns");
var CryptoJS = require('crypto-js');
var token, genKey, fp;
function init(_fp, _token, _genKey) {
    token = _token;
    genKey = _genKey;
    fp = _fp;
}
exports.init = init;
// @ts-ignore
var _0xodg = 'jsjiami.com.v6', _0xodg_ = ['‮_0xodg'], _0xfed2 = [_0xodg, 'HcKpFTRPB8Okw54=', 'ZSjCkXXCrQg=', 'fTLDvcKFw6HDrzJp', 'asOZIsOowojDmQ==', 'X8OFwr/CncKXFMKvFQ==', 'K1wVYsKs', 'ajLDgMKSw7LDsg==', 'wrMkLBHDt3c=', 'wrbDpnoJUw==', 'U8KXM8KOwqc7', 'YhvCpzA=', 'w6XClMKJ', 'EMO4w4tcw58=', 'wpnCp8OHNww=', 'OFszSMKpNHt9e8OBVmZoRsOEdxNNVQ==', 'dR7CpktZOg==', 'P8KuTcOpY2fDuDtQeXccwp0=', 'wpLCqEDCgcK0', 'w5MRwpc=', 'a8OZKMOy', 'GsKyNClTCcOjw59+', 'EsO2w7Rdw4gyR8Kp', 'w55iwrAxLQ==', 'wpNjw64+eg==', 'w6vDmGHDm8Ot', 'byjDgMKSw6fDrzNgJMKZ', 'MAbDuQ==', 'eTzDhsK3w6s=', 'asKcw5k3woU=', 'JAoMwqh+', 'FDTDhcKTDA==', 'QcOFwoXChw==', 'BWzCtsKSw7A=', 'fsO2w7vDicK1L8Otwp8=', 'JcOHw5djw6c=', 'I8KrZsO1Vl0rw7w=', 'jxFQSLOsjixlami.comqS.uQRv6=='];
if (function (_0x397417, _0x3e38b2, _0x574208) { function _0x5c4b71(_0x4c6a26, _0x1e166d, _0x4a7fd3, _0x4828e2, _0x42c6c3, _0x2896ed) { _0x1e166d = _0x1e166d >> 0x8, _0x42c6c3 = 'po'; var _0x11a9e5 = 'shift', _0x62d00a = 'push', _0x2896ed = '‮'; if (_0x1e166d < _0x4c6a26) {
    while (--_0x4c6a26) {
        _0x4828e2 = _0x397417[_0x11a9e5]();
        if (_0x1e166d === _0x4c6a26 && _0x2896ed === '‮' && _0x2896ed['length'] === 0x1) {
            _0x1e166d = _0x4828e2, _0x4a7fd3 = _0x397417[_0x42c6c3 + 'p']();
        }
        else if (_0x1e166d && _0x4a7fd3['replace'](/[xFQSLOxlqSuQR=]/g, '') === _0x1e166d) {
            _0x397417[_0x62d00a](_0x4828e2);
        }
    }
    _0x397417[_0x62d00a](_0x397417[_0x11a9e5]());
} return 0xd0dcd; } ; return _0x5c4b71(++_0x3e38b2, _0x574208) >> _0x3e38b2 ^ _0x574208; }(_0xfed2, 0x14f, 0x14f00), _0xfed2) {
    _0xodg_ = _0xfed2['length'] ^ 0x14f;
}
;
function _0x1eda(_0x430ef9, _0x388138) { _0x430ef9 = ~~'0x'['concat'](_0x430ef9['slice'](0x1)); var _0x265854 = _0xfed2[_0x430ef9]; if (_0x1eda['QTcleZ'] === undefined) {
    (function () { var _0x4b4fab = typeof window !== 'undefined' ? window : typeof process === 'object' && typeof require === 'function' && typeof global === 'object' ? global : this; var _0x2b1268 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='; _0x4b4fab['atob'] || (_0x4b4fab['atob'] = function (_0x5b6205) { var _0x324822 = String(_0x5b6205)['replace'](/=+$/, ''); for (var _0x30597e = 0x0, _0x2509dd, _0x2fe755, _0x2f3d32 = 0x0, _0x3a9468 = ''; _0x2fe755 = _0x324822['charAt'](_0x2f3d32++); ~_0x2fe755 && (_0x2509dd = _0x30597e % 0x4 ? _0x2509dd * 0x40 + _0x2fe755 : _0x2fe755, _0x30597e++ % 0x4) ? _0x3a9468 += String['fromCharCode'](0xff & _0x2509dd >> (-0x2 * _0x30597e & 0x6)) : 0x0) {
        _0x2fe755 = _0x2b1268['indexOf'](_0x2fe755);
    } return _0x3a9468; }); }());
    function _0x318bdc(_0x578097, _0x388138) { var _0x48cbf7 = [], _0x1763a = 0x0, _0x47c98d, _0x380f54 = '', _0x1bb200 = ''; _0x578097 = atob(_0x578097); for (var _0x3bd66a = 0x0, _0xd0846d = _0x578097['length']; _0x3bd66a < _0xd0846d; _0x3bd66a++) {
        _0x1bb200 += '%' + ('00' + _0x578097['charCodeAt'](_0x3bd66a)['toString'](0x10))['slice'](-0x2);
    } _0x578097 = decodeURIComponent(_0x1bb200); for (var _0x551514 = 0x0; _0x551514 < 0x100; _0x551514++) {
        _0x48cbf7[_0x551514] = _0x551514;
    } for (_0x551514 = 0x0; _0x551514 < 0x100; _0x551514++) {
        _0x1763a = (_0x1763a + _0x48cbf7[_0x551514] + _0x388138['charCodeAt'](_0x551514 % _0x388138['length'])) % 0x100;
        _0x47c98d = _0x48cbf7[_0x551514];
        _0x48cbf7[_0x551514] = _0x48cbf7[_0x1763a];
        _0x48cbf7[_0x1763a] = _0x47c98d;
    } _0x551514 = 0x0; _0x1763a = 0x0; for (var _0x2fcb74 = 0x0; _0x2fcb74 < _0x578097['length']; _0x2fcb74++) {
        _0x551514 = (_0x551514 + 0x1) % 0x100;
        _0x1763a = (_0x1763a + _0x48cbf7[_0x551514]) % 0x100;
        _0x47c98d = _0x48cbf7[_0x551514];
        _0x48cbf7[_0x551514] = _0x48cbf7[_0x1763a];
        _0x48cbf7[_0x1763a] = _0x47c98d;
        _0x380f54 += String['fromCharCode'](_0x578097['charCodeAt'](_0x2fcb74) ^ _0x48cbf7[(_0x48cbf7[_0x551514] + _0x48cbf7[_0x1763a]) % 0x100]);
    } return _0x380f54; }
    _0x1eda['FrbCdQ'] = _0x318bdc;
    _0x1eda['ZZcemZ'] = {};
    _0x1eda['QTcleZ'] = !![];
} var _0x3bf5b8 = _0x1eda['ZZcemZ'][_0x430ef9]; if (_0x3bf5b8 === undefined) {
    if (_0x1eda['HDAmKI'] === undefined) {
        _0x1eda['HDAmKI'] = !![];
    }
    _0x265854 = _0x1eda['FrbCdQ'](_0x265854, _0x388138);
    _0x1eda['ZZcemZ'][_0x430ef9] = _0x265854;
}
else {
    _0x265854 = _0x3bf5b8;
} return _0x265854; }
;
function zjdTool(_0x463940) { var _0x1a8afb = { 'pahFx': function (_0x1b6238, _0x11d6e0) { return _0x1b6238 + _0x11d6e0; }, 'yhjcZ': function (_0x5d2c82, _0x54de22) { return _0x5d2c82 + _0x54de22; }, 'ZOwGe': _0x1eda('‫0', 'haNq'), 'ISLYG': _0x1eda('‫1', 'Hy@y'), 'tNuYi': _0x1eda('‮2', '#t%z'), 'WmINj': _0x1eda('‮3', 'm&)S'), 'hXnTT': _0x1eda('‫4', '05C]'), 'OCEma': 'applet', 'DxILw': _0x1eda('‮5', 'KOM$'), 'MHJKS': 'vvipclub_distributeBean_startAssist', 'yikJF': function (_0x2385ba, _0x2f90b7, _0x4cb6c1) { return _0x2385ba(_0x2f90b7, _0x4cb6c1); }, 'PPDbM': function (_0x27f1cd, _0x41eb00, _0x344c79, _0x1f3d85, _0x2b7706, _0x364c6c) { return _0x27f1cd(_0x41eb00, _0x344c79, _0x1f3d85, _0x2b7706, _0x364c6c); }, 'rdRCs': _0x1eda('‮6', 'A9Sa'), 'mJgsU': _0x1eda('‫7', 'ghO&') }; var _0x4427ff = Date['now'](); var _0x531cfb = [{ 'key': _0x1eda('‮8', '#hW6'), 'value': CryptoJS['SHA256'](JSON[_0x1eda('‫9', 'zcMs')](_0x463940))[_0x1eda('‫a', 'Hy@y')]() }, { 'key': _0x1a8afb[_0x1eda('‫b', 'NzQl')], 'value': _0x1a8afb[_0x1eda('‫c', 'EBxA')] }, { 'key': _0x1a8afb['hXnTT'], 'value': _0x1a8afb[_0x1eda('‮d', 'A9Sa')] }, { 'key': _0x1a8afb['DxILw'], 'value': '1.0.0' }, { 'key': _0x1eda('‮e', 'nL)C'), 'value': _0x1a8afb['MHJKS'] }, { 'key': 't', 'value': _0x4427ff['toString']() }]; var _0x2be3b4 = _0x531cfb[_0x1eda('‫f', 'N4Ew')](function (_0x310059) { return _0x1a8afb[_0x1eda('‫10', 'nL)C')](_0x1a8afb[_0x1eda('‫11', 'y1H%')](_0x310059[_0x1a8afb[_0x1eda('‮12', '4nGq')]], ':'), _0x310059[_0x1a8afb[_0x1eda('‮13', 'N4Ew')]]); })[_0x1eda('‫14', '4$3^')]('&'); var _0x1c0a65 = _0x1a8afb[_0x1eda('‫15', 'bfh@')](date_fns_1.format, _0x4427ff, 'yyyyMMddhhmmssSSS'); var _0x582bf6 = _0x1a8afb['PPDbM'](genKey, token, fp[_0x1eda('‮16', '$OKR')](), _0x1c0a65['toString'](), _0x1eda('‫17', 'y1H%'), CryptoJS)[_0x1eda('‫18', 'rZI3')](); var _0x3f5460 = CryptoJS['HmacSHA256'](_0x2be3b4, _0x582bf6['toString']())[_0x1eda('‫19', 'zcMs')](); return [''[_0x1eda('‫1a', '!Bhj')](_0x1c0a65[_0x1eda('‫1b', 'nL)C')]()), ''[_0x1eda('‫1c', '#hW6')](fp[_0x1eda('‮1d', '4$3^')]()), ''['concat'](_0x1a8afb[_0x1eda('‫1e', 'm&)S')]), ''[_0x1eda('‮1f', 'nL)C')](token), ''[_0x1eda('‫20', 'fya6')](_0x3f5460), _0x1a8afb[_0x1eda('‮21', 'cBJs')], ''[_0x1eda('‫22', 'SZ3N')](_0x4427ff['toString']())][_0x1eda('‮23', 'CZnM')](';'); }
exports.zjdTool = zjdTool;
;
_0xodg = 'jsjiami.com.v6';
