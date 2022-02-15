class: frontpage

<div>
  <h2>Front-End Web Development</h2>
  <hr/>
  <h1>12 Arrays and loops</h1>
</div>

---

## Agenda

- Use arrays and loops in JavaScript to manage collections of data.
- Invoke array methods to manipulate the contents of an array.
- Practice all the JS syntax we've learned

---

## Data Types

We've seen a few different data types already.

- Strings eg. `'Hello'`, `'abc'`
- Numbers eg. `1`, `2`, `0.5`, `-66`, `Infinity`, `NaN`
- Booleans eg. `true`, `false`
- Functions

And there's a two more that we haven't

- Arrays
- Objects

---

## Arrays

Think of arrays as containers of multiple pieces of data. Technically, an array is an ordered collection of data types combined into one variable.
Each item in an array is assigned an index value based on its position. These index values allow us to access individual elements within the array.

```javascript
const fruits = ['banana', 'orange', 'apple'];
//                  0   ,     1   ,    2
```

You make an array using a set of square brackets.

Inside the brackets, each value must be separated by a comma.

---

## Arrays

### Accessing values

```javascript
const fruits = ['banana', 'orange', 'apple'];
fruits[0]; // will output "banana"
fruits[1]; // will output "orange"
fruits[2]; // will output "apple"
```

Access array items using square brackets around their index values. It's pretty simple — just remember that the first index value is always zero!

---

## Arrays

### Why Do Arrays Matter?

Arrays are one of just two types of data 'containers' in JavaScript (the other is objects). As a result, much of the data we use comes in the form of arrays.

Arrays come from three main places:

- The DOM (with `querySelectorAll` and `getElementsByClassName`)
- API responses (information received from other web applications)
- Databases

One of the most common arrays you'll work with in JS is an array of elements from the document using `querySelectorAll()`

```javascript
const buttons = document.querySelectorAll('.button');

typeof buttons; // this will return “object”

buttons[0]; // gives the first button element
buttons[1]; // gives the second button etc.
```

---

## Arrays

### Properties and Methods

