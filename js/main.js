$(document).ready( function(){
    //menu_slide
    var mainMenuSlide = new Swiper('.main_menu-container', {
        slidesPerView: 6,

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

    var swiper = new Swiper('.left_menu-container', {
        /* pagination: '.swiper-pagination', */
        loop: true,
        slidesPerView: 2,
        paginationClickable: true,
        spaceBetween: 10,
        autoplay: 3000,
        observer: true,
        observeParents: true
    });

    //main_banner slide
    var mainswiper = new Swiper('.main-container', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        effect: 'fade',
        autoplay: 3000
    });

    //circleSlide
    var circleSlide = new Swiper('.circle_slide-container', {
        slidesPerView: 4,
        loop: true,
        autoplay: 3000,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        breakpoints: {

            1200: {
                slidesPerView: 4,
                spaceBetween: 30,
            }, 
            768: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            300: {
                slidesPerView: 2,
                spaceBetween: 20,
            }
        }
    }); 

});
    
    
