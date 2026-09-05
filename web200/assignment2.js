javascript
// Assignment 2 - Random Student Generator


// var is the oldest way to declare a variable in JavaScript.
// A var can be changed and redeclared.
// Modern JavaScript usually uses let and const instead.

var teacherMessage = "Welcome to the student generator!";


// let is used when a variable's value may change.
// let is block-scoped and cannot be redeclared in the same scope.

let selectedStudent;


// const is used when a variable should not be reassigned.
// const is block-scoped and must be given a value when it is declared.

const students = [
    {
        name: "John",
        age: 22,
        favoriteGame: "Minecraft",
        favoriteFood: "Pizza",
        isStudent: true
    },

    {
        name: "Sarah",
        age: 21,
        favoriteGame: "Fortnite",
        favoriteFood: "Tacos",
        isStudent: true
    },

    {
        name: "Mike",
        age: 25,
        favoriteGame: "Elden Ring",
        favoriteFood: "Burgers",
        isStudent: false
    },

    {
        name: "Alex",
        age: 23,
        favoriteGame: "Call of Duty",
        favoriteFood: "Chicken Wings",
        isStudent: true
    }
];


// This function randomly selects one student.

function generateStudent() {

    // Math.random() creates a random decimal between 0 and 1.
    // Math.floor() rounds the number down to a whole number.

    let randomNumber = Math.floor(Math.random() * students.length);

    // Use the random number to select a student from the array.

    selectedStudent = students[randomNumber];


    // Display the selected student's information on the webpage.

    document.getElementById("studentName").innerHTML = selectedStudent.name;

    document.getElementById("studentAge").innerHTML = selectedStudent.age;

    document.getElementById("favoriteGame").innerHTML = selectedStudent.favoriteGame;

    document.getElementById("favoriteFood").innerHTML = selectedStudent.favoriteFood;

    document.getElementById("isStudent").innerHTML = selectedStudent.isStudent;


    // Create a funny message using the selected student's information.

    document.getElementById("message").innerHTML =
        selectedStudent.name +
        " has been randomly selected by the extremely advanced " +
        "JavaScript student-selection machine. " +
        "The results are definitely scientifically accurate.";
}
