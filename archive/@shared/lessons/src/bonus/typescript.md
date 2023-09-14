class: frontpage

<div>
  <h2>Bonus</h2>
  <hr/>
  <h1>TypeScript</h1>
</div>

---

## Intro to TypeScript

.row[
.col[
.image-half[![typescript logo](https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg)]
]
.col[
JavaScript was introduced as a language for the client side. The development of Node.js has marked JavaScript as an emerging server-side technology too. However, as JavaScript code grows, it tends to get messier, making it difficult to maintain and reuse the code.

Moreover, its failure to embrace the features of Object Orientation, strong type checking and compile-time error checks prevents JavaScript from succeeding at the enterprise level as a full-fledged server-side technology.

**TypeScript was presented to bridge this gap**.
]
]

---

## What is TypeScript?

By definition

> "TypeScript is JavaScript for application-scale development."

TypeScript is a strongly typed, object oriented, compiled language. It was designed by Anders Hejlsberg (designer of C#) at Microsoft. TypeScript is both a language and a set of tools. TypeScript is a typed superset of JavaScript compiled to JavaScript. In other words, TypeScript is JavaScript plus some additional features.

---

## Why Use TypeScript?

TypeScript is superior to its other counterparts like CoffeeScript and Dart programming languages in a way that TypeScript is extended JavaScript. In contrast, languages like Dart, CoffeeScript are new languages in themselves and require language-specific execution environment.

---

## Why Use TypeScript?

The benefits of TypeScript include:

- **Compilation:** JavaScript is an interpreted language. Hence, it needs to be run to test that it is valid. It means you write all the codes just to find no output, in case there is an error. Hence, you have to spend hours trying to find bugs in the code. The TypeScript transpiler provides the error-checking feature. TypeScript will compile the code and generate compilation errors, if it finds some sort of syntax errors. This helps to highlight errors before the script is run.

- **Strong Static Typing:** JavaScript is not strongly typed. TypeScript comes with an optional static typing and type inference system through the TLS (TypeScript Language Service). The type of a variable, declared with no type, may be inferred by the TLS based on its value. The key difference is JavaScript uses **dynamic types** (resolved at runtime) where TypeScript uses **static types** (set during development).

---

## Why Use TypeScript?

The benefits of TypeScript include:

- TypeScript supports **type definitions** for existing JavaScript libraries. TypeScript Definition file (with `.d.ts` extension) provides definition for external JavaScript libraries. Hence, TypeScript code can contain these libraries.

- TypeScript supports **Object Oriented Programming** concepts like classes, interfaces, inheritance, etc.

---

## Components of TypeScript

At its heart, TypeScript has the following three components::

- **Language:** It comprises of the syntax, keywords, and type annotations.

- The **TypeScript Compiler**: The TypeScript compiler (`tsc`) converts the instructions written in TypeScript to its JavaScript equivalent.

- The **TypeScript Language Service**: The _"Language Service"_ exposes an additional layer around the core compiler pipeline that are editor-like applications. The language service supports the common set of a typical editor operations like statement completions, signature help, code formatting and outlining, colorization, etc.

---

## Using TypeScript

To practice using TypeScript, you can either use a playground or install the `typescript` package and run the compiler.

If you'd like to use a playground, try out the [TS Playground](https://www.typescriptlang.org/play/).

If you'd like to install `typescript`, run the following command using the package manager of your preference:

.row[
.col[

```bash
npm install -g typescript
```

]
.col[

```bash
pnpm add -g typescript
```

]
.col[

```bash
yarn global add typescript
```

]
]

The command that was installed was `tsc`, which stands for "TypeScript Compiler." To confirm the installation, you can either check its installed location with `which tsc` or check its version number with `tsc -v`.

---

## Using TypeScript

If you opt for the install, set up a file to use:

1. `mkdir typescript`
2. `cd typescript`
3. `touch intro-typescript.ts`
4. `code .`

Now, each time you make changes, you can compile your TypeScript into JavaScript using the following command:

```bash
tsc intro-typescript.ts
```

The first time you run this, it will create a JS file with the same name (i.e., intro-typescript.js). After that, your changes will compile into that same file.

---

## Hello World

We'll begin with tradition:

```ts
const message: string = 'Hello World';
console.log(message);
```

And, once the code is compiled, here is the output:

```js
var message = 'Hello World';
console.log(message);
```

---

## The Type System

.row[
.col[

The Type System represents the different types of values supported by the language. The Type System checks the validity of the supplied values, before they are stored or manipulated by the program. This ensures that the code behaves as expected. The Type System further allows for richer code hinting and automated documentation too.
]
.col[
![Type System](https://www.tutorialspoint.com/typescript/images/data_types.jpg)
]
]

---

## The `any` Type

The `any` data type is the super type of all types in TypeScript. It denotes a dynamic type. Using the `any` type is equivalent to opting out of type checking for a variable.

---

## Built-in Types

Built-in types are those that we're used to in JavaScript:

- Number
- String
- Boolean
- Null
- Undefined
- Void

The only one of these that we haven't used is `void`, which is used on non-returning functions, such as those that don't include a `return` statement like the one below:

```js
function sayHello() {
  console.log('Hello');
}
```

---

## User-defined Types

These will be covered later, but they include types that the user defines using enumerations, classes, interfaces, arrays, and tuples.

---

## Variable declaration

Declaring a variable using the type syntax looks like this:

```ts
const [variable name]: [type annotation] = value;
// example with value:
const age: number = 27;

// example without value:
const isHappy: boolean;
```

> **Nota:** TypeScript supports `var`, `const`, and `let`.

---

## Variable declaration

Because TS is a superset of JS, the type annotation isn't required, so that `var age = 27;` is perfectly valid TS. If a variable is declared without a specified type, the TS compiler will determine the type of the variable on the basis of the value assigned to it.

But, if a variable is declared without a type and that variable is then re-assigned to a different type, the compiler will throw an error. For example:

```ts
let age = 56;
age = '43';
```

---

## Parameter types

With TS, we can validate parameters:

```ts
function sum(x: number, y: number) {
  return x + y;
}
```

If we call this function and pass it any type other than numbers, TS will throw errors when attempting to compile.

---

## `return` types

And, even further, we can define return types:

```ts
function sum(x: number, y: number): number {
  return x + y;
}
```

---

## Objects

We can create objects using the `object` type like this:

```ts
const person: object = {
  name: 'Alex',
  age: 32,
};
```

---

## Objects

But, the `object` type isn't all that descriptive, so we can be more explicit about what its shape should look like:

```ts
const person: {
  name: string;
  age: number;
} = {
  name: 'Alex',
  age: 32,
};
```

We wouldn't want to type the type annotation for an object every time because, if we need to reuse that same object shape, our code is no longer DRY. This problem is solved by interfaces, which we'll talk about later.

---

## Arrays

Declaring arrays is similar to declaring basic variables. The difference is the addition of `[]` after the type annotation.

```ts
const [variable name]: [type annotation][] = [value, value, value];
// example with value:
const odds: number[] = [1, 3, 5, 7];

// example without value:
const names: string[];
```

---

## Tuples

Unlike Python, TypeScript tuples are mutable in that they can be redefined, but only as long as the new definition is a new tuple, whether that tuple has the same values inside it or not. Their distinct characteristic is being an array that can take different data types. A TS tuple should only use two elements, though TS doesn't enforce this.

```ts
let variety: [number, string] = [10, 'Hello'];
variety = 67;
```

---

## Unions

When a variable needs the ability to have values of multiple types assigned to it, unions express this possiblity using the pipe symbol (`|`).

```ts
const phoneNumber: string | number;

phoneNumber = '5554443333';
phoneNumber = 555444333;
```

```ts
function printNames(name: string | string[]) {
  if (typeof name === 'string') {
    console.log(name);
  } else {
    for (let i: number = 0; i < name.length; i++) {
      console.log(name[i]);
    }
  }
}

printNames('Donavon');
printNames(['Jason', 'Korey', 'Jack']);
```

---

## Type aliases

So far, we've been using built-in types. But, if we want to use user-defined types, **type aliases** are the way to do this. So, if we want to create a custom type, we use the `type` keyword along with a descriptive name.

```ts
type WindowStates = 'open' | 'closed' | 'minimized';
type LockStates = 'locked' | 'unlocked';
type OddNumbersUnderTen = 1 | 3 | 5 | 7 | 9;
```

These aliases can allow you to define a set of values as a type in order to use that custom type to provide validation in relevant parts of your code.

---

## Interfaces

An interface is a syntactical contract to which an entity should conform. In other words, an interface defines the syntax that any entity must adhere to.

Consider the following interface:

```ts
interface Person {
  firstName: string;
  lastName: string;
  sayHi(): string;
}
```

---

## Interfaces

Once we have defined an interface, we can use it to validate objects that we want to create that need to match the shape of the interface.

```ts
const customer: Person = {
  firstName: 'Laura',
  lastName: 'Williams',
  sayHi() {
    return `Hello, ${this.firstName} ${this.lastName}`;
  },
};

console.log(customer.sayHi());

const employee: Person = {
  firstName: 'Ali',
  lastName: 'Saleh',
  sayHi() {
    return `Greetings, ${this.firstName}`;
  },
};

console.log(employee.sayHi());
```

---

## Interfaces

And, much like classes, interfaces can inherit from other interfaces as well.

```ts
interface Person {
  age: number;
}

interface Musician extends Person {
  instrument: string;
}

const drummer: Musician = {
  age: 27,
  instrument: 'Drums',
};

console.log(`Age: ${drummer.age}`);
console.log(`Instrument: ${drummer.instrument}`);
```

---

## Classes

TypeScript classes will look similar to ES6 classes, but with data type declarations being a possible inclusion.

In ES6, we might write:

.row[
.col[

### JavasScript

]
.col[

```js
class Car {
  //field(s)
  make;
  model;

  //constructor
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  //function
  display() {
    console.log(`The make and model is: ${this.make} ${this.model}`);
  }
}

const accord = new Car('Honda', 'Accord');
accord.display();
```

]
]

---

## Classes

.row[
.col[

### TypeScript

]
.col[

```ts
class Car {
  //field(s)
  make: string;
  model: string;

  //constructor
  constructor(make: string, model: string) {
    this.make = make;
    this.model = model;
  }

  //function
  display(): void {
    console.log(`The make and model is: ${this.make} ${this.model}`);
  }
}

const camry = new Car('Toyota', 'Camry');
camry.display();
```

]
]

---

## Classes

And, class inheritance will look similar as well:

```ts
class Shape {
  Area: number;

  constructor(a: number) {
    this.Area = a;
  }
}

class Circle extends Shape {
  display(): void {
    console.log(`Area of the circle: ${this.Area}`);
  }
}

var obj = new Circle(223);
obj.display();
```

---

## Type Casting

Let's take a look at a little more realistic situation.

```ts
const button = document.querySelector('button');
const input1 = document.querySelector('#num1');
const input2 = document.querySelector('#num2');

function add(num1, num2) {
  return num1 + num2;
}

// input values are always strings
button.addEventListener('click', () => {
  console.log(add(input1.value, input2.value));
});
```

---

## Type Casting

We notice that the `.value` keys are unhappy, getting an error of `Property 'value' does not exist on type 'Element'`. The `value` property only exists on certain _types_ of HTML elements, so TS wants us to be more specific, so let's cast the type `HTMLInputElement` since we know that this element type does have a `value` property.

```ts
const input1 = document.querySelector('#num1') as HTMLInputElement;
const input2 = document.querySelector('#num2') as HTMLInputElement;
```

Because TS is opinionated about this, we are forced to write better, cleaner, and less error-prone code.

---

## Type Casting

Now let's make sure that `add` will only accept numbers using type annotation.

```ts
function add(num1: number, num2: number) {
  return num1 + num2;
}
```

We have another error on the value expressions. This is because the values we retrieve from `<input>` elements are strings. So, we'll need to make sure those arguments are modified before passing them to `add`. We could use `parseInt()`, but let's use a **unary operator**.

---

## Type Casting

```ts
button.addEventListener('click', () => {
  console.log(add(+input1.value, +input2.value));
});
```

Finally, let's approve the `add` function by annotating its return type:

```ts
function add(num1: number, num2: number): number {
  return num1 + num2;
}
```

---

## Unknown

```ts
// We don't know what type the user might enter
let userInput: unknown;

userInput = 5;
userInput = 'Sade';
```

This will work, which seems like it doesn't really do anything. But, if we try to reassign our variable to a variable with has a more specific type annotation, we'll get an error.

---

## Unknown

```ts
let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Sade';
// This will cause an error
userName = userInput;
```

This will cause an error (`Type 'unknown' is not assignable to type 'string'.`)k because `unknown` doesn't allow for specificity whereas the `any` type does. As soon as you try to nail `unknown` down to one type, it will throw an error.

---

## Never

If we were to think about a utility function whose objective it is to throw error objects, any functions that are meant to run after the point where the error is thrown are prevented from running. Thus, they will _never_ return their values because they won't get the chance.

```ts
function generateError(message: string, code: number): never {
  throw { errorMessage: message, errorCode: code };
}

generateError('An error occurred', 500);
console.log('after error');
```

In the above code, the `console.log` will never run because the thrown error crashed the whole program. Sure, you can also use `void` as the function type since it's not returning anything, but the `never` type is more accurate.

---

## The Compiler

It can be tedious to run `tsc fileName.ts` every time we make changes. We can tell the compiler to watch a file and automatically run the compiler every time we save new changes to a file.

This can be done with `tsc fileName.ts --watch` or `tsc fileName.ts -w`

And, if we're working in multiple `.ts` files, it would be nice if we can just run `tsc` in order to run all the TypeScript files through the compiler.

---

## The Compiler

First, we need to create the `.json` file that the compiler will read.

```bash
tsc --init
```

This creates a `tsconfig.json` file. Inside, you'll find many configuration options.

Now, if we run `tsc` each time we make changes, it will compile all `.ts` files.

And, if we run `tsc -w` or `tsc --watch`, the compiler will automatically run each time we save one of these files.

The watch process can, of course, be stopped using `ctrl + c` or whatever you use to normally stop these processes.

---

class: frontpage

<div>
  <h2>Front-End Web Development</h2>
  <hr/>
  <h1>End of presentation</h1>
</div>
