import json
import base64
import requests


class QingLong():
    def __init__(self, ql_config):
        json_config = json.loads(ql_config)

        self.host = f"http://{json_config['host']}"
        self.client_id = json_config['ClientID']
        self.client_secret = json_config['ClientSecret']
        self.token = None
        self.task_id = []

        self.header = {
            'Host': f'{json_config["host"]}',
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.71 Safari/537.36 Edg/94.0.992.38'
        }

    def run(self):
        # 获取token，启动任务
        if not self.get_qinglong_token():
            print("获取token失败")
            return False

        if not self.get_jd_cookie_list():
            print("获取任务id失败")
            return False

        return True

    def get_qinglong_token(self):
        if not self.host and not self.client_id and not self.client_secret:
            print("参数无效")
            return False

        url = self.host + "/open/auth/token"
        data = {
            "client_id": self.client_id,
            "client_secret": self.client_secret
        }
        response = self.request_get_method(url, data)
        if response["code"] == 200:
            self.token = response["data"]["token"]
            return True
        else:
            print(response)
            print("认证失败,退出")
            return False

    def get_jd_cookie_list(self):
        '''获取任务列表，并筛选出指定的名称任务id'''
        url = f"{self.host}/open/envs?searchValue=JD_COOKIE"
        response = self.request_get_method(url=url)
        if response["code"] == 200:
            with open(".env",'w') as f: # 如果filename不存在会自动创建， 'w'表示写数据，写之前会清空文件中的原有数据！
                f.write("JD_COOKIE='" + "&".join([cookie["value"] for cookie in response["data"]]) + "'\nFRUIT_ID='qMaMVvvj9A_PDRBSFcuoKRY_fI1QBuQbCCn2HHVcEtU'")
            return True
        return False

    def request_get_method(self, url, params=None):
        '''
        青龙的get API
        :param url:
        :param params:
        :return:
        '''
        if self.token:
            self.header.update({"Authorization": f"Bearer {self.token}"})
        response = requests.get(url=url, params=params, headers=self.header, timeout=3)
        response_json = response.json()
        return response_json

    def request_post_method(self, url, data=None):
        '''
        青龙的post API
        :param url:
        :param data:
        :return:
        '''
        if self.token:
            self.header.update({"Authorization": f"Bearer {self.token}"})
        response = requests.post(url=url, json=data, headers=self.header, timeout=3)
        response_json = response.json()
        # print("request_post_method青龙响应：", response_json)
        return response_json


if __name__ == "__main__":
    config_base64 = "eyJob3N0IjoiMTkyLjE0NC4yMTUuMjE4OjU2ODAiLCJDbGllbnRJRCI6Ijg3LVF2azRIay1uYiIsIkNsaWVudFNlY3JldCI6Im4tZnhzZXFhUVJFNkYzckNsS28wRjFybCJ9"
    config_json = str(base64.b64decode(config_base64), 'utf-8')
    QingLong(config_json).run()