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

