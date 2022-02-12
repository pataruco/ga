// Element
const hamburguerElement = document.getElementById('js-hamburguer');

// Event
hamburguerElement.addEventListener('click', toggleMenu);

// Execution
function toggleMenu(event) {
  event.preventDefault();
  document.body.classList.toggle('menu-open');
}
