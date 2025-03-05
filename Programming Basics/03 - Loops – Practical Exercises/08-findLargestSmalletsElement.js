const arr = [1, 5, 2, 9, 3, 6, 0];

let largest = arr[0];
let smallest = arr[0];

for (let i = 1; i < arr.length; i++) {
  if (largest < arr[i]) largest = arr[i];
  if (smallest > arr[i]) smallest = arr[i];
}

console.log(largest, smallest);
