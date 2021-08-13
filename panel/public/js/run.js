$(document).ready(function () {
    var timer = 0;
    editor = CodeMirror.fromTextArea(document.getElementById("code"), {
        lineNumbers: true,
        lineWrapping: false,
        styleActiveLine: true,
        matchBrackets: true,
        readOnly: true,
        mode: 'text',
        theme: themeChange.getAndUpdateEditorTheme(),
    });

    function getPath(request, page) {
        if (!!request.headers["user-agent"].match(/AppleWebKit.*Mobile.*/)) {
            return path.join(__dirname + '/public/mobile/' + page)
        }
        return path.join(__dirname + '/public/' + page)
    }

    /**
     * 执行cmd
     * @param jsName js 文件名称
     * @param cmd 命令
     * @param refreshLog 是否刷新日志 默认不刷新
     */
    function runCmd(jsName, cmd, refreshLog = false) {
        if (timer) {
            Swal.fire({
                title: 'Oops...',
                text: '请等待上一条任务执行完毕！',
                icon: 'error'
            });
            return;
        }
        editor.setValue('');

        $.post(BASE_API_PATH + "/runCmd", {
            cmd: cmd
        }, function (data) {
            editor.setValue(data.msg);

            if (jsName) {
                //将光标和滚动条设置到文本区最下方
                editor.execCommand('goDocEnd');
            }

            clearInterval(timer);
            timer = 0;
        });

        timer = 1;
        if (refreshLog) {
            // 1s后开始查日志
            setTimeout(() => {
                jsName && getLogInterval(jsName);
            }, 1000);
        }

    }

    $('#git_pull, #exsc, #ps, #rmlog, #hangup, #hangdown')
        .click(function () {
            let confirmTxt, cmd, refreshLog = true;
            switch (this.id) {
                case 'git_pull':
                    confirmTxt = '确认更新脚本文件？';
                    cmd = `bash ${this.id}.sh 2>&1 | tee -a log/git_pull.log`;
                    break;
                case 'exsc':
                    confirmTxt = '确认导出互助码？';
                    cmd = `bash jd ${this.id} 2>&1`;
                    break;
                case 'ps':
                    confirmTxt = '确认查看进程？';
                    cmd = `bash jd ${this.id} 2>&1`;
                    refreshLog = false;
                    break;
                case 'rmlog':
                    confirmTxt = '确认删除日志？';
                    cmd = `bash jd ${this.id} 2>&1`
                    refreshLog = false;
                    break;
                case 'hangup':
                    confirmTxt = '确认启动/重启挂机程序？';
                    cmd = `bash jd hang up 2>&1`;
                    refreshLog = false;
                    break;
                case 'hangdown':
                    confirmTxt = '确认停止后台挂机程序？';
                    cmd = `bash jd hang down 2>&1`;
                    refreshLog = false;
                    break;
                default:
                    break;
            }

            if (!confirm(confirmTxt)) {
                return;
            }

            runCmd(this.id, cmd, refreshLog);
        });

    $('.cmd-btn').click(function () {
        if (timer) {
            Swal.fire({
                title: 'Oops...',
                text: '请等待上一条任务执行完毕！',
                icon: 'error'
            });
            return;
        }
        editor.setValue('');

        const jsName = this.id === 'list' ? '' : this.id;
        const cmd = jsName ? `bash jd ${jsName} now` : 'bash jd list';
        runCmd(jsName, cmd, this.id !== 'list');
    });

    $('#runCmd').click(function () {
        const jdScript = $('#jdScript').val();
        if (!jdScript) {
            Swal.fire({
                title: 'Oops...',
                text: '请先补充命令！',
                icon: 'error'
            });
            return;
        }

        if (timer) {
            Swal.fire({
                title: 'Oops...',
                text: '请等待上一条任务执行完毕！',
                icon: 'error'
            });
            return;
        }
        editor.setValue('');

        const cmd = `bash jd ${jdScript} now`;
        runCmd(jdScript, cmd, this.id !== 'list');

        return false;
    });

    function getLogInterval(jsName) {
        timer && clearInterval(timer);

        // 先执行一次
        getLog(jsName);
        timer = setInterval(() => {
            getLog(jsName);
        }, 1500);
    }

    function getLog(jsName) {
        $.get(BASE_API_PATH + `/runLog/${jsName}`, function (data) {
            if (data !== 'no logs') {
                editor.setValue(data);
            }
            //将光标和滚动条设置到文本区最下方
            editor.execCommand('goDocEnd');
        });
    }

    $('#wrap').click(function () {
        var lineWrapping = editor.getOption('lineWrapping');
        editor.setOption('lineWrapping', !lineWrapping);
    });

    $('#move-bottom').click(function () {
        editor.execCommand('goDocEnd');
    })

    $('#list').trigger('click');
});
