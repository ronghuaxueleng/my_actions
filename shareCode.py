import json
import time

from telethon import TelegramClient
import socks
import os

phone = os.getenv('phone')
password = os.getenv('password')
api_id = os.getenv('api_id')
api_hash = os.getenv('api_hash')

host = '127.0.0.1'
port = 7891
proxy = (socks.SOCKS5, host, port)

sessionFilePath = os.getenv('sessionFilePath') if os.getenv('sessionFilePath') else ''

client = TelegramClient(sessionFilePath + "/sharecode/" + phone, api_id, api_hash, proxy=proxy).start(phone=phone, password=password)

async def main():
    await client.get_me()
    with open(os.getenv("sharedCodesJsonPath"), 'rb') as load_f:
        rows = json.load(load_f)
        for row in rows:
            print("{}, {}提交,waiting".format(time.strftime("%Y-%m-%d %H:%M:%S", time.localtime()), row['name']))
            await client.send_message(row['bot'], '{} {}'.format(row['cmd'], row['codes']))
            time.sleep(5)

with client:
    client.loop.run_until_complete(main())
