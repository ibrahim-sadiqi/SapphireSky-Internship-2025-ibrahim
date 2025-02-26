// Pattern Printing - Pyramid
// Write a program that prints this pattern for N = 5:
//
//    *
//   ***
//  *****
// *******

const n = 5;

for (let i = 1; i < n; i++) {
  for (let j = n; j > i; j--) {
    process.stdout.write(" ");
  }
  for (let k = 1; k < i + i; k++) {
    process.stdout.write("*"); // print starts in one line
  }
  console.log(); // break the line
}
