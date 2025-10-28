class: frontpage

<div>
  <h2>Front-End Web Development</h2>
  <hr/>
  <h1>10 Document Object Model (DOM)</h1>
</div>

---

## Agenda

- Identify the role of JavaScript in front-end web development.
- Access properties of the DOM using JavaScript object syntax.
- Use DOM methods to respond to user actions with event listeners.
- Talk about your final projects

---

## Objects

Before start to talk about the **DOM**, let's talk about Objects in JavaScript.

An object is a collection of properties that are made up of `key:value,` pairings.

```javascript
const myObject = {
  key: value,
};
```

The key is the name of the property, the value can be anything:

a `String`, a `Number`, a `Function`, even another `Object`

---

## Objects

An object in JS can be compared to an object in real life. It has a number of properties that define it.

```javascript
const car = {
  make: 'Tesla',
  model: 'Model 3',
  price: '£30,000',
};
```

We can access these properties using dot notation

```javascript
car.make; //returns 'Tesla'
car.make = 'Ford';
car.make; // returns 'Ford'
```

---

## The Document Object Model (DOM)

JavaScript interacts with our HTML document. It can read info on the page and make changes to any element on the page.

To learn how to do this we need a common language to describe the construction of the document and the elements within it.

**The Document Object Model** is a representation of the page used by JavaScript to interact with all the elements.

We can visualise the DOM as a tree like structure of each element and their heirarchy. But the DOM is more than just a representation of the HTML. Each element on the page is an object that has certain characteristics and can perform certain actions.

The document is an object and has a method for finding elements within it. Those elements are also objects which have properties like their style or inner text content. Elements also have methods for actions like getting, setting or removing attributes.

---

## DOM tree

A DOM tree is a kind of tree whose nodes represent an HTML document contents. Each HTML document has a unique DOM tree representation. For example, the following document:

.row[

```html
<html>
  <head>
    <title>My Document</title>
  </head>
  <body>
    <h1>Header</h1>
    <p>Paragraph</p>
  </body>
</html>
```

<div>

Has a DOM tree that looks like this:

  <picture>
    <img src="https://raw.githubusercontent.com/mdn/content/refs/heads/main/files/en-us/web/css/css_text/whitespace/dom-string.png" alt="DOM tree">
  </picture>

</div>

]

---

## The DOM

A Webpage Is Just a Bunch of Objects

.image-third[
![The DOM](https://pataruco.s3.amazonaws.com/ga/fewd/dom-optimised.svg)
]

Everything you see in the browser is represented as an object in JS

---

## DOM Three Big Objects

.row[
.column[

### Window

The whole web browser; mostly used for browser-level settings like the current url. All global variables are stored here too.
]
.column[

### Document

The current webpage. This object has the functionality we want to use when accessing elements (other objects) on the page.
]
.column[

### Console

A scratch pad for development-related messages; highly useful in debugging.

]
]

---

## The DOM

Browsers read your HTML and create an object in the computer's memory for each part.
The Document Object Model (DOM) is the browser's JavaScript representation of your HTML elements.

### Getters and Setters

The main thing we're doing with JS is getting objects from the DOM and performing actions with them (moving, hiding, updating text, changing attributes etc).

The methods that get something from a webpage are called **getters**.

The methods that change something on the webpage are called **setters**.

---

## The DOM

### Methods

Getters and setters access and modify objects. They are both types of methods. **Methods** belong to JavaScript objects, including DOM elements.

Think of methods as the functions that an object can use. A guitar, for example, might have the following methods:

- `playChord(chord)`
- `playNote(note)`
- `changeTempo(tempo)`
- `changeVolume(volume)`

---

## The DOM

### Properties

Objects contain data as well as methods — information that describes the object (height, width, classes, etc). These pieces of information are called **properties**.

| Property                  | Description                                                                                |
| ------------------------- | ------------------------------------------------------------------------------------------ |
| `someElement.classList`   | A list of the classes belonging to a DOM element.                                          |
| `someElement.id`          | The ID of an element, if it has one.                                                       |
| `someElement.style.color` | The color of an element's text.                                                            |
| `window.location.href`    | The window object's location details, including the page's href (hypertext reference/URL). |

---

## The DOM

### Getters

```javascript
const gaData = document.getElementById('ga');
//             |______| |____________| |___|
//                 |           |         |
//              Object      Method    Parameter
//                    (a getter method)
```

Once you get something from the DOM, you can use a variable to store it in memory for future manipulation.

```javascript
const gaData = document.getElementById('ga');
```

Now that we have our element, gaData, we can access its properties:

```javascript
gaData.style.color;
gaData.innerText;
gaData.classList;
```

---

## The DOM

### Manipulating an Element's Classes

We're mostly going to manipulate classes to make things happen on our pages.

```javascript
    gaData.classList.toggle('show');
/*  |____| |_______| |____| |____|
//     |        |       |      |
//  Object   Property   |   Class name
//                      |
//                    Method
//              (a getter method)
```

---

## The DOM

### Manipulating an Element's Classes

There are multiple class related properties and methods relating to classes in JS

```javascript
const gaData = document.getElementById('ga');

// gives us the current value of the class attribute
gaData.className;

// add a class to the element
gaData.classList.add('new-class');

// remove the class
gaData.classList.remove('new-class');

// true/false
gaData.classList.contains('new-class');

// add the class if it's not present, remove it if it is
gaData.classList.toggle('new-class');
```

---

## Events and Listeners

Anytime a user interacts with a webpage, the browser classifies that action as an event.

In our JS code, we can listen for events in the browser and trigger functions in response using event listeners.

```javascript
// When object is clicked, the action function is called
object.addEventListener('click', action);
```

### Get, Then Listen

We'll often **get** an element and then **set** an event listener on it. Once the event occurs, the listener will execute the function it was given.

```javascript
const ga = document.getElementById('ga');

function sayHello() {
  console.log('hello!');
}

ga.addEventListener('click', sayHello);
```

---

## Events and Listeners

We called this pattern the

### The three **E**'s

1.  The **E**lement(s) we want to interact with
2.  The **E**vent we want to kick off the interaction
3.  The **E**xecution: what happens next and what elements are involved

We can write this out in "normal" language first (**Pseudocode**)

---

## Events and Listeners

There are many events that occur in the browser as the user interacts with the page, these are few of them:

- click
- submit
- resize
- scroll
- hover
- touch
- drag and drop

[Full list](https://developer.mozilla.org/en-US/docs/Web/Events)

---

## Pair Lab &#x1F9EA;

### Color switcher

> [Starter code](https://github.com/pataruco/fewd/raw/master/labs/color-switcher/color-switcher-starter-code.zip)

---

## Solo Lab &#x1F9EA;

### Traffic lights

> [Starter code](https://github.com/pataruco/fewd/raw/master/labs/traffic-lights/traffic-lights-starter-code.zip)

---

## Bonus Lab &#x1F9EA;

### Score keeper

> [Starter code](https://github.com/pataruco/fewd/raw/master/labs/score-keeper/score-keeper-starter-code.zip)

---

## Final project brief

- [Link to brief](/final-project)

---

class: frontpage

<div>
  <h2>Front-End Web Development</h2>
  <hr/>
  <h1>End of presentation</h1>
</div>
