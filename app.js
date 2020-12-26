function add (a,b){
    return a + b
}
function subtract (a,b){
    return a - b
}
function multiply (a,b){
    return a * b
}
function divide (a,b){
    return a / b
}

function operate(operator,a,b){
    if (operator == add(a,b)){
         return add (a,b)
    }
    if (operator == subtract(a,b)){
        return subtract (a,b)
   }
   if (operator == multiply(a,b)){
    return multiply (a,b)
    }
    if (operator == divide(a,b)){
   return divide (a,b)
    }
}