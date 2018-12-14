(function () {

    const button = document.querySelector('.conts-map__button'),
        close = document.querySelector('.conts-map__close'),
        map = document.querySelector('.conts-map__map');

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