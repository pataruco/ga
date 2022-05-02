function init() {
  const countriesContainer = document.querySelector('.countries');
  const selectInput = document.querySelector('select');
  const textInput = document.querySelector('input');
  let countries = [];
  let region = 'All';
  let search = '';

  async function getCountries() {
    try {
      const response = await fetch('https://restcountries.eu/rest/v2/all');
      countries = await response.json();
      displayCountries();
    } catch (err) {
      console.log(err);
    }
  }

  function filterCountries() {
    const re = new RegExp(search, 'i');
    return countries.filter((country) => {
      return (
        re.test(country.name) && (country.region === region || region === 'All')
      );
    });
  }

  function displayCountries() {
    const countriesHTMLArray = filterCountries().map((country) => {
      const { name, nativeName, flag } = country;
      return `
        <div>
          <h4>${name}</h4>
          <h6>${nativeName}</h6>
          <img src="${flag}" alt="${name} flag" />
        </div>
    `;
    });
    countriesContainer.innerHTML = countriesHTMLArray.join('');
  }

  function handleSelectInput(e) {
    region = e.target.value;
    displayCountries();
  }

  function handleTextInput(e) {
    search = e.target.value;
    displayCountries();
  }

  getCountries();
  selectInput.addEventListener('change', handleSelectInput);
  textInput.addEventListener('keyup', handleTextInput);
}

window.addEventListener('DOMContentLoaded', init);
