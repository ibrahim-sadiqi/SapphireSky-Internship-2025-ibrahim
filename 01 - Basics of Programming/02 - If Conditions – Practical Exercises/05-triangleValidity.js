// Triangle Validity
// Given three sides of a triangle, check if they form a valid triangle.
// The sum of any two sides must be greater than the third.

let a = 10;
let b = 3;
let c = 5;

if (a + b > c && a + c > b && b + c > a) {
  console.log("Valid triangle!");
} else {
  console.log("Not valid!");
}
