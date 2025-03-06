// Select the <ul> element where the list will be added
const listElement = document.getElementById("itemList");

// Create an array of items
const items = ["Item 1", "Item 2", "Item 3"];

// Loop through the array and create <li> elements
items.forEach(item => {
    const listItem = document.createElement("li"); // Create <li>
    listItem.textContent = item; // Set text content
    listElement.appendChild(listItem); // Append to <ul>
});