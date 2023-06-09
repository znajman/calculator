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
let decimalPressed = false;
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
digits.forEach(elem => elem.addEventListener('click', () => {
    if (!operatorPressed) {
        firstNumber += elem.textContent;
        resultText.textContent = firstNumber;
    } else {
        secondNumber += elem.textContent;
        resultText.textContent = secondNumber;
    }
}));

const digitDeleter = document.querySelector('.delete');
digitDeleter.addEventListener('click', () => {
    if (!operatorPressed) {
        firstNumber = firstNumber.slice(0, -1);
        resultText.textContent = firstNumber;
        if(!firstNumber.includes('.')) decimalPressed = false;
    } else {
        secondNumber = secondNumber.slice(0, -1);
        resultText.textContent = secondNumber;
        if(!secondNumber.includes('.')) decimalPressed = false;
    }
});

const clearAll = document.querySelector('.clear');
clearAll.addEventListener('click', () => {
    firstNumber = '';
    secondNumber = '';
    result = 0;
    resultText.textContent = '';
});

const decimal = document.querySelector('.decimal');
decimal.addEventListener('click', function() {
    if (!decimalPressed) {
        !operatorPressed ? firstNumber += '.' : secondNumber += '.';
        decimalPressed = true;
    } 
});

const resultText = document.querySelector('.result');

function calculateResult() {
    if (this.id === 'equal') {
        if (!firstNumber) firstNumber = result;
        if (!secondNumber) result = firstNumber;
        result = operate(firstNumber,secondNumber,operator);
        resultText.textContent = result;
        operatorPressed = false;
        decimalPressed = false;
        firstNumber = '';
        secondNumber = '';
    } else {
        if(secondNumber) result = operate(result,secondNumber,operator);
        operator = this.id;
        operatorPressed = true;
        decimalPressed = false;
        secondNumber = '';
    }
}
