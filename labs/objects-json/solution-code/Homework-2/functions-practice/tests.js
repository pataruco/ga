/* global describe, it */
/* eslint-disable no-undef */

const chai = window.chai;
const expect = chai.expect;

describe('hello', () => {
  it('should return "Hello World!" if no argument is passed', () => {
    expect(hello()).to.equal('Hello World!');
  });
  it('should return "Hello <argument>!" if one is passed', () => {
    expect(hello('Mike')).to.equal('Hello Mike!');
  });
});

describe('areaOfCircle', () => {
  it('should find the area of a circle given a radius', () => {
    expect(areaOfCircle(4)).to.equal(50.26548245743669);
    expect(areaOfCircle(10)).to.equal(314.1592653589793);
    expect(areaOfCircle(1)).to.equal(3.141592653589793);
  });
});

describe('celciusToFarenheit', () => {
  it('should convert celcius to farenheit', () => {
    expect(celciusToFarenheit(0)).to.equal(32);
    expect(celciusToFarenheit(-40)).to.equal(-40);
    expect(celciusToFarenheit(100)).to.equal(212);
  });
});

describe('numberReverse', () => {
  it('should reverse a number', () => {
    expect(numberReverse(123)).to.equal(321);
    expect(numberReverse(4001)).to.equal(1004);
  });
  it('should handle decimals', () => {
    expect(numberReverse(78.567)).to.equal(765.87);
  });
});

describe('palindromeCheck', () => {
  it('should check if a word is a palindrome', () => {
    expect(palindromeCheck('pop')).to.be.true;
    expect(palindromeCheck('dog')).to.be.false;
  });
  it('should check if a phrase is a palindrome', () => {
    expect(palindromeCheck('nurses run')).to.be.true;
    expect(palindromeCheck('will not work')).to.be.false;
  });
});

describe('orderStringAlphabetically', () => {
  it('should order a word alphabetically', () => {
    expect(orderStringAlphabetically('happy')).to.equal('ahppy');
  });
  it('should order a phrase alphabetically', () => {
    expect(orderStringAlphabetically('javascript is cool')).to.equal(
      'aacciijlooprsstv',
    );
  });
  it('should be case insensive', () => {
    expect(orderStringAlphabetically('Testing Rocks')).to.equal('cegiknorsstt');
  });
});

describe('numOfOccurances', () => {
  it('should return the number of occurances of each letter of a string', () => {
    expect(numOfOccurances('this is great')).to.deep.equal({
      t: 2,
      h: 1,
      i: 2,
      s: 2,
      g: 1,
      r: 1,
      e: 1,
      a: 1,
    });
  });
  it('should be case insensive', () => {
    expect(numOfOccurances('Feeling Like A Pro')).to.deep.equal({
      f: 1,
      e: 3,
      l: 2,
      i: 2,
      n: 1,
      g: 1,
      k: 1,
      a: 1,
      p: 1,
      r: 1,
      o: 1,
    });
  });
});

describe('titleCase', () => {
  it('should capitalize the first letter of each word', () => {
    expect(titleCase('this is it')).to.equal('This Is It');
  });
});

describe('numOfVowels', () => {
  it('should count the number of vowels in a string', () => {
    expect(numOfVowels('yellow submarine')).to.equal(6);
  });
  it('should be case insensive', () => {
    expect(numOfVowels('Yellow Submarine')).to.equal(6);
  });
});

describe('removeBlank', () => {
  it('should remove all empty values EXCEPT 0 from an array', () => {
    expect(
      removeBlank([0, NaN, undefined, false, '', null, 'Kevin']),
    ).to.deep.equal([0, 'Kevin']);
  });
  it('should be able to handle complex data types', () => {
    expect(removeBlank([0, [], {}])).to.deep.equal([0, [], {}]);
  });
});

describe('randomElement', () => {
  it('should return a random element from an array', () => {
    expect(randomElement(['red', 'green', 'blue'])).to.be.oneOf([
      'red',
      'green',
      'blue',
    ]);
  });
});

describe('secondLowestSecondHighest', () => {
  it('should return the second highest and second lowest numbers of an array', () => {
    expect(
      secondLowestSecondHighest([99, 2000, -93, 40, -761115, 11]),
    ).to.deep.equal([-93, 99]);
  });
});

describe('coins', () => {
  it('should return the coins needed to make up the price supplied', () => {
    expect(coins(1.5)).to.deep.equal([100, 50]);
  });
  it('should use the smallest number of coins possible', () => {
    expect(coins(1.99)).to.deep.equal([100, 50, 20, 20, 5, 2, 2]);
    expect(coins(2.88)).to.deep.equal([100, 100, 50, 20, 10, 5, 2, 1]);
  });
});

