var image = document.getElementById("scollimg");

window.addEventListener('scroll', function () {
    // var opc = window.getComputedStyle(image,'::before');
    var position = window.scrollY;
    console.log(position);
    // console.log(singleOn);
    if (singleOn) {
        if (position < 400) {
            image.style.setProperty('--bcImg', 'url("../images/bc-song-6.JFIF")');
        }
        else if (position > 900 && position < 1700) {
            image.style.setProperty('--bcImg', 'url("../images/bc-song-7.webp")');
        }
        else if (position > 1700 && position < 2500) {
            image.style.setProperty('--bcImg', 'url("../images/bc-song-8.JFIF")');
        }
        else if (position > 2500 && position < 3300) {
            image.style.setProperty('--bcImg', 'url("../images/bc-song-9.jpg")');
        }
        else if (position > 3300) {
            image.style.setProperty('--bcImg', 'url("../images/bc-song-10.webp")');
        }
    } else {
        if (position < 400) {
            image.style.setProperty('--bcImg', 'url("../images/bc-song-1.jpg")');
        }
        else if (position > 400 && position < 1400) {
            image.style.setProperty('--bcImg', 'url("../images/bc-song-2.jpg")');
        }
        else if (position > 1400 && position < 2600) {
            image.style.setProperty('--bcImg', 'url("../images/bc-song-3.jpg")');
        }
        else if (position > 2600 && position < 3600) {
            image.style.setProperty('--bcImg', 'url("../images/bc-song-4.jpg")');
        }
        else if (position > 3600 && position < 4800) {
            image.style.setProperty('--bcImg', 'url("../images/bc-song-5.jpg")');
        }
        else if (position > 4800 && position < 5600) {
            image.style.setProperty('--bcImg', 'url("../images/bc-song-6.JFIF")');
        }
        else if (position > 5600 && position < 6500) {
            image.style.setProperty('--bcImg', 'url("../images/bc-song-7.webp")');
        }
        else if (position > 6500 && position < 7000) {
            image.style.setProperty('--bcImg', 'url("../images/bc-song-8.JFIF")');
        }
        else if (position > 7000 && position < 7800) {
            image.style.setProperty('--bcImg', 'url("../images/bc-song-9.jpg")');
        }
        else if (position > 7800) {
            image.style.setProperty('--bcImg', 'url("../images/bc-song-10.webp")');
        }
    
    }

});

//按鈕控制篩選
var ulList1 = [];
ulList1 = document.getElementsByClassName('storyList');
var ulList2 = [];
ulList2 = document.getElementsByClassName('singleList');
var singleOn = false;
allSong.onclick = function () {
    for (let i = 0; i < ulList1.length; i++) {
        ulList1[i].style.display = 'block';
        for (let j = 0; j < ulList2.length; j++) {
            ulList2[j].style.display = 'block';
        }
    }
    story.style.display = 'block';
    single.style.display = 'block';
    singleOn = false;
    image.style.setProperty('--bcImg', 'url("../images/bc-song-1.jpg")');

}
storySong.onclick = function () {
    for (let i = 0; i < ulList1.length; i++) {
        ulList1[i].style.display = 'block';
        for (let j = 0; j < ulList2.length; j++) {
            ulList2[j].style.display = 'none';
        }
    }
    story.style.display = 'block';
    single.style.display = 'none';
    singleOn = false;
    image.style.setProperty('--bcImg', 'url("../images/bc-song-1.jpg")');

}
singleSong.onclick = function () {
    for (let i = 0; i < ulList1.length; i++) {
        ulList1[i].style.display = 'none';
        for (let j = 0; j < ulList2.length; j++) {
            ulList2[j].style.display = 'block';
        }
    }
    story.style.display = 'none';
    single.style.display = 'block';
    singleOn = true;
    image.style.setProperty('--bcImg', 'url("../images/bc-song-6.JFIF")');



}




