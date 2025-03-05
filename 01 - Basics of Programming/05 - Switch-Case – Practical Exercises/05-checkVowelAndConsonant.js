// Check for Vowel or Consonant
//      Take a letter as input.
//      Use switch to determine whether it is a vowel or a consonant.

function isVowel(letter) {
  switch (true) {
    case letter === "a" || letter === "A":
      return true;
    case letter === "e" || letter === "E":
      return true;
    case letter === "i" || letter === "I":
      return true;
    case letter === "o" || letter === "O":
      return true;
    case letter === "u" || letter === "U":
      return true;
    default:
      return false;
  }
}

console.log(isVowel("b"));
