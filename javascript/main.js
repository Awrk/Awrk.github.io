$(document).ready(function(){
    $(".slick_slider").slick({
    });
    $(".slick_slider_2").slick({

    });

$("#menu-toggle").on("click", function(){
    $(".menu_hide_block").toggleClass("active");
    
})
$("#info_1").hover(function(){
    $("#photo_info_1").toggleClass("active");
})
$("#info_2").hover(function(){
    $("#photo_info_2").toggleClass("active");
})
$("#info_3").hover(function(){
    $("#photo_info_3").toggleClass("active");
})

});