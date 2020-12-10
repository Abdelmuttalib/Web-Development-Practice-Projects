// get values of buttons
var one = document.getElementById('one').value;
var two = document.getElementById('two').value;
var three = document.getElementById('three').value;
var four = document.getElementById('four').value;
var five = document.getElementById('five').value;
var six = document.getElementById('six').value;
var seven = document.getElementById('seven').value;
var eight = document.getElementById('eight').value;
var nine = document.getElementById('nine').value;
// zero
var zero = document.getElementById('zero').value;
// Point
var point = document.getElementById('point').value;
// Operations
var plus = document.getElementById('plus').value;
var minus = document.getElementById('minus').value;
var multiply = document.getElementById('multiply').value;
var divide = document.getElementById('divide').value;

var clear = document.getElementById('clear').value;
// the text area
var textArea = document.getElementById('textField');

var converted;

function doAction(main){
    if(main == '+' || main == "-"
    || main == '*' || main == "/"
    || main == "."){
        textArea.innerHTML += main;
    } else{
    converted = parseInt(main);
    // console.log("doACtion: "+converted);
    textArea.innerHTML += converted;
    }
}

function doCalculate(){
    if(textArea.value == ""){
        alert("Input Values To Calculate");
        return;
    }
    var mine = textArea.value;
    var getRe = eval(mine);
    textArea.innerText = getRe;
    // console.log("Result: "+ getRe);
}

function doClear(){
    textArea.innerText = "";
}
