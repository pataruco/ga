import Week from '../../components/week';

const resources = [
  [
    'MDN: intro to the DOM',
    'https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction',
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
  ['jQuery bonus lesson', 'https://jsd.pataruco.dev/bonus-lessons/jquery#1'],
];

const weekConfig = {
  resources,
  weekNumber: 4,
  firstLessonTitle: 'The DOM',
  secondLessonTitle: 'DOM Events',
  homeworkPath: '/week-4/lesson-7#14',
  bonuses,
};

const Week4 = () => <Week {...weekConfig} />;

export default Week4;
