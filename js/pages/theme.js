(function () {
    let costSwithes = document.querySelector('.theme-price__switches-list');
    if (costSwithes) {

        let switches = new Switches({
            sws: '.theme-price__switches-list',
            sw: '.theme-price__switch',
            line: '.theme-price__subline',
            tab: '.theme-price__tab',
            autoWidth: true
        });
    }

}());