class: frontpage

<div>
  <h2>JavaScript Development</h2>
  <hr/>
  <h1>03 Functions, scope & conditionals</h1>
</div>

---

## Learning objectives

- Describe how parameters and arguments relate to functions
- Create and call a function that accepts parameters to solve a problem
- Define and call functions defined in terms of other functions
- Return a value from a function using the return keyword
- Define and call functions with argument-dependent return values

---

## Functions

- **Modular**: Allow us to group a series of statements together to perform a specific task
- **Reusable**: We can use the same function multiple times
- **Efficient**: Not always executed when a page loads. Provide us with a way to 'store' the steps needed to achieve a task.

---

## Functions

### Declaration syntax

```js
function name(parameters) {
  // do some stuff
}
```

### Example

```js
function sayHello() {
  console.log('Hello');
}
```

---

## Functions

### Expression syntax

```js
const name = function (parameters) {
  // do some stuff
};
```

#### Example

```js
const sayHello = function () {
  console.log('Hello');
};
```

---

## Functions

### Arrow syntax

```js
const sayHello = (parameters) => {
  // do some stuff
};
```

#### Example

```js
const sayHello = () => {
  console.log('Hello');
};
```

---

## Functions

### Invoking

.row[
.column[

- When we want to execute the function (make it run), we use the function name followed by parentheses `()`
- We can say:
  - _Call_ the function
  - _Invoke_ the function
  - _Execute_ the function
    ]

```javascript
const picADescriptiveName = () => {
  console.log('👋');
};
picADescriptiveName();
// function name + parentheses
```

]

---

class: code-along

# Code Along

