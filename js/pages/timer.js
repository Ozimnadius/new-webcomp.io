function Timer(settings) {
    this.endTime = settings.endTime;
    this.timer = settings.timer;
    this.total = '';
    this.timer = {
        hours: {
            wrap: {
                ten: this.timer.querySelector('.timer__hour-ten .timer__wrap'),
                unit: this.timer.querySelector('.timer__hour-unit .timer__wrap')
            }
        },
        minutes: {
            wrap: {
                ten: this.timer.querySelector('.timer__minute-ten .timer__wrap'),
                unit: this.timer.querySelector('.timer__minute-unit .timer__wrap')
            }
        },
        seconds: {
            wrap: {
                ten: this.timer.querySelector('.timer__second-ten .timer__wrap'),
                unit: this.timer.querySelector('.timer__second-unit .timer__wrap')
            }
        }
    };

    let that = this;

    function getTimeRemaining() {
        let t = Date.parse(that.endTime) - Date.parse(new Date());
        let seconds = formatNumber(Math.floor((t / 1000) % 60)),
            minutes = formatNumber(Math.floor((t / 1000 / 60) % 60)),
            hours = formatNumber(Math.floor((t / (1000 * 60 * 60)) % 24));

        that.total = t;

        that.timer.seconds.time = {
            ten: parseInt(seconds.charAt(0)),
            unit: parseInt(seconds.charAt(1))
        };
        that.timer.minutes.time = {
            ten: parseInt(minutes.charAt(0)),
            unit: parseInt(minutes.charAt(1))
        };
        that.timer.hours.time = {
            ten: parseInt(hours.charAt(0)),
            unit: parseInt(hours.charAt(1))
        };
    }

    function formatNumber(num) {
        return new Intl.NumberFormat('ru-Ru', {minimumIntegerDigits: 2}).format(num)
    }

    function setTimer() {
        for(let key in that.timer) {
            let item = that.timer[key];

            item.wrap.ten.style.transform = 'translate3d(0,' + (item.time.ten*-100) + '%,0)';
            item.wrap.unit.style.transform = 'translate3d(0,' + (item.time.unit*-100) + '%,0)';
        }
    }

    this.init = function (e) {
        getTimeRemaining();
        setTimer();

        var timeInterval = setInterval(function(){
            getTimeRemaining(that.endTime);
            setTimer();
            if(that.total<=0){
                clearInterval(timeInterval);
            }
        },1000);
    }
}