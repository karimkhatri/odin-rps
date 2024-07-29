let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let rand = Math.floor((Math.random() * 3) + 1);
    if (rand === 1) {
        return 'rock';
    } else if (rand === 2) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

function getHumanChoice() {
    let choice = prompt('Enter your choice (rock, paper or scissors).').toLowerCase();
    if (choice === 'rock' || choice === 'paper' || choice === 'scissors') {
        return choice
    } else {
        alert('Invalid choice');
    }   
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log('It\'s a tie.');
    } else if (
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissors' && computerChoice === 'paper')
    ) {
        console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
        humanScore++;
    } else {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
        computerScore++;
    }
    console.log(`Your score: ${humanScore}`);
    console.log(`Computer score : ${computerScore}`)
  }
  
function playGame() {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
}

function checkWinner() {
    playGame();
    playGame();
    playGame();
    playGame();
    playGame();
    if (humanScore === computerScore) {
        console.log('The game ended with a tie.');
    } else if (humanScore > computerScore) {
        console.log('You won the game!');
    } else {
        console.log('You lost the game!');
    }
}

checkWinner();
 