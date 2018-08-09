// Destructuring

let a, b;
[a, b] = [100, 200];
//Rest pattern
[a, b, ...rest] = [100, 200, 300, 400, 500];

({ a, b } = { a: 100, b: 200, c: 300, d: 400, e: 500 });
({ a, b, ...rest } = { a: 100, b: 200, c: 300, d: 400, e: 500 });

//Object destrucutring
const person = {
  name: 'John',
  age: 22,
  city: 'Pune',
  sayHello() {
    console.log('Hello');
  }
};

//Old ES5
// const name = person.name;

//New ES6 Syntax
const { name, age, city, sayHello } = person;

console.log(name, age, city);

sayHello();
