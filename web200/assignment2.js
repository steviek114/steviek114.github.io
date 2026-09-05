var studentName = "Stephen"; 
// var can be changed and redeclared. It is the older of the three ways of declaring variables
let studentAge = 22; 
// let can be changed, but it cannot be redeclared 
const isStudent = true;
// const cannot be reassigned after it is created and cannot be redeclared 

document.getElementById("studentName").innerHTML = studentName;
document.getElementById("studentAge").innerHTML = studentAge;
document.getElementById("isStudent").innerHTML = isStudent;
