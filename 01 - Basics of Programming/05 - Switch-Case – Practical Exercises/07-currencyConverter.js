// Currency Converter
//      Take a currency code ("USD", "EUR", "INR", "JPY").
//      Use switch to print the conversion rate relative to a base currency (e.g., USD).

function currencyCode(code) {
  switch (code) {
    case "USD":
      return "1 USD is 72.95 Afs";
    case "EUR":
      return "1 EUR is 77.21 Afs";
    case "INR":
      return "1 INR is 0.84 Afs";
    case "JPY":
      return `1 JPY is 0.48 Afs`;
    default:
      return "Invalid currency code!";
  }
}

console.log(currencyCode("JPY"));
