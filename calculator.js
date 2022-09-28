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