let number = Number(prompt('Enter the number:'));

let counter = 0
while (number > 0) {
    counter++;
    number = Math.floor(number / 10);
}

console.log(counter)