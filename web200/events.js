
window.addEventListener("load", function() {
    document.getElementById("loadMessage").innerHTML =
        "The page has finished loading!";
});



document.getElementById("clickButton").addEventListener("click", function() {
    document.getElementById("message").innerHTML =
        "Ouch that hurt! :(";

    document.getElementById("clickButton").innerHTML =
        "Clicked!";
});



document.getElementById("eventBox").addEventListener("mouseover", function() {
    document.getElementById("eventBox").innerHTML =
        "You found me!";

    document.getElementById("eventBox").style.backgroundColor =
        "red";
});


document.addEventListener("keydown", function(event) {
    document.getElementById("keyMessage").innerHTML =
        "You pressed: " + event.key;
});
