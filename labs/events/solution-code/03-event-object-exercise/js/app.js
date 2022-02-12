// Enhance this code using an event object to prevent the form from submitting when the 'Add reminder' button is clicked.

const addButton = document.querySelector('#addReminder');
const reminderBox = document.querySelector('#reminder');
const reminderList = document.querySelector('#reminderList');

// create event listener for the submit button
addButton.addEventListener('click', (event) => {
  // prevent the form from being submitted
  event.preventDefault();
  // get the text value the user entered in teh box
  const newReminder = reminderBox.value;
  // create a new list item (li element)
  let reminderItem = document.createElement('li');
  reminderItem.className = 'list-group-item';
  // create a text node consisting of the value the user entered
  reminderItem.textContent = newReminder;
  // append the li element to the existing list in the DOM
  reminderList.appendChild(reminderItem);
  // reset the value in the text box to an empty string
  reminderBox.value = '';
});
