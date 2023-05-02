 const add = (a, b) => {
    if (isNaN(+a) || isNaN(+b)) return undefined;
    return a + b;
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
operators.forEach(elem => elem.addEventListener('click',function() {
    operator = elem.id;
    operatorPressed = true;
}));

const equal = document.querySelector('.equal');
equal.addEventListener('click', function () {
    result = operate(firstNumber,secondNumber,operator);
    operatorPressed = false;
    secondNumber = '';
    console.log(result);

});

const digits = document.querySelectorAll('.digit');
digits.forEach(elem => elem.addEventListener('click', function() {
    operatorPressed ? firstNumber += elem.textContent : secondNumber += elem.textContent;
}));