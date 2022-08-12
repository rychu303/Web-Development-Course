// randomized numbers to select the dice

const diceRandomNum1 = Math.floor(Math.random() * 6) + 1;
const diceRandomNum2 = Math.floor(Math.random() * 6) + 1;

// function to append random number to img file name and change img alt text for dice 1
function diceRandomizer1 () {  
    let randomDice1 = "/users/richardchung/Desktop/Web Development/DOM/Dicee/images/dice" + diceRandomNum1 + ".png";
    document.querySelector("img.dice-img-1").setAttribute("src", randomDice1);
    document.querySelector("img.dice-img-1").setAttribute("alt", "dice image side " + diceRandomNum1);
}

// function to append random number to img file name and change img alt text for dice 1
function diceRandomizer2 () {    
    let randomDice2 = "/users/richardchung/Desktop/Web Development/DOM/Dicee/images/dice" + diceRandomNum2 + ".png";
    document.querySelector("img.dice-img-2").setAttribute("src", randomDice2);
    document.querySelector("img.dice-img-2").setAttribute("alt", "dice image side " + diceRandomNum2);
}

diceRandomizer1();
diceRandomizer2();

//function to display the winning player in the page title
function winnerBanner () {
    if(diceRandomNum1 > diceRandomNum2){
        return document.querySelector('h1').innerHTML = "🚩 Player 1 Wins!"
    } else if (diceRandomNum1 < diceRandomNum2){
        return document.querySelector('h1').innerHTML = "Player 2 Wins 🚩!"
    } else {
        return document.querySelector('h1').innerHTML = "🚩 Draw! 🚩"
    }

}

winnerBanner();
