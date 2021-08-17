$(document).ready(function () {

    // const changeText = function (el, text, color) {
    //     el.text(text).css('color', color);
    // };

    $('#password').keyup(function () {
        let len = this.value.length;

        if (len > 0 && len <= 4) {
            $('.progress-bar_item-1').addClass('progress-bar_active');
            $('.progress-bar_item-2').removeClass('progress-bar_active');
            $('.progress-bar_item-3').removeClass('progress-bar_active');
            $('.progress-bar_active').css('background-color', '#FF4B47');
            //changeText(pbText, 'Too weak');
        } else if (len > 4 && len <= 8) {
            $('.progress-bar_item-2').addClass('progress-bar_active');
            $('.progress-bar_item-3').removeClass('progress-bar_active');
            $('.progress-bar_active').css('background-color', '#F9AE35');
            //changeText(pbText, 'Could be stronger');
        } else if(len > 8){
            $('.progress-bar_item').each(function () {
                $(this).addClass('progress-bar_active');
            });
            $('.progress-bar_active').css('background-color', '#2DAF7D');
            //changeText(pbText, 'Strong password');
        }else{
            $('.progress-bar_item').each(function () {
                $(this).removeClass('progress-bar_active');
            });
            $('.progress-bar_active').css('background-color', '#FF4B47');
        }
    });
});


$("#changeBtn").click(function () {
    let $user = $("#username").val();
    let $password = $("#password").val();
    if (!$user || !$password) return;

    $.post(BASE_API_PATH + '/changepass', {
        username: $user,
        password: $password
    }, function (data) {
        let icon = (data.err === 0) ? "success" : "error"
        Swal.fire({
            text: data.msg,
            icon: icon
        })
    });
    return false;
});
