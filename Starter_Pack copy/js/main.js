jQuery(document).ready(function() {
    
jQuery(".FadeOut").click(function(){
    jQuery(".box").fadeOut(2000);
});

jQuery(".FadeIn").click(function(){
    jQuery(".box").fadeIn(2000);
});

jQuery(".Toggle").click(function(){
    jQuery(".box").toggle(2000);
});


jQuery(".Hide").click(function(){
    jQuery(".text").hide(2000);
});
jQuery(".Show").click(function(){
    jQuery(".text").show(2000);
});



});