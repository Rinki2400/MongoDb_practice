// Promise
let cb = (resolve, reject) => {
  let success = true;
  if (success) resolve("Done!");
  else reject("Error!");
};
let promise = new Promise(cb);
  
promise.then(result => console.log(result)).catch(err => console.log(err));
  

  async function getData() {
    let promise = new Promise(resolve => setTimeout(() => resolve("Data Loaded"), 1000));
    let result = await promise;
    console.log(result);
  }
  
  getData();
   
  // Closure

  function outer() {
    let count = 0;
    return function inner() {
      count++;
      console.log(count);
    };
  }
  
  let counter = outer();
  counter(); // 1
  counter(); // 2
  
  
  // Prototypes

  function Person(name) {
    this.name = name;
  }
  
  Person.prototype.greet = function () {
    console.log("Hi, I'm " + this.name);
  };
  
  let p = new Person("Arjun");

  p.greet();
  let p2 = new Person("Anurag");

p2.greet();


  // Call, Apply and Bind

  function greet(greeting) {
    console.log(greeting + ", " + this.name);
  }
  
  let user = { name: "Bharat" };
  
  greet.call(user, "Hello");
  greet.apply(user, ["Hi"]);
  let boundGreet = greet.bind(user, "Hey");
  boundGreet();
  
  // this

  let person = {
    name: "Raj",
    greet() {
      console.log("Hi, I'm " + this.name);
    }
  };
  
  person.greet();
  
// Hoisting
console.log(x); // undefined
var x = 5;

// ES6 Features

// Classes
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(this.name + " makes a sound.");
  }
}

let dog = new Animal("Dog");
dog.speak();

// Arrow Functions
let add = (a, b) => a + b;
console.log(add(2, 3));

// Template Literals  
let name = "Janhavi";
let greeting = `Hello, ${name}!`;
console.log(greeting);

// Destructuring
let person2 = { name: "Ravi", age: 25 };
let { name:name2, age } = person;
console.log(name2, age);

// Default Parameters
function multiply(a, b = 1) {
  return a * b;
}
console.log(multiply(5)); // 5

// Spread and Rest
// Spread
let arr1 = [1, 2];
let arr2 = [...arr1, 3, 4];
console.log(arr2);

// Rest
function sum(...nums) {
  return nums.reduce((a, b) => a + b);
}
console.log(sum(1, 2, 3));

// Basic Built-in Types
// Object
let person3 = {
  name: "Rohan",
  age: 30
};
console.log(person3.name);

// Array
let fruits = ["apple", "banana"];
fruits.push("mango");
console.log(fruits);

// String
let str = "Hello World";
console.log(str.toUpperCase());

// Boolean
let isActive = true;
if (isActive) {
  console.log("Active");
}

// JSON Object Example
let employee = { "name": "Vinay", "address": "Delhi" };
console.log(employee.name); // Vinay

let jsonString = JSON.stringify(employee);
console.log(jsonString); // Convert to JSON string

let parsed = JSON.parse(jsonString);
console.log(parsed.address); // Delhi

