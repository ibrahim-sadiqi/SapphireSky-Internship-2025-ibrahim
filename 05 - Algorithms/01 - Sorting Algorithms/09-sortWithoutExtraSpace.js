// 9. How can you sort an array of 0s, 1s, and 2s without extra space?

function sortWithThreeVariable(arr) {
  let c = 0;
  let s = new Array(3).fill(0);
  for (let l = 0; l < arr.length; l++) {
    if (arr[l] === 0) s[0]++;
    else if (arr[l] === 1) s[1]++;
    else s[2]++;
  }

  let index = 0;
  for (let i = 0; i < 4; i++) {
    while (s[i] > 0) {
      arr[index++] = i;
      s[i]--;
    }
  }
}

function sortWithThreePointer(arr) {
  let low = (mid = 0);
  let high = arr.length - 1;

  while (mid <= high) {
    if (arr[mid] === 0) {
      [arr[mid], arr[low]] = [arr[low], arr[mid]];
      low++;
      mid++;
    } else if (arr[mid] === 1) {
      mid++;
    } else {
      [arr[mid], arr[high]] = [arr[high], arr[mid]];
      high--;
    }
  }
  console.log(c);
}

let arr = [0, 1, 0, 2, 0, 0, 1, 2];
sortWithoutExtraSpace(arr); // Time complexity O(n + n) Space Complexity is O(3)
sortWithThreePointer(arr); // This algorithm is more efficient O(n) and no space complexity
console.log(arr);
