'use strict';

const person = {};

person.firstName = 'Tristan';
person.lastName = null;
person.lastName = 'Hall';
person.hobbies = ['Paragliding', 'Snow boarding', 'Scuba diving'];
person.foods = ['banana', 'apple'];

person.age = 34;

console.log(person);

delete person.age;
console.log(person);

function getProperty(propertyName) {
  console.log(person[propertyName]);
}

getProperty('firstName');

function getHobby(index) {
  console.log(person.hobbies[index]);
}

getHobby(2);

function getPropertyOrHobby(propertyName, index) {
  console.log(person[propertyName][index]);
}

getPropertyOrHobby('foods', 1);

person.speak = function () {
  console.log(person.firstName);
};

person.speak();

const color = 'red';

const hello = function () {
  console.log('helloooooo!');
};

const car = { color, favFilm: 'Step Brothers', hello };

console.log(car);
