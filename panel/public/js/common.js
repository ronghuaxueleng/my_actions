let BASE_API_PATH = location.origin;
let BASE_PATH = location.href;
let editor;

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
        if(!theme){
            theme = this.getCurTheme();
        }
        let isLight = theme === this.THEMES.LIGHT;
        let editorTheme = isLight ? "juejin" : "panda-syntax";
        if (editor) {
            console.info(editor)
            let $editor = $(editor.getWrapperElement());
            $editor.hide();
            editor.setOption("theme",editorTheme);
            $editor.fadeIn(500)
        }
        let $mobileMenu = $("nav[id=menu]");
        if($mobileMenu){
            if(isLight){
                $mobileMenu.removeClass("mm--dark")
            }else{
                $mobileMenu.addClass("mm--dark")
            }
        }
        return editorTheme
    },
    updatePageTheme(theme) {
        let isLight = theme === this.THEMES.LIGHT;
        let $container = $(".container");
        if($container){
            if(isLight){
                $container.removeClass("dark").addClass("light")
            }else{
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

$(document).ready(function () {
    $.ajaxSetup({
        cache: false
    });
    let $toggle_daynight = $("#toggle--daynight");
    $toggle_daynight.attr("checked",themeChange.getCurTheme() === themeChange.THEMES.LIGHT);
    let theme = themeChange.getCurTheme();
    themeChange.updatePageTheme(theme);
    $toggle_daynight.change(function () {
        themeChange.loadTheme($(this).is(':checked') ? themeChange.THEMES.LIGHT : themeChange.THEMES.DARK)
    })
})
