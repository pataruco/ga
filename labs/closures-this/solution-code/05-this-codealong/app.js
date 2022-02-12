/**
| Situation                         | What this maps to                    |
| --------------------------------- | ------------------------------------ |
| method invocation                 | the object that owns the method      |
| constructor function              | the newly created object             |
| event handler                     | the element the event was fired from |
| function invocation               | the global object (window)           |
| function invocation (strict mode) | undefined                            |
| arrow function                    | the context of the caller            |
 */

// 1. method invocation
const dog = {
  sound: 'Woof!',
  speak: function () {
    console.log(this.sound);
  },
};

dog.speak();

// 2. constructor function
function Park(name, location) {
  this.name = name;
  this.location = location;

  console.log('this', this);
  // Park is an object
  // {
  // 	name: name,
  // 	location: location
  // }
}

const hydePark = new Park('Hyde', 'London');

// 3. event handler
// look at browser!
document.querySelector('body').addEventListener('click', function () {
  console.log('element that calls this = ', this);
});
document.querySelector('.experimenting').addEventListener('click', function () {
  console.log('element that calls this = ', this);
});

// 4. function invocation
function myFunction() {
  this.data = 'Context is everything!';
  function inner() {
    console.log(this);
  }
  inner();
}
// Context of a function is dependent on how a function is invoked, not how it's defined.
myFunction();

// Check in the console:
myFunction.data;
window.data;

// 5. function invocation (strict mode)
function myFunction() {
  'use strict'; // without refers to window
  function inner() {
    console.log(this);
  }
  inner();
}

myFunction();

// 6. arrow function

// PART 1
const buildCar = (type) => {
  return {
    sound() {
      return 'Vroom!';
    },
    result() {
      // console.log(this)
      return `Your ${type} car goes ${this.sound()}`;
    },
  };
};

// Check in the console
buildCar('Nissan').sound();
buildCar('Nissan').result(); // undefined

// PART 2 - arrow functions within objects:
// function declaration
const flightInfo = {
  flight: 'SW642',
  depart: 'Los Angeles',
  arrive: 'London',
  printRes: function () {
    // we can refer to the flightInfo object with this
    console.log(this.flight + '/' + this.depart + '/' + this.arrive);
    // or we could refer to it by name
    console.log(
      flightInfo.flight + '/' + flightInfo.depart + '/' + flightInfo.arrive,
    );
  },
};

flightInfo.printRes();

// arrow function
// const flightInfo = {
//   flight: 'SW642',
//   depart: 'Los Angeles',
//   arrive: 'London',
//   printRes: () => {
//     // we can refer to the flightInfo object with this
//     console.log(this.flight + '/' + this.depart + '/' + this.arrive);

//     console.log(this); // refers to the Window
//     // or we could refer to it by name
//     console.log(
//       flightInfo.flight + '/' + flightInfo.depart + '/' + flightInfo.arrive,
//     );
//   },
// };

// flightInfo.printRes(); // being called with global scope
