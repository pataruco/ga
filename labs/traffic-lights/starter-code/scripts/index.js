// Element
const stopButton = document.getElementById('js-stop-button');
const slowButton = document.getElementById('js-slow-button');

// Event
stopButton.addEventListener('click', illuminateRed);
slowButton.addEventListener('click', illuminateYellow);

// Execution

function illuminateRed() {
  clearLights();
  document.getElementById('js-stop-light').style.backgroundColor = 'red';
}

function illuminateYellow() {
  clearLights();
  document.getElementById('js-slow-light').style.backgroundColor = 'purple';
}

function clearLights() {
  document.getElementById('js-stop-light').style.backgroundColor = 'black';
  document.getElementById('js-slow-light').style.backgroundColor = 'black';
  document.getElementById('js-go-light').style.backgroundColor = 'black';
}
