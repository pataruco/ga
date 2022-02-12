const url = 'https://restcountries.com/v3.1/all';
const countriesListElement = document.getElementById('list');

const fetchCountries = async () => {
  try {
    const response = await fetch(url);

    if (response.ok) {
      const allCountries = await response.json();
      console.log(allCountries);
    } else {
      throw new Error(response.statusText);
    }
  } catch (error) {
    console.error(error);
  }
};

const main = () => {
  fetchCountries();
};

main();
