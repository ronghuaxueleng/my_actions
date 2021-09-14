#!/usr/bin/env bash
python /jd/updateCookie.py >> /jd/log/updateCookie.py.log 2>&1
jtask "$@"
