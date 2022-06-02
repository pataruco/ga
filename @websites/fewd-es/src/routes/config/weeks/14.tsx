import { SlidesDeck, Title } from '@shared/components';
import { RoutesByWeek } from '../../../@types/routes';
import { COURSE_NAME, getLessonPath } from '../../../lib/get-lesson-path';

const weekNumber = 14;

export const week14Route: RoutesByWeek = {
  weekNumber,
  lesson1: {
    name: 'Componentes de React',
    path: `/lessons/react-components`,
    element: () => (
      <>
        <Title
          courseName={COURSE_NAME}
          week={weekNumber}
          title="Componentes de React"
        />
        <SlidesDeck slidesDeckPath={getLessonPath('27-react-components')} />
      </>
    ),
  },
  lesson2: {
    name: 'Country flags lab 🧪',
    path: `/lessons/react-country-flags-lab`,
    element: () => (
      <>
        <Title
          courseName={COURSE_NAME}
          week={weekNumber}
          title="Country flags lab 🧪"
        />
        <SlidesDeck
          slidesDeckPath={getLessonPath('28-react-country-flags-lab')}
        />
      </>
    ),
  },
  workshops: {
    name: 'React 🪨, 📃, ✂️',
    path: '/lessons/react-country-flags-lab#3',
  },
  homework: {
    name: 'React 🪨, 📃, ✂️',
    path: '/lessons/react-country-flags-lab#4',
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
