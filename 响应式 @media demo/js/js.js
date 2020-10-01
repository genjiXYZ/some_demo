var menu = document.getElementsByClassName("menu")[0],
    list = document.getElementsByClassName("list")[0];


menu.onclick  = function(){


    if(document.getElementsByClassName("list-active")[0]){
        list.classList.remove("list-active");

    }else{
        list.classList.add("list-active");
    }
}