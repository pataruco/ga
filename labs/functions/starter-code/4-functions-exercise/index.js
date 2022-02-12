'use strict';
// -------------------------------------------------------------------------------
// Part 1 - Declaring and calling functions
// -------------------------------------------------------------------------------

// 1. Declare a function. Give it the name "logDate".
// a. Inside the function, log the following value to the console:
//    new Date()
//    (Note: This code uses the Date object to fetch the current date and time.)

// b. Call the function

// -------------------------------------------------------------------------------
// Part 2 - Predicting outcomes
// -------------------------------------------------------------------------------

// ---- A ------

// Look at the below function. Predict what will happen when the function is called.

function hotOrNot(temp) {
  temp > 25 ? true : false;
}

// ---- B ------

// Look at the below function. Predict what will happen when the function is called.
function priceCheck(title, listPrice, taxRate) {
  let salesTax = listPrice * taxRate;
  let total = listPrice + salesTax;
  console.log(title + ' costs £' + total + '.');
}

// -------------------------------------------------------------------------------
// Part 3 - declaring variables inside functions
// -------------------------------------------------------------------------------

// write a function called makeAPizza. Inside the function body, declare 3 variables - topping1, topping2 and topping3.
// assign the variables a value eg. 'pepperoni' or 'cheese'
// console.log the sentence "Coming right up! A pizza with" + your 3 variables/toppings

// invoke the function

// -------------------------------------------------------------------------------
// Part 4 - Passing parameters
// -------------------------------------------------------------------------------

// write a function called makeAVeggiePizza.
// the function should take 3 arguments which will be the toppings
// the function should console.log "Coming right up! A pizza with" + your 3 arguments/toppings

// invoke the function with your 3 favourite toppings
