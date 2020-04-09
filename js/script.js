
function capitalizeFirstLetter(text) {
    return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
}

function computerPlay(){
    var computerChoice = Math.floor(Math.random() * 3 + 1);

    if (computerChoice === 1){
        document.getElementById("computer-choice").innerHTML = "Rock";
        return 'rock';
    } else if (computerChoice === 2){
        document.getElementById("computer-choice").innerHTML = "Scissors";
        return 'scissors';
    } else {
        document.getElementById("computer-choice").innerHTML = "Paper";
        return 'paper';
    }

}
function playRound(playerSelection, computerSelection){
    
    if ((playerSelection === 'rock' && computerSelection === 'scissors') || (playerSelection === 'paper' && computerSelection === 'rock') || (playerSelection === 'scissors' && computerSelection === 'paper') ) {
        document.getElementById("outcome-span1").innerHTML = 'You win!';
        document.getElementById("outcome-span2").innerHTML = `${capitalizeFirstLetter(playerSelection)} beats ${capitalizeFirstLetter(computerSelection)}!`;
        //console.log(`You Win! ` )
        return 'player';
    } else if ((computerSelection === 'rock' && playerSelection === 'scissors') || (computerSelection === 'paper' && playerSelection === 'rock') || (computerSelection === 'scissors' && playerSelection === 'paper') ) {
        document.getElementById("outcome-span1").innerHTML = 'You Lose :('; 
        document.getElementById("outcome-span2").innerHTML = `${capitalizeFirstLetter(computerSelection)} beats ${capitalizeFirstLetter(playerSelection)}!`
        return 'computer';
    } else {
        document.getElementById("outcome-span1").innerHTML = "It's a Tie!";
        document.getElementById("outcome-span2").innerHTML = `You chose both chose ${capitalizeFirstLetter(computerSelection)}!`
        return 'tie';
    }
}

function game(playerInput){

    var winner = playRound(this.value, computerPlay());
    if (winner === 'player'){
        playerScore++;
    } else if (winner === 'computer') {
        computerScore++;
    }
    updateScores();
     
    
}

function updateScores(){
    document.getElementById("player-score").innerHTML = playerScore;
    document.getElementById("computer-score").innerHTML = computerScore;
}

function clickMe(){
    console.log("clicked");
}

var playerScore = 0;
var computerScore = 0;

const buttons = document.querySelectorAll('.button-choice');
buttons.forEach(button => button.addEventListener("click", game));



