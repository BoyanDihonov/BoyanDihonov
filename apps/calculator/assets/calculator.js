const buttons = document.querySelectorAll('button');
const display = document.getElementById('result');

let currentInput = '';
let operator = '';
let previousInput = '';
let calculationString = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;

        if (!isNaN(value) || value === '.') {
            currentInput += value;
            calculationString += value;
            display.value = calculationString;
        } else if (value === 'C') {
            currentInput = '';
            operator = '';
            previousInput = '';
            calculationString = '';
            display.value = '';
        } else if (value === '=') {
            if (currentInput && previousInput && operator) {
                display.value = calculate(previousInput, currentInput, operator);
                calculationString = display.value;
                previousInput = calculationString;
                currentInput = '';
                operator = '';
            }
        } else if (value === '%') {
            if (currentInput) {
                currentInput = (parseFloat(currentInput) / 100).toString();
                calculationString = currentInput;
                display.value = calculationString;
            }
        } else if (value === '√') {
            if (currentInput) {
                currentInput = Math.sqrt(parseFloat(currentInput)).toString();
                calculationString = currentInput;
                display.value = calculationString;
            }
        } else if (value === '^') {
            if (previousInput && currentInput) {
                currentInput = Math.pow(parseFloat(previousInput), parseFloat(currentInput)).toString();
                calculationString = currentInput;
                display.value = calculationString;
                previousInput = currentInput;
                currentInput = '';
            } else {
                operator = value;
                calculationString += ` ${operator} `;
                display.value = calculationString;
            }
        } else {
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
