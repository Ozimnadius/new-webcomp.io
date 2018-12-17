(function () {
    let startButton = document.querySelector('.testing-start__button'),
    startLayer = document.querySelector('.testing-start'),
    formLayer = document.querySelector('.testing-slider');

    if (startButton) {
        startButton.addEventListener('click', function (e) {
            startLayer.classList.remove('active');
            formLayer.classList.add('active');
        })
    }

}());