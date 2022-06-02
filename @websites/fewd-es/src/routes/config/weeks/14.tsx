import { SlidesDeck, Title } from '@shared/components';
import { RoutesByWeek } from '../../../@types/routes';
import { COURSE_NAME, getLessonPath } from '../../../lib/get-lesson-path';

const weekNumber = 14;

export const week14Route: RoutesByWeek = {
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
      'React JS Tutorial - Nesting Components #6',
      'https://www.youtube.com/watch?v=7VOko6eXb8s',
    ],
    [
      "A quick intro to React's props.children",
      'https://codeburst.io/a-quick-intro-to-reacts-props-children-cb3d2fce4891',
    ],
    [
      'Thinking In React - ReactJS',
      'https://reactjs.org/docs/thinking-in-react.html',
    ],
  ],
};
