
/*
18 10,18 * * * jd_ppdt.js
 */

const $ = new Env('超级品牌殿堂');
const notify = $.isNode() ? require('./sendNotify') : '';
const jdCookieNode = $.isNode() ? require('./jdCookie.js') : '';
let jdNotify = true;
//IOS等用户直接用NobyDa的jd cookie
let cookiesArr = [], cookie = '', message = '';
if ($.isNode()) {
    Object.keys(jdCookieNode).forEach((item) => {
        cookiesArr.push(jdCookieNode[item])
    })
    if (process.env.JD_DEBUG && process.env.JD_DEBUG === 'false') console.log = () => { };
} else {
    cookiesArr = [$.getdata('CookieJD'), $.getdata('CookieJD2'), ...jsonfomat($.getdata('CookiesJD') || "[]").map(item => item.cookie)].filter(item => !!item);
}
!(async () => {
    if (!cookiesArr[0]) {
        $.msg($.name, '【提示】请先获取京东账号一cookie\n直接使用NobyDa的京东签到获取', 'https://bean.m.jd.com/bean/signIndex.action', { "open-url": "https://bean.m.jd.com/bean/signIndex.action" });
        return;
    }
    for (let i = 0; i < cookiesArr.length; i++) {
        if (cookiesArr[i]) {
            cookie = cookiesArr[i];
            $.UserName = decodeURIComponent(cookie.match(/pt_pin=([^; ]+)(?=;?)/) && cookie.match(/pt_pin=([^; ]+)(?=;?)/)[1])
            $.index = i + 1;
            $.isLogin = true;
            $.nickName = '';
			$.ban='';
			$.donep='';
            $.UA = require('./USER_AGENTS').UARAM();
            //await TotalBean();
            console.log(`\n******开始【京东账号${$.index}】${$.nickName || $.UserName}*********\n`);
            if (!$.isLogin) {
                $.msg($.name, `【提示】cookie已失效`, `京东账号${$.index} ${$.nickName || $.UserName}\n请重新登录获取\nhttps://bean.m.jd.com/bean/signIndex.action`, { "open-url": "https://bean.m.jd.com/bean/signIndex.action" });
                if ($.isNode()) {
                    await notify.sendNotify(`${$.name}cookie已失效 - ${$.UserName}`, `京东账号${$.index} ${$.UserName}\n请重新登录获取cookie`);
                }
                continue
            }
            await xxx9();
            await $.wait(1000);					
            await xxx8();
            await $.wait(1000);			
            await xxx7();
            await $.wait(1000);
            await xxx1();
            if ($.ban) { console.log('风控，跳出'); continue };
            await $.wait(500);
            if ($.donep) continue;
            await xxx2();
            await $.wait(500);
            await xxx4();
            await $.wait(500);
            await xxx3();
            await $.wait(500);
            await xxx5();
            await $.wait(500);
            await xxx6();
            await $.wait(2000);



        }
    }
})()
    .catch((e) => {
        $.log('', `❌ ${$.name}, 失败! 原因: ${e}!`, '')
    })
    .finally(() => {
        $.done();
    })


