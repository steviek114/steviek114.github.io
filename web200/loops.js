
// 1. Standard For Loop

let items = ["Apples", "Bananas", "Oranges", "Grapes", "Strawberries"];

let itemOutput = "";

for (let i = 0; i < items.length; i++) {
    itemOutput += "<li>" + items[i] + "</li>";
}

document.getElementById("itemList").innerHTML = itemOutput;


// 2. Nested For Loop - Multiplication Table

let tableOutput = "";

for (let i = 1; i <= 10; i++) {

    tableOutput += "<h3>Multiplication Table of " + i + "</h3>";

    for (let j = 1; j <= 10; j++) {
        tableOutput += i + " x " + j + " = " + (i * j) + "<br>";
    }
}

document.getElementById("multiplicationTable").innerHTML = tableOutput;


// 3. For...Of Loop - Display Muscle Cars

let carOutput = "";

for (let car of muscleCars) {
    carOutput += "<li>" + car.make + " " + car.model + " (" + car.year + ")</li>";
}

document.getElementById("carList").innerHTML = carOutput;


// 4. For...In Loop - Display First Car Properties

let propertyOutput = "";

for (let property in muscleCars[0]) {
    propertyOutput += "<li>" + property + ": " + muscleCars[0][property] + "</li>";
}

document.getElementById("carProperties").innerHTML = propertyOutput;
