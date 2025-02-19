let number = 10;

let steps = 0;
while (number !== 1) {

    if (number % 2 === 0) {
        number /= 2;
    } else if (number % 2 !== 0) {
        number = number * 3 + 1;
    }
    steps++;
}

console.log('steps', steps)
