import os
import re

from utils.db import Jd
from utils.wspt import getToken

configpath = os.path.join(os.path.split(os.path.realpath(__file__))[0], 'config', 'config.sh')
pinReg = re.compile('pt_key=\S+;?pt_pin=(?P<pin>\S+?);')
with open(configpath, 'r', encoding='UTF-8') as f:
    file_data = ""
    for line in f:
        regMatch = pinReg.search(line)
        if regMatch is not None:
            pins = regMatch.groupdict()
            pin = pins.get("pin")
            query = Jd.select().where(Jd.pin == pin)
            if query.exists():
                wskey = query.dicts().get().get("wskey")
                ws = "pin={};wskey={};".format(pin, wskey)
                token = getToken(ws)
                file_data += re.sub(pinReg, token, line)
            else:
                file_data += line
        else:
            file_data += line

with open(configpath, "w", encoding="utf-8") as f:
    f.write(file_data)