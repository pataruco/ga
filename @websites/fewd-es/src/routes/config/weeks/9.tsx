import { SlidesDeck, Title } from '@shared/components';
import { RoutesByWeek } from '../../../@types/routes';
import { COURSE_NAME, getLessonPath } from '../../../lib/get-lesson-path';

const weekNumber = 9;

export const week9Route: RoutesByWeek = {
  weekNumber,
  lesson1: {
    name: 'Arrays',
    path: `/lessons/arrays`,
    element: () => (
      <>
        <Title courseName={COURSE_NAME} week={weekNumber} title="Arrays" />
        <SlidesDeck slidesDeckPath={getLessonPath('17-arrays')} />
      </>
    ),
  },
  lesson2: {
    name: 'Funciones',
    path: `/lessons/functions`,
    element: () => (
      <>
        <Title courseName={COURSE_NAME} week={weekNumber} title="Funciones" />
        <SlidesDeck slidesDeckPath={getLessonPath('18-functions')} />
      </>
    ),
  },
  homework: {
    name: 'Problemas de funciones y arrays',
    path: '/lessons/functions#28',
  },
  workshops: {
    name: 'Fizz buzz, 99 bottles, random address',
    path: '/lessons/functions#27',
  },
  resources: [
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
  ],
};
