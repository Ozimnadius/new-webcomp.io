(function () {
    const searchBtn = document.querySelector('.search__btn'),
        searchField = document.querySelector('.search__field'),
        searchForm = document.querySelector('.search');

    if (searchBtn) {
        searchBtn.addEventListener('click', function (e) {
            e.preventDefault();
            searchField.classList.toggle('active');
            document.querySelector('.autocomplete').classList.remove('active');
        });
    }

    const searchInput = document.querySelector('.search__input'),
        autocomplite = document.querySelector('.autocomplete');

    if (searchInput) {

        searchInput.addEventListener('input', function (e) {

            if (this.value.length > 1) {

                let data = {
                    string: this.value,
                    action: 'autocomplete'
                };

                $.ajax({
                    dataType: "json",
                    type: "POST",
                    url: 'php/ajax.php',
                    data: data,
                    success: function (result) {
                        if (result.status) {
                            autocomplite.innerHTML = '';
                            autocomplite.appendChild(createAutocompleteList(result.data));
                            autocomplite.classList.add('active');
                        } else {
                            alert('Что-то пошло не так, попробуйте еще раз!!!');
                        }
                    },
                    error: function (result) {
                        alert('Что-то пошло не так, попробуйте еще раз!!!');
                    }
                });

            }
        });

        searchInput.addEventListener('keydown', function (e) {

            let list = document.querySelector('.autocomplete__list'),
                items = document.querySelectorAll('.autocomplete__item'),
                activeItem = document.querySelector('.autocomplete__item.active'),
                nextItem = '',
                prevItem = '';

            // debugger;

            if (!activeItem) {
                nextItem = document.querySelector('.autocomplete__item'),
                    prevItem = items[items.length - 1];
            } else {
                if (activeItem.nextElementSibling) {
                    nextItem = activeItem.nextElementSibling;
                } else {
                    nextItem = document.querySelector('.autocomplete__item');
                }
                if (activeItem.previousElementSibling) {
                    prevItem = activeItem.previousElementSibling;
                } else {
                    prevItem = items[items.length - 1];
                }
            }


            if (e.keyCode == 40) { //arrow down
                clearListActive(items);
                nextItem.classList.add('active');
                searchInput.value = nextItem.innerHTML;
            } else if (e.keyCode == 38) { //arrow up
                clearListActive(items);
                prevItem.classList.add('active');
                searchInput.value = prevItem.innerHTML;
            }

        })

    }

    function clearListActive(list) {
        for (let i = 0; i < list.length; i++) {
            list[i].classList.remove('active');
        }
    }

    function createAutocompleteItem(text) {
        let item = document.createElement('li');
        item.classList.add('autocomplete__item');
        item.innerText = text;

        item.addEventListener('click', function (e) {
            searchInput.value = text;
            searchForm.submit();
        });

        return item;
    }

    function createAutocompleteList(data) {
        let list = document.createElement('ul');
        list.classList.add('autocomplete__list');

        for (let i = 0; i < data.length; i++) {
            list.appendChild(createAutocompleteItem(data[i]));
        }

        return list;
    }

}());