var Board = function() {
    var columns = [];
    var publicVar = this;
    
    //helper function to create 3 new columns on the board
    var initColumns = function() {
        for(var i=0;i<3;i++) {
            columns.push(new Column());
        }
    };
    
    publicVar.resetColumns = function() {
        //serious diagram flaw -- no way to reset columns in between rounds, so we just keep adding to existing ones
        
        columns = [];
        initColumns();
    }
    
    publicVar.addToColumn = function(columnid, card) {
        //because the id of the column class is private, we can only assume the column id given here is actually the position of the column in our columns array
        
        if(typeof columns[columnid] == "undefined"){
            alert(columnid + " doesn't exist, there isn't that many columns.");
            return;
        }
        
        columns[columnid].addCard(card);
    };
    
    publicVar.showColumns = function() {
        //this is necessary, but not on the diagram, because the dealer needs to know what cards to pickup
        
        return columns;
    }
    
    //always init 3 new columns when a board is created
    initColumns();
};