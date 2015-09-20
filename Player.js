var Player = function() {
    var hasSelectedCard = false;
    var publicVar = this;
    var currDealer;
    
    publicVar.indicateColumn = function(column) {
        //another diagram flaw - need to pass in the column to pick! We're also going to assume that there is only 3 options because our diagram is so loose
        
        if(!column || column < 1 || column > 3) {
            alert("Player must indicate column number 1, 2, or 3.");
            return;
        }
        
        if(!currDealer) {
            alert("Player has no knowledge of a Dealer. Please associate a dealer by using Player.setDealer(dealer).");
            return;
        }
        
        //user has selected a column, we'll tell the dealer
        currDealer.pickupCards(column);
    };
    
    //frankly, this function is completely useless because hasSelectedCard isn't used anywhere - another diagram flaw
    publicVar.pickCard = function(int_column,int_row) {
        hasSelectedCard = true;
    };

    // diagram doesn't indicate this method, but it's necessary in order for a player to "tell" a dealer to do something...
    publicVar.setDealer = function(dealer) {
        currDealer = dealer;
    }
}