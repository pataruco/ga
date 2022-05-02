import { SlidesDeck, Title } from '@shared/components';
import { RoutesByWeek } from '../../../@types/routes';
import { COURSE_NAME, getLessonPath } from '../../../lib/get-lesson-path';

const weekNumber = 11;

export const week11Route: RoutesByWeek = {
  weekNumber,
  lesson1: {
    name: 'Eventos en el DOM',
    path: `/lessons/dom-events`,
    element: () => (
      <>
        <Title
          courseName={COURSE_NAME}
          week={weekNumber}
          title="Eventos en el DOM"
        />
        <SlidesDeck slidesDeckPath={getLessonPath('21-dom-events')} />
      </>
    ),
  },
  lesson2: {
    name: 'Audio en HTML',
    path: `/lessons/html-audio`,
    element: () => (
      <>
        <Title
          courseName={COURSE_NAME}
          week={weekNumber}
          title="Audio en HTML"
        />
        <SlidesDeck slidesDeckPath={getLessonPath('22-html-audio')} />
      </>
    ),
  },
  workshops: {
    name: 'Tiempo para proyecto y/o tarea',
    path: '/lessons/html-audio#7',
  },
  homework: {
    name: 'Drum kit 🥁 ',
    path: '/lessons/html-audio#8',
  },
  resources: [
    [
      'MDN: Referencia de Eventos',
      'https://developer.mozilla.org/en-US/docs/Web/Events',
    ],
    [
      'MDN: Eventos y el DOM',
      'https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Events',
    ],
    [
      'Smashing Magazine: Introducción a Eventos en el DOM',
      'https://www.smashingmagazine.com/2013/11/an-introduction-to-dom-events',
    ],
    [
      'MDN: HTMLMediaElement',
      'https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement',
    ],
    [
      'Tutorial: HTML Audio',
      'https://tutorialehtml.com/en/html-tutorial-embed-audio',
    ],
    [
      'Tutorial: Create a Customized HTML5 Audio Player',
      'https://webdesign.tutsplus.com/tutorials/create-a-customized-html5-audio-player--webdesign-7081',
    ],
  ],
};
