$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('nav').addClass("Sticky");
        }else{
            $('nav').removeClass("Sticky");
        }
    }); 
});