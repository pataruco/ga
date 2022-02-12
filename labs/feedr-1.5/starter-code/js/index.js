import { renderRickAndMorty } from './rick-and-morty.js';
import { clearArticles } from './render.js';

const feederFormSelectElement = document.querySelector('#feedr-select');

feederFormSelectElement.addEventListener('change', renderFeederOption);

async function renderFeederOption(_event) {
  const { value } =
    feederFormSelectElement.options[feederFormSelectElement.selectedIndex];

  if (value === 'rick-and-morty') {
    await renderRickAndMorty();
  } else {
    clearArticles();
  }
}
