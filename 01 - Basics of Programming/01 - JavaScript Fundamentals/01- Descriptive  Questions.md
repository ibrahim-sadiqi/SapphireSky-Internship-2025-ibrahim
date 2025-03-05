1.  What is the difference between var, let, and const in JavaScript?

    --> Var is function-scoped, which we can access in the function for each scope and only
    accessible in a function that had already been declared. Additionally, we can redeclare this variable.

    --> Let is block-scoped, which can only be accessed in the scope that had already been declared, but
    We cannot redeclare the variable.

    --> Const is block-scoped and immutable, which means this variable is block-scoped, which we can
    only the scope we had already defined. But we can redeclare and change the value of it.

2.  Write a function to check if a number is even or odd

    let number = 5;
    isEven(num){

        return num % 2 === 0;

    }

3.  Explain the difference between == and === in JavaScript.
    The "===" operator compares both content and type meanwhile the "==" compares only content. Additionally,
    it is recommended to always use "===" to avoid errors and bogs in the program👀.
    ex:
    18 === 18 \\true '18' === 18 \\ false but 18 == '18' \\ true

4.  Write a program that takes user input and prints whether it is a positive, negative, or zero.

    let number = Number(prompt('Enter a number'));
    if (number > 0 ){

        console.log('Positive');

    }else if (number < 0){

        console.log('Negative');

    }else{

        console.log('Zero');

    }

5.  What are JavaScript closures? Provide an example.
    A closure in JavaScript is a function that remembers variables from its outer scope even after the outer
    function has finished executing. This allows functions to "remember" and access variables even when they are
    called outside of their original scope.
    ex:
    function counter() {
    let count = 0;

        	return function() {
        		count++;
        		console.log('Current count:',count)
        	}

    }

6.  Write a function that calculates the factorial of a given number.

    function factorial(num){

        if (num <= 2){

        	return num;

        }else{

        	return num * factorial(num - 1);
        }

    }

    **Note**:✍ We can also solve this using an iterator instead of recursion because, if possible, it is better to use an iterator since recursion requires more time and memory to process.

    function factorial2(num){
    let fac = 1;
    while (num > 1){

        	fac *= num;
        	num--;
        }

        return fac;

    }

7.  How does this keyword work in JavaScript? Provide an example.

    1. Global context
       In the global scope refers to global window object in browser.
       console.log(this)
       output --> Window {0: global, window: Window, self: Window, document: document, name: '', location: Location, …}

    2. Inside an Object Method
       When used inside a method of an object, this refers to the object itself.
       const person = {
       n: 'Ab'
       talk: function(){
       console.log('Hi, it is ${this.n}')
       }
       }
       person.talk()

    3. Inside a Constructor Function
       In a constructor function, this refers to the new instance being created.
       function Person(n){
       this.n = n
       }
       const p = new Person('Ab')
       console.log(p.n)

    4. Inside an Arrow Function
       Arrow functions do not have their own this; they inherit this from their surrounding scope.
       const person = {
       n: 'Ab'
       talk: function(){
       const arrowFunc = () => {
       console.log('Hi, this is ${this.n}')
       }
       }
       }

    5. In an Event Listener
       When an event listener is attached to an element, this refers to the element that triggered the event.
       document.getElementById("myBtn").addEventListener("click", function () {
       console.log(this)
       })

8.  Explain the concept of hoisting in JavaScript
    In JavaScript, hoisting is a behavior where variable and function declarations are moved to the top of their scope before the code is executed. When the code runs, the interpreter assigns undefined to variables declared with var until they are initialized, while function declarations are fully hoisted and can be used before their definition. Understanding hoisting helps in writing better and more predictable code.

    1. Variable hoisting
       var x; // It has hoisted
       console.log(x); // undefined
       x = 5;
       console.log(x); // 5

    2. Function hoisting
       hello(); // "Hello, world!"

       function hello() {
       console.log("Hello, world!");
       }

9.  Write a function to find the sum of all numbers in an array.

    function sumArrayElements(args){

        let sum = 0

        for (i = 0; i < args.length; i++){

        sum += args[i]

        }

        return sum

    }
    var arr = [5, 4, 2, 6, 7, 8]
    console.log(sumArrayElements(arr))

10. What are arrow functions in JavaScript, and how are they different from regular functions?
    Arrow functions in JavaScript are a shorthand way of writing functions using the => (arrow) syntax.
    They were introduced in ES6 and provide a cleaner and more readable alternative to regular function expressions.
    Ex:

        // Regular function
        function add(a, b) {
        return a + b;
        }

        // Arrow function
        const add = (a, b) => a + b;

    1. Short Syntax
       Arrow funtion has short syntax that eliminate the need function keyword and {} in simple experssions.
       const person = n => `Hello, ${n}!`;
       console.log(person("Ab"));

    2. this keyword
       In regular functions, this determined the object based on how function is called.
       but arrow functions, this lexically inhireted from the surrounding scope.

    3. Cannot be Used as Constructor
       With arrow functions we cannot use new keyword to create new object.

    4. Implicit Return
       In arrow functions, like regular functions we don't need to write return keyword its automatically return the value.
       Ex:
       const add = x => x + x;
       console.log(add(5)); // 10
