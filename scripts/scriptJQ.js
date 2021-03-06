$(window).scroll(function () {
    const scroll = $(window).scrollTop();
    const windowHeight = $(window).height()
    if (scroll >= 310) {
        $("header nav.desktop").addClass("active");
    } else {
        $("header nav.desktop").removeClass("active");
    }

    const $skills = $('.skills');
    const skillFromTop = $skills.offset().top
    const skillHeight = $skills.outerHeight()
    if (scroll > skillFromTop + skillHeight - windowHeight) {
        $skills.addClass("active");
    }

    const $portfolios = $('.portfolios');
    const portfoliosFromTop = $portfolios.offset().top
    const portfoliosHeight = $portfolios.outerHeight()

    if (scroll > portfoliosFromTop + portfoliosHeight - windowHeight) {
        $portfolios.addClass("active");
    }

    const $aboutme = $('.aboutme');
    const aboutmeFromTop = $aboutme.offset().top
    const aboutmeHeight = $aboutme.outerHeight()

    if (scroll > aboutmeFromTop + aboutmeHeight - windowHeight - 300) {
        $aboutme.addClass("active");
    }

    const $contact = $('.contact');
    const contactFromTop = $contact.offset().top
    const contactHeight = $contact.outerHeight()

    if (scroll > contactFromTop + contactHeight - windowHeight - 100) {
        $contact.addClass("active");
    }
});