"use strict";

var c = document.getElementById("main");
var cxt = c.getContext("2d");
var colors = {
    background: '#2c3e50',
    carrot: '#e67e22',
    clouds: '#ecf0f1'
};
var height = 1000;
var width = 1000;
c.height = height;
c.width = width;
var t = 0;

function SIN(x, i) {
    return Math.abs(500 - x % 1000) / 500 * 150 * Math.sin((i + x) / 50);
}

function cSIN(x, i) {
    var a = x <= 500 ? x : 1000 - x; //负责张合的系数
    var b = i < width / 2 ? i : width - i;
    return a * b / 150 / width * Math.sin((i + x) / 25) * 150;
    // if (x <= 500) {
    //     return (x / 500) * Math.sin((i + x) / 50) * 150;
    // }
    // else {
    //     return (1000 - x) / 500 * Math.sin((i + x) / 50) * 150;
    // }
}

var draw = function draw() {
    t += 10;
    cxt.beginPath();
    cxt.clearRect(0, 0, height, width);
    for (var i = 0; i < width; i += 8) {
        if (i === 0) {
            cxt.moveTo(i, SIN(t, i) + height / 2);
        }
        cxt.lineTo(i, SIN(t, i) + height / 2);
    }
    cxt.strokeStyle = colors.clouds;
    cxt.lineWidth = 3;
    cxt.stroke();
    cxt.closePath();
    if (t < 1500) {
        requestAnimationFrame(draw);
    } else {
        t = 0;
        drawC();
    }
};
draw();

var drawC = function drawC() {
    t += 10;
    cxt.beginPath();
    cxt.clearRect(0, 0, height, width);
    for (var i = 0; i < width; i += 8) {
        if (i === 0) {
            cxt.moveTo(i, cSIN(t, i) + height / 2);
        }
        cxt.lineTo(i, cSIN(t, i) + height / 2);
    }
    cxt.strokeStyle = colors.clouds;
    cxt.lineWidth = 3;
    cxt.stroke();
    cxt.closePath();
    if (t < 1000) {
        requestAnimationFrame(drawC);
    }
};
