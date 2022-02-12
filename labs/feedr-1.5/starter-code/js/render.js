const mainElement = document.querySelector('#js-main');
const popUpElement = document.querySelector('#js-pop-up');
const popUpContentElement = document.querySelector('#js-pop-up-content');
const closePopUpButton = document.querySelector('#js-close-pop-up-button');

const showFullArticle = (article) => {
  const { title, description, externalUrl } = article;

  popUpContentElement.innerHTML = '';

  popUpContentElement.innerHTML = `
    <h2>${title}</h2>
    <p>${description}</p>
    <a href="${externalUrl}" class="pop-up-action" target="_blank" rel="noopener"
      >Read more from source</a
    > `;

  popUpElement.classList.remove('hidden');
};

export const clearArticles = () => {
  mainElement.innerHTML = '';
};

export const renderArticle = (article) => {
  const { title, subTitle, image, ranking } = article;

  const articleElement = document.createElement('article');
  articleElement.classList.add('article');

  articleElement.innerHTML = `
  <picture class="featured-image">
    <img src="${image}" alt="${title}" />
  </picture>
  <section class="article-content">
    <h2>${title}</h2>
    <h3>${subTitle}</h3>
  </section>
  <p class="impressions">${ranking}</p>
  <template id="js-article-template">

  </div>
  </template>
  `;

  articleElement.addEventListener('click', () => {
    showFullArticle(article);
  });

  mainElement.appendChild(articleElement);
};

closePopUpButton.addEventListener('click', () => {
  popUpElement.classList.add('hidden');
});
