
/*
入口：https://prodev.m.jd.com/mall/active/4JVvmjx2XwTx7cB64eAFPds1xCox/index.html
点赞5次抽奖1-5豆，完成后瓜分都池；
定时随机！
updatetime:2022/11/14 
*/

const $ = new Env('短视频点赞抽奖');
const dylan = require('./function/dylan.js')
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
	cookiesArr = [$.getdata('CookieJD'), $.getdata('CookieJD2'), ...jsonParse($.getdata('CookiesJD') || "[]").map(item => item.cookie)].filter(item => !!item);
}
let fff = Math.random()+1;
!(async () => {
	if (!cookiesArr[0]) {
		$.msg($.name, '【提示】请先获取京东账号一cookie\n直接使用NobyDa的京东签到获取', 'https://bean.m.jd.com/bean/signIndex.action', { "open-url": "https://bean.m.jd.com/bean/signIndex.action" });
		return;
	}
	for (let i = 0; i < 15; i++) {
		if (cookiesArr[i]) {
			cookie = cookiesArr[i];
			$.UserName = decodeURIComponent(cookie.match(/pt_pin=([^; ]+)(?=;?)/) && cookie.match(/pt_pin=([^; ]+)(?=;?)/)[1])
			$.index = i + 1;
			$.isLogin = true;
			$.nickName = '';
			UA = require('./USER_AGENTS').UARAM();
			await TotalBean();
			console.log(`\n******开始【京东账号${$.index}】${$.nickName || $.UserName}*********\n`);
			if (!$.isLogin) {
				$.msg($.name, `【提示】cookie已失效`, `京东账号${$.index} ${$.nickName || $.UserName}\n请重新登录获取\nhttps://bean.m.jd.com/bean/signIndex.action`, { "open-url": "https://bean.m.jd.com/bean/signIndex.action" });
				if ($.isNode()) {
					await notify.sendNotify(`${$.name}cookie已失效 - ${$.UserName}`, `京东账号${$.index} ${$.UserName}\n请重新登录获取cookie`);
				}
				continue
			}
			$.hotnum = 0;
			for (let i = 0; i < 2; i++) {
				if ($.hotnum > 1) fff = Math.random()+1;
				let x = 'recommend';
				let y = 0;
				(i == 1) ? (x = 'joined', y = 1) : '';
				await homepage(x);
				await $.wait(1000);
				if ($.listData == null) continue;
				for (let item of $.listData) {
					if ($.hotnum > 0) fff = Math.random()+1;
                    if ($.hotnum > 1) break;
					if (item.remainGradNum == 0) continue;
					console.log('\n开始主题：'+item.subjectTitle);
                    UA = require('./USER_AGENTS').UARAM();
					await channelBff_querySubject(y + 1, item.subjectId);
					await $.wait(1000);
					for (let j of $.contentList) {
						if ($.hotnum > 0) fff = Math.random()+1;
                        if ($.hotnum > 1) break;
						//console.log(j.contentId, item.subjectId);
						await subject_interactive_done(j.contentId, item.subjectId);
						await $.wait(parseInt(Math.random() * 3000 + 3000, 10))
					}
					await $.wait(1000);
				}
			}
			await $.wait(2000)
		}
	}
})()
	.catch((e) => {
		$.log('', `❌ ${$.name}, 失败! 原因: ${e}!`, '')
	})
	.finally(() => {
		$.done();
	})



