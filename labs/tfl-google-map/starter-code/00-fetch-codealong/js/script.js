// Add an event listener to Submit button
// Get value from input and make request to postcode api
// https://api.postcodes.io/postcodes/<postcode>
// Update UI with location
// Add error handlers for bad requests

'use strict';

const postcodeInput = document.querySelector('#postcode');
const form = document.querySelector('form');
const tempPara = document.querySelector('#temp');
const locationPara = document.querySelector('#location');
