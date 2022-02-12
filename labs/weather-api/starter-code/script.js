// Elements

const form = document.querySelector('#weather-search');
const tempElement = document.querySelector('#temp');
const descriptionElement = document.querySelector('#description');
const cityElement = document.getElementById('city');

// Constants

const city = cityElement.value;
const apiKey = '870b1b10b58578f725b70b13aff6c357';

const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${apiKey}`;

// Event

form.addEventListener('submit', handleWeatherRequest);

// Execution

async function handleWeatherRequest(event) {
  // stop the form submit from refreshing the page
  event.preventDefault();

  // get weather data from open weather map API

  // save the response

  // convert the response to json data

  // save the json in a weatherData variable

  // get the weather descripton from response data

  // convert the temperature from kelvin to celcius

  // update the temperature and decription on the page
}
