let number = 121;
let firstNumber = number;
let revese = ''
while (number > 0) {
    revese += number % 10;
    number = Math.floor(number / 10);
}

const reveseNumber = Number(revese);

if (reveseNumber === firstNumber) {
    console.log(`${firstNumber} is a palindrome number.`)
} else {
    console.log(`${firstNumber} is not palindrome number.`)
}