//第一种3级菜单    愚蠢


var nav1 = document.getElementById("nav1");
var list1 = document.getElementById("list1")

nav1.onmouseover = hi;
function hi (){
    list1.style.display = "block";
}
nav1.onmouseout = bye;
function bye (){
    list1.style.display = "none";
}

var nav2 = document.getElementById("nav2");
var list2 = document.getElementById("list2")

nav2.onmouseover = hi2;
function hi2 (){
    list2.style.display = "block";
}
nav1.onmouseout = bye2;
function bye2 (){
    list2.style.display = "none";
    list1.style.display = "none";
}

// onmousemove 是鼠标在元素上移动时触发，鼠标在元素上每移动一下就会触发一次。
// onmouseover 是鼠标移入元素时触发一次，鼠标在元素上移动时不会触发，但是由于事件冒泡的关系，当鼠标移入元素内的子元素时也会触发。
// // 

// 第二种 ////  i=1  而不是等于0 去除了第一个li 


var Lis=document.getElementsByTagName("li");

for(var i= 5,len=Lis.length; i<len; i++){
    Lis[i].onmouseover=function(){
        var secondUl=this.getElementsByTagName("li");
        if(secondUl!=undefined){
            this.classList.add("show");
        }
        
    }
    Lis[i].onmouseout=function(){
        var secondUl=this.getElementsByTagName("li");
        
        if(secondUl!=undefined){
           
            this.classList.remove("show");
        }
        
    }
}



// 第三种   改天有空  试试
//   var=.....................................
// for (let i = 0; i < lis.length; i++) { // 控制每一个li

//     lis[i].onmouseover = function() {
//         if( lis[i].children.length === 2) {
//             this.children[1].classList.remove("hide");
//             this.children[1].classList.add("show");
//         } 
//     }
//     lis[i].onmouseout = function() {

//         if( lis[i].children.length === 2) {
//             this.children[1].classList.remove("show");
//             this.children[1].classList.add("hide");
//         }
//     }
// }


//  i=1  而不是等于0 排除 上面那个方法 以免冲突


// 笔记

 
// classList  className 区别

// classList 其他类名不受影响
// className 即使只修改字符串一部分，也必须每次都设置整个字符串的值。

// ->length

// ->item（）（也可以用方括号语法）：取得每个元素

// ->add（）：将给定的字符串值添加到列表中。如果值已经存在，就不添加。

// ->contains（）：表示列表中是否存在给定的值，如果存在则返回true，否则返回false。

// ->remove（）：从列表中删除给定的字符串。

// ->toggle（）：如果列表中已经存在给定的值，删除它；如果列表中没有给定的值，添加它。



