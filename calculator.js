function add(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

function mult(a, b) {
    return a * b;
}

function div(a, b) {
    return a / b;
}

function compute(operator, a, b) {
    a = Number(a);
    b = Number(b);
    if (operator === '+') {
        return add(a,b);
    } else if (operator === '-') {
        return sub(a,b);
    } else if (operator === '*') {
        return mult(a,b);
    } if (operator === '/') {
        return div(a,b);
    }
}

function round(result) {
    return Math.round(result * 1000)/1000;
}

const display = document.getElementById('display');
const current = document.getElementById('current');
const previous = document.getElementById('previous');
const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const clearButton = document.getElementById('clear');
const equalButton = document.getElementById('equal');
const signButton = document.getElementById('sign');
const percentButton = document.getElementById('percent');
const backspaceButton = document.getElementById('backspace');
const body = document.querySelector('body');

let currentValue = 0;
let previousValue = 0;
let a = 0;
let b = 0;
let operator;
let result;


function updateDisplay() {
    numbers.forEach(number => {
        number.addEventListener('click', () => {
            if ((number.textContent === '.') && (current.textContent.includes('.'))) return
            current.textContent += number.textContent;
            currentValue += number.textContent;
            number.blur();
        })
    })
}
updateDisplay()

function chooseOperator() {
    operators.forEach(e => {
        e.addEventListener('click', () => {
            if (current.textContent === '') return
            if (previous.textContent !== '') {
                a = previousValue;
                b = currentValue;
                result = round(compute(operator, a, b))
                operator = e.textContent;
                currentValue = 0;
                previousValue = result;
                previous.textContent = result + ' ' + e.textContent;
                current.textContent = '';
            } else {
                previous.textContent = current.textContent + ' ' + e.textContent;
                current.textContent = '';
                operator = e.textContent;
                previousValue = currentValue;
                currentValue = 0;                
            }
        })
    })
}
chooseOperator()

equalButton.addEventListener('click', () => {
    if (current.textContent === '') return
    if (previous.textContent === '') return
    a = previousValue;
    b = currentValue;
    result = round(compute(operator, a, b));
    currentValue = result;
    previousValue = 0;
    previous.textContent = '';
    current.textContent = currentValue;
    equalButton.blur();
})

clearButton.addEventListener('click', () => {
    current.textContent = '';
    previous.textContent = '';
    previousValue = 0;
    currentValue = 0;
    clearButton.blur();
})

backspaceButton.addEventListener('click', () => {
    current.textContent = current.textContent.slice(0, -1);
    currentValue = currentValue.toString().slice(0, -1);
    backspaceButton.blur();
})

signButton.addEventListener('click', () => {
    currentValue = currentValue * -1;
    current.textContent = currentValue;
    signButton.blur();
})

percentButton.addEventListener('click', () => {
    currentValue = currentValue / 100;
    current.textContent = currentValue;
    percentButton.blur();
})

document.addEventListener('keydown', (e) => {
    for (let i = 0; i < numbers.length; i++) {
        if (e.key === numbers[i].textContent) {
            numbers[i].classList.toggle('clicked');
            setTimeout(function() {numbers[i].classList.remove('clicked')}, 100);
            numbers[i].classList.toggle('number');
            setTimeout(function() {numbers[i].classList.toggle('number')}, 100);
            if ((numbers[i].textContent === '.') && (current.textContent.includes('.'))) return
            current.textContent += numbers[i].textContent;
            currentValue += numbers[i].textContent;
        }
    }
    for (let i = 0; i < operators.length; i++) {
        if (e.key === operators[i].textContent) {
            operators[i].classList.toggle('clicked');
            setTimeout(function() {operators[i].classList.remove('clicked')}, 100);
            operators[i].classList.toggle('operator');
            setTimeout(function() {operators[i].classList.toggle('operator')}, 100);
            if (current.textContent === '') return
            if (previous.textContent !== '') {
                a = previousValue;
                b = currentValue;
                result = round(compute(operator, a, b))
                operator = operators[i].textContent;
                currentValue = 0;
                previousValue = result;
                previous.textContent = result + ' ' + operators[i].textContent;
                current.textContent = '';
            } else {
                previous.textContent = current.textContent + ' ' + operators[i].textContent;
                current.textContent = '';
                operator = operators[i].textContent;
                previousValue = currentValue;
                currentValue = 0;                
            }
        }
    }
    switch (e.key) {
        case 'Enter':
            equalButton.classList.toggle('clicked');
            setTimeout(function() {equalButton.classList.remove('clicked')}, 100);
            if (current.textContent === '') return
            if (previous.textContent === '') return
            a = previousValue;
            b = currentValue;
            result = round(compute(operator, a, b));
            currentValue = result;
            previousValue = 0;
            previous.textContent = '';
            current.textContent = currentValue;             
            break;
        case '%':
            percentButton.classList.toggle('clicked');
            setTimeout(function() {percentButton.classList.remove('clicked')}, 100);
            currentValue = currentValue / 100;
            current.textContent = currentValue;
            break;
        case 'Backspace':
            backspaceButton.classList.toggle('clicked');
            setTimeout(function() {backspaceButton.classList.remove('clicked')}, 100);
            current.textContent = current.textContent.slice(0, -1);
            currentValue = currentValue.toString().slice(0, -1);
            break;
        case 'Delete':
            clearButton.classList.toggle('clicked');
            setTimeout(function() {clearButton.classList.remove('clicked')}, 100);            
            current.textContent = '';
            previous.textContent = '';
            previousValue = 0;
            currentValue = 0;
            break;
    }
})