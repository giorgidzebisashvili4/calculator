// don't use new Function()  eval()
const buttonsNum = document.querySelectorAll('.numbers>button')
const buttonsOperators = document.querySelectorAll('.operators>button')
const display = document.querySelector(".display")
const equalsBtn = document.querySelector('#equals')


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
    if(oper === "+"){
        return add(firstNumber,secondNumber)
    }else if(oper ==="-"){
        return subtract(firstNumber,secondNumber)
    }else if(oper === "*"){
        return multiply(firstNumber,secondNumber)
    }else if(oper === "/"){
        return divide(firstNumber,secondNumber) 
    }else{
        return "problem with operator function,oper recognition"
    }

}
// fonction to conect variables with math operators

let displayTextSecond = document.createElement("h4")
let displayTextMain = document.createElement("h2")

let displayValueSecond = ""
let displayValueMain = 182

displayTextSecond.textContent = displayValueSecond


display.appendChild(displayTextSecond)
display.appendChild(displayTextMain)

let memoryArr = []


buttonsNum.forEach((buttonsNum)=>{
    buttonsNum.addEventListener('click',(e)=>{
        memoryArr.push(e.target.textContent)

        displayValueSecond = memoryArr.join("")
        displayTextSecond.textContent = displayValueSecond
    })
})
// typing number
buttonsOperators.forEach((buttonsOperators)=>{
    buttonsOperators.addEventListener('click',(e)=>{
        if(memoryArr.join("").split(" ").length === 3){
            equals()
            displayTextSecond.textContent = displayValueMain
            
            console.log(displayValueMain)
         
        }
        // test if you have 2 numbers and operator than next operato means calculate what was before
        
        memoryArr.push(" "+e.target.textContent+" ")
        
        displayValueSecond = memoryArr.join("")
        displayTextSecond.textContent = displayValueSecond
        console.log(displayValueSecond)
    })
})



equalsBtn.addEventListener('click',()=>{
equals()
})

function equals(){
    let memoryArrDecode = memoryArr.join("").split(" ")
    
    firstNumber = memoryArrDecode[0]
    oper = memoryArrDecode[1]
    secondNumber= memoryArrDecode[2]

    displayValueMain = operator(firstNumber,secondNumber,oper)
    displayTextMain.textContent = displayValueMain

    displayTextSecond.textContent = displayValueSecond
    console.log(displayValueSecond)

    memoryArr.splice(0,memoryArr.length)
    memoryArr.push(displayValueMain)
}

// equal sighn trigers calculation

// console.log(operator(firstNumber,secondNumber,oper))