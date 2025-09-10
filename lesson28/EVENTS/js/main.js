var button1= document.getElementById('btn1');

button1.onclick = function() {
    alert('hello');
}

// onmouseover
// onomouseleave
// onmousewheel

var button2 = document.getElementById('btn2');

button2.onmouseover = function(){
    alert('Hello');
}


var button3 = document.getElementById('btn3');

button3.onmouseleave = function(){
    alert('Hello');
}


var button4 = document.getElementById('btn4');

button4.onmousewheel = function(){
    alert('Hello');
}