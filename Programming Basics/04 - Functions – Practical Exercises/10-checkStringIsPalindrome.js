// Check if a String is a Palindrome
// Write a function isPalindrome(str) that returns true if the given string is a palindrome.
// Example: "racecar" → true, "hello" → false

function isPalindrome(str) {
  let revers = "";
  for (let i = str.length - 1; i >= 0; i--) {
    revers += str[i];
  }
  return revers === str;
}

console.log(isPalindrome("racecar"));
