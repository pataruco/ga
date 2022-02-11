class: frontpage

<div>
  <h2>JavaScript Development</h2>
  <hr/>
  <h1>01 Command line & data types</h1>
</div>

---

## Learning Objectives

- Working with files/directories via the Terminal
- Basic Git commands and the difference between Git and Github
- Running basic JS code in the CLI
- Introduction to variables and primitive data types

---

## The terminal

<div class="row">
  <ul>
    <li> Also known as terminal, console or CLI</li>
    <li> Allows you to interact with your computer faster</li>
    <li> Lets you perform tasks that would usually be difficult through the graphical user interface </li>(GUI)
  </ul>
  <picture>
    <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Appleterminal2.png" alt="macoOs terminal">
  </picture>
</div>

---

## Shell

A generic name for the primary programme that runs inside a Terminal. Common shell programmes include:

<dl>
  <dt>Bash (Bourne-Again Shell)</dt>
  <dd>
    <picture class="image-one-fourth">
      <img src="https://upload.wikimedia.org/wikipedia/commons/8/82/Gnu-bash-logo.svg"  alt="bash">
    </picture>
  </dd>
  <dt>ZSH (oh-my-zsh)</dt>
  <dd>
    <picture class="image-one-fourth">
      <img src="https://upload.wikimedia.org/wikipedia/commons/1/1e/Oh_My_Zsh_logo.png" alt="ZSH">
    </picture>
  </dd>
  <dt>Powershell</dt>
  <dd>
  </dd>
</dl>

---

## Terminal commands

Here are some common UNIX commands that you'll want to get familiar with as they'll be important for you to know as you're working on the terminal!

| Command | Description                        | Command | Description                                         |
| ------- | ---------------------------------- | ------- | --------------------------------------------------- |
| `ls`    | List the contents of the directory | `code`  | Open VS Code text                                   |
| `cd`    | Change directories                 | `pwd`   | Present working directory                           |
| `mkdir` | Create a new folder                | `say`   | Make your computer talk                             |
| `rmdir` | Remove an empty folder             | `open`  | Open a particular file in their default application |
| `rm`    | Remove a file                      | `./`    | The current folder                                  |
| `touch` | Create an empty file               | `../`   | One folder above your current working directory     |
| `echo`  | Return a string                    | `~/`    | The home folder                                     |

---

## Code along

## [Terminal code along lab 🧪](https://github.com/pataruco/jsd/raw/master/labs/terminal-code-along/terminal-code-along-starter-code.zip)

---

## Individual practice

## [Terminal individual practice 🚀](https://github.com/pataruco/jsd/raw/master/labs/terminal-individual/terminal-individual-starter-code.zip)

---

## Git

<div class="row">
  <ul>
    <li> Git is a distributed <em>version control system</em></li>
    <li> Programmers use Git to keep a history of changes to code (dif)</li>
    <li> This allows us to <em>rollback</em> changes (or switch to older versions) as far back in time as they started using Git on their project!</li>
  </ul>
  <picture class="image-one-fourth">
    <img src="https://upload.wikimedia.org/wikipedia/commons/e/e0/Git-logo.svg" alt="git">
  </picture>
</div>

---

## GitHub

<div class="row">
  <ul>
    <li>An online hosting service for Git <em>repositories</em></li>
    <li>A web interface to explore Git repositories</li>
    <li>A hosting service in the cloud</li>
    <li>A social network of programmers</li>
    <li>A centralised place for programmers to share and collaborate on projects</li>
  </ul>
  <picture class="image-one-fourth">
    <img src="https://upload.wikimedia.org/wikipedia/commons/2/29/GitHub_logo_2013.svg" alt="github">
  </picture>
</div>

---

## Git and GitHub terminology

- **Repository**: (repo) contains all of a projects files (the code)
- **Clone**: a git command that copies/clones a repo to your local
- **Commit**: a snapshot of the code that has been saved to the projects history
- **Push**: a git command that sends your commits (saved changes) to a remote repository (on GitHub)
- **Pull**: a git command that ‘pulls' any changes pushed by other developers to your local

