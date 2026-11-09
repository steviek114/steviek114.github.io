// Starting array with 5 items
let items = ["Apple", "Banana", "Orange", "Grapes", "Mango"];

// Get HTML elements
let itemInput = document.getElementById("itemInput");
let addButton = document.getElementById("addButton");
let removeButton = document.getElementById("removeButton");
let sortButton = document.getElementById("sortButton");
let itemList = document.getElementById("itemList");
let arrayDisplay = document.getElementById("arrayDisplay");

// Display the array on the page
function displayList() {

    // Clear the current list
    itemList.innerHTML = "";

    // Loop through the array
    for (let i = 0; i < items.length; i++) {

        let listItem = document.createElement("li");

        listItem.textContent = items[i];

        itemList.appendChild(listItem);
    }

    // Display the actual array
    arrayDisplay.textContent = items.join(", ");
}

// Add an item
addButton.addEventListener("click", function() {

    let newItem = itemInput.value;

    if (newItem !== "") {

        // push adds an item to the end
        items.push(newItem);

        itemInput.value = "";

        displayList();
    }
});

// Remove the last item
removeButton.addEventListener("click", function() {

    // pop removes the last item
    items.pop();

    displayList();
});

// Sort the array
sortButton.addEventListener("click", function() {

    // sort arranges items alphabetically
    items.sort();

    displayList();
});

// Display the starting array
displayList();