Download [labs](https://github.com/pataruco/jsd/raw/master/labs/functions/functions-starter-code.zip)

???
Write a `sayHello` function write in declaration, expression and arrow functions.
`console.log` a variable with each one

---

class: lab

## Pair activity

- Open `4-functions-exercise`
- Follow the instructions for the functions exercise part 1.
- Practice defining and executing functions.
- BONUS: Define the functions as expressions and fat arrows

---

## Parameters

### Parameters make our functions reusable

- The values in the parentheses are placeholders for the data that we pass to our functions.
- When we define a function we call them **parameters**.
- They behave like variables inside our functions.
- When we invoke a function, the data we pass is given to the placeholders in the order that the parameters appear when the function is defined.
- The data we pass to the function are called **arguments**.

---

## Parameters

### Using parameters

```js
function sayHello(name) {
  // name is the parameter
  console.log('Hello ' + name);
}

sayHello('Jen'); // 'Jen' is an argument
```

---

## Parameters

### Using multiple parameters

```js
function add(num1, num2) {
  console.log(num1 + num2);
}

add(2, 3); // 2 and 3 are arguments
```

---

## Parameters

### Using default parameters

```js
function add(num1, num2 = 3) {
  console.log(num1 + num2);
}

add(2);
```

---

class: code-along

# Code along

???

- Write an add function that takes 2 numbers and adds them together
- Write a sayHello function that takes a name and returns a string template
- Write a function that picks returns if a name is the member of the royal family - Elizabeth, Philip, Charles, Harry, William, Kate, Megan
- Give a default parameter so calling the function without an argument still returns a name

---

class: lab

# Pair activity

## Reading functions

- Open `4-functions-exercise`
- Given a function and a set of arguments, predict the output of a function.
- Look at Part 2 **A and B**. Predict what will happen when each function is called.

## Using parameters

- Open `4-functions-exercise`
- See if you can write one function that takes some parameters and combines the functionality of the `makeAPizza` and `makeAVeggiePizza` functions (make your own pizza).
- **BONUS**: Create your own function with parameters. This function could do anything!

---

## `return` statement

- Ends function’s execution
- Returns a value — the result of running the function
- It let’s us use the result of the function
- By contrast `console.log()` is only for us devs for debugging!

---

## `return` statement

```js
function add(num1, num2) {
  return num1 + num2;
}

const twoPlusThree = add(2, 3);
// twoPlusThree === 5
```

---

class: lab

# Pair activity

## Using parameters (round 2)

- Open `5-price-calculator`
- Write code to to calculate a customer's total cost in dollars based on product price, tax rate, shipping cost, and the currency they're using for the purchase (dollars or euros).
- **BONUS 1**: Convert your function to assume a currency of "dollar" by default.
- **BONUS 2**: Convert your code to use arrow functions.

---

## Scope

## Variables and function scope

- All variables are scoped to the functions that declare them.
- Variables declared with const and let may be further block scoped inside of a function
- Variables are available inside their local scope and any children scopes
- Variables in inner (child) scopes can override outer (parent) scope variables

---

class: code-along

# Code Along

???
Introduce closures with the MDN example of makeAdder

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures

---

## Comparison Operators

### Why Use Conditional Statements?

Conditional logic allows you to create **vastly more complex programs**. Think of the decision-making process of giant flowcharts...

<img src="https://pataruco.s3.amazonaws.com/ga/fewd/conditional.svg" style="width: 300px;" alt="control flow">

---

## Comparison Operators

First, we'll need comparison operators — a set of operators that give you the ability to compare values and return a Boolean result (true or false).

| Comparison Operator | Meaning                                |
| ------------------- | -------------------------------------- |
| `>`                 | Greater than                           |
| `>=`                | Greater than or equal to               |
| `<`                 | Less than                              |
| `<=`                | Less than or equal to                  |
| `===`               | Strict equality (value and data types) |
| `!==`               | Strict inequality                      |

---

## Comparison Operators

### Double vs. Triple Equals

#### `==` vs `===`

#### `!=` vs `!==`

Double equals doesn't check for type, so it won't care if the data types are the same. This can lead to some unpredictable behavior!

Triple equals — the strict equality operator — will compare both the value and data type, creating much more predictable results.

**Just use triple equals!**

---

## Conditional Statements

Conditionals are function-like statements that take Booleans as inputs:

```javascript
if (valueOne === valueTwo) {
  console.log('Valid');
}
```

Note the **code block** defined in curly braces (`{ }`). This code block executes if the Boolean provided is `true`.

---

## `else` Statements

You will often want to have an `else` statement immediately after the `if` statement. This will trigger when the `if` comparison turns out to be `false`.

```javascript
if (valueOne === valueTwo) {
  console.log('Valid');
} else {
  console.log('Invalid');
}
```

---

## Multiple Conditions

```javascript
if (test1 === test2) {
  console.log('test1 and test2 are equal');
} else if (test1 > test2) {
  console.log('test1 is greater than test2');
} else {
  console.log('none of the conditions were met');
}
```

---

## Careful! Equals Aren't All Equal...

When you use `=`, that is an **assignment operator**.

If you try to use `=` instead of `===` in a comparison statement, you will get strange results — it will always evaluate as `true`!

```javascript
// This won't work the way you think it will!
let temperature = 0;
if ((temperature = 100)) {
  console.log('Always going to happen!');
}
```

---

## Logic Operators

Logic operators allow us to combine multiple conditions together. For very complex conditionals, you can put several conditions in parentheses to evaluate them as a single expression.

- **`&&` (AND)** : Evaluates to `true` only if all combined values are `true`.
- **`||` (OR)** : Evaluates to `true` if any of the combined values are `true`.
- **`!` (NOT)** : Reverses the Boolean result of whatever follows it.

---

## Multiple Conditions, One Statement

You can check to see if two conditions are met in one statement with a logic operator:

```javascript
let clickDetected = true;
let clickTwoDetected = false;

if (clickDetected === true && clickTwoDetected === false) {
  // do something
}
```

---

## Using `!`

The **not** operator, `!`, is a great way to check if something exists in the JS memory system.:

```javascript
let whatever; // would be undefined, no memory assignment
if (!whatever) {
  console.log(`Turns out whatever doesn't exist!`);
}
```

If there isn't a comparison inside a conditional statement, JS will interpret the argument as a Boolean. The only values that would equate to false are `0`, `-0`, `null`, `NaN`, `undefined`, or `''`, so nearly anything that exists will pass the test.

---

## Pro Tip: Condensing Conditionals

Like we saw in the previous slide, not all conditionals need a comparison statement — especially if the values being tested are already Booleans!

Thus, you will rarely see a comparison with `=== true` or `!== false`.

Instead, developers will use the following pattern:

```javascript
if (clickDetected && !clickTwoDetected) {
  // do something
}
```

---

## `switch` Statements

switch is an implicit equality comparison (`===`). It's comparing the argument of `switch` with each `case`. The `switch` looks for every matching `case`, then performs instructions until it hits `break`, which exits the chain.

```javascript
let transportOption = 'car';
// Add class to <div id="dest"> depending on variable
switch (transportOption) {
  //                                                                      --
  case 'car' //  <-- Condition                                              |
    document.querySelector('#dest').classList.add('car'); // <-- Instruction|
    break; // <-- Stop 🛑                                                   |
  case 'bus': //                                                            |
    document.querySelector('#dest').classList.add('bus'); //                |--Container
    break; //                                                               |
  case 'metro': //                                                          |
    document.querySelector('#dest').classList.add('metro'); //              |
    break; //                                                               |
} //                                                                      --
```

---

## Multi-Case `switch`

`switch` can be used to funnel multiple cases to the same instruction. Just list cases together before the instruction/break combo, and you can cleanly handle similar cases:

```javascript
switch (seasonCheck) {
  case 'autumn':
  case 'fall':
    console.log("It's fall now!");
    break;

  case 'spring':
  case 'getting warmer':
    console.log('Spring time is near');
    break;
}
```

---

## Making Conditionals Easier

Conditionals make programs harder to debug because more operations can take place in any given program.

- Use functions to encapsulate code as necessary.
  - If the code inside a conditional takes up five lines or more, it will become hard to keep track of which layer of conditional we’re in. Make it a function!
- `console.log()` is your friend.
  - Leave yourself messages to figure out what path a conditional took.
  - If a conditional gives you mysterious results, log the values and data types.
- Use `switch` statements for situations with four or more cases.
  - The setup for a `switch` only pays off in lengthier situations.

---

## Homework

<h3>
  <a href="https://github.com/pataruco/jsd/raw/master/homeworks/week-2/week-2-starter-code.zip" class="download-link">
  Instructions
  </a>
</h3>

---

class: frontpage

<div>
  <h2>JavaScript Development</h2>
  <hr/>
  <h1>End of presentation</h1>
</div>

---
