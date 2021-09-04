$(document).ready(function () {
    editor = CodeMirror.fromTextArea(document.getElementById("code"), {
        lineNumbers: true,
        lineWrapping: true,
        styleActiveLine: true,
        matchBrackets: true,
        mode: 'shell',
        theme: themeChange.getAndUpdateEditorTheme(),
        keyMap: 'sublime'
    });
    $.get(BASE_API_PATH + '/api/config/crontab', function (data) {
        editor.setValue(data);
    });

    $('#save').click(function () {
        var confContent = editor.getValue();
        $.post(BASE_API_PATH + '/api/save', {
            content: confContent,
            name: "crontab.list"
        }, function (data) {
            let icon = (data.err === 0) ? "success" : "error"
            Swal.fire({
                title: data.title,
                html: data.msg + '<br>定时任务已同步更新',
                icon: icon
            }).then((result) => {
                window.location.reload(true);
            })
        });
    });

    $('#wrap').click(function () {
        var lineWrapping = editor.getOption('lineWrapping');
        editor.setOption('lineWrapping', !lineWrapping);
    });
});
