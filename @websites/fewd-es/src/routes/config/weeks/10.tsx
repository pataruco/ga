import { SlidesDeck, Title } from '@shared/components';
import { RoutesByWeek } from '../../../@types/routes';
import { COURSE_NAME, getLessonPath } from '../../../lib/get-lesson-path';

const weekNumber = 10;

export const week10Route: RoutesByWeek = {
  weekNumber,
  lesson1: {
    name: 'Objetos y Clases',
    path: `/lessons/objects-classes`,
    element: () => (
      <>
        <Title
          courseName={COURSE_NAME}
          week={weekNumber}
          title="Objetos y Clases"
        />
        <SlidesDeck slidesDeckPath={getLessonPath('19-objects-classes')} />
      </>
    ),
  },
  lesson2: {
    name: 'El DOM',
    path: `/lessons/dom`,
    element: () => (
      <>
        <Title courseName={COURSE_NAME} week={weekNumber} title="El DOM" />
        <SlidesDeck slidesDeckPath={getLessonPath('20-intro-to-dom')} />
      </>
    ),
  },
  homework: {
    name: 'Ejercicio de objetos',
    path: '/lessons/dom#14',
  },
  workshops: {
    name: 'Tiempo para proyecto y/o tarea',
    path: '/lessons/dom#13',
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
    ['CSS Tricks: Qué es el DOM', 'https://css-tricks.com/dom/'],
    [
      'MDN: Introducción al DOM',
      'https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction',
    ],
    [
      'Entender y modificar el DOM en JavaScript',
      'https://www.digitalocean.com/community/tutorials/introduction-to-the-dom',
    ],
  ],
};
