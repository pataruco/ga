import Week from '../../components/week';

const resources = [
  [
    'MDN: transform',
    'https://developer.mozilla.org/en-US/docs/Web/CSS/transform',
  ],
  [
    'CSS Tricks: transform',
    'https://css-tricks.com/almanac/properties/t/transform/',
  ],
  [
    'MDN: Using CSS transitions',
    'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions',
  ],
  [
    'CSS3 = Awesome: Transitions',
    'http://css3.bradshawenterprises.com/transitions/',
  ],
  [
    'CSS Animations Guide: CSS animations guide',
    'https://www.smashingmagazine.com/2011/09/the-guide-to-css-animation-principles-and-examples/',
  ],
  [
    'CSS Tricks: Perspective',
    'https://css-tricks.com/almanac/properties/p/perspective/',
  ],

  [
    'MDN: Using CSS animations',
    'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations/Using_CSS_animations',
  ],
];

const bonuses = [
  [
    "Read Shay Howe's CSS Transforms",
    'http://learn.shayhowe.com/advanced-html-css/css-transforms/',
  ],
  [
    "Read Shay Howe's transitions and animations",
    'http://learn.shayhowe.com/advanced-html-css/transitions-animations/',
  ],
];

const weekConfig = {
  bonuses,
  firstLessonTitle: 'Animations, transitions, effects',
  resources,
  secondLessonTitle: 'JavaScript plugins',
  weekNumber: 7,
};

const Week7 = () => <Week {...weekConfig} />;

export default Week7;
