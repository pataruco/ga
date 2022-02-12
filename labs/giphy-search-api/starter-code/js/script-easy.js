// ELEMENT: #search-form
// EVENT: submit
// EXECUTE FUNCTION: giphySearch

async function giphySearch(event) {
  // prevent the default action of the form submitting
  event.preventDefault();
  console.log('submit', event);

  const searchTerm = document.getElementById('search-term').value; // get the value of the #search-term input

  const apiKey = 'i9u5FoDahfPMI2LFAipRD3KXJ45afk0f';
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${searchTerm}`;
  console.log(url);

  // use fetch to get the response data, convert to json and log to console
  const response = await fetch(url);
  console.log(response);
  const giphyData = await response.json();
  console.log(giphyData);

  const giphyResultsDiv = document.getElementById('giphy-results');
  giphyResultsDiv.innerHTML = ''; // empty the results div for new gifs

  giphyData.data.forEach(function (gif) {
    const url = gif.images.fixed_width.url;
    const image = document.createElement('img');
    image.setAttribute('src', url);
    giphyResultsDiv.appendChild(image);
  });
}

document.querySelector('#search-form').addEventListener('submit', giphySearch);
