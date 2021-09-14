#!/usr/bin/env bash
python updateCookie.py >> /jd/log/updateCookie.py.log 2>&1
jtask "$@"
