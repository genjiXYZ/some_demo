var li_list = document.getElementById("table").getElementsByTagName("li")
var start = document.getElementById("start")
var h1 = document.getElementById("goldcoin")
var tips = document.getElementById("say")
var a = ["锦鲤: +2000 GOLD","杨超越:+600GOLD","Dva's kiss","蝉壳上课: +300Exp",0,"再来一次","出门被狗咬 -100GLOD","遗失钱包-200GOLD","被女朋友绿 -2000GOLD",]
var b = [2000,600,0,500,-100,-200,-2000,0]
var aha = parseInt(Math.random()*10 +1 )
var li_id = 0 
var runNum=0;  
var maxNum=0;
var h ;
var rmb = 5000;///初始金币
var qq = 0   ///  0  1  标志

if(start.onclick){console.log(aaa)}


start.onclick  = function a(){ 

    if(qq == 0){
        qq = 1
        rmb -= 500;
        h1.innerHTML = "您的金币是:"+rmb;
        tips.innerHTML = "";
        // bool = 0;
        runNum = 0;
        aha = parseInt(Math.random()*10 +1 )
        //////////////////////////////////////////////////////////////////////
        switch(true){
            case aha==10 :          //ana 1000gold 10%
                h=0;
                break;
            case aha==9 :           //ashe 600gold   10%
                h=1; 
                break;    
            case aha==8 :            //div kiss10%
                h=2; 
                break;
            case aha==7 :            //zayra  10%
                h=3; 
                break;     
            case aha==6 :
            case aha==1 :
            case aha==2:             //30%
                h=4; 
                break;
            case aha==5 :            //10%
                h=5; 
                break;
            case aha==4:             //10%
                h=6; 
                break;    
            case aha==3 :            //10%
                h=7; i=7;
                break;    
        }


        console.log(qq)
        maxNum = 8*4 + h  ;
        // console.log(h)
        run = setInterval(play,200);
             
        }
}   





var liAry = [0,1,2,5,8,7,6,3,]
function play(){ 
    li_list[liAry[li_id]].className = "";
    li_id = li_id+1 >=liAry.length ? 0 : li_id+1;  
    li_list[liAry[li_id]].className = "select";
    // console.log("liAry[li_id" + "是"+ liAry[li_id])
    ///////////////////////////////////////////////////////
    runNum++; 
    // console.log(runNum)
    if( runNum >= maxNum ){
        clearInterval(run);
        tips.innerHTML= a[liAry[li_id]];
        rmb += b[h];
        h1.innerHTML = "您的金币是:"+rmb;
        qq = 0;
        return;
    }
    if( runNum == 5 ){
        clearInterval(run);
        run = setInterval(play,200);     
    }
    if( runNum == 10 ){
        clearInterval(run);
        run = setInterval(play,100);      
    }
    if( runNum == 20 ){
        clearInterval(run);
        run = setInterval(play,50);       
    }
    if( runNum == 22 ){
        clearInterval(run);
        run = setInterval(play,100);  
    }
}


