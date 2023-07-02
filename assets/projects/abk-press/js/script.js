var swiperReviews = new Swiper ('.swiper-container', {
    direction: 'horizontal',
    loop: true,

    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 10
        },

        600: {
            slidesPerView: 2,
            spaceBetween: 25
        },

        996: {
            slidesPerView: 3,
            spaceBetween: 30
        }
    },

    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
    },

    navigation: {
        nextEl: '.swiper-button-next-unique',
        prevEl: '.swiper-button-prev-unique',

    },
});

var swiperClients = new Swiper ('._customer-our-clients__swiper', {
    direction: 'horizontal',
    loop: true,

    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 10
        },

        520: {
            slidesPerView: 2,
            spaceBetween: 10
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 10
        },
        996: {
            slidesPerView: 4,
            spaceBetween: 30
        },

        1200: {
            slidesPerView: 5,
            spaceBetween: 30
        }
    },

    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
    },

    navigation: {
        nextEl: '.swiper-button-next-client',
        prevEl: '.swiper-button-prev-client',

    },
});