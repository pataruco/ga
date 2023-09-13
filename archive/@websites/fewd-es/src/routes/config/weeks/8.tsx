import { SlidesDeck, Title } from '@shared/components';
import { RoutesByWeek } from '../../../@types/routes';
import { COURSE_NAME, getLessonPath } from '../../../lib/get-lesson-path';

const weekNumber = 8;

export const week8Route: RoutesByWeek = {
  weekNumber,
  lesson1: {
    name: 'Intro to JavaScript',
    path: `/lessons/intro-to-js`,
    element: () => (
      <>
        <Title
          courseName={COURSE_NAME}
          week={weekNumber}
          title="Intro to JavaScript"
        />
        <SlidesDeck slidesDeckPath={getLessonPath('15-intro-to-js')} />
      </>
    ),
  },
  lesson2: {
    name: 'Control de flujo',
    path: `/lessons/control-flow`,
    element: () => (
      <>
        <Title
          courseName={COURSE_NAME}
          week={weekNumber}
          title="Control de flujo"
        />
        <SlidesDeck slidesDeckPath={getLessonPath('16-control-flow')} />
      </>
    ),
  },
  workshops: {
    name: 'Intro to JavaScript',
    path: `/lessons/control-flow#29`,
  },
  homework: {
    name: 'JavaScript Calculator 🧮',
    path: `/lessons/control-flow#30`,
  },
  resources: [
    [
      'What is Pseudocode? How to Use Pseudocode to Solve Coding Problems',
      'https://www.freecodecamp.org/news/what-is-pseudocode-in-programming',
    ],
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
      'Tuts+: What is type coercion?',
      'http://code.tutsplus.com/articles/the-beginners-guide-to-type-coercion-what-is-coercion--cms-21917',
    ],
    [
      'MDN: JavaScript Introduction',
      'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Introduction',
    ],
    [
      'MDN: Learning JavaScript',
      'https://developer.mozilla.org/en-US/Learn/JavaScript',
    ],
    [
      'Stack Overflow: When should I use a semicolon after curly braces?',
      'http://stackoverflow.com/questions/2717949/when-should-i-use-a-semicolon-after-curly-braces',
    ],
  ],
};
