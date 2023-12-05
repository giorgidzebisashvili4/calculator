// don't use new Function()  eval()
const buttonsNum = document.querySelectorAll('.numbers>button')
const buttonsOperators = document.querySelectorAll('.operators>button')
const display = document.querySelector(".display")
const equalsBtn = document.querySelector('#equals')
const clearBtn = document.querySelector("#clear")
const backspaceBtn = document.querySelector("#backspace")
const displayUpdateBtns = document.querySelectorAll('.numbers > button, .operators > button, #backspace')





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
    if(b === "0"){
        alert("can'd divided by 0")
        clear()
    }else{
        return a/b}
    
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
      
        if(memoryArr[0]===displayValueMain & memoryArr[1]=== undefined ){
            memoryArr.push(" "+oper+" ")
        }
        //when = is made and push new numbers use last operator
        if((!memoryArr.includes(".") 
        || memoryArr.includes(" + "||" - "||" / "||" * ") ) 
        || (e.target.textContent !== ".")){
            memoryArr.push(e.target.textContent)
         }
        // use "." only ones in number 
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
    })
})

backspaceBtn.addEventListener('click',()=>{
    if(memoryArr.length===1){
    let total = memoryArr[0].toString().split("").slice(0,-1).join("")
console.log(total)
    memoryArr.splice(0,1,total)    
    }else{
        memoryArr.splice(-1,1)
    }
   

})

displayUpdateBtns.forEach((displayUpdateBtns)=>{
    displayUpdateBtns.addEventListener('click',()=>{
        displayValueSecond = memoryArr.join("")
        displayTextSecond.textContent = displayValueSecond
    })
})
//update second screen when clicked

equalsBtn.addEventListener('click',()=>{
equals()
})

function equals(){
    if(memoryArr.join("").split(" ").length > 1){
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
    console.log(memoryArr)


    }
    // if in array is only number(no operator) do nothing
}

clearBtn.addEventListener('click',()=>{
    clear()
})


function clear(){
// delate data
memoryArr.splice(0,memoryArr.length)


displayTextMain.textContent = ""
displayTextSecond.textContent = ""
}

