import Week from '../../components/week';

const resources = [
  [
    'MDN: Sending form data',
    'https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms/Sending_and_retrieving_form_data',
  ],
  [
    'MDN: Using Fetch',
    'https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch',
  ],
  [
    'MDN: Using Promises',
    'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises',
  ],
  [
    'MDN: try...catch',
    'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch',
  ],
];

const bonuses = [
  [
    'We have a problem with promises ',
    'https://pouchdb.com/2015/05/18/we-have-a-problem-with-promises.html',
  ],
];

const weekConfig = {
  bonuses,
  firstLessonTitle: 'Asynchronous programming',
  homeworkPath: '/week-5/lesson-9#7',
  resources,
  secondLessonTitle: 'TfL API Lab 🚇 🧪',
  weekNumber: 5,
};

const Week5 = () => <Week {...weekConfig} />;

export default Week5;
