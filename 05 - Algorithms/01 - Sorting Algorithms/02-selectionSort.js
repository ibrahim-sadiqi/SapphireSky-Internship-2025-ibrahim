// 2. How does Selection Sort work? Implement it.
/* Selection sort is an in-place sorting algorithm that divides the array into two parts:
a sorted portion and an unsorted portion. Initially, the sorted portion is empty,
and the unsorted portion contains all the elements.
The algorithm repeatedly selects the smallest value from the unsorted portion
and moves it to the end of the sorted portion. This process continues until the entire array is sorted.

The time complexity of selection sort is O(n^2) because it uses two nested loops to compare and place each element. */

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    [arr[i], arr[min]] = [arr[min], arr[i]];
  }
  return arr;
}

let arr = [4, 5, 0, 2, 6, 1, -1, 3];
console.log(selectionSort(arr));
