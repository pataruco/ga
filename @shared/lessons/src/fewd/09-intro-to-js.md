class: frontpage

<div>
  <h2>Front-End Web Development</h2>
  <hr/>
  <h1>09 Intro to JavaScript</h1>
</div>

---

## Agenda

- Distinguish between code and a program.
- Start writing pseudo code for planning your programs
- Define basic variables and data types in JavaScript.
- Understand the role of functions in JavaScript.

---

## What Is a Program?

Code is used to **WRITE** a program.

A program is just a set of **INSTRUCTIONS**.

> The good news about computers is that **they do what you tell them to do**. The bad news is that they **do what you tell them to do**.

> [**Ted Nelson**](https://en.wikipedia.org/wiki/Ted_Nelson)

---

## Thinking Like a Computer

The art of programming requires understanding how a computer thinks:

| Cons                                                          | Pros                                                                              |
| ------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| It only knows what you tell it...                             | ...but it will remember what it’s been told.                                      |
| It only understands a very limited set of phrases (syntax)... | ...but you can teach it a lot by combining these basic phrases together.          |
| It will always do what you say...                             | ...but not necessarily what you meant.                                            |
| It has no understanding of context...                         | ...but it’s not shy about saying when it doesn’t understand you (error messages). |

---

## Pseudocode

Is an attempt to break down a larger process into the smallest imaginable component steps.

Pseudocode uses the structure of code without having to worry about the actual coding language (syntax) of the instructions.

Write instructions in plain english (or your mother tongue)

---

## Anyone have an IKEA bed?

They require **instructions** to build.

Instruction manuals are also **programs**.

> Programs don’t get more complicated because of **code**, they get more complicated because of the **logic** behind them.

---

## JavaScript: The Basics

### Variables

**The Nouns of Programming**

Pieces of data in a program that can used and changed many times.

These are used for anything you need the computer to remember or keep track of for later. If you would write it down, it’s a variable.

To create a variable for the first time we use the `var`, `let`, `const` keyword and name the variable. We set its value with the `=` operator.

```javascript
var score = 0;
let fruits = ['banana', 'orange', 'mango'];
const letter = 'a';
```

To reference the variable we just call it by its name. Its value will be returned back to us.

```javascript
score; // returns 0
fruits; // ['banana', 'orange', 'mango']
letter; // a
```

---

## JavaScript: The Basics

### Variable re-assigment

To change the value in an already created variable, we just reference it by name.

```javascript
var score = 0;
score = 10;
score; // returns 10

let fruits = ['banana', 'orange', 'mango'];
fruits = ['apple', 'pear'];
fruits; // ['apple', 'pear'];
```

### `const`

```javascript
const letter = 'a';
const letter = 'b'; // Uncaught SyntaxError: Identifier 'letter' has already been declared
```

---

## JavaScript: The Basics

### Variable Conventions

- Variable names start with a lower case letter or `_` or `$` character
- Variables can't start with a number
- If they contain multiple words, subsequent words start with an upper case letter. This is known as `camelCase`. 🐫

```javascript
var numberOfStudents = 10;
```

---

## JavaScript: The Basics

### Variable

We can store lots of different types of information in variables.

- `String` for text
- `Integer` or `Float` for numbers
- `Boolean` true or false values
- `Array` collections of data
- `Objects` contain series of `key:value`pairs
- `Functions`

---

## JavaScript: The Basics

### Strings

- Stores text content
- String literal is surrounded by quotes

```javascript
const question = 'How is the weather today?';
const answer = 'Warm';
```

---

## JavaScript: The Basics

### Strings

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

## JavaScript: The Basics

### String to number

```javascript
let amount = '4';
typeof amount; // returns "string"
amount = Number(amount);
typeof amount; // returns "number"

let pi = '3.14159';
typeof pi; // returns "string"
pi = Number(pi);
typeof pi; // returns "number"
```

Sometimes we need to grab some text (a string) from the page and turn it into a number so we can do mathmatical operations with it.

### Number to string

```javascript
let quantity = 4;
quantity = String(quantity);
```

---

## JavaScript: The Basics

### Numbers

You've probably seen these before:

```javascript
// 0, 1, 2, 3, 4, 5, 6, 7, 8, 9.
```

Represent numerical data in either whole numbers or decimals.

```javascript
const integer: 42;
const decimal: 3.14159265;
```

---

## JavaScript: The Basics

### Arithmetic in JavaScript

```javascript
const a = 43;
const b = 10;
a + b; // returns 53
a - b; // returns 33
a * b; // returns 430
a / b; // returns 4.3
a % b; // returns 3
```

---

## JavaScript: The Basics

### `null`/ `undefined`/ `NaN`

These values denote the lack of value in JavaScript.

- `null` specifically suggests nothing — i.e., certain not to be anything.
- `undefined` suggests a variable will be given a value later but not yet.
- `NaN` means _not a number_ usually because your math has gone wrong

```javascript
let pedro;
console.log(pedro); /* undefined */

console.log(9 * null); /* 0 */

console.log('five' * 5); /* NaN */
```

---

## JavaScript: The Basics

### Booleans

Booleans represent the logical concept of `true` or `false`.

Other data values can be converted to Booleans for logical analysis

- `0`, `-0`, `null`, `NaN`, `undefined`, or the empty string (`""`) are _falsy_ values

- All other values will be converted to true (_truthy_ values)

```javascript
Boolean('Pedro'); /* true */
Boolean(undefined); /* false */
```

---

## JavaScript: The Basics

### Functions

**The Verbs of Programming**

Modular, reusable containers for an instruction set.

These allow us to define building-block procedures that provide readable instructions for complex operations.

Are chunks of code that are grouped and execute together, like a modular program within a program

Can takes input, performs logic, and returns output.

---

## JavaScript: The Basics

### Functions

A function definition consists of the `function` keyword, followed by:

- The name of the function.
- A list of parameters to the function, enclosed in parentheses (`()`) and separated by commas.
- The JavaScript statements that define the function, enclosed in curly brackets, `{ }`.

```javascript
function square(number) {
  return number * number;
}
```

- The function square takes one parameter, called `number`.
- The function consists of one statement that says to return the parameter of the function (that is, `number`) multiplied by itself.
- The `return` statement specifies the value returned by the function.

---

.row[
.column[

## Key Takeaways

- Computers Think in Small Steps
- Use pseudocode to plan out steps of a program.
- You can define functions to encapsulate common procedures.
- Use variables for anything you need the computer to keep track of.
  ]
  .column[

## For Next Time

- JavaScript and the DOM
  - Use JavaScript to interact with elements on the page.
  - Respond to user actions by setting event listeners.
    ]
    ]

---

class: frontpage

<div>
  <h2>Front-End Web Development</h2>
  <hr/>
  <h1>End of presentation</h1>
</div>