async function xxx1() {
    let opt = {
        url: `https://api.m.jd.com/api?functionId=superBrandDoTask&appid=ProductZ4Brand&client=wh5&t=1674098907204&body=%7B%22source%22%3A%22hall_1111%22%2C%22activityId%22%3A1012465%2C%22encryptProjectId%22%3A%22JFMx7ke6h6KejTzCXQTfpNi8v1L%22%2C%22completionFlag%22%3A1%2C%22encryptAssignmentId%22%3A%22ZoP5xcMECBmUDGUxCzgEqauHHqw%22%2C%22assignmentType%22%3A0%2C%22actionType%22%3A0%7D`,
        headers: {
            'Origin': 'https://prodev.m.jd.com',
            'User-Agent': $.UA,
            'Cookie': cookie
        }
    }
    return new Promise(async (resolve) => {
        $.post(opt, async (err, resp, data) => {
            try {
                if (err) {
                    console.log(`${JSON.stringify(err)}`)
                    console.log(` API请求失败，请检查网路重试`)
                } else {
                    data = JSON.parse(data)
                    if (data.code == 0) {
                        if (data.data.bizCode == 0) {
                            if (data.data?.result?.rewards) {
                                if (data.data?.result?.rewards[0].awardType === 3) {
                                    console.log(` 恭喜获得 ${data.data?.result?.rewards[0].beanNum} 京豆`);
                                } else {
                                    console.log(JSON.stringify(data.data?.result?.rewards));
                                }
                            } else {
                                console.log(JSON.stringify(data.data?.result));
                            }
                        } else if (data.data.bizMsg.indexOf('风控') > -1) {
                            console.log(data.data.bizMsg);
                            $.ban = true;
                        } else if (data.data.bizMsg.indexOf('完成') > -1) {
                            console.log(data.data.bizMsg);
                            $.donep = true;
                        } else {
                            console.log(data.data.bizMsg);
                        }
                    } else {
                        console.log(data.msg)
                    }
                }
            } catch (e) {
                $.logErr(e, resp)
            } finally {
                resolve(data)
            }
        })
    })
}
async function xxx2() {
    let opt = {
        url: `https://api.m.jd.com/api?functionId=superBrandDoTask&appid=ProductZ4Brand&client=wh5&t=1673920844810&body=%7B%22source%22%3A%22hall_1111%22%2C%22activityId%22%3A1012471%2C%22completionFlag%22%3A1%2C%22encryptProjectId%22%3A%223MhsbG1ZeDpqjoEaU2SEw38gdavD%22%2C%22encryptAssignmentId%22%3A%22379wQ992MFewWwiKrkfrNfmtbVwH%22%2C%22assignmentType%22%3A0%2C%22actionType%22%3A0%7D`,
        headers: {
            'Origin': 'https://prodev.m.jd.com',
            'User-Agent': $.UA,
            'Cookie': cookie
        }
    }
    return new Promise(async (resolve) => {
        $.post(opt, async (err, resp, data) => {
            try {
                if (err) {
                    console.log(`${JSON.stringify(err)}`)
                    console.log(` API请求失败，请检查网路重试`)
                } else {
                    data = JSON.parse(data)
                    if (data.code == 0) {
                        if (data.data.bizCode == 0) {
                            if (data.data?.result?.rewards) {
                                if (data.data?.result?.rewards[0].awardType === 3) {
                                    console.log(` 恭喜获得 ${data.data?.result?.rewards[0].beanNum} 京豆`);
                                } else {
                                    console.log(JSON.stringify(data.data?.result?.rewards));
                                }
                            } else {
                                console.log(JSON.stringify(data.data?.result));
                            }
                        } else {
                            console.log(data.data.bizMsg);
                        }
                    } else {
                        console.log(data.msg)
                    }
                }
            } catch (e) {
                $.logErr(e, resp)
            } finally {
                resolve(data)
            }
        })
    })
}

async function xxx4() {
    let opt = {
        url: `https://api.m.jd.com/?client=wh5&appid=ProductZ4Brand&functionId=superBrandDoTask&t=1674697735260&body=%7B%22source%22:%22hall_1111%22,%22activityId%22:1012474,%22completionFlag%22:1,%22encryptProjectId%22:%222vMznPj56gd53UgquzZqE84h3Q8U%22,%22encryptAssignmentId%22:%223b2H8GRYmfj6YuqrBD2D44KGks8c%22,%22assignmentType%22:0,%22actionType%22:0%7D`,
        headers: {
            'Origin': 'https://prodev.m.jd.com',
            'User-Agent': $.UA,
            'Cookie': cookie
        }
    }
    return new Promise(async (resolve) => {
        $.post(opt, async (err, resp, data) => {
            try {
                if (err) {
                    console.log(`${JSON.stringify(err)}`)
                    console.log(` API请求失败，请检查网路重试`)
                } else {
                    data = JSON.parse(data)
                    if (data.code == 0) {
                        if (data.data.bizCode == 0) {
                            if (data.data?.result?.rewards) {
                                if (data.data?.result?.rewards[0].awardType === 3) {
                                    console.log(` 恭喜获得 ${data.data?.result?.rewards[0].beanNum} 京豆`);
                                } else {
                                    console.log(JSON.stringify(data.data?.result?.rewards));
                                }
                            } else {
                                console.log(JSON.stringify(data.data?.result));
                            }
                        } else {
                            console.log(data.data.bizMsg);
                        }
                    } else {
                        console.log(data.msg)
                    }
                }
            } catch (e) {
                $.logErr(e, resp)
            } finally {
                resolve(data)
            }
        })
    })
}

