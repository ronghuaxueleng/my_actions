import json
import sys
import time

import requests

if __name__ == "__main__":
    url = "http://zlc1.chaoyi996.com/{}?code={}"
    # proxies = {"http": "http://127.0.0.1:7890", "https": "http://127.0.0.1:7890", }
    proxies = {}
    sharedCodesJsonPath = sys.argv[1]
    with open(sharedCodesJsonPath, "rb") as load_f:
        rows = json.load(load_f)
        for row in rows:
            print(
                "{}, {}验证提交，codes：{}".format(
                    time.strftime("%Y-%m-%d %H:%M:%S", time.localtime()),
                    row["name"],
                    row["codes"],
                )
            )
            for code in row["codes"].split("&"):
                reqUrl = url.format(row["cmd"][1:], code)
                print("验证提交URL：{}".format(reqUrl))
                data = requests.get(reqUrl, proxies=proxies)
                print("提交结果：{}".format(data.text))
                time.sleep(5)
