// Factorial of a Number
// Implement a function that calculates the factorial of a number using a loop.

const number = 1;

let fac = 1;
for (let i = number; i > 1; i--) {
  fac *= i;
}

console.log(fac);
