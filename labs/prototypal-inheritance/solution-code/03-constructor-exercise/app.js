// Write a constructor function to replace our `makeCar` function
// earlier.

// function makeCar(model, colour) {
//   let car = {
//     model: model,
//     colour: colour,
//     fuel: 100,
//     drive: function() {
//       this.fuel--;
//       return 'Vroom!';
//     },
//     refuel: function() {
//       this.fuel = 100;
//     }
//   };
//   return car;
// }

// function Car(model, colour) {
//   this.model = model;
//   this.colour = colour;
//   this.fuel = 100;
//   this.drive = function () {
//     this.fuel--;
//     return 'Vroom!';
//   };
//   this.refuel = function () {
//     this.fuel = 100;
//   };
// }

function Car(model, colour) {
  return {
    model,
    colour,
    fuel: 100,
    drive() {
      this.fuel--;
      return 'Vroom!';
    },
    refuel() {
      this.fuel = 100;
    },
  };
}

let celica = new Car('Celica', 'lemonchiffon');
console.log(celica);
