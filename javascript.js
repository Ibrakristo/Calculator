function add(numb1,numb2){
    return numb1+numb2;
}
function subtract(numb1,numb2){
    return numb1-numb2;
}
function multiply(numb1,numb2){
    return numb1*numb2;
}
function divide(numb1,numb2){
    if(numb2 == 0) return "Verify me";
    return numb1/numb2;
}
function operate(numb1,operator,numb2){
    if(operator =="+") return add(numb1,numb2);
    if(operator=="-") return subtract(numb1,numb2);
    if(operator=="x") return multiply(numb1,numb2);
    if(operator=="/") return divide(numb1,numb2);
}

function display(e){
    if(dis.innerText.length >30) return;
    if(result != null && operator == null){
        numb1 = null;
        result = null;
    }
    let key;
    if(window == this){
         key = document.querySelector(`.digits button[data-key = "${e.keyCode}"]`);
         if(key == null) return;
    }
    else{
     key = this;
}
    const numb = parseInt(key.className);
    let text = key.innerText;
    if(numb === 9999){
        dis.innerText = "0";
        cond = false;
        point = false;
        numb1 = null;
        numb2 = null;
        operator = null;
    }
    if(numb == 110){
        if(point == false){
            dis.innerText +=text;
            cond = true;
            point = true;
        }
        
    }
    if(numb>=110 || numb<96) return;
    if(cond == false){
    dis.innerText = text;
    if(numb != 96)
    cond = true;
    }
    else if(cond == true)
    dis.innerText += text;
}

function operation(e){
    let text;
    if(this == window){
        let key = document.querySelector(`.operators button[data-key="${e.keyCode}"]`);
        if(key == null) return;
        text = key.innerText;
    }
    else{
         text = this.innerText;
    }
    

    if(text == "⏎"){
        dis.innerText = dis.innerText.slice(0,dis.innerText.length-1); return;
    }
    if(text == "="){
        if(numb1 == null) return;
        numb2 = parseFloat(dis.innerText);
        result = operate(numb1,operator,numb2);
        if(typeof(result) == "number"){
        result = Math.round(result*(10e15))/10e15;
    }
        dis.innerText = result;
        numb1 = result;
        numb2 = null;
        operator = null;
        cond = false;
        point = false;
    }
    else{
        if(numb1 == null){
            numb1 = parseFloat(dis.innerText);
        }
        cond = false;
        point = false;
        operator = text;
        dis.innerText="0";
}
}
let result;
let numb1 = null;
let numb2 = null;
let operator;
let cond = false;
let point = false;
const dis = document.querySelector(".display");
const digits = document.querySelectorAll(".digits button");
digits.forEach((button)=> button.addEventListener("mousedown",display))
const operators = document.querySelectorAll(".operators button" );
operators.forEach(operator => operator.addEventListener("mousedown",operation));
window.addEventListener("keydown",display);
window.addEventListener("keydown",operation);

