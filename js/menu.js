function scrollFunction() {
    var o = document.getElementById("sticky_nav");
    $(".nav").hasClass("is-open") ||
        (document.body.scrollTop > 70 || document.documentElement.scrollTop > 100
            ? (o.classList.add("bg-color-menu"),
                o.classList.remove("bg-transp-menu"),
                $(".nav__pageItem").addClass("black-font").removeClass("white-font"),
                $(".nav__logo > svg").css("fill", "black"),
                $(".hamburger__top, .hamburger__mid, .hamburger__bot").css("background", "var(--color-black800)"))
            : (o.classList.add("bg-transp-menu"),
                o.classList.remove("bg-color-menu"),
                $(".nav__pageItem").addClass("white-font").removeClass("black-font"),
                $(".nav__logo > svg").css("fill", "white"),
                $(".hamburger__top, .hamburger__mid, .hamburger__bot").css("background", "#EDEDED")));
}
function initMenuToggle() {
    $(".nav__toggle").on("click", function (o) {
        o.preventDefault(), o.stopPropagation(), toggleNav();
    }),
        $(".nav__pageItem >a, .nav__logo").on("click", function () {
            closeNav();
        }),
        $(".nav__bg").on("click touchstart", function () {
            closeNav();
        });
}
function toggleNav() {
    $(".nav").hasClass("is-open") ? closeNav() : openNav();
}
function openNav() {
    $(".nav").addClass("is-open"),
        $(".nav .hamburger").addClass("is-cross"),
        $(".logoSimbolo").css("fill", "var(--color-orange300)"),
        $(".logoTipo").css("fill", "black"),
        $(".hamburger__top, .hamburger__mid, .hamburger__bot").css("background", "var(--color-black800)");
}
function closeNav() {
    $(".nav").removeClass("is-open"), $(".nav .hamburger").removeClass("is-cross"), scrollFunction();
}
function initPageTransitions() {
    $(".barba-container").addClass("enter");
    var o = Barba.BaseTransition.extend({
        start: function () {
            cleanUp(), msExitPage();
            var o = this;
            setTimeout(function () {
                $("body").addClass("loading"), o.newContainerLoading.then(o.finish.bind(o));
            }, 300);
        },
        finish: function () {
            $(window).scrollTop(0), (scrollGoal = 0), $("body").removeClass("loading"), this.done(), reInit();
        },
    });
    Barba.Pjax.getTransition = function () {
        return o;
    };
}
function firstTimeInit() {
    initPageTransitions(), initMenuToggle();
}
function reInit() {
    setTimeout(function () {
        $(window).trigger("scroll");
    }, 1);
}
function cleanUp() {
    clearMFIntervals(), unMoss();
}
(window.onscroll = function () {
    scrollFunction();
}),
    $(document).ready(function () {
        firstTimeInit(), reInit();
    });
