/* put the pretty ui logic in here. We can then tie it to the rest of the game logic later */

/*function convertToImage(toSend, colNumber) {
    for (var i = 1; i < 4; i++) {
        if (colNumber === "column" + i) {
            switch (toSend) {
                case "ace of clubs":
                    var node = document.getElementById("column" + i);
                    newImg = document.createElement("div");
                    newImg.innerHTML = "<img id='individualCard' class='cardImage' src='images/ACECLUBS.png'></img>";
                    return newImg.innerHTML;
                    break;
                case "ace of diamonds":
                    var node = document.getElementById("column" + i);
                    newImg = document.createElement("div");
                    newImg.innerHTML = "<img id='individualCard' class='cardImage' src='images/ACEDIAMONDS.png'></img>";
                    return newImg.innerHTML;
                    break;
                case "ace of hearts":
                    var node = document.getElementById("column" + i);
                    newImg = document.createElement("div");
                    newImg.innerHTML = "<img id='individualCard' class='cardImage' src='images/ACEHEARTS.png'></img>";
                    return newImg.innerHTML;
                    break;
                case "ace of spades":
                    var node = document.getElementById("column" + i);
                    newImg = document.createElement("div");
                    newImg.innerHTML = "<img id='individualCard' class='cardImage' src='images/ACESPADES.png'></img>";
                    return newImg.innerHTML;
                    break;
                case "2 of clubs":
                    var node = document.getElementById("column" + i);
                    newImg = document.createElement("div");
                    newImg.innerHTML = "<img id='individualCard' class='cardImage' src='images/TWOCLUBS.png'></img>";
                    return newImg.innerHTML;
                    break;
                case "2 of diamonds":
                    var node = document.getElementById("column" + i);
                    newImg = document.createElement("div");
                    newImg.innerHTML = "<img id='individualCard' class='cardImage' src='images/TWODIAMONDS.png'></img>";
                    return newImg.innerHTML;
                    break;
                case "2 of hearts":
                    var node = document.getElementById("column" + i);
                    newImg = document.createElement("div");
                    newImg.innerHTML = "<img id='individualCard' class='cardImage' src='images/TWOHEARTS.png'></img>";
                    return newImg.innerHTML;
                    break;
                case "2 of spades":
                    var node = document.getElementById("column" + i);
                    newImg = document.createElement("div");
                    newImg.innerHTML = "<img id='individualCard' class='cardImage' src='images/TWOSPADES.png'></img>";
                    return newImg.innerHTML;
                    break;
                case "3 of clubs":
                    var node = document.getElementById("column" + i);
                    newImg = document.createElement("div");
                    newImg.innerHTML = "<img id='individualCard' class='cardImage' src='images/THREECLUBS.png'></img>";
                    return newImg.innerHTML;
                    break;
                case "3 of diamonds":
                    var node = document.getElementById("column" + i);
                    newImg = document.createElement("div");
                    newImg.innerHTML = "<img id='individualCard' class='cardImage' src='images/THREEDIAMONDS.png'></img>";
                    return newImg.innerHTML;
                    break;
                case "3 of hearts":
                    var node = document.getElementById("column" + i);
                    newImg = document.createElement("div");
                    newImg.innerHTML = "<img id='individualCard' class='cardImage' src='images/THREEHEARTS.png'></img>";
                    return newImg.innerHTML;
                    break;
                case "3 of spades":
                    var node = document.getElementById("column" + i);
                    newImg = document.createElement("div");
                    newImg.innerHTML = "<img id='individualCard' class='cardImage' src='images/THREESPADES.png'></img>";
                    return newImg.innerHTML;
                    break;
                case "4 of clubs":
                    var node = document.getElementById("column" + i);
                    newImg = document.createElement("div");
                    newImg.innerHTML = "<img id='individualCard' class='cardImage' src='images/FOURCLUBS.png'></img>";
                    return newImg.innerHTML;
                    break;
                case "4 of diamonds":
                    var node = document.getElementById("column" + i);
                    newImg = document.createElement("div");
                    newImg.innerHTML = "<img id='individualCard' class='cardImage' src='images/FOURDIAMONDS.png'></img>";
                    return newImg.innerHTML;
                    break;
                case "4 of hearts":
                    var node = document.getElementById("column" + i);
                    newImg = document.createElement("div");
                    newImg.innerHTML = "<img id='individualCard' class='cardImage' src='images/FOURHEARTS.png'></img>";
                    return newImg.innerHTML;
                    break;
                case "4 of spades":
                    var node = document.getElementById("column" + i);
                    newImg = document.createElement("div");
                    newImg.innerHTML = "<img id='individualCard' class='cardImage' src='images/FOURSPADES.png'></img>";
                    return newImg.innerHTML;
                    break;
                case "5 of clubs":
                    var node = document.getElementById("column" + i);
                    newImg = document.createElement("div");
                    newImg.innerHTML = "<img id='individualCard' class='cardImage' src='images/FIVECLUBS.png'></img>";
                    return newImg.innerHTML;
                    break;
                case "5 of diamonds":
                    var node = document.getElementById("column" + i);
                    newImg = document.createElement("div");
                    newImg.innerHTML = "<img id='individualCard' class='cardImage' src='images/FIVEDIAMONDS.png'></img>";
                    return newImg.innerHTML;
                    break;
                case "5 of hearts":
                    var node = document.getElementById("column" + i);
                    newImg = document.createElement("div");
                    newImg.innerHTML = "<img id='individualCard' class='cardImage' src='images/FIVEHEARTS.png'></img>";
                    return newImg.innerHTML;
                    break;
                case "5 of spades":
                    var node = document.getElementById("column" + i);
                    newImg = document.createElement("div");
                    newImg.innerHTML = "<img id='individualCard' class='cardImage' src='images/FIVESPADES.png'></img>";
                    return newImg.innerHTML;
                    break;
                case "6 of clubs":
                    var node = document.getElementById("column" + i);
                    newImg = document.createElement("div");
                    newImg.innerHTML = "<img id='individualCard' class='cardImage' src='images/SIXCLUBS.png'></img>";
                    return newImg.innerHTML;
                    break;
                case "6 of diamonds":
                    var node = document.getElementById("column" + i);
                    newImg = document.createElement("div");
                    newImg.innerHTML = "<img id='individualCard' class='cardImage' src='images/SIXDIAMONDS.png'></img>";
                    return newImg.innerHTML;
                    break;
                case "6 of hearts":
                    var node = document.getElementById("column" + i);
                    newImg = document.createElement("div");
                    newImg.innerHTML = "<img id='individualCard' class='cardImage' src='images/SIXHEARTS.png'></img>";
                    return newImg.innerHTML;
                    break;
                case "6 of spades":
                    var node = document.getElementById("column" + i);
                    newImg = document.createElement("div");
                    newImg.innerHTML = "<img id='individualCard' class='cardImage' src='images/SIXSPADES.png'></img>";
                    return newImg.innerHTML;
                    break;
                case "7 of clubs":
                    var node = document.getElementById("column" + i);
                    newImg = document.createElement("div");
                    newImg.innerHTML = "<img id='individualCard' class='cardImage' src='images/SEVENCLUBS.png'></img>";
                    return newImg.innerHTML;
                    break;
                case "7 of diamonds":
                    var node = document.getElementById("column" + i);
                    newImg = document.createElement("div");
                    newImg.innerHTML = "<img id='individualCard' class='cardImage' src='images/SEVENDIAMONDS.png'></img>";
                    return newImg.innerHTML;
                    break;
                case "7 of hearts":
                    var node = document.getElementById("column" + i);
                    newImg = document.createElement("div");
                    newImg.innerHTML = "<img id='individualCard' class='cardImage' src='images/SEVENHEARTS.png'></img>";
                    return newImg.innerHTML;
                    break;
                case "7 of spades":
                    var node = document.getElementById("column" + i);
                    newImg = document.createElement("div");
                    newImg.innerHTML = "<img id='individualCard' class='cardImage' src='images/SEVENSPADES.png'></img>";
                    return newImg.innerHTML;
                    break;
                case "8 of clubs":
                    var node = document.getElementById("column" + i);
                    newImg = document.createElement("div");
                    newImg.innerHTML = "<img id='individualCard' class='cardImage' src='images/EIGHTCLUBS.png'></img>";
                    return newImg.innerHTML;
                    break;
                case "8 of diamonds":
                    var node = document.getElementById("column" + i);
                    newImg = document.createElement("div");
                    newImg.innerHTML = "<img id='individualCard' class='cardImage' src='images/EIGHTDIAMONDS.png'></img>";
                    return newImg.innerHTML;
                    break;
                case "8 of hearts":
                    var node = document.getElementById("column" + i);
                    newImg = document.createElement("div");
                    newImg.innerHTML = "<img id='individualCard' class='cardImage' src='images/EIGHTHEARTS.png'></img>";
                    return newImg.innerHTML;
                    break;
                case "8 of spades":
                    var node = document.getElementById("column" + i);
                    newImg = document.createElement("div");
                    newImg.innerHTML = "<img id='individualCard' class='cardImage' src='images/EIGHTSPADES.png'></img>";
                    return newImg.innerHTML;
                    break;
                case "9 of clubs":
                    var node = document.getElementById("column" + i);
                    newImg = document.createElement("div");
                    newImg.innerHTML = "<img id='individualCard' class='cardImage' src='images/NINECLUBS.png'></img>";
                    return newImg.innerHTML;
                    break;
                case "9 of diamonds":
                    var node = document.getElementById("column" + i);
                    newImg = document.createElement("div");
                    newImg.innerHTML = "<img id='individualCard' class='cardImage' src='images/NINEDIAMONDS.png'></img>";
                    return newImg.innerHTML;
                    break;
                case "9 of hearts":
                    var node = document.getElementById("column" + i);
                    newImg = document.createElement("div");
                    newImg.innerHTML = "<img id='individualCard' class='cardImage' src='images/NINEHEARTS.png'></img>";
                    return newImg.innerHTML;
                    break;
                case "9 of spades":
                    var node = document.getElementById("column" + i);
                    newImg = document.createElement("div");
                    newImg.innerHTML = "<img id='individualCard' class='cardImage' src='images/NINESPADES.png'></img>";
                    return newImg.innerHTML;
                    break;
                case "10 of clubs":
                    var node = document.getElementById("column" + i);
                    newImg = document.createElement("div");
                    newImg.innerHTML = "<img id='individualCard' class='cardImage' src='images/TENCLUBS.png'></img>";
                    return newImg.innerHTML;
                    break;
                case "10 of diamonds":
                    var node = document.getElementById("column" + i);
                    newImg = document.createElement("div");
                    newImg.innerHTML = "<img id='individualCard' class='cardImage' src='images/TENDIAMONDS.png'></img>";
                    return newImg.innerHTML;
                    break;
                case "10 of hearts":
                    var node = document.getElementById("column" + i);
                    newImg = document.createElement("div");
                    newImg.innerHTML = "<img id='individualCard' class='cardImage' src='images/TENHEARTS.png'></img>";
                    return newImg.innerHTML;
                    break;
                case "10 of spades":
                    var node = document.getElementById("column" + i);
                    newImg = document.createElement("div");
                    newImg.innerHTML = "<img id='individualCard' class='cardImage' src='images/TENSPADES.png'></img>";
                    return newImg.innerHTML;
                    break;
                case "jack of clubs":
                    var node = document.getElementById("column" + i);
                    newImg = document.createElement("div");
                    newImg.innerHTML = "<img id='individualCard' class='cardImage' src='images/JACKCLUBS.png'></img>";
                    return newImg.innerHTML;
                    break;
                case "jack of diamonds":
                    var node = document.getElementById("column" + i);
                    newImg = document.createElement("div");
                    newImg.innerHTML = "<img id='individualCard' class='cardImage' src='images/JACKDIAMONDS.png'></img>";
                    return newImg.innerHTML;
                    break;
                case "jack of hearts":
                    var node = document.getElementById("column" + i);
                    newImg = document.createElement("div");
                    newImg.innerHTML = "<img id='individualCard' class='cardImage' src='images/JACKHEARTS.png'></img>";
                    return newImg.innerHTML;
                    break;
                case "jack of spades":
                    var node = document.getElementById("column" + i);
                    newImg = document.createElement("div");
                    newImg.innerHTML = "<img id='individualCard' class='cardImage' src='images/JACKSPADES.png'></img>";
                    return newImg.innerHTML;
                    break;
                case "queen of clubs":
                    var node = document.getElementById("column" + i);
                    newImg = document.createElement("div");
                    newImg.innerHTML = "<img id='individualCard' class='cardImage' src='images/QUEENCLUBS.png'></img>";
                    return newImg.innerHTML;
                    break;
                case "queen of diamonds":
                    var node = document.getElementById("column" + i);
                    newImg = document.createElement("div");
                    newImg.innerHTML = "<img id='individualCard' class='cardImage' src='images/QUEENDIAMONDS.png'></img>";
                    return newImg.innerHTML;
                    break;
                case "queen of hearts":
                    var node = document.getElementById("column" + i);
                    newImg = document.createElement("div");
                    newImg.innerHTML = "<img id='individualCard' class='cardImage' src='images/QUEENHEARTS.png'></img>";
                    return newImg.innerHTML;
                    break;
                case "queen of spades":
                    var node = document.getElementById("column" + i);
                    newImg = document.createElement("div");
                    newImg.innerHTML = "<img id='individualCard' class='cardImage' src='images/QUEENSPADES.png'></img>";
                    return newImg.innerHTML;
                    break;
                case "king of clubs":
                    var node = document.getElementById("column" + i);
                    newImg = document.createElement("div");
                    newImg.innerHTML = "<img id='individualCard' class='cardImage' src='images/KINGCLUBS.png'></img>";
                    return newImg.innerHTML;
                    break;
                case "king of diamonds":
                    var node = document.getElementById("column" + i);
                    newImg = document.createElement("div");
                    newImg.innerHTML = "<img id='individualCard' class='cardImage' src='images/KINGDIAMONDS.png'></img>";
                    return newImg.innerHTML;
                    break;
                case "king of hearts":
                    var node = document.getElementById("column" + i);
                    newImg = document.createElement("div");
                    newImg.innerHTML = "<img id='individualCard' class='cardImage' src='images/KINGHEARTS.png'></img>";
                    return newImg.innerHTML;
                    break;
                default:
                    var node = document.getElementById("column" + i);
                    newImg = document.createElement("div");
                    newImg.innerHTML = "<img id='individualCard' class='cardImage' src='images/KINGSPADES.png'></img>";
                    return newImg.innerHTML;
                    break;         
            }
        }
    }
}*/

function animateCard(colel, card, currY, timeout) {
    setTimeout(function(){
        var img = new Image();
        img.src = card.getImageName();
        img.className = "card-image";
        colel.appendChild(img);
        var w = Math.round(jQuery(img).width() * .407);
        img.style.top = $(window.top).height() + "px";
        $(img).show().animate({top: currY},timeout);
    },timeout);
}

function getTopAmount() {
    var img = new Image();
    img.src = "./images/ACEHEARTS.png";
    img.className = "card-image";
    jQuery('#column1').append(img);
    var w = Math.round(jQuery(img).width() * .407);
    jQuery(img).remove();
    return w;
}

function showColumnCards(row,colel) {
    var currY = 0;
    var currTimeout = 1;
    row = row.showRows();
    var w = getTopAmount();
    for(var r in row){
        animateCard(colel,row[r],currY,currTimeout);
        currTimeout += 150;
        currY += w;
    }
}