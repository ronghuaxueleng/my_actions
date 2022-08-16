import json
import time

from telethon import TelegramClient
import socks
import os
import sys


if __name__ == "__main__":
    phone = sys.argv[1]
    password = sys.argv[2]
    api_id = sys.argv[3]
    api_hash = sys.argv[4]
    sharedCodesJsonPath = sys.argv[5]
    botName = sys.argv[6] if len(sys.argv) > 6 else None
    useProxy = sys.argv[7] if len(sys.argv) > 7 else None
    sessionFilePath = sys.argv[8] if len(sys.argv) > 8 else ""

    print("useProxy is " + useProxy)

    proxy = None
    if useProxy is not None and useProxy != "false":
        host = "127.0.0.1"
        port = 7891
        proxy = (socks.SOCKS5, host, port)

    sessionFilePath = sessionFilePath + "/sharecode/"
    if not os.path.exists(sessionFilePath):
        os.makedirs(sessionFilePath)

    client = TelegramClient(
        sessionFilePath + phone, api_id, api_hash, proxy=proxy
    ).start(phone=phone, password=password)

    async def main():
        await client.get_me()
        with open(sharedCodesJsonPath, "rb") as load_f:
            rows = json.load(load_f)
            for row in rows:
                bot = botName if botName is not None else row["bot"]
                print(
                    "{}, {}提交,waiting".format(
                        time.strftime("%Y-%m-%d %H:%M:%S", time.localtime()),
                        row["name"],
                    )
                )
                print("bot is {}".format(bot))
                await client.send_message(bot, "{} {}".format(row["cmd"], row["codes"]))
                time.sleep(5)

    with client:
        client.loop.run_until_complete(main())
