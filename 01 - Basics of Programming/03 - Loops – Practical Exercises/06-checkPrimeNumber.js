// Check for Prime Number
// Write a program that takes a number as input and checks if it is prime.

const number = 11;

function isPrime(number) {
  for (let i = 2; i < Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(isPrime(number));
