let number = 8208;

const getDigitsCount = function (number) {
    let counter = 0
    while (number > 0) {
        counter++;
        number = Math.floor(number / 10);
    }
    return counter
}

function isArmstrong(number) {
    const firstNumber = number;
    // change to string and get the length.
    const digitCount = String(firstNumber).length;
    // Or, we can write our own function without converting to  
    // a string to get the number of digits.
    //const digitCount = getDigitsCount(firstNumber);
    let sum = 0;
    while (number > 0) {
        sum += (number % 10) ** digitCount;
        number = Math.floor(number / 10);
    }
    return firstNumber === sum;
}

console.log(isArmstrong(number));
