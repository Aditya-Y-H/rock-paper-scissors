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

function playRound(computerChoice, humanChoice) {
  console.log(
    `You Chose: ${humanChoice}. The computer chose: ${computerChoice}`,
  );
  if (humanChoice === computerChoice) {
    console.log(
      `You tied! ${humanChoice[0].toUpperCase() + humanChoice.slice(1)} equals ${computerChoice[0].toUpperCase() + humanChoice.slice(1)}`,
    );
    return "tie";
  }
  if (computerChoice === "rock") {
    if (humanChoice === "paper") {
      console.log("You win! Paper beats Rock.");
      return "win";
    }
    console.log("You loose! Rock beats Scissors.");
    return "loose";
  }
  if (computerChoice === "paper") {
    if (humanChoice === "scissors") {
      console.log("You win! Scissors beats Paper.");
      return "win";
    }
    console.log("You loose! Paper beats Rock.");
    return "loose";
  }
  if (computerChoice === "scissors") {
    if (humanChoice === "rock") {
      console.log("You win! Rock beats Scissors.");
      return "win";
    }
    console.log("You loose! Scissors beats Paper.");
    return "loose";
  }
}

function playGame() {
  let playerScore = 0;
  let computerScore = 0;

  const rounds = 5;

  for (let i = 0; i < rounds; i++) {
    let computerChoice = getComputerChoice();
    let humanChoice = getHumanChoice();

    let result = playRound(computerChoice, humanChoice);
    if (result === "win") {
      playerScore++;
    } else if (result === "loose") {
      computerScore++;
    }
  }

  if (playerScore > computerScore) {
    console.log(
      `Congrats! You won the game!\nYour Score: ${playerScore}\nComputer Score: ${computerScore}`,
    );
  } else if (playerScore < computerScore) {
    console.log(
      `You lost. Better luck next time.\nYour Score: ${playerScore}\nComputer Score: ${computerScore}`,
    );
  } else {
    console.log(
      `Tie!\nYour Score: ${playerScore}\nComputer Score: ${computerScore}`,
    );
  }
}
