import { SlidesDeck, Title } from '@shared/components';
import { RoutesByWeek } from '../../../@types/routes';
import { COURSE_NAME, getLessonPath } from '../../../lib/get-lesson-path';

const weekNumber = 10;

export const week10Route: RoutesByWeek = {
  weekNumber,
  lesson1: {
    name: 'User interface libraries and final presentations lab 🧪',
    path: `/lessons/ui-libraries`,
    element: () => (
      <>
        <Title
          courseName={COURSE_NAME}
          week={weekNumber}
          title="User interface libraries and final presentations lab 🧪"
        />
        <SlidesDeck slidesDeckPath={getLessonPath('19-bootstrap')} />
      </>
    ),
  },
  lesson2: {
    name: 'Final presentations 🚀',
    path: `/lessons/final-presentations`,
    element: () => (
      <>
        <Title
          courseName={COURSE_NAME}
          week={weekNumber}
          title="Final presentations 🚀"
        />
        <SlidesDeck slidesDeckPath={getLessonPath('20-final-presentations')} />
      </>
    ),
  },
  resources: [
    ['Bootstrap', 'https://getbootstrap.com/'],
    ['Foundation', 'https://foundation.zurb.com/'],
    ['Bulma', 'https://bulma.io/'],
    ['Tailwind CSS', 'https://tailwindcss.com/'],
    [
      'State of CSS 2020: Ranking of CSS frameworks',
      'https://2020.stateofcss.com/en-US/technologies/css-frameworks/',
    ],
  ],
};
