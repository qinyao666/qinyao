window.onload=function(){
    var p1 = document.getElementById("p1")
    var uu2 = document.getElementById("uu2").children
    var span1 = document.getElementById("span1")
    var uu2 = document.getElementById("uu2")

    p1.onmouseenter=function(){
        uu2.style.display="block"
    }
    uu2.onmouseenter=function(){
        uu2.style.display="block"
    }
    p1.onmouseleave=function(){
        uu2.style.display="none"
    }
    uu2.onmouseleave=function(){
        uu2.style.display="none"
    }
    for(var i=0;i<uu2.children.length;i++){
        uu2.children[i].onclick=function(){
            for(var n=0;n<uu2.children.length;n++){
                uu2.children[n].removeAttribute("class")
            }
            this.setAttribute("class","blue")
            uu2.style.display="none"
            span1.innerHTML=this.innerHTML
        }
    }



    var li1=document.getElementsByTagName("li");
    var div1= document.getElementById("div1");
    var uu1= document.getElementById("uu1")
    var timer;
    var num=0;
    function go(){
        timer=setInterval(function(){
            num++;
            if(num==3){
                num=0;
            }
            li1[num].style.zIndex=11;
            for(var i=0;i<li1.length;i++){
                if(i==num){
                }else{
                    li1[i].style.zIndex=i;
                }
            }
            
        },1500)
    }
    go();
    div1.onmouseenter=function(){
        clearInterval(timer)
    }
    div1.onmouseleave=function(){
        go()
    }


    // $(".footer-right-qy a").mouseenter(function(){
    //     $(".footer-span1-qy").css({"background":"url('../img/weibo-bg.png') no-repeat -40px 0px"})
    // })
    // $(".footer-right-qy a").mouseleave(function(){
    //     $(".footer-span1-qy").css({"background":"url('../img/weibo-bg.png') no-repeat 0px 0px"})
    // })

    //     $(".footer-right-qy a").eq(1).mouseenter(function(){
    //         console.log(1)
    //         $(".footer-span3-qy").css({"display":"none"})
    //         console.log(2)
    //     })
    //     $(".footer-right-qy a").eq(1).mouseleave(function(){
    //         console.log(1)
    //         $(".footer-span3-qy").css({"display":"inlink-block"})
    //         console.log(2)
    //     })

        $(".footer-span3-qy").hide();
        $(".footer-right-qy a").eq(1).mouseenter(function(){
            $(".footer-span3-qy").show()
        })
        $(".footer-span3-qy").mouseenter(function(){
            $(".footer-span3-qy").show()
        })
        $(".footer-right-qy a").eq(1).mouseleave(function(){
            $(".footer-span3-qy").hide()
        })
        $(".footer-span3-qy").mouseleave(function(){
            $(".footer-span3-qy").hide()
        })
}







