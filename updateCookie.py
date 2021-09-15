import os
import re
import time

from utils.cookie import sync_check_cookie
from utils.db import Jd
from utils.jd import save_pt_key, get_ptkey_by_pin
from utils.wskey import wstopt


def updateCookie():
    print("===========================开始更新cookie====================================")
    print("当前时间"  + time.strftime('%Y-%m-%d %H:%M:%S', time.localtime()))
    configpath = os.path.join(os.path.split(os.path.realpath(__file__))[0], 'config', 'config.sh')
    if not os.path.exists(configpath):
        configpath = os.path.join('/jd', 'config', 'config.sh')
    pinReg = re.compile('Cookie(?P<num>\d+)="pt_key=(?P<pt_key>\S+?);?pt_pin=(?P<pt_pin>\S+?);"')
    ptReg = re.compile('pt_key=(?P<pt_key>\S+?);?pt_pin=(?P<pt_pin>\S+?);')
    tempBlockCookieReg = re.compile('^TempBlockCookie="(?P<tempBlockCookie>.*?)"')
    tempBlockCookies = []
    with open(configpath, 'r', encoding='UTF-8') as f:
        for line in f:
            tempBlockCookieRegMatch = tempBlockCookieReg.search(line)
            if tempBlockCookieRegMatch is not None:
                blocks = tempBlockCookieRegMatch.groupdict()
                tempBlockCookie = blocks.get("tempBlockCookie")
                tempBlockCookies = tempBlockCookie.split(" ")

    with open(configpath, 'r', encoding='UTF-8') as f:
        file_data = ""
        for line in f:
            pinRegMatch = pinReg.search(line)
            if pinRegMatch is not None:
                pins = pinRegMatch.groupdict()
                pin = pins.get("pt_pin")
                num = pins.get("num")
                if num not in tempBlockCookies:
                    ptkey = get_ptkey_by_pin(pin)
                    ptRegMatch = ptReg.search(ptkey)
                    pins = ptRegMatch.groupdict()
                    isLogin = sync_check_cookie(pins)
                    if isLogin is False:
                        query = Jd.select().where(Jd.pin == pin)
                        if query.exists():
                            print("=======================原始cookie========================")
                            print(line)
                            wskey = query.dicts().get().get("wskey")
                            ws = "pin={};wskey={};".format(pin, wskey)
                            token = wstopt(ws)
                            save_pt_key(pin, token)
                            cookie = 'Cookie{}="{}"'.format(num, token)
                            print("=======================更新后cookie========================")
                            print(cookie)
                            file_data += cookie + "\n"
                        else:
                            file_data += line
                    else:
                        file_data += line
                else:
                    file_data += line
            else:
                file_data += line

    with open(configpath, "w", encoding="utf-8") as f:
        f.write(file_data)

    print("===========================更新cookie结束====================================")
    print("当前时间" + time.strftime('%Y-%m-%d %H:%M:%S', time.localtime()))


if __name__ == '__main__':
    updateCookie()
