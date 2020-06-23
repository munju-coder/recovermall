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
        initialSlide: 5,
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
        // autoplay: {
        //     delay: 3000,
        // },
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

    //header top banner
    $('.wrap header .header_top a').click( function(){
        $('.wrap header .header_top').slideToggle(200,'linear');
    }); 

    //header login_after UI
    $('.login_after').click( function(){
        // e.preventDefault();
        // console.log('a');
        /* $('.login_after_contents').slideToggle({
            direction: "down"
        },300); */

        $('.login_after_contents').toggle().stop().animate({'left':0},1000);

        if($(".login_after_contents").css("display") == "block")
        {
            // console.log(1);
            $('.hdr_wrap a i').attr('class','fa fa-sort-up');
        }
        else
        {
            $('.hdr_wrap a i').attr('class','fa fa-sort-down');
        }
    });

    //header_bottom  main_menu mouseenter event
    // $('.main_menu_icon, .main_menu-container .main_all_cate').mouseenter( function(){
    //     $('nav').css({'display':'block'});

    // });

    // $('nav').mouseleave( function(){
        
    //     $('nav').css({'display':'none'});
    // });


    // $('.left_tab_subject ul li').click( function(){
    //     $('.left_tab_subject ul li').each( function(){
    //         $('.left_tab_subject ul li').addClass('active');

    //     });
    // });

    //aside fixed_top_btn click event
    $("aside.fixed_top_btn a img").click(function () {
        
        $('html').animate({
            scrollTop: 0
        }, 500);
    });

    //aside left_menu catego_menu sub_slide 
    $('.cate_gnb .left_tab_contents ul li a').on('click', function(){
        $(this).parent().siblings().children('a').removeClass('on');
        $(this).parent().siblings().find('.left_sub_menu').stop().slideUp(400);

        var chk = $(this).next().length;

        if(chk > 0)
        {
            if($(this).hasClass('on')){
                $(this).removeClass('on');
                $(this).next().stop().slideUp(400);
            }else{
                $(this).addClass('on');
                $(this).next().stop().slideDown(400);
            }
        }                            
    });

    //aside left_menu tab
    $('.left_tablinks').each( function(){
        $(this).click( function(){

            $(".left_tablinks").removeClass("catego_active current");
            $(this).addClass("catego_active current");
            
            //$(this).addClass('current');

            $(".cate_gnb .left_tab").removeClass("left_tab_active");
            $(".cate_gnb .left_tab").css("display", "none");

            var chk = $(this).attr("tab_name");
            $('#' + chk).css("display", "block");
        });
        

    });

    // $('.left_menu .catego_menu .left_tab_subject ul li').click( function(){
    //     $('.catego_menu .left_tab_subject ul li').addClass('active');
    // });


    // $('.main_menu_icon').click( function(){
    //     var onOff=false; 
    //     onOff=!onOff;
    //     console.log(onOff); //true
    //     if ( onOff ) {
    //         $( 'aside.left_menu_wrap' ).stop().animate({ 'left' : 0 }, 2000, "easeOutExpo");
    //         $('.menu_bg').css({'display':'block'});                             
    //     }else {
            
    //         $( 'aside.left_menu_wrap' ).stop().animate({ 'left' : -580 }, 2000, "ease");
    //     }

    //     $('.left_logo .close_btn, .menu_bg').click( function(){
    //         $( 'aside.left_menu_wrap' ).stop().animate({ 'left' : -580 }, 2000, "easeOutExpo");
    //         $('.menu_bg').css({'display':'none'});   
    //     });
    // });

    //aside_left click event
    $('.main_menu_icon, .M_menu_icon').click( function(){

        $('.menu_bg').delay(300).fadeIn('slow');
        $('aside.left_menu_wrap').addClass('active');

        /*.main_menu_icon mouseenter event delete*/
        $('nav').css({'display':'none'});
    });

    $('.close_btn').click( function(){

        $('aside.left_menu_wrap').removeClass('active');
        $('.menu_bg').fadeOut('slow');
    });

    $('.menu_bg').click( function(){

        $('aside.left_menu_wrap').removeClass('active');
        $('.menu_bg').fadeOut('slow');
    });

    //aside left close_btn transition event
    $('.left_logo .close_btn a i').mouseenter( function(){

        $(this).stop().transition({'rotate':'180deg'},700); 
    });

    $('.left_logo .close_btn a i').mouseleave( function(){

        $(this).stop().transition({'rotate':0},700);
    });

    //Mobile search icon click event
    $('.M_search_a,.Msb_top_close').click( function(){
        // console.log('a');
        // $('.M_search_box').slideToggle();
        $('.M_search_box').slideToggle();
        

    });

    $( window ).resize(function() {
        var width = $( window ).width();
        if( width > 768 ) {
            $('.M_search_box').css({'display':'none'});
        }
    }); 

    // var onOff=false;
    // $('.fixed_menu_btn div').click( function(){
    //     console.log('a');
        
    //     onOff=!onOff;
    //     if(onOff){
    //         $('.fixed_menu_btn ul li').each(function (i) {
    //             $(this).animate({'top': -120*( i+1) });  
    //         });
    //     }else{
    //         $('.fixed_menu_btn ul li').each(function (i) {
    //             $(this).animate({'top': 0 });  
    //         });
    //     }
        
    // });

    //aside fixed category button
    var onOff=false;
    $('.wrap .fixed_menu_btn div').click( function(){
    console.log('a');
        onOff=!onOff;
        if(onOff){
            $('ul li').each(function (i) {
            $(this).animate({'top': -75*( i+1) });  
            });
        }else{
            $('ul li').each(function (i) {
            $(this).animate({'top': 0 });  
            });
        }
        
    });




});
    
    
