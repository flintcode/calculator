const display = document.querySelector("#display");
const allClearButton = document.querySelector("#clear");
const posNegButton = document.querySelector("#plusMinus");
const percentButton = document.querySelector("#percent");
const divideButton = document.querySelector("#divide");
const multiplyButton = document.querySelector("#multiply");
const subtractButton = document.querySelector("#subtract");
const addButton = document.querySelector("#add");
const decimalButton = document.querySelector("#decimals");
const equalsButton = document.querySelector("#equals");
const zeroButton = document.querySelector("#zero");
const oneButton = document.querySelector("#numberOne");
const twoButton = document.querySelector("#numberTwo");
const threeButton = document.querySelector("#numberThree");
const fourButton = document.querySelector("#numberFour");
const fiveButton = document.querySelector("#numberFive");
const sixButton = document.querySelector("#numberSix");
const sevenButton = document.querySelector("#numberSeven");
const eightButton = document.querySelector("#numberEight");
const nineButton = document.querySelector("#numberNine");
const digits = document.querySelectorAll("digits");
const operations = document.querySelectorAll("operations")

let operator = "";
let currentValue = 0;
let storedValue = 0;


function operate(){;
    if (operator === ""){
        return Number(currentValue);
    }
    else if (operator == "+"){
        display.value = (Number(currentValue) + Number(storedValue));
    }
    else if (operator == "-"){
        display.value = (Number(currentValue) - Number(storedValue));
   }
   else if (operator == "*"){
        display.value = (Number(currentValue) * Number(storedValue));
    }
    else if (operator == "/"){
        display.value = (Number(currentValue) / Number(storedValue));
       
    }
  }

function add () {
    storedValue = currentValue;
    display.value = null;
    operator = "+";
    
}
function subtract (){
    storedValue = currentValue;
    display.value = null;
    operator = "-"
}
function divide (){
    storedValue = currentValue;
    display.value = null;
    operator = "/"
}
function multiply(){
    storedValue = currentValue;
    display.value = null;
    operator = "*"
}
function posNeg (){
    
    if(Math.sign(currentValue) === 1) {
        ~(Number(currentValue))
    } 
    else if (Math.sign(display.value) === -1){
        display.value * -1
    }
}

// number buttons

    zeroButton.addEventListener('click', () => currentValue = display.value += 0);
    oneButton.addEventListener('click', () => currentValue = display.value += 1);
    twoButton.addEventListener('click', () => currentValue = display.value += 2);
    threeButton.addEventListener('click', () => currentValue = display.value += 3);
    fourButton.addEventListener('click', () => currentValue = display.value += 4);
    fiveButton.addEventListener('click', () => currentValue = display.value += 5);
    sixButton.addEventListener('click', () => currentValue = display.value += 6);
    sevenButton.addEventListener('click', () => currentValue = display.value += 7);
    eightButton.addEventListener('click', () => currentValue = display.value += 8);
    nineButton.addEventListener('click', () => currentValue = display.value += 9);
    

// functional buttons

clear.addEventListener('click', () => currentValue = display.value = null);
addButton.addEventListener('click', add);
subtractButton.addEventListener('click',subtract)
divideButton.addEventListener('click',divide)
multiplyButton.addEventListener('click',multiply)
equalsButton.addEventListener('click',operate)
posNegButton.addEventListener('click',posNeg);
