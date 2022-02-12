console.log('working');

const coloursModule = (function () {
  const colours = [];

  return {
    addColour: function (newColour) {
      colours.push(newColour);
    },
    getAllColours: function () {
      return colours;
    },
    getColourCount: function () {
      return colours.length;
    },
  };
})();

console.log(coloursModule);
coloursModule.addColour('yellow');
console.log(coloursModule.getAllColours());
console.log(coloursModule.getColourCount());

coloursModule.addColour('blue');
coloursModule.addColour('red');
coloursModule.addColour('green');
console.log(coloursModule.getAllColours());
