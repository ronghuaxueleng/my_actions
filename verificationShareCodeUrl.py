import json
import sys
import time

import requests

if __name__ == '__main__':
    url = "http://api.sharecode.ga/api/report?db={}&code="
    proxies = {"http": "http://127.0.0.1:7890", "https": "http://127.0.0.1:7890", }
    sharedCodesJsonPath = sys.argv[1]
    with open(sharedCodesJsonPath, 'rb') as load_f:
        rows = json.load(load_f)
        for row in rows:
            print("{}, {}验证提交提交,waiting".format(time.strftime("%Y-%m-%d %H:%M:%S", time.localtime()), row['name']))
            for code in "".split("&"):
                requests.get(url.format(row['cmd'].replace("/", ""), code), proxies=proxies)