// function sort(arr) {
//   for (let i = 0; i < arr.length - 1; i++) {
//     let small = i;
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[j] < arr[small]) {
//         small = j;
//       }
//     }

//     temp = arr[i];
//     arr[i] = arr[small];
//     arr[small] = temp;
//   }
//   return arr;
// }

function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}

let arr = [1, 4, 0, 2, 11, 12, 3, 10, 5];

console.log(bubbleSort(arr));
//console.log(un(arr));
