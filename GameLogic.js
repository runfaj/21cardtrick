function runGame() {
    //helper function - this is attached to all three select buttons, but determines which was clicked
    function selectClick() {
        //since this function is attached to an element, "this" becomes the element clicked on
        var el = this;
        //select the appropriate column clicked based on the button clicked
        var num = 1;
        switch(el) {
            case els.select1: num = 1; break;
            case els.select2: num = 2; break;
            case els.select3: num = 3; break;
        }
        //run logic to select column and re-shuffle deck
        me.indicateColumn(num);
        //first 2 rounds are just selecting columns and re-dealing
        if(currRound < 3) {
            currRound++;
            els.instructions.innerHTML = "<b>Round "+currRound+"</b>: Please Pick the column that your card is in.";
            dealer.deal();
            displayCards();
        } else {
            //third round reveals the card (always the 11th in the deck), then displays to user
            var card = dealer.revealCard();
            alert("Was your card the \n\n" + card.toString() + "?\n\nMwahahahahaha!!");
            els.column1.style.display = "none";
            els.column2.style.display = "none";
            els.column3.style.display = "none";
            els.instructions.innerHTML = "Please refresh the page to play again.";
        }
    }
    
    //helper function - displays the current cards in the columns
    function displayCards() {
        var cols = board.showColumns();
        els.column1.innerHTML = cols[0].listCards();
        els.column2.innerHTML = cols[1].listCards();
        els.column3.innerHTML = cols[2].listCards();
    }
    
    //capture page elements to interact with
    var els = {
        choice_text: document.getElementById("choice"),
        choice_submit: document.getElementById("submitChoice"),
        instructions: document.getElementById("instructions"),
        
        select1: document.getElementById("select1"),
        select2: document.getElementById("select2"),
        select3: document.getElementById("select3"),
        
        column1: document.getElementById("column1"),
        column2: document.getElementById("column2"),
        column3: document.getElementById("column3")
    };
    
    //the "go" button click
    els.choice_submit.onclick = function() {
        /*var val = els.choice_text.value.match(/[1-3],[1-7]/);
        if(val == null) {
            alert("Please enter your card choice as Column,Row. Column must be 1, 2, or 3 and row must be between 1-7.");
        } else {
            val = val[0].split(',');*/
            me.pickCard();
            
            els.instructions.innerHTML = "<b>Round "+currRound+"</b>: Please Pick the column that your card is in.";
            els.select1.style.display = "block";
            els.select2.style.display = "block";
            els.select3.style.display = "block";
        //}
    };
    
    //attach the select click helper functions to the buttons
    els.select1.onclick = selectClick;
    els.select2.onclick = selectClick;
    els.select3.onclick = selectClick;
    
    //init players and board
    var me = new Player();
    var dealer = new Dealer();
    var board = new Board();
    var currRound = 1; //a counter to keep track of current round

    //required class associations
    dealer.setBoard(board);
    me.setDealer(dealer);

    //initialize our first deal
    dealer.deal();
    displayCards();
}