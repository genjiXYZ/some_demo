var oAudio = document.getElementById('audio');
oCurrentTime = document.getElementsByClassName('nowtime')[0];
oTotalTime = document.getElementsByClassName('totaltime')[0];
oPlay = document.getElementsByClassName('play')[0];
oBtn = oPlay.getElementsByClassName('iconfont')[0];
oNowPro = document.getElementsByClassName('now_pro')[0];
tinyCircle = document.getElementsByClassName('tinycircle')[0];
oProgress = document.getElementsByClassName('progress')[0];
oCirculate = document.getElementById('circulate');
musicBg = document.getElementById('musicbg');
musicName = document.getElementsByClassName('musicName')[0];
var timer, duration;

//时间格式转换
function conversion_time(time) {
    var sec = parseInt(time % 60) < 10 ? '0' + parseInt(time % 60) : parseInt(time % 60);
    var min = parseInt(time / 60) < 10 ? '0' + parseInt(time / 60) : parseInt(time / 60);
    return min + ':' + sec;
}



//载入
window.onload = function () {
    musicBg.style.WebkitAnimationPlayState = "paused"
    duration = oAudio.duration;
    oTotalTime.innerHTML = conversion_time(oAudio.duration);
    volHeight.style.height = oAudio.volume * 100 + "%";
}
oAudio.oncanplay = function () {
    duration = oAudio.duration;
    oTotalTime.innerHTML = conversion_time(oAudio.duration);
    volHeight.style.height = oAudio.volume * 100 + "%";
}

//循环方式选择
oAudio.onended = function () {
    clearInterval(timer); /////  一定要清除 要不下一曲 再执行播放 会有多个 
    if (oCirculate.className == "iconfont icon-danquxunhuan") {
        Single_tune_circulation();
    } else if (oCirculate.className == "iconfont icon-xunhuanbofang") {
        circulationPlay();
    } else if (oCirculate.className = "iconfont icon-suijibofang") {
        randomPlay();
    }
    t += 1;
    ChangeMusicName();
}
//进度条拖拽 将小圆点中心 放在了 进度条 left center   改用 %方式
tinyCircle.onmousedown = function () {
    var c;
    //c ----拖拽后的时间;
    clearInterval(timer);
    document.body.onmousemove = function (e, selectLong) {
        //获取移动进度条长度  单位(px)
        var selectLong = e.clientX - oProgress.getBoundingClientRect().left;
        console.log(selectLong)
        if (selectLong < 0) {
            selectLong = 0;
        } else if (selectLong > 240) {
            selectLong = 240;
        }
        var percent_select_long = (selectLong / 240) * 100;
        oNowPro.style.width = percent_select_long + "%"; //转换元百分比
        c = selectLong / 240 * duration; //拖拽后的时间
        console.log(c)
        oCurrentTime.innerHTML = conversion_time(c)
    }
    document.body.onmouseup = function () {
        document.body.onmousemove = null;
        document.body.onmouseup = null;
        oAudio.currentTime = c;
        // 判断移动前播放状态
        if (oAudio.paused) {
            musicPause();
        } else {
            musicPlay();
        }
    }
}
//循环方式样式
var i = 1
var ico = ["iconfont icon-danquxunhuan", "iconfont icon-xunhuanbofang", "iconfont icon-suijibofang"]
oCirculate.onclick = function () {
    oCirculate.className = ico[i]
    i += 1;
    i > 2 ? i -= 3 : i;
}
//下一曲
var oNext = document.getElementsByClassName('next')[0];
oNext.onclick = function next() {
    clearInterval(timer);
    if (oCirculate.className == "iconfont icon-danquxunhuan" ||
        oCirculate.className == "iconfont icon-xunhuanbofang") {
        oAudio.load();
        circulationPlay();
    } else if (oCirculate.className == "iconfont icon-suijibofang") {
        oAudio.load();
        randomPlay();
    }
}
// 上一曲
var oPrevious = document.getElementsByClassName('previous')[0];
oPrevious.onclick = function previous() {
    clearInterval(timer);
    if (oCirculate.className == "iconfont icon-danquxunhuan" ||
        oCirculate.className == "iconfont icon-xunhuanbofang") {
        oAudio.load();
        reCirculationPlay();
    }
}


///////////////////////////音量进度条
var volCircle = document.getElementsByClassName('volcircle')[0];
var volHeight = document.getElementsByClassName('vol_nowpro')[0];
var vol_display = document.getElementsByClassName('information')[0];
var info_vol = document.getElementsByClassName('information_vol')[0];
var laba = document.getElementById('laba');
var q; ///timeout计时器 音量框