describe('frame', () => {
  it('should frame a string in asterisks', () => {
    expect(frame('Rumplestiltskin')).to.equal(
      '*******************\n* Rumplestiltskin *\n*******************',
    );
    expect(frame('Hello Kitty')).to.equal(
      '***************\n* Hello Kitty *\n***************',
    );
  });
});

describe('mergeUnique', () => {
  it('should merge two arrays', () => {
    expect(mergeUnique([1, 2, 3], [4, 5, 6])).to.deep.equal([1, 2, 3, 4, 5, 6]);
  });
  it('should remove duplicates', () => {
    expect(
      mergeUnique(['Mike', 'Emily', 'Eduardo'], ['Eduardo', 'Will', 'Emily']),
    ).to.deep.equal(['Mike', 'Emily', 'Eduardo', 'Will']);
    expect(mergeUnique([5, 10, 15, 20], [10, 20, 30, 40])).to.deep.equal([
      5, 10, 15, 20, 30, 40,
    ]);
  });
});

describe('arrayToObjects', () => {
  it('should convert an array of strings to an array of objects', () => {
    expect(arrayToObjects(['Paris', 'New York'], 'city')[0]).to.be.an('object');
  });
  it('should have one object for each string in the original array', () => {
    expect(arrayToObjects(['Paris', 'New York'], 'city').length).to.equal(2);
  });
  it('each object should have the supplied key, and the value of the original array', () => {
    expect(arrayToObjects(['Paris', 'New York'], 'city')[0].city).to.equal(
      'Paris',
    );
    expect(arrayToObjects(['Paris', 'New York'], 'city')[1].city).to.equal(
      'New York',
    );
  });
});

describe('objectToArray', () => {
  it('should convert an object into an array', () => {
    expect(objectToArray({ name: 'Will Smith', dob: '15-09-1968' })).to.be.an(
      'array',
    );
  });
  it('should have one array element for each key/value pair', () => {
    expect(
      objectToArray({ name: 'Will Smith', dob: '15-09-1968' }).length,
    ).to.equal(2);
  });
  it('each element should be an array of two elements', () => {
    expect(
      objectToArray({ name: 'Will Smith', dob: '15-09-1968' })[0].length,
    ).to.equal(2);
    expect(
      objectToArray({ name: 'Will Smith', dob: '15-09-1968' })[1].length,
    ).to.equal(2);
  });
  it('should contain the data in the correct format', () => {
    expect(
      objectToArray({ name: 'Will Smith', dob: '15-09-1968' })[0],
    ).to.deep.equal(['name', 'Will Smith']);
    expect(
      objectToArray({ name: 'Will Smith', dob: '15-09-1968' })[1],
    ).to.deep.equal(['dob', '15-09-1968']);
  });
});

describe('daysBetween', () => {
  it('should return the number of days between two dates', () => {
    expect(daysBetween('2017-02-01', '2017-01-01')).to.equal(31);
  });
  it('should not return negative numbers', () => {
    expect(daysBetween('2017-01-01', '2017-02-01')).to.equal(31);
  });
});

describe('secondsBetween', () => {
  it('should return the number of seconds between to times', () => {
    expect(secondsBetween('12:00:00', '12:00:01')).to.equal(1);
  });
  it('should not return negative numbers', () => {
    expect(secondsBetween('12:00:01', '12:00:00')).to.equal(1);
  });
  it('should handle 12-hour and 24-hour format', () => {
    expect(secondsBetween('7:30:00pm', '8:00:00pm')).to.equal(1800);
    expect(secondsBetween('17:30:00', '18:00:00')).to.equal(1800);
    expect(secondsBetween('5:30:00pm', '18:00:00')).to.equal(1800);
  });
  it('should throw an error if time format is wrong', () => {
    expect(secondsBetween.bind(window, "1 o'clock", '13-45-00')).to.throw(
      Error,
    );
  });
});

describe('fibonacci', () => {
  it('should return the first n fibonacci numbers', () => {
    expect(fibonacci(8)).to.deep.equal([0, 1, 1, 2, 3, 5, 8, 13]);
    expect(fibonacci(1)).to.deep.equal([0]);
    expect(fibonacci(50)).to.deep.equal([
      0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597,
      2584, 4181, 6765, 10946, 17711, 28657, 46368, 75025, 121393, 196418,
      317811, 514229, 832040, 1346269, 2178309, 3524578, 5702887, 9227465,
      14930352, 24157817, 39088169, 63245986, 102334155, 165580141, 267914296,
      433494437, 701408733, 1134903170, 1836311903, 2971215073, 4807526976,
      7778742049,
    ]);
  });
});
