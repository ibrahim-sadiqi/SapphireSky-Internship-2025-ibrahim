// Password Strength Checker
// A strong password must:
// Be at least 8 characters long.
// Contain at least one uppercase letter, one lowercase letter, and one number.
// Write a program that checks if a given password is strong or weak.

let pass = "1111111a1AAA";
let strong = false;
if (pass.length >= 8) {
  let isUpper = false;
  let isLower = false;
  let isNumber = false;
  for (i = 0; i < pass.length; i++) {
    c = pass[i].charCodeAt(0);
    if (c >= 65 && c <= 90) {
      isUpper = true;
    } else if (c >= 97 && c <= 122) {
      isLower = true;
    } else if (c >= 49 && c <= 57) {
      isNumber = true;
    }
    if (isUpper && isLower && isNumber) {
      strong = true;
      break;
    }
  }
}

console.log(strong);
