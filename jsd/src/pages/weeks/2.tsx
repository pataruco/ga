import Week from '../../components/week';

const resources = [
  [
    'MDN: Array',
    'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array',
  ],
  [
    'MDN: Expressions and operators',
    'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators',
  ],
  [
    'MDN: Equality comparisons and sameness',
    'https://developer.mozilla.org/en/docs/Web/JavaScript/Equality_comparisons_and_sameness',
  ],
  [
    'JavaScript equality table',
    'https://dorey.github.io/JavaScript-Equality-Table/',
  ],
  [
    'MDN: Logical operators',
    'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_Operators',
  ],
  [
    'Tuts+: What is type coercion?',
    'http://code.tutsplus.com/articles/the-beginners-guide-to-type-coercion-what-is-coercion--cms-21917',
  ],
];

const weekConfig = {
  firstLessonTitle: 'Arrays & loops',
  homeworkPath: '/week-2/lesson-3#21',
  resources,
  secondLessonTitle: 'Functions, scope & conditionals',
  weekNumber: 2,
};

const Week2 = () => <Week {...weekConfig} />;

export default Week2;
