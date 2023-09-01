class: frontpage

<div>
  <h2>JavaScript Development</h2>
  <hr/>
  <h1>15 Closures and this</h1>
</div>

---

## Learning objectives

- Understand and explain closures.
- Instantly invoke functions.
- Implement the module pattern in your code.
- Understand and explain JavaScript context.

---

## Global scope

A variable declared outside of a function is accessible everywhere, even within functions. Such a variable is said to have **global scope**.

```js
let temp = 75; // <--- Global scope
function predict() {
  console.log(temp); // 75
}

console.log(temp); // 75
```

---

## Function scope

A variable declared within a function is not accessible outside of that function. Such a variable is said to have **function scope**, which is one type of _local scope_.

```js
let temp = 75; // <--- Global scope
function predict() {
  let forecast = 'Sun'; // <--- Local scope
  console.log(temp, forecast); // 75 Sun
}

console.log(temp, forecast); // 75 undefined
```

---

## Block scope

A variable created with `let` or `const` creates local scope within any block, including blocks that are part of loops and conditionals.

This is known as **block scope**, which is another type of _local scope_.

```js
let temp = 75; // <--- Global scope
if (temp > 70) {
  let forecast = "It's going to be warm"; // <--- Block scope
  console.log(temp, forecast); // 75 It's going to be warm
}

console.log(temp, forecast); // 75 undefined
```

---

## Closures

A **closure** is an inner function that has access to the outer (enclosing) function's variables.

```js
// Outer function that returns a reference to the inner function
function getTemp() {
  let temp = 75;
  // closure
  let tempAccess = function () {
    console.log(temp); //
  };
  return tempAccess;
}
```

---

## Building blocks of a closure

- Nested functions
- Scope: inner function has access to outer function's variables
- A `return`: statement outer function returns reference to inner function

---

## Closures: key points

- Closures have access to the outer function's variables (including parameters) even after the outer function returns.
- Closures store references to the outer function's variables, not the actual values.

---

class: code-along

# Code along

<a 
  href="https://github.com/pataruco/jsd/raw/master/labs/closures-this/closures-this-solution-code.zip"
  class="download-link">Download labs
</a>

---

## What are closures used for?

- Turning an outer variable into a private variable
- Namespacing private functions

---

class: lab

# Lab

## `1-closure-lab`

- Follow the instructions `in app.js` to build and test code that uses a closure.

---

## IFFES (immediately-invoked function expression)

- A function expression that is executed as soon as it is declared
- Pronounced "_iffy_"

---

## IFFE based on a function expression

Make a function expression into an IIFE by adding `()` to the end

```js
let countDown = (function () {
  let counter;
  for (counter = 3; counter > 0; counter--) {
    console.log(counter);
  }
})(); // <-- Invokes the function!
```

---

## IFFE based on a function expression

Make a function expression into an IIFE by adding `()` to the end

```js
// Wrapping parentheses create a statement
(function countDown() {
  let counter;
  for (counter = 3; counter > 0; counter--) {
    console.log(counter);
  }
})(); // <-- Invokes the function!
```

---

class: code-along

# Code along

???

02-iife-codealong

---

## The module pattern

- Using an IIFE to return an object literal
- The methods of the returned object can access the private properties and methods of the IIFE (closures!), but other code cannot do this
- This means specific parts of the IIFE are not available in the global scope

---

## Building a module

```js
const counter = function () {
	let count = 0
	return { // returns an object literal
		reset: function () { // closures
			 count = 0
		}
		getCount: function () {
			return count
		}
		increment: function () {
			count++
		}
	}
}() // IIFE
```

---

## Benefits of the module pattern

- Keeps some functions and variables private
- Avoids polluting the global scope
- Organizes code into objects

---

class: code-along

# Code along

???

03-modules-codealong

---

class: lab

# Individual activity

## `04-modules-exercise`

- In app.js, create the module so it exports methods for the behaviors described in the comment at the top of the file.
- When your code is complete and works properly, the statements at the bottom of the file should all return the expected values in the console.

---

## `this`

## How is context decided?

- At runtime
- Based on how the function is called

---

## Context rules

| Situation                         | What this maps to                    |
| --------------------------------- | ------------------------------------ |
| method invocation                 | the object that owns the method      |
| constructor function              | the newly created object             |
| event handler                     | the element the event was fired from |
| function invocation               | the global object (window)           |
| function invocation (strict mode) | undefined                            |
| arrow function                    | the context of the caller            |

---

class: code-along

# Code along

???

05-this-codealong

---

class: lab

# Individual activity

## `06-this-exercise`

- In app.js, read through the code without running it.
- Predict the results of the two console.log statements.
- Run the code and check the results against your predictions. If the results were different, identify why.

---

class: frontpage

<div>
  <h2>JavaScript Development</h2>
  <hr/>
  <h1>End of presentation</h1>
</div>
