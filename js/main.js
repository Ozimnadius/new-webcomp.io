(function () {

    let pagItems = document.querySelector('.pag__items'),
        pagAllItem = document.querySelectorAll('.pag__item'),
        sections = document.querySelectorAll('section'),
        mainContent = document.querySelector('.main'),
        inScroll = false,
        figure = document.querySelector('.figure'),
        screen = 0;


    function index(list, item) {
        return Array.prototype.indexOf.call(list, item);
    }

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

        pagAllItem[sectionIndex].classList.add('active');
        pagItems.style.transform = 'translate3d(0,' + translateY + 'px,0)';

        section.classList.add('active-page');
        mainContent.style.transform = 'translate3d(0,' + position + ',0)';


        if (section.classList.contains('about')) {
            setTimeout(function () {
                figure.classList.add('active');
            }, 1000);

        } else {
            figure.classList.remove('active');
        }

        if (sectionIndex === 3) {
            document.querySelector('.pag__arrow-line').style.opacity = 0;
        } else {
            document.querySelector('.pag__arrow-line').style.opacity = 1;
        }

        setTimeout(function () {
            inScroll = false;

        }, 500);

    }

    pagItems.addEventListener('click', function (e) {
        if (e.target.classList.contains('pag__item')) {
            scrollToSection(index(pagAllItem, e.target));
        }
    });


    document.addEventListener('wheel', function (e) {
        e.preventDefault();

        let deltaY = e.deltaY,
            activeSection = document.querySelector('.active-page'),
            nextSection = activeSection.nextElementSibling,
            prevSection = activeSection.previousElementSibling;


        if (inScroll) return;

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


    $.fn.hyphenate = function () {
        var all = "[абвгдеёжзийклмнопрстуфхцчшщъыьэюя]",
            glas = "[аеёиоуыэю\я]",
            sogl = "[бвгджзклмнпрстфхцчшщ]",
            zn = "[йъь]",
            shy = "\xAD",
            re = [];

        re[1] = new RegExp("(" + zn + ")(" + all + all + ")", "ig");
        re[2] = new RegExp("(" + glas + ")(" + glas + all + ")", "ig");
        re[3] = new RegExp("(" + glas + sogl + ")(" + sogl + glas + ")", "ig");
        re[4] = new RegExp("(" + sogl + glas + ")(" + sogl + glas + ")", "ig");
        re[5] = new RegExp("(" + glas + sogl + ")(" + sogl + sogl + glas + ")", "ig");
        re[6] = new RegExp("(" + glas + sogl + sogl + ")(" + sogl + sogl + glas + ")", "ig");
        return this.each(function () {
            var text = $(this).html();
            for (var i = 1; i < 7; ++i) {
                text = text.replace(re[i], "$1" + shy + "$2");
            }
            $(this).html(text);
        });
    };

    $('.about__content').hyphenate();

    function getComputedTranslateY(obj) {
        if (!window.getComputedStyle) return;
        var style = getComputedStyle(obj),
            transform = style.transform || style.webkitTransform || style.mozTransform;
        var mat = transform.match(/^matrix3d\((.+)\)$/);
        if (mat) return parseFloat(mat[1].split(', ')[13]);
        mat = transform.match(/^matrix\((.+)\)$/);
        return mat ? parseFloat(mat[1].split(', ')[5]) : 0;
    }

    function getCssValuePrefix() {
        var rtrnVal = '';//default to standard syntax
        var prefixes = ['-o-', '-ms-', '-moz-', '-webkit-'];

        // Create a temporary DOM object for testing
        var dom = document.createElement('div');

        for (var i = 0; i < prefixes.length; i++) {
            // Attempt to set the style
            dom.style.background = prefixes[i] + 'linear-gradient(#000000, #ffffff)';

            // Detect if the style was successfully set
            if (dom.style.background) {
                rtrnVal = prefixes[i];
            }
        }

        dom = null;
        delete dom;

        return rtrnVal;
    }

    function GetNoun(number, one, two, five) {
        number = Math.abs(number);
        number %= 100;
        if (number >= 5 && number <= 20) {
            return five;
        }
        number %= 10;
        if (number == 1) {
            return one;
        }
        if (number >= 2 && number <= 4) {
            return two;
        }
        return five;
    }


    let range = document.querySelector('.calc__range');
    range.addEventListener('input', function () {

        let rangeVal = document.querySelector('.calc__range-val'),
            rangeTitle = document.querySelector('.calc__range-text');

        rangeVal.innerHTML = this.value;
        rangeTitle.innerHTML = ' ' + GetNoun(this.value, 'месяц', 'месяца', 'месяцев');
        this.style.backgroundImage = getCssValuePrefix() + 'linear-gradient(left ,#ffba00 0%,#ffba00 ' + this.value + '%, #352b4d ' + this.value + '%, #352b4d 100%)';

    });
}());


