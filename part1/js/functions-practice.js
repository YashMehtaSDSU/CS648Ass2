/*eslint-env browser*/

//STEP 1
var number;

function halfNumber() {
    "use strict";
    window.document.write("Half of " + number + " is " + number / 2 + ".<br>");
}

number = parseFloat(window.prompt("STEP 1. Half of a number. \nEnter a number:"));
halfNumber();

//STEP 2
var number;
function squareNumber() {
    "use strict";
    window.document.write("The result of squaring a number " + number + " is " + number * number + ".<br>");
}

number = parseFloat(window.prompt("STEP 2. Squaring a number. \nEnter a number:"));
squareNumber();

//STEP 3
var firstNumber, secondNumber;

function percentOf() {
    "use strict";
    window.document.write(firstNumber + " is " + firstNumber / secondNumber * 100 + "% of " + secondNumber + ".<br>");
}

firstNumber = parseFloat(window.prompt("STEP 3. Percent the first number represents of the second number. \nEnter a first number:"));
secondNumber = parseFloat(window.prompt("Enter a second number:"));
percentOf();

//STEP 4
var firstModNumber;
var secondModNumber;

function findModulus() {
    "use strict";
    var mod = firstModNumber % secondModNumber;
    window.document.write(mod + " is the modulus of " + firstModNumber + " and " + secondModNumber + ".<br>");
}

firstModNumber = parseFloat(window.prompt("STEP 4. The modulus of the two numbers. \nEnter a first number:"));
secondModNumber = parseFloat(window.prompt("Enter a second number:"));
findModulus();

