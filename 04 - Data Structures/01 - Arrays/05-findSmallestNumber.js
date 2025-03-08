// 5. Implement a function to find the smallest number in an array.

function getSmallestNumber(arr) {
  let smallest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < smallest) smallest = arr[i];
  }
  return smallest;
}

function testCase(result, expected) {
  return result === expected;
}
const arr = [2, -3, 0, 4, -1];
console.log(testCase(getSmallestNumber(arr), -3)); // should print true
console.log(testCase(getSmallestNumber(arr), 0)); // should print false
