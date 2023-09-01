import { getLessonsHomeworksLinks } from '../../libs/get-lessons-homeworks-links';

const weekNumber = 6;

export const week6: Week = {
  weekNumber,
  ...getLessonsHomeworksLinks(weekNumber),
  resources: [
    {
      content: 'MDN: JavaScript data types and data structures',
      link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures',
    },
    {
      content: 'MDN: Expressions and operators',
      link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators',
    },
    {
      content: 'MDN: Arithmetic operators',
      link: 'https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators',
    },
    {
      content: 'MDN: Working with objects',
      link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects',
    },
    {
      content: 'MDN: Array',
      link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array',
    },
    {
      content: 'MDN: Equality comparisons and sameness',
      link: 'https://developer.mozilla.org/en/docs/Web/JavaScript/Equality_comparisons_and_sameness',
    },
    {
      content: 'JavaScript equality table',
      link: 'https://dorey.github.io/JavaScript-Equality-Table/',
    },
    {
      content: 'MDN: Logical operators',
      link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_Operators',
    },
    {
      content: 'Tuts+: What is type coercion?',
      link: 'https://code.tutsplus.com/articles/the-beginners-guide-to-type-coercion-what-is-coercion--cms-21917',
    },
  ],
};

export default week6;