async function xxx3() {
    let opt = {
        url: `https://api.m.jd.com/api?functionId=superBrandDoTask&appid=ProductZ4Brand&client=wh5&t=1673920845164&body=%7B%22source%22%3A%22hall_1111%22%2C%22activityId%22%3A%221012353%22%2C%22encryptProjectId%22%3A%22mCqqcvGW1LKeAWqJtc6NwHGXK2u%22%2C%22completionFlag%22%3A1%2C%22encryptAssignmentId%22%3A%22H8VttZkAwM83dpETucHznqaNGAc%22%2C%22assignmentType%22%3A0%2C%22actionType%22%3A0%7D`,
        headers: {
            'Origin': 'https://prodev.m.jd.com',
            'User-Agent': $.UA,
            'Cookie': cookie
        }
    }
    return new Promise(async (resolve) => {
        $.post(opt, async (err, resp, data) => {
            try {
                if (err) {
                    console.log(`${JSON.stringify(err)}`)
                    console.log(` API请求失败，请检查网路重试`)
                } else {
                    data = JSON.parse(data)
                    if (data.code == 0) {
                        if (data.data.bizCode == 0) {
                            if (data.data?.result?.rewards) {
                                if (data.data?.result?.rewards[0].awardType === 3) {
                                    console.log(` 恭喜获得 ${data.data?.result?.rewards[0].beanNum} 京豆`);
                                } else {
                                    console.log(JSON.stringify(data.data?.result?.rewards));
                                }
                            } else {
                                console.log(JSON.stringify(data.data?.result));
                            }
                        } else {
                            console.log(data.data.bizMsg);
                        }
                    } else {
                        console.log(data.msg)
                    }
                }
            } catch (e) {
                $.logErr(e, resp)
            } finally {
                resolve(data)
            }
        })
    })
}

