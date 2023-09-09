class: frontpage

<div>
  <h2>JavaScript Development</h2>
  <hr/>
  <h1>02 Arrays and loops</h1>
</div>

---

## Learning objectives

- Create arrays and access values in them
- Build iterative loops using for statements
- Iterate over and manipulate values in an array

---

## Lesson resources

[Download resources](https://github.com/pataruco/jsd/raw/master/labs/arrays-loops/arrays-loops-starter-code.zip)

---

## Arrays

- An array acts like a list.
- Best for homogenous data.
- Enclosed in square brackets

```javascript
const threeStooges = ['Curly', 'Larry', 'Moe'];
```

---

## Arrays

- Each item in an array is called an element
- An element can be any data type
- Elements are separated by commas

```javascript
const threeStooges = ['Curly', 'Larry', 'Moe'];
/*                       |________|_______|
                                  |
                               Elements
*/
```

---

## Arrays

- Each array element is assigned an index, which is a number used to reference that element
- Indexes start at **0**

```javascript
const threeStooges = ['Curly', 'Larry', 'Moe'];
/*                       |        |       |
                         0        1       2
*/
```

---

## Arrays

### `length` property

- `length` property is a number **1 greater** than the **final index** number
- `length` === number of elements in the array

```node
> const threeStooges = ['Curly', 'Larry', 'Moe'];
undefined
> threeStooges.length;
3
>
```

---

class: lab

## Pair activity

- Open the starter code for `0-arrays-loops-exercise`
- In the `app.js` file, complete questions **1-4**
- Note that most of your answers should be stored in variables called `q1`, `q2` etc., and the variables printed to the console. See Question 0, which is already completed, - for an example
- You will work on the remaining questions later in class today

---

## (Some) arrays methods

| Method                     | Use                                                                                                   |
| -------------------------- | ----------------------------------------------------------------------------------------------------- |
| `toString()`               | Returns a single string consisting of the array elements converted to strings and separated by commas |
| `join()`                   | Same as `toString()`, but allows you to pass a custom separator as an argument                        |
| `pop()`                    | Removes and returns the item at the end of the array                                                  |
| `push(item1, …, itemN)`    | Adds one or more items to the end of the array                                                        |
| `reverse()`                | Reverses the order of the elements in the array                                                       |
| `shift()`                  | Removes and returns the item at the start of the array                                                |
| `unshift(item1, …, itemN)` | Adds one or more items to the start of the array                                                      |

---

class: code-along

# Code along

???

Open 1-loops-codealong in the JSD resources/03-arrays-loops folder and create on-the-fly examples

Include `toString`, `push()`, `pop()`, `unshift()`,

---

## `for` loops

### Iterating

Going through the same process with a bunch of items, one at a time

---

## `for` loops

```javascript
const team = ['Pedro', 'Alex', 'Gabriel', 'Declan'];

for (let i = 0; i < teams.lenght; i++) {
  console.log(team[i]);
}
```

- `let i = 0;`: iterator declaration
- `i < teams.lenght;`: condition (execute as long this is true)
- `i++`: change to iterator ath the end of each loop (increment or decrement)

---

class: lab

## Pair activity

- Open the starter code for `2-loops-exercise`
- Write code that creates a for loop that calculates 2 to the 10th power, and `console.log`s each step of the calculation.
- BONUS: Rewrite your code to use a `while` loop rather than a for loop.
- BONUS2: Rewrite your code to use a `do/while` loop rather than a for `loop` or `while` loop.

---

## Array iterator methods

## `forEach`

```javascript
const team = ['Pedro', 'Alex', 'Gabriel', 'Declan'];

team.forEach(function (element) {
  console.log(element);
});
```

- `team`: array
- `.forEach`: method name
- `function`: function to execute for each item
- `(element)`: parameter serves a variable referencing the current array item

---

## Array iterator methods

## `forEach`

```javascript
const team = ['Pedro', 'Alex', 'Gabriel', 'Declan'];

// As an anonymous function
team.forEach(function (element) {
  console.log(element);
});

// with a defined function
function printInConsole(name) {
  console.log(name);
}

team.forEach(printInConsole);
```

---

class: lab

## Pair activity

- Open the starter code for `0-arrays-loops-exercise`
- In the `app.js` file, complete questions **5-6**
- Answer these questions using `forEach()` loops, not for loops.
- Note that most of your answers should be stored in variables called `q1`, `q2` etc., and the variables printed to the console.
  - See Question **0**, which is already completed, - for an example.

---

## (Some) arrays methods (part 2.)

| Method      | Use                                                                                                |
| ----------- | -------------------------------------------------------------------------------------------------- |
| `forEach()` | Executes a provided function once per array element                                                |
| `every()`   | Tests whether all elements in the array pass the test implemented by the provided function         |
| `some()`    | Tests whether some element in the array passes the text implemented by the provided function       |
| `filter()`  | Creates a new array with all elements that pass the test implemented by the provided function      |
| `map()`     | Creates a new array with the results of calling a provided function on every element in this array |

---

class: lab

## Individual activity

- Open the starter code for `0-arrays-loops-exercise`
- In the `app.js` file, complete questions **7**
- As in the section you did earlier, your answer should be stored in a variable called `q7` and the variable logged to the console.

---

## Bonus activity

1. Open the starter code for `4-arrays-loops-exercise-2`
2. Write code for a website shopping cart that calculates the sales tax for each item in a cart array and stores the result in a 2nd array
   Calculate the total with tax of all items and store the result in a new variable
3. **Bonus**: Update your code to round each item to the nearest penny (hint: read up on `Math.round`)
4. **Bonus**: Rewrite your code using the `Array.map()` method

---

## Look ahead to next lesson

### Functions and scope

- At the end of next class, we'll cover:
- Working with functions
- Understanding scope

---

class: frontpage

<div>
  <h2>JavaScript Development</h2>
  <hr/>
  <h1>End of presentation</h1>
</div>
