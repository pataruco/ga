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
      'React Router v6 Tutorial',
      'https://reactrouter.com/docs/en/v6/getting-started/tutorial',
    ],
    [
      'Practical Guide to React and CSS Modules',
      'https://www.triplet.fi/blog/practical-guide-to-react-and-css-modules/',
    ],
    [
      'Styled Components: Enforcing Best Practices In Component-Based Systems',
      'https://www.smashingmagazine.com/2017/01/styled-components-enforcing-best-practices-component-based-systems/',
    ],
    [
      'Cartoon intro to Redux',
      'https://code-cartoons.com/articles/a-cartoon-intro-to-redux/',
    ],
  ],
};
