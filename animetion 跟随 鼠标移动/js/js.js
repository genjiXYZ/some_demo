
var PicMove = document.getElementsByTagName("ul") [0];
console.log(PicMove);
window.onload = function(){
  PicMove.className ="picmove"


}
var oLi =document.getElementsByTagName('li');
 var len = oLi.length;
 for(var i = 0;i < len; i++){
     oLi[i].onmouseenter = function(e){
    
        var dir = getDirection(e,this);
        console.log(dir);

        var oent = this.getElementsByClassName('cover')[0]
        oent.className = "cover";
        switch(dir){
            case 0:
                oent.classList.add("in-top");
                break;
            case 1:
                oent.classList.add("in-right");
                break;
            case 2:
                  oent.classList.add("in-bottom");
                  break;
            case 3:
                 oent.classList.add("in-left");         
        }
      
     }
     oLi[i].onmouseleave = function(e){
        
        var dir = getDirection(e,this);
        var oent = this.getElementsByClassName('cover')[0]
        oent.className = "cover";
        switch(dir){
            case 0:
                oent.classList.add("out-top");
                break;
            case 1:
                oent.classList.add("out-right");
                break;
            case 2:
                  oent.classList.add("out-bottom");
                  break;
            case 3:
                 oent.classList.add("out-left");         
        }
     }
 }

  function getDirection (e,ele){
    var w = ele.offsetWidth;
    var h = ele.offsetHeight;
    var x = (e.offsetX - w/2) * (w > h ? h/w : 1  );
    var y = (e.offsetY - h/2) * (w < h ? w/h : 1  );
    var d = (Math.round((Math.atan2(y,x)*(180/Math.PI) + 180)/90) + 3)%4;
    return d;
}
