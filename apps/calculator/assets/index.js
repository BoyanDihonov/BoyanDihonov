const buttons = document.querySelectorAll('button');
const display = document.getElementById('result');

let currentInput = '';
let operator = '';
let previousInput = '';
let calculationString = ''; // To hold the full calculation string

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;

        if (!isNaN(value) || value === '.') {
            // Handle number and decimal inputs
            currentInput += value;
            calculationString += value;
            display.value = calculationString;
        } else if (value === 'C') {
            // Handle clear button
            currentInput = '';
            operator = '';
            previousInput = '';
            calculationString = '';
            display.value = '';
        } else if (value === '=') {
            // Handle equals button
            if (currentInput && previousInput && operator) {
                display.value = calculate(previousInput, currentInput, operator);
                calculationString = display.value;
                previousInput = calculationString;
                currentInput = '';
                operator = '';
            }
        } else {
            // Handle operators
            if (currentInput) {
                if (previousInput && operator) {
                    previousInput = calculate(previousInput, currentInput, operator);
                } else {
                    previousInput = currentInput;
                }
                operator = value;
                calculationString += ` ${operator} `;
                currentInput = '';
                display.value = calculationString;
            }
        }
    });
});

function calculate(num1, num2, operator) {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);

    switch (operator) {
        case '+':
            return n1 + n2;
        case '-':
            return n1 - n2;
        case '*':
            return n1 * n2;
        case '/':
            return n1 / n2;
        default:
            return num2;
    }
}
