const weatherData =
  '{"coord":{"lon":-0.13,"lat":51.51},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"base":"stations","main":{"temp":292.92,"feels_like":290.22,"temp_min":290.93,"temp_max":294.82,"pressure":1023,"humidity":55},"visibility":10000,"wind":{"speed":4.1,"deg":80},"clouds":{"all":0},"dt":1590913447,"sys":{"type":1,"id":1414,"country":"GB","sunrise":1590896980,"sunset":1590955631},"timezone":3600,"id":2643743,"name":"London","cod":200}';

const parsed = JSON.parse(weatherData);
console.log(parsed);
console.log(parsed.main);

const pressure = parsed.main.pressure;
const conditions = parsed.weather[0].description;

console.log('Barometric pressure: ' + pressure + ' millibars');
console.log('Current conditions: ' + conditions);
