class: frontpage

<div>
  <h2>JavaScript Development</h2>
  <hr/>
  <h1>07 DOM Events</h1>
</div>

---

## Learning objectives

- Select DOM elements and properties
- Manipulate the DOM by using selector.
- Create DOM event handlers

---

## Events

- Most modern websites have interactive elements
- Interactivity is triggered by user events
- Browsers listen for events and execute functions when an event occurs

---

## Common DOM events

| Mouse        | Keyboard   | Form     | Document |
| ------------ | ---------- | -------- | -------- |
| `click`      | `keypress` | `submit` | `rezise` |
| `dblclicl`   | `keydown`  | `change` | `scroll` |
| `mouseenter` | `keyup`    | `focus`  |          |
| `mouseleave` |            | `blur`   |

[Full list](https://developer.mozilla.org/en-US/docs/Web/Events)

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

```javascript
// Element
const ga = document.getElementById('ga');

// Event
ga.addEventListener('click', sayHello);

// Execution
function sayHello() {
  console.log('hello!');
}
```

---

class: code-along

# Code along

???

Open `00-events-codealong`

---

class: lab

## Individual activity

- Download [labs](https://github.com/pataruco/jsd/raw/master/labs/events/events-starter-code.zip) 🧪
- Open `01-events-exercise`
- Add event listeners to the 3 buttons at the top of the page.
- Clicking each button should hide the block below it with the corresponding colour.
- Use the handouts in slack as a guide for syntax.

---

## Event Object

- The event object contains information about the triggering event
- It is passed to a function through a parameter
- The parameter is usually called `event`, or simply `e`

```js
const addButton = document.querySelector('button.add');

addButton.addEventListener('click', (event) => {
  console.log(event);
});
```

---

class: code-along

# Code along

???

Open `02-event-codealong` - get them to adapt the solution to use events to prevent default and perhaps refactor to 1 function

---

class: lab

## Individual activity

- Open `03-event-object—exercise`
- Update the code to prevent the form from submitting when the button is clicked.
- Test your code in the browser and check that the form is not being submitted and causing a full page reload.

---

class: lab

## Individual/pair activity

- Open `04-color-switcher` 🧪
- Follow the instructions from the `readme.md` file

---

class: lab

## Individual/pair activity

- Open `05-traffic-lights` 🚦
- Follow the instructions from the `readme.md` file

---

## Homework

Download [drumkit lab](https://github.com/pataruco/jsd/raw/master/homeworks/week-4/week-4-starter-code.zip)

---

class: frontpage

<div>
  <h2>JavaScript Development</h2>
  <hr/>
  <h1>07 DOM Events</h1>
</div>