async function xxx5() {
    let opt = {
        url: `https://api.m.jd.com/?client=wh5&appid=ProductZ4Brand&functionId=superBrandDoTask&t=1674700703306&body=%7B%22source%22:%22hall_1111%22,%22activityId%22:1012472,%22completionFlag%22:1,%22encryptProjectId%22:%222pNsbQpP8Jq7byJAMiXcQdWN7gSu%22,%22encryptAssignmentId%22:%22479JiY1PCk3xVrLGA6fvt3VAxgY3%22,%22assignmentType%22:0,%22actionType%22:0%7D`,
        headers: {
            'Origin': 'https://prodev.m.jd.com',
            'User-Agent': $.UA,
            'Cookie': cookie
        }
    }
    return new Promise(async (resolve) => {
        $.post(opt, async (err, resp, data) => {
            try {
                if (err) {
                    console.log(`${JSON.stringify(err)}`)
                    console.log(` API请求失败，请检查网路重试`)
                } else {
                    data = JSON.parse(data)
                    if (data.code == 0) {
                        if (data.data.bizCode == 0) {
                            if (data.data?.result?.rewards.length != 0) {
                                if (data.data?.result?.rewards[0].awardType === 3) {
                                    console.log(` 恭喜获得 ${data.data?.result?.rewards[0].beanNum} 京豆`);
                                } else {
                                    console.log(JSON.stringify(data.data?.result?.rewards));
                                }
                            } else {
                                console.log(JSON.stringify(data.data?.result));
                            }
                        } else {
                            console.log(data.data.bizMsg);
                        }
                    } else {
                        console.log(data.msg)
                    }
                }
            } catch (e) {
                $.logErr(e, resp)
            } finally {
                resolve(data)
            }
        })
    })
}
async function xxx6() {
    let opt = {
        url: `https://api.m.jd.com/?client=wh5&appid=ProductZ4Brand&functionId=superBrandDoTask&t=1674780027902&body=%7B%22source%22:%22hall_1111%22,%22activityId%22:1012475,%22completionFlag%22:1,%22encryptProjectId%22:%2247yMVdNbddRfnKm5SKuUPfuid3LT%22,%22encryptAssignmentId%22:%223nrQJYLHKg3pHFWvd2oadunRbMWx%22,%22assignmentType%22:0,%22actionType%22:0%7D`,
        headers: {
            'Origin': 'https://prodev.m.jd.com',
            'User-Agent': $.UA,
            'Cookie': cookie
        }
    }
    return new Promise(async (resolve) => {
        $.post(opt, async (err, resp, data) => {
            try {
                if (err) {
                    console.log(`${JSON.stringify(err)}`)
                    console.log(` API请求失败，请检查网路重试`)
                } else {
                    data = JSON.parse(data)
                    if (data.code == 0) {
                        if (data.data.bizCode == 0) {
                            if (data.data?.result?.rewards.length != 0) {
                                if (data.data?.result?.rewards[0].awardType === 3) {
                                    console.log(` 恭喜获得 ${data.data?.result?.rewards[0].beanNum} 京豆`);
                                } else {
                                    console.log(JSON.stringify(data.data?.result?.rewards));
                                }
                            } else {
                                console.log(JSON.stringify(data.data?.result));
                            }
                        } else {
                            console.log(data.data.bizMsg);
                        }
                    } else {
                        console.log(data.msg)
                    }
                }
            } catch (e) {
                $.logErr(e, resp)
            } finally {
                resolve(data)
            }
        })
    })
}
async function xxx7() {
    let opt = {
        url: `https://api.m.jd.com/?client=wh5&appid=ProductZ4Brand&functionId=superBrandDoTask&t=1674865770750&body=%7B%22source%22:%22hall_1111%22,%22activityId%22:1012476,%22completionFlag%22:1,%22encryptProjectId%22:%222GRBptWGUbVNFwfZLW6AxDQHCDTo%22,%22encryptAssignmentId%22:%223F6VgHQjejVYZqetSSqdP45bYbuq%22,%22assignmentType%22:0,%22actionType%22:0%7D`,
        headers: {
            'Origin': 'https://prodev.m.jd.com',
            'User-Agent': $.UA,
            'Cookie': cookie
        }
    }
    return new Promise(async (resolve) => {
        $.post(opt, async (err, resp, data) => {
            try {
                if (err) {
                    console.log(`${JSON.stringify(err)}`)
                    console.log(` API请求失败，请检查网路重试`)
                } else {
                    data = JSON.parse(data)
                    if (data.code == 0) {
                        if (data.data.bizCode == 0) {
                            if (data.data?.result?.rewards.length != 0) {
                                if (data.data?.result?.rewards[0].awardType === 3) {
                                    console.log(` 恭喜获得 ${data.data?.result?.rewards[0].beanNum} 京豆`);
                                } else {
                                    console.log(JSON.stringify(data.data?.result?.rewards));
                                }
                            } else {
                                console.log(JSON.stringify(data.data?.result));
                            }
                        } else {
                            console.log(data.data.bizMsg);
                        }
                    } else {
                        console.log(data.msg)
                    }
                }
            } catch (e) {
                $.logErr(e, resp)
            } finally {
                resolve(data)
            }
        })
    })
}
async function xxx8() {
    let opt = {
        url: `https://api.m.jd.com/?client=wh5&appid=ProductZ4Brand&functionId=superBrandDoTask&t=1674924479339&body=%7B%22source%22:%22hall_1111%22,%22activityId%22:1012483,%22completionFlag%22:1,%22encryptProjectId%22:%222ZaVyRdxyCFSSt8hwT1h1zMwcPah%22,%22encryptAssignmentId%22:%223WbhiPoeV5qrLsEC1qq8HLnHLRSS%22,%22assignmentType%22:0,%22actionType%22:0%7D`,
        headers: {
            'Origin': 'https://prodev.m.jd.com',
            'User-Agent': $.UA,
            'Cookie': cookie
        }
    }
    return new Promise(async (resolve) => {
        $.post(opt, async (err, resp, data) => {
            try {
                if (err) {
                    console.log(`${JSON.stringify(err)}`)
                    console.log(` API请求失败，请检查网路重试`)
                } else {
                    data = JSON.parse(data)
                    if (data.code == 0) {
                        if (data.data.bizCode == 0) {
                            if (data.data?.result?.rewards.length != 0) {
                                if (data.data?.result?.rewards[0].awardType === 3) {
                                    console.log(` 恭喜获得 ${data.data?.result?.rewards[0].beanNum} 京豆`);
                                } else {
                                    console.log(JSON.stringify(data.data?.result?.rewards));
                                }
                            } else {
                                console.log(JSON.stringify(data.data?.result));
                            }
                        } else {
                            console.log(data.data.bizMsg);
                        }
                    } else {
                        console.log(data.msg)
                    }
                }
            } catch (e) {
                $.logErr(e, resp)
            } finally {
                resolve(data)
            }
        })
    })
}

