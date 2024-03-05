let number1 = 0;
let number2 = 0;
let operator = "";












//Operate function

function operate(num1, sign, num2){
    if(sign == "+")
    return add(num1, num2)

    else if(sign == "-")
    return subtract(num1, num2)

    else if(sign == "*")
    return multiply(num1, num2)

    else if(sign == "/")
    return divide(num1, num2)
}

//Calculator functions

function add(num1, num2){
    return num1 + num2;
}

function subtract(num1, num2){
    return num1 - num2
}

function multiply(num1, num2){
    return num1 * num2;
}

function divide(num1, num2){
    return num1 / num2
}