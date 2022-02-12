// Element
const body = document.body;
const h1 = document.querySelector('h1');
const img = document.querySelector('img');

// Event
// When window load all HTML
window.addEventListener('DOMContentLoaded', setTheme);

// Execution
function setTheme() {
  // Check using media queries syntax if the OS color scheme is dark
  const { matches: isDark } = window.matchMedia('(prefers-color-scheme: dark)');
  // if color scheme is dark will execute setThemeToDark else setThemeToLight
  isDark ? setThemeToDark() : setThemeToLight();
}

function setThemeToDark() {
  // Set body class to none
  body.classList = '';
  // Set body class to dark-mode
  body.classList.add('dark-mode');
  // Change the content of the h1
  h1.innerText = 'Dark';
  // Set src of the image to be lightbulb on asset
  img.setAttribute('src', './images/off.svg');
  // Set alt of the image to be lightbulb on
  img.setAttribute('alt', 'lightbulb off');
}

function setThemeToLight() {
  body.classList = '';
  body.classList.add('light-mode');
  h1.innerText = 'Light';
  img.setAttribute('src', './images/on.svg');
  img.setAttribute('alt', 'lightbulb on');
}

// Element
const button = document.querySelector('button');

// Event
// When the button is clicked it would call the toggleTheme
button.addEventListener('click', toggleTheme);

// Execution
function toggleTheme(event) {
  // Prevent the default behaviour of the button click
  event.preventDefault();
  // Check if body have the class name dark-mode
  const isDark = body.classList.contains('dark-mode');
  // if body class name is dark-mode  will execute setThemeToDark else setThemeToLight
  isDark ? setThemeToLight() : setThemeToDark();
}
