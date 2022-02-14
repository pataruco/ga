/*
  Write code that prints the lyrics to "99 Bottles of Beer on the Wall" to the
  console.
  If you're unfamiliar with the song, you can find the lyrics here:
  http://www.99-bottles-of-beer.net/lyrics.html.

  Be sure that all of your output includes proper spacing (no words or values
  running into each other).

  Hint: You can make your output appear on multiple lines by using the string '\n'
  to insert a line break.

  BONUS: For an extra challenge, improve this code to print "1 bottle" rather
  than "1 bottles" as well as the special lyrics for no bottles remaining (Hint:
  read up on if/else conditional statements at https://mdn.io/if...else).
*/

'use strict';

const printNParagraph = (numberOfBottles) =>
  console.log(`
${numberOfBottles} bottles of beer on the wall, ${numberOfBottles} bottles of beer.
Take one down and pass it around, ${
    numberOfBottles - 1
  } bottles of beer on the wall.
`);

const printOneBottleParagraph = () =>
  console.log(`1 bottle of beer on the wall, 1 bottle of beer.
Take one down and pass it around, no more bottles of beer on the wall.
`);

const printZeroBottlesParagraph = () =>
  console.log(`No more bottles of beer on the wall, no more bottles of beer.
Go to the store and buy some more, 99 bottles of beer on the wall.
`);

let bottleCount = 100;

do {
  bottleCount--;

  switch (bottleCount) {
    case 1:
      printOneBottleParagraph();
      break;
    case 0:
      printZeroBottlesParagraph();
      break;
    default:
      printNParagraph(bottleCount);
      break;
  }
} while (bottleCount > 0);
