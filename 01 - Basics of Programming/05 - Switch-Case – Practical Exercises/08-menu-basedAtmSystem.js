// Menu-Based ATM System
// Display a menu with options:
// 1 → Check Balance
// 2 → Withdraw Money
// 3 → Deposit Money
// 4 → Exit
// Use switch to perform the correct action based on the user’s choice.

let balance = 10000;
let amouunt;

function displayMenu(choice) {
  switch (choice) {
    case 1:
      console.log("Check Balance");
      break;
    case 2:
      console.log("Withdraw Money");
      break;
    case 3:
      console.log("Deposit Money");
      break;
    case 4:
      return;
  }
}

displayMenu(1);
