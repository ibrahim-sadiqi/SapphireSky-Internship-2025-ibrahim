// Convert Decimal to Binary
// Implement decimalToBinary(n), which converts a decimal number to its binary equivalent.

const decimalToBinary = function (n) {
  let binanry = "";
  while (n >= 1) {
    binanry = (n % 2) + binanry;
    n = Math.trunc(n / 2);
  }
  return binanry;
};

console.log(decimalToBinary(15));
