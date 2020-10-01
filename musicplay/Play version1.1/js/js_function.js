//旋转 开始和暂停
function rotate() {
    musicBg.style.animation = "img 8s linear infinite"
    musicBg.style.WebkitAnimationPlayState = "running"
}

function rotatePause() {
    musicBg.style.WebkitAnimationPlayState = "paused"


}


//播放
function musicPlay() {
    oAudio.play();
    rotate();
    oBtn.className = 'iconfont icon-plus-pause';
    timer = setInterval(movePro, 200)
    flagR = 1
}




//暂停
function musicPause() {
    oAudio.pause();
    rotatePause();
    oBtn.className = 'iconfont icon-bofang2';
    clearInterval(timer);
    flagR = 0
}

//音量 + 5%
function volumeUP() {
    clearTimeout(t);
    if (oAudio.volume < 0.95) {
        oAudio.volume += 0.05;
        var a = parseInt(volHeight.style.height) + 5;
        volHeight.style.height = a + "%";
        console.log(a + "%")
    }
    if (oAudio.volume >= 0.95) {
        oAudio.volume = 1
        volHeight.style.height = 100 + "%";
    }
    t = setTimeout(function () {
        vol_display.style.display = "none"
    }, 2000)

    q = setTimeout(function () {
        volBox.style.display = "none";
    }, 2000)
    flag = 1;
}
//音量 -5%

function volumeDown() {
    clearTimeout(t);
    if (oAudio.volume >= 0.05) {
        oAudio.volume -= 0.05;
        var a = parseInt(volHeight.style.height) - 5;
        volHeight.style.height = a + "%";
        console.log(a + "%")
    } else if (oAudio.volume < 0.05) {
        oAudio.volume = 0
        volHeight.style.height = 0 + "%";
    }
    t = setTimeout(function () {
        vol_display.style.display = "none"
    }, 2000)
    q = setTimeout(function () {
        volBox.style.display = "none";
    }, 2000)
    flag = 1;

}

//音量提示框
function volAlert() {
    vol_display.style.display = "block";
    info_vol.innerHTML = "音量:" + volHeight.style.height
}

//width用的百分比的方式  能省不少事
function movePro() {
    var timePercent = (oAudio.currentTime / duration) * 100;
    var conversion_timePercnet = timePercent.toFixed(2); //保留两位小数 (四舍五入)  
    oNowPro.style.width = conversion_timePercnet + '%';
    var CurrentTime = oAudio.currentTime;
    oCurrentTime.innerHTML = conversion_time(CurrentTime);
}



//歌单

var ArySong = [
    ["Say It Again", "song/Say It Again .mp3", "img/4.jpg"],
    ["Circle On The Snows", "song/Circle On The Snows.mp3", "img/5.jpg"],
    ["Moscow Never Sleep", "song/Moscow Never Sleep.mp3", "img/6.jpg"],
    ["Bassa Sababa", "song/Bassa Sababa.mp3", "img/7.jpg"]
]
var t = 0; /////////////////歌单序号

///
function ChangeMusicName() {
    musicName.innerHTML = ArySong[t][0];
    musicBg.src = ArySong[t][2];
}


//单曲循环
function Single_tune_circulation() {
    musicPause();
    musicPlay();
    ChangeMusicName()
}

//顺序
function circulationPlay() {
    t += 1
    t > (ArySong.length - 1) ? t -= ArySong.length : t;
    oAudio.src = ArySong[t][1];
    oAudio.load();
    musicPlay();
    ChangeMusicName()
}



//倒序
function reCirculationPlay() {
    t -= 1
    t < 0 ? t += ArySong.length : t;
    oAudio.src = ArySong[t][1];
    oAudio.load();
    musicPlay();
    ChangeMusicName()
}



// 伪随机  //随机且不等于本身       当所有歌曲都随机过 重新新随机
var info_bofang = document.getElementsByClassName('information_bofang')[0]

var AryRandomSong = ArySong.slice(0)

function randomPlay() {
    musicPause();
    oCurrentTime.innerHTML = "00:00";
    oNowPro.style.width = "0%";
    AryRandomSong.splice(t, 1); ///delete 删除数组长度不变 splice输出长度改变
    if (AryRandomSong.length == 0) {
        AryRandomSong = ArySong.slice(0); ///深拷贝浅拷贝理解不熟 明天看看书和文档 
        console.log("此歌单播放完成完成")
        /////////////样式
        info_vol.style.display = "none"
        vol_display.style.display = "block";
        info_bofang.style.display = "block";
        setTimeout(function () {
            info_bofang.style.display = "none";
            vol_display.style.display = "none";
            info_vol.style.display = "block"
        }, 2000);
        /////////////////     
    }
    t = parseInt(Math.random() * AryRandomSong.length)
    oAudio.src = AryRandomSong[t][1];
    musicPlay();
    musicName.innerHTML = AryRandomSong[t][0];
    musicBg.src = AryRandomSong[t][2];
    console.log(t)
}