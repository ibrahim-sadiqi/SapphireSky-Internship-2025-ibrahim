// Find the Maximum of Three Numbers
// Implement a function maxOfThree(a, b, c) that returns the largest of three numbers.

function maxOfThree(a, b, c) {
  if (a > b && a > c) {
    return a;
  } else if (b > a && b > c) {
    return b;
  } else {
    return c;
  }
}

console.log(maxOfThree(30, 10, 100));
