// Take two numbers and an operator (+, -, *, /).
// Use switch to perform the correct operation and return the result.

function simpleCalculator(n1, n2, op) {
  switch (op) {
    case "+":
      return n1 + n2;
    case "-":
      return n1 - n2;
    case "*":
      return n1 * n2;
    case "/":
      return n1 / n2;
    default:
      return "Wrong operator!";
  }
}

console.log(simpleCalculator(4, 5, "+"));
