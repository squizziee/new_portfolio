$(document).ready(function () {
    var cursor = $(".cursor");
    var cursorWidth = 30;

    $(".hoverable").on("mouseenter", function () {
        cursor.addClass("cursor_active")
        cursorWidth = 70;
    })

    $(".hoverable").on("mouseleave", function () {
        cursor.removeClass("cursor_active")
        cursorWidth = 30;
    })

    $("body").on("mousemove", function (e) {
        cursor.css("top", e.pageY - cursorWidth / 2);
        cursor.css("left", e.pageX - cursorWidth / 2);
    })

    var mySwiper = new Swiper('.swiper-container', {
        direction: 'vertical',
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        scrollbar: {
            el: '.swiper-scrollbar',
        },
    })

    $(".toggle_btn").on("click", function() {
        $(".menu_bar_headline_text").toggleClass("menu_bar_headline_text_active");
        $(".navigation").toggleClass("navigation_active");
        setTimeout(function() {
            $(".navigation_option").toggleClass("navigation_option_final");
        }, 500);
    });

});