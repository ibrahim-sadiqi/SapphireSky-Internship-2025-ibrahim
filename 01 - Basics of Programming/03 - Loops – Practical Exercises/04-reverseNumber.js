// Reverse a Number
// Given an integer, reverse its digits. (Example: 1234 → 4321)

let number = 12345;
let revesed = 0;
while (number > 0) {
  revesed = revesed * 10 + (number % 10);
  number = Math.trunc(number / 10);
}

const reveseNumber = revesed;
console.log(reveseNumber);
