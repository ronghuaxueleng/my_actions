var qrcode, userCookie, curPath;
$(document).ready(function () {
    editor = CodeMirror.fromTextArea(document.getElementById("code"), {
        lineNumbers: true,
        lineWrapping: true,
        styleActiveLine: true,
        matchBrackets: true,
        viewportMargin: viewportMargin,
        readOnly: false,
        mode: 'javascript',
        theme: themeChange.getAndUpdateEditorTheme(),
    });
    let metisMenu, $menuTree = $('#menuTree'), $scriptsSaveBtn = $('#save');
    $scriptsSaveBtn.hide();

    function createFileTree(dirs) {
        let navHtml = ``
        dirs.map((item, index) => {
            if (typeof item === 'object' && item.dirName) {
                navHtml += `<li class="nav-item ${item.dirPath === 'scripts' ? 'mm-active' : ''}">`
                navHtml += `<a class="nav-link text-dark has-arrow" href="#">${item.dirName}</a>`
                navHtml += `<ul class="nav flex-column pl-1">${createFileTree(item.files)}</ul>`
            } else {
                navHtml += `<li class="nav-item">`
                navHtml += `<a class="nav-link" href="javascript:viewScript('${item.filePath}');">${item.fileName}</a>`
            }
            navHtml += `</li>`;
        })

        return navHtml;
    }

    function loadData(keywords = '') {
        $.get(BASE_API_PATH + '/api/scripts', {keywords}, function (data) {
            let navHtml = createFileTree(data);
            $menuTree.metisMenu('dispose')
            $menuTree.html(navHtml);
            metisMenu = $menuTree.metisMenu();
        });
    }

    loadData();
    $("#submitSearch").click(function () {
        loadData($("#searchInput").val())
    })
    $('#searchInput').bind('keypress', function (event) {
        if (event.keyCode === 13) {
            $("#submitSearch").click();
        }
    });
    window.viewScript = function viewScript(path) {
        if (window.innerWidth < 993) {
            dispatch(document.getElementById('toggleIcon'), 'click');
        }

        $.get(BASE_API_PATH + `/api/scripts/content`, {path: path}, function (data) {
            editor.setValue(data);
            curPath = path;
            $scriptsSaveBtn.show();
        });
    }
    $scriptsSaveBtn.click(function () {
        $.post(BASE_API_PATH + '/api/scripts/save', {
            content: editor.getValue(),
            name: curPath
        }, function (data) {
            let icon = data.err === 0 ? "success" : "error";
            panelUtils.showAlert({
                title: data.title,
                html: data.msg,
                icon: icon
            });
        });
    });
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
        ;

    }
});
