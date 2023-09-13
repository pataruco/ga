import { SlidesDeck, Title } from '@shared/components';
import { RoutesByWeek } from '../../../@types/routes';
import { COURSE_NAME, getLessonPath } from '../../../lib/get-lesson-path';

const weekNumber = 12;

export const week12Route: RoutesByWeek = {
  weekNumber,
  lesson1: {
    name: 'JavaScript asincrónico',
    path: `/lessons/async-js`,
    element: () => (
      <>
        <Title
          courseName={COURSE_NAME}
          week={weekNumber}
          title="JavaScript asincrónico"
        />
        <SlidesDeck slidesDeckPath={getLessonPath('23-async-js')} />
      </>
    ),
  },
  lesson2: {
    name: 'Presentaciones de mitad de curso',
    path: `/lessons/mid-course-presentations`,
    element: () => (
      <>
        <Title
          courseName={COURSE_NAME}
          week={weekNumber}
          title="Presentaciones de mitad de curso"
        />
        <SlidesDeck
          slidesDeckPath={getLessonPath('24-mid-course-presentations')}
        />
      </>
    ),
  },
  workshops: {
    name: 'Bandera de paises 🇺🇳',
    path: '/lessons/mid-course-presentations#4',
  },
  homework: {
    name: 'Bandera de paises 🇺🇳',
    path: '/lessons/mid-course-presentations#5',
  },
  resources: [
    ['Qué es REST?', 'https://restfulapi.net/'],
    [
      'REST API conceptos y ejemplos',
      'https://www.youtube.com/watch?v=7YcW25PHnAA',
    ],
  ],
};
