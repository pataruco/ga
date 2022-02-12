// Relying on your newfound knowledge of loops, combine loops and if/else statements together and incrementally build the common fizzbuzz loop.

// - In the loop, every time a number is divisible by **3**, instead of logging the number itself, the word "fizz" should appear.
// - If the number is divisible by  **5**, the word "buzz" should be logged.
// - If the number is divisible by both **3** and  **5**, then the word "fizzbuzz" should be logged.

// Follow the steps below.

'use strict';
// ##### Step 1:
// Construct a for loop that iterates through, and `console.log()`'s out, numbers 1 - 100.
for (let index = 1; index <= 100; index++) {
  // ##### Step 4:
  // Add an additional `else if` clause that logs the string `"fizzbuzz"` if the value being iterated over is divisible by both `3` and `5`.
  if (index % 5 === 0 && index % 3 === 0) {
    console.log('fizzbuzz');
    // ##### Step 3:
    // Add an `else if` clause that logs the string `"buzz"` if the value being iterated over is divisible by `5`.
  } else if (index % 5 === 0) {
    console.log('buzz');
    // ##### Step 2:
    // Add an `if/else` statement that logs the string `"fizz"` if the value being iterated over is divisible by `3`; otherwise, log out the value.
  } else if (index % 3 === 0) {
    console.log('fizz');
  } else {
    console.log(index);
  }
}
