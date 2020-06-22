let playerPoints = 0;
let computerPoints = 0; 
const playerScore = document.getElementById('playerScore');
const rock_selection = document.getElementById("rock");
const paper_selection = document.getElementById('paper');
const scissors_selection = document.getElementById('scissors');
const result = document.getElementById('result');
const computerScore = document.getElementById('computerScore');
function playerRock () {
    game("ROCK");
}

function playerPaper () {
    game("PAPER");
}

function playerScissors () {
    game("SCISSORS");
}



rock_selection.addEventListener('click', playerRock);

paper_selection.addEventListener('click', playerPaper);

scissors_selection.addEventListener('click', playerScissors);

function computerPlay() {
    let randNumb =  Math.floor(Math.random() * 3);
    if (randNumb == 0) {
        return "ROCK";
    } 
    else if (randNumb == 1) {
        return "PAPER";
    }
    else {
        return "SCISSORS";
    }
}
function playRound(playerSelection, computerSelection) {
    if (playerSelection.toUpperCase() == "ROCK") {
        switch (computerSelection.toUpperCase()) {
            case "ROCK":
                return 2;
            case "PAPER":
                return 1;
            case "SCISSORS":
                return 0;    
        }
    }
    else if (playerSelection.toUpperCase() == "PAPER") {
        switch (computerSelection.toUpperCase()) {
            case "ROCK":
                return 0;
            case "PAPER":
                return 2;
            case "SCISSORS":
                return 1;  
        }
    }
    else if (playerSelection.toUpperCase() == "SCISSORS") {
        switch (computerSelection.toUpperCase()) {
            case "ROCK":
                return 1;
            case "PAPER":
                return 0;
            case "SCISSORS":
                return 2;       
        }
    }
}


function game(playerSelection) {
        let computerSelection = computerPlay();
        let roundResult = playRound(playerSelection,computerSelection);
        switch (roundResult) {
            case 0:
                playerPoints++;
                playerScore.textContent = 'Player: ' + playerPoints;
                result.textContent = (playerSelection + " beats " + computerSelection + ".\r\n You win! Choose another move.");
                break;
            case 1:
                computerPoints++;
                result.textContent = (playerSelection + " loses to " + computerSelection + ".\r\n You lose! Choose another move.");
                computerScore.textContent = 'Computer: ' + computerPoints;
                break;
            case 2:
                result.textContent = (playerSelection + " ties with " + computerSelection + ".\r\n It's a tie! Choose another move.");
                    break;
        }
    if (playerPoints == 5 || computerPoints == 5) {
        if (playerPoints > computerPoints) {
            result.textContent = ("YOU WIN! The score was " + playerPoints + " vs. " + computerPoints + "\r\nClick here to play again.");
            rock_selection.removeEventListener('click', playerRock);
            paper_selection.removeEventListener('click', playerPaper);
            scissors_selection.removeEventListener('click',playerScissors);
            result.addEventListener('click' , function(e) {
                location.reload();
            })
        }
        else if (playerPoints < computerPoints) {
            result.textContent = ("COMPUTER WINS! The score was " + playerPoints + " vs. " + computerPoints + "\r\nClick here to play again.");
            rock_selection.removeEventListener('click', playerRock);
            paper_selection.removeEventListener('click', playerPaper);
            scissors_selection.removeEventListener('click',playerScissors);
            result.addEventListener('click' , function(e) {
                location.reload();
            })
        }
    }
}
