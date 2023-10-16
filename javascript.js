function add(x,y){
    return x+y
}

function subtract(x,y){
    return x-y
}
function multiply(x,y){
    return x*y
}
function divide(x,y){
    return x/y
}

let x = 0;

let y =2;
let operator = "/";

function operate(operator,x,y){
    if(operator == "+" ){
        console.log(add(x,y))
    }else if(operator == "-" ){
        console.log(subtract(x,y))
    }else if(operator == "*" ){
        console.log(multiply(x,y))
    }else if(operator == "/"){
        console.log(divide(x,y))
    }else{
        console.log("comon man")
    }}

operate(operator,x,y)

let displayValue = 0

function display(){
let displayDiv= document.querySelector('.display');
let display =document.createElement('h1');
display.textContent= `${x}${operator}${y}`;
displayDiv.appendChild(display);
}
display()