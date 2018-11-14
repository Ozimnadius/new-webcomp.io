(function () {
    let pagItems = document.querySelector('.pag__items'),
        pagAllItem = document.querySelectorAll('.pag__item');

    pagItems.addEventListener('click', function (e) {

        if (e.target.classList.contains('pag__item')) {
            changePagItem(e.target);
        }

    });

    function changePagItem(item) {
        let translateY = (Array.prototype.indexOf.call(pagAllItem, item)) * -102;

        for (let i = 0; i < pagAllItem.length; i++) {
            pagAllItem[i].classList.remove('active');
        }

        item.classList.add('active');
        pagItems.style.transform = 'translate3d(0,'+translateY+'px,0)'
    }

    function getComputedTranslateY(obj) {
        if (!window.getComputedStyle) return;
        var style = getComputedStyle(obj),
            transform = style.transform || style.webkitTransform || style.mozTransform;
        var mat = transform.match(/^matrix3d\((.+)\)$/);
        if (mat) return parseFloat(mat[1].split(', ')[13]);
        mat = transform.match(/^matrix\((.+)\)$/);
        return mat ? parseFloat(mat[1].split(', ')[5]) : 0;
    }


}());