async function channelBff_querySubject(page, id) {
	return new Promise(async (resolve) => {
		$.post(taskUrl('channelBff_querySubject', { "page": page, "pageSize": "15", "scene": "", "subjectId": id, "tabId": "-1", "tabType": "2", "topContentId": "", "topContents": "" }), async (err, resp, data) => {
			try {
				if (err) {
					console.log(`${JSON.stringify(err)}`)
					console.log(` API请求失败，请检查网路重试`)
				} else {
					data = JSON.parse(data)
					if (data.busiCode == '0') {
						//console.log(data)
						$.contentList = data.result.subjectVo.contentList;
					} else {
						console.log(data.message)
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

async function subject_interactive_get(cid, sid) {
	return new Promise(async (resolve) => {
		$.post(taskUrl('subject_interactive_get', '{"contentId":"272271439","monitorSurce":"videoDetail","style":11,"subjectId":"10002535"}'), async (err, resp, data) => {
			try {
				if (err) {
					console.log(`${JSON.stringify(err)}`)
					console.log(` API请求失败，请检查网路重试`)
				} else {
					data = JSON.parse(data)
					console.log(data);
					if (data.busiCode == '0') {

					} else {
						console.log(data.message)
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

async function subject_interactive_done(cid, sid) {
	return new Promise(async (resolve) => {
		$.post(taskUrl('subject_interactive_done', `{"contentId":"${cid}","subjectId":"${sid}"}`), async (err, resp, data) => {
			try {
				if (err) {
					console.log(`${JSON.stringify(err)}`)
					console.log(` API请求失败，请检查网路重试`)
				} else {
					data = JSON.parse(data)
					//console.log(data);
					if (data.busiCode == '0') {
						if (data.data.rewardsInfo) {
							console.log('获得：' + data.data.rewardsInfo.rewardMsg)
						} else {
							console.log(data.message)
						}
						$.hotnum = 0;
					} else if (data.message.indexOf('火爆') > -1) {
						console.log('火爆了，跳出');
                        await $.wait(10000);
						$.hotnum++;
					} else {
						console.log(data.message)
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

async function homepage(type) {
	let opt = {
		url: `https://api.m.jd.com/subject_challenge_main`,
		body: `appid=contenth5_common&functionId=subject_challenge_main&body={"page":1,"pageSize":10,"tabSource":"${type}"}&client=h5&clientVersion=11.3.0`,
		headers: {
			'Host': 'api.m.jd.com',
			'Origin': 'https://h5.m.jd.com',
			'Referer': 'https://h5.m.jd.com/',
			'Content-Type': 'application/x-www-form-urlencoded',
			'User-Agent': UA,
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
					if (data.busiCode == 0) {
						$.listData = data.result.data.listData;
					} else {
						console.log(data.message)
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

function taskUrl(fn, body) {
	body = dylan.getbody(fn, body, fff);
	//console.log(body)
	return {
		url: `https://api.m.jd.com/client.action?functionId=${fn}&${body}`,
		headers: {
			'Content-Type': 'application/json',
			'User-Agent': UA,
			'Cookie': cookie
		},
		timeout: 10000
	}
}

function TotalBean() {
	return new Promise(async resolve => {
		const options = {
			url: "https://wq.jd.com/user_new/info/GetJDUserInfoUnion?sceneval=2",
			headers: {
				Host: "wq.jd.com",
				Accept: "*/*",
				Connection: "keep-alive",
				Cookie: cookie,
				"User-Agent": $.isNode() ? (process.env.JD_USER_AGENT ? process.env.JD_USER_AGENT : (require('./USER_AGENTS').USER_AGENT)) : ($.getdata('JDUA') ? $.getdata('JDUA') : "jdapp;iPhone;9.4.4;14.3;network/4g;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1"),
				"Accept-Language": "zh-cn",
				"Referer": "https://home.m.jd.com/myJd/newhome.action?sceneval=2&ufc=&",
				"Accept-Encoding": "gzip, deflate, br"
			}
		}
		$.get(options, (err, resp, data) => {
			try {
				if (err) {
					$.logErr(err)
				} else {
					if (data) {
						data = JSON.parse(data);
						if (data['retcode'] === 1001) {
							$.isLogin = false;
							return;
						}
						if (data['retcode'] === 0 && data.data && data.data.hasOwnProperty("userInfo")) {
							$.nickName = data.data.userInfo.baseInfo.nickname;
						}
					} else {
						console.log('京东服务器返回空数据');
					}
				}
			} catch (e) {
				$.logErr(e)
			} finally {
				resolve();
			}
		})
	})
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
function jsonParse(str) {
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