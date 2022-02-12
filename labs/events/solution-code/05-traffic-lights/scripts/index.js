// Buttons
const buttons = Array.from(document.querySelectorAll('.button'));
const [stopButton, slowButton, goButton] = buttons;

// Bulbs
const bulbs = Array.from(document.querySelectorAll('.bulb'));
const [redBulb, amberBulb, greenBulb] = bulbs;

const setBulbsToBlack = () => {
  bulbs.forEach((bulb) => {
    bulb.classList = 'bulb';
  });
};

const changeToRed = () => {
  setBulbsToBlack();
  redBulb.classList.add('red');
};

stopButton.addEventListener('click', changeToRed);

const changeToAmber = () => {
  setBulbsToBlack();
  amberBulb.classList.add('amber');
};

slowButton.addEventListener('click', changeToAmber);

const changeToGreen = () => {
  setBulbsToBlack();
  greenBulb.classList.add('green');
};

goButton.addEventListener('click', changeToGreen);
