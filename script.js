class Table {
    constructor() {
        this.btn = document.getElementById('hideBtn');
        this.content = document.querySelector('.row-wrapper');
        this.row = document.getElementsByClassName('row');
        this.rowSum = parseInt(getComputedStyle(this.row[1]).height) + parseInt(getComputedStyle(this.row[0]).height);
        this.rowHeight = parseInt(getComputedStyle(this.row[0]).height);
        this.contentHeight = parseInt(getComputedStyle(this.content).height);
        this.contains = document.querySelectorAll('.contains.firstContains div');

        this.resolutionFunc();
    }

    calc(num) {
        this.result = num;
        for (let i = 0; i < this.contains.length; i++) {
            if (i >= 5) {
                false;
            } else {
                this.result += parseInt(getComputedStyle(this.contains[i]).height);
                if (i >= 1) {
                    this.result += 10;
                } else {
                    this.result += 20;
                }
            }
        }
    }

    resolutionFunc() {
        let that = this;
        
        if (document.body.clientWidth > 768) {
            that.calc(0);
            that.hideContent();
        } if (document.body.clientWidth <= 769 && document.body.clientWidth < 1200 && !(document.body.clientWidth <= 576)) {
            that.calc(65);
            that.hideContent();
        } if (!(document.body.clientWidth >= 576)) {
            that.calc(65);
            that.hideContent();
        }

        window.onresize = function () {
            // that.contentHeight = parseInt(getComputedStyle(that.content).height);
            if (document.body.clientWidth > 768) {
                that.rowSum = parseInt(getComputedStyle(that.row[1]).height) + parseInt(getComputedStyle(that.row[0]).height);
                that.calc(0);
                that.hideContent();
                // that.contentHeight = parseInt(getComputedStyle(that.content).height);
            } if (document.body.clientWidth <= 769 && document.body.clientWidth < 1200 && !(document.body.clientWidth <= 576)) {
                
                that.rowSum = parseInt(getComputedStyle(that.row[1]).height) + parseInt(getComputedStyle(that.row[0]).height);
                that.calc(65);
                that.hideContent();
                // that.contentHeight = parseInt(getComputedStyle(that.content).height);
                console.log(that.contentHeight);
            } if (!(document.body.clientWidth >= 576)) {
                that.rowSum = parseInt(getComputedStyle(that.row[1]).height) + parseInt(getComputedStyle(that.row[0]).height);
                that.calc(65);
                
                that.hideContent();
                // that.contentHeight = parseInt(getComputedStyle(that.content).height);
            }
        };

    }

    hideContent() {
        let that = this;
        let counter = true;

        this.content.style.height = `${this.result + 15}px`;

        this.btn.onclick = function () {
            that.content.style.transition = '0.4s ease-in-out';

            // that.calcDesk();
            if (counter == true) {
                counter = false;
                that.content.style.height = `${that.rowSum}px`;
                that.btn.children[0].innerHTML = 'ПОКАЗАТЬ ВСЕ';
                that.btn.style.boxShadow = 'none';
            } else {
                counter = true;
                that.content.style.height = `${that.result + 15}px`;
                that.btn.children[0].innerHTML = 'ОТКРЫТЬ';
                that.btn.style.boxShadow = '0px -30px 35px #f5f5f5';
            }
        }
    }
}
window.onload = function () {
    const table = new Table();
}
