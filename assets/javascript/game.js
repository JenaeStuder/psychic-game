//document.getElementById("rndletter").addEventListener("click", function() {
//   var result = String.fromCharCode(Math.floor(Math.random() * (122 - 97)) + 97);
// 
// document.getElementById("result").innerText = result;
//}); -->
//document.getElementById("number").innerHTML="hello world";
// computer generated choices

var psychicChoice = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

//other global variables
var playerChoice = [];
var wins = 1;
var losses = 1;
var guessesLeft = 10;
var lettersGuessed = [];
var lettersToGuess = null;

// random letter selected by the "psychic"
var psychicGuess = psychicChoice[Math.floor(Math.random() * psychicChoice.length)];
console.log(psychicGuess);

function updateGuessesLeft(){
    document.getElementById('guessLeft').innerHtml = "Guesses Left: " + guessLeft;
};
function updateLettersGuessed(){
    document.getElementById('playerGuess').innerHtml = "Wrong Guesses: " + lettersGuessed;
};




//logs the players input
document.onkeydown = function (event) {
    var verify = psychicGuess.includes(playerChoice);
    var thisGuess = event.key;
    playerChoice.push(thisGuess);
    
    if (playerChoice == psychicGuess) {
        alert("You really are psychic!!!!");
        document.getElementById('wins').innerHTML = (wins);
            (wins += 1);
            redo;
    }

    if (guessesLeft > 0) {
        if (playerChoice == psychicChoice) {
            wins++;
        }
        else if(playerChoice !== psychicChoice){
            guessesLeft--;
            document.getElementById('guessLeft').innerHTML =(guessesLeft);
        }
        console.log(guessesLeft);
    }
    for (i = 0; i < 10; i++) {
        document.getElementById('playerGuess').innerHTML = lettersGuessed.join(" , ");
        console.log(playerChoice);
    }
    
    console.log(playerChoice);
    document.getElementById('playerGuess').innerHTML = playerChoice;

    lettersGuessed.push(playerChoice);
}

var redo = function () {
    guessesLeft = 10;
    lettersGuessed = [];

    updateGuessesLeft();
    updateLettersGuessed();
}
//updateLettersToGuess();
//updateGuessesLeft();


/* function start() {
    psychicGuess = psychicChoice[Math.floor(Math.random() * psychicChoice.length)];
    playerChoice = (' ');
    for (i = 0; i < psychicGuess.length; i++) {
        lettersGuessed.push(' .')
        document.getElementById(playerGuess).innerHTML = playerChoice.join(' , ');
        console.log(playerChoice)
    }
// if (lettersGuessed.join("") == physicChoice) {
    //    wins++
    //     tryAmount = 10
    //    document.getElementById('wins').innerHTML = wins;
    //    document.getElementById('guessesLeft').innerHTML = tryAmount;
    //     correctGuesses = [];
    //    newRound();
    // }

} */