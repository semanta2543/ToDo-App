// Get references to HTML elements using their IDs
const inputbox = document.getElementById("input-box"); // Input box element
const listContainer = document.getElementById("list-container"); // List container element

// Function to add a new task
function addTask(){
    // Check if input box is empty
    if (inputbox.value === ''){
        alert("You must write something"); // Alert user if input is empty
    }
    else{
        // Create a new list item element
        let li = document.createElement("li");
        li.innerHTML = inputbox.value; // Set inner HTML of list item to input value
        listContainer.appendChild(li); // Append list item to the list container

        // Create a close button (span element)
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"; // Unicode for '×' (close symbol)
        li.appendChild(span); // Append close button to the list item
    }
    inputbox.value = ""; // Clear the input box after adding task
    saveData(); // Save data to local storage
}

// Event listener for clicks on list container
listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){ // If clicked element is a list item
        e.target.classList.toggle("checked"); // Toggle 'checked' class for the list item
        saveData(); // Save data to local storage
    }
    else if(e.target.tagName === "SPAN"){ // If clicked element is a close button
        e.target.parentElement.remove(); // Remove the parent list item
        saveData(); // Save data to local storage
    }
}, false);

// Function to save data to local storage
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML); // Save list container's inner HTML to local storage
}

// Function to show tasks from local storage
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data"); // Set list container's inner HTML from local storage
}

showTask(); // Show tasks when the page loads
