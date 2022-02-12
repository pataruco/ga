'use strict';
/*
  Write code that generates random addresses
  Each time you run it, your program should log
  a new randomly-generated address to the console.

  Step 1:
    Create arrays that contain dummy data for each of the following:
    door number, street name, city name, and post code

  Step 2:
    Write code that randomly selects one item from each of these arrays, uses
    the selected values to construct a string containing a random address, and
    then logs the result to the console.

    HINT: You will need to use methods in JavaScript's Math object
    (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math)

  Step 3:
    Save your work, run the program in Node, and verify
    that a random address is logged.

  Step 4:
    Rerun the program again and verify that a different random address is logged.

  Example output:
    12 Dolphin Street, London , W11 2SE
*/

const randomInteger = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const streetNames = [
  'Alban Highwalk and St Albans Court',
  'Baltic Street West',
  'Carlisle Avenue',
  'Distaff Lane',
  'Eldon Street',
  'Fen Court',
  'Fenchurch Avenue',
  'Fenchurch Buildings',
  'Fenchurch Place',
  'Fenchurch Street',
  'Giltspur Street',
  'Hare Place',
  'Ironmonger Lane',
  'John Wesley Highwalk ',
  'King Street ',
  'Lauderdale Place ',
  'Mark Lane ',
  'Newbury Street ',
  'Old Jewry ',
  "Paul's Walk",
  'Queen Street and Queen Street Place',
  'Robin Hood Court',
  'St Botolph Row and St Botolph Street',
  "The Terrace (off King's Bench Walk)",
  'Viscount Street',
  'Watergate',
  'City of London',
  'Bishopsgate',
  'Farringdon',
  'College of Arms',
  'Bank of England',
  'London Bridge',
  'Cannon Street',
];

const cities = [
  'Aberdeen',
  'Armagh',
  'Bangor',
  'Bath',
  'Belfast',
  'Birmingham',
  'Bradford',
  'Brighton & Hove',
  'Bristol',
  'Cambridge',
  'Canterbury',
  'Cardiff',
  'Carlisle',
  'Chelmsford',
  'Chester',
  'Chichester',
  'Coventry',
  'Derby',
  'Derry',
  'Dundee',
  'Durham',
  'Edinburgh',
  'Ely',
  'Exeter',
  'Glasgow',
  'Gloucester',
  'Hereford',
  'Inverness',
  'Kingston upon Hull',
  'Lancaster',
  'Leeds',
  'Leicester',
  'Lichfield',
  'Lincoln',
  'Lisburn',
  'Liverpool',
  'City of London',
  'Manchester',
  'Newcastle upon Tyne',
  'Newport',
  'Newry',
  'Norwich',
  'Nottingham',
  'Oxford',
  'Perth',
  'Peterborough',
  'Plymouth',
  'Portsmouth',
  'Preston',
  'Ripon',
  'St Albans',
  'St Asaph',
  'St Davids',
  'Salford',
  'Salisbury',
  'Sheffield',
  'Southampton',
  'Stirling',
  'Stoke-on-Trent',
  'Sunderland',
  'Swansea',
  'Truro',
  'Wakefield',
  'Wells',
  'Westminster',
  'Winchester',
  'Wolverhampton',
  'Worcester',
  'York',
];

const postCodes = [
  'L25 0LL',
  'YO25 9HH',
  'GU14 8UE',
  'E14 1WS',
  'DA15 8LQ',
  'WC1A 2NS',
  'SL1 8PE',
  'CO13 9DP',
  'SK23 7QJ',
  'SL0 9HL',
  'BD18 4DE',
  'DH2 2LT',
  'WS15 2XJ',
  'WN7 4RJ',
  'EN2 7DQ',
  'DD4 6ES',
  'B78 3HS',
  'LU7 2TU',
  'CW11 1FR',
  'SE12 9BN',
  'B23 6UU',
];

const randomDoorNumber = () => randomInteger(1, 100);

const randomStringFrom = (array) => array[randomInteger(0, array.length - 1)];

const address = () =>
  `${randomDoorNumber()}, ${randomStringFrom(streetNames)}, ${randomStringFrom(
    cities,
  )}, ${randomStringFrom(postCodes)}`;

console.log(address());
