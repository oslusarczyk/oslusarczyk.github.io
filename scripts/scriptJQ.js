

$(window).scroll(function () {
    const scroll = $(window).scrollTop();
    const windowHeight = $(window).height()
    if (scroll >= 310) {
        $("header nav").addClass("active");
    } else {
        $("header nav").removeClass("active");
    }

    const $skills = $('.skills');
    const skillFromTop = $skills.offset().top
    const skillHeight = $skills.outerHeight()

    if( scroll > skillFromTop + skillHeight - windowHeight){
        $skills.addClass("active");
    }
});

