(function () {

    const button = document.querySelector('.articles__more'),
        hidden = document.querySelector('.articles__hidden'),
        hiddenLIst = hidden.querySelector('.articles__list'),
        height = hiddenLIst.offsetHeight;

    button.addEventListener('click', function (e) {
       e.preventDefault();

       hidden.style.height = height+'px';
    });


}());