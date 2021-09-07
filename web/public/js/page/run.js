$(document).ready(function () {
    var timer = 0, curScript = {key: "task list", value: "list", refreshLog: false}, $runCmd = $('#runCmd'),
        $runCmdConc = $('#runCmdConc');
    editor = CodeMirror.fromTextArea(document.getElementById("code"), {
        lineNumbers: true,
        lineWrapping: false,
        styleActiveLine: true,
        matchBrackets: true,
        viewportMargin: Infinity,
        readOnly: true,
        mode: 'text',
        theme: themeChange.getAndUpdateEditorTheme(),
    });

    /**
     * 执行cmd
     * @param jsName js 文件名称
     * @param cmd 命令
     * @param refreshLog 是否刷新日志 默认不刷新
     */
    function runCmd(jsName, cmd, refreshLog = true) {
        if (timer) {
            Swal.fire({
                title: 'Oops...',
                text: '请等待上一条任务执行完毕！',
                icon: 'error'
            });
            return;
        }
        editor.setValue('');

        $.post(BASE_API_PATH + "/api/runCmd", {
            cmd: cmd
        }, function (data) {
            editor.setValue(data.msg);

            if (jsName) {
                //将光标和滚动条设置到文本区最下方
                editor.execCommand('goDocEnd');
            }
            clearInterval(timer);
            timer = 0;
        })

        timer = 1;
        if (refreshLog) {
            // 1s后开始查日志
            setTimeout(() => {
                jsName && getLogInterval(jsName);
            }, 1000);
        }

    }

    runCmd(curScript.value, curScript.key, curScript.refreshLog);

    function initSearch(list) {
        let $jdScript = $(".jdScript");
        $jdScript.MultiFunctionSelect({
            suffixIcon: "chevron",
            selectList: list,
            keyField: "key",
            valueField: "value",
            // 输入查询相关配置
            searchSupportOption: {
                // 是否支持输入查询，默认支持，默认值true
                support: true,
                // 是否区分大小写进行匹配, 默认区分，默认值true
                sensitive: true,
                // 匹配方式
                // start: 检测字符串是否以指定的子字符串开始
                // end：检测字符串是否以指定的子字符串结束
                // all: 检索字符串在整个查询中存在
                matchedCondition: "all",
                // 输入为空时是否显示下拉选项
                isViewItemsWhenNoInput: true,
            },
            enterSelectSupportOption: {
                // 是否支持回车选中， 默认支持，默认值true
                support: true,
                // 支持回车选中情况下定义的选中规则， 默认值 part
                // 目前提供complete(完全匹配) 和 part(部分匹配)两种模式，已存在键盘上、下移键选中
                // complete情况下会根据当前输入文本完全匹配下拉选项的文本，当存在多个选项匹配时，默认选中第一个
                // part情况下会根据当前输入文本模糊匹配，当存在多个选项匹配时，默认选中第一个
                // 优先级：已存在通过键盘上、下键选中的选项 > methods
                methods: "part",
            },
        }).change((function (val, obj) {
            if (obj.$curSelect) {
                curScript = obj.$curSelect;
            }
        }))
    }

    $.get(BASE_API_PATH + '/api/scripts', {filterDir: true, onlyRunJs: true}, function (data) {
        let list = [];
        data.map((item) => {
            list = list.concat(item.files.map((file) => {
                //let fileName = file.fileName;
                // let name = fileName.substring(0, fileName.indexOf("."));
                return {key: `bash task ${file.filePath}`, value: file.filePath, refreshLog: true}
            }));
        })
        initSearch(list)
    })


    $('.cmd-btn').click(function () {
        const jsName = $(this).attr("data-name");
        const cmd = $(this).attr("data-cmd");
        const refreshLog = $(this).attr("data-refresh-log") !== 'false'
        runCmd(jsName, cmd, refreshLog);
    });

    $runCmd.click(function () {
        runCmd(curScript.value, `${curScript.key} now`, curScript.refreshLog);
    });
    $runCmdConc.click(function () {
        runCmd(curScript.value, `${curScript.key} conc`, false);
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
        $.get(BASE_API_PATH + `/api/runLog`,{jsName}, function (data) {
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

});
