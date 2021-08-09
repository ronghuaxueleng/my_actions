'use strict';

var placeholders = document.querySelectorAll('.styled-input__placeholder-text'),
    inputs = document.querySelectorAll('.styled-input__input');

placeholders.forEach(function (el, i) {
    var value = el.innerText,
        html = '';
    for (var _iterator = value, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
        var _ref;

        if (_isArray) {
            if (_i >= _iterator.length) break;
            _ref = _iterator[_i++];
        } else {
            _i = _iterator.next();
            if (_i.done) break;
            _ref = _i.value;
        }

        var w = _ref;

        if (!value) value = '&nbsp;';
        html += '<span class="letter">' + w + '</span>';
    }
    el.innerHTML = html;
});

inputs.forEach(function (el) {
    var parent = el.parentNode;
    el.addEventListener('focus', function () {
        parent.classList.add('filled');
        placeholderAnimationIn(parent, true);
    }, false);
    el.addEventListener('blur', function () {
        if (el.value.length) return;
        parent.classList.remove('filled');
        placeholderAnimationIn(parent, false);
    }, false);
});

function placeholderAnimationIn(parent, action) {
    var act = action ? 'add' : 'remove';
    var letters = parent.querySelectorAll('.letter');
    letters = [].slice.call(letters, 0);
    if (!action) letters = letters.reverse();
    letters.forEach(function (el, i) {
        setTimeout(function () {
            var contains = parent.classList.contains('filled');
            if (action && !contains || !action && contains) return;
            el.classList[act]('active');
        }, 50 * i);
    });
}

setTimeout(function () {
    document.body.classList.add('on-start');
}, 100);

setTimeout(function () {
    document.body.classList.add('document-loaded');
}, 1800);

document.getElementById("password").classList.add("input-password");
document.getElementById("toggle-password").classList.remove("d-none");
const passwordInput = document.getElementById("password");
const togglePasswordButton = document.getElementById("toggle-password");
togglePasswordButton.addEventListener("click", togglePassword);

function togglePassword() {
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        togglePasswordButton.setAttribute("aria-label", "Hide password.");
    } else {
        passwordInput.type = "password";
        togglePasswordButton.setAttribute(
            "aria-label",
            "Show password as plain text. " +
            "Warning: this will display your password on the screen."
        );
    }
}
$(document).ready(function () {
    $("#login").click(function () {
        let $user = $("#username").val();
        let $password = $("#password").val();
        if (!$user || !$password) return;

        $.post(BASE_API_PATH + '/auth', {
            username: $user,
            password: $password
        }, function (data) {
            if (data.err === 0) {
                if (!!navigator.userAgent.match(/AppleWebKit.*Mobile.*/)) {
                    window.location.href = BASE_PATH + "mobile/run.html"; //手机
                } else {
                    window.location.href = BASE_PATH + "run.html"; //电脑
                }
            } else {
                Swal.fire({
                    text: data.msg,
                    icon: 'error'
                })
            }
        });
        return false;
    });
})