let expression = '';

function appendNumber(num) {
    expression += num;
    document.getElementById('view').value = expression;
}

function appendOperator(operator) {
    expression += operator;
    document.getElementById('view').value = expression;
}

function calculate() {
    try {
        const result = eval(expression);
        document.getElementById('view').value = result;
        expression = '';
    } catch (error) {
        document.getElementById('view').value = 'Error';
    }
}

function clearScreen() {
    expression = '';
    document.getElementById('view').value = '';
}