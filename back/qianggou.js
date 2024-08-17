const { exit } = require("process");

const $ = new Env("抢购");
const notify = $.isNode() ? require("./sendNotify") : "";
//Node.js用户请在jdCookie.js处填写京东ck;
const jdCookieNode = $.isNode() ? require("./jdCookie.js") : "";

//IOS等用户直接用NobyDa的jd cookie
let cookiesArr = [],
  cookie = "";
if ($.isNode()) {
  Object.keys(jdCookieNode).forEach((item) => {
    cookiesArr.push(jdCookieNode[item]);
  });
  if (process.env.JD_DEBUG && process.env.JD_DEBUG === "false")
    console.log = () => {};
} else {
  cookiesArr = [
    $.getdata("CookieJD"),
    $.getdata("CookieJD2"),
    ...jsonParse($.getdata("CookiesJD") || "[]").map((item) => item.cookie),
  ].filter((item) => !!item);
}
!(async () => {
  if (!cookiesArr[0]) {
    $.msg(
      $.name,
      "【提示】请先获取京东账号一cookie\n直接使用NobyDa的京东签到获取",
      "https://bean.m.jd.com/bean/signIndex.action",
      { "open-url": "https://bean.m.jd.com/bean/signIndex.action" }
    );
    return;
  }
  console.log(`本地时间与京东服务器时间差(毫秒)：${await get_diff_time()}`);
  for (let i = 0; i < cookiesArr.length; i++) {
    if (cookiesArr[i]) {
      cookie = cookiesArr[i];
      $.UserName = decodeURIComponent(
        cookie.match(/pt_pin=(.+?);/) && cookie.match(/pt_pin=(.+?);/)[1]
      );
      $.index = i + 1;
      $.beanCount = 0;
      $.incomeBean = 0;
      $.expenseBean = 0;
      $.errorMsg = "";
      $.isLogin = true;
      $.nickName = "";
      $.message = "";
      $.balance = 0;
      $.expiredBalance = 0;
      console.log(`\n开始【京东账号${$.index}】${$.nickName || $.UserName}\n`);
      if (!$.isLogin) {
        $.msg(
          $.name,
          `【提示】cookie已失效`,
          `京东账号${$.index} ${
            $.nickName || $.UserName
          }\n请重新登录获取\nhttps://bean.m.jd.com/bean/signIndex.action`,
          { "open-url": "https://bean.m.jd.com/bean/signIndex.action" }
        );

        if ($.isNode()) {
          await notify.sendNotify(
            `${$.name}cookie已失效 - ${$.UserName}`,
            `京东账号${$.index} ${$.UserName}\n请重新登录获取cookie`
          );
        }
        continue;
      }
      await doBuy();
    }
  }
})()
  .catch((e) => {
    $.log("", `❌ ${$.name}, 失败! 原因: ${e}!`, "");
  })
  .finally(() => {
    $.done();
  });

async function doBuy() {
  var currentDate = new Date();
  var fullYear = currentDate.getFullYear();
  var month = currentDate.getMonth() + 1;
  var day = currentDate.getDay();
  var runTime = new Date(fullYear + "-" + month + "-" + day + " 11:59:59.850");
  if (new Date() - runTime < 0) {
    console.log("未到抢购时间");
    await wait(150);
    doBuy();
  } else if (new Date() - runTime > 300000) {
    console.log("抢购时间已过");
  }
  else {
    await genToken();
    await processMid();
  }
}

