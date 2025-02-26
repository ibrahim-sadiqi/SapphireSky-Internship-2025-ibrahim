// Number Guessing Game
// - The program randomly selects a number between 1 and 100.
// - The user must guess the number.
// - The program gives hints like "Too High" or "Too Low".
// - The loop continues until the user guesses correctly.

let guess = Number(prompt("Enter a number:"));

let n = Math.trunc(Math.random() * 100) + 1;

while (guess !== n) {
  if (guess > n) {
    console.log("Too High.");
  } else {
    console.log("Too Low.");
  }
  guess = Number(prompt("Enter a number:"));
}
console.log("You got it!!!!");
