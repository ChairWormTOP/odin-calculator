const numbers = document.querySelectorAll('.number')
const display = document.querySelector('.display p')
const clear = document.querySelector('.clear')
const backspace = document.querySelector('.backspace')

const setDisplay = (value) => {
    display.textContent += value
    
}

const clearDisplay = () => {
    display.textContent
}

const backSpace = () => {
    display.textContent = display.textContent.slice(0, display.textContent.length - 1)
}

numbers.forEach(item => item.addEventListener('click', () => setDisplay(item.textContent)))

clear.addEventListener('click', () => clearDisplay())

backspace.addEventListener('click', () => backSpace())