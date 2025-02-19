
function gcd(a, b) {
    let gcd = 0;
    let smaller = 0;
    let larger = 0;

    if (a < b) {
        smaller = a;
        larger = b;
    } else {
        smaller = b;
        larger = a;
    }

    for (let i = 2; i < smaller; i++) {
        if ((smaller % i === 0) && (larger % i === 0)) {
            gcd = i;
        }
    }
    return gcd;
}

console.log(gcd(16000, 1880))