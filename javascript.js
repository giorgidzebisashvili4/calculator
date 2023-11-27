// don't use new Function()  eval()
const buttonsNum = document.querySelectorAll('.numbers>button')
const buttonsOperators = document.querySelectorAll('.operators>button')
const display = document.querySelector(".display")
const equals = document.querySelector('#equals')


function add(a,b){
    return a*1+b*1
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
// functions for all of the basic math operators 


let firstNumber = 1;
let oper = "add" ;
let secondNumber = 5;
// variables for calculations and display


function operator(){
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
// fonction to conect variables with math operators

let displayTextSecond = document.createElement("h4")
let displayTextMain = document.createElement("h2")

let displayValueSecond = "---"
let displayValueMain = 182

displayTextSecond.textContent = displayValueSecond


display.appendChild(displayTextSecond)
display.appendChild(displayTextMain)

buttonsNum.forEach((buttonsNum)=>{
    buttonsNum.addEventListener('click',(e)=>{
        firstNumber = e.target.textContent
        console.log(firstNumber)
        
    })
})
// typing number
buttonsOperators.forEach((buttonsOperators)=>{
    buttonsOperators.addEventListener('click',(e)=>{
        oper = e.target.id
        console.log(oper)
        
    })
})


equals.addEventListener('click',()=>{
    displayValueMain = operator(firstNumber,secondNumber,oper)
    displayTextMain.textContent = displayValueMain
    console.log("----")
    console.log("first:"+firstNumber)
    console.log("oper:"+oper)
    console.log("second:"+ secondNumber)
})
// equal sighn trigers calculation

// console.log(operator(firstNumber,secondNumber,oper))