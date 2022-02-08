class: frontpage

<div>
  <h2>JavaScript Development</h2>
  <hr/>
  <h1>14 Prototypal inheritance</h1>
</div>

---

## Learning objectives

- Use a constructor function to produce objects of a particular type.
- Attach attributes to a new object using the constructor.
- Recall the cost of defining methods inside a constructor function.
- Define methods on custom objects by attaching them to the prototype.

---

## `class` versus `prototype`

.row[
.column[

### Class-based language

#### `class`

- manufactures new objects
- defines behavior of manufactured objects
  ]
  .column[
  ### JavaScript

#### `constructor`

- manufactures new objects

#### `prototype`

- defines behavior of manufactured objects
  ]
  ]

---

## Repetitive code

.row[
.column[

```js
const batman = {
  name: 'Bruce Wayne',
  alias: 'The Bat-man',
  usePower: function () {
    return 'Spend money and hit people';
  },
};

const wonderwoman = {
  name: 'Diana Prince',
  alias: 'Wonder Woman',
  usePower: function () {
    return 'Deflect bullets with bracelets';
  },
};
```

]
.column[

- Bug prone
- Inefficient
- Slow
  ]
  ]

---

class: code-along

# Code along

<a 
  href="https://github.com/pataruco/jsd/raw/master/labs/prototypal-inheritance/prototypal-inheritance-starter-code.zip" class="download-link">
Download labs
</a>

???

00-objects-codealong - show a function that just creates an object

---

class: lab

# Individual lab 🧪

## `01-make-car-exercise`

- Define a function called `makeCar()` that takes two parameters (model, color), makes a new object literal for a car using those params, and returns that object.

---

## Constructor functions

- Help us to write code that adheres to the principles of DRY
- Start with a capital letter (convention)
- Are always used with the `new` keyword (self-enforced)

---

## Constructors: a factory for objects

.row[
.column[

```js
const usePower = function () {
  return this._power;
};
const Hero = function (name, alias, power) {
  this.name = name;
  this.alias = alias;
  this._power = power;
  this.usePower = usePower;
};
```

> Properties with the same name as arguments are prepended with an underscore

]
.column[

- DRY
- Maintainable
- More efficient
  ]
  ]

---

class: code-along

# Code along

???

02-constructor-codealong

---

class: lab

# Individual lab 🧪

## `03-constructor-exercise`

- Write a constructor function to replace our `makeCar` function from earlier.
- Your constructed objects should include the same properties as in the make-car-function exercise

---

## Prototypes

- Every object in JS has a `prototype` property, which is a reference to another object
- The object that the prototype property points to is often an instance of the constructor object
- Any properties/methods defined on an object's prototype are available on the object itself, without defining those properties/methods a second time
- The relationship between objects that have a prototypal relationship with each other is known as the `prototype chain`

---

## Using the `prototype` property

```js
const Hero = function (name, alias, power) {
  this.name = name;
  this.alias = alias;
  this._power = power;
  // this.usePower = usePower
};

// Create usePower and attach it to the constructor function's prototype.
Hero.prototype.usePower = function () {
  return this._power;
};
```

---

## Prototype terminology

- **Prototype**: a model used to create instances
- **Prototype chain** : Every object in Javascript has a prototype, including the prototype Object. This "chain" links until it reaches an object that has no prototype, usually the Object's prototype.
- **`prototype` property**: a reference to another object that is often an instance of the constructor object
- **`__proto__`** (or "dunder proto"): a property used by web browsers that indicates an object's parent in the prototype chain

---

class: code-along

# Code along

???

04-prototypes-codealong

---

class: lab

# Individual lab 🧪

## `05-prototypes-exercise`

- Create a `Monkey` constructor that meets the specs described.
- Create 3 objects using your `Monkey` constructor and verify that all properties and methods of each have the expected values.

---

## `Object.create()`

- Creates a new object and …
- Sets the object which should be the prototype of the newly-created object.
- Some differences under the hood but can be used like the `new` keyword.
- Example `const me = Object.create(Person)` has the. same result as `const me = new Person()`

---

class: code-along

# Code along

???

06-prototypal-inheritance

---

class: lab

# Individual lab 🧪

## `08-prototypes-lab`

- Create an Item constructor using the specs in the start file.
- Create Clothing and Household constructors and use Item as the prototype for each.
- Test your work in the browser.
- If you finish early, work on the bonus items described in app.js.

---

class: frontpage

<div>
  <h2>JavaScript Development</h2>
  <hr/>
  <h1>End of presentation</h1>
</div>
