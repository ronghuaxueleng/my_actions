import json
import time

from telethon import TelegramClient
import socks
import os
import sys


if __name__ == '__main__':
    phone = sys.argv[1]
    password = sys.argv[2]
    api_id = sys.argv[3]
    api_hash = sys.argv[4]
    sharedCodesJsonPath = sys.argv[5]

    host = '127.0.0.1'
    port = 7891
    proxy = (socks.SOCKS5, host, port)

    sessionFilePath = os.getenv('sessionFilePath') if os.getenv('sessionFilePath') else ''
    sessionFilePath = sessionFilePath + "/sharecode/"
    if not os.path.exists(sessionFilePath):
        os.makedirs(sessionFilePath)

    client = TelegramClient(sessionFilePath + phone, api_id, api_hash, proxy=proxy).start(phone=phone, password=password)

    async def main():
        await client.get_me()
        with open(sharedCodesJsonPath, 'rb') as load_f:
            rows = json.load(load_f)
            for row in rows:
                print("{}, {}提交,waiting".format(time.strftime("%Y-%m-%d %H:%M:%S", time.localtime()), row['name']))
                await client.send_message(row['bot'], '{} {}'.format(row['cmd'], row['codes']))
                time.sleep(5)

    with client:
        client.loop.run_until_complete(main())
