# -*- coding: utf-8 -*-
import time

import requests
import json


def download_model(token, pageNo):
    url = "https://liblib-api.vibrou.com/api/www/model/list?timestamp=1706278151632"

    payload = json.dumps({
        "pageNo": pageNo,
        "pageSize": 20,
        "uuid": "02749e73219936808ff45d707b2d01cf",
        "status": -2,
        "type": 0
    })
    headers = {
        'authority': 'liblib-api.vibrou.com',
        'accept': 'application/json, text/plain, */*',
        'accept-language': 'zh-CN,zh;q=0.9',
        'content-type': 'application/json',
        'dnt': '1',
        'origin': 'https://www.liblib.art',
        'referer': 'https://www.liblib.art/userpage/02749e73219936808ff45d707b2d01cf/publish',
        'sec-ch-ua': '"Chromium";v="119", "Not?A_Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'cross-site',
        'token': token,
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.6045.160 Safari/537.36',
        'webid': '1701652270086cvpnqgrl'
    }

    response = requests.request("POST", url, headers=headers, data=payload)

    data = json.loads(response.text)
    for model in data['data']['list']:
        url = f"https://liblib-api.vibrou.com/api/www/model/getByUuid/{model['uuid']}?timestamp=1706338164206"
        payload = {}
        response = requests.request("POST", url, headers=headers, data=payload)

        model_data = json.loads(response.text)
        for version in model_data['data']['versions']:
            url = "https://liblib-api.vibrou.com/api/www/community/downloadCheck?timestamp=1706338282409"
            payload = json.dumps({
                "uuid": model["uuid"],
                "cid": "1701652270086cvpnqgrl",
                "modelName": model["name"],
                "modelVersionId": version['uuid'],
                "modelId": model["id"]
            })

            response = requests.request("POST", url, headers=headers, data=payload)

            print(f"token:{token}, 模型[{model['name']}], 版本[{version['uuid']}], 运行结果：{response.text}")
            time.sleep(2)


if __name__ == '__main__':
    tokens = [
        'd1894681b7c5438b9051b840431e9b59',
        '3cc0cddb72874db49eb02f60d81fbf31',
        '5035e42609394bdfa3ddaee8b88a1b78',
        '66149bee12304248beb571d1c0d9e553',
        '5dfe53b85ed947a6a92586182768a84e'
    ]
    for pageNo in range(1, 5):
        for token in tokens:
            try:
                download_model(token, pageNo)
            except Exception as e:
                print(e)