(function () {
    let costSwithes = document.querySelector('.rek-price__switches-list');
    if (costSwithes) {

        let switches = new Switches({
            sws: '.rek-price__switches-list',
            sw: '.rek-price__switch',
            line: '.rek-price__subline',
            tab: '.rek-price__tab',
            autoWidth: true
        });
    }

}());