const n = 5;

// n = 5
// for i in range(1, n):
//     for j in range(n, i, -1):
//         print(' ', end = '')

//     for k in range(1, i + i):
//         print('*', end = '')
//     print()

for (let i = 1; i < n; i++) {
    for (let j = n; j > i; j--) {
        console.log(' ')// print spaces in one line
    }
    for (let k = 1; k < i + i; k++) {
        console.log('*')// print starts in one line
    }
    console.log()// break the line
}


