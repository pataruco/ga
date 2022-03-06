'use strict';
console.log('working!');

// 1. create a variable called firstName and assign it the value of your first name
const firstName = 'Pedro';

// 2. print firstName to the console
console.log({ firstName });

// 3. Create a variable called lastName and assign it the value of your last name
const lastName = 'Martin';

// 4. print lastName to the console
console.log({ lastName });

// 5. create a variable called age and assign it the value of your age (or any number you like)
const age = new Date().getFullYear() - 1978;

// 6. print a string to the console that reads: 'My name is [first name] [last name] and my favourite number is [age]'
console.log(
  `'My name is ${firstName} ${lastName} and my favourite number is ${age}`,
);

// 7. create a variable X and assign it any number
const x = 9;

// 8. create a variable Y and assign it any number
const y = 10;

// 9. print to the console the total of X and Y
console.log(x + y);

// 10. print to the console the total of X subtracted from Y
console.log(x - y);

// 11. print to the console the total of X multiplied by Y
console.log(x * y);

// 12. create a variable called changeNumber and assign it the number 5 and print it to the console
let changeNumber = 5;
console.log({ changeNumber });

// 13. re-assign the value of changeNumber to 300 and print it to the console
changeNumber = 300;
console.log({ changeNumber });

// 14. uncomment the variables below, concatonate them and print the result to the console

const fruit = 'Oranges';
const vegetable = 'potatos';
const drink = 'cola';

console.log(fruit, vegetable, drink);
