const n = 5;

for (let i = 1; i < n; i++) {
    for (let j = n; j > i; j--) {
        console.log(' ')// print spaces in one line
    }
    for (let k = 1; k < i + i; k++) {
        console.log('*')// print starts in one line
    }
    console.log()// break the line
}


