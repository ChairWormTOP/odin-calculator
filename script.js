const numbers = document.querySelectorAll('.number')
const display = document.querySelector('.display p')
const clear = document.querySelector('.clear')
const backspace = document.querySelector('.backspace')
const operation = document.querySelector('.operate')
const add = document.querySelector('.add')
const subtract = document.querySelector('.subtract')
const multiply = document.querySelector('.multiply')
const divide = document.querySelector('.divide')

let currentValues = []
let currrentValue = 0

const setDisplay = (value) => {
    if (currentValues.length === 2) {
        display.textContent = ''
    }

    display.textContent += value
}

const clearDisplay = () => {
    currentValues = []
    display.textContent = ''
}

const backSpace = () => {
    display.textContent = display.textContent.slice(0, display.textContent.length - 1)
}

const operate = (operand1, operator, operand2) => {
    if (operator === '+') {
        return parseInt(operand1) + parseInt(operand2)
    } else if (operator === '-') {
        return parseInt(operand1) - parseInt(operand2)
    } else if (operator === '*') {
        return parseInt(operand1) * parseInt(operand2)
    } else if (operator === '/') {
        return parseInt(operand1) / parseInt(operand2)
    }
}

const disableAllButtons = () => {
    add.disabled = true
    subtract.disabled = true
    multiply.disabled = true
    divide.disabled = true
}

const enableAllButtons = () => {
    add.disabled = false
    subtract.disabled = false
    multiply.disabled = false
    divide.disabled = false
} 

numbers.forEach(item => item.addEventListener('click', () => setDisplay(item.textContent)))

clear.addEventListener('click', () => {
    clearDisplay()
    enableAllButtons()
})

backspace.addEventListener('click', () => backSpace())

operation.addEventListener('click', () => {
    currentValues.push(display.textContent)
    const answer = operate(currentValues[0], currentValues[1], currentValues[2])
    display.textContent = answer
    currentValues = []
})

add.addEventListener('click', () => {
    currentValues.push(display.textContent)
    currentValues.push('+')
})

subtract.addEventListener('click', () => {
    currentValues.push(display.textContent)
    currentValues.push('-')
})

multiply.addEventListener('click', () => {
    currentValues.push(display.textContent)
    currentValues.push('*')
})

divide.addEventListener('click', () => {
    currentValues.push(display.textContent)
    currentValues.push('/')
})