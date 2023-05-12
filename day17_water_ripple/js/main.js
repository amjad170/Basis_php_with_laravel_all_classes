$(function($){
    //preloader
    $(window).on("load",function(){
        $(".preloader").fadeOut(5000)
    })
})


$('#particles-js').ripples({
	resolution: 512,
	dropRadius: 20,
	perturbance: 0.01,
});