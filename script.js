function getComputerChoice() {
  choiceIndex = Math.floor(Math.random() * 10) % 3;
  switch (choiceIndex) {
    case 0:
      return "Rock";
    case 1:
      return "Paper";
    case 2:
      return "Scissors";
    default:
      throw Error("Random number is greater or less than allowed range.");
  }
}

console.log(getComputerChoice());
