$(function () {

    $('.toggle_menu').on('click', function (e) {
        e.preventDefault();
        $('.menu').toggleClass('toogle_menu');
    });
});