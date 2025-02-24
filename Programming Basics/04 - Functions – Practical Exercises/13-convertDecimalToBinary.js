const decimalToBinary = function (n) {
  let binanry = "";
  while (n >= 1) {
    binanry = (n % 2) + binanry;
    n = Math.trunc(n / 2);
  }
  return binanry;
};

console.log(decimalToBinary(15));
