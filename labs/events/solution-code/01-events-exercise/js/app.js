// Add event listeners to the 3 buttons at the top of the page.
// Clicking each button should hide the block below it with the corresponding color.

// STEP 1
// create a variable for each button at the top of the page. There should be 3 in total.
// call them redBtn, blueBtn and yellowBtn

const redBtn = document.getElementById('r');
const blueBtn = document.getElementById('b');
const yellowBtn = document.getElementById('y');

// STEP 2
// create a variable for each of the blocks in the middle of the page. Again, there should be 3 of them.
// call them redBlock, blueBlock and yellowBlock

const redBlock = document.querySelector('.red');
const blueBlock = document.querySelector('.blue');
const yellowBlock = document.querySelector('.yellow');

// STEP 3
// Write a statement to add an event listener to the redBtn element. In response to the click event, it should add the class name 'hidden' to the redBlock element.

function handleRed() {
  redBlock.classList.add('hidden');
}

redBtn.addEventListener('click', handleRed);

// 3.1 - test the function in the browser

// STEP 4
// Write a statement to add an event listener to the blueBtn element. In response to the click event, it should add the class name 'hidden' to the blueBlock element.

function handleBlue() {
  blueBlock.classList.add('hidden');
}

blueBtn.addEventListener('click', handleBlue);

// 4.1 - test the function in the browser

// STEP 5
// Write a statement to add an event listener to the yellowBtn element. In response to the click event, it should add the class name 'hidden' to the yellowBlock element.

function handleYellow() {
  yellowBlock.classList.add('hidden');
}

yellowBtn.addEventListener('click', handleYellow);

// 5.1 - test the function in the browser

// BONUS 1
// Add an event listener for the "Show all blocks" button that removes the hidden class from all the colored block elements.

const showAll = document.getElementById('show');

showAll.addEventListener('click', () => {
  const elements = [redBlock, blueBlock, yellowBlock];
  elements.forEach((element) => element.classList.remove('hidden'));
});

// BONUS 2
// Modify the functions so clicking them once hides the corresponding block and clicking them again shows it again. (toggle a class)
