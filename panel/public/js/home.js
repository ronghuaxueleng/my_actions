var qrcode, userCookie;
$(document).ready(function () {
    var editor = CodeMirror.fromTextArea(document.getElementById("code"), {
        lineNumbers: true,
        lineWrapping: false,
        styleActiveLine: true,
        matchBrackets: true,
        mode: 'shell',
        theme: 'panda-syntax',
        keyMap: 'sublime'
    });
    $.get(BASE_API_PATH + '/api/config/config', function (data) {
        editor.setValue(data);
    });

    // 勾选记忆
    if (sessionStorage.getItem('autoReplaceCookie') === 'false') {
        $('#autoReplace').prop('checked', false);
    }
    $('#autoReplace').on('change', function () {
        sessionStorage.setItem('autoReplaceCookie', $(this).prop('checked'));
    });

    qrcode = new QRCode(document.getElementById("qrcode"), {
        text: "sample",
        correctLevel: QRCode.CorrectLevel.L
    });


    function copyToClip(content, message) {
        var aux = document.createElement("input");
        aux.setAttribute("value", content);
        document.body.appendChild(aux);
        aux.select();
        document.execCommand("copy");
        document.body.removeChild(aux);
    }

    function autoReplace(cookie) {
        var value = editor.getValue();
        var ptPin = /pt_pin=[\S]+;/.exec(cookie)[0];
        var cookieReg = new RegExp(`pt_key=[\\S]+;${ptPin}`);
        if (cookieReg.test(value)) {
            var newValue = value.replace(cookieReg, cookie);
            editor.setValue(newValue);
            return true;
        } else {
            return false;
        }
    }


    function checkLogin() {
        var timeId = setInterval(() => {
            $.get(BASE_API_PATH + '/cookie', function (data) {
                if (data.err === 0) {
                    clearInterval(timeId);
                    $("#qrcontainer").addClass("hidden");
                    $("#refresh_qrcode").addClass("hidden");
                    userCookie = data.cookie
                    var isAutoReplace = $('#autoReplace').prop('checked');
                    if (isAutoReplace) {
                        if (autoReplace(userCookie)) {
                            Swal.fire({
                                title: "cookie已获取(2s后自动替换)",
                                html: '<div class="cookieCon" style="font-size:12px;">' +
                                    userCookie + '</div>',
                                icon: "success",
                                showConfirmButton: false,
                            });

                            setTimeout(() => {
                                $('#save').trigger('click');
                            }, 2000);
                        } else {
                            Swal.fire({
                                title: "cookie已获取",
                                html: '<div class="cookieCon" style="font-size:16px;font-weight: bold;">自动替换失败，请复制Cookie后手动更新。</div>' +
                                    '<div class="cookieCon" style="font-size:12px;">' +
                                    userCookie + '</div>',
                                icon: "success",
                                confirmButtonText: "复制Cookie",
                            }).then((result) => {
                                copyToClip(userCookie);
                            });
                        }
                    } else {
                        Swal.fire({
                            title: "cookie已获取",
                            html: '<div class="cookieCon" style="font-size:12px;">' +
                                userCookie + '</div>',
                            icon: "success",
                            confirmButtonText: "复制Cookie",
                        }).then((result) => {
                            copyToClip(userCookie);
                        });
                    }

                } else if (data.err == 21) {
                    clearInterval(timeId);
                    $("#refresh_qrcode").removeClass("hidden");
                }
            })
        }, 3000)

    }

    function get_code() {
        $.get(BASE_API_PATH + '/qrcode', function (data) {
            if (data.err === 0) {
                $("#qrcontainer").removeClass("hidden")
                $("#refresh_qrcode").addClass("hidden")
                qrcode.clear();
                qrcode.makeCode(data.qrcode);
                checkLogin();
            } else {
                Swal.fire({
                    text: data.msg,
                    icon: "error"
                })
            }
        });
    }

    $('.refresh').click(get_code);

    $('#cookietools').click(get_code);

    $('.qframe-close').click(function () {
        $("#qrcontainer").addClass("hidden");
        $("#refresh_qrcode").addClass("hidden");
    });

    $('#save').click(function () {
        var confContent = editor.getValue();
        $.post(BASE_API_PATH + '/api/save', {
            content: confContent,
            name: "config.sh"
        }, function (data) {
            let icon = (data.err === 0) ? "success" : "error"
            Swal.fire({
                title: data.title,
                text: data.msg,
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
