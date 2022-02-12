// get the button with the ID of addReminder from the dom
const addReminderButton = document.getElementById('addReminder');

// get the reminder list (it has the ID of reminderList)
const reminderList = document.getElementById('reminderList');

// METHOD 1: WITHOUT JAVASCRIPT EVENTS:
// write a function that:
// a. gets the input from the dom
// b. console.logs the value of the input (input.value)
// c. creates a new li element called newReminder
// d. adds the class list-group-item to the newReminder element
// e. sets the innerHTML to the value of the input
// f. append the new reminder to the reminderList

function makeNewReminder() {
  const input = document.getElementById('reminder');
  console.log(input.value);
  const newReminder = document.createElement('li');
  newReminder.classList.add('list-group-item');
  newReminder.innerHTML = input.value;
  reminderList.appendChild(newReminder);
}

addReminderButton.addEventListener('click', makeNewReminder);

// METHOD 2: WITH JAVASCRIPT EVENTS:

function makeNewReminderWithEvent(e) {
  const newReminder = document.createElement('li');
  newReminder.classList.add('list-group-item');
  newReminder.innerHTML = e.target.value;
  reminderList.appendChild(newReminder);
}
