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

    // Create Element
    function ce(element){
        document.createElement(element);
    }

    // Add Event Listener
    function ael(origin, event, funcCalled, bool){
        bool = bool || undefined;
        origin.addEventListener(event, funcCalled, bool);
    }

/* End Utility Functions */

const testWrapper = qs('.text-wrapper');
const textArea = qs('#textArea');
const originText = qs('.text').innerHTML;
const resetButton = qs('#reset');
const theTimer = qs('.timer');

let timer = [0,0,0,0];
let interval;

/* Add Leading Zero to Numbers 9 */

function leadingZero(time) {
    if (time <= 9){
        time = "0" + time;
    }

    return time;
}

/* Create a Clock */

function runTimer(){
    let currentTime = leadingZero(timer[0]) + ":" + leadingZero(timer[1]) + ":" + leadingZero(timer[2]);
    theTimer.innerHTML = currentTime;
    timer[3]++;

    timer[0] = Math.floor((timer[3]/100)/60);
    timer[1] = Math.floor((timer[3]/100) - (timer[0] * 6000));
    timer[2] = Math.floor(timer[3] - (timer[1] * 100) - (timer[0] * 6000));

}

/* Reset Everything */

function reset(){
    clearInterval(interval);
    interval = null; 
    timer = [0,0,0,0];

    textArea.value = "";
    theTimer.innerHTML = "00:00:00";

    testWrapper.style.borderColor = 'green';
    textArea.focus();
}

/* Match the Text With Provided Text on the Page */

function spellCheck(){
    let textEntered = textArea.value;
    let originTextMatch = originText.substring(0, textEntered.length);
    
    if(textEntered == originText){
        testWrapper.style.borderColor = 'orange';
        clearInterval(interval);
    }else{
        if(textEntered == originTextMatch){
            testWrapper.style.borderColor = 'green';
        }else{
            testWrapper.style.borderColor = 'red';
        }
    }
}

/* Event Listeners For Keyboard Input And Reset Button Event*/
ael(textArea,'keypress', start, false);
ael(textArea,'keyup', spellCheck, false);
ael(resetButton, 'click', reset, false);

/* Start the Timer */

function start(){
    let textEnteredLength = textArea.value.length;
    if(textEnteredLength === 0){
        interval = setInterval(runTimer, 10)
    }
}


