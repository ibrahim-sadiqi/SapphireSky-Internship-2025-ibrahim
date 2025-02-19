const number = Number(prompt('Enter a number:'))

for (let i = 1; i <= 10; i++) {
    console.log(`${i} x ${number}: ${i * number}`)
}