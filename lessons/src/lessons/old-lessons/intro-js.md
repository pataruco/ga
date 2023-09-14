class: center, middle

# .center[Intro to JavaScript]

## .center[Pedro Martin]

.logo[![](https://pataruco.s3.amazonaws.com/ga/assets/ga.svg)]

---

## Agenda

- What is JavaScript
- The DOM
- Events
- Functions
- Variables
- Conditionals

---

# What is JavaScript?

- Is interpreted programming language that conforms to the ECMAScript specification
- Alongside HTML and CSS, JavaScript is one of the core technologies of Web
- JavaScript enables interactive web pages and is an essential part of web applications.

---

## What is JavaScript?

- Programming language in the browser
- Created in 10 days back in 1995 by Brendan Eiche
- Used to add interaction to the page
- Used to add complex functionality
- Often driven by user initiated events
- Very powerful
- Nothing to do with Java

---

# JavaScript is not Java

---

## Examples

- [Codepen](https://codepen.io/pataruco/pen/MVMKyJ?editors=1010)
- [Student example](http://pataruco.s3.amazonaws.com/ga/tic-tac-toe/index.html)
- [Red Badger](https://www.red-badger.com)

---

## What is a program

A **program** is a set of instructions that you write to tell a computer what to do

---

## What is programming

**Programming** is the task of writing those instructions in a language that the computer can understand.

---

## What is programming

Programming is a bit like a following a recipe. There's a series of steps to execute in a certain order that produce a particular outcome.

The process of programming takes an abstract concept and breaks it down into a series of small, logical, bite-sized steps which are then written in code and finanally executed usually by the browser in the case of JavaScript.

---

## Becoming a programmer

It is not about the programming language. It is about changing how you think.

We have to know how the computer thinks to change how we think.

---

## How computers "think"

The short answer is that they don't think.

The slightly longer answer is that while computers don't think, they act as if they do, by sequentially executing simple instructions.

The only things a computer knows are the things we tell it.

---

## Pseudo Code

Pseudocode is the process of writing a program without using the syntax of a programming language.

Pseudocode is a mixture of natural language and high-level programming constructs. For example,
If the door is closed and I want to exit the room, then open the door
This semester we will learn what these keywords and structures are and how they are used to create a program…

---

## Thermostat

---

## The DOM

JavaScript interacts with our HTML document. It can read info on the page and make changes to any element on the page.

To learn how to do this we need a common language to describe the construction of the document and the elements within it.

---

## The DOM

The **Document Object Model** is a representation of the page used by JavaScript to interact with all the elements.

---

## The DOM

We can visualise the DOM as a tree like structure of each element and their heirarchy.
But the DOM is more than just a representation of the HTML. Each element on the page is an object that has certain characteristics and can perform certain actions.

---

## The DOM

Many programming languages use the concept of objects to model real world behaviour and JS is no different.

---

## The DOM

Imagine a pen. It is an object. It is made up of a lid, the pen tip and the ink catridge. This is an object that is made up of multiple parts - just like a web page.

---

## The DOM

A pen can be described in a couple of ways:

- The pen is red

- The pen can write

We can describe the object as having properties (like its colour) and methods (actions like writing)

---

## The DOM

We have the same thing in JavaScript.
The document is an object and has a method for finding elements within it.
Those elements are also objects which have properties like their style or inner text content.
Elements also have methods for actions like getting, setting or removing attributes.

---

## The DOM

When writing interactive JavaScript we need to know 3 things:

1.  The **E**lement(s) we want to interact with
2.  The **E**vent we want to kick off the interaction
3.  The **E**xecution: what happens next and what elements are involved

We called this the three **E**'s

We can write this out in "normal" language first (**Pseudocode**)

---

## Events

There are many events that occur in the browser as the user interacts with the page:

- click
- submit
- resize
- scroll
- hover
- touch
- drag and drop

---

## Events

We tell JavaScript to listen for these events and then trigger a bit of code (called a function when the event occurs.

The function contains a series of instructions which allow us to build up more complex behaviour.

---

## JavaScript Exercise

### [Traffic lights](https://codepen.io/pataruco/pen/oNvxGxR)

---

## Variables

- We can tell our program to remember values for us to use later on.
- Their values can change over time (ie. they can vary)
- The action of setting a variable value is called assignment
- The action of getting the value from a variable is called accessing the variable

---

## Creating variables

To create a variable for the first time we use the `var`, `let`, `const` keyword and name the variable.
We set its value with the `=` operator.

```js
var score = 0;
let fruits = ['banana', 'orange', 'mango'];
const letter = 'a';
```

To reference the variable we just call it by its name. Its
value will be returned back to us.

```js
score; // returns 0
fruits; // ['banana', 'orange', 'mango']
letter; // a
```

---

## Variable re-assigment

To change the value in an already created variable, we just reference it by name.

```js
var score = 0;
score = 10;
score; // returns 10

let fruits = ['banana', 'orange', 'mango'];
fruits = ['apple', 'pear'];
fruits; // ['apple', 'pear'];
```

### `const`

```js
const letter = 'a';
const letter = 'b'; // Uncaught SyntaxError: Identifier 'letter' has already been declared
```

---

## Variable Conventions

- Variable names start with a lower case letter or `_` or `$` character
- Variables can't start with a number
- If they contain multiple words, subsequent words start with an upper case letter. This is known as camelCase. 🐫

```js
var numberOfStudents = 10;
```

---

## Variables & data types

We can store lots of different types of information in variables.

- `String` for text
- `Integer` or `Float` for numbers
- `Boolean` true or false values
- `Array` collections of data
- `Objects` contain series of `key:value`pairs
- `Functions`

---

## Strings

- Stores text content
- String literal is surrounded by quotes

```js
const question = 'How is the weather today?';
const answer = 'Warm';
```

---

## Strings

Double vs single vs string literals quoted strings:

```js
const singleQuote = 'They "purchased" it';
const doubleQuote = "It's a beautiful day";

const name = 'Pedro';
const stringLiteral = `Hola ${name}`;
stringLiteral; // "Hola Pedro"
```

To have a string that contains apostrophes or air quotes, we need to use the opposite type of quote marks or the string will break into multiple parts.

---

## String to number

```js
const amount = '4';
typeof amount; // returns "string"
amount = parseInt(amount, 10);
typeof amount; // returns "number"
const pi = '3.14159';
typeof pi; // returns "string"
pi = parseFloat(pi);
typeof pi; // returns "number"
```

Sometimes we need to grab some text (a string) from the page and turn it into a number so we can do mathmatical operations with it.

---

## Number to string

```js
const quantity = 4;
quantity = quantity.toString();
```

We can also convert from numbers to strings although this is less common.

---

## Numbers

Represent numerical data in either whole numbers or decimals.

```js
integer: 42;
decimal: 3.14159265;
```

Whole numbers are called integers and decimals are called oating point numbers.

---

## Arithmetic in JavaScript

```js
const a = 43;
const b = 10;
a + b; // returns 53
a - b; // returns 33
a * b; // returns 430
a / b; // returns 4.3
a % b; // returns 3
```

---

## Score keeper

[Code along](https://codepen.io/pataruco/pen/XWrNEVo)

---

## Conditionals

[How are websites made?](https://medium.com/i-love-charts/how-are-websites-made-397443c987a7)

---

## Making decisions

It's either `true` or `false`

If you are greater than 18 you are an adult

```js
if (age > 18) {
  console.log('You are an adult');
}
```

---

## Comparisons

Are two things equal?

```js
10 === 10; // returns true
10 === 5; // returns false
```

---

## Comparison Operators

```js
const x = 3;
```

| Operator | Description                     | Comparing   | Returns |
| -------- | ------------------------------- | ----------- | ------- |
| `==`     | equal to                        | `x == 8`    | `false` |
| `===`    | exactly equal to value and type | `x === '3'` | `false` |
| `===`    | exactly equal to value and type | `x === 3`   | `true`  |

---

## Comparison Operators

```js
const x = 3;
```

| Operator | Description                         | Comparing   | Returns |
| -------- | ----------------------------------- | ----------- | ------- |
| `!=`     | is not equal to                     | `x != 8`    | `true`  |
| `!==`    | is not neither equal value nor type | `x !== '3'` | `true`  |
| `!==`    | is not neither equal value nor type | `x !== 3`   | `false` |

---

## Comparison Operators

```js
const x = 3;
```

| Operator | Description              | Comparing | Returns |
| -------- | ------------------------ | --------- | ------- |
| `>`      | greater than             | `x > 8`   | `false` |
| `<`      | less than                | `x < 8`   | `true`  |
| `>=`     | greater than or equal to | `x >= 8`  | `false` |
| `<=`     | less than or equal to    | `x >= 8`  | `true`  |

---

## Conditional syntax

```js
if (conditionIsTrue) {
  // Do stuff
}
```

---

## Conditional syntax

```js
if (condition) {
  //Do stuff
} else {
  //Do other stuff
}
```

---

## Conditional syntax

```js
const topic = 'JS';
if (topic === 'JS') {
  console.log("You're learning JavaScript");
} else if (topic === 'JavaScript') {
  console.log("You're still learning JavaScript");
} else {
  console.log("You're learning something else");
}
```

---

## Multiple conditions

We can make the condition more strict with a logical `AND` (`&&`) operator. For the whole if statement to be true, both conditions must be true.

```js
if ( name === "GA-Guest" && password === "schooldinner")
// Allow access to internet
}
```

---

# Multiple conditions

We can make the condition more relaxed with a logical `OR` (`||`) operator. For the whole if statement to be true, only one of the conditions must be true.

```js
if (day === 'Tuesday' || day === 'Thursday') {
  // Exercise
}
```

---

## Functions

A function definition consists of the `function` keyword, followed by:

- The name of the function.
- A list of parameters to the function, enclosed in parentheses (`()`) and separated by commas.
- The JavaScript statements that define the function, enclosed in curly brackets, `{ }`.

```js
function square(number) {
  return number * number;
}
```

---

## Functions

```js
function square(number) {
  return number * number;
}
```

The function square takes one parameter, called `number`. The function consists of one statement that says to return the parameter of the function (that is, `number`) multiplied by itself. The `return` statement specifies the value returned by the function.

---

## Lab

[Dice roller](https://codepen.io/pataruco/pen/XWrNEVo)

---

## Objects

An object is a collection of properties that are made up of key:value pairings.

```js
const myObject = {
  key: value,
};
```

The key is the name of the property, the value can be anything:
a string, a number, a function, even another Object

---

## Objects

An object in JS can be compared to an object in real life. It has a number of properties that define it.

```js
const car = {
  make: 'Tesla',
  model: 'Model 3',
  price: '£30,000',
};
```

We can access these properties using dot notation

```js
car.make; //returns 'Tesla'
car.make = 'Ford';
car.make; // returns 'Ford'
```

---

## Arrays

An array is an ordered collection of values, this time with no key.
Unlike Objects, the order of an Array is really important, and is persisted.
Again, the value can be anything.

```js
const myArray = ['some string', 269, { key: 'value' }, [1, 2, 3]];
```

The order of an Array is zero indexed.

```js
console.log(myArray[0], myArray[1]); // prints 'some string', 269
```

---

## Array methods

Array methods are functions that we can do to Arrays.

We can add values into our array, and take them out, but the order is always persisted.

```js
myArray.push('apple'); // adds the string 'apple' to the end of the Array
myArray.pop(); //removes the last entry from the Array
myArray.unshift(100); // add the number 100 to the start of the Array
myArray.shift(); // removes the first entry in the Array
```

---

## Array methods

The most important Array methods we use are called iterators. This means that we
iterate over each entry in the Array, and do something to it.

The first one is a simple `for` loop.

```js
for (let i = 0; i < myArray.length; i++) {
  /*do something to*/ myArray[i];
}
```

The rest are built in functions (can be invoked using dot notation on Array)

---

## Array methods

The `forEach` method executes a provided function once for each array element.
This is the same as our for loop.

```js
myArray.forEach(element => {
  console.log(element);
});
```

The `map` method returns a new array with the results of having performed a
function on each element of the array.

```js
const numbers = [4, 5, 10, 12];
const doubled = numbers.map(number => {
  number * 2;
});
console.log(doubled); // returns [8, 10, 20, 24]
```

---

## Array methods

The filter method returns a new Array with the elements that pass a condition in the provided functions

```js
const numbers = [4, 5, 10, 12];
const filtered = numbers.filter(number => {
  number < 10;
});
console.log(filtered); // returns [4, 5]
```

The reduce method executes a reducer function on each element, returning a single value.

```js
const numbers = [4, 5, 10, 12];
function reducer(accumulator, currentValue) {
  accumulator + currentValue;
}
console.log(numbers.reduce(reducer), 0); // returns 31
```

---

## Lab

[Dice roller array edition](https://codepen.io/pataruco/pen/OJLNQom)
