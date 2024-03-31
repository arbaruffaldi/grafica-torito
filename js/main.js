$(document).ready(function () {
    $('a[href^="#"]').click(function () {
        var s = $(this.hash);
        return 0 == s.length && (s = $('a[name="' + this.hash.substr(1) + '"]')), 0 == s.length && (s = $("html")), $("html, body").animate({ scrollTop: s.offset().top }, 600), !1;
    })

    $(window).scroll(function () {
        var s, a, l;
        (s = document.querySelectorAll(".boxes")),
            [].forEach.call(s, function (s) {
                var a = s.dataset.animation;
                $(window).width() > 750
                    ? this.scrollY > s.offsetTop - document.documentElement.clientHeight
                        ? (s.classList.add("visible"), s.classList.add(a), s.classList.add("wow"), s.classList.add("animated"), s.classList.remove("invisible"))
                        : (s.classList.remove(a), s.classList.remove("visible"), s.classList.remove("wow"), s.classList.remove("animated"), s.classList.add("invisible"))
                    : this.scrollY > s.offsetTop - document.documentElement.clientHeight && (s.classList.add("visible"), s.classList.add(a), s.classList.add("wow"), s.classList.add("animated"), s.classList.remove("invisible"));
            }),
            (a = document.querySelectorAll(".parallaxAll")),
            (l = $(window).scrollTop()),
            [].forEach.call(a, function (s) {
                var a = s.dataset.parallax;
                $(s).css({ transform: "translateY(" + l * a + "px)" });
            });
    });
});
