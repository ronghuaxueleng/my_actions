let BASE_API_PATH = location.origin;
let BASE_PATH = location.href;
let BASE_PATH_NAME = location.pathname;
let editor, lastLoginInfo;

function copyToClip(content, message) {
    var aux = document.createElement("input");
    aux.setAttribute("value", content);
    document.body.appendChild(aux);
    aux.select();
    document.execCommand("copy");
    document.body.removeChild(aux);
}

function showLastLoginInfo() {
    lastLoginInfo = JSON.parse(localStorage.getItem("lastLoginInfo") || "{}");

    if (lastLoginInfo && lastLoginInfo.loginIp) {
        Swal.fire({
            position: 'top-end',
            //title: '登录成功',
            //icon:'info',
            backdrop: false,
            toast: true,
            timer: 10000,
            grow: 'row',
            showConfirmButton: true,
            confirmButtonText: '知道了',
            timerProgressBar: true,
            html:
                `<div class="login-toast"><div><b>上次登录时间</b>：${lastLoginInfo.loginTime}</div>` +
                `<div><b>上次登录IP</b>：${lastLoginInfo.loginIp || '未知'}</div>` +
                `<div><b>上次登录地点</b>：${lastLoginInfo.loginAddress || '未知'}</div></div>`
        })
        localStorage.removeItem("lastLoginInfo");
    }
}


let themeChange = {
    THEMES: {
        DARK: "DARK", LIGHT: "LIGHT"
    },
    THEME_CACHE_KEY: "LOCAL_THEME",
    getCurTheme() {
        return localStorage.getItem(this.THEME_CACHE_KEY) || this.THEMES.LIGHT
    },
    saveTheme(theme) {
        localStorage.setItem(this.THEME_CACHE_KEY, theme || this.THEMES.LIGHT)
    },
    getAndUpdateEditorTheme(theme) {
        if (!theme) {
            theme = this.getCurTheme();
        }
        let isLight = theme === this.THEMES.LIGHT;
        let editorTheme = isLight ? "juejin" : "panda-syntax";
        if (editor) {
            console.info(editor)
            let $editor = $(editor.getWrapperElement());
            $editor.hide();
            editor.setOption("theme", editorTheme);
            $editor.fadeIn(500)
        }
        let $mobileMenu = $("nav[id=mobile-menu]");
        if ($mobileMenu) {
            if (isLight) {
                $mobileMenu.removeClass("mm--dark")
            } else {
                $mobileMenu.addClass("mm--dark")
            }
        }
        return editorTheme
    },
    updatePageTheme(theme) {
        let isLight = theme === this.THEMES.LIGHT;
        let $container = $(".container");
        if ($container) {
            if (isLight) {
                $container.removeClass("dark").addClass("light")
            } else {
                $container.removeClass("light").addClass("dark")
            }
        }
    },
    loadTheme(theme) {
        if (!this.THEMES.hasOwnProperty(theme)) {
            console.warn("当前仅支持 DARK/LIGHT 切换")
            theme = this.getCurTheme();
        }
        this.getAndUpdateEditorTheme(theme);
        this.updatePageTheme(theme);
        this.saveTheme(theme);
    }
}

