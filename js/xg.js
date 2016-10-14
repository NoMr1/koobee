/**
 * Created by Administrator on 2016/10/12.
 */
$(function(){
    $(window).scroll(function(){
        console.log($(window).scrollTop())
        if($(window).scrollTop() >= 330){
            $(".slogan1 img").css("transform","translate(0px)")
            $(".slogan4 img").css("transform","translate(0px)")
            $(".slogan7 img").css("transform","translate(0px)")
            $(".slogan10 img").css("transform","translate(0px)")
            $(".slogan2 img").css("transform","translate(0px)")
            $(".slogan5 img").css("transform","translate(0px)")
            $(".slogan8 img").css("transform","translate(0px)")
            $(".slogan11 img").css("transform","translate(0px)")
            $(".slogan3 img").css("transform","translateY(0px)")
            $(".slogan6 img").css("transform","translateY(0px)")
            $(".slogan9 img").css("transform","translateY(0px)")
            $(".slogan12 img").css("transform","translateY(0px)")

        }
        if($(window).scrollTop() >= 900){
            $(".small-video-l").css("transform","translate(0px)")
            $(".small-video-c").css("transform","translate(0px)")
            $(".small-video-r").css("transform","translate(0px)")
        }
        if($(window).scrollTop() >= 1450){
            $(".main-t").css("transform","translate(0px)")
        }
        if($(window).scrollTop() >= 1700){
            $(".main-b").css("transform","translate(0px)")
        }
    })


})