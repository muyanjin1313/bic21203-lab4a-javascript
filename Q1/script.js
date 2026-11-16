// 1. Select the paragraph and button using JavaScript DOM selection methods
const messageParagraph = document.getElementById('message');
const changeButton = document.getElementById('changeBtn');

// 2. Define a function named changeMessage() that replaces the text
function changeMessage() {
    // Use textContent for user-facing text
    messageParagraph.textContent = "Hello there!";
}

// 3. Attach the function to the button using addEventListener
changeButton.addEventListener('click', changeMessage);