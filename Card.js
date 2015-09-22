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
    
    //reads the card info and returns the appropriate image file location
    publicVar.getImageName = function(){
        var face = publicVar.face;
        var suit = publicVar.suit;
        switch(face){
            case "1": face = "one"; break;
            case "2": face = "two"; break;
            case "3": face = "three"; break;
            case "4": face = "four"; break;
            case "5": face = "five"; break;
            case "6": face = "six"; break;
            case "7": face = "seven"; break;
            case "8": face = "eight"; break;
            case "9": face = "nine"; break;
            case "10":face = "ten"; break;
        }
        face = face.toUpperCase();
        suit = suit.toUpperCase();
        return "./images/" + face + suit + "S.png";
    }
};