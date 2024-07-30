
const buttons = document.getElementsByClassName('button');

for(let i = 0; i < buttons.length; i++){
    const button = buttons[i];
    
    button.addEventListener("mousedown", function (){
      button.style.background = "#006600";
      });
      
      
    button.addEventListener("mouseup", function (){
      button.style.background = "#22aa22";
      });
} 

// Console Log
function clog(str){
    console.log(str);
}

// querySelector Value
function qsv(e){
    return document.querySelector(e).value;
}

// querySelector
function qs(e){
    return document.querySelector(e);
}

// querySelectorAll
function qsa(e){
    return document.querySelectorAll(e);
}

// clear and set focus
function clearInput(){
    document.querySelector('#elementIn').value = '';
    document.querySelector('#elementIn').focus();
    document.querySelector('#elementValue').value = '';
}

// Inject HTML Elements
function inject(){
    let element;
    let elementList = qsa('#main input');
    let container = qsa('#inject');
    
    if (elementList[0].getAttribute('id') === 'elementIn'){
        element = document.createElement(elementList[0].value.toLowerCase().trim());
    }

    if (elementList[1].getAttribute('id')=== 'elementValue'){
        if(elementList[0].value === 'input'){
            element.value = elementList[1].value;
        }else{
            element.innerText = elementList[1].value;
        }
    }

    container[0].appendChild(element);
    clearInput();
}

qs('.button').addEventListener('click', inject);

qs("#elementValue").addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        // Do work
        inject();
    }
});


// Code Challenge Below

/*
function cutOut(str, index){
    
    let str1 = str.substring(0, index);
    let str2 = str.substring(index + 1, str.length);

    return (str1 + str2);
}

function lowerUpper(str){
    if(str.length>3){
        let lower = str.substring(0, 3).toLowerCase();
        let upper = str.substring(3, str.length).toUpperCase();

        return (lower + upper);
    }else{
        return str.toLowerCase();
    }

}
*/

/*
var arr = ['apple', 'banana', 'orange', 'pineapple'];

// Remove a value (val) from an array (arr).
function removeVal(arr, val) {
    // Search for the value (val) and get the index.
    let index = arr.indexOf(val);
    
    // If it exists in the array (index > -1), splice it out.. 
    if(index > -1){
        arr.splice(index, 1);
    }

    return arr;
}

console.log(removeVal(arr, 'orange'));
*/