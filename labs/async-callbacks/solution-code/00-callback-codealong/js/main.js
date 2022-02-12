// psuedo code:

// Add event listener on button clicks
// Get name from user in alert box
// Show greeting with user's name
// Show name tag with user's name

'use strict';

const greetButton = document.querySelector('#greetBtn');
const nametagButton = document.querySelector('#nametagBtn');

const greetDiv = document.querySelector('#greetText');
const nametagDiv = document.querySelector('#nametagText');

greetButton.addEventListener('click', function () {
  getName(showGreeting);
});

nametagButton.addEventListener('click', function () {
  getName(showNametag);
});

const getName = (callback) => {
  let name = prompt("What's your name?");
  // ⬆️⬆️⬆️ code execution stops here to allow name to be completed by prompt
  callback(name);
};

const showGreeting = (name) => {
  nametagDiv.classList.add('hidden');
  greetDiv.textContent = 'Hello ' + name + '!';
  greetDiv.classList.remove('hidden');
};

const showNametag = (name) => {
  greetDiv.classList.add('hidden');
  nametagDiv.innerHTML =
    '<div>Hello, my name is</div><span>' + name + '</span>';
  nametagDiv.classList.remove('hidden');
};
