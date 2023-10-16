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

let x =5;
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

let displayValue = 15025

// function display(displayValue){
// let displayDiv= document.querySelector('.displey');
// let display =document.createElement('h1');
// display.textContent= displayValue;
// displayDiv.appendChild(display);
// }

let displayDiv= document.querySelector('.displey');
let display =document.createElement('h1');
display.textContent= "545645";
displayDiv.appendChild(display);