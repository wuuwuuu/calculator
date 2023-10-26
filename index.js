let display = "";
let firstNumber = 0;
let secondNumber = 0;
let operator = "";

function operate(operatorType) {
    
    if (operator == "+" && firstNumber != 0 && secondNumber != 0) {
        display = parseFloat(firstNumber + secondNumber);
        setNumbers();
    }
    if (operator == "-" && firstNumber != 0 && secondNumber != 0) {
        display = parseFloat(firstNumber - secondNumber);
        setNumbers();
    }
    if (operator == "*" && firstNumber != 0 && secondNumber != 0) {
        display = parseFloat(firstNumber * secondNumber);
        setNumbers();
    }
    if (operator == "/" && firstNumber != 0 && secondNumber != 0) {
        if (firstNumber != 0) {
            display = parseFloat(firstNumber / secondNumber)
        } 
        setNumbers();
    }
    function setNumbers() {
        secondNumber = 0;
        firstNumber = parseFloat(display);
    }
    updateDisplay();
    operator = operatorType;
}
function updateDisplay() {
    const currentDisplay = document.querySelector('.display');
    currentDisplay.textContent = display;
}
function checkNumbersEmpty() {
    if (firstNumber == 0 && display != "") {
        firstNumber = parseFloat(display);
    }
    if (firstNumber != 0 && secondNumber == 0 && display == "") {
        secondNumber = parseFloat(firstNumber);
    }
    else if (secondNumber == 0 && display != "" && operator != "") {
        secondNumber = parseFloat(display);
    }
}
function negative() {
    display = "-" + display;
    if (display.includes("--")) {
        display = display.replace("--", "");
    }
    updateDisplay();
}
function percent() {
    display = parseFloat(display / 100);
    updateDisplay();
}
function evaluateOperation() {
    checkNumbersEmpty();
    operate("");
}
function add() {  
    checkNumbersEmpty();
    operate("+");
    display = "";
}
function subtract() {
    checkNumbersEmpty();
    operate("-");
    display = "";
}
function multiply() {
    checkNumbersEmpty();
    operate("*");
    display = "";
}
function divide() {
    checkNumbersEmpty();
    operate("/");
    display = "";
}
function one() {
    display += 1;
    updateDisplay();
}
function two() {
    display += 2;
    updateDisplay();
    
}
function three() {
    display += 3;
    updateDisplay();

}
function four() {
    display += 4;
    updateDisplay();

}
function five() {
    display += 5;
    updateDisplay();
}
function six() {
    display += 6;
    updateDisplay();

}
function seven() {
    display += 7;
    updateDisplay();

}
function eight() {
    display += 8;
    updateDisplay();

}
function nine () {
    display += 9;
    updateDisplay();

}
function zero () {
    display += 0;
    updateDisplay();
}
function decimal() {
    if (!display.includes(".")) {
        display += ".";
        updateDisplay();
    }
}

function allClear() {
    display = "";
    firstNumber = 0;
    secondNumber = 0;
    operator = "";
    updateDisplay();
}