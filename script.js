const choices = document.querySelectorAll(".choice");
const playerScoreEl = document.querySelector(".playerScore");
const computerScoreEl = document.querySelector(".computerScore");
const resultEl = document.querySelector(".result");
const resetEl = document.querySelector(".reset");
let playerScore = 0;
let computerScore = 0;
let isGameOver = false;

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    if (isGameOver) {
      return;
    } else {
      playGame(choice.textContent);
    }
  });
});

resetEl.addEventListener("click", resetGame);

function computerChoice() {
  const choices = ["Rock", "Paper", "Scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

function playGame(playerChoice) {
  const computerSelection = computerChoice();
  if (
    (playerChoice == "Rock" && computerSelection == "Scissors") ||
    (playerChoice == "Scissors" && computerSelection == "Paper") ||
    (playerChoice == "Paper" && computerSelection == "Rock")
  ) {
    playerScore++;
    playerScoreEl.textContent = playerScore;
    resultEl.textContent = `You won the round! ${playerChoice} beat ${computerSelection}`;
  } else if (playerChoice == computerSelection) {
    resultEl.textContent = `It's a tie! ${playerChoice} ties ${computerSelection}`;
  } else {
    computerScore++;
    computerScoreEl.textContent = computerScore;
    resultEl.textContent = `You lost the round! ${computerSelection} beat ${playerChoice}`;
  }
  if (playerScore > computerScore && playerScore >= 5) {
    resultEl.textContent = "You won the game!";
    isGameOver = true;
  } else if (computerScore > playerScore && computerScore >= 5) {
    resultEl.textContent = "You lost the game!";
    isGameOver = true;
  }
}

function resetGame() {
  playerScore = 0;
  computerScore = 0;
  resultEl.textContent = "Result";
  playerScoreEl.textContent = playerScore;
  computerScoreEl.textContent = computerScore;
  isGameOver = false;
}
