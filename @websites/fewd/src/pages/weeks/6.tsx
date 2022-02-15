import Week from '../../components/week';

const resources = [
  [
    'MDN: JavaScript data types and data structures',
    'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures',
  ],
  [
    'MDN: Expressions and operators',
    'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators',
  ],
  [
    'MDN: Arithmetic operators',
    'https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators',
  ],
  [
    'MDN: Working with objects',
    'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects',
  ],
  [
    'MDN: Array',
    'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array',
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
  firstLessonTitle: 'Conditional statements',
  resources,
  secondLessonTitle: 'Arrays and loops',
  weekNumber: 6,
};

const Week6 = () => <Week {...weekConfig} />;

export default Week6;
