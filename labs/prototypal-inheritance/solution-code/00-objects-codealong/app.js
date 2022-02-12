let spain = {
  name: 'Spain',
  language: 'Spanish',
  hello: function () {
    return 'Hola';
  },
};

let france = {
  name: 'France',
  language: 'French',
  hello: function () {
    return 'Bonjour';
  },
};

// This is repetitive code which can be replaced by a function which
// returns the repeated object instead

// function Country(name, language, hello) {
//   this.name = name;
//   this.language = language;
//   this.hello = function () {
//     return hello;
//   };
// }

function Country(name, language, hello) {
  return {
    name,
    language,
    hello() {
      return hello;
    },
  };
}

const england = new Country('England', 'English', 'Hello');
console.log(england);
console.log(england.hello());
console.log(england.name);
