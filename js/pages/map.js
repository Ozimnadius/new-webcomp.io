(function () {

    const button = document.querySelector('.contacts-map__button'),
        close = document.querySelector('.contacts-map__close'),
        map = document.querySelector('.contacts-map__map');

    if (button) {
        button.addEventListener('click', function (e) {
            e.preventDefault();
            map.classList.toggle('open');
        });
        close.addEventListener('click', function (e) {
            e.preventDefault();
            map.classList.remove('open');
        });
    }


}());