volCircle.onmousedown = function volChange(selectLong) {
    var c;
    clearTimeout(q)
    //c ----拖拽后的时间;
    vol_display.style.display = "block";
    document.body.onmousemove = function (e) {
        //获取移动进度条长度  单位(px)
        var selectLong = volHeight.getBoundingClientRect().bottom - e.clientY;
        if (selectLong < 0) {
            selectLong = 0;
            laba.className = "iconfont icon-xitongjingyin"
        } else if (selectLong > 160) {
            selectLong = 160;
        } else if (0 < selectLong < 160) {
            laba.className = "iconfont icon-yinliang"
        }
        c = (selectLong / 160) * 1;

        d = Math.floor(c)
        per = parseInt(c * 100);
        volHeight.style.height = per + "%";
        console.log(per)
        info_vol.innerHTML = "音量:" + per + "%"
    }
    document.body.onmouseup = function () {
        document.body.onmousemove = null;
        document.body.onmouseup = null;
        oAudio.volume = c;
        vol_display.style.display = "none"
        q = setTimeout(function () {
            volBox.style.display = "none";
        }, 2000)
        flag = 1;
    }
}



//绑定播放暂停按钮
oPlay.onmouseup = function () {
    if (oAudio.paused) {
        musicPlay();

    } else {
        musicPause();

    }
}



///绑定音量框  按钮 
var flag = 1
var volBox = document.getElementsByClassName('volpro')[0];

laba.onclick = function () {
    if (flag == 1) {
        volBox.style.display = "flex";
        flag = 0
    } else if (flag == 0) {
        volBox.style.display = "none";
        flag = 1;
    }
}

////////////////// 监听方向键(未整理)
var t
var w /////////////方向键 控制进度  生效 计时器
var flagR = 0 ////////////////////  判断快进前的播放状态



document.onkeydown = function (e) {
    clearTimeout(q) ///////////音量框关闭倒计时
    var keyNum = window.event ? e.keyCode : e.which; //获取被按下的键值

    if (keyNum == 32) {
        if (flagR == 0) {
            musicPlay()
            console.log("flagR" + flagR)
        } else if (flagR == 1) {
            musicPause()
        }

    }
    if (keyNum == 40) { //下
        clearTimeout(t);
        volAlert(); ////////////////////////音量提示
        volumeDown();
    }
    if (keyNum == 38) {
        console.log("上") // 上
        volAlert();
        volumeUP();
    }


    if (keyNum == 37) {
        clearTimeout(w);
        musicPause();
        if (oAudio.duration >= 5) {
            oAudio.currentTime -= 5;
            oNowPro.style.width = (oAudio.currentTime / oAudio.duration) * 100 + "%"
            oCurrentTime.innerHTML = conversion_time(oAudio.currentTime)
        }
        console.log("左") //左
    }
    if (keyNum == 39) {
        clearTimeout(w);
        console.log("右") //右
        musicPause();
        if (oAudio.duration - oAudio.currentTime >= 5) {
            oAudio.currentTime += 5;
            oNowPro.style.width = (oAudio.currentTime / oAudio.duration) * 100 + "%"
            oCurrentTime.innerHTML = conversion_time(oAudio.currentTime)
            console.log(1)
        }
    }
    if (flagR == 1) {
        w = setTimeout(musicPlay, 500) //延迟0.5s 生效
        console.log(flagR)
    } else if (flagR == 0) {
        musicPause();
    }
}

//在volBox 上监听 鼠标滚轮时间
volBox.addEventListener("mousewheel", scrollFunc);

function scrollFunc(e) {
    clearTimeout(q)
    e = e || window.event;
    if (e.wheelDelta) { //判断浏览器IE，谷歌滑轮事件               
        if (e.wheelDelta > 0) { //当滑轮向上滚动时  
            console.log('上滚')
            volAlert();
            volumeUP();
        }
        if (e.wheelDelta < 0) { //当滑轮向下滚动时  
            console.log('下滚')
            volAlert();
            volumeDown();
        }
    } else if (e.detail) { //Firefox滑轮事件  
        if (e.detail > 0) { //当滑轮向下滚动时  
            console.log('下滚')
            volAlert();
            volumeUP();
        }
        if (e.detail < 0) { //当滑轮向上滚动时  
            console.log('上滚')
            volAlert();
            volumeUP();
        }
    }
}
// 判断滚轮向上或向下在浏览器中也要考虑兼容性，现在五大浏览器（IE、Opera、Safari、Firefox、Chrome）中Firefox 
// 使用detail，其余四类使用wheelDelta；两者只在取值上不一致，代表含义一致，detail与wheelDelta只各取两个 值，
// detail只取±3，wheelDelta只取±150，其中正数表示为向下，负数表示向上