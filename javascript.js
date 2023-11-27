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
let oper = "add" ;
let secondNumber = 5;


function operator(firstNumber,secondNumber,oper){
    if(oper === "add"){
        return add(firstNumber,secondNumber)
    }else if(oper ==="subtract"){
        return subtract(firstNumber,secondNumber)
    }else if(oper === "multiply"){
        return multiply(firstNumber,secondNumber)
    }else if(oper === "divide"){
        return divide(firstNumber,secondNumber) 
    }else{
        return "problem with operator function,oper recognition"
    }

}


console.log(operator(firstNumber,secondNumber,oper))