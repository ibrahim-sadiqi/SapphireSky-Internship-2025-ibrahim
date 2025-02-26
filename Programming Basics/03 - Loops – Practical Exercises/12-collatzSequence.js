// Collatz Sequence (Hailstone Numbers)
//  Take a number n.
//  If n is even, divide it by 2.
//  If n is odd, multiply it by 3 and add 1.
//  Repeat this process until n = 1.
//  Count how many steps it takes to reach 1.

let number = 10;

let steps = 0;
while (number !== 1) {
  if (number % 2 === 0) {
    number /= 2;
  } else if (number % 2 !== 0) {
    number = number * 3 + 1;
  }
  steps++;
}

console.log("steps", steps);
