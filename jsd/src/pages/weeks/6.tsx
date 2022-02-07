import Week from '../../components/week';

const resources = [
  [
    'MDN: JavaScript data types and data structures',
    'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures',
  ],
  [
    "A beginner's guide to HTTP and REST",
    'http://code.tutsplus.com/tutorials/a-beginners-guide-to-http-and-rest--net-16340',
  ],
  [
    'Async JS Callbacks',
    'http://sporto.github.io/blog/2012/12/09/callbacks-listeners-promises/',
  ],
];

const weekConfig = {
  firstLessonTitle: 'Templating lab 🧪',
  resources,
  secondLessonTitle: 'Feedr Lab',
  weekNumber: 6,
};

const Week6 = () => <Week {...weekConfig} />;

export default Week6;
