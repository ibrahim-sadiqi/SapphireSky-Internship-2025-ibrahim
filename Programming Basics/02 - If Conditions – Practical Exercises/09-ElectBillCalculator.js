let billAmmount = 1500;
let billCost = 0;

if (billAmmount <= 100) {
    billCost = billAmmount * 1.50;
} else if (billAmmount <= 200) {
    billCost = 100 * 0.5 + (billAmmount - 100) * 0.75;
} else if (billAmmount <= 500) {
    billCost = 100 * 0.5 + 100 * 0.75 + (billAmmount - 200) * 1.20;
} else {
    billCost = 100 * 0.5 + 100 * 0.75 + 300 * 1.2 + (billAmmount - 500) * 1.50;
}

console.log('Total electricity bill: ' + billCost)