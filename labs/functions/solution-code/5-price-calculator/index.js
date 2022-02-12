/*
  Write code to to calculate a customer's total cost in pounds based on product price, tax rate, shipping cost,
  and the currency they're using for the purchase (pounds or euros).

  * Create a function called calcTotal() that accepts parameters for all the
    necessary information.
  * Start your calculations by converting the price from euro to pounds if
    necessary (HINT: use a conditional statement, and call the
    convertEurosToPounds() function.)
  * Calculate and store the total tax (price times tax).
  * Calculate and store the total cost (the total of price, total tax, and shipping).
  * Convert the total cost to two decimal places (HINT: look up the toFixed() method).
  * Log the total cost to the console, with text describing what the value is.
  * Call the function with the arguments 85.43 for price, 0.0825 for tax rate,
    and 7.95 for shipping cost, and pounds as the currency, and verify that the
    values returned are realistic.
  * Call the function again with the same values but changing the currency to
    euro and verify that you get a different, but realistic, result.

  BONUS 1: Convert your function to assume a currency of 'pounds' by default.

  BONUS 2: Convert your function to an arrow function.
*/

'use strict';

// complete the calcTotal() function below:
const calcTotal = (
  { productPrice, taxRate, shippingCost, currency } = {
    ...arguments,
    currency: 'pounds',
  },
) => {
  if (currency === 'euros') {
    productPrice = convertEurosToPounds(productPrice);
  }

  const tax = productPrice * (taxRate / 100);
  const totalCost = Number((productPrice + tax + shippingCost).toFixed(2));

  console.log(totalCost);
};

// accepts a price in euros and returns the same price in pounds
function convertEurosToPounds(euroPrice) {
  return euroPrice * 1.18;
}

// add statements below to call your function

calcTotal({
  productPrice: 10,
  taxRate: 12.5,
  shippingCost: 2,
  // currency: 'pounds',
});
