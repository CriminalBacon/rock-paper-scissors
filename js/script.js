
function capitalizeFirstLetter(text) {
    return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
}

function computerPlay(){
    var computerChoice = Math.floor(Math.random() * 3 + 1);

    if (computerChoice === 1){
        return 'rock';
    } else if (computerChoice === 2){
        return 'scissors';
    } else {
        return 'paper';
    }

}
function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();

    if ((playerSelection === 'rock' && computerSelection === 'scissors') || (playerSelection === 'paper' && computerSelection === 'rock') || (playerSelection === 'scissors' && computerSelection === 'paper') ) {
        console.log(`You Win! ${capitalizeFirstLetter(playerSelection)} beats ${capitalizeFirstLetter(computerSelection)}!` )
        return 'player';
    } else if ((computerSelection === 'rock' && playerSelection === 'scissors') || (computerSelection === 'paper' && playerSelection === 'rock') || (computerSelection === 'scissors' && playerSelection === 'paper') ) {
        console.log(`You Lose :( ${capitalizeFirstLetter(computerSelection)} beats ${capitalizeFirstLetter(playerSelection)}!` );
        return 'computer';
    } else {
        console.log(`It's a Tie! You chose both chose ${capitalizeFirstLetter(computerSelection)}!`);
        return 'tie';
    }
}

function game(){
    var playerScore = 0;
    var computerScore = 0;

    while ((playerScore < 5) && (computerScore < 5)){
        var playerInput = prompt("Choose rock, paper or scissors: ");
        var winner = playRound(playerInput, computerPlay());
        if (winner === 'player'){
            playerScore++;
        } else if (winner === 'computer') {
            computerScore++;
        }
        console.log(`Player: ${playerScore}  Computer: ${computerScore}`);
    }  
    
}

game();
