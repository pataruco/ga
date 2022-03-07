import Week from '../../components/week';

const resources = [
  [
    'CSS Tricks: Complete Guide to Flexbox',
    'https://css-tricks.com/snippets/css/a-guide-to-flexbox/',
  ],
  [
    'Scotch: Visual Guide to CSS3 Flexbox',
    'https://scotch.io/tutorials/a-visual-guide-to-css3-flexbox-properties',
  ],
  [
    'Interneting is Hard: Flexbox',
    'https://internetingishard.com/html-and-css/flexbox/',
  ],
  [
    'MDN: Flexbox',
    'https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox',
  ],
  ['Flexbox Froggy 🐸', 'http://flexboxfroggy.com/'],
  [
    'Detailed CSS positioning',
    'https://learn.shayhowe.com/advanced-html-css/detailed-css-positioning/',
  ],
  [
    'A List Apart: CSS positioning 101',
    'https://alistapart.com/article/css-positioning-101',
  ],
];

const bonuses = [
  [
    "Complete Code Academy's Learn Git course",
    'https://www.codecademy.com/learn/learn-git',
  ],
];

const weekConfig = {
  bonuses,
  firstLessonTitle: 'Flexbox',
  resources,
  secondLessonTitle: 'Positioning',
  weekNumber: 3,
  homeworkPath: '/week-3/lesson-6#27',
};

const Week3 = () => <Week {...weekConfig} />;

export default Week3;
