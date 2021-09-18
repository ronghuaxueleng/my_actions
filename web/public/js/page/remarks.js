$(document).ready(function () {
    editor = CodeMirror.fromTextArea(document.getElementById("code"), {
        lineNumbers: true,
        lineWrapping: true,
        styleActiveLine: true,
        matchBrackets: true,
        viewportMargin: Infinity,
        mode: 'application/json',
        theme: themeChange.getAndUpdateEditorTheme(),
        keyMap: 'sublime'
    });
    $.get(BASE_API_PATH + '/api/config/account', function (data) {
        editor.setValue(data);
    });

    $('#save').click(function () {
        var confContent = editor.getValue();
        let timeStamp = (new Date()).getTime()
        try {
            let accountArr = JSON.parse(confContent);
            let pt_pins = [];
            for (const account of accountArr) {
                if(account.ws_key && account.ws_key !== "" && new RegExp("[`~!@#$^&*()=|{}':;',\\[\\].<>《》/?~！@#￥……&*（）|{}【】‘；：”“'。，、？ ]").test(account.ws_key)){
                    panelUtils.showError(`${account.pt_pin} ${account.remarks}的 ws_key 格式不正确`)
                    return;
                }
                if(pt_pins.indexOf(account.pt_pin) > -1){
                    panelUtils.showError(`${account.pt_pin} 存在重复`)
                    return;
                }
                pt_pins.push(account.pt_pin);
            }
        }catch (e) {
            panelUtils.showError("格式出现问题，请仔细检查")
            return;
        }
        $.post(BASE_API_PATH + '/api/save?t=' + timeStamp, {
            content: confContent,
            name: "account.json"
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

    $('#wrap').click(function () {
        var lineWrapping = editor.getOption('lineWrapping');
        editor.setOption('lineWrapping', !lineWrapping);
    });
});
