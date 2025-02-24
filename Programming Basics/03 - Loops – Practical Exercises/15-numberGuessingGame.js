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