async function xxx9() {
    let opt = {
        url: `https://api.m.jd.com/?client=wh5&appid=ProductZ4Brand&functionId=superBrandDoTask&t=1674924479339&body=%7B%22source%22:%22hall_1111%22,%22activityId%22:1012484,%22completionFlag%22:1,%22encryptProjectId%22:%222AN5xMLxaTnvp8ienwesrM8d3ksF%22,%22encryptAssignmentId%22:%223V5ANrek6PQBNSkjtgwPBhyGNey7%22,%22assignmentType%22:0,%22actionType%22:0%7D`,
        headers: {
            'Origin': 'https://prodev.m.jd.com',
            'User-Agent': $.UA,
            'Cookie': cookie
        }
    }
    return new Promise(async (resolve) => {
        $.post(opt, async (err, resp, data) => {
            try {
                if (err) {
                    console.log(`${JSON.stringify(err)}`)
                    console.log(` API请求失败，请检查网路重试`)
                } else {
                    data = JSON.parse(data)
                    if (data.code == 0) {
                        if (data.data.bizCode == 0) {
                            if (data.data?.result?.rewards.length != 0) {
                                if (data.data?.result?.rewards[0].awardType === 3) {
                                    console.log(` 恭喜获得 ${data.data?.result?.rewards[0].beanNum} 京豆`);
                                } else {
                                    console.log(JSON.stringify(data.data?.result?.rewards));
                                }
                            } else {
                                console.log(JSON.stringify(data.data?.result));
                            }
                        } else {
                            console.log(data.data.bizMsg);
                        }
                    } else {
                        console.log(data.msg)
                    }
                }
            } catch (e) {
                $.logErr(e, resp)
            } finally {
                resolve(data)
            }
        })
    })
}

