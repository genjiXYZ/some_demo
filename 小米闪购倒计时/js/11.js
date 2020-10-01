
//切换 菜单
var tabs = document.getElementById("tabs") .getElementsByTagName("li");
console.log(tabs); 

var hahalist = document.getElementById("hahalist") .getElementsByTagName("ul");
console.log(hahalist);




for(var i = 0; i < tabs.length; i++){
    tabs[i].onclick= showlist;
     
}   

function showlist(){
    for(var i = 0;i < tabs.length;i++){
        if(tabs[i] === this){
            tabs[i].className = "active";
            hahalist[i].className = "active";
        }


        else{
            tabs[i].className = "";
            hahalist[i].className = "";
        }
    }
}


var fixedNav = document.getElementById("fixedNav");
window.onscroll = function(){
    var scrollTop = document.documentElement.scrollTop;

    if(scrollTop >=262 ){
        fixedNav.className = "seckill-nav seckill-navfixed";
    }
    else{
        fixedNav.className = "seckill-nav";
    }
}



// 移入移除
// function hi(){
//     console.log(移入);
//     document.getElementById("dota").style.display="block";
// }


// function bye(){
//     console.log(移出);
//     document.getElementById("dota").style.display="none";
// }

var dota1 = document.getElementById("dota1");
var dota2 = document.getElementById("dota2");
dota2.onmouseover = hi;
function hi (){
    console.log("碰到了");
    dota1.style.display="block";
}

dota2.onmouseout = bye;
function bye (){
    console.log("分手了");
    dota1.style.display="none";
}
//
//
var wechat = document.getElementById("wechat");
var pay = document.getElementById("pay");
pay.onmouseover = hello;
function hello (){
    console.log("碰到了");
    wechat.style.display="block";
}

pay.onmouseout = seeyou;
function seeyou (){
    console.log("分手了");
    wechat.style.display="none";
}
//




//倒计时
var killtime = document.getElementById("killtime")
console.log(killtime);  
var buy = '' ;

setInterval(auto,200);

function auto(){
    var time_start = new Date().getTime(); 
    var time_end =  new Date("2019/06/20 13:00:00").getTime(); 
    var chatime = time_end-time_start;
    countDown = chatime/1000 ;
    var day=0,
        hour=0,
        minute=0,
        second=0;
    //计算
    day = Math.floor( countDown / (60 * 60 * 24));
    hour = Math.floor(countDown / (60 * 60)) - (day * 24);
    minute = Math.floor(countDown / 60) - (day * 24 * 60) - (hour * 60);
    second = Math.floor(countDown) - (day * 24 * 60 * 60) - (hour * 60 * 60) - (minute * 60);
//    加0
    if (day <= 9) day = '0' + day;
    if (hour <= 9) hour = '0' + hour;
    if (minute <= 9) minute = '0' + minute;
    if (second <= 9) second = '0' + second;


    //三种状态
    if (countDown >= 0){

        buy =  ("即将开始"+"<br>" + "距剩余" +"&nbsp" + day + " 天" +"&nbsp" + hour + ":" + minute + ":" + second   );
        
    }
    //抢购中 抢购时限 1h
         
    else if ( countDown > -3600 ){
        
        var time_end =  new Date("2019/06/20 14:00:00").getTime();
            
        buy =  ("抢购中" +  "<br>" +  "剩余" + "&nbsp"   + hour + ":" + minute + ":" + second +":"  );
       
    }

    //抢购结束

    else {
        clearInterval(auto)
        buy = ("单身一年的手速"+"<br>"+"<单身三十年再来抢>")

    }
        
    killtime.innerHTML = buy ;
 }
    // console.log(day);
    // console.log(hour);
    // console.log(minute);
    // console.log(second);
   // console.log(buy);






   

