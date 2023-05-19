$(document).ready(function(){

     //preloader
     $(window).on("load",function(){
        $(".preloader").fadeOut(5000)
    })


//  water ripple
$('#particles-js').ripples({
	resolution: 512,
	dropRadius: 20,
	perturbance: 0.01,
});


    // CounterUp upore na dile kaj korena
        $('.counter').counterUp({
            delay: 5,
            time: 10000
        });

    // scroll to top
  
    $(window).scroll(function(){
        if($(this).scrollTop()>200){
            $(".scroll-to-top").fadeIn()
        }else{
            $(".scroll-to-top").fadeOut()
        }
    });

    $(".scroll-to-top").on("click",function(){  // id dore o kora jay
        $("html,body").animate({
            "scrollTop":"0"
        })
    })
 



    //slick Slider
    $('.your-class').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        loop:true,
        autoplay:true,
        autoplaySpeed:2000,
        centerMode: true,
        centerPadding:'px',
        arrow:true,
        // prevArrow:'<button type="button" class="slick-prev"><i class="fa-solid fa-arrow-left"></i></button>',
        prevArrow:'<button type="button" class="slick-prev">Previous</button>',
        nextArrow:'<button type="button" class="slick-next">Next</button>',
        // nextArrow:'<button type="button" class="slick-next"><i class="fa-solid fa-arrow-right"></i></button>',
        dots:true,
        dotsClass:'slick-dots',
        speed:300,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
      });



//Type js

  var typed = new Typed('#element', {
    strings: ['Thinking.', 'Learning.',' Growing ',' Growing '],
    typeSpeed: 50,
    backSpeed: 50,
    smartBackspace: true,
    loop:true,
    showCursor: true,
    cursorChar: '|',
    autoInsertCss: true, //if false carsor will not blink or up and down
});
 
new WOW().init(); 





  });



    
       
    
     
