let billAmmount = 450;
let billCost = 0;

if (billAmmount < 101) {
    billCost = billAmmount * 1.50;
} else if (billAmmount < 201) {
    billCost = 100 * 0.5;
    billAmmount -= 100;
    billCost += billAmmount * 0.75;
} else if (billAmmount <= 500) {
    billCost = 100 * 0.5;
    billAmmount -= 100;
    billCost += 100 * 0.75;
    billAmmount -= 100;
    billCost += billAmmount * 1.20;
} else {
    billCost = 100 * 0.5;
    billAmmount -= 100;
    billCost += 100 * 0.75;
    billAmmount -= 100;
    billCost += 300 * 1.20;
    billAmmount -= 300;
    billCost += billAmmount * 1.50;
}

console.log('Total electricity bill: ' + billCost)