// (function () {

    const popup = document.querySelector('.popup'),
        popupClose = document.querySelector('.popup__close'),
        popupWrapper = popup.querySelector('.popup__wrapper'),
        callorderOpenAll = document.querySelectorAll('.callorderOpen'),
        pushOpenAll = document.querySelectorAll('.pushOpen');

    if (callorderOpenAll) {
        for (let i =0; i<callorderOpenAll.length; i++) {
            let callorderOpen = callorderOpenAll[i];

            callorderOpen.addEventListener('click', function (e) {

                let data = {
                    action: 'callorderForm'
                };

                $.ajax({
                    dataType: "json",
                    type: "POST",
                    url: 'php/ajax.php',
                    data: data,
                    success: function (result) {
                        if (result.status) {

                            popupWrapper.innerHTML = result.html;
                            popup.classList.add('active');
                            $(document.querySelector('.callorder .form')).validate(
                                {
                                    rules: {
                                        name: "required",
                                        tel: "required",
                                        email: "required"
                                    },
                                    messages: {
                                        name: "Введите ваше Имя",
                                        tel: "Введите ваш  Телефон",
                                        email: "Введите ваш Email"
                                    },

                                    submitHandler: function (form) {
                                        getTimerForm();
                                    },
                                    invalidHandler: function (event, validator) {
                                        // debugger;
                                    },
                                    errorPlacement: function (error, element) {
                                        element[0].placeholder = error[0].innerText;
                                    }
                                }
                            );

                        } else {
                            alert('Что-то пошло не так, попробуйте еще раз!!!');
                        }
                    },
                    error: function (result) {
                        alert('Что-то пошло не так, попробуйте еще раз!!!');
                    }
                });
            });
        }
    }

    if (pushOpenAll) {
        for (let i =0; i<pushOpenAll.length; i++) {
            let pushOpen = pushOpenAll[i];

            pushOpen.addEventListener('click', function (e) {
                e.preventDefault();
                let data = $(this).closest('form').serialize();

                $.ajax({
                    dataType: "json",
                    type: "POST",
                    url: 'php/ajax.php',
                    data: data,
                    success: function (result) {
                        if (result.status) {

                            popupWrapper.innerHTML = result.html;
                            popup.classList.add('active');
                            $(document.querySelector('.callorder .form')).validate(
                                {
                                    rules: {
                                        name: "required",
                                        tel: "required",
                                        email: "required"
                                    },
                                    messages: {
                                        name: "Введите ваше Имя",
                                        tel: "Введите ваш  Телефон",
                                        email: "Введите ваш Email"
                                    },

                                    submitHandler: function (form) {
                                        getTimerForm();
                                    },
                                    invalidHandler: function (event, validator) {
                                        // debugger;
                                    },
                                    errorPlacement: function (error, element) {
                                        element[0].placeholder = error[0].innerText;
                                    }
                                }
                            );

                        } else {
                            alert('Что-то пошло не так, попробуйте еще раз!!!');
                        }
                    },
                    error: function (result) {
                        alert('Что-то пошло не так, попробуйте еще раз!!!');
                    }
                });
            });
        }
    }

    function getTimerForm(){

        let data = {
            action: 'timerForm'
        };

        $.ajax({
            dataType: "json",
            type: "POST",
            url: 'php/ajax.php',
            data: data,
            success: function (result) {
                if (result.status) {

                    popupWrapper.innerHTML = result.html;
                    popup.classList.add('active');

                    let timer = new Timer({
                        endTime: result.endTime,
                        timer: document.querySelector('.timer')
                    }).init();

                } else {
                    alert('Что-то пошло не так, попробуйте еще раз!!!');
                }
            },
            error: function (result) {
                alert('Что-то пошло не так, попробуйте еще раз!!!');
            }
        });
    }

    popup.addEventListener('click', function (e) {
        if (e.target.classList.contains('popup__wrapper') || e.target.classList.contains('popup__close-img')) {
            popup.classList.remove('active');
        }
    });

    const tarifs = document.querySelectorAll('.host-tarifs__item');

    if (tarifs) {
        for (let i =0; i<tarifs.length; i++) {

            tarifs[i].addEventListener('click', function (e) {
                e.preventDefault();


                let data = {
                    id: this.dataset.id,
                    name: this.dataset.name,
                    action: 'tarifForm'
                };

                $.ajax({
                    dataType: "json",
                    type: "POST",
                    url: 'php/ajax.php',
                    data: data,
                    success: function (result) {
                        if (result.status) {
                            popupWrapper.innerHTML = result.html;
                            popup.classList.add('active');
                        } else {
                            alert('Что-то пошло не так, попробуйте еще раз!!!');
                        }
                    },
                    error: function (result) {
                        alert('Что-то пошло не так, попробуйте еще раз!!!');
                    }
                });
            })
        }
    }



// }());