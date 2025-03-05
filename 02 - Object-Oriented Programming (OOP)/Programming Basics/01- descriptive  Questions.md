1.  What are the four pillars of Object-Oriented Programming?
    Abstraction, Encapsulation, Inheritance, and Polymorphism are the four pillars of object-oriented programming.

        1. Abstraction
            The process of hiding implementation details and showing only the essential details and features of an object is called abstraction. For example, a computer has many components inside its case, but we can't see them; we just use the monitor and keyboard. In Java, when we define a class as an abstract class, we cannot create an object of that class.

        2. Encapsulation
            Encapsulation is the process of grouping related details and components together while restricting access to them, similar to a locked box that can only be accessed through a door with a key. In programming, encapsulation means wrapping attributes and methods into a single unit (class) and restricting direct access using access modifiers, such as private fields, public fields, and getter/setter methods.

        3. Inheritance
            In programming, the behavior of an object is similar to a real-world object, such as a human, which has many attributes and behaviors that a child can inherit.
            Inheritance is a key concept that allows programmers to reuse code and avoid duplication. Instead of writing the same code multiple times, a child class can inherit properties and behaviors from a parent class.
            For example, a Vehicle class can have multiple child classes, such as Car, Bike, and others.

        4. Polymorphism
            In the real world, a human can perform an action differently based on the environment. For example, a person can speak different languages depending on their location.
            Similarly, in programming, we have a feature that allows a method to perform different actions based on the object. This concept is known as polymorphism.
            Examples of polymorphism include method overloading and method overriding, where a method behaves differently depending on the object or the number/type of parameters.

2.  Define and provide an example of encapsulation in JavaScript.
    After ES6, we can use classes in JavaScript to provide a better structure and encapsulation.
    Example
    class BankAccount {

        constructor(accountNumber, accountHolderName, balance) {
            this._accountNumber = accountNumber;
            this._accountHolderName = accountHolderName;
            this._balance = balance;
        }

        showAccountDetails() {
            console.log(this._accountNumber);
            console.log(this._accountHolderName);
            console.log(this._balance);
        }

        accountDeposit(amount) {
            if (amount <= 0) return "insufficient amount!";
            this._balance += amount;
        }

        accountWithdrawal(amount) {
            if (amount > this._balace) return "insufficient amount!";
            this._balance -= amount;
        }

    }

    let myBankAccount = new BankAccount(50001212, "Eb", 100000);
    myBankAccount.showAccountDetails();
    myBankAccount.accountDeposit(10000);
    myBankAccount.showAccountDetails();

3.  How do JavaScript classes differ from traditional classes in languages like Java or C++?

    JavaScript classes are syntactic sugar over prototype-based inheritance, while Java and C++ use true class-based inheritance. JavaScript is dynamically typed, lacks built-in access modifiers (until ES2020), and requires manual method binding, whereas Java and C++ are statically typed, enforce encapsulation with private and protected, and automatically bind methods. JavaScript supports mixins instead of multiple inheritance, and its classes execute at runtime, unlike Java and C++ which are compiled.

4.  Write a class Car with properties brand, model, and a method displayInfo().

    class Car {

        constructor(brand, model){
            this._brand = brand;
            this._model = model;
        }
        displayInfo(){
            console.log(`Car brand: ${this._brand}`);
            console.log(`Car model: ${this._model}`);
        }

    }

5.  Explain prototype-based inheritance in JavaScript.
    In javascirpt each object has an internal link to another object called its prototype. This chain of prototype in Javascript allows objects to inherit properties and method from other objects.

        Example
        const parent = {
            greet : function(){
                console.log('Hello from the parent')
            }
        }

        const child = {
            name : 'Child Object'
        }

        child.__proto__ = parent;
        child.greet(); // Outputs: Hello from the parent

6.  How do you create a private property in a JavaScript class?
    In JavaScript, we can create private properties inside a class either # private fields after ES6 or closure with construtor functions.

    1. The first approuch

    class Person {
    #age; // Private field

            constructor(name, age) {
                this.name = name;
                this.#age = age; // Assign private property
            }

            getAge() {
                return this.#age; // Accessing private property inside the class
            }
        }

        const person1 = new Person("Alice", 25);
        console.log(person1.#age); // ❌ Can't access out of class scope

    2. The second approuch

    function Person(name, age) {

        this.name = name;
        let _age = age; // Private variable

            this.getAge = function() {
                return _age; // Accessing private variable
            };

    }

    const person2 = new Person("Bob", 30);

7.  What is method overriding, and how can it be implemented in JavaScript?
    In object-oriented programming, method overriding is a key concept of polymorphism, where we can redefine parent class methods with different functionality while keeping the same method name.

    class Parent {

        display() {
            console.log("Display method from Parent class");
        }

    }
    class Child extends Parent {

        display() {
            console.log("Display method from Child class");
        }

    }
    let obj = new Child();
    obj.display();

8.  Write an example demonstrating polymorphism in JavaScript.

    class Animal {

        speak(){
            console.log('The animal makes a sound.');
        }

    }

    class Dog extends Animal{

        speak(){ // overriding
             console.log('The dog barks.');
        }

    }

    class Cat extends Animal{

        speak(){ // overriding
             console.log('The cat meows.');
        }

    }

    const dog = new Dog()
    dog.speak() // The dog barks.
    const cat = new Cat()
    cat.speak() // The cat meows

9.  What is the purpose of super() in JavaScript classes?
    The super keyword is used to call the constructor of its parent class to access the parent's properties and methods.

    Example

    Class Car {

        constructor(brand){
            this.carname = brand;
        }

        present(){
            return 'I have a ' + this.carname;
        }

    }

    class Model extends Car {

        cosntructor(brand, mod){
            super(brand);
            this.model = mod
        }

        show(){
            return this.present() + ', it is a ' + this.model;
        }

    }

10. Explain the difference between composition and inheritance.
    Composition and inheritance are two key design patterns in object-oriented programming (OOP).

    1.  Inheritance
        Its known as IS-A relationship that it explain each child is a parent or superclass such as Animal is superclass and cat is child it shows that a cat is an animal which cat can inherite the properties and bahavior of animal.

        class Animal {

            constructor(nam){
                this.name = name;
            }

            run(){
                console.log(`${this.name} is running..`);
            }

        }

        class Cat extends Animal{

            run(){
                console.log(`${this.name} is running...`)
            }

        }

    2.  Compostion
        Its known as HAS-A relationship that is explain this object has a specific charactersitc of other object that we can use in this objects. such as class Dog has run and Cat also has it's run methods that we can say the animal has behavior that car also has this.

        const canEat = {

            eat() {
                console.log(`${this.name} is eating.`);
            }

        };

        const canBark = {

            bark() {
                console.log(`${this.name} is barking.`);
            }

        };

        class Dog {

            constructor(name) {
                this.name = name;
            }

        }

        Object.assign(Dog.prototype, canEat, canBark);

        const myDog = new Dog("Buddy");
        myDog.eat();
        myDog.bark();
