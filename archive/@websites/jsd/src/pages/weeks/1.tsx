import Week from '../../components/week';

const resources = [
  [
    'An overview of HTTP',
    'https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview',
  ],
  [
    'Visual Studio Code, Getting Started ',
    'https://code.visualstudio.com/docs',
  ],
  [
    'What is Pseudocode? How to Use Pseudocode to Solve Coding Problems',
    'https://www.freecodecamp.org/news/what-is-pseudocode-in-programming',
  ],
  [
    'History of the Web (YouTube video)',
    'https://www.youtube.com/watch?v=h8K49dD52WA',
  ],
  [
    'Invention of Internet',
    'https://www.history.com/topics/inventions/invention-of-the-internet',
  ],
  [
    'MDN: JavaScript data types and data structures',
    'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures',
  ],
  [
    'MDN: Expressions and operators',
    'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators',
  ],
  [
    'MDN: Arithmetic operators',
    'https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators',
  ],
  [
    'MDN: Working with objects',
    'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects',
  ],
  [
    'Tuts+: What is type coercion?',
    'http://code.tutsplus.com/articles/the-beginners-guide-to-type-coercion-what-is-coercion--cms-21917',
  ],
  [
    'MDN: JavaScript Introduction',
    'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Introduction',
  ],
  [
    'MDN: Learning JavaScript',
    'https://developer.mozilla.org/en-US/Learn/JavaScript',
  ],
  [
    'Stack Overflow: When should I use a semicolon after curly braces?',
    'http://stackoverflow.com/questions/2717949/when-should-i-use-a-semicolon-after-curly-braces',
  ],
];

const bonuses = [
  [
    'Watch Intro to GitHub video',
    'https://www.youtube.com/watch?v=vDv5K5PbvO8',
  ],
  [
    "Complete Code Academy's Learn Git course",
    'https://www.codecademy.com/learn/learn-git',
  ],
];

const weekConfig = {
  weekNumber: 1,
  resources,
  bonuses,
  firstLessonTitle: 'Installfest',
  secondLessonTitle: 'The Command Line & Data Types',
  homeworkPath:
    'https://github.com/pataruco/jsd/raw/master/homeworks/week-1/week-1-starter-code.zip',
};

const Week1 = () => <Week {...weekConfig} />;

export default Week1;
