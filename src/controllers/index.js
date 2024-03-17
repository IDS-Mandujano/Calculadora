document.querySelectorAll('.number').forEach(button => {
    button.addEventListener('click', () => {
        const view = document.getElementById('view');
        const currentValue = view.value;
        const buttonValue = button.innerText;

        if (currentValue === '0' && buttonValue !== '.') {
            // Si el valor actual es 0 y el botón clickeado no es '.', reemplaza el 0 con el valor del botón.
            view.value = buttonValue;
        } else {
            // De lo contrario, concatena el valor del botón al valor actual.
            view.value += buttonValue;
        }
    });
});

document.querySelectorAll('.operators-container button').forEach(operatorButton => {
    operatorButton.addEventListener('click', () => {
        const view = document.getElementById('view');
        const currentValue = view.value;
        const operator = operatorButton.innerText;

        // Si ya hay un operador al final, reemplaza el operador actual por el nuevo.
        const lastChar = currentValue[currentValue.length - 1];
        if (!['+', '-', 'x', '/'].includes(lastChar) && currentValue !== '') {
            // Si no hay un operador al final y el campo de entrada no está vacío, añade el operador al final.
            view.value += operator;
        } else if (['+', '-', 'x', '/'].includes(lastChar) && currentValue !== '' && currentValue.length > 1) {
            // Si ya hay un operador al final y el campo de entrada no está vacío, reemplaza el operador actual por el nuevo.
            view.value = currentValue.slice(0, -1) + operator;
        }
    });
});

document.querySelector('.number-container button[type="submit"][value="C"]').addEventListener('click', () => {
    // Restablece el valor a 0 cuando se hace clic en el botón "C".
    document.getElementById('view').value = '';
});

document.querySelector('.number-container button[type="submit"][value="="]').addEventListener('click', () => {
    const view = document.getElementById('view');
    const currentValue = view.value;

    // Evalúa la expresión matemática y actualiza el valor del campo de entrada.
    try {
        const result = eval(currentValue);
        view.value = result;
    } catch (error) {
        // En caso de error, muestra un mensaje de error.
        view.value = 'Error';
    }
});
