// 15. Implement a function to convert a given sentence into its abbreviation
//  ("I am learning JavaScript" → "I a l J").

function getAbbreviation(str) {
  const abb = str
    .split(" ")
    .map((word) => word[0])
    .join(" ");

  return abb;
}

console.log(getAbbreviation("I am learning JavaScript"));
