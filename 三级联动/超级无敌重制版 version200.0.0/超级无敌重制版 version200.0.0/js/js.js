var province = document.getElementById("province");
var city = document.getElementById("city")
var district = document.getElementById("district")
/////////////////////////////省
for(var i = 0;i<provinceList.length;i++){
        province.options.add(new Option(provinceList[i].name));
    }
/////////////////////////////////////////////////////////////  点击执行 和 初始执行
province.onchange = changeProvince
changeProvince();
changeCity();
////////////////////////////////////////////////////////////  点击省 时候 输出  对应 city  和默认 district
function changeProvince(){
    city.options.length = 0;
    district.options.length = 0;
    var cityAry = provinceList[province.selectedIndex].cityList;
    for(var i = 0;i<cityAry.length;i++){
        city.options.add(new Option(cityAry[i].name));
        }
    changeCity();
}
////////////////////////////////////////////////////////////点击city  输出对应 distri
city.onchange = changeCity;
function changeCity (){
    district.options.length = 0;
    var districtAry=  provinceList[province.selectedIndex].cityList[city.selectedIndex].districtList;
    console.log(city.selectedIndex)
   for(var i = 0;i<districtAry.length;i++){
        district.options.add(new Option(districtAry[i]));
    }
}


