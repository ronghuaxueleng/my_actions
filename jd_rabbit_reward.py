'''
new Env('小魔方抽奖');
变量: RabbitToken, XmfRewardList
export RabbitToken="token值"
export XmfRewardList="兑换需要的魔方数量，多个用英文的,分割，默认全部兑换"

log剩余次数大于1499方可使用
'''

try:
    import requests
    import Crypto
except ImportError:
    import shutil
    import os

    print("缺依赖，尝试进行修复，也可手动修复： pip3 install requests pycryptodome")
    os.system('pip3 install pycryptodome requests')

from MR_util.xmf_util import main


if __name__ == '__main__':
    main(True)