---

## Local vs. remote

<div class="row">
  <section>
    <h3>Local</h3>
    <ul>
      <li>Repository on your own machine</li>
      <li>Similar to saving on MS Word</li>
    </ul> 
  </section>
  <section>
    <h3>Remote</h3>
    <ul>
      <li>Code is stored in the cloud, making it accessible by others</li>
      <li>Similar to saving on Google Drive</li>
    </ul> 
  </section>
</div>

---

## Using git during the course

- **Homework**: we will push our code to a specified homework repository
- **Resources**: starter code and solutions for code alongs and labs
- **Projects**: you will create your own repositories to store the source code for your projects

---

## Code along

### `git pull` your first repo

---

## Node.js

<div class="row">
  <ul>
    <li>Node.js is an open-source, cross-platform runtime environment for developing server-side Web applications</li>
    <li>Interprets JS using Chrome's V8 engine</li>
    <li>Faster execution with non-blocking asynchronous input/output</li>
    <li>Written in C, C++ and JS (so it's not a JS framework!)</li>
    <li>Allows us to run JavaScript from our terminal applications</li>
    <li>Creating and running scripts</li>
    <li>File management</li>
    <li>Creating a backend server for a web app</li>
  </ul>
  <picture class="image-one-fourth">
    <img src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" alt="node.js">
  </picture>
</div>

---

## JavaScript variables

- Containers for data that allow us to store values
- The name often describes what the value is
- Allows our program to remember values for us to use later on
- The action of saving a value to a variable is called an assignment

---

## JavaScript variables

- `let`: the value can be reassigned later in the code (mutable)
- `const`: the value is constant and can not be changed (immutable)

```node
> let name = "pedro"
undefined
> name
'pedro'
> name = 'ana'
'ana'
> const lastname = 'martin'
undefined
> lastname
'martin'
> lastname = 'valera'
Uncaught TypeError: Assignment to constant variable.
```

---

## Creating variables

```javascript
const firstName = 'Pedro';
let birthDate = new Date('1978-07-18');
```

| keyword | name        | assigment operator | value                    |
| ------- | ----------- | ------------------ | ------------------------ |
| `const` | `firstname` | `=`                | `Pedro`                  |
| `let`   | `birthDate` | `=`                | `new Date('1978-07-18')` |

---

## Creating variables

|                       | `var`                  | `let`       | `const`     |
| --------------------- | ---------------------- | ----------- | ----------- |
| Hoisted               | ✅                     | ❌          | ❌          |
| Supports reassignment | ✅                     | ✅          | ❌          |
| Scope                 | `function` or `global` | block `{ }` | block `{ }` |

### Note

Use `const` unless you need to reassign a value (then use `let`)

---

## Code along

### [Node lab 🧪](https://github.com/pataruco/jsd/raw/master/labs/node/node-starter-code.zip)

---

## Primitive data types

Primitives are the most basic data types.

They are immutable (cannot change) and are copied by value.

In JavaScript they include:

- Strings: `"Larry"`
- Numbers: `-9.5`
- Booleans: `true`
- `Null`
- `Undefined`

---

## Strings

- Strings are defined by backticks (` `` `), double (`""`) or single (`''`) quotes.
- They can be "added" together called concatenation using the string operator (`+`)
- They can be manipulated with methods like `.substring()` and `.toLowerCase()`

### Oficial documentation: [https://mdn.io/String](https://mdn.io/String)

---

## Strings

### Methods and properties

.row[
.col[

### `toLowerCase()` method

```javascript
const str = 'Hello World';
const res = str.toLowerCase();

// res is hello world
```

]
.col[

### `length` property

```javascript
const str = 'Hello World';
const res = str.length;

// res is 11
```

]
]

### Oficial documentation: [https://mdn.io/String](https://mdn.io/String)

---

## Numbers

- Numbers can be written as signed or unsigned, integers, decimals, in e-notation (`123e-1`), hexadecimal (`0xff`), binary (`0b11`), even octal (`0o10`)
- You can perform arithmetic operations on them
- If JavaScript can't perform an arithmetic operation because the operands aren't numbers (or able to be coerced into a number), it returns `NaN`

### Oficial documentation: [https://mdn.io/Number](https://mdn.io/Number)

---

## Numbers

- Can be stored in variables
- You can perform arithmetic operations on them `+` `-` `/` `*` `%`
- Can lead to some odd results

```node
> 0.1 + 0.2
0.30000000000000004
>
```

<a href="https://medium.com/better-programming/why-is-0-1-0-2-not-equal-to-0-3-in-most-programming-languages-99432310d476" class="external-link">Why? 🤷</a>

---

## Numbers

### Assigment operators

|                             | Operator | Initial value | Example  | Result   |
| --------------------------- | -------- | ------------- | -------- | -------- |
| Assign value to variable    | `=`      | `let a = 8`   | `a = 6`  | **`6`**  |
| Add value to variable       | `+=`     | `let a = 8`   | `a += 6` | **`14`** |
| Substract value to variable | `-=`     | `let a = 8`   | `a -= 6` | **`2`**  |

---

## Numbers

### Compound operators

|                            | Operator | Initial value | Example | Result  |
| -------------------------- | -------- | ------------- | ------- | ------- |
| Adds `1` from a value      | `++`     | `let a = 8`   | `a++`   | **`9`** |
| Substract `1` from a value | `--`     | `let a = 8`   | `a--`   | **`6`** |

---

## Numbers

### Arithmetic operators

|                | Operator | Example | Result    |
| -------------- | -------- | ------- | --------- |
| Addition       | `+`      | `5 + 2` | **`7`**   |
| Substration    | `-`      | `5 - 2` | **`3`**   |
| Multiplication | `*`      | `5 * 2` | **`10`**  |
| Division       | `/`      | `5 / 2` | **`2.5`** |
| Remainder      | `%`      | `5 % 2` | **`1`**   |

---

## Number

### `%` modulus

> the remainder is the integer "left over" after dividing one integer by another

```node
> 9 % 4
1
```

```txt
 .... .... .
\___/ \__/ |
  |    |   |
  4    4   1 <--- Remainder (%)
```

---

## Math in JavaScript

The `Math` built-in object has properties and methods for mathematical constants and functions:

- **`Math.PI`**: constant for Pi
- **`Math.abs()`**: returns the absolute value of the number
- **`Math.floor()`**: returns the largest integer <= to the number
- **`Math.max()`**: returns the largest of zero or more numbers
- **`Math.random()`**: returns a pseudo-random number between 0 and 1

### Oficial documentation: [http://mdn.io/Global_Objects/Math](http://mdn.io/Global_Objects/Math)

---

## Complex data types

- Complex data types in programming are made up of other data types.
- Complex data types in JavaScript are fundamentally Objects.
- They are copied by reference.
- In JavaScript they include:
  - Arrays: `['Pedro', 'Alex', 'Ana']`
  - Objects: `{ name: 'Pedro', role: 'Lead instructor' }`
  - Functions

---

## Arrays

- A data type that can contain any other data type
- Arrays are like lists
- The values inside them (array elements) are accessed by their index (position in the array)
- They are best for homogenous data

```javascript
const fruits = ['apple', 'banana', 'oranges'];
```

---

## Objects

- A data type that can contain any other data type
- Objects are like objects in the real world. They represent things that can be described by properties and behaviours or actions.
- The values within the object are accessed via their property name.

```javascript
const instructor = {
  name: 'Pedro',
  dob: new Date('1978-07-18'),
  hometown: 'London',
  countryOfBirth: '🇻🇪',
};
```

---

## Look ahead to next lesson

- Running JavaScript in the browser
- Creating arrays and accessing their values
- Working with collections and loops

---

## Homework

## [Download instructions](https://github.com/pataruco/jsd/raw/master/homeworks/week-1/week-1-starter-code.zip)

---

class: frontpage

<div>
  <h2>JavaScript Development</h2>
  <hr/>
  <h1>End of presentation</h1>
</div>
