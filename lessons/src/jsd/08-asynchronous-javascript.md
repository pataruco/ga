class: frontpage

<div>
  <h2>JavaScript Development</h2>
  <hr/>
  <h1>08 Asynchronous JavaScript</h1>
</div>

---

## Learning objectives

- Describe what asynchronous means in relation to JavaScript
- Pass functions as arguments to functions that expect them.
- Write functions that take other functions as arguments.
- Build asynchronous program flow using Fetch

---

## Synchronous code

.row[
.column[

```js
let status;
function doSomething() {
  for (let i = 0; i < 1000000000; i++) {
    numberArray.push(i);
  }
  status = 'done';
  console.log('First function done');
}
function doAnotherThing() {
  console.log('Second function done');
}
function doSomethingElse() {
  console.log('Third function: ' + status);
}
```

]
.column[

```js
doSomething();
doAnotherThing();
doSomethingElse();
```

]
]

---

## Synchronous code

.row[
.column[

```js
let status;
function doSomething() {
  for (let i = 0; i < 1000000000; i++) {
    numberArray.push(i);
  }
  status = 'done';
  console.log('First function done');
}
function doAnotherThing() {
  console.log('Second function done');
}
function doSomethingElse() {
  console.log('Third function: ' + status);
}
```

]
.column[

```js
doSomething();
doAnotherThing();
doSomethingElse();
```

Results in th console after a few seconds

```txt
> 'First function done';
> 'Second	function done';
> 'Third function: done';
```

]
]

---

## Synchronous code

- Statements are executed in order, one after another
- Code blocks program flow to wait for results
- Most JS code is synchronous

```txt
┌──────────────┐             ┌──────────────┐          ┌──────────────┐
│1st statement │───────────▶ │2nd statement │────────▶ │3rd statement │
└──────────────┘             └──────────────┘          └──────────────┘
```

---

## Asynchronous code

- Code execution is independent of the main program flow
- Statements are executed concurrently
- Program does not block program flow to wait for results
- Certain JS statements are asynchronous by default

```txt
┌──────────────┐
│1st statement │───────────▶
└──────────────┘
┌──────────────┐
│2nd statement │───────────▶
└──────────────┘
┌──────────────┐
│3rd statement │───────────▶
└──────────────┘
```

---

## Asynchronous program flow

```js
const button = document.querySelector('button');

button.addEventListener('click', fetchCountries);

function fetchCountries() {
  fetch('https://restcountries.com/v3.1/all')
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        console.warn('there is a problem');
      }
    })
    .catch((error) => console.error({ error }));
}
```

---

## Approaches to asynchronous program flow

- Callbacks
- `Promises`
- `async` / `await`

---

## Callbacks

### Functions are first class objects

- Functions can be used in any part of the code that any other datatype can be used in
- Store functions as variables
- Pass functions as arguments to other functions
- Return functions from other functions
- Run functions without otherwise assigning them

---

## Callbacks

### higher order `function`

- A function that takes another function as an argument, or that returns a function

