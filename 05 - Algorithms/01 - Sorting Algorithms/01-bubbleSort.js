// 1. Implement the Bubble Sort algorithm.

function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let swaped = false;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
        swaped = true;
      }
    }
    if (!swaped) break;
  }
  return arr;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8];

console.log(bubbleSort(arr));
