// Reverse a String
// Implement reverseString(str), which takes a string and returns it reversed.
// Example: "hello" → "olleh"

function reverseString(str) {
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

console.log(reverseString("hello"));
