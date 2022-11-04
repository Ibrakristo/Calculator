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
    if(numb2 == 0) return "verifyme";
    return numb1/numb2;
}
function operate(numb1,operator,numb2){
    if(operator =="+") return add(numb1,numb2);
    if(operator=="-") return subtract(numb1,numb2);
    if(operator=="*") return multiplnumb2(numb1,numb2);
    if(operator=="/") return divide(numb1,numb2);
}

function display(e){
    const numb = parseInt(this.className);
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
            dis.innerText +=this.innerText;
            cond = true;
            point = true;
        }
        
    }
    if(numb>=110 || numb<96) return;
    if(cond == false){
    dis.innerText = this.innerText;
    if(numb != 96)
    cond = true;
    }
    else if(cond == true)
    dis.innerText += this.innerText;
}

function operation(e){
    console.log(this.innerText);
    if(this.innerText == "="){
        if(numb1 == null) return;
        numb2 = parseFloat(dis.innerText);
        console.log("numb2 : " + numb2);
        console.log("operator : " + operator);
        switch (operator){
            case "+" : result = add(numb1,numb2);console.log(1); break;
            case "-" : result = subtract(numb1,numb2);console.log(2); break;
            case "x" : result = multiply(numb1,numb2);console.log(3); break;
            case "/" : result = divide(numb1,numb2);console.log(4); break;
        }
        console.log(result);
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
    console.log(numb1);
    }
    cond = false;
    point = false;
    operator = this.innerText;
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
