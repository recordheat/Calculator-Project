// Makes the calculator function part of the website
function calculator () {
    let firstOperand = '';
    let secondOperand = '';



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


function addition (a, b) {
   return a + b;  
}

function subtraction (a, b) {
    return a - b;
}

function division (a, b) {
   if (b === 0) {
    return screenOutput.textContent = "ERROR";
   } else {
    return a / b;
   }
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