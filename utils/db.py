# -*- coding: utf-8 -*-
import os

from peewee import *

dbpath = os.path.join(os.path.split(os.path.realpath(__file__))[0], '..', 'config', 'account.db')
db = SqliteDatabase(dbpath)


# 京东账号信息
class Jd(Model):
    pin = CharField(null=False)
    wskey = CharField(null=False)

    class Meta:
        database = db


if __name__ == '__main__':
    db.connect()
    db.create_tables([Jd])
