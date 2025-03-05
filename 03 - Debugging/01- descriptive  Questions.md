1.  What are the different types of errors in JavaScript?
    There are deffirents types of errors in javascript I will explian one by one.

    1. Syntax Error: The error occurs when a predefined syntax is used incorrectly.
       Example:
       funtion(){ // Here the code have syntax error

       }

    2. Reference Error: A ReferenceError occurs when a reference to a variable is not found or is missing.
       Example:
       console.log(x) // x is not defined

    3. Internal Error: The error occurs when the JavaScript engine encounters an issue that prevents it from executing the code properly. Usually, this error is related to stack overflow, such as excessive recursion or memory allocation issues.

    4. URI Error: A URIError in JavaScript occurs when the encodeURI(), decodeURI(), encodeURIComponent(), or decodeURIComponent() functions are used incorrectly, such as passing invalid characters or malformed URIs.

    5. Range Error: When a value in JavaScript is outside the permitted range for a certain operation, a RangeError is raised. This usually occurs when numbers, arrays, or function parameters are used improperly.
       Example
       let arr = new Array(-1); // Uncaught RangeError: Invalid array length

    6. Evaluation Error: In JavaScript, an EvalError is an error that was first used to signal issues with the eval() function. However, as JavaScript engines now emit a SyntaxError or ReferenceError in place of EvalError, EvalError is rarely used in current JavaScript (ES5+).

    7. Type Error: TypeError occurs when using an unexpected type in JavaScript.

2.  How can you debug a JavaScript program in the browser?
    In the browser, there are developer tools that allow us to debug code, such as using console.log(). Like other debugging tools, we can set breakpoints and debug step by step. The developer tools are very professional; we can even trace and debug network connections as well.

3.  What is the use of console.log(), and how can it help in debugging?
    With console.log(), we can print the output or result of the code, allowing us to trace and debug it. Additionally, breakpoints make debugging easier.

4.  Explain the purpose of try...catch in JavaScript.
    In some code blocks, errors might occur during execution. To prevent the program from stopping, we need to write this code inside a try...catch block.

    const n = 0;
    try {
    console.log( X / n); // ReferenceError
    }
    catch(err) {

    console.log('Cannot devide number by zero');
    }

5.  How do breakpoints help in debugging JavaScript code?
    In the debugger window, we can set breakpoints, and JavaScript will puase executing, allowing us to examine output values. This makes debugging easier.

6.  What is the difference between throw and console.error()?
    throw ... raises an exception in the current code block and causes it to exit, or to flow to next catch statement if raised in a try block.

    console.error just prints out a red message to the browser developer tools javascript console and does not cause any changes of the execution flow.

7.  Write a program that intentionally throws an error and catches it using try...catch.

    try {

        throw new Error("This is a custom error message.");

    } catch (error) {

        console.error("An error occurred:", error.message);

    } finally {

        console.log("Execution completed.");

    }

8.  How can debugger be used in JavaScript?
    The debugger in JavaScript helps developers inspect and troubleshoot code by pausing execution at specific points. It can be used in different ways, such as using breakpoints, the debugger statement, and developer tools.

9.  What is stack trace, and how can it help in debugging?
    A report of the active function calls in a program at a certain moment, usually when an error occurs, is called a stack trace. It aids developers in comprehending the series of function calls that resulted in a problem.

        function A() {

            B();
        }

        function B() {

            C();
        }

        function C() {

            throw new Error("Something went wrong!");
        }

        A();

        ==================
        Uncaught Error: Something went wrong!
        at C (script.js:13)
        at B (script.js:8)
        at A (script.js:3)
        at script.js:16

10. What are some best practices for writing bug-free JavaScript code?

    There are different ways to write bug-free code that I will explain.

    1. Use Strict Mode
       Strict mode helps catch common coding mistakes.
       'use strict'

    2. Use let and const Instead of var
       Var can cause unexpected behavior due to function scoping. Meanwhile, let and const prevent accidental variable redeclaration and reduces scope-related bugs.

    3. Always Handle Errors with try...catch
       Prevent crashes and improves user experience.

    4. Avoid Modifying Global Variables
       Avoids accidental overwrites and conflicts between scripts.

    5. Use Meaningful Variable and Funtion Names
       Improves code readablity and maintainability.

    6. Use === Instead of ==
       Prevents unintended type conversions that may introduce bugs.

    7. Avoid Deeply Nested Code
       Refactor long functions to keep them readable, it improves readability and reduces complexity.

    8. Write Unit Tests
       Test functions to ensure they work correctly. It prevents regressions and ensures code corrections.

    9. Avoid Callback Hell
       Instead of callback use async/await. It improves readability and makes asynchronous code easier to debug.
