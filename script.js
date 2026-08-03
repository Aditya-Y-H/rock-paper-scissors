// const prompt = require("prompt-sync")();

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
