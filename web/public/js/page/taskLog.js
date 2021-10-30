var qrcode, userCookie;


$(document).ready(function () {
    editor = CodeMirror.fromTextArea(document.getElementById("code"), {
        lineNumbers: true,
        lineWrapping: true,
        styleActiveLine: true,
        matchBrackets: true,
        viewportMargin: viewportMargin,
        readOnly: true,
        mode: 'shell',
        theme: themeChange.getAndUpdateEditorTheme(),
    });
    let metisMenu,$menuTree = $('#menuTree');
    function loadData(keywords = ''){
        $.get(BASE_API_PATH + '/api/logs',{keywords}, function (data) {
            var dirs = data.dirs;
            var navHtml = "";
            for (let index in dirs) {
                var dirName = dirs[index].dirName;
                // 文件在log/目录时
                if (dirName === '@') {
                    var row = `<li class="nav-item">`;
                    for (let filesKey in dirs[index].files) {
                        var fileName = dirs[index].files[filesKey];
                        row +=
                            `<a class="nav-link" href="javascript:logDetail('${dirName}', '${fileName}');">${fileName}</a>`
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
                            `<a class="nav-link" style="padding-left: 2rem;" href="javascript:logDetail('${dirName}', '${fileName}');">${fileName}</a>`
                    }
                    row += `</li>
                                    </ul>
                                </li>`;
                }

                navHtml += row;
            }

            $menuTree.metisMenu('dispose')
            $menuTree.html(navHtml);
            metisMenu = $menuTree.metisMenu();
        });
    }
    loadData();

    $("#submitSearch").click(function (){
        loadData($("#searchInput").val())
    })
    $('#searchInput').bind('keypress',function(event){
        if(event.keyCode === 13) {
            $("#submitSearch").click();
        }
    });
    window.logDetail = function logDetail(dir, file) {
        if (window.innerWidth < 993) {
            dispatch(document.getElementById('toggleIcon'), 'click');
        }

        $.get(BASE_API_PATH + `/api/logs/${dir}/${file}`, function (data) {
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
        } catch (e) {
        }

    }
});