let MenuTools = {
    menuList: [{
        title: "编辑配置",
        faIcon: "fa-home",
        path: "#",
        customClass: "highlight",
        subMenuCustomClass: "double",
        bottomContent: '<i class="fa fa-comments"></i> 你知道我们有 Telegram 频道吗? <a href="https://t.me/jdhelloworld">立即关注</a>',
        children: [{
            title: "配置文件",
            faIcon: "fa-pencil-square-o",
            titleFaIcon: "fa-arrow-right",
            subText: "编辑环境变量",
            customClass: 'gb a',
            path: "/config"
        }, {
            title: "对比工具",
            faIcon: "fa-columns",
            titleFaIcon: "fa-arrow-right",
            subText: "将当前配置文件与模板进行比较",
            customClass: 'gb g',
            path: "/diff"
        }, {
            title: "定时任务",
            faIcon: "fa-clock-o",
            titleFaIcon: "fa-arrow-right",
            subText: "配置 Crontab 定时任务",
            customClass: 'gb d',
            path: "/crontab"
        }, {
            title: "自定义脚本",
            faIcon: "fa-send-o",
            titleFaIcon: "fa-arrow-right",
            subText: "编辑 Extra 脚本",
            customClass: 'gb h',
            path: "/extra"
        }, {
            title: "机器人配置",
            faIcon: "fa-telegram",
            titleFaIcon: "fa-arrow-right",
            subText: "编辑 Telegram Bot 配置文件",
            customClass: 'gb',
            path: "/bot"
        }, {
            title: "账号配置",
            faIcon: "fa-user-circle",
            titleFaIcon: "fa-arrow-right",
            subText: "编辑账号配置文件",
            customClass: 'gb e',
            path: "/remarks"
        }]
    }, {
        title: "执行工具",
        faIcon: "fa-list-ul",
        path: "#",
        customClass: "",
        subMenuCustomClass: "",
        bottomContent: '',
        children: [{
            title: "快速执行",
            faIcon: "fa-play-circle",
            titleFaIcon: "fa-arrow-right",
            subText: "一键执行部分命令和特定活动脚本",
            customClass: 'gb i',
            path: "/run"
        }, {
            title: "终端",
            faIcon: "fa-terminal",
            titleFaIcon: "fa-arrow-right",
            subText: "WebSSH 命令行",
            customClass: 'gb b',
            path: "/terminal"
        }, {
            title: "使用说明",
            faIcon: "fa-book",
            titleFaIcon: "fa-external-link",
            subText: "查看所有关于项目的使用教程",
            customClass: 'gb c',
            path: "javascript:window.open('./cause/index.html')"
        }]
    }, {
        title: "文件浏览",
        faIcon: "fa-folder",
        path: "#",
        customClass: "",
        subMenuCustomClass: "",
        bottomContent: '',
        children: [{
            title: "查询日志",
            faIcon: "fa-history",
            titleFaIcon: "fa-arrow-right",
            subText: "查看详细的活动脚本运行日志",
            customClass: 'gb d',
            path: "/taskLog"
        }, {
            title: "查阅脚本",
            faIcon: "fa-file-code-o",
            titleFaIcon: "fa-arrow-right",
            subText: "浏览脚本内容",
            customClass: 'gb e',
            path: "/viewScripts"
        }, {
            title: "查看仓库",
            faIcon: "fa-github",
            titleFaIcon: "fa-external-link",
            subText: "浏览 Scripts 仓库代码托管网站",
            customClass: '',
            path: "javascript:window.open('https://github.com/JDHelloWorld/jd_scripts')"
        }]
    }, {
        title: "选项设置",
        faIcon: "fa-cog",
        path: "#",
        customClass: "",
        subMenuCustomClass: "",
        bottomContent: '',
        children: [{
            title: "推广",
            faIcon: "fa-lightbulb-o",
            titleFaIcon: "fa-external-link",
            subText: "Please star this repository",
            customClass: 'gb s',
            path: "javascript:window.open('https://github.com/SuperManito/LinuxMirrors')"
        }, {
            title: "修改密码",
            faIcon: "fa-lock",
            titleFaIcon: "fa-arrow-right",
            subText: "Change Password",
            customClass: 'gb l',
            path: "/changePwd"
        }, {
            title: "退出登陆",
            faIcon: "fa-sign-out",
            titleFaIcon: "fa-hand-o-right",
            subText: "Sign out",
            customClass: 'gb r',
            path: "/logout"
        }, {
            title: "切换主题",
            faIcon: "fa-delicious",
            titleFaIcon: "fa-sliders",
            subText: "Switch theme",
            customClass: 'gb k',
            path: "#",
            mobileCustom: {
                customClass: 'mobile-daynight',
                customContent: '<span class="title">切换主题</span>'
            },
            customContent: '<div class="toggle toggle--daynight">\n' +
                '                                    <input type="checkbox" id="toggle--daynight" class="toggle--checkbox">\n' +
                '                                    <label class="toggle--btn" for="toggle--daynight">\n' +
                '                                        <span class="toggle--feature"></span>\n' +
                '                                    </label>\n' +
                '                                </div>'
        }]
    }],
    getMenuDom() {
        return document.getElementById("menu");
    },
    getMobileMenuDom() {
        return document.getElementById("mobile-menu");
    },
    resolveMobileMenu() {
        let menuDom = this.getMobileMenuDom();
        if (!menuDom) {
            return;
        }
        let content = "<ul>";
        this.menuList.map((menu, i) => {
            menu.children.map((child, index) => {
                content = content.concat(
                    `<li class="${child.mobileCustom && child.mobileCustom.customClass || ''}">`,
                    child.mobileCustom ? child.mobileCustom.customContent : `<a href="${child.path || '#'}"><i class="fa ${child.faIcon}"></i> ${child.title}</a>`,
                    child.customContent || '',
                    `</li>`
                )
            });
        });
        content = content.concat('</ul>');
        menuDom.innerHTML = content;
        this.resolveEvent();
        mobileNavInit();
    },
    resolveMenu() {
        let menuDom = this.getMenuDom();
        if (!menuDom) {
            MenuTools.resolveMobileMenu();
            return;
        }
        let content = "";
        this.menuList.map((menu, i) => {
            content = content.concat(
                `<div class="menu-item ${menu.customClass}">`,
                `<div class="menu-text"><a href="${menu.path || '#'}"><i class="fa ${menu.faIcon}"></i> ${menu.title}</a></div>`,
                `<div class="sub-menu ${menu.subMenuCustomClass}">`
            )
            menu.children.map((child, index) => {
                content = content.concat(
                    `<a href="${child.path || '#'}"><div class="icon-box ${child.customClass} ${child.path === BASE_PATH_NAME  && 'active'}">`,
                    `<div class="icon"><i class="fa ${child.faIcon}"></i></div>`,
                    `<div class="text"><div class="title">${child.title} <i class="fa ${child.path === BASE_PATH_NAME && child.titleFaIcon === 'fa-arrow-right' ? 'fa-map-marker': child.titleFaIcon}"></i></div><div class="sub-text">${child.subText}</div></div>`,
                    `${child.customContent || ''}`,
                    `</div></a>`
                )
                if (menu.bottomContent && menu.children.length === index + 1) {
                    content = content.concat('<div class="bottom-container">', menu.bottomContent, '</div>');
                }
            });
            content = content.concat('</div></div>');
        });
        content = content.concat('<!--container--><div id="sub-menu-container"><div id="sub-menu-holder"><div id="sub-menu-bottom"></div></div></div>');
        menuDom.innerHTML = content;
        this.resolveEvent();
    },
    resolveEvent() {
        let $toggle_daynight = $("#toggle--daynight");
        $toggle_daynight.attr("checked", themeChange.getCurTheme() === themeChange.THEMES.LIGHT);
        let theme = themeChange.getCurTheme();
        themeChange.updatePageTheme(theme);
        $toggle_daynight.change(function () {
            themeChange.loadTheme($(this).is(':checked') ? themeChange.THEMES.LIGHT : themeChange.THEMES.DARK)
        })
    }
}


$(document).ready(function () {
    $.ajaxSetup({
        cache: false
    });
    MenuTools.resolveMenu();
    showLastLoginInfo();
    themeChange.loadTheme();
})

// window.onresize = function(){
//     window.location.reload();
// }

