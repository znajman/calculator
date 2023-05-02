 const add = (a, b) => {
    if (isNaN(a) || isNaN(b)) return undefined;
    return a + b;
 };

const subtract = (a, b) => {
    if (isNaN(a) || isNaN(b)) return undefined;
    return a - b;
};

const multiply = (a, b) => {
    if (isNaN(a) || isNaN(b)) return undefined;
    return a * b;
}

const divide = (a, b) => {
    if (isNaN(a) || isNaN(b)) return undefined;
    return a / b;
}

const pow = (a, b) => {
    if (isNaN(a) || isNaN(b)) return undefined;
    return a ** b;
}

const percent = (a, b) => {
    if (isNaN(a) || isNaN(b)) return undefined;
    if (b === 0) return 0;
    return a / b / 100;
}