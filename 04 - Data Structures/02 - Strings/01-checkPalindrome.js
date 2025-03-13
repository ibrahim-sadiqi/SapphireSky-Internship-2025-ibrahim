// 1. Write a function to check if a string is a palindrome.

function isPalindrome(str) {
  let start = 0;
  let end = str.length - 1;
  while (start < end) {
    if (str[start++] !== str[end--]) return false;
  }
  return true;
}

console.log(isPalindrome("ababab"));
