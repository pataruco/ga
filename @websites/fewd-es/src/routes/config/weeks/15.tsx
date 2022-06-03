import { SlidesDeck, Title } from '@shared/components';
import { RoutesByWeek } from '../../../@types/routes';
import { COURSE_NAME, getLessonPath } from '../../../lib/get-lesson-path';

const weekNumber = 15;

export const week15Route: RoutesByWeek = {
  weekNumber,
  lesson1: {
    name: 'Enrutado 🚦 y estilos en React 💅',
    path: `/lessons/react-routing-styled-components`,
    element: () => (
      <>
        <Title
          courseName={COURSE_NAME}
          week={weekNumber}
          title="Enrutado 🚦 y estilos en React 💅"
        />
        <SlidesDeck
          slidesDeckPath={getLessonPath('29-react-routing-styled-components')}
        />
      </>
    ),
  },
  lesson2: {
    name: 'Redux',
    path: `/lessons/redux`,
    element: () => (
      <>
        <Title courseName={COURSE_NAME} week={weekNumber} title="Redux" />
        <SlidesDeck slidesDeckPath={getLessonPath('30-redux')} />
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
