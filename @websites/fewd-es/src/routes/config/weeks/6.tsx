import { SlidesDeck, Title } from '@shared/components';
import { RoutesByWeek } from '../../../@types/routes';
import { COURSE_NAME, getLessonPath } from '../../../lib/get-lesson-path';

const weekNumber = 6;

export const week6Route: RoutesByWeek = {
  weekNumber,
  lesson1: {
    name: 'Desarrollo Web responsivo',
    path: `/week-${weekNumber}/responsive-web-development`,
    element: () => (
      <>
        <Title
          courseName={COURSE_NAME}
          week={weekNumber}
          title="Responsive Web development"
        />
        <SlidesDeck
          slidesDeckPath={getLessonPath('11-responsive-web-development')}
        />
      </>
    ),
  },
  lesson2: {
    name: 'Formularios',
    path: `/week-${weekNumber}/forms`,
    element: () => (
      <>
        <Title courseName={COURSE_NAME} week={weekNumber} title="Forms" />
        <SlidesDeck slidesDeckPath={getLessonPath('12-forms')} />
      </>
    ),
  },
};
