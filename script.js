function getComputerChoice() {
  let choiceIndex = Math.floor(Math.random() * 3);
  switch (choiceIndex) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
    default:
      throw Error("Random number is greater or less than allowed range.");
  }
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    return "tie";
  }
  if (computerChoice === "rock") {
    if (humanChoice === "paper") {
      return "win";
    }
    return "loose";
  }
  if (computerChoice === "paper") {
    if (humanChoice === "scissors") {
      return "win";
    }
    return "loose";
  }
  if (computerChoice === "scissors") {
    if (humanChoice === "rock") {
      return "win";
    }
    return "loose";
  }
}

function capitalizeFirstLetter(word) {
  if (!word) {
    throw Error("Cannot capitalize nothing.");
  }
  return word[0].toUpperCase() + word.slice(1);
}

const playerOptionsContainer = document.getElementById(
  "player-options-container",
);
const choicesMade = document.getElementById("choices-made");
const playerScore = document.getElementById("player-score");
const computerScore = document.getElementById("computer-score");
const winOrLooseDeclaration = document.getElementById(
  "win-or-loose-declaration",
);
const bestOfFiveVictor = document.getElementById("best-of-five-victor");
const resetGameBtn = document.getElementById("reset-game-btn");

let hasWinner = false;

function declareWinner(winner) {
  if (winner === "player") {
    bestOfFiveVictor.textContent = "You won the game! Congratulations!";
  } else {
    bestOfFiveVictor.textContent = "You lost. Better luck next time.";
  }
  hasWinner = true;
  resetGameBtn.classList.add("show-reset");
}

function checkWinner() {
  if (parseInt(playerScore.textContent) >= 5) {
    declareWinner("player");
  } else if (parseInt(computerScore.textContent) >= 5) {
    declareWinner("computer");
  }
}

function updateScore(result) {
  if (result === "win") {
    playerScore.textContent = parseInt(playerScore.textContent) + 1;
  } else if (result === "loose") {
    computerScore.textContent = parseInt(computerScore.textContent) + 1;
  }

  checkWinner();
}

playerOptionsContainer.addEventListener("click", (event) => {
  if (!event.target.classList.contains("player-option")) {
    return;
  }
  if (hasWinner) {
    return;
  }

  const humanChoice = event.target.textContent.toLowerCase();
  const computerChoice = getComputerChoice();

  choicesMade.textContent = `You chose: ${capitalizeFirstLetter(humanChoice)} | The computer chose: ${capitalizeFirstLetter(computerChoice)}`;

  const result = playRound(humanChoice, computerChoice);

  updateScore(result);

  switch (result) {
    case "win":
      winOrLooseDeclaration.textContent = `You win! ${capitalizeFirstLetter(humanChoice)} beats ${capitalizeFirstLetter(computerChoice)}`;
      break;
    case "loose":
      winOrLooseDeclaration.textContent = `You loose. ${capitalizeFirstLetter(humanChoice)} looses against ${capitalizeFirstLetter(computerChoice)}`;
      break;
    case "tie":
      winOrLooseDeclaration.textContent = `You tied. ${capitalizeFirstLetter(humanChoice)} ties ${capitalizeFirstLetter(computerChoice)}`;
  }
});

const resultText = document.querySelectorAll(".result-text");

resetGameBtn.addEventListener("click", () => {
  playerScore.textContent = "0";
  computerScore.textContent = "0";
  hasWinner = false;

  resultText.forEach((elm) => {
    elm.textContent = "";
  });

  resetGameBtn.classList.remove("show-reset");
});
