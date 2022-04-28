import { SlidesDeck, Title } from '@shared/components';
import { RoutesByWeek } from '../../../@types/routes';
import { COURSE_NAME, getLessonPath } from '../../../lib/get-lesson-path';

const weekNumber = 9;

export const week9Route: RoutesByWeek = {
  weekNumber,
  lesson1: {
    name: 'Arrays',
    path: `/lessons/arrays`,
    element: () => (
      <>
        <Title courseName={COURSE_NAME} week={weekNumber} title="Arrays" />
        <SlidesDeck slidesDeckPath={getLessonPath('17-arrays')} />
      </>
    ),
  },
  lesson2: {
    name: 'Funciones',
    path: `/lessons/functions`,
    element: () => (
      <>
        <Title courseName={COURSE_NAME} week={weekNumber} title="Funciones" />
        <SlidesDeck slidesDeckPath={getLessonPath('18-functions')} />
      </>
    ),
  },
};
