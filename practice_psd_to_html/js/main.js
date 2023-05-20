    $(document).ready(function(){

         //preloader
     $(window).on("load",function(){
        $(".preloader").fadeOut(5000)
    })


    
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
    

    })
    
   
