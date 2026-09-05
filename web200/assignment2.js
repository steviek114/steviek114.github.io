var studentName = "John";
let favoriteNumber = 42;
const learningJavaScript = true;




document.getElementById("studentName").innerHTML = studentName;

document.getElementById("favoriteNumber").innerHTML = favoriteNumber;

document.getElementById("learningJavaScript").innerHTML = learningJavaScript;



document.getElementById("message").innerHTML =
    studentName + " has selected the number " + favoriteNumber +
    " and it is " + learningJavaScript +
    " that JavaScript is being learned. " +
    "The scientific community is impressed.";
