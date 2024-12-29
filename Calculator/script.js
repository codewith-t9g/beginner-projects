// Get elements
const input = document.getElementById('input');
const buttons = document.querySelectorAll('button');
let currentInput = ''; 
let result = ''; 
function updateDisplay(value) {
    input.textContent = value;
}

function handleButtonClick(event) {
    const buttonText = event.target.textContent;

    if (buttonText === 'C') {
        currentInput = '';
        result = '';
        updateDisplay(currentInput);
    } else if (buttonText === '<') {
        
        currentInput = currentInput.slice(0, -1);
        updateDisplay(currentInput);
    } else if (buttonText === '=') {
        
        try {
            result = eval(currentInput); 
            currentInput = result.toString();
            updateDisplay(currentInput);
        } catch (error) {
            updateDisplay('Error');
            currentInput = '';
        }
    } else {
        
        currentInput += buttonText;
        updateDisplay(currentInput);
    }
}

buttons.forEach(button => {
    button.addEventListener('click', handleButtonClick);
});
