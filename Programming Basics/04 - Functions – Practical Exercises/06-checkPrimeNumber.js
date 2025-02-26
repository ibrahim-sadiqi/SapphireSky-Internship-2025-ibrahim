// Check if a Number is Prime
// Write a function isPrime(n) that returns true if n is a prime number and false otherwise.

function isPrime(n) {
  for (let i = 2; i < n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}

console.log(isPrime(19));
