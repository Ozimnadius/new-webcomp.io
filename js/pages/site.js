(function () {
    let costSwithes = document.querySelector('.site-cost__switches-list');
    if (costSwithes) {
        let costSwithesWidth = costSwithes.offsetWidth,
            costSwithesList = document.querySelectorAll('.site-cost__switch'),
            costLine = document.querySelector('.site-cost__subline'),
            costTabs = document.querySelectorAll('.site-cost__tab');

        for (let i = 0; i < costSwithesList.length; i++) {
            costSwithesList[i].addEventListener('click', function (e) {
                let percent = (this.offsetLeft / costSwithesWidth) * 100,
                    id = this.dataset.id,
                    tab = document.querySelector('.site-cost__tab[data-id="' + id + '"]');

                for (let i = 0; i < costSwithesList.length; i++) {
                    costSwithesList[i].classList.remove('active');
                }
                for (let i = 0; i < costTabs.length; i++) {
                    costTabs[i].classList.remove('active');
                }
                tab.classList.add('active');
                this.classList.add('active');
                costLine.style.left = percent + '%';

            });
        }
    }
}());