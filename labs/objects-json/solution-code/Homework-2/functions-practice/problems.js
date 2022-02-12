/* eslint-disable no-unused-vars */

// write a function that returns "Hello World!" if no argument is given, or "Hello <argument>!" otherwise
// eg: hello() => "Hello World!"; hello("Mike") => "Hello Mike!"
function hello(string = 'World') {
  return 'Hello ' + string + '!';
}

// write a function that will calculate the area of a circle, given the radius
function areaOfCircle(radius) {
  return Math.PI * Math.pow(radius, 2);
}

// write a function to convert celcius to farenheit
function celciusToFarenheit(celcius) {
  return (celcius * 9) / 5 + 32;
}

// write a function that will reverse a number (eg. 456733 become 337654)
function numberReverse(number) {
  return parseFloat(number.toString().split('').reverse().join(''));
}

// write a function to check if a word or phrase is a palindrome returning a boolean
// eg. palindromeCheck('dad') => true, palindrome('nonsense') => false
function palindromeCheck(string) {
  return (
    string.replace(/ /g, '').split('').reverse().join('') ===
    string.replace(' ', '')
  );
}

// write a function that returns the letters of a word or phrase in alphabetical order case insensitive
// eg. orderStringAlphabetically('javascript is cool') => 'aacciijlooprsstv'
function orderStringAlphabetically(string) {
  return string.toLowerCase().replace(/ /g, '').split('').sort().join('');
}

// write a function to return the number of occurances of each letter of a string in an object case insensitive
// eg. numOfOccurances('This is great') => { t: 2, h: 1, i: 2, s: 2, g: 1, r: 1, e: 1, a: 1 }
function numOfOccurances(string) {
  return string
    .toLowerCase()
    .replace(/ /g, '')
    .split('')
    .reduce((obj, letter) => {
      obj[letter] = obj[letter] ? obj[letter] + 1 : 1;
      return obj;
    }, {});
}

// write a function that capitalizes the first letter of each word
// eg. titleCase('the lord of the rings') => 'The Lord Of The Rings'
function titleCase(string) {
  return string
    .split(' ')
    .map((word) => {
      return `${word[0].toUpperCase()}${word.substring(1)}`;
    })
    .join(' ');
}

// write a function that returns the number of vowels in a string case insensitive
// 'y' should not be considered a vowel
// eg: numOfVowels('Yellow Submarine') => 6
function numOfVowels(string) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  return string.split('').reduce((count, letter) => {
    return vowels.includes(letter.toLowerCase()) ? count + 1 : count;
  }, 0);
}

// write a function to remove all empty values (null, undefined, '', NaN, false) EXCEPT 0 from an array.
// It should handle complex data types eg: {}, [] etc.
// eg: [0, false, [], undefined, {}, NaN, 'Kevin'] => [0, [], {}, 'Kevin'];
function removeBlank(array) {
  return array.filter((value) => {
    return value === 0 || !!value;
  });
}

// write a function to return a random element from an array
// eg: [1,"elephant", "apple", 67] => "elephant"
function randomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}

// write a function that returns the second lowest and second highest number in an array
// eg: [1,2,3,4,5,6,7,8] => [2,7]
function secondLowestSecondHighest(array) {
  const orderedArray = array.sort((a, b) => {
    return a - b;
  });
  return [orderedArray[1], orderedArray[array.length - 2]];
}

// write a function that will convert a price into coins needed to make up that price
// the coins available are 1, 2, 5, 10, 20, 50, 100
// the function should use the smallest number of coins possible
// eg: coins(1.99) => [100, 50, 20, 20, 5, 2, 2]
function coins(price) {
  let pence = Math.floor(price * 100);
  const coins = [100, 50, 20, 10, 5, 2, 1];
  const result = [];

  coins.forEach((coin) => {
    while (pence - coin >= 0) {
      pence -= coin;
      result.push(coin);
    }
  });

  return result;
}

// write a function that frames a string in asterisks (*)
//                             ***************
// eg: frame('Hello Kitty') => * Hello Kitty *
//                             ***************
function frame(string) {
  const beam = new Array(string.length + 5).join('*');
  return `${beam}\n* ${string} *\n${beam}`;
}

// write a function to merge two arrays and remove duplicates
// eg: mergeUnique([9,8,8,9], [7,8,8,7]) => [9,8,7]
function mergeUnique(arr1, arr2) {
  return arr1.concat(arr2).filter((num, i, array) => {
    return array.indexOf(num) === i;
  });
}

// // write a function that converts an array of strings into an array of objects, with the supplied key
// // eg: arrayToObjects(["Mike", "Emily"], "name") => [{ name: "Mike" }, { name: "Emily"}]
// function arrayToObjects(array, key) {
//   return array.map((string) => {
//     const object = {};
//     object[key] = string;
//     return object;
//   });
// }

// // write a function to convert an object into an array of arrays containing key and value
// // eg: objectToArray({ name: 'Will Smith', dob: '15-09-1968' }) => [['name', 'Will Smith'], ['dob', '15-09-1968']];
// function objectToArray(object) {
//   return Object.keys(object).map((key) => {
//     return [key, object[key]];
//   });
// }

// write a function which returns the number of days between two dates (as strings with format YYYY-MM-DD)
// it should not return negative numbers
// eg: daysBetween("2017-01-01", "2017-02-01") => 31; daysBetween("2017-02-01", "2017-01-01") => 31
function daysBetween(date1, date2) {
  return Math.abs(new Date(date1) - new Date(date2)) / 1000 / 60 / 60 / 24;
}

// write a function which returns the number of seconds between two times (in the same day)
// times should be given as strings in the format "HH:MM:SS"
// it should be able to handle 12-hour (7:35:00pm) and 24-hour (19:35:00) formats
// throw an error if the time format is wrong
function secondsBetween(time1, time2) {
  function getMoment(str) {
    if (!str.match(/[0-9]{1,2}:[0-9]{2}:[0-9]{2}(am|pm)?/)) {
      throw new Error('Invalid time format');
    }

    const info = [];
    str.split(':').forEach((t, i, array) => {
      if (t.match(/pm/)) info[0] += 12;
      info[i] = parseFloat(t);
    });

    const moment = new Date();
    moment.setHours(info[0]);
    moment.setMinutes(info[1]);
    moment.setSeconds(info[2]);
    moment.setMilliseconds(0);

    return moment;
  }

  return Math.abs(getMoment(time1) - getMoment(time2)) / 1000;
}

// write a function to find the first n fibonacci numbers
// the fibonacci sequence is a series of numbers, each number is the sum of the last two
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34 etc...
// eg: fibonacci(4) => [0,1,1,2]; fibonacci(8) => [0, 1, 1, 2, 3, 5, 8, 13];
function fibonacci(n) {
  const sequence = [0, 1];

  if (n < 3) return sequence.slice(0, n);

  while (sequence.length < n) {
    sequence.push(
      sequence.slice(-2).reduce((a, b) => {
        return a + b;
      }),
    );
  }

  return sequence;
}
