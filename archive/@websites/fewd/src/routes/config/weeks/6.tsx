import { SlidesDeck, Title } from '@shared/components';
import { RoutesByWeek } from '../../../@types/routes';
import { COURSE_NAME, getLessonPath } from '../../../lib/get-lesson-path';

const weekNumber = 6;

export const week6Route: RoutesByWeek = {
  weekNumber,
  lesson1: {
    name: 'Conditional statements',
    path: `/lessons/conditional-statements`,
    element: () => (
      <>
        <Title
          courseName={COURSE_NAME}
          week={weekNumber}
          title="Conditional statements"
        />
        <SlidesDeck
          slidesDeckPath={getLessonPath('11-conditional-statements')}
        />
      </>
    ),
  },
  lesson2: {
    name: 'Arrays and loops',
    path: `/lessons/arrays-loops`,
    element: () => (
      <>
        <Title
          courseName={COURSE_NAME}
          week={weekNumber}
          title="Arrays and loops"
        />
        <SlidesDeck slidesDeckPath={getLessonPath('12-arrays-loops')} />
      </>
    ),
  },
  resources: [
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
      'https://code.tutsplus.com/articles/the-beginners-guide-to-type-coercion-what-is-coercion--cms-21917',
    ],
  ],
};
