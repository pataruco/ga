// grab a reference to all the elements that will control the show/hide of the nav
const navButtons = document.querySelectorAll('.js-nav');

// loop through each of the nav icon triggers and add an event listener
navButtons.forEach((button) => {
  button.addEventListener('click', toggleMenu);
});

// create the event handler function to toggle the active state of body
function toggleMenu(event) {
  document.body.classList.toggle('menu-is-open');
}
