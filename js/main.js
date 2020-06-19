$(document).ready( function(){
    //menu_slide
    var mainMenuSlide = new Swiper('.main_menu-container', {
        slidesPerView: 6,		  
        /* loop: true, */
        spaceBetween: 10,
        breakpoints: {

            1200: {
                slidesPerView: 6,
                spaceBetween: 10,
            }, 
            768: {
                slidesPerView: 5,
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
 
    //main_banner slide
    var mainswiper = new Swiper('.main-container', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 4000,
        },
        effect: 'fade',
        
    });

    var leftswiper = new Swiper('.left_menu-container', {
        /* pagination: '.swiper-pagination', */
        loop: true,
        autoplay: {
            delay: 3000,
        },
        slidesPerView: 1,
        paginationClickable: true,
        spaceBetween: 10,
        observer: true,
        observeParents: true
    });

    //circleSlide
    var circleSlide = new Swiper('.circle_slide-container', {
        slidesPerView: 3,
        spaceBetween: 300,
        loop: true,
        autoplay: {
            delay: 3000,
        },
        navigation : {
            nextEl : '.swiper-button-next', 
            prevEl : '.swiper-button-prev', 
        },
        breakpoints: {

            1200: {
                slidesPerView: 4,
                spaceBetween: 30,
            }, 
            768: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            500: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            300: {
                slidesPerView: 1,
                spaceBetween: 20,
            }

        }
    }); 
    

    /* $(".circle_slide-container").mouseenter(function(){
        circleSlide.stopAutoplay();

        
    });
 */
    // $(".circle_slide-container").find(".swiper-slide").each(function(){
    //     $(this).mouseenter(function(){
    //         //circleSlide.stopAutoplay();
    //         //var name = $(this).attr("name");
    //         //$(this).css("background-color","red");
    //     });        
    // });    
    
    // $(".circle_slide-container").mouseleave(function(){
    //     //circleSlide.startAutoplay();
    // });

    // $(".start").on('click', function () {
    //     circleSlide.startAutoplay();
    // });

    // $(".stop").on('click', function () {
    //     circleSlide.stopAutoplay();
    // });


  




});
    
    
