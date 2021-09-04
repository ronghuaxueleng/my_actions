#!/bin/sh
#author:spark
#update:20210303
#脚本在容器内执行,位置自己随意,然后添加crontab的时间需要晚于qq34347476_format_share_jd_code 执行时间.
#log为qq34347476_format_share_jd_code 脚本生成的日志,因为lxk的日志格式有点乱,
#需要目录内有当天生成的日志文件,否则不运行.
#logdir改成自己容器日志的目录地址.以下如默认则不用改


##############################环境变量#########################################
source /etc/profile
init() {
    today=`date -d "-1 day" +"%Y-%m-%d"`
    logdir=/jd/log/jd_get_share_code/
    log=`find $logdir  -type f -mtime -2 |head -n 1`
    mkdir -p /jd/log/submitme
    execlog=/jd/log/submitme/$(date +"%Y-%m-%d-%H-%M").log
}

##############################判断格式化脚本##########################################
getformat() {
    if [ $(find /jd/scripts/ -type f -name "jd_get_share_code.js"|wc -l) -eq 0 ];then
	echo -e "格式化脚本不存在,准备下载...\n" >> $execlog
	cd /jd/scripts/;wget http://47.100.61.159:81/jd_get_share_code.js 
        [ $? -ne 0 ] &&  echo "格式化脚本下载失败,请检查网络!" >> $execlog && exit 0

    fi
	
    if [ $(grep -c -w jd_get_share_code /jd/config/crontab.list) -eq 0 ];then
        bash jd jd_get_share_code now 
        [ $? -eq 0 ] && echo -e "格式化脚本没有计划任务,执行获取最新日志!\n" >> $execlog || echo -e "格式化脚本没有计划任务,执行获取日志失败,需要检查格式化脚本!\n" >> $execlog
    fi
} 


##############################提交助力码##########################################
submit() {
    logfile=$1
    cat $logfile |grep -v "^#"|awk '/东东工厂/'|sed 's/.*（\(.*\)）.*】\(.*\)/\1 \2/g'|awk '{print "curl -s \"http://47.100.61.159:10080/add?user="$1"&code="$2"&type=ddfactory\""}'|bash
	sleep 1
    cat $logfile |grep -v "^#"|awk '/京喜工厂/'|sed 's/.*（\(.*\)）.*】\(.*\)/\1 \2/g'|awk '{print "curl -s \"http://47.100.61.159:10080/add?user="$1"&code="$2"&type=jxfactory\""}'|bash
	sleep 1
    #格式有问题,暂停提交
    #cat $logfile |grep -v "^#"|awk '/京喜农场/'|sed 's/.*（\(.*\)）.*】\(.*\)/\1 \2/g'|awk '{print "curl -s \"http://47.100.61.159:10080/add?user="$1"&code="$2"&type=jxfarm\""}'|bash
    #qq专用
    #cat $logfile |grep -v "^#"|awk '/京喜农场助力码/'|sed 's/.*（\(.*\)）.*】\(.*\)/\1 \2/g'|awk '{print "curl -s \"http://47.100.61.159:10080/add?user="$1"&code="$2"&type=jxfarm\""}'|bash
	sleep 1
    cat $logfile |grep -v "^#"|awk '/京东萌宠/'|sed 's/.*（\(.*\)）.*】\(.*\)/\1 \2/g'|awk '{print "curl -s \"http://47.100.61.159:10080/add?user="$1"&code="$2"&type=pet\""}'|bash
	sleep 1
    cat $logfile |grep -v "^#"|awk '/种豆得豆/'|sed 's/.*（\(.*\)）.*】\(.*\)/\1 \2/g'|awk '{print "curl -s \"http://47.100.61.159:10080/add?user="$1"&code="$2"&type=bean\""}'|bash
	sleep 1
    cat $logfile |grep -v "^#"|awk '/京东农场/'|sed 's/.*（\(.*\)）.*】\(.*\)/\1 \2/g'|awk '{print "curl -s \"http://47.100.61.159:10080/add?user="$1"&code="$2"&type=farm\""}'|bash
	sleep 1
    #cat $logfile |grep -v "^#"|awk '/京东赚赚/'|sed 's/.*（\(.*\)）.*】\(.*\)/\1 \2/g'|awk '{print "curl -s \"http://47.100.61.159:10080/add?user="$1"&code="$2"&type=jdzz\""}'|bash
    #	sleep 1
    cat $logfile |grep -v "^#"|awk '/crazyJoy/'|sed 's/.*（\(.*\)）.*】\(.*\)/\1 \2/g'|awk '{print "curl -s \"http://47.100.61.159:10080/add?user="$1"&code="$2"&type=jdcrazyjoy\""}'|bash
	sleep 1
    cat $logfile |grep -v "^#"|awk '/京东签到领现金/'|sed 's/.*（\(.*\)）.*】\(.*\)/\1 \2/g'|awk '{print "curl -s \"http://47.100.61.159:10080/add?user="$1"&code="$2"&type=jdcash\""}'|bash
	sleep 1
    cat $logfile |grep -v "^#"|awk '/闪购盲盒/'|sed 's/.*（\(.*\)）.*】\(.*\)/\1 \2/g'|awk '{print "curl -s \"http://47.100.61.159:10080/add?user="$1"&code="$2"&type=sgmh\""}'|bash
    cat $logfile |grep -v "^#"|awk '/财富岛/'|sed 's/.*（\(.*\)）.*】\([a-zA-Z0-9=_-]*\).*/\1 \2/g'|awk '{print "curl -s \"http://47.100.61.159:10080/add?user="$1"&code="$2"&type=jxcfd\""}'|bash
    echo -e "提交群助力码成功\n" >> $execlog
}


##############################执行以上操作##########################################
getformat
sleep 1
init
[ $log ] && [ $(cat $log|grep -c '账号') -gt 5 ]  &&  submit $log || echo -e "提交助力码失败,没有找到格式化互助码日志!" >> $execlog
