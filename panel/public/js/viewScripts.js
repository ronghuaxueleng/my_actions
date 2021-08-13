var qrcode, userCookie;
$(document).ready(function () {
    editor = CodeMirror.fromTextArea(document.getElementById("code"), {
        lineNumbers: true,
        lineWrapping: false,
        styleActiveLine: true,
        matchBrackets: true,
        readOnly: true,
        mode: 'javascript',
        theme: themeChange.getAndUpdateEditorTheme(),
    });

    $.get(BASE_API_PATH + '/api/scripts', function (data) {
        var dirs = data.dirs;
        var navHtml = "";
        for (let index in dirs) {
            var dirName = dirs[index].dirName;
            // 文件在scripts/目录时
            if (dirName === '@') {
                var row = `<li class="nav-item">`;
                for (let filesKey in dirs[index].files) {
                    var fileName = dirs[index].files[filesKey];
                    row +=
                        `<a class="nav-link" href="javascript:viewScript('${dirName}', '${fileName}');">${fileName}</a>`
                }
                row += `</li>`;
            } else {
                var row = `<li class="nav-item">
                                <a class="nav-link text-dark has-arrow" href="#">${dirName}</a>
                                <ul class="nav flex-column pl-1">
                                    <li class="nav-item">`;
                for (let filesKey in dirs[index].files) {
                    var fileName = dirs[index].files[filesKey];
                    row +=
                        `<a class="nav-link" href="javascript:viewScript('${dirName}', '${fileName}');">${fileName}</a>`
                }
                row += `</li>
                                    </ul>
                                </li>`;
            }

            navHtml += row;
        }
        $('#menu1').html(navHtml);
        $('#menu1').metisMenu();
    });

    window.viewScript = function viewScript(dir, file) {
        if (window.innerWidth < 993) {
            dispatch(document.getElementById('toggleIcon'), 'click');
        }

        $.get(BASE_API_PATH + `/api/scripts/${dir}/${file}`, function (data) {
            editor.setValue(data);
        });
    }

    $('#wrap').click(function () {
        var lineWrapping = editor.getOption('lineWrapping');
        editor.setOption('lineWrapping', !lineWrapping);
    });


    //自动触发事件
    function dispatch(ele, type) {
        try {
            if (ele.dispatchEvent) { //标准浏览器

                var evt = document.createEvent('Event');
                evt.initEvent(type, true, true);
                ele.dispatchEvent(evt);
            } else {
                ele.fireEvent('on' + type);
            }
        } catch (e) {};

    }
});
