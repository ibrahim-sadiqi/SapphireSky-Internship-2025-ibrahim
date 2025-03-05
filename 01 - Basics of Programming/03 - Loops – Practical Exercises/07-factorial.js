// Factorial of a Number
// Implement a function that calculates the factorial of a number using a loop.

const number = 5;
function factorial(number) {
  if (number === 0) return 1;
  let fac = 1;
  for (let i = number; i > 1; i--) {
    fac *= i;
  }
  return fac;
}
console.log(factorial(number));
