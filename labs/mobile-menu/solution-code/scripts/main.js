const headerButton = document.getElementById('js-button-header');
const menuButton = document.getElementById('js-button-menu');

headerButton.addEventListener('click', openMenu);
menuButton.addEventListener('click', closeMenu);

function openMenu(event) {
  event.preventDefault();
  document.body.classList.toggle('menu-open');
}
function closeMenu(event) {
  event.preventDefault();
  document.body.classList.remove('menu-open');
}
