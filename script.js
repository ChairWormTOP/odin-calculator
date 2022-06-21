const numbers = document.querySelectorAll('.number')
const display = document.querySelector('.display p')
const clear = document.querySelector('.clear')
const backspace = document.querySelector('.backspace')
const operation = document.querySelector('.operate')
const add = document.querySelector('.add')
const subtract = document.querySelector('.subtract')
const multiply = document.querySelector('.multiply')
const divide = document.querySelector('.divide')
const dot = document.querySelector('.dot')

let currentValues = []

const setDisplay = (value) => {
    if (display.textContent === '0') {
        display.textContent = ''
    }

    display.textContent += value
}

const clearDisplay = () => {
    currentValues = []
    display.textContent = '0'
}

const backSpace = () => {
    display.textContent = display.textContent.slice(0, display.textContent.length - 1)

    if (display.textContent === '') {
        display.textContent = '0'
    }
}

const operate = (operand1, operator, operand2) => {
    if (operator === '+') {
        return parseFloat(operand1) + parseFloat(operand2)
    } else if (operator === '-') {
        return parseFloat(operand1) - parseFloat(operand2)
    } else if (operator === '*') {
        return parseFloat(operand1) * parseFloat(operand2)
    } else if (operator === '/') {
        if (operand2 === '0') {
            return 'Error: Cannot divide by zero.'
        }

        return parseFloat(operand1) / parseFloat(operand2)
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

backspace.addEventListener('click', () => {
    backSpace()
})

operation.addEventListener('click', () => {
    currentValues.push(display.textContent)
    const answer = operate(currentValues[0], currentValues[1], currentValues[2])
    display.textContent = answer
    currentValues = []
})

add.addEventListener('click', () => {
    if (currentValues.length === 2) {
        currentValues.push(display.textContent)
        display.textContent = operate(currentValues[0], currentValues[1], currentValues[2])
        currentValues = [display.textContent, '+']
        return
    }

    currentValues.push(display.textContent)
    display.textContent = '0'
    currentValues.push('+')
})

subtract.addEventListener('click', () => {
    if (currentValues.length === 2) {
        currentValues.push(display.textContent)
        display.textContent = operate(currentValues[0], currentValues[1], currentValues[2])
        currentValues = [display.textContent, '-']
        return
    }

    currentValues.push(display.textContent)
    display.textContent = '0'
    currentValues.push('-')
})

multiply.addEventListener('click', () => {
    if (currentValues.length === 2) {
        currentValues.push(display.textContent)
        display.textContent = operate(currentValues[0], currentValues[1], currentValues[2])
        currentValues = [display.textContent, '*']
        return
    }

    currentValues.push(display.textContent)
    display.textContent = '0'
    currentValues.push('*')
})

divide.addEventListener('click', () => {
    if (currentValues.length === 2) {
        currentValues.push(display.textContent)
        display.textContent = operate(currentValues[0], currentValues[1], currentValues[2])
        currentValues = [display.textContent, '/']
        return
    }

    currentValues.push(display.textContent)
    display.textContent = '0'
    currentValues.push('/')
})

dot.addEventListener('click', () => {
    if (!display.textContent.includes('.')) {
        display.textContent += '.'
    }
})