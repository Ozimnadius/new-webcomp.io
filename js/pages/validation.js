$('.form').each(function (indx, elem) {
    $(elem).validate(
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
                // debugger;
            }
        }
    );
});

$('.calc').validate(
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
            // debugger;
        }
    }
);

let smmForm = $('.smm-calc__form form');

if(smmForm.length>0) {
    smmForm.validate().destroy();
    smmForm.validate(
        {
            rules: {
                name: "required",
                tel: "required"
            },
            messages: {
                name: "Введите ваше Имя",
                tel: "Введите ваш  Телефон"
            },

            submitHandler: function (form) {
                getTimerForm();
            },
            invalidHandler: function (event, validator) {
                // debugger;
            },
            errorPlacement: function (error, element) {
                element[0].placeholder = error[0].innerText;
                // debugger;
            }
        }
    );
}

let siteForm = $('.site-cost__form');

if(siteForm.length>0) {
    siteForm.validate().destroy();
    siteForm.validate(
        {
            rules: {
                name: "required",
                tel: "required"
            },
            messages: {
                name: "Введите ваше Имя",
                tel: "Введите ваш  Телефон"
            },

            submitHandler: function (form) {
                getTimerForm();
            },
            invalidHandler: function (event, validator) {
                // debugger;
            },
            errorPlacement: function (error, element) {
                element[0].placeholder = error[0].innerText;
                // debugger;
            }
        }
    );
}



