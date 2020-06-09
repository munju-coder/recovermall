$(document).ready( function(){
    //menu_slide
    var mainMenuSlide = new Swiper('.main_menu-container', {
        slidesPerView: 5,

        breakpoints: {

            1200: {
                slidesPerView: 6,
                spaceBetween: 30,
            }, 
            768: {
                slidesPerView: 4,
                spaceBetween: 20,
            },
            500: {
                slidesPerView: 4,
                spaceBetween: 20,
            },
            300: {
                slidesPerView: 3,
                spaceBetween: 20,
            }
        }
    }); 

    //main_banner slide
    var mainswiper = new Swiper('.main-container', {
        slidesPerView: 1,
        spaceBetween: 30,

        loop: true,
        effect: 'fade',
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        autoplay: {
            delay: 3000,
        },

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
    
    
