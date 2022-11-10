// Element

// Lights
const bulbs = document.querySelectorAll('.traffic-light > *');
const [stopLight, slowLight, goLight] = bulbs;

// Buttons
const [stopButton, slowButton, goButton] = document.querySelectorAll('button');

// Event
stopButton.addEventListener('click', illuminateRed);
slowButton.addEventListener('click', illuminateYellow);
goButton.addEventListener('click', illuminateGreen);

// Execution
function illuminateRed() {
  clearLights();
  stopLight.classList.add('stop');
}

function illuminateYellow() {
  clearLights();
  slowLight.classList.add('slow');
}

function illuminateGreen() {
  clearLights();
  goLight.classList.add('go');
}

function clearLights() {
  bulbs.forEach((bulb) => {
    bulb.classList = '';
    bulb.classList.add('bulb');
  });
}
