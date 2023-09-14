import { SlidesDeck, Title } from '@shared/components';
import { lazy, Suspense } from 'react';
import type { LessonRoute } from '../../../@types/routes';
import { getLessonPath, COURSE_NAME } from '../../../lib/get-lesson-path';
import Loading from '../../../pages/loading';

// Bonus lessons pags
// Path: //bonus-lessons
export const BonusLessonsRoute = {
  path: '/bonus-lessons',
  element: () => {
    const Content = lazy(() => import('../../../pages/bonus-lessons'));
    return (
      <>
        <Title courseName={COURSE_NAME} title="Bonus Lessons" />
        <Suspense fallback={<Loading />}>
          <Content />
        </Suspense>
      </>
    );
  },
};

export const bonusLessonRoutes: LessonRoute[] = [
  {
    name: 'CSS Grids',
    path: '/bonus-lessons/bonus-lesson-grids',
    element() {
      return (
        <>
          <Title courseName={COURSE_NAME} title="CSS Grids" />
          <SlidesDeck slidesDeckPath={getLessonPath('bonus-lesson-grids')} />
        </>
      );
    },
  },
  {
    name: 'JavaScript history',
    path: '/bonus-lessons/bonus-lesson-js-history',
    element() {
      return (
        <>
          <Title courseName={COURSE_NAME} title="JavaScript history" />
          <SlidesDeck
            slidesDeckPath={getLessonPath('bonus-lesson-js-history')}
          />
        </>
      );
    },
  },
  {
    name: 'HTML Table',
    path: '/bonus-lessons/tables',
    element() {
      return (
        <>
          <Title courseName={COURSE_NAME} title="Bonus Lesson | HTML Table" />
          <SlidesDeck slidesDeckPath={getLessonPath('bonus-lesson-tables')} />
        </>
      );
    },
  },
];
