// Factorial of a Number
// Implement a function that calculates the factorial of a number using a loop.

const number = 10;

let fac = 2;
for (let i = number; i > 2; i--) {
  fac *= i;
}

console.log(fac);
