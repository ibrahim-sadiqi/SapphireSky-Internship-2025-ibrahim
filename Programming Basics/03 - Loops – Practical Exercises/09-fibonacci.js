const n = 10;

let first = 0;
let second = 1;
let third = second;
console.log(third);
while (counter < n) {
  console.log(third);
  first = second;
  second = third;
  third = first + second;
}
