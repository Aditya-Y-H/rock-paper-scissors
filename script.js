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

const humanChoiceDisplay = document.getElementById("human-choice");
const computerChoiceDisplay = document.getElementById("computer-choice");
const humanScore = document.getElementById("human-score");
const computerScore = document.getElementById("computer-score");
const winOrLooseDeclaration = document.getElementById(
  "win-or-loose-declaration",
);
const resetGameBtn = document.getElementById("reset-game-btn");
const resultPara = document.getElementById("result");

let hasWinner = false;

function declareWinner(winner) {
  console.log(winner);
  if (winner === "player") {
    resultPara.textContent = "You won the game! Congratulations!";
  } else {
    resultPara.textContent = "You lost. Better luck next time.";
  }
  hasWinner = true;
  resetGameBtn.classList.add("show-reset");
}

function checkWinner() {
  if (parseInt(humanScore.textContent) >= 5) {
    declareWinner("player");
  } else if (parseInt(computerScore.textContent) >= 5) {
    declareWinner("computer");
  }
}

function updateScore(result) {
  if (result === "win") {
    humanScore.textContent = parseInt(humanScore.textContent) + 1;
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

  humanChoiceDisplay.textContent = humanChoice;
  computerChoiceDisplay.textContent = computerChoice;

  const result = playRound(humanChoice, computerChoice);

  updateScore(result);

  if (hasWinner) {
    return;
  }

  switch (result) {
    case "win":
      resultPara.textContent = `You win! ${capitalizeFirstLetter(humanChoice)} beats ${capitalizeFirstLetter(computerChoice)}`;
      break;
    case "loose":
      resultPara.textContent = `You loose. ${capitalizeFirstLetter(humanChoice)} looses against ${capitalizeFirstLetter(computerChoice)}`;
      break;
    case "tie":
      resultPara.textContent = `You tied. ${capitalizeFirstLetter(humanChoice)} ties ${capitalizeFirstLetter(computerChoice)}`;
  }
});

const resultText = document.querySelectorAll(".result-text");

resetGameBtn.addEventListener("click", () => {
  humanScore.textContent = "0";
  computerScore.textContent = "0";
  hasWinner = false;
  humanChoiceDisplay.textContent = "";
  computerChoiceDisplay.textContent = "";
  resultPara.textContent = "";

  resetGameBtn.classList.remove("show-reset");
});
