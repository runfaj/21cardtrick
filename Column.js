var Column = function() {
    var id;
    var rows = []; //should go up to 7
    var publicVar = this;
    
    //an id is completely unneeded in this app, but we'll just add a static counter for each new column class instantiated for kicks and giggles
    if ( typeof Column.staticCounter == 'undefined' ) {
        Column.staticCounter = 0;
    }
    id = ++Column.staticCounter;
    
    //adds a card to a column, only if the column isn't full already
    publicVar.addCard = function(card) {
        if(rows.length < 7)
            rows.push(card);
    };
    
    //this isn't on diagram, but we need a way to view/edit the cards on a column
    publicVar.showRows = function() {
        return rows;
    }
    
    //this function will probably go away with a better UI, but useful for simple UI
    //it just lists the 7 cards in a column via html br tags
    /*publicVar.listCards = function() {
        var str = "";
        for(var i=0;i<rows.length;i++){
            var card = rows[i];
            //this is what I was attempting in class. I was using it with the pretty_ui.html
            var toSend = card.toString();
            str += convertToImage(toSend, colNumber) + "<br>";
            //str += card.toString() + "<br>";
        }
        return str;
    }*/
};