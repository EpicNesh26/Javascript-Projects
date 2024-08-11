
// Select elements
const display = document.getElementById('display');
const buttons = document.querySelectorAll('.button');
const clearButton = document.querySelector('.clear');
const clearEntryButton = document.querySelector('.clearE');
const equalsButton = document.getElementById('equals');
const integerButton = document.querySelector('.integer');

let currentInput = '';
let operator = '';
let firstValue = '';
let secondValue = '';
let result = '';
let operatorClicked = false;

// Add event listeners to number and operator buttons
buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.classList.contains('operator')) {
            if (currentInput === '' && firstValue !== '') {
                operator = button.dataset.op;
                return;
            }
            operatorClicked = true;
            operator = button.dataset.op;
            firstValue = currentInput;
            currentInput = '';
        } else if (button.classList.contains('clear')) {
            clear();
        } else if (button.classList.contains('clearE')) {
            clearEntry();
        } else if (button.classList.contains('integer')) {
            toggleSign();
        } else {
            if (operatorClicked) {
                currentInput = '';
                operatorClicked = false;
            }
            currentInput += button.dataset.num;
            display.value = currentInput;
        }
    });
});

// Add event listener to the equals button
equalsButton.addEventListener('click', () => {
    if (firstValue === '' || operator === '' || currentInput === '') return;
    secondValue = currentInput;
    calculate();
    display.value = result;
    firstValue = result;
    currentInput = result;
});

// Clear all inputs and reset the calculator
function clear() {
    currentInput = '';
    operator = '';
    firstValue = '';
    secondValue = '';
    result = '';
    display.value = '';
}

// Clear the current entry (current input)
function clearEntry() {
    currentInput = '';
    display.value = '';
}

// Toggle the sign of the current input
function toggleSign() {
    if (currentInput !== '') {
        currentInput = (parseFloat(currentInput) * -1).toString();
        display.value = currentInput;
    }
}

// Calculate the result based on the operator
function calculate() {
    const num1 = parseFloat(firstValue);
    const num2 = parseFloat(secondValue);

    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        case '%':
            result = num1 % num2;
            break;
        default:
            result = 'Error';
    }
}

