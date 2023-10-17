$(document).ready(function() {

    $('.menu-items a').on('click', function(event) {
        if (this.hash !== '') {
            event.preventDefault();
            const hash = this.hash;

            $('html, body').animate({
                    scrollTop: $(hash).offset().top
                },
                800, // Animation duration in milliseconds
                function() {
                    window.location.hash = hash;
                }
            );
        }
    });


    $(window).scroll(function() {
        const scrollPosition = $(window).scrollTop();


        const sections = {
            about: $('#about').offset().top,
            'my-works': $('#my-works').offset().top,
            'contact-me': $('#contact-me').offset().top,
        };


        $('.menu-items a').removeClass('active');


        for (const section in sections) {
            if (scrollPosition >= sections[section] && scrollPosition < sections[section] + $('#' + section).outerHeight()) {
                $(`.menu-items a[data-section="${section}"]`).addClass('active');
            }
        }
    });
});
