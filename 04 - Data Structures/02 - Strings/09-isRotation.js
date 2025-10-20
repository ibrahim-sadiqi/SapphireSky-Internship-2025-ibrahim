// 9. How do you check if one string is a rotation of another string?

function isRotation(firstString, rotatedString) {
  if (rotatedString === firstString) return true;
  if (rotatedString.length !== firstString.length) return false;
  const rotated = [...firstString];

  for (let j = 1; j <= firstString.length; j++) {
    let temp = rotated.at(-1);
    for (let i = rotated.length - 1; i >= 0; i--) {
      rotated[i] = rotated[i - 1];
    }
    rotated[0] = temp;
    if (rotatedString === rotated.join("")) return true;
  }

  return false;
}

const isRotation2 = (original, rotated) =>
  original.length === rotated.length && (original + original).includes(rotated);

console.log(isRotation2("abcd", "dabc"));
console.log(isRotation("abcd", "dabc"));
