#!/usr/bin/env python3
# _*_ coding:utf-8 _*_

import json
from . import jdbot, chat_id, logger, LOG_DIR, BOT_SET_JSON_FILE_USER, BOT_SET_JSON_FILE, BOT_SET, BOT_DIR
from .utils import load_module
import os
import random
from .bot.update import version, botlog
from telethon import Button

BOT_UP_LOG = f'{LOG_DIR}/TelegramBot/up.log'
BOT_M_DIR = f'{BOT_DIR}/bot/'
BOT_D_DIR = f'{BOT_DIR}/diy/'
BOT_U_DIR = f'{BOT_DIR}/user/'
logger.info('loading bot module...')
load_module('bot', BOT_M_DIR)
logger.info('loading diy module...')
load_module('diy', BOT_D_DIR)
logger.info('loading user module...')
load_module('user', BOT_U_DIR)

async def new_ver():
    text = "机器人已启动\n\n开始使用 /start\n\n查看运行日志 `taskctl jbot logs`"
    document_url = 'https://supermanito.github.io/Helloworld/#/use/%E7%94%B5%E6%8A%A5%E6%9C%BA%E5%99%A8%E4%BA%BA'
    with open(BOT_UP_LOG, 'w+', encoding='utf-8') as f:
        f.writelines([version, botlog])
    await jdbot.send_message(chat_id, text, buttons=[Button.url("📖 使用教程", document_url)], link_preview=False)



async def bot_set_init():
    try:
        with open(BOT_SET_JSON_FILE, 'r', encoding='utf-8') as f:
            bot_set = json.load(f)
        if os.path.exists(BOT_SET_JSON_FILE_USER):
            with open(BOT_SET_JSON_FILE_USER, 'r', encoding='utf-8') as f:
                user_set = json.load(f)
            if user_set['版本'] != bot_set['版本']:
                for i in user_set:
                    if '版本' not in i and not isinstance(user_set[i], dict):
                        bot_set[i] = user_set[i]
                    elif isinstance(user_set[i], dict):
                        for j in user_set[i]:
                            bot_set[i][j] = user_set[i][j]
                    else:
                        continue
                with open(BOT_SET_JSON_FILE_USER, 'w+', encoding='utf-8') as f:
                    json.dump(bot_set, f)
        else:
            with open(BOT_SET_JSON_FILE_USER, 'w+', encoding='utf-8') as f:
                json.dump(bot_set, f)
    except Exception as e:
        logger.info(str(e))


async def hello():
    if BOT_SET.get('启动问候') and BOT_SET['启动问候'].lower() == 'true':
        info = '在呢～'
        hello_words = BOT_SET["启动问候语"].split("|")
        hello_word = hello_words[random.randint(0, len(hello_words) - 1)]
        await jdbot.send_message(chat_id, f'{str(hello_word)}\n\n\t{info}', link_preview=False)


if __name__ == "__main__":
    with jdbot:
        jdbot.loop.create_task(new_ver())
        jdbot.loop.create_task(bot_set_init())
        jdbot.loop.create_task(hello())
        jdbot.loop.run_forever()
