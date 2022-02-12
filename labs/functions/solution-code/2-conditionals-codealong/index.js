'use strict';
console.log('working!');

// write an if/else statement that takes an age as a parameter
// if the age is equal to or over 17, console log('can drive!')
// if the age is under 17, console log('can not drive!')

const candDriveIfStatement = (age) => {
  if (age < 17) {
    console.log('can not drive!');
  }
  console.log('can  drive!');
};

// refactor the function into a ternery statement
const candDriveTernaryStatement = (age) => {
  const message = age < 17 ? 'can not drive!' : 'can  drive!';
  console.log(message);
};

// write a switch statement
