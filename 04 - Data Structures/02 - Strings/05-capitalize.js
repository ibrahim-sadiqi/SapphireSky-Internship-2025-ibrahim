// 5. Write a function to capitalize the first letter of each word in a string.

function capitalize(str) {
  const capitalize = [];
  for (const item of str.split(" ")) {
    const lowerItem = item.toLowerCase();
    capitalize.push(
      lowerItem.replace(lowerItem[0], lowerItem[0].toUpperCase())
    );
  }
  return capitalize.join(" ");
}

console.log(capitalize("it will capitAlize the First woRd"));
