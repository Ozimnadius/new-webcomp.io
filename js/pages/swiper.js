window.onload = function () {
    //initialize swiper when document ready
    let swiperReviews = new Swiper('.rev__container', {
        // Optional parameters
        direction: 'vertical',
        loop: true,
        speed: 300,
        slidesPerView: 3,
        spaceBetween: 8,
        initialSlide: 1,
        centeredSlides: true,
        slideToClickedSlide: true,
        on: {
            slideChange: function () {
                let index = this.activeIndex;


                for (let i = 0; i < this.slides.length; i++) {
                    this.slides[i].classList.add('inactive');
                }

                this.slides[index].classList.remove('inactive');

            },
        }
    });

    let devSwiper = new Swiper('.site-dev__container', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        // Navigation arrows
        navigation: {
            nextEl: '.site-dev__next',
            prevEl: '.site-dev__prev',
        },
    });

    let seoCatsSwiper = new Swiper('.seo-desc__container', {
        // Optional parameters
        direction: 'horizontal',
        slidesPerView: 3,
        spaceBetween: 2,
        scrollbar: {
            el: '.seo-cats__scrollbar .swiper-scrollbar',
            dragSize: 'auto'
        },
    })
};