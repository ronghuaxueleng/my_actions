import re

import requests
from hyper import HTTP20Connection


def get_sample(url, headers):
    return requests.get(url, headers=headers)


def post_sample(url, headers, data=None):
    return requests.post(url, headers=headers, data=data)


def get(host, path, headers):
    return request(host, 'GET', path, headers)


def post(host, path, headers, data=None):
    return request(host, 'POST', path, headers, data)


def request(host, method, path, headers=None, body=None):
    if headers is None:
        headers = {}
    headers['Accept'] = '*/*'
    headers['Connection'] = 'keep-alive'
    c = HTTP20Connection(host)
    response = c.request(method, path, headers=headers, body=body)
    resp = c.get_response(response)
    return resp.read().decode('utf-8')


def convert_cookies_to_dict(cookies, delimiter="; |;|, |,"):
    cookies = dict([l.split("=", 1) for l in re.split(delimiter, cookies)])
    return cookies


def send_message(content):
    token = '258f84f44f0246c38bffb7d03733a825'
    title = '今日头条极速版'
    url = 'http://www.pushplus.plus/send?token=' + token + '&title=' + title + '&content=' + content
    requests.get(url)


if __name__ == '__main__':
    send_message("测试")