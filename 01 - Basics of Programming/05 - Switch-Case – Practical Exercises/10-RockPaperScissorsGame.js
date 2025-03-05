// Rock, Paper, Scissors Game
//      The user inputs "rock", "paper", or "scissors".
//      The computer randomly selects one.
//      Use switch to determine the winner.

const userInput = ["rock", "paper", "scissors"];
const randomIndex = Math.trunc(Math.random() * userInput.length);
const randomChoice = userInput[randomIndex];

function checkWinner(choice) {
  switch (choice) {
    case "rock":
      return "Rock is winner!";
    case "paper":
      return "Paper is winner!";
    case "scissors":
      return "Scissors is winner!";
  }
}

console.log(checkWinner(randomChoice));
