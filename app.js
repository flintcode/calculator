const display = document.querySelector("#display");
const allClearButton = document.querySelector("#clear");
const posNegButton = document.querySelector("#plusMinus");
const percentButton = document.querySelector("#percent");
const divideButton = document.querySelector("#divide");
const multiplyButton = document.querySelector("#multiply");
const subtractButton = document.querySelector("#subtract");
const addButton = document.querySelector("#add");
const decimalButton = document.querySelector("#decimal");
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
const toggleMode = document.querySelector("#changeMode");
const allDigits = document.querySelectorAll("digits")

let operator = "";
let currentValue = '';
let storedValue = '';


function operate(){;
    if (operator === ""){
        return Number(currentValue);
    }
    else if (operator == "+"){
        display.value = (Number(storedValue) + Number(currentValue));
        currentValue = 0;
        storedValue = Number(display.value);
    }
    else if (operator == "-"){
        display.value = (Number(storedValue) - Number(currentValue));
        currentValue = 0;
        storedValue = Number(display.value);
   }
   else if (operator == "*"){
        display.value = (Number(storedValue) * Number(currentValue));
        currentValue = 0;
        storedValue = Number(display.value);
    }
    else if (operator == "/"){
        display.value = (Number(storedValue)/Number(currentValue));
        currentValue = 0;
        storedValue = Number(display.value);
    }
  }

function add () {

    if(currentValue != "" && storedValue !== " "  && operator == "+"){        
        display.value = (Number(storedValue) + Number(currentValue));
        storedValue = Number(display.value);
        display.value = null;
     }
     else if (operator == "-"){
        display.value = (Number(storedValue) - Number(currentValue));
        storedValue = Number(display.value);
        display.value = null;
    }
    else if (operator == "/"){
        display.value = (Number(storedValue)/ Number(currentValue));
        storedValue = Number(display.value);
        display.value = null;
    }
    else if (operator == "*"){
            display.value = (Number(storedValue) * Number(currentValue));
            storedValue = Number(display.value);
            display.value = null;
    }
    else{
        storedValue = Number(display.value);
        display.value = null;
    
    }
    operator = "+";
    }
    
  
function subtract (){

        if(currentValue != "" && storedValue !== " " && operator == "-"){        
            display.value = (Number(storedValue) - Number(currentValue));
            storedValue = Number(display.value);
            display.value = null;
         }
         else if (operator == "+"){
            display.value = (Number(storedValue) + Number(currentValue));
            storedValue = Number(display.value);
            display.value = null;
        }
        else if (operator == "/"){
            display.value = (Number(storedValue)/ Number(currentValue));
            storedValue = Number(display.value);
            display.value = null;
        }
        else if (operator == "*"){
                display.value = (Number(storedValue) * Number(currentValue));
                storedValue = Number(display.value);
                display.value = null;
        }
        else {
            storedValue = Number(display.value);
            display.value = null;
        
        }
        operator = "-"
    }
function divide (){

        if(currentValue != "" && storedValue !== " "  && operator == "/"){        
            display.value = (Number(storedValue) / Number(currentValue));
            storedValue = Number(display.value);
            display.value = null;
         }
        else if (operator == "+"){
            display.value = (Number(storedValue) + Number(currentValue));
            storedValue = Number(display.value);
            display.value = null;
        }
        else if (operator == "-"){
            display.value = (Number(storedValue) - Number(currentValue));
            storedValue = Number(display.value);
            display.value = null;
        }
        else if (operator == "*"){
                display.value = (Number(storedValue) * Number(currentValue));
                storedValue = Number(display.value);
                display.value = null;
        }
    else{
        storedValue = Number(display.value);
        display.value = null;
    
    }
    operator = "/"
}
function multiply(){
 
        if(currentValue != "" && storedValue !== " " && operator == "*"){        
            display.value = (Number(storedValue) * Number(currentValue));
            storedValue = Number(display.value);
            display.value = null;
         }
        else if (operator == "+"){
            display.value = (Number(storedValue) + Number(currentValue));
            storedValue = Number(display.value);
            display.value = null;
        }
        else if (operator == "-"){
            display.value = (Number(storedValue) - Number(currentValue));
            storedValue = Number(display.value);
            display.value = null;
        }
        else if (operator == "/"){
                display.value = (Number(storedValue) / Number(currentValue));
                storedValue = Number(display.value);
                display.value = null;
        }
         
    else{
            storedValue = Number(display.value);
            display.value = null;
        
        }
        operator = "*"
    }
    
function allClear (){
    display.value = null;
    currentValue = 0;
    storedValue = 0;
    storedValue2 = 0;
    operator = " ";
}
function posNeg (){
    display.value = Number(display.value) *-1 
}
function addDecimal() {
        display.value = display.value + "." ;
        storedValue = Number(display.value);
}

function addPercent(){
    display.value = Number(display.value) / 100;
   
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
clear.addEventListener('click', allClear);
addButton.addEventListener('click', add);
subtractButton.addEventListener('click',subtract)
divideButton.addEventListener('click',divide)
multiplyButton.addEventListener('click',multiply)
equalsButton.addEventListener('click',operate)
posNegButton.addEventListener('click',posNeg);
decimalButton.addEventListener('click',addDecimal);
percentButton.addEventListener('click',addPercent)

// background modes
function changeBackground (){
    if (document.body.style.background == "white"){
       document.body.style.background = '#202020';
       darkColorChange()
    } else {
        document.body.style.background = "white";
        lightColorChange()
    }
}
function darkColorChange (){
    let darkElements = document.getElementsByClassName('container')
    let darkNumbers = document.getElementsByClassName("numbers")
        for(i = 0; i < darkElements.length; i++){
        darkElements[i].style.backgroundColor = "white"
        }
 for (i = 0; i < darkNumbers.length; i++){
     darkNumbers[i].style.backgroundColor = "#DCDCDC";
 }
       
}
function lightColorChange(){
    let  lightElements = document.getElementsByClassName("container")
    for(i = 0; i < lightElements.length; i++){
        lightElements[i].style.backgroundColor = "black";
    }
    let lightNumbers = document.getElementsByClassName("numbers")
    for (i = 0; i < lightNumbers.length; i++ ){
     lightNumbers[i].style.backgroundColor = "#FFFFFF";
    }
}
toggleMode.addEventListener('click', changeBackground );


//  function backSpace (){
//     let backSpaceDisplay = display.value;
//     return backSpaceDisplay.split("").slice(-1).join("")
//  }


//  let darkNUmblightNumbers = document.getElementsByClassName('NUmblightNumbers')
// for (i = 0; i < darkNUmblightNumbers.length; i++){
//     darkText[i].style.backgroundColor = "#606060"
// }
// 
