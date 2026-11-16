const generateButton = document.getElementById('generateBtn');
const numberList = document.getElementById('numberList');

function generateNumbers() {
    // 1. Clear existing items to prevent duplicates on repeated clicks
    numberList.innerHTML = ""; 

    // 2. Use a for loop that iterates from 1 through 5
    for (let i = 1; i <= 5; i++) {
        // 3. Create each <li> with document.createElement()
        const listItem = document.createElement('li');
        
        // 4. Set text with textContent
        listItem.textContent = `The number is ${i}`;
        
        // 5. Append it to #numberList
        numberList.appendChild(listItem);
    }
}

// Attach the function to the button
generateButton.addEventListener('click', generateNumbers);