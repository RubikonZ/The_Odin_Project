const container = document.querySelector('.container')

function createButton(text, order=10) {
    let btn = document.createElement('button');
    btn.className = 'btn';
    btn.textContent = text;
    btn.style.order = `${order}`
    container.appendChild(btn)
    
}

function createDisplay() {
    const display = document.createElement('div');
    display.className = 'display'
    display.textContent = ''
    container.appendChild(display)
}

function addNumbers(a, b) {
    return a+b;
}

function subtractNumbers(a, b) {
    return a-b;
}

function divideNumbers(a, b) {
    return a / b;
}

function multiplyNumbers(a, b) {
    return a * b;
}

function clearDisplay() {
    display.textContent = '';
    firstNumber = 0;
    secondNumber = 0;
    operator = undefined;
}

function operate(operator, firstNumber, secondNumber) {
    firstNumber = Number(firstNumber);
    secondNumber = Number(secondNumber);
    let answer;
    if (operator == '+') {
        answer = addNumbers(firstNumber, secondNumber);
        console.log(answer)
    } else if (operator == '-') {
        answer = subtractNumbers(firstNumber, secondNumber);
    } else if (operator == '*') {
        answer = multiplyNumbers(firstNumber, secondNumber);
    } else if (operator == '/') {
        answer = divideNumbers(firstNumber, secondNumber);
    }
    display.textContent = answer;
}

// Creating interface of calculator
createDisplay()
//for (i = 1; i < 10; i++) {
//    createButton(i, i)
//}
buttonArray = ['1', '2', '3', '+', '4','5', '6', '-', '7', '8','9', '/', '=', '0', '*', 'CLEAR'];
buttonArray.forEach(element => createButton(element, buttonArray.indexOf(element)+1));


const buttons = document.querySelectorAll('.btn')
const display = document.querySelector('.display')


let firstNumber = 0;
let secondNumber = 0;
let operator = '';
buttons.forEach(button => {
    
    function pressButton() {
        if (button.textContent == 'CLEAR') {
            clearDisplay()
        } else if (button.textContent == '=') {
            secondNumber = (display.textContent).slice(firstNumber.length + 3);
            operate(operator, firstNumber, secondNumber);
        } else if (['+', '-', '/', '*'].indexOf(button.textContent) >= 0) {
            operator = button.textContent;
            firstNumber = display.textContent;
            display.textContent += ` ${operator} `
        } else {
            display.textContent += button.textContent
        }
    }
    button.addEventListener('click', pressButton)
})