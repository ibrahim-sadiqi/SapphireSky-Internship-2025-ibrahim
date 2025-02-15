1. What is the difference between var, let, and const in JavaScript?

--> Var is function-scoped, which we can access in the function for each scope and only

accessible in a function that had already been declared. Additionally, we can redeclare this variable.

--> Let is block-scoped, which can only be accessed in the scope that had already been declared, but

We cannot redeclare the variable.

--> Const is block-scoped and immutable, which means this variable is block-scoped, which we can

only the scope we had already defined. But we can redeclare and change the value of it.

2. Write a function to check if a number is even or odd

var number = 5;
check_even_odd(num){
	if (num % 2 == 0) {
		console.log('Number is even')
	}else if (num % 2 != 0) {
		console.log('Number is  odd')
}

3. Explain the difference between == and === in JavaScript.
The "===" operator compares both content and type meanwhile the "==" compares only content.

4. Write a program that takes user input and prints whether it is a positive, negative, or zero.

let number = prompt('Enter a number')
if (number > 0 ){
	console.log('Positive')
}else if (number < 0){
	console.log('Negative')
}else{
	console.log('Zero')
}

6. Write a function that calculates the factorial of a given number.
7. How does this keyword work in JavaScript? Provide an example.