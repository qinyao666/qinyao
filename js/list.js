window.onload=function(){
    // $(".sort-list li").eq(0).show();
    // $(".sort-list li").eq(0).siblings().hide();
    $(".sort-list").hide()
    $(".sort-default").click(function(){
        $(".sort-list").toggle();
    })
    $(".sort-default").mouseleave(function(){
        $(".sort-list").hide();
    })
    $(".sort-list").mouseenter(function(){
        $(".sort-list").show();
    })
    $(".sort-list").mouseleave(function(){
        $(".sort-list").hide();
    })
    $(".sort-list li").click(function(){
        var n = $(this).index();
        console.log(n)
        var t=$(".sort-list li").eq(n).html()
        $(".sort-default span").html(t)
        // $(".sort-list a").eq(n).css({"background":"blue","color":"#fff"})
        console.log(t)
        $(".sort-list").hide();
    })



}