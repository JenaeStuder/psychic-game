
// computer generated choices
var psychicChoice = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

//other global variables
var playerChoice = [];
var wins = 1;
var losses = 1;
var guessesLeft = 10;
var lettersGuessed = [];


// random letter selected by the "psychic"
var psychicGuess = psychicChoice[Math.floor(Math.random() * psychicChoice.length)];
console.log(psychicGuess);

//Sets the stats for each new round of guesses
function newGuess() {
    psychicGuess = psychicChoice[Math.floor(Math.random() * psychicChoice.length)];
    guessesLeft = 10;
    lettersGuessed =[];
};
//logs the players input and updates the score
document.onkeydown = function (event) {
    var thisGuess = event.key;

    playerChoice.push(thisGuess);

    if (guessesLeft > 0) {
        if (playerChoice == psychicChoice) {
            wins++;
        }
        else if (playerChoice !== psychicChoice) {
            guessesLeft--;
            document.getElementById('guessLeft').innerHTML = (guessesLeft);
        }
        console.log(guessesLeft);

        if (playerChoice == psychicGuess) {
            alert("You really are psychic!!!!");
            document.getElementById('wins').innerHTML = (wins);
            (wins += 1);
            newGuess();
        }
        else if (guessesLeft === 0) {
            alert("You lose");
            document.getElementById('losses').innerHTML = (losses);
            (losses += 1);
            newGuess();
        }
    }
    console.log(playerChoice);
    document.getElementById('playerGuess').innerHTML = playerChoice;
    lettersGuessed.push(playerChoice);
    

    //allows the guesses to be counted down until it reaches 0
    //for (i = 0; i < 10; i++) {
    //   document.getElementById('playerGuess').innerHTML = lettersGuessed.join(" , ");
    //  console.log(playerChoice);
    // }
};

