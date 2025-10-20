// 2. Write a function to find the sum of all elements in an array.

function sumAllArrayElements(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum;
}

function testCase(result, expected) {
  return result === expected;
}

const arr = [1, 2, 4, 5];
console.log(testCase(sumAllArrayElements(arr), 12)); // should print true
console.log(testCase(sumAllArrayElements(arr), 10)); // should print false
