$(document).ready( function(){
    //menu_slide
    var mainMenuSlide = new Swiper('.main_menu-container', {
        slidesPerView: 4,

        breakpoints: {

            1200: {
                slidesPerView: 4,
                spaceBetween: 30,
            }, 
            768: {
                slidesPerView: 4,
                spaceBetween: 20,
            },
            500: {
                slidesPerView: 3, 
                spaceBetween: 20,
            },
            300: {
                slidesPerView: 3,
                spaceBetween: 20,
            }
        }
    }); 
    //aside left_menu slide
    // var leftswiper = new Swiper('.left_menu-container', {
    //     slidesPerView: 2,


    //     loop: true,
    //     effect: 'fade',
    //     pagination: {
    //         el: '.swiper-pagination',
    //         clickable: true,
    //     },
    //     // navigation: {
    //     //     nextEl: '.swiper-button-next',
    //     //     prevEl: '.swiper-button-prev',
    //     // },
    //     autoplay: {
    //         delay: 2000,
    //     },
    //     on: {
    //         resize: function () {
    //           swiper.changeDirection(getDirection());
    //         }
    //       },
    //     breakpoints: {

    //         1200: {
    //             slidesPerView: 2,
    //             spaceBetween: 30,
    //         }, 
    //         768: {
    //             slidesPerView: 2,
    //             spaceBetween: 20,
    //         },
    //         300: {
    //             slidesPerView: 1,
    //             spaceBetween: 20,
    //         }
    //     }

    // });

    // var swiper = new Swiper('.left_menu-container', {
    //     slidesPerView: 1,
    //     spaceBetween: 10,
    //     nextButton: '.swiper-button-next',
    //     prevButton: '.swiper-button-prev',

    //     // init: false,
    //     pagination: {
    //       el: '.swiper-pagination',
    //       clickable: true,
    //     },
    //     breakpoints: {
    //       '@0.00': {
    //         slidesPerView: 2,
    //         spaceBetween: 10,
    //       },
    //       '@0.75': {
    //         slidesPerView: 2,
    //         spaceBetween: 20,
    //       },
    //       '@1.00': {
    //         slidesPerView: 2,
    //         spaceBetween: 40,
    //       },
    //       '@1.50': {
    //         slidesPerView: 2,
    //         spaceBetween: 50,
    //       },
    //     },
        
    //   });

      var swiper = new Swiper('.left_menu-container', {
        pagination: '.swiper-pagination',
        loop: true,
        slidesPerView: 2,
        paginationClickable: true,
        spaceBetween: 10,
        autoplay: 3000
    });

    //main_banner slide
    var mainswiper = new Swiper('.main-container', {
        slidesPerView: 1,
        spaceBetween: 30,

        loop: true,
        effect: 'fade',
        /* pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }, */
        autoplay: 3000

        

    });

    //circleSlide
    var circleSlide = new Swiper('.circle_slide-container', {
        slidesPerView: 4,

        breakpoints: {

            1200: {
                slidesPerView: 4,
                spaceBetween: 30,
            }, 
            768: {
                slidesPerView: 4,
                spaceBetween: 20,
            },
            300: {
                slidesPerView: 2,
                spaceBetween: 20,
            }
        }
    }); 

});
    
    
