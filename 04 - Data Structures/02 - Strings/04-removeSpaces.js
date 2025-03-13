// 4. How do you remove spaces from a given string?

function removeSpaces(str) {
  let newString = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " ") {
      newString += str[i];
    }
  }
  return newString;
}

const removeSpaces2 = (str) => str.replaceAll(" ", "");

const removeSpaces3 = (str) => str.split(" ").join("");

console.log(removeSpaces("It will remove spaces"));
console.log(removeSpaces2("It will remove spaces"));
console.log(removeSpaces3("It will remove spaces"));
