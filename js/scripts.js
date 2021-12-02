$(document).ready(function () {
    //Mobile menu
    $('.menu-button').on('click', function() {
        $('.navigation-wrapper').addClass('active');
    })
    $('.close-menu').on('click', function() {
        $('.navigation-wrapper').removeClass('active');
    })

    //Reviews slider
    const reviewsSlider = new Swiper('.swiper-reviews', {
        loop: true,

        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
    });
})