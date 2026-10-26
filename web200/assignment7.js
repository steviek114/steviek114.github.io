let number = 50; // starts the countdown
let content = "";

while (number >= 0) { //repeats the loop while above zero
    if (number == 25) {
        number--;
        continue; // Skip 25 to demonstrate continue.
    }

    content += number + "<br>";
    number--;
}

document.getElementById("countdown").innerHTML = content;
