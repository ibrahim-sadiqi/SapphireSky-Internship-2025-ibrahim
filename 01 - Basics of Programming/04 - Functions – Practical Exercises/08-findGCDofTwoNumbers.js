// Find the GCD of Two Numbers
// Write a function gcd(a, b) that finds the Greatest Common Divisor (GCD) using the Euclidean algorithm.

const gcd = function (a, b) {
  if (a === 0) {
    return b;
  } else if (b === 0) {
    return a;
  }
  return gcd(b, a % b);
};
console.log(gcd(270, 192));
