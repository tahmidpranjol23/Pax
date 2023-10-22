$(function(){

    // back to top
    
        $('.back_to_top').click(function(){
            $('html, body').animate({
                scrollTop: 0,
            }, 1000)
        });
    
    // preloader
    
        $(window).on('load', function(){
            $('.preloader_part').delay(500).fadeOut(500);
        })
    
    // navbar bg on scroll
    
        $(window).scroll(function(){
            var scrollingPoint = $(this).scrollTop();
            if(scrollingPoint > 500) {
                $('.navbar').addClass('bg-on-scroll');
                $('.back_to_top').fadeIn(500);
                
            } else {
                $('.back_to_top').fadeOut(500);
                $('.navbar').removeClass('bg-on-scroll');
                
            }
            
        })
    })
    

// owl carolose

var swiper = new Swiper(".mySwiper", {
    cssMode: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
  });