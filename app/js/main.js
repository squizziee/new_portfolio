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

    function sidebarToggle() {
        $(".menu_bar_headline_text").toggleClass("menu_bar_headline_text_active");
        $(".navigation").toggleClass("navigation_active");
        setTimeout(function() {
            $(".navigation_option").toggleClass("navigation_option_final");
        }, 500);
    }

    $(".toggle_btn").on("click", function() {
       sidebarToggle();
    });

    $(".about_toggle").on("click", function() {
        sidebarToggle();
        setTimeout(function() {
            $(".content_section:nth-child(2)").css("transform", "translateY(0)");
            $(".content_section:nth-child(3)").css("transform", "translateY(-100vh)");
            $(".content_section:nth-child(4)").css("transform", "translateY(-200vh)");
            $(".content_section:nth-child(5)").css("transform", "translateY(-300vh)");
        }, 500);
    });

    $(".contact_toggle").on("click", function() {
        sidebarToggle();
        setTimeout(function() {
            $(".content_section:nth-child(2)").css("transform", "translateY(100vh)");
            $(".content_section:nth-child(3)").css("transform", "translateY(0)");
            $(".content_section:nth-child(4)").css("transform", "translateY(-100vh)");
            $(".content_section:nth-child(5)").css("transform", "translateY(-200vh)");
        }, 500);    
    });

    $(".projects_toggle").on("click", function() {
        sidebarToggle();
        setTimeout(function(){
            $(".content_section:nth-child(2)").css("transform", "translateY(200vh)");
            $(".content_section:nth-child(3)").css("transform", "translateY(100vh)");
            $(".content_section:nth-child(4)").css("transform", "translateY(0)");
            $(".content_section:nth-child(5)").css("transform", "translateY(-100vh)");
        }, 500);
    });

    $(".testimonials_toggle").on("click", function() {
        sidebarToggle();
        setTimeout(function() {
            $(".content_section:nth-child(2)").css("transform", "translateY(300vh)");
            $(".content_section:nth-child(3)").css("transform", "translateY(200vh)");
            $(".content_section:nth-child(4)").css("transform", "translateY(100vh)");
            $(".content_section:nth-child(5)").css("transform", "translateY(0)");
        }, 500);
    });
});