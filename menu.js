let a = 0;
let b = 0;
let c = 0;
let d;

function funcGotocalc(elemnt){
    if(elemnt.id == "btnHome" && this.location.pathname != "/index.html"){
        location.pathname = "/index.html";
    }
    else if(elemnt.id == "btnLogin" && this.location.pathname != "/login.html"){
        location.pathname = "/login.html";
    }
    else if(elemnt.id == "btnOrders" && this.location.pathname != "/orders.html"){
        location.pathname = "/orders.html";
    }
    else if(elemnt.id == "btnCalc" && this.location.pathname != "/calculator.html"){
        location.pathname = "/calculator.html";
    }
}

function funcCount(elemnt){
    if(txtOutcome.value=="0" || document.getElementById("btnOp+").disabled==false){
        txtOutcome.value=elemnt.innerHTML;
    }
    else{
        txtOutcome.value+=elemnt.innerHTML;
    }
    if(document.getElementById("btnOp+").disabled==false && c==0){
        a=elemnt.innerHTML;
    }
    else if(document.getElementById("btnOp+").disabled==false){
        a+=elemnt.innerHTML;
    }
    else{
        b+=elemnt.innerHTML;
    }
}

function funcOper(elemnt){
    txtOutcome.value += elemnt.innerHTML;
    d = elemnt.innerHTML;
    document.getElementById("btnOp+").disabled=true;
    document.getElementById("btnOp-").disabled=true;
    document.getElementById("btnOp*").disabled=true;
    document.getElementById("btnOp/").disabled=true;
}

function funcDelete(){
    txtOutcome.value = "0";
    a = 0;
    b = 0;
    c=0;
    document.getElementById("btnOp+").disabled=false;
    document.getElementById("btnOp-").disabled=false;
    document.getElementById("btnOp*").disabled=false;
    document.getElementById("btnOp/").disabled=false;
}

function funcEqual(){
    if(d == "+"){
        c = parseFloat(a) + parseFloat(b);
        txtOutcome.value = c;
    }
    if(d == "-"){
        c = parseFloat(a) - parseFloat(b);
        txtOutcome.value = c;
    }
    if(d == "*"){
        c = parseFloat(a) * parseFloat(b);
        txtOutcome.value = c;
    }
    if(d == "/"){
        c = parseFloat(a) / parseFloat(b) + parseFloat(a) % parseFloat(b);
        txtOutcome.value = c;
    }
    a = c;
    b = 0;
    c=0;
    document.getElementById("btnOp+").disabled=false;
    document.getElementById("btnOp-").disabled=false;
    document.getElementById("btnOp*").disabled=false;
    document.getElementById("btnOp/").disabled=false;
}