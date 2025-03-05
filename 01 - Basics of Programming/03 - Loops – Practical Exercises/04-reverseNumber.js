// Reverse a Number
// Given an integer, reverse its digits. (Example: 1234 → 4321)

let number = 12345;
let revese = "";
while (number > 0) {
  revese += number % 10;
  number = Math.trunc(number / 10);
}

const reveseNumber = Number(revese);
console.log(reveseNumber);
