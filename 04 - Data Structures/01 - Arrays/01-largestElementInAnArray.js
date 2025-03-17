// 1. Write a function to find the largest element in an array.

function getLargestElement(arr) {
  let largest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) largest = arr[i];
  }
  return largest;
}

function testCase(result, expected) {
  return result === expected;
}
const arr = [2, 3, 5, 6, 13, 10, 11, 3];
console.log(testCase(getLargestElement(arr), 13)); // should print true
console.log(testCase(getLargestElement(arr), 10)); // should print false
