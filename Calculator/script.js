// // Get the output screen element
// const outputScreen = document.getElementById('ouput-screen');

// // Function to display values on the screen
// function display(value) {
//     outputScreen.value += value;
// }

// // Function to clear the screen
// function clear() {
//     outputScreen.value = '';
// }

// // Function to delete the last character from the screen
// function del() {
//     outputScreen.value = outputScreen.value.slice(0, -1);
// }

// // Function to calculate the result
// function Calculate() {
//     let result = '';
//     try {
//         result = eval(outputScreen.value); // Use eval to evaluate the arithmetic expression
//         outputScreen.value = result;
//     } catch (error) {
//         outputScreen.value = 'Error'; // Handle any errors in evaluation
//     }
// }
// Get the output screen element
const outputScreen = document.getElementById('ouput-screen');

// Function to display values on the screen
function display(value) {
    outputScreen.value += value;
}

// Function to clear the screen
function clearScreen() {
    outputScreen.value = '';
}

// Function to delete the last character from the screen
function deleteCharacter() {
    outputScreen.value = outputScreen.value.slice(0, -1);
}

// Function to calculate the result
function calculateResult() {
    let result = '';
    try {
        result = eval(outputScreen.value); // Use eval to evaluate the arithmetic expression
        outputScreen.value = result;
    } catch (error) {
        outputScreen.value = 'Error'; // Handle any errors in evaluation
    }
}

// Event listener for keyboard input
document.addEventListener('keydown', (event) => {
    const keyValue = event.key;

    // Check for numeric keys, operators, and decimal point
    if (/[0-9+\-*/.%]/.test(keyValue)) {
        display(keyValue);
    } else if (keyValue === 'Enter') {
        calculateResult();
    } else if (keyValue === 'Backspace') {
        deleteCharacter();
    } else if (keyValue === 'Escape') {
        clearScreen();
    }
});
