! function (t) {
    var e = {};

    function n(o) {
        if (e[o]) return e[o].exports;
        var i = e[o] = {
            i: o,
            l: !1,
            exports: {}
        };
        return t[o].call(i.exports, i, i.exports, n), i.l = !0, i.exports
    }
    n.m = t, n.c = e, n.d = function (t, e, o) {
        n.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: o
        })
    }, n.r = function (t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, n.t = function (t, e) {
        if (1 & e && (t = n(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var o = Object.create(null);
        if (n.r(o), Object.defineProperty(o, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t)
            for (var i in t) n.d(o, i, function (e) {
                return t[e]
            }.bind(null, i));
        return o
    }, n.n = function (t) {
        var e = t && t.__esModule ? function () {
            return t.default
        } : function () {
            return t
        };
        return n.d(e, "a", e), e
    }, n.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, n.p = "", n(n.s = 0)
}([function (t, e, n) {
    "use strict";
    n.r(e);
    var o = function () {
            function t(t) {
                var e = this;
                this.listener = function (t) {
                    (t.matches ? e.matchFns : e.unmatchFns).forEach(function (t) {
                        t()
                    })
                }, this.toggler = window.matchMedia(t), this.toggler.addListener(this.listener), this.matchFns = [], this.unmatchFns = []
            }
            return t.prototype.destroy = function () {
                this.toggler.removeListener(this.listener), this.unmatchFns.forEach(function (t) {
                    t()
                }), this.matchFns = [], this.unmatchFns = []
            }, t.prototype.add = function (t, e) {
                this.matchFns.push(t), this.unmatchFns.push(e), (this.toggler.matches ? t : e)()
            }, t
        }(),
        i = {
            title: "菜单",
            theme: "light",
            selected: "Selected"
        },
        s = {
            blockPage: !0,
            move: !0,
            position: "left"
        },
        r = function (t) {
            return Array.prototype.slice.call(t)
        },
        a = function (t, e) {
            return r((e || document).querySelectorAll(t))
        },
        c = function () {
            function t(e, n) {
                var o = this;
                void 0 === n && (n = {}), this.options = {}, Object.keys(t.options).forEach(function (e) {
                    o.options[e] = void 0 !== n[e] ? n[e] : t.options[e]
                }), this.menu = e, "dark" == this.options.theme && this.menu.classList.add("mm--dark"), this._openPanel(), this._initAnchors()
            }
            return t.prototype.enable = function (t) {
                var e = this;
                return void 0 === t && (t = "all"), this.toggler = new o(t), this.toggler.add(function () {
                    return e.menu.classList.add("mm")
                }, function () {
                    return e.menu.classList.remove("mm")
                }), this.toggler
            }, t.prototype.disable = function () {
                this.toggler.destroy()
            }, t.prototype._openPanel = function () {
                var t = a("." + this.options.selected, this.menu),
                    e = t[t.length - 1],
                    n = null;
                e && (n = e.closest("ul")), n || (n = this.menu.querySelector("ul")), this.openPanel(n)
            }, t.prototype.openPanel = function (t) {
                var e = t.dataset.mmTitle,
                    n = t.parentElement;
                n === this.menu ? this.menu.classList.add("mm--main") : (this.menu.classList.remove("mm--main"), e || r(n.children).forEach(function (t) {
                    t.matches("a, span") && (e = t.textContent)
                })), e || (e = this.options.title), this.menu.dataset.mmTitle = e, a(".mm--open", this.menu).forEach(function (t) {
                    t.classList.remove("mm--open", "mm--parent")
                }), t.classList.add("mm--open"), t.classList.remove("mm--parent");
                for (var o = t.parentElement.closest("ul"); o;) o.classList.add("mm--open", "mm--parent"), o = o.parentElement.closest("ul")
            }, t.prototype._initAnchors = function () {
                var t = this;
                this.menu.addEventListener("click", function (e) {
                    if (t.menu.matches(".mm")) {
                        var n = !1;
                        n = (n = (n = n || function (t) {
                            return !!t.target.matches("a") && (t.stopImmediatePropagation(), !0)
                        }(e)) || function (e) {
                            var n, o = e.target;
                            return !!(n = o.closest("span") ? o.parentElement : !!o.closest("li") && o) && (r(n.children).forEach(function (e) {
                                e.matches("ul") && t.openPanel(e)
                            }), e.stopImmediatePropagation(), !0)
                        }(e)) || function (e) {
                            var n = e.target;
                            if (n.matches(".mm")) {
                                var o = a(".mm--open", n),
                                    i = o[o.length - 1];
                                if (i) {
                                    var s = i.parentElement.closest("ul");
                                    s && t.openPanel(s)
                                }
                                return e.stopImmediatePropagation(), !0
                            }
                            return !1
                        }(e)
                    }
                })
            }, t.version = "2.2.2", t.options = i, t.optionsOffcanvas = s, t
        }(),
        m = "ontouchstart" in window || !!navigator.msMaxTouchPoints || !1;
    c.prototype.open = function () {
        this.menu.matches(".mm") && (this.menu.classList.add("mm--open"), document.body.classList.add("mm-body--open"), this.blocker && this.blocker.classList.add("mm--open"), this.menu.dispatchEvent(new Event("mm:open")))
    }, c.prototype.close = function () {
        this.menu.classList.remove("mm--open"), document.body.classList.remove("mm-body--open"), this.blocker && this.blocker.classList.remove("mm--open"), this.menu.dispatchEvent(new Event("mm:close"))
    };
    /*!
     * mmenujs.com/mmenu-light
     *
     * Copyright (c) Fred Heusschen
     * www.frebsite.nl
     *
     * License: CC-BY-4.0
     
     */
    c.prototype.offcanvas = function (t) {
        var e = this;
        void 0 === t && (t = {});
        var n, o = {};
        Object.keys(c.optionsOffcanvas).forEach(function (e) {
            o[e] = void 0 !== t[e] ? t[e] : c.optionsOffcanvas[e]
        }), this.menu.classList.add("mm--offcanvas"), this.toggler.add(function () {}, function () {
            e.close()
        }), "right" == o.position && this.menu.classList.add("mm--right"), o.move && this.toggler.add(function () {
            n = document.createComment("original menu location"), e.menu.after(n), document.body.append(e.menu)
        }, function () {
            n && n.replaceWith(e.menu)
        });
        o.blockPage && (this.blocker = document.createElement("div"), this.blocker.classList.add("mm-blocker"), "right" == o.position && this.blocker.classList.add("mm--right"), document.body.append(this.blocker), "modal" != o.blockPage && function () {
            var t = this;
            this.blocker.addEventListener(m ? "touchstart" : "mousedown", function (e) {
                return !!t.menu.matches(".mm") && !!t.menu.matches(".mm--open") && (t.close(), e.preventDefault(), e.stopImmediatePropagation(), !0)
            })
        }.call(this), this.toggler.add(function () {
            e.blocker.classList.remove("mm-hidden")
        }, function () {
            e.blocker.classList.add("mm-hidden")
        }))
    };
    e.default = c;
    window.MmenuLight = c
}]);