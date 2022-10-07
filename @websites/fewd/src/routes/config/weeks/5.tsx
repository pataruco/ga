import { SlidesDeck, Title } from '@shared/components';
import { RoutesByWeek } from '../../../@types/routes';
import { COURSE_NAME, getLessonPath } from '../../../lib/get-lesson-path';

const weekNumber = 5;

export const week5Route: RoutesByWeek = {
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
        <SlidesDeck slidesDeckPath={getLessonPath('09-intro-to-js')} />
      </>
    ),
  },
  lesson2: {
    name: 'Document Object Model (DOM)',
    path: `/lessons/dom`,
    element: () => (
      <>
        <Title
          courseName={COURSE_NAME}
          week={weekNumber}
          title="Document Object Model (DOM)"
        />
        <SlidesDeck
          slidesDeckPath={getLessonPath('10-document-object-model')}
        />
      </>
    ),
  },
  // homework: {
  //   name: 'Responsive Web development',
  //   path: `/lessons/dom`,
  // },
  resources: [
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
      'https://stackoverflow.com/questions/2717949/when-should-i-use-a-semicolon-after-curly-braces',
    ],
    [
      'MDN: Document',
      'https://developer.mozilla.org/en-US/docs/Web/API/Document',
    ],
    ['MDN: Window', 'https://developer.mozilla.org/en-US/docs/Web/API/Window'],
    ['MDN: Web APIs', 'https://developer.mozilla.org/en-US/docs/Web/API'],
    [
      'MDN: Event object',
      'https://developer.mozilla.org/en-US/docs/Web/API/Event',
    ],
    [
      'Read through MDN JavaScript Basics',
      'https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics',
    ],
    [
      "Start Code Academy's Introduction to JavaScript",
      'https://www.codecademy.com/learn/introduction-to-javascript',
    ],
  ],
};
