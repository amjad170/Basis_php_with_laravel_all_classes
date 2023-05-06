$(function($){

    $("#login").click(function(){
       var password = $("#password").val();
       var cpassword = $("#cpassword").val();

       if(password != "" && cpassword != ""){
                if(password == cpassword){
                    alert("Login successfully,Done")
                }else{
                    alert("Password Don't Match")
                }
       }else{
        alert("Please Enter your password")
       }
    });

});