import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js';
import {
  getDatabase,
  ref,
  push,
  onValue,
  update,
} from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js';
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyD8hWUGcBcROU2bJuljo_YzNvELe2Sz1Zs',
  authDomain: 'london-jsd-14-test.firebaseapp.com',
  projectId: 'london-jsd-14-test',
  storageBucket: 'london-jsd-14-test.appspot.com',
  messagingSenderId: '867039899555',
  appId: '1:867039899555:web:b83f1a0ac8093a2761f416',
  databaseURL:
    'https://london-jsd-14-test-default-rtdb.europe-west1.firebasedatabase.app/',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// https://firebase.google.com/docs/reference/js/firebase.database
const db = getDatabase(app);

// create a section for messages data in your db
const messagesDatabase = ref(db, 'messages');

/**
 * CREATE the messages in the database
 */

// Element
const formElement = document.querySelector('#message-form');
const inputTextElement = document.querySelector('#message');

// Event
formElement.addEventListener('submit', createMessage);

// Execution
function createMessage(event) {
  // by default a form submit reloads the DOM which will subsequently reload all our JS
  // to avoid this we preventDefault()
  event.preventDefault();

  // grab user message input
  const { value: message } = inputTextElement;

  // clear message input (for UX purposes)
  inputTextElement.textContent = '';

  // use the push method to save data to the messages
  // https://firebase.google.com/docs/reference/js/database#push
  push(messagesDatabase, {
    message,
    votes: 0,
  });
}

/**
 * READ messages in the database
 */

// Elements

const messageBoard = document.querySelector('.message-board');
const templateElement = document.querySelector('template');

// Event

window.addEventListener('DOMContentLoaded', getMessages);

function getMessages(_event) {
  //  https:firebase.google.com/docs/reference/js/database#onvalue
  onValue(messagesDatabase, (snapShot) => {
    const messages = snapShot.val();
    renderMessages(messages);
  });
}

function renderMessages(messages) {
  messageBoard.innerHTML = '';

  if (messages) {
    Object.entries(messages).forEach(([key, messageItem]) => {
      const { message, votes } = messageItem;
      renderMessage({ key, message, votes });
    });
  }
}

function renderMessage({ key, message, votes }) {
  const clone = templateElement.content.cloneNode(true);

  const messageElement = clone.querySelector('p:first-of-type');
  const votesElement = clone.querySelector('#votes');
  const voteUpElement = clone.querySelector('#vote-up');
  const voteDownElement = clone.querySelector('#vote-down');
  const deleteElement = clone.querySelector('#delete');

  messageElement.innerText = message;
  votesElement.innerText = votes;

  voteUpElement.setAttribute('data-id', key);
  voteDownElement.setAttribute('data-id', key);
  deleteElement.setAttribute('data-id', key);

  voteUpElement.addEventListener('click', voteUpMessage);
  voteDownElement.addEventListener('click', voteDownMessage);
  deleteElement.addEventListener('click', deleteMessage);

  messageBoard.appendChild(clone);
}

function getMessageId(event) {
  const {
    currentTarget: {
      dataset: { id },
    },
  } = event;

  return id;
}

function getMessageById(id) {
  let messages;
  onValue(messagesDatabase, (snapShot) => {
    messages = snapShot.val();
  });
  return messages[id];
}

/**
 * Update messages in the database
 */

async function voteUpMessage(event) {
  const messageId = getMessageId(event);
  const message = getMessageById(messageId);

  const updates = {};

  updates[messageId] = {
    ...message,
    votes: message.votes + 1,
  };

  // https://firebase.google.com/docs/database/web/read-and-write#update_specific_fields
  await update(messagesDatabase, updates);
}

async function voteDownMessage(event) {
  const messageId = getMessageId(event);
  const message = getMessageById(messageId);

  const updates = {};

  updates[messageId] = {
    ...message,
    votes: message.votes - 1,
  };

  // https://firebase.google.com/docs/database/web/read-and-write#update_specific_fields
  await update(messagesDatabase, updates);
}

/**
 * Delete messages in the database
 */

async function deleteMessage(event) {
  const messageId = getMessageId(event);

  const updates = {};

  updates[messageId] = null;

  // https://firebase.google.com/docs/database/web/read-and-write#delete_data
  await update(messagesDatabase, updates);
}
