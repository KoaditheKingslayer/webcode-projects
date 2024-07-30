 $(document).ready(function(){

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
    let container = $('.container');
    let container2 = $('.container2');
    let add = $('#add');
 
    /* End Independent Variables */

    // Set Viewer Height Elements

    // On Window Resize
    $(window).resize(function(){
        $('.center .main').css('width', '10px');
        var newStyleElement = $("head").children(':last');
        newStyleElement.html(`.viewport{width:${(window.innerWidth - 100)}px; height: ${(window.innerHeight - 100)}px;}`);
        });


    $("head").append('<style type="text/css"></style>');

    let newStyleElement = $("head").children(':last');
 
    newStyleElement.html(`.viewport{width:${(window.innerWidth - 100)}px; height: ${(window.innerHeight - 100)}px;}`);
 

    // Inject HTML
    var choices = [];

    function radioGroup(){
        let myArray = [1, 2, 3, 4, 5];
        shuffle(myArray);
        clog(myArray);


        for (j = 0; j < 5; j++){
            choices[j] = $('#selectRemove').children().eq(myArray[j]);
            clog(choices[j].val());
        }
        
        container.html(`
        <div class="output">
            <div class="add left">
                <div class="radio">
                    <label id="oneLabel" for="pick">1: ${choices[0].val()} </label><input id="radio1" type="radio" name="pick" value="${choices[0].val()}">
                    <br />
                    <label id="twoLabel" for="pick">2: ${choices[1].val()} </label><input id="radio2" type="radio" name="pick" value="${choices[1].val()}">
                    <br />
                    <label id="threeLabel" for="pick">3: ${choices[2].val()} </label><input id="radio3" type="radio" name="pick" value="${choices[2].val()}">
                </div>
            </div>
        </div>`) 

        // Create event handler for checkbox
        $('input[name="pick"]').change(finalResult);
        
    }

    function addToSelect(){
        if ($('#selectRemove option').length < 6){
            if (add.val()){
            let optionText = add.val();
            let optionValue = add.val();
            $('#selectRemove').append(new Option(optionText, optionValue))
            }else{alert('No Value To Add!')}
        }else{alert('You can only add 5 options!')}

        add.val('');
        add.focus();
    }

    function removeFromSelect(){
        let optionSelected = $('select#selectRemove option').filter(':selected');
        if (optionSelected.val() != "default"){
        optionSelected.remove();
        $('#selectRemove').val('default')
        }
    }

    function shuffle(array){

        var currentIndex = array.length;
        var temporaryValue, randomIndex;
    
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
    
            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
    
        return array;
    
    };

    function finalResult(){
        var x = $('input[name="pick"]:checked').val();
        clog(x);

        container2.html(`
        <div class="result">
            <div class="add left">
                You have chosen ${x}!
            </div>
        </div>`) 

    }

    // Button Event Handlers
    $('#go').click(radioGroup);
    $('#addTerm').click(addToSelect);
    $('#removeTerm').click(removeFromSelect);

    $('#add').on("keypress", function(e) {
        if (e.keyCode == 13) {
            addToSelect();
        }
});


});
