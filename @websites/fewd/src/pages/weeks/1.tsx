import Week from '../../components/week';

const resources = [
  ['Intro to HTML', 'https://developer.mozilla.org/en-US/docs/Web/HTML'],
  [
    'Intro to HTML 5',
    'https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5',
  ],
  [
    'History of the Web',
    'https://webfoundation.org/about/vision/history-of-the-web/',
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
    'How CSS works?',
    'https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/How_CSS_works',
  ],
  ['Intro to CSS', 'https://developer.mozilla.org/en-US/docs/Web/CSS'],
  ['Intro to CSS 3', 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS3'],
  [
    'Intro to Document Object Model (DOM)',
    'https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction',
  ],
  [
    "The Difference Between 'Block' and 'Inline'",
    'https://www.impressivewebs.com/difference-block-inline-css/',
  ],
  [
    'MDN: Block-level elements',
    'https://developer.mozilla.org/en/docs/Web/HTML/Block-level_elements',
  ],
  [
    'MDN: Inline elements',
    'https://developer.mozilla.org/en-US/docs/Web/HTML/Inline_elements',
  ],
  ['MDN: CSS is weird 📽', 'https://youtu.be/aHUtMbJw8iA'],
];

const bonuses = [
  [
    "Complete a challenge that you haven't done yet on",
    'https://learn.shayhowe.com/html-css/getting-to-know-html/',
  ],

  [
    'Read through Getting to know CSS',
    'https://learn.shayhowe.com/html-css/getting-to-know-css/',
  ],
];

const weekConfig = {
  weekNumber: 1,
  resources: resources,
  bonuses: bonuses,
  firstLessonTitle: 'Orientation and introduction to HTML',
  secondLessonTitle: 'Advanced HTML & Intro to CSS',
  homeworkPath: '/week-1/lesson-2#43',
};

const Week1 = () => <Week {...weekConfig} />;

export default Week1;
