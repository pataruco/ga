'use strict';

// 1. Create an object called car

const car = {};

// 2. Add a current speed property to the car object and give it the value of 30

car.currentSpeed = 30;

// 3. Add a fuel level to the object and give it the value of 10

car.fuelLevel = 10;

// 4. Add a method called accelerate. When car.acceletate is invoked, the current speed should increase by 1 and fuel level should decrease by 1.

car.accelerate = function () {
  this.currentSpeed++;
  this.fuelLevel--;
  console.log(this);
};
car.accelerate();

// 5. Add a method called decelerate. When car.decelerate is invoked, the current speed should decrease by 1.

car.decelerate = function () {
  this.currentSpeed--;
  console.log(this);
};
car.decelerate();

// 6. Add a method called refuel. When car.refule is invoked, the fuel level should go back to 10.

car.refuel = function () {
  this.fuelLevel = 10;
  console.log(this);
};

// BONUS adapt the code to console log a warning if the fuel level drops below 2.

// car.accelerate = function() {
//     this.currentSpeed++;
//     this.fuelLevel--;

//     if(this.fuelLevel < 2) {
//     console.log('low on fuel!');
//     }
// }
