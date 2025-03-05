// Check Odd or Even
//      Write a program that takes a number as input and checks if it is odd or even.

let number = Number(prompt("Enter a number:"));

if (number % 2 == 0) {
  console.log(`${number} is an even number!`);
} else {
  console.log(`${number} is an odd number!`);
}
