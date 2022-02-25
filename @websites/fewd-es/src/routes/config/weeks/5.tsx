import { SlidesDeck, Title } from '@shared/components';
import { RoutesByWeek } from '../../../@types/routes';
import { COURSE_NAME, getLessonPath } from '../../../lib/get-lesson-path';

const weekNumber = 5;

export const week5Route: RoutesByWeek = {
  weekNumber,
  lesson1: {
    name: 'Grids',
    path: `/week-${weekNumber}/grids`,
    element: () => (
      <>
        <Title courseName={COURSE_NAME} week={weekNumber} title="Grids" />
        <SlidesDeck slidesDeckPath={getLessonPath('09-grids')} />
      </>
    ),
  },
  lesson2: {
    name: 'Positioning',
    path: `/week-${weekNumber}/positioning`,
    element: () => (
      <>
        <Title courseName={COURSE_NAME} week={weekNumber} title="Positioning" />
        <SlidesDeck slidesDeckPath={getLessonPath('10-positioning')} />
      </>
    ),
  },
  workshops: {
    name: 'Grids, Flying grids, grid page',
    path: `/week-${weekNumber}/positioning#15`,
  },
  homework: {
    name: 'Startup matchmaker',
    path: `/week-${weekNumber}/positioning#16`,
  },
  resources: [
    [
      'A List Apart: CSS positioning 101',
      'http://alistapart.com/article/css-positioning-101',
    ],
  ],
};
