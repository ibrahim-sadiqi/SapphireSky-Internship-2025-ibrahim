// Pascal’s Triangle
// Generate Pascal’s Triangle up to N rows.

function generatePascalTriangle(rows) {
  let arr = Array.from({ length: rows }, () => Array(rows).fill(1));

  for (let i = 2; i < rows; i++) {
    for (let j = 1; j < i; j++) {
      arr[i][j] = arr[i - 1][j - 1] + arr[i - 1][j];
    }
  }
  return arr;
}

function printPascalTriangle(tri) {
  const rows = tri.length;
  for (let i = 0; i < rows; i++) {
    for (let j = rows; j >= i; j--) {
      process.stdout.write(" ");
    }
    for (let k = 0; k <= i; k++) {
      process.stdout.write(` ${tri[i][k]}`);
    }
    console.log();
  }
}
const pascalTriangle = generatePascalTriangle(6);
printPascalTriangle(pascalTriangle);
