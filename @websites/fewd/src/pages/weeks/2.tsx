import Week from '../../components/week';

const resources = [
  [
    'CSS Tricks: The CSS Box Model',
    'https://css-tricks.com/the-css-box-model/',
  ],
  [
    'MDN: Introduction to the Box model',
    'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model',
  ],
  [
    'MDN: Box sizing',
    'https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing',
  ],
  [
    'MDN: Margin collapse',
    'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Mastering_margin_collapsing',
  ],
  [
    'The revenge of the IE Box model',
    'https://www.jefftk.com/p/the-revenge-of-the-ie-box-model',
  ],
  [
    'CSS Tricks:  What you should know about collapsing margins',
    'https://css-tricks.com/what-you-should-know-about-collapsing-margins/',
  ],
  [
    'Sitepoint: Collapsing margins',
    'https://www.sitepoint.com/collapsing-margins/',
  ],
  [
    'MDN: Pseudo elements',
    'https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements',
  ],
  [
    'MDN: Pseudo classes',
    'https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes',
  ],
  [
    'CSS Tricks: :nth-child recipes',
    'https://css-tricks.com/useful-nth-child-recipies/',
  ],
  [
    'CSS Tricks: Child and Sibling Selectors',
    'https://css-tricks.com/child-and-sibling-selectors/',
  ],
  [
    'MDN: CSS Specificty',
    'https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity',
  ],
  [
    'MDN: CSS Selectors',
    'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors',
  ],
];

const bonuses = [
  [
    'Read through opening the Box Model',
    'https://learn.shayhowe.com/html-css/opening-the-box-model/',
  ],
];

const weekConfig = {
  bonuses,
  firstLessonTitle: 'Box model',
  homeworkPath: '/week-2/lesson-4#22',
  resources,
  secondLessonTitle: 'CSS Selectors, Specificity & Floats',
  weekNumber: 2,
};

const Week2 = () => <Week {...weekConfig} />;

export default Week2;
