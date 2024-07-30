console.log("Hello.");

document.getElementById("num1").focus();
document.getElementById("button").addEventListener("click", DoMath);
document.getElementById("button").addEventListener("mousedown", ButtonDown);
document.getElementById("button").addEventListener("mouseup", ButtonUp);

const node = document.getElementById("op");
node.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        // Do work
        DoMath();
    }
});

function ButtonDown() {
    let element = document.getElementById("button");
    element.style.background = "#060";
}

function ButtonUp() {
    let element = document.getElementById("button");
    element.style.background = "#2a2";
}

function DoMath() {
   var num1 = parseInt(document.getElementById("num1").value);
   var num2 = parseInt(document.getElementById("num2").value);
   var op = document.getElementById("op").value;
   var result = 0;
   var text = "";

    switch(op) {
        case "+":
            //add
            result = num1 + num2;
            text = String(num1) + " + " + String(num2) + " = ";
            break;
        case "-":
            //subtract
            result = num1 - num2;
            text = String(num1) + " - " + String(num2) + " = ";
            break;
        case "*":
            //multiply
            result = num1 * num2;
            text = String(num1) + " * " + String(num2) + " = ";
            break;
        case "/":
            //divide
            result = num1 / num2;
            text = String(num1) + " / " + String(num2) + " = ";
            break;
        default: 
            result = "Please choose one of the following Operators: + - * /";
        break;
    }

    document.getElementById("output").innerHTML = text + result;

    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("op").value = "";
    document.getElementById("num1").focus();
}