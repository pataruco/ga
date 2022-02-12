// Create a module called humanModule
// humanModule should have a property called languages - the value should be an empty array
// give the module an age property and assign it a value between 1 - 100

// write a method called learnLanguage that takes one parameter (a language) and adds the language to the languages array

// write a method called speak that returns the string `I speak [ all the languages should join into one string (look into .join()) ]`

// write a method called sayAge that returns the string I am `I am [the human modules age]`

// write a method  called getOlder that increases the age by 1

const humanModule = (function () {
  return {
    languages: [],
    age: 34,
    learnLanguage: function (language) {
      this.languages.push(language);
    },
    speak: function () {
      return `I speak ${this.languages.join(', ')}`;
    },
    sayAge: function () {
      return `I am ${this.age}`;
    },
    getOlder: function () {
      this.age++;
    },
  };
})();

console.log(humanModule);
humanModule.learnLanguage('english');
console.log(humanModule.speak());
humanModule.learnLanguage('french');
console.log(humanModule.speak());
console.log(humanModule.sayAge());
humanModule.getOlder();
console.log(humanModule.sayAge());
