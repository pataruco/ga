'use strict';
console.log('working!');

// declare with function keyword
// write a function called sayHello, which console.logs "hello"
function sayHello() {
  console.log('hello');
}

// declare with function expression
// write a nameless function and store its value to a variable called reply. The function should console.log "hello there!"
const reply = function () {
  console.log('hello there!');
};

// declare as fat arrow
// write a fat arrow function called sayGoodbye. It should console.log('bye!)

const sayGoodbye = () => {
  console.log('bye!');
};

// BONUS:

// IIFE - immediately invoked function expression
// write an IIFE that console.logs 'I am a self invoking function'
(function () {
  console.log('I am a self invoking function');
})();
