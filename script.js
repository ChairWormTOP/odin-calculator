const numbers = document.querySelectorAll('.number')
const display = document.querySelector('.display p')
const clear = document.querySelector('.clear')
const backspace = document.querySelector('.backspace')

const setDisplay = (value) => {
    display.textContent += value
}

const clearDisplay = () => {
    display.textContent = ''
}

numbers.forEach(item => item.addEventListener('click', () => setDisplay(item.textContent)))

clear.addEventListener('click', () => clearDisplay())