import Week from '../../components/week';

const resources = [
  [
    'JavaScript Object Basics',
    'https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics',
  ],
  [
    'Objects - The Modern JavaScript Tutorial',
    'https://javascript.info/object',
  ],
  [
    'Back To Basics: JavaScript Object Syntax',
    'https://www.sitepoint.com/back-to-basics-javascript-object-syntax/',
  ],
  [
    'JSON',
    'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON',
  ],
  [
    'MDN Using NPM',
    'https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/development_environment#using_npm',
  ],
  [
    'JavaScript modules',
    'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules',
  ],
];

const bonuses = [
  [
    'Working with Environment Variables in Node.js',
    'https://www.twilio.com/blog/2017/08/working-with-environment-variables-in-node-js.html',
  ],
];

const weekConfig = {
  bonuses,
  firstLessonTitle: 'Objects and JSON',
  resources,
  secondLessonTitle: 'Slack Bot lab 🤖 🧪',
  weekNumber: 3,
  homeworkPath: '/week-3/lesson-5#4',
};

const Week3 = () => <Week {...weekConfig} />;

export default Week3;
