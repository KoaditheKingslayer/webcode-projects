/* Utility Functions */

// Console Log
function clog(str){
    console.log(str);
}

// querySelector
function qs(e){
    return document.querySelector(e);
}

// querySelectorAll
function qsa(e){
    return document.querySelectorAll(e);
}

// Add Event Listener
function ael(origin, event, funcCalled, bool){
    bool = bool || undefined;
    origin.addEventListener(event, funcCalled, bool);
}

function byID(e){
    return document.getElementById(e);
}

function byClass(e){
    return document.getElementsByClassName(e);
}

/* End Utility Functions */

var c = byID("myCanvas");
var ctx = c.getContext("2d");  
var bgImg = new Image;
var arrowImg = new Image;
var arrowX = 1;
var arrowY = 694;
var up = true;
var aState = true;
var maxHeight = 550;
var groundLevel = 680;
var power = 1;

bgImg.onload = function(){
    ctx.drawImage(bgImg, 0, 0);
} 

// Set Initial Sources
bgImg.src = 'sun.png'; 
arrowImg.src = 'arrow.png';


function renderScene(){
    // Flashing Arrow, Arrow Rendering
    ctx.clearRect(0,0,1024,768);
    ctx.drawImage(bgImg,0,0);
    switch(aState) {
        case true:
            arrowImg.src = 'arrow.png';
            ctx.drawImage(arrowImg, arrowX, arrowY, 50, 100);
            aState = false; 
            break;
        case false:
            arrowImg.src = 'arrow2.png';
            ctx.drawImage(arrowImg, arrowX, arrowY, 50, 100);
            aState = true;
            break;

    }
}

function getArrowDirection(){
    
    if(arrowY <= maxHeight){
        up = false;
    }

    if(arrowY >= groundLevel){
     // do nothing
    }else{
        switch(up){
           case true:
             arrowY-= 5;
             arrowX+= power *5;
             break;
          case false:
              arrowY+= 5;
              arrowX += power*5;
              break;

        }

        if(arrowX > c.width){
            arrowX = 1;
        }
    }
}

function shoot(){
    maxHeight = parseFloat(byID("height").value);
    power = 0;
    power = parseFloat(byID("power").value);
    if(power <= 0){
        power = 1;
    }
    arrowX = 1;
    arrowY = groundLevel-1;
    up = true;


    let timer = setInterval(function(){ 
        getArrowDirection();
    
        if(arrowY >= groundLevel -1){
            //Final Render
            arrowImg.src = 'arrow.png';
            // Render Background
            ctx.drawImage(bgImg, 0, 0);
            ctx.drawImage(arrowImg, arrowX, arrowY, 50, 100);
            aState = false;
            clearInterval(timer)
        }else{
            renderScene();
        }
    }, 1000 / 60);
}

