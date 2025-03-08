// 6. Write a function to reverse an array without using the built-in reverse() method.

function reverse(arr) {
  let i = 0;
  let j = arr.length - 1;
  while (j > i) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
    i++;
    j--;
  }
  return arr;
}

function testCase(result, expected) {
  if (result.length !== expected.length) return false;
  for (let i = 0; i < result.length; i++) {
    if (result[i] !== expected[i]) return false;
  }
  return true;
}

//const arr = ["ali", "ibrahim", "mohammad"];
const arr = [1, 2, 3, 4, 5, 6, 7, 10, -1];
const neArr = [...arr]; // copy

console.log(testCase(reverse(arr), neArr.reverse())); // should print true
