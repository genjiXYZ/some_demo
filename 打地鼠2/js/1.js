var box = document.getElementsByClassName("box")[0];
var hammer = document.getElementsByClassName("hammer")[0].getElementsByTagName("img")[0];
var grade = document.getElementsByClassName("grade")[0];
var sec = document.getElementById("sec")
var star = document.getElementsByClassName("star")
var go = 0;
var set1;
var set2;
var hittimes = 0;
//////////////////////////////////锤子 鼠标移动

box.onmousemove = moveHammer;
function moveHammer(e){
    var x = e.clientX;
    var y = e.clientY;
    hammer.style.left = x + "px";
    hammer.style.top = y + "px";
}
hammer.onmousedown = function (){
    hammer.src = "img/hammer2.png";
}
hammer.onmouseup = function (){
    hammer.src = "img/hammer1.png";
}

/////////////////////

hammer.onclick = hit;
function hit(e){
    var x = e.clientX;
    var y = e.clientY;
    var x1 = hold[num].offsetLeft;
    var x2 = x1 + hold[num].offsetWidth;
    var y1 = hold[num].offsetTop + mouse1[num].offsetTop;
    var y2 = hold[num].offsetTop + hold[num].offsetHeight;
    
    var sx1 = star[0].offsetLeft;
    var sx2 = sx1 + star[0].offsetWidth;
    var sy1 = star[0].offsetTop ;
    var sy2 = sy1 +star[0].offsetWidth;


///////////////////////////点击开始 
    if(x > sx1 && x < sx2 && y > sy1 && y < sy2 && go == 0){
        console.log("开始")
        go = 1;
        set1 = setInterval(lol,500);
        set2 = setInterval(mouseout,1500)
        grade.innerHTML =  z;

    }
    if(x > x1 && x < x2 && y > y1 && y < y2 && hittimes ==0){
        hittimes =1
        mouse1[num].src = "img/微信截图_20190626181126.png";
        if (k<=2){
            z += -200;
        }
        else{
            z += 100;
        }
        grade.innerHTML =  z; 
    }
}
//////////////////////////////倒计时条

var s = 120
function lol (){
    if (btn = true){
        s-= 2
        sec.style.width = s + "px";
    }
    ////////////////////////重置参数
    if( s == 0){
        clearInterval(set1);
        clearInterval(set2)
        alert("您的分数"+z)
        go =0;
        s = 120
        z = 0
    }  
}

/////////////////////
var hold = [];
var mouse1 = [];
for(var i = 0; i < 9; i++){
    hold[i] = document.getElementsByClassName("hold"+(i+1))[0];
    mouse1[i] = hold[i].getElementsByTagName("img")[0];
}

var speed = 5;
var nowTop = 103;
var newTop = 0;
var overTop = 103;
var time = 0;
var maxTime = 1000;

function drop(){
    console.log(hittimes)
    nowTop -= speed;
   
    if(nowTop <= newTop){
        nowTop = newTop;
        clearInterval(timer);
        timer = null;
        timer2 = setTimeout(function(){
                    nowTop = overTop;
                    mouse1[num].style.top = nowTop + "px";
                },500)
        if(nowTop == overTop){
            clearTimeout(timer2);
            
        }
    }
    mouse1[num].style.top = nowTop + "px";
    
}
///////////////////////////////////////////////////


var num = 0;
var k    ////////////////////////什么神
var z = 0                //////////////分数
var timer = null;
//每个神 的数组
var pct = ["img/fu.png","img/cai.png","img/tudi.png","img/qiong.png","img/shuai.png","img/hutu.png"]
///////////////////////////////////////////////

function mouseout (){
    
    num = Math.floor(Math.random()*9);
    k = Math.floor(Math.random()*6)
    mouse1[num].src = pct[k];
    time = 0;
    
    if(timer == null){
        timer = setInterval(drop,30);
        hittimes = 0 
    }
}