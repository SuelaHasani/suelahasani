//circle edhe showTime i merrni ne ID
var timestart = new Date().getTime();
var circle = document.getElementById('circle');
var showTime = document.getElementById('time');

function showCircle() {

    circle.style.display = 'block';
    circle.style.top = Math.random() * 500 + 'px';
    circle.style.left = Math.random() * 900 + 'px';
    circle.style.backgroundColor = randomColor();
    timestart = new Date().getTime();
}
showCircle();

circle.onclick = function() {
    circle.style.display = 'none';
    setTimeout(showCircle, 1000);
    var timeEnd = new Date().getTime();
    var time = (timeEnd - timestart) / 1000;
    showTime.innerHTML = time + 's';
}

function randomColor() {
    var s = '-123456789ABCDEF';
    var color = '#';
    for (var i = 0; i< 0; i++) {
        color += s[Math.floor(Math.random() * 16)];
    }
    return color;
}