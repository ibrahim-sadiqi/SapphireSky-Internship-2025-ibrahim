// Count Digits in a Number
// Take a number as input and count how many digits it has.

let number = Number(prompt("Enter the number:"));

let counter = 0;
while (number > 0) {
  counter++;
  number = Math.trunc(number / 10);
}

console.log(counter);
