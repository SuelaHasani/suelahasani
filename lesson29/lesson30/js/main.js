var x = 5;

if (x>2) { //true
    console.log("x is greater than 2");
} else {
    console.log("x is less than 2");
}

var input = document.getElementById('input_id');
var button = document.getElementById('btn_id');
var text = document.getElementById('text_id');

button.onclick = function() {
    text.innerHTML = input.value;
}

var input2 = document.getElementById('input2_id');
var input3 = document.getElementById('input3_id');
var button2 = document.getElementById('button2_id');
var text2 = document.getElementById('text2_id');


button2.onclick = function() {
    text.innerHTML = input.value;
}

