const decimalToBinary = function (n) {
  let binanry = "";
  while (n >= 1) {
    binanry += n % 2;
    n = Math.trunc(n / 2);
  }
  let revers = "";
  for (let i = binanry.length - 1; i >= 0; i--) {
    revers += binanry[i];
  }
  return revers;
};

console.log(decimalToBinary(8));
