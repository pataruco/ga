/***************
 * PRACTICE 1
 * use console.log to check your JS file is loaded correctly
 */

// write you console.log below this line
console.log('it works!');

/***************
 * PRACTICE 2
 * creating variables
 *
 * TASK:
 * Create a variable called myVar and give it the value "amazing"
 * Log the value of your variable to the console
 * Add a second console log below the first: console.log(typeof(myVar)) and note the result
 * Change the value in your myVar variable and note how the typeof(myVar) changes
 */

const myVar = 42;
console.log(myVar);
console.log(typeof myVar);

/***************
 * PRACTICE 3
 * working with variables and types
 *
 * TASK:
 * Create four variables using a combination of 'let' and 'const' and name them with camelCase
 * Give each one a different value
 * Give each one a different data type (string, number, boolean or array)
 * Log each variable to the console
 * Optional: use typeof() to check the type of each variable
 */

let someVariable = 'some value';
let aNumber = 579;
const isActive = true;
const fruits = ['apples', 'pears', 'oranges'];

console.log(someVariable, aNumber, isActive, fruits);

/***************
 * PRACTICE 4
 * working with arrays
 *
 * TASK:
 * Create an array for a shoppingList
 * Add 3-4 items into the array
 * Log your array to the console
 * Log the number of items in your array to the console
 * Use the .push() array method to add a new item to your shopping list
 * Log the new array and it's length to the console
 */

const shoppingList = ['toilet roll', 'hand sanitizer', 'booze'];
console.log(shoppingList);
console.log(shoppingList.length);
shoppingList.push('more booze');
console.log(shoppingList, shoppingList.length);

/***************
 * PRACTICE 5
 * working with functions
 *
 * TASK:
 * Create a function that logs a greeting to the console
 * Your function should accept one parameter for a persons name
 * Your function should log to the console and display a greeting message and the name
 * Call your function and pass in a persons name and check the console
 *
 * Optional: update your function to take two parameters: firstName, lastName.
 * Update your greeting to show both
 */

function sayHello(name) {
  console.log('Hello there, ' + name);
}
sayHello('Pedro');

/***************
 * PRACTICE 6
 * working with the DOM - single elements
 *
 * TASK:
 * use getElementById to find the h1 element on the page
 * save the result into a variable
 * use JS to add the class "fancy" to the element
 * use JS to change the innerText of the h1 to something other than "Javascript Practice"
 */

const title = document.getElementById('js-page-title');
title.classList.add('fancy');
title.innerText = 'JavaScript is Awesome!';

/***************
 * PRACTICE 7
 * working with the DOM - multiple elements
 *
 * TASK:
 * use querySelectorAll to find the p elements on the page
 * save the result (an array) into a variable
 * use JS to add the class "fancy" to EACH element (you will need a loop!)
 */

const paragraphs = document.querySelectorAll('p');

// for loop
for (let i = 0; i < paragraphs.length; i++) {
  paragraphs[i].classList.add('fancy');
}

// forEach loop
paragraphs.forEach(function (p) {
  p.classList.add('fancy');
});

// alternative forEach loop
paragraphs.forEach((p) => p.classList.add('fancy'));

/***************
 * PRACTICE 8
 * working with the DOM - events
 *
 * TASK:
 * create a function called sendHelp
 * add the following line to the body of the function: window.location.href = 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference';
 * use getElementById or querySelector to find the help button
 * add a 'click' event listener to the button and pass the name of your sendHelp function
 * click the button and you should be redirected to another website
 */

function sendHelp() {
  window.location.href =
    'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference';
}
const button = document.querySelector('button');
button.addEventListener('click', sendHelp);

/***************
 * PRACTICE 9
 * working with the DOM - multipe elements and events
 *
 * TASK:
 * toggle the "fancy" class on any paragraph when you click on it
 *
 * TIPS:
 * Think of the 3 E's - element, event, execution
 * Think about how you will find all the p tags (which document method can you use)
 * Think about how you will add the event listener to each one of the p tags
 * Think about passing the event object into your handler function
 * Use event.target inside your handler function for a reference to the element that was clicked
 */

function toggleFancy(event) {
  // event.target is the element where the event originated
  event.target.classList.toggle('fancy');
}
paragraphs.forEach(function (p) {
  p.addEventListener('click', toggleFancy);
});
