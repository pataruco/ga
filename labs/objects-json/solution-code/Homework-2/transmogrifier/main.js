/* eslint-disable no-unused-vars */

//  1. Write a function `lengths` that accepts a single parameter as an argument, namely
// an array of strings. The function should return an array of numbers where each
// number is the length of the corresponding string.

function lengths(arrayOfWords) {
  const lengths = [];
  for (let i = 0; i < arrayOfWords.length; i++) {
    lengths.push(arrayOfWords[i].length);
  }
  return lengths;
}

// 2. Write a Javascript function called `transmogrifier`
// This function should accept three arguments, which you can assume will be numbers.
// Your function should return the "transmogrified" result
//
// The transmogrified result of three numbers is the product of the first two numbers,
// raised to the power of the third number.

const transmogrifier = function (num1, num2, num3) {
  const product = num1 * num2;
  const transmogrified = Math.pow(product, num3);
  return `( ${num1} times ${num2} ) to the power of ${num3} is equal to ${transmogrified}`;
};

// 3.  Write a function `wordReverse` that accepts a single argument, a string. The method should return a string with the order of the words reversed. Don't worry
// about punctuation.

const wordReverse = (stringOfWords) => {
  const arrayOfWords = stringOfWords.split(' ');
  const reversedArrayOfWords = arrayOfWords.reverse();
  const reverseStringOfWords = reversedArrayOfWords.join(' ');
  // const reverseStringOfWords = stringOfWords.split(' ').reverse().join(' ');
  return reverseStringOfWords;
};
