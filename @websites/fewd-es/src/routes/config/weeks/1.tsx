import { SlidesDeck, Title } from '@shared/components';
import { RoutesByWeek } from '../../../@types/routes';
import { COURSE_NAME, getLessonPath } from '../../../lib/get-lesson-path';

const weekNumber = 1;

export const week1Route: RoutesByWeek = {
  weekNumber,
  lesson1: {
    name: 'Bienvenida y orientación',
    path: `/week-${weekNumber}/intro-to-html`,
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
    path: `/week-${weekNumber}/installfest`,
    element: () => (
      <>
        <Title courseName={COURSE_NAME} week={weekNumber} title="Installfest" />
        <SlidesDeck slidesDeckPath={getLessonPath('02-installfest')} />
      </>
    ),
  },
  workshops: {
    name: 'Installfest',
    path: `/week-${weekNumber}/installfest`,
  },
};
