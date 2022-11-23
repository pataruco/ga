/* 
start a "score" at zero
when I click the first button, reset the score to zero
when I click the second button, add 5 to the current score
when I click the third button, add 10 to the current score
when I click the fourth button, minus 1 from the current score
each time I click a button, check that the total is not too big or too small
and update the score on the page
*/

let total = 0;

// Elements
const zeroButton = document.querySelector('#js-zero');
const addFiveButton = document.querySelector('#js-add-5');
const addTenButton = document.querySelector('#js-add-10');
const substractOneButton = document.querySelector('#js-sub1');
const score = document.querySelector('#js-result');

const calculate = (number) => {
  total = total + number;

  if (total > 100) {
    total = 0;
  }

  if (total < -10) {
    total = 0;
  }

  score.innerText = total;
};

// Events

zeroButton.addEventListener('click', () => {
  total = 0;
  calculate(0);
});

addFiveButton.addEventListener('click', () => {
  calculate(5);
});

addTenButton.addEventListener('click', () => {
  calculate(10);
});

substractOneButton.addEventListener('click', () => {
  calculate(-1);
});
