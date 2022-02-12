'use strict';

// Create three monkey objects

const monkey1 = {
  name: 'Hermione',
  species: 'howler',
  foodsEaten: [],
  eatSomething: function (food) {
    this.foodsEaten.push(food);
  },
  introduce: function () {
    console.log(
      'My name is ' +
        this.name +
        '. I come from the ' +
        this.species +
        ' family. I have eaten these foods: ' +
        this.foodsEaten.join(', ') +
        '.',
    );
  },
};

const monkey2 = {
  name: 'Severus',
  species: 'pygmy marmoset',
  foodsEaten: [],
  eatSomething: function (food) {
    this.foodsEaten.push(food);
  },
  introduce: function () {
    console.log(
      'My name is ' +
        this.name +
        '. I come from the ' +
        this.species +
        ' family. I have eaten these foods: ' +
        this.foodsEaten.join(', ') +
        '.',
    );
  },
};

const monkey3 = {
  name: 'Jane',
  species: 'squirrel monkey',
  foodsEaten: [],
  eatSomething: function (food) {
    this.foodsEaten.push(food);
  },
  introduce: function () {
    console.log(
      'My name is ' +
        this.name +
        '. I come from the ' +
        this.species +
        ' family. I have eaten these foods: ' +
        this.foodsEaten.join(', ') +
        '.',
    );
  },
};

// BONUS: Create a constructor function that makes monkeys

function Monkey(name, species) {
  this.name = name;
  this.species = species;
  this.foodsEaten = [];
  this.eatSomething = function (food) {
    this.foodsEaten.push(food);
  };
  this.introduce = function () {
    console.log(
      'My name is ' +
        this.name +
        '. I come from the ' +
        this.species +
        ' family. I have eaten ' +
        this.foodsEaten.join(', ') +
        '.',
    );
  };
}

let monkey1 = new Monkey('Jack', 'Howler');
monkey1.eatSomething('banana');
monkey1.introduce();

let monkey2 = new Monkey('James', 'Pygmy Marmoset');
monkey2.eatSomething('peach');
monkey2.eatSomething('plum');
monkey2.introduce();

let monkey3 = new Monkey('James', 'Squirrel Monkey');
monkey3.eatSomething('pineapple');
monkey3.introduce();

// Getting properties using the dot syntax / bracket syntax
console.log(monkey1.name);
console.log(monkey1['name']);
