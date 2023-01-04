/**
 * @Script js for (Template/Project Name)
 *
 * @project     - Project Name
 * @author      - 
 * @created_by  - 
 * @created_at  - 
 * @modified_by -
 */


/**
 * ========================================================
 * this function execute when window properly loaded
 * ===========================================================
 */

// $(window).on('load', function () {


// });





/**
 * ========================================================
 * this function execute when DOM element ready 
 * ===========================================================
 */

$(document).ready(function () {

    // testimonial-active
    $(function () {
        if ($('.product-carousel').length) {
            $(".product-carousel").owlCarousel({
                items: 3,
                margin: 30,
                nav: true,
                loop: true,
                autoplay: false,
                autoplayTimeout: 2000,
                // animateOut: 'fadeOut',
                smartSpeed: 2000,
                navText: ["<img src='assets/img/arrow-left.svg' class='img-fluid' />", "<img src='assets/img/arrow-right-s.svg' class='img-fluid' />"],
                dots: false,
                autoplayHoverPause: true,
                responsive: {
                    0: {
                        items: 1
                    },
                    767: {
                        items: 2
                    },
                    1200: {
                        items: 3
                    }
                }
            });
        }
    });




    // sticky header
    // var stickyNavTop = $('.header').offset().top;
    // var stickyNav = function () {
    //     var scrollTop = $(window).scrollTop(); 
    //     if (scrollTop > stickyNavTop) {
    //         $('.header').addClass('sticky-header');
    //     } else {
    //         $('.header').removeClass('sticky-header');
    //     }
    // };
    // stickyNav();
    // $(window).scroll(function () {
    //     stickyNav();
    // });





    // wow js init
    $(function () {
        var wow = new WOW({
            animateClass: 'animated',
            mobile: true
        });
        wow.init();
    });





});


