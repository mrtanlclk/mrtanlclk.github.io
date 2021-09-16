window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        document.getElementById("main-navbar").style.padding = "0";
        document.getElementById("main-navbar").style.fontSize = "18px";
        document.getElementById("main-navbar").style.backgroundColor = "rgb(0, 32, 43)";
        document.getElementById("link").style.color = "rgb(245, 189, 79)";
        document.getElementById("link1").style.color = "rgb(245, 189, 79)";
        document.getElementById("link2").style.color = "rgb(245, 189, 79)";
        document.getElementById("link3").style.color = "rgb(245, 189, 79)";
        document.getElementById("link4").style.color = "rgb(245, 189, 79)";
        document.getElementById("link5").style.color = "rgb(245, 189, 79)";

    } else {
        document.getElementById("main-navbar").style.padding = "10px 10px";
        document.getElementById("main-navbar").style.fontSize = "20px";
        document.getElementById("main-navbar").style.backgroundColor = "rgb(245, 189, 79)";
        document.getElementById("link").style.color = "rgb(0, 32, 43)";
        document.getElementById("link1").style.color = "rgb(0, 32, 43)";
        document.getElementById("link2").style.color = "rgb(0, 32, 43)";
        document.getElementById("link3").style.color = "rgb(0, 32, 43)";
        document.getElementById("link4").style.color = "rgb(0, 32, 43)";
        document.getElementById("link5").style.color = "rgb(0, 32, 43)";

    }
}



var TxtType = function (el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function () {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
    }

    setTimeout(function () {
        that.tick();
    }, delta);
};

window.onload = function () {
    var elements = document.getElementsByClassName('titles');
    for (var i = 0; i < elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
            new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".titles > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
};