[Reference code](https://codepen.io/pataruco/pen/pojXdqQ)

---

## Arrays

### Properties and Methods

#### `.length`

```javascript
const fruits = ['banana', 'orange', 'apple'];
fruits.length;
// => 3
```

Use the `.length` property to figure out how many items are in your array. This is very useful when we need to look through the whole array with a loop.

---

## Arrays

### Properties and Methods

#### `.indexOf()`

```javascript
const fruits = ['banana', 'orange', 'apple'];

fruits.indexOf('orange');
// will return the number 1
```

Use `.indexOf()` to see the index value of any item in the array.

---

## Arrays

### Properties and Methods

#### `.push()`

```javascript
const fruits = ['orange'];

fruits.push('kiwi');
// fruits is now: ["orange", "kiwi"];
```

Use `.push()` to see the index value of any item in the array.

---

## Arrays

### Properties and Methods

#### `.unshift()`

```javascript
const fruits = ['orange', 'kiwi'];

fruits.unshift('cherry');
// fruits is now: ["cherry", "orange", "kiwi"];
```

The `.unshift` method adds the item inside the parentheses to the beginning of the array.

---

## Arrays

### Properties and Methods

#### `.pop()`

```javascript
const fruits = ['banana', 'orange', 'apple'];

fruits.pop();
// fruits is now: ["banana", "orange"];
```

The `.pop` method removes the last item in the array. Can you hear the sound effect when you pop an item off?

---

## Arrays

### Properties and Methods

#### `.shift()`

```javascript
const fruits = ['banana', 'orange'];

fruits.shift();
// fruits is now: ["orange"];
```

The `.shift` method removes the first item in the array. This one just quietly shifts off into the night.

---

## Arrays

### Properties and Methods

#### `.splice()`

##### Removing

```javascript
const fruits = ['cherry', 'orange', 'kiwi'];

fruits.splice(1, 1);
// fruits is now: ["cherry", "kiwi"];
```

The `.splice` method removes specific items from the array.

The first number indicates the index where removal begins, and the second number indicates the total number of items to remove.

---

## Arrays

### Properties and Methods

#### `.splice()`

##### Adding

```javascript
fruits = ['cherry', 'kiwi'];

fruits.splice(1, 0, 'pear');
// 1st value = index value for splice
// 2nd value = number of items to remove
// 3rd value = item to be added to array
// fruits is now: ["cherry", "pear", "kiwi"];
```

If you use a third value in the `.splice` method, it will add that value into your array at the location indicated by the first value.

---

## Arrays

### Properties and Methods

#### `.reverse()`

```javascript
const fruits = ["cherry", "pear", "kiwi"];

const fruits.reverse();
// fruits is now: ["kiwi", "pear", "cherry"];
```

True to its name, the `.reverse` method reverses the order of all items in the array. It doesn't add or delete anything.

---

## Arrays

### Properties and Methods

#### `.join()`

```javascript
const fruits = ['kiwi', 'pear', 'cherry'];

const fruitsList = fruits.join(' and ');
// fruitsList is: "kiwi and pear and cherry";
```

`.join` combines all the items in the array together into a string. If given a string as a parameter, `.join` will place the given string in between the elements.

---

## Loops

A control flow statement allowing for the repeated execution of a code block until a specific condition is reached.

### Why Loops?

- Loops take advantage of what computers do best: evaluate instructions across organised sets of data very quickly.
- Computers excel when working in isolated patterns, which is exactly how a loop works.
- Avoid needlessly copying or re-typing code by repeating it in a loop.

[Reference code](https://codepen.io/pataruco/pen/eYpweoa)

---

## Loops

### An Iterator, Terminator, and Incrementer Walk Into a Loop...

A for loop is similar to an `if` statement but with more conditions. When creating a for loop, we need to make three declarations:

- Define a variable to act as our iterator, typically named `i`.
- Establish a condition for the loop to stop, called the terminating condition.
- Increment the iterator variable (or decrement, if the loop goes backward).

```javascript
for (let i = 0; i < 10; i++) {
  console.log(i);
}
// outputs 0,1,2,3,4,5,6,7,8,9
```

---

## Loops

### Loops + Arrays: A Classic Combination

Notice the highlighted terminating condition. The array's length limits the number of loops.

```javascript
const myArray = ['John', 'Benjamin', 'Victor', 'Serrao'];

for (let i = 0; i < myArray.length; i++) {
  console.log(myArray[i]);
}
// outputs each name in the list, one at a time
```

---

## Loops

### `.forEach` loop

The `forEach` loop, a cousin of the for loop, executes a function for each item in an array. It's particularly useful when working with collections of DOM elements.

```javascript
const buttons = document.querySelectorAll('.button'); // array (like)

buttons.forEach(function (button) {
  // the button variable references the current array item
  button.addEventListener('click', doSomething);
});
```

---

## `return`-ing to Functions

Programs with multiple, reusable functions that process and return data are the next step in your journey.

```javascript
function addThings(val1, val2) {
  return val1 + val2;
}

let result = addThings(1, 2);
console.log(result);
```

---

## `return` + Conditions

Functions will often have conditions that change the nature of their output.

```javascript
function addThings(val1, val2) {
  if (val1 >= 10) {
    return val1 + val2;
  }
  return 0;
}

console.log(addThings(11, 2));
console.log(addThings(7, 5));
```

---

## Practical Application

These examples may seem kind of silly (they are!), but that's because our data is static.

Loops and functions become more important when we handle **live data** from APIs and databases, because they help us deal with information we haven't defined ourselves!
We'll see this in action in a future lesson…!

---

## Lab &#x1F9EA;

## Arrays and loops

> [Starter code](https://github.com/pataruco/fewd/raw/master/labs/array-loops/array-loops-starter-code.zip)

???

[Solution code](https://github.com/pataruco/fewd/raw/master/labs/array-loops/array-loops-solution-code.zip)

---

.row[
.column[

## Key Takeaways

> Use Loops to Handle Arrays

- Arrays can contain any amount of any data type.
- Loops create dynamic, DRY code for iterating.
- Use for loops for a specific number of iterations and while loops for unknown quantities.
  ]
  .column[

## For Next Time

Animations in CSS and JS

- We’ll venture back to CSS and learn about transforms, transitions, and animations
- We’ll also combine these with JS to create some impressive effects!

]
]

---

class: frontpage

<div>
  <h2>Front-End Web Development</h2>
  <hr/>
  <h1>End of presentation</h1>
</div>
