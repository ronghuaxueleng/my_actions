import logging
import logging.handlers

'''
日志模块
'''

LOG_FILENAME = 'mitm.log'


class NoRunningFilter(logging.Filter):
    def filter(self, record):
        return not record.msg.startswith('Running job')


my_filter = NoRunningFilter()
logger = logging.getLogger("jd")


def set_logger():
    logger.setLevel(logging.INFO)
    formatter = logging.Formatter('%(asctime)s - %(levelname)s: %(message)s')
    console_handler = logging.StreamHandler()
    console_handler.setFormatter(formatter)
    logger.addHandler(console_handler)
    file_handler = logging.handlers.RotatingFileHandler(
        LOG_FILENAME, maxBytes=10485760, backupCount=5, encoding="utf-8")
    file_handler.setFormatter(formatter)
    logger.addHandler(file_handler)
    logger.addFilter(my_filter)

set_logger()
