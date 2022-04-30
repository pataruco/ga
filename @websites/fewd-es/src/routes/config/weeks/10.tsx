import { SlidesDeck, Title } from '@shared/components';
import { RoutesByWeek } from '../../../@types/routes';
import { COURSE_NAME, getLessonPath } from '../../../lib/get-lesson-path';

const weekNumber = 10;

export const week10Route: RoutesByWeek = {
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
      'MDN: Objects',
      '(https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object',
    ],
    [
      'MDN: Intro to Object-Orientated Javascript',
      'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Introduction_to_Object-Oriented_JavaScript',
    ],
    [
      'MDN: Objects in JavaScript',
      'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects',
    ],
    [
      'MDN: ES6 Classes',
      'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes',
    ],
  ],
};
