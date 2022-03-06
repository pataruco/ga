import { SlidesDeck, Title } from '@shared/components';
import { RoutesByWeek } from '../../../@types/routes';
import { COURSE_NAME, getLessonPath } from '../../../lib/get-lesson-path';

const weekNumber = 1;

export const week1Route: RoutesByWeek = {
  weekNumber,
  lesson1: {
    name: 'Bienvenida y orientación',
    path: `/lessons/intro-to-html`,
    element: () => (
      <>
        <Title
          courseName={COURSE_NAME}
          week={weekNumber}
          title="Bienvenida y orientación"
        />
        <SlidesDeck slidesDeckPath={getLessonPath('01-welcome')} />
      </>
    ),
  },
  lesson2: {
    name: 'Installfest',
    path: `/lessons/installfest`,
    element: () => (
      <>
        <Title courseName={COURSE_NAME} week={weekNumber} title="Installfest" />
        <SlidesDeck slidesDeckPath={getLessonPath('02-installfest')} />
      </>
    ),
  },
  workshops: {
    name: 'Installfest',
    path: `/lessons/installfest`,
  },
  resources: [
    [
      'Visual Studio Code, Getting Started ',
      'https://code.visualstudio.com/docs',
    ],
    [
      'Invention of Internet',
      'https://www.history.com/topics/inventions/invention-of-the-internet',
    ],
    [
      'An overview of HTTP',
      'https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview',
    ],
  ],
};
