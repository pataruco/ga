// ELEMENT: #search-form
// EVENT: submit
// EXECUTE FUNCTION: giphySearch

async function giphySearch(event) {
  // prevent the default action of the form submitting
  console.log('submit', event);

  const searchTerm = ''; // get the value of the #search-term input

  const apiKey = 'i9u5FoDahfPMI2LFAipRD3KXJ45afk0f';
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${searchTerm}`;

  // use fetch to get the response data, convert to json and log to console
  // console.log(giphyData)

  // loop through the array of json.data
  // create an img element with a src of the fixed_width.url for each one
  // append each child img to the #giphy-results div
}

document.querySelector('#search-form').addEventListener('submit', giphySearch);
