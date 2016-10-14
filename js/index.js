/**
 * Created by Administrator on 2016/9/27.
 */
$(function(){
    $(".top-nav-l #product").mouseenter(function(){
        $(".brand").stop(true,true).slideDown(400)
    });
    $(".top-nav-l #product").mouseleave(function(){
        $(".brand").stop(true,true).slideUp(400)
    })
    $(".brand").mouseenter(function(){
        $(this).stop(true,true).show();
    })
        $(".brand").mouseleave(function(){
        $(this).slideUp(400);
    })
    $(".top-nav-l a").mouseenter(function(){
        $(this).addClass("active").parent().siblings().children().removeClass("active")
    })
    var index = 0;
    var key =0;
    var imgWidth = $(".slide").width();
        function rollone(){
              index++;
              key++;
              if(key==4){
                key =0;
              }
               if(index>4){
                   $(".slide ul").css({marginLeft:"0px"})
                    index = 0;
                    key=0;
            }

            $(".slide ul").animate({"marginLeft": "-"+imgWidth*index+"px" },500)
         
        }
        var startRollone = setInterval(function(){
            rollone();
             var olLiArr = $(".slide>ol>li")
            for(var i=0;i<olLiArr.length;i++){
               olLiArr[i].children[0].style.color="";
            }
            olLiArr[key].children[0].style.color="blue";
        },2000)
        $(".you>ul>li:nth-child(2)").mouseenter(function(){
            $(".you>span>img").css({display:"block"})
        })
        $(".you>ul>li:nth-child(2)").mouseleave(function(){
            $(".you>span>img").css({display:"none"})
        })
        $(".box-2>.kd>ul>li").mouseenter(function(){
            $(this).addClass("current").siblings().removeClass("current")
        })
    })