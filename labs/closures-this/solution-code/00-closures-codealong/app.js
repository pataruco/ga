// PART 1

function sayNumber() {
  let num = 42; // local variable
}

console.log(sayNumber());
// undefined

function sayNumber() {
  let num = 42;
  return num;
}

console.log(sayNumber());
// 42

function sayNumber() {
  // Local variable that ends up within closure
  let num = 42;
  const say = function () {
    console.log(num);
    num++; // moved into inner function
  };
  return say;
}

const sayIt = sayNumber();
sayIt(); // logs 42
sayIt(); // logs 43
sayIt(); // logs 44

// // PART 2
// function sayNumber() {
//     // Local variable that ends up within closure
//     let num = 42;
//     const say = function() {
//       console.log(num);
//       num++; // moved into inner function
//     }
//     return say;
// }
// const sayIt1 = sayNumber();
// const sayIt2 = sayNumber();
// sayIt1(); // logs 42
// sayIt1(); // logs 43
// sayIt1(); // logs 44
// sayIt2(); // logs 42
// sayIt2(); // logs 43
