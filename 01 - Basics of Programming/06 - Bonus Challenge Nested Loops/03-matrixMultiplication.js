// Matrix Multiplication
// Given two matrices, multiply them using nested loops.

const firstMatrix = [
  [4, 5, 4],
  [1, 2, 3],
  [9, 6, 4],
];

const secondMatrix = [
  [4, 5],
  [2, 9],
  [3, 1],
];

function multiplyMatrix(arr1, arr2) {
  if (arr1[0].length !== arr2.length) {
    return "Amxn === Bnxm";
  }
  const row = firstMatrix.length;
  let multiplyArr = Array.from({ length: row }, () =>
    Array(arr2[0].length).fill(0)
  );

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < arr2[0].length; j++) {
      let temp = 0;
      for (let k = 0; k < arr2.length; k++) {
        temp += arr1[i][k] * arr2[k][j];
      }
      multiplyArr[i][j] = temp;
    }
  }
  return multiplyArr;
}

console.log(multiplyMatrix(firstMatrix, secondMatrix));
