$(window).scroll(function () {
    var scroll = $(window).scrollTop();

    if (scroll >= 310) {
        $("header nav").addClass("active");
    } else {
        $("header nav").removeClass("active");
    }
});