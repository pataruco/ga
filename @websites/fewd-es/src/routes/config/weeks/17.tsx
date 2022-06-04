import { SlidesDeck, Title } from '@shared/components';
import { RoutesByWeek } from '../../../@types/routes';
import { COURSE_NAME, getLessonPath } from '../../../lib/get-lesson-path';

const weekNumber = 17;

export const week17Route: RoutesByWeek = {
  weekNumber,
  lesson1: {
    name: 'NextJS',
    path: `/lessons/nextjs`,
    element: () => (
      <>
        <Title courseName={COURSE_NAME} week={weekNumber} title="NextJS" />
        <SlidesDeck slidesDeckPath={getLessonPath('33-nextjs')} />
      </>
    ),
  },
  lesson2: {
    name: 'TypeScript',
    path: `/lessons/typescript`,
    element: () => (
      <>
        <Title courseName={COURSE_NAME} week={weekNumber} title="TypeScript" />
        <SlidesDeck slidesDeckPath={getLessonPath('34-typescript')} />
      </>
    ),
  },
  workshops: {
    name: '	Tiempo para proyecto final',
    path: '/lessons/typescript#40',
  },
  homework: {
    name: 'Tiempo para proyecto final',
    path: '/lessons/typescript#41',
  },
  resources: [
    ['Learn TypeScript', 'https://www.tutorialspoint.com/typescript/index.htm'],
    [
      'TypeScript Course for Beginners 2020 - Learn TypeScript from Scratch!',
      'https://www.youtube.com/watch?v=BwuLxPH8IDs',
    ],
  ],
};
