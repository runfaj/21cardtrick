var Dealer = function() {
    var dealNumber = 0;
    var currBoard;
    var currDeck; //this is required to know our current deck. Otherwise, we'd have to deal a new deck each time
    
    var publicVar = this;
    
    //function to deal a set of cards into the 3 columns
    publicVar.deal = function() {
        if(!currBoard) {
            alert("Cannot deal, dealer has no awareness of the current board. Please give dealer access via Dealer.setBoard(board).");
            return;
        }
        
        //if this is a first deal, init a new deck and give us the 21 cards back
        if(dealNumber == 0) {
            var deck = new Deck();
            currDeck = deck.random21();
        }
        dealNumber++;
        
        //each deal is going to display 3 new columns, so we just reset them each time
        currBoard.resetColumns();
        
        //in current class diagram, dealer has no knowledge of columns, so can't possibly deal correctly unless we assume 3 columns and 7 rows in each
        //assuming 3 columns, dealing cards to each column 1 at a time
        for(var j=0;j<7;j++){
            for(var i=0;i<3;i++){
                currBoard.addToColumn(i,currDeck.pop());
            }
        }
    };
    
    //function to reveal the user's chosen card. If done correctly, it should always be the 11th card in the deck
    publicVar.revealCard = function() {
        return currDeck[10];
    };
    
    //a function that picks up the cards after a user has picked a column. This reshuffles in a specific order
    publicVar.pickupCards = function(userColumn) {
        //diagram doesn't indicate, but pickupCards requires that we know which column a user has picked - added a param to give this info
        
        var fixedColumns = []; //used to collect the proper order of the shuffle where the second element is the user's selection
        var stack = [];
        
        if(!currBoard) {
            alert("Cannot deal, dealer has no awareness of the current board. Please give dealer access via Dealer.setBoard(board).");
            return;
        }
        
        //get our current columns
        var columns = currBoard.showColumns();
        
        //userColumn will be 1, 2, or 3, so we can use that for our column array
        //this section will set the stack to be the 3 columns with the user selection in the middle
        fixedColumns[1] = columns[userColumn-1];
        var currPos = 0;
        for(var i=0;i<columns.length;i++){
            if(i == userColumn-1) continue;
            fixedColumns[currPos] = columns[i];
            currPos += 2;
        }
        
        //this bit puts all the cards into the proper stack looping through each of the columns
        for(var i=0;i<fixedColumns.length;i++){
            var rows = fixedColumns[i].showRows();
            for(var j=0;j<rows.length;j++){
                stack.push(rows[j]);
            }
        }
        
        currDeck = stack; //set our new deck to deal out to the stack created above
    };
    
    //this is the only way we can make a dealer aware of a given board - missing on diagram
    publicVar.setBoard = function(board) {
        currBoard = board;
    }
};