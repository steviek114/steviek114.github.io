let questionNumber = 0;
let score = 0;

let questions = [
    {
        question: "What year did the United States gain Independence?",
        answers: ["1776", "1783", "1778", "1789"],
        correct: "1776"
    },
    {
        question: "After Pearl Harbor, which country did the United States declare war against?",
        answers: ["China", "Japan", "Korea", "Russia"],
        correct: "Japan"
    },
    {
        question: "Before the Vietnam War, which country did the United States support in Indochina?",
        answers: ["Britain", "Japan", "France", "Vietnam"],
        correct: "France"
    },
    {
        question: "Which country did the United States invade after 9/11?",
        answers: ["Afghanistan", "Iraq", "Kuwait", "Pakistan"],
        correct: "Afghanistan"
    },
    {
        question: "Which United States territory is the newest?",
        answers: ["Guam", "Puerto Rico", "American Samoa", "Northern Mariana Islands"],
        correct: "Northern Mariana Islands"
    }
];

function showQuestion() {
    let currentQuestion = questions[questionNumber];

    document.getElementById("question").innerHTML =
        currentQuestion.question;

    document.getElementById("answer1").innerHTML =
        currentQuestion.answers[0];

    document.getElementById("answer2").innerHTML =
        currentQuestion.answers[1];

    document.getElementById("answer3").innerHTML =
        currentQuestion.answers[2];

    document.getElementById("answer4").innerHTML =
        currentQuestion.answers[3];

    document.getElementById("feedback").innerHTML = "";
}

function checkAnswer(answer) {

    let currentQuestion = questions[questionNumber];

    
    if (answer == currentQuestion.correct) {
        score++;
        document.getElementById("feedback").innerHTML =
            "Correct! Great job!";
    }
    else if (answer != currentQuestion.correct) {
        document.getElementById("feedback").innerHTML =
            "Incorrect. Try the next question!";
    }
}

function nextQuestion() {

    questionNumber++;

    
    switch (questionNumber) {
        case 1:
            document.getElementById("score").innerHTML =
                "Keep going!";
            break;

        case 2:
            document.getElementById("score").innerHTML =
                "You're halfway there!";
            break;

        case 3:
            document.getElementById("score").innerHTML =
                "Only two questions left!";
            break;

        case 4:
            document.getElementById("score").innerHTML =
                "Last question!";
            break;

        case 5:
            document.getElementById("question").innerHTML =
                "Quiz Complete!";

            document.getElementById("feedback").innerHTML =
                "You scored " + score + " out of 5.";

            document.getElementById("answer1").style.display = "none";
            document.getElementById("answer2").style.display = "none";
            document.getElementById("answer3").style.display = "none";
            document.getElementById("answer4").style.display = "none";
            document.getElementById("nextButton").style.display = "none";
            break;
    }

    if (questionNumber < 5) {
        showQuestion();
    }
}



document.getElementById("answer1").addEventListener("click", function() {
    checkAnswer(this.innerHTML);
});

document.getElementById("answer2").addEventListener("click", function() {
    checkAnswer(this.innerHTML);
});

document.getElementById("answer3").addEventListener("click", function() {
    checkAnswer(this.innerHTML);
});

document.getElementById("answer4").addEventListener("click", function() {
    checkAnswer(this.innerHTML);
});

document.getElementById("nextButton").addEventListener("click", function() {
    nextQuestion();
});

showQuestion();
