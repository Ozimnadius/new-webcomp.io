(function () {
    let costSwithes = document.querySelector('.site-cost__switches-list');
    if (costSwithes) {

        let switches = new Switches({
            sws: '.site-cost__switches-list',
            sw: '.site-cost__switch',
            line: '.site-cost__subline',
            tab: '.site-cost__tab'
        });
    }

    let formNextAll = document.querySelectorAll('.site-cost .form__button');
    if (formNextAll) {
        for (let i=0; i<formNextAll.length; i++) {
            formNextAll[i].addEventListener('click', function (e) {
                document.querySelector('.site-cost__switch.active').nextElementSibling.click();
            });
        }

    }

}());