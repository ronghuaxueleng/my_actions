# -*- coding: utf-8 -*-
import datetime

import requests
import json


def handle(token):
    url = "https://liblib-api.vibrou.com/gateway/sd-api/generate/image/history"

    payload = json.dumps({
        "pageSize": 80,
        "pageNo": 1,
        "fromTime": datetime.datetime.now().strftime("%Y-%m-%d 00:00:00")
    })
    headers = {
        'authority': 'liblib-api.vibrou.com',
        'accept': 'application/json, text/plain, */*',
        'accept-language': 'zh-CN,zh;q=0.9',
        'content-type': 'application/json',
        'dnt': '1',
        'origin': 'https://www.liblib.art',
        'referer': 'https://www.liblib.art/v4/editor',
        'sec-ch-ua': '"Chromium";v="119", "Not?A_Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'cross-site',
        'token': token,
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.6045.160 Safari/537.36'
    }

    response = requests.request("POST", url, headers=headers, data=payload)

    idList = []
    data = json.loads(response.text)
    for img in data['data']['list']:
        idList.append(img['id'])

    url = "https://liblib-api.vibrou.com/gateway/sd-api/generate/image/delete"

    payload = json.dumps({
        "idList": idList
    })

    response = requests.request("POST", url, headers=headers, data=payload)

    print(response.text)


if __name__ == '__main__':
    tokens = [
        'd1894681b7c5438b9051b840431e9b59',
        '3cc0cddb72874db49eb02f60d81fbf31',
        '5035e42609394bdfa3ddaee8b88a1b78',
        '66149bee12304248beb571d1c0d9e553',
        '5dfe53b85ed947a6a92586182768a84e'
    ]
    for token in tokens:
        handle(token)
