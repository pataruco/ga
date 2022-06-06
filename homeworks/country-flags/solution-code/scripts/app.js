const countriesContainer = document.querySelector('.countries');
const selectInput = document.querySelector('select');
const textInput = document.querySelector('input');

let countries = [];
let region = 'All';
let search = '';

async function getCountries() {
  try {
    const response = await fetch('https://restcountries.com/v3.1/all');
    countries = await response.json();
    displayCountries();
  } catch (error) {
    console.error(error);
  }
}

function filterCountries() {
  const searchString = new RegExp(search, 'i');
  return countries.filter((country) => {
    return (
      searchString.test(country.name.common) &&
      (country.region === region || region === 'All')
    );
  });
}

function displayCountries() {
  const countriesHTMLArray = filterCountries().map((country) => {
    const {
      name: { common },
      flags: { svg },
    } = country;
    return `
        <section>
          <h2>${common}</h4>
          <img src="${svg}" alt="${common} flag" />
        </section>
    `;
  });

  countriesContainer.innerHTML = countriesHTMLArray.join('');
}

function handleSelectInput(event) {
  region = event.target.value;
  displayCountries();
}


function handleTextInput(event) {
  search = event.target.value;
  displayCountries();
}

selectInput.addEventListener('change', handleSelectInput);
textInput.addEventListener('keyup', handleTextInput);

window.addEventListener('DOMContentLoaded', getCountries);
