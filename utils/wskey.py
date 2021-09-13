import json
import re
import uuid

import requests

requests.packages.urllib3.disable_warnings()


def genToken(wsCookie):
    url = "https://api.jds.codes/gentoken"
    body = {"url": "https://home.m.jd.com/myJd/newhome.action"}
    headers = {
        "user-agent": "Mozilla/5.0 (Windows NT 6.3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.93 Safari/537.36",
        "Content-Type": "application/json"
    }
    r = requests.post(url, headers=headers, data=json.dumps(body))
    r = json.loads(r.text)
    data = r["data"]["sign"].split("&")
    jduuid = data[1]
    clientVersion = data[3]
    client = data[2]
    sign = data[4] + "&" + data[5] + "&" + data[6]
    url = "https://api.m.jd.com/client.action?functionId=genToken&%s&%s&%s&%s" % (clientVersion, client, jduuid, sign)
    headers = {
        "Host": 'api.m.jd.com',
        "Cookie": wsCookie,
        "accept": '*/*',
        "referer": '',
        'user-agent': "okhttp/3.12.1;jdmall;apple;version/9.4.0;build/88830;screen/1440x3007;os/11;network/wifi;" + str(
            uuid.uuid4()),
        'accept-language': 'zh-Hans-CN;q=1, en-CN;q=0.9',
        'content-type': 'application/x-www-form-urlencoded;',
    }
    r = requests.post(url, headers=headers,
                      data="body=%7B%22to%22%3A%20%22https%3A//home.m.jd.com/myJd/newhome.action%22%2C%20%22action%22%3A%20%22to%22%7D")
    r = json.loads(r.text)["tokenKey"]
    return r


def getJDCookie(tokenKey):
    url = "https://un.m.jd.com/cgi-bin/app/appjmp?tokenKey=%s&to=https://home.m.jd.com/myJd/newhome.action" % tokenKey
    headers = {
        "Connection": 'Keep-Alive',
        'Content-Type': 'application/x-www-form-urlencoded',
        "Accept": 'application/json, text/plain, */*',
        'Accept-Language': 'zh-cn',
        "User-Agent": 'okhttp/3.12.1;jdmall;apple;version/9.4.0;build/88830;screen/1440x3007;os/11;network/wifi;' + str(
            uuid.uuid4())
    }
    r = requests.get(url, headers=headers, allow_redirects=False, )
    pt_pin = re.findall(r"pt_pin=(.*?);", str(r.headers))[0]
    pt_key = re.findall(r"pt_key=(.*?);", str(r.headers))[0]
    return "pt_key=" + pt_key + ";pt_pin=" + pt_pin + ";"


def wstopt(wskey):
    try:
        token = genToken(wskey)
        r = getJDCookie(token)
        return r
    except:
        return "error"


if __name__ == '__main__':
    wskey='pin=jd_631a576f1bd43;wskey=AAJg089PAEAo2-ha1M7R27aHvDOv3BJMsVUjBCO2shlU4kGWFiqaYaHkSr2HdMsPYFuGAmyX7RqluBzsfNuZ3huEMtWuwH1M;'
    pt=wstopt(wskey)
    print(pt)
