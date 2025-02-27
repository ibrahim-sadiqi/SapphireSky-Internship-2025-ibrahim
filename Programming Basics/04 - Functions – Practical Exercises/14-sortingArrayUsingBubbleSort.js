// Sorting an Array Using Bubble Sort
// Write a function bubbleSort(arr) that sorts an array using the Bubble Sort algorithm.

function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }
  }
  return arr;
}

let arr = [1, 4, 0, 2, 11, 12, 3, 10, 5];

console.log(bubbleSort(arr));
