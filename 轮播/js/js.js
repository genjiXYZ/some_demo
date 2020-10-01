var ad = document.getElementById("png").getElementsByTagName("img");
var list = document.getElementById("tiny").getElementsByTagName("li");
var topary = ["-10", "45", "105"]


for (var i = 0 ; i<list.length;i++){
    list[i].onmouseover= mouseover;
    list[i].index = i;
 }
function mouseover (){
    for (var i = 0 ; i<ad.length;i++){
        console.log(this.index)
        k = this.index //------------------移出时 以移出 点  为起点 继续轮播
        if(i==this.index ){
            ad[i].className = "show"
            settop = topary[i];
            nowtop = pointer.offsetTop;
            speed = (settop - nowtop)/20
            if(move == null){
              move = setInterval(moveto,17);
            }
        }   
        else{
            ad[i].className = ""
        }
    }    
}
var settop =0;
var nowtop =0;
var speed = 0
var move =null;
function moveto (){

// settop -nowtop  末减初          且有方向
// 60hz  -----------1s 60张图片     计时器速度设为  17
    nowtop += speed;
    
    var aaa = nowtop - settop 
    if( Math.abs(aaa) <= 1){
         nowtop = settop
        clearInterval(move);
        move = null;
    }
    pointer.style.top = nowtop + "px"
}

var ddd;
////////////////////////
// 自动
var list_box = document.getElementById("tiny")

auto_leave();
function auto_leave(){ 
  ddd = setInterval(bbb,2000);
}
function stop(){ 
    clearInterval(ddd);
}
list_box.onmouseleave = auto_leave;
list_box.onmouseenter = stop;
var k = 0
    
function bbb(){
    for (var i = 0 ; i<ad.length;i++){
        if(i == k ){
            ad[i].className = "show"
            pointer.style.top = topary[i] + "px"
            console.log( pointer.style.top)
            console.log(i)
        }
        else{
            ad[i].className = ""
        }
    }
     k+=1;
     if(k==3){
         k = 0;  
     }
} 

///////////////////////////////
// box.addEventListener("mouseleave",go)
// function go  (){
//     console.log("离开")
// }



    // if(nowtop < settop ){
    //     nowtop += speed;
    //     console.log(pointer.style.top)
    //         if(nowtop >= settop){
    //             nowtop = top;
    //             clearInterval(move);
    //             move =null;
    //         }
    // }
   
    // if(nowtop > settop ){
    //     nowtop += speed;
    //         if(nowtop <= settop){
    //             nowtop = settop;
    //             clearInterval(move);
    //             move =null;
    //         }
    // }   
    
    // pointer.style.top = nowtop + "px";