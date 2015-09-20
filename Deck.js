var Deck = function () {
    var cardArray = [];
    var publicVar = this;

    //helper function to initialize a full deck - notice 2 loops, 1 with 4 suits, 1 with 13 cards for each suit
    var initCards = function() {
        cardArray = [];
        for (var i = 0; i < 4; i++) {
            var type = "";
            switch (i) {
                case 0:
                    type = "heart";
                    break;
                case 1:
                    type = "diamond";
                    break;
                case 2:
                    type = "spade";
                    break;
                default:
                    type = "club";
            }
            for (var j = 1; j <= 13; j++) {
                cardArray.push(new Card({suit: type, face: j}))
            }
        }
        
        //just shuffle the cards when we make a new deck
        publicVar.shuffle();
    }
    
    //shuffles a given card array. since arrays pass by pointer, we don't have to worry about returning into a new variable each time
    publicVar.shuffle = function() {
        var o = cardArray;
        for (var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
        return o;
    };

    //returns the first 21 cards in the deck
    publicVar.random21 = function () {
		//good loop that works, but slice can take care of this more quickly
		/*var cards = [];
		for (var i = 0; i < 21; i++) {
			cards[i] = cardArray[i].pop();
		}
        return cards;*/
        
        return cardArray.slice(0,21); //returns first 21 cards without modifying cardArray. To modify cardArray, use splice instead
    };

    //init new instance of deck anytime Deck class is initialized
    initCards();
};





