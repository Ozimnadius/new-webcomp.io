(function () {
    let sws = document.querySelector('.smm-str__sws-list');
    if (sws) {

        let switches = new Switches({
            sws: '.smm-str__sws-list',
            sw: '.smm-str__sw',
            tab: '.smm-str__tab',
            scrollbar: false
        });
    }

    $('.scrollTo').on('click', function (e) {
        e.preventDefault();

        let form = $($(this).attr('href'));

        $('html, body').animate({
            scrollTop: form.offset().top
        }, 400);

    });

}());