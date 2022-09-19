$(function() {

    $(".hamburger").click(function(){
        $(this).toggleClass("is-active");
    
    if($(this).hasClass("is-active")){
        $('.menu').toggleClass("menu_show");
        $('header').toggleClass("header_menu");
    }else{
        $('.menu').toggleClass("menu_show");
        $('header').toggleClass("header_menu");
    }
    });

});
