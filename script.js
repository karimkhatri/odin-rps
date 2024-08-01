const buttons = document.querySelectorAll('.choice');
const result = document.querySelector('.result');
const playerScoreEl = document.querySelector('.player-score');
const computerScoreEl = document.querySelector('.computer-score');
const reset = document.querySelector('.reset');
let humanScore = 0;
let computerScore = 0;

buttons.forEach(button =>{
    button.addEventListener('click', function(){
        const computerSelection = getComputerChoice();
        const playerSelection = button.textContent
        playRound(playerSelection, computerSelection);
        if (isGameOver()) {
            checkWinner();
        }
    })
})

reset.addEventListener('click', resetGame);


function getComputerChoice() {
    let rand = Math.floor((Math.random() * 3) + 1);
    if (rand === 1) {
        return 'Rock';
    } else if (rand === 2) {
        return 'Paper';
    } else {
        return 'Scissors';
    }
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        result.textContent = 'It\'s a tie.';
    } else if (
        (humanChoice === 'Rock' && computerChoice === 'Scissors') ||
        (humanChoice === 'Paper' && computerChoice === 'Rock') ||
        (humanChoice === 'Scissors' && computerChoice === 'Paper')
    ) {
        result.textContent = `You win! ${humanChoice} beats ${computerChoice}.`;
        humanScore++;
    } else {
        result.textContent = `You lose! ${computerChoice} beats ${humanChoice}.`;
        computerScore++;
    }
    computerScoreEl.textContent = `Computer Score: ${computerScore}`;
    playerScoreEl.textContent = `Your Score: ${humanScore}`;
  }

function resetGame() {
    humanScore = 0;
    computerScore = 0;
    result.textContent = '';
    computerScoreEl.textContent = 'Computer Score: 0';
    playerScoreEl.textContent = 'Your Score: 0';
    buttons.forEach(elem => {
        elem.disabled = false;
    })
  }

function isGameOver() {
    return humanScore === 5 || computerScore === 5
  }

function checkWinner() {
    if (humanScore > computerScore) {
        result.textContent = 'You won the game!';
    } else {
        result.textContent = 'You lost the game!';  
    }
    buttons.forEach(elem => {
        elem.disabled = true;
    })
}