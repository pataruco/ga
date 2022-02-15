import Week from '../../components/week';

const resources = [
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
  [
    'MDN: Document',
    'https://developer.mozilla.org/en-US/docs/Web/API/Document',
  ],
  ['MDN: Window', 'https://developer.mozilla.org/en-US/docs/Web/API/Window'],
  ['MDN: Web APIs', 'https://developer.mozilla.org/en-US/docs/Web/API'],
  [
    'MDN: Event object',
    'https://developer.mozilla.org/en-US/docs/Web/API/Event',
  ],
];

const bonuses = [
  [
    'Read through MDN JavaScript Basics',
    'https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics',
  ],
  [
    "Start Code Academy's Introduction to JavaScript",
    'https://www.codecademy.com/learn/introduction-to-javascript',
  ],
];

const weekConfig = {
  firstLessonTitle: 'Intro to JavaScript',
  bonuses,
  resources,
  secondLessonTitle: 'Document Object Model (DOM)',
  weekNumber: 5,
};

const Week5 = () => <Week {...weekConfig} />;

export default Week5;
