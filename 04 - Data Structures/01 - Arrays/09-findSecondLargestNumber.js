// 9. Write a function to find the second largest number in an array.

function getSecondLargest(arr) {
  if (arr.length < 2) return "Array must be bigger than two";
  let largest = arr[0];
  let secondLargest = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] > secondLargest && arr[i] !== largest) {
      secondLargest = arr[i];
    }
  }
  return secondLargest;
}

function getSecondLargest2(arr) {
  const sortedArray = [...new Set(arr)].sort((a, b) => b - a);
  return sortedArray[1];
}
const arr = [-10, -20, -40, -2, -1];
// The first method is more efficient because it has lower time complexity and space complexity.
console.log(getSecondLargest(arr)); // time complixity O(n) and space complixity O(1)
console.log(getSecondLargest2(arr)); // time complixity O(n log n) and space complixity O(n)
