'use strict';
/*
    When programming user interfaces, you will often need to display results based on a certain input.
    In this exercise, you will design a program that will let users know what legal privileges people in the U.K. enjoy based on their age.

    Write a program that outputs results based on users’ age. This exercise draws on if/else statements, Boolean logic, and comparison operators. 
    See the conditions below:

    - If you are under 16, you go to school
    - If you are 17 or older, you can drive
    - If you 18 or older, you can drink alcohol
    - If you are 21 or older, you can rent a car
    - If you are 25 or older, you can buy a house
    - If you are 40 or older, you can run for prime minister
    - If you are 68 or older, you collect a pension

    The results that your program provides should be only the most recent privilege based on the provided age.

    BONUS 1: Rewrite your code to allow a user to enter an age value, rather than hard-coding it into your program. (Hint: Read up on the window.prompt method at https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt.)

    BONUS 2: Rewrite your code to use a switch statement rather than if and else statements. (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch)
*/

const legalPriviligies = (age) => {
  const priviligies = [];

  switch (true) {
    case age <= 16:
      priviligies.push('You can go to school');
      break;

    case age >= 68:
      priviligies.push('You can collect pension');

    case age >= 40 && age < 68:
      priviligies.push('You can run for prime minister');

    case age >= 25 && age < 40:
      priviligies.push('You can buy a house');

    case age >= 21 && age < 25:
      priviligies.push('You can rent a car');

    case age >= 18 && age < 21:
      priviligies.push('you can drink alcohol');

    case age >= 17 && age < 18:
      priviligies.push('You can drive');
  }

  if (priviligies.length > 0) {
    priviligies.forEach((privilige) => console.log(privilige));
  }
};

const age = Number(window.prompt('How old are you?'));

legalPriviligies(age);
