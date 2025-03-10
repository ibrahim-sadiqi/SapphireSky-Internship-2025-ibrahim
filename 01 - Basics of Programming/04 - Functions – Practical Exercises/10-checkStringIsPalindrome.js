// Check if a String is a Palindrome
// Write a function isPalindrome(str) that returns true if the given string is a palindrome.
// Example: "racecar" → true, "hello" → false

function isPalindrome2(str) {
  const strL = str.toLowerCase().replaceAll(" ", "");
  let start = 0;
  let end = strL.length - 1;
  while (start < end) {
    if (strL[start++] !== strL[end--]) return false;
  }
  return true;
}
console.log(isPalindrome("Was it a car or a cat I saw"));
console.log(isPalindrome2("Was it a car or a cat I saw"));
