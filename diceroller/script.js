function qs (e) {
  return document.querySelector(e)
}

function clog (e) {
  console.log(e)
}

function ael (origin, event, funcCalled, bool) {
  bool = bool || undefined
  origin.addEventListener(event, funcCalled, bool)
}

let counter = 0
function rollDice () {
  /* Variable Declaration */
  const difficulty = qs('#difficulty').value;
  const dicePool = qs('#dicePool').value;
  const insertText = qs('#insertText');
  const specCheck = qs('#specCheck').checked;
  counter++;
  const dieArray = [];
  let tensRolled = 0;
  let explodingTens = 0;
  let subtractingOnes = 0;
  let onesRolled = 0;
  let successesRolled = 0;
  let failuresRolled = 0;
  let totalRolled = 0;
  let successes = 0;
  let botch = false;
  var specMsg;
  /* End Variable Declaration */

  /* Verify Inputs */
  if (difficulty > 10 || difficulty < 2) {
    alert('Difficulty out of range (2 to 10).')
    return
  }
  if (dicePool > 1000 || dicePool < 1) {
    alert('Dice Pool out of Range (1 to 1000)')
    return
  }
  /* End Verify Inputs */

  /* Roll Dice */
  for (let i = 0; i < dicePool; i++) {
    dieArray.push(parseInt(Math.floor(Math.random() * 10) + 1))
    clog(dieArray[i])

    if (dieArray[i] >= difficulty) {
      successesRolled++;
      totalRolled++;
    }

    if (dieArray[i] === 10) {
      tensRolled++;
    }

    if (dieArray[i] < difficulty) {
      failuresRolled++;
      totalRolled++;
    }

    if (dieArray[i] === 1) {
      onesRolled++;
      subtractingOnes++;
    }
  }

  /* End Roll Dice */

  // Sort array from Lowest to Highest
  dieArray.sort((a, b) => a - b)
  clog(dieArray)

  if (specCheck) {
    specMsg = 'was'
  } else { specMsg = 'was not' }

  /* Parse Results with w20 Rules */
  if (specCheck){
    successes = successesRolled + tensRolled - onesRolled;
  }else{
    successes = successesRolled - onesRolled;
  }

  if (successesRolled <= 0 && onesRolled >= 1){
    botch = true;
    insertText.value = `\n ROLL ${counter}: ${dieArray.length} dice rolled ${dieArray} at Difficulty ${difficulty}. Parsed result is: ${successes} Successes. ${tensRolled} of the dice were 10's, and ${onesRolled} were 1's. This ${specMsg} a Specialty roll, and has resulted in a BOTCH! \n` + insertText.value;
  }else if(successes < 1){
    botch = false;
    insertText.value = `\n ROLL ${counter}: ${dieArray.length} dice rolled ${dieArray} at Difficulty ${difficulty}. Parsed result is: ${successes} Successes. ${tensRolled} of the dice were 10's, and ${onesRolled} were 1's. This ${specMsg} a Specialty roll, and has resulted in a FAILURE. \n` + insertText.value;
  }else{
    botch = false;
    insertText.value = `\n ROLL ${counter}: ${dieArray.length} dice rolled ${dieArray} at Difficulty ${difficulty}. Parsed result is: ${successes} Successes. ${tensRolled} of the dice were 10's, and ${onesRolled} were 1's. This ${specMsg} a Specialty roll, and has resulted in a SUCCESS. \n` + insertText.value;
  }


  /* End Parse and Output */
}

const btnRoll = qs('#btnRoll');
ael(btnRoll, 'click', rollDice, false);
