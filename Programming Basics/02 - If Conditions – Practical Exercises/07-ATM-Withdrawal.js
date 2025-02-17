let account = 50000;
let withdrawalAmount = 60000;

if (withAmount % 10 == 0) {
    if (withdrawalAmount <= account) {
        console.log('Take your money!');
    } else {
        console.log('Insufficient Funds');
    }
} else {
    console.log('Oops, invalid ammount!');
}