// Try to do this by setting styles (.style)
// Remember to try one step at a time, testing each stage as you go!
// Follow the 3 E's pattern (Element, Event, Execution)

const grayButton = document.querySelector('#js-gray-button');
const whiteButton = document.querySelector('#js-white-button');

grayButton.addEventListener('click', () => {
  document.body.classList = '';
  document.body.classList.add('gray-button');
});

whiteButton.addEventListener('click', () => {
  document.body.classList = '';
  document.body.classList.add('white-button');
});
