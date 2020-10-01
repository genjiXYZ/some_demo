
var h = document.documentElement.clientHeight || document.body.clientHeight;

var w = document.documentElement.clientWidth || document.body.clientHeight;

// 浏览器窗口宽高

var myad = document.getElementById("myad");

var myoff = document.getElementById("off");
var adheight = 0 ;
var adwidth = 0;
myoff.onclick= function(){
    myad.style.display = "none";
}


var auto1 = setInterval(show1,10);
var auto2 = setInterval(show2,10);
var auto3 = setInterval(show3,20);
var auto4 = setInterval(show4,20);

var i = 0
var j = 0




//////////////////////////////////////////修复了闪屏 bug
function show1 (){
    if ( adwidth < w-400 && j == 0 ){ 
        adwidth += 5;
        myad.style.right = adwidth+ "px";
    }
    else { 
        j = 1;     
    }
}


function show2(){ 
    if ( adwidth > 0  && j == 1 ){
        adwidth -= 5;
        myad.style.right = adwidth+ "px";
    }
    else{
        j= 0;
    }
}




/////////////////////////////////////////////////////修复了闪屏 bug

function show3 (){
    if ( adheight < h-162 && i == 0 ){
        adheight += 2;
        myad.style.bottom = adheight+ "px";
    }
    else { 
        i = 1;          
    }
}


function show4(){ 
    if ( adheight > 0  && i == 1 ){
        adheight -= 2;
        myad.style.bottom = adheight+ "px";
    }
    else{
        i= 0;    
    }
}




























































// var auto2 = setInterval(show2,10);
// function show2(){
   
//     if (adheight < h-162 && i == 0 ){
//         console.log(i)
//         adheight += 2;
//         myad.style.bottom = adheight + "px";
//     }
    
//     else{
//         myad.style.bottom = h - 162 + "px";
//         i = 1;
        
//         console.log(i)

//     }
// }



















