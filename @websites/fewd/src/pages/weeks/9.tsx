import Week from '../../components/week';

const resources = [
  ['Sass website', 'http://sass-lang.com/'],
  ['Less website', 'http://lesscss.org/'],
  ['Stylus website', 'http://stylus-lang.com/'],
  [
    'Creative Bloq: Which is the best CSS preprocessor?',
    'https://www.creativebloq.com/features/best-css-preprocessor',
  ],
  [
    'Sitepoint: 6 Current Options for CSS Preprocessors',
    'https://www.sitepoint.com/6-current-options-css-preprocessors/',
  ],
  ['BEM', 'http://getbem.com/'],

  ['SVG on the web', 'https://svgontheweb.com/'],
  [
    'MDN: SVG and CSS',
    'https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Getting_started/SVG_and_CSS',
  ],
  ['CSS Tricks: Using SVG', 'https://css-tricks.com/using-svg/'],
  [
    'MDN: Accessibility',
    'https://developer.mozilla.org/en-US/docs/Learn/Accessibility',
  ],
  ['WebAIM:  Web accessibility resources', 'https://webaim.org/resources/'],
  [
    'Deque University: Accessibility Resources and Code Examples',
    'https://dequeuniversity.com/resources/',
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
  [
    'Complete Egghead course: Start Building Accessible Web Applications Today',
    'https://egghead.io/courses/start-building-accessible-web-applications-today',
  ],
];

const weekConfig = {
  bonuses,
  firstLessonTitle: 'Git & Sass',
  resources,
  secondLessonTitle: 'SVG and Accessibility',
  weekNumber: 9,
};

const Week9 = () => <Week {...weekConfig} />;

export default Week9;
