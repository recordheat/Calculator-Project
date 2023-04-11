// Makes the calculator function part of the website
function calculator () {
    const numButtons = document.querySelectorAll('.number-symbol');
    const operatorButtons = document.getElementsByClassName('operators');
    const screenOutput = document.getElementById('screen-output');
    const deleteNumbers = document.getElementById('delete-button');
    const clearBtn = document.getElementById('clear-button');
    const sumOfNumbers = document.getElementById('string-of-all-numbers');
    const pointButton = document.getElementById('point-symbol');

   

 // Event listener for displaying numbers in the output screen   
    numButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            if (screenOutput.textContent.length < 13) {
            screenOutput.textContent += button.textContent;
            };
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


};

calculator ();