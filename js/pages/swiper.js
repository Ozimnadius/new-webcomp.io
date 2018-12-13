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

    let seoCatsSwiper = new Swiper('.slider__container', {
        // Optional parameters
        direction: 'horizontal',
        slidesPerView: 3,
        spaceBetween: 2,
        scrollbar: {
            el: '.slider__scrollbar .swiper-scrollbar',
            dragSize: 'auto'
        },
    });

    let slider2Swiper = new Swiper('.slider2__container', {
        // Optional parameters
        direction: 'horizontal',
        slidesPerView: 3,
        spaceBetween: 2,
        scrollbar: {
            el: '.slider2__scrollbar .swiper-scrollbar',
            dragSize: 'auto'
        },
    });

    let portSliderSwiper = new Swiper('.port-slider__container', {
        // Optional parameters
        direction: 'horizontal',
        slidesPerView: 'auto',
        loop: true,
        spaceBetween: 20,
        pagination: {
            el: '.port-slider__pagination',
            type: 'fraction',
            renderFraction: function (currentClass, totalClass) {
                return '<span class="' + currentClass + '"></span>' +
                    '<span class="swiper-pagination-seporator"></span>' +
                    '<span class="' + totalClass + '"></span>';
            }
        },

        navigation: {
            nextEl: '.port-slider__next',
            prevEl: '.port-slider__prev',
        },
    });

    let articleSwiper = new Swiper('.art-desc__swiper', {
        // Optional parameters
        direction: 'horizontal',
        slidesPerView: 1,
        loop: true,
        navigation: {
            nextEl: '.art-desc__next',
            prevEl: '.art-desc__prev',
        }
    });
};