let c = document.getElementById("main");
let cxt = c.getContext("2d");
let colors = {
    background: '#2c3e50',
    carrot: '#e67e22',
    clouds: '#ecf0f1'
};
let height = 1000;
let width = 1000;
c.height = height;
c.width = width;
let t = 0;
let draw = function () {
    t += 10;
    cxt.beginPath();
    cxt.clearRect(0, 0, height, width);
    cxt.moveTo(0, height / 2);
    for (let i = 0; i < width; i+=8) {
        cxt.lineTo(i, (Math.abs(500 - t % 1000) / 500 * 150 * Math.sin((i + t) / 50)) + height / 2);
    }
    cxt.strokeStyle = colors.clouds;
    cxt.lineWidth = 3;
    cxt.stroke();
    cxt.closePath();
    requestAnimationFrame(draw);
}
draw();