function jdUrl(functionId, body) {
  return {
    url: `https://api.m.jd.com/client.action?functionId=${functionId}&clientVersion=9.4.2&client=android&uuid=57f6ef51bf0724ab&st=1614139202389&sign=18c2bad066ae7dec74f316e65b36915c&sv=101`,
    body: body,
    headers: {
      Host: "api.m.jd.com",
      accept: "*/*",
      "Accept-Encoding": "gzip, deflate, br",
      "User-Agent": "okhttp/3.12.1",
      "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
      Cookie: cookie,
    },
  };
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

async function genToken() {
  return new Promise((resolve) => {
    let body = `body=%7B%22action%22%3A%22to%22%2C%22to%22%3A%22https%253A%252F%252Fdivide.jd.com%252Fuser_routing%253FskuId%253D100012043978%22%7D&`;
    console.log(jdUrl("genToken", body));
    $.post(jdUrl("genToken", body), async (err, resp, data) => {
      try {
        if (err) {
          console.log(`${$.name} API请求失败，请检查网路重试`);
        } else {
          if (safeGet(data)) {
            data = JSON.parse(data);
            console.log(data);
            $.tokenKey = data["tokenKey"];
          }
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve(data);
      }
    });
  });
}

async function processMid() {
  return new Promise((resolve) => {
    const options = {
      url: `https://un.m.jd.com/cgi-bin/app/appjmp?tokenKey=${$.tokenKey}&to=https%3A%2F%2Fdivide.jd.com%2Fuser_routing%3FskuId%3D100012043978&lbs=%7B%22lat%22%3A%2239.936564%22%2C%22lng%22%3A%22116.358497%22%2C%22provinceId%22%3A%221%22%2C%22cityId%22%3A%222801%22%2C%22districtId%22%3A%2254778%22%2C%22provinceName%22%3A%22%E5%8C%97%E4%BA%AC%22%2C%22cityName%22%3A%22%E8%A5%BF%E5%9F%8E%E5%8C%BA%22%2C%22districtName%22%3A%22%E6%96%B0%E8%A1%97%E5%8F%A3%E8%A1%97%E9%81%93%22%7D`,
      followRedirect: false,
      headers: {
        Host: "un.m.jd.com",
        Accept:
          "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,image/tpg,*/*;q=0.8",
        "Accept-Encoding": "gzip, deflate, br",
        "Accept-Language": "zh-cn",
        Connection: "keep-alive",
        Cookie: cookie,
        "User-Agent": $.isNode()
          ? process.env.JD_USER_AGENT
            ? process.env.JD_USER_AGENT
            : require("./USER_AGENTS").USER_AGENT
          : $.getdata("JDUA")
          ? $.getdata("JDUA")
          : "jdapp;iPhone;9.2.2;14.2;%E4%BA%AC%E4%B8%9C/9.2.2 CFNetwork/1206 Darwin/20.1.0",
      },
    };
    $.get(options, async (err, resp, data) => {
      try {
        if (err) {
          console.log(err);
          console.log(`${$.name} API请求失败，请检查网路重试`);
        } else {
          let headers = resp.headers;
          // https://divide.jd.com/user_routing?skuId=100012043978&mid=ZkI6gqAfYHWH89UP3l-XPlJWSY2Yg-oo8bIRaZNO0mo&lng=116.358497&lat=39.936564&sid=5ceaaa27a8740b41e6f77c87de81ce2w
          let location = headers["location"];
          console.log(location);
          $.mid = getString(location, "mid");
          if ($.mid) {
            options.url = location;
            options.headers.Host = "divide.jd.com";
            $.get(options, async (err, resp, data) => {
              try {
                if (err) {
                  console.log(err);
                  console.log(`${$.name} API请求失败，请检查网路重试`);
                } else {
                  let headers = resp.headers;
                  let location = headers["location"];
                  console.log(location);
                  options.url = location;
                  options.headers.Host = "marathon.jd.com";
                  $.get(options, async (err, resp, data) => {
                    let headers = resp.headers;
                    let location = headers["location"];
                    console.log(location);
                    if (
                      location ==
                        "https://marathon.jd.com/mobile/koFail.html" ||
                      !location
                    ) {
                      await wait(150);
                      await processMid();
                    } else {
                      await BeginSeckill();
                      await GetBuyInfo();
                      console.log($.maotai);
                      let initParam = JSON.parse($.maotai);
                      console.log(initParam.invoiceInfo);
                      if (initParam.invoiceInfo) {
                        await BuyMaotai();
                      } else {
                        await wait(150);
                        await processMid();
                      }
                    }
                  });
                }
              } catch (e) {
                $.logErr(e, resp);
              } finally {
                resolve(data);
              }
            });
          } else {
            console.log(`抢购未开始，150毫秒后重试`);
            await wait(150);
            await processMid();
          }
        }
      } catch (e) {
        console.error(e);
      } finally {
        resolve(data);
      }
    });
  });
}

async function BeginSeckill() {
  return new Promise((resolve) => {
    let now = Date.now() + "";
    now = now.substring(0, now.length - 3);
    const JDBUrl = {
      url:
        "https://marathon.jd.com/seckill.action?skuId=100012043978&num=1&rid=" +
        now,
      headers: {
        Host: "marathon.jd.com",
        Accept:
          "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,image/tpg,*/*;q=0.8",
        "Accept-Encoding": "gzip, deflate, br",
        "Accept-Language": "zh-cn",
        Connection: "keep-alive",
        Cookie: cookie,
        "User-Agent": $.isNode()
          ? process.env.JD_USER_AGENT
            ? process.env.JD_USER_AGENT
            : require("./USER_AGENTS").USER_AGENT
          : $.getdata("JDUA")
          ? $.getdata("JDUA")
          : "jdapp;iPhone;9.2.2;14.2;%E4%BA%AC%E4%B8%9C/9.2.2 CFNetwork/1206 Darwin/20.1.0",
      },
    };
    $.get(JDBUrl, function (error, response, data) {
      try {
        if (error) {
          console.log(error);
          console.log(`${$.name} API请求失败，请检查网路重试`);
        } else {
          console.log("===========BeginSeckill==================");
          console.log(JDBUrl.url);
          const headers = response.headers;
          let cookies = headers["set-cookie"];
          let seckill100012043978 = getCookie(cookies, "seckill100012043978");
          resolve(seckill100012043978);
        }
      } catch (e) {
        console.error(e);
      } finally {
        resolve(data);
      }
    });
  });
}

async function GetBuyInfo() {
  return new Promise((resolve) => {
    const JDBUrl = {
      url: "https://marathon.jd.com/seckillnew/orderService/init.action",
      headers: {
        Host: "marathon.jd.com",
        Accept:
          "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,image/tpg,*/*;q=0.8",
        "Accept-Encoding": "gzip, deflate, br",
        "Accept-Language": "zh-cn",
        Connection: "keep-alive",
        Cookie: cookie,
        "User-Agent": $.isNode()
          ? process.env.JD_USER_AGENT
            ? process.env.JD_USER_AGENT
            : require("./USER_AGENTS").USER_AGENT
          : $.getdata("JDUA")
          ? $.getdata("JDUA")
          : "jdapp;iPhone;9.2.2;14.2;%E4%BA%AC%E4%B8%9C/9.2.2 CFNetwork/1206 Darwin/20.1.0",
      },
      body: "sku=100012043978&num=1&isModifyAddress=false",
    };
    $.post(JDBUrl, function (error, response, data) {
      try {
        if (error) {
          console.log(error);
          console.log(`${$.name} API请求失败，请检查网路重试`);
        } else {
          console.log("===========GetBuyInfo==================");
          $.maotai = data;
          resolve(data);
        }
      } catch (e) {
        console.error(e);
      } finally {
        resolve();
      }
    });
  });
}

async function BuyMaotai() {
  return new Promise((resolve) => {
    console.log("===========BuyMaotai==================");
    let initParam = JSON.parse($.maotai);
    const { invoiceInfo, addressList, token } = initParam;
    let address = addressList[0];
    const param = {
      num: initParam.buyNum,
      addressId: address.id,
      yuShou: true,
      isModifyAddress: false,
      name: address.name,
      provinceId: address.provinceId,
      provinceName: address.provinceName,
      cityId: address.cityId,
      cityName: address.cityName,
      countyId: address.countyId,
      countyName: address.countyName,
      townId: address.townId,
      townName: address.townName,
      addressDetail: address.addressDetail,
      mobile: address.mobile,
      mobileKey: address.mobileKey,
      email: address.email,
      invoiceTitle: invoiceInfo.invoiceTitle,
      invoiceCompanyName: invoiceInfo.invoiceCompany,
      invoiceContent: invoiceInfo.invoiceContentType,
      invoiceTaxpayerNO: "",
      invoiceEmail: invoiceInfo.invoiceEmail,
      invoicePhone: invoiceInfo.invoicePhone,
      invoicePhoneKey: invoiceInfo.invoicePhoneKey,
      invoice: true,
      password: "",
      codTimeType: 3,
      paymentType: 4,
      overseas: 0,
      phone: "",
      areaCode: "",
      token: token,
    };
    console.log("初始化参数", "参数构成：" + JSON.stringify(param));
    let postParam = encodeURIComponent(JSON.stringify(param));
    console.log("编码参数", "参数构成：" + postParam);
    const JDBUrl = {
      url:
        "https://marathon.jd.com/seckillnew/orderService/submitOrder.action?skuId=100012043978",
      followRedirect: false,
      headers: {
        Host: "marathon.jd.com",
        Accept: "application/json, text/plain, */*",
        "Accept-Encoding": "gzip, deflate, br",
        "Accept-Language": "zh-cn",
        Connection: "keep-alive",
        "content-type": "application/x-www-form-urlencoded",
        Cookie: `${cookie}mid=${$.mid};`,
        Referer:
          "https://marathon.jd.com/seckillM/seckill.action?skuId=100012043978&num=2&rid=1614139203",
        "User-Agent": $.isNode()
          ? process.env.JD_USER_AGENT
            ? process.env.JD_USER_AGENT
            : require("./USER_AGENTS").USER_AGENT
          : $.getdata("JDUA")
          ? $.getdata("JDUA")
          : "jdapp;iPhone;9.2.2;14.2;%E4%BA%AC%E4%B8%9C/9.2.2 CFNetwork/1206 Darwin/20.1.0",
      },
      body: postParam,
    };
    console.log(JDBUrl.headers.Cookie);
    $.post(JDBUrl, function (error, response, data) {
      try {
        if (error) {
          throw new Error(error);
        } else {
          console.log(response);
        }
      } catch (e) {
        $.logErr(e, response);
      } finally {
        resolve();
      }
    });
  });
}

function getJDServerTime() {
  return new Promise((resolve) => {
    // console.log(Date.now())
    $.get(
      {
        url: "https://a.jd.com//ajax/queryServerData.html",
        headers: {
          "User-Agent":
            "Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1 Edg/87.0.4280.88",
        },
      },
      async (err, resp, data) => {
        try {
          if (err) {
            console.log(`${JSON.stringify(err)}`);
            console.log(`${$.name} 获取京东服务器时间失败，请检查网路重试`);
          } else {
            data = JSON.parse(data);
            $.jdTime = data["serverTime"];
            // console.log(data['serverTime']);
            // console.log(data['serverTime'] - Date.now())
          }
        } catch (e) {
          $.logErr(e, resp);
        } finally {
          resolve($.jdTime);
        }
      }
    );
  });
}

async function get_diff_time() {
  // console.log(`本机时间戳 ${Date.now()}`)
  // console.log(`京东服务器时间戳 ${await getJDServerTime()}`)
  return Date.now() - (await getJDServerTime());
}

// 函数实现，参数单位 毫秒 ；
function wait(ms) {
  return new Promise((resolve) => setTimeout(() => resolve(), ms));
}

function getCookie(cookie, name) {
  var prefix = name + "=";
  var start = cookie.lastIndexOf(prefix);

  if (start == -1) {
    return null;
  }

  var end = cookie.indexOf(";", start + prefix.length);
  if (end == -1) {
    end = cookie.length;
  }

  var value = cookie.substring(start + prefix.length, end);
  return unescape(value);
}

function getString(str, name) {
  var prefix = name + "=";
  var start = str.lastIndexOf(prefix);

  if (start == -1) {
    return null;
  }

  var end = str.indexOf("&", start + prefix.length);
  if (end == -1) {
    end = str.length;
  }

  var value = str.substring(start + prefix.length, end);
  return unescape(value);
}

function jsonParse(str) {
  if (typeof str == "string") {
    try {
      return JSON.parse(str);
    } catch (e) {
      console.log(e);
      $.msg(
        $.name,
        "",
        "请勿随意在BoxJs输入框修改内容\n建议通过脚本去获取cookie"
      );
      return [];
    }
  }
}

// prettier-ignore
function Env(t, e) {
    "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0);
    class s {
        constructor(t) { this.env = t }
        send(t, e = "GET") { t = "string" == typeof t ? { url: t } : t; let s = this.get; return "POST" === e && (s = this.post), new Promise((e, i) => { s.call(this, t, (t, s, r) => { t ? i(t) : e(s) }) }) }
        get(t) { return this.send.call(this.env, t) }
        post(t) { return this.send.call(this.env, t, "POST") }
    }
    return new class {
        constructor(t, e) { this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `🔔${this.name}, 开始!`) }
        isNode() { return "undefined" != typeof module && !!module.exports }
        isQuanX() { return "undefined" != typeof $task }
        isSurge() { return "undefined" != typeof $httpClient && "undefined" == typeof $loon }
        isLoon() { return "undefined" != typeof $loon }
        toObj(t, e = null) { try { return JSON.parse(t) } catch { return e } }
        toStr(t, e = null) { try { return JSON.stringify(t) } catch { return e } }
        getjson(t, e) {
            let s = e;
            const i = this.getdata(t);
            if (i) try { s = JSON.parse(this.getdata(t)) } catch {}
            return s
        }
        setjson(t, e) { try { return this.setdata(JSON.stringify(t), e) } catch { return !1 } }
        getScript(t) { return new Promise(e => { this.get({ url: t }, (t, s, i) => e(i)) }) }
        runScript(t, e) {
            return new Promise(s => {
                let i = this.getdata("@chavy_boxjs_userCfgs.httpapi");
                i = i ? i.replace(/\n/g, "").trim() : i;
                let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
                r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r;
                const [o, h] = i.split("@"), n = { url: `http://${h}/v1/scripting/evaluate`, body: { script_text: t, mock_type: "cron", timeout: r }, headers: { "X-Key": o, Accept: "*/*" } };
                this.post(n, (t, e, i) => s(i))
            }).catch(t => this.logErr(t))
        }
        loaddata() {
            if (!this.isNode()) return {}; {
                this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
                const t = this.path.resolve(this.dataFile),
                    e = this.path.resolve(process.cwd(), this.dataFile),
                    s = this.fs.existsSync(t),
                    i = !s && this.fs.existsSync(e);
                if (!s && !i) return {}; { const i = s ? t : e; try { return JSON.parse(this.fs.readFileSync(i)) } catch (t) { return {} } }
            }
        }
        writedata() {
            if (this.isNode()) {
                this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
                const t = this.path.resolve(this.dataFile),
                    e = this.path.resolve(process.cwd(), this.dataFile),
                    s = this.fs.existsSync(t),
                    i = !s && this.fs.existsSync(e),
                    r = JSON.stringify(this.data);
                s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r)
            }
        }
        lodash_get(t, e, s) {
            const i = e.replace(/\[(\d+)\]/g, ".$1").split(".");
            let r = t;
            for (const t of i)
                if (r = Object(r)[t], void 0 === r) return s;
            return r
        }
        lodash_set(t, e, s) { return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t) }
        getdata(t) {
            let e = this.getval(t);
            if (/^@/.test(t)) {
                const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : "";
                if (r) try {
                    const t = JSON.parse(r);
                    e = t ? this.lodash_get(t, i, "") : e
                } catch (t) { e = "" }
            }
            return e
        }
        setdata(t, e) {
            let s = !1;
            if (/^@/.test(e)) {
                const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e), o = this.getval(i), h = i ? "null" === o ? null : o || "{}" : "{}";
                try {
                    const e = JSON.parse(h);
                    this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i)
                } catch (e) {
                    const o = {};
                    this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i)
                }
            } else s = this.setval(t, e);
            return s
        }
        getval(t) { return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null }
        setval(t, e) { return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null }
        initGotEnv(t) { this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar)) }
        get(t, e = (() => {})) {
            t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.get(t, (t, s, i) => {!t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => {
                const { statusCode: s, statusCode: i, headers: r, body: o } = t;
                e(null, { status: s, statusCode: i, headers: r, body: o }, o)
            }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => {
                try {
                    if (t.headers["set-cookie"]) {
                        const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
                        s && this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar
                    }
                } catch (t) { this.logErr(t) }
            }).then(t => {
                const { statusCode: s, statusCode: i, headers: r, body: o } = t;
                e(null, { status: s, statusCode: i, headers: r, body: o }, o)
            }, t => {
                const { message: s, response: i } = t;
                e(s, i, i && i.body)
            }))
        }
        post(t, e = (() => {})) {
            if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.post(t, (t, s, i) => {!t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) });
            else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => {
                const { statusCode: s, statusCode: i, headers: r, body: o } = t;
                e(null, { status: s, statusCode: i, headers: r, body: o }, o)
            }, t => e(t));
            else if (this.isNode()) {
                this.initGotEnv(t);
                const { url: s, ...i } = t;
                this.got.post(s, i).then(t => {
                    const { statusCode: s, statusCode: i, headers: r, body: o } = t;
                    e(null, { status: s, statusCode: i, headers: r, body: o }, o)
                }, t => {
                    const { message: s, response: i } = t;
                    e(s, i, i && i.body)
                })
            }
        }
        time(t, e = null) { const s = e ? new Date(e) : new Date; let i = { "M+": s.getMonth() + 1, "d+": s.getDate(), "H+": s.getHours(), "m+": s.getMinutes(), "s+": s.getSeconds(), "q+": Math.floor((s.getMonth() + 3) / 3), S: s.getMilliseconds() }; /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length))); for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length))); return t }
        msg(e = t, s = "", i = "", r) {
            const o = t => {
                if (!t) return t;
                if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? { "open-url": t } : this.isSurge() ? { url: t } : void 0;
                if ("object" == typeof t) {
                    if (this.isLoon()) {
                        let e = t.openUrl || t.url || t["open-url"],
                            s = t.mediaUrl || t["media-url"];
                        return { openUrl: e, mediaUrl: s }
                    }
                    if (this.isQuanX()) {
                        let e = t["open-url"] || t.url || t.openUrl,
                            s = t["media-url"] || t.mediaUrl;
                        return { "open-url": e, "media-url": s }
                    }
                    if (this.isSurge()) { let e = t.url || t.openUrl || t["open-url"]; return { url: e } }
                }
            };
            if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))), !this.isMuteLog) {
                let t = ["", "==============📣系统通知📣=============="];
                t.push(e), s && t.push(s), i && t.push(i), console.log(t.join("\n")), this.logs = this.logs.concat(t)
            }
        }
        log(...t) { t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator)) }
        logErr(t, e) {
            const s = !this.isSurge() && !this.isQuanX() && !this.isLoon();
            s ? this.log("", `❗️${this.name}, 错误!`, t.stack) : this.log("", `❗️${this.name}, 错误!`, t)
        }
        wait(t) { return new Promise(e => setTimeout(e, t)) }
        done(t = {}) {
            const e = (new Date).getTime(),
                s = (e - this.startTime) / 1e3;
            this.log("", `🔔${this.name}, 结束! 🕛 ${s} 秒`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t)
        }
    }(t, e)
}
