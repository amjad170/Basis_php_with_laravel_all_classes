// https://github.com/bfintal/Counter-Up 
$(document).ready(function(){
    $('.counter').counterUp({
        delay: 5,
        time: 1000
    });
})

// scroll to top
$(document).ready(function(){
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
})

// slick slider // https://kenwheeler.github.io/slick/
$('.multiple-items').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    loop:true,
    autoplay:true,
    autoplaySpeed:2000,
    centerMode: true,
    centerPadding:'20px',
    arrow:true,
    // prevArrow:'<button type="button" class="slick-prev"><i class="fa-solid fa-arrow-left"></i></button>',
     prevArrow:'<button type="button" class="slick-prev">Previous</button>',
     nextArrow:'<button type="button" class="slick-next">Next</button>',
    // nextArrow:'<button type="button" class="slick-next"><i class="fa-solid fa-arrow-right"></i></button>',
    dots:true,
    dotsClass:'slick-dots',
    infinite:true,
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


  // wow js   https://wowjs.uk/
  $(document).ready(function(){
    new WOW().init();
})
 