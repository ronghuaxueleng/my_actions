let origLeft, origRight;

function initUI() {
    editor = CodeMirror.MergeView(document.getElementById('compare'), {
        value: origLeft,
        origLeft: null,
        orig: origRight,
        lineNumbers: true,
        lineWrapping: true,
        mode: 'shell',
        viewportMargin: viewportMargin,
        theme: themeChange.getAndUpdateEditorTheme(),
        keyMap: 'sublime',
        highlightDifferences: true,
        connect: null,
        collapseIdentical: false
    });
}

$(document).ready(function () {
    Promise.all([$.get(BASE_API_PATH + '/api/config/config'), $.get(BASE_API_PATH + '/api/config/sample')])
        .then((resArr) => {
            origLeft = resArr[0];
            origRight = resArr[1];

            initUI();
        });
    $('#prev').click(function () {
        editor.editor().execCommand('goPrevDiff');
    });

    $('#next').click(function () {
        editor.editor().execCommand('goNextDiff');
    });

    $('#wrap').click(function () {
        var lineWrapping = editor.editor().getOption('lineWrapping');
        editor.editor().setOption('lineWrapping', !lineWrapping);
        editor.rightOriginal().setOption('lineWrapping', !lineWrapping);
    });

    $('#save').click(function () {
        var confContent = editor.editor().getValue();
        $.post(BASE_API_PATH + '/api/save', {
            content: confContent,
            name: "config.sh"
        }, function (data) {
            let icon = (data.err === 0) ? "success" : "error"
            panelUtils.showAlert({
                title: data.title,
                html: data.msg,
                icon: icon
            }).then((result) => {
                window.location.reload(true);
            })
        });
    });

})
