let number = 50;
let content = "";

while (number >= 0) {
    if (number == 25) {
        number--;
        continue; // Skip 25 to demonstrate continue.
    }

    content += number + "<br>";
    number--;
}

document.getElementById("countdown").innerHTML = content;
