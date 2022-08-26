let text = ""
var arr = []
var num = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
var output = document.getElementById("output")

function zero(){
    text = text + "0";
    output.innerText = text;
}

function one(){
    text = text + "1";
    output.innerText = text;
}

function two(){
    text = text + "2";
    output.innerText = text;
}

function three(){
    text = text + "3";
    output.innerText = text;
}

function four(){
    text = text + "4";
    output.innerText = text;
}

function five(){
    text = text + "5";
    output.innerText = text;
}

function six(){
    text = text + "6";
    output.innerText = text;
}

function seven(){
    text = text + "7";
    output.innerText = text;
}

function eight(){
    text = text + "8";
    output.innerText = text;
}

function nine(){
    text = text + "9";
    output.innerText = text;
}

function plus(){
    text = text + "+";
    output.innerText = text;
}

function minus(){
    text = text + "-";
    output.innerText = text;
}

function divide(){
    text = text + "/";
    output.innerText = text;
}

function multiply(){
    text = text + "×";
    output.innerText = text;
}

function del(){
    text = text.slice(0, -1);
    output.innerText = text;
}

function equ(){
    text = eval(text.replace("×", "*"));
    output.innerText = text;
}