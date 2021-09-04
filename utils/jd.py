import re

from db import Jd
from logger import logger
from utils import send_message

is_legal_header_name = re.compile(rb'[^:\s][^:\r\n]*').fullmatch

'''
存储用户请求数据
'''

users = {}
cookieReg = re.compile('pin=(?P<pin>\S+?);.*?wskey=(?P<wskey>\S+?);')


def save_jd_pin(flow):
    headers_json = dict(flow.request.headers.items())
    cookie = headers_json.get("cookie")
    regMatch = cookieReg.match(cookie)
    cookies = regMatch.groupdict()
    pin = cookies.get("pin")
    wskey = cookies.get("wskey")
    if pin is not None and wskey is not None:
        query = Jd.select().where(Jd.pin == pin)
        if query.exists():
            Jd.update(
                pin=pin,
                wskey=wskey,
            ).where(Jd.pin == pin).execute()
            logger.info("更新京东用户【{}】信息".format(pin))
            send_message("更新京东用户【{}】信息".format(pin))
        else:
            Jd.insert(
                pin=pin,
                wskey=wskey,
            ).execute()
            logger.info("添加京东用户【{}】信息".format(pin))
            send_message("添加京东用户【{}】信息".format(pin))
