// Roman Numeral Converter
//      Take an integer (1-10) as input.
//      Use switch to print the corresponding Roman numeral.

function convertToRoman(num) {
  switch (num) {
    case 1:
      return "I";
    case 2:
      return "II";
    case 3:
      return "III";
    case 4:
      return "IV";
    case 5:
      return "V";
    case 6:
      return "VI";
    case 7:
      return "VII";
    case 8:
      return "VIII";
    case 9:
      return "IX";
    case 10:
      return "X";
    default:
      return "Invalid number! Please enter a number between 1 and 10.";
  }
}

console.log(convertToRoman(9));
