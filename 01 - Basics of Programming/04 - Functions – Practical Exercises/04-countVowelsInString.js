// Count Vowels in a String
// Write a function countVowels(str) that takes a string and returns the number of vowels in it

function countVowels(str) {
  const newStr = str.toLowerCase();
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (
      str[i] === "a" ||
      str[i] === "e" ||
      str[i] === "i" ||
      str[i] === "o" ||
      str[i] === "u"
    ) {
      count++;
    }
  }
  return count;
}

console.log(countVowels("checkCountofStringsVowels")); // 7
