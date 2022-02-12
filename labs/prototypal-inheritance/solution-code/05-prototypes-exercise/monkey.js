/*
  Create a `Monkey` constructor that has the following attributes:
  * name - (a string)
  * species - (a string)
  * foodsEaten - (an array)

  And the following methods:
  * eat(food) - adds the food (a string) to the list of foods eaten
  * introduce() - introduces self, with name, species, and what it's eaten.

  ## Goal

  Make sure to use the Monkey prototype so that you're not creating multiple copies of the functions for your monkeys

  ## Bonus

  WHen logging the foods eaten, make the sentence grammatical, including commas and "and" when appropriate.
*/

// function Monkey(name,species){
//   this.name = name;
//   this.species = species;
//   this.foodsEaten = [];
//   this.eat = function(food){
//     this.foodsEaten.push(food);
//   }
//   this.introduce = function(){
//     return `Hello! My name is ${this.name} and I am a ${this.species} I have eaten ${this.foodsEaten.join(", ")}`;
//   }
// }

function Monkey(name, species) {
  this.name = name;
  this.species = species;
  this.foodsEaten = [];
}
Monkey.prototype.eat = function (food) {
  this.foodsEaten.push(food);
};
Monkey.prototype.introduce = function () {
  return `Hello! My name is ${this.name} and I am a ${
    this.species
  } I have eaten ${this.foodsEaten.join(', ')}`;
};

let monkey1 = new Monkey('Dave', 'gorilla');
monkey1.eat('banana');
monkey1.eat('human');

let monkey2 = new Monkey('Gary', 'chimp');
monkey2.eat('banana');

let monkey3 = new Monkey('Steve', 'orangutan');
monkey2.species;
