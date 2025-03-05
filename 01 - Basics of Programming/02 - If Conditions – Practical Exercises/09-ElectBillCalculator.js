// Electricity Bill Calculator
// Units Consumed:
// Up to 100 units: $0.50 per unit
// 101 to 200 units: $0.75 per unit
// 201 to 500 units: $1.20 per unit
// Above 500 units: $1.50 per unit
// Write a program that calculates the total electricity bill.

let billAmmount = 1500;
let billCost = 0;

if (billAmmount <= 100) {
  billCost = billAmmount * 1.5;
} else if (billAmmount <= 200) {
  billCost = 100 * 0.5 + (billAmmount - 100) * 0.75;
} else if (billAmmount <= 500) {
  billCost = 100 * 0.5 + 100 * 0.75 + (billAmmount - 200) * 1.2;
} else {
  billCost = 100 * 0.5 + 100 * 0.75 + 300 * 1.2 + (billAmmount - 500) * 1.5;
}

console.log("Total electricity bill: " + billCost);
