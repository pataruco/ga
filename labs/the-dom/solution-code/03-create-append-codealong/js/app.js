// Add an h1 to header
const h1 = document.createElement('h1');
h1.innerText = 'Reminders';

const header = document.querySelector('header');
header.appendChild(h1);

// From a todo list insert items in the  surveyList
const todoList = [
  'Conquer the world',
  'Plant a tree',
  'Visit all my friends',
  'Learn Rust 🦀',
];

const surveyList = document.querySelector('#surveyList');

const createListItem = (item) => {
  const li = document.createElement('li');
  li.innerText = item;
  li.classList.add('list-group-item');
  return li;
};

todoList.forEach((surveyItem) => {
  const li = createListItem(surveyItem);
  surveyList.appendChild(li);
});
