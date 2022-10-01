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

function operate(operator, a, b) {
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

const display = document.getElementById('display');
const btn0 = document.getElementById('0');
const btn1 = document.getElementById('1');
const btn2 = document.getElementById('2');
const btn3 = document.getElementById('3');
const btn4 = document.getElementById('4');
const btn5 = document.getElementById('5');
const btn6 = document.getElementById('6');
const btn7 = document.getElementById('7');
const btn8 = document.getElementById('8');
const btn9 = document.getElementById('9');
const btnAdd = document.getElementById('+');
const btnSub = document.getElementById('-');
const btnMult = document.getElementById('*');
const btnDiv = document.getElementById('/');

function showDisplay() {
    const buttons = document.querySelectorAll('button');
    buttons.forEach(e => {
        e.addEventListener('click', function(){
            display.textContent = e.textContent;
        })
    })
}
showDisplay();