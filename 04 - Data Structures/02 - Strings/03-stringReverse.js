// 3. Write a function to reverse a string.

function customReverse(str) {
  //  Time complexity O(n)
  //  Space complexity O(n)
  const arr = [...str];
  let start = 0;
  let end = arr.length - 1;
  while (start < end) {
    [arr[start], arr[end]] = [arr[end], arr[start]];
    start++;
    end--;
  }
  return arr.join("");
}

console.log(customReverse("abcd efgi"));
