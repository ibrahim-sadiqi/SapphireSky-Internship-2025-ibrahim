// ATM Withdrawal
// A person wants to withdraw money from an ATM.
// If the withdrawal amount is a multiple of 10, allow withdrawal.
// If not, print an error message.
// If the account balance is less than the withdrawal amount, print "Insufficient Funds".

let account = 50000;
let withdrawalAmount = 60000;

if (withAmount % 10 == 0) {
  if (withdrawalAmount <= account) {
    console.log("Take your money!");
  } else {
    console.log("Insufficient Funds");
  }
} else {
  console.log("Oops, invalid ammount!");
}
