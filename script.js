let number1 = null;
let number2 = null;
let operator = "";
let screenRefreshRequired = false;

//Document references

let displayContent = document.querySelector("#screen-content")

const backspace = document.querySelector("#backspace")
const clear = document.querySelector("#clear")

const one = document.querySelector("#one")
const two = document.querySelector("#two")
const three = document.querySelector("#three")
const four = document.querySelector("#four")
const five = document.querySelector("#five")
const six = document.querySelector("#six")
const seven = document.querySelector("#seven")
const eight = document.querySelector("#eight")
const nine = document.querySelector("#nine")
const zero = document.querySelector("#zero")

const decimal = document.querySelector("#decimal")

const equals = document.querySelector("#equals")

const divide = document.querySelector("#divide")
const multiply = document.querySelector("#multiply")
const subtract = document.querySelector("#subtract")
const add = document.querySelector("#add")


one.addEventListener("click", () => updateDisplay("1"))
two.addEventListener("click", () => updateDisplay("2"))
three.addEventListener("click", () => updateDisplay("3"))
four.addEventListener("click", () => updateDisplay("4"))
five.addEventListener("click", () => updateDisplay("5"))
six.addEventListener("click", () => updateDisplay("6"))
seven.addEventListener("click", () => updateDisplay("7"))
eight.addEventListener("click", () => updateDisplay("8"))
nine.addEventListener("click", () => updateDisplay("9"))
zero.addEventListener("click", () => updateDisplay("0"))

clear.addEventListener("click", () => clearData())

backspace.addEventListener("click", () => removeLast())

decimal.addEventListener("click", () => updateDisplay("."))

divide.addEventListener("click", () => callOperator("/"))
multiply.addEventListener("click", () => callOperator("*"))
subtract.addEventListener("click", () => callOperator("-"))
add.addEventListener("click", () => callOperator("+"))

equals.addEventListener("click", () => (updateNumber2(), operate(number1, operator, number2)))




function callOperator(sign){

    if(number1 !== null){
        number2 = parseFloat(displayContent.textContent);
        operate(number1, operator, number2)
    }

    number1 = parseFloat(displayContent.textContent);
    operator = sign;
    screenRefreshRequired = true;
}

//Auxilary functions

function removeLast(){
    displayContent.textContent = displayContent.textContent.slice(0, -1)
}

function clearData(){
    number1 = null;
    number2 = null;
    operator = "";
    displayContent.textContent = "";
    screenRefreshRequired = false;
}

function updateDisplay(content){

    if(screenRefreshRequired == true){
        displayContent.textContent = "";
        screenRefreshRequired = false;
    }

    else if(displayContent.textContent.length == 10)
    return

    displayContent.textContent += content
}

function updateNumber2(){
    number2 = parseFloat(displayContent.textContent);
}

//Operate function

function operate(num1, sign, num2){
    if(sign == "+"){
    displayContent.textContent = addNums(num1, num2);
    screenRefreshRequired = true;
    operator = "";
    number1 = parseFloat(displayContent.textContent);
    number2 = null;
    }

    else if(sign == "-"){
    displayContent.textContent = subtractNums(num1, num2);
    screenRefreshRequired = true;
    operator = "";
    number1 = parseFloat(displayContent.textContent);
    number2 = null;
    }

    else if(sign == "*"){
    displayContent.textContent = multiplyNums(num1, num2);
    screenRefreshRequired = true;
    operator = "";
    number1 = parseFloat(displayContent.textContent);
    number2 = null;
    }

    else if(sign == "/"){
    displayContent.textContent = divideNums(num1, num2);
    screenRefreshRequired = true;
    operator = "";
    number1 = parseFloat(displayContent.textContent);
    number2 = null;
    }
}    


//Calculator functions

function addNums(num1, num2){
    return num1 + num2;
}

function subtractNums(num1, num2){
    return num1 - num2
}

function multiplyNums(num1, num2){
    return num1 * num2;
}

function divideNums(num1, num2){
    if(number2 == 0)
    return displayContent.textContent = "/ by 0: Error"

    else
    return num1 / num2
}

