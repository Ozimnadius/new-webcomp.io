(function () {

    let promoteFormOpen= document.querySelector('.promote-first__button'),
        promoteFirst = document.querySelector('.promote-first__wrapper'),
        promoteCalc = document.querySelector('.promote-first__calc');
    if (promoteFormOpen) {
        promoteFormOpen.addEventListener('click', function (e) {
            promoteFirst.classList.add('disabled');
            promoteCalc.classList.add('active');
        });
    }
    let promoteFormClose = document.querySelector('.promote-calc__close')
    if (promoteFormClose) {
        promoteFormClose.addEventListener('click', function (e) {
            promoteFirst.classList.remove('disabled');
            promoteCalc.classList.remove('active');
        });
    }

}());