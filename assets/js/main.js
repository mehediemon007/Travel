;(function($){

    // WOW Animation
    
    $(document).ready(function () {
        new WOW().init();
    });

    // Swipe Slider

    // $(document).ready(function () {
    //     var swiper = new Swiper(".hero-banner-wpr", {
    //       autoplay: {
    //         delay: 5000,
    //         disableOnInteraction: false
    //       },
    //       speed: 500,
    //       loop: true,
    //       pagination: {
    //         el: ".swiper-pagination",
    //         type: "fraction"
    //       },
    //       navigation: {
    //         nextEl: ".swiper-button-next",
    //         prevEl: ".swiper-button-prev"
    //       },
    //       on: {
    //         init: function () {
    //           $(".swiper-progress-bar").removeClass("animate");
    //           $(".swiper-progress-bar").removeClass("active");
    //           $(".swiper-progress-bar").eq(0).addClass("animate");
    //           $(".swiper-progress-bar").eq(0).addClass("active");
    //         },
    //         slideChangeTransitionStart: function () {
    //           $(".swiper-progress-bar").removeClass("animate");
    //           $(".swiper-progress-bar").removeClass("active");
    //           $(".swiper-progress-bar").eq(0).addClass("active");
    //         },
    //         slideChangeTransitionEnd: function () {
    //           $(".swiper-progress-bar").eq(0).addClass("animate");
    //         }
    //       }
    //     });
    //     $(".swiper-container").hover(function () {
    //       swiper.autoplay.stop();
    //       $(".swiper-progress-bar").removeClass("animate");
    //     }, function () {
    //       swiper.autoplay.start();
    //       $(".swiper-progress-bar").addClass("animate");
    //     });
    // });

    var swiper = new Swiper(".trv-hero-banner", {
        // navigation: {
        //   nextEl: ".swiper-button-next",
        //   prevEl: ".swiper-button-prev",
        // },
        autoplay: {
            delay: 5000,
            disableOnInteraction: false
        },
        speed: 500,
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            type: "fraction"
        },
        on: {
            init: function () {
              $(".swiper-progress-bar").removeClass("animate");
              $(".swiper-progress-bar").removeClass("active");
              $(".swiper-progress-bar").eq(0).addClass("animate");
              $(".swiper-progress-bar").eq(0).addClass("active");
            },
            slideChangeTransitionStart: function () {
              $(".swiper-progress-bar").removeClass("animate");
              $(".swiper-progress-bar").removeClass("active");
              $(".swiper-progress-bar").eq(0).addClass("active");
            },
            slideChangeTransitionEnd: function () {
              $(".swiper-progress-bar").eq(0).addClass("animate");
            }
        }
    });

    // Services Slider

    $(".services-wpr").owlCarousel({
        items:5,
        loop:true,
        autoplay:true,
        margin: 12,
        stagePadding:8,
        nav:true,
        navText: ["<i class='icofont-thin-left'></i>","<i class='icofont-thin-right'></i>"],
        dots:false,
        center:true
    })

    // Client Review

    $(".client-reviews").owlCarousel({
        loop:true,
        autoplay:true,
        margin:16,
        nav:false,
        smartSpeed:500,
        responsive:{
            0:{
                items: 1.25
            },
            575:{
                items: 2.35
            },
        }
    })

    // Counter

    if($('.counter').length){

        $('.counter').counterUp({
            delay: 10,
            time: 1000
        });
    
    }
      

})(jQuery);

(function(){

    // Sticky Nav

    const headerContainer = document.querySelector(".clo-header.fixed");

    if(headerContainer != null && window.screen.width > 991){
        window.onscroll = ()=>{
            this.scrollY > 100 ? headerContainer.style.display = 'none' : headerContainer.style.display = 'block';
        }
    }

})()