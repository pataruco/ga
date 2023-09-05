class: frontpage

<div>
  <h2>JavaScript Development</h2>
  <hr/>
  <h1>04 Objects & JSON</h1>
</div>

---

## Learning objectives

- Working with objects and methods
- Intro to JSON
- Working with JSON-formatted data

---

## Objects

In computer science, an object is a value in memory which is possibly referenced by an identifier.

### Properties

- A property is an association between a key and a value
- Key: name (often descriptive) used to reference the data
- Value: the data stored in that property
- A property is sometimes referred to as a key-value pair
- Method: is a function property

```js
┌────────┐         const animal = {        ┌────────┐
│Property│──────────▶type: dog, ◀───────┬──│ Values │
└────────┘     ┌────▶run: function() {◀─┘  └────────┘
┌────────┐     │         // method
│ Method │─────┘     }
└────────┘         }
```

---

## Objects

### Get and set properties

- Dot notation
- Square brackets

---

class: code-along

# Code Along

<h2>
  <a href="https://github.com/pataruco/jsd/raw/master/labs/objects-json/objects-json-starter-code.zip" class="download-link">
    Download labs
  </a>
</h2>

???

Open 1-objects code along

- Create an empty object called person
- Add a first name key value pair
- Add a second name - value null
- Update with a second name
- Add an hobbies property with primary and secondary properties
- Add an age
- Delete the age

- Access properties with dot notation
- Access nested properties with dot notation
- Access properties with bracket notation
- Access nested properties with bracket notation
- Add a variable to the object with es6 shorthand syntax
- Add a method to the object with declaration and fat arrow syntaxes

---

class: lab

## Pair activity

- Open `2-objects-intro`
- Complete questions 1 to 4

---

## Objects = nouns

A <mark>user</mark>, browsing on a <mark>shopping website</mark>, searches for size 12 running shoes, and examines <mark>several pairs</mark> before purchasing one.

> Implicit object shopping cart

```js
const shoppingCart = {};
```

---

## Properties = adjectives

A user, browsing on a shopping website, searches for <mark>size 12 running shoes</mark>, and examines several pairs before purchasing one.

> Implicit properties
> for each pair of shoes: price and colour
> for the shopping cart: contents, total, shipping, tax

```js
const shoppingCart = {
  total: 120,
  shipping: 10,
  tax: 12.5,
  contents: [
    { price: 60, color: 'amber' },
    { price: 60, color: 'red' },
  ],
};
```

---

## Methods = verbs

A user, browsing on a shopping website, <mark>searches</mark> for size 12 running shoes, and examines several pairs before purchasing one.

> Implicit methods
> add to cart, calculate shipping, calculate tax, complete purchase, remove item

```js
const shoppingCart = {
  total: 120,
  shipping: 10,
  tax: 12.5,
  contents: [
    { price: 60, color: 'amber' },
    { price: 60, color: 'red' },
  ],
  addToCart(item) {
    this.contents.push(item);
  },
  calculateShipping: function () {
    // do something
  },
  calculateTax: function () {
    // do something
  },
};
```

---

## Destructuring

Often when working with objects, we want to store a property into a variable of the same name. You might do that like so:

```js
const title = book.title;
```

But you can also do it like this:

```js
const { title } = book;
```

It's the exact same thing, but it's just a little bit quicker to write out. It's called _destructuring_.

You can also change the name of the variable when you destructure like so:

```js
const { title: bookTitle } = book; // same as const bookTitle = book.title
bookTitle; // => "A Wizard of Earthsea"
```

---

## Deleting properties

If you would like to remove a property from an object you can use the `delete` keyword:

```js
const book = {
  title: 'A Wizard of Earthsea',
  author: 'Ursula K. LeGuin',
  isbn: '978-0141354910',
};

delete book.isbn;
book; // => { title: "A Wizard of Earthsea", author: "Ursula K. LeGuin" }
```

---

## `this`

In JavaScript, `this` is a keyword that refers to the current object. When used in a method on an object, it will always refer to the current object.

```js
let person = {
  firstName: 'Pedro',
  lastName: 'Martin',
  sayName: function () {
    return `My name is ${this.firstName} ${this.lastName}`;
  },
};

person.sayName();
```

### Arrow functions

We can also use arrow functions to create methods on objects, however **`this` behaves differently with an arrow function**. For this reason, it is best to not use arrow functions for methods.

---

