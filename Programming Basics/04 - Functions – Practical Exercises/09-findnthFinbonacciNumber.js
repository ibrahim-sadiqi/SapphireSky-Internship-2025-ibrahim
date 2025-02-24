function finbonacci(n) {
  if (n <= 1) {
    return n;
  } else {
    return finbonacci(n - 1) + finbonacci(n - 2);
  }
}

function finbonacci2(n) {
  let first = 0;
  let second = 1;
  let third = second;
  let counter = 1;
  while (counter < n - 1) {
    counter++;
    first = second;
    second = third;
    third = first + second;
  }
  return third;
}

console.log(finbonacci(18));
