(function () {
    let costSwithes = document.querySelector('.seo-price__switches-list');
    if (costSwithes) {

        let switches = new Switches({
            sws: '.seo-price__switches-list',
            sw: '.seo-price__switch',
            line: '.seo-price__subline',
            tab: '.seo-price__tab',
            autoWidth: true
        });
    }

    let acco = document.querySelector('.seo-faq__acco'),
        accoItems = document.querySelectorAll('.seo-faq__item');

    if (acco) {
        acco.addEventListener('click', function (e) {
            let target = e.target;

            if (target.classList.contains('seo-faq__item-title')) {

                let item = target.parentNode,
                    itemWrap = item.querySelector('.seo-faq__item-wrap'),
                    itemContent = item.querySelector('.seo-faq__item-desc'),
                    height = itemContent.offsetHeight+'px';


                for (let i = 0; i < accoItems.length; i++) {
                    if (accoItems[i] != item) {
                        accoItems[i].querySelector('.seo-faq__item-wrap').style.height = '';
                    }
                }

                if (!itemWrap.style.height) {
                    itemWrap.style.height = height;
                } else {
                    itemWrap.style.height = '';
                }
            }

        });
    }
}());