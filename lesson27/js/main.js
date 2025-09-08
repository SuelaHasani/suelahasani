function showMessage() {
    alert("This message is inside the function");

}

showMessage();

function sum(number1 , number2) {
    return number1 + number2;
}


console.log("the sum of to numbers is:" +sum(5,8));

function toCelsius (f) {
    return (5/9) * (f-32);
}

console.log(toCelsius(54));

var result = toCelsius (45);
console.log("45 fahrenheit is equal to:"+result +" celsius");


// prej minutave me e kthy ne sekonda - funstion

function toSecond (minutes) {
    return minutes * 60;
}

console.log(toSecond(6));

// arrow functions

var arrowFunction = num1 => console.log(num1);

arrowFunction(5);


var name = "";

function dsFunction() {
    var localVar = "Digital School";
    alert(localVar);
}

// alert(localVar); --> error

dsFunction();


function toFunction(gjatesia, lartesia) {
    return 0.5 * gjatesia * lartesia;

}

console.log(toFunction(3,6));



// Objektet

var car = {
    name : "Mercedes",
    color : "Red",
    year : 2020,

    startEngine : function() {
        alert("Vrooommmm!");
    },
    get getName() {
        return this.name;
    },
    set setName (name) {
        this.name = name;
    }
};

console.log(car.name);
console.log(car.color);
car.startEngine();

console.log(car.getName);

car.setName = "BMW";

console.log(car.getName);


var person = {
    name: "name",
    age: 16,
    nationality: "Kosove",

    talk : function() {
        alert();
    }
}