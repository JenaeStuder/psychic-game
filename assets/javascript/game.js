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

//logs the players input and updates the score
document.onkeydown = function (event) {
    var verify = psychicGuess.includes(playerChoice);
    var thisGuess = event.key;
    playerChoice.push(thisGuess);

    if (guessesLeft > 0) {
        if (playerChoice == psychicChoice) {
            wins++;
        }
        else if(playerChoice !== psychicChoice){
            guessesLeft--;
            document.getElementById('guessLeft').innerHTML =(guessesLeft);
        }
        console.log(guessesLeft);

        if(playerChoice == psychicGuess) {
        alert("You really are psychic!!!!");
        document.getElementById('wins').innerHTML = (wins);
            (wins += 1);
            redo;
    }
        else if( guessesLeft === 0){
        alert("You lose");
        document.getElementById('losses').innerHTML =(losses);
        (losses += 1);
        redo;
        }
    }
    };
    for (i = 0; i < 10; i++) {
        document.getElementById('playerGuess').innerHTML = lettersGuessed.join(" , ");
        console.log(playerChoice);
    }
    
    console.log(playerChoice);
    document.getElementById('playerGuess').innerHTML = playerChoice;

    lettersGuessed.push(playerChoice);


var redo = function () {
    guessesLeft = 10;
    lettersGuessed = [];
}
    //updateGuessesLeft();
    //updateLettersGuessed();

