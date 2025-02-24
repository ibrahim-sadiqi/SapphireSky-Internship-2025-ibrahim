const gcd = function (a, b) {
  if (a === 0) {
    return b;
  } else if (b === 0) {
    return a;
  }
  return gcd(b, a % b);
};
console.log(gcd(270, 192));
