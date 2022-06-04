import { SlidesDeck, Title } from '@shared/components';
import { RoutesByWeek } from '../../../@types/routes';
import { COURSE_NAME, getLessonPath } from '../../../lib/get-lesson-path';

const weekNumber = 17;

export const week17Route: RoutesByWeek = {
  weekNumber,
  lesson1: {
    name: 'Tests',
    path: `/lessons/testing`,
    element: () => (
      <>
        <Title courseName={COURSE_NAME} week={weekNumber} title="Tests" />
        <SlidesDeck slidesDeckPath={getLessonPath('31-testing')} />
      </>
    ),
  },
  lesson2: {
    name: 'E2E testing lab',
    path: `/lessons/e2e-testing`,
    element: () => (
      <>
        <Title
          courseName={COURSE_NAME}
          week={weekNumber}
          title="E2E testing lab"
        />
        <SlidesDeck slidesDeckPath={getLessonPath('32-e2e-testing')} />
      </>
    ),
  },
  workshops: {
    name: '	Tiempo para proyecto final',
    path: '/lessons/e2e-testing#3',
  },
  homework: {
    name: 'Tiempo para proyecto final',
    path: '/lessons/e2e-testing#4',
  },
  resources: [
    ['Learn TypeScript', 'https://www.tutorialspoint.com/typescript/index.htm'],
    [
      'TypeScript Course for Beginners 2020 - Learn TypeScript from Scratch!',
      'https://www.youtube.com/watch?v=BwuLxPH8IDs',
    ],
  ],
};
