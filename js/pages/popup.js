(function () {

    const popup = document.querySelector('.popup'),
        popupClose = document.querySelector('.popup__close'),
        popupWrapper = popup.querySelector('.popup__wrapper'),
        callorderOpen = document.querySelector('.callorderOpen');

    if (callorderOpen) {
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

                                submitHandler: function(form) {
                                    getTimerForm();
                                },
                                invalidHandler: function(event, validator) {
                                    // debugger;
                                },
                                errorPlacement: function(error, element) {
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


}());