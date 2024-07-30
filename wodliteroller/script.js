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

/* End Utility Functions */

/* Independent Variables */
// set lock status 
let isLocked = false;

// roll counter
let counter = 0;

// Get inputs
const input = qsa('.in-box');

// Get labels
const statLabels = qsa('.stat');

// Get textarea
const out = qs('#text-out');

// Get select/option Attributes
const attributeSelect = qs('#attribute');


// Get select/option Abilities
const abilitySelect = qs('#ability');


/* End Independent Variables */

// Function: Lock/Unlock Button

function lock(){

    // Function to Set label values by input values.
    function setLabels(item, index){
        statLabels[index].innerText = input[index].value;
    }

    // Set Labels
    statLabels.forEach(setLabels);

    // If form is not locked, lock the form. Else unlock the form.
    if (!isLocked){
        isLocked = true;
        lockButton.style.backgroundColor = 'rgb(145, 4, 4)';
        lockButton.innerText = "Unlock";

        // Function to hide inputs / unhide labels
        function hideInputs(item, index){
            input[index].classList.add('hidden');
            statLabels[index].classList.remove('hidden');
        }
        // Hide inputs / Unhide labels
        input.forEach(hideInputs);

    }else{
        isLocked = false;
        lockButton.style.backgroundColor = 'green';
        lockButton.innerText = "Lock";

        // Function to hide labels / unhide inputs
        function showInputs(item, index){
            input[index].classList.remove('hidden');
            statLabels[index].classList.add('hidden');
        }
        // Hide labels / Unhide inputs.
        input.forEach(showInputs);
    }
}


// Function: Roll Button
function rollDice(){
    let attribute = parseInt(qs("#" + attributeSelect.value).value);
    let ability = parseInt(qs("#" + abilitySelect.value).value);

    function dieRolls(pool1, pool2){
        let rolls = [];

        for(let i = 0; i < (pool1 + pool2); i++){
            let r = parseInt((Math.floor(Math.random() * 10) + 1));
            rolls[i] = r; 
        }
        
        rolls = rolls.sort(function(a, b){return a-b});
        return rolls;

    }
    let atName = qs('#attribute option:checked').innerHTML;
    let abName = qs('#ability option:checked').innerHTML;

    function diceParser(rolls){
        counter ++;
        let ph = `\n ROLL ${counter}: You rolled ${atName} (${attribute}) + ${abName} (${ability}): ${rolls}`;  
        
        let fails = 0;
        let successes = 0;

        for(let j = 0; j < rolls.length; j++){
            let diff = 6;

            if (rolls[j] == 1){
                fails++;
            }else if(rolls[j] > 1 && rolls[j] < diff){
                // do nothing
            }else if(rolls[j] >= diff){
                successes++;
            }else{alert(`${rolls[i]} is out of the expected range!`)}
        }


        if (successes == 0 && fails >= 1){
            let a = out.value;
            out.value = `${ph}: ${successes} Successes. ${fails} Botches. Result Total: ${successes - fails} Successes; Critical Fail. \n ${a}`;
        }else if (successes == 0 && fails == 0 ){
            let a = out.value;
            out.value = `${ph}: ${successes} Successes. ${fails} Botches. Result Total: ${successes - fails} Successes; You Fail. \n ${a}`;
        }else if (successes == fails){
            let a = out.value;
            out.value = `${ph}: ${successes} Successes. ${fails} Botches. Result Total: ${successes - fails} Successes; You Fail. \n ${a}`;
        }else if (successes > fails){
            let a = out.value;
            out.value = `${ph}: ${successes} Successes. ${fails} Botches. Result Total: ${successes - fails} Successes; You Succeed!. \n ${a} `;
        }

    }

    diceParser(dieRolls(attribute, ability));

}

// Function: diceParser(diceroll)
//                 display successes/failures to .text-out 
//                 assume no specialties (no exploding 10s)
//                 assume difficulty 6

/* Event Handlers */

// Lock Button
lockButton = qs('#btn-lock');
ael(lockButton, 'click', lock, false);

// Roll Button
rollButton = qs('#btn-roll');
ael(rollButton,'click', rollDice, false);