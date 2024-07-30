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

    function roll(max){
      return parseInt((Math.floor(Math.random() * max) + 1));
    }
/* End Utility Functions */

/* Constants/Variables */

const btnGenerate = qs('#Generate');
const btnRank = qs('#btnRank');
const btnBreed = qs('#btnBreed');
const btnAuspice = qs('#btnAuspice');
const btnTribe = qs('#btnTribe');
const btnMerits = qs('#btnMerits');
const btnFlaws = qs('#btnFlaws');
const btnClear = qs('#Clear');
const breed = qs('#inputBreed');
const auspice = qs('#inputAuspice');
const tribe = qs('#inputTribe');
const rank = qs('#inputRank');
const merit = qs('#inputMerits');
const flaw = qs('#inputFlaws');
const tribes = ["Black Furies","Bone Gnawers", "Children of Gaia",
"Fianna", "Get of Fenris", "Glass Walkers", "Red Talons",
"Shadow Lords", "Silent Striders", "Silver Fangs", "Stargazers", "Uktena",
"Wendigo"];
const auspices = ["Ragabash", "Theurge", "Philodox", "Galliard", "Ahroun"];
const breeds = ["Homid", "Metis", "Lupus"];
const ranks = ["Cliath", "Fostern", "Adren", "Athro", "Elder"];

/* End Constants/Variables */

/* Event Listeners */

ael(btnGenerate,'click', runCharGen, false);
ael(btnRank,'click', GenRank, false);
ael(btnBreed,'click', GenBreed, false);
ael(btnAuspice,'click', GenAuspice, false);
ael(btnTribe,'click', GenTribe, false);
ael(btnMerits,'click', GenMerits, false);
ael(btnFlaws,'click', GenFlaws, false);
ael(btnClear,'click', ClearAll, false);

/* End Event Listeners */
function ClearAll(){
  breed.innerHTML = "";
  auspice.innerHTML = "";
  tribe.innerHTML = "";
  rank.innerHTML = "";
  merit.innerHTML = "";
  flaw.innerHTML = "";
}

function GenBreed(){
  breed.innerHTML = breeds[(roll(breeds.length)-1)];
}

function GenAuspice(){
  auspice.innerHTML = auspices[(roll(auspices.length)-1)];
}

function GenTribe(){
  tribe.innerHTML = tribes[(roll(tribes.length)-1)];
}

function GenRank(){
  rank.innerHTML = ranks[(roll(ranks.length)-1)];
}

function GenMerits(){
merit.innerHTML = "";
var meritPoints = roll(7);
var currentMerit = roll(MERITS.length -1);
while(meritPoints > 0){
    if (MERITS[currentMerit][1] <= meritPoints){
      clog(meritPoints + " Merit Points");
      clog(MERITS[currentMerit][0]);
      clog(MERITS[currentMerit][1]);
      merit.innerHTML += MERITS[currentMerit][0] + ", " + MERITS[currentMerit][1] + "<br>";
      meritPoints -= MERITS[currentMerit][1];
      currentMerit = roll(MERITS.length -1);
    }else{
      currentMerit = roll(MERITS.length -1);
    }
}

}

function GenFlaws(){
flaw.innerHTML = "";
var flawPoints = roll(7);
var currentFlaw = roll(FLAWS.length -1);
  while(flawPoints > 0){
    if (FLAWS[currentFlaw][1] <= flawPoints){
      clog(flawPoints + " Flaw Points");
      clog(FLAWS[currentFlaw][0]);
      clog(FLAWS[currentFlaw][1]);
      flaw.innerHTML += FLAWS[currentFlaw][0] + ", " + FLAWS[currentFlaw][1] + "<br>";
      flawPoints -= FLAWS[currentFlaw][1];
      currentFlaw = roll(FLAWS.length -1);
    }else{
      currentFlaw = roll(FLAWS.length -1);
    }
  }

}

function runCharGen(){
  GenBreed();
  GenAuspice();
  GenTribe();
  GenRank();
  GenMerits();
  GenFlaws();
}
