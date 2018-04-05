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
var draw = function draw() {
    t += 10;
    cxt.beginPath();
    cxt.clearRect(0, 0, height, width);
    cxt.moveTo(0, height / 2);
    for (var i = 0; i < width; i += 8) {
        cxt.lineTo(i, Math.abs(500 - t % 1000) / 500 * 150 * Math.sin((i + t) / 50) + height / 2);
    }
    cxt.strokeStyle = colors.clouds;
    cxt.lineWidth = 3;
    cxt.stroke();
    cxt.closePath();
    requestAnimationFrame(draw);
};
draw();
