$(document).ready(function () {
    $(".content_section:nth-child(2)").css("transform", "translateY(0)");
    $(".content_section:nth-child(3)").css("transform", "translateY(100vh)");
    $(".content_section:nth-child(4)").css("transform", "translateY(200vh)");
    $(".content_section:nth-child(5)").css("transform", "translateY(300vh)");
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

    var sectionCount = 4;

    function sidebarToggle() {
        $(".navigation").toggleClass("navigation_active");
        setTimeout(function() {
            $(".navigation_option").toggleClass("navigation_option_final");
        }, 500);
    }

    $(".toggle_btn").on("click", function() {
       sidebarToggle();
       $(this).toggleClass("toggle_btn_active");
    });

    $(".about_toggle").on("click", function() {
        setActiveMenuOption($(this));
        sidebarToggle();
        setActiveSection(1);
    });

    $(".contact_toggle").on("click", function() {
        setActiveMenuOption($(this));
        sidebarToggle();
        setActiveSection(2);
    });

    $(".projects_toggle").on("click", function() {
        setActiveMenuOption($(this));
        sidebarToggle();
        setActiveSection(3);
    });

    $(".testimonials_toggle").on("click", function() {
        setActiveMenuOption($(this));
        sidebarToggle();
        setActiveSection(4);
    });

    function setActiveSection(sectionIndex) {
        setTimeout(function() {
            changeHeadline(sectionIndex);
            moveSections(sectionIndex + 1);
        }, 500);
        setTimeout(function() {
            $(".menu_bar_headline_text:nth-child(" + sectionIndex + ")")
                .addClass("menu_bar_headline_text_active");
        }, 900);
    }

    function changeHeadline(activeSectionIndex) {
        for (var i = 1; i <= sectionCount; i++) {
            if (i != activeSectionIndex) {
                $(".menu_bar_headline_text:nth-child(" + i +")")
                    .removeClass("menu_bar_headline_text_active");
            }
        }
        $(".menu_bar_headline_text:nth-child("+ activeSectionIndex +")")
            .addClass("menu_bar_headline_text_active");
    }

    function moveSections(activeSectionIndex) {
        $(".content_section:nth-child(" + activeSectionIndex +")")
            .css("transform", "translateY(0)");
        var movementCoeffPos = 0
        for (var i = activeSectionIndex + 1; i <= sectionCount + 1; i++) {
            movementCoeffPos++;
            $(".content_section:nth-child("+ i +")")
                .css("transform", "translateY(" + movementCoeffPos * 100 +"vh)");
        }
        var movementCoeffNeg = 0
        for (var i = activeSectionIndex - 1; i > 0; i--) {
            movementCoeffNeg--;
            $(".content_section:nth-child("+ i +")")
                .css("transform", "translateY(" + movementCoeffNeg * 100 +"vh)");
        }
    }

    function setActiveMenuOption(obj) {
        setTimeout(function (params) {
            $(".navigation_option").removeClass("navigation_option_active");
            obj.addClass("navigation_option_active");
        }, 500);
    }

    function setDefaultSectionPositions() {
        setActiveSection(1);
    }
});