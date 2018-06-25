$(function(){
    $(".little_title li ").eq(0).addClass("border_line");  //给.little_title li的第一个li增加一个css样式
    // $(".page li").eq(1).addClass("bg").sbilings().removeClass("bg");
    $(".page li").click(function(){
        i = $(this).index();
        $(".page li").eq(i).addClass("bg").siblings().removeClass("bg");
    })
})