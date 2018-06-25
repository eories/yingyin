var i = 0;
$(function(){
    $(".bottom ul").eq(0).show().siblings().hide();  //隐藏除了第一个的其他ul                          
    $(".little_title li ").eq(0).addClass("border_line");  //给.little_title li的第一个li增加一个css样式

    $(".li1").eq(0).css("background","#F9BE04").siblings().css("background","none");//刚进页面时的css样式
    $(".little_title li").click(function(){  //当鼠标移上去时(导航栏)
        i = $(this).index();   //index是索引值,
        $(".little_title li ").eq(i).addClass("border_line").siblings().removeClass("border_line");     
        })
        $(".li1").hover(function(){
            i = $(this).index();
            $(".bottom ul").eq(i).show().siblings().hide(); // 选择一个li,下面的内容会随着改变
            $(".li1").eq(i).css("background","#F9BE04").siblings().css("background","none");//添加css样式
        },function(){

        })

    $(".ad_imgs").eq(0).show().siblings().hide();
    setInterval(function(){
        i++;
        if(i == 5){
            i = 0;
        }
        $(".ad_imgs").eq(i).show().siblings().hide();
        $(".icon li").eq(i).addClass("bg_yellow").siblings().removeClass("bg_yellow");
        // $(".ad_imgs").eq(i).fadeIn(300).siblings().fadeOut(300);
    },2000);
});