## Comparing objects

When we compare primitive data types we can use the `===` sign:

```js
console.log(1 === '1'); // => false
console.log('a' === 'a'); // => false
```

However the same is not true for complex data types:

```js
const book1 = { title: 'A Wizard of Earthsea' };
const book2 = { title: 'A Wizard of Earthsea' };

console.log(book1 === book2); // => false
```

This is because when JavaScript compares objects it check whether they are the same object, and not whether they contain the same data. In the example above we created two objects, and as such each live in a different place in memory. When we compared them we asked JavaScript, "are they the same object?"

Imagine two identical cars, they are both black Honda Prius, same engine size, same number of doors, same amount of miles on the clock. Are they the same car? No. They have the same properties, but they are not the same car.

---

class: code-along

# Code Along

???

Introduce concept of this and talk about pair programming

Create a shopping cart object with {shoes: [], addToShoes: function to push into this.shoes}
Add some shoes to shopping cart.shoes

Do this in the same file as the last code along (02)

COMPLETE THE REMAINING QUESTIONS IN 2-OBJECTS-INTRO methods on the car object

---

class: lab

## Pair or individual

- Open `3-objects-exercise`.
- Open `monkey.js` in your editor.
- Create objects for 3 different monkeys each with the properties and methods listed in the start file.
- Practice retrieving properties and using methods with both dot notation and bracket syntax.
- **BONUS**: Rewrite your code to use a constructor function.

---

## JSON

In the past, APIs used to send data in XML format, which is where the X in AJAX comes from. XML is similar to HTML.

This was perfectly fine, but because each cheese property required an opening and closing tag, the amount of data being transferred was quite large.

As JavaScript applications increasingly consumed APIs, a more suitable way of transferring data with an API was born: JSON

JSON stands for **JavaScript Object Notation** and is a string representation of JavaScript objects and arrays.

---

## JSON

.row[
.column[

### XML

A cheese rendered in XML might look like this:

```xml
<cheese>
  <name> Gouda </name>
  <origin> Netherlands </origin>
  <strength> 4 </strength>
</cheese>
```

]
.column[

### JSON

The same cheese represented in JSON could look like this

```json
{
  "name": "Gouda",
  "origin": "Netherlands",
  "strength": 4
}
```

]
]

As you can see, it looks almost identical to a JavaScript object, except that the properties have double quotes and the string values ​​have double quotes as well.

---

## Objects vs JSON

.row[
.col[

### Object

```js
const course = {
  name: 'JSD',
  weeks: 10,
  instructor: 'Pedro Martin',
  location: 'London',
  students: ['Ash Adams', 'Chris Kelly'],
  dates: {
    start: '2020-02-03',
    end: '2020-04-12',
  },
};
```

]
.col[

### JSON

```json
{
  "name": "JSD",
  "weeks": 10,
  "instructor": "Pedro Martin",
  "location": "London",
  "students": ["Ash Adams", "Chris Kelly"],
  "dates": {
    "start": "2020-02-03",
    "end": "2020-04-12"
  }
}
```

]
]

- Easy for humans to read and write
- Easy for programs to parse and generate

---

## JSON

### JSON is not javascript specific

Used across the web by programs written in many languages

<section class="row">
  <div>
    <h4>Ruby</h4>
    <picture>
      <img src="https://upload.wikimedia.org/wikipedia/commons/7/73/Ruby_logo.svg" alt="ruby"/>
    </picture>
  </div>
  <div>
    <h4>Python</h4>
    <picture>
      <img src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" alt="python"/>
    </picture>
  </div>
  <div>
    <h4>Rust</h4>
    <picture>
      <img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Rust_programming_language_black_logo.svg" alt="rust"/>
    </picture>
  </div>
  <div>
    <h4>Go</h4>
    <picture>
      <img src="https://upload.wikimedia.org/wikipedia/commons/0/05/Go_Logo_Blue.svg" alt="go"/>
    </picture>
  </div>

</section>

---

class: code-along

# Code Along

???

Open and complete 04-JSON-codealong to show JSON.parse methods

Highlight that JSON is a string and parse converts the string to an object that can be used by JavaScript

---

class: lab

## Pair/individual activity

- Open `5-json-exercise`
- Answer the questions in the `app.js`

---

class: frontpage

<div>
  <h2>JavaScript Development</h2>
  <hr/>
  <h1>End of presentation</h1>  
</div>
