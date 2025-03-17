// 15. Write a function to rearrange an array such that even numbers appear before odd numbers.

function rearrange(arr) {
  const even = [];
  const odd = [];
  for (const item of arr) {
    if (item % 2 === 0) even.push(item);
    else odd.push(item);
  }
  return [...even, ...odd];
}

function rearrange2(arr) {
  let evenIndex = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      if (evenIndex !== i) {
        [arr[evenIndex], arr[i]] = [arr[i], arr[evenIndex]];
      }
      evenIndex++;
    }
  }
  return arr;
}

const arr = [4, 5, -1, 6, 0, -10, -13, 100, 99, 3, 2];
console.log(rearrange(arr)); // For stability and maintaining order, it is better choice.
rearrange2(arr); // It is more efficient then first method based on time complixity and space complixity
console.log(arr);
