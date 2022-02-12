const popUpElement = document.querySelector('#js-pop-up');

export const showLoader = () => {
  popUpElement.classList.remove('hidden');
  popUpElement.classList.add('loader');
};

export const hideLoader = () => {
  popUpElement.classList.add('hidden');
  popUpElement.classList.remove('loader');
};
