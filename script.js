function getComputerChoice() {
  let choiceIndex = Math.floor(Math.random() * 10) % 3;
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

function getHumanChoice() {
  let choice = window.prompt("Rock / Paper / Scissors");
  return choice.toLowerCase();
}

let playerScore = 0;
let computerScore = 0;

function playRound() {
  const computerChoice = getComputerChoice();
  const humanChoice = getHumanChoice();

  if (humanChoice === computerChoice) {
    console.log(
      `You tied! ${humanChoice[0].toUpperCase() + humanChoice.slice(1)} equals ${computerChoice[0].toUpperCase() + humanChoice.slice(1)}`,
    );
    return;
  }
  if (computerChoice === "rock") {
    if (humanChoice === "paper") {
      console.log("You win! Paper beats Rock.");
      playerScore++;
    } else {
      console.log("You loose! Rock beats Scissors.");
      computerScore++;
    }
  }
  if (computerChoice === "paper") {
    if (humanChoice === "scissors") {
      console.log("You win! Scissors beats Paper.");
      playerScore++;
    } else {
      console.log("You loose! Paper beats Rock.");
      computerScore++;
    }
  }
  if (computerChoice === "scissors") {
    if (humanChoice === "rock") {
      console.log("You win! Rock beats Scissors.");
      playerScore++;
    } else {
      console.log("You loose! Scissors beats Paper.");
      computerScore++;
    }
  }
}
