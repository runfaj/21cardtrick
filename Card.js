var Card = function (obj) {
    //a card can be initialized with an object containing "suit" and "face" as a number 1-13
    //this is absolutely necessary because a card is a single instance, whereas a deck keeps track
    //of a collection of cards. The deck should determine the card types available.
    
    if (!obj) {
        obj = {};
    }
    var face = obj.face || "",
        suit = obj.suit || "",
        publicVar = this;

    //setup special card names that aren't 2-10
    switch (face) {
        case 1:
            face = "ace";
            break;
        case 11:
            face = "jack";
            break;
        case 12:
            face = "queen";
            break;
        case 13:
            face = "king";
            break;
        default:
            face = face + "";
    }

    //diagram marks these as private, but we MUST be able to see the values...
    publicVar.suit = suit;
    publicVar.face = face;

    //helper function to return a string of the card face/suit
    publicVar.toString = function () {
        return publicVar.face + " of " + publicVar.suit + "s";
    };
};