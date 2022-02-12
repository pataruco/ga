/**
 * Try to manipulate the page
 *
 * Easiest
 * 1) Get the title for each dog/cat services, and put them into the console using console.log
 */
const serviceTitles = document.querySelectorAll('.services h3');
serviceTitles.forEach((title) => console.log(title.innerText));

/*
 *
 * 2) Change the title of the page to "We're the CAT People"
 */

window.addEventListener('DOMContentLoaded', () => {
  document.querySelector('h1').innerText = "We're the CAT People";
});
/*
 * 3) Change the main image to be something cat related.
 */

window.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.hero').classList.add('cat');
});

/*
 * Harder
 * 1) Replace the call to action button background color with "red"
 */

const ctas = document.querySelectorAll('.button');

window.addEventListener('DOMContentLoaded', () => {
  ctas.forEach((cta) => cta.classList.add('button--red'));
});

/*
 * 2) Find another image and replace the header (try unsplash.com, get familiar with searching for images)
 */

/*
 * 3) When someone clicks the "Book your next Rover sitter" button, change the text of the button to say "Thanks"
 */

const bookButton = document.getElementById('js-book-button');

bookButton.addEventListener('click', (event) => {
  event.preventDefault();
  bookButton.innerText = 'Thanks';
});

/*
 * Hardest (only if you get the others first)
 * 1) Make the responsive menu work!
 */

const hamburguerButton = document.getElementById('js-hamburguer');

hamburguerButton.addEventListener('click', (event) => {
  event.preventDefault();
  document.body.classList.toggle('menu-open');
});

/*
 * 2) Implement a modal window - "Sign up now" CTA when someone clicks the 'Sign Up' button
 *
 */
