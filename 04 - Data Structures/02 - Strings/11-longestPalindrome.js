// 11. Implement a function to find the longest palindrome substring in a string.

function findLongestPalindrome(str) {
  let p = "";
  let k = (j = 0);
  for (let i = 0; i < str.length; i++) {
    for (let l = 0; l <= 1; l++) {
      k = i;
      j = i + l;
      while (k >= 0 && j < str.length && str[k] === str[j]) {
        k--;
        j++;
      }

      let current = str.slice(k + 1, j);
      if (current.length > p.length) p = current;
    }
  }
  return p;
}

console.log(findLongestPalindrome("abbbb"));
