(function () {
    let pagItems = document.querySelector('.pag__items'),
        pagAllItem = document.querySelectorAll('.pag__item'),
        sections = document.querySelectorAll('section'),
        mainContent = document.querySelector('.main'),
        inScroll = false,
        figure = document.querySelector('.figure'),
        screen = 0,
        sectionBottom = document.querySelector('.index-bottom'),
        scrollTop = 0,
        page = document.querySelector('.page'),
        pagination = document.querySelector('.pag');


    function scrollToSection(sectionIndex) {
        let position = sectionIndex * -100 + 'vh',
            section = sections[sectionIndex],
            translateY = (sectionIndex) * -102;

        for (let i = 0; i < pagAllItem.length; i++) {
            pagAllItem[i].classList.remove('active');
        }


        for (let i = 0; i < sections.length; i++) {
            sections[i].classList.remove('active-page');
        }

        if (pagItems) {
            pagAllItem[sectionIndex].classList.add('active');
            pagItems.style.transform = 'translate3d(0,' + translateY + 'px,0)';
        }

        section.classList.add('active-page');
        mainContent.style.transform = 'translate3d(0,' + position + ',0)';


        if (figure) {
            if (section.classList.contains('index-about')) {
                setTimeout(function () {
                    figure.classList.add('active');
                }, 1000);

            } else {
                figure.classList.remove('active');
            }
        }


        if (pagItems) {
            if (sectionIndex === 3) {
                document.querySelector('.pag__arrow-line').style.opacity = 0;
            } else {
                document.querySelector('.pag__arrow-line').style.opacity = 1;
            }

            if (section.classList.contains('index-bottom')) {
                pagination.classList.add('hidden');
            } else {
                pagination.classList.remove('hidden');
            }
        }

        setTimeout(function () {
            inScroll = false;
        }, 500);

    }

    if (!page.classList.contains('page_second')) {


        if (pagItems) {
            pagItems.addEventListener('click', function (e) {
                if (e.target.classList.contains('pag__item')) {
                    scrollToSection(index(pagAllItem, e.target));
                }
            });
        }

        document.addEventListener('wheel', function (e) {


            let deltaY = e.deltaY,
                activeSection = document.querySelector('.active-page'),
                nextSection = activeSection.nextElementSibling,
                prevSection = activeSection.previousElementSibling;

            if (!activeSection.classList.contains('index-bottom')) {
                e.preventDefault();
            } else {
                if (deltaY > 0) {
                    return;
                } else {
                    if (scrollTop > 0) {
                        return;
                    }
                }

            }

            if (inScroll) return;

            inScroll = true;

            if (deltaY > 0) {
                if (nextSection) {
                    scrollToSection(index(sections, nextSection));
                } else {
                    inScroll = false;
                }
            } else {
                if (prevSection) {
                    scrollToSection(index(sections, prevSection));
                } else {
                    inScroll = false;
                }
            }

        });

        sectionBottom.addEventListener('scroll', function (e) {
            scrollTop = this.scrollTop;
        });
    }

    $('.index-about__content').hyphenate();


    let range = document.querySelector('.calc__range');
    if (range) {
        range.addEventListener('input', function () {

            let rangeVal = document.querySelector('.calc__range-val'),
                rangeTitle = document.querySelector('.calc__range-text');

            rangeVal.innerHTML = this.value;
            rangeTitle.innerHTML = ' ' + GetNoun(this.value, 'месяц', 'месяца', 'месяцев');
            this.style.backgroundImage = getCssValuePrefix() + 'linear-gradient(left ,#ffba00 0%,#ffba00 ' + this.value + '%, #352b4d ' + this.value + '%, #352b4d 100%)';

        });
    }


    let switchButton = document.querySelector('.best__switch-button'),
        switches = document.querySelectorAll('.best__switch'),
        tabs = document.querySelectorAll('.best__tab');
    if (switchButton) {
        switchButton.addEventListener('click', function (e) {

            let nextSwitch = '';
            for (let i = 0; i < switches.length; i++) {
                if (!switches[i].classList.contains('active')) {
                    nextSwitch = switches[i];
                }
            }

            let id = nextSwitch.dataset.id,
                activeTab = document.querySelector('.best__tab[data-id="' + id + '"]');

            //Toggle switces
            for (let i = 0; i < switches.length; i++) {
                switches[i].classList.remove('active');
            }
            nextSwitch.classList.add('active');

            //Toggle tabs
            for (let i = 0; i < tabs.length; i++) {
                tabs[i].classList.remove('active');
            }
            activeTab.classList.add('active');

            //Toggle button
            this.classList.toggle('right');

        });
    }
}());