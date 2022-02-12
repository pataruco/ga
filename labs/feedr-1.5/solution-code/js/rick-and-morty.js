import { showLoader, hideLoader } from './loader.js';
import { renderArticle, clearArticles } from './render.js';

export const fetchRickAndMorty = async () => {
  try {
    const response = await fetch('https://rickandmortyapi.com/api/character');

    if (response.ok) {
      const { results } = await response.json();
      return results;
    }
    throw new Error(response.statusText);
  } catch (error) {
    throw new Error(error);
  }
};

export const createRickAndMortyArticles = (characters) => {
  const articles = characters.map((character) => {
    const { name, species, image, episode, origin, gender, status } = character;

    console.log({ name, species, image, episode, origin, gender, status });

    return {
      title: name,
      subTitle: species,
      image,
      ranking: episode.length,
      description: `Gender: ${gender}, Status: ${status}, Origin: ${origin.name}`,
      externalUrl: '#',
    };
  });
  return articles;
};

export const renderRickAndMorty = async () => {
  showLoader();
  try {
    const characters = await fetchRickAndMorty();
    hideLoader();
    const rickAndMortyArticles = createRickAndMortyArticles(characters);
    clearArticles();
    rickAndMortyArticles.forEach((article) => {
      renderArticle(article);
    });
  } catch (error) {
    // render error
  }
};
