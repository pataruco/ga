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

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const { value: postcode } = postcodeInput;
  getData(postcode);
});

const getLocation = (data) => {
  const {
    result: { region, admin_district },
  } = data;

  return {
    region,
    admin_district,
  };
};

const updateUI = (text) => {
  postcodeInput.value = '';
  locationPara.textContent = text;
};

const getData = async (postCode) => {
  try {
    const response = await fetch(
      `http://api.postcodes.io/postcodes/${postCode}`,
    );

    if (response.ok) {
      const data = await response.json();
      const { region, admin_district } = getLocation(data);
      const text = `${region}, ${admin_district}`;
      updateUI(text);
    } else {
      throw response.status;
    }
  } catch (error) {
    updateUI(error);
  }
};
