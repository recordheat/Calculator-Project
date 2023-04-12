// Makes the calculator function part of the website
function calculator () {
    const numButtons = document.querySelectorAll('.number-symbol');
    const operatorButtons = document.querySelectorAll('.operators');
    const screenOutput = document.querySelector('.screen-output');
    
    
    const deleteNumbers = document.getElementById('delete-button');
    const clearBtn = document.getElementById('clear-button');
    const sumOfNumbers = document.getElementById('string-of-all-numbers');
    const pointButton = document.getElementById('point-symbol');

   screenOutput.textContent = '';

 // Event listener for displaying numbers in the output screen
    numButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            if (screenOutput.textContent.length < 13) {
            screenOutput.textContent += button.textContent;
            }     
        });
    });

// Event listener to clear the screen of any numbers 
    clearBtn.addEventListener('click', function () {
        screenOutput.textContent = "";  
    });

// Event listener to delete number from the output screen 
    deleteNumbers.addEventListener('click', function () {
        screenOutput.textContent = screenOutput.textContent.slice(0, -1);
    });
// Function for decimal point
pointButton.addEventListener('click', function () {
    if (!screenOutput.textContent.includes('.')) {
        screenOutput.textContent += '.';
    }
});

// Event listener for each operator button 
operatorButtons.forEach(function(button) {
    button.addEventListener('click', function() {
     const lastChar = screenOutput.textContent.slice(-1);
     if (lastChar === '+'|| lastChar === '-' || lastChar === '÷' || lastChar === 'X') {
        return;
     } else {
        screenOutput.textContent += button.textContent;
     }
    });
});

// Evaluates the user's equaton 
function calculate() {
    const equation = screenOutput.textContent;
    const numbersAndOperators = equation.split(/([-+÷X])/);
    let result = parseFloat(numbersAndOperators[0]);

    for (let i = 1; i < numbersAndOperators.length; i += 2) {
        const operator = numbersAndOperators[i];
        const operand = parseFloat(numbersAndOperators[i + 1]);


        result = operate(operator, result, operand);

    }

    result = roundNumber(result);
    screenOutput.textContent = result.toString();
}

sumOfNumbers.addEventListener('click', function() {
    if (screenOutput.textContent === '') {
        screenOutput.textContent = 'Please enter a number first!';
    } else {
     calculate();
}
});
// Round's the user's final number 
function roundNumber (number) {
    return Math.round(number * 1000) / 1000
}

function addition (a, b) {
   return a + b;  
}

function subtraction (a, b) {
    return a - b;
}

function division (a, b) {
    
     return a / b;
}

function multiplication (a, b) {
    return a * b;
}

function operate (operator, a, b){
    a = Number(a)
    b = Number(b)

    switch (operator) {
        case '+':
            return addition (a, b);
        case '-': 
            return subtraction (a, b);
        case 'X':
            return multiplication (a, b);
        case '÷':
            return division (a, b);
        default: 
            return null;
    }
}

};

calculator ();