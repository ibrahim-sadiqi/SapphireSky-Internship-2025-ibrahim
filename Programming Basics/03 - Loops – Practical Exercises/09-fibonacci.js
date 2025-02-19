const fibo = 150;

let first = 0;
let second = 1;

while (second < fibo) {
    console.log(second)
    third = first + second;
    first = second;
    second = third;
}
