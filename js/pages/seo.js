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
}());