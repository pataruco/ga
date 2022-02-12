function Cat(name, breed) {
  this.name = name;
  this.breed = breed;
}

Cat.prototype.species = 'Felis Catus';
Cat.prototype.meow = function () {
  return `Meow! I'm ${this.name}`;
};

// Our objects work just as they did before!
let oscar = new Cat('Oscar', 'Siamese');
let milo = new Cat('Milo', 'Persian');

console.log('oscar', oscar);
oscar.species; // "Felis Catus"
oscar.meow(); // "Meow! I’m Oscar"

console.log('milo', milo);

// OR Alternate form:
// The disadvantage here is that we're overwriting any existing properties on
// the prototype
// Cat.prototype = {
//   species: 'Felis Catus',
//   speak: function () {
//     return `Meow! I'm ${this.name}`;
//   },
// };

// Our objects work just as they did before!
oscar = new Cat('Oscar', 'Siamese');
milo = new Cat('Milo', 'Persian');

console.log(oscar); // look at __proto__

oscar.name; // "Oscar"
oscar.breed; // "Siamese"
oscar.meow(); // "Hello! I'm Oscar"

milo.name; // "Milo"
milo.breed; // "Persian"
milo.meow(); // "Hello! I'm Milo"
