$(function(){
    var page=1;
    var num=4;
    var imgleg=$("#proList dl").length;
    var imgmax=Math.ceil(imgleg/num);
    $(".right").click(function(){
        if(!$("#proLists").is(":animated")){
            if(page==imgmax)
            {
                $(".product-list #proLists").stop().animate({left:"0px"},500);
                page=1;
            }else{
                $(".product-list #proLists").stop().animate({left:"-=985px"},500);
                page++;
            }}
    })

    $(".left").click(function(){
        if(!$("#proLists").is(":animated")){
            if(page==1)
            {
                $(".product-list #proLists").stop().animate({left:"-"+(imgmax-1)*985+"px"},500);
                page=imgmax;
            }else{
                $(".product-list #proLists").stop().animate({left:"+=985px"},500);
                page--;
            }}
    })
})