$(function($){

    $("#abc").html("<strong>Learn jQuery</strong>");
    $("p").prepend(" jQuery ");
    $("p").append(" jQuery ");
   var abc = $("a").attr({href:"https://www.facebook.com"});
   console.log(abc);
   $("a").removeAttr("href");
   $("a").removeAttr("target");

//    chaining
$("#clickMe").click(function(){
    $("#starter").css({
        "backgroundColor": "green",
        "color": "#ffff",
        "height": "50px",
        "textAlign": "center",
        "marginBottom": "5px"
    })
    .fadeOut(1000)
    .fadeIn(1000)
    .slideUp("slow")
    .slideDown("slow");
   });

//    callback function
$("#hide").click(function(){
    $(this).hide(1000,function(){
        alert("Hide");
    }).show(5000, function(){  // time kom dile buja jay na,karon tokhon agei show er kaj hoye jay
        alert("Show");
    });
});

// typed js pluging
var typed = new Typed('.type', {
    strings: ['Thinking.', 'Learning.',' Growing ',' Growing '],
    typeSpeed: 50,
    backSpeed: 50,
    smartBackspace: true,
    loop:true,
    showCursor: true,
    cursorChar: '|',
    autoInsertCss: true, //if false carsor will not blink or up and down
  });


//  magnific popup problem 

$('.img1').magnificPopup({type:'image'});


});