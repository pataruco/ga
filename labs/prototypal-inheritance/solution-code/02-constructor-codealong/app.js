// function Person(initialName) {
//   this.name = initialName;
//   this.species = 'Homo Sapiens';
//   this.speak = function () {
//     return "Hello! I'm " + this.name;
//   };
// }

function Person(initialName) {
  return {
    name: initialName,
    species: 'Homo Sapiens',
    speak() {
      return "Hello! I'm " + this.name;
    },
  };
}

// functions are first-class objects

let pedro = new Person('Pedro');
let alex = new Person('Alex');

console.log(pedro.name); // "pedro"
console.log(pedro.speak()); // "Hello! I'm pedro"

console.log(alex.name); // "alex"
console.log(alex.speak()); // "Hello! I'm alex"
