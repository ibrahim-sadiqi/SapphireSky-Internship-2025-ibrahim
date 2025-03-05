// Fibonacci Sequence
// Print the first N Fibonacci numbers using a loop.

const n = 10;

let first = 0;
let second = 1;
let third = second;
let counter = 1;
console.log(third);
while (counter < n) {
  console.log(third);
  counter++;
  first = second;
  second = third;
  third = first + second;
}
