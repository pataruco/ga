import { SlidesDeck, Title } from '@shared/components';
import { RoutesByWeek } from '../../../@types/routes';
import { COURSE_NAME, getLessonPath } from '../../../lib/get-lesson-path';

const weekNumber = 13;

export const week13Route: RoutesByWeek = {
  weekNumber,
  lesson1: {
    name: 'Inmutabilidad y plantillas',
    path: `/lessons/immutability-templating`,
    element: () => (
      <>
        <Title
          courseName={COURSE_NAME}
          week={weekNumber}
          title="Inmutabilidad y plantillas"
        />
        <SlidesDeck
          slidesDeckPath={getLessonPath('25-immutability-templating')}
        />
      </>
    ),
  },
  lesson2: {
    name: 'Intro a React',
    path: `/lessons/intro-to-react`,
    element: () => (
      <>
        <Title
          courseName={COURSE_NAME}
          week={weekNumber}
          title="Intro a React"
        />
        <SlidesDeck slidesDeckPath={getLessonPath('26-intro-to-react')} />
      </>
    ),
  },
  workshops: {
    name: 'React static page ⚛',
    path: '/lessons/intro-to-react#29',
  },
  homework: {
    name: 'React static page ⚛',
    path: '/lessons/intro-to-react#30',
  },
  resources: [
    [
      'Immutability in JavaScript',
      'https://www.sitepoint.com/immutability-javascript/',
    ],
    [
      'Pure javascript immutable arrays',
      'https://vincent.billey.me/pure-javascript-immutable-array/',
    ],

    ['React Homepage', 'https://facebook.github.io/react/'],
    [
      'Hello World - React',
      'https://facebook.github.io/react/docs/hello-world.html',
    ],
    [
      'Setup a React Environment Using webpack and Babel',
      'https://scotch.io/tutorials/setup-a-react-environment-using-webpack-and-babel',
    ],
  ],
};
