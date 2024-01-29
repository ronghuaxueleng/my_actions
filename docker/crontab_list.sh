# 导出所有互助码清单，日志在log/export_sharecodes下
48 5 * * * bash export_sharecodes
# 预存验证
50 * * * * node /scripts/jd_validate_Worker.js >> /scripts/logs/jd_validate_Worker.log 2>&1
# 哩布哩布画图
*/10 * * * * python /scripts/lib_gen.py >> /scripts/logs/lib_gen.log 2>&1
# 哩布哩布下载
*/6 * * * * python /scripts/download_model.py >> /scripts/logs/download_model.log 2>&1
# 哩布哩布删除历史图片
*/10 * * * * python /scripts/del_lib_history.py >> /scripts/logs/del_lib_history.log 2>&1