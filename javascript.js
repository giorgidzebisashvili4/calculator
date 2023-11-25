// don't use new Function()  eval()



function add(a,b){
    return a+b
}
function subtract(a,b){
    return a-b
}
function multiply(a,b){
    return a*b
}
function divide(a,b){
    return a/b
}


let firstNumber = 1;
let operator = add ;
let secondNumber = 5;

console.log(operator(firstNumber,secondNumber))