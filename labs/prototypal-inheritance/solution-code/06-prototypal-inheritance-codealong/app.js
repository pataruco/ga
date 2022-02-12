////////////////////////////////
// Animal (Parent) Class
////////////////////////////////
function Animal(name) {
  this.name = name; // want it to come from Dog

  console.log('THIS = ', this);
}

Animal.prototype.kingdom = 'Animalia';
Animal.prototype.breathe = function () {
  console.log('Inhale... exhale...');
};

////////////////////////////////
// HELLO THIS IS DOG
////////////////////////////////
function Dog(name, breed) {
  this.breed = breed;
  // this.name = name; // don't repeat this, instead use .call method:
  Animal.call(this, name); // 1st parameter is 'this' 2nd is what you pass to Animal function
  // calling Animal constructor, passing the name parameter and specifying
  // that any references to 'this' should reference the current constructor function, Dog
  // .call to used set CONTEXT, or more specifically, what “this” refers to.

  // Animal(name);
  // const newFunction = () => {
  //   console.log('hello');
  // }
  // newFunction.call();
}

// Important! Set up the link in the prototype chain connecting Dogs to Animals
Dog.prototype = new Animal(); // we don't specify name here

// Add any methods / properties shared by all dogs.
Dog.prototype.bark = function () {
  console.log('Woof');
};
Dog.prototype.species = 'Canis canis';

////////////////////////////////
// Testing our dawgs
////////////////////////////////
// let spot = new Dog("Spot", "Beagle");
let spot = new Dog('Beagle', 'Spot');
spot.name;

// from Animal prototype
spot.kingdom;
spot.breathe();

// from Dog prototype
spot.bark();
spot.species;

// from Dog properties
spot.name;
spot.breed;

// original animal
let tiger = new Animal('Tony');
tiger.bark(); //undefined
