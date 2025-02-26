// Reverse a String
// Implement reverseString(str), which takes a string and returns it reversed.
// Example: "hello" → "olleh"

function reverseString(str) {
  let revers = "";
  for (let i = str.length - 1; i >= 0; i--) {
    revers += str[i];
  }
  return revers;
}
console.log(reverseString("abcd"));