Example [`setTimeOut`](https://developer.mozilla.org/en-US/docs/Web/API/setTimeout)

```js
setTimeout(function, delay)
```

- where function is a function (reference or anonymous)
- delay is a time in milliseconds to wait before the first argument is called

---

## `setTimeOut`

```js
setTimeout(() => {
  console.log('Hello world');
}, 1000);
```

```js
function helloWorld() {
  console.log('Hello world');
}

setTimeout(helloWorld, 1000);
```

---

## Callbacks

- A function that is passed to another function as an argument, and that is then called from within the other function
- A callback function can be anonymous (as with `setTimeout()` or `forEach()`) or it can be a reference to a function defined elsewhere

---

class: code-along

# Code along

Downloand [labs](https://github.com/pataruco/jsd/raw/master/labs/async-callbacks/async-callbacks-starter-code.zip)

???

00-callback-codealong

---

class: lab

## Individual activity

1. Open `01-callback-exercise`
2. In your editor, open the js file and follow the instructions to create the `add`, `showAnswer`, `calcResult`, and `subtract` functions, and to call the `calcResult` function using the `add` and `subtract` functions as callbacks.

3. Test your work in the browser and verify that you get the expected results.

- **BONUS**: Update the `showAnswer` function to change the content of the element with the id value 'operator' to a plus symbol after the user clicks the Add button, or to a minus symbol after the user clicks the Subtract button.

---

## `Promises`

### Callback hell 🔥 👹

```js
doSomething(function (result) {
  doSomethingElse(
    result,
    function (newResult) {
      doThirdThing(
        newResult,
        function (finalResult) {
          console.log('Got the final result: ' + finalResult);
        },
        failureCallback,
      );
    },
    failureCallback,
  );
}, failureCallback);
```

---

## Promises

- Traditional callback:

  ```js
  doSomething(successCallback, failureCallback);
  ```

- callback using a promise:
  ```js
  doSomething().then(/* work with result */).catch(/* handle error */);
  ```

---

## Promises

```js
doSomething()
  .then((result) => doSomethingElse(result))
  .then((result) => doThirdThing(result))
  .then((result) => {
    console.log('Got the final result: ' + result);
  })
  .catch(console.error);
```

---

## Handling errors

```js
doSomething()
  .then((result) => doSomethingElse(result))
  .then((result) => doThirdThing(result))
  .then((result) => {
    console.log('Got the final result: ' + result);
  })
  .catch(console.error); // Catch errors here
```

---

## Creating `Promise`s

```js
const fooPromise = () => {
  new Promise(function (resolve, reject) {
    setTimeout(() => {
      resolve('foo');
    }, 300);
  });
};
fooPromise().then((value) => {
  console.log(value); /* expected output: "foo" */
});
```

---

## Promises

```txt

          On completion                         On completion
            generates                             generates

                   ┌────────┐                               ┌────────┐
┌──────────┐       │Promise │        ┌──────────┐           │Promise │
│function 1│──────▶│(object)│───────▶│function 2│──────────▶│(object)│ ─────▶
└──────────┘       └────────┘        └──────────┘           └────────┘
                        │    promise                             │  promise
                        │    passed                              │  passed
                        │    to .then()                          │  to .then()
                        │             ┌────────┐                 │
                        │             │ Error  │                 │
                        └────────────▶│handling│◀────────────────┘
                         error        └────────┘  error
                         passed                   passed
                         to .catch()              to .catch()

```

---

## `fetch` with promises

```js
fetch(url)
  .then(function (response) {
    if (response.ok) {
      return response.json();
    } else {
      throw 'Network response was not ok.';
    }
  })
  .then(function (data) {
    //	DOM manipulation
  })
  .catch(function (error) {
    //	handle lack of data in UI
  });
```

---

## `async` & `await`

### `async`

An asynchronous function is a function declared with the asynchronous (`async`) keyword. The use of the `await` keyword is allowed within them. The `async` and `await` keywords allow asynchronous promise-based behavior to be written in a cleaner style, avoiding the need to explicitly configure promise strings (`new Promises`)
expect

---

## `async` & `await`

### `await`

The await operator is used to wait for a Promise. It can only be used within an `async` function.

The await expression causes the execution of an async function to be paused until a Promise is terminated or rejected, and returns to the execution of the async function after completion. Upon return from execution, the value of the await expression is that returned by a completed promise.

If the Promise is rejected, the value of the await expression will have the value of reject.

If the value of the expression followed by the await operator is not a promise, it will be converted to a resident Promise

---

## `async` & `await`

.row[
.col[

### Callback

```js
const url = 'https://restcountries.com/v3.1/all';

const button = document.querySelector('button');

button.addEventListener('click', fetchCountries);

function fetchCountries() {
  fetch(url)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        console.warn('there is a problem');
      }
    })
    .catch((error) => console.error({ error }));
}
```

]

.col[

### `async` / `await`

```js
const url = 'https://restcountries.com/v3.1/all';

const button = document.querySelector('button');

button.addEventListener('click', fetchCountries);

async function fetchCountries() {
  try {
    const response = await fetch(url);

    if (response.ok) {
      const data = await response.json();
      return data;
    }

    console.warn('there is a problem');
  } catch (error) {
    console.error({ error });
  }
}
```

]
]

---

class: frontpage

<div>
  <h2>JavaScript Development</h2>
  <hr/>
  <h1>End of presentation</h1>
</div>
