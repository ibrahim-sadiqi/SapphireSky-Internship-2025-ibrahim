let number = 12345;
let revese = ''
while (number > 0) {
    revese += number % 10;
    number = Math.floor(number / 10);
}

const reveseNumber = Number(revese)
console.log(reveseNumber)