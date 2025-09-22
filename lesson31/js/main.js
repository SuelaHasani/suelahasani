// for loop
for(i = 0; i<5; i++){
    console.log(i);
}

// do while loop
console.log("---------------------DO WHILE--------------------------");
var x = 0;
do{
    x++;
    console.log(x);
}while(x<=5);

//while loop
console.log("---------------------WHILE--------------------------");

var j = 0;
while(j<5) {
    j = j + 1;
    console.log(j);
}

console.log("----------------------WHILE 2-------------------------");

let n=0;
let m=0;
while(n < 3) {
    n++; //1, 2, 3
    m += n; //1, 3, 6
    console.log(n);
    console.log(m);
}

console.log("---------------------FOR IN--------------------------");

var person = {
    firstName: "JOHN",
    lastName: "DOE",
    age: 25
};

var text = '';
var z;
for (z in person) {
    text += person[z];
}

console.log(text + ' ');

console.log("---------------------FOR OF--------------------------");

var names = ['Steve', 'Bill', 'Mark'];
var y;
for(y of names) {
    console.log(y);
}


var students = ['Nil', 'Olisa'];
            //  0         1
            // 1         1
for(i = 0; x < students.length; i++ ) {
    document.write(students[i]+ '<br>');
}