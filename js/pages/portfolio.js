(function () {
    let dragObject = {},
        item = document.querySelector('.port-lap__drug.draggable');

    if (item) {

        let width = document.querySelector('.port-lap__container').offsetWidth;

        item.onmousedown = function (e) {

            let elem = e.target.closest('.draggable');
            // запомнить переносимый объект
            dragObject.elem = elem;

            // запомнить координаты, с которых начат перенос объекта
            dragObject.downX = e.pageX;
        };

        document.onmousemove = function (e) {


            if (!dragObject.elem) return; // элемент не зажат

            // посчитать дистанцию, на которую переместился курсор мыши
            let moveX = e.pageX - dragObject.downX;
            dragObject.downX = e.pageX;

            if (Math.abs(moveX) < 3) {
                return; // ничего не делать, мышь не передвинулась достаточно далеко
            }

            let offsetLeft = dragObject.elem.offsetLeft + 31.15 + moveX;

            dragObject.avatar = document.querySelector('.port-lap__before'); // захватить элемент

            let percent = 100 - ((offsetLeft / width) * 100);
            if (percent < 0) return;

            console.log(percent);

            // отобразить перенос объекта при каждом движении мыши
            dragObject.avatar.style.right = percent + '%';

        };

        document.onmouseup = function (e) {

            dragObject = {
                elem: null,
                avatar: null
            };
        }
    }

}());