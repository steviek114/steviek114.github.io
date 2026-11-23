
class Car {
    constructor(make, model, year, color, price) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.color = color;
        this.price = price;
    }

    start() {
        return "The car is starting.";
    }

    stop() {
        return "The car is stopping.";
    }
}

// This creates the 3 cars

let car1 = new Car("Kia", "Soul", 2016, "Red", 35000);
let car2 = new Car("Toyota", "Camry", 2020, "Black", 40000);
let car3 = new Car("Honda", "Civic", 2025, "Blue", 45000);

// This puts the cars into the array

let cars = [car1, car2, car3];

// This displays the cars 

let output = "";

for (let car of cars) {
    output += "<h2>" + car.make + " " + car.model + "</h2>";
    output += "<ul>";
    output += "<li>Year: " + car.year + "</li>";
    output += "<li>Color: " + car.color + "</li>";
    output += "<li>Price: $" + car.price + "</li>";
    output += "</ul>";
}

document.getElementById("carList").innerHTML = output;
