import functools
import logging
import logging.handlers

# 日志配置
import re

from toutiao.toutiao import save_jd_pin

logger = logging.getLogger()
logger.setLevel(logging.INFO)
formatter = logging.Formatter('%(asctime)s - %(levelname)s: %(message)s')
console_handler = logging.StreamHandler()
console_handler.setFormatter(formatter)
logger.addHandler(console_handler)
file_handler = logging.handlers.RotatingFileHandler("mproxy.log", maxBytes=10485760, backupCount=5, encoding="utf-8")
file_handler.setFormatter(formatter)
logger.addHandler(file_handler)

'''
    异常捕捉
'''


def log_exception(fn):
    @functools.wraps(fn)
    def wrapper(*args, **kwargs):
        try:
            fn(*args, **kwargs)
        except Exception as e:
            logging.exception("[Error in {}] msg: {}".format(__name__, str(e)))
            raise

    return wrapper


'''
    抓包监听
'''


class mproxy:

    @log_exception
    def request(self, flow):
        if 'api.m.jd.com' in flow.request.host:
            save_jd_pin(flow)

addons = [
    mproxy()
]
