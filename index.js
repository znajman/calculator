 const add = (a, b) => {
    if (isNaN(+a) || isNaN(+b)) return undefined;
    return +a + +b;
 };

const subtract = (a, b) => {
    if (isNaN(+a) || isNaN(+b)) return undefined;
    return a - b;
};

const multiply = (a, b) => {
    if (isNaN(+a) || isNaN(+b)) return undefined;
    return a * b;
}

const divide = (a, b) => {
    if (isNaN(+a) || isNaN(+b)) return undefined;
    return a / b;
}

const pow = (a, b) => {
    if (isNaN(+a) || isNaN(+b)) return undefined;
    return a ** b;
}

const percent = (a, b) => {
    if (isNaN(+a) || isNaN(+b)) return undefined;
    if (b === 0) return 0;
    return a / b / 100;
}

let firstNumber = '';
let secondNumber = '';
let operator;
let operatorPressed = false;
let result = 0;

function operate (firstNumber, secondNumber, operator) {
    if (secondNumber === '') return result;
    switch (operator) {
        case 'add':
            return add(firstNumber,secondNumber);
        case 'subtract':
            return subtract(firstNumber,secondNumber);
        case 'multiply':
            return multiply(firstNumber,secondNumber);
        case 'divide':
            return divide(firstNumber,secondNumber);
        case 'pow':
            return pow(firstNumber,secondNumber);
        case 'percent':
            return percent(firstNumber,secondNumber);
    }
};

const operators = document.querySelectorAll('.operator');
operators.forEach(elem => elem.addEventListener('click', calculateResult));

const digits = document.querySelectorAll('.digit');
digits.forEach(elem => elem.addEventListener('click', () =>
 !operatorPressed ? firstNumber += elem.textContent : secondNumber += elem.textContent));

const digitDeleter = document.querySelector('.delete');
digitDeleter.addEventListener('click', () =>
!operatorPressed ? firstNumber = firstNumber.slice(0, -1) : secondNumber = secondNumber.slice(0, -1));

function calculateResult() {
    if (this.id === 'equal') {
        if (!firstNumber) firstNumber = result;
        if (!secondNumber) result = firstNumber;
        result = operate(firstNumber,secondNumber,operator);
        operatorPressed = false;
        firstNumber = '';
        secondNumber = '';
    } else {
        if(secondNumber) result = operate(result,secondNumber,operator);
        operator = this.id;
        operatorPressed = true;
        secondNumber = '';
    }
}