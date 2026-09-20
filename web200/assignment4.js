function addNumbers(num1, num2) {
    return num1 + num2;
}

const multiplyNumbers = function(num1, num2) {
    return num1 * num2;
};

const subtractNumbers = (num1, num2) => {
    return num1 - num2;
};

function getNumbers() {
    let num1 = Number(document.getElementById("number1").value);
    let num2 = Number(document.getElementById("number2").value);
    return [num1, num2];
}

function showAddition() {
    let numbers = getNumbers();
    let result = addNumbers(numbers[0], numbers[1]);
    document.getElementById("result").innerHTML = "Result: " + result; 
}
function showMultiplication() {
    let numbers = getNumbers();

    let result = multiplyNumbers(numbers[0], numbers[1]);

    document.getElementById("result").innerHTML = "Result: " + result;
}
function showSubtraction() {
    let numbers = getNumbers();

    let result = subtractNumbers(numbers[0], numbers[1]);

    document.getElementById("result").innerHTML = "Result: " + result;
}
