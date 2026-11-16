const inputField = document.getElementById('userInput');
const checkButton = document.getElementById('checkBtn');
const resultText = document.getElementById('result');

function checkInput() {
    // 1. Read input and trim whitespace
    const rawValue = inputField.value.trim();

    // 2. Handle empty or whitespace-only values as invalid
    if (rawValue === "") {
        resultText.textContent = "Please enter a valid number!";
        return; // Exit the function early
    }

    // 3. Convert valid string to number (supports decimals like 10.5)
    const numericValue = Number(rawValue);

    // 4. Detect invalid values (e.g., "abc" becomes NaN)
    if (isNaN(numericValue)) {
        resultText.textContent = "Please enter a valid number!";
    } 
    // 5. if...else if...else structure to display correct messages
    else if (numericValue < 10) {
        resultText.textContent = "The number is lower than 10";
    } else if (numericValue > 10) {
        resultText.textContent = "The number is higher than 10";
    } else {
        resultText.textContent = "The number is equal to 10";
    }
}

// Register the click event with addEventListener
checkButton.addEventListener('click', checkInput);