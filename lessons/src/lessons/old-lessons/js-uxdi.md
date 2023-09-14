class: center, middle

# .center[Intro to JavaScript & jQuery]

## .center[Pedro Martin]

.logo[![](https://pataruco.s3.amazonaws.com/ga/assets/ga.svg)]

---

# Agenda

- Programming basics
- What is JavaScript?
- JavaScript syntax
- jQuery

---

# Introduction to programming

- Computers only do what you tell them
- Programming is you writing a set of instructions that computer will understand
- It isn't about the programming language. It is about changing how you think
- We have to know how the computer thinks to change how we think

---

# How computers think

- The short answer is that they don’t think
- The slightly longer answer is that while computers don’t think, they act as if they do, by sequentiallyexecuting simple instructions
- The only things a computer knows are the things we tell it

---

# Pseudo code

- Pseudo code is a mixture of natural language and high-level programming constructs
- Helps plan out writing a programme

---

# Pseudo code along

We want to build a thermostat that checks the temperature every 10 minutes and aims to keep the temperature at a perfect level for us.

### Let's pseudo code it together...

---

# Pseudo code exercise

In groups, pseudo code a Rock, Paper, Scissors game. The game has two players and the winner is who won 2 games of 3

---

# Variables

Variables allow us to store data in our program for use later on. By assigning a value to a variable, we are effectively saving it in memory.

```js
var name = 'Pedro';

console.log('Hi ' + name);
```

---

# Data Types

```js
var name = 'Pedro'; // String
var age = 33; // Number
var instructor = true; // Boolean
var likes = ['foreign policy', 'movies', 'outdoors']; // Array
```

---

# Objects

```js
var person = {
  name: 'Pedro',
  age: 40,
  instructor: true,
  likes: ['foreign policy', 'movies', 'outdoors'],
};
```

---

# Operators

- `+`
- `>`
- `-`
- `%`
- `*`
- `&&`
- `||`

---

# Conditions

Conditional statements can be used to control the flow of your program. They are used to branch off the program based on given conditions.

```js
if (cartTotal > 50) {
  removeShipping();
}
```

---

# Functions

Functions allow you to group together some code, give this code a name, and reuse it later, addressing it by name. Think of them as small programs within your larger program.

```js
function addNumbers(num1, num2) {
  console.log(num1 + num2);
}
```

---

# What is JavaScript?

.image-third[![](https://mdn.mozillademos.org/files/13502/cake.png)]

---

# Scripting Language

- Operating systems have web browsers, which has web pages, which have JavaScript code to execute
- JavaScript was designed as client-side language
- However it is now popular in server-side applications

---

# Scripting language

```html
<html>
  <head>
    <title>Example</title>
  </head>
  <body>
    <div>Hello</div>
    <span>world</span>
    <script src="“script.js”"></script>
  </body>
</html>
```

---

# Manipulating the DOM

## Three E's

- **Element**: First we need to target the element we want to work with
- **Event**: Then we listen for an event
- **Execution**: Then we perform an output

---

# Element

We can target elements on the page using CSS selectors, e.g.

```js
var myButton = document.getElementById('js-button');
```

---

# Event

- What if we only want the JavaScript to run only when the user interacts with the website?
- page loading
- scrolling
- key press
- event handler/listener

```js
mybutton.addEventListener('click', function(event) {
  // Your event handler here
});

myButton.onclick = function(event) {
  // Your event handler here
};
```

---

# Events

- `focus` || `onfocus`
- `blur` || `onblur`
- `mouseover` || `onmouseover`
- `load` || `onload`
- `click` || `onclick`

MDN list of [events](https://developer.mozilla.org/en-US/docs/Web/Events)

---

# Traffic Light exercise

In pairs: visit the Codepen and read through the code. Figure out what’s going on. Then:

Get the slow light to turn to orange
Get the go light to work

[CodePen](https://codepen.io/pataruco/pen/GwovqV?editors=0010)

---

# jQuery

- Makes event handling, transver the DOM and manipulation much easier; a level of abstraction
- You can even extend the library with your own plugins
- **jQuery is JavaScript**

---

# Including jQuery

```html
<html>
  <head>
    <title>Example</title>
  </head>
  <body>
    <div>Hello</div>
    <span>world</span>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js">
    <script type="text/javascript" src="main.js">
  </body>
</html>
```

---

# Anatonomy of a jquery script

```js
$('h2').text('Thanks for signing up');
```

- Selector `$('h2')`
- Action `.text()`
- Paramenters `'Thanks for signing up'`

---

# Document ready function

```js
$(document).ready(function() {
  alert('Ready to code!');
});
```

---

# Selectors

```js
$('h2');
$('.intro');
$('#js-button');
```

---

# Adding effects and manipulating the DOM

- `hide()`
- `toggle()`
- `fadeOut()`
- `slideUp()`
- `addClass()`

---

# jQuery Exercise

---
