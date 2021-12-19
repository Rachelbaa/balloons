'use strict'
console.log('Baloon Pop!')

var gBalloons = [];
var elBalloons;
var gIntervalUp;
var lR;

function init() {
    makeGBallons(20)
    elBalloons = document.querySelectorAll('div')
    gIntervalUp = setInterval(() => {
        moveBalloonUp()
    }, 80)
}

function makeElBalloons(numberElB) {
    for (var i = 0; i < numberElB; i++) {
        var divEl = document.createElement('div')
        divEl.classList.add('baloon0')
        var imgEl = document.createElement('img');
        divEl.appendChild(imgEl)
        var chosenImage = Math.random() < 0.5;
        imgEl.src = (chosenImage) ? 'img/img.purple-balloon-removebg-preview.png' : 'img/img.orange-balloon-removebg-preview.png';
        imgEl.onclick = function (imgEl) { clickedB(imgEl.srcElement) }
        document.body.appendChild(divEl);
    }
}

function makeGBallons(numberB) {
    for (var i = 0; i < numberB; i++) {
        var balloon1 = {
            bottom: -120,
            speed: getRandomIntegerD(5, 10),
            left: getRandomIntegerD(1, 1500),
            lR:  Math.random() < 0.5,
        }
        gBalloons.push(balloon1)
    }
    makeElBalloons(numberB)
}


function moveBalloonUp() {
    for (var i = 0; i < gBalloons.length; i++) {
        moveBalloonS(i)
        gBalloons[i].bottom += gBalloons[i].speed
        elBalloons[i].style.bottom = gBalloons[i].bottom + 'px'
        elBalloons[i].style.left = gBalloons[i].left + 'px'
    }
}

function moveBalloonS(i) {
    gBalloons[i].left = (gBalloons[i].lR) ? gBalloons[i].left + 3 : gBalloons[i].left - 3;
    elBalloons[i].style.left = gBalloons[i].left + 'px'
}

function clickedB(elImgB) {
    var audio = new Audio('pop.wav');
    audio.play();
    elImgB.src = 'img/giphy.gif'
    elImgB.classList.add('fade-out')

}

function getRandomIntegerD(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}


var globalInterval = setInterval(() => {
    for (let i=0; i <gBalloons.length ; i++) {
       gBalloons[i].lR = Math.random() < 0.5 
    }
},1000)

