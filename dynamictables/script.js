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
        return document.createElement(element);
    }

/* End Utility Functions */

/* Make Buttons Pretty! */
    // Get All Buttons By Class (Globally Available)
    const buttons = qsa('.button');

    for(let i = 0; i < buttons.length; i++){
        const button = buttons[i];
        
        button.addEventListener("mousedown", function (){
        button.style.background = "#006600";
        });
        
        
        button.addEventListener("mouseup", function (){
        button.style.background = "#22aa22";
        });
    }
/* End Button Beautification */

/* Code Challenge: Create Dynamic Tables - Function */
    function buildTable() {
        let element; 
        let rows = qs('#rows');
        let cols = qs('#cols');
        let container = qsa('#inject:last-child')

        rows = parseInt(rows.value);
        cols = parseInt(cols.value);
        
        // Validate Table Entry
        if (rows > 0 && cols > 0){
            // Create the Table Element
            element = ce('br');
            container[0].appendChild(element);

            element = ce('table'); 
            container[0].appendChild(element);

            // Determine how many tables and last table in index.
            let table = qsa('#inject table:last-child')
            
            // Create Table Rows
            for(let i = 0; i < rows; i++){
                element = ce('tr')
                table[0].appendChild(element);

                // could also possibly use tr:last-of-type
                let row = qsa('#inject table:last-child tr:last-child')

                // Create Table Cols
                for(let a = 0; a< cols; a++){
                    element = ce('td');
                    row[0].appendChild(element);
                }

            }
        }else{
            alert('Missing Table Data')
        }
        clearInput();
    }
/* End Code Challenge: Create Dynamic Tables - Function */

/* Event Listeners */

    /* Code Challenge Event Listener: Build Table button */
        buttons[0].addEventListener('click', buildTable);
    /* End Code Challenge Event Listener: Build Table button */

    /* Code Challenge Event Listener: Clear button */
        buttons[1].addEventListener('click', function(){
            qs('#inject').innerHTML = "";
            clearInput();
        })
    /* End Code Challenge Event Listener: Build Table button */

    /* Code Challenge Event Listener: Enter Key on Number Inputs */
        qs("#rows").addEventListener("keyup", isReturn);
        qs("#cols").addEventListener("keyup", isReturn);
        function isReturn(event) {
            if (event.key === "Enter") {
                // Do work
                buildTable();
            }
        };
    /* End Code Challenge Event Listener: Enter Key on Number Inputs */

    /* Code Challenge Event Listener: Clear Inputs Function */
        function clearInput(){
            document.querySelector('#rows').value = '';
            document.querySelector('#rows').focus();
            document.querySelector('#cols').value = '';
        }
    /* End Code Challenge Event Listener: Clear Inputs Function */

/* End Event Listeners */


