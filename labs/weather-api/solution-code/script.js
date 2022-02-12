// Elements

const form = document.querySelector('#weather-search');
const tempElement = document.querySelector('#temp');
const descriptionElement = document.querySelector('#description');
const cityElement = document.getElementById('city');

// Event

form.addEventListener('submit', handleWeatherRequest);

// Execution

async function handleWeatherRequest(event) {
  // stop the form submit from refreshing the page
  event.preventDefault();
  const city = cityElement.value;
  const apiKey = '870b1b10b58578f725b70b13aff6c357';

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${apiKey}`;
  console.log(url);

  // get weather data from open weather map API
  // save the response
  const response = await fetch(url);
  // convert the response to json data
  // save the json in a weatherData variable
  const weatherData = await response.json();
  console.log({ weatherData });

  // get the weather descripton from response data
  const weatherDescription = weatherData.weather[0].description;

  // convert the temperature from kelvin to celcius
  const tempCelcius = Math.floor(weatherData.main.temp - 273);

  // update the temperature and decription on the page
  document.querySelector('#temp').innerHTML = `
  		${tempCelcius}<sup>o</sup>C
  	`;
  document.querySelector('#description').innerHTML = `
  		The weather in <strong>${city}</strong> is <br>
  		<strong>${weatherDescription}</strong>
  	`;
}
