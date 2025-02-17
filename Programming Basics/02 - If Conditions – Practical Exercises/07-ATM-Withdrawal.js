let account = 50000;
let withAmount = 60000;

if (withAmount % 10 == 0) {
    if (withAmount <= account) {
        console.log('Take your money!');
    } else {
        console.log('Insufficient Funds');
    }
} else {
    console.log('Oops, invalid ammount!');
}