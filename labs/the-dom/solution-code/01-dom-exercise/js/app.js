////////////
// PART 1 //
////////////

/* Step 1a

Below the let statement below, add a statement that sets the value of the headingText variable
to reference the element with the ID value "headline"
(HINT: Use the querySelector() method.)

*/

let headingText;
// Write your statement below this line:
headingText = document.querySelector('#headline');

/* Step 1b

Write a statement that logs the text content of the headingText variable to the console.
(HINT: Use the textContent property.)

*/

console.log(headingText.textContent);

/* Step 1c

Save your changes, load index.html in your browser, open the console, and verify that the value "Popular London Parks" is logged.

*/

////////////
// PART 2 //
////////////

/* Step 2a 

Below the let statement below, add a statement that sets the value of the firstItem variable
to reference the first list item with the class value of "park"
(HINT: Use the querySelector() method.)

*/

let firstItem;
firstItem = document.querySelector('li.park');

/* Step 2b

Below the let statement below, add a statement that sets the value of the firstItemRepeat variable
to reference the first list item with the class value of "park". Use the same method (querySelector())
BUT use a different CSS selector than you did in step 2a above. 
(HINT: Look at the HTML code to identify other aspects of the code you can use to select the element.)

*/

let firstItemRepeat;
firstItemRepeat = document.querySelector('.parklist li'); // or 'li', 'li.cf', 'ul li', etc.

/* Step 2c

Write statements that log the firstItem and firstItemRepeat variables to the console.

*/

console.log({ firstItem });
console.log({ firstItemRepeat });

/* Step 2d

Save your changes, load index.html in your browser, open the console, and verify that the same DOM
element structure is logged for each of your two console.log() statements above.

*/

////////////
// PART 3 //
////////////

/* Step 3a

Below the let statement below, add a statement that sets the value of the parks variable
to reference all the list items in the list of parks.
(HINT: Use the querySelectorAll() method.)

*/

let parks;
parks = document.querySelectorAll('li.park');

/* Step 3b

Below the let statement below, add a statement that sets the value of the parksRepeat variable
to reference all the list items in the list of parks. Use the same method (querySelectorAll())
BUT use a different CSS selector than you did in step 3a above. 
(HINT: Look at the HTML code to identify other aspects of the code you can use to select the element.)

*/

let parksRepeat;
parksRepeat = document.querySelectorAll('.parklist li'); // or 'li', 'li.cf', 'ul li', etc.

/* Step 3c

Write statements that log the parks and parksRepeat variables to the console.

*/

console.log({ parks });
console.log({ parksRepeat });

/* Step 3d

Save your changes, load index.html in your browser, open the console, and verify that the same element collection
is logged for each of your two console.log() statements above.

*/

///////////
// BONUS //
///////////

/*

Write statements to do the following:
- Create a new variable called thirdItemHeading
- In the thirdItemHeading variable, select and store a reference to the h2 heading within the third list item
HINT: Read about the nth-of-type() CSS selector at https://developer.mozilla.org/en-US/docs/Web/CSS/:nth-of-type
- Log the text of the heading stored in the thirdItemHeading variable to the console

*/

let thirdItemHeading;
thirdItemHeading = document.querySelector('li:nth-of-type(3) h2');
console.log(thirdItemHeading.innerHTML);