function TotalBean() {
    return new Promise((resolve) => {
        const options = {
            url: 'https://plogin.m.jd.com/cgi-bin/ml/islogin',
            headers: {
                "Cookie": cookie,
                "referer": "https://h5.m.jd.com/",
                "User-Agent": $.UA,
            },
            timeout: 10000
        }
        $.get(options, (err, resp, data) => {
            try {
                if (data) {
                    data = JSON.parse(data);
                    if (data.islogin === "1") {
                    } else if (data.islogin === "0") {
                        $.isLogin = false;
                    }
                }
            } catch (e) {
                console.log(e);
            }
            finally {
                resolve();
            }
        });
    });
}
function showMsg() {
    return new Promise(resolve => {
        if (!jdNotify) {
            $.msg($.name, '', `${message}`);
        } else {
            $.log(`京东账号${$.index}${$.nickName}\n${message}`);
        }
        resolve()
    })
}
function safeGet(data) {
    try {
        if (typeof JSON.parse(data) == "object") {
            return true;
        }
    } catch (e) {
        console.log(e);
        console.log(`京东服务器访问数据为空，请检查自身设备网络情况`);
        return false;
    }
}
function jsonfomat(str) {
    if (typeof str == "string") {
        try {
            return JSON.parse(str);
        } catch (e) {
            console.log(e);
            $.msg($.name, '', '请勿随意在BoxJs输入框修改内容\n建议通过脚本去获取cookie')
            return [];
        }
    }
}
// prettier-ignore
function Env(t, e) { "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0); class s { constructor(t) { this.env = t } send(t, e = "GET") { t = "string" == typeof t ? { url: t } : t; let s = this.get; return "POST" === e && (s = this.post), new Promise((e, i) => { s.call(this, t, (t, s, r) => { t ? i(t) : e(s) }) }) } get(t) { return this.send.call(this.env, t) } post(t) { return this.send.call(this.env, t, "POST") } } return new class { constructor(t, e) { this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `🔔${this.name}, 开始!`) } isNode() { return "undefined" != typeof module && !!module.exports } isQuanX() { return "undefined" != typeof $task } isSurge() { return "undefined" != typeof $httpClient && "undefined" == typeof $loon } isLoon() { return "undefined" != typeof $loon } toObj(t, e = null) { try { return JSON.parse(t) } catch { return e } } toStr(t, e = null) { try { return JSON.stringify(t) } catch { return e } } getjson(t, e) { let s = e; const i = this.getdata(t); if (i) try { s = JSON.parse(this.getdata(t)) } catch { } return s } setjson(t, e) { try { return this.setdata(JSON.stringify(t), e) } catch { return !1 } } getScript(t) { return new Promise(e => { this.get({ url: t }, (t, s, i) => e(i)) }) } runScript(t, e) { return new Promise(s => { let i = this.getdata("@chavy_boxjs_userCfgs.httpapi"); i = i ? i.replace(/\n/g, "").trim() : i; let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout"); r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r; const [o, h] = i.split("@"), n = { url: `http://${h}/v1/scripting/evaluate`, body: { script_text: t, mock_type: "cron", timeout: r }, headers: { "X-Key": o, Accept: "*/*" } }; this.post(n, (t, e, i) => s(i)) }).catch(t => this.logErr(t)) } loaddata() { if (!this.isNode()) return {}; { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e); if (!s && !i) return {}; { const i = s ? t : e; try { return JSON.parse(this.fs.readFileSync(i)) } catch (t) { return {} } } } } writedata() { if (this.isNode()) { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e), r = JSON.stringify(this.data); s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r) } } lodash_get(t, e, s) { const i = e.replace(/\[(\d+)\]/g, ".$1").split("."); let r = t; for (const t of i) if (r = Object(r)[t], void 0 === r) return s; return r } lodash_set(t, e, s) { return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t) } getdata(t) { let e = this.getval(t); if (/^@/.test(t)) { const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : ""; if (r) try { const t = JSON.parse(r); e = t ? this.lodash_get(t, i, "") : e } catch (t) { e = "" } } return e } setdata(t, e) { let s = !1; if (/^@/.test(e)) { const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e), o = this.getval(i), h = i ? "null" === o ? null : o || "{}" : "{}"; try { const e = JSON.parse(h); this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i) } catch (e) { const o = {}; this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i) } } else s = this.setval(t, e); return s } getval(t) { return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null } setval(t, e) { return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null } initGotEnv(t) { this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar)) } get(t, e = (() => { })) { t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.get(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => { try { if (t.headers["set-cookie"]) { const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString(); s && this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar } } catch (t) { this.logErr(t) } }).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) })) } post(t, e = (() => { })) { if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.post(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) }); else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t)); else if (this.isNode()) { this.initGotEnv(t); const { url: s, ...i } = t; this.got.post(s, i).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) }) } } time(t, e = null) { const s = e ? new Date(e) : new Date; let i = { "M+": s.getMonth() + 1, "d+": s.getDate(), "H+": s.getHours(), "m+": s.getMinutes(), "s+": s.getSeconds(), "q+": Math.floor((s.getMonth() + 3) / 3), S: s.getMilliseconds() }; /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length))); for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length))); return t } msg(e = t, s = "", i = "", r) { const o = t => { if (!t) return t; if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? { "open-url": t } : this.isSurge() ? { url: t } : void 0; if ("object" == typeof t) { if (this.isLoon()) { let e = t.openUrl || t.url || t["open-url"], s = t.mediaUrl || t["media-url"]; return { openUrl: e, mediaUrl: s } } if (this.isQuanX()) { let e = t["open-url"] || t.url || t.openUrl, s = t["media-url"] || t.mediaUrl; return { "open-url": e, "media-url": s } } if (this.isSurge()) { let e = t.url || t.openUrl || t["open-url"]; return { url: e } } } }; if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))), !this.isMuteLog) { let t = ["", "==============📣系统通知📣=============="]; t.push(e), s && t.push(s), i && t.push(i), console.log(t.join("\n")), this.logs = this.logs.concat(t) } } log(...t) { t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator)) } logErr(t, e) { const s = !this.isSurge() && !this.isQuanX() && !this.isLoon(); s ? this.log("", `❗️${this.name}, 错误!`, t.stack) : this.log("", `❗️${this.name}, 错误!`, t) } wait(t) { return new Promise(e => setTimeout(e, t)) } done(t = {}) { const e = (new Date).getTime(), s = (e - this.startTime) / 1e3; this.log("", `🔔${this.name}, 结束! 🕛 ${s} 秒`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t) } }(t, e) }