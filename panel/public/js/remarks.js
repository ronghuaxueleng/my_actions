$(document).ready(function () {
    var editor = CodeMirror.fromTextArea(document.getElementById("code"), {
        lineNumbers: true,
        lineWrapping: true,
        styleActiveLine: true,
        matchBrackets: true,
        mode: 'application/json',
        theme: 'panda-syntax',
        keyMap: 'sublime'
    });
    $.get(BASE_API_PATH + '/api/config/account', function (data) {
        editor.setValue(data);
    });

    $('#save').click(function () {
        var confContent = editor.getValue();
        let timeStamp = (new Date()).getTime()
        $.post(BASE_API_PATH + '/api/save?t=' + timeStamp, {
            content: confContent,
            name: "account.json"
        }, function (data) {
            let icon = (data.err === 0) ? "success" : "error"
            Swal.fire({
                title: data.title,
                html: data.msg,
